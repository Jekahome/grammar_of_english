# Listen: African Safari

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такие Адам и Лили и куда они прилетают?
  <details> 
  <summary>ответ:</summary>
  Адам и Лили прилетают на маленький аэродром в Масаи-Мара (Maasai Mara) в Кении (Kenya) на сафари.
  </details>

* Кто такой Джозеф и как он связан с Адамом?
  <details> 
  <summary>ответ:</summary>
  Джозеф — водитель джипа в заповеднике. Он был студентом Адама в Найроби (Nairobi).
  </details>

* Кто ещё находится в джипе, кроме Адама, Лили и Джозефа?
  <details> 
  <summary>ответ:</summary>
  Трое американцев: Энн (Anne), Джефф (Jeff) и его сын Том (Tom).
  </details>

* Что Лили рассказывает в голосовом сообщении своей подруге Зои?
  <details> 
  <summary>ответ:</summary>
  Она рассказывает, что сегодня утром лев (lion) съел зебру (zebra) прямо перед их джипом, и что завтра они собираются встать в 5 утра, чтобы увидеть слонов.
  </details>

* Кто такие «Большая пятёрка» (The Big Five)?
  <details> 
  <summary>ответ:</summary>
  Это пять больших и сильных животных: львы, леопарды, слоны, буйволы и носороги (lions, leopards, elephants, buffaloes, rhinoceroses).
  </details>

* Почему некоторые люди охотятся на носорогов (rhinos)?
  <details> 
  <summary>ответ:</summary>
  Из-за их рогов (horns). В некоторых странах за рог носорога дают много денег.
  </details>

* Где живёт слон Шукуру (Shukuru) и как люди могут ей помочь?
  <details> 
  <summary>ответ:</summary>
  Она живёт в приюте для слонов Шелдрик (Sheldrick Elephant Orphanage) около Найроби. Посетители могут её «усыновить» (adopt her).
  </details>

* Кто такой Самсон (Samson) и почему его история важна?
  <details> 
  <summary>ответ:</summary>
  Самсон — первый слон-сирота (orphan) в приюте Дэвида Шелдрика. Он был найден в 1954 году в заповеднике Цаво (Tsavo Game Reserve).
  </details>

* Что странного замечают Адам и Лили в поведении Энн?
  <details> 
  <summary>ответ:</summary>
  Энн не пришла на завтрак, а потом они находят, что её вещей нет в номере. Она исчезла.
  </details>

* Кем на самом деле оказывается Энн и как её называют полицейские?
  <details> 
  <summary>ответ:</summary>
  Её настоящее имя — Рут Стрит (Ruth Street). Полицейские забирают её.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/African_Safari/African_Safari.vtt";
        const audio = "/listen/A1/Beginner/African_Safari/African_Safari.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>