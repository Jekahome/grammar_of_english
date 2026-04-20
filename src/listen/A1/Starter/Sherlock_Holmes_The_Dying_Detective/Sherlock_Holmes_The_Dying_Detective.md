# Listen: Sherlock Holmes The Dying Detective
  
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такая миссис Хадсон и где происходит действие?
  <details> 
  <summary>ответ:</summary>
  Миссис Хадсон — служанка (servant) Шерлока Холмса. Действие происходит в Лондоне, на Бейкер-стрит, 221b.
  </details>

* К кому миссис Хадсон идёт за помощью и почему?
  <details> 
  <summary>ответ:</summary>
  Она идёт к доктору Ватсону (Dr Watson). Холмс очень болен, отказывается от врача и говорит странные вещи.
  </details>

* Как выглядит Холмс, когда Ватсон приходит на Бейкер-стрит?
  <details> 
  <summary>ответ:</summary>
  Его лицо жёлтое (yellow), глаза красные от лихорадки (red with fever), руки постоянно двигаются, голос слабый.
  </details>

* Почему Холмс не подпускает Ватсона к себе?
  <details> 
  <summary>ответ:</summary>
  Он говорит, что его болезнь пришла с Дальнего Востока (Far East) и очень заразна (contagious).
  </details>

* Кого Холмс называет специалистом по таким болезням?
  <details> 
  <summary>ответ:</summary>
  Доктора Эйнстри (Dr Ainstree).
  </details>

* Что Холмс делает, когда Ватсон хочет выйти из комнаты?
  <details> 
  <summary>ответ:</summary>
  Он выпрыгивает из кровати, быстро идёт к двери и запирает её.
  </details>

* Кого Холмс просит привести вместо доктора Эйнстри?
  <details> 
  <summary>ответ:</summary>
  Мистера Калвертона Смита (Mr Culverton Smith) с Лоуэр-Берк-стрит, 13.
  </details>

* Кем работает Калвертон Смит и что его связывает с болезнью?
  <details> 
  <summary>ответ:</summary>
  У него есть плантация на Суматре (plantation in Sumatra). Его рабочие часто болеют этой болезнью.
  </details>

* Кто такой Виктор Сэвидж и что с ним случилось?
  <details> 
  <summary>ответ:</summary>
  Виктор Сэвидж — племянник (nephew) Калвертона Смита. Он умер при странных обстоятельствах, и Холмс подозревает убийство.
  </details>

* Что говорит Смит, когда Ватсон сообщает ему, что Холмс болен?
  <details> 
  <summary>ответ:</summary>
  На лице Смита появляется улыбка. Он говорит, что они с Холмсом похожи — Холмс изучает преступников, а Смит изучает микробов.
  </details>

* Где прячется Ватсон, когда Смит приходит к Холмсу?
  <details> 
  <summary>ответ:</summary>
  Он прячется за кроватью (behind the bed).
  </details>

* В чём признаётся Смит Холмсу?
  <details> 
  <summary>ответ:</summary>
  Он признаётся, что убил своего племянника и что Холмс заразился от пружины в коробке (spring in the box), которую Смит прислал.
  </details>

* Почему Холмс не ел и не пил три дня?
  <details> 
  <summary>ответ:</summary>
  Это часть его актёрской игры (he's a good actor). Он притворялся очень больным, чтобы Смит признался в убийстве.
  </details>

* Что было на самом деле с лицом и голосом Холмса?
  <details> 
  <summary>ответ:</summary>
  Жёлтое лицо — это грим (make-up). Слабый голос — притворство.
  </details>

* Кто арестовывает Калвертона Смита?
  <details> 
  <summary>ответ:</summary>
  Инспектор Мортон из Скотланд-Ярда (Inspector Morton of Scotland Yard).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Sherlock_Holmes_The_Dying_Detective/Sherlock_Holmes_The_Dying_Detective.vtt";
        const audio = "/listen/A1/Starter/Sherlock_Holmes_The_Dying_Detective/Sherlock_Holmes_The_Dying_Detective.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>