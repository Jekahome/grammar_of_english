'use strict';
 
class Practice2 { 
    #editor_voice = null;
    el_make_control = null;
    el_make_input = null;
    el_make_result = null;
    el_make_help = null;
    el_make_clue = null;
    el_make_mic = null;
    el_input = null;
    el_result_list = null;
    current_index_sentence = 0;
    parts_of_sentences = [];
    recognition_timer = null;
    input_timer = null;
    user_rules_callback = null;

    constructor({el_control, el_input, el_result, parts_of_sentences, user_rules_callback}){
        this.el_make_control = el_control;
        this.el_make_input = el_input;
        this.el_make_result = el_result;
        this.parts_of_sentences = parts_of_sentences;
        this.user_rules_callback = user_rules_callback;

        this.current_index_sentence = 0;
        this.recognition_timer = null;
        this.input_timer = null;
         
        this.#editor_voice = new EditorVoice({callback: (result) => this.recognition(result)});
        this.buildInterface();
    }

    speak(sentence){
        this.#editor_voice.speak(sentence);
    }

    showClue(){
        // TODO: there is no reason to keep the logic of showing the tooltip in EditorVoice
        showClue(`clue-medium-${this.el_make_control.id}`); // from EditorVoice
    }

    buildInterface(){
        let control = `
            <span class="icon play-btn" data-action="play">⏯️ listen </span></br></br>
            <span class="icon help-btn" data-action="help">🔎 help</span> 
            <span id="make-help-${this.el_make_control.id}">${this.getTask()}</span> 
            <span class="text-span" id="clue-medium-${this.el_make_control.id}">${this.parts_of_sentences[this.current_index_sentence][1]}</span></br></br>
            <span class="icon next-btn" data-action="next">⏭️ next </span></br></br>
            <span class="icon mic-btn" id="mic-${this.el_make_control.id}" data-action="mic">🎙️ say </span></br><br>
        `;
        this.el_make_control.innerHTML = `<p>${control}</p>`;

        this.el_make_control.onclick = (e) => {
            const target = e.target.closest('.icon');
            if (!target) return;

            const action = target.dataset.action; 

            // Вызываем методы класса в зависимости от action
            if (action === 'play') this.playSentence();
            if (action === 'help') this.showClue();
            if (action === 'next') this.nextSentence();
            if (action === 'mic')  this.micOn();
        };

        this.el_input = document.createElement('textarea');
        this.el_input.id = `input_${this.el_make_input.id}`;
        this.el_input.className = 'grammar-input font-HYWenHei';  
        this.el_input.rows = 2;
        this.el_input.cols = 80;
        this.el_make_input.appendChild(this.el_input);

        this.el_result_list = document.createElement('ul');
        this.el_result_list.id = `result_${this.el_make_result.id}`;
        this.el_result_list.className = 'grammar-error-list';
        this.el_make_result.appendChild(this.el_result_list);

        this.el_make_help = document.getElementById(`make-help-${this.el_make_control.id}`); 
        this.el_make_clue = document.getElementById(`clue-medium-${this.el_make_control.id}`); 
        this.el_make_mic = document.getElementById(`mic-${this.el_make_control.id}`); 

        this.bindInput();
    }

    getTask(){
        return `(`+this.parts_of_sentences[this.current_index_sentence][0].join(", ")+`)`;
    }

    getClue(){
        return this.parts_of_sentences[this.current_index_sentence][1];
    }

    playSentence(){
        this.speak(this.getTask());
    }

    nextSentence(){
        this.el_result_list.classList.remove('success-result');
        this.el_result_list.innerHTML = '';
        this.current_index_sentence += 1;
        if (this.current_index_sentence >= this.parts_of_sentences.length){
            this.current_index_sentence = 0;
        }
        this.el_make_help.innerHTML = this.getTask();
        this.el_make_clue.innerHTML = this.getClue();
    }

    micOn(){
        this.el_result_list.classList.remove('success-result');
        //this.el_make_input.innerHTML = '';
        this.el_result_list.innerHTML = '';

        this.#editor_voice.micOn(this.el_make_mic);
    }
    capitalize(s) {
        return s ? s[0].toUpperCase() + s.slice(1) : s;
    }
    recognition(recognition){
        if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
        }
        this.recognition_timer = setTimeout(() => {

            this.el_input.value = this.capitalize(recognition) + '.';
            this.el_input.dispatchEvent(new Event('input'));
            this.recognition_timer = null;  
        }, 500);       
    }

    localCheckRules(result_sentence){
        const arr_words = this.parts_of_sentences[this.current_index_sentence][0];
     
        const normalizedInput = result_sentence
            .toLowerCase()
            .replace(/[.,!?;:]/g, '')
            .replace(/\s+/g, ' ')
            .trim();

        // Проверяем наличие каждого элемента (слова или фразы)
        const allWordsPresent = arr_words.every(target => {
            const normalizedTarget = target
                .toLowerCase()
                .replace(/\s+/g, ' ')
                .trim();
            
            return normalizedInput.includes(normalizedTarget);
        });
        return allWordsPresent;
    }
   
    bindInput() {
        let idleTimer = null;
        let punctuationTimer = null;
        let lastCheckedText = ""; 

        this.el_input.addEventListener('input', () => {
            if (this.input_timer) {
                clearTimeout(this.input_timer);
            }

            const text = this.el_input.value.trim();
 
            clearTimeout(idleTimer);
            clearTimeout(punctuationTimer);
 
            if (text === "" || text === lastCheckedText) return;
            
            this.input_timer = setTimeout(() => {
                if (!this.localCheckRules(text)){
                    this.el_result_list.innerHTML = '<li>Words from the task are missing!</li>';
                    return;
                } 
                // Логика маркера завершения
                if (/[.!?]$/.test(text)) {
                    punctuationTimer = setTimeout(async () => {
                        clearTimeout(idleTimer);
                        lastCheckedText = text;
                        this.checkUserRules(text, await window.grammarChecker.checkGrammar(text));
                    }, 500);
                }
                // Логика завершения ввода
                idleTimer = setTimeout(async () => {
                    clearTimeout(punctuationTimer);
                    lastCheckedText = text;
                    this.checkUserRules(text, await window.grammarChecker.checkGrammar(text));
                }, 1500);
                
                this.input_timer = null;  
            }, 500);  

        });
    }

    checkUserRules(input, result=[]){
        this.el_result_list.classList.remove('success-result');
        if (result.length == 0){
            let result_user_rules = this.user_rules_callback(input);

            if (result_user_rules.length !== 0){
                this.el_result_list.innerHTML = '';
                result_user_rules.forEach(obj => {
                    const item = document.createElement('LI');
                    item.textContent = obj.msg;
                    this.el_result_list.appendChild(item);
                });  
            }else{
                this.el_result_list.innerHTML = `<li>Successfully</li>`;
                this.el_result_list.classList.add('success-result');
            }
        }else{
            this.el_result_list.innerHTML = '';
            result.forEach(obj => {
                const item = document.createElement('LI');
                item.textContent = obj.msg;
                this.el_result_list.appendChild(item);
            });            
        }
    }
};
