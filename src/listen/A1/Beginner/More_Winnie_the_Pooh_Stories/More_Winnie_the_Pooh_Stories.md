# Listen: More Winnie-the-Pooh Stories
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста (главы 7-10)</summary>

* Кто неожиданно появился в Лесу, и как их звали?
  <details> 
  <summary>ответ:</summary>
  Кенга (Kanga) и Крошка Ру (Baby Roo).
  </details>

* Какой план придумал Кролик (Rabbit), чтобы избавиться от Кенги?
  <details> 
  <summary>ответ:</summary>
  Украсть Крошку Ру и спрятать его, а когда Кенга спросит «где Ру?», ответить «Ага!» (aha), что будет означать, что они скажут, где Ру, если она пообещает уйти из Леса и никогда не возвращаться.
  </details>

* Кто должен был запрыгнуть в сумку Кенги вместо Ру?
  <details> 
  <summary>ответ:</summary>
  Пятачок (Piglet), потому что он очень маленький и похож на Ру.
  </details>

* Что Винни-Пух должен был делать, пока Пятачок прыгал в сумку?
  <details> 
  <summary>ответ:</summary>
  Очень увлечённо разговаривать с Кенгой, чтобы она отвернулась и не заметила подмены.
  </details>

* Какое стихотворение Пух прочитал Кенге, чтобы отвлечь её?
  <details> 
  <summary>ответ:</summary>
  Стихотворение «Строки, написанные медведем с очень маленькими мозгами» (Lines written by a bear of very little brain) про дни недели.
  </details>

* Что случилось с Пятачком, когда Кенга обнаружила его в своей сумке?
  <details> 
  <summary>ответ:</summary>
  Кенга приняла его за Ру, искупала, накормила лекарством и назвала Генри Пуделем (Henry Poodle).
  </details>

* Кто спас Пятачка, объяснив Кенге, что он не Ру?
  <details> 
  <summary>ответ:</summary>
  Кристофер Робин (Christopher Robin), который сказал, что только что видел Ру у Кролика дома.
  </details>

* Что в итоге стали делать каждую неделю Кенга и Кролик?
  <details> 
  <summary>ответ:</summary>
  Каждый вторник Крошка Ру проводил день с Кроликом, а Кенга проводила день с Пухом, обучая его прыгать.
  </details>

* Что Пух сочинял по дороге на поиски Северного полюса?
  <details> 
  <summary>ответ:</summary>
  Песню (song), которая начиналась со слов «Sing ho for the life of a bear».
  </details>

* Что Пух использовал в качестве лодки, когда спас Пятачка из наводнения?
  <details> 
  <summary>ответ:</summary>
  Свой большой горшок из-под мёда (his largest pot of honey), который назвал «Плавающий медведь» (the floating bear).
  </details>

* Как Пух и Кристофер Робин доплыли до домика Пятачка?
  <details> 
  <summary>ответ:</summary>
  Они использовали зонт Кристофера Робина как лодку и назвали её «Мозг Пуха» (the brain of Pooh).
  </details>

* Что написал Пятачок в бутылке и выбросил в воду?
  <details> 
  <summary>ответ:</summary>
  «Help! Piglet! Me!» с одной стороны и «It's me, Piglet! Help! Help!» с другой.
  </details>

* Что Кристофер Робин подарил Пуху на вечеринке в его честь?
  <details> 
  <summary>ответ:</summary>
  Специальный пенал (a special pencil case) с карандашами, точилкой, ластиком и линейкой.
  </details>

* Что Пух и Пятачок говорят себе первым делом утром?
  <details> 
  <summary>ответ:</summary>
  Пух спрашивает: «Что на завтрак?» (What's for breakfast?), а Пятачок: «Интересно, что сегодня случится захватывающего?» (I wonder what's going to happen exciting today?).
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/More_Winnie_the_Pooh_Stories/More_Winnie_the_Pooh_Stories.vtt";
        const audio = "/listen/A1/Beginner/More_Winnie_the_Pooh_Stories/More_Winnie_the_Pooh_Stories.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>