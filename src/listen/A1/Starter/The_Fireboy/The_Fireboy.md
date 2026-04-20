# Listen: The Fireboy
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где и когда происходит действие рассказа?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в Древнем Египте (Ancient Egypt), во времена царицы Клеопатры (Queen Cleopatra).
  </details>

* Кто такой Хапу и чем он занимается?
  <details> 
  <summary>ответ:</summary>
  Хапу — «мальчик-огонь» (fireboy). Он помогает своему отцу Баку в маленькой мастерской, где делают золотые столы и стулья.
  </details>

* Что случается с отцом Хапу во время работы?
  <details> 
  <summary>ответ:</summary>
  Он внезапно падает на землю, у него болит голова (It's my head). Он заболевает и не может работать.
  </details>

* Что Хапу делает, пока отец болеет?
  <details> 
  <summary>ответ:</summary>
  Он делает не только столы и стулья, но и золотое ожерелье (a gold necklace).
  </details>

* Почему Хапу идёт во дворец Клеопатры?
  <details> 
  <summary>ответ:</summary>
  Он хочет продать ожерелье царице, потому что она богата и заплатит много денег.
  </details>

* Что говорят Хапу стражники у дворца?
  <details> 
  <summary>ответ:</summary>
  Они смеются и говорят: «Царица Клеопатра не встречается с такими, как ты».
  </details>

* Как Хапу в итоге передаёт ожерелье Клеопатре?
  <details> 
  <summary>ответ:</summary>
  Он узнаёт, что женщины Клеопатры придут на рынок. Но сама царица тоже приезжает. Хапу выбегает перед её носилками и отдаёт ожерелье лично.
  </details>

* Что Клеопатра говорит об ожерелье?
  <details> 
  <summary>ответ:</summary>
  Она говорит: «Это красиво» (This beautiful), и приказывает дать мальчику денег.
  </details>

* Что Хапу хочет сделать на деньги от царицы?
  <details> 
  <summary>ответ:</summary>
  Он хочет заплатить врачу (pay for a doctor), чтобы тот вылечил отца.
  </details>

* Какое предложение делает Клеопатра Хапу во дворце?
  <details> 
  <summary>ответ:</summary>
  Она говорит: «Я хочу, чтобы ты жил здесь и делал для меня много красивых вещей».
  </details>

* Почему Хапу не может остаться во дворце?
  <details> 
  <summary>ответ:</summary>
  Потому что его отец очень болен, и Хапу должен заботиться о нём.
  </details>

* Какое решение принимает Клеопатра в конце?
  <details> 
  <summary>ответ:</summary>
  Она разрешает Хапу вернуться к отцу, но теперь они оба должны работать только для неё (work only for me).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_Fireboy/The_Fireboy.vtt";
        const audio = "/listen/A1/Starter/The_Fireboy/The_Fireboy.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>