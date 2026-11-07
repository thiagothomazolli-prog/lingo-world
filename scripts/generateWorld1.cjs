// Generator for World 1 with 8 to 10 exercises per phase (and 15 on Boss)
const fs = require('fs');

const world1PhasesData = [
  // 1
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

  // 2
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
  }
];

console.log('Script template ready.');

