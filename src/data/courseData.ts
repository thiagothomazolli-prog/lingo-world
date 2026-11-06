import { World, CefrLevel, InteractiveStory } from '../types';
import { WORLD_1_PHASES } from './world1Phases';

export const WORLDS_DATA: World[] = [
  {
    id: 1,
    title: 'Mundo 1: Primeiros Passos',
    themeColor: 'emerald',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-600',
    description: 'Aprenda os sons, saudações, números, cores e suas primeiras frases no idioma.',
    levelBadge: 'A1 - Básico I',
    phases: WORLD_1_PHASES,
  },
  {
    id: 2,
    title: 'Mundo 2: Construindo Frases',
    themeColor: 'blue',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    description: 'Domine o verbo TO BE, pronomes, artigos, substantivos e a estrutura de perguntas.',
    levelBadge: 'A1+ / A2',
    phases: [
      {
        id: 'w2-p1',
        worldId: 2,
        phaseNumber: 1,
        title: 'O Poderoso Verbo TO BE',
        subtitle: 'I am, You are, He/She/It is',
        pedagogicalObjective: 'Compreender ser e estar no presente e evitar erros comuns com idade.',
        type: 'lesson',
        icon: 'zap',
        cefrLevel: 'A1',
        theorySummary: [
          'I am (Eu sou / estou), You are (Você é / está), He/She/It is (Ele/Ela é / está).',
          'We are (Nós somos / estamos), They are (Eles são / estão).',
          'ATENÇÃO: Em inglês, IDADE usa TO BE: "I am 20 years old" (NUNCA "I have 20 years").'
        ],
        xpReward: 40,
        gemsReward: 15,
        exercises: [
          {
            id: 'w2-p1-e1',
            type: 'multiple-choice',
            prompt: 'Como se diz "Ela tem 25 anos de idade"?',
            contextSentence: 'She ______ 25 years old.',
            options: ['is', 'has', 'have', 'are'],
            correctAnswer: 'is',
            explanation: 'Usamos o verbo TO BE (is) para terceira pessoa e idade: "She is 25 years old".',
            skillCategory: 'grammar'
          },
          {
            id: 'w2-p1-e2',
            type: 'word-order',
            prompt: 'Ordene a pergunta correta:',
            contextSentence: 'Are you ready for the adventure?',
            audioPhrase: 'Are you ready for the adventure?',
            options: ['the', 'ready', 'Are', 'adventure?', 'you', 'for'],
            correctAnswer: 'Are you ready for the adventure?',
            explanation: 'Em perguntas com TO BE, invertemos o verbo e o sujeito: "Are you ready...?"',
            skillCategory: 'grammar'
          },
          {
            id: 'w2-p1-e3',
            type: 'fill-blank',
            prompt: 'Complete com a forma correta do verbo:',
            contextSentence: 'We ______ very excited to learn English!',
            contextSentencePt: 'Nós estamos muito animados para aprender inglês!',
            audioPhrase: 'We are very excited to learn English!',
            options: ['are', 'is', 'am', 'be'],
            correctAnswer: 'are',
            explanation: 'Para o pronome "We", a forma do presente é "are".',
            skillCategory: 'vocabulary'
          }
        ]
      },
      {
        id: 'w2-p2',
        worldId: 2,
        phaseNumber: 2,
        title: 'Perguntas com Wh- Words',
        subtitle: 'What, Where, When, Who & Why',
        pedagogicalObjective: 'Formular perguntas abertas no dia a dia com segurança.',
        type: 'lesson',
        icon: 'help-circle',
        cefrLevel: 'A2',
        theorySummary: [
          'What = O que / Qual | Where = Onde | When = Quando',
          'Who = Quem | Why = Por que (resposta com Because)',
          'Estrutura: Wh-word + verbo auxiliar/to be + sujeito + complemento?'
        ],
        xpReward: 45,
        gemsReward: 15,
        exercises: [
          {
            id: 'w2-p2-e1',
            type: 'multiple-choice',
            prompt: 'Qual pergunta busca a localização de alguém?',
            options: [
              'Where is the library?',
              'What is your favorite book?',
              'When does the class start?',
              'Why are you happy?'
            ],
            correctAnswer: 'Where is the library?',
            explanation: '"Where" é a palavra interrogativa usada exclusivamente para lugares e localizações.',
            skillCategory: 'reading'
          },
          {
            id: 'w2-p2-e2',
            type: 'speaking-repeat',
            prompt: 'Diga a pergunta com entonação natural:',
            audioPhrase: 'What do you want to learn today?',
            contextSentence: 'What do you want to learn today?',
            contextSentencePt: 'O que você quer aprender hoje?',
            correctAnswer: 'What do you want to learn today?',
            explanation: 'Dê ritmo conectando "What do you" -> /wʌt də juː/.',
            phoneticHint: '/wʌt duː juː wɒnt tuː lɜːn təˈdeɪ/',
            skillCategory: 'pronunciation'
          }
        ]
      },
      {
        id: 'w2-p3',
        worldId: 2,
        phaseNumber: 3,
        title: 'Desafio Boss: Torre Gramatical',
        subtitle: 'Batalha de Estrutura de Frases',
        pedagogicalObjective: 'Vencer o guardião demonstrando domínio total de pronomes e perguntas.',
        type: 'boss',
        icon: 'swords',
        cefrLevel: 'A2',
        theorySummary: ['Prepare-se: Frases rápidas e sem margem para equívocos!'],
        xpReward: 90,
        gemsReward: 45,
        exercises: [
          {
            id: 'w2-p3-e1',
            type: 'word-order',
            prompt: 'Construa a frase completa:',
            contextSentence: 'Why are they working on the project now?',
            audioPhrase: 'Why are they working on the project now?',
            options: ['they', 'project', 'are', 'Why', 'working', 'now?', 'on', 'the'],
            correctAnswer: 'Why are they working on the project now?',
            explanation: 'Why + are + they + working + on the project + now? Estrutura impecável.',
            skillCategory: 'grammar'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Mundo 3: Vida Cotidiana',
    themeColor: 'amber',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-600',
    description: 'Rotina, família, alimentação, compras, lugares da cidade e horários.',
    levelBadge: 'A2 - Básico Consolidado',
    phases: [
      {
        id: 'w3-p1',
        worldId: 3,
        phaseNumber: 1,
        title: 'Rotina & Hábitos',
        subtitle: 'Simple Present & Daily Routines',
        pedagogicalObjective: 'Descrever o que faz todos os dias, horários e rotinas.',
        type: 'lesson',
        icon: 'calendar',
        cefrLevel: 'A2',
        theorySummary: [
          'No Simple Present: "I wake up at 7 AM", "I drink coffee".',
          'Com He/She/It adicionamos -s ou -es: "He works", "She goes to school".'
        ],
        xpReward: 45,
        gemsReward: 15,
        exercises: [
          {
            id: 'w3-p1-e1',
            type: 'multiple-choice',
            prompt: 'Complete com a conjugação correta de "study":',
            contextSentence: 'Lucas ______ English for 30 minutes every morning.',
            options: ['studies', 'study', 'studyed', 'studying'],
            correctAnswer: 'studies',
            explanation: 'Verbos que terminam em consoante + Y mudam para -IES na terceira pessoa (Lucas = He).',
            skillCategory: 'grammar'
          },
          {
            id: 'w3-p1-e2',
            type: 'fill-blank',
            prompt: 'Preposição correta para horários exatos:',
            contextSentence: 'Our flight departs ______ 8:30 PM.',
            contextSentencePt: 'Nosso voo parte às 20h30.',
            options: ['at', 'in', 'on', 'by'],
            correctAnswer: 'at',
            explanation: 'Usamos "AT" para horas específicas ("at 8:30 PM", "at noon").',
            skillCategory: 'vocabulary'
          }
        ]
      },
      {
        id: 'w3-p2',
        worldId: 3,
        phaseNumber: 2,
        title: 'No Restaurante & Pedidos',
        subtitle: 'Can I have...? Would you like...?',
        pedagogicalObjective: 'Pedir comida e bebidas com elegância e vocabulário culinário.',
        type: 'lesson',
        icon: 'coffee',
        cefrLevel: 'A2',
        theorySummary: [
          '"Could I have the menu, please?"',
          '"I would like a glass of water." (ou a contração "I\'d like...")',
          '"How much is this?" e "Can we get the check, please?"'
        ],
        xpReward: 50,
        gemsReward: 20,
        exercises: [
          {
            id: 'w3-p2-e1',
            type: 'word-order',
            prompt: 'Monte a forma polida de pedir a conta:',
            contextSentence: 'Could we have the check, please?',
            audioPhrase: 'Could we have the check, please?',
            options: ['the', 'have', 'Could', 'please?', 'check,', 'we'],
            correctAnswer: 'Could we have the check, please?',
            explanation: '"Could we have..." é a expressão padrão em restaurantes no inglês americano e britânico.',
            skillCategory: 'speaking'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Mundo 4: Comunicação & Social',
    themeColor: 'purple',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    description: 'Diálogos reais, escuta ativa, perguntas espontâneas e expressões sociais comuns.',
    levelBadge: 'B1 - Intermediário I',
    phases: [
      {
        id: 'w4-p1',
        worldId: 4,
        phaseNumber: 1,
        title: 'Small Talk & Conexões',
        subtitle: 'Conversas espontâneas e clima',
        pedagogicalObjective: 'Iniciar e manter conversas descontraídas com falantes nativos.',
        type: 'lesson',
        icon: 'message-circle',
        cefrLevel: 'B1',
        theorySummary: [
          'Small talk é a chave para socializar no exterior.',
          'Comentários sobre clima, fim de semana e interesses mútuos.',
          'Perguntas de acompanhamento: "Really? How did that go?"'
        ],
        xpReward: 50,
        gemsReward: 20,
        exercises: [
          {
            id: 'w4-p1-e1',
            type: 'multiple-choice',
            prompt: 'Alguém diz "I just moved to this city!". Como você responde com simpatia?',
            options: [
              'Welcome! How are you finding it so far?',
              'No problem at all.',
              'I am hungry now.',
              'Yesterday was Friday.'
            ],
            correctAnswer: 'Welcome! How are you finding it so far?',
            explanation: '"How are you finding it?" significa "O que você está achando até agora?", demonstrando interesse genuíno.',
            skillCategory: 'speaking'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Mundo 5: Inglês Intermediário',
    themeColor: 'rose',
    gradientFrom: 'from-rose-500',
    gradientTo: 'to-red-600',
    description: 'Past Simple, Present Perfect, verbos irregulares e os famosos Phrasal Verbs.',
    levelBadge: 'B1+ / B2',
    phases: [
      {
        id: 'w5-p1',
        worldId: 5,
        phaseNumber: 1,
        title: 'Verbos Irregulares no Passado',
        subtitle: 'Went, Saw, Bought, Found & Thought',
        pedagogicalObjective: 'Dominar os 30 verbos irregulares mais frequentes sem hesitação.',
        type: 'lesson',
        icon: 'history',
        cefrLevel: 'B1',
        theorySummary: [
          'Verbos irregulares não recebem "-ed". Ex: go -> went, make -> made, think -> thought.',
          'Em frases negativas e perguntas no passado, usamos "DID" e o verbo volta ao infinitivo: "Did you go?", "I didn\'t see".'
        ],
        xpReward: 60,
        gemsReward: 25,
        exercises: [
          {
            id: 'w5-p1-e1',
            type: 'multiple-choice',
            prompt: 'Qual a frase correta no passado?',
            options: [
              'She bought a wonderful house last year.',
              'She buyed a wonderful house last year.',
              'She did bought a wonderful house last year.',
              'She was buy a house last year.'
            ],
            correctAnswer: 'She bought a wonderful house last year.',
            explanation: 'O passado de buy é BOUGHT. "Buyed" é um erro comum de hiper-regularização.',
            skillCategory: 'grammar'
          },
          {
            id: 'w5-p1-e2',
            type: 'fill-blank',
            prompt: 'Complete a negativa com o verbo no infinitivo:',
            contextSentence: 'I did not ______ him at the conference.',
            options: ['see', 'saw', 'seen', 'seeing'],
            correctAnswer: 'see',
            explanation: 'Após o auxiliar "did not", o verbo principal permanece na sua forma base (see).',
            skillCategory: 'grammar'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Mundo 6: Inglês Avançado',
    themeColor: 'violet',
    gradientFrom: 'from-violet-600',
    gradientTo: 'to-purple-800',
    description: 'Inglês profissional, argumentação, nuances culturais e compreensão de sotaques.',
    levelBadge: 'B2 / C1',
    phases: [
      {
        id: 'w6-p1',
        worldId: 6,
        phaseNumber: 1,
        title: 'Comunicação Corporativa & Negociação',
        subtitle: 'Meetings, Feedback & Presentations',
        pedagogicalObjective: 'Apresentar ideias de negócios e negociar com diplomacia.',
        type: 'lesson',
        icon: 'briefcase',
        cefrLevel: 'C1',
        theorySummary: [
          'Uso de hedging em inglês profissional: "It seems to me that...", "We might want to consider...".',
          'Vocabulário de liderança: milestone, bottleneck, leverage, actionable insights.'
        ],
        xpReward: 70,
        gemsReward: 30,
        exercises: [
          {
            id: 'w6-p1-e1',
            type: 'multiple-choice',
            prompt: 'Qual frase expressa desacordo diplomático em uma reunião de negócios?',
            options: [
              'I see your point, however, we should also examine the market risk.',
              'You are completely wrong about this data.',
              'I don’t care about this proposal.',
              'Whatever you say is fine with me.'
            ],
            correctAnswer: 'I see your point, however, we should also examine the market risk.',
            explanation: '"I see your point, however..." valida o interlocutor antes de introduzir um contraponto crítico.',
            skillCategory: 'reading'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Mundo 7: Universo da Fluência',
    themeColor: 'cyan',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-700',
    description: 'Debates dinâmicos, simulações complexas e total autonomia comunicativa.',
    levelBadge: 'C1 / C2 - Fluência Plena',
    phases: [
      {
        id: 'w7-p1',
        worldId: 7,
        phaseNumber: 1,
        title: 'Pensamento Crítico & Espontaneidade',
        subtitle: 'Expressing nuance and high-level ideas',
        pedagogicalObjective: 'Sustentar debates articulados com precisão vocabular e retórica.',
        type: 'boss',
        icon: 'award',
        cefrLevel: 'C2',
        theorySummary: [
          'Fluência não é falar rápido, é transmitir ideias complexas sem barreira linguística.',
          'Uso de conectivos sofisticados: "Notwithstanding", "Consequently", "In light of recent developments".'
        ],
        xpReward: 120,
        gemsReward: 60,
        exercises: [
          {
            id: 'w7-p1-e1',
            type: 'multiple-choice',
            prompt: 'Escolha a palavra que melhor expressa "apesar de" em contexto acadêmico:',
            contextSentence: '______ several setbacks, the research team achieved breakthrough results.',
            options: ['Notwithstanding', 'Although', 'Despite of', 'Even'],
            correctAnswer: 'Notwithstanding',
            explanation: '"Notwithstanding" funciona como preposição formal indicando "não obstante / apesar de". "Despite of" é incorreto (o correto seria "despite").',
            skillCategory: 'reading'
          }
        ]
      }
    ]
  }
];

export const DIDACTIC_LIBRARY = [
  {
    category: 'Gramática Essencial',
    topics: [
      {
        title: 'Verbo TO BE no Presente e Passado',
        level: 'A1-A2',
        summary: 'Entenda quando usar am/is/are e was/were, com exemplos práticos.',
        fullText: 'O verbo TO BE corresponde a "ser" ou "estar". No presente temos: I am, You are, He/She/It is, We/They are. No passado: I/He/She/It was; You/We/They were. Dica de ouro: Nunca use HAVE para idade ("I am 25 years old", não "I have 25").'
      },
      {
        title: 'Simple Present vs. Present Continuous',
        level: 'A2-B1',
        summary: 'Aprenda a diferenciar ações habituais de ações que ocorrem neste exato instante.',
        fullText: 'Simple Present descreve rotinas e fatos ("I work at Google"). Present Continuous descreve o que está acontecendo agora ("I am working right now"). Cuidado com verbos de estado (like, love, know) que raramente são usados com -ing.'
      },
      {
        title: 'Present Perfect Descomplicado',
        level: 'B1-B2',
        summary: 'A ponte entre o passado e o presente sem data específica.',
        fullText: 'Have/Has + Past Participle. Use quando a ação aconteceu num tempo indeterminado ("I have visited London") ou começou no passado e continua até hoje ("I have lived here for 3 years").'
      }
    ]
  },
  {
    category: 'Vocabulário & Pronúncia',
    topics: [
      {
        title: 'As 100 Palavras Mais Usadas em Inglês',
        level: 'A1',
        summary: 'O vocabulário nuclear que compõe mais de 50% de qualquer conversa cotidiana.',
        fullText: 'Palavras funcionais como "the, be, to, of, and, in, that, have, I, it, for, not, on, with, he, as, you, do, at". Dominar a pronúncia e uso destas palavras garante compreensão imediata.'
      },
      {
        title: 'Phrasal Verbs Mais Frequentes',
        level: 'B1-B2',
        summary: 'Dê um salto na naturalidade com verbos como give up, figure out, bring up.',
        fullText: '1. Figure out = Descobrir / compreender uma solução.\n2. Give up = Desistir.\n3. Look forward to = Esperar ansiosamente por algo.\n4. Call off = Cancelar.\n5. Run into = Encontrar alguém por acaso.'
      },
      {
        title: 'Guia Fonético dos Sons "TH"',
        level: 'A2-B2',
        summary: 'Como posicionar a língua para o som sonoro e surdo do TH sem vergonha.',
        fullText: 'O TH pode ser desvozeado (sem vibração nas cordas vocais, como em "think", "thanks", "three") ou vozeado (com vibração, como em "this", "that", "mother"). Coloque a ponta da língua levemente entre os dentes incisivos e sopre suavemente o ar.'
      }
    ]
  },
  {
    category: 'Inglês Prático para Viagens & Trabalho',
    topics: [
      {
        title: 'No Aeroporto e Alfândega',
        level: 'A2-B1',
        summary: 'Frases essenciais para imigração, bagagem e conexões.',
        fullText: 'Na imigração: "What is the purpose of your trip?" -> "I am here on vacation / for business."\n"Where will you be staying?" -> "At the Hilton Hotel downtown."\n"How long will you stay?" -> "For two weeks."'
      },
      {
        title: 'Entrevistas de Emprego em Inglês',
        level: 'B2-C1',
        summary: 'Como falar de conquistas, pontos fortes e responder no método STAR.',
        fullText: 'STAR: Situation, Task, Action, Result. Expressões recomendadas: "I spearhead the project...", "Our team managed to scale...", "One challenge I overcame was..."'
      }
    ]
  }
];

export const INTERACTIVE_STORIES: InteractiveStory[] = [
  {
    id: 'story-1',
    title: 'Perdido no Aeroporto JFK',
    cefrLevel: 'A2',
    coverEmoji: '✈️',
    description: 'Você acabou de aterrissar em Nova York e sua conexão para São Francisco sai em 40 minutos!',
    xpReward: 60,
    initialNodeId: 'node-start',
    nodes: {
      'node-start': {
        id: 'node-start',
        speaker: 'Agente do Aeroporto',
        avatar: '👮‍♂️',
        dialogueEn: 'Welcome to JFK International! How can I assist you today?',
        dialoguePt: 'Bem-vindo ao Aeroporto JFK! Como posso ajudá-lo hoje?',
        audioPhrase: 'Welcome to JFK International! How can I assist you today?',
        choices: [
          {
            text: 'Excuse me, where is Terminal 4 for my connecting flight?',
            translation: 'Com licença, onde fica o Terminal 4 para o meu voo de conexão?',
            nextNodeId: 'node-terminal4',
            feedback: 'Excelente escolha! Educado e objetivo.',
            isCorrect: true
          },
          {
            text: 'I want plane now!',
            translation: 'Eu quero avião agora!',
            nextNodeId: 'node-impatient',
            feedback: 'Um pouco rude. Em inglês sempre usamos "Excuse me" e perguntas polidas.'
          }
        ]
      },
      'node-terminal4': {
        id: 'node-terminal4',
        speaker: 'Agente do Aeroporto',
        avatar: '👮‍♂️',
        dialogueEn: 'Take the AirTrain red line right outside door 3. It will drop you directly at Terminal 4 in five minutes.',
        dialoguePt: 'Pegue o AirTrain linha vermelha logo do lado de fora da porta 3. Ele vai te deixar no Terminal 4 em 5 minutos.',
        audioPhrase: 'Take the AirTrain red line right outside door 3.',
        choices: [
          {
            text: 'Thank you very much! Do I need a special ticket for it?',
            translation: 'Muito obrigado! Preciso de uma passagem especial para ele?',
            nextNodeId: 'node-ticket',
            feedback: 'Perfeito! Pergunta prática sobre transporte local.',
            isCorrect: true
          }
        ]
      },
      'node-impatient': {
        id: 'node-impatient',
        speaker: 'Agente do Aeroporto',
        avatar: '👮‍♂️',
        dialogueEn: 'Please calm down, sir. Let me see your boarding pass so I can tell you where to go.',
        dialoguePt: 'Por favor acalme-se, senhor. Deixe-me ver seu cartão de embarque para orientá-lo.',
        choices: [
          {
            text: 'Here it is. Thank you for your patience.',
            translation: 'Aqui está. Obrigado pela paciência.',
            nextNodeId: 'node-ticket',
            feedback: 'Muito bem, recuperou a cordialidade.',
            isCorrect: true
          }
        ]
      },
      'node-ticket': {
        id: 'node-ticket',
        speaker: 'Agente do Aeroporto',
        avatar: '👮‍♂️',
        dialogueEn: 'No ticket needed between terminals, it is completely free! Have a safe flight!',
        dialoguePt: 'Não precisa de bilhete entre os terminais, é gratuito! Tenha um voo seguro!',
        audioPhrase: 'No ticket needed between terminals, it is completely free! Have a safe flight!',
        isEnding: true
      }
    }
  },
  {
    id: 'story-2',
    title: 'O Primeiro Café em Londres',
    cefrLevel: 'A1',
    coverEmoji: '☕',
    description: 'Um dia chuvoso em Covent Garden. Peça seu café preferido e um doce típico inglês.',
    xpReward: 50,
    initialNodeId: 'node-cafe-start',
    nodes: {
      'node-cafe-start': {
        id: 'node-cafe-start',
        speaker: 'Barista',
        avatar: '👩‍🦰',
        dialogueEn: 'Good morning! What can I get started for you today?',
        dialoguePt: 'Bom dia! O que posso preparar para você hoje?',
        audioPhrase: 'Good morning! What can I get started for you today?',
        choices: [
          {
            text: 'I would like a medium cappuccino and a blueberry muffin, please.',
            translation: 'Gostaria de um cappuccino médio e um muffin de mirtilo, por favor.',
            nextNodeId: 'node-cafe-order',
            feedback: 'Natural e perfeitamente estruturado com "I would like"!',
            isCorrect: true
          },
          {
            text: 'Give me coffee!',
            translation: 'Me dá café!',
            nextNodeId: 'node-cafe-blunt',
            feedback: 'Soa agressivo em inglês. Prefira "Could I have..." ou "I\'d like..."'
          }
        ]
      },
      'node-cafe-order': {
        id: 'node-cafe-order',
        speaker: 'Barista',
        avatar: '👩‍🦰',
        dialogueEn: 'Splendid choice! For here or to take away?',
        dialoguePt: 'Ótima escolha! Para consumir aqui ou levar para viagem?',
        audioPhrase: 'Splendid choice! For here or to take away?',
        choices: [
          {
            text: 'For here, please. It is raining outside!',
            translation: 'Para consumir aqui, por favor. Está chovendo lá fora!',
            nextNodeId: 'node-cafe-end',
            feedback: 'Excelente contexto conversacional!',
            isCorrect: true
          },
          {
            text: 'To take away, I have a meeting nearby.',
            translation: 'Para viagem, tenho uma reunião por perto.',
            nextNodeId: 'node-cafe-end',
            feedback: 'Muito bom!',
            isCorrect: true
          }
        ]
      },
      'node-cafe-blunt': {
        id: 'node-cafe-blunt',
        speaker: 'Barista',
        avatar: '👩‍🦰',
        dialogueEn: 'Sure... What kind of coffee would you prefer?',
        dialoguePt: 'Claro... Que tipo de café você prefere?',
        choices: [
          {
            text: 'Could I have an Americano with milk, please?',
            translation: 'Poderia me ver um Americano com leite, por favor?',
            nextNodeId: 'node-cafe-end',
            feedback: 'Muito melhor!',
            isCorrect: true
          }
        ]
      },
      'node-cafe-end': {
        id: 'node-cafe-end',
        speaker: 'Barista',
        avatar: '👩‍🦰',
        dialogueEn: 'That will be £4.50. You can tap your card on the reader. Enjoy your coffee!',
        dialoguePt: 'Ficará em £4.50. Pode encostar seu cartão na maquininha. Aproveite seu café!',
        audioPhrase: 'That will be 4 pounds and 50 pence. Enjoy your coffee!',
        isEnding: true
      }
    }
  }
];

export const INITIAL_FLASHCARDS = [
  {
    id: 'fc-1',
    english: 'Breakthrough',
    portuguese: 'Avanço / Conquista significativa',
    phonetic: '/ˈbreɪk.θruː/',
    category: 'Avançado',
    exampleEn: 'Scientists made a major breakthrough in renewable energy.',
    examplePt: 'Cientistas fizeram um grande avanço em energia renovável.',
    box: 1,
    nextReviewDate: new Date().toISOString()
  },
  {
    id: 'fc-2',
    english: 'Reliable',
    portuguese: 'Confiável',
    phonetic: '/rɪˈlaɪ.ə.bəl/',
    category: 'Adjetivos',
    exampleEn: 'She is a very reliable teammate.',
    examplePt: 'Ela é uma colega de equipe muito confiável.',
    box: 1,
    nextReviewDate: new Date().toISOString()
  },
  {
    id: 'fc-3',
    english: 'To figure out',
    portuguese: 'Descobrir / Encontrar a solução',
    phonetic: '/ˈfɪɡ.jər aʊt/',
    category: 'Phrasal Verbs',
    exampleEn: 'We need to figure out how to solve this bug.',
    examplePt: 'Precisamos descobrir como resolver este problema.',
    box: 1,
    nextReviewDate: new Date().toISOString()
  },
  {
    id: 'fc-4',
    english: 'Convenient',
    portuguese: 'Prático / Conveniente',
    phonetic: '/kənˈviː.ni.ənt/',
    category: 'Cotidiano',
    exampleEn: 'Online classes are very convenient.',
    examplePt: 'Aulas online são muito práticas.',
    box: 1,
    nextReviewDate: new Date().toISOString()
  }
];
