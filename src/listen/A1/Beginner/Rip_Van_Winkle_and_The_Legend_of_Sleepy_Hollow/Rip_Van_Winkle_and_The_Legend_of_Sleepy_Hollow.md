# Listen: Rip Van Winkle and The Legend of Sleepy Hollow
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста (Rip Van Winkle)</summary>

* Где происходят события и в каком году начинается история?
  <details> 
  <summary>ответ:</summary>
  События происходят в британской колонии Нью-Йорк, у подножия гор Катскилл (Catskill Mountains). Год — 1765.
  </details>

* Как зовут жену Рипа и почему он часто уходит из дома?
  <details> 
  <summary>ответ:</summary>
  Жену Рипа зовут миссис Ван Винкль (Mrs. Van Winkle). Она постоянно его пилит (nags him all the time), и он уходит, чтобы избежать ссор.
  </details>

* Кого Рип встречает в горах и что они делают?
  <details> 
  <summary>ответ:</summary>
  Он встречает странного старика в голландской одежде 1600-х годов. Эти люди играют в кегли (nine pins), а звук шаров похож на гром (thunder).
  </details>

* Что происходит с Рипом после того, как он выпивает из бочонка (barrel)?
  <details> 
  <summary>ответ:</summary>
  Напиток очень крепкий (very strong), Рип пьёт снова и снова и засыпает (falls asleep). Он просыпается только на следующее утро.
  </details>

* Что изменилось в деревне, когда Рип вернулся?
  <details> 
  <summary>ответ:</summary>
  Деревня стала больше, появились новые дома и новые лица. Его дом заброшен (abandoned), а на месте гостиницы (inn) теперь отель «Union Hotel» с флагом США.
  </details>

* Кто такая Джудит Гарднер (Judith Gardner) и как она связана с Рипом?
  <details> 
  <summary>ответ:</summary>
  Джудит Гарднер — дочь Рипа. Она говорит, что её отец ушёл 20 лет назад и не вернулся.
  </details>

* Сколько лет проспал Рип?
  <details> 
  <summary>ответ:</summary>
  Он проспал 20 лет.
  </details>

* Кто такой Генри Гудзон (Henry Hudson) согласно легенде?
  <details> 
  <summary>ответ:</summary>
  Согласно легенде, Генри Гудзон возвращается к своей реке каждые 20 лет, и он со своими людьми играет в кегли в горах.
  </details>

* Что такое Декларация независимости (Declaration of Independence) и кто её подписал?
  <details> 
  <summary>ответ:</summary>
  Декларация независимости — важный документ, который провозглашает 13 колоний свободными и независимыми штатами. Её подписал Джордж Вашингтон (George Washington) и его друзья 4 июля.
  </details>
</details>

<details> 
<summary>Проверить понимание текста (The Legend of Sleepy Hollow)</summary>

* Как зовут учителя и где он работает?
  <details> 
  <summary>ответ:</summary>
  Учителя зовут Икабод Крейн (Ichabod Crane). Он работает в школе в долине Сонная Лощина (Sleepy Hollow).
  </details>

* Как выглядит Икабод Крейн?
  <details> 
  <summary>ответ:</summary>
  Он высокий и очень худой (tall and very thin), с длинными руками и ногами, большими ушами, зелёными глазами и длинным носом.
  </details>

* Кто такая Катрина Ван Тассел (Katrina Van Tassel) и почему Икабод хочет на ней жениться?
  <details> 
  <summary>ответ:</summary>
  Катрина — красивая девушка из богатой семьи. Икабод хочет на ней жениться, потому что ему нравится её богатство (her father's riches) и еда.
  </details>

* Кто такой Бром Боунс (Brom Bones) и почему он соперник Икабода?
  <details> 
  <summary>ответ:</summary>
  Бром Боунс — высокий, сильный и красивый парень, герой Сонной Лощины. Он тоже хочет жениться на Катрине.
  </details>

* Что происходит, когда Икабод возвращается домой после вечеринки у Ван Тасселов?
  <details> 
  <summary>ответ:</summary>
  Он встречает Всадника без головы (Headless Horseman), который преследует его и бросает в него свою голову (которая оказывается тыквой).
  </details>

* Куда Икабод Крейн делся после той ночи?
  <details> 
  <summary>ответ:</summary>
  Его никто не мог найти. Позже старый фермер сказал, что Икабод жив и здоров и стал конгрессменом (congressman). Он уехал, потому что Катрина хотела выйти замуж за Брома.
  </details>

* Кто знает правдивую историю о Всаднике без головы?
  <details> 
  <summary>ответ:</summary>
  Бром Боунс (Brom Bones) знает правду, но это его секрет (it's Brom's secret).
  </details>
</details>


<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Rip_Van_Winkle_and_The_Legend_of_Sleepy_Hollow/Rip_Van_Winkle_and_The_Legend_of_Sleepy_Hollow.vtt";
        const audio = "/listen/A1/Beginner/Rip_Van_Winkle_and_The_Legend_of_Sleepy_Hollow/Rip_Van_Winkle_and_The_Legend_of_Sleepy_Hollow.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>