'use strict';
 
class PracticeWords { 
    #el_listen_and_write = null;
    #el_exercise_control = null
    #el_menu_words = null;
    #el_pixel = null;
    #editor_voice = null;
    #results = [];
 
    #editor_symbol = null;
    #index_listen_and_write = -1;
    #exercises_listen_and_write = [];
    #answer = '';
    recognition_timer = null;
    #menu_level = "A1";
    #menu_parts_of_speech = "nouns";
 
    constructor({el_listen_and_write, el_exercise_control, el_menu_words, el_pixel, editor_symbol}) {
        this.#el_listen_and_write = el_listen_and_write;
        this.#el_exercise_control = el_exercise_control;
        this.#el_menu_words = el_menu_words;
        this.#el_pixel = el_pixel;

        this.load_exercises();
        this.#editor_voice = new EditorVoice({callback: (result, id) => this.recognition(result, id)});
        this.#editor_symbol = editor_symbol;
        this.#editor_symbol.createListenAndWrite(el_listen_and_write);      
        this.recognition_timer = null;
        this.createMenuWords();
    }

    recognition(recognition, id=null){
         if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
        }
        this.recognition_timer = setTimeout(() => {
            this.setRecognition(recognition);
            this.recognition_timer = null;  
        }, 500); 
    }

    speak(sentence){
        this.#editor_voice.speak(sentence);
    }

    micOn(micEl, id){
        this.#editor_voice.micOn(micEl, id);
    }
 
    setRecognition(recognition){
        this.#editor_symbol.setRecognition(recognition);
    }

    genExercisesListenAndWrite(){
        this.#index_listen_and_write += 1; 
        if (this.#index_listen_and_write == this.#exercises_listen_and_write.length){
            this.#index_listen_and_write = 0;
        }
        let example = this.#exercises_listen_and_write[this.#index_listen_and_write];
        let example2 = this.#exercises_listen_and_write[Math.floor(Math.random() * this.#exercises_listen_and_write.length)];
        if (example == example2){
            example2 = this.#exercises_listen_and_write[Math.floor(Math.random() * this.#exercises_listen_and_write.length)];
        }
        let example3 = this.#exercises_listen_and_write[Math.floor(Math.random() * this.#exercises_listen_and_write.length)];
        if (example2 == example3 || example == example3){
            example3 = this.#exercises_listen_and_write[Math.floor(Math.random() * this.#exercises_listen_and_write.length)];
        }

        let origin = "";
        let origin2 = "";
        let origin3 = "";
        let word_help = "";
        let sentence_help = "";

        switch (this.#menu_parts_of_speech) {
            case "nouns": 
                origin = example[3];// перевод
                origin2 = example2[3];
                origin3 = example3[3];
                
                sentence_help = example[5];
                const slice_nouns = example.slice(0, 2).filter((val) => val !== "");
                word_help = slice_nouns[Math.floor(Math.random() * slice_nouns.length)];
                break;
            case "verbs":
                origin = example[6];
                origin2 = example2[6];
                origin3 = example3[6];
                sentence_help = example[8];
                const slice_verbs = example.slice(0, 5).filter((val) => val !== "");
                word_help = slice_verbs[Math.floor(Math.random() * slice_verbs.length)];
                break;
            case "adverbs":
                origin = example[1];
                origin2 = example2[1];
                origin3 = example3[1];
                sentence_help = example[3];
                word_help = example[0];
                break;
            case "adjectives":
                origin = example[3];
                origin2 = example2[3];
                origin3 = example3[3];
                sentence_help = example[5];
                const slice_adjectives = example.slice(0, 5).filter((val) => val !== "");
                word_help = slice_adjectives[Math.floor(Math.random() * slice_adjectives.length)];
                break;
            case "prepositions":
                origin = example[1];
                origin2 = example2[1];
                origin3 = example3[1];
                sentence_help = example[3];
                word_help = example[0];
                break;
            case "pronouns":
                origin = example[1];
                origin2 = example2[1];
                origin3 = example3[1];
                sentence_help = example[3];
                word_help = example[0];
                break;  
        } 

        this.#answer = this.textNormalize(word_help);
        
        const options = [origin, origin2, origin3].sort(() => Math.random() - 0.5);
        const quiz_html = `
        <div id="quiz">
            ${options.map((val) => `<label><input type="radio" name="answer" class="" value="${val}"> ${val}</label><br><br>`).join('')}
        </div>
        `;

        let control = `
            <span class="icon play-btn-${this.#el_exercise_control.id}">⏯️ listen </span></br></br>
            <span class="icon help-btn-${this.#el_exercise_control.id}">🔎 help</span> (${word_help}): <i>${sentence_help}</i>
            <span class="text-span" id="clue-easy-${this.#el_exercise_control.id}-${this.#index_listen_and_write}">${origin}</span></br></br>
            
            <span> choose the correct answer:</br>
            ${quiz_html}
            </span>
            </br>

            <span class="icon next-btn-${this.#el_exercise_control.id}">⏭️ next </span></br></br>
            <span class="icon mic-btn-${this.#el_exercise_control.id}">🎙️ pronunciation check </span>
        `;
        
        this.#el_exercise_control.innerHTML = `<p>${control}</p>`;
        
        // Вешаем обработчики после вставки HTML
        this.#el_exercise_control.querySelector(`.play-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            this.playSentence(word_help);
        });
        
        this.#el_exercise_control.querySelector(`.help-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
           // TODO: there is no reason to keep the logic of showing the tooltip in EditorVoice
           showClue(`clue-easy-${this.#el_exercise_control.id}-${this.#index_listen_and_write}`);// from EditorVoice
        });
        
        this.#el_exercise_control.querySelector(`.next-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            this.nextSentence();
        });
        
        this.#el_exercise_control.querySelector(`.mic-btn-${this.#el_exercise_control.id}`).addEventListener('click', (e) => {
            this.micOn(e.target);
        });

        const quiz = document.getElementById('quiz');
        quiz.addEventListener('click', (e) => {
            if (e.target.name !== 'answer') return;
            quiz.querySelectorAll('input[name="answer"]').forEach((input) => {
                input.classList.remove('error', 'on');
                input.disabled = true;
            });
            if (e.target.value === origin) {
                e.target.classList.add('on');
                this.#results[this.#index_listen_and_write]+=1;
            } else {
                e.target.classList.add('error');
                this.#results[this.#index_listen_and_write]-=1;
            }
            this.buildResults();
        });
    }

    playSentence(sentence){
        this.speak(sentence);
    }

    textNormalize(input) {
        return textNormalize(input);
    }

    nextSentence(){
        this.#editor_symbol.clearEditor(); 
        this.genExercisesListenAndWrite();
    }

    getAnswer(){
        return this.#answer;
    }

    load_exercises(){
        const level_words = words_get_level(this.#menu_level);
        if (this.#menu_parts_of_speech == "pronouns"){
            this.#exercises_listen_and_write = getRandomMix(words_pronouns, false);
        }else{
            this.#exercises_listen_and_write = getRandomMix(level_words[`${this.#menu_parts_of_speech}`], false);
        }
        this.#results = Array(this.#exercises_listen_and_write.length).fill(0);
        this.#index_listen_and_write = -1;
        this.buildResults();
    }

    createMenuWords(){
        this.#el_menu_words.insertAdjacentHTML('beforeend', `
        <select id="level" title="уровень">
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
        </select>
        <select id="parts_of_speech" title="часть речи">
            <option value="nouns">nouns</option>
            <option value="verbs">verbs</option>
            <option value="adverbs">adverbs</option>
            <option value="adjectives">adjectives</option>
            <option value="prepositions">prepositions</option>
            <option value="pronouns">pronouns</option>
        </select>
        <hr><br>
        `);

        const levelSelect = this.#el_menu_words.querySelector('#level');
        const posSelect = this.#el_menu_words.querySelector('#parts_of_speech');

        levelSelect.addEventListener('change', (e) => {
            if (!e.target.matches('select')) return;
            this.#menu_level = e.target.value;
            this.load_exercises();
            this.nextSentence();
           
        });

        posSelect.addEventListener('change', (e) => {
            if (!e.target.matches('select')) return;
            this.#menu_parts_of_speech = e.target.value;
            this.load_exercises();
            this.nextSentence();
            
        });
    }

    buildResults(){
        const words = this.#exercises_listen_and_write;
        let index_translate = 0;
        
        switch (this.#menu_parts_of_speech) {
            case "nouns": 
                index_translate = 3;
                break;
            case "verbs":
                index_translate = 6;
                break;
            case "adverbs":
                index_translate = 1;
                break;
            case "adjectives":
                index_translate = 3;
                break;
            case "prepositions":
                index_translate = 1;
                break;
            case "pronouns":
                index_translate = 1;
                break;  
        } 

        this.#el_pixel.innerHTML = '';
        const cols = 30;

        let html = '';
        for (let i = 0; i < words.length; i += cols) {
            const chunk = words.slice(i, i + cols);
            const cells = chunk
                .map((item, j) => {
                    const idx = i + j;
                    const score = this.#results[idx];
                    const word = item[0];
                    const translation = item[index_translate];
                    const info = `${word} — ${translation}`;

                    let color = '#ff4444';
                    if (score === 0) {
                        color = '#333';
                    } else if (score > 5) {
                        color = '#44dd44';
                    } else if (score > 0) {
                        color = '#aadd44';
                    }

                    return `<td style="background-color: ${color};" title="${info}">${score}</td>`;
                })
                .join('');
            html += `<tr>${cells}</tr>`;
        }
        this.#el_pixel.innerHTML = html;
    }
}

