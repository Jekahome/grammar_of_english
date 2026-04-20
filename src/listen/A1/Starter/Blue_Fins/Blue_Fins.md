
# Listen: Blue Fins

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Где происходит действие и кто главная героиня?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в Австралии. Главную героиню зовут Джен.
  </details>

* Почему Джен и ее друзья не в колледже?
  <details> 
  <summary>ответ:</summary>
  Потому что выходные (weekend).
  </details>

* Чем занимается Рик?
  <details> 
  <summary>ответ:</summary>
  Рик занимается серфингом. У него новая красная и белая доска для серфинга.
  </details>

* Что Джен надевает перед тем, как нырнуть под воду?
  <details> 
  <summary>ответ:</summary>
  Джен надевает синие резиновые ласты (blue rubber fins) на ноги, а на лицо — желтую маску с трубкой (snorkel).
  </details>

* Что Джен видит под водой?
  <details> 
  <summary>ответ:</summary>
  Джен видит разноцветных рыб (желтых, синих, зеленых, красных, белых), растения на скалах и морского ежа с острыми шипами.
  </details>

* Почему Джен не трогает морского ежа?
  <details> 
  <summary>ответ:</summary>
  Потому что это опасно (dangerous). У морского ежа острые шипы (sharp spines).
  </details>

* Кого Джен находит запутавшимся в сети?
  <details> 
  <summary>ответ:</summary>
  Джен находит дельфина (dolphin), который запутался в сети и не может всплыть, чтобы дышать.
  </details>

* Что делает Джен, чтобы спасти дельфина?
  <details> 
  <summary>ответ:</summary>
  Джен снимает сеть со скал и с дельфина. Дельфин освобождается и уплывает.
  </details>

* Какая опасность возникает на следующий день?
  <details> 
  <summary>ответ:</summary>
  Появляется голодная акула (shark) с черным плавником. Она плывет к людям.
  </details>

* Кто спасает Джен и Рика от акулы?
  <details> 
  <summary>ответ:</summary>
  Синий дельфин, которого Джен спасла накануне. Он бьет акулу, и акула уплывает.
  </details>

* Чем заканчивается история?
  <details> 
  <summary>ответ:</summary>
  Джен и Рик в безопасности. Джен узнает своего дельфина и благодарит его за спасение.
  </details>

</details>
 
<script>
 
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/Blue_Fins/Blue_Fins.vtt";
        const audio = "/listen/A1/Starter/Blue_Fins/Blue_Fins.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>
