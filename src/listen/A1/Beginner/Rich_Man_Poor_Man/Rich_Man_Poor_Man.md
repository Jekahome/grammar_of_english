# Listen: Rich Man Poor Man
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто прислал письмо Адаму и сколько денег было в денежном переводе (money order)?
  <details> 
  <summary>ответ:</summary>
  Письмо прислал сын Адама Саул (Saul). В денежном переводе было 100 фунтов.
  </details>

* Почему Адам не может сам прочитать письмо?
  <details> 
  <summary>ответ:</summary>
  Потому что он не умеет читать и писать (cannot read or write). В его деревне не было школы.
  </details>

* Кто читает письмо Адаму?
  <details> 
  <summary>ответ:</summary>
  Школьный учитель (the school teacher).
  </details>

* Что Адаму нужно получить в Дарпуре (Darpur), чтобы обналичить денежный перевод?
  <details> 
  <summary>ответ:</summary>
  Ему нужно получить удостоверение личности (Identity Card) с фотографией.
  </details>

* Сколько фотограф просит за три фотографии и сколько Адам в итоге платит?
  <details> 
  <summary>ответ:</summary>
  Фотограф просит 2 фунта 50 пенсов, но Адам платит 2 фунта (two pounds).
  </details>

* Что происходит, когда Адам приходит за фотографиями?
  <details> 
  <summary>ответ:</summary>
  Фотограф делает вид, что не знает Адама, и говорит, что у него нет фотографий. Адам бьёт его палкой (hit him hard with his stick).
  </details>

* Кто такой мистер Шет (Mr Sheth) и сколько денег он даёт Адаму?
  <details> 
  <summary>ответ:</summary>
  Мистер Шет — богатый и важный человек в Дарпуре. Он даёт Адаму 10 фунтов за денежный перевод, который называет «ничего не стоящим» (worthless).
  </details>

* Сколько раз Адам ездил в Дарпур?
  <details> 
  <summary>ответ:</summary>
  Он ездил три раза (Tuesday, Thursday, Saturday).
  </details>

* Что в итоге получает Адам вместо 100 фунтов?
  <details> 
  <summary>ответ:</summary>
  Он получает 10 фунтов от мистера Шета.
  </details>

* Какие чувства испытывает Адам в конце истории?
  <details> 
  <summary>ответ:</summary>
  Он чувствует себя старым и бедным (old and poor).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Rich_Man_Poor_Man/Rich_Man_Poor_Man.vtt";
        const audio = "/listen/A1/Beginner/Rich_Man_Poor_Man/Rich_Man_Poor_Man.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>