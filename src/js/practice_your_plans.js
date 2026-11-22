'use strict';
 
class PracticeYourPlans { 
    #el_listen_and_write = null;
    #el_exercise_control = null
    #editor_voice_1 = null;
    #editor_voice_2 = null;
    #editor_voice_3 = null;
    #editor_voice_4 = null;
    #editor_voice_5 = null;
 
    //#editor_symbol = null;
    #index_listen_and_write = -1;
    #exercises_listen_and_write = [];
    recognition_timer = null;
    #records = [];

    constructor({el_listen_and_write, el_exercise_control, exercises_listen_and_write=[]}) {
        this.#el_listen_and_write = el_listen_and_write;
        this.#el_exercise_control = el_exercise_control;
        this.#exercises_listen_and_write = getRandomMix(exercises_listen_and_write, false);
    
        this.#editor_voice_1 = new EditorVoice({callback: (result, id) => this.recognition_1(result, id)});
        this.#editor_voice_2 = new EditorVoice({callback: (result, id) => this.recognition_2(result, id)});
        this.#editor_voice_3 = new EditorVoice({callback: (result, id) => this.recognition_3(result, id)});
        this.#editor_voice_4 = new EditorVoice({callback: (result, id) => this.recognition_4(result, id)});
        this.#editor_voice_5 = new EditorVoice({callback: (result, id) => this.recognition_5(result, id)});

        this.recognition_timer = null;
    }

