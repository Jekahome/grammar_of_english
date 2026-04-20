# Listen: The Lost Ship

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто ведёт судовой журнал (log book) и что он туда записывает?
  <details> 
  <summary>ответ:</summary>
  Капитан корабля (the Captain). Он записывает о погоде, о корабле и о людях на корабле.
  </details>

* Куда плывут капитан и его команда?
  <details> 
  <summary>ответ:</summary>
  Они плывут домой (going home) и скоро должны到达.
  </details>

* Что странного в корабле, который они замечают?
  <details> 
  <summary>ответ:</summary>
  На корабле нет названия (no name), на палубе нет людей (no men on deck).
  </details>

* Что капитан и двое его людей делают, когда подплывают к странному кораблю?
  <details> 
  <summary>ответ:</summary>
  Они садятся в маленькую лодку (small boat), гребут к кораблю и поднимаются на палубу, чтобы поискать людей.
  </details>

* Кто управляет странным кораблём, если никого нет у штурвала?
  <details> 
  <summary>ответ:</summary>
  Ветер управляет кораблём (The wind is steering the ship).
  </details>

* Что капитан находит в каюте, где едят матросы?
  <details> 
  <summary>ответ:</summary>
  Он находит еду на столе (food on the table), воду в кувшине (water in the jug) и сигару в пепельнице (a cigar in the ashtray) — но никого нет.
  </details>

* Что лежит на столе в капитанской каюте?
  <details> 
  <summary>ответ:</summary>
  Судовой журнал (log book) и фотография (a photograph).
  </details>

* Чьё лицо капитан видит на фотографии?
  <details> 
  <summary>ответ:</summary>
  Он видит своё собственное лицо (a photograph of himself).
  </details>

* Что капитан видит вокруг, когда выбегает на палубу?
  <details> 
  <summary>ответ:</summary>
  Он видит густой туман (thick mist). Он не видит ни своего корабля, ни своих людей, ни солнца.
  </details>

* Где в конце истории оказывается капитан?
  <details> 
  <summary>ответ:</summary>
  Он совсем один (He is alone). Судя по всему, он оказался на том самом загадочном корабле-призраке.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_Lost_Ship/The_Lost_Ship.vtt";
        const audio = "/listen/A1/Starter/The_Lost_Ship/The_Lost_Ship.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>