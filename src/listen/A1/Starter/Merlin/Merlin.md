# Listen: Merlin

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где живёт юный Мерлин и с кем?
  <details> 
  <summary>ответ:</summary>
  Он живёт в замке в Уэльсе (Wales) со своей матерью — принцессой Адан (Princess Adhan).
  </details>

* Кто единственный друг Мерлина?
  <details> 
  <summary>ответ:</summary>
  Жаба (a toad).
  </details>

* Как зовут двух мальчиков, которые дразнят Мерлина, и кто из них сын волшебницы?
  <details> 
  <summary>ответ:</summary>
  Их зовут Морфран (Morfran) и Арвел (Arwel). Морфран — сын волшебницы Керидвен (Ceridwen).
  </details>

* Что отец Мерлина советует ему во сне?
  <details> 
  <summary>ответ:</summary>
  Он советует: «Когда они тебя дразнят, уходи. Ищи самый большой дуб в лесу. Возле него есть что-то важное».
  </details>

* Что варит Морфран в котле и для чего?
  <details> 
  <summary>ответ:</summary>
  Он варит зелье (potion), которое даёт магические силы первому, кто его выпьет. Керидвен хочет, чтобы эти силы получил Морфран.
  </details>

* Как Мерлин случайно пробует зелье?
  <details> 
  <summary>ответ:</summary>
  Он выпрыгивает, чтобы отнять жабу у Морфрана, ударяет ногой котёл, зелье падает ему на руку, и он облизывает его.
  </details>

* Какую способность получает Мерлин после зелья?
  <details> 
  <summary>ответ:</summary>
  Он может превращаться в разных животных (change into different animals). Сначала он превращается в зайца (hare).
  </details>

* В кого превращается Керидвен, чтобы догнать Мерлина?
  <details> 
  <summary>ответ:</summary>
  Сначала в большую собаку (big dog), потом в выдру (otter), потом в орла (eagle).
  </details>

* Кто убивает Керидвен и как?
  <details> 
  <summary>ответ:</summary>
  Охотник (hunter) стреляет в неё из лука, когда она в облике орла. Стрела попадает в неё.
  </details>

* Кто такой король Вортигерн и чем больна его новая жена Ронвен?
  <details> 
  <summary>ответ:</summary>
  Вортигерн — король. Его жена Ронвен больна (she is ill). Морфран вылечивает её своим зельем и становится королевским магом.
  </details>

* Почему стены нового замка Вортигерна всё время падают?
  <details> 
  <summary>ответ:</summary>
  Потому что под холмом сражаются два дракона — красный и белый (a red dragon and a white dragon).
  </details>

* Что происходит с Морфраном в конце?
  <details> 
  <summary>ответ:</summary>
  Драконы дышат на него огнём и убивают его (breathe fire on Morfran and kill him).
  </details>

* Какое будущее предсказывает Мерлин королю Вортигерну?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Ты умрёшь без детей. После этого наступят тёмные годы войны. А затем я увижу меч с магическим светом, короля с прекрасным замком и его красивую жену. Я буду магом того короля».
  </details>

* Что Мерлин делает в конце истории?
  <details> 
  <summary>ответ:</summary>
  Он снова превращается в зайца и убегает в лес.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Merlin/Merlin.vtt";
        const audio = "/listen/A1/Starter/Merlin/Merlin.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>