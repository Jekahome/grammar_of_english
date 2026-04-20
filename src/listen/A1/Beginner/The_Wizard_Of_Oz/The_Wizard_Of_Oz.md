# Listen: The Wizard Of Oz
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где живёт Дороти и с кем?
  <details> 
  <summary>ответ:</summary>
  Дороти живёт в Канзасе (Kansas) с дядей Генри (Uncle Henry), тётей Эм (Aunt Em) и маленькой чёрной собачкой Тото (Toto).
  </details>

* Что происходит с домом Дороти во время циклона (cyclone)?
  <details> 
  <summary>ответ:</summary>
  Дом поднимается в воздух и улетает вместе с Дороти и Тото.
  </details>

* Где оказывается дом Дороти и кого он раздавил?
  <details> 
  <summary>ответ:</summary>
  Дом оказывается в стране Оз (the country of Oz) и падает на Злую Ведьму Востока (Wicked Witch of the East), убивая её.
  </details>

* Кто такая ведьма Севера (Witch of the North) и что она дарит Дороти?
  <details> 
  <summary>ответ:</summary>
  Ведьма Севера — добрая волшебница. Она дарит Дороти серебряные (в этой версии — красные) туфли Злой Ведьмы Востока и целует её в лоб (защитный поцелуй).
  </details>

* Куда Дороти должна пойти, чтобы вернуться домой?
  <details> 
  <summary>ответ:</summary>
  Она должна пойти в Изумрудный город (Emerald City) к Волшебнику Оз (Wizard of Oz) по дороге из жёлтого кирпича (yellow brick road).
  </details>

* Кого Дороти встречает первым на своём пути и о чём он мечтает?
  <details> 
  <summary>ответ:</summary>
  Она встречает Страшилу (Scarecrow), который хочет попросить у Волшебника мозги (brains).
  </details>

* Кого Дороти встречает вторым и о чём он мечтает?
  <details> 
  <summary>ответ:</summary>
  Она встречает Железного Дровосека (Tin Man), который хочет попросить сердце (heart).
  </details>

* Кто присоединяется к компании следующим и чего он боится?
  <details> 
  <summary>ответ:</summary>
  Трусливый Лев (Cowardly Lion). Он боится всего и хочет попросить храбрость (to be brave).
  </details>

* Что каждый из друзей видит в тронном зале Волшебника Оз?
  <details> 
  <summary>ответ:</summary>
  Дороти видит большую голову без тела (big head without a body). Страшила видит красивую женщину. Железный Дровосек видит животное с двумя головами. Лев видит огненный шар (ball of fire).
  </details>

* Какое условие ставит Волшебник, чтобы выполнить их желания?
  <details> 
  <summary>ответ:</summary>
  Они должны убить Злую Ведьму Запада (Wicked Witch of the West).
  </details>

* Как Дороти убивает Злую Ведьму Запада?
  <details> 
  <summary>ответ:</summary>
  Ведьма пытается отобрать у Дороти красную туфлю, Дороти злится и выливает на неё ведро воды. Вода убивает ведьму.
  </details>

* Кем на самом деле оказывается Волшебник Оз?
  <details> 
  <summary>ответ:</summary>
  Он — старый лысый человек из Канзаса (an old man with no hair from Kansas). Он не волшебник, а фокусник (trick man).
  </details>

* Как Волшебник даёт Страшиле мозги, Дровосеку — сердце, а Льву — храбрость?
  <details> 
  <summary>ответ:</summary>
  Он кладёт Страшиле в голову мозги из бутылки, дарит Дровосеку маленькое красное сердце, а Льву даёт выпить зелье из бутылки с надписью «Будь храбрым» (BE BRAVE).
  </details>

* Как Дороти возвращается домой в Канзас?
  <details> 
  <summary>ответ:</summary>
  Добрая Ведьма Юга (Glinda, the Witch of the South) объясняет, что красные туфли волшебные. Дороти закрывает глаза, говорит: «Восток, запад — дома лучше всего» (East, west — home's best) и прыгает.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Wizard_Of_Oz/The_Wizard_Of_Oz.vtt";
        const audio = "/listen/A1/Beginner/The_Wizard_Of_Oz/The_Wizard_Of_Oz.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>