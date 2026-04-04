# Listen: Lisa's Song

<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Сколько лет Элу Брауну и где он живёт?
  <details> 
  <summary>ответ:</summary>
  Элу 13 лет, он живёт с родителями в Ноттингеме, Англия, в небольшом доме.
  </details>

* Какая первая любовь у Эла?
  <details> 
  <summary>ответ:</summary>
  Его первая любовь — музыка (Al's first love is music).
  </details>

* Как называется группа Эла и кто в неё входит?
  <details> 
  <summary>ответ:</summary>
  Группа называется Fast Cars. В неё входят Эл (гитара), Бен (гитара), Эмма (вокал) и Мик (ударные).
  </details>

* Что происходит в семье Эла в начале истории?
  <details> 
  <summary>ответ:</summary>
  Миссис Браун ждёт ребёнка (expecting a baby).
  </details>

* Почему Лиза должна остаться в больнице после рождения?
  <details> 
  <summary>ответ:</summary>
  Она очень маленькая (very little) и должна оставаться в больнице две недели.
  </details>

* Как меняется жизнь Эла после того, как Лиза возвращается домой?
  <details> 
  <summary>ответ:</summary>
  Лиза много плачет, все устают. Эл не может играть на гитаре, родители просят его помогать по дому. Он не может сосредоточиться в школе.
  </summary>

* К кому Эл идёт жаловаться на свои проблемы?
  <details> 
  <summary>ответ:</summary>
  Он идёт к своему дедушке Джеку Брауну (Jack Brown).
  </details>

* Какую старую фотографию рассматривает дедушка?
  <details> 
  <summary>ответ:</summary>
  Он смотрит на фотографию своей сестры Элис (Alice).
  </details>

* Почему друзья Эла злятся на него?
  <details> 
  <summary>ответ:</summary>
  Он постоянно опаздывает на репетиции, не может сосредоточиться, и группа хочет найти нового гитариста.
  </summary>

* Что сообщение от дедушки говорит Элу сделать?
  <details> 
  <summary>ответ:</summary>
  Написать песню для Лизы (Write a song for Lisa).
  </details>

* Какую плохую новость сообщают родители Элу?
  <details> 
  <summary>ответ:</summary>
  У Лизы больное сердце. Ей нужна сложная операция, которую не могут сделать в Англии — только в США. Операция очень дорогая.
  </details>

* Как группа решает собрать деньги на операцию?
  <details> 
  <summary>ответ:</summary>
  Они играют концерт (gig) в школе, где Эл поёт песню для Лизы. Потом они выкладывают песню на сайт, и люди скачивают её за деньги.
  </details>

* Кто приходит на концерт и записывает песню?
  <details> 
  <summary>ответ:</summary>
  Приходят люди с радио (Some people from the radio are there too). Они записывают песню.
  </details>

* Что вспоминает дедушка Джек в аэропорту?
  <details> 
  <summary>ответ:</summary>
  Он вспоминает ночь в 1941 году во время войны, когда бомба упала на их дом, и его сестра Элис погибла. Он не разрешил ей пойти на концерт.
  </details>

* Чему научила дедушку его прошлая история?
  <details> 
  <summary>ответ:</summary>
  Он понял, что нужно поддерживать молодых и давать им возможность заниматься музыкой и тем, что они любят. Он видит много от Элис в своём внуке Эле.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/Lisas_Song/Lisas_Song.vtt";
        const audio = "/listen/A1/Started/Lisas_Song/Lisas_Song.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>
