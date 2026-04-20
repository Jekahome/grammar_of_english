# Listen: Marcel And The Mona Lisa
  
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Марсель и где происходит действие?
  <details> 
  <summary>ответ:</summary>
  Марсель — это французский мышонок (French mouse) и детектив. Действие происходит в Париже, в Лувре (Louvre).
  </details>

* Как зовут подругу Марселя и чем она занимается?
  <details> 
  <summary>ответ:</summary>
  Её зовут Селин (Celine). Она рисует картины (paints pictures) и очень красивая.
  </details>

* Что Марсель видит в тёмной комнате после ужина?
  <details> 
  <summary>ответ:</summary>
  Он видит мужчину с длинным ножом (a man with a long knife). Это новый охранник, который крадёт Мону Лизу (Mona Lisa).
  </details>

* Куда Марсель прыгает, чтобы не попасться?
  <details> 
  <summary>ответ:</summary>
  Он залезает в чёрную сумку (black bag), куда вор положил картину.
  </details>

* Как зовут двух воров и куда они едут на поезде?
  <details> 
  <summary>ответ:</summary>
  Их зовут Антуан (Antoine) и Анри (Henri). Они едут в Италию (Italy), в Венецию (Venice).
  </details>

* Кто такой Синьор Спандини и сколько кошек в его комнате?
  <details> 
  <summary>ответ:</summary>
  Синьор Спандини (Signor Spandini) — главарь (boss). В комнате девять кошек (nine cats).
  </details>

* Как Марсель спасается от кошки?
  <details> 
  <summary>ответ:</summary>
  Он залезает на красную штору (red curtain), затем прыгает на книжный шкаф и сталкивает две свечи (candles). Кошка получает ожог.
  </details>

* Что Марсель делает с картиной после того, как выбегает из комнаты?
  <details> 
  <summary>ответ:</summary>
  Он приносит Мону Лизу к полицейскому участку (police station) и проталкивает её через почтовый ящик (letterbox).
  </details>

* Что написано в газете, которую Марсель видит на вокзале в Париже?
  <details> 
  <summary>ответ:</summary>
  Там написано: «ИТАЛЬЯНСКАЯ ПОЛИЦИЯ НАШЛА МОНУ ЛИЗУ» (ITALIAN POLICE FIND THE MONA LISA).
  </details>

* Что делает Мона Лиза в конце истории?
  <details> 
  <summary>ответ:</summary>
  Она улыбается (She's smiling).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Marcel_And_The_Mona_Lisa/Marcel_And_The_Mona_Lisa.vtt";
        const audio = "/listen/A1/Starter/Marcel_And_The_Mona_Lisa/Marcel_And_The_Mona_Lisa.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>