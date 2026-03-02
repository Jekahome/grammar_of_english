
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
                    const pos = this.#getCursorPosition();
                    this.#currentText = 
                        this.#currentText.slice(0, pos) + e.data + this.#currentText.slice(pos);
                    this.#editorText.innerHTML = this.#currentText;
                    this.userCallback();
                    this.#restoreCursorPosition(pos + 1);
                }
            } else if (inputType === 'insertLineBreak') {
                // Enter
                this.#currentText += '\n';
                this.renderText();
            } else if (inputType === 'deleteContentBackward') {
                const sel = window.getSelection();
                if (sel.rangeCount > 0) { 
                    const range = sel.getRangeAt(0);
                    
                    const preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(this.#editorText);
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    const cursorPosition = preCaretRange.toString().length;
                    
                    if (cursorPosition > 0) {
                        this.#currentText = 
                            this.#currentText.slice(0, cursorPosition - 1) + 
                            this.#currentText.slice(cursorPosition);
                        
                        // Рендерим без setCursorPosition внутри
                        this.#editorText.innerHTML = this.#currentText;
                        this.userCallback();
                        
                        // Восстанавливаем курсор на нужную позицию
                        this.#restoreCursorPosition(cursorPosition - 1);
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

    #getCursorPosition() {
        const sel = window.getSelection();
        if (sel.rangeCount === 0) return this.#currentText.length;
        
        const range = sel.getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(this.#editorText);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        return preCaretRange.toString().length;
    }

    #restoreCursorPosition(targetPos) {
        const sel = window.getSelection();
        const range = document.createRange();
        
        let currentPos = 0;
        let found = false;
        
        const traverseNodes = (node) => {
            if (found) return;
            
            if (node.nodeType === Node.TEXT_NODE) {
                const nodeLength = node.textContent.length;
                if (currentPos + nodeLength >= targetPos) {
                    range.setStart(node, targetPos - currentPos);
                    range.collapse(true);
                    found = true;
                } else {
                    currentPos += nodeLength;
                }
            } else {
                for (const child of node.childNodes) {
                    traverseNodes(child);
                }
            }
        };
        
        traverseNodes(this.#editorText);
        
        if (!found) {
            // Курсор в конец если позиция не найдена
            range.selectNodeContents(this.#editorText);
            range.collapse(false);
        }
        
        sel.removeAllRanges();
        sel.addRange(range);
    }
}
 