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
        "they'd": "they would"
    };

    function replaceContractions(text) {
        for (const contraction in contractions) {
            const regex = new RegExp(`\\b${contraction}\\b`, 'gi');
            text = text.replace(regex, contractions[contraction]);
        }
        return text;
    }

    let userAnswer = inputElement.value.trim().toLowerCase().replace(/[^a-zа-яё']/g, '');
    userAnswer = replaceContractions(userAnswer);

    let normalizedCorrectAnswer = correctAnswer.trim().toLowerCase().replace(/[^a-zа-яё']/g, '');
    normalizedCorrectAnswer = replaceContractions(normalizedCorrectAnswer);

    if (userAnswer === normalizedCorrectAnswer) {
        inputElement.className = 'input-size correct'; 
    } else {
        inputElement.className = 'input-size incorrect'; 
    }
}

function getRandomThird(arr) {
    if (arr.length <= 20){return arr}
    const thirdLength = Math.ceil(arr.length / 3); 
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