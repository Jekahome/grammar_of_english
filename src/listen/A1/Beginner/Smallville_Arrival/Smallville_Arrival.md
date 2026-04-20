# Listen: Smallville Arrival
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Что произошло в Смолвилле (Smallville) в 1989 году и как это повлияло на город?
  <details> 
  <summary>ответ:</summary>
  На город упали сотни метеоров (hundreds of meteors). Это изменило жизнь города: родители Ланы погибли, Лекс Лютор потерял волосы, а Кларк Кент прилетел на Землю в космическом корабле.
  </details>

* Кто такой Кларк Кент и откуда он родом?
  <details> 
  <summary>ответ:</summary>
  Кларк Кент — мальчик, которого нашли и усыновили Джонатан и Марта Кент. Он прилетел с другой планеты (a different world) в космическом корабле.
  </details>

* Какие необычные способности есть у Кларка?
  <details> 
  <summary>ответ:</summary>
  Он очень сильный (very strong), очень быстрый (very fast), и его ничего не может ранить (nothing hurt him).
  </details>

* Кто такой Лекс Лютор (Lex Luthor) и как Кларк спасает ему жизнь?
  <details> 
  <summary>ответ:</summary>
  Лекс Лютор — сын богатого бизнесмена Лайонела Лютора. Кларк вытаскивает его из машины, которая упала в реку, и делает искусственное дыхание.
  </details>

* Почему Джонатан Кент не хочет, чтобы Кларк общался с Лексом?
  <details> 
  <summary>ответ:</summary>
  Потому что Лайонел Лютор (отец Лекса) купил многие дома и фермы их друзей, и Джонатан не доверяет семье Люторов.
  </details>

* Кто такой Джереми Крик (Jeremy Creek) и почему он мстит людям в Смолвилле?
  <details> 
  <summary>ответ:</summary>
  Джереми Крик — мальчик, которого в 1989 году сделали «пугалом» (scarecrow): привязали к столбу в кукурузном поле и нарисовали на нём красную букву S. Он очнулся через 12 лет и начал мстить тем, кто это сделал, с помощью электрических разрядов (electric shocks).
  </details>

* Что такое зелёное ожерелье (green necklace) Ланы Лэнг и почему оно опасно для Кларка?
  <details> 
  <summary>ответ:</summary>
  Ожерелье — часть метеорита (part of a meteor). Когда Кларк оказывается рядом с ним, он теряет свои силы и не может двигаться.
  </details>

* Что Уитни Фордман (Whitney Fordman) делает с Кларком в ночь перед танцами?
  <details> 
  <summary>ответ:</summary>
  Он вместе с друзьями привязывает Кларка к столбу в кукурузном поле и рисует на нём красную букву S, делая его «пугалом».
  </details>

* Как Кларк в конце истории наказывает Уитни за то, что тот сделал его пугалом?
  <details> 
  <summary>ответ:</summary>
  Он ставит машину Уитни и машины его друзей друг на друга (put one car on top of another).
  </details>

* Что Кларк представляет в своей мечте (daydream) в конце истории?
  <details> 
  <summary>ответ:</summary>
  Он представляет, что Лана приходит к нему в амбар и они танцуют.
  </details>

* Кому Лана благодарна за то, что ожерелье вернулось к ней?
  <details> 
  <summary>ответ:</summary>
  Она думает, что это Уитни (Whitney) вернул ожерелье, и благодарит его.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Smallville_Arrival/Smallville_Arrival.vtt";
        const audio = "/listen/A1/Beginner/Smallville_Arrival/Smallville_Arrival.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>