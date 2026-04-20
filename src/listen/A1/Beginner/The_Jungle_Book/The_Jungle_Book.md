# Listen: The Jungle Book
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Шерхан (Shere Khan) и почему он охотится в новом месте?
  <details> 
  <summary>ответ:</summary>
  Шерхан — тигр (tiger). У него больная нога (bad leg), он не может быстро бегать, убивает быков (bulls), и люди в деревне злятся на него.
  </details>

* Как Маугли (Mowgli) попадает в волчью стаю?
  <details> 
  <summary>ответ:</summary>
  Отец Волк (Father Wolf) находит его маленьким ребёнком (man cub) у входа в пещеру. Мать Волчица (Mother Wolf) решает оставить его и называет Маугли.
  </details>

* Кто такие Балу (Baloo) и Багира (Bagheera) и какую роль они играют в жизни Маугли?
  <details> 
  <summary>ответ:</summary>
  Балу — бурый медведь (brown bear), он учит Маугли Закону джунглей (law of the jungle). Багира — чёрная пантера (black panther), он помогает и защищает Маугли.
  </details>

* Что такое «главные слова» (master words) и зачем они нужны?
  <details> 
  <summary>ответ:</summary>
  Это слова: «Мы одной крови, ты и я» (We are of one blood, you and I), произнесённые на языке птиц, змей и охотников. Они защищают Маугли от всех животных джунглей.
  </details>

* Куда обезьяны (monkey people) уносят Маугли и кто его спасает?
  <details> 
  <summary>ответ:</summary>
  Обезьяны уносят его в Затерянный город (Lost City). Его спасают Балу, Багира и питон Каа (Kaa).
  </details>

* Что такое «красный цветок» (red flower) и почему животные боятся его?
  <details> 
  <summary>ответ:</summary>
  Красный цветок — это огонь (fire). Все животные боятся его, потому что он опасен.
  </details>

* Как Маугли убивает Шерхана?
  <details> 
  <summary>ответ:</summary>
  Он загоняет Шерхана в большой овраг (big ravine) между буйволами (buffaloes) и коровами (cows), и буйволы затаптывают тигра.
  </details>

* Почему жители деревни прогоняют Маугли, даже после того, как он убил Шерхана?
  <details> 
  <summary>ответ:</summary>
  Они называют его «волчий ребёнок» (wolf child) и «мальчик из джунглей» (jungle boy) и бросают в него камни. Он понимает, что они похожи на плохих молодых волков из стаи.
  </details>

* Куда в конце концов уходит Маугли?
  <details> 
  <summary>ответ:</summary>
  Он возвращается в джунгли, к своей волчьей семье, и живёт и охотится со своими братьями.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Jungle_Book/The_Jungle_Book.vtt";
        const audio = "/listen/A1/Beginner/The_Jungle_Book/The_Jungle_Book.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>