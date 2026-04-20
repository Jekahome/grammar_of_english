# Listen: The Mystery Of Manor Hall

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут брата и сестру, которых мама оставляет у дяди Генри?
  <details> 
  <summary>ответ:</summary>
  Том (Tom) и Милли (Milly).
  </details>

* Что дядя Генри запрещает детям делать?
  <details> 
  <summary>ответ:</summary>
  Он запрещает им заходить в музыкальную комнату (music room). На двери висит табличка «Не входить» (Do Not Enter).
  </details>

* Что дядя Генри говорит сделать в ночь полнолуния?
  <details> 
  <summary>ответ:</summary>
  Он говорит запереть дверь спальни (Lock your bedroom door) и не открывать её.
  </details>

* Что Том и Милли слышат в полночь из музыкальной комнаты?
  <details> 
  <summary>ответ:</summary>
  Они слышат пение (someone singing). Мужчина поёт песню о море.
  </details>

* Кого они видят в музыкальной комнате?
  <details> 
  <summary>ответ:</summary>
  Они видят пирата (a pirate), который выходит из картины с кораблём. Это призрак (ghost).
  </details>

* Как зовут пирата и как называется его корабль?
  <details> 
  <summary>ответ:</summary>
  Его зовут Уильям Боунс (William Bones), но все называют его Билли (Billy). Его корабль называется «Жемчужина» (The Pearl).
  </details>

* Какую тайну рассказывает Билли о картине?
  <details> 
  <summary>ответ:</summary>
  Одна старушка нарисовала его корабль и сказала: «Перед смертью помести картину в дом у моря. Когда ты умрёшь и будет полнолуние, твой призрак сможет плавать на корабле одну ночь».
  </details>

* Почему Билли не может плавать на корабле в Manor Hall?
  <details> 
  <summary>ответ:</summary>
  Потому что Manor Hall находится не у моря (isn't near the sea).
  </details>

* Какую идею предлагает Том?
  <details> 
  <summary>ответ:</summary>
  Он предлагает забрать картину в их новый дом, который стоит у моря (near the sea), и повесить её в комнате для завтрака (breakfast room).
  </details>

* Что происходит в конце истории?
  <details> 
  <summary>ответ:</summary>
  Том и Милли забирают картину в новый дом у моря. Билли Боунс тихо поёт песню о море. Однажды в полнолуние его корабль исчезает (his ship disappears).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_Mystery_Of_Manor_Hall/The_Mystery_Of_Manor_Hall.vtt";
        const audio = "/listen/A1/Starter/The_Mystery_Of_Manor_Hall/The_Mystery_Of_Manor_Hall.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>