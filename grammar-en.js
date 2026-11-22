/* VocabFlow — Grammar topics (English). Same format as grammar-data.js, loaded into window.GRAM_EN.
   Markers in theory / explanations: {h:..} highlight · {p:..} purple · {m:..} blue · {f:..} pink · {n:..} green.
   Exercises:  ['c', sentence with ___, [options], indexOfCorrect, 'Russian', 'why']
               ['t', sentence with ___, [accepted answers], 'Russian', 'why']
               ['o', correct sentence, 'Russian', 'why', [other accepted orders]]   (leading "!" keeps the capital of the first word) */
(()=>{
const H=s=>`<h3>${s}</h3>`,P=s=>`<p>${s}</p>`,
T=r=>`<div class="gs"><table class="gt">${r.map((a,i)=>'<tr>'+a.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')+'</tr>').join('')}</table></div>`,
X=a=>a.map(([d,r])=>`<div class="gx">${d}${r?`<small>${r}</small>`:''}</div>`).join(''),
N=s=>`<div class="gn">${s}</div>`,W=s=>`<div class="gn gw">${s}</div>`,
L=a=>'<ul>'+a.map(s=>`<li>${s}</li>`).join('')+'</ul>';

window.GRAM_EN=[
/* ============================ A1 ============================ */
{id:'tobe',lv:'A1',t:'To be',ru:'Глагол to be: am / is / are',
th:[
H(`Формы`),
T([['','утверждение','отрицание','вопрос'],['I','I {h:am}','I {h:am not}','{h:Am} I…?'],['he / she / it','{h:is}','{h:is not} (isn’t)','{h:Is} she…?'],['you / we / they','{h:are}','{h:are not} (aren’t)','{h:Are} you…?']]),
P(`В английском предложении <b>всегда</b> нужны подлежащее и глагол. «Я студент» — это <b>I am</b> a student, глагол пропускать нельзя.`),
P(`Краткие формы: I’m, you’re, he’s, she’s, it’s, we’re, they’re.`),
H(`Вопрос и краткий ответ`),
P(`В вопросе глагол <b>to be</b> ставится перед подлежащим.`),
X([[`{h:Are} you tired? — Yes, I {h:am}. / No, I’m not.`,`Ты устал? — Да. / Нет.`],[`Where {h:is} Tom? — He {h:is} at work.`,`Где Том? — Он на работе.`]]),
W(`В кратком ответе <b>Yes</b> нельзя сказать «Yes, I’m» — нужно <b>Yes, I am</b>.`)
].join(''),
tx:[`My name [[is]] Anna. I [[am]] twenty-five and I [[am]] from Ukraine. My parents [[are]] teachers. My brother [[is]] a student. [[Is]] your family big? We [[are]] not a big family, but we [[are]] very happy.`,
`Меня зовут Анна. Мне двадцать пять, и я из Украины. Мои родители — учителя. Мой брат — студент. Ваша семья большая? Мы не большая семья, но очень счастливая.`],
ex:[
['c',`She ___ a teacher.`,[`am`,`is`,`are`,`be`],1,`Она учитель.`,`С she, he, it используется <b>is</b>.`],
['c',`We ___ from Ukraine.`,[`is`,`am`,`are`,`be`],2,`Мы из Украины.`,`С we, you, they используется <b>are</b>.`],
['t',`I ___ tired today. (be)`,[`am`],`Сегодня я устал.`,`С <b>I</b> всегда <b>am</b>.`],
['t',`___ they at home? (be)`,[`are`],`Они дома?`,`В вопросе <b>are</b> стоит перед подлежащим: <b>Are</b> they…?`],
['c',`My parents ___ at work now.`,[`is`,`are`,`am`,`be`],1,`Мои родители сейчас на работе.`,`Parents — множественное число, значит <b>are</b>.`],
['c',`He ___ not hungry.`,[`are`,`am`,`is`,`do`],2,`Он не голоден.`,`Отрицание: <b>is not</b> (isn’t). Вспомогательный do здесь не нужен.`],
['t',`Where ___ you from? (be)`,[`are`],`Откуда ты?`,`В специальном вопросе: вопросительное слово + <b>are</b> + подлежащее.`],
['o',`Is your sister at school?`,`Твоя сестра в школе?`,`Порядок вопроса: <b>Is</b> + подлежащее + остальное.`],
['o',`!I am not ready.`,`Я не готов.`,`Отрицание: <b>am not</b> после подлежащего.`]
]},

{id:'artic',lv:'A1',t:'Articles: a / an / the',ru:'Артикли a, an, the и отсутствие артикля',
th:[
H(`Неопределённый артикль a / an`),
P(`Ставится перед <b>исчисляемым существительным в единственном числе</b>, когда предмет упоминается впервые или называется один из многих.`),
L([`<b>a</b> — перед согласным звуком: a book, a university`,`<b>an</b> — перед гласным звуком: an apple, an hour`]),
N(`Важен <b>звук</b>, а не буква: an <b>h</b>our (h не читается), a <b>u</b>niversity (звук [j]).`),
H(`Определённый артикль the`),
P(`Ставится, когда собеседнику ясно, о каком предмете речь: он уже упоминался, он единственный в своём роде или понятен из ситуации.`),
X([[`I have a dog. {h:The} dog is big.`,`У меня есть собака. Собака большая.`],[`{h:The} sun is hot.`,`Солнце горячее.`]]),
H(`Без артикля`),
P(`Артикль не нужен с множественным числом и неисчисляемыми существительными в общем смысле, а также с языками, городами, большинством стран: <b>I like music.</b> <b>She speaks German.</b>`)
].join(''),
tx:[`I have [[a]] brother and [[a]] sister. My brother is [[an]] engineer. He works in [[an]] office in the city centre. [[The]] office is near [[the]] station. My sister is [[a]] student. She likes music and she plays [[the]] piano.`,
`У меня есть брат и сестра. Мой брат — инженер. Он работает в офисе в центре города. Офис находится рядом с вокзалом. Моя сестра — студентка. Она любит музыку и играет на пианино.`],
ex:[
['c',`I have ___ apple.`,[`a`,`an`,`the`,`no article`],1,`У меня есть яблоко.`,`Apple начинается с гласного звука, поэтому <b>an</b>.`],
['c',`She is ___ engineer.`,[`a`,`an`,`the`,`no article`],1,`Она инженер.`,`Профессия называется с неопределённым артиклем. Engineer начинается с гласного звука: <b>an</b>.`],
['c',`___ sun is hot today.`,[`A`,`An`,`The`,`No article`],2,`Сегодня солнце жаркое.`,`Солнце одно, поэтому <b>the</b>.`],
['c',`I like ___ music.`,[`a`,`an`,`the`,`no article`],3,`Я люблю музыку.`,`Музыка в общем смысле — неисчисляемое существительное, артикль не нужен.`],
['t',`He has ___ umbrella. (a/an)`,[`an`],`У него есть зонт.`,`Umbrella начинается с гласного звука: <b>an</b>.`],
['c',`Can you close ___ window, please?`,[`a`,`an`,`the`,`no article`],2,`Закрой, пожалуйста, окно.`,`Оба понимают, о каком именно окне речь, поэтому <b>the</b>.`],
['c',`My brother is ___ doctor.`,[`a`,`an`,`the`,`no article`],0,`Мой брат врач.`,`Профессия: a + согласный звук: <b>a</b> doctor.`],
['t',`I saw a cat. ___ cat was black. (a/the)`,[`the`],`Я увидел кошку. Кошка была чёрной.`,`Во втором упоминании ставится <b>the</b>.`],
['o',`I need a new phone.`,`Мне нужен новый телефон.`,`Артикль стоит перед прилагательным: <b>a</b> new phone.`]
]},

{id:'prsimple',lv:'A1',t:'Present Simple',ru:'Настоящее простое: привычки и факты',
th:[
H(`Когда используется`),
P(`Для <b>привычек, регулярных действий, фактов и расписаний</b>: <i>I get up at 7. The sun rises in the east.</i>`),
H(`Образование`),
T([['','утверждение','отрицание','вопрос'],['I / you / we / they','work','{h:don’t} work','{h:Do} you work?'],['he / she / it','work{h:s}','{h:doesn’t} work','{h:Does} she work?']]),
P(`В 3-м лице единственного числа к глаголу добавляется <b>-s</b> (-es после s, sh, ch, x, o: watch<b>es</b>, go<b>es</b>; study → stud<b>ies</b>).`),
W(`С <b>does / doesn’t</b> глагол остаётся <b>без -s</b>: She doesn’t work. (а не doesn’t works)`),
H(`Наречия частоты`),
P(`always, usually, often, sometimes, never ставятся <b>перед</b> основным глаголом и <b>после</b> to be: <i>He often reads. She is always late.</i>`)
].join(''),
tx:[`My day [[starts]] at seven. I [[get]] up, [[have]] breakfast and [[go]] to work by bus. My colleague Tom [[drives]] to work. He [[doesn’t like]] buses. [[Do]] you [[work]] in the evening? I [[don’t]]. I usually [[watch]] a film or [[read]] a book.`,
`Мой день начинается в семь. Я встаю, завтракаю и еду на работу на автобусе. Мой коллега Том ездит на машине. Он не любит автобусы. Ты работаешь вечером? Нет. Обычно я смотрю фильм или читаю книгу.`],
ex:[
['c',`He ___ coffee every morning.`,[`drink`,`drinks`,`drinking`,`is drink`],1,`Он пьёт кофе каждое утро.`,`He + Present Simple: к глаголу добавляется <b>-s</b>.`],
['t',`My sister ___ in a bank. (work)`,[`works`],`Моя сестра работает в банке.`,`3-е лицо единственного числа: work → <b>works</b>.`],
['c',`___ you like pizza?`,[`Do`,`Does`,`Are`,`Is`],0,`Ты любишь пиццу?`,`С you используется вспомогательный глагол <b>Do</b>.`],
['c',`She ___ like fish.`,[`don’t`,`doesn’t`,`isn’t`,`not`],1,`Она не любит рыбу.`,`С she: <b>doesn’t</b> + глагол без -s.`],
['t',`The bus ___ at 8 o’clock. (leave)`,[`leaves`],`Автобус отправляется в 8 часов.`,`Расписание — Present Simple, 3-е лицо: leave → <b>leaves</b>.`],
['t',`He ___ his homework in the evening. (do)`,[`does`],`Он делает домашнее задание вечером.`,`do в 3-м лице: <b>does</b>.`],
['c',`They usually ___ to work by bus.`,[`goes`,`go`,`going`,`are go`],1,`Они обычно ездят на работу на автобусе.`,`С they глагол без -s: <b>go</b>.`],
['t',`Mary ___ English every day. (study)`,[`studies`],`Мэри изучает английский каждый день.`,`Согласная + y → <b>-ies</b>: study → studies.`],
['t',`___ he work on Sundays? (do)`,[`does`],`Он работает по воскресеньям?`,`С he в вопросе: <b>Does</b> he work…?`],
['o',`My father does not drink tea.`,`Мой отец не пьёт чай.`,`<b>does not</b> + глагол без -s.`],
['o',`Does she live near the station?`,`Она живёт рядом с вокзалом?`,`Вопрос: Does + подлежащее + глагол без -s.`]
]},

{id:'prcont',lv:'A1',t:'Present Continuous',ru:'Настоящее длительное: действие сейчас',
th:[
H(`Когда используется`),
L([`действие <b>происходит прямо сейчас</b>: <i>I’m reading now.</i>`,`временная ситуация: <i>She is staying with us this week.</i>`,`уже запланированное будущее: <i>We are meeting at 6.</i>`]),
H(`Образование`),
P(`<b>am / is / are</b> + глагол с <b>-ing</b>.`),
T([['','утверждение','отрицание','вопрос'],['I','I {h:am} work{h:ing}','I {h:am not} working','{h:Am} I working?'],['he / she / it','she {h:is} working','she {h:isn’t} working','{h:Is} she working?'],['you / we / they','they {h:are} working','they {h:aren’t} working','{h:Are} they working?']]),
P(`Правописание: make → mak<b>ing</b>, sit → sit<b>ting</b>, lie → l<b>y</b>ing.`),
W(`<b>Глаголы состояния</b> (know, understand, like, love, want, need, have = «иметь») обычно не употребляются в Continuous: <i>I understand</i> (а не «I am understanding»).`)
].join(''),
tx:[`Look! It [[is raining]] and the children [[are playing]] in the garden. My mother [[is cooking]] dinner. I [[am writing]] an email. My brother [[isn’t helping]] us. He [[is watching]] TV. [[Are]] you [[working]] now? No, I [[am not]]. I [[am listening]] to music.`,
`Смотри! Идёт дождь, а дети играют в саду. Моя мама готовит ужин. Я пишу письмо. Мой брат нам не помогает. Он смотрит телевизор. Ты сейчас работаешь? Нет, я слушаю музыку.`],
ex:[
['c',`Look! It ___ now.`,[`rains`,`is raining`,`rain`,`raining`],1,`Смотри! Сейчас идёт дождь.`,`«Look!» и «now» указывают на действие сейчас: <b>is raining</b>.`],
['t',`I ___ a book at the moment. (read)`,[`am reading`],`Сейчас я читаю книгу.`,`<b>am + reading</b>.`],
['c',`She ___ TV now.`,[`watch`,`watches`,`is watching`,`watching`],2,`Она сейчас смотрит телевизор.`,`Действие в процессе: is + watching.`],
['c',`I ___ what you mean.`,[`understand`,`am understanding`,`understands`,`understanding`],0,`Я понимаю, что ты имеешь в виду.`,`<b>understand</b> — глагол состояния, в Continuous обычно не употребляется.`],
['t',`They ___ football in the park. (play)`,[`are playing`],`Они играют в футбол в парке.`,`they + <b>are playing</b>.`],
['c',`___ you listening to me?`,[`Do`,`Are`,`Is`,`Did`],1,`Ты меня слушаешь?`,`Вопрос в Present Continuous начинается с <b>Are</b> (you → are).`],
['t',`We ___ dinner now. (have)`,[`are having`],`Мы сейчас ужинаем.`,`<b>have dinner</b> — действие, а не владение, поэтому Continuous допустим.`],
['o',`He is not working today.`,`Сегодня он не работает.`,`<b>is not</b> + глагол с -ing.`],
['o',`What are you doing now?`,`Что ты сейчас делаешь?`,`Вопросительное слово + are + подлежащее + глагол с -ing.`]
]},

/* ============================ A2 ============================ */
{id:'pastsimple',lv:'A2',t:'Past Simple',ru:'Простое прошедшее время',
th:[
H(`Когда используется`),
P(`Для <b>законченных действий в прошлом</b>, особенно если указано время: <i>yesterday, last week, in 2010, two days ago</i>.`),
H(`Образование`),
T([['','правильные','неправильные'],['утверждение','work{h:ed}, play{h:ed}, stud{h:ied}','go → {h:went}, buy → {h:bought}, see → {h:saw}'],['отрицание','I {h:didn’t} work','I {h:didn’t} go'],['вопрос','{h:Did} you work?','{h:Did} you go?']]),
W(`После <b>did / didn’t</b> глагол стоит в <b>начальной форме</b>: Did you see him? (а не Did you saw). I didn’t go. (а не didn’t went)`),
P(`<b>to be</b> в прошедшем: I / he / she / it — <b>was</b>, you / we / they — <b>were</b>. Вопросы и отрицания без did: <i>Was he at home? We weren’t there.</i>`),
H(`Частые неправильные глаголы`),
P(`be — was/were · do — did · go — went · have — had · make — made · see — saw · take — took · come — came · get — got · buy — bought · eat — ate · write — wrote`)
].join(''),
tx:[`Last summer we [[went]] to the mountains. We [[stayed]] in a small hotel and [[walked]] every day. One evening we [[saw]] a bear! We [[didn’t run]]. We [[took]] some photos and [[went]] back. [[Did]] you [[have]] a good holiday last year? Yes, I [[did]]. It [[was]] great.`,
`Прошлым летом мы ездили в горы. Мы жили в маленьком отеле и каждый день ходили пешком. Однажды вечером мы увидели медведя! Мы не побежали. Мы сделали несколько фотографий и пошли обратно. Ты хорошо отдохнул в прошлом году? Да. Было здорово.`],
ex:[
['c',`We ___ to Lviv last summer.`,[`go`,`goed`,`went`,`gone`],2,`Прошлым летом мы ездили во Львов.`,`go — неправильный глагол: go → <b>went</b>.`],
['t',`She ___ me yesterday. (call)`,[`called`],`Вчера она мне позвонила.`,`Правильный глагол: call + <b>-ed</b>.`],
['c',`I ___ not see him.`,[`do`,`did`,`was`,`am`],1,`Я его не видел.`,`Отрицание в Past Simple: <b>did not</b> + глагол в начальной форме.`],
['c',`___ you finish the work?`,[`Did`,`Do`,`Were`,`Have`],0,`Ты закончил работу?`,`Вопрос в Past Simple начинается с <b>Did</b>.`],
['t',`He ___ a new car last year. (buy)`,[`bought`],`В прошлом году он купил новую машину.`,`buy — неправильный глагол: <b>bought</b>.`],
['t',`They ___ at home yesterday. (be)`,[`were`],`Вчера они были дома.`,`С they: <b>were</b>.`],
['c',`She didn’t ___ the answer.`,[`knew`,`know`,`known`,`knows`],1,`Она не знала ответа.`,`После didn’t глагол в начальной форме: <b>know</b>.`],
['t',`We ___ pizza for dinner on Friday. (eat)`,[`ate`],`В пятницу мы ели пиццу на ужин.`,`eat — неправильный глагол: <b>ate</b>.`],
['o',`I did not watch the film.`,`Я не смотрел этот фильм.`,`<b>did not</b> + начальная форма глагола.`],
['o',`Where did you buy this jacket?`,`Где ты купил эту куртку?`,`Вопросительное слово + did + подлежащее + глагол в начальной форме.`]
]},

{id:'futures',lv:'A2',t:'Future: will / going to',ru:'Будущее: will, be going to, Present Continuous',
th:[
H(`will`),
L([`<b>спонтанное решение</b> в момент речи: <i>The phone is ringing. I’ll answer it.</i>`,`<b>предсказание-мнение</b> (I think, probably): <i>I think it will be sunny.</i>`,`обещание, предложение: <i>I’ll help you.</i>`]),
H(`be going to`),
L([`<b>заранее принятое намерение</b>: <i>I’m going to study medicine.</i>`,`предсказание по <b>видимым признакам</b>: <i>Look at the clouds! It’s going to rain.</i>`]),
H(`Present Continuous для планов`),
P(`Если есть договорённость и конкретное время: <i>We are meeting Anna at 6 tonight.</i>`),
T([['','утверждение','отрицание','вопрос'],['will','I {h:will} go','I {h:won’t} go','{h:Will} you go?'],['be going to','I {h:am going to} go','I {h:am not going to} go','{h:Are} you {h:going to} go?']]),
N(`После <b>will</b> глагол стоит в начальной форме, без to: <i>I will help</i>, а не «I will to help».`)
].join(''),
tx:[`Next month I [[am going to]] start a new job. I think it [[will]] be interesting. Look at the sky! It [[is going to]] rain. I [[will]] take an umbrella. We [[are meeting]] my boss on Monday at ten. Don’t worry, I [[won’t]] be late. [[Will]] you come with me? I [[am not going to]] go alone.`,
`В следующем месяце я собираюсь начать новую работу. Думаю, она будет интересной. Посмотри на небо! Сейчас пойдёт дождь. Я возьму зонт. В понедельник в десять мы встречаемся с моим начальником. Не волнуйся, я не опоздаю. Ты пойдёшь со мной? Я не собираюсь идти один.`],
ex:[
['c',`Look at the sky! It ___ rain.`,[`will`,`is going to`,`is`,`does`],1,`Посмотри на небо! Сейчас пойдёт дождь.`,`Предсказание по видимым признакам (тучи): <b>is going to</b>.`],
['c',`I think it ___ be sunny tomorrow.`,[`will`,`is going`,`is`,`does`],0,`Думаю, завтра будет солнечно.`,`Предсказание-мнение с «I think»: <b>will</b>.`],
['c',`The phone is ringing. I ___ answer it.`,[`will`,`am going to`,`am answering`,`answer`],0,`Телефон звонит. Я отвечу.`,`Спонтанное решение в момент речи: <b>will</b> (I’ll).`],
['c',`We ___ visit my grandparents on Sunday. We have already bought the tickets.`,[`will`,`are going to`,`visit`,`do`],1,`В воскресенье мы поедем к бабушке и дедушке. Билеты уже куплены.`,`Заранее принятое решение: <b>are going to</b>.`],
['t',`I ___ help you with your bags. (will)`,[`will`],`Я помогу тебе с сумками.`,`Предложение помощи: <b>will</b>.`],
['t',`She ___ to study medicine. (go)`,[`is going`],`Она собирается изучать медицину.`,`Намерение: she <b>is going</b> to study.`],
['c',`I am not sure, but I think he ___ come.`,[`will not`,`don’t`,`isn’t`,`not going`],0,`Я не уверен, но думаю, он не придёт.`,`Отрицание с will: <b>will not</b> (won’t) + начальная форма.`],
['o',`We will not be late.`,`Мы не опоздаем.`,`<b>will not</b> + начальная форма (be).`],
['o',`Are you going to call him?`,`Ты собираешься ему позвонить?`,`Вопрос: Are + подлежащее + going to + глагол.`]
]},

{id:'compar',lv:'A2',t:'Comparatives & superlatives',ru:'Степени сравнения прилагательных',
th:[
H(`Образование`),
T([['тип','обычная','сравнительная','превосходная'],['короткие (1 слог)','tall','tall{h:er} than','the tall{h:est}'],['на -e','nice','nic{h:er}','the nic{h:est}'],['согл.+гл.+согл.','big','big{h:ger}','the big{h:gest}'],['на -y','easy','eas{h:ier}','the eas{h:iest}'],['длинные (2+ слога)','interesting','{h:more} interesting','the {h:most} interesting']]),
H(`Исключения`),
T([['good','better','the best'],['bad','worse','the worst'],['far','farther / further','the farthest / furthest']]),
H(`Сравнение`),
L([`<b>than</b> — «чем»: <i>My car is faster than yours.</i>`,`<b>as … as</b> — «такой же … как»: <i>He is as tall as me.</i>`,`<b>not as … as</b>: <i>It isn’t as cold as yesterday.</i>`]),
N(`Превосходная степень обычно с <b>the</b>: the best day, the most beautiful city.`)
].join(''),
tx:[`My city is [[bigger]] than my village, but it is [[more crowded]] and [[noisier]]. My village is [[the quietest]] place I know. Life there is [[slower]] and [[healthier]]. It isn’t [[as]] exciting [[as]] the city, but for me it is [[the best]] place to live.`,
`Мой город больше моей деревни, но он более людный и шумный. Моя деревня — самое тихое место, которое я знаю. Жизнь там медленнее и здоровее. Там не так интересно, как в городе, но для меня это лучшее место для жизни.`],
ex:[
['c',`This book is ___ than that one.`,[`interesting`,`more interesting`,`most interesting`,`interestinger`],1,`Эта книга интереснее той.`,`Длинное прилагательное: <b>more</b> + прилагательное.`],
['t',`Kyiv is ___ than Uzhhorod. (big)`,[`bigger`],`Киев больше Ужгорода.`,`big → <b>bigger</b> (удвоение согласной).`],
['c',`She is the ___ student in the class.`,[`good`,`better`,`best`,`most good`],2,`Она лучшая ученица в классе.`,`good — исключение: good → better → <b>the best</b>.`],
['t',`This exercise is ___ than the last one. (easy)`,[`easier`],`Это упражнение легче предыдущего.`,`easy → <b>easier</b> (y → ier).`],
['c',`He drives ___ than me.`,[`more careful`,`more carefully`,`carefuller`,`most carefully`],1,`Он ездит осторожнее меня.`,`Наречие на -ly: <b>more carefully</b>.`],
['c',`I’m not as tall ___ my brother.`,[`than`,`as`,`like`,`that`],1,`Я не такой высокий, как мой брат.`,`Конструкция <b>as … as</b>.`],
['t',`It’s the ___ film I have ever seen. (bad)`,[`worst`],`Это худший фильм, который я когда-либо видел.`,`bad → worse → <b>the worst</b>.`],
['o',`This is the best day of my life.`,`Это лучший день в моей жизни.`,`the + превосходная степень + существительное.`],
['o',`Today is colder than yesterday.`,`Сегодня холоднее, чем вчера.`,`Сравнительная степень + <b>than</b>.`]
]},

{id:'quant',lv:'A2',t:'Quantifiers',ru:'some, any, much, many, a few, a little',
th:[
H(`Исчисляемые и неисчисляемые`),
P(`<b>Исчисляемые</b> можно посчитать: a book, two books. <b>Неисчисляемые</b> нельзя: water, money, time, information, advice.`),
T([['','исчисляемые','неисчисляемые'],['вопрос','How {h:many} books?','How {h:much} water?'],['отрицание','not {h:many} books','not {h:much} water'],['утверждение (много)','{h:a lot of} / lots of books','{h:a lot of} water'],['немного (достаточно)','{h:a few} books','{h:a little} water'],['мало (недостаточно)','{h:few} books','{h:little} water']]),
H(`some и any`),
L([`<b>some</b> — в утверждениях и в предложениях/просьбах: <i>I have some friends. Would you like some tea?</i>`,`<b>any</b> — в отрицаниях и вопросах: <i>I don’t have any money. Do you have any questions?</i>`]),
N(`<b>a few / a little</b> — «немного, но есть»; <b>few / little</b> — «почти нет», с отрицательным оттенком.`)
].join(''),
tx:[`There isn’t [[much]] food in the fridge. I have [[a little]] milk and [[a few]] eggs, but I don’t have [[any]] bread. [[How much]] money do we have? Not [[much]]. [[How many]] people are coming? [[A lot of]] my friends. Would you like [[some]] tea? Yes, please, with [[a little]] sugar.`,
`В холодильнике мало еды. У меня есть немного молока и несколько яиц, но нет хлеба. Сколько у нас денег? Немного. Сколько человек придёт? Много моих друзей. Хочешь чаю? Да, пожалуйста, с небольшим количеством сахара.`],
ex:[
['c',`We don’t have ___ milk.`,[`some`,`any`,`many`,`few`],1,`У нас нет молока.`,`В отрицании используется <b>any</b>.`],
['c',`How ___ people are there?`,[`much`,`many`,`a little`,`any`],1,`Сколько там людей?`,`People — исчисляемое: <b>How many</b>.`],
['c',`There is ___ water in the bottle.`,[`a few`,`many`,`a little`,`few`],2,`В бутылке немного воды.`,`Water — неисчисляемое: <b>a little</b>.`],
['c',`Would you like ___ tea?`,[`some`,`any`,`many`,`few`],0,`Хочешь чаю?`,`В предложениях и просьбах с would you like — <b>some</b>.`],
['t',`I have ___ friends here, so I am not alone. (few/a few)`,[`a few`],`У меня здесь есть несколько друзей, поэтому я не один.`,`«Немного, но есть» — <b>a few</b>.`],
['t',`How ___ money do you need? (much/many)`,[`much`],`Сколько денег тебе нужно?`,`Money — неисчисляемое: <b>much</b>.`],
['c',`She has ___ time. She is always busy.`,[`little`,`a little`,`few`,`a few`],0,`У неё почти нет времени. Она всегда занята.`,`Мало и это проблема: <b>little</b> (неисчисляемое).`],
['c',`___ of my friends live abroad.`,[`Much`,`A lot`,`Little`,`Any`],1,`Многие мои друзья живут за границей.`,`<b>A lot of</b> подходит и для исчисляемых, и для неисчисляемых.`],
['o',`There are not many chairs in the room.`,`В комнате мало стульев.`,`Исчисляемое во множественном числе: <b>not many</b>.`]
]},

{id:'modals',lv:'A2',t:'Modal verbs',ru:'can, could, must, have to, should, may, might',
th:[
H(`Особенности`),
P(`После модальных глаголов стоит <b>начальная форма без to</b>, они не меняются по лицам (без -s). Вопрос и отрицание строятся без do: <i>Can you swim? You mustn’t go.</i>`),
T([['глагол','значение','пример'],['can / can’t','умение, возможность','I {h:can} swim.'],['could','умение в прошлом, вежливая просьба','I {h:could} read at four. {h:Could} you help me?'],['must','долженствование, логический вывод','You {h:must} stop. He {h:must} be tired.'],['mustn’t','запрет','You {h:mustn’t} smoke here.'],['have to','необходимость (внешняя)','I {h:have to} get up early.'],['don’t have to','нет необходимости','You {h:don’t have to} come.'],['should','совет','You {h:should} see a doctor.'],['may / might','разрешение, вероятность','It {h:might} rain. {h:May} I come in?']]),
W(`<b>mustn’t</b> = запрещено, а <b>don’t have to</b> = не нужно (но можно). Это разные вещи!`)
].join(''),
tx:[`I [[can]] speak two languages, but I [[can’t]] speak French. When I was a child, I [[could]] play the piano. Now I [[have to]] work a lot and I [[don’t have to]] practise. You [[should]] try it! You [[mustn’t]] give up. It [[might]] be difficult at first, but you [[can]] do it. [[May]] I help you?`,
`Я говорю на двух языках, но не говорю по-французски. В детстве я умел играть на пианино. Сейчас мне приходится много работать, и мне не нужно заниматься. Тебе стоит попробовать! Нельзя сдаваться. Сначала может быть трудно, но ты сможешь. Можно я тебе помогу?`],
ex:[
['c',`You ___ smoke here. It’s forbidden.`,[`mustn’t`,`don’t have to`,`needn’t`,`should`],0,`Здесь нельзя курить. Это запрещено.`,`Запрет: <b>mustn’t</b>.`],
['c',`You ___ wear a suit. It’s a casual party.`,[`mustn’t`,`don’t have to`,`can’t`,`must`],1,`Тебе не обязательно надевать костюм. Это неформальная вечеринка.`,`Нет необходимости: <b>don’t have to</b>.`],
['c',`I have a headache. — You ___ see a doctor.`,[`should`,`can`,`might`,`would`],0,`У меня болит голова. — Тебе стоит обратиться к врачу.`,`Совет: <b>should</b>.`],
['c',`He ___ swim when he was five.`,[`can`,`could`,`must`,`may`],1,`Он умел плавать, когда ему было пять.`,`Умение в прошлом: <b>could</b>.`],
['c',`Where’s Tom? — He ___ be at home. I’m not sure.`,[`must`,`might`,`should`,`has to`],1,`Где Том? — Он может быть дома. Я не уверен.`,`Неуверенное предположение: <b>might</b>.`],
['c',`She has been working for twelve hours. She ___ be tired.`,[`must`,`mustn’t`,`might`,`can’t`],0,`Она работает уже двенадцать часов. Она, должно быть, устала.`,`Уверенный логический вывод: <b>must</b>.`],
['t',`Children ___ to wear a uniform at this school. (have)`,[`have`],`Дети в этой школе должны носить форму.`,`<b>have to</b> — внешняя необходимость (правило школы).`],
['t',`___ I open the window? (may/can)`,[`may`,`can`,`could`],`Можно мне открыть окно?`,`Просьба о разрешении: <b>May</b> / Can / Could I…?`],
['o',`You should not eat so much sugar.`,`Тебе не стоит есть так много сахара.`,`<b>should not</b> + начальная форма.`],
['o',`Can you help me with this exercise?`,`Ты можешь помочь мне с этим упражнением?`,`Модальный глагол выходит на первое место в вопросе.`]
]},

/* ============================ B1 ============================ */
{id:'presperf',lv:'B1',t:'Present Perfect',ru:'Настоящее совершённое: связь прошлого с настоящим',
th:[
H(`Образование`),
P(`<b>have / has</b> + <b>третья форма глагола</b> (V3): правильные — work<b>ed</b>, неправильные — gone, seen, eaten, been, done.`),
T([['','утверждение','отрицание','вопрос'],['I / you / we / they','I {h:have} seen','I {h:haven’t} seen','{h:Have} you seen?'],['he / she / it','she {h:has} seen','she {h:hasn’t} seen','{h:Has} she seen?']]),
H(`Когда используется`),
L([`<b>результат в настоящем</b>: <i>I’ve lost my keys</i> (их нет сейчас)`,`<b>жизненный опыт</b>: <i>Have you ever been to Japan?</i>`,`<b>время ещё не закончилось</b>: <i>this week, today</i>`,`<b>for / since</b> — состояние, которое длится до сейчас`]),
T([['for','период','for two years, for a long time'],['since','точка начала','since 2019, since Monday']]),
H(`just · already · yet · ever · never`),
P(`<i>I’ve just arrived. She has already left. I haven’t finished yet. Have you ever…? I’ve never…</i>`),
W(`Если названо <b>конкретное прошедшее время</b> (yesterday, in 2015, last year) — нужен Past Simple, а не Present Perfect.`)
].join(''),
tx:[`I [[have lived]] in this city for ten years. I [[have never been]] to London, but my sister [[has been]] there three times. She [[has just come]] back from a trip. [[Have]] you ever [[visited]] another country? I [[haven’t finished]] my report yet, but I [[have already written]] half of it.`,
`Я живу в этом городе десять лет. Я никогда не был в Лондоне, а моя сестра была там три раза. Она только что вернулась из поездки. Ты когда-нибудь бывал в другой стране? Я ещё не закончил отчёт, но половину уже написал.`],
ex:[
['c',`I ___ in this city since 2019.`,[`live`,`lived`,`have lived`,`am living`],2,`Я живу в этом городе с 2019 года.`,`Состояние длится до сейчас, указано since: <b>have lived</b>.`],
['c',`She ___ her keys. She can’t get in.`,[`lost`,`has lost`,`loses`,`was losing`],1,`Она потеряла ключи. Она не может войти.`,`Результат важен сейчас: <b>has lost</b>.`],
['c',`I ___ to London in 2015.`,[`have been`,`went`,`have gone`,`go`],1,`Я ездил в Лондон в 2015 году.`,`Названо конкретное время (in 2015) — <b>Past Simple</b>.`],
['t',`Have you ever ___ sushi? (eat)`,[`eaten`],`Ты когда-нибудь ел суши?`,`V3 от eat: <b>eaten</b>.`],
['t',`We have known each other ___ ten years. (for/since)`,[`for`],`Мы знакомы десять лет.`,`<b>for</b> + период времени.`],
['c',`He hasn’t finished his homework ___.`,[`already`,`yet`,`ever`,`since`],1,`Он ещё не закончил домашнее задание.`,`В отрицании в конце предложения — <b>yet</b>.`],
['t',`They have just ___ home. (arrive)`,[`arrived`],`Они только что приехали домой.`,`have just + V3: <b>arrived</b>.`],
['c',`How long ___ you ___ here?`,[`do / work`,`have / worked`,`did / work`,`are / working`],1,`Как давно ты здесь работаешь?`,`How long + длится до сих пор: <b>have you worked</b>.`],
['o',`I have never been to Japan.`,`Я никогда не был в Японии.`,`have + never + V3.`],
['o',`How long have you lived here?`,`Как давно ты здесь живёшь?`,`How long + have + подлежащее + V3.`]
]},

{id:'cond12',lv:'B1',t:'Conditionals 0, 1, 2',ru:'Условные предложения: нулевой, первый, второй типы',
th:[
H(`Три основных типа`),
T([['тип','if-часть','главная часть','значение'],['0','if + {h:Present Simple}','{h:Present Simple}','факты, законы природы'],['1','if + {h:Present Simple}','{h:will} + глагол','реальное условие в будущем'],['2','if + {h:Past Simple}','{h:would} + глагол','нереальное или маловероятное']]),
X([[`If you heat ice, it {h:melts}.`,`Если нагреть лёд, он тает.`],[`If it {h:rains}, we {h:will stay} at home.`,`Если пойдёт дождь, мы останемся дома.`],[`If I {h:had} a million, I {h:would travel} the world.`,`Если бы у меня был миллион, я бы путешествовал по миру.`]]),
W(`После <b>if</b> никогда не ставится <b>will</b> в первом условном: If it rains (а не «if it will rain»).`),
N(`Во втором условном с I / he / she / it принято <b>were</b>: <i>If I were you, I would go.</i>`),
P(`Если if-часть стоит первой, ставится запятая: <i>If it rains, we will stay.</i> Без запятой, если стоит второй: <i>We will stay if it rains.</i>`)
].join(''),
tx:[`If it [[rains]] tomorrow, we [[will stay]] at home. If the weather [[is]] good, we [[will go]] to the lake. What [[would]] you do if you [[won]] a lot of money? If I [[had]] a million, I [[would buy]] a house by the sea. If I [[were]] you, I [[would save]] some of it. If you [[mix]] blue and yellow, you [[get]] green.`,
`Если завтра будет дождь, мы останемся дома. Если погода будет хорошей, мы поедем на озеро. Что бы ты делал, если бы выиграл много денег? Если бы у меня был миллион, я бы купил дом у моря. На твоём месте я бы часть отложил. Если смешать синий и жёлтый, получится зелёный.`],
ex:[
['c',`If it ___ tomorrow, we will stay at home.`,[`rains`,`will rain`,`rained`,`rain`],0,`Если завтра пойдёт дождь, мы останемся дома.`,`В if-части первого условного — Present Simple: <b>rains</b>.`],
['c',`If I ___ rich, I would travel the world.`,[`am`,`were`,`will be`,`would be`],1,`Если бы я был богатым, я бы путешествовал по миру.`,`Второе условное: Past Simple, в нём принято <b>were</b>.`],
['t',`If you heat ice, it ___. (melt)`,[`melts`],`Если нагреть лёд, он тает.`,`Нулевое условное (закон природы): Present Simple + Present Simple.`],
['c',`I will call you if I ___ time.`,[`will have`,`have`,`would have`,`had`],1,`Я позвоню тебе, если у меня будет время.`,`В if-части первого условного — Present Simple: <b>have</b>.`],
['c',`What would you do if you ___ a million dollars?`,[`win`,`won`,`would win`,`will win`],1,`Что бы ты сделал, если бы выиграл миллион долларов?`,`Второе условное: if + Past Simple: <b>won</b>.`],
['t',`If she studied more, she ___ the exam. (pass)`,[`would pass`],`Если бы она больше училась, она бы сдала экзамен.`,`Второе условное: would + начальная форма.`],
['c',`If he ___ me, I’ll tell him.`,[`will see`,`sees`,`saw`,`would see`],1,`Если я его увижу, я ему скажу.`,`Реальное условие: Present Simple <b>sees</b>.`],
['o',`If it rains, we will stay at home.`,`Если пойдёт дождь, мы останемся дома.`,`If + Present Simple, will + глагол.`],
['o',`If I were you, I would not go.`,`На твоём месте я бы не пошёл.`,`Совет: If I were you, I would…`]
]},

{id:'passive',lv:'B1',t:'Passive voice',ru:'Страдательный залог',
th:[
H(`Образование`),
P(`<b>be</b> в нужном времени + <b>V3</b>. Выполнитель действия (<b>by …</b>) указывается только если он важен.`),
T([['время','активный','пассивный'],['Present Simple','They make cars.','Cars {h:are made}.'],['Past Simple','Someone broke the window.','The window {h:was broken}.'],['Future','They will finish it.','It {h:will be finished}.'],['Present Continuous','They are repairing it.','It {h:is being repaired}.'],['Present Perfect','They have sold it.','It {h:has been sold}.']]),
H(`Когда используется`),
L([`исполнитель неизвестен или неважен: <i>My bike was stolen.</i>`,`важен результат, а не исполнитель: <i>English is spoken worldwide.</i>`,`формальный стиль, новости, инструкции`]),
N(`Чтобы назвать исполнителя, используется <b>by</b>: <i>The book was written by Orwell.</i>`)
].join(''),
tx:[`English [[is spoken]] all over the world. This bridge [[was built]] in 1990. Right now my car [[is being repaired]]. The letters [[were sent]] yesterday, and the report [[will be finished]] by Friday. My phone [[was stolen]] last week, and the thief [[hasn’t been caught]] yet.`,
`На английском говорят по всему миру. Этот мост был построен в 1990 году. Сейчас мою машину ремонтируют. Письма были отправлены вчера, а отчёт будет закончен к пятнице. Мой телефон украли на прошлой неделе, и вора ещё не поймали.`],
ex:[
['c',`English ___ all over the world.`,[`speaks`,`is spoken`,`spoke`,`is speaking`],1,`На английском говорят по всему миру.`,`Страдательный залог: <b>is spoken</b>.`],
['t',`The window ___ yesterday. (break)`,[`was broken`],`Вчера окно было разбито.`,`Past Simple Passive: <b>was broken</b>.`],
['c',`This bridge ___ in 1990.`,[`built`,`was built`,`is built`,`has built`],1,`Этот мост был построен в 1990 году.`,`Past Simple Passive: <b>was built</b>.`],
['t',`The report ___ by tomorrow. (finish)`,[`will be finished`],`Отчёт будет закончен к завтрашнему дню.`,`Future Passive: <b>will be finished</b>.`],
['c',`My car ___ at the moment.`,[`repairs`,`is being repaired`,`is repaired`,`repaired`],1,`Мою машину сейчас ремонтируют.`,`Процесс в данный момент: <b>is being repaired</b>.`],
['c',`The room ___ every day.`,[`cleans`,`is cleaned`,`cleaned`,`cleaning`],1,`Комнату убирают каждый день.`,`Регулярное действие: <b>is cleaned</b>.`],
['c',`The thief ___ by the police yesterday.`,[`caught`,`was caught`,`is caught`,`has caught`],1,`Вчера вора поймала полиция.`,`Past Simple Passive: <b>was caught</b>.`],
['o',`English is spoken in many countries.`,`На английском говорят во многих странах.`,`Подлежащее + is + V3.`],
['o',`The door was locked at night.`,`Дверь была заперта на ночь.`,`was + V3.`]
]},

{id:'relcl',lv:'B1',t:'Relative clauses',ru:'Относительные придаточные: who, which, that, whose, where',
th:[
H(`Относительные слова`),
T([['слово','для чего','пример'],['{h:who}','люди','The man {h:who} lives next door…'],['{h:which}','предметы','The book {h:which} I read…'],['{h:that}','люди и предметы','The film {h:that} we saw…'],['{h:whose}','принадлежность','The girl {h:whose} brother…'],['{h:where}','место','The place {h:where} we met…']]),
H(`Опускание that / which / who`),
P(`Если относительное слово — <b>дополнение</b> (а не подлежащее), его можно опустить: <i>The film (that) we saw was boring.</i>`),
W(`Если оно <b>подлежащее</b>, опускать нельзя: <i>The man who lives here is a doctor.</i>`),
N(`<b>whose</b> всегда стоит перед существительным: the woman <b>whose car</b> was stolen. Это не «who is».`)
].join(''),
tx:[`The man [[who]] lives next door is a doctor. His wife is a teacher [[whose]] students love her. They have a house [[which]] has a big garden. The restaurant [[where]] we had dinner was great. The food [[that]] we ordered was delicious, and the waiter [[who]] served us was very kind.`,
`Мужчина, который живёт по соседству, — врач. Его жена — учительница, которую любят ученики. У них есть дом с большим садом. Ресторан, в котором мы ужинали, был отличным. Еда, которую мы заказали, была вкусной, а официант, который нас обслуживал, был очень любезен.`],
ex:[
['c',`The man ___ lives next door is a doctor.`,[`who`,`which`,`whose`,`where`],0,`Мужчина, который живёт по соседству, врач.`,`Человек + подлежащее: <b>who</b>.`],
['c',`This is the book ___ I told you about.`,[`who`,`whose`,`that`,`where`],2,`Это книга, о которой я тебе говорил.`,`Предмет: <b>that</b> или which.`],
['c',`She is the girl ___ brother plays football.`,[`who`,`whose`,`which`,`that`],1,`Она девочка, чей брат играет в футбол.`,`Принадлежность: <b>whose</b>.`],
['c',`That is the restaurant ___ we met.`,[`where`,`who`,`which`,`whose`],0,`Это ресторан, где мы познакомились.`,`Место: <b>where</b>.`],
['t',`The film ___ we watched yesterday was boring. (which/that)`,[`which`,`that`],`Фильм, который мы вчера смотрели, был скучным.`,`Предмет: <b>which</b> или <b>that</b>.`],
['c',`Is there anything ___ I can do?`,[`who`,`that`,`whose`,`where`],1,`Могу я что-нибудь сделать?`,`После anything, something, everything — <b>that</b>.`],
['c',`The woman ___ car was stolen called the police.`,[`who`,`which`,`whose`,`where`],2,`Женщина, у которой украли машину, вызвала полицию.`,`Принадлежность: <b>whose</b> car.`],
['o',`The man who lives here is my teacher.`,`Мужчина, который здесь живёт, мой учитель.`,`who стоит сразу после существительного-человека.`],
['o',`This is the house where I was born.`,`Это дом, в котором я родился.`,`where относится к месту.`]
]},

/* ============================ B2 ============================ */
{id:'reported',lv:'B2',t:'Reported speech',ru:'Косвенная речь',
th:[
H(`Сдвиг времён`),
T([['прямая речь','косвенная речь'],['Present Simple: «I {h:am} tired»','Past Simple: She said she {h:was} tired.'],['Present Continuous: «I’m working»','Past Continuous: He said he {h:was working}.'],['Past Simple: «I saw it»','Past Perfect: She said she {h:had seen} it.'],['Present Perfect: «I’ve finished»','Past Perfect: He said he {h:had finished}.'],['will: «I will call»','would: He said he {h:would} call.'],['can: «I can swim»','could: She said she {h:could} swim.']]),
H(`Другие изменения`),
L([`местоимения: «<i>I</i> like it» → she said <i>she</i> liked it`,`now → then · today → that day · tomorrow → the next day · yesterday → the day before · here → there`,`<b>say</b> (без объекта) / <b>tell</b> (с объектом): He said that… / He told me that…`]),
H(`Вопросы`),
P(`Порядок слов <b>прямой</b>, без do и вопросительной интонации: <i>She asked where I lived.</i> Для вопросов да/нет — <b>if / whether</b>: <i>He asked if I was ready.</i>`)
].join(''),
tx:[`Yesterday my boss [[told]] me that the meeting [[had been]] cancelled. He [[said]] that he [[would]] call the clients the next day. Then he [[asked]] me [[if]] I [[was]] free on Friday. I [[said]] that I [[could]] come. He also [[asked]] me where I [[had put]] the documents.`,
`Вчера начальник сказал мне, что встреча была отменена. Он сказал, что на следующий день позвонит клиентам. Потом он спросил, свободен ли я в пятницу. Я сказал, что смогу прийти. Он также спросил, куда я положил документы.`],
ex:[
['c',`She said that she ___ tired.`,[`is`,`was`,`will be`,`has been`],1,`Она сказала, что устала.`,`Present Simple → Past Simple: <b>was</b>.`],
['c',`He told me that he ___ the film the day before.`,[`saw`,`had seen`,`sees`,`has seen`],1,`Он сказал мне, что смотрел фильм накануне.`,`Past Simple → Past Perfect: <b>had seen</b>.`],
['c',`She asked me where I ___.`,[`live`,`lived`,`do live`,`did live`],1,`Она спросила меня, где я живу.`,`Косвенный вопрос: прямой порядок слов, без do + сдвиг времени: <b>lived</b>.`],
['t',`He said he ___ call me later. (will)`,[`would`],`Он сказал, что позвонит мне позже.`,`will → <b>would</b>.`],
['c',`She ___ me that the shop was closed.`,[`said`,`told`,`asked`,`spoke`],1,`Она сказала мне, что магазин закрыт.`,`Если указан адресат (me), используется <b>told</b>.`],
['c',`They asked if we ___ help.`,[`can`,`could`,`will`,`are able`],1,`Они спросили, можем ли мы помочь.`,`can → <b>could</b>.`],
['t',`She asked me ___ I wanted some tea. (if/whether)`,[`if`,`whether`],`Она спросила, хочу ли я чаю.`,`Вопрос да/нет вводится словом <b>if</b> или whether.`],
['t',`Tom said: «I am going to leave.» → Tom said he ___ going to leave.`,[`was`],`Том сказал, что собирается уйти.`,`am → <b>was</b> (сдвиг времени).`],
['o',`He said that he was busy.`,`Он сказал, что занят.`,`Said that + Past Simple.`],
['o',`She asked me where I lived.`,`Она спросила, где я живу.`,`Прямой порядок слов в косвенном вопросе.`]
]},

{id:'cond3',lv:'B2',t:'Third conditional & wishes',ru:'Третье условное и сожаления: if + Past Perfect, wish',
th:[
H(`Третье условное`),
P(`Нереальная ситуация в <b>прошлом</b> — уже ничего нельзя изменить.`),
T([['if-часть','главная часть'],['if + {h:had + V3}','{h:would have + V3}']]),
X([[`If I {h:had studied} harder, I {h:would have passed} the exam.`,`Если бы я учился усерднее, я бы сдал экзамен (но я не учился и не сдал).`],[`She {h:would have come} if she {h:had known} about the party.`,`Она бы пришла, если бы знала о вечеринке.`]]),
H(`Смешанное условное`),
P(`Прошлая причина → настоящий результат: <i>If I had taken the job, I <b>would live</b> in London now.</i>`),
H(`wish / if only`),
T([['о чём','конструкция','пример'],['настоящее','wish + {h:Past Simple}','I {h:wish} I {h:had} more time.'],['прошлое','wish + {h:Past Perfect}','I {h:wish} I {h:hadn’t said} that.'],['раздражение','wish + would','I wish he {h:would stop} talking.']]),
N(`<b>If only</b> звучит эмоциональнее, чем wish: <i>If only I had known!</i>`)
].join(''),
tx:[`If I [[had left]] earlier, I [[would have caught]] the train. But I [[didn’t]], so I was late. I [[wish]] I [[had set]] my alarm clock! If I [[had been]] on time, my boss [[wouldn’t have been]] angry. Now I wish I [[had]] more free time. If only the days [[were]] longer!`,
`Если бы я вышел раньше, я бы успел на поезд. Но я не вышел, поэтому опоздал. Как жаль, что я не поставил будильник! Если бы я пришёл вовремя, начальник бы не рассердился. Теперь я жалею, что у меня мало свободного времени. Если бы только дни были длиннее!`],
ex:[
['c',`If I ___ harder, I would have passed the exam.`,[`studied`,`had studied`,`would study`,`have studied`],1,`Если бы я учился усерднее, я бы сдал экзамен.`,`Третье условное: if + <b>had studied</b>.`],
['c',`She would have come if she ___ about the party.`,[`knew`,`had known`,`would know`,`has known`],1,`Она бы пришла, если бы знала о вечеринке.`,`if + Past Perfect: <b>had known</b>.`],
['t',`If we had left earlier, we ___ the train. (not miss)`,[`would not have missed`,`wouldn’t have missed`],`Если бы мы вышли раньше, мы бы не опоздали на поезд.`,`would (not) have + V3: <b>would not have missed</b>.`],
['c',`I wish I ___ more free time now.`,[`have`,`had`,`would have`,`have had`],1,`Жаль, что у меня сейчас мало свободного времени.`,`Сожаление о настоящем: wish + Past Simple: <b>had</b>.`],
['c',`I wish I ___ that. It was a mistake.`,[`didn’t say`,`hadn’t said`,`wouldn’t say`,`don’t say`],1,`Жаль, что я это сказал. Это была ошибка.`,`Сожаление о прошлом: wish + Past Perfect: <b>hadn’t said</b>.`],
['t',`If he ___ me, I would have helped him. (ask)`,[`had asked`],`Если бы он меня попросил, я бы ему помог.`,`if + Past Perfect: <b>had asked</b>.`],
['c',`If I had taken the job, I ___ in London now.`,[`would have lived`,`would live`,`will live`,`lived`],1,`Если бы я принял работу, я бы сейчас жил в Лондоне.`,`Смешанное условное (прошлое → настоящее): <b>would live</b>.`],
['o',`If I had known, I would have told you.`,`Если бы я знал, я бы тебе сказал.`,`if + had + V3, would have + V3.`],
['o',`I wish I had more time.`,`Хотел бы я иметь больше времени.`,`wish + Past Simple (сожаление о настоящем).`]
]}
];
})();