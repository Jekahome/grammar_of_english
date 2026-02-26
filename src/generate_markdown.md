<h1>Создает из массива слов, готовые таблицы в формате markdown</h1>
<select id="level" title="уровень">
    <option value="a1">A1</option>
    <option value="a2">A2</option>
    <option value="b1">B1</option>
    <option value="b2">B2</option>
    <option value="c1">C1</option>
</select>
<select id="type" title="тип речи">
    <option value="nouns">nouns</option>
    <option value="verbs">verbs</option>
    <option value="adverbs">adverbs</option>
    <option value="adjective">adjective</option>
    <option value="preposition">preposition</option>
    <option value="irregular_verbs">irregular_verbs</option>
</select>
<button onclick="show()">show</button>
<textarea id="result" rows="25" cols="160"></textarea>

<script>
function arrayToMarkdownTable(arr, headers = []) {
  if (!Array.isArray(arr)) {
    throw new TypeError("❌ Ожидался массив (Array) в аргументе arr");
  }

  // Проверим, что это массив массивов
  if (!arr.every(Array.isArray)) {
    throw new TypeError("❌ Ожидался массив массивов (двумерный Array)");
  }

  // Если передали заголовки — используем, иначе создаём фиктивные
  const headerRow = headers.length
    ? `| ${headers.join(" | ")} |`
    : `| ${arr[0].map((_, i) => `col${i + 1}`).join(" | ")} |`;

  const separator = `| ${(
    headers.length ? headers : arr[0]
  ).map(() => "---").join(" | ")} |`;

  const rows = arr.map(row => `| ${row.join(" | ")} |`);
  return [headerRow, separator, ...rows].join("\n");
}

// ----------------------------------------------------------------------------------

function show(){
   const level = document.getElementById("level").value;
   const type = document.getElementById("type").value;
   const result = document.getElementById("result");
   result.textContent = level + " " + type+ "\n\n";

   let headers = [];
    switch (type) {
        case "nouns": 
            headers = ["Noun singular", "Noun plural", "Gerund", "Translate", "Frequency"];
            break;
        case "verbs":  
            headers = ["i,you,we,they", "3rd person (he,she,it)", "Present participle","Past tense", "Past participle","verb irregular", "Translate", "Frequency"];
            break;
        case "adverbs": 
            headers = ["Adverbs", "Translate", "Frequency"];
            break;
        case "adjective": 
            headers = ["Adjective", "Сравнительная степень (Comparative)", "Превосходная степень (Superlative)", "Translate", "Frequency"];
            break;
        case "preposition": 
            headers = ["Preposition", "Translate", "Frequency"];
            break;
        case "irregular_verbs": 
            headers = ["i,you,we,they", "3rd person (he,she,it)", "Present participle","Past tense", "Past participle", "Translate", "Frequency"];
            break;

    }  
   const key = `${level}_words_${type}`;
   result.textContent += arrayToMarkdownTable(datasets[key], headers);
}

let datasets = [];

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
         
        datasets = {
            a1_words_nouns,
            a1_words_verbs,
            a1_words_adverbs,
            a1_words_adjective,
            a1_words_preposition,
            a1_words_irregular_verbs,

            a2_words_nouns,
            a2_words_verbs,
            a2_words_adverbs,
            a2_words_adjective,
            a2_words_preposition,
            a2_words_irregular_verbs,
            
            b1_words_nouns,
            b1_words_verbs,
            b1_words_adverbs,
            b1_words_adjective,
            b1_words_preposition,
            b1_words_irregular_verbs,

            b2_words_nouns,
            b2_words_verbs,
            b2_words_adverbs,
            b2_words_adjective,
            b2_words_preposition,
            b2_words_irregular_verbs,

            c1_words_nouns,
            c1_words_verbs,
            c1_words_adverbs,
            c1_words_adjective,
            c1_words_preposition,
            c1_words_irregular_verbs,
        };
 
    } catch (error) {
        console.error("Error build:", error);
    }
});
</script>