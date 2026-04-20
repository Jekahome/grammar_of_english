# Listen: George Sees Stars

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как называется отель и кто в нём работает?
  <details> 
  <summary>ответ:</summary>
  Отель называется «Happy Holiday Hotel». В нём работают: Джордж (менеджер), Мэри (его жена), Джуди (повар) и Питер (помощник в саду и переносит сумки).
  </details>

* Какой известный гость должен приехать в отель?
  <details> 
  <summary>ответ:</summary>
  Тони Мэдок (Tony Madoc) — телезвезда (TV star).
  </details>

* Почему Джуди отказывается покупать рыбу для ужина?
  <details> 
  <summary>ответ:</summary>
  Потому что по четвергам она всегда готовит курицу (chicken on Thursdays) и никогда не покупает рыбу.
  </details>

* Что Джордж просит Питера сделать для комнаты звезды?
  <details> 
  <summary>ответ:</summary>
  Он просит цветы (flowers) из сада.
  </details>

* Что происходит, когда Джордж вешает новую лампу в комнате?
  <details> 
  <summary>ответ:</summary>
  Он падает с лестницы (falls off the ladder) и ударяется головой.
  </details>

* Кто приезжает в отель в 5 часов?
  <details> 
  <summary>ответ:</summary>
  Пожилая женщина (an old woman) по имени Маргарет Адамс (Margaret Adams).
  </details>

* За кого Джордж принимает молодого человека по имени Пол Браун?
  <details> 
  <summary>ответ:</summary>
  Джордж думает, что Пол Браун — это Тони Мэдок, телезвезда, которая хочет тихого отдыха.
  </details>

* Что Джордж предлагает Полу Брауну бесплатно?
  <details> 
  <summary>ответ:</summary>
  Он предлагает ему комнату бесплатно (the room is free), шампанское (champagne) и телевизор в комнату.
  </details>

* Кем на самом деле оказывается пожилая женщина?
  <details> 
  <summary>ответ:</summary>
  Она и есть Тони Мэдок (Toni Madoc) — телезвезда. T-O-N-I — это женское имя.
  </details>

* Как Джордж спасает Тони Мэдок от падающей лампы?
  <details> 
  <summary>ответ:</summary>
  Он толкает её (pushes the woman), она падает, лампа падает на голову Джорджа.
  </details>

* Что Джордж говорит, когда приходит в сознание?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Шампанское?» (Champagne?)
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/George_Sees_Stars/George_Sees_Stars.vtt";
        const audio = "/listen/A1/Beginner/George_Sees_Stars/George_Sees_Stars.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>