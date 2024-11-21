const a1_adverbs = [
    ["about", "о, касательно", "I read a book about history.", "Я прочитал книгу о истории."],
    ["across", "через", "She walked across the street.", "Она прошла через улицу."],
    ["actually", "на самом деле", "I actually enjoy running.", "На самом деле мне нравится бегать."],
    ["after", "после", "We will meet after lunch.", "Мы встретимся после обеда."],
    ["again", "снова", "Can you say that again?", "Можешь сказать это снова?"],
    ["ago", "назад, недавно", "I saw him a week ago.", "Я видел его неделю назад."],
    ["all", "все", "All the cookies are gone.", "Все печенья исчезли."],
    ["almost", "почти", "I'm almost finished with my homework.", "Я почти закончил с домашним заданием."],
    ["along", "вдоль", "We walked along the river.", "Мы шли вдоль реки."],
    ["already", "уже", "I've already seen that movie.", "Я уже видел этот фильм."],
    ["also", "также", "She is also interested in art.", "Она также интересуется искусством."],
    ["always", "всегда", "He always arrives on time.", "Он всегда приходит вовремя."],
    ["any", "любой, какой-либо", "Do you have any questions?", "У тебя есть какие-либо вопросы?"],
    ["around", "вокруг", "There are trees around the house.", "Вокруг дома есть деревья."],
    ["as", "как, в то время как", "She sings as she works.", "Она поет, в то время как работает."],
    ["away", "в стороне, далеко", "He lives far away.", "Он живет далеко."],

    ["back", "назад, обратно", "Please come back.", "Пожалуйста, вернись обратно."],
    ["backward", "назад", "He took a step backward.", "Он сделал шаг назад."],
    ["badly", "плохо", "She performed badly in the exam.", "Она плохо сдала экзамен."],
    ["before", "перед", "I arrived before noon.", "Я приехал перед полуднем."],
    ["better", "лучше", "You should feel better soon.", "Ты скоро должен почувствовать себя лучше."],
    ["both", "оба", "Both options are available.", "Оба варианта доступны."],
    ["carefully", "осторожно", "Drive carefully in the rain.", "Водите осторожно в дождь."],
    ["clearly", "ясно", "She spoke clearly.", "Она говорила ясно."],
    ["correctly", "правильно", "Please answer correctly.", "Пожалуйста, ответьте правильно."],
    ["directly", "прямо", "He spoke directly to her.", "Он говорил прямо с ней."],
    ["down", "вниз", "The ball rolled down the hill.", "Мяч скатился вниз по холму."],
    ["early", "рано", "I woke up early today.", "Я встал рано сегодня."],
    ["easily", "легко", "She passed the test easily.", "Она легко сдала тест."],
    ["easy", "легко, просто", "This task is easy.", "Эта задача проста."],
    ["else", "еще, другой", "Is there anything else?", "Есть что-то еще?"],
    ["enough", "достаточно", "I have enough money.", "У меня достаточно денег."],
    ["especially", "особенно", "I love summer, especially the beach.", "Я люблю лето, особенно пляж."],
    ["even", "даже", "Even he couldn't believe it.", "Даже он не мог в это поверить."],
    ["ever", "когда-либо", "Have you ever been to Paris?", "Ты когда-либо был в Париже?"],
    ["exactly", "точно", "That's exactly what I mean.", "Это точно то, что я имею в виду."],
    ["far", "далеко", "It is far from here.", "Это далеко отсюда."],
    ["finally", "наконец", "They finally arrived.", "Они наконец приехали."],
    ["forward", "вперёд", "Move forward with confidence.", "Двигайтесь вперед с уверенностью."],

    ["hard", "трудно", "This puzzle is hard.", "Эта головоломка трудная."],
    ["here", "здесь", "You can sit here.", "Ты можешь сесть здесь."],
    ["home", "домой, дома", "I want to go home.", "Я хочу пойти домой."],
    ["how", "как", "How do you do that?", "Как ты это делаешь?"],
    ["however", "однако, тем не менее", "It was raining; however, we went outside.", "Шел дождь; однако мы вышли на улицу."],
    ["incorrectly", "неправильно", "He answered the question incorrectly.", "Он ответил на вопрос неправильно."],
    ["inside", "внутри", "The cat is inside the house.", "Кошка внутри дома."],
    ["late", "поздно", "I'm sorry I'm late.", "Извини, что я опоздал."],
    ["later", "позже", "I'll call you later.", "Я позвоню тебе позже."],
    ["least", "по крайней мере", "At least I tried.", "По крайней мере, я попробовал."],
    ["less", "меньше", "I need less sugar in my coffee.", "Мне нужно меньше сахара в кофе."],
    ["likely", "вероятно", "It's likely to rain tomorrow.", "Вероятно, завтра будет дождь."],
    ["little", "немного, мало", "I have little time to spare.", "У меня мало времени."],
    ["long", "долго", "It took a long time to finish.", "Это заняло много времени, чтобы закончить."],
    ["loudly", "громко", "She laughed loudly.", "Она громко смеялась."],
    ["low", "низкий, маленький", "The chair is too low.", "Стул слишком низкий."],
    ["maybe", "может быть", "Maybe we'll see each other again.", "Может быть, мы увидимся снова."],
    ["more", "больше", "I need more information.", "Мне нужно больше информации."],
    ["most", "большинство, наиболее", "Most people agree.", "Большинство людей согласны."],
    ["much", "много", "There is much to learn.", "Есть много чему научиться."],
    ["near", "близко", "The store is near my house.", "Магазин рядом с моим домом."],
    ["nearly", "почти, приблизительно", "I am nearly done with my work.", "Я почти закончил свою работу."],
    ["never", "никогда", "I have never been there.", "Я никогда не был там."],
    ["now", "сейчас", "I am working now.", "Я сейчас работаю."],
    ["off", "вне, выключенный", "Please turn the lights off.", "Пожалуйста, выключите свет."],
    ["often", "часто", "I often go for walks.", "Я часто хожу на прогулки."],
    ["on", "на", "The book is on the table.", "Книга на столе."],
    ["once", "однажды", "Once upon a time...", "Однажды в сказке..."],
    ["only", "только", "I only have five dollars.", "У меня только пять долларов."],
    ["out", "вне, снаружи", "He is out of the office.", "Он вне офиса."],
    ["outside", "снаружи", "It's cold outside.", "На улице холодно."],
    ["over", "над, сверх", "The plane flew over the city.", "Самолет пролетел над городом."],
    ["parallel", "параллельно", "The two lines are parallel.", "Две линии параллельны."],
    ["partly", "частично", "It is partly cloudy today.", "Сегодня частично облачно."],
    ["perhaps", "возможно", "Perhaps we should leave early.", "Возможно, нам следует уйти рано."],
    ["pretty", "довольно, красивый", "She is pretty good at her job.", "Она довольно хорошо справляется с работой."],
    ["probably", "вероятно", "It will probably rain tomorrow.", "Вероятно, завтра будет дождь."],

    ["quickly", "быстро", "She runs quickly.", "Она бегает быстро."],
    ["quietly", "тихо", "He spoke quietly.", "Он говорил тихо."],
    ["quite", "довольно", "This task is quite easy.", "Эта задача довольно легка."],
    ["rarely", "редко", "I rarely eat sweets.", "Я редко ем сладости."],
    ["really", "действительно, на самом деле", "I really enjoyed the concert.", "Мне действительно понравился концерт."],
    ["right", "правильно, направо", "You need to turn right.", "Тебе нужно повернуть направо."],
    ["secretly", "тайно", "She secretly wanted to go.", "Она тайно хотела уйти."],
    ["simply", "просто, просто так", "I simply can't believe it.", "Я просто не могу в это поверить."],
    ["slowly", "медленно", "Please drive slowly.", "Пожалуйста, езди медленно."],
    ["so", "так, поэтому", "It was so cold outside.", "На улице было так холодно."],
    ["sometimes", "иногда", "I sometimes go for a walk in the evening.", "Иногда я гуляю вечером."],
    ["soon", "скоро", "We will meet again soon.", "Мы снова встретимся скоро."],
    ["still", "все еще, по-прежнему", "She is still working on her project.", "Она все еще работает над своим проектом."],
    ["suddenly", "внезапно", "He suddenly appeared.", "Он внезапно появился."],
    ["that", "это, тот", "I love that book.", "Мне нравится эта книга."],
    ["then", "потом", "We went to the store and then home.", "Мы пошли в магазин, а потом домой."],
    ["there", "там", "The keys are over there.", "Ключи вон там."],
    ["this", "это, этот", "This is my favorite shirt.", "Это моя любимая рубашка."],
    ["today", "сегодня", "Today is a beautiful day.", "Сегодня прекрасный день."],
    ["together", "вместе", "Let's go to the park together.", "Давай пойдем в парк вместе."],
    ["tomorrow", "завтра", "We will start tomorrow.", "Мы начнем завтра."],
    ["tonight", "сегодня вечером", "Are you free tonight?", "Ты свободен сегодня вечером?"],
    ["too", "тоже, слишком", "I want to go too.", "Я тоже хочу пойти."],
    ["up", "вверх", "He looked up at the sky.", "Он посмотрел вверх на небо."],
    ["usually", "обычно", "I usually wake up early.", "Я обычно просыпаюсь рано."],
    ["very", "очень", "She is very talented.", "Она очень талантлива."],
    ["way", "способ, путь", "There is a better way to do this.", "Существует лучший способ сделать это."],
    ["well", "хорошо", "She sings well.", "Она поет хорошо."],
    ["where", "где", "Where are you going?", "Куда ты идешь?"],
    ["why", "почему", "Why did you do that?", "Почему ты это сделал?"],
    ["yesterday", "вчера", "I saw him yesterday.", "Я видел его вчера."],
    ["yet", "еще, уже", "I haven't finished yet.", "Я еще не закончил."]
];

