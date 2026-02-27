'use strict';

if (!('webkitSpeechRecognition' in window)) {
    upgrade();
}

class EditorVoice { 
    #voice; 
    #recognizerResult = '';
    #callbackId = null;
    #micEl = null;
    #callbackRecognition = null;

    static recognizer = null;
    static synth = null;
    static utterThis = null;
    static speechStart = false;
    static storeAudio = null;
    static isActivePractice3 = false;

    speak(val){
        //console.log(val);
        // Browser speak
        EditorVoice.synth.cancel();
        EditorVoice.utterThis.text = val;
        EditorVoice.synth.speak(EditorVoice.utterThis);
        EditorVoice.utterThis.text = null;                
    }

    micOn(micEl, id=null){
        this.#callbackId = id;
        this.#micEl = micEl;
        if (EditorVoice.speechStart == false){
            EditorVoice.recognizer.start();
            this.#micEl.style.backgroundColor = '#e95400';
        }else{
            EditorVoice.speechStart = false;
            EditorVoice.recognizer.stop();
            this.#micEl.style.backgroundColor = '';
        }
    }

    /*
    EditorVoice.synth = window.speechSynthesis;
    EditorVoice.utterThis = new SpeechSynthesisUtterance();
    EditorVoice.utterThis.rate = 0.9;// скорость
    EditorVoice.utterThis.pitch = 0.9;// 0-2.0 высота голоса
    EditorVoice.utterThis.lang = 'en-US';
    (function(){
        var voices = EditorVoice.synth.getVoices();// list voices
        let index = voices.findIndex( o => o.lang == lang);
        if (index!=-1){
            EditorVoice.utterThis.voice = voices[index];
        } 
    })();
    */
    #setVoice(lang = "en-US") {
        var voices = EditorVoice.synth.getVoices();// list voices
        let index = voices.findIndex( o => o.lang == lang);
        if (index!=-1){
            this.#voice = voices[index];
        }
    }

    constructor({rate=0.9, pitch=0.9, lang='en-US', callback}) {

        EditorVoice.synth = window.speechSynthesis;
        //EditorVoice.storeAudio = storeAudio;
        this.#voice = null;
        this.#callbackRecognition = callback;

        //this.#play_success = document.getElementById("play_success");
        //this.#play_success.load();
        //this.#play_success.volume = 0.3;

        // in Google Chrome the voices are not ready on page load
        if ('onvoiceschanged' in EditorVoice.synth) {
            EditorVoice.synth.onvoiceschanged = this.#setVoice;
            //console.log(EditorVoice.synth.getVoices().filter(o => o.lang == 'en-US'));
        } else {
            this.#setVoice(lang);
        }

        EditorVoice.utterThis = new SpeechSynthesisUtterance();
        EditorVoice.utterThis.rate = rate;// скорость
        EditorVoice.utterThis.pitch = pitch;// 0-2.0 высота голоса
        EditorVoice.utterThis.voice = this.#voice;
        EditorVoice.utterThis.lang = lang;
        //this.utterThis.onend = function(event) { console.log('Finished in ' + event.elapsedTime + ' seconds.'); }
        EditorVoice.utterThis.onstart = function (event) {
            console.log('onstart SpeechSynthesisUtterance'); 
        };

        EditorVoice.utterThis.onend = function (event) {
            console.log('onend SpeechSynthesisUtterance');
        };

        //EditorVoice.utterThis.onerror = function (event) {console.log('onerror SpeechSynthesisUtterance ',event);};
        //EditorVoice.utterThis.onpause = function (event) {console.log('onpause SpeechSynthesisUtterance');};
        //EditorVoice.utterThis.onresume = function (event) {console.log('onresume SpeechSynthesisUtterance');};
        //EditorVoice.utterThis.onmark = function (event) {console.log('onmark SpeechSynthesisUtterance');};
        //EditorVoice.utterThis.onboundary = function (event) {console.log('onboundary SpeechSynthesisUtterance');};

        //----------------------------------------------------
        // Создаем распознаватель
        EditorVoice.recognizer = new webkitSpeechRecognition();
        //
        //  var bg = document.querySelector('html');
        //  const colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
        //  const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')};`
        //  const speechRecognitionList = new webkitSpeechGrammarList();
        //  speechRecognitionList.addFromString(grammar, 1);
        //  recognizer.grammars = speechRecognitionList;
        //
        EditorVoice.recognizer.continuous = true;// true - непрерывный захват результатов/false - только одного результата при каждом запуске распознавания
        EditorVoice.recognizer.lang = 'en-US';// Какой язык будем распознавать? en-US,ru-Ru
        EditorVoice.recognizer.interimResults = true;// true - распознавание началось ещё до того, как пользователь закончит говорить
        EditorVoice.recognizer.maxAlternatives = 2;// максимальное количество SpeechRecognitionAlternatives на результат

        EditorVoice.recognizer.onresult = function (event) {
            this.#recognizerResult='';
            // Запускается, когда распознаватель речи возвращает результат
            var result = event.results[event.resultIndex];
            if (result.isFinal) {
                //console.log(`Точность: ${result[0].confidence.toFixed(4)}: ${result[0].transcript}`);
                //result_speak = result[0].transcript;
                // TODO:перенес показ конечного результата в событие завершения прослушивания
                //textarea.value = result[0].transcript; 
                //if (colors.indexOf(result[0].transcript,0) != -1){ bg.style.backgroundColor = result[0].transcript;}
                this.#recognizerResult = result[0].transcript;
            } else {
                //console.log(`Точность ${result[0].confidence.toFixed(4)}: ${result[0].transcript}`);
                // TODO: даже если ответ не будет распознан до состояния isFinal то возможно промежуточный результат что-то даст
                if (result[0].confidence > 0.7 /*0.5*/){
                    //result_speak = result[0].transcript;
                    //console.log('Результат: ', result[0].transcript);
                    this.#recognizerResult = result[0].transcript;
                }
            }

            //console.log(`распознано: ${this.#recognizerResult}`)
            if (this.#recognizerResult != ''){
                this.#callbackRecognition(this.#recognizerResult, this.#callbackId);
                // управление должно быть в методе инициировавшим распознание
                // if (EditorVoice.speechStart == false){EditorVoice.recognizer.start();}
                this.#recognizerResult='';
                EditorVoice.recognizer.stop();
                EditorVoice.speechStart = false;
                this.#micEl.style.backgroundColor = '';                
            }

        }.bind(this);

        EditorVoice.recognizer.onstart = function (event) {
            console.info('onstart');
            EditorVoice.speechStart = true;
        }.bind(this);

        EditorVoice.recognizer.onerror = function (event) {
            // event SpeechRecognitionErrorEvent
            console.error('onerror ',event.error);
            if (event.error == 'no-speech'){
                EditorVoice.recognizer.stop();
                EditorVoice.speechStart = false;
            }
        }.bind(this);

        EditorVoice.recognizer.onend = function (event) {
            //console.info('onend');
        };
        EditorVoice.recognizer.onaudiostart = function (event) {
            // Запускается, когда пользовательский агент начал захват звука.
            console.info('onaudiostart начал захват звука');
        };
        EditorVoice.recognizer.onsoundstart = function (event) {
            // Запускается при обнаружении какого-либо звука, возможно, речи.Активно после onstart и onaudiostart
            console.info('onsoundstart какого-либо звук');
        };
        EditorVoice.recognizer.onspeechstart = function (event) {
            // Активна речь
            console.info('onspeechstart активна речь');
        };
        EditorVoice.recognizer.onspeechend = function (event) {
            // Речь не распознается
            console.info('onspeechend речь не распознается');
        };
        EditorVoice.recognizer.onsoundend = function (event) {
            // Запускается, когда какой-либо звук больше не определяется
            console.info('onsoundend какой-либо звук больше не определяется');
        };
        EditorVoice.recognizer.onaudioend = function (event) {
            // Запускается, когда пользовательский агент закончил захват звука. 
            console.info('onaudioend закончил захват звука');
            if (this.#recognizerResult != ''){
                //console.log('----->',`${this.#recognizerResult}`);
                this.#callbackRecognition(this.#recognizerResult, this.#callbackId);
                this.#recognizerResult='';
            }
            EditorVoice.recognizer.stop();
            EditorVoice.speechStart = false;
            this.#micEl.style.backgroundColor = '';
        }.bind(this);
        
        EditorVoice.recognizer.onnomatch = function (event) {
            // Запускается, когда распознаватель речи возвращает окончательный результат без гипотезы распознавания
            // event SpeechRecognitionEvent
            console.info('onnomatch');
            EditorVoice.recognizer.stop();
            EditorVoice.speechStart = false;
        };
    }
}

// Показывает подсказку
function showClue(id) {
    var el = document.getElementById(id);
    el.style.visibility = "visible"; 

    setTimeout(function() {
        el.style.visibility = "hidden";
    }, 3000);
}

// Перемегивать слова вв педложении
function shuffleSentence(sentence) {
    const cleanedSentence = sentence
        .replace(/[.,]/g, "")        // Убираем точки и запятые
        .replace(/([!?])/g, " $1 ")  // Отделяем ? и ! пробелами
        .toLowerCase();              // Приводим к нижнему регистру

    const words = cleanedSentence.split(" ");
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));   
        [words[i], words[j]] = [words[j], words[i]];    
    }
    return words.join(" ");
}

// Выдать рандомный вариант
function getRandomMix(arr) {
    let thirdLength = Math.ceil(arr.length / 3); 
    if (arr.length <= 20){thirdLength = arr.length};
    const randomIndices = new Set(); 
    while (randomIndices.size < thirdLength) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        randomIndices.add(randomIndex);
    }
    const randomElements = Array.from(randomIndices).map(index => arr[index]);
    return randomElements;
}