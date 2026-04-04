# Listen: Maisie And The Dolphin
  
<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Сколько лет Мейзи, где она живёт и что любит делать?
  <details> 
  <summary>ответ:</summary>
  Ей тринадцать лет. Она живёт на Багамах (в Бахрейне, ошибка в тексте? — правильно: в Багамах, Bahamas). Любит поп-музыку, читать и плавать.
  </details>

* Кем работают родители Мейзи и где находится их дом?
  <details> 
  <summary>ответ:</summary>
  Мама и папа — врачи. Они работают в больнице для животных Freeport Animal Hospital. Дом стоит рядом с больницей, это старый синий дом у моря.
  </details>

* Что Мейзи находит под водой в начале истории?
  <details> 
  <summary>ответ:</summary>
  Она находит кусок дерева с буквами (a piece of wood with some letters on it).
  </details>

* Что происходит с дельфином и кто управляет быстрой американской лодкой?
  <details> 
  <summary>ответ:</summary>
  Быстрая лодка сбивает дельфина. Лодка принадлежит Карлу Флинту (Carl Flint), американцу, который хочет купить дом и больницу.
  </details>

* Сколько денег предлагает Карл Флинт и сколько времени он даёт на размышления?
  <details> 
  <summary>ответ:</summary>
  Он предлагает 200 000 долларов и даёт четыре недели.
  </details>

* Как Мейзи называет дельфина?
  <details> 
  <summary>ответ:</summary>
  Она называет его Бен (Ben).
  </details>

* Почему родители решают, что Бена пора отпустить обратно в море?
  <details> 
  <summary>ответ:</summary>
  Потому что Бен поправился и снова силён (He's strong and well again). Его дом — в море.
  </details>

* Что Бен приносит Мейзи в зубах, когда они отпускают его в море?
  <details> 
  <summary>ответ:</summary>
  Он приносит старый ключ (an old key).
  </details>

* Куда Бен приводит Мейзи под водой и что она там находит?
  <details> 
  <summary>ответ:</summary>
  Он приводит её к сундуку (a box) со словом MONTOYA на крышке. Внутри — тысячи золотых монет (lots of gold coins).
  </details>

* Что родители Мейзи строят на деньги от испанского золота?
  <details> 
  <summary>ответ:</summary>
  Они строят новую больницу (a new hospital).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/Maisie_And_The_Dolphin/Maisie_And_The_Dolphin.vtt";
        const audio = "/listen/A1/Started/Maisie_And_The_Dolphin/Maisie_And_The_Dolphin.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>