const a1_nouns = [
    ["homework", "homework", "домашнее задание", "I have a lot of homework.", "У меня много домашнего задания."],
    ["step", "steps", "шаг", "Take the first step towards your goal.", "Сделай первый шаг к своей цели."],
    ["exam", "exams", "экзамен", "I have an important exam tomorrow.", "У меня завтра важный экзамен."],
    ["noon", "noons", "полдень", "Let's meet at noon.", "Давай встретимся в полдень."],
    ["ball", "balls", "мяч", "The children played with a ball.", "Дети играли с мячом."],
    ["test", "tests", "тест, проверка", "She passed the test easily.", "Она легко сдала тест."],
    ["task", "tasks", "задача, задание", "He completed all his tasks on time.", "Он выполнил все свои задачи вовремя."],
    ["summer", "summers", "лето", "They love spending their summers at the beach.", "Они любят проводить лето на пляже."],
    ["Paris", "Parises", "Париж", "Paris is the capital of France.", "Париж — столица Франции."],
    ["sugar", "sugars", "сахар", "Could you pass the sugar, please?", "Можешь передать сахар, пожалуйста?"],
    ["store", "stores", "магазин", "She went to the store to buy groceries.", "Она пошла в магазин за продуктами."],
    ["light", "lights", "огонь, свет", "Turn off the lights when you leave.", "Выключи свет, когда уходишь."],
    ["plane", "planes", "самолет", "The plane landed safely.", "Самолет благополучно приземлился."],
    ["key", "keys", "ключ", "I lost my car keys.", "Я потерял ключи от машины."],
    ["park", "parks", "парк", "We had a picnic in the park.", "Мы устроили пикник в парке."],

    ["adventure", "adventures", "приключение", "An adventure awaits.", "Начинается приключение."],
    ["air", "airs", "воздух", "The air is fresh.", "Воздух свежий."],
    ["answer", "answers", "ответ", "I need an answer.", "Мне нужен ответ."],
    ["apartment", "apartments", "квартира", "This is my apartment.", "Это моя квартира."],
    ["area", "areas", "область", "A quiet area.", "Тихая область."],
    ["art", "arts", "искусство", "Art is a way to express emotions.", "Искусство — это способ выразить эмоции."],

    ["autumn", "autumns", "осень", "Autumn leaves fall.", "Падают осенние листья."],
    ["bag", "bags", "сумка", "I have a bag.", "У меня есть сумка."],
    ["bathroom", "bathrooms", "ванная комната", "The bathroom is clean.", "Ванная чистая."],
    ["beach", "beaches", "пляж", "We went to the beach.", "Мы ходили на пляж."],
    ["bed", "beds", "кровать", "The bed is comfortable.", "Кровать удобная."],
    ["bedroom", "bedrooms", "спальня", "This is the bedroom.", "Это спальня."],
    ["bird", "birds", "птица", "A bird is singing.", "Птица поет."],
    ["book", "books", "книга", "I am reading a book.", "Я читаю книгу."],
    ["branch", "branches", "ветка", "The branch is strong.", "Ветка крепкая."],
    ["bread", "breads", "хлеб", "Fresh bread smells good.", "Свежий хлеб пахнет вкусно."],
    ["brother", "brothers", "брат", "My brother is here.", "Мой брат здесь."],
    ["building", "buildings", "здание", "It’s a tall building.", "Это высокое здание."],
    ["back", "backs", "спина", "My back hurts.", "У меня болит спина."],
    ["body", "bodies", "тело", "The body needs rest.", "Телу нужен отдых."],
    ["business", "businesses", "дело", "Business is growing.", "Дело растет."],

    ["car", "cars", "машина", "The car is fast.", "Машина быстрая."],
    ["cat", "cats", "кошка", "The cat is sleeping.", "Кошка спит."],
    ["chair", "chairs", "стул", "Take a chair.", "Возьми стул."],
    ["cheese", "cheeses", "сыр", "I like cheese.", "Мне нравится сыр."],
    ["child", "children", "ребенок", "The child is playing.", "Ребенок играет."],
    ["city", "cities", "город", "The city is large.", "Город большой."],
    ["classroom", "classrooms", "класс", "The classroom is ready.", "Класс готов."],
    ["climate", "climates", "климат", "The climate is changing.", "Климат меняется."],
    ["cloud", "clouds", "облако", "A cloud is floating.", "Облако плывет."],
    ["coat", "coats", "пальто", "Wear a coat.", "Надень пальто."],
    ["coffee", "coffees", "кофе", "Coffee is hot.", "Кофе горячий."],
    ["cookie","cookies","печенье","I love eating cookies with milk.","Я люблю есть печенье с молоком."],
    ["computer", "computers", "компьютер", "The computer is on.", "Компьютер включен."],
    ["country", "countries", "страна", "I love my country.", "Я люблю свою страну."],
    ["center", "centers", "центр", "Meet me in the center.", "Встретимся в центре."],
    ["change", "changes", "изменение", "Change is good.", "Изменения к лучшему."],
    ["community", "communities", "община", "A strong community.", "Сильная община."],
    ["company", "companies", "компания", "The company is growing.", "Компания растет."],
    ["day", "days", "день", "It’s a sunny day.", "Сегодня солнечный день."],
    ["death", "deaths", "смерть", "He faced death bravely.", "Он встретил смерть мужественно."],
    ["desk", "desks", "письменный стол", "My desk is tidy.", "Мой стол в порядке."],
    ["doctor", "doctors", "врач", "The doctor is kind.", "Доктор добрый."],
    ["dog", "dogs", "собака", "The dog is barking.", "Собака лает."],
    ["door", "doors", "дверь", "Open the door.", "Открой дверь."],
    ["dream", "dreams", "мечта", "Follow your dream.", "Следуй за своей мечтой."],
    ["dress", "dresses", "платье", "The dress is beautiful.", "Платье красивое."],
    ["earth", "earths", "земля", "The Earth is round.", "Земля круглая."],
    ["education", "educations", "образование", "Education is key.", "Образование — ключ к успеху."],
    ["energy", "energies", "энергия", "Energy is vital.", "Энергия жизненно важна."],
    ["environment", "environments", "окружающая среда", "Protect the environment.", "Защищайте окружающую среду."],
    ["experience", "experiences", "опыт", "Experience is valuable.", "Опыт ценен."],
    ["end", "ends", "конец", "This is the end.", "Это конец."],
    ["eye", "eyes", "глаз", "Close your eyes.", "Закрой глаза."],
    ["evening","evenings","вечер","We go for walks on summer evenings.","Мы гуляем по летним вечерам."],
    ["fact", "facts", "факт", "It's a known fact.", "Это известный факт."],
    ["family", "families", "семья", "Family comes first.", "Семья на первом месте."],
    ["fire", "fires", "огонь", "The fire is warm.", "Огонь теплый."],
    ["fish", "fish", "рыба", "The fish is swimming.", "Рыба плывет."],
    ["floor", "floors", "пол", "The floor is clean.", "Пол чистый."],
    ["flower", "flowers", "цветок", "The flower is blooming.", "Цветок цветет."],
    ["food", "foods", "пища", "Food is essential.", "Пища необходима."],
    ["forest", "forests", "лес", "The forest is dense.", "Лес густой."],
    ["friend", "friends", "друг", "He is my friend.", "Он мой друг."],
    ["fruit", "fruits", "фрукт", "I love fresh fruit.", "Я люблю свежие фрукты."],
    ["furniture", "furnitures", "мебель", "The furniture is new.", "Мебель новая."],
    ["face", "faces", "лицо", "Her face is happy.", "Ее лицо счастливое."],
    ["father", "fathers", "папа", "My father is kind.", "Мой папа добрый."],
    
    ["game", "games", "игра", "The game is fun.", "Игра веселая."],
    ["glasses", "glasses", "очки", "He wears glasses.", "Он носит очки."],
    ["grass", "grasses", "трава", "The grass is green.", "Трава зеленая."],
    ["government", "governments", "правительство", "The government decided.", "Правительство решило."],
    ["group", "groups", "группа", "The group is big.", "Группа большая."],
    
    ["happiness", "happinesses", "счастье", "Happiness is important.", "Счастье важно."],
    ["hat", "hats", "шляпа", "Wear a hat.", "Надень шляпу."],
    ["hate", "hates", "ненависть", "Hate is destructive.", "Ненависть разрушительна."],
    ["health", "healths", "здоровье", "Health is wealth.", "Здоровье — богатство."],
    ["hill", "hills", "холм", "We climbed the hill.", "Мы взобрались на холм."],
    ["hobby", "hobbies", "хобби", "Reading is my hobby.", "Чтение — мое хобби."],
    ["home", "homes", "дом", "Home is where the heart is.", "Дом там, где сердце."],
    ["hope", "hopes", "надежда", "Never lose hope.", "Никогда не теряй надежду."],
    ["hospital", "hospitals", "больница", "She works at the hospital.", "Она работает в больнице."],
    ["house", "houses", "дом", "This is my house.", "Это мой дом."],
    ["hand", "hands", "рука", "Hold my hand.", "Держи меня за руку."],
    ["head", "heads", "голова", "My head hurts.", "У меня болит голова."],
    ["history", "histories", "история", "History teaches us.", "История нас учит."],
    ["hour", "hours", "час", "It takes an hour.", "Это займет час."],
    ["idea", "ideas", "идея", "She has an idea.", "У нее есть идея."],
    ["interest", "interests", "интерес", "I have an interest in art.", "У меня есть интерес к искусству."],
    ["information", "informations", "информация", "Information is power.", "Информация — это сила."],
    ["issue", "issues", "проблема", "This is a big issue.", "Это большая проблема."],
    
    ["jacket", "jackets", "куртка", "Put on a jacket.", "Надень куртку."],
    ["job", "jobs", "работа", "He got a new job.", "Он получил новую работу."],
    ["journey", "journeys", "путешествие", "Life is a journey.", "Жизнь — это путешествие."],
    ["juice", "juices", "сок", "I like orange juice.", "Мне нравится апельсиновый сок."],
    
    ["kitchen", "kitchens", "кухня", "The kitchen is clean.", "Кухня чистая."],
    ["knowledge", "knowledges", "знания", "Knowledge is valuable.", "Знания ценны."],
    ["kid", "kids", "ребенок", "A kid is playing outside.", "Ребенок играет на улице."],
    ["kind", "kinds", "добрый", "She is very kind.", "Она очень добрая."],
    
    ["lake", "lakes", "озеро", "The lake is calm.", "Озеро спокойное."],
    ["lamp", "lamps", "лампа", "The lamp is on.", "Лампа включена."],
    ["leaf", "leaves", "лист", "A leaf fell from the tree.", "Лист упал с дерева."],
    ["lesson", "lessons", "урок", "The lesson was helpful.", "Урок был полезным."],
    ["lie", "lies", "ложь", "A lie hurts trust.", "Ложь разрушает доверие."],
    ["life", "lives", "жизнь", "Life is beautiful.", "Жизнь прекрасна."],
    ["living room", "living rooms", "гостиная", "The living room is cozy.", "Гостиная уютная."],
    ["love", "loves", "любовь", "Love is powerful.", "Любовь сильна."],
    ["law", "laws", "закон", "The law protects us.", "Закон нас защищает."],
    ["level", "levels", "уровень", "The water level is high.", "Уровень воды высокий."],
    ["line", "lines", "линия", "Draw a straight line.", "Нарисуй прямую линию."],
    ["lot", "lots", "много", "There are a lot of people here.", "Здесь много людей."],
    ["lunch","lunches","обед","I have lunch at 12 o'clock every day.","Я обедаю в 12 часов каждый день."],
    ["meat", "meats", "мясо", "The meat is fresh.", "Мясо свежее."],
    ["medicine", "medicines", "медицина", "Medicine is advancing.", "Медицина развивается."],
    ["memory", "memories", "память", "She has a good memory.", "У нее хорошая память."],
    ["milk", "milks", "молоко", "I drink milk every morning.", "Я пью молоко каждое утро."],
    ["money", "monies", "деньги", "Money is important.", "Деньги важны."],
    ["moon", "moons", "луна", "The moon is bright tonight.", "Сегодня ночью луна яркая."],
    ["moonlight", "moonlights", "лунный свет", "The moonlight is beautiful.", "Лунный свет прекрасен."],
    ["mountain", "mountains", "гора", "They climbed the mountain.", "Они взобрались на гору."],
    ["movie", "movies", "фильм", "This movie is interesting.", "Этот фильм интересный."],
    ["music", "musics", "музыка", "I love listening to music.", "Я люблю слушать музыку."],
    ["man", "men", "мужчина", "He is a strong man.", "Он сильный мужчина."],
    ["member", "members", "член", "She is a member of the team.", "Она член команды."],
    ["might", "mights", "мощь", "With all his might, he lifted it.", "Со всей своей мощью он поднял это."],
    ["minute", "minutes", "минута", "It will take a minute.", "Это займет минуту."],
    ["month", "months", "месяц", "April is my favorite month.", "Апрель — мой любимый месяц."],
    ["morning", "mornings", "утро", "Good morning!", "Доброе утро."],
    ["mother", "mothers", "мать", "My mother is kind.", "Моя мать добрая."],

    ["nature", "natures", "природа", "Nature is beautiful.", "Природа прекрасна."],
    ["night", "nights", "ночь", "The night is quiet.", "Ночь тиха."],
    ["name", "names", "имя", "What is your name?", "Как твое имя?"],
    ["news", "news", "новости", "I have good news.", "У меня хорошие новости."],
    ["nickname", "nicknames", "прозвище", "Her nickname is Sunny.", "Ее прозвище — Санни."],
    ["number", "numbers", "число", "Pick a number.", "Выбери число."],

    ["ocean", "oceans", "океан", "The ocean is vast.", "Океан обширен."],
    ["office", "offices", "офис", "The office is quiet.", "В офисе тихо."],
    ["pants", "pants", "брюки", "I bought new pants.", "Я купил новые брюки."],
    ["paper", "papers", "бумага", "Write it on paper.", "Напиши это на бумаге."],
    ["parent", "parents", "родитель", "My parent is supportive.", "Мой родитель поддерживает меня."],
    ["patient", "patients", "пациент", "The patient is waiting.", "Пациент ждет."],
    ["pen", "pens", "ручка", "I need a pen.", "Мне нужна ручка."],
    ["pencil", "pencils", "карандаш", "Sharpen the pencil.", "Заточи карандаш."],
    ["person", "persons", "человек", "He is a nice person.", "Он хороший человек."],
    ["phone", "phones", "телефон", "I lost my phone.", "Я потерял телефон."],
    ["power", "powers", "сила", "Knowledge is power.", "Знание — сила."],
    ["problem", "problems", "проблема", "This is a difficult problem.", "Это сложная проблема."],
    ["part", "parts", "часть", "This is my part.", "Это моя часть."],
    ["party", "parties", "вечеринка", "The party was fun.", "Вечеринка была веселой."],
    ["people", "people", "люди", "Many people attended.", "Много людей пришло."],
    ["percent", "percents", "процент", "He got 90 percent correct.", "Он ответил на 90 процентов правильно."],
    ["place", "places", "место", "This is a nice place.", "Это хорошее место."],
    ["point", "points", "точка", "Make your point clear.", "Сформулируй свою точку зрения ясно."],
    ["president", "presidents", "президент", "The president spoke today.", "Президент выступил сегодня."],
    ["program", "programs", "программа", "The program starts now.", "Программа начинается сейчас."],

    ["question", "questions", "вопрос", "I have a question.", "У меня есть вопрос."],

    ["rain", "rains", "дождь", "The rain stopped.", "Дождь прекратился."],
    ["reality", "realities", "реальность", "Face the reality.", "Смотри правде в глаза."],
    ["river", "rivers", "река", "The river flows fast.", "Река течет быстро."],
    ["road", "roads", "дорога", "The road is long.", "Дорога длинная."],
    ["rock", "rocks", "скала", "The rock is huge.", "Скала огромная."],
    ["room", "rooms", "комната", "This is my room.", "Это моя комната."],
    ["root", "roots", "корень", "The tree has deep roots.", "У дерева глубокие корни."],
    ["reason", "reasons", "причина", "Give me a reason.", "Дай мне причину."],
    ["right", "rights", "верно", "You are right.", "Ты прав."],

    ["school", "schools", "школа", "She goes to school.", "Она ходит в школу."],
    ["science", "sciences", "наука", "Science is fascinating.", "Наука увлекательна."],
    ["shirt", "shirts", "рубашка", "He wears a shirt.", "Он носит рубашку."],
    ["shoe", "shoes", "обувь", "She bought new shoes.", "Она купила новую обувь."],
    ["sister", "sisters", "сестра", "My sister is kind.", "Моя сестра добрая."],
    ["skill", "skills", "навык", "He has many skills.", "У него много навыков."],
    ["sky", "skies", "небо", "The sky is blue.", "Небо голубое."],
    ["snow", "snows", "снег", "Snow is falling.", "Снег падает."],
    ["socks", "socks", "носки", "I wear socks.", "Я ношу носки."],
    ["sofa", "sofas", "диван", "The sofa is comfortable.", "Диван удобный."],
    ["soil", "soils", "почва", "The soil is fertile.", "Почва плодородная."],
    ["solution", "solutions", "решение", "We found a solution.", "Мы нашли решение."],
    ["space", "spaces", "космос", "Space is vast.", "Космос обширен."],
    ["star", "stars", "звезда", "A star is shining.", "Звезда светит."],
    ["starlight", "starlights", "звездный свет", "The starlight is beautiful.", "Звездный свет прекрасен."],
    ["stone", "stones", "камень", "He threw a stone.", "Он бросил камень."],
    ["street", "streets", "улица", "The street is busy.", "Улица оживленная."],
    ["student", "students", "студент", "The student is studying.", "Студент учится."],
    ["success", "successes", "успех", "Success is important.", "Успех важен."],
    ["sun", "suns", "солнце", "The sun is bright.", "Солнце яркое."],
    ["sunlight", "sunlights", "солнечный свет", "Sunlight warms the earth.", "Солнечный свет греет землю."],
    ["service", "services", "служба", "The service is excellent.", "Служба отличная."],
    ["side", "sides", "сторона", "Choose a side.", "Выбери сторону."],
    ["state", "states", "состояние", "The state is stable.", "Состояние стабильное."],
    ["story", "stories", "история", "Tell me a story.", "Расскажи мне историю."],
    ["study", "studies", "изучать", "She studies hard.", "Она усердно учится."],
    ["system", "systems", "система", "The system works well.", "Система работает хорошо."],

    ["table", "tables", "стол", "The table is wooden.", "Стол деревянный."],
    ["talent", "talents", "талант", "She has a talent for singing.", "У нее есть талант к пению."],
    ["tea", "teas", "чай", "I like green tea.", "Мне нравится зеленый чай."],
    ["teacher", "teachers", "учитель", "The teacher is kind.", "Учитель добрый."],
    ["technology", "technologies", "технология", "Technology is advancing.", "Технология развивается."],
    ["time", "times", "время", "Time is precious.", "Время ценно."],
    ["town", "towns", "городок", "The town is small.", "Городок маленький."],
    ["tree", "trees", "дерево", "The tree is tall.", "Дерево высокое."],
    ["truth", "truths", "правда", "Tell the truth.", "Скажи правду."],
    ["team", "teams", "команда", "Our team is strong.", "Наша команда сильная."],
    ["thing", "things", "вещь", "This thing is new.", "Эта вещь новая."],

    ["university", "universities", "университет", "She attends university.", "Она учится в университете."],

    ["vegetable", "vegetables", "овощ", "I eat vegetables daily.", "Я ем овощи ежедневно."],
    ["village", "villages", "деревня", "The village is peaceful.", "Деревня спокойная."],

    ["watch", "watches", "часы", "I wear a watch.", "Я ношу часы."],
    ["water", "waters", "вода", "Drink water regularly.", "Пейте воду регулярно."],
    ["weather", "weathers", "погода", "The weather is nice.", "Погода хорошая."],
    ["wind", "winds", "ветер", "The wind is strong.", "Ветер сильный."],
    ["window", "windows", "окно", "Open the window.", "Открой окно."],
    ["world", "worlds", "мир", "The world is big.", "Мир большой."],
    ["war", "wars", "война", "War is destructive.", "Война разрушительна."],
    ["week", "weeks", "неделя", "It takes a week.", "Это займет неделю."],
    ["woman", "women", "женщина", "The woman is kind.", "Женщина добрая."],
    ["word", "words", "слово", "Say a word.", "Скажи слово."],
    ["work", "works", "работа", "Work hard.", "Работай усердно."],

    ["year", "years", "год", "This year is great.", "Этот год замечательный."]
];

