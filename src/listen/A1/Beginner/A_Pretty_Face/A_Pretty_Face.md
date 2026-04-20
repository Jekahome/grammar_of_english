# Listen: A Pretty Face

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такая Зои и где она работает?
  <details> 
  <summary>ответ:</summary>
  Зои — семнадцатилетняя девушка. Она работает в книжном магазине (bookstore) в городке Ньюпорт.
  </details>

* Кто такой Майк Моррисон и кем он хочет стать?
  <details> 
  <summary>ответ:</summary>
  Майк — студент колледжа. Он хочет писать пьесы для театра и телевидения (to write plays for the theatre and for television).
  </details>

* Какую роль играет Зои в спектакле «Ромео и Джульетта» и почему Майк критикует её игру?
  <details> 
  <summary>ответ:</summary>
  Зои играет мать Джульетты (Juliet's mother). Майк пишет, что у неё красивое лицо и она хорошо говорит слова, но она — молодая девушка в костюме пожилой женщины, и зрители это видят.
  </details>

* Почему Зои злится на Майка?
  <details> 
  <summary>ответ:</summary>
  Потому что он написал критическую рецензию на её игру в газете «Newport Weekly News».
  </details>

* Какую идею придумывает Зои, чтобы отомстить Майку?
  <details> 
  <summary>ответ:</summary>
  Она придумывает притвориться (to pretend) редактором журнала «Yes!» и отправить Майка брать интервью у известного драматурга Тодда Марина (Todd Marin), который выгоняет репортёров из сплетничающих журналов.
  </details>

* Как зовут подругу Зои и где они встречаются?
  <details> 
  <summary>ответ:</summary>
  Подругу зовут Энни (Annie). Они встречаются в кафе «Newport Cafe».
  </details>

* Кем Зои представляется Майку в кафе?
  <details> 
  <summary>ответ:</summary>
  Она представляется Кейт Лоусон (Kate Lawson), редактором журнала «Yes!».
  </details>

* Где прячется Зои, пока Майк идёт к дому Тодда Марина?
  <details> 
  <summary>ответ:</summary>
  Она прячется за кустом (behind one of the bushes) перед домом.
  </details>

* Почему Тодд Марин не выгоняет Майка, а приглашает его войти?
  <details> 
  <summary>ответ:</summary>
  Потому что Майк говорит правду (tells the truth) — интервью для «Yes!», но признаёт, что это глупый журнал.
  </details>

* Что Майк и Тодд Марин делают в доме полтора часа?
  <details> 
  <summary>ответ:</summary>
  Они говорят о писательстве, о персонажах, о сюжете, и Майк рассказывает о своей пьесе.
  </details>

* Что Зои делает в конце, чтобы показать, что она хорошая актриса?
  <details> 
  <summary>ответ:</summary>
  Она снимает парик (wig) и очки (glasses) и признаётся, что никакой Кейт Лоусон не существует.
  </details>

* Что Майк обещает написать в газете о Зои?
  <details> 
  <summary>ответ:</summary>
  Он обещает написать, что она хорошая актриса (a good actress).
  </details>

* Чем заканчивается история?
  <details> 
  <summary>ответ:</summary>
  Майк и Зои идут вместе пить кофе, и Майк платит.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/A_Pretty_Face/A_Pretty_Face.vtt";
        const audio = "/listen/A1/Beginner/A_Pretty_Face/A_Pretty_Face.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>