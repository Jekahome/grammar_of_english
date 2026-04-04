# Listen: Newspaper Chase
 
<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Гарри Блэк и что он делает в художественной галерее в час ночи?
  <details> 
  <summary>ответ:</summary>
  Гарри Блэк — вор (thief). Он залезает в галерею, чтобы украсть картину за миллион долларов.
  </details>

* Что происходит, когда Гарри идёт обратно к окну?
  <details> 
  <summary>ответ:</summary>
  Он натыкается на стол (walks into a table). На столе стоит красивая синяя стеклянная ваза. Она падает на пол и разбивается на сотню кусочков.
  </details>

* Где живёт Гарри и кто его хозяйка?
  <details> 
  <summary>ответ:</summary>
  Он живёт в комнате в пансионе миссис Аллен (Mrs. Allen's rooming house). У неё есть дочь Джейни (Janey).
  </details>

* Куда Гарри прячет украденную картину?
  <details> 
  <summary>ответ:</summary>
  Он заворачивает её в газету и кладёт под кровать (puts it in a newspaper, then puts the newspaper under his bed).
  </details>

* Что Джейни делает по утрам в пятницу?
  <details> 
  <summary>ответ:</summary>
  Она собирает старые газеты и бутылки из каждой комнаты для переработки (recycling).
  </details>

* Какую газету Джейни забирает из комнаты Гарри?
  <details> 
  <summary>ответ:</summary>
  Она забирает газету, которая лежит под кроватью Гарри — ту самую, в которую завернута картина.
  </details>

* Почему Гарри бежит за мусоровозом?
  <details> 
  <summary>ответ:</summary>
  Он хочет вернуть свою газету, потому что в ней находится украденная картина за миллион долларов.
  </details>

* Что Джейни замечает на ботинке Гарри?
  <details> 
  <summary>ответ:</summary>
  Она замечает кусочек синего стекла (blue glass) и вспоминает фото разбитой вазы из галереи по телевизору.
  </details>

* Кого Джейни вызывает и что полицейские находят в ботинке Гарри?
  <details> 
  <summary>ответ:</summary>
  Она вызывает полицию. Полицейские достают из ботинка Гарри очень дорогой кусочек стекла (a very expensive piece of glass) из той самой вазы.
  </details>

* Чем заканчивается история?
  <details> 
  <summary>ответ:</summary>
  Полиция находит картину в мусоровозе. Джейни получает награду (reward) и говорит, что купит на неё картину.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/Newspaper_Chase/Newspaper_Chase.vtt";
        const audio = "/listen/A1/Started/Newspaper_Chase/Newspaper_Chase.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>