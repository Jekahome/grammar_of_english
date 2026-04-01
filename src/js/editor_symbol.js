

class EditorSymbol { 
    #elEditorText = null;
    #callback = null;
    #callback_practice = null;
    #currentText = '';
    #id = 'editor_symbol'

    constructor({callback, suffix_id=null}) {
        this.#callback = callback;
        this.#id = this.#id + `_${suffix_id}`;
    }
    attachCallback(callback_practice){
        this.#callback_practice = callback_practice;
    }

    userCallback(){
        console.log('userCallback');
        let result = this.#callback(this.#elEditorText.value);

        if (result){
            this.#elEditorText.classList.remove('on');
            this.#elEditorText.classList.remove('error');
            this.#elEditorText.classList.add('on');
        }else {
            this.#elEditorText.classList.remove('error');
            this.#elEditorText.classList.remove('on');
            this.#elEditorText.classList.add('error');
        }
        if (this.#callback_practice){
            console.log('userCallback callback_practice' );
            this.#callback_practice(result);
        }
    }
    clearEditor() {
        this.#elEditorText.value = '';
        this.#currentText = '';
        this.renderText(this.#currentText);
        this.#elEditorText.focus();
    }

    // проверки допустимых символов
    isAllowedChar(char) {
        // Английские буквы (a-z, A-Z), знаки пунктуации, пробел, перенос строки
        const allowedPattern = /^[a-zA-Z0-9\s\n. ,!?'()\-]$/;
        return allowedPattern.test(char);
    }
    isAllowedSentence(sentence) {
        // Английские буквы, цифры, знаки пунктуации, пробелы, переносы строк
        const allowedPattern = /^[a-zA-Z0-9\s\n.,!?'()\-]+$/;
        return allowedPattern.test(sentence);
    }
    setRecognition(text){
        if (text && this.isAllowedSentence(text)) {
            this.#currentText = text;
            this.renderText(this.#currentText);
                
        } else {
            console.log('Недопустимый символ:',  text);
        }
    }
    renderText(text) {
        // Очищаем редактор
        this.#elEditorText.value = '';
        this.#elEditorText.value = text;
        this.userCallback();
    }

    createListenAndWrite(container) {
          
        // Создаем div с классом editor-container
        const editorContainer = document.createElement('div');
        editorContainer.className = 'editor-container';
        
        // Создаем редактор
        const elEditorText = document.createElement('input');
        elEditorText.type = "text";
        elEditorText.id = this.#id;
        elEditorText.className = 'editor_symbol font-HYWenHei';
        elEditorText.contentEditable = 'true';
        
        // Собираем структуру
        editorContainer.appendChild(elEditorText);
      
        container.appendChild(editorContainer);

        elEditorText.addEventListener('input', function(e) {
            console.log('WTF');
           this.userCallback();
        }.bind(this));

        // Обработка вставки текста
        elEditorText.addEventListener('paste', function(e) {
            e.preventDefault();
            console.log("you need write");
        }.bind(this));

       this.#elEditorText = elEditorText;//document.getElementById(this.#id);
    }
}
 