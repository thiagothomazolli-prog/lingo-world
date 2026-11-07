import { World, CefrLevel, InteractiveStory } from '../types';
import { WORLD_1_PHASES } from './world1Phases';
import { WORLD_2_PHASES } from './world2Phases';
import { WORLD_3_PHASES } from './world3Phases';
import { WORLD_4_PHASES } from './world4Phases';
import { WORLD_5_PHASES } from './world5Phases';
import { WORLD_6_PHASES } from './world6Phases';
import { WORLD_7_PHASES } from './world7Phases';

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
    phases: WORLD_2_PHASES,
  },
  {
    id: 3,
    title: 'Mundo 3: Vida Cotidiana',
    themeColor: 'amber',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-600',
    description: 'Família, casa, alimentação, rotina diária, compras, lugares e horários.',
    levelBadge: 'A2 - Básico II',
    phases: WORLD_3_PHASES,
  },
  {
    id: 4,
    title: 'Mundo 4: Comunicação & Social',
    themeColor: 'purple',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    description: 'Conversação ativa, listening aprimorado, situações sociais e diálogos reais.',
    levelBadge: 'B1 - Intermediário I',
    phases: WORLD_4_PHASES,
  },
  {
    id: 5,
    title: 'Mundo 5: Inglês Intermediário',
    themeColor: 'rose',
    gradientFrom: 'from-rose-500',
    gradientTo: 'to-red-600',
    description: 'Tempos verbais complexos, phrasal verbs, expressões e argumentação.',
    levelBadge: 'B2 - Intermediário II',
    phases: WORLD_5_PHASES,
  },
  {
    id: 6,
    title: 'Mundo 6: Inglês Avançado',
    themeColor: 'violet',
    gradientFrom: 'from-violet-600',
    gradientTo: 'to-purple-800',
    description: 'Conversação complexa, inglês profissional, sotaques globais e debates.',
    levelBadge: 'C1 - Avançado',
    phases: WORLD_6_PHASES,
  },
  {
    id: 7,
    title: 'Mundo 7: Universo da Fluência',
    themeColor: 'cyan',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-700',
    description: 'Espontaneidade nativa, discursos, metáforas e comunicação em qualquer cenário.',
    levelBadge: 'C2 - Maestria',
    phases: WORLD_7_PHASES,
  },
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
