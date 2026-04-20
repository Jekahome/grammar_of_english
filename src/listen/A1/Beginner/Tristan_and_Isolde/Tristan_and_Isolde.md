# Listen: Tristan and Isolde
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кем представляется Тристан, когда впервые приезжает в Ирландию, и почему?
  <details> 
  <summary>ответ:</summary>
  Он представляется менестрелем (minstrel) по имени Тантрис (Tantris), чтобы никто не узнал, что он — рыцарь, убивший сэра Могальта (Sir Mohalt).
  </details>

* Как королева Ирландии лечит Тристана и что она даёт леди Брагней (Lady Bragney) перед отплытием Изольды в Корнуолл?
  <details> 
  <summary>ответ:</summary>
  Она лечит его травами (herbs). Она даёт леди Брагней зелёную бутылку (green bottle) с приворотным зельем (love potion) для короля Марка и Изольды.
  </details>

* Кто случайно выпивает приворотное зелье на корабле и что происходит?
  <details> 
  <summary>ответ:</summary>
  Тристан и Изольда случайно выпивают его. Они влюбляются друг в друга (they fall in love).
  </details>

* Почему король Марк приказывает Тристану покинуть Корнуолл?
  <details> 
  <summary>ответ:</summary>
  Он узнаёт, что Тристан и Изольда тайно встречаются в лесу. Он считает Тристана предателем (traitor).
  </details>

* Где Тристан находит убежище после изгнания и кого он там встречает?
  <details> 
  <summary>ответ:</summary>
  Он приезжает в Камелот (Camelot) к королю Артуру (King Arthur) и становится рыцарем Круглого стола (Knight of the Round Table).
  </details>

* На ком Тристан женится в Бретани (Brittany) и почему этот брак несчастлив?
  <details> 
  <summary>ответ:</summary>
  Он женится на Изольде Белорукой (Isolde of the White Hands). Она знает, что он всё ещё любит королеву Изольду, и ревнует.
  </details>

* Как Тристан получает смертельное ранение и кто может его вылечить?
  <details> 
  <summary>ответ:</summary>
  Он ранен отравленным копьём (poisoned spear) в битве. Только королева Изольда может его вылечить.
  </details>

* Какое условие Тристан ставит Каердайну (Kahedin) относительно цвета паруса?
  <details> 
  <summary>ответ:</summary>
  Если Изольда приедет, нужно поднять белый парус (white sail). Если нет — чёрный (black sail).
  </details>

* Что говорит Изольда Белорукая, когда видит корабль с белым парусом, и почему?
  <details> 
  <summary>ответ:</summary>
  Она говорит, что парус чёрный (the sail is black). Она делает это из ревности (jealousy), чтобы Тристан умер.
  </details>

* Как умирают Тристан и королева Изольда?
  <details> 
  <summary>ответ:</summary>
  Тристан умирает от отчаяния, думая, что Изольда не приехала. Изольда приезжает, видит его мёртвым, и её сердце разбивается; она умирает рядом с ним.
  </details>

* Что вырастает на их могиле?
  <details> 
  <summary>ответ:</summary>
  Два розовых дерева (two rose trees) — красное и белое, которые растут вместе.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Tristan_and_Isolde/Tristan_and_Isolde.vtt";
        const audio = "/listen/A1/Beginner/Tristan_and_Isolde/Tristan_and_Isolde.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>