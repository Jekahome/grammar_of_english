# Listen: The Cup In The Forest
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такие Пер и Нина и откуда они?
  <details> 
  <summary>ответ:</summary>
  Пер и его девушка Нина живут в большом городе в Норвегии (a big town in Norway).
  </details>

* Что Пер находит в лесу под камнями?
  <details> 
  <summary>ответ:</summary>
  Он находит старую чашу (an old cup) со странными словами на ней.
  </details>

* Кто такой Хакон (Hakon)?
  <details> 
  <summary>ответ:</summary>
  Хакон — это древнее имя викинга (old Viking name). В лесу находятся могилы викингов, и чаша принадлежит Хакону.
  </details>

* Что говорит смотритель музея (curator), когда видит чашу?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Верни чашу обратно в лес... сейчас же» (Take the cup back to the forest... now).
  </details>

* Что написано на чаше?
  <details> 
  <summary>ответ:</summary>
  «Эта чаша принадлежит Хакону. Будь осторожен!» (This cup belongs to Hakon. Be careful!)
  </details>

* Что делает Нина, когда Пер видит странного человека в кафе?
  <details> 
  <summary>ответ:</summary>
  Она уезжает на машине с чашей (driving away with the cup). Деньги для неё важнее (Money is important to Nina).
  </details>

* Куда Нина хочет продать чашу?
  <details> 
  <summary>ответ:</summary>
  В Осло (Oslo).
  </details>

* Кого Нина видит на дороге во время грозы?
  <details> 
  <summary>ответ:</summary>
  Она видит странного мужчину (a strange man) с тёмным и злым лицом — призрака Хакона.
  </details>

* Что происходит с машиной Нины?
  <details> 
  <summary>ответ:</summary>
  Машина съезжает с дороги, врезается в дерево и падает в реку (hits a tree and falls into a river). Нина погибает.
  </details>

* Что видит Пер после того, как полиция достаёт машину из реки?
  <details> 
  <summary>ответ:</summary>
  Он видит человека, который идёт в лес. Это призрак Хакона (the ghost of Hakon), и он забирает свою чашу.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_Cup_In_The_Forest/The_Cup_In_The_Forest.vtt";
        const audio = "/listen/A1/Starter/The_Cup_In_The_Forest/The_Cup_In_The_Forest.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>