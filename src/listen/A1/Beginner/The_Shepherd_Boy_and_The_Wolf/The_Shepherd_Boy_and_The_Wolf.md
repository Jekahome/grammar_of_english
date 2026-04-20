# Listen: The Shepherd Boy and The Wolf
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут мальчика-пастуха и чем он обычно занимается?
  <details> 
  <summary>ответ:</summary>
  Его зовут Гомер (Homer). Он пасёт овец на холмах, как велят ему родители.
  </details>

* Что Гомер сделал, когда ему стало скучно?
  <details> 
  <summary>ответ:</summary>
  Он решил разыграть фермеров и закричал: «Помогите! Волк!» (Help me! A wolf is near!).
  </details>

* Как отреагировали фермеры на первый крик Гомера?
  <details> 
  <summary>ответ:</summary>
  Они остановили свою работу и побежали на холм, чтобы помочь.
  </details>

* Что сказал отец Гомеру, когда они с фермерами не нашли волка?
  <details> 
  <summary>ответ:</summary>
  Он сказал: «Простите, друзья, за нашего сына». И они ушли.
  </details>

* Что случилось, когда Гомер закричал о волке во второй раз?
  <details> 
  <summary>ответ:</summary>
  Фермеры снова прибежали, но волка опять не было. Гомер снова смеялся над ними.
  </details>

* Что сказали родители Гомеру после второй шутки?
  <details> 
  <summary>ответ:</summary>
  Они сказали, что не вернутся, если снова услышат его крик («We won't come back if we hear you cry»).
  </details>

* Что случилось, когда волк пришёл на самом деле?
  <details> 
  <summary>ответ:</summary>
  Гомер закричал о помощи, но фермеры подумали, что он снова шутит, и не пришли. Волк съел овец.
  </details>

* Какая мораль у этой истории?
  <details> 
  <summary>ответ:</summary>
  Не лги и не играй в игры с людьми, которые тебе верят. Когда тебе действительно понадобится помощь, тебе могут не поверить. (Lying is bad. Trust is not a game.)
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Shepherd_Boy_and_The_Wolf/The_Shepherd_Boy_and_The_Wolf.vtt";
        const audio = "/listen/A1/Beginner/The_Shepherd_Boy_and_The_Wolf/The_Shepherd_Boy_and_The_Wolf.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>