# Listen: The Well

<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* С кем живёт Лиа и кто болен?
  <details> 
  <summary>ответ:</summary>
  Лиа живёт с мамой, папой, братом Джеем (Jay) и бабушкой. Бабушка старая и больная (old and sick).
  </details>

* О чём бабушка просит Лизу?
  <details> 
  <summary>ответ:</summary>
  Она просит принести воды из колодца на старой ферме (bring water from the farm's well).
  </details>

* Почему мама не хочет ехать на ферму?
  <details> 
  <summary>ответ:</summary>
  Ферма находится рядом с вулканом (near the volcano), который опасен: там огонь и дым, а дороги охраняют солдаты.
  </details>

* Кто идёт с Лией к колодцу?
  <details> 
  <summary>ответ:</summary>
  Её брат Джей (Jay).
  </details>

* Что Лия кладёт в сумку перед дорогой?
  <details> 
  <summary>ответ:</summary>
  Хлеб (bread), колбасу (sausage) и бутылку воды (a bottle of water).
  </details>

* Кого Лия и Джей встречают у моста?
  <details> 
  <summary>ответ:</summary>
  Они встречают дружелюбную женщину (a friendly woman) с маленькой рыжей собакой.
  </details>

* Что Джей и Лия находят в колодце, когда вытаскивают ведро?
  <details> 
  <summary>ответ:</summary>
  Они находят золотые монеты (gold coins). Это монеты их дедушки (Grandfather's coins).
  </details>

* Как Лия и Джей прячут золото по дороге домой?
  <details> 
  <summary>ответ:</summary>
  Они кладут золотые монеты под апельсины (under the oranges) в ведро.
  </details>

* Кто помогает Лие и Джею, когда банда мальчишек хочет отнять ведро?
  <details> 
  <summary>ответ:</summary>
  Маленькая рыжая собака лает на мальчишек, а дружелюбная женщина выходит из дома, и мальчишки убегают.
  </details>

* Что Лия и Джей говорят солдату на контрольно-пропускном пункте?
  <details> 
  <summary>ответ:</summary>
  Они говорят: «Нет, у нас нет волшебной воды. Зато у нас есть волшебные апельсины!» (We have some magic oranges!)
  </details>

* Как реагирует бабушка, когда видит вместо воды золото?
  <details> 
  <summary>ответ:</summary>
  Все смеются, бабушка смотрит на фотографию мужа и улыбается.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/The_Well/The_Well.vtt";
        const audio = "/listen/A1/Started/The_Well/The_Well.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>