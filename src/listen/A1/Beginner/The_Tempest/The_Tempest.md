# Listen: The Tempest
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Просперо (Prospero) и почему он живёт на острове?
  <details> 
  <summary>ответ:</summary>
  Просперо — настоящий герцог Милана (the real Duke of Milan). Его злой брат Антонио (Antonio) захватил власть, и Просперо с дочерью Мирандой (Miranda) вынуждены жить на острове.
  </details>

* Кто такие Ариэль (Ariel) и Калибан (Caliban)?
  <details> 
  <summary>ответ:</summary>
  Ариэль — волшебный дух (magic spirit). Калибан — монстр (monster). Они оба слуги (slaves) Просперо.
  </details>

* Что такое «буря» (tempest) и зачем Просперо её вызывает?
  <details> 
  <summary>ответ:</summary>
  Буря — это сильный шторм (big, big storm). Просперо вызывает её, чтобы наказать брата Антонио и короля Алонсо (Alonso), которые плывут на корабле.
  </details>

* Как Ариэль помогает Просперо во время бури?
  <details> 
  <summary>ответ:</summary>
  Ариэль выполняет магию Просперо (Ariel helps Prospero with his magic). Он устраивает так, что никто из людей на корабле не погибает, но все оказываются на острове.
  </details>

* Как Просперо заставляет Фердинанда (Ferdinand) и Миранду полюбить друг друга?
  <details> 
  <summary>ответ:</summary>
  Ариэль поёт сладкую песню (singing sweetly), и Фердинанд идёт на звук. Он встречает Миранду, и они сразу влюбляются (возможно, это магия, а может, и нет).
  </details>

* Какой злой план задумывают Себастьян (Sebastian) и Антонио?
  <details> 
  <summary>ответ:</summary>
  Антонио предлагает Себастьяну убить своего брата короля Алонсо, чтобы Себастьян стал королём Неаполя.
  </details>

* Как Ариэль предотвращает убийство короля?
  <details> 
  <summary>ответ:</summary>
  Ариэль поёт в ухо Гонзало (Gonzalo), тот просыпается и будит короля. Король видит Антонио и Себастьяна с мечами наголо.
  </details>

* Что Калибан просит Стефано (Stefano) и Тринкуло (Trinculo) сделать?
  <details> 
  <summary>ответ:</summary>
  Он просит их помочь ему убить Просперо, чтобы он мог стать свободным.
  </details>

* Как Просперо заставляет брата Антонио и короля раскаяться?
  <details> 
  <summary>ответ:</summary>
  Ариэль появляется перед ними, называет их плохими людьми и говорит, что всё, что случилось, — их вина. Антонио признаёт свою вину.
  </details>

* Что происходит в конце пьесы?
  <details> 
  <summary>ответ:</summary>
  Все прощают друг друга. Фердинанд и Миранда женятся. Просперо освобождает Ариэля и Калибана. Все готовятся вернуться в Милан.
  </details>

* Что Просперо просит сделать зрителей в самом конце?
  <details> 
  <summary>ответ:</summary>
  Он просит зрителей похлопать (clap), чтобы разрушить заклинание (to break the spell).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Tempest/The_Tempest.vtt";
        const audio = "/listen/A1/Beginner/The_Tempest/The_Tempest.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>