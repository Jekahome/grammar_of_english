# Textual Analysis

<style>
    .pixel-table-wrapper {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 8px;
    }
    
    .pixel-table-container {
        display: inline-block;
        background-color: white;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .pixel-table {
        border-collapse: collapse;
        border: 2px solid #333;
    }
    
    .pixel-table td {
        width: 1px;
        height: 1px;
        padding: 7px 7px !important;
        margin: 15px 15px !important;
        border: none;
        background-color: #ddd;
        position: relative;
        transition: background-color 0.1s ease;
    }
    
    .pixel-table td:hover {
        background-color: #007bff;
        transform: scale(1.2);
        z-index: 10;
    }
    
    /* Стили для tooltip */
    .pixel-table-tooltip {
        position: fixed;
        background-color: #333;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
        left: 10px;
        top: -30px;
    }
    
    .pixel-table-tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 10px;
        border: 5px solid transparent;
        border-top-color: #333;
    }
    
    .pixel-table-controls {
        margin-bottom: 20px;
    }
    
    .pixel-table-controls label {
        margin-right: 10px;
        font-weight: bold;
    }
    
    .pixel-table-controls input {
        margin-right: 20px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    
    .pixel-table-controls button {
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .pixel-table-controls button:hover {
        background-color: #0056b3;
    }
    
    .pixel-table-info {
        margin-top: 20px;
        padding: 10px;
        background-color: #e9ecef;
        border-radius: 4px;
        font-size: 14px;
    }
</style>
<textarea id="text" rows="25" cols="160" placeholder="text..."></textarea>
<ul>
<li>
    <button onclick="checkText()" title="проверить чтобы слова в предложениях не превышали выбранного уровеня">Сортировка слов по уровню</button><br><br>
</li>
<li>
    <button onclick="countWordsInText()">Дубли слов в тексте</button> 
</li>
<li>
    <button onclick="textAnalysis()" title="необходимо предоставить все примеры (в поле text) для анализа использования слов выбранного уровня">Соответствие текста уровню (Pixel)</button> 
    <select id="level" title="уровень">
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
    </select>
</li>
<li>
    <button onclick="wordsOfLesson()" title="соответвие слов урока и примеров">Наличие слов в примерах уровня</button><br><br>
</li>
<ul>
    <li>
        <textarea id="nouns" rows="5" cols="50" title="для проверки использования этих слов в примерах" placeholder="list nouns (infinitive)">door</textarea>
    </li>
    <li>
        <textarea id="verbs" rows="5" cols="50" title="для проверки использования этих слов в примерах" placeholder="list verbs (infinitive)"></textarea>
    </li>
</ul>
</ul>
<hr>

</br>
<details>
<summary>Pixel</summary>
<div>
    <span style="color:#ff4444">■ &lt;10% - очень редко</span> - ОЧЕНЬ ПЛОХО<br>
    <span style="color:#ffaa44">■ 10-30% - редко</span><br>
    <span style="color:#aadd44">■ 30-70% - средне</span> - ЭТО ЦЕЛЬ<br>
    <span style="color:#44dd44">■ 70-90% - часто</span><br>
    <span style="color:#464444ff">■ >90% - очень часто</span> - АНОМАЛИЯ
</div><br>
<div class="pixel-table-wrapper">
    <div class="pixel-table-container">
        <h3>Contractions</h3>
        <table id="pixelTableContractions" class="pixel-table"></table>
        <br>
        <h3>Interjection</h3>
        <table id="pixelTableInterjection" class="pixel-table"></table>
        <br>   
        <h3>Articles</h3>
        <table id="pixelTableArticles" class="pixel-table"></table>
        <br>  
        <h3>Conjunctions</h3>
        <table id="pixelTableConjunctions" class="pixel-table"></table><br>
        <h3>Pronouns</h3>
        <table id="pixelTablePronouns" class="pixel-table"></table><br>
        <h3>Modal Verbs</h3>
        <table id="pixelTableModalVerbs" class="pixel-table"></table><br>
        <details>
            <summary>A1</summary>
            <div>
                <span style="color:#ff4444">■ &lt;10% - очень редко</span> - ОЧЕНЬ ПЛОХО<br>
                <span style="color:#ffaa44">■ 10-30% - редко</span><br>
                <span style="color:#aadd44">■ 30-70% - средне</span> - ЭТО ЦЕЛЬ<br>
                <span style="color:#44dd44">■ 70-90% - часто</span><br>
                <span style="color:#464444ff">■ >90% - очень часто</span> - АНОМАЛИЯ
            </div><br>
            <h3>Nouns A1</h3>
            <table id="pixelTableA1Nouns" class="pixel-table"></table><br>
            <h3>Verbs A1</h3>
            <table id="pixelTableA1Verbs" class="pixel-table"></table><br>
            <h3>Irregular Verbs A1</h3>
            <table id="pixelTableA1IrregularVerbs" class="pixel-table"></table><br>
            <h3>Phrasal Verbs A1</h3>
            <table id="pixelTableA1PhrasalVerbs" class="pixel-table"></table><br>
            <h3>Adverbs A1</h3>
            <table id="pixelTableA1Adverbs" class="pixel-table"></table><br>
            <h3>Adjectives A1</h3>
            <table id="pixelTableA1Adjectives" class="pixel-table"></table><br>
            <h3>Prepositions A1</h3>
            <table id="pixelTableA1Prepositions" class="pixel-table"></table><br>
        </details>
        <details>
            <summary>A2</summary>
            <h3>Nouns A2</h3>
            <table id="pixelTableA2Nouns" class="pixel-table"></table>
            <h3>Verbs A2</h3>
            <table id="pixelTableA2Verbs" class="pixel-table"></table><br>
            <h3>Irregular Verbs A2</h3>
            <table id="pixelTableA2IrregularVerbs" class="pixel-table"></table><br>
            <h3>Phrasal Verbs A2</h3>
            <table id="pixelTableA2PhrasalVerbs" class="pixel-table"></table><br>
            <h3>Adverbs A2</h3>
            <table id="pixelTableA2Adverbs" class="pixel-table"></table><br>
            <h3>Adjectives A2</h3>
            <table id="pixelTableA2Adjectives" class="pixel-table"></table><br>
            <h3>Prepositions A2</h3>
            <table id="pixelTableA2Prepositions" class="pixel-table"></table><br>
        </details>
        <details>
            <summary>B1</summary>
            <h3>Nouns B1</h3>
            <table id="pixelTableB1Nouns" class="pixel-table"></table>
            <h3>Verbs B1</h3>
            <table id="pixelTableB1Verbs" class="pixel-table"></table><br>
            <h3>Irregular Verbs B1</h3>
            <table id="pixelTableB1IrregularVerbs" class="pixel-table"></table><br>
            <h3>Phrasal Verbs B1</h3>
            <table id="pixelTableB1PhrasalVerbs" class="pixel-table"></table><br>
            <h3>Adverbs B1</h3>
            <table id="pixelTableB1Adverbs" class="pixel-table"></table><br>
            <h3>Adjectives B1</h3>
            <table id="pixelTableB1Adjectives" class="pixel-table"></table><br>
            <h3>Prepositions B1</h3>
            <table id="pixelTableB1Prepositions" class="pixel-table"></table><br>
        </details>
        <details>
            <summary>B2</summary>
            <h3>Nouns B2</h3>
            <table id="pixelTableB2Nouns" class="pixel-table"></table>
            <h3>Verbs B2</h3>
            <table id="pixelTableB2Verbs" class="pixel-table"></table><br>
            <h3>Irregular Verbs B2</h3>
            <table id="pixelTableB2IrregularVerbs" class="pixel-table"></table><br>
            <h3>Phrasal Verbs B2</h3>
            <table id="pixelTableB2PhrasalVerbs" class="pixel-table"></table><br>
            <h3>Adverbs B2</h3>
            <table id="pixelTableB2Adverbs" class="pixel-table"></table><br>
            <h3>Adjectives B2</h3>
            <table id="pixelTableB2Adjectives" class="pixel-table"></table><br>
            <h3>Prepositions B2</h3>
            <table id="pixelTableB2Prepositions" class="pixel-table"></table><br>
        </details>
        <details>
            <summary>C1</summary>
            <h3>Nouns C1</h3>
            <table id="pixelTableC1Nouns" class="pixel-table"></table>
            <h3>Verbs C1</h3>
            <table id="pixelTableC1Verbs" class="pixel-table"></table><br>
            <h3>Irregular Verbs C1</h3>
            <table id="pixelTableC1IrregularVerbs" class="pixel-table"></table><br>
            <h3>Phrasal Verbs C1</h3>
            <table id="pixelTableC1PhrasalVerbs" class="pixel-table"></table><br>
            <h3>Adverbs C1</h3>
            <table id="pixelTableC1Adverbs" class="pixel-table"></table><br>
            <h3>Adjectives C1</h3>
            <table id="pixelTableC1Adjectives" class="pixel-table"></table><br>
            <h3>Prepositions C1</h3>
            <table id="pixelTableC1Prepositions" class="pixel-table"></table><br>
        </details>
    </div>
    <div class="pixel-table-tooltip" id="tooltip"></div>
</div>
</details>
</br>
<div id="result"></div>

<script>
 
// ##############################################################################
// checkText ####################################################################
// ##############################################################################

function checkText() {
    const text = document.getElementById("text").value;
    if (!text.trim().length){
        alert("Текст не обнаружен");
    }
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    let head_result = document.createElement("h2");
    head_result.innerHTML = "Сортировка слов по уровню:";
    resultDiv.appendChild(head_result);

    const {result, show} = getWordLevels(text);

    console.log('show_a1',show.show_a1);
    console.log('show_a2',show.show_a2);
    console.log('show_b1',show.show_b1);
    console.log('show_b2',show.show_b2);
    console.log('show_c1',show.show_c1);
    console.log('show_c2',show.show_c2);
    console.log('show_other',show.show_other);

    if (result.result_a1.length > 0){
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.innerHTML = "A1";
        details.appendChild(summary);
        result.result_a1.forEach(s => {
            let block = document.createElement("p");
            block.innerHTML = s;
            details.appendChild(block);
        });
        resultDiv.appendChild(details); 
    }
    if (result.result_a2.length > 0){
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.innerHTML = "A2";
        details.appendChild(summary);
        result.result_a2.forEach(s => {
            let block = document.createElement("p");
            block.innerHTML = s;
            details.appendChild(block);
        });
        resultDiv.appendChild(details); 
    }
    if (result.result_b1.length > 0){
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.innerHTML = "B1";
        details.appendChild(summary);
        result.result_b1.forEach(s => {
            let block = document.createElement("p");
            block.innerHTML = s;
            details.appendChild(block);
        });
        resultDiv.appendChild(details); 
    }
    if (result.result_b2.length > 0){
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.innerHTML = "B2";
        details.appendChild(summary);
        result.result_b2.forEach(s => {
            let block = document.createElement("p");
            block.innerHTML = s;
            details.appendChild(block);
        });
        resultDiv.appendChild(details); 
    }
    if (result.result_c1.length > 0){
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.innerHTML = "C1";
        details.appendChild(summary);
        result.result_c1.forEach(s => {
            let block = document.createElement("p");
            block.innerHTML = s;
            details.appendChild(block);
        });
        resultDiv.appendChild(details); 
    }
    if (result.result_c2.length > 0){
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.innerHTML = "C2";
        details.appendChild(summary);
        result.result_c2.forEach(s => {
            let block = document.createElement("p");
            block.innerHTML = s;
            details.appendChild(block);
        });
        resultDiv.appendChild(details); 
    }
    if (result.result_other.length > 0){
        let details = document.createElement("details");
        let summary = document.createElement("summary");
        summary.innerHTML = "Other";
        details.appendChild(summary);
        result.result_other.forEach(s => {
            let block = document.createElement("p");
            block.innerHTML = s;
            details.appendChild(block);
        });
        resultDiv.appendChild(details); 
    }
}

// ##############################################################################
// wordsOfLesson ################################################################
// ##############################################################################

function wordsOfLesson(){ 
    const level = document.getElementById("level").value;
    const words_of_level = words_get_level(level);

    const element_text = document.getElementById("text").value;
    if (!element_text.trim().length){
        alert("Текст не обнаружен");
        return;
    }
    const text = normalizeText(element_text);
    const wordsArray = text
        .replaceAll(/[^a-z \'-]/gi, "")  
        .split(" ")                      
        .filter(word => word.length && word!="-");  // убираем пустые строки

    // Подсчёт частоты слов
    const frequency = wordsArray.reduce((acc, word) => {
        word = word.toLowerCase(); 
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    let head_result = document.createElement("h2");
    head_result.innerHTML = `Наличие слов в примерах уровня ${level}:`;
    resultDiv.appendChild(head_result);
  
    let nouns = document.getElementById("nouns").value;
    let verbs = document.getElementById("verbs").value;
    if (nouns.trim().length == 0 && verbs.trim().length == 0){
        resultDiv.appendChild(document.createTextNode("Нет слов для сравнения"));
        return;
    }

    if (nouns.trim()){ 
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = `<b>Nouns:</b>`;
        div.appendChild(p);
        resultDiv.appendChild(div);
        nouns = nouns.split("\n").map(w=>w.trim());
        const nouns_set = words_of_level.nouns.filter(n=>nouns.includes(n[0]));
        const nouns_frequency = nouns_set.reduce((acc, arr_word) => {
            for (let i=0;i<3;i++){
                if (frequency[arr_word[i]]){
                    acc[arr_word[0]]=acc[arr_word[0]]? acc[arr_word[0]] + frequency[arr_word[i]]:frequency[arr_word[i]];
                }
            }
            return acc;
        }, {});
        const sorted_nouns_frequency = Object.entries(nouns_frequency).sort((a, b) => a[1] - b[1]); 
        sorted_nouns_frequency.forEach(n => { 
            let block = document.createElement("span");
            block.innerHTML = `<b>${n[0]}</b> - ${n[1]}</br>`;
            div.appendChild(block);
        });
        resultDiv.appendChild(div);
    }

    if (verbs.trim()){
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = `<b>Verbs:</b>`;
        div.appendChild(p);
        resultDiv.appendChild(div);
        verbs = verbs.split("\n").map(w=>w.trim());
        const verbs_set = words_of_level.verbs.filter(n=>verbs.includes(n[0]));
        const verbs_frequency = verbs_set.reduce((acc, arr_word) => {
            for (let i=0;i<5;i++){
                if (frequency[arr_word[i]]){
                    acc[arr_word[0]]=acc[arr_word[0]]? acc[arr_word[0]] + frequency[arr_word[i]]:frequency[arr_word[i]];
                }
            }
            return acc;
        }, {});
        const sorted_verbs_frequency = Object.entries(verbs_frequency).sort((a, b) => a[1] - b[1]); 
        sorted_verbs_frequency.forEach(n => { 
            let block = document.createElement("span");
            block.innerHTML = `<b>${n[0]}</b> - ${n[1]}</br>`;
            div.appendChild(block);
        });
        resultDiv.appendChild(div);
    }
} 

// ##############################################################################
// countWordsInText #############################################################
// ##############################################################################

function countWordsInText() {
    
    const element_text = document.getElementById("text").value;
    if (!element_text.trim().length){
        alert("Текст не обнаружен");
        return;
    }
    const text = normalizeText(element_text);
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 
    let head_result = document.createElement("h2");
    head_result.innerHTML = "Дубли слов в тексте";
    resultDiv.appendChild(head_result);

    const wordsArray = text
        .replaceAll(/[^a-z \'-]/gi, "")  
        .split(" ")                      
        .filter(word => word.length && word!="-");  // убираем пустые строки

    // Подсчёт частоты слов
    const frequency = wordsArray.reduce((acc, word) => {
        word = word.toLowerCase(); 
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
    
    
    // Сортировка по убыванию частоты
    const sortedWords = Object.entries(frequency).sort((a, b) => b[1] - a[1]);  


// Nouns
{
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.innerHTML = "Nouns";
    details.appendChild(summary);

    sortedWords.forEach(w => {
        if (a1_words_nouns.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (A1)</br>`;
            details.appendChild(block);
        }
        if (a2_words_nouns.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (A2)</br>`;
            details.appendChild(block);
        } 
        if (b1_words_nouns.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (B1)</br>`;
            details.appendChild(block);
        } 
        if (b2_words_nouns.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (B2)</br>`;
            details.appendChild(block);
        } 
        if (c1_words_nouns.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (C1)</br>`;
            details.appendChild(block);
        } 
    });

    resultDiv.appendChild(details);
    let block = document.createElement("hr");
    resultDiv.appendChild(block);
}

// Verbs
{
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.innerHTML = "Verbs";
    details.appendChild(summary);

    sortedWords.forEach(w => {
        if (a1_words_verbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (A1)</br>`;
            details.appendChild(block);
        }
        if (a2_words_verbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (A2)</br>`;
            details.appendChild(block);
        } 
        if (b1_words_verbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (B1)</br>`;
            details.appendChild(block);
        } 
        if (b2_words_verbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (B2)</br>`;
            details.appendChild(block);
        } 
        if (c1_words_verbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (C1)</br>`;
            details.appendChild(block);
        } 
    });

    resultDiv.appendChild(details);
    let block = document.createElement("hr");
    resultDiv.appendChild(block);
}

// Adverbs
{
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.innerHTML = "Adverbs";
    details.appendChild(summary);

    sortedWords.forEach(w => {
        if (a1_words_adverbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (A1)</br>`;
            details.appendChild(block);
        }
        if (a2_words_adverbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (A2)</br>`;
            details.appendChild(block);
        } 
        if (b1_words_adverbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (B1)</br>`;
            details.appendChild(block);
        } 
        if (b2_words_adverbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (B2)</br>`;
            details.appendChild(block);
        } 
        if (c1_words_adverbs.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (C1)</br>`;
            details.appendChild(block);
        } 
    });

    resultDiv.appendChild(details);
    let block = document.createElement("hr");
    resultDiv.appendChild(block);
}

// Adjective
{
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.innerHTML = "Adjective";
    details.appendChild(summary);

    sortedWords.forEach(w => {
        if (a1_words_adjective.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (A1)</br>`;
            details.appendChild(block);
        }
        if (a2_words_adjective.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (A2)</br>`;
            details.appendChild(block);
        } 
        if (b1_words_adjective.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (B1)</br>`;
            details.appendChild(block);
        } 
        if (b2_words_adjective.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (B2)</br>`;
            details.appendChild(block);
        } 
        if (c1_words_adjective.some(word => word.includes(w[0]))){
            let block = document.createElement("span");
            block.innerHTML = `<b>${w[0]}</b> - ${w[1]} (C1)</br>`;
            details.appendChild(block);
        } 
    });

    resultDiv.appendChild(details);
    let block = document.createElement("hr");
    resultDiv.appendChild(block);
}

// Together
{
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.innerHTML = "All words";
    details.appendChild(summary);

    sortedWords.forEach(w => {
        let block = document.createElement("span");
        block.innerHTML = `<b>${w[0]}</b> - ${w[1]}</br>`;
        details.appendChild(block);
    });
    resultDiv.appendChild(details);    
}
 
}

// ##############################################################################
// textAnalysis #################################################################
// ##############################################################################

function textAnalysis(){
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    const text = document.getElementById("text").value;
    if (!text.trim().length){
        alert("Текст не обнаружен");
    }

    const level = document.getElementById("level").value; 
    const lowerText = text.replaceAll("’","'").replaceAll("*","").toLowerCase();

    // a1_words_determiner
    // a1_words_preposition
    // a1_words_conjunction
    // a1_words_pronoun
    // a1_words_adjective
    // a1_words_adverbs
    // a1_words_verbs
    // a1_words_nouns
    // a1_contractions

    // a1_words_interjection
    // a1_words_modal_verbs
    // a1_words_article

    const words_of_level = words_get_level(level);

    let nouns = words_of_level.nouns;
    let verbs = words_of_level.verbs;
    let adverbs = words_of_level.adverbs;
    let adjectives = words_of_level.adjectives;
    let prepositions = words_of_level.prepositions;
    let irregular_verbs = words_of_level.irregular_verbs; 

    let modal_verbs = words_modal_verbs; 
    let conjunctions = words_conjunctions;
    let pronouns = words_pronouns;
    let contractions = words_contractions;
    let articles = words_article;
    let interjection = words_interjection;
  
    const width = 40;       
    {
        const table = document.getElementById(`pixelTable${level}Nouns`);
        const sortedAsc = [...nouns].sort((a, b) => a[4] - b[4]);
        const iterator = flattenFilter2DArrayNouns(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);       
    }
    {
        const table = document.getElementById(`pixelTable${level}Verbs`);
        const sortedAsc = [...verbs].sort((a, b) => a[7] - b[7]);
        const iterator = flattenFilter2DArrayVerbs(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);        
    }
    {
        
        const table = document.getElementById(`pixelTable${level}Adverbs`);
        const sortedAsc = [...adverbs].sort((a, b) => a[2] - b[2]);
        const iterator = flattenFilter2DArrayAdverbs(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);        
    }
    {
        const table = document.getElementById(`pixelTable${level}Adjectives`);
        const sortedAsc = [...adjectives].sort((a, b) => a[4] - b[4]);
        const iterator = flattenFilter2DArrayAdjectives(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);        
    }
    {
        const table = document.getElementById(`pixelTable${level}Prepositions`);
        const sortedAsc = [...prepositions].sort((a, b) => a[2] - b[2]);
        const iterator = flattenFilter2DArrayPrepositions(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);       
    }
    {
        const table = document.getElementById(`pixelTable${level}IrregularVerbs`);
        const sortedAsc = [...irregular_verbs].sort((a, b) => a[6] - b[6]);
        const iterator = flattenFilter2DArrayIrregularVerbs(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);        
    }
    {
        const table = document.getElementById(`pixelTablePronouns`);
        const sortedAsc = [...pronouns].sort((a, b) => a[2] - b[2]);
        const iterator = flattenFilter2DArrayPronouns(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);       
    }
    {
        const table = document.getElementById(`pixelTableConjunctions`);
        const sortedAsc = [...conjunctions].sort((a, b) => a[2] - b[2]);
        const iterator = flattenFilter2DArrayConjunctions(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);        
    }
    {
        const table = document.getElementById(`pixelTableContractions`);
        const sortedAsc = [...contractions].sort((a, b) => a - b);
        const iterator = flattenFilter2DArrayContractions(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);       
    }
    {
        const table = document.getElementById(`pixelTableInterjection`);
        const sortedAsc = [...interjection].sort((a, b) => a - b);
        const iterator = flattenFilter2DArrayInterjection(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);        
    } 
    {
        const table = document.getElementById(`pixelTableArticles`);
        const sortedAsc = [...articles].sort((a, b) => a - b);
        const iterator = flattenFilter2DArrayArticles(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);      
    }
    {
        const table = document.getElementById(`pixelTableModalVerbs`);
        const sortedAsc = [...modal_verbs].sort((a, b) => a - b);
        const iterator = flattenFilter2DArrayModalVerbs(sortedAsc, lowerText);
        const arr_count = [...iterator];
        const iterator_count = flatten2DArray(arr_count);
        const height = parseInt(arr_count.length/width)+1;
        const analyzer = createWordAnalyzer(arr_count);
        generateTable(iterator_count, width, height, table, lowerText, analyzer);        
    }
    {
        phrasalVerbs(width, level, lowerText);
    }
}

function showTooltip(event, text) {
    tooltip.innerHTML = text;
    tooltip.style.opacity = '1';
    updateTooltipPosition(event);
}

function hideTooltip() {
    tooltip.style.opacity = '0';
}

function updateTooltipPosition(event) {
    tooltip.style.left = (event.clientX + 15) + 'px';
    tooltip.style.top = (event.clientY - 35) + 'px';
}
  
function createWordAnalyzer(wordFrequencies) {
    const freq_pos = wordFrequencies[0].length-1;
    const frequencies = Object.values(wordFrequencies);
    const sorted = [...frequencies].sort((a, b) => a[freq_pos] - b[freq_pos]);
    
    return function getWordInfo(word, frequency) {
        const countLess = sorted.filter(f => f[freq_pos] < frequency).length;
        const countEqual = sorted.filter(f => f[freq_pos] === frequency).length;
        
        let percentile;
        if (frequency === 0) {
            // Для нулевой частоты - особый случай
            percentile = 0;
        } else {
            percentile = (countLess + countEqual / 2) / frequencies.length * 100;
        }
        
        return {
            frequency,
            percentile: Math.round(percentile),
            color: getColorByPercentile(percentile)
        };
    };
}
 
function* flatten2DArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}
function* flattenFilter2DArrayNouns(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][3]} gerund:{${arr[i][2]}} freq:${arr[i][4]}`,count];
            }
        }
    }
}
function* flattenFilter2DArrayVerbs(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][6]} freq:${arr[i][7]}`,count];
            }
        }
    }
}
function* flattenFilter2DArrayAdverbs(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][1]} freq:${arr[i][2]}`, count];
            }
        }
    }
}
function* flattenFilter2DArrayAdjectives(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][3]} freq:${arr[i][4]}`, count];
            }
        }
    }
}
function* flattenFilter2DArrayPronouns(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][1]} freq:${arr[i][2]}`, count];
            }
        }
    }
}
function* flattenFilter2DArrayConjunctions(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][1]} freq:${arr[i][2]}`, count];
            }
        }
    }
}
function* flattenFilter2DArrayPrepositions(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][1]} freq:${arr[i][2]}`, count];
            }
        }
    }
} 
function* flattenFilter2DArrayDeterminers(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][1]} freq:${arr[i][2]}`, count];
            }
        }
    }
} 
function* flattenFilter2DArrayContractions(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
            const count = calculate_count_word(arr[i], lowerText);
            yield [arr[i],'', count];
    }
} 
function* flattenFilter2DArrayInterjection(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][1]}`, count];
            }
        }
    }
} 
function* flattenFilter2DArrayArticles(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][1]}`, count];
            }
        }
    }
}
function* flattenFilter2DArrayModalVerbs(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][1]} (${arr[i][2]}) ${arr[i][3]}`, count];
            }
        }
    }
}
function* flattenFilter2DArrayIrregularVerbs(arr, lowerText) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            if (arr[i][j].trim()){
                const count = calculate_count_word(arr[i][j], lowerText);
                yield [arr[i][j],`tr:${arr[i][5]} freq:${arr[i][6]}`, count];
            }
        }
    }
}

