# Listen: Run For Your Life
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где происходят события и кто главные герои?
  <details> 
  <summary>ответ:</summary>
  События происходят в Барселоне (Barcelona), Испания. Главные герои — Ким (Kim) и Дейв (Dave), им по 17 лет, они из Ливерпуля, Англия.
  </details>

* Что Ким и Дейв находят в мусорном баке (rubbish bin)?
  <details> 
  <summary>ответ:</summary>
  Они находят коричневую коробку (brown box), а в ней маленький белый пакетик (small white bag) с наркотиками (drugs).
  </details>

* Кто такой Видаль (Vidal) и почему он опасен?
  <details> 
  <summary>ответ:</summary>
  Видаль — мужчина в чёрной рубашке, который продаёт наркотики. У него нож (knife), и он угрожает Киме.
  </details>

* Кто такие Ана (Ana) и Начо (Nacho)?
  <details> 
  <summary>ответ:</summary>
  Они полицейские (police). Начо — мужчина с длинными волосами и тёмными очками, который в начале истории показался опасным.
  </details>

* Куда Ким убегает от Видаля?
  <details> 
  <summary>ответ:</summary>
  Она убегает на рынок (market) через заднюю дверь (back door).
  </details>

* Что предлагает полиция сделать Киме и Дейву?
  <details> 
  <summary>ответ:</summary>
  Они просят Ким выступить приманкой (to help them catch Vidal), чтобы он снова появился на той же улице.
  </details>

* Как Дейв спасает Ким, когда Видаль держит её с ножом?
  <details> 
  <summary>ответ:</summary>
  Он хватает мусорный бак (rubbish bin), поднимает его над головой и бросает в Видаля. Бак попадает в Видаля, и он падает.
  </details>

* Чем заканчивается история?
  <details> 
  <summary>ответ:</summary>
  Полиция арестовывает Видаля. Ким и Дейв возвращаются в отель. Ким предлагает на следующий день снова пойти гулять по старому городу, а Дейв в шутку говорит, что пойдёт с ней только до автобусной остановки.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Run_For_Your_Life/Run_For_Your_Life.vtt";
        const audio = "/listen/A1/Beginner/Run_For_Your_Life/Run_For_Your_Life.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>