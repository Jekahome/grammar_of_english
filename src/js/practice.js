'use strict';

class Practice {
    #el_listen_and_write = null;
    #el_exercise_control = null;
    #editor_voice = null;
    #editor_symbol = null;
    #record = null;
    #index_listen_and_write = -1;
    #exercises_listen_and_write = [];
    #answer = '';
    recognition_timer = null;

    constructor({el_listen_and_write, el_exercise_control, exercises_listen_and_write=[], editor_symbol}) {
        this.#el_listen_and_write = el_listen_and_write;
        this.#el_exercise_control = el_exercise_control;
        this.#exercises_listen_and_write = exercises_listen_and_write;
        this.#editor_voice = new EditorVoice({callback: (result, id) => this.recognition(result, id)});

        this.#editor_symbol = editor_symbol;
        this.#editor_symbol.createListenAndWrite(el_listen_and_write);

        this.recognition_timer = null;
    }

    recognition(recognition, id=null) {
        if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
        }
        this.recognition_timer = setTimeout(() => {
            this.setRecognition(recognition);
            this.recognition_timer = null;
        }, 500);
    }

    speak(sentence) {
        this.#editor_voice.speak(sentence);
    }

    micOn(micEl, id) {
        // Audio is recorded independently and stops automatically after silence.
        this.#record.start();
        this.#editor_voice.micOn(micEl, id);
    }

    setRecognition(recognition) {
        this.#editor_symbol.setRecognition(recognition);
    }

    genExercisesListenAndWrite() {
        // Release the previous audio recording before replacing its HTML element.
        if (this.#record) {
            this.#record.destroy();
            this.#record = null;
        }
        if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
            this.recognition_timer = null;
        }

        this.#index_listen_and_write += 1;
        if (this.#index_listen_and_write == this.#exercises_listen_and_write.length) {
            this.#index_listen_and_write = 0;
        }
        let example = this.#exercises_listen_and_write[this.#index_listen_and_write];

        let origin = example[0];
        this.#answer = this.textNormalize(origin);

        let control = `
            <span class="icon play-btn-${this.#el_exercise_control.id}">⏯️ listen </span></br></br>
            <span class="icon help-btn-${this.#el_exercise_control.id}">🔎 help</span> (${example[1]})
            <span class="text-span" id="clue-easy-${this.#el_exercise_control.id}-${this.#index_listen_and_write}">${origin}</span></br></br>
            <span class="icon next-btn-${this.#el_exercise_control.id}">⏭️ next </span></br></br>
            <span class="icon mic-btn-${this.#el_exercise_control.id}">🎙️ say </span></br><br>
            <audio id="recorded-audio-${this.#el_exercise_control.id}" controls style="display:none; width:100%;"></audio>
        `;

        this.#el_exercise_control.innerHTML = `<p>${control}</p>`;

        // Record only receives the generated audio element.
        const audio = this.#el_exercise_control.querySelector(`#recorded-audio-${this.#el_exercise_control.id}`);
        this.#record = new Record(audio);

        this.#el_exercise_control.querySelector(`.play-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
             
            this.playSentence(origin);
        });

        this.#el_exercise_control.querySelector(`.help-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            // TODO: there is no reason to keep the logic of showing the tooltip in EditorVoice
            showClue(`clue-easy-${this.#el_exercise_control.id}-${this.#index_listen_and_write}`);
        });

        this.#el_exercise_control.querySelector(`.next-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            this.nextSentence();
        });

        this.#el_exercise_control.querySelector(`.mic-btn-${this.#el_exercise_control.id}`).addEventListener('click', (e) => {
            this.micOn(e.currentTarget);
        });
    }

    playSentence(sentence) {
        this.speak(sentence);
    }

    textNormalize(input) {
        return textNormalize(input);
    }

    nextSentence() {
        this.#editor_symbol.clearEditor();
        this.genExercisesListenAndWrite();
    }

    getAnswer() {
        return this.#answer;
    }
}