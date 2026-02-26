'use strict';
 
class Practice { 
    #el_listen_and_write = null;
    #el_exercise_control = null
    #editor_voice = null;
    #editor_img = null;
    #editor_symbol = null;
    #index_listen_and_write = -1;
    #exercises_listen_and_write = [];
    #answer = '';
 
    constructor({el_listen_and_write, el_exercise_control, exercises_listen_and_write=[], editor_img=null, editor_symbol=null}) {
        this.#el_listen_and_write = el_listen_and_write;
        this.#el_exercise_control = el_exercise_control;
        this.#exercises_listen_and_write = exercises_listen_and_write;
        this.#editor_voice =  new EditorVoice({callback: (result, id) => this.recognition(result, id)});
        this.#editor_img = editor_img;
        this.#editor_symbol = editor_symbol;

        if(this.#editor_symbol){
            this.#editor_symbol.createListenAndWrite(el_listen_and_write);
        }        
        if(this.#editor_img){
           this.#editor_img.createListenAndWrite(el_listen_and_write);
        }

        const button = document.createElement('button');
        button.className = 'clear-btn';
        button.onclick = this.clearEditor.bind(this);
        button.textContent = 'Очистить';

        el_listen_and_write.appendChild(button);
    }
    recognition(recognition, id=null){
        //console.log(`id=${id} recognition=${recognition}`);
        this.setRecognition(recognition);
    }
    speak(sentence){
        this.#editor_voice.speak(sentence);
    }
    micOn(micEl, id){
        this.#editor_voice.micOn(micEl, id);
    }
    clearEditor(){
        if(this.#editor_img){
            this.#editor_img.clearEditor();
        }
        if(this.#editor_symbol){
            this.#editor_symbol.clearEditor();
        }
    }
    setRecognition(recognition){
        if(this.#editor_img){
            this.#editor_img.setRecognition(recognition);
        }
        if(this.#editor_symbol){
            this.#editor_symbol.setRecognition(recognition);
        }
    }
    genExercisesListenAndWriteTest(){
        this.#index_listen_and_write += 1; 
        if (this.#index_listen_and_write == this.#exercises_listen_and_write.length){
            this.#index_listen_and_write = 0;
        }
        let example = this.#exercises_listen_and_write[this.#index_listen_and_write];
        
        let origin = example[0].replace("'s"," is");
        this.#answer = this.textNormalize(origin);
        
        let sentence = `
            <span class="icon play-btn-${this.#el_exercise_control.id}">⏯️ listen </span></br></br>
            <span class="icon help-btn-${this.#el_exercise_control.id}">🔎 help</span> (${example[1]}) 
            <span class="text-span" id="clue-easy-${this.#el_exercise_control.id}-${this.#index_listen_and_write}">${origin}</span></br></br>
            <span class="icon next-btn-${this.#el_exercise_control.id}">⏭️ next </span></br></br>
            <span class="icon mic-btn-${this.#el_exercise_control.id}">🎙️ say </span></br><br>
        `;
        
        this.#el_exercise_control.innerHTML = `<p>${sentence}</p>`;
        
        // Вешаем обработчики после вставки HTML
        this.#el_exercise_control.querySelector(`.play-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            this.playSentence(origin);
        });
        
        this.#el_exercise_control.querySelector(`.help-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            showClue(`clue-easy-${this.#el_exercise_control.id}-${this.#index_listen_and_write}`);// из EditorVoice
        });
        
        this.#el_exercise_control.querySelector(`.next-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            this.nextSentence();
        });
        
        this.#el_exercise_control.querySelector(`.mic-btn-${this.#el_exercise_control.id}`).addEventListener('click', (e) => {
            this.micOn(e.target);
        });
    }
    playSentence(sentence){
        this.speak(sentence);
    }
    textNormalize(text){
        return text.toLowerCase().trim().replace('.','').replace(/\s+/g, ' ');
    }
    nextSentence(){
        this.clearEditor();
        this.genExercisesListenAndWriteTest();
    }
    getAnswer(){
        return this.#answer;
    }
     
}