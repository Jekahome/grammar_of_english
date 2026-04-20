# Listen: Dangerous Journey

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где находятся мужчины и чем они занимаются?
  <details> 
  <summary>ответ:</summary>
  Они в лесу (forest), в сотнях километров от базы. Они ищут железо и другие металлы (looking for iron and other metals).
  </details>

* Кто такой Леон и кто такой Джо?
  <details> 
  <summary>ответ:</summary>
  Леон — начальник (the boss). Джо — молодой, крупный, рыжий, умный, хочет быть начальником.
  </details>

* Почему Леон злится на Джо в начале рассказа?
  <details> 
  <summary>ответ:</summary>
  Джо и Педро уехали на два дня и вернулись поздно. Джо говорит, что они охотились (hunting), а это не их работа.
  </details>

* Что случается с грузовиком на грязной дороге?
  <details> 
  <summary>ответ:</summary>
  Грузовик застревает в грязи (the truck stopped, wheels turning in the mud).
  </details>

* Что происходит с Леоном, когда грузовик выезжает из грязи?
  <details> 
  <summary>ответ:</summary>
  Большая ветка (a large branch) вылетает из-под колеса, ударяет Леона в руку, и он падает в грязь.
  </details>

* Что случилось с мостом через реку Сандано?
  <details> 
  <summary>ответ:</summary>
  Мост сломан (the bridge is broken).
  </details>

* В чём состоит план Джо, чтобы переправиться через реку?
  <details> 
  <summary>ответ:</summary>
  Использовать резиновую лодку (rubber boat), привязать к ней верёвку (rope) и переправиться на другой берег.
  </details>

* Что происходит, когда Джо и Леон находятся в лодке на середине реки?
  <details> 
  <summary>ответ:</summary>
  Дерево с ветками (a tree with branches) плывёт по реке и ударяет лодку. Джо хватается за верёвку, но лодка отплывает.
  </details>

* Как Джо и Леон спасаются?
  <details> 
  <summary>ответ:</summary>
  Они добираются до скалы (rock) посередине реки и забираются на неё. Затем Джо спасает Леона, когда тот прыгает.
  </details>

* Кто вызывает помощь по радио?
  <details> 
  <summary>ответ:</summary>
  Педро забирается на холм и вызывает базу (base). Филипп отвечает и отправляет вертолёт (helicopter).
  </details>

* Что Леон говорит, когда его спрашивают, хочет ли он воды?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Нет, не воду. Я не хочу видеть воду ещё долгое время!» (I don't want to see water again — not for a long time!)
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Dangerous_Journey/Dangerous_Journey.vtt";
        const audio = "/listen/A1/Beginner/Dangerous_Journey/Dangerous_Journey.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>