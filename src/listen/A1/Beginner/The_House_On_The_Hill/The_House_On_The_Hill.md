# Listen: The House On The Hill

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где Пол впервые встретил Марию и как она выглядела?
  <details> 
  <summary>ответ:</summary>
  Он встретил её у реки (by the river). У Марии были длинные тёмные волосы, и она была в красивом белом платье (pretty white dress).
  </details>

* Что Пол написал для Марии и как она отреагировала?
  <details> 
  <summary>ответ:</summary>
  Он написал для неё стихотворение (poem). Мария сказала: «Ты замечательный, Пол. Я люблю твоё стихотворение».
  </details>

* Почему Мария отказалась выйти замуж за Пола?
  <details> 
  <summary>ответ:</summary>
  Она сказала: «Я не хочу быть бедной. Я хочу деньги, одежду и большую машину». Мать тоже была против.
  </details>

* Что Пол выиграл в литературном конкурсе и какую работу ему предложили?
  <details> 
  <summary>ответ:</summary>
  Он выиграл первый приз (first prize) — 500 фунтов. Ему предложили работу в газете (work on our newspaper).
  </details>

* Что случилось с мужем Марии и с её матерью?
  <details> 
  <summary>ответ:</summary>
  Мария ушла от мужа (ran away from her husband). Её мать умерла от шока, узнав эту новость (the shock killed her).
  </details>

* Где Пол нашёл Марию в конце истории?
  <details> 
  <summary>ответ:</summary>
  Он нашёл её в пустом доме на холме (the house on the hill), куда пришёл искать её адрес.
  </details>

* Почему Мария вышла замуж за богатого человека?
  <details> 
  <summary>ответ:</summary>
  Она хотела денег, хорошего времяпрепровождения (good time) и друзей. Она была несчастна дома с матерью.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_House_On_The_Hill/The_House_On_The_Hill.vtt";
        const audio = "/listen/A1/Beginner/The_House_On_The_Hill/The_House_On_The_Hill.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>