const a1_verbs = [
    ["agree", "agrees", "agreed", "agreed", "agreeing", "соглашаться", [
        "I agree with you. — Я согласен с тобой.",
        "He agrees with you. — Он согласен с тобой.",
        "He agreed to help me. — Он согласился мне помочь.",
        "They had already agreed on the terms. — Они уже согласились на условия."
    ]],
    ["add", "adds", "added", "added", "adding", "добавлять", [
        "Please add some sugar to my tea. — Пожалуйста, добавь немного сахара в мой чай.",
        "She added more details to her story. — Она добавила больше деталей в свою историю.",
        "He had added all the ingredients. — Он добавил все ингредиенты."
    ]],
    ["allow", "allows", "allowed", "allowed", "allowing", "позволять, допускать", [
        "I allow you to go. — Я разрешаю тебе идти.",
        "They allowed us to enter. — Они разрешили нам войти.",
        "She had been allowed to join the team. — Ей было позволено присоединиться к команде."
    ]],
    ["ask", "asks", "asked", "asked", "asking", "просить, спрашивать", [
        "I ask for your help. — Я прошу твоей помощи.",
        "He asked a question. — Он задал вопрос.",
        "They had asked her about the incident. — Они спросили её об инциденте."
    ]],
    ["accept", "accepts", "accepted", "accepted", "accepting", "принимать", [
        "I accept your offer. — Я принимаю ваше предложение.",
        "He accepted the invitation. — Он принял приглашение.",
        "They had accepted the terms. — Они приняли условия."
    ]],
    ["arrive", "arrives", "arrived", "arrived", "arriving", "приехать, приезжать", [
        "They arrive at 9 PM. — Они прибывают в 9 вечера.",
        "She arrived late to the meeting. — Она опоздала на встречу.",
        "We had already arrived when they called. — Мы уже приехали, когда они позвонили."
    ]],
    ["answer", "answers", "answered", "answered", "answering", "отвечать", [
        "Please answer my question. — Пожалуйста, ответь на мой вопрос.",
        "He answered correctly. — Он ответил правильно.",
        "She had answered before I could speak. — Она ответила, прежде чем я успел заговорить."
    ]],
    ["awake", "awakes", "awoke", "awoken", "awaking", "пробуждать", [
        "I awake early every morning. — Я просыпаюсь рано каждое утро.",
        "He awoke to a beautiful sunrise. — Он проснулся при красивом восходе солнца.",
        "They had awoken from a deep sleep. — Они пробудились от глубокого сна."
    ]],
    ["begin", "begins", "began", "begun", "beginning", "начинать", [
        "Let's begin the lesson. — Давайте начнем урок.",
        "He began working early. — Он начал работать рано.",
        "They had begun their journey. — Они начали своё путешествие."
    ]],
    ["become", "becomes", "became", "become", "becoming", "становиться, случаться", [
        "She wants to become a doctor. — Она хочет стать врачом.",
        "He became very successful. — Он стал очень успешным.",
        "They have become close friends. — Они стали близкими друзьями."
    ]],
    ["be", "is", "was", "been", "being", "быть, являться", [
        "I want to be a writer. — Я хочу быть писателем.",
        "She was at the party. — Она была на вечеринке.",
        "We have been friends for years. — Мы были друзьями много лет."
    ]],
    ["buy", "buys", "bought", "bought", "buying", "покупать", [
        "I will buy some groceries. — Я куплю продукты.",
        "He bought a new car. — Он купил новую машину.",
        "They have bought a house. — Они купили дом."
    ]],
    ["bring", "brings", "brought", "brought", "bringing", "приносить", [
        "Please bring your book. — Пожалуйста, принеси свою книгу.",
        "She brought a gift for him. — Она принесла ему подарок.",
        "They had brought all the supplies. — Они принесли все припасы."
    ]],
    ["build", "builds", "built", "built", "building", "строить", [
        "They plan to build a house. — Они планируют построить дом.",
        "He built a small shed. — Он построил небольшой сарай.",
        "The company had built several factories. — Компания построила несколько заводов."
    ]],
    ["break", "breaks", "broke", "broken", "breaking", "ломать", [
        "Be careful not to break the glass. — Будь осторожен, чтобы не разбить стекло.",
        "He broke his phone. — Он сломал свой телефон.",
        "The vase had been broken. — Ваза была разбита."
    ]],
    ["believe", "believes", "believed", "believed", "believing", "верить", [
        "I believe in you. — Я верю в тебя.",
        "She believed his story. — Она поверила его рассказу.",
        "They had believed in their success. — Они верили в свой успех."
    ]],
    ["base", "bases", "based", "based", "basing", "основывать", [
        "They base their theory on facts. — Они основывают свою теорию на фактах.",
        "The story was based on true events. — История была основана на реальных событиях.",
        "The company had based its policies on research. — Компания основывала свои принципы на исследованиях."
    ]],
    ["carry", "carries", "carried", "carried", "carrying", "нести, проводить", [
        "I carry my bag every day. — Я несу свою сумку каждый день.",
        "She carried the baby in her arms. — Она несла ребенка на руках.",
        "They had carried out the experiment. — Они провели эксперимент."
    ]],
    ["cut", "cuts", "cut", "cut", "cutting", "резать", [
        "Please cut the paper in half. — Пожалуйста, разрежь бумагу пополам.",
        "He cut his finger. — Он порезал палец.",
        "She had cut the rope. — Она перерезала веревку."
    ]],
    ["continue", "continues", "continued", "continued", "continuing", "продолжать", [
        "I will continue my studies. — Я продолжу свои занятия.",
        "She continued talking. — Она продолжала говорить.",
        "They had continued the project. — Они продолжили проект."
    ]],
    ["come", "comes", "came", "come", "coming", "приходить, приехать", [
        "Please come to the party. — Пожалуйста, приходи на вечеринку.",
        "He came home late. — Он пришел домой поздно.",
        "They had come to an agreement. — Они пришли к соглашению."
    ]],
    ["cry", "cries", "cried", "cried", "crying", "плакать", [
        "She cries every time she watches this movie. — Она плачет каждый раз, когда смотрит этот фильм.",
        "He cried at the end of the story. — Он заплакал в конце рассказа.",
        "They had cried together. — Они плакали вместе."
    ]],
    ["communicate", "communicates", "communicated", "communicated", "communicating", "общаться", [
        "They communicate via email. — Они общаются по электронной почте.",
        "She communicated her ideas clearly. — Она ясно изложила свои идеи.",
        "He had communicated his decision. — Он сообщил о своем решении."
    ]],
    ["create", "creates", "created", "created", "creating", "создавать", [
        "I create art for a living. — Я зарабатываю на жизнь, создавая искусство.",
        "She created a beautiful painting. — Она создала прекрасную картину.",
        "They had created a new program. — Они создали новую программу."
    ]],
    ["cost", "costs", "cost", "cost", "costing", "стоить (о цене)", [
        "This dress costs a lot. — Это платье стоит дорого.",
        "It cost him a fortune. — Это стоило ему целое состояние.",
        "The repairs had cost a lot. — Ремонт стоил дорого."
    ]],
    ["call", "calls", "called", "called", "calling", "называть, звать", [
        "They call her every day. — Они звонят ей каждый день.",
        "She called his name loudly. — Она громко назвала его имя.",
        "They had called for help. — Они позвали на помощь."
    ]],
    ["can", "can", "could", "could", "canning", "уметь (мочь)", [
        "I can speak English. — Я умею говорить по—английски.",
        "He could not attend the meeting. — Он не смог прийти на встречу.",
        "They could have done it. — Они могли бы это сделать."
    ]],
    ["close", "closes", "closed", "closed", "closing", "закрывать", [
        "Please close the door. — Пожалуйста, закрой дверь.",
        "She closed the window. — Она закрыла окно.",
        "They had closed the shop for the day. — Они закрыли магазин на день."
    ]],
 ["cook", "cooks", "cooked", "cooked", "cooking", "готовить", [
        "I cook dinner every night. — Я готовлю ужин каждый вечер.",
        "He cooked a delicious meal. — Он приготовил вкусное блюдо.",
        "They had cooked everything in advance. — Они приготовили все заранее."
    ]],
    ["clean", "cleans", "cleaned", "cleaned", "cleaning", "чистить", [
        "I clean my room regularly. — Я регулярно убираю свою комнату.",
        "She cleaned the kitchen. — Она убрала кухню.",
        "They had cleaned the whole house. — Они убрали весь дом."
    ]],
    ["choose", "chooses", "chose", "chosen", "choosing", "выбирать", [
        "You can choose any color. — Ты можешь выбрать любой цвет.",
        "She chose the blue one. — Она выбрала синий.",
        "They had chosen the best option. — Они выбрали лучший вариант."
    ]],
    ["control", "controls", "controlled", "controlled", "controlling", "контролировать", [
        "I control the budget. — Я контролирую бюджет.",
        "He controlled the situation. — Он контролировал ситуацию.",
        "They had controlled every step of the process. — Они контролировали каждый шаг процесса."
    ]],
    ["change", "changes", "changed", "changed", "changing", "изменять что—то", [
        "I want to change my schedule. — Я хочу изменить своё расписание.",
        "She changed her plans. — Она изменила свои планы.",
        "They had changed the layout. — Они изменили макет."
    ]],
    ["cover", "covers", "covered", "covered", "covering", "охватывать, покрывать", [
        "The book covers many topics. — Книга охватывает многие темы.",
        "She covered the dish with a lid. — Она накрыла блюдо крышкой.",
        "They had covered all the expenses. — Они покрыли все расходы."
    ]],
    ["catch", "catches", "caught", "caught", "catching", "ловить", [
        "I try to catch the bus every morning. — Я стараюсь поймать автобус каждое утро.",
        "He caught the ball. — Он поймал мяч.",
        "They had caught all the errors. — Они обнаружили все ошибки."
    ]],
    ["check", "checks", "checked", "checked", "checking", "проверять, контролировать", [
        "I check my email every day. — Я проверяю почту каждый день.",
        "She checked the answers carefully. — Она тщательно проверила ответы.",
        "They had checked all the details. — Они проверили все детали."
    ]],
    ["compare", "compares", "compared", "compared", "comparing", "сравнить", [
        "I compare prices before buying. — Я сравниваю цены перед покупкой.",
        "She compared the two documents. — Она сравнила два документа.",
        "They had compared different options. — Они сравнили разные варианты."
    ]],
    ["die", "dies", "died", "died", "dying", "умирать", [
        "Many plants die without sunlight. — Многие растения умирают без света.",
        "He died peacefully in his sleep. — Он умер спокойно во сне.",
        "The flowers had died due to lack of water. — Цветы засохли из-за нехватки воды."
    ]],
    ["drive", "drives", "drove", "driven", "driving", "водить машину", [
        "I drive to work every day. — Я езжу на работу на машине каждый день.",
        "He drove all night. — Он вел машину всю ночь.",
        "She had driven across the country. — Она проехала на машине через всю страну."
    ]],
    ["dislike", "dislikes", "disliked", "disliked", "disliking", "не нравиться", [
        "I dislike noisy places. — Мне не нравятся шумные места.",
        "She disliked the movie. — Ей не понравился фильм.",
        "They had disliked the proposal. — Им не понравилось предложение."
    ]],
    ["discuss", "discusses", "discussed", "discussed", "discussing", "обсуждать", [
        "Let's discuss the plan. — Давайте обсудим план.",
        "They discussed the issue in detail. — Они детально обсудили проблему.",
        "We had discussed all the options. — Мы обсудили все варианты."
    ]],
    ["destroy", "destroys", "destroyed", "destroyed", "destroying", "разрушать", [
        "The fire destroyed the building. — Пожар уничтожил здание.",
        "She destroyed the evidence. — Она уничтожила доказательства.",
        "They had destroyed the old files. — Они удалили старые файлы."
    ]],
    ["develop", "develops", "developed", "developed", "developing", "развиваться", [
        "I want to develop my skills. — Я хочу развивать свои навыки.",
        "He developed a new strategy. — Он разработал новую стратегию.",
        "The company had developed rapidly. — Компания быстро развивалась."
    ]],
    ["decide", "decides", "decided", "decided", "deciding", "принимать решение", [
        "I can't decide what to wear. — Я не могу решить, что надеть.",
        "She decided to take the job. — Она решила принять работу.",
        "They had decided on a location. — Они выбрали место."
    ]],
    ["drink", "drinks", "drank", "drunk", "drinking", "пить", [
        "I drink coffee every morning. — Я пью кофе каждое утро.",
        "He drank a glass of water. — Он выпил стакан воды.",
        "She had drunk all the juice. — Она выпила весь сок."
    ]],
    ["do", "does", "did", "done", "doing", "делать", [
        "I do my homework every evening. — Я делаю домашнее задание каждый вечер.",
        "She did a great job. — Она проделала отличную работу.",
        "They had done all the work. — Они сделали всю работу."
    ]],
    ["dance", "dances", "danced", "danced", "dancing", "танцевать", [
        "I love to dance. — Я люблю танцевать.",
        "They danced all night. — Они танцевали всю ночь.",
        "She had danced on stage before. — Она уже танцевала на сцене."
    ]],
    ["dream", "dreams", "dreamed","dreamt", "dreamed", "dreaming", "мечтать", [
        "I dream of becoming an artist. — Я мечтаю стать художником.",
        "He dreamed of traveling the world. — Он мечтал о путешествиях по миру.",
        "She had dreamed about this moment. — Она мечтала об этом моменте."
    ]],
    ["describe", "describes", "described", "described", "describing", "описывать, охарактеризовать", [
        "Can you describe the painting? — Можешь описать картину?",
        "She described the event in detail. — Она подробно описала событие.",
        "They had described the problem accurately. — Они точно описали проблему."
    ]],
    ["draw", "draws", "drew", "drawn", "drawing", "рисовать, тянуть", [
        "I like to draw in my free time. — Мне нравится рисовать в свободное время.",
        "She drew a beautiful landscape. — Она нарисовала красивый пейзаж.",
        "They had drawn up a contract. — Они составили договор."
    ]],
    ["deal", "deals", "dealt", "dealt", "dealing", "вести дела", [
        "I deal with customer complaints. — Я занимаюсь жалобами клиентов.",
        "He dealt with the problem effectively. — Он эффективно решил проблему.",
        "They had dealt with similar issues before. — Они уже сталкивались с похожими вопросами."
    ]],
    ["drop", "drops", "dropped", "dropped", "dropping", "падать, уронить", [
        "I accidentally drop things when I'm nervous. — Я случайно роняю вещи, когда нервничаю.",
        "She dropped her keys on the floor. — Она уронила ключи на пол.",
        "They had dropped out of the course. — Они бросили курс."
    ]],
    ["design", "designs", "designed", "designed", "designing", "проектировать, разрабатывать", [
        "I design websites. — Я разрабатываю сайты.",
        "She designed a new logo. — Она разработала новый логотип.",
        "They had designed the layout for the magazine. — Они разработали макет для журнала."
    ]],
    ["expect", "expects", "expected", "expected", "expecting", "ожидать, рассчитывать", [
        "I expect good results. — Я ожидаю хорошие результаты.",
        "She expected him to arrive early. — Она ожидала, что он придет рано.",
        "They had expected a different outcome. — Они рассчитывали на другой результат."
    ]],
    ["eat", "eats", "ate", "eaten", "eating", "есть", [
        "I eat breakfast every morning. — Я завтракаю каждое утро.",
        "He ate a sandwich for lunch. — Он съел бутерброд на обед.",
        "They had eaten all the pizza. — Они съели всю пиццу."
    ]],
    ["earn", "earns", "earned", "earned", "earning", "зарабатывать", [
        "I earn money by freelancing. — Я зарабатываю на фрилансе.",
        "She earned a promotion at work. — Она получила повышение на работе.",
        "They had earned enough to buy a car. — Они заработали достаточно, чтобы купить машину."
    ]],
    ["explain", "explains", "explained", "explained", "explaining", "объяснять", [
        "Can you explain the rules? — Можешь объяснить правила?",
        "He explained the concept clearly. — Он ясно объяснил концепцию.",
        "They had explained everything in detail. — Они объяснили все в деталях."
    ]],
    ["express", "expresses", "expressed", "expressed", "expressing", "выражать", [
        "I express my feelings through art. — Я выражаю свои чувства через искусство.",
        "She expressed her gratitude. — Она выразила свою благодарность.",
        "They had expressed their opinions. — Они выразили свои мнения."
    ]],
    ["end", "ends", "ended", "ended", "ending", "заканчивать, прекращать", [
        "I end my day with a book. — Я заканчиваю свой день с книгой.",
        "The concert ended late. — Концерт закончился поздно.",
        "They had ended their partnership. — Они прекратили своё партнерство."
    ]],
    ["enter", "enters", "entered", "entered", "entering", "вводить, входить", [
        "I enter the building every day. — Я вхожу в здание каждый день.",
        "He entered the room quietly. — Он тихо вошел в комнату.",
        "They had entered their names in the register. — Они внесли свои имена в регистр."
    ]],
    ["establish", "establishes", "established", "established", "establishing", "устанавливать, создавать", [
        "They establish new rules each year. — Они устанавливают новые правила каждый год.",
        "She established a successful company. — Она основала успешную компанию.",
        "They had established good relations. — Они установили хорошие отношения."
    ]],
    ["enjoy", "enjoys", "enjoyed", "enjoyed", "enjoying", "наслаждаться", [
        "I enjoy listening to music. — Мне нравится слушать музыку.",
        "She enjoyed the movie. — Ей понравился фильм.",
        "They had enjoyed their time together. — Они хорошо провели время вместе."
    ]],
    ["fall", "falls", "fell", "fallen", "falling", "падать", [
        "Leaves fall in autumn. — Листья падают осенью.",
        "He fell off his bike. — Он упал с велосипеда.",
        "They had fallen asleep quickly. — Они быстро заснули."
    ]],
    ["find", "finds", "found", "found", "finding", "находить, отыскивать", [
        "I find interesting books online. — Я нахожу интересные книги в интернете.",
        "She found her lost keys. — Она нашла свои потерянные ключи.",
        "They had found a solution to the problem. — Они нашли решение проблемы."
    ]],
    ["fail", "fails", "failed", "failed", "failing", "провалиться", [
        "I try not to fail my exams. — Я стараюсь не проваливать экзамены.",
        "He failed to reach the goal. — Он не достиг цели.",
        "They had failed despite their efforts. — Они потерпели неудачу, несмотря на все усилия."
    ]],
    ["fix", "fixes", "fixed", "fixed", "fixing", "чинить", [
        "I fix my car myself. — Я чиню свою машину сам.",
        "She fixed the broken chair. — Она починила сломанный стул.",
        "They had fixed all the issues. — Они устранили все проблемы."
    ]],
    ["fight", "fights", "fought", "fought", "fighting", "сражаться", [
        "They fight for their rights. — Они борются за свои права.",
        "He fought bravely. — Он сражался храбро.",
        "They had fought many battles together. — Они вместе прошли через многие битвы."
    ]],
    ["feel", "feels", "felt", "felt", "feeling", "чувствовать", [
        "I feel happy today. — Сегодня я чувствую себя счастливым.",
        "She felt cold in the room. — Ей было холодно в комнате.",
        "They had felt this way before. — Они уже чувствовали это раньше."
    ]],
    ["fly", "flies", "flew", "flown", "flying", "летать", [
        "Birds fly south in winter. — Птицы улетают на юг зимой.",
        "She flew to New York last week. — Она летала в Нью-Йорк на прошлой неделе.",
        "They had flown together before. — Они уже летали вместе."
    ]],
    ["forget", "forgets", "forgot", "forgotten", "forgetting", "забывать", [
        "I never forget my friends' birthdays. — Я никогда не забываю дни рождения своих друзей.",
        "He forgot his homework at home. — Он забыл домашнее задание дома.",
        "They had forgotten about the meeting. — Они забыли о встрече."
    ]],
["follow", "follows", "followed", "followed", "following", "следовать", [
    "I follow my instincts. — Я следую своим инстинктам.",
    "She follows him into the room. — Она последовала за ним в комнату.",
    "They had followed all the instructions. — Они следовали всем инструкциям."
]],
["forgive", "forgives", "forgave", "forgiven", "forgiving", "прощать", [
    "I forgive people easily. — Я легко прощаю людей.",
    "She forgives him for being late. — Она простила его за опоздание.",
    "They had forgiven each other. — Они простили друг друга."
]],
["face", "faces", "faced", "faced", "facing", "сталкиваться, находиться лицом к лицу", [
    "I face many challenges at work. — Я сталкиваюсь со многими трудностями на работе.",
    "He faces his fears. — Он встретился лицом к лицу со своими страхами.",
    "They had faced similar situations before. — Они уже сталкивались с подобными ситуациями."
]],
["fuck", "fucks", "fucked", "fucked", "fucking", "трахаться", [
    "I don’t usually fuck around. — Обычно я не занимаюсь такими вещами.",
    "They fuck all night. — Они трахались всю ночь.",
    "They had fucked several times before. — Они уже занимались этим несколько раз."
]],
["finish", "finishes", "finished", "finished", "finishing", "заканчивать, завершать", [
    "I finish my work at 5 PM. — Я заканчиваю свою работу в 5 вечера.",
    "She finishes reading the book. — Она закончила читать книгу.",
    "They are finishing their lunch. — Они заканчивают обед."
]],
["fill", "fills", "filled", "filled", "filling", "заполнять, наполнять", [
    "I fill the tank with gas. — Я заправляю бак бензином.",
    "She fills the glass with water. — Она наполнила стакан водой.",
    "They had filled all the forms. — Они заполнили все формы."
]],
["focus", "focuses", "focused", "focused", "focusing", "фокусироваться, сосредоточивать (внимание)", [
    "I focus on my work. — Я сосредоточен на своей работе.",
    "She focuses on the task. — Она сосредоточилась на задаче.",
    "They had focused on improving their skills. — Они сосредоточились на улучшении своих навыков."
]],
["force", "forces", "forced", "forced", "forcing", "заставлять, принуждать", [
    "I don't want to force you to stay. — Я не хочу заставлять тебя оставаться.",
    "She forces him to apologize. — Она заставила его извиниться.",
    "They had forced the door open. — Они заставили дверь открыться."
]],
["form", "forms", "formed", "formed", "forming", "образовывать, формировать, создавать", [
    "They form a great team. — Они образуют отличную команду.",
    "He forms an idea in his mind. — У него сформировалась идея.",
    "They had formed a new committee. — Они сформировали новый комитет."
]],
["go", "goes", "went", "gone", "going", "идти, ехать", [
    "I go to work every day. — Я хожу на работу каждый день.",
    "He went to the store yesterday. — Вчера он пошел в магазин.",
    "They had gone by the time I arrived. — Они уже ушли к тому времени, как я пришел."
]],
["get", "gets", "got", "got (gotten)", "getting", "получать", [
    "I get emails every morning. — Я получаю письма каждое утро.",
    "She got a new job last week. — На прошлой неделе она получила новую работу.",
    "They had gotten everything ready. — Они подготовили все."
]],
["give", "gives", "gave", "given", "giving", "давать", [
    "I give gifts on birthdays. — Я дарю подарки на дни рождения.",
    "She gives him a book. — Она подарила ему книгу.",
    "They had given their support. — Они оказали поддержку."
]],
["grow", "grows", "grew", "grown", "growing", "расти", [
    "Plants grow in sunlight. — Растения растут на свету.",
    "The child grows quickly. — Ребенок быстро рос.",
    "They had grown very tall. — Они очень выросли."
]],
["guess", "guesses", "guessed", "guessed", "guessing", "догадываться, угадывать", [
    "I guess he’s busy. — Думаю, он занят.",
    "She guesses the answer. — Она угадала ответ.",
    "They had guessed correctly. — Они угадали верно."
]],
["happen", "happens", "happened", "happened", "happening", "случаться, происходить", [
    "Strange things happen here. — Здесь происходят странные вещи.",
    "The event happens quickly. — Событие произошло быстро.",
    "They had happened to see it. — Им удалось это увидеть."
]],
["hold", "holds", "held", "held", "holding", "удерживать, держать", [
    "I hold the baby gently. — Я держу малыша аккуратно.",
    "He holds the door open. — Он держит дверь открытой.",
    "They had held the meeting online. — Они провели собрание онлайн."
]],
["hear", "hears", "heard", "heard", "hearing", "слышать", [
    "I hear music from next door. — Я слышу музыку из соседней комнаты.",
    "She hears a strange noise. — Она услышала странный звук.",
    "They had heard the news already. — Они уже слышали новости."
]],
["have", "has", "had", "had", "having", "иметь", [
    "I have a big family. — У меня большая семья.",
    "She has a lot of work to do. — У нее было много работы.",
    "They had had dinner by then. — К тому времени они уже поужинали."
]],
["harm", "harms", "harmed", "harmed", "harming", "вредить, наносить ущерб", [
    "I try not to harm the environment. — Я стараюсь не вредить окружающей среде.",
    "She harms her reputation with that comment. — Она навредила своей репутации этим комментарием.",
    "They had harmed no one. — Они никому не причинили вреда."
]],
["hate", "hates", "hated", "hated", "hating", "ненавидеть", [
    "I hate rainy days. — Я ненавижу дождливые дни.",
    "She hates waking up early. — Она ненавидела вставать рано.",
    "They had hated that job. — Им не нравилась эта работа."
]],
["help", "helps", "helped", "helped", "helping", "помогать", [
    "I help my friends when they need it. — Я помогаю друзьям, когда это нужно.",
    "She helps him with his homework. — Она помогла ему с домашним заданием.",
    "They had helped each other before. — Они уже помогали друг другу раньше."
]],
["hope", "hopes", "hoped", "hoped", "hoping", "надеяться", [
    "I hope for the best. — Я надеюсь на лучшее.",
    "She hopes to see him again. — Она надеялась снова его увидеть.",
    "They had hoped for a better outcome. — Они надеялись на лучший результат."
]],
["hurt", "hurts", "hurt", "hurt", "hurting", "причинять боль", [
    "I hurt my knee while running. — Я повредил колено во время бега.",
    "She hurts her feelings. — Она обидела его чувства.",
    "They had hurt no one. — Они никому не причинили вреда."
]],
["heal", "heals", "healed", "healed", "healing", "излечивать", [
    "Time can heal wounds. — Время может исцелить раны.",
    "The doctor heals her injury. — Доктор вылечил ее травму.",
    "They had healed completely. — Они полностью исцелились."
]],
["hit", "hits", "hit", "hit", "hitting", "бить, поражать", [
    "I hit the ball with the bat. — Я ударил по мячу битой.",
    "She hits the target perfectly. — Она точно поразила цель.",
    "They had hit a rough patch. — Они столкнулись с трудностями."
]],
["hang", "hangs", "hung", "hung", "hanging", "висеть, вешать", [
    "I hang my coat on the hook. — Я вешаю пальто на крючок.",
    "She hangs the picture on the wall. — Она повесила картину на стену.",
    "They had hung the decorations. — Они повесили украшения."
]],
["hide", "hides", "hid", "hidden", "hiding", "прятать", [
    "I hide my keys in a safe place. — Я прячу ключи в безопасном месте.",
    "He hides behind the tree. — Он спрятался за деревом.",
    "They had hidden the treasure well. — Они хорошо спрятали сокровище."
]],
["include", "includes", "included", "included", "including", "включать, содержать в себе", [
    "The price includes tax. — Цена включает налог.",
    "She includes all the details in her report. — Она включила все детали в свой отчет.",
    "They had included several examples in the presentation. — Они включили несколько примеров в презентацию."
]],
["improve", "improves", "improved", "improved", "improving", "улучшать", [
    "I want to improve my skills. — Я хочу улучшить свои навыки.",
    "He improves his grades this semester. — Он улучшил свои оценки в этом семестре.",
    "They had improved the process significantly. — Они значительно улучшили процесс."
]],
["influence", "influences", "influenced", "influenced", "influencing", "влиять", [
    "Movies can influence people's opinions. — Фильмы могут влиять на мнения людей.",
    "She influenced his decision. — Она повлияла на его решение.",
    "They had influenced the outcome of the election. — Они повлияли на результат выборов."
]],
["invest", "invests", "invested", "invested", "investing", "инвестировать", [
    "I plan to invest in real estate. — Я планирую инвестировать в недвижимость.",
    "He invested a lot of money in stocks. — Он инвестировал много денег в акции.",
    "They had invested in new technology. — Они вложили деньги в новые технологии."
]],
["involve", "involves", "involved", "involved", "involving", "включать, вовлекать, содержать", [
    "The job involves a lot of travel. — Работа включает много поездок.",
    "She was involved in the project from the start. — Она была вовлечена в проект с самого начала.",
    "They had involved the community in the planning. — Они привлекли общественность к планированию."
]],
["increase", "increases", "increased", "increased", "increasing", "увеличивать", [
    "I want to increase my savings. — Я хочу увеличить свои сбережения.",
    "Sales increased last quarter. — Продажи увеличились в прошлом квартале.",
    "They had increased their workforce significantly. — Они значительно увеличили штат сотрудников."
]],
["identify", "identifies", "identified", "identified", "identifying", "идентифицировать, отождествлять", [
    "I can identify the main issues. — Я могу идентифицировать основные проблемы.",
    "She identified the suspect quickly. — Она быстро идентифицировала подозреваемого.",
    "They had identified the source of the problem. — Они определили источник проблемы."
]],
["indicate", "indicates", "indicated", "indicated", "indicating", "указывать, означать", [
    "The sign indicates the direction. — Знак указывает направление.",
    "He indicated that he was ready. — Он указал, что готов.",
    "They had indicated a need for improvement. — Они указали на необходимость улучшения."
]],
["interest", "interests", "interested", "interested", "заинтересовать, интересовать", [
    "The topic interests me a lot. — Эта тема меня очень интересует.",
    "She was interested in the project. — Она была заинтересована в проекте.",
    "They had interested several investors. — Они заинтересовали нескольких инвесторов."
]],
["join", "joins", "joined", "joined", "joining", "присоединиться", [
    "I want to join the club. — Я хочу присоединиться к клубу.",
    "He joined the meeting late. — Он присоединился к встрече с опозданием.",
    "They had joined forces for the project. — Они объединили усилия для проекта."
]],
["jump", "jumps", "jumped", "jumped", "jumping", "прыгать", [
    "I like to jump on the trampoline. — Мне нравится прыгать на батуте.",
    "She jumped over the puddle. — Она перепрыгнула через лужу.",
    "They had jumped at the opportunity. — Они не упустили возможность."
]],
["kill", "kills", "killed", "killed", "killing", "убивать", [
    "I don't want to kill the mood. — Я не хочу портить настроение.",
    "He killed the weeds in the garden. — Он уничтожил сорняки в саду.",
    "They had killed time before the event. — Они убили время перед событием."
]],
["keep", "keeps", "kept", "kept", "keeping", "сохранять, соблюдать", [
    "I keep my promises. — Я сдерживаю свои обещания.",
    "She kept the secret safe. — Она сохранила секрет в тайне.",
    "They had kept the tradition alive. — Они сохранили традицию."
]],
["know", "knows", "knew", "known", "knowing", "знать", [
    "I know the answer to the question. — Я знаю ответ на вопрос.",
    "She knew him from school. — Она знала его со школы.",
    "They had known each other for years. — Они знали друг друга много лет."
]],
["live", "lives", "lived", "lived", "living", "жить", [
    "I live in a big city. — Я живу в большом городе.",
    "He lived here for ten years. — Он жил здесь десять лет.",
    "They had lived in several countries. — Они жили в нескольких странах."
]],
["let", "lets", "let", "let", "letting", "позволять", [
    "I let my friend borrow my book. — Я позволил другу взять мою книгу.",
    "She let him go early. — Она позволила ему уйти рано.",
    "They had let the kids play outside. — Они позволили детям играть на улице."
]],
["leave", "leaves", "left", "left", "leaving", "покидать, оставлять", [
    "I leave for work at 8 AM. — Я ухожу на работу в 8 утра.",
    "He left his keys on the table. — Он оставил ключи на столе.",
    "They had left the party early. — Они ушли с вечеринки рано."
]],
["love", "loves", "loved", "loved", "loving", "любить", [
    "I love reading books. — Я люблю читать книги.",
    "She loved him deeply. — Она любила его искренне.",
    "They had loved each other for years. — Они любили друг друга много лет."
]],
["like", "likes", "liked", "liked", "liking", "нравиться", [
    "I like ice cream. — Мне нравится мороженое.",
    "He liked the movie. — Ему понравился фильм.",
    "They had liked the concert very much. — Им очень понравился концерт."
]],
["laugh", "laughs", "laughed", "laughed", "laughing", "смеяться", [
    "I laugh at funny jokes. — Я смеюсь над смешными шутками.",
    "She laughed when she heard the story. — Она засмеялась, когда услышала историю.",
    "They had laughed together at the comedy show. — Они смеялись вместе на комедийном шоу."
]],
["learn", "learns", "learnt (learned)", "learnt (learned)", "learning", "учить", [
    "I learn something new every day. — Я учу что—то новое каждый день.",
    "He learnt to play the guitar. — Он научился играть на гитаре.",
    "They had learned from their mistakes. — Они научились на своих ошибках."
]],
["listen", "listens", "listened", "listened", "listening", "слушать", [
    "I listen to music while I work. — Я слушаю музыку, пока работаю.",
    "She listened carefully to the instructions. — Она внимательно слушала инструкции.",
    "They had listened to the lecture attentively. — Они внимательно слушали лекцию."
]],
["look", "looks", "looked", "looked", "looking", "смотреть", [
    "I look at the stars at night. — Я смотрю на звезды ночью.",
    "He looked happy in the picture. — Он выглядел счастливым на фотографии.",
    "They had looked everywhere for the lost dog. — Они искали потерянную собаку повсюду."
]],
["lead", "leads", "led", "led", "leading", "вести, лидировать", [
    "I lead the team at work. — Я возглавляю команду на работе.",
    "She led the project successfully. — Она успешно руководила проектом.",
    "They had led the discussion on that topic. — Они вели обсуждение по этой теме."
]],
["lose", "loses", "lost", "lost", "losing", "проигрывать, терять", [
    "I lose my keys often. — Я часто теряю ключи.",
    "He lost the game yesterday. — Он проиграл игру вчера.",
    "They had lost track of time. — Они потеряли счет времени."
]],
["lie", "lies", "lay", "lain", "lying", "лгать", [
    "I lie about my age. — Я лгу о своем возрасте.",
    "He lay down on the couch. — Он лег на диван.",
    "They had lain in the sun all day. — Они лежали на солнце весь день."
]],
["lay", "lays", "laid", "laid", "laying", "класть, стелить", [
    "I lay the book on the table. — Я кладу книгу на стол.",
    "She laid the cards out on the table. — Она разложила карты на столе.",
    "They had laid the foundation for the new building. — Они заложили фундамент нового здания."
]],
["make", "makes", "made", "made", "making", "совершать", [
    "I make dinner for my family. — Я готовлю ужин для своей семьи.",
    "He made a mistake on the test. — Он допустил ошибку на тесте.",
    "They had made plans for the weekend. — Они составили планы на выходные."
]],
["move", "moves", "moved", "moved", "moving", "двигаться", [
    "I move to a new city every few years. — Я переезжаю в новый город каждые несколько лет.",
    "He moved the chair closer to the table. — Он подвинул стул ближе к столу.",
    "They had moved on from that experience. — Они уже забыли об этом опыте."
]],
["mean", "means", "meant", "meant", "meaning", "значить", [
    "I mean what I say. — Я имею в виду то, что говорю.",
    "He meant to call you yesterday. — Он хотел позвонить тебе вчера.",
    "They had meant no harm. — Они не имели в виду ничего плохого."
]],
["meet", "meets", "met", "met", "meeting", "встречать", [
    "I meet my friends every weekend. — Я встречаюсь с друзьями каждую неделю.",
    "She met her husband at college. — Она встретила своего мужа в колледже.",
    "They had met before at the conference. — Они встречались ранее на конференции."
]],
["manage", "manages", "managed", "managed", "managing", "управлять", [
    "I manage a small team. — Я управляю небольшой командой.",
    "He managed to finish the project on time. — Ему удалось завершить проект вовремя.",
    "They had managed the hotel for years. — Они управляли отелем в течение многих лет."
]],
    ["miss", "misses", "missed", "missed", "missing", "пропускать, скучать", [
        "I miss my hometown. — Я скучаю по своему родному городу.",
        "He misses the bus this morning. — Он опоздал на автобус сегодня утром.",
        "They had missed their chance to participate. — Они упустили свою возможность участвовать."
    ]],
    ["maintain", "maintains", "maintained", "maintained", "maintaining", "поддерживать, сохранять", [
        "I maintain a healthy lifestyle. — Я поддерживаю здоровый образ жизни.",
        "She maintains her composure during the meeting. — Она сохраняет спокойствие во время встречи.",
        "They had maintained the equipment regularly. — Они регулярно поддерживали оборудование."
    ]],
    ["need", "needs", "needed", "needed", "needing", "нуждаться", [
        "I need help with my homework. — Мне нужна помощь с домашним заданием.",
        "She needs some time to think. — Ей нужно немного времени, чтобы подумать.",
        "They had needed support during the crisis. — Им нужна была поддержка во время кризиса."
    ]],
    ["note", "notes", "noted", "noted", "noting", "отмечать, замечать", [
        "I will note the important points. — Я отмечу важные моменты.",
        "He notes her comments in the meeting. — Он замечает ее комментарии на встрече.",
        "They had noted the changes in the report. — Они отметили изменения в отчете."
    ]],
    ["name", "names", "named", "named", "naming", "называть", [
        "I name my plants after flowers. — Я называю свои растения в честь цветов.",
        "She names her cat Whiskers. — Она называет свою кошку Усы.",
        "They had named the baby after her grandmother. — Они назвали ребенка в честь ее бабушки."
    ]],
    ["offer", "offers", "offered", "offered", "offering", "предлагать", [
        "I want to offer my assistance. — Я хочу предложить свою помощь.",
        "He offers her a ride home. — Он предлагает ей подвезти домой.",
        "They had offered their services to the community. — Они предложили свои услуги сообществу."
    ]],
    ["open", "opens", "opened", "opened", "opening", "открывать", [
        "I open the door for my guests. — Я открываю дверь для своих гостей.",
        "She opens the gift with excitement. — Она открывает подарок с волнением.",
        "They had opened a new store downtown. — Они открыли новый магазин в центре города."
    ]],
    ["oppose", "opposes", "opposed", "opposed", "opposing", "противостоять", [
        "I oppose the new law. — Я против нового закона.",
        "She opposes the decision made by the committee. — Она противостоит решению, принятому комитетом.",
        "They had opposed the changes to the policy. — Они выступили против изменений в политике."
    ]],
    ["occur", "occurs", "occurred", "occurred", "occurring", "происходить, иметь место", [
        "The event will occur next week. — Мероприятие пройдет на следующей неделе.",
        "It occurs to me that I forgot my keys. — Мне пришло в голову, что я забыл свои ключи.",
        "They had occurred several times before. — Это происходило несколько раз ранее."
    ]],
    ["pull", "pulls", "pulled", "pulled", "pulling", "тянуть, вытащить", [
        "I pull the door to open it. — Я тяну дверь, чтобы открыть ее.",
        "He pulls the box off the shelf. — Он вытаскивает коробку с полки.",
        "They had pulled together to finish the project. — Они объединили усилия, чтобы завершить проект."
    ]],
    ["pass", "passes", "passed", "passed", "passing", "проходить, передавать", [
        "I pass by the park every day. — Я прохожу мимо парка каждый день.",
        "He passes the ball to his teammate. — Он передает мяч своему товарищу по команде.",
        "They had passed the test with flying colors. — Они сдали тест с отличием."
    ]],
    ["provide", "provides", "provided", "provided", "providing", "обеспечивать, предоставлять", [
        "I provide my family with everything they need. — Я обеспечиваю свою семью всем необходимым.",
        "She provides excellent service at the restaurant. — Она предоставляет отличный сервис в ресторане.",
        "They had provided resources for the students. — Они предоставили ресурсы для студентов."
    ]],
    ["put", "puts", "put", "put", "putting", "класть", [
        "I put my phone on the table. — Я положил телефон на стол.",
        "He puts the groceries away after shopping. — Он убирает продукты после покупок.",
        "They had put together a plan for the project. — Они разработали план для проекта."
    ]],
    ["pay", "pays", "paid", "paid", "paying", "платить", [
        "I pay my bills online. — Я плачу свои счета онлайн.",
        "He pays for the meal. — Он платит за еду.",
        "They had paid off their debts. — Они погасили свои долги."
    ]],
    ["play", "plays", "played", "played", "playing", "играть", [
        "I play soccer every weekend. — Я играю в футбол каждые выходные.",
        "She plays the piano beautifully. — Она прекрасно играет на пианино.",
        "They had played in the tournament last year. — Они играли в турнире в прошлом году."
    ]],
    ["practice", "practices", "practiced", "practiced", "practicing", "практиковаться", [
        "I practice my guitar daily. — Я ежедневно практикуюсь на гитаре.",
        "He practices for the exam all week. — Он готовился к экзамену всю неделю.",
        "They had practiced their speech before the presentation. — Они репетировали свою речь перед презентацией."
    ]],
    ["perform", "performs", "performed", "performed", "performing", "выступать", [
        "I perform in a local theater. — Я выступаю в местном театре.",
        "She performs a song at the concert. — Она исполнила песню на концерте.",
        "They had performed well in the competition. — Они хорошо выступили на соревнованиях."
    ]],
    ["protect", "protects", "protected", "protected", "protecting", "защищать", [
        "I protect my skin from the sun. — Я защищаю свою кожу от солнца.",
        "He protects his friend during the fight. — Он защищает своего друга во время драки.",
        "They had protected their rights as consumers. — Они защитили свои права как потребителей."
    ]],
    ["pick", "picks", "picked", "picked", "picking", "выбирать, собирать", [
        "I pick apples from the tree. — Я собираю яблоки с дерева.",
        "She picks a dress for the party. — Она выбирает платье для вечеринки.",
        "They had picked their favorite songs for the playlist. — Они выбрали свои любимые песни для плейлиста."
    ]],
    ["produce", "produces", "produced", "produced", "producing", "производить", [
        "I produce my own music. — Я создаю свою собственную музыку.",
        "He produces the film last year. — Он произвел фильм в прошлом году.",
        "They had produced a significant amount of work. — Они выполнили значительное количество работы."
    ]],
    ["point", "points", "pointed", "pointed", "pointing", "указывать, показывать", [
        "I point to the map when giving directions. — Я указываю на карту, когда даю указания.",
        "She points out the mistakes in the report. — Она указывает на ошибки в отчете.",
        "They had pointed to the need for changes. — Они указали на необходимость изменений."
    ]],
    ["place", "places", "placed", "placed", "placing", "размещать, помещать", [
        "I place the order online. — Я размещаю заказ онлайн.",
        "He places his trust in her. — Он доверяет ей.",
        "They had placed their bets on the game. — Они сделали свои ставки на игру."
    ]],
    ["plan", "plans", "planned", "planned", "planning", "планировать", [
        "I plan my week every Sunday. — Я планирую свою неделю каждое воскресенье.",
        "She plans a surprise party for him. — Она планирует сюрприз для него.",
        "They had planned the trip for months. — Они планировали поездку в течение нескольких месяцев."
    ]],
    ["push", "pushes", "pushed", "pushed", "pushing", "толкать, нажимать", [
        "I push the door to enter. — Я толкаю дверь, чтобы войти.",
        "He pushes the button to start the machine. — Он нажимает на кнопку, чтобы запустить машину.",
        "They had pushed for changes in the policy. — Они добивались изменений в политике."
    ]],
    ["prepare", "prepares", "prepared", "prepared", "preparing", "готовить, готовиться", [
        "I prepare breakfast for my family. — Я готовлю завтрак для своей семьи.",
        "She prepares for the interview carefully. — Она тщательно подготовилась к собеседованию.",
        "They had prepared everything for the event. — Они подготовили все к мероприятию."
    ]],
    ["present", "presents", "presented", "presented", "presenting", "представлять, дарить", [
        "I present my findings to the class. — Я представляю свои выводы классу.",
        "He presents her with a gift. — Он дарит ей подарок.",
        "They had presented their research at the conference. — Они представили свои исследования на конференции."
    ]],
    ["prove", "proves", "proved", "proved", "proving", "доказывать, оказываться", [
        "I prove my point with evidence. — Я доказываю свою точку зрения с помощью доказательств.",
        "She proves to be a great leader. — Она оказалась отличным лидером.",
        "They had proved their theory through experiments. — Они доказали свою теорию с помощью экспериментов."
    ]],
    ["return", "returns", "returned", "returned", "returning", "возвращаться; отдавать", [
        "I return home every weekend. — Я возвращаюсь домой каждую неделю.",
        "She returns the book to the library. — Она вернула книгу в библиотеку.",
        "They had returned from their trip last night. — Они вернулись из поездки прошлой ночью."
    ]],
    ["rise", "rises", "rose", "risen", "rising", "возрастать, подниматься", [
        "The sun rises in the east. — Солнце встает на востоке.",
        "The prices rose significantly last year. — Цены значительно возросли в прошлом году.",
        "They had risen to the challenge. — Они поднялись к вызову."
    ]],
    ["report", "reports", "reported", "reported", "reporting", "сообщить, сообщать", [
        "I report the news every evening. — Я сообщаю новости каждый вечер.",
        "She reports the incident to the authorities. — Она сообщает о происшествии властям.",
        "They had reported their findings to the committee. — Они представили свои выводы комитету."
    ]],
    ["require", "requires", "required", "required", "requiring", "требовать, нуждаться", [
        "I require assistance with this project. — Мне нужна помощь с этим проектом.",
        "She requires extra time to finish her work. — Ей потребовалось дополнительное время, чтобы закончить свою работу.",
        "They had required all employees to attend the meeting. — Они потребовали, чтобы все сотрудники присутствовали на встрече."
    ]],
 ["raise", "raises", "raised", "raised", "raising", "поднимать, повышать", [
        "I raise my hand to ask a question. — Я поднимаю руку, чтобы задать вопрос.",
        "She raised the issue during the discussion. — Она подняла вопрос во время обсуждения.",
        "They had raised the funds for the charity. — Они собрали средства для благотворительности."
    ]],
    ["rain", "rains", "rained", "rained", "raining", "идти (о дожде)", [
        "It rains a lot in this region. — В этом регионе часто идет дождь.",
        "Yesterday, it rained all day. — Вчера дождь шел весь день.",
        "It has rained every day this week. — Дождь шел каждый день на этой неделе."
    ]],
    ["reach", "reaches", "reached", "reached", "reaching", "достигать, связаться", [
        "I reach out to my friends for support. — Я обращаюсь к друзьям за поддержкой.",
        "He reached his goals after much hard work. — Он достиг своих целей после долгих усилий.",
        "They had reached an agreement by the end of the negotiation. — Они достигли соглашения к концу переговоров."
    ]],
    ["read", "reads", "read", "read", "reading", "читать", [
        "I read a book every month. — Я читаю книгу каждый месяц.",
        "She read the article yesterday. — Она прочитала статью вчера.",
        "They had read all the documents before the meeting. — Они прочитали все документы перед встречей."
    ]],
    ["receive", "receives", "received", "received", "receiving", "получать, принимать", [
        "I receive emails from my clients daily. — Я получаю электронные письма от клиентов ежедневно.",
        "She received a letter from her friend. — Она получила письмо от своей подруги.",
        "They had received feedback from their supervisor. — Они получили отзыв от своего руководителя."
    ]],
    ["reject", "rejects", "rejected", "rejected", "rejecting", "отвергать", [
        "I reject any form of bullying. — Я отвергаю любое проявление буллинга.",
        "He rejected the proposal for the new project. — Он отверг предложение по новому проекту.",
        "They had rejected the idea after much discussion. — Они отвергли идею после долгих обсуждений."
    ]],
    ["run", "runs", "ran", "run", "running", "бегать", [
        "I run in the park every morning. — Я бегаю в парке каждое утро.",
        "She ran a marathon last year. — Она пробежала марафон в прошлом году.",
        "They had run several tests before concluding. — Они провели несколько тестов перед выводами."
    ]],
    ["remember", "remembers", "remembered", "remembered", "remembering", "помнить", [
        "I remember my first day of school. — Я помню свой первый день в школе.",
        "She remembered to bring her lunch. — Она не забыла принести свой обед.",
        "They had remembered the anniversary of their wedding. — Они вспомнили о годовщине своей свадьбы."
    ]],
    ["remain", "remains", "remained", "remained", "remaining", "оставаться", [
        "I remain calm during stressful situations. — Я остаюсь спокойным в стрессовых ситуациях.",
        "She remained silent during the meeting. — Она оставалась молчаливой на встрече.",
        "They had remained friends despite the distance. — Они оставались друзьями, несмотря на расстояние."
    ]],
    ["realize", "realizes", "realized", "realized", "realizing", "понимать", [
        "I realize the importance of this task. — Я понимаю важность этой задачи.",
        "She realized she had made a mistake. — Она поняла, что ошиблась.",
        "They had realized their goals after years of hard work. — Они достигли своих целей после многих лет упорного труда."
    ]],
    ["represent", "represents", "represented", "represented", "representing", "представлять, изображать", [
        "I represent my company at trade shows. — Я представляю свою компанию на выставках.",
        "She represented her country in the Olympics. — Она представляла свою страну на Олимпиаде.",
        "They had represented their interests in the negotiations. — Они представляли свои интересы на переговорах."
    ]],
    ["reduce", "reduces", "reduced", "reduced", "reducing", "уменьшить, сокращать, снижать", [
        "I want to reduce my screen time. — Я хочу уменьшить время, проводимое перед экраном.",
        "She reduced her expenses last month. — Она сократила свои расходы в прошлом месяце.",
        "They had reduced the price of the product. — Они снизили цену на продукт."
    ]],
    ["recognize", "recognizes", "recognized", "recognized", "recognizing", "распознавать, признавать", [
        "I recognize that face from somewhere. — Я узнаю это лицо откуда—то.",
        "She recognized him immediately. — Она сразу его узнала.",
        "They had recognized the need for change in their organization. — Они признали необходимость изменений в своей организации."
    ]],
    ["remove", "removes", "removed", "removed", "removing", "удалять", [
        "I remove the old files from my computer. — Я удаляю старые файлы с компьютера.",
        "He removed the sticker from the wall. — Он снял наклейку со стены.",
        "They had removed the obstacles to progress. — Они устранили препятствия на пути к прогрессу."
    ]],
    ["suggest", "suggests", "suggested", "suggested", "suggesting", "предлагать, говорить о", [
        "I suggest we leave early. — Я предлагаю уйти пораньше.",
        "She suggested a new restaurant. — Она предложила новый ресторан.",
        "They had suggested that he apply for the job. — Они предложили ему подать заявку на работу."
    ]],
    ["stay", "stays", "stayed", "stayed", "staying", "оставаться, не уходить", [
        "I stay at home on weekends. — Я остаюсь дома по выходным.",
        "She stayed with her parents last summer. — Она осталась с родителями прошлым летом.",
        "They had stayed up late watching movies. — Они не спали допоздна, смотря фильмы."
    ]],
    ["serve", "serves", "served", "served", "serving", "служить", [
        "I serve my community by volunteering. — Я служу своему сообществу, участвуя в волонтерских программах.",
        "He served in the army for ten years. — Он служил в армии десять лет.",
        "They had served many customers that day. — Они обслужили много клиентов в тот день."
    ]],
    ["set", "sets", "set", "set", "setting", "устанавливать", [
        "I set the table for dinner. — Я накрываю на стол к ужину.",
        "She set a new record last year. — Она установила новый рекорд в прошлом году.",
        "They had set their goals for the year. — Они установили свои цели на год."
    ]],
    ["show", "shows", "showed", "shown", "showing", "показывать", [
        "I show my work to my colleagues. — Я показываю свою работу коллегам.",
        "He showed me his new car. — Он показал мне свою новую машину.",
        "They had shown great improvement this semester. — Они показали большие успехи в этом семестре."
    ]],
    ["seem", "seems", "seemed", "seemed", "seeming", "казаться, представляться", [
        "I seem to have lost my keys. — Кажется, я потерял свои ключи.",
        "She seemed happy with the results. — Она казалась довольной результатами.",
        "They had seemed surprised by the news. — Они казались удивленными новостями."
    ]],
    ["say", "says", "said", "said", "saying", "говорить, сказать", [
        "I say what I mean. — Я говорю то, что думаю.",
        "He said he would come. — Он сказал, что придет.",
        "They had said nothing about the change. — Они ничего не сказали о изменении."
    ]],
    ["send", "sends", "sent", "sent", "sending", "отправлять", [
        "I send emails to my clients regularly. — Я регулярно отправляю электронные письма своим клиентам.",
        "She sent a message to her friend. — Она отправила сообщение своей подруге.",
        "They had sent out invitations to the party. — Они разослали приглашения на вечеринку."
    ]],
    ["sell", "sells", "sold", "sold", "selling", "продавать", [
        "I sell handmade crafts online. — Я продаю ручные изделия в интернете.",
        "He sold his car last month. — Он продал свою машину в прошлом месяце.",
        "They had sold all their products at the fair. — Они продали все свои товары на ярмарке."
    ]],
    ["start", "starts", "started", "started", "starting", "начинать", [
        "I start my day with a cup of coffee. — Я начинаю свой день с чашки кофе.",
        "She started a new job last week. — Она начала новую работу на прошлой неделе.",
        "They had started the meeting without him. — Они начали встречу без него."
    ]],
    ["stop", "stops", "stopped", "stopped", "stopping", "останавливаться", [
        "I stop by the store on my way home. — Я заезжаю в магазин по дороге домой.",
        "He stopped talking when she entered the room. — Он перестал говорить, когда она вошла в комнату.",
        "They had stopped for lunch during their trip. — Они остановились на обед во время поездки."
    ]],
    ["sleep", "sleeps", "slept", "slept", "sleeping", "спать", [
        "I sleep for eight hours every night. — Я сплю восемь часов каждую ночь.",
        "She slept through the alarm. — Она проспала будильник.",
        "They had slept on the floor during the camping trip. — Они спали на полу во время похода."
    ]],
    ["study", "studies", "studied", "studied", "studying", "учиться", [
        "I study English every day. — Я учу английский каждый день.",
        "She studied hard for the exam. — Она усердно училась к экзамену.",
        "They had studied the material before the class. — Они изучили материал перед занятием."
    ]],
    ["sing", "sings", "sang", "sung", "singing", "петь", [
        "I sing in the shower. — Я пою в душе.",
        "She sang a beautiful song at the concert. — Она спела красивую песню на концерте.",
        "They had sung together for years. — Они пели вместе в течение многих лет."
    ]],
    ["sit", "sits", "sat", "sat", "sitting", "сидеть", [
        "I sit at my desk to work. — Я сижу за своим столом, чтобы поработать.",
        "She sat down for a rest. — Она села отдохнуть.",
        "They had sat in the front row during the show. — Они сидели в первом ряду во время шоу."
    ]],
    ["stand", "stands", "stood", "stood", "standing", "стоять", [
        "I stand by my principles. — Я стою на своих принципах.",
        "He stood in line for tickets. — Он стоял в очереди за билетами.",
        "They had stood together through thick and thin. — Они стояли вместе в горе и радости."
    ]],
    ["swim", "swims", "swam", "swum", "swimming", "плавать", [
        "I swim in the lake during summer. — Я плаваю в озере летом.",
        "She swam for the school team. — Она плавала за команду школы.",
        "They had swum across the river. — Они переплыли реку."
    ]],
    ["share", "shares", "shared", "shared", "sharing", "делиться", [
        "I share my thoughts on the project. — Я делюсь своими мыслями о проекте.",
        "She shared her lunch with me. — Она поделилась своим обедом со мной.",
        "They had shared their experiences during the meeting. — Они поделились своим опытом во время встречи."
    ]],
    ["smile", "smiles", "smiled", "smiled", "smiling", "улыбаться", [
        "I smile at everyone I meet. — Я улыбаюсь всем, кого встречаю.",
        "She smiled when she saw the puppy. — Она улыбнулась, когда увидела щенка.",
        "They had smiled at the photos from their trip. — Они улыбнулись, глядя на фотографии из поездки."
    ]],
    ["see", "sees", "saw", "seen", "seeing", "видеть", [
        "I see a bright future ahead. — Я вижу светлое будущее впереди.",
        "She saw a movie last night. — Она посмотрела фильм прошлой ночью.",
        "They had seen many places during their travels. — Они увидели много мест во время своих путешествий."
    ]],
    ["speak", "speaks", "spoke", "spoken", "speaking", "говорить", [
        "I speak three languages. — Я говорю на трех языках.",
        "He spoke to the manager about the issue. — Он поговорил с менеджером о проблеме.",
        "They had spoken for hours about their plans. — Они говорили часами о своих планах."
    ]],
    ["solve", "solves", "solved", "solved", "solving", "решать", [
        "I solve puzzles in my free time. — Я решаю головоломки в свободное время.",
        "She solved the math problem quickly. — Она быстро решила математическую задачу.",
        "They had solved the issue before it escalated. — Они решили проблему до того, как она усугубилась."
    ]],
    ["save", "saves", "saved", "saved", "saving", "сохранять", [
        "I save my work regularly. — Я регулярно сохраняю свою работу.",
        "She saved enough money for a vacation. — Она накопила достаточно денег на отпуск.",
        "They had saved the documents on the cloud. — Они сохранили документы в облаке."
    ]],
    ["spend", "spends", "spent", "spent", "spending", "тратить", [
        "I spend too much time on my phone. — Я трачу слишком много времени на своем телефоне.",
        "He spent his summer in Italy. — Он провел лето в Италии.",
        "They had spent their savings on a new car. — Они потратили свои сбережения на новую машину."
    ]],
    ["succeed", "succeeds", "succeeded", "succeeded", "succeeding", "преуспевать", [
        "I succeed when I work hard. — Я преуспеваю, когда усердно работаю.",
        "She succeeded in her career. — Она преуспела в своей карьере.",
        "They had succeeded against all odds. — Они преуспели несмотря ни на что."
    ]],
    ["support", "supports", "supported", "supported", "supporting", "поддерживать", [
        "I support my friends in their decisions. — Я поддерживаю своих друзей в их решениях.",
        "He supported the charity with a donation. — Он поддержал благотворительность пожертвованием.",
        "They had supported each other through difficult times. — Они поддерживали друг друга в трудные времена."
    ]],
    ["seek", "seeks", "sought", "sought", "seeking", "искать", [
        "I seek new opportunities for growth. — Я ищу новые возможности для роста.",
        "She sought advice from her mentor. — Она искала совета у своего наставника.",
        "They had sought help when they needed it. — Они искали помощи, когда в ней нуждались."
    ]],
    ["shoot", "shoots", "shot", "shot", "shooting", "стрелять", [
        "I shoot photos for a living. — Я снимаю фотографии на жизнь.",
        "He shot the ball into the net. — Он забросил мяч в сетку.",
        "They had shot several scenes for the movie. — Они отсняли несколько сцен для фильма."
    ]],
    ["sound", "sounds", "sounded", "sounded", "sounding", "звучать", [
        "I sound tired today. — Я сегодня звучал уставшим.",
        "She sounded excited about the news. — Она звучала взволнованной из-за новостей.",
        "They had sounded the alarm when the fire broke out. — Они подняли тревогу, когда начался пожар."
    ]],
    ["split", "splits", "split", "split", "splitting", "разделять, раскалывать", [
        "I split the cake into equal parts. — Я разделил торт на равные части.",
        "She splits her time between work and study. — Она разделяет свое время между работой и учебой.",
        "They had split the profits from the sale. — Они разделили прибыль от продажи."
    ]],
    ["turn", "turns", "turned", "turned", "turning", "повернуть", [
        "I turn left at the traffic light. — Я поворачиваю налево на светофоре.",
        "She turns the page of the book. — Она перевернула страницу книги.",
        "They had turned in their assignments on time. — Они сдали свои задания вовремя."
    ]],
    ["try", "tries", "tried", "tried", "trying", "пробовать", [
        "I try new recipes on weekends. — Я пробую новые рецепты по выходным.",
        "He tries to fix the car himself. — Он пытается починить машину сам.",
        "They had tried various methods to solve the problem. — Они пробовали разные методы, чтобы решить проблему."
    ]],
    ["think", "thinks", "thought", "thought", "thinking", "думать", [
        "I think it's going to rain. — Я думаю, что будет дождь.",
        "She thinks about the offer for a long time. — Она долго думает о предложении.",
        "They had thought they would win the game. — Они думали, что выиграют игру."
    ]],
    ["tell", "tells", "told", "told", "telling", "сказать", [
        "I tell the truth every time. — Я говорю правду каждый раз.",
        "He tells me a fascinating story. — Он рассказывает мне увлекательную историю.",
        "They had told her about the meeting yesterday. — Они рассказали ей о встрече вчера."
    ]],
    ["talk", "talks", "talked", "talked", "talking", "разговаривать", [
        "I talk to my friends every day. — Я разговариваю с друзьями каждый день.",
        "She talks about her vacation plans. — Она говорит о своих планах на отпуск.",
        "They had talked for hours without realizing the time. — Они говорили часами, не замечая времени."
    ]],
    ["travel", "travels", "traveled", "traveled", "traveling", "путешествовать", [
        "I travel to new places every year. — Я путешествую в новые места каждый год.",
        "She travels to Europe last summer. — Она путешествовала по Европе прошлым летом.",
        "They had traveled extensively before settling down. — Они много путешествовали, прежде чем устроиться на месте."
    ]],
    ["teach", "teaches", "taught", "taught", "teaching", "учить (кого-то)", [
        "I teach English to high school students. — Я учу английскому языку старшеклассников.",
        "She teaches her dog new tricks. — Она учит свою собаку новым трюкам.",
        "They had taught the children about nature. — Они учили детей о природе."
    ]],
    ["thank", "thanks", "thanked", "thanked", "thanking", "благодарить", [
        "I thank you for your help. — Я благодарю тебя за помощь.",
        "She thanks her parents for their support. — Она благодарит своих родителей за поддержку.",
        "They had thanked everyone who attended the event. — Они поблагодарили всех, кто пришел на мероприятие."
    ]],
    ["trust", "trusts", "trusted", "trusted", "trusting", "доверять", [
        "I trust my instincts. — Я доверяю своим инстинктам.",
        "He trusts his friend with his secrets. — Он доверил своему другу свои секреты.",
        "They had trusted the process despite the challenges. — Они доверяли процессу, несмотря на трудности."
    ]],
    ["take", "takes", "took", "taken", "taking", "брать", [
        "I take my coffee black. — Я пью кофе без молока.",
        "She takes the wrong bus. — Она села не на тот автобус.",
        "They had taken a risk by investing in the stock market. — Они рискнули, инвестировав в фондовый рынок."
    ]],
    ["throw", "throws", "threw", "thrown", "throwing", "бросать", [
        "I throw the ball to my dog. — Я бросаю мяч своей собаке.",
        "He throws a party for his birthday. — Он устраивает вечеринку на свой день рождения.",
        "They had thrown their old clothes away. — Они выбросили свою старую одежду."
    ]],
    ["use", "uses", "used", "used", "using", "использовать", [
        "I use my laptop for work. — Я использую свой ноутбук для работы.",
        "She uses a map to find her way. — Она использует карту, чтобы найти свой путь.",
        "They had used the latest technology in their project. — Они использовали новейшие технологии в своем проекте."
    ]],
    ["understand", "understands", "understood", "understood", "understanding", "понимать", [
        "I understand the instructions. — Я понимаю инструкции.",
        "He understands the importance of the decision. — Он понимает важность этого решения.",
        "They had understood each other perfectly. — Они прекрасно понимали друг друга."
    ]],
    ["visit", "visits", "visited", "visited", "visiting", "побывать, посещать", [
        "I visit my grandparents every month. — Я посещаю бабушку с дедушкой каждый месяц.",
        "She visits Paris last year. — Она посетила Париж в прошлом году.",
        "They had visited several countries during their trip. — Они посетили несколько стран во время своей поездки."
    ]],
    ["will", "wills", "would", "would", "willing", "воля, желание", [
        "I will call you later. — Я позвоню тебе позже.",
        "She said she would help us. — Она сказала, что поможет нам.",
        "They would have gone to the party if they had known. — Они пошли бы на вечеринку, если бы знали."
    ]],
    ["walk", "walks", "walked", "walked", "walking", "ходить", [
        "I walk to work every day. — Я хожу на работу каждый день.",
        "She walks in the park yesterday. — Она гуляла в парке вчера.",
        "They had walked ten miles before noon. — Они прошли десять миль до полудня."
    ]],
    ["write", "writes", "wrote", "written", "writing", "писать", [
        "I write in my journal every night. — Я пишу в своем дневнике каждую ночь.",
        "He writes a letter to his friend. — Он написал письмо своему другу.",
        "They had written three chapters by the end of the month. — Они написали три главы к концу месяца."
    ]],
    ["work", "works", "worked", "worked", "working", "работать", [
        "I work from home on Fridays. — Я работаю из дома по пятницам.",
        "She works at the restaurant last summer. — Она работала в ресторане прошлым летом.",
        "They had worked together for years before starting their own business. — Они работали вместе много лет, прежде чем открыть свой бизнес."
    ]],
    ["want", "wants", "wanted", "wanted", "wanting", "хотеть", [
        "I want to travel the world. — Я хочу путешествовать по миру.",
        "He wants a new car for his birthday. — Он хотел новую машину на свой день рождения.",
        "They had wanted to see the movie, but it was sold out. — Они хотели посмотреть фильм, но все билеты были распроданы."
    ]],
    ["wish", "wishes", "wished", "wished", "wishing", "желать", [
        "I wish you a happy birthday. — Я желаю тебе счастливого дня рождения.",
        "She wishes for good health and happiness. — Она пожелала здоровья и счастья.",
        "They had wished they could stay longer. — Они желали, чтобы могли остаться дольше."
    ]],
    ["welcome", "welcomes", "welcomed", "welcomed", "welcoming", "приветствовать", [
        "I welcome you to our home. — Я приветствую вас в нашем доме.",
        "She welcomes her guests with open arms. — Она приветствует своих гостей с распростертыми объятиями.",
        "They had welcomed the new employees with a small party. — Они приветствовали новых сотрудников небольшой вечеринкой."
    ]],
    ["win", "wins", "won", "won", "winning", "побеждать, выигрывать", [
        "I win a prize in the contest. — Я выиграл приз на конкурсе.",
        "She wins the championship last year. — Она выиграла чемпионат в прошлом году.",
        "They had won several awards for their project. — Они выиграли несколько наград за свой проект."
    ]],
    ["watch", "watches", "watched", "watched", "watching", "смотреть", [
        "I watch TV in the evenings. — Я смотрю телевизор по вечерам.",
        "He watches a documentary about nature. — Он смотрел документальный фильм о природе.",
        "They had watched the sunrise together. — Они смотрели восход солнца вместе."
    ]],
    ["wait", "waits", "waited", "waited", "waiting", "ждать", [
        "I wait for the bus every morning. — Я жду автобус каждое утро.",
        "She waits for her friend at the café. — Она ждала своего друга в кафе.",
        "They had waited in line for hours. — Они ждали в очереди несколько часов."
    ]],
    ["wear", "wears", "wore", "worn", "wearing", "носить (одежду), одевать (одежду)", [
        "I wear a jacket when it's cold. — Я ношу куртку, когда холодно.",
        "She wears a beautiful dress to the party. — Она надела красивое платье на вечеринку.",
        "They had worn matching outfits for the event. — Они носили одинаковую одежду на мероприятии."
    ]],
    ["wake", "wakes", "woke", "woken", "waking", "будить", [
        "I wake up early every day. — Я встаю рано каждый день.",
        "He wakes me up with a phone call. — Он разбудил меня звонком.",
        "They had woken up to a beautiful sunrise. — Они проснулись под красивый восход солнца."
    ]],
    ["please", "pleases", "pleased", "pleased", "pleasing", "удовлетворять, радовать", [
        "It pleases me to see you smile. — Мне приятно видеть, как ты улыбаешься.",
        "Does this answer please you? — Удовлетворяет ли тебя этот ответ?",
        "The kind words pleased her. — Добрые слова её порадовали.",
        "They were pleasing the crowd with their performance. — Они радовали публику своим выступлением."
    ]]
];


