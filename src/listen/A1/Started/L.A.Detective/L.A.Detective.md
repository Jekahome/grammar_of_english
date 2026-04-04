# Listen: L.A. Detective

<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Как зовут главного героя и кем он работает?
  <details> 
  <summary>ответ:</summary>
  Его зовут Ленни Сэмюэл (Lenny Samuel), друзья называют его Лен. Он детектив в Лос-Анджелесе (L.A. detective).
  </details>

* Что происходит, когда Лен сидит в офисе без работы?
  <details> 
  <summary>ответ:</summary>
  В офис заходит мужчина с пистолетом. Его зовут Фрэнк. Он бьёт Лена по голове, и Лен теряет сознание.
  </details>

* Где Лен просыпается и кто его встречает?
  <details> 
  <summary>ответ:</summary>
  Он просыпается в большом кресле в доме мистера Блейна (Mr. Blane) — очень богатого и очень плохого человека.
  </details>

* Что случилось с дочерью мистера Блейна?
  <details> 
  <summary>ответ:</summary>
  Её похитила группа «Молодые» (The Young Ones). Они требуют выкуп $100,000.
  </details>

* Как зовут дочь мистера Блейна и как она выглядит?
  <details> 
  <summary>ответ:</summary>
  Её зовут Кармен (Carmen). Ей 18 лет, у неё длинные тёмные волосы и голубые глаза. Она красивая.
  </details>

* Соглашается ли Лен помочь мистеру Блейну, даже если ему не нравится этот человек?
  <details> 
  <summary>ответ:</summary>
  Да, потому что Кармен в беде и нуждается в помощи (Carmen is in trouble. She needs help).
  </details>

* Что происходит на автовокзале во вторник в 2 часа дня?
  <details> 
  <summary>ответ:</summary>
  Лен и Фрэнк видят Кармен с молодым человеком. Фрэнк отдаёт деньги, но Кармен кусает Лена за руку, и они с молодым человеком убегают на автобусе в Сан-Франциско.
  </details>

* Где Лен находит Кармен в Сан-Франциско?
  <details> 
  <summary>ответ:</summary>
  Он видит вывеску «The Young Ones» на здании. Это школа для бедных детей. Кармен играет с детьми.
  </details>

* Почему Кармен не хочет возвращаться домой?
  <details> 
  <summary>ответ:</summary>
  Она счастлива здесь, ей нравится работать в школе. Деньги ($100,000) предназначаются для школы.
  </details>

* Что Кармен говорит о своём отце?
  <details> 
  <summary>ответ:</summary>
  Она говорит, что её отец — плохой человек (My father is a bad man), и показывает документы, доказывающие, что он преступник.
  </details>

* Что Лен делает с документами?
  <details> 
  <summary>ответ:</summary>
  Он отвозит документы в полицию. Фрэнка и мистера Блейна арестовывают.
  </details>

* Почему Лен продолжает работать детективом, несмотря на то, что у него нет денег?
  <details> 
  <summary>ответ:</summary>
  У него интересная работа, и он любит помогать людям (I like to help people. That's why I'm an L.A. detective).
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/L.A.Detective/L.A.Detective.vtt";
        const audio = "/listen/A1/Started/L.A.Detective/L.A.Detective.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>