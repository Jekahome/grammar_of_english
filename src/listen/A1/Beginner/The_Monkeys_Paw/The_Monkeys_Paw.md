# Listen: The Monkey's Paw
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Кто такой Том Моррис (Tom Morris) и откуда он приехал?
  <details> 
  <summary>ответ:</summary>
  Том Моррис — старый друг мистера Уайта (Mr White). Он был солдатом в Индии (soldier in India) 21 год.
  </details>

* Что такое обезьянья лапка (monkey's paw) и какая у неё магическая сила?
  <details> 
  <summary>ответ:</summary>
  Обезьянья лапка — это магический предмет (magic), который может исполнить три желания трёх разных людей (give three wishes to three people). Лапка принадлежала старому индийцу (an old Indian).
  </details>

* Какое первое желание загадал мистер Уайт и что случилось после этого?
  <details> 
  <summary>ответ:</summary>
  Он загадал 30 000 фунтов (thirty thousand pounds). На следующий день его сын Герберт (Herbert) погиб на заводе, и компания выплатила родителям ровно 30 000 фунтов в качестве компенсации.
  </details>

* Что случилось с Гербертом на заводе?
  <details> 
  <summary>ответ:</summary>
  Он попал в механизм (machinery) и погиб. Тело было сильно изуродовано.
  </details>

* Какое второе желание загадала миссис Уайт (Mrs White)?
  <details> 
  <summary>ответ:</summary>
  Она захотела, чтобы Герберт вернулся к ним (to come back to us).
  </details>

* Почему мистер Уайт испугался, когда услышал стук в дверь после второго желания?
  <details> 
  <summary>ответ:</summary>
  Он понял, что его сын вернулся таким, каким был после аварии — изуродованным и страшным.
  </details>

* Какое третье желание загадал мистер Уайт и что произошло после этого?
  <details> 
  <summary>ответ:</summary>
  Он загадал, чтобы его сын ушёл (вероятно, чтобы желание не исполнилось). Стук в дверь прекратился, и на улице никого не было.
  </details>

* Что Том Моррис сказал о желаниях и счастье?
  <details> 
  <summary>ответ:</summary>
  Он сказал, что три желания не приносят счастья (don't bring happiness), и что старый индеец хотел научить людей: никогда не хорошо хотеть изменить что-то (it's never good to want to change things).
  </details>

* Какое третье желание загадал друг Тома Морриса?
  <details> 
  <summary>ответ:</summary>
  Он загадал умереть (to die).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/The_Monkeys_Paw/The_Monkeys_Paw.vtt";
        const audio = "/listen/A1/Beginner/The_Monkeys_Paw/The_Monkeys_Paw.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>