# Listen: Beauty_and_the_Beast
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

## Глава 1 (Семья Красавицы)

* Как зовут главную героиню и почему её так называют?
  <details> 
  <summary>ответ:</summary>
  Её зовут Красавица (Beauty), потому что она очень красивая.
  </details>

* Как зовут двух старших сестёр и какие у них характеры?
  <details> 
  <summary>ответ:</summary>
  Розалинда (Rosalind) и Гортензия (Hortensia). Они ленивые и недружелюбные (lazy and unfriendly).
  </details>

* Что случилось с кораблём отца и как это повлияло на семью?
  <details> 
  <summary>ответ:</summary>
  Корабль отца затерялся в море, и он потерял все деньги. Семья разорилась и переехала в деревню.
  </details>

* Что Красавица попросила привезти отца из города?
  <details> 
  <summary>ответ:</summary>
  Розу (a rose).
  </details>

## Глава 2 (Роза Красавицы)

* Где отец нашёл укрытие во время снежной бури?
  <details> 
  <summary>ответ:</summary>
  В большом замке посреди леса (a big castle in the forest).
  </details>

* Что случилось, когда отец сорвал розу для Красавицы?
  <details> 
  <summary>ответ:</summary>
  Появился Чудовище (Beast) и приговорил его к смерти за то, что он украл его любимую розу.
  </details>

* Что предложила Красавица, чтобы спасти отца?
  <details> 
  <summary>ответ:</summary>
  Она предложила пойти в замок Чудовища вместо отца.
  </details>

## Глава 3 (Чудовище)

* Как Чудовище отреагировало на появление Красавицы в замке?
  <details> 
  <summary>ответ:</summary>
  Оно сказало, что она храбрая девушка (You're a brave girl), и разрешило её отцу уйти.
  </details>

* Что увидела Красавица в зеркале в своей комнате?
  <details> 
  <summary>ответ:</summary>
  Она увидела своего отца и дом, а также своих сестёр, которые были счастливы без неё.
  </details>

* Что Чудовище спрашивало у Красавицы каждый вечер за ужином?
  <details> 
  <summary>ответ:</summary>
  «Красавица, ты хочешь выйти за меня замуж?» (Beauty, do you want to marry me?).
  </details>

## Глава 4 (Жизнь в замке)

* Какие комнаты и вещи ждали Красавицу в замке?
  <details> 
  <summary>ответ:</summary>
  Её собственная комната (Beauty's room) с пианино, книгами и зеркалом.
  </details>

* Что произошло, когда Красавица захотела подарить платья сёстрам?
  <details> 
  <summary>ответ:</summary>
  Сундук с платьями исчез, а затем вернулся, когда она передумала.
  </details>

* Какое волшебное кольцо дал Чудовище Красавице, чтобы она могла навестить отца?
  <details> 
  <summary>ответ:</summary>
  Кольцо, которое нужно положить на стол у кровати, чтобы вернуться в замок.
  </details>

## Глава 5 (Волшебное кольцо)

* Почему сёстры уговорили Красавицу остаться ещё на неделю?
  <details> 
  <summary>ответ:</summary>
  Они надеялись, что Чудовище рассердится и съест её.
  </details>

* Что приснилось Красавице на десятый день?
  <details> 
  <summary>ответ:</summary>
  Что Чудовище умирает в саду замка.
  </details>

## Глава 6 (План сестёр)

* Что Красавица сказала умирающему Чудовищу, когда вернулась в замок?
  <details> 
  <summary>ответ:</summary>
  Она сказала: «Ты должен жить и стать моим мужем. Я люблю тебя и не могу жить без тебя».
  </details>

## Глава 7 (Сон)

* Кем оказалось Чудовище после того, как чары рассеялись?
  <details> 
  <summary>ответ:</summary>
  Красивым принцем (a handsome prince).
  </details>

* Почему фея превратила Розалинду и Гортензию в статуи?
  <details> 
  <summary>ответ:</summary>
  Они были злыми, ленивыми и недобрыми (bad, lazy and unkind). У них каменные сердца (hearts of stone).
  </details>

</details>

<script>
  
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const audio = "/listen/A1/Starter/Beauty_and_the_Beast/Beauty_and_the_Beast.opus";
        const subtitles = "/listen/A1/Starter/Beauty_and_the_Beast/Beauty_and_the_Beast.vtt";

        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>