# Listen: Sara Says No!
  
<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Как зовут нового продавца на рынке и его дочь?
  <details> 
  <summary>ответ:</summary>
  Продавца зовут Мистер Фрут (Mister Fruit), а его дочь — Сара (Sara).
  </details>

* Что Сара замечает, когда её отец взвешивает яблоки для школьника?
  <details> 
  <summary>ответ:</summary>
  Весы показывают 1 кг 100 г, но отец убирает одно яблоко, весы показывают 900 г, а он говорит «один килограмм» и берёт один доллар. Он обманывает покупателей.
  </details>

* Что отвечает отец Сары, когда она говорит, что не хочет работать на рынке?
  <details> 
  <summary>ответ:</summary>
  Он говорит: «Мы тоже бедны. У меня нет жены, у тебя нет матери, у меня нет сыновей, у тебя нет братьев. Мы должны зарабатывать деньги. Ты ребёнок. Ты не понимаешь бизнес. Ты женщина. Женщины не понимают бизнес. Такова жизнь».
  </details>

* Что происходит во вторник, когда отец Сары начинает продавать честно?
  <details> 
  <summary>ответ:</summary>
  Покупатели рады и покупают много фруктов. Но после обеда они возвращаются с плохими фруктами — яблоко с червяком, чёрные бананы. Отец отказывается возвращать деньги.
  </details>

* Что говорит Сара отцу во вторник вечером?
  <details> 
  <summary>ответ:</summary>
  Она говорит: «Я не хочу работать на тебя. Я хочу уйти из дома. Я хочу получить хорошую работу. Я не буду на тебя работать».
  </details>

* Что странного происходит в среду утром на рынке?
  <details> 
  <summary>ответ:</summary>
  Когда Мистер Фрут прикасается к фруктам, они портятся (яблоко гниёт, апельсин портится, бананы чернеют).
  </details>

* Что происходит, когда Сара прикасается к фруктам?
  <details> 
  <summary>ответ:</summary>
  С фруктами всё в порядке. Люди кричат: «Ура! Это чудо! Сара прикасается к фруктам, и они хорошие!»
  </details>

* Как меняется жизнь Сары через год?
  <details> 
  <summary>ответ:</summary>
  Мистер Фрут становится Мисс Фрут (Mister Fruit is Miss Fruit). Сара честно продаёт хорошие свежие фрукты, зарабатывает много денег и получает хорошую работу.
  </details>

* Чем занимается отец Сары в конце истории?
  <details> 
  <summary>ответ:</summary>
  Он остаётся дома и занимается уборкой (stays at home. He cleans).
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/Sara_Says_No/Sara_Says_No.vtt";
        const audio = "/listen/A1/Started/Sara_Says_No/Sara_Says_No.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>