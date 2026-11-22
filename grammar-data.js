/* VocabFlow — Grammar topics (German).
   Each topic: id, lv (level), t (title), ru (Russian title), th (theory, HTML), tx [German text, Russian translation], ex (exercises).
   Colour markers inside theory / explanations:  {m:den} masculine · {f:die} feminine · {n:das} neuter · {p:..} plural · {h:..} highlight
   In texts, [[...]] marks the grammar of the topic.
   Exercises:
     ['c', sentence with ___ (or an instruction), [options], indexOfCorrect, 'Russian translation', 'why']
     ['t', sentence with ___, [accepted answers], 'Russian translation', 'why']
     ['o', correct sentence, 'Russian translation', 'why', [other accepted word orders]]   (a leading "!" keeps the capital of the first word) */
(()=>{
const H=s=>`<h3>${s}</h3>`,P=s=>`<p>${s}</p>`,
T=r=>`<div class="gs"><table class="gt">${r.map((a,i)=>'<tr>'+a.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')+'</tr>').join('')}</table></div>`,
X=a=>a.map(([d,r])=>`<div class="gx">${d}${r?`<small>${r}</small>`:''}</div>`).join(''),
N=s=>`<div class="gn">${s}</div>`,W=s=>`<div class="gn gw">${s}</div>`,
L=a=>'<ul>'+a.map(s=>`<li>${s}</li>`).join('')+'</ul>';

window.GRAM=[
/* ================= A1 ================= */
{id:'akk',lv:'A1',t:'Akkusativ',ru:'Винительный падеж — кого? что?',
th:[
H('Когда нужен Akkusativ'),
P('Akkusativ отвечает на вопрос <b>Wen? Was?</b> (кого? что?) — это прямое дополнение, то, на что направлено действие.'),
X([['Ich sehe {m:den} Mann.','Я вижу мужчину.'],['Wir kaufen {m:einen} Tisch.','Мы покупаем стол.']]),
H('Что меняется'),
P('Из всех артиклей в Akkusativ меняется <b>только мужской род</b>:'),
T([['','Nominativ','Akkusativ'],['{m:м. р.}','der / ein / mein Mann','{m:den} / {m:einen} / {m:meinen} Mann'],['{f:ж. р.}','die / eine Frau','die / eine Frau'],['{n:ср. р.}','das / ein Kind','das / ein Kind'],['{p:мн. ч.}','die Kinder','die Kinder']]),
P('Местоимения: ich → <b>mich</b>, du → <b>dich</b>, er → <b>ihn</b>, wir → <b>uns</b>, ihr → <b>euch</b> (sie, es, Sie — без изменений).'),
H('Предлоги с Akkusativ'),
P('<b>durch, für, gegen, ohne, um</b> (+ bis, entlang) — после них всегда Akkusativ.'),
X([['Das Geschenk ist für {m:den} Lehrer.','Подарок для учителя.'],['Wir gehen ohne {m:meinen} Bruder.','Мы идём без моего брата.']]),
W('После <b>sein, werden, bleiben</b> стоит Nominativ: Das ist {h:ein} Hund (не «einen»).')
].join(''),
tx:[`Am Samstag besuche ich [[meinen Bruder]]. Er hat [[einen Hund]], [[eine Katze]] und [[ein Fahrrad]]. Ich kaufe [[einen Kuchen]] für [[ihn]]. Wir gehen durch [[den Park]] und sehen [[den See]]. Ohne [[meinen Bruder]] ist das Wochenende langweilig.`,
`В субботу я навещаю своего брата. У него есть собака, кошка и велосипед. Я покупаю для него пирог. Мы идём через парк и видим озеро. Без моего брата выходные скучные.`],
ex:[
['c','Ich kaufe ___ Computer.',['ein','einen','einem','einer'],1,'Я покупаю компьютер.','Computer — {m:der} Computer (м. р.). После kaufen нужен Akkusativ: ein → <b>einen</b>.'],
['c','Siehst du ___ Frau dort?',['den','die','der','dem'],1,'Ты видишь ту женщину там?','Frau — женский род. В Akkusativ женский род не меняется: <b>die</b> Frau.'],
['t','Wir brauchen ___ Tisch. (ein)',['einen'],'Нам нужен стол.','Tisch — м. р., Akkusativ: ein → <b>einen</b>.'],
['c','Das ist ___ Hund.',['ein','einen','einem','einer'],0,'Это собака.','После <b>sein</b> стоит Nominativ, а не Akkusativ: Das ist <b>ein</b> Hund.'],
['t','Ich besuche ___ Bruder. (mein)',['meinen'],'Я навещаю своего брата.','Bruder — м. р., Akkusativ: mein → <b>meinen</b>.'],
['c','Wir gehen durch ___ Park.',['der','den','dem','die'],1,'Мы идём через парк.','<b>durch</b> всегда требует Akkusativ. Park — м. р.: der → <b>den</b>.'],
['o','Heute kaufe ich einen Kuchen.','Сегодня я покупаю пирог.','Глагол стоит на втором месте. Если в начале «heute», подлежащее идёт после глагола.',['Ich kaufe heute einen Kuchen.']]
]},

{id:'dat',lv:'A1',t:'Dativ',ru:'Дательный падеж — кому? чему?',
th:[
H('Когда нужен Dativ'),
P('Dativ отвечает на вопрос <b>Wem?</b> (кому? чему?) — это косвенное дополнение.'),
X([['Ich helfe {m:dem} Mann.','Я помогаю мужчине.'],['Sie gibt {f:der} Frau ein Buch.','Она даёт женщине книгу.']]),
H('Артикли'),
T([['','м. р.','ж. р.','ср. р.','мн. ч.'],['Nominativ','der / ein','die / eine','das / ein','die'],['Dativ','{m:dem} / {m:einem}','{f:der} / {f:einer}','{n:dem} / {n:einem}','{p:den} (+ -n)']]),
P('Во множественном числе к существительному добавляется <b>-n</b>: den Kinder<b>n</b> (но: den Frauen, den Autos — там уже есть -n или -s).'),
P('Местоимения: ich → <b>mir</b>, du → <b>dir</b>, er/es → <b>ihm</b>, sie → <b>ihr</b>, wir → <b>uns</b>, ihr → <b>euch</b>, sie/Sie → <b>ihnen/Ihnen</b>.'),
H('Предлоги с Dativ'),
P('<b>aus, bei, mit, nach, seit, von, zu</b> (+ gegenüber, ab, außer). Мнемоника: «aus – bei – mit – nach – seit – von – zu».'),
X([['Ich fahre mit {m:dem} Bus zu {f:meiner} Oma.','Я еду на автобусе к бабушке.']]),
H('Глаголы с Dativ'),
P('<b>helfen, danken, gefallen, gehören, schmecken, passen, antworten, gratulieren, fehlen</b> — дополнение к ним ставится в Dativ.'),
X([['Das Buch gehört mir.','Книга принадлежит мне.'],['Die Suppe schmeckt dem Kind.','Суп нравится ребёнку.']]),
H('Два дополнения'),
P('Если есть и Dativ, и Akkusativ: обычно сначала <b>Dativ</b> (кому), потом <b>Akkusativ</b> (что). Но местоимение всегда стоит раньше существительного.'),
X([['Ich gebe {h:dem Kind} {h:einen Ball}.','Я даю ребёнку мяч.'],['Ich gebe {h:ihm} den Ball.','Я даю ему мяч.']])
].join(''),
tx:[`Heute fahre ich [[mit dem Bus]] [[zu meiner Oma]]. Sie wohnt [[seit zehn Jahren]] [[bei ihrer Schwester]]. Ich bringe [[ihr]] Blumen und [[meinem Opa]] ein Buch. Nach [[dem Essen]] helfe ich [[ihnen]] im Garten. Der Kuchen schmeckt [[mir]] sehr gut.`,
`Сегодня я еду на автобусе к своей бабушке. Она уже десять лет живёт у своей сестры. Я приношу ей цветы, а моему дедушке — книгу. После еды я помогаю им в саду. Пирог мне очень нравится.`],
ex:[
['c','Ich fahre mit ___ Bus.',['der','dem','den','das'],1,'Я еду на автобусе.','<b>mit</b> всегда + Dativ. Bus — м. р.: <b>dem</b> Bus.'],
['c','Sie hilft ___ Kind.',['das','dem','den','der'],1,'Она помогает ребёнку.','<b>helfen</b> требует Dativ. Kind — ср. р.: <b>dem</b> Kind.'],
['t','Das Buch gehört ___ Frau. (die)',['der'],'Книга принадлежит женщине.','<b>gehören</b> + Dativ. Женский род в Dativ: die → <b>der</b>.'],
['c','Wir wohnen bei ___ Eltern. (mein)',['meine','meinen','meinem','meiner'],1,'Мы живём у моих родителей.','<b>bei</b> + Dativ. Множественное число в Dativ: mein → <b>meinen</b>.'],
['t','Nach ___ Unterricht gehe ich nach Hause. (der)',['dem'],'После урока я иду домой.','<b>nach</b> + Dativ. Unterricht — м. р.: der → <b>dem</b>.'],
['c','Ich gebe ___ eine Blume. (sie)',['sie','ihr','ihm','ihnen'],1,'Я дарю ей цветок.','geben: «кому?» — Dativ. «Она» в Dativ — <b>ihr</b>.'],
['c','Der Pullover passt ___ gut.',['mich','mir','mein','ich'],1,'Свитер мне хорошо подходит.','<b>passen</b> + Dativ → <b>mir</b>.'],
['o','Ich gebe dem Kind einen Ball.','Я даю ребёнку мяч.','Dativ (кому?) обычно стоит перед Akkusativ (что?).',['Dem Kind gebe ich einen Ball.']]
]},

{id:'mod',lv:'A1',t:'Modalverben',ru:'Модальные глаголы',
th:[
H('Шесть модальных глаголов'),
T([['','können','müssen','dürfen','wollen','sollen','möchten'],['ich','kann','muss','darf','will','soll','möchte'],['du','kannst','musst','darfst','willst','sollst','möchtest'],['er/sie/es','kann','muss','darf','will','soll','möchte'],['wir/sie/Sie','können','müssen','dürfen','wollen','sollen','möchten'],['ihr','könnt','müsst','dürft','wollt','sollt','möchtet']]),
P('У <b>ich</b> и <b>er/sie/es</b> форма одинаковая, без окончания.'),
H('Значения'),
L(['<b>können</b> — мочь, уметь','<b>müssen</b> — быть обязанным, нужно','<b>dürfen</b> — иметь разрешение; <i>nicht dürfen</i> — нельзя','<b>wollen</b> — хотеть (твёрдое желание)','<b>sollen</b> — следует, должен (по чьему-то требованию или совету)','<b>möchten</b> — хотел бы (вежливо)']),
H('Порядок слов'),
P('Модальный глагол — на 2-м месте, смысловой глагол в <b>инфинитиве — в конце</b>.'),
X([['Ich {h:muss} heute früh {h:aufstehen}.','Мне сегодня нужно рано встать.'],['Können Sie mir {h:helfen}?','Вы можете мне помочь?']]),
W('<b>nicht müssen</b> ≠ <b>nicht dürfen</b>! Du musst nicht kommen — тебе <i>не обязательно</i> приходить. Du darfst nicht kommen — тебе <i>нельзя</i> приходить.')
].join(''),
tx:[`Ich [[muss]] heute lange arbeiten, aber ich [[will]] auch Sport machen. Meine Kollegin [[kann]] sehr gut Gitarre spielen. Hier [[darf]] man nicht rauchen. Der Arzt sagt: Du [[sollst]] mehr Wasser trinken. Wir [[möchten]] am Wochenende wandern. [[Können]] wir das bei diesem Wetter?`,
`Сегодня мне нужно долго работать, но я хочу ещё и заняться спортом. Моя коллега очень хорошо умеет играть на гитаре. Здесь нельзя курить. Врач говорит: тебе следует пить больше воды. Мы хотели бы в выходные сходить в поход. А получится ли это при такой погоде?`],
ex:[
['t','Ich ___ gut schwimmen. (können)',['kann'],'Я хорошо умею плавать.','У ich форма без окончания: ich <b>kann</b>.'],
['t','Du ___ heute zum Arzt gehen. (müssen)',['musst'],'Тебе сегодня нужно к врачу.','du → <b>musst</b>.'],
['c','Hier ___ man nicht parken.',['darf','kann','muss','will'],0,'Здесь нельзя парковаться.','«Нельзя» — это <b>nicht dürfen</b>.'],
['c','Er ___ Pilot werden.',['willst','will','wollen','wollt'],1,'Он хочет стать пилотом.','er → <b>will</b> (без окончания, как у ich).'],
['t','Wir ___ im Sommer nach Italien fahren. (wollen)',['wollen'],'Летом мы хотим поехать в Италию.','wir → <b>wollen</b>.'],
['c','Du ___ nicht kommen. Es ist freiwillig.',['darfst','musst','kannst','sollst'],1,'Тебе не обязательно приходить. Это добровольно.','<b>nicht müssen</b> = не обязательно. (<i>nicht dürfen</i> = нельзя.)'],
['o','Ich kann heute leider nicht kommen.','К сожалению, сегодня я не могу прийти.','Модальный глагол — на 2-м месте, инфинитив — в конце.',['Heute kann ich leider nicht kommen.','Leider kann ich heute nicht kommen.']]
]},

{id:'wort',lv:'A1',t:'Wortstellung',ru:'Порядок слов в предложении',
th:[
H('Глагол — на втором месте'),
P('В повествовательном предложении спрягаемый глагол <b>всегда на 2-м месте</b>. На 1-м месте может стоять любой элемент — тогда подлежащее уходит за глагол (инверсия).'),
T([['1','2','3 …'],['Ich','{h:gehe}','heute ins Kino.'],['Heute','{h:gehe}','ich ins Kino.'],['Ins Kino','{h:gehe}','ich heute.']]),
H('Вопросы'),
T([['Тип','Порядок','Пример'],['W-Frage','W-слово + глагол + подлежащее','Wann {h:kommst} du?'],['Ja/Nein-Frage','глагол на 1-м месте','{h:Kommst} du morgen?']]),
H('Рамка (Satzklammer)'),
P('Если глагол «из двух частей», спрягаемая часть — на 2-м месте, вторая — в самом конце: модальный глагол + инфинитив, haben/sein + Partizip II, отделяемая приставка.'),
X([['Ich {h:muss} heute {h:arbeiten}.',''],['Ich {h:habe} gestern Fußball {h:gespielt}.',''],['Er {h:steht} früh {h:auf}.','']]),
H('Te-Ka-Mo-Lo'),
P('Обычный порядок обстоятельств: <b>Te</b>mporal (когда) → <b>Ka</b>usal (почему) → <b>Mo</b>dal (как) → <b>Lo</b>kal (где / куда).'),
X([['Ich fahre {h:morgen} {h:mit dem Zug} {h:nach Berlin}.','Я еду завтра на поезде в Берлин.']]),
N('<b>und, aber, oder, denn, sondern</b> не влияют на порядок слов: Ich bin müde, aber ich arbeite.')
].join(''),
tx:[`Am Morgen [[stehe]] ich um sieben Uhr [[auf]]. Dann [[frühstücke]] ich mit meiner Familie. Gestern [[habe]] ich lange [[gearbeitet]]. Heute [[muss]] ich früh zur Arbeit [[fahren]]. Warum [[fahre]] ich so früh? Ich [[habe]] um acht ein Meeting. Aber am Abend [[habe]] ich Zeit für Sport.`,
`Утром я встаю в семь часов. Потом я завтракаю с семьёй. Вчера я долго работал. Сегодня мне нужно рано ехать на работу. Почему я еду так рано? В восемь у меня встреча. Но вечером у меня есть время для спорта.`],
ex:[
['o','Heute gehe ich ins Kino.','Сегодня я иду в кино.','Глагол всегда на втором месте.',['Ich gehe heute ins Kino.']],
['o','Ich muss morgen früh aufstehen.','Мне завтра нужно рано встать.','Модальный глагол — на 2-м месте, инфинитив — в конце.',['Morgen muss ich früh aufstehen.']],
['o','Wann kommst du nach Hause?','Когда ты придёшь домой?','В вопросе с вопросительным словом глагол стоит на втором месте.'],
['c','Выберите правильный порядок слов.',['Heute ich gehe ins Kino.','Heute gehe ich ins Kino.','Heute gehe ins Kino ich.','Ich heute gehe ins Kino.'],1,'','Глагол на 2-м месте: Heute <b>gehe</b> ich …'],
['c','Выберите правильное предложение.',['Ich habe gestern einen Film gesehen.','Ich habe gesehen gestern einen Film.','Ich gestern habe einen Film gesehen.','Gestern ich habe einen Film gesehen.'],0,'','Спрягаемая часть — на 2-м месте, Partizip II — в самом конце.'],
['c','Выберите порядок «время — способ — место».',['Ich fahre morgen mit dem Zug nach Berlin.','Ich fahre nach Berlin mit dem Zug morgen.','Ich fahre mit dem Zug morgen nach Berlin.','Ich fahre nach Berlin morgen mit dem Zug.'],0,'','Te-Ka-Mo-Lo: <b>morgen</b> (когда) → <b>mit dem Zug</b> (как) → <b>nach Berlin</b> (куда).'],
['t','Er ___ gestern einen Brief geschrieben. (haben)',['hat'],'Вчера он написал письмо.','Спрягаемая форма haben — на 2-м месте, Partizip II — в конце.']
]},

{id:'trenn',lv:'A1',t:'Trennbare Verben',ru:'Глаголы с отделяемыми приставками',
th:[
H('Отделяемые приставки'),
P('У многих глаголов есть приставка (<b>an-, auf-, aus-, ab-, ein-, mit-, vor-, zu-, zurück-, weg-, fern-, zusammen-</b> …). Она несёт ударение и в Präsens уходит <b>в конец предложения</b>.'),
T([['Инфинитив','Предложение'],['aufstehen','Ich {h:stehe} um 7 Uhr {h:auf}.'],['einkaufen','Wir {h:kaufen} im Supermarkt {h:ein}.'],['anrufen','Er {h:ruft} mich jeden Tag {h:an}.'],['mitkommen','{h:Kommst} du {h:mit}?']]),
H('Другие формы'),
L(['С модальным глаголом глагол остаётся целым: Ich muss früh <b>aufstehen</b>.','В придаточном — тоже целиком: …, weil ich früh <b>aufstehe</b>.','Perfekt: <b>ge</b> стоит между приставкой и корнем: <b>auf</b>ge<b>standen</b>, <b>ein</b>ge<b>kauft</b>, <b>an</b>ge<b>rufen</b>.']),
W('Неотделяемые приставки: <b>be-, ge-, er-, ver-, zer-, ent-, emp-</b>. Ударения на приставке нет, и она не уходит в конец: Ich <b>verstehe</b> dich. Perfekt — без ge-: <b>verstanden</b>, <b>besucht</b>.')
].join(''),
tx:[`Mein Tag beginnt früh. Ich [[stehe]] um sechs Uhr [[auf]]. Dann [[räume]] ich die Küche [[auf]] und [[kaufe]] im Supermarkt [[ein]]. Mittags [[rufe]] ich meine Freundin [[an]]. Sie [[kommt]] am Abend [[mit]] ins Kino. Der Film [[fängt]] um acht Uhr [[an]]. Wir [[müssen]] pünktlich [[ankommen]].`,
`Мой день начинается рано. Я встаю в шесть часов. Потом я убираю кухню и делаю покупки в супермаркете. В обед я звоню своей подруге. Вечером она идёт со мной в кино. Фильм начинается в восемь часов. Нам нужно прийти вовремя.`],
ex:[
['t','Ich stehe um sieben Uhr ___. (aufstehen)',['auf'],'Я встаю в семь часов.','Приставка уходит в конец предложения.'],
['t','Ruf mich bitte ___! (anrufen)',['an'],'Позвони мне, пожалуйста!','В повелительном наклонении приставка тоже в конце: Ruf … <b>an</b>!'],
['c','Выберите правильное предложение.',['Ich kaufe jeden Tag ein.','Ich einkaufe jeden Tag.','Ich kaufe ein jeden Tag.','Ich ein kaufe jeden Tag.'],0,'','einkaufen: <b>kaufe</b> … <b>ein</b> — приставка в самом конце.'],
['c','Ich habe die Wohnung ___.',['aufgeräumt','geaufräumt','aufräumt','aufgeräumet'],0,'Я убрал(а) квартиру.','В Perfekt <b>ge</b> встаёт между приставкой и корнем: auf+<b>ge</b>+räumt.'],
['c','Какой глагол НЕ отделяемый?',['aufstehen','verstehen','einladen','mitkommen'],1,'','У <b>verstehen</b> приставка <b>ver-</b> неотделяемая: Ich verstehe dich.'],
['c','Ich muss früh ___.',['aufstehen','stehe auf','auf stehen','aufstehe'],0,'Мне нужно рано вставать.','После модального глагола инфинитив остаётся целым и стоит в конце.'],
['o','Der Film fängt um acht Uhr an.','Фильм начинается в восемь часов.','anfangen — отделяемый: <b>fängt</b> … <b>an</b>.',['Um acht Uhr fängt der Film an.']]
]},

/* ================= A2 ================= */
{id:'wech',lv:'A2',t:'Wechselpräpositionen',ru:'Предлоги с Dativ и Akkusativ',
th:[
H('Wo? или Wohin?'),
P('Девять предлогов могут требовать и Dativ, и Akkusativ: <b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b>.'),
T([['Вопрос','Значение','Падеж','Пример'],['<b>Wo?</b> (где?)','положение, нет движения','{h:Dativ}','Das Buch liegt auf {m:dem} Tisch.'],['<b>Wohin?</b> (куда?)','движение, направление','{h:Akkusativ}','Ich lege das Buch auf {m:den} Tisch.']]),
H('Пары глаголов'),
T([['Wo? (Dativ)','Wohin? (Akkusativ)'],['stehen — стоять','stellen — ставить'],['liegen — лежать','legen — класть'],['sitzen — сидеть','setzen — сажать; sich setzen — садиться'],['hängen — висеть','hängen — вешать']]),
P('Сокращения: in + dem = <b>im</b>, an + dem = <b>am</b>, in + das = <b>ins</b>, an + das = <b>ans</b>, auf + das = <b>aufs</b>.'),
N('Глаголы движения (gehen, fahren, kommen) обычно отвечают на «Wohin?»: Ich gehe in {f:die} Schule. А sein, wohnen, arbeiten — на «Wo?»: Ich bin in {f:der} Schule.')
].join(''),
tx:[`Ich komme nach Hause. Die Tasche stelle ich [[auf den Stuhl]] und die Jacke hänge ich [[an die Tür]]. Die Katze sitzt [[auf dem Sofa]]. Der Hund liegt [[unter dem Tisch]]. Dann gehe ich [[in die Küche]], denn das Essen steht [[im Ofen]]. Danach setze ich mich [[an den Tisch]].`,
`Я прихожу домой. Сумку я ставлю на стул, а куртку вешаю на дверь. Кошка сидит на диване. Собака лежит под столом. Потом я иду на кухню, потому что еда стоит в духовке. После этого я сажусь за стол.`],
ex:[
['c','Das Bild hängt ___ Wand. (Wo?)',['an der','an die','an den','an dem'],0,'Картина висит на стене.','Wo? → Dativ. Wand — ж. р.: die → <b>der</b>: an <b>der</b> Wand.'],
['c','Ich hänge das Bild ___ Wand. (Wohin?)',['an der','an die','an dem','an das'],1,'Я вешаю картину на стену.','Wohin? → Akkusativ: an <b>die</b> Wand.'],
['c','Er geht ___ Schule.',['in der','in die','in dem','im'],1,'Он идёт в школу.','Движение «куда?» → Akkusativ: in <b>die</b> Schule.'],
['t','Die Kinder spielen ___ Garten. (in)',['im','in dem'],'Дети играют в саду.','Wo? → Dativ. in + dem = <b>im</b>.'],
['c','Ich lege das Handy ___ Tisch.',['auf dem','auf den','auf der','auf das'],1,'Я кладу телефон на стол.','legen — «куда?» → Akkusativ. Tisch — м. р.: auf <b>den</b> Tisch.'],
['c','Das Handy liegt ___ Tisch.',['auf dem','auf den','auf der','auf das'],0,'Телефон лежит на столе.','liegen — «где?» → Dativ: auf <b>dem</b> Tisch.'],
['t','Stell die Flasche ___ Kühlschrank! (in)',['in den'],'Поставь бутылку в холодильник!','stellen — «куда?» → Akkusativ. Kühlschrank — м. р.: in <b>den</b>.']
]},

{id:'perf',lv:'A2',t:'Perfekt',ru:'Разговорное прошедшее время',
th:[
H('Строение'),
P('<b>haben</b> / <b>sein</b> (на 2-м месте) + <b>Partizip II</b> (в конце).'),
X([['Ich {h:habe} gestern einen Film {h:gesehen}.','Вчера я посмотрел фильм.'],['Wir {h:sind} nach Berlin {h:gefahren}.','Мы поехали в Берлин.']]),
H('Partizip II'),
T([['Тип','Образование','Пример'],['правильные','ge-…-t','machen → <b>ge</b>mach<b>t</b>; spielen → gespielt'],['неправильные','ge-…-en (часто меняется гласная)','sehen → gesehen; schreiben → geschrieben; trinken → getrunken; finden → gefunden'],['смешанные','ge-…-t + изменение корня','bringen → gebracht; denken → gedacht; wissen → gewusst'],['-ieren и неотделяемые приставки','<b>без ge-</b>','studieren → studiert; besuchen → besucht; verstehen → verstanden'],['отделяемые','ge между приставкой и корнем','einkaufen → eingekauft; aufstehen → aufgestanden']]),
H('haben или sein?'),
P('С <b>sein</b>: глаголы движения (gehen, fahren, kommen, fliegen, laufen), смены состояния (einschlafen, aufstehen, werden) и <b>sein, bleiben, passieren</b>. Всё остальное — с <b>haben</b>.'),
X([['Ich {h:bin} nach Hause {h:gegangen}.',''],['Er {h:ist} zu Hause {h:geblieben}.',''],['Wir {h:haben} Kaffee {h:getrunken}.','']])
].join(''),
tx:[`Gestern [[habe]] ich lange [[geschlafen]]. Dann [[bin]] ich in die Stadt [[gefahren]]. Dort [[habe]] ich Brot und Käse [[gekauft]] und eine Freundin [[getroffen]]. Wir [[haben]] Kaffee [[getrunken]] und viel [[gesprochen]]. Am Abend [[bin]] ich nach Hause [[gegangen]]. Ich [[habe]] noch ein Buch [[gelesen]] und [[bin]] dann [[eingeschlafen]].`,
`Вчера я долго спал. Потом я поехал в город. Там я купил хлеб и сыр и встретил подругу. Мы пили кофе и много разговаривали. Вечером я пошёл домой. Я ещё почитал книгу и потом уснул.`],
ex:[
['t','Gestern ___ ich ins Kino gegangen. (sein)',['bin'],'Вчера я ходил в кино.','gehen — глагол движения → <b>sein</b>.'],
['t','Wir haben Fußball ___. (spielen)',['gespielt'],'Мы играли в футбол.','Правильный глагол: <b>ge</b>spiel<b>t</b>.'],
['t','Er hat ein Buch ___. (lesen)',['gelesen'],'Он прочитал книгу.','Неправильный глагол: lesen → <b>gelesen</b>.'],
['c','Ich ___ gestern lange geschlafen.',['bin','habe','war','werde'],1,'Вчера я долго спал.','schlafen — не движение: <b>haben</b>.'],
['c','Sie ___ nach Hamburg gefahren.',['hat','ist','haben','sind'],1,'Она поехала в Гамбург.','fahren — движение: <b>sein</b>. Sie (она) → <b>ist</b>.'],
['c','Partizip II от «studieren»:',['gestudiert','studiert','gestudieren','studieret'],1,'','Глаголы на -ieren — <b>без ge-</b>: studiert.'],
['t','Ich habe das Wort nicht ___. (verstehen)',['verstanden'],'Я не понял(а) это слово.','Неотделяемая приставка ver- → без ge-: <b>verstanden</b>.'],
['o','Ich habe gestern einen Film gesehen.','Вчера я посмотрел фильм.','haben — на 2-м месте, Partizip II — в конце.',['Gestern habe ich einen Film gesehen.']]
]},

{id:'prat',lv:'A2',t:'Präteritum',ru:'Простое прошедшее (рассказ)',
th:[
P('<b>Präteritum</b> — прошедшее время для письменной речи (рассказы, новости). В разговоре обычно Perfekt, но <b>sein, haben и модальные глаголы</b> почти всегда употребляют в Präteritum.'),
H('Правильные глаголы: основа + -te'),
T([['','machen','wohnen'],['ich','machte','wohnte'],['du','machtest','wohntest'],['er/sie/es','machte','wohnte'],['wir/sie','machten','wohnten'],['ihr','machtet','wohntet']]),
H('Неправильные: меняется гласная'),
P('gehen → <b>ging</b>, kommen → <b>kam</b>, sehen → <b>sah</b>, fahren → <b>fuhr</b>, essen → <b>aß</b>, schreiben → <b>schrieb</b>, finden → <b>fand</b>. Окончания: ich/er — <b>без окончания</b>, du -st, wir/sie -en, ihr -t.'),
H('Самые важные формы'),
T([['','sein','haben','können','müssen','wollen'],['ich / er','war','hatte','konnte','musste','wollte'],['du','warst','hattest','konntest','musstest','wolltest'],['wir / sie','waren','hatten','konnten','mussten','wollten']]),
N('У модальных глаголов в Präteritum <b>нет умлаута</b>: ich konnte, ich musste (умлаут появляется только в Konjunktiv II).')
].join(''),
tx:[`Letzten Sommer [[war]] ich in Italien. Das Wetter [[war]] wunderbar. Ich [[hatte]] viel Zeit und [[konnte]] jeden Tag schwimmen. Morgens [[ging]] ich zum Strand, nachmittags [[besuchte]] ich alte Städte. Einmal [[fuhr]] ich mit dem Zug nach Rom. Dort [[sah]] ich das Kolosseum und [[aß]] eine große Pizza. Ich [[wollte]] gar nicht nach Hause.`,
`Прошлым летом я был в Италии. Погода была прекрасной. У меня было много времени, и я мог плавать каждый день. По утрам я ходил на пляж, а после обеда осматривал старые города. Однажды я поехал на поезде в Рим. Там я увидел Колизей и съел большую пиццу. Мне совсем не хотелось домой.`],
ex:[
['t','Gestern ___ ich sehr müde. (sein)',['war'],'Вчера я был очень уставшим.','ich <b>war</b>.'],
['t','Er ___ keine Zeit. (haben)',['hatte'],'У него не было времени.','er <b>hatte</b>.'],
['t','Wir ___ gestern nicht kommen. (können)',['konnten'],'Вчера мы не могли прийти.','wir <b>konnten</b> (в Präteritum без умлаута).'],
['c','Präteritum von «gehen» (er):',['gehte','ging','gegangen','geht'],1,'','gehen — неправильный глагол: er <b>ging</b>.'],
['c','Präteritum von «machen» (sie):',['machte','mach','gemacht','muchte'],0,'','Правильный глагол: основа + <b>-te</b>: machte.'],
['c','Sie ___ früher in Berlin.',['wohnte','wohnt','gewohnt','wohnen'],0,'Раньше она жила в Берлине.','Рассказ о прошлом: wohnen + -te → <b>wohnte</b>.'],
['t','Wir ___ mit dem Zug nach München. (fahren)',['fuhren'],'Мы ехали на поезде в Мюнхен.','fahren → <b>fuhr</b>; wir → <b>fuhren</b>.'],
['o','Ich wollte gestern ins Kino gehen.','Вчера я хотел пойти в кино.','Модальный глагол в Präteritum — <b>wollte</b> на 2-м месте, инфинитив — в конце.',['Gestern wollte ich ins Kino gehen.']]
]},

{id:'neben',lv:'A2',t:'Nebensätze',ru:'Придаточные: weil, dass, wenn, obwohl, ob',
th:[
H('Глагол — в конец'),
P('В придаточном предложении спрягаемый глагол стоит <b>в самом конце</b>. Придаточное отделяется запятой.'),
T([['Союз','Значение','Пример'],['<b>weil</b>','потому что','Ich bleibe hier, weil ich müde {h:bin}.'],['<b>dass</b>','что','Er sagt, dass er heute nicht {h:kommt}.'],['<b>wenn</b>','если; когда (повторяется)','Wenn es regnet, bleibe ich zu Hause.'],['<b>obwohl</b>','хотя','Ich gehe, obwohl ich krank {h:bin}.'],['<b>ob</b>','ли','Ich weiß nicht, ob er {h:kommt}.']]),
H('Если глагол составной'),
P('В конце стоят <b>оба</b> элемента, а спрягаемая часть — самая последняя: …, weil ich arbeiten {h:muss}. …, weil ich gestern gearbeitet {h:habe}. …, weil ich früh {h:aufstehe}.'),
H('Придаточное — на первом месте'),
P('Тогда оно целиком занимает 1-ю позицию, и сразу за запятой идёт глагол главного предложения:'),
X([['Weil ich krank bin, {h:bleibe} ich zu Hause.','Так как я болен, я остаюсь дома.']]),
W('<b>weil</b> → глагол в конце, а <b>denn</b> (тоже «потому что») порядок не меняет: Ich bleibe zu Hause, denn ich <b>bin</b> krank.')
].join(''),
tx:[`Ich bleibe heute zu Hause, [[weil]] ich krank [[bin]]. Der Arzt sagt, [[dass]] ich viel schlafen [[soll]]. [[Wenn]] ich mich besser [[fühle]], gehe ich wieder zur Arbeit. [[Obwohl]] ich müde [[bin]], kann ich nicht schlafen. Ich frage mich, [[ob]] ich morgen schon arbeiten [[kann]].`,
`Сегодня я остаюсь дома, потому что я болен. Врач говорит, что мне нужно много спать. Когда мне станет лучше, я снова пойду на работу. Хотя я устал, я не могу уснуть. Я спрашиваю себя, смогу ли я завтра уже работать.`],
ex:[
['c','Выберите правильный порядок слов.',['Ich bleibe zu Hause, weil ich bin krank.','Ich bleibe zu Hause, weil ich krank bin.','Ich bleibe zu Hause, weil bin ich krank.','Ich bleibe zu Hause, weil krank ich bin.'],1,'','После <b>weil</b> глагол — в конце: …, weil ich krank <b>bin</b>.'],
['t','Ich weiß nicht, ob er morgen ___. (kommen)',['kommt'],'Я не знаю, придёт ли он завтра.','В придаточном глагол стоит в конце: er <b>kommt</b>.'],
['t','Ich gehe spazieren, wenn die Sonne ___. (scheinen)',['scheint'],'Я иду гулять, когда светит солнце.','…, wenn die Sonne <b>scheint</b>.'],
['c','Ich bleibe hier, ___ ich müde bin.',['weil','dass','wenn','obwohl'],0,'Я остаюсь здесь, потому что устал.','«Потому что» — <b>weil</b>.'],
['c','Er geht zur Arbeit, ___ er krank ist.',['weil','obwohl','dass','ob'],1,'Он идёт на работу, хотя он болен.','«Хотя» — <b>obwohl</b>.'],
['c','Weil ich Hunger habe, ___ ein Brot.',['ich esse','esse ich','ich ess','esse'],1,'Потому что я голоден, я ем бутерброд.','Придаточное стоит первым и занимает 1-ю позицию, поэтому сразу идёт глагол: <b>esse ich</b>.'],
['o','Ich weiß, dass du heute arbeiten musst.','Я знаю, что тебе сегодня нужно работать.','В придаточном с <b>dass</b> оба глагола в конце, спрягаемый — последний.']
]},

{id:'refl',lv:'A2',t:'Reflexive Verben',ru:'Возвратные глаголы',
th:[
H('Возвратные глаголы'),
P('Некоторые глаголы употребляются с возвратным местоимением. Чаще всего это <b>Akkusativ</b>.'),
T([['','Akkusativ','Dativ'],['ich','mich','mir'],['du','dich','dir'],['er/sie/es','sich','sich'],['wir','uns','uns'],['ihr','euch','euch'],['sie/Sie','sich','sich']]),
H('Частые глаголы'),
P('sich freuen (auf / über), sich waschen, sich anziehen, sich setzen, sich treffen, sich beeilen, sich fühlen, sich interessieren (für), sich erinnern (an), sich ärgern (über), sich entscheiden, sich vorstellen.'),
X([['Ich {h:freue mich} auf das Wochenende.','Я радуюсь выходным.'],['Wir {h:treffen uns} um drei.','Мы встречаемся в три.'],['Er {h:interessiert sich} für Kunst.','Он интересуется искусством.']]),
H('Dativ-местоимение'),
P('Если в предложении уже есть другое дополнение в Akkusativ, возвратное местоимение ставится в <b>Dativ</b>:'),
X([['Ich wasche {h:mir} die Hände.','Я мою руки.'],['Ich kaufe {h:mir} ein Buch.','Я покупаю себе книгу.']]),
N('В придаточном: …, weil ich <b>mich</b> freue. В Perfekt: Ich habe <b>mich</b> gefreut.')
].join(''),
tx:[`Jeden Morgen [[wasche ich mich]] und [[ziehe mich]] schnell [[an]]. Ich [[beeile mich]], weil ich den Bus nicht verpassen möchte. Heute [[treffe ich mich]] mit meiner Freundin. Wir [[freuen uns]] schon lange auf diesen Tag. Ich [[interessiere mich]] für Kunst, deshalb gehen wir ins Museum. Danach [[setzen wir uns]] in ein Café.`,
`Каждое утро я умываюсь и быстро одеваюсь. Я спешу, потому что не хочу опоздать на автобус. Сегодня я встречаюсь с подругой. Мы уже давно ждём этого дня. Я интересуюсь искусством, поэтому мы идём в музей. Потом мы сядем в кафе.`],
ex:[
['t','Ich freue ___ auf das Wochenende.',['mich'],'Я радуюсь выходным.','ich → <b>mich</b>.'],
['t','Du musst ___ beeilen. (sich)',['dich'],'Тебе нужно поторопиться.','du → <b>dich</b>.'],
['c','Wir treffen ___ morgen um drei.',['mich','dich','uns','sich'],2,'Мы встречаемся завтра в три.','wir → <b>uns</b>.'],
['c','Sie interessiert ___ für Musik.',['mich','sich','ihr','dich'],1,'Она интересуется музыкой.','sie → <b>sich</b>.'],
['c','Ich wasche ___ die Hände.',['mich','mir','dich','sich'],1,'Я мою руки.','Akkusativ уже занят (<i>die Hände</i>), поэтому местоимение — в Dativ: <b>mir</b>.'],
['c','Setzt ___ bitte!',['euch','dich','sich','uns'],0,'Садитесь, пожалуйста!','Форма ihr (setzt) → <b>euch</b>.'],
['o','Ich interessiere mich für Geschichte.','Я интересуюсь историей.','sich interessieren <b>für</b> + Akkusativ.']
]},

{id:'adj',lv:'A2',t:'Adjektivendungen',ru:'Окончания прилагательных',
th:[
P('Прилагательное перед существительным получает окончание. Если прилагательное стоит после <b>sein</b>, окончания нет: Das Haus ist <b>groß</b>.'),
H('После определённого артикля (der / die / das)'),
T([['','м. р.','ж. р.','ср. р.','мн. ч.'],['Nominativ','der gut{h:e} Mann','die gut{h:e} Frau','das gut{h:e} Kind','die gut{h:en} Kinder'],['Akkusativ','den gut{h:en} Mann','die gut{h:e} Frau','das gut{h:e} Kind','die gut{h:en} Kinder'],['Dativ','dem gut{h:en} Mann','der gut{h:en} Frau','dem gut{h:en} Kind','den gut{h:en} Kindern']]),
H('После неопределённого артикля (ein / mein / kein)'),
T([['','м. р.','ж. р.','ср. р.','мн. ч. (kein)'],['Nominativ','ein gut{h:er} Mann','eine gut{h:e} Frau','ein gut{h:es} Kind','keine gut{h:en} Kinder'],['Akkusativ','einen gut{h:en} Mann','eine gut{h:e} Frau','ein gut{h:es} Kind','keine gut{h:en} Kinder'],['Dativ','einem gut{h:en} Mann','einer gut{h:en} Frau','einem gut{h:en} Kind','keinen gut{h:en} Kindern']]),
N('Запомнить: в <b>Dativ</b> и во <b>множественном числе</b> всегда <b>-en</b>. В Akkusativ мужского рода тоже <b>-en</b>. Если артикль не показывает род (ein Mann, ein Kind), его «работу» берёт на себя прилагательное: ein gut<b>er</b> Mann, ein gut<b>es</b> Kind.')
].join(''),
tx:[`Das ist mein [[neues]] Zuhause. Ich wohne in einer [[kleinen]], aber [[gemütlichen]] Wohnung. Im Wohnzimmer steht ein [[großes]] Sofa und ein [[alter]] Tisch. Ich liebe den [[roten]] Teppich und die [[bunten]] Kissen. Mein [[bester]] Freund hat mir eine [[schöne]] Lampe geschenkt.`,
`Это мой новый дом. Я живу в маленькой, но уютной квартире. В гостиной стоят большой диван и старый стол. Я люблю красный ковёр и разноцветные подушки. Мой лучший друг подарил мне красивую лампу.`],
ex:[
['c','Das ist ein ___ Auto.',['neuer','neue','neues','neuen'],2,'Это новая машина.','Auto — {n:das} (ср. р.), Nominativ: ein … → ein neu<b>es</b> Auto.'],
['c','Ich kaufe einen ___ Pullover.',['blauer','blaue','blauen','blaues'],2,'Я покупаю синий свитер.','Pullover — м. р., Akkusativ: einen blau<b>en</b> Pullover.'],
['c','Sie trägt eine ___ Jacke.',['rote','roter','roten','rotes'],0,'Она носит красную куртку.','Jacke — ж. р., Akkusativ: eine rot<b>e</b> Jacke.'],
['t','Wir wohnen in einem ___ Haus. (klein)',['kleinen'],'Мы живём в маленьком доме.','Dativ → всегда <b>-en</b>: einem klein<b>en</b> Haus.'],
['t','Der ___ Mann ist mein Lehrer. (alt)',['alte'],'Старый мужчина — мой учитель.','der + Nominativ (м. р.): der alt<b>e</b> Mann.'],
['c','Ich mag die ___ Kinder.',['kleine','kleinen','kleiner','kleines'],1,'Мне нравятся маленькие дети.','Множественное число после артикля: <b>-en</b>.'],
['t','Das Wetter ist heute ___. (schön)',['schön'],'Сегодня погода прекрасная.','После <b>sein</b> окончания нет.']
]},

/* ================= B1 ================= */
{id:'kon2',lv:'B1',t:'Konjunktiv II',ru:'Сослагательное наклонение',
th:[
H('Когда нужен Konjunktiv II'),
L(['нереальное желание или условие: Wenn ich Zeit <b>hätte</b>, …','вежливая просьба: <b>Könnten</b> Sie mir helfen?','совет: An deiner Stelle <b>würde</b> ich …']),
H('Формы'),
T([['','sein','haben','würde (+ Infinitiv)'],['ich','wäre','hätte','würde'],['du','wärst','hättest','würdest'],['er/sie/es','wäre','hätte','würde'],['wir/sie','wären','hätten','würden'],['ihr','wärt','hättet','würdet']]),
P('Модальные: <b>könnte, müsste, dürfte, wollte, sollte</b> (у können, müssen, dürfen появляется умлаут).'),
H('Как строится'),
X([['Wenn ich viel Geld {h:hätte}, {h:würde} ich reisen.','Если бы у меня было много денег, я бы путешествовал.'],['Ich {h:hätte} gern einen Kaffee.','Я бы хотел кофе.'],['{h:Könnten} Sie mir helfen?','Не могли бы Вы мне помочь?']]),
N('Для большинства глаголов используют <b>würde + Infinitiv</b>: Ich würde gern reisen. Но с <b>sein, haben</b> и модальными лучше собственные формы: «wenn ich Zeit hätte», а не «wenn ich Zeit haben würde».')
].join(''),
tx:[`Wenn ich viel Geld [[hätte]], [[würde]] ich eine lange Reise machen. Ich [[würde]] zuerst nach Japan fliegen. Dort [[könnte]] ich viele Städte besichtigen. Wenn ich nicht arbeiten [[müsste]], [[wäre]] ich wirklich frei. Aber das ist nur ein Traum. [[Könnten]] Sie mir bitte sagen, wie viel ein Flug kostet?`,
`Если бы у меня было много денег, я бы отправился в долгое путешествие. Сначала я бы полетел в Японию. Там я мог бы осмотреть много городов. Если бы мне не нужно было работать, я был бы по-настоящему свободен. Но это всего лишь мечта. Не могли бы Вы сказать, сколько стоит билет на самолёт?`],
ex:[
['c','Wenn ich Zeit ___, würde ich mehr lesen.',['hätte','habe','hatte','würde haben'],0,'Если бы у меня было время, я бы читал больше.','После <b>wenn</b> в нереальном условии — Konjunktiv II: <b>hätte</b>.'],
['t','Wenn ich reich ___, würde ich ein Haus kaufen. (sein)',['wäre'],'Если бы я был богат, я бы купил дом.','sein → <b>wäre</b>.'],
['t','Ich ___ gern einen Kaffee. (haben)',['hätte'],'Я бы хотел(а) кофе.','Вежливая форма: <b>hätte</b> gern …'],
['c','___ Sie mir bitte helfen?',['Können','Könnten','Kannst','Konnten'],1,'Не могли бы Вы мне помочь?','<b>Könnten</b> — вежливая просьба (Konjunktiv II).'],
['t','An deiner Stelle ___ ich zum Arzt gehen. (werden)',['würde'],'На твоём месте я бы пошёл к врачу.','Совет: <b>würde</b> + Infinitiv.'],
['c','Konjunktiv II von «wir sind»:',['wären','waren','würden sein','seien'],0,'','sein → ich wäre, wir <b>wären</b>.'],
['o','Ich würde gern nach Japan reisen.','Я бы с удовольствием поехал(а) в Японию.','<b>würde</b> — на 2-м месте, инфинитив — в конце.',['Gern würde ich nach Japan reisen.','Ich würde nach Japan gern reisen.']]
]},

{id:'pass',lv:'B1',t:'Passiv',ru:'Страдательный залог',
th:[
H('Passiv: werden + Partizip II'),
P('Passiv показывает, что <b>делается</b>, а не <b>кто делает</b>. Строится: <b>werden</b> + <b>Partizip II</b> (в конце). Объект в Akkusativ становится подлежащим.'),
T([['Aktiv','Passiv'],['Der Koch kocht die Suppe.','Die Suppe {h:wird} (vom Koch) {h:gekocht}.'],['Man baut ein Haus.','Ein Haus {h:wird} {h:gebaut}.']]),
H('werden'),
T([['ich werde','wir werden'],['du wirst','ihr werdet'],['er/sie/es wird','sie werden']]),
H('Времена'),
T([['Время','Пример'],['Präsens','Das Haus wird gebaut.'],['Präteritum','Das Haus {h:wurde} 1990 gebaut.'],['Perfekt','Das Haus ist 1990 gebaut {h:worden}.'],['с модальным','Das Haus muss gebaut {h:werden}.']]),
H('Кто делает?'),
P('<b>von + Dativ</b> — человек или организация; <b>durch + Akkusativ</b> — средство, причина.'),
X([['Der Kuchen wird {h:von meiner Mutter} gebacken.','Пирог печёт моя мама.']]),
N('Passiv с <b>sein</b> описывает результат: Die Tür <b>ist</b> geschlossen (Дверь закрыта).')
].join(''),
tx:[`In unserer Stadt [[wird]] viel [[gebaut]]. Das alte Rathaus [[wird]] gerade [[renoviert]]. Die Straße [[wurde]] letzte Woche [[repariert]]. Viele Bäume [[werden]] im Frühling [[gepflanzt]]. Der Park [[wird]] jeden Tag von Arbeitern [[gereinigt]]. Nächstes Jahr [[wird]] auch ein neues Kino [[eröffnet]].`,
`В нашем городе много строят. Старую ратушу сейчас ремонтируют. Улицу отремонтировали на прошлой неделе. Много деревьев сажают весной. Парк каждый день убирают рабочие. В следующем году откроют и новый кинотеатр.`],
ex:[
['t','Das Auto ___ gerade repariert. (werden)',['wird'],'Машину как раз ремонтируют.','Passiv Präsens: <b>wird</b> + Partizip II.'],
['t','Die Briefe ___ von der Sekretärin geschrieben. (werden)',['werden'],'Письма пишет секретарь.','Подлежащее во мн. числе → <b>werden</b>.'],
['c','Das Haus ___ 1990 gebaut.',['wird','wurde','ist','hat'],1,'Дом был построен в 1990 году.','Прошлое: Präteritum Passiv — <b>wurde</b> + Partizip II.'],
['c','Die Suppe wird ___.',['gekocht','kocht','gekochen','kochte'],0,'Суп варится.','werden + Partizip II: <b>gekocht</b>.'],
['c','Der Kuchen wird ___ meiner Mutter gebacken.',['von','durch','mit','für'],0,'Пирог печёт моя мама.','Исполнитель-человек — <b>von</b> + Dativ.'],
['t','Hier ___ Deutsch gesprochen. (werden)',['wird'],'Здесь говорят по-немецки.','Deutsch — ед. число: <b>wird</b> gesprochen.'],
['o','Das Fenster wird jeden Tag geöffnet.','Окно открывают каждый день.','werden — на 2-м месте, Partizip II — в конце.',['Jeden Tag wird das Fenster geöffnet.']]
]},

{id:'rel',lv:'B1',t:'Relativsätze',ru:'Относительные придаточные (который)',
th:[
H('Что это'),
P('Relativsatz уточняет существительное: «мужчина, <i>который</i> стоит там». Относительное местоимение почти везде совпадает с артиклем.'),
T([['','м. р.','ж. р.','ср. р.','мн. ч.'],['Nominativ','der','die','das','die'],['Akkusativ','den','die','das','die'],['Dativ','dem','der','dem','denen']]),
H('Правило'),
L(['<b>Род и число</b> местоимения — от слова, к которому оно относится.','<b>Падеж</b> — от его роли в придаточном предложении.','Придаточное отделяется запятыми, глагол стоит в конце.']),
X([['Der Mann, {h:der} dort steht, ist mein Lehrer.','Мужчина, который там стоит, — мой учитель.'],['Das Buch, {h:das} ich lese, ist spannend.','Книга, которую я читаю, интересная.'],['Die Frau, {h:der} ich helfe, ist nett.','Женщина, которой я помогаю, милая.']]),
H('С предлогом'),
P('Предлог стоит <b>перед</b> местоимением и определяет падеж:'),
X([['Die Stadt, {h:in der} ich wohne, ist klein.','Город, в котором я живу, маленький.'],['Die Freunde, {h:mit denen} ich spiele, sind nett.','Друзья, с которыми я играю, милые.']])
].join(''),
tx:[`Ich habe einen Freund, [[der]] in Berlin wohnt. Er hat ein Auto, [[das]] sehr alt ist. Die Stadt, [[in der]] er lebt, ist riesig. Die Leute, [[mit denen]] er arbeitet, sind nett. Das Buch, [[das]] ich ihm geschenkt habe, hat er schon gelesen. Der Film, [[den]] wir gestern gesehen haben, war toll.`,
`У меня есть друг, который живёт в Берлине. У него есть машина, которая очень старая. Город, в котором он живёт, огромный. Люди, с которыми он работает, милые. Книгу, которую я ему подарил, он уже прочитал. Фильм, который мы вчера смотрели, был классным.`],
ex:[
['c','Der Mann, ___ dort steht, ist mein Chef.',['der','den','dem','das'],0,'Мужчина, который там стоит, — мой начальник.','Мужской род; в придаточном он — подлежащее (Nominativ): <b>der</b>.'],
['c','Das ist das Buch, ___ ich gelesen habe.',['der','das','dem','denen'],1,'Это книга, которую я прочитал(а).','Средний род; в придаточном — прямое дополнение (Akkusativ): <b>das</b>.'],
['c','Die Frau, ___ ich helfe, ist meine Nachbarin.',['die','den','der','dem'],2,'Женщина, которой я помогаю, — моя соседка.','helfen + Dativ; женский род → <b>der</b>.'],
['t','Die Kinder, mit ___ ich spiele, sind nett. (Relativpronomen)',['denen'],'Дети, с которыми я играю, милые.','mit + Dativ, мн. число → <b>denen</b>.'],
['t','Der Film, ___ wir gesehen haben, war gut. (Relativpronomen)',['den'],'Фильм, который мы смотрели, был хорош.','Мужской род, Akkusativ → <b>den</b>.'],
['c','Выберите правильное предложение.',['Das Haus, in dem ich wohne, ist alt.','Das Haus, in das ich wohne, ist alt.','Das Haus, das in ich wohne, ist alt.','Das Haus, in dem wohne ich, ist alt.'],0,'','wohnen — «где?» → Dativ: <b>in dem</b>; глагол стоит в конце придаточного.'],
['o','Der Mann, der dort steht, ist mein Lehrer.','Мужчина, который стоит там, — мой учитель.','Придаточное отделено запятыми, глагол <b>steht</b> — в конце придаточного.']
]}
];
})();