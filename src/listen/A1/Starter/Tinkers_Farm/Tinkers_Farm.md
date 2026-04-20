# Listen: Tinker's Farm

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как называется корабль, на котором Сэм и Дженни Тинкер прибывают в Нью-Йорк?
  <details> 
  <summary>ответ:</summary>
  Корабль называется «Красная Роза» (Red Rose).
  </details>

* Кто такой Джек Крейн и сколько пальцев у него на правой руке?
  <details> 
  <summary>ответ:</summary>
  Джек Крейн — фермер (farmer). У него только три пальца на правой руке.
  </details>

* Как зовут индейскую девушку, которая работает в доме Джека Крейна?
  <details> 
  <summary>ответ:</summary>
  Её зовут Голубое Небо (Blue Sky).
  </details>

* Сколько километров ехать от Нью-Йорка до фермы Джека Крейна?
  <details> 
  <summary>ответ:</summary>
  Восемьдесят километров (eighty kilometres).
  </details>

* Сколько свободных дней в неделю у Сэма и Дженни?
  <details> 
  <summary>ответ:</summary>
  Только один день — воскресенье (Sunday).
  </details>

* Как зовут вождя индейского племени?
  <details> 
  <summary>ответ:</summary>
  Серебряное Облако (Silver Cloud).
  </details>

* Почему Сэм ссорится с Джеком Крейном?
  <details> 
  <summary>ответ:</summary>
  Джек Крейн приказывает Сэму работать в воскресенье, но Сэм отказывается.
  </details>

* Кого Дженни спасает из реки?
  <details> 
  <summary>ответ:</summary>
  Она спасает маленького мальчика — сына вождя (the Chief's son).
  </details>

* Как вождь благодарит Дженни за спасение сына?
  <details> 
  <summary>ответ:</summary>
  Индейцы дарят Сэму и Дженни собственную ферму (their own farm) под названием «Ферма Тинкеров» (Tinkers Farm).
  </details>

* О чём Дженни говорит отцу в конце истории?
  <details> 
  <summary>ответ:</summary>
  Она говорит: «Теперь мы действительно можем начать новую жизнь» (Now we can really start a new life).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Tinkers_Farm/Tinkers_Farm.vtt";
        const audio = "/listen/A1/Starter/Tinkers_Farm/Tinkers_Farm.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>