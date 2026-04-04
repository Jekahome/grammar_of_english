# Listen: The Troy Stone

<div id="listen-container"></div>

<details> 
<summary>Проверить понимание текста</summary>

* Где семья Джексонов проводит отпуск и что они посещают в начале истории?
  <details> 
  <summary>ответ:</summary>
  Они в отпуске в Турции (Turkey), в Стамбуле. Они посещают город Троя (the city of Troy).
  </details>

* Как зовут детей в семье и сколько им лет?
  <details> 
  <summary>ответ:</summary>
  Марк (Mark) — 13 лет, его сестра Фэй (Fay) — 12 лет.
  </details>

* Что Марк находит на земле под деревом в Трое?
  <details> 
  <summary>ответ:</summary>
  Он находит плоский жёлтый камень (a flat, yellow stone).
  </details>

* Что происходит с Марком, когда он поднимает камень?
  <details> 
  <summary>ответ:</summary>
  Он видит яркий белый свет (white light), слышит сильный ветер, а затем оказывается на пляже среди сотен кораблей и воинов.
  </details>

* Кто такой Андрос (Andros) и что греки строят?
  <details> 
  <summary>ответ:</summary>
  Андрос — высокий мужчина с короткой коричневой бородой. Греки строят большого деревянного коня (big wooden horse).
  </details>

* Как Марк помогает грекам?
  <details> 
  <summary>ответ:</summary>
  Он отдаёт свой жёлтый камень для второго глаза коня (for the second eye of the horse).
  </details>

* Куда Марка приглашают в награду?
  <details> 
  <summary>ответ:</summary>
  Его приглашают спрятаться внутри коня вместе с греческими воинами.
  </details>

* Кто такая Ана (Ana) и что она делает?
  <details> 
  <summary>ответ:</summary>
  Ана — пожилая женщина, повариха (cook). Она рассказывает Марку истории о Греции, войне и прекрасной принцессе Елене (Helen).
  </details>

* Что происходит, когда троянцы втаскивают коня в город?
  <details> 
  <summary>ответ:</summary>
  Троянцы празднуют, думают, что греки уплыли, а затем ложатся спать. Ночью греки вылезают из коня, открывают ворота, и город загорается (Troy is on fire).
  </details>

* Кого Марк видит бегущей по стенам Трои?
  <details> 
  <summary>ответ:</summary>
  Он видит прекрасную женщину — Елену Троянскую (Helen of Troy).
  </details>

* Как Марк возвращается в своё время?
  <details> 
  <summary>ответ:</summary>
  Его будит сестра Фэй: уже 4 часа дня, автобус уезжает через минуту.
  </details>

* Кого Марк видит у автобуса и что она говорит?
  <details> 
  <summary>ответ:</summary>
  Он видит пожилую женщину, которая продаёт маленьких деревянных коней. Она говорит ему: «До свидания, мальчик. Приходи ко мне снова однажды. Приходи ко мне снова», — те же слова, что говорила Ана.
  </details>
</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Started/The_Troy_Stone/The_Troy_Stone.vtt";
        const audio = "/listen/A1/Started/The_Troy_Stone/The_Troy_Stone.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>