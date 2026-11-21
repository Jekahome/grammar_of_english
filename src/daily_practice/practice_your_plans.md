# Practice your plans

1. **What are you doing now?** (Что вы делаете сейчас?) — Present Continuous.
    - I'm making some coffee. — Я готовлю кофе.
    - I'm studying English. — Я изучаю английский.
    - I'm listening to music. — Я слушаю музыку.
    - I'm working on my computer. — Я работаю за компьютером.
    - Nothing special. I'm just relaxing. — Ничего особенного. Я просто отдыхаю.

2. **What do you usually do every day?** (Что вы обычно делаете каждый день?) — Present Simple.
    - I usually get up at 7 AM. — Обычно я встаю в 7 утра.
    - I drink coffee every morning. — Я пью кофе каждое утро.
    - I go to work by bus. — Я езжу на работу на автобусе.
    - I study English every day. — Я изучаю английский каждый день.
    - I usually cook dinner at home. — Обычно я готовлю ужин дома.
    - I don't usually watch TV. — Обычно я не смотрю телевизор.

3. **What did you do yesterday?** (Что вы делали вчера?) — Past Simple.
    - I worked yesterday. — Вчера я работал(а).
    - I went to the supermarket. — Я ходил(а) в супермаркет.
    - I had a sandwich for lunch yesterday. — Вчера на обед я ел(а) сэндвич.
    - I didn't do much yesterday. — Вчера я почти ничего не делал(а).
    - I met my friend for coffee. — Я встретился(-ась) с другом за чашкой кофе.
    - I was very tired, so I went to bed early. — Я очень устал(а), поэтому рано лёг (легла) спать.

4. **What are you going to do tomorrow?** (Что вы собираетесь делать завтра?) — Future (going to / will).
    - I'm going to go to the gym. — Я собираюсь пойти в спортзал.
    - I'll cook dinner tomorrow. — Завтра я приготовлю ужин.
    - I'm going to call my friend tomorrow. — Я собираюсь позвонить другу завтра.
    - I'll probably go for a walk. — Наверное, я пойду погулять.
    - I'm going to study English tomorrow. — Завтра я собираюсь заниматься английским.
    - I haven't made any plans for tomorrow. — Я ещё ничего не запланировал(а) на завтра.
    - I will call my friend tomorrow. — Я позвоню другу завтра.
    - I am going to call my friend tomorrow. — Я собираюсь позвонить другу завтра.

5. **What are your plans for today?** (Какие у вас планы на сегодня?) — Планы и намерения (going to / will / need to / want to / have to).
    - I'm going to work today. — Сегодня я собираюсь работать.
    - I have an English lesson at 6 PM. — У меня урок английского в 6 вечера.
    - I need to go shopping. — Мне нужно сходить за покупками.
    - I want to go for a walk. — Я хочу пойти погулять.
    - I have to finish my homework. — Мне необходимо закончить домашнее задание.
    - I'm meeting a friend this evening. — Сегодня вечером я встречаюсь с другом.
    - I'll probably stay at home. — Наверное, я останусь дома.

 
