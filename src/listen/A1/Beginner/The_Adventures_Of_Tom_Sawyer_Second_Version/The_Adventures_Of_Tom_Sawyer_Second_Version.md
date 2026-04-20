# Listen: The Adventures Of Tom Sawyer - Second Version
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как тётя Полли наказала Тома в субботу и как он превратил наказание в удовольствие?
  <details> 
  <summary>ответ:</summary>
  Она заставила его красить забор (paint the fence). Том притворился, что это интересное занятие, и другие мальчики сами захотели красить, отдавая ему свои «сокровища».
  </details>

* Куда Том и Гек Финн пошли ночью с дохлой кошкой и что они там увидели?
  <details> 
  <summary>ответ:</summary>
  Они пошли на кладбище (graveyard). Они увидели, как Индеец Джо (Injun Joe) убил доктора Робинсона (Doctor Robinson) и подставил Маффа Поттера (Muff Potter).
  </details>

* Почему Том и Гек не рассказали никому правду об убийстве?
  <details> 
  <summary>ответ:</summary>
  Они боялись Индейца Джо (afraid of Injun Joe), потому что он опасный убийца.
  </details>

* Куда сбежали Том, Джо Гарпер и Гек и почему все в городе решили, что они утонули?
  <details> 
  <summary>ответ:</summary>
  Они сбежали на остров Джексона (Jackson's Island). Люди решили, что они утонули, потому что мальчики не вернулись домой.
  </details>

* Что произошло в церкви во время похоронной службы по трём мальчикам?
  <details> 
  <summary>ответ:</summary>
  Том, Джо и Гек вошли в церковь живыми и невредимыми, когда все плакали по ним.
  </details>

* Как Том спас Маффа Поттера от казни на суде?
  <details> 
  <summary>ответ:</summary>
  Он рассказал в суде правду о том, что убийцу доктора — Индеец Джо.
  </details>

* Где Том и Гек нашли клад (treasure) и сколько там было денег?
  <details> 
  <summary>ответ:</summary>
  Они нашли клад в пещере Макдугала (McDougal's Cave) под крестом (under the cross). Там было 12 000 долларов.
  </details>

* Кто заперся в пещере и умер там?
  <details> 
  <summary>ответ:</summary>
  Индеец Джо (Injun Joe). Вход в пещеру заколотили досками, и он не смог выбраться.
  </details>

* Как звали девочку, в которую влюбился Том?
  <details> 
  <summary>ответ:</summary>
  Её звали Бекки Тэтчер (Becky Thatcher).
  </details>

* Что случилось с Томом и Бекки в пещере?
  <details> 
  <summary>ответ:</summary>
  Они заблудились (were lost) и провели в пещере три дня без еды.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Adventures_Of_Tom_Sawyer_Second_Version/The_Adventures_Of_Tom_Sawyer_Second_Version.vtt";
        const audio = "/listen/A1/Beginner/The_Adventures_Of_Tom_Sawyer_Second_Version/The_Adventures_Of_Tom_Sawyer_Second_Version.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>