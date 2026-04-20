# Listen: Great Expectations
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где живёт Пип (Pip) и с кем?
  <details> 
  <summary>ответ:</summary>
  Пип живёт в болотистой местности (on the marshes) недалеко от реки Темзы. Он живёт со своей сестрой и её мужем Джо (Joe), который работает кузнецом (blacksmith).
  </details>

* Кого Пип встречает на кладбище и что он для него делает?
  <details> 
  <summary>ответ:</summary>
  Он встречает беглого каторжника (a prisoner). Пип приносит ему еду и напильник (file), чтобы тот мог снять цепи.
  </details>

* Кто такая мисс Хэвишем (Miss Havisham) и почему она носит старое свадебное платье?
  <details> 
  <summary>ответ:</summary>
  Мисс Хэвишем — богатая пожилая леди. Много лет назад её жених не пришёл на свадьбу, и с тех пор она остановила все часы и носит свадебное платье.
  </details>

* Кто такая Эстелла (Estella) и как она относится к Пипу?
  <details> 
  <summary>ответ:</summary>
  Эстелла — красивая молодая девушка, которую воспитывает мисс Хэвишем. Она гордая, холодная и часто говорит Пипу, что у неё нет сердца (no heart).
  </details>

* Кто такой мистер Джаггерс (Mr. Jaggers) и какую новость он приносит Пипу?
  <details> 
  <summary>ответ:</summary>
  Мистер Джаггерс — адвокат (lawyer) из Лондона. Он сообщает Пипу, что у него есть «большие надежды» (great expectations) — неизвестный благодетель даёт ему много денег, чтобы он стал джентльменом.
  </details>

* Кем на самом деле оказывается благодетель Пипа?
  <details> 
  <summary>ответ:</summary>
  Благодетель Пипа — Абель Мэгвич (Abel Magwitch), тот самый каторжник, которому Пип помог на болотах. Мэгвич разбогател в Австралии и захотел отблагодарить Пипа.
  </details>

* За кого выходит замуж Эстелла и почему Пип считает этот брак ужасным?
  <details> 
  <summary>ответ:</summary>
  Эстелла выходит замуж за Бентли Драммела (Bentley Drummel). Он богат и красив, но жесток и глуп (cruel and stupid).
  </details>

* Как погибает мисс Хэвишем?
  <details> 
  <summary>ответ:</summary>
  Её старое свадебное платье загорается от камина (touches the fire), и она получает тяжёлые ожоги (badly injured).
  </details>

* Что случается с Мэгвичем, когда он пытается сбежать из Англии?
  <details> 
  <summary>ответ:</summary>
  Его ловит полиция, он тяжело болеет в тюрьме и умирает.
  </details>

* Кто заботится о Пипе, когда он тяжело болеет в Лондоне?
  <details> 
  <summary>ответ:</summary>
  Джо (Joe) приходит к Пипу, платит его долги (pays the money) и забирает его домой.
  </details>

* На ком женится Джо после смерти сестры Пипа?
  <details> 
  <summary>ответ:</summary>
  Джо женится на Бидди (Biddy) — молодой женщине, которая помогала ухаживать за больной сестрой Пипа.
  </details>

* Чем заканчивается история Пипа и Эстеллы?
  <details> 
  <summary>ответ:</summary>
  Спустя 11 лет Пип возвращается в Англию. Он встречает Эстеллу в саду разрушенного поместья. У неё теперь есть сердце (she has a heart), её муж умер. Они уходят из сада вместе.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Great_Expectations/Great_Expectations.vtt";
        const audio = "/listen/A1/Beginner/Great_Expectations/Great_Expectations.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>