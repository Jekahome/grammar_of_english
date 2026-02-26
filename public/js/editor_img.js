
class EditorImg { 
    #editorText = null;
    #debugText = null;
    #callback = null;
    #currentText = '';
    #id = 'editor_img';
    #id_debug = 'debugText';

    constructor({callback,suffix_id=null}) {
        this.#callback = callback;
        this.#id = this.#id+`_${suffix_id}`;
        this.#id_debug = this.#id_debug+`_${suffix_id}`;

    }
    userCallback(){
        let result = this.#callback(this.#currentText);

        if (result === 1){
            this.#editorText.classList.remove('on');
            this.#editorText.classList.remove('error');
            this.#editorText.classList.add('on');
        }else if(result === 2){
            this.#editorText.classList.remove('error');
            this.#editorText.classList.remove('on');
            this.#editorText.classList.add('error');
        }else{
            this.#editorText.classList.remove('on');
            this.#editorText.classList.remove('error');
        }
    }
    clearEditor() {
        this.#currentText = '';
        this.renderText();
        this.#editorText.focus();
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
            this.renderText();
                
        } else {
            console.log('Недопустимый символ:',  text);
        }
    }   
    renderText() {
        // Очищаем редактор
        this.#editorText.innerHTML = '';
       
        // Создаем карточки для каждого символа из глобальной переменной
        for (let char of this.#currentText) {
            if (char === '\n') {
                this.#editorText.appendChild(document.createElement('br'));
            } else if (/^[a-z0-9.,!? '\-]$/i.test(char)) {
                if (char === '?'){
                    char='question';
                }else if (char === "'"){
                    char='apostrophe';
                }
                const letterCard = document.createElement('img');
                letterCard.src = `/img/alphabet/${char.toLowerCase()}.png`;
                letterCard.className = "alphabet-letter space-card";
                letterCard.alt = `Letter ${char}`;
                this.#editorText.appendChild(letterCard);
            } 
        }
        
        // Обновляем отладочную информацию
        this.#debugText.textContent = this.#currentText || '(пусто)';
        

        this.setCursorPosition();
        this.userCallback();
    }
    setCursorPosition(){
        // Ставим курсор в конец
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(this.#editorText);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    createListenAndWrite(container) {
  
        // Создаем details
        const details = document.createElement('details');
        
        // Создаем summary
        const summary = document.createElement('summary');
        summary.textContent = 'font img:';
        
        // Создаем br
        const br = document.createElement('br');
        
        // Создаем editor-container
        const editorContainer = document.createElement('div');
        editorContainer.className = 'editor-container';
        
        // Создаем editor
        const editor = document.createElement('div');
        editor.id = this.#id;
        editor.className = 'editor_img';
        editor.contentEditable = 'true';
        
        // Создаем debug блок
        const debug = document.createElement('div');
        debug.className = 'debug';
        
        const debugText = document.createElement('span');
        debugText.id = this.#id_debug;
        
        // Собираем структуру
        debug.appendChild(debugText);
        editorContainer.appendChild(editor);
        editorContainer.appendChild(debug);
        details.appendChild(summary);
        details.appendChild(br);
        details.appendChild(editorContainer);
         
        // Добавляем в контейнер
        container.appendChild(details);

        this.#editorText = document.getElementById(this.#id);
        this.#debugText = document.getElementById(this.#id_debug);

        this.#editorText.addEventListener('beforeinput', function(e) {
            e.preventDefault();
            
            const inputType = e.inputType;
          
            if (inputType === 'insertText') {
                if (e.data && this.isAllowedChar(e.data)) {
                    this.#currentText += e.data;
                    this.renderText();
                     
                } else {
                    console.log('Недопустимый символ:', e.data);
                }
            } else if (inputType === 'insertLineBreak') {
                // Enter
                this.#currentText += '\n';
                this.renderText();
            } else if (inputType === 'deleteContentBackward') {
                // Backspace
                this.#currentText = this.#currentText.slice(0, -1);
                this.renderText(); 
                
            } else if (inputType === 'deleteContentForward') {
                // Delete
                this.#currentText = '';
                this.renderText();
            } else if (inputType === 'insertFromPaste') {
                // Вставка (обрабатывается в paste event)
            }
        }.bind(this));

        // Обработка вставки текста
        this.#editorText.addEventListener('paste', function(e) {
                e.preventDefault();
                console.log("you need write");
        }.bind(this));
    }
}
 