const a1_adjectives = [
    ["able", "способный", "abler", "способнее", "ablest", "самый способный"],
    ["american", "американский", "", "", "", ""],
    ["autumn", "осенний", "", "", "", ""],
    ["available", "доступный", "", "", "", ""],
    ["bad", "плохой", "worse", "хуже", "worst", "самый плохой"],
    ["beautiful", "красивый", "more beautiful", "более красивый", "most beautiful", "самый красивый"],
    ["best", "лучший", "", "", "", ""],
    ["big", "большой", "bigger", "больше", "biggest", "самый большой"],
    ["black", "черный", "", "", "", ""],
    ["blue", "синий", "", "", "", ""],
    ["boring", "скучный", "more boring", "более скучный", "most boring", "самый скучный"],
    ["bright", "яркий", "brighter", "ярче", "brightest", "самый яркий"],
    ["central", "центральный, основной", "", "", "", ""],
    ["certain", "определенный, уверенный", "", "", "", ""],
    ["cheap", "дешевый", "", "", "", ""],
    ["clean", "чистый", "cleaner", "чище", "cleanest", "самый чистый"],
    ["clear", "ясный, чистый", "clearer", "яснее", "clearest", "самый ясный"],
    ["close", "близкий, закрытый", "closer", "ближе", "closest", "самый близкий"],
    ["cold", "холодный", "colder", "холоднее", "coldest", "самый холодный"],
    ["comfortable", "комфортный", "more comfortable", "более комфортный", "most comfortable", "самый комфортный"],
    ["common", "общий, распространенный", "more common", "более общий", "most common", "самый общий"],
    ["cool", "прохладный", "cooler", "прохладнее", "coolest", "самый прохладный"],
    ["current", "текущий, нынешний", "", "", "", ""],
    ["dangerous", "опасный", "more dangerous", "более опасный", "most dangerous", "самый опасный"],
    ["dark", "темный", "darker", "темнее", "darkest", "самый темный"],
    ["dead", "мертвый", "", "", "", ""],
    ["democratic", "демократический", "", "", "", ""],
    ["different", "разный, отличающийся", "more different", "более разный", "most different", "самый разный"],
    ["difficult", "сложный, трудный", "more difficult", "более сложный", "most difficult", "самый сложный"],
    ["dirty", "грязный", "dirtier", "грязнее", "dirtiest", "самый грязный"],
    ["dry", "сухой", "drier", "суше", "driest", "самый сухой"],
    ["early", "ранний", "earlier", "раньше", "earliest", "самый ранний"],
    ["economic", "экономический", "", "", "", ""],
    ["exciting", "захватывающий", "more exciting", "более захватывающий", "most exciting", "самый захватывающий"],
    ["expensive", "дорогой", "more expensive", "более дорогой", "most expensive", "самый дорогой"],
    ["fast", "быстрый", "faster", "быстрее", "fastest", "самый быстрый"],
    ["federal", "федеральный", "", "", "", ""],
    ["final", "заключительный", "finaler", "финальнее", "finalest", "самый заключительный"],
    ["financial", "финансовый", "", "", "", ""],
    ["fine", "хороший, отличный, штраф", "finer", "лучше", "finest", "самый лучший"],
    ["first", "первый", "", "", "", ""],
    ["foreign", "иностранный", "more foreign", "более иностранный", "most foreign", "самый иностранный"],
    ["free", "свободный", "freer", "свободнее", "freest", "самый свободный"],
    ["fresh", "свежий", "fresher", "свежее", "freshest", "самый свежий"],
    ["full", "полный", "fuller", "полнее", "fullest", "самый полный"],
    ["funny", "смешной", "funnier", "смешнее", "funniest", "самый смешной"],
    ["general", "общий, главный", "", "", "", ""],
    ["good", "хороший", "better", "лучше", "best", "лучший"],
    ["great", "великий, замечательный", "greater", "больше", "greatest", "самый великий"],
    ["happy", "счастливый", "happier", "счастливее", "happiest", "самый счастливый"],
    ["hard", "твердый", "harder", "тверже", "hardest", "самый твердый"],
    ["heavy", "тяжелый", "heavier", "тяжелее", "heaviest", "самый тяжелый"],
    ["high", "высокий", "higher", "выше", "highest", "самый высокий"],
    ["hot", "горячий", "hotter", "горячее", "hottest", "самый горячий"],
    ["important", "важный", "more important", "более важный", "most important", "самый важный"],
    ["interesting", "интересный", "more interesting", "более интересный", "most interesting", "самый интересный"],
    ["international", "международный", "", "", "", ""],
    ["just", "справедливый", "", "", "", ""],
    ["large", "большой", "larger", "больше", "largest", "самый большой"],
    ["last", "последний", "later", "позже", "latest", "самый последний"],
    ["left", "левый, оставленный", "", "", "", ""],
    ["legal", "законный, правовой", "", "", "", ""],
    ["light", "легкий", "lighter", "легче", "lightest", "самый легкий"],
    ["little", "маленький, немного", "less", "меньше", "least", "наименьший"],
    ["local", "местный", "", "", "", ""],
    ["long", "длинный", "longer", "длиннее", "longest", "самый длинный"],
    ["loud", "громкий", "", "", "", ""],
    ["main", "главный, основной", "", "", "", ""],
    ["major", "главный, основной", "", "", "", ""],
    ["medical", "медицинский", "", "", "", ""],
    ["military", "военный", "", "", "", ""],
    ["modern", "современный", "more modern", "более современный", "most modern", "самый современный"],
    ["national", "национальный", "", "", "", ""],
    ["natural", "естественный, природный", "", "", "", ""],
    ["near", "близкий", "", "", "", ""],
    ["new", "новый", "newer", "новее", "newest", "самый новый"],
    ["nice", "приятный, милый", "nicer", "приятнее", "nicest", "самый приятный"],
    ["noisy", "шумный", "noisier", "шумнее", "noisiest", "самый шумный"],
    ["ok", "в порядке, хорошо", "", "", "", ""],
    ["old", "старый", "older", "старше", "oldest", "самый старый"],
    ["only", "только", "", "", "", ""],
    ["open", "открытый", "", "", "", ""],
    ["other", "другой", "", "", "", ""],
    ["persistent", "упорный, настойчивый", "more persistent", "более упорный", "most persistent", "самый настойчивый"],
    ["personal", "личный, персональный", "", "", "", ""],
    ["political", "политический", "", "", "", ""],
    ["poor", "бедный", "poorer", "беднее", "poorest", "самый бедный"],
    ["popular", "популярный", "more popular", "более популярный", "most popular", "самый популярный"],
    ["possible", "возможный", "more possible", "более возможный", "most possible", "самый возможный"],
    ["private", "частный, личный", "", "", "", ""],
    ["public", "общественный", "", "", "", ""],
    ["quiet", "тихий", "quieter", "тише", "quietest", "самый тихий"],
    ["ready", "готовый", "", "", "", ""],
    ["real", "настоящий, реальный", "more real", "более реальный", "most real", "самый реальный"],
    ["red", "красный", "", "", "", ""],
    ["rich", "богатый", "richer", "богаче", "richest", "самый богатый"],
    ["right", "правильный, правый", "righter", "правильнее", "rightest", "самый правильный"],
    ["sad", "грустный", "sadder", "грустнее", "saddest", "самый грустный"],
    ["safe", "безопасный", "safer", "безопаснее", "safest", "самый безопасный"],
    ["serious", "серьезный", "more serious", "более серьезный", "most serious", "самый серьезный"],
    ["short", "короткий, низкий", "shorter", "короче", "shortest", "самый короткий"],
    ["similar", "похожий", "more similar", "более похожий", "most similar", "самый похожий"],
    ["simple", "простой", "simpler", "проще", "simplest", "самый простой"],
    ["single", "один", "", "", "", ""],
    ["slow", "медленный", "slower", "медленнее", "slowest", "самый медленный"],
    ["small", "маленький", "smaller", "меньше", "smallest", "самый маленький"],
    ["social", "социальный", "", "", "", ""],
    ["soft", "мягкий", "softer", "мягче", "softest", "самый мягкий"],
    ["special", "специальный", "more special", "более специальный", "most special", "самый специальный"],
    ["standard", "стандартный", "", "", "", ""],
    ["strong", "сильный", "stronger", "сильнее", "strongest", "самый сильный"],
    ["sure", "уверенный", "surer", "увереннее", "surest", "самый уверенный"],
    ["sweet", "сладкий", "sweeter", "слаще", "sweetest", "самый сладкий"],
    ["tall", "высокий", "taller", "выше", "tallest", "самый высокий"],
    ["tasty", "вкусный", "tastier", "вкуснее", "tastiest", "самый вкусный"],
    ["thin", "тонкий", "thinner", "тоньше", "thinnest", "самый тонкий"],
    ["top", "верхний, лучший", "", "", "", ""],
    ["true", "верный, истинный", "", "", "", ""],
    ["ugly", "уродливый", "uglier", "уродливее", "ugliest", "самый уродливый"],
    ["uncomfortable", "некомфортный", "more uncomfortable", "более некомфортный", "most uncomfortable", "самый некомфортный"],
    ["various", "различный, разнообразный", "more various", "более разнообразный", "most various", "самый разнообразный"],
    ["warm", "теплый", "warmer", "теплее", "warmest", "самый теплый"],
    ["wet", "мокрый", "", "", "", ""],
    ["white", "белый", "", "", "", ""],
    ["whole", "целый, весь", "", "", "", ""],
    ["wrong", "неправильный", "wronger", "неправильнее", "wrongest", "самый неправильный"],
    ["young", "молодой", "younger", "моложе", "youngest", "самый молодой"]
];


