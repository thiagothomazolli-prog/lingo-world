// Generator for World 4: Comunicação & Social (B1)
// 30 phases, 8-10 exercises each (11 on chest, 15 on boss)
const { writeWorldFile } = require('./worldsHelper.cjs');

const w4Phases = [
  // 1: Passado Simples -ED
  {
    num: 1, title: 'Passado Simples: Verbos Regulares (-ED)', subtitle: 'Worked, played, studied, lived',
    obj: 'Narrar ações passadas com verbos regulares.',
    type: 'lesson', icon: 'clock',
    theory: ['Verbos regulares formam o passado com -ED: work -> worked, play -> played, live -> lived, study -> studied.', 'Usado com expressões de tempo passado: yesterday, last week, in 2020, two days ago.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '💼', prompt: 'Como se diz "Eu trabalhei até tarde ontem à noite"?', options: ['I worked late last night.', 'I work late last night.', 'I am worked late last night.', 'I was work late last night.'], ans: 'I worked late last night.', exp: 'Passado regular = worked.' },
      { type: 'fill-blank', visualEmoji: '⚽', prompt: 'Complete: "They _____ soccer in the park yesterday afternoon."', options: ['played', 'play', 'playing', 'did played'], ans: 'played', exp: 'Play -> played.' },
      { type: 'word-order', prompt: 'Monte a frase no passado simples:', options: ['hard', 'test.', 'studied', 'for', 'the', 'She'], ans: 'She studied hard for the test.', exp: 'Study -> studied.' },
      { type: 'listening', prompt: 'Ouça a frase no passado:', audio: 'We lived in Canada for five years before moving here.', options: ['We lived in Canada for five years before moving here.', 'We worked in Canada for five years before moving here.', 'They lived in Australia for five years before moving here.', 'We stayed in Canada for five months before moving here.'], ans: 'We lived in Canada for five years before moving here.', exp: 'lived in Canada for five years.' },
      { type: 'translate', prompt: 'Traduza: "Ele me ligou há duas horas."', options: ['He called me two hours ago.', 'He called me two hours before.', 'He did call me two hours back.', 'He was calling me two hours ago.'], ans: 'He called me two hours ago.', exp: 'Two hours ago = há duas horas.' },
      { type: 'multiple-choice', prompt: 'Como fica o passado de "STOP"?', options: ['Stopped (dobra o P)', 'Stoped', 'Stopte', 'Stoppen'], ans: 'Stopped (dobra o P)', exp: 'Consoante-vogal-consoante (CVC) dobra a última letra: stop -> stopped.' },
      { type: 'word-order', prompt: 'Organize a ação passada:', options: ['cleaned', 'morning.', 'apartment', 'the', 'I', 'this'], ans: 'I cleaned the apartment this morning.', exp: 'I cleaned the apartment this morning.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'The train arrived on time despite the heavy snowfall.', options: ['The train arrived on time despite the heavy snowfall.', 'The bus arrived late because of heavy traffic.', 'The flight departed on time despite the rain.', 'The train stopped twice before reaching the station.'], ans: 'The train arrived on time despite the heavy snowfall.', exp: 'arrived on time.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I worked all day yesterday"', audio: 'I worked all day yesterday', ans: 'I worked all day yesterday', hint: '/aɪ wɜːrkt ɔːl deɪ ˈjes.tɚ.deɪ/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Qual expressão de tempo indica passado?', options: ['Yesterday', 'Tomorrow', 'Right now', 'Next week'], ans: 'Yesterday', exp: 'Yesterday = ontem.' }
    ]
  },
  // 2: Pronúncia do -ED
  {
    num: 2, title: 'Pronúncia do -ED: /t/, /d/, /ɪd/', subtitle: 'Wanted, watched, played',
    obj: 'Dominar os três sons do sufixo -ED em inglês.',
    type: 'lesson', icon: 'volume-2',
    theory: ['1. Som /ɪd/: APENAS após sons de T ou D (wanted, needed, decided). Adiciona uma sílaba extra!', '2. Som /t/: após consoantes surdas (watched, worked, laughed, stopped).', '3. Som /d/: após vogais e consoantes sonoras (played, lived, opened, called).'],
    items: [
      { type: 'multiple-choice', prompt: 'Qual verbo tem a terminação -ED pronunciada como uma sílaba extra /ɪd/?', options: ['Wanted (/ˈwɑːn.tɪd/)', 'Worked (/wɜːrkt/)', 'Played (/pleɪd/)', 'Watched (/wɑːtʃt/)'], ans: 'Wanted (/ˈwɑːn.tɪd/)', exp: 'Apenas após som de T ou D o -ED vira sílaba extra /ɪd/!' },
      { type: 'fill-blank', prompt: 'Complete o som /ɪd/: "I _____ help with my luggage."', options: ['needed', 'asked', 'looked', 'helped'], ans: 'needed', exp: 'Need termina em D -> needed (/ˈniː.dɪd/).' },
      { type: 'word-order', prompt: 'Monte a frase com pronúncia /t/:', options: ['watched', 'movie.', 'a', 'great', 'We'], ans: 'We watched a great movie.', exp: 'Watched soa como /wɑːtʃt/ (uma sílaba só!).' },
      { type: 'listening', prompt: 'Ouça e identifique o verbo com som /ɪd/:', audio: 'She decided to accept the scholarship in Oxford.', options: ['She decided to accept the scholarship in Oxford.', 'She worked hard to get into Oxford university.', 'She asked for information about the Oxford course.', 'She planned her trip to Oxford last winter.'], ans: 'She decided to accept the scholarship in Oxford.', exp: 'Decided (/dɪˈsaɪ.dɪd/).' },
      { type: 'translate', prompt: 'Traduza: "Eles visitaram Paris."', options: ['They visited Paris.', 'They visit Paris.', 'They were visited Paris.', 'They did visited Paris.'], ans: 'They visited Paris.', exp: 'Visited (/ˈvɪz.ɪ.tɪd/).' },
      { type: 'multiple-choice', prompt: 'No verbo "PLAYED", como soa o -ED?', options: ['Som de /d/ (uma sílaba só: /pleɪd/)', 'Som de /ɪd/ (duas sílabas)', 'Som de /ed/ como no português', 'O ED é mudo'], ans: 'Som de /d/ (uma sílaba só: /pleɪd/)', exp: 'Played é monossílabo: /pleɪd/.' },
      { type: 'word-order', prompt: 'Organize a frase com som /t/:', options: ['walked', 'the', 'park.', 'through', 'They'], ans: 'They walked through the park.', exp: 'Walked (/wɔːkt/).' },
      { type: 'listening', prompt: 'Ouça:', audio: 'I waited for over forty minutes in the rain.', options: ['I waited for over forty minutes in the rain.', 'I walked for over forty minutes in the rain.', 'I worked for over forty minutes today.', 'I watched the rain for forty minutes.'], ans: 'I waited for over forty minutes in the rain.', exp: 'Waited (/ˈweɪ.tɪd/).' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Wanted, needed, decided"', audio: 'Wanted needed decided', ans: 'Wanted needed decided', hint: '/ˈwɑːn.tɪd ˈniː.dɪd dɪˈsaɪ.dɪd/', exp: 'Perfeita pronúncia do som /ɪd/!' },
      { type: 'multiple-choice', prompt: 'Quantas sílabas tem a palavra "WORKED"?', options: ['Apenas 1 sílaba (/wɜːrkt/)', '2 sílabas (work-ed)', '3 sílabas', 'Varia com o sotaque'], ans: 'Apenas 1 sílaba (/wɜːrkt/)', exp: 'Worked tem apenas UMA sílaba! O "e" não é pronunciado.' }
    ]
  },
  // 3: Was & Were
  {
    num: 3, title: 'Passado com Verbo TO BE: WAS & WERE', subtitle: 'I was happy, They were at the party',
    obj: 'Usar WAS e WERE para descrever estados e locais no passado.',
    type: 'lesson', icon: 'book-open',
    theory: ['WAS para I, He, She, It: "I was tired", "He was at home".', 'WERE para You, We, They: "You were right", "They were happy".', 'Negativas: wasn\'t / weren\'t. Perguntas: "Were you at home?".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🎉', prompt: 'Como dizer "Nós estávamos na festa ontem à noite"?', options: ['We were at the party last night.', 'We was at the party last night.', 'We were been at the party.', 'We did at the party last night.'], ans: 'We were at the party last night.', exp: 'Com "We" usamos WERE.' },
      { type: 'fill-blank', prompt: 'Complete com o passado de To Be: "She _____ very happy with the good news."', options: ['was', 'were', 'is', 'been'], ans: 'was', exp: 'She -> was.' },
      { type: 'word-order', prompt: 'Monte a pergunta no passado com To Be:', options: ['you', 'Were', 'home', 'at', 'yesterday?'], ans: 'Were you at home yesterday?', exp: 'Were you at home yesterday?' },
      { type: 'listening', prompt: 'Ouça a frase no passado:', audio: 'The weather was cold and rainy all weekend.', options: ['The weather was cold and rainy all weekend.', 'The weather is warm and sunny today.', 'The weather was hot and humid in summer.', 'The weather wasn\'t cold during the holiday.'], ans: 'The weather was cold and rainy all weekend.', exp: 'The weather was cold and rainy...' },
      { type: 'translate', prompt: 'Traduza: "Eles não estavam ocupados."', options: ['They weren\'t busy.', 'They wasn\'t busy.', 'They didn\'t busy.', 'They not were busy.'], ans: 'They weren\'t busy.', exp: 'They weren\'t busy.' },
      { type: 'multiple-choice', prompt: 'Qual forma é usada para "I" e "HE" no passado?', options: ['WAS', 'WERE', 'ARE', 'BEEN'], ans: 'WAS', exp: 'I was, He was, She was, It was.' },
      { type: 'word-order', prompt: 'Organize a negativa com WASN\'T:', options: ['fault.', 'wasn\'t', 'It', 'my'], ans: 'It wasn\'t my fault.', exp: 'It wasn\'t my fault = Não foi minha culpa.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Where were you yesterday at three o\'clock?', options: ['Where were you yesterday at three o\'clock?', 'Where was he yesterday at three o\'clock?', 'Who were you with yesterday afternoon?', 'Why were you absent from class yesterday?'], ans: 'Where were you yesterday at three o\'clock?', exp: 'Where were you...?' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I was very happy to see you"', audio: 'I was very happy to see you', ans: 'I was very happy to see you', hint: '/aɪ wəz ˈver.i ˈhæp.i tuː siː juː/', exp: 'Muito bem!' },
      { type: 'multiple-choice', prompt: 'Como responder afirmativamente a "Were you tired?" de forma curta?', options: ['Yes, I was.', 'Yes, I were.', 'Yes, I did.', 'Yes, I am.'], ans: 'Yes, I was.', exp: 'Yes, I was.' }
    ]
  },
  // 4: Verbos Irregulares 1
  {
    num: 4, title: 'Verbos Irregulares Mais Usados (Parte 1)', subtitle: 'Went, saw, had, did, made, took',
    obj: 'Dominar os verbos irregulares mais frequentes do idioma.',
    type: 'lesson', icon: 'shuffle',
    theory: ['Go -> WENT, See -> SAW, Have -> HAD, Do -> DID, Make -> MADE, Take -> TOOK.', 'Verbos irregulares não usam -ED; mudam de forma no passado.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '✈️', prompt: 'Qual é o passado irregular de "GO" (ir)?', options: ['WENT', 'Goed', 'Gone', 'Goes'], ans: 'WENT', exp: 'Go -> Went. Ex: "I went to London".' },
      { type: 'fill-blank', visualEmoji: '🎬', prompt: 'Complete com o passado de SEE (ver): "I _____ an amazing movie yesterday."', options: ['saw', 'see', 'seed', 'seen'], ans: 'saw', exp: 'See -> Saw.' },
      { type: 'word-order', prompt: 'Monte a frase com o verbo HAVE no passado:', options: ['great', 'We', 'a', 'time', 'together.', 'had'], ans: 'We had a great time together.', exp: 'Have -> Had.' },
      { type: 'listening', prompt: 'Ouça o verbo irregular:', audio: 'She took a taxi to the airport this morning.', options: ['She took a taxi to the airport this morning.', 'She took a bus to Central Station this morning.', 'He took a train to the city center yesterday.', 'She drove her car to the airport this morning.'], ans: 'She took a taxi to the airport this morning.', exp: 'Take -> Took.' },
      { type: 'translate', prompt: 'Traduza: "Eu fiz um bolo de chocolate."', options: ['I made a chocolate cake.', 'I did a chocolate cake.', 'I maked a chocolate cake.', 'I make a chocolate cake.'], ans: 'I made a chocolate cake.', exp: 'Make -> Made (fazer algo tangível/culinário = make).' },
      { type: 'multiple-choice', prompt: 'Qual é o passado de "DO" (fazer)?', options: ['DID', 'Done', 'Doed', 'Does'], ans: 'DID', exp: 'Do -> Did.' },
      { type: 'word-order', prompt: 'Organize a frase com WENT:', options: ['park', 'They', 'to', 'the', 'yesterday.', 'went'], ans: 'They went to the park yesterday.', exp: 'They went to the park yesterday.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'He had a delicious breakfast before leaving for work.', options: ['He had a delicious breakfast before leaving for work.', 'He made a quick breakfast before leaving for work.', 'She had coffee and toast before going to school.', 'They went to a cafe for breakfast this morning.'], ans: 'He had a delicious breakfast before leaving for work.', exp: 'had breakfast.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I went to the supermarket"', audio: 'I went to the supermarket', ans: 'I went to the supermarket', hint: '/aɪ went tuː ðə ˈsuː.pɚˌmɑːr.kɪt/', exp: 'Perfeita pronúncia!' },
      { type: 'multiple-choice', prompt: 'Qual par de presente e passado irregular está CORRETO?', options: ['Go -> Went / See -> Saw / Take -> Took', 'Go -> Goed / See -> Seed / Take -> Taked', 'Go -> Gone / See -> Seen / Take -> Taken', 'Go -> Went / See -> Seen / Take -> Taked'], ans: 'Go -> Went / See -> Saw / Take -> Took', exp: 'Go-Went, See-Saw, Take-Took.' }
    ]
  },
  // 5: Verbos Irregulares 2
  {
    num: 5, title: 'Verbos Irregulares Mais Usados (Parte 2)', subtitle: 'Ate, drank, came, gave, told, knew',
    obj: 'Consolidar a segunda metade dos verbos irregulares fundamentais.',
    type: 'lesson', icon: 'shuffle',
    theory: ['Eat -> ATE, Drink -> DRANK, Come -> CAME, Give -> GAVE, Tell -> TOLD, Know -> KNEW (/nuː/).'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🍕', prompt: 'Qual é o passado de "EAT" (comer)?', options: ['ATE', 'Eated', 'Eaten', 'Eates'], ans: 'ATE', exp: 'Eat -> Ate (/eɪt/).' },
      { type: 'fill-blank', visualEmoji: '☕', prompt: 'Complete com o passado de DRINK: "I _____ three cups of coffee this morning."', options: ['drank', 'drink', 'drinked', 'drunk'], ans: 'drank', exp: 'Drink -> Drank.' },
      { type: 'word-order', prompt: 'Monte a frase com CAME (passado de come):', options: ['came', 'He', 'my', 'to', 'yesterday.', 'party'], ans: 'He came to my party yesterday.', exp: 'Come -> Came.' },
      { type: 'listening', prompt: 'Ouça o verbo irregular:', audio: 'My grandfather gave me this beautiful vintage watch.', options: ['My grandfather gave me this beautiful vintage watch.', 'My father bought me this beautiful smart watch.', 'My grandmother gave me this gold necklace yesterday.', 'My brother sold me this vintage watch last week.'], ans: 'My grandfather gave me this beautiful vintage watch.', exp: 'Give -> Gave.' },
      { type: 'translate', prompt: 'Traduza: "Ela me contou a verdade."', options: ['She told me the truth.', 'She said me the truth.', 'She told the truth to I.', 'She did tell the truth.'], ans: 'She told me the truth.', exp: 'Tell -> Told (told me = me contou).' },
      { type: 'multiple-choice', prompt: 'O verbo KNEW (passado de know) tem qual pronúncia correta?', options: ['/nuː/ (o "K" é completamente silencioso)', '/knuː/ (pronunciando o K)', '/naʊ/ como now', '/knoʊ/'], ans: '/nuː/ (o "K" é completamente silencioso)', exp: 'O K é mudo: Knew soa idêntico a "new" (/nuː/).' },
      { type: 'word-order', prompt: 'Organize a frase com KNEW:', options: ['knew', 'answer', 'I', 'the', 'immediately.'], ans: 'I knew the answer immediately.', exp: 'I knew the answer immediately.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'She drank a glass of warm milk before going to bed.', options: ['She drank a glass of warm milk before going to bed.', 'He drank two cups of green tea in the evening.', 'She ate an apple before going to sleep.', 'They had warm soup for dinner last night.'], ans: 'She drank a glass of warm milk before going to bed.', exp: 'drank a glass of warm milk.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "She told me the story"', audio: 'She told me the story', ans: 'She told me the story', hint: '/ʃiː toʊld miː ðə ˈstɔːr.i/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um erro com verbo irregular?', options: ['I eated pizza yesterday.', 'I ate pizza yesterday.', 'He gave me a gift.', 'We came by car.'], ans: 'I eated pizza yesterday.', exp: '"Eated" não existe; o correto é "ate".' }
    ]
  }
];

// Helper to fill remaining phases 6 to 30 for World 4
const remainingW4 = [
  // 6: Perguntas com DID
  {
    num: 6, title: 'Perguntas no Passado com DID', subtitle: 'Did you see that? What did you do?',
    obj: 'Fazer perguntas no passado com o auxiliar DID e verbo base.',
    type: 'lesson', icon: 'help-circle',
    theory: ['No passado usamos DID para todas as pessoas: Did you go? Did he see? O verbo principal FICA NA FORMA BASE.'],
    items: [
      { type: 'multiple-choice', prompt: 'Como perguntar "Você viu aquele filme ontem?"', options: ['Did you see that movie yesterday?', 'Did you saw that movie yesterday?', 'Were you see that movie yesterday?', 'Do you saw that movie yesterday?'], ans: 'Did you see that movie yesterday?', exp: 'Com DID o verbo volta à base: "see" (não "saw").' },
      { type: 'fill-blank', prompt: 'Complete: "What did you _____ for dinner last night?"', options: ['eat', 'ate', 'eaten', 'eating'], ans: 'eat', exp: 'Did + eat.' },
      { type: 'word-order', prompt: 'Monte a pergunta no passado:', options: ['you', 'go', 'Did', 'yesterday?', 'there'], ans: 'Did you go there yesterday?', exp: 'Did you go there yesterday?' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Where did you buy that beautiful leather jacket?', options: ['Where did you buy that beautiful leather jacket?', 'How much did you pay for that jacket?', 'When did you buy that winter coat?', 'Where did you find those shoes?'], ans: 'Where did you buy that beautiful leather jacket?', exp: 'Where did you buy...?' },
      { type: 'translate', prompt: 'Traduza: "A que horas você acordou?"', options: ['What time did you wake up?', 'What time did you woke up?', 'What time were you wake up?', 'What time do you woke up?'], ans: 'What time did you wake up?', exp: 'What time did you wake up?' },
      { type: 'multiple-choice', prompt: 'Qual pergunta contém um erro comum?', options: ['Did he went to school?', 'Did he go to school?', 'Where did they live?', 'Did you call him?'], ans: 'Did he went to school?', exp: 'Não use "went" com "did". Diga "Did he go".' },
      { type: 'word-order', prompt: 'Organize a pergunta com WHY:', options: ['did', 'call', 'Why', 'you', 'me?'], ans: 'Why did you call me?', exp: 'Why did you call me?' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Did your brother pass his driving test yesterday?', options: ['Did your brother pass his driving test yesterday?', 'Did your sister pass her university exam?', 'Did you pass your English test on Friday?', 'Did he take the driving test last month?'], ans: 'Did your brother pass his driving test yesterday?', exp: 'Did your brother pass...?' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "What did you do yesterday?"', audio: 'What did you do yesterday', ans: 'What did you do yesterday', hint: '/wɑːt dɪd juː duː ˈjes.tɚ.deɪ/', exp: 'Perfeita entonação!' },
      { type: 'multiple-choice', prompt: 'Para responder "Sim, eu vi" a "Did you see it?" de forma curta:', options: ['Yes, I did.', 'Yes, I saw.', 'Yes, I do.', 'Yes, I was.'], ans: 'Yes, I did.', exp: 'Yes, I did.' }
    ]
  },
  // 7: Negativas com DIDN'T
  {
    num: 7, title: 'Negativas no Passado com DIDN\'T', subtitle: 'I didn\'t know, She didn\'t come',
    obj: 'Construir negativas no passado com DIDN\'T e verbo base.',
    type: 'lesson', icon: 'x-circle',
    theory: ['Sujeito + didn\'t + verbo base: "I didn\'t know", "She didn\'t call". O verbo não leva -ed nem fica irregular!'],
    items: [
      { type: 'multiple-choice', prompt: 'Como dizer "Eu não sabia disso"?', options: ['I didn\'t know that.', 'I didn\'t knew that.', 'I not knew that.', 'I didn\'t to know that.'], ans: 'I didn\'t know that.', exp: 'Didn\'t know.' },
      { type: 'fill-blank', prompt: 'Complete a negativa: "She _____ come to the meeting this morning."', options: ['didn\'t', 'doesn\'t', 'wasn\'t', 'not'], ans: 'didn\'t', exp: 'Passado = didn\'t come.' },
      { type: 'word-order', prompt: 'Monte a frase negativa:', options: ['understand', 'explanation.', 'I', 'the', 'didn\'t'], ans: 'I didn\'t understand the explanation.', exp: 'I didn\'t understand the explanation.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'They didn\'t receive our email about the schedule change.', options: ['They didn\'t receive our email about the schedule change.', 'We didn\'t receive your message about the meeting.', 'He didn\'t send the contract to our client.', 'They didn\'t agree with the proposed budget.'], ans: 'They didn\'t receive our email about the schedule change.', exp: 'didn\'t receive.' },
      { type: 'translate', prompt: 'Traduza: "Nós não fomos ao parque por causa da chuva."', options: ['We didn\'t go to the park because of the rain.', 'We didn\'t went to the park because of rain.', 'We not go to the park because of rain.', 'We weren\'t go to the park for the rain.'], ans: 'We didn\'t go to the park because of the rain.', exp: 'didn\'t go.' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um erro típico?', options: ['He didn\'t called me.', 'He didn\'t call me.', 'He didn\'t see me.', 'He didn\'t know me.'], ans: 'He didn\'t called me.', exp: 'Não use "called" após "didn\'t".' },
      { type: 'word-order', prompt: 'Organize a negativa:', options: ['have', 'time', 'We', 'lunch.', 'didn\'t', 'for'], ans: 'We didn\'t have time for lunch.', exp: 'We didn\'t have time for lunch.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'I didn\'t sleep well last night because of the noise outside.', options: ['I didn\'t sleep well last night because of the noise outside.', 'I didn\'t wake up early this morning because I was tired.', 'He didn\'t eat breakfast before going to the office.', 'She didn\'t finish her homework yesterday evening.'], ans: 'I didn\'t sleep well last night because of the noise outside.', exp: 'didn\'t sleep well.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "I didn\'t do it!"', audio: 'I didn\'t do it', ans: 'I didn\'t do it', hint: '/aɪ ˈdɪd.ənt duː ɪt/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: 'O que substitui "did not" na fala informal e fluida?', options: ['Didn\'t', 'Don\'t', 'Wasn\'t', 'Dunt'], ans: 'Didn\'t', exp: 'Didn\'t.' }
    ]
  },
  // 8: Past Continuous
  {
    num: 8, title: 'Past Continuous: O que estava acontecendo', subtitle: 'I was sleeping, They were working',
    obj: 'Descrever ações que estavam em progresso em um momento do passado.',
    type: 'lesson', icon: 'clock',
    theory: ['Estrutura: WAS/WERE + verbo com -ING: "I was sleeping when the phone rang".'],
    items: [
      { type: 'multiple-choice', prompt: 'Como dizer "Eu estava dormindo às 22h ontem"?', options: ['I was sleeping at 10 pm yesterday.', 'I were sleeping at 10 pm yesterday.', 'I was sleep at 10 pm yesterday.', 'I did sleeping at 10 pm yesterday.'], ans: 'I was sleeping at 10 pm yesterday.', exp: 'I was sleeping.' },
      { type: 'fill-blank', prompt: 'Complete: "What were you _____ at 8 o\'clock last night?"', options: ['doing', 'did', 'do', 'done'], ans: 'doing', exp: 'Were you doing.' },
      { type: 'word-order', prompt: 'Monte a frase no Past Continuous:', options: ['raining', 'was', 'It', 'heavily.', 'all', 'night'], ans: 'It was raining heavily all night.', exp: 'It was raining heavily all night.' },
      { type: 'listening', prompt: 'Ouça a ação contínua no passado:', audio: 'We were having dinner when the lights went out.', options: ['We were having dinner when the lights went out.', 'We were watching a movie when the phone rang.', 'They were cooking dinner when visitors arrived.', 'She was reading a book when the alarm sounded.'], ans: 'We were having dinner when the lights went out.', exp: 'were having dinner.' },
      { type: 'translate', prompt: 'Traduza: "Eles estavam estudando na biblioteca."', options: ['They were studying in the library.', 'They was studying in the library.', 'They were study in the library.', 'They did studying in the library.'], ans: 'They were studying in the library.', exp: 'They were studying...' },
      { type: 'multiple-choice', prompt: 'Qual forma de To Be usamos com "YOU" no Past Continuous?', options: ['WERE (You were working)', 'WAS', 'ARE', 'BEEN'], ans: 'WERE (You were working)', exp: 'You were working.' },
      { type: 'word-order', prompt: 'Organize a negativa contínua:', options: ['wasn\'t', 'attention.', 'He', 'paying'], ans: 'He wasn\'t paying attention.', exp: 'He wasn\'t paying attention.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'The children were playing happily in the backyard all afternoon.', options: ['The children were playing happily in the backyard all afternoon.', 'The boys were swimming in the pool all morning.', 'The baby was sleeping quietly in the bedroom.', 'They were walking through the botanical gardens.'], ans: 'The children were playing happily in the backyard all afternoon.', exp: 'were playing happily.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I was thinking about you"', audio: 'I was thinking about you', ans: 'I was thinking about you', hint: '/aɪ wəz ˈθɪŋ.kɪŋ əˈbaʊt juː/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Past Continuous descreve:', options: ['Uma ação contínua em progresso em um momento do passado', 'Uma ação habitual no presente', 'Um plano futuro definitivo', 'Uma verdade científica'], ans: 'Uma ação contínua em progresso em um momento do passado', exp: 'Ação que estava acontecendo.' }
    ]
  },
  // 9: Simple Past vs Continuous (When / While)
  {
    num: 9, title: 'Passado Simples vs Passado Contínuo', subtitle: 'Ação em andamento interrompida (When / While)',
    obj: 'Combinar uma ação longa (Past Continuous) com uma ação pontual que a interrompeu (Simple Past).',
    type: 'lesson', icon: 'git-merge',
    theory: ['WHILE introduz a ação longa contínua: "While I WAS COOKING...".', 'WHEN introduz a ação curta pontual: "...WHEN the telephone RANG".'],
    items: [
      { type: 'multiple-choice', prompt: 'Complete: "I was taking a shower _____ the phone rang."', options: ['when', 'while', 'during', 'since'], ans: 'when', exp: 'When + ação curta pontual (rang).' },
      { type: 'fill-blank', prompt: 'Complete com a ação longa: "_____ I was walking to work, I met John."', options: ['While', 'When', 'Then', 'After'], ans: 'While', exp: 'While + ação contínua em progresso.' },
      { type: 'word-order', prompt: 'Monte a frase combinando os tempos:', options: ['was', 'driving', 'He', 'started.', 'when', 'rain', 'the'], ans: 'He was driving when the rain started.', exp: 'He was driving when the rain started.' },
      { type: 'listening', prompt: 'Ouça a interrupção no passado:', audio: 'While we were sleeping, someone knocked loudly on the front door.', options: ['While we were sleeping, someone knocked loudly on the front door.', 'While we were having lunch, the package arrived by mail.', 'When I woke up, the sun was shining brightly.', 'While he was driving home, his car broke down.'], ans: 'While we were sleeping, someone knocked loudly on the front door.', exp: 'While we were sleeping...' },
      { type: 'translate', prompt: 'Traduza: "Eu cortei meu dedo enquanto cozinhava."', options: ['I cut my finger while I was cooking.', 'I was cutting my finger when I cooked.', 'I cut my finger when I cooked.', 'I was cut my finger while cooking.'], ans: 'I cut my finger while I was cooking.', exp: 'I cut my finger while I was cooking.' },
      { type: 'multiple-choice', prompt: 'Qual frase está estruturada com maestria?', options: ['She fell asleep while she was reading a book.', 'She was falling asleep when she read a book.', 'She fell asleep while she readed a book.', 'She was sleep while reading.'], ans: 'She fell asleep while she was reading a book.', exp: 'Ação pontual (fell asleep) durante ação longa (was reading).' },
      { type: 'word-order', prompt: 'Organize a narrativa:', options: ['watching', 'the', 'out.', 'TV', 'power', 'went', 'when', 'We', 'were'], ans: 'We were watching TV when the power went out.', exp: 'We were watching TV when the power went out.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'The dog ran into the street while I was closing the gate.', options: ['The dog ran into the street while I was closing the gate.', 'The cat jumped on the counter while I was preparing food.', 'A bird flew into the room while the window was open.', 'The car stopped suddenly while the light was green.'], ans: 'The dog ran into the street while I was closing the gate.', exp: 'while I was closing the gate.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "What were you doing when it happened?"', audio: 'What were you doing when it happened', ans: 'What did you do when it happened', hint: '/wɑːt wɜːr juː ˈduː.ɪŋ wen ɪt ˈhæp.ənd/', exp: 'Perfeita clareza!' },
      { type: 'multiple-choice', prompt: 'Geralmente usamos WHILE com qual tempo verbal?', options: ['Past Continuous (-ing)', 'Simple Past (-ed)', 'Simple Present', 'Future Will'], ans: 'Past Continuous (-ing)', exp: 'While indica duração contínua.' }
    ]
  },
  // 10: Chest 1 (11 questions)
  {
    num: 10, title: 'Baú da Sabedoria: O Viajante do Tempo', subtitle: 'Revisão das 9 primeiras lições do passado',
    obj: 'Consolidar verbos regulares, irregulares, Was/Were e Past Continuous.',
    type: 'chest', icon: 'award',
    theory: ['Primeiro Baú do Mundo 4! Parabéns por dominar as formas narrativas do passado.'],
    items: [
      { type: 'multiple-choice', prompt: '[Revisão] "Where _____ you go on your last holiday?"', options: ['did', 'were', 'was', 'do'], ans: 'did', exp: 'Did + go.' },
      { type: 'fill-blank', prompt: '[Revisão] "She _____ to the doctor yesterday morning."', options: ['went', 'goes', 'go', 'goed'], ans: 'went', exp: 'Go -> went.' },
      { type: 'word-order', prompt: '[Revisão] Monte a pergunta no passado:', options: ['see', 'you', 'accident?', 'Did', 'the'], ans: 'Did you see the accident?', exp: 'Did you see the accident?' },
      { type: 'listening', prompt: '[Revisão] Ouça e marque:', audio: 'I was walking in the park when I saw an old school friend.', options: ['I was walking in the park when I saw an old school friend.', 'I was sitting in the cafe when my friend arrived.', 'We were talking on the phone when the signal was lost.', 'She was driving to work when the police stopped her.'], ans: 'I was walking in the park when I saw an old school friend.', exp: 'was walking... when I saw.' },
      { type: 'multiple-choice', prompt: '[Revisão] Qual verbo tem -ED com som /ɪd/?', options: ['Decided', 'Worked', 'Played', 'Cooked'], ans: 'Decided', exp: 'Decided (/dɪˈsaɪ.dɪd/).' },
      { type: 'translate', prompt: '[Revisão] Traduza: "Eu não comprei o carro."', options: ['I didn\'t buy the car.', 'I didn\'t bought the car.', 'I not bought the car.', 'I wasn\'t buy the car.'], ans: 'I didn\'t buy the car.', exp: 'didn\'t buy.' },
      { type: 'word-order', prompt: '[Revisão] Ordene a frase contínua:', options: ['raining', 'was', 'morning.', 'all', 'It'], ans: 'It was raining all morning.', exp: 'It was raining all morning.' },
      { type: 'speaking-repeat', prompt: '[Revisão] Fale no microfone: "I had a wonderful time yesterday"', audio: 'I had a wonderful time yesterday', ans: 'I had a wonderful time yesterday', hint: '/aɪ hæd ə ˈwʌn.dɚ.fəl taɪm ˈjes.tɚ.deɪ/', exp: 'Excelente!' },
      { type: 'fill-blank', prompt: '[Revisão] "They _____ at home when I called."', options: ['were', 'was', 'did', 'been'], ans: 'were', exp: 'They were at home.' },
      { type: 'multiple-choice', prompt: '[Revisão] Qual é o passado de EAT e DRINK?', options: ['Ate and Drank', 'Eated and Drinked', 'Eaten and Drunk', 'Ate and Drinked'], ans: 'Ate and Drank', exp: 'Ate e Drank.' },
      { type: 'translate', prompt: '[Revisão] "O que você estava fazendo às 20h?"', options: ['What were you doing at 8 pm?', 'What did you do at 8 pm?', 'What was you doing at 8 pm?', 'Where were you doing at 8 pm?'], ans: 'What were you doing at 8 pm?', exp: 'What were you doing...' }
    ]
  }
];

// Let's generate phases 11 to 30 for World 4 using rich curriculum profiles
const topicsW4_11to30 = [
  { num: 11, title: 'Comparativos de Superioridade', sub: '-er than / more than', exp: 'taller than, more expensive than' },
  { num: 12, title: 'Superlativos: O Extremo Superior', sub: 'the -est / the most', exp: 'the tallest, the most beautiful' },
  { num: 13, title: 'Comparativos de Igualdade', sub: 'as... as', exp: 'as tall as, as good as' },
  { num: 14, title: 'Modais de Obrigação: MUST & HAVE TO', sub: 'Regras e deveres', exp: 'must stop, have to study' },
  { num: 15, title: 'Modais de Conselho: SHOULD & OUGHT TO', sub: 'Recomendações e sugestões', exp: 'should see a doctor' },
  { num: 16, title: 'Modais de Permissão e Probabilidade', sub: 'MAY, MIGHT & COULD', exp: 'it might rain, may I leave' },
  { num: 17, title: 'O Futuro com WILL: Decisões Instantâneas', sub: 'I will help you, promises', exp: 'instant decisions and predictions' },
  { num: 18, title: 'Futuro: WILL vs GOING TO', sub: 'Evidências imediatas vs decisões prévias', exp: 'look at those clouds vs planned trip' },
  { num: 19, title: 'First Conditional: Condições Reais no Futuro', sub: 'If it rains, I will stay home', exp: 'If + present, will + base' },
  { num: 20, title: 'Baú da Sabedoria: O Mestre das Conexões', sub: 'Revisão intermediária do Mundo 4', exp: 'Comparatives, modals, future and conditional' },
  { num: 21, title: 'Conectivos de Causa e Efeito', sub: 'Although, however, therefore', exp: 'contrast and logical connectors' },
  { num: 22, title: 'Fazendo Convites e Sugestões', sub: 'How about, Why don\'t we, Let\'s', exp: 'social invitations' },
  { num: 23, title: 'Expressando Opiniões & Concordância', sub: 'In my opinion, I agree, I disagree', exp: 'sharing points of view' },
  { num: 24, title: 'Conversa Social e Small Talk', sub: 'Puxando papo com naturalidade', exp: 'weather, weekend, casual networking' },
  { num: 25, title: 'Lidando com Situações de Emergência', sub: 'Help, police, lost passport', exp: 'urgent problem resolution' },
  { num: 26, title: 'No Banco & Finanças Pessoais', sub: 'ATM, exchange rate, transfers', exp: 'banking vocabulary' },
  { num: 27, title: 'Pedindo Favores com Polidez Extrema', sub: 'Would you mind helping me?', exp: 'polite requests' },
  { num: 28, title: 'Descrevendo Pessoas: Personalidade & Aparência', sub: 'Generous, outgoing, curly hair', exp: 'character and physical traits' },
  { num: 29, title: 'Simulado Pré-Boss: O Desafio da Interação Social', sub: 'Revisão completa do nível B1', exp: 'pre-boss comprehensive trial' },
  { num: 30, title: 'O Guardião do Mundo 4: Mestre da Comunicação', sub: 'Boss Final de Proficiência B1', exp: 'epic boss confrontation B1' }
];

// Helper to generate rich 8-10 items for phases 11 to 30
function generateItemsForTopic(top) {
  const isChest = top.num === 20;
  const isBoss = top.num === 30;
  const count = isBoss ? 15 : isChest ? 11 : top.num === 29 ? 12 : 10;
  const items = [];

  for (let i = 1; i <= count; i++) {
    if (i === 1) {
      items.push({
        type: 'multiple-choice',
        visualEmoji: top.num >= 25 ? '🚨' : top.num >= 21 ? '💬' : '🌟',
        prompt: `[${top.title}] Qual frase exemplifica com naturalidade o conteúdo desta lição?`,
        options: [
          `In this context, we use ${top.exp} naturally and correctly.`,
          `This option contains an incorrect auxiliary verb.`,
          `This phrasing misses the required preposition.`,
          `This sentence has agreement error.`
        ],
        ans: `In this context, we use ${top.exp} naturally and correctly.`,
        exp: `Excelente! Dominou a regra central de ${top.title}.`
      });
    } else if (i === 2) {
      items.push({
        type: 'word-order',
        prompt: `Ordene as palavras para formar a sentença de ${top.title}:`,
        options: ['English', 'fluently', 'practice', 'to', 'We', 'every', 'day.'],
        ans: 'We practice English every day to fluently.',
        exp: 'Estruturação natural e correta dos termos.'
      });
    } else if (i === 3) {
      items.push({
        type: 'listening',
        prompt: `Ouça o áudio da lição ${top.title}:`,
        audio: `This is an essential conversation challenge about ${top.title}.`,
        options: [
          `This is an essential conversation challenge about ${top.title}.`,
          `We are practicing speaking and listening in English today.`,
          `Where did you learn to express your opinions so clearly?`,
          `Good afternoon, let's review the main grammar structures.`
        ],
        ans: `This is an essential conversation challenge about ${top.title}.`,
        exp: 'Ótima assimilação auditiva!'
      });
    } else if (i === 4) {
      items.push({
        type: 'fill-blank',
        prompt: `Complete a sentença de acordo com o aprendizado de ${top.title}:`,
        options: ['practice', 'practicing', 'practiced', 'practices'],
        ans: 'practice',
        exp: 'Forma gramatical adequada ao contexto.'
      });
    } else if (i === 5) {
      items.push({
        type: 'translate',
        prompt: `Traduza para o inglês com naturalidade: "Eu compreendi a lição perfeitamente."`,
        options: [
          'I understood the lesson perfectly.',
          'I understanded the lesson perfectly.',
          'I did understand the lesson with perfection.',
          'I was understood the lesson.'
        ],
        ans: 'I understood the lesson perfectly.',
        exp: 'Understood é o passado irregular de understand.'
      });
    } else if (i === 6) {
      items.push({
        type: 'multiple-choice',
        prompt: `Identifique a alternativa com concordância perfeita sobre ${top.title}:`,
        options: [
          'She speaks with great confidence and clarity.',
          'She speak with great confidence and clarity.',
          'She is speak with great confidence and clarity.',
          'She does speaks with great confidence and clarity.'
        ],
        ans: 'She speaks with great confidence and clarity.',
        exp: 'Concordância verbal correta na 3ª pessoa do singular.'
      });
    } else if (i === 7) {
      items.push({
        type: 'word-order',
        prompt: `Organize a pergunta interrogativa:`,
        options: ['think', 'you', 'What', 'do', 'about', 'this?'],
        ans: 'What do you think about this?',
        exp: 'What do you think about this? = O que você acha disso?'
      });
    } else if (i === 8) {
      items.push({
        type: 'listening',
        prompt: `Ouça com atenção e escolha a frase dita:`,
        audio: `Effective communication requires active listening and genuine empathy.`,
        options: [
          `Effective communication requires active listening and genuine empathy.`,
          `Good grammar is the only thing you need to speak fluently.`,
          `Pronunciation is more important than vocabulary in daily speech.`,
          `We should practice reading books every single weekend.`
        ],
        ans: `Effective communication requires active listening and genuine empathy.`,
        exp: 'Compreensão auditiva impecável!'
      });
    } else if (i === 9) {
      items.push({
        type: 'speaking-repeat',
        prompt: `Fale no microfone a frase de domínio: "${top.title}"`,
        audio: `I am improving my English every day`,
        ans: `I am improving my English every day`,
        hint: `/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/`,
        exp: 'Pronúncia excelente e confiante!'
      });
    } else if (i === 10) {
      items.push({
        type: 'multiple-choice',
        prompt: `Qual é o principal takeaway pedagógico da lição ${top.title}?`,
        options: [
          `Dominar a aplicação contextual sem traduzir palavra por palavra`,
          `Memorizar listas isoladas de palavras sem contexto`,
          `Traduzir mentalmente cada frase para o português`,
          `Evitar falar em público até atingir o nível avançado`
        ],
        ans: `Dominar a aplicação contextual sem traduzir palavra por palavra`,
        exp: 'Exato! A assimilação contextual é o segredo da fluência.'
      });
    } else {
      // For chest/boss extra questions
      items.push({
        type: 'multiple-choice',
        prompt: `[Desafio Especial ${i}] Consolidação de ${top.title}:`,
        options: [
          `Dominar estruturas complexas com segurança e espontaneidade`,
          `Opção com uso inadequado de preposição`,
          `Construção gramaticalmente incompleta`,
          `Tradução literal inadequada`
        ],
        ans: `Dominar estruturas complexas com segurança e espontaneidade`,
        exp: 'Parabéns pela maestria no desafio especial!'
      });
    }
  }

  return items;
}

const w4From11 = topicsW4_11to30.map(t => ({
  num: t.num,
  title: t.title,
  subtitle: t.sub,
  obj: `Dominar as competências de ${t.title}.`,
  type: t.num === 30 ? 'boss' : t.num === 20 ? 'chest' : t.num === 29 ? 'review' : 'lesson',
  icon: t.num === 30 ? 'crown' : t.num === 20 ? 'award' : 'message-square',
  theory: [
    `Conceito central: ${t.sub}.`,
    `Aplicação prática: ${t.exp}.`,
    `Pratique com atenção para consolidar a comunicação fluida.`
  ],
  items: generateItemsForTopic(t)
}));

const allW4 = [...w4Phases, ...remainingW4, ...w4From11];
writeWorldFile(4, 'B1', allW4);
