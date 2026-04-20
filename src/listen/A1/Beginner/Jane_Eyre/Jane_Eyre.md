# Listen: Jane Eyre
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где жила Джейн Эйр после смерти родителей и как к ней относилась тётя?
  <details> 
  <summary>ответ:</summary>
  Джейн жила в Гейтсхед-холле (Gateshead Hall) со своей тётей миссис Рид (Mrs Reed) и её детьми. Тётя не любила Джейн, а кузены были с ней жестоки.
  </details>

* Куда миссис Рид отправляет Джейн и кто владелец этой школы?
  <details> 
  <summary>ответ:</summary>
  Она отправляет Джейн в школу Ловуд (Lowood School). Владелец школы — мистер Броклхерст (Mr Brocklehurst).
  </details>

* Почему мистер Броклхерст публично наказывает Джейн в школе?
  <details> 
  <summary>ответ:</summary>
  Он говорит, что Джейн — лгунья (liar), и заставляет её стоять на высоком стуле (high chair) два часа, запрещая всем с ней разговаривать.
  </details>

* Кто становится подругой Джейн в школе Ловуд?
  <details> 
  <summary>ответ:</summary>
  Мисс Темпл (Miss Temple) — старшая учительница (head teacher). Она добра к Джейн.
  </details>

* Куда Джейн устраивается работать после школы и кем?
  <details> 
  <summary>ответ:</summary>
  Она становится гувернанткой (governess) в Торнфилд-холле (Thornfield Hall) и учит маленькую девочку Адель (Adele).
  </details>

* Как зовут хозяина Торнфилд-холла и как Джейн впервые встречает его?
  <details> 
  <summary>ответ:</summary>
  Хозяина зовут Эдвард Рочестер (Edward Rochester). Джейн встречает его на дороге, когда его лошадь падает на льду, и он травмирует ногу.
  </details>

* Что происходит в Торнфилд-холле в ночь перед свадьбой Джейн и мистера Рочестера?
  <details> 
  <summary>ответ:</summary>
  В комнату Джейн входит высокая тяжёлая женщина с длинными чёрными волосами, рвёт её свадебную фату (wedding veil) на две части и смеётся.
  </details>

* Кто останавливает свадьбу Джейн и мистера Рочестера в церкви и почему?
  <details> 
  <summary>ответ:</summary>
  Юрист мистер Бриггс (Mr Briggs) и Ричард Мейсон (Richard Mason). Они объявляют, что у мистера Рочестера уже есть живая жена — Берта Мейсон (Bertha Mason), которая живёт в Торнфилде.
  </details>

* Куда убегает Джейн после того, как свадьба не состоялась?
  <details> 
  <summary>ответ:</summary>
  Она убегает из Торнфилда на автобусе (coach) и в конце концов оказывается в Муровом доме (Moor House), где живут брат и сёстры Риверс (St John, Diana and Mary Rivers).
  </details>

* Кем оказываются Диана, Мэри и Сент-Джон Риверс для Джейн?
  <details> 
  <summary>ответ:</summary>
  Они её двоюродные брат и сёстры (cousins). Их мать была сестрой отца Джейн.
  </details>

* Какое наследство получает Джейн и сколько она отдаёт кузенам?
  <details> 
  <summary>ответ:</summary>
  Она получает 20 000 фунтов от своего дяди Джона Эйра (John Eyre). Она отдаёт каждому из трёх кузенов по 5000 фунтов.
  </details>

* Что случилось с Торнфилд-холлом и с мистером Рочестером после ухода Джейн?
  <details> 
  <summary>ответ:</summary>
  Берта Мейсон подожгла дом (burnt the house) и прыгнула с крыши. Мистер Рочестер ослеп (blind) и потерял руку.
  </details>

* Где Джейн находит мистера Рочестера в конце истории?
  <details> 
  <summary>ответ:</summary>
  Она находит его в Ферндине (Ferndean) — старом доме в тридцати милях от Торнфилда.
  </details>

* Чем заканчивается история Джейн и мистера Рочестера?
  <details> 
  <summary>ответ:</summary>
  Они женятся. Со временем зрение мистера Рочестера немного восстанавливается, он видит лицо их первого ребёнка.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Jane_Eyre/Jane_Eyre.vtt";
        const audio = "/listen/A1/Beginner/Jane_Eyre/Jane_Eyre.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>