    recognition_1(recognition, id=null){
         if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
        }
        this.recognition_timer = setTimeout(() => {
            this.setRecognition(recognition, 1);
            this.recognition_timer = null;  
        }, 500); 
    }
    recognition_2(recognition, id=null){
         if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
        }
        this.recognition_timer = setTimeout(() => {
            this.setRecognition(recognition, 2);
            this.recognition_timer = null;  
        }, 500); 
    }
    recognition_3(recognition, id=null){
         if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
        }
        this.recognition_timer = setTimeout(() => {
            this.setRecognition(recognition, 3);
            this.recognition_timer = null;  
        }, 500); 
    }
    recognition_4(recognition, id=null){
         if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
        }
        this.recognition_timer = setTimeout(() => {
            this.setRecognition(recognition, 4);
            this.recognition_timer = null;  
        }, 500); 
    }
    recognition_5(recognition, id=null){
         if (this.recognition_timer) {
            clearTimeout(this.recognition_timer);
        }
        this.recognition_timer = setTimeout(() => {
            this.setRecognition(recognition, 5);
            this.recognition_timer = null;  
        }, 500); 
    }

    speak(sentence, question_number){
        switch (question_number) {
            case 1: 
                this.#editor_voice_1.speak(sentence);
                break;
            case 2:
                this.#editor_voice_2.speak(sentence);
                break;
            case 3:
                this.#editor_voice_3.speak(sentence);
                break;
            case 4:
                this.#editor_voice_4.speak(sentence);
                break; 
            case 5:
                this.#editor_voice_5.speak(sentence);
                break;     
        } 
    }
   
    micOn(micEl, id, question_number){
        switch (question_number) {
            case 1: 
                this.#editor_voice_1.micOn(micEl, id);
                break;
            case 2:
                this.#editor_voice_2.micOn(micEl, id);
                break;
            case 3:
                this.#editor_voice_3.micOn(micEl, id);
                break;
            case 4:
                this.#editor_voice_4.micOn(micEl, id);
                break; 
            case 5:
                this.#editor_voice_5.micOn(micEl, id);
                break;                 
        } 
    }

    setRecognition(recognition, question_number){
        const answer = this.#el_exercise_control.querySelector(`#answer-${question_number}-${this.#el_exercise_control.id}`);
        if (answer) answer.value = recognition;
    }
   
    genExercisesListenAndWrite(){
        this.#index_listen_and_write += 1; 
        if (this.#index_listen_and_write == this.#exercises_listen_and_write.length){
            this.#index_listen_and_write = 0;
        }
        let example = this.#exercises_listen_and_write[this.#index_listen_and_write];
        
        let origin = example[0];
        let translate = example[1];
        let question_1 = example[2];
        let question_2 = example[3];
        let question_3 = example[4];
        let question_4 = example[5];
        let question_5 = example[6];
        let nouns = example[7];

        let control = `
            Use the verb <b><i>"${origin}"</i></b> with the nouns:<br> ${nouns.join(", ")}<br><br>
             
            <span class="icon play-btn-1-${this.#el_exercise_control.id}">⏯️ (What are you doing now?) </span></br></br>
            <span class="icon help-btn-1-${this.#el_exercise_control.id}">🔎 </span> For example: <i>${question_1[1]}</i>
            <span class="text-span" id="clue-easy-1-${this.#el_exercise_control.id}-${this.#index_listen_and_write}"><b>${translate}</b> (для формы ${question_1[0]})</span></br></br>
            <span class="icon mic-btn-1-${this.#el_exercise_control.id}">🎙️ say </span></br><br>
            <textarea name="answer" id="answer-1-${this.#el_exercise_control.id}" style="width: 100%; min-height: 60px; resize: none;" placeholder="Write your answer in English. Use a browser extension to check grammar." lang="en" spellcheck="true" rows="4"></textarea></br>
            <audio id="recorded-audio-1-${this.#el_exercise_control.id}" controls style="display:none; width:100%;"></audio>
            <hr></br>
            <span class="icon play-btn-2-${this.#el_exercise_control.id}">⏯️ (What do you usually do every day?) </span></br></br>
            <span class="icon help-btn-2-${this.#el_exercise_control.id}">🔎 </span> For example: <i>${question_2[1]}</i>
            <span class="text-span" id="clue-easy-2-${this.#el_exercise_control.id}-${this.#index_listen_and_write}"><b>${translate}</b> (для формы ${question_2[0]})</span></br></br>
            <span class="icon mic-btn-2-${this.#el_exercise_control.id}">🎙️ say </span></br><br>
            <textarea name="answer" id="answer-2-${this.#el_exercise_control.id}" style="width: 100%; min-height: 60px; resize: none;" placeholder="Write your answer in English. Use a browser extension to check grammar." lang="en" spellcheck="true" rows="4"></textarea></br>
            <audio id="recorded-audio-2-${this.#el_exercise_control.id}" controls style="display:none; width:100%;"></audio>
            <hr></br>
            <span class="icon play-btn-3-${this.#el_exercise_control.id}">⏯️ (What did you do yesterday?) </span></br></br>
            <span class="icon help-btn-3-${this.#el_exercise_control.id}">🔎 </span> For example: <i>${question_3[1]}</i>
            <span class="text-span" id="clue-easy-3-${this.#el_exercise_control.id}-${this.#index_listen_and_write}"><b>${translate}</b> для формы (${question_3[0]})</span></br></br>
            <span class="icon mic-btn-3-${this.#el_exercise_control.id}">🎙️ say </span></br><br>
            <textarea name="answer" id="answer-3-${this.#el_exercise_control.id}" style="width: 100%; min-height: 60px; resize: none;" placeholder="Write your answer in English. Use a browser extension to check grammar." lang="en" spellcheck="true" rows="4"></textarea></br>
            <audio id="recorded-audio-3-${this.#el_exercise_control.id}" controls style="display:none; width:100%;"></audio>
            <hr></br>
            <span class="icon play-btn-4-${this.#el_exercise_control.id}">⏯️ (What are you going to do tomorrow?) </span></br></br>
            <span class="icon help-btn-4-${this.#el_exercise_control.id}">🔎 </span> For example: <i>${question_4[1]}</i>
            <span class="text-span" id="clue-easy-4-${this.#el_exercise_control.id}-${this.#index_listen_and_write}"><b>${translate}</b> для формы (${question_4[0]})</span></br></br>
            <span class="icon mic-btn-4-${this.#el_exercise_control.id}">🎙️ say </span></br><br>
            <textarea name="answer" id="answer-4-${this.#el_exercise_control.id}" style="width: 100%; min-height: 60px; resize: none;" placeholder="Write your answer in English. Use a browser extension to check grammar." lang="en" spellcheck="true" rows="4"></textarea></br>
            <audio id="recorded-audio-4-${this.#el_exercise_control.id}" controls style="display:none; width:100%;"></audio>
            <hr></br>
            <span class="icon play-btn-5-${this.#el_exercise_control.id}">⏯️ What are your plans for today?) </span></br></br>
            <span class="icon help-btn-5-${this.#el_exercise_control.id}">🔎 </span> For example: <i>${question_5[1]}</i>
            <span class="text-span" id="clue-easy-5-${this.#el_exercise_control.id}-${this.#index_listen_and_write}"><b>${translate}</b> для формы (${question_5[0]})</span></br></br>
            <span class="icon mic-btn-5-${this.#el_exercise_control.id}">🎙️ say </span></br><br>
            <textarea name="answer" id="answer-5-${this.#el_exercise_control.id}" style="width: 100%; min-height: 60px; resize: none;" placeholder="Write your answer in English. Use a browser extension to check grammar." lang="en" spellcheck="true" rows="4"></textarea></br>
            <audio id="recorded-audio-5-${this.#el_exercise_control.id}" controls style="display:none; width:100%;"></audio>
            </br>
            <span class="icon next-btn-${this.#el_exercise_control.id}">⏭️ next </span></br></br>
            `;
        
        this.#el_exercise_control.innerHTML = `<p>${control}</p>`;
         
        // Each Record only receives its generated <audio> element.
        for (let n = 1; n <= 5; n++) {
            const audio = this.#el_exercise_control.querySelector(
                `#recorded-audio-${n}-${this.#el_exercise_control.id}`
            );
            this.#records.push(new Record(audio));
        }

        this.#el_exercise_control.querySelector(`.next-btn-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            this.nextWord();
        });

        this.#el_exercise_control.querySelector(`.play-btn-1-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            let s = `What are you doing now? Use the word - ${origin}.`
            this.playSentence(s, 1);
        });
        this.#el_exercise_control.querySelector(`.help-btn-1-${this.#el_exercise_control.id}`).addEventListener('click', () => {
           this.showClue(`clue-easy-1-${this.#el_exercise_control.id}-${this.#index_listen_and_write}`);
        });
        this.#el_exercise_control.querySelector(`.mic-btn-1-${this.#el_exercise_control.id}`).addEventListener('click', (e) => {
            this.#records.forEach((record, index) => {
                if (index !== 0) record.stop();
            });
            this.#records[0].start();
            this.micOn(e.target, null, 1);
        });
        this.#el_exercise_control.querySelector(`#answer-1-${this.#el_exercise_control.id}`).addEventListener('input', function(e) {
        }.bind(this));
        this.#el_exercise_control.querySelector(`#answer-1-${this.#el_exercise_control.id}`).addEventListener('paste', function(e) {
            e.preventDefault();
            console.log("you need write");
        }.bind(this));



        this.#el_exercise_control.querySelector(`.play-btn-2-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            let s = `What do you usually do every day? Use the word - ${origin}.`
            this.playSentence(s, 2);
        });
        this.#el_exercise_control.querySelector(`.help-btn-2-${this.#el_exercise_control.id}`).addEventListener('click', () => {
           this.showClue(`clue-easy-2-${this.#el_exercise_control.id}-${this.#index_listen_and_write}`);
        });
        this.#el_exercise_control.querySelector(`.mic-btn-2-${this.#el_exercise_control.id}`).addEventListener('click', (e) => {
           // Stop any other recording; current one ends automatically on silence.
            this.#records.forEach((record, index) => {
                if (index !== 1) record.stop();
            });
            this.#records[1].start();
            this.micOn(e.target, null, 2);
        });
        this.#el_exercise_control.querySelector(`#answer-2-${this.#el_exercise_control.id}`).addEventListener('input', function(e) {
        }.bind(this));
        this.#el_exercise_control.querySelector(`#answer-2-${this.#el_exercise_control.id}`).addEventListener('paste', function(e) {
            e.preventDefault();
            console.log("you need write");
        }.bind(this));



        this.#el_exercise_control.querySelector(`.play-btn-3-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            let s = `What did you do yesterday? Use the word - ${origin}.`
            this.playSentence(s, 3);
        });
        this.#el_exercise_control.querySelector(`.help-btn-3-${this.#el_exercise_control.id}`).addEventListener('click', () => {
           this.showClue(`clue-easy-3-${this.#el_exercise_control.id}-${this.#index_listen_and_write}`); 
        });
        this.#el_exercise_control.querySelector(`.mic-btn-3-${this.#el_exercise_control.id}`).addEventListener('click', (e) => {
            // Stop any other recording; current one ends automatically on silence.
            this.#records.forEach((record, index) => {
                if (index !== 2) record.stop();
            });
            this.#records[2].start();
            this.micOn(e.target, null, 3);
        });
        this.#el_exercise_control.querySelector(`#answer-3-${this.#el_exercise_control.id}`).addEventListener('input', function(e) {
        }.bind(this));
        this.#el_exercise_control.querySelector(`#answer-3-${this.#el_exercise_control.id}`).addEventListener('paste', function(e) {
            e.preventDefault();
            console.log("you need write");
        }.bind(this));



        this.#el_exercise_control.querySelector(`.play-btn-4-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            let s = `What are you going to do tomorrow? Use the word - ${origin}.`
            this.playSentence(s, 4);
        });
        this.#el_exercise_control.querySelector(`.help-btn-4-${this.#el_exercise_control.id}`).addEventListener('click', () => {
           this.showClue(`clue-easy-4-${this.#el_exercise_control.id}-${this.#index_listen_and_write}`); 
        });
        this.#el_exercise_control.querySelector(`.mic-btn-4-${this.#el_exercise_control.id}`).addEventListener('click', (e) => {
            // Stop any other recording; current one ends automatically on silence.
            this.#records.forEach((record, index) => {
                if (index !== 3) record.stop();
            });
            this.#records[3].start();
            this.micOn(e.target, null, 4);
        });
        this.#el_exercise_control.querySelector(`#answer-4-${this.#el_exercise_control.id}`).addEventListener('input', function(e) {
        }.bind(this));
        this.#el_exercise_control.querySelector(`#answer-4-${this.#el_exercise_control.id}`).addEventListener('paste', function(e) {
            e.preventDefault();
            console.log("you need write");
        }.bind(this));


        this.#el_exercise_control.querySelector(`.play-btn-5-${this.#el_exercise_control.id}`).addEventListener('click', () => {
            let s = `What are your plans for today? Use the word - ${origin}.`
            this.playSentence(s, 5);
        });
        this.#el_exercise_control.querySelector(`.help-btn-5-${this.#el_exercise_control.id}`).addEventListener('click', () => {
           this.showClue(`clue-easy-5-${this.#el_exercise_control.id}-${this.#index_listen_and_write}`); 
        });
        this.#el_exercise_control.querySelector(`.mic-btn-5-${this.#el_exercise_control.id}`).addEventListener('click', (e) => {
            // Stop any other recording; current one ends automatically on silence.
            this.#records.forEach((record, index) => {
                if (index !== 4) record.stop();
            });
            this.#records[4].start();
            this.micOn(e.target, null, 5);
        });
        this.#el_exercise_control.querySelector(`#answer-5-${this.#el_exercise_control.id}`).addEventListener('input', function(e) {
        }.bind(this));
        this.#el_exercise_control.querySelector(`#answer-5-${this.#el_exercise_control.id}`).addEventListener('paste', function(e) {
            e.preventDefault();
            console.log("you need write");
        }.bind(this));        

    }

    showClue(id) {
        var el = document.getElementById(id);
        el.style.visibility = "visible"; 

        setTimeout(function() {
            el.style.visibility = "hidden";
        }, 5000);
    }

    playSentence(sentence, question_number=1){
        this.speak(sentence, question_number);
    }

    textNormalize(input) {
        return textNormalize(input);
    }

    nextWord(){
        this.genExercisesListenAndWrite();
    }

 
 
}

