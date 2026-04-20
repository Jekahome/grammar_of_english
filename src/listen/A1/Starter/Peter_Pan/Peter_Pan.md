# Listen: Peter Pan (Barrie J.M.)

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут трёх детей Дарлингов и как их няню?
  <details> 
  <summary>ответ:</summary>
  Венди (Wendy), Джон (John) и Майкл (Michael). Их няню зовут Нана (Nana) — это большая собака породы ньюфаундленд.
  </details>

* Кого миссис Дарлинг видит за окном детской?
  <details> 
  <summary>ответ:</summary>
  Она видит маленького мальчика — Питера Пэна.
  </details>

* Что остаётся в детской после того, как Нана захлопывает окно?
  <details> 
  <summary>ответ:</summary>
  Тень мальчика (the boy's shadow).
  </details>

* Как Венди помогает Питеру прикрепить тень обратно?
  <details> 
  <summary>ответ:</summary>
  Она пришивает её (sew it on) с помощью швейной корзинки.
  </details>

* Кто такая Тинкербелл (Tinkerbell)?
  <details> 
  <summary>ответ:</summary>
  Это фея (fairy), подруга Питера. Она очень маленькая и красивая.
  </details>

* Куда Питер приглашает Венди, Джона и Майкла?
  <details> 
  <summary>ответ:</summary>
  Он приглашает их в Нетландию (Neverland) — страну, где живут Потерянные мальчики (Lost Boys).
  </details>

* Что нужно, чтобы научиться летать?
  <details> 
  <summary>ответ:</summary>
  Нужна фея и волшебная пыльца (fairy dust).
  </details>

* Кто такой капитан Крюк (Captain Hook) и что случилось с его рукой?
  <details> 
  <summary>ответ:</summary>
  Капитан Крюк — злой пират (very bad pirate). У него вместо одной руки — крюк (hook). Питер Пэн отрубил ему руку, и её съел крокодил.
  </details>

* Какой звук всегда слышит капитан Крюк и почему?
  <details> 
  <summary>ответ:</summary>
  Он слышит тик-так (tick-tock). Крокодил проглотил будильник (alarm clock), и он тикает у него в животе.
  </details>

* Как Тинкербелл пытается навредить Венди?
  <details> 
  <summary>ответ:</summary>
  Она говорит Потерянным мальчикам, что Венди — это птица, и велит застрелить её. Нибс стреляет, но стрела попадает в пуговицу её ночной рубашки.
  </details>

* Кого пираты берут в плен на лагуне и как Питер спасает её?
  <details> 
  <summary>ответ:</summary>
  Они берут в плен Тигриную Лилию (Tiger Lily), дочь вождя индейцев. Питер имитирует голос капитана Крюка и приказывает пиратам отпустить её.
  </details>

* Почему Венди, Джон и Майкл решают вернуться в Лондон?
  <details> 
  <summary>ответ:</summary>
  Венди рассказывает историю о родителях, которые каждую ночь оставляют окно детской открытым и ждут своих детей. Они понимают, что их родители очень грустят.
  </details>

* Кто похищает детей, когда они идут через лес?
  <details> 
  <summary>ответ:</summary>
  Пираты с корабля «Веселый Роджер» (Jolly Roger).
  </details>

* Как Питер спасает детей с корабля?
  <details> 
  <summary>ответ:</summary>
  Он сражается с капитаном Крюком, а Джон, Майкл и Потерянные мальчики сражаются с пиратами. Питер сталкивает Крюка в море, и крокодил съедает его.
  </details>

* Соглашаются ли мистер и миссис Дарлинг оставить Потерянных мальчиков у себя?
  <details> 
  <summary>ответ:</summary>
  Да, они говорят, что теперь они их новая семья.
  </details>

* Почему Питер Пэн не остаётся в Лондоне?
  <details> 
  <summary>ответ:</summary>
  Он не хочет взрослеть (doesn't want to grow up). Он хочет навсегда остаться мальчиком и веселиться.
  </details>

* Как часто Венди может навещать Питера в Нетландии?
  <details> 
  <summary>ответ:</summary>
  Каждую весну (every spring) на неделю.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Peter_Pan/Peter_Pan.vtt";
        const audio = "/listen/A1/Starter/Peter_Pan/Peter_Pan.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>