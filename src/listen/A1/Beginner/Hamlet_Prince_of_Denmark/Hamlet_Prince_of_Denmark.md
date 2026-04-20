# Listen: Hamlet, Prince of Denmark
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кого Горацио (Horatio) и стража видят на стенах замка Эльсинор?
  <details> 
  <summary>ответ:</summary>
  Они видят призрак (ghost), похожий на покойного короля Гамлета (King Hamlet).
  </details>

* Какую тайну призрак открывает Гамлету?
  <details> 
  <summary>ответ:</summary>
  Призрак говорит, что его убил брат Клавдий (Claudius), который влил яд (poison) в ухо спящему королю.
  </details>

* Что Гамлет решает сделать, чтобы проверить правдивость слов призрака?
  <details> 
  <summary>ответ:</summary>
  Он решает притвориться сумасшедшим (pretend to be mad) и поставить пьесу (play), которая повторяет историю убийства, чтобы посмотреть на реакцию Клавдия.
  </details>

* Кто такая Офелия (Ophelia) и как Гамлет к ней относится?
  <details> 
  <summary>ответ:</summary>
  Офелия — дочь Полония (Polonius), возлюбленная Гамлета. Гамлет любит её, но из-за своего притворного безумия он жесток с ней и велит ей уйти в монастырь (go away to a nunnery).
  </details>

* Как Гамлет случайно убивает Полония?
  <details> 
  <summary>ответ:</summary>
  В спальне королевы Гертруды (Gertrude) Гамлет слышит шум за занавеской (behind the curtain), думает, что это король Клавдий, и протыкает занавеску шпагой. За ней оказывается Полоний.
  </details>

* Что Клавдий приказывает сделать с Гамлетом после убийства Полония?
  <details> 
  <summary>ответ:</summary>
  Он отправляет Гамлета в Англию (send him to England) с письмом, в котором просит английского короля казнить Гамлета (execute Hamlet).
  </details>

* Как Гамлету удаётся избежать казни в Англии?
  <details> 
  <summary>ответ:</summary>
  Он находит письмо Клавдия, переписывает его, приказывая казнить Розенкранца и Гильденстерна (Rosencrantz and Guildenstern), и запечатывает обратно.
  </details>

* Как погибает Офелия?
  <details> 
  <summary>ответ:</summary>
  Она падает в реку (she slipped and fell into the river) и тонет (drowned). Возможно, это был несчастный случай, а возможно, самоубийство (suicide).
  </details>

* Какой план убийства Гамлета придумывают Клавдий и Лаэрт (Laertes)?
  <details> 
  <summary>ответ:</summary>
  Лаэрт вызывает Гамлета на поединок на рапирах (fencing match). Остриё его рапиры отравлено (poison on the tip of my sword), а на случай, если это не сработает, Клавдий приготовит отравленный напиток (poisoned drink).
  </details>

* Кто погибает в финальной сцене и от чего?
  <details> 
  <summary>ответ:</summary>
  Гертруда выпивает отравленный напиток и умирает. Лаэрт ранит Гамлета отравленной рапирой. В суматохе они меняются рапирами, и Гамлет ранит Лаэрта. Гамлет убивает Клавдия. Все четверо погибают.
  </details>

* Что Гамлет просит сделать Горацио перед смертью?
  <details> 
  <summary>ответ:</summary>
  Он просит Горацио остаться в живых и рассказать миру правдивую историю (tell the truth to the world after I am dead).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Hamlet_Prince_of_Denmark/Hamlet_Prince_of_Denmark.vtt";
        const audio = "/listen/A1/Beginner/Hamlet_Prince_of_Denmark/Hamlet_Prince_of_Denmark.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>