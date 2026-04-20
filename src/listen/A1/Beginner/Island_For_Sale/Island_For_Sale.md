# Listen: Island For Sale
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как называется остров, где живёт Дункан, и что на нём находится?
  <details> 
  <summary>ответ:</summary>
  Остров называется Лана (Lana). На нём есть старый замок (castle), но нет домов, дорог и машин.
  </details>

* Кто такой Дункан МакТавиш и кто живёт с ним в замке?
  <details> 
  <summary>ответ:</summary>
  Дункан — молодой шотландец (young Scotsman). С ним живёт его собака Джок (Jock).
  </details>

* Почему Дункан хочет продать остров?
  <details> 
  <summary>ответ:</summary>
  Он должен 5000 фунтов компании за электричество (electricity company) и у него нет таких денег.
  </details>

* Кто такой Прыгающий Ларри (Leaping Larry) и зачем он приезжает на остров?
  <details> 
  <summary>ответ:</summary>
  Прыгающий Ларри — американская рок-звезда (American rock star). Он хочет купить остров для своей девушки Роксанны (Roxanne).
  </details>

* Почему Роксанна злится в замке?
  <details> 
  <summary>ответ:</summary>
  Нет света (no lights), нет горячей воды (no hot water), нет горячей еды (no hot food), а в комнате мышь (a mouse).
  </details>

* Что происходит в лодке, когда Джок видит кролика?
  <details> 
  <summary>ответ:</summary>
  Джок прыгает в море за кроликом, Бобо (собака Роксанны) прыгает за ним, Роксанна падает в воду, потому что лодка качается.
  </details>

* Почему Ларри решает не покупать остров?
  <details> 
  <summary>ответ:</summary>
  Роксанна злится на него, говорит, что он её не любит, и требует отвезти её обратно в Калифорнию.
  </details>

* Кого Дункан встречает на острове после отъезда Ларри?
  <details> 
  <summary>ответ:</summary>
  Он встречает Джин Стюарт (Jean Stewart) — учительницу (teacher), которая приплыла на остров рисовать картины.
  </details>

* Какую идею предлагает Джин, чтобы заработать деньги?
  <details> 
  <summary>ответ:</summary>
  Она предлагает устроить на острове «каникулы для рисования» (Painting Holidays): люди приезжают, рисуют, а Дункан и Джин их учат.
  </details>

* Чем заканчивается история для Дункана и Джин?
  <details> 
  <summary>ответ:</summary>
  Они женятся (are married now), у них двое детей, и Дункан счастлив (he's a happy man).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Island_For_Sale/Island_For_Sale.vtt";
        const audio = "/listen/A1/Beginner/Island_For_Sale/Island_For_Sale.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>