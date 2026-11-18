import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = [
  {
    "id": "w0-p1",
    "worldId": 0,
    "phaseNumber": 1,
    "themeId": "home",
    "themeTitle": "A Casa",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "title": "A Casa • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema 1 (Nível 1/4) • As 12 palavras mais usadas no dia a dia em casa",
    "pedagogicalObjective": "Aprender as 12 palavras mais essenciais e frequentes sobre a casa: Door, Window, Room, Floor, Kitchen, Bedroom, House, Key, Table, Chair, Light e Water.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Começamos pelas 12 palavras mais essenciais da Casa (Módulo 1): Door (\"dór\" = Porta), Window (\"uín-dou\" = Janela), Room (\"rúm\" = Quarto/Cômodo), Floor (\"flór\" = Chão), Kitchen (\"kít-chen\" = Cozinha) e Bedroom (\"béd-rum\" = Quarto de dormir).",
      "Também aprendemos House (\"ráus\" = Casa), Key (\"kí\" = Chave), Table (\"têi-bol\" = Mesa), Chair (\"tchér\" = Cadeira), Light (\"láit\" = Luz) e Water (\"uó-ter\" = Água).",
      "🎓 Metodologia v1.18: ouça o som, associe à imagem em tamanho total do card e veja a pronúncia simplificada e a frase de exemplo ao verificar!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p1-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom",
            "translationPt": "Quarto de dormir",
            "simplePronunciation": "béd-rum",
            "phonetic": "/ˈbed.ruːm/",
            "exampleEn": "I sleep in my bedroom.",
            "examplePt": "Eu durmo no meu quarto."
          },
          {
            "text": "Light",
            "emoji": "💡",
            "label": "Light",
            "translationPt": "Luz",
            "simplePronunciation": "láit",
            "phonetic": "/laɪt/",
            "exampleEn": "Turn on the light.",
            "examplePt": "Acenda a luz."
          },
          {
            "text": "House",
            "emoji": "🏡",
            "label": "House",
            "translationPt": "Casa",
            "simplePronunciation": "ráus",
            "phonetic": "/haʊs/",
            "exampleEn": "Welcome to my house.",
            "examplePt": "Bem-vindo à minha casa."
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta",
            "simplePronunciation": "dór",
            "phonetic": "/dɔːr/",
            "exampleEn": "Please close the door.",
            "examplePt": "Por favor, feche a porta."
          }
        ],
        "options": [
          "Bedroom",
          "Light",
          "House",
          "Door"
        ],
        "correctAnswer": "Door",
        "contextSentence": "Please close the door.",
        "contextSentencePt": "Por favor, feche a porta.",
        "explanation": "Exemplo: \"Please close the door.\" — Por favor, feche a porta.",
        "phoneticHint": "\"dór\" • /dɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Window",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa",
            "simplePronunciation": "têi-bol",
            "phonetic": "/ˈteɪ.bəl/",
            "exampleEn": "The food is on the table.",
            "examplePt": "A comida está na mesa."
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave",
            "simplePronunciation": "kí",
            "phonetic": "/kiː/",
            "exampleEn": "Where is the house key?",
            "examplePt": "Onde está a chave de casa?"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela",
            "simplePronunciation": "uín-dou",
            "phonetic": "/ˈwɪn.doʊ/",
            "exampleEn": "Open the window, please.",
            "examplePt": "Abra a janela, por favor."
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen",
            "translationPt": "Cozinha",
            "simplePronunciation": "kít-chen",
            "phonetic": "/ˈkɪtʃ.ən/",
            "exampleEn": "Mom is in the kitchen.",
            "examplePt": "A mamãe está na cozinha."
          }
        ],
        "options": [
          "Table",
          "Key",
          "Window",
          "Kitchen"
        ],
        "correctAnswer": "Window",
        "contextSentence": "Open the window, please.",
        "contextSentencePt": "Abra a janela, por favor.",
        "explanation": "Exemplo: \"Open the window, please.\" — Abra a janela, por favor.",
        "phoneticHint": "\"uín-dou\" • /ˈwɪn.doʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Room",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room",
            "translationPt": "Quarto / Cômodo",
            "simplePronunciation": "rúm",
            "phonetic": "/ruːm/",
            "exampleEn": "This room is very clean.",
            "examplePt": "Este cômodo está muito limpo."
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água",
            "simplePronunciation": "uó-ter",
            "phonetic": "/ˈwɔː.tər/",
            "exampleEn": "I drink cold water.",
            "examplePt": "Eu bebo água gelada."
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela",
            "simplePronunciation": "uín-dou",
            "phonetic": "/ˈwɪn.doʊ/",
            "exampleEn": "Open the window, please.",
            "examplePt": "Abra a janela, por favor."
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta",
            "simplePronunciation": "dór",
            "phonetic": "/dɔːr/",
            "exampleEn": "Please close the door.",
            "examplePt": "Por favor, feche a porta."
          }
        ],
        "options": [
          "Room",
          "Water",
          "Window",
          "Door"
        ],
        "correctAnswer": "Room",
        "contextSentence": "This room is very clean.",
        "contextSentencePt": "Este cômodo está muito limpo.",
        "explanation": "Exemplo: \"This room is very clean.\" — Este cômodo está muito limpo.",
        "phoneticHint": "\"rúm\" • /ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Floor",
        "visualEmoji": "🟫",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏡",
            "label": "House",
            "translationPt": "Casa",
            "simplePronunciation": "ráus",
            "phonetic": "/haʊs/",
            "exampleEn": "Welcome to my house.",
            "examplePt": "Bem-vindo à minha casa."
          },
          {
            "text": "Light",
            "emoji": "💡",
            "label": "Light",
            "translationPt": "Luz",
            "simplePronunciation": "láit",
            "phonetic": "/laɪt/",
            "exampleEn": "Turn on the light.",
            "examplePt": "Acenda a luz."
          },
          {
            "text": "Floor",
            "emoji": "🟫",
            "label": "Floor",
            "translationPt": "Chão / Piso",
            "simplePronunciation": "flór",
            "phonetic": "/flɔːr/",
            "exampleEn": "The floor is clean.",
            "examplePt": "O chão está limpo."
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira",
            "simplePronunciation": "tchér",
            "phonetic": "/tʃer/",
            "exampleEn": "Sit on this chair.",
            "examplePt": "Sente-se nesta cadeira."
          }
        ],
        "options": [
          "House",
          "Light",
          "Floor",
          "Chair"
        ],
        "correctAnswer": "Floor",
        "contextSentence": "The floor is clean.",
        "contextSentencePt": "O chão está limpo.",
        "explanation": "Exemplo: \"The floor is clean.\" — O chão está limpo.",
        "phoneticHint": "\"flór\" • /flɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kitchen",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room",
            "translationPt": "Quarto / Cômodo",
            "simplePronunciation": "rúm",
            "phonetic": "/ruːm/",
            "exampleEn": "This room is very clean.",
            "examplePt": "Este cômodo está muito limpo."
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen",
            "translationPt": "Cozinha",
            "simplePronunciation": "kít-chen",
            "phonetic": "/ˈkɪtʃ.ən/",
            "exampleEn": "Mom is in the kitchen.",
            "examplePt": "A mamãe está na cozinha."
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira",
            "simplePronunciation": "tchér",
            "phonetic": "/tʃer/",
            "exampleEn": "Sit on this chair.",
            "examplePt": "Sente-se nesta cadeira."
          },
          {
            "text": "Floor",
            "emoji": "🟫",
            "label": "Floor",
            "translationPt": "Chão / Piso",
            "simplePronunciation": "flór",
            "phonetic": "/flɔːr/",
            "exampleEn": "The floor is clean.",
            "examplePt": "O chão está limpo."
          }
        ],
        "options": [
          "Room",
          "Kitchen",
          "Chair",
          "Floor"
        ],
        "correctAnswer": "Kitchen",
        "contextSentence": "Mom is in the kitchen.",
        "contextSentencePt": "A mamãe está na cozinha.",
        "explanation": "Exemplo: \"Mom is in the kitchen.\" — A mamãe está na cozinha.",
        "phoneticHint": "\"kít-chen\" • /ˈkɪtʃ.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bedroom",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta",
            "simplePronunciation": "dór",
            "phonetic": "/dɔːr/",
            "exampleEn": "Please close the door.",
            "examplePt": "Por favor, feche a porta."
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela",
            "simplePronunciation": "uín-dou",
            "phonetic": "/ˈwɪn.doʊ/",
            "exampleEn": "Open the window, please.",
            "examplePt": "Abra a janela, por favor."
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água",
            "simplePronunciation": "uó-ter",
            "phonetic": "/ˈwɔː.tər/",
            "exampleEn": "I drink cold water.",
            "examplePt": "Eu bebo água gelada."
          },
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom",
            "translationPt": "Quarto de dormir",
            "simplePronunciation": "béd-rum",
            "phonetic": "/ˈbed.ruːm/",
            "exampleEn": "I sleep in my bedroom.",
            "examplePt": "Eu durmo no meu quarto."
          }
        ],
        "options": [
          "Door",
          "Window",
          "Water",
          "Bedroom"
        ],
        "correctAnswer": "Bedroom",
        "contextSentence": "I sleep in my bedroom.",
        "contextSentencePt": "Eu durmo no meu quarto.",
        "explanation": "Exemplo: \"I sleep in my bedroom.\" — Eu durmo no meu quarto.",
        "phoneticHint": "\"béd-rum\" • /ˈbed.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "House",
        "visualEmoji": "🏡",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏡",
            "label": "House",
            "translationPt": "Casa",
            "simplePronunciation": "ráus",
            "phonetic": "/haʊs/",
            "exampleEn": "Welcome to my house.",
            "examplePt": "Bem-vindo à minha casa."
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave",
            "simplePronunciation": "kí",
            "phonetic": "/kiː/",
            "exampleEn": "Where is the house key?",
            "examplePt": "Onde está a chave de casa?"
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen",
            "translationPt": "Cozinha",
            "simplePronunciation": "kít-chen",
            "phonetic": "/ˈkɪtʃ.ən/",
            "exampleEn": "Mom is in the kitchen.",
            "examplePt": "A mamãe está na cozinha."
          },
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom",
            "translationPt": "Quarto de dormir",
            "simplePronunciation": "béd-rum",
            "phonetic": "/ˈbed.ruːm/",
            "exampleEn": "I sleep in my bedroom.",
            "examplePt": "Eu durmo no meu quarto."
          }
        ],
        "options": [
          "House",
          "Key",
          "Kitchen",
          "Bedroom"
        ],
        "correctAnswer": "House",
        "contextSentence": "Welcome to my house.",
        "contextSentencePt": "Bem-vindo à minha casa.",
        "explanation": "Exemplo: \"Welcome to my house.\" — Bem-vindo à minha casa.",
        "phoneticHint": "\"ráus\" • /haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Key",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Floor",
            "emoji": "🟫",
            "label": "Floor",
            "translationPt": "Chão / Piso",
            "simplePronunciation": "flór",
            "phonetic": "/flɔːr/",
            "exampleEn": "The floor is clean.",
            "examplePt": "O chão está limpo."
          },
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room",
            "translationPt": "Quarto / Cômodo",
            "simplePronunciation": "rúm",
            "phonetic": "/ruːm/",
            "exampleEn": "This room is very clean.",
            "examplePt": "Este cômodo está muito limpo."
          },
          {
            "text": "Light",
            "emoji": "💡",
            "label": "Light",
            "translationPt": "Luz",
            "simplePronunciation": "láit",
            "phonetic": "/laɪt/",
            "exampleEn": "Turn on the light.",
            "examplePt": "Acenda a luz."
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave",
            "simplePronunciation": "kí",
            "phonetic": "/kiː/",
            "exampleEn": "Where is the house key?",
            "examplePt": "Onde está a chave de casa?"
          }
        ],
        "options": [
          "Floor",
          "Room",
          "Light",
          "Key"
        ],
        "correctAnswer": "Key",
        "contextSentence": "Where is the house key?",
        "contextSentencePt": "Onde está a chave de casa?",
        "explanation": "Exemplo: \"Where is the house key?\" — Onde está a chave de casa?",
        "phoneticHint": "\"kí\" • /kiː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Table",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta",
            "simplePronunciation": "dór",
            "phonetic": "/dɔːr/",
            "exampleEn": "Please close the door.",
            "examplePt": "Por favor, feche a porta."
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela",
            "simplePronunciation": "uín-dou",
            "phonetic": "/ˈwɪn.doʊ/",
            "exampleEn": "Open the window, please.",
            "examplePt": "Abra a janela, por favor."
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa",
            "simplePronunciation": "têi-bol",
            "phonetic": "/ˈteɪ.bəl/",
            "exampleEn": "The food is on the table.",
            "examplePt": "A comida está na mesa."
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água",
            "simplePronunciation": "uó-ter",
            "phonetic": "/ˈwɔː.tər/",
            "exampleEn": "I drink cold water.",
            "examplePt": "Eu bebo água gelada."
          }
        ],
        "options": [
          "Door",
          "Window",
          "Table",
          "Water"
        ],
        "correctAnswer": "Table",
        "contextSentence": "The food is on the table.",
        "contextSentencePt": "A comida está na mesa.",
        "explanation": "Exemplo: \"The food is on the table.\" — A comida está na mesa.",
        "phoneticHint": "\"têi-bol\" • /ˈteɪ.bəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chair",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira",
            "simplePronunciation": "tchér",
            "phonetic": "/tʃer/",
            "exampleEn": "Sit on this chair.",
            "examplePt": "Sente-se nesta cadeira."
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen",
            "translationPt": "Cozinha",
            "simplePronunciation": "kít-chen",
            "phonetic": "/ˈkɪtʃ.ən/",
            "exampleEn": "Mom is in the kitchen.",
            "examplePt": "A mamãe está na cozinha."
          },
          {
            "text": "House",
            "emoji": "🏡",
            "label": "House",
            "translationPt": "Casa",
            "simplePronunciation": "ráus",
            "phonetic": "/haʊs/",
            "exampleEn": "Welcome to my house.",
            "examplePt": "Bem-vindo à minha casa."
          },
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom",
            "translationPt": "Quarto de dormir",
            "simplePronunciation": "béd-rum",
            "phonetic": "/ˈbed.ruːm/",
            "exampleEn": "I sleep in my bedroom.",
            "examplePt": "Eu durmo no meu quarto."
          }
        ],
        "options": [
          "Chair",
          "Kitchen",
          "House",
          "Bedroom"
        ],
        "correctAnswer": "Chair",
        "contextSentence": "Sit on this chair.",
        "contextSentencePt": "Sente-se nesta cadeira.",
        "explanation": "Exemplo: \"Sit on this chair.\" — Sente-se nesta cadeira.",
        "phoneticHint": "\"tchér\" • /tʃer/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Light",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room",
            "translationPt": "Quarto / Cômodo",
            "simplePronunciation": "rúm",
            "phonetic": "/ruːm/",
            "exampleEn": "This room is very clean.",
            "examplePt": "Este cômodo está muito limpo."
          },
          {
            "text": "Light",
            "emoji": "💡",
            "label": "Light",
            "translationPt": "Luz",
            "simplePronunciation": "láit",
            "phonetic": "/laɪt/",
            "exampleEn": "Turn on the light.",
            "examplePt": "Acenda a luz."
          },
          {
            "text": "Floor",
            "emoji": "🟫",
            "label": "Floor",
            "translationPt": "Chão / Piso",
            "simplePronunciation": "flór",
            "phonetic": "/flɔːr/",
            "exampleEn": "The floor is clean.",
            "examplePt": "O chão está limpo."
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave",
            "simplePronunciation": "kí",
            "phonetic": "/kiː/",
            "exampleEn": "Where is the house key?",
            "examplePt": "Onde está a chave de casa?"
          }
        ],
        "options": [
          "Room",
          "Light",
          "Floor",
          "Key"
        ],
        "correctAnswer": "Light",
        "contextSentence": "Turn on the light.",
        "contextSentencePt": "Acenda a luz.",
        "explanation": "Exemplo: \"Turn on the light.\" — Acenda a luz.",
        "phoneticHint": "\"láit\" • /laɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa",
            "simplePronunciation": "têi-bol",
            "phonetic": "/ˈteɪ.bəl/",
            "exampleEn": "The food is on the table.",
            "examplePt": "A comida está na mesa."
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água",
            "simplePronunciation": "uó-ter",
            "phonetic": "/ˈwɔː.tər/",
            "exampleEn": "I drink cold water.",
            "examplePt": "Eu bebo água gelada."
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela",
            "simplePronunciation": "uín-dou",
            "phonetic": "/ˈwɪn.doʊ/",
            "exampleEn": "Open the window, please.",
            "examplePt": "Abra a janela, por favor."
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta",
            "simplePronunciation": "dór",
            "phonetic": "/dɔːr/",
            "exampleEn": "Please close the door.",
            "examplePt": "Por favor, feche a porta."
          }
        ],
        "options": [
          "Table",
          "Water",
          "Window",
          "Door"
        ],
        "correctAnswer": "Water",
        "contextSentence": "I drink cold water.",
        "contextSentencePt": "Eu bebo água gelada.",
        "explanation": "Exemplo: \"I drink cold water.\" — Eu bebo água gelada.",
        "phoneticHint": "\"uó-ter\" • /ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p2",
    "worldId": 0,
    "phaseNumber": 2,
    "themeId": "home",
    "themeTitle": "A Casa",
    "frequencyLevel": "Módulo 2 • Comuns",
    "title": "A Casa • Módulo 2: Palavras Comuns",
    "subtitle": "Tema 1 (Nível 2/4) • 12 palavras comuns da estrutura e móveis da casa",
    "pedagogicalObjective": "Dominar partes comuns da casa: Roof, Wall, Bathroom, Living room, Bed, Sofa, Fridge, Stove, Sink, Mirror, Lamp e Shower.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 2 da Casa avançamos para as palavras comuns: Roof (\"rúf\" = Telhado), Wall (\"uól\" = Parede/Muro), Bathroom (\"béth-rum\" = Banheiro), Living room (\"lí-ving rúm\" = Sala de estar) e Bed (\"béd\" = Cama).",
      "Também praticamos Sofa (\"sôu-fa\" = Sofá), Fridge (\"frídj\" = Geladeira), Stove (\"stôuv\" = Fogão), Sink (\"sínk\" = Pia), Mirror (\"mí-ror\" = Espelho), Lamp (\"lémp\" = Abajur/Luminária) e Shower (\"xáu-er\" = Chuveiro)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p2-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Roof",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária",
            "simplePronunciation": "lémp",
            "phonetic": "/læmp/",
            "exampleEn": "Turn on the bedside lamp.",
            "examplePt": "Ligue o abajur."
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama",
            "simplePronunciation": "béd",
            "phonetic": "/bed/",
            "exampleEn": "My bed is very comfortable.",
            "examplePt": "Minha cama é muito confortável."
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado",
            "simplePronunciation": "rúf",
            "phonetic": "/ruːf/",
            "exampleEn": "The roof protects the house.",
            "examplePt": "O telhado protege a casa."
          },
          {
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room",
            "translationPt": "Sala de estar",
            "simplePronunciation": "lí-ving rúm",
            "phonetic": "/ˈlɪv.ɪŋ ruːm/",
            "exampleEn": "We watch TV in the living room.",
            "examplePt": "Nós assistimos TV na sala de estar."
          }
        ],
        "options": [
          "Lamp",
          "Bed",
          "Roof",
          "Living room"
        ],
        "correctAnswer": "Roof",
        "contextSentence": "The roof protects the house.",
        "contextSentencePt": "O telhado protege a casa.",
        "explanation": "Exemplo: \"The roof protects the house.\" — O telhado protege a casa.",
        "phoneticHint": "\"rúf\" • /ruːf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wall",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede / Muro",
            "simplePronunciation": "uól",
            "phonetic": "/wɔːl/",
            "exampleEn": "The wall is painted white.",
            "examplePt": "A parede está pintada de branco."
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira",
            "simplePronunciation": "frídj",
            "phonetic": "/frɪdʒ/",
            "exampleEn": "The milk is in the fridge.",
            "examplePt": "O leite está na geladeira."
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão",
            "simplePronunciation": "stôuv",
            "phonetic": "/stoʊv/",
            "exampleEn": "She cooks dinner on the stove.",
            "examplePt": "Ela faz o jantar no fogão."
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá",
            "simplePronunciation": "sôu-fa",
            "phonetic": "/ˈsoʊ.fə/",
            "exampleEn": "Sit on the living room sofa.",
            "examplePt": "Sente-se no sofá da sala."
          }
        ],
        "options": [
          "Wall",
          "Fridge",
          "Stove",
          "Sofa"
        ],
        "correctAnswer": "Wall",
        "contextSentence": "The wall is painted white.",
        "contextSentencePt": "A parede está pintada de branco.",
        "explanation": "Exemplo: \"The wall is painted white.\" — A parede está pintada de branco.",
        "phoneticHint": "\"uól\" • /wɔːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bathroom",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho",
            "simplePronunciation": "mí-ror",
            "phonetic": "/ˈmɪr.ər/",
            "exampleEn": "Look in the mirror.",
            "examplePt": "Olhe no espelho."
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro",
            "simplePronunciation": "xáu-er",
            "phonetic": "/ˈʃaʊ.ər/",
            "exampleEn": "I take a warm shower.",
            "examplePt": "Eu tomo um banho morno de chuveiro."
          },
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom",
            "translationPt": "Banheiro",
            "simplePronunciation": "béth-rum",
            "phonetic": "/ˈbæθ.ruːm/",
            "exampleEn": "Wash your hands in the bathroom.",
            "examplePt": "Lave as mãos no banheiro."
          },
          {
            "text": "Sink",
            "emoji": "🚰",
            "label": "Sink",
            "translationPt": "Pia",
            "simplePronunciation": "sínk",
            "phonetic": "/sɪŋk/",
            "exampleEn": "Put the cup in the sink.",
            "examplePt": "Coloque a xícara na pia."
          }
        ],
        "options": [
          "Mirror",
          "Shower",
          "Bathroom",
          "Sink"
        ],
        "correctAnswer": "Bathroom",
        "contextSentence": "Wash your hands in the bathroom.",
        "contextSentencePt": "Lave as mãos no banheiro.",
        "explanation": "Exemplo: \"Wash your hands in the bathroom.\" — Lave as mãos no banheiro.",
        "phoneticHint": "\"béth-rum\" • /ˈbæθ.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Living room",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom",
            "translationPt": "Banheiro",
            "simplePronunciation": "béth-rum",
            "phonetic": "/ˈbæθ.ruːm/",
            "exampleEn": "Wash your hands in the bathroom.",
            "examplePt": "Lave as mãos no banheiro."
          },
          {
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room",
            "translationPt": "Sala de estar",
            "simplePronunciation": "lí-ving rúm",
            "phonetic": "/ˈlɪv.ɪŋ ruːm/",
            "exampleEn": "We watch TV in the living room.",
            "examplePt": "Nós assistimos TV na sala de estar."
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado",
            "simplePronunciation": "rúf",
            "phonetic": "/ruːf/",
            "exampleEn": "The roof protects the house.",
            "examplePt": "O telhado protege a casa."
          },
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede / Muro",
            "simplePronunciation": "uól",
            "phonetic": "/wɔːl/",
            "exampleEn": "The wall is painted white.",
            "examplePt": "A parede está pintada de branco."
          }
        ],
        "options": [
          "Bathroom",
          "Living room",
          "Roof",
          "Wall"
        ],
        "correctAnswer": "Living room",
        "contextSentence": "We watch TV in the living room.",
        "contextSentencePt": "Nós assistimos TV na sala de estar.",
        "explanation": "Exemplo: \"We watch TV in the living room.\" — Nós assistimos TV na sala de estar.",
        "phoneticHint": "\"lí-ving rúm\" • /ˈlɪv.ɪŋ ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão",
            "simplePronunciation": "stôuv",
            "phonetic": "/stoʊv/",
            "exampleEn": "She cooks dinner on the stove.",
            "examplePt": "Ela faz o jantar no fogão."
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá",
            "simplePronunciation": "sôu-fa",
            "phonetic": "/ˈsoʊ.fə/",
            "exampleEn": "Sit on the living room sofa.",
            "examplePt": "Sente-se no sofá da sala."
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira",
            "simplePronunciation": "frídj",
            "phonetic": "/frɪdʒ/",
            "exampleEn": "The milk is in the fridge.",
            "examplePt": "O leite está na geladeira."
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama",
            "simplePronunciation": "béd",
            "phonetic": "/bed/",
            "exampleEn": "My bed is very comfortable.",
            "examplePt": "Minha cama é muito confortável."
          }
        ],
        "options": [
          "Stove",
          "Sofa",
          "Fridge",
          "Bed"
        ],
        "correctAnswer": "Bed",
        "contextSentence": "My bed is very comfortable.",
        "contextSentencePt": "Minha cama é muito confortável.",
        "explanation": "Exemplo: \"My bed is very comfortable.\" — Minha cama é muito confortável.",
        "phoneticHint": "\"béd\" • /bed/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sofa",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá",
            "simplePronunciation": "sôu-fa",
            "phonetic": "/ˈsoʊ.fə/",
            "exampleEn": "Sit on the living room sofa.",
            "examplePt": "Sente-se no sofá da sala."
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro",
            "simplePronunciation": "xáu-er",
            "phonetic": "/ˈʃaʊ.ər/",
            "exampleEn": "I take a warm shower.",
            "examplePt": "Eu tomo um banho morno de chuveiro."
          },
          {
            "text": "Sink",
            "emoji": "🚰",
            "label": "Sink",
            "translationPt": "Pia",
            "simplePronunciation": "sínk",
            "phonetic": "/sɪŋk/",
            "exampleEn": "Put the cup in the sink.",
            "examplePt": "Coloque a xícara na pia."
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária",
            "simplePronunciation": "lémp",
            "phonetic": "/læmp/",
            "exampleEn": "Turn on the bedside lamp.",
            "examplePt": "Ligue o abajur."
          }
        ],
        "options": [
          "Sofa",
          "Shower",
          "Sink",
          "Lamp"
        ],
        "correctAnswer": "Sofa",
        "contextSentence": "Sit on the living room sofa.",
        "contextSentencePt": "Sente-se no sofá da sala.",
        "explanation": "Exemplo: \"Sit on the living room sofa.\" — Sente-se no sofá da sala.",
        "phoneticHint": "\"sôu-fa\" • /ˈsoʊ.fə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fridge",
        "visualEmoji": "🧊",
        "visualOptions": [
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado",
            "simplePronunciation": "rúf",
            "phonetic": "/ruːf/",
            "exampleEn": "The roof protects the house.",
            "examplePt": "O telhado protege a casa."
          },
          {
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room",
            "translationPt": "Sala de estar",
            "simplePronunciation": "lí-ving rúm",
            "phonetic": "/ˈlɪv.ɪŋ ruːm/",
            "exampleEn": "We watch TV in the living room.",
            "examplePt": "Nós assistimos TV na sala de estar."
          },
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom",
            "translationPt": "Banheiro",
            "simplePronunciation": "béth-rum",
            "phonetic": "/ˈbæθ.ruːm/",
            "exampleEn": "Wash your hands in the bathroom.",
            "examplePt": "Lave as mãos no banheiro."
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira",
            "simplePronunciation": "frídj",
            "phonetic": "/frɪdʒ/",
            "exampleEn": "The milk is in the fridge.",
            "examplePt": "O leite está na geladeira."
          }
        ],
        "options": [
          "Roof",
          "Living room",
          "Bathroom",
          "Fridge"
        ],
        "correctAnswer": "Fridge",
        "contextSentence": "The milk is in the fridge.",
        "contextSentencePt": "O leite está na geladeira.",
        "explanation": "Exemplo: \"The milk is in the fridge.\" — O leite está na geladeira.",
        "phoneticHint": "\"frídj\" • /frɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Stove",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama",
            "simplePronunciation": "béd",
            "phonetic": "/bed/",
            "exampleEn": "My bed is very comfortable.",
            "examplePt": "Minha cama é muito confortável."
          },
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede / Muro",
            "simplePronunciation": "uól",
            "phonetic": "/wɔːl/",
            "exampleEn": "The wall is painted white.",
            "examplePt": "A parede está pintada de branco."
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão",
            "simplePronunciation": "stôuv",
            "phonetic": "/stoʊv/",
            "exampleEn": "She cooks dinner on the stove.",
            "examplePt": "Ela faz o jantar no fogão."
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho",
            "simplePronunciation": "mí-ror",
            "phonetic": "/ˈmɪr.ər/",
            "exampleEn": "Look in the mirror.",
            "examplePt": "Olhe no espelho."
          }
        ],
        "options": [
          "Bed",
          "Wall",
          "Stove",
          "Mirror"
        ],
        "correctAnswer": "Stove",
        "contextSentence": "She cooks dinner on the stove.",
        "contextSentencePt": "Ela faz o jantar no fogão.",
        "explanation": "Exemplo: \"She cooks dinner on the stove.\" — Ela faz o jantar no fogão.",
        "phoneticHint": "\"stôuv\" • /stoʊv/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sink",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Sink",
            "emoji": "🚰",
            "label": "Sink",
            "translationPt": "Pia",
            "simplePronunciation": "sínk",
            "phonetic": "/sɪŋk/",
            "exampleEn": "Put the cup in the sink.",
            "examplePt": "Coloque a xícara na pia."
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho",
            "simplePronunciation": "mí-ror",
            "phonetic": "/ˈmɪr.ər/",
            "exampleEn": "Look in the mirror.",
            "examplePt": "Olhe no espelho."
          },
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede / Muro",
            "simplePronunciation": "uól",
            "phonetic": "/wɔːl/",
            "exampleEn": "The wall is painted white.",
            "examplePt": "A parede está pintada de branco."
          },
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom",
            "translationPt": "Banheiro",
            "simplePronunciation": "béth-rum",
            "phonetic": "/ˈbæθ.ruːm/",
            "exampleEn": "Wash your hands in the bathroom.",
            "examplePt": "Lave as mãos no banheiro."
          }
        ],
        "options": [
          "Sink",
          "Mirror",
          "Wall",
          "Bathroom"
        ],
        "correctAnswer": "Sink",
        "contextSentence": "Put the cup in the sink.",
        "contextSentencePt": "Coloque a xícara na pia.",
        "explanation": "Exemplo: \"Put the cup in the sink.\" — Coloque a xícara na pia.",
        "phoneticHint": "\"sínk\" • /sɪŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
        "visualOptions": [
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado",
            "simplePronunciation": "rúf",
            "phonetic": "/ruːf/",
            "exampleEn": "The roof protects the house.",
            "examplePt": "O telhado protege a casa."
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho",
            "simplePronunciation": "mí-ror",
            "phonetic": "/ˈmɪr.ər/",
            "exampleEn": "Look in the mirror.",
            "examplePt": "Olhe no espelho."
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá",
            "simplePronunciation": "sôu-fa",
            "phonetic": "/ˈsoʊ.fə/",
            "exampleEn": "Sit on the living room sofa.",
            "examplePt": "Sente-se no sofá da sala."
          },
          {
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room",
            "translationPt": "Sala de estar",
            "simplePronunciation": "lí-ving rúm",
            "phonetic": "/ˈlɪv.ɪŋ ruːm/",
            "exampleEn": "We watch TV in the living room.",
            "examplePt": "Nós assistimos TV na sala de estar."
          }
        ],
        "options": [
          "Roof",
          "Mirror",
          "Sofa",
          "Living room"
        ],
        "correctAnswer": "Mirror",
        "contextSentence": "Look in the mirror.",
        "contextSentencePt": "Olhe no espelho.",
        "explanation": "Exemplo: \"Look in the mirror.\" — Olhe no espelho.",
        "phoneticHint": "\"mí-ror\" • /ˈmɪr.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama",
            "simplePronunciation": "béd",
            "phonetic": "/bed/",
            "exampleEn": "My bed is very comfortable.",
            "examplePt": "Minha cama é muito confortável."
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária",
            "simplePronunciation": "lémp",
            "phonetic": "/læmp/",
            "exampleEn": "Turn on the bedside lamp.",
            "examplePt": "Ligue o abajur."
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira",
            "simplePronunciation": "frídj",
            "phonetic": "/frɪdʒ/",
            "exampleEn": "The milk is in the fridge.",
            "examplePt": "O leite está na geladeira."
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão",
            "simplePronunciation": "stôuv",
            "phonetic": "/stoʊv/",
            "exampleEn": "She cooks dinner on the stove.",
            "examplePt": "Ela faz o jantar no fogão."
          }
        ],
        "options": [
          "Bed",
          "Lamp",
          "Fridge",
          "Stove"
        ],
        "correctAnswer": "Lamp",
        "contextSentence": "Turn on the bedside lamp.",
        "contextSentencePt": "Ligue o abajur.",
        "explanation": "Exemplo: \"Turn on the bedside lamp.\" — Ligue o abajur.",
        "phoneticHint": "\"lémp\" • /læmp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Shower",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Sink",
            "emoji": "🚰",
            "label": "Sink",
            "translationPt": "Pia",
            "simplePronunciation": "sínk",
            "phonetic": "/sɪŋk/",
            "exampleEn": "Put the cup in the sink.",
            "examplePt": "Coloque a xícara na pia."
          },
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede / Muro",
            "simplePronunciation": "uól",
            "phonetic": "/wɔːl/",
            "exampleEn": "The wall is painted white.",
            "examplePt": "A parede está pintada de branco."
          },
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom",
            "translationPt": "Banheiro",
            "simplePronunciation": "béth-rum",
            "phonetic": "/ˈbæθ.ruːm/",
            "exampleEn": "Wash your hands in the bathroom.",
            "examplePt": "Lave as mãos no banheiro."
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro",
            "simplePronunciation": "xáu-er",
            "phonetic": "/ˈʃaʊ.ər/",
            "exampleEn": "I take a warm shower.",
            "examplePt": "Eu tomo um banho morno de chuveiro."
          }
        ],
        "options": [
          "Sink",
          "Wall",
          "Bathroom",
          "Shower"
        ],
        "correctAnswer": "Shower",
        "contextSentence": "I take a warm shower.",
        "contextSentencePt": "Eu tomo um banho morno de chuveiro.",
        "explanation": "Exemplo: \"I take a warm shower.\" — Eu tomo um banho morno de chuveiro.",
        "phoneticHint": "\"xáu-er\" • /ˈʃaʊ.ər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p3",
    "worldId": 0,
    "phaseNumber": 3,
    "themeId": "home",
    "themeTitle": "A Casa",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "title": "A Casa • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema 1 (Nível 3/4) • 12 palavras intermediárias de áreas e objetos domésticos",
    "pedagogicalObjective": "Expandir o vocabulário da casa: Ceiling, Stairs, Garage, Balcony, Curtain, Rug, Pillow, Blanket, Towel, Shelf, Drawer e Gate.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 3 da Casa aprendemos palavras intermediárias: Ceiling (\"sí-ling\" = Teto), Stairs (\"stérz\" = Escada), Garage (\"ga-rádj\" = Garagem), Balcony (\"bél-co-ni\" = Varanda) e Curtain (\"câr-ten\" = Cortina).",
      "Também vemos Rug (\"râg\" = Tapete), Pillow (\"pí-lou\" = Travesseiro), Blanket (\"blén-ket\" = Cobertor), Towel (\"táu-el\" = Toalha), Shelf (\"xélf\" = Prateleira), Drawer (\"dró-er\" = Gaveta) e Gate (\"guêit\" = Portão).",
      "Logo após concluir este 3º módulo de vocabulário, você fará o seu 1º Módulo Exclusivo de Pronomes!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p3-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ceiling",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling",
            "translationPt": "Teto",
            "simplePronunciation": "sí-ling",
            "phonetic": "/ˈsiː.lɪŋ/",
            "exampleEn": "The lamp hangs from the ceiling.",
            "examplePt": "A luminária fica presa no teto."
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor",
            "simplePronunciation": "blén-ket",
            "phonetic": "/ˈblæŋ.kɪt/",
            "exampleEn": "Take a warm blanket tonight.",
            "examplePt": "Pegue um cobertor quentinho hoje à noite."
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony",
            "translationPt": "Varanda / Sacada",
            "simplePronunciation": "bél-co-ni",
            "phonetic": "/ˈbæl.kə.ni/",
            "exampleEn": "The apartment has a sunny balcony.",
            "examplePt": "O apartamento tem uma varanda ensolarada."
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete",
            "simplePronunciation": "râg",
            "phonetic": "/rʌɡ/",
            "exampleEn": "There is a soft rug on the floor.",
            "examplePt": "Há um tapete macio no chão."
          }
        ],
        "options": [
          "Ceiling",
          "Blanket",
          "Balcony",
          "Rug"
        ],
        "correctAnswer": "Ceiling",
        "contextSentence": "The lamp hangs from the ceiling.",
        "contextSentencePt": "A luminária fica presa no teto.",
        "explanation": "Exemplo: \"The lamp hangs from the ceiling.\" — A luminária fica presa no teto.",
        "phoneticHint": "\"sí-ling\" • /ˈsiː.lɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Stairs",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha",
            "simplePronunciation": "táu-el",
            "phonetic": "/ˈtaʊ.əl/",
            "exampleEn": "Dry your hands with a towel.",
            "examplePt": "Seque suas mãos com uma toalha."
          },
          {
            "text": "Shelf",
            "emoji": "📚",
            "label": "Shelf",
            "translationPt": "Prateleira / Estante",
            "simplePronunciation": "xélf",
            "phonetic": "/ʃelf/",
            "exampleEn": "Put the book on the shelf.",
            "examplePt": "Coloque o livro na prateleira."
          },
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs",
            "translationPt": "Escada",
            "simplePronunciation": "stérz",
            "phonetic": "/sterz/",
            "exampleEn": "Walk up the stairs carefully.",
            "examplePt": "Suba a escada com cuidado."
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina",
            "simplePronunciation": "câr-ten",
            "phonetic": "/ˈkɜːr.tən/",
            "exampleEn": "Close the window curtain.",
            "examplePt": "Feche a cortina da janela."
          }
        ],
        "options": [
          "Towel",
          "Shelf",
          "Stairs",
          "Curtain"
        ],
        "correctAnswer": "Stairs",
        "contextSentence": "Walk up the stairs carefully.",
        "contextSentencePt": "Suba a escada com cuidado.",
        "explanation": "Exemplo: \"Walk up the stairs carefully.\" — Suba a escada com cuidado.",
        "phoneticHint": "\"stérz\" • /sterz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Garage",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer",
            "translationPt": "Gaveta",
            "simplePronunciation": "dró-er",
            "phonetic": "/drɔːr/",
            "exampleEn": "Open the top drawer.",
            "examplePt": "Abra a gaveta de cima."
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem",
            "simplePronunciation": "ga-rádj",
            "phonetic": "/ɡəˈrɑːʒ/",
            "exampleEn": "The car is in the garage.",
            "examplePt": "O carro está na garagem."
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro",
            "simplePronunciation": "pí-lou",
            "phonetic": "/ˈpɪl.oʊ/",
            "exampleEn": "This pillow is very soft.",
            "examplePt": "Este travesseiro é muito macio."
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão",
            "simplePronunciation": "guêit",
            "phonetic": "/ɡeɪt/",
            "exampleEn": "Lock the front gate.",
            "examplePt": "Tranque o portão da frente."
          }
        ],
        "options": [
          "Drawer",
          "Garage",
          "Pillow",
          "Gate"
        ],
        "correctAnswer": "Garage",
        "contextSentence": "The car is in the garage.",
        "contextSentencePt": "O carro está na garagem.",
        "explanation": "Exemplo: \"The car is in the garage.\" — O carro está na garagem.",
        "phoneticHint": "\"ga-rádj\" • /ɡəˈrɑːʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Balcony",
        "visualEmoji": "🌤️",
        "visualOptions": [
          {
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling",
            "translationPt": "Teto",
            "simplePronunciation": "sí-ling",
            "phonetic": "/ˈsiː.lɪŋ/",
            "exampleEn": "The lamp hangs from the ceiling.",
            "examplePt": "A luminária fica presa no teto."
          },
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs",
            "translationPt": "Escada",
            "simplePronunciation": "stérz",
            "phonetic": "/sterz/",
            "exampleEn": "Walk up the stairs carefully.",
            "examplePt": "Suba a escada com cuidado."
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem",
            "simplePronunciation": "ga-rádj",
            "phonetic": "/ɡəˈrɑːʒ/",
            "exampleEn": "The car is in the garage.",
            "examplePt": "O carro está na garagem."
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony",
            "translationPt": "Varanda / Sacada",
            "simplePronunciation": "bél-co-ni",
            "phonetic": "/ˈbæl.kə.ni/",
            "exampleEn": "The apartment has a sunny balcony.",
            "examplePt": "O apartamento tem uma varanda ensolarada."
          }
        ],
        "options": [
          "Ceiling",
          "Stairs",
          "Garage",
          "Balcony"
        ],
        "correctAnswer": "Balcony",
        "contextSentence": "The apartment has a sunny balcony.",
        "contextSentencePt": "O apartamento tem uma varanda ensolarada.",
        "explanation": "Exemplo: \"The apartment has a sunny balcony.\" — O apartamento tem uma varanda ensolarada.",
        "phoneticHint": "\"bél-co-ni\" • /ˈbæl.kə.ni/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Curtain",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina",
            "simplePronunciation": "câr-ten",
            "phonetic": "/ˈkɜːr.tən/",
            "exampleEn": "Close the window curtain.",
            "examplePt": "Feche a cortina da janela."
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor",
            "simplePronunciation": "blén-ket",
            "phonetic": "/ˈblæŋ.kɪt/",
            "exampleEn": "Take a warm blanket tonight.",
            "examplePt": "Pegue um cobertor quentinho hoje à noite."
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha",
            "simplePronunciation": "táu-el",
            "phonetic": "/ˈtaʊ.əl/",
            "exampleEn": "Dry your hands with a towel.",
            "examplePt": "Seque suas mãos com uma toalha."
          },
          {
            "text": "Shelf",
            "emoji": "📚",
            "label": "Shelf",
            "translationPt": "Prateleira / Estante",
            "simplePronunciation": "xélf",
            "phonetic": "/ʃelf/",
            "exampleEn": "Put the book on the shelf.",
            "examplePt": "Coloque o livro na prateleira."
          }
        ],
        "options": [
          "Curtain",
          "Blanket",
          "Towel",
          "Shelf"
        ],
        "correctAnswer": "Curtain",
        "contextSentence": "Close the window curtain.",
        "contextSentencePt": "Feche a cortina da janela.",
        "explanation": "Exemplo: \"Close the window curtain.\" — Feche a cortina da janela.",
        "phoneticHint": "\"câr-ten\" • /ˈkɜːr.tən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Rug",
        "visualEmoji": "🟥",
        "visualOptions": [
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs",
            "translationPt": "Escada",
            "simplePronunciation": "stérz",
            "phonetic": "/sterz/",
            "exampleEn": "Walk up the stairs carefully.",
            "examplePt": "Suba a escada com cuidado."
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina",
            "simplePronunciation": "câr-ten",
            "phonetic": "/ˈkɜːr.tən/",
            "exampleEn": "Close the window curtain.",
            "examplePt": "Feche a cortina da janela."
          },
          {
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling",
            "translationPt": "Teto",
            "simplePronunciation": "sí-ling",
            "phonetic": "/ˈsiː.lɪŋ/",
            "exampleEn": "The lamp hangs from the ceiling.",
            "examplePt": "A luminária fica presa no teto."
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete",
            "simplePronunciation": "râg",
            "phonetic": "/rʌɡ/",
            "exampleEn": "There is a soft rug on the floor.",
            "examplePt": "Há um tapete macio no chão."
          }
        ],
        "options": [
          "Stairs",
          "Curtain",
          "Ceiling",
          "Rug"
        ],
        "correctAnswer": "Rug",
        "contextSentence": "There is a soft rug on the floor.",
        "contextSentencePt": "Há um tapete macio no chão.",
        "explanation": "Exemplo: \"There is a soft rug on the floor.\" — Há um tapete macio no chão.",
        "phoneticHint": "\"râg\" • /rʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pillow",
        "visualEmoji": "⬜",
        "visualOptions": [
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem",
            "simplePronunciation": "ga-rádj",
            "phonetic": "/ɡəˈrɑːʒ/",
            "exampleEn": "The car is in the garage.",
            "examplePt": "O carro está na garagem."
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão",
            "simplePronunciation": "guêit",
            "phonetic": "/ɡeɪt/",
            "exampleEn": "Lock the front gate.",
            "examplePt": "Tranque o portão da frente."
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro",
            "simplePronunciation": "pí-lou",
            "phonetic": "/ˈpɪl.oʊ/",
            "exampleEn": "This pillow is very soft.",
            "examplePt": "Este travesseiro é muito macio."
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony",
            "translationPt": "Varanda / Sacada",
            "simplePronunciation": "bél-co-ni",
            "phonetic": "/ˈbæl.kə.ni/",
            "exampleEn": "The apartment has a sunny balcony.",
            "examplePt": "O apartamento tem uma varanda ensolarada."
          }
        ],
        "options": [
          "Garage",
          "Gate",
          "Pillow",
          "Balcony"
        ],
        "correctAnswer": "Pillow",
        "contextSentence": "This pillow is very soft.",
        "contextSentencePt": "Este travesseiro é muito macio.",
        "explanation": "Exemplo: \"This pillow is very soft.\" — Este travesseiro é muito macio.",
        "phoneticHint": "\"pí-lou\" • /ˈpɪl.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Blanket",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor",
            "simplePronunciation": "blén-ket",
            "phonetic": "/ˈblæŋ.kɪt/",
            "exampleEn": "Take a warm blanket tonight.",
            "examplePt": "Pegue um cobertor quentinho hoje à noite."
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete",
            "simplePronunciation": "râg",
            "phonetic": "/rʌɡ/",
            "exampleEn": "There is a soft rug on the floor.",
            "examplePt": "Há um tapete macio no chão."
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro",
            "simplePronunciation": "pí-lou",
            "phonetic": "/ˈpɪl.oʊ/",
            "exampleEn": "This pillow is very soft.",
            "examplePt": "Este travesseiro é muito macio."
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer",
            "translationPt": "Gaveta",
            "simplePronunciation": "dró-er",
            "phonetic": "/drɔːr/",
            "exampleEn": "Open the top drawer.",
            "examplePt": "Abra a gaveta de cima."
          }
        ],
        "options": [
          "Blanket",
          "Rug",
          "Pillow",
          "Drawer"
        ],
        "correctAnswer": "Blanket",
        "contextSentence": "Take a warm blanket tonight.",
        "contextSentencePt": "Pegue um cobertor quentinho hoje à noite.",
        "explanation": "Exemplo: \"Take a warm blanket tonight.\" — Pegue um cobertor quentinho hoje à noite.",
        "phoneticHint": "\"blén-ket\" • /ˈblæŋ.kɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Towel",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling",
            "translationPt": "Teto",
            "simplePronunciation": "sí-ling",
            "phonetic": "/ˈsiː.lɪŋ/",
            "exampleEn": "The lamp hangs from the ceiling.",
            "examplePt": "A luminária fica presa no teto."
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha",
            "simplePronunciation": "táu-el",
            "phonetic": "/ˈtaʊ.əl/",
            "exampleEn": "Dry your hands with a towel.",
            "examplePt": "Seque suas mãos com uma toalha."
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina",
            "simplePronunciation": "câr-ten",
            "phonetic": "/ˈkɜːr.tən/",
            "exampleEn": "Close the window curtain.",
            "examplePt": "Feche a cortina da janela."
          },
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs",
            "translationPt": "Escada",
            "simplePronunciation": "stérz",
            "phonetic": "/sterz/",
            "exampleEn": "Walk up the stairs carefully.",
            "examplePt": "Suba a escada com cuidado."
          }
        ],
        "options": [
          "Ceiling",
          "Towel",
          "Curtain",
          "Stairs"
        ],
        "correctAnswer": "Towel",
        "contextSentence": "Dry your hands with a towel.",
        "contextSentencePt": "Seque suas mãos com uma toalha.",
        "explanation": "Exemplo: \"Dry your hands with a towel.\" — Seque suas mãos com uma toalha.",
        "phoneticHint": "\"táu-el\" • /ˈtaʊ.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shelf",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem",
            "simplePronunciation": "ga-rádj",
            "phonetic": "/ɡəˈrɑːʒ/",
            "exampleEn": "The car is in the garage.",
            "examplePt": "O carro está na garagem."
          },
          {
            "text": "Shelf",
            "emoji": "📚",
            "label": "Shelf",
            "translationPt": "Prateleira / Estante",
            "simplePronunciation": "xélf",
            "phonetic": "/ʃelf/",
            "exampleEn": "Put the book on the shelf.",
            "examplePt": "Coloque o livro na prateleira."
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro",
            "simplePronunciation": "pí-lou",
            "phonetic": "/ˈpɪl.oʊ/",
            "exampleEn": "This pillow is very soft.",
            "examplePt": "Este travesseiro é muito macio."
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão",
            "simplePronunciation": "guêit",
            "phonetic": "/ɡeɪt/",
            "exampleEn": "Lock the front gate.",
            "examplePt": "Tranque o portão da frente."
          }
        ],
        "options": [
          "Garage",
          "Shelf",
          "Pillow",
          "Gate"
        ],
        "correctAnswer": "Shelf",
        "contextSentence": "Put the book on the shelf.",
        "contextSentencePt": "Coloque o livro na prateleira.",
        "explanation": "Exemplo: \"Put the book on the shelf.\" — Coloque o livro na prateleira.",
        "phoneticHint": "\"xélf\" • /ʃelf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Drawer",
        "visualEmoji": "🗄️",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor",
            "simplePronunciation": "blén-ket",
            "phonetic": "/ˈblæŋ.kɪt/",
            "exampleEn": "Take a warm blanket tonight.",
            "examplePt": "Pegue um cobertor quentinho hoje à noite."
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony",
            "translationPt": "Varanda / Sacada",
            "simplePronunciation": "bél-co-ni",
            "phonetic": "/ˈbæl.kə.ni/",
            "exampleEn": "The apartment has a sunny balcony.",
            "examplePt": "O apartamento tem uma varanda ensolarada."
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete",
            "simplePronunciation": "râg",
            "phonetic": "/rʌɡ/",
            "exampleEn": "There is a soft rug on the floor.",
            "examplePt": "Há um tapete macio no chão."
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer",
            "translationPt": "Gaveta",
            "simplePronunciation": "dró-er",
            "phonetic": "/drɔːr/",
            "exampleEn": "Open the top drawer.",
            "examplePt": "Abra a gaveta de cima."
          }
        ],
        "options": [
          "Blanket",
          "Balcony",
          "Rug",
          "Drawer"
        ],
        "correctAnswer": "Drawer",
        "contextSentence": "Open the top drawer.",
        "contextSentencePt": "Abra a gaveta de cima.",
        "explanation": "Exemplo: \"Open the top drawer.\" — Abra a gaveta de cima.",
        "phoneticHint": "\"dró-er\" • /drɔːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Gate",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha",
            "simplePronunciation": "táu-el",
            "phonetic": "/ˈtaʊ.əl/",
            "exampleEn": "Dry your hands with a towel.",
            "examplePt": "Seque suas mãos com uma toalha."
          },
          {
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling",
            "translationPt": "Teto",
            "simplePronunciation": "sí-ling",
            "phonetic": "/ˈsiː.lɪŋ/",
            "exampleEn": "The lamp hangs from the ceiling.",
            "examplePt": "A luminária fica presa no teto."
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão",
            "simplePronunciation": "guêit",
            "phonetic": "/ɡeɪt/",
            "exampleEn": "Lock the front gate.",
            "examplePt": "Tranque o portão da frente."
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina",
            "simplePronunciation": "câr-ten",
            "phonetic": "/ˈkɜːr.tən/",
            "exampleEn": "Close the window curtain.",
            "examplePt": "Feche a cortina da janela."
          }
        ],
        "options": [
          "Towel",
          "Ceiling",
          "Gate",
          "Curtain"
        ],
        "correctAnswer": "Gate",
        "contextSentence": "Lock the front gate.",
        "contextSentencePt": "Tranque o portão da frente.",
        "explanation": "Exemplo: \"Lock the front gate.\" — Tranque o portão da frente.",
        "phoneticHint": "\"guêit\" • /ɡeɪt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p4",
    "worldId": 0,
    "phaseNumber": 4,
    "title": "Lição de Pronomes I • Pessoais & De Tratamento",
    "subtitle": "Módulo de Pronomes 1/6 (Após 3 de Vocabulário) • Pares Associativos + Voz da Professora",
    "pedagogicalObjective": "Dominar os Pronomes Pessoais (I, You, He, She, It, We, You, They) e os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma'am) com a voz humana e meiga da professora.",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à 1ª Lição Exclusiva de Pronomes (separada das lições de vocabulário, a cada 3 módulos)!",
      "1º Passo: Começamos pelos Pronomes Pessoais (I, You, He, She, It, We, You, They) — as palavrinhas que mostram quem está falando ou de quem falamos.",
      "2º Passo: Aprendemos os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma'am, Dr.) — as palavrinhas mágicas de respeito e educação."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p4-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Quem sou eu e quem é você?)",
        "conceptHeader": "São palavrinhas mágicas que usamos no lugar do nome! Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, \"He\" (Ele); e para uma menina, \"She\" (Ela)!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Conecte cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p4-b1-p1",
            "en": "I (\"ái\")",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" (\"ái\") significa \"Eu\"!"
          },
          {
            "id": "w0-p4-b1-p2",
            "en": "You (\"iú\")",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você (com quem estou falando)",
            "tipPt": "Isso mesmo! \"You\" (\"iú\") significa \"Você\"!"
          },
          {
            "id": "w0-p4-b1-p3",
            "en": "He (\"rí\")",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" (\"rí\") usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p4-b1-p4",
            "en": "She (\"xí\")",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" (\"xí\") usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Pronomes Pessoais do Singular: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-2",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Coisas, Bichinhos e Plural)",
        "conceptHeader": "Para 1 objeto da casa ou 1 bichinho, usamos \"It\" (Ele/Ela). Quando estamos juntos (eu + você), dizemos \"We\" (Nós). Para várias pessoas com quem falamos, \"You\" (Vocês); e para eles ou elas, \"They\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Ligue os Pronomes Pessoais de coisas/animais e do plural aos seus pares:",
        "pairs": [
          {
            "id": "w0-p4-b2-p5",
            "en": "It (\"ít\")",
            "emoji": "🐶",
            "phonetic": "/ɪt/",
            "pt": "Ele / Ela (para 1 objeto, casa ou animal)",
            "tipPt": "Isso! A porta, o sofá ou o cachorrinho são \"It\"!"
          },
          {
            "id": "w0-p4-b2-p6",
            "en": "We (\"uí\")",
            "emoji": "👨‍👩‍👧",
            "phonetic": "/wiː/",
            "pt": "Nós (eu e você juntos)",
            "tipPt": "Muito bem! \"We\" (\"uí\") significa \"Nós\"!"
          },
          {
            "id": "w0-p4-b2-p7",
            "en": "You (\"iú\" - plural)",
            "emoji": "👫",
            "phonetic": "/juː/",
            "pt": "Vocês (várias pessoas com quem falo)",
            "tipPt": "Ótimo! \"You\" serve para \"Você\" e também para \"Vocês\"!"
          },
          {
            "id": "w0-p4-b2-p8",
            "en": "They (\"dêi\")",
            "emoji": "👥",
            "phonetic": "/ðeɪ/",
            "pt": "Eles / Elas (pessoas, animais ou objetos)",
            "tipPt": "Perfeito! \"They\" (\"dêi\") é o plural para tudo!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "It (para 1 objeto/animal), We (Nós), You (Vocês), They (Eles/Elas).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-3",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Educação e Respeito - Parte 1)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora casada), \"Miss\" (Senhorita / Professora) e \"Ms.\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_2.wav",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p4-b3-t1",
            "en": "Mr. (\"mís-ter\")",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (usado antes do nome do homem)",
            "tipPt": "Muito educado! \"Mr. Silva\" = \"Senhor Silva\"!"
          },
          {
            "id": "w0-p4-b3-t2",
            "en": "Mrs. (\"mí-siz\")",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (usado para mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p4-b3-t3",
            "en": "Miss (\"mís\")",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (moça jovem ou professora)",
            "tipPt": "Isso! Na escola as crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p4-b3-t4",
            "en": "Ms. (\"míz\")",
            "emoji": "👩‍💼",
            "phonetic": "/mɪz/",
            "pt": "Senhora / Senhorita (para qualquer mulher)",
            "tipPt": "Excelente! \"Ms.\" é respeitoso para qualquer mulher!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Pronomes de Tratamento antes do nome: Mr. (Senhor), Mrs. (Senhora), Miss (Senhorita), Ms. (Senhora/Senhorita).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-4",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Educação no Dia a Dia - Parte 2)",
        "conceptHeader": "Quando falamos com respeito sem dizer o nome da pessoa, usamos \"Sir\" (Senhor) e \"Ma'am\" (Senhora). E para profissionais usamos \"Dr.\" (Doutor) e \"Prof.\" (Professor)!",
        "teacherAudioPt": "/audio/teacher/pronoun_2.wav",
        "prompt": "🤝 Ligue cada Pronome de Tratamento direto ao seu significado:",
        "pairs": [
          {
            "id": "w0-p4-b4-t5",
            "en": "Sir (\"sâr\")",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto: Yes, Sir!)",
            "tipPt": "Lindo! \"Thank you, Sir!\" = \"Obrigado, Senhor!\""
          },
          {
            "id": "w0-p4-b4-t6",
            "en": "Ma'am (\"mém\")",
            "emoji": "🌸",
            "phonetic": "/mæm/",
            "pt": "Senhora (tratamento direto: Yes, Ma'am!)",
            "tipPt": "Perfeito! \"Excuse me, Ma'am\" = \"Com licença, Senhora\"!"
          },
          {
            "id": "w0-p4-b4-t7",
            "en": "Dr. (\"dók-tor\")",
            "emoji": "🩺",
            "phonetic": "/ˈdɑːk.tər/",
            "pt": "Doutor / Doutora (médico ou dentista)",
            "tipPt": "Isso mesmo! \"Dr.\" usamos para médicos e doutores!"
          },
          {
            "id": "w0-p4-b4-t8",
            "en": "Prof. (\"pro-fé-sor\")",
            "emoji": "🎓",
            "phonetic": "/prəˈfes.ər/",
            "pt": "Professor(a) / Mestre",
            "tipPt": "Parabéns! Você concluiu Pessoais e Tratamento!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Sir (Senhor), Ma'am (Senhora), Dr. (Doutor/Doutora), Prof. (Professor/Mestre).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p5",
    "worldId": 0,
    "phaseNumber": 5,
    "themeId": "home",
    "themeTitle": "A Casa",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "title": "A Casa • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Tema 1 (Nível 4/4) • 12 palavras menos comuns e detalhes da casa",
    "pedagogicalObjective": "Conhecer termos mais específicos da casa: Attic, Basement, Chimney, Doorknob, Gutter, Fence, Mailbox, Doorbell, Faucet, Closet, Broom e Bucket.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 4 da Casa aprendemos palavras menos comuns ou específicas: Attic (\"é-tik\" = Sótão), Basement (\"bêis-ment\" = Porão), Chimney (\"tchím-ni\" = Chaminé), Doorknob (\"dór-nób\" = Maçaneta) e Gutter (\"gâ-ter\" = Calha).",
      "E completamos o tema A Casa com Fence (\"féns\" = Cerca), Mailbox (\"mêil-bóks\" = Caixa de correio), Doorbell (\"dór-bél\" = Campainha), Faucet (\"fó-set\" = Torneira), Closet (\"cló-zet\" = Armário), Broom (\"brúm\" = Vassoura) e Bucket (\"bâ-ket\" = Balde)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p5-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Attic",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura",
            "simplePronunciation": "brúm",
            "phonetic": "/bruːm/",
            "exampleEn": "Sweep the kitchen with a broom.",
            "examplePt": "Varra a cozinha com uma vassoura."
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are stored in the attic.",
            "examplePt": "Caixas antigas ficam guardadas no sótão."
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde",
            "simplePronunciation": "bâ-ket",
            "phonetic": "/ˈbʌk.ɪt/",
            "exampleEn": "Fill the bucket with water.",
            "examplePt": "Encha o balde com água."
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca",
            "simplePronunciation": "féns",
            "phonetic": "/fens/",
            "exampleEn": "A wooden fence surrounds the yard.",
            "examplePt": "Uma cerca de madeira rodeia o quintal."
          }
        ],
        "options": [
          "Broom",
          "Attic",
          "Bucket",
          "Fence"
        ],
        "correctAnswer": "Attic",
        "contextSentence": "Old boxes are stored in the attic.",
        "contextSentencePt": "Caixas antigas ficam guardadas no sótão.",
        "explanation": "Exemplo: \"Old boxes are stored in the attic.\" — Caixas antigas ficam guardadas no sótão.",
        "phoneticHint": "\"é-tik\" • /ˈæt.ɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Basement",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio",
            "simplePronunciation": "mêil-bóks",
            "phonetic": "/ˈmeɪl.bɑːks/",
            "exampleEn": "Check the mailbox for letters.",
            "examplePt": "Olhe a caixa de correio para ver se há cartas."
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira",
            "simplePronunciation": "fó-set",
            "phonetic": "/ˈfɔː.sɪt/",
            "exampleEn": "Turn off the water faucet.",
            "examplePt": "Feche a torneira de água."
          },
          {
            "text": "Closet",
            "emoji": "🚪",
            "label": "Closet",
            "translationPt": "Armário / Guarda-roupa",
            "simplePronunciation": "cló-zet",
            "phonetic": "/ˈklɑː.zɪt/",
            "exampleEn": "Hang your coat in the closet.",
            "examplePt": "Pendure seu casaco no armário."
          },
          {
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement",
            "translationPt": "Porão / Subsolo",
            "simplePronunciation": "bêis-ment",
            "phonetic": "/ˈbeɪs.mənt/",
            "exampleEn": "The laundry room is in the basement.",
            "examplePt": "A lavanderia fica no porão."
          }
        ],
        "options": [
          "Mailbox",
          "Faucet",
          "Closet",
          "Basement"
        ],
        "correctAnswer": "Basement",
        "contextSentence": "The laundry room is in the basement.",
        "contextSentencePt": "A lavanderia fica no porão.",
        "explanation": "Exemplo: \"The laundry room is in the basement.\" — A lavanderia fica no porão.",
        "phoneticHint": "\"bêis-ment\" • /ˈbeɪs.mənt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chimney",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney",
            "translationPt": "Chaminé",
            "simplePronunciation": "tchím-ni",
            "phonetic": "/ˈtʃɪm.ni/",
            "exampleEn": "Smoke comes out of the brick chimney.",
            "examplePt": "A fumaça sai pela chaminé."
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta",
            "simplePronunciation": "dór-nób",
            "phonetic": "/ˈdɔːr.nɑːb/",
            "exampleEn": "Turn the doorknob to open it.",
            "examplePt": "Gire a maçaneta para abrir."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha de chuva",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rainwater flows through the roof gutter.",
            "examplePt": "A água da chuva corre pela calha do telhado."
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha",
            "simplePronunciation": "dór-bél",
            "phonetic": "/ˈdɔːr.bel/",
            "exampleEn": "Somebody rang the doorbell.",
            "examplePt": "Alguém tocou a campainha."
          }
        ],
        "options": [
          "Chimney",
          "Doorknob",
          "Gutter",
          "Doorbell"
        ],
        "correctAnswer": "Chimney",
        "contextSentence": "Smoke comes out of the brick chimney.",
        "contextSentencePt": "A fumaça sai pela chaminé.",
        "explanation": "Exemplo: \"Smoke comes out of the brick chimney.\" — A fumaça sai pela chaminé.",
        "phoneticHint": "\"tchím-ni\" • /ˈtʃɪm.ni/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Doorknob",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are stored in the attic.",
            "examplePt": "Caixas antigas ficam guardadas no sótão."
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde",
            "simplePronunciation": "bâ-ket",
            "phonetic": "/ˈbʌk.ɪt/",
            "exampleEn": "Fill the bucket with water.",
            "examplePt": "Encha o balde com água."
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura",
            "simplePronunciation": "brúm",
            "phonetic": "/bruːm/",
            "exampleEn": "Sweep the kitchen with a broom.",
            "examplePt": "Varra a cozinha com uma vassoura."
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta",
            "simplePronunciation": "dór-nób",
            "phonetic": "/ˈdɔːr.nɑːb/",
            "exampleEn": "Turn the doorknob to open it.",
            "examplePt": "Gire a maçaneta para abrir."
          }
        ],
        "options": [
          "Attic",
          "Bucket",
          "Broom",
          "Doorknob"
        ],
        "correctAnswer": "Doorknob",
        "contextSentence": "Turn the doorknob to open it.",
        "contextSentencePt": "Gire a maçaneta para abrir.",
        "explanation": "Exemplo: \"Turn the doorknob to open it.\" — Gire a maçaneta para abrir.",
        "phoneticHint": "\"dór-nób\" • /ˈdɔːr.nɑːb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Gutter",
        "visualEmoji": "🌧️",
        "visualOptions": [
          {
            "text": "Closet",
            "emoji": "🚪",
            "label": "Closet",
            "translationPt": "Armário / Guarda-roupa",
            "simplePronunciation": "cló-zet",
            "phonetic": "/ˈklɑː.zɪt/",
            "exampleEn": "Hang your coat in the closet.",
            "examplePt": "Pendure seu casaco no armário."
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira",
            "simplePronunciation": "fó-set",
            "phonetic": "/ˈfɔː.sɪt/",
            "exampleEn": "Turn off the water faucet.",
            "examplePt": "Feche a torneira de água."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha de chuva",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rainwater flows through the roof gutter.",
            "examplePt": "A água da chuva corre pela calha do telhado."
          },
          {
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement",
            "translationPt": "Porão / Subsolo",
            "simplePronunciation": "bêis-ment",
            "phonetic": "/ˈbeɪs.mənt/",
            "exampleEn": "The laundry room is in the basement.",
            "examplePt": "A lavanderia fica no porão."
          }
        ],
        "options": [
          "Closet",
          "Faucet",
          "Gutter",
          "Basement"
        ],
        "correctAnswer": "Gutter",
        "contextSentence": "Rainwater flows through the roof gutter.",
        "contextSentencePt": "A água da chuva corre pela calha do telhado.",
        "explanation": "Exemplo: \"Rainwater flows through the roof gutter.\" — A água da chuva corre pela calha do telhado.",
        "phoneticHint": "\"gâ-ter\" • /ˈɡʌt.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fence",
        "visualEmoji": "🏡",
        "visualOptions": [
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca",
            "simplePronunciation": "féns",
            "phonetic": "/fens/",
            "exampleEn": "A wooden fence surrounds the yard.",
            "examplePt": "Uma cerca de madeira rodeia o quintal."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha de chuva",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rainwater flows through the roof gutter.",
            "examplePt": "A água da chuva corre pela calha do telhado."
          },
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney",
            "translationPt": "Chaminé",
            "simplePronunciation": "tchím-ni",
            "phonetic": "/ˈtʃɪm.ni/",
            "exampleEn": "Smoke comes out of the brick chimney.",
            "examplePt": "A fumaça sai pela chaminé."
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio",
            "simplePronunciation": "mêil-bóks",
            "phonetic": "/ˈmeɪl.bɑːks/",
            "exampleEn": "Check the mailbox for letters.",
            "examplePt": "Olhe a caixa de correio para ver se há cartas."
          }
        ],
        "options": [
          "Fence",
          "Gutter",
          "Chimney",
          "Mailbox"
        ],
        "correctAnswer": "Fence",
        "contextSentence": "A wooden fence surrounds the yard.",
        "contextSentencePt": "Uma cerca de madeira rodeia o quintal.",
        "explanation": "Exemplo: \"A wooden fence surrounds the yard.\" — Uma cerca de madeira rodeia o quintal.",
        "phoneticHint": "\"féns\" • /fens/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Mailbox",
        "visualEmoji": "📫",
        "visualOptions": [
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura",
            "simplePronunciation": "brúm",
            "phonetic": "/bruːm/",
            "exampleEn": "Sweep the kitchen with a broom.",
            "examplePt": "Varra a cozinha com uma vassoura."
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio",
            "simplePronunciation": "mêil-bóks",
            "phonetic": "/ˈmeɪl.bɑːks/",
            "exampleEn": "Check the mailbox for letters.",
            "examplePt": "Olhe a caixa de correio para ver se há cartas."
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are stored in the attic.",
            "examplePt": "Caixas antigas ficam guardadas no sótão."
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta",
            "simplePronunciation": "dór-nób",
            "phonetic": "/ˈdɔːr.nɑːb/",
            "exampleEn": "Turn the doorknob to open it.",
            "examplePt": "Gire a maçaneta para abrir."
          }
        ],
        "options": [
          "Broom",
          "Mailbox",
          "Attic",
          "Doorknob"
        ],
        "correctAnswer": "Mailbox",
        "contextSentence": "Check the mailbox for letters.",
        "contextSentencePt": "Olhe a caixa de correio para ver se há cartas.",
        "explanation": "Exemplo: \"Check the mailbox for letters.\" — Olhe a caixa de correio para ver se há cartas.",
        "phoneticHint": "\"mêil-bóks\" • /ˈmeɪl.bɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Doorbell",
        "visualEmoji": "🔔",
        "visualOptions": [
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney",
            "translationPt": "Chaminé",
            "simplePronunciation": "tchím-ni",
            "phonetic": "/ˈtʃɪm.ni/",
            "exampleEn": "Smoke comes out of the brick chimney.",
            "examplePt": "A fumaça sai pela chaminé."
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha",
            "simplePronunciation": "dór-bél",
            "phonetic": "/ˈdɔːr.bel/",
            "exampleEn": "Somebody rang the doorbell.",
            "examplePt": "Alguém tocou a campainha."
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca",
            "simplePronunciation": "féns",
            "phonetic": "/fens/",
            "exampleEn": "A wooden fence surrounds the yard.",
            "examplePt": "Uma cerca de madeira rodeia o quintal."
          },
          {
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement",
            "translationPt": "Porão / Subsolo",
            "simplePronunciation": "bêis-ment",
            "phonetic": "/ˈbeɪs.mənt/",
            "exampleEn": "The laundry room is in the basement.",
            "examplePt": "A lavanderia fica no porão."
          }
        ],
        "options": [
          "Chimney",
          "Doorbell",
          "Fence",
          "Basement"
        ],
        "correctAnswer": "Doorbell",
        "contextSentence": "Somebody rang the doorbell.",
        "contextSentencePt": "Alguém tocou a campainha.",
        "explanation": "Exemplo: \"Somebody rang the doorbell.\" — Alguém tocou a campainha.",
        "phoneticHint": "\"dór-bél\" • /ˈdɔːr.bel/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Faucet",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio",
            "simplePronunciation": "mêil-bóks",
            "phonetic": "/ˈmeɪl.bɑːks/",
            "exampleEn": "Check the mailbox for letters.",
            "examplePt": "Olhe a caixa de correio para ver se há cartas."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha de chuva",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rainwater flows through the roof gutter.",
            "examplePt": "A água da chuva corre pela calha do telhado."
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha",
            "simplePronunciation": "dór-bél",
            "phonetic": "/ˈdɔːr.bel/",
            "exampleEn": "Somebody rang the doorbell.",
            "examplePt": "Alguém tocou a campainha."
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira",
            "simplePronunciation": "fó-set",
            "phonetic": "/ˈfɔː.sɪt/",
            "exampleEn": "Turn off the water faucet.",
            "examplePt": "Feche a torneira de água."
          }
        ],
        "options": [
          "Mailbox",
          "Gutter",
          "Doorbell",
          "Faucet"
        ],
        "correctAnswer": "Faucet",
        "contextSentence": "Turn off the water faucet.",
        "contextSentencePt": "Feche a torneira de água.",
        "explanation": "Exemplo: \"Turn off the water faucet.\" — Feche a torneira de água.",
        "phoneticHint": "\"fó-set\" • /ˈfɔː.sɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Closet",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha",
            "simplePronunciation": "dór-bél",
            "phonetic": "/ˈdɔːr.bel/",
            "exampleEn": "Somebody rang the doorbell.",
            "examplePt": "Alguém tocou a campainha."
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta",
            "simplePronunciation": "dór-nób",
            "phonetic": "/ˈdɔːr.nɑːb/",
            "exampleEn": "Turn the doorknob to open it.",
            "examplePt": "Gire a maçaneta para abrir."
          },
          {
            "text": "Closet",
            "emoji": "🚪",
            "label": "Closet",
            "translationPt": "Armário / Guarda-roupa",
            "simplePronunciation": "cló-zet",
            "phonetic": "/ˈklɑː.zɪt/",
            "exampleEn": "Hang your coat in the closet.",
            "examplePt": "Pendure seu casaco no armário."
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are stored in the attic.",
            "examplePt": "Caixas antigas ficam guardadas no sótão."
          }
        ],
        "options": [
          "Doorbell",
          "Doorknob",
          "Closet",
          "Attic"
        ],
        "correctAnswer": "Closet",
        "contextSentence": "Hang your coat in the closet.",
        "contextSentencePt": "Pendure seu casaco no armário.",
        "explanation": "Exemplo: \"Hang your coat in the closet.\" — Pendure seu casaco no armário.",
        "phoneticHint": "\"cló-zet\" • /ˈklɑː.zɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Broom",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura",
            "simplePronunciation": "brúm",
            "phonetic": "/bruːm/",
            "exampleEn": "Sweep the kitchen with a broom.",
            "examplePt": "Varra a cozinha com uma vassoura."
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca",
            "simplePronunciation": "féns",
            "phonetic": "/fens/",
            "exampleEn": "A wooden fence surrounds the yard.",
            "examplePt": "Uma cerca de madeira rodeia o quintal."
          },
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney",
            "translationPt": "Chaminé",
            "simplePronunciation": "tchím-ni",
            "phonetic": "/ˈtʃɪm.ni/",
            "exampleEn": "Smoke comes out of the brick chimney.",
            "examplePt": "A fumaça sai pela chaminé."
          },
          {
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement",
            "translationPt": "Porão / Subsolo",
            "simplePronunciation": "bêis-ment",
            "phonetic": "/ˈbeɪs.mənt/",
            "exampleEn": "The laundry room is in the basement.",
            "examplePt": "A lavanderia fica no porão."
          }
        ],
        "options": [
          "Broom",
          "Fence",
          "Chimney",
          "Basement"
        ],
        "correctAnswer": "Broom",
        "contextSentence": "Sweep the kitchen with a broom.",
        "contextSentencePt": "Varra a cozinha com uma vassoura.",
        "explanation": "Exemplo: \"Sweep the kitchen with a broom.\" — Varra a cozinha com uma vassoura.",
        "phoneticHint": "\"brúm\" • /bruːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bucket",
        "visualEmoji": "🪣",
        "visualOptions": [
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio",
            "simplePronunciation": "mêil-bóks",
            "phonetic": "/ˈmeɪl.bɑːks/",
            "exampleEn": "Check the mailbox for letters.",
            "examplePt": "Olhe a caixa de correio para ver se há cartas."
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira",
            "simplePronunciation": "fó-set",
            "phonetic": "/ˈfɔː.sɪt/",
            "exampleEn": "Turn off the water faucet.",
            "examplePt": "Feche a torneira de água."
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde",
            "simplePronunciation": "bâ-ket",
            "phonetic": "/ˈbʌk.ɪt/",
            "exampleEn": "Fill the bucket with water.",
            "examplePt": "Encha o balde com água."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha de chuva",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rainwater flows through the roof gutter.",
            "examplePt": "A água da chuva corre pela calha do telhado."
          }
        ],
        "options": [
          "Mailbox",
          "Faucet",
          "Bucket",
          "Gutter"
        ],
        "correctAnswer": "Bucket",
        "contextSentence": "Fill the bucket with water.",
        "contextSentencePt": "Encha o balde com água.",
        "explanation": "Exemplo: \"Fill the bucket with water.\" — Encha o balde com água.",
        "phoneticHint": "\"bâ-ket\" • /ˈbʌk.ɪt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p6",
    "worldId": 0,
    "phaseNumber": 6,
    "themeId": "food",
    "themeTitle": "Comida",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "title": "Comida • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema 2 (Nível 1/4) • Os 12 alimentos e bebidas mais básicos do dia a dia",
    "pedagogicalObjective": "Dominar os alimentos e bebidas indispensáveis: Bread, Rice, Beans, Meat, Chicken, Egg, Milk, Coffee, Juice, Apple, Banana e Cheese.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Iniciamos o Tema 2 (Comida • Módulo 1: Essenciais): Bread (\"bréd\" = Pão), Rice (\"ráis\" = Arroz), Beans (\"bínz\" = Feijão), Meat (\"mít\" = Carne), Chicken (\"tchí-ken\" = Frango) e Egg (\"ég\" = Ovo).",
      "E completamos os essenciais com Milk (\"mílk\" = Leite), Coffee (\"có-fi\" = Café), Juice (\"djús\" = Suco), Apple (\"é-pol\" = Maçã), Banana (\"ba-né-na\" = Banana) e Cheese (\"tchíz\" = Queijo)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p6-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo",
            "simplePronunciation": "ég",
            "phonetic": "/eɡ/",
            "exampleEn": "I like fried eggs in the morning.",
            "examplePt": "Eu gosto de ovos fritos de manhã."
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana",
            "simplePronunciation": "ba-né-na",
            "phonetic": "/bəˈnæn.ə/",
            "exampleEn": "Peel the yellow banana.",
            "examplePt": "Descasque a banana amarela."
          },
          {
            "text": "Chicken",
            "emoji": "🍗",
            "label": "Chicken",
            "translationPt": "Frango",
            "simplePronunciation": "tchí-ken",
            "phonetic": "/ˈtʃɪk.ɪn/",
            "exampleEn": "We had roast chicken for lunch.",
            "examplePt": "Comemos frango assado no almoço."
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão",
            "simplePronunciation": "bréd",
            "phonetic": "/bred/",
            "exampleEn": "I eat warm bread for breakfast.",
            "examplePt": "Eu como pão quentinho no café da manhã."
          }
        ],
        "options": [
          "Egg",
          "Banana",
          "Chicken",
          "Bread"
        ],
        "correctAnswer": "Bread",
        "contextSentence": "I eat warm bread for breakfast.",
        "contextSentencePt": "Eu como pão quentinho no café da manhã.",
        "explanation": "Exemplo: \"I eat warm bread for breakfast.\" — Eu como pão quentinho no café da manhã.",
        "phoneticHint": "\"bréd\" • /bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
        "visualOptions": [
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz",
            "simplePronunciation": "ráis",
            "phonetic": "/raɪs/",
            "exampleEn": "We eat white rice every day.",
            "examplePt": "Nós comemos arroz branco todos os dias."
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite",
            "simplePronunciation": "mílk",
            "phonetic": "/mɪlk/",
            "exampleEn": "Drink a glass of warm milk.",
            "examplePt": "Beba um copo de leite morno."
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café",
            "simplePronunciation": "có-fi",
            "phonetic": "/ˈkɔː.fi/",
            "exampleEn": "She loves hot coffee.",
            "examplePt": "Ela adora café quente."
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo",
            "simplePronunciation": "tchíz",
            "phonetic": "/tʃiːz/",
            "exampleEn": "Put cheese on the bread.",
            "examplePt": "Coloque queijo no pão."
          }
        ],
        "options": [
          "Rice",
          "Milk",
          "Coffee",
          "Cheese"
        ],
        "correctAnswer": "Rice",
        "contextSentence": "We eat white rice every day.",
        "contextSentencePt": "Nós comemos arroz branco todos os dias.",
        "explanation": "Exemplo: \"We eat white rice every day.\" — Nós comemos arroz branco todos os dias.",
        "phoneticHint": "\"ráis\" • /raɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Beans",
        "visualEmoji": "🫘",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã",
            "simplePronunciation": "é-pol",
            "phonetic": "/ˈæp.əl/",
            "exampleEn": "This red apple is sweet.",
            "examplePt": "Esta maçã vermelha é doce."
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco",
            "simplePronunciation": "djús",
            "phonetic": "/dʒuːs/",
            "exampleEn": "Fresh orange juice is delicious.",
            "examplePt": "Suco de laranja fresco é delicioso."
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão",
            "simplePronunciation": "bréd",
            "phonetic": "/bred/",
            "exampleEn": "I eat warm bread for breakfast.",
            "examplePt": "Eu como pão quentinho no café da manhã."
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão",
            "simplePronunciation": "bínz",
            "phonetic": "/biːnz/",
            "exampleEn": "Rice and beans taste great.",
            "examplePt": "Arroz e feijão são deliciosos."
          }
        ],
        "options": [
          "Apple",
          "Juice",
          "Bread",
          "Beans"
        ],
        "correctAnswer": "Beans",
        "contextSentence": "Rice and beans taste great.",
        "contextSentencePt": "Arroz e feijão são deliciosos.",
        "explanation": "Exemplo: \"Rice and beans taste great.\" — Arroz e feijão são deliciosos.",
        "phoneticHint": "\"bínz\" • /biːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Meat",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão",
            "simplePronunciation": "bínz",
            "phonetic": "/biːnz/",
            "exampleEn": "Rice and beans taste great.",
            "examplePt": "Arroz e feijão são deliciosos."
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite",
            "simplePronunciation": "mílk",
            "phonetic": "/mɪlk/",
            "exampleEn": "Drink a glass of warm milk.",
            "examplePt": "Beba um copo de leite morno."
          },
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat",
            "translationPt": "Carne",
            "simplePronunciation": "mít",
            "phonetic": "/miːt/",
            "exampleEn": "He cooked the meat on the grill.",
            "examplePt": "Ele assou a carne na grelha."
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz",
            "simplePronunciation": "ráis",
            "phonetic": "/raɪs/",
            "exampleEn": "We eat white rice every day.",
            "examplePt": "Nós comemos arroz branco todos os dias."
          }
        ],
        "options": [
          "Beans",
          "Milk",
          "Meat",
          "Rice"
        ],
        "correctAnswer": "Meat",
        "contextSentence": "He cooked the meat on the grill.",
        "contextSentencePt": "Ele assou a carne na grelha.",
        "explanation": "Exemplo: \"He cooked the meat on the grill.\" — Ele assou a carne na grelha.",
        "phoneticHint": "\"mít\" • /miːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Chicken",
        "visualEmoji": "🍗",
        "visualOptions": [
          {
            "text": "Chicken",
            "emoji": "🍗",
            "label": "Chicken",
            "translationPt": "Frango",
            "simplePronunciation": "tchí-ken",
            "phonetic": "/ˈtʃɪk.ɪn/",
            "exampleEn": "We had roast chicken for lunch.",
            "examplePt": "Comemos frango assado no almoço."
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana",
            "simplePronunciation": "ba-né-na",
            "phonetic": "/bəˈnæn.ə/",
            "exampleEn": "Peel the yellow banana.",
            "examplePt": "Descasque a banana amarela."
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café",
            "simplePronunciation": "có-fi",
            "phonetic": "/ˈkɔː.fi/",
            "exampleEn": "She loves hot coffee.",
            "examplePt": "Ela adora café quente."
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo",
            "simplePronunciation": "tchíz",
            "phonetic": "/tʃiːz/",
            "exampleEn": "Put cheese on the bread.",
            "examplePt": "Coloque queijo no pão."
          }
        ],
        "options": [
          "Chicken",
          "Banana",
          "Coffee",
          "Cheese"
        ],
        "correctAnswer": "Chicken",
        "contextSentence": "We had roast chicken for lunch.",
        "contextSentencePt": "Comemos frango assado no almoço.",
        "explanation": "Exemplo: \"We had roast chicken for lunch.\" — Comemos frango assado no almoço.",
        "phoneticHint": "\"tchí-ken\" • /ˈtʃɪk.ɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Egg",
        "visualEmoji": "🥚",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão",
            "simplePronunciation": "bréd",
            "phonetic": "/bred/",
            "exampleEn": "I eat warm bread for breakfast.",
            "examplePt": "Eu como pão quentinho no café da manhã."
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo",
            "simplePronunciation": "ég",
            "phonetic": "/eɡ/",
            "exampleEn": "I like fried eggs in the morning.",
            "examplePt": "Eu gosto de ovos fritos de manhã."
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco",
            "simplePronunciation": "djús",
            "phonetic": "/dʒuːs/",
            "exampleEn": "Fresh orange juice is delicious.",
            "examplePt": "Suco de laranja fresco é delicioso."
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã",
            "simplePronunciation": "é-pol",
            "phonetic": "/ˈæp.əl/",
            "exampleEn": "This red apple is sweet.",
            "examplePt": "Esta maçã vermelha é doce."
          }
        ],
        "options": [
          "Bread",
          "Egg",
          "Juice",
          "Apple"
        ],
        "correctAnswer": "Egg",
        "contextSentence": "I like fried eggs in the morning.",
        "contextSentencePt": "Eu gosto de ovos fritos de manhã.",
        "explanation": "Exemplo: \"I like fried eggs in the morning.\" — Eu gosto de ovos fritos de manhã.",
        "phoneticHint": "\"ég\" • /eɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz",
            "simplePronunciation": "ráis",
            "phonetic": "/raɪs/",
            "exampleEn": "We eat white rice every day.",
            "examplePt": "Nós comemos arroz branco todos os dias."
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite",
            "simplePronunciation": "mílk",
            "phonetic": "/mɪlk/",
            "exampleEn": "Drink a glass of warm milk.",
            "examplePt": "Beba um copo de leite morno."
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão",
            "simplePronunciation": "bínz",
            "phonetic": "/biːnz/",
            "exampleEn": "Rice and beans taste great.",
            "examplePt": "Arroz e feijão são deliciosos."
          },
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat",
            "translationPt": "Carne",
            "simplePronunciation": "mít",
            "phonetic": "/miːt/",
            "exampleEn": "He cooked the meat on the grill.",
            "examplePt": "Ele assou a carne na grelha."
          }
        ],
        "options": [
          "Rice",
          "Milk",
          "Beans",
          "Meat"
        ],
        "correctAnswer": "Milk",
        "contextSentence": "Drink a glass of warm milk.",
        "contextSentencePt": "Beba um copo de leite morno.",
        "explanation": "Exemplo: \"Drink a glass of warm milk.\" — Beba um copo de leite morno.",
        "phoneticHint": "\"mílk\" • /mɪlk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Coffee",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Chicken",
            "emoji": "🍗",
            "label": "Chicken",
            "translationPt": "Frango",
            "simplePronunciation": "tchí-ken",
            "phonetic": "/ˈtʃɪk.ɪn/",
            "exampleEn": "We had roast chicken for lunch.",
            "examplePt": "Comemos frango assado no almoço."
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo",
            "simplePronunciation": "tchíz",
            "phonetic": "/tʃiːz/",
            "exampleEn": "Put cheese on the bread.",
            "examplePt": "Coloque queijo no pão."
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana",
            "simplePronunciation": "ba-né-na",
            "phonetic": "/bəˈnæn.ə/",
            "exampleEn": "Peel the yellow banana.",
            "examplePt": "Descasque a banana amarela."
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café",
            "simplePronunciation": "có-fi",
            "phonetic": "/ˈkɔː.fi/",
            "exampleEn": "She loves hot coffee.",
            "examplePt": "Ela adora café quente."
          }
        ],
        "options": [
          "Chicken",
          "Cheese",
          "Banana",
          "Coffee"
        ],
        "correctAnswer": "Coffee",
        "contextSentence": "She loves hot coffee.",
        "contextSentencePt": "Ela adora café quente.",
        "explanation": "Exemplo: \"She loves hot coffee.\" — Ela adora café quente.",
        "phoneticHint": "\"có-fi\" • /ˈkɔː.fi/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Juice",
        "visualEmoji": "🧃",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo",
            "simplePronunciation": "ég",
            "phonetic": "/eɡ/",
            "exampleEn": "I like fried eggs in the morning.",
            "examplePt": "Eu gosto de ovos fritos de manhã."
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite",
            "simplePronunciation": "mílk",
            "phonetic": "/mɪlk/",
            "exampleEn": "Drink a glass of warm milk.",
            "examplePt": "Beba um copo de leite morno."
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco",
            "simplePronunciation": "djús",
            "phonetic": "/dʒuːs/",
            "exampleEn": "Fresh orange juice is delicious.",
            "examplePt": "Suco de laranja fresco é delicioso."
          },
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat",
            "translationPt": "Carne",
            "simplePronunciation": "mít",
            "phonetic": "/miːt/",
            "exampleEn": "He cooked the meat on the grill.",
            "examplePt": "Ele assou a carne na grelha."
          }
        ],
        "options": [
          "Egg",
          "Milk",
          "Juice",
          "Meat"
        ],
        "correctAnswer": "Juice",
        "contextSentence": "Fresh orange juice is delicious.",
        "contextSentencePt": "Suco de laranja fresco é delicioso.",
        "explanation": "Exemplo: \"Fresh orange juice is delicious.\" — Suco de laranja fresco é delicioso.",
        "phoneticHint": "\"djús\" • /dʒuːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã",
            "simplePronunciation": "é-pol",
            "phonetic": "/ˈæp.əl/",
            "exampleEn": "This red apple is sweet.",
            "examplePt": "Esta maçã vermelha é doce."
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão",
            "simplePronunciation": "bréd",
            "phonetic": "/bred/",
            "exampleEn": "I eat warm bread for breakfast.",
            "examplePt": "Eu como pão quentinho no café da manhã."
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão",
            "simplePronunciation": "bínz",
            "phonetic": "/biːnz/",
            "exampleEn": "Rice and beans taste great.",
            "examplePt": "Arroz e feijão são deliciosos."
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz",
            "simplePronunciation": "ráis",
            "phonetic": "/raɪs/",
            "exampleEn": "We eat white rice every day.",
            "examplePt": "Nós comemos arroz branco todos os dias."
          }
        ],
        "options": [
          "Apple",
          "Bread",
          "Beans",
          "Rice"
        ],
        "correctAnswer": "Apple",
        "contextSentence": "This red apple is sweet.",
        "contextSentencePt": "Esta maçã vermelha é doce.",
        "explanation": "Exemplo: \"This red apple is sweet.\" — Esta maçã vermelha é doce.",
        "phoneticHint": "\"é-pol\" • /ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Banana",
        "visualEmoji": "🍌",
        "visualOptions": [
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat",
            "translationPt": "Carne",
            "simplePronunciation": "mít",
            "phonetic": "/miːt/",
            "exampleEn": "He cooked the meat on the grill.",
            "examplePt": "Ele assou a carne na grelha."
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café",
            "simplePronunciation": "có-fi",
            "phonetic": "/ˈkɔː.fi/",
            "exampleEn": "She loves hot coffee.",
            "examplePt": "Ela adora café quente."
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana",
            "simplePronunciation": "ba-né-na",
            "phonetic": "/bəˈnæn.ə/",
            "exampleEn": "Peel the yellow banana.",
            "examplePt": "Descasque a banana amarela."
          },
          {
            "text": "Chicken",
            "emoji": "🍗",
            "label": "Chicken",
            "translationPt": "Frango",
            "simplePronunciation": "tchí-ken",
            "phonetic": "/ˈtʃɪk.ɪn/",
            "exampleEn": "We had roast chicken for lunch.",
            "examplePt": "Comemos frango assado no almoço."
          }
        ],
        "options": [
          "Meat",
          "Coffee",
          "Banana",
          "Chicken"
        ],
        "correctAnswer": "Banana",
        "contextSentence": "Peel the yellow banana.",
        "contextSentencePt": "Descasque a banana amarela.",
        "explanation": "Exemplo: \"Peel the yellow banana.\" — Descasque a banana amarela.",
        "phoneticHint": "\"ba-né-na\" • /bəˈnæn.ə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo",
            "simplePronunciation": "ég",
            "phonetic": "/eɡ/",
            "exampleEn": "I like fried eggs in the morning.",
            "examplePt": "Eu gosto de ovos fritos de manhã."
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo",
            "simplePronunciation": "tchíz",
            "phonetic": "/tʃiːz/",
            "exampleEn": "Put cheese on the bread.",
            "examplePt": "Coloque queijo no pão."
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco",
            "simplePronunciation": "djús",
            "phonetic": "/dʒuːs/",
            "exampleEn": "Fresh orange juice is delicious.",
            "examplePt": "Suco de laranja fresco é delicioso."
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite",
            "simplePronunciation": "mílk",
            "phonetic": "/mɪlk/",
            "exampleEn": "Drink a glass of warm milk.",
            "examplePt": "Beba um copo de leite morno."
          }
        ],
        "options": [
          "Egg",
          "Cheese",
          "Juice",
          "Milk"
        ],
        "correctAnswer": "Cheese",
        "contextSentence": "Put cheese on the bread.",
        "contextSentencePt": "Coloque queijo no pão.",
        "explanation": "Exemplo: \"Put cheese on the bread.\" — Coloque queijo no pão.",
        "phoneticHint": "\"tchíz\" • /tʃiːz/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p7",
    "worldId": 0,
    "phaseNumber": 7,
    "themeId": "food",
    "themeTitle": "Comida",
    "frequencyLevel": "Módulo 2 • Comuns",
    "title": "Comida • Módulo 2: Palavras Comuns",
    "subtitle": "Tema 2 (Nível 2/4) • 12 comidas muito comuns nas refeições",
    "pedagogicalObjective": "Aprender pratos e alimentos muito frequentes: Butter, Fish, Soup, Salad, Pasta, Pizza, Cake, Orange, Tomato, Potato, Sugar e Salt.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 2 de Comida aprendemos alimentos comuns: Butter (\"bâ-ter\" = Manteiga), Fish (\"fíx\" = Peixe), Soup (\"súp\" = Sopa), Salad (\"sé-lad\" = Salada), Pasta (\"pás-ta\" = Macarrão) e Pizza (\"pít-sa\" = Pizza).",
      "Também vemos Cake (\"kêik\" = Bolo), Orange (\"ó-rendj\" = Laranja), Tomato (\"to-mêi-tou\" = Tomate), Potato (\"po-têi-tou\" = Batata), Sugar (\"xú-gar\" = Açúcar) e Salt (\"sólt\" = Sal).",
      "Logo após este módulo, você fará o seu 2º Módulo Exclusivo de Pronomes (Possessivos & Demonstrativos)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p7-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Butter",
        "visualEmoji": "🧈",
        "visualOptions": [
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga",
            "simplePronunciation": "bâ-ter",
            "phonetic": "/ˈbʌt.ər/",
            "exampleEn": "Spread butter on the toast.",
            "examplePt": "Passe manteiga na torrada."
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja",
            "simplePronunciation": "ó-rendj",
            "phonetic": "/ˈɔːr.ɪndʒ/",
            "exampleEn": "This orange is very juicy.",
            "examplePt": "Esta laranja tem muito suco."
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo",
            "simplePronunciation": "kêik",
            "phonetic": "/keɪk/",
            "exampleEn": "She baked a chocolate cake.",
            "examplePt": "Ela assou um bolo de chocolate."
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada",
            "simplePronunciation": "sé-lad",
            "phonetic": "/ˈsæl.əd/",
            "exampleEn": "I made a fresh green salad.",
            "examplePt": "Eu fiz uma salada verde fresca."
          }
        ],
        "options": [
          "Butter",
          "Orange",
          "Cake",
          "Salad"
        ],
        "correctAnswer": "Butter",
        "contextSentence": "Spread butter on the toast.",
        "contextSentencePt": "Passe manteiga na torrada.",
        "explanation": "Exemplo: \"Spread butter on the toast.\" — Passe manteiga na torrada.",
        "phoneticHint": "\"bâ-ter\" • /ˈbʌt.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Fish",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Salt",
            "emoji": "🧂",
            "label": "Salt",
            "translationPt": "Sal",
            "simplePronunciation": "sólt",
            "phonetic": "/sɔːlt/",
            "exampleEn": "Add a little salt to the food.",
            "examplePt": "Coloque um pouco de sal na comida."
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate",
            "simplePronunciation": "to-mêi-tou",
            "phonetic": "/təˈmeɪ.toʊ/",
            "exampleEn": "Slice the red tomato.",
            "examplePt": "Corte o tomate vermelho em fatias."
          },
          {
            "text": "Sugar",
            "emoji": "🥄",
            "label": "Sugar",
            "translationPt": "Açúcar",
            "simplePronunciation": "xú-gar",
            "phonetic": "/ˈʃʊɡ.ər/",
            "exampleEn": "Do you want sugar in your coffee?",
            "examplePt": "Você quer açúcar no seu café?"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe",
            "simplePronunciation": "fíx",
            "phonetic": "/fɪʃ/",
            "exampleEn": "Grilled fish is very healthy.",
            "examplePt": "Peixe grelhado é muito saudável."
          }
        ],
        "options": [
          "Salt",
          "Tomato",
          "Sugar",
          "Fish"
        ],
        "correctAnswer": "Fish",
        "contextSentence": "Grilled fish is very healthy.",
        "contextSentencePt": "Peixe grelhado é muito saudável.",
        "explanation": "Exemplo: \"Grilled fish is very healthy.\" — Peixe grelhado é muito saudável.",
        "phoneticHint": "\"fíx\" • /fɪʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Soup",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga",
            "simplePronunciation": "bâ-ter",
            "phonetic": "/ˈbʌt.ər/",
            "exampleEn": "Spread butter on the toast.",
            "examplePt": "Passe manteiga na torrada."
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe",
            "simplePronunciation": "fíx",
            "phonetic": "/fɪʃ/",
            "exampleEn": "Grilled fish is very healthy.",
            "examplePt": "Peixe grelhado é muito saudável."
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa",
            "simplePronunciation": "súp",
            "phonetic": "/suːp/",
            "exampleEn": "Hot soup is great on cold nights.",
            "examplePt": "Sopa quente é ótima em noites frias."
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão",
            "simplePronunciation": "pás-ta",
            "phonetic": "/ˈpɑː.stə/",
            "exampleEn": "We love pasta with tomato sauce.",
            "examplePt": "Adoramos macarrão com molho de tomate."
          }
        ],
        "options": [
          "Butter",
          "Fish",
          "Soup",
          "Pasta"
        ],
        "correctAnswer": "Soup",
        "contextSentence": "Hot soup is great on cold nights.",
        "contextSentencePt": "Sopa quente é ótima em noites frias.",
        "explanation": "Exemplo: \"Hot soup is great on cold nights.\" — Sopa quente é ótima em noites frias.",
        "phoneticHint": "\"súp\" • /suːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Salad",
        "visualEmoji": "🥗",
        "visualOptions": [
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada",
            "simplePronunciation": "sé-lad",
            "phonetic": "/ˈsæl.əd/",
            "exampleEn": "I made a fresh green salad.",
            "examplePt": "Eu fiz uma salada verde fresca."
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata",
            "simplePronunciation": "po-têi-tou",
            "phonetic": "/pəˈteɪ.toʊ/",
            "exampleEn": "Baked potatoes are delicious.",
            "examplePt": "Batatas assadas são deliciosas."
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo",
            "simplePronunciation": "kêik",
            "phonetic": "/keɪk/",
            "exampleEn": "She baked a chocolate cake.",
            "examplePt": "Ela assou um bolo de chocolate."
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja",
            "simplePronunciation": "ó-rendj",
            "phonetic": "/ˈɔːr.ɪndʒ/",
            "exampleEn": "This orange is very juicy.",
            "examplePt": "Esta laranja tem muito suco."
          }
        ],
        "options": [
          "Salad",
          "Potato",
          "Cake",
          "Orange"
        ],
        "correctAnswer": "Salad",
        "contextSentence": "I made a fresh green salad.",
        "contextSentencePt": "Eu fiz uma salada verde fresca.",
        "explanation": "Exemplo: \"I made a fresh green salad.\" — Eu fiz uma salada verde fresca.",
        "phoneticHint": "\"sé-lad\" • /ˈsæl.əd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pasta",
        "visualEmoji": "🍝",
        "visualOptions": [
          {
            "text": "Salt",
            "emoji": "🧂",
            "label": "Salt",
            "translationPt": "Sal",
            "simplePronunciation": "sólt",
            "phonetic": "/sɔːlt/",
            "exampleEn": "Add a little salt to the food.",
            "examplePt": "Coloque um pouco de sal na comida."
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão",
            "simplePronunciation": "pás-ta",
            "phonetic": "/ˈpɑː.stə/",
            "exampleEn": "We love pasta with tomato sauce.",
            "examplePt": "Adoramos macarrão com molho de tomate."
          },
          {
            "text": "Sugar",
            "emoji": "🥄",
            "label": "Sugar",
            "translationPt": "Açúcar",
            "simplePronunciation": "xú-gar",
            "phonetic": "/ˈʃʊɡ.ər/",
            "exampleEn": "Do you want sugar in your coffee?",
            "examplePt": "Você quer açúcar no seu café?"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate",
            "simplePronunciation": "to-mêi-tou",
            "phonetic": "/təˈmeɪ.toʊ/",
            "exampleEn": "Slice the red tomato.",
            "examplePt": "Corte o tomate vermelho em fatias."
          }
        ],
        "options": [
          "Salt",
          "Pasta",
          "Sugar",
          "Tomato"
        ],
        "correctAnswer": "Pasta",
        "contextSentence": "We love pasta with tomato sauce.",
        "contextSentencePt": "Adoramos macarrão com molho de tomate.",
        "explanation": "Exemplo: \"We love pasta with tomato sauce.\" — Adoramos macarrão com molho de tomate.",
        "phoneticHint": "\"pás-ta\" • /ˈpɑː.stə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga",
            "simplePronunciation": "bâ-ter",
            "phonetic": "/ˈbʌt.ər/",
            "exampleEn": "Spread butter on the toast.",
            "examplePt": "Passe manteiga na torrada."
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza",
            "simplePronunciation": "pít-sa",
            "phonetic": "/ˈpiːt.sə/",
            "exampleEn": "Let us share a cheese pizza.",
            "examplePt": "Vamos dividir uma pizza de queijo."
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa",
            "simplePronunciation": "súp",
            "phonetic": "/suːp/",
            "exampleEn": "Hot soup is great on cold nights.",
            "examplePt": "Sopa quente é ótima em noites frias."
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe",
            "simplePronunciation": "fíx",
            "phonetic": "/fɪʃ/",
            "exampleEn": "Grilled fish is very healthy.",
            "examplePt": "Peixe grelhado é muito saudável."
          }
        ],
        "options": [
          "Butter",
          "Pizza",
          "Soup",
          "Fish"
        ],
        "correctAnswer": "Pizza",
        "contextSentence": "Let us share a cheese pizza.",
        "contextSentencePt": "Vamos dividir uma pizza de queijo.",
        "explanation": "Exemplo: \"Let us share a cheese pizza.\" — Vamos dividir uma pizza de queijo.",
        "phoneticHint": "\"pít-sa\" • /ˈpiːt.sə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cake",
        "visualEmoji": "🍰",
        "visualOptions": [
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada",
            "simplePronunciation": "sé-lad",
            "phonetic": "/ˈsæl.əd/",
            "exampleEn": "I made a fresh green salad.",
            "examplePt": "Eu fiz uma salada verde fresca."
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa",
            "simplePronunciation": "súp",
            "phonetic": "/suːp/",
            "exampleEn": "Hot soup is great on cold nights.",
            "examplePt": "Sopa quente é ótima em noites frias."
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza",
            "simplePronunciation": "pít-sa",
            "phonetic": "/ˈpiːt.sə/",
            "exampleEn": "Let us share a cheese pizza.",
            "examplePt": "Vamos dividir uma pizza de queijo."
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo",
            "simplePronunciation": "kêik",
            "phonetic": "/keɪk/",
            "exampleEn": "She baked a chocolate cake.",
            "examplePt": "Ela assou um bolo de chocolate."
          }
        ],
        "options": [
          "Salad",
          "Soup",
          "Pizza",
          "Cake"
        ],
        "correctAnswer": "Cake",
        "contextSentence": "She baked a chocolate cake.",
        "contextSentencePt": "Ela assou um bolo de chocolate.",
        "explanation": "Exemplo: \"She baked a chocolate cake.\" — Ela assou um bolo de chocolate.",
        "phoneticHint": "\"kêik\" • /keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Orange",
        "visualEmoji": "🍊",
        "visualOptions": [
          {
            "text": "Salt",
            "emoji": "🧂",
            "label": "Salt",
            "translationPt": "Sal",
            "simplePronunciation": "sólt",
            "phonetic": "/sɔːlt/",
            "exampleEn": "Add a little salt to the food.",
            "examplePt": "Coloque um pouco de sal na comida."
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão",
            "simplePronunciation": "pás-ta",
            "phonetic": "/ˈpɑː.stə/",
            "exampleEn": "We love pasta with tomato sauce.",
            "examplePt": "Adoramos macarrão com molho de tomate."
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja",
            "simplePronunciation": "ó-rendj",
            "phonetic": "/ˈɔːr.ɪndʒ/",
            "exampleEn": "This orange is very juicy.",
            "examplePt": "Esta laranja tem muito suco."
          },
          {
            "text": "Sugar",
            "emoji": "🥄",
            "label": "Sugar",
            "translationPt": "Açúcar",
            "simplePronunciation": "xú-gar",
            "phonetic": "/ˈʃʊɡ.ər/",
            "exampleEn": "Do you want sugar in your coffee?",
            "examplePt": "Você quer açúcar no seu café?"
          }
        ],
        "options": [
          "Salt",
          "Pasta",
          "Orange",
          "Sugar"
        ],
        "correctAnswer": "Orange",
        "contextSentence": "This orange is very juicy.",
        "contextSentencePt": "Esta laranja tem muito suco.",
        "explanation": "Exemplo: \"This orange is very juicy.\" — Esta laranja tem muito suco.",
        "phoneticHint": "\"ó-rendj\" • /ˈɔːr.ɪndʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate",
            "simplePronunciation": "to-mêi-tou",
            "phonetic": "/təˈmeɪ.toʊ/",
            "exampleEn": "Slice the red tomato.",
            "examplePt": "Corte o tomate vermelho em fatias."
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata",
            "simplePronunciation": "po-têi-tou",
            "phonetic": "/pəˈteɪ.toʊ/",
            "exampleEn": "Baked potatoes are delicious.",
            "examplePt": "Batatas assadas são deliciosas."
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga",
            "simplePronunciation": "bâ-ter",
            "phonetic": "/ˈbʌt.ər/",
            "exampleEn": "Spread butter on the toast.",
            "examplePt": "Passe manteiga na torrada."
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza",
            "simplePronunciation": "pít-sa",
            "phonetic": "/ˈpiːt.sə/",
            "exampleEn": "Let us share a cheese pizza.",
            "examplePt": "Vamos dividir uma pizza de queijo."
          }
        ],
        "options": [
          "Tomato",
          "Potato",
          "Butter",
          "Pizza"
        ],
        "correctAnswer": "Tomato",
        "contextSentence": "Slice the red tomato.",
        "contextSentencePt": "Corte o tomate vermelho em fatias.",
        "explanation": "Exemplo: \"Slice the red tomato.\" — Corte o tomate vermelho em fatias.",
        "phoneticHint": "\"to-mêi-tou\" • /təˈmeɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Potato",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe",
            "simplePronunciation": "fíx",
            "phonetic": "/fɪʃ/",
            "exampleEn": "Grilled fish is very healthy.",
            "examplePt": "Peixe grelhado é muito saudável."
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada",
            "simplePronunciation": "sé-lad",
            "phonetic": "/ˈsæl.əd/",
            "exampleEn": "I made a fresh green salad.",
            "examplePt": "Eu fiz uma salada verde fresca."
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata",
            "simplePronunciation": "po-têi-tou",
            "phonetic": "/pəˈteɪ.toʊ/",
            "exampleEn": "Baked potatoes are delicious.",
            "examplePt": "Batatas assadas são deliciosas."
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa",
            "simplePronunciation": "súp",
            "phonetic": "/suːp/",
            "exampleEn": "Hot soup is great on cold nights.",
            "examplePt": "Sopa quente é ótima em noites frias."
          }
        ],
        "options": [
          "Fish",
          "Salad",
          "Potato",
          "Soup"
        ],
        "correctAnswer": "Potato",
        "contextSentence": "Baked potatoes are delicious.",
        "contextSentencePt": "Batatas assadas são deliciosas.",
        "explanation": "Exemplo: \"Baked potatoes are delicious.\" — Batatas assadas são deliciosas.",
        "phoneticHint": "\"po-têi-tou\" • /pəˈteɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sugar",
        "visualEmoji": "🥄",
        "visualOptions": [
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão",
            "simplePronunciation": "pás-ta",
            "phonetic": "/ˈpɑː.stə/",
            "exampleEn": "We love pasta with tomato sauce.",
            "examplePt": "Adoramos macarrão com molho de tomate."
          },
          {
            "text": "Sugar",
            "emoji": "🥄",
            "label": "Sugar",
            "translationPt": "Açúcar",
            "simplePronunciation": "xú-gar",
            "phonetic": "/ˈʃʊɡ.ər/",
            "exampleEn": "Do you want sugar in your coffee?",
            "examplePt": "Você quer açúcar no seu café?"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo",
            "simplePronunciation": "kêik",
            "phonetic": "/keɪk/",
            "exampleEn": "She baked a chocolate cake.",
            "examplePt": "Ela assou um bolo de chocolate."
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja",
            "simplePronunciation": "ó-rendj",
            "phonetic": "/ˈɔːr.ɪndʒ/",
            "exampleEn": "This orange is very juicy.",
            "examplePt": "Esta laranja tem muito suco."
          }
        ],
        "options": [
          "Pasta",
          "Sugar",
          "Cake",
          "Orange"
        ],
        "correctAnswer": "Sugar",
        "contextSentence": "Do you want sugar in your coffee?",
        "contextSentencePt": "Você quer açúcar no seu café?",
        "explanation": "Exemplo: \"Do you want sugar in your coffee?\" — Você quer açúcar no seu café?",
        "phoneticHint": "\"xú-gar\" • /ˈʃʊɡ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Salt",
        "visualEmoji": "🧂",
        "visualOptions": [
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate",
            "simplePronunciation": "to-mêi-tou",
            "phonetic": "/təˈmeɪ.toʊ/",
            "exampleEn": "Slice the red tomato.",
            "examplePt": "Corte o tomate vermelho em fatias."
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza",
            "simplePronunciation": "pít-sa",
            "phonetic": "/ˈpiːt.sə/",
            "exampleEn": "Let us share a cheese pizza.",
            "examplePt": "Vamos dividir uma pizza de queijo."
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga",
            "simplePronunciation": "bâ-ter",
            "phonetic": "/ˈbʌt.ər/",
            "exampleEn": "Spread butter on the toast.",
            "examplePt": "Passe manteiga na torrada."
          },
          {
            "text": "Salt",
            "emoji": "🧂",
            "label": "Salt",
            "translationPt": "Sal",
            "simplePronunciation": "sólt",
            "phonetic": "/sɔːlt/",
            "exampleEn": "Add a little salt to the food.",
            "examplePt": "Coloque um pouco de sal na comida."
          }
        ],
        "options": [
          "Tomato",
          "Pizza",
          "Butter",
          "Salt"
        ],
        "correctAnswer": "Salt",
        "contextSentence": "Add a little salt to the food.",
        "contextSentencePt": "Coloque um pouco de sal na comida.",
        "explanation": "Exemplo: \"Add a little salt to the food.\" — Coloque um pouco de sal na comida.",
        "phoneticHint": "\"sólt\" • /sɔːlt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p8",
    "worldId": 0,
    "phaseNumber": 8,
    "title": "Lição de Pronomes II • Possessivos & Demonstrativos",
    "subtitle": "Módulo de Pronomes 2/6 (Após 6 de Vocabulário) • Pares Associativos + Voz da Professora",
    "pedagogicalObjective": "Dominar os Pronomes Possessivos (My, Your, His, Her, Our, Their, Mine, Yours) e os Pronomes Demonstrativos (This, That, These, Those).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à 2ª Lição Exclusiva de Pronomes (após mais 3 módulos de vocabulário)!",
      "3º Passo: Aprendemos os Pronomes Possessivos (My, Your, His, Her, Our, Their, Mine, Yours), que mostram de quem é cada objeto.",
      "4º Passo: Aprendemos os Pronomes Demonstrativos (This, That, These, Those), que mostram se o objeto está pertinho da mão ou lá longe!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p8-pron-1",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (De quem é cada coisa? - Parte 1)",
        "conceptHeader": "Mostram quem é o dono! Se é meu, digo \"My\" (Meu/Minha). Se é seu, digo \"Your\" (Seu/Sua). Se pertence a um menino, \"His\" (Dele); e se pertence a uma menina, \"Her\" (Dela)!",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Conecte cada Pronome Possessivo ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p8-b1-pos1",
            "en": "My (\"mái\")",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My bed = Minha cama)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p8-b1-pos2",
            "en": "Your (\"iór\")",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your shirt = Sua camisa)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p8-b1-pos3",
            "en": "His (\"ríz\")",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His shoes\" = \"Os sapatos dele\"!"
          },
          {
            "id": "w0-p8-b1-pos4",
            "en": "Her (\"râr\")",
            "emoji": "👧",
            "phonetic": "/hɜːr/",
            "pt": "Dela (pertence a uma menina ou mulher)",
            "tipPt": "Lindo! \"Her dress\" = \"O vestido dela\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "My (Meu/Minha), Your (Seu/Sua), His (Dele), Her (Dela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-pron-2",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Nosso, Deles e É Meu! - Parte 2)",
        "conceptHeader": "Quando algo é de toda a nossa família junta, dizemos \"Our\" (Nosso/Nossa)! Quando é de outras pessoas, \"Their\" (Deles/Delas). E no final da frase, para dizer \"É meu!\" ou \"É seu!\", usamos \"Mine\" e \"Yours\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Ligue os Pronomes Possessivos de plural e fim de frase aos seus pares:",
        "pairs": [
          {
            "id": "w0-p8-b2-pos5",
            "en": "Our (\"áu-er\")",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (ex: Our kitchen = Nossa cozinha)",
            "tipPt": "Que orgulho! \"Our\" é \"Nosso\" ou \"Nossa\"!"
          },
          {
            "id": "w0-p8-b2-pos6",
            "en": "Their (\"dér\")",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ðer/",
            "pt": "Deles / Delas (pertence a eles ou elas)",
            "tipPt": "Isso! \"Their house\" = \"A casa deles\"!"
          },
          {
            "id": "w0-p8-b2-pos7",
            "en": "Mine (\"máin\")",
            "emoji": "✨",
            "phonetic": "/maɪn/",
            "pt": "O meu / A minha (ex: This cup is mine!)",
            "tipPt": "Perfeito! \"It is mine!\" = \"É meu!\""
          },
          {
            "id": "w0-p8-b2-pos8",
            "en": "Yours (\"iórz\")",
            "emoji": "🌟",
            "phonetic": "/jʊrz/",
            "pt": "O seu / A sua (ex: This plate is yours!)",
            "tipPt": "Maravilha! \"It is yours!\" = \"É seu!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Our (Nosso/Nossa), Their (Deles/Delas), Mine (Meu/Minha no final), Yours (Seu/Sua no final).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-pron-3",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Pertinho da Mão vs. Lá Longe)",
        "conceptHeader": "Para 1 coisa bem pertinho da mão que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, \"That\" (Aquele/Aquela). Para várias coisas perto, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_4.wav",
        "prompt": "🤝 Conecte cada Pronome Demonstrativo à distância e quantidade corretas:",
        "pairs": [
          {
            "id": "w0-p8-b3-dem1",
            "en": "This (\"dís\")",
            "emoji": "👇",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa AQUI PERTINHO)",
            "tipPt": "Muito bem! Se está na sua mão, é \"This\"!"
          },
          {
            "id": "w0-p8-b3-dem2",
            "en": "That (\"dét\")",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LÁ LONGE)",
            "tipPt": "Isso! Se precisa apontar lá longe, é \"That\"!"
          },
          {
            "id": "w0-p8-b3-dem3",
            "en": "These (\"díz\")",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (VÁRIAS coisas AQUI PERTO)",
            "tipPt": "Excelente! \"These\" é o plural pertinho da mão!"
          },
          {
            "id": "w0-p8-b3-dem4",
            "en": "Those (\"dôuz\")",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (VÁRIAS coisas LÁ LONGE)",
            "tipPt": "Perfeito! \"Those\" são vários itens lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This (1 perto), That (1 longe), These (vários perto), Those (vários longe).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p9",
    "worldId": 0,
    "phaseNumber": 9,
    "themeId": "food",
    "themeTitle": "Comida",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "title": "Comida • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema 2 (Nível 3/4) • 12 frutas, verduras e lanches do cotidiano",
    "pedagogicalObjective": "Ampliar o vocabulário alimentar: Oil, Onion, Garlic, Carrot, Lettuce, Lemon, Strawberry, Grape, Watermelon, Sandwich, Ice cream e Yogurt.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 3 de Comida praticamos palavras intermediárias: Oil (\"ói-ol\" = Óleo/Azeite), Onion (\"â-nion\" = Cebola), Garlic (\"gár-lik\" = Alho), Carrot (\"ké-rot\" = Cenoura), Lettuce (\"lé-tis\" = Alface) e Lemon (\"lé-mon\" = Limão).",
      "Também aprendemos Strawberry (\"stró-bé-ri\" = Morango), Grape (\"grêip\" = Uva), Watermelon (\"uó-ter-mé-lon\" = Melancia), Sandwich (\"sénd-uitch\" = Sanduíche), Ice cream (\"áis crím\" = Sorvete) e Yogurt (\"iôu-gârt\" = Iogurte)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p9-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Oil",
        "visualEmoji": "🫒",
        "visualOptions": [
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão",
            "simplePronunciation": "lé-mon",
            "phonetic": "/ˈlem.ən/",
            "exampleEn": "Lemon tastes sour and fresh.",
            "examplePt": "O limão tem gosto azedo e refrescante."
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface",
            "simplePronunciation": "lé-tis",
            "phonetic": "/ˈlet.ɪs/",
            "exampleEn": "Wash the green lettuce leaves.",
            "examplePt": "Lave as folhas verdes de alface."
          },
          {
            "text": "Oil",
            "emoji": "🫒",
            "label": "Oil",
            "translationPt": "Óleo / Azeite",
            "simplePronunciation": "ói-ol",
            "phonetic": "/ɔɪl/",
            "exampleEn": "Cook the vegetables with olive oil.",
            "examplePt": "Prepare os legumes com azeite."
          },
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream",
            "translationPt": "Sorvete",
            "simplePronunciation": "áis crím",
            "phonetic": "/ˈaɪs kriːm/",
            "exampleEn": "Kids love chocolate ice cream.",
            "examplePt": "As crianças adoram sorvete de chocolate."
          }
        ],
        "options": [
          "Lemon",
          "Lettuce",
          "Oil",
          "Ice cream"
        ],
        "correctAnswer": "Oil",
        "contextSentence": "Cook the vegetables with olive oil.",
        "contextSentencePt": "Prepare os legumes com azeite.",
        "explanation": "Exemplo: \"Cook the vegetables with olive oil.\" — Prepare os legumes com azeite.",
        "phoneticHint": "\"ói-ol\" • /ɔɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Onion",
        "visualEmoji": "🧅",
        "visualOptions": [
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola",
            "simplePronunciation": "â-nion",
            "phonetic": "/ˈʌn.jən/",
            "exampleEn": "Chop the onion for the sauce.",
            "examplePt": "Pique a cebola para o molho."
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche",
            "simplePronunciation": "sénd-uitch",
            "phonetic": "/ˈsæn.wɪtʃ/",
            "exampleEn": "I packed a cheese sandwich.",
            "examplePt": "Eu preparei um sanduíche de queijo."
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango",
            "simplePronunciation": "stró-bé-ri",
            "phonetic": "/ˈstrɔː.ber.i/",
            "exampleEn": "Red strawberries are my favorite fruit.",
            "examplePt": "Morangos vermelhos são minha fruta favorita."
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte",
            "simplePronunciation": "iôu-gârt",
            "phonetic": "/ˈjoʊ.ɡərt/",
            "exampleEn": "I eat yogurt with fruit.",
            "examplePt": "Eu como iogurte com frutas."
          }
        ],
        "options": [
          "Onion",
          "Sandwich",
          "Strawberry",
          "Yogurt"
        ],
        "correctAnswer": "Onion",
        "contextSentence": "Chop the onion for the sauce.",
        "contextSentencePt": "Pique a cebola para o molho.",
        "explanation": "Exemplo: \"Chop the onion for the sauce.\" — Pique a cebola para o molho.",
        "phoneticHint": "\"â-nion\" • /ˈʌn.jən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
        "visualOptions": [
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva",
            "simplePronunciation": "grêip",
            "phonetic": "/ɡreɪp/",
            "exampleEn": "Wash the bunch of grapes.",
            "examplePt": "Lave o cacho de uvas."
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives great flavor to food.",
            "examplePt": "O alho dá um ótimo sabor à comida."
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia",
            "simplePronunciation": "uó-ter-mé-lon",
            "phonetic": "/ˈwɔː.tərˌmel.ən/",
            "exampleEn": "Cold watermelon is great in summer.",
            "examplePt": "Melancia gelada é ótima no verão."
          },
          {
            "text": "Oil",
            "emoji": "🫒",
            "label": "Oil",
            "translationPt": "Óleo / Azeite",
            "simplePronunciation": "ói-ol",
            "phonetic": "/ɔɪl/",
            "exampleEn": "Cook the vegetables with olive oil.",
            "examplePt": "Prepare os legumes com azeite."
          }
        ],
        "options": [
          "Grape",
          "Garlic",
          "Watermelon",
          "Oil"
        ],
        "correctAnswer": "Garlic",
        "contextSentence": "Garlic gives great flavor to food.",
        "contextSentencePt": "O alho dá um ótimo sabor à comida.",
        "explanation": "Exemplo: \"Garlic gives great flavor to food.\" — O alho dá um ótimo sabor à comida.",
        "phoneticHint": "\"gár-lik\" • /ˈɡɑːr.lɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
        "visualOptions": [
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango",
            "simplePronunciation": "stró-bé-ri",
            "phonetic": "/ˈstrɔː.ber.i/",
            "exampleEn": "Red strawberries are my favorite fruit.",
            "examplePt": "Morangos vermelhos são minha fruta favorita."
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura",
            "simplePronunciation": "ké-rot",
            "phonetic": "/ˈkær.ət/",
            "exampleEn": "Carrots are crunchy and sweet.",
            "examplePt": "Cenouras são crocantes e doces."
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives great flavor to food.",
            "examplePt": "O alho dá um ótimo sabor à comida."
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola",
            "simplePronunciation": "â-nion",
            "phonetic": "/ˈʌn.jən/",
            "exampleEn": "Chop the onion for the sauce.",
            "examplePt": "Pique a cebola para o molho."
          }
        ],
        "options": [
          "Strawberry",
          "Carrot",
          "Garlic",
          "Onion"
        ],
        "correctAnswer": "Carrot",
        "contextSentence": "Carrots are crunchy and sweet.",
        "contextSentencePt": "Cenouras são crocantes e doces.",
        "explanation": "Exemplo: \"Carrots are crunchy and sweet.\" — Cenouras são crocantes e doces.",
        "phoneticHint": "\"ké-rot\" • /ˈkær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Lettuce",
        "visualEmoji": "🥬",
        "visualOptions": [
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte",
            "simplePronunciation": "iôu-gârt",
            "phonetic": "/ˈjoʊ.ɡərt/",
            "exampleEn": "I eat yogurt with fruit.",
            "examplePt": "Eu como iogurte com frutas."
          },
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream",
            "translationPt": "Sorvete",
            "simplePronunciation": "áis crím",
            "phonetic": "/ˈaɪs kriːm/",
            "exampleEn": "Kids love chocolate ice cream.",
            "examplePt": "As crianças adoram sorvete de chocolate."
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche",
            "simplePronunciation": "sénd-uitch",
            "phonetic": "/ˈsæn.wɪtʃ/",
            "exampleEn": "I packed a cheese sandwich.",
            "examplePt": "Eu preparei um sanduíche de queijo."
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface",
            "simplePronunciation": "lé-tis",
            "phonetic": "/ˈlet.ɪs/",
            "exampleEn": "Wash the green lettuce leaves.",
            "examplePt": "Lave as folhas verdes de alface."
          }
        ],
        "options": [
          "Yogurt",
          "Ice cream",
          "Sandwich",
          "Lettuce"
        ],
        "correctAnswer": "Lettuce",
        "contextSentence": "Wash the green lettuce leaves.",
        "contextSentencePt": "Lave as folhas verdes de alface.",
        "explanation": "Exemplo: \"Wash the green lettuce leaves.\" — Lave as folhas verdes de alface.",
        "phoneticHint": "\"lé-tis\" • /ˈlet.ɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lemon",
        "visualEmoji": "🍋",
        "visualOptions": [
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura",
            "simplePronunciation": "ké-rot",
            "phonetic": "/ˈkær.ət/",
            "exampleEn": "Carrots are crunchy and sweet.",
            "examplePt": "Cenouras são crocantes e doces."
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola",
            "simplePronunciation": "â-nion",
            "phonetic": "/ˈʌn.jən/",
            "exampleEn": "Chop the onion for the sauce.",
            "examplePt": "Pique a cebola para o molho."
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão",
            "simplePronunciation": "lé-mon",
            "phonetic": "/ˈlem.ən/",
            "exampleEn": "Lemon tastes sour and fresh.",
            "examplePt": "O limão tem gosto azedo e refrescante."
          },
          {
            "text": "Oil",
            "emoji": "🫒",
            "label": "Oil",
            "translationPt": "Óleo / Azeite",
            "simplePronunciation": "ói-ol",
            "phonetic": "/ɔɪl/",
            "exampleEn": "Cook the vegetables with olive oil.",
            "examplePt": "Prepare os legumes com azeite."
          }
        ],
        "options": [
          "Carrot",
          "Onion",
          "Lemon",
          "Oil"
        ],
        "correctAnswer": "Lemon",
        "contextSentence": "Lemon tastes sour and fresh.",
        "contextSentencePt": "O limão tem gosto azedo e refrescante.",
        "explanation": "Exemplo: \"Lemon tastes sour and fresh.\" — O limão tem gosto azedo e refrescante.",
        "phoneticHint": "\"lé-mon\" • /ˈlem.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Strawberry",
        "visualEmoji": "🍓",
        "visualOptions": [
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango",
            "simplePronunciation": "stró-bé-ri",
            "phonetic": "/ˈstrɔː.ber.i/",
            "exampleEn": "Red strawberries are my favorite fruit.",
            "examplePt": "Morangos vermelhos são minha fruta favorita."
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão",
            "simplePronunciation": "lé-mon",
            "phonetic": "/ˈlem.ən/",
            "exampleEn": "Lemon tastes sour and fresh.",
            "examplePt": "O limão tem gosto azedo e refrescante."
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface",
            "simplePronunciation": "lé-tis",
            "phonetic": "/ˈlet.ɪs/",
            "exampleEn": "Wash the green lettuce leaves.",
            "examplePt": "Lave as folhas verdes de alface."
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura",
            "simplePronunciation": "ké-rot",
            "phonetic": "/ˈkær.ət/",
            "exampleEn": "Carrots are crunchy and sweet.",
            "examplePt": "Cenouras são crocantes e doces."
          }
        ],
        "options": [
          "Strawberry",
          "Lemon",
          "Lettuce",
          "Carrot"
        ],
        "correctAnswer": "Strawberry",
        "contextSentence": "Red strawberries are my favorite fruit.",
        "contextSentencePt": "Morangos vermelhos são minha fruta favorita.",
        "explanation": "Exemplo: \"Red strawberries are my favorite fruit.\" — Morangos vermelhos são minha fruta favorita.",
        "phoneticHint": "\"stró-bé-ri\" • /ˈstrɔː.ber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Grape",
        "visualEmoji": "🍇",
        "visualOptions": [
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte",
            "simplePronunciation": "iôu-gârt",
            "phonetic": "/ˈjoʊ.ɡərt/",
            "exampleEn": "I eat yogurt with fruit.",
            "examplePt": "Eu como iogurte com frutas."
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives great flavor to food.",
            "examplePt": "O alho dá um ótimo sabor à comida."
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva",
            "simplePronunciation": "grêip",
            "phonetic": "/ɡreɪp/",
            "exampleEn": "Wash the bunch of grapes.",
            "examplePt": "Lave o cacho de uvas."
          },
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream",
            "translationPt": "Sorvete",
            "simplePronunciation": "áis crím",
            "phonetic": "/ˈaɪs kriːm/",
            "exampleEn": "Kids love chocolate ice cream.",
            "examplePt": "As crianças adoram sorvete de chocolate."
          }
        ],
        "options": [
          "Yogurt",
          "Garlic",
          "Grape",
          "Ice cream"
        ],
        "correctAnswer": "Grape",
        "contextSentence": "Wash the bunch of grapes.",
        "contextSentencePt": "Lave o cacho de uvas.",
        "explanation": "Exemplo: \"Wash the bunch of grapes.\" — Lave o cacho de uvas.",
        "phoneticHint": "\"grêip\" • /ɡreɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Watermelon",
        "visualEmoji": "🍉",
        "visualOptions": [
          {
            "text": "Oil",
            "emoji": "🫒",
            "label": "Oil",
            "translationPt": "Óleo / Azeite",
            "simplePronunciation": "ói-ol",
            "phonetic": "/ɔɪl/",
            "exampleEn": "Cook the vegetables with olive oil.",
            "examplePt": "Prepare os legumes com azeite."
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia",
            "simplePronunciation": "uó-ter-mé-lon",
            "phonetic": "/ˈwɔː.tərˌmel.ən/",
            "exampleEn": "Cold watermelon is great in summer.",
            "examplePt": "Melancia gelada é ótima no verão."
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives great flavor to food.",
            "examplePt": "O alho dá um ótimo sabor à comida."
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva",
            "simplePronunciation": "grêip",
            "phonetic": "/ɡreɪp/",
            "exampleEn": "Wash the bunch of grapes.",
            "examplePt": "Lave o cacho de uvas."
          }
        ],
        "options": [
          "Oil",
          "Watermelon",
          "Garlic",
          "Grape"
        ],
        "correctAnswer": "Watermelon",
        "contextSentence": "Cold watermelon is great in summer.",
        "contextSentencePt": "Melancia gelada é ótima no verão.",
        "explanation": "Exemplo: \"Cold watermelon is great in summer.\" — Melancia gelada é ótima no verão.",
        "phoneticHint": "\"uó-ter-mé-lon\" • /ˈwɔː.tərˌmel.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sandwich",
        "visualEmoji": "🥪",
        "visualOptions": [
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango",
            "simplePronunciation": "stró-bé-ri",
            "phonetic": "/ˈstrɔː.ber.i/",
            "exampleEn": "Red strawberries are my favorite fruit.",
            "examplePt": "Morangos vermelhos são minha fruta favorita."
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface",
            "simplePronunciation": "lé-tis",
            "phonetic": "/ˈlet.ɪs/",
            "exampleEn": "Wash the green lettuce leaves.",
            "examplePt": "Lave as folhas verdes de alface."
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola",
            "simplePronunciation": "â-nion",
            "phonetic": "/ˈʌn.jən/",
            "exampleEn": "Chop the onion for the sauce.",
            "examplePt": "Pique a cebola para o molho."
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche",
            "simplePronunciation": "sénd-uitch",
            "phonetic": "/ˈsæn.wɪtʃ/",
            "exampleEn": "I packed a cheese sandwich.",
            "examplePt": "Eu preparei um sanduíche de queijo."
          }
        ],
        "options": [
          "Strawberry",
          "Lettuce",
          "Onion",
          "Sandwich"
        ],
        "correctAnswer": "Sandwich",
        "contextSentence": "I packed a cheese sandwich.",
        "contextSentencePt": "Eu preparei um sanduíche de queijo.",
        "explanation": "Exemplo: \"I packed a cheese sandwich.\" — Eu preparei um sanduíche de queijo.",
        "phoneticHint": "\"sénd-uitch\" • /ˈsæn.wɪtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ice cream",
        "visualEmoji": "🍦",
        "visualOptions": [
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream",
            "translationPt": "Sorvete",
            "simplePronunciation": "áis crím",
            "phonetic": "/ˈaɪs kriːm/",
            "exampleEn": "Kids love chocolate ice cream.",
            "examplePt": "As crianças adoram sorvete de chocolate."
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão",
            "simplePronunciation": "lé-mon",
            "phonetic": "/ˈlem.ən/",
            "exampleEn": "Lemon tastes sour and fresh.",
            "examplePt": "O limão tem gosto azedo e refrescante."
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura",
            "simplePronunciation": "ké-rot",
            "phonetic": "/ˈkær.ət/",
            "exampleEn": "Carrots are crunchy and sweet.",
            "examplePt": "Cenouras são crocantes e doces."
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia",
            "simplePronunciation": "uó-ter-mé-lon",
            "phonetic": "/ˈwɔː.tərˌmel.ən/",
            "exampleEn": "Cold watermelon is great in summer.",
            "examplePt": "Melancia gelada é ótima no verão."
          }
        ],
        "options": [
          "Ice cream",
          "Lemon",
          "Carrot",
          "Watermelon"
        ],
        "correctAnswer": "Ice cream",
        "contextSentence": "Kids love chocolate ice cream.",
        "contextSentencePt": "As crianças adoram sorvete de chocolate.",
        "explanation": "Exemplo: \"Kids love chocolate ice cream.\" — As crianças adoram sorvete de chocolate.",
        "phoneticHint": "\"áis crím\" • /ˈaɪs kriːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Yogurt",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives great flavor to food.",
            "examplePt": "O alho dá um ótimo sabor à comida."
          },
          {
            "text": "Oil",
            "emoji": "🫒",
            "label": "Oil",
            "translationPt": "Óleo / Azeite",
            "simplePronunciation": "ói-ol",
            "phonetic": "/ɔɪl/",
            "exampleEn": "Cook the vegetables with olive oil.",
            "examplePt": "Prepare os legumes com azeite."
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva",
            "simplePronunciation": "grêip",
            "phonetic": "/ɡreɪp/",
            "exampleEn": "Wash the bunch of grapes.",
            "examplePt": "Lave o cacho de uvas."
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte",
            "simplePronunciation": "iôu-gârt",
            "phonetic": "/ˈjoʊ.ɡərt/",
            "exampleEn": "I eat yogurt with fruit.",
            "examplePt": "Eu como iogurte com frutas."
          }
        ],
        "options": [
          "Garlic",
          "Oil",
          "Grape",
          "Yogurt"
        ],
        "correctAnswer": "Yogurt",
        "contextSentence": "I eat yogurt with fruit.",
        "contextSentencePt": "Eu como iogurte com frutas.",
        "explanation": "Exemplo: \"I eat yogurt with fruit.\" — Eu como iogurte com frutas.",
        "phoneticHint": "\"iôu-gârt\" • /ˈjoʊ.ɡərt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p10",
    "worldId": 0,
    "phaseNumber": 10,
    "themeId": "food",
    "themeTitle": "Comida",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "title": "Comida • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Tema 2 (Nível 4/4) • 12 ingredientes, frutas tropicais e vegetais específicos",
    "pedagogicalObjective": "Conhecer alimentos e ingredientes específicos: Pineapple, Mango, Avocado, Corn, Broccoli, Cucumber, Mushroom, Pepper, Honey, Jam, Flour e Peanut.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 4 de Comida aprendemos itens menos comuns ou mais específicos: Pineapple (\"pái-né-pol\" = Abacaxi), Mango (\"mén-gou\" = Manga), Avocado (\"a-vo-cá-dou\" = Abacate), Corn (\"córn\" = Milho), Broccoli (\"bró-co-li\" = Brócolis) e Cucumber (\"kiú-câm-ber\" = Pepino).",
      "E completamos o Tema 2 com Mushroom (\"mâx-rum\" = Cogumelo), Pepper (\"pé-per\" = Pimentão/Pimenta), Honey (\"râ-ni\" = Mel), Jam (\"djém\" = Geleia), Flour (\"fláu-er\" = Farinha) e Peanut (\"pí-nât\" = Amendoim)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p10-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pineapple",
        "visualEmoji": "🍍",
        "visualOptions": [
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi",
            "simplePronunciation": "pái-né-pol",
            "phonetic": "/ˈpaɪnˌæp.əl/",
            "exampleEn": "Pineapple is a tropical fruit.",
            "examplePt": "O abacaxi é uma fruta tropical."
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis",
            "simplePronunciation": "bró-co-li",
            "phonetic": "/ˈbrɑː.kəl.i/",
            "exampleEn": "Steamed broccoli is very nutritious.",
            "examplePt": "Brócolis no vapor é muito nutritivo."
          },
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour",
            "translationPt": "Farinha",
            "simplePronunciation": "fláu-er",
            "phonetic": "/ˈflaʊ.ər/",
            "exampleEn": "Mix wheat flour and eggs for the cake.",
            "examplePt": "Misture farinha de trigo e ovos para o bolo."
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel",
            "simplePronunciation": "râ-ni",
            "phonetic": "/ˈhʌn.i/",
            "exampleEn": "Bees make golden honey.",
            "examplePt": "As abelhas produzem mel dourado."
          }
        ],
        "options": [
          "Pineapple",
          "Broccoli",
          "Flour",
          "Honey"
        ],
        "correctAnswer": "Pineapple",
        "contextSentence": "Pineapple is a tropical fruit.",
        "contextSentencePt": "O abacaxi é uma fruta tropical.",
        "explanation": "Exemplo: \"Pineapple is a tropical fruit.\" — O abacaxi é uma fruta tropical.",
        "phoneticHint": "\"pái-né-pol\" • /ˈpaɪnˌæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mango",
        "visualEmoji": "🥭",
        "visualOptions": [
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim",
            "simplePronunciation": "pí-nât",
            "phonetic": "/ˈpiː.nʌt/",
            "exampleEn": "Roasted peanuts are a crunchy snack.",
            "examplePt": "Amendoins torrados são um lanche crocante."
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga",
            "simplePronunciation": "mén-gou",
            "phonetic": "/ˈmæŋ.ɡoʊ/",
            "exampleEn": "This ripe mango is very sweet.",
            "examplePt": "Esta manga madura está muito doce."
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão / Pimenta",
            "simplePronunciation": "pé-per",
            "phonetic": "/ˈpep.ər/",
            "exampleEn": "Red pepper adds color to the dish.",
            "examplePt": "O pimentão vermelho dá cor ao prato."
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino",
            "simplePronunciation": "kiú-câm-ber",
            "phonetic": "/ˈkjuː.kʌm.bər/",
            "exampleEn": "Put cucumber slices in the salad.",
            "examplePt": "Coloque rodelas de pepino na salada."
          }
        ],
        "options": [
          "Peanut",
          "Mango",
          "Pepper",
          "Cucumber"
        ],
        "correctAnswer": "Mango",
        "contextSentence": "This ripe mango is very sweet.",
        "contextSentencePt": "Esta manga madura está muito doce.",
        "explanation": "Exemplo: \"This ripe mango is very sweet.\" — Esta manga madura está muito doce.",
        "phoneticHint": "\"mén-gou\" • /ˈmæŋ.ɡoʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Avocado",
        "visualEmoji": "🥑",
        "visualOptions": [
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam",
            "translationPt": "Geleia",
            "simplePronunciation": "djém",
            "phonetic": "/dʒæm/",
            "exampleEn": "Spread strawberry jam on the bread.",
            "examplePt": "Passe geleia de morango no pão."
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate",
            "simplePronunciation": "a-vo-cá-dou",
            "phonetic": "/ˌæv.əˈkɑː.doʊ/",
            "exampleEn": "Avocado is rich and creamy.",
            "examplePt": "O abacate é rico e cremoso."
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho",
            "simplePronunciation": "córn",
            "phonetic": "/kɔːrn/",
            "exampleEn": "Cooked yellow corn is delicious.",
            "examplePt": "Milho amarelo cozido é delicioso."
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi",
            "simplePronunciation": "pái-né-pol",
            "phonetic": "/ˈpaɪnˌæp.əl/",
            "exampleEn": "Pineapple is a tropical fruit.",
            "examplePt": "O abacaxi é uma fruta tropical."
          }
        ],
        "options": [
          "Jam",
          "Avocado",
          "Corn",
          "Pineapple"
        ],
        "correctAnswer": "Avocado",
        "contextSentence": "Avocado is rich and creamy.",
        "contextSentencePt": "O abacate é rico e cremoso.",
        "explanation": "Exemplo: \"Avocado is rich and creamy.\" — O abacate é rico e cremoso.",
        "phoneticHint": "\"a-vo-cá-dou\" • /ˌæv.əˈkɑː.doʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Corn",
        "visualEmoji": "🌽",
        "visualOptions": [
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel",
            "simplePronunciation": "râ-ni",
            "phonetic": "/ˈhʌn.i/",
            "exampleEn": "Bees make golden honey.",
            "examplePt": "As abelhas produzem mel dourado."
          },
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour",
            "translationPt": "Farinha",
            "simplePronunciation": "fláu-er",
            "phonetic": "/ˈflaʊ.ər/",
            "exampleEn": "Mix wheat flour and eggs for the cake.",
            "examplePt": "Misture farinha de trigo e ovos para o bolo."
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo",
            "simplePronunciation": "mâx-rum",
            "phonetic": "/ˈmʌʃ.ruːm/",
            "exampleEn": "Add mushrooms to the pasta sauce.",
            "examplePt": "Adicione cogumelos ao molho de macarrão."
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho",
            "simplePronunciation": "córn",
            "phonetic": "/kɔːrn/",
            "exampleEn": "Cooked yellow corn is delicious.",
            "examplePt": "Milho amarelo cozido é delicioso."
          }
        ],
        "options": [
          "Honey",
          "Flour",
          "Mushroom",
          "Corn"
        ],
        "correctAnswer": "Corn",
        "contextSentence": "Cooked yellow corn is delicious.",
        "contextSentencePt": "Milho amarelo cozido é delicioso.",
        "explanation": "Exemplo: \"Cooked yellow corn is delicious.\" — Milho amarelo cozido é delicioso.",
        "phoneticHint": "\"córn\" • /kɔːrn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Broccoli",
        "visualEmoji": "🥦",
        "visualOptions": [
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga",
            "simplePronunciation": "mén-gou",
            "phonetic": "/ˈmæŋ.ɡoʊ/",
            "exampleEn": "This ripe mango is very sweet.",
            "examplePt": "Esta manga madura está muito doce."
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão / Pimenta",
            "simplePronunciation": "pé-per",
            "phonetic": "/ˈpep.ər/",
            "exampleEn": "Red pepper adds color to the dish.",
            "examplePt": "O pimentão vermelho dá cor ao prato."
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis",
            "simplePronunciation": "bró-co-li",
            "phonetic": "/ˈbrɑː.kəl.i/",
            "exampleEn": "Steamed broccoli is very nutritious.",
            "examplePt": "Brócolis no vapor é muito nutritivo."
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim",
            "simplePronunciation": "pí-nât",
            "phonetic": "/ˈpiː.nʌt/",
            "exampleEn": "Roasted peanuts are a crunchy snack.",
            "examplePt": "Amendoins torrados são um lanche crocante."
          }
        ],
        "options": [
          "Mango",
          "Pepper",
          "Broccoli",
          "Peanut"
        ],
        "correctAnswer": "Broccoli",
        "contextSentence": "Steamed broccoli is very nutritious.",
        "contextSentencePt": "Brócolis no vapor é muito nutritivo.",
        "explanation": "Exemplo: \"Steamed broccoli is very nutritious.\" — Brócolis no vapor é muito nutritivo.",
        "phoneticHint": "\"bró-co-li\" • /ˈbrɑː.kəl.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cucumber",
        "visualEmoji": "🥒",
        "visualOptions": [
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino",
            "simplePronunciation": "kiú-câm-ber",
            "phonetic": "/ˈkjuː.kʌm.bər/",
            "exampleEn": "Put cucumber slices in the salad.",
            "examplePt": "Coloque rodelas de pepino na salada."
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate",
            "simplePronunciation": "a-vo-cá-dou",
            "phonetic": "/ˌæv.əˈkɑː.doʊ/",
            "exampleEn": "Avocado is rich and creamy.",
            "examplePt": "O abacate é rico e cremoso."
          },
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam",
            "translationPt": "Geleia",
            "simplePronunciation": "djém",
            "phonetic": "/dʒæm/",
            "exampleEn": "Spread strawberry jam on the bread.",
            "examplePt": "Passe geleia de morango no pão."
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi",
            "simplePronunciation": "pái-né-pol",
            "phonetic": "/ˈpaɪnˌæp.əl/",
            "exampleEn": "Pineapple is a tropical fruit.",
            "examplePt": "O abacaxi é uma fruta tropical."
          }
        ],
        "options": [
          "Cucumber",
          "Avocado",
          "Jam",
          "Pineapple"
        ],
        "correctAnswer": "Cucumber",
        "contextSentence": "Put cucumber slices in the salad.",
        "contextSentencePt": "Coloque rodelas de pepino na salada.",
        "explanation": "Exemplo: \"Put cucumber slices in the salad.\" — Coloque rodelas de pepino na salada.",
        "phoneticHint": "\"kiú-câm-ber\" • /ˈkjuː.kʌm.bər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Mushroom",
        "visualEmoji": "🍄",
        "visualOptions": [
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho",
            "simplePronunciation": "córn",
            "phonetic": "/kɔːrn/",
            "exampleEn": "Cooked yellow corn is delicious.",
            "examplePt": "Milho amarelo cozido é delicioso."
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis",
            "simplePronunciation": "bró-co-li",
            "phonetic": "/ˈbrɑː.kəl.i/",
            "exampleEn": "Steamed broccoli is very nutritious.",
            "examplePt": "Brócolis no vapor é muito nutritivo."
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo",
            "simplePronunciation": "mâx-rum",
            "phonetic": "/ˈmʌʃ.ruːm/",
            "exampleEn": "Add mushrooms to the pasta sauce.",
            "examplePt": "Adicione cogumelos ao molho de macarrão."
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino",
            "simplePronunciation": "kiú-câm-ber",
            "phonetic": "/ˈkjuː.kʌm.bər/",
            "exampleEn": "Put cucumber slices in the salad.",
            "examplePt": "Coloque rodelas de pepino na salada."
          }
        ],
        "options": [
          "Corn",
          "Broccoli",
          "Mushroom",
          "Cucumber"
        ],
        "correctAnswer": "Mushroom",
        "contextSentence": "Add mushrooms to the pasta sauce.",
        "contextSentencePt": "Adicione cogumelos ao molho de macarrão.",
        "explanation": "Exemplo: \"Add mushrooms to the pasta sauce.\" — Adicione cogumelos ao molho de macarrão.",
        "phoneticHint": "\"mâx-rum\" • /ˈmʌʃ.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pepper",
        "visualEmoji": "🫑",
        "visualOptions": [
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim",
            "simplePronunciation": "pí-nât",
            "phonetic": "/ˈpiː.nʌt/",
            "exampleEn": "Roasted peanuts are a crunchy snack.",
            "examplePt": "Amendoins torrados são um lanche crocante."
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão / Pimenta",
            "simplePronunciation": "pé-per",
            "phonetic": "/ˈpep.ər/",
            "exampleEn": "Red pepper adds color to the dish.",
            "examplePt": "O pimentão vermelho dá cor ao prato."
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga",
            "simplePronunciation": "mén-gou",
            "phonetic": "/ˈmæŋ.ɡoʊ/",
            "exampleEn": "This ripe mango is very sweet.",
            "examplePt": "Esta manga madura está muito doce."
          },
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour",
            "translationPt": "Farinha",
            "simplePronunciation": "fláu-er",
            "phonetic": "/ˈflaʊ.ər/",
            "exampleEn": "Mix wheat flour and eggs for the cake.",
            "examplePt": "Misture farinha de trigo e ovos para o bolo."
          }
        ],
        "options": [
          "Peanut",
          "Pepper",
          "Mango",
          "Flour"
        ],
        "correctAnswer": "Pepper",
        "contextSentence": "Red pepper adds color to the dish.",
        "contextSentencePt": "O pimentão vermelho dá cor ao prato.",
        "explanation": "Exemplo: \"Red pepper adds color to the dish.\" — O pimentão vermelho dá cor ao prato.",
        "phoneticHint": "\"pé-per\" • /ˈpep.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Honey",
        "visualEmoji": "🍯",
        "visualOptions": [
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo",
            "simplePronunciation": "mâx-rum",
            "phonetic": "/ˈmʌʃ.ruːm/",
            "exampleEn": "Add mushrooms to the pasta sauce.",
            "examplePt": "Adicione cogumelos ao molho de macarrão."
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga",
            "simplePronunciation": "mén-gou",
            "phonetic": "/ˈmæŋ.ɡoʊ/",
            "exampleEn": "This ripe mango is very sweet.",
            "examplePt": "Esta manga madura está muito doce."
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate",
            "simplePronunciation": "a-vo-cá-dou",
            "phonetic": "/ˌæv.əˈkɑː.doʊ/",
            "exampleEn": "Avocado is rich and creamy.",
            "examplePt": "O abacate é rico e cremoso."
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel",
            "simplePronunciation": "râ-ni",
            "phonetic": "/ˈhʌn.i/",
            "exampleEn": "Bees make golden honey.",
            "examplePt": "As abelhas produzem mel dourado."
          }
        ],
        "options": [
          "Mushroom",
          "Mango",
          "Avocado",
          "Honey"
        ],
        "correctAnswer": "Honey",
        "contextSentence": "Bees make golden honey.",
        "contextSentencePt": "As abelhas produzem mel dourado.",
        "explanation": "Exemplo: \"Bees make golden honey.\" — As abelhas produzem mel dourado.",
        "phoneticHint": "\"râ-ni\" • /ˈhʌn.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Jam",
        "visualEmoji": "🍓",
        "visualOptions": [
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam",
            "translationPt": "Geleia",
            "simplePronunciation": "djém",
            "phonetic": "/dʒæm/",
            "exampleEn": "Spread strawberry jam on the bread.",
            "examplePt": "Passe geleia de morango no pão."
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho",
            "simplePronunciation": "córn",
            "phonetic": "/kɔːrn/",
            "exampleEn": "Cooked yellow corn is delicious.",
            "examplePt": "Milho amarelo cozido é delicioso."
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi",
            "simplePronunciation": "pái-né-pol",
            "phonetic": "/ˈpaɪnˌæp.əl/",
            "exampleEn": "Pineapple is a tropical fruit.",
            "examplePt": "O abacaxi é uma fruta tropical."
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis",
            "simplePronunciation": "bró-co-li",
            "phonetic": "/ˈbrɑː.kəl.i/",
            "exampleEn": "Steamed broccoli is very nutritious.",
            "examplePt": "Brócolis no vapor é muito nutritivo."
          }
        ],
        "options": [
          "Jam",
          "Corn",
          "Pineapple",
          "Broccoli"
        ],
        "correctAnswer": "Jam",
        "contextSentence": "Spread strawberry jam on the bread.",
        "contextSentencePt": "Passe geleia de morango no pão.",
        "explanation": "Exemplo: \"Spread strawberry jam on the bread.\" — Passe geleia de morango no pão.",
        "phoneticHint": "\"djém\" • /dʒæm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Flour",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão / Pimenta",
            "simplePronunciation": "pé-per",
            "phonetic": "/ˈpep.ər/",
            "exampleEn": "Red pepper adds color to the dish.",
            "examplePt": "O pimentão vermelho dá cor ao prato."
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo",
            "simplePronunciation": "mâx-rum",
            "phonetic": "/ˈmʌʃ.ruːm/",
            "exampleEn": "Add mushrooms to the pasta sauce.",
            "examplePt": "Adicione cogumelos ao molho de macarrão."
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino",
            "simplePronunciation": "kiú-câm-ber",
            "phonetic": "/ˈkjuː.kʌm.bər/",
            "exampleEn": "Put cucumber slices in the salad.",
            "examplePt": "Coloque rodelas de pepino na salada."
          },
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour",
            "translationPt": "Farinha",
            "simplePronunciation": "fláu-er",
            "phonetic": "/ˈflaʊ.ər/",
            "exampleEn": "Mix wheat flour and eggs for the cake.",
            "examplePt": "Misture farinha de trigo e ovos para o bolo."
          }
        ],
        "options": [
          "Pepper",
          "Mushroom",
          "Cucumber",
          "Flour"
        ],
        "correctAnswer": "Flour",
        "contextSentence": "Mix wheat flour and eggs for the cake.",
        "contextSentencePt": "Misture farinha de trigo e ovos para o bolo.",
        "explanation": "Exemplo: \"Mix wheat flour and eggs for the cake.\" — Misture farinha de trigo e ovos para o bolo.",
        "phoneticHint": "\"fláu-er\" • /ˈflaʊ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Peanut",
        "visualEmoji": "🥜",
        "visualOptions": [
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate",
            "simplePronunciation": "a-vo-cá-dou",
            "phonetic": "/ˌæv.əˈkɑː.doʊ/",
            "exampleEn": "Avocado is rich and creamy.",
            "examplePt": "O abacate é rico e cremoso."
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga",
            "simplePronunciation": "mén-gou",
            "phonetic": "/ˈmæŋ.ɡoʊ/",
            "exampleEn": "This ripe mango is very sweet.",
            "examplePt": "Esta manga madura está muito doce."
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim",
            "simplePronunciation": "pí-nât",
            "phonetic": "/ˈpiː.nʌt/",
            "exampleEn": "Roasted peanuts are a crunchy snack.",
            "examplePt": "Amendoins torrados são um lanche crocante."
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel",
            "simplePronunciation": "râ-ni",
            "phonetic": "/ˈhʌn.i/",
            "exampleEn": "Bees make golden honey.",
            "examplePt": "As abelhas produzem mel dourado."
          }
        ],
        "options": [
          "Avocado",
          "Mango",
          "Peanut",
          "Honey"
        ],
        "correctAnswer": "Peanut",
        "contextSentence": "Roasted peanuts are a crunchy snack.",
        "contextSentencePt": "Amendoins torrados são um lanche crocante.",
        "explanation": "Exemplo: \"Roasted peanuts are a crunchy snack.\" — Amendoins torrados são um lanche crocante.",
        "phoneticHint": "\"pí-nât\" • /ˈpiː.nʌt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p11",
    "worldId": 0,
    "phaseNumber": 11,
    "themeId": "body",
    "themeTitle": "Corpo Humano",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "title": "Corpo Humano • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema 3 (Nível 1/4) • As 12 partes principais do corpo mais usadas no dia a dia",
    "pedagogicalObjective": "Reconhecer e pronunciar as 12 partes essenciais do corpo humano: Head, Hand, Foot, Eye, Ear, Nose, Mouth, Hair, Face, Arm, Leg e Body.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Iniciamos o Tema 3 (Corpo Humano • Módulo 1: Essenciais): Head (\"réd\" = Cabeça), Hand (\"rénd\" = Mão), Foot (\"fút\" = Pé), Eye (\"ái\" = Olho), Ear (\"ír\" = Orelha/Ouvido) e Nose (\"nôuz\" = Nariz).",
      "Também aprendemos Mouth (\"máuth\" = Boca), Hair (\"rér\" = Cabelo), Face (\"fêis\" = Rosto), Arm (\"árm\" = Braço), Leg (\"lég\" = Perna) e Body (\"bó-di\" = Corpo).",
      "Logo após concluir este módulo, você fará o seu 3º Módulo Exclusivo de Pronomes (Reflexivos & Interrogativos)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p11-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Head",
        "visualEmoji": "🧑",
        "visualOptions": [
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido",
            "simplePronunciation": "ír",
            "phonetic": "/ɪr/",
            "exampleEn": "We listen with our ears.",
            "examplePt": "Nós ouvimos com nossos ouvidos."
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head",
            "translationPt": "Cabeça",
            "simplePronunciation": "réd",
            "phonetic": "/hed/",
            "exampleEn": "Nod your head to say yes.",
            "examplePt": "Balance a cabeça para dizer sim."
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo",
            "simplePronunciation": "rér",
            "phonetic": "/her/",
            "exampleEn": "She brushes her long hair.",
            "examplePt": "Ela escova seu cabelo comprido."
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho",
            "simplePronunciation": "ái",
            "phonetic": "/aɪ/",
            "exampleEn": "She has brown eyes.",
            "examplePt": "Ela tem olhos castanhos."
          }
        ],
        "options": [
          "Ear",
          "Head",
          "Hair",
          "Eye"
        ],
        "correctAnswer": "Head",
        "contextSentence": "Nod your head to say yes.",
        "contextSentencePt": "Balance a cabeça para dizer sim.",
        "explanation": "Exemplo: \"Nod your head to say yes.\" — Balance a cabeça para dizer sim.",
        "phoneticHint": "\"réd\" • /hed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna",
            "simplePronunciation": "lég",
            "phonetic": "/leɡ/",
            "exampleEn": "He has strong legs for running.",
            "examplePt": "Ele tem pernas fortes para correr."
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão",
            "simplePronunciation": "rénd",
            "phonetic": "/hænd/",
            "exampleEn": "Raise your hand to speak.",
            "examplePt": "Levante a mão para falar."
          },
          {
            "text": "Body",
            "emoji": "🧍",
            "label": "Body",
            "translationPt": "Corpo",
            "simplePronunciation": "bó-di",
            "phonetic": "/ˈbɑː.di/",
            "exampleEn": "Exercise is good for your body.",
            "examplePt": "Exercício faz bem para o seu corpo."
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz",
            "simplePronunciation": "nôuz",
            "phonetic": "/noʊz/",
            "exampleEn": "Breathe through your nose.",
            "examplePt": "Respire pelo nariz."
          }
        ],
        "options": [
          "Leg",
          "Hand",
          "Body",
          "Nose"
        ],
        "correctAnswer": "Hand",
        "contextSentence": "Raise your hand to speak.",
        "contextSentencePt": "Levante a mão para falar.",
        "explanation": "Exemplo: \"Raise your hand to speak.\" — Levante a mão para falar.",
        "phoneticHint": "\"rénd\" • /hænd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Foot",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Face",
            "emoji": "😊",
            "label": "Face",
            "translationPt": "Rosto",
            "simplePronunciation": "fêis",
            "phonetic": "/feɪs/",
            "exampleEn": "Wash your face in the morning.",
            "examplePt": "Lave o rosto de manhã."
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço",
            "simplePronunciation": "árm",
            "phonetic": "/ɑːrm/",
            "exampleEn": "Stretch your arms high.",
            "examplePt": "Estique seus braços para o alto."
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca",
            "simplePronunciation": "máuth",
            "phonetic": "/maʊθ/",
            "exampleEn": "Open your mouth to speak.",
            "examplePt": "Abra a boca para falar."
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé",
            "simplePronunciation": "fút",
            "phonetic": "/fʊt/",
            "exampleEn": "Put your shoe on your foot.",
            "examplePt": "Coloque o sapato no pé."
          }
        ],
        "options": [
          "Face",
          "Arm",
          "Mouth",
          "Foot"
        ],
        "correctAnswer": "Foot",
        "contextSentence": "Put your shoe on your foot.",
        "contextSentencePt": "Coloque o sapato no pé.",
        "explanation": "Exemplo: \"Put your shoe on your foot.\" — Coloque o sapato no pé.",
        "phoneticHint": "\"fút\" • /fʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Eye",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão",
            "simplePronunciation": "rénd",
            "phonetic": "/hænd/",
            "exampleEn": "Raise your hand to speak.",
            "examplePt": "Levante a mão para falar."
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé",
            "simplePronunciation": "fút",
            "phonetic": "/fʊt/",
            "exampleEn": "Put your shoe on your foot.",
            "examplePt": "Coloque o sapato no pé."
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho",
            "simplePronunciation": "ái",
            "phonetic": "/aɪ/",
            "exampleEn": "She has brown eyes.",
            "examplePt": "Ela tem olhos castanhos."
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head",
            "translationPt": "Cabeça",
            "simplePronunciation": "réd",
            "phonetic": "/hed/",
            "exampleEn": "Nod your head to say yes.",
            "examplePt": "Balance a cabeça para dizer sim."
          }
        ],
        "options": [
          "Hand",
          "Foot",
          "Eye",
          "Head"
        ],
        "correctAnswer": "Eye",
        "contextSentence": "She has brown eyes.",
        "contextSentencePt": "Ela tem olhos castanhos.",
        "explanation": "Exemplo: \"She has brown eyes.\" — Ela tem olhos castanhos.",
        "phoneticHint": "\"ái\" • /aɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ear",
        "visualEmoji": "👂",
        "visualOptions": [
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido",
            "simplePronunciation": "ír",
            "phonetic": "/ɪr/",
            "exampleEn": "We listen with our ears.",
            "examplePt": "Nós ouvimos com nossos ouvidos."
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo",
            "simplePronunciation": "rér",
            "phonetic": "/her/",
            "exampleEn": "She brushes her long hair.",
            "examplePt": "Ela escova seu cabelo comprido."
          },
          {
            "text": "Body",
            "emoji": "🧍",
            "label": "Body",
            "translationPt": "Corpo",
            "simplePronunciation": "bó-di",
            "phonetic": "/ˈbɑː.di/",
            "exampleEn": "Exercise is good for your body.",
            "examplePt": "Exercício faz bem para o seu corpo."
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna",
            "simplePronunciation": "lég",
            "phonetic": "/leɡ/",
            "exampleEn": "He has strong legs for running.",
            "examplePt": "Ele tem pernas fortes para correr."
          }
        ],
        "options": [
          "Ear",
          "Hair",
          "Body",
          "Leg"
        ],
        "correctAnswer": "Ear",
        "contextSentence": "We listen with our ears.",
        "contextSentencePt": "Nós ouvimos com nossos ouvidos.",
        "explanation": "Exemplo: \"We listen with our ears.\" — Nós ouvimos com nossos ouvidos.",
        "phoneticHint": "\"ír\" • /ɪr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Nose",
        "visualEmoji": "👃",
        "visualOptions": [
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé",
            "simplePronunciation": "fút",
            "phonetic": "/fʊt/",
            "exampleEn": "Put your shoe on your foot.",
            "examplePt": "Coloque o sapato no pé."
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca",
            "simplePronunciation": "máuth",
            "phonetic": "/maʊθ/",
            "exampleEn": "Open your mouth to speak.",
            "examplePt": "Abra a boca para falar."
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz",
            "simplePronunciation": "nôuz",
            "phonetic": "/noʊz/",
            "exampleEn": "Breathe through your nose.",
            "examplePt": "Respire pelo nariz."
          },
          {
            "text": "Face",
            "emoji": "😊",
            "label": "Face",
            "translationPt": "Rosto",
            "simplePronunciation": "fêis",
            "phonetic": "/feɪs/",
            "exampleEn": "Wash your face in the morning.",
            "examplePt": "Lave o rosto de manhã."
          }
        ],
        "options": [
          "Foot",
          "Mouth",
          "Nose",
          "Face"
        ],
        "correctAnswer": "Nose",
        "contextSentence": "Breathe through your nose.",
        "contextSentencePt": "Respire pelo nariz.",
        "explanation": "Exemplo: \"Breathe through your nose.\" — Respire pelo nariz.",
        "phoneticHint": "\"nôuz\" • /noʊz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Mouth",
        "visualEmoji": "👄",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão",
            "simplePronunciation": "rénd",
            "phonetic": "/hænd/",
            "exampleEn": "Raise your hand to speak.",
            "examplePt": "Levante a mão para falar."
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca",
            "simplePronunciation": "máuth",
            "phonetic": "/maʊθ/",
            "exampleEn": "Open your mouth to speak.",
            "examplePt": "Abra a boca para falar."
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head",
            "translationPt": "Cabeça",
            "simplePronunciation": "réd",
            "phonetic": "/hed/",
            "exampleEn": "Nod your head to say yes.",
            "examplePt": "Balance a cabeça para dizer sim."
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho",
            "simplePronunciation": "ái",
            "phonetic": "/aɪ/",
            "exampleEn": "She has brown eyes.",
            "examplePt": "Ela tem olhos castanhos."
          }
        ],
        "options": [
          "Hand",
          "Mouth",
          "Head",
          "Eye"
        ],
        "correctAnswer": "Mouth",
        "contextSentence": "Open your mouth to speak.",
        "contextSentencePt": "Abra a boca para falar.",
        "explanation": "Exemplo: \"Open your mouth to speak.\" — Abra a boca para falar.",
        "phoneticHint": "\"máuth\" • /maʊθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hair",
        "visualEmoji": "💇",
        "visualOptions": [
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido",
            "simplePronunciation": "ír",
            "phonetic": "/ɪr/",
            "exampleEn": "We listen with our ears.",
            "examplePt": "Nós ouvimos com nossos ouvidos."
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna",
            "simplePronunciation": "lég",
            "phonetic": "/leɡ/",
            "exampleEn": "He has strong legs for running.",
            "examplePt": "Ele tem pernas fortes para correr."
          },
          {
            "text": "Body",
            "emoji": "🧍",
            "label": "Body",
            "translationPt": "Corpo",
            "simplePronunciation": "bó-di",
            "phonetic": "/ˈbɑː.di/",
            "exampleEn": "Exercise is good for your body.",
            "examplePt": "Exercício faz bem para o seu corpo."
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo",
            "simplePronunciation": "rér",
            "phonetic": "/her/",
            "exampleEn": "She brushes her long hair.",
            "examplePt": "Ela escova seu cabelo comprido."
          }
        ],
        "options": [
          "Ear",
          "Leg",
          "Body",
          "Hair"
        ],
        "correctAnswer": "Hair",
        "contextSentence": "She brushes her long hair.",
        "contextSentencePt": "Ela escova seu cabelo comprido.",
        "explanation": "Exemplo: \"She brushes her long hair.\" — Ela escova seu cabelo comprido.",
        "phoneticHint": "\"rér\" • /her/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Face",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Face",
            "emoji": "😊",
            "label": "Face",
            "translationPt": "Rosto",
            "simplePronunciation": "fêis",
            "phonetic": "/feɪs/",
            "exampleEn": "Wash your face in the morning.",
            "examplePt": "Lave o rosto de manhã."
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço",
            "simplePronunciation": "árm",
            "phonetic": "/ɑːrm/",
            "exampleEn": "Stretch your arms high.",
            "examplePt": "Estique seus braços para o alto."
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz",
            "simplePronunciation": "nôuz",
            "phonetic": "/noʊz/",
            "exampleEn": "Breathe through your nose.",
            "examplePt": "Respire pelo nariz."
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca",
            "simplePronunciation": "máuth",
            "phonetic": "/maʊθ/",
            "exampleEn": "Open your mouth to speak.",
            "examplePt": "Abra a boca para falar."
          }
        ],
        "options": [
          "Face",
          "Arm",
          "Nose",
          "Mouth"
        ],
        "correctAnswer": "Face",
        "contextSentence": "Wash your face in the morning.",
        "contextSentencePt": "Lave o rosto de manhã.",
        "explanation": "Exemplo: \"Wash your face in the morning.\" — Lave o rosto de manhã.",
        "phoneticHint": "\"fêis\" • /feɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Arm",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho",
            "simplePronunciation": "ái",
            "phonetic": "/aɪ/",
            "exampleEn": "She has brown eyes.",
            "examplePt": "Ela tem olhos castanhos."
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head",
            "translationPt": "Cabeça",
            "simplePronunciation": "réd",
            "phonetic": "/hed/",
            "exampleEn": "Nod your head to say yes.",
            "examplePt": "Balance a cabeça para dizer sim."
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão",
            "simplePronunciation": "rénd",
            "phonetic": "/hænd/",
            "exampleEn": "Raise your hand to speak.",
            "examplePt": "Levante a mão para falar."
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço",
            "simplePronunciation": "árm",
            "phonetic": "/ɑːrm/",
            "exampleEn": "Stretch your arms high.",
            "examplePt": "Estique seus braços para o alto."
          }
        ],
        "options": [
          "Eye",
          "Head",
          "Hand",
          "Arm"
        ],
        "correctAnswer": "Arm",
        "contextSentence": "Stretch your arms high.",
        "contextSentencePt": "Estique seus braços para o alto.",
        "explanation": "Exemplo: \"Stretch your arms high.\" — Estique seus braços para o alto.",
        "phoneticHint": "\"árm\" • /ɑːrm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Leg",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo",
            "simplePronunciation": "rér",
            "phonetic": "/her/",
            "exampleEn": "She brushes her long hair.",
            "examplePt": "Ela escova seu cabelo comprido."
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido",
            "simplePronunciation": "ír",
            "phonetic": "/ɪr/",
            "exampleEn": "We listen with our ears.",
            "examplePt": "Nós ouvimos com nossos ouvidos."
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna",
            "simplePronunciation": "lég",
            "phonetic": "/leɡ/",
            "exampleEn": "He has strong legs for running.",
            "examplePt": "Ele tem pernas fortes para correr."
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé",
            "simplePronunciation": "fút",
            "phonetic": "/fʊt/",
            "exampleEn": "Put your shoe on your foot.",
            "examplePt": "Coloque o sapato no pé."
          }
        ],
        "options": [
          "Hair",
          "Ear",
          "Leg",
          "Foot"
        ],
        "correctAnswer": "Leg",
        "contextSentence": "He has strong legs for running.",
        "contextSentencePt": "Ele tem pernas fortes para correr.",
        "explanation": "Exemplo: \"He has strong legs for running.\" — Ele tem pernas fortes para correr.",
        "phoneticHint": "\"lég\" • /leɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Body",
        "visualEmoji": "🧍",
        "visualOptions": [
          {
            "text": "Body",
            "emoji": "🧍",
            "label": "Body",
            "translationPt": "Corpo",
            "simplePronunciation": "bó-di",
            "phonetic": "/ˈbɑː.di/",
            "exampleEn": "Exercise is good for your body.",
            "examplePt": "Exercício faz bem para o seu corpo."
          },
          {
            "text": "Face",
            "emoji": "😊",
            "label": "Face",
            "translationPt": "Rosto",
            "simplePronunciation": "fêis",
            "phonetic": "/feɪs/",
            "exampleEn": "Wash your face in the morning.",
            "examplePt": "Lave o rosto de manhã."
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca",
            "simplePronunciation": "máuth",
            "phonetic": "/maʊθ/",
            "exampleEn": "Open your mouth to speak.",
            "examplePt": "Abra a boca para falar."
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz",
            "simplePronunciation": "nôuz",
            "phonetic": "/noʊz/",
            "exampleEn": "Breathe through your nose.",
            "examplePt": "Respire pelo nariz."
          }
        ],
        "options": [
          "Body",
          "Face",
          "Mouth",
          "Nose"
        ],
        "correctAnswer": "Body",
        "contextSentence": "Exercise is good for your body.",
        "contextSentencePt": "Exercício faz bem para o seu corpo.",
        "explanation": "Exemplo: \"Exercise is good for your body.\" — Exercício faz bem para o seu corpo.",
        "phoneticHint": "\"bó-di\" • /ˈbɑː.di/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p12",
    "worldId": 0,
    "phaseNumber": 12,
    "title": "Lição de Pronomes III • Reflexivos & Interrogativos",
    "subtitle": "Módulo de Pronomes 3/6 (Após 9 de Vocabulário) • Pares Associativos + Voz da Professora",
    "pedagogicalObjective": "Dominar os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Ourselves, Themselves) e os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à 3ª Lição Exclusiva de Pronomes (após 9 módulos de vocabulário)!",
      "5º Passo: Aprendemos os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Ourselves, Themselves), que funcionam como um espelho.",
      "6º Passo: Aprendemos os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How), as palavrinhas dos detetives curiosos para fazer perguntas!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p12-pron-1",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Como se Olhar no Espelho)",
        "conceptHeader": "Funcionam igualzinho a um espelho! Quando eu faço uma ação em mim mesmo, digo \"Myself\" (Eu mesmo). Para você mesmo, \"Yourself\". Para um menino sozinho, \"Himself\"; e para uma menina sozinha, \"Herself\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_5.wav",
        "prompt": "🤝 Conecte cada Pronome Reflexivo ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p12-b1-ref1",
            "en": "Myself (\"mai-sélf\")",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo (no espelho)",
            "tipPt": "Lindo! \"I see myself in the mirror\" = \"Eu me vejo no espelho\"!"
          },
          {
            "id": "w0-p12-b1-ref2",
            "en": "Yourself (\"iór-sélf\")",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"By yourself\" = \"Por você mesmo\"!"
          },
          {
            "id": "w0-p12-b1-ref3",
            "en": "Himself (\"rim-sélf\")",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (menino ou homem sozinho)",
            "tipPt": "Perfeito! \"He did it himself\" = \"Ele mesmo fez isso\"!"
          },
          {
            "id": "w0-p12-b1-ref4",
            "en": "Herself (\"râr-sélf\")",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (menina ou mulher sozinha)",
            "tipPt": "Excelente! \"She dressed herself\" = \"Ela se vestiu sozinha\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Myself (Eu mesmo), Yourself (Você mesmo), Himself (Ele mesmo), Herself (Ela mesma).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-pron-2",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Perguntas de Detetive - Parte 1)",
        "conceptHeader": "São as palavrinhas dos detetives curiosos para fazer perguntas! Para saber QUEM é a pessoa, perguntamos \"Who?\". Para saber O QUÊ é uma coisa, \"What?\". Para saber ONDE fica um lugar, \"Where?\"; e QUANDO, \"When?\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_6.wav",
        "prompt": "🤝 Conecte cada Pronome Interrogativo ao tipo de pergunta que ele faz:",
        "pairs": [
          {
            "id": "w0-p12-b2-int1",
            "en": "Who? (\"rú\")",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre PESSOAS)",
            "tipPt": "Muito bem! \"Who is your teacher?\" = \"Quem é sua professora?\""
          },
          {
            "id": "w0-p12-b2-int2",
            "en": "What? (\"uót\")",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre COISAS)",
            "tipPt": "Isso! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p12-b2-int3",
            "en": "Where? (\"uér\")",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre LUGAR)",
            "tipPt": "Perfeito! \"Where is the school?\" = \"Onde fica a escola?\""
          },
          {
            "id": "w0-p12-b2-int4",
            "en": "When? (\"uén\")",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre TEMPO ou HORA)",
            "tipPt": "Excelente! \"When is lunch?\" = \"Quando é o almoço?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Who? (Quem?), What? (O quê? / Qual?), Where? (Onde?), When? (Quando?).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-pron-3",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Por quê, De quem e Como? - Parte 2)",
        "conceptHeader": "Continuando nossas perguntas de detetive: para saber o MOTIVO, perguntamos \"Why?\" (Por quê?). Para saber DE QUEM é um objeto, \"Whose?\". Para ESCOLHER entre opções, \"Which?\"; e para saber COMO, \"How?\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_6.wav",
        "prompt": "🤝 Ligue os Pronomes Interrogativos \"Why, Whose, Which, How\" aos seus pares:",
        "pairs": [
          {
            "id": "w0-p12-b3-int5",
            "en": "Why? (\"uái\")",
            "emoji": "🤔",
            "phonetic": "/waɪ/",
            "pt": "Por quê? (pergunta o MOTIVO)",
            "tipPt": "Isso! \"Why are you happy?\" = \"Por que você está feliz?\""
          },
          {
            "id": "w0-p12-b3-int6",
            "en": "Whose? (\"rúz\")",
            "emoji": "🎒",
            "phonetic": "/huːz/",
            "pt": "De quem? (pergunta quem é o DONO)",
            "tipPt": "Muito bem! \"Whose backpack is this?\" = \"De quem é esta mochila?\""
          },
          {
            "id": "w0-p12-b3-int7",
            "en": "Which? (\"uítch\")",
            "emoji": "⚖️",
            "phonetic": "/wɪtʃ/",
            "pt": "Qual? (para ESCOLHER entre opções)",
            "tipPt": "Perfeito! \"Which color do you prefer?\" = \"Qual cor você prefere?\""
          },
          {
            "id": "w0-p12-b3-int8",
            "en": "How? (\"ráu\")",
            "emoji": "🛠️",
            "phonetic": "/haʊ/",
            "pt": "Como? (pergunta o MODO ou estado)",
            "tipPt": "Parabéns! \"How are you?\" = \"Como vai você?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Why? (Por quê?), Whose? (De quem?), Which? (Qual dentre opções?), How? (Como?).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p13",
    "worldId": 0,
    "phaseNumber": 13,
    "themeId": "body",
    "themeTitle": "Corpo Humano",
    "frequencyLevel": "Módulo 2 • Comuns",
    "title": "Corpo Humano • Módulo 2: Palavras Comuns",
    "subtitle": "Tema 3 (Nível 2/4) • 12 partes comuns em conversas e saúde",
    "pedagogicalObjective": "Identificar partes comuns do corpo: Tooth, Finger, Back, Heart, Neck, Shoulder, Knee, Stomach, Skin, Voice, Blood e Bone.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 2 do Corpo Humano vemos palavras comuns: Tooth (\"túth\" = Dente), Finger (\"fín-guer\" = Dedo da mão), Back (\"bék\" = Costas), Heart (\"rárt\" = Coração), Neck (\"nék\" = Pescoço) e Shoulder (\"xôul-der\" = Ombro).",
      "E completamos com Knee (\"ní\" = Joelho), Stomach (\"stâ-mak\" = Estômago/Barriga), Skin (\"skín\" = Pele), Voice (\"vóis\" = Voz), Blood (\"blâd\" = Sangue) e Bone (\"bôun\" = Osso)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p13-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tooth",
        "visualEmoji": "🦷",
        "visualOptions": [
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração",
            "simplePronunciation": "rárt",
            "phonetic": "/hɑːrt/",
            "exampleEn": "Your heart beats fast when you run.",
            "examplePt": "Seu coração bate rápido quando você corre."
          },
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso",
            "simplePronunciation": "bôun",
            "phonetic": "/boʊn/",
            "exampleEn": "Calcium keeps our bones strong.",
            "examplePt": "O cálcio mantém nossos ossos fortes."
          },
          {
            "text": "Blood",
            "emoji": "🩸",
            "label": "Blood",
            "translationPt": "Sangue",
            "simplePronunciation": "blâd",
            "phonetic": "/blʌd/",
            "exampleEn": "The heart pumps blood through the body.",
            "examplePt": "O coração bombeia sangue pelo corpo."
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove cada dente após as refeições."
          }
        ],
        "options": [
          "Heart",
          "Bone",
          "Blood",
          "Tooth"
        ],
        "correctAnswer": "Tooth",
        "contextSentence": "Brush every tooth after meals.",
        "contextSentencePt": "Escove cada dente após as refeições.",
        "explanation": "Exemplo: \"Brush every tooth after meals.\" — Escove cada dente após as refeições.",
        "phoneticHint": "\"túth\" • /tuːθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Finger",
        "visualEmoji": "☝️",
        "visualOptions": [
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice",
            "translationPt": "Voz",
            "simplePronunciation": "vóis",
            "phonetic": "/vɔɪs/",
            "exampleEn": "The teacher has a sweet voice.",
            "examplePt": "A professora tem uma voz meiga."
          },
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee",
            "translationPt": "Joelho",
            "simplePronunciation": "ní",
            "phonetic": "/niː/",
            "exampleEn": "Bend your knees slowly.",
            "examplePt": "Dobre seus joelhos devagar."
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger",
            "translationPt": "Dedo da mão",
            "simplePronunciation": "fín-guer",
            "phonetic": "/ˈfɪŋ.ɡər/",
            "exampleEn": "We have five fingers on each hand.",
            "examplePt": "Temos cinco dedos em cada mão."
          },
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck",
            "translationPt": "Pescoço",
            "simplePronunciation": "nék",
            "phonetic": "/nek/",
            "exampleEn": "Wrap a warm scarf around your neck.",
            "examplePt": "Enrole um cachecol quentinho no pescoço."
          }
        ],
        "options": [
          "Voice",
          "Knee",
          "Finger",
          "Neck"
        ],
        "correctAnswer": "Finger",
        "contextSentence": "We have five fingers on each hand.",
        "contextSentencePt": "Temos cinco dedos em cada mão.",
        "explanation": "Exemplo: \"We have five fingers on each hand.\" — Temos cinco dedos em cada mão.",
        "phoneticHint": "\"fín-guer\" • /ˈfɪŋ.ɡər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Back",
        "visualEmoji": "🧍",
        "visualOptions": [
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back",
            "translationPt": "Costas",
            "simplePronunciation": "bék",
            "phonetic": "/bæk/",
            "exampleEn": "Keep your back straight when sitting.",
            "examplePt": "Mantenha as costas retas ao sentar."
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach",
            "translationPt": "Estômago / Barriga",
            "simplePronunciation": "stâ-mak",
            "phonetic": "/ˈstʌm.ək/",
            "exampleEn": "My stomach is full after dinner.",
            "examplePt": "Meu estômago está cheio após o jantar."
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin",
            "translationPt": "Pele",
            "simplePronunciation": "skín",
            "phonetic": "/skɪn/",
            "exampleEn": "Drink water for healthy skin.",
            "examplePt": "Beba água para ter uma pele saudável."
          },
          {
            "text": "Shoulder",
            "emoji": "🤷",
            "label": "Shoulder",
            "translationPt": "Ombro",
            "simplePronunciation": "xôul-der",
            "phonetic": "/ˈʃoʊl.dər/",
            "exampleEn": "Carry the bag on your shoulder.",
            "examplePt": "Carregue a bolsa no ombro."
          }
        ],
        "options": [
          "Back",
          "Stomach",
          "Skin",
          "Shoulder"
        ],
        "correctAnswer": "Back",
        "contextSentence": "Keep your back straight when sitting.",
        "contextSentencePt": "Mantenha as costas retas ao sentar.",
        "explanation": "Exemplo: \"Keep your back straight when sitting.\" — Mantenha as costas retas ao sentar.",
        "phoneticHint": "\"bék\" • /bæk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Heart",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso",
            "simplePronunciation": "bôun",
            "phonetic": "/boʊn/",
            "exampleEn": "Calcium keeps our bones strong.",
            "examplePt": "O cálcio mantém nossos ossos fortes."
          },
          {
            "text": "Blood",
            "emoji": "🩸",
            "label": "Blood",
            "translationPt": "Sangue",
            "simplePronunciation": "blâd",
            "phonetic": "/blʌd/",
            "exampleEn": "The heart pumps blood through the body.",
            "examplePt": "O coração bombeia sangue pelo corpo."
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração",
            "simplePronunciation": "rárt",
            "phonetic": "/hɑːrt/",
            "exampleEn": "Your heart beats fast when you run.",
            "examplePt": "Seu coração bate rápido quando você corre."
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove cada dente após as refeições."
          }
        ],
        "options": [
          "Bone",
          "Blood",
          "Heart",
          "Tooth"
        ],
        "correctAnswer": "Heart",
        "contextSentence": "Your heart beats fast when you run.",
        "contextSentencePt": "Seu coração bate rápido quando você corre.",
        "explanation": "Exemplo: \"Your heart beats fast when you run.\" — Seu coração bate rápido quando você corre.",
        "phoneticHint": "\"rárt\" • /hɑːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Neck",
        "visualEmoji": "🧣",
        "visualOptions": [
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger",
            "translationPt": "Dedo da mão",
            "simplePronunciation": "fín-guer",
            "phonetic": "/ˈfɪŋ.ɡər/",
            "exampleEn": "We have five fingers on each hand.",
            "examplePt": "Temos cinco dedos em cada mão."
          },
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck",
            "translationPt": "Pescoço",
            "simplePronunciation": "nék",
            "phonetic": "/nek/",
            "exampleEn": "Wrap a warm scarf around your neck.",
            "examplePt": "Enrole um cachecol quentinho no pescoço."
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back",
            "translationPt": "Costas",
            "simplePronunciation": "bék",
            "phonetic": "/bæk/",
            "exampleEn": "Keep your back straight when sitting.",
            "examplePt": "Mantenha as costas retas ao sentar."
          },
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice",
            "translationPt": "Voz",
            "simplePronunciation": "vóis",
            "phonetic": "/vɔɪs/",
            "exampleEn": "The teacher has a sweet voice.",
            "examplePt": "A professora tem uma voz meiga."
          }
        ],
        "options": [
          "Finger",
          "Neck",
          "Back",
          "Voice"
        ],
        "correctAnswer": "Neck",
        "contextSentence": "Wrap a warm scarf around your neck.",
        "contextSentencePt": "Enrole um cachecol quentinho no pescoço.",
        "explanation": "Exemplo: \"Wrap a warm scarf around your neck.\" — Enrole um cachecol quentinho no pescoço.",
        "phoneticHint": "\"nék\" • /nek/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Shoulder",
        "visualEmoji": "🤷",
        "visualOptions": [
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach",
            "translationPt": "Estômago / Barriga",
            "simplePronunciation": "stâ-mak",
            "phonetic": "/ˈstʌm.ək/",
            "exampleEn": "My stomach is full after dinner.",
            "examplePt": "Meu estômago está cheio após o jantar."
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin",
            "translationPt": "Pele",
            "simplePronunciation": "skín",
            "phonetic": "/skɪn/",
            "exampleEn": "Drink water for healthy skin.",
            "examplePt": "Beba água para ter uma pele saudável."
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger",
            "translationPt": "Dedo da mão",
            "simplePronunciation": "fín-guer",
            "phonetic": "/ˈfɪŋ.ɡər/",
            "exampleEn": "We have five fingers on each hand.",
            "examplePt": "Temos cinco dedos em cada mão."
          },
          {
            "text": "Shoulder",
            "emoji": "🤷",
            "label": "Shoulder",
            "translationPt": "Ombro",
            "simplePronunciation": "xôul-der",
            "phonetic": "/ˈʃoʊl.dər/",
            "exampleEn": "Carry the bag on your shoulder.",
            "examplePt": "Carregue a bolsa no ombro."
          }
        ],
        "options": [
          "Stomach",
          "Skin",
          "Finger",
          "Shoulder"
        ],
        "correctAnswer": "Shoulder",
        "contextSentence": "Carry the bag on your shoulder.",
        "contextSentencePt": "Carregue a bolsa no ombro.",
        "explanation": "Exemplo: \"Carry the bag on your shoulder.\" — Carregue a bolsa no ombro.",
        "phoneticHint": "\"xôul-der\" • /ˈʃoʊl.dər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Knee",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee",
            "translationPt": "Joelho",
            "simplePronunciation": "ní",
            "phonetic": "/niː/",
            "exampleEn": "Bend your knees slowly.",
            "examplePt": "Dobre seus joelhos devagar."
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove cada dente após as refeições."
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração",
            "simplePronunciation": "rárt",
            "phonetic": "/hɑːrt/",
            "exampleEn": "Your heart beats fast when you run.",
            "examplePt": "Seu coração bate rápido quando você corre."
          },
          {
            "text": "Blood",
            "emoji": "🩸",
            "label": "Blood",
            "translationPt": "Sangue",
            "simplePronunciation": "blâd",
            "phonetic": "/blʌd/",
            "exampleEn": "The heart pumps blood through the body.",
            "examplePt": "O coração bombeia sangue pelo corpo."
          }
        ],
        "options": [
          "Knee",
          "Tooth",
          "Heart",
          "Blood"
        ],
        "correctAnswer": "Knee",
        "contextSentence": "Bend your knees slowly.",
        "contextSentencePt": "Dobre seus joelhos devagar.",
        "explanation": "Exemplo: \"Bend your knees slowly.\" — Dobre seus joelhos devagar.",
        "phoneticHint": "\"ní\" • /niː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Stomach",
        "visualEmoji": "🤰",
        "visualOptions": [
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck",
            "translationPt": "Pescoço",
            "simplePronunciation": "nék",
            "phonetic": "/nek/",
            "exampleEn": "Wrap a warm scarf around your neck.",
            "examplePt": "Enrole um cachecol quentinho no pescoço."
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back",
            "translationPt": "Costas",
            "simplePronunciation": "bék",
            "phonetic": "/bæk/",
            "exampleEn": "Keep your back straight when sitting.",
            "examplePt": "Mantenha as costas retas ao sentar."
          },
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso",
            "simplePronunciation": "bôun",
            "phonetic": "/boʊn/",
            "exampleEn": "Calcium keeps our bones strong.",
            "examplePt": "O cálcio mantém nossos ossos fortes."
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach",
            "translationPt": "Estômago / Barriga",
            "simplePronunciation": "stâ-mak",
            "phonetic": "/ˈstʌm.ək/",
            "exampleEn": "My stomach is full after dinner.",
            "examplePt": "Meu estômago está cheio após o jantar."
          }
        ],
        "options": [
          "Neck",
          "Back",
          "Bone",
          "Stomach"
        ],
        "correctAnswer": "Stomach",
        "contextSentence": "My stomach is full after dinner.",
        "contextSentencePt": "Meu estômago está cheio após o jantar.",
        "explanation": "Exemplo: \"My stomach is full after dinner.\" — Meu estômago está cheio após o jantar.",
        "phoneticHint": "\"stâ-mak\" • /ˈstʌm.ək/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Skin",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Shoulder",
            "emoji": "🤷",
            "label": "Shoulder",
            "translationPt": "Ombro",
            "simplePronunciation": "xôul-der",
            "phonetic": "/ˈʃoʊl.dər/",
            "exampleEn": "Carry the bag on your shoulder.",
            "examplePt": "Carregue a bolsa no ombro."
          },
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee",
            "translationPt": "Joelho",
            "simplePronunciation": "ní",
            "phonetic": "/niː/",
            "exampleEn": "Bend your knees slowly.",
            "examplePt": "Dobre seus joelhos devagar."
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin",
            "translationPt": "Pele",
            "simplePronunciation": "skín",
            "phonetic": "/skɪn/",
            "exampleEn": "Drink water for healthy skin.",
            "examplePt": "Beba água para ter uma pele saudável."
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove cada dente após as refeições."
          }
        ],
        "options": [
          "Shoulder",
          "Knee",
          "Skin",
          "Tooth"
        ],
        "correctAnswer": "Skin",
        "contextSentence": "Drink water for healthy skin.",
        "contextSentencePt": "Beba água para ter uma pele saudável.",
        "explanation": "Exemplo: \"Drink water for healthy skin.\" — Beba água para ter uma pele saudável.",
        "phoneticHint": "\"skín\" • /skɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Voice",
        "visualEmoji": "🗣️",
        "visualOptions": [
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice",
            "translationPt": "Voz",
            "simplePronunciation": "vóis",
            "phonetic": "/vɔɪs/",
            "exampleEn": "The teacher has a sweet voice.",
            "examplePt": "A professora tem uma voz meiga."
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin",
            "translationPt": "Pele",
            "simplePronunciation": "skín",
            "phonetic": "/skɪn/",
            "exampleEn": "Drink water for healthy skin.",
            "examplePt": "Beba água para ter uma pele saudável."
          },
          {
            "text": "Shoulder",
            "emoji": "🤷",
            "label": "Shoulder",
            "translationPt": "Ombro",
            "simplePronunciation": "xôul-der",
            "phonetic": "/ˈʃoʊl.dər/",
            "exampleEn": "Carry the bag on your shoulder.",
            "examplePt": "Carregue a bolsa no ombro."
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach",
            "translationPt": "Estômago / Barriga",
            "simplePronunciation": "stâ-mak",
            "phonetic": "/ˈstʌm.ək/",
            "exampleEn": "My stomach is full after dinner.",
            "examplePt": "Meu estômago está cheio após o jantar."
          }
        ],
        "options": [
          "Voice",
          "Skin",
          "Shoulder",
          "Stomach"
        ],
        "correctAnswer": "Voice",
        "contextSentence": "The teacher has a sweet voice.",
        "contextSentencePt": "A professora tem uma voz meiga.",
        "explanation": "Exemplo: \"The teacher has a sweet voice.\" — A professora tem uma voz meiga.",
        "phoneticHint": "\"vóis\" • /vɔɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Blood",
        "visualEmoji": "🩸",
        "visualOptions": [
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger",
            "translationPt": "Dedo da mão",
            "simplePronunciation": "fín-guer",
            "phonetic": "/ˈfɪŋ.ɡər/",
            "exampleEn": "We have five fingers on each hand.",
            "examplePt": "Temos cinco dedos em cada mão."
          },
          {
            "text": "Blood",
            "emoji": "🩸",
            "label": "Blood",
            "translationPt": "Sangue",
            "simplePronunciation": "blâd",
            "phonetic": "/blʌd/",
            "exampleEn": "The heart pumps blood through the body.",
            "examplePt": "O coração bombeia sangue pelo corpo."
          },
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck",
            "translationPt": "Pescoço",
            "simplePronunciation": "nék",
            "phonetic": "/nek/",
            "exampleEn": "Wrap a warm scarf around your neck.",
            "examplePt": "Enrole um cachecol quentinho no pescoço."
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração",
            "simplePronunciation": "rárt",
            "phonetic": "/hɑːrt/",
            "exampleEn": "Your heart beats fast when you run.",
            "examplePt": "Seu coração bate rápido quando você corre."
          }
        ],
        "options": [
          "Finger",
          "Blood",
          "Neck",
          "Heart"
        ],
        "correctAnswer": "Blood",
        "contextSentence": "The heart pumps blood through the body.",
        "contextSentencePt": "O coração bombeia sangue pelo corpo.",
        "explanation": "Exemplo: \"The heart pumps blood through the body.\" — O coração bombeia sangue pelo corpo.",
        "phoneticHint": "\"blâd\" • /blʌd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bone",
        "visualEmoji": "🦴",
        "visualOptions": [
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove cada dente após as refeições."
          },
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso",
            "simplePronunciation": "bôun",
            "phonetic": "/boʊn/",
            "exampleEn": "Calcium keeps our bones strong.",
            "examplePt": "O cálcio mantém nossos ossos fortes."
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back",
            "translationPt": "Costas",
            "simplePronunciation": "bék",
            "phonetic": "/bæk/",
            "exampleEn": "Keep your back straight when sitting.",
            "examplePt": "Mantenha as costas retas ao sentar."
          },
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee",
            "translationPt": "Joelho",
            "simplePronunciation": "ní",
            "phonetic": "/niː/",
            "exampleEn": "Bend your knees slowly.",
            "examplePt": "Dobre seus joelhos devagar."
          }
        ],
        "options": [
          "Tooth",
          "Bone",
          "Back",
          "Knee"
        ],
        "correctAnswer": "Bone",
        "contextSentence": "Calcium keeps our bones strong.",
        "contextSentencePt": "O cálcio mantém nossos ossos fortes.",
        "explanation": "Exemplo: \"Calcium keeps our bones strong.\" — O cálcio mantém nossos ossos fortes.",
        "phoneticHint": "\"bôun\" • /boʊn/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p14",
    "worldId": 0,
    "phaseNumber": 14,
    "themeId": "body",
    "themeTitle": "Corpo Humano",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "title": "Corpo Humano • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema 3 (Nível 3/4) • 12 articulações, órgãos e detalhes intermediários do corpo",
    "pedagogicalObjective": "Aprender articulações e partes intermediárias: Tongue, Lip, Brain, Chest, Elbow, Wrist, Ankle, Toe, Beard, Nail, Muscle e Tear.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 3 do Corpo Humano praticamos palavras intermediárias: Tongue (\"tâng\" = Língua), Lip (\"líp\" = Lábio), Brain (\"brêin\" = Cérebro), Chest (\"tchést\" = Peito), Elbow (\"él-bou\" = Cotovelo) e Wrist (\"ríst\" = Pulso).",
      "Também aprendemos Ankle (\"én-kol\" = Tornozelo), Toe (\"tôu\" = Dedo do pé), Beard (\"bírd\" = Barba), Nail (\"nêil\" = Unha), Muscle (\"mâ-sol\" = Músculo) e Tear (\"tír\" = Lágrima)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p14-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tongue",
        "visualEmoji": "👅",
        "visualOptions": [
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow",
            "translationPt": "Cotovelo",
            "simplePronunciation": "él-bou",
            "phonetic": "/ˈel.boʊ/",
            "exampleEn": "Do not put your elbows on the table.",
            "examplePt": "Não coloque os cotovelos na mesa."
          },
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest",
            "translationPt": "Peito / Tórax",
            "simplePronunciation": "tchést",
            "phonetic": "/tʃest/",
            "exampleEn": "Take a deep breath into your chest.",
            "examplePt": "Respire fundo enchendo o peito."
          },
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue",
            "translationPt": "Língua",
            "simplePronunciation": "tâng",
            "phonetic": "/tʌŋ/",
            "exampleEn": "We taste food with our tongue.",
            "examplePt": "Sentimos o gosto da comida com a língua."
          },
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard",
            "translationPt": "Barba",
            "simplePronunciation": "bírd",
            "phonetic": "/bɪrd/",
            "exampleEn": "My father has a short beard.",
            "examplePt": "Meu pai tem uma barba curta."
          }
        ],
        "options": [
          "Elbow",
          "Chest",
          "Tongue",
          "Beard"
        ],
        "correctAnswer": "Tongue",
        "contextSentence": "We taste food with our tongue.",
        "contextSentencePt": "Sentimos o gosto da comida com a língua.",
        "explanation": "Exemplo: \"We taste food with our tongue.\" — Sentimos o gosto da comida com a língua.",
        "phoneticHint": "\"tâng\" • /tʌŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Lip",
        "visualEmoji": "👄",
        "visualOptions": [
          {
            "text": "Lip",
            "emoji": "👄",
            "label": "Lip",
            "translationPt": "Lábio",
            "simplePronunciation": "líp",
            "phonetic": "/lɪp/",
            "exampleEn": "Use balm on dry lips.",
            "examplePt": "Use protetor labial nos lábios secos."
          },
          {
            "text": "Tear",
            "emoji": "😢",
            "label": "Tear",
            "translationPt": "Lágrima",
            "simplePronunciation": "tír",
            "phonetic": "/tɪr/",
            "exampleEn": "A tear rolled down her face.",
            "examplePt": "Uma lágrima rolou pelo rosto dela."
          },
          {
            "text": "Nail",
            "emoji": "💅",
            "label": "Nail",
            "translationPt": "Unha",
            "simplePronunciation": "nêil",
            "phonetic": "/neɪl/",
            "exampleEn": "Keep your fingernails clean and short.",
            "examplePt": "Mantenha as unhas limpas e curtas."
          },
          {
            "text": "Toe",
            "emoji": "🦶",
            "label": "Toe",
            "translationPt": "Dedo do pé",
            "simplePronunciation": "tôu",
            "phonetic": "/toʊ/",
            "exampleEn": "Wiggle your toes in the sand.",
            "examplePt": "Mexa os dedos do pé na areia."
          }
        ],
        "options": [
          "Lip",
          "Tear",
          "Nail",
          "Toe"
        ],
        "correctAnswer": "Lip",
        "contextSentence": "Use balm on dry lips.",
        "contextSentencePt": "Use protetor labial nos lábios secos.",
        "explanation": "Exemplo: \"Use balm on dry lips.\" — Use protetor labial nos lábios secos.",
        "phoneticHint": "\"líp\" • /lɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Brain",
        "visualEmoji": "🧠",
        "visualOptions": [
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle",
            "translationPt": "Músculo",
            "simplePronunciation": "mâ-sol",
            "phonetic": "/ˈmʌs.əl/",
            "exampleEn": "Swimming builds strong muscles.",
            "examplePt": "Nadar desenvolve músculos fortes."
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle",
            "translationPt": "Tornozelo",
            "simplePronunciation": "én-kol",
            "phonetic": "/ˈæŋ.kəl/",
            "exampleEn": "Warm up your ankles before running.",
            "examplePt": "Aqueça os tornozelos antes de correr."
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro",
            "simplePronunciation": "brêin",
            "phonetic": "/breɪn/",
            "exampleEn": "Studying languages exercises the brain.",
            "examplePt": "Estudar idiomas exercita o cérebro."
          },
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist",
            "translationPt": "Pulso / Punho",
            "simplePronunciation": "ríst",
            "phonetic": "/rɪst/",
            "exampleEn": "She wears a watch on her wrist.",
            "examplePt": "Ela usa um relógio no pulso."
          }
        ],
        "options": [
          "Muscle",
          "Ankle",
          "Brain",
          "Wrist"
        ],
        "correctAnswer": "Brain",
        "contextSentence": "Studying languages exercises the brain.",
        "contextSentencePt": "Estudar idiomas exercita o cérebro.",
        "explanation": "Exemplo: \"Studying languages exercises the brain.\" — Estudar idiomas exercita o cérebro.",
        "phoneticHint": "\"brêin\" • /breɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chest",
        "visualEmoji": "🧍",
        "visualOptions": [
          {
            "text": "Lip",
            "emoji": "👄",
            "label": "Lip",
            "translationPt": "Lábio",
            "simplePronunciation": "líp",
            "phonetic": "/lɪp/",
            "exampleEn": "Use balm on dry lips.",
            "examplePt": "Use protetor labial nos lábios secos."
          },
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest",
            "translationPt": "Peito / Tórax",
            "simplePronunciation": "tchést",
            "phonetic": "/tʃest/",
            "exampleEn": "Take a deep breath into your chest.",
            "examplePt": "Respire fundo enchendo o peito."
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro",
            "simplePronunciation": "brêin",
            "phonetic": "/breɪn/",
            "exampleEn": "Studying languages exercises the brain.",
            "examplePt": "Estudar idiomas exercita o cérebro."
          },
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue",
            "translationPt": "Língua",
            "simplePronunciation": "tâng",
            "phonetic": "/tʌŋ/",
            "exampleEn": "We taste food with our tongue.",
            "examplePt": "Sentimos o gosto da comida com a língua."
          }
        ],
        "options": [
          "Lip",
          "Chest",
          "Brain",
          "Tongue"
        ],
        "correctAnswer": "Chest",
        "contextSentence": "Take a deep breath into your chest.",
        "contextSentencePt": "Respire fundo enchendo o peito.",
        "explanation": "Exemplo: \"Take a deep breath into your chest.\" — Respire fundo enchendo o peito.",
        "phoneticHint": "\"tchést\" • /tʃest/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Elbow",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Tear",
            "emoji": "😢",
            "label": "Tear",
            "translationPt": "Lágrima",
            "simplePronunciation": "tír",
            "phonetic": "/tɪr/",
            "exampleEn": "A tear rolled down her face.",
            "examplePt": "Uma lágrima rolou pelo rosto dela."
          },
          {
            "text": "Nail",
            "emoji": "💅",
            "label": "Nail",
            "translationPt": "Unha",
            "simplePronunciation": "nêil",
            "phonetic": "/neɪl/",
            "exampleEn": "Keep your fingernails clean and short.",
            "examplePt": "Mantenha as unhas limpas e curtas."
          },
          {
            "text": "Toe",
            "emoji": "🦶",
            "label": "Toe",
            "translationPt": "Dedo do pé",
            "simplePronunciation": "tôu",
            "phonetic": "/toʊ/",
            "exampleEn": "Wiggle your toes in the sand.",
            "examplePt": "Mexa os dedos do pé na areia."
          },
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow",
            "translationPt": "Cotovelo",
            "simplePronunciation": "él-bou",
            "phonetic": "/ˈel.boʊ/",
            "exampleEn": "Do not put your elbows on the table.",
            "examplePt": "Não coloque os cotovelos na mesa."
          }
        ],
        "options": [
          "Tear",
          "Nail",
          "Toe",
          "Elbow"
        ],
        "correctAnswer": "Elbow",
        "contextSentence": "Do not put your elbows on the table.",
        "contextSentencePt": "Não coloque os cotovelos na mesa.",
        "explanation": "Exemplo: \"Do not put your elbows on the table.\" — Não coloque os cotovelos na mesa.",
        "phoneticHint": "\"él-bou\" • /ˈel.boʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Wrist",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist",
            "translationPt": "Pulso / Punho",
            "simplePronunciation": "ríst",
            "phonetic": "/rɪst/",
            "exampleEn": "She wears a watch on her wrist.",
            "examplePt": "Ela usa um relógio no pulso."
          },
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest",
            "translationPt": "Peito / Tórax",
            "simplePronunciation": "tchést",
            "phonetic": "/tʃest/",
            "exampleEn": "Take a deep breath into your chest.",
            "examplePt": "Respire fundo enchendo o peito."
          },
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle",
            "translationPt": "Músculo",
            "simplePronunciation": "mâ-sol",
            "phonetic": "/ˈmʌs.əl/",
            "exampleEn": "Swimming builds strong muscles.",
            "examplePt": "Nadar desenvolve músculos fortes."
          },
          {
            "text": "Lip",
            "emoji": "👄",
            "label": "Lip",
            "translationPt": "Lábio",
            "simplePronunciation": "líp",
            "phonetic": "/lɪp/",
            "exampleEn": "Use balm on dry lips.",
            "examplePt": "Use protetor labial nos lábios secos."
          }
        ],
        "options": [
          "Wrist",
          "Chest",
          "Muscle",
          "Lip"
        ],
        "correctAnswer": "Wrist",
        "contextSentence": "She wears a watch on her wrist.",
        "contextSentencePt": "Ela usa um relógio no pulso.",
        "explanation": "Exemplo: \"She wears a watch on her wrist.\" — Ela usa um relógio no pulso.",
        "phoneticHint": "\"ríst\" • /rɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ankle",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow",
            "translationPt": "Cotovelo",
            "simplePronunciation": "él-bou",
            "phonetic": "/ˈel.boʊ/",
            "exampleEn": "Do not put your elbows on the table.",
            "examplePt": "Não coloque os cotovelos na mesa."
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro",
            "simplePronunciation": "brêin",
            "phonetic": "/breɪn/",
            "exampleEn": "Studying languages exercises the brain.",
            "examplePt": "Estudar idiomas exercita o cérebro."
          },
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard",
            "translationPt": "Barba",
            "simplePronunciation": "bírd",
            "phonetic": "/bɪrd/",
            "exampleEn": "My father has a short beard.",
            "examplePt": "Meu pai tem uma barba curta."
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle",
            "translationPt": "Tornozelo",
            "simplePronunciation": "én-kol",
            "phonetic": "/ˈæŋ.kəl/",
            "exampleEn": "Warm up your ankles before running.",
            "examplePt": "Aqueça os tornozelos antes de correr."
          }
        ],
        "options": [
          "Elbow",
          "Brain",
          "Beard",
          "Ankle"
        ],
        "correctAnswer": "Ankle",
        "contextSentence": "Warm up your ankles before running.",
        "contextSentencePt": "Aqueça os tornozelos antes de correr.",
        "explanation": "Exemplo: \"Warm up your ankles before running.\" — Aqueça os tornozelos antes de correr.",
        "phoneticHint": "\"én-kol\" • /ˈæŋ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toe",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue",
            "translationPt": "Língua",
            "simplePronunciation": "tâng",
            "phonetic": "/tʌŋ/",
            "exampleEn": "We taste food with our tongue.",
            "examplePt": "Sentimos o gosto da comida com a língua."
          },
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist",
            "translationPt": "Pulso / Punho",
            "simplePronunciation": "ríst",
            "phonetic": "/rɪst/",
            "exampleEn": "She wears a watch on her wrist.",
            "examplePt": "Ela usa um relógio no pulso."
          },
          {
            "text": "Toe",
            "emoji": "🦶",
            "label": "Toe",
            "translationPt": "Dedo do pé",
            "simplePronunciation": "tôu",
            "phonetic": "/toʊ/",
            "exampleEn": "Wiggle your toes in the sand.",
            "examplePt": "Mexa os dedos do pé na areia."
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle",
            "translationPt": "Tornozelo",
            "simplePronunciation": "én-kol",
            "phonetic": "/ˈæŋ.kəl/",
            "exampleEn": "Warm up your ankles before running.",
            "examplePt": "Aqueça os tornozelos antes de correr."
          }
        ],
        "options": [
          "Tongue",
          "Wrist",
          "Toe",
          "Ankle"
        ],
        "correctAnswer": "Toe",
        "contextSentence": "Wiggle your toes in the sand.",
        "contextSentencePt": "Mexa os dedos do pé na areia.",
        "explanation": "Exemplo: \"Wiggle your toes in the sand.\" — Mexa os dedos do pé na areia.",
        "phoneticHint": "\"tôu\" • /toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Beard",
        "visualEmoji": "🧔",
        "visualOptions": [
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard",
            "translationPt": "Barba",
            "simplePronunciation": "bírd",
            "phonetic": "/bɪrd/",
            "exampleEn": "My father has a short beard.",
            "examplePt": "Meu pai tem uma barba curta."
          },
          {
            "text": "Lip",
            "emoji": "👄",
            "label": "Lip",
            "translationPt": "Lábio",
            "simplePronunciation": "líp",
            "phonetic": "/lɪp/",
            "exampleEn": "Use balm on dry lips.",
            "examplePt": "Use protetor labial nos lábios secos."
          },
          {
            "text": "Tear",
            "emoji": "😢",
            "label": "Tear",
            "translationPt": "Lágrima",
            "simplePronunciation": "tír",
            "phonetic": "/tɪr/",
            "exampleEn": "A tear rolled down her face.",
            "examplePt": "Uma lágrima rolou pelo rosto dela."
          },
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest",
            "translationPt": "Peito / Tórax",
            "simplePronunciation": "tchést",
            "phonetic": "/tʃest/",
            "exampleEn": "Take a deep breath into your chest.",
            "examplePt": "Respire fundo enchendo o peito."
          }
        ],
        "options": [
          "Beard",
          "Lip",
          "Tear",
          "Chest"
        ],
        "correctAnswer": "Beard",
        "contextSentence": "My father has a short beard.",
        "contextSentencePt": "Meu pai tem uma barba curta.",
        "explanation": "Exemplo: \"My father has a short beard.\" — Meu pai tem uma barba curta.",
        "phoneticHint": "\"bírd\" • /bɪrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Nail",
        "visualEmoji": "💅",
        "visualOptions": [
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle",
            "translationPt": "Músculo",
            "simplePronunciation": "mâ-sol",
            "phonetic": "/ˈmʌs.əl/",
            "exampleEn": "Swimming builds strong muscles.",
            "examplePt": "Nadar desenvolve músculos fortes."
          },
          {
            "text": "Nail",
            "emoji": "💅",
            "label": "Nail",
            "translationPt": "Unha",
            "simplePronunciation": "nêil",
            "phonetic": "/neɪl/",
            "exampleEn": "Keep your fingernails clean and short.",
            "examplePt": "Mantenha as unhas limpas e curtas."
          },
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist",
            "translationPt": "Pulso / Punho",
            "simplePronunciation": "ríst",
            "phonetic": "/rɪst/",
            "exampleEn": "She wears a watch on her wrist.",
            "examplePt": "Ela usa um relógio no pulso."
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle",
            "translationPt": "Tornozelo",
            "simplePronunciation": "én-kol",
            "phonetic": "/ˈæŋ.kəl/",
            "exampleEn": "Warm up your ankles before running.",
            "examplePt": "Aqueça os tornozelos antes de correr."
          }
        ],
        "options": [
          "Muscle",
          "Nail",
          "Wrist",
          "Ankle"
        ],
        "correctAnswer": "Nail",
        "contextSentence": "Keep your fingernails clean and short.",
        "contextSentencePt": "Mantenha as unhas limpas e curtas.",
        "explanation": "Exemplo: \"Keep your fingernails clean and short.\" — Mantenha as unhas limpas e curtas.",
        "phoneticHint": "\"nêil\" • /neɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Muscle",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue",
            "translationPt": "Língua",
            "simplePronunciation": "tâng",
            "phonetic": "/tʌŋ/",
            "exampleEn": "We taste food with our tongue.",
            "examplePt": "Sentimos o gosto da comida com a língua."
          },
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle",
            "translationPt": "Músculo",
            "simplePronunciation": "mâ-sol",
            "phonetic": "/ˈmʌs.əl/",
            "exampleEn": "Swimming builds strong muscles.",
            "examplePt": "Nadar desenvolve músculos fortes."
          },
          {
            "text": "Toe",
            "emoji": "🦶",
            "label": "Toe",
            "translationPt": "Dedo do pé",
            "simplePronunciation": "tôu",
            "phonetic": "/toʊ/",
            "exampleEn": "Wiggle your toes in the sand.",
            "examplePt": "Mexa os dedos do pé na areia."
          },
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow",
            "translationPt": "Cotovelo",
            "simplePronunciation": "él-bou",
            "phonetic": "/ˈel.boʊ/",
            "exampleEn": "Do not put your elbows on the table.",
            "examplePt": "Não coloque os cotovelos na mesa."
          }
        ],
        "options": [
          "Tongue",
          "Muscle",
          "Toe",
          "Elbow"
        ],
        "correctAnswer": "Muscle",
        "contextSentence": "Swimming builds strong muscles.",
        "contextSentencePt": "Nadar desenvolve músculos fortes.",
        "explanation": "Exemplo: \"Swimming builds strong muscles.\" — Nadar desenvolve músculos fortes.",
        "phoneticHint": "\"mâ-sol\" • /ˈmʌs.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tear",
        "visualEmoji": "😢",
        "visualOptions": [
          {
            "text": "Lip",
            "emoji": "👄",
            "label": "Lip",
            "translationPt": "Lábio",
            "simplePronunciation": "líp",
            "phonetic": "/lɪp/",
            "exampleEn": "Use balm on dry lips.",
            "examplePt": "Use protetor labial nos lábios secos."
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro",
            "simplePronunciation": "brêin",
            "phonetic": "/breɪn/",
            "exampleEn": "Studying languages exercises the brain.",
            "examplePt": "Estudar idiomas exercita o cérebro."
          },
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard",
            "translationPt": "Barba",
            "simplePronunciation": "bírd",
            "phonetic": "/bɪrd/",
            "exampleEn": "My father has a short beard.",
            "examplePt": "Meu pai tem uma barba curta."
          },
          {
            "text": "Tear",
            "emoji": "😢",
            "label": "Tear",
            "translationPt": "Lágrima",
            "simplePronunciation": "tír",
            "phonetic": "/tɪr/",
            "exampleEn": "A tear rolled down her face.",
            "examplePt": "Uma lágrima rolou pelo rosto dela."
          }
        ],
        "options": [
          "Lip",
          "Brain",
          "Beard",
          "Tear"
        ],
        "correctAnswer": "Tear",
        "contextSentence": "A tear rolled down her face.",
        "contextSentencePt": "Uma lágrima rolou pelo rosto dela.",
        "explanation": "Exemplo: \"A tear rolled down her face.\" — Uma lágrima rolou pelo rosto dela.",
        "phoneticHint": "\"tír\" • /tɪr/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p15",
    "worldId": 0,
    "phaseNumber": 15,
    "themeId": "body",
    "themeTitle": "Corpo Humano",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "title": "Corpo Humano • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Tema 3 (Nível 4/4) • 12 partes específicas do rosto e anatomia",
    "pedagogicalObjective": "Dominar detalhes específicos do rosto e do corpo: Eyebrow, Eyelash, Chin, Cheek, Forehead, Throat, Lung, Thumb, Heel, Waist, Hip e Rib.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 4 do Corpo Humano estudamos partes específicas: Eyebrow (\"ái-brau\" = Sobrancelha), Eyelash (\"ái-léx\" = Cílio), Chin (\"tchín\" = Queixo), Cheek (\"tchík\" = Bochecha), Forehead (\"fór-réd\" = Testa) e Throat (\"thrôut\" = Garganta).",
      "E completamos com Lung (\"lâng\" = Pulmão), Thumb (\"thâm\" = Polegar), Heel (\"ríl\" = Calcanhar), Waist (\"uêist\" = Cintura), Hip (\"ríp\" = Quadril) e Rib (\"ríb\" = Costela).",
      "Logo após concluir este módulo, você fará o seu 4º Módulo Exclusivo de Pronomes (Indefinidos & Relativos)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p15-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Eyebrow",
        "visualEmoji": "🤨",
        "visualOptions": [
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow",
            "translationPt": "Sobrancelha",
            "simplePronunciation": "ái-brau",
            "phonetic": "/ˈaɪ.braʊ/",
            "exampleEn": "He raised one eyebrow in surprise.",
            "examplePt": "Ele levantou uma sobrancelha surpreso."
          },
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel",
            "translationPt": "Calcanhar",
            "simplePronunciation": "ríl",
            "phonetic": "/hiːl/",
            "exampleEn": "These shoes cushion your heel.",
            "examplePt": "Estes sapatos amortecem o seu calcanhar."
          },
          {
            "text": "Rib",
            "emoji": "🦴",
            "label": "Rib",
            "translationPt": "Costela",
            "simplePronunciation": "ríb",
            "phonetic": "/rɪb/",
            "exampleEn": "The ribs protect the heart and lungs.",
            "examplePt": "As costelas protegem o coração e os pulmões."
          },
          {
            "text": "Hip",
            "emoji": "🧍",
            "label": "Hip",
            "translationPt": "Quadril",
            "simplePronunciation": "ríp",
            "phonetic": "/hɪp/",
            "exampleEn": "Put your hands on your hips.",
            "examplePt": "Coloque as mãos no quadril."
          }
        ],
        "options": [
          "Eyebrow",
          "Heel",
          "Rib",
          "Hip"
        ],
        "correctAnswer": "Eyebrow",
        "contextSentence": "He raised one eyebrow in surprise.",
        "contextSentencePt": "Ele levantou uma sobrancelha surpreso.",
        "explanation": "Exemplo: \"He raised one eyebrow in surprise.\" — Ele levantou uma sobrancelha surpreso.",
        "phoneticHint": "\"ái-brau\" • /ˈaɪ.braʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Eyelash",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung",
            "translationPt": "Pulmão",
            "simplePronunciation": "lâng",
            "phonetic": "/lʌŋ/",
            "exampleEn": "Fresh air fills our lungs.",
            "examplePt": "O ar puro enche nossos pulmões."
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat",
            "translationPt": "Garganta",
            "simplePronunciation": "thrôut",
            "phonetic": "/θroʊt/",
            "exampleEn": "Warm tea soothes a sore throat.",
            "examplePt": "Chá morno alivia a dor de garganta."
          },
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash",
            "translationPt": "Cílio",
            "simplePronunciation": "ái-léx",
            "phonetic": "/ˈaɪ.læʃ/",
            "exampleEn": "Eyelashes protect our eyes from dust.",
            "examplePt": "Os cílios protegem nossos olhos da poeira."
          },
          {
            "text": "Thumb",
            "emoji": "👍",
            "label": "Thumb",
            "translationPt": "Polegar (dedão)",
            "simplePronunciation": "thâm",
            "phonetic": "/θʌm/",
            "exampleEn": "Give a thumbs up if you agree.",
            "examplePt": "Faça sinal de positivo com o polegar se concordar."
          }
        ],
        "options": [
          "Lung",
          "Throat",
          "Eyelash",
          "Thumb"
        ],
        "correctAnswer": "Eyelash",
        "contextSentence": "Eyelashes protect our eyes from dust.",
        "contextSentencePt": "Os cílios protegem nossos olhos da poeira.",
        "explanation": "Exemplo: \"Eyelashes protect our eyes from dust.\" — Os cílios protegem nossos olhos da poeira.",
        "phoneticHint": "\"ái-léx\" • /ˈaɪ.læʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chin",
        "visualEmoji": "🧑",
        "visualOptions": [
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist",
            "translationPt": "Cintura",
            "simplePronunciation": "uêist",
            "phonetic": "/weɪst/",
            "exampleEn": "Fasten the belt around your waist.",
            "examplePt": "Aperte o cinto ao redor da cintura."
          },
          {
            "text": "Chin",
            "emoji": "🧑",
            "label": "Chin",
            "translationPt": "Queixo",
            "simplePronunciation": "tchín",
            "phonetic": "/tʃɪn/",
            "exampleEn": "He rested his chin on his hand.",
            "examplePt": "Ele apoiou o queixo na mão."
          },
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash",
            "translationPt": "Cílio",
            "simplePronunciation": "ái-léx",
            "phonetic": "/ˈaɪ.læʃ/",
            "exampleEn": "Eyelashes protect our eyes from dust.",
            "examplePt": "Os cílios protegem nossos olhos da poeira."
          },
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow",
            "translationPt": "Sobrancelha",
            "simplePronunciation": "ái-brau",
            "phonetic": "/ˈaɪ.braʊ/",
            "exampleEn": "He raised one eyebrow in surprise.",
            "examplePt": "Ele levantou uma sobrancelha surpreso."
          }
        ],
        "options": [
          "Waist",
          "Chin",
          "Eyelash",
          "Eyebrow"
        ],
        "correctAnswer": "Chin",
        "contextSentence": "He rested his chin on his hand.",
        "contextSentencePt": "Ele apoiou o queixo na mão.",
        "explanation": "Exemplo: \"He rested his chin on his hand.\" — Ele apoiou o queixo na mão.",
        "phoneticHint": "\"tchín\" • /tʃɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cheek",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Rib",
            "emoji": "🦴",
            "label": "Rib",
            "translationPt": "Costela",
            "simplePronunciation": "ríb",
            "phonetic": "/rɪb/",
            "exampleEn": "The ribs protect the heart and lungs.",
            "examplePt": "As costelas protegem o coração e os pulmões."
          },
          {
            "text": "Hip",
            "emoji": "🧍",
            "label": "Hip",
            "translationPt": "Quadril",
            "simplePronunciation": "ríp",
            "phonetic": "/hɪp/",
            "exampleEn": "Put your hands on your hips.",
            "examplePt": "Coloque as mãos no quadril."
          },
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel",
            "translationPt": "Calcanhar",
            "simplePronunciation": "ríl",
            "phonetic": "/hiːl/",
            "exampleEn": "These shoes cushion your heel.",
            "examplePt": "Estes sapatos amortecem o seu calcanhar."
          },
          {
            "text": "Cheek",
            "emoji": "😊",
            "label": "Cheek",
            "translationPt": "Bochecha",
            "simplePronunciation": "tchík",
            "phonetic": "/tʃiːk/",
            "exampleEn": "She kissed her baby on the cheek.",
            "examplePt": "Ela beijou o bebê na bochecha."
          }
        ],
        "options": [
          "Rib",
          "Hip",
          "Heel",
          "Cheek"
        ],
        "correctAnswer": "Cheek",
        "contextSentence": "She kissed her baby on the cheek.",
        "contextSentencePt": "Ela beijou o bebê na bochecha.",
        "explanation": "Exemplo: \"She kissed her baby on the cheek.\" — Ela beijou o bebê na bochecha.",
        "phoneticHint": "\"tchík\" • /tʃiːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Forehead",
        "visualEmoji": "🧑",
        "visualOptions": [
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead",
            "translationPt": "Testa",
            "simplePronunciation": "fór-réd",
            "phonetic": "/ˈfɔːr.hed/",
            "exampleEn": "She felt his forehead for a fever.",
            "examplePt": "Ela tocou a testa dele para ver se tinha febre."
          },
          {
            "text": "Cheek",
            "emoji": "😊",
            "label": "Cheek",
            "translationPt": "Bochecha",
            "simplePronunciation": "tchík",
            "phonetic": "/tʃiːk/",
            "exampleEn": "She kissed her baby on the cheek.",
            "examplePt": "Ela beijou o bebê na bochecha."
          },
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist",
            "translationPt": "Cintura",
            "simplePronunciation": "uêist",
            "phonetic": "/weɪst/",
            "exampleEn": "Fasten the belt around your waist.",
            "examplePt": "Aperte o cinto ao redor da cintura."
          },
          {
            "text": "Chin",
            "emoji": "🧑",
            "label": "Chin",
            "translationPt": "Queixo",
            "simplePronunciation": "tchín",
            "phonetic": "/tʃɪn/",
            "exampleEn": "He rested his chin on his hand.",
            "examplePt": "Ele apoiou o queixo na mão."
          }
        ],
        "options": [
          "Forehead",
          "Cheek",
          "Waist",
          "Chin"
        ],
        "correctAnswer": "Forehead",
        "contextSentence": "She felt his forehead for a fever.",
        "contextSentencePt": "Ela tocou a testa dele para ver se tinha febre.",
        "explanation": "Exemplo: \"She felt his forehead for a fever.\" — Ela tocou a testa dele para ver se tinha febre.",
        "phoneticHint": "\"fór-réd\" • /ˈfɔːr.hed/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Throat",
        "visualEmoji": "🍵",
        "visualOptions": [
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung",
            "translationPt": "Pulmão",
            "simplePronunciation": "lâng",
            "phonetic": "/lʌŋ/",
            "exampleEn": "Fresh air fills our lungs.",
            "examplePt": "O ar puro enche nossos pulmões."
          },
          {
            "text": "Chin",
            "emoji": "🧑",
            "label": "Chin",
            "translationPt": "Queixo",
            "simplePronunciation": "tchín",
            "phonetic": "/tʃɪn/",
            "exampleEn": "He rested his chin on his hand.",
            "examplePt": "Ele apoiou o queixo na mão."
          },
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead",
            "translationPt": "Testa",
            "simplePronunciation": "fór-réd",
            "phonetic": "/ˈfɔːr.hed/",
            "exampleEn": "She felt his forehead for a fever.",
            "examplePt": "Ela tocou a testa dele para ver se tinha febre."
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat",
            "translationPt": "Garganta",
            "simplePronunciation": "thrôut",
            "phonetic": "/θroʊt/",
            "exampleEn": "Warm tea soothes a sore throat.",
            "examplePt": "Chá morno alivia a dor de garganta."
          }
        ],
        "options": [
          "Lung",
          "Chin",
          "Forehead",
          "Throat"
        ],
        "correctAnswer": "Throat",
        "contextSentence": "Warm tea soothes a sore throat.",
        "contextSentencePt": "Chá morno alivia a dor de garganta.",
        "explanation": "Exemplo: \"Warm tea soothes a sore throat.\" — Chá morno alivia a dor de garganta.",
        "phoneticHint": "\"thrôut\" • /θroʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lung",
        "visualEmoji": "🫁",
        "visualOptions": [
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow",
            "translationPt": "Sobrancelha",
            "simplePronunciation": "ái-brau",
            "phonetic": "/ˈaɪ.braʊ/",
            "exampleEn": "He raised one eyebrow in surprise.",
            "examplePt": "Ele levantou uma sobrancelha surpreso."
          },
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash",
            "translationPt": "Cílio",
            "simplePronunciation": "ái-léx",
            "phonetic": "/ˈaɪ.læʃ/",
            "exampleEn": "Eyelashes protect our eyes from dust.",
            "examplePt": "Os cílios protegem nossos olhos da poeira."
          },
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung",
            "translationPt": "Pulmão",
            "simplePronunciation": "lâng",
            "phonetic": "/lʌŋ/",
            "exampleEn": "Fresh air fills our lungs.",
            "examplePt": "O ar puro enche nossos pulmões."
          },
          {
            "text": "Hip",
            "emoji": "🧍",
            "label": "Hip",
            "translationPt": "Quadril",
            "simplePronunciation": "ríp",
            "phonetic": "/hɪp/",
            "exampleEn": "Put your hands on your hips.",
            "examplePt": "Coloque as mãos no quadril."
          }
        ],
        "options": [
          "Eyebrow",
          "Eyelash",
          "Lung",
          "Hip"
        ],
        "correctAnswer": "Lung",
        "contextSentence": "Fresh air fills our lungs.",
        "contextSentencePt": "O ar puro enche nossos pulmões.",
        "explanation": "Exemplo: \"Fresh air fills our lungs.\" — O ar puro enche nossos pulmões.",
        "phoneticHint": "\"lâng\" • /lʌŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Thumb",
        "visualEmoji": "👍",
        "visualOptions": [
          {
            "text": "Thumb",
            "emoji": "👍",
            "label": "Thumb",
            "translationPt": "Polegar (dedão)",
            "simplePronunciation": "thâm",
            "phonetic": "/θʌm/",
            "exampleEn": "Give a thumbs up if you agree.",
            "examplePt": "Faça sinal de positivo com o polegar se concordar."
          },
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead",
            "translationPt": "Testa",
            "simplePronunciation": "fór-réd",
            "phonetic": "/ˈfɔːr.hed/",
            "exampleEn": "She felt his forehead for a fever.",
            "examplePt": "Ela tocou a testa dele para ver se tinha febre."
          },
          {
            "text": "Cheek",
            "emoji": "😊",
            "label": "Cheek",
            "translationPt": "Bochecha",
            "simplePronunciation": "tchík",
            "phonetic": "/tʃiːk/",
            "exampleEn": "She kissed her baby on the cheek.",
            "examplePt": "Ela beijou o bebê na bochecha."
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat",
            "translationPt": "Garganta",
            "simplePronunciation": "thrôut",
            "phonetic": "/θroʊt/",
            "exampleEn": "Warm tea soothes a sore throat.",
            "examplePt": "Chá morno alivia a dor de garganta."
          }
        ],
        "options": [
          "Thumb",
          "Forehead",
          "Cheek",
          "Throat"
        ],
        "correctAnswer": "Thumb",
        "contextSentence": "Give a thumbs up if you agree.",
        "contextSentencePt": "Faça sinal de positivo com o polegar se concordar.",
        "explanation": "Exemplo: \"Give a thumbs up if you agree.\" — Faça sinal de positivo com o polegar se concordar.",
        "phoneticHint": "\"thâm\" • /θʌm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Heel",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist",
            "translationPt": "Cintura",
            "simplePronunciation": "uêist",
            "phonetic": "/weɪst/",
            "exampleEn": "Fasten the belt around your waist.",
            "examplePt": "Aperte o cinto ao redor da cintura."
          },
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel",
            "translationPt": "Calcanhar",
            "simplePronunciation": "ríl",
            "phonetic": "/hiːl/",
            "exampleEn": "These shoes cushion your heel.",
            "examplePt": "Estes sapatos amortecem o seu calcanhar."
          },
          {
            "text": "Thumb",
            "emoji": "👍",
            "label": "Thumb",
            "translationPt": "Polegar (dedão)",
            "simplePronunciation": "thâm",
            "phonetic": "/θʌm/",
            "exampleEn": "Give a thumbs up if you agree.",
            "examplePt": "Faça sinal de positivo com o polegar se concordar."
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat",
            "translationPt": "Garganta",
            "simplePronunciation": "thrôut",
            "phonetic": "/θroʊt/",
            "exampleEn": "Warm tea soothes a sore throat.",
            "examplePt": "Chá morno alivia a dor de garganta."
          }
        ],
        "options": [
          "Waist",
          "Heel",
          "Thumb",
          "Throat"
        ],
        "correctAnswer": "Heel",
        "contextSentence": "These shoes cushion your heel.",
        "contextSentencePt": "Estes sapatos amortecem o seu calcanhar.",
        "explanation": "Exemplo: \"These shoes cushion your heel.\" — Estes sapatos amortecem o seu calcanhar.",
        "phoneticHint": "\"ríl\" • /hiːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Waist",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow",
            "translationPt": "Sobrancelha",
            "simplePronunciation": "ái-brau",
            "phonetic": "/ˈaɪ.braʊ/",
            "exampleEn": "He raised one eyebrow in surprise.",
            "examplePt": "Ele levantou uma sobrancelha surpreso."
          },
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist",
            "translationPt": "Cintura",
            "simplePronunciation": "uêist",
            "phonetic": "/weɪst/",
            "exampleEn": "Fasten the belt around your waist.",
            "examplePt": "Aperte o cinto ao redor da cintura."
          },
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash",
            "translationPt": "Cílio",
            "simplePronunciation": "ái-léx",
            "phonetic": "/ˈaɪ.læʃ/",
            "exampleEn": "Eyelashes protect our eyes from dust.",
            "examplePt": "Os cílios protegem nossos olhos da poeira."
          },
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung",
            "translationPt": "Pulmão",
            "simplePronunciation": "lâng",
            "phonetic": "/lʌŋ/",
            "exampleEn": "Fresh air fills our lungs.",
            "examplePt": "O ar puro enche nossos pulmões."
          }
        ],
        "options": [
          "Eyebrow",
          "Waist",
          "Eyelash",
          "Lung"
        ],
        "correctAnswer": "Waist",
        "contextSentence": "Fasten the belt around your waist.",
        "contextSentencePt": "Aperte o cinto ao redor da cintura.",
        "explanation": "Exemplo: \"Fasten the belt around your waist.\" — Aperte o cinto ao redor da cintura.",
        "phoneticHint": "\"uêist\" • /weɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hip",
        "visualEmoji": "🧍",
        "visualOptions": [
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead",
            "translationPt": "Testa",
            "simplePronunciation": "fór-réd",
            "phonetic": "/ˈfɔːr.hed/",
            "exampleEn": "She felt his forehead for a fever.",
            "examplePt": "Ela tocou a testa dele para ver se tinha febre."
          },
          {
            "text": "Chin",
            "emoji": "🧑",
            "label": "Chin",
            "translationPt": "Queixo",
            "simplePronunciation": "tchín",
            "phonetic": "/tʃɪn/",
            "exampleEn": "He rested his chin on his hand.",
            "examplePt": "Ele apoiou o queixo na mão."
          },
          {
            "text": "Cheek",
            "emoji": "😊",
            "label": "Cheek",
            "translationPt": "Bochecha",
            "simplePronunciation": "tchík",
            "phonetic": "/tʃiːk/",
            "exampleEn": "She kissed her baby on the cheek.",
            "examplePt": "Ela beijou o bebê na bochecha."
          },
          {
            "text": "Hip",
            "emoji": "🧍",
            "label": "Hip",
            "translationPt": "Quadril",
            "simplePronunciation": "ríp",
            "phonetic": "/hɪp/",
            "exampleEn": "Put your hands on your hips.",
            "examplePt": "Coloque as mãos no quadril."
          }
        ],
        "options": [
          "Forehead",
          "Chin",
          "Cheek",
          "Hip"
        ],
        "correctAnswer": "Hip",
        "contextSentence": "Put your hands on your hips.",
        "contextSentencePt": "Coloque as mãos no quadril.",
        "explanation": "Exemplo: \"Put your hands on your hips.\" — Coloque as mãos no quadril.",
        "phoneticHint": "\"ríp\" • /hɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Rib",
        "visualEmoji": "🦴",
        "visualOptions": [
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat",
            "translationPt": "Garganta",
            "simplePronunciation": "thrôut",
            "phonetic": "/θroʊt/",
            "exampleEn": "Warm tea soothes a sore throat.",
            "examplePt": "Chá morno alivia a dor de garganta."
          },
          {
            "text": "Thumb",
            "emoji": "👍",
            "label": "Thumb",
            "translationPt": "Polegar (dedão)",
            "simplePronunciation": "thâm",
            "phonetic": "/θʌm/",
            "exampleEn": "Give a thumbs up if you agree.",
            "examplePt": "Faça sinal de positivo com o polegar se concordar."
          },
          {
            "text": "Rib",
            "emoji": "🦴",
            "label": "Rib",
            "translationPt": "Costela",
            "simplePronunciation": "ríb",
            "phonetic": "/rɪb/",
            "exampleEn": "The ribs protect the heart and lungs.",
            "examplePt": "As costelas protegem o coração e os pulmões."
          },
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel",
            "translationPt": "Calcanhar",
            "simplePronunciation": "ríl",
            "phonetic": "/hiːl/",
            "exampleEn": "These shoes cushion your heel.",
            "examplePt": "Estes sapatos amortecem o seu calcanhar."
          }
        ],
        "options": [
          "Throat",
          "Thumb",
          "Rib",
          "Heel"
        ],
        "correctAnswer": "Rib",
        "contextSentence": "The ribs protect the heart and lungs.",
        "contextSentencePt": "As costelas protegem o coração e os pulmões.",
        "explanation": "Exemplo: \"The ribs protect the heart and lungs.\" — As costelas protegem o coração e os pulmões.",
        "phoneticHint": "\"ríb\" • /rɪb/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p16",
    "worldId": 0,
    "phaseNumber": 16,
    "title": "Lição de Pronomes IV • Indefinidos & Relativos",
    "subtitle": "Módulo de Pronomes 4/6 (Após 12 de Vocabulário) • Pares Associativos + Voz da Professora",
    "pedagogicalObjective": "Dominar os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing) e os Pronomes Relativos (Who, Which, That, Whose, Where).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à 4ª Lição Exclusiva de Pronomes (após 12 módulos de vocabulário)!",
      "7º Passo: Aprendemos os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing, Anyone, Anything).",
      "8º Passo: Aprendemos os Pronomes Relativos (Who, Which, That, Whose, Where) — as pontezinhas que juntam duas ideias!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p16-pron-1",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Alguém, Algo, Todo Mundo e Tudo)",
        "conceptHeader": "Usamos quando falamos de alguém ou de alguma coisa sem dizer o nome exato! \"Someone\" é Alguém (uma pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Everything\" é Tudo!",
        "teacherAudioPt": "/audio/teacher/pronoun_7.wav",
        "prompt": "🤝 Conecte cada Pronome Indefinido ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p16-b1-ind1",
            "en": "Someone (\"sâm-uân\")",
            "emoji": "🧑",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa na porta)",
            "tipPt": "Isso! \"Someone is at the door\" = \"Alguém está na porta\"!"
          },
          {
            "id": "w0-p16-b1-ind2",
            "en": "Something (\"sâm-thing\")",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa (um objeto ou surpresa)",
            "tipPt": "Muito bem! \"I have something for you\" = \"Tenho algo para você\"!"
          },
          {
            "id": "w0-p16-b1-ind3",
            "en": "Everyone (\"é-vri-uân\")",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone is happy\" = \"Todo mundo está feliz\"!"
          },
          {
            "id": "w0-p16-b1-ind4",
            "en": "Everything (\"é-vri-thing\")",
            "emoji": "🌟",
            "phonetic": "/ˈev.ri.θɪŋ/",
            "pt": "Tudo / Todas as coisas",
            "tipPt": "Lindo! \"Everything is clean\" = \"Tudo está limpo\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Someone (Alguém), Something (Algo), Everyone (Todo mundo), Everything (Tudo).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p16-pron-2",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (As Pontezinhas que Ligam a Frase)",
        "conceptHeader": "Eles são como pequenas pontes que juntam duas ideias! Se a ponte fala de uma PESSOA, usamos \"Who\" (que/quem). Se a ponte fala de uma COISA ou animal, usamos \"Which\" (que). E \"That\" serve para os dois!",
        "teacherAudioPt": "/audio/teacher/pronoun_8.wav",
        "prompt": "🤝 Conecte cada Pronome Relativo (pontezinha) à sua função correta:",
        "pairs": [
          {
            "id": "w0-p16-b2-rel1",
            "en": "Who (\"rú\" - relativo)",
            "emoji": "🧑‍🏫",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte que fala de PESSOAS)",
            "tipPt": "Isso! \"The girl who sings\" = \"A menina que canta\"!"
          },
          {
            "id": "w0-p16-b2-rel2",
            "en": "Which (\"uítch\" - relativo)",
            "emoji": "📦",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte que fala de COISAS)",
            "tipPt": "Perfeito! \"The book which I read\" = \"O livro que eu li\"!"
          },
          {
            "id": "w0-p16-b2-rel3",
            "en": "That (\"dét\" - relativo)",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p16-b2-rel4",
            "en": "Where (\"uér\" - relativo)",
            "emoji": "🏠",
            "phonetic": "/wer/",
            "pt": "Onde (ponte que fala de LUGAR)",
            "tipPt": "Lindo! \"The house where I live\" = \"A casa onde eu moro\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Who (ponte para pessoas), Which (ponte para coisas/animais), That (ponte curinga), Whose (ponte de posse: cujo).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p17",
    "worldId": 0,
    "phaseNumber": 17,
    "themeId": "transport",
    "themeTitle": "Transporte",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "title": "Transporte • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema 4 (Nível 1/4) • Os 12 veículos e termos de deslocamento mais usados",
    "pedagogicalObjective": "Conhecer os meios de transporte essenciais: Car, Bus, Street, Bicycle, Train, Airplane, Taxi, Truck, Motorcycle, Boat, Ticket e Station.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Iniciamos o Tema 4 (Transporte • Módulo 1: Essenciais): Car (\"cár\" = Carro), Bus (\"bâs\" = Ônibus), Street (\"strít\" = Rua), Bicycle (\"bái-si-kol\" = Bicicleta), Train (\"trêin\" = Trem) e Airplane (\"ér-plêin\" = Avião).",
      "Também aprendemos Taxi (\"ték-si\" = Táxi), Truck (\"trâk\" = Caminhão), Motorcycle (\"môu-tor-sái-kol\" = Moto), Boat (\"bôut\" = Barco), Ticket (\"tí-ket\" = Passagem/Bilhete) e Station (\"stêi-xon\" = Estação)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p17-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station",
            "translationPt": "Estação",
            "simplePronunciation": "stêi-xon",
            "phonetic": "/ˈsteɪ.ʃən/",
            "exampleEn": "Meet me at the train station.",
            "examplePt": "Encontre-me na estação de trem."
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro",
            "simplePronunciation": "cár",
            "phonetic": "/kɑːr/",
            "exampleEn": "We travel by car on weekends.",
            "examplePt": "Nós viajamos de carro nos fins de semana."
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta",
            "simplePronunciation": "bái-si-kol",
            "phonetic": "/ˈbaɪ.sɪ.kəl/",
            "exampleEn": "She rides her bicycle in the park.",
            "examplePt": "Ela anda de bicicleta no parque."
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco",
            "simplePronunciation": "bôut",
            "phonetic": "/boʊt/",
            "exampleEn": "A small boat crosses the lake.",
            "examplePt": "Um pequeno barco atravessa o lago."
          }
        ],
        "options": [
          "Station",
          "Car",
          "Bicycle",
          "Boat"
        ],
        "correctAnswer": "Car",
        "contextSentence": "We travel by car on weekends.",
        "contextSentencePt": "Nós viajamos de carro nos fins de semana.",
        "explanation": "Exemplo: \"We travel by car on weekends.\" — Nós viajamos de carro nos fins de semana.",
        "phoneticHint": "\"cár\" • /kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bus",
        "visualEmoji": "🚌",
        "visualOptions": [
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi",
            "simplePronunciation": "ték-si",
            "phonetic": "/ˈtæk.si/",
            "exampleEn": "Let us take a taxi to the hotel.",
            "examplePt": "Vamos pegar um táxi até o hotel."
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight o'clock.",
            "examplePt": "O trem chega às oito horas."
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão",
            "simplePronunciation": "trâk",
            "phonetic": "/trʌk/",
            "exampleEn": "The truck carries heavy boxes.",
            "examplePt": "O caminhão transporta caixas pesadas."
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus",
            "simplePronunciation": "bâs",
            "phonetic": "/bʌs/",
            "exampleEn": "Take the bus to school.",
            "examplePt": "Pegue o ônibus para a escola."
          }
        ],
        "options": [
          "Taxi",
          "Train",
          "Truck",
          "Bus"
        ],
        "correctAnswer": "Bus",
        "contextSentence": "Take the bus to school.",
        "contextSentencePt": "Pegue o ônibus para a escola.",
        "explanation": "Exemplo: \"Take the bus to school.\" — Pegue o ônibus para a escola.",
        "phoneticHint": "\"bâs\" • /bʌs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Street",
        "visualEmoji": "🛣️",
        "visualOptions": [
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua",
            "simplePronunciation": "strít",
            "phonetic": "/striːt/",
            "exampleEn": "Look both ways before crossing the street.",
            "examplePt": "Olhe para os dois lados antes de atravessar a rua."
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião",
            "simplePronunciation": "ér-plêin",
            "phonetic": "/ˈer.pleɪn/",
            "exampleEn": "The airplane flies above the clouds.",
            "examplePt": "O avião voa acima das nuvens."
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto",
            "simplePronunciation": "môu-tor-sái-kol",
            "phonetic": "/ˈmoʊ.tərˌsaɪ.kəl/",
            "exampleEn": "Wear a helmet on a motorcycle.",
            "examplePt": "Use capacete na moto."
          },
          {
            "text": "Ticket",
            "emoji": "🎫",
            "label": "Ticket",
            "translationPt": "Passagem / Bilhete",
            "simplePronunciation": "tí-ket",
            "phonetic": "/ˈtɪk.ɪt/",
            "exampleEn": "Buy your bus ticket here.",
            "examplePt": "Compre sua passagem de ônibus aqui."
          }
        ],
        "options": [
          "Street",
          "Airplane",
          "Motorcycle",
          "Ticket"
        ],
        "correctAnswer": "Street",
        "contextSentence": "Look both ways before crossing the street.",
        "contextSentencePt": "Olhe para os dois lados antes de atravessar a rua.",
        "explanation": "Exemplo: \"Look both ways before crossing the street.\" — Olhe para os dois lados antes de atravessar a rua.",
        "phoneticHint": "\"strít\" • /striːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bicycle",
        "visualEmoji": "🚲",
        "visualOptions": [
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco",
            "simplePronunciation": "bôut",
            "phonetic": "/boʊt/",
            "exampleEn": "A small boat crosses the lake.",
            "examplePt": "Um pequeno barco atravessa o lago."
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro",
            "simplePronunciation": "cár",
            "phonetic": "/kɑːr/",
            "exampleEn": "We travel by car on weekends.",
            "examplePt": "Nós viajamos de carro nos fins de semana."
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station",
            "translationPt": "Estação",
            "simplePronunciation": "stêi-xon",
            "phonetic": "/ˈsteɪ.ʃən/",
            "exampleEn": "Meet me at the train station.",
            "examplePt": "Encontre-me na estação de trem."
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta",
            "simplePronunciation": "bái-si-kol",
            "phonetic": "/ˈbaɪ.sɪ.kəl/",
            "exampleEn": "She rides her bicycle in the park.",
            "examplePt": "Ela anda de bicicleta no parque."
          }
        ],
        "options": [
          "Boat",
          "Car",
          "Station",
          "Bicycle"
        ],
        "correctAnswer": "Bicycle",
        "contextSentence": "She rides her bicycle in the park.",
        "contextSentencePt": "Ela anda de bicicleta no parque.",
        "explanation": "Exemplo: \"She rides her bicycle in the park.\" — Ela anda de bicicleta no parque.",
        "phoneticHint": "\"bái-si-kol\" • /ˈbaɪ.sɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Train",
        "visualEmoji": "🚆",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro",
            "simplePronunciation": "cár",
            "phonetic": "/kɑːr/",
            "exampleEn": "We travel by car on weekends.",
            "examplePt": "Nós viajamos de carro nos fins de semana."
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua",
            "simplePronunciation": "strít",
            "phonetic": "/striːt/",
            "exampleEn": "Look both ways before crossing the street.",
            "examplePt": "Olhe para os dois lados antes de atravessar a rua."
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight o'clock.",
            "examplePt": "O trem chega às oito horas."
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus",
            "simplePronunciation": "bâs",
            "phonetic": "/bʌs/",
            "exampleEn": "Take the bus to school.",
            "examplePt": "Pegue o ônibus para a escola."
          }
        ],
        "options": [
          "Car",
          "Street",
          "Train",
          "Bus"
        ],
        "correctAnswer": "Train",
        "contextSentence": "The train arrives at eight o'clock.",
        "contextSentencePt": "O trem chega às oito horas.",
        "explanation": "Exemplo: \"The train arrives at eight o'clock.\" — O trem chega às oito horas.",
        "phoneticHint": "\"trêin\" • /treɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Airplane",
        "visualEmoji": "✈️",
        "visualOptions": [
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião",
            "simplePronunciation": "ér-plêin",
            "phonetic": "/ˈer.pleɪn/",
            "exampleEn": "The airplane flies above the clouds.",
            "examplePt": "O avião voa acima das nuvens."
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight o'clock.",
            "examplePt": "O trem chega às oito horas."
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto",
            "simplePronunciation": "môu-tor-sái-kol",
            "phonetic": "/ˈmoʊ.tərˌsaɪ.kəl/",
            "exampleEn": "Wear a helmet on a motorcycle.",
            "examplePt": "Use capacete na moto."
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua",
            "simplePronunciation": "strít",
            "phonetic": "/striːt/",
            "exampleEn": "Look both ways before crossing the street.",
            "examplePt": "Olhe para os dois lados antes de atravessar a rua."
          }
        ],
        "options": [
          "Airplane",
          "Train",
          "Motorcycle",
          "Street"
        ],
        "correctAnswer": "Airplane",
        "contextSentence": "The airplane flies above the clouds.",
        "contextSentencePt": "O avião voa acima das nuvens.",
        "explanation": "Exemplo: \"The airplane flies above the clouds.\" — O avião voa acima das nuvens.",
        "phoneticHint": "\"ér-plêin\" • /ˈer.pleɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Taxi",
        "visualEmoji": "🚕",
        "visualOptions": [
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco",
            "simplePronunciation": "bôut",
            "phonetic": "/boʊt/",
            "exampleEn": "A small boat crosses the lake.",
            "examplePt": "Um pequeno barco atravessa o lago."
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi",
            "simplePronunciation": "ték-si",
            "phonetic": "/ˈtæk.si/",
            "exampleEn": "Let us take a taxi to the hotel.",
            "examplePt": "Vamos pegar um táxi até o hotel."
          },
          {
            "text": "Ticket",
            "emoji": "🎫",
            "label": "Ticket",
            "translationPt": "Passagem / Bilhete",
            "simplePronunciation": "tí-ket",
            "phonetic": "/ˈtɪk.ɪt/",
            "exampleEn": "Buy your bus ticket here.",
            "examplePt": "Compre sua passagem de ônibus aqui."
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta",
            "simplePronunciation": "bái-si-kol",
            "phonetic": "/ˈbaɪ.sɪ.kəl/",
            "exampleEn": "She rides her bicycle in the park.",
            "examplePt": "Ela anda de bicicleta no parque."
          }
        ],
        "options": [
          "Boat",
          "Taxi",
          "Ticket",
          "Bicycle"
        ],
        "correctAnswer": "Taxi",
        "contextSentence": "Let us take a taxi to the hotel.",
        "contextSentencePt": "Vamos pegar um táxi até o hotel.",
        "explanation": "Exemplo: \"Let us take a taxi to the hotel.\" — Vamos pegar um táxi até o hotel.",
        "phoneticHint": "\"ték-si\" • /ˈtæk.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Truck",
        "visualEmoji": "🚚",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro",
            "simplePronunciation": "cár",
            "phonetic": "/kɑːr/",
            "exampleEn": "We travel by car on weekends.",
            "examplePt": "Nós viajamos de carro nos fins de semana."
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão",
            "simplePronunciation": "trâk",
            "phonetic": "/trʌk/",
            "exampleEn": "The truck carries heavy boxes.",
            "examplePt": "O caminhão transporta caixas pesadas."
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station",
            "translationPt": "Estação",
            "simplePronunciation": "stêi-xon",
            "phonetic": "/ˈsteɪ.ʃən/",
            "exampleEn": "Meet me at the train station.",
            "examplePt": "Encontre-me na estação de trem."
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus",
            "simplePronunciation": "bâs",
            "phonetic": "/bʌs/",
            "exampleEn": "Take the bus to school.",
            "examplePt": "Pegue o ônibus para a escola."
          }
        ],
        "options": [
          "Car",
          "Truck",
          "Station",
          "Bus"
        ],
        "correctAnswer": "Truck",
        "contextSentence": "The truck carries heavy boxes.",
        "contextSentencePt": "O caminhão transporta caixas pesadas.",
        "explanation": "Exemplo: \"The truck carries heavy boxes.\" — O caminhão transporta caixas pesadas.",
        "phoneticHint": "\"trâk\" • /trʌk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Motorcycle",
        "visualEmoji": "🏍️",
        "visualOptions": [
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião",
            "simplePronunciation": "ér-plêin",
            "phonetic": "/ˈer.pleɪn/",
            "exampleEn": "The airplane flies above the clouds.",
            "examplePt": "O avião voa acima das nuvens."
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight o'clock.",
            "examplePt": "O trem chega às oito horas."
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua",
            "simplePronunciation": "strít",
            "phonetic": "/striːt/",
            "exampleEn": "Look both ways before crossing the street.",
            "examplePt": "Olhe para os dois lados antes de atravessar a rua."
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto",
            "simplePronunciation": "môu-tor-sái-kol",
            "phonetic": "/ˈmoʊ.tərˌsaɪ.kəl/",
            "exampleEn": "Wear a helmet on a motorcycle.",
            "examplePt": "Use capacete na moto."
          }
        ],
        "options": [
          "Airplane",
          "Train",
          "Street",
          "Motorcycle"
        ],
        "correctAnswer": "Motorcycle",
        "contextSentence": "Wear a helmet on a motorcycle.",
        "contextSentencePt": "Use capacete na moto.",
        "explanation": "Exemplo: \"Wear a helmet on a motorcycle.\" — Use capacete na moto.",
        "phoneticHint": "\"môu-tor-sái-kol\" • /ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Boat",
        "visualEmoji": "⛵",
        "visualOptions": [
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto",
            "simplePronunciation": "môu-tor-sái-kol",
            "phonetic": "/ˈmoʊ.tərˌsaɪ.kəl/",
            "exampleEn": "Wear a helmet on a motorcycle.",
            "examplePt": "Use capacete na moto."
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão",
            "simplePronunciation": "trâk",
            "phonetic": "/trʌk/",
            "exampleEn": "The truck carries heavy boxes.",
            "examplePt": "O caminhão transporta caixas pesadas."
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco",
            "simplePronunciation": "bôut",
            "phonetic": "/boʊt/",
            "exampleEn": "A small boat crosses the lake.",
            "examplePt": "Um pequeno barco atravessa o lago."
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi",
            "simplePronunciation": "ték-si",
            "phonetic": "/ˈtæk.si/",
            "exampleEn": "Let us take a taxi to the hotel.",
            "examplePt": "Vamos pegar um táxi até o hotel."
          }
        ],
        "options": [
          "Motorcycle",
          "Truck",
          "Boat",
          "Taxi"
        ],
        "correctAnswer": "Boat",
        "contextSentence": "A small boat crosses the lake.",
        "contextSentencePt": "Um pequeno barco atravessa o lago.",
        "explanation": "Exemplo: \"A small boat crosses the lake.\" — Um pequeno barco atravessa o lago.",
        "phoneticHint": "\"bôut\" • /boʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ticket",
        "visualEmoji": "🎫",
        "visualOptions": [
          {
            "text": "Ticket",
            "emoji": "🎫",
            "label": "Ticket",
            "translationPt": "Passagem / Bilhete",
            "simplePronunciation": "tí-ket",
            "phonetic": "/ˈtɪk.ɪt/",
            "exampleEn": "Buy your bus ticket here.",
            "examplePt": "Compre sua passagem de ônibus aqui."
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta",
            "simplePronunciation": "bái-si-kol",
            "phonetic": "/ˈbaɪ.sɪ.kəl/",
            "exampleEn": "She rides her bicycle in the park.",
            "examplePt": "Ela anda de bicicleta no parque."
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus",
            "simplePronunciation": "bâs",
            "phonetic": "/bʌs/",
            "exampleEn": "Take the bus to school.",
            "examplePt": "Pegue o ônibus para a escola."
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro",
            "simplePronunciation": "cár",
            "phonetic": "/kɑːr/",
            "exampleEn": "We travel by car on weekends.",
            "examplePt": "Nós viajamos de carro nos fins de semana."
          }
        ],
        "options": [
          "Ticket",
          "Bicycle",
          "Bus",
          "Car"
        ],
        "correctAnswer": "Ticket",
        "contextSentence": "Buy your bus ticket here.",
        "contextSentencePt": "Compre sua passagem de ônibus aqui.",
        "explanation": "Exemplo: \"Buy your bus ticket here.\" — Compre sua passagem de ônibus aqui.",
        "phoneticHint": "\"tí-ket\" • /ˈtɪk.ɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Station",
        "visualEmoji": "🚉",
        "visualOptions": [
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua",
            "simplePronunciation": "strít",
            "phonetic": "/striːt/",
            "exampleEn": "Look both ways before crossing the street.",
            "examplePt": "Olhe para os dois lados antes de atravessar a rua."
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião",
            "simplePronunciation": "ér-plêin",
            "phonetic": "/ˈer.pleɪn/",
            "exampleEn": "The airplane flies above the clouds.",
            "examplePt": "O avião voa acima das nuvens."
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station",
            "translationPt": "Estação",
            "simplePronunciation": "stêi-xon",
            "phonetic": "/ˈsteɪ.ʃən/",
            "exampleEn": "Meet me at the train station.",
            "examplePt": "Encontre-me na estação de trem."
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight o'clock.",
            "examplePt": "O trem chega às oito horas."
          }
        ],
        "options": [
          "Street",
          "Airplane",
          "Station",
          "Train"
        ],
        "correctAnswer": "Station",
        "contextSentence": "Meet me at the train station.",
        "contextSentencePt": "Encontre-me na estação de trem.",
        "explanation": "Exemplo: \"Meet me at the train station.\" — Encontre-me na estação de trem.",
        "phoneticHint": "\"stêi-xon\" • /ˈsteɪ.ʃən/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p18",
    "worldId": 0,
    "phaseNumber": 18,
    "themeId": "transport",
    "themeTitle": "Transporte",
    "frequencyLevel": "Módulo 2 • Comuns",
    "title": "Transporte • Módulo 2: Palavras Comuns",
    "subtitle": "Tema 4 (Nível 2/4) • 12 termos comuns de viagem, trânsito e direção",
    "pedagogicalObjective": "Aprender palavras comuns de transporte: Subway, Ship, Road, Bridge, Airport, Driver, Passenger, Wheel, Tire, Map, Stop e Traffic.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 2 de Transporte praticamos palavras comuns: Subway (\"sâb-uêi\" = Metrô), Ship (\"xíp\" = Navio), Road (\"rôud\" = Estrada), Bridge (\"brídj\" = Ponte), Airport (\"ér-pórt\" = Aeroporto) e Driver (\"drái-ver\" = Motorista).",
      "Também vemos Passenger (\"pé-sen-djer\" = Passageiro), Wheel (\"uíl\" = Roda/Volante), Tire (\"tái-er\" = Pneu), Map (\"mép\" = Mapa), Stop (\"stóp\" = Parada/Ponto) e Traffic (\"tré-fik\" = Trânsito)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p18-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Subway",
        "visualEmoji": "🚇",
        "visualOptions": [
          {
            "text": "Stop",
            "emoji": "🚏",
            "label": "Stop",
            "translationPt": "Ponto de ônibus / Parada",
            "simplePronunciation": "stóp",
            "phonetic": "/stɑːp/",
            "exampleEn": "Wait for me at the bus stop.",
            "examplePt": "Espere por mim no ponto de ônibus."
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte",
            "simplePronunciation": "brídj",
            "phonetic": "/brɪdʒ/",
            "exampleEn": "Drive across the river bridge.",
            "examplePt": "Dirija sobre a ponte do rio."
          },
          {
            "text": "Passenger",
            "emoji": "🧳",
            "label": "Passenger",
            "translationPt": "Passageiro",
            "simplePronunciation": "pé-sen-djer",
            "phonetic": "/ˈpæs.ən.dʒər/",
            "exampleEn": "All passengers must wear seatbelts.",
            "examplePt": "Todos os passageiros devem usar cinto."
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast and avoids traffic.",
            "examplePt": "O metrô é rápido e evita o trânsito."
          }
        ],
        "options": [
          "Stop",
          "Bridge",
          "Passenger",
          "Subway"
        ],
        "correctAnswer": "Subway",
        "contextSentence": "The subway is fast and avoids traffic.",
        "contextSentencePt": "O metrô é rápido e evita o trânsito.",
        "explanation": "Exemplo: \"The subway is fast and avoids traffic.\" — O metrô é rápido e evita o trânsito.",
        "phoneticHint": "\"sâb-uêi\" • /ˈsʌb.weɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ship",
        "visualEmoji": "🚢",
        "visualOptions": [
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio",
            "simplePronunciation": "xíp",
            "phonetic": "/ʃɪp/",
            "exampleEn": "A large ship sails across the ocean.",
            "examplePt": "Um grande navio navega pelo oceano."
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu",
            "simplePronunciation": "tái-er",
            "phonetic": "/ˈtaɪ.ər/",
            "exampleEn": "Check the air in the car tire.",
            "examplePt": "Verifique o ar do pneu do carro."
          },
          {
            "text": "Traffic",
            "emoji": "🚦",
            "label": "Traffic",
            "translationPt": "Trânsito / Tráfego",
            "simplePronunciation": "tré-fik",
            "phonetic": "/ˈtræf.ɪk/",
            "exampleEn": "There is heavy traffic this morning.",
            "examplePt": "Há trânsito intenso nesta manhã."
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa",
            "simplePronunciation": "mép",
            "phonetic": "/mæp/",
            "exampleEn": "Check the city map on your phone.",
            "examplePt": "Olhe o mapa da cidade no celular."
          }
        ],
        "options": [
          "Ship",
          "Tire",
          "Traffic",
          "Map"
        ],
        "correctAnswer": "Ship",
        "contextSentence": "A large ship sails across the ocean.",
        "contextSentencePt": "Um grande navio navega pelo oceano.",
        "explanation": "Exemplo: \"A large ship sails across the ocean.\" — Um grande navio navega pelo oceano.",
        "phoneticHint": "\"xíp\" • /ʃɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Road",
        "visualEmoji": "🛣️",
        "visualOptions": [
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver",
            "translationPt": "Motorista",
            "simplePronunciation": "drái-ver",
            "phonetic": "/ˈdraɪ.vər/",
            "exampleEn": "The bus driver is very polite.",
            "examplePt": "O motorista do ônibus é muito educado."
          },
          {
            "text": "Wheel",
            "emoji": "🛞",
            "label": "Wheel",
            "translationPt": "Roda / Volante",
            "simplePronunciation": "uíl",
            "phonetic": "/wiːl/",
            "exampleEn": "Keep both hands on the wheel.",
            "examplePt": "Mantenha as duas mãos no volante."
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto",
            "simplePronunciation": "ér-pórt",
            "phonetic": "/ˈer.pɔːrt/",
            "exampleEn": "We arrived early at the airport.",
            "examplePt": "Chegamos cedo ao aeroporto."
          },
          {
            "text": "Road",
            "emoji": "🛣️",
            "label": "Road",
            "translationPt": "Estrada / Rodovia",
            "simplePronunciation": "rôud",
            "phonetic": "/roʊd/",
            "exampleEn": "Follow this road to the beach.",
            "examplePt": "Siga esta estrada até a praia."
          }
        ],
        "options": [
          "Driver",
          "Wheel",
          "Airport",
          "Road"
        ],
        "correctAnswer": "Road",
        "contextSentence": "Follow this road to the beach.",
        "contextSentencePt": "Siga esta estrada até a praia.",
        "explanation": "Exemplo: \"Follow this road to the beach.\" — Siga esta estrada até a praia.",
        "phoneticHint": "\"rôud\" • /roʊd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bridge",
        "visualEmoji": "🌉",
        "visualOptions": [
          {
            "text": "Passenger",
            "emoji": "🧳",
            "label": "Passenger",
            "translationPt": "Passageiro",
            "simplePronunciation": "pé-sen-djer",
            "phonetic": "/ˈpæs.ən.dʒər/",
            "exampleEn": "All passengers must wear seatbelts.",
            "examplePt": "Todos os passageiros devem usar cinto."
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast and avoids traffic.",
            "examplePt": "O metrô é rápido e evita o trânsito."
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte",
            "simplePronunciation": "brídj",
            "phonetic": "/brɪdʒ/",
            "exampleEn": "Drive across the river bridge.",
            "examplePt": "Dirija sobre a ponte do rio."
          },
          {
            "text": "Stop",
            "emoji": "🚏",
            "label": "Stop",
            "translationPt": "Ponto de ônibus / Parada",
            "simplePronunciation": "stóp",
            "phonetic": "/stɑːp/",
            "exampleEn": "Wait for me at the bus stop.",
            "examplePt": "Espere por mim no ponto de ônibus."
          }
        ],
        "options": [
          "Passenger",
          "Subway",
          "Bridge",
          "Stop"
        ],
        "correctAnswer": "Bridge",
        "contextSentence": "Drive across the river bridge.",
        "contextSentencePt": "Dirija sobre a ponte do rio.",
        "explanation": "Exemplo: \"Drive across the river bridge.\" — Dirija sobre a ponte do rio.",
        "phoneticHint": "\"brídj\" • /brɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Airport",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto",
            "simplePronunciation": "ér-pórt",
            "phonetic": "/ˈer.pɔːrt/",
            "exampleEn": "We arrived early at the airport.",
            "examplePt": "Chegamos cedo ao aeroporto."
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu",
            "simplePronunciation": "tái-er",
            "phonetic": "/ˈtaɪ.ər/",
            "exampleEn": "Check the air in the car tire.",
            "examplePt": "Verifique o ar do pneu do carro."
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio",
            "simplePronunciation": "xíp",
            "phonetic": "/ʃɪp/",
            "exampleEn": "A large ship sails across the ocean.",
            "examplePt": "Um grande navio navega pelo oceano."
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa",
            "simplePronunciation": "mép",
            "phonetic": "/mæp/",
            "exampleEn": "Check the city map on your phone.",
            "examplePt": "Olhe o mapa da cidade no celular."
          }
        ],
        "options": [
          "Airport",
          "Tire",
          "Ship",
          "Map"
        ],
        "correctAnswer": "Airport",
        "contextSentence": "We arrived early at the airport.",
        "contextSentencePt": "Chegamos cedo ao aeroporto.",
        "explanation": "Exemplo: \"We arrived early at the airport.\" — Chegamos cedo ao aeroporto.",
        "phoneticHint": "\"ér-pórt\" • /ˈer.pɔːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Driver",
        "visualEmoji": "🧑‍✈️",
        "visualOptions": [
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio",
            "simplePronunciation": "xíp",
            "phonetic": "/ʃɪp/",
            "exampleEn": "A large ship sails across the ocean.",
            "examplePt": "Um grande navio navega pelo oceano."
          },
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver",
            "translationPt": "Motorista",
            "simplePronunciation": "drái-ver",
            "phonetic": "/ˈdraɪ.vər/",
            "exampleEn": "The bus driver is very polite.",
            "examplePt": "O motorista do ônibus é muito educado."
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast and avoids traffic.",
            "examplePt": "O metrô é rápido e evita o trânsito."
          },
          {
            "text": "Road",
            "emoji": "🛣️",
            "label": "Road",
            "translationPt": "Estrada / Rodovia",
            "simplePronunciation": "rôud",
            "phonetic": "/roʊd/",
            "exampleEn": "Follow this road to the beach.",
            "examplePt": "Siga esta estrada até a praia."
          }
        ],
        "options": [
          "Ship",
          "Driver",
          "Subway",
          "Road"
        ],
        "correctAnswer": "Driver",
        "contextSentence": "The bus driver is very polite.",
        "contextSentencePt": "O motorista do ônibus é muito educado.",
        "explanation": "Exemplo: \"The bus driver is very polite.\" — O motorista do ônibus é muito educado.",
        "phoneticHint": "\"drái-ver\" • /ˈdraɪ.vər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Passenger",
        "visualEmoji": "🧳",
        "visualOptions": [
          {
            "text": "Stop",
            "emoji": "🚏",
            "label": "Stop",
            "translationPt": "Ponto de ônibus / Parada",
            "simplePronunciation": "stóp",
            "phonetic": "/stɑːp/",
            "exampleEn": "Wait for me at the bus stop.",
            "examplePt": "Espere por mim no ponto de ônibus."
          },
          {
            "text": "Passenger",
            "emoji": "🧳",
            "label": "Passenger",
            "translationPt": "Passageiro",
            "simplePronunciation": "pé-sen-djer",
            "phonetic": "/ˈpæs.ən.dʒər/",
            "exampleEn": "All passengers must wear seatbelts.",
            "examplePt": "Todos os passageiros devem usar cinto."
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte",
            "simplePronunciation": "brídj",
            "phonetic": "/brɪdʒ/",
            "exampleEn": "Drive across the river bridge.",
            "examplePt": "Dirija sobre a ponte do rio."
          },
          {
            "text": "Traffic",
            "emoji": "🚦",
            "label": "Traffic",
            "translationPt": "Trânsito / Tráfego",
            "simplePronunciation": "tré-fik",
            "phonetic": "/ˈtræf.ɪk/",
            "exampleEn": "There is heavy traffic this morning.",
            "examplePt": "Há trânsito intenso nesta manhã."
          }
        ],
        "options": [
          "Stop",
          "Passenger",
          "Bridge",
          "Traffic"
        ],
        "correctAnswer": "Passenger",
        "contextSentence": "All passengers must wear seatbelts.",
        "contextSentencePt": "Todos os passageiros devem usar cinto.",
        "explanation": "Exemplo: \"All passengers must wear seatbelts.\" — Todos os passageiros devem usar cinto.",
        "phoneticHint": "\"pé-sen-djer\" • /ˈpæs.ən.dʒər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wheel",
        "visualEmoji": "🛞",
        "visualOptions": [
          {
            "text": "Road",
            "emoji": "🛣️",
            "label": "Road",
            "translationPt": "Estrada / Rodovia",
            "simplePronunciation": "rôud",
            "phonetic": "/roʊd/",
            "exampleEn": "Follow this road to the beach.",
            "examplePt": "Siga esta estrada até a praia."
          },
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver",
            "translationPt": "Motorista",
            "simplePronunciation": "drái-ver",
            "phonetic": "/ˈdraɪ.vər/",
            "exampleEn": "The bus driver is very polite.",
            "examplePt": "O motorista do ônibus é muito educado."
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto",
            "simplePronunciation": "ér-pórt",
            "phonetic": "/ˈer.pɔːrt/",
            "exampleEn": "We arrived early at the airport.",
            "examplePt": "Chegamos cedo ao aeroporto."
          },
          {
            "text": "Wheel",
            "emoji": "🛞",
            "label": "Wheel",
            "translationPt": "Roda / Volante",
            "simplePronunciation": "uíl",
            "phonetic": "/wiːl/",
            "exampleEn": "Keep both hands on the wheel.",
            "examplePt": "Mantenha as duas mãos no volante."
          }
        ],
        "options": [
          "Road",
          "Driver",
          "Airport",
          "Wheel"
        ],
        "correctAnswer": "Wheel",
        "contextSentence": "Keep both hands on the wheel.",
        "contextSentencePt": "Mantenha as duas mãos no volante.",
        "explanation": "Exemplo: \"Keep both hands on the wheel.\" — Mantenha as duas mãos no volante.",
        "phoneticHint": "\"uíl\" • /wiːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tire",
        "visualEmoji": "🛞",
        "visualOptions": [
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver",
            "translationPt": "Motorista",
            "simplePronunciation": "drái-ver",
            "phonetic": "/ˈdraɪ.vər/",
            "exampleEn": "The bus driver is very polite.",
            "examplePt": "O motorista do ônibus é muito educado."
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa",
            "simplePronunciation": "mép",
            "phonetic": "/mæp/",
            "exampleEn": "Check the city map on your phone.",
            "examplePt": "Olhe o mapa da cidade no celular."
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu",
            "simplePronunciation": "tái-er",
            "phonetic": "/ˈtaɪ.ər/",
            "exampleEn": "Check the air in the car tire.",
            "examplePt": "Verifique o ar do pneu do carro."
          },
          {
            "text": "Wheel",
            "emoji": "🛞",
            "label": "Wheel",
            "translationPt": "Roda / Volante",
            "simplePronunciation": "uíl",
            "phonetic": "/wiːl/",
            "exampleEn": "Keep both hands on the wheel.",
            "examplePt": "Mantenha as duas mãos no volante."
          }
        ],
        "options": [
          "Driver",
          "Map",
          "Tire",
          "Wheel"
        ],
        "correctAnswer": "Tire",
        "contextSentence": "Check the air in the car tire.",
        "contextSentencePt": "Verifique o ar do pneu do carro.",
        "explanation": "Exemplo: \"Check the air in the car tire.\" — Verifique o ar do pneu do carro.",
        "phoneticHint": "\"tái-er\" • /ˈtaɪ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Map",
        "visualEmoji": "🗺️",
        "visualOptions": [
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa",
            "simplePronunciation": "mép",
            "phonetic": "/mæp/",
            "exampleEn": "Check the city map on your phone.",
            "examplePt": "Olhe o mapa da cidade no celular."
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio",
            "simplePronunciation": "xíp",
            "phonetic": "/ʃɪp/",
            "exampleEn": "A large ship sails across the ocean.",
            "examplePt": "Um grande navio navega pelo oceano."
          },
          {
            "text": "Passenger",
            "emoji": "🧳",
            "label": "Passenger",
            "translationPt": "Passageiro",
            "simplePronunciation": "pé-sen-djer",
            "phonetic": "/ˈpæs.ən.dʒər/",
            "exampleEn": "All passengers must wear seatbelts.",
            "examplePt": "Todos os passageiros devem usar cinto."
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast and avoids traffic.",
            "examplePt": "O metrô é rápido e evita o trânsito."
          }
        ],
        "options": [
          "Map",
          "Ship",
          "Passenger",
          "Subway"
        ],
        "correctAnswer": "Map",
        "contextSentence": "Check the city map on your phone.",
        "contextSentencePt": "Olhe o mapa da cidade no celular.",
        "explanation": "Exemplo: \"Check the city map on your phone.\" — Olhe o mapa da cidade no celular.",
        "phoneticHint": "\"mép\" • /mæp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Stop",
        "visualEmoji": "🚏",
        "visualOptions": [
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte",
            "simplePronunciation": "brídj",
            "phonetic": "/brɪdʒ/",
            "exampleEn": "Drive across the river bridge.",
            "examplePt": "Dirija sobre a ponte do rio."
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto",
            "simplePronunciation": "ér-pórt",
            "phonetic": "/ˈer.pɔːrt/",
            "exampleEn": "We arrived early at the airport.",
            "examplePt": "Chegamos cedo ao aeroporto."
          },
          {
            "text": "Stop",
            "emoji": "🚏",
            "label": "Stop",
            "translationPt": "Ponto de ônibus / Parada",
            "simplePronunciation": "stóp",
            "phonetic": "/stɑːp/",
            "exampleEn": "Wait for me at the bus stop.",
            "examplePt": "Espere por mim no ponto de ônibus."
          },
          {
            "text": "Road",
            "emoji": "🛣️",
            "label": "Road",
            "translationPt": "Estrada / Rodovia",
            "simplePronunciation": "rôud",
            "phonetic": "/roʊd/",
            "exampleEn": "Follow this road to the beach.",
            "examplePt": "Siga esta estrada até a praia."
          }
        ],
        "options": [
          "Bridge",
          "Airport",
          "Stop",
          "Road"
        ],
        "correctAnswer": "Stop",
        "contextSentence": "Wait for me at the bus stop.",
        "contextSentencePt": "Espere por mim no ponto de ônibus.",
        "explanation": "Exemplo: \"Wait for me at the bus stop.\" — Espere por mim no ponto de ônibus.",
        "phoneticHint": "\"stóp\" • /stɑːp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Traffic",
        "visualEmoji": "🚦",
        "visualOptions": [
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver",
            "translationPt": "Motorista",
            "simplePronunciation": "drái-ver",
            "phonetic": "/ˈdraɪ.vər/",
            "exampleEn": "The bus driver is very polite.",
            "examplePt": "O motorista do ônibus é muito educado."
          },
          {
            "text": "Traffic",
            "emoji": "🚦",
            "label": "Traffic",
            "translationPt": "Trânsito / Tráfego",
            "simplePronunciation": "tré-fik",
            "phonetic": "/ˈtræf.ɪk/",
            "exampleEn": "There is heavy traffic this morning.",
            "examplePt": "Há trânsito intenso nesta manhã."
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu",
            "simplePronunciation": "tái-er",
            "phonetic": "/ˈtaɪ.ər/",
            "exampleEn": "Check the air in the car tire.",
            "examplePt": "Verifique o ar do pneu do carro."
          },
          {
            "text": "Wheel",
            "emoji": "🛞",
            "label": "Wheel",
            "translationPt": "Roda / Volante",
            "simplePronunciation": "uíl",
            "phonetic": "/wiːl/",
            "exampleEn": "Keep both hands on the wheel.",
            "examplePt": "Mantenha as duas mãos no volante."
          }
        ],
        "options": [
          "Driver",
          "Traffic",
          "Tire",
          "Wheel"
        ],
        "correctAnswer": "Traffic",
        "contextSentence": "There is heavy traffic this morning.",
        "contextSentencePt": "Há trânsito intenso nesta manhã.",
        "explanation": "Exemplo: \"There is heavy traffic this morning.\" — Há trânsito intenso nesta manhã.",
        "phoneticHint": "\"tré-fik\" • /ˈtræf.ɪk/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p19",
    "worldId": 0,
    "phaseNumber": 19,
    "themeId": "transport",
    "themeTitle": "Transporte",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "title": "Transporte • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema 4 (Nível 3/4) • 12 palavras intermediárias da via pública e segurança",
    "pedagogicalObjective": "Dominar elementos intermediários: Helicopter, Van, Ambulance, Seat, Helmet, Sidewalk, Crosswalk, Corner, Fuel, Engine, Sign e Park.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 3 de Transporte estudamos: Helicopter (\"ré-li-cóp-ter\" = Helicóptero), Van (\"vén\" = Van), Ambulance (\"ém-biu-lans\" = Ambulância), Seat (\"sít\" = Assento), Helmet (\"rél-met\" = Capacete) e Sidewalk (\"sáid-uók\" = Calçada).",
      "E completamos com Crosswalk (\"crós-uók\" = Faixa de pedestres), Corner (\"cór-ner\" = Esquina), Fuel (\"fiú-el\" = Combustível), Engine (\"én-djin\" = Motor), Sign (\"sáin\" = Placa) e Park (\"párk\" = Estacionar/Parque).",
      "Logo após este módulo, você fará mais uma Lição Exclusiva de Pronomes!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p19-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Helicopter",
        "visualEmoji": "🚁",
        "visualOptions": [
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter landed on the roof.",
            "examplePt": "O helicóptero pousou no topo do prédio."
          },
          {
            "text": "Engine",
            "emoji": "⚙️",
            "label": "Engine",
            "translationPt": "Motor",
            "simplePronunciation": "én-djin",
            "phonetic": "/ˈen.dʒɪn/",
            "exampleEn": "Start the car engine.",
            "examplePt": "Ligue o motor do carro."
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete",
            "simplePronunciation": "rél-met",
            "phonetic": "/ˈhel.mət/",
            "exampleEn": "Always wear a safety helmet.",
            "examplePt": "Use sempre um capacete de segurança."
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel",
            "translationPt": "Combustível / Gasolina",
            "simplePronunciation": "fiú-el",
            "phonetic": "/ˈfjuː.əl/",
            "exampleEn": "Stop to put fuel in the car.",
            "examplePt": "Pare para colocar combustível no carro."
          }
        ],
        "options": [
          "Helicopter",
          "Engine",
          "Helmet",
          "Fuel"
        ],
        "correctAnswer": "Helicopter",
        "contextSentence": "The helicopter landed on the roof.",
        "contextSentencePt": "O helicóptero pousou no topo do prédio.",
        "explanation": "Exemplo: \"The helicopter landed on the roof.\" — O helicóptero pousou no topo do prédio.",
        "phoneticHint": "\"ré-li-cóp-ter\" • /ˈhel.ɪˌkɑːp.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Van",
        "visualEmoji": "🚐",
        "visualOptions": [
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres",
            "simplePronunciation": "crós-uók",
            "phonetic": "/ˈkrɔːs.wɔːk/",
            "exampleEn": "Cross the avenue at the crosswalk.",
            "examplePt": "Atravesse a avenida na faixa de pedestres."
          },
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner",
            "translationPt": "Esquina",
            "simplePronunciation": "cór-ner",
            "phonetic": "/ˈkɔːr.nər/",
            "exampleEn": "The bakery is on the street corner.",
            "examplePt": "A padaria fica na esquina da rua."
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada",
            "simplePronunciation": "sáid-uók",
            "phonetic": "/ˈsaɪd.wɔːk/",
            "exampleEn": "Pedestrians walk on the sidewalk.",
            "examplePt": "Os pedestres caminham na calçada."
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua",
            "simplePronunciation": "vén",
            "phonetic": "/væn/",
            "exampleEn": "The school van picks up the kids.",
            "examplePt": "A van escolar busca as crianças."
          }
        ],
        "options": [
          "Crosswalk",
          "Corner",
          "Sidewalk",
          "Van"
        ],
        "correctAnswer": "Van",
        "contextSentence": "The school van picks up the kids.",
        "contextSentencePt": "A van escolar busca as crianças.",
        "explanation": "Exemplo: \"The school van picks up the kids.\" — A van escolar busca as crianças.",
        "phoneticHint": "\"vén\" • /væn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ambulance",
        "visualEmoji": "🚑",
        "visualOptions": [
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua",
            "simplePronunciation": "vén",
            "phonetic": "/væn/",
            "exampleEn": "The school van picks up the kids.",
            "examplePt": "A van escolar busca as crianças."
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter landed on the roof.",
            "examplePt": "O helicóptero pousou no topo do prédio."
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância",
            "simplePronunciation": "ém-biu-lans",
            "phonetic": "/ˈæm.bjə.ləns/",
            "exampleEn": "Make way for the ambulance.",
            "examplePt": "Dê passagem para a ambulância."
          },
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat",
            "translationPt": "Assento / Banco",
            "simplePronunciation": "sít",
            "phonetic": "/siːt/",
            "exampleEn": "Please take a seat on the train.",
            "examplePt": "Por favor, sente-se no banco do trem."
          }
        ],
        "options": [
          "Van",
          "Helicopter",
          "Ambulance",
          "Seat"
        ],
        "correctAnswer": "Ambulance",
        "contextSentence": "Make way for the ambulance.",
        "contextSentencePt": "Dê passagem para a ambulância.",
        "explanation": "Exemplo: \"Make way for the ambulance.\" — Dê passagem para a ambulância.",
        "phoneticHint": "\"ém-biu-lans\" • /ˈæm.bjə.ləns/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Seat",
        "visualEmoji": "💺",
        "visualOptions": [
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat",
            "translationPt": "Assento / Banco",
            "simplePronunciation": "sít",
            "phonetic": "/siːt/",
            "exampleEn": "Please take a seat on the train.",
            "examplePt": "Por favor, sente-se no banco do trem."
          },
          {
            "text": "Park",
            "emoji": "🅿️",
            "label": "Park",
            "translationPt": "Estacionamento / Parque",
            "simplePronunciation": "párk",
            "phonetic": "/pɑːrk/",
            "exampleEn": "Where can I park the car?",
            "examplePt": "Onde posso estacionar o carro?"
          },
          {
            "text": "Sign",
            "emoji": "🛑",
            "label": "Sign",
            "translationPt": "Placa de trânsito",
            "simplePronunciation": "sáin",
            "phonetic": "/saɪn/",
            "exampleEn": "Read the road sign ahead.",
            "examplePt": "Leia a placa de trânsito à frente."
          },
          {
            "text": "Engine",
            "emoji": "⚙️",
            "label": "Engine",
            "translationPt": "Motor",
            "simplePronunciation": "én-djin",
            "phonetic": "/ˈen.dʒɪn/",
            "exampleEn": "Start the car engine.",
            "examplePt": "Ligue o motor do carro."
          }
        ],
        "options": [
          "Seat",
          "Park",
          "Sign",
          "Engine"
        ],
        "correctAnswer": "Seat",
        "contextSentence": "Please take a seat on the train.",
        "contextSentencePt": "Por favor, sente-se no banco do trem.",
        "explanation": "Exemplo: \"Please take a seat on the train.\" — Por favor, sente-se no banco do trem.",
        "phoneticHint": "\"sít\" • /siːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Helmet",
        "visualEmoji": "⛑️",
        "visualOptions": [
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância",
            "simplePronunciation": "ém-biu-lans",
            "phonetic": "/ˈæm.bjə.ləns/",
            "exampleEn": "Make way for the ambulance.",
            "examplePt": "Dê passagem para a ambulância."
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete",
            "simplePronunciation": "rél-met",
            "phonetic": "/ˈhel.mət/",
            "exampleEn": "Always wear a safety helmet.",
            "examplePt": "Use sempre um capacete de segurança."
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres",
            "simplePronunciation": "crós-uók",
            "phonetic": "/ˈkrɔːs.wɔːk/",
            "exampleEn": "Cross the avenue at the crosswalk.",
            "examplePt": "Atravesse a avenida na faixa de pedestres."
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel",
            "translationPt": "Combustível / Gasolina",
            "simplePronunciation": "fiú-el",
            "phonetic": "/ˈfjuː.əl/",
            "exampleEn": "Stop to put fuel in the car.",
            "examplePt": "Pare para colocar combustível no carro."
          }
        ],
        "options": [
          "Ambulance",
          "Helmet",
          "Crosswalk",
          "Fuel"
        ],
        "correctAnswer": "Helmet",
        "contextSentence": "Always wear a safety helmet.",
        "contextSentencePt": "Use sempre um capacete de segurança.",
        "explanation": "Exemplo: \"Always wear a safety helmet.\" — Use sempre um capacete de segurança.",
        "phoneticHint": "\"rél-met\" • /ˈhel.mət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sidewalk",
        "visualEmoji": "🚶",
        "visualOptions": [
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner",
            "translationPt": "Esquina",
            "simplePronunciation": "cór-ner",
            "phonetic": "/ˈkɔːr.nər/",
            "exampleEn": "The bakery is on the street corner.",
            "examplePt": "A padaria fica na esquina da rua."
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada",
            "simplePronunciation": "sáid-uók",
            "phonetic": "/ˈsaɪd.wɔːk/",
            "exampleEn": "Pedestrians walk on the sidewalk.",
            "examplePt": "Os pedestres caminham na calçada."
          },
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat",
            "translationPt": "Assento / Banco",
            "simplePronunciation": "sít",
            "phonetic": "/siːt/",
            "exampleEn": "Please take a seat on the train.",
            "examplePt": "Por favor, sente-se no banco do trem."
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua",
            "simplePronunciation": "vén",
            "phonetic": "/væn/",
            "exampleEn": "The school van picks up the kids.",
            "examplePt": "A van escolar busca as crianças."
          }
        ],
        "options": [
          "Corner",
          "Sidewalk",
          "Seat",
          "Van"
        ],
        "correctAnswer": "Sidewalk",
        "contextSentence": "Pedestrians walk on the sidewalk.",
        "contextSentencePt": "Os pedestres caminham na calçada.",
        "explanation": "Exemplo: \"Pedestrians walk on the sidewalk.\" — Os pedestres caminham na calçada.",
        "phoneticHint": "\"sáid-uók\" • /ˈsaɪd.wɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Crosswalk",
        "visualEmoji": "🚸",
        "visualOptions": [
          {
            "text": "Park",
            "emoji": "🅿️",
            "label": "Park",
            "translationPt": "Estacionamento / Parque",
            "simplePronunciation": "párk",
            "phonetic": "/pɑːrk/",
            "exampleEn": "Where can I park the car?",
            "examplePt": "Onde posso estacionar o carro?"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter landed on the roof.",
            "examplePt": "O helicóptero pousou no topo do prédio."
          },
          {
            "text": "Sign",
            "emoji": "🛑",
            "label": "Sign",
            "translationPt": "Placa de trânsito",
            "simplePronunciation": "sáin",
            "phonetic": "/saɪn/",
            "exampleEn": "Read the road sign ahead.",
            "examplePt": "Leia a placa de trânsito à frente."
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres",
            "simplePronunciation": "crós-uók",
            "phonetic": "/ˈkrɔːs.wɔːk/",
            "exampleEn": "Cross the avenue at the crosswalk.",
            "examplePt": "Atravesse a avenida na faixa de pedestres."
          }
        ],
        "options": [
          "Park",
          "Helicopter",
          "Sign",
          "Crosswalk"
        ],
        "correctAnswer": "Crosswalk",
        "contextSentence": "Cross the avenue at the crosswalk.",
        "contextSentencePt": "Atravesse a avenida na faixa de pedestres.",
        "explanation": "Exemplo: \"Cross the avenue at the crosswalk.\" — Atravesse a avenida na faixa de pedestres.",
        "phoneticHint": "\"crós-uók\" • /ˈkrɔːs.wɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Corner",
        "visualEmoji": "🏙️",
        "visualOptions": [
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada",
            "simplePronunciation": "sáid-uók",
            "phonetic": "/ˈsaɪd.wɔːk/",
            "exampleEn": "Pedestrians walk on the sidewalk.",
            "examplePt": "Os pedestres caminham na calçada."
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete",
            "simplePronunciation": "rél-met",
            "phonetic": "/ˈhel.mət/",
            "exampleEn": "Always wear a safety helmet.",
            "examplePt": "Use sempre um capacete de segurança."
          },
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner",
            "translationPt": "Esquina",
            "simplePronunciation": "cór-ner",
            "phonetic": "/ˈkɔːr.nər/",
            "exampleEn": "The bakery is on the street corner.",
            "examplePt": "A padaria fica na esquina da rua."
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância",
            "simplePronunciation": "ém-biu-lans",
            "phonetic": "/ˈæm.bjə.ləns/",
            "exampleEn": "Make way for the ambulance.",
            "examplePt": "Dê passagem para a ambulância."
          }
        ],
        "options": [
          "Sidewalk",
          "Helmet",
          "Corner",
          "Ambulance"
        ],
        "correctAnswer": "Corner",
        "contextSentence": "The bakery is on the street corner.",
        "contextSentencePt": "A padaria fica na esquina da rua.",
        "explanation": "Exemplo: \"The bakery is on the street corner.\" — A padaria fica na esquina da rua.",
        "phoneticHint": "\"cór-ner\" • /ˈkɔːr.nər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fuel",
        "visualEmoji": "⛽",
        "visualOptions": [
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel",
            "translationPt": "Combustível / Gasolina",
            "simplePronunciation": "fiú-el",
            "phonetic": "/ˈfjuː.əl/",
            "exampleEn": "Stop to put fuel in the car.",
            "examplePt": "Pare para colocar combustível no carro."
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete",
            "simplePronunciation": "rél-met",
            "phonetic": "/ˈhel.mət/",
            "exampleEn": "Always wear a safety helmet.",
            "examplePt": "Use sempre um capacete de segurança."
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter landed on the roof.",
            "examplePt": "O helicóptero pousou no topo do prédio."
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância",
            "simplePronunciation": "ém-biu-lans",
            "phonetic": "/ˈæm.bjə.ləns/",
            "exampleEn": "Make way for the ambulance.",
            "examplePt": "Dê passagem para a ambulância."
          }
        ],
        "options": [
          "Fuel",
          "Helmet",
          "Helicopter",
          "Ambulance"
        ],
        "correctAnswer": "Fuel",
        "contextSentence": "Stop to put fuel in the car.",
        "contextSentencePt": "Pare para colocar combustível no carro.",
        "explanation": "Exemplo: \"Stop to put fuel in the car.\" — Pare para colocar combustível no carro.",
        "phoneticHint": "\"fiú-el\" • /ˈfjuː.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Engine",
        "visualEmoji": "⚙️",
        "visualOptions": [
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat",
            "translationPt": "Assento / Banco",
            "simplePronunciation": "sít",
            "phonetic": "/siːt/",
            "exampleEn": "Please take a seat on the train.",
            "examplePt": "Por favor, sente-se no banco do trem."
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres",
            "simplePronunciation": "crós-uók",
            "phonetic": "/ˈkrɔːs.wɔːk/",
            "exampleEn": "Cross the avenue at the crosswalk.",
            "examplePt": "Atravesse a avenida na faixa de pedestres."
          },
          {
            "text": "Engine",
            "emoji": "⚙️",
            "label": "Engine",
            "translationPt": "Motor",
            "simplePronunciation": "én-djin",
            "phonetic": "/ˈen.dʒɪn/",
            "exampleEn": "Start the car engine.",
            "examplePt": "Ligue o motor do carro."
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua",
            "simplePronunciation": "vén",
            "phonetic": "/væn/",
            "exampleEn": "The school van picks up the kids.",
            "examplePt": "A van escolar busca as crianças."
          }
        ],
        "options": [
          "Seat",
          "Crosswalk",
          "Engine",
          "Van"
        ],
        "correctAnswer": "Engine",
        "contextSentence": "Start the car engine.",
        "contextSentencePt": "Ligue o motor do carro.",
        "explanation": "Exemplo: \"Start the car engine.\" — Ligue o motor do carro.",
        "phoneticHint": "\"én-djin\" • /ˈen.dʒɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sign",
        "visualEmoji": "🛑",
        "visualOptions": [
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner",
            "translationPt": "Esquina",
            "simplePronunciation": "cór-ner",
            "phonetic": "/ˈkɔːr.nər/",
            "exampleEn": "The bakery is on the street corner.",
            "examplePt": "A padaria fica na esquina da rua."
          },
          {
            "text": "Sign",
            "emoji": "🛑",
            "label": "Sign",
            "translationPt": "Placa de trânsito",
            "simplePronunciation": "sáin",
            "phonetic": "/saɪn/",
            "exampleEn": "Read the road sign ahead.",
            "examplePt": "Leia a placa de trânsito à frente."
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel",
            "translationPt": "Combustível / Gasolina",
            "simplePronunciation": "fiú-el",
            "phonetic": "/ˈfjuː.əl/",
            "exampleEn": "Stop to put fuel in the car.",
            "examplePt": "Pare para colocar combustível no carro."
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada",
            "simplePronunciation": "sáid-uók",
            "phonetic": "/ˈsaɪd.wɔːk/",
            "exampleEn": "Pedestrians walk on the sidewalk.",
            "examplePt": "Os pedestres caminham na calçada."
          }
        ],
        "options": [
          "Corner",
          "Sign",
          "Fuel",
          "Sidewalk"
        ],
        "correctAnswer": "Sign",
        "contextSentence": "Read the road sign ahead.",
        "contextSentencePt": "Leia a placa de trânsito à frente.",
        "explanation": "Exemplo: \"Read the road sign ahead.\" — Leia a placa de trânsito à frente.",
        "phoneticHint": "\"sáin\" • /saɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Park",
        "visualEmoji": "🅿️",
        "visualOptions": [
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete",
            "simplePronunciation": "rél-met",
            "phonetic": "/ˈhel.mət/",
            "exampleEn": "Always wear a safety helmet.",
            "examplePt": "Use sempre um capacete de segurança."
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter landed on the roof.",
            "examplePt": "O helicóptero pousou no topo do prédio."
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância",
            "simplePronunciation": "ém-biu-lans",
            "phonetic": "/ˈæm.bjə.ləns/",
            "exampleEn": "Make way for the ambulance.",
            "examplePt": "Dê passagem para a ambulância."
          },
          {
            "text": "Park",
            "emoji": "🅿️",
            "label": "Park",
            "translationPt": "Estacionamento / Parque",
            "simplePronunciation": "párk",
            "phonetic": "/pɑːrk/",
            "exampleEn": "Where can I park the car?",
            "examplePt": "Onde posso estacionar o carro?"
          }
        ],
        "options": [
          "Helmet",
          "Helicopter",
          "Ambulance",
          "Park"
        ],
        "correctAnswer": "Park",
        "contextSentence": "Where can I park the car?",
        "contextSentencePt": "Onde posso estacionar o carro?",
        "explanation": "Exemplo: \"Where can I park the car?\" — Onde posso estacionar o carro?",
        "phoneticHint": "\"párk\" • /pɑːrk/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p20",
    "worldId": 0,
    "phaseNumber": 20,
    "title": "Lição de Pronomes V • Prática Geral I (Pessoais a Demonstrativos)",
    "subtitle": "Módulo de Pronomes 5/6 (Após 15 de Vocabulário) • Frases do Dia a Dia + Voz da Professora",
    "pedagogicalObjective": "Praticar frases reais do cotidiano combinando Pronomes Pessoais, de Tratamento, Possessivos e Demonstrativos com o vocabulário aprendido.",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à 5ª Lição Exclusiva de Pronomes (após 15 módulos de vocabulário)!",
      "Agora vamos associar frases curtas e práticas do dia a dia usando os Pronomes Pessoais, Possessivos e Demonstrativos."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p20-pron-1",
        "type": "pair-match",
        "conceptTitle": "Prática • Pronomes Pessoais em Frases Curtas",
        "conceptHeader": "Vamos ver como os Pronomes Pessoais ficam lindos junto das palavras que aprendemos? Toque no inglês para ouvir e conecte ao significado!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Associe cada frase curta com Pronome Pessoal ao seu par:",
        "pairs": [
          {
            "id": "w0-p20-b1-p9",
            "en": "I am at home",
            "emoji": "🏠",
            "phonetic": "/aɪ æm æt hoʊm/",
            "pt": "Eu estou em casa",
            "tipPt": "Isso! \"I\" = \"Eu\"!"
          },
          {
            "id": "w0-p20-b1-p10",
            "en": "He is at the door",
            "emoji": "🚪",
            "phonetic": "/hiː ɪz æt ðə dɔːr/",
            "pt": "Ele está na porta",
            "tipPt": "Muito bem! \"He\" = \"Ele\"!"
          },
          {
            "id": "w0-p20-b1-p11",
            "en": "She is on the sofa",
            "emoji": "🛋️",
            "phonetic": "/ʃiː ɪz ɑːn ðə ˈsoʊ.fə/",
            "pt": "Ela está no sofá",
            "tipPt": "Perfeito! \"She\" = \"Ela\"!"
          },
          {
            "id": "w0-p20-b1-p12",
            "en": "It is a house key",
            "emoji": "🔑",
            "phonetic": "/ɪt ɪz ə haʊs kiː/",
            "pt": "É uma chave de casa",
            "tipPt": "Lindo! Para objetos como a chave usamos \"It\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "I am at home (Eu estou em casa), He is at the door (Ele está na porta), She is on the sofa (Ela está no sofá), It is a metal key (É uma chave de metal).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p20-pron-2",
        "type": "pair-match",
        "conceptTitle": "Prática • Pronomes Possessivos e Demonstrativos em Frases",
        "conceptHeader": "Vamos combinar os Possessivos (My, Your, Our) e Demonstrativos (This, That, These, Those) com as palavras do nosso dia a dia!",
        "teacherAudioPt": "/audio/teacher/pronoun_4.wav",
        "prompt": "🤝 Conecte cada frase com Possessivo ou Demonstrativo à sua tradução:",
        "pairs": [
          {
            "id": "w0-p20-b2-pd1",
            "en": "This is my car",
            "emoji": "🚗",
            "phonetic": "/ðɪs ɪz maɪ kɑːr/",
            "pt": "Este aqui é o meu carro",
            "tipPt": "Excelente! \"This\" (este perto) + \"my\" (meu)!"
          },
          {
            "id": "w0-p20-b2-pd2",
            "en": "That is your bus",
            "emoji": "🚌",
            "phonetic": "/ðæt ɪz jʊr bʌs/",
            "pt": "Aquele lá longe é o seu ônibus",
            "tipPt": "Perfeito! \"That\" (aquele longe) + \"your\" (seu)!"
          },
          {
            "id": "w0-p20-b2-pd3",
            "en": "These shoes are mine",
            "emoji": "👟",
            "phonetic": "/ðiːz ʃuːz ɑːr maɪn/",
            "pt": "Estes sapatos aqui são meus",
            "tipPt": "Muito bem! \"These\" (estes perto) + \"mine\" (meus)!"
          },
          {
            "id": "w0-p20-b2-pd4",
            "en": "Those are our bags",
            "emoji": "👜",
            "phonetic": "/ðoʊz ɑːr aʊər bæɡz/",
            "pt": "Aquelas lá são as nossas bolsas",
            "tipPt": "Lindo! \"Those\" (aquelas longe) + \"our\" (nossas)!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This is my car (Este é meu carro), That is your bus (Aquele é seu ônibus), These shoes are mine (Estes sapatos são meus), Those are our bags (Aquelas são nossas bolsas).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p21",
    "worldId": 0,
    "phaseNumber": 21,
    "themeId": "transport",
    "themeTitle": "Transporte",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "title": "Transporte • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Tema 4 (Nível 4/4) • 12 veículos e componentes específicos de transporte",
    "pedagogicalObjective": "Conhecer meios de transporte e peças específicas: Scooter, Tractor, Ferry, Tram, Runway, Harbor, Anchor, Pedal, Brake, Horn, Bumper e Tunnel.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 4 de Transporte aprendemos termos menos comuns: Scooter (\"scú-ter\" = Patinete/Scooter), Tractor (\"trék-tor\" = Trator), Ferry (\"fé-ri\" = Balsa), Tram (\"trém\" = Bonde), Runway (\"rân-uêi\" = Pista de pouso) e Harbor (\"rár-bor\" = Porto).",
      "E completamos o Tema 4 com Anchor (\"én-cor\" = Âncora), Pedal (\"pé-dal\" = Pedal), Brake (\"brêik\" = Freio), Horn (\"rórn\" = Buzina), Bumper (\"bâm-per\" = Para-choque) e Tunnel (\"tâ-nel\" = Túnel)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p21-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Scooter",
        "visualEmoji": "🛴",
        "visualOptions": [
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake",
            "translationPt": "Freio",
            "simplePronunciation": "brêik",
            "phonetic": "/breɪk/",
            "exampleEn": "Step on the brake to stop the car.",
            "examplePt": "Pise no freio para parar o carro."
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn",
            "translationPt": "Buzina",
            "simplePronunciation": "rórn",
            "phonetic": "/hɔːrn/",
            "exampleEn": "Do not honk the car horn at night.",
            "examplePt": "Não toque a buzina do carro à noite."
          },
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete / Scooter",
            "simplePronunciation": "scú-ter",
            "phonetic": "/ˈskuː.tər/",
            "exampleEn": "He rides an electric scooter.",
            "examplePt": "Ele anda de patinete elétrico."
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor",
            "translationPt": "Porto",
            "simplePronunciation": "rár-bor",
            "phonetic": "/ˈhɑːr.bər/",
            "exampleEn": "Many boats are anchored in the harbor.",
            "examplePt": "Muitos barcos estão ancorados no porto."
          }
        ],
        "options": [
          "Brake",
          "Horn",
          "Scooter",
          "Harbor"
        ],
        "correctAnswer": "Scooter",
        "contextSentence": "He rides an electric scooter.",
        "contextSentencePt": "Ele anda de patinete elétrico.",
        "explanation": "Exemplo: \"He rides an electric scooter.\" — Ele anda de patinete elétrico.",
        "phoneticHint": "\"scú-ter\" • /ˈskuː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Tractor",
        "visualEmoji": "🚜",
        "visualOptions": [
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator",
            "simplePronunciation": "trék-tor",
            "phonetic": "/ˈtræk.tər/",
            "exampleEn": "The farmer drives a green tractor.",
            "examplePt": "O fazendeiro dirige um trator verde."
          },
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel",
            "translationPt": "Túnel",
            "simplePronunciation": "tâ-nel",
            "phonetic": "/ˈtʌn.əl/",
            "exampleEn": "Turn on the headlights inside the tunnel.",
            "examplePt": "Acenda os faróis dentro do túnel."
          },
          {
            "text": "Bumper",
            "emoji": "🚗",
            "label": "Bumper",
            "translationPt": "Para-choque",
            "simplePronunciation": "bâm-per",
            "phonetic": "/ˈbʌm.pər/",
            "exampleEn": "The front bumper protects the car.",
            "examplePt": "O para-choque dianteiro protege o carro."
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane accelerated on the runway.",
            "examplePt": "O avião acelerou na pista de pouso."
          }
        ],
        "options": [
          "Tractor",
          "Tunnel",
          "Bumper",
          "Runway"
        ],
        "correctAnswer": "Tractor",
        "contextSentence": "The farmer drives a green tractor.",
        "contextSentencePt": "O fazendeiro dirige um trator verde.",
        "explanation": "Exemplo: \"The farmer drives a green tractor.\" — O fazendeiro dirige um trator verde.",
        "phoneticHint": "\"trék-tor\" • /ˈtræk.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ferry",
        "visualEmoji": "⛴️",
        "visualOptions": [
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator",
            "simplePronunciation": "trék-tor",
            "phonetic": "/ˈtræk.tər/",
            "exampleEn": "The farmer drives a green tractor.",
            "examplePt": "O fazendeiro dirige um trator verde."
          },
          {
            "text": "Ferry",
            "emoji": "⛴️",
            "label": "Ferry",
            "translationPt": "Balsa",
            "simplePronunciation": "fé-ri",
            "phonetic": "/ˈfer.i/",
            "exampleEn": "We crossed the bay on a ferry.",
            "examplePt": "Atravessamos a baía em uma balsa."
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora",
            "simplePronunciation": "én-cor",
            "phonetic": "/ˈæŋ.kər/",
            "exampleEn": "The ship dropped its heavy anchor.",
            "examplePt": "O navio lançou sua âncora pesada."
          },
          {
            "text": "Tram",
            "emoji": "🚋",
            "label": "Tram",
            "translationPt": "Bonde / VLT",
            "simplePronunciation": "trém",
            "phonetic": "/træm/",
            "exampleEn": "The electric tram runs on rails.",
            "examplePt": "O bonde elétrico anda sobre trilhos."
          }
        ],
        "options": [
          "Tractor",
          "Ferry",
          "Anchor",
          "Tram"
        ],
        "correctAnswer": "Ferry",
        "contextSentence": "We crossed the bay on a ferry.",
        "contextSentencePt": "Atravessamos a baía em uma balsa.",
        "explanation": "Exemplo: \"We crossed the bay on a ferry.\" — Atravessamos a baía em uma balsa.",
        "phoneticHint": "\"fé-ri\" • /ˈfer.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tram",
        "visualEmoji": "🚋",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete / Scooter",
            "simplePronunciation": "scú-ter",
            "phonetic": "/ˈskuː.tər/",
            "exampleEn": "He rides an electric scooter.",
            "examplePt": "Ele anda de patinete elétrico."
          },
          {
            "text": "Tram",
            "emoji": "🚋",
            "label": "Tram",
            "translationPt": "Bonde / VLT",
            "simplePronunciation": "trém",
            "phonetic": "/træm/",
            "exampleEn": "The electric tram runs on rails.",
            "examplePt": "O bonde elétrico anda sobre trilhos."
          },
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal",
            "translationPt": "Pedal",
            "simplePronunciation": "pé-dal",
            "phonetic": "/ˈped.əl/",
            "exampleEn": "Push the bicycle pedal with your foot.",
            "examplePt": "Empurre o pedal da bicicleta com o pé."
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn",
            "translationPt": "Buzina",
            "simplePronunciation": "rórn",
            "phonetic": "/hɔːrn/",
            "exampleEn": "Do not honk the car horn at night.",
            "examplePt": "Não toque a buzina do carro à noite."
          }
        ],
        "options": [
          "Scooter",
          "Tram",
          "Pedal",
          "Horn"
        ],
        "correctAnswer": "Tram",
        "contextSentence": "The electric tram runs on rails.",
        "contextSentencePt": "O bonde elétrico anda sobre trilhos.",
        "explanation": "Exemplo: \"The electric tram runs on rails.\" — O bonde elétrico anda sobre trilhos.",
        "phoneticHint": "\"trém\" • /træm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Runway",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel",
            "translationPt": "Túnel",
            "simplePronunciation": "tâ-nel",
            "phonetic": "/ˈtʌn.əl/",
            "exampleEn": "Turn on the headlights inside the tunnel.",
            "examplePt": "Acenda os faróis dentro do túnel."
          },
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake",
            "translationPt": "Freio",
            "simplePronunciation": "brêik",
            "phonetic": "/breɪk/",
            "exampleEn": "Step on the brake to stop the car.",
            "examplePt": "Pise no freio para parar o carro."
          },
          {
            "text": "Bumper",
            "emoji": "🚗",
            "label": "Bumper",
            "translationPt": "Para-choque",
            "simplePronunciation": "bâm-per",
            "phonetic": "/ˈbʌm.pər/",
            "exampleEn": "The front bumper protects the car.",
            "examplePt": "O para-choque dianteiro protege o carro."
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane accelerated on the runway.",
            "examplePt": "O avião acelerou na pista de pouso."
          }
        ],
        "options": [
          "Tunnel",
          "Brake",
          "Bumper",
          "Runway"
        ],
        "correctAnswer": "Runway",
        "contextSentence": "The plane accelerated on the runway.",
        "contextSentencePt": "O avião acelerou na pista de pouso.",
        "explanation": "Exemplo: \"The plane accelerated on the runway.\" — O avião acelerou na pista de pouso.",
        "phoneticHint": "\"rân-uêi\" • /ˈrʌn.weɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Harbor",
        "visualEmoji": "⚓",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete / Scooter",
            "simplePronunciation": "scú-ter",
            "phonetic": "/ˈskuː.tər/",
            "exampleEn": "He rides an electric scooter.",
            "examplePt": "Ele anda de patinete elétrico."
          },
          {
            "text": "Ferry",
            "emoji": "⛴️",
            "label": "Ferry",
            "translationPt": "Balsa",
            "simplePronunciation": "fé-ri",
            "phonetic": "/ˈfer.i/",
            "exampleEn": "We crossed the bay on a ferry.",
            "examplePt": "Atravessamos a baía em uma balsa."
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor",
            "translationPt": "Porto",
            "simplePronunciation": "rár-bor",
            "phonetic": "/ˈhɑːr.bər/",
            "exampleEn": "Many boats are anchored in the harbor.",
            "examplePt": "Muitos barcos estão ancorados no porto."
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane accelerated on the runway.",
            "examplePt": "O avião acelerou na pista de pouso."
          }
        ],
        "options": [
          "Scooter",
          "Ferry",
          "Harbor",
          "Runway"
        ],
        "correctAnswer": "Harbor",
        "contextSentence": "Many boats are anchored in the harbor.",
        "contextSentencePt": "Muitos barcos estão ancorados no porto.",
        "explanation": "Exemplo: \"Many boats are anchored in the harbor.\" — Muitos barcos estão ancorados no porto.",
        "phoneticHint": "\"rár-bor\" • /ˈhɑːr.bər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Anchor",
        "visualEmoji": "⚓",
        "visualOptions": [
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora",
            "simplePronunciation": "én-cor",
            "phonetic": "/ˈæŋ.kər/",
            "exampleEn": "The ship dropped its heavy anchor.",
            "examplePt": "O navio lançou sua âncora pesada."
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn",
            "translationPt": "Buzina",
            "simplePronunciation": "rórn",
            "phonetic": "/hɔːrn/",
            "exampleEn": "Do not honk the car horn at night.",
            "examplePt": "Não toque a buzina do carro à noite."
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator",
            "simplePronunciation": "trék-tor",
            "phonetic": "/ˈtræk.tər/",
            "exampleEn": "The farmer drives a green tractor.",
            "examplePt": "O fazendeiro dirige um trator verde."
          },
          {
            "text": "Tram",
            "emoji": "🚋",
            "label": "Tram",
            "translationPt": "Bonde / VLT",
            "simplePronunciation": "trém",
            "phonetic": "/træm/",
            "exampleEn": "The electric tram runs on rails.",
            "examplePt": "O bonde elétrico anda sobre trilhos."
          }
        ],
        "options": [
          "Anchor",
          "Horn",
          "Tractor",
          "Tram"
        ],
        "correctAnswer": "Anchor",
        "contextSentence": "The ship dropped its heavy anchor.",
        "contextSentencePt": "O navio lançou sua âncora pesada.",
        "explanation": "Exemplo: \"The ship dropped its heavy anchor.\" — O navio lançou sua âncora pesada.",
        "phoneticHint": "\"én-cor\" • /ˈæŋ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pedal",
        "visualEmoji": "🚲",
        "visualOptions": [
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora",
            "simplePronunciation": "én-cor",
            "phonetic": "/ˈæŋ.kər/",
            "exampleEn": "The ship dropped its heavy anchor.",
            "examplePt": "O navio lançou sua âncora pesada."
          },
          {
            "text": "Ferry",
            "emoji": "⛴️",
            "label": "Ferry",
            "translationPt": "Balsa",
            "simplePronunciation": "fé-ri",
            "phonetic": "/ˈfer.i/",
            "exampleEn": "We crossed the bay on a ferry.",
            "examplePt": "Atravessamos a baía em uma balsa."
          },
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal",
            "translationPt": "Pedal",
            "simplePronunciation": "pé-dal",
            "phonetic": "/ˈped.əl/",
            "exampleEn": "Push the bicycle pedal with your foot.",
            "examplePt": "Empurre o pedal da bicicleta com o pé."
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor",
            "translationPt": "Porto",
            "simplePronunciation": "rár-bor",
            "phonetic": "/ˈhɑːr.bər/",
            "exampleEn": "Many boats are anchored in the harbor.",
            "examplePt": "Muitos barcos estão ancorados no porto."
          }
        ],
        "options": [
          "Anchor",
          "Ferry",
          "Pedal",
          "Harbor"
        ],
        "correctAnswer": "Pedal",
        "contextSentence": "Push the bicycle pedal with your foot.",
        "contextSentencePt": "Empurre o pedal da bicicleta com o pé.",
        "explanation": "Exemplo: \"Push the bicycle pedal with your foot.\" — Empurre o pedal da bicicleta com o pé.",
        "phoneticHint": "\"pé-dal\" • /ˈped.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Brake",
        "visualEmoji": "🛑",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete / Scooter",
            "simplePronunciation": "scú-ter",
            "phonetic": "/ˈskuː.tər/",
            "exampleEn": "He rides an electric scooter.",
            "examplePt": "Ele anda de patinete elétrico."
          },
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake",
            "translationPt": "Freio",
            "simplePronunciation": "brêik",
            "phonetic": "/breɪk/",
            "exampleEn": "Step on the brake to stop the car.",
            "examplePt": "Pise no freio para parar o carro."
          },
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel",
            "translationPt": "Túnel",
            "simplePronunciation": "tâ-nel",
            "phonetic": "/ˈtʌn.əl/",
            "exampleEn": "Turn on the headlights inside the tunnel.",
            "examplePt": "Acenda os faróis dentro do túnel."
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane accelerated on the runway.",
            "examplePt": "O avião acelerou na pista de pouso."
          }
        ],
        "options": [
          "Scooter",
          "Brake",
          "Tunnel",
          "Runway"
        ],
        "correctAnswer": "Brake",
        "contextSentence": "Step on the brake to stop the car.",
        "contextSentencePt": "Pise no freio para parar o carro.",
        "explanation": "Exemplo: \"Step on the brake to stop the car.\" — Pise no freio para parar o carro.",
        "phoneticHint": "\"brêik\" • /breɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Horn",
        "visualEmoji": "📯",
        "visualOptions": [
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora",
            "simplePronunciation": "én-cor",
            "phonetic": "/ˈæŋ.kər/",
            "exampleEn": "The ship dropped its heavy anchor.",
            "examplePt": "O navio lançou sua âncora pesada."
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator",
            "simplePronunciation": "trék-tor",
            "phonetic": "/ˈtræk.tər/",
            "exampleEn": "The farmer drives a green tractor.",
            "examplePt": "O fazendeiro dirige um trator verde."
          },
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal",
            "translationPt": "Pedal",
            "simplePronunciation": "pé-dal",
            "phonetic": "/ˈped.əl/",
            "exampleEn": "Push the bicycle pedal with your foot.",
            "examplePt": "Empurre o pedal da bicicleta com o pé."
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn",
            "translationPt": "Buzina",
            "simplePronunciation": "rórn",
            "phonetic": "/hɔːrn/",
            "exampleEn": "Do not honk the car horn at night.",
            "examplePt": "Não toque a buzina do carro à noite."
          }
        ],
        "options": [
          "Anchor",
          "Tractor",
          "Pedal",
          "Horn"
        ],
        "correctAnswer": "Horn",
        "contextSentence": "Do not honk the car horn at night.",
        "contextSentencePt": "Não toque a buzina do carro à noite.",
        "explanation": "Exemplo: \"Do not honk the car horn at night.\" — Não toque a buzina do carro à noite.",
        "phoneticHint": "\"rórn\" • /hɔːrn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bumper",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Bumper",
            "emoji": "🚗",
            "label": "Bumper",
            "translationPt": "Para-choque",
            "simplePronunciation": "bâm-per",
            "phonetic": "/ˈbʌm.pər/",
            "exampleEn": "The front bumper protects the car.",
            "examplePt": "O para-choque dianteiro protege o carro."
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor",
            "translationPt": "Porto",
            "simplePronunciation": "rár-bor",
            "phonetic": "/ˈhɑːr.bər/",
            "exampleEn": "Many boats are anchored in the harbor.",
            "examplePt": "Muitos barcos estão ancorados no porto."
          },
          {
            "text": "Tram",
            "emoji": "🚋",
            "label": "Tram",
            "translationPt": "Bonde / VLT",
            "simplePronunciation": "trém",
            "phonetic": "/træm/",
            "exampleEn": "The electric tram runs on rails.",
            "examplePt": "O bonde elétrico anda sobre trilhos."
          },
          {
            "text": "Ferry",
            "emoji": "⛴️",
            "label": "Ferry",
            "translationPt": "Balsa",
            "simplePronunciation": "fé-ri",
            "phonetic": "/ˈfer.i/",
            "exampleEn": "We crossed the bay on a ferry.",
            "examplePt": "Atravessamos a baía em uma balsa."
          }
        ],
        "options": [
          "Bumper",
          "Harbor",
          "Tram",
          "Ferry"
        ],
        "correctAnswer": "Bumper",
        "contextSentence": "The front bumper protects the car.",
        "contextSentencePt": "O para-choque dianteiro protege o carro.",
        "explanation": "Exemplo: \"The front bumper protects the car.\" — O para-choque dianteiro protege o carro.",
        "phoneticHint": "\"bâm-per\" • /ˈbʌm.pər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tunnel",
        "visualEmoji": "🚇",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete / Scooter",
            "simplePronunciation": "scú-ter",
            "phonetic": "/ˈskuː.tər/",
            "exampleEn": "He rides an electric scooter.",
            "examplePt": "Ele anda de patinete elétrico."
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane accelerated on the runway.",
            "examplePt": "O avião acelerou na pista de pouso."
          },
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake",
            "translationPt": "Freio",
            "simplePronunciation": "brêik",
            "phonetic": "/breɪk/",
            "exampleEn": "Step on the brake to stop the car.",
            "examplePt": "Pise no freio para parar o carro."
          },
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel",
            "translationPt": "Túnel",
            "simplePronunciation": "tâ-nel",
            "phonetic": "/ˈtʌn.əl/",
            "exampleEn": "Turn on the headlights inside the tunnel.",
            "examplePt": "Acenda os faróis dentro do túnel."
          }
        ],
        "options": [
          "Scooter",
          "Runway",
          "Brake",
          "Tunnel"
        ],
        "correctAnswer": "Tunnel",
        "contextSentence": "Turn on the headlights inside the tunnel.",
        "contextSentencePt": "Acenda os faróis dentro do túnel.",
        "explanation": "Exemplo: \"Turn on the headlights inside the tunnel.\" — Acenda os faróis dentro do túnel.",
        "phoneticHint": "\"tâ-nel\" • /ˈtʌn.əl/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p22",
    "worldId": 0,
    "phaseNumber": 22,
    "themeId": "clothes",
    "themeTitle": "Roupas",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "title": "Roupas • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema 5 (Nível 1/4) • As 12 peças de roupa mais básicas do dia a dia",
    "pedagogicalObjective": "Dominar as 12 peças de vestuário essenciais: Shirt, Pants, Shoes, Dress, Shorts, Skirt, Jacket, Socks, Coat, Hat, Jeans e Bag.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Iniciamos o Tema 5 (Roupas • Módulo 1: Essenciais): Shirt (\"xârt\" = Camisa), Pants (\"pénts\" = Calça), Shoes (\"xúz\" = Sapatos), Dress (\"drés\" = Vestido), Shorts (\"xórts\" = Shorts/Bermuda) e Skirt (\"skârt\" = Saia).",
      "Também aprendemos Jacket (\"djé-ket\" = Jaqueta), Socks (\"sóks\" = Meias), Coat (\"côut\" = Casaco), Hat (\"rét\" = Chapéu), Jeans (\"djínz\" = Calça jeans) e Bag (\"bég\" = Bolsa/Sacola)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p22-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shirt",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean white shirt.",
            "examplePt": "Ele veste uma camisa branca limpa."
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco quente no inverno."
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag",
            "translationPt": "Bolsa / Sacola",
            "simplePronunciation": "bég",
            "phonetic": "/bæɡ/",
            "exampleEn": "She carries her books in a bag.",
            "examplePt": "Ela carrega seus livros em uma bolsa."
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu",
            "simplePronunciation": "rét",
            "phonetic": "/hæt/",
            "exampleEn": "Wear a hat to protect from the sun.",
            "examplePt": "Use um chapéu para se proteger do sol."
          }
        ],
        "options": [
          "Shirt",
          "Coat",
          "Bag",
          "Hat"
        ],
        "correctAnswer": "Shirt",
        "contextSentence": "He wears a clean white shirt.",
        "contextSentencePt": "Ele veste uma camisa branca limpa.",
        "explanation": "Exemplo: \"He wears a clean white shirt.\" — Ele veste uma camisa branca limpa.",
        "phoneticHint": "\"xârt\" • /ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pants",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia",
            "simplePronunciation": "skârt",
            "phonetic": "/skɜːrt/",
            "exampleEn": "Her blue skirt is very pretty.",
            "examplePt": "A saia azul dela é muito bonita."
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça",
            "simplePronunciation": "pénts",
            "phonetic": "/pænts/",
            "exampleEn": "These pants are very comfortable.",
            "examplePt": "Esta calça é muito confortável."
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias",
            "simplePronunciation": "sóks",
            "phonetic": "/sɑːks/",
            "exampleEn": "Put on clean cotton socks.",
            "examplePt": "Coloque meias de algodão limpas."
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda",
            "simplePronunciation": "xórts",
            "phonetic": "/ʃɔːrts/",
            "exampleEn": "I wear shorts on hot days.",
            "examplePt": "Eu uso bermuda em dias quentes."
          }
        ],
        "options": [
          "Skirt",
          "Pants",
          "Socks",
          "Shorts"
        ],
        "correctAnswer": "Pants",
        "contextSentence": "These pants are very comfortable.",
        "contextSentencePt": "Esta calça é muito confortável.",
        "explanation": "Exemplo: \"These pants are very comfortable.\" — Esta calça é muito confortável.",
        "phoneticHint": "\"pénts\" • /pænts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Shoes",
        "visualEmoji": "👞",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans",
            "simplePronunciation": "djínz",
            "phonetic": "/dʒiːnz/",
            "exampleEn": "Blue jeans go well with everything.",
            "examplePt": "Calça jeans azul combina com tudo."
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos",
            "simplePronunciation": "xúz",
            "phonetic": "/ʃuːz/",
            "exampleEn": "Take off your shoes at the door.",
            "examplePt": "Tire os sapatos na porta."
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta",
            "simplePronunciation": "djé-ket",
            "phonetic": "/ˈdʒæk.ɪt/",
            "exampleEn": "Put on a jacket before going out.",
            "examplePt": "Vista uma jaqueta antes de sair."
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido",
            "simplePronunciation": "drés",
            "phonetic": "/dres/",
            "exampleEn": "She bought a beautiful red dress.",
            "examplePt": "Ela comprou um lindo vestido vermelho."
          }
        ],
        "options": [
          "Jeans",
          "Shoes",
          "Jacket",
          "Dress"
        ],
        "correctAnswer": "Shoes",
        "contextSentence": "Take off your shoes at the door.",
        "contextSentencePt": "Tire os sapatos na porta.",
        "explanation": "Exemplo: \"Take off your shoes at the door.\" — Tire os sapatos na porta.",
        "phoneticHint": "\"xúz\" • /ʃuːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dress",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean white shirt.",
            "examplePt": "Ele veste uma camisa branca limpa."
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu",
            "simplePronunciation": "rét",
            "phonetic": "/hæt/",
            "exampleEn": "Wear a hat to protect from the sun.",
            "examplePt": "Use um chapéu para se proteger do sol."
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag",
            "translationPt": "Bolsa / Sacola",
            "simplePronunciation": "bég",
            "phonetic": "/bæɡ/",
            "exampleEn": "She carries her books in a bag.",
            "examplePt": "Ela carrega seus livros em uma bolsa."
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido",
            "simplePronunciation": "drés",
            "phonetic": "/dres/",
            "exampleEn": "She bought a beautiful red dress.",
            "examplePt": "Ela comprou um lindo vestido vermelho."
          }
        ],
        "options": [
          "Shirt",
          "Hat",
          "Bag",
          "Dress"
        ],
        "correctAnswer": "Dress",
        "contextSentence": "She bought a beautiful red dress.",
        "contextSentencePt": "Ela comprou um lindo vestido vermelho.",
        "explanation": "Exemplo: \"She bought a beautiful red dress.\" — Ela comprou um lindo vestido vermelho.",
        "phoneticHint": "\"drés\" • /dres/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Shorts",
        "visualEmoji": "🩳",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça",
            "simplePronunciation": "pénts",
            "phonetic": "/pænts/",
            "exampleEn": "These pants are very comfortable.",
            "examplePt": "Esta calça é muito confortável."
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco quente no inverno."
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda",
            "simplePronunciation": "xórts",
            "phonetic": "/ʃɔːrts/",
            "exampleEn": "I wear shorts on hot days.",
            "examplePt": "Eu uso bermuda em dias quentes."
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias",
            "simplePronunciation": "sóks",
            "phonetic": "/sɑːks/",
            "exampleEn": "Put on clean cotton socks.",
            "examplePt": "Coloque meias de algodão limpas."
          }
        ],
        "options": [
          "Pants",
          "Coat",
          "Shorts",
          "Socks"
        ],
        "correctAnswer": "Shorts",
        "contextSentence": "I wear shorts on hot days.",
        "contextSentencePt": "Eu uso bermuda em dias quentes.",
        "explanation": "Exemplo: \"I wear shorts on hot days.\" — Eu uso bermuda em dias quentes.",
        "phoneticHint": "\"xórts\" • /ʃɔːrts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Skirt",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia",
            "simplePronunciation": "skârt",
            "phonetic": "/skɜːrt/",
            "exampleEn": "Her blue skirt is very pretty.",
            "examplePt": "A saia azul dela é muito bonita."
          },
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean white shirt.",
            "examplePt": "Ele veste uma camisa branca limpa."
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos",
            "simplePronunciation": "xúz",
            "phonetic": "/ʃuːz/",
            "exampleEn": "Take off your shoes at the door.",
            "examplePt": "Tire os sapatos na porta."
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda",
            "simplePronunciation": "xórts",
            "phonetic": "/ʃɔːrts/",
            "exampleEn": "I wear shorts on hot days.",
            "examplePt": "Eu uso bermuda em dias quentes."
          }
        ],
        "options": [
          "Skirt",
          "Shirt",
          "Shoes",
          "Shorts"
        ],
        "correctAnswer": "Skirt",
        "contextSentence": "Her blue skirt is very pretty.",
        "contextSentencePt": "A saia azul dela é muito bonita.",
        "explanation": "Exemplo: \"Her blue skirt is very pretty.\" — A saia azul dela é muito bonita.",
        "phoneticHint": "\"skârt\" • /skɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Jacket",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans",
            "simplePronunciation": "djínz",
            "phonetic": "/dʒiːnz/",
            "exampleEn": "Blue jeans go well with everything.",
            "examplePt": "Calça jeans azul combina com tudo."
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu",
            "simplePronunciation": "rét",
            "phonetic": "/hæt/",
            "exampleEn": "Wear a hat to protect from the sun.",
            "examplePt": "Use um chapéu para se proteger do sol."
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta",
            "simplePronunciation": "djé-ket",
            "phonetic": "/ˈdʒæk.ɪt/",
            "exampleEn": "Put on a jacket before going out.",
            "examplePt": "Vista uma jaqueta antes de sair."
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido",
            "simplePronunciation": "drés",
            "phonetic": "/dres/",
            "exampleEn": "She bought a beautiful red dress.",
            "examplePt": "Ela comprou um lindo vestido vermelho."
          }
        ],
        "options": [
          "Jeans",
          "Hat",
          "Jacket",
          "Dress"
        ],
        "correctAnswer": "Jacket",
        "contextSentence": "Put on a jacket before going out.",
        "contextSentencePt": "Vista uma jaqueta antes de sair.",
        "explanation": "Exemplo: \"Put on a jacket before going out.\" — Vista uma jaqueta antes de sair.",
        "phoneticHint": "\"djé-ket\" • /ˈdʒæk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Socks",
        "visualEmoji": "🧦",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos",
            "simplePronunciation": "xúz",
            "phonetic": "/ʃuːz/",
            "exampleEn": "Take off your shoes at the door.",
            "examplePt": "Tire os sapatos na porta."
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias",
            "simplePronunciation": "sóks",
            "phonetic": "/sɑːks/",
            "exampleEn": "Put on clean cotton socks.",
            "examplePt": "Coloque meias de algodão limpas."
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça",
            "simplePronunciation": "pénts",
            "phonetic": "/pænts/",
            "exampleEn": "These pants are very comfortable.",
            "examplePt": "Esta calça é muito confortável."
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia",
            "simplePronunciation": "skârt",
            "phonetic": "/skɜːrt/",
            "exampleEn": "Her blue skirt is very pretty.",
            "examplePt": "A saia azul dela é muito bonita."
          }
        ],
        "options": [
          "Shoes",
          "Socks",
          "Pants",
          "Skirt"
        ],
        "correctAnswer": "Socks",
        "contextSentence": "Put on clean cotton socks.",
        "contextSentencePt": "Coloque meias de algodão limpas.",
        "explanation": "Exemplo: \"Put on clean cotton socks.\" — Coloque meias de algodão limpas.",
        "phoneticHint": "\"sóks\" • /sɑːks/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Coat",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda",
            "simplePronunciation": "xórts",
            "phonetic": "/ʃɔːrts/",
            "exampleEn": "I wear shorts on hot days.",
            "examplePt": "Eu uso bermuda em dias quentes."
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag",
            "translationPt": "Bolsa / Sacola",
            "simplePronunciation": "bég",
            "phonetic": "/bæɡ/",
            "exampleEn": "She carries her books in a bag.",
            "examplePt": "Ela carrega seus livros em uma bolsa."
          },
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean white shirt.",
            "examplePt": "Ele veste uma camisa branca limpa."
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco quente no inverno."
          }
        ],
        "options": [
          "Shorts",
          "Bag",
          "Shirt",
          "Coat"
        ],
        "correctAnswer": "Coat",
        "contextSentence": "You need a warm coat in winter.",
        "contextSentencePt": "Você precisa de um casaco quente no inverno.",
        "explanation": "Exemplo: \"You need a warm coat in winter.\" — Você precisa de um casaco quente no inverno.",
        "phoneticHint": "\"côut\" • /koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hat",
        "visualEmoji": "👒",
        "visualOptions": [
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu",
            "simplePronunciation": "rét",
            "phonetic": "/hæt/",
            "exampleEn": "Wear a hat to protect from the sun.",
            "examplePt": "Use um chapéu para se proteger do sol."
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos",
            "simplePronunciation": "xúz",
            "phonetic": "/ʃuːz/",
            "exampleEn": "Take off your shoes at the door.",
            "examplePt": "Tire os sapatos na porta."
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia",
            "simplePronunciation": "skârt",
            "phonetic": "/skɜːrt/",
            "exampleEn": "Her blue skirt is very pretty.",
            "examplePt": "A saia azul dela é muito bonita."
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta",
            "simplePronunciation": "djé-ket",
            "phonetic": "/ˈdʒæk.ɪt/",
            "exampleEn": "Put on a jacket before going out.",
            "examplePt": "Vista uma jaqueta antes de sair."
          }
        ],
        "options": [
          "Hat",
          "Shoes",
          "Skirt",
          "Jacket"
        ],
        "correctAnswer": "Hat",
        "contextSentence": "Wear a hat to protect from the sun.",
        "contextSentencePt": "Use um chapéu para se proteger do sol.",
        "explanation": "Exemplo: \"Wear a hat to protect from the sun.\" — Use um chapéu para se proteger do sol.",
        "phoneticHint": "\"rét\" • /hæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Jeans",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias",
            "simplePronunciation": "sóks",
            "phonetic": "/sɑːks/",
            "exampleEn": "Put on clean cotton socks.",
            "examplePt": "Coloque meias de algodão limpas."
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido",
            "simplePronunciation": "drés",
            "phonetic": "/dres/",
            "exampleEn": "She bought a beautiful red dress.",
            "examplePt": "Ela comprou um lindo vestido vermelho."
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça",
            "simplePronunciation": "pénts",
            "phonetic": "/pænts/",
            "exampleEn": "These pants are very comfortable.",
            "examplePt": "Esta calça é muito confortável."
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans",
            "simplePronunciation": "djínz",
            "phonetic": "/dʒiːnz/",
            "exampleEn": "Blue jeans go well with everything.",
            "examplePt": "Calça jeans azul combina com tudo."
          }
        ],
        "options": [
          "Socks",
          "Dress",
          "Pants",
          "Jeans"
        ],
        "correctAnswer": "Jeans",
        "contextSentence": "Blue jeans go well with everything.",
        "contextSentencePt": "Calça jeans azul combina com tudo.",
        "explanation": "Exemplo: \"Blue jeans go well with everything.\" — Calça jeans azul combina com tudo.",
        "phoneticHint": "\"djínz\" • /dʒiːnz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bag",
        "visualEmoji": "👜",
        "visualOptions": [
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean white shirt.",
            "examplePt": "Ele veste uma camisa branca limpa."
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda",
            "simplePronunciation": "xórts",
            "phonetic": "/ʃɔːrts/",
            "exampleEn": "I wear shorts on hot days.",
            "examplePt": "Eu uso bermuda em dias quentes."
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag",
            "translationPt": "Bolsa / Sacola",
            "simplePronunciation": "bég",
            "phonetic": "/bæɡ/",
            "exampleEn": "She carries her books in a bag.",
            "examplePt": "Ela carrega seus livros em uma bolsa."
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco quente no inverno."
          }
        ],
        "options": [
          "Shirt",
          "Shorts",
          "Bag",
          "Coat"
        ],
        "correctAnswer": "Bag",
        "contextSentence": "She carries her books in a bag.",
        "contextSentencePt": "Ela carrega seus livros em uma bolsa.",
        "explanation": "Exemplo: \"She carries her books in a bag.\" — Ela carrega seus livros em uma bolsa.",
        "phoneticHint": "\"bég\" • /bæɡ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p23",
    "worldId": 0,
    "phaseNumber": 23,
    "themeId": "clothes",
    "themeTitle": "Roupas",
    "frequencyLevel": "Módulo 2 • Comuns",
    "title": "Roupas • Módulo 2: Palavras Comuns",
    "subtitle": "Tema 5 (Nível 2/4) • 12 calçados, roupas casuais e acessórios comuns",
    "pedagogicalObjective": "Reconhecer roupas casuais e acessórios comuns: T-shirt, Sweater, Boots, Sandals, Sneakers, Glasses, Watch, Belt, Cap, Pajamas, Suit e Pocket.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 2 de Roupas praticamos palavras comuns: T-shirt (\"tí-xârt\" = Camiseta), Sweater (\"sué-ter\" = Suéter), Boots (\"búts\" = Botas), Sandals (\"sén-dals\" = Sandália), Sneakers (\"sní-kers\" = Tênis) e Glasses (\"glé-ses\" = Óculos).",
      "Também vemos Watch (\"uótch\" = Relógio de pulso), Belt (\"bélt\" = Cinto), Cap (\"kép\" = Boné), Pajamas (\"pa-djá-mas\" = Pijama), Suit (\"sút\" = Terno) e Pocket (\"pó-ket\" = Bolso).",
      "Logo após este módulo, você fará mais uma Lição Exclusiva de Pronomes!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p23-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "T-shirt",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Sandália / Chinelo",
            "simplePronunciation": "sén-dals",
            "phonetic": "/ˈsæn.dəlz/",
            "exampleEn": "Sandals are great for the beach.",
            "examplePt": "Sandálias são ótimas para a praia."
          },
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt",
            "translationPt": "Camiseta",
            "simplePronunciation": "tí-xârt",
            "phonetic": "/ˈtiː.ʃɜːrt/",
            "exampleEn": "I wear a cotton T-shirt at home.",
            "examplePt": "Eu uso uma camiseta de algodão em casa."
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné",
            "simplePronunciation": "kép",
            "phonetic": "/kæp/",
            "exampleEn": "He wears a blue cap outdoors.",
            "examplePt": "Ele usa um boné azul ao ar livre."
          },
          {
            "text": "Belt",
            "emoji": "👖",
            "label": "Belt",
            "translationPt": "Cinto",
            "simplePronunciation": "bélt",
            "phonetic": "/belt/",
            "exampleEn": "This brown leather belt fits well.",
            "examplePt": "Este cinto de couro marrom serve bem."
          }
        ],
        "options": [
          "Sandals",
          "T-shirt",
          "Cap",
          "Belt"
        ],
        "correctAnswer": "T-shirt",
        "contextSentence": "I wear a cotton T-shirt at home.",
        "contextSentencePt": "Eu uso uma camiseta de algodão em casa.",
        "explanation": "Exemplo: \"I wear a cotton T-shirt at home.\" — Eu uso uma camiseta de algodão em casa.",
        "phoneticHint": "\"tí-xârt\" • /ˈtiː.ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sweater",
        "visualEmoji": "🧶",
        "visualOptions": [
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit",
            "translationPt": "Terno",
            "simplePronunciation": "sút",
            "phonetic": "/suːt/",
            "exampleEn": "He wore a dark suit to the wedding.",
            "examplePt": "Ele usou um terno escuro no casamento."
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Blusa de lã",
            "simplePronunciation": "sué-ter",
            "phonetic": "/ˈswet.ər/",
            "exampleEn": "This wool sweater is very warm.",
            "examplePt": "Este suéter de lã é muito quentinho."
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama",
            "simplePronunciation": "pa-djá-mas",
            "phonetic": "/pəˈdʒæm.əz/",
            "exampleEn": "Put on your pajamas before bed.",
            "examplePt": "Vista seu pijama antes de dormir."
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis",
            "simplePronunciation": "sní-kers",
            "phonetic": "/ˈsniː.kərz/",
            "exampleEn": "Put on your sneakers for the walk.",
            "examplePt": "Calce seus tênis para a caminhada."
          }
        ],
        "options": [
          "Suit",
          "Sweater",
          "Pajamas",
          "Sneakers"
        ],
        "correctAnswer": "Sweater",
        "contextSentence": "This wool sweater is very warm.",
        "contextSentencePt": "Este suéter de lã é muito quentinho.",
        "explanation": "Exemplo: \"This wool sweater is very warm.\" — Este suéter de lã é muito quentinho.",
        "phoneticHint": "\"sué-ter\" • /ˈswet.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Boots",
        "visualEmoji": "🥾",
        "visualOptions": [
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso",
            "simplePronunciation": "uótch",
            "phonetic": "/wɑːtʃ/",
            "exampleEn": "What time is it on your watch?",
            "examplePt": "Que horas são no seu relógio de pulso?"
          },
          {
            "text": "Pocket",
            "emoji": "👖",
            "label": "Pocket",
            "translationPt": "Bolso",
            "simplePronunciation": "pó-ket",
            "phonetic": "/ˈpɑː.kɪt/",
            "exampleEn": "My keys are in my pants pocket.",
            "examplePt": "Minhas chaves estão no bolso da calça."
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos",
            "simplePronunciation": "glé-ses",
            "phonetic": "/ˈɡlæs.ɪz/",
            "exampleEn": "I need my glasses to read.",
            "examplePt": "Preciso dos meus óculos para ler."
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas",
            "simplePronunciation": "búts",
            "phonetic": "/buːts/",
            "exampleEn": "Wear boots when it rains.",
            "examplePt": "Use botas quando chover."
          }
        ],
        "options": [
          "Watch",
          "Pocket",
          "Glasses",
          "Boots"
        ],
        "correctAnswer": "Boots",
        "contextSentence": "Wear boots when it rains.",
        "contextSentencePt": "Use botas quando chover.",
        "explanation": "Exemplo: \"Wear boots when it rains.\" — Use botas quando chover.",
        "phoneticHint": "\"búts\" • /buːts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sandals",
        "visualEmoji": "🩴",
        "visualOptions": [
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt",
            "translationPt": "Camiseta",
            "simplePronunciation": "tí-xârt",
            "phonetic": "/ˈtiː.ʃɜːrt/",
            "exampleEn": "I wear a cotton T-shirt at home.",
            "examplePt": "Eu uso uma camiseta de algodão em casa."
          },
          {
            "text": "Belt",
            "emoji": "👖",
            "label": "Belt",
            "translationPt": "Cinto",
            "simplePronunciation": "bélt",
            "phonetic": "/belt/",
            "exampleEn": "This brown leather belt fits well.",
            "examplePt": "Este cinto de couro marrom serve bem."
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Sandália / Chinelo",
            "simplePronunciation": "sén-dals",
            "phonetic": "/ˈsæn.dəlz/",
            "exampleEn": "Sandals are great for the beach.",
            "examplePt": "Sandálias são ótimas para a praia."
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné",
            "simplePronunciation": "kép",
            "phonetic": "/kæp/",
            "exampleEn": "He wears a blue cap outdoors.",
            "examplePt": "Ele usa um boné azul ao ar livre."
          }
        ],
        "options": [
          "T-shirt",
          "Belt",
          "Sandals",
          "Cap"
        ],
        "correctAnswer": "Sandals",
        "contextSentence": "Sandals are great for the beach.",
        "contextSentencePt": "Sandálias são ótimas para a praia.",
        "explanation": "Exemplo: \"Sandals are great for the beach.\" — Sandálias são ótimas para a praia.",
        "phoneticHint": "\"sén-dals\" • /ˈsæn.dəlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sneakers",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis",
            "simplePronunciation": "sní-kers",
            "phonetic": "/ˈsniː.kərz/",
            "exampleEn": "Put on your sneakers for the walk.",
            "examplePt": "Calce seus tênis para a caminhada."
          },
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit",
            "translationPt": "Terno",
            "simplePronunciation": "sút",
            "phonetic": "/suːt/",
            "exampleEn": "He wore a dark suit to the wedding.",
            "examplePt": "Ele usou um terno escuro no casamento."
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Blusa de lã",
            "simplePronunciation": "sué-ter",
            "phonetic": "/ˈswet.ər/",
            "exampleEn": "This wool sweater is very warm.",
            "examplePt": "Este suéter de lã é muito quentinho."
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama",
            "simplePronunciation": "pa-djá-mas",
            "phonetic": "/pəˈdʒæm.əz/",
            "exampleEn": "Put on your pajamas before bed.",
            "examplePt": "Vista seu pijama antes de dormir."
          }
        ],
        "options": [
          "Sneakers",
          "Suit",
          "Sweater",
          "Pajamas"
        ],
        "correctAnswer": "Sneakers",
        "contextSentence": "Put on your sneakers for the walk.",
        "contextSentencePt": "Calce seus tênis para a caminhada.",
        "explanation": "Exemplo: \"Put on your sneakers for the walk.\" — Calce seus tênis para a caminhada.",
        "phoneticHint": "\"sní-kers\" • /ˈsniː.kərz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
        "visualOptions": [
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Blusa de lã",
            "simplePronunciation": "sué-ter",
            "phonetic": "/ˈswet.ər/",
            "exampleEn": "This wool sweater is very warm.",
            "examplePt": "Este suéter de lã é muito quentinho."
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas",
            "simplePronunciation": "búts",
            "phonetic": "/buːts/",
            "exampleEn": "Wear boots when it rains.",
            "examplePt": "Use botas quando chover."
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos",
            "simplePronunciation": "glé-ses",
            "phonetic": "/ˈɡlæs.ɪz/",
            "exampleEn": "I need my glasses to read.",
            "examplePt": "Preciso dos meus óculos para ler."
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Sandália / Chinelo",
            "simplePronunciation": "sén-dals",
            "phonetic": "/ˈsæn.dəlz/",
            "exampleEn": "Sandals are great for the beach.",
            "examplePt": "Sandálias são ótimas para a praia."
          }
        ],
        "options": [
          "Sweater",
          "Boots",
          "Glasses",
          "Sandals"
        ],
        "correctAnswer": "Glasses",
        "contextSentence": "I need my glasses to read.",
        "contextSentencePt": "Preciso dos meus óculos para ler.",
        "explanation": "Exemplo: \"I need my glasses to read.\" — Preciso dos meus óculos para ler.",
        "phoneticHint": "\"glé-ses\" • /ˈɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Watch",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas",
            "simplePronunciation": "búts",
            "phonetic": "/buːts/",
            "exampleEn": "Wear boots when it rains.",
            "examplePt": "Use botas quando chover."
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso",
            "simplePronunciation": "uótch",
            "phonetic": "/wɑːtʃ/",
            "exampleEn": "What time is it on your watch?",
            "examplePt": "Que horas são no seu relógio de pulso?"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis",
            "simplePronunciation": "sní-kers",
            "phonetic": "/ˈsniː.kərz/",
            "exampleEn": "Put on your sneakers for the walk.",
            "examplePt": "Calce seus tênis para a caminhada."
          },
          {
            "text": "Pocket",
            "emoji": "👖",
            "label": "Pocket",
            "translationPt": "Bolso",
            "simplePronunciation": "pó-ket",
            "phonetic": "/ˈpɑː.kɪt/",
            "exampleEn": "My keys are in my pants pocket.",
            "examplePt": "Minhas chaves estão no bolso da calça."
          }
        ],
        "options": [
          "Boots",
          "Watch",
          "Sneakers",
          "Pocket"
        ],
        "correctAnswer": "Watch",
        "contextSentence": "What time is it on your watch?",
        "contextSentencePt": "Que horas são no seu relógio de pulso?",
        "explanation": "Exemplo: \"What time is it on your watch?\" — Que horas são no seu relógio de pulso?",
        "phoneticHint": "\"uótch\" • /wɑːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Belt",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos",
            "simplePronunciation": "glé-ses",
            "phonetic": "/ˈɡlæs.ɪz/",
            "exampleEn": "I need my glasses to read.",
            "examplePt": "Preciso dos meus óculos para ler."
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso",
            "simplePronunciation": "uótch",
            "phonetic": "/wɑːtʃ/",
            "exampleEn": "What time is it on your watch?",
            "examplePt": "Que horas são no seu relógio de pulso?"
          },
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt",
            "translationPt": "Camiseta",
            "simplePronunciation": "tí-xârt",
            "phonetic": "/ˈtiː.ʃɜːrt/",
            "exampleEn": "I wear a cotton T-shirt at home.",
            "examplePt": "Eu uso uma camiseta de algodão em casa."
          },
          {
            "text": "Belt",
            "emoji": "👖",
            "label": "Belt",
            "translationPt": "Cinto",
            "simplePronunciation": "bélt",
            "phonetic": "/belt/",
            "exampleEn": "This brown leather belt fits well.",
            "examplePt": "Este cinto de couro marrom serve bem."
          }
        ],
        "options": [
          "Glasses",
          "Watch",
          "T-shirt",
          "Belt"
        ],
        "correctAnswer": "Belt",
        "contextSentence": "This brown leather belt fits well.",
        "contextSentencePt": "Este cinto de couro marrom serve bem.",
        "explanation": "Exemplo: \"This brown leather belt fits well.\" — Este cinto de couro marrom serve bem.",
        "phoneticHint": "\"bélt\" • /belt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cap",
        "visualEmoji": "🧢",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné",
            "simplePronunciation": "kép",
            "phonetic": "/kæp/",
            "exampleEn": "He wears a blue cap outdoors.",
            "examplePt": "Ele usa um boné azul ao ar livre."
          },
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt",
            "translationPt": "Camiseta",
            "simplePronunciation": "tí-xârt",
            "phonetic": "/ˈtiː.ʃɜːrt/",
            "exampleEn": "I wear a cotton T-shirt at home.",
            "examplePt": "Eu uso uma camiseta de algodão em casa."
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos",
            "simplePronunciation": "glé-ses",
            "phonetic": "/ˈɡlæs.ɪz/",
            "exampleEn": "I need my glasses to read.",
            "examplePt": "Preciso dos meus óculos para ler."
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso",
            "simplePronunciation": "uótch",
            "phonetic": "/wɑːtʃ/",
            "exampleEn": "What time is it on your watch?",
            "examplePt": "Que horas são no seu relógio de pulso?"
          }
        ],
        "options": [
          "Cap",
          "T-shirt",
          "Glasses",
          "Watch"
        ],
        "correctAnswer": "Cap",
        "contextSentence": "He wears a blue cap outdoors.",
        "contextSentencePt": "Ele usa um boné azul ao ar livre.",
        "explanation": "Exemplo: \"He wears a blue cap outdoors.\" — Ele usa um boné azul ao ar livre.",
        "phoneticHint": "\"kép\" • /kæp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pajamas",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Blusa de lã",
            "simplePronunciation": "sué-ter",
            "phonetic": "/ˈswet.ər/",
            "exampleEn": "This wool sweater is very warm.",
            "examplePt": "Este suéter de lã é muito quentinho."
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis",
            "simplePronunciation": "sní-kers",
            "phonetic": "/ˈsniː.kərz/",
            "exampleEn": "Put on your sneakers for the walk.",
            "examplePt": "Calce seus tênis para a caminhada."
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Sandália / Chinelo",
            "simplePronunciation": "sén-dals",
            "phonetic": "/ˈsæn.dəlz/",
            "exampleEn": "Sandals are great for the beach.",
            "examplePt": "Sandálias são ótimas para a praia."
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama",
            "simplePronunciation": "pa-djá-mas",
            "phonetic": "/pəˈdʒæm.əz/",
            "exampleEn": "Put on your pajamas before bed.",
            "examplePt": "Vista seu pijama antes de dormir."
          }
        ],
        "options": [
          "Sweater",
          "Sneakers",
          "Sandals",
          "Pajamas"
        ],
        "correctAnswer": "Pajamas",
        "contextSentence": "Put on your pajamas before bed.",
        "contextSentencePt": "Vista seu pijama antes de dormir.",
        "explanation": "Exemplo: \"Put on your pajamas before bed.\" — Vista seu pijama antes de dormir.",
        "phoneticHint": "\"pa-djá-mas\" • /pəˈdʒæm.əz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Suit",
        "visualEmoji": "🤵",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné",
            "simplePronunciation": "kép",
            "phonetic": "/kæp/",
            "exampleEn": "He wears a blue cap outdoors.",
            "examplePt": "Ele usa um boné azul ao ar livre."
          },
          {
            "text": "Pocket",
            "emoji": "👖",
            "label": "Pocket",
            "translationPt": "Bolso",
            "simplePronunciation": "pó-ket",
            "phonetic": "/ˈpɑː.kɪt/",
            "exampleEn": "My keys are in my pants pocket.",
            "examplePt": "Minhas chaves estão no bolso da calça."
          },
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit",
            "translationPt": "Terno",
            "simplePronunciation": "sút",
            "phonetic": "/suːt/",
            "exampleEn": "He wore a dark suit to the wedding.",
            "examplePt": "Ele usou um terno escuro no casamento."
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama",
            "simplePronunciation": "pa-djá-mas",
            "phonetic": "/pəˈdʒæm.əz/",
            "exampleEn": "Put on your pajamas before bed.",
            "examplePt": "Vista seu pijama antes de dormir."
          }
        ],
        "options": [
          "Cap",
          "Pocket",
          "Suit",
          "Pajamas"
        ],
        "correctAnswer": "Suit",
        "contextSentence": "He wore a dark suit to the wedding.",
        "contextSentencePt": "Ele usou um terno escuro no casamento.",
        "explanation": "Exemplo: \"He wore a dark suit to the wedding.\" — Ele usou um terno escuro no casamento.",
        "phoneticHint": "\"sút\" • /suːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pocket",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Pocket",
            "emoji": "👖",
            "label": "Pocket",
            "translationPt": "Bolso",
            "simplePronunciation": "pó-ket",
            "phonetic": "/ˈpɑː.kɪt/",
            "exampleEn": "My keys are in my pants pocket.",
            "examplePt": "Minhas chaves estão no bolso da calça."
          },
          {
            "text": "Belt",
            "emoji": "👖",
            "label": "Belt",
            "translationPt": "Cinto",
            "simplePronunciation": "bélt",
            "phonetic": "/belt/",
            "exampleEn": "This brown leather belt fits well.",
            "examplePt": "Este cinto de couro marrom serve bem."
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos",
            "simplePronunciation": "glé-ses",
            "phonetic": "/ˈɡlæs.ɪz/",
            "exampleEn": "I need my glasses to read.",
            "examplePt": "Preciso dos meus óculos para ler."
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas",
            "simplePronunciation": "búts",
            "phonetic": "/buːts/",
            "exampleEn": "Wear boots when it rains.",
            "examplePt": "Use botas quando chover."
          }
        ],
        "options": [
          "Pocket",
          "Belt",
          "Glasses",
          "Boots"
        ],
        "correctAnswer": "Pocket",
        "contextSentence": "My keys are in my pants pocket.",
        "contextSentencePt": "Minhas chaves estão no bolso da calça.",
        "explanation": "Exemplo: \"My keys are in my pants pocket.\" — Minhas chaves estão no bolso da calça.",
        "phoneticHint": "\"pó-ket\" • /ˈpɑː.kɪt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p24",
    "worldId": 0,
    "phaseNumber": 24,
    "title": "Lição de Pronomes VI • Prática Geral II (Reflexivos a Relativos)",
    "subtitle": "Módulo de Pronomes 6/6 (Após 18 de Vocabulário) • Frases do Dia a Dia + Voz da Professora",
    "pedagogicalObjective": "Consolidar todas as famílias de pronomes com frases práticas de Reflexivos, Interrogativos, Indefinidos e Relativos.",
    "type": "boss",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à 6ª Lição Exclusiva de Pronomes (após 18 módulos de vocabulário)!",
      "Aqui você consolida as perguntas com Interrogativos e as frases com Indefinidos e Relativos."
    ],
    "xpReward": 100,
    "gemsReward": 40,
    "exercises": [
      {
        "id": "w0-p24-pron-1",
        "type": "pair-match",
        "conceptTitle": "Prática • Perguntas do Dia a Dia com Interrogativos",
        "conceptHeader": "Vamos ligar perguntas reais usando Who (Quem), Where (Onde), What (Qual/O quê) e Whose (De quem)!",
        "teacherAudioPt": "/audio/teacher/pronoun_6.wav",
        "prompt": "🤝 Associe cada pergunta em inglês ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p24-b1-pi1",
            "en": "Who is at the door?",
            "emoji": "🚪",
            "phonetic": "/huː ɪz æt ðə dɔːr/",
            "pt": "Quem está na porta?",
            "tipPt": "Isso! \"Who\" pergunta sobre pessoas!"
          },
          {
            "id": "w0-p24-b1-pi2",
            "en": "Where is my shirt?",
            "emoji": "👔",
            "phonetic": "/wer ɪz maɪ ʃɜːrt/",
            "pt": "Onde está a minha camisa?",
            "tipPt": "Muito bem! \"Where\" pergunta o lugar!"
          },
          {
            "id": "w0-p24-b1-pi3",
            "en": "Whose coat is this?",
            "emoji": "🧥",
            "phonetic": "/huːz koʊt ɪz ðɪs/",
            "pt": "De quem é este casaco?",
            "tipPt": "Perfeito! \"Whose\" pergunta de quem é!"
          },
          {
            "id": "w0-p24-b1-pi4",
            "en": "What is in the box?",
            "emoji": "🎁",
            "phonetic": "/wɑːt ɪz ɪn ðə bɑːks/",
            "pt": "O que tem dentro da caixa?",
            "tipPt": "Lindo! \"What\" pergunta sobre coisas!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Who is at the door? (Quem está na porta?), Where is my shirt? (Onde está minha camisa?), Whose coat is this? (De quem é este casaco?), How are you? (Como vai você?).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p24-pron-2",
        "type": "pair-match",
        "conceptTitle": "Prática • Frases do Cotidiano com Relativos e Indefinidos",
        "conceptHeader": "Vamos ligar frases reais usando as pontezinhas dos Pronomes Relativos \"Who, Which, That, Where\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_8.wav",
        "prompt": "🤝 Associe cada frase com Pronome Relativo ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p24-b2-rel5",
            "en": "The teacher who teaches",
            "emoji": "👩‍🏫",
            "phonetic": "/ðə ˈtiː.tʃər huː ˈtiː.tʃɪz/",
            "pt": "A professora que ensina (pessoa = who)",
            "tipPt": "Isso! Pessoa usa a pontezinha \"who\"!"
          },
          {
            "id": "w0-p24-b2-rel6",
            "en": "The key which opens",
            "emoji": "🔑",
            "phonetic": "/ðə kiː wɪtʃ ˈoʊ.pənz/",
            "pt": "A chave que abre (objeto = which)",
            "tipPt": "Muito bem! Objeto usa a pontezinha \"which\"!"
          },
          {
            "id": "w0-p24-b2-rel7",
            "en": "The house where I live",
            "emoji": "🏠",
            "phonetic": "/ðə haʊs wer aɪ lɪv/",
            "pt": "A casa onde eu moro (lugar = where)",
            "tipPt": "Perfeito! Lugar usa a pontezinha \"where\"!"
          },
          {
            "id": "w0-p24-b2-rel8",
            "en": "The car that is red",
            "emoji": "🚗",
            "phonetic": "/ðə kɑːr ðæt ɪz red/",
            "pt": "O carro que é vermelho (curinga = that)",
            "tipPt": "Parabéns! Você dominou todas as famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "The teacher who teaches (A professora que ensina), The key which opens (A chave que abre), The house where I live (A casa onde eu moro), The car that is red (O carro que é vermelho).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p25",
    "worldId": 0,
    "phaseNumber": 25,
    "themeId": "clothes",
    "themeTitle": "Roupas",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "title": "Roupas • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema 5 (Nível 3/4) • 12 acessórios pessoais e partes das roupas",
    "pedagogicalObjective": "Aprender acessórios e partes das roupas: Uniform, Tie, Scarf, Gloves, Ring, Necklace, Wallet, Umbrella, Button, Zipper, Sleeve e Collar.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 3 de Roupas aprendemos palavras intermediárias: Uniform (\"iú-ni-fórm\" = Uniforme), Tie (\"tái\" = Gravata), Scarf (\"scárf\" = Cachecol), Gloves (\"glâvz\" = Luvas), Ring (\"ríng\" = Anel) e Necklace (\"nék-les\" = Colar).",
      "E completamos com Wallet (\"uó-let\" = Carteira), Umbrella (\"âm-bré-la\" = Guarda-chuva), Button (\"bâ-ton\" = Botão), Zipper (\"zí-per\" = Zíper), Sleeve (\"slív\" = Manga) e Collar (\"có-lar\" = Gola/Colarinho)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p25-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Uniform",
        "visualEmoji": "🎽",
        "visualOptions": [
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança",
            "simplePronunciation": "ríng",
            "phonetic": "/rɪŋ/",
            "exampleEn": "She wears a gold ring on her finger.",
            "examplePt": "Ela usa um anel de ouro no dedo."
          },
          {
            "text": "Button",
            "emoji": "🔘",
            "label": "Button",
            "translationPt": "Botão de roupa",
            "simplePronunciation": "bâ-ton",
            "phonetic": "/ˈbʌt.ən/",
            "exampleEn": "Fasten the top button of your shirt.",
            "examplePt": "Abotoe o botão de cima da sua camisa."
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva",
            "simplePronunciation": "âm-bré-la",
            "phonetic": "/ʌmˈbrel.ə/",
            "exampleEn": "Take an umbrella in case it rains.",
            "examplePt": "Leve um guarda-chuva caso chova."
          },
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform",
            "translationPt": "Uniforme",
            "simplePronunciation": "iú-ni-fórm",
            "phonetic": "/ˈjuː.nə.fɔːrm/",
            "exampleEn": "Students wear a school uniform.",
            "examplePt": "Os alunos usam uniforme escolar."
          }
        ],
        "options": [
          "Ring",
          "Button",
          "Umbrella",
          "Uniform"
        ],
        "correctAnswer": "Uniform",
        "contextSentence": "Students wear a school uniform.",
        "contextSentencePt": "Os alunos usam uniforme escolar.",
        "explanation": "Exemplo: \"Students wear a school uniform.\" — Os alunos usam uniforme escolar.",
        "phoneticHint": "\"iú-ni-fórm\" • /ˈjuː.nə.fɔːrm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Tie",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar",
            "translationPt": "Gola / Colarinho",
            "simplePronunciation": "có-lar",
            "phonetic": "/ˈkɑː.lər/",
            "exampleEn": "Straighten your shirt collar.",
            "examplePt": "Arrume a gola da sua camisa."
          },
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve",
            "translationPt": "Manga da camisa",
            "simplePronunciation": "slív",
            "phonetic": "/sliːv/",
            "exampleEn": "Roll up your shirt sleeves.",
            "examplePt": "Dobre as mangas da sua camisa."
          },
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie",
            "translationPt": "Gravata",
            "simplePronunciation": "tái",
            "phonetic": "/taɪ/",
            "exampleEn": "He wears a red tie to work.",
            "examplePt": "Ele usa uma gravata vermelha para trabalhar."
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar",
            "simplePronunciation": "nék-les",
            "phonetic": "/ˈnek.lɪs/",
            "exampleEn": "That silver necklace is lovely.",
            "examplePt": "Aquele colar de prata é lindo."
          }
        ],
        "options": [
          "Collar",
          "Sleeve",
          "Tie",
          "Necklace"
        ],
        "correctAnswer": "Tie",
        "contextSentence": "He wears a red tie to work.",
        "contextSentencePt": "Ele usa uma gravata vermelha para trabalhar.",
        "explanation": "Exemplo: \"He wears a red tie to work.\" — Ele usa uma gravata vermelha para trabalhar.",
        "phoneticHint": "\"tái\" • /taɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Scarf",
        "visualEmoji": "🧣",
        "visualOptions": [
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol",
            "simplePronunciation": "scárf",
            "phonetic": "/skɑːrf/",
            "exampleEn": "Wrap a soft scarf around your neck.",
            "examplePt": "Enrole um cachecol macio no pescoço."
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira",
            "simplePronunciation": "uó-let",
            "phonetic": "/ˈwɑː.lɪt/",
            "exampleEn": "Keep your money inside the wallet.",
            "examplePt": "Guarde seu dinheiro dentro da carteira."
          },
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper",
            "translationPt": "Zíper",
            "simplePronunciation": "zí-per",
            "phonetic": "/ˈzɪp.ər/",
            "exampleEn": "Close the jacket zipper.",
            "examplePt": "Feche o zíper da jaqueta."
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas",
            "simplePronunciation": "glâvz",
            "phonetic": "/ɡlʌvz/",
            "exampleEn": "Gloves keep your hands warm.",
            "examplePt": "As luvas mantêm suas mãos aquecidas."
          }
        ],
        "options": [
          "Scarf",
          "Wallet",
          "Zipper",
          "Gloves"
        ],
        "correctAnswer": "Scarf",
        "contextSentence": "Wrap a soft scarf around your neck.",
        "contextSentencePt": "Enrole um cachecol macio no pescoço.",
        "explanation": "Exemplo: \"Wrap a soft scarf around your neck.\" — Enrole um cachecol macio no pescoço.",
        "phoneticHint": "\"scárf\" • /skɑːrf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Gloves",
        "visualEmoji": "🧤",
        "visualOptions": [
          {
            "text": "Button",
            "emoji": "🔘",
            "label": "Button",
            "translationPt": "Botão de roupa",
            "simplePronunciation": "bâ-ton",
            "phonetic": "/ˈbʌt.ən/",
            "exampleEn": "Fasten the top button of your shirt.",
            "examplePt": "Abotoe o botão de cima da sua camisa."
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva",
            "simplePronunciation": "âm-bré-la",
            "phonetic": "/ʌmˈbrel.ə/",
            "exampleEn": "Take an umbrella in case it rains.",
            "examplePt": "Leve um guarda-chuva caso chova."
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas",
            "simplePronunciation": "glâvz",
            "phonetic": "/ɡlʌvz/",
            "exampleEn": "Gloves keep your hands warm.",
            "examplePt": "As luvas mantêm suas mãos aquecidas."
          },
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform",
            "translationPt": "Uniforme",
            "simplePronunciation": "iú-ni-fórm",
            "phonetic": "/ˈjuː.nə.fɔːrm/",
            "exampleEn": "Students wear a school uniform.",
            "examplePt": "Os alunos usam uniforme escolar."
          }
        ],
        "options": [
          "Button",
          "Umbrella",
          "Gloves",
          "Uniform"
        ],
        "correctAnswer": "Gloves",
        "contextSentence": "Gloves keep your hands warm.",
        "contextSentencePt": "As luvas mantêm suas mãos aquecidas.",
        "explanation": "Exemplo: \"Gloves keep your hands warm.\" — As luvas mantêm suas mãos aquecidas.",
        "phoneticHint": "\"glâvz\" • /ɡlʌvz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ring",
        "visualEmoji": "💍",
        "visualOptions": [
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar",
            "translationPt": "Gola / Colarinho",
            "simplePronunciation": "có-lar",
            "phonetic": "/ˈkɑː.lər/",
            "exampleEn": "Straighten your shirt collar.",
            "examplePt": "Arrume a gola da sua camisa."
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança",
            "simplePronunciation": "ríng",
            "phonetic": "/rɪŋ/",
            "exampleEn": "She wears a gold ring on her finger.",
            "examplePt": "Ela usa um anel de ouro no dedo."
          },
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve",
            "translationPt": "Manga da camisa",
            "simplePronunciation": "slív",
            "phonetic": "/sliːv/",
            "exampleEn": "Roll up your shirt sleeves.",
            "examplePt": "Dobre as mangas da sua camisa."
          },
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie",
            "translationPt": "Gravata",
            "simplePronunciation": "tái",
            "phonetic": "/taɪ/",
            "exampleEn": "He wears a red tie to work.",
            "examplePt": "Ele usa uma gravata vermelha para trabalhar."
          }
        ],
        "options": [
          "Collar",
          "Ring",
          "Sleeve",
          "Tie"
        ],
        "correctAnswer": "Ring",
        "contextSentence": "She wears a gold ring on her finger.",
        "contextSentencePt": "Ela usa um anel de ouro no dedo.",
        "explanation": "Exemplo: \"She wears a gold ring on her finger.\" — Ela usa um anel de ouro no dedo.",
        "phoneticHint": "\"ríng\" • /rɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Necklace",
        "visualEmoji": "📿",
        "visualOptions": [
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol",
            "simplePronunciation": "scárf",
            "phonetic": "/skɑːrf/",
            "exampleEn": "Wrap a soft scarf around your neck.",
            "examplePt": "Enrole um cachecol macio no pescoço."
          },
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform",
            "translationPt": "Uniforme",
            "simplePronunciation": "iú-ni-fórm",
            "phonetic": "/ˈjuː.nə.fɔːrm/",
            "exampleEn": "Students wear a school uniform.",
            "examplePt": "Os alunos usam uniforme escolar."
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança",
            "simplePronunciation": "ríng",
            "phonetic": "/rɪŋ/",
            "exampleEn": "She wears a gold ring on her finger.",
            "examplePt": "Ela usa um anel de ouro no dedo."
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar",
            "simplePronunciation": "nék-les",
            "phonetic": "/ˈnek.lɪs/",
            "exampleEn": "That silver necklace is lovely.",
            "examplePt": "Aquele colar de prata é lindo."
          }
        ],
        "options": [
          "Scarf",
          "Uniform",
          "Ring",
          "Necklace"
        ],
        "correctAnswer": "Necklace",
        "contextSentence": "That silver necklace is lovely.",
        "contextSentencePt": "Aquele colar de prata é lindo.",
        "explanation": "Exemplo: \"That silver necklace is lovely.\" — Aquele colar de prata é lindo.",
        "phoneticHint": "\"nék-les\" • /ˈnek.lɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wallet",
        "visualEmoji": "👛",
        "visualOptions": [
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira",
            "simplePronunciation": "uó-let",
            "phonetic": "/ˈwɑː.lɪt/",
            "exampleEn": "Keep your money inside the wallet.",
            "examplePt": "Guarde seu dinheiro dentro da carteira."
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol",
            "simplePronunciation": "scárf",
            "phonetic": "/skɑːrf/",
            "exampleEn": "Wrap a soft scarf around your neck.",
            "examplePt": "Enrole um cachecol macio no pescoço."
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas",
            "simplePronunciation": "glâvz",
            "phonetic": "/ɡlʌvz/",
            "exampleEn": "Gloves keep your hands warm.",
            "examplePt": "As luvas mantêm suas mãos aquecidas."
          },
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper",
            "translationPt": "Zíper",
            "simplePronunciation": "zí-per",
            "phonetic": "/ˈzɪp.ər/",
            "exampleEn": "Close the jacket zipper.",
            "examplePt": "Feche o zíper da jaqueta."
          }
        ],
        "options": [
          "Wallet",
          "Scarf",
          "Gloves",
          "Zipper"
        ],
        "correctAnswer": "Wallet",
        "contextSentence": "Keep your money inside the wallet.",
        "contextSentencePt": "Guarde seu dinheiro dentro da carteira.",
        "explanation": "Exemplo: \"Keep your money inside the wallet.\" — Guarde seu dinheiro dentro da carteira.",
        "phoneticHint": "\"uó-let\" • /ˈwɑː.lɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Umbrella",
        "visualEmoji": "☂️",
        "visualOptions": [
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar",
            "translationPt": "Gola / Colarinho",
            "simplePronunciation": "có-lar",
            "phonetic": "/ˈkɑː.lər/",
            "exampleEn": "Straighten your shirt collar.",
            "examplePt": "Arrume a gola da sua camisa."
          },
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie",
            "translationPt": "Gravata",
            "simplePronunciation": "tái",
            "phonetic": "/taɪ/",
            "exampleEn": "He wears a red tie to work.",
            "examplePt": "Ele usa uma gravata vermelha para trabalhar."
          },
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve",
            "translationPt": "Manga da camisa",
            "simplePronunciation": "slív",
            "phonetic": "/sliːv/",
            "exampleEn": "Roll up your shirt sleeves.",
            "examplePt": "Dobre as mangas da sua camisa."
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva",
            "simplePronunciation": "âm-bré-la",
            "phonetic": "/ʌmˈbrel.ə/",
            "exampleEn": "Take an umbrella in case it rains.",
            "examplePt": "Leve um guarda-chuva caso chova."
          }
        ],
        "options": [
          "Collar",
          "Tie",
          "Sleeve",
          "Umbrella"
        ],
        "correctAnswer": "Umbrella",
        "contextSentence": "Take an umbrella in case it rains.",
        "contextSentencePt": "Leve um guarda-chuva caso chova.",
        "explanation": "Exemplo: \"Take an umbrella in case it rains.\" — Leve um guarda-chuva caso chova.",
        "phoneticHint": "\"âm-bré-la\" • /ʌmˈbrel.ə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Button",
        "visualEmoji": "🔘",
        "visualOptions": [
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar",
            "simplePronunciation": "nék-les",
            "phonetic": "/ˈnek.lɪs/",
            "exampleEn": "That silver necklace is lovely.",
            "examplePt": "Aquele colar de prata é lindo."
          },
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform",
            "translationPt": "Uniforme",
            "simplePronunciation": "iú-ni-fórm",
            "phonetic": "/ˈjuː.nə.fɔːrm/",
            "exampleEn": "Students wear a school uniform.",
            "examplePt": "Os alunos usam uniforme escolar."
          },
          {
            "text": "Button",
            "emoji": "🔘",
            "label": "Button",
            "translationPt": "Botão de roupa",
            "simplePronunciation": "bâ-ton",
            "phonetic": "/ˈbʌt.ən/",
            "exampleEn": "Fasten the top button of your shirt.",
            "examplePt": "Abotoe o botão de cima da sua camisa."
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança",
            "simplePronunciation": "ríng",
            "phonetic": "/rɪŋ/",
            "exampleEn": "She wears a gold ring on her finger.",
            "examplePt": "Ela usa um anel de ouro no dedo."
          }
        ],
        "options": [
          "Necklace",
          "Uniform",
          "Button",
          "Ring"
        ],
        "correctAnswer": "Button",
        "contextSentence": "Fasten the top button of your shirt.",
        "contextSentencePt": "Abotoe o botão de cima da sua camisa.",
        "explanation": "Exemplo: \"Fasten the top button of your shirt.\" — Abotoe o botão de cima da sua camisa.",
        "phoneticHint": "\"bâ-ton\" • /ˈbʌt.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Zipper",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper",
            "translationPt": "Zíper",
            "simplePronunciation": "zí-per",
            "phonetic": "/ˈzɪp.ər/",
            "exampleEn": "Close the jacket zipper.",
            "examplePt": "Feche o zíper da jaqueta."
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira",
            "simplePronunciation": "uó-let",
            "phonetic": "/ˈwɑː.lɪt/",
            "exampleEn": "Keep your money inside the wallet.",
            "examplePt": "Guarde seu dinheiro dentro da carteira."
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas",
            "simplePronunciation": "glâvz",
            "phonetic": "/ɡlʌvz/",
            "exampleEn": "Gloves keep your hands warm.",
            "examplePt": "As luvas mantêm suas mãos aquecidas."
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol",
            "simplePronunciation": "scárf",
            "phonetic": "/skɑːrf/",
            "exampleEn": "Wrap a soft scarf around your neck.",
            "examplePt": "Enrole um cachecol macio no pescoço."
          }
        ],
        "options": [
          "Zipper",
          "Wallet",
          "Gloves",
          "Scarf"
        ],
        "correctAnswer": "Zipper",
        "contextSentence": "Close the jacket zipper.",
        "contextSentencePt": "Feche o zíper da jaqueta.",
        "explanation": "Exemplo: \"Close the jacket zipper.\" — Feche o zíper da jaqueta.",
        "phoneticHint": "\"zí-per\" • /ˈzɪp.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sleeve",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie",
            "translationPt": "Gravata",
            "simplePronunciation": "tái",
            "phonetic": "/taɪ/",
            "exampleEn": "He wears a red tie to work.",
            "examplePt": "Ele usa uma gravata vermelha para trabalhar."
          },
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve",
            "translationPt": "Manga da camisa",
            "simplePronunciation": "slív",
            "phonetic": "/sliːv/",
            "exampleEn": "Roll up your shirt sleeves.",
            "examplePt": "Dobre as mangas da sua camisa."
          },
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper",
            "translationPt": "Zíper",
            "simplePronunciation": "zí-per",
            "phonetic": "/ˈzɪp.ər/",
            "exampleEn": "Close the jacket zipper.",
            "examplePt": "Feche o zíper da jaqueta."
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira",
            "simplePronunciation": "uó-let",
            "phonetic": "/ˈwɑː.lɪt/",
            "exampleEn": "Keep your money inside the wallet.",
            "examplePt": "Guarde seu dinheiro dentro da carteira."
          }
        ],
        "options": [
          "Tie",
          "Sleeve",
          "Zipper",
          "Wallet"
        ],
        "correctAnswer": "Sleeve",
        "contextSentence": "Roll up your shirt sleeves.",
        "contextSentencePt": "Dobre as mangas da sua camisa.",
        "explanation": "Exemplo: \"Roll up your shirt sleeves.\" — Dobre as mangas da sua camisa.",
        "phoneticHint": "\"slív\" • /sliːv/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Collar",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar",
            "simplePronunciation": "nék-les",
            "phonetic": "/ˈnek.lɪs/",
            "exampleEn": "That silver necklace is lovely.",
            "examplePt": "Aquele colar de prata é lindo."
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar",
            "translationPt": "Gola / Colarinho",
            "simplePronunciation": "có-lar",
            "phonetic": "/ˈkɑː.lər/",
            "exampleEn": "Straighten your shirt collar.",
            "examplePt": "Arrume a gola da sua camisa."
          },
          {
            "text": "Button",
            "emoji": "🔘",
            "label": "Button",
            "translationPt": "Botão de roupa",
            "simplePronunciation": "bâ-ton",
            "phonetic": "/ˈbʌt.ən/",
            "exampleEn": "Fasten the top button of your shirt.",
            "examplePt": "Abotoe o botão de cima da sua camisa."
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva",
            "simplePronunciation": "âm-bré-la",
            "phonetic": "/ʌmˈbrel.ə/",
            "exampleEn": "Take an umbrella in case it rains.",
            "examplePt": "Leve um guarda-chuva caso chova."
          }
        ],
        "options": [
          "Necklace",
          "Collar",
          "Button",
          "Umbrella"
        ],
        "correctAnswer": "Collar",
        "contextSentence": "Straighten your shirt collar.",
        "contextSentencePt": "Arrume a gola da sua camisa.",
        "explanation": "Exemplo: \"Straighten your shirt collar.\" — Arrume a gola da sua camisa.",
        "phoneticHint": "\"có-lar\" • /ˈkɑː.lər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p26",
    "worldId": 0,
    "phaseNumber": 26,
    "themeId": "clothes",
    "themeTitle": "Roupas",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "title": "Roupas • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Tema 5 (Nível 4/4) • 12 peças específicas, tecidos e detalhes do vestuário",
    "pedagogicalObjective": "Conhecer termos específicos de vestuário: Apron, Vest, Raincoat, Slippers, Bracelet, Earrings, Sunglasses, Hood, Heel, Buckle, Fabric e Hanger.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "No Módulo 4 de Roupas aprendemos palavras menos comuns: Apron (\"êi-pron\" = Avental), Vest (\"vést\" = Colete), Raincoat (\"rêin-côut\" = Capa de chuva), Slippers (\"slí-pers\" = Pantufas), Bracelet (\"brêis-let\" = Pulseira) e Earrings (\"ír-rings\" = Brincos).",
      "E concluímos o Tema 5 com Sunglasses (\"sân-glé-ses\" = Óculos de sol), Hood (\"rúd\" = Capuz), Heel (\"ríl\" = Salto do sapato), Buckle (\"bâ-kol\" = Fivela), Fabric (\"fé-brik\" = Tecido) e Hanger (\"rén-guer\" = Cabide)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p26-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Apron",
        "visualEmoji": "🎽",
        "visualOptions": [
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger",
            "translationPt": "Cabide",
            "simplePronunciation": "rén-guer",
            "phonetic": "/ˈhæŋ.ər/",
            "exampleEn": "Put the dress on a wooden hanger.",
            "examplePt": "Coloque o vestido em um cabide de madeira."
          },
          {
            "text": "Hood",
            "emoji": "🧥",
            "label": "Hood",
            "translationPt": "Capuz",
            "simplePronunciation": "rúd",
            "phonetic": "/hʊd/",
            "exampleEn": "Pull up your jacket hood in the wind.",
            "examplePt": "Coloque o capuz da blusa no vento."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental enquanto cozinha."
          },
          {
            "text": "Heel",
            "emoji": "👠",
            "label": "Heel",
            "translationPt": "Salto do sapato",
            "simplePronunciation": "ríl",
            "phonetic": "/hiːl/",
            "exampleEn": "She wore shoes with a high heel.",
            "examplePt": "Ela usou sapatos de salto alto."
          }
        ],
        "options": [
          "Hanger",
          "Hood",
          "Apron",
          "Heel"
        ],
        "correctAnswer": "Apron",
        "contextSentence": "Wear an apron while cooking.",
        "contextSentencePt": "Use um avental enquanto cozinha.",
        "explanation": "Exemplo: \"Wear an apron while cooking.\" — Use um avental enquanto cozinha.",
        "phoneticHint": "\"êi-pron\" • /ˈeɪ.prən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Vest",
        "visualEmoji": "🦺",
        "visualOptions": [
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest",
            "translationPt": "Colete",
            "simplePronunciation": "vést",
            "phonetic": "/vest/",
            "exampleEn": "He wore a warm vest over his shirt.",
            "examplePt": "Ele usou um colete quentinho sobre a camisa."
          },
          {
            "text": "Buckle",
            "emoji": "👖",
            "label": "Buckle",
            "translationPt": "Fivela",
            "simplePronunciation": "bâ-kol",
            "phonetic": "/ˈbʌk.əl/",
            "exampleEn": "Fasten the metal belt buckle.",
            "examplePt": "Feche a fivela de metal do cinto."
          },
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet",
            "translationPt": "Pulseira",
            "simplePronunciation": "brêis-let",
            "phonetic": "/ˈbreɪ.slət/",
            "exampleEn": "She has a silver bracelet on her wrist.",
            "examplePt": "Ela tem uma pulseira de prata no pulso."
          },
          {
            "text": "Earrings",
            "emoji": "💎",
            "label": "Earrings",
            "translationPt": "Brincos",
            "simplePronunciation": "ír-rings",
            "phonetic": "/ˈɪr.rɪŋz/",
            "exampleEn": "Those gold earrings shine brightly.",
            "examplePt": "Aqueles brincos de ouro brilham muito."
          }
        ],
        "options": [
          "Vest",
          "Buckle",
          "Bracelet",
          "Earrings"
        ],
        "correctAnswer": "Vest",
        "contextSentence": "He wore a warm vest over his shirt.",
        "contextSentencePt": "Ele usou um colete quentinho sobre a camisa.",
        "explanation": "Exemplo: \"He wore a warm vest over his shirt.\" — Ele usou um colete quentinho sobre a camisa.",
        "phoneticHint": "\"vést\" • /vest/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Raincoat",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest",
            "translationPt": "Colete",
            "simplePronunciation": "vést",
            "phonetic": "/vest/",
            "exampleEn": "He wore a warm vest over his shirt.",
            "examplePt": "Ele usou um colete quentinho sobre a camisa."
          },
          {
            "text": "Fabric",
            "emoji": "🧵",
            "label": "Fabric",
            "translationPt": "Tecido / Pano",
            "simplePronunciation": "fé-brik",
            "phonetic": "/ˈfæb.rɪk/",
            "exampleEn": "Cotton is a soft and breathable fabric.",
            "examplePt": "O algodão é um tecido macio e fresco."
          },
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat",
            "translationPt": "Capa de chuva",
            "simplePronunciation": "rêin-côut",
            "phonetic": "/ˈreɪn.koʊt/",
            "exampleEn": "A yellow raincoat keeps you dry.",
            "examplePt": "Uma capa de chuva amarela mantém você seco."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental enquanto cozinha."
          }
        ],
        "options": [
          "Vest",
          "Fabric",
          "Raincoat",
          "Apron"
        ],
        "correctAnswer": "Raincoat",
        "contextSentence": "A yellow raincoat keeps you dry.",
        "contextSentencePt": "Uma capa de chuva amarela mantém você seco.",
        "explanation": "Exemplo: \"A yellow raincoat keeps you dry.\" — Uma capa de chuva amarela mantém você seco.",
        "phoneticHint": "\"rêin-côut\" • /ˈreɪn.koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Slippers",
        "visualEmoji": "🥿",
        "visualOptions": [
          {
            "text": "Hood",
            "emoji": "🧥",
            "label": "Hood",
            "translationPt": "Capuz",
            "simplePronunciation": "rúd",
            "phonetic": "/hʊd/",
            "exampleEn": "Pull up your jacket hood in the wind.",
            "examplePt": "Coloque o capuz da blusa no vento."
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers",
            "translationPt": "Pantufas",
            "simplePronunciation": "slí-pers",
            "phonetic": "/ˈslɪp.ərz/",
            "exampleEn": "Wear soft slippers inside the bedroom.",
            "examplePt": "Use pantufas macias dentro do quarto."
          },
          {
            "text": "Heel",
            "emoji": "👠",
            "label": "Heel",
            "translationPt": "Salto do sapato",
            "simplePronunciation": "ríl",
            "phonetic": "/hiːl/",
            "exampleEn": "She wore shoes with a high heel.",
            "examplePt": "Ela usou sapatos de salto alto."
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol",
            "simplePronunciation": "sân-glé-ses",
            "phonetic": "/ˈsʌnˌɡlæs.ɪz/",
            "exampleEn": "Wear sunglasses on sunny days.",
            "examplePt": "Use óculos de sol em dias ensolarados."
          }
        ],
        "options": [
          "Hood",
          "Slippers",
          "Heel",
          "Sunglasses"
        ],
        "correctAnswer": "Slippers",
        "contextSentence": "Wear soft slippers inside the bedroom.",
        "contextSentencePt": "Use pantufas macias dentro do quarto.",
        "explanation": "Exemplo: \"Wear soft slippers inside the bedroom.\" — Use pantufas macias dentro do quarto.",
        "phoneticHint": "\"slí-pers\" • /ˈslɪp.ərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bracelet",
        "visualEmoji": "📿",
        "visualOptions": [
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat",
            "translationPt": "Capa de chuva",
            "simplePronunciation": "rêin-côut",
            "phonetic": "/ˈreɪn.koʊt/",
            "exampleEn": "A yellow raincoat keeps you dry.",
            "examplePt": "Uma capa de chuva amarela mantém você seco."
          },
          {
            "text": "Fabric",
            "emoji": "🧵",
            "label": "Fabric",
            "translationPt": "Tecido / Pano",
            "simplePronunciation": "fé-brik",
            "phonetic": "/ˈfæb.rɪk/",
            "exampleEn": "Cotton is a soft and breathable fabric.",
            "examplePt": "O algodão é um tecido macio e fresco."
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers",
            "translationPt": "Pantufas",
            "simplePronunciation": "slí-pers",
            "phonetic": "/ˈslɪp.ərz/",
            "exampleEn": "Wear soft slippers inside the bedroom.",
            "examplePt": "Use pantufas macias dentro do quarto."
          },
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet",
            "translationPt": "Pulseira",
            "simplePronunciation": "brêis-let",
            "phonetic": "/ˈbreɪ.slət/",
            "exampleEn": "She has a silver bracelet on her wrist.",
            "examplePt": "Ela tem uma pulseira de prata no pulso."
          }
        ],
        "options": [
          "Raincoat",
          "Fabric",
          "Slippers",
          "Bracelet"
        ],
        "correctAnswer": "Bracelet",
        "contextSentence": "She has a silver bracelet on her wrist.",
        "contextSentencePt": "Ela tem uma pulseira de prata no pulso.",
        "explanation": "Exemplo: \"She has a silver bracelet on her wrist.\" — Ela tem uma pulseira de prata no pulso.",
        "phoneticHint": "\"brêis-let\" • /ˈbreɪ.slət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Earrings",
        "visualEmoji": "💎",
        "visualOptions": [
          {
            "text": "Earrings",
            "emoji": "💎",
            "label": "Earrings",
            "translationPt": "Brincos",
            "simplePronunciation": "ír-rings",
            "phonetic": "/ˈɪr.rɪŋz/",
            "exampleEn": "Those gold earrings shine brightly.",
            "examplePt": "Aqueles brincos de ouro brilham muito."
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger",
            "translationPt": "Cabide",
            "simplePronunciation": "rén-guer",
            "phonetic": "/ˈhæŋ.ər/",
            "exampleEn": "Put the dress on a wooden hanger.",
            "examplePt": "Coloque o vestido em um cabide de madeira."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental enquanto cozinha."
          },
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest",
            "translationPt": "Colete",
            "simplePronunciation": "vést",
            "phonetic": "/vest/",
            "exampleEn": "He wore a warm vest over his shirt.",
            "examplePt": "Ele usou um colete quentinho sobre a camisa."
          }
        ],
        "options": [
          "Earrings",
          "Hanger",
          "Apron",
          "Vest"
        ],
        "correctAnswer": "Earrings",
        "contextSentence": "Those gold earrings shine brightly.",
        "contextSentencePt": "Aqueles brincos de ouro brilham muito.",
        "explanation": "Exemplo: \"Those gold earrings shine brightly.\" — Aqueles brincos de ouro brilham muito.",
        "phoneticHint": "\"ír-rings\" • /ˈɪr.rɪŋz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sunglasses",
        "visualEmoji": "🕶️",
        "visualOptions": [
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet",
            "translationPt": "Pulseira",
            "simplePronunciation": "brêis-let",
            "phonetic": "/ˈbreɪ.slət/",
            "exampleEn": "She has a silver bracelet on her wrist.",
            "examplePt": "Ela tem uma pulseira de prata no pulso."
          },
          {
            "text": "Earrings",
            "emoji": "💎",
            "label": "Earrings",
            "translationPt": "Brincos",
            "simplePronunciation": "ír-rings",
            "phonetic": "/ˈɪr.rɪŋz/",
            "exampleEn": "Those gold earrings shine brightly.",
            "examplePt": "Aqueles brincos de ouro brilham muito."
          },
          {
            "text": "Buckle",
            "emoji": "👖",
            "label": "Buckle",
            "translationPt": "Fivela",
            "simplePronunciation": "bâ-kol",
            "phonetic": "/ˈbʌk.əl/",
            "exampleEn": "Fasten the metal belt buckle.",
            "examplePt": "Feche a fivela de metal do cinto."
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol",
            "simplePronunciation": "sân-glé-ses",
            "phonetic": "/ˈsʌnˌɡlæs.ɪz/",
            "exampleEn": "Wear sunglasses on sunny days.",
            "examplePt": "Use óculos de sol em dias ensolarados."
          }
        ],
        "options": [
          "Bracelet",
          "Earrings",
          "Buckle",
          "Sunglasses"
        ],
        "correctAnswer": "Sunglasses",
        "contextSentence": "Wear sunglasses on sunny days.",
        "contextSentencePt": "Use óculos de sol em dias ensolarados.",
        "explanation": "Exemplo: \"Wear sunglasses on sunny days.\" — Use óculos de sol em dias ensolarados.",
        "phoneticHint": "\"sân-glé-ses\" • /ˈsʌnˌɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hood",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers",
            "translationPt": "Pantufas",
            "simplePronunciation": "slí-pers",
            "phonetic": "/ˈslɪp.ərz/",
            "exampleEn": "Wear soft slippers inside the bedroom.",
            "examplePt": "Use pantufas macias dentro do quarto."
          },
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat",
            "translationPt": "Capa de chuva",
            "simplePronunciation": "rêin-côut",
            "phonetic": "/ˈreɪn.koʊt/",
            "exampleEn": "A yellow raincoat keeps you dry.",
            "examplePt": "Uma capa de chuva amarela mantém você seco."
          },
          {
            "text": "Hood",
            "emoji": "🧥",
            "label": "Hood",
            "translationPt": "Capuz",
            "simplePronunciation": "rúd",
            "phonetic": "/hʊd/",
            "exampleEn": "Pull up your jacket hood in the wind.",
            "examplePt": "Coloque o capuz da blusa no vento."
          },
          {
            "text": "Fabric",
            "emoji": "🧵",
            "label": "Fabric",
            "translationPt": "Tecido / Pano",
            "simplePronunciation": "fé-brik",
            "phonetic": "/ˈfæb.rɪk/",
            "exampleEn": "Cotton is a soft and breathable fabric.",
            "examplePt": "O algodão é um tecido macio e fresco."
          }
        ],
        "options": [
          "Slippers",
          "Raincoat",
          "Hood",
          "Fabric"
        ],
        "correctAnswer": "Hood",
        "contextSentence": "Pull up your jacket hood in the wind.",
        "contextSentencePt": "Coloque o capuz da blusa no vento.",
        "explanation": "Exemplo: \"Pull up your jacket hood in the wind.\" — Coloque o capuz da blusa no vento.",
        "phoneticHint": "\"rúd\" • /hʊd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Heel",
        "visualEmoji": "👠",
        "visualOptions": [
          {
            "text": "Heel",
            "emoji": "👠",
            "label": "Heel",
            "translationPt": "Salto do sapato",
            "simplePronunciation": "ríl",
            "phonetic": "/hiːl/",
            "exampleEn": "She wore shoes with a high heel.",
            "examplePt": "Ela usou sapatos de salto alto."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental enquanto cozinha."
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger",
            "translationPt": "Cabide",
            "simplePronunciation": "rén-guer",
            "phonetic": "/ˈhæŋ.ər/",
            "exampleEn": "Put the dress on a wooden hanger.",
            "examplePt": "Coloque o vestido em um cabide de madeira."
          },
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest",
            "translationPt": "Colete",
            "simplePronunciation": "vést",
            "phonetic": "/vest/",
            "exampleEn": "He wore a warm vest over his shirt.",
            "examplePt": "Ele usou um colete quentinho sobre a camisa."
          }
        ],
        "options": [
          "Heel",
          "Apron",
          "Hanger",
          "Vest"
        ],
        "correctAnswer": "Heel",
        "contextSentence": "She wore shoes with a high heel.",
        "contextSentencePt": "Ela usou sapatos de salto alto.",
        "explanation": "Exemplo: \"She wore shoes with a high heel.\" — Ela usou sapatos de salto alto.",
        "phoneticHint": "\"ríl\" • /hiːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Buckle",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol",
            "simplePronunciation": "sân-glé-ses",
            "phonetic": "/ˈsʌnˌɡlæs.ɪz/",
            "exampleEn": "Wear sunglasses on sunny days.",
            "examplePt": "Use óculos de sol em dias ensolarados."
          },
          {
            "text": "Buckle",
            "emoji": "👖",
            "label": "Buckle",
            "translationPt": "Fivela",
            "simplePronunciation": "bâ-kol",
            "phonetic": "/ˈbʌk.əl/",
            "exampleEn": "Fasten the metal belt buckle.",
            "examplePt": "Feche a fivela de metal do cinto."
          },
          {
            "text": "Earrings",
            "emoji": "💎",
            "label": "Earrings",
            "translationPt": "Brincos",
            "simplePronunciation": "ír-rings",
            "phonetic": "/ˈɪr.rɪŋz/",
            "exampleEn": "Those gold earrings shine brightly.",
            "examplePt": "Aqueles brincos de ouro brilham muito."
          },
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet",
            "translationPt": "Pulseira",
            "simplePronunciation": "brêis-let",
            "phonetic": "/ˈbreɪ.slət/",
            "exampleEn": "She has a silver bracelet on her wrist.",
            "examplePt": "Ela tem uma pulseira de prata no pulso."
          }
        ],
        "options": [
          "Sunglasses",
          "Buckle",
          "Earrings",
          "Bracelet"
        ],
        "correctAnswer": "Buckle",
        "contextSentence": "Fasten the metal belt buckle.",
        "contextSentencePt": "Feche a fivela de metal do cinto.",
        "explanation": "Exemplo: \"Fasten the metal belt buckle.\" — Feche a fivela de metal do cinto.",
        "phoneticHint": "\"bâ-kol\" • /ˈbʌk.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Fabric",
        "visualEmoji": "🧵",
        "visualOptions": [
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat",
            "translationPt": "Capa de chuva",
            "simplePronunciation": "rêin-côut",
            "phonetic": "/ˈreɪn.koʊt/",
            "exampleEn": "A yellow raincoat keeps you dry.",
            "examplePt": "Uma capa de chuva amarela mantém você seco."
          },
          {
            "text": "Fabric",
            "emoji": "🧵",
            "label": "Fabric",
            "translationPt": "Tecido / Pano",
            "simplePronunciation": "fé-brik",
            "phonetic": "/ˈfæb.rɪk/",
            "exampleEn": "Cotton is a soft and breathable fabric.",
            "examplePt": "O algodão é um tecido macio e fresco."
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers",
            "translationPt": "Pantufas",
            "simplePronunciation": "slí-pers",
            "phonetic": "/ˈslɪp.ərz/",
            "exampleEn": "Wear soft slippers inside the bedroom.",
            "examplePt": "Use pantufas macias dentro do quarto."
          },
          {
            "text": "Hood",
            "emoji": "🧥",
            "label": "Hood",
            "translationPt": "Capuz",
            "simplePronunciation": "rúd",
            "phonetic": "/hʊd/",
            "exampleEn": "Pull up your jacket hood in the wind.",
            "examplePt": "Coloque o capuz da blusa no vento."
          }
        ],
        "options": [
          "Raincoat",
          "Fabric",
          "Slippers",
          "Hood"
        ],
        "correctAnswer": "Fabric",
        "contextSentence": "Cotton is a soft and breathable fabric.",
        "contextSentencePt": "O algodão é um tecido macio e fresco.",
        "explanation": "Exemplo: \"Cotton is a soft and breathable fabric.\" — O algodão é um tecido macio e fresco.",
        "phoneticHint": "\"fé-brik\" • /ˈfæb.rɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hanger",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Heel",
            "emoji": "👠",
            "label": "Heel",
            "translationPt": "Salto do sapato",
            "simplePronunciation": "ríl",
            "phonetic": "/hiːl/",
            "exampleEn": "She wore shoes with a high heel.",
            "examplePt": "Ela usou sapatos de salto alto."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental enquanto cozinha."
          },
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest",
            "translationPt": "Colete",
            "simplePronunciation": "vést",
            "phonetic": "/vest/",
            "exampleEn": "He wore a warm vest over his shirt.",
            "examplePt": "Ele usou um colete quentinho sobre a camisa."
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger",
            "translationPt": "Cabide",
            "simplePronunciation": "rén-guer",
            "phonetic": "/ˈhæŋ.ər/",
            "exampleEn": "Put the dress on a wooden hanger.",
            "examplePt": "Coloque o vestido em um cabide de madeira."
          }
        ],
        "options": [
          "Heel",
          "Apron",
          "Vest",
          "Hanger"
        ],
        "correctAnswer": "Hanger",
        "contextSentence": "Put the dress on a wooden hanger.",
        "contextSentencePt": "Coloque o vestido em um cabide de madeira.",
        "explanation": "Exemplo: \"Put the dress on a wooden hanger.\" — Coloque o vestido em um cabide de madeira.",
        "phoneticHint": "\"rén-guer\" • /ˈhæŋ.ər/",
        "skillCategory": "vocabulary"
      }
    ]
  }
];
