# Listen: A Connecticut Yankee in King Arthur's Court
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут главного героя и откуда он родом?
  <details> 
  <summary>ответ:</summary>
  Главного героя зовут Хэнк Морган (Hank Morgan). Он из Коннектикута (Connecticut), США.
  </details>

* Как Хэнк попадает в Камелот (Camelot) и в каком году, по словам Кларенса (Clarence)?
  <details> 
  <summary>ответ:</summary>
  Рабочий ударяет его по голове на фабрике, он теряет сознание, а просыпается под деревом, где его берёт в плен сэр Кей (Sir Kay). Кларенс говорит, что это 513 год, двор короля Артура.
  </details>

* Какое астрономическое событие Хэнк использует, чтобы спасти себя от сожжения на костре?
  <details> 
  <summary>ответ:</summary>
  Полное солнечное затмение (total solar eclipse), которое, как он знает, произойдёт 21 июня 513 года.
  </details>

* Кто такой Мерлин (Merlin) и как Хэнк с ним справляется?
  <details> 
  <summary>ответ:</summary>
  Мерлин — старый волшебник, который враждует с Хэнком. Хэнк взрывает его башню с помощью пороха (gunpowder) и молнии, а затем разоблачает его как фальшивого мага.
  </details>

* Какие современные изобретения и идеи Хэнк внедряет в Камелоте?
  <details> 
  <summary>ответ:</summary>
  Он открывает тайные школы (secret schools), военную академию, прокладывает телефонные провода, создаёт газеты (newspapers), учит Кларенса журналистике, вводит мыло, зубные щётки, крахмал для одежды и даже пытается продавать паровые плиты (stoves).
  </details>

* Кто такая Сэнди (Sandy) и куда они вместе отправляются?
  <details> 
  <summary>ответ:</summary>
  Сэнди — девушка, которая приходит в Камелот с просьбой спасти её госпожу и 44 девушек, заточённых в замке с чудовищами. Хэнк соглашается и едет с ней.
  </details>

* Кем на самом деле оказываются «заколдованный замок» и «пленённые принцессы»?
  <details> 
  <summary>ответ:</summary>
  Замок оказывается свинарником (a big sty), а принцессы — свиньями (pigs). Сэнди искренне верит, что это заколдованные дамы.
  </details>

* Как Хэнк и король Артур становятся рабами и кто их спасает?
  <details> 
  <summary>ответ:</summary>
  Их продаёт в рабство дворянин, которому они доверились. Их спасают 500 рыцарей на велосипедах (knights on bicycles), посланные Кларенсом.
  </details>

* Как Хэнк побеждает сэра Сагремора (Sir Sagremor) на турнире?
  <details> 
  <summary>ответ:</summary>
  Сначала он использует лассо (lasso), чтобы стащить его с лошади. Когда Мерлин крадёт лассо, Хэнк стреляет в сэра Сагремора из пистолета (gun).
  </details>

* Чем заканчивается история Хэнка в Камелоте?
  <details> 
  <summary>ответ:</summary>
  Пока Хэнк с женой и больной дочерью в отъезде, в Англии начинается война. Он возвращается, провозглашает республику, но его раненый рыцарь. Он засыпает под действием чар Мерлина и никогда больше не просыпается.
  </details>

* Кто рассказывает финал истории в гостинице?
  <details> 
  <summary>ответ:</summary>
  Сам Хэнк Морган (странник) рассказывает историю Марку Твену, а затем умирает в бреду.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/A_Connecticut_Yankee_in_King_Arthurs_Court/A_Connecticut_Yankee_in_King_Arthurs_Court.vtt";
        const audio = "/listen/A1/Beginner/A_Connecticut_Yankee_in_King_Arthurs_Court/A_Connecticut_Yankee_in_King_Arthurs_Court.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>