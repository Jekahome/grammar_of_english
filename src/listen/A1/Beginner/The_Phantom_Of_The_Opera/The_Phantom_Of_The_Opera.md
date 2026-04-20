# Listen: The Phantom Of The Opera
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где находится Парижская опера и сколько в ней этажей?
  <details> 
  <summary>ответ:</summary>
  Парижская опера находится в Париже, Франция. В здании 17 этажей: 10 над землёй и 7 под землёй.
  </details>

* Кто такой Жозеф Бюке (Joseph Buquet) и как он умер?
  <details> 
  <summary>ответ:</summary>
  Жозеф Бюке — рабочий сцены (stage worker). Его нашли мёртвым с верёвкой вокруг шеи (with a rope around his neck).
  </details>

* Какое письмо получили новые директора Оперы и кто его подписал?
  <details> 
  <summary>ответ:</summary>
  Письмо было подписано «O.G.» (Opera ghost — Призрак Оперы). В письме говорилось, что ложу №5 нельзя продавать, и что призраку нужно 20 000 франков в месяц.
  </details>

* Кто такая Кристина Даэ (Christine Daae) и почему она спела так хорошо в первый вечер?
  <details> 
  <summary>ответ:</summary>
  Кристина Даэ — молодая певица из Норвегии (from Norway). Она спела так хорошо, потому что её учитель — «ангел музыки» (angel of music), который оказался Призраком.
  </details>

* Кто такой Рауль де Шаньи (Raoul de Chagny) и как он связан с Кристиной?
  <details> 
  <summary>ответ:</summary>
  Рауль — виконт де Шаньи (Vicomte de Chagny), молодой человек из богатой семьи. Он встретил Кристину четыре года назад на каникулах в Бретани (Brittany) и влюбился в неё.
  </details>

* Как Призрак отомстил Карлотте (La Carlotta) и директорам, когда она вышла на сцену?
  <details> 
  <summary>ответ:</summary>
  Голос Призрака заставил Карлотту квакать как жаба (co-ack — noise of a toad), а затем огромная люстра (chandelier) упала на зрителей.
  </details>

* Где живёт Призрак и как туда попасть?
  <details> 
  <summary>ответ:</summary>
  Призрак живёт в доме на подземном озере (a house on the lake under the Opera House). Туда можно попасть через секретные двери и зеркало (mirror) в гримёрной Кристины.
  </details>

* Как зовут Призрака и что он потребовал от Кристины?
  <details> 
  <summary>ответ:</summary>
  Его зовут Эрик (Erik). Он потребовал, чтобы Кристина стала его женой (be his wife).
  </details>

* Как Рауль и Перс (the Persian) попали в комнату пыток (torture room) и что это за комната?
  <details> 
  <summary>ответ:</summary>
  Они вошли через неверную дверь. Комната пыток — это комната зеркал (room of mirrors), где становится всё жарче и жарче, и человек умирает от жажды.
  </details>

* Почему Эрик отпустил Кристину и Рауля?
  <details> 
  <summary>ответ:</summary>
  Кристина поцеловала его добровольно (kissed him freely). Это был первый поцелуй от женщины в его жизни. Он заплакал и отпустил их.
  </details>

* Что случилось с Эриком в конце?
  <details> 
  <summary>ответ:</summary>
  Он умер (he is dead). Перс видел его тело.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Phantom_Of_The_Opera/The_Phantom_Of_The_Opera.vtt";
        const audio = "/listen/A1/Beginner/The_Phantom_Of_The_Opera/The_Phantom_Of_The_Opera.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>