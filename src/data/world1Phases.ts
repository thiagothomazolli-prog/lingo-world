import { Phase } from '../types';

export const WORLD_1_PHASES: Phase[] = [
  {
    "id": "w1-p1",
    "worldId": 1,
    "phaseNumber": 1,
    "title": "O Alfabeto & Sons Iniciais",
    "subtitle": "As letras, vogais e pronúncias fundamentais",
    "pedagogicalObjective": "Reconhecer as letras do alfabeto em inglês e suas pronúncias características.",
    "type": "lesson",
    "icon": "alphabet",
    "cefrLevel": "A1",
    "theorySummary": [
      "Em inglês, as vogais têm sons bem característicos: A (/eɪ/), E (/iː/), I (/aɪ/), O (/oʊ/), U (/juː/).",
      "A letra \"C\" soa como \"si\", a letra \"G\" como \"dji\", e a letra \"H\" como \"eitch\".",
      "Para soletrar palavras, pronunciamos cada letra individualmente pelo seu som do alfabeto."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p1-e1",
        "type": "multiple-choice",
        "prompt": "Qual é o som da letra \"A\" no alfabeto em inglês?",
        "options": [
          "êi (/eɪ/)",
          "ah (/ɑː/)",
          "i (/iː/)",
          "ou (/oʊ/)"
        ],
        "correctAnswer": "êi (/eɪ/)",
        "explanation": "A letra \"A\" no alfabeto em inglês tem o som de \"êi\" (/eɪ/), como na palavra \"Day\" ou \"Name\".",
        "phoneticHint": "/eɪ/",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p1-e2",
        "type": "word-order",
        "visualEmoji": "🐱",
        "prompt": "Ordene as letras para soletrar a palavra \"CAT\" (gato):",
        "options": [
          "T",
          "C",
          "A"
        ],
        "correctAnswer": "C A T",
        "explanation": "A soletração de CAT é \"C-A-T\" (/siː/ - /eɪ/ - /tiː/).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p1-e3",
        "type": "listening",
        "prompt": "Ouça o áudio e selecione a frase que você escutou:",
        "audioPhrase": "Can you spell your name, please?",
        "options": [
          "Can you spell your name, please?",
          "What is your name, please?",
          "How do you say your name?",
          "Tell me your name today"
        ],
        "correctAnswer": "Can you spell your name, please?",
        "explanation": "\"Can you spell your name, please?\" significa \"Você pode soletrar seu nome, por favor?\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p1-e4",
        "type": "multiple-choice",
        "prompt": "A letra \"E\" em inglês tem a pronúncia mais parecida com qual som do português?",
        "options": [
          "Som de \"I\" (í)",
          "Som de \"É\"",
          "Som de \"Ê\"",
          "Som de \"U\""
        ],
        "correctAnswer": "Som de \"I\" (í)",
        "explanation": "A letra \"E\" soa como /iː/ (\"í\"), como em \"Email\" ou \"Eagle\".",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p1-e5",
        "type": "multiple-choice",
        "visualEmoji": "🍎",
        "prompt": "Qual palavra começa com a letra \"A\" e tem o som /æ/?",
        "options": [
          "Apple",
          "Book",
          "Door",
          "Cat"
        ],
        "correctAnswer": "Apple",
        "explanation": "Apple (/ˈæp.əl/) significa maçã e começa com a letra A.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p1-e6",
        "type": "fill-blank",
        "visualEmoji": "📖",
        "prompt": "Complete a letra que falta para formar \"BOOK\" (livro): B - O - ___ - K",
        "options": [
          "O",
          "A",
          "E",
          "U"
        ],
        "correctAnswer": "O",
        "explanation": "A palavra correta é BOOK (B-O-O-K).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p1-e7",
        "type": "word-order",
        "visualEmoji": "☀️",
        "prompt": "Ordene as letras para soletrar \"SUN\" (sol):",
        "options": [
          "N",
          "S",
          "U"
        ],
        "correctAnswer": "S U N",
        "explanation": "A palavra sol em inglês é SUN (S-U-N).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p1-e8",
        "type": "listening",
        "prompt": "Ouça o áudio e identifique a letra pronunciada:",
        "audioPhrase": "The letter H",
        "options": [
          "The letter H",
          "The letter A",
          "The letter E",
          "The letter 8"
        ],
        "correctAnswer": "The letter H",
        "explanation": "\"H\" em inglês soa como /eɪtʃ/ (\"eitch\").",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p1-e9",
        "type": "speaking-repeat",
        "prompt": "Pratique sua fala: Diga as letras \"A B C D\"",
        "audioPhrase": "A B C D",
        "correctAnswer": "A B C D",
        "phoneticHint": "/eɪ biː siː diː/",
        "explanation": "Excelente pronúncia das letras A, B, C e D!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p1-e10",
        "type": "multiple-choice",
        "prompt": "A letra \"I\" em inglês tem a pronúncia de:",
        "options": [
          "ai (/aɪ/)",
          "i (/iː/)",
          "e (/eɪ/)",
          "ou (/oʊ/)"
        ],
        "correctAnswer": "ai (/aɪ/)",
        "explanation": "A letra \"I\" soa como \"ai\" (/aɪ/), como em \"Ice\" ou \"Time\".",
        "phoneticHint": "/aɪ/",
        "skillCategory": "pronunciation"
      }
    ]
  },
  {
    "id": "w1-p2",
    "worldId": 1,
    "phaseNumber": 2,
    "title": "Cumprimentos & Saudações",
    "subtitle": "Hello, Good Morning & How are you?",
    "pedagogicalObjective": "Dominar saudações formais e informais para qualquer período do dia.",
    "type": "lesson",
    "icon": "hand",
    "cefrLevel": "A1",
    "theorySummary": [
      "Usamos \"Hello\" (geral) e \"Hi\" (informal) para dizer olá.",
      "\"Good morning\" (bom dia, até meio-dia), \"Good afternoon\" (boa tarde, 12h-18h), \"Good evening\" (ao chegar à noite).",
      "\"Good night\" é usado EXCLUSIVAMENTE para se despedir ou desejar boa noite ao ir dormir.",
      "\"How are you?\" é a pergunta padrão para \"Como você está?\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p2-e1",
        "type": "multiple-choice",
        "prompt": "Você chega a uma reunião às 20h. Qual cumprimento deve usar?",
        "options": [
          "Good evening",
          "Good night",
          "Good morning",
          "See you later"
        ],
        "correctAnswer": "Good evening",
        "explanation": "Ao chegar à noite usamos \"Good evening\". \"Good night\" é apenas para despedida!",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p2-e2",
        "type": "word-order",
        "prompt": "Organize a saudação com pergunta de cortesia:",
        "options": [
          "are",
          "Good",
          "how",
          "morning,",
          "you?"
        ],
        "correctAnswer": "Good morning, how are you?",
        "explanation": "\"Good morning, how are you?\" significa \"Bom dia, como você está?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p2-e3",
        "type": "listening",
        "prompt": "Ouça a despedida e selecione a opção ouvida:",
        "audioPhrase": "Goodbye, see you tomorrow!",
        "options": [
          "Goodbye, see you tomorrow!",
          "Hello, see you today!",
          "Good night, see you later!",
          "Good morning, my friend!"
        ],
        "correctAnswer": "Goodbye, see you tomorrow!",
        "explanation": "\"Goodbye, see you tomorrow!\" significa \"Adeus, até amanhã!\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p2-e4",
        "type": "translate",
        "prompt": "Traduza para o inglês: \"Muito bem, obrigado!\"",
        "options": [
          "Very well, thank you!",
          "Good night, please!",
          "I am bad, thanks!",
          "Excuse me, you are welcome!"
        ],
        "correctAnswer": "Very well, thank you!",
        "explanation": "\"Very well, thank you!\" é a resposta clássica educada para \"How are you?\".",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p2-e5",
        "type": "multiple-choice",
        "visualEmoji": "👋",
        "prompt": "Qual é a forma mais comum e descontraída de dizer \"Oi\" entre amigos?",
        "options": [
          "Hi",
          "Good evening",
          "Farewell",
          "Pleasure to meet you"
        ],
        "correctAnswer": "Hi",
        "explanation": "\"Hi\" ou \"Hey\" são as saudações informais mais comuns.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p2-e6",
        "type": "fill-blank",
        "visualEmoji": "🌅",
        "prompt": "Complete a saudação matinal: \"Good _____, have a great day!\"",
        "options": [
          "morning",
          "night",
          "bye",
          "afternoon"
        ],
        "correctAnswer": "morning",
        "explanation": "\"Good morning\" significa bom dia.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p2-e7",
        "type": "word-order",
        "prompt": "Organize a resposta educada:",
        "options": [
          "fine,",
          "thank",
          "I",
          "am",
          "you."
        ],
        "correctAnswer": "I am fine, thank you.",
        "explanation": "\"I am fine, thank you.\" significa \"Eu estou bem, obrigado(a).\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p2-e8",
        "type": "listening",
        "prompt": "Ouça o cumprimento da tarde e escolha a alternativa correta:",
        "audioPhrase": "Good afternoon, welcome to our class!",
        "options": [
          "Good afternoon, welcome to our class!",
          "Good morning, welcome to our class!",
          "Good evening, welcome to our class!",
          "Goodbye, welcome to our class!"
        ],
        "correctAnswer": "Good afternoon, welcome to our class!",
        "explanation": "\"Good afternoon\" refere-se à tarde (após o meio-dia).",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p2-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone para desejar um bom dia: \"Good morning!\"",
        "audioPhrase": "Good morning",
        "correctAnswer": "Good morning",
        "phoneticHint": "/ɡʊd ˈmɔːr.nɪŋ/",
        "explanation": "Excelente pronúncia! \"Good morning\" significa \"Bom dia\".",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p2-e10",
        "type": "multiple-choice",
        "visualEmoji": "🌙",
        "prompt": "Você está se despedindo às 22h para ir para casa dormir. O que você diz?",
        "options": [
          "Good night!",
          "Good evening!",
          "Good morning!",
          "Hello!"
        ],
        "correctAnswer": "Good night!",
        "explanation": "Para despedida noturna ou antes de dormir, usamos exclusivamente \"Good night!\".",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p3",
    "worldId": 1,
    "phaseNumber": 3,
    "title": "Apresentando-se & Seu Nome",
    "subtitle": "What is your name? My name is...",
    "pedagogicalObjective": "Perguntar e dizer seu nome e cumprimentar com prazer em conhecer.",
    "type": "lesson",
    "icon": "user",
    "cefrLevel": "A1",
    "theorySummary": [
      "Para perguntar o nome: \"What is your name?\" (ou contraído: \"What's your name?\").",
      "Para responder: \"My name is [Nome]\" ou \"I am [Nome]\".",
      "A expressão de cortesia é \"Nice to meet you!\" (Muito prazer em te conhecer!).",
      "A réplica clássica é \"Nice to meet you too!\" (O prazer é meu!)."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p3-e1",
        "type": "fill-blank",
        "prompt": "Complete a pergunta:",
        "contextSentence": "What ____ your name?",
        "options": [
          "is",
          "are",
          "am",
          "be"
        ],
        "correctAnswer": "is",
        "explanation": "Com \"your name\" (sujeito no singular \"it\") usamos a forma \"is\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p3-e2",
        "type": "word-order",
        "prompt": "Monte a frase de apresentação educada:",
        "options": [
          "Nice",
          "meet",
          "to",
          "you!"
        ],
        "correctAnswer": "Nice to meet you!",
        "explanation": "\"Nice to meet you!\" significa \"Muito prazer em conhecer você!\".",
        "skillCategory": "speaking"
      },
      {
        "id": "w1-p3-e3",
        "type": "multiple-choice",
        "prompt": "Como responder cordialmente a \"Nice to meet you\"?",
        "options": [
          "Nice to meet you too!",
          "Yes, I am!",
          "Thank you very much",
          "Goodbye, my name!"
        ],
        "correctAnswer": "Nice to meet you too!",
        "explanation": "O \"too\" no final significa \"também\" (prazer em conhecê-lo também).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p3-e4",
        "type": "speaking-repeat",
        "prompt": "Pratique a pronúncia da sua apresentação:",
        "contextSentence": "Hello, my name is Alex and nice to meet you!",
        "audioPhrase": "Hello, my name is Alex and nice to meet you!",
        "correctAnswer": "Hello, my name is Alex and nice to meet you!",
        "explanation": "Excelente! Pronúncia clara e amigável.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p3-e5",
        "type": "fill-blank",
        "visualEmoji": "🤝",
        "prompt": "Complete a apresentação: \"Hi, I _____ John.\"",
        "options": [
          "am",
          "is",
          "are",
          "be"
        ],
        "correctAnswer": "am",
        "explanation": "Com o pronome \"I\", usamos a forma \"am\" do verbo To Be (\"I am John\").",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p3-e6",
        "type": "multiple-choice",
        "prompt": "Qual é a resposta mais comum quando alguém diz \"Nice to meet you\"?",
        "options": [
          "Nice to meet you too!",
          "You are welcome!",
          "I am very happy!",
          "Good night!"
        ],
        "correctAnswer": "Nice to meet you too!",
        "explanation": "\"Nice to meet you too!\" significa \"Prazer em conhecer você também!\".",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p3-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta contraída:",
        "options": [
          "name?",
          "What's",
          "your"
        ],
        "correctAnswer": "What's your name?",
        "explanation": "\"What's your name?\" é a contração de \"What is your name?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p3-e8",
        "type": "listening",
        "prompt": "Ouça e selecione a identificação pessoal ouvida:",
        "audioPhrase": "I am David, I am a student.",
        "options": [
          "I am David, I am a student.",
          "My name is David, I am a teacher.",
          "You are David, a good student.",
          "He is David, my best friend."
        ],
        "correctAnswer": "I am David, I am a student.",
        "explanation": "\"I am David, I am a student.\" significa \"Eu sou David, eu sou um estudante.\"",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p3-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone sua apresentação: \"My name is Alex.\"",
        "audioPhrase": "My name is Alex",
        "correctAnswer": "My name is Alex",
        "phoneticHint": "/maɪ neɪm ɪz ˈæl.ɪks/",
        "explanation": "Muito bem! Você pronunciou perfeitamente sua apresentação.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p3-e10",
        "type": "multiple-choice",
        "visualEmoji": "🪪",
        "prompt": "Como apresentar um amigo para outra pessoa?",
        "options": [
          "This is my friend, Pedro.",
          "Here is my friend, Pedro.",
          "That has my friend, Pedro.",
          "There is my friend, Pedro."
        ],
        "correctAnswer": "This is my friend, Pedro.",
        "explanation": "Usamos \"This is [Nome]\" para apresentar alguém a outra pessoa.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p4",
    "worldId": 1,
    "phaseNumber": 4,
    "title": "Cortesia & Boas Maneiras",
    "subtitle": "Please, Thank you & Excuse me",
    "pedagogicalObjective": "Utilizar as palavras essenciais de educação e civilidade no dia a dia.",
    "type": "lesson",
    "icon": "smile",
    "cefrLevel": "A1",
    "theorySummary": [
      "\"Please\" (por favor) torna qualquer pedido educado.",
      "\"Thank you\" ou \"Thanks\" (obrigado) é respondido com \"You're welcome\" (de nada).",
      "\"Excuse me\" é usado para pedir licença ou chamar a atenção de alguém.",
      "\"I am sorry\" ou \"Sorry\" expressa desculpas por um erro ou acidente."
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p4-e1",
        "type": "multiple-choice",
        "prompt": "Alguém lhe diz \"Thank you very much!\". Como você responde de forma natural?",
        "options": [
          "You're welcome!",
          "Please!",
          "Excuse me!",
          "I am sorry!"
        ],
        "correctAnswer": "You're welcome!",
        "explanation": "\"You're welcome\" é a expressão universal em inglês para \"de nada\".",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p4-e2",
        "type": "word-order",
        "prompt": "Ordene a frase para pedir água educadamente:",
        "options": [
          "Water,",
          "please.",
          "some",
          "Can",
          "have",
          "I"
        ],
        "correctAnswer": "Can I have some water, please.",
        "explanation": "\"Can I have some water, please.\" significa \"Posso tomar um pouco de água, por favor?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p4-e3",
        "type": "listening",
        "prompt": "Escute a frase com atenção e selecione o texto correspondente:",
        "audioPhrase": "Excuse me, where is the exit?",
        "options": [
          "Excuse me, where is the exit?",
          "Thank you, where is the hotel?",
          "Excuse me, what is your name?",
          "I am sorry, where is the bus?"
        ],
        "correctAnswer": "Excuse me, where is the exit?",
        "explanation": "\"Excuse me, where is the exit?\" significa \"Com licença, onde fica a saída?\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p4-e4",
        "type": "translate",
        "prompt": "Como se diz \"Desculpe pelo atraso\" em inglês?",
        "options": [
          "I am sorry for the delay.",
          "Thank you for the time.",
          "Please do not wait.",
          "Excuse me for the morning."
        ],
        "correctAnswer": "I am sorry for the delay.",
        "explanation": "\"I am sorry for the delay\" é a frase exata de desculpas pelo atraso.",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p4-e5",
        "type": "fill-blank",
        "prompt": "Complete com a palavra de cortesia: \"Can I have some water, _____?\"",
        "options": [
          "please",
          "thanks",
          "sorry",
          "welcome"
        ],
        "correctAnswer": "please",
        "explanation": "\"Please\" (por favor) é fundamental para fazer pedidos com educação.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p4-e6",
        "type": "multiple-choice",
        "visualEmoji": "🙏",
        "prompt": "Qual é a resposta clássica e educada para \"Thank you\"?",
        "options": [
          "You are welcome!",
          "No problem, please!",
          "Yes, I thank!",
          "Good night!"
        ],
        "correctAnswer": "You are welcome!",
        "explanation": "\"You are welcome!\" significa \"De nada!\" ou \"Por nada!\".",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p4-e7",
        "type": "word-order",
        "prompt": "Organize o pedido educado de desculpas:",
        "options": [
          "late,",
          "sorry",
          "I",
          "am",
          "sir."
        ],
        "correctAnswer": "I am sorry I am late, sir.",
        "explanation": "\"I am sorry\" é a fórmula mais sincera para se desculpar.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p4-e8",
        "type": "listening",
        "prompt": "Ouça a frase de cortesia no transporte público:",
        "audioPhrase": "Excuse me, is this seat free?",
        "options": [
          "Excuse me, is this seat free?",
          "Thank you, is this seat clean?",
          "Pardon me, where is this bus?",
          "Hello, can you help me sit?"
        ],
        "correctAnswer": "Excuse me, is this seat free?",
        "explanation": "\"Excuse me, is this seat free?\" significa \"Com licença, este assento está livre?\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p4-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone para agradecer: \"Thank you very much!\"",
        "audioPhrase": "Thank you very much",
        "correctAnswer": "Thank you very much",
        "phoneticHint": "/θæŋk juː ˈver.i mʌtʃ/",
        "explanation": "Excelente! Lembre-se do som do \"th\" com a língua entre os dentes.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p4-e10",
        "type": "multiple-choice",
        "prompt": "Ao esbarrar acidentalmente em alguém na rua, o que você diz imediatamente?",
        "options": [
          "I am so sorry!",
          "You are welcome!",
          "Please meet me!",
          "Good afternoon!"
        ],
        "correctAnswer": "I am so sorry!",
        "explanation": "\"I am sorry\" ou \"Oops, sorry!\" é a reação correta ao esbarrar em alguém.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p5",
    "worldId": 1,
    "phaseNumber": 5,
    "title": "Números de 1 a 10 & Idades",
    "subtitle": "One, Two, Three & How old are you?",
    "pedagogicalObjective": "Dominar a contagem de 1 a 10 e expressar idades usando o Verbo To Be.",
    "type": "lesson",
    "icon": "hash",
    "cefrLevel": "A1",
    "theorySummary": [
      "Contagem: 1-one, 2-two, 3-three, 4-four, 5-five, 6-six, 7-seven, 8-eight, 9-nine, 10-ten.",
      "Cuidado com a pronúncia de \"three\" (/θriː/ com som do TH).",
      "ATENÇÃO: Em inglês dizemos \"I AM 20 years old\" (usa-se o verbo SER, nunca o verbo TER!).",
      "Pergunta de idade: \"How old are you?\""
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p5-e1",
        "type": "multiple-choice",
        "prompt": "Qual é a forma correta de dizer \"Eu tenho dez anos\" em inglês?",
        "options": [
          "I am ten years old.",
          "I have ten years.",
          "I make ten years.",
          "My age have ten."
        ],
        "correctAnswer": "I am ten years old.",
        "explanation": "Em inglês a idade é expressa com o verbo To Be (\"I am\"), e NUNCA com o verbo \"have\"!",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p5-e2",
        "type": "word-order",
        "prompt": "Ordene a pergunta de idade:",
        "options": [
          "old",
          "How",
          "you?",
          "are"
        ],
        "correctAnswer": "How old are you?",
        "explanation": "\"How old are you?\" significa literalmente \"Quão velho é você?\", isto é, \"Quantos anos você tem?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p5-e3",
        "type": "fill-blank",
        "prompt": "Complete a sequência matemática simples: \"Seven plus three equals ____.\"",
        "options": [
          "ten",
          "eight",
          "nine",
          "six"
        ],
        "correctAnswer": "ten",
        "explanation": "7 + 3 = 10 (seven plus three equals ten).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p5-e4",
        "type": "listening",
        "prompt": "Ouça o áudio e selecione a contagem correta:",
        "audioPhrase": "One, two, three, four, five!",
        "options": [
          "One, two, three, four, five!",
          "One, two, six, eight, ten!",
          "Five, four, three, two, one!",
          "Seven, eight, nine, ten!"
        ],
        "correctAnswer": "One, two, three, four, five!",
        "explanation": "Contagem de um a cinco: 1, 2, 3, 4, 5.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p5-e5",
        "type": "multiple-choice",
        "visualEmoji": "🎂",
        "prompt": "Como se diz \"Eu tenho 20 anos\" em inglês de forma correta?",
        "options": [
          "I am 20 years old.",
          "I have 20 years.",
          "I got 20 ages.",
          "My age has 20."
        ],
        "correctAnswer": "I am 20 years old.",
        "explanation": "Em inglês NÃO usamos o verbo \"have\" para idade! Usamos o verbo TO BE: \"I am 20 years old\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p5-e6",
        "type": "fill-blank",
        "visualEmoji": "🔢",
        "prompt": "Qual número vem logo após o sete (seven)? \"Seven, _____, nine.\"",
        "options": [
          "eight",
          "six",
          "ten",
          "five"
        ],
        "correctAnswer": "eight",
        "explanation": "Eight (/eɪt/) é o número 8.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p5-e7",
        "type": "word-order",
        "prompt": "Ordene a pergunta de idade:",
        "options": [
          "old",
          "you?",
          "are",
          "How"
        ],
        "correctAnswer": "How old are you?",
        "explanation": "\"How old are you?\" é a pergunta padrão para \"Quantos anos você tem?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p5-e8",
        "type": "listening",
        "prompt": "Ouça a resposta sobre idade e marque a alternativa correta:",
        "audioPhrase": "I am seven years old.",
        "options": [
          "I am seven years old.",
          "I am eleven years old.",
          "I am seventy years old.",
          "I have seven books today."
        ],
        "correctAnswer": "I am seven years old.",
        "explanation": "\"I am seven years old\" significa \"Eu tenho 7 anos\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p5-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone os números: \"One, two, three, four, five\"",
        "audioPhrase": "One two three four five",
        "correctAnswer": "One two three four five",
        "phoneticHint": "/wʌn tuː θriː fɔːr faɪv/",
        "explanation": "Ótima pronúncia dos primeiros 5 números em inglês!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p5-e10",
        "type": "multiple-choice",
        "visualEmoji": "🔟",
        "prompt": "Qual é o número \"TEN\"?",
        "options": [
          "10",
          "12",
          "20",
          "2"
        ],
        "correctAnswer": "10",
        "explanation": "Ten é o número 10.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p6",
    "worldId": 1,
    "phaseNumber": 6,
    "title": "Cores Fundamentais",
    "subtitle": "Red, Blue, Green & Descrevendo Objetos",
    "pedagogicalObjective": "Nomear e aplicar cores antes dos substantivos para descrever o mundo.",
    "type": "lesson",
    "icon": "palette",
    "cefrLevel": "A1",
    "theorySummary": [
      "Cores principais: Red (vermelho), Blue (azul), Yellow (amarelo), Green (verde), Black (preto), White (branco), Orange (laranja), Purple (roxo).",
      "REGRA DE OURO: Em inglês, a cor (adjetivo) vem ANTES do substantivo: \"A blue car\" (um carro azul).",
      "As cores não têm plural: \"two blue cars\" (e nunca \"blues cars\")."
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p6-e1",
        "type": "multiple-choice",
        "visualEmoji": "🚗",
        "prompt": "Qual é a tradução correta de \"Um carro vermelho\"?",
        "options": [
          "A red car",
          "A car red",
          "The reds car",
          "A car of red"
        ],
        "correctAnswer": "A red car",
        "explanation": "Em inglês, o adjetivo de cor sempre vem ANTES do substantivo: \"a red car\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p6-e2",
        "type": "word-order",
        "prompt": "Organize as palavras para formar a descrição:",
        "options": [
          "sky",
          "The",
          "is",
          "blue."
        ],
        "correctAnswer": "The sky is blue.",
        "explanation": "\"The sky is blue\" significa \"O céu é azul\".",
        "skillCategory": "writing"
      },
      {
        "id": "w1-p6-e3",
        "type": "fill-blank",
        "prompt": "Qual cor resulta da mistura de amarelo e azul?",
        "contextSentence": "Yellow and blue make ____.",
        "options": [
          "green",
          "red",
          "purple",
          "black"
        ],
        "correctAnswer": "green",
        "explanation": "Amarelo + Azul = Verde (Green).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p6-e4",
        "type": "listening",
        "prompt": "Ouça a frase e marque a opção falada:",
        "audioPhrase": "I have a white cat and a black dog.",
        "options": [
          "I have a white cat and a black dog.",
          "I have a red cat and a blue dog.",
          "He has a white cat and a green dog.",
          "We have a black cat and a white bird."
        ],
        "correctAnswer": "I have a white cat and a black dog.",
        "explanation": "\"I have a white cat and a black dog\" significa \"Eu tenho um gato branco e um cachorro preto\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p6-e5",
        "type": "multiple-choice",
        "visualEmoji": "🔵",
        "prompt": "Qual é a cor do céu em um dia limpo?",
        "options": [
          "Blue",
          "Red",
          "Yellow",
          "Black"
        ],
        "correctAnswer": "Blue",
        "explanation": "Blue (/bluː/) é azul.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p6-e6",
        "type": "fill-blank",
        "visualEmoji": "🟢",
        "prompt": "A cor da grama é verde. Em inglês: \"The grass is _____.\"",
        "options": [
          "green",
          "yellow",
          "purple",
          "orange"
        ],
        "correctAnswer": "green",
        "explanation": "Green (/ɡriːn/) significa verde.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p6-e7",
        "type": "word-order",
        "prompt": "Monte a frase descrevendo o carro:",
        "options": [
          "is",
          "car",
          "The",
          "red."
        ],
        "correctAnswer": "The car is red.",
        "explanation": "\"The car is red.\" significa \"O carro é vermelho.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p6-e8",
        "type": "listening",
        "prompt": "Ouça a cor e selecione a frase ouvida:",
        "audioPhrase": "I like my yellow shirt.",
        "options": [
          "I like my yellow shirt.",
          "I like my blue shirt.",
          "I see a yellow bird.",
          "I want a yellow skirt."
        ],
        "correctAnswer": "I like my yellow shirt.",
        "explanation": "\"Yellow\" é amarelo e \"shirt\" é camisa.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p6-e9",
        "type": "speaking-repeat",
        "prompt": "Diga em voz alta: \"The sky is blue\"",
        "audioPhrase": "The sky is blue",
        "correctAnswer": "The sky is blue",
        "phoneticHint": "/ðə skaɪ ɪz bluː/",
        "explanation": "Excelente pronúncia! \"The sky is blue\" significa \"O céu é azul\".",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p6-e10",
        "type": "multiple-choice",
        "visualEmoji": "⚪",
        "prompt": "Como se diz \"Branco\" e \"Preto\" em inglês?",
        "options": [
          "White and Black",
          "Green and Yellow",
          "Brown and Pink",
          "Grey and Orange"
        ],
        "correctAnswer": "White and Black",
        "explanation": "White é branco e Black é preto.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p7",
    "worldId": 1,
    "phaseNumber": 7,
    "title": "Objetos de Estudo & Sala de Aula",
    "subtitle": "Book, Pen, Desk & Material Escolar",
    "pedagogicalObjective": "Identificar itens essenciais de estudo e construir frases com \"This is...\".",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Vocabulário: Book (livro), Pen (caneta), Pencil (lápis), Notebook (caderno), Desk (carteira/mesa), Backpack (mochila), Computer (computador).",
      "\"This is...\" significa \"Isto é...\" ou \"Este(a) é...\" para objetos próximos.",
      "Exemplo: \"This is my English book.\""
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p7-e1",
        "type": "multiple-choice",
        "visualEmoji": "✏️",
        "prompt": "Qual objeto você utiliza para escrever com grafite e pode apagar?",
        "options": [
          "Pencil",
          "Pen",
          "Book",
          "Desk"
        ],
        "correctAnswer": "Pencil",
        "explanation": "\"Pencil\" é lápis, enquanto \"Pen\" é caneta.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p7-e2",
        "type": "word-order",
        "visualEmoji": "📚",
        "prompt": "Ordene a frase indicando o livro de inglês:",
        "options": [
          "English",
          "is",
          "book.",
          "This",
          "my"
        ],
        "correctAnswer": "This is my English book.",
        "explanation": "\"This is my English book.\" significa \"Este é meu livro de inglês.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p7-e3",
        "type": "translate",
        "prompt": "Traduza: \"Onde está minha caneta azul?\"",
        "options": [
          "Where is my blue pen?",
          "What is my pen blue?",
          "Who has my blue book?",
          "Here is my blue pen?"
        ],
        "correctAnswer": "Where is my blue pen?",
        "explanation": "\"Where is my blue pen?\" usa \"Where\" (onde) e a ordem adjetivo-substantivo \"blue pen\".",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p7-e4",
        "type": "listening",
        "prompt": "Ouça o áudio e selecione a ordem dada pelo professor:",
        "audioPhrase": "Please open your notebook.",
        "options": [
          "Please open your notebook.",
          "Please close your backpack.",
          "Please take your pencil.",
          "Open your blue book."
        ],
        "correctAnswer": "Please open your notebook.",
        "explanation": "\"Please open your notebook.\" significa \"Por favor, abra seu caderno.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p7-e5",
        "type": "multiple-choice",
        "visualEmoji": "✏️",
        "prompt": "Como se diz \"Lápis\" em inglês?",
        "options": [
          "Pencil",
          "Pen",
          "Book",
          "Ruler"
        ],
        "correctAnswer": "Pencil",
        "explanation": "Pencil (/ˈpen.səl/) significa lápis.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p7-e6",
        "type": "fill-blank",
        "visualEmoji": "🎒",
        "prompt": "Complete com o objeto escolar: \"I have a _____ for my books.\"",
        "options": [
          "backpack",
          "table",
          "chair",
          "board"
        ],
        "correctAnswer": "backpack",
        "explanation": "Backpack significa mochila escolar.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p7-e7",
        "type": "word-order",
        "prompt": "Organize o pedido em sala de aula:",
        "options": [
          "your",
          "Open",
          "page",
          "to",
          "book",
          "five."
        ],
        "correctAnswer": "Open your book to page five.",
        "explanation": "\"Open your book to page five.\" significa \"Abra seu livro na página cinco.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p7-e8",
        "type": "listening",
        "prompt": "Ouça o áudio e selecione o material escolar mencionado:",
        "audioPhrase": "Where is my blue pen?",
        "options": [
          "Where is my blue pen?",
          "Where is my new pencil?",
          "Here is my blue pen.",
          "This is my red pen."
        ],
        "correctAnswer": "Where is my blue pen?",
        "explanation": "\"Where is my blue pen?\" significa \"Onde está minha caneta azul?\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p7-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"This is my notebook\"",
        "audioPhrase": "This is my notebook",
        "correctAnswer": "This is my notebook",
        "phoneticHint": "/ðɪs ɪz maɪ ˈnoʊt.bʊk/",
        "explanation": "Perfeito! \"Notebook\" significa caderno de anotações.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p7-e10",
        "type": "multiple-choice",
        "visualEmoji": "📐",
        "prompt": "Qual material usamos para medir centímetros?",
        "options": [
          "Ruler",
          "Eraser",
          "Sharpener",
          "Glue"
        ],
        "correctAnswer": "Ruler",
        "explanation": "Ruler significa régua.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p8",
    "worldId": 1,
    "phaseNumber": 8,
    "title": "Pronomes Pessoais (Sujeito)",
    "subtitle": "I, You, He, She, It, We, They",
    "pedagogicalObjective": "Compreender quem pratica a ação na oração em inglês.",
    "type": "lesson",
    "icon": "users",
    "cefrLevel": "A1",
    "theorySummary": [
      "Pronomes: I (eu - SEMPRE maiúsculo), You (você/vocês).",
      "He (ele - pessoas masculinas), She (ela - pessoas femininas).",
      "It (ele/ela - usado para 1 coisa, objeto, ideia ou animal).",
      "We (nós), They (eles/elas - tanto para pessoas quanto para coisas no plural)."
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p8-e1",
        "type": "multiple-choice",
        "prompt": "Qual pronome pessoal substitui o sujeito em \"Maria and I are friends\"?",
        "options": [
          "We",
          "They",
          "You",
          "She"
        ],
        "correctAnswer": "We",
        "explanation": "\"Maria e eu\" equivale a \"nós\", ou seja, \"We\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p8-e2",
        "type": "fill-blank",
        "prompt": "Complete a frase referindo-se a um carro:",
        "contextSentence": "The car is new. ____ is red.",
        "options": [
          "It",
          "He",
          "She",
          "They"
        ],
        "correctAnswer": "It",
        "explanation": "Para objetos no singular usamos o pronome neutro \"It\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p8-e3",
        "type": "word-order",
        "prompt": "Ordene a frase:",
        "options": [
          "are",
          "They",
          "students.",
          "good"
        ],
        "correctAnswer": "They are good students.",
        "explanation": "\"They are good students.\" significa \"Eles são bons estudantes.\".",
        "skillCategory": "writing"
      },
      {
        "id": "w1-p8-e4",
        "type": "multiple-choice",
        "prompt": "Qual é o pronome correto para se referir a \"The boys\" (os meninos)?",
        "options": [
          "They",
          "He",
          "We",
          "It"
        ],
        "correctAnswer": "They",
        "explanation": "Para a terceira pessoa do plural (eles/elas), usamos sempre \"They\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p8-e5",
        "type": "multiple-choice",
        "prompt": "Qual pronome pessoal usamos para um objeto ou animal neutro?",
        "options": [
          "It",
          "He",
          "She",
          "They"
        ],
        "correctAnswer": "It",
        "explanation": "\"It\" é o pronome neutro singular em inglês para coisas, lugares, clima e animais genéricos.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p8-e6",
        "type": "fill-blank",
        "prompt": "Complete a frase: \"Maria is my sister. _____ is very smart.\"",
        "options": [
          "She",
          "He",
          "It",
          "They"
        ],
        "correctAnswer": "She",
        "explanation": "Para referir-se a Maria (feminino singular), usamos \"She\" (ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p8-e7",
        "type": "word-order",
        "prompt": "Organize a frase com pronomes:",
        "options": [
          "friends.",
          "are",
          "We",
          "good"
        ],
        "correctAnswer": "We are good friends.",
        "explanation": "\"We are good friends.\" significa \"Nós somos bons amigos.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p8-e8",
        "type": "listening",
        "prompt": "Ouça a frase e identifique os pronomes utilizados:",
        "audioPhrase": "They are my parents and he is my brother.",
        "options": [
          "They are my parents and he is my brother.",
          "You are my parents and she is my sister.",
          "We are with parents and he is my friend.",
          "They are my cousins and she is my aunt."
        ],
        "correctAnswer": "They are my parents and he is my brother.",
        "explanation": "\"They\" = eles/elas; \"he\" = ele.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p8-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone os pronomes: \"I, You, He, She, It, We, They\"",
        "audioPhrase": "I You He She It We They",
        "correctAnswer": "I You He She It We They",
        "phoneticHint": "/aɪ juː hiː ʃiː ɪt wiː ðeɪ/",
        "explanation": "Excelente! Todos os 7 pronomes sujeitos pronunciados com precisão.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p8-e10",
        "type": "multiple-choice",
        "prompt": "Qual pronome usamos para falar de um grupo de pessoas incluindo nós mesmos?",
        "options": [
          "We",
          "They",
          "You",
          "He"
        ],
        "correctAnswer": "We",
        "explanation": "\"We\" significa \"Nós\".",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p9",
    "worldId": 1,
    "phaseNumber": 9,
    "title": "Verbo To Be: Presente Afirmativo",
    "subtitle": "AM, IS, ARE & As Formas Contraídas",
    "pedagogicalObjective": "Conjugar com precisão o verbo ser/estar no presente afirmativo.",
    "type": "lesson",
    "icon": "check",
    "cefrLevel": "A1",
    "theorySummary": [
      "O verbo To Be tem três formas no presente: AM, IS, ARE.",
      "I AM (I'm)",
      "He / She / It IS (He's / She's / It's)",
      "You / We / They ARE (You're / We're / They're)",
      "Significa tanto \"ser\" quanto \"estar\", dependendo do contexto da frase."
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p9-e1",
        "type": "fill-blank",
        "prompt": "Complete com a forma correta do Verbo To Be:",
        "contextSentence": "She ____ a wonderful teacher.",
        "options": [
          "is",
          "are",
          "am",
          "be"
        ],
        "correctAnswer": "is",
        "explanation": "Com a terceira pessoa do singular (He/She/It), usamos \"is\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p9-e2",
        "type": "word-order",
        "prompt": "Monte a frase afirmativa:",
        "options": [
          "We",
          "ready",
          "are",
          "now."
        ],
        "correctAnswer": "We are ready now.",
        "explanation": "\"We are ready now.\" significa \"Nós estamos prontos agora.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p9-e3",
        "type": "multiple-choice",
        "prompt": "Qual é a forma contraída correta de \"I am happy\"?",
        "options": [
          "I'm happy",
          "Im happy",
          "I'am happy",
          "I are happy"
        ],
        "correctAnswer": "I'm happy",
        "explanation": "A contração padrão de \"I am\" é \"I'm\" com apóstrofo.",
        "skillCategory": "writing"
      },
      {
        "id": "w1-p9-e4",
        "type": "listening",
        "prompt": "Ouça o áudio e selecione a frase ouvida:",
        "audioPhrase": "They are my best friends.",
        "options": [
          "They are my best friends.",
          "He is my best friend.",
          "We are great friends.",
          "You are my new friend."
        ],
        "correctAnswer": "They are my best friends.",
        "explanation": "\"They are my best friends.\" significa \"Eles são meus melhores amigos.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p9-e5",
        "type": "fill-blank",
        "prompt": "Qual a forma correta do verbo To Be? \"They _____ students at this school.\"",
        "options": [
          "are",
          "is",
          "am",
          "be"
        ],
        "correctAnswer": "are",
        "explanation": "Com \"They\", usamos \"are\" no presente.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p9-e6",
        "type": "multiple-choice",
        "prompt": "Qual é a contração natural de \"He is\"?",
        "options": [
          "He's",
          "He're",
          "His",
          "Hes"
        ],
        "correctAnswer": "He's",
        "explanation": "\"He's\" é a contração de \"He is\". Cuidado para não confundir com \"His\" (dele).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p9-e7",
        "type": "word-order",
        "prompt": "Monte a afirmação com o verbo To Be:",
        "options": [
          "happy",
          "today.",
          "is",
          "She",
          "very"
        ],
        "correctAnswer": "She is very happy today.",
        "explanation": "\"She is very happy today.\" significa \"Ela está muito feliz hoje.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p9-e8",
        "type": "listening",
        "prompt": "Ouça a descrição com verbo To Be:",
        "audioPhrase": "We are ready for the test.",
        "options": [
          "We are ready for the test.",
          "They are ready for the class.",
          "He is ready for the game.",
          "You are ready for the bus."
        ],
        "correctAnswer": "We are ready for the test.",
        "explanation": "\"We are ready for the test.\" significa \"Nós estamos prontos para a prova.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p9-e9",
        "type": "speaking-repeat",
        "prompt": "Pronuncie a frase afirmativa: \"I am ready!\"",
        "audioPhrase": "I am ready",
        "correctAnswer": "I am ready",
        "phoneticHint": "/aɪ æm ˈred.i/",
        "explanation": "Muito bem! \"I am ready\" significa \"Eu estou pronto(a)\".",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p9-e10",
        "type": "multiple-choice",
        "visualEmoji": "☀️",
        "prompt": "Como dizer \"Está calor hoje\" em inglês?",
        "options": [
          "It is hot today.",
          "Is hot today.",
          "He is hot today.",
          "There is hot today."
        ],
        "correctAnswer": "It is hot today.",
        "explanation": "Em inglês, orações sobre o clima sempre exigem o pronome sujeito neutro \"It\" + \"is\": \"It is hot today\".",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p10",
    "worldId": 1,
    "phaseNumber": 10,
    "title": "Baú da Sabedoria I: Conquista Inicial",
    "subtitle": "Revisão das 9 primeiras lições e bônus de gemas!",
    "pedagogicalObjective": "Consolidar saudações, números, pronomes e o verbo To Be conquistando seu primeiro baú.",
    "type": "chest",
    "icon": "gift",
    "cefrLevel": "A1",
    "theorySummary": [
      "Parabéns! Você concluiu 1/3 do Mundo 1.",
      "Você já aprendeu: sons do alfabeto, cumprimentos a qualquer hora do dia, apresentações, cortesia, números de 1 a 10, cores, objetos de sala de aula, pronomes e o verbo To Be afirmativo.",
      "Resolva estes 3 desafios de consolidação para abrir o baú!"
    ],
    "xpReward": 60,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w1-p10-e1",
        "type": "multiple-choice",
        "prompt": "Qual das frases abaixo está 100% correta?",
        "options": [
          "He is ten years old and has a blue car.",
          "He have ten years and has a car blue.",
          "He is ten years and has blue a car.",
          "He are ten years old with a blue car."
        ],
        "correctAnswer": "He is ten years old and has a blue car.",
        "explanation": "Usa idade com \"is\", número \"ten\", e adjetivo antes do substantivo \"a blue car\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p10-e2",
        "type": "word-order",
        "prompt": "Monte o diálogo de apresentação:",
        "options": [
          "Hello,",
          "is",
          "Lucas.",
          "name",
          "my"
        ],
        "correctAnswer": "Hello, my name is Lucas.",
        "explanation": "\"Hello, my name is Lucas.\" é a frase perfeita de apresentação.",
        "skillCategory": "speaking"
      },
      {
        "id": "w1-p10-e3",
        "type": "listening",
        "prompt": "Ouça e comemore a abertura do baú!",
        "audioPhrase": "Congratulations, you opened the first wisdom chest!",
        "options": [
          "Congratulations, you opened the first wisdom chest!",
          "Hello, you completed the first lesson today!",
          "Congratulations, see you tomorrow afternoon!",
          "Good morning, welcome to the second world!"
        ],
        "correctAnswer": "Congratulations, you opened the first wisdom chest!",
        "explanation": "Excelente! Você completou o primeiro terço da jornada com louvor.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p10-e4",
        "type": "multiple-choice",
        "prompt": "[Revisão] Como responder a \"How are you?\" de forma educada?",
        "options": [
          "I am fine, thank you.",
          "I am 25 years old.",
          "My name is Carlos.",
          "Good night, sir."
        ],
        "correctAnswer": "I am fine, thank you.",
        "explanation": "\"I am fine, thank you.\" responde à pergunta sobre como você está.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p10-e5",
        "type": "fill-blank",
        "prompt": "[Revisão] \"She _____ my English teacher.\"",
        "options": [
          "is",
          "are",
          "am",
          "be"
        ],
        "correctAnswer": "is",
        "explanation": "Com \"She\", usamos \"is\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p10-e6",
        "type": "word-order",
        "prompt": "[Revisão] Reorganize a frase de apresentação:",
        "options": [
          "to",
          "meet",
          "Pleased",
          "you."
        ],
        "correctAnswer": "Pleased to meet you.",
        "explanation": "\"Pleased to meet you\" é uma variação formal de \"Nice to meet you\".",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p10-e7",
        "type": "listening",
        "prompt": "[Revisão] Ouça e selecione a informação correta:",
        "audioPhrase": "Good morning, please sit down.",
        "options": [
          "Good morning, please sit down.",
          "Good afternoon, please stand up.",
          "Good night, please go home.",
          "Hello my friend, sit here."
        ],
        "correctAnswer": "Good morning, please sit down.",
        "explanation": "\"Good morning, please sit down\" = \"Bom dia, por favor sente-se\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p10-e8",
        "type": "multiple-choice",
        "visualEmoji": "🔢",
        "prompt": "[Revisão] Quanto é \"three + four\"?",
        "options": [
          "Seven (7)",
          "Six (6)",
          "Eight (8)",
          "Five (5)"
        ],
        "correctAnswer": "Seven (7)",
        "explanation": "3 + 4 = 7 (Seven).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p10-e9",
        "type": "speaking-repeat",
        "prompt": "[Revisão] Fale: \"Hello, nice to meet you!\"",
        "audioPhrase": "Hello nice to meet you",
        "correctAnswer": "Hello nice to meet you",
        "phoneticHint": "/həˈloʊ naɪs tuː miːt juː/",
        "explanation": "Parabéns pela pronúncia clara e confiante!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p10-e10",
        "type": "translate",
        "prompt": "[Revisão] Como dizer \"Com licença\" em inglês?",
        "options": [
          "Excuse me",
          "Thank you",
          "I am sorry",
          "You are welcome"
        ],
        "correctAnswer": "Excuse me",
        "explanation": "\"Excuse me\" é usado para pedir licença ou chamar a atenção.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p10-e11",
        "type": "fill-blank",
        "visualEmoji": "🎒",
        "prompt": "[Revisão] \"Open your _____, please.\"",
        "options": [
          "book",
          "pen",
          "desk",
          "pencil"
        ],
        "correctAnswer": "book",
        "explanation": "\"Open your book\" = \"Abra seu livro\".",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p11",
    "worldId": 1,
    "phaseNumber": 11,
    "title": "Números de 11 a 30 & Sufixo -TEEN",
    "subtitle": "Eleven, Twelve, Thirteen... Twenty!",
    "pedagogicalObjective": "Dominar a contagem de 11 a 30 e distinguir o som de -teen e -ty.",
    "type": "lesson",
    "icon": "hash",
    "cefrLevel": "A1",
    "theorySummary": [
      "11-eleven, 12-twelve.",
      "13 a 19 terminam em -TEEN: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen.",
      "20 é \"twenty\", e a partir daí combinamos: twenty-one, twenty-two... 30 é \"thirty\".",
      "DICA FONÉTICA: Em \"thir-TEEN\" o som forte fica no final. Em \"THIR-ty\" fica no começo!"
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p11-e1",
        "type": "multiple-choice",
        "prompt": "Como se escreve o número 15 em inglês?",
        "options": [
          "Fifteen",
          "Fiveteen",
          "Fifty",
          "Fifthi"
        ],
        "correctAnswer": "Fifteen",
        "explanation": "O número 15 é \"Fifteen\" (atenção à mudança de five para fif-).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p11-e2",
        "type": "word-order",
        "prompt": "Ordene a frase indicando a quantidade de alunos:",
        "options": [
          "twenty",
          "are",
          "There",
          "students."
        ],
        "correctAnswer": "There are twenty students.",
        "explanation": "\"There are twenty students.\" significa \"Há vinte estudantes.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p11-e3",
        "type": "fill-blank",
        "prompt": "Qual número vem imediatamente após nineteen (19)?",
        "contextSentence": "Eighteen, nineteen, ____.",
        "options": [
          "twenty",
          "twelve",
          "thirty",
          "twenty-one"
        ],
        "correctAnswer": "twenty",
        "explanation": "18, 19, 20 (twenty).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p11-e4",
        "type": "listening",
        "prompt": "Ouça o número falado com atenção na entonação:",
        "audioPhrase": "She is thirteen years old.",
        "options": [
          "She is thirteen years old.",
          "She is thirty years old.",
          "She is three years old.",
          "She is fifteen years old."
        ],
        "correctAnswer": "She is thirteen years old.",
        "explanation": "A entonação prolongada no final (-TEEN) indica 13 (thirteen) e não 30 (thirty).",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p11-e5",
        "type": "multiple-choice",
        "visualEmoji": "🔢",
        "prompt": "Qual é o número \"TWELVE\"?",
        "options": [
          "12",
          "20",
          "11",
          "13"
        ],
        "correctAnswer": "12",
        "explanation": "Twelve (/twelv/) é o número 12.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p11-e6",
        "type": "fill-blank",
        "prompt": "Complete com o número que vem antes do vinte: \"Eighteen, nineteen, _____.\"",
        "options": [
          "twenty",
          "thirty",
          "twelve",
          "fifteen"
        ],
        "correctAnswer": "twenty",
        "explanation": "Twenty (/ˈtwen.ti/) é 20.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p11-e7",
        "type": "word-order",
        "prompt": "Ordene a contagem de anos:",
        "options": [
          "is",
          "fifteen",
          "He",
          "old.",
          "years"
        ],
        "correctAnswer": "He is fifteen years old.",
        "explanation": "\"He is fifteen years old.\" significa \"Ele tem 15 anos.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p11-e8",
        "type": "listening",
        "prompt": "Ouça o número com atenção e marque a opção certa:",
        "audioPhrase": "There are thirteen students in the room.",
        "options": [
          "There are thirteen students in the room.",
          "There are thirty students in the room.",
          "There are three students in the room.",
          "There are fourteen students in the room."
        ],
        "correctAnswer": "There are thirteen students in the room.",
        "explanation": "Thirteen (/θɜːrˈtiːn/) tem ênfase na última sílaba \"-teen\" (13), enquanto thirty (30) tem ênfase na primeira sílaba.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p11-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone os números: \"Eleven, twelve, thirteen, fourteen, fifteen\"",
        "audioPhrase": "Eleven twelve thirteen fourteen fifteen",
        "correctAnswer": "Eleven twelve thirteen fourteen fifteen",
        "phoneticHint": "/ɪˈlev.ən twelv θɜːrˈtiːn fɔːrˈtiːn fɪfˈtiːn/",
        "explanation": "Excelente pronúncia dos números de 11 a 15!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p11-e10",
        "type": "multiple-choice",
        "prompt": "Qual a diferença de pronúncia entre THIRTEEN (13) e THIRTY (30)?",
        "options": [
          "Thirteen tem o som forte no \"-TEEN\" e Thirty tem o som forte no início \"THIR-\"",
          "Ambos soam exatamente iguais",
          "Thirty termina com som de \"N\"",
          "Thirteen é falado mais rápido que Thirty"
        ],
        "correctAnswer": "Thirteen tem o som forte no \"-TEEN\" e Thirty tem o som forte no início \"THIR-\"",
        "explanation": "Essa é a maior pegadinha para ouvintes brasileiros: os números com -TEEN têm a sílaba tônica no final!",
        "skillCategory": "pronunciation"
      }
    ]
  },
  {
    "id": "w1-p12",
    "worldId": 1,
    "phaseNumber": 12,
    "title": "Verbo To Be: Forma Negativa",
    "subtitle": "NOT, Isn't & Aren't",
    "pedagogicalObjective": "Negar frases com segurança adicionando \"not\" após o verbo To Be.",
    "type": "lesson",
    "icon": "x-circle",
    "cefrLevel": "A1",
    "theorySummary": [
      "Para negar com o verbo To Be, basta colocar a palavra \"NOT\" depois dele.",
      "I am NOT (I'm not)",
      "He is NOT = He isn't (ou He's not)",
      "She is NOT = She isn't",
      "They are NOT = They aren't (ou They're not)"
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p12-e1",
        "type": "multiple-choice",
        "prompt": "Qual é a forma negativa correta de \"He is tired\" (Ele está cansado)?",
        "options": [
          "He isn't tired.",
          "He not is tired.",
          "He don't tired.",
          "He no is tired."
        ],
        "correctAnswer": "He isn't tired.",
        "explanation": "A negação correta é \"He is not tired\" ou a forma contraída \"He isn't tired\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p12-e2",
        "type": "word-order",
        "prompt": "Monte a frase negativa:",
        "options": [
          "at",
          "not",
          "We",
          "are",
          "school."
        ],
        "correctAnswer": "We are not at school.",
        "explanation": "\"We are not at school.\" significa \"Nós não estamos na escola.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p12-e3",
        "type": "fill-blank",
        "prompt": "Complete a frase negativa na primeira pessoa:",
        "contextSentence": "I ____ not hungry right now.",
        "options": [
          "am",
          "is",
          "are",
          "do"
        ],
        "correctAnswer": "am",
        "explanation": "Com \"I\", a única forma permitida do verbo To Be é \"am\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p12-e4",
        "type": "translate",
        "prompt": "Traduza: \"Eles não são meus professores.\"",
        "options": [
          "They aren't my teachers.",
          "They not are my teachers.",
          "They don't my teachers.",
          "They isn't my teachers."
        ],
        "correctAnswer": "They aren't my teachers.",
        "explanation": "Com \"They\" usamos \"aren't\" (\"are not\").",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p12-e5",
        "type": "multiple-choice",
        "prompt": "Qual é a forma negativa correta para \"She is rich\"?",
        "options": [
          "She is not rich.",
          "She not is rich.",
          "She does not rich.",
          "She no is rich."
        ],
        "correctAnswer": "She is not rich.",
        "explanation": "No verbo To Be, colocamos \"not\" APÓS o verbo: \"She is not\" (ou contraído \"She isn't\").",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p12-e6",
        "type": "fill-blank",
        "prompt": "Complete a negativa contraída: \"We _____ tired, we have lots of energy!\"",
        "options": [
          "aren't",
          "isn't",
          "am not",
          "don't"
        ],
        "correctAnswer": "aren't",
        "explanation": "\"Aren't\" é a contração de \"are not\" para We, You e They.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p12-e7",
        "type": "word-order",
        "prompt": "Monte a frase negativa:",
        "options": [
          "not",
          "at",
          "home",
          "I",
          "am",
          "now."
        ],
        "correctAnswer": "I am not at home now.",
        "explanation": "\"I am not at home now.\" significa \"Eu não estou em casa agora.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p12-e8",
        "type": "listening",
        "prompt": "Ouça a frase negativa com atenção:",
        "audioPhrase": "He isn't a doctor, he is an engineer.",
        "options": [
          "He isn't a doctor, he is an engineer.",
          "He is a doctor and an engineer.",
          "She isn't a doctor, she is a teacher.",
          "He is not an engineer today."
        ],
        "correctAnswer": "He isn't a doctor, he is an engineer.",
        "explanation": "\"He isn't a doctor\" = \"Ele não é médico\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p12-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"I am not tired\"",
        "audioPhrase": "I am not tired",
        "correctAnswer": "I am not tired",
        "phoneticHint": "/aɪ æm nɑːt ˈtaɪ.ərd/",
        "explanation": "Muito bem! \"I am not tired\" significa \"Eu não estou cansado(a)\".",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p12-e10",
        "type": "multiple-choice",
        "prompt": "Qual é a contração correta de \"I am not\"?",
        "options": [
          "I'm not",
          "I amn't",
          "I ain't not",
          "I are not"
        ],
        "correctAnswer": "I'm not",
        "explanation": "A única contração padrão de \"I am not\" é \"I'm not\" (\"amn't\" não existe no inglês padrão).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p13",
    "worldId": 1,
    "phaseNumber": 13,
    "title": "Perguntas & Respostas Curtas",
    "subtitle": "Are you ready? Yes, I am!",
    "pedagogicalObjective": "Fazer perguntas invertendo a ordem do verbo To Be e responder de forma curta.",
    "type": "lesson",
    "icon": "help-circle",
    "cefrLevel": "A1",
    "theorySummary": [
      "REGRA DE INVERSÃO: Para transformar em pergunta, o verbo To Be passa para a FRENTE do sujeito!",
      "Afirmativa: \"You are happy.\" -> Pergunta: \"ARE you happy?\"",
      "Afirmativa: \"She is your sister.\" -> Pergunta: \"IS she your sister?\"",
      "Respostas curtas: \"Yes, I am.\" / \"No, I'm not.\" | \"Yes, she is.\" / \"No, she isn't.\""
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p13-e1",
        "type": "multiple-choice",
        "prompt": "Como transformar \"She is ready\" em uma pergunta?",
        "options": [
          "Is she ready?",
          "She is ready?",
          "Does she ready?",
          "Are she ready?"
        ],
        "correctAnswer": "Is she ready?",
        "explanation": "O verbo \"is\" passa para a frente do sujeito \"she\": \"Is she ready?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p13-e2",
        "type": "word-order",
        "prompt": "Ordene a pergunta interrogativa:",
        "options": [
          "from",
          "Are",
          "Brazil?",
          "you"
        ],
        "correctAnswer": "Are you from Brazil?",
        "explanation": "\"Are you from Brazil?\" significa \"Você é do Brasil?\".",
        "skillCategory": "speaking"
      },
      {
        "id": "w1-p13-e3",
        "type": "fill-blank",
        "prompt": "Complete a resposta curta afirmativa: \"Are you a student?\" -> \"Yes, I ____.\"",
        "options": [
          "am",
          "is",
          "are",
          "do"
        ],
        "correctAnswer": "am",
        "explanation": "Na resposta curta afirmativa dizemos \"Yes, I am.\" (nunca contraído \"Yes, I'm\" no final da frase).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p13-e4",
        "type": "listening",
        "prompt": "Ouça a pergunta e selecione a opção ouvida:",
        "audioPhrase": "Is he your English teacher?",
        "options": [
          "Is he your English teacher?",
          "Is she your English teacher?",
          "Are they your English teachers?",
          "Who is your English teacher?"
        ],
        "correctAnswer": "Is he your English teacher?",
        "explanation": "\"Is he your English teacher?\" significa \"Ele é seu professor de inglês?\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p13-e5",
        "type": "multiple-choice",
        "prompt": "Qual é a forma interrogativa de \"You are Brazilian\"?",
        "options": [
          "Are you Brazilian?",
          "You are Brazilian?",
          "Do you are Brazilian?",
          "Is you Brazilian?"
        ],
        "correctAnswer": "Are you Brazilian?",
        "explanation": "No verbo To Be, invertemos a ordem: o verbo vai para a frente do sujeito (\"Are you...?\").",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p13-e6",
        "type": "fill-blank",
        "prompt": "Complete a resposta curta: \"Is he your brother? Yes, he _____.\"",
        "options": [
          "is",
          "are",
          "am",
          "does"
        ],
        "correctAnswer": "is",
        "explanation": "Respostas curtas com \"he\" no afirmativo usam \"is\": \"Yes, he is.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p13-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta interrogativa:",
        "options": [
          "ready",
          "Are",
          "go?",
          "to",
          "you"
        ],
        "correctAnswer": "Are you ready to go?",
        "explanation": "\"Are you ready to go?\" significa \"Você está pronto para ir?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p13-e8",
        "type": "listening",
        "prompt": "Ouça a pergunta e selecione a alternativa:",
        "audioPhrase": "Is this your car, sir?",
        "options": [
          "Is this your car, sir?",
          "Are these your cars, sir?",
          "Where is your car, sir?",
          "Is that his car, sir?"
        ],
        "correctAnswer": "Is this your car, sir?",
        "explanation": "\"Is this your car, sir?\" significa \"Este é seu carro, senhor?\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p13-e9",
        "type": "speaking-repeat",
        "prompt": "Pergunte em voz alta: \"Are you okay?\"",
        "audioPhrase": "Are you okay",
        "correctAnswer": "Are you okay",
        "phoneticHint": "/ɑːr juː oʊˈkeɪ/",
        "explanation": "Ótima entonação! Em perguntas de sim/não a entonação sobe no final.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p13-e10",
        "type": "multiple-choice",
        "prompt": "Como responder negativamente a \"Are they ready?\" de forma curta?",
        "options": [
          "No, they aren't.",
          "No, they not.",
          "No, they don't.",
          "No, isn't they."
        ],
        "correctAnswer": "No, they aren't.",
        "explanation": "\"No, they aren't\" é a resposta curta negativa padrão.",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p14",
    "worldId": 1,
    "phaseNumber": 14,
    "title": "Artigos Indefinidos: A vs AN",
    "subtitle": "A car vs An apple: o segredo do som",
    "pedagogicalObjective": "Dominar o uso de A e AN de acordo com o som vocálico da palavra seguinte.",
    "type": "lesson",
    "icon": "tag",
    "cefrLevel": "A1",
    "theorySummary": [
      "Ambos significam \"um\" ou \"uma\" no singular.",
      "Use \"A\" antes de som de consoante: a car, a book, a dog, a house.",
      "Use \"AN\" antes de som de vogal: an apple, an elephant, an orange, an ice cream.",
      "Atenção ao som: \"an hour\" (o H é mudo, som de vogal) e \"a university\" (o U soa como \"you\", som consonantal)."
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p14-e1",
        "type": "multiple-choice",
        "visualEmoji": "🍎",
        "prompt": "Qual palavra deve ser precedida pelo artigo \"AN\"?",
        "options": [
          "Apple",
          "Book",
          "Computer",
          "Dog"
        ],
        "correctAnswer": "Apple",
        "explanation": "\"Apple\" começa com som vocálico (/æ/), portanto usamos \"an apple\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p14-e2",
        "type": "word-order",
        "prompt": "Monte a frase com o artigo correto:",
        "options": [
          "have",
          "orange.",
          "an",
          "I"
        ],
        "correctAnswer": "I have an orange.",
        "explanation": "\"I have an orange.\" significa \"Eu tenho uma laranja.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p14-e3",
        "type": "fill-blank",
        "prompt": "Complete: \"He is ____ doctor and she is ____ engineer.\"",
        "contextSentence": "He is [a] doctor and she is [an] engineer.",
        "options": [
          "a / an",
          "an / a",
          "a / a",
          "an / an"
        ],
        "correctAnswer": "a / an",
        "explanation": "\"a doctor\" (som consonantal /d/) e \"an engineer\" (som vocálico /e/).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p14-e4",
        "type": "translate",
        "prompt": "Traduza para o inglês: \"Ela tem um guarda-chuva azul.\"",
        "options": [
          "She has a blue umbrella.",
          "She has an blue umbrella.",
          "She has an umbrella blue.",
          "She have a blue umbrella."
        ],
        "correctAnswer": "She has a blue umbrella.",
        "explanation": "Embora umbrella comece com som de vogal, a palavra que vem imediatamente após o artigo é \"blue\" (som consonantal), então usamos \"a blue umbrella\".",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p14-e5",
        "type": "multiple-choice",
        "visualEmoji": "🍏",
        "prompt": "Qual artigo usamos antes de \"apple\"?",
        "options": [
          "An apple",
          "A apple",
          "The an apple",
          "One an apple"
        ],
        "correctAnswer": "An apple",
        "explanation": "Usamos \"AN\" antes de palavras com som de vogal (\"an apple\", \"an egg\", \"an orange\").",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p14-e6",
        "type": "fill-blank",
        "visualEmoji": "🚗",
        "prompt": "Complete com o artigo indefinido: \"I bought _____ new car.\"",
        "options": [
          "a",
          "an",
          "the an",
          "one of"
        ],
        "correctAnswer": "a",
        "explanation": "\"New\" começa com som de consoante (/n/), logo usamos \"A\": \"a new car\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p14-e7",
        "type": "word-order",
        "prompt": "Organize a frase com artigos:",
        "options": [
          "is",
          "He",
          "honest",
          "an",
          "man."
        ],
        "correctAnswer": "He is an honest man.",
        "explanation": "\"Honest\" tem o \"H\" mudo, começando com som de vogal (/ˈɑː.nɪst/), por isso leva \"AN\"!",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p14-e8",
        "type": "listening",
        "prompt": "Ouça e selecione o par de artigos correto:",
        "audioPhrase": "She is an artist and he is a doctor.",
        "options": [
          "She is an artist and he is a doctor.",
          "She is a artist and he is an doctor.",
          "She is an artist and he is an doctor.",
          "She is the artist and he is doctor."
        ],
        "correctAnswer": "She is an artist and he is a doctor.",
        "explanation": "\"an artist\" (som de vogal) e \"a doctor\" (som de consoante).",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p14-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"An apple and a banana\"",
        "audioPhrase": "An apple and a banana",
        "correctAnswer": "An apple and a banana",
        "phoneticHint": "/ən ˈæp.əl ənd ə bəˈnæn.ə/",
        "explanation": "Excelente! Você conectou o artigo à palavra de forma fluida e natural.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p14-e10",
        "type": "multiple-choice",
        "prompt": "Qual frase está gramaticalmente CORRETA?",
        "options": [
          "I have an umbrella.",
          "I have a umbrella.",
          "I have an university.",
          "I have a hour."
        ],
        "correctAnswer": "I have an umbrella.",
        "explanation": "\"Umbrella\" tem som de vogal (/ʌmˈbrel.ə/) -> \"an umbrella\". \"University\" começa com som consonantal /j/ -> \"a university\".",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p15",
    "worldId": 1,
    "phaseNumber": 15,
    "title": "Membros da Família",
    "subtitle": "Father, Mother, Brother & Parents",
    "pedagogicalObjective": "Nomear os membros da família e descrever laços familiares.",
    "type": "lesson",
    "icon": "heart",
    "cefrLevel": "A1",
    "theorySummary": [
      "Father (pai) / Dad (papai), Mother (mãe) / Mom (mamãe).",
      "Brother (irmão), Sister (irmã).",
      "Son (filho), Daughter (filha).",
      "CUIDADO: \"Parents\" significa PAIS (pai e mãe), e NÃO parentes (que é \"relatives\")!"
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p15-e1",
        "type": "multiple-choice",
        "visualEmoji": "👨‍👩‍👧",
        "prompt": "O que significa a palavra \"Parents\" em inglês?",
        "options": [
          "Pais (pai e mãe)",
          "Parentes em geral",
          "Primos",
          "Padrinhos"
        ],
        "correctAnswer": "Pais (pai e mãe)",
        "explanation": "\"Parents\" é um falso amigo clássico: significa especificamente pai e mãe!",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p15-e2",
        "type": "word-order",
        "prompt": "Ordene a apresentação familiar:",
        "options": [
          "is",
          "This",
          "sister,",
          "my",
          "Ana."
        ],
        "correctAnswer": "This is my sister, Ana.",
        "explanation": "\"This is my sister, Ana.\" significa \"Esta é minha irmã, Ana.\".",
        "skillCategory": "writing"
      },
      {
        "id": "w1-p15-e3",
        "type": "fill-blank",
        "prompt": "O filho de meu pai é meu:",
        "contextSentence": "My father's son is my ____.",
        "options": [
          "brother",
          "sister",
          "daughter",
          "mother"
        ],
        "correctAnswer": "brother",
        "explanation": "O filho do seu pai é seu irmão (brother).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p15-e4",
        "type": "listening",
        "prompt": "Ouça o áudio e selecione a frase ouvida:",
        "audioPhrase": "I love my family very much.",
        "options": [
          "I love my family very much.",
          "I live with my family today.",
          "This is my family at home.",
          "My family has three children."
        ],
        "correctAnswer": "I love my family very much.",
        "explanation": "\"I love my family very much.\" significa \"Eu amo muito minha família.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p15-e5",
        "type": "multiple-choice",
        "visualEmoji": "👨‍👩‍👦",
        "prompt": "Como se diz \"Pais\" (pai e mãe juntos) em inglês?",
        "options": [
          "Parents",
          "Relatives",
          "Fathers",
          "Couples"
        ],
        "correctAnswer": "Parents",
        "explanation": "\"Parents\" significa pai e mãe. \"Relatives\" significa parentes em geral (tios, primos, etc.). Cuidado com o falso cognato!",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p15-e6",
        "type": "fill-blank",
        "visualEmoji": "👧",
        "prompt": "Complete com o parentesco: \"My sister is my mother's _____.\"",
        "options": [
          "daughter",
          "son",
          "aunt",
          "niece"
        ],
        "correctAnswer": "daughter",
        "explanation": "\"Daughter\" significa filha.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p15-e7",
        "type": "word-order",
        "prompt": "Monte a frase sobre a família:",
        "options": [
          "brothers",
          "two",
          "have",
          "I",
          "sisters.",
          "and"
        ],
        "correctAnswer": "I have two brothers and sisters.",
        "explanation": "\"I have two brothers and sisters.\" significa \"Eu tenho dois irmãos e irmãs.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p15-e8",
        "type": "listening",
        "prompt": "Ouça e identifique os parentes mencionados:",
        "audioPhrase": "This is my grandfather and this is my grandmother.",
        "options": [
          "This is my grandfather and this is my grandmother.",
          "This is my father and this is my mother.",
          "This is my brother and this is my sister.",
          "This is my uncle and this is my aunt."
        ],
        "correctAnswer": "This is my grandfather and this is my grandmother.",
        "explanation": "\"Grandfather\" = avô; \"Grandmother\" = avó.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p15-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"I love my family\"",
        "audioPhrase": "I love my family",
        "correctAnswer": "I love my family",
        "phoneticHint": "/aɪ lʌv maɪ ˈfæm.əl.i/",
        "explanation": "Perfeito! \"I love my family\" = \"Eu amo minha família\".",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p15-e10",
        "type": "multiple-choice",
        "visualEmoji": "👦",
        "prompt": "Como se diz \"Filho\" e \"Filha\"?",
        "options": [
          "Son and Daughter",
          "Boy and Girl",
          "Brother and Sister",
          "Nephew and Niece"
        ],
        "correctAnswer": "Son and Daughter",
        "explanation": "Son = filho; Daughter = filha.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p16",
    "worldId": 1,
    "phaseNumber": 16,
    "title": "Países & Nacionalidades",
    "subtitle": "Where are you from? I am from Brazil",
    "pedagogicalObjective": "Perguntar e responder sobre nacionalidade e país de origem.",
    "type": "lesson",
    "icon": "globe",
    "cefrLevel": "A1",
    "theorySummary": [
      "Pergunta de origem: \"Where are you from?\" (De onde você é?).",
      "Resposta com país: \"I am from Brazil / I am from the USA / from Japan.\"",
      "Resposta com nacionalidade: \"I am Brazilian / I am American / I am Japanese.\"",
      "Em inglês, nacionalidades SEMPRE começam com letra maiúscula: Brazilian, English, French."
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p16-e1",
        "type": "multiple-choice",
        "visualEmoji": "🌎",
        "prompt": "Como responder à pergunta \"Where are you from?\"?",
        "options": [
          "I am from Brazil.",
          "I have from Brazil.",
          "I live in nationality.",
          "My from is Brazil."
        ],
        "correctAnswer": "I am from Brazil.",
        "explanation": "Usamos a preposição \"from\" (de/origem) com o verbo To Be: \"I am from Brazil\".",
        "skillCategory": "speaking"
      },
      {
        "id": "w1-p16-e2",
        "type": "word-order",
        "prompt": "Monte a pergunta de origem:",
        "options": [
          "are",
          "Where",
          "from?",
          "you"
        ],
        "correctAnswer": "Where are you from?",
        "explanation": "\"Where are you from?\" é a expressão padrão para saber de onde alguém é.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p16-e3",
        "type": "fill-blank",
        "prompt": "Complete com a nacionalidade correta:",
        "contextSentence": "She was born in Japan. She is ____.",
        "options": [
          "Japanese",
          "Japan",
          "Japonese",
          "Japans"
        ],
        "correctAnswer": "Japanese",
        "explanation": "A nacionalidade de quem nasce no Japão é \"Japanese\".",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p16-e4",
        "type": "translate",
        "prompt": "Traduza: \"Nós somos brasileiros e falamos português.\"",
        "options": [
          "We are Brazilian and we speak Portuguese.",
          "We have Brazilian and speak Portugal.",
          "They are Brazilian and speak English.",
          "We are of Brazil and speak language."
        ],
        "correctAnswer": "We are Brazilian and we speak Portuguese.",
        "explanation": "\"We are Brazilian and we speak Portuguese\" expressa nacionalidade e idioma.",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p16-e5",
        "type": "multiple-choice",
        "visualEmoji": "🇧🇷",
        "prompt": "Como se diz \"Eu sou brasileiro\" em inglês?",
        "options": [
          "I am Brazilian.",
          "I am Brazil.",
          "I have Brazilian.",
          "I live Brazil."
        ],
        "correctAnswer": "I am Brazilian.",
        "explanation": "\"Brazil\" é o país; \"Brazilian\" é a nacionalidade.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p16-e6",
        "type": "fill-blank",
        "prompt": "Complete a pergunta de origem: \"Where are you _____?\"",
        "options": [
          "from",
          "of",
          "in",
          "at"
        ],
        "correctAnswer": "from",
        "explanation": "\"Where are you from?\" é a expressão padrão para \"De onde você é?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p16-e7",
        "type": "word-order",
        "prompt": "Ordene a resposta sobre nacionalidade:",
        "options": [
          "is",
          "Canada.",
          "from",
          "He"
        ],
        "correctAnswer": "He is from Canada.",
        "explanation": "\"He is from Canada.\" significa \"Ele é do Canadá.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p16-e8",
        "type": "listening",
        "prompt": "Ouça o áudio da origem de John:",
        "audioPhrase": "John is from the United States, he is American.",
        "options": [
          "John is from the United States, he is American.",
          "John is from the United Kingdom, he is British.",
          "John is from Australia, he is Australian.",
          "John is from Canada, he is Canadian."
        ],
        "correctAnswer": "John is from the United States, he is American.",
        "explanation": "\"United States\" = Estados Unidos; \"American\" = americano.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p16-e9",
        "type": "speaking-repeat",
        "prompt": "Fale sua nacionalidade: \"I am from Brazil\"",
        "audioPhrase": "I am from Brazil",
        "correctAnswer": "I am from Brazil",
        "phoneticHint": "/aɪ æm frəm brəˈzɪl/",
        "explanation": "Muito bem! Pronúncia natural e clara.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p16-e10",
        "type": "multiple-choice",
        "visualEmoji": "🇯🇵",
        "prompt": "Quem nasce no Japão (Japan) é:",
        "options": [
          "Japanese",
          "Japaner",
          "Japanish",
          "Japonese"
        ],
        "correctAnswer": "Japanese",
        "explanation": "A nacionalidade de Japan é Japanese (/ˌdʒæp.ənˈiːz/).",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p17",
    "worldId": 1,
    "phaseNumber": 17,
    "title": "Animais de Estimação & Natureza",
    "subtitle": "Dog, Cat, Bird & Pets",
    "pedagogicalObjective": "Identificar animais cotidianos e usar o verbo \"have\" com animais.",
    "type": "lesson",
    "icon": "feather",
    "cefrLevel": "A1",
    "theorySummary": [
      "Pets (animais de estimação): Dog (cachorro), Cat (gato), Bird (pássaro), Fish (peixe), Rabbit (coelho).",
      "Animais maiores: Horse (cavalo), Cow (vaca), Lion (leão).",
      "Para dizer que tem um animal de estimação: \"I have a pet dog.\""
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p17-e1",
        "type": "multiple-choice",
        "visualEmoji": "🐦",
        "prompt": "Qual destes animais tem penas e asas?",
        "options": [
          "Bird",
          "Dog",
          "Cat",
          "Fish"
        ],
        "correctAnswer": "Bird",
        "explanation": "\"Bird\" significa pássaro.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p17-e2",
        "type": "word-order",
        "visualEmoji": "🐕",
        "prompt": "Ordene a frase descritiva do animal de estimação:",
        "options": [
          "brown",
          "I",
          "dog.",
          "have",
          "a"
        ],
        "correctAnswer": "I have a brown dog.",
        "explanation": "\"I have a brown dog.\" significa \"Eu tenho um cachorro marrom.\".",
        "skillCategory": "writing"
      },
      {
        "id": "w1-p17-e3",
        "type": "fill-blank",
        "prompt": "Complete: \"The ____ swims in the aquarium.\"",
        "options": [
          "fish",
          "horse",
          "rabbit",
          "dog"
        ],
        "correctAnswer": "fish",
        "explanation": "\"Fish\" (peixe) nada (swims) no aquário.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p17-e4",
        "type": "listening",
        "prompt": "Ouça o áudio e selecione a frase ouvida:",
        "audioPhrase": "My cat is very quiet and friendly.",
        "options": [
          "My cat is very quiet and friendly.",
          "My dog is very noisy and happy.",
          "The bird is quiet in the morning.",
          "My cat is sleeping right now."
        ],
        "correctAnswer": "My cat is very quiet and friendly.",
        "explanation": "\"My cat is very quiet and friendly.\" significa \"Meu gato é muito tranquilo e amigável.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p17-e5",
        "type": "multiple-choice",
        "visualEmoji": "🐕",
        "prompt": "Como se diz \"Cachorro\" e \"Gato\" em inglês?",
        "options": [
          "Dog and Cat",
          "Bird and Fish",
          "Horse and Cow",
          "Lion and Tiger"
        ],
        "correctAnswer": "Dog and Cat",
        "explanation": "Dog = cachorro; Cat = gato.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p17-e6",
        "type": "fill-blank",
        "visualEmoji": "🦜",
        "prompt": "Complete com o animal: \"The colorful _____ is singing in the tree.\"",
        "options": [
          "bird",
          "fish",
          "dog",
          "rabbit"
        ],
        "correctAnswer": "bird",
        "explanation": "Bird (/bɜːrd/) significa pássaro/ave.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p17-e7",
        "type": "word-order",
        "prompt": "Monte a frase com o animal de estimação:",
        "options": [
          "pet",
          "dog.",
          "My",
          "is",
          "a"
        ],
        "correctAnswer": "My pet is a dog.",
        "explanation": "\"My pet is a dog.\" significa \"Meu bichinho de estimação é um cachorro.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p17-e8",
        "type": "listening",
        "prompt": "Ouça e selecione o animal mencionado:",
        "audioPhrase": "I have three gold fish in my aquarium.",
        "options": [
          "I have three gold fish in my aquarium.",
          "I have three cats in my house.",
          "I have two birds in my garden.",
          "I have four dogs in my yard."
        ],
        "correctAnswer": "I have three gold fish in my aquarium.",
        "explanation": "\"Fish\" é peixe (e o plural de fish também é fish!).",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p17-e9",
        "type": "speaking-repeat",
        "prompt": "Pronuncie no microfone: \"I have a cute cat\"",
        "audioPhrase": "I have a cute cat",
        "correctAnswer": "I have a cute cat",
        "phoneticHint": "/aɪ hæv ə kjuːt kæt/",
        "explanation": "Perfeito! \"Cute\" significa fofo/bonitinho.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p17-e10",
        "type": "multiple-choice",
        "visualEmoji": "🐎",
        "prompt": "Como se diz \"Cavalo\" em inglês?",
        "options": [
          "Horse",
          "Cow",
          "Sheep",
          "Pig"
        ],
        "correctAnswer": "Horse",
        "explanation": "Horse (/hɔːrs/) significa cavalo.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p18",
    "worldId": 1,
    "phaseNumber": 18,
    "title": "Adjetivos Básicos & Pares Opostos",
    "subtitle": "Big vs Small, Hot vs Cold",
    "pedagogicalObjective": "Descrever qualidades e estados contrastantes em inglês.",
    "type": "lesson",
    "icon": "sliders",
    "cefrLevel": "A1",
    "theorySummary": [
      "Pares opostos fundamentais: Big (grande) / Small (pequeno)",
      "Hot (quente) / Cold (frio)",
      "Happy (feliz) / Sad (triste)",
      "Fast (rápido) / Slow (lento)",
      "Good (bom) / Bad (ruim)",
      "Old (velho) / New (novo ou jovem)"
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p18-e1",
        "type": "multiple-choice",
        "prompt": "Qual é o oposto exato da palavra \"Hot\"?",
        "options": [
          "Cold",
          "Big",
          "Fast",
          "Sad"
        ],
        "correctAnswer": "Cold",
        "explanation": "Hot (quente) tem como oposto Cold (frio).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p18-e2",
        "type": "word-order",
        "prompt": "Monte a frase com o adjetivo antes do substantivo:",
        "options": [
          "is",
          "house.",
          "a",
          "This",
          "big"
        ],
        "correctAnswer": "This is a big house.",
        "explanation": "\"This is a big house.\" significa \"Esta é uma casa grande.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p18-e3",
        "type": "fill-blank",
        "prompt": "Complete com o oposto de \"happy\": \"He is crying because he is ____.\"",
        "options": [
          "sad",
          "fast",
          "hot",
          "new"
        ],
        "correctAnswer": "sad",
        "explanation": "Se ele está chorando, ele está triste (sad).",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p18-e4",
        "type": "translate",
        "prompt": "Traduza: \"O carro é muito rápido.\"",
        "options": [
          "The car is very fast.",
          "The car is very slow.",
          "The car has fast.",
          "The car is very big."
        ],
        "correctAnswer": "The car is very fast.",
        "explanation": "\"Fast\" significa rápido.",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p18-e5",
        "type": "multiple-choice",
        "prompt": "Qual é o oposto do adjetivo \"BIG\" (grande)?",
        "options": [
          "Small",
          "Tall",
          "Hot",
          "Fast"
        ],
        "correctAnswer": "Small",
        "explanation": "Big = grande; Small = pequeno.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p18-e6",
        "type": "fill-blank",
        "visualEmoji": "☕",
        "prompt": "O café está muito quente! \"The coffee is very _____.\"",
        "options": [
          "hot",
          "cold",
          "slow",
          "dark"
        ],
        "correctAnswer": "hot",
        "explanation": "Hot = quente; Cold = frio.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p18-e7",
        "type": "word-order",
        "prompt": "Organize a frase descritiva (lembre-se: adjetivo antes do substantivo!):",
        "options": [
          "is",
          "fast",
          "This",
          "car.",
          "a"
        ],
        "correctAnswer": "This is a fast car.",
        "explanation": "Em inglês, o adjetivo SEMPRE vem antes do substantivo: \"a fast car\" (um carro rápido).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p18-e8",
        "type": "listening",
        "prompt": "Ouça e selecione a frase ouvida:",
        "audioPhrase": "It is a cold and rainy day.",
        "options": [
          "It is a cold and rainy day.",
          "It is a hot and sunny day.",
          "It is a warm and windy day.",
          "It is a cold and snowy night."
        ],
        "correctAnswer": "It is a cold and rainy day.",
        "explanation": "\"Cold\" = frio; \"rainy\" = chuvoso.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p18-e9",
        "type": "speaking-repeat",
        "prompt": "Diga em voz alta: \"A big house and a small car\"",
        "audioPhrase": "A big house and a small car",
        "correctAnswer": "A big house and a small car",
        "phoneticHint": "/ə bɪɡ haʊs ənd ə smɔːl kɑːr/",
        "explanation": "Excelente contraste entre \"big\" e \"small\"!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p18-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o oposto de \"HAPPY\" (feliz)?",
        "options": [
          "Sad",
          "Angry",
          "Tired",
          "Excited"
        ],
        "correctAnswer": "Sad",
        "explanation": "Happy = feliz; Sad = triste.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p19",
    "worldId": 1,
    "phaseNumber": 19,
    "title": "Plurais: Regulares & Irregulares",
    "subtitle": "Cats, Books, Children & People",
    "pedagogicalObjective": "Formar plurais regulares com -s e reconhecer os plurais irregulares essenciais.",
    "type": "lesson",
    "icon": "copy",
    "cefrLevel": "A1",
    "theorySummary": [
      "REGRA GERAL: Adiciona-se -s: one book -> two books, one dog -> two dogs.",
      "PLURAIS IRREGULARES CRUCIAIS:",
      "One child -> Two children (crianças)",
      "One man -> Two men (homens)",
      "One woman -> Two women (mulheres - pronuncia-se \"wí-min\")",
      "One person -> Two people (pessoas)"
    ],
    "xpReward": 35,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p19-e1",
        "type": "multiple-choice",
        "prompt": "Qual é a forma plural correta de \"child\" (criança)?",
        "options": [
          "Children",
          "Childs",
          "Childrens",
          "Childes"
        ],
        "correctAnswer": "Children",
        "explanation": "O plural de \"child\" é irregular: \"children\" (sem \"s\" no final!).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p19-e2",
        "type": "word-order",
        "prompt": "Ordene a frase no plural:",
        "options": [
          "people",
          "There",
          "five",
          "are",
          "here."
        ],
        "correctAnswer": "There are five people here.",
        "explanation": "\"There are five people here.\" significa \"Há cinco pessoas aqui.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p19-e3",
        "type": "fill-blank",
        "prompt": "Complete o plural: \"One woman, three ____.\"",
        "options": [
          "women",
          "womans",
          "womens",
          "woman"
        ],
        "correctAnswer": "women",
        "explanation": "O plural de \"woman\" é \"women\" (/ˈwɪmɪn/).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p19-e4",
        "type": "listening",
        "prompt": "Ouça o áudio e identifique a frase com plural:",
        "audioPhrase": "The children are playing in the park.",
        "options": [
          "The children are playing in the park.",
          "The child is playing in the school.",
          "The people are walking in the street.",
          "Two boys are studying in the room."
        ],
        "correctAnswer": "The children are playing in the park.",
        "explanation": "\"The children are playing in the park.\" significa \"As crianças estão brincando no parque.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p19-e5",
        "type": "multiple-choice",
        "prompt": "Qual é o plural correto e irregular de \"CHILD\" (criança)?",
        "options": [
          "Children",
          "Childs",
          "Childrens",
          "Childes"
        ],
        "correctAnswer": "Children",
        "explanation": "O plural de \"child\" é irregular: \"children\" (nunca \"childs\").",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p19-e6",
        "type": "fill-blank",
        "prompt": "Complete o plural de homem (man): \"There are three _____ waiting outside.\"",
        "options": [
          "men",
          "mans",
          "mens",
          "manes"
        ],
        "correctAnswer": "men",
        "explanation": "Man (singular) vira Men (plural: /men/).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p19-e7",
        "type": "word-order",
        "prompt": "Monte a frase com plural regular:",
        "options": [
          "on",
          "table.",
          "books",
          "The",
          "are",
          "the"
        ],
        "correctAnswer": "The books are on the table.",
        "explanation": "\"The books are on the table.\" significa \"Os livros estão sobre a mesa.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p19-e8",
        "type": "listening",
        "prompt": "Ouça o substantivo irregular:",
        "audioPhrase": "Two women are talking in the office.",
        "options": [
          "Two women are talking in the office.",
          "Two woman are talking in the office.",
          "Two men are working in the office.",
          "Two children are playing outside."
        ],
        "correctAnswer": "Two women are talking in the office.",
        "explanation": "Women (/ˈwɪm.ɪn/) é o plural irregular de woman (/ˈwʊm.ən/).",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p19-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone os plurais irregulares: \"Men, women and children\"",
        "audioPhrase": "Men women and children",
        "correctAnswer": "Men women and children",
        "phoneticHint": "/men ˈwɪm.ɪn ənd ˈtʃɪl.drən/",
        "explanation": "Excelente! A pronúncia de \"women\" (/ˈwɪm.ɪn/) é um dos maiores desafios para brasileiros.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p19-e10",
        "type": "multiple-choice",
        "prompt": "Qual é o plural de \"FOOT\" (pé)?",
        "options": [
          "Feet",
          "Foots",
          "Feets",
          "Footes"
        ],
        "correctAnswer": "Feet",
        "explanation": "One foot, two feet.",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p20",
    "worldId": 1,
    "phaseNumber": 20,
    "title": "Baú da Sabedoria II: Conquistador",
    "subtitle": "Revisão das lições 11 a 19 e bônus especial!",
    "pedagogicalObjective": "Consolidar números até 30, negações, perguntas, família, países e plurais com baú de gemas.",
    "type": "chest",
    "icon": "gift",
    "cefrLevel": "A1",
    "theorySummary": [
      "Incrível! Você alcançou 20 lições completadas no Mundo 1!",
      "Você já domina números de 1 a 30, como negar e perguntar com To Be, regras de A/AN, vocabulário de família, nacionalidades, animais, adjetivos opostos e plurais irregulares.",
      "Abra o segundo baú para colher suas recompensas!"
    ],
    "xpReward": 70,
    "gemsReward": 35,
    "exercises": [
      {
        "id": "w1-p20-e1",
        "type": "multiple-choice",
        "prompt": "Qual frase contém o plural irregular e a nacionalidade corretos?",
        "options": [
          "The two women are Brazilian and have three children.",
          "The two womans are Brazilian and have three childs.",
          "The two women is brazilian and has three childrens.",
          "The two people are of Brazil with child."
        ],
        "correctAnswer": "The two women are Brazilian and have three children.",
        "explanation": "Perfeito! \"women\" e \"children\" são os plurais corretos, e \"Brazilian\" com maiúscula.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p20-e2",
        "type": "word-order",
        "prompt": "Monte a frase de desafio do baú:",
        "options": [
          "My",
          "parents",
          "from",
          "Canada.",
          "are"
        ],
        "correctAnswer": "My parents are from Canada.",
        "explanation": "\"My parents are from Canada.\" significa \"Meus pais são do Canadá.\".",
        "skillCategory": "writing"
      },
      {
        "id": "w1-p20-e3",
        "type": "listening",
        "prompt": "Ouça e desbloqueie o segundo baú:",
        "audioPhrase": "You are doing an amazing job learning English!",
        "options": [
          "You are doing an amazing job learning English!",
          "You are completing the second level today!",
          "Good afternoon, you are my best friend!",
          "We are studying English every afternoon!"
        ],
        "correctAnswer": "You are doing an amazing job learning English!",
        "explanation": "Sensacional! O segundo baú foi liberado com sucesso.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p20-e4",
        "type": "multiple-choice",
        "prompt": "[Revisão] \"Where _____ you from?\"",
        "options": [
          "are",
          "is",
          "am",
          "be"
        ],
        "correctAnswer": "are",
        "explanation": "Com \"you\", usamos sempre \"are\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p20-e5",
        "type": "fill-blank",
        "visualEmoji": "🐱",
        "prompt": "[Revisão] \"I have two _____ and one dog.\"",
        "options": [
          "cats",
          "cat",
          "cates",
          "caties"
        ],
        "correctAnswer": "cats",
        "explanation": "Plural regular: cat -> cats.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p20-e6",
        "type": "word-order",
        "prompt": "[Revisão] Ordene a frase interrogativa:",
        "options": [
          "teacher",
          "Is",
          "American?",
          "your"
        ],
        "correctAnswer": "Is your teacher American?",
        "explanation": "\"Is your teacher American?\" = \"Seu professor é americano?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p20-e7",
        "type": "listening",
        "prompt": "[Revisão] Ouça e marque a opção:",
        "audioPhrase": "My sister is fourteen years old.",
        "options": [
          "My sister is fourteen years old.",
          "My sister is forty years old.",
          "My brother is fourteen years old.",
          "My daughter is four years old."
        ],
        "correctAnswer": "My sister is fourteen years old.",
        "explanation": "Fourteen = 14.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p20-e8",
        "type": "multiple-choice",
        "prompt": "[Revisão] Qual frase está correta?",
        "options": [
          "An hour",
          "A hour",
          "A umbrella",
          "An book"
        ],
        "correctAnswer": "An hour",
        "explanation": "\"Hour\" tem o \"H\" mudo, soando como vogal (/aʊ.ər/), logo exige \"An\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p20-e9",
        "type": "speaking-repeat",
        "prompt": "[Revisão] Fale: \"Where are you from?\"",
        "audioPhrase": "Where are you from",
        "correctAnswer": "Where are you from",
        "phoneticHint": "/wer ɑːr juː frəm/",
        "explanation": "Excelente entonação e pronúncia!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p20-e10",
        "type": "translate",
        "prompt": "[Revisão] Como se diz \"Eles não são médicos\"?",
        "options": [
          "They are not doctors.",
          "They not are doctors.",
          "They no are doctors.",
          "They isn't doctors."
        ],
        "correctAnswer": "They are not doctors.",
        "explanation": "They are not doctors.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p20-e11",
        "type": "fill-blank",
        "visualEmoji": "🦷",
        "prompt": "[Revisão] Complete o plural de tooth (dente): \"Brush your _____.\"",
        "options": [
          "teeth",
          "tooths",
          "teethes",
          "toothes"
        ],
        "correctAnswer": "teeth",
        "explanation": "One tooth, many teeth.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p21",
    "worldId": 1,
    "phaseNumber": 21,
    "title": "Alimentos & Bebidas do Dia a Dia",
    "subtitle": "Water, Bread, Coffee & I like...",
    "pedagogicalObjective": "Pedir e falar sobre refeições básicas usando os verbos \"eat\" e \"drink\".",
    "type": "lesson",
    "icon": "coffee",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bebidas: Water (água), Coffee (café), Tea (chá), Milk (leite), Juice (suco).",
      "Comidas: Bread (pão), Cheese (queijo), Apple (maçã), Rice (arroz), Chicken (frango), Egg (ovo).",
      "Verbos de consumo: EAT (comer) e DRINK (beber).",
      "Expressando preferência: \"I like coffee\" (Eu gosto de café)."
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p21-e1",
        "type": "multiple-choice",
        "visualEmoji": "☕",
        "prompt": "Qual verbo completa a frase: \"I ____ coffee with milk in the morning\"?",
        "options": [
          "drink",
          "eat",
          "sleep",
          "read"
        ],
        "correctAnswer": "drink",
        "explanation": "Para líquidos usamos o verbo \"drink\" (beber).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p21-e2",
        "type": "word-order",
        "visualEmoji": "🍞",
        "prompt": "Monte a frase sobre o café da manhã:",
        "options": [
          "eat",
          "and",
          "bread",
          "cheese.",
          "I"
        ],
        "correctAnswer": "I eat bread and cheese.",
        "explanation": "\"I eat bread and cheese.\" significa \"Eu como pão e queijo.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p21-e3",
        "type": "fill-blank",
        "prompt": "Complete o pedido no restaurante:",
        "contextSentence": "A glass of ____, please.",
        "options": [
          "water",
          "bread",
          "rice",
          "chicken"
        ],
        "correctAnswer": "water",
        "explanation": "\"A glass of water, please\" significa \"Um copo de água, por favor\".",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p21-e4",
        "type": "translate",
        "prompt": "Traduza: \"Eu gosto de maçãs vermelhas.\"",
        "options": [
          "I like red apples.",
          "I eat apples red.",
          "I drink red apples.",
          "I have like apples red."
        ],
        "correctAnswer": "I like red apples.",
        "explanation": "\"I like red apples\" usa a ordem correta \"red apples\".",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p21-e5",
        "type": "multiple-choice",
        "visualEmoji": "☕",
        "prompt": "Como se diz \"Café com leite\" em inglês?",
        "options": [
          "Coffee with milk",
          "Coffee and water",
          "Tea with sugar",
          "Juice with milk"
        ],
        "correctAnswer": "Coffee with milk",
        "explanation": "Coffee with milk = café com leite.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p21-e6",
        "type": "fill-blank",
        "visualEmoji": "🍞",
        "prompt": "Complete o café da manhã: \"I eat _____ and butter every morning.\"",
        "options": [
          "bread",
          "water",
          "rice",
          "chicken"
        ],
        "correctAnswer": "bread",
        "explanation": "Bread (/bred/) significa pão.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p21-e7",
        "type": "word-order",
        "prompt": "Organize a frase sobre preferência alimentar:",
        "options": [
          "like",
          "chicken",
          "salad.",
          "I",
          "and"
        ],
        "correctAnswer": "I like chicken and salad.",
        "explanation": "\"I like chicken and salad.\" significa \"Eu gosto de frango e salada.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p21-e8",
        "type": "listening",
        "prompt": "Ouça o pedido da refeição:",
        "audioPhrase": "Can I have a glass of water, please?",
        "options": [
          "Can I have a glass of water, please?",
          "Can I have a cup of coffee, please?",
          "Can I have a bottle of juice, please?",
          "Can I have a plate of rice, please?"
        ],
        "correctAnswer": "Can I have a glass of water, please?",
        "explanation": "\"A glass of water\" = um copo de água.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p21-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone seu pedido: \"I would like a coffee, please\"",
        "audioPhrase": "I would like a coffee please",
        "correctAnswer": "I would like a coffee please",
        "phoneticHint": "/aɪ wʊd laɪk ə ˈkɔː.fi pliːz/",
        "explanation": "Forma educadíssima de fazer um pedido em inglês!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p21-e10",
        "type": "multiple-choice",
        "visualEmoji": "🍎",
        "prompt": "Qual item é uma fruta?",
        "options": [
          "Apple",
          "Cheese",
          "Rice",
          "Meat"
        ],
        "correctAnswer": "Apple",
        "explanation": "Apple = maçã.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p22",
    "worldId": 1,
    "phaseNumber": 22,
    "title": "Dias da Semana & Meses",
    "subtitle": "Monday to Sunday, ON vs IN",
    "pedagogicalObjective": "Falar sobre os dias da semana, meses e usar as preposições temporais ON e IN.",
    "type": "lesson",
    "icon": "calendar",
    "cefrLevel": "A1",
    "theorySummary": [
      "Dias da semana: Monday (segunda), Tuesday (terça), Wednesday (quarta), Thursday (quinta), Friday (sexta), Saturday (sábado), Sunday (domingo).",
      "REGRA DE PREPOSIÇÃO: Use sempre \"ON\" para dias da semana: \"on Monday\", \"on Friday\".",
      "Use sempre \"IN\" para meses: \"in January\", \"in December\".",
      "Todos os dias da semana e meses começam com LETRA MAIÚSCULA em inglês!"
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p22-e1",
        "type": "multiple-choice",
        "prompt": "Qual preposição usamos antes dos dias da semana em inglês?",
        "options": [
          "ON (ex: on Friday)",
          "IN (ex: in Friday)",
          "AT (ex: at Friday)",
          "TO (ex: to Friday)"
        ],
        "correctAnswer": "ON (ex: on Friday)",
        "explanation": "Para dias da semana a regra fixa é a preposição \"ON\" (on Monday, on Friday).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p22-e2",
        "type": "word-order",
        "prompt": "Ordene a frase de rotina semanal:",
        "options": [
          "English",
          "study",
          "I",
          "Saturdays.",
          "on"
        ],
        "correctAnswer": "I study English on Saturdays.",
        "explanation": "\"I study English on Saturdays.\" significa \"Eu estudo inglês aos sábados.\".",
        "skillCategory": "writing"
      },
      {
        "id": "w1-p22-e3",
        "type": "fill-blank",
        "visualEmoji": "📅",
        "prompt": "Qual é o primeiro dia do fim de semana?",
        "contextSentence": "The weekend begins on ____.",
        "options": [
          "Saturday",
          "Monday",
          "Thursday",
          "Tuesday"
        ],
        "correctAnswer": "Saturday",
        "explanation": "O fim de semana (weekend) começa no sábado (Saturday).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p22-e4",
        "type": "listening",
        "prompt": "Ouça o áudio e identifique a frase dita:",
        "audioPhrase": "My birthday is in September.",
        "options": [
          "My birthday is in September.",
          "My birthday is on Sunday.",
          "My class is in December.",
          "My vacation is on Monday."
        ],
        "correctAnswer": "My birthday is in September.",
        "explanation": "\"My birthday is in September.\" significa \"Meu aniversário é em setembro.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p22-e5",
        "type": "multiple-choice",
        "visualEmoji": "📅",
        "prompt": "Qual dia da semana vem logo após domingo (Sunday)?",
        "options": [
          "Monday",
          "Tuesday",
          "Friday",
          "Saturday"
        ],
        "correctAnswer": "Monday",
        "explanation": "Monday (/ˈmʌn.deɪ/) é segunda-feira.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p22-e6",
        "type": "fill-blank",
        "prompt": "Com dias da semana, qual preposição usamos? \"I play soccer _____ Saturday.\"",
        "options": [
          "on",
          "in",
          "at",
          "by"
        ],
        "correctAnswer": "on",
        "explanation": "Para dias da semana SEMPRE usamos a preposição \"ON\" (\"on Monday\", \"on Saturday\").",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p22-e7",
        "type": "word-order",
        "prompt": "Monte a frase com o mês do ano:",
        "options": [
          "is",
          "birthday",
          "in",
          "My",
          "July."
        ],
        "correctAnswer": "My birthday is in July.",
        "explanation": "Com meses do ano usamos a preposição \"IN\": \"in July\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p22-e8",
        "type": "listening",
        "prompt": "Ouça o dia da semana mencionado:",
        "audioPhrase": "See you on Wednesday afternoon!",
        "options": [
          "See you on Wednesday afternoon!",
          "See you on Tuesday afternoon!",
          "See you on Thursday afternoon!",
          "See you on Friday afternoon!"
        ],
        "correctAnswer": "See you on Wednesday afternoon!",
        "explanation": "Wednesday (/ˈwenz.deɪ/) é quarta-feira (o \"d\" é silencioso!).",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p22-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"Monday, Tuesday, Wednesday, Thursday, Friday\"",
        "audioPhrase": "Monday Tuesday Wednesday Thursday Friday",
        "correctAnswer": "Monday Tuesday Wednesday Thursday Friday",
        "phoneticHint": "/ˈmʌn.deɪ ˈtuːz.deɪ ˈwenz.deɪ ˈθɜːrz.deɪ ˈfraɪ.deɪ/",
        "explanation": "Excelente pronúncia dos 5 dias úteis!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p22-e10",
        "type": "multiple-choice",
        "prompt": "Qual é a preposição correta para meses e anos?",
        "options": [
          "IN (in January, in 2026)",
          "ON (on January, on 2026)",
          "AT (at January, at 2026)",
          "TO (to January, to 2026)"
        ],
        "correctAnswer": "IN (in January, in 2026)",
        "explanation": "Para períodos maiores como meses, estações e anos usamos IN.",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p23",
    "worldId": 1,
    "phaseNumber": 23,
    "title": "As Horas & Momentos do Dia",
    "subtitle": "What time is it? It is 8 o'clock",
    "pedagogicalObjective": "Perguntar e dizer as horas e os períodos do dia em inglês.",
    "type": "lesson",
    "icon": "clock",
    "cefrLevel": "A1",
    "theorySummary": [
      "Para perguntar a hora: \"What time is it?\" (Que horas são?).",
      "Para horas exatas usamos \"o'clock\": \"It is 8 o'clock\" (São 8 horas em ponto).",
      "Para horas compostas lemos os números diretamente: \"It is 2:30\" (two-thirty) ou \"It is 5:15\" (five-fifteen).",
      "Períodos: In the morning (de manhã), in the afternoon (à tarde), at night (à noite)."
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p23-e1",
        "type": "multiple-choice",
        "visualEmoji": "⏰",
        "prompt": "Como se pergunta \"Que horas são?\" em inglês?",
        "options": [
          "What time is it?",
          "Which hour is it?",
          "How many hours?",
          "What clock is now?"
        ],
        "correctAnswer": "What time is it?",
        "explanation": "\"What time is it?\" é a pergunta padrão em todo o mundo de língua inglesa.",
        "skillCategory": "speaking"
      },
      {
        "id": "w1-p23-e2",
        "type": "word-order",
        "prompt": "Ordene a indicação das horas:",
        "options": [
          "o'clock.",
          "is",
          "three",
          "It"
        ],
        "correctAnswer": "It is three o'clock.",
        "explanation": "\"It is three o'clock.\" significa \"São três horas em ponto.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p23-e3",
        "type": "fill-blank",
        "prompt": "Complete com a preposição correta de período:",
        "contextSentence": "I sleep ____ night.",
        "options": [
          "at",
          "in",
          "on",
          "to"
        ],
        "correctAnswer": "at",
        "explanation": "Dizemos \"in the morning\", \"in the afternoon\", mas \"AT night\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p23-e4",
        "type": "translate",
        "prompt": "Traduza: \"Minha aula é às nove horas da manhã.\"",
        "options": [
          "My class is at nine in the morning.",
          "My class is on nine at morning.",
          "My class has nine hours morning.",
          "My lesson is to nine afternoon."
        ],
        "correctAnswer": "My class is at nine in the morning.",
        "explanation": "Usamos \"at\" para horários pontuais e \"in the morning\" para o período da manhã.",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p23-e5",
        "type": "multiple-choice",
        "visualEmoji": "🕒",
        "prompt": "Como se pergunta \"Que horas são?\" em inglês?",
        "options": [
          "What time is it?",
          "How hours is it?",
          "What clock is it?",
          "When time is it?"
        ],
        "correctAnswer": "What time is it?",
        "explanation": "\"What time is it?\" é a pergunta padrão para as horas.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p23-e6",
        "type": "fill-blank",
        "prompt": "Para horas exatas usamos \"o'clock\". Complete: \"It is three _____.\"",
        "options": [
          "o'clock",
          "hours",
          "clocks",
          "times"
        ],
        "correctAnswer": "o'clock",
        "explanation": "\"Three o'clock\" = três horas em ponto.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p23-e7",
        "type": "word-order",
        "prompt": "Organize a resposta da hora:",
        "options": [
          "It",
          "is",
          "seven",
          "morning.",
          "in",
          "the"
        ],
        "correctAnswer": "It is seven in the morning.",
        "explanation": "\"It is seven in the morning.\" = \"São sete da manhã.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p23-e8",
        "type": "listening",
        "prompt": "Ouça a hora e marque a opção certa:",
        "audioPhrase": "The meeting starts at eight thirty.",
        "options": [
          "The meeting starts at eight thirty.",
          "The meeting starts at eight o'clock.",
          "The meeting starts at seven thirty.",
          "The meeting starts at nine thirty."
        ],
        "correctAnswer": "The meeting starts at eight thirty.",
        "explanation": "Eight thirty = 8:30.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p23-e9",
        "type": "speaking-repeat",
        "prompt": "Diga as horas: \"It is ten o'clock\"",
        "audioPhrase": "It is ten o'clock",
        "correctAnswer": "It is ten o'clock",
        "phoneticHint": "/ɪt ɪz ten əˈklɑːk/",
        "explanation": "Muito bem! \"It is ten o'clock\" = \"São 10 horas em ponto\".",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p23-e10",
        "type": "multiple-choice",
        "prompt": "Qual preposição usamos antes de horários específicos?",
        "options": [
          "AT (at 7 o'clock)",
          "IN (in 7 o'clock)",
          "ON (on 7 o'clock)",
          "FOR (for 7 o'clock)"
        ],
        "correctAnswer": "AT (at 7 o'clock)",
        "explanation": "Para horários exatos sempre usamos a preposição \"AT\".",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p24",
    "worldId": 1,
    "phaseNumber": 24,
    "title": "Verbos Fundamentais da Rotina",
    "subtitle": "Wake up, Work, Study, Live & Speak",
    "pedagogicalObjective": "Expressar ações da rotina diária em primeira pessoa.",
    "type": "lesson",
    "icon": "activity",
    "cefrLevel": "A1",
    "theorySummary": [
      "Verbos essenciais da rotina: Wake up (acordar), Sleep (dormir), Study (estudar), Work (trabalhar), Live (morar/viver), Speak (falar).",
      "No presente com I/You/We/They usamos o verbo na sua forma base: \"I study English\", \"I live in Brazil\", \"I speak two languages\".",
      "\"Every day\" significa \"todos os dias\"."
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p24-e1",
        "type": "multiple-choice",
        "prompt": "Complete: \"I ____ two languages: Portuguese and English.\"",
        "options": [
          "speak",
          "live",
          "sleep",
          "eat"
        ],
        "correctAnswer": "speak",
        "explanation": "Para idiomas usamos o verbo \"speak\" (falar).",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p24-e2",
        "type": "word-order",
        "prompt": "Monte a frase de rotina diária:",
        "options": [
          "day.",
          "wake",
          "early",
          "every",
          "I",
          "up"
        ],
        "correctAnswer": "I wake up early every day.",
        "explanation": "\"I wake up early every day.\" significa \"Eu acordo cedo todos os dias.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p24-e3",
        "type": "fill-blank",
        "prompt": "Complete com onde você reside:",
        "contextSentence": "I ____ in a big city.",
        "options": [
          "live",
          "speak",
          "eat",
          "drink"
        ],
        "correctAnswer": "live",
        "explanation": "\"Live in\" significa viver ou morar em algum lugar.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p24-e4",
        "type": "speaking-repeat",
        "prompt": "Fale sua rotina em voz alta:",
        "contextSentence": "I study English every day because I want to be fluent.",
        "audioPhrase": "I study English every day because I want to be fluent.",
        "correctAnswer": "I study English every day because I want to be fluent.",
        "explanation": "Excelente! Frase completa e motivadora pronunciada com sucesso.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p24-e5",
        "type": "multiple-choice",
        "visualEmoji": "⏰",
        "prompt": "Como se diz \"Acordar\" em inglês?",
        "options": [
          "Wake up",
          "Go to sleep",
          "Have lunch",
          "Take a bus"
        ],
        "correctAnswer": "Wake up",
        "explanation": "Wake up = acordar.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p24-e6",
        "type": "fill-blank",
        "prompt": "Complete a rotina: \"I _____ English every single day.\"",
        "options": [
          "study",
          "studies",
          "studying",
          "am study"
        ],
        "correctAnswer": "study",
        "explanation": "Com \"I\", o verbo fica na forma básica: \"I study\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p24-e7",
        "type": "word-order",
        "prompt": "Ordene a rotina matinal:",
        "options": [
          "up",
          "at",
          "wake",
          "six.",
          "I"
        ],
        "correctAnswer": "I wake up at six.",
        "explanation": "\"I wake up at six.\" significa \"Eu acordo às seis.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p24-e8",
        "type": "listening",
        "prompt": "Ouça a rotina diária:",
        "audioPhrase": "I work from nine to five.",
        "options": [
          "I work from nine to five.",
          "I study from nine to five.",
          "I sleep from nine to five.",
          "I drive from nine to five."
        ],
        "correctAnswer": "I work from nine to five.",
        "explanation": "\"I work from nine to five.\" = \"Eu trabalho das 9 às 17h.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p24-e9",
        "type": "speaking-repeat",
        "prompt": "Fale sua rotina: \"I work and I study\"",
        "audioPhrase": "I work and I study",
        "correctAnswer": "I work and I study",
        "phoneticHint": "/aɪ wɜːrk ənd aɪ ˈstʌd.i/",
        "explanation": "Excelente! Dois dos verbos mais úteis em inglês.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p24-e10",
        "type": "multiple-choice",
        "prompt": "Qual verbo significa \"Morar\" ou \"Viver\"?",
        "options": [
          "Live",
          "Leave",
          "Life",
          "Love"
        ],
        "correctAnswer": "Live",
        "explanation": "Live (/lɪv/) significa morar ou viver.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p25",
    "worldId": 1,
    "phaseNumber": 25,
    "title": "Preposições de Lugar",
    "subtitle": "IN, ON, AT, UNDER & Localização",
    "pedagogicalObjective": "Descrever onde pessoas e objetos estão localizados no espaço.",
    "type": "lesson",
    "icon": "map-pin",
    "cefrLevel": "A1",
    "theorySummary": [
      "IN: Dentro de um espaço fechado ou delimitado: \"in the box\", \"in the room\", \"in Brazil\".",
      "ON: Sobre a superfície: \"on the table\", \"on the floor\", \"on the wall\".",
      "AT: Em um ponto ou local específico de atividade: \"at home\", \"at school\", \"at work\".",
      "UNDER: Embaixo ou debaixo de algo: \"under the bed\", \"under the tree\"."
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p25-e1",
        "type": "multiple-choice",
        "prompt": "Onde está o livro quando dizemos \"The book is ON the table\"?",
        "options": [
          "Em cima da mesa (sobre a superfície)",
          "Debaixo da mesa",
          "Dentro da mesa",
          "Perto da mesa"
        ],
        "correctAnswer": "Em cima da mesa (sobre a superfície)",
        "explanation": "\"ON\" indica contato com a superfície superior.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p25-e2",
        "type": "word-order",
        "visualEmoji": "🛏️",
        "prompt": "Ordene a frase de localização:",
        "options": [
          "cat",
          "The",
          "under",
          "is",
          "the",
          "bed."
        ],
        "correctAnswer": "The cat is under the bed.",
        "explanation": "\"The cat is under the bed.\" significa \"O gato está debaixo da cama.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p25-e3",
        "type": "fill-blank",
        "prompt": "Complete com a preposição correta para \"em casa\":",
        "contextSentence": "Right now, I am ____ home.",
        "options": [
          "at",
          "in",
          "on",
          "under"
        ],
        "correctAnswer": "at",
        "explanation": "A expressão consagrada em inglês para \"em casa\" é \"at home\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p25-e4",
        "type": "listening",
        "prompt": "Ouça onde estão as chaves:",
        "audioPhrase": "My keys are in my backpack.",
        "options": [
          "My keys are in my backpack.",
          "My keys are on the desk.",
          "My books are in my backpack.",
          "My phone is under the chair."
        ],
        "correctAnswer": "My keys are in my backpack.",
        "explanation": "\"My keys are in my backpack.\" significa \"Minhas chaves estão dentro da minha mochila.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p25-e5",
        "type": "multiple-choice",
        "visualEmoji": "📦",
        "prompt": "Onde está o livro se ele está EM CIMA da mesa?",
        "options": [
          "ON the table",
          "IN the table",
          "UNDER the table",
          "BEHIND the table"
        ],
        "correctAnswer": "ON the table",
        "explanation": "\"ON\" indica contato com a superfície (em cima).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p25-e6",
        "type": "fill-blank",
        "visualEmoji": "🐱",
        "prompt": "O gato está dormindo embaixo da cama: \"The cat is _____ the bed.\"",
        "options": [
          "under",
          "in",
          "on",
          "at"
        ],
        "correctAnswer": "under",
        "explanation": "Under = embaixo de / sob.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p25-e7",
        "type": "word-order",
        "prompt": "Monte a frase com localização:",
        "options": [
          "keys",
          "are",
          "The",
          "the",
          "box.",
          "in"
        ],
        "correctAnswer": "The keys are in the box.",
        "explanation": "\"IN\" indica dentro de um espaço tridimensional.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p25-e8",
        "type": "listening",
        "prompt": "Ouça a preposição de lugar:",
        "audioPhrase": "The pharmacy is next to the bank.",
        "options": [
          "The pharmacy is next to the bank.",
          "The pharmacy is behind the bank.",
          "The pharmacy is in front of the bank.",
          "The pharmacy is inside the bank."
        ],
        "correctAnswer": "The pharmacy is next to the bank.",
        "explanation": "\"Next to\" = ao lado de.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p25-e9",
        "type": "speaking-repeat",
        "prompt": "Fale: \"The book is on the desk\"",
        "audioPhrase": "The book is on the desk",
        "correctAnswer": "The book is on the desk",
        "phoneticHint": "/ðə bʊk ɪz ɑːn ðə desk/",
        "explanation": "A clássica frase, pronunciada com perfeição!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p25-e10",
        "type": "multiple-choice",
        "prompt": "Qual preposição usamos para \"dentro da gaveta\"?",
        "options": [
          "IN the drawer",
          "ON the drawer",
          "AT the drawer",
          "OVER the drawer"
        ],
        "correctAnswer": "IN the drawer",
        "explanation": "\"IN\" é usado para dentro de recipientes ou compartimentos fechados.",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p26",
    "worldId": 1,
    "phaseNumber": 26,
    "title": "Palavras Interrogativas (WH-)",
    "subtitle": "What, Where, Who, When, Why & How",
    "pedagogicalObjective": "Perguntar sobre informações específicas usando as question words fundamentais.",
    "type": "lesson",
    "icon": "search",
    "cefrLevel": "A1",
    "theorySummary": [
      "As palavras WH abrem perguntas buscando informações específicas:",
      "WHAT: O que / Qual (\"What is your name?\")",
      "WHERE: Onde (\"Where do you live?\")",
      "WHO: Quem (\"Who is that person?\")",
      "WHEN: Quando (\"When is your class?\")",
      "WHY: Por que (\"Why are you here?\") -> Responde-se com \"Because...\"",
      "HOW: Como (\"How are you?\")"
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p26-e1",
        "type": "multiple-choice",
        "prompt": "Qual palavra interrogativa usamos para perguntar sobre lugares (\"onde\")?",
        "options": [
          "Where",
          "What",
          "Who",
          "When"
        ],
        "correctAnswer": "Where",
        "explanation": "\"Where\" significa \"onde\" ou \"aonde\".",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p26-e2",
        "type": "word-order",
        "prompt": "Monte a pergunta sobre residência:",
        "options": [
          "do",
          "Where",
          "you",
          "live?"
        ],
        "correctAnswer": "Where do you live?",
        "explanation": "\"Where do you live?\" significa \"Onde você mora?\".",
        "skillCategory": "speaking"
      },
      {
        "id": "w1-p26-e3",
        "type": "fill-blank",
        "prompt": "Complete para perguntar a identidade de alguém:",
        "contextSentence": "____ is that girl over there?",
        "options": [
          "Who",
          "What",
          "Where",
          "When"
        ],
        "correctAnswer": "Who",
        "explanation": "Para pessoas (\"quem\"), usamos \"Who\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p26-e4",
        "type": "translate",
        "prompt": "Traduza: \"Quando é a sua aula de inglês?\"",
        "options": [
          "When is your English class?",
          "Where is your English class?",
          "What time your English class?",
          "Who is your English lesson?"
        ],
        "correctAnswer": "When is your English class?",
        "explanation": "\"When\" pergunta pelo tempo/data (\"quando\").",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p26-e5",
        "type": "multiple-choice",
        "prompt": "Qual palavra interrogativa significa \"ONDE\"?",
        "options": [
          "Where",
          "What",
          "When",
          "Who"
        ],
        "correctAnswer": "Where",
        "explanation": "Where = Onde.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p26-e6",
        "type": "fill-blank",
        "prompt": "Complete para perguntar o horário: \"_____ does the movie start?\"",
        "options": [
          "When",
          "Where",
          "Who",
          "Which"
        ],
        "correctAnswer": "When",
        "explanation": "When = Quando.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p26-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta sobre motivo:",
        "options": [
          "are",
          "Why",
          "late?",
          "you"
        ],
        "correctAnswer": "Why are you late?",
        "explanation": "\"Why are you late?\" significa \"Por que você está atrasado(a)?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p26-e8",
        "type": "listening",
        "prompt": "Ouça a pergunta e identifique a palavra WH:",
        "audioPhrase": "Who is that woman over there?",
        "options": [
          "Who is that woman over there?",
          "Where is that woman over there?",
          "What is that woman over there?",
          "Why is that woman over there?"
        ],
        "correctAnswer": "Who is that woman over there?",
        "explanation": "Who (/huː/) = Quem.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p26-e9",
        "type": "speaking-repeat",
        "prompt": "Pergunte em voz alta: \"Where do you live?\"",
        "audioPhrase": "Where do you live",
        "correctAnswer": "Where do you live",
        "phoneticHint": "/wer duː juː lɪv/",
        "explanation": "Excelente! Pergunta super útil no cotidiano.",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p26-e10",
        "type": "multiple-choice",
        "prompt": "Qual é a resposta para uma pergunta que começa com \"WHY\"?",
        "options": [
          "Because...",
          "Yes, I do.",
          "At five o'clock.",
          "In Brazil."
        ],
        "correctAnswer": "Because...",
        "explanation": "Perguntas com \"Why\" (Por que?) são respondidas com \"Because...\" (Porque...).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p27",
    "worldId": 1,
    "phaseNumber": 27,
    "title": "Cômodos da Casa & Ambientes",
    "subtitle": "Kitchen, Bedroom, Living Room & Home",
    "pedagogicalObjective": "Descrever os ambientes e cômodos de uma residência.",
    "type": "lesson",
    "icon": "home",
    "cefrLevel": "A1",
    "theorySummary": [
      "Living room (sala de estar), Bedroom (quarto), Kitchen (cozinha), Bathroom (banheiro).",
      "Garden (jardim), Door (porta), Window (janela).",
      "Para dizer em qual cômodo está: \"I am in the kitchen\", \"She is in her bedroom.\""
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p27-e1",
        "type": "multiple-choice",
        "visualEmoji": "🍳",
        "prompt": "Em qual cômodo preparamos o café da manhã e guardamos a comida?",
        "options": [
          "Kitchen",
          "Bedroom",
          "Bathroom",
          "Garden"
        ],
        "correctAnswer": "Kitchen",
        "explanation": "\"Kitchen\" significa cozinha.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p27-e2",
        "type": "word-order",
        "prompt": "Ordene a frase sobre a localização na casa:",
        "options": [
          "living",
          "is",
          "He",
          "in",
          "the",
          "room."
        ],
        "correctAnswer": "He is in the living room.",
        "explanation": "\"He is in the living room.\" significa \"Ele está na sala de estar.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p27-e3",
        "type": "fill-blank",
        "prompt": "Complete com o cômodo onde dormimos:",
        "contextSentence": "I sleep in my ____.",
        "options": [
          "bedroom",
          "kitchen",
          "bathroom",
          "door"
        ],
        "correctAnswer": "bedroom",
        "explanation": "\"Bedroom\" (cama + cômodo) é o quarto de dormir.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p27-e4",
        "type": "listening",
        "prompt": "Ouça o áudio e selecione a frase ouvida:",
        "audioPhrase": "Please close the window in the living room.",
        "options": [
          "Please close the window in the living room.",
          "Please open the door in the kitchen.",
          "Close the bedroom door please.",
          "The window in the house is open."
        ],
        "correctAnswer": "Please close the window in the living room.",
        "explanation": "\"Please close the window in the living room.\" significa \"Por favor, feche a janela na sala de estar.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p27-e5",
        "type": "multiple-choice",
        "visualEmoji": "🍳",
        "prompt": "Como se diz \"Cozinha\" em inglês?",
        "options": [
          "Kitchen",
          "Bedroom",
          "Bathroom",
          "Living room"
        ],
        "correctAnswer": "Kitchen",
        "explanation": "Kitchen = cozinha.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p27-e6",
        "type": "fill-blank",
        "visualEmoji": "🛏️",
        "prompt": "Onde dormimos em uma casa? \"I sleep in my _____.\"",
        "options": [
          "bedroom",
          "kitchen",
          "garage",
          "garden"
        ],
        "correctAnswer": "bedroom",
        "explanation": "Bedroom = quarto de dormir.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p27-e7",
        "type": "word-order",
        "prompt": "Organize a frase sobre o cômodo da casa:",
        "options": [
          "is",
          "in",
          "living",
          "He",
          "the",
          "room."
        ],
        "correctAnswer": "He is in the living room.",
        "explanation": "\"He is in the living room.\" = \"Ele está na sala de estar.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p27-e8",
        "type": "listening",
        "prompt": "Ouça onde está a pessoa:",
        "audioPhrase": "She is washing her hands in the bathroom.",
        "options": [
          "She is washing her hands in the bathroom.",
          "She is cooking in the kitchen.",
          "She is sleeping in the bedroom.",
          "She is relaxing in the living room."
        ],
        "correctAnswer": "She is washing her hands in the bathroom.",
        "explanation": "Bathroom = banheiro.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p27-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"Welcome to my home\"",
        "audioPhrase": "Welcome to my home",
        "correctAnswer": "Welcome to my home",
        "phoneticHint": "/ˈwel.kəm tuː maɪ hoʊm/",
        "explanation": "Perfeito! \"Bem-vindo ao meu lar\".",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p27-e10",
        "type": "multiple-choice",
        "visualEmoji": "🌳",
        "prompt": "Qual é o espaço ao ar livre com plantas e grama ao redor da casa?",
        "options": [
          "Garden",
          "Hallway",
          "Roof",
          "Basement"
        ],
        "correctAnswer": "Garden",
        "explanation": "Garden = jardim / quintal.",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p28",
    "worldId": 1,
    "phaseNumber": 28,
    "title": "Vestuário & Roupas Básicas",
    "subtitle": "Shirt, Pants, Shoes & What are you wearing?",
    "pedagogicalObjective": "Identificar peças de vestuário e descrever o que está usando.",
    "type": "lesson",
    "icon": "shopping-bag",
    "cefrLevel": "A1",
    "theorySummary": [
      "Peças de vestuário: Shirt (camisa com botões/social), T-shirt (camiseta básica), Pants (calças), Shoes (sapatos), Jacket (jaqueta/casaco), Dress (vestido).",
      "O verbo \"WEAR\" significa vestir ou calçar roupa/acessório: \"I wear a jacket\".",
      "No presente contínuo: \"I am wearing black shoes\" (Estou usando sapatos pretos)."
    ],
    "xpReward": 40,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w1-p28-e1",
        "type": "multiple-choice",
        "visualEmoji": "👟",
        "prompt": "Qual item de vestuário você calça nos pés?",
        "options": [
          "Shoes",
          "Shirt",
          "Jacket",
          "Pants"
        ],
        "correctAnswer": "Shoes",
        "explanation": "\"Shoes\" significa sapatos ou calçados.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p28-e2",
        "type": "word-order",
        "prompt": "Ordene a frase de vestuário:",
        "options": [
          "a",
          "wearing",
          "am",
          "blue",
          "I",
          "t-shirt."
        ],
        "correctAnswer": "I am wearing a blue t-shirt.",
        "explanation": "\"I am wearing a blue t-shirt.\" significa \"Estou usando uma camiseta azul.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p28-e3",
        "type": "fill-blank",
        "prompt": "Complete com o verbo de usar roupas:",
        "contextSentence": "In cold weather, I ____ a warm jacket.",
        "options": [
          "wear",
          "eat",
          "drink",
          "speak"
        ],
        "correctAnswer": "wear",
        "explanation": "\"Wear\" é o verbo usado para vestir roupas.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p28-e4",
        "type": "translate",
        "prompt": "Traduza: \"Ela tem calças pretas e sapatos brancos.\"",
        "options": [
          "She has black pants and white shoes.",
          "She wears pants black and shoes white.",
          "She has black shoes and white pants.",
          "She is with pants black and shoe."
        ],
        "correctAnswer": "She has black pants and white shoes.",
        "explanation": "\"She has black pants and white shoes\" respeita a ordem adjetivo antes de substantivo.",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p28-e5",
        "type": "multiple-choice",
        "visualEmoji": "👕",
        "prompt": "Como se diz \"Camiseta\" em inglês?",
        "options": [
          "T-shirt",
          "Pants",
          "Shoes",
          "Dress"
        ],
        "correctAnswer": "T-shirt",
        "explanation": "T-shirt = camiseta; Shirt = camisa social.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p28-e6",
        "type": "fill-blank",
        "visualEmoji": "👟",
        "prompt": "Complete com o calçado: \"Put on your _____ to go running.\"",
        "options": [
          "shoes",
          "hat",
          "coat",
          "belt"
        ],
        "correctAnswer": "shoes",
        "explanation": "Shoes (/ʃuːz/) = sapatos/tênis.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p28-e7",
        "type": "word-order",
        "prompt": "Monte a frase descrevendo a roupa:",
        "options": [
          "wearing",
          "is",
          "blue",
          "a",
          "jacket.",
          "She"
        ],
        "correctAnswer": "She is wearing a blue jacket.",
        "explanation": "\"Wear\" é o verbo usado para vestir roupas: \"She is wearing a blue jacket.\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p28-e8",
        "type": "listening",
        "prompt": "Ouça a peça de roupa mencionada:",
        "audioPhrase": "I need a warm coat for the winter.",
        "options": [
          "I need a warm coat for the winter.",
          "I need a blue shirt for the summer.",
          "I need new pants for the party.",
          "I need black shoes for work."
        ],
        "correctAnswer": "I need a warm coat for the winter.",
        "explanation": "Coat = casaco.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p28-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"I like your jacket\"",
        "audioPhrase": "I like your jacket",
        "correctAnswer": "I like your jacket",
        "phoneticHint": "/aɪ laɪk jɔːr ˈdʒæk.ɪt/",
        "explanation": "Excelente elogio!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p28-e10",
        "type": "multiple-choice",
        "visualEmoji": "👖",
        "prompt": "Como se diz \"Calças\" em inglês americano?",
        "options": [
          "Pants",
          "Skirts",
          "Socks",
          "Gloves"
        ],
        "correctAnswer": "Pants",
        "explanation": "Pants = calças (em inglês britânico também se usa \"trousers\").",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w1-p29",
    "worldId": 1,
    "phaseNumber": 29,
    "title": "Simulado Geral Pré-Boss A1",
    "subtitle": "Revisão intensiva de todo o conteúdo antes do Guardião",
    "pedagogicalObjective": "Testar e reforçar a retenção de todas as competências do A1 em preparação para a batalha final.",
    "type": "review",
    "icon": "shield",
    "cefrLevel": "A1",
    "theorySummary": [
      "Atenção! Você está a um passo de enfrentar o Guardião do Mundo 1!",
      "Nesta fase de simulado, você treinará questões de listening, montagem de frases, preposições, verbos e vocabulário.",
      "Revise com calma: cada acerto aqui consolida seu aprendizado real para vencer o Boss!"
    ],
    "xpReward": 50,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w1-p29-e1",
        "type": "listening",
        "prompt": "Ouça o diálogo com atenção e selecione o que foi dito:",
        "audioPhrase": "Hello! I am Lucas, I am twenty years old and I live in Brazil.",
        "options": [
          "Hello! I am Lucas, I am twenty years old and I live in Brazil.",
          "Good morning! My name is Lucas, I am twelve years old from Spain.",
          "Hello! I am Carlos, I am thirty years old and I work in Brazil.",
          "Goodbye! I am Lucas and I study English at home."
        ],
        "correctAnswer": "Hello! I am Lucas, I am twenty years old and I live in Brazil.",
        "explanation": "Excelente escuta! Identificou nome, idade com verbo to be e país de residência.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p29-e2",
        "type": "word-order",
        "prompt": "Ordene a pergunta com palavra WH e preposição de lugar:",
        "options": [
          "the",
          "Where",
          "keys,",
          "please?",
          "are"
        ],
        "correctAnswer": "Where are the keys, please?",
        "explanation": "\"Where are the keys, please?\" significa \"Onde estão as chaves, por favor?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p29-e3",
        "type": "multiple-choice",
        "prompt": "Qual das opções abaixo preenche corretamente as lacunas: \"She ____ at home ____ Mondays\"?",
        "options": [
          "is / on",
          "are / in",
          "is / at",
          "am / to"
        ],
        "correctAnswer": "is / on",
        "explanation": "\"She is\" (verbo to be singular) e \"on Mondays\" (preposição ON para dias da semana).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p29-e4",
        "type": "fill-blank",
        "prompt": "Complete a frase com o verbo de ação:",
        "contextSentence": "I ____ English every afternoon because I love learning.",
        "options": [
          "study",
          "sleep",
          "drink",
          "wear"
        ],
        "correctAnswer": "study",
        "explanation": "\"Study English\" é estudar inglês.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p29-e5",
        "type": "translate",
        "prompt": "Traduza: \"Com licença, que horas são agora?\"",
        "options": [
          "Excuse me, what time is it now?",
          "Please, which hour is it now?",
          "Sorry, what is the clock?",
          "Excuse me, where time is it?"
        ],
        "correctAnswer": "Excuse me, what time is it now?",
        "explanation": "\"Excuse me, what time is it now?\" é a pergunta formal e educada perfeita.",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p29-e6",
        "type": "multiple-choice",
        "prompt": "[Simulado Geral] Qual frase está 100% correta?",
        "options": [
          "She is an intelligent woman.",
          "She are a intelligent woman.",
          "She is a intelligent woman.",
          "She is an woman intelligent."
        ],
        "correctAnswer": "She is an intelligent woman.",
        "explanation": "\"Intelligent\" começa com som de vogal -> \"an\", e o adjetivo antecede o substantivo.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p29-e7",
        "type": "fill-blank",
        "prompt": "[Simulado Geral] \"_____ is your favorite day of the week?\"",
        "options": [
          "What",
          "Who",
          "Where",
          "Why"
        ],
        "correctAnswer": "What",
        "explanation": "\"What is your favorite...?\" = \"Qual é seu... favorito?\".",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p29-e8",
        "type": "word-order",
        "prompt": "[Simulado Geral] Reorganize a saudação com horário:",
        "options": [
          "Good",
          "it",
          "is",
          "morning,",
          "eight."
        ],
        "correctAnswer": "Good morning, it is eight.",
        "explanation": "Combinação de saudação e horas.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p29-e9",
        "type": "listening",
        "prompt": "[Simulado Geral] Ouça o diálogo completo:",
        "audioPhrase": "Where is the doctor? He is in the hospital.",
        "options": [
          "Where is the doctor? He is in the hospital.",
          "Where is the teacher? She is in the school.",
          "Who is that doctor? He is my brother.",
          "Why is the doctor at home?"
        ],
        "correctAnswer": "Where is the doctor? He is in the hospital.",
        "explanation": "\"Where is the doctor? He is in the hospital.\" = \"Onde está o médico? Ele está no hospital.\".",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p29-e10",
        "type": "multiple-choice",
        "prompt": "[Simulado Geral] \"I am 22 years old\" expressa:",
        "options": [
          "Idade",
          "Quantidade de livros",
          "Horas",
          "Data"
        ],
        "correctAnswer": "Idade",
        "explanation": "Construção correta para idade em inglês.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p29-e11",
        "type": "speaking-repeat",
        "prompt": "[Simulado Geral] Fale a frase final do simulado: \"I am ready for the boss battle!\"",
        "audioPhrase": "I am ready for the boss battle",
        "correctAnswer": "I am ready for the boss battle",
        "phoneticHint": "/aɪ æm ˈred.i fɔːr ðə bɔːs ˈbæt.əl/",
        "explanation": "Você está mais do que preparado!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p29-e12",
        "type": "translate",
        "prompt": "[Simulado Geral] Traduza: \"O livro está na mesa.\"",
        "options": [
          "The book is on the table.",
          "The book is in the table.",
          "The book is at the table.",
          "The book is under the table."
        ],
        "correctAnswer": "The book is on the table.",
        "explanation": "The book is on the table.",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p29-e13",
        "type": "fill-blank",
        "prompt": "[Simulado Geral] \"They _____ from Brazil, they are Japanese.\"",
        "options": [
          "aren't",
          "isn't",
          "don't",
          "not are"
        ],
        "correctAnswer": "aren't",
        "explanation": "\"They aren't from Brazil\" = \"Eles não são do Brasil\".",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w1-p30",
    "worldId": 1,
    "phaseNumber": 30,
    "title": "O Guardião do Mundo 1",
    "subtitle": "A Batalha Suprema de Proficiência A1",
    "pedagogicalObjective": "Desafio Supremo do A1: Demonstre domínio completo aplicando conversação, listening, gramática e vocabulário de todo o Mundo 1 para derrotar o Guardião e conquistar a Insígnia A1!",
    "type": "boss",
    "icon": "swords",
    "cefrLevel": "A1",
    "theorySummary": [
      "⚔️ VOCÊ CHEGOU AO BOSS FINAL DO MUNDO 1!",
      "O Guardião do Mundo 1 vai testar tudo o que você aprendeu nas 29 fases anteriores: saudações, números, horas, família, rotina, verbos, preposições e pronúncia.",
      "Cada resposta correta enfraquece o Guardião. Conclua com êxito para ganhar a Insígnia do Guardião A1 e abrir as portas do Mundo 2!"
    ],
    "xpReward": 150,
    "gemsReward": 50,
    "exercises": [
      {
        "id": "w1-p30-e1",
        "type": "listening",
        "prompt": "[Batalha Boss 1/6] Escuta de Alto Desafio - Ouça a apresentação detalhada do Guardião:",
        "audioPhrase": "Welcome challenger! I speak English, I live in this realm and I protect the gates.",
        "options": [
          "Welcome challenger! I speak English, I live in this realm and I protect the gates.",
          "Good morning friend! I study English and I sleep in this castle.",
          "Welcome students! We speak Portuguese and we are at school.",
          "Hello challenger! I have twenty years and I drink water today."
        ],
        "correctAnswer": "Welcome challenger! I speak English, I live in this realm and I protect the gates.",
        "explanation": "Golpe certeiro! Você decodificou perfeitamente o áudio do Guardião.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p30-e2",
        "type": "word-order",
        "prompt": "[Batalha Boss 2/6] Estruturação Complexa - Ordene a frase que combina horário, rotina e preposição:",
        "options": [
          "eight",
          "study",
          "at",
          "I",
          "o'clock.",
          "English"
        ],
        "correctAnswer": "I study English at eight o'clock.",
        "explanation": "\"I study English at eight o'clock.\" - Aplicação impecável de sujeito, verbo, objeto e preposição temporal!",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p30-e3",
        "type": "multiple-choice",
        "prompt": "[Batalha Boss 3/6] Identificação de Erro - Qual das quatro frases abaixo é a ÚNICA 100% correta?",
        "options": [
          "My brother is ten years old and drinks cold water in the kitchen.",
          "My brother has ten years old and drink water cold on kitchen.",
          "My brother is ten years and drinks a water cold under kitchen.",
          "My brother have ten years and eat cold water in the room."
        ],
        "correctAnswer": "My brother is ten years old and drinks cold water in the kitchen.",
        "explanation": "Acerto monumental! Idade com \"is\", número \"ten\", concordância \"drinks\", ordem \"cold water\" e preposição \"in the kitchen\"!",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p30-e4",
        "type": "fill-blank",
        "prompt": "[Batalha Boss 4/6] Situação Real - Complete o diálogo de cortesia:",
        "contextSentence": "Excuse me, ____ I have a glass of water, please?",
        "options": [
          "can",
          "is",
          "are",
          "do"
        ],
        "correctAnswer": "can",
        "explanation": "\"Can I have...\" é a expressão educada mais comum em restaurantes e viagens para pedir algo.",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p30-e5",
        "type": "translate",
        "prompt": "[Batalha Boss 5/6] Tradução Contextual - Traduza a frase completa de apresentação:",
        "contextSentencePt": "Olá, meu nome é Alex, eu sou brasileiro e moro em uma cidade bonita.",
        "options": [
          "Hello, my name is Alex, I am Brazilian and I live in a beautiful city.",
          "Hi, my name have Alex, I am Brazil and live in a city beautiful.",
          "Good morning, I name is Alex, I have Brazilian and live at house.",
          "Hello, I am Alex, I from Brazil and I speak beautiful city."
        ],
        "correctAnswer": "Hello, my name is Alex, I am Brazilian and I live in a beautiful city.",
        "explanation": "Excelente tradução com nacionalidade maiúscula (\"Brazilian\") e ordem adjetivo-substantivo (\"beautiful city\")!",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p30-e6",
        "type": "speaking-repeat",
        "prompt": "[Batalha Boss 6/6 - Golpe Final!] Pronuncie o juramento de proficiência em voz alta:",
        "contextSentence": "I completed World One and I am ready to speak English with the world!",
        "audioPhrase": "I completed World One and I am ready to speak English with the world!",
        "correctAnswer": "I completed World One and I am ready to speak English with the world!",
        "explanation": "🏆 VITÓRIA ÉPICA! O Guardião do Mundo 1 foi derrotado! Você conquistou a Insígnia do Guardião A1 e desbloqueou o Mundo 2!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p30-e7",
        "type": "multiple-choice",
        "prompt": "[Chefe Supremo A1] O que significa \"Excuse me, where is the train station?\"",
        "options": [
          "Com licença, onde fica a estação de trem?",
          "Por favor, que horas passa o trem?",
          "Desculpe, o trem já partiu?",
          "Obrigado por me levar à estação."
        ],
        "correctAnswer": "Com licença, onde fica a estação de trem?",
        "explanation": "\"Excuse me\" = com licença; \"Where is...?\" = onde fica...?",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p30-e8",
        "type": "word-order",
        "prompt": "[Chefe Supremo A1] Monte o desafio final de estrutura frasal:",
        "options": [
          "is",
          "English",
          "speaking",
          "My",
          "friend",
          "fluent."
        ],
        "correctAnswer": "My friend is speaking fluent English.",
        "explanation": "Sujeito + verbo to be + particípio presente + objeto.",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p30-e9",
        "type": "listening",
        "prompt": "[Chefe Supremo A1] Ouça o enigma do Guardião:",
        "audioPhrase": "Welcome to the end of World One. You are a true English champion!",
        "options": [
          "Welcome to the end of World One. You are a true English champion!",
          "Welcome to the start of World Two. You need more practice.",
          "Goodbye to World One. Try again tomorrow.",
          "Hello champion. Where is your homework?"
        ],
        "correctAnswer": "Welcome to the end of World One. You are a true English champion!",
        "explanation": "Parabéns pela vitória!",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p30-e10",
        "type": "fill-blank",
        "prompt": "[Chefe Supremo A1] \"There _____ seven days in a week.\"",
        "options": [
          "are",
          "is",
          "be",
          "have"
        ],
        "correctAnswer": "are",
        "explanation": "There are = há / existem (plural).",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p30-e11",
        "type": "speaking-repeat",
        "prompt": "[Chefe Supremo A1] Pronuncie seu grito de vitória: \"I conquered World One!\"",
        "audioPhrase": "I conquered World One",
        "correctAnswer": "I conquered World One",
        "phoneticHint": "/aɪ ˈkɑːŋ.kərd wɜːrld wʌn/",
        "explanation": "Você conquistou o Mundo 1!",
        "skillCategory": "pronunciation"
      },
      {
        "id": "w1-p30-e12",
        "type": "multiple-choice",
        "visualEmoji": "👑",
        "prompt": "[Chefe Supremo A1] Qual dessas palavras NÃO é uma cor?",
        "options": [
          "Apple",
          "Blue",
          "Yellow",
          "Green"
        ],
        "correctAnswer": "Apple",
        "explanation": "Apple é fruta, as outras são cores!",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w1-p30-e13",
        "type": "translate",
        "prompt": "[Chefe Supremo A1] Traduza: \"Nice to meet you, have a good day!\"",
        "options": [
          "Prazer em conhecer você, tenha um bom dia!",
          "Bom dia, como você está?",
          "Até amanhã, durma bem!",
          "De nada, volte sempre!"
        ],
        "correctAnswer": "Prazer em conhecer você, tenha um bom dia!",
        "explanation": "Tradução precisa da saudação e despedida.",
        "skillCategory": "reading"
      },
      {
        "id": "w1-p30-e14",
        "type": "word-order",
        "prompt": "[Chefe Supremo A1] Reorganize a última frase do Guardião:",
        "options": [
          "world",
          "English",
          "now.",
          "The",
          "is",
          "open"
        ],
        "correctAnswer": "The English world is open now.",
        "explanation": "\"The English world is open now.\"",
        "skillCategory": "grammar"
      },
      {
        "id": "w1-p30-e15",
        "type": "listening",
        "prompt": "[Chefe Supremo A1] Ouça e identifique o número final:",
        "audioPhrase": "You have earned twenty stars today.",
        "options": [
          "You have earned twenty stars today.",
          "You have earned twelve stars today.",
          "You have earned two stars today.",
          "You have earned ten stars today."
        ],
        "correctAnswer": "You have earned twenty stars today.",
        "explanation": "Twenty = 20.",
        "skillCategory": "listening"
      },
      {
        "id": "w1-p30-e16",
        "type": "multiple-choice",
        "prompt": "[Chefe Supremo A1] Qual é a resposta padrão para \"Thank you very much\"?",
        "options": [
          "You are welcome!",
          "I am fine!",
          "Good night!",
          "Please to meet you!"
        ],
        "correctAnswer": "You are welcome!",
        "explanation": "You are welcome!",
        "skillCategory": "vocabulary"
      }
    ]
  }
];
