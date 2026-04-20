# Listen: Halloween Horror
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где происходит действие и почему Салем называют «городом ведьм» (Witch City)?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в Салеме (Salem), штат Массачусетс, США. Салем называют «городом ведьм» из-за казней ведьм в 1692 году (witch hangings of 1692).
  </details>

* Как зовут двух сестёр и сколько им лет?
  <details> 
  <summary>ответ:</summary>
  Келли (Kelly) — 14 лет, Меган (Meghan) — 13 лет.
  </details>

* Кого Меган видит на втором этаже музея ведьм?
  <details> 
  <summary>ответ:</summary>
  Она видит пожилую женщину (old lady) в длинном чёрном платье с маленькими чёрными пуговицами. У женщины очень белая кожа, красные губы и странная красная отметина на шее.
  </details>

* Где друзья решают провести вечеринку в честь Хэллоуина?
  <details> 
  <summary>ответ:</summary>
  Они решают провести вечеринку в старом заброшенном доме (abandoned house) недалеко от старого кладбища (old cemetery).
  </details>

* Кто такая Абигейл Кросс (Abigail Cross)?
  <details> 
  <summary>ответ:</summary>
  Абигейл Кросс — ведьма, жившая с 1627 по 1692 год. Её имя есть в книге «Салем и ведьмы 1692 года».
  </details>

* Какие имена находят друзья на каменном полу в заброшенном доме?
  <details> 
  <summary>ответ:</summary>
  Они находят двадцать имён (twenty names) — это имена двадцати ведьм, казнённых в 1692 году (семь мужчин и тринадцать женщин).
  </details>

* В какой костюм на Хэллоуин решает нарядиться Келли и почему Меган против?
  <details> 
  <summary>ответ:</summary>
  Келли решает нарядиться ведьмой Абигейл Кросс. Меган против, потому что боится, что это привлечёт злых духов.
  </details>

* Что происходит с Келли, когда она спускается в подвал во время игры «поиск сокровищ»?
  <details> 
  <summary>ответ:</summary>
  Она встречает призрак Абигейл Кросс. Абигейл забирает её маску и парик, а Келли засыпает внутри бочки (barrel).
  </details>

* Как друзья спасаются из горящего дома?
  <details> 
  <summary>ответ:</summary>
  Портрет Абигейл Кросс загорается, огонь уничтожает злых духов, дверь открывается, и все выбегают наружу.
  </details>

* Что Келли видит в зеркале на следующее утро?
  <details> 
  <summary>ответ:</summary>
  Она видит красную отметину (red mark) на своей шее — такую же, как у Абигейл Кросс.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Halloween_Horror/Halloween_Horror.vtt";
        const audio = "/listen/A1/Beginner/Halloween_Horror/Halloween_Horror.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>