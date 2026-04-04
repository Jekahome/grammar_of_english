# Listen: Lucky Number

<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Где происходит действие в начале рассказа и как называется это место?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в кафе «Colombo» (Cafe Colombo). Там всегда много людей.
  </details>

* Кто такой Чарли и чем он занимается?
  <details> 
  <summary>ответ:</summary>
  Чарли — мальчик, который чистит обувь (shoeshine boy). Он сидит на тротуаре с коробкой и чистит обувь за десять центов.
  </details>

* Что Чарли ловит в воздухе и откуда берётся этот предмет?
  <details> 
  <summary>ответ:</summary>
  Он ловит лотерейный билет (lottery ticket). Билет выпал из кармана хорошо одетого мужчины, который сел в такси.
  </details>

* Какой номер написан на билете?
  <details> 
  <summary>ответ:</summary>
  СЕМЬ - ПЯТЬ - ТРИ - ВОСЕМЬ - ОДИН - ДВА - ДЕВЯТЬ - ЧЕТЫРЕ - ШЕСТЬ (SEVEN - FIVE - THREE - EIGHT - ONE - TWO - NINE - FOUR - SIX).
  </details>

* Что снится Чарли?
  <details> 
  <summary>ответ:</summary>
  Ему снится, что в дом заходит коза (goat), находит билет и съедает последние цифры: шесть, четыре, девять.
  </details>

* Что Чарли обнаруживает утром?
  <details> 
  <summary>ответ:</summary>
  Билета нет на коробке. Он бежит в лотерейный офис и видит там свою мать, у которой есть этот билет.
  </details>

* Какой вопрос задаётся в конце рассказа?
  <details> 
  <summary>ответ:</summary>
  Будет ли следующей цифрой шесть? Будет ли это их счастливым номером и счастливым днём?
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/Lucky_Number/Lucky_Number.vtt";
        const audio = "/listen/A1/Started/Lucky_Number/Lucky_Number.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>