# Listen: 20000 Leagues Under The Sea

<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* В каком году происходит действие и кто главный рассказчик?
  <details> 
  <summary>ответ:</summary>
  Действие происходит в 1866 году. Главный рассказчик — французский учёный господин Аронакс (Mr Aronnax).
  </details>

* Что люди принимают за гигантского кита?
  <details> 
  <summary>ответ:</summary>
  Подводная лодка (a submarine) под названием «Наутилус» (Nautilus).
  </details>

* Кто такой Нед Ленд?
  <details> 
  <summary>ответ:</summary>
  Нед Ленд — канадский китобой (Canadian whaler), сильный мужчина около сорока лет.
  </details>

* Как зовут слугу господина Аронакса и из какой он страны?
  <details> 
  <summary>ответ:</summary>
  Его зовут Консей (Conseil), он из Бельгии (Belgian).
  </details>

* Как зовут капитана подводной лодки и на каком языке он говорит с героями?
  <details> 
  <summary>ответ:</summary>
  Капитана зовут Немо (Captain Nemo). Он говорит на очень хорошем французском языке.
  </details>

* Что капитан Немо говорит о возможности героев вернуться домой?
  <details> 
  <summary>ответ:</summary>
  Он говорит, что они могут остаться на «Наутилусе» и увидеть много интересного, но никогда не смогут вернуться домой.
  </details>

* Из чего сделана вся одежда и еда на «Наутилусе»?
  <details> 
  <summary>ответ:</summary>
  Всё сделано из морских животных (from sea animals).
  </details>

* Как «Наутилус» попадает из Красного моря в Средиземное?
  <details> 
  <summary>ответ:</summary>
  Через подводный туннель (underwater tunnel) под Египтом.
  </details>

* Куда капитан Немо отдаёт золото, которое его люди поднимают со дна моря?
  <details> 
  <summary>ответ:</summary>
  Он отдаёт золото бедным и несчастным людям в разных странах (for unhappy people in many countries).
  </details>

* Какое затонувшее место посещает капитан Немо с господином Аронаксом?
  <details> 
  <summary>ответ:</summary>
  Они посещают Атлантиду (Atlantis) — затонувший город под водой.
  </details>

* Кто первым достигает Южного полюса в этой истории?
  <details> 
  <summary>ответ:</summary>
  Капитан Немо и его команда на «Наутилусе».
  </details>

* Как «Наутилус» спасается из ледяного туннеля, когда вокруг и под ним лёд?
  <details> 
  <summary>ответ:</summary>
  Сначала люди пробивают лёд ножами и копьями, а затем «Наутилус» своей тяжестью проламывает оставшиеся два метра льда.
  </details>

* Что капитан Немо делает с кораблём, который стреляет в «Наутилус»?
  <details> 
  <summary>ответ:</summary>
  Он таранит корабль («Наутилус» врезается в него), корабль тонет, и все люди на нём погибают.
  </details>

* Что держит в руках капитан Немо после этого?
  <details> 
  <summary>ответ:</summary>
  Фотографию красивой молодой женщины и двух маленьких детей — своей погибшей семьи.
  </details>

* Что такое Мальстрём (Maelstrom)?
  <details> 
  <summary>ответ:</summary>
  Это гигантская воронка в море, которая затягивает корабли и китов на дно.
  </details>

* Как заканчивается история для трёх друзей?
  <details> 
  <summary>ответ:</summary>
  Их маленькая лодка выбрасывается из Мальстрёма, и они просыпаются в доме норвежского моряка. Они живы и скоро смогут поехать домой.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/20000_Leagues_Under_The_Sea/20000_Leagues_Under_The_Sea.vtt";
        const audio = "/listen/A1/Beginner/20000_Leagues_Under_The_Sea/20000_Leagues_Under_The_Sea.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>