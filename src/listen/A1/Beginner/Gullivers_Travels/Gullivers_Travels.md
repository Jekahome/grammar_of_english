# Listen: Gulliver's Travels
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

* Как зовут главного героя и откуда он родом?
  <details> 
  <summary>ответ:</summary>
  Главного героя зовут Лемюэль Гулливер (Lemuel Gulliver). Он родом из северной Англии (the north of England).
  </details>

* Что происходит с кораблём Гулливера и где он оказывается после кораблекрушения?
  <details> 
  <summary>ответ:</summary>
  Корабль разбивается у берегов Вандименовой земли (Van Demon's land). Гулливер просыпается в стране Лилипутии (Lilliput), где все люди ростом около шести дюймов (six inches tall).
  </details>

* Как Гулливер завоёвывает доверие лилипутов?
  <details> 
  <summary>ответ:</summary>
  Он не убивает шестерых лилипутов, которые стреляли в него стрелами, а отпускает их. После этого лилипуты начинают ему доверять.
  </details>

* Из-за чего идёт война между Лилипутией и Блефуску (Blefuscu)?
  <details> 
  <summary>ответ:</summary>
  Из-за яиц (eggs): одни разбивают яйцо с тупого конца (Big-Endians), другие — с острого (Little-Endians). Император Блефуску поддерживает «тупоконечников».
  </details>

* Как Гулливер помогает императору Лилипутии в войне?
  <details> 
  <summary>ответ:</summary>
  Он переплывает канал, привязывает верёвки к кораблям Блефуску и перетаскивает их в Лилипутию.
  </details>

* Почему Гулливер вынужден бежать из Лилипутии?
  <details> 
  <summary>ответ:</summary>
  Император Лилипутии хочет, чтобы Гулливер уничтожил Блефуску, но Гулливер отказывается убивать людей. Император и его друзья решают убить Гулливера.
  </details>

* Куда Гулливер попадает во время своего второго путешествия и как называются жители этой страны?
  <details> 
  <summary>ответ:</summary>
  Он попадает в страну великанов Бробдингнег (Broodingnag). Жителей называют «бробдингнегцы» (Broodingnagians).
  </details>

* Кто такая Глюмдальклитч (Glumdalclitch) и как она заботится о Гулливере?
  <details> 
  <summary>ответ:</summary>
  Глюмдальклитч — девятилетняя дочь фермера. Она делает для Гулливера маленькую кроватку, шьёт рубашки, учит его языку и заботится о нём.
  </details>

* Как Гулливер покидает Бробдингнег?
  <details> 
  <summary>ответ:</summary>
  Гигантская птица (giant bird) уносит его домик-коробку, который падает в море. Его спасает английский корабль.
  </details>

* Что такое Лапута (Laputa) и кто на ней живёт?
  <details> 
  <summary>ответ:</summary>
  Лапута — летающий остров (flying island). На нём живут люди, которые увлекаются математикой, музыкой и астрологией, но совершенно непрактичны.
  </details>

* Что Гулливер видит в академии Лагадо (Lagado)?
  <details> 
  <summary>ответ:</summary>
  Он видит профессоров с безумными идеями: извлекать солнечный свет из огурцов, строить дома с крыши, изобретать язык без слов и т.д.
  </details>

* Кого Гулливер встречает на Волшебном острове (Magical Island)?
  <details> 
  <summary>ответ:</summary>
  Он встречает призраков (ghosts) исторических личностей: Александра Македонского, Ганнибала, Цезаря, Брута, Гомера, Аристотеля и других.
  </details>

* Кто такие бессмертные (immortals) в Луггнагге (Luggnagg) и почему они несчастны?
  <details> 
  <summary>ответ:</summary>
  Бессмертные живут вечно, но они злые, уродливые, ревнивые, болтливые и не имеют друзей.
  </details>

* Как Гулливер возвращается в Англию в конце книги?
  <details> 
  <summary>ответ:</summary>
  Он находит голландский корабль, притворяется голландцем и добирается до Амстердама, а оттуда в Англию.
  </details>
</details>


<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/Gullivers_Travels/Gullivers_Travels.vtt";
        const audio = "/listen/A1/Beginner/Gullivers_Travels/Gullivers_Travels.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>