# Listen: The Umbrella

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Какого цвета зонтик нравится Карле и сколько он стоит?
  <details> 
  <summary>ответ:</summary>
  Ей нравится красный зонтик (red umbrella). Он стоит десять долларов.
  </details>

* Сколько Карла в итоге платит за зонтик?
  <details> 
  <summary>ответ:</summary>
  Она платит семь долларов (seven dollars).
  </details>

* Куда Карла идёт после рынка и где оставляет свой зонтик?
  <details> 
  <summary>ответ:</summary>
  Она идёт в магазин тортов (cake shop) и оставляет красный зонтик у двери (near the door).
  </details>

* Какой зонтик Карла забирает вместо своего?
  <details> 
  <summary>ответ:</summary>
  Она забирает старый чёрный зонтик с жёлтыми утками (old black umbrella with yellow ducks).
  </details>

* Почему молодой человек (Пол) думает, что Карла — это Мариса?
  <details> 
  <summary>ответ:</summary>
  У Марисы короткие тёмные волосы, она высокая, и у неё чёрный зонтик с жёлтыми утками. Карла тоже высокая, с короткими тёмными волосами и с таким же зонтиком.
  </details>

* Кем работает Мариса?
  <details> 
  <summary>ответ:</summary>
  Мариса работает с двоюродным братом Пола (works with my cousin). Подробности не уточняются.
  </details>

* Что Карла и Пол делают вместе?
  <details> 
  <summary>ответ:</summary>
  Они идут в кафе тёти Карлы, пьют кофе, разговаривают и смеются.
  </details>

* Почему Карла спешит домой?
  <details> 
  <summary>ответ:</summary>
  У неё завтра экзамен (exam tomorrow), и ей нужно учиться.
  </details>

* Кого Карла видит на городской площади, когда уже темнеет?
  <details> 
  <summary>ответ:</summary>
  Она видит высокую молодую женщину с короткими тёмными волосами и красным зонтиком. Это Мариса (Marisa).
  </details>

* Что Карла говорит Марисе, когда та волнуется из-за перепутанных зонтиков?
  <details> 
  <summary>ответ:</summary>
  Она говорит: «Не волнуйся. Оставь мой красный зонтик себе. Мне нравится этот чёрный. Он счастливый. Сегодня мой счастливый день».
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_Umbrella/The_Umbrella.vtt";
        const audio = "/listen/A1/Starter/The_Umbrella/The_Umbrella.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>