const a1_conjunctions = [
    ["and", "и"],
    ["but", "но"],
    ["or", "или"],
    ["nor", "ни"],
    ["for", "потому что"],
    ["so", "поэтому"],
    ["yet", "всё же"],
    ["because", "потому что"],
    ["although", "хотя"],
    ["if", "если"],
    ["when", "когда"],
    ["while", "в то время как"],
    ["since", "поскольку"],
    ["after", "после того как"],
    ["before", "прежде чем"],
    ["both", "и...и"],
    ["either", "либо...либо"],
    ["neither", "ни...ни"]
];

const a1_pronouns = [
    ["I", "я"],
    ["you", "ты/вы"],
    ["he", "он"],
    ["she", "она"],
    ["it", "оно"],
    ["we", "мы"],
    ["they", "они"],
    ["me", "меня/мне"],
    ["him", "его/ему"],
    ["her", "ее/ей"],
    ["us", "нас/нам"],
    ["them", "их/им"],
    ["my", "мой/моя/мое/мои"],
    ["your", "твой/ваш"],
    ["his", "его (принадлежность)"],
    ["her", "ее (принадлежность)"],
    ["its", "его/ее (для неодушевленных)"],
    ["our", "наш/наша/наше/наши"],
    ["their", "их (принадлежность)"],
    ["mine", "мой/моя/мое (в абсолютной форме)"],
    ["yours", "твой/ваш (в абсолютной форме)"],
    ["ours", "наш (в абсолютной форме)"],
    ["theirs", "их (в абсолютной форме)"],
    ["myself", "я сам/сама"],
    ["yourself", "ты сам/вы сами"],
    ["himself", "он сам"],
    ["herself", "она сама"],
    ["itself", "оно само"],
    ["ourselves", "мы сами"],
    ["themselves", "они сами"],
    ["anything","что-нибудь"]
];

