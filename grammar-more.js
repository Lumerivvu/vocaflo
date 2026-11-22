/* VocabFlow — Grammar: even more topics (German). Loaded after grammar-extra.js and before grammar.js.
   Adds 8 topics: Plural, W-Fragen (A1) · Personalpronomen, Wo/Woher/Wohin (A2) · Genitiv-Präpositionen, Partizipien als Adjektive (B1) · Funktionsverbgefüge, Partizipialattribut (B2).
   Same data format as grammar-data.js. */
(()=>{
const G=window.GRAM;if(!G||G.some(g=>g.id==='plural'))return;
const H=s=>`<h3>${s}</h3>`,P=s=>`<p>${s}</p>`,
T=r=>`<div class="gs"><table class="gt">${r.map((a,i)=>'<tr>'+a.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')+'</tr>').join('')}</table></div>`,
X=a=>a.map(([d,r])=>`<div class="gx">${d}${r?`<small>${r}</small>`:''}</div>`).join(''),
N=s=>`<div class="gn">${s}</div>`,W=s=>`<div class="gn gw">${s}</div>`,
L=a=>'<ul>'+a.map(s=>`<li>${s}</li>`).join('')+'</ul>';
const at=(ref,dir,list)=>{const i=G.findIndex(g=>g.id===ref);G.splice(i<0?G.length:i+(dir==='after'?1:0),0,...list)};

/* ======================= A1 ======================= */
const A1=[
{id:'plural',lv:'A1',t:'Plural der Nomen',ru:'Множественное число существительных',
th:[
H('Пять типов множественного числа'),
P('Единого правила нет — множественное число запоминают вместе со словом: <b>der Tisch, die Tische</b>. Артикль во множественном числе всегда <b>die</b>.'),
T([['Окончание','Единственное','Множественное'],['<b>-e</b> (часто + умлаут)','der Tisch · der Stuhl · die Stadt','die Tisch{h:e} · die St{h:ü}hl{h:e} · die St{h:ä}dt{h:e}'],['<b>-(e)n</b>','die Frau · die Schwester · der Name','die Frau{h:en} · die Schwester{h:n} · die Name{h:n}'],['<b>-er</b> (+ умлаут)','das Kind · das Buch · das Haus','die Kind{h:er} · die B{h:ü}ch{h:er} · die H{h:ä}us{h:er}'],['<b>-s</b>','das Auto · das Hotel · das Handy','die Auto{h:s} · die Hotel{h:s} · die Handy{h:s}'],['<b>без окончания</b> (± умлаут)','der Lehrer · das Mädchen · der Bruder · der Apfel','die Lehrer · die Mädchen · die Br{h:ü}der · die {h:Ä}pfel']]),
H('Что помогает угадать'),
L(['<b>Женский род</b> — чаще всего <b>-(e)n</b>: die Frau → die Frauen, die Zeitung → die Zeitungen.','Профессии на <b>-in</b> получают <b>-innen</b>: die Lehrerin → die Lehrerin{h:nen}.','<b>Средний род</b> — часто <b>-er</b> с умлаутом: das Kind → die Kinder.','Заимствованные слова и сокращения — <b>-s</b>: das Auto, das Büro, das Handy.','Мужской род на <b>-er, -el, -en</b> — обычно без окончания: der Lehrer → die Lehrer.']),
H('Dativ Plural'),
P('В Dativ во множественном числе к слову добавляется <b>-n</b> (если оно ещё не заканчивается на -n или -s): <b>mit den Kindern</b>, <b>bei den Eltern</b>; но: mit den Frauen, mit den Autos.'),
W('Учите существительное сразу с формой множественного числа: <b>der Tisch — die Tische</b>.')
].join(''),
tx:[`Das ist meine Familie. Ich habe zwei [[Brüder]] und zwei [[Schwestern]]. Meine [[Eltern]] wohnen in einem Haus mit vier [[Zimmern]]. Im Garten stehen drei [[Bäume]] und viele [[Blumen]]. Die [[Kinder]] aus der Nachbarschaft spielen gern mit den [[Hunden]] und [[Katzen]]. Wir haben auch zwei [[Autos]].`,
`Это моя семья. У меня два брата и две сестры. Мои родители живут в доме с четырьмя комнатами. В саду стоят три дерева и много цветов. Дети из соседних домов любят играть с собаками и кошками. У нас также две машины.`],
ex:[
['c','Das ist ein Kind. Dort sind zwei ___.',['Kinde','Kinder','Kindern','Kinds'],1,'Вот ребёнок. Там двое детей.','Das Kind → die <b>Kinder</b> (-er).'],
['c','Ich habe zwei ___.',['Schwesters','Schwester','Schwestern','Schwesteren'],2,'У меня две сестры.','Женский род: die Schwester → die Schwester<b>n</b>.'],
['t','Im Garten stehen drei ___. (der Baum)',['Bäume'],'В саду стоят три дерева.','der Baum → die B<b>äu</b>m<b>e</b> (-e + умлаут).'],
['t','Ich lese gern ___. (das Buch)',['Bücher'],'Я люблю читать книги.','das Buch → die B<b>ü</b>ch<b>er</b>.'],
['c','Wir haben zwei ___.',['Autos','Auten','Autoe','Auter'],0,'У нас две машины.','Слова иностранного происхождения — <b>-s</b>: das Auto → die Autos.'],
['t','Ich spiele mit den ___. (das Kind)',['Kindern'],'Я играю с детьми.','После <b>mit</b> — Dativ; во мн. ч. добавляется <b>-n</b>: Kinder<b>n</b>.'],
['c','Die ___ arbeiten in der Schule.',['Lehrerins','Lehrerinen','Lehrerinnen','Lehrerine'],2,'Учительницы работают в школе.','Окончание <b>-in</b> → мн. ч. <b>-innen</b>.'],
['c','Ich esse zwei ___.',['Apfel','Äpfel','Apfeln','Äpfeln'],1,'Я ем два яблока.','der Apfel → die <b>Äpfel</b> (без окончания, но с умлаутом).'],
['o','Die Kinder spielen im Garten.','Дети играют в саду.','Подлежащее <b>die Kinder</b> — множественное число.',['Im Garten spielen die Kinder.']]
]},
{id:'wfrage',lv:'A1',t:'W-Fragen',ru:'Вопросы: W-Fragen и Ja/Nein-Fragen',
th:[
H('Два типа вопросов'),
P('<b>Ja/Nein-Frage</b> — глагол на <b>первом</b> месте. <b>W-Frage</b> — вопросительное слово на первом месте, глагол на <b>втором</b>.'),
X([['{h:Kommst} du heute?','Ты придёшь сегодня?'],['{h:Wann} {h:kommst} du?','Когда ты придёшь?']]),
H('Вопросительные слова'),
T([['Слово','Значение','Пример'],['<b>Wer?</b>','кто','{h:Wer} ist das?'],['<b>Was?</b>','что','{h:Was} machst du?'],['<b>Wo?</b>','где','{h:Wo} wohnst du?'],['<b>Woher?</b>','откуда','{h:Woher} kommst du?'],['<b>Wohin?</b>','куда','{h:Wohin} gehst du?'],['<b>Wann?</b>','когда','{h:Wann} kommst du?'],['<b>Warum?</b>','почему','{h:Warum} lernst du Deutsch?'],['<b>Wie?</b>','как','{h:Wie} geht es dir?'],['<b>Wie viel / Wie viele?</b>','сколько (неисчисляемое / исчисляемое)','{h:Wie viel} kostet das? · {h:Wie viele} Kinder hast du?']]),
H('Welch- и падежи'),
P('<b>Welcher / welche / welches</b> («какой») склоняется как определённый артикль: <b>Welchen</b> Film siehst du? (Akkusativ, м. р.). Кто: <b>wer</b> — Nominativ, <b>wen</b> — Akkusativ, <b>wem</b> — Dativ: {h:Wen} siehst du? · {h:Wem} hilfst du?'),
N('На отрицательный вопрос, когда ответ «да», говорят <b>Doch</b>: Hast du keine Zeit? — <b>Doch</b>, ich habe Zeit.')
].join(''),
tx:[`[[Wer]] bist du, und [[woher]] kommst du? [[Wo]] wohnst du jetzt, und [[was]] machst du beruflich? [[Wie]] lange lernst du schon Deutsch? [[Warum]] lernst du die Sprache? [[Wann]] hast du Zeit für einen Kaffee? [[Wohin]] möchtest du gehen? [[Welches]] Café magst du? [[Wie viele]] Freunde hast du hier?`,
`Кто ты и откуда ты родом? Где ты сейчас живёшь и кем работаешь? Как давно ты учишь немецкий? Почему ты учишь этот язык? Когда у тебя есть время на кофе? Куда ты хочешь пойти? Какое кафе тебе нравится? Сколько у тебя здесь друзей?`],
ex:[
['c','___ wohnst du? — In Köln.',['Wo','Wohin','Woher','Wann'],0,'Где ты живёшь? — В Кёльне.','Место, где находишься → <b>Wo</b>.'],
['c','___ kommst du? — Aus Polen.',['Wo','Wohin','Woher','Wer'],2,'Откуда ты? — Из Польши.','Происхождение → <b>Woher</b> (aus).'],
['c','___ gehst du? — Ins Kino.',['Wo','Wohin','Woher','Was'],1,'Куда ты идёшь? — В кино.','Направление → <b>Wohin</b>.'],
['c','___ bist du müde? — Ich habe schlecht geschlafen.',['Wann','Wie','Warum','Wer'],2,'Почему ты устал? — Я плохо спал.','Причина → <b>Warum</b>.'],
['c','___ Film siehst du heute?',['Welcher','Welchen','Welche','Welchem'],1,'Какой фильм ты смотришь сегодня?','Film — м. р., Akkusativ → <b>welchen</b>.'],
['c','___ Kinder hast du?',['Wie viel','Wie viele','Wieviel','Wie vielen'],1,'Сколько у тебя детей?','Исчисляемое во мн. ч. → <b>Wie viele</b>.'],
['c','___ hilfst du? — Meiner Mutter.',['Wer','Wen','Wem','Was'],2,'Кому ты помогаешь? — Моей маме.','helfen + Dativ → <b>Wem</b>.'],
['o','Wann kommst du nach Hause?','Когда ты придёшь домой?','W-Frage: вопросительное слово, затем глагол на 2-м месте.'],
['o','Kommst du heute mit?','Ты пойдёшь с нами сегодня?','Ja/Nein-Frage: глагол на 1-м месте; приставка <b>mit</b> уходит в конец.']
]}
];

/* ======================= A2 ======================= */
const A2=[
{id:'pers',lv:'A2',t:'Personalpronomen',ru:'Личные местоимения в трёх падежах и порядок дополнений',
th:[
H('Три падежа личных местоимений'),
T([['','Nominativ','Akkusativ','Dativ'],['я','ich','{h:mich}','{h:mir}'],['ты','du','{h:dich}','{h:dir}'],['он','er','{h:ihn}','{h:ihm}'],['она','sie','sie','{h:ihr}'],['оно','es','es','{h:ihm}'],['мы','wir','{h:uns}','{h:uns}'],['вы','ihr','{h:euch}','{h:euch}'],['они','sie','sie','{h:ihnen}'],['Вы (вежл.)','Sie','Sie','{h:Ihnen}']]),
P('Местоимение берёт падеж, которого требует глагол: <b>sehen, kennen, lieben</b> + Akkusativ → Ich sehe {h:ihn}; <b>helfen, danken, gefallen, gehören</b> + Dativ → Ich helfe {h:ihm}.'),
H('Порядок дополнений'),
T([['Случай','Порядок','Пример'],['два существительных','Dativ → Akkusativ','Ich gebe {h:dem Mann} {h:das Buch}.'],['местоимение + существительное','местоимение → существительное','Ich gebe {h:ihm} das Buch. · Ich gebe {h:es} dem Mann.'],['два местоимения','Akkusativ → Dativ','Ich gebe {h:es} {h:ihm}.']]),
W('Правило «короткое слово — вперёд»: местоимение всегда стоит перед существительным. Если оба дополнения — местоимения, сначала Akkusativ, потом Dativ.')
].join(''),
tx:[`Das ist mein Freund Tom. Ich kenne [[ihn]] seit zehn Jahren. Er hilft [[mir]] oft, und ich helfe [[ihm]] auch. Gestern habe ich [[ihn]] angerufen. Meine Mutter hat [[mir]] ein Buch geschenkt, und ich habe [[es]] [[ihm]] gegeben. Es gefällt [[ihm]] sehr. Heute besuchen wir meine Mutter. Tom schenkt [[ihr]] Blumen, und ich koche für [[sie]].`,
`Это мой друг Том. Я знаю его десять лет. Он часто помогает мне, и я тоже помогаю ему. Вчера я ему позвонил. Моя мама подарила мне книгу, и я отдал её ему. Она ему очень нравится. Сегодня мы навещаем мою маму. Том дарит ей цветы, а я готовлю для неё.`],
ex:[
['c','Kennst du Peter? — Ja, ich kenne ___ gut.',['er','ihn','ihm','sein'],1,'Ты знаешь Петера? — Да, я хорошо его знаю.','kennen + Akkusativ: er → <b>ihn</b>.'],
['c','Meine Mutter braucht Hilfe. Ich helfe ___.',['sie','ihr','ihnen','es'],1,'Моей маме нужна помощь. Я ей помогаю.','helfen + Dativ: sie (ж. р.) → <b>ihr</b>.'],
['t','Wir besuchen unsere Freunde und geben ___ ein Geschenk. (они, Dativ)',['ihnen'],'Мы навещаем друзей и даём им подарок.','geben + Dativ: sie (мн. ч.) → <b>ihnen</b>.'],
['t','Gefällt dir das Buch? — Ja, es gefällt ___ sehr. (ich)',['mir'],'Тебе нравится книга? — Да, она мне очень нравится.','gefallen + Dativ: ich → <b>mir</b>.'],
['c','Das Buch? Ich gebe ___ dem Lehrer.',['es','ihm','ihn','ihr'],0,'Книга? Я отдам её учителю.','Местоимение стоит перед существительным: Akkusativ <b>es</b> → dem Lehrer.'],
['c','Wie geht es ___?',['Sie','Ihnen','Ihr','Dich'],1,'Как у Вас дела?','Wie geht es + Dativ: вежливая форма — <b>Ihnen</b>.'],
['c','Das Buch gehört ___. (мне)',['ich','mich','mir','meine'],2,'Эта книга принадлежит мне.','gehören + Dativ: <b>mir</b>.'],
['o','Ich gebe es ihm.','Я даю это ему.','Два местоимения: сначала Akkusativ (es), потом Dativ (ihm).'],
['o','Ich schenke meiner Mutter Blumen.','Я дарю маме цветы.','Dativ (meiner Mutter) перед Akkusativ (Blumen).',['Meiner Mutter schenke ich Blumen.']]
]},
{id:'wowohin',lv:'A2',t:'Wo? Woher? Wohin?',ru:'Предлоги места: in, aus, nach, zu, bei, von',
th:[
H('Три вопроса — три предлога'),
T([['Объект','Wo? (где)','Woher? (откуда)','Wohin? (куда)'],['город, страна без артикля','{h:in} Berlin · {h:in} Polen','{h:aus} Berlin · {h:aus} Polen','{h:nach} Berlin · {h:nach} Polen'],['страна с артиклем (die Schweiz, die Türkei, die USA)','{h:in der} Schweiz','{h:aus der} Schweiz','{h:in die} Schweiz'],['человек','{h:bei} Anna · {h:beim} Arzt','{h:von} Anna · {h:vom} Arzt','{h:zu} Anna · {h:zum} Arzt'],['место, здание','{h:in der} Schule · {h:im} Kino','{h:aus der} Schule · {h:aus dem} Kino','{h:in die} Schule · {h:ins} Kino'],['дом','{h:zu} Hause','—','{h:nach} Hause']]),
L(['<b>aus, bei, von, zu, nach</b> всегда требуют <b>Dativ</b>.','<b>in</b> на вопрос «где?» — Dativ, на вопрос «куда?» — Akkusativ (как в Wechselpräpositionen).','<b>nach</b> — только с городами и странами без артикля (и <b>nach Hause</b>). К людям и в учреждения, где вас обслуживают, — <b>zu</b>.']),
W('Не путайте: <b>zu Hause</b> — «дома» (где?), <b>nach Hause</b> — «домой» (куда?).')
].join(''),
tx:[`Ich komme [[aus]] Polen und wohne jetzt [[in]] Berlin. Im Sommer fahre ich [[nach]] Hause zu meinen Eltern. Meine Freundin kommt [[aus der]] Schweiz. Wir fliegen nächste Woche [[in die]] Türkei. Heute bin ich [[beim]] Arzt, danach gehe ich [[zu]] meiner Oma. Am Abend bin ich wieder [[zu]] Hause.`,
`Я родом из Польши, а сейчас живу в Берлине. Летом я еду домой к родителям. Моя подруга из Швейцарии. На следующей неделе мы летим в Турцию. Сегодня я у врача, потом пойду к бабушке. Вечером я снова буду дома.`],
ex:[
['c','Ich fahre morgen ___ Berlin.',['in','zu','nach','aus'],2,'Завтра я еду в Берлин.','Город без артикля, направление → <b>nach</b>.'],
['c','Meine Freundin kommt ___ der Schweiz.',['von','aus','nach','bei'],1,'Моя подруга из Швейцарии.','Страна, откуда → <b>aus der</b> Schweiz.'],
['c','Ich gehe heute ___ Arzt.',['bei','zum','nach','beim'],1,'Сегодня я иду к врачу.','К человеку (куда?) → <b>zu</b> + dem = <b>zum</b>.'],
['c','Ich war gestern ___ Arzt.',['zum','beim','nach','aus'],1,'Вчера я был у врача.','У человека (где?) → <b>bei</b> + dem = <b>beim</b>.'],
['c','Wir fliegen im Sommer ___ Türkei.',['nach','in der','in die','zu der'],2,'Летом мы летим в Турцию.','Страна с артиклем, направление → <b>in die</b> Türkei.'],
['t','Nach der Arbeit gehe ich ___ Hause.',['nach'],'После работы я иду домой.','«Домой» — <b>nach Hause</b>.'],
['t','Ich komme gerade ___ meiner Oma.',['von'],'Я только что от бабушки.','От человека → <b>von</b> + Dativ.'],
['o','Ich fahre zu meiner Oma.','Я еду к бабушке.','К человеку → <b>zu</b> + Dativ.',['Zu meiner Oma fahre ich.']],
['o','Wir sind heute zu Hause.','Сегодня мы дома.','«Дома» — <b>zu Hause</b>.',['Heute sind wir zu Hause.']]
]}
];

/* ======================= B1 ======================= */
const B1=[
{id:'genprep',lv:'B1',t:'Präpositionen mit Genitiv',ru:'Предлоги с родительным падежом: wegen, trotz, während…',
th:[
H('Предлоги с Genitiv'),
T([['Предлог','Значение','Пример'],['<b>wegen</b>','из-за','{h:Wegen des} Regens bleiben wir hier.'],['<b>trotz</b>','несмотря на','{h:Trotz der} Kälte gehe ich laufen.'],['<b>während</b>','во время','{h:Während des} Essens telefoniert er nicht.'],['<b>statt / anstatt</b>','вместо','{h:Statt des} Kaffees trinke ich Tee.'],['<b>innerhalb / außerhalb</b>','в пределах / вне','Das Café ist {h:außerhalb der} Stadt.'],['<b>aufgrund</b>','из-за, на основании','{h:Aufgrund seiner} Krankheit fehlt er.']]),
H('Артикли в Genitiv'),
T([['','м. р.','ж. р.','ср. р.','мн. ч.'],['артикль','{m:des}','{f:der}','{n:des}','{p:der}'],['существительное','Mann{h:es} / Lehrer{h:s}','Frau','Kind{h:es} / Wetter{h:s}','Kinder']]),
P('У существительных м. р. и ср. р. добавляется <b>-(e)s</b>: односложные слова часто получают <b>-es</b> (des Mannes, des Kindes), многосложные — <b>-s</b> (des Lehrers, des Wetters).'),
N('В разговорной речи после wegen, trotz, während часто используют Dativ (<b>wegen dem Wetter</b>), но в письменной речи и на экзаменах нужен <b>Genitiv</b>.')
].join(''),
tx:[`[[Wegen des]] schlechten Wetters bleiben wir heute zu Hause. [[Trotz der]] Kälte war ich kurz draußen. [[Während des]] Spaziergangs habe ich meine Nachbarin getroffen. [[Statt des]] Kaffees trinke ich jetzt Tee. [[Aufgrund seiner]] Erkältung ist mein Bruder nicht gekommen. Das Restaurant liegt [[außerhalb der]] Stadt.`,
`Из-за плохой погоды мы сегодня остаёмся дома. Несмотря на холод, я недолго был на улице. Во время прогулки я встретил соседку. Вместо кофе я теперь пью чай. Из-за простуды мой брат не пришёл. Ресторан находится за городом.`],
ex:[
['c','Wegen ___ Wetters bleiben wir zu Hause.',['das','dem','des','der'],2,'Из-за погоды мы остаёмся дома.','<b>wegen</b> + Genitiv; Wetter — ср. р. → <b>des</b> Wetters.'],
['c','Trotz ___ Regens gehen wir spazieren.',['des','dem','den','der'],0,'Несмотря на дождь, мы идём гулять.','<b>trotz</b> + Genitiv; Regen — м. р. → <b>des</b> Regens.'],
['t','Während ___ Urlaubs habe ich viel gelesen. (der Urlaub)',['des'],'Во время отпуска я много читал.','<b>während</b> + Genitiv, м. р.: <b>des</b> Urlaubs.'],
['c','Statt ___ Kaffees trinke ich Tee.',['des','dem','den','der'],0,'Вместо кофе я пью чай.','<b>statt</b> + Genitiv; Kaffee — м. р.: <b>des</b> Kaffees.'],
['c','Wegen ___ Krankheit ist er nicht gekommen.',['die','der','dem','den'],1,'Из-за болезни он не пришёл.','Krankheit — ж. р., Genitiv → <b>der</b>.'],
['t','Außerhalb ___ Stadt gibt es einen See. (die Stadt)',['der'],'За городом есть озеро.','<b>außerhalb</b> + Genitiv; ж. р.: <b>der</b> Stadt.'],
['c','Wegen ___ Kinder ist es hier laut.',['die','den','der','dem'],2,'Из-за детей здесь шумно.','Множественное число, Genitiv → <b>der</b> Kinder.'],
['o','Wegen des Wetters bleiben wir zu Hause.','Из-за погоды мы остаёмся дома.','<b>wegen des</b> Wetters.',['Wir bleiben wegen des Wetters zu Hause.']],
['o','Trotz der Kälte gehen wir spazieren.','Несмотря на холод, мы идём гулять.','<b>trotz der</b> Kälte (ж. р., Genitiv).',['Wir gehen trotz der Kälte spazieren.']]
]},
{id:'partadj',lv:'B1',t:'Partizip I und II als Adjektiv',ru:'Причастия как определения: schlafend, gekauft',
th:[
H('Два причастия в роли прилагательного'),
T([['','Partizip I','Partizip II'],['образование','инфинитив + <b>d</b>: schlafen → schlafen{h:d}','ge-…-t / ge-…-en: kaufen → {h:ge}kauf{h:t}; brechen → {h:ge}broch{h:en}'],['значение','действие <b>идёт сейчас</b> (активное)','действие <b>завершено</b> (чаще пассивное)'],['пример','das schlafende Kind — спящий ребёнок','das gekaufte Buch — купленная книга'],['перевод','-щий, -ящий','-нный, -ый, -шийся']]),
H('Окончания'),
P('Причастие перед существительным склоняется как обычное прилагательное: der schlafend<b>e</b> Mann, ein gebrochen<b>er</b> Arm, die spielend<b>en</b> Kinder.'),
L(['Partizip I — всегда <b>активное</b> значение: der <b>lachende</b> Junge (мальчик, который смеётся).','Partizip II переходных глаголов — <b>пассивное</b>: das <b>geöffnete</b> Fenster (кто-то его открыл).','Partizip II глаголов с <b>sein</b> — <b>завершённое действие</b>: der <b>gestiegene</b> Preis (цена, которая выросла).']),
N('Многие причастия стали обычными прилагательными: <b>interessant, spannend, aufregend, bekannt, verheiratet, geöffnet</b>.')
].join(''),
tx:[`Im Park sitzt ein [[lachendes]] Mädchen neben einem [[schlafenden]] Hund. Die [[spielenden]] Kinder sind laut. Mein Bruder hat einen [[gebrochenen]] Arm und liest ein [[geliehenes]] Buch. Durch das [[geöffnete]] Fenster kommt frische Luft. Die [[gestiegenen]] Preise machen vielen Menschen Sorgen.`,
`В парке сидит смеющаяся девочка рядом со спящей собакой. Играющие дети шумят. У моего брата сломана рука, и он читает взятую на время книгу. Через открытое окно поступает свежий воздух. Выросшие цены беспокоят многих людей.`],
ex:[
['c','Das ___ Kind liegt im Bett. (schlafen)',['schlafende','geschlafene','schlafte','schlafen'],0,'Спящий ребёнок лежит в кровати.','Действие идёт сейчас → Partizip I: schlafen<b>d</b> + окончание <b>-e</b>.'],
['c','Ich lese das ___ Buch. (kaufen)',['kaufende','gekaufte','kaufte','gekauften'],1,'Я читаю купленную книгу.','Книгу купили (пассив, завершено) → Partizip II: <b>gekaufte</b>.'],
['t','Die ___ Kinder sind laut. (spielen → Partizip I)',['spielenden'],'Играющие дети шумят.','spielen → spielen<b>d</b> + <b>-en</b> (мн. ч. после die).'],
['t','Er hat einen ___ Arm. (brechen → Partizip II)',['gebrochenen'],'У него сломана рука.','brechen → <b>gebrochen</b> + <b>-en</b> (Akkusativ, м. р., после einen).'],
['c','Das ist ein ___ Problem. (lösen: нерешённое)',['ungelöstes','ungelösendes','ungelöste','ungelöster'],0,'Это нерешённая проблема.','Partizip II с <b>un-</b> + <b>-es</b> (ср. р., Nominativ, после ein).'],
['c','Что значит <b>die kochende Suppe</b>?',['кипящий суп','сваренный суп','суп для варки','суп, который сварят'],0,'','Partizip I = действие идёт прямо сейчас: «кипящий».'],
['c','Что значит <b>der gelesene Text</b>?',['читающий текст','прочитанный текст','текст для чтения','текст, который читают'],1,'','Partizip II = завершённое / пассивное: «прочитанный».'],
['o','Das schlafende Baby ist süß.','Спящий малыш милый.','Partizip I (schlafend) + <b>-e</b> перед существительным ср. р.'],
['o','Das gekochte Ei ist heiß.','Варёное яйцо горячее.','Partizip II (gekocht) + <b>-e</b> после артикля das.']
]}
];

/* ======================= B2 ======================= */
const B2=[
{id:'fvg',lv:'B2',t:'Funktionsverbgefüge',ru:'Устойчивые сочетания «существительное + глагол»',
th:[
H('Что это такое'),
P('Устойчивые сочетания <b>существительное + глагол</b>. Смысл несёт существительное, а глагол почти потерял своё значение и показывает только время, лицо и число. Такие обороты характерны для официальной и письменной речи.'),
T([['Оборот','Простой глагол','Пример'],['<b>eine Entscheidung treffen</b>','entscheiden','Wir {h:treffen} morgen eine Entscheidung.'],['<b>Hilfe leisten</b>','helfen','Die Ärzte {h:leisten} schnell Hilfe.'],['<b>in Betracht ziehen</b>','berücksichtigen','Wir {h:ziehen} alle Möglichkeiten {h:in Betracht}.'],['<b>zur Verfügung stehen / stellen</b>','verfügbar sein / geben','Das Auto {h:steht} Ihnen {h:zur Verfügung}.'],['<b>Rücksicht nehmen auf</b>','berücksichtigen','Man muss {h:Rücksicht nehmen} auf andere.'],['<b>in Kraft treten</b>','gelten (ab)','Das Gesetz {h:tritt} morgen {h:in Kraft}.'],['<b>zur Sprache bringen</b>','ansprechen','Er {h:bringt} das Problem {h:zur Sprache}.'],['<b>Kritik üben an</b>','kritisieren','Sie {h:übt} {h:Kritik} an der Regierung.'],['<b>einen Beitrag leisten zu</b>','beitragen','Jeder kann einen {h:Beitrag leisten}.']]),
L(['Артикль и предлог <b>фиксированы</b>: zur Verfügung (не «in Verfügung»), in Kraft (без артикля).','Глагол изменяется как обычно: Er hat eine Entscheidung <b>getroffen</b>.','Часто есть простой глагол-синоним, но Funktionsverbgefüge звучит более официально.'])
].join(''),
tx:[`Der Stadtrat hat gestern eine wichtige Entscheidung [[getroffen]]. Das neue Gesetz [[tritt]] im Januar [[in Kraft]]. Die Stadt [[stellt]] den Bürgern kostenlose Parkplätze [[zur Verfügung]]. Viele Einwohner haben Kritik [[geübt]], weil man ihre Wünsche nicht [[in Betracht gezogen]] hat. In der Sitzung wurde das Problem endlich [[zur Sprache gebracht]]. Alle wollen einen Beitrag [[leisten]].`,
`Городской совет вчера принял важное решение. Новый закон вступает в силу в январе. Город предоставляет жителям бесплатные парковки. Многие жители выразили критику, потому что их пожелания не были учтены. На заседании проблему наконец подняли. Все хотят внести свой вклад.`],
ex:[
['c','Der Chef hat eine Entscheidung ___.',['gemacht','getroffen','gegeben','genommen'],1,'Начальник принял решение.','<b>eine Entscheidung treffen</b>.'],
['c','Man sollte mehr Rücksicht auf andere ___.',['machen','nehmen','geben','haben'],1,'Нужно больше считаться с другими.','<b>Rücksicht nehmen auf</b>.'],
['c','Das neue Gesetz ___ am 1. Januar in Kraft.',['tritt','geht','kommt','steht'],0,'Новый закон вступает в силу 1 января.','<b>in Kraft treten</b>.'],
['c','Wir stellen Ihnen das Auto zur ___.',['Verfügung','Hilfe','Hand','Nutzen'],0,'Мы предоставляем Вам автомобиль.','<b>zur Verfügung stellen</b>.'],
['t','Die Ärzte haben den Opfern schnell Hilfe ___. (leisten → Partizip II)',['geleistet'],'Врачи быстро оказали помощь пострадавшим.','<b>Hilfe leisten</b> → Partizip II: geleistet.'],
['c','Die Firma zieht diese Möglichkeit in ___.',['Betracht','Sicht','Frage','Zweifel'],0,'Фирма рассматривает эту возможность.','<b>in Betracht ziehen</b>.'],
['c','Sie übt ___ an der Regierung.',['Kritik','Fehler','Sorge','Wunsch'],0,'Она критикует правительство.','<b>Kritik üben an</b> + Dativ.'],
['o','Er trifft heute eine Entscheidung.','Он сегодня принимает решение.','<b>eine Entscheidung treffen</b>.',['Heute trifft er eine Entscheidung.']],
['o','Das Gesetz tritt morgen in Kraft.','Закон вступает в силу завтра.','<b>in Kraft treten</b>; глагол на 2-м месте.',['Morgen tritt das Gesetz in Kraft.']]
]},
{id:'partattr',lv:'B2',t:'Erweitertes Partizipialattribut',ru:'Распространённое причастное определение',
th:[
H('Идея'),
P('Вместо относительного придаточного перед существительным можно поставить <b>причастие вместе с зависимыми словами</b>. Получается длинное определение — типично для письменной речи.'),
X([['Der Autor, der seit Jahren in Berlin <b>lebt</b>, …','→ Der {h:seit Jahren in Berlin lebende} Autor …'],['Das Produkt, das von der Firma <b>entwickelt wurde</b>, …','→ Das {h:von der Firma entwickelte} Produkt …']]),
H('Как построить'),
T([['Шаг','Что делаем','Пример'],['1','Ставим артикль','<b>der</b> … Autor'],['2','Между артиклем и существительным ставим всё придаточное, кроме глагола','der {h:seit Jahren in Berlin} … Autor'],['3','Глагол становится причастием с <b>окончанием прилагательного</b> перед существительным','der seit Jahren in Berlin {h:lebende} Autor']]),
L(['<b>Partizip I</b> — активное, одновременное действие: der in Berlin <b>lebende</b> Autor.','<b>Partizip II</b> — пассивное или завершённое: das von der Firma <b>entwickelte</b> Produkt.','Если определение получается слишком длинным, лучше использовать обычное придаточное.']),
N('Такие конструкции важно <b>понимать</b> при чтении официальных текстов; в разговоре их почти не употребляют.')
].join(''),
tx:[`Das [[von der Firma entwickelte]] Produkt ist sehr erfolgreich. Der [[seit Jahren in Berlin lebende]] Autor schreibt ein neues Buch. Die [[im Jahr 1990 gebaute]] Brücke muss repariert werden. Die [[seit langem bestehenden]] Probleme sind noch nicht gelöst. Das [[von der Regierung beschlossene]] Gesetz tritt morgen in Kraft.`,
`Разработанный фирмой продукт очень успешен. Автор, много лет живущий в Берлине, пишет новую книгу. Мост, построенный в 1990 году, нужно отремонтировать. Существующие давно проблемы пока не решены. Принятый правительством закон вступает в силу завтра.`],
ex:[
['c','Das Buch, das von vielen Menschen gelesen wird, ist ein Bestseller. = Das ___ Buch ist ein Bestseller.',['von vielen Menschen gelesene','von vielen Menschen lesende','gelesene von vielen Menschen','viele Menschen gelesene'],0,'Книга, которую читают многие, — бестселлер.','Пассив → Partizip II: <b>gelesene</b>; зависимые слова стоят перед причастием.'],
['c','Der Student, der gerade im Café arbeitet, … = Der ___ Student …',['gerade im Café arbeitende','gerade im Café gearbeitete','im Café gerade arbeitet','arbeitende im Café gerade'],0,'Студент, который сейчас работает в кафе, …','Активное действие → Partizip I: <b>arbeitende</b> (arbeiten + d + e).'],
['t','Die seit Jahren ___ Probleme sind noch nicht gelöst. (bestehen → Partizip I)',['bestehenden'],'Проблемы, существующие годами, пока не решены.','bestehen → bestehen<b>d</b> + <b>-en</b> (мн. ч. после die).'],
['c','Welcher Satz ist richtig?',['Die im Jahr 1990 gebaute Brücke ist alt.','Die gebaute im Jahr 1990 Brücke ist alt.','Die im Jahr 1990 bauende Brücke ist alt.','Die im Jahr 1990 gebaut Brücke ist alt.'],0,'','Все зависимые слова стоят между артиклем и причастием; причастие получает окончание: <b>gebaute</b>.'],
['t','Das von der Regierung ___ Gesetz tritt morgen in Kraft. (beschließen → Partizip II)',['beschlossene'],'Закон, принятый правительством, вступает в силу завтра.','beschließen → <b>beschlossen</b> + <b>-e</b> (ср. р. после das).'],
['c','Какое причастие описывает активное действие, которое происходит одновременно?',['Partizip I','Partizip II','оба','ни одно'],0,'','Partizip I = активное, одновременное действие («живущий», «работающий»).'],
['o','Der seit Jahren in Berlin lebende Autor schreibt ein neues Buch.','Автор, который много лет живёт в Берлине, пишет новую книгу.','Partizip I <b>lebende</b> вместе с зависимыми словами стоит перед существительным.']
]}
];

/* ======================= INSERT ======================= */
at('imp','after',A1);
at('konn','after',A2);
at('tempn','after',B1);
at('zwei','after',B2);
})();