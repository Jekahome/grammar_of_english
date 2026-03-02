# Questions - what, who, whom, whose
**Вопрос к подлежащему/дополнению**

* **what** - что?
* **who** - кто?
* **whom** - кого?
* **whose** - чей?

## Вопрос к подлежащему (who, what)
Подлежащее (The Subject) в английском предложении выражает лицо или предмет, который совершает действие, или же предмет или лицо, о котором идет речь в предложении.

**Who** при вопросе о подлежащем отвечает на вопрос "Кто?". Вспомогательный глагол не нужен.

**What** при вопросе о подлежащем отвечает на вопрос "Что?". Вспомогательный глагол не нужен.

Примеры:

* What helps you stay active? — Что помогает тебе оставаться активным?
* Who made a mess in my room? — Кто устроил беспорядок в моей комнате?
* Who can catch a taxi for me? — Кто может вызвать мне такси?
* What made Ann so happy? — Что сделало Энн такой счастливой?
* Who sings a song? — Кто поет песню?
* Who laughs at me at school? — Кто смеется надо мной в школе?

## Вопросы к объекту/дополнению (whom, what)
Whom и What используются для вопросов к дополнению.

Примеры:

* What are you reading? — Что ты читаешь?
* Who did you meet there? — Кого ты встретил там?
* What did the teacher read to the students? — Что преподаватель читал студентам?
* Who do you work for? — На кого ты работаешь?
* Whom did you call yesterday? — Кому ты звонил вчера?
* With whom are you going to the party? — С кем ты идешь на вечеринку?
* To whom did you send the letter? — Кому ты отправил письмо?
* Whom did she meet at the park? — Кого она встретила в парке?
* Whom should I ask for help? — Кого мне спросить о помощи?

## Whose (Чей?)
Чтобы задать вопрос "Чей?" (Чья? Чье? Чьи?) используют Whose

* Whose house is this? — Чей это дом?
* Whose books are these? — Чьи это книги?

[Виды вопросов в английском языке](https://skyeng.ru/articles/vidy-voprosov-v-anglijskom-yazyke/)

---



<h2>Exercise: listen and write Question</h2>
<div id="control_general_question_with_what"></div>
<div id="listen_and_write_question_with_what"></div>

<script>   

const exercises_easy_listen_and_write_question_with_what = [
    ["What do you drink in the morning? — I drink coffee.", "Что ты пьёшь утром? — Я пью кофе."],
    ["What did they draw yesterday? — They drew a flower.", "Что они нарисовали вчера? — Они нарисовали цветок."],
    ["What will she choose in December? — She will choose a date.", "Что она выберет в декабре? — Она выберет дату."],
    ["What are you listening to now? — I’m listening to a band.", "Что ты слушаешь сейчас? — Я слушаю группу."],
    
    ["Who catches the bus every morning? — My brother catches it.", "Кто садится на автобус каждое утро? — Мой брат садится."],
    ["Who visited the farm last weekend? — My friends visited it.", "Кто посетил ферму в прошлые выходные? — Мои друзья посетили её."],
    ["Who will finish the lesson tomorrow? — The teacher will finish it.", "Кто закончит урок завтра? — Учитель закончит."],
    ["Who is drawing now? — The student is drawing.", "Кто сейчас рисует? — Студент рисует."],
    
    ["Whom did you help yesterday? — I helped my friend.", "Кому ты помог вчера? — Я помог своему другу."],
    ["Whom will they visit in August? — They will visit their grandparents.", "Кого они посетят в августе? — Они посетят своих бабушку и дедушку."],
    ["Whom are you calling now? — I’m calling my teacher.", "Кого ты сейчас зовёшь по телефону? — Я звоню своему учителю."],
    ["Whom does she recognize? — She recognizes her friend.", "Кого она узнаёт? — Она узнаёт своего друга."],
    
    ["Whose book do you read? — I read my friend’s book.", "Чью книгу ты читаешь? — Я читаю книгу своего друга."],
    ["Whose shop did they close yesterday? — They closed John’s shop.", "Чей магазин они закрыли вчера? — Они закрыли магазин Джона."],
    ["Whose ticket will you check? — I will check my friend’s ticket.", "Чей билет ты проверишь? — Я проверю билет своего друга."],
    ["Whose lesson are you studying now? — I’m studying my English lesson.", "Чьё занятие ты сейчас изучаешь? — Я изучаю свой урок английского."],
    
    ["What do they check every morning? — They check the internet.", "Что они проверяют каждое утро? — Они проверяют интернет."],
    ["What did you forget yesterday? — I forgot my key.", "Что ты забыл вчера? — Я забыл свой ключ."],
    ["What will we study tomorrow? — We will study a lesson.", "Что мы будем изучать завтра? — Мы будем изучать урок."],
    ["What are they enjoying now? — They are enjoying football.", "Что они сейчас наслаждаются? — Они наслаждаются футболом."],
    
    ["Who answers the question? — The student answers the question.", "Кто отвечает на вопрос? — Студент отвечает на вопрос."],
    ["Who visited the beach last summer? — My parents visited the beach.", "Кто посетил пляж прошлым летом? — Мои родители посетили пляж."],
    ["Who will catch the bus tomorrow? — My brother will catch it.", "Кто завтра сядет на автобус? — Мой брат сядет."],
    ["Who is singing now? — The band is singing.", "Кто поёт сейчас? — Группа поёт."],
    
    ["Whom do you represent? — I represent my school.", "Кого ты представляешь? — Я представляю свою школу."],
    ["Whom did she fight with yesterday? — She fought with her friend.", "С кем она сражалась вчера? — Она сражалась со своим другом."],
    ["Whom will they visit next weekend? — They will visit their grandparents.", "Кого они посетят в следующие выходные? — Они посетят своих бабушку и дедушку."],
    ["Whom are you helping now? — I’m helping my teacher.", "Кому ты помогаешь сейчас? — Я помогаю своему учителю."],
    
    ["Whose shoes are these? — They are my shoes.", "Чьи это туфли? — Это мои туфли."],
    ["Whose classroom did they visit yesterday? — They visited our classroom.", "Чей класс они посетили вчера? — Они посетили наш класс."],
    ["Whose lunch will you eat tomorrow? — I will eat my lunch.", "Чей обед ты будешь есть завтра? — Я буду есть свой обед."],
    ["Whose football is this? — It’s my friend’s football.", "Чей это футбольный мяч? — Это мяч моего друга."],
];
 
let g_practice = null;
 

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
 
 {
        let editor_img = new EditorImg({callback: checkAnswerGeneralQuestionWithWhat, suffix_id: 'question_with_what'});
        let editor_symbol = new EditorSymbol({callback: checkAnswerGeneralQuestionWithWhat, suffix_id: 'question_with_what'});

        g_practice = new Practice({
            el_listen_and_write: document.getElementById('listen_and_write_question_with_what'), 
            el_exercise_control: document.getElementById('control_general_question_with_what'), 
            exercises_listen_and_write: getRandomMix(exercises_easy_listen_and_write_question_with_what),
            editor_img: editor_img,
            editor_symbol: editor_symbol
        });
        g_practice.genExercisesListenAndWriteTest();
     
 }
  
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
function checkAnswerGeneralQuestionWithWhat(value){
    value = g_practice.textNormalize(value);
    return value==g_practice.getAnswer();
}
 
</script>   
   
<style>
table {
  margin: 0px !important;  
  border-collapse: collapse;
}
</style>