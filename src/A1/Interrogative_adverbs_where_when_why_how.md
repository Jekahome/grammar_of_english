# Questions: Interrogative Adverbs - where, when, why, how
**Наречия-вопросительные слова** используются для получения информации о времени, месте, причине или способе действия.

* **where** — где? куда?
* **when** — когда?
* **why** — почему?
* **how** — как?

### В английском языке наречия-вопросительные слова играют важную роль в различных типах вопросов:
* **Специальный** (A2–B1 wh-question) — для выяснения конкретной информации с использованием наречий.
    * Where do you live? — Где ты живешь?
* **Общие сложные и косвенные вопросы** (A2)
    * Do you know why she is late? — Ты знаешь, почему она опоздала?
    * Can you explain how this works? — Можешь объяснить, как это работает?
    * Can you tell me where the bus stop is? — Ты можешь сказать, где находится автобусная остановка?
    * Do you know when he is coming? — Ты знаешь, когда он придет?
    * I wonder when the meeting will start. — Мне интересно, когда начнется встреча.
    * Could you tell me where the bus stop is? — Не могли бы вы подсказать, где находится автобусная остановка?

## Наречие "where" (где? куда?)
Используется для вопросов о месте или направлении:

* Where is the bus stop? — Где находится автобусная остановка?
* Where are you going? — Куда ты идешь?
## Наречие "when" (когда?)
Используется для вопросов о времени:

* When is your birthday? — Когда твой день рождения?
* When will the meeting start? — Когда начнется встреча?
## Наречие "why" (почему?)
Используется для вопросов о причине:

* Why are you late? — Почему ты опоздал?
* Why did you leave early? — Почему ты ушел рано?
## Наречие "how" (как?)
Используется для вопросов о способе действия или состоянии:

* How are you? — Как ты?
* How did you do that? — Как ты это сделал?

## Примеры вопросов с использованием where, when, why, how
* Where does your brother work? — Где работает твой брат?
* When did you finish your homework? — Когда ты закончил свою домашнюю работу?
* Why are you laughing? — Почему ты смеешься?
* How do you get to school? — Как ты добираешься до школы?

---


<h2>Exercise: listen and write Question Interrogative Adverbs</h2>
<div id="control_general_question_interrogative_adv"></div>
<div id="listen_and_write_question_interrogative_adv"></div>

<script>   

