# Listen: Police TV
  
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такие Дэн и Сью и где они работают?
  <details> 
  <summary>ответ:</summary>
  Они полицейские (police officers) в Лондоне.
  </details>

* Кого Дэн подозревает в кражах у магазинов и почему?
  <details> 
  <summary>ответ:</summary>
  Он подозревает бегуна-джоггера (jogger). Каждый день этот бегун пробегает мимо магазинов и иногда врезается в людей.
  </details>

* Что джоггер делает, когда врезается в пожилую женщину?
  <details> 
  <summary>ответ:</summary>
  Он извиняется, помогает ей встать и отдаёт сумку.
  </details>

* Что полицейские обнаруживают, когда проверяют джоггера Питера Джонса?
  <details> 
  <summary>ответ:</summary>
  У него нет при себе денег. Он говорит, что никогда не берёт деньги, когда бегает.
  </details>

* Какая идея приходит Дэну после просмотра видео с камеры наблюдения?
  <details> 
  <summary>ответ:</summary>
  Он хочет, чтобы Сью сходила в банк, сняла много денег, и они проследили, кто за ней последует.
  </details>

* Кто идёт за Сью, когда она выходит из банка с деньгами?
  <details> 
  <summary>ответ:</summary>
  Женщина с ребёнком (the woman with a baby) по имени Линда Уилкс (Linda Wilks).
  </details>

* Как Питер Джонс крадёт деньги у Сью?
  <details> 
  <summary>ответ:</summary>
  Он врезается в неё как бегун, она падает, а потом он видит полицейскую рацию в её кармане, хватает деньги и убегает.
  </details>

* Куда бежит Питер и как полиция его ловит?
  <details> 
  <summary>ответ:</summary>
  Он бежит к реке, садится в лодку, затем заходит в кафе (cafe). Дэн заходит спереди, а Джим сзади, и они берут его.
  </details>

* Что находит Дэн в доме у Линды?
  <details> 
  <summary>ответ:</summary>
  Он находит двести фунтов под кроватью (two hundred pounds under your bed) и кошелёк пожилой женщины (the old lady's purse).
  </details>

* Кем оказывается мужчина на фотографии у Линды?
  <details> 
  <summary>ответ:</summary>
  Это Питер Джонс — отец её ребёнка (the baby's father).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Police_TV/Police_TV.vtt";
        const audio = "/listen/A1/Starter/Police_TV/Police_TV.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>