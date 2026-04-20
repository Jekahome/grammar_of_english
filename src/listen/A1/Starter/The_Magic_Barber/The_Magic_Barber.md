# Listen: The Magic Barber

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как называется город, где происходит действие, и какая там обычно атмосфера?
  <details> 
  <summary>ответ:</summary>
  Город называется Кроссуэйс (Crossways). Это тихий (quiet) и сонный (sleepy) город.
  </details>

* Какой головной убор носят все жители города?
  <details> 
  <summary>ответ:</summary>
  Все носят большие чёрные шляпы (large black hats). У женщин круглые, у мужчин высокие, у девочек квадратные, у мальчиков плоские.
  </details>

* Кто въезжает в город с барабаном и на телеге, запряжённой ослом?
  <details> 
  <summary>ответ:</summary>
  Маленький мальчик (small boy) с барабаном, а на телеге сидит мужчина — Парикмахер (the Barber).
  </details>

* Что написано в объявлении над телегой?
  <details> 
  <summary>ответ:</summary>
  В тексте не указана точная надпись, но жители радуются, потому что больше не хотят носить шляпы.
  </details>

* Что делают жители, когда читают объявление?
  <details> 
  <summary>ответ:</summary>
  Они бросают свои шляпы в воздух (throw their hats in the air), кричат «Ура!» и прощаются со шляпами.
  </details>

* Что делает маленький мальчик, пока все радуются?
  <details> 
  <summary>ответ:</summary>
  Он собирает шляпы в большой мешок (puts the hats into a large bag) и убегает из города.
  </details>

* Какие волшебные слова произносит Парикмахер?
  <details> 
  <summary>ответ:</summary>
  «Snip! Snip! Up and down! Round and round! And off it comes!»
  </details>

* Какого цвета волосы становятся у мужчин, женщин, мальчиков и девочек?
  <details> 
  <summary>ответ:</summary>
  У женщин — синие (blue), у мужчин — зелёные (green), у мальчиков — красные (red), у девочек — жёлтые (yellow).
  </details>

* Что жители видят в зеркале на следующее утро?
  <details> 
  <summary>ответ:</summary>
  У них нет волос (no hair). Они лысые (bald).
  </details>

* Что появляется на улице, когда жители хотят вернуть свои шляпы?
  <details> 
  <summary>ответ:</summary>
  Снова маленький мальчик, но теперь он дует в трубу (blowing a trumpet). Телега полна чёрных шляп (full of black hats).
  </details>

* Чем заканчивается история?
  <details> 
  <summary>ответ:</summary>
  Все покупают чёрные шляпы, которые покрывают их лысые головы. Все счастливы.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_Magic_Barber/The_Magic_Barber.vtt";
        const audio = "/listen/A1/Starter/The_Magic_Barber/The_Magic_Barber.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>