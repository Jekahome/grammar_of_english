# Listen: Under The Moon
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такие Киа (Kiah) и Рилла (Rilla) и где они работают?
  <details> 
  <summary>ответ:</summary>
  Киа и Рилла работают на космическом корабле OM-45. Они следят за спутниками и данными об AOL (атмосферном защитном слое).
  </details>

* Что такое AOL и какая проблема с ним происходит?
  <details> 
  <summary>ответ:</summary>
  AOL — атмосферный защитный слой (Atmospheric Protection Layer), который защищает Землю. Он разрушается (breaking up), появляются большие дыры (big holes), и они становятся всё больше.
  </details>

* Кто такой командир Задак (Commander Zadak) и где он работает?
  <details> 
  <summary>ответ:</summary>
  Командир Задак — командир Австралии (Commander of Australia). Он друг отца Риллы.
  </details>

* Кто такой Гог (Gog) и что он хочет сделать?
  <details> 
  <summary>ответ:</summary>
  Гог — Командир Земли (Earth Commander), самый богатый и самый плохой человек на Земле. Он хочет улететь на Марс (Mars) и не слушает никого о проблемах AOL и засухе.
  </details>

* Что случается с Кiah и Риллой, когда они пытаются рассказать Гогу о проблемах AOL?
  <details> 
  <summary>ответ:</summary>
  Гог приказывает guards отвести их в тюрьму (prison 888).
  </details>

* Кто такой Адай (Adai) и где он находится?
  <details> 
  <summary>ответ:</summary>
  Адай — командир лунной колонии (Commander of the Moon colony). Гог отправил его туда два года назад за то, что Адай просил деньги на AOL.
  </details>

* Как умирает командир Задак?
  <details> 
  <summary>ответ:</summary>
  Задак пытается убить Гога, но кошка Бел прыгает на него, и он случайно стреляет в Бел. Затем guards стреляют в Задака, и он умирает.
  </details>

* Что Гог делает после смерти Задака и Бел?
  <details> 
  <summary>ответ:</summary>
  Он приказывает сжечь леса в Австралии (destroy Australia, burn Zadak's new forest) и начинает пожары в Европе и Африке.
  </details>

* Кто спасает Кiah и Риллу из тюрьмы?
  <details> 
  <summary>ответ:</summary>
  Адай прилетает на маленьком самолёте (little plane) и забирает их, а также других заключённых и guards.
  </details>

* Куда они отправляются на космическом корабле?
  <details> 
  <summary>ответ:</summary>
  Они отправляются на лунную колонию (Moon colony), которая находится под Луной (under the Moon). Там есть реки, дожди, леса, цветы и первый город.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Under_The_Moon/Under_The_Moon.vtt";
        const audio = "/listen/A1/Beginner/Under_The_Moon/Under_The_Moon.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>