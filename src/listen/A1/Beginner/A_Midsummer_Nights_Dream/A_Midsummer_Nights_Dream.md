# Listen: A Midsummer Night's Dream
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Почему Эгей (Aegeus) злится на свою дочь Гермию (Hermia)?
  <details> 
  <summary>ответ:</summary>
  Он выбрал для неё в мужья Деметрия (Demetrius), но Гермия любит Лизандра (Lysander) и отказывается выходить замуж за Деметрия.
  </details>

* Какой план придумывают Гермия и Лизандр, чтобы быть вместе?
  <details> 
  <summary>ответ:</summary>
  Они решают сбежать (run away together) из Афин в дом тёти Лизандра, где их никто не найдёт.
  </details>

* Кто такая Елена (Helena) и в кого она влюблена?
  <details> 
  <summary>ответ:</summary>
  Елена — подруга Гермии. Она влюблена в Деметрия, но Деметрий её отвергает.
  </details>

* Что рассказывает Елена Деметрию, надеясь завоевать его расположение?
  <details> 
  <summary>ответ:</summary>
  Она рассказывает ему о плане Гермии и Лизандра сбежать из Афин.
  </details>

* Из-за чего ссорятся Оберон (Oberon) и Титания (Titania)?
  <details> 
  <summary>ответ:</summary>
  Они ссорятся из-за индийского мальчика (Indian boy). Титания не хочет отдавать его Оберону.
  </details>

* Какое волшебное растение находит Пак (Puck) и для чего оно используется?
  <details> 
  <summary>ответ:</summary>
  Это маленький фиолетовый цветок (a small purple flower). Сок этого цветка заставляет человека влюбиться в первого, кого он увидит после пробуждения.
  </details>

* Кому Оберон велит Пак помочь и кого Пак по ошибке зачаровывает?
  <details> 
  <summary>ответ:</summary>
  Оберон велит помочь Елене, зачаровав Деметрия, чтобы он полюбил её. Но Пак по ошибке зачаровывает Лизандра.
  </details>

* Что происходит с ткачом Основой (Bottom) по вине Пака?
  <details> 
  <summary>ответ:</summary>
  Пак превращает его голову в ослиную (donkey's head).
  </details>

* В кого влюбляется Титания после того, как Оберон зачаровывает её?
  <details> 
  <summary>ответ:</summary>
  Она влюбляется в Основу с ослиной головой (Bottom with a donkey's head).
  </details>

* Как Оберон снимает чары с Титании и Лизандра?
  <details> 
  <summary>ответ:</summary>
  Он использует сок другого волшебного растения (the juice of the magic leaves), чтобы снять действие фиолетового цветка.
  </details>

* Кто на ком женится в конце пьесы?
  <details> 
  <summary>ответ:</summary>
  Тезей (Theseus) женится на Ипполите (Hippolyta), Лизандр — на Гермии, а Деметрий — на Елене.
  </details>

* Что Основин труппа играет на свадьбе и как Тезей оценивает их игру?
  <details> 
  <summary>ответ:</summary>
  Они играют пьесу «Пирам и Фисба» (Pyramus and Thisbe). Тезей говорит, что они старались изо всех сил, и даёт им мешок золота.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/A_Midsummer_Nights_Dream/A_Midsummer_Nights_Dream.vtt";
        const audio = "/listen/A1/Beginner/A_Midsummer_Nights_Dream/A_Midsummer_Nights_Dream.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>