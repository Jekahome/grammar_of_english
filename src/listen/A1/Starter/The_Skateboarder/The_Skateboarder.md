# Listen: The Skateboarder

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где Ханна любит бывать после школы и с кем?
  <details> 
  <summary>ответ:</summary>
  Она ходит в новый скейт-парк (skatepark) со своим двоюродным братом Джастином (Justin).
  </details>

* Какая главная проблема у Ханны в начале истории?
  <details> 
  <summary>ответ:</summary>
  У неё нет скейтборда (no skateboard).
  </details>

* Что Ханна получает на день рождения от родителей и от брата?
  <details> 
  <summary>ответ:</summary>
  От родителей — скейтборд (a skateboard). От брата Эвана — шлем (a helmet).
  </details>

* Что происходит, когда Ханна впервые пробует прыгнуть на своём скейтборде в скейт-парке?
  <details> 
  <summary>ответ:</summary>
  Она падает со скейтборда (she falls off her skateboard), кто-то смеётся, и она в смущении уходит.
  </details>

* Какой пример вдохновляет Ханну в парке?
  <details> 
  <summary>ответ:</summary>
  Маленький мальчик Майкл (baby Michael) учится ходить: он падает, но снова и снова встаёт и пробует опять.
  </details>

* Где Ханна находит место для тренировок в одиночестве?
  <details> 
  <summary>ответ:</summary>
  На парковке офисного здания (parking lot of an office building), где после пяти часов вечера нет машин.
  </details>

* Какую идею предлагает брат Эван, чтобы Ханна могла кататься в скейт-парке без людей?
  <details> 
  <summary>ответ:</summary>
  Он советует приходить в скейт-парк рано утром (early morning), когда там никого нет.
  </details>

* Что меняется в характере Ханны благодаря скейтборду?
  <details> 
  <summary>ответ:</summary>
  Она начинает вставать рано утром и больше никогда не опаздывает в школу (she's never late for school now).
  </details>

* Какой праздник отмечается 21 июня?
  <details> 
  <summary>ответ:</summary>
  «День катания на скейтборде» (Go Skateboarding Day).
  </details>

* Что говорит Оуэн (Owen) Ханне, когда падает сам?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Все иногда падают» (Everybody falls off sometimes).
  </details>

* Что Джастин говорит Ханне в конце истории?
  <details> 
  <summary>ответ:</summary>
  «Теперь ты настоящий скейтбордист» (You're a real skateboarder now).
  </details>

* Что Ханна говорит о малыше Майкле, когда они с Джастином уходят из парка?
  <details> 
  <summary>ответ:</summary>
  Она говорит: «Может быть, однажды он станет очень хорошим скейтбордистом».
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_Skateboarder/The_Skateboarder.vtt";
        const audio = "/listen/A1/Starter/The_Skateboarder/The_Skateboarder.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>