# Listen: hristmas In Prague

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где и когда происходит действие в начале книги?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в Чехословакии (Czechoslovakia) в 1957 году, недалеко от границы с Австрией (Austrian border).
  </details>

* Что происходит с женщиной и младенцем на границе в рождественскую ночь 1957 года?
  <details> 
  <summary>ответ:</summary>
  Пограничники стреляют в женщину (border guards shoot her). Она умирает в снегу, а младенец остаётся жив.
  </details>

* Кто такая Кэрол (Carol) и чем она занимается?
  <details> 
  <summary>ответ:</summary>
  Кэрол — арфистка (harpist). Она играет в Оксфордском оркестре (Oxford Orchestra).
  </details>

* Кто такие Ян (Jan) и Йозеф Влах (Josef Vlach)?
  <details> 
  <summary>ответ:</summary>
  Ян — муж Кэрол, преподаёт чешский язык в Оксфорде. Йозеф — его отец, у него плохое зрение.
  </details>

* Что Кэрол видит на улице в Праге и что с ней происходит?
  <details> 
  <summary>ответ:</summary>
  Она видит мужчину, похожего на её мужа Яна, и бежит за ним через улицу. Её сбивает автобус (bus).
  </details>

* Кто такой Павел Брыхта (Pavel Brychta) и почему он приходит в больницу?
  <details> 
  <summary>ответ:</summary>
  Павел — мужчина, похожий на Яна. Он видел аварию и вызвал скорую. Он приходит узнать, всё ли в порядке с женщиной.
  </details>

* Кем на самом деле оказывается Павел?
  <details> 
  <summary>ответ:</summary>
  Он — брат-близнец Яна (twin brother). Их мать Ленка погибла на границе в 1957 году.
  </details>

* Что написано в письме, которое Йозеф показывает Павлу?
  <details> 
  <summary>ответ:</summary>
  Бабушка Павла пишет, что Ленка и маленький Павел убиты на границе, и чтобы Йозеф не возвращался в Прагу.
  </details>

* Почему Йозеф думал, что Павел мёртв?
  <details> 
  <summary>ответ:</summary>
  Потому что бабушка Павла (Stanislava) написала ему письмо, что ребёнок тоже убит. На самом деле Павел выжил.
  </details>

* Чем заканчивается история для семьи Влах?
  <details> 
  <summary>ответ:</summary>
  Все идут на рождественский концерт (Christmas concert) в Праге. Йозеф счастлив, потому что он с двумя сыновьями.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Christmas_In_Prague/Christmas_In_Prague.vtt";
        const audio = "/listen/A1/Beginner/Christmas_In_Prague/Christmas_In_Prague.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>