const a1_prepositions = [
    ["of", "из, о, от, для"],
    ["in", "в, внутри"],
    ["on", "на"],
    ["at", "в, на (место или время)"],
    ["by", "у, возле, рядом, с помощью"],
    ["with", "с"],
    ["about", "о, об"],
    ["for", "для"],
    ["to", "к, в, на"],
    ["from", "от, с"],
    ["under", "под"],
    ["over", "над"],
    ["between", "между"],
    ["around", "вокруг"],
    ["through", "через"],
    ["behind", "за"],
    ["next to", "рядом с"],
    ["before", "до"],
    ["after", "после"]
];

const a1_interjections = [
    ["each","каждый"]
];

function checkWordsInArrays(sentence, arrays) {
    // Приводим предложение к нижнему регистру и разбиваем на слова
    const words = sentence.toLowerCase().split(" ").filter(word => word.length > 0);
    
    function wordExists(word) {
        return arrays.some(array => 
            array.some(item => 
                item.some(element => typeof element === "string" && element.toLowerCase() === word)
            )
        );
    }

    for (let word of words) {
        if (!wordExists(word)) {
            //console.log(`${sentence} word:[${word}]`);
            
            return word;
        }
    }

    return '';
}

//================================================================================================================================
// Adverbs-of-frequency-always-usually-often-sometimes-never

