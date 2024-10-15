'use strict';

if (!('webkitSpeechRecognition' in window)) {
    upgrade();
}

class Practice { 
    #voice; 
    #recognizerResult = '';
    #callbackId = null;
    #callbackRecognition = null;

    static recognizer = null;
    static synth = null;
    static utterThis = null;
    static speechStart = false;
    static storeAudio = null;
    static isActivePractice3 = false;

    speak(val){
        console.log(val);
        // Browser speak
        Practice.utterThis.text = val;
        Practice.synth.speak(Practice.utterThis);
        Practice.utterThis.text = null;                
    }

    micOn(id){
        this.#callbackId = id;
        if (Practice.speechStart == false){
            Practice.recognizer.start();
        }else{
            Practice.speechStart = false;
            Practice.recognizer.stop();
        }
    }

/*
Practice.synth = window.speechSynthesis;
Practice.utterThis = new SpeechSynthesisUtterance();
Practice.utterThis.rate = 0.9;// скорость
Practice.utterThis.pitch = 0.9;// 0-2.0 высота голоса
Practice.utterThis.lang = 'en-US';
(function(){
    var voices = Practice.synth.getVoices();// list voices
    let index = voices.findIndex( o => o.lang == lang);
    if (index!=-1){
        Practice.utterThis.voice = voices[index];
    } 
})();
*/
    #setVoice(lang = "en-US") {
        var voices = Practice.synth.getVoices();// list voices
        let index = voices.findIndex( o => o.lang == lang);
        if (index!=-1){
            this.#voice = voices[index];
        }
    }

    constructor({rate=0.9, pitch=0.9, lang='en-US', callback}) {

        Practice.synth = window.speechSynthesis;
        //Practice.storeAudio = storeAudio;
        this.#voice = null;
        this.#callbackRecognition = callback;

        //this.#play_success = document.getElementById("play_success");
        //this.#play_success.load();
        //this.#play_success.volume = 0.3;

        // in Google Chrome the voices are not ready on page load
        if ('onvoiceschanged' in Practice.synth) {
            Practice.synth.onvoiceschanged = this.#setVoice;
            //console.log(Practice.synth.getVoices().filter(o => o.lang == 'en-US'));
        } else {
            this.#setVoice(lang);
        }

        Practice.utterThis = new SpeechSynthesisUtterance();
        Practice.utterThis.rate = rate;// скорость
        Practice.utterThis.pitch = pitch;// 0-2.0 высота голоса
        Practice.utterThis.voice = this.#voice;
        Practice.utterThis.lang = lang;
        //this.utterThis.onend = function(event) { console.log('Finished in ' + event.elapsedTime + ' seconds.'); }
        Practice.utterThis.onstart = function (event) {
            console.log('onstart SpeechSynthesisUtterance'); 
        };

        Practice.utterThis.onend = function (event) {
            console.log('onend SpeechSynthesisUtterance');
        };

        //Practice.utterThis.onerror = function (event) {console.log('onerror SpeechSynthesisUtterance ',event);};
        //Practice.utterThis.onpause = function (event) {console.log('onpause SpeechSynthesisUtterance');};
        //Practice.utterThis.onresume = function (event) {console.log('onresume SpeechSynthesisUtterance');};
        //Practice.utterThis.onmark = function (event) {console.log('onmark SpeechSynthesisUtterance');};
        //Practice.utterThis.onboundary = function (event) {console.log('onboundary SpeechSynthesisUtterance');};

        //----------------------------------------------------
        // Создаем распознаватель
        Practice.recognizer = new webkitSpeechRecognition();
        //
        //  var bg = document.querySelector('html');
        //  const colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
        //  const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')};`
        //  const speechRecognitionList = new webkitSpeechGrammarList();
        //  speechRecognitionList.addFromString(grammar, 1);
        //  recognizer.grammars = speechRecognitionList;
        //
        Practice.recognizer.continuous = true;// true - непрерывный захват результатов/false - только одного результата при каждом запуске распознавания
        Practice.recognizer.lang = 'en-US';// Какой язык будем распознавать? en-US,ru-Ru
        Practice.recognizer.interimResults = true;// true - распознавание началось ещё до того, как пользователь закончит говорить
        Practice.recognizer.maxAlternatives = 2;// максимальное количество SpeechRecognitionAlternatives на результат

        Practice.recognizer.onresult = function (event) {
            this.#recognizerResult='';
            // Запускается, когда распознаватель речи возвращает результат
            var result = event.results[event.resultIndex];
            if (result.isFinal) {
                console.log(`Точность: ${result[0].confidence.toFixed(4)}: ${result[0].transcript}`);
                //result_speak = result[0].transcript;
                // TODO:перенес показ конечного результата в событие завершения прослушивания
                //textarea.value = result[0].transcript; 
                //if (colors.indexOf(result[0].transcript,0) != -1){ bg.style.backgroundColor = result[0].transcript;}
                this.#recognizerResult = result[0].transcript;
            } else {
                console.log(`Точность ${result[0].confidence.toFixed(4)}: ${result[0].transcript}`);
                // TODO: даже если ответ не будет распознан до состояния isFinal то возможно промежуточный результат что-то даст
                if (result[0].confidence > 0.0098 /*0.5*/){
                    //result_speak = result[0].transcript;
                    //console.log('Результат: ', result[0].transcript);
                    this.#recognizerResult = result[0].transcript;
                }
            }


            console.log(`распознано: ${this.#recognizerResult}`)
            this.#callbackRecognition(this.#callbackId, this.#recognizerResult);
            // управление должно быть в методе инициировавшим распознание
            // if (Practice.speechStart == false){Practice.recognizer.start();}
            this.#recognizerResult='';
            Practice.recognizer.stop();
            Practice.speechStart = false;
        }.bind(this);

        Practice.recognizer.onstart = function (event) {
            console.info('onstart');
            Practice.speechStart = true;
        }.bind(this);

        Practice.recognizer.onerror = function (event) {
            // event SpeechRecognitionErrorEvent
            console.error('onerror ',event.error);
            if (event.error == 'no-speech'){
                Practice.recognizer.stop();
                Practice.speechStart = false;
            }
        }.bind(this);

        Practice.recognizer.onend = function (event) {
            //console.info('onend');
        };
        Practice.recognizer.onaudiostart = function (event) {
            // Запускается, когда пользовательский агент начал захват звука.
            console.info('onaudiostart начал захват звука');
        };
        Practice.recognizer.onsoundstart = function (event) {
            // Запускается при обнаружении какого-либо звука, возможно, речи.Активно после onstart и onaudiostart
            console.info('onsoundstart какого-либо звук');
        };
        Practice.recognizer.onspeechstart = function (event) {
            // Активна речь
            console.info('onspeechstart активна речь');
        };
        Practice.recognizer.onspeechend = function (event) {
            // Речь не распознается
            console.info('onspeechend речь не распознается');
        };
        Practice.recognizer.onsoundend = function (event) {
            // Запускается, когда какой-либо звук больше не определяется
            console.info('onsoundend какой-либо звук больше не определяется');
        };
        Practice.recognizer.onaudioend = function (event) {
            // Запускается, когда пользовательский агент закончил захват звука. 
            console.info('onaudioend закончил захват звука');
            if (this.#recognizerResult != ''){
                console.log('----->',`${this.#recognizerResult}`);
                this.#callbackRecognition(this.#callbackId, this.#recognizerResult);
                this.#recognizerResult='';
            }
            Practice.recognizer.stop();
            Practice.speechStart = false;
        }.bind(this);
        
        Practice.recognizer.onnomatch = function (event) {
            // Запускается, когда распознаватель речи возвращает окончательный результат без гипотезы распознавания
            // event SpeechRecognitionEvent
            console.info('onnomatch');
            Practice.recognizer.stop();
            Practice.speechStart = false;
        };
    }
}

