# Listen: Sketches
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут детей, которые представляются в начале, и что каждый из них любит делать?
  <details> 
  <summary>ответ:</summary>
  Наташа (Natasha) — читать книги, Джорджина (Georgina) — плавать, Алекс (Alex) — кататься на велосипеде, Гарри (Harry) — петь, Софи (Sophie) — играть на гитаре.
  </details>

* Какую загадку (riddle) загадывает мистер Паркин (Mr. Parkin) и какой ответ получается в конце?
  <details> 
  <summary>ответ:</summary>
  Он загадывает загадку с числами: выбрать число от 1 до 9, прибавить его же, прибавить 10, разделить на 2, вычесть первое число. Ответ всегда 5.
  </details>

* Что дети готовят для мамы в День матери (Mother's Day) и что идёт не так?
  <details> 
  <summary>ответ:</summary>
  Они готовят кофе, тосты с маслом и джемом, хлопья с молоком и срывают цветы. Но кофе остывает, хлопья размокают (soggy corn flakes), но мама говорит, что всё замечательно.
  </details>

* Кого дети приглашают на вечеринку и как они описывают мальчиков?
  <details> 
  <summary>ответ:</summary>
  Они приглашают Тони (Tony), Бена (Ben) и Симона (Simon). Они описывают их словами: «он милый» (he's cute).
  </details>

* Какие домашние задания дети пытаются узнать по телефону и что выясняется в конце?
  <details> 
  <summary>ответ:</summary>
  Они обзванивают друзей, чтобы узнать, есть ли домашнее задание. В конце выясняется, что завтра выходной (holiday), и спать пора.
  </details>

* Почему мама не разрешает завести собаку и что говорит папа?
  <details> 
  <summary>ответ:</summary>
  Мама говорит: слишком шумно (too noisy), грязно (dirty) и дорого (expensive). Папа говорит «да».
  </details>

* Какие вопросы и ответы звучат в викторине о животных (The Great Animal Quiz Show)?
  <details> 
  <summary>ответ:</summary>
  Пасхальный кролик (Easter Bunny) — коричневый, с длинными ушами, несёт цветные яйца. Компьютерная мышь (computer mouse) не любит сыр. Самое сильное животное — улитка (snail), потому что носит свой дом. Птица, которая повторяет своё имя — кукушка (cuckoo). Морская свинка (guinea pig) — свинья, но не свинья. У попугая (budgie) и медведя (bear) общая первая буква. Разница между слоном и блохой: слон может иметь блоху, а блоха не может иметь слона. Рыбы не могут говорить, потому что у них рот полон воды.
  </details>

* Что дети говорят о погоде в разных странах и куда в итоге идут играть?
  <details> 
  <summary>ответ:</summary>
  В Англии туман (foggy) и страшно (scary), в Испании солнечно и жарко (too hot), в Швейцарии снежно и холодно (too cold), во Франции ветрено (windy). В итоге они идут играть под дождь в сапогах и дождевиках.
  </details>

* Что дети ищут перед выходом и что они забывают?
  <details> 
  <summary>ответ:</summary>
  Они ищут носки (socks) и туфли (shoes). В конце мама забывает свой чемодан (suitcase).
  </details>

* Какую игру играют дети на Пасху (Easter) и кто жульничает?
  <details> 
  <summary>ответ:</summary>
  Игра «яйцо и ложка» (egg and spoon race). Гарри (Harry) жульничает, потому что у него ложка больше.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Sketches/Sketches.vtt";
        const audio = "/listen/A1/Beginner/Sketches/Sketches.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>