# Listen: William Tell
  
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* В каком веке происходит действие и кто правит Швейцарией?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в начале 1300-х годов (early 1300s). Швейцарией правит австрийский император (Austrian emperor).
  </details>

* Кто такой Вильгельм Телль (William Tell) и чем он занимается?
  <details> 
  <summary>ответ:</summary>
  Вильгельм Телль — охотник (hunter), человек мира (a man of peace). Он живёт в горах со своей семьёй.
  </details>

* Почему Конрад Баумгартен (Konrad Baumgarten) убил сборщика налогов (taxman)?
  <details> 
  <summary>ответ:</summary>
  Сборщик налогов пришёл к его жене, когда Баумгартена не было дома, и захотел её (he wanted her).
  </details>

* Почему губернатор Гесслер (Governor Gessler) приказывает поставить свою шляпу на дерево?
  <details> 
  <summary>ответ:</summary>
  Он хочет, чтобы все жители останавливались и смотрели на шляпу, тем самым показывая свою любовь к императору и губернатору.
  </details>

* Что Гесслер приказывает сделать Вильгельму Теллю в наказание за то, что он не остановился у шляпы?
  <details> 
  <summary>ответ:</summary>
  Он приказывает Теллю положить яблоко на голову своего сына Вальтера (Walther) и сбить его стрелой из арбалета (crossbow).
  </details>

* Почему Телль взял вторую стрелу и для кого она была предназначена?
  <details> 
  <summary>ответ:</summary>
  Вторая стрела была для губернатора Гесслера (for you — a dead governor for a dead son).
  </details>

* Как Теллю удаётся сбежать от Гесслера?
  <details> 
  <summary>ответ:</summary>
  Он помогает управлять лодкой во время шторма, а затем убегает в темноту (runs away into the dark night).
  </details>

* Кто убивает губернатора Гесслера?
  <details> 
  <summary>ответ:</summary>
  Вильгельм Телль убивает его второй стрелой (the second arrow) из своего арбалета.
  </details>

* Что происходит с австрийским императором в конце пьесы?
  <details> 
  <summary>ответ:</summary>
  Император убит (the Emperor is dead). Его убили австрийцы на дороге в Баден (on the road to Baden).
  </details>

* Что отвечает Вильгельм Телль, когда его называют героем?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Спасибо, Вильгельм. Швейцария всегда будет помнить тебя» — и отвечает: «Теперь у нас может быть мир. Прощайте, мои друзья. Я иду домой — в горы и к своей семье».
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/William_Tell/William_Tell.vtt";
        const audio = "/listen/A1/Beginner/William_Tell/William_Tell.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>