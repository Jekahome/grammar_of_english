# Listen: Flying Home

<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Феликс и откуда он родом?
  <details> 
  <summary>ответ:</summary>
  Феликс — это сине-жёлтая птица из Бразилии.
  </details>

* Где живёт Феликс сейчас и с кем?
  <details> 
  <summary>ответ:</summary>
  Феликс живёт в Нью-Йорке с семьёй Бакстеров. Его дом — большая клетка на 40-м этаже высокого здания.
  </details>

* Почему Феликс несчастлив, хотя Бакстеры хорошо к нему относятся?
  <details> 
  <summary>ответ:</summary>
  Он хочет вернуться домой в Бразилию, в джунгли, где тепло и деревья всегда зелёные.
  </details>

* Что Феликс вспоминает о своём последнем дне в джунглях?
  <details> 
  <summary>ответ:</summary>
  Он вспоминает двух мужчин в белых шляпах, большую коробку, долгое путешествие на самолёте и магазин «Красивые птицы» в Нью-Йорке.
  </details>

* Как Феликс сбегает из клетки?
  <details> 
  <summary>ответ:</summary>
  Мистер Бакстер открывает клетку, чтобы дать Феликсу еду, затем слышит телефонный звонок, идёт к телефону и забывает закрыть клетку. Феликс видит открытое окно и вылетает.
  </details>

* Кого Феликс встречает на статуе Свободы?
  <details> 
  <summary>ответ:</summary>
  Он встречает маленькую серо-белую птичку.
  </details>

* Что Феликс ест на корабле посреди океана?
  <details> 
  <summary>ответ:</summary>
  Он ест рыбу — двадцать штук за пять минут.
  </details>

* Что делает человек на корабле, когда видит Феликса?
  <details> 
  <summary>ответ:</summary>
  Он просто хочет сфотографировать Феликса.
  </details>

* Какой древний город в Перу видит Феликс?
  <details> 
  <summary>ответ:</summary>
  Он видит город инков Мачу-Пикчу.
  </details>

* Какую птицу Феликс встречает в Перу и что она советует?
  <details> 
  <summary>ответ:</summary>
  Он встречает большую птицу с чёрно-белыми перьями. Она советует найти в Рио её друга Аку, который знает джунгли.
  </details>

* Что происходит с Феликсом в Рио?
  <details> 
  <summary>ответ:</summary>
  Мальчик видит Феликса и хочет его поймать. Он хватает Феликса за шею, но Ака помогает ему освободиться.
  </details>

* Что Феликс видит, когда прилетает в джунгли?
  <details> 
  <summary>ответ:</summary>
  Он видит много мужчин и машин, которые строят новую дорогу. Его дом исчез.
  </details>

* Как Феликс находит свою семью?
  <details> 
  <summary>ответ:</summary>
  Он видит в воздухе маленькое сине-жёлтое перо, поднимает глаза и видит четырёх птиц над деревьями — это его семья.
  </details>

* Как заканчивается история?
  <details> 
  <summary>ответ:</summary>
  Феликс воссоединяется со своей семьёй и кричит: «Я дома!» (I'm home!)
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Flying_Home/Flying_Home.vtt";
        const audio = "/listen/A1/Flying_Home/Flying_Home.wav";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>