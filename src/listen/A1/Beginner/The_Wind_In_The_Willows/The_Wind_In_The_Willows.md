# Listen: The Wind In The Willows
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где живёт Крот (Mole) и почему он выходит на поверхность в начале истории?
  <details> 
  <summary>ответ:</summary>
  Крот живёт в своей маленькой норе (little home). Он устал от уборки и хочет выйти на улицу.
  </details>

* Кто такой Водяная Крыса (Water Rat) и что он предлагает Кроту?
  <details> 
  <summary>ответ:</summary>
  Водяная Крыса — сосед Крота по реке. Он предлагает Кроту покататься на лодке (boat) и устроить пикник (picnic).
  </details>

* Какое хобби постоянно меняется у мистера Тоуда (Mr Toad)?
  <details> 
  <summary>ответ:</summary>
  У Тоуда постоянно меняются хобби: сначала парусный спорт (sailing), потом жизнь на лодке (houseboating), затем цыганский фургон (gypsy caravan), а потом автомобили (motorcars).
  </details>

* Что случилось с фургоном Тоуда, когда мимо проехала машина?
  <details> 
  <summary>ответ:</summary>
  Лошадь испугалась (the horse is frightened) и стянула фургон в канаву (pulls the caravan off the road into a ditch). Фургон разрушен.
  </details>

* Почему Крот пошёл в Дикий Лес (Wild Wood) один и что там случилось?
  <details> 
  <summary>ответ:</summary>
  Крот хотел найти Барсука (Badger). В лесу он увидел маленькие лица с жёсткими глазами (little faces with hard eyes), испугался и заблудился.
  </details>

* Кто спас Крота в Диком Лесу и где они укрылись?
  <details> 
  <summary>ответ:</summary>
  Водяная Крыса спас Крота. Они укрылись в доме Барсука (Badger's house).
  </details>

* Как Тоуд сбежал из тюрьмы?
  <details> 
  <summary>ответ:</summary>
  Дочь тюремщика (gaoler's daughter) помогла ему: её тётя (aunt), прачка (washerwoman), дала Тоуду своё платье и чепец (dress and bonnet), и Тоуд сбежал, переодевшись прачкой.
  </details>

* Что случилось с Тоудом, когда он попытался сесть в поезд?
  <details> 
  <summary>ответ:</summary>
  У него не было денег на билет (no money). Машинист поезда (train driver) согласился подвезти его в обмен на стирку рубашек.
  </details>

* Кто захватил Тоуд-холл (Toad Hall), пока Тоуд был в тюрьме?
  <details> 
  <summary>ответ:</summary>
  Хорьки и ласки (ferrets and weasels) захватили Тоуд-холл.
  </details>

* Как Тоуд, Крыса, Крот и Барсук отбили Тоуд-холл?
  <details> 
  <summary>ответ:</summary>
  Они вошли через секретный туннель (secret tunnel) из реки в кладовую (pantry) и напали на хорьков и ласок во время вечеринки.
  </details>

* Что Тоуд пообещал своим друзьям в конце истории?
  <details> 
  <summary>ответ:</summary>
  Он пообещал измениться (to be a different Toad), не хвастаться и не петь хвастливых песен.
  </details>

* Что матери-ласки говорят своим детям, когда те непослушны?
  <details> 
  <summary>ответ:</summary>
  Они говорят, что ужасный серый Барсук (terrible grey Badger) идёт забрать их.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Wind_In_The_Willows/The_Wind_In_The_Willows.vtt";
        const audio = "/listen/A1/Beginner/The_Wind_In_The_Willows/The_Wind_In_The_Willows.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>