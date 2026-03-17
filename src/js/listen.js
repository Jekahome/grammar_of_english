'use strict';
 
class Listen { 
    #subsDiv = null;
    #audio = null;
    #showLevel = true;
    #pageSize = 10;
    #timer_css_editor = null;

    constructor({container, path_sub, path_audio, pageSize = 10}) {
        
        const isGithub = window.location.hostname.includes('github.io');
        url = isGithub ? '/grammar_of_english' : '';

        let path_audio = url + path_audio;
        let path_sub = url + path_sub;

        this.subs = [];
        this.index = -1;
        this.page = -1;
        this.#pageSize = pageSize;
        this.wordsLevel = [];
        this.textRaw = "";
        this.createAudioSettings(container, path_audio);
        this.init();
        this.loadVTT(path_sub);
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

    createAudioSettings(container, path_audio) {
        container.innerHTML = '';

        const listen_subs = document.createElement('div');
        listen_subs.id="listen-subs";
        
        this.#subsDiv = listen_subs;

        // 1. Создаем Audio
        {
            const listen_audio = document.createElement('audio');
            listen_audio.id = 'listen-audio';
            listen_audio.controls = true;
            listen_audio.style.width = '100%';
            
            const source = document.createElement('source');
            
            source.src = path_audio;
            source.type = 'audio/ogg';
            
            listen_audio.appendChild(source);
 
            container.appendChild(listen_audio);
            this.#audio = listen_audio;
        }

        // 2. Создаем Details (Settings Page)
        const details = document.createElement('details');
        
        const summary = document.createElement('summary');
        summary.textContent = 'settings page';
        details.appendChild(summary);

        const ul = document.createElement('ul');

        // Лист 1: Checkbox
        const li1 = document.createElement('li');
        li1.innerHTML = `
            <label>
                <input type="checkbox" id="listen-show-level">
                Show words level
            </label>
        `;
        ul.appendChild(li1);

        // Лист 2: Range Input
        const li2 = document.createElement('li');
        li2.innerHTML = `
            <label for="pageSize">Number of sentences displayed on the page:</label>
            <input type="range" id="pageSize" name="pageSize" min="2" max="12" value="10">
            <span id="pageSizeValue">10</span>
        `;
        ul.appendChild(li2);

        // Лист 3: Textarea
        const li3 = document.createElement('li');
        li3.innerHTML = `
            Subtitle styles:<br>
            <textarea id="listen-css-editor" rows="10" cols="50" placeholder="css for subtitles"></textarea>
        `;
        ul.appendChild(li3);

        details.appendChild(ul);
        details.appendChild(document.createElement('hr'));
        details.appendChild(document.createElement('br'));

        // Вставляем все в контейнер
        container.appendChild(document.createElement('br'));
        container.appendChild(details);

        // 3. Добавляем логику (Events)
        const range = details.querySelector('#pageSize');
        const rangeValue = details.querySelector('#pageSizeValue');
        range.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            rangeValue.textContent = val;
            this.#pageSize = val; 
            this.page = -1;       // Сброс индекса страницы
            this.drawPage();      // Перерисовываем страницу полностью
        });

       const listen_css_editor = details.querySelector('#listen-css-editor');
        listen_css_editor.value = `/* css for subtitles */
#listen-subs {
    margin-top: 30px;
    font-size: 34px;
    line-height: 1.7;
    text-align: center;
}`;

        const listen_show_level = details.querySelector('#listen-show-level');
        listen_show_level.checked = this.#showLevel;
        listen_show_level.addEventListener('change', (e) => {
            this.#showLevel = e.target.checked;
            this.page = -1; // Сброс страницы при новой загрузке
            this.drawPage();
        });
        this.#showLevel = listen_show_level.checked;

        const styleTag = document.createElement('style');
        styleTag.id = "listen-user-styles";
        container.appendChild(styleTag);
        
        listen_css_editor.addEventListener("input", () => {
            clearTimeout(this.#timer_css_editor);
            this.#timer_css_editor = setTimeout(() => {
                styleTag.textContent = listen_css_editor.value; // Применяем CSS
            }, 200);
        });

        styleTag.textContent = listen_css_editor.value;
                
        container.appendChild(listen_subs);
    }
}