<i>Для проверки корректности ввода, используйте расширение браузера [Quillbot](https://chromewebstore.google.com/detail/quillbot-ai-writing-assis/iidnbdjijdkbmajdffnidomddglmieko)</i>

---

### Make five sentences for the verb

<div id="control"></div>
<div id="listen_and_write"></div>


<script>
 
const a1_daily_verbs = [
    [
        "have", "иметь", 
        ["having", "I'm having breakfast in the kitchen."], 
        ["have", "I usually have breakfast at eight."], 
        ["had", "I had a sandwich for lunch yesterday."], 
        ["going to have", "I'm going to have coffee with a friend tomorrow."], 
        ["going to have", "I'm going to have lunch with my sister today."]
    ] ,
    ["do", "делать", ["doing", "I'm doing my homework right now."], ["do", "I do my homework after dinner every day."], ["did", "I did the dishes after dinner yesterday."], ["going to do", "I'm going to do some exercise tomorrow morning."], ["going to do", "I'm going to do the laundry this afternoon."]] ,
    ["go", "идти, ехать", ["going", "I'm going to the supermarket now."], ["go", "I go to work by bus on weekdays."], ["went", "I went to the library yesterday."], ["going to go", "I'm going to go to the beach tomorrow."], ["going to go", "I'm going to go to the gym this evening."]] ,
    ["get", "получать, попасть, становится", ["getting", "I'm getting ready for work."], ["get", "I usually get home before seven."], ["got", "I got home late yesterday."], ["going to get", "I'm going to get up early tomorrow."], ["going to get", "I'm going to get some milk on my way home."]] ,
    ["make", "делать, производить, заставлять", ["making", "I'm making a cup of tea."], ["make", "I make coffee every morning."], ["made", "I made a salad yesterday."], ["going to make", "I'm going to make pancakes tomorrow morning."], ["going to make", "I'm going to make dinner for my family tonight."]] ,
    ["take", "брать, взять", ["taking", "I'm taking a short break."], ["take", "I take the train to work twice a week."], ["took", "I took some photos yesterday."], ["going to take", "I'm going to take a walk after breakfast tomorrow."], ["going to take", "I'm going to take the bus to work today."]] ,
    ["come", "приехать, приходить", ["coming", "I'm coming home from school now."], ["come", "I come home for lunch on Fridays."], ["came", "I came to the office early yesterday."], ["going to come", "I'm going to come to your house tomorrow."], ["going to come", "I'm going to come back before dinner today."]] ,
    ["look", "посмотреть, поискать, выглядеть", ["looking", "I'm looking for my keys."], ["look", "I look at my calendar every morning."], ["looked", "I looked at old photos yesterday."], ["going to look", "I'm going to look for a birthday present tomorrow."], ["going to look", "I'm going to look at some new shoes today."]] ,
    ["use", "использовать, пользоваться", ["using", "I'm using my laptop for work."], ["use", "I use my laptop every day."], ["used", "I used my phone to check the time yesterday."], ["going to use", "I'm going to use my new notebook tomorrow."], ["going to use", "I'm going to use the washing machine today."]] ,
    ["find", "находить, обрести", ["finding", "I'm finding new places on the map."], ["find", "I often find useful recipes online."], ["found", "I found my missing book yesterday."], ["going to find", "I'm going to find a good recipe tomorrow."], ["going to find", "I'm going to find a quiet place to study today."]] ,
    ["give", "давать, придавать", ["giving", "I'm giving my dog some food."], ["give", "I give my dog fresh water every morning."], ["gave", "I gave my mother flowers yesterday."], ["going to give", "I'm going to give my teacher my homework tomorrow."], ["going to give", "I'm going to give my friend a book today."]] ,
    ["tell", "сказать, рассказывать", ["telling", "I'm telling my sister about my trip."], ["tell", "I tell my family about my day at dinner."], ["told", "I told my brother a funny story yesterday."], ["going to tell", "I'm going to tell my parents about my plans tomorrow."], ["going to tell", "I'm going to tell my friend the news today."]] ,
    ["work", "работать, трудитьс", ["working", "I'm working from home this morning."], ["work", "I usually work from nine to five."], ["worked", "I worked in the office yesterday."], ["going to work", "I'm going to work on my project tomorrow."], ["going to work", "I'm going to work until five today."]] ,
    ["leave", "оставлять, покидать", ["leaving", "I'm leaving the house now."], ["leave", "I leave home at eight every weekday."], ["left", "I left my keys on the table yesterday."], ["going to leave", "I'm going to leave for the airport tomorrow."], ["going to leave", "I'm going to leave work early today."]] ,
    ["put", "класть, ставить", ["putting", "I'm putting my clothes in the cupboard."], ["put", "I always put my keys near the door."], ["put", "I put my bag by the door yesterday."], ["going to put", "I'm going to put fresh flowers on the table tomorrow."], ["going to put", "I'm going to put some books on the shelf today."]] ,
    ["talk", "говорить, разговаривать", ["talking", "I'm talking to my friend on the phone."], ["talk", "I talk to my mother every evening."], ["talked", "I talked to my neighbour yesterday."], ["going to talk", "I'm going to talk to my parents tomorrow evening."], ["going to talk", "I'm going to talk to my teacher after class today."]] ,
    ["help", "помогать", ["helping", "I'm helping my brother with his homework."], ["help", "I help my brother with his homework on Sundays."], ["helped", "I helped a friend move yesterday."], ["going to help", "I'm going to help my colleague tomorrow."], ["going to help", "I'm going to help my mother in the kitchen today."]] ,
    ["start", "начинать, стартовать", ["starting", "I'm starting my English lesson now."], ["start", "I start work at nine every morning."], ["started", "I started work at nine yesterday."], ["going to start", "I'm going to start running again tomorrow."], ["going to start", "I'm going to start a new book today."]] ,
    ["run", "бежать, работать", ["running", "I'm running in the park."], ["run", "I run in the park three times a week."], ["ran", "I ran around the lake yesterday."], ["going to run", "I'm going to run before breakfast tomorrow."], ["going to run", "I'm going to run five kilometres this evening."]] ,
    ["play", "играть", ["playing", "I'm playing a board game with my friends."], ["play", "I play tennis on Saturdays."], ["played", "I played football yesterday."], ["going to play", "I'm going to play the guitar tomorrow."], ["going to play", "I'm going to play tennis this afternoon."]] ,
    ["write", "писать", ["writing", "I'm writing a message to my friend."], ["write", "I write a short diary entry every evening."], ["wrote", "I wrote a shopping list yesterday."], ["going to write", "I'm going to write in my diary tomorrow."], ["going to write", "I'm going to write an email after lunch today."]] ,
    ["sit", "сидеть (отдых с телом), заседать", ["sitting", "I'm sitting by the window."], ["sit", "I usually sit by the window on the train."], ["sat", "I sat next to my friend yesterday."], ["going to sit", "I'm going to sit near the front tomorrow."], ["going to sit", "I'm going to sit in the garden this afternoon."]] ,
    ["meet", "встречаться, соответствовать", ["meeting", "I'm meeting my friend at the café now."], ["meet", "I meet my friends for coffee every Friday."], ["met", "I met my cousin yesterday."], ["going to meet", "I'm going to meet my classmates tomorrow."], ["going to meet", "I'm going to meet my manager at three today."]] ,
    ["pay", "платить", ["paying", "I'm paying for my coffee."], ["pay", "I pay my bills at the start of each month."], ["paid", "I paid for dinner yesterday."], ["going to pay", "I'm going to pay for my ticket tomorrow."], ["going to pay", "I'm going to pay the electricity bill today."]] ,
    ["change", "изменить (что-то)", ["changing", "I'm changing my clothes."], ["change", "I change my clothes after work."], ["changed", "I changed my password yesterday."], ["going to change", "I'm going to change the sheets tomorrow."], ["going to change", "I'm going to change my plans for tonight."]] ,
    ["learn", "учиться", ["learning", "I'm learning some new English words."], ["learn", "I learn five new English words every day."], ["learned", "I learned how to cook rice yesterday."], ["going to learn", "I'm going to learn a new song tomorrow."], ["going to learn", "I'm going to learn ten words today."]] ,
    ["watch", "наблюдать, следить", ["watching", "I'm watching a video about animals."], ["watch", "I watch the news in the evening."], ["watched", "I watched the news yesterday."], ["going to watch", "I'm going to watch a football match tomorrow."], ["going to watch", "I'm going to watch a film tonight."]] ,
    ["stop", "остановить, останавливать", ["stopping", "I'm stopping for a short rest."], ["stop", "I stop for coffee on my way to work."], ["stopped", "I stopped at the shop yesterday."], ["going to stop", "I'm going to stop for coffee tomorrow."], ["going to stop", "I'm going to stop working at six today."]] ,
    ["speak", "говорить, выступать", ["speaking", "I'm speaking to my teacher now."], ["speak", "I speak English in class twice a week."], ["spoke", "I spoke to my boss yesterday."], ["going to speak", "I'm going to speak to the doctor tomorrow."], ["going to speak", "I'm going to speak English in class today."]] ,
    ["read", "читать", ["reading", "I'm reading an interesting story."], ["read", "I read a few pages before bed."], ["read", "I read three pages yesterday."], ["going to read", "I'm going to read on the train tomorrow."], ["going to read", "I'm going to read a newspaper after lunch today."]] ,
    ["open", "открыть", ["opening", "I'm opening a package."], ["open", "I open the windows every morning."], ["opened", "I opened the window yesterday."], ["going to open", "I'm going to open the shop at nine tomorrow."], ["going to open", "I'm going to open my emails after breakfast today."]] ,
    ["walk", "ходить, идти", ["walking", "I'm walking to the bus stop."], ["walk", "I walk to the supermarket on weekends."], ["walked", "I walked along the river yesterday."], ["going to walk", "I'm going to walk in the forest tomorrow."], ["going to walk", "I'm going to walk home after work today."]] ,
    ["buy", "покупать", ["buying", "I'm buying some fruit at the market."], ["buy", "I buy fresh bread on Mondays."], ["bought", "I bought some bread yesterday."], ["going to buy", "I'm going to buy a train ticket tomorrow."], ["going to buy", "I'm going to buy a new shirt today."]] ,
    ["wait", "ждать, ожидать, дожидаться", ["waiting", "I'm waiting for the bus."], ["wait", "I wait for the bus near my house every morning."], ["waited", "I waited for twenty minutes yesterday."], ["going to wait", "I'm going to wait at the station tomorrow."], ["going to wait", "I'm going to wait for my friend outside today."]] ,
    ["send", "отправлять, послать", ["sending", "I'm sending an email to my teacher."], ["send", "I send a message to my sister every Sunday."], ["sent", "I sent a birthday card yesterday."], ["going to send", "I'm going to send the documents tomorrow."], ["going to send", "I'm going to send a photo to my sister today."]] ,
    ["stay", "оставаться, остановиться", ["staying", "I'm staying at my friend's house this week."], ["stay", "I usually stay at home on Monday evenings."], ["stayed", "I stayed in bed late yesterday."], ["going to stay", "I'm going to stay with my aunt tomorrow."], ["going to stay", "I'm going to stay at home tonight."]] ,
    ["drive", "водить (машину)", ["driving", "I'm driving to the city centre."], ["drive", "I drive to work twice a week."], ["drove", "I drove to the countryside yesterday."], ["going to drive", "I'm going to drive my friend to the station tomorrow."], ["going to drive", "I'm going to drive to the supermarket today."]] ,
    ["wear", "носить (одежду), одевать (одежду)", ["wearing", "I'm wearing my favourite blue shirt."], ["wear", "I wear comfortable shoes to work."], ["wore", "I wore my new shoes yesterday."], ["going to wear", "I'm going to wear a warm coat tomorrow."], ["going to wear", "I'm going to wear a jacket this evening."]] ,
    ["eat", "есть", ["eating", "I'm eating a bowl of soup."], ["eat", "I eat fruit for breakfast every day."], ["ate", "I ate pizza yesterday."], ["going to eat", "I'm going to eat fruit for breakfast tomorrow."], ["going to eat", "I'm going to eat lunch at one today."]] ,
    ["draw", "рисовать, чертить", ["drawing", "I'm drawing a picture of my cat."], ["draw", "I draw pictures in my free time."], ["drew", "I drew a flower yesterday."], ["going to draw", "I'm going to draw a map tomorrow."], ["going to draw", "I'm going to draw a house today."]] ,
    ["choose", "выбирать", ["choosing", "I'm choosing a film to watch."], ["choose", "I choose my clothes the night before work."], ["chose", "I chose the blue dress yesterday."], ["going to choose", "I'm going to choose a new book tomorrow."], ["going to choose", "I'm going to choose a present for my brother today."]] ,
    ["listen", "слушать, прослушать", ["listening", "I'm listening to a podcast."], ["listen", "I listen to music while I cook."], ["listened", "I listened to the radio yesterday."], ["going to listen", "I'm going to listen to an English lesson tomorrow."], ["going to listen", "I'm going to listen to music after work today."]] ,
    ["close", "закрывать", ["closing", "I'm closing the windows because it's cold."], ["close", "I close the curtains before bed."], ["closed", "I closed my laptop yesterday evening."], ["going to close", "I'm going to close the door quietly tomorrow morning."], ["going to close", "I'm going to close the shop at six today."]] ,
    ["check", "проверять, контролировать", ["checking", "I'm checking my messages."], ["check", "I check my email every morning."], ["checked", "I checked the weather yesterday."], ["going to check", "I'm going to check my homework tomorrow."], ["going to check", "I'm going to check my timetable today."]] ,
    ["answer", "отвечать", ["answering", "I'm answering an email from my colleague."], ["answer", "I answer messages after breakfast."], ["answered", "I answered the phone yesterday."], ["going to answer", "I'm going to answer my friend's message tomorrow."], ["going to answer", "I'm going to answer some questions in class today."]] ,
    ["study", "изучать", ["studying", "I'm studying English grammar."], ["study", "I study English for thirty minutes every day."], ["studied", "I studied at the library yesterday."], ["going to study", "I'm going to study with my friend tomorrow."], ["going to study", "I'm going to study for an hour today."]] ,
    ["visit", "побывать, посещать", ["visiting", "I'm visiting my grandparents this afternoon."], ["visit", "I visit my grandparents once a month."], ["visited", "I visited my aunt yesterday."], ["going to visit", "I'm going to visit an old friend tomorrow."], ["going to visit", "I'm going to visit a museum today."]] ,
    ["finish", "заканчивать, финишировать", ["finishing", "I'm finishing my breakfast."], ["finish", "I usually finish work at six."], ["finished", "I finished reading my book yesterday."], ["going to finish", "I'm going to finish my project tomorrow."], ["going to finish", "I'm going to finish my homework before dinner today."]] ,
    ["travel", "путешествовать, ездить", ["travelling", "I'm travelling by train today."], ["travel", "I travel to another city every summer."], ["travelled", "I travelled to Madrid yesterday."], ["going to travel", "I'm going to travel by bus tomorrow."], ["going to travel", "I'm going to travel to another city this afternoon."]] ,
    ["sleep", "спать", ["sleeping", "I'm sleeping at my cousin's house tonight."], ["sleep", "I sleep for about eight hours every night."], ["slept", "I slept for eight hours yesterday."], ["going to sleep", "I'm going to sleep on the train tomorrow."], ["going to sleep", "I'm going to sleep early tonight."]] ,
    ["drink", "пить", ["drinking", "I'm drinking a glass of water."], ["drink", "I drink water throughout the day."], ["drank", "I drank orange juice yesterday."], ["going to drink", "I'm going to drink coffee in the morning tomorrow."], ["going to drink", "I'm going to drink tea after lunch today."]] ,
    ["cook", "готовить", ["cooking", "I'm cooking pasta for lunch."], ["cook", "I usually cook dinner at home."], ["cooked", "I cooked rice yesterday."], ["going to cook", "I'm going to cook soup tomorrow."], ["going to cook", "I'm going to cook fish for dinner tonight."]] ,
    ["invite", "приглашать, привлекать", ["inviting", "I'm inviting my friends to my party."], ["invite", "I invite my friends over once a month."], ["invited", "I invited my cousin to dinner yesterday."], ["going to invite", "I'm going to invite my classmates tomorrow."], ["going to invite", "I'm going to invite my neighbour for tea today."]] ,
    ["wake", "проснуться, разбудить", ["waking", "I'm waking my brother up now."], ["wake", "I wake up at seven every morning."], ["woke", "I woke up at seven yesterday."], ["going to wake", "I'm going to wake my sister up tomorrow."], ["going to wake", "I'm going to wake up early today."]] ,
    ["fix", "фиксировать, исправлять", ["fixing", "I'm fixing my bicycle."], ["fix", "I fix small things around the house myself."], ["fixed", "I fixed my computer yesterday."], ["going to fix", "I'm going to fix the kitchen light tomorrow."], ["going to fix", "I'm going to fix the broken chair today."]] ,
    ["clean", "чистить", ["cleaning", "I'm cleaning the kitchen."], ["clean", "I clean the kitchen after dinner."], ["cleaned", "I cleaned the bathroom yesterday."], ["going to clean", "I'm going to clean the windows tomorrow."], ["going to clean", "I'm going to clean my room this afternoon."]] ,
    ["dance", "танцевать", ["dancing", "I'm dancing with my friends."], ["dance", "I dance with my friends on weekends."], ["danced", "I danced for an hour yesterday."], ["going to dance", "I'm going to dance at my friend's wedding tomorrow."], ["going to dance", "I'm going to dance at the party tonight."]] ,
    ["wash", "мыть, стирать", ["washing", "I'm washing the dishes."], ["wash", "I wash the dishes after lunch."], ["washed", "I washed my hair yesterday."], ["going to wash", "I'm going to wash my clothes tomorrow."], ["going to wash", "I'm going to wash my car today."]] ,
    ["swim", "плавать, плыть", ["swimming", "I'm swimming in the pool."], ["swim", "I swim at the pool twice a week."], ["swam", "I swam in the sea yesterday."], ["going to swim", "I'm going to swim with my friends tomorrow."], ["going to swim", "I'm going to swim after work today."]] ,
    ["practice", "практиковать, заниматься", ["practicing", "I'm practicing my pronunciation."], ["practice", "I practice speaking English every evening."], ["practiced", "I practiced the piano yesterday."], ["going to practice", "I'm going to practice speaking tomorrow."], ["going to practice", "I'm going to practice English after lunch today."]] ,
    ["phone", "звонить по телефону", ["phoning", "I'm phoning my grandmother."], ["phone", "I phone my grandmother every Sunday."], ["phoned", "I phoned my friend yesterday."], ["going to phone", "I'm going to phone my brother tomorrow."], ["going to phone", "I'm going to phone the dentist today."]] ,
    ["ask", "спрашивать, просить", ["asking", "I'm asking my teacher a question."], ["ask", "I ask questions when I do not understand."], ["asked", "I asked my friend for directions yesterday."], ["going to ask", "I'm going to ask my boss about the meeting tomorrow."], ["going to ask", "I'm going to ask for help today."]] ,
    ["call", "звать, звонить, кричать, называть", ["calling", "I'm calling my sister now."], ["call", "I call my best friend every weekend."], ["called", "I called my mother yesterday."], ["going to call", "I'm going to call my friend tomorrow."], ["going to call", "I'm going to call the hotel today."]] ,
    ["try", "пытаться", ["trying", "I'm trying to open this box."], ["try", "I try a new recipe every month."], ["tried", "I tried a new café yesterday."], ["going to try", "I'm going to try yoga tomorrow."], ["going to try", "I'm going to try a new recipe today."]] ,
    ["move", "двигаться", ["moving", "I'm moving the table into the kitchen."], ["move", "I move my chair closer to the desk when I work."], ["moved", "I moved my chair yesterday."], ["going to move", "I'm going to move some boxes tomorrow."], ["going to move", "I'm going to move my desk today."]] ,
    ["bring", "приносить, приводить", ["bringing", "I'm bringing some food to the table."], ["bring", "I bring lunch to work most days."], ["brought", "I brought a cake to the party yesterday."], ["going to bring", "I'm going to bring my umbrella tomorrow."], ["going to bring", "I'm going to bring my laptop to work today."]] ,
    ["hike", "путешествовать, ходить пешком", ["hiking", "I'm hiking in the hills this morning."], ["hike", "I hike in the hills on sunny weekends."], ["hiked", "I hiked in the mountains yesterday."], ["going to hike", "I'm going to hike near the lake tomorrow."], ["going to hike", "I'm going to hike with my friends today."]] ,
    ["want to", "хотеть что-то сделать", ["want to", "I'm looking at the menu because I want to order lunch."], ["want to", "I want to learn something new every day."], ["wanted to", "I wanted to go for a walk yesterday, but it rained."], ["want to", "I want to start a new book tomorrow."], ["want to", "I want to visit my friend this evening."]] ,
    ["need to", "нужно что-то сделать", ["need to", "I'm washing the dishes because I need to clean the kitchen."], ["need to", "I need to check my calendar every morning."], ["needed to", "I needed to finish my homework yesterday."], ["need to", "I need to get up early tomorrow."], ["need to", "I need to buy some food after work today."]] ,
    ["have to", "приходится, нужно, обязан", ["have to", "I'm getting ready because I have to leave soon."], ["have to", "I have to get up early on weekdays."], ["had to", "I had to work late yesterday."], ["have to", "I have to take the bus tomorrow morning."], ["have to", "I have to call the doctor this afternoon."]] ,
    ["plan to", "планировать что-то сделать", ["planning to", "I'm planning to cook something special tonight."], ["plan to", "I plan to read for twenty minutes every evening."], ["planned to", "I planned to visit the museum yesterday, but it was closed."], ["planning to", "I'm planning to meet my cousin tomorrow."], ["plan to", "I plan to study English after dinner today."]] ,
    ["can", "мочь, уметь", ["can", "I'm studying now, but I can talk in ten minutes."], ["can / practise", "I can swim, and I practise every weekend."], ["could", "I could hear the music from my room yesterday."], ["can", "I can help you with your homework tomorrow."], ["can", "I can go shopping after lunch today."]] ,
    ["could", "мог бы, мог (в прошлом)", ["could", "I'm checking my calendar because I could meet you later."], ["think", "I often think I could spend more time outside."], ["could", "I couldn't find my keys yesterday."], ["could", "I could visit my grandparents tomorrow."], ["could", "I could go for a run this evening."]] ,
    ["should", "следует, стоит", ["should", "I'm taking a break because I should rest more."], ["think", "I usually think I should go to bed earlier."], ["should have", "I should have called my friend yesterday."], ["should", "I should leave home earlier tomorrow."], ["should", "I should finish my homework before dinner today."]] ,
    ["must", "должен, необходимо", ["must", "I'm packing my bag because I must leave soon."], ["know", "I know I must wear a helmet when I ride my bike."], ["had to", "I had to finish the report yesterday."], ["must", "I must remember to bring my passport tomorrow."], ["must", "I must send this email today."]] ,
    ["will", "буду, сделаю (будущее)", ["will", "I'm making a shopping list, and I'll buy the food later."], ["decide", "I usually decide what I will do after work."], ["would", "I thought I would stay home yesterday, but I went out."], ["will", "I'll cook dinner for my friends tomorrow."], ["will", "I'll clean my room this evening."]] ,
];



let g_practice = null;
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 

        g_practice = new PracticeYourPlans({
            el_listen_and_write: document.getElementById('listen_and_write'), 
            el_exercise_control: document.getElementById('control'), 
            exercises_listen_and_write: a1_daily_verbs
        });
        g_practice.genExercisesListenAndWrite();
         
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
</script>