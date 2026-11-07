import { Phase } from '../types';

export const WORLD_1_PHASES: Phase[] = [
  // 1. Alfabeto & Sons Iniciais
  {
    id: 'w1-p1',
    worldId: 1,
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
    xpReward: 30,
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
      }
    ]
  },

  // 2. Saudações e Cumprimentos
  {
    id: 'w1-p2',
    worldId: 1,
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
    xpReward: 30,
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
      }
    ]
  },

  // 3. Apresentando-se & Seu Nome
  {
    id: 'w1-p3',
    worldId: 1,
    phaseNumber: 3,
    title: 'Apresentando-se & Seu Nome',
    subtitle: 'What is your name? My name is...',
    pedagogicalObjective: 'Perguntar e dizer seu nome e cumprimentar com prazer em conhecer.',
    type: 'lesson',
    icon: 'user',
    cefrLevel: 'A1',
    theorySummary: [
      'Para perguntar o nome: "What is your name?" (ou contraído: "What\'s your name?").',
      'Para responder: "My name is [Nome]" ou "I am [Nome]".',
      'A expressão de cortesia é "Nice to meet you!" (Muito prazer em te conhecer!).',
      'A réplica clássica é "Nice to meet you too!" (O prazer é meu!).'
    ],
    xpReward: 30,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p3-e1',
        type: 'fill-blank',
        prompt: 'Complete a pergunta:',
        contextSentence: 'What ____ your name?',
        options: ['is', 'are', 'am', 'be'],
        correctAnswer: 'is',
        explanation: 'Com "your name" (sujeito no singular "it") usamos a forma "is".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p3-e2',
        type: 'word-order',
        prompt: 'Monte a frase de apresentação educada:',
        options: ['Nice', 'meet', 'to', 'you!'],
        correctAnswer: 'Nice to meet you!',
        explanation: '"Nice to meet you!" significa "Muito prazer em conhecer você!".',
        skillCategory: 'speaking'
      },
      {
        id: 'w1-p3-e3',
        type: 'multiple-choice',
        prompt: 'Como responder cordialmente a "Nice to meet you"?',
        options: ['Nice to meet you too!', 'Yes, I am!', 'Thank you very much', 'Goodbye, my name!'],
        correctAnswer: 'Nice to meet you too!',
        explanation: 'O "too" no final significa "também" (prazer em conhecê-lo também).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p3-e4',
        type: 'speaking-repeat',
        prompt: 'Pratique a pronúncia da sua apresentação:',
        contextSentence: 'Hello, my name is Alex and nice to meet you!',
        audioPhrase: 'Hello, my name is Alex and nice to meet you!',
        correctAnswer: 'Hello, my name is Alex and nice to meet you!',
        explanation: 'Excelente! Pronúncia clara e amigável.',
        skillCategory: 'pronunciation'
      }
    ]
  },

  // 4. Cortesia & Boas Maneiras
  {
    id: 'w1-p4',
    worldId: 1,
    phaseNumber: 4,
    title: 'Cortesia & Boas Maneiras',
    subtitle: 'Please, Thank you & Excuse me',
    pedagogicalObjective: 'Utilizar as palavras essenciais de educação e civilidade no dia a dia.',
    type: 'lesson',
    icon: 'smile',
    cefrLevel: 'A1',
    theorySummary: [
      '"Please" (por favor) torna qualquer pedido educado.',
      '"Thank you" ou "Thanks" (obrigado) é respondido com "You\'re welcome" (de nada).',
      '"Excuse me" é usado para pedir licença ou chamar a atenção de alguém.',
      '"I am sorry" ou "Sorry" expressa desculpas por um erro ou acidente.'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p4-e1',
        type: 'multiple-choice',
        prompt: 'Alguém lhe diz "Thank you very much!". Como você responde de forma natural?',
        options: ["You're welcome!", 'Please!', 'Excuse me!', 'I am sorry!'],
        correctAnswer: "You're welcome!",
        explanation: '"You\'re welcome" é a expressão universal em inglês para "de nada".',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p4-e2',
        type: 'word-order',
        prompt: 'Ordene a frase para pedir água educadamente:',
        options: ['Water,', 'please.', 'some', 'Can', 'have', 'I'],
        correctAnswer: 'Can I have some water, please.',
        explanation: '"Can I have some water, please." significa "Posso tomar um pouco de água, por favor?".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p4-e3',
        type: 'listening',
        prompt: 'Escute a frase com atenção e selecione o texto correspondente:',
        audioPhrase: 'Excuse me, where is the exit?',
        options: [
          'Excuse me, where is the exit?',
          'Thank you, where is the hotel?',
          'Excuse me, what is your name?',
          'I am sorry, where is the bus?'
        ],
        correctAnswer: 'Excuse me, where is the exit?',
        explanation: '"Excuse me, where is the exit?" significa "Com licença, onde fica a saída?".',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p4-e4',
        type: 'translate',
        prompt: 'Como se diz "Desculpe pelo atraso" em inglês?',
        options: [
          'I am sorry for the delay.',
          'Thank you for the time.',
          'Please do not wait.',
          'Excuse me for the morning.'
        ],
        correctAnswer: 'I am sorry for the delay.',
        explanation: '"I am sorry for the delay" é a frase exata de desculpas pelo atraso.',
        skillCategory: 'reading'
      }
    ]
  },

  // 5. Números de 1 a 10 e Idades
  {
    id: 'w1-p5',
    worldId: 1,
    phaseNumber: 5,
    title: 'Números de 1 a 10 & Idades',
    subtitle: 'One, Two, Three & How old are you?',
    pedagogicalObjective: 'Dominar a contagem de 1 a 10 e expressar idades usando o Verbo To Be.',
    type: 'lesson',
    icon: 'hash',
    cefrLevel: 'A1',
    theorySummary: [
      'Contagem: 1-one, 2-two, 3-three, 4-four, 5-five, 6-six, 7-seven, 8-eight, 9-nine, 10-ten.',
      'Cuidado com a pronúncia de "three" (/θriː/ com som do TH).',
      'ATENÇÃO: Em inglês dizemos "I AM 20 years old" (usa-se o verbo SER, nunca o verbo TER!).',
      'Pergunta de idade: "How old are you?"'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p5-e1',
        type: 'multiple-choice',
        prompt: 'Qual é a forma correta de dizer "Eu tenho dez anos" em inglês?',
        options: ['I am ten years old.', 'I have ten years.', 'I make ten years.', 'My age have ten.'],
        correctAnswer: 'I am ten years old.',
        explanation: 'Em inglês a idade é expressa com o verbo To Be ("I am"), e NUNCA com o verbo "have"!',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p5-e2',
        type: 'word-order',
        prompt: 'Ordene a pergunta de idade:',
        options: ['old', 'How', 'you?', 'are'],
        correctAnswer: 'How old are you?',
        explanation: '"How old are you?" significa literalmente "Quão velho é você?", isto é, "Quantos anos você tem?".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p5-e3',
        type: 'fill-blank',
        prompt: 'Complete a sequência matemática simples: "Seven plus three equals ____."',
        options: ['ten', 'eight', 'nine', 'six'],
        correctAnswer: 'ten',
        explanation: '7 + 3 = 10 (seven plus three equals ten).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p5-e4',
        type: 'listening',
        prompt: 'Ouça o áudio e selecione a contagem correta:',
        audioPhrase: 'One, two, three, four, five!',
        options: [
          'One, two, three, four, five!',
          'One, two, six, eight, ten!',
          'Five, four, three, two, one!',
          'Seven, eight, nine, ten!'
        ],
        correctAnswer: 'One, two, three, four, five!',
        explanation: 'Contagem de um a cinco: 1, 2, 3, 4, 5.',
        skillCategory: 'listening'
      }
    ]
  },

  // 6. Cores Fundamentais
  {
    id: 'w1-p6',
    worldId: 1,
    phaseNumber: 6,
    title: 'Cores Fundamentais',
    subtitle: 'Red, Blue, Green & Descrevendo Objetos',
    pedagogicalObjective: 'Nomear e aplicar cores antes dos substantivos para descrever o mundo.',
    type: 'lesson',
    icon: 'palette',
    cefrLevel: 'A1',
    theorySummary: [
      'Cores principais: Red (vermelho), Blue (azul), Yellow (amarelo), Green (verde), Black (preto), White (branco), Orange (laranja), Purple (roxo).',
      'REGRA DE OURO: Em inglês, a cor (adjetivo) vem ANTES do substantivo: "A blue car" (um carro azul).',
      'As cores não têm plural: "two blue cars" (e nunca "blues cars").'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p6-e1',
        type: 'multiple-choice',
        visualEmoji: '🚗',
        prompt: 'Qual é a tradução correta de "Um carro vermelho"?',
        options: ['A red car', 'A car red', 'The reds car', 'A car of red'],
        correctAnswer: 'A red car',
        explanation: 'Em inglês, o adjetivo de cor sempre vem ANTES do substantivo: "a red car".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p6-e2',
        type: 'word-order',
        prompt: 'Organize as palavras para formar a descrição:',
        options: ['sky', 'The', 'is', 'blue.'],
        correctAnswer: 'The sky is blue.',
        explanation: '"The sky is blue" significa "O céu é azul".',
        skillCategory: 'writing'
      },
      {
        id: 'w1-p6-e3',
        type: 'fill-blank',
        prompt: 'Qual cor resulta da mistura de amarelo e azul?',
        contextSentence: 'Yellow and blue make ____.',
        options: ['green', 'red', 'purple', 'black'],
        correctAnswer: 'green',
        explanation: 'Amarelo + Azul = Verde (Green).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p6-e4',
        type: 'listening',
        prompt: 'Ouça a frase e marque a opção falada:',
        audioPhrase: 'I have a white cat and a black dog.',
        options: [
          'I have a white cat and a black dog.',
          'I have a red cat and a blue dog.',
          'He has a white cat and a green dog.',
          'We have a black cat and a white bird.'
        ],
        correctAnswer: 'I have a white cat and a black dog.',
        explanation: '"I have a white cat and a black dog" significa "Eu tenho um gato branco e um cachorro preto".',
        skillCategory: 'listening'
      }
    ]
  },

  // 7. Objetos de Estudo & Sala de Aula
  {
    id: 'w1-p7',
    worldId: 1,
    phaseNumber: 7,
    title: 'Objetos de Estudo & Sala de Aula',
    subtitle: 'Book, Pen, Desk & Material Escolar',
    pedagogicalObjective: 'Identificar itens essenciais de estudo e construir frases com "This is...".',
    type: 'lesson',
    icon: 'book',
    cefrLevel: 'A1',
    theorySummary: [
      'Vocabulário: Book (livro), Pen (caneta), Pencil (lápis), Notebook (caderno), Desk (carteira/mesa), Backpack (mochila), Computer (computador).',
      '"This is..." significa "Isto é..." ou "Este(a) é..." para objetos próximos.',
      'Exemplo: "This is my English book."'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p7-e1',
        type: 'multiple-choice',
        visualEmoji: '✏️',
        prompt: 'Qual objeto você utiliza para escrever com grafite e pode apagar?',
        options: ['Pencil', 'Pen', 'Book', 'Desk'],
        correctAnswer: 'Pencil',
        explanation: '"Pencil" é lápis, enquanto "Pen" é caneta.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p7-e2',
        type: 'word-order',
        visualEmoji: '📚',
        prompt: 'Ordene a frase indicando o livro de inglês:',
        options: ['English', 'is', 'book.', 'This', 'my'],
        correctAnswer: 'This is my English book.',
        explanation: '"This is my English book." significa "Este é meu livro de inglês.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p7-e3',
        type: 'translate',
        prompt: 'Traduza: "Onde está minha caneta azul?"',
        options: [
          'Where is my blue pen?',
          'What is my pen blue?',
          'Who has my blue book?',
          'Here is my blue pen?'
        ],
        correctAnswer: 'Where is my blue pen?',
        explanation: '"Where is my blue pen?" usa "Where" (onde) e a ordem adjetivo-substantivo "blue pen".',
        skillCategory: 'reading'
      },
      {
        id: 'w1-p7-e4',
        type: 'listening',
        prompt: 'Ouça o áudio e selecione a ordem dada pelo professor:',
        audioPhrase: 'Please open your notebook.',
        options: [
          'Please open your notebook.',
          'Please close your backpack.',
          'Please take your pencil.',
          'Open your blue book.'
        ],
        correctAnswer: 'Please open your notebook.',
        explanation: '"Please open your notebook." significa "Por favor, abra seu caderno.".',
        skillCategory: 'listening'
      }
    ]
  },

  // 8. Pronomes Pessoais (Sujeito)
  {
    id: 'w1-p8',
    worldId: 1,
    phaseNumber: 8,
    title: 'Pronomes Pessoais (Sujeito)',
    subtitle: 'I, You, He, She, It, We, They',
    pedagogicalObjective: 'Compreender quem pratica a ação na oração em inglês.',
    type: 'lesson',
    icon: 'users',
    cefrLevel: 'A1',
    theorySummary: [
      'Pronomes: I (eu - SEMPRE maiúsculo), You (você/vocês).',
      'He (ele - pessoas masculinas), She (ela - pessoas femininas).',
      'It (ele/ela - usado para 1 coisa, objeto, ideia ou animal).',
      'We (nós), They (eles/elas - tanto para pessoas quanto para coisas no plural).'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p8-e1',
        type: 'multiple-choice',
        prompt: 'Qual pronome pessoal substitui o sujeito em "Maria and I are friends"?',
        options: ['We', 'They', 'You', 'She'],
        correctAnswer: 'We',
        explanation: '"Maria e eu" equivale a "nós", ou seja, "We".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p8-e2',
        type: 'fill-blank',
        prompt: 'Complete a frase referindo-se a um carro:',
        contextSentence: 'The car is new. ____ is red.',
        options: ['It', 'He', 'She', 'They'],
        correctAnswer: 'It',
        explanation: 'Para objetos no singular usamos o pronome neutro "It".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p8-e3',
        type: 'word-order',
        prompt: 'Ordene a frase:',
        options: ['are', 'They', 'students.', 'good'],
        correctAnswer: 'They are good students.',
        explanation: '"They are good students." significa "Eles são bons estudantes.".',
        skillCategory: 'writing'
      },
      {
        id: 'w1-p8-e4',
        type: 'multiple-choice',
        prompt: 'Qual é o pronome correto para se referir a "The boys" (os meninos)?',
        options: ['They', 'He', 'We', 'It'],
        correctAnswer: 'They',
        explanation: 'Para a terceira pessoa do plural (eles/elas), usamos sempre "They".',
        skillCategory: 'grammar'
      }
    ]
  },

  // 9. Verbo To Be: Presente Afirmativo
  {
    id: 'w1-p9',
    worldId: 1,
    phaseNumber: 9,
    title: 'Verbo To Be: Presente Afirmativo',
    subtitle: 'AM, IS, ARE & As Formas Contraídas',
    pedagogicalObjective: 'Conjugar com precisão o verbo ser/estar no presente afirmativo.',
    type: 'lesson',
    icon: 'check',
    cefrLevel: 'A1',
    theorySummary: [
      'O verbo To Be tem três formas no presente: AM, IS, ARE.',
      'I AM (I\'m)',
      'He / She / It IS (He\'s / She\'s / It\'s)',
      'You / We / They ARE (You\'re / We\'re / They\'re)',
      'Significa tanto "ser" quanto "estar", dependendo do contexto da frase.'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p9-e1',
        type: 'fill-blank',
        prompt: 'Complete com a forma correta do Verbo To Be:',
        contextSentence: 'She ____ a wonderful teacher.',
        options: ['is', 'are', 'am', 'be'],
        correctAnswer: 'is',
        explanation: 'Com a terceira pessoa do singular (He/She/It), usamos "is".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p9-e2',
        type: 'word-order',
        prompt: 'Monte a frase afirmativa:',
        options: ['We', 'ready', 'are', 'now.'],
        correctAnswer: 'We are ready now.',
        explanation: '"We are ready now." significa "Nós estamos prontos agora.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p9-e3',
        type: 'multiple-choice',
        prompt: 'Qual é a forma contraída correta de "I am happy"?',
        options: ["I'm happy", 'Im happy', "I'am happy", 'I are happy'],
        correctAnswer: "I'm happy",
        explanation: 'A contração padrão de "I am" é "I\'m" com apóstrofo.',
        skillCategory: 'writing'
      },
      {
        id: 'w1-p9-e4',
        type: 'listening',
        prompt: 'Ouça o áudio e selecione a frase ouvida:',
        audioPhrase: 'They are my best friends.',
        options: [
          'They are my best friends.',
          'He is my best friend.',
          'We are great friends.',
          'You are my new friend.'
        ],
        correctAnswer: 'They are my best friends.',
        explanation: '"They are my best friends." significa "Eles são meus melhores amigos.".',
        skillCategory: 'listening'
      }
    ]
  },

  // 10. [Baú da Sabedoria I] Revisão & Bônus de Gemas
  {
    id: 'w1-p10',
    worldId: 1,
    phaseNumber: 10,
    title: 'Baú da Sabedoria I: Conquista Inicial',
    subtitle: 'Revisão das 9 primeiras lições e bônus de gemas!',
    pedagogicalObjective: 'Consolidar saudações, números, pronomes e o verbo To Be conquistando seu primeiro baú.',
    type: 'chest',
    icon: 'gift',
    cefrLevel: 'A1',
    theorySummary: [
      'Parabéns! Você concluiu 1/3 do Mundo 1.',
      'Você já aprendeu: sons do alfabeto, cumprimentos a qualquer hora do dia, apresentações, cortesia, números de 1 a 10, cores, objetos de sala de aula, pronomes e o verbo To Be afirmativo.',
      'Resolva estes 3 desafios de consolidação para abrir o baú!'
    ],
    xpReward: 60,
    gemsReward: 30,
    exercises: [
      {
        id: 'w1-p10-e1',
        type: 'multiple-choice',
        prompt: 'Qual das frases abaixo está 100% correta?',
        options: [
          'He is ten years old and has a blue car.',
          'He have ten years and has a car blue.',
          'He is ten years and has blue a car.',
          'He are ten years old with a blue car.'
        ],
        correctAnswer: 'He is ten years old and has a blue car.',
        explanation: 'Usa idade com "is", número "ten", e adjetivo antes do substantivo "a blue car".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p10-e2',
        type: 'word-order',
        prompt: 'Monte o diálogo de apresentação:',
        options: ['Hello,', 'is', 'Lucas.', 'name', 'my'],
        correctAnswer: 'Hello, my name is Lucas.',
        explanation: '"Hello, my name is Lucas." é a frase perfeita de apresentação.',
        skillCategory: 'speaking'
      },
      {
        id: 'w1-p10-e3',
        type: 'listening',
        prompt: 'Ouça e comemore a abertura do baú!',
        audioPhrase: 'Congratulations, you opened the first wisdom chest!',
        options: [
          'Congratulations, you opened the first wisdom chest!',
          'Hello, you completed the first lesson today!',
          'Congratulations, see you tomorrow afternoon!',
          'Good morning, welcome to the second world!'
        ],
        correctAnswer: 'Congratulations, you opened the first wisdom chest!',
        explanation: 'Excelente! Você completou o primeiro terço da jornada com louvor.',
        skillCategory: 'listening'
      }
    ]
  },

  // 11. Números de 11 a 30 & O Sufixo -TEEN
  {
    id: 'w1-p11',
    worldId: 1,
    phaseNumber: 11,
    title: 'Números de 11 a 30 & Sufixo -TEEN',
    subtitle: 'Eleven, Twelve, Thirteen... Twenty!',
    pedagogicalObjective: 'Dominar a contagem de 11 a 30 e distinguir o som de -teen e -ty.',
    type: 'lesson',
    icon: 'hash',
    cefrLevel: 'A1',
    theorySummary: [
      '11-eleven, 12-twelve.',
      '13 a 19 terminam em -TEEN: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen.',
      '20 é "twenty", e a partir daí combinamos: twenty-one, twenty-two... 30 é "thirty".',
      'DICA FONÉTICA: Em "thir-TEEN" o som forte fica no final. Em "THIR-ty" fica no começo!'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p11-e1',
        type: 'multiple-choice',
        prompt: 'Como se escreve o número 15 em inglês?',
        options: ['Fifteen', 'Fiveteen', 'Fifty', 'Fifthi'],
        correctAnswer: 'Fifteen',
        explanation: 'O número 15 é "Fifteen" (atenção à mudança de five para fif-).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p11-e2',
        type: 'word-order',
        prompt: 'Ordene a frase indicando a quantidade de alunos:',
        options: ['twenty', 'are', 'There', 'students.'],
        correctAnswer: 'There are twenty students.',
        explanation: '"There are twenty students." significa "Há vinte estudantes.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p11-e3',
        type: 'fill-blank',
        prompt: 'Qual número vem imediatamente após nineteen (19)?',
        contextSentence: 'Eighteen, nineteen, ____.',
        options: ['twenty', 'twelve', 'thirty', 'twenty-one'],
        correctAnswer: 'twenty',
        explanation: '18, 19, 20 (twenty).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p11-e4',
        type: 'listening',
        prompt: 'Ouça o número falado com atenção na entonação:',
        audioPhrase: 'She is thirteen years old.',
        options: [
          'She is thirteen years old.',
          'She is thirty years old.',
          'She is three years old.',
          'She is fifteen years old.'
        ],
        correctAnswer: 'She is thirteen years old.',
        explanation: 'A entonação prolongada no final (-TEEN) indica 13 (thirteen) e não 30 (thirty).',
        skillCategory: 'listening'
      }
    ]
  },

  // 12. Verbo To Be: Forma Negativa
  {
    id: 'w1-p12',
    worldId: 1,
    phaseNumber: 12,
    title: 'Verbo To Be: Forma Negativa',
    subtitle: 'NOT, Isn\'t & Aren\'t',
    pedagogicalObjective: 'Negar frases com segurança adicionando "not" após o verbo To Be.',
    type: 'lesson',
    icon: 'x-circle',
    cefrLevel: 'A1',
    theorySummary: [
      'Para negar com o verbo To Be, basta colocar a palavra "NOT" depois dele.',
      'I am NOT (I\'m not)',
      'He is NOT = He isn\'t (ou He\'s not)',
      'She is NOT = She isn\'t',
      'They are NOT = They aren\'t (ou They\'re not)'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p12-e1',
        type: 'multiple-choice',
        prompt: 'Qual é a forma negativa correta de "He is tired" (Ele está cansado)?',
        options: ["He isn't tired.", "He not is tired.", "He don't tired.", "He no is tired."],
        correctAnswer: "He isn't tired.",
        explanation: 'A negação correta é "He is not tired" ou a forma contraída "He isn\'t tired".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p12-e2',
        type: 'word-order',
        prompt: 'Monte a frase negativa:',
        options: ['at', 'not', 'We', 'are', 'school.'],
        correctAnswer: 'We are not at school.',
        explanation: '"We are not at school." significa "Nós não estamos na escola.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p12-e3',
        type: 'fill-blank',
        prompt: 'Complete a frase negativa na primeira pessoa:',
        contextSentence: 'I ____ not hungry right now.',
        options: ['am', 'is', 'are', 'do'],
        correctAnswer: 'am',
        explanation: 'Com "I", a única forma permitida do verbo To Be é "am".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p12-e4',
        type: 'translate',
        prompt: 'Traduza: "Eles não são meus professores."',
        options: [
          "They aren't my teachers.",
          "They not are my teachers.",
          "They don't my teachers.",
          "They isn't my teachers."
        ],
        correctAnswer: "They aren't my teachers.",
        explanation: 'Com "They" usamos "aren\'t" ("are not").',
        skillCategory: 'reading'
      }
    ]
  },

  // 13. Verbo To Be: Perguntas & Respostas Curtas
  {
    id: 'w1-p13',
    worldId: 1,
    phaseNumber: 13,
    title: 'Perguntas & Respostas Curtas',
    subtitle: 'Are you ready? Yes, I am!',
    pedagogicalObjective: 'Fazer perguntas invertendo a ordem do verbo To Be e responder de forma curta.',
    type: 'lesson',
    icon: 'help-circle',
    cefrLevel: 'A1',
    theorySummary: [
      'REGRA DE INVERSÃO: Para transformar em pergunta, o verbo To Be passa para a FRENTE do sujeito!',
      'Afirmativa: "You are happy." -> Pergunta: "ARE you happy?"',
      'Afirmativa: "She is your sister." -> Pergunta: "IS she your sister?"',
      'Respostas curtas: "Yes, I am." / "No, I\'m not." | "Yes, she is." / "No, she isn\'t."'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p13-e1',
        type: 'multiple-choice',
        prompt: 'Como transformar "She is ready" em uma pergunta?',
        options: ['Is she ready?', 'She is ready?', 'Does she ready?', 'Are she ready?'],
        correctAnswer: 'Is she ready?',
        explanation: 'O verbo "is" passa para a frente do sujeito "she": "Is she ready?".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p13-e2',
        type: 'word-order',
        prompt: 'Ordene a pergunta interrogativa:',
        options: ['from', 'Are', 'Brazil?', 'you'],
        correctAnswer: 'Are you from Brazil?',
        explanation: '"Are you from Brazil?" significa "Você é do Brasil?".',
        skillCategory: 'speaking'
      },
      {
        id: 'w1-p13-e3',
        type: 'fill-blank',
        prompt: 'Complete a resposta curta afirmativa: "Are you a student?" -> "Yes, I ____."',
        options: ['am', 'is', 'are', 'do'],
        correctAnswer: 'am',
        explanation: 'Na resposta curta afirmativa dizemos "Yes, I am." (nunca contraído "Yes, I\'m" no final da frase).',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p13-e4',
        type: 'listening',
        prompt: 'Ouça a pergunta e selecione a opção ouvida:',
        audioPhrase: 'Is he your English teacher?',
        options: [
          'Is he your English teacher?',
          'Is she your English teacher?',
          'Are they your English teachers?',
          'Who is your English teacher?'
        ],
        correctAnswer: 'Is he your English teacher?',
        explanation: '"Is he your English teacher?" significa "Ele é seu professor de inglês?".',
        skillCategory: 'listening'
      }
    ]
  },

  // 14. Artigos Indefinidos: A vs AN
  {
    id: 'w1-p14',
    worldId: 1,
    phaseNumber: 14,
    title: 'Artigos Indefinidos: A vs AN',
    subtitle: 'A car vs An apple: o segredo do som',
    pedagogicalObjective: 'Dominar o uso de A e AN de acordo com o som vocálico da palavra seguinte.',
    type: 'lesson',
    icon: 'tag',
    cefrLevel: 'A1',
    theorySummary: [
      'Ambos significam "um" ou "uma" no singular.',
      'Use "A" antes de som de consoante: a car, a book, a dog, a house.',
      'Use "AN" antes de som de vogal: an apple, an elephant, an orange, an ice cream.',
      'Atenção ao som: "an hour" (o H é mudo, som de vogal) e "a university" (o U soa como "you", som consonantal).'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p14-e1',
        type: 'multiple-choice',
        visualEmoji: '🍎',
        prompt: 'Qual palavra deve ser precedida pelo artigo "AN"?',
        options: ['Apple', 'Book', 'Computer', 'Dog'],
        correctAnswer: 'Apple',
        explanation: '"Apple" começa com som vocálico (/æ/), portanto usamos "an apple".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p14-e2',
        type: 'word-order',
        prompt: 'Monte a frase com o artigo correto:',
        options: ['have', 'orange.', 'an', 'I'],
        correctAnswer: 'I have an orange.',
        explanation: '"I have an orange." significa "Eu tenho uma laranja.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p14-e3',
        type: 'fill-blank',
        prompt: 'Complete: "He is ____ doctor and she is ____ engineer."',
        contextSentence: 'He is [a] doctor and she is [an] engineer.',
        options: ['a / an', 'an / a', 'a / a', 'an / an'],
        correctAnswer: 'a / an',
        explanation: '"a doctor" (som consonantal /d/) e "an engineer" (som vocálico /e/).',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p14-e4',
        type: 'translate',
        prompt: 'Traduza para o inglês: "Ela tem um guarda-chuva azul."',
        options: [
          'She has a blue umbrella.',
          'She has an blue umbrella.',
          'She has an umbrella blue.',
          'She have a blue umbrella.'
        ],
        correctAnswer: 'She has a blue umbrella.',
        explanation: 'Embora umbrella comece com som de vogal, a palavra que vem imediatamente após o artigo é "blue" (som consonantal), então usamos "a blue umbrella".',
        skillCategory: 'reading'
      }
    ]
  },

  // 15. Membros da Família
  {
    id: 'w1-p15',
    worldId: 1,
    phaseNumber: 15,
    title: 'Membros da Família',
    subtitle: 'Father, Mother, Brother & Parents',
    pedagogicalObjective: 'Nomear os membros da família e descrever laços familiares.',
    type: 'lesson',
    icon: 'heart',
    cefrLevel: 'A1',
    theorySummary: [
      'Father (pai) / Dad (papai), Mother (mãe) / Mom (mamãe).',
      'Brother (irmão), Sister (irmã).',
      'Son (filho), Daughter (filha).',
      'CUIDADO: "Parents" significa PAIS (pai e mãe), e NÃO parentes (que é "relatives")!'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p15-e1',
        type: 'multiple-choice',
        visualEmoji: '👨‍👩‍👧',
        prompt: 'O que significa a palavra "Parents" em inglês?',
        options: ['Pais (pai e mãe)', 'Parentes em geral', 'Primos', 'Padrinhos'],
        correctAnswer: 'Pais (pai e mãe)',
        explanation: '"Parents" é um falso amigo clássico: significa especificamente pai e mãe!',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p15-e2',
        type: 'word-order',
        prompt: 'Ordene a apresentação familiar:',
        options: ['is', 'This', 'sister,', 'my', 'Ana.'],
        correctAnswer: 'This is my sister, Ana.',
        explanation: '"This is my sister, Ana." significa "Esta é minha irmã, Ana.".',
        skillCategory: 'writing'
      },
      {
        id: 'w1-p15-e3',
        type: 'fill-blank',
        prompt: 'O filho de meu pai é meu:',
        contextSentence: 'My father\'s son is my ____.',
        options: ['brother', 'sister', 'daughter', 'mother'],
        correctAnswer: 'brother',
        explanation: 'O filho do seu pai é seu irmão (brother).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p15-e4',
        type: 'listening',
        prompt: 'Ouça o áudio e selecione a frase ouvida:',
        audioPhrase: 'I love my family very much.',
        options: [
          'I love my family very much.',
          'I live with my family today.',
          'This is my family at home.',
          'My family has three children.'
        ],
        correctAnswer: 'I love my family very much.',
        explanation: '"I love my family very much." significa "Eu amo muito minha família.".',
        skillCategory: 'listening'
      }
    ]
  },

  // 16. Países, Nacionalidades e Origem
  {
    id: 'w1-p16',
    worldId: 1,
    phaseNumber: 16,
    title: 'Países & Nacionalidades',
    subtitle: 'Where are you from? I am from Brazil',
    pedagogicalObjective: 'Perguntar e responder sobre nacionalidade e país de origem.',
    type: 'lesson',
    icon: 'globe',
    cefrLevel: 'A1',
    theorySummary: [
      'Pergunta de origem: "Where are you from?" (De onde você é?).',
      'Resposta com país: "I am from Brazil / I am from the USA / from Japan."',
      'Resposta com nacionalidade: "I am Brazilian / I am American / I am Japanese."',
      'Em inglês, nacionalidades SEMPRE começam com letra maiúscula: Brazilian, English, French.'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p16-e1',
        type: 'multiple-choice',
        visualEmoji: '🌎',
        prompt: 'Como responder à pergunta "Where are you from?"?',
        options: ['I am from Brazil.', 'I have from Brazil.', 'I live in nationality.', 'My from is Brazil.'],
        correctAnswer: 'I am from Brazil.',
        explanation: 'Usamos a preposição "from" (de/origem) com o verbo To Be: "I am from Brazil".',
        skillCategory: 'speaking'
      },
      {
        id: 'w1-p16-e2',
        type: 'word-order',
        prompt: 'Monte a pergunta de origem:',
        options: ['are', 'Where', 'from?', 'you'],
        correctAnswer: 'Where are you from?',
        explanation: '"Where are you from?" é a expressão padrão para saber de onde alguém é.',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p16-e3',
        type: 'fill-blank',
        prompt: 'Complete com a nacionalidade correta:',
        contextSentence: 'She was born in Japan. She is ____.',
        options: ['Japanese', 'Japan', 'Japonese', 'Japans'],
        correctAnswer: 'Japanese',
        explanation: 'A nacionalidade de quem nasce no Japão é "Japanese".',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p16-e4',
        type: 'translate',
        prompt: 'Traduza: "Nós somos brasileiros e falamos português."',
        options: [
          'We are Brazilian and we speak Portuguese.',
          'We have Brazilian and speak Portugal.',
          'They are Brazilian and speak English.',
          'We are of Brazil and speak language.'
        ],
        correctAnswer: 'We are Brazilian and we speak Portuguese.',
        explanation: '"We are Brazilian and we speak Portuguese" expressa nacionalidade e idioma.',
        skillCategory: 'reading'
      }
    ]
  },

  // 17. Animais de Estimação & Natureza
  {
    id: 'w1-p17',
    worldId: 1,
    phaseNumber: 17,
    title: 'Animais de Estimação & Natureza',
    subtitle: 'Dog, Cat, Bird & Pets',
    pedagogicalObjective: 'Identificar animais cotidianos e usar o verbo "have" com animais.',
    type: 'lesson',
    icon: 'feather',
    cefrLevel: 'A1',
    theorySummary: [
      'Pets (animais de estimação): Dog (cachorro), Cat (gato), Bird (pássaro), Fish (peixe), Rabbit (coelho).',
      'Animais maiores: Horse (cavalo), Cow (vaca), Lion (leão).',
      'Para dizer que tem um animal de estimação: "I have a pet dog."'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p17-e1',
        type: 'multiple-choice',
        visualEmoji: '🐦',
        prompt: 'Qual destes animais tem penas e asas?',
        options: ['Bird', 'Dog', 'Cat', 'Fish'],
        correctAnswer: 'Bird',
        explanation: '"Bird" significa pássaro.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p17-e2',
        type: 'word-order',
        visualEmoji: '🐕',
        prompt: 'Ordene a frase descritiva do animal de estimação:',
        options: ['brown', 'I', 'dog.', 'have', 'a'],
        correctAnswer: 'I have a brown dog.',
        explanation: '"I have a brown dog." significa "Eu tenho um cachorro marrom.".',
        skillCategory: 'writing'
      },
      {
        id: 'w1-p17-e3',
        type: 'fill-blank',
        prompt: 'Complete: "The ____ swims in the aquarium."',
        options: ['fish', 'horse', 'rabbit', 'dog'],
        correctAnswer: 'fish',
        explanation: '"Fish" (peixe) nada (swims) no aquário.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p17-e4',
        type: 'listening',
        prompt: 'Ouça o áudio e selecione a frase ouvida:',
        audioPhrase: 'My cat is very quiet and friendly.',
        options: [
          'My cat is very quiet and friendly.',
          'My dog is very noisy and happy.',
          'The bird is quiet in the morning.',
          'My cat is sleeping right now.'
        ],
        correctAnswer: 'My cat is very quiet and friendly.',
        explanation: '"My cat is very quiet and friendly." significa "Meu gato é muito tranquilo e amigável.".',
        skillCategory: 'listening'
      }
    ]
  },

  // 18. Adjetivos Básicos e Opostos
  {
    id: 'w1-p18',
    worldId: 1,
    phaseNumber: 18,
    title: 'Adjetivos Básicos & Pares Opostos',
    subtitle: 'Big vs Small, Hot vs Cold',
    pedagogicalObjective: 'Descrever qualidades e estados contrastantes em inglês.',
    type: 'lesson',
    icon: 'sliders',
    cefrLevel: 'A1',
    theorySummary: [
      'Pares opostos fundamentais: Big (grande) / Small (pequeno)',
      'Hot (quente) / Cold (frio)',
      'Happy (feliz) / Sad (triste)',
      'Fast (rápido) / Slow (lento)',
      'Good (bom) / Bad (ruim)',
      'Old (velho) / New (novo ou jovem)'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p18-e1',
        type: 'multiple-choice',
        prompt: 'Qual é o oposto exato da palavra "Hot"?',
        options: ['Cold', 'Big', 'Fast', 'Sad'],
        correctAnswer: 'Cold',
        explanation: 'Hot (quente) tem como oposto Cold (frio).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p18-e2',
        type: 'word-order',
        prompt: 'Monte a frase com o adjetivo antes do substantivo:',
        options: ['is', 'house.', 'a', 'This', 'big'],
        correctAnswer: 'This is a big house.',
        explanation: '"This is a big house." significa "Esta é uma casa grande.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p18-e3',
        type: 'fill-blank',
        prompt: 'Complete com o oposto de "happy": "He is crying because he is ____."',
        options: ['sad', 'fast', 'hot', 'new'],
        correctAnswer: 'sad',
        explanation: 'Se ele está chorando, ele está triste (sad).',
        skillCategory: 'reading'
      },
      {
        id: 'w1-p18-e4',
        type: 'translate',
        prompt: 'Traduza: "O carro é muito rápido."',
        options: ['The car is very fast.', 'The car is very slow.', 'The car has fast.', 'The car is very big.'],
        correctAnswer: 'The car is very fast.',
        explanation: '"Fast" significa rápido.',
        skillCategory: 'reading'
      }
    ]
  },

  // 19. Plurais Regulares & Irregulares Básicos
  {
    id: 'w1-p19',
    worldId: 1,
    phaseNumber: 19,
    title: 'Plurais: Regulares & Irregulares',
    subtitle: 'Cats, Books, Children & People',
    pedagogicalObjective: 'Formar plurais regulares com -s e reconhecer os plurais irregulares essenciais.',
    type: 'lesson',
    icon: 'copy',
    cefrLevel: 'A1',
    theorySummary: [
      'REGRA GERAL: Adiciona-se -s: one book -> two books, one dog -> two dogs.',
      'PLURAIS IRREGULARES CRUCIAIS:',
      'One child -> Two children (crianças)',
      'One man -> Two men (homens)',
      'One woman -> Two women (mulheres - pronuncia-se "wí-min")',
      'One person -> Two people (pessoas)'
    ],
    xpReward: 35,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p19-e1',
        type: 'multiple-choice',
        prompt: 'Qual é a forma plural correta de "child" (criança)?',
        options: ['Children', 'Childs', 'Childrens', 'Childes'],
        correctAnswer: 'Children',
        explanation: 'O plural de "child" é irregular: "children" (sem "s" no final!).',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p19-e2',
        type: 'word-order',
        prompt: 'Ordene a frase no plural:',
        options: ['people', 'There', 'five', 'are', 'here.'],
        correctAnswer: 'There are five people here.',
        explanation: '"There are five people here." significa "Há cinco pessoas aqui.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p19-e3',
        type: 'fill-blank',
        prompt: 'Complete o plural: "One woman, three ____."',
        options: ['women', 'womans', 'womens', 'woman'],
        correctAnswer: 'women',
        explanation: 'O plural de "woman" é "women" (/ˈwɪmɪn/).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p19-e4',
        type: 'listening',
        prompt: 'Ouça o áudio e identifique a frase com plural:',
        audioPhrase: 'The children are playing in the park.',
        options: [
          'The children are playing in the park.',
          'The child is playing in the school.',
          'The people are walking in the street.',
          'Two boys are studying in the room.'
        ],
        correctAnswer: 'The children are playing in the park.',
        explanation: '"The children are playing in the park." significa "As crianças estão brincando no parque.".',
        skillCategory: 'listening'
      }
    ]
  },

  // 20. [Baú da Sabedoria II] Ponto de Verificação & Gemas
  {
    id: 'w1-p20',
    worldId: 1,
    phaseNumber: 20,
    title: 'Baú da Sabedoria II: Conquistador',
    subtitle: 'Revisão das lições 11 a 19 e bônus especial!',
    pedagogicalObjective: 'Consolidar números até 30, negações, perguntas, família, países e plurais com baú de gemas.',
    type: 'chest',
    icon: 'gift',
    cefrLevel: 'A1',
    theorySummary: [
      'Incrível! Você alcançou 20 lições completadas no Mundo 1!',
      'Você já domina números de 1 a 30, como negar e perguntar com To Be, regras de A/AN, vocabulário de família, nacionalidades, animais, adjetivos opostos e plurais irregulares.',
      'Abra o segundo baú para colher suas recompensas!'
    ],
    xpReward: 70,
    gemsReward: 35,
    exercises: [
      {
        id: 'w1-p20-e1',
        type: 'multiple-choice',
        prompt: 'Qual frase contém o plural irregular e a nacionalidade corretos?',
        options: [
          'The two women are Brazilian and have three children.',
          'The two womans are Brazilian and have three childs.',
          'The two women is brazilian and has three childrens.',
          'The two people are of Brazil with child.'
        ],
        correctAnswer: 'The two women are Brazilian and have three children.',
        explanation: 'Perfeito! "women" e "children" são os plurais corretos, e "Brazilian" com maiúscula.',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p20-e2',
        type: 'word-order',
        prompt: 'Monte a frase de desafio do baú:',
        options: ['My', 'parents', 'from', 'Canada.', 'are'],
        correctAnswer: 'My parents are from Canada.',
        explanation: '"My parents are from Canada." significa "Meus pais são do Canadá.".',
        skillCategory: 'writing'
      },
      {
        id: 'w1-p20-e3',
        type: 'listening',
        prompt: 'Ouça e desbloqueie o segundo baú:',
        audioPhrase: 'You are doing an amazing job learning English!',
        options: [
          'You are doing an amazing job learning English!',
          'You are completing the second level today!',
          'Good afternoon, you are my best friend!',
          'We are studying English every afternoon!'
        ],
        correctAnswer: 'You are doing an amazing job learning English!',
        explanation: 'Sensacional! O segundo baú foi liberado com sucesso.',
        skillCategory: 'listening'
      }
    ]
  },

  // 21. Alimentos & Bebidas Cotidianas
  {
    id: 'w1-p21',
    worldId: 1,
    phaseNumber: 21,
    title: 'Alimentos & Bebidas do Dia a Dia',
    subtitle: 'Water, Bread, Coffee & I like...',
    pedagogicalObjective: 'Pedir e falar sobre refeições básicas usando os verbos "eat" e "drink".',
    type: 'lesson',
    icon: 'coffee',
    cefrLevel: 'A1',
    theorySummary: [
      'Bebidas: Water (água), Coffee (café), Tea (chá), Milk (leite), Juice (suco).',
      'Comidas: Bread (pão), Cheese (queijo), Apple (maçã), Rice (arroz), Chicken (frango), Egg (ovo).',
      'Verbos de consumo: EAT (comer) e DRINK (beber).',
      'Expressando preferência: "I like coffee" (Eu gosto de café).'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p21-e1',
        type: 'multiple-choice',
        visualEmoji: '☕',
        prompt: 'Qual verbo completa a frase: "I ____ coffee with milk in the morning"?',
        options: ['drink', 'eat', 'sleep', 'read'],
        correctAnswer: 'drink',
        explanation: 'Para líquidos usamos o verbo "drink" (beber).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p21-e2',
        type: 'word-order',
        visualEmoji: '🍞',
        prompt: 'Monte a frase sobre o café da manhã:',
        options: ['eat', 'and', 'bread', 'cheese.', 'I'],
        correctAnswer: 'I eat bread and cheese.',
        explanation: '"I eat bread and cheese." significa "Eu como pão e queijo.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p21-e3',
        type: 'fill-blank',
        prompt: 'Complete o pedido no restaurante:',
        contextSentence: 'A glass of ____, please.',
        options: ['water', 'bread', 'rice', 'chicken'],
        correctAnswer: 'water',
        explanation: '"A glass of water, please" significa "Um copo de água, por favor".',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p21-e4',
        type: 'translate',
        prompt: 'Traduza: "Eu gosto de maçãs vermelhas."',
        options: ['I like red apples.', 'I eat apples red.', 'I drink red apples.', 'I have like apples red.'],
        correctAnswer: 'I like red apples.',
        explanation: '"I like red apples" usa a ordem correta "red apples".',
        skillCategory: 'reading'
      }
    ]
  },

  // 22. Dias da Semana & Meses do Ano
  {
    id: 'w1-p22',
    worldId: 1,
    phaseNumber: 22,
    title: 'Dias da Semana & Meses',
    subtitle: 'Monday to Sunday, ON vs IN',
    pedagogicalObjective: 'Falar sobre os dias da semana, meses e usar as preposições temporais ON e IN.',
    type: 'lesson',
    icon: 'calendar',
    cefrLevel: 'A1',
    theorySummary: [
      'Dias da semana: Monday (segunda), Tuesday (terça), Wednesday (quarta), Thursday (quinta), Friday (sexta), Saturday (sábado), Sunday (domingo).',
      'REGRA DE PREPOSIÇÃO: Use sempre "ON" para dias da semana: "on Monday", "on Friday".',
      'Use sempre "IN" para meses: "in January", "in December".',
      'Todos os dias da semana e meses começam com LETRA MAIÚSCULA em inglês!'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p22-e1',
        type: 'multiple-choice',
        prompt: 'Qual preposição usamos antes dos dias da semana em inglês?',
        options: ['ON (ex: on Friday)', 'IN (ex: in Friday)', 'AT (ex: at Friday)', 'TO (ex: to Friday)'],
        correctAnswer: 'ON (ex: on Friday)',
        explanation: 'Para dias da semana a regra fixa é a preposição "ON" (on Monday, on Friday).',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p22-e2',
        type: 'word-order',
        prompt: 'Ordene a frase de rotina semanal:',
        options: ['English', 'study', 'I', 'Saturdays.', 'on'],
        correctAnswer: 'I study English on Saturdays.',
        explanation: '"I study English on Saturdays." significa "Eu estudo inglês aos sábados.".',
        skillCategory: 'writing'
      },
      {
        id: 'w1-p22-e3',
        type: 'fill-blank',
        visualEmoji: '📅',
        prompt: 'Qual é o primeiro dia do fim de semana?',
        contextSentence: 'The weekend begins on ____.',
        options: ['Saturday', 'Monday', 'Thursday', 'Tuesday'],
        correctAnswer: 'Saturday',
        explanation: 'O fim de semana (weekend) começa no sábado (Saturday).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p22-e4',
        type: 'listening',
        prompt: 'Ouça o áudio e identifique a frase dita:',
        audioPhrase: 'My birthday is in September.',
        options: [
          'My birthday is in September.',
          'My birthday is on Sunday.',
          'My class is in December.',
          'My vacation is on Monday.'
        ],
        correctAnswer: 'My birthday is in September.',
        explanation: '"My birthday is in September." significa "Meu aniversário é em setembro.".',
        skillCategory: 'listening'
      }
    ]
  },

  // 23. As Horas & Momentos do Dia
  {
    id: 'w1-p23',
    worldId: 1,
    phaseNumber: 23,
    title: 'As Horas & Momentos do Dia',
    subtitle: 'What time is it? It is 8 o\'clock',
    pedagogicalObjective: 'Perguntar e dizer as horas e os períodos do dia em inglês.',
    type: 'lesson',
    icon: 'clock',
    cefrLevel: 'A1',
    theorySummary: [
      'Para perguntar a hora: "What time is it?" (Que horas são?).',
      'Para horas exatas usamos "o\'clock": "It is 8 o\'clock" (São 8 horas em ponto).',
      'Para horas compostas lemos os números diretamente: "It is 2:30" (two-thirty) ou "It is 5:15" (five-fifteen).',
      'Períodos: In the morning (de manhã), in the afternoon (à tarde), at night (à noite).'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p23-e1',
        type: 'multiple-choice',
        visualEmoji: '⏰',
        prompt: 'Como se pergunta "Que horas são?" em inglês?',
        options: ['What time is it?', 'Which hour is it?', 'How many hours?', 'What clock is now?'],
        correctAnswer: 'What time is it?',
        explanation: '"What time is it?" é a pergunta padrão em todo o mundo de língua inglesa.',
        skillCategory: 'speaking'
      },
      {
        id: 'w1-p23-e2',
        type: 'word-order',
        prompt: 'Ordene a indicação das horas:',
        options: ["o'clock.", 'is', 'three', 'It'],
        correctAnswer: "It is three o'clock.",
        explanation: '"It is three o\'clock." significa "São três horas em ponto.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p23-e3',
        type: 'fill-blank',
        prompt: 'Complete com a preposição correta de período:',
        contextSentence: 'I sleep ____ night.',
        options: ['at', 'in', 'on', 'to'],
        correctAnswer: 'at',
        explanation: 'Dizemos "in the morning", "in the afternoon", mas "AT night".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p23-e4',
        type: 'translate',
        prompt: 'Traduza: "Minha aula é às nove horas da manhã."',
        options: [
          'My class is at nine in the morning.',
          'My class is on nine at morning.',
          'My class has nine hours morning.',
          'My lesson is to nine afternoon.'
        ],
        correctAnswer: 'My class is at nine in the morning.',
        explanation: 'Usamos "at" para horários pontuais e "in the morning" para o período da manhã.',
        skillCategory: 'reading'
      }
    ]
  },

  // 24. Verbos Fundamentais da Rotina
  {
    id: 'w1-p24',
    worldId: 1,
    phaseNumber: 24,
    title: 'Verbos Fundamentais da Rotina',
    subtitle: 'Wake up, Work, Study, Live & Speak',
    pedagogicalObjective: 'Expressar ações da rotina diária em primeira pessoa.',
    type: 'lesson',
    icon: 'activity',
    cefrLevel: 'A1',
    theorySummary: [
      'Verbos essenciais da rotina: Wake up (acordar), Sleep (dormir), Study (estudar), Work (trabalhar), Live (morar/viver), Speak (falar).',
      'No presente com I/You/We/They usamos o verbo na sua forma base: "I study English", "I live in Brazil", "I speak two languages".',
      '"Every day" significa "todos os dias".'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p24-e1',
        type: 'multiple-choice',
        prompt: 'Complete: "I ____ two languages: Portuguese and English."',
        options: ['speak', 'live', 'sleep', 'eat'],
        correctAnswer: 'speak',
        explanation: 'Para idiomas usamos o verbo "speak" (falar).',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p24-e2',
        type: 'word-order',
        prompt: 'Monte a frase de rotina diária:',
        options: ['day.', 'wake', 'early', 'every', 'I', 'up'],
        correctAnswer: 'I wake up early every day.',
        explanation: '"I wake up early every day." significa "Eu acordo cedo todos os dias.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p24-e3',
        type: 'fill-blank',
        prompt: 'Complete com onde você reside:',
        contextSentence: 'I ____ in a big city.',
        options: ['live', 'speak', 'eat', 'drink'],
        correctAnswer: 'live',
        explanation: '"Live in" significa viver ou morar em algum lugar.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p24-e4',
        type: 'speaking-repeat',
        prompt: 'Fale sua rotina em voz alta:',
        contextSentence: 'I study English every day because I want to be fluent.',
        audioPhrase: 'I study English every day because I want to be fluent.',
        correctAnswer: 'I study English every day because I want to be fluent.',
        explanation: 'Excelente! Frase completa e motivadora pronunciada com sucesso.',
        skillCategory: 'pronunciation'
      }
    ]
  },

  // 25. Preposições de Lugar (IN, ON, AT, UNDER)
  {
    id: 'w1-p25',
    worldId: 1,
    phaseNumber: 25,
    title: 'Preposições de Lugar',
    subtitle: 'IN, ON, AT, UNDER & Localização',
    pedagogicalObjective: 'Descrever onde pessoas e objetos estão localizados no espaço.',
    type: 'lesson',
    icon: 'map-pin',
    cefrLevel: 'A1',
    theorySummary: [
      'IN: Dentro de um espaço fechado ou delimitado: "in the box", "in the room", "in Brazil".',
      'ON: Sobre a superfície: "on the table", "on the floor", "on the wall".',
      'AT: Em um ponto ou local específico de atividade: "at home", "at school", "at work".',
      'UNDER: Embaixo ou debaixo de algo: "under the bed", "under the tree".'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p25-e1',
        type: 'multiple-choice',
        prompt: 'Onde está o livro quando dizemos "The book is ON the table"?',
        options: ['Em cima da mesa (sobre a superfície)', 'Debaixo da mesa', 'Dentro da mesa', 'Perto da mesa'],
        correctAnswer: 'Em cima da mesa (sobre a superfície)',
        explanation: '"ON" indica contato com a superfície superior.',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p25-e2',
        type: 'word-order',
        visualEmoji: '🛏️',
        prompt: 'Ordene a frase de localização:',
        options: ['cat', 'The', 'under', 'is', 'the', 'bed.'],
        correctAnswer: 'The cat is under the bed.',
        explanation: '"The cat is under the bed." significa "O gato está debaixo da cama.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p25-e3',
        type: 'fill-blank',
        prompt: 'Complete com a preposição correta para "em casa":',
        contextSentence: 'Right now, I am ____ home.',
        options: ['at', 'in', 'on', 'under'],
        correctAnswer: 'at',
        explanation: 'A expressão consagrada em inglês para "em casa" é "at home".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p25-e4',
        type: 'listening',
        prompt: 'Ouça onde estão as chaves:',
        audioPhrase: 'My keys are in my backpack.',
        options: [
          'My keys are in my backpack.',
          'My keys are on the desk.',
          'My books are in my backpack.',
          'My phone is under the chair.'
        ],
        correctAnswer: 'My keys are in my backpack.',
        explanation: '"My keys are in my backpack." significa "Minhas chaves estão dentro da minha mochila.".',
        skillCategory: 'listening'
      }
    ]
  },

  // 26. Palavras Interrogativas (WH- Questions)
  {
    id: 'w1-p26',
    worldId: 1,
    phaseNumber: 26,
    title: 'Palavras Interrogativas (WH-)',
    subtitle: 'What, Where, Who, When, Why & How',
    pedagogicalObjective: 'Perguntar sobre informações específicas usando as question words fundamentais.',
    type: 'lesson',
    icon: 'search',
    cefrLevel: 'A1',
    theorySummary: [
      'As palavras WH abrem perguntas buscando informações específicas:',
      'WHAT: O que / Qual ("What is your name?")',
      'WHERE: Onde ("Where do you live?")',
      'WHO: Quem ("Who is that person?")',
      'WHEN: Quando ("When is your class?")',
      'WHY: Por que ("Why are you here?") -> Responde-se com "Because..."',
      'HOW: Como ("How are you?")'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p26-e1',
        type: 'multiple-choice',
        prompt: 'Qual palavra interrogativa usamos para perguntar sobre lugares ("onde")?',
        options: ['Where', 'What', 'Who', 'When'],
        correctAnswer: 'Where',
        explanation: '"Where" significa "onde" ou "aonde".',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p26-e2',
        type: 'word-order',
        prompt: 'Monte a pergunta sobre residência:',
        options: ['do', 'Where', 'you', 'live?'],
        correctAnswer: 'Where do you live?',
        explanation: '"Where do you live?" significa "Onde você mora?".',
        skillCategory: 'speaking'
      },
      {
        id: 'w1-p26-e3',
        type: 'fill-blank',
        prompt: 'Complete para perguntar a identidade de alguém:',
        contextSentence: '____ is that girl over there?',
        options: ['Who', 'What', 'Where', 'When'],
        correctAnswer: 'Who',
        explanation: 'Para pessoas ("quem"), usamos "Who".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p26-e4',
        type: 'translate',
        prompt: 'Traduza: "Quando é a sua aula de inglês?"',
        options: [
          'When is your English class?',
          'Where is your English class?',
          'What time your English class?',
          'Who is your English lesson?'
        ],
        correctAnswer: 'When is your English class?',
        explanation: '"When" pergunta pelo tempo/data ("quando").',
        skillCategory: 'reading'
      }
    ]
  },

  // 27. Cômodos da Casa & Ambientes
  {
    id: 'w1-p27',
    worldId: 1,
    phaseNumber: 27,
    title: 'Cômodos da Casa & Ambientes',
    subtitle: 'Kitchen, Bedroom, Living Room & Home',
    pedagogicalObjective: 'Descrever os ambientes e cômodos de uma residência.',
    type: 'lesson',
    icon: 'home',
    cefrLevel: 'A1',
    theorySummary: [
      'Living room (sala de estar), Bedroom (quarto), Kitchen (cozinha), Bathroom (banheiro).',
      'Garden (jardim), Door (porta), Window (janela).',
      'Para dizer em qual cômodo está: "I am in the kitchen", "She is in her bedroom."'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p27-e1',
        type: 'multiple-choice',
        visualEmoji: '🍳',
        prompt: 'Em qual cômodo preparamos o café da manhã e guardamos a comida?',
        options: ['Kitchen', 'Bedroom', 'Bathroom', 'Garden'],
        correctAnswer: 'Kitchen',
        explanation: '"Kitchen" significa cozinha.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p27-e2',
        type: 'word-order',
        prompt: 'Ordene a frase sobre a localização na casa:',
        options: ['living', 'is', 'He', 'in', 'the', 'room.'],
        correctAnswer: 'He is in the living room.',
        explanation: '"He is in the living room." significa "Ele está na sala de estar.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p27-e3',
        type: 'fill-blank',
        prompt: 'Complete com o cômodo onde dormimos:',
        contextSentence: 'I sleep in my ____.',
        options: ['bedroom', 'kitchen', 'bathroom', 'door'],
        correctAnswer: 'bedroom',
        explanation: '"Bedroom" (cama + cômodo) é o quarto de dormir.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p27-e4',
        type: 'listening',
        prompt: 'Ouça o áudio e selecione a frase ouvida:',
        audioPhrase: 'Please close the window in the living room.',
        options: [
          'Please close the window in the living room.',
          'Please open the door in the kitchen.',
          'Close the bedroom door please.',
          'The window in the house is open.'
        ],
        correctAnswer: 'Please close the window in the living room.',
        explanation: '"Please close the window in the living room." significa "Por favor, feche a janela na sala de estar.".',
        skillCategory: 'listening'
      }
    ]
  },

  // 28. Vestuário & Roupas Básicas
  {
    id: 'w1-p28',
    worldId: 1,
    phaseNumber: 28,
    title: 'Vestuário & Roupas Básicas',
    subtitle: 'Shirt, Pants, Shoes & What are you wearing?',
    pedagogicalObjective: 'Identificar peças de vestuário e descrever o que está usando.',
    type: 'lesson',
    icon: 'shopping-bag',
    cefrLevel: 'A1',
    theorySummary: [
      'Peças de vestuário: Shirt (camisa com botões/social), T-shirt (camiseta básica), Pants (calças), Shoes (sapatos), Jacket (jaqueta/casaco), Dress (vestido).',
      'O verbo "WEAR" significa vestir ou calçar roupa/acessório: "I wear a jacket".',
      'No presente contínuo: "I am wearing black shoes" (Estou usando sapatos pretos).'
    ],
    xpReward: 40,
    gemsReward: 10,
    exercises: [
      {
        id: 'w1-p28-e1',
        type: 'multiple-choice',
        visualEmoji: '👟',
        prompt: 'Qual item de vestuário você calça nos pés?',
        options: ['Shoes', 'Shirt', 'Jacket', 'Pants'],
        correctAnswer: 'Shoes',
        explanation: '"Shoes" significa sapatos ou calçados.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p28-e2',
        type: 'word-order',
        prompt: 'Ordene a frase de vestuário:',
        options: ['a', 'wearing', 'am', 'blue', 'I', 't-shirt.'],
        correctAnswer: 'I am wearing a blue t-shirt.',
        explanation: '"I am wearing a blue t-shirt." significa "Estou usando uma camiseta azul.".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p28-e3',
        type: 'fill-blank',
        prompt: 'Complete com o verbo de usar roupas:',
        contextSentence: 'In cold weather, I ____ a warm jacket.',
        options: ['wear', 'eat', 'drink', 'speak'],
        correctAnswer: 'wear',
        explanation: '"Wear" é o verbo usado para vestir roupas.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p28-e4',
        type: 'translate',
        prompt: 'Traduza: "Ela tem calças pretas e sapatos brancos."',
        options: [
          'She has black pants and white shoes.',
          'She wears pants black and shoes white.',
          'She has black shoes and white pants.',
          'She is with pants black and shoe.'
        ],
        correctAnswer: 'She has black pants and white shoes.',
        explanation: '"She has black pants and white shoes" respeita a ordem adjetivo antes de substantivo.',
        skillCategory: 'reading'
      }
    ]
  },

  // 29. O Simulado do Guardião (Revisão Intensiva Pré-Boss)
  {
    id: 'w1-p29',
    worldId: 1,
    phaseNumber: 29,
    title: 'Simulado Geral Pré-Boss A1',
    subtitle: 'Revisão intensiva de todo o conteúdo antes do Guardião',
    pedagogicalObjective: 'Testar e reforçar a retenção de todas as competências do A1 em preparação para a batalha final.',
    type: 'review',
    icon: 'shield',
    cefrLevel: 'A1',
    theorySummary: [
      'Atenção! Você está a um passo de enfrentar o Guardião do Mundo 1!',
      'Nesta fase de simulado, você treinará questões de listening, montagem de frases, preposições, verbos e vocabulário.',
      'Revise com calma: cada acerto aqui consolida seu aprendizado real para vencer o Boss!'
    ],
    xpReward: 50,
    gemsReward: 15,
    exercises: [
      {
        id: 'w1-p29-e1',
        type: 'listening',
        prompt: 'Ouça o diálogo com atenção e selecione o que foi dito:',
        audioPhrase: 'Hello! I am Lucas, I am twenty years old and I live in Brazil.',
        options: [
          'Hello! I am Lucas, I am twenty years old and I live in Brazil.',
          'Good morning! My name is Lucas, I am twelve years old from Spain.',
          'Hello! I am Carlos, I am thirty years old and I work in Brazil.',
          'Goodbye! I am Lucas and I study English at home.'
        ],
        correctAnswer: 'Hello! I am Lucas, I am twenty years old and I live in Brazil.',
        explanation: 'Excelente escuta! Identificou nome, idade com verbo to be e país de residência.',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p29-e2',
        type: 'word-order',
        prompt: 'Ordene a pergunta com palavra WH e preposição de lugar:',
        options: ['the', 'Where', 'keys,', 'please?', 'are'],
        correctAnswer: 'Where are the keys, please?',
        explanation: '"Where are the keys, please?" significa "Onde estão as chaves, por favor?".',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p29-e3',
        type: 'multiple-choice',
        prompt: 'Qual das opções abaixo preenche corretamente as lacunas: "She ____ at home ____ Mondays"?',
        options: ['is / on', 'are / in', 'is / at', 'am / to'],
        correctAnswer: 'is / on',
        explanation: '"She is" (verbo to be singular) e "on Mondays" (preposição ON para dias da semana).',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p29-e4',
        type: 'fill-blank',
        prompt: 'Complete a frase com o verbo de ação:',
        contextSentence: 'I ____ English every afternoon because I love learning.',
        options: ['study', 'sleep', 'drink', 'wear'],
        correctAnswer: 'study',
        explanation: '"Study English" é estudar inglês.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p29-e5',
        type: 'translate',
        prompt: 'Traduza: "Com licença, que horas são agora?"',
        options: [
          'Excuse me, what time is it now?',
          'Please, which hour is it now?',
          'Sorry, what is the clock?',
          'Excuse me, where time is it?'
        ],
        correctAnswer: 'Excuse me, what time is it now?',
        explanation: '"Excuse me, what time is it now?" é a pergunta formal e educada perfeita.',
        skillCategory: 'reading'
      }
    ]
  },

  // 30. O GUARDIÃO DO MUNDO 1 (BOSS FINAL DO A1)
  {
    id: 'w1-p30',
    worldId: 1,
    phaseNumber: 30,
    title: 'O Guardião do Mundo 1',
    subtitle: 'A Batalha Suprema de Proficiência A1',
    pedagogicalObjective: 'Desafio Supremo do A1: Demonstre domínio completo aplicando conversação, listening, gramática e vocabulário de todo o Mundo 1 para derrotar o Guardião e conquistar a Insígnia A1!',
    type: 'boss',
    icon: 'swords',
    cefrLevel: 'A1',
    theorySummary: [
      '⚔️ VOCÊ CHEGOU AO BOSS FINAL DO MUNDO 1!',
      'O Guardião do Mundo 1 vai testar tudo o que você aprendeu nas 29 fases anteriores: saudações, números, horas, família, rotina, verbos, preposições e pronúncia.',
      'Cada resposta correta enfraquece o Guardião. Conclua com êxito para ganhar a Insígnia do Guardião A1 e abrir as portas do Mundo 2!'
    ],
    xpReward: 150,
    gemsReward: 50,
    exercises: [
      {
        id: 'w1-p30-e1',
        type: 'listening',
        prompt: '[Batalha Boss 1/6] Escuta de Alto Desafio - Ouça a apresentação detalhada do Guardião:',
        audioPhrase: 'Welcome challenger! I speak English, I live in this realm and I protect the gates.',
        options: [
          'Welcome challenger! I speak English, I live in this realm and I protect the gates.',
          'Good morning friend! I study English and I sleep in this castle.',
          'Welcome students! We speak Portuguese and we are at school.',
          'Hello challenger! I have twenty years and I drink water today.'
        ],
        correctAnswer: 'Welcome challenger! I speak English, I live in this realm and I protect the gates.',
        explanation: 'Golpe certeiro! Você decodificou perfeitamente o áudio do Guardião.',
        skillCategory: 'listening'
      },
      {
        id: 'w1-p30-e2',
        type: 'word-order',
        prompt: '[Batalha Boss 2/6] Estruturação Complexa - Ordene a frase que combina horário, rotina e preposição:',
        options: ['eight', 'study', 'at', 'I', "o'clock.", 'English'],
        correctAnswer: "I study English at eight o'clock.",
        explanation: '"I study English at eight o\'clock." - Aplicação impecável de sujeito, verbo, objeto e preposição temporal!',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p30-e3',
        type: 'multiple-choice',
        prompt: '[Batalha Boss 3/6] Identificação de Erro - Qual das quatro frases abaixo é a ÚNICA 100% correta?',
        options: [
          'My brother is ten years old and drinks cold water in the kitchen.',
          'My brother has ten years old and drink water cold on kitchen.',
          'My brother is ten years and drinks a water cold under kitchen.',
          'My brother have ten years and eat cold water in the room.'
        ],
        correctAnswer: 'My brother is ten years old and drinks cold water in the kitchen.',
        explanation: 'Acerto monumental! Idade com "is", número "ten", concordância "drinks", ordem "cold water" e preposição "in the kitchen"!',
        skillCategory: 'grammar'
      },
      {
        id: 'w1-p30-e4',
        type: 'fill-blank',
        prompt: '[Batalha Boss 4/6] Situação Real - Complete o diálogo de cortesia:',
        contextSentence: 'Excuse me, ____ I have a glass of water, please?',
        options: ['can', 'is', 'are', 'do'],
        correctAnswer: 'can',
        explanation: '"Can I have..." é a expressão educada mais comum em restaurantes e viagens para pedir algo.',
        skillCategory: 'vocabulary'
      },
      {
        id: 'w1-p30-e5',
        type: 'translate',
        prompt: '[Batalha Boss 5/6] Tradução Contextual - Traduza a frase completa de apresentação:',
        contextSentencePt: 'Olá, meu nome é Alex, eu sou brasileiro e moro em uma cidade bonita.',
        options: [
          'Hello, my name is Alex, I am Brazilian and I live in a beautiful city.',
          'Hi, my name have Alex, I am Brazil and live in a city beautiful.',
          'Good morning, I name is Alex, I have Brazilian and live at house.',
          'Hello, I am Alex, I from Brazil and I speak beautiful city.'
        ],
        correctAnswer: 'Hello, my name is Alex, I am Brazilian and I live in a beautiful city.',
        explanation: 'Excelente tradução com nacionalidade maiúscula ("Brazilian") e ordem adjetivo-substantivo ("beautiful city")!',
        skillCategory: 'reading'
      },
      {
        id: 'w1-p30-e6',
        type: 'speaking-repeat',
        prompt: '[Batalha Boss 6/6 - Golpe Final!] Pronuncie o juramento de proficiência em voz alta:',
        contextSentence: 'I completed World One and I am ready to speak English with the world!',
        audioPhrase: 'I completed World One and I am ready to speak English with the world!',
        correctAnswer: 'I completed World One and I am ready to speak English with the world!',
        explanation: '🏆 VITÓRIA ÉPICA! O Guardião do Mundo 1 foi derrotado! Você conquistou a Insígnia do Guardião A1 e desbloqueou o Mundo 2!',
        skillCategory: 'pronunciation'
      }
    ]
  }
];

