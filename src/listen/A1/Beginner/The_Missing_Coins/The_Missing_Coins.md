# Listen: The Missing Coins
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где происходит действие и кто главные герои?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в городе Бат (Bath), Англия. Главные герои — студенты Пит (Pete) и Карла (Carla).
  </details>

* Какую мелодию играет флейтист на улице?
  <details> 
  <summary>ответ:</summary>
  Он играет мелодию «Greensleeves».
  </details>

* Что пропало из магазина старых монет и марок?
  <details> 
  <summary>ответ:</summary>
  Пропали ценные старые монеты (valuable old coins).
  </details>

* Почему владелец магазина подозревает Пита и Карлу?
  <details> 
  <summary>ответ:</summary>
  Он ушёл в заднюю комнату отвечать на телефонный звонок, а когда вернулся, Пита и Карлы уже не было, и монеты пропали.
  </details>

* Кто ещё работал в магазине и как её звали?
  <details> 
  <summary>ответ:</summary>
  В магазине работала девушка по имени Трейси (Tracy).
  </details>

* Как Карла догадалась, кто украл монеты?
  <details> 
  <summary>ответ:</summary>
  Она услышала мелодию «Greensleeves», которую играл флейтист, и вспомнила, что он играл рядом с магазином. Она поняла, что Трейси передала монеты через окно в шляпу флейтиста.
  </details>

* Как полицейский и Карла поймали флейтиста?
  <details> 
  <summary>ответ:</summary>
  Они подошли к нему, полицейский остановил его, а затем Карла обвинила его в краже. Когда он попытался убежать, полицейский снова его остановил.
  </details>

* Что владелец магазина подарил Питу в благодарность?
  <details> 
  <summary>ответ:</summary>
  Карла попросила подарить Питу марки из Южной Америки (stamps from South America), чтобы он мог начать собирать коллекцию марок.
  </details>

* Что Пит сказал Карле в конце истории?
  <details> 
  <summary>ответ:</summary>
  Он сказал: «Спасибо, Карла. Я люблю тебя!» (Thanks, Carla. I love you!)
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Missing_Coins/The_Missing_Coins.vtt";
        const audio = "/listen/A1/Beginner/The_Missing_Coins/The_Missing_Coins.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>