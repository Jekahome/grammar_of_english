# Listen: Simon And The Spy
 
<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Где находится Саймон в начале истории и куда он собирается ехать?
  <details> 
  <summary>ответ:</summary>
  Саймон на вокзале (at the station). Он собирается ехать на поезде (going on a train).
  </details>

* Кого ищет полиция?
  <details> 
  <summary>ответ:</summary>
  Полиция ищет шпиона (spy).
  </details>

* Что происходит, когда Саймон бежит к поезду?
  <details> 
  <summary>ответ:</summary>
  Пожилая женщина с зонтиком (old woman with an umbrella) задевает его сумкой. Саймон падает, его вещи рассыпаются. Из сумки женщины выпадает письмо (a letter), и Саймон случайно кладёт его в свою сумку.
  </details>

* Кто сидит рядом с Саймоном в поезде?
  <details> 
  <summary>ответ:</summary>
  Красивая девушка (a beautiful girl). Её зовут Саманта (Samantha).
  </details>

* Какие детали в одежде «пожилой женщины» заставляют Саймона заподозрить неладное?
  <details> 
  <summary>ответ:</summary>
  У неё мужские ботинки (not women's shoes) и мужские брюки (not women's trousers).
  </summary>
  </details>

* Что происходит с письмом на лодке?
  <details> 
  <summary>ответ:</summary>
  Ветер уносит письмо (The wind takes the letter). Оно летит по лодке.
  </details>

* Кто ловит письмо?
  <details> 
  <summary>ответ:</summary>
  Собака (a dog) хватает письмо в пасть.
  </details>

* Что обнаруживают Саймон и Саманта, когда с «пожилой женщины» падают пальто и шляпа?
  <details> 
  <summary>ответ:</summary>
  Это не пожилая женщина. Это мужчина (a man) — тот самый шпион.
  </details>

* Где в итоге оказывается письмо со списком имён и адресов?
  <details> 
  <summary>ответ:</summary>
  Письмо в собаке (It's in the dog) — собака его проглотила.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/Simon_And_The_Spy/Simon_And_The_Spy.vtt";
        const audio = "/listen/A1/Started/Simon_And_The_Spy/Simon_And_The_Spy.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>