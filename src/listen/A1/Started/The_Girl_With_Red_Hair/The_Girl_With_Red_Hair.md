# Listen: The Girl With Red Hair
 
<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Марк Селлерс и где он работает?
  <details> 
  <summary>ответ:</summary>
  Марк Селлерс работает в службе безопасности (security) в универмаге Mason's store. Ему 22 года.
  </details>

* Как зовут коллег Марка?
  <details> 
  <summary>ответ:</summary>
  Леон (Leon) и Шами (Shami).
  </details>

* Какую девушку Марк впервые замечает на экране наблюдения?
  <details> 
  <summary>ответ:</summary>
  Девушку с рыжими волосами и зелёными глазами (the girl with red hair and green eyes).
  </details>

* Кто такой Грег (Greg) и почему Марк думает, что это её сын?
  <details> 
  <summary>ответ:</summary>
  Грег — маленький мальчик, который всегда с ней. У него тоже рыжие волосы и зелёные глаза. Марк думает, что это её ребёнок.
  </details>

* Как Шами и Леон шутливо называют девушку?
  <details> 
  <summary>ответ:</summary>
  Шами называет её Скарлет (Scarlet), а Леон — Эппл (Apple).
  </details>

* Что происходит, когда Марк впервые подходит к девушке в магазине?
  <details> 
  <summary>ответ:</summary>
  Грег роняет шляпу, Марк поднимает её и отдаёт. Он замечает, что на её руке нет кольца (no ring).
  </details>

* Почему срабатывает сигнализация, когда девушка с Грегом выходит из магазина?
  <details> 
  <summary>ответ:</summary>
  Потому что у Грега в руке маленький красный самолётик (red plane), который он взял в магазине.
  </details>

* Кого Марк видит на следующую среду, наблюдая за девушкой?
  <details> 
  <summary>ответ:</summary>
  Он видит красивого мужчину в чёрной куртке, который целует девушку, а потом поднимает и целует Грега. Марк решает, что это её муж и отец Грега.
  </details>

* Куда идёт Марк в пятницу вечером и кого там встречает?
  <details> 
  <summary>ответ:</summary>
  Он идёт в клуб Ocean Blue. Там он встречает ту самую девушку с рыжими волосами. Её зовут Кейт (Kate).
  </details>

* Кто на самом деле Грег и кто такая Клэр (Claire)?
  <details> 
  <summary>ответ:</summary>
  Грег — сын Клэр. Клэр — сестра Кейт (sister). Кейт просто присматривает за Грегом по средам утром.
  </details>

* Кем оказывается мужчина в чёрной куртке?
  <details> 
  <summary>ответ:</summary>
  Это муж Клэр и отец Грега (Claire's husband and Greg's father).
  </details>

* Чем заканчивается история для Марка и Кейт?
  <details> 
  <summary>ответ:</summary>
  Марк узнаёт, что у Кейт нет ни мужа, ни ребёнка. Кейт улыбается ему своими зелёными глазами. Среда остаётся лучшим днём недели.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/The_Girl_With_Red_Hair/The_Girl_With_Red_Hair.vtt";
        const audio = "/listen/A1/Started/The_Girl_With_Red_Hair/The_Girl_With_Red_Hair.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>