# Listen: Blog love
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

## Глава 1 (Right to me)

* Кто такая Юнко (Junko) и почему она находится в Лондоне?
  <details> 
  <summary>ответ:</summary>
  Она из Токио. Она живёт в Великобритании три месяца, чтобы учить английский язык.
  </details>

* Где находится интернет-кафе, в котором Юнко пишет свой блог?
  <details> 
  <summary>ответ:</summary>
  В старом красном двухэтажном лондонском автобусе (in a tall old red London bus) рядом с её языковой школой.
  </details>

* Как зовут новых друзей Юнко из школы?
  <details> 
  <summary>ответ:</summary>
  Соня (Saunya) из Словакии и Сильвио (Silvio) из Италии.
  </details>

* Как зовут владельца интернет-кафе?
  <details> 
  <summary>ответ:</summary>
  Джефф (Jeff).
  </details>

## Глава 2 (Slow or fast)

* Какое прозвище использует человек, который оставляет сообщения в блоге Юнко?
  <details> 
  <summary>ответ:</summary>
  Slowboy.
  </details>

* Где, по словам Slowboy, он находится и чем занимается?
  <details> 
  <summary>ответ:</summary>
  Он говорит, что находится в Токио и учит японский язык.
  </details>

* Что Юнко советует Slowboy сделать, чтобы подружиться с застенчивой девушкой в автобусе?
  <details> 
  <summary>ответ:</summary>
  Быть очень вежливым и открыть перед ней дверь автобуса (open the door of the bus for her).
  </details>

* Что Джефф предлагает Юнко сделать после того, как кладёт руку ей на спину?
  <details> 
  <summary>ответ:</summary>
  Поехать в Вест-Энд на его мотоцикле (go to the West End on my motorbike).
  </details>

## Глава 3 (Slow boy in London)

* Что говорит Соня о мальчиках и мотоциклах?
  <details> 
  <summary>ответ:</summary>
  «Одни захватывающие, другие — медленные» (Some are exciting, some are slow).
  </details>

* Куда Сильвио приглашает Юнко в субботу вечером?
  <details> 
  <summary>ответ:</summary>
  В кино (to the cinema).
  </details>

* Что случилось на вечеринке, когда Джефф попросил Юнко поцеловать его?
  <details> 
  <summary>ответ:</summary>
  Он поцеловал её, а она убежала в другую комнату и позвонила Соне, чтобы та забрала её.
  </details>

* Кто такие Slowboy на самом деле?
  <details> 
  <summary>ответ:</summary>
  В интернет-кафе встают два человека: Джефф и Сильвио. Юнко не знает, кто из них Slowboy.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Blog_love/Blog_love.vtt";
        const audio = "/listen/A1/Beginner/Blog_love/Blog_love.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>