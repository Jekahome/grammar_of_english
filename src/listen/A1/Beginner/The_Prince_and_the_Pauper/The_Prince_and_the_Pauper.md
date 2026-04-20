# Listen: The Prince and the Pauper
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где и в каком году родились Том Кенти (Tom Canty) и принц Эдуард (Edward Tudor)?
  <details> 
  <summary>ответ:</summary>
  Они родились в Лондоне в один день в 1537 году (on the same day in London in 1537).
  </details>

* Как Том Кенти учится читать и писать, и кто ему помогает?
  <details> 
  <summary>ответ:</summary>
  Его учит добрый старый священник отец Эндрю (Father Andrew). Он также рассказывает Тому истории о королях и принцах.
  </details>

* Где и при каких обстоятельствах Том впервые встречает принца Эдуарда?
  <details> 
  <summary>ответ:</summary>
  Том приходит к Вестминстерскому дворцу (Westminster Palace). Принц видит, как солдаты бьют Тома, и приглашает его внутрь.
  </details>

* Почему принц и нищий решают поменяться одеждой?
  <details> 
  <summary>ответ:</summary>
  Они смотрят в зеркало и видят, что очень похожи. Принц хочет хоть раз в жизни поиграть у реки и вываляться в грязи.
  </details>

* Что принц прячет перед тем, как покинуть дворец, и где?
  <details> 
  <summary>ответ:</summary>
  Он прячет большую государственную печать (the great seal) внутри старых итальянских доспехов (inside an old Italian suit of armour).
  </details>

* Почему никто не верит принцу Эдуарду, когда он говорит, что он король?
  <details> 
  <summary>ответ:</summary>
  Он одет в лохмотья, и все считают его сумасшедшим (mad). Даже его собственный отец, Джон Кенти, смеётся над ним.
  </details>

* Кто такой Майлз Хендон (Miles Hendon) и как он помогает Эдуарду?
  <details> 
  <summary>ответ:</summary>
  Майлз Хендон — солдат, вернувшийся из Франции. Он защищает Эдуарда от толпы, даёт ему еду и кров.
  </details>

* Как Том Кенти случайно раскрывает, что он не настоящий король?
  <details> 
  <summary>ответ:</summary>
  Он говорит, что не знает, где находится большая государственная печать (the great seal), и спрашивает, на что она похожа.
  </details>

* Как настоящий король Эдуард доказывает, что он — настоящий король?
  <details> 
  <summary>ответ:</summary>
  Он говорит, где спрятана большая государственная печать: в старых итальянских доспехах в его комнате.
  </details>

* Что Том Кенти сделал с большой государственной печатью, когда был королём?
  <details> 
  <summary>ответ:</summary>
  Он использовал её, чтобы колоть орехи (to crack nuts).
  </details>

* Чем заканчивается история для Тома Кенти и его семьи?
  <details> 
  <summary>ответ:</summary>
  Король Эдуард дарит матери и сёстрам Тома дом в деревне. Том остаётся лучшим другом короля и живёт во дворце.
  </details>

* Сколько лет прожил король Эдуард VI и что о нём помнят люди?
  <details> 
  <summary>ответ:</summary>
  Он умер в 16 лет (he was only 16). Его помнят как доброго короля, который любил всех людей — богатых и бедных.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Prince_and_the_Pauper/The_Prince_and_the_Pauper.vtt";
        const audio = "/listen/A1/Beginner/The_Prince_and_the_Pauper/The_Prince_and_the_Pauper.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>