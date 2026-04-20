# Listen: The Locked Room
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где просыпается главный герой и что он помнит о себе?
  <details> 
  <summary>ответ:</summary>
  Он просыпается в красивой комнате в старом доме (a beautiful room in an old house). Он не помнит своего имени и ничего о себе.
  </details>

* Какую одежду носит главный герой и какую одежду носит мужчина, который к нему приходит?
  <details> 
  <summary>ответ:</summary>
  Главный герой одет в серые брюки и серую рубашку (grey trousers and a grey shirt). Мужчина одет в чёрные брюки и чёрную рубашку (black trousers and a black shirt).
  </details>

* Что главный герой начинает вспоминать о том, как попал в этот дом?
  <details> 
  <summary>ответ:</summary>
  Он вспоминает, что лежал в поле под деревом (in a field under a tree) с биноклем (binoculars) и наблюдал за домом. Затем мужчина с собакой ударил его по голове.
  </details>

* Как главному герою удаётся выбраться из запертой комнаты?
  <details> 
  <summary>ответ:</summary>
  Он подсовывает бумагу под дверь (put the paper under the door), проталкивает ключ ручкой (push the key with the pen), ключ падает на бумагу, и он вытягивает его обратно.
  </details>

* Что главный герой находит в одной из комнат наверху?
  <details> 
  <summary>ответ:</summary>
  Он находит комнату, полную картин (full of paintings) — Пикассо, Рембрандта, Ван Гога, в том числе знаменитую украденную картину Пикассо из Лондонской художественной галереи.
  </details>

* Кому звонит главный герой и по какому номеру?
  <details> 
  <summary>ответ:</summary>
  Он звонит в полицию по номеру 999.
  </details>

* Кем на самом деле оказывается главный герой, по словам инспектора полиции?
  <details> 
  <summary>ответ:</summary>
  Инспектор говорит, что он — Эдди Хэмптон (Eddie Hampton), мелкий вор (a small thief), который крадёт телевизоры, радио, видео и немного денег.
  </details>

* Кто такие мужчина и женщина, державшие главного героя в запертой комнате?
  <details> 
  <summary>ответ:</summary>
  Они — крупные воры (big thieves), которые крадут знаменитые картины.
  </details>

* Почему главный герой наблюдал за домом в поле?
  <details> 
  <summary>ответ:</summary>
  В книге это не объясняется прямо. Инспектор говорит, что он мелкий вор, поэтому, возможно, он следил за домом, чтобы потом что-то украсть.
  </details>

* Чем заканчивается история для главного героя?
  <details> 
  <summary>ответ:</summary>
  Полиция арестовывает мужчину и женщину. Инспектор благодарит Эдди за помощь, но напоминает, что Эдди сам преступник.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Locked_Room/The_Locked_Room.vtt";
        const audio = "/listen/A1/Beginner/The_Locked_Room/The_Locked_Room.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>