function calculate_count_word(word, lowerText){
    const lowerWord = word.toLowerCase();
    const escapedWord = lowerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?:^|[\\s,.!?;:'"()-])${escapedWord}(?=$|[\\s,.!?;:'"()-])`, 'g');
    const matches = lowerText.match(regex) || [];
    return matches.length;
}

function generateTable(iterator, width, height, table, lowerText, analyzer){

    // Очищаем существующую таблицу
    table.innerHTML = '';
 
    // Создаем строки и ячейки
    for (let row = 0; row < height; row++) {
        const tr = document.createElement('tr');
        
        for (let col = 0; col < width; col++) {
            
            const td = document.createElement('td');
            let cellName = '';
            let show_info = '';
            let data_word = iterator.next().value;
            
            if (data_word && data_word[0].trim()){ 
                let word = data_word[0]; 
                let frequency = data_word[data_word.length - 1];

                const info = analyzer(word, frequency);
                
                td.innerText = `${frequency}`;
                td.style.backgroundColor = info.color;
                
                cellName = `<b>${word}</b> ${data_word[1]}`;
                show_info = `word=${word} ${data_word[1]}`;
                //cellName = `'${word}' tr:${data_word[1][2]} freq:${data_word[1][3]}`;
            } 
             
            // Добавляем обработчики событий для tooltip
            td.addEventListener('mouseenter', function(e) {
                showTooltip(e, cellName);
            });
            
            td.addEventListener('mouseleave', function() {
                hideTooltip();
            });
            
            td.addEventListener('mousemove', function(e) {
                updateTooltipPosition(e);
            });
            
            td.addEventListener('click', function(e) {
                alert(show_info);
            });

            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
}
function getColorByPercentile(percentile) {
    if (percentile < 10) return '#ff4444';     // красный - очень редко
    if (percentile < 30) return '#ffaa44';     // оранжевый - редко
    if (percentile < 70) return '#aadd44';     // желто-зеленый - средне
    if (percentile < 90) return '#44dd44';     // зеленый - часто
    return '#464444ff';                        // черный - очень часто
}
 

function phrasalVerbs(width, level, lowerText){
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    const a1_phrasal_verbs_inseparable = [
        //[["look", "looks", "looking", "looked", "looked"],"after"],// look after
        //[["look", "looks", "looking", "looked", "looked"],"forward to"],// look forward to
        //[["look", "looks", "looking", "looked", "looked"],"out"],// look out
        //[["look", "looks", "looking", "looked", "looked"],"into"],// look into
        [["look", "looks", "looking", "looked", "looked"],["out", "into","forward to","after"]], 
        //[["go", "goes", "going", "went", "gone"],"on"], // go on
        //[["go", "goes", "going", "went", "gone"],"back"], // go back
        [["go", "goes", "going", "went", "gone"],["back","on"]],  
        //[["come", "comes", "coming", "came"],"up with"],// come up with
        //[["come", "comes", "coming", "came"],"across"],// come across
        [["come", "comes", "coming", "came"],["across","up with"]],
        [["give", "gives", "giving", "gave", "given"],["in"]], // give in
        //[["get", "gets", "getting", "got"],"away"], // get away
        //[["get", "gets", "getting", "got"],"off"], // get off
        [["get", "gets", "getting", "got"],["off","away"]],
        [['turn','turns','turning','turned'],["into"]], // turn into 
    ];

    const a1_phrasal_verbs_separable = [
        //[["take", "takes", "taking", "took", "taken"],"off"],// take off
        //[["take", "takes", "taking", "took", "taken"],"out"],// take out
        //[["take", "takes", "taking", "took", "taken"],"over"],// take over
        [["take", "takes", "taking", "took", "taken"],["over","out","off"]],
        //[["put", "puts", "putting"],"off"], // put off
        //[["put", "puts", "putting"],"on"], // put on
        [["put", "puts", "putting"],["on","off"]],
        //[["bring", "brings", "bringing", "brought", "brought"],"up"],// Bring up
        //[["bring", "brings", "bringing", "brought", "brought"],"back"],// Bring back
        [["bring", "brings", "bringing", "brought", "brought"],["back","up"]],
        //[["get", "gets", "getting", "got"],"up"], // get up
        //[["get", "gets", "getting", "got"],"out"], // get out
        //[["get", "gets", "getting", "got"],"on"], // get on
        [["get", "gets", "getting", "got"],["on","out","up"]],
        [["give", "gives", "giving", "gave", "given"],["up"]], // give up
        //[['turn','turns','turning','turned'],"on"], // turn on
        //[['turn','turns','turning','turned'],"off"], // turn off
        //[['turn','turns','turning','turned'],"up"], // turn up
        //[['turn','turns','turning','turned'],"out"], // turn out
        [['turn','turns','turning','turned'],["out","up","off","on"]],
        [["look", "looks", "looking", "looked", "looked"],["up"]],// look up
        [["make", "makes", "making", "made"],["up"]],// make up
        [['call','calls','calling','called'],["off"]],// call off
        [["set", "sets", "setting"],["up"]],// set up
    ];
   
    let buff = {};
    for (let i=0; i < a1_phrasal_verbs_inseparable.length; i++){
        let arr_base = a1_phrasal_verbs_inseparable[i][0];
        let arr_sufix = a1_phrasal_verbs_inseparable[i][1];
        for (let b=0; b < arr_base.length; b++){
            for (let s=0; s < arr_sufix.length; s++){
                let key = arr_base[b]+ " " +arr_sufix[s];
                buff[key] = 0;  
            }
        }
    }
    for (let i=0; i < a1_phrasal_verbs_separable.length; i++){
        let arr_base = a1_phrasal_verbs_separable[i][0];
        let arr_sufix = a1_phrasal_verbs_separable[i][1];
        for (let b=0; b < arr_base.length; b++){
            for (let s=0; s < arr_sufix.length; s++){
                let key = arr_base[b]+ " " +arr_sufix[s];
                buff[key] = 0;  
            }
        }
    }
   
    let isFind = false;
    const sentences = lowerText.split(/\r?\n/);
    sentences.forEach(sentence => {
        sentence = normalizeText(sentence);
        const words = sentence.split(/\W+/).filter(word => word.length > 0);
        isFind = false;
        for (let pos=0; pos < words.length-1 && !isFind; pos++){
            a1_phrasal_verbs_separable.forEach(phrasal_verb => {
                if (!isFind && phrasal_verb[0].indexOf(words[pos]) !== -1){// совпадение первой части phrasal verbs
                    let w = wordInSentence(phrasal_verb[1], sentence );
                    if (w.length > 0){// совпадение второй части phrasal verbs
                        let key = words[pos]+ " " +w;
                        buff[key] = (buff[key] || 0) + 1;
                        isFind=true;
                         
                    }
                }
            });
            if(isFind)continue;
            // TODO: нет учета варианта разделяемого фразового глагола
            a1_phrasal_verbs_inseparable.forEach(phrasal_verb => {
                if (!isFind && phrasal_verb[0].indexOf(words[pos]) !== -1){// совпадение первой части phrasal verbs
                    let w = wordInSentence(phrasal_verb[1], sentence );
                    if (w.length > 0){// совпадение второй части phrasal verbs
                        let key = words[pos]+ " " +w;
                        buff[key] = (buff[key] || 0) + 1;
                        isFind=true;
                    }
                }
            });
        }
    });   
   
    const table = document.getElementById(`pixelTable${level}PhrasalVerbs`);
    const arr_count = [];
    Object.entries(buff).forEach(([word, count]) => {
       arr_count.push([word,"",count]);
    });
    const height = parseInt(arr_count.length/width)+1;
    const iterator_count = flatten2DArray(arr_count);
    const analyzer = createWordAnalyzer(arr_count);
    generateTable(iterator_count, width, height, table, lowerText, analyzer);  
}

function wordInSentence(phrasal_verb_words, sentence){
    for (let i=0; i < phrasal_verb_words.length; i++){
        if(sentence.includes(phrasal_verb_words[i])){
            result = phrasal_verb_words[i];
            return phrasal_verb_words[i];
        }
    }
    return "";
}

 
/*
//window.levels = {};
const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2", "Other"];

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
        
        window.levels = {
            A1: words_a1,
            A2: words_a2,
            B1: words_b1,
            B2: words_b2,
            C1: words_c1,
            C2: words_c2,
        };

    } catch (error) {
        console.error("Error build:", error);
    }
});
*/
</script>