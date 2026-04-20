# Listen: Ski_Race
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто главные героини и куда они приезжают в воскресенье?
  <details> 
  <summary>ответ:</summary>
  Сью (Sue) и Ребекка (Rebecca). Они приезжают в свой отпускной шале (holiday chalet).
  </details>

* Какого цвета ботинки и лыжи у Сью и у Ребекки?
  <details> 
  <summary>ответ:</summary>
  У Сью жёлтые ботинки (yellow boots) и синие лыжи (blue skis). У Ребекки красные ботинки (red boots) и белые лыжи (white skis).
  </details>

* Кто спотыкается о лыжи Сью и почему?
  <details> 
  <summary>ответ:</summary>
  Марк (Mark) спотыкается, потому что лыжные палки Сью торчат сзади (Sue's poles are sticking out behind her).
  </details>

* Что Сью и Ребекка делают в понедельник?
  <details> 
  <summary>ответ:</summary>
  Они поднимаются на подъёмнике (ski lift) на вершину горы и съезжают по склону (piste). Они хорошие лыжницы и не падают.
  </details>

* Какой день недели — день соревнований (race)?
  <details> 
  <summary>ответ:</summary>
  Суббота (Saturday). Это последний день отпуска.
  </details>

* Что Дэвид и Марк делают с лыжами Сью, пока она обедает?
  <details> 
  <summary>ответ:</summary>
  Они находят её синие лыжи и откручивают винт на креплении (undo a screw on one of Sue's skis / undo the binding).
  </details>

* Что происходит во время гонки с Сью?
  <details> 
  <summary>ответ:</summary>
  У Сью отстегивается лыжа (Sue's ski comes off), она падает и съезжает со склона.
  </details>

* Что кричит Дэвид Марку, когда они обгоняют Сью и Ребекку?
  <details> 
  <summary>ответ:</summary>
  Он кричит: «Винт на её креплении откручен. Мы победим!» (The screw on her binding is undone. We're going to win!)
  </details>

* Кто в итоге выигрывает гонку?
  <details> 
  <summary>ответ:</summary>
  Сью и Ребекка приходят первыми (Sue and Rebecca come first). Они выигрывают гонку.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Ski_Race/Ski_Race.vtt";
        const audio = "/listen/A1/Starter/Ski_Race/Ski_Race.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>