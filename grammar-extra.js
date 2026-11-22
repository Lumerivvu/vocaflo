/* VocabFlow — Grammar: additional topics and extra exercises (German).
   Loaded after grammar-data.js and before grammar.js. It inserts new topics into window.GRAM at the right place
   (A1 → A2 → B1 → B2) and appends extra exercises to the existing topics. Same data format as grammar-data.js. */
(()=>{
const G=window.GRAM;if(!G||G.some(g=>g.id==='praes'))return;
const H=s=>`<h3>${s}</h3>`,P=s=>`<p>${s}</p>`,
T=r=>`<div class="gs"><table class="gt">${r.map((a,i)=>'<tr>'+a.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')+'</tr>').join('')}</table></div>`,
X=a=>a.map(([d,r])=>`<div class="gx">${d}${r?`<small>${r}</small>`:''}</div>`).join(''),
N=s=>`<div class="gn">${s}</div>`,W=s=>`<div class="gn gw">${s}</div>`,
L=a=>'<ul>'+a.map(s=>`<li>${s}</li>`).join('')+'</ul>';
const at=(ref,dir,list)=>{const i=G.findIndex(g=>g.id===ref);G.splice(i<0?G.length:i+(dir==='after'?1:0),0,...list)};
const more=(id,ex)=>{const g=G.find(x=>x.id===id);if(g)g.ex.push(...ex)};

/* ======================= NEW TOPICS ======================= */
const A1_before=[
{id:'praes',lv:'A1',t:'Präsens',ru:'Настоящее время: окончания и особые глаголы',
th:[
H('Окончания'),
P('Основа глагола (инфинитив без <b>-en</b>) + окончание:'),
T([['','machen','arbeiten'],['ich','mach<b>e</b>','arbeit<b>e</b>'],['du','mach<b>st</b>','arbeit<b>est</b>'],['er/sie/es','mach<b>t</b>','arbeit<b>et</b>'],['wir','mach<b>en</b>','arbeit<b>en</b>'],['ihr','mach<b>t</b>','arbeit<b>et</b>'],['sie/Sie','mach<b>en</b>','arbeit<b>en</b>']]),
P('Если основа заканчивается на <b>-t, -d</b> (arbeiten, finden, warten), перед <b>-st</b> и <b>-t</b> вставляется <b>-e-</b>. Если основа на <b>-s, -ß, -z, -x</b> (heißen, reisen, tanzen), у <b>du</b> окончание только <b>-t</b>: du heißt, du reist.'),
H('Изменение корневой гласной'),
P('У части сильных глаголов гласная меняется <b>только</b> в формах <b>du</b> и <b>er/sie/es</b>:'),
T([['','sprechen (e → i)','sehen (e → ie)','fahren (a → ä)'],['ich','spreche','sehe','fahre'],['du','{h:sprichst}','{h:siehst}','{h:fährst}'],['er/sie/es','{h:spricht}','{h:sieht}','{h:fährt}'],['wir','sprechen','sehen','fahren'],['ihr','sprecht','seht','fahrt'],['sie/Sie','sprechen','sehen','fahren']]),
L(['<b>e → i</b>: sprechen, geben, helfen, essen (du isst, er isst), treffen, nehmen (du nimmst, er nimmt)','<b>e → ie</b>: sehen, lesen, empfehlen','<b>a → ä</b>: fahren, schlafen, laufen, tragen, waschen, einladen']),
H('sein, haben, werden'),
T([['','sein','haben','werden'],['ich','bin','habe','werde'],['du','bist','hast','wirst'],['er/sie/es','ist','hat','wird'],['wir','sind','haben','werden'],['ihr','seid','habt','werdet'],['sie/Sie','sind','haben','werden']]),
N('Формы <b>wir</b> и <b>sie/Sie</b> всегда совпадают с инфинитивом (у sein — <b>sind</b>).')
].join(''),
tx:[`Ich [[heiße]] Anna und [[wohne]] in Wien. Ich [[arbeite]] in einem Büro. Mein Bruder [[spricht]] drei Sprachen. Er [[fährt]] jeden Tag mit dem Zug und [[liest]] dort Zeitung. Wir [[essen]] oft zusammen. Am Abend [[schläft]] er früh [[ein]], denn er [[ist]] müde. [[Hast]] du auch einen langen Tag?`,
`Меня зовут Анна, и я живу в Вене. Я работаю в офисе. Мой брат говорит на трёх языках. Он каждый день ездит на поезде и читает там газету. Мы часто едим вместе. Вечером он рано засыпает, потому что он устал. А у тебя тоже длинный день?`],
ex:[
['t','Du ___ gut Deutsch. (sprechen)',['sprichst'],'Ты хорошо говоришь по-немецки.','sprechen: <b>e → i</b> в формах du и er/sie/es: du <b>sprichst</b>.'],
['c','Er ___ jeden Tag nach Berlin.',['fahrt','fährt','fahre','fährst'],1,'Он каждый день ездит в Берлин.','fahren: <b>a → ä</b> в формах du и er/sie/es: er <b>fährt</b>.'],
['t','Ihr ___ viel. (arbeiten)',['arbeitet'],'Вы много работаете.','Основа на <b>-t</b>: вставляется <b>-e-</b>: ihr arbeit<b>et</b>.'],
['c','Er ___ gern Bücher.',['lest','liest','lesst','lisst'],1,'Он любит читать книги.','lesen: <b>e → ie</b>. er <b>liest</b>.'],
['t','Wir ___ in München. (wohnen)',['wohnen'],'Мы живём в Мюнхене.','wir → как инфинитив: wir <b>wohnen</b>.'],
['c','___ du heute Zeit?',['Bist','Hast','Wirst','Habt'],1,'У тебя сегодня есть время?','«Иметь время» — haben: du <b>hast</b>.'],
['t','Du ___ ein Brot. (nehmen)',['nimmst'],'Ты берёшь бутерброд.','nehmen: <b>e → i</b> и меняется согласная: du <b>nimmst</b>, er nimmt.'],
['t','Wie ___ du? (heißen)',['heißt'],'Как тебя зовут?','Основа на <b>-ß</b>: у du только <b>-t</b>: du heiß<b>t</b>.'],
['o','Er isst abends gern Pizza.','Вечером он любит есть пиццу.','Глагол на 2-м месте. essen: er <b>isst</b>.',['Abends isst er gern Pizza.']]
]},

{id:'poss',lv:'A1',t:'Possessivartikel',ru:'Притяжательные местоимения: мой, твой, его…',
th:[
H('Притяжательные артикли'),
P('Стоят там, где мог бы стоять артикль, и отвечают на вопрос <b>Wessen?</b> (чей?). Окончания — как у <b>ein / kein</b>.'),
T([['Владелец','Артикль','Пример'],['ich','mein','Das ist {h:mein} Buch.'],['du','dein','Wo ist {h:dein} Handy?'],['er / es','sein','Peter und {h:sein} Bruder.'],['sie (она)','ihr','Anna und {h:ihr} Bruder.'],['wir','unser','{h:Unser} Haus ist klein.'],['ihr','euer','Wo ist {h:euer} Auto?'],['sie (они) / Sie (Вы)','ihr / Ihr','Haben Sie {h:Ihren} Pass?']]),
H('Окончания'),
T([['','м. р.','ж. р.','ср. р.','мн. ч.'],['Nominativ','mein','mein{h:e}','mein','mein{h:e}'],['Akkusativ','mein{h:en}','mein{h:e}','mein','mein{h:e}'],['Dativ','mein{h:em}','mein{h:er}','mein{h:em}','mein{h:en}']]),
N('Основа зависит от <b>владельца</b>, а окончание — от <b>предмета</b> (род, число, падеж): Anna liebt <b>ihren</b> Mann (Mann — м. р., Akkusativ); Peter liebt <b>seine</b> Frau (Frau — ж. р.).'),
P('У <b>euer</b> при окончании выпадает <b>-e-</b>: euer Auto, но <b>eure</b> Kinder, <b>euren</b> Hund. У <b>unser</b> — чаще unsere, unseren.'),
W('Не путайте <b>sein</b> и <b>ihr</b>: <b>Peter</b> und <b>sein</b> Hund; <b>Anna</b> und <b>ihr</b> Hund. Вежливое <b>Ihr</b> пишется с большой буквы.')
].join(''),
tx:[`Das ist [[meine]] Familie. [[Mein]] Vater arbeitet als Ingenieur und [[seine]] Kollegen sind sehr nett. [[Meine]] Mutter mag [[ihren]] Beruf als Lehrerin. [[Mein]] Bruder wohnt mit [[seiner]] Frau und [[seinen]] Kindern in Köln. Wir besuchen [[unsere]] Großeltern oft. Und wie ist [[deine]] Familie?`,
`Это моя семья. Мой отец работает инженером, и его коллеги очень приятные. Моя мама любит свою профессию учительницы. Мой брат живёт со своей женой и своими детьми в Кёльне. Мы часто навещаем наших бабушку и дедушку. А какая у тебя семья?`],
ex:[
['c','Das ist ___ Tasche.',['mein','meine','meinen','meiner'],1,'Это моя сумка.','Tasche — ж. р., Nominativ: mein<b>e</b> Tasche.'],
['t','Ich besuche ___ Eltern. (mein)',['meine'],'Я навещаю своих родителей.','Eltern — мн. ч., Akkusativ: mein<b>e</b> Eltern.'],
['c','Anna liebt ___ Mann.',['seinen','ihren','ihr','seine'],1,'Анна любит своего мужа.','Владелец — Anna (она) → <b>ihr-</b>; Mann — м. р., Akkusativ → ihr<b>en</b>.'],
['c','Peter spielt mit ___ Hund.',['seinem','seiner','ihrem','seinen'],0,'Петер играет со своим псом.','Владелец — Peter → <b>sein-</b>; mit + Dativ, м. р. → sein<b>em</b>.'],
['t','Wir wohnen mit ___ Kindern in Berlin. (unser)',['unseren'],'Мы живём в Берлине со своими детьми.','mit + Dativ, мн. ч.: unser<b>en</b> Kindern.'],
['t','Kinder, wo sind ___ Schuhe? (euer)',['eure'],'Дети, где ваши ботинки?','Мн. ч.: euer + <b>-e</b>, при этом <b>-e-</b> основы выпадает: <b>eure</b>.'],
['t','Haben Sie ___ Pass dabei? (Ihr)',['Ihren'],'У Вас с собой паспорт?','Вежливое Sie → <b>Ihr-</b>; Pass — м. р., Akkusativ: Ihr<b>en</b>.'],
['o','Meine Schwester wohnt in Berlin.','Моя сестра живёт в Берлине.','Глагол на 2-м месте. Schwester — ж. р.: mein<b>e</b>.',['In Berlin wohnt meine Schwester.']]
]},

{id:'neg',lv:'A1',t:'Negation',ru:'Отрицание: nicht и kein',
th:[
H('kein или nicht?'),
T([['','Что отрицаем','Пример'],['<b>kein</b>','существительное с неопределённым артиклем или без артикля','Ich habe {h:keinen} Hund. Ich habe {h:keine} Zeit.'],['<b>nicht</b>','всё остальное: глагол, прилагательное, существительное с определённым артиклем или притяжательным','Ich arbeite heute {h:nicht}. Das ist {h:nicht} mein Buch.']]),
H('Окончания kein'),
T([['','м. р.','ж. р.','ср. р.','мн. ч.'],['Nominativ','kein','kein{h:e}','kein','kein{h:e}'],['Akkusativ','kein{h:en}','kein{h:e}','kein','kein{h:e}'],['Dativ','kein{h:em}','kein{h:er}','kein{h:em}','kein{h:en}']]),
H('Где стоит nicht'),
L(['Отрицается весь глагол → <b>в конце</b>: Ich schlafe {h:nicht}. Ich kaufe das Auto {h:nicht}.','Отрицается прилагательное, наречие или предложная группа → <b>перед ними</b>: Er ist {h:nicht} müde. Ich fahre {h:nicht} nach Berlin.','Глагольная рамка → <b>перед второй частью</b>: Ich kann {h:nicht} kommen. Ich habe das {h:nicht} gewusst.']),
H('Полезно знать'),
P('<b>nicht mehr / kein … mehr</b> — «больше не»: Er arbeitet nicht mehr hier. Ich habe kein Geld mehr.'),
P('<b>nicht … sondern</b> — «не …, а …»: Das ist nicht rot, sondern orange.'),
N('На отрицательный вопрос, если ответ «да» (наоборот), говорят <b>doch</b>: Hast du keinen Hunger? — <b>Doch</b>, ich habe Hunger!')
].join(''),
tx:[`Heute habe ich [[keine]] Zeit. Ich habe [[kein]] Auto und [[keinen]] Führerschein, deshalb fahre ich [[nicht]] selbst. Mein Bruder ist [[nicht]] zu Hause. Er kommt [[nicht]] mit, denn er hat [[keine]] Lust. Das ist [[nicht]] mein Problem. Ich verstehe das [[nicht]].`,
`Сегодня у меня нет времени. У меня нет ни машины, ни водительских прав, поэтому я сам не поеду. Моего брата нет дома. Он не пойдёт с нами, потому что у него нет желания. Это не моя проблема. Я этого не понимаю.`],
ex:[
['c','Ich habe ___ Hunger.',['nicht','kein','keinen','keine'],2,'Я не голоден.','Hunger — м. р., Akkusativ; отрицание существительного без артикля → <b>keinen</b>.'],
['c','Das ist ___ mein Buch.',['kein','nicht','keine','keinen'],1,'Это не моя книга.','Перед притяжательным артиклем (mein) отрицание — <b>nicht</b>, а не kein.'],
['t','Er hat ___ Auto. (kein)',['kein'],'У него нет машины.','Auto — ср. р., Akkusativ: <b>kein</b> Auto.'],
['c','Ich bin heute ___ müde.',['kein','keine','nicht','keinen'],2,'Сегодня я не устал.','Прилагательное отрицается словом <b>nicht</b>.'],
['t','Wir haben ___ Kinder. (kein)',['keine'],'У нас нет детей.','Мн. ч.: <b>keine</b> Kinder.'],
['c','Выберите правильное предложение.',['Ich arbeite heute nicht.','Ich nicht arbeite heute.','Ich arbeite heute kein.','Ich arbeite keine heute.'],0,'','Если отрицается весь глагол, <b>nicht</b> ставится в конец.'],
['c','Hast du keinen Hunger? — ___, ich habe Hunger!',['Ja','Doch','Nein','Nicht'],1,'У тебя нет голода? — Есть, я голоден!','На отрицательный вопрос, когда ответ «да», говорят <b>doch</b>.'],
['o','Ich habe heute keine Zeit.','Сегодня у меня нет времени.','kein + существительное: <b>keine</b> Zeit.',['Heute habe ich keine Zeit.']],
['o','Er kommt heute nicht.','Он сегодня не придёт.','Отрицается весь глагол → <b>nicht</b> в конце.',['Heute kommt er nicht.']]
]}
];

const A1_after=[
{id:'imp',lv:'A1',t:'Imperativ',ru:'Повелительное наклонение',
th:[
H('Три формы + «давайте»'),
T([['Инфинитив','du','ihr','Sie'],['kommen','{h:Komm}!','{h:Kommt}!','{h:Kommen Sie}!'],['arbeiten','{h:Arbeite}!','{h:Arbeitet}!','{h:Arbeiten Sie}!'],['sprechen','{h:Sprich}!','{h:Sprecht}!','{h:Sprechen Sie}!'],['lesen','{h:Lies}!','{h:Lest}!','{h:Lesen Sie}!'],['nehmen','{h:Nimm}!','{h:Nehmt}!','{h:Nehmen Sie}!'],['fahren','{h:Fahr}!','{h:Fahrt}!','{h:Fahren Sie}!'],['sein','{h:Sei}!','{h:Seid}!','{h:Seien Sie}!'],['aufstehen','{h:Steh} auf!','{h:Steht} auf!','{h:Stehen Sie} auf!']]),
L(['<b>du</b>: основа без окончания <b>-st</b>. Если основа на <b>-t/-d</b>, добавляется <b>-e</b> (Arbeite! Warte!).','Если в Präsens гласная меняется <b>e → i/ie</b>, это сохраняется: Sprich! Lies! Nimm! (а умлаут a → ä <b>не</b> сохраняется: Fahr!)','<b>ihr</b>: как в Präsens, только без ihr.','<b>Sie</b>: глагол стоит <b>первым</b>, потом Sie.','<b>wir</b> («давайте»): Gehen wir!']),
H('Приставки и возвратные'),
X([['{h:Ruf} mich {h:an}!','Позвони мне!'],['{h:Setz} {h:dich}!','Садись!'],['{h:Setzen} Sie {h:sich}!','Присядьте!']]),
N('Для вежливости добавляют <b>bitte</b> или <b>doch mal</b>: Komm doch mal her! Warten Sie bitte.')
].join(''),
tx:[`[[Komm]] bitte schnell! Der Bus fährt gleich ab. [[Nimm]] deine Tasche und [[vergiss]] den Schlüssel nicht! [[Seid]] leise, die Kinder schlafen noch. [[Rufen]] Sie mich [[an]], wenn Sie Hilfe brauchen. [[Setzen]] Sie [[sich]] bitte. [[Gehen]] wir jetzt!`,
`Приходи, пожалуйста, быстро! Автобус скоро отходит. Возьми свою сумку и не забудь ключ! Тише, дети ещё спят. Позвоните мне, если Вам понадобится помощь. Присядьте, пожалуйста. Пойдёмте теперь!`],
ex:[
['t','___ bitte schnell! (kommen, du)',['komm'],'Приходи, пожалуйста, быстро!','du-Imperativ: основа без -st: <b>Komm</b>!'],
['c','___ doch mal das Buch! (lesen, du)',['Lese','Lies','Lest','Liest'],1,'Прочти-ка эту книгу!','lesen: e → ie сохраняется в императиве: <b>Lies</b>! (без окончания)'],
['t','Kinder, ___ leise! (sein, ihr)',['seid'],'Дети, будьте тише!','sein: ihr → <b>seid</b>.'],
['c','Выберите правильную форму вежливого императива.',['Kommen Sie bitte!','Sie kommen bitte!','Komm Sie bitte!','Kommt Sie bitte!'],0,'','Вежливая форма: глагол на 1-м месте, затем Sie: <b>Kommen Sie</b>!'],
['c','Ruf mich bitte ___!',['an','auf','ab','aus'],0,'Позвони мне, пожалуйста!','anrufen — приставка в конце: Ruf mich <b>an</b>!'],
['t','___ bitte nicht so laut! (sprechen, du)',['sprich'],'Не говори так громко, пожалуйста!','sprechen: e → i: <b>Sprich</b>!'],
['t','___ wir jetzt! (gehen)',['gehen'],'Пойдёмте сейчас!','Приглашение «давайте»: глагол + wir: <b>Gehen</b> wir!'],
['o','Setzen Sie sich bitte.','Присядьте, пожалуйста.','Вежливый императив: глагол, Sie, затем sich.',['Bitte setzen Sie sich.']]
]}
];

const A2_new=[
{id:'komp',lv:'A2',t:'Komparativ & Superlativ',ru:'Степени сравнения',
th:[
H('Три степени'),
T([['','Positiv','Komparativ','Superlativ'],['schnell','schnell','schnell{h:er}','am schnell{h:sten}'],['alt','alt','{h:äl}ter','am {h:äl}testen'],['groß','groß','{h:grö}ßer','am {h:grö}ßten'],['jung','jung','{h:jü}nger','am {h:jü}ngsten'],['gut','gut','{h:besser}','am {h:besten}'],['viel','viel','{h:mehr}','am {h:meisten}'],['gern','gern','{h:lieber}','am {h:liebsten}'],['hoch','hoch','{h:höher}','am {h:höchsten}']]),
L(['Komparativ: <b>-er</b>, Superlativ: <b>am -sten</b> (после -d, -t, -s, -ß, -z: <b>am -esten</b>: am ältesten, am heißesten).','Многие односложные прилагательные получают <b>умлаут</b>: alt, jung, kalt, warm, lang, kurz, groß, arm.','Неправильные: gut — besser — am besten; viel — mehr — am meisten; gern — lieber — am liebsten.']),
H('Сравнения'),
X([['Berlin ist {h:größer} {h:als} Bonn.','Берлин больше, чем Бонн.'],['Er ist {h:so} alt {h:wie} ich.','Он такого же возраста, как я.'],['Es wird {h:immer} kälter.','Становится всё холоднее.'],['Sie läuft {h:am schnellsten}.','Она бегает быстрее всех.']]),
N('Перед существительным действуют обычные окончания: ein größ<b>erer</b> Hund, das best<b>e</b> Essen, der höchst<b>e</b> Berg.')
].join(''),
tx:[`Mein Bruder ist [[älter]] [[als]] ich, aber ich bin [[größer]] [[als]] er. Er läuft [[schneller]], aber ich schwimme [[besser]]. Im Sommer ist es [[so]] warm [[wie]] in Spanien. Im Winter wird es [[immer kälter]]. Ich trinke [[gern]] Tee, aber Kaffee trinke ich [[lieber]]. [[Am liebsten]] trinke ich Kakao. Der [[höchste]] Berg Deutschlands ist die Zugspitze.`,
`Мой брат старше меня, но я выше него. Он бегает быстрее, а я плаваю лучше. Летом здесь так же тепло, как в Испании. Зимой становится всё холоднее. Я охотно пью чай, но кофе пью ещё охотнее. Больше всего я люблю какао. Самая высокая гора Германии — Цугшпитце.`],
ex:[
['c','Berlin ist ___ als Bonn.',['groß','größer','am größten','großer'],1,'Берлин больше, чем Бонн.','Komparativ + <b>als</b>: groß → <b>größer</b> (с умлаутом).'],
['t','Mein Vater ist ___ als meine Mutter. (alt)',['älter'],'Мой отец старше моей матери.','alt → <b>älter</b> (умлаут).'],
['c','Das ist der ___ Film des Jahres.',['gut','besser','beste','besten'],2,'Это лучший фильм года.','Superlativ перед существительным: der best<b>e</b> Film (gut → best-).'],
['t','Ich trinke ___ Tee als Kaffee. (gern)',['lieber'],'Я пью чай охотнее, чем кофе.','gern → <b>lieber</b> → am liebsten.'],
['c','Im Sommer ist es hier ___ warm wie in Italien.',['so','als','mehr','am'],0,'Летом здесь так же тепло, как в Италии.','Равенство: <b>so</b> … <b>wie</b>.'],
['t','Sie läuft ___ von allen. (schnell)',['am schnellsten'],'Она бегает быстрее всех.','Superlativ наречия: <b>am schnellsten</b>.'],
['c','Das Wetter wird ___ kälter.',['immer','mehr','sehr','viel'],0,'Погода становится всё холоднее.','<b>immer</b> + Komparativ = всё более …'],
['o','Mein Bruder ist älter als ich.','Мой брат старше меня.','Komparativ + <b>als</b> для сравнения.']
]},

{id:'futur',lv:'A2',t:'Futur I',ru:'Будущее время',
th:[
H('Образование'),
P('<b>werden</b> (на 2-м месте) + <b>Infinitiv</b> (в конце).'),
T([['','werden'],['ich','werde'],['du','wirst'],['er/sie/es','wird'],['wir','werden'],['ihr','werdet'],['sie/Sie','werden']]),
X([['Ich {h:werde} dir morgen {h:helfen}.','Я помогу тебе завтра.'],['Nächstes Jahr {h:werden} wir nach Spanien {h:ziehen}.','В следующем году мы переедем в Испанию.']]),
H('Когда его используют'),
L(['планы и обещания: Ich werde dich anrufen.','прогноз: Morgen wird es regnen.','<b>предположение</b> о настоящем (с wohl, sicher, bestimmt): Er wird wohl krank sein.']),
N('В разговоре о будущем чаще используют <b>Präsens</b> + слово со значением времени: Morgen fahre ich nach Berlin. Futur I нужен, когда без него неясно, что речь о будущем, или когда выражают предположение.'),
W('<b>werden</b> бывает ещё глаголом «становиться» (Ich werde müde) и частью Passiv (Das Haus wird gebaut). Futur I — только <b>werden + Infinitiv</b>.')
].join(''),
tx:[`Nächstes Jahr [[werde]] ich nach Spanien [[ziehen]]. Dort [[werde]] ich Spanisch [[lernen]] und neue Freunde [[finden]]. Meine Eltern [[werden]] mich im Sommer [[besuchen]]. Es [[wird]] bestimmt viel Spaß [[machen]]. Wann [[wirst]] du mich [[besuchen]]?`,
`В следующем году я перееду в Испанию. Там я выучу испанский и найду новых друзей. Мои родители навестят меня летом. Это наверняка будет очень весело. Когда ты меня навестишь?`],
ex:[
['t','Morgen ___ es regnen. (werden)',['wird'],'Завтра будет дождь.','es → <b>wird</b> + Infinitiv в конце.'],
['t','Wir ___ nächstes Jahr heiraten. (werden)',['werden'],'В следующем году мы поженимся.','wir → <b>werden</b>.'],
['c','Ich ___ dich morgen anrufen.',['werde','wirst','wird','werden'],0,'Я позвоню тебе завтра.','ich → <b>werde</b>. Инфинитив anrufen — в конце.'],
['c','Du ___ bald Arzt sein.',['werde','wirst','wird','werdet'],1,'Скоро ты будешь врачом.','du → <b>wirst</b>.'],
['c','Er ist nicht da. Er ___ wohl krank sein.',['wird','ist','hat','will'],0,'Его нет. Он, наверное, болен.','Futur I с wohl выражает предположение: Er <b>wird</b> wohl krank <b>sein</b>.'],
['c','Выберите правильное предложение.',['Ich werde morgen früh aufstehen.','Ich werde morgen früh aufstehen werde.','Ich werde morgen früh aufgestanden.','Ich werde morgen früh stehe auf.'],0,'','werden — на 2-м месте, инфинитив (aufstehen) — в самом конце.'],
['o','Ich werde dir morgen helfen.','Я помогу тебе завтра.','werden — на 2-м месте, инфинитив — в конце.',['Morgen werde ich dir helfen.']],
['o','Wir werden im Sommer nach Italien fahren.','Летом мы поедем в Италию.','werden + Infinitiv в конце.',['Im Sommer werden wir nach Italien fahren.']]
]},

{id:'konn',lv:'A2',t:'Konnektoren',ru:'Союзные слова: deshalb, trotzdem, außerdem…',
th:[
H('Слова, после которых — глагол'),
P('Эти слова связывают два <b>самостоятельных</b> предложения. Они занимают 1-ю позицию, поэтому <b>глагол стоит сразу за ними</b> (на 2-м месте).'),
T([['Слово','Значение','Пример'],['deshalb / deswegen / darum','поэтому','Ich bin müde. Deshalb {h:gehe} ich ins Bett.'],['trotzdem','тем не менее','Es regnet. Trotzdem {h:gehen} wir spazieren.'],['außerdem','кроме того','Er ist nett. Außerdem {h:ist} er klug.'],['dann / danach','потом','Ich esse. Danach {h:gehe} ich schlafen.'],['sonst','иначе','Ich muss gehen, sonst {h:verpasse} ich den Bus.'],['also','итак, значит','Du bist müde, also {h:bleibst} du zu Hause.']]),
H('Сравните с weil'),
X([['Ich bleibe zu Hause, {h:weil} ich müde {h:bin}.','weil → глагол в конце'],['Ich bin müde. {h:Deshalb} {h:bleibe} ich zu Hause.','deshalb → глагол сразу после']]),
N('<b>und, aber, oder, denn, sondern</b> стоят «вне» предложения и порядок слов не меняют.')
].join(''),
tx:[`Ich bin heute sehr müde. [[Deshalb]] gehe ich früh ins Bett. Ich habe morgen eine Prüfung, [[trotzdem]] bin ich nicht nervös. Ich habe gut gelernt, [[außerdem]] hilft mir mein Freund. [[Danach]] möchte ich mit ihm feiern. Ich muss aber früh aufstehen, [[sonst]] komme ich zu spät.`,
`Сегодня я очень устал. Поэтому я рано ложусь спать. Завтра у меня экзамен, но я всё равно не нервничаю. Я хорошо подготовился, кроме того, мне помогает друг. После этого я хочу с ним отпраздновать. Но мне нужно рано встать, иначе я опоздаю.`],
ex:[
['c','Es regnet. ___ bleibe ich zu Hause.',['Deshalb','Weil','Obwohl','Dass'],0,'Идёт дождь. Поэтому я остаюсь дома.','<b>Deshalb</b> («поэтому»): за ним сразу глагол: Deshalb <b>bleibe</b> ich …'],
['c','Er ist krank. ___ geht er zur Arbeit.',['Deshalb','Trotzdem','Außerdem','Sonst'],1,'Он болен. Тем не менее он идёт на работу.','<b>Trotzdem</b> = всё равно, несмотря на это.'],
['c','Выберите правильное предложение.',['Deshalb ich bleibe zu Hause.','Deshalb bleibe ich zu Hause.','Ich deshalb bleibe zu Hause.','Deshalb zu Hause bleibe ich.'],1,'','Глагол — сразу после deshalb (позиция 2).'],
['c','Ich muss früh aufstehen, ___ verpasse ich den Zug.',['sonst','deshalb','trotzdem','außerdem'],0,'Мне нужно рано встать, иначе я опоздаю на поезд.','<b>sonst</b> = иначе.'],
['t','Ich habe keine Zeit. ___ habe ich kein Geld.',['außerdem'],'У меня нет времени. Кроме того, у меня нет денег.','<b>außerdem</b> — «кроме того»; глагол сразу следом.'],
['t','Er hat viel gearbeitet. ___ ist er müde.',['deshalb','deswegen','darum'],'Он много работал. Поэтому он устал.','<b>deshalb / deswegen / darum</b> — «поэтому».'],
['o','Es regnet, deshalb bleibe ich zu Hause.','Идёт дождь, поэтому я остаюсь дома.','После deshalb глагол стоит на 2-м месте.']
]}
];

const B1_new=[
{id:'gen',lv:'B1',t:'Genitiv',ru:'Родительный падеж — чей?',
th:[
H('Когда нужен Genitiv'),
P('Genitiv отвечает на вопрос <b>Wessen?</b> (чей?) и показывает принадлежность. Он стоит <b>после</b> существительного, к которому относится.'),
T([['','м. р.','ж. р.','ср. р.','мн. ч.'],['Nominativ','der Mann','die Frau','das Kind','die Kinder'],['Genitiv','{m:des} Mann{h:es}','{f:der} Frau','{n:des} Kind{h:es}','{p:der} Kinder'],['ein-','eines Mannes','einer Frau','eines Kindes','meiner Kinder']]),
L(['Существительные м. и ср. рода получают <b>-(e)s</b>: односложные и на -s, -ß, -x, -z, -sch — <b>-es</b> (des Hauses, des Tisches); многосложные — <b>-s</b> (des Lehrers, des Autos).','Прилагательное после артикля: des alt<b>en</b> Mannes.','У имён собственных — <b>-s</b> без артикля: Annas Buch.','В разговорной речи часто вместо Genitiv: <b>von + Dativ</b>: das Auto von meinem Vater.']),
H('Предлоги с Genitiv'),
P('<b>wegen</b> (из-за), <b>trotz</b> (несмотря на), <b>während</b> (во время), <b>statt / anstatt</b> (вместо), <b>innerhalb</b>, <b>außerhalb</b>.'),
X([['{h:Wegen des} Wetters bleiben wir zu Hause.','Из-за погоды мы остаёмся дома.'],['{h:Trotz der} Kälte gehen wir spazieren.','Несмотря на холод, мы идём гулять.'],['{h:Während des} Urlaubs lese ich viel.','Во время отпуска я много читаю.']]),
N('Некоторые мужские существительные (<b>N-Deklination</b>) получают <b>-(e)n</b> во всех падежах, кроме Nominativ: der Student → des Studenten, der Name → des Namens.')
].join(''),
tx:[`Das ist das Auto [[meines Vaters]]. Die Farbe [[des Autos]] ist blau. Wegen [[des schlechten Wetters]] bleiben wir zu Hause. [[Während des Tages]] arbeitet er, am Abend liest er. Trotz [[der Kälte]] gehen die Kinder spazieren. Das Haus [[meiner Tante]] liegt am Rand [[der Stadt]]. [[Annas]] Hund heißt Max.`,
`Это машина моего отца. Цвет машины синий. Из-за плохой погоды мы остаёмся дома. Днём он работает, а вечером читает. Несмотря на холод, дети идут гулять. Дом моей тёти находится на окраине города. Собаку Анны зовут Макс.`],
ex:[
['c','Das ist das Auto ___ Mannes.',['der','des','dem','den'],1,'Это машина мужчины.','Mann — м. р. Genitiv: <b>des</b> Mannes (+ -es).'],
['c','Das Haus ___ Frau ist groß.',['der','des','die','dem'],0,'Дом женщины большой.','Ж. р., Genitiv: <b>der</b> Frau (существительное не меняется).'],
['t','Wegen ___ Regens bleiben wir hier. (der)',['des'],'Из-за дождя мы остаёмся здесь.','<b>wegen</b> + Genitiv. Regen — м. р.: <b>des</b> Regens.'],
['t','Die Tasche ___ Kindes ist rot. (das)',['des'],'Сумка ребёнка красная.','Kind — ср. р. Genitiv: <b>des</b> Kindes.'],
['c','Trotz ___ Kälte gehen wir spazieren.',['der','des','die','dem'],0,'Несмотря на холод, мы идём гулять.','Kälte — ж. р.; <b>trotz</b> + Genitiv: <b>der</b> Kälte.'],
['c','Das Auto ___ Eltern ist neu.',['meine','meiner','meinen','meines'],1,'Машина моих родителей новая.','Мн. число, Genitiv: <b>meiner</b> Eltern.'],
['c','Выберите правильное предложение.',['Die Farbe des Autos ist blau.','Die Farbe das Auto ist blau.','Die Farbe von des Autos ist blau.','Des Autos die Farbe ist blau.'],0,'','Genitiv стоит после существительного, к которому относится: die Farbe <b>des Autos</b>.'],
['o','Wegen des Wetters bleiben wir zu Hause.','Из-за погоды мы остаёмся дома.','<b>wegen</b> + Genitiv. После обстоятельства на 1-м месте глагол — на 2-м.',['Wir bleiben wegen des Wetters zu Hause.']]
]},

{id:'zuinf',lv:'B1',t:'Infinitiv mit zu',ru:'Инфинитив с zu, um … zu, damit',
th:[
H('Когда нужен zu'),
P('<b>zu</b> стоит перед инфинитивом и вместе с ним в конце. Запятая обычно ставится перед инфинитивной группой.'),
X([['Ich habe keine Lust, früh {h:aufzustehen}.','У меня нет желания рано вставать.'],['Es ist wichtig, jeden Tag Deutsch {h:zu lernen}.','Важно каждый день учить немецкий.']]),
L(['После глаголов <b>versuchen, anfangen, aufhören, vergessen, beginnen, hoffen, planen, beschließen</b>.','После выражений <b>Lust / Zeit / Angst haben</b>, <b>es ist wichtig / schwer / schön</b>.','У отделяемых глаголов <b>zu</b> стоит между приставкой и корнем: <b>auf</b>zu<b>stehen</b>, <b>an</b>zu<b>rufen</b>, <b>mit</b>zu<b>nehmen</b>.']),
H('Когда zu не нужен'),
P('После модальных глаголов, <b>werden</b>, <b>lassen</b>, а также после <b>gehen, bleiben, fahren</b>, <b>sehen, hören</b>: Ich muss arbeiten. Wir gehen schwimmen.'),
H('um … zu, damit, ohne … zu, statt … zu'),
T([['Конструкция','Значение','Пример'],['<b>um … zu</b>','чтобы (подлежащее одно и то же)','Ich lerne Deutsch, {h:um} in Berlin {h:zu} arbeiten.'],['<b>damit</b>','чтобы (подлежащие разные), придаточное','Ich erkläre es, {h:damit} du es {h:verstehst}.'],['<b>ohne … zu</b>','не делая чего-то','Er ging, {h:ohne} sich {h:zu} verabschieden.'],['<b>statt … zu</b>','вместо того чтобы','Er schläft, {h:statt} {h:zu} lernen.']])
].join(''),
tx:[`Ich habe beschlossen, mehr Sport [[zu]] machen. Es ist nicht leicht, jeden Tag früh [[aufzustehen]]. Ich gehe ins Fitnessstudio, [[um]] fit [[zu]] bleiben. Gestern habe ich vergessen, meine Tasche [[mitzunehmen]]. Heute fange ich an, einen Plan [[zu]] schreiben. Ich trainiere, [[ohne]] viel [[zu]] reden. Ich zeige dir den Plan, [[damit]] du auch Spaß hast.`,
`Я решил заниматься спортом больше. Нелегко каждый день рано вставать. Я хожу в фитнес-зал, чтобы оставаться в форме. Вчера я забыл взять с собой сумку. Сегодня я начинаю писать план. Я тренируюсь, не болтая много. Я покажу тебе план, чтобы и тебе было приятно.`],
ex:[
['t','Ich habe keine Zeit, ins Kino ___ gehen.',['zu'],'У меня нет времени идти в кино.','После <b>Zeit haben</b> — инфинитив с <b>zu</b>.'],
['t','Er versucht, früh ___.',['aufzustehen'],'Он пытается рано вставать.','У отделяемых глаголов <b>zu</b> стоит между приставкой и корнем: auf<b>zu</b>stehen.'],
['c','Ich muss heute früh ___.',['aufstehen','aufzustehen','zu aufstehen','zum aufstehen'],0,'Мне сегодня нужно рано встать.','После модального глагола <b>zu</b> не нужен.'],
['c','Sie lernt Deutsch, ___ in Berlin zu arbeiten.',['damit','um','dass','weil'],1,'Она учит немецкий, чтобы работать в Берлине.','Подлежащее одно и то же → <b>um … zu</b> + Infinitiv.'],
['c','Ich erkläre es dir, ___ du es verstehst.',['um','damit','dass','zu'],1,'Я объясняю тебе это, чтобы ты понял.','Подлежащие разные (ich / du) → <b>damit</b> + придаточное, глагол в конце.'],
['c','Er ging weg, ___ sich zu verabschieden.',['um','ohne','damit','statt'],1,'Он ушёл, не попрощавшись.','<b>ohne … zu</b> = не делая чего-то.'],
['c','Wir gehen heute ___.',['zu schwimmen','schwimmen','zum schwimmen','schwimmen zu'],1,'Сегодня мы идём плавать.','После <b>gehen</b> инфинитив без zu.'],
['o','Es ist wichtig, jeden Tag Deutsch zu lernen.','Важно каждый день учить немецкий.','После <b>Es ist wichtig</b> — инфинитивная группа с <b>zu</b> в конце.']
]},

{id:'vprep',lv:'B1',t:'Verben mit Präpositionen',ru:'Глаголы с предлогами, da- и wo-',
th:[
H('Глагол + предлог + падеж'),
P('Предлог закреплён за глаголом и определяет падеж. Эти пары нужно учить вместе.'),
T([['Глагол + предлог','Падеж','Пример'],['warten auf','Akk','Ich warte auf den Bus.'],['sich freuen auf','Akk','Ich freue mich auf den Urlaub. (будущее)'],['sich freuen über','Akk','Ich freue mich über das Geschenk. (настоящее / прошлое)'],['denken an','Akk','Er denkt an seine Familie.'],['sich erinnern an','Akk','Ich erinnere mich an den Sommer.'],['sich interessieren für','Akk','Sie interessiert sich für Kunst.'],['sich ärgern über','Akk','Er ärgert sich über den Lärm.'],['sprechen über','Akk','Wir sprechen über das Wetter.'],['sich kümmern um','Akk','Sie kümmert sich um die Kinder.'],['bitten um','Akk','Ich bitte um Hilfe.'],['träumen von','Dat','Er träumt von einer Reise.'],['Angst haben vor','Dat','Ich habe Angst vor Hunden.'],['teilnehmen an','Dat','Wir nehmen an dem Kurs teil.'],['fragen nach','Dat','Sie fragt nach dem Weg.'],['abhängen von','Dat','Das hängt vom Wetter ab.']]),
H('Вопрос и ответ'),
T([['','Вопрос','Ответ'],['предмет, событие','<b>Wo(r)</b> + предлог: {h:Worauf} wartest du?','<b>Da(r)</b> + предлог: Ich warte {h:darauf}.'],['человек','<b>Предлог + wen/wem</b>: {h:Auf wen} wartest du?','Предлог + местоимение: Ich warte {h:auf ihn}.']]),
N('Перед предлогом, начинающимся с гласной, вставляется <b>-r-</b>: wo<b>r</b>auf, da<b>r</b>an, da<b>r</b>über. Перед согласной — нет: wovon, davon, wofür, dafür.')
].join(''),
tx:[`Ich [[warte auf]] den Bus. [[Worauf]] wartest du? Ich warte [[auf]] meinen Freund. Ich [[freue mich auf]] den Urlaub. Meine Schwester [[interessiert sich für]] Kunst und [[träumt von]] einer Reise nach Paris. Wir sprechen oft [[darüber]]. Ich [[denke an]] meine Familie und [[erinnere mich]] gern [[an]] die Ferien.`,
`Я жду автобус. Чего ждёшь ты? Я жду своего друга. Я радуюсь отпуску. Моя сестра интересуется искусством и мечтает о поездке в Париж. Мы часто говорим об этом. Я думаю о своей семье и с удовольствием вспоминаю каникулы.`],
ex:[
['c','Ich warte ___ den Bus.',['auf','an','für','über'],0,'Я жду автобус.','<b>warten auf</b> + Akkusativ.'],
['c','Sie interessiert sich ___ Musik.',['über','für','an','von'],1,'Она интересуется музыкой.','<b>sich interessieren für</b> + Akkusativ.'],
['c','Ich denke oft ___ meine Familie.',['an','auf','von','über'],0,'Я часто думаю о своей семье.','<b>denken an</b> + Akkusativ.'],
['c','Er träumt ___ einer Weltreise.',['an','von','über','auf'],1,'Он мечтает о кругосветном путешествии.','<b>träumen von</b> + Dativ.'],
['c','___ wartest du? — Auf den Bus.',['Wovon','Worauf','Woran','Wofür'],1,'Чего ты ждёшь? — Автобус.','warten <b>auf</b> → вопрос о предмете: <b>Worauf</b>?'],
['t','Meine Schwester hat bald Geburtstag. Ich freue mich schon ___.',['darauf'],'У моей сестры скоро день рождения. Я уже радуюсь этому.','Для события: <b>da(r)</b> + <b>auf</b> = <b>darauf</b>.'],
['c','Wir sprechen ___ das Problem.',['über','von','mit','an'],0,'Мы говорим о проблеме.','<b>sprechen über</b> + Akkusativ.'],
['o','Wir warten seit einer Stunde auf den Zug.','Мы ждём поезд уже час.','<b>warten auf</b> + Akkusativ. Обстоятельство времени — перед предлогом.',['Seit einer Stunde warten wir auf den Zug.']]
]},

{id:'plus',lv:'B1',t:'Plusquamperfekt',ru:'Предпрошедшее время',
th:[
H('Образование'),
P('<b>hatte</b> / <b>war</b> (Präteritum от haben / sein) + <b>Partizip II</b> (в конце). Вспомогательный глагол — тот же, что и в Perfekt.'),
T([['','haben','sein'],['ich','hatte','war'],['du','hattest','warst'],['er/sie/es','hatte','war'],['wir','hatten','waren'],['ihr','hattet','wart'],['sie/Sie','hatten','waren']]),
X([['Als ich ankam, {h:war} der Zug schon {h:abgefahren}.','Когда я приехал, поезд уже ушёл.'],['Ich {h:hatte} den Wecker nicht {h:gehört}.','Я не услышал будильник.']]),
H('Когда используют'),
P('Для действия, которое произошло <b>раньше</b> другого прошедшего действия. Часто с <b>nachdem</b>, <b>als</b>, <b>schon</b>, <b>bereits</b>, <b>vorher</b>.'),
X([['{h:Nachdem} ich gegessen {h:hatte}, ging ich spazieren.','После того как я поел, я пошёл гулять.']]),
N('В придаточном с <b>nachdem</b> — более раннее время: если в главном Präteritum, то в придаточном Plusquamperfekt; если в главном Präsens — Perfekt: Nachdem ich gegessen <b>habe</b>, gehe ich spazieren.')
].join(''),
tx:[`Gestern kam ich zu spät zur Arbeit. Als ich zum Bahnhof kam, [[war]] der Zug schon [[abgefahren]]. Ich [[hatte]] den Wecker nicht [[gehört]]. Nachdem ich lange [[gewartet hatte]], nahm ich den nächsten Zug. Im Büro [[hatte]] mein Chef schon zweimal [[angerufen]]. Er [[war]] sehr wütend, weil ich die Mail nicht [[geschickt hatte]].`,
`Вчера я опоздал на работу. Когда я пришёл на вокзал, поезд уже ушёл. Я не услышал будильник. После того как я долго прождал, я поехал на следующем поезде. В офисе мой начальник уже дважды звонил. Он был очень зол, потому что я не отправил письмо.`],
ex:[
['t','Als ich ankam, ___ der Film schon begonnen. (haben)',['hatte'],'Когда я пришёл, фильм уже начался.','beginnen образует Perfekt с haben → <b>hatte</b> begonnen.'],
['t','Als wir ankamen, ___ der Zug schon abgefahren. (sein)',['war'],'Когда мы приехали, поезд уже ушёл.','abfahren — глагол движения → <b>war</b> abgefahren.'],
['c','Nachdem ich gegessen ___, ging ich spazieren.',['habe','hatte','war','hat'],1,'После того как я поел, я пошёл гулять.','Действие раньше Präteritum → Plusquamperfekt: gegessen <b>hatte</b>.'],
['c','Sie ___ schon gegangen, als ich kam.',['hatte','war','ist','hat'],1,'Она уже ушла, когда я пришёл.','gehen — движение: <b>war</b> gegangen.'],
['c','Wir ___ lange gewartet, bevor der Bus kam.',['hatten','waren','haben','sind'],0,'Мы долго ждали, прежде чем пришёл автобус.','warten — с haben → <b>hatten</b> gewartet.'],
['c','Plusquamperfekt от «ich habe gesehen»:',['ich sah','ich hatte gesehen','ich war gesehen','ich habe gesehen gehabt'],1,'','hatte/war + Partizip II: ich <b>hatte gesehen</b>.'],
['o','Ich hatte das Buch schon gelesen.','Я уже прочитал книгу.','hatte — на 2-м месте, Partizip II — в конце.',['Das Buch hatte ich schon gelesen.']]
]},

{id:'tempn',lv:'B1',t:'Temporale Nebensätze',ru:'Придаточные времени: als, wenn, während, bevor, nachdem',
th:[
H('Союзы'),
T([['Союз','Значение','Пример'],['<b>als</b>','когда (один раз, в прошлом)','{h:Als} ich in Rom war, aß ich viel Pizza.'],['<b>wenn</b>','когда (повторно) / если; в будущем','{h:Wenn} ich Zeit habe, lese ich.'],['<b>während</b>','пока, в то время как','{h:Während} ich koche, hört er Musik.'],['<b>bevor</b>','прежде чем','{h:Bevor} ich gehe, mache ich das Licht aus.'],['<b>nachdem</b>','после того как','{h:Nachdem} ich gegessen habe, gehe ich spazieren.'],['<b>seit(dem)</b>','с тех пор как','{h:Seit} ich in Berlin wohne, fahre ich Rad.'],['<b>bis</b>','пока не','Ich warte, {h:bis} du kommst.'],['<b>sobald</b>','как только','{h:Sobald} ich fertig bin, rufe ich an.']]),
L(['Глагол в придаточном — <b>в конце</b>.','Если придаточное первое, за запятой сразу идёт глагол главного: <b>Als</b> ich kam, <b>war</b> es dunkel.','<b>nachdem</b>: придаточное в более раннем времени (Perfekt при Präsens, Plusquamperfekt при Präteritum).']),
W('<b>als</b> — для <b>одного</b> события в прошлом; <b>wenn</b> — для <b>повторяющегося</b> (всегда, каждый раз) и для будущего. «Когда я был ребёнком» — als; «каждый раз, когда шёл снег» — wenn.')
].join(''),
tx:[`[[Als]] ich ein Kind war, wohnte ich in Wien. [[Wenn]] es schneite, spielten wir draußen. [[Während]] ich arbeite, hört mein Mann Musik. [[Bevor]] ich zur Arbeit gehe, trinke ich einen Kaffee. [[Nachdem]] ich gegessen habe, räume ich die Küche auf. [[Seit]] ich in Berlin wohne, fahre ich Rad. Ich warte, [[bis]] du kommst.`,
`Когда я был ребёнком, я жил в Вене. Когда шёл снег, мы играли на улице. Пока я работаю, мой муж слушает музыку. Прежде чем пойти на работу, я пью кофе. После того как я поела, я убираю кухню. С тех пор как я живу в Берлине, я езжу на велосипеде. Я жду, пока ты не придёшь.`],
ex:[
['c','___ ich in Rom war, habe ich viel Pizza gegessen.',['Wenn','Als','Seit','Bis'],1,'Когда я был в Риме, я ел много пиццы.','Один раз в прошлом → <b>als</b>.'],
['c','___ ich Zeit habe, lese ich ein Buch.',['Als','Wenn','Bis','Nachdem'],1,'Когда у меня есть время, я читаю книгу.','Повторяющееся действие → <b>wenn</b>.'],
['c','Ich putze, ___ meine Frau kocht.',['bevor','während','bis','seit'],1,'Я убираюсь, пока жена готовит.','<b>während</b> — действия идут одновременно.'],
['c','___ ich das Haus verlasse, mache ich das Licht aus.',['Bevor','Nachdem','Seit','Als'],0,'Прежде чем уйти из дома, я выключаю свет.','<b>bevor</b> = прежде чем.'],
['t','Ich warte, ___ du kommst.',['bis'],'Я жду, пока ты не придёшь.','<b>bis</b> = пока не.'],
['t','___ ich gegessen habe, gehe ich spazieren.',['nachdem'],'После того как я поел, я иду гулять.','<b>nachdem</b> = после того как; в придаточном Perfekt.'],
['c','Выберите правильный порядок слов.',['Als ich nach Hause kam, war es schon dunkel.','Als ich kam nach Hause, war es schon dunkel.','Als ich nach Hause kam, es war schon dunkel.','Als ich kam nach Hause, es war schon dunkel.'],0,'','Глагол придаточного — в конце, затем сразу глагол главного предложения.'],
['o','Wenn ich müde bin, trinke ich Kaffee.','Когда я устал, я пью кофе.','Придаточное первое → затем сразу глагол главного.',['Ich trinke Kaffee, wenn ich müde bin.']]
]}
];

const B2_new=[
{id:'konjpast',lv:'B2',t:'Konjunktiv II der Vergangenheit',ru:'Сослагательное наклонение в прошедшем',
th:[
H('Образование'),
P('<b>hätte</b> / <b>wäre</b> + <b>Partizip II</b>. Вспомогательный глагол — тот же, что в Perfekt (haben или sein).'),
X([['Wenn ich mehr gelernt {h:hätte}, {h:hätte} ich die Prüfung bestanden.','Если бы я больше учился, я сдал бы экзамен.'],['Wenn ich früher aufgestanden {h:wäre}, {h:hätte} ich den Zug nicht verpasst.','Если бы я встал раньше, я бы не опоздал на поезд.']]),
H('Варианты'),
L(['Без <b>wenn</b>: глагол на 1-м месте — <b>Wäre</b> ich früher aufgestanden, hätte ich …','Пожелание: <b>Hätte</b> ich nur mehr Zeit gehabt!','Упрёк: Du <b>hättest</b> mich anrufen <b>sollen</b>.','С модальным глаголом — двойной инфинитив в конце: Ich <b>hätte</b> kommen <b>können</b>.']),
N('Так говорят о <b>нереальном прошлом</b> — о том, что не произошло: сожаление, упрёк, предположение «что было бы, если бы…».')
].join(''),
tx:[`Wenn ich gestern früher [[aufgestanden wäre]], [[hätte]] ich den Bus nicht [[verpasst]]. Ich [[wäre]] pünktlich im Büro [[gewesen]] und [[hätte]] mit dem Chef [[sprechen können]]. Du [[hättest]] mich [[anrufen sollen]]! Ach, [[hätte]] ich nur den Wecker [[gestellt]]!`,
`Если бы я вчера встал раньше, я бы не опоздал на автобус. Я пришёл бы в офис вовремя и смог бы поговорить с начальником. Тебе следовало мне позвонить! Ах, если бы я только поставил будильник!`],
ex:[
['c','Wenn ich Zeit gehabt ___, wäre ich gekommen.',['habe','hätte','wäre','hatte'],1,'Если бы у меня было время, я бы пришёл.','Нереальное прошлое: <b>hätte</b> + Partizip II.'],
['t','Wenn er früher gekommen ___, hätte er sie gesehen. (sein)',['wäre'],'Если бы он пришёл раньше, он бы её увидел.','kommen — движение: <b>wäre</b> gekommen.'],
['t','Ich ___ das nicht gesagt, wenn ich es gewusst hätte.',['hätte'],'Я бы этого не сказал, если бы знал.','haben → <b>hätte</b> + Partizip II (gesagt).'],
['c','Du ___ mich anrufen sollen.',['hättest','wärst','hast','hattest'],0,'Тебе следовало мне позвонить.','Упрёк: <b>hättest</b> + Infinitiv + sollen (двойной инфинитив).'],
['c','___ ich nur mehr gelernt!',['Hätte','Wäre','Habe','Hatte'],0,'Если бы я только больше учился!','Пожелание без wenn: глагол на 1-м месте — <b>Hätte</b> ich nur …'],
['c','___ ich früher aufgestanden, hätte ich den Zug nicht verpasst.',['Wenn','Wäre','Hätte','Würde'],1,'Если бы я встал раньше, я бы не опоздал на поезд.','aufstehen — с sein → <b>Wäre</b> ich … aufgestanden (без wenn — инверсия).'],
['c','Wir hätten länger bleiben ___.',['können','gekonnt','könnten','konnten'],0,'Мы могли бы остаться дольше.','С модальным глаголом — двойной инфинитив в конце: hätten … bleiben <b>können</b>.'],
['o','Wenn ich Geld gehabt hätte, hätte ich ein Haus gekauft.','Если бы у меня были деньги, я бы купил дом.','Нереальное прошлое: <b>hätte</b> + Partizip II в обеих частях.']
]},

{id:'konj1',lv:'B2',t:'Konjunktiv I',ru:'Косвенная речь',
th:[
H('Для чего'),
P('<b>Konjunktiv I</b> используют в <b>косвенной речи</b> — в новостях, отчётах, пересказе чужих слов. Он показывает: «это не моё утверждение, я передаю чужие слова».'),
H('Формы (er/sie/es)'),
T([['Инфинитив','Konjunktiv I','Пример'],['sein','{h:sei}','Er sagt, er {h:sei} krank.'],['haben','{h:habe}','Sie sagt, sie {h:habe} keine Zeit.'],['kommen','{h:komme}','Er sagt, er {h:komme} morgen.'],['fahren','{h:fahre}','Er sagt, er {h:fahre} nach Berlin.'],['können','{h:könne}','Sie sagt, sie {h:könne} nicht kommen.'],['müssen','{h:müsse}','Er sagt, er {h:müsse} arbeiten.'],['werden','{h:werde}','Er sagt, er {h:werde} helfen.']]),
P('Основа + <b>-e</b> (er/sie/es), <b>-en</b> (wir, sie), <b>-est</b> (du), <b>-et</b> (ihr). Особый случай — <b>sein</b>: ich sei, du seist, er sei, wir seien, ihr seiet, sie seien.'),
H('Замена на Konjunktiv II'),
P('Если форма Konjunktiv I <b>совпадает с Indikativ</b> (ich habe, wir/sie haben, ich komme, sie kommen), вместо неё берут Konjunktiv II: sie <b>hätten</b>, sie <b>kämen</b> или <b>würden</b> + Infinitiv.'),
H('Прошедшее и вопросы'),
X([['«Ich habe keine Zeit gehabt.» → Er sagt, er {h:habe} keine Zeit {h:gehabt}.',''],['«Ich bin nach Hause gegangen.» → Sie sagt, sie {h:sei} nach Hause {h:gegangen}.',''],['«Kommst du morgen?» → Er fragte, ob ich morgen {h:komme}.','']]),
N('При пересказе меняются местоимения и обстоятельства: <b>«Ich bin müde.»</b> → Er sagt, <b>er</b> sei müde.')
].join(''),
tx:[`Der Minister sagte, die Wirtschaft [[wachse]] langsam. Er betonte, man [[habe]] viele Probleme gelöst. Die Opposition erklärte, das Programm [[sei]] zu teuer. Sie fragte, wie lange die Regierung noch [[warten wolle]]. Journalisten berichteten, der Präsident [[sei]] gestern nach Paris [[gereist]]. Viele Bürger meinten, sie [[hätten]] kein Vertrauen mehr.`,
`Министр сказал, что экономика растёт медленно. Он подчеркнул, что многие проблемы удалось решить. Оппозиция заявила, что программа слишком дорогая. Она спросила, как долго правительство ещё намерено ждать. Журналисты сообщили, что президент вчера уехал в Париж. Многие граждане считали, что у них больше нет доверия.`],
ex:[
['c','Er sagt, er ___ krank.',['ist','sei','seien','bin'],1,'Он говорит, что он болен.','sein → Konjunktiv I: er <b>sei</b>.'],
['t','Sie sagt, sie ___ keine Zeit. (haben)',['habe'],'Она говорит, что у неё нет времени.','Konjunktiv I: sie <b>habe</b>.'],
['t','Er behauptet, er ___ den Mann nicht. (kennen)',['kenne'],'Он утверждает, что не знает этого мужчину.','Konjunktiv I: er <b>kenne</b>.'],
['c','Der Chef sagte, er ___ morgen nach Berlin.',['fahre','fährt','fahren','fuhr'],0,'Начальник сказал, что завтра поедет в Берлин.','Konjunktiv I: основа + -e: er <b>fahre</b> (без умлаута).'],
['c','Sie sagen, sie ___ Hunger.',['haben','hätten','hatten','habe'],1,'Они говорят, что они голодны.','Konjunktiv I для sie (мн.) совпадает с Indikativ (haben), поэтому берут Konjunktiv II: <b>hätten</b>.'],
['c','Er sagte, sie ___ gestern nach Hause gegangen.',['sei','ist','war','habe'],0,'Он сказал, что она вчера пошла домой.','Прошедшее в косвенной речи: <b>sei</b> + Partizip II (gehen — с sein).'],
['c','Er fragte, ob sie morgen ___.',['komme','kommt','kam','kommen'],0,'Он спросил, придёт ли она завтра.','Косвенный вопрос с ob + Konjunktiv I: sie <b>komme</b>.'],
['o','Er sagte, er habe keine Zeit.','Он сказал, что у него нет времени.','Konjunktiv I: er <b>habe</b>.']
]},

{id:'zwei',lv:'B2',t:'Zweiteilige Konnektoren',ru:'Двойные союзы: entweder … oder, je … desto',
th:[
H('Основные пары'),
T([['Конструкция','Значение','Пример'],['<b>entweder … oder</b>','либо … либо','Wir fahren {h:entweder} nach Rom {h:oder} nach Wien.'],['<b>sowohl … als auch</b>','как … так и','Er spricht {h:sowohl} Deutsch {h:als auch} Englisch.'],['<b>weder … noch</b>','ни … ни','Ich habe {h:weder} Zeit {h:noch} Lust.'],['<b>nicht nur … sondern auch</b>','не только … но и','Sie ist {h:nicht nur} klug, {h:sondern auch} freundlich.'],['<b>zwar … aber</b>','хотя и … но','Er ist {h:zwar} jung, {h:aber} sehr erfahren.'],['<b>einerseits … andererseits</b>','с одной стороны … с другой','{h:Einerseits} ist es günstig, {h:andererseits} liegt es weit weg.'],['<b>je … desto / umso</b>','чем … тем','{h:Je} mehr ich lerne, {h:desto} besser verstehe ich.']]),
L(['<b>weder … noch</b> уже содержит отрицание: <b>nicht</b> не добавляют.','<b>sowohl … als auch</b> с подлежащим — глагол во множественном числе.','<b>je</b> + Komparativ → придаточное (глагол в конце); <b>desto</b> + Komparativ → главное предложение, глагол на 2-м месте.'])
].join(''),
tx:[`Mein Urlaub war [[sowohl]] erholsam [[als auch]] interessant. Wir hatten [[weder]] Regen [[noch]] Wind. Wir waren [[entweder]] am Strand [[oder]] in der Stadt. Das Essen war [[nicht nur]] günstig, [[sondern auch]] sehr lecker. Das Hotel war [[zwar]] klein, [[aber]] gemütlich. [[Je]] länger ich dort war, [[desto]] weniger wollte ich nach Hause.`,
`Мой отпуск был и спокойным, и интересным. У нас не было ни дождя, ни ветра. Мы были либо на пляже, либо в городе. Еда была не только недорогой, но и очень вкусной. Отель хоть и маленький, но уютный. Чем дольше я там был, тем меньше мне хотелось домой.`],
ex:[
['t','Ich habe ___ Zeit noch Lust.',['weder'],'У меня нет ни времени, ни желания.','<b>weder … noch</b> = ни … ни; <b>nicht</b> не нужен.'],
['c','Sie ist nicht nur klug, ___ auch freundlich.',['aber','sondern','sowie','und'],1,'Она не только умна, но и приветлива.','<b>nicht nur … sondern auch</b>.'],
['c','Ich fahre ___ nach Rom oder nach Wien.',['sowohl','weder','entweder','zwar'],2,'Я поеду либо в Рим, либо в Вену.','<b>entweder … oder</b> = либо … либо.'],
['c','Das Hotel ist zwar klein, ___ gemütlich.',['sondern','aber','noch','oder'],1,'Отель хоть и маленький, но уютный.','<b>zwar … aber</b> = хотя и … но.'],
['c','Je mehr ich lerne, ___ besser verstehe ich.',['als','desto','dann','wie'],1,'Чем больше я учусь, тем лучше понимаю.','<b>je … desto</b> + Komparativ. После desto глагол на 2-м месте.'],
['t','Sie spricht sowohl Deutsch ___ auch Englisch.',['als'],'Она говорит и по-немецки, и по-английски.','<b>sowohl … als auch</b> = как … так и.'],
['o','Je länger ich warte, desto nervöser werde ich.','Чем дольше я жду, тем более нервным я становлюсь.','je — придаточное (глагол в конце), desto — главное (глагол на 2-м месте).']
]}
];

/* ======================= INSERT ======================= */
at('akk','before',A1_before);
at('trenn','after',A1_after);
at('adj','after',A2_new);
at('rel','after',[...B1_new,...B2_new]);

/* ======================= EXTRA EXERCISES FOR EXISTING TOPICS ======================= */
more('akk',[
['t','Er ruft ___ an. (ich)',['mich'],'Он звонит мне.','anrufen + Akkusativ: ich → <b>mich</b>.'],
['c','Das Geschenk ist für ___ Lehrer.',['der','den','dem','des'],1,'Подарок для учителя.','<b>für</b> + Akkusativ. Lehrer — м. р.: <b>den</b> Lehrer.'],
['c','Ich habe ___ Schwester.',['ein','eine','einen','einem'],1,'У меня есть сестра.','Женский род в Akkusativ не меняется: <b>eine</b> Schwester.']]);
more('dat',[
['t','Wir fahren mit ___ Zug. (der)',['dem'],'Мы едем на поезде.','<b>mit</b> + Dativ. Zug — м. р.: <b>dem</b> Zug.'],
['c','Ich danke ___ für die Hilfe.',['dich','dir','du','dein'],1,'Я благодарю тебя за помощь.','<b>danken</b> + Dativ → <b>dir</b>.'],
['c','Er wohnt seit zwei Jahren bei ___ Onkel.',['sein','seinem','seinen','seiner'],1,'Он уже два года живёт у своего дяди.','<b>bei</b> + Dativ. Onkel — м. р.: sein<b>em</b>.']]);
more('mod',[
['c','___ ich Sie etwas fragen?',['Darf','Muss','Will','Soll'],0,'Можно мне Вас кое о чём спросить?','Вопрос о разрешении — <b>dürfen</b>: <b>Darf</b> ich …?'],
['t','Ihr ___ leise sein. (müssen)',['müsst'],'Вам нужно вести себя тихо.','ihr → <b>müsst</b>.'],
['t','Meine Oma ___ sehr gut kochen. (können)',['kann'],'Моя бабушка очень хорошо готовит.','er/sie/es → <b>kann</b>.']]);
more('wort',[
['o','Am Wochenende besuche ich meine Eltern.','В выходные я навещаю родителей.','Глагол на 2-м месте.',['Ich besuche am Wochenende meine Eltern.','Ich besuche meine Eltern am Wochenende.']],
['c','Выберите правильное предложение.',['Kommst du morgen?','Kommst morgen du?','Morgen du kommst?','Du morgen kommst?'],0,'','В Ja/Nein-вопросе глагол стоит на 1-м месте.'],
['t','Wo ___ du? (wohnen)',['wohnst'],'Где ты живёшь?','В W-вопросе глагол на 2-м месте: Wo <b>wohnst</b> du?']]);
more('trenn',[
['t','Der Zug kommt um acht Uhr ___. (ankommen)',['an'],'Поезд прибывает в восемь часов.','Приставка уходит в конец предложения.'],
['c','Partizip II от «mitkommen»:',['mitgekommen','gemitkommen','mitkommt','mitgekommt'],0,'','Отделяемая приставка: mit+ge+kommen → <b>mitgekommen</b>.'],
['c','Du musst die Tür ___.',['zumachen','zu machen','machst zu','zumacht'],0,'Ты должен закрыть дверь.','После модального глагола инфинитив целиком в конце.']]);
more('wech',[
['c','Das Auto steht ___ Garage. (Wo?)',['in der','in die','in den','in dem'],0,'Машина стоит в гараже.','Wo? → Dativ. Garage — ж. р.: in <b>der</b> Garage.'],
['t','Ich setze mich ___ Sofa. (auf)',['auf das','aufs'],'Я сажусь на диван.','sich setzen — «куда?» → Akkusativ: auf das = <b>aufs</b>.'],
['c','Er sitzt ___ Fenster.',['neben dem','neben den','neben der','neben das'],0,'Он сидит рядом с окном.','sitzen — «где?» → Dativ. Fenster — ср. р.: neben <b>dem</b>.']]);
more('perf',[
['c','Wir ___ nach Wien geflogen.',['haben','sind','waren','hatten'],1,'Мы улетели в Вену.','fliegen — движение: <b>sein</b>.'],
['t','Sie hat mir ein Geschenk ___. (bringen)',['gebracht'],'Она принесла мне подарок.','Смешанный глагол: bringen → <b>gebracht</b>.'],
['t','Ich habe gestern lange ___. (telefonieren)',['telefoniert'],'Вчера я долго разговаривал по телефону.','-ieren → без ge-: <b>telefoniert</b>.']]);
more('prat',[
['t','Sie ___ schon als Kind Klavier. (spielen)',['spielte'],'Она играла на пианино ещё ребёнком.','Правильный глагол: spiel + <b>-te</b>.'],
['c','Präteritum von «kommen» (ich):',['kommte','kam','gekommen','kamm'],1,'','kommen — неправильный глагол: ich <b>kam</b>.'],
['c','Er ___ gestern keine Zeit.',['hat','hatte','hätte','hast'],1,'Вчера у него не было времени.','haben в Präteritum: er <b>hatte</b>.']]);
more('neben',[
['c','Ich lerne Deutsch, ___ ich in Berlin arbeiten möchte.',['weil','obwohl','ob','wenn'],0,'Я учу немецкий, потому что хочу работать в Берлине.','<b>weil</b> + глагол в конце: …, weil ich … arbeiten <b>möchte</b>.'],
['t','Weil es regnet, ___ wir zu Hause. (bleiben)',['bleiben'],'Так как идёт дождь, мы остаёмся дома.','Придаточное стоит первым → сразу глагол главного: <b>bleiben</b> wir.'],
['o','Wenn es regnet, bleibe ich zu Hause.','Если идёт дождь, я остаюсь дома.','Придаточное первое → затем сразу глагол главного.',['Ich bleibe zu Hause, wenn es regnet.']]]);
more('refl',[
['c','Ich muss ___ beeilen.',['mich','mir','dich','sich'],0,'Мне нужно поторопиться.','ich → <b>mich</b>.'],
['c','Er kauft ___ ein neues Handy.',['sich','ihm','ihn','mich'],0,'Он покупает себе новый телефон.','Akkusativ уже занят (ein Handy) → Dativ: er → <b>sich</b>.'],
['t','Habt ihr ___ gut erholt?',['euch'],'Вы хорошо отдохнули?','ihr → <b>euch</b>.']]);
more('adj',[
['c','Wir haben ein ___ Problem.',['groß','große','großes','großen'],2,'У нас большая проблема.','Problem — ср. р., Akkusativ после ein: ein groß<b>es</b> Problem.'],
['t','Ich trinke gern den ___ Tee. (grün)',['grünen'],'Я охотно пью зелёный чай.','den + м. р., Akkusativ → <b>-en</b>.'],
['c','Mit dem ___ Auto fahren wir nach Italien.',['neue','neuen','neues','neuer'],1,'На новой машине мы едем в Италию.','Dativ → всегда <b>-en</b>: mit dem neu<b>en</b> Auto.']]);
more('kon2',[
['c','Ich ___ gern ein Eis.',['hätte','habe','hatte','wäre'],0,'Я бы хотел мороженое.','Вежливая форма: <b>hätte</b> gern …'],
['c','Wenn ich du ___, würde ich das nicht tun.',['bin','war','wäre','würde'],2,'На твоём месте я бы этого не делал.','Нереальное условие: sein → <b>wäre</b>.'],
['t','Wenn ich Zeit hätte, ___ ich dich besuchen. (werden)',['würde'],'Если бы у меня было время, я бы навестил тебя.','Главная часть: <b>würde</b> + Infinitiv.']]);
more('pass',[
['c','Der Brief ___ gestern geschrieben.',['wird','wurde','ist','hat'],1,'Письмо было написано вчера.','Прошедшее время: <b>wurde</b> + Partizip II.'],
['t','Die Fenster ___ jeden Tag geputzt. (werden)',['werden'],'Окна моют каждый день.','Мн. число → <b>werden</b> + Partizip II.'],
['c','Das Haus ist 1990 gebaut ___.',['worden','geworden','werden','wurde'],0,'Дом был построен в 1990 году.','Perfekt Passiv: ist + Partizip II + <b>worden</b>.']]);
more('rel',[
['c','Die Frau, ___ dort steht, ist meine Lehrerin.',['der','die','den','dem'],1,'Женщина, которая стоит там, — моя учительница.','Ж. р., Nominativ: <b>die</b>.'],
['t','Das Kind, ___ ich helfe, ist krank. (Relativpronomen)',['dem'],'Ребёнок, которому я помогаю, болен.','helfen + Dativ; ср. р. → <b>dem</b>.'],
['c','Das sind die Leute, ___ ich gestern gesprochen habe.',['mit denen','mit den','mit die','mit der'],0,'Это люди, с которыми я вчера говорил.','mit + Dativ, мн. число → <b>mit denen</b>.']]);
})();