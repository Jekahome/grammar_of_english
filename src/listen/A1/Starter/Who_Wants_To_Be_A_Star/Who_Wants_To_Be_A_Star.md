# Listen: Who Wants To Be A Star

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Сколько лет Тине Дэниелс и почему её называют «Кудряшки» (Curls)?
  <details> 
  <summary>ответ:</summary>
  Ей тринадцать лет. Её называют «Кудряшки» из-за её красивых вьющихся волос (beautiful curly hair).
  </details>

* Почему мама Тины злится на неё за шоколадки?
  <details> 
  <summary>ответ:</summary>
  Она говорит, что Тина толстеет (getting fat), а толстая девочка не заработает много денег в Голливуде.
  </details>

* Куда и от кого Тина решает сбежать?
  <details> 
  <summary>ответ:</summary>
  Она решает сбежать к миссис Уайт (Mrs White), бабушке своей школьной подруги Мэри, в деревню Стоунчерч (Stonechurch).
  </details>

* Что Тина надевает, чтобы её не узнали на вокзале?
  <details> 
  <summary>ответ:</summary>
  Она надевает джинсы (jeans) и старый свитер (an old jumper).
  </details>

* Почему миссис Уайт не узнаёт Тину как звезду?
  <details> 
  <summary>ответ:</summary>
  У неё нет ни телевизора, ни радио (She does not have a television or a radio).
  </details>

* Что Тина говорит миссис Уайт о звонке маме?
  <details> 
  <summary>ответ:</summary>
  Она врёт, что мама сказала «да». На самом деле она не звонит маме, потому что злится на неё.
  </details>

* Какое животное крадёт курицу миссис Уайт?
  <details> 
  <summary>ответ:</summary>
  Большая коричневая лиса (a big brown fox).
  </summary>
  </details>

* Кто узнаёт Тину в деревне и приносит газету?
  <details> 
  <summary>ответ:</summary>
  Почтальон (postman). Он узнаёт в Тине «Кудряшки» и говорит, что она во всех газетах.
  </details>

* Какую идею предлагает миссис Уайт маме Тины?
  <details> 
  <summary>ответ:</summary>
  Она предлагает отправить Тину в школу на остров Гернси (island of Guernsey), где никто не знает, что она звезда.
  </details>

* Что Тина говорит подруге, которая читает журнал о звёздах?
  <details> 
  <summary>ответ:</summary>
  Она говорит: «Кто хочет быть звездой? Я — нет» (Who wants to be a star? I don't).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Who_Wants_To_Be_A_Star/Who_Wants_To_Be_A_Star.vtt";
        const audio = "/listen/A1/Starter/Who_Wants_To_Be_A_Star/Who_Wants_To_Be_A_Star.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>