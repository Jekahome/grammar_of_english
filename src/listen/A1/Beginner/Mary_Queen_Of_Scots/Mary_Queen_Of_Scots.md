# Listen: Mary Queen Of Scots
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто рассказывает эту историю и кому она предназначена?
  <details> 
  <summary>ответ:</summary>
  Историю рассказывает Бесс Кёрл (Bess Curle), служанка Марии. Она пишет для сына Марии — короля Якова (James).
  </details>

* Где находится Мария в начале книги и почему она там?
  <details> 
  <summary>ответ:</summary>
  Она находится в замке Фотерингей (Fotheringhay Castle) в Англии в тюрьме (prison). Королева Елизавета боится её и держит взаперти.
  </details>

* Кого Мария считает истинной королевой Англии?
  <details> 
  <summary>ответ:</summary>
  Многие католики говорят, что Мария, а не Елизавета, является истинной королевой Англии.
  </details>

* За кого Мария вышла замуж во Франции и что с ним случилось?
  <details> 
  <summary>ответ:</summary>
  Она вышла замуж за Франциска (Francis), сына короля Франции. Он умер в 16 лет в 1560 году.
  </details>

* Почему Мария не понравился Роберт Дадли (Robert Dudley), которого предлагала Елизавета?
  <details> 
  <summary>ответ:</summary>
  Елизавета и Дадли были очень близки, и его жена внезапно умерла (упала с лестницы). Мария не хотела выходить замуж за любовника Елизаветы.
  </details>

* Кто такой Генри Дарнли (Henry Darnley) и каким он был?
  <details> 
  <summary>ответ:</summary>
  Генри Дарнли — второй муж Марии, отец Якова. Он был красивым, но глупым, пил с друзьями, не работал и не интересовался государственными делами.
  </details>

* Кто такой Давид Риччо (David Riccio) и как он умер?
  <details> 
  <summary>ответ:</summary>
  Риччо — итальянец, секретарь и друг Марии. Дарнли и лорд Рутвен (Ruthven) убили его прямо на глазах у Марии, когда она была беременна.
  </details>

* Как умер Генри Дарнли?
  <details> 
  <summary>ответ:</summary>
  Дом, где он спал (Kirk o'Field), взорвался. Его тело нашли в саду в ночной одежде без крови. Мария утверждает, что не убивала его.
  </details>

* Кто такой Джеймс Ботвелл (Earl of Bothwell) и почему Мария вышла за него замуж?
  <details> 
  <summary>ответ:</summary>
  Ботвелл — сильный, умный и храбрый человек. Мария похитила его? (или он похитил её?) и вышла замуж, потому что ей нужен был сильный мужчина, чтобы править страной.
  </details>

* Почему шотландские лорды свергли Марию и посадили в тюрьму?
  <details> 
  <summary>ответ:</summary>
  Они считали, что Мария и Ботвелл убили Дарнли. У них был флаг с изображением мёртвого Дарнли и надписью «Найди моих убийц, о Боже».
  </details>

* Сколько лет Мария провела в английских тюрьмах?
  <details> 
  <summary>ответ:</summary>
  Двадцать лет (twenty years). Она попала в Англию в 25 лет, а умерла в 45.
  </details>

* Как умерла Мария, королева Шотландцев?
  <details> 
  <summary>ответ:</summary>
  Ей отрубили голову топором (axe) 8 февраля 1587 года в замке Фотерингей. Она была в красной нижней юбке (red petticoat) и чёрном платье с белой вуалью (white veil).
  </details>

* Что сделала маленькая собачка Марии после её смерти?
  <details> 
  <summary>ответ:</summary>
  Собачка вышла из-под окровавленного платья и медленно, печально пошла к голове Марии.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Mary_Queen_Of_Scots/Mary_Queen_Of_Scots.vtt";
        const audio = "/listen/A1/Beginner/Mary_Queen_Of_Scots/Mary_Queen_Of_Scots.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>