const exercises_easy_1 = [
    ["He is ___ late.", "often", "Он часто опаздывает."],
    ["I am ___ late!", "always", "Я всегда опаздываю!"],
    ["She is ___ in Kharkiv during holidays.", "usually", "Во время каникул она обычно в Харькове."],
    ["There are ___ lots of people in the city centre on Saturday nights.", "always", "По субботним вечерам в центре города всегда много людей."],
    ["It is ___ difficult to find a place to park.", "often", "Часто бывает сложно найти место для парковки."],
    ["Our friends are ___ on time, so it doesn’t matter if we’re late.", "never", "Наши друзья никогда не приходят вовремя, так что неважно, опоздаем ли мы."],
    ["He ___ goes to school by bus.", "often", "Он часто добирается до школы на автобусе."],
    ["Sara ___ goes out on Saturday evenings.", "always", "Сара всегда гуляет в субботние вечера."],
    ["I ___ go clubbing with my best friends.", "sometimes", "Я иногда хожу в клуб с друзьями."],
    ["Her boyfriend ___ picks her up and they drive into the city centre.", "usually", "Ее парень обычно забирает ее на машине, и они едут в центр города."],
    ["They ___ meet friends and have a drink together.", "often", "Они часто встречаются с друзьями и идут в бар."],
    ["In the winter, they ___ go to the cinema.", "sometimes", "Зимой они иногда ходят в кино."],
    ["They ___ go in the summer because they prefer to stay outside.", "rarely", "Летом они редко ходят в кино, так как предпочитают оставаться на свежем воздухе."],
    ["They ___ get home before midnight.", "never", "Они никогда не возвращаются домой до полуночи."],
    ["He ___ gets up before 9.", "never", "Он никогда не встает до 9."],
    ["She ___ arrives on time.", "always", "Она всегда приходит вовремя."],
    ["They ___ go to the gym.", "rarely", "Они редко ходят в спортзал."],
    ["I ___ read books.", "sometimes", "Я иногда читаю книги."],
    ["We ___ miss our meetings.", "never", "Мы никогда не пропускаем встречи."],
    ["Sometimes, she does her homework with friends.", "sometimes", "Иногда она делает домашнее задание с друзьями."],
    ["Usually, they study on their own.", "usually", "Обычно они занимаются самостоятельно."],
    ["___, she chose the weak, the sick.", "Often", "Часто она выбирала слабых, больных."],
    ["___, he goes to bed after midnight.", "Usually", "Обычно он ложится спать после полуночи."],
    ["___, we go to the mountains in summer.", "Often", "Часто летом мы едем в горы."],
    ["They ___ arrive late to family gatherings.", "always", "Они всегда опаздывают на семейные встречи."],
    ["I ___ get up early on weekdays.", "usually", "Я обычно встаю рано в будние дни."],
    ["___, we meet at the same coffee shop.", "Usually", "Обычно мы встречаемся в одном и том же кафе."],
    ["My cat ___ sleeps on my bed.", "always", "Моя кошка всегда спит на моей кровати."],
    ["The train ___ arrives on time in the morning.", "never", "По утрам поезд никогда не приходит вовремя."],
    ["My friends ___ bring snacks to the party.", "often", "Мои друзья часто приносят закуски на вечеринку."],
    ["I ___ eat breakfast at 7 AM.", "always", "Я всегда завтракаю в 7 утра."],
    ["She ___ goes for a run.", "usually", "Она обычно бегает."],
    ["They ___ play soccer on weekends.", "often", "Они часто играют в футбол по выходным."],
    ["He ___ forgets his keys.", "sometimes", "Он иногда забывает свои ключи."],
    ["We ___ watch movies together.", "rarely", "Мы редко смотрим фильмы вместе."],
    ["You ___ help me with my homework.", "never", "Ты никогда не помогаешь мне с домашкой."],
    ["I am ___ tired after work.", "always", "Я всегда уставший после работы."],
    ["They are ___ in the park on Sundays.", "usually", "Они обычно в парке по воскресеньям."],
    ["He is ___ late for meetings.", "often", "Он часто опаздывает на встречи."],
    ["She is ___ cheerful in the mornings.", "always", "Она всегда радостная по утрам."],
    ["___, I forget to lock the door.", "Sometimes", "Иногда я забываю запереть дверь."],
    ["___, we have breakfast at 9 AM.", "Usually", "Обычно мы завтракаем в 9 утра."],
    ["___, they go to the theater.", "Often", "Часто они ходят в театр."],
    ["My brother ___ plays video games.", "always", "Мой брат всегда играет в видеоигры."],
    ["I ___ travel for work.", "sometimes", "Я иногда путешествую по работе."],
    ["She ___ drinks coffee in the morning.", "usually", "Она обычно пьет кофе утром."],
    ["He ___ helps his neighbors.", "rarely", "Он редко помогает своим соседям."],
    ["They ___ go hiking in the summer.", "often", "Они часто ходят в походы летом."],
    ["I ___ clean my room.", "sometimes", "Я иногда убираю свою комнату."],
    ["We ___ eat out on Fridays.", "usually", "Мы обычно ужинаем вне дома по пятницам."],
    ["You are ___ so helpful.", "always", "Ты всегда так полезен."],

    ["I visit my grandmother ___ every week.", "weekly", "Я навещаю бабушку раз в неделю."],
    ["She goes to the gym ___ every day.", "daily", "Она ходит в спортзал каждый день."],
    ["They have a team meeting ___ every month.", "monthly", "У них командное собрание раз в месяц."],
    ["We travel ___ once a year.", "annually", "Мы путешествуем раз в год."],
    ["He checks his email ___ every hour.", "hourly", "Он проверяет свою почту каждый час."],
    ["I go shopping ___ twice a month.", "twice", "Я хожу за покупками дважды в месяц."],
    ["She eats out ___ once a week.", "once", "Она ужинает вне дома раз в неделю."],
    ["They visit their parents ___ every Sunday.", "weekly", "Они навещают своих родителей каждое воскресенье."],
    ["We go hiking ___ on weekends.", "on weekends", "Мы ходим в походы по выходным."],
    ["He plays basketball ___ three times a week.", "three times", "Он играет в баскетбол трижды в неделю."],
    ["I clean the house ___ once a month.", "once", "Я убираю в доме раз в месяц."],
    ["She takes a vacation ___ every year.", "annually", "Она берёт отпуск каждый год."],
    ["They have a party ___ every Friday.", "weekly", "У них вечеринка каждую пятницу."],
    ["I study English ___ twice a week.", "twice", "Я изучаю английский дважды в неделю."],
    ["We meet our friends ___ once a month.", "once", "Мы встречаемся с друзьями раз в месяц."],
    ["He goes to the dentist ___ every six months.", "monthly", "Он ходит к стоматологу раз в шесть месяцев."],
    ["They celebrate their anniversary ___ every year.", "annually", "Они отмечают годовщину каждый год."],
    ["I work out ___ every day.", "daily", "Я занимаюсь спортом каждый день."],
    ["She checks her calendar ___ every week.", "weekly", "Она проверяет свой календарь каждую неделю."],
    ["We have family dinner ___ every Sunday.", "weekly", "У нас семейный ужин каждое воскресенье."],
    ["I can ___ help you with your homework.", "always", "Я всегда могу помочь тебе с домашкой."],

    ["I can ___ help you.", "always", "Я всегда могу тебе помочь."],
    ["You must ___ try your best.", "always", "Ты всегда должен стараться изо всех сил."],
    ["We can ___ find a seat on our train.", "usually", "Мы обычно можем найти место в поезде."],
    ["They should ___ be rude to customers.", "never", "Они никогда не должны быть грубы с клиентами."],
    ["I have ___ visited Turkey.", "never", "Я никогда не был в Турции."],
    ["He is ___ taking things from my desk. It’s really annoying.", "always", "Он все время берет вещи с моего стола. Это очень раздражает."],
    ["You had ___ arrived late at work until yesterday.", "rarely", "Ты редко опаздывал на работу до вчерашнего дня."],
    ["They must ___ be on time for the meeting.", "always", "Они всегда должны приходить вовремя на собрание."],
    ["I may ___ go to the party tonight.", "possibly", "Я, возможно, пойду на вечеринку сегодня вечером."],
    ["She might ___ help us with the project.", "often", "Она часто может помочь нам с проектом."],
    ["You should ___ listen to your teacher.", "always", "Ты всегда должен слушать своего учителя."],
    ["They must ___ finish the project by Friday.", "definitely", "Они определенно должны закончить проект к пятнице."],
    ["He can ___ speak three languages.", "usually", "Он обычно говорит на трёх языках."],
    ["She may ___ come to the party later.", "possibly", "Она, возможно, придёт на вечеринку позже."],
    ["You must ___ be careful when driving.", "always", "Ты всегда должен быть осторожным за рулем."],
    ["I have ___ seen that movie before.", "never", "Я никогда не видел этот фильм раньше."],
    ["They could ___ join us for dinner.", "sometimes", "Они иногда могут присоединиться к нам на ужин."],
    ["We should ___ practice more often.", "definitely", "Мы определенно должны практиковаться чаще."],
    ["He is ___ working on his thesis right now.", "always", "Он всегда работает над своей диссертацией прямо сейчас."],

    ["She works a day shift ___ every day.", "every day", "Она работает в дневную смену каждый день."],
    ["We still hang out ___ on weekends.", "on weekends", "Мы до сих пор зависаем по выходным."],
    ["He goes to the gym ___ daily.", "daily", "Он ходит в спортзал ежедневно."],
    ["I clean my house ___ once a week.", "once a week", "Я убираю свой дом раз в неделю."],
    ["They travel to the mountains ___ every summer.", "every summer", "Они путешествуют в горы каждое лето."],
    ["We meet for coffee ___ once a month.", "once a month", "Мы встречаемся за кофе раз в месяц."],
    ["She plays tennis ___ twice a week.", "twice a week", "Она играет в теннис дважды в неделю."],
    ["He goes to the doctor ___ every six months.", "every six months", "Он ходит к врачу раз в шесть месяцев."],
    ["I check my email ___ every hour.", "every hour", "Я проверяю свою почту каждый час."],
    ["We have a family gathering ___ every year.", "every year", "У нас семейное собрание каждый год."],
    ["She attends yoga classes ___ every Tuesday.", "every Tuesday", "Она посещает занятия по йоге каждую среду."],
    ["We play board games ___ on weekends.", "on weekends", "Мы играем в настольные игры по выходным."],
    ["He visits the dentist ___ twice a year.", "twice a year", "Он ходит к стоматологу дважды в год."],
    ["I go for a run ___ every morning.", "every morning", "Я бегаю каждое утро."],
    ["They take a vacation ___ every summer.", "every summer", "Они берут отпуск каждое лето."],
    ["We have a team meeting ___ once a month.", "once a month", "У нас командное собрание раз в месяц."],
    ["She attends a seminar ___ every quarter.", "every quarter", "Она посещает семинар каждый квартал."],
    ["I clean my room ___ once a week.", "once a week", "Я убираю свою комнату раз в неделю."],
    ["He works overtime ___ occasionally.", "occasionally", "Он иногда работает сверхурочно."],
    ["We usually go hiking ___ every Saturday.", "every Saturday", "Мы обычно ходим в поход каждую субботу."]
];

