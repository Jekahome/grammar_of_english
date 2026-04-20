# Listen: The Barcelona Game

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где живёт Холли Хупер и сколько ей лет?
  <details> 
  <summary>ответ:</summary>
  Холли живёт в Манчестере (Manchester). Ей 12 лет.
  </details>

* Кто такой Фред Бёрнс (Fred Burns) и как Холли перепутала с ним сумки?
  <details> 
  <summary>ответ:</summary>
  Фред Бёрнс — американец (American), который сидел в кафе La Masia рядом с Холли. У него была такая же сумка с надписью «Барселона». Он ушёл, забрав сумку Холли, а Холли взяла его сумку.
  </details>

* Кто такой Пере (Pere) и как он помогает Холли?
  <details> 
  <summary>ответ:</summary>
  Пере — испанский мальчик (Spanish boy) на мотоцикле (motorbike). Он помогает Холли догнать такси Фреда Бёрнса.
  </details>

* Где Холли догоняет Фреда Бёрнса и что она ему говорит?
  <details> 
  <summary>ответ:</summary>
  Она догоняет его у кафедрального собора (cathedral). Она объясняет, что они перепутали сумки, и они обмениваются ими.
  </details>

* Что Пере дарит Холли на прощание?
  <details> 
  <summary>ответ:</summary>
  Он дарит ей два красных цветка (two red flowers), которые застряли в колесе его мотоцикла.
  </details>

* Что Холли делает во время футбольного матча?
  <details> 
  <summary>ответ:</summary>
  Она читает книгу «Оливер Твист» (Oliver Twist).
  </details>

* Как зовут братьев Холли и что они любят?
  <details> 
  <summary>ответ:</summary>
  Братьев зовут Кев (Kev) и Трев (Trev). Им по 17 лет, они любят футбол (football).
  </details>

* Куда братья хотели пойти вместо осмотра достопримечательностей Барселоны?
  <details> 
  <summary>ответ:</summary>
  Они хотели пойти в парк аттракционов Тибидабо (Tibidabo funfair).
  </details>

* Что Кев велит Холли сделать с билетами на футбольный матч?
  <details> 
  <summary>ответ:</summary>
  Он велит ей положить билеты в сумку (put the tickets in your bag), чтобы не брать их с собой в парк аттракционов.
  </details>

* Почему Холли не поехала с братьями в парк аттракционов?
  <details> 
  <summary>ответ:</summary>
  Ей стало плохо после американских горок (big wheel), и братья отправили её ждать в кафе.
  </details>

* Какие достопримечательности Барселоны упоминаются в книге?
  <details> 
  <summary>ответ:</summary>
  Кафедральный собор (cathedral), улица Лас-Рамблас (Las Ramblas), Олимпийский стадион (Olympic Stadium), парк Тибидабо (Tibidabo).
  </details>

* Как Холли называет свою поездку в конце истории?
  <details> 
  <summary>ответ:</summary>
  Она думает: «Да, я отлично провела время» (Yes, I had a great time).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Barcelona_Game/The_Barcelona_Game.vtt";
        const audio = "/listen/A1/Beginner/The_Barcelona_Game/The_Barcelona_Game.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>