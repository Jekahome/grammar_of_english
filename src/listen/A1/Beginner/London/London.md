# Listen: London
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Сколько человек ежегодно приезжают в Лондон со всего мира?
  <details> 
  <summary>ответ:</summary>
  Более девяти миллионов (more than nine million people).
  </details>

* Откуда произошло название Лондона и как римляне называли свой город?
  <details> 
  <summary>ответ:</summary>
  Название произошло от римлян (Romans). Они называли город Лондиниум (Londinium).
  </details>

* Какие две катастрофы произошли в Лондоне в 1665 и 1666 годах?
  <details> 
  <summary>ответ:</summary>
  В 1665 году — Великая чума (The Great Plague), от которой умерло 100 000 человек. В 1666 году — Великий пожар Лондона (The Fire of London).
  </details>

* Какое самое быстрое и удобное средство передвижения в Лондоне и как называются «часы пик»?
  <details> 
  <summary>ответ:</summary>
  Самый быстрый способ — метро (Underground train). «Часы пик» называются rush hours (с 8 до 10 утра и с 4 до 6 вечера).
  </details>

* Где живёт королева в Лондоне и что можно там увидеть в 11:30 большинства дней?
  <details> 
  <summary>ответ:</summary>
  Королева живёт в Букингемском дворце (Buckingham Palace). В 11:30 большинства дней происходит смена караула (change the guard).
  </details>

* Что такое Биг-Бен (Big Ben) и где он находится?
  <details> 
  <summary>ответ:</summary>
  Биг-Бен — это большие часы (clock) на высокой башне здания Парламента (Houses of Parliament).
  </details>

* Какой самый знаменитый магазин в Лондоне и на какой улице он находится?
  <details> 
  <summary>ответ:</summary>
  Самый знаменитый магазин — Harrods, он находится в Найтсбридже (Knightsbridge).
  </details>

* Где можно купить старые книги и где находится знаменитый книжный магазин Foyles?
  <details> 
  <summary>ответ:</summary>
  Старые книги можно купить на Черинг-Кросс-роуд (Charing Cross Road). Магазин Foyles находится там же.
  </details>

* Какой театр знаменит пьесой «Мышеловка» Агаты Кристи и когда она начала идти?
  <details> 
  <summary>ответ:</summary>
  Пьеса «Мышеловка» (The Mousetrap) началась в 1952 году и идёт до сих пор.
  </details>

* Какие два известных рынка упоминаются в книге и по каким дням они работают?
  <details> 
  <summary>ответ:</summary>
  Petticoat Lane market (по воскресеньям) и Portobello Road market (по субботам).
  </details>

* Какой музей знаменит восковыми фигурами знаменитых людей и как называется комната с плохими людьми?
  <details> 
  <summary>ответ:</summary>
  Музей мадам Тюссо (Madame Tussaud's). Комната с плохими людьми называется «Камера ужасов» (Chamber of Horrors).
  </details>

* Какие два ежегодных парада упоминаются в книге и когда они проходят?
  <details> 
  <summary>ответ:</summary>
  Trooping the Colour — в июне (в субботу утром). Notting Hill Carnival — в последнее воскресенье и понедельник августа.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/London/London.vtt";
        const audio = "/listen/A1/Beginner/London/London.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>