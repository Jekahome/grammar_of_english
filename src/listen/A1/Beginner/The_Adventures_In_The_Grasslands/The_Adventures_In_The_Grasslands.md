# Listen: The Adventures In The Grasslands
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Пятнышко (Spotty) и что он делает в начале истории?
  <details> 
  <summary>ответ:</summary>
  Пятнышко — маленький детёныш жирафа (baby giraffe). Он только что родился, пьёт молоко матери и учится ходить.
  </details>

* Кто такой Джек (Jack) и где он живёт?
  <details> 
  <summary>ответ:</summary>
  Джек — 12-летний мальчик. Он живёт в Африке с родителями-учёными.
  </details>

* Кого зовут Джилл (Jill) и Билл (Bill) и какое у Билла желание?
  <details> 
  <summary>ответ:</summary>
  Джилл — сестра Джека (23 года), Билл — её муж. Билл хочет поймать жирафа в подарок Джилл.
  </details>

* Какого цвета одежду надевает Джек, когда идёт с Биллом в саванну, и почему?
  <details> 
  <summary>ответ:</summary>
  Он надевает ярко-красную одежду (bright red). Жирафы видят яркие цвета, и красный может их остановить.
  </details>

* Как Джек дважды пугает Билла, имитируя звук льва?
  <details> 
  <summary>ответ:</summary>
  Первый раз, когда Билл хочет подойти к жирафам, а второй раз, когда Билл сидит на дереве и хочет спрыгнуть.
  </details>

* Что Билл делает, чтобы замаскироваться под жирафа?
  <details> 
  <summary>ответ:</summary>
  Он привязывает ветку к спине и шее (ties a long branch to the back of his neck and head) и опускает руки на траву.
  </details>

* Как мама-жираф освобождается от верёвки, которую Билл набросил ей на шею?
  <details> 
  <summary>ответ:</summary>
  Она просовывает шею в колючую акацию (acacia), верёвка цепляется за шипы (thorns), и она вытаскивает голову из петли.
  </details>

* Почему Билл теряет шорты и что они находят в грязи?
  <details> 
  <summary>ответ:</summary>
  Билл падает в грязь (mud), и шорты остаются в грязи. В грязи они находят мяч, ботинок и два носка.
  </details>

* Как Джек объясняет Биллу, почему слоны ломают деревья?
  <details> 
  <summary>ответ:</summary>
  Он говорит, что слоны и жирафы играют в прятки (hide-and-seek): слоны ломают деревья, чтобы жирафам негде было прятаться.
  </details>

* Кто спасает Пятнышко и его маму от львицы?
  <details> 
  <summary>ответ:</summary>
  Мама-жираф бросается на львицу, бьёт её передними ногами, и львица убегает.
  </details>

* Что Пятнышко даёт Биллу, когда тот кланяется маме-жирафу?
  <details> 
  <summary>ответ:</summary>
  Пятнышко срывает языком листья с куста и даёт их Биллу, чтобы тот ел и жил долго.
  </details>

* Как Джек и Билл убеждают Джилл не заводить жирафа?
  <details> 
  <summary>ответ:</summary>
  Они рассказывают ей о злых львицах, грязных водопоях и слонах, которые ломают деревья. Джилл пугается и отказывается от идеи.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Adventures_In_The_Grasslands/The_Adventures_In_The_Grasslands.vtt";
        const audio = "/listen/A1/Beginner/The_Adventures_In_The_Grasslands/The_Adventures_In_The_Grasslands.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>