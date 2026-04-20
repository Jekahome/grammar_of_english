# Listen: English Fairy Tales
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

## «The Windigo»

* Куда богатый охотник нанял проводника Дефаго (Defago)?
  <details> 
  <summary>ответ:</summary>
  В отдалённую часть Северной Канады, где почти никто не охотился.
  </details>

* Что странного охотник увидел, когда открыл полог палатки в бурю?
  <details> 
  <summary>ответ:</summary>
  Не было ветра, деревья стояли неподвижно, но вой ветра продолжал звучать.
  </details>

* Что кричал Дефаго, убегая в темноту?
  <details> 
  <summary>ответ:</summary>
  «О мои огненные ноги, мои горящие ноги из огня» (oh my fiery feet, my burning feet of fire).
  </details>

* Что обнаружил охотник, когда пошёл по следам Дефаго?
  <details> 
  <summary>ответ:</summary>
  Следы становились всё длиннее и длиннее — такие, какие не мог оставить человек.
  </details>

* Что такое Виндиго (Windigo) по словам индейцев?
  <details> 
  <summary>ответ:</summary>
  Это существо, которое приходит с ветром, утаскивает человека с огромной скоростью, сжигает его ноги, а затем уносит в небо и бросает.
  </details>

* Что охотник увидел под шляпой индейца, сидевшего у костра на торговом посту?
  <details> 
  <summary>ответ:</summary>
  Кучу пепла (a pile of ashes).

## «Such Things Happen» (Эдди Фитч)

* Что случилось с коровой Билла Нильсена (Bill Nilsen)?
  <details> 
  <summary>ответ:</summary>
  Она перестала давать молоко.
  </details>

* Почему Эдди Фитч (Addy Fitch) хотела отомстить Биллу?
  <details> 
  <summary>ответ:</summary>
  Билл сбил машиной и убил её кошку.
  </details>

* Что посоветовал дедушка Билла, чтобы остановить ведьму?
  <details> 
  <summary>ответ:</summary>
  Нарисовать на ореховом дереве (black walnut tree) её портрет, отметить крестиком место сердца и каждый день забивать гвоздь глубже.
  </details>

* Что должна была сделать ведьма, чтобы снять действие гвоздя?
  <details> 
  <summary>ответ:</summary>
  Попросить взаймы что-нибудь (to borrow something). Если дать ей это, сила гвоздя разрушится.
  </details>

* Что попросила Эдди Фитч через мальчика Тимми?
  <details> 
  <summary>ответ:</summary>
  Немного сахара (some sugar).
  </details>

* Что случилось с Эдди Фитч, когда она пришла к дому Билла?
  <details> 
  <summary>ответ:</summary>
  Она упала замертво у его ног (fell dead at his feet).
  </details>

* Что сказал доктор о причине смерти Эдди Фитч?
  <details> 
  <summary>ответ:</summary>
  Что она была очень стара (около 90 лет) и у неё остановилось сердце (her heart).

## «High Beams» (Девушка и грузовик)

* Куда девушка ехала поздно ночью на своей машине?
  <details> 
  <summary>ответ:</summary>
  Домой на ферму (home to her farm).
  </details>

* Что делал водитель красного пикапа (red pickup truck), который следовал за ней?
  <details> 
  <summary>ответ:</summary>
  Он включал дальний свет (high beams), освещая её машину, затем выключал и снова включал.
  </details>

* Кого нашли полицейские, когда водитель грузовика указал на машину девушки?
  <details> 
  <summary>ответ:</summary>
  Человека с ножом (a man with a knife), который прятался за водительским сиденьем.
  </details>

* Почему водитель грузовика не уехал и не вызвал полицию?
  <details> 
  <summary>ответ:</summary>
  Он боялся оставить девушку одну (he was afraid to leave her).

## «The Bed by the Window»

* Где находились трое стариков?
  <details> 
  <summary>ответ:</summary>
  В доме престарелых (nursing home).
  </details>

* Что описывал Джордж (George) Ричарду (Richard), глядя в окно?
  <details> 
  <summary>ответ:</summary>
  Он описывал сцены из жизни за окном: полицейского на лошади, пробку, пиццерию, пожарную станцию.
  </details>

* Что Ричард сделал, чтобы занять кровать у окна?
  <details> 
  <summary>ответ:</summary>
  Он сбросил на пол бутылку с таблетками Джорджа, когда у того случился сердечный приступ.
  </details>

* Что Ричард увидел, когда наконец выглянул в окно?
  <details> 
  <summary>ответ:</summary>
  Голую кирпичную стену (a blank brick wall).
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/English_Fairy_Tales/English_Fairy_Tales.vtt";
        const audio = "/listen/A1/Beginner/English_Fairy_Tales/English_Fairy_Tales.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>