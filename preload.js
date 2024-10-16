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

