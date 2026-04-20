# Listen: Pirates!
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут главного героя и чем он зарабатывает на каникулах?
  <details> 
  <summary>ответ:</summary>
  Его зовут Кит Чиппенс (Kit Chippans). Он зарабатывает тем, что фотографирует туристов в гавани.
  </details>

* Почему Кит хотел заработать больше денег?
  <details> 
  <summary>ответ:</summary>
  Он хотел купить новую камеру (a new camera).
  </details>

* Как зовут девочку, которая получила работу на яхте «Summer Cloud»?
  <details> 
  <summary>ответ:</summary>
  Анна Ли (Anna Lee). Она должна была готовить обед и убирать каюты.
  </details>

* Кто были клиентами Боба Чепмена на яхте?
  <details> 
  <summary>ответ:</summary>
  Знаменитые кинозвёзды Чарльз Форд (Chas Ford) и Мария Чилини (Maria Chilini).
  </details>

* Как представилась Кита женщина на чёрной моторной лодке и что она попросила его сделать?
  <details> 
  <summary>ответ:</summary>
  Она представилась Джейд (Jade) и сказала, что работает на новый журнал «Harbor Life». Она попросила Кита добыть информацию и фотографии клиентов Боба Чепмена.
  </details>

* Какая деталь выдала Анне, что на яхте плывёт именно Мария Чилини?
  <details> 
  <summary>ответ:</summary>
  Боб Чепмен сказал, что его клиентка любит белые цветы (white flowers), а Анна знала из журналов, что Мария Чилини всегда держит в комнате белые цветы.
  </details>

* Что сделали Джейд и Томми с Китом, когда он пришёл к ним на лодку?
  <details> 
  <summary>ответ:</summary>
  Они дали ему напиток с неприятным вкусом (вероятно, снотворное), и когда Кит очнулся, он был уже в море на их лодке.
  </details>

* Кем на самом деле оказались Джейд и Томми?
  <details> 
  <summary>ответ:</summary>
  Они оказались пиратами (pirates), которые грабят яхты с богатыми и знаменитыми клиентами.
  </details>

* Что сделала Мария Чилини с пистолетом Томми?
  <details> 
  <summary>ответ:</summary>
  Она сказала, что пистолеты опасны и принадлежат только фильмам, и выбросила его в море.
  </details>

* Почему яхта не могла завести двигатель и вызвать помощь по радио?
  <details> 
  <summary>ответ:</summary>
  Томми выбросил ключ от двигателя (key) в море и разбил радио (radio).
  </details>

* Кто спас яхту во время шторма?
  <details> 
  <summary>ответ:</summary>
  Анна, Кит и Мария с Чарльзом спустили главный парус, а затем Анна управляла румпелем (tiller) по указаниям Боба.
  </details>

* Что Кит показал полицейским, чтобы доказать, что он не пират?
  <details> 
  <summary>ответ:</summary>
  Он показал фотографии, которые сделал на яхте: Томми снимает кольца Марии Чилини и саму Джейд.
  </details>

* Что Чарльз Форд предложил Киту на острове?
  <details> 
  <summary>ответ:</summary>
  Он предложил Киту поработать с оператором (cameraman) съёмочной группы, чтобы учиться, и возможно, сняться в фильме.
  </details>

* Кто полетел в полицейском вертолёте?
  <details> 
  <summary>ответ:</summary>
  Томми Морито (Tommy Morito), пират, которого искали полицейские последние шесть месяцев.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Pirates/Pirates.vtt";
        const audio = "/listen/A1/Beginner/Pirates/Pirates.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>