const exercises_easy_listen_and_write_question_interrogative_adv = [
    ["Where do you live? — I live in a village.", "Где ты живёшь? — Я живу в деревне."],
    ["When do they play football? — They play football on weekends.", "Когда они играют в футбол? — Они играют по выходным."],
    ["Why do you study English? — Because I want to travel.", "Почему ты учишь английский? — Потому что хочу путешествовать."],
    ["How do you go to school? — I go by bus.", "Как ты добираешься до школы? — Я еду на автобусе."],
    ["Where did you travel last summer? — I travelled to the beach.", "Куда ты путешествовал прошлым летом? — Я ездил на пляж."],
    ["When did she visit the shop? — She visited it yesterday.", "Когда она сходила в магазин? — Она сходила вчера."],
    ["Why did they close the shop? — Because it was late.", "Почему они закрыли магазин? — Потому что было поздно."],
    ["How did he catch the bus? — He ran quickly.", "Как он успел на автобус? — Он быстро побежал."],
    ["Where will you go in December? — I will go to the village.", "Куда ты поедешь в декабре? — Я поеду в деревню."],
    ["When will they visit us? — They will visit next weekend.", "Когда они нас посетят? — Они приедут на следующих выходных."],
    ["Why will she study English? — Because she wants to work in another country.", "Почему она будет учить английский? — Потому что она хочет работать в другой стране."],
    ["How will we travel? — By bus.", "Как мы будем путешествовать? — На автобусе."],
    ["Where are you going now? — I’m going to the shop.", "Куда ты идёшь сейчас? — Я иду в магазин."],
    ["When is she studying? — She is studying now.", "Когда она учится? — Она учится сейчас."],
    ["Why are they laughing? — Because it’s funny.", "Почему они смеются? — Потому что это смешно."],
    ["How are you feeling today? — I’m feeling great.", "Как ты себя чувствуешь сегодня? — Я чувствую себя прекрасно."],
    ["Where don’t you live? — I don’t live in the city.", "Где ты не живёшь? — Я не живу в городе."],
    ["When don’t they play football? — They don’t play on weekdays.", "Когда они не играют в футбол? — Они не играют в будни."],
    ["Why don’t you study English every day? — Because I’m busy.", "Почему ты не учишь английский каждый день? — Потому что я занят."],
    ["How don’t you go to school? — I don’t go by bus.", "Как ты не добираешься до школы? — Я не езжу на автобусе."],
    ["Do you live in the village? — Yes, I do.", "Ты живёшь в деревне? — Да."],
    ["Do they play football on weekends? — Yes, they do.", "Они играют по выходным? — Да."],
    ["Do you study English every day? — Yes, I do.", "Ты учишь английский каждый день? — Да."],
    ["Do you go to school by bus? — Yes, I do.", "Ты ездишь на автобусе? — Да."],
    ["Where didn’t you travel last summer? — I didn’t travel to Paris.", "Куда ты не ездил прошлым летом? — Я не ездил в Париж."],
    ["When didn’t she visit the shop? — She didn’t visit it yesterday.", "Когда она не ходила в магазин? — Она не ходила вчера."],
    ["Why didn’t they close the shop? — Because it wasn’t late.", "Почему они не закрыли магазин? — Потому что было не поздно."],
    ["How didn’t he catch the bus? — He didn’t run quickly.", "Как он не успел на автобус? — Он не побежал быстро."],
    ["Did you travel to the beach last summer? — Yes, I did.", "Ты ездил на пляж прошлым летом? — Да."],
    ["Did she visit the shop yesterday? — Yes, she did.", "Она сходила в магазин вчера? — Да."],
    ["Did they close the shop? — Yes, they did.", "Они закрыли магазин? — Да."],
    ["Did he run quickly? — Yes, he did.", "Он побежал быстро? — Да."],
    ["Where won’t you go in December? — I won’t go to the city.", "Куда ты не поедешь в декабре? — Я не поеду в город."],
    ["When won’t they visit us? — They won’t visit on Monday.", "Когда они нас не посетят? — Они не приедут в понедельник."],
    ["Why won’t she study English? — Because she will be busy.", "Почему она не будет учить английский? — Потому что будет занята."],
    ["How won’t we travel? — We won’t travel by train.", "Как мы не будем путешествовать? — Мы не будем путешествовать на поезде."],
    ["Will you go to the village in December? — Yes, I will.", "Ты поедешь в деревню в декабре? — Да."],
    ["Will they visit us on the weekend? — Yes, they will.", "Они приедут на выходных? — Да."],
    ["Will she study English? — Yes, she will.", "Она будет учить английский? — Да."],
    ["Will we travel by bus? — Yes, we will.", "Мы будем ехать на автобусе? — Да."],
    ["Where aren’t you going now? — I’m not going to the park.", "Куда ты сейчас не идёшь? — Я не иду в парк."],
    ["When aren’t they studying? — They aren’t studying in the evening.", "Когда они не учатся? — Они не учатся вечером."],
    ["Why aren’t you listening? — Because I’m busy.", "Почему ты не слушаешь? — Потому что я занят."],
    ["How aren’t they working? — They aren’t working quickly.", "Как они не работают? — Они работают не быстро."],
    ["Are you going to the shop now? — Yes, I am.", "Ты идёшь в магазин сейчас? — Да."],
    ["Is she studying now? — Yes, she is.", "Она учится сейчас? — Да."],
    ["Are they laughing? — Yes, they are.", "Они смеются? — Да."],
    ["Are you feeling good today? — Yes, I am.", "Ты чувствуешь себя хорошо сегодня? — Да."],
    ["Where do you travel in October? — I travel to the village.", "Куда ты путешествуешь в октябре? — Я путешествую в деревню."],
    ["Where did they visit last weekend? — They visited the beach.", "Куда они ездили в прошлые выходные? — Они ездили на пляж."],
    ["Where will she study in December? — She will study at the farm.", "Где она будет учиться в декабре? — Она будет учиться на ферме."],
    ["Where are you going now? — I’m going to the shop.", "Куда ты идёшь сейчас? — Я иду в магазин."],
    ["When do you catch the bus? — I catch it in the morning.", "Когда ты садишься на автобус? — Утром."],
    ["When did he finish the lesson? — He finished it yesterday.", "Когда он закончил урок? — Вчера."],
    ["When will they choose a date? — They will choose it next week.", "Когда они выберут дату? — На следующей неделе."],
    ["When are we having lunch? — We are having lunch now.", "Когда мы обедаем? — Сейчас."],
    ["Why do you listen to music? — Because I enjoy it.", "Почему ты слушаешь музыку? — Потому что мне это нравится."],
    ["Why did she close the shop? — Because it was late.", "Почему она закрыла магазин? — Потому что было поздно."],
    ["Why will they travel in August? — Because they want to enjoy summer.", "Почему они поедут в августе? — Потому что хотят насладиться летом."],
    ["How do you catch the bus? — I catch it quickly.", "Как ты садишься на автобус? — Быстро."],
    ["How did he draw a flower? — He drew it with a pencil.", "Как он нарисовал цветок? — Он нарисовал его карандашом."],
    ["How will she recognize the place? — She will check the map.", "Как она узнает место? — Она проверит карту."],
    ["How are they enjoying the lesson? — They are enjoying it a lot.", "Как они наслаждаются уроком? — Им очень нравится."],
];
 
let g_practice = null;
 

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
 
        let editor_symbol = new EditorSymbol({callback: checkAnswerGeneralQuestionInterrogativeAdverbs, suffix_id: 'question_interrogative_adv'});

        g_practice = new Practice({
            el_listen_and_write: document.getElementById('listen_and_write_question_interrogative_adv'), 
            el_exercise_control: document.getElementById('control_general_question_interrogative_adv'), 
            exercises_listen_and_write: getRandomMix(exercises_easy_listen_and_write_question_interrogative_adv),
            editor_symbol: editor_symbol
        });
        g_practice.genExercisesListenAndWrite();
     
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
function checkAnswerGeneralQuestionInterrogativeAdverbs(value){
    value = textNormalize(value);
    return value==g_practice.getAnswer();
}
 
</script>      
     

<style>
table {
  margin: 0px !important;  
  border-collapse: collapse;
}
</style>
