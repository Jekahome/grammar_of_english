# Listen: Marcel And The Shakespeare Letters
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Марсель и куда он приезжает каждый ноябрь?
  <details> 
  <summary>ответ:</summary>
  Марсель — французский мышонок-детектив (French mouse detective). Каждый ноябрь он приезжает в Лондон (London) к своему другу Генри (Henry).
  </details>

* Какое важное событие должно произойти на следующее утро после приезда Марселя?
  <details> 
  <summary>ответ:</summary>
  Профессор Бартон (Professor Barton) должен передать письма Шекспира (Shakespeare letters) в Британский музей (British Museum) в 10 утра.
  </details>

* Какой праздник отмечают в Англии 5 ноября и какие звуки слышны на улице?
  <details> 
  <summary>ответ:</summary>
  День Гая Фокса (Guy Fawkes Day). Слышны звуки фейерверков (fireworks): BANG, WHIZZ, WHEEE, POP, WHOOSH.
  </details>

* Где Марсель и Генри находят сейф (safe) и что они в нём обнаруживают?
  <details> 
  <summary>ответ:</summary>
  Сейф находится в книжном шкафу (bookcase) профессора. В сейфе нет писем, но есть большая дыра (a big hole) и горячий дым (hot smoke).
  </details>

* Кого Марсель и Генри видят через дыру в сейфе и что эта женщина делает?
  <details> 
  <summary>ответ:</summary>
  Они видят высокую женщину в красном платье (a tall woman in a red dress). Она говорит по телефону, что улетает в Нью-Йорк вечером на Конкорде (Concorde).
  </details>

* Куда Марсель и Генри отправляются, чтобы вернуть письма?
  <details> 
  <summary>ответ:</summary>
  Они отправляются в аэропорт Хитроу (Heathrow Airport).
  </details>

* Как Марсель забирает письма из сумки женщины?
  <details> 
  <summary>ответ:</summary>
  Он делает маленьким ножом (knife) дыру в сумке, залезает внутрь и передаёт письма Генри.
  </details>

* Кто мешает женщине поймать мышей в аэропорту?
  <details> 
  <summary>ответ:</summary>
  Толстый мужчина с двумя сумками (a fat man with two bags) заходит в дверь, женщина падает на пол, и мыши убегают.
  </details>

* Что делает профессор Бартон, когда возвращается домой и видит письма на столе?
  <details> 
  <summary>ответ:</summary>
  Он не понимает, что произошло, кладёт руку на голову и говорит: «Я не понимаю».
  </details>

* Кто благодарит Марселя в конце истории?
  <details> 
  <summary>ответ:</summary>
  Генри (Henry) благодарит Марселя в Британском музее.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Marcel_And_The_Shakespeare_Letters/Marcel_And_The_Shakespeare_Letters.vtt";
        const audio = "/listen/A1/Beginner/Marcel_And_The_Shakespeare_Letters/Marcel_And_The_Shakespeare_Letters.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>