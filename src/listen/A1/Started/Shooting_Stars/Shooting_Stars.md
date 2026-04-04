# Listen: Shooting Stars
 
<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Куда летят Лиза и Элис на самолёте?
  <details> 
  <summary>ответ:</summary>
  Они летят на остров в Греции (an island in Greece).
  </details>

* Кого Лиза узнаёт в фильме, который показывают в самолёте?
  <details> 
  <summary>ответ:</summary>
  Она узнаёт Мэтта Лепарди (Matt Lepardi) — своего любимого киноактёра.
  </details>

* Кто такая Клаудия Карман?
  <details> 
  <summary>ответ:</summary>
  Она невеста (fiancée) Мэтта Лепарди, тоже кинозвезда.
  </details>

* В каком отеле останавливаются Лиза и Элис и кто им владеет?
  <details> 
  <summary>ответ:</summary>
  Они останавливаются в отеле «Oracle» (Hotel Oracle). Владельцы — Костас и Элени (Kostas and Eleni).
  </details>

* Как называется большой дорогой отель на острове?
  <details> 
  <summary>ответ:</summary>
  Отель «Astra» (Hotel Astra).
  </details>

* Что Лиза видит с балкона своего отеля?
  <details> 
  <summary>ответ:</summary>
  Она видит Клаудию Карман и Мэтта Лепарди на балконе отеля Astra. Мэтт кричит на Клаудию, а потом Клаудия достаёт из сумки пистолет.
  </details>

* Что происходит после того, как Лиза слышит звук выстрела?
  <details> 
  <summary>ответ:</summary>
  Мэтт падает на диван (falls onto the sofa). Клаудия стоит на балконе с пистолетом и видит Лизу.
  </details>

* Что объясняет Мэтт Лизе в ресторане?
  <details> 
  <summary>ответ:</summary>
  Он объясняет, что они с Клаудией снимают фильм на острове. В фильме Клаудия убивает его. Пистолет ненастоящий (The gun is not real).
  </details>

* Чем заканчивается история для Лизы?
  <details> 
  <summary>ответ:</summary>
  У неё захватывающее приключение (exciting adventure), а также шесть открыток и сувениры (six postcards and some souvenirs).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/Shooting_Stars/Shooting_Stars.vtt";
        const audio = "/listen/A1/Started/Shooting_Stars/Shooting_Stars.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>