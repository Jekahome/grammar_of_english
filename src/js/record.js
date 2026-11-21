 'use strict';

/**
 * Records microphone audio and stops automatically after a pause.
 * The caller supplies only the generated HTMLAudioElement.
 * Speech recognition stays in the existing EditorVoice class.
 */
class Record {
    #audio;
    #stream = null;
    #recorder = null;
    #context = null;
    #source = null;
    #analyser = null;
    #interval = null;
    #timeout = null;
    #url = null;
    #active = false;
    #destroyed = false;
    #session = 0;

    constructor(audioElement, {
        silenceMs = 1800,
        initialSilenceMs = 7000,
        maxDurationMs = 45000,
        threshold = 0.025
    } = {}) {
        if (!(audioElement instanceof HTMLAudioElement)) {
            throw new TypeError('Record requires an HTMLAudioElement');
        }
        this.#audio = audioElement;
        this.silenceMs = silenceMs;
        this.initialSilenceMs = initialSilenceMs;
        this.maxDurationMs = maxDurationMs;
        this.threshold = threshold;
    }

    async start() {
        if (this.#destroyed || this.#active) return;
        this.#active = true;
        const session = ++this.#session;
        let stream;
        try {
            if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
                throw new Error('Microphone recording is not supported in this browser/context');
            }
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (this.#destroyed || !this.#active || session !== this.#session) {
                stream.getTracks().forEach(track => track.stop());
                return;
            }
            this.#stream = stream;
            const chunks = [];
            const recorder = new MediaRecorder(stream);
            this.#recorder = recorder;
            const mimeType = recorder.mimeType;

            recorder.addEventListener('dataavailable', event => {
                if (event.data.size > 0) chunks.push(event.data);
            });
            recorder.addEventListener('stop', () => {
                if (!this.#destroyed && chunks.length && session === this.#session) {
                    const blob = new Blob(chunks, { type: mimeType || chunks[0].type });
                    if (this.#url) URL.revokeObjectURL(this.#url);
                    this.#url = URL.createObjectURL(blob);
                    this.#audio.src = this.#url;
                    this.#audio.style.display = 'block';
                    this.#audio.load();
                }
                this.#cleanupStream(stream);
            });

            // Start recording before analysing amplitude.
            recorder.start();
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) {
                this.#timeout = setTimeout(() => this.stop(), this.maxDurationMs);
                return;
            }
            this.#context = new AudioContextClass();
            await this.#context.resume();
            if (!this.#active || session !== this.#session) return;
            this.#source = this.#context.createMediaStreamSource(stream);
            this.#analyser = this.#context.createAnalyser();
            this.#analyser.fftSize = 2048;
            this.#source.connect(this.#analyser);

            const samples = new Uint8Array(this.#analyser.fftSize);
            const startedAt = performance.now();
            let lastSpeechAt = startedAt;
            let heardSpeech = false;

            this.#interval = setInterval(() => {
                if (!this.#active || !this.#analyser) return;
                this.#analyser.getByteTimeDomainData(samples);
                let sum = 0;
                for (let i = 0; i < samples.length; i++) {
                    const x = (samples[i] - 128) / 128;
                    sum += x * x;
                }
                const rms = Math.sqrt(sum / samples.length);
                const now = performance.now();
                if (rms >= this.threshold) {
                    heardSpeech = true;
                    lastSpeechAt = now;
                }
                if ((heardSpeech && now - lastSpeechAt >= this.silenceMs) ||
                    (!heardSpeech && now - startedAt >= this.initialSilenceMs) ||
                    now - startedAt >= this.maxDurationMs) {
                    this.stop();
                }
            }, 100);
        } catch (error) {
            console.error('Record: microphone recording failed:', error);
            this.stop();
            if (stream && stream !== this.#stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        }
    }

    stop() {
        this.#active = false;
        if (this.#interval !== null) clearInterval(this.#interval);
        if (this.#timeout !== null) clearTimeout(this.#timeout);
        this.#interval = null;
        this.#timeout = null;
        if (this.#recorder && this.#recorder.state !== 'inactive') {
            this.#recorder.stop();
        }
        if (this.#source) this.#source.disconnect();
        this.#source = null;
        this.#analyser = null;
        const context = this.#context;
        this.#context = null;
        if (context) context.close().catch(() => {});
        // MediaStream tracks are released after the last recorder event.
        // The fallback below covers cases where recording never started.
        if (!this.#recorder && this.#stream) this.#cleanupStream(this.#stream);
        this.#recorder = null;
    }

    #cleanupStream(stream) {
        stream.getTracks().forEach(track => track.stop());
        if (this.#stream === stream) this.#stream = null;
    }

    destroy() {
        this.#destroyed = true;
        this.#session++;
        this.stop();
        if (this.#stream) this.#cleanupStream(this.#stream);
        this.#audio.pause();
        this.#audio.removeAttribute('src');
        this.#audio.load();
        if (this.#url) URL.revokeObjectURL(this.#url);
        this.#url = null;
    }
}