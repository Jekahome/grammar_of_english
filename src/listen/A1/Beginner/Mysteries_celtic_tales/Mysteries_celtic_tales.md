# Listen: Mysteries celtic tales
 
<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

## Пролог (1605 год)

* Кого ведут в темницу замка Эддингтон и в чём его обвиняют?
  <details> 
  <summary>ответ:</summary>
  Роберта Маккензи (Robert Mackenzie). Его обвиняют в измене (treason).
  </details>

* Кто приезжает на телеге с сеном, чтобы спасти заключённого?
  <details> 
  <summary>ответ:</summary>
  Элизабет (Elizabeth), жена Роберта.
  </details>

* Что случилось с Робертом во время побега?
  <details> 
  <summary>ответ:</summary>
  Его ранили стрелой из арбалета (crossbow).
  </details>

* Почему хозяин фермы Макферсон (McPherson) не впустил беглецов в дом?
  <details> 
  <summary>ответ:</summary>
  Он испугался, что англичане убьют его за укрывательство.
  </details>

* Какое проклятие (curse) Элизабет произнесла перед смертью?
  <details> 
  <summary>ответ:</summary>
  «Во имя Шотландии я проклинаю твою семью на все времена».
  </details>

## Глава 1 (2005 год, встреча в поезде)

* Кто такой Уолтер Макферсон (Walter McPherson) и чем он занимается?
  <details> 
  <summary>ответ:</summary>
  Он писатель (writer), автор книги «Призраки замка Эддингтон».
  </details>

* Куда направляется Уолтер и где планирует жить?
  <details> 
  <summary>ответ:</summary>
  Он едет в деревню Эддингтон, чтобы жить в фермерском доме Макферсонов (McPherson's farmhouse).
  </details>

* Кто такая Джейн Дункан (Jane Duncan) и кто её отец?
  <details> 
  <summary>ответ:</summary>
  Джейн — попутчица Уолтера, её отец — Дональд Дункан (Donald Duncan).
  </details>

* Почему отец Джейн отказывается заходить в фермерский дом?
  <details> 
  <summary>ответ:</summary>
  Он верит, что дом проклят и в нём водятся привидения (haunted).
  </details>

## Глава 2 (Первая ночь Уолтера)

* Что случилось с Уолтером во время телефонного разговора с Джейн?
  <details> 
  <summary>ответ:</summary>
  Он увидел призраков Элизабет и Роберта, у него случился сердечный приступ (heart attack).
  </details>

* Кто спас Уолтеру жизнь?
  <details> 
  <summary>ответ:</summary>
  Джейн и её отец, которые приехали на ферму после звонка и вызвали полицию и скорую.
  </details>

## Глава 3 (В больнице)

* Какую фамилию носила мать Софи (Sophie) до замужества?
  <details> 
  <summary>ответ:</summary>
  Шлевеллин (Schlewellin) — фамилия семьи убийцы Дороти.
  </details>

* Почему Софи решает вернуться к фермерскому дому одна?
  <details> 
  <summary>ответ:</summary>
  Она понимает, что призрак Дороти появился из-за того, что она — потомок семьи Шлевеллин.
  </details>

## Глава 4 (Призрак Дороти)

* Что Софи говорит призраку Дороти, стоя у колодца?
  <details> 
  <summary>ответ:</summary>
  Она говорит, что сожалеет о том, что сделали её предки, и просит прощения.
  </details>

* Что происходит, когда Софи трижды громко произносит имя Ивана (Ivan)?
  <details> 
  <summary>ответ:</summary>
  Дороти и Иван воссоединяются как призраки, и проклятие снимается.
  </details>

## Историческая вставка (Дороти и Иван)

* Кто такой сэр Джон Тревор (Sir John Trevor) и кто унаследовал его дом?
  <details> 
  <summary>ответ:</summary>
  Сэр Джон построил дом, но умер. Дом унаследовал его брат Эдвард (Edward).
  </details>

* За кого отец хотел выдать замуж Дороти (Dorothy)?
  <details> 
  <summary>ответ:</summary>
  За Алана Шлевеллина (Alan Schlewellin), сына сквайра Рвеллина (Squire Rwellin).
  </details>

* Кого на самом деле любила Дороти?
  <details> 
  <summary>ответ:</summary>
  Ивана Тернера (Ivan Turner), простого батрака (farm hand).
  </details>

* Как погибла Дороти?
  <details> 
  <summary>ответ:</summary>
  Алан столкнул её в колодец (well), и она разбилась насмерть.
  </details>

* Кого обвинили в убийстве Дороти и что с ним случилось?
  <details> 
  <summary>ответ:</summary>
  Обвинили Ивана Тернера. Его повесили (was hanged).
  </details>

* Кто такая Энни (Annie) и что с ней случилось?
  <details> 
  <summary>ответ:</summary>
  Служанка Дороти, которая знала правду, но боялась рассказать. Позже она утонула в реке.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Mysteries_celtic_tales/Mysteries_celtic_tales.vtt";
        const audio = "/listen/A1/Beginner/Mysteries_celtic_tales/Mysteries_celtic_tales.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>