# Listen: The First Flying Man
  
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* В каком веке происходит действие и где живёт Хезарфен Ахмет Челеби?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в 1630-х годах (1630s), во времена Османской империи (Ottoman Empire). Он живёт в Стамбуле, в районе Ускюдар (Üsküdar).
  </details>

* О чём Хезарфен мечтает каждое утро у пролива Босфор?
  <details> 
  <summary>ответ:</summary>
  Он мечтает летать над Босфором с морскими птицами и смотреть на Стамбул с неба.
  </details>

* Что за рисунки привозит Али из Италии?
  <details> 
  <summary>ответ:</summary>
  Это старые рисунки птичьих крыльев (old drawings of birds' wings), сделанные Леонардо да Винчи (Leonardo da Vinci).
  </details>

* Кто такой Лагари и что он хочет сделать?
  <details> 
  <summary>ответ:</summary>
  Лагари — старший брат Хезарфена. Он хочет сделать ракету (rocket).
  </details>

* Что происходит во время первой попытки Хезарфена полететь с холма?
  <details> 
  <summary>ответ:</summary>
  Он не летит, а падает (He falls). Крылья ломаются, но сам он не серьёзно травмирован (только нога болит, но не сломана).
  </details>

* С кого хочет лететь Хезарфен и чьё разрешение ему нужно?
  <details> 
  <summary>ответ:</summary>
  Он хочет лететь с Галатской башни (Galata Tower). Ему нужно разрешение районного начальника Галаты (District Chief of Galata).
  </details>

* Кто должен дать окончательное разрешение на полёт через Босфор?
  <details> 
  <summary>ответ:</summary>
  Султан (the Sultan).
  </details>

* Как визирь (vizier) пытается отговорить султана от разрешения?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Люди ходят на ногах. У нас нет крыльев. Хорошо ли летающий человек в глазах Бога?»
  </details>

* Что отвечает султан визирю?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Мы можем придумывать новое нашим мозгом. А наш мозг от Бога. Первый летающий человек должен быть османом».
  </details>

* Что происходит на следующее утро после разговора с султаном?
  <details> 
  <summary>ответ:</summary>
  Поднимается сильный ветер (lots of wind). Хезарфен прыгает с Галатской башни и летит через Босфор. Он приземляется в Ускюдаре.
  </details>

* Какую награду и какое наказание получает Хезарфен?
  <details> 
  <summary>ответ:</summary>
  Он получает 1000 золотых монет (a thousand gold coins), но султан отправляет его в ссылку в Алжир (exiles him to Algeria).
  </details>

* Почему султан отправляет Хезарфена в ссылку?
  <details> 
  <summary>ответ:</summary>
  Визирь говорит, что летающие люди могут приземляться во дворцах и убивать их. Они опасны (They're dangerous).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Starter/The_First_Flying_Man/The_First_Flying_Man.vtt";
        const audio = "/listen/A1/Starter/The_First_Flying_Man/The_First_Flying_Man.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>