# Listen: The Elephant Man
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такой доктор Фредерик Тревз (Dr Frederick Treves) и где он работает?
  <details> 
  <summary>ответ:</summary>
  Доктор Тревз — врач в Лондонском госпитале (London Hospital).
  </details>

* Что доктор Тревз увидел в витрине магазина и что было написано под картинкой?
  <details> 
  <summary>ответ:</summary>
  Он увидел картинку уродливого человека, похожего на слона. Под картинкой было написано: «Войдите и посмотрите на Человека-слона. Два пенса».
  </details>

* Как звали «Человека-слона» и как его называл хозяин магазина?
  <details> 
  <summary>ответ:</summary>
  Его звали Джозеф Меррик (Joseph Merrick). Хозяин магазина называл его «лучший Человек-слон в Англии».
  </details>

* Какая часть тела Меррика была нормальной и даже красивой?
  <details> 
  <summary>ответ:</summary>
  Его левая рука и левая кисть (left arm and left hand) были красивыми, как у молодой женщины.
  </details>

* Как доктор Тревз помог Меррику попасть в больницу во второй раз?
  <details> 
  <summary>ответ:</summary>
  У Меррика была визитная карточка (card) доктора Тревза. Полиция нашла его и привезла в госпиталь.
  </details>

* Кто такой мистер Карр Гомм (Mr Carr Gomm) и что он сделал для Меррика?
  <details> 
  <summary>ответ:</summary>
  Мистер Карр Гомм — председатель Лондонского госпиталя (Hospital Chairman). Он написал письмо в газету The Times, и читатели собрали деньги, чтобы Меррик мог жить в госпитале всю жизнь.
  </details>

* Кто была самой важной посетительницей Меррика и что она ему подарила?
  <details> 
  <summary>ответ:</summary>
  Королева Александра (Queen Alexandra), королева Англии. Она подарила ему маленькую книгу и красные цветы, а на Рождество — открытку со своим портретом.
  </details>

* Куда Меррик ездил летом и как он описывал это место в письмах?
  <details> 
  <summary>ответ:</summary>
  Он ездил в деревню (the country) в Беркшир. Он писал о птицах, рыбе в ручье, о цветах и о большой собаке, которая стала его другом.
  </details>

* Как Меррик обычно спал и почему?
  <details> 
  <summary>ответ:</summary>
  Он обычно спал сидя, обхватив ноги руками и положив голову на колени (sat up in bed with his arms round his legs, and his head on his knees), потому что его огромная голова была очень тяжёлой.
  </details>

* Как умер Джозеф Меррик?
  <details> 
  <summary>ответ:</summary>
  Он попытался спать на спине (on his back), как обычные люди. Его тяжёлая голова соскользнула с кровати, и он сломал шею (broke his neck).
  </details>

* Что написал мистер Карр Гомм в газету после смерти Меррика?
  <details> 
  <summary>ответ:</summary>
  Он написал, что Меррик был добрым человеком с уродливым телом, у него было много друзей, и что благодаря читателям The Times он прожил счастливую жизнь.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Elephant_Man/The_Elephant_Man.vtt";
        const audio = "/listen/A1/Beginner/The_Elephant_Man/The_Elephant_Man.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>