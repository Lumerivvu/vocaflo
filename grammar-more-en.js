/* VocabFlow — Grammar: even more topics (English). Loaded after grammar-en.js and before grammar.js.
   Adds 8 topics: There is/are, Question words (A1) · Past Continuous, Prepositions at/on/in (A2) · Gerund or infinitive, Used to (B1) · Past Perfect, Have something done (B2).
   Same data format as grammar-en.js. */
(()=>{
const G=window.GRAM_EN;if(!G||G.some(g=>g.id==='therebe'))return;
const H=s=>`<h3>${s}</h3>`,P=s=>`<p>${s}</p>`,
T=r=>`<div class="gs"><table class="gt">${r.map((a,i)=>'<tr>'+a.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')+'</tr>').join('')}</table></div>`,
X=a=>a.map(([d,r])=>`<div class="gx">${d}${r?`<small>${r}</small>`:''}</div>`).join(''),
N=s=>`<div class="gn">${s}</div>`,W=s=>`<div class="gn gw">${s}</div>`,
L=a=>'<ul>'+a.map(s=>`<li>${s}</li>`).join('')+'</ul>';
const at=(ref,dir,list)=>{const i=G.findIndex(g=>g.id===ref);G.splice(i<0?G.length:i+(dir==='after'?1:0),0,...list)};

/* ======================= A1 ======================= */
const A1=[
{id:'therebe',lv:'A1',t:'There is / There are',ru:'Конструкция there is / there are: «есть, находится»',
th:[
H(`Формы`),
T([['','утверждение','отрицание','вопрос'],['ед. ч. / неисчисляемое','There {h:is} a book. · There {h:is} some water.','There {h:isn’t} a book.','{h:Is} there a book?'],['мн. ч.','There {h:are} two books.','There {h:aren’t} any books.','{h:Are} there any books?']]),
P(`Форма глагола зависит от <b>существительного после</b> there: There is <b>a cat</b> — There are <b>two cats</b>. В отрицании и вопросе с множественным числом используется <b>any</b>.`),
H(`Краткие ответы`),
X([[`{h:Is} there a bank near here? — Yes, there {h:is}. / No, there {h:isn’t}.`,`Здесь рядом есть банк? — Да. / Нет.`],[`{h:Are} there any shops? — Yes, there {h:are}. / No, there {h:aren’t}.`,`Магазины есть? — Да. / Нет.`]]),
W(`Не путайте: <b>There is</b> a park — «есть парк» (говорим, что он существует); <b>It is</b> a park — «это парк» (говорим о конкретном предмете).`)
].join(''),
tx:[`I live in a small flat. [[There is]] a kitchen, a living room and a bedroom. [[There isn’t]] a balcony, but [[there are]] two big windows. In the living room [[there is]] a sofa and [[there are]] some books on the shelf. [[Is there]] a park near my house? Yes, [[there is]]. [[Are there]] any shops? Yes, [[there are]] a few.`,
`Я живу в маленькой квартире. Там есть кухня, гостиная и спальня. Балкона нет, но есть два больших окна. В гостиной стоит диван, а на полке лежат книги. Рядом с моим домом есть парк? Да, есть. Магазины есть? Да, несколько.`],
ex:[
['c',`___ a cat in the garden.`,[`There is`,`There are`,`It is`,`They are`],0,`В саду есть кошка.`,`Cat — единственное число: <b>There is</b>.`],
['c',`___ two chairs in the room.`,[`There is`,`There are`,`It is`,`There be`],1,`В комнате два стула.`,`Chairs — множественное число: <b>There are</b>.`],
['t',`There ___ any milk in the fridge. (negative)`,[`isn’t`,`isn't`,`is not`],`В холодильнике нет молока.`,`Milk неисчисляемое → <b>There isn’t any</b> milk.`],
['c',`___ any restaurants near here?`,[`Is there`,`Are there`,`There are`,`Have there`],1,`Здесь рядом есть рестораны?`,`Вопрос + множественное число: <b>Are there</b> any …?`],
['c',`Is there a bank near here? — Yes, ___.`,[`there is`,`it is`,`there are`,`is there`],0,`Здесь рядом есть банк? — Да.`,`Краткий ответ: <b>Yes, there is</b>.`],
['t',`There ___ three people in the queue.`,[`are`],`В очереди три человека.`,`People — множественное число: There <b>are</b>.`],
['c',`Выберите правильное предложение.`,[`There are a problem.`,`There is a problem.`,`Is a problem.`,`It has a problem.`],1,``,`Problem — единственное число: <b>There is</b> a problem.`],
['o',`There is a park near my house.`,`Рядом с моим домом есть парк.`,`<b>There is</b> + существительное в единственном числе.`],
['o',`Are there any shops here?`,`Здесь есть магазины?`,`Вопрос: <b>Are there</b> any + множественное число.`]
]},
{id:'whq',lv:'A1',t:'Question words',ru:'Вопросительные слова и порядок слов в вопросе',
th:[
H(`Вопросительные слова`),
T([['Слово','Значение','Пример'],['<b>who</b>','кто','{h:Who} is that?'],['<b>what</b>','что / какой','{h:What} do you want?'],['<b>where</b>','где / куда','{h:Where} do you live?'],['<b>when</b>','когда','{h:When} does it start?'],['<b>why</b>','почему','{h:Why} are you late?'],['<b>how</b>','как','{h:How} are you?'],['<b>how many / how much</b>','сколько (исчисляемое / неисчисляемое)','{h:How many} people? · {h:How much} is it?'],['<b>which</b>','какой (из нескольких)','{h:Which} bag is yours?']]),
H(`Порядок слов`),
P(`Вопросительное слово + вспомогательный глагол + подлежащее + основной глагол: <b>Where do you work?</b> · <b>What does she want?</b> · <b>When did they arrive?</b>`),
H(`Вопрос к подлежащему`),
P(`Если вопросительное слово само является подлежащим, вспомогательный глагол <b>не нужен</b>: <b>Who called you?</b> (не «Who did call you?»), <b>What happened?</b>`),
W(`Сравните: <b>Who did you call?</b> (вопрос к дополнению — нужен did) и <b>Who called you?</b> (вопрос к подлежащему — did не нужен).`)
].join(''),
tx:[`[[Who]] are you, and [[where]] are you from? [[What]] do you do? [[How]] old are you? [[Why]] did you come here? [[When]] does your course start? [[How many]] students are in your group? [[Which]] teacher do you like? [[Who]] told you about this school?`,
`Кто ты и откуда ты? Чем ты занимаешься? Сколько тебе лет? Почему ты сюда приехал? Когда начинается твой курс? Сколько студентов в твоей группе? Какой преподаватель тебе нравится? Кто рассказал тебе об этой школе?`],
ex:[
['c',`___ do you live? — In Kyiv.`,[`Who`,`Where`,`When`,`Why`],1,`Где ты живёшь? — В Киеве.`,`Место → <b>Where</b>.`],
['c',`___ is your birthday? — On May 5th.`,[`Where`,`Who`,`When`,`How`],2,`Когда у тебя день рождения? — 5 мая.`,`Время → <b>When</b>.`],
['c',`___ are you late? — Because of the traffic.`,[`How`,`Why`,`What`,`Which`],1,`Почему ты опоздал? — Из-за пробок.`,`Причина → <b>Why</b>.`],
['c',`___ people are in your family?`,[`How much`,`How many`,`How long`,`How old`],1,`Сколько человек в твоей семье?`,`Люди исчисляемые → <b>How many</b>.`],
['c',`___ does she want? — A cup of tea.`,[`Who`,`What`,`Where`,`When`],1,`Что она хочет? — Чашку чая.`,`Предмет → <b>What</b>.`],
['t',`Where ___ you work?`,[`do`],`Где ты работаешь?`,`Вопрос с обычным глаголом в Present Simple → <b>do</b> / does.`],
['t',`What time ___ the film start?`,[`does`],`Во сколько начинается фильм?`,`the film — 3-е лицо, ед. число → <b>does</b>.`],
['c',`Кто тебе позвонил? Выберите правильный вопрос.`,[`Who did call you?`,`Who called you?`,`Who you called?`,`Who does call you?`],1,``,`Вопрос к подлежащему — без вспомогательного глагола: <b>Who called you?</b>`],
['o',`Where do you live?`,`Где ты живёшь?`,`where + do + подлежащее + глагол.`],
['o',`Why did she leave early?`,`Почему она ушла рано?`,`why + did + подлежащее + глагол в начальной форме.`]
]}
];

/* ======================= A2 ======================= */
const A2=[
{id:'pastcont',lv:'A2',t:'Past Continuous',ru:'Прошедшее длительное: что происходило',
th:[
H(`Форма`),
T([['','утверждение','отрицание','вопрос'],['I / he / she / it','I {h:was} working','I {h:wasn’t} working','{h:Was} I working?'],['you / we / they','We {h:were} working','We {h:weren’t} working','{h:Were} you working?']]),
P(`Past Continuous = <b>was / were + глагол с -ing</b>. Он описывает действие, которое было <b>в процессе</b> в определённый момент прошлого.`),
X([[`At 8 o’clock yesterday I {h:was having} breakfast.`,`Вчера в 8 часов я завтракал.`],[`They {h:were watching} TV all evening.`,`Они весь вечер смотрели телевизор.`]]),
H(`Past Continuous + Past Simple`),
P(`Длинное действие (Past Continuous) прерывается коротким (Past Simple). Часто используют <b>while</b> (пока) и <b>when</b> (когда):`),
X([[`I {h:was cooking} when the phone {h:rang}.`,`Я готовил, когда зазвонил телефон.`],[`While she {h:was walking}, it {h:started} to rain.`,`Пока она шла, начался дождь.`]]),
W(`Глаголы состояния (know, like, want, understand) обычно не используются в Continuous: «I was knowing» — ошибка.`)
].join(''),
tx:[`Yesterday at eight o’clock I [[was having]] breakfast. While I [[was reading]] the news, my brother [[was playing]] computer games. Suddenly the phone rang. It was my friend. She [[was waiting]] for me at the station, and I [[wasn’t hurrying]]! I was still at home. When I arrived, it [[was raining]].`,
`Вчера в восемь часов я завтракал. Пока я читал новости, мой брат играл в компьютерные игры. Вдруг зазвонил телефон. Это была моя подруга. Она ждала меня на вокзале, а я не торопился! Я ещё был дома. Когда я приехал, шёл дождь.`],
ex:[
['c',`At 9 p.m. yesterday I ___ TV.`,[`watched`,`was watching`,`were watching`,`am watching`],1,`Вчера в 9 вечера я смотрел телевизор.`,`Действие в процессе в момент в прошлом → <b>was watching</b>.`],
['c',`They ___ football when it started to rain.`,[`played`,`was playing`,`were playing`,`are playing`],2,`Они играли в футбол, когда начался дождь.`,`they → <b>were playing</b>; длинное действие.`],
['t',`I ___ (cook) when the phone rang.`,[`was cooking`],`Я готовил, когда зазвонил телефон.`,`Длинное действие → <b>was cooking</b>; короткое — Past Simple (rang).`],
['t',`While we ___ (walk) home, we met Tom.`,[`were walking`],`Пока мы шли домой, мы встретили Тома.`,`while + Past Continuous: we → <b>were walking</b>.`],
['c',`She ___ when I called her.`,[`slept`,`was sleeping`,`were sleeping`,`sleeping`],1,`Она спала, когда я ей позвонил.`,`<b>was sleeping</b> — действие в процессе; called — короткое.`],
['c',`I ___ the answer, so I said nothing.`,[`wasn’t knowing`,`didn’t know`,`wasn’t know`,`don’t know`],1,`Я не знал ответа, поэтому ничего не сказал.`,`<b>know</b> — глагол состояния, Continuous не используется: Past Simple <b>didn’t know</b>.`],
['o',`I was reading when you called.`,`Я читал, когда ты позвонил.`,`<b>was reading</b> (процесс) + <b>called</b> (момент).`,[`When you called, I was reading.`]],
['o',`What were you doing at six?`,`Что ты делал в шесть?`,`Вопрос: <b>were</b> + подлежащее + глагол с -ing.`]
]},
{id:'preps',lv:'A2',t:'Prepositions: at / on / in',ru:'Предлоги времени и места: at, on, in',
th:[
H(`Время и место`),
T([['','at','on','in'],['время','{h:at} 5 o’clock · {h:at} night · {h:at} the weekend','{h:on} Monday · {h:on} 5 May · {h:on} my birthday','{h:in} July · {h:in} 2024 · {h:in} the morning · {h:in} summer'],['место','{h:at} home · {h:at} the station · {h:at} work · {h:at} school','{h:on} the table · {h:on} the wall · {h:on} the second floor · {h:on} the bus','{h:in} a room · {h:in} London · {h:in} the car · {h:in} the box']]),
L([`<b>at</b> — точка (точное время, конкретное место).`,`<b>on</b> — дни и даты; поверхность.`,`<b>in</b> — месяцы, годы, части суток; внутри чего-либо (город, страна, помещение).`]),
H(`Исключения и устойчивые выражения`),
L([`<b>in the morning / afternoon / evening</b>, но <b>at night</b>.`,`<b>on Monday morning</b> (если указан день).`,`<b>at the weekend</b> (британский вариант), <b>on the weekend</b> (американский).`,`<b>by bus / car / train</b> — «на автобусе, машине, поезде»; <b>on foot</b> — «пешком».`,`<b>at home, at work, at school</b>; но <b>in bed</b>.`])
].join(''),
tx:[`I get up [[at]] seven o’clock [[in]] the morning. [[On]] Mondays I start work [[at]] nine. I usually go to work [[by]] bus, but [[on]] Fridays I go [[on]] foot. My birthday is [[in]] July, and this year it is [[on]] a Saturday. [[At]] the weekend I stay [[at]] home or meet friends [[at]] a café. My keys are [[on]] the table, and my phone is [[in]] my bag.`,
`Я встаю в семь часов утра. По понедельникам я начинаю работу в девять. Обычно я езжу на работу на автобусе, но по пятницам хожу пешком. Мой день рождения в июле, и в этом году он в субботу. В выходные я остаюсь дома или встречаюсь с друзьями в кафе. Мои ключи на столе, а телефон в сумке.`],
ex:[
['c',`The film starts ___ 8 o’clock.`,[`in`,`on`,`at`,`by`],2,`Фильм начинается в 8 часов.`,`Точное время → <b>at</b>.`],
['c',`My birthday is ___ March.`,[`in`,`on`,`at`,`by`],0,`Мой день рождения в марте.`,`Месяц → <b>in</b>.`],
['c',`We have a meeting ___ Tuesday.`,[`in`,`at`,`on`,`by`],2,`У нас встреча во вторник.`,`День недели → <b>on</b>.`],
['t',`I usually sleep ___ night. (at / in / on)`,[`at`],`Я обычно сплю ночью.`,`Исключение: <b>at night</b>.`],
['c',`The book is ___ the table.`,[`in`,`on`,`at`,`by`],1,`Книга лежит на столе.`,`Поверхность → <b>on</b>.`],
['c',`She lives ___ London.`,[`in`,`on`,`at`,`to`],0,`Она живёт в Лондоне.`,`Город → <b>in</b>.`],
['t',`I go to work ___ bus. (by / on / in)`,[`by`],`Я езжу на работу на автобусе.`,`Транспорт: <b>by bus / car / train</b>.`],
['c',`I’m ___ home now. Call me later.`,[`in`,`on`,`at`,`to`],2,`Я сейчас дома. Позвони позже.`,`Устойчивое выражение: <b>at home</b>.`],
['o',`I get up at seven in the morning.`,`Я встаю в семь утра.`,`<b>at</b> + точное время, <b>in the morning</b>.`]
]}
];

/* ======================= B1 ======================= */
const B1=[
{id:'gerinf',lv:'B1',t:'Gerund or infinitive',ru:'Герундий и инфинитив: enjoy doing / want to do',
th:[
H(`После каких глаголов что стоит`),
T([['Только <b>-ing</b>','Только <b>to + инфинитив</b>'],['enjoy, finish, avoid, mind, keep, suggest, consider, practise, miss','want, need, hope, decide, plan, promise, agree, refuse, manage, learn'],['I enjoy {h:swimming}. · She finished {h:working}.','I want {h:to go}. · We decided {h:to leave}.']]),
H(`После предлогов — только -ing`),
P(`Thanks for {h:helping}. · He is good at {h:cooking}. · I’m interested in {h:learning} German. · Before {h:leaving}, call me.`),
H(`Глаголы с разным значением`),
T([['Глагол','+ -ing','+ to + инфинитив'],['<b>stop</b>','перестать: He stopped {h:smoking}.','остановиться, чтобы сделать: He stopped {h:to smoke}.'],['<b>remember</b>','помнить, что делал: I remember {h:locking} the door.','не забыть сделать: Remember {h:to lock} the door.'],['<b>try</b>','попробовать (как эксперимент): Try {h:adding} salt.','постараться: I tried {h:to open} the window.']]),
W(`Нельзя сказать «I enjoy to swim» или «I want going». Учите глагол вместе с формой, которую он требует.`)
].join(''),
tx:[`I enjoy [[learning]] English, and I want [[to speak]] it fluently. Last year I decided [[to take]] a course. Last month I finished [[reading]] my first book in English. I’m interested in [[watching]] films without subtitles, but I can’t avoid [[using]] the dictionary. My teacher suggested [[keeping]] a vocabulary notebook. I don’t mind [[studying]] on Sundays. I stopped [[checking]] my phone during lessons, and now I always remember [[to do]] my homework.`,
`Мне нравится изучать английский, и я хочу говорить на нём свободно. В прошлом году я решил пойти на курсы. В прошлом месяце я дочитал свою первую книгу на английском. Мне интересно смотреть фильмы без субтитров, но я не могу не пользоваться словарём. Преподаватель посоветовал вести тетрадь со словами. Я не против заниматься по воскресеньям. Я перестал проверять телефон на уроках, а теперь всегда не забываю делать домашнее задание.`],
ex:[
['c',`I enjoy ___ to music.`,[`listen`,`to listen`,`listening`,`listened`],2,`Мне нравится слушать музыку.`,`<b>enjoy</b> + -ing.`],
['c',`We decided ___ a new car.`,[`buying`,`to buy`,`buy`,`bought`],1,`Мы решили купить новую машину.`,`<b>decide</b> + to + инфинитив.`],
['c',`She is good at ___ pictures.`,[`draw`,`to draw`,`drawing`,`drew`],2,`Она хорошо рисует.`,`После предлога (<b>at</b>) — форма <b>-ing</b>.`],
['t',`He finished ___ (write) the report at noon.`,[`writing`],`Он закончил писать отчёт в полдень.`,`<b>finish</b> + -ing.`],
['t',`I hope ___ (see) you soon.`,[`to see`],`Надеюсь скоро тебя увидеть.`,`<b>hope</b> + to + инфинитив.`],
['c',`He stopped ___ because it was bad for his health.`,[`to smoke`,`smoking`,`smoke`,`smoked`],1,`Он бросил курить, потому что это вредно.`,`<b>stop + -ing</b> = перестать делать.`],
['c',`We stopped ___ a coffee.`,[`having`,`to have`,`have`,`had`],1,`Мы остановились, чтобы выпить кофе.`,`<b>stop + to</b> = остановиться, чтобы сделать что-то.`],
['c',`Remember ___ the door when you leave!`,[`locking`,`to lock`,`lock`,`locked`],1,`Не забудь запереть дверь, когда уйдёшь!`,`<b>remember + to</b> = не забыть сделать.`],
['o',`I want to learn English.`,`Я хочу выучить английский.`,`<b>want</b> + to + инфинитив.`]
]},
{id:'usedto',lv:'B1',t:'Used to / would / be used to',ru:'Прошлые привычки и привыкание',
th:[
H(`used to + инфинитив`),
P(`Прошлые <b>привычки и состояния</b>, которых <b>больше нет</b>: I {h:used to live} in Lviv. (Раньше жил, сейчас нет.)`),
T([['','форма','пример'],['утверждение','used to + V','She {h:used to} smoke.'],['отрицание','didn’t use to + V','I {h:didn’t use to} like coffee.'],['вопрос','Did … use to + V?','{h:Did} you {h:use to} play chess?']]),
P(`Для настоящего времени <b>used to</b> не существует: «I use to…» — ошибка.`),
H(`would`),
P(`<b>would + инфинитив</b> — повторяющиеся <b>действия</b> в прошлом (не состояния): Every summer we {h:would visit} our grandparents. С глаголами состояния (be, have, like, know) — только <b>used to</b>: I {h:used to be} shy (не «I would be shy»).`),
H(`be / get used to + -ing`),
P(`<b>be used to</b> — «привык»; <b>get used to</b> — «привыкаю, привыкну». После to — существительное или <b>-ing</b>: I’m used to {h:getting up} early. She is getting used to {h:living} here.`),
W(`<b>used to do</b> (раньше делал) ≠ <b>be used to doing</b> (привык делать). Разное значение и разная форма!`)
].join(''),
tx:[`When I was a child, we [[used to]] live in a small village. Every morning I [[would]] feed the chickens, and every evening we [[would]] sit by the fire. I [[didn’t use to]] like school, but my teacher [[used to]] tell great stories. Now I live in a big city. At first I wasn’t [[used to]] the noise, but I’m [[getting used to living]] here. I’m [[used to getting up]] early, so it isn’t a problem.`,
`Когда я был ребёнком, мы жили в маленькой деревне. Каждое утро я кормил кур, а каждый вечер мы сидели у огня. Мне не нравилась школа, но мой учитель рассказывал замечательные истории. Теперь я живу в большом городе. Сначала я не привык к шуму, но привыкаю жить здесь. Я привык рано вставать, так что это не проблема.`],
ex:[
['c',`I ___ in Kyiv, but now I live in Warsaw.`,[`am used to live`,`used to live`,`use to live`,`would to live`],1,`Раньше я жил в Киеве, а теперь живу в Варшаве.`,`Прошлое состояние, которого больше нет: <b>used to</b> + инфинитив.`],
['c',`Did you ___ play the piano?`,[`used to`,`use to`,`using to`,`be used to`],1,`Ты раньше играл на пианино?`,`После <b>did</b> форма без -d: <b>use to</b>.`],
['c',`I’m used to ___ early.`,[`get up`,`getting up`,`got up`,`to get up`],1,`Я привык рано вставать.`,`<b>be used to</b> + -ing.`],
['t',`She is getting used to ___ (live) alone.`,[`living`],`Она привыкает жить одна.`,`<b>get used to</b> + -ing.`],
['c',`Every summer we ___ visit our grandparents.`,[`would`,`are used to`,`use to`,`were used`],0,`Каждое лето мы навещали бабушку и дедушку.`,`Повторяющееся действие в прошлом → <b>would</b> (или used to).`],
['c',`Выберите правильное предложение (состояние).`,[`I would be shy as a child.`,`I used to be shy as a child.`,`I am used to be shy as a child.`,`I use to be shy as a child.`],1,``,`С глаголом состояния (<b>be</b>) would не используется — только <b>used to</b>.`],
['t',`I ___ like coffee, but now I love it. (negative)`,[`didn’t use to`,`didn't use to`,`did not use to`],`Раньше я не любил кофе, а теперь люблю.`,`Отрицание: <b>didn’t use to</b> + инфинитив.`],
['o',`I used to play football.`,`Раньше я играл в футбол.`,`<b>used to</b> + инфинитив — прошлая привычка.`]
]}
];

/* ======================= B2 ======================= */
const B2=[
{id:'pastperf',lv:'B2',t:'Past Perfect',ru:'Предпрошедшее: действие раньше другого в прошлом',
th:[
H(`Форма`),
T([['','форма','пример'],['утверждение','had + V3','She {h:had finished} the work.'],['отрицание','hadn’t + V3','I {h:hadn’t seen} him before.'],['вопрос','Had + подлежащее + V3?','{h:Had} they {h:left}?']]),
H(`Когда использовать`),
P(`<b>Past Perfect</b> — действие, которое произошло <b>раньше другого действия в прошлом</b>. Более позднее действие стоит в Past Simple.`),
X([[`When I arrived, the film {h:had already started}.`,`Когда я пришёл, фильм уже начался.`],[`She was tired because she {h:hadn’t slept} well.`,`Она устала, потому что плохо спала.`]]),
H(`Типичные слова`),
L([`<b>before, after, when, by the time</b> — между двумя прошлыми действиями.`,`<b>already, just, never, ever</b>: She had already left.`,`<b>because</b> — объясняем причину прошлого события.`]),
W(`Если порядок событий ясен из слов <b>before / after</b>, в разговоре Past Perfect иногда заменяют Past Simple. На экзаменах и в письменной речи используйте Past Perfect.`)
].join(''),
tx:[`When I arrived at the station, the train [[had already left]]. I [[hadn’t checked]] the timetable, and I realised I [[had made]] a mistake. After I [[had waited]] for an hour, I took a taxi. By the time I got home, my family [[had eaten]] dinner. I [[had never been]] so tired before.`,
`Когда я пришёл на вокзал, поезд уже ушёл. Я не проверил расписание и понял, что совершил ошибку. Прождав час, я взял такси. Когда я добрался домой, семья уже поужинала. Раньше я никогда не был таким уставшим.`],
ex:[
['c',`When we arrived, the film ___ already started.`,[`has`,`had`,`was`,`have`],1,`Когда мы пришли, фильм уже начался.`,`Действие раньше другого в прошлом → <b>had started</b>.`],
['c',`She was happy because she ___ the exam.`,[`passed`,`had passed`,`has passed`,`was passing`],1,`Она была счастлива, потому что сдала экзамен.`,`Причина произошла раньше → <b>had passed</b>.`],
['t',`I ___ (not / see) him before the party.`,[`hadn’t seen`,`had not seen`,`hadn't seen`],`Я не видел его до вечеринки.`,`Отрицание: <b>had not (hadn’t) + V3</b>.`],
['t',`After he ___ (finish) work, he went home.`,[`had finished`],`Закончив работу, он пошёл домой.`,`Сначала закончил (Past Perfect), потом пошёл (Past Simple).`],
['c',`By the time I got there, they ___.`,[`left`,`had left`,`have left`,`were leaving`],1,`К тому времени как я добрался, они уже ушли.`,`<b>by the time</b> + Past Simple → в другой части Past Perfect.`],
['c',`Why was she angry? ___ he forgotten her birthday?`,[`Did`,`Had`,`Has`,`Was`],1,`Почему она злилась? Он забыл её день рождения?`,`Вопрос в Past Perfect: <b>Had</b> + подлежащее + V3.`],
['c',`I ___ this film before, so I didn’t watch it again.`,[`saw`,`had seen`,`have seen`,`was seeing`],1,`Я уже видел этот фильм, поэтому не стал смотреть снова.`,`Раньше другого прошлого действия → <b>had seen</b>.`],
['o',`She had already left when I called.`,`Она уже ушла, когда я позвонил.`,`<b>had already left</b> — раньше, чем called.`,[`When I called, she had already left.`]]
]},
{id:'causative',lv:'B2',t:'Have / get something done',ru:'Каузатив: «сделать что-то» (чужими руками)',
th:[
H(`Зачем нужна эта конструкция`),
P(`Когда действие выполняет <b>кто-то другой</b> (мастер, парикмахер, врач) для нас, говорят: <b>have + предмет + V3</b>.`),
X([[`I {h:had} my hair {h:cut}.`,`Я подстригся (мне подстригли).`],[`She {h:is having} her car {h:repaired}.`,`Ей чинят машину.`]]),
T([['время','форма','пример'],['Present Simple','have / has + object + V3','I {h:have} my teeth {h:checked} every year.'],['Past Simple','had + object + V3','We {h:had} the house {h:painted}.'],['Future','will have + object + V3','He {h:will have} his suit {h:cleaned}.'],['вопрос','Do / Did … have + object + V3?','Where {h:did} you {h:have} it {h:made}?']]),
H(`Разговорный вариант: get`),
P(`<b>get + object + V3</b> — то же самое, но менее формально: I {h:got} my phone {h:fixed}.`),
P(`Эта же конструкция описывает и неприятные события: He {h:had} his wallet {h:stolen}. — «У него украли кошелёк».`),
W(`Сравните: <b>I cut my hair</b> (я сам себе подстриг) и <b>I had my hair cut</b> (мне подстригли). Без <b>have</b> получается, что вы сделали это сами!`)
].join(''),
tx:[`I [[had]] my hair [[cut]] yesterday. Last month we [[had]] our kitchen [[painted]], and next week we [[are having]] the windows [[replaced]]. My brother [[got]] his car [[repaired]] because it wouldn’t start. Where do you [[have]] your suits [[made]]? She [[had]] her wallet [[stolen]] on the bus, and she [[will have]] her documents [[renewed]] next month.`,
`Вчера я подстригся. В прошлом месяце нам покрасили кухню, а на следующей неделе нам будут менять окна. Мой брат отремонтировал машину (в сервисе), потому что она не заводилась. Где вы шьёте костюмы? У неё украли кошелёк в автобусе, а в следующем месяце она обновит документы.`],
ex:[
['c',`I ___ my hair cut yesterday.`,[`have`,`had`,`did`,`cut`],1,`Вчера я постригся.`,`Прошедшее время → <b>had</b> + object + V3.`],
['c',`We are ___ the windows replaced next week.`,[`having`,`had`,`have`,`doing`],0,`На следующей неделе нам заменят окна.`,`Запланированное будущее: <b>are having</b> + object + V3.`],
['t',`She ___ (have) her car repaired last week.`,[`had`],`На прошлой неделе ей отремонтировали машину.`,`Past Simple → <b>had</b> + her car repaired.`],
['c',`He got his phone ___.`,[`fix`,`fixing`,`fixed`,`to fix`],2,`Ему починили телефон.`,`<b>get</b> + object + <b>V3</b>: fixed.`],
['c',`Which sentence means someone else painted the house?`,[`I painted my house.`,`I had my house painted.`,`I have painted my house myself.`,`I was painting my house.`],1,``,`<b>have + object + V3</b> = услугу выполнил кто-то другой.`],
['t',`I need to ___ my teeth checked. (have)`,[`have`],`Мне нужно проверить зубы (у врача).`,`<b>have</b> + object + V3 после need to.`],
['c',`Where did you ___ your suit made?`,[`had`,`have`,`having`,`has`],1,`Где вы заказали пошив костюма?`,`После did — начальная форма: <b>did you have</b>.`],
['o',`I had my car washed.`,`Мне помыли машину.`,`<b>had</b> + object + V3.`],
['o',`She is having her hair cut.`,`Её сейчас стригут.`,`<b>is having</b> + object + V3 — действие в процессе.`]
]}
];

/* ======================= INSERT ======================= */
at('prcont','after',A1);
at('modals','after',A2);
at('relcl','after',B1);
at('cond3','after',B2);
})();