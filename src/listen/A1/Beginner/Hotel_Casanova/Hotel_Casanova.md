# Listen: Hotel Casanova
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Сколько лет исполнилось Дино Брако в день его рождения?
  <details> 
  <summary>ответ:</summary>
  Ему исполнился 21 год.
  </details>

* Где работал Дино и кем?
  <details> 
  <summary>ответ:</summary>
  Он работал на ресепшене в отеле Grand в Венеции (на ресепшене отеля Grand на Венецианском Лидо).
  </details>

* Откуда родом Дино и чем занимались его родители?
  <details> 
  <summary>ответ:</summary>
  Он был из маленького городка Рашелла на юге Италии. Его родители были фермерами.
  </details>

* Как звали подругу Дино по отелю, которая тоже приехала из Рашеллы?
  <details> 
  <summary>ответ:</summary>
  Её звали Мария Лука (Maria Luca), она работала официанткой.
  </details>

* Что Мария подарила Дино на день рождения?
  <details> 
  <summary>ответ:</summary>
  Она подарила ему маленькую картинку с изображением Рашеллы.
  </details>

* О чём Дино писал каждый вечер в своей маленькой чёрной книжке?
  <details> 
  <summary>ответ:</summary>
  Он писал о прошедшем дне, а затем смотрел на свои планы.
  </details>

* Каков был главный план Дино относительно женитьбы?
  <details> 
  <summary>ответ:</summary>
  Он планировал встретить женщину и жениться в 26 лет.
  </details>

* Какую конечную цель ставил перед собой Дино к 30 годам?
  <details> 
  <summary>ответ:</summary>
  Он хотел иметь собственный отель со своим именем над дверью и назвать его «Hotel Casanova».
  </details>

* Как звали женщину, которая перевернула все планы Дино?
  <details> 
  <summary>ответ:</summary>
  Её звали Карла Моретти (Carla Moretti).
  </details>

* В каком номере остановилась Карла Моретти?
  <details> 
  <summary>ответ:</summary>
  В номере 216.
  </details>

* Что Дино сделал, когда Карла заказала кофе в кафе у ресепшена?
  <details> 
  <summary>ответ:</summary>
  Он подошёл к официанту, забрал у него чашку кофе и сам подал его Карле.
  </details>

* Что Дино принёс в номер Карлы по её просьбе вечером?
  <details> 
  <summary>ответ:</summary>
  Он принёс ей напитки (drinks): Карла пила виски, а Дино пил воду, так как был на работе.
  </details>

* Что понял Дино, проснувшись в пять утра в номере Карлы?
  <details> 
  <summary>ответ:</summary>
  Он понял, что влюбился (I'm in love), хотя ему только 21, а не 26, как он планировал.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Hotel_Casanova/Hotel_Casanova.vtt";
        const audio = "/listen/A1/Beginner/Hotel_Casanova/Hotel_Casanova.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>