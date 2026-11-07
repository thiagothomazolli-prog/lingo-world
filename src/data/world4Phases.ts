import { Phase } from '../types';

export const WORLD_4_PHASES: Phase[] = [
  {
    "id": "w4-p1",
    "worldId": 4,
    "phaseNumber": 1,
    "title": "Passado Simples: Verbos Regulares (-ED)",
    "subtitle": "Worked, played, studied, lived",
    "pedagogicalObjective": "Narrar ações passadas com verbos regulares.",
    "type": "lesson",
    "icon": "clock",
    "cefrLevel": "B1",
    "theorySummary": [
      "Verbos regulares formam o passado com -ED: work -> worked, play -> played, live -> lived, study -> studied.",
      "Usado com expressões de tempo passado: yesterday, last week, in 2020, two days ago."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p1-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Eu trabalhei até tarde ontem à noite\"?",
        "correctAnswer": "I worked late last night.",
        "explanation": "Passado regular = worked.",
        "skillCategory": "vocabulary",
        "visualEmoji": "💼",
        "options": [
          "I worked late last night.",
          "I work late last night.",
          "I am worked late last night.",
          "I was work late last night."
        ]
      },
      {
        "id": "w4-p1-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"They _____ soccer in the park yesterday afternoon.\"",
        "correctAnswer": "played",
        "explanation": "Play -> played.",
        "skillCategory": "vocabulary",
        "visualEmoji": "⚽",
        "options": [
          "played",
          "play",
          "playing",
          "did played"
        ]
      },
      {
        "id": "w4-p1-e3",
        "type": "word-order",
        "prompt": "Monte a frase no passado simples:",
        "correctAnswer": "She studied hard for the test.",
        "explanation": "Study -> studied.",
        "skillCategory": "grammar",
        "options": [
          "hard",
          "test.",
          "studied",
          "for",
          "the",
          "She"
        ]
      },
      {
        "id": "w4-p1-e4",
        "type": "listening",
        "prompt": "Ouça a frase no passado:",
        "correctAnswer": "We lived in Canada for five years before moving here.",
        "explanation": "lived in Canada for five years.",
        "skillCategory": "listening",
        "audioPhrase": "We lived in Canada for five years before moving here.",
        "options": [
          "We lived in Canada for five years before moving here.",
          "We worked in Canada for five years before moving here.",
          "They lived in Australia for five years before moving here.",
          "We stayed in Canada for five months before moving here."
        ]
      },
      {
        "id": "w4-p1-e5",
        "type": "translate",
        "prompt": "Traduza: \"Ele me ligou há duas horas.\"",
        "correctAnswer": "He called me two hours ago.",
        "explanation": "Two hours ago = há duas horas.",
        "skillCategory": "reading",
        "options": [
          "He called me two hours ago.",
          "He called me two hours before.",
          "He did call me two hours back.",
          "He was calling me two hours ago."
        ]
      },
      {
        "id": "w4-p1-e6",
        "type": "multiple-choice",
        "prompt": "Como fica o passado de \"STOP\"?",
        "correctAnswer": "Stopped (dobra o P)",
        "explanation": "Consoante-vogal-consoante (CVC) dobra a última letra: stop -> stopped.",
        "skillCategory": "vocabulary",
        "options": [
          "Stopped (dobra o P)",
          "Stoped",
          "Stopte",
          "Stoppen"
        ]
      },
      {
        "id": "w4-p1-e7",
        "type": "word-order",
        "prompt": "Organize a ação passada:",
        "correctAnswer": "I cleaned the apartment this morning.",
        "explanation": "I cleaned the apartment this morning.",
        "skillCategory": "grammar",
        "options": [
          "cleaned",
          "morning.",
          "apartment",
          "the",
          "I",
          "this"
        ]
      },
      {
        "id": "w4-p1-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "The train arrived on time despite the heavy snowfall.",
        "explanation": "arrived on time.",
        "skillCategory": "listening",
        "audioPhrase": "The train arrived on time despite the heavy snowfall.",
        "options": [
          "The train arrived on time despite the heavy snowfall.",
          "The bus arrived late because of heavy traffic.",
          "The flight departed on time despite the rain.",
          "The train stopped twice before reaching the station."
        ]
      },
      {
        "id": "w4-p1-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I worked all day yesterday\"",
        "correctAnswer": "I worked all day yesterday",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I worked all day yesterday",
        "phoneticHint": "/aɪ wɜːrkt ɔːl deɪ ˈjes.tɚ.deɪ/"
      },
      {
        "id": "w4-p1-e10",
        "type": "multiple-choice",
        "prompt": "Qual expressão de tempo indica passado?",
        "correctAnswer": "Yesterday",
        "explanation": "Yesterday = ontem.",
        "skillCategory": "vocabulary",
        "options": [
          "Yesterday",
          "Tomorrow",
          "Right now",
          "Next week"
        ]
      }
    ]
  },
  {
    "id": "w4-p2",
    "worldId": 4,
    "phaseNumber": 2,
    "title": "Pronúncia do -ED: /t/, /d/, /ɪd/",
    "subtitle": "Wanted, watched, played",
    "pedagogicalObjective": "Dominar os três sons do sufixo -ED em inglês.",
    "type": "lesson",
    "icon": "volume-2",
    "cefrLevel": "B1",
    "theorySummary": [
      "1. Som /ɪd/: APENAS após sons de T ou D (wanted, needed, decided). Adiciona uma sílaba extra!",
      "2. Som /t/: após consoantes surdas (watched, worked, laughed, stopped).",
      "3. Som /d/: após vogais e consoantes sonoras (played, lived, opened, called)."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p2-e1",
        "type": "multiple-choice",
        "prompt": "Qual verbo tem a terminação -ED pronunciada como uma sílaba extra /ɪd/?",
        "correctAnswer": "Wanted (/ˈwɑːn.tɪd/)",
        "explanation": "Apenas após som de T ou D o -ED vira sílaba extra /ɪd/!",
        "skillCategory": "vocabulary",
        "options": [
          "Wanted (/ˈwɑːn.tɪd/)",
          "Worked (/wɜːrkt/)",
          "Played (/pleɪd/)",
          "Watched (/wɑːtʃt/)"
        ]
      },
      {
        "id": "w4-p2-e2",
        "type": "fill-blank",
        "prompt": "Complete o som /ɪd/: \"I _____ help with my luggage.\"",
        "correctAnswer": "needed",
        "explanation": "Need termina em D -> needed (/ˈniː.dɪd/).",
        "skillCategory": "vocabulary",
        "options": [
          "needed",
          "asked",
          "looked",
          "helped"
        ]
      },
      {
        "id": "w4-p2-e3",
        "type": "word-order",
        "prompt": "Monte a frase com pronúncia /t/:",
        "correctAnswer": "We watched a great movie.",
        "explanation": "Watched soa como /wɑːtʃt/ (uma sílaba só!).",
        "skillCategory": "grammar",
        "options": [
          "watched",
          "movie.",
          "a",
          "great",
          "We"
        ]
      },
      {
        "id": "w4-p2-e4",
        "type": "listening",
        "prompt": "Ouça e identifique o verbo com som /ɪd/:",
        "correctAnswer": "She decided to accept the scholarship in Oxford.",
        "explanation": "Decided (/dɪˈsaɪ.dɪd/).",
        "skillCategory": "listening",
        "audioPhrase": "She decided to accept the scholarship in Oxford.",
        "options": [
          "She decided to accept the scholarship in Oxford.",
          "She worked hard to get into Oxford university.",
          "She asked for information about the Oxford course.",
          "She planned her trip to Oxford last winter."
        ]
      },
      {
        "id": "w4-p2-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eles visitaram Paris.\"",
        "correctAnswer": "They visited Paris.",
        "explanation": "Visited (/ˈvɪz.ɪ.tɪd/).",
        "skillCategory": "reading",
        "options": [
          "They visited Paris.",
          "They visit Paris.",
          "They were visited Paris.",
          "They did visited Paris."
        ]
      },
      {
        "id": "w4-p2-e6",
        "type": "multiple-choice",
        "prompt": "No verbo \"PLAYED\", como soa o -ED?",
        "correctAnswer": "Som de /d/ (uma sílaba só: /pleɪd/)",
        "explanation": "Played é monossílabo: /pleɪd/.",
        "skillCategory": "vocabulary",
        "options": [
          "Som de /d/ (uma sílaba só: /pleɪd/)",
          "Som de /ɪd/ (duas sílabas)",
          "Som de /ed/ como no português",
          "O ED é mudo"
        ]
      },
      {
        "id": "w4-p2-e7",
        "type": "word-order",
        "prompt": "Organize a frase com som /t/:",
        "correctAnswer": "They walked through the park.",
        "explanation": "Walked (/wɔːkt/).",
        "skillCategory": "grammar",
        "options": [
          "walked",
          "the",
          "park.",
          "through",
          "They"
        ]
      },
      {
        "id": "w4-p2-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "I waited for over forty minutes in the rain.",
        "explanation": "Waited (/ˈweɪ.tɪd/).",
        "skillCategory": "listening",
        "audioPhrase": "I waited for over forty minutes in the rain.",
        "options": [
          "I waited for over forty minutes in the rain.",
          "I walked for over forty minutes in the rain.",
          "I worked for over forty minutes today.",
          "I watched the rain for forty minutes."
        ]
      },
      {
        "id": "w4-p2-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"Wanted, needed, decided\"",
        "correctAnswer": "Wanted needed decided",
        "explanation": "Perfeita pronúncia do som /ɪd/!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Wanted needed decided",
        "phoneticHint": "/ˈwɑːn.tɪd ˈniː.dɪd dɪˈsaɪ.dɪd/"
      },
      {
        "id": "w4-p2-e10",
        "type": "multiple-choice",
        "prompt": "Quantas sílabas tem a palavra \"WORKED\"?",
        "correctAnswer": "Apenas 1 sílaba (/wɜːrkt/)",
        "explanation": "Worked tem apenas UMA sílaba! O \"e\" não é pronunciado.",
        "skillCategory": "vocabulary",
        "options": [
          "Apenas 1 sílaba (/wɜːrkt/)",
          "2 sílabas (work-ed)",
          "3 sílabas",
          "Varia com o sotaque"
        ]
      }
    ]
  },
  {
    "id": "w4-p3",
    "worldId": 4,
    "phaseNumber": 3,
    "title": "Passado com Verbo TO BE: WAS & WERE",
    "subtitle": "I was happy, They were at the party",
    "pedagogicalObjective": "Usar WAS e WERE para descrever estados e locais no passado.",
    "type": "lesson",
    "icon": "book-open",
    "cefrLevel": "B1",
    "theorySummary": [
      "WAS para I, He, She, It: \"I was tired\", \"He was at home\".",
      "WERE para You, We, They: \"You were right\", \"They were happy\".",
      "Negativas: wasn't / weren't. Perguntas: \"Were you at home?\"."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p3-e1",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Nós estávamos na festa ontem à noite\"?",
        "correctAnswer": "We were at the party last night.",
        "explanation": "Com \"We\" usamos WERE.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🎉",
        "options": [
          "We were at the party last night.",
          "We was at the party last night.",
          "We were been at the party.",
          "We did at the party last night."
        ]
      },
      {
        "id": "w4-p3-e2",
        "type": "fill-blank",
        "prompt": "Complete com o passado de To Be: \"She _____ very happy with the good news.\"",
        "correctAnswer": "was",
        "explanation": "She -> was.",
        "skillCategory": "vocabulary",
        "options": [
          "was",
          "were",
          "is",
          "been"
        ]
      },
      {
        "id": "w4-p3-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta no passado com To Be:",
        "correctAnswer": "Were you at home yesterday?",
        "explanation": "Were you at home yesterday?",
        "skillCategory": "grammar",
        "options": [
          "you",
          "Were",
          "home",
          "at",
          "yesterday?"
        ]
      },
      {
        "id": "w4-p3-e4",
        "type": "listening",
        "prompt": "Ouça a frase no passado:",
        "correctAnswer": "The weather was cold and rainy all weekend.",
        "explanation": "The weather was cold and rainy...",
        "skillCategory": "listening",
        "audioPhrase": "The weather was cold and rainy all weekend.",
        "options": [
          "The weather was cold and rainy all weekend.",
          "The weather is warm and sunny today.",
          "The weather was hot and humid in summer.",
          "The weather wasn't cold during the holiday."
        ]
      },
      {
        "id": "w4-p3-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eles não estavam ocupados.\"",
        "correctAnswer": "They weren't busy.",
        "explanation": "They weren't busy.",
        "skillCategory": "reading",
        "options": [
          "They weren't busy.",
          "They wasn't busy.",
          "They didn't busy.",
          "They not were busy."
        ]
      },
      {
        "id": "w4-p3-e6",
        "type": "multiple-choice",
        "prompt": "Qual forma é usada para \"I\" e \"HE\" no passado?",
        "correctAnswer": "WAS",
        "explanation": "I was, He was, She was, It was.",
        "skillCategory": "vocabulary",
        "options": [
          "WAS",
          "WERE",
          "ARE",
          "BEEN"
        ]
      },
      {
        "id": "w4-p3-e7",
        "type": "word-order",
        "prompt": "Organize a negativa com WASN'T:",
        "correctAnswer": "It wasn't my fault.",
        "explanation": "It wasn't my fault = Não foi minha culpa.",
        "skillCategory": "grammar",
        "options": [
          "fault.",
          "wasn't",
          "It",
          "my"
        ]
      },
      {
        "id": "w4-p3-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Where were you yesterday at three o'clock?",
        "explanation": "Where were you...?",
        "skillCategory": "listening",
        "audioPhrase": "Where were you yesterday at three o'clock?",
        "options": [
          "Where were you yesterday at three o'clock?",
          "Where was he yesterday at three o'clock?",
          "Who were you with yesterday afternoon?",
          "Why were you absent from class yesterday?"
        ]
      },
      {
        "id": "w4-p3-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I was very happy to see you\"",
        "correctAnswer": "I was very happy to see you",
        "explanation": "Muito bem!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I was very happy to see you",
        "phoneticHint": "/aɪ wəz ˈver.i ˈhæp.i tuː siː juː/"
      },
      {
        "id": "w4-p3-e10",
        "type": "multiple-choice",
        "prompt": "Como responder afirmativamente a \"Were you tired?\" de forma curta?",
        "correctAnswer": "Yes, I was.",
        "explanation": "Yes, I was.",
        "skillCategory": "vocabulary",
        "options": [
          "Yes, I was.",
          "Yes, I were.",
          "Yes, I did.",
          "Yes, I am."
        ]
      }
    ]
  },
  {
    "id": "w4-p4",
    "worldId": 4,
    "phaseNumber": 4,
    "title": "Verbos Irregulares Mais Usados (Parte 1)",
    "subtitle": "Went, saw, had, did, made, took",
    "pedagogicalObjective": "Dominar os verbos irregulares mais frequentes do idioma.",
    "type": "lesson",
    "icon": "shuffle",
    "cefrLevel": "B1",
    "theorySummary": [
      "Go -> WENT, See -> SAW, Have -> HAD, Do -> DID, Make -> MADE, Take -> TOOK.",
      "Verbos irregulares não usam -ED; mudam de forma no passado."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p4-e1",
        "type": "multiple-choice",
        "prompt": "Qual é o passado irregular de \"GO\" (ir)?",
        "correctAnswer": "WENT",
        "explanation": "Go -> Went. Ex: \"I went to London\".",
        "skillCategory": "vocabulary",
        "visualEmoji": "✈️",
        "options": [
          "WENT",
          "Goed",
          "Gone",
          "Goes"
        ]
      },
      {
        "id": "w4-p4-e2",
        "type": "fill-blank",
        "prompt": "Complete com o passado de SEE (ver): \"I _____ an amazing movie yesterday.\"",
        "correctAnswer": "saw",
        "explanation": "See -> Saw.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🎬",
        "options": [
          "saw",
          "see",
          "seed",
          "seen"
        ]
      },
      {
        "id": "w4-p4-e3",
        "type": "word-order",
        "prompt": "Monte a frase com o verbo HAVE no passado:",
        "correctAnswer": "We had a great time together.",
        "explanation": "Have -> Had.",
        "skillCategory": "grammar",
        "options": [
          "great",
          "We",
          "a",
          "time",
          "together.",
          "had"
        ]
      },
      {
        "id": "w4-p4-e4",
        "type": "listening",
        "prompt": "Ouça o verbo irregular:",
        "correctAnswer": "She took a taxi to the airport this morning.",
        "explanation": "Take -> Took.",
        "skillCategory": "listening",
        "audioPhrase": "She took a taxi to the airport this morning.",
        "options": [
          "She took a taxi to the airport this morning.",
          "She took a bus to Central Station this morning.",
          "He took a train to the city center yesterday.",
          "She drove her car to the airport this morning."
        ]
      },
      {
        "id": "w4-p4-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu fiz um bolo de chocolate.\"",
        "correctAnswer": "I made a chocolate cake.",
        "explanation": "Make -> Made (fazer algo tangível/culinário = make).",
        "skillCategory": "reading",
        "options": [
          "I made a chocolate cake.",
          "I did a chocolate cake.",
          "I maked a chocolate cake.",
          "I make a chocolate cake."
        ]
      },
      {
        "id": "w4-p4-e6",
        "type": "multiple-choice",
        "prompt": "Qual é o passado de \"DO\" (fazer)?",
        "correctAnswer": "DID",
        "explanation": "Do -> Did.",
        "skillCategory": "vocabulary",
        "options": [
          "DID",
          "Done",
          "Doed",
          "Does"
        ]
      },
      {
        "id": "w4-p4-e7",
        "type": "word-order",
        "prompt": "Organize a frase com WENT:",
        "correctAnswer": "They went to the park yesterday.",
        "explanation": "They went to the park yesterday.",
        "skillCategory": "grammar",
        "options": [
          "park",
          "They",
          "to",
          "the",
          "yesterday.",
          "went"
        ]
      },
      {
        "id": "w4-p4-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "He had a delicious breakfast before leaving for work.",
        "explanation": "had breakfast.",
        "skillCategory": "listening",
        "audioPhrase": "He had a delicious breakfast before leaving for work.",
        "options": [
          "He had a delicious breakfast before leaving for work.",
          "He made a quick breakfast before leaving for work.",
          "She had coffee and toast before going to school.",
          "They went to a cafe for breakfast this morning."
        ]
      },
      {
        "id": "w4-p4-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I went to the supermarket\"",
        "correctAnswer": "I went to the supermarket",
        "explanation": "Perfeita pronúncia!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I went to the supermarket",
        "phoneticHint": "/aɪ went tuː ðə ˈsuː.pɚˌmɑːr.kɪt/"
      },
      {
        "id": "w4-p4-e10",
        "type": "multiple-choice",
        "prompt": "Qual par de presente e passado irregular está CORRETO?",
        "correctAnswer": "Go -> Went / See -> Saw / Take -> Took",
        "explanation": "Go-Went, See-Saw, Take-Took.",
        "skillCategory": "vocabulary",
        "options": [
          "Go -> Went / See -> Saw / Take -> Took",
          "Go -> Goed / See -> Seed / Take -> Taked",
          "Go -> Gone / See -> Seen / Take -> Taken",
          "Go -> Went / See -> Seen / Take -> Taked"
        ]
      }
    ]
  },
  {
    "id": "w4-p5",
    "worldId": 4,
    "phaseNumber": 5,
    "title": "Verbos Irregulares Mais Usados (Parte 2)",
    "subtitle": "Ate, drank, came, gave, told, knew",
    "pedagogicalObjective": "Consolidar a segunda metade dos verbos irregulares fundamentais.",
    "type": "lesson",
    "icon": "shuffle",
    "cefrLevel": "B1",
    "theorySummary": [
      "Eat -> ATE, Drink -> DRANK, Come -> CAME, Give -> GAVE, Tell -> TOLD, Know -> KNEW (/nuː/)."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p5-e1",
        "type": "multiple-choice",
        "prompt": "Qual é o passado de \"EAT\" (comer)?",
        "correctAnswer": "ATE",
        "explanation": "Eat -> Ate (/eɪt/).",
        "skillCategory": "vocabulary",
        "visualEmoji": "🍕",
        "options": [
          "ATE",
          "Eated",
          "Eaten",
          "Eates"
        ]
      },
      {
        "id": "w4-p5-e2",
        "type": "fill-blank",
        "prompt": "Complete com o passado de DRINK: \"I _____ three cups of coffee this morning.\"",
        "correctAnswer": "drank",
        "explanation": "Drink -> Drank.",
        "skillCategory": "vocabulary",
        "visualEmoji": "☕",
        "options": [
          "drank",
          "drink",
          "drinked",
          "drunk"
        ]
      },
      {
        "id": "w4-p5-e3",
        "type": "word-order",
        "prompt": "Monte a frase com CAME (passado de come):",
        "correctAnswer": "He came to my party yesterday.",
        "explanation": "Come -> Came.",
        "skillCategory": "grammar",
        "options": [
          "came",
          "He",
          "my",
          "to",
          "yesterday.",
          "party"
        ]
      },
      {
        "id": "w4-p5-e4",
        "type": "listening",
        "prompt": "Ouça o verbo irregular:",
        "correctAnswer": "My grandfather gave me this beautiful vintage watch.",
        "explanation": "Give -> Gave.",
        "skillCategory": "listening",
        "audioPhrase": "My grandfather gave me this beautiful vintage watch.",
        "options": [
          "My grandfather gave me this beautiful vintage watch.",
          "My father bought me this beautiful smart watch.",
          "My grandmother gave me this gold necklace yesterday.",
          "My brother sold me this vintage watch last week."
        ]
      },
      {
        "id": "w4-p5-e5",
        "type": "translate",
        "prompt": "Traduza: \"Ela me contou a verdade.\"",
        "correctAnswer": "She told me the truth.",
        "explanation": "Tell -> Told (told me = me contou).",
        "skillCategory": "reading",
        "options": [
          "She told me the truth.",
          "She said me the truth.",
          "She told the truth to I.",
          "She did tell the truth."
        ]
      },
      {
        "id": "w4-p5-e6",
        "type": "multiple-choice",
        "prompt": "O verbo KNEW (passado de know) tem qual pronúncia correta?",
        "correctAnswer": "/nuː/ (o \"K\" é completamente silencioso)",
        "explanation": "O K é mudo: Knew soa idêntico a \"new\" (/nuː/).",
        "skillCategory": "vocabulary",
        "options": [
          "/nuː/ (o \"K\" é completamente silencioso)",
          "/knuː/ (pronunciando o K)",
          "/naʊ/ como now",
          "/knoʊ/"
        ]
      },
      {
        "id": "w4-p5-e7",
        "type": "word-order",
        "prompt": "Organize a frase com KNEW:",
        "correctAnswer": "I knew the answer immediately.",
        "explanation": "I knew the answer immediately.",
        "skillCategory": "grammar",
        "options": [
          "knew",
          "answer",
          "I",
          "the",
          "immediately."
        ]
      },
      {
        "id": "w4-p5-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "She drank a glass of warm milk before going to bed.",
        "explanation": "drank a glass of warm milk.",
        "skillCategory": "listening",
        "audioPhrase": "She drank a glass of warm milk before going to bed.",
        "options": [
          "She drank a glass of warm milk before going to bed.",
          "He drank two cups of green tea in the evening.",
          "She ate an apple before going to sleep.",
          "They had warm soup for dinner last night."
        ]
      },
      {
        "id": "w4-p5-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"She told me the story\"",
        "correctAnswer": "She told me the story",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "She told me the story",
        "phoneticHint": "/ʃiː toʊld miː ðə ˈstɔːr.i/"
      },
      {
        "id": "w4-p5-e10",
        "type": "multiple-choice",
        "prompt": "Qual frase contém um erro com verbo irregular?",
        "correctAnswer": "I eated pizza yesterday.",
        "explanation": "\"Eated\" não existe; o correto é \"ate\".",
        "skillCategory": "vocabulary",
        "options": [
          "I eated pizza yesterday.",
          "I ate pizza yesterday.",
          "He gave me a gift.",
          "We came by car."
        ]
      }
    ]
  },
  {
    "id": "w4-p6",
    "worldId": 4,
    "phaseNumber": 6,
    "title": "Perguntas no Passado com DID",
    "subtitle": "Did you see that? What did you do?",
    "pedagogicalObjective": "Fazer perguntas no passado com o auxiliar DID e verbo base.",
    "type": "lesson",
    "icon": "help-circle",
    "cefrLevel": "B1",
    "theorySummary": [
      "No passado usamos DID para todas as pessoas: Did you go? Did he see? O verbo principal FICA NA FORMA BASE."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p6-e1",
        "type": "multiple-choice",
        "prompt": "Como perguntar \"Você viu aquele filme ontem?\"",
        "correctAnswer": "Did you see that movie yesterday?",
        "explanation": "Com DID o verbo volta à base: \"see\" (não \"saw\").",
        "skillCategory": "vocabulary",
        "options": [
          "Did you see that movie yesterday?",
          "Did you saw that movie yesterday?",
          "Were you see that movie yesterday?",
          "Do you saw that movie yesterday?"
        ]
      },
      {
        "id": "w4-p6-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"What did you _____ for dinner last night?\"",
        "correctAnswer": "eat",
        "explanation": "Did + eat.",
        "skillCategory": "vocabulary",
        "options": [
          "eat",
          "ate",
          "eaten",
          "eating"
        ]
      },
      {
        "id": "w4-p6-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta no passado:",
        "correctAnswer": "Did you go there yesterday?",
        "explanation": "Did you go there yesterday?",
        "skillCategory": "grammar",
        "options": [
          "you",
          "go",
          "Did",
          "yesterday?",
          "there"
        ]
      },
      {
        "id": "w4-p6-e4",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Where did you buy that beautiful leather jacket?",
        "explanation": "Where did you buy...?",
        "skillCategory": "listening",
        "audioPhrase": "Where did you buy that beautiful leather jacket?",
        "options": [
          "Where did you buy that beautiful leather jacket?",
          "How much did you pay for that jacket?",
          "When did you buy that winter coat?",
          "Where did you find those shoes?"
        ]
      },
      {
        "id": "w4-p6-e5",
        "type": "translate",
        "prompt": "Traduza: \"A que horas você acordou?\"",
        "correctAnswer": "What time did you wake up?",
        "explanation": "What time did you wake up?",
        "skillCategory": "reading",
        "options": [
          "What time did you wake up?",
          "What time did you woke up?",
          "What time were you wake up?",
          "What time do you woke up?"
        ]
      },
      {
        "id": "w4-p6-e6",
        "type": "multiple-choice",
        "prompt": "Qual pergunta contém um erro comum?",
        "correctAnswer": "Did he went to school?",
        "explanation": "Não use \"went\" com \"did\". Diga \"Did he go\".",
        "skillCategory": "vocabulary",
        "options": [
          "Did he went to school?",
          "Did he go to school?",
          "Where did they live?",
          "Did you call him?"
        ]
      },
      {
        "id": "w4-p6-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta com WHY:",
        "correctAnswer": "Why did you call me?",
        "explanation": "Why did you call me?",
        "skillCategory": "grammar",
        "options": [
          "did",
          "call",
          "Why",
          "you",
          "me?"
        ]
      },
      {
        "id": "w4-p6-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Did your brother pass his driving test yesterday?",
        "explanation": "Did your brother pass...?",
        "skillCategory": "listening",
        "audioPhrase": "Did your brother pass his driving test yesterday?",
        "options": [
          "Did your brother pass his driving test yesterday?",
          "Did your sister pass her university exam?",
          "Did you pass your English test on Friday?",
          "Did he take the driving test last month?"
        ]
      },
      {
        "id": "w4-p6-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"What did you do yesterday?\"",
        "correctAnswer": "What did you do yesterday",
        "explanation": "Perfeita entonação!",
        "skillCategory": "pronunciation",
        "audioPhrase": "What did you do yesterday",
        "phoneticHint": "/wɑːt dɪd juː duː ˈjes.tɚ.deɪ/"
      },
      {
        "id": "w4-p6-e10",
        "type": "multiple-choice",
        "prompt": "Para responder \"Sim, eu vi\" a \"Did you see it?\" de forma curta:",
        "correctAnswer": "Yes, I did.",
        "explanation": "Yes, I did.",
        "skillCategory": "vocabulary",
        "options": [
          "Yes, I did.",
          "Yes, I saw.",
          "Yes, I do.",
          "Yes, I was."
        ]
      }
    ]
  },
  {
    "id": "w4-p7",
    "worldId": 4,
    "phaseNumber": 7,
    "title": "Negativas no Passado com DIDN'T",
    "subtitle": "I didn't know, She didn't come",
    "pedagogicalObjective": "Construir negativas no passado com DIDN'T e verbo base.",
    "type": "lesson",
    "icon": "x-circle",
    "cefrLevel": "B1",
    "theorySummary": [
      "Sujeito + didn't + verbo base: \"I didn't know\", \"She didn't call\". O verbo não leva -ed nem fica irregular!"
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p7-e1",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Eu não sabia disso\"?",
        "correctAnswer": "I didn't know that.",
        "explanation": "Didn't know.",
        "skillCategory": "vocabulary",
        "options": [
          "I didn't know that.",
          "I didn't knew that.",
          "I not knew that.",
          "I didn't to know that."
        ]
      },
      {
        "id": "w4-p7-e2",
        "type": "fill-blank",
        "prompt": "Complete a negativa: \"She _____ come to the meeting this morning.\"",
        "correctAnswer": "didn't",
        "explanation": "Passado = didn't come.",
        "skillCategory": "vocabulary",
        "options": [
          "didn't",
          "doesn't",
          "wasn't",
          "not"
        ]
      },
      {
        "id": "w4-p7-e3",
        "type": "word-order",
        "prompt": "Monte a frase negativa:",
        "correctAnswer": "I didn't understand the explanation.",
        "explanation": "I didn't understand the explanation.",
        "skillCategory": "grammar",
        "options": [
          "understand",
          "explanation.",
          "I",
          "the",
          "didn't"
        ]
      },
      {
        "id": "w4-p7-e4",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "They didn't receive our email about the schedule change.",
        "explanation": "didn't receive.",
        "skillCategory": "listening",
        "audioPhrase": "They didn't receive our email about the schedule change.",
        "options": [
          "They didn't receive our email about the schedule change.",
          "We didn't receive your message about the meeting.",
          "He didn't send the contract to our client.",
          "They didn't agree with the proposed budget."
        ]
      },
      {
        "id": "w4-p7-e5",
        "type": "translate",
        "prompt": "Traduza: \"Nós não fomos ao parque por causa da chuva.\"",
        "correctAnswer": "We didn't go to the park because of the rain.",
        "explanation": "didn't go.",
        "skillCategory": "reading",
        "options": [
          "We didn't go to the park because of the rain.",
          "We didn't went to the park because of rain.",
          "We not go to the park because of rain.",
          "We weren't go to the park for the rain."
        ]
      },
      {
        "id": "w4-p7-e6",
        "type": "multiple-choice",
        "prompt": "Qual frase contém um erro típico?",
        "correctAnswer": "He didn't called me.",
        "explanation": "Não use \"called\" após \"didn't\".",
        "skillCategory": "vocabulary",
        "options": [
          "He didn't called me.",
          "He didn't call me.",
          "He didn't see me.",
          "He didn't know me."
        ]
      },
      {
        "id": "w4-p7-e7",
        "type": "word-order",
        "prompt": "Organize a negativa:",
        "correctAnswer": "We didn't have time for lunch.",
        "explanation": "We didn't have time for lunch.",
        "skillCategory": "grammar",
        "options": [
          "have",
          "time",
          "We",
          "lunch.",
          "didn't",
          "for"
        ]
      },
      {
        "id": "w4-p7-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "I didn't sleep well last night because of the noise outside.",
        "explanation": "didn't sleep well.",
        "skillCategory": "listening",
        "audioPhrase": "I didn't sleep well last night because of the noise outside.",
        "options": [
          "I didn't sleep well last night because of the noise outside.",
          "I didn't wake up early this morning because I was tired.",
          "He didn't eat breakfast before going to the office.",
          "She didn't finish her homework yesterday evening."
        ]
      },
      {
        "id": "w4-p7-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"I didn't do it!\"",
        "correctAnswer": "I didn't do it",
        "explanation": "Perfeito!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I didn't do it",
        "phoneticHint": "/aɪ ˈdɪd.ənt duː ɪt/"
      },
      {
        "id": "w4-p7-e10",
        "type": "multiple-choice",
        "prompt": "O que substitui \"did not\" na fala informal e fluida?",
        "correctAnswer": "Didn't",
        "explanation": "Didn't.",
        "skillCategory": "vocabulary",
        "options": [
          "Didn't",
          "Don't",
          "Wasn't",
          "Dunt"
        ]
      }
    ]
  },
  {
    "id": "w4-p8",
    "worldId": 4,
    "phaseNumber": 8,
    "title": "Past Continuous: O que estava acontecendo",
    "subtitle": "I was sleeping, They were working",
    "pedagogicalObjective": "Descrever ações que estavam em progresso em um momento do passado.",
    "type": "lesson",
    "icon": "clock",
    "cefrLevel": "B1",
    "theorySummary": [
      "Estrutura: WAS/WERE + verbo com -ING: \"I was sleeping when the phone rang\"."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p8-e1",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Eu estava dormindo às 22h ontem\"?",
        "correctAnswer": "I was sleeping at 10 pm yesterday.",
        "explanation": "I was sleeping.",
        "skillCategory": "vocabulary",
        "options": [
          "I was sleeping at 10 pm yesterday.",
          "I were sleeping at 10 pm yesterday.",
          "I was sleep at 10 pm yesterday.",
          "I did sleeping at 10 pm yesterday."
        ]
      },
      {
        "id": "w4-p8-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"What were you _____ at 8 o'clock last night?\"",
        "correctAnswer": "doing",
        "explanation": "Were you doing.",
        "skillCategory": "vocabulary",
        "options": [
          "doing",
          "did",
          "do",
          "done"
        ]
      },
      {
        "id": "w4-p8-e3",
        "type": "word-order",
        "prompt": "Monte a frase no Past Continuous:",
        "correctAnswer": "It was raining heavily all night.",
        "explanation": "It was raining heavily all night.",
        "skillCategory": "grammar",
        "options": [
          "raining",
          "was",
          "It",
          "heavily.",
          "all",
          "night"
        ]
      },
      {
        "id": "w4-p8-e4",
        "type": "listening",
        "prompt": "Ouça a ação contínua no passado:",
        "correctAnswer": "We were having dinner when the lights went out.",
        "explanation": "were having dinner.",
        "skillCategory": "listening",
        "audioPhrase": "We were having dinner when the lights went out.",
        "options": [
          "We were having dinner when the lights went out.",
          "We were watching a movie when the phone rang.",
          "They were cooking dinner when visitors arrived.",
          "She was reading a book when the alarm sounded."
        ]
      },
      {
        "id": "w4-p8-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eles estavam estudando na biblioteca.\"",
        "correctAnswer": "They were studying in the library.",
        "explanation": "They were studying...",
        "skillCategory": "reading",
        "options": [
          "They were studying in the library.",
          "They was studying in the library.",
          "They were study in the library.",
          "They did studying in the library."
        ]
      },
      {
        "id": "w4-p8-e6",
        "type": "multiple-choice",
        "prompt": "Qual forma de To Be usamos com \"YOU\" no Past Continuous?",
        "correctAnswer": "WERE (You were working)",
        "explanation": "You were working.",
        "skillCategory": "vocabulary",
        "options": [
          "WERE (You were working)",
          "WAS",
          "ARE",
          "BEEN"
        ]
      },
      {
        "id": "w4-p8-e7",
        "type": "word-order",
        "prompt": "Organize a negativa contínua:",
        "correctAnswer": "He wasn't paying attention.",
        "explanation": "He wasn't paying attention.",
        "skillCategory": "grammar",
        "options": [
          "wasn't",
          "attention.",
          "He",
          "paying"
        ]
      },
      {
        "id": "w4-p8-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "The children were playing happily in the backyard all afternoon.",
        "explanation": "were playing happily.",
        "skillCategory": "listening",
        "audioPhrase": "The children were playing happily in the backyard all afternoon.",
        "options": [
          "The children were playing happily in the backyard all afternoon.",
          "The boys were swimming in the pool all morning.",
          "The baby was sleeping quietly in the bedroom.",
          "They were walking through the botanical gardens."
        ]
      },
      {
        "id": "w4-p8-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I was thinking about you\"",
        "correctAnswer": "I was thinking about you",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I was thinking about you",
        "phoneticHint": "/aɪ wəz ˈθɪŋ.kɪŋ əˈbaʊt juː/"
      },
      {
        "id": "w4-p8-e10",
        "type": "multiple-choice",
        "prompt": "Past Continuous descreve:",
        "correctAnswer": "Uma ação contínua em progresso em um momento do passado",
        "explanation": "Ação que estava acontecendo.",
        "skillCategory": "vocabulary",
        "options": [
          "Uma ação contínua em progresso em um momento do passado",
          "Uma ação habitual no presente",
          "Um plano futuro definitivo",
          "Uma verdade científica"
        ]
      }
    ]
  },
  {
    "id": "w4-p9",
    "worldId": 4,
    "phaseNumber": 9,
    "title": "Passado Simples vs Passado Contínuo",
    "subtitle": "Ação em andamento interrompida (When / While)",
    "pedagogicalObjective": "Combinar uma ação longa (Past Continuous) com uma ação pontual que a interrompeu (Simple Past).",
    "type": "lesson",
    "icon": "git-merge",
    "cefrLevel": "B1",
    "theorySummary": [
      "WHILE introduz a ação longa contínua: \"While I WAS COOKING...\".",
      "WHEN introduz a ação curta pontual: \"...WHEN the telephone RANG\"."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p9-e1",
        "type": "multiple-choice",
        "prompt": "Complete: \"I was taking a shower _____ the phone rang.\"",
        "correctAnswer": "when",
        "explanation": "When + ação curta pontual (rang).",
        "skillCategory": "vocabulary",
        "options": [
          "when",
          "while",
          "during",
          "since"
        ]
      },
      {
        "id": "w4-p9-e2",
        "type": "fill-blank",
        "prompt": "Complete com a ação longa: \"_____ I was walking to work, I met John.\"",
        "correctAnswer": "While",
        "explanation": "While + ação contínua em progresso.",
        "skillCategory": "vocabulary",
        "options": [
          "While",
          "When",
          "Then",
          "After"
        ]
      },
      {
        "id": "w4-p9-e3",
        "type": "word-order",
        "prompt": "Monte a frase combinando os tempos:",
        "correctAnswer": "He was driving when the rain started.",
        "explanation": "He was driving when the rain started.",
        "skillCategory": "grammar",
        "options": [
          "was",
          "driving",
          "He",
          "started.",
          "when",
          "rain",
          "the"
        ]
      },
      {
        "id": "w4-p9-e4",
        "type": "listening",
        "prompt": "Ouça a interrupção no passado:",
        "correctAnswer": "While we were sleeping, someone knocked loudly on the front door.",
        "explanation": "While we were sleeping...",
        "skillCategory": "listening",
        "audioPhrase": "While we were sleeping, someone knocked loudly on the front door.",
        "options": [
          "While we were sleeping, someone knocked loudly on the front door.",
          "While we were having lunch, the package arrived by mail.",
          "When I woke up, the sun was shining brightly.",
          "While he was driving home, his car broke down."
        ]
      },
      {
        "id": "w4-p9-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu cortei meu dedo enquanto cozinhava.\"",
        "correctAnswer": "I cut my finger while I was cooking.",
        "explanation": "I cut my finger while I was cooking.",
        "skillCategory": "reading",
        "options": [
          "I cut my finger while I was cooking.",
          "I was cutting my finger when I cooked.",
          "I cut my finger when I cooked.",
          "I was cut my finger while cooking."
        ]
      },
      {
        "id": "w4-p9-e6",
        "type": "multiple-choice",
        "prompt": "Qual frase está estruturada com maestria?",
        "correctAnswer": "She fell asleep while she was reading a book.",
        "explanation": "Ação pontual (fell asleep) durante ação longa (was reading).",
        "skillCategory": "vocabulary",
        "options": [
          "She fell asleep while she was reading a book.",
          "She was falling asleep when she read a book.",
          "She fell asleep while she readed a book.",
          "She was sleep while reading."
        ]
      },
      {
        "id": "w4-p9-e7",
        "type": "word-order",
        "prompt": "Organize a narrativa:",
        "correctAnswer": "We were watching TV when the power went out.",
        "explanation": "We were watching TV when the power went out.",
        "skillCategory": "grammar",
        "options": [
          "watching",
          "the",
          "out.",
          "TV",
          "power",
          "went",
          "when",
          "We",
          "were"
        ]
      },
      {
        "id": "w4-p9-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "The dog ran into the street while I was closing the gate.",
        "explanation": "while I was closing the gate.",
        "skillCategory": "listening",
        "audioPhrase": "The dog ran into the street while I was closing the gate.",
        "options": [
          "The dog ran into the street while I was closing the gate.",
          "The cat jumped on the counter while I was preparing food.",
          "A bird flew into the room while the window was open.",
          "The car stopped suddenly while the light was green."
        ]
      },
      {
        "id": "w4-p9-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"What were you doing when it happened?\"",
        "correctAnswer": "What did you do when it happened",
        "explanation": "Perfeita clareza!",
        "skillCategory": "pronunciation",
        "audioPhrase": "What were you doing when it happened",
        "phoneticHint": "/wɑːt wɜːr juː ˈduː.ɪŋ wen ɪt ˈhæp.ənd/"
      },
      {
        "id": "w4-p9-e10",
        "type": "multiple-choice",
        "prompt": "Geralmente usamos WHILE com qual tempo verbal?",
        "correctAnswer": "Past Continuous (-ing)",
        "explanation": "While indica duração contínua.",
        "skillCategory": "vocabulary",
        "options": [
          "Past Continuous (-ing)",
          "Simple Past (-ed)",
          "Simple Present",
          "Future Will"
        ]
      }
    ]
  },
  {
    "id": "w4-p10",
    "worldId": 4,
    "phaseNumber": 10,
    "title": "Baú da Sabedoria: O Viajante do Tempo",
    "subtitle": "Revisão das 9 primeiras lições do passado",
    "pedagogicalObjective": "Consolidar verbos regulares, irregulares, Was/Were e Past Continuous.",
    "type": "chest",
    "icon": "award",
    "cefrLevel": "B1",
    "theorySummary": [
      "Primeiro Baú do Mundo 4! Parabéns por dominar as formas narrativas do passado."
    ],
    "xpReward": 55,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w4-p10-e1",
        "type": "multiple-choice",
        "prompt": "[Revisão] \"Where _____ you go on your last holiday?\"",
        "correctAnswer": "did",
        "explanation": "Did + go.",
        "skillCategory": "vocabulary",
        "options": [
          "did",
          "were",
          "was",
          "do"
        ]
      },
      {
        "id": "w4-p10-e2",
        "type": "fill-blank",
        "prompt": "[Revisão] \"She _____ to the doctor yesterday morning.\"",
        "correctAnswer": "went",
        "explanation": "Go -> went.",
        "skillCategory": "vocabulary",
        "options": [
          "went",
          "goes",
          "go",
          "goed"
        ]
      },
      {
        "id": "w4-p10-e3",
        "type": "word-order",
        "prompt": "[Revisão] Monte a pergunta no passado:",
        "correctAnswer": "Did you see the accident?",
        "explanation": "Did you see the accident?",
        "skillCategory": "grammar",
        "options": [
          "see",
          "you",
          "accident?",
          "Did",
          "the"
        ]
      },
      {
        "id": "w4-p10-e4",
        "type": "listening",
        "prompt": "[Revisão] Ouça e marque:",
        "correctAnswer": "I was walking in the park when I saw an old school friend.",
        "explanation": "was walking... when I saw.",
        "skillCategory": "listening",
        "audioPhrase": "I was walking in the park when I saw an old school friend.",
        "options": [
          "I was walking in the park when I saw an old school friend.",
          "I was sitting in the cafe when my friend arrived.",
          "We were talking on the phone when the signal was lost.",
          "She was driving to work when the police stopped her."
        ]
      },
      {
        "id": "w4-p10-e5",
        "type": "multiple-choice",
        "prompt": "[Revisão] Qual verbo tem -ED com som /ɪd/?",
        "correctAnswer": "Decided",
        "explanation": "Decided (/dɪˈsaɪ.dɪd/).",
        "skillCategory": "vocabulary",
        "options": [
          "Decided",
          "Worked",
          "Played",
          "Cooked"
        ]
      },
      {
        "id": "w4-p10-e6",
        "type": "translate",
        "prompt": "[Revisão] Traduza: \"Eu não comprei o carro.\"",
        "correctAnswer": "I didn't buy the car.",
        "explanation": "didn't buy.",
        "skillCategory": "reading",
        "options": [
          "I didn't buy the car.",
          "I didn't bought the car.",
          "I not bought the car.",
          "I wasn't buy the car."
        ]
      },
      {
        "id": "w4-p10-e7",
        "type": "word-order",
        "prompt": "[Revisão] Ordene a frase contínua:",
        "correctAnswer": "It was raining all morning.",
        "explanation": "It was raining all morning.",
        "skillCategory": "grammar",
        "options": [
          "raining",
          "was",
          "morning.",
          "all",
          "It"
        ]
      },
      {
        "id": "w4-p10-e8",
        "type": "speaking-repeat",
        "prompt": "[Revisão] Fale no microfone: \"I had a wonderful time yesterday\"",
        "correctAnswer": "I had a wonderful time yesterday",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I had a wonderful time yesterday",
        "phoneticHint": "/aɪ hæd ə ˈwʌn.dɚ.fəl taɪm ˈjes.tɚ.deɪ/"
      },
      {
        "id": "w4-p10-e9",
        "type": "fill-blank",
        "prompt": "[Revisão] \"They _____ at home when I called.\"",
        "correctAnswer": "were",
        "explanation": "They were at home.",
        "skillCategory": "vocabulary",
        "options": [
          "were",
          "was",
          "did",
          "been"
        ]
      },
      {
        "id": "w4-p10-e10",
        "type": "multiple-choice",
        "prompt": "[Revisão] Qual é o passado de EAT e DRINK?",
        "correctAnswer": "Ate and Drank",
        "explanation": "Ate e Drank.",
        "skillCategory": "vocabulary",
        "options": [
          "Ate and Drank",
          "Eated and Drinked",
          "Eaten and Drunk",
          "Ate and Drinked"
        ]
      },
      {
        "id": "w4-p10-e11",
        "type": "translate",
        "prompt": "[Revisão] \"O que você estava fazendo às 20h?\"",
        "correctAnswer": "What were you doing at 8 pm?",
        "explanation": "What were you doing...",
        "skillCategory": "reading",
        "options": [
          "What were you doing at 8 pm?",
          "What did you do at 8 pm?",
          "What was you doing at 8 pm?",
          "Where were you doing at 8 pm?"
        ]
      }
    ]
  },
  {
    "id": "w4-p11",
    "worldId": 4,
    "phaseNumber": 11,
    "title": "Comparativos de Superioridade",
    "subtitle": "-er than / more than",
    "pedagogicalObjective": "Dominar as competências de Comparativos de Superioridade.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: -er than / more than.",
      "Aplicação prática: taller than, more expensive than.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p11-e1",
        "type": "multiple-choice",
        "prompt": "[Comparativos de Superioridade] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use taller than, more expensive than naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Comparativos de Superioridade.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use taller than, more expensive than naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p11-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Comparativos de Superioridade:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p11-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Comparativos de Superioridade:",
        "correctAnswer": "This is an essential conversation challenge about Comparativos de Superioridade.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Comparativos de Superioridade.",
        "options": [
          "This is an essential conversation challenge about Comparativos de Superioridade.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p11-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Comparativos de Superioridade:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p11-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p11-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Comparativos de Superioridade:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p11-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p11-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p11-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Comparativos de Superioridade\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p11-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Comparativos de Superioridade?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p12",
    "worldId": 4,
    "phaseNumber": 12,
    "title": "Superlativos: O Extremo Superior",
    "subtitle": "the -est / the most",
    "pedagogicalObjective": "Dominar as competências de Superlativos: O Extremo Superior.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: the -est / the most.",
      "Aplicação prática: the tallest, the most beautiful.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p12-e1",
        "type": "multiple-choice",
        "prompt": "[Superlativos: O Extremo Superior] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use the tallest, the most beautiful naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Superlativos: O Extremo Superior.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use the tallest, the most beautiful naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p12-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Superlativos: O Extremo Superior:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p12-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Superlativos: O Extremo Superior:",
        "correctAnswer": "This is an essential conversation challenge about Superlativos: O Extremo Superior.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Superlativos: O Extremo Superior.",
        "options": [
          "This is an essential conversation challenge about Superlativos: O Extremo Superior.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p12-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Superlativos: O Extremo Superior:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p12-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p12-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Superlativos: O Extremo Superior:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p12-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p12-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p12-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Superlativos: O Extremo Superior\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p12-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Superlativos: O Extremo Superior?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p13",
    "worldId": 4,
    "phaseNumber": 13,
    "title": "Comparativos de Igualdade",
    "subtitle": "as... as",
    "pedagogicalObjective": "Dominar as competências de Comparativos de Igualdade.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: as... as.",
      "Aplicação prática: as tall as, as good as.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p13-e1",
        "type": "multiple-choice",
        "prompt": "[Comparativos de Igualdade] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use as tall as, as good as naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Comparativos de Igualdade.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use as tall as, as good as naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p13-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Comparativos de Igualdade:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p13-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Comparativos de Igualdade:",
        "correctAnswer": "This is an essential conversation challenge about Comparativos de Igualdade.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Comparativos de Igualdade.",
        "options": [
          "This is an essential conversation challenge about Comparativos de Igualdade.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p13-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Comparativos de Igualdade:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p13-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p13-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Comparativos de Igualdade:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p13-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p13-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p13-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Comparativos de Igualdade\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p13-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Comparativos de Igualdade?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p14",
    "worldId": 4,
    "phaseNumber": 14,
    "title": "Modais de Obrigação: MUST & HAVE TO",
    "subtitle": "Regras e deveres",
    "pedagogicalObjective": "Dominar as competências de Modais de Obrigação: MUST & HAVE TO.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Regras e deveres.",
      "Aplicação prática: must stop, have to study.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p14-e1",
        "type": "multiple-choice",
        "prompt": "[Modais de Obrigação: MUST & HAVE TO] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use must stop, have to study naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Modais de Obrigação: MUST & HAVE TO.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use must stop, have to study naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p14-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Modais de Obrigação: MUST & HAVE TO:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p14-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Modais de Obrigação: MUST & HAVE TO:",
        "correctAnswer": "This is an essential conversation challenge about Modais de Obrigação: MUST & HAVE TO.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Modais de Obrigação: MUST & HAVE TO.",
        "options": [
          "This is an essential conversation challenge about Modais de Obrigação: MUST & HAVE TO.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p14-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Modais de Obrigação: MUST & HAVE TO:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p14-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p14-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Modais de Obrigação: MUST & HAVE TO:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p14-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p14-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p14-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Modais de Obrigação: MUST & HAVE TO\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p14-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Modais de Obrigação: MUST & HAVE TO?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p15",
    "worldId": 4,
    "phaseNumber": 15,
    "title": "Modais de Conselho: SHOULD & OUGHT TO",
    "subtitle": "Recomendações e sugestões",
    "pedagogicalObjective": "Dominar as competências de Modais de Conselho: SHOULD & OUGHT TO.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Recomendações e sugestões.",
      "Aplicação prática: should see a doctor.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p15-e1",
        "type": "multiple-choice",
        "prompt": "[Modais de Conselho: SHOULD & OUGHT TO] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use should see a doctor naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Modais de Conselho: SHOULD & OUGHT TO.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use should see a doctor naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p15-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Modais de Conselho: SHOULD & OUGHT TO:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p15-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Modais de Conselho: SHOULD & OUGHT TO:",
        "correctAnswer": "This is an essential conversation challenge about Modais de Conselho: SHOULD & OUGHT TO.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Modais de Conselho: SHOULD & OUGHT TO.",
        "options": [
          "This is an essential conversation challenge about Modais de Conselho: SHOULD & OUGHT TO.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p15-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Modais de Conselho: SHOULD & OUGHT TO:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p15-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p15-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Modais de Conselho: SHOULD & OUGHT TO:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p15-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p15-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p15-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Modais de Conselho: SHOULD & OUGHT TO\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p15-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Modais de Conselho: SHOULD & OUGHT TO?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p16",
    "worldId": 4,
    "phaseNumber": 16,
    "title": "Modais de Permissão e Probabilidade",
    "subtitle": "MAY, MIGHT & COULD",
    "pedagogicalObjective": "Dominar as competências de Modais de Permissão e Probabilidade.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: MAY, MIGHT & COULD.",
      "Aplicação prática: it might rain, may I leave.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p16-e1",
        "type": "multiple-choice",
        "prompt": "[Modais de Permissão e Probabilidade] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use it might rain, may I leave naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Modais de Permissão e Probabilidade.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use it might rain, may I leave naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p16-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Modais de Permissão e Probabilidade:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p16-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Modais de Permissão e Probabilidade:",
        "correctAnswer": "This is an essential conversation challenge about Modais de Permissão e Probabilidade.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Modais de Permissão e Probabilidade.",
        "options": [
          "This is an essential conversation challenge about Modais de Permissão e Probabilidade.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p16-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Modais de Permissão e Probabilidade:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p16-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p16-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Modais de Permissão e Probabilidade:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p16-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p16-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p16-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Modais de Permissão e Probabilidade\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p16-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Modais de Permissão e Probabilidade?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p17",
    "worldId": 4,
    "phaseNumber": 17,
    "title": "O Futuro com WILL: Decisões Instantâneas",
    "subtitle": "I will help you, promises",
    "pedagogicalObjective": "Dominar as competências de O Futuro com WILL: Decisões Instantâneas.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: I will help you, promises.",
      "Aplicação prática: instant decisions and predictions.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p17-e1",
        "type": "multiple-choice",
        "prompt": "[O Futuro com WILL: Decisões Instantâneas] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use instant decisions and predictions naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de O Futuro com WILL: Decisões Instantâneas.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use instant decisions and predictions naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p17-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de O Futuro com WILL: Decisões Instantâneas:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p17-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição O Futuro com WILL: Decisões Instantâneas:",
        "correctAnswer": "This is an essential conversation challenge about O Futuro com WILL: Decisões Instantâneas.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about O Futuro com WILL: Decisões Instantâneas.",
        "options": [
          "This is an essential conversation challenge about O Futuro com WILL: Decisões Instantâneas.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p17-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de O Futuro com WILL: Decisões Instantâneas:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p17-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p17-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre O Futuro com WILL: Decisões Instantâneas:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p17-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p17-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p17-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"O Futuro com WILL: Decisões Instantâneas\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p17-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição O Futuro com WILL: Decisões Instantâneas?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p18",
    "worldId": 4,
    "phaseNumber": 18,
    "title": "Futuro: WILL vs GOING TO",
    "subtitle": "Evidências imediatas vs decisões prévias",
    "pedagogicalObjective": "Dominar as competências de Futuro: WILL vs GOING TO.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Evidências imediatas vs decisões prévias.",
      "Aplicação prática: look at those clouds vs planned trip.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p18-e1",
        "type": "multiple-choice",
        "prompt": "[Futuro: WILL vs GOING TO] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use look at those clouds vs planned trip naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Futuro: WILL vs GOING TO.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use look at those clouds vs planned trip naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p18-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Futuro: WILL vs GOING TO:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p18-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Futuro: WILL vs GOING TO:",
        "correctAnswer": "This is an essential conversation challenge about Futuro: WILL vs GOING TO.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Futuro: WILL vs GOING TO.",
        "options": [
          "This is an essential conversation challenge about Futuro: WILL vs GOING TO.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p18-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Futuro: WILL vs GOING TO:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p18-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p18-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Futuro: WILL vs GOING TO:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p18-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p18-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p18-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Futuro: WILL vs GOING TO\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p18-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Futuro: WILL vs GOING TO?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p19",
    "worldId": 4,
    "phaseNumber": 19,
    "title": "First Conditional: Condições Reais no Futuro",
    "subtitle": "If it rains, I will stay home",
    "pedagogicalObjective": "Dominar as competências de First Conditional: Condições Reais no Futuro.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: If it rains, I will stay home.",
      "Aplicação prática: If + present, will + base.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p19-e1",
        "type": "multiple-choice",
        "prompt": "[First Conditional: Condições Reais no Futuro] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use If + present, will + base naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de First Conditional: Condições Reais no Futuro.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use If + present, will + base naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p19-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de First Conditional: Condições Reais no Futuro:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p19-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição First Conditional: Condições Reais no Futuro:",
        "correctAnswer": "This is an essential conversation challenge about First Conditional: Condições Reais no Futuro.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about First Conditional: Condições Reais no Futuro.",
        "options": [
          "This is an essential conversation challenge about First Conditional: Condições Reais no Futuro.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p19-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de First Conditional: Condições Reais no Futuro:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p19-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p19-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre First Conditional: Condições Reais no Futuro:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p19-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p19-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p19-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"First Conditional: Condições Reais no Futuro\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p19-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição First Conditional: Condições Reais no Futuro?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p20",
    "worldId": 4,
    "phaseNumber": 20,
    "title": "Baú da Sabedoria: O Mestre das Conexões",
    "subtitle": "Revisão intermediária do Mundo 4",
    "pedagogicalObjective": "Dominar as competências de Baú da Sabedoria: O Mestre das Conexões.",
    "type": "chest",
    "icon": "award",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Revisão intermediária do Mundo 4.",
      "Aplicação prática: Comparatives, modals, future and conditional.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 55,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w4-p20-e1",
        "type": "multiple-choice",
        "prompt": "[Baú da Sabedoria: O Mestre das Conexões] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use Comparatives, modals, future and conditional naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Baú da Sabedoria: O Mestre das Conexões.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌟",
        "options": [
          "In this context, we use Comparatives, modals, future and conditional naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p20-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Baú da Sabedoria: O Mestre das Conexões:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p20-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Baú da Sabedoria: O Mestre das Conexões:",
        "correctAnswer": "This is an essential conversation challenge about Baú da Sabedoria: O Mestre das Conexões.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Baú da Sabedoria: O Mestre das Conexões.",
        "options": [
          "This is an essential conversation challenge about Baú da Sabedoria: O Mestre das Conexões.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p20-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Baú da Sabedoria: O Mestre das Conexões:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p20-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p20-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Baú da Sabedoria: O Mestre das Conexões:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p20-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p20-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p20-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Baú da Sabedoria: O Mestre das Conexões\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p20-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Baú da Sabedoria: O Mestre das Conexões?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      },
      {
        "id": "w4-p20-e11",
        "type": "multiple-choice",
        "prompt": "[Desafio Especial 11] Consolidação de Baú da Sabedoria: O Mestre das Conexões:",
        "correctAnswer": "Dominar estruturas complexas com segurança e espontaneidade",
        "explanation": "Parabéns pela maestria no desafio especial!",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar estruturas complexas com segurança e espontaneidade",
          "Opção com uso inadequado de preposição",
          "Construção gramaticalmente incompleta",
          "Tradução literal inadequada"
        ]
      }
    ]
  },
  {
    "id": "w4-p21",
    "worldId": 4,
    "phaseNumber": 21,
    "title": "Conectivos de Causa e Efeito",
    "subtitle": "Although, however, therefore",
    "pedagogicalObjective": "Dominar as competências de Conectivos de Causa e Efeito.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Although, however, therefore.",
      "Aplicação prática: contrast and logical connectors.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p21-e1",
        "type": "multiple-choice",
        "prompt": "[Conectivos de Causa e Efeito] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use contrast and logical connectors naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Conectivos de Causa e Efeito.",
        "skillCategory": "vocabulary",
        "visualEmoji": "💬",
        "options": [
          "In this context, we use contrast and logical connectors naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p21-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Conectivos de Causa e Efeito:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p21-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Conectivos de Causa e Efeito:",
        "correctAnswer": "This is an essential conversation challenge about Conectivos de Causa e Efeito.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Conectivos de Causa e Efeito.",
        "options": [
          "This is an essential conversation challenge about Conectivos de Causa e Efeito.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p21-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Conectivos de Causa e Efeito:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p21-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p21-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Conectivos de Causa e Efeito:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p21-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p21-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p21-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Conectivos de Causa e Efeito\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p21-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Conectivos de Causa e Efeito?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p22",
    "worldId": 4,
    "phaseNumber": 22,
    "title": "Fazendo Convites e Sugestões",
    "subtitle": "How about, Why don't we, Let's",
    "pedagogicalObjective": "Dominar as competências de Fazendo Convites e Sugestões.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: How about, Why don't we, Let's.",
      "Aplicação prática: social invitations.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p22-e1",
        "type": "multiple-choice",
        "prompt": "[Fazendo Convites e Sugestões] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use social invitations naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Fazendo Convites e Sugestões.",
        "skillCategory": "vocabulary",
        "visualEmoji": "💬",
        "options": [
          "In this context, we use social invitations naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p22-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Fazendo Convites e Sugestões:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p22-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Fazendo Convites e Sugestões:",
        "correctAnswer": "This is an essential conversation challenge about Fazendo Convites e Sugestões.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Fazendo Convites e Sugestões.",
        "options": [
          "This is an essential conversation challenge about Fazendo Convites e Sugestões.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p22-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Fazendo Convites e Sugestões:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p22-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p22-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Fazendo Convites e Sugestões:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p22-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p22-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p22-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Fazendo Convites e Sugestões\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p22-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Fazendo Convites e Sugestões?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p23",
    "worldId": 4,
    "phaseNumber": 23,
    "title": "Expressando Opiniões & Concordância",
    "subtitle": "In my opinion, I agree, I disagree",
    "pedagogicalObjective": "Dominar as competências de Expressando Opiniões & Concordância.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: In my opinion, I agree, I disagree.",
      "Aplicação prática: sharing points of view.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p23-e1",
        "type": "multiple-choice",
        "prompt": "[Expressando Opiniões & Concordância] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use sharing points of view naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Expressando Opiniões & Concordância.",
        "skillCategory": "vocabulary",
        "visualEmoji": "💬",
        "options": [
          "In this context, we use sharing points of view naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p23-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Expressando Opiniões & Concordância:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p23-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Expressando Opiniões & Concordância:",
        "correctAnswer": "This is an essential conversation challenge about Expressando Opiniões & Concordância.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Expressando Opiniões & Concordância.",
        "options": [
          "This is an essential conversation challenge about Expressando Opiniões & Concordância.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p23-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Expressando Opiniões & Concordância:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p23-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p23-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Expressando Opiniões & Concordância:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p23-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p23-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p23-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Expressando Opiniões & Concordância\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p23-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Expressando Opiniões & Concordância?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p24",
    "worldId": 4,
    "phaseNumber": 24,
    "title": "Conversa Social e Small Talk",
    "subtitle": "Puxando papo com naturalidade",
    "pedagogicalObjective": "Dominar as competências de Conversa Social e Small Talk.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Puxando papo com naturalidade.",
      "Aplicação prática: weather, weekend, casual networking.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p24-e1",
        "type": "multiple-choice",
        "prompt": "[Conversa Social e Small Talk] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use weather, weekend, casual networking naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Conversa Social e Small Talk.",
        "skillCategory": "vocabulary",
        "visualEmoji": "💬",
        "options": [
          "In this context, we use weather, weekend, casual networking naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p24-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Conversa Social e Small Talk:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p24-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Conversa Social e Small Talk:",
        "correctAnswer": "This is an essential conversation challenge about Conversa Social e Small Talk.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Conversa Social e Small Talk.",
        "options": [
          "This is an essential conversation challenge about Conversa Social e Small Talk.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p24-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Conversa Social e Small Talk:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p24-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p24-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Conversa Social e Small Talk:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p24-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p24-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p24-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Conversa Social e Small Talk\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p24-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Conversa Social e Small Talk?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p25",
    "worldId": 4,
    "phaseNumber": 25,
    "title": "Lidando com Situações de Emergência",
    "subtitle": "Help, police, lost passport",
    "pedagogicalObjective": "Dominar as competências de Lidando com Situações de Emergência.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Help, police, lost passport.",
      "Aplicação prática: urgent problem resolution.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p25-e1",
        "type": "multiple-choice",
        "prompt": "[Lidando com Situações de Emergência] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use urgent problem resolution naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Lidando com Situações de Emergência.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚨",
        "options": [
          "In this context, we use urgent problem resolution naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p25-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Lidando com Situações de Emergência:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p25-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Lidando com Situações de Emergência:",
        "correctAnswer": "This is an essential conversation challenge about Lidando com Situações de Emergência.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Lidando com Situações de Emergência.",
        "options": [
          "This is an essential conversation challenge about Lidando com Situações de Emergência.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p25-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Lidando com Situações de Emergência:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p25-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p25-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Lidando com Situações de Emergência:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p25-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p25-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p25-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Lidando com Situações de Emergência\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p25-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Lidando com Situações de Emergência?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p26",
    "worldId": 4,
    "phaseNumber": 26,
    "title": "No Banco & Finanças Pessoais",
    "subtitle": "ATM, exchange rate, transfers",
    "pedagogicalObjective": "Dominar as competências de No Banco & Finanças Pessoais.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: ATM, exchange rate, transfers.",
      "Aplicação prática: banking vocabulary.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p26-e1",
        "type": "multiple-choice",
        "prompt": "[No Banco & Finanças Pessoais] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use banking vocabulary naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de No Banco & Finanças Pessoais.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚨",
        "options": [
          "In this context, we use banking vocabulary naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p26-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de No Banco & Finanças Pessoais:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p26-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição No Banco & Finanças Pessoais:",
        "correctAnswer": "This is an essential conversation challenge about No Banco & Finanças Pessoais.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about No Banco & Finanças Pessoais.",
        "options": [
          "This is an essential conversation challenge about No Banco & Finanças Pessoais.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p26-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de No Banco & Finanças Pessoais:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p26-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p26-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre No Banco & Finanças Pessoais:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p26-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p26-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p26-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"No Banco & Finanças Pessoais\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p26-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição No Banco & Finanças Pessoais?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p27",
    "worldId": 4,
    "phaseNumber": 27,
    "title": "Pedindo Favores com Polidez Extrema",
    "subtitle": "Would you mind helping me?",
    "pedagogicalObjective": "Dominar as competências de Pedindo Favores com Polidez Extrema.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Would you mind helping me?.",
      "Aplicação prática: polite requests.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p27-e1",
        "type": "multiple-choice",
        "prompt": "[Pedindo Favores com Polidez Extrema] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use polite requests naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Pedindo Favores com Polidez Extrema.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚨",
        "options": [
          "In this context, we use polite requests naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p27-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Pedindo Favores com Polidez Extrema:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p27-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Pedindo Favores com Polidez Extrema:",
        "correctAnswer": "This is an essential conversation challenge about Pedindo Favores com Polidez Extrema.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Pedindo Favores com Polidez Extrema.",
        "options": [
          "This is an essential conversation challenge about Pedindo Favores com Polidez Extrema.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p27-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Pedindo Favores com Polidez Extrema:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p27-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p27-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Pedindo Favores com Polidez Extrema:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p27-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p27-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p27-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Pedindo Favores com Polidez Extrema\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p27-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Pedindo Favores com Polidez Extrema?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p28",
    "worldId": 4,
    "phaseNumber": 28,
    "title": "Descrevendo Pessoas: Personalidade & Aparência",
    "subtitle": "Generous, outgoing, curly hair",
    "pedagogicalObjective": "Dominar as competências de Descrevendo Pessoas: Personalidade & Aparência.",
    "type": "lesson",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Generous, outgoing, curly hair.",
      "Aplicação prática: character and physical traits.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p28-e1",
        "type": "multiple-choice",
        "prompt": "[Descrevendo Pessoas: Personalidade & Aparência] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use character and physical traits naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Descrevendo Pessoas: Personalidade & Aparência.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚨",
        "options": [
          "In this context, we use character and physical traits naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p28-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Descrevendo Pessoas: Personalidade & Aparência:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p28-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Descrevendo Pessoas: Personalidade & Aparência:",
        "correctAnswer": "This is an essential conversation challenge about Descrevendo Pessoas: Personalidade & Aparência.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Descrevendo Pessoas: Personalidade & Aparência.",
        "options": [
          "This is an essential conversation challenge about Descrevendo Pessoas: Personalidade & Aparência.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p28-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Descrevendo Pessoas: Personalidade & Aparência:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p28-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p28-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Descrevendo Pessoas: Personalidade & Aparência:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p28-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p28-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p28-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Descrevendo Pessoas: Personalidade & Aparência\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p28-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Descrevendo Pessoas: Personalidade & Aparência?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      }
    ]
  },
  {
    "id": "w4-p29",
    "worldId": 4,
    "phaseNumber": 29,
    "title": "Simulado Pré-Boss: O Desafio da Interação Social",
    "subtitle": "Revisão completa do nível B1",
    "pedagogicalObjective": "Dominar as competências de Simulado Pré-Boss: O Desafio da Interação Social.",
    "type": "review",
    "icon": "message-square",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Revisão completa do nível B1.",
      "Aplicação prática: pre-boss comprehensive trial.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w4-p29-e1",
        "type": "multiple-choice",
        "prompt": "[Simulado Pré-Boss: O Desafio da Interação Social] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use pre-boss comprehensive trial naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de Simulado Pré-Boss: O Desafio da Interação Social.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚨",
        "options": [
          "In this context, we use pre-boss comprehensive trial naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p29-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de Simulado Pré-Boss: O Desafio da Interação Social:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p29-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição Simulado Pré-Boss: O Desafio da Interação Social:",
        "correctAnswer": "This is an essential conversation challenge about Simulado Pré-Boss: O Desafio da Interação Social.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about Simulado Pré-Boss: O Desafio da Interação Social.",
        "options": [
          "This is an essential conversation challenge about Simulado Pré-Boss: O Desafio da Interação Social.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p29-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de Simulado Pré-Boss: O Desafio da Interação Social:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p29-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p29-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre Simulado Pré-Boss: O Desafio da Interação Social:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p29-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p29-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p29-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"Simulado Pré-Boss: O Desafio da Interação Social\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p29-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição Simulado Pré-Boss: O Desafio da Interação Social?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      },
      {
        "id": "w4-p29-e11",
        "type": "multiple-choice",
        "prompt": "[Desafio Especial 11] Consolidação de Simulado Pré-Boss: O Desafio da Interação Social:",
        "correctAnswer": "Dominar estruturas complexas com segurança e espontaneidade",
        "explanation": "Parabéns pela maestria no desafio especial!",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar estruturas complexas com segurança e espontaneidade",
          "Opção com uso inadequado de preposição",
          "Construção gramaticalmente incompleta",
          "Tradução literal inadequada"
        ]
      },
      {
        "id": "w4-p29-e12",
        "type": "multiple-choice",
        "prompt": "[Desafio Especial 12] Consolidação de Simulado Pré-Boss: O Desafio da Interação Social:",
        "correctAnswer": "Dominar estruturas complexas com segurança e espontaneidade",
        "explanation": "Parabéns pela maestria no desafio especial!",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar estruturas complexas com segurança e espontaneidade",
          "Opção com uso inadequado de preposição",
          "Construção gramaticalmente incompleta",
          "Tradução literal inadequada"
        ]
      }
    ]
  },
  {
    "id": "w4-p30",
    "worldId": 4,
    "phaseNumber": 30,
    "title": "O Guardião do Mundo 4: Mestre da Comunicação",
    "subtitle": "Boss Final de Proficiência B1",
    "pedagogicalObjective": "Dominar as competências de O Guardião do Mundo 4: Mestre da Comunicação.",
    "type": "boss",
    "icon": "crown",
    "cefrLevel": "B1",
    "theorySummary": [
      "Conceito central: Boss Final de Proficiência B1.",
      "Aplicação prática: epic boss confrontation B1.",
      "Pratique com atenção para consolidar a comunicação fluida."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w4-p30-e1",
        "type": "multiple-choice",
        "prompt": "[O Guardião do Mundo 4: Mestre da Comunicação] Qual frase exemplifica com naturalidade o conteúdo desta lição?",
        "correctAnswer": "In this context, we use epic boss confrontation B1 naturally and correctly.",
        "explanation": "Excelente! Dominou a regra central de O Guardião do Mundo 4: Mestre da Comunicação.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚨",
        "options": [
          "In this context, we use epic boss confrontation B1 naturally and correctly.",
          "This option contains an incorrect auxiliary verb.",
          "This phrasing misses the required preposition.",
          "This sentence has agreement error."
        ]
      },
      {
        "id": "w4-p30-e2",
        "type": "word-order",
        "prompt": "Ordene as palavras para formar a sentença de O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "We practice English every day to fluently.",
        "explanation": "Estruturação natural e correta dos termos.",
        "skillCategory": "grammar",
        "options": [
          "English",
          "fluently",
          "practice",
          "to",
          "We",
          "every",
          "day."
        ]
      },
      {
        "id": "w4-p30-e3",
        "type": "listening",
        "prompt": "Ouça o áudio da lição O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "This is an essential conversation challenge about O Guardião do Mundo 4: Mestre da Comunicação.",
        "explanation": "Ótima assimilação auditiva!",
        "skillCategory": "listening",
        "audioPhrase": "This is an essential conversation challenge about O Guardião do Mundo 4: Mestre da Comunicação.",
        "options": [
          "This is an essential conversation challenge about O Guardião do Mundo 4: Mestre da Comunicação.",
          "We are practicing speaking and listening in English today.",
          "Where did you learn to express your opinions so clearly?",
          "Good afternoon, let's review the main grammar structures."
        ]
      },
      {
        "id": "w4-p30-e4",
        "type": "fill-blank",
        "prompt": "Complete a sentença de acordo com o aprendizado de O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "practice",
        "explanation": "Forma gramatical adequada ao contexto.",
        "skillCategory": "vocabulary",
        "options": [
          "practice",
          "practicing",
          "practiced",
          "practices"
        ]
      },
      {
        "id": "w4-p30-e5",
        "type": "translate",
        "prompt": "Traduza para o inglês com naturalidade: \"Eu compreendi a lição perfeitamente.\"",
        "correctAnswer": "I understood the lesson perfectly.",
        "explanation": "Understood é o passado irregular de understand.",
        "skillCategory": "reading",
        "options": [
          "I understood the lesson perfectly.",
          "I understanded the lesson perfectly.",
          "I did understand the lesson with perfection.",
          "I was understood the lesson."
        ]
      },
      {
        "id": "w4-p30-e6",
        "type": "multiple-choice",
        "prompt": "Identifique a alternativa com concordância perfeita sobre O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "She speaks with great confidence and clarity.",
        "explanation": "Concordância verbal correta na 3ª pessoa do singular.",
        "skillCategory": "vocabulary",
        "options": [
          "She speaks with great confidence and clarity.",
          "She speak with great confidence and clarity.",
          "She is speak with great confidence and clarity.",
          "She does speaks with great confidence and clarity."
        ]
      },
      {
        "id": "w4-p30-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "correctAnswer": "What do you think about this?",
        "explanation": "What do you think about this? = O que você acha disso?",
        "skillCategory": "grammar",
        "options": [
          "think",
          "you",
          "What",
          "do",
          "about",
          "this?"
        ]
      },
      {
        "id": "w4-p30-e8",
        "type": "listening",
        "prompt": "Ouça com atenção e escolha a frase dita:",
        "correctAnswer": "Effective communication requires active listening and genuine empathy.",
        "explanation": "Compreensão auditiva impecável!",
        "skillCategory": "listening",
        "audioPhrase": "Effective communication requires active listening and genuine empathy.",
        "options": [
          "Effective communication requires active listening and genuine empathy.",
          "Good grammar is the only thing you need to speak fluently.",
          "Pronunciation is more important than vocabulary in daily speech.",
          "We should practice reading books every single weekend."
        ]
      },
      {
        "id": "w4-p30-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone a frase de domínio: \"O Guardião do Mundo 4: Mestre da Comunicação\"",
        "correctAnswer": "I am improving my English every day",
        "explanation": "Pronúncia excelente e confiante!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am improving my English every day",
        "phoneticHint": "/aɪ æm ɪmˈpruː.vɪŋ maɪ ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/"
      },
      {
        "id": "w4-p30-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o principal takeaway pedagógico da lição O Guardião do Mundo 4: Mestre da Comunicação?",
        "correctAnswer": "Dominar a aplicação contextual sem traduzir palavra por palavra",
        "explanation": "Exato! A assimilação contextual é o segredo da fluência.",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar a aplicação contextual sem traduzir palavra por palavra",
          "Memorizar listas isoladas de palavras sem contexto",
          "Traduzir mentalmente cada frase para o português",
          "Evitar falar em público até atingir o nível avançado"
        ]
      },
      {
        "id": "w4-p30-e11",
        "type": "multiple-choice",
        "prompt": "[Desafio Especial 11] Consolidação de O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "Dominar estruturas complexas com segurança e espontaneidade",
        "explanation": "Parabéns pela maestria no desafio especial!",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar estruturas complexas com segurança e espontaneidade",
          "Opção com uso inadequado de preposição",
          "Construção gramaticalmente incompleta",
          "Tradução literal inadequada"
        ]
      },
      {
        "id": "w4-p30-e12",
        "type": "multiple-choice",
        "prompt": "[Desafio Especial 12] Consolidação de O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "Dominar estruturas complexas com segurança e espontaneidade",
        "explanation": "Parabéns pela maestria no desafio especial!",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar estruturas complexas com segurança e espontaneidade",
          "Opção com uso inadequado de preposição",
          "Construção gramaticalmente incompleta",
          "Tradução literal inadequada"
        ]
      },
      {
        "id": "w4-p30-e13",
        "type": "multiple-choice",
        "prompt": "[Desafio Especial 13] Consolidação de O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "Dominar estruturas complexas com segurança e espontaneidade",
        "explanation": "Parabéns pela maestria no desafio especial!",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar estruturas complexas com segurança e espontaneidade",
          "Opção com uso inadequado de preposição",
          "Construção gramaticalmente incompleta",
          "Tradução literal inadequada"
        ]
      },
      {
        "id": "w4-p30-e14",
        "type": "multiple-choice",
        "prompt": "[Desafio Especial 14] Consolidação de O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "Dominar estruturas complexas com segurança e espontaneidade",
        "explanation": "Parabéns pela maestria no desafio especial!",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar estruturas complexas com segurança e espontaneidade",
          "Opção com uso inadequado de preposição",
          "Construção gramaticalmente incompleta",
          "Tradução literal inadequada"
        ]
      },
      {
        "id": "w4-p30-e15",
        "type": "multiple-choice",
        "prompt": "[Desafio Especial 15] Consolidação de O Guardião do Mundo 4: Mestre da Comunicação:",
        "correctAnswer": "Dominar estruturas complexas com segurança e espontaneidade",
        "explanation": "Parabéns pela maestria no desafio especial!",
        "skillCategory": "vocabulary",
        "options": [
          "Dominar estruturas complexas com segurança e espontaneidade",
          "Opção com uso inadequado de preposição",
          "Construção gramaticalmente incompleta",
          "Tradução literal inadequada"
        ]
      }
    ]
  }
];
