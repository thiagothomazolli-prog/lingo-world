// Comprehensive expansion for World 1 (A1 - Primeiros Passos)
// 30 phases, 8 to 10 exercises each, 12 on chest, 15 on boss
const fs = require('fs');

const w1Data = [
  // 1. O Alfabeto & Sons Iniciais
  {
    phaseNumber: 1,
    title: 'O Alfabeto & Sons Iniciais',
    subtitle: 'As letras, vogais e pronúncias fundamentais',
    pedagogicalObjective: 'Reconhecer as letras do alfabeto em inglês e suas pronúncias características.',
    type: 'lesson',
    icon: 'alphabet',
    cefrLevel: 'A1',
    theorySummary: [
      'Em inglês, as vogais têm sons bem característicos: A (/eɪ/), E (/iː/), I (/aɪ/), O (/oʊ/), U (/juː/).',
      'A letra "C" soa como "si", a letra "G" como "dji", e a letra "H" como "eitch".',
      'Para soletrar palavras, pronunciamos cada letra individualmente pelo seu som do alfabeto.'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p1-e1',
        type: 'multiple-choice',
        prompt: 'Qual é o som da letra "A" no alfabeto em inglês?',
        options: ['êi (/eɪ/)', 'ah (/ɑː/)', 'i (/iː/)', 'ou (/oʊ/)'],
        correctAnswer: 'êi (/eɪ/)',
        explanation: 'A letra "A" no alfabeto em inglês tem o som de "êi" (/eɪ/), como na palavra "Day" ou "Name".',
        phoneticHint: '/eɪ/',
        skillCategory: 'pronunciation'
      },
      {
        id: 'w1-p1-e2',
        type: 'word-order',
        visualEmoji: '🐱',
        prompt: 'Ordene as letras para soletrar a palavra "CAT" (gato):',
        options: ['T', 'C', 'A'],
        correctAnswer: 'C A T',
        explanation: 'A soletração de CAT é "C-A-T" (/siː/ - /eɪ/ - /tiː/).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p1-e3',
        type: 'listening',
        prompt: 'Ouça o áudio e selecione a frase que você escutou:',
        audioPhrase: 'Can you spell your name, please?',
        options: [
          'Can you spell your name, please?',
          'What is your name, please?',
          'How do you say your name?',
          'Tell me your name today'
        ],
        correctAnswer: 'Can you spell your name, please?',
        explanation: '"Can you spell your name, please?" significa "Você pode soletrar seu nome, por favor?".',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p1-e4',
        type: 'multiple-choice',
        prompt: 'A letra "E" em inglês tem a pronúncia mais parecida com qual som do português?',
        options: ['Som de "I" (í)', 'Som de "É"', 'Som de "Ê"', 'Som de "U"'],
        correctAnswer: 'Som de "I" (í)',
        explanation: 'A letra "E" soa como /iː/ ("í"), como em "Email" ou "Eagle".',
        skillCategory: 'pronunciation'
      },
      {
        id: 'w1-p1-e5',
        type: 'multiple-choice',
        visualEmoji: '🍎',
        prompt: 'Qual palavra começa com a letra "A" e tem o som /æ/?',
        options: ['Apple', 'Book', 'Door', 'Cat'],
        correctAnswer: 'Apple',
        explanation: 'Apple (/ˈæp.əl/) significa maçã e começa com a letra A.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p1-e6',
        type: 'fill-blank',
        visualEmoji: '📖',
        prompt: 'Complete a letra que falta para formar "BOOK" (livro): B - O - ___ - K',
        options: ['O', 'A', 'E', 'U'],
        correctAnswer: 'O',
        explanation: 'A palavra correta é BOOK (B-O-O-K).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p1-e7',
        type: 'word-order',
        visualEmoji: '☀️',
        prompt: 'Ordene as letras para soletrar "SUN" (sol):',
        options: ['N', 'S', 'U'],
        correctAnswer: 'S U N',
        explanation: 'A palavra sol em inglês é SUN (S-U-N).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p1-e8',
        type: 'listening',
        prompt: 'Ouça o áudio e identifique a letra pronunciada:',
        audioPhrase: 'The letter H',
        options: ['The letter H', 'The letter A', 'The letter E', 'The letter 8'],
        correctAnswer: 'The letter H',
        explanation: '"H" em inglês soa como /eɪtʃ/ ("eitch").',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p1-e9',
        type: 'speaking-repeat',
        prompt: 'Pratique sua fala: Diga as letras "A B C D"',
        audioPhrase: 'A B C D',
        correctAnswer: 'A B C D',
        phoneticHint: '/eɪ biː siː diː/',
        explanation: 'Excelente pronúncia das letras A, B, C e D!',
        skillCategory: 'pronunciation'
      },
      {
        id: 'w1-p1-e10',
        type: 'multiple-choice',
        prompt: 'A letra "I" em inglês tem a pronúncia mais comum de:',
        options: ['ai (/aɪ/)', 'i (/iː/)', 'e (/eɪ/)', 'ou (/oʊ/)'],
        correctAnswer: 'ai (/aɪ/)',
        explanation: 'A letra "I" em inglês soa como "ai" (/aɪ/), como em "Ice" (gelo) ou "Time" (tempo).',
        phoneticHint: '/aɪ/',
        skillCategory: 'pronunciation'
      }
    ]
  },

  // 2. Cumprimentos & Saudações
  {
    phaseNumber: 2,
    title: 'Cumprimentos & Saudações',
    subtitle: 'Hello, Good Morning & How are you?',
    pedagogicalObjective: 'Dominar saudações formais e informais para qualquer período do dia.',
    type: 'lesson',
    icon: 'hand',
    cefrLevel: 'A1',
    theorySummary: [
      'Usamos "Hello" (geral) e "Hi" (informal) para dizer olá.',
      '"Good morning" (bom dia, até meio-dia), "Good afternoon" (boa tarde, 12h-18h), "Good evening" (ao chegar à noite).',
      '"Good night" é usado EXCLUSIVAMENTE para se despedir ou desejar boa noite ao ir dormir.',
      '"How are you?" é a pergunta padrão para "Como você está?".'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p2-e1',
        type: 'multiple-choice',
        prompt: 'Você chega a uma reunião às 20h. Qual cumprimento deve usar?',
        options: ['Good evening', 'Good night', 'Good morning', 'See you later'],
        correctAnswer: 'Good evening',
        explanation: 'Ao chegar à noite usamos "Good evening". "Good night" é apenas para despedida!',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p2-e2',
        type: 'word-order',
        prompt: 'Organize a saudação com pergunta de cortesia:',
        options: ['are', 'Good', 'how', 'morning,', 'you?'],
        correctAnswer: 'Good morning, how are you?',
        explanation: '"Good morning, how are you?" significa "Bom dia, como você está?".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p2-e3',
        type: 'listening',
        prompt: 'Ouça a despedida e selecione a opção ouvida:',
        audioPhrase: 'Goodbye, see you tomorrow!',
        options: [
          'Goodbye, see you tomorrow!',
          'Hello, see you today!',
          'Good night, see you later!',
          'Good morning, my friend!'
        ],
        correctAnswer: 'Goodbye, see you tomorrow!',
        explanation: '"Goodbye, see you tomorrow!" significa "Adeus, até amanhã!".',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p2-e4',
        type: 'translate',
        prompt: 'Traduza para o inglês: "Muito bem, obrigado!"',
        options: [
          'Very well, thank you!',
          'Good night, please!',
          'I am bad, thanks!',
          'Excuse me, you are welcome!'
        ],
        correctAnswer: 'Very well, thank you!',
        explanation: '"Very well, thank you!" é a resposta clássica educada para "How are you?".',
        skillCategory: 'reading'
      },
      {
        id: 'w1-p2-e5',
        type: 'multiple-choice',
        visualEmoji: '👋',
        prompt: 'Qual é a forma mais comum e descontraída de dizer "Oi" entre amigos?',
        options: ['Hi', 'Good evening', 'Farewell', 'Pleasure to meet you'],
        correctAnswer: 'Hi',
        explanation: '"Hi" ou "Hey" são as saudações informais mais comuns.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p2-e6',
        type: 'fill-blank',
        visualEmoji: '🌅',
        prompt: 'Complete a saudação matinal: "Good _____, have a great day!"',
        options: ['morning', 'night', 'bye', 'afternoon'],
        correctAnswer: 'morning',
        explanation: '"Good morning" significa bom dia.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p2-e7',
        type: 'word-order',
        prompt: 'Organize a resposta educada:',
        options: ['fine,', 'thank', 'I', 'am', 'you.'],
        correctAnswer: 'I am fine, thank you.',
        explanation: '"I am fine, thank you." significa "Eu estou bem, obrigado(a).".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p2-e8',
        type: 'listening',
        prompt: 'Ouça o cumprimento da tarde e escolha a alternativa correta:',
        audioPhrase: 'Good afternoon, welcome to our class!',
        options: [
          'Good afternoon, welcome to our class!',
          'Good morning, welcome to our class!',
          'Good evening, welcome to our class!',
          'Goodbye, welcome to our class!'
        ],
        correctAnswer: 'Good afternoon, welcome to our class!',
        explanation: '"Good afternoon" refere-se à tarde (após o meio-dia).',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p2-e9',
        type: 'speaking-repeat',
        prompt: 'Fale no microfone para desejar um bom dia: "Good morning!"',
        audioPhrase: 'Good morning',
        correctAnswer: 'Good morning',
        phoneticHint: '/ɡʊd ˈmɔːr.nɪŋ/',
        explanation: 'Excelente pronúncia! "Good morning" significa "Bom dia".',
        skillCategory: 'pronunciation'
      },
      {
        id: 'w1-p2-e10',
        type: 'multiple-choice',
        visualEmoji: '🌙',
        prompt: 'Você está se despedindo às 22h para ir para casa dormir. O que você diz?',
        options: ['Good night!', 'Good evening!', 'Good morning!', 'Hello!'],
        correctAnswer: 'Good night!',
        explanation: 'Para despedida noturna ou antes de dormir, usamos exclusivamente "Good night!".',
        skillCategory: 'vocabulary'
      }
    ]
  },

  // 3. Apresentando-se & Seu Nome
  {
    phaseNumber: 3,
    title: 'Apresentando-se & Seu Nome',
    subtitle: 'What is your name? My name is...',
    pedagogicalObjective: 'Perguntar e dizer o próprio nome e apresentar pessoas com naturalidade.',
    type: 'lesson',
    icon: 'user',
    cefrLevel: 'A1',
    theorySummary: [
      '"What is your name?" é a pergunta clássica para saber o nome de alguém.',
      'A contração "What\'s your name?" é a forma mais falada e natural.',
      'Respondemos com "My name is [Nome]" ou de forma ainda mais direta "I am [Nome]" / "I\'m [Nome]".',
      'Ao conhecer alguém, dizemos "Nice to meet you" (Prazer em conhecer você).'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p3-e1',
        type: 'multiple-choice',
        prompt: 'Como se pergunta "Qual é o seu nome?" em inglês?',
        options: ['What is your name?', 'How is your name?', 'Who are you name?', 'Where is your name?'],
        correctAnswer: 'What is your name?',
        explanation: 'Usamos "What is your name?" (ou contraído "What\'s your name?") para perguntar o nome de alguém.',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p3-e2',
        type: 'word-order',
        prompt: 'Organize a resposta com seu nome:',
        options: ['name', 'is', 'My', 'Lucas.'],
        correctAnswer: 'My name is Lucas.',
        explanation: '"My name is Lucas." significa "Meu nome é Lucas."',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p3-e3',
        type: 'listening',
        prompt: 'Ouça o áudio e selecione a frase correta:',
        audioPhrase: 'Hello, my name is Sarah. Nice to meet you!',
        options: [
          'Hello, my name is Sarah. Nice to meet you!',
          'Hello, my name is Sarah. How are you today?',
          'Hi, what is your name Sarah?',
          'Good evening, my name is Sarah.'
        ],
        correctAnswer: 'Hello, my name is Sarah. Nice to meet you!',
        explanation: '"Nice to meet you" é a expressão clássica de boas-vindas ao conhecer alguém.',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p3-e4',
        type: 'translate',
        prompt: 'Traduza para o inglês: "Prazer em conhecer você!"',
        options: [
          'Nice to meet you!',
          'Good to see you again!',
          'How do you do?',
          'Welcome to my house!'
        ],
        correctAnswer: 'Nice to meet you!',
        explanation: '"Nice to meet you!" expressa simpatia ao ser apresentado a alguém.',
        skillCategory: 'reading'
      },
      {
        id: 'w1-p3-e5',
        type: 'fill-blank',
        visualEmoji: '🤝',
        prompt: 'Complete a apresentação: "Hi, I _____ John."',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'am',
        explanation: 'Com o pronome "I", usamos a forma "am" do verbo To Be ("I am John").',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p3-e6',
        type: 'multiple-choice',
        prompt: 'Qual é a resposta mais comum e educada quando alguém diz "Nice to meet you"?',
        options: ['Nice to meet you too!', 'You are welcome!', 'I am very happy!', 'Good night!'],
        correctAnswer: 'Nice to meet you too!',
        explanation: '"Nice to meet you too!" significa "Prazer em conhecer você também!".',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p3-e7',
        type: 'word-order',
        prompt: 'Organize a pergunta contraída:',
        options: ['name?', 'What\'s', 'your'],
        correctAnswer: 'What\'s your name?',
        explanation: '"What\'s your name?" é a contração de "What is your name?".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p3-e8',
        type: 'listening',
        prompt: 'Ouça e selecione a identificação pessoal ouvida:',
        audioPhrase: 'I am David, I am a student.',
        options: [
          'I am David, I am a student.',
          'My name is David, I am a teacher.',
          'You are David, a good student.',
          'He is David, my best friend.'
        ],
        correctAnswer: 'I am David, I am a student.',
        explanation: '"I am David, I am a student." significa "Eu sou David, eu sou um estudante."',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p3-e9',
        type: 'speaking-repeat',
        prompt: 'Fale no microfone sua apresentação: "My name is Alex."',
        audioPhrase: 'My name is Alex',
        correctAnswer: 'My name is Alex',
        phoneticHint: '/maɪ neɪm ɪz ˈæl.ɪks/',
        explanation: 'Muito bem! Você pronunciou perfeitamente sua apresentação.',
        skillCategory: 'pronunciation'
      },
      {
        id: 'w1-p3-e10',
        type: 'multiple-choice',
        visualEmoji: '🪪',
        prompt: 'Como apresentar um amigo para outra pessoa?',
        options: ['This is my friend, Pedro.', 'Here is my friend, Pedro.', 'That has my friend, Pedro.', 'There is my friend, Pedro.'],
        correctAnswer: 'This is my friend, Pedro.',
        explanation: 'Usamos "This is [Nome]" para apresentar alguém a outra pessoa.',
        skillCategory: 'vocabulary'
      }
    ]
  }
];

console.log('Phases 1-3 configured.');

