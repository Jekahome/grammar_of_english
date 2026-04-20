# Listen: Animal Tales
 
<div id="listen-container"></div>

<br>
<details>
<summary>Проверить понимание текста</summary>

## The Elephant's Child

* Что случилось с носом Слонёнка, когда Крокодил схватил его?
  <details>
  <summary>ответ:</summary>
  Нос стал вытягиваться (began to grow longer and longer) и превратился в хобот (trunk).
  </details>

* Что Слонёнок сделал с помощью хобота, когда вернулся домой?
  <details>
  <summary>ответ:</summary>
  Он наказал (punished) своих дядей и тётушек, которые раньше били его.
  </details>

## Pigs is Pigs

* Из-за чего поспорили мистер Флэннери (Mr. Flannery) и мистер Морхаус (Mr. Morehouse)?
  <details>
  <summary>ответ:</summary>
  Мистер Флэннери хотел взять за пересылку морских свинок (guinea pigs) 30 центов как за свиней (pigs), а мистер Морхаус — 25 центов как за домашних питомцев (domestic pets).
  </details>

* Сколько морских свинок в итоге оказалось в офисе мистера Флэннери?
  <details>
  <summary>ответ:</summary>
  Более 4000 (в конце он насчитал 4,064).
  </details>

* Что случилось с морскими свинками в самом конце?
  <details>
  <summary>ответ:</summary>
  Их всех отправили в главный офис компании, и мистер Флэннери так и не получил деньги за доставку.
  </details>

## Mrs. Packletide's Tiger

* Почему миссис Пэклтайд (Mrs. Packletide) захотела убить тигра?
  <details>
  <summary>ответ:</summary>
  Она завидовала своей подруге Луне Бимбертон (Luna Bimberton), которая летала на самолёте, и хотела совершить собственное приключение.
  </details>

* Кого на самом деле застрелила миссис Пэклтайд?
  <details>
  <summary>ответ:</summary>
  Она застрелила козу (goat), а тигр умер от сердечного приступа (heart attack).
  </details>

* Что мисс Мебен (Miss Mebin) получила за своё молчание?
  <details>
  <summary>ответ:</summary>
  Коттедж в деревне (a little cottage near Dorking).
  </details>

## The Stolen White Elephant

* Кому предназначался белый слон и кто должен был его доставить?
  <details>
  <summary>ответ:</summary>
  Слон был подарком короля Сиама британской королеве. Его должен был доставить рассказчик.
  </details>

* Где в итоге нашли слона и почему он был мёртв?
  <details>
  <summary>ответ:</summary>
  Слона нашли в подвале (basement) детективного агентства. Он умер от голода и ран.
  </details>

* Сколько денег потратил рассказчик на поиски слона?
  <details>
  <summary>ответ:</summary>
  $100,000 на награду и $42,000 на детективные расходы.
  </details>

## The Shameful Behavior of a Fox Terrier / Montmorency

* Что сделал маленький фокстерьер в вестибюле универмага?
  <details>
  <summary>ответ:</summary>
  Он укусил пуделя (poodle) и бульдога (bulldog), спровоцировав массовую драку собак.
  </details>

* Как фокстерьер Монморанси (Montmorency) отреагировал при встрече с большим чёрным котом?
  <details>
  <summary>ответ:</summary>
  Он испугался (терроризировал) холодных глаз кота и тихо ушёл.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Animal_Tales/Animal_Tales.vtt";
        const audio = "/listen/A1/Beginner/Animal_Tales/Animal_Tales.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>