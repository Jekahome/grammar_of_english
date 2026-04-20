# Listen: Pollyanna
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такая Поллианна и почему она приезжает жить к тёте Полли?
  <details> 
  <summary>ответ:</summary>
  Поллианна — одиннадцатилетняя девочка. Её отец умер, и она осталась без родителей, поэтому её отправляют к тёте Полли Харрингтон, её единственной родственнице.
  </details>

* В какой комнате тётя Полли велит приготовить комнату для Поллианны и почему это странно?
  <details> 
  <summary>ответ:</summary>
  Тётя Полли велит приготовить маленькую заднюю комнату на чердаке (little back attic), хотя в доме много свободных красивых комнат.
  </details>

* В чём заключается «игра в радость» (the glad game), которую придумал отец Поллианны?
  <details> 
  <summary>ответ:</summary>
  Нужно всегда находить в любой ситуации что-то хорошее и радоваться этому (always find the good in everything and be glad about it).
  </details>

* Кто такой Джимми Бин (Jimmy Bean) и что он просит у Поллианны?
  <details> 
  <summary>ответ:</summary>
  Джимми Бин — мальчик из приюта для сирот (Orphans' Home). Он хочет найти настоящий дом с настоящими людьми (a real home with real folks).
  </details>

* Что происходит с Джоном Пендлтоном (John Pendleton) и как Поллианна ему помогает?
  <details> 
  <summary>ответ:</summary>
  Он падает со скал и ломает ногу (broke his leg). Поллианна бежит к нему в дом, звонит доктору Чилтону и ждёт его.
  </details>

* Кого на самом деле любил Джон Пендлтон много лет назад?
  <details> 
  <summary>ответ:</summary>
  Он любил мать Поллианны (Дженни), а не тётю Полли.
  </details>

* Как Поллианна попадает под машину и что с ней случается?
  <details> 
  <summary>ответ:</summary>
  Она переходит дорогу и не смотрит по сторонам. Машина сбивает её, она сильно ударяется головой и не может двигать ногами.
  </details>

* Что доктор Мид (Dr Mead) говорит о Поллианне после осмотра?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Она никогда больше не будет ходить» (she's never going to walk again).
  </details>

* Как Джимми Бин помогает доктору Чилтону (Dr Chilton) попасть в дом тёти Полли?
  <details> 
  <summary>ответ:</summary>
  Он слышит разговор доктора Чилтона и Джона Пендлтона через открытое окно, затем идёт к тёте Полли и передаёт ей просьбу.
  </details>

* Кто на ком женится в конце книги?
  <details> 
  <summary>ответ:</summary>
  Тётя Полли выходит замуж за доктора Чилтона (Tom Chilton). Свадьба проходит в комнате Поллианны.
  </details>

* Чем заканчивается история для Поллианны?
  <details> 
  <summary>ответ:</summary>
  Она начинает ходить (starting to walk). Сначала она делает шаг от кровати к окну, потом планирует дойти до двери.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Pollyanna/Pollyanna.vtt";
        const audio = "/listen/A1/Beginner/Pollyanna/Pollyanna.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>