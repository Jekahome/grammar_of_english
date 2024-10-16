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
});