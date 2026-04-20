# Listen: Humpty And His Family

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* От чьего лица ведётся рассказ и где живут страусы?
  <details> 
  <summary>ответ:</summary>
  Рассказ ведётся от лица страусёнка (Humpty). Страусы живут в Африке, в травянистых равнинах (grasslands).
  </details>

* Как страусёнок впервые видит мир и что происходит с яйцом?
  <details> 
  <summary>ответ:</summary>
  Он пробивает клювом маленькую дырочку (a small hole) и смотрит наружу. Яйцо начинает катиться и ударяет гепарда (cheetah) по спине.
  </details>

* Как зовут брата-близнеца рассказчика и как их называет мама?
  <details> 
  <summary>ответ:</summary>
  Брата зовут Dumpty. Мама называет их Humpty и Dumpty.
  </details>

* Почему страусята сначала не могут ходить?
  <details> 
  <summary>ответ:</summary>
  Их ноги дрожат (their legs are shaking) и не слушаются. Они падают на траву.
  </details>

* Кто учит страусят быстро бегать и резко поворачивать?
  <details> 
  <summary>ответ:</summary>
  Зебра (zebra), которая сначала обозвала страусов «уродливыми и глупыми птицами».
  </details>

* Как зовут двух сестёр рассказчика?
  <details> 
  <summary>ответ:</summary>
  Smiley (Улыбка) и Dragon (Дракон). Позже Dragon меняет имя на Sunny (Солнышко).
  </details>

* Кто такая Softy и почему она всегда убегает?
  <details> 
  <summary>ответ:</summary>
  Softy — подружка Humpty. Она убегает, потому что боится «дракона» (Dragon) и не понимает, что это имя, а не настоящее чудовище.
  </details>

* Как страусята (Humpty, Dumpty и Smiley) прогоняют львицу?
  <details> 
  <summary>ответ:</summary>
  Они встают в круг спинами друг к другу (stand in a circle, wing in wing) и бьют львицу ногами, когда она прыгает.
  </details>

* Что случается с Dragon, когда она танцует под дождём?
  <details> 
  <summary>ответ:</summary>
  Она простужается (gets a cold), у неё высокая температура (high temperature), болит голова и горло (headache and sore throat).
  </details>

* Как зовут детей Humpty и Softy?
  <details> 
  <summary>ответ:</summary>
  Footy (сын), Smalley (дочь) и Sunny (вторая дочь, которая сначала не хочет никакого имени).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Humpty_And_His_Family/Humpty_And_His_Family.vtt";
        const audio = "/listen/A1/Beginner/Humpty_And_His_Family/Humpty_And_His_Family.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>