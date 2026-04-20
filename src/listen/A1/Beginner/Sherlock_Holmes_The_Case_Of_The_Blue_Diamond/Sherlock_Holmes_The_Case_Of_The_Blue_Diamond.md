# Listen: Sherlock Holmes The Case Of The Blue Diamond
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Что Петерсон (Peterson), швейцар отеля, нашёл на улице в канун Рождества?
  <details> 
  <summary>ответ:</summary>
  Он нашёл старую шляпу (old hat) и гуся (goose).
  </details>

* Какая надпись была на бирке, привязанной к ножке гуся?
  <details> 
  <summary>ответ:</summary>
  «Мистеру и миссис Генри Бейкер» (For Mr and Mrs Henry Baker).
  </details>

* Что жена Петерсона обнаружила внутри гуся?
  <details> 
  <summary>ответ:</summary>
  Голубой бриллиант (blue diamond).
  </details>

* Кому принадлежал бриллиант и сколько он стоил?
  <details> 
  <summary>ответ:</summary>
  Бриллиант принадлежал графине Моркар (Countess of Morcar). Он стоил около 20 000 фунтов.
  </details>

* Кого полиция арестовала за кражу бриллианта?
  <details> 
  <summary>ответ:</summary>
  Полиция арестовала Джона Хорнера (John Horner), который ранее сидел в тюрьме за воровство.
  </details>

* Как Холмс и Ватсон находят Генри Бейкера?
  <details> 
  <summary>ответ:</summary>
  Холмс даёт объявление в вечерние газеты (advertisement in the evening newspapers), и Генри Бейкер приходит на Бейкер-стрит.
  </details>

* Где Генри Бейкер купил своего гуся?
  <details> 
  <summary>ответ:</summary>
  В пабе «Альфа» (The Alpha) около Британского музея (British Museum) через «гусиный клуб» (goose club).
  </details>

* Кто такой Джеймс Райдер (James Ryder)?
  <details> 
  <summary>ответ:</summary>
  Джеймс Райдер — помощник управляющего (assistant manager) в отеле «Космополитен» (Cosmopolitan Hotel), где был украден бриллиант.
  </details>

* Как Райдер спрятал бриллиант и почему он его потерял?
  <details> 
  <summary>ответ:</summary>
  Он засунул бриллиант в рот гусю (put it into the bird's mouth), но потом перепутал гусей — бриллиант оказался в другом гусе с чёрным хвостом (white goose with a black tail).
  </details>

* Почему Холмс отпускает Райдера, а не отдаёт его полиции?
  <details> 
  <summary>ответ:</summary>
  Холмс считает, что Райдер больше не совершит преступления, потому что он напуган. Если его отправить в тюрьму, он станет преступником на всю жизнь. Кроме того, Рождество — время быть добрым к другим.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Sherlock_Holmes_The_Case_Of_The_Blue_Diamond/Sherlock_Holmes_The_Case_Of_The_Blue_Diamond.vtt";
        const audio = "/listen/A1/Beginner/Sherlock_Holmes_The_Case_Of_The_Blue_Diamond/Sherlock_Holmes_The_Case_Of_The_Blue_Diamond.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>