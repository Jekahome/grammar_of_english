# Listen: Sherlock Holmes. Two Plays
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста (The Red-Headed League)</summary>

* Кто такой Джабез Уилсон (Jabez Wilson) и где он работает?
  <details> 
  <summary>ответ:</summary>
  Джабез Уилсон — владелец небольшого магазина (shopkeeper). У него рыжие волосы.
  </details>

* Что Винсент Сполдинг (Vincent Spaulding) находит в газете и почему это интересно для Уилсона?
  <details> 
  <summary>ответ:</summary>
  Он находит объявление (advertisement) о Лиге рыжих (Red-Headed League), которая платит 4 фунта в неделю рыжим мужчинам за лёгкую работу.
  </details>

* Какую работу Джабез Уилсон выполняет в офисе Лиги рыжих?
  <details> 
  <summary>ответ:</summary>
  Он переписывает текст из большой книги (copy from a large book) с 10 утра до 2 часов дня.
  </details>

* Что Шерлок Холмс замечает в поведении Винсента Сполдинга и его брюках?
  <details> 
  <summary>ответ:</summary>
  Сполдинг согласен работать за половинную плату (half wages), что подозрительно. Его брюки грязные (dirty), потому что он копает туннель.
  </details>

* Кем на самом деле оказывается Винсент Сполдинг?
  <details> 
  <summary>ответ:</summary>
  Это Джон Клей (John Clay) — знаменитый вор и убийца (killer and thief).
  </details>

* Что Холмс обнаруживает за магазином Уилсона?
  <details> 
  <summary>ответ:</summary>
  Он обнаруживает банк (the First Bank), куда воры копали туннель, чтобы украсть золото.
  </details>
</details>

<details> 
<summary>Проверить понимание текста (The Three Students)</summary>

* Кто такой Хилтон Соумз (Hilton Soames) и что случилось с экзаменационными работами?
  <details> 
  <summary>ответ:</summary>
  Соумз — преподаватель колледжа (teacher at St Luke's College). Экзаменационные работы (examination papers) были сдвинуты с места, на столе найдены кусочки карандаша и грязь.
  </details>

* Кого подозревает Соумз в том, что кто-то мог видеть работы?
  <details> 
  <summary>ответ:</summary>
  Троих студентов: Гилкриста (Gilchrist), Даулата Раса (Daulat Ras) и Майлза Макларена (Miles McLaren).
  </details>

* Как Холмс понимает, что студент был высокого роста?
  <details> 
  <summary>ответ:</summary>
  Гилкрист — самый высокий из трёх студентов (the tallest of the three). Он мог заглянуть в окно снаружи.
  </details>

* Что Холмс находит на письменном столе и что это доказывает?
  <details> 
  <summary>ответ:</summary>
  Он находит царапину (cut). Это след от шипа беговой обуви (spike from running shoes), которую студент поставил на стол.
  </details>

* Кто такой Баннистер (Bannister) и почему он помог Гилкристу?
  <details> 
  <summary>ответ:</summary>
  Баннистер — слуга (servant) Соумза. Раньше он служил отцу Гилкриста, сэру Джабезу, и хотел помочь его сыну.
  </details>

* Что решает сделать Гилкрист в конце?
  <details> 
  <summary>ответ:</summary>
  Он решает не сдавать экзамен (not going to take the examination) и уехать в Южную Африку работать в полицию.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Sherlock_Holmes.Two_Plays/Sherlock_Holmes.Two_Plays.vtt";
        const audio = "/listen/A1/Beginner/Sherlock_Holmes.Two_Plays/Sherlock_Holmes.Two_Plays.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>