# Listen: The Wonderful Wizard of Oz (BaumL Frank)
  
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где живёт Дороти и с кем?
  <details> 
  <summary>ответ:</summary>
  Дороти живёт в Канзасе (Kansas) в маленьком сером доме со своим дядей Генри (Uncle Henry), тётей Эм (Aunt Em) и маленькой собачкой Тото (Toto).
  </details>

* Что происходит с домом Дороти во время циклона?
  <details> 
  <summary>ответ:</summary>
  Циклон поднимает дом в воздух и уносит его вместе с Дороти и Тото.
  </details>

* Где оказывается дом Дороти после того, как она просыпается?
  <details> 
  <summary>ответ:</summary>
  Дом оказывается в стране Оз (the land of Oz), на земле Жевунов (Munchkins).
  </details>

* Кого Дороти видит под своим домом?
  <details> 
  <summary>ответ:</summary>
  Она видит ноги в серебряных туфлях — это Злая Ведьма Востока (Wicked Witch of the East), которую дом раздавил.
  </details>

* Кто такая ведьма Севера (Witch of the North) и что она дарит Дороти?
  <details> 
  <summary>ответ:</summary>
  Это добрая волшебница. Она дарит Дороти серебряные туфли Злой Ведьмы Востока и целует её в лоб (защитный поцелуй).
  </details>

* Куда Дороти должна пойти, чтобы вернуться домой?
  <details> 
  <summary>ответ:</summary>
  Она должна пойти в Изумрудный город (Emerald City) к Волшебнику Оз (Wizard of Oz) по дороге из жёлтого кирпича (yellow brick road).
  </details>

* Кого Дороти встречает первым на своём пути?
  <details> 
  <summary>ответ:</summary>
  Она встречает Страшилу (Scarecrow), который хочет попросить у Волшебника мозги (a brain).
  </details>

* Кого Дороти встречает вторым и о чём он мечтает?
  <details> 
  <summary>ответ:</summary>
  Она встречает Железного Дровосека (Tin Woodman), который хочет попросить сердце (a heart).
  </details>

* Кто присоединяется к компании следующим и чего он боится?
  <details> 
  <summary>ответ:</summary>
  Лев (Lion). Он боится всего и хочет попросить храбрость (courage).
  </details>

* Что каждый из друзей видит в тронном зале Волшебника Оз?
  <details> 
  <summary>ответ:</summary>
  Дороти видит большую голову без тела (big head without a body). Страшила видит красивую женщину. Железный Дровосек видит монстра с пятью глазами, пятью руками и пятью ногами. Лев видит большой огненный шар (ball of fire).
  </details>

* Какое условие ставит Волшебник, чтобы выполнить их желания?
  <details> 
  <summary>ответ:</summary>
  Они должны убить Злую Ведьму Запада (Wicked Witch of the West).
  </details>

* Кого посылает Злая Ведьма Запада, чтобы остановить Дороти и её друзей?
  <details> 
  <summary>ответ:</summary>
  Она посылает летающих обезьян (winged monkeys).
  </details>

* Как Дороти случайно убивает Злую Ведьму Запада?
  <details> 
  <summary>ответ:</summary>
  Ведьма пытается отобрать у Дороти серебряную туфлю, Дороти злится и выливает на неё ведро воды. Вода убивает ведьму.
  </details>

* Кем на самом деле оказывается Волшебник Оз?
  <details> 
  <summary>ответ:</summary>
  Он маленький лысый старичок из Канзаса (a little old man with no hair from Kansas). Он не волшебник, а чревовещатель (ventriloquist).
  </details>

* Как Волшебник даёт Страшиле мозги, Дровосеку — сердце, а Льву — храбрость?
  <details> 
  <summary>ответ:</summary>
  Он кладёт Страшиле в голову мозги из коробки, дарит Дровосеку красное шёлковое сердце, а Льву даёт выпить зелье из зелёной бутылки.
  </details>

* Как Дороти возвращается домой в Канзас?
  <details> 
  <summary>ответ:</summary>
  Добрая Ведьма Юга (Good Witch of the South) объясняет, что серебряные туфли волшебные. Дороти закрывает глаза, трижды щёлкает каблуками и говорит: «Отведи меня домой в Канзас».
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_Wonderful_Wizard_of_Oz/The_Wonderful_Wizard_of_Oz.vtt";
        const audio = "/listen/A1/Starter/The_Wonderful_Wizard_of_Oz/The_Wonderful_Wizard_of_Oz.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>