# Listen: Alice's Adventures in Wonderland
  
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

## Глава 1 (Белый Кролик)

* Что Алиса увидела, сидя на берегу реки со своей сестрой?
  <details> 
  <summary>ответ:</summary>
  Белого Кролика (White Rabbit) с часами, который говорил: «Я опаздываю» (I'm late).
  </details>

* Куда упала Алиса, преследуя Кролика?
  <details> 
  <summary>ответ:</summary>
  В большую нору (a big hole).
  </details>

* Что случилось с Алисой после того, как она выпила из бутылочки с надписью «Выпей меня» (Drink me)?
  <details> 
  <summary>ответ:</summary>
  Она стала очень маленькой (very small).
  </details>

* Что произошло, когда Алиса съела пирожок с надписью «Съешь меня» (Eat me)?
  <details> 
  <summary>ответ:</summary>
  Она стала очень большой (very big).
  </details>

## Глава 2 (Синяя Гусеница)

* Какое животное плавало в пруду из слёз Алисы?
  <details> 
  <summary>ответ:</summary>
  Мышь (mouse).
  </details>

* Какую гонку предложил Додо (Dodo), чтобы все обсохли?
  <details> 
  <summary>ответ:</summary>
  Гонку по кругу (run a race), где все выиграли и получили призы.
  </details>

* Что случилось с Алисой, когда она выпила из бутылочки в доме Белого Кролика?
  <details> 
  <summary>ответ:</summary>
  Она снова стала расти (start to grow) и её рука высунулась из окна.
  </details>

* Что сказала Синяя Гусеница (Blue Caterpillar) о грибе?
  <details> 
  <summary>ответ:</summary>
  Одна сторона гриба делает тебя большой, а другая — маленькой (One side makes you big, the other side makes you small).
  </details>

## Глава 3 (Чеширский Кот)

* Кем оказался ребёнок Герцогини (Duchess), которого Алиса вынесла из дома?
  <details> 
  <summary>ответ:</summary>
  Поросёнком (a pig).
  </details>

* Почему Чеширский Кот (Cheshire Cat) улыбается?
  <details> 
  <summary>ответ:</summary>
  Потому что он чеширский кот, а все чеширские коты улыбаются (All Cheshire cats smile).
  </details>

* Куда Чеширский Кот посоветовал Алисе пойти?
  <details> 
  <summary>ответ:</summary>
  Направо к Шляпнику (Hatter) или налево к Мартовскому Зайцу (March Hare), добавив, что они оба сумасшедшие (mad).
  </details>

## Глава 4 (Чайная вечеринка)

* Что показывали часы Шляпника?
  <details> 
  <summary>ответ:</summary>
  День месяца (the day of the month), но не время.
  </details>

* Почему Мартовский Заяц опустил часы в чай?
  <details> 
  <summary>ответ:</summary>
  Это был странный поступок, который удивил Алису; он просто был сумасшедшим.
  </details>

* Какое странное действие совершил Шляпник с Соней (Dormouse)?
  <details> 
  <summary>ответ:</summary>
  Он попытался засунуть Соню в чайник (put the dormouse into the teapot).
  </details>

## Глава 5 (Крокет)

* Что делали садовники (двое, пятеро и семерка) у розового дерева?
  <details> 
  <summary>ответ:</summary>
  Они перекрашивали белые розы в красные, потому что Королева ненавидит белые розы (The Queen hates white roses).
  </details>

* Что Королева кричала, когда злилась?
  <details> 
  <summary>ответ:</summary>
  «Отрубить ему голову!» (Cut off his head!).
  </details>

* Что служило в этой стране клюшками (mallets) и мячами (balls) для игры в крокет?
  <details> 
  <summary>ответ:</summary>
  Клюшками были фламинго (flamingos), а мячами — ежи (hedgehogs).
  </details>

## Глава 6 (Суд)

* В чём обвиняли Червонного Валета (Knave of Hearts)?
  <details> 
  <summary>ответ:</summary>
  В том, что он украл пирожные Королевы (he takes the tarts away).
  </details>

* Каким был первый свидетель (Шляпник)?
  <details> 
  <summary>ответ:</summary>
  Он нервничал, откусил кусочек от чашки вместо хлеба с маслом и убежал, когда Королева приказала отрубить ему голову.
  </details>

* Какое правило (Правило 42) зачитал Король в конце суда?
  <details> 
  <summary>ответ:</summary>
  Все люди ростом больше мили должны покинуть зал суда (All people more than a mile tall must leave the courtroom).
  </details>

## Глава 7 (Домой к чаю)

* Что случилось с картами в конце суда?
  <details> 
  <summary>ответ:</summary>
  Они взлетели в воздух и посыпались на Алису.
  </details>

* Чем на самом деле оказались карты, когда Алиса проснулась?
  <details> 
  <summary>ответ:</summary>
  Листьями (leaves).
  </details>

* Что сказала Алиса, когда проснулась?
  <details> 
  <summary>ответ:</summary>
  «Какой странный сон» (What a strange dream).
  </details>

</details>

<script>
  
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const audio = "/listen/A1/Starter/Alices_Adventures_in_Wonderland/Alices_Adventures_in_Wonderland.opus";
        const subtitles = "/listen/A1/Starter/Alices_Adventures_in_Wonderland/Alices_Adventures_in_Wonderland.vtt";

        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>