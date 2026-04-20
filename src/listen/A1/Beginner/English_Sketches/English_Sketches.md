# Listen: English Sketches
 
<div id="listen-container"></div>

<br>
<details> 
<summary>Проверить понимание текста</summary>

## The Ticket Inspector

* Почему контролёр попросил пассажира покинуть поезд?
  <details> 
  <summary>ответ:</summary>
  У пассажира не было билета (He hasn't got a ticket).
  </details>

## The Restaurant

* Какие названия и имена не соответствовали типу ресторана (французский)?
  <details> 
  <summary>ответ:</summary>
  Название итальянское (Trattoria Romantica), испанский гитарист с немецким именем, греческий менеджер.
  </details>

* Что менеджер ресторана попросил заплатить за стулья и стол?
  <details> 
  <summary>ответ:</summary>
  £6.30 за стул и £37 за стол (total £49.60).
  </details>

* Что предложил менеджер, когда посетители отказались от еды?
  <details> 
  <summary>ответ:</summary>
  Бутерброд (sandwich) с песком (sand) из своего кармана.
  </details>

## The Doctor

* Кем представился главный герой доктору Ватсону?
  <details> 
  <summary>ответ:</summary>
  Студентом-доктором (student, doctor), который хочет посмотреть, как доктор работает.
  </details>

* Какие вопросы из списка доктор Ватсон задал пациенту?
  <details> 
  <summary>ответ:</summary>
  «Вы миссис Элизабет Робинсон?», «Это ваш первый ребёнок?», «Какая столица Уругвая?».
  </details>

* Какое лекарство доктор Ватсон прописал пациенту?
  <details> 
  <summary>ответ:</summary>
  «Универсальное средство от кашля и боли в руке» (Universal Cough and Arm Remedy).
  </details>

## The Tax Office

* Как чиновник из налоговой службы пытался найти настоящего мистера Джонса?
  <details> 
  <summary>ответ:</summary>
  Он сказал, что человек, который не заплатил налоги, должен £5,000.
  </details>

* Кем оказались трое мужчин в комнате?
  <details> 
  <summary>ответ:</summary>
  Все трое назвались Чарльзом Эдвардом Джонсом из Кардиффа с тремя детьми.
  </details>

* Какое наследство получил настоящий мистер Джонс?
  <details> 
  <summary>ответ:</summary>
  Он стал полумиллионером (half a millionaire), разделив наследство с кузиной Джейн.
  </details>

## The Funny Shoe Store

* На что пожаловалась женщина в обувном магазине?
  <details> 
  <summary>ответ:</summary>
  Один ботинок красный, а другой зелёный (not the same color as each other).
  </details>

* Как продавец решил проблему?
  <details> 
  <summary>ответ:</summary>
  Он предложил женщине купить вторую пару таких же ботинок, чтобы получились две нормальные пары.
  </details>

## The Strange Hotel

* Что администратор отеля сказал о рубашке гостя?
  <details> 
  <summary>ответ:</summary>
  Она ужасная (horrible), но хорошо отвлекает внимание от его шорт, которые ещё хуже.
  </details>

* Куда устроился администратор после увольнения из этого отеля?
  <details> 
  <summary>ответ:</summary>
  В отель по соседству (the hotel next door).
  </details>

## A Ticket to Birmingham

* Кому звонил билетный кассир, чтобы узнать расписание поездов?
  <details> 
  <summary>ответ:</summary>
  Дэйву (Dave), который работает в кафе, а не на вокзале.
  </details>

* Кем оказался кассир в конце диалога?
  <details> 
  <summary>ответ:</summary>
  Машинистом поезда (the driver).
  </details>

## Jerry Thatcher's Party

* Какую книгу посоветовал дворецкий Джерри, чтобы помочь ему общаться с девушками?
  <details> 
  <summary>ответ:</summary>
  «Английский для всех ситуаций» (English for all situations).
  </details>

## The Mad Dentist

* Какими методами новый зубной врач пытался лечить пациентов?
  <details> 
  <summary>ответ:</summary>
  Верёвкой (string) и молотком (hammer).
  </details>

* Что сделал пациент, когда врач достал шприц?
  <details> 
  <summary>ответ:</summary>
  Он сбежал вместе с другим пациентом.
  </details>

## Tourist Information

* Какую плату установил сотрудник туристического информационного центра за свои услуги?
  <details> 
  <summary>ответ:</summary>
  £5 за вопрос (£5 a question).
  </details>

* Сколько турист заплатил в итоге и за что?
  <details> 
  <summary>ответ:</summary>
  £100 — за ответ на вопрос «Сколько вам лет?» (26).
  </details>

## The Superlative Vacuum Cleaner

* Какими эпитетами продавец описывал свой пылесос?
  <details> 
  <summary>ответ:</summary>
  Самый быстрый, чистый, дешёвый, маленький, умный, экономичный, эффективный, красивый, революционный.
  </details>

* Кто в итоге продал пылесос и кому?
  <details> 
  <summary>ответ:</summary>
  Женщина продала пылесос продавцу (She sold the vacuum cleaner to the salesman).
  </details>

## Jerry Brown's Driving License

* Какие проблемы были у Джерри перед экзаменом по вождению?
  <details> 
  <summary>ответ:</summary>
  У него был только один урок, плохое зрение, и он взял чужие очки.
  </details>

</details>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
  
        const container = document.getElementById("listen-container");
        const subtitles = "/listen/A1/Beginner/English_Sketches/English_Sketches.vtt";
        const audio = "/listen/A1/Beginner/English_Sketches/English_Sketches.opus";
   
        const listen = new Listen({container:container, path_sub:subtitles, path_audio:audio, pageSize:10});
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>