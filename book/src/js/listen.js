'use strict';
 
class Listen { 
    #subsDiv = null;
    #audio = null;
    #showLevel = true;
    #pageSize = 10;

    constructor({audio, subsDiv, showLevel=true, pageSize = 10}) {
      
        this.#audio = audio;
        this.#subsDiv = subsDiv;
        this.#showLevel = showLevel;
        
        this.subs = [];
        this.index = -1;
        this.page = -1;
        this.#pageSize = pageSize;
        this.wordsLevel = [];
        this.textRaw = "";

        this.init();
    }

    init() {
        if (!this.#audio || !this.#subsDiv) {
            console.error("Listen: Элементы не найдены");
            return;
        }
        this.#audio.ontimeupdate = this.update.bind(this);
    }

    async loadVTT(url) {
        this.subs = await this.parseVTT(url);
        if (this.#showLevel){
            this.wordsLevel = getAllWordsLevels(this.textRaw);
        }
        this.page = -1; // Сброс страницы при новой загрузке
        this.drawPage();
    }

    update() {
        const t = this.#audio.currentTime;
        const newIndex = this.subs.findIndex(s => t >= s.start && t <= s.end);
        
        if (newIndex === -1 || newIndex === this.index) return;

        this.index = newIndex;
        const newPage = Math.floor(this.index / this.#pageSize);

        if (newPage !== this.page) {
            this.page = newPage;
            this.drawPage();
        }

        this.highlight();
    }

    drawPage() {
        const start = this.page === -1 ? 0 : this.page * this.#pageSize;
        const end = start + this.#pageSize;

        let html = "";
        for (let i = start; i < end; i++) {
            let text = this.subs[i] ? this.subs[i].text : "";
            if (!text.length){continue}
            if (this.#showLevel){
                text = this.highlightLevels(text);
            }
            // Используем data-аттрибут вместо динамического ID для чистоты
            html += `<div class="listen-line" data-index="${i}">${text}</div>`;
        }

        this.#subsDiv.innerHTML = html;
        if (this.index !== -1) this.highlight();
    }

    highlightLevels(text) {
        const levelMap = {
            listen_a1: new Set(this.wordsLevel.show_a1),
            listen_a2: new Set(this.wordsLevel.show_a2),
            listen_b1: new Set(this.wordsLevel.show_b1),
            listen_b2: new Set(this.wordsLevel.show_b2),
            listen_c1: new Set(this.wordsLevel.show_c1),
            listen_c2: new Set(this.wordsLevel.show_c2),
            listen_other: new Set(this.wordsLevel.show_other)
        };

        const words = text.split(/\s+/);

        return words.map(word => {
            const classes = [];

            for (const level in levelMap) {
                if (levelMap[level].has(word)) {
                    classes.push(level);
                }
            }

            if (classes.length) {
                return `<span class="${classes.join(" ")}">${word}</span>`;
            }

            return word;
        }).join(" ");
    }

    highlight() {
        const lines = this.#subsDiv.querySelectorAll(".listen-line");
        lines.forEach(el => {
            const lineIndex = parseInt(el.getAttribute("data-index"));
            el.classList.toggle("listen-active", lineIndex === this.index);
        });
    }

    async parseVTT(url) {
        const res = await fetch(url);
        const text = await res.text();
        const lines = text.split(/\r?\n/);
        const subs = [];
        let i = 0;

        const timeRegex = /(?:(\d+):)?(\d+):(\d+\.\d+)\s*-->\s*(?:(\d+):)?(\d+):(\d+\.\d+)/;

        while (i < lines.length) {
            let line = lines[i].trim();
            if (!line || /^\d+$/.test(line) || line === "WEBVTT") {
                i++;
                continue;
            }

            const match = line.match(timeRegex);
            if (match) {
                const start = (parseInt(match[1] || 0) * 3600) + (parseInt(match[2]) * 60) + parseFloat(match[3]);
                const end = (parseInt(match[4] || 0) * 3600) + (parseInt(match[5]) * 60) + parseFloat(match[6]);

                let textLines = [];
                i++;
                while (i < lines.length && lines[i].trim() !== "" && !timeRegex.test(lines[i])) {
                    textLines.push(lines[i].trim());
                    i++;
                }
                subs.push({ start, end, text: textLines.join(" ") });
                if (this.#showLevel){
                    this.textRaw =this.textRaw + " " + textLines;
                }
            } else {
                i++;
            }
        }
        return subs;
    }
}

