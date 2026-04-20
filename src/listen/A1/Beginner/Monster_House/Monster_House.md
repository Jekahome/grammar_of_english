# Listen: Monster House
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут главного героя и его лучшего друга?
  <details> 
  <summary>ответ:</summary>
  Главного героя зовут Ди Джей (DJ), а его лучшего друга — Чаудер (Chowder).
  </details>

* Почему мистер Неббакрекер (Mr. Nebbercracker) кричал на маленькую девочку?
  <details> 
  <summary>ответ:</summary>
  Он крикнул: «Get off my lawn!» (Убирайся с моего газона), потому что её велосипед заехал на его лужайку.
  </details>

* Что случилось с мистером Неббакрекером, когда он схватил Ди Джея за рубашку?
  <details> 
  <summary>ответ:</summary>
  Он упал прямо на Ди Джея на лужайке и не двигался (все подумали, что он умер).
  </details>

* Как зовут девушку, которая присматривала за Ди Джеем, и её парня?
  <details> 
  <summary>ответ:</summary>
  Девушку зовут Зи (Zee), а её парня — Боунз (Bones).
  </summary>
  </details>

* Что Боунз рассказал о своём красном воздушном змее (kite)?
  <details> 
  <summary>ответ:</summary>
  Он рассказал, что однажды змей упал на лужайку мистера Неббакрекера, и старик забрал его.
  </details>

* Что случилось с Боунзом, когда он танцевал на лужайке?
  <details> 
  <summary>ответ:</summary>
  Дверь дома открылась, он увидел своего красного змея, зашёл внутрь, и дверь закрылась с ужасным звуком.
  </details>

* Как звали девочку с рыжими волосами, которая продавала шоколад?
  <details> 
  <summary>ответ:</summary>
  Дженни Беннетт (Jenny Bennett).
  </details>

* Что дом сделал с полицейскими Ландерсом и Листером?
  <details> 
  <summary>ответ:</summary>
  Дом затянул их внутрь: Листера схватило дерево и бросило в дом, а Ландерса втянуло языком-ковром.
  </details>

* Кем была Констанс (Constance)?
  <details> 
  <summary>ответ:</summary>
  Она была женой мистера Неббакрекера, гигантессой из цирка (giantess), которая погибла, упав в яму с цементом.
  </details>

* Почему Констанс ненавидела детей?
  <details> 
  <summary>ответ:</summary>
  Потому что дети в цирке смеялись над ней, бросали в неё вещи и овощи, а в Хэллоуин дети бросили в неё предметы, из-за чего она упала в цемент.
  </details>

* Что было сердцем (heart) дома?
  <details> 
  <summary>ответ:</summary>
  Сердцем дома был огонь (fire), откуда шёл дым (smoke).
  </details>

* Как Ди Джею удалось уничтожить дом-монстра?
  <details> 
  <summary>ответ:</summary>
  Он забрался на стрелу крана (crane) и бросил динамит (dynamite) в дым — в сердце дома.
  </details>

* Что случилось с Констанс после взрыва?
  <details> 
  <summary>ответ:</summary>
  Она снова стала большой и красивой, улыбнулась, обняла мистера Неббакрекера, а потом исчезла.
  </details>

* Что нашли люди в большой яме на месте дома?
  <details> 
  <summary>ответ:</summary>
  Оттуда вышли Боунз и двое полицейских, а Боунз держал в руках своего красного воздушного змея.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Monster_House/Monster_House.vtt";
        const audio = "/listen/A1/Beginner/Monster_House/Monster_House.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>