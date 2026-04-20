# Listen: The Watchers
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такие Тарас (Taras) и Акета (Aketa) и сколько им лет?
  <details> 
  <summary>ответ:</summary>
  Тарас и Акета — сестра и брат, «Смотрящие» (Watchers). Им 3000 лет.
  </details>

* Где находятся Тарас и Акета и за кем они наблюдают?
  <details> 
  <summary>ответ:</summary>
  Они находятся под дворцом Кносс (Palace of Knossos) в большом зале и наблюдают за золотой статуей бога Посейдона (Poseidon).
  </details>

* Кто такие Джим (Jim), Стелла (Stella) и Никос (Nikos)?
  <details> 
  <summary>ответ:</summary>
  Джим и Стелла — брат и сестра из Англии, отдыхающие в Греции. Никос — их друг, грек, который работает во дворце Кносс.
  </details>

* Что Джим нашёл в пещере и что он хотел с этим сделать?
  <details> 
  <summary>ответ:</summary>
  Он нашёл золотую чашу (gold bowl) и хотел продать её (sell it), чтобы получить много денег.
  </details>

* Почему Стелла не хотела заходить в большой зал в конце третьего дня?
  <details> 
  <summary>ответ:</summary>
  Она чувствовала, что кто-то наблюдает за ними (someone is watching us), и ей это не нравилось.
  </details>

* Что случилось, когда Джим, Стелла и Никос подошли к большому залу со статуей?
  <details> 
  <summary>ответ:</summary>
  Началось землетрясение (earthquake). Стены и камни падали, и они не могли выбраться.
  </details>

* Кто вызвал землетрясение и почему?
  <details> 
  <summary>ответ:</summary>
  Посейдон (Poseidon), бог моря и землетрясений. Он разгневался, потому что чужие люди пришли в его зал и хотели взять его золото.
  </details>

* Что случилось с Джимом, Стеллой и Никосом в конце?
  <details> 
  <summary>ответ:</summary>
  Они погибли под камнями (lie under the stones). Дверь в пещеры исчезла после землетрясения, и никто не мог их найти.
  </details>

* Что сказала мать Никоса в газете?
  <details> 
  <summary>ответ:</summary>
  Она сказала, что её сын и его друзья в пещерах под Кноссом, но дверь в пещеры исчезла после землетрясения, и они не могут выбраться.
  </details>

* Что держат в руках Джим, Стелла и Никос после смерти?
  <details> 
  <summary>ответ:</summary>
  Они держат золотую чашу (the god's gold bowl).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Watchers/The_Watchers.vtt";
        const audio = "/listen/A1/Beginner/The_Watchers/The_Watchers.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>