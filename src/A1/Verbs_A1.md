# Глаголы для A1

Информация о глаголе:
* правильный (regular, окончание `ed` в прошедшем времени)/неправильный
* используется ли с предлогом в устойчивом выражении
* фразовые глаголы

<h2>Exercise: listen and write: Verbs (126)</h2>
<div id="control_general_verbs"></div>
<div id="listen_and_write_verbs"></div>

---


<script>

const exercises_easy_listen_and_write_verbs = [
    // to be
    ["to be", "быть (V1)"],
    
    // are
    ["are", "быть (V1)"],
    
    // am
    ["am", "быть (V1)"],
    ["is", "быть (3rd Person Singular)"],
    ["being", "быть (Present Participle)"],
    ["were", "быть (Past tense, V2)"],
    
    // were
    ["were", "быть (Past tense, V2)"],
    ["was", "быть (Past tense, V2)"],
    
    // have
    ["have", "иметь (V1)"],
    ["has", "иметь (3rd Person Singular)"],
    ["having", "иметь (Present Participle)"],
    ["had", "иметь (Past tense, V2)"],
    
    // do
    ["do", "делать (V1)"],
    ["does", "делать (3rd Person Singular)"],
    ["doing", "делать (Present Participle)"],
    ["did", "делать (Past tense, V2)"],
    
    // say
    ["say", "сказать, говорить (V1)"],
    ["says", "сказать, говорить (3rd Person Singular)"],
    ["saying", "сказать, говорить (Present Participle)"],
    ["said", "сказать, говорить (Past tense, V2)"],
    
    // go
    ["go", "идти, ехать (V1)"],
    ["goes", "идти, ехать (3rd Person Singular)"],
    ["going", "идти, ехать (Present Participle)"],
    ["went", "идти, ехать (Past tense, V2)"],
    
    // get (британский вариант)
    ["get", "получать, попадать, становиться (V1)"],
    ["gets", "получать, попадать, становиться (3rd Person Singular)"],
    ["getting", "получать, попадать, становиться (Present Participle)"],
    ["got", "получать, попадать, становиться (Past tense, V2)"],
    
    // get (американский вариант)
    ["get", "получать, попадать, становиться (амер.) (V1)"],
    ["gets", "получать, попадать, становиться (амер.) (3rd Person Singular)"],
    ["getting", "получать, попадать, становиться (амер.) (Present Participle)"],
    ["got", "получать, попадать, становиться (амер.) (Past tense, V2)"],
    
    // make
    ["make", "делать, производить, заставлять (V1)"],
    ["makes", "делать, производить, заставлять (3rd Person Singular)"],
    ["making", "делать, производить, заставлять (Present Participle)"],
    ["made", "делать, производить, заставлять (Past tense, V2)"],
    
    // know
    ["know", "знать, узнавать (V1)"],
    ["knows", "знать, узнавать (3rd Person Singular)"],
    ["knowing", "знать, узнавать (Present Participle)"],
    ["knew", "знать, узнавать (Past tense, V2)"],
    
    // think
    ["think", "думать, мыслить (V1)"],
    ["thinks", "думать, мыслить (3rd Person Singular)"],
    ["thinking", "думать, мыслить (Present Participle)"],
    ["thought", "думать, мыслить (Past tense, V2)"],
    
    // see
    ["see", "видеть, смотреть (V1)"],
    ["sees", "видеть, смотреть (3rd Person Singular)"],
    ["seeing", "видеть, смотреть (Present Participle)"],
    ["saw", "видеть, смотреть (Past tense, V2)"],
    
    // take
    ["take", "брать, взять (V1)"],
    ["takes", "брать, взять (3rd Person Singular)"],
    ["taking", "брать, взять (Present Participle)"],
    ["took", "брать, взять (Past tense, V2)"],
    
    // come
    ["come", "приходить, приезжать (V1)"],
    ["comes", "приходить, приезжать (3rd Person Singular)"],
    ["coming", "приходить, приезжать (Present Participle)"],
    ["came", "приходить, приезжать (Past tense, V2)"],
    
    // want
    ["want", "хотеть, нуждаться (V1)"],
    ["wants", "хотеть, нуждаться (3rd Person Singular)"],
    ["wanting", "хотеть, нуждаться (Present Participle)"],
    ["wanted", "хотеть, нуждаться (Past tense, V2)"],
    
    // look
    ["look", "смотреть, выглядеть (V1)"],
    ["looks", "смотреть, выглядеть (3rd Person Singular)"],
    ["looking", "смотреть, выглядеть (Present Participle)"],
    ["looked", "смотреть, выглядеть (Past tense, V2)"],
        // use
    ["use", "использовать, пользоваться (V1)"],
    ["uses", "использовать, пользоваться (3rd Person Singular)"],
    ["using", "использовать, пользоваться (Present Participle)"],
    ["used", "использовать, пользоваться (Past tense, V2)"],
    
    // find
    ["find", "находить, обрести (V1)"],
    ["finds", "находить, обрести (3rd Person Singular)"],
    ["finding", "находить, обрести (Present Participle)"],
    ["found", "находить, обрести (Past tense, V2)"],
    
    // give
    ["give", "давать, придавать (V1)"],
    ["gives", "давать, придавать (3rd Person Singular)"],
    ["giving", "давать, придавать (Present Participle)"],
    ["gave", "давать, придавать (Past tense, V2)"],
    
    // tell
    ["tell", "сказать, рассказывать (V1)"],
    ["tells", "сказать, рассказывать (3rd Person Singular)"],
    ["telling", "сказать, рассказывать (Present Participle)"],
    ["told", "сказать, рассказывать (Past tense, V2)"],
    
    // work
    ["work", "работать, трудиться (V1)"],
    ["works", "работать, трудиться (3rd Person Singular)"],
    ["working", "работать, трудиться (Present Participle)"],
    ["worked", "работать, трудиться (Past tense, V2)"],
    
    // need
    ["need", "нуждаться (V1)"],
    ["needs", "нуждаться (3rd Person Singular)"],
    ["needing", "нуждаться (Present Participle)"],
    ["needed", "нуждаться (Past tense, V2)"],
    
    // feel
    ["feel", "чувствовать (V1)"],
    ["feels", "чувствовать (3rd Person Singular)"],
    ["feeling", "чувствовать (Present Participle)"],
    ["felt", "чувствовать (Past tense, V2)"],
    
    // leave
    ["leave", "оставлять, покидать (V1)"],
    ["leaves", "оставлять, покидать (3rd Person Singular)"],
    ["leaving", "оставлять, покидать (Present Participle)"],
    ["left", "оставлять, покидать (Past tense, V2)"],
    
    // put
    ["put", "класть, ставить (V1)"],
    ["puts", "класть, ставить (3rd Person Singular)"],
    ["putting", "класть, ставить (Present Participle)"],
    ["put", "класть, ставить (Past tense, V2)"],
    
    // begin
    ["begin", "начинать (V1)"],
    ["begins", "начинать (3rd Person Singular)"],
    ["beginning", "начинать (Present Participle)"],
    ["began", "начинать (Past tense, V2)"],
    // talk
    ["talk", "говорить, разговаривать (V1)"],
    ["talks", "говорить, разговаривать (3rd Person Singular)"],
    ["talking", "говорить, разговаривать (Present Participle)"],
    ["talked", "говорить, разговаривать (Past tense, V2)"],
    
    // help
    ["help", "помогать (V1)"],
    ["helps", "помогать (3rd Person Singular)"],
    ["helping", "помогать (Present Participle)"],
    ["helped", "помогать (Past tense, V2)"],
    
    // start
    ["start", "начинать, стартовать (V1)"],
    ["starts", "начинать, стартовать (3rd Person Singular)"],
    ["starting", "начинать, стартовать (Present Participle)"],
    ["started", "начинать, стартовать (Past tense, V2)"],
    
    // show
    ["show", "показывать, проявлять (V1)"],
    ["shows", "показывать, проявлять (3rd Person Singular)"],
    ["showing", "показывать, проявлять (Present Participle)"],
    ["showed", "показывать, проявлять (Past tense, V2)"],
    
    // hear
    ["hear", "слышать (V1)"],
    ["hears", "слышать (3rd Person Singular)"],
    ["hearing", "слышать (Present Participle)"],
    ["heard", "слышать (Past tense, V2)"],
    
    // run
    ["run", "бежать, работать (V1)"],
    ["runs", "бежать, работать (3rd Person Singular)"],
    ["running", "бежать, работать (Present Participle)"],
    ["ran", "бежать, работать (Past tense, V2)"],
    
    // play
    ["play", "играть (V1)"],
    ["plays", "играть (3rd Person Singular)"],
    ["playing", "играть (Present Participle)"],
    ["played", "играть (Past tense, V2)"],
    
    // like
    ["like", "нравиться, любить (V1)"],
    ["likes", "нравиться, любить (3rd Person Singular)"],
    ["liking", "нравиться, любить (Present Participle)"],
    ["liked", "нравиться, любить (Past tense, V2)"],
    
    // live
    ["live", "жить, дожить (V1)"],
    ["lives", "жить, дожить (3rd Person Singular)"],
    ["living", "жить, дожить (Present Participle)"],
    ["lived", "жить, дожить (Past tense, V2)"],
    
    // write
    ["write", "писать (V1)"],
    ["writes", "писать (3rd Person Singular)"],
    ["writing", "писать (Present Participle)"],
    ["wrote", "писать (Past tense, V2)"],

        // sit
    ["sit", "сидеть, заседать (V1)"],
    ["sits", "сидеть, заседать (3rd Person Singular)"],
    ["sitting", "сидеть, заседать (Present Participle)"],
    ["sat", "сидеть, заседать (Past tense, V2)"],
    
    // meet
    ["meet", "встречаться, соответствовать (V1)"],
    ["meets", "встречаться, соответствовать (3rd Person Singular)"],
    ["meeting", "встречаться, соответствовать (Present Participle)"],
    ["met", "встречаться, соответствовать (Past tense, V2)"],
    
    // pay
    ["pay", "платить (V1)"],
    ["pays", "платить (3rd Person Singular)"],
    ["paying", "платить (Present Participle)"],
    ["paid", "платить (Past tense, V2)"],
    
    // change
    ["change", "изменить (что-то) (V1)"],
    ["changes", "изменить (что-то) (3rd Person Singular)"],
    ["changing", "изменить (что-то) (Present Participle)"],
    ["changed", "изменить (что-то) (Past tense, V2)"],
    
    // learn
    ["learn", "учиться (V1)"],
    ["learns", "учиться (3rd Person Singular)"],
    ["learning", "учиться (Present Participle)"],
    ["learned", "учиться (Past tense, V2)"],
    
    // understand
    ["understand", "понимать (V1)"],
    ["understands", "понимать (3rd Person Singular)"],
    ["understanding", "понимать (Present Participle)"],
    ["understood", "понимать (Past tense, V2)"],
    
    // watch
    ["watch", "наблюдать, следить (V1)"],
    ["watches", "наблюдать, следить (3rd Person Singular)"],
    ["watching", "наблюдать, следить (Present Participle)"],
    ["watched", "наблюдать, следить (Past tense, V2)"],
    
    // stop
    ["stop", "останавливать (V1)"],
    ["stops", "останавливать (3rd Person Singular)"],
    ["stopping", "останавливать (Present Participle)"],
    ["stopped", "останавливать (Past tense, V2)"],
    
    // speak
    ["speak", "говорить, выступать (V1)"],
    ["speaks", "говорить, выступать (3rd Person Singular)"],
    ["speaking", "говорить, выступать (Present Participle)"],
    ["spoke", "говорить, выступать (Past tense, V2)"],
    
    // read
    ["read", "читать (V1)"],
    ["reads", "читать (3rd Person Singular)"],
    ["reading", "читать (Present Participle)"],
    ["read", "читать (Past tense, V2)"],

        // open
    ["open", "открыть (V1)"],
    ["opens", "открыть (3rd Person Singular)"],
    ["opening", "открыть (Present Participle)"],
    ["opened", "открыть (Past tense, V2)"],
    
    // walk
    ["walk", "ходить, идти (V1)"],
    ["walks", "ходить, идти (3rd Person Singular)"],
    ["walking", "ходить, идти (Present Participle)"],
    ["walked", "ходить, идти (Past tense, V2)"],
    
    // remember
    ["remember", "помнить, запомнить (V1)"],
    ["remembers", "помнить, запомнить (3rd Person Singular)"],
    ["remembering", "помнить, запомнить (Present Participle)"],
    ["remembered", "помнить, запомнить (Past tense, V2)"],
    
    // damn
    ["damn", "проклинать (V1)"],
    ["damns", "проклинать (3rd Person Singular)"],
    ["damning", "проклинать (Present Participle)"],
    ["damned", "проклинать (Past tense, V2)"],
    
    // love
    ["love", "любить (V1)"],
    ["loves", "любить (3rd Person Singular)"],
    ["loving", "любить (Present Participle)"],
    ["loved", "любить (Past tense, V2)"],
    
    // buy
    ["buy", "покупать (V1)"],
    ["buys", "покупать (3rd Person Singular)"],
    ["buying", "покупать (Present Participle)"],
    ["bought", "покупать (Past tense, V2)"],
    
    // wait
    ["wait", "ждать, ожидать (V1)"],
    ["waits", "ждать, ожидать (3rd Person Singular)"],
    ["waiting", "ждать, ожидать (Present Participle)"],
    ["waited", "ждать, ожидать (Past tense, V2)"],
    
    // die
    ["die", "умирать (V1)"],
    ["dies", "умирать (3rd Person Singular)"],
    ["dying", "умирать (Present Participle)"],
    ["died", "умирать (Past tense, V2)"],
    
    // send
    ["send", "отправлять, посылать (V1)"],
    ["sends", "отправлять, посылать (3rd Person Singular)"],
    ["sending", "отправлять, посылать (Present Participle)"],
    ["sent", "отправлять, посылать (Past tense, V2)"],
    
    // stay
    ["stay", "оставаться, останавливаться (V1)"],
    ["stays", "оставаться, останавливаться (3rd Person Singular)"],
    ["staying", "оставаться, останавливаться (Present Participle)"],
    ["stayed", "оставаться, останавливаться (Past tense, V2)"],
    
    // carry
    ["carry", "нести, проводить (V1)"],
    ["carries", "нести, проводить (3rd Person Singular)"],
    ["carrying", "нести, проводить (Present Participle)"],
    ["carried", "нести, проводить (Past tense, V2)"],
    
    // develop
    ["develop", "развивать (V1)"],
    ["develops", "развивать (3rd Person Singular)"],
    ["developing", "развивать (Present Participle)"],
    ["developed", "развивать (Past tense, V2)"],
    
    // drive
    ["drive", "водить машину (V1)"],
    ["drives", "водить машину (3rd Person Singular)"],
    ["driving", "водить машину (Present Participle)"],
    ["drove", "водить машину (Past tense, V2)"],
    
    // wear
    ["wear", "носить одежду (V1)"],
    ["wears", "носить одежду (3rd Person Singular)"],
    ["wearing", "носить одежду (Present Participle)"],
    ["wore", "носить одежду (Past tense, V2)"],
    
    // support
    ["support", "поддерживать (V1)"],
    ["supports", "поддерживать (3rd Person Singular)"],
    ["supporting", "поддерживать (Present Participle)"],
    ["supported", "поддерживать (Past tense, V2)"],

        // base
    ["base", "основывать (V1)"],
    ["bases", "основывать (3rd Person Singular)"],
    ["basing", "основывать (Present Participle)"],
    ["based", "основывать (Past tense, V2)"],
    
    // eat
    ["eat", "есть (V1)"],
    ["eats", "есть (3rd Person Singular)"],
    ["eating", "есть (Present Participle)"],
    ["ate", "есть (Past tense, V2)"],
    
    // teach
    ["teach", "учить, обучать (V1)"],
    ["teaches", "учить, обучать (3rd Person Singular)"],
    ["teaching", "учить, обучать (Present Participle)"],
    ["taught", "учить, обучать (Past tense, V2)"],
    
    // catch
    ["catch", "ловить, поймать (V1)"],
    ["catches", "ловить, поймать (3rd Person Singular)"],
    ["catching", "ловить, поймать (Present Participle)"],
    ["caught", "ловить, поймать (Past tense, V2)"],
    
    // draw
    ["draw", "рисовать, чертить (V1)"],
    ["draws", "рисовать, чертить (3rd Person Singular)"],
    ["drawing", "рисовать, чертить (Present Participle)"],
    ["drew", "рисовать, чертить (Past tense, V2)"],
    
    // choose
    ["choose", "выбирать (V1)"],
    ["chooses", "выбирать (3rd Person Singular)"],
    ["choosing", "выбирать (Present Participle)"],
    ["chose", "выбирать (Past tense, V2)"],
    
    // fuck
    ["fuck", "трахаться (V1)"],
    ["fucks", "трахаться (3rd Person Singular)"],
    ["fucking", "трахаться (Present Participle)"],
    ["fucked", "трахаться (Past tense, V2)"],
    
    // listen
    ["listen", "слушать, прослушать (V1)"],
    ["listens", "слушать, прослушать (3rd Person Singular)"],
    ["listening", "слушать, прослушать (Present Participle)"],
    ["listened", "слушать, прослушать (Past tense, V2)"],
    
    // close
    ["close", "закрывать (V1)"],
    ["closes", "закрывать (3rd Person Singular)"],
    ["closing", "закрывать (Present Participle)"],
    ["closed", "закрывать (Past tense, V2)"],
    
    // fight
    ["fight", "бороться, драться (V1)"],
    ["fights", "бороться, драться (3rd Person Singular)"],
    ["fighting", "бороться, драться (Present Participle)"],
    ["fought", "бороться, драться (Past tense, V2)"],
    
    // represent
    ["represent", "представлять, изображать (V1)"],
    ["represents", "представлять, изображать (3rd Person Singular)"],
    ["representing", "представлять, изображать (Present Participle)"],
    ["represented", "представлять, изображать (Past tense, V2)"],
    
    // recognize
    ["recognize", "распознавать, признавать (V1)"],
    ["recognizes", "распознавать, признавать (3rd Person Singular)"],
    ["recognizing", "распознавать, признавать (Present Participle)"],
    ["recognized", "распознавать, признавать (Past tense, V2)"],
    
    // check
    ["check", "проверять, контролировать (V1)"],
    ["checks", "проверять, контролировать (3rd Person Singular)"],
    ["checking", "проверять, контролировать (Present Participle)"],
    ["checked", "проверять, контролировать (Past tense, V2)"],
    
    // answer
    ["answer", "отвечать (V1)"],
    ["answers", "отвечать (3rd Person Singular)"],
    ["answering", "отвечать (Present Participle)"],
    ["answered", "отвечать (Past tense, V2)"],
    
    // forget
    ["forget", "забывать (V1)"],
    ["forgets", "забывать (3rd Person Singular)"],
    ["forgetting", "забывать (Present Participle)"],
    ["forgot", "забывать (Past tense, V2)"],

        // study
    ["study", "изучать (V1)"],
    ["studies", "изучать (3rd Person Singular)"],
    ["studying", "изучать (Present Participle)"],
    ["studied", "изучать (Past tense, V2)"],
    
    // enjoy
    ["enjoy", "наслаждаться (V1)"],
    ["enjoys", "наслаждаться (3rd Person Singular)"],
    ["enjoying", "наслаждаться (Present Participle)"],
    ["enjoyed", "наслаждаться (Past tense, V2)"],
    
    // visit
    ["visit", "посещать (V1)"],
    ["visits", "посещать (3rd Person Singular)"],
    ["visiting", "посещать (Present Participle)"],
    ["visited", "посещать (Past tense, V2)"],
    
    // finish
    ["finish", "заканчивать (V1)"],
    ["finishes", "заканчивать (3rd Person Singular)"],
    ["finishing", "заканчивать (Present Participle)"],
    ["finished", "заканчивать (Past tense, V2)"],
    
    // fly
    ["fly", "летать (V1)"],
    ["flies", "летать (3rd Person Singular)"],
    ["flying", "летать (Present Participle)"],
    ["flew", "летать (Past tense, V2)"],
    
    // sing
    ["sing", "петь (V1)"],
    ["sings", "петь (3rd Person Singular)"],
    ["singing", "петь (Present Participle)"],
    ["sang", "петь (Past tense, V2)"],
    
    // travel (британский вариант)
    ["travel", "путешествовать (V1)"],
    ["travels", "путешествовать (3rd Person Singular)"],
    ["travelling", "путешествовать (Present Participle)"],
    ["travelled", "путешествовать (Past tense, V2)"],
    
    // travel (американский вариант)
    ["travel", "путешествовать (амер.) (V1)"],
    ["travels", "путешествовать (амер.) (3rd Person Singular)"],
    ["traveling", "путешествовать (амер.) (Present Participle)"],
    ["traveled", "путешествовать (амер.) (Past tense, V2)"],
    
    // sleep
    ["sleep", "спать (V1)"],
    ["sleeps", "спать (3rd Person Singular)"],
    ["sleeping", "спать (Present Participle)"],
    ["slept", "спать (Past tense, V2)"],
    
    // drink
    ["drink", "пить (V1)"],
    ["drinks", "пить (3rd Person Singular)"],
    ["drinking", "пить (Present Participle)"],
    ["drank", "пить (Past tense, V2)"],
    
    // ride
    ["ride", "ездить верхом (V1)"],
    ["rides", "ездить верхом (3rd Person Singular)"],
    ["riding", "ездить верхом (Present Participle)"],
    ["rode", "ездить верхом (Past tense, V2)"],
    
    // cook
    ["cook", "готовить (V1)"],
    ["cooks", "готовить (3rd Person Singular)"],
    ["cooking", "готовить (Present Participle)"],
    ["cooked", "готовить (Past tense, V2)"],
    
    // invite
    ["invite", "приглашать (V1)"],
    ["invites", "приглашать (3rd Person Singular)"],
    ["inviting", "приглашать (Present Participle)"],
    ["invited", "приглашать (Past tense, V2)"],
    
    // paint
    ["paint", "красить (V1)"],
    ["paints", "красить (3rd Person Singular)"],
    ["painting", "красить (Present Participle)"],
    ["painted", "красить (Past tense, V2)"],
    
    // wake
    ["wake", "просыпаться, будить (V1)"],
    ["wakes", "просыпаться, будить (3rd Person Singular)"],
    ["waking", "просыпаться, будить (Present Participle)"],
    ["woke", "просыпаться, будить (Past tense, V2)"],

        // influence
    ["influence", "оказывать влияние, влиять (V1)"],
    ["influences", "оказывать влияние, влиять (3rd Person Singular)"],
    ["influencing", "оказывать влияние, влиять (Present Participle)"],
    ["influenced", "оказывать влияние, влиять (Past tense, V2)"],
    
    // kick
    ["kick", "пинать, ударять ногой (V1)"],
    ["kicks", "пинать, ударять ногой (3rd Person Singular)"],
    ["kicking", "пинать, ударять ногой (Present Participle)"],
    ["kicked", "пинать, ударять ногой (Past tense, V2)"],
    
    // solve
    ["solve", "решать, разрешать (V1)"],
    ["solves", "решать, разрешать (3rd Person Singular)"],
    ["solving", "решать, разрешать (Present Participle)"],
    ["solved", "решать, разрешать (Past tense, V2)"],
    
    // fix
    ["fix", "исправлять, чинить (V1)"],
    ["fixes", "исправлять, чинить (3rd Person Singular)"],
    ["fixing", "исправлять, чинить (Present Participle)"],
    ["fixed", "исправлять, чинить (Past tense, V2)"],
    
    // clean
    ["clean", "чистить, убирать (V1)"],
    ["cleans", "чистить, убирать (3rd Person Singular)"],
    ["cleaning", "чистить, убирать (Present Participle)"],
    ["cleaned", "чистить, убирать (Past tense, V2)"],
    
    // dance
    ["dance", "танцевать (V1)"],
    ["dances", "танцевать (3rd Person Singular)"],
    ["dancing", "танцевать (Present Participle)"],
    ["danced", "танцевать (Past tense, V2)"],
    
    // invest
    ["invest", "инвестировать, вкладывать (V1)"],
    ["invests", "инвестировать, вкладывать (3rd Person Singular)"],
    ["investing", "инвестировать, вкладывать (Present Participle)"],
    ["invested", "инвестировать, вкладывать (Past tense, V2)"],
    
    // wash
    ["wash", "мыть, стирать (V1)"],
    ["washes", "мыть, стирать (3rd Person Singular)"],
    ["washing", "мыть, стирать (Present Participle)"],
    ["washed", "мыть, стирать (Past tense, V2)"],
    
    // smoke
    ["smoke", "курить (V1)"],
    ["smokes", "курить (3rd Person Singular)"],
    ["smoking", "курить (Present Participle)"],
    ["smoked", "курить (Past tense, V2)"],
    
    // communicate
    ["communicate", "общаться (V1)"],
    ["communicates", "общаться (3rd Person Singular)"],
    ["communicating", "общаться (Present Participle)"],
    ["communicated", "общаться (Past tense, V2)"],
    
    // swim
    ["swim", "плавать (V1)"],
    ["swims", "плавать (3rd Person Singular)"],
    ["swimming", "плавать (Present Participle)"],
    ["swam", "плавать (Past tense, V2)"],
    
    // practice (амер.)
    ["practice", "практиковать (амер.) (V1)"],
    ["practices", "практиковать (амер.) (3rd Person Singular)"],
    ["practicing", "практиковать (амер.) (Present Participle)"],
    ["practiced", "практиковать (амер.) (Past tense, V2)"],
    
    // dine
    ["dine", "обедать (V1)"],
    ["dines", "обедать (3rd Person Singular)"],
    ["dining", "обедать (Present Participle)"],
    ["dined", "обедать (Past tense, V2)"],
    
    // practise (брит.)
    ["practise", "тренироваться (брит.) (V1)"],
    ["practises", "тренироваться (брит.) (3rd Person Singular)"],
    ["practising", "тренироваться (брит.) (Present Participle)"],
    ["practised", "тренироваться (брит.) (Past tense, V2)"],
    
    // phone
    ["phone", "звонить по телефону (V1)"],
    ["phones", "звонить по телефону (3rd Person Singular)"],
    ["phoning", "звонить по телефону (Present Participle)"],
    ["phoned", "звонить по телефону (Past tense, V2)"],
        // excuse
    ["excuse", "извинять, прощать (V1)"],
    ["excuses", "извинять, прощать (3rd Person Singular)"],
    ["excusing", "извинять, прощать (Present Participle)"],
    ["excused", "извинять, прощать (Past tense, V2)"],

    // rain
    ["rain", "идти (о дожде) (V1)"],
    ["rains", "идти (о дожде) (3rd Person Singular)"],
    ["raining", "идти (о дожде) (Present Participle)"],
    ["rained", "идти (о дожде) (Past tense, V2)"],

    // ask
    ["ask", "спрашивать, просить (V1)"],
    ["asks", "спрашивать, просить (3rd Person Singular)"],
    ["asking", "спрашивать, просить (Present Participle)"],
    ["asked", "спрашивать, просить (Past tense, V2)"],

    // call
    ["call", "звать, называть (V1)"],
    ["calls", "звать, называть (3rd Person Singular)"],
    ["calling", "звать, называть (Present Participle)"],
    ["called", "звать, называть (Past tense, V2)"],

    // try
    ["try", "пытаться (V1)"],
    ["tries", "пытаться (3rd Person Singular)"],
    ["trying", "пытаться (Present Participle)"],
    ["tried", "пытаться (Past tense, V2)"],

    // move
    ["move", "двигаться (V1)"],
    ["moves", "двигаться (3rd Person Singular)"],
    ["moving", "двигаться (Present Participle)"],
    ["moved", "двигаться (Past tense, V2)"],

    // believe
    ["believe", "верить (V1)"],
    ["believes", "верить (3rd Person Singular)"],
    ["believing", "верить (Present Participle)"],
    ["believed", "верить (Past tense, V2)"],

    // hold
    ["hold", "держать (V1)"],
    ["holds", "держать (3rd Person Singular)"],
    ["holding", "держать (Present Participle)"],
    ["held", "держать (Past tense, V2)"],

    // agree
    ["agree", "соглашаться (V1)"],
    ["agrees", "соглашаться (3rd Person Singular)"],
    ["agreeing", "соглашаться (Present Participle)"],
    ["agreed", "соглашаться (Past tense, V2)"],

    // cut
    ["cut", "резать (V1)"],
    ["cuts", "резать (3rd Person Singular)"],
    ["cutting", "резать (Present Participle)"],
    ["cut", "резать (Past tense, V2)"],

    // bring
    ["bring", "приносить, приводить (V1)"],
    ["brings", "приносить, приводить (3rd Person Singular)"],
    ["bringing", "приносить, приводить (Present Participle)"],
    ["brought", "приносить, приводить (Past tense, V2)"],

    // fall
    ["fall", "падать, снижаться (V1)"],
    ["falls", "падать, снижаться (3rd Person Singular)"],
    ["falling", "падать, снижаться (Present Participle)"],
    ["fell", "падать, снижаться (Past tense, V2)"],

    // touch
    ["touch", "трогать, касаться (V1)"],
    ["touches", "трогать, касаться (3rd Person Singular)"],
    ["touching", "трогать, касаться (Present Participle)"],
    ["touched", "трогать, касаться (Past tense, V2)"],

    // jump
    ["jump", "прыгать (V1)"],
    ["jumps", "прыгать (3rd Person Singular)"],
    ["jumping", "прыгать (Present Participle)"],
    ["jumped", "прыгать (Past tense, V2)"],

    // hate
    ["hate", "ненавидеть (V1)"],
    ["hates", "ненавидеть (3rd Person Singular)"],
    ["hating", "ненавидеть (Present Participle)"],
    ["hated", "ненавидеть (Past tense, V2)"],

    // sell
    ["sell", "продавать (V1)"],
    ["sells", "продавать (3rd Person Singular)"],
    ["selling", "продавать (Present Participle)"],
    ["sold", "продавать (Past tense, V2)"],

    // snow
    ["snow", "идти (о снеге) (V1)"],
    ["snows", "идти (о снеге) (3rd Person Singular)"],
    ["snowing", "идти (о снеге) (Present Participle)"],
    ["snowed", "идти (о снеге) (Past tense, V2)"],

    // hike
    ["hike", "ходить пешком, путешествовать (V1)"],
    ["hikes", "ходить пешком, путешествовать (3rd Person Singular)"],
    ["hiking", "ходить пешком, путешествовать (Present Participle)"],
    ["hiked", "ходить пешком, путешествовать (Past tense, V2)"],
];

let g_practice_verbs = null;
     
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await window.globalScriptReady; 
    {
        
        let editor_symbol = new EditorSymbol({callback: checkAnswerGeneralVerbs, suffix_id: 'verbs'});
        
        g_practice_verbs = new Practice({
            el_listen_and_write: document.getElementById('listen_and_write_verbs'), 
            el_exercise_control: document.getElementById('control_general_verbs'), 
            exercises_listen_and_write: getRandomMix(exercises_easy_listen_and_write_verbs),
            editor_symbol: editor_symbol
        });
        g_practice_verbs.genExercisesListenAndWrite();
    }
 
    } catch (error) {
        console.error("Error build:", error);
    }
});
 
 
function checkAnswerGeneralVerbs(value){
    value = textNormalize(value);
    return value==g_practice_verbs.getAnswer();
}
 
</script> 

<style>
table {
  margin: 0px !important;  
  border-collapse: collapse;
}
</style>