const exercises_easy_2 = [
    ["Does she always work so hard?", "Она всегда работает так усердно?", "Yes, she __ works so hard.", "always", "Да, она всегда так много работает."],
    ["How often do you watch films?", "Как часто ты смотришь фильмы?", "I __ watch films, usually a couple of times a week.", "often", "Я часто смотрю фильмы, обычно пару раз в неделю."],
    ["How often does he play tennis?", "Как часто он играет в теннис?", "He __ plays tennis on weekends.", "usually", "Он обычно играет в теннис по выходным."],
    ["How often do the trains arrive late?", "Как часто поезда опаздывают?", "They __ arrive late during rush hour.", "often", "Они часто опаздывают в час пик."],
    ["Do you often come here?", "Ты часто приходишь сюда?", "Yes, I __ come here almost every day.", "often", "Да, я часто прихожу сюда почти каждый день."],
    ["Does she ever go to the gym?", "Она вообще когда-нибудь ходит в спортзал?", "Yes, she __ goes to the gym sometimes.", "sometimes", "Да, она иногда ходит в спортзал."],
    ["Do they always pay on time?", "Они всегда платят вовремя?", "No, they __ pay on time rarely.", "rarely", "Нет, они редко платят вовремя."],
    ["How often do you travel?", "Как часто ты путешествуешь?", "I __ travel abroad once a year.", "once", "Я путешествую за границу раз в год."],
    ["Does he usually eat breakfast?", "Он обычно завтракает?", "Yes, he __ eats breakfast every morning.", "usually", "Да, он обычно завтракает каждое утро."],
    ["Do you ever go hiking?", "Ты когда-нибудь ходишь в походы?", "Yes, I __ go hiking a few times a year.", "sometimes", "Да, я иногда хожу в походы несколько раз в год."],
    ["How often do you exercise?", "Как часто ты занимаешься спортом?", "I __ exercise three times a week.", "often", "Я часто занимаюсь спортом три раза в неделю."],
    ["Does she ever visit her grandparents?", "Она когда-нибудь навещает бабушку с дедушкой?", "Yes, she __ visits them every month.", "usually", "Да, она обычно навещает их каждый месяц."],
    ["How often does he cook dinner?", "Как часто он готовит ужин?", "He __ cooks dinner on Sundays.", "usually", "Он обычно готовит ужин по воскресеньям."],
    ["Do you often read books?", "Ты часто читаешь книги?", "Yes, I __ read books in my free time.", "often", "Да, я часто читаю книги в свободное время."],
    ["How often do they go to the cinema?", "Как часто они ходят в кино?", "They __ go to the cinema once a month.", "once", "Они ходят в кино раз в месяц."],
    ["Does he always bring lunch to work?", "Он всегда приносит обед на работу?", "No, he __ brings lunch occasionally.", "sometimes", "Нет, он иногда приносит обед."],
    ["How often do you play video games?", "Как часто ты играешь в видеоигры?", "I __ play video games on weekends.", "often", "Я часто играю в видеоигры по выходным."],
    ["Do they ever travel abroad?", "Они когда-нибудь путешествуют за границу?", "Yes, they __ travel abroad every summer.", "usually", "Да, они обычно путешествуют за границу каждое лето."],
    ["How often do you clean your room?", "Как часто ты убираешь свою комнату?", "I __ clean my room once a week.", "once", "Я убираю свою комнату раз в неделю."],
    ["Does she usually take the bus?", "Она обычно ездит на автобусе?", "Yes, she __ takes the bus every day.", "always", "Да, она всегда ездит на автобусе каждый день."],
    ["How often do you meet your friends?", "Как часто ты встречаешься с друзьями?", "I __ meet my friends every Friday.", "usually", "Я обычно встречаюсь с друзьями каждую пятницу."],
    ["Do you ever go shopping?", "Ты когда-нибудь ходишь за покупками?", "Yes, I __ go shopping every weekend.", "usually", "Да, я обычно хожу за покупками каждые выходные."],
    ["How often does he listen to music?", "Как часто он слушает музыку?", "He __ listens to music while working.", "often", "Он часто слушает музыку во время работы."],
    ["Does she ever write in her journal?", "Она когда-нибудь пишет в своем дневнике?", "Yes, she __ writes in her journal daily.", "always", "Да, она всегда пишет в своем дневнике каждый день."],
    ["How often do they attend meetings?", "Как часто они посещают собрания?", "They __ attend meetings once a week.", "once", "Они посещают собрания раз в неделю."],
    ["Do you often drink coffee?", "Ты часто пьёшь кофе?", "Yes, I __ drink coffee every morning.", "always", "Да, я всегда пью кофе каждое утро."],
    ["How often does she take vacations?", "Как часто она берёт отпуска?", "She __ takes vacations every summer.", "usually", "Она обычно берёт отпуска каждое лето."],
    ["Do you ever watch documentaries?", "Ты когда-нибудь смотришь документальные фильмы?", "Yes, I __ watch documentaries sometimes.", "sometimes", "Да, я иногда смотрю документальные фильмы."],
    ["How often do they have family dinners?", "Как часто у них семейные ужины?", "They __ have family dinners every Sunday.", "always", "У них всегда семейные ужины каждое воскресенье."],
    ["Does he usually arrive early?", "Он обычно приходит рано?", "Yes, he __ arrives early for meetings.", "always", "Да, он всегда приходит рано на собрания."],
    ["How often do you visit your doctor?", "Как часто ты посещаешь врача?", "I __ visit my doctor once a year.", "once", "Я посещаю врача раз в год."],
    ["Do they ever attend concerts?", "Они когда-нибудь ходят на концерты?", "Yes, they __ attend concerts frequently.", "often", "Да, они часто ходят на концерты."],
    ["How often do you use social media?", "Как часто ты пользуешься социальными сетями?", "I __ use social media daily.", "daily", "Я пользуюсь социальными сетями ежедневно."]
];



// ================================================================================================================================
const base = [
    ["a", ""],["an", ""],["the", ""],["is", ""],["are", ""],["am", ""],["not", ""],["cannot",""],
    ,["one",""],["two",""],["three",""],["four",""],["five",""],["six",""],["seven",""],["eight",""],["nine",""],["ten",""],["sorry",""],["should",""]

];

const contractions = {
    "don't": "do not",
    "can't": "cannot",
    "won't": "will not",
    "isn't": "is not",
    "aren't": "are not",
    "i'm": "i am",
    "he's": "he is",
    "she's": "she is",
    "it's": "it is",
    "we're": "we are",
    "they're": "they are",
    "i've": "i have",
    "you've": "you have",
    "we've": "we have",
    "they've": "they have",
    "i'll": "i will",
    "you'll": "you will",
    "he'll": "he will",
    "she'll": "she will",
    "it'll": "it will",
    "we'll": "we will",
    "they'll": "they will",
    "i'd": "i would",
    "you'd": "you would",
    "he'd": "he would",
    "she'd": "she would",
    "it'd": "it would",
    "we'd": "we would",
    "they'd": "they would",
    "haven't":"have not",
    "let's":"let us",
    "couldn't":"could not",
    "doesn't":"does not",
};

function replaceContractions(text) {
    
    text = text.trim().toLowerCase().replace(/[^a-zа-яё '’]/g, '').replace('’',"'");
    for (const contraction in contractions) {
        const regex = new RegExp(`\\b${contraction}\\b`, 'gi');
        text = text.replace(regex, contractions[contraction]);
    }
    return text;
}

// ===============================================================================================================================
// Проверить все примеры в темах

function check_sentence(arr){
    let map_words = new Map();
    for (let i=0; i < arr.length; i++){
        let sentence = replaceContractions(arr[i][0]);
        let word = checkWordsInArrays(sentence, [base, a1_prepositions, a1_pronouns, a1_conjunctions, a1_adjectives, a1_verbs, a1_nouns, a1_adverbs, a1_interjections]);
        if (word !== ''){
            map_words.set(word,'');
        }   
    }
    console.log(Array.from(map_words.keys()));

}


check_sentence(exercises_easy_1);