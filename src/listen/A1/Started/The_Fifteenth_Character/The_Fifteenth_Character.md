# Listen: The Fifteenth Character
 
<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Где работает Салли Браун и кем она хочет стать?
  <details> 
  <summary>ответ:</summary>
  Она работает в парке развлечений «Happy Hills». Салли — студентка и хочет стать учителем (teacher).
  </details>

* Какую униформу носят работники парка?
  <details> 
  <summary>ответ:</summary>
  Они носят чистые зелёные брюки (clean green trousers) и жёлтые рубашки (yellow shirts).
  </details>

* Кто такой мистер Парри и как он одет?
  <details> 
  <summary>ответ:</summary>
  Он начальник. Он носит зелёную рубашку, белые брюки и красное пальто с надписью «Я Кен Парри. Могу я вам помочь?»
  </details>

* Какую работу получает Салли в этот день?
  <details> 
  <summary>ответ:</summary>
  Она должна быть Кони Кэт (Connie Cat) — персонажем в костюме кошки, который может только говорить «мяу».
  </details>

* Кто такой Зэпп (Zapp)?
  <details> 
  <summary>ответ:</summary>
  Зэпп — знаменитый певец (a famous singer). Салли обожает его песни и у неё есть все его компакт-диски.
  </details>

* Что такое «Zapp-o-copter»?
  <details> 
  <summary>ответ:</summary>
  Это аттракцион — маленькие вертолёты, на которых можно быстро подниматься вверх и вниз.
  </details>

* Что Зэпп показывает посетителям и куда он его прячет?
  <details> 
  <summary>ответ:</summary>
  Он показывает свой новый компакт-диск (his new CD) с новой песней. Затем он кладёт его обратно в карман.
  </details>

* Что происходит с диском Зэппа?
  <details> 
  <summary>ответ:</summary>
  Диск пропадает (he can't find it). Полиция обыскивает всех посетителей и работников, а мистер Парри закрывает все двери.
  </details>

* Как Салли догадывается, кто украл диск?
  <details> 
  <summary>ответ:</summary>
  Она смотрит на список персонажей (Jobs for Today list). В списке 14 персонажей, но в комнате их 15. Клоун Чарли (Charlie Clown) есть в комнате, но его нет в списке.
  </details>

* Кем оказывается клоун Чарли?
  <details> 
  <summary>ответ:</summary>
  Это женщина (a woman). В её костюме полиция находит диск.
  </details>

* Что Салли и Уильям получают в конце истории?
  <details> 
  <summary>ответ:</summary>
  Они получают приглашение (invitation) на концерт Зэппа в Лондон.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/The_Fifteenth_Character/The_Fifteenth_Character.vtt";
        const audio = "/listen/A1/Started/The_Fifteenth_Character/The_Fifteenth_Character.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>