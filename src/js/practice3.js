'use strict';
 
class Practice3 { 
    #editor_voice = null;
    #editor_symbol = null;
    current_index_data = 0;
    current_index_inner_data = 0;
    recognition_timer = null;
    input_timer = null;
   
    el_make_control = null;
    el_input = null;
    el_make_result = null;
    data = [];
    user_rules_callback = null;

    constructor({el_picture, el_result, el_control, data, user_rules_callback}){
        this.data = data;
        this.el_make_control = el_control;
        this.el_make_result = el_result;

        this.current_index_data = 0;
        this.recognition_timer = null;
        this.input_timer = null;

        this.user_rules_callback = user_rules_callback;
         
        this.#editor_voice = new EditorVoice({callback: (result) => this.recognition(result)});
        this.buildInterface(el_picture);
    }
    callback(result){
        console.log(`result=${result}`)
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

    buildInterface(el_picture){

         this.el_make_picture = document.createElement('img');
         this.el_make_picture.id = "practice3-carousel-img"
         this.el_make_picture.src = this.data[0][0];
         el_picture.appendChild(this.el_make_picture);

        let control = `
            <span class="icon play-btn" data-action="play">⏯️ listen </span></br></br>
            <span class="icon help-btn" data-action="help">🔎 help</span> 
            <span id="make-help-${this.el_make_control.id}"></span> 
            <span class="text-span" id="clue-medium-${this.el_make_control.id}"></span></br></br>
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
        this.el_input.id = `input_${this.el_make_control.id}`;
        this.el_input.className = 'grammar-input font-HYWenHei';  
        this.el_input.rows = 2;
        this.el_input.cols = 80;
        this.el_make_result.appendChild(this.el_input);

        this.el_result_list = document.createElement('ul');
        this.el_result_list.id = `result_${this.el_make_result.id}`;
        this.el_result_list.className = 'grammar-error-list';
        this.el_make_result.appendChild(this.el_result_list);

        this.el_make_help = document.getElementById(`make-help-${this.el_make_control.id}`); 
        this.el_make_clue = document.getElementById(`clue-medium-${this.el_make_control.id}`); 
        this.el_make_mic = document.getElementById(`mic-${this.el_make_control.id}`); 

 
        this.bindInput();
        this.nextSentence();
    }
    micOn(){
        this.el_result_list.classList.remove('success-result');
        this.el_result_list.innerHTML = '';
        this.#editor_voice.micOn(this.el_make_mic);
    }
    capitalize(s) {
        return s ? s[0].toUpperCase() + s.slice(1) : s;
    }
    speak(sentence){
        this.#editor_voice.speak(sentence);
    }
    playSentence(){
        this.speak(this.getTask());
    }
    getTask(){
        return `(`+this.data[this.current_index_data][1][this.current_index_inner_data][0].join(", ")+`)`;
    }
    getClue(){
        return this.data[this.current_index_data][1][this.current_index_inner_data][1];
    }
    getImage(){
        return this.data[this.current_index_data][0];
    }
    showClue(){
        // TODO: there is no reason to keep the logic of showing the tooltip in EditorVoice
        showClue(`clue-medium-${this.el_make_control.id}`); // from EditorVoice
    }
    nextSentence(){
        this.el_input.value = '';
        this.el_result_list.classList.remove('success-result');
        this.el_result_list.innerHTML = '';
        this.current_index_data += 1;
        if (this.current_index_data >= this.data.length){
            this.current_index_data = 0;
        }
        this.current_index_inner_data = Math.floor(Math.random() * this.data[this.current_index_data][1].length);  

        this.el_make_help.innerHTML = this.getTask();
        this.el_make_clue.innerHTML = this.getClue();
        this.el_make_picture.src = this.getImage();
    }

    bindInput() {
        let idleTimer = null;
        let punctuationTimer = null;
        let lastCheckedText = ""; 

        // Обработка вставки текста
        this.el_input.addEventListener('paste', function(e) {
            e.preventDefault();
            console.log("you need write");
        }.bind(this));

        this.el_input.addEventListener('input', () => {
            if (this.input_timer) {
                clearTimeout(this.input_timer);
            }

            const text = textNormalize(this.el_input.value.trim());
           
            clearTimeout(idleTimer);
            clearTimeout(punctuationTimer);
 
            if (text === "" || text === lastCheckedText) return;
            
            this.input_timer = setTimeout(() => {
                // Логика маркера завершения
                if (/[.!?]$/.test(text)) {
                    punctuationTimer = setTimeout(async () => {
                        clearTimeout(idleTimer);
                        lastCheckedText = text;
                        this.checkUserRules(text, await window.grammarChecker.checkGrammar(text ));
                    }, 500);
                }
                // Логика завершения ввода
                idleTimer = setTimeout(async () => {
                    clearTimeout(punctuationTimer);
                    lastCheckedText = text;
                    this.checkUserRules(text, await window.grammarChecker.checkGrammar(text ));
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
                setTimeout(async () => {
                    this.nextSentence();
                }, 500);
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
 
}