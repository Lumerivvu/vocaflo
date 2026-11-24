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
;
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
;
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
;
