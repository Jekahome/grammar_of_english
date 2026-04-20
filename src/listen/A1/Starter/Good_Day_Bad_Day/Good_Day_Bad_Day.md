# Listen: Good Day Bad Day

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Куда переезжает Майк и почему?
  <details> 
  <summary>ответ:</summary>
  Майк получает новую работу и переезжает из своего маленького городка в Бостон.
  </details>

* Какая проблема у Майка в Бостоне?
  <details> 
  <summary>ответ:</summary>
  Он не знакомится с новыми людьми (He doesn't meet many new people).
  </details>

* Кто приезжает к Майку в гости на выходные?
  <details> 
  <summary>ответ:</summary>
  Его сестра Керри (Kerry).
  </details>

* Куда Керри хочет пойти вместо автобусной остановки?
  <details> 
  <summary>ответ:</summary>
  Она хочет пойти к гадалке Рози (Rosie the fortune teller).
  </details>

* Что Рози говорит Майку о его дне?
  <details> 
  <summary>ответ:</summary>
  Она говорит: «Сегодня у тебя неудачный день» (It is not a good day for you today).
  </details>

* Какое предупреждение (warning) даёт Рози Майку?
  <details> 
  <summary>ответ:</summary>
  «Я вижу чёрную кошку, жёлтую собаку и белую птицу. Будь очень осторожен!» (I can see a black cat, a yellow dog, and a white bird. Be very careful!)
  </details>

* Верит ли Майк в гадалок?
  <details> 
  <summary>ответ:</summary>
  Нет, он не верит в гадалок (He doesn't believe in fortune tellers).
  </details>

* Что происходит с Майком у кафе «Чёрная кошка»?
  <details> 
  <summary>ответ:</summary>
  Мужчина моет окно кафе с ведром воды. Ведро падает, и вся вода выливается на Майка.
  </details>

* Какую собаку видит Майк после этого?
  <details> 
  <summary>ответ:</summary>
  Он видит большую жёлтую собаку (a big yellow dog), которая бежит прямо на него.
  </details>

* Что покупает Майк на улице, чтобы перекусить?
  <details> 
  <summary>ответ:</summary>
  Он покупает хот-дог (hot dog).
  </details>

* Почему Керри думает, что хот-дог — это и есть «жёлтая собака» из предсказания?
  <details> 
  <summary>ответ:</summary>
  Потому что слово «hot dog» содержит слово «dog» (собака).
  </details>

* Что разбивает Майк, столкнувшись с маленьким мальчиком?
  <details> 
  <summary>ответ:</summary>
  Он разбивает игрушку мальчика — маленькую жёлтую собачку (a little yellow dog).
  </details>

* Как зовут женщину, которая догоняет Майка на улице?
  <details> 
  <summary>ответ:</summary>
  Её зовут Салли (Sally). Она владелица кафе «Чёрная кошка».
  </details>

* Куда Майк приглашает Салли?
  <details> 
  <summary>ответ:</summary>
  Он приглашает её в кино (go out to a movie this evening).
  </details>

* Какая фамилия у Салли, и почему Керри считает это плохим знаком?
  <details> 
  <summary>ответ:</summary>
  Её фамилия Суон (Swan) — «лебедь». Лебедь — это белая птица, а это третья часть предсказания гадалки.
  </details>

* Почему Майк не волнуется из-за фамилии Салли?
  <details> 
  <summary>ответ:</summary>
  Он кладёт свой хот-дог на землю, и чайка (seagull) — белая птица — улетает с ним. Теперь предсказание исполнилось, и он может идти в кино с Салли.
  </details>

* Что было написано в записке от Рози для Керри?
  <details> 
  <summary>ответ:</summary>
  «Сегодня для тебя УДАЧНЫЙ день. Твой брат встречает нового друга. По картам я вижу любовь для них!» (It is a GOOD day for you today. Your brother meets a new friend. In the cards I can see love for them!)
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Good_Day_Bad_Day/Good_Day_Bad_Day.vtt";
        const audio = "/listen/A1/Starter/Good_Day_Bad_Day/Good_Day_Bad_Day.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>
