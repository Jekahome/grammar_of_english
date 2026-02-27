
class EditorSymbol { 
    #editorText = null;
    #callback = null;
    #currentText = '';
    #id = 'editor_symbol'

    constructor({callback, suffix_id=null}) {
        this.#callback = callback;
        this.#id = this.#id+`_${suffix_id}`;
    }

    userCallback(){
        let result = this.#callback(this.#currentText);

        if (result){
            this.#editorText.classList.remove('on');
            this.#editorText.classList.remove('error');
            this.#editorText.classList.add('on');
        }else {
            this.#editorText.classList.remove('error');
            this.#editorText.classList.remove('on');
            this.#editorText.classList.add('error');
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
         
        this.#editorText.innerHTML = this.#currentText;

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
        summary.textContent = 'font HYWenHei:';
        
        // Создаем br после summary
        const br1 = document.createElement('br');
        
        // Создаем div с классом editor-container
        const editorContainer = document.createElement('div');
        editorContainer.className = 'editor-container';
        
        // Создаем редактор
        const editor = document.createElement('div');
        editor.id = this.#id;
        editor.className = 'editor_symbol font-HYWenHei';
        editor.contentEditable = 'true';
        
        // Собираем структуру
        editorContainer.appendChild(editor);
        details.appendChild(summary);
        details.appendChild(br1);
        details.appendChild(editorContainer);
        
        // Создаем два br после details
        const br2 = document.createElement('br');
        const br3 = document.createElement('br');
        
        // Добавляем все в контейнер
        container.appendChild(details);
        container.appendChild(br2);
        container.appendChild(br3);

        this.#editorText = document.getElementById(this.#id);

        this.#editorText.addEventListener('beforeinput', function(e) {
            e.preventDefault();
            
            const inputType = e.inputType;
            //console.log(`Event: ${e.inputType}`); 
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
                /*
                // Backspace
                this.#currentText = this.#currentText.slice(0, -1);
                this.renderText();
                */
                // Получаем позицию курсора
                const sel = window.getSelection();
                if (sel.rangeCount > 0) { 
                    const range = sel.getRangeAt(0);
                    
                    // Считаем позицию курсора в тексте
                    const preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(this.#editorText);
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    const cursorPosition = preCaretRange.toString().length;
                    
                    if (cursorPosition > 0) {console.log('.2');
                        // Удаляем символ перед курсором
                        this.#currentText = 
                            this.#currentText.slice(0, cursorPosition - 1) + 
                            this.#currentText.slice(cursorPosition);
                        
                        this.renderText();
                        
                        this.setCursorPosition();
                    }
                }
                    
            } else if (inputType === 'deleteContentForward') {
                // Delete
                this.#currentText = '';
                this.renderText();
            } else if (inputType === 'insertFromPaste') {
                // Вставка (обрабатывается в paste event)
            }
        }.bind(this));

        // keydown event - для стрелок и других спецклавиш
        /*this.#editorText.addEventListener('keyup', (e) => {
            //console.log(`Event keyup:${e}`);
            switch(e.key) {
                case 'ArrowLeft':
                    console.log('←');
                    this.#currentText = this.#currentText.slice(0, -1);
                    break;
                case 'ArrowRight':
                    console.log('→');
                    this.#currentText = this.#currentText.slice(0, 1);
                    break;
                case 'ArrowUp':
                    console.log('↑');
                    break;
                case 'ArrowDown':
                    console.log('↓');
                    break;
            }
        });*/

        // Обработка вставки текста
        this.#editorText.addEventListener('paste', function(e) {
                e.preventDefault();
                console.log("you need write");
                /*const text = e.clipboardData.getData('text/plain');
                
                // Фильтруем только допустимые символы
                const filteredText = text.split('').filter(char => this.isAllowedChar(char)).join('');
                
                this.#currentText += filteredText;
                this.renderText();*/
        }.bind(this));
    }
}
 