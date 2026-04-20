# Listen: The Adventures Of Six Friends
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут шестерых друзей и какие у них особенности?
  <details> 
  <summary>ответ:</summary>
  Clever (Умница) — любит читать, Fat (Толстяк) — любит есть, Noisy (Шумная) — любит говорить, Naughty (Непослушный) — любит кататься на велосипеде, Slow (Медлительная) — любит красивую одежду, Funny (Смешной) — любит ходить пешком.
  </details>

* Что случилось с Fat, когда он впервые катался на новом велосипеде?
  <details> 
  <summary>ответ:</summary>
  Он застрял в калитке (got stuck in the gate), потому что калитка была слишком маленькой.
  </details>

* Что Naughty подарил Fat на день рождения и почему?
  <details> 
  <summary>ответ:</summary>
  Он подарил бутылку оливкового масла (bottle of olive oil), потому что мама Fat использовала масло, чтобы вытащить его из калитки.
  </details>

* Почему Slow опоздала на день рождения?
  <details> 
  <summary>ответ:</summary>
  Она долго выбирала платье (tried on many dresses) и шла очень медленно, чтобы не испачкать туфли.
  </details>

* Как Naughty помог Fat, когда у того болел живот?
  <details> 
  <summary>ответ:</summary>
  Он съел все сладости, пироги и шоколад (ate all the cakes, sweets and chocolates).
  </details>

* Как дети пытались поймать бабочку и почему Noisy кричала?
  <details> 
  <summary>ответ:</summary>
  Noisy бегала за бабочкой и кричала. Clever сказала, что бабочка понимает английский и испугается. Noisy решила, что нужно учить французский или испанский.
  </details>

* Как Funny помог спасти кота Fluffy от собаки Dolly?
  <details> 
  <summary>ответ:</summary>
  Он приносил других кошек, показывал их Dolly, и Dolly бежала за ними. Так они добрались до дома Clever.
  </details>

* Что дети увидели в поле, когда поехали за город, и как Funny назвал коз?
  <details> 
  <summary>ответ:</summary>
  Они увидели коз (goats). Funny сначала назвал их «большими белыми собаками» (big white dogs), а потом сочинил про них стихотворение.
  </details>

* Что дети нашли в зоопарке и как они помогли смотрителю?
  <details> 
  <summary>ответ:</summary>
  Они нашли питона (python), который уполз из клетки. Они караулили его, а потом помогли смотрителю отнести его обратно.
  </details>

* Что Naughty нарисовал на уроке рисования и почему?
  <details> 
  <summary>ответ:</summary>
  Он нарисовал учителя мистера Pencil, потому что на уроке Science им сказали, что люди — тоже животные, а мистер Pencil — его любимый учитель.
  </details>

* Как Funny пытался помочь Fat не есть булочки и чем это закончилось?
  <details> 
  <summary>ответ:</summary>
  Funny попросил мистера Pie убрать все булочки из магазина. Но Fat встретил миссис Pie, и она научила его печь булочки (cook tasty buns) дома.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Adventures_Of_Six_Friends/The_Adventures_Of_Six_Friends.vtt";
        const audio = "/listen/A1/Beginner/The_Adventures_Of_Six_Friends/The_Adventures_Of_Six_Friends.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>