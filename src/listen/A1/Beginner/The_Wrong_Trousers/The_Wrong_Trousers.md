# Listen: The Wrong Trousers
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такие Уоллес (Wallace) и Громит (Gromit) и где они живут?
  <details> 
  <summary>ответ:</summary>
  Уоллес — мужчина, Громит — его собака. Они живут в маленьком доме на Уэст-Уоллаби-стрит, 62 (62 West Wallaby Street).
  </details>

* Какой день отмечает Громит и сколько открыток он получает?
  <details> 
  <summary>ответ:</summary>
  Громит празднует день рождения (birthday). Он получает только одну открытку (only one birthday card).
  </details>

* Какие две вещи Громит получает в подарок от Уоллеса?
  <details> 
  <summary>ответ:</summary>
  Красный ошейник с поводком (red dog collar and lead) и Техно-штаны (Techno-trousers) — зелёные и чёрные штаны с синими кнопками и красными рычагами.
  </details>

* Кто снимает комнату в доме Уоллеса и Громита?
  <details> 
  <summary>ответ:</summary>
  Пингвин (a penguin). Он селится в комнате Громита.
  </details>

* Что происходит, когда Уоллес утром падает в Техно-штаны?
  <details> 
  <summary>ответ:</summary>
  Штаны начинают ходить сами по себе, и Уоллес не может их остановить, потому что пингвин забрал пульт управления (control panel).
  </details>

* Что Громит обнаруживает в комнате пингвина?
  <details> 
  <summary>ответ:</summary>
  Он находит план музея (picture of the museum) с отмеченной комнатой, где находится большой голубой бриллиант (big blue diamond).
  </details>

* Как пингвин пытается украсть бриллиант?
  <details> 
  <summary>ответ:</summary>
  Он использует Техно-штаны и красный шлем (red helmet) Уоллеса, чтобы добраться до бриллианта. Из шлема выдвигается стальной коготь (steel machine claw), который хватает бриллиант.
  </details>

* Кто останавливает пингвина и спасает Уоллеса?
  <details> 
  <summary>ответ:</summary>
  Громит (Gromit) останавливает пингвина и спасает Уоллеса.
  </details>

* Что случается с пингвином в конце?
  <details> 
  <summary>ответ:</summary>
  Громит ловит пингвина в бутылку из-под молока (milk bottle), а бриллиант падает ему в другую руку. Пингвина отправляют в тюрьму.
  </details>

* Куда уходят Техно-штаны в конце истории?
  <details> 
  <summary>ответ:</summary>
  Штаны встают сами по себе и уходят в ночь (walked off into the night).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Wrong_Trousers/The_Wrong_Trousers.vtt";
        const audio = "/listen/A1/Beginner/The_Wrong_Trousers/The_Wrong_Trousers.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>