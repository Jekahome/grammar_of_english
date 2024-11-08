document.addEventListener('DOMContentLoaded', function () {


        fetch('/grammar_of_english/alphabet.html')
        .then(response => response.text())
        .then(data => {
            let leftBlock = document.querySelector('.left-block');

            let div = document.createElement('div');
            div.setAttribute('id', 'alphabet-block');
            div.innerHTML = data;
            leftBlock.appendChild(div);
        });

        // построение таблиц для адаптации к мобильным устройствам
        document.querySelectorAll('table').forEach(table => {
            const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent);

            table.querySelectorAll('tbody tr').forEach(row => {
                row.querySelectorAll('td').forEach((cell, index) => {
                    cell.setAttribute('data-label', headers[index]);
                });
            });
        });        
});

function checkAnswer(inputElement, correctAnswer) {
    if (inputElement.value.length > 4){
        inputElement.style.width = (inputElement.value.length + 1) + 'ch';
    }
    let userAnswer = inputElement.value.trim().toLowerCase();
    userAnswer = userAnswer.replace("’","'");

    let normalizedCorrectAnswer = correctAnswer.trim().toLowerCase(); 
    normalizedCorrectAnswer = normalizedCorrectAnswer.replace("’","'");
    
    const contractions = {
        "don't": "do not",
        "can't": "cannot",
        "won't": "will not",
        "isn't": "is not",
        "aren't": "are not",
        "i'm": "i am",
        "he's": "he is",
        "she's": "she is",
        "it's": "it is",
        "we're": "we are",
        "they're": "they are",
        "i've": "i have",
        "you've": "you have",
        "we've": "we have",
        "they've": "they have",
        "i'll": "i will",
        "you'll": "you will",
        "he'll": "he will",
        "she'll": "she will",
        "it'll": "it will",
        "we'll": "we will",
        "they'll": "they will",
        "i'd": "i would",
        "you'd": "you would",
        "he'd": "he would",
        "she'd": "she would",
        "it'd": "it would",
        "we'd": "we would",
        "they'd": "they would",
        "haven't":"have not",
        "let's":"let us",
        "couldn't":"could not",
        "doesn't":"does not",
    };

    function replaceContractions(text) {
        for (const contraction in contractions) {
            const regex = new RegExp(`\\b${contraction}\\b`, 'gi');
            text = text.replace(regex, contractions[contraction]);
        }
        return text;
    }

    userAnswer = replaceContractions(userAnswer);
    userAnswer = userAnswer.replace(/[^a-zа-яё ']/g, '');
    
    normalizedCorrectAnswer = replaceContractions(normalizedCorrectAnswer);
    normalizedCorrectAnswer = normalizedCorrectAnswer.replace(/[^a-zа-яё ']/g, '');
    
    // console.log(`[${userAnswer}] == [${normalizedCorrectAnswer}]`);
    if (userAnswer === normalizedCorrectAnswer) {
        inputElement.className = 'input-size correct'; 
    } else {
        inputElement.className = 'input-size incorrect'; 
    }
}

function getRandomThird(arr) {
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

function showClue(id) {
    var el = document.getElementById(id);
    el.style.visibility = "visible"; 

    setTimeout(function() {
        el.style.visibility = "hidden";
    }, 2000);
}

function removeParentheses(text) {
    return text.replace(/\(.*?\)/g, '').trim();
}

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