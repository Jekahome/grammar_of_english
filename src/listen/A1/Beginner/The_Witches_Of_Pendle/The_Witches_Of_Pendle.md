# Listen: The Witches Of Pendle
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* От чьего лица ведётся рассказ и сколько лет рассказчице в начале истории?
  <details> 
  <summary>ответ:</summary>
  Рассказ ведётся от лица Джанет Дивайс (Jennet Device). В начале истории (когда она в тюрьме) она вспоминает прошлое, но основное действие начинается, когда ей 9 лет.
  </details>

* Что случилось с разносчиком Джоном Лоу (John Law), когда Ализон (Alizon) прокляла его?
  <details> 
  <summary>ответ:</summary>
  Он упал на дорогу, не мог двигаться, но остался жив. Его лицо стало белым, он был очень болен.
  </details>

* Кто такой Роджер Ноуэлл (Roger Nowell) и где он живёт?
  <details> 
  <summary>ответ:</summary>
  Роджер Ноуэлл — богатый и важный судья (judge) в Ланкашире. Он живёт в Риде (Read Hall).
  </details>

* Что рассказала Старая Демдайк (Old Demdike) о себе на допросе у Роджера Ноуэлла?
  <details> 
  <summary>ответ:</summary>
  Она рассказала, что встретила Дьявола (Devil) 20 лет назад в облике мальчика по имени Тибб (Tibb), а потом он приходил к ней в облике кошки и собаки. Она также сказала, что делает глиняные фигурки людей (clay pictures) и когда ломает их, человек умирает.
  </details>

* Что Джеймс (James) рассказал о своей собаке Денди (Dandy)?
  <details> 
  <summary>ответ:</summary>
  Он сказал, что Денди — это Дьявол (the Devil), и что Денди убил мистера Дакуорта (Mr Duckworth), потому что тот не дал Джеймсу рубашку (shirt).
  </details>

* Что мать Джанет рассказала об отце Джанет?
  <details> 
  <summary>ответ:</summary>
  Она сказала, что отец Джанет был богатым человеком (a rich man), но он не давал ей денег и назвал Джанет «ребёнком ведьмы» (a witch's child). После рождения Джанет он больше никогда к ней не приходил.
  </details>

* Кто такой судья Бромли (Judge Bromley) и где проходил суд над ведьмами Пендла?
  <details> 
  <summary>ответ:</summary>
  Судья Бромли — важный судья из Лондона. Суд проходил в замке Ланкастер (Lancaster Castle) 18 августа 1612 года.
  </details>

* Что случилось с матерью, братом и сестрой Джанет после суда?
  <details> 
  <summary>ответ:</summary>
  Их повесили (hanged) перед замком Ланкастер 20 августа 1612 года.
  </details>

* Почему Джанет оказалась в тюрьме Ланкастера в 1633 году?
  <details> 
  <summary>ответ:</summary>
  Её обвинили в колдовстве из-за её фамилии Дивайс (Device). Жители деревни боялись и ненавидели её, потому что она из семьи ведьм, хотя сама она не была ведьмой.
  </details>

* Кто такой Эдмунд Робинсон (Edmund Robinson) и какую роль он сыграл в истории?
  <details> 
  <summary>ответ:</summary>
  Эдмунд Робинсон — 10-летний мальчик, который лгал о Джанет и других женщинах, говоря, что видел их на шабаше ведьм (witches' meeting). Позже в Лондоне он сказал правду, что боялся отца и хотел, чтобы отец любил его.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Witches_Of_Pendle/The_Witches_Of_Pendle.vtt";
        const audio = "/listen/A1/Beginner/The_Witches_Of_Pendle/The_Witches_Of_Pendle.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>