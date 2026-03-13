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
    recognition_timer = null;
 
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

        this.#el_listen_and_write.appendChild(button);

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
        const contractions = {
            "they're": "they are",
            "you're": "you are",
            "we're": "we are",
            "let's": "let us",
            "'s": " is",
            
            "i'm": "i am",

            "isn't": "is not",
            "aren't": "are not",
            "wasn't": "was not",
            "weren't": "were not",
            "doesn't": "does not",
            "don't": "do not",
            "didn't": "did not",
            "hasn't": "has not",
            "haven't": "have not",
            "can't": "can not",
            "couldn't": "could not",
            "won't": "will not",
            "shan't": "shall not",

            "i'll": "i will",
            "he'll": "he will",
            "she'll": "she will",
            "it'll": "it will",
            "we'll": "we will",
            "you'll": "you will",
            "they'll": "they will",
            "there'll": "there will",

            "i've": "i have",
            "they've": "they have",
            "we've": "we have",
            "you've": "you have",
            "must've": "must have",
            // некорректные формы
            "dont": "do not"
        };

        return input
            .normalize("NFKC")
            // 1. нормализация апострофов
            .replace(/[\u2018\u2019\u02BC\u2032]/g, "'")

            // 2. lowercase
            .toLowerCase()

            // 3. раскрытие сокращений
            .replace(/\b[\w']+\b/g, word => contractions[word] || word)
            .replace(/[.—?!]/g, '')
            // 4. схлопывание пробелов
            .replace(/\s+/g, " ")
            .trim();
    }

    nextSentence(){
        this.clearEditor();
        this.genExercisesListenAndWrite();
    }

    getAnswer(){
        return this.#answer;
    }
}