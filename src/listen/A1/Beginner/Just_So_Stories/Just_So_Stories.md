# Listen: Just So Stories
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Какой вопрос Слонёнок (Elephant's Child) задаёт снова и снова, и куда он отправляется, чтобы найти ответ?
  <details> 
  <summary>ответ:</summary>
  Он спрашивает: «Что крокодил ест на обед?» (What does the crocodile have for dinner?). Он отправляется к реке Лимпопо (Limpopo River), чтобы узнать ответ.
  </details>

* Что происходит с носом Слонёнка, когда крокодил хватает его?
  <details> 
  <summary>ответ:</summary>
  Крокодил тянет его за нос, а Питон (python) помогает Слонёнку тянуть в другую сторону. Нос становится очень длинным (very long) и превращается в хобот (trunk).
  </details>

* Что Слонёнок может делать с новым носом?
  <details> 
  <summary>ответ:</summary>
  Он может убивать мух (kill flies), есть листья с высоких деревьев, принимать холодный душ из реки и бить других животных.
  </details>

* Почему Кенгуру (Kangaroo) просит волшебников сделать его популярным и непохожим на других?
  <details> 
  <summary>ответ:</summary>
  Он хочет, чтобы другие животные бегали за ним (the other animals to run after me).
  </details>

* Кто преследует Кенгуру и как он начинает передвигаться?
  <details> 
  <summary>ответ:</summary>
  Динго (Dingo) преследует его. Кенгуру начинает прыгать (hop), потому что ему нужно перепрыгнуть реку Вулгонг (Wolgong River).
  </details>

* Почему Леопард (Leopard) и Человек (Man) не могут найти Жирафа (Giraffe) и Зебру (Zebra) в лесу?
  <details> 
  <summary>ответ:</summary>
  У жирафа появляются пятна (patches), а у зебры — полоски (stripes). Они сливаются с тенями леса (shadows of the forest), и их трудно увидеть.
  </details>

* Как Леопард получает свои пятна?
  <details> 
  <summary>ответ:</summary>
  Тени леса падают на него (its shadows fall on him), и на его теле остаются тёмные пятна, которые не исчезают.
  </details>

* Кто помогает Киту (Whale) найти человека для обеда и что делает моряк (sailor), оказавшись внутри кита?
  <details> 
  <summary>ответ:</summary>
  Маленькая рыбка (little fish) помогает. Моряк прыгает, танцует и бьёт ногами (jumping, kicking and dancing) внутри желудка кита, и киту становится плохо.
  </details>

* Что моряк оставляет в горле кита и почему кит больше не может есть людей?
  <details> 
  <summary>ответ:</summary>
  Моряк оставляет свой плот (raft), который становится горлом кита. Теперь кит может есть только очень маленькую рыбу.
  </details>

* Почему Верблюд (Camel) отказывается работать и что у него появляется на спине?
  <details> 
  <summary>ответ:</summary>
  Он ленивый (lazy). Волшебник пустыни (desert magician) даёт ему горб (hump), с которым верблюд может работать три дня без еды и воды.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Just_So_Stories/Just_So_Stories.vtt";
        const audio = "/listen/A1/Beginner/Just_So_Stories/Just_So_Stories.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>