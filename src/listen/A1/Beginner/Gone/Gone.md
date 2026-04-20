# Listen: Gone
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Сколько лет исполняется Тому (Tom) в день его рождения?
  <details> 
  <summary>ответ:</summary>
  Тому исполняется 12 лет (12 today).
  </details>

* Почему Том чувствует себя одиноко в свой день рождения?
  <details> 
  <summary>ответ:</summary>
  Мама уходит на работу, сестра Энни (Annie) идёт за покупками с друзьями, а отец работает за компьютером и не может пойти с ним. У всех нет времени на него (no one has any time for me).
  </details>

* Что Том находит в парке под скамейкой (under the seat)?
  <details> 
  <summary>ответ:</summary>
  Он находит чёрную сумку (black bag), а в ней фотоаппарат (camera).
  </details>

* Какие кнопки есть на фотоаппарате и что они делают?
  <details> 
  <summary>ответ:</summary>
  Четыре кнопки: фото (photo), удалить (delete), включить (on) и выключить (off).
  </details>

* Что происходит, когда Том фотографирует белку (squirrel) и цветы (flowers)?
  <details> 
  <summary>ответ:</summary>
  После того как он нажимает кнопку «фото», а затем «удалить», белка и цветы исчезают (they are gone).
  </details>

* Что Том делает с футбольным мячом (ball) в парке?
  <details> 
  <summary>ответ:</summary>
  Он фотографирует мяч и удаляет его. Мяч исчезает, и мальчики не могут продолжать игру.
  </details>

* Что Том делает с компьютером своего отца?
  <details> 
  <summary>ответ:</summary>
  Он фотографирует компьютер и удаляет его. Компьютер исчезает, и отец не может найти свою работу.
  </details>

* Куда Том идёт, чтобы помочь маме, и что он хочет там сделать?
  <details> 
  <summary>ответ:</summary>
  Том идёт в кафе своей мамы «Kathy's coffee shop». Он хочет сфотографировать и удалить грязные тарелки и чашки (dirty plates and cups), чтобы у мамы не было работы и они могли провести время вместе.
  </details>

* Кто в конце берёт фотоаппарат и фотографирует Тома?
  <details> 
  <summary>ответ:</summary>
  Его сестра Энни (Annie) берёт фотоаппарат и фотографирует Тома.
  </details>

* Что, скорее всего, произойдёт с Томом после того, как Энни нажмёт кнопку «удалить»?
  <details> 
  <summary>ответ:</summary>
  Судя по предыдущим событиям, Том, скорее всего, исчезнет (gone), как и другие объекты, которые фотографировали и удаляли.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Gone/Gone.vtt";
        const audio = "/listen/A1/Beginner/Gone/Gone.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>