'use strict';
 
class Practice { 
    #el_listen_and_write = null;
    #el_exercise_control = null
    #editor_voice = null;
 
    #editor_symbol = null;
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
        
        let origin = example[0];
        this.#answer = this.textNormalize(origin);
        
        let control = `
            <span class="icon play-btn-${this.#el_exercise_control.id}">⏯️ listen </span></br></br>
            <span class="icon help-btn-${this.#el_exercise_control.id}">🔎 help</span> (${example[1]}) 
            <span class="text-span" id="clue-easy-${this.#el_exercise_control.id}-${this.#index_listen_and_write}">${origin}</span></br></br>
            <span class="icon next-btn-${this.#el_exercise_control.id}">⏭️ next </span></br></br>
            <span class="icon mic-btn-${this.#el_exercise_control.id}">🎙️ say </span></br><br>
        `;
        
        this.#el_exercise_control.innerHTML = `<p>${control}</p>`;
        
        // Вешаем обработчики после вставки HTML
        this.#el_exercise_control.querySelector(`.play-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            this.playSentence(origin);
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
}

