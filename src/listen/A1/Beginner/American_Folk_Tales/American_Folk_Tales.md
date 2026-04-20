# Listen: American Folk Tales
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

## The Legend of Johnny Appleseed

* Как звали Джонни Эпплсида на самом деле и где он родился?
  <details> 
  <summary>ответ:</summary>
  Его настоящее имя было Джон Чепмен (John Chapman). Он родился недалеко от Бостона в 1775 году.
  </details>

* Какое видение (vision) изменило его жизнь?
  <details> 
  <summary>ответ:</summary>
  Ему явился ангел (angel) и велел идти сажать яблочные семена по всей Америке.
  </details>

* Что Джонни носил на голове вместо шляпы?
  <details> 
  <summary>ответ:</summary>
  Кастрюлю (saucepan).
  </details>

* Как Джонни создал первую библиотеку на границе (frontier)?
  <details> 
  <summary>ответ:</summary>
  Он раздавал страницы из своих книг семьям поселенцев, а потом забирал их обратно через несколько месяцев.
  </details>

* Как Джонни спас жизнь поселенцам, когда индейцы планировали нападение?
  <details> 
  <summary>ответ:</summary>
  Он услышал план вождя, добежал до каждого дома и предупредил всех, чтобы они спрятались в лесу.
  </details>

* Почему Джонни не ел мяса?
  <details> 
  <summary>ответ:</summary>
  Он не хотел убивать животных (He didn't want to kill animals).
  </details>

## Pecos Bill

* Как Пекос Билл оказался в пещере с койотами (coyotes)?
  <details> 
  <summary>ответ:</summary>
  Он выпал из повозки (covered wagon), когда его семья переселялась на запад, и его не заметили.
  </details>

* Почему Билл думал, что он койот?
  <details> 
  <summary>ответ:</summary>
  Он вырос среди койотов и забыл о своей человеческой семье.
  </details>

* Как Билл понял, что он человек?
  <details> 
  <summary>ответ:</summary>
  Ковбой (cowboy) спросил его: «Где твой хвост?» (Where's your tail?). Билл посмотрел на своё отражение в реке Пекос и не увидел хвоста.
  </details>

* Какое прозвище Билл дал дикому чёрному коню?
  <details> 
  <summary>ответ:</summary>
  Баккинг Бронко (Bucking Bronco).
  </details>

* Кем стал Пекос Билл в конце истории?
  <details> 
  <summary>ответ:</summary>
  Королём ковбоев Техаса (the king of the cowboys of Texas) и женился на Сью (Sue).

## The Tale of Brer Rabbit and the Tar Baby

* Кто такой Братец Лис (Brer Fox) и почему он злился на Братца Кролика?
  <details> 
  <summary>ответ:</summary>
  Братец Лис был лисой. Он злился, потому что Братец Кролик всех обманывал (tricked everyone).
  </details>

* Из чего Братец Лис сделал Смоляное Чучелко (Tar Baby)?
  <details> 
  <summary>ответ:</summary>
  Из дёгтя (tar), старой соломенной шляпы (old straw hat), двух пуговиц и расчёски (comb).
  </details>

* Почему Братец Кролик ударил Смоляное Чучелко?
  <details> 
  <summary>ответ:</summary>
  Оно не отвечало на его приветствия, и он рассердился.
  </details>

* Что случилось, когда Братец Кролик ударил и пнул чучело?
  <details> 
  <summary>ответ:</summary>
  Его лапы прилипли к смоле, и он не мог двигаться.
  </details>

* Куда Братец Кролик попросил Братца Лиса его НЕ бросать?
  <details> 
  <summary>ответ:</summary>
  В терновый куст (Briar Patch).
  </details>

* Почему Братец Кролик хотел, чтобы его бросили именно туда?
  <details> 
  <summary>ответ:</summary>
  Терновый куст содрал бы с него смолу, и он смог бы убежать.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const audio = "/listen/A1/Beginner/American_Folk_Tales/American_Folk_Tales.opus";
        const subtitles = "/listen/A1/Beginner/American_Folk_Tales/American_Folk_Tales.vtt";

        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>