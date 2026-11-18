import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = [
  {
    "id": "w0-p1",
    "worldId": 0,
    "phaseNumber": 1,
    "themeId": "home",
    "themeTitle": "Tema 1: A Casa",
    "frequencyLevel": "Módulo 1 • Essenciais e Mais Comuns",
    "title": "A Casa • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema: A Casa (1/4) • 8 palavras essenciais e mais comuns do dia a dia",
    "pedagogicalObjective": "Aprender as 8 palavras mais essenciais sobre a casa: Door, Window, Room, Floor, Kitchen, Bedroom, Table e Chair.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: A Casa — Módulo 1 (Palavras essenciais e mais comuns): aprenda primeiro os termos mais frequentes do cotidiano residencial.",
      "Palavras deste módulo (8): Door (\"dór\" = Porta), Window (\"uín-dou\" = Janela), Room (\"rúm\" = Quarto/Cômodo), Floor (\"flór\" = Chão), Kitchen (\"kít-chen\" = Cozinha), Bedroom (\"béd-rum\" = Quarto de dormir), Table (\"têi-bol\" = Mesa) e Chair (\"tchér\" = Cadeira)."
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
            "text": "Room",
            "emoji": "🏠",
            "label": "Room",
            "translationPt": "Quarto / Cômodo",
            "simplePronunciation": "rúm",
            "phonetic": "/ruːm/",
            "exampleEn": "This room is very bright.",
            "examplePt": "Este cômodo é muito iluminado."
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
          "Floor",
          "Bedroom",
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
            "exampleEn": "We cook in the kitchen.",
            "examplePt": "Nós cozinhamos na cozinha."
          }
        ],
        "options": [
          "Table",
          "Chair",
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
            "exampleEn": "This room is very bright.",
            "examplePt": "Este cômodo é muito iluminado."
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
          "Table",
          "Window",
          "Door"
        ],
        "correctAnswer": "Room",
        "contextSentence": "This room is very bright.",
        "contextSentencePt": "Este cômodo é muito iluminado.",
        "explanation": "Exemplo: \"This room is very bright.\" — Este cômodo é muito iluminado.",
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
            "exampleEn": "We cook in the kitchen.",
            "examplePt": "Nós cozinhamos na cozinha."
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
          "Window",
          "Kitchen",
          "Floor",
          "Door"
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
            "exampleEn": "This room is very bright.",
            "examplePt": "Este cômodo é muito iluminado."
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen",
            "translationPt": "Cozinha",
            "simplePronunciation": "kít-chen",
            "phonetic": "/ˈkɪtʃ.ən/",
            "exampleEn": "We cook in the kitchen.",
            "examplePt": "Nós cozinhamos na cozinha."
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
          "Room",
          "Kitchen",
          "Table",
          "Chair"
        ],
        "correctAnswer": "Kitchen",
        "contextSentence": "We cook in the kitchen.",
        "contextSentencePt": "Nós cozinhamos na cozinha.",
        "explanation": "Exemplo: \"We cook in the kitchen.\" — Nós cozinhamos na cozinha.",
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
          "Floor",
          "Door",
          "Window",
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
        "audioPhrase": "Table",
        "visualEmoji": "🪑",
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
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen",
            "translationPt": "Cozinha",
            "simplePronunciation": "kít-chen",
            "phonetic": "/ˈkɪtʃ.ən/",
            "exampleEn": "We cook in the kitchen.",
            "examplePt": "Nós cozinhamos na cozinha."
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
          },
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room",
            "translationPt": "Quarto / Cômodo",
            "simplePronunciation": "rúm",
            "phonetic": "/ruːm/",
            "exampleEn": "This room is very bright.",
            "examplePt": "Este cômodo é muito iluminado."
          }
        ],
        "options": [
          "Table",
          "Kitchen",
          "Bedroom",
          "Room"
        ],
        "correctAnswer": "Table",
        "contextSentence": "The food is on the table.",
        "contextSentencePt": "A comida está na mesa.",
        "explanation": "Exemplo: \"The food is on the table.\" — A comida está na mesa.",
        "phoneticHint": "\"têi-bol\" • /ˈteɪ.bəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Chair",
        "visualEmoji": "🪑",
        "visualOptions": [
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
          "Window",
          "Chair",
          "Floor",
          "Door"
        ],
        "correctAnswer": "Chair",
        "contextSentence": "Sit on this chair.",
        "contextSentencePt": "Sente-se nesta cadeira.",
        "explanation": "Exemplo: \"Sit on this chair.\" — Sente-se nesta cadeira.",
        "phoneticHint": "\"tchér\" • /tʃer/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p2",
    "worldId": 0,
    "phaseNumber": 2,
    "themeId": "home",
    "themeTitle": "Tema 1: A Casa",
    "frequencyLevel": "Módulo 2 • Palavras Comuns",
    "title": "A Casa • Módulo 2: Palavras Comuns",
    "subtitle": "Tema: A Casa (2/4) • 8 palavras comuns da estrutura e móveis",
    "pedagogicalObjective": "Dominar 8 palavras comuns da casa: Roof, Wall, Bathroom, Living room, Bed, Sofa, Fridge e Stove.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: A Casa — Módulo 2 (Palavras comuns): amplie sua base com os cômodos e itens domésticos comuns.",
      "Palavras deste módulo (8): Roof (\"rúf\" = Telhado), Wall (\"uól\" = Parede), Bathroom (\"béth-rum\" = Banheiro), Living room (\"lí-ving rúm\" = Sala de estar), Bed (\"béd\" = Cama), Sofa (\"sôu-fa\" = Sofá), Fridge (\"frídj\" = Geladeira) e Stove (\"stôuv\" = Fogão)."
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
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room",
            "translationPt": "Sala de estar",
            "simplePronunciation": "lí-ving rúm",
            "phonetic": "/ˈlɪv.ɪŋ ruːm/",
            "exampleEn": "We relax in the living room.",
            "examplePt": "Nós descansamos na sala de estar."
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
          "Living room",
          "Bathroom",
          "Roof",
          "Bed"
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
            "translationPt": "Parede",
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
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede",
            "simplePronunciation": "uól",
            "phonetic": "/wɔːl/",
            "exampleEn": "The wall is painted white.",
            "examplePt": "A parede está pintada de branco."
          }
        ],
        "options": [
          "Bed",
          "Roof",
          "Bathroom",
          "Wall"
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
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room",
            "translationPt": "Sala de estar",
            "simplePronunciation": "lí-ving rúm",
            "phonetic": "/ˈlɪv.ɪŋ ruːm/",
            "exampleEn": "We relax in the living room.",
            "examplePt": "Nós descansamos na sala de estar."
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
          "Stove",
          "Living room",
          "Fridge",
          "Sofa"
        ],
        "correctAnswer": "Living room",
        "contextSentence": "We relax in the living room.",
        "contextSentencePt": "Nós descansamos na sala de estar.",
        "explanation": "Exemplo: \"We relax in the living room.\" — Nós descansamos na sala de estar.",
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
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede",
            "simplePronunciation": "uól",
            "phonetic": "/wɔːl/",
            "exampleEn": "The wall is painted white.",
            "examplePt": "A parede está pintada de branco."
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
          "Roof",
          "Bathroom",
          "Wall",
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
            "exampleEn": "We relax in the living room.",
            "examplePt": "Nós descansamos na sala de estar."
          }
        ],
        "options": [
          "Sofa",
          "Fridge",
          "Roof",
          "Living room"
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
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede",
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
          "Bed",
          "Fridge",
          "Wall",
          "Bathroom"
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
            "exampleEn": "We relax in the living room.",
            "examplePt": "Nós descansamos na sala de estar."
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
          "Sofa",
          "Living room",
          "Roof",
          "Stove"
        ],
        "correctAnswer": "Stove",
        "contextSentence": "She cooks dinner on the stove.",
        "contextSentencePt": "Ela faz o jantar no fogão.",
        "explanation": "Exemplo: \"She cooks dinner on the stove.\" — Ela faz o jantar no fogão.",
        "phoneticHint": "\"stôuv\" • /stoʊv/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p3",
    "worldId": 0,
    "phaseNumber": 3,
    "themeId": "home",
    "themeTitle": "Tema 1: A Casa",
    "frequencyLevel": "Módulo 3 • Palavras Intermediárias",
    "title": "A Casa • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema: A Casa (3/4) • 8 palavras intermediárias da residência",
    "pedagogicalObjective": "Expandir o vocabulário residencial com 8 palavras intermediárias: Ceiling, Stairs, Garage, Balcony, Curtain, Rug, Pillow e Shelf.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: A Casa — Módulo 3 (Palavras intermediárias): partes e objetos complementares da residência.",
      "Palavras deste módulo (8): Ceiling (\"sí-ling\" = Teto), Stairs (\"stérz\" = Escada), Garage (\"ga-rádj\" = Garagem), Balcony (\"bél-co-ni\" = Varanda), Curtain (\"câr-ten\" = Cortina), Rug (\"râg\" = Tapete), Pillow (\"pí-lou\" = Travesseiro) e Shelf (\"xélf\" = Prateleira)."
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
            "exampleEn": "The light is on the ceiling.",
            "examplePt": "A luminária fica no teto."
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
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony",
            "translationPt": "Varanda / Sacada",
            "simplePronunciation": "bél-co-ni",
            "phonetic": "/ˈbæl.kə.ni/",
            "exampleEn": "The apartment has a balcony.",
            "examplePt": "O apartamento tem uma varanda."
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
          "Ceiling",
          "Rug",
          "Balcony",
          "Curtain"
        ],
        "correctAnswer": "Ceiling",
        "contextSentence": "The light is on the ceiling.",
        "contextSentencePt": "A luminária fica no teto.",
        "explanation": "Exemplo: \"The light is on the ceiling.\" — A luminária fica no teto.",
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
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling",
            "translationPt": "Teto",
            "simplePronunciation": "sí-ling",
            "phonetic": "/ˈsiː.lɪŋ/",
            "exampleEn": "The light is on the ceiling.",
            "examplePt": "A luminária fica no teto."
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
            "text": "Shelf",
            "emoji": "📚",
            "label": "Shelf",
            "translationPt": "Prateleira",
            "simplePronunciation": "xélf",
            "phonetic": "/ʃelf/",
            "exampleEn": "Put the book on the shelf.",
            "examplePt": "Coloque o livro na prateleira."
          }
        ],
        "options": [
          "Ceiling",
          "Pillow",
          "Stairs",
          "Shelf"
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
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony",
            "translationPt": "Varanda / Sacada",
            "simplePronunciation": "bél-co-ni",
            "phonetic": "/ˈbæl.kə.ni/",
            "exampleEn": "The apartment has a balcony.",
            "examplePt": "O apartamento tem uma varanda."
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
          "Balcony",
          "Garage",
          "Rug",
          "Stairs"
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
            "exampleEn": "The light is on the ceiling.",
            "examplePt": "A luminária fica no teto."
          },
          {
            "text": "Shelf",
            "emoji": "📚",
            "label": "Shelf",
            "translationPt": "Prateleira",
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
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony",
            "translationPt": "Varanda / Sacada",
            "simplePronunciation": "bél-co-ni",
            "phonetic": "/ˈbæl.kə.ni/",
            "exampleEn": "The apartment has a balcony.",
            "examplePt": "O apartamento tem uma varanda."
          }
        ],
        "options": [
          "Ceiling",
          "Shelf",
          "Pillow",
          "Balcony"
        ],
        "correctAnswer": "Balcony",
        "contextSentence": "The apartment has a balcony.",
        "contextSentencePt": "O apartamento tem uma varanda.",
        "explanation": "Exemplo: \"The apartment has a balcony.\" — O apartamento tem uma varanda.",
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
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling",
            "translationPt": "Teto",
            "simplePronunciation": "sí-ling",
            "phonetic": "/ˈsiː.lɪŋ/",
            "exampleEn": "The light is on the ceiling.",
            "examplePt": "A luminária fica no teto."
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
          }
        ],
        "options": [
          "Curtain",
          "Ceiling",
          "Stairs",
          "Garage"
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
          "Stairs",
          "Rug",
          "Garage",
          "Curtain"
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
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony",
            "translationPt": "Varanda / Sacada",
            "simplePronunciation": "bél-co-ni",
            "phonetic": "/ˈbæl.kə.ni/",
            "exampleEn": "The apartment has a balcony.",
            "examplePt": "O apartamento tem uma varanda."
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
          }
        ],
        "options": [
          "Rug",
          "Curtain",
          "Balcony",
          "Pillow"
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
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling",
            "translationPt": "Teto",
            "simplePronunciation": "sí-ling",
            "phonetic": "/ˈsiː.lɪŋ/",
            "exampleEn": "The light is on the ceiling.",
            "examplePt": "A luminária fica no teto."
          },
          {
            "text": "Shelf",
            "emoji": "📚",
            "label": "Shelf",
            "translationPt": "Prateleira",
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
          }
        ],
        "options": [
          "Garage",
          "Ceiling",
          "Shelf",
          "Stairs"
        ],
        "correctAnswer": "Shelf",
        "contextSentence": "Put the book on the shelf.",
        "contextSentencePt": "Coloque o livro na prateleira.",
        "explanation": "Exemplo: \"Put the book on the shelf.\" — Coloque o livro na prateleira.",
        "phoneticHint": "\"xélf\" • /ʃelf/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p4",
    "worldId": 0,
    "phaseNumber": 4,
    "themeId": "pronouns",
    "themeTitle": "Lição de Pronomes",
    "frequencyLevel": "1 a cada 3 Módulos de Vocabulário",
    "title": "Lição de Pronomes I • Pessoais & De Tratamento",
    "subtitle": "Módulo de Pronomes 1/8 (Após 3 de Vocabulário) • Explicação Didática + Pares Associativos",
    "pedagogicalObjective": "Dominar os Pronomes Pessoais (I, You, He, She, It, We, You, They) e os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma'am) com explicação didática e clara da professora.",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Lição Exclusiva de Pronomes (intercalada a cada 3 módulos de vocabulário).",
      "1ª Parte — Pronomes Pessoais (Subject Pronouns): indicam quem realiza a ação na frase, substituindo o nome (I, You, He, She, It, We, You, They).",
      "2ª Parte — Pronomes de Tratamento: usados para demonstrar respeito, cortesia ou formalidade (Mr., Mrs., Miss, Ms., Sir, Ma'am, Dr., Prof.)."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p4-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais do Singular (I, You, He, She)",
        "conceptHeader": "Os Pronomes Pessoais indicam quem realiza a ação na frase, substituindo o nome da pessoa. No singular usamos: \"I\" (Eu), \"You\" (Você), \"He\" (Ele — para homem ou menino) e \"She\" (Ela — para mulher ou menina).",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Conecte cada Pronome Pessoal em inglês ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p4-b1-p1",
            "en": "I (\"ái\")",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (1ª pessoa do singular)",
            "tipPt": "Correto! \"I\" (\"ái\") significa \"Eu\" e sempre é escrito com letra maiúscula em inglês."
          },
          {
            "id": "w0-p4-b1-p2",
            "en": "You (\"iú\")",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você (2ª pessoa do singular)",
            "tipPt": "Exato! \"You\" (\"iú\") significa \"Você\"."
          },
          {
            "id": "w0-p4-b1-p3",
            "en": "He (\"rí\")",
            "emoji": "👨",
            "phonetic": "/hiː/",
            "pt": "Ele (usado para pessoas do sexo masculino)",
            "tipPt": "Perfeito! \"He\" (\"rí\") é usado para \"Ele\"."
          },
          {
            "id": "w0-p4-b1-p4",
            "en": "She (\"xí\")",
            "emoji": "👩",
            "phonetic": "/ʃiː/",
            "pt": "Ela (usado para pessoas do sexo feminino)",
            "tipPt": "Muito bem! \"She\" (\"xí\") é usado para \"Ela\"."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Pronomes Pessoais do Singular: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-2",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais: Neutro e Plural (It, We, You, They)",
        "conceptHeader": "Para nos referirmos a um único objeto, lugar ou animal, usamos o pronome neutro \"It\" (Ele/Ela). No plural usamos: \"We\" (Nós), \"You\" (Vocês) e \"They\" (Eles/Elas — válido para pessoas, animais e objetos).",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Associe os Pronomes Pessoais \"It, We, You, They\" aos seus pares:",
        "pairs": [
          {
            "id": "w0-p4-b2-p5",
            "en": "It (\"ít\")",
            "emoji": "🏠",
            "phonetic": "/ɪt/",
            "pt": "Ele / Ela (neutro: para 1 objeto, lugar ou animal)",
            "tipPt": "Correto! \"It\" substitui o nome de um objeto, animal ou lugar no singular."
          },
          {
            "id": "w0-p4-b2-p6",
            "en": "We (\"uí\")",
            "emoji": "👥",
            "phonetic": "/wiː/",
            "pt": "Nós (1ª pessoa do plural: eu + outra pessoa)",
            "tipPt": "Muito bem! \"We\" (\"uí\") significa \"Nós\"."
          },
          {
            "id": "w0-p4-b2-p7",
            "en": "You (\"iú\" - plural)",
            "emoji": "👫",
            "phonetic": "/juː/",
            "pt": "Vocês (2ª pessoa do plural)",
            "tipPt": "Exato! \"You\" tem a mesma forma para \"Você\" (singular) e \"Vocês\" (plural)."
          },
          {
            "id": "w0-p4-b2-p8",
            "en": "They (\"dêi\")",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ðeɪ/",
            "pt": "Eles / Elas (plural para pessoas, animais ou coisas)",
            "tipPt": "Perfeito! \"They\" (\"dêi\") é o plural de He, She e também de It."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "It (neutro singular para objeto/lugar/animal), We (Nós), You (Vocês), They (Eles/Elas).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-3",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento com Sobrenome (Mr., Mrs., Miss, Ms.)",
        "conceptHeader": "Os Pronomes de Tratamento demonstram respeito e cortesia. Antes do nome ou sobrenome usamos: \"Mr.\" (Senhor), \"Mrs.\" (Senhora — mulher casada), \"Miss\" (Senhorita — mulher solteira) e \"Ms.\" (Senhora ou Senhorita — neutro para qualquer mulher).",
        "teacherAudioPt": "/audio/teacher/pronoun_2.wav",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu uso correto:",
        "pairs": [
          {
            "id": "w0-p4-b3-t1",
            "en": "Mr. (\"mís-ter\")",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (usado antes do nome ou sobrenome)",
            "tipPt": "Correto! Exemplo: \"Mr. Smith\" (Senhor Smith)."
          },
          {
            "id": "w0-p4-b3-t2",
            "en": "Mrs. (\"mí-siz\")",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (usado antes do sobrenome de mulher casada)",
            "tipPt": "Exato! \"Mrs.\" refere-se a uma mulher casada."
          },
          {
            "id": "w0-p4-b3-t3",
            "en": "Miss (\"mís\")",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (mulher solteira ou tratamento escolar)",
            "tipPt": "Perfeito! \"Miss\" é usado para mulheres solteiras ou professoras."
          },
          {
            "id": "w0-p4-b3-t4",
            "en": "Ms. (\"míz\")",
            "emoji": "👩‍💼",
            "phonetic": "/mɪz/",
            "pt": "Senhora / Senhorita (formal para qualquer mulher)",
            "tipPt": "Excelente! \"Ms.\" é muito usado no ambiente profissional pois independe do estado civil."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Mr. (Senhor), Mrs. (Senhora - casada), Miss (Senhorita - solteira), Ms. (Senhora/Senhorita - uso profissional geral).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-4",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento Direto e Títulos (Sir, Ma'am, Dr., Prof.)",
        "conceptHeader": "Quando falamos diretamente com alguém de forma respeitosa sem citar o nome da pessoa, usamos \"Sir\" (Senhor) e \"Ma'am\" (Senhora). Para títulos profissionais ou acadêmicos antes do nome, usamos \"Dr.\" (Doutor/Médico) e \"Prof.\" (Professor universitário).",
        "teacherAudioPt": "/audio/teacher/pronoun_2.wav",
        "prompt": "🤝 Ligue cada Pronome de Tratamento direto ou título ao seu significado:",
        "pairs": [
          {
            "id": "w0-p4-b4-t5",
            "en": "Sir (\"sâr\")",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto sem dizer o nome)",
            "tipPt": "Correto! Exemplo: \"Excuse me, Sir\" (Com licença, Senhor)."
          },
          {
            "id": "w0-p4-b4-t6",
            "en": "Ma'am (\"mém\")",
            "emoji": "🌸",
            "phonetic": "/mæm/",
            "pt": "Senhora (tratamento direto sem dizer o nome)",
            "tipPt": "Muito bem! Exemplo: \"Thank you, Ma'am\" (Obrigado, Senhora)."
          },
          {
            "id": "w0-p4-b4-t7",
            "en": "Dr. (\"dók-tor\")",
            "emoji": "🩺",
            "phonetic": "/ˈdɑːk.tər/",
            "pt": "Doutor(a) / Médico(a)",
            "tipPt": "Exato! Usado antes do nome de médicos ou doutores."
          },
          {
            "id": "w0-p4-b4-t8",
            "en": "Prof. (\"pro-fé-sor\")",
            "emoji": "🎓",
            "phonetic": "/prəˈfes.ər/",
            "pt": "Professor(a) (título acadêmico)",
            "tipPt": "Excelente! Você concluiu o estudo de Pronomes Pessoais e de Tratamento."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Sir (Senhor - sem nome), Ma'am (Senhora - sem nome), Dr. (Doutor/Doutora), Prof. (Professor/Professora).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p5",
    "worldId": 0,
    "phaseNumber": 5,
    "themeId": "home",
    "themeTitle": "Tema 1: A Casa",
    "frequencyLevel": "Módulo 4 • Menos Comuns ou Específicas",
    "title": "A Casa • Módulo 4: Menos Comuns",
    "subtitle": "Tema: A Casa (4/4) • 8 palavras menos comuns ou específicas da casa",
    "pedagogicalObjective": "Conhecer 8 termos mais específicos da casa: Attic, Basement, Chimney, Doorknob, Gutter, Fence, Faucet e Closet.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: A Casa — Módulo 4 (Palavras menos comuns ou específicas): detalhes estruturais e específicos da residência.",
      "Palavras deste módulo (8): Attic (\"é-tik\" = Sótão), Basement (\"bêis-ment\" = Porão), Chimney (\"tchím-ni\" = Chaminé), Doorknob (\"dór-nób\" = Maçaneta), Gutter (\"gâ-ter\" = Calha), Fence (\"féns\" = Cerca), Faucet (\"fó-set\" = Torneira) e Closet (\"cló-zet\" = Armário/Closet)."
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
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca",
            "simplePronunciation": "féns",
            "phonetic": "/fens/",
            "exampleEn": "A fence surrounds the yard.",
            "examplePt": "Uma cerca contorna o quintal."
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are in the attic.",
            "examplePt": "As caixas antigas estão no sótão."
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
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney",
            "translationPt": "Chaminé",
            "simplePronunciation": "tchím-ni",
            "phonetic": "/ˈtʃɪm.ni/",
            "exampleEn": "Smoke comes out of the chimney.",
            "examplePt": "A fumaça sai pela chaminé."
          }
        ],
        "options": [
          "Fence",
          "Attic",
          "Faucet",
          "Chimney"
        ],
        "correctAnswer": "Attic",
        "contextSentence": "Old boxes are in the attic.",
        "contextSentencePt": "As caixas antigas estão no sótão.",
        "explanation": "Exemplo: \"Old boxes are in the attic.\" — As caixas antigas estão no sótão.",
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
            "translationPt": "Armário / Closet",
            "simplePronunciation": "cló-zet",
            "phonetic": "/ˈklɑː.zɪt/",
            "exampleEn": "Hang your coat in the closet.",
            "examplePt": "Pendure seu casaco no armário."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rain flows through the gutter.",
            "examplePt": "A chuva escorre pela calha."
          },
          {
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement",
            "translationPt": "Porão",
            "simplePronunciation": "bêis-ment",
            "phonetic": "/ˈbeɪs.mənt/",
            "exampleEn": "The basement is downstairs.",
            "examplePt": "O porão fica no andar de baixo."
          }
        ],
        "options": [
          "Doorknob",
          "Closet",
          "Gutter",
          "Basement"
        ],
        "correctAnswer": "Basement",
        "contextSentence": "The basement is downstairs.",
        "contextSentencePt": "O porão fica no andar de baixo.",
        "explanation": "Exemplo: \"The basement is downstairs.\" — O porão fica no andar de baixo.",
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
            "exampleEn": "Smoke comes out of the chimney.",
            "examplePt": "A fumaça sai pela chaminé."
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca",
            "simplePronunciation": "féns",
            "phonetic": "/fens/",
            "exampleEn": "A fence surrounds the yard.",
            "examplePt": "Uma cerca contorna o quintal."
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are in the attic.",
            "examplePt": "As caixas antigas estão no sótão."
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
          "Chimney",
          "Fence",
          "Attic",
          "Faucet"
        ],
        "correctAnswer": "Chimney",
        "contextSentence": "Smoke comes out of the chimney.",
        "contextSentencePt": "A fumaça sai pela chaminé.",
        "explanation": "Exemplo: \"Smoke comes out of the chimney.\" — A fumaça sai pela chaminé.",
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
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement",
            "translationPt": "Porão",
            "simplePronunciation": "bêis-ment",
            "phonetic": "/ˈbeɪs.mənt/",
            "exampleEn": "The basement is downstairs.",
            "examplePt": "O porão fica no andar de baixo."
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
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are in the attic.",
            "examplePt": "As caixas antigas estão no sótão."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rain flows through the gutter.",
            "examplePt": "A chuva escorre pela calha."
          }
        ],
        "options": [
          "Basement",
          "Doorknob",
          "Attic",
          "Gutter"
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
            "translationPt": "Armário / Closet",
            "simplePronunciation": "cló-zet",
            "phonetic": "/ˈklɑː.zɪt/",
            "exampleEn": "Hang your coat in the closet.",
            "examplePt": "Pendure seu casaco no armário."
          },
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney",
            "translationPt": "Chaminé",
            "simplePronunciation": "tchím-ni",
            "phonetic": "/ˈtʃɪm.ni/",
            "exampleEn": "Smoke comes out of the chimney.",
            "examplePt": "A fumaça sai pela chaminé."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rain flows through the gutter.",
            "examplePt": "A chuva escorre pela calha."
          }
        ],
        "options": [
          "Faucet",
          "Closet",
          "Chimney",
          "Gutter"
        ],
        "correctAnswer": "Gutter",
        "contextSentence": "Rain flows through the gutter.",
        "contextSentencePt": "A chuva escorre pela calha.",
        "explanation": "Exemplo: \"Rain flows through the gutter.\" — A chuva escorre pela calha.",
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
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are in the attic.",
            "examplePt": "As caixas antigas estão no sótão."
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
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca",
            "simplePronunciation": "féns",
            "phonetic": "/fens/",
            "exampleEn": "A fence surrounds the yard.",
            "examplePt": "Uma cerca contorna o quintal."
          },
          {
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement",
            "translationPt": "Porão",
            "simplePronunciation": "bêis-ment",
            "phonetic": "/ˈbeɪs.mənt/",
            "exampleEn": "The basement is downstairs.",
            "examplePt": "O porão fica no andar de baixo."
          }
        ],
        "options": [
          "Attic",
          "Doorknob",
          "Fence",
          "Basement"
        ],
        "correctAnswer": "Fence",
        "contextSentence": "A fence surrounds the yard.",
        "contextSentencePt": "Uma cerca contorna o quintal.",
        "explanation": "Exemplo: \"A fence surrounds the yard.\" — Uma cerca contorna o quintal.",
        "phoneticHint": "\"féns\" • /fens/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Faucet",
        "visualEmoji": "🚰",
        "visualOptions": [
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
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney",
            "translationPt": "Chaminé",
            "simplePronunciation": "tchím-ni",
            "phonetic": "/ˈtʃɪm.ni/",
            "exampleEn": "Smoke comes out of the chimney.",
            "examplePt": "A fumaça sai pela chaminé."
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca",
            "simplePronunciation": "féns",
            "phonetic": "/fens/",
            "exampleEn": "A fence surrounds the yard.",
            "examplePt": "Uma cerca contorna o quintal."
          },
          {
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement",
            "translationPt": "Porão",
            "simplePronunciation": "bêis-ment",
            "phonetic": "/ˈbeɪs.mənt/",
            "exampleEn": "The basement is downstairs.",
            "examplePt": "O porão fica no andar de baixo."
          }
        ],
        "options": [
          "Faucet",
          "Chimney",
          "Fence",
          "Basement"
        ],
        "correctAnswer": "Faucet",
        "contextSentence": "Turn off the water faucet.",
        "contextSentencePt": "Feche a torneira de água.",
        "explanation": "Exemplo: \"Turn off the water faucet.\" — Feche a torneira de água.",
        "phoneticHint": "\"fó-set\" • /ˈfɔː.sɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Closet",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic",
            "translationPt": "Sótão",
            "simplePronunciation": "é-tik",
            "phonetic": "/ˈæt.ɪk/",
            "exampleEn": "Old boxes are in the attic.",
            "examplePt": "As caixas antigas estão no sótão."
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
            "translationPt": "Armário / Closet",
            "simplePronunciation": "cló-zet",
            "phonetic": "/ˈklɑː.zɪt/",
            "exampleEn": "Hang your coat in the closet.",
            "examplePt": "Pendure seu casaco no armário."
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter",
            "translationPt": "Calha",
            "simplePronunciation": "gâ-ter",
            "phonetic": "/ˈɡʌt.ər/",
            "exampleEn": "Rain flows through the gutter.",
            "examplePt": "A chuva escorre pela calha."
          }
        ],
        "options": [
          "Attic",
          "Doorknob",
          "Closet",
          "Gutter"
        ],
        "correctAnswer": "Closet",
        "contextSentence": "Hang your coat in the closet.",
        "contextSentencePt": "Pendure seu casaco no armário.",
        "explanation": "Exemplo: \"Hang your coat in the closet.\" — Pendure seu casaco no armário.",
        "phoneticHint": "\"cló-zet\" • /ˈklɑː.zɪt/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p6",
    "worldId": 0,
    "phaseNumber": 6,
    "themeId": "food",
    "themeTitle": "Tema 2: Comida",
    "frequencyLevel": "Módulo 1 • Essenciais e Mais Comuns",
    "title": "Comida • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema: Comida (1/4) • 8 alimentos e bebidas essenciais do dia a dia",
    "pedagogicalObjective": "Dominar os 8 alimentos e bebidas mais essenciais: Water, Bread, Rice, Beans, Meat, Chicken, Egg e Milk.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Comida — Módulo 1 (Palavras essenciais e mais comuns): os alimentos mais presentes nas refeições diárias.",
      "Palavras deste módulo (8): Water (\"uó-ter\" = Água), Bread (\"bréd\" = Pão), Rice (\"ráis\" = Arroz), Beans (\"bínz\" = Feijão), Meat (\"mít\" = Carne), Chicken (\"tchí-ken\" = Frango), Egg (\"ég\" = Ovo) e Milk (\"mílk\" = Leite)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p6-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo",
            "simplePronunciation": "ég",
            "phonetic": "/eɡ/",
            "exampleEn": "I like eggs in the morning.",
            "examplePt": "Eu gosto de ovos de manhã."
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
          "Egg",
          "Beans",
          "Rice",
          "Water"
        ],
        "correctAnswer": "Water",
        "contextSentence": "I drink cold water.",
        "contextSentencePt": "Eu bebo água gelada.",
        "explanation": "Exemplo: \"I drink cold water.\" — Eu bebo água gelada.",
        "phoneticHint": "\"uó-ter\" • /ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
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
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite",
            "simplePronunciation": "mílk",
            "phonetic": "/mɪlk/",
            "exampleEn": "Drink a glass of milk.",
            "examplePt": "Beba um copo de leite."
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
          "Bread",
          "Milk",
          "Chicken",
          "Meat"
        ],
        "correctAnswer": "Bread",
        "contextSentence": "I eat warm bread for breakfast.",
        "contextSentencePt": "Eu como pão quentinho no café da manhã.",
        "explanation": "Exemplo: \"I eat warm bread for breakfast.\" — Eu como pão quentinho no café da manhã.",
        "phoneticHint": "\"bréd\" • /bred/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
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
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo",
            "simplePronunciation": "ég",
            "phonetic": "/eɡ/",
            "exampleEn": "I like eggs in the morning.",
            "examplePt": "Eu gosto de ovos de manhã."
          }
        ],
        "options": [
          "Bread",
          "Rice",
          "Water",
          "Egg"
        ],
        "correctAnswer": "Rice",
        "contextSentence": "We eat white rice every day.",
        "contextSentencePt": "Nós comemos arroz branco todos os dias.",
        "explanation": "Exemplo: \"We eat white rice every day.\" — Nós comemos arroz branco todos os dias.",
        "phoneticHint": "\"ráis\" • /raɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Beans",
        "visualEmoji": "🫘",
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
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite",
            "simplePronunciation": "mílk",
            "phonetic": "/mɪlk/",
            "exampleEn": "Drink a glass of milk.",
            "examplePt": "Beba um copo de leite."
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
          "Meat",
          "Water",
          "Milk",
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
        "id": "w0-p6-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Meat",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo",
            "simplePronunciation": "ég",
            "phonetic": "/eɡ/",
            "exampleEn": "I like eggs in the morning.",
            "examplePt": "Eu gosto de ovos de manhã."
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
          "Egg",
          "Bread",
          "Meat",
          "Rice"
        ],
        "correctAnswer": "Meat",
        "contextSentence": "He cooked the meat on the grill.",
        "contextSentencePt": "Ele assou a carne na grelha.",
        "explanation": "Exemplo: \"He cooked the meat on the grill.\" — Ele assou a carne na grelha.",
        "phoneticHint": "\"mít\" • /miːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
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
            "exampleEn": "Drink a glass of milk.",
            "examplePt": "Beba um copo de leite."
          }
        ],
        "options": [
          "Chicken",
          "Water",
          "Beans",
          "Milk"
        ],
        "correctAnswer": "Chicken",
        "contextSentence": "We had roast chicken for lunch.",
        "contextSentencePt": "Comemos frango assado no almoço.",
        "explanation": "Exemplo: \"We had roast chicken for lunch.\" — Comemos frango assado no almoço.",
        "phoneticHint": "\"tchí-ken\" • /ˈtʃɪk.ɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Egg",
        "visualEmoji": "🥚",
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
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo",
            "simplePronunciation": "ég",
            "phonetic": "/eɡ/",
            "exampleEn": "I like eggs in the morning.",
            "examplePt": "Eu gosto de ovos de manhã."
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
          "Meat",
          "Rice",
          "Egg",
          "Bread"
        ],
        "correctAnswer": "Egg",
        "contextSentence": "I like eggs in the morning.",
        "contextSentencePt": "Eu gosto de ovos de manhã.",
        "explanation": "Exemplo: \"I like eggs in the morning.\" — Eu gosto de ovos de manhã.",
        "phoneticHint": "\"ég\" • /eɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
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
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite",
            "simplePronunciation": "mílk",
            "phonetic": "/mɪlk/",
            "exampleEn": "Drink a glass of milk.",
            "examplePt": "Beba um copo de leite."
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
          "Chicken",
          "Milk",
          "Water",
          "Beans"
        ],
        "correctAnswer": "Milk",
        "contextSentence": "Drink a glass of milk.",
        "contextSentencePt": "Beba um copo de leite.",
        "explanation": "Exemplo: \"Drink a glass of milk.\" — Beba um copo de leite.",
        "phoneticHint": "\"mílk\" • /mɪlk/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p7",
    "worldId": 0,
    "phaseNumber": 7,
    "themeId": "food",
    "themeTitle": "Tema 2: Comida",
    "frequencyLevel": "Módulo 2 • Palavras Comuns",
    "title": "Comida • Módulo 2: Palavras Comuns",
    "subtitle": "Tema: Comida (2/4) • 8 alimentos e bebidas comuns",
    "pedagogicalObjective": "Aprender 8 alimentos muito comuns: Coffee, Juice, Apple, Banana, Cheese, Fish, Soup e Salad.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Comida — Módulo 2 (Palavras comuns): bebidas, frutas e pratos frequentes.",
      "Palavras deste módulo (8): Coffee (\"có-fi\" = Café), Juice (\"djús\" = Suco), Apple (\"é-pol\" = Maçã), Banana (\"ba-né-na\" = Banana), Cheese (\"tchíz\" = Queijo), Fish (\"fíx\" = Peixe), Soup (\"súp\" = Sopa) e Salad (\"sé-lad\" = Salada)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p7-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Coffee",
        "visualEmoji": "☕",
        "visualOptions": [
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
          "Coffee",
          "Banana",
          "Fish",
          "Cheese"
        ],
        "correctAnswer": "Coffee",
        "contextSentence": "She loves hot coffee.",
        "contextSentencePt": "Ela adora café quente.",
        "explanation": "Exemplo: \"She loves hot coffee.\" — Ela adora café quente.",
        "phoneticHint": "\"có-fi\" • /ˈkɔː.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Juice",
        "visualEmoji": "🧃",
        "visualOptions": [
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada",
            "simplePronunciation": "sé-lad",
            "phonetic": "/ˈsæl.əd/",
            "exampleEn": "I made a fresh salad.",
            "examplePt": "Eu fiz uma salada fresca."
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
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa",
            "simplePronunciation": "súp",
            "phonetic": "/suːp/",
            "exampleEn": "Hot soup is great at night.",
            "examplePt": "Sopa quente é ótima à noite."
          }
        ],
        "options": [
          "Salad",
          "Juice",
          "Coffee",
          "Soup"
        ],
        "correctAnswer": "Juice",
        "contextSentence": "Fresh orange juice is delicious.",
        "contextSentencePt": "Suco de laranja fresco é delicioso.",
        "explanation": "Exemplo: \"Fresh orange juice is delicious.\" — Suco de laranja fresco é delicioso.",
        "phoneticHint": "\"djús\" • /dʒuːs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
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
          "Juice",
          "Banana",
          "Fish",
          "Apple"
        ],
        "correctAnswer": "Apple",
        "contextSentence": "This red apple is sweet.",
        "contextSentencePt": "Esta maçã vermelha é doce.",
        "explanation": "Exemplo: \"This red apple is sweet.\" — Esta maçã vermelha é doce.",
        "phoneticHint": "\"é-pol\" • /ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Banana",
        "visualEmoji": "🍌",
        "visualOptions": [
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa",
            "simplePronunciation": "súp",
            "phonetic": "/suːp/",
            "exampleEn": "Hot soup is great at night.",
            "examplePt": "Sopa quente é ótima à noite."
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
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada",
            "simplePronunciation": "sé-lad",
            "phonetic": "/ˈsæl.əd/",
            "exampleEn": "I made a fresh salad.",
            "examplePt": "Eu fiz uma salada fresca."
          }
        ],
        "options": [
          "Soup",
          "Coffee",
          "Banana",
          "Salad"
        ],
        "correctAnswer": "Banana",
        "contextSentence": "Peel the yellow banana.",
        "contextSentencePt": "Descasque a banana amarela.",
        "explanation": "Exemplo: \"Peel the yellow banana.\" — Descasque a banana amarela.",
        "phoneticHint": "\"ba-né-na\" • /bəˈnæn.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
        "visualOptions": [
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
          "Cheese",
          "Juice",
          "Apple",
          "Fish"
        ],
        "correctAnswer": "Cheese",
        "contextSentence": "Put cheese on the bread.",
        "contextSentencePt": "Coloque queijo no pão.",
        "explanation": "Exemplo: \"Put cheese on the bread.\" — Coloque queijo no pão.",
        "phoneticHint": "\"tchíz\" • /tʃiːz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fish",
        "visualEmoji": "🐟",
        "visualOptions": [
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
            "exampleEn": "I made a fresh salad.",
            "examplePt": "Eu fiz uma salada fresca."
          }
        ],
        "options": [
          "Banana",
          "Coffee",
          "Fish",
          "Salad"
        ],
        "correctAnswer": "Fish",
        "contextSentence": "Grilled fish is very healthy.",
        "contextSentencePt": "Peixe grelhado é muito saudável.",
        "explanation": "Exemplo: \"Grilled fish is very healthy.\" — Peixe grelhado é muito saudável.",
        "phoneticHint": "\"fíx\" • /fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soup",
        "visualEmoji": "🍲",
        "visualOptions": [
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
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa",
            "simplePronunciation": "súp",
            "phonetic": "/suːp/",
            "exampleEn": "Hot soup is great at night.",
            "examplePt": "Sopa quente é ótima à noite."
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
          "Juice",
          "Soup",
          "Apple",
          "Cheese"
        ],
        "correctAnswer": "Soup",
        "contextSentence": "Hot soup is great at night.",
        "contextSentencePt": "Sopa quente é ótima à noite.",
        "explanation": "Exemplo: \"Hot soup is great at night.\" — Sopa quente é ótima à noite.",
        "phoneticHint": "\"súp\" • /suːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Salad",
        "visualEmoji": "🥗",
        "visualOptions": [
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
            "exampleEn": "I made a fresh salad.",
            "examplePt": "Eu fiz uma salada fresca."
          }
        ],
        "options": [
          "Coffee",
          "Banana",
          "Fish",
          "Salad"
        ],
        "correctAnswer": "Salad",
        "contextSentence": "I made a fresh salad.",
        "contextSentencePt": "Eu fiz uma salada fresca.",
        "explanation": "Exemplo: \"I made a fresh salad.\" — Eu fiz uma salada fresca.",
        "phoneticHint": "\"sé-lad\" • /ˈsæl.əd/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p8",
    "worldId": 0,
    "phaseNumber": 8,
    "themeId": "pronouns",
    "themeTitle": "Lição de Pronomes",
    "frequencyLevel": "1 a cada 3 Módulos de Vocabulário",
    "title": "Lição de Pronomes II • Possessivos & Demonstrativos",
    "subtitle": "Módulo de Pronomes 2/8 (Após 6 de Vocabulário) • Explicação Didática + Pares Associativos",
    "pedagogicalObjective": "Dominar os Pronomes Possessivos (My, Your, His, Her, Our, Their, Mine, Yours) e os Pronomes Demonstrativos (This, That, These, Those).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "2ª Lição Exclusiva de Pronomes (após 6 módulos de vocabulário).",
      "3ª Parte — Pronomes Possessivos: indicam a quem pertence um objeto, pessoa ou lugar (My, Your, His, Her, Our, Their, Mine, Yours).",
      "4ª Parte — Pronomes Demonstrativos: indicam se algo está perto ou longe de quem fala, no singular ou no plural (This, That, These, Those)."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p8-pron-1",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos Antes do Substantivo (My, Your, His, Her)",
        "conceptHeader": "Os Pronomes Possessivos Adjetivos vêm sempre antes do substantivo para indicar posse: \"My\" (Meu/Minha), \"Your\" (Seu/Sua), \"His\" (Dele — quando o dono é masculino) e \"Her\" (Dela — quando a dona é feminina).",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Conecte cada Pronome Possessivo ao seu equivalente em português:",
        "pairs": [
          {
            "id": "w0-p8-b1-pos1",
            "en": "My (\"mái\")",
            "emoji": "🔑",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha / Meus / Minhas (ex: My house)",
            "tipPt": "Correto! \"My\" serve tanto para singular quanto para plural em português."
          },
          {
            "id": "w0-p8-b1-pos2",
            "en": "Your (\"iór\")",
            "emoji": "📘",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua / Seus / Suas (ex: Your book)",
            "tipPt": "Exato! \"Your\" indica que algo pertence a você ou a vocês."
          },
          {
            "id": "w0-p8-b1-pos3",
            "en": "His (\"ríz\")",
            "emoji": "👨",
            "phonetic": "/hɪz/",
            "pt": "Dele (ex: His car = O carro dele)",
            "tipPt": "Perfeito! \"His\" é usado quando o possuidor é um homem ou menino."
          },
          {
            "id": "w0-p8-b1-pos4",
            "en": "Her (\"râr\")",
            "emoji": "👩",
            "phonetic": "/hɜːr/",
            "pt": "Dela (ex: Her dress = O vestido dela)",
            "tipPt": "Muito bem! \"Her\" é usado quando a possuidora é uma mulher ou menina."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "My (Meu/Minha), Your (Seu/Sua), His (Dele), Her (Dela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-pron-2",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos: Plural e Fim de Frase (Our, Their, Mine, Yours)",
        "conceptHeader": "Para posse coletiva antes do substantivo usamos \"Our\" (Nosso/Nossa) e \"Their\" (Deles/Delas). Já quando o pronome vem no final da frase, sem repetir o substantivo, usamos as formas substantivas \"Mine\" (o meu/a minha) e \"Yours\" (o seu/a sua).",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Associe os Pronomes Possessivos \"Our, Their, Mine, Yours\" aos seus pares:",
        "pairs": [
          {
            "id": "w0-p8-b2-pos5",
            "en": "Our (\"áu-er\")",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (usado antes do substantivo)",
            "tipPt": "Correto! Exemplo: \"Our kitchen\" (Nossa cozinha)."
          },
          {
            "id": "w0-p8-b2-pos6",
            "en": "Their (\"dér\")",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ðer/",
            "pt": "Deles / Delas (usado antes do substantivo)",
            "tipPt": "Exato! Exemplo: \"Their house\" (A casa deles)."
          },
          {
            "id": "w0-p8-b2-pos7",
            "en": "Mine (\"máin\")",
            "emoji": "✨",
            "phonetic": "/maɪn/",
            "pt": "O meu / A minha (usado sozinho no final da frase)",
            "tipPt": "Perfeito! Exemplo: \"This key is mine\" (Esta chave é minha)."
          },
          {
            "id": "w0-p8-b2-pos8",
            "en": "Yours (\"iórz\")",
            "emoji": "🌟",
            "phonetic": "/jʊrz/",
            "pt": "O seu / A sua (usado sozinho no final da frase)",
            "tipPt": "Excelente! Exemplo: \"The book is yours\" (O livro é seu)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Our (Nosso/Nossa), Their (Deles/Delas), Mine (O meu/A minha - final de frase), Yours (O seu/A sua - final de frase).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-pron-3",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos: Perto vs. Longe (This, That, These, Those)",
        "conceptHeader": "Os Pronomes Demonstrativos variam conforme a distância e a quantidade. Para o que está PERTO de quem fala: \"This\" (Este/Esta/Isto — singular) e \"These\" (Estes/Estas — plural). Para o que está LONGE: \"That\" (Aquele/Aquela/Aquilo — singular) e \"Those\" (Aqueles/Aquelas — plural).",
        "teacherAudioPt": "/audio/teacher/pronoun_4.wav",
        "prompt": "🤝 Conecte cada Pronome Demonstrativo à distância e número correspondentes:",
        "pairs": [
          {
            "id": "w0-p8-b3-dem1",
            "en": "This (\"dís\")",
            "emoji": "👇",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (SINGULAR e PERTO)",
            "tipPt": "Correto! Usamos \"This\" para um único item próximo de nós."
          },
          {
            "id": "w0-p8-b3-dem2",
            "en": "That (\"dét\")",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (SINGULAR e LONGE)",
            "tipPt": "Exato! Usamos \"That\" para um único item distante de nós."
          },
          {
            "id": "w0-p8-b3-dem3",
            "en": "These (\"díz\")",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (PLURAL e PERTO)",
            "tipPt": "Perfeito! \"These\" é o plural de \"This\" (vários itens próximos)."
          },
          {
            "id": "w0-p8-b3-dem4",
            "en": "Those (\"dôuz\")",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (PLURAL e LONGE)",
            "tipPt": "Muito bem! \"Those\" é o plural de \"That\" (vários itens distantes)."
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
    "themeTitle": "Tema 2: Comida",
    "frequencyLevel": "Módulo 3 • Palavras Intermediárias",
    "title": "Comida • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema: Comida (3/4) • 8 pratos, frutas e legumes intermediários",
    "pedagogicalObjective": "Ampliar o vocabulário alimentar com 8 palavras intermediárias: Pasta, Cake, Orange, Tomato, Potato, Onion, Carrot e Sandwich.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Comida — Módulo 3 (Palavras intermediárias): massas, vegetais e lanches do cotidiano.",
      "Palavras deste módulo (8): Pasta (\"pás-ta\" = Macarrão), Cake (\"kêik\" = Bolo), Orange (\"ó-rendj\" = Laranja), Tomato (\"to-mêi-tou\" = Tomate), Potato (\"po-têi-tou\" = Batata), Onion (\"â-nion\" = Cebola), Carrot (\"ké-rot\" = Cenoura) e Sandwich (\"sénd-uitch\" = Sanduíche)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p9-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pasta",
        "visualEmoji": "🍝",
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
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão",
            "simplePronunciation": "pás-ta",
            "phonetic": "/ˈpɑː.stə/",
            "exampleEn": "We love pasta for lunch.",
            "examplePt": "Adoramos macarrão no almoço."
          }
        ],
        "options": [
          "Onion",
          "Orange",
          "Carrot",
          "Pasta"
        ],
        "correctAnswer": "Pasta",
        "contextSentence": "We love pasta for lunch.",
        "contextSentencePt": "Adoramos macarrão no almoço.",
        "explanation": "Exemplo: \"We love pasta for lunch.\" — Adoramos macarrão no almoço.",
        "phoneticHint": "\"pás-ta\" • /ˈpɑː.stə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cake",
        "visualEmoji": "🍰",
        "visualOptions": [
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
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate",
            "simplePronunciation": "to-mêi-tou",
            "phonetic": "/təˈmeɪ.toʊ/",
            "exampleEn": "Slice the red tomato.",
            "examplePt": "Corte o tomate em fatias."
          }
        ],
        "options": [
          "Potato",
          "Sandwich",
          "Cake",
          "Tomato"
        ],
        "correctAnswer": "Cake",
        "contextSentence": "She baked a chocolate cake.",
        "contextSentencePt": "Ela assou um bolo de chocolate.",
        "explanation": "Exemplo: \"She baked a chocolate cake.\" — Ela assou um bolo de chocolate.",
        "phoneticHint": "\"kêik\" • /keɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Orange",
        "visualEmoji": "🍊",
        "visualOptions": [
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
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão",
            "simplePronunciation": "pás-ta",
            "phonetic": "/ˈpɑː.stə/",
            "exampleEn": "We love pasta for lunch.",
            "examplePt": "Adoramos macarrão no almoço."
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
          "Orange",
          "Pasta",
          "Onion",
          "Carrot"
        ],
        "correctAnswer": "Orange",
        "contextSentence": "This orange is very juicy.",
        "contextSentencePt": "Esta laranja tem muito suco.",
        "explanation": "Exemplo: \"This orange is very juicy.\" — Esta laranja tem muito suco.",
        "phoneticHint": "\"ó-rendj\" • /ˈɔːr.ɪndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão",
            "simplePronunciation": "pás-ta",
            "phonetic": "/ˈpɑː.stə/",
            "exampleEn": "We love pasta for lunch.",
            "examplePt": "Adoramos macarrão no almoço."
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
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate",
            "simplePronunciation": "to-mêi-tou",
            "phonetic": "/təˈmeɪ.toʊ/",
            "exampleEn": "Slice the red tomato.",
            "examplePt": "Corte o tomate em fatias."
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
          "Pasta",
          "Cake",
          "Tomato",
          "Sandwich"
        ],
        "correctAnswer": "Tomato",
        "contextSentence": "Slice the red tomato.",
        "contextSentencePt": "Corte o tomate em fatias.",
        "explanation": "Exemplo: \"Slice the red tomato.\" — Corte o tomate em fatias.",
        "phoneticHint": "\"to-mêi-tou\" • /təˈmeɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Potato",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate",
            "simplePronunciation": "to-mêi-tou",
            "phonetic": "/təˈmeɪ.toʊ/",
            "exampleEn": "Slice the red tomato.",
            "examplePt": "Corte o tomate em fatias."
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
          "Tomato",
          "Potato",
          "Cake",
          "Orange"
        ],
        "correctAnswer": "Potato",
        "contextSentence": "Baked potatoes are delicious.",
        "contextSentencePt": "Batatas assadas são deliciosas.",
        "explanation": "Exemplo: \"Baked potatoes are delicious.\" — Batatas assadas são deliciosas.",
        "phoneticHint": "\"po-têi-tou\" • /pəˈteɪ.toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Onion",
        "visualEmoji": "🧅",
        "visualOptions": [
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
          "Potato",
          "Cake",
          "Orange",
          "Onion"
        ],
        "correctAnswer": "Onion",
        "contextSentence": "Chop the onion for the sauce.",
        "contextSentencePt": "Pique a cebola para o molho.",
        "explanation": "Exemplo: \"Chop the onion for the sauce.\" — Pique a cebola para o molho.",
        "phoneticHint": "\"â-nion\" • /ˈʌn.jən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
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
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão",
            "simplePronunciation": "pás-ta",
            "phonetic": "/ˈpɑː.stə/",
            "exampleEn": "We love pasta for lunch.",
            "examplePt": "Adoramos macarrão no almoço."
          }
        ],
        "options": [
          "Carrot",
          "Sandwich",
          "Onion",
          "Pasta"
        ],
        "correctAnswer": "Carrot",
        "contextSentence": "Carrots are crunchy and sweet.",
        "contextSentencePt": "Cenouras são crocantes e doces.",
        "explanation": "Exemplo: \"Carrots are crunchy and sweet.\" — Cenouras são crocantes e doces.",
        "phoneticHint": "\"ké-rot\" • /ˈkær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sandwich",
        "visualEmoji": "🥪",
        "visualOptions": [
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
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate",
            "simplePronunciation": "to-mêi-tou",
            "phonetic": "/təˈmeɪ.toʊ/",
            "exampleEn": "Slice the red tomato.",
            "examplePt": "Corte o tomate em fatias."
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
          }
        ],
        "options": [
          "Orange",
          "Sandwich",
          "Tomato",
          "Potato"
        ],
        "correctAnswer": "Sandwich",
        "contextSentence": "I packed a cheese sandwich.",
        "contextSentencePt": "Eu preparei um sanduíche de queijo.",
        "explanation": "Exemplo: \"I packed a cheese sandwich.\" — Eu preparei um sanduíche de queijo.",
        "phoneticHint": "\"sénd-uitch\" • /ˈsæn.wɪtʃ/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p10",
    "worldId": 0,
    "phaseNumber": 10,
    "themeId": "food",
    "themeTitle": "Tema 2: Comida",
    "frequencyLevel": "Módulo 4 • Menos Comuns ou Específicas",
    "title": "Comida • Módulo 4: Menos Comuns",
    "subtitle": "Tema: Comida (4/4) • 8 ingredientes e alimentos específicos",
    "pedagogicalObjective": "Conhecer 8 alimentos e ingredientes específicos: Garlic, Pineapple, Avocado, Broccoli, Mushroom, Pepper, Honey e Flour.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Comida — Módulo 4 (Palavras menos comuns ou específicas): ingredientes culinários e vegetais específicos.",
      "Palavras deste módulo (8): Garlic (\"gár-lik\" = Alho), Pineapple (\"pái-né-pol\" = Abacaxi), Avocado (\"a-vo-cá-dou\" = Abacate), Broccoli (\"bró-co-li\" = Brócolis), Mushroom (\"mâx-rum\" = Cogumelo), Pepper (\"pé-per\" = Pimentão/Pimenta), Honey (\"râ-ni\" = Mel) e Flour (\"fláu-er\" = Farinha)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p10-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
        "visualOptions": [
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis",
            "simplePronunciation": "bró-co-li",
            "phonetic": "/ˈbrɑː.kəl.i/",
            "exampleEn": "Broccoli is very nutritious.",
            "examplePt": "O brócolis é muito nutritivo."
          },
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour",
            "translationPt": "Farinha",
            "simplePronunciation": "fláu-er",
            "phonetic": "/ˈflaʊ.ər/",
            "exampleEn": "Mix flour and eggs for the cake.",
            "examplePt": "Misture farinha e ovos para o bolo."
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives flavor to food.",
            "examplePt": "O alho dá sabor à comida."
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel",
            "simplePronunciation": "râ-ni",
            "phonetic": "/ˈhʌn.i/",
            "exampleEn": "Bees make golden honey.",
            "examplePt": "As abelhas produzem mel."
          }
        ],
        "options": [
          "Broccoli",
          "Flour",
          "Garlic",
          "Honey"
        ],
        "correctAnswer": "Garlic",
        "contextSentence": "Garlic gives flavor to food.",
        "contextSentencePt": "O alho dá sabor à comida.",
        "explanation": "Exemplo: \"Garlic gives flavor to food.\" — O alho dá sabor à comida.",
        "phoneticHint": "\"gár-lik\" • /ˈɡɑːr.lɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
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
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives flavor to food.",
            "examplePt": "O alho dá sabor à comida."
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo",
            "simplePronunciation": "mâx-rum",
            "phonetic": "/ˈmʌʃ.ruːm/",
            "exampleEn": "Add mushrooms to the sauce.",
            "examplePt": "Adicione cogumelos ao molho."
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão / Pimenta",
            "simplePronunciation": "pé-per",
            "phonetic": "/ˈpep.ər/",
            "exampleEn": "Red pepper adds color to the dish.",
            "examplePt": "O pimentão dá cor ao prato."
          }
        ],
        "options": [
          "Pineapple",
          "Garlic",
          "Mushroom",
          "Pepper"
        ],
        "correctAnswer": "Pineapple",
        "contextSentence": "Pineapple is a tropical fruit.",
        "contextSentencePt": "O abacaxi é uma fruta tropical.",
        "explanation": "Exemplo: \"Pineapple is a tropical fruit.\" — O abacaxi é uma fruta tropical.",
        "phoneticHint": "\"pái-né-pol\" • /ˈpaɪnˌæp.əl/",
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
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives flavor to food.",
            "examplePt": "O alho dá sabor à comida."
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
            "examplePt": "As abelhas produzem mel."
          }
        ],
        "options": [
          "Pineapple",
          "Garlic",
          "Avocado",
          "Honey"
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
        "audioPhrase": "Broccoli",
        "visualEmoji": "🥦",
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
            "exampleEn": "Broccoli is very nutritious.",
            "examplePt": "O brócolis é muito nutritivo."
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão / Pimenta",
            "simplePronunciation": "pé-per",
            "phonetic": "/ˈpep.ər/",
            "exampleEn": "Red pepper adds color to the dish.",
            "examplePt": "O pimentão dá cor ao prato."
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
          }
        ],
        "options": [
          "Pineapple",
          "Broccoli",
          "Pepper",
          "Avocado"
        ],
        "correctAnswer": "Broccoli",
        "contextSentence": "Broccoli is very nutritious.",
        "contextSentencePt": "O brócolis é muito nutritivo.",
        "explanation": "Exemplo: \"Broccoli is very nutritious.\" — O brócolis é muito nutritivo.",
        "phoneticHint": "\"bró-co-li\" • /ˈbrɑː.kəl.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mushroom",
        "visualEmoji": "🍄",
        "visualOptions": [
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour",
            "translationPt": "Farinha",
            "simplePronunciation": "fláu-er",
            "phonetic": "/ˈflaʊ.ər/",
            "exampleEn": "Mix flour and eggs for the cake.",
            "examplePt": "Misture farinha e ovos para o bolo."
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho",
            "simplePronunciation": "gár-lik",
            "phonetic": "/ˈɡɑːr.lɪk/",
            "exampleEn": "Garlic gives flavor to food.",
            "examplePt": "O alho dá sabor à comida."
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel",
            "simplePronunciation": "râ-ni",
            "phonetic": "/ˈhʌn.i/",
            "exampleEn": "Bees make golden honey.",
            "examplePt": "As abelhas produzem mel."
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo",
            "simplePronunciation": "mâx-rum",
            "phonetic": "/ˈmʌʃ.ruːm/",
            "exampleEn": "Add mushrooms to the sauce.",
            "examplePt": "Adicione cogumelos ao molho."
          }
        ],
        "options": [
          "Flour",
          "Garlic",
          "Honey",
          "Mushroom"
        ],
        "correctAnswer": "Mushroom",
        "contextSentence": "Add mushrooms to the sauce.",
        "contextSentencePt": "Adicione cogumelos ao molho.",
        "explanation": "Exemplo: \"Add mushrooms to the sauce.\" — Adicione cogumelos ao molho.",
        "phoneticHint": "\"mâx-rum\" • /ˈmʌʃ.ruːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pepper",
        "visualEmoji": "🫑",
        "visualOptions": [
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão / Pimenta",
            "simplePronunciation": "pé-per",
            "phonetic": "/ˈpep.ər/",
            "exampleEn": "Red pepper adds color to the dish.",
            "examplePt": "O pimentão dá cor ao prato."
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
            "exampleEn": "Broccoli is very nutritious.",
            "examplePt": "O brócolis é muito nutritivo."
          }
        ],
        "options": [
          "Pepper",
          "Avocado",
          "Pineapple",
          "Broccoli"
        ],
        "correctAnswer": "Pepper",
        "contextSentence": "Red pepper adds color to the dish.",
        "contextSentencePt": "O pimentão dá cor ao prato.",
        "explanation": "Exemplo: \"Red pepper adds color to the dish.\" — O pimentão dá cor ao prato.",
        "phoneticHint": "\"pé-per\" • /ˈpep.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Honey",
        "visualEmoji": "🍯",
        "visualOptions": [
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis",
            "simplePronunciation": "bró-co-li",
            "phonetic": "/ˈbrɑː.kəl.i/",
            "exampleEn": "Broccoli is very nutritious.",
            "examplePt": "O brócolis é muito nutritivo."
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel",
            "simplePronunciation": "râ-ni",
            "phonetic": "/ˈhʌn.i/",
            "exampleEn": "Bees make golden honey.",
            "examplePt": "As abelhas produzem mel."
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo",
            "simplePronunciation": "mâx-rum",
            "phonetic": "/ˈmʌʃ.ruːm/",
            "exampleEn": "Add mushrooms to the sauce.",
            "examplePt": "Adicione cogumelos ao molho."
          },
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour",
            "translationPt": "Farinha",
            "simplePronunciation": "fláu-er",
            "phonetic": "/ˈflaʊ.ər/",
            "exampleEn": "Mix flour and eggs for the cake.",
            "examplePt": "Misture farinha e ovos para o bolo."
          }
        ],
        "options": [
          "Broccoli",
          "Honey",
          "Mushroom",
          "Flour"
        ],
        "correctAnswer": "Honey",
        "contextSentence": "Bees make golden honey.",
        "contextSentencePt": "As abelhas produzem mel.",
        "explanation": "Exemplo: \"Bees make golden honey.\" — As abelhas produzem mel.",
        "phoneticHint": "\"râ-ni\" • /ˈhʌn.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Flour",
        "visualEmoji": "🥣",
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
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão / Pimenta",
            "simplePronunciation": "pé-per",
            "phonetic": "/ˈpep.ər/",
            "exampleEn": "Red pepper adds color to the dish.",
            "examplePt": "O pimentão dá cor ao prato."
          },
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour",
            "translationPt": "Farinha",
            "simplePronunciation": "fláu-er",
            "phonetic": "/ˈflaʊ.ər/",
            "exampleEn": "Mix flour and eggs for the cake.",
            "examplePt": "Misture farinha e ovos para o bolo."
          }
        ],
        "options": [
          "Pineapple",
          "Avocado",
          "Pepper",
          "Flour"
        ],
        "correctAnswer": "Flour",
        "contextSentence": "Mix flour and eggs for the cake.",
        "contextSentencePt": "Misture farinha e ovos para o bolo.",
        "explanation": "Exemplo: \"Mix flour and eggs for the cake.\" — Misture farinha e ovos para o bolo.",
        "phoneticHint": "\"fláu-er\" • /ˈflaʊ.ər/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p11",
    "worldId": 0,
    "phaseNumber": 11,
    "themeId": "body",
    "themeTitle": "Tema 3: Corpo Humano",
    "frequencyLevel": "Módulo 1 • Essenciais e Mais Comuns",
    "title": "Corpo Humano • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema: Corpo Humano (1/4) • 8 partes essenciais do corpo",
    "pedagogicalObjective": "Reconhecer as 8 partes mais essenciais do corpo humano: Head, Hand, Foot, Eye, Ear, Nose, Mouth e Arm.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Corpo Humano — Módulo 1 (Palavras essenciais e mais comuns): as partes fundamentais do corpo.",
      "Palavras deste módulo (8): Head (\"réd\" = Cabeça), Hand (\"rénd\" = Mão), Foot (\"fút\" = Pé), Eye (\"ái\" = Olho), Ear (\"ír\" = Orelha/Ouvido), Nose (\"nôuz\" = Nariz), Mouth (\"máuth\" = Boca) e Arm (\"árm\" = Braço)."
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
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido",
            "simplePronunciation": "ír",
            "phonetic": "/ɪr/",
            "exampleEn": "We listen with our ears.",
            "examplePt": "Nós ouvimos com os ouvidos."
          }
        ],
        "options": [
          "Head",
          "Foot",
          "Eye",
          "Ear"
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
          "Arm",
          "Mouth",
          "Hand",
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
          "Hand",
          "Foot",
          "Head",
          "Arm"
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
          "Nose",
          "Head",
          "Mouth",
          "Eye"
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
            "examplePt": "Nós ouvimos com os ouvidos."
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
          "Ear",
          "Foot",
          "Hand",
          "Arm"
        ],
        "correctAnswer": "Ear",
        "contextSentence": "We listen with our ears.",
        "contextSentencePt": "Nós ouvimos com os ouvidos.",
        "explanation": "Exemplo: \"We listen with our ears.\" — Nós ouvimos com os ouvidos.",
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
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido",
            "simplePronunciation": "ír",
            "phonetic": "/ɪr/",
            "exampleEn": "We listen with our ears.",
            "examplePt": "Nós ouvimos com os ouvidos."
          }
        ],
        "options": [
          "Eye",
          "Nose",
          "Foot",
          "Ear"
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
          "Hand",
          "Head",
          "Eye",
          "Mouth"
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
        "audioPhrase": "Arm",
        "visualEmoji": "💪",
        "visualOptions": [
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
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido",
            "simplePronunciation": "ír",
            "phonetic": "/ɪr/",
            "exampleEn": "We listen with our ears.",
            "examplePt": "Nós ouvimos com os ouvidos."
          }
        ],
        "options": [
          "Nose",
          "Foot",
          "Arm",
          "Ear"
        ],
        "correctAnswer": "Arm",
        "contextSentence": "Stretch your arms high.",
        "contextSentencePt": "Estique seus braços para o alto.",
        "explanation": "Exemplo: \"Stretch your arms high.\" — Estique seus braços para o alto.",
        "phoneticHint": "\"árm\" • /ɑːrm/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p12",
    "worldId": 0,
    "phaseNumber": 12,
    "themeId": "pronouns",
    "themeTitle": "Lição de Pronomes",
    "frequencyLevel": "1 a cada 3 Módulos de Vocabulário",
    "title": "Lição de Pronomes III • Reflexivos & Interrogativos",
    "subtitle": "Módulo de Pronomes 3/8 (Após 9 de Vocabulário) • Explicação Didática + Pares Associativos",
    "pedagogicalObjective": "Dominar os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Ourselves) e os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "3ª Lição Exclusiva de Pronomes (após 9 módulos de vocabulário).",
      "5ª Parte — Pronomes Reflexivos: usados quando o sujeito faz e recebe a ação, ou para enfatizar que realizou a ação sozinho.",
      "6ª Parte — Pronomes Interrogativos (Question Words): usados para formular perguntas diretas sobre pessoas, coisas, lugares, tempo, motivo, posse e modo."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p12-pron-1",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Myself, Yourself, Himself, Herself)",
        "conceptHeader": "Os Pronomes Reflexivos indicam que a ação recai sobre quem a pratica, ou destacam que alguém fez algo por conta própria: \"Myself\" (Eu mesmo / me), \"Yourself\" (Você mesmo / se), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma).",
        "teacherAudioPt": "/audio/teacher/pronoun_5.wav",
        "prompt": "🤝 Conecte cada Pronome Reflexivo ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p12-b1-ref1",
            "en": "Myself (\"mai-sélf\")",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / a mim mesmo(a)",
            "tipPt": "Correto! Exemplo: \"I see myself in the mirror\" (Eu me vejo no espelho)."
          },
          {
            "id": "w0-p12-b1-ref2",
            "en": "Yourself (\"iór-sélf\")",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / a si mesmo(a)",
            "tipPt": "Exato! Exemplo: \"Take care of yourself\" (Cuide de si mesmo)."
          },
          {
            "id": "w0-p12-b1-ref3",
            "en": "Himself (\"rim-sélf\")",
            "emoji": "👨",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (masculino singular)",
            "tipPt": "Perfeito! Exemplo: \"He cooked dinner himself\" (Ele mesmo preparou o jantar)."
          },
          {
            "id": "w0-p12-b1-ref4",
            "en": "Herself (\"râr-sélf\")",
            "emoji": "👩",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (feminino singular)",
            "tipPt": "Muito bem! Exemplo: \"She fixed it herself\" (Ela mesma consertou isso)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Myself (Eu mesmo), Yourself (Você mesmo), Himself (Ele mesmo), Herself (Ela mesma).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-pron-2",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos I (Who, What, Where, When)",
        "conceptHeader": "Os Pronomes Interrogativos iniciam perguntas específicas: \"Who\" pergunta sobre pessoas (Quem?), \"What\" pergunta sobre coisas, ações ou informações (O quê? / Qual?), \"Where\" pergunta sobre lugares (Onde?) e \"When\" pergunta sobre tempo (Quando?).",
        "teacherAudioPt": "/audio/teacher/pronoun_6.wav",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à sua função na pergunta:",
        "pairs": [
          {
            "id": "w0-p12-b2-int1",
            "en": "Who? (\"rú\")",
            "emoji": "🧑",
            "phonetic": "/huː/",
            "pt": "Quem? (usado para perguntar sobre PESSOAS)",
            "tipPt": "Correto! Exemplo: \"Who is the teacher?\" (Quem é o professor?)."
          },
          {
            "id": "w0-p12-b2-int2",
            "en": "What? (\"uót\")",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (para COISAS ou informações)",
            "tipPt": "Exato! Exemplo: \"What is your name?\" (Qual é o seu nome?)."
          },
          {
            "id": "w0-p12-b2-int3",
            "en": "Where? (\"uér\")",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (usado para perguntar sobre LUGARES)",
            "tipPt": "Perfeito! Exemplo: \"Where is the station?\" (Onde fica a estação?)."
          },
          {
            "id": "w0-p12-b2-int4",
            "en": "When? (\"uén\")",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (usado para perguntar sobre TEMPO/HORA)",
            "tipPt": "Muito bem! Exemplo: \"When is the meeting?\" (Quando é a reunião?)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Who? (Quem?), What? (O quê? / Qual?), Where? (Onde?), When? (Quando?).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-pron-3",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos II (Why, Whose, Which, How)",
        "conceptHeader": "Completando as palavras interrogativas: \"Why\" pergunta a razão ou motivo (Por quê?), \"Whose\" pergunta a quem pertence algo (De quem?), \"Which\" é usado para escolher entre opções definidas (Qual?) e \"How\" pergunta o modo ou estado (Como?).",
        "teacherAudioPt": "/audio/teacher/pronoun_6.wav",
        "prompt": "🤝 Associe os Pronomes Interrogativos \"Why, Whose, Which, How\" aos seus pares:",
        "pairs": [
          {
            "id": "w0-p12-b3-int5",
            "en": "Why? (\"uái\")",
            "emoji": "🤔",
            "phonetic": "/waɪ/",
            "pt": "Por quê? (pergunta a RAZÃO ou MOTIVO)",
            "tipPt": "Correto! E para responder \"Porque\", usamos \"Because\"."
          },
          {
            "id": "w0-p12-b3-int6",
            "en": "Whose? (\"rúz\")",
            "emoji": "👜",
            "phonetic": "/huːz/",
            "pt": "De quem? (pergunta sobre POSSE / DONO)",
            "tipPt": "Exato! Exemplo: \"Whose bag is this?\" (De quem é esta bolsa?)."
          },
          {
            "id": "w0-p12-b3-int7",
            "en": "Which? (\"uítch\")",
            "emoji": "⚖️",
            "phonetic": "/wɪtʃ/",
            "pt": "Qual? (usado para ESCOLHER entre opções dadas)",
            "tipPt": "Perfeito! Exemplo: \"Which shirt do you prefer?\" (Qual camisa você prefere?)."
          },
          {
            "id": "w0-p12-b3-int8",
            "en": "How? (\"ráu\")",
            "emoji": "🛠️",
            "phonetic": "/haʊ/",
            "pt": "Como? (pergunta o MODO, meio ou estado)",
            "tipPt": "Excelente! Exemplo: \"How are you today?\" (Como você está hoje?)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Why? (Por quê?), Whose? (De quem?), Which? (Qual - entre opções?), How? (Como?).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p13",
    "worldId": 0,
    "phaseNumber": 13,
    "themeId": "body",
    "themeTitle": "Tema 3: Corpo Humano",
    "frequencyLevel": "Módulo 2 • Palavras Comuns",
    "title": "Corpo Humano • Módulo 2: Palavras Comuns",
    "subtitle": "Tema: Corpo Humano (2/4) • 8 partes comuns do corpo",
    "pedagogicalObjective": "Identificar 8 partes comuns do corpo: Leg, Hair, Face, Tooth, Finger, Back, Heart e Neck.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Corpo Humano — Módulo 2 (Palavras comuns): partes do corpo muito frequentes no cotidiano.",
      "Palavras deste módulo (8): Leg (\"lég\" = Perna), Hair (\"rér\" = Cabelo), Face (\"fêis\" = Rosto), Tooth (\"túth\" = Dente), Finger (\"fín-guer\" = Dedo da mão), Back (\"bék\" = Costas), Heart (\"rárt\" = Coração) e Neck (\"nék\" = Pescoço)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p13-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Leg",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração",
            "simplePronunciation": "rárt",
            "phonetic": "/hɑːrt/",
            "exampleEn": "Your heart beats fast when you run.",
            "examplePt": "Seu coração bate rápido ao correr."
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
            "text": "Back",
            "emoji": "🧍",
            "label": "Back",
            "translationPt": "Costas",
            "simplePronunciation": "bék",
            "phonetic": "/bæk/",
            "exampleEn": "Keep your back straight.",
            "examplePt": "Mantenha as costas retas."
          }
        ],
        "options": [
          "Heart",
          "Leg",
          "Face",
          "Back"
        ],
        "correctAnswer": "Leg",
        "contextSentence": "He has strong legs for running.",
        "contextSentencePt": "Ele tem pernas fortes para correr.",
        "explanation": "Exemplo: \"He has strong legs for running.\" — Ele tem pernas fortes para correr.",
        "phoneticHint": "\"lég\" • /leɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hair",
        "visualEmoji": "💇",
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
            "exampleEn": "Wrap a scarf around your neck.",
            "examplePt": "Coloque um cachecol no pescoço."
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove os dentes após as refeições."
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo",
            "simplePronunciation": "rér",
            "phonetic": "/her/",
            "exampleEn": "She brushes her long hair.",
            "examplePt": "Ela escova o cabelo comprido."
          }
        ],
        "options": [
          "Finger",
          "Neck",
          "Tooth",
          "Hair"
        ],
        "correctAnswer": "Hair",
        "contextSentence": "She brushes her long hair.",
        "contextSentencePt": "Ela escova o cabelo comprido.",
        "explanation": "Exemplo: \"She brushes her long hair.\" — Ela escova o cabelo comprido.",
        "phoneticHint": "\"rér\" • /her/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e3",
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
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração",
            "simplePronunciation": "rárt",
            "phonetic": "/hɑːrt/",
            "exampleEn": "Your heart beats fast when you run.",
            "examplePt": "Seu coração bate rápido ao correr."
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back",
            "translationPt": "Costas",
            "simplePronunciation": "bék",
            "phonetic": "/bæk/",
            "exampleEn": "Keep your back straight.",
            "examplePt": "Mantenha as costas retas."
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
          "Face",
          "Heart",
          "Back",
          "Leg"
        ],
        "correctAnswer": "Face",
        "contextSentence": "Wash your face in the morning.",
        "contextSentencePt": "Lave o rosto de manhã.",
        "explanation": "Exemplo: \"Wash your face in the morning.\" — Lave o rosto de manhã.",
        "phoneticHint": "\"fêis\" • /feɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tooth",
        "visualEmoji": "🦷",
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
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove os dentes após as refeições."
          },
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck",
            "translationPt": "Pescoço",
            "simplePronunciation": "nék",
            "phonetic": "/nek/",
            "exampleEn": "Wrap a scarf around your neck.",
            "examplePt": "Coloque um cachecol no pescoço."
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo",
            "simplePronunciation": "rér",
            "phonetic": "/her/",
            "exampleEn": "She brushes her long hair.",
            "examplePt": "Ela escova o cabelo comprido."
          }
        ],
        "options": [
          "Leg",
          "Tooth",
          "Neck",
          "Hair"
        ],
        "correctAnswer": "Tooth",
        "contextSentence": "Brush every tooth after meals.",
        "contextSentencePt": "Escove os dentes após as refeições.",
        "explanation": "Exemplo: \"Brush every tooth after meals.\" — Escove os dentes após as refeições.",
        "phoneticHint": "\"túth\" • /tuːθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Finger",
        "visualEmoji": "☝️",
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
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove os dentes após as refeições."
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo",
            "simplePronunciation": "rér",
            "phonetic": "/her/",
            "exampleEn": "She brushes her long hair.",
            "examplePt": "Ela escova o cabelo comprido."
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
          }
        ],
        "options": [
          "Face",
          "Tooth",
          "Hair",
          "Finger"
        ],
        "correctAnswer": "Finger",
        "contextSentence": "We have five fingers on each hand.",
        "contextSentencePt": "Temos cinco dedos em cada mão.",
        "explanation": "Exemplo: \"We have five fingers on each hand.\" — Temos cinco dedos em cada mão.",
        "phoneticHint": "\"fín-guer\" • /ˈfɪŋ.ɡər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Back",
        "visualEmoji": "🧍",
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
            "text": "Back",
            "emoji": "🧍",
            "label": "Back",
            "translationPt": "Costas",
            "simplePronunciation": "bék",
            "phonetic": "/bæk/",
            "exampleEn": "Keep your back straight.",
            "examplePt": "Mantenha as costas retas."
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
          }
        ],
        "options": [
          "Leg",
          "Face",
          "Back",
          "Finger"
        ],
        "correctAnswer": "Back",
        "contextSentence": "Keep your back straight.",
        "contextSentencePt": "Mantenha as costas retas.",
        "explanation": "Exemplo: \"Keep your back straight.\" — Mantenha as costas retas.",
        "phoneticHint": "\"bék\" • /bæk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Heart",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração",
            "simplePronunciation": "rárt",
            "phonetic": "/hɑːrt/",
            "exampleEn": "Your heart beats fast when you run.",
            "examplePt": "Seu coração bate rápido ao correr."
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back",
            "translationPt": "Costas",
            "simplePronunciation": "bék",
            "phonetic": "/bæk/",
            "exampleEn": "Keep your back straight.",
            "examplePt": "Mantenha as costas retas."
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo",
            "simplePronunciation": "rér",
            "phonetic": "/her/",
            "exampleEn": "She brushes her long hair.",
            "examplePt": "Ela escova o cabelo comprido."
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
          }
        ],
        "options": [
          "Heart",
          "Back",
          "Hair",
          "Finger"
        ],
        "correctAnswer": "Heart",
        "contextSentence": "Your heart beats fast when you run.",
        "contextSentencePt": "Seu coração bate rápido ao correr.",
        "explanation": "Exemplo: \"Your heart beats fast when you run.\" — Seu coração bate rápido ao correr.",
        "phoneticHint": "\"rárt\" • /hɑːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Neck",
        "visualEmoji": "🧣",
        "visualOptions": [
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente",
            "simplePronunciation": "túth",
            "phonetic": "/tuːθ/",
            "exampleEn": "Brush every tooth after meals.",
            "examplePt": "Escove os dentes após as refeições."
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
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck",
            "translationPt": "Pescoço",
            "simplePronunciation": "nék",
            "phonetic": "/nek/",
            "exampleEn": "Wrap a scarf around your neck.",
            "examplePt": "Coloque um cachecol no pescoço."
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
          "Tooth",
          "Leg",
          "Neck",
          "Face"
        ],
        "correctAnswer": "Neck",
        "contextSentence": "Wrap a scarf around your neck.",
        "contextSentencePt": "Coloque um cachecol no pescoço.",
        "explanation": "Exemplo: \"Wrap a scarf around your neck.\" — Coloque um cachecol no pescoço.",
        "phoneticHint": "\"nék\" • /nek/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p14",
    "worldId": 0,
    "phaseNumber": 14,
    "themeId": "body",
    "themeTitle": "Tema 3: Corpo Humano",
    "frequencyLevel": "Módulo 3 • Palavras Intermediárias",
    "title": "Corpo Humano • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema: Corpo Humano (3/4) • 8 articulações e órgãos intermediários",
    "pedagogicalObjective": "Aprender 8 partes intermediárias do corpo: Shoulder, Knee, Stomach, Skin, Tongue, Brain, Elbow e Wrist.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Corpo Humano — Módulo 3 (Palavras intermediárias): articulações e órgãos importantes.",
      "Palavras deste módulo (8): Shoulder (\"xôul-der\" = Ombro), Knee (\"ní\" = Joelho), Stomach (\"stâ-mak\" = Estômago/Barriga), Skin (\"skín\" = Pele), Tongue (\"tâng\" = Língua), Brain (\"brêin\" = Cérebro), Elbow (\"él-bou\" = Cotovelo) e Wrist (\"ríst\" = Pulso)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p14-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shoulder",
        "visualEmoji": "🤷",
        "visualOptions": [
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow",
            "translationPt": "Cotovelo",
            "simplePronunciation": "él-bou",
            "phonetic": "/ˈel.boʊ/",
            "exampleEn": "Rest your elbow on the armrest.",
            "examplePt": "Apoie o cotovelo no braço da cadeira."
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
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro",
            "simplePronunciation": "brêin",
            "phonetic": "/breɪn/",
            "exampleEn": "Reading exercises the brain.",
            "examplePt": "A leitura exercita o cérebro."
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
          "Elbow",
          "Stomach",
          "Brain",
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
        "id": "w0-p14-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
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
            "examplePt": "Dobre os joelhos devagar."
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin",
            "translationPt": "Pele",
            "simplePronunciation": "skín",
            "phonetic": "/skɪn/",
            "exampleEn": "Drink water for healthy skin.",
            "examplePt": "Beba água para uma pele saudável."
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
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue",
            "translationPt": "Língua",
            "simplePronunciation": "tâng",
            "phonetic": "/tʌŋ/",
            "exampleEn": "We taste food with our tongue.",
            "examplePt": "Sentimos o gosto com a língua."
          }
        ],
        "options": [
          "Knee",
          "Skin",
          "Wrist",
          "Tongue"
        ],
        "correctAnswer": "Knee",
        "contextSentence": "Bend your knees slowly.",
        "contextSentencePt": "Dobre os joelhos devagar.",
        "explanation": "Exemplo: \"Bend your knees slowly.\" — Dobre os joelhos devagar.",
        "phoneticHint": "\"ní\" • /niː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Stomach",
        "visualEmoji": "🤰",
        "visualOptions": [
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro",
            "simplePronunciation": "brêin",
            "phonetic": "/breɪn/",
            "exampleEn": "Reading exercises the brain.",
            "examplePt": "A leitura exercita o cérebro."
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
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow",
            "translationPt": "Cotovelo",
            "simplePronunciation": "él-bou",
            "phonetic": "/ˈel.boʊ/",
            "exampleEn": "Rest your elbow on the armrest.",
            "examplePt": "Apoie o cotovelo no braço da cadeira."
          }
        ],
        "options": [
          "Brain",
          "Stomach",
          "Shoulder",
          "Elbow"
        ],
        "correctAnswer": "Stomach",
        "contextSentence": "My stomach is full after dinner.",
        "contextSentencePt": "Meu estômago está cheio após o jantar.",
        "explanation": "Exemplo: \"My stomach is full after dinner.\" — Meu estômago está cheio após o jantar.",
        "phoneticHint": "\"stâ-mak\" • /ˈstʌm.ək/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Skin",
        "visualEmoji": "✋",
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
            "examplePt": "Dobre os joelhos devagar."
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin",
            "translationPt": "Pele",
            "simplePronunciation": "skín",
            "phonetic": "/skɪn/",
            "exampleEn": "Drink water for healthy skin.",
            "examplePt": "Beba água para uma pele saudável."
          }
        ],
        "options": [
          "Stomach",
          "Shoulder",
          "Knee",
          "Skin"
        ],
        "correctAnswer": "Skin",
        "contextSentence": "Drink water for healthy skin.",
        "contextSentencePt": "Beba água para uma pele saudável.",
        "explanation": "Exemplo: \"Drink water for healthy skin.\" — Beba água para uma pele saudável.",
        "phoneticHint": "\"skín\" • /skɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Tongue",
        "visualEmoji": "👅",
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
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee",
            "translationPt": "Joelho",
            "simplePronunciation": "ní",
            "phonetic": "/niː/",
            "exampleEn": "Bend your knees slowly.",
            "examplePt": "Dobre os joelhos devagar."
          },
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue",
            "translationPt": "Língua",
            "simplePronunciation": "tâng",
            "phonetic": "/tʌŋ/",
            "exampleEn": "We taste food with our tongue.",
            "examplePt": "Sentimos o gosto com a língua."
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin",
            "translationPt": "Pele",
            "simplePronunciation": "skín",
            "phonetic": "/skɪn/",
            "exampleEn": "Drink water for healthy skin.",
            "examplePt": "Beba água para uma pele saudável."
          }
        ],
        "options": [
          "Wrist",
          "Knee",
          "Tongue",
          "Skin"
        ],
        "correctAnswer": "Tongue",
        "contextSentence": "We taste food with our tongue.",
        "contextSentencePt": "Sentimos o gosto com a língua.",
        "explanation": "Exemplo: \"We taste food with our tongue.\" — Sentimos o gosto com a língua.",
        "phoneticHint": "\"tâng\" • /tʌŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Brain",
        "visualEmoji": "🧠",
        "visualOptions": [
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro",
            "simplePronunciation": "brêin",
            "phonetic": "/breɪn/",
            "exampleEn": "Reading exercises the brain.",
            "examplePt": "A leitura exercita o cérebro."
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
          },
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue",
            "translationPt": "Língua",
            "simplePronunciation": "tâng",
            "phonetic": "/tʌŋ/",
            "exampleEn": "We taste food with our tongue.",
            "examplePt": "Sentimos o gosto com a língua."
          }
        ],
        "options": [
          "Brain",
          "Shoulder",
          "Stomach",
          "Tongue"
        ],
        "correctAnswer": "Brain",
        "contextSentence": "Reading exercises the brain.",
        "contextSentencePt": "A leitura exercita o cérebro.",
        "explanation": "Exemplo: \"Reading exercises the brain.\" — A leitura exercita o cérebro.",
        "phoneticHint": "\"brêin\" • /breɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Elbow",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee",
            "translationPt": "Joelho",
            "simplePronunciation": "ní",
            "phonetic": "/niː/",
            "exampleEn": "Bend your knees slowly.",
            "examplePt": "Dobre os joelhos devagar."
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro",
            "simplePronunciation": "brêin",
            "phonetic": "/breɪn/",
            "exampleEn": "Reading exercises the brain.",
            "examplePt": "A leitura exercita o cérebro."
          },
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow",
            "translationPt": "Cotovelo",
            "simplePronunciation": "él-bou",
            "phonetic": "/ˈel.boʊ/",
            "exampleEn": "Rest your elbow on the armrest.",
            "examplePt": "Apoie o cotovelo no braço da cadeira."
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin",
            "translationPt": "Pele",
            "simplePronunciation": "skín",
            "phonetic": "/skɪn/",
            "exampleEn": "Drink water for healthy skin.",
            "examplePt": "Beba água para uma pele saudável."
          }
        ],
        "options": [
          "Knee",
          "Brain",
          "Elbow",
          "Skin"
        ],
        "correctAnswer": "Elbow",
        "contextSentence": "Rest your elbow on the armrest.",
        "contextSentencePt": "Apoie o cotovelo no braço da cadeira.",
        "explanation": "Exemplo: \"Rest your elbow on the armrest.\" — Apoie o cotovelo no braço da cadeira.",
        "phoneticHint": "\"él-bou\" • /ˈel.boʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wrist",
        "visualEmoji": "⌚",
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
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue",
            "translationPt": "Língua",
            "simplePronunciation": "tâng",
            "phonetic": "/tʌŋ/",
            "exampleEn": "We taste food with our tongue.",
            "examplePt": "Sentimos o gosto com a língua."
          }
        ],
        "options": [
          "Stomach",
          "Wrist",
          "Shoulder",
          "Tongue"
        ],
        "correctAnswer": "Wrist",
        "contextSentence": "She wears a watch on her wrist.",
        "contextSentencePt": "Ela usa um relógio no pulso.",
        "explanation": "Exemplo: \"She wears a watch on her wrist.\" — Ela usa um relógio no pulso.",
        "phoneticHint": "\"ríst\" • /rɪst/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p15",
    "worldId": 0,
    "phaseNumber": 15,
    "themeId": "body",
    "themeTitle": "Tema 3: Corpo Humano",
    "frequencyLevel": "Módulo 4 • Menos Comuns ou Específicas",
    "title": "Corpo Humano • Módulo 4: Menos Comuns",
    "subtitle": "Tema: Corpo Humano (4/4) • 8 partes específicas do rosto e corpo",
    "pedagogicalObjective": "Dominar 8 detalhes específicos do corpo: Ankle, Eyebrow, Eyelash, Chin, Cheek, Forehead, Throat e Lung.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Corpo Humano — Módulo 4 (Palavras menos comuns ou específicas): detalhes do rosto e sistema respiratório.",
      "Palavras deste módulo (8): Ankle (\"én-kol\" = Tornozelo), Eyebrow (\"ái-brau\" = Sobrancelha), Eyelash (\"ái-léx\" = Cílio), Chin (\"tchín\" = Queixo), Cheek (\"tchík\" = Bochecha), Forehead (\"fór-réd\" = Testa), Throat (\"thrôut\" = Garganta) e Lung (\"lâng\" = Pulmão)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p15-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ankle",
        "visualEmoji": "🦶",
        "visualOptions": [
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
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash",
            "translationPt": "Cílio",
            "simplePronunciation": "ái-léx",
            "phonetic": "/ˈaɪ.læʃ/",
            "exampleEn": "Eyelashes protect our eyes.",
            "examplePt": "Os cílios protegem nossos olhos."
          },
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead",
            "translationPt": "Testa",
            "simplePronunciation": "fór-réd",
            "phonetic": "/ˈfɔːr.hed/",
            "exampleEn": "She touched his forehead.",
            "examplePt": "Ela tocou a testa dele."
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
          "Ankle",
          "Eyelash",
          "Forehead",
          "Lung"
        ],
        "correctAnswer": "Ankle",
        "contextSentence": "Warm up your ankles before running.",
        "contextSentencePt": "Aqueça os tornozelos antes de correr.",
        "explanation": "Exemplo: \"Warm up your ankles before running.\" — Aqueça os tornozelos antes de correr.",
        "phoneticHint": "\"én-kol\" • /ˈæŋ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Eyebrow",
        "visualEmoji": "🤨",
        "visualOptions": [
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
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow",
            "translationPt": "Sobrancelha",
            "simplePronunciation": "ái-brau",
            "phonetic": "/ˈaɪ.braʊ/",
            "exampleEn": "He raised one eyebrow.",
            "examplePt": "Ele levantou uma sobrancelha."
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat",
            "translationPt": "Garganta",
            "simplePronunciation": "thrôut",
            "phonetic": "/θroʊt/",
            "exampleEn": "Warm tea soothes the throat.",
            "examplePt": "Chá morno alivia a garganta."
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
          "Cheek",
          "Eyebrow",
          "Throat",
          "Chin"
        ],
        "correctAnswer": "Eyebrow",
        "contextSentence": "He raised one eyebrow.",
        "contextSentencePt": "Ele levantou uma sobrancelha.",
        "explanation": "Exemplo: \"He raised one eyebrow.\" — Ele levantou uma sobrancelha.",
        "phoneticHint": "\"ái-brau\" • /ˈaɪ.braʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Eyelash",
        "visualEmoji": "👁️",
        "visualOptions": [
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
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead",
            "translationPt": "Testa",
            "simplePronunciation": "fór-réd",
            "phonetic": "/ˈfɔːr.hed/",
            "exampleEn": "She touched his forehead.",
            "examplePt": "Ela tocou a testa dele."
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
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash",
            "translationPt": "Cílio",
            "simplePronunciation": "ái-léx",
            "phonetic": "/ˈaɪ.læʃ/",
            "exampleEn": "Eyelashes protect our eyes.",
            "examplePt": "Os cílios protegem nossos olhos."
          }
        ],
        "options": [
          "Ankle",
          "Forehead",
          "Lung",
          "Eyelash"
        ],
        "correctAnswer": "Eyelash",
        "contextSentence": "Eyelashes protect our eyes.",
        "contextSentencePt": "Os cílios protegem nossos olhos.",
        "explanation": "Exemplo: \"Eyelashes protect our eyes.\" — Os cílios protegem nossos olhos.",
        "phoneticHint": "\"ái-léx\" • /ˈaɪ.læʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chin",
        "visualEmoji": "🧑",
        "visualOptions": [
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat",
            "translationPt": "Garganta",
            "simplePronunciation": "thrôut",
            "phonetic": "/θroʊt/",
            "exampleEn": "Warm tea soothes the throat.",
            "examplePt": "Chá morno alivia a garganta."
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
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow",
            "translationPt": "Sobrancelha",
            "simplePronunciation": "ái-brau",
            "phonetic": "/ˈaɪ.braʊ/",
            "exampleEn": "He raised one eyebrow.",
            "examplePt": "Ele levantou uma sobrancelha."
          }
        ],
        "options": [
          "Throat",
          "Ankle",
          "Chin",
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
        "id": "w0-p15-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cheek",
        "visualEmoji": "😊",
        "visualOptions": [
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
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow",
            "translationPt": "Sobrancelha",
            "simplePronunciation": "ái-brau",
            "phonetic": "/ˈaɪ.braʊ/",
            "exampleEn": "He raised one eyebrow.",
            "examplePt": "Ele levantou uma sobrancelha."
          },
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash",
            "translationPt": "Cílio",
            "simplePronunciation": "ái-léx",
            "phonetic": "/ˈaɪ.læʃ/",
            "exampleEn": "Eyelashes protect our eyes.",
            "examplePt": "Os cílios protegem nossos olhos."
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
          "Cheek",
          "Eyebrow",
          "Eyelash",
          "Chin"
        ],
        "correctAnswer": "Cheek",
        "contextSentence": "She kissed her baby on the cheek.",
        "contextSentencePt": "Ela beijou o bebê na bochecha.",
        "explanation": "Exemplo: \"She kissed her baby on the cheek.\" — Ela beijou o bebê na bochecha.",
        "phoneticHint": "\"tchík\" • /tʃiːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Forehead",
        "visualEmoji": "🧑",
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
            "exampleEn": "She touched his forehead.",
            "examplePt": "Ela tocou a testa dele."
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
          "Lung",
          "Chin",
          "Forehead",
          "Cheek"
        ],
        "correctAnswer": "Forehead",
        "contextSentence": "She touched his forehead.",
        "contextSentencePt": "Ela tocou a testa dele.",
        "explanation": "Exemplo: \"She touched his forehead.\" — Ela tocou a testa dele.",
        "phoneticHint": "\"fór-réd\" • /ˈfɔːr.hed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Throat",
        "visualEmoji": "🍵",
        "visualOptions": [
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow",
            "translationPt": "Sobrancelha",
            "simplePronunciation": "ái-brau",
            "phonetic": "/ˈaɪ.braʊ/",
            "exampleEn": "He raised one eyebrow.",
            "examplePt": "Ele levantou uma sobrancelha."
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat",
            "translationPt": "Garganta",
            "simplePronunciation": "thrôut",
            "phonetic": "/θroʊt/",
            "exampleEn": "Warm tea soothes the throat.",
            "examplePt": "Chá morno alivia a garganta."
          },
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash",
            "translationPt": "Cílio",
            "simplePronunciation": "ái-léx",
            "phonetic": "/ˈaɪ.læʃ/",
            "exampleEn": "Eyelashes protect our eyes.",
            "examplePt": "Os cílios protegem nossos olhos."
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
          "Eyebrow",
          "Throat",
          "Eyelash",
          "Ankle"
        ],
        "correctAnswer": "Throat",
        "contextSentence": "Warm tea soothes the throat.",
        "contextSentencePt": "Chá morno alivia a garganta.",
        "explanation": "Exemplo: \"Warm tea soothes the throat.\" — Chá morno alivia a garganta.",
        "phoneticHint": "\"thrôut\" • /θroʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Lung",
        "visualEmoji": "🫁",
        "visualOptions": [
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
            "exampleEn": "She touched his forehead.",
            "examplePt": "Ela tocou a testa dele."
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
          "Cheek",
          "Chin",
          "Forehead",
          "Lung"
        ],
        "correctAnswer": "Lung",
        "contextSentence": "Fresh air fills our lungs.",
        "contextSentencePt": "O ar puro enche nossos pulmões.",
        "explanation": "Exemplo: \"Fresh air fills our lungs.\" — O ar puro enche nossos pulmões.",
        "phoneticHint": "\"lâng\" • /lʌŋ/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p16",
    "worldId": 0,
    "phaseNumber": 16,
    "themeId": "pronouns",
    "themeTitle": "Lição de Pronomes",
    "frequencyLevel": "1 a cada 3 Módulos de Vocabulário",
    "title": "Lição de Pronomes IV • Indefinidos & Relativos",
    "subtitle": "Módulo de Pronomes 4/8 (Após 12 de Vocabulário) • Explicação Didática + Pares Associativos",
    "pedagogicalObjective": "Dominar os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing) e os Pronomes Relativos (Who, Which, That, Where).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "4ª Lição Exclusiva de Pronomes (após 12 módulos de vocabulário).",
      "7ª Parte — Pronomes Indefinidos: referem-se a pessoas ou coisas de modo geral, sem identificar especificamente quem ou o quê.",
      "8ª Parte — Pronomes Relativos: conectam duas orações, referindo-se a uma pessoa, coisa ou lugar citado anteriormente."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p16-pron-1",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos Afirmativos (Someone, Something, Everyone, Everything)",
        "conceptHeader": "Os Pronomes Indefinidos referem-se a pessoas (terminados em \"-one\" ou \"-body\") ou a coisas (terminados em \"-thing\") de maneira geral: \"Someone\" (Alguém), \"Something\" (Algo/Alguma coisa), \"Everyone\" (Todos/Todo mundo) e \"Everything\" (Tudo).",
        "teacherAudioPt": "/audio/teacher/pronoun_7.wav",
        "prompt": "🤝 Conecte cada Pronome Indefinido ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p16-b1-ind1",
            "en": "Someone (\"sâm-uân\")",
            "emoji": "🧑",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa não especificada)",
            "tipPt": "Correto! Exemplo: \"Someone is at the door\" (Alguém está na porta)."
          },
          {
            "id": "w0-p16-b1-ind2",
            "en": "Something (\"sâm-thing\")",
            "emoji": "📦",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa (um objeto ou ideia)",
            "tipPt": "Exato! Exemplo: \"I need something to drink\" (Preciso de algo para beber)."
          },
          {
            "id": "w0-p16-b1-ind3",
            "en": "Everyone (\"é-vri-uân\")",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todos / Todo mundo (todas as pessoas)",
            "tipPt": "Perfeito! Exemplo: \"Everyone is ready\" (Todos estão prontos)."
          },
          {
            "id": "w0-p16-b1-ind4",
            "en": "Everything (\"é-vri-thing\")",
            "emoji": "🌟",
            "phonetic": "/ˈev.ri.θɪŋ/",
            "pt": "Tudo / Todas as coisas",
            "tipPt": "Muito bem! Exemplo: \"Everything is clean\" (Tudo está limpo)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Someone (Alguém - pessoa), Something (Algo - coisa), Everyone (Todos - pessoas), Everything (Tudo - coisas).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p16-pron-2",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Who, Which, That, Where)",
        "conceptHeader": "Os Pronomes Relativos conectam duas partes de uma frase para explicar melhor um termo anterior: usamos \"Who\" (que/quem) para PESSOAS, \"Which\" (que/o qual) para COISAS ou animais, \"That\" (que) tanto para pessoas quanto para coisas, e \"Where\" (onde) para LUGARES.",
        "teacherAudioPt": "/audio/teacher/pronoun_8.wav",
        "prompt": "🤝 Associe cada Pronome Relativo à sua regra de uso correta:",
        "pairs": [
          {
            "id": "w0-p16-b2-rel1",
            "en": "Who (\"rú\" - relativo)",
            "emoji": "👩‍🏫",
            "phonetic": "/huː/",
            "pt": "Que / Quem (retoma PESSOAS na frase)",
            "tipPt": "Correto! Exemplo: \"The teacher who helped me\" (A professora que me ajudou)."
          },
          {
            "id": "w0-p16-b2-rel2",
            "en": "Which (\"uítch\" - relativo)",
            "emoji": "📘",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (retoma COISAS ou animais)",
            "tipPt": "Exato! Exemplo: \"The book which I read\" (O livro que eu li)."
          },
          {
            "id": "w0-p16-b2-rel3",
            "en": "That (\"dét\" - relativo)",
            "emoji": "🔗",
            "phonetic": "/ðæt/",
            "pt": "Que (curinga: retoma PESSOAS ou COISAS)",
            "tipPt": "Perfeito! \"That\" pode substituir tanto \"Who\" quanto \"Which\" em frases restritivas."
          },
          {
            "id": "w0-p16-b2-rel4",
            "en": "Where (\"uér\" - relativo)",
            "emoji": "🏠",
            "phonetic": "/wer/",
            "pt": "Onde / Em que (retoma LUGARES na frase)",
            "tipPt": "Excelente! Exemplo: \"The house where I live\" (A casa onde eu moro)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Who (relativo para pessoas), Which (relativo para coisas/animais), That (relativo para pessoas ou coisas), Where (relativo para lugares).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p17",
    "worldId": 0,
    "phaseNumber": 17,
    "themeId": "transport",
    "themeTitle": "Tema 4: Transporte",
    "frequencyLevel": "Módulo 1 • Essenciais e Mais Comuns",
    "title": "Transporte • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema: Transporte (1/4) • 8 veículos e vias essenciais",
    "pedagogicalObjective": "Conhecer os 8 termos mais essenciais de transporte: Car, Bus, Street, Bicycle, Train, Airplane, Taxi e Boat.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Transporte — Módulo 1 (Palavras essenciais e mais comuns): veículos e vias mais usados.",
      "Palavras deste módulo (8): Car (\"cár\" = Carro), Bus (\"bâs\" = Ônibus), Street (\"strít\" = Rua), Bicycle (\"bái-si-kol\" = Bicicleta), Train (\"trêin\" = Trem), Airplane (\"ér-plêin\" = Avião), Taxi (\"ték-si\" = Táxi) e Boat (\"bôut\" = Barco)."
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
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua",
            "simplePronunciation": "strít",
            "phonetic": "/striːt/",
            "exampleEn": "Look before crossing the street.",
            "examplePt": "Olhe antes de atravessar a rua."
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
            "exampleEn": "A boat crosses the lake.",
            "examplePt": "Um barco atravessa o lago."
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
          "Street",
          "Bicycle",
          "Boat",
          "Car"
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
            "exampleEn": "Let us take a taxi.",
            "examplePt": "Vamos pegar um táxi."
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight.",
            "examplePt": "O trem chega às oito."
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus",
            "simplePronunciation": "bâs",
            "phonetic": "/bʌs/",
            "exampleEn": "Take the bus to work.",
            "examplePt": "Pegue o ônibus para o trabalho."
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião",
            "simplePronunciation": "ér-plêin",
            "phonetic": "/ˈer.pleɪn/",
            "exampleEn": "The airplane flies high.",
            "examplePt": "O avião voa alto."
          }
        ],
        "options": [
          "Taxi",
          "Train",
          "Bus",
          "Airplane"
        ],
        "correctAnswer": "Bus",
        "contextSentence": "Take the bus to work.",
        "contextSentencePt": "Pegue o ônibus para o trabalho.",
        "explanation": "Exemplo: \"Take the bus to work.\" — Pegue o ônibus para o trabalho.",
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
            "exampleEn": "Look before crossing the street.",
            "examplePt": "Olhe antes de atravessar a rua."
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus",
            "simplePronunciation": "bâs",
            "phonetic": "/bʌs/",
            "exampleEn": "Take the bus to work.",
            "examplePt": "Pegue o ônibus para o trabalho."
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião",
            "simplePronunciation": "ér-plêin",
            "phonetic": "/ˈer.pleɪn/",
            "exampleEn": "The airplane flies high.",
            "examplePt": "O avião voa alto."
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
          "Street",
          "Bus",
          "Airplane",
          "Car"
        ],
        "correctAnswer": "Street",
        "contextSentence": "Look before crossing the street.",
        "contextSentencePt": "Olhe antes de atravessar a rua.",
        "explanation": "Exemplo: \"Look before crossing the street.\" — Olhe antes de atravessar a rua.",
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
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi",
            "simplePronunciation": "ték-si",
            "phonetic": "/ˈtæk.si/",
            "exampleEn": "Let us take a taxi.",
            "examplePt": "Vamos pegar um táxi."
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua",
            "simplePronunciation": "strít",
            "phonetic": "/striːt/",
            "exampleEn": "Look before crossing the street.",
            "examplePt": "Olhe antes de atravessar a rua."
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
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight.",
            "examplePt": "O trem chega às oito."
          }
        ],
        "options": [
          "Taxi",
          "Street",
          "Bicycle",
          "Train"
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
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco",
            "simplePronunciation": "bôut",
            "phonetic": "/boʊt/",
            "exampleEn": "A boat crosses the lake.",
            "examplePt": "Um barco atravessa o lago."
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight.",
            "examplePt": "O trem chega às oito."
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
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus",
            "simplePronunciation": "bâs",
            "phonetic": "/bʌs/",
            "exampleEn": "Take the bus to work.",
            "examplePt": "Pegue o ônibus para o trabalho."
          }
        ],
        "options": [
          "Boat",
          "Train",
          "Car",
          "Bus"
        ],
        "correctAnswer": "Train",
        "contextSentence": "The train arrives at eight.",
        "contextSentencePt": "O trem chega às oito.",
        "explanation": "Exemplo: \"The train arrives at eight.\" — O trem chega às oito.",
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
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua",
            "simplePronunciation": "strít",
            "phonetic": "/striːt/",
            "exampleEn": "Look before crossing the street.",
            "examplePt": "Olhe antes de atravessar a rua."
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
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião",
            "simplePronunciation": "ér-plêin",
            "phonetic": "/ˈer.pleɪn/",
            "exampleEn": "The airplane flies high.",
            "examplePt": "O avião voa alto."
          }
        ],
        "options": [
          "Street",
          "Car",
          "Bicycle",
          "Airplane"
        ],
        "correctAnswer": "Airplane",
        "contextSentence": "The airplane flies high.",
        "contextSentencePt": "O avião voa alto.",
        "explanation": "Exemplo: \"The airplane flies high.\" — O avião voa alto.",
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
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi",
            "simplePronunciation": "ték-si",
            "phonetic": "/ˈtæk.si/",
            "exampleEn": "Let us take a taxi.",
            "examplePt": "Vamos pegar um táxi."
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco",
            "simplePronunciation": "bôut",
            "phonetic": "/boʊt/",
            "exampleEn": "A boat crosses the lake.",
            "examplePt": "Um barco atravessa o lago."
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
            "exampleEn": "Take the bus to work.",
            "examplePt": "Pegue o ônibus para o trabalho."
          }
        ],
        "options": [
          "Taxi",
          "Boat",
          "Bicycle",
          "Bus"
        ],
        "correctAnswer": "Taxi",
        "contextSentence": "Let us take a taxi.",
        "contextSentencePt": "Vamos pegar um táxi.",
        "explanation": "Exemplo: \"Let us take a taxi.\" — Vamos pegar um táxi.",
        "phoneticHint": "\"ték-si\" • /ˈtæk.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Boat",
        "visualEmoji": "⛵",
        "visualOptions": [
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem",
            "simplePronunciation": "trêin",
            "phonetic": "/treɪn/",
            "exampleEn": "The train arrives at eight.",
            "examplePt": "O trem chega às oito."
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco",
            "simplePronunciation": "bôut",
            "phonetic": "/boʊt/",
            "exampleEn": "A boat crosses the lake.",
            "examplePt": "Um barco atravessa o lago."
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
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião",
            "simplePronunciation": "ér-plêin",
            "phonetic": "/ˈer.pleɪn/",
            "exampleEn": "The airplane flies high.",
            "examplePt": "O avião voa alto."
          }
        ],
        "options": [
          "Train",
          "Boat",
          "Car",
          "Airplane"
        ],
        "correctAnswer": "Boat",
        "contextSentence": "A boat crosses the lake.",
        "contextSentencePt": "Um barco atravessa o lago.",
        "explanation": "Exemplo: \"A boat crosses the lake.\" — Um barco atravessa o lago.",
        "phoneticHint": "\"bôut\" • /boʊt/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p18",
    "worldId": 0,
    "phaseNumber": 18,
    "themeId": "transport",
    "themeTitle": "Tema 4: Transporte",
    "frequencyLevel": "Módulo 2 • Palavras Comuns",
    "title": "Transporte • Módulo 2: Palavras Comuns",
    "subtitle": "Tema: Transporte (2/4) • 8 palavras comuns de trânsito e viagens",
    "pedagogicalObjective": "Aprender 8 termos comuns de transporte: Truck, Motorcycle, Subway, Ship, Road, Bridge, Airport e Ticket.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Transporte — Módulo 2 (Palavras comuns): meios de transporte e infraestrutura de viagem.",
      "Palavras deste módulo (8): Truck (\"trâk\" = Caminhão), Motorcycle (\"môu-tor-sái-kol\" = Moto), Subway (\"sâb-uêi\" = Metrô), Ship (\"xíp\" = Navio), Road (\"rôud\" = Estrada), Bridge (\"brídj\" = Ponte), Airport (\"ér-pórt\" = Aeroporto) e Ticket (\"tí-ket\" = Passagem/Bilhete)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p18-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Truck",
        "visualEmoji": "🚚",
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
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte",
            "simplePronunciation": "brídj",
            "phonetic": "/brɪdʒ/",
            "exampleEn": "Drive across the bridge.",
            "examplePt": "Dirija sobre a ponte."
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
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast.",
            "examplePt": "O metrô é rápido."
          }
        ],
        "options": [
          "Road",
          "Bridge",
          "Truck",
          "Subway"
        ],
        "correctAnswer": "Truck",
        "contextSentence": "The truck carries heavy boxes.",
        "contextSentencePt": "O caminhão transporta caixas pesadas.",
        "explanation": "Exemplo: \"The truck carries heavy boxes.\" — O caminhão transporta caixas pesadas.",
        "phoneticHint": "\"trâk\" • /trʌk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Motorcycle",
        "visualEmoji": "🏍️",
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
            "text": "Ticket",
            "emoji": "🎫",
            "label": "Ticket",
            "translationPt": "Passagem / Bilhete",
            "simplePronunciation": "tí-ket",
            "phonetic": "/ˈtɪk.ɪt/",
            "exampleEn": "Buy your ticket here.",
            "examplePt": "Compre sua passagem aqui."
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio",
            "simplePronunciation": "xíp",
            "phonetic": "/ʃɪp/",
            "exampleEn": "A large ship sails the ocean.",
            "examplePt": "Um grande navio navega pelo oceano."
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
          }
        ],
        "options": [
          "Motorcycle",
          "Ticket",
          "Ship",
          "Airport"
        ],
        "correctAnswer": "Motorcycle",
        "contextSentence": "Wear a helmet on a motorcycle.",
        "contextSentencePt": "Use capacete na moto.",
        "explanation": "Exemplo: \"Wear a helmet on a motorcycle.\" — Use capacete na moto.",
        "phoneticHint": "\"môu-tor-sái-kol\" • /ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Subway",
        "visualEmoji": "🚇",
        "visualOptions": [
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
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast.",
            "examplePt": "O metrô é rápido."
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte",
            "simplePronunciation": "brídj",
            "phonetic": "/brɪdʒ/",
            "exampleEn": "Drive across the bridge.",
            "examplePt": "Dirija sobre a ponte."
          }
        ],
        "options": [
          "Truck",
          "Road",
          "Subway",
          "Bridge"
        ],
        "correctAnswer": "Subway",
        "contextSentence": "The subway is fast.",
        "contextSentencePt": "O metrô é rápido.",
        "explanation": "Exemplo: \"The subway is fast.\" — O metrô é rápido.",
        "phoneticHint": "\"sâb-uêi\" • /ˈsʌb.weɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ship",
        "visualEmoji": "🚢",
        "visualOptions": [
          {
            "text": "Ticket",
            "emoji": "🎫",
            "label": "Ticket",
            "translationPt": "Passagem / Bilhete",
            "simplePronunciation": "tí-ket",
            "phonetic": "/ˈtɪk.ɪt/",
            "exampleEn": "Buy your ticket here.",
            "examplePt": "Compre sua passagem aqui."
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio",
            "simplePronunciation": "xíp",
            "phonetic": "/ʃɪp/",
            "exampleEn": "A large ship sails the ocean.",
            "examplePt": "Um grande navio navega pelo oceano."
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
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto",
            "simplePronunciation": "ér-pórt",
            "phonetic": "/ˈer.pɔːrt/",
            "exampleEn": "We arrived early at the airport.",
            "examplePt": "Chegamos cedo ao aeroporto."
          }
        ],
        "options": [
          "Ticket",
          "Ship",
          "Motorcycle",
          "Airport"
        ],
        "correctAnswer": "Ship",
        "contextSentence": "A large ship sails the ocean.",
        "contextSentencePt": "Um grande navio navega pelo oceano.",
        "explanation": "Exemplo: \"A large ship sails the ocean.\" — Um grande navio navega pelo oceano.",
        "phoneticHint": "\"xíp\" • /ʃɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Road",
        "visualEmoji": "🛣️",
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
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast.",
            "examplePt": "O metrô é rápido."
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio",
            "simplePronunciation": "xíp",
            "phonetic": "/ʃɪp/",
            "exampleEn": "A large ship sails the ocean.",
            "examplePt": "Um grande navio navega pelo oceano."
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
          "Motorcycle",
          "Subway",
          "Ship",
          "Road"
        ],
        "correctAnswer": "Road",
        "contextSentence": "Follow this road to the beach.",
        "contextSentencePt": "Siga esta estrada até a praia.",
        "explanation": "Exemplo: \"Follow this road to the beach.\" — Siga esta estrada até a praia.",
        "phoneticHint": "\"rôud\" • /roʊd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bridge",
        "visualEmoji": "🌉",
        "visualOptions": [
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte",
            "simplePronunciation": "brídj",
            "phonetic": "/brɪdʒ/",
            "exampleEn": "Drive across the bridge.",
            "examplePt": "Dirija sobre a ponte."
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast.",
            "examplePt": "O metrô é rápido."
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
          }
        ],
        "options": [
          "Bridge",
          "Subway",
          "Road",
          "Truck"
        ],
        "correctAnswer": "Bridge",
        "contextSentence": "Drive across the bridge.",
        "contextSentencePt": "Dirija sobre a ponte.",
        "explanation": "Exemplo: \"Drive across the bridge.\" — Dirija sobre a ponte.",
        "phoneticHint": "\"brídj\" • /brɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Airport",
        "visualEmoji": "🛫",
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
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte",
            "simplePronunciation": "brídj",
            "phonetic": "/brɪdʒ/",
            "exampleEn": "Drive across the bridge.",
            "examplePt": "Dirija sobre a ponte."
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio",
            "simplePronunciation": "xíp",
            "phonetic": "/ʃɪp/",
            "exampleEn": "A large ship sails the ocean.",
            "examplePt": "Um grande navio navega pelo oceano."
          }
        ],
        "options": [
          "Motorcycle",
          "Airport",
          "Bridge",
          "Ship"
        ],
        "correctAnswer": "Airport",
        "contextSentence": "We arrived early at the airport.",
        "contextSentencePt": "Chegamos cedo ao aeroporto.",
        "explanation": "Exemplo: \"We arrived early at the airport.\" — Chegamos cedo ao aeroporto.",
        "phoneticHint": "\"ér-pórt\" • /ˈer.pɔːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ticket",
        "visualEmoji": "🎫",
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
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô",
            "simplePronunciation": "sâb-uêi",
            "phonetic": "/ˈsʌb.weɪ/",
            "exampleEn": "The subway is fast.",
            "examplePt": "O metrô é rápido."
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
            "text": "Ticket",
            "emoji": "🎫",
            "label": "Ticket",
            "translationPt": "Passagem / Bilhete",
            "simplePronunciation": "tí-ket",
            "phonetic": "/ˈtɪk.ɪt/",
            "exampleEn": "Buy your ticket here.",
            "examplePt": "Compre sua passagem aqui."
          }
        ],
        "options": [
          "Road",
          "Subway",
          "Truck",
          "Ticket"
        ],
        "correctAnswer": "Ticket",
        "contextSentence": "Buy your ticket here.",
        "contextSentencePt": "Compre sua passagem aqui.",
        "explanation": "Exemplo: \"Buy your ticket here.\" — Compre sua passagem aqui.",
        "phoneticHint": "\"tí-ket\" • /ˈtɪk.ɪt/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p19",
    "worldId": 0,
    "phaseNumber": 19,
    "themeId": "transport",
    "themeTitle": "Tema 4: Transporte",
    "frequencyLevel": "Módulo 3 • Palavras Intermediárias",
    "title": "Transporte • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema: Transporte (3/4) • 8 palavras intermediárias da via urbana",
    "pedagogicalObjective": "Dominar 8 termos intermediários de transporte: Helicopter, Van, Ambulance, Seat, Helmet, Sidewalk, Crosswalk e Engine.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Transporte — Módulo 3 (Palavras intermediárias): segurança, veículos e elementos da via.",
      "Palavras deste módulo (8): Helicopter (\"ré-li-cóp-ter\" = Helicóptero), Van (\"vén\" = Van), Ambulance (\"ém-biu-lans\" = Ambulância), Seat (\"sít\" = Assento), Helmet (\"rél-met\" = Capacete), Sidewalk (\"sáid-uók\" = Calçada), Crosswalk (\"crós-uók\" = Faixa de pedestres) e Engine (\"én-djin\" = Motor)."
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
            "exampleEn": "The helicopter flies over the city.",
            "examplePt": "O helicóptero sobrevoa a cidade."
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
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres",
            "simplePronunciation": "crós-uók",
            "phonetic": "/ˈkrɔːs.wɔːk/",
            "exampleEn": "Cross at the crosswalk.",
            "examplePt": "Atravesse na faixa de pedestres."
          }
        ],
        "options": [
          "Helicopter",
          "Engine",
          "Helmet",
          "Crosswalk"
        ],
        "correctAnswer": "Helicopter",
        "contextSentence": "The helicopter flies over the city.",
        "contextSentencePt": "O helicóptero sobrevoa a cidade.",
        "explanation": "Exemplo: \"The helicopter flies over the city.\" — O helicóptero sobrevoa a cidade.",
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
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter flies over the city.",
            "examplePt": "O helicóptero sobrevoa a cidade."
          },
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat",
            "translationPt": "Assento / Banco",
            "simplePronunciation": "sít",
            "phonetic": "/siːt/",
            "exampleEn": "Take a seat on the train.",
            "examplePt": "Sente-se no banco do trem."
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van",
            "simplePronunciation": "vén",
            "phonetic": "/væn/",
            "exampleEn": "The van carries eight people.",
            "examplePt": "A van transporta oito pessoas."
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada",
            "simplePronunciation": "sáid-uók",
            "phonetic": "/ˈsaɪd.wɔːk/",
            "exampleEn": "Walk on the sidewalk.",
            "examplePt": "Caminhe na calçada."
          }
        ],
        "options": [
          "Helicopter",
          "Seat",
          "Van",
          "Sidewalk"
        ],
        "correctAnswer": "Van",
        "contextSentence": "The van carries eight people.",
        "contextSentencePt": "A van transporta oito pessoas.",
        "explanation": "Exemplo: \"The van carries eight people.\" — A van transporta oito pessoas.",
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
            "exampleEn": "Cross at the crosswalk.",
            "examplePt": "Atravesse na faixa de pedestres."
          }
        ],
        "options": [
          "Engine",
          "Ambulance",
          "Helmet",
          "Crosswalk"
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
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada",
            "simplePronunciation": "sáid-uók",
            "phonetic": "/ˈsaɪd.wɔːk/",
            "exampleEn": "Walk on the sidewalk.",
            "examplePt": "Caminhe na calçada."
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van",
            "simplePronunciation": "vén",
            "phonetic": "/væn/",
            "exampleEn": "The van carries eight people.",
            "examplePt": "A van transporta oito pessoas."
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter flies over the city.",
            "examplePt": "O helicóptero sobrevoa a cidade."
          },
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat",
            "translationPt": "Assento / Banco",
            "simplePronunciation": "sít",
            "phonetic": "/siːt/",
            "exampleEn": "Take a seat on the train.",
            "examplePt": "Sente-se no banco do trem."
          }
        ],
        "options": [
          "Sidewalk",
          "Van",
          "Helicopter",
          "Seat"
        ],
        "correctAnswer": "Seat",
        "contextSentence": "Take a seat on the train.",
        "contextSentencePt": "Sente-se no banco do trem.",
        "explanation": "Exemplo: \"Take a seat on the train.\" — Sente-se no banco do trem.",
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
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres",
            "simplePronunciation": "crós-uók",
            "phonetic": "/ˈkrɔːs.wɔːk/",
            "exampleEn": "Cross at the crosswalk.",
            "examplePt": "Atravesse na faixa de pedestres."
          }
        ],
        "options": [
          "Helmet",
          "Ambulance",
          "Engine",
          "Crosswalk"
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
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van",
            "simplePronunciation": "vén",
            "phonetic": "/væn/",
            "exampleEn": "The van carries eight people.",
            "examplePt": "A van transporta oito pessoas."
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada",
            "simplePronunciation": "sáid-uók",
            "phonetic": "/ˈsaɪd.wɔːk/",
            "exampleEn": "Walk on the sidewalk.",
            "examplePt": "Caminhe na calçada."
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter flies over the city.",
            "examplePt": "O helicóptero sobrevoa a cidade."
          },
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat",
            "translationPt": "Assento / Banco",
            "simplePronunciation": "sít",
            "phonetic": "/siːt/",
            "exampleEn": "Take a seat on the train.",
            "examplePt": "Sente-se no banco do trem."
          }
        ],
        "options": [
          "Van",
          "Sidewalk",
          "Helicopter",
          "Seat"
        ],
        "correctAnswer": "Sidewalk",
        "contextSentence": "Walk on the sidewalk.",
        "contextSentencePt": "Caminhe na calçada.",
        "explanation": "Exemplo: \"Walk on the sidewalk.\" — Caminhe na calçada.",
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
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van",
            "simplePronunciation": "vén",
            "phonetic": "/væn/",
            "exampleEn": "The van carries eight people.",
            "examplePt": "A van transporta oito pessoas."
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
            "exampleEn": "Cross at the crosswalk.",
            "examplePt": "Atravesse na faixa de pedestres."
          }
        ],
        "options": [
          "Van",
          "Ambulance",
          "Helmet",
          "Crosswalk"
        ],
        "correctAnswer": "Crosswalk",
        "contextSentence": "Cross at the crosswalk.",
        "contextSentencePt": "Atravesse na faixa de pedestres.",
        "explanation": "Exemplo: \"Cross at the crosswalk.\" — Atravesse na faixa de pedestres.",
        "phoneticHint": "\"crós-uók\" • /ˈkrɔːs.wɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Engine",
        "visualEmoji": "⚙️",
        "visualOptions": [
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero",
            "simplePronunciation": "ré-li-cóp-ter",
            "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
            "exampleEn": "The helicopter flies over the city.",
            "examplePt": "O helicóptero sobrevoa a cidade."
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada",
            "simplePronunciation": "sáid-uók",
            "phonetic": "/ˈsaɪd.wɔːk/",
            "exampleEn": "Walk on the sidewalk.",
            "examplePt": "Caminhe na calçada."
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
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat",
            "translationPt": "Assento / Banco",
            "simplePronunciation": "sít",
            "phonetic": "/siːt/",
            "exampleEn": "Take a seat on the train.",
            "examplePt": "Sente-se no banco do trem."
          }
        ],
        "options": [
          "Helicopter",
          "Sidewalk",
          "Engine",
          "Seat"
        ],
        "correctAnswer": "Engine",
        "contextSentence": "Start the car engine.",
        "contextSentencePt": "Ligue o motor do carro.",
        "explanation": "Exemplo: \"Start the car engine.\" — Ligue o motor do carro.",
        "phoneticHint": "\"én-djin\" • /ˈen.dʒɪn/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p20",
    "worldId": 0,
    "phaseNumber": 20,
    "themeId": "pronouns",
    "themeTitle": "Lição de Pronomes",
    "frequencyLevel": "1 a cada 3 Módulos de Vocabulário",
    "title": "Lição de Pronomes V • Aplicando Pessoais & Tratamento",
    "subtitle": "Módulo de Pronomes 5/8 (Após 15 de Vocabulário) • Frases Práticas + Voz da Professora",
    "pedagogicalObjective": "Praticar frases completas do cotidiano aplicando os Pronomes Pessoais e de Tratamento junto ao vocabulário estudado.",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "5ª Lição Exclusiva de Pronomes (após 15 módulos de vocabulário).",
      "Aplicação prática dos Pronomes Pessoais (I, He, She, It, We, They) e de Tratamento (Mr., Mrs., Sir, Ma'am) em frases reais do dia a dia."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p20-pron-1",
        "type": "pair-match",
        "conceptTitle": "Aplicação • Pronomes Pessoais em Frases Completas",
        "conceptHeader": "Observe como os Pronomes Pessoais iniciam as frases no dia a dia: \"I\" (Eu), \"He\" (Ele), \"She\" (Ela) e \"It\" (usado para objetos como a chave ou a porta). Toque na frase em inglês para ouvir a pronúncia e conecte à tradução.",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Associe cada frase com Pronome Pessoal à sua tradução:",
        "pairs": [
          {
            "id": "w0-p20-b1-p9",
            "en": "I am at home",
            "emoji": "🏠",
            "phonetic": "/aɪ æm æt hoʊm/",
            "pt": "Eu estou em casa",
            "tipPt": "Correto! \"I\" = \"Eu\"."
          },
          {
            "id": "w0-p20-b1-p10",
            "en": "He is at the door",
            "emoji": "🚪",
            "phonetic": "/hiː ɪz æt ðə dɔːr/",
            "pt": "Ele está na porta",
            "tipPt": "Muito bem! \"He\" = \"Ele\"."
          },
          {
            "id": "w0-p20-b1-p11",
            "en": "She is on the sofa",
            "emoji": "🛋️",
            "phonetic": "/ʃiː ɪz ɑːn ðə ˈsoʊ.fə/",
            "pt": "Ela está no sofá",
            "tipPt": "Perfeito! \"She\" = \"Ela\"."
          },
          {
            "id": "w0-p20-b1-p12",
            "en": "It is a house key",
            "emoji": "🔑",
            "phonetic": "/ɪt ɪz ə haʊs kiː/",
            "pt": "É uma chave de casa (objeto = It)",
            "tipPt": "Exato! Objetos no singular usam o pronome \"It\"."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "I am at home (Eu estou em casa), He is at the door (Ele está na porta), She is on the sofa (Ela está no sofá), It is a house key (É uma chave de casa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p20-pron-2",
        "type": "pair-match",
        "conceptTitle": "Aplicação • Pronomes de Tratamento em Contexto",
        "conceptHeader": "Em situações formais ou profissionais, combinamos cumprimentos com os Pronomes de Tratamento: \"Mr.\" antes de sobrenome masculino, \"Mrs.\" antes de sobrenome feminino, e \"Sir\" ou \"Ma'am\" no atendimento direto.",
        "teacherAudioPt": "/audio/teacher/pronoun_2.wav",
        "prompt": "🤝 Conecte cada frase formal em inglês ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p20-b2-pt1",
            "en": "Good morning, Mr. Silva",
            "emoji": "👨",
            "phonetic": "/ɡʊd ˈmɔːr.nɪŋ ˈmɪs.tər ˈsɪl.və/",
            "pt": "Bom dia, Senhor Silva",
            "tipPt": "Correto! \"Mr.\" precede o nome ou sobrenome masculino."
          },
          {
            "id": "w0-p20-b2-pt2",
            "en": "Hello, Mrs. Costa",
            "emoji": "👩",
            "phonetic": "/həˈloʊ ˈmɪs.ɪz ˈkɑː.stə/",
            "pt": "Olá, Senhora Costa",
            "tipPt": "Exato! \"Mrs.\" precede o sobrenome de mulher casada."
          },
          {
            "id": "w0-p20-b2-pt3",
            "en": "Excuse me, Sir",
            "emoji": "🎩",
            "phonetic": "/ɪkˈskjuːz miː sɜːr/",
            "pt": "Com licença, Senhor (sem citar o nome)",
            "tipPt": "Perfeito! \"Sir\" é usado diretamente sem o nome."
          },
          {
            "id": "w0-p20-b2-pt4",
            "en": "Thank you, Ma'am",
            "emoji": "🌸",
            "phonetic": "/θæŋk juː mæm/",
            "pt": "Obrigado(a), Senhora (sem citar o nome)",
            "tipPt": "Excelente! \"Ma'am\" é o tratamento direto feminino."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Good morning, Mr. Silva (Bom dia, Sr. Silva), Hello, Mrs. Costa (Olá, Sra. Costa), Excuse me, Sir (Com licença, Senhor), Thank you, Ma'am (Obrigado, Senhora).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p21",
    "worldId": 0,
    "phaseNumber": 21,
    "themeId": "transport",
    "themeTitle": "Tema 4: Transporte",
    "frequencyLevel": "Módulo 4 • Menos Comuns ou Específicas",
    "title": "Transporte • Módulo 4: Menos Comuns",
    "subtitle": "Tema: Transporte (4/4) • 8 veículos e peças específicas",
    "pedagogicalObjective": "Conhecer 8 termos específicos de transporte: Scooter, Tractor, Ferry, Runway, Harbor, Anchor, Pedal e Brake.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Transporte — Módulo 4 (Palavras menos comuns ou específicas): embarcações, pistas e componentes mecânicos.",
      "Palavras deste módulo (8): Scooter (\"scú-ter\" = Patinete/Scooter), Tractor (\"trék-tor\" = Trator), Ferry (\"fé-ri\" = Balsa), Runway (\"rân-uêi\" = Pista de pouso), Harbor (\"rár-bor\" = Porto), Anchor (\"én-cor\" = Âncora), Pedal (\"pé-dal\" = Pedal) e Brake (\"brêik\" = Freio)."
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
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane is on the runway.",
            "examplePt": "O avião está na pista de pouso."
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
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake",
            "translationPt": "Freio",
            "simplePronunciation": "brêik",
            "phonetic": "/breɪk/",
            "exampleEn": "Step on the brake to stop.",
            "examplePt": "Pise no freio para parar."
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor",
            "translationPt": "Porto",
            "simplePronunciation": "rár-bor",
            "phonetic": "/ˈhɑːr.bər/",
            "exampleEn": "Boats are in the harbor.",
            "examplePt": "Os barcos estão no porto."
          }
        ],
        "options": [
          "Runway",
          "Scooter",
          "Brake",
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
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal",
            "translationPt": "Pedal",
            "simplePronunciation": "pé-dal",
            "phonetic": "/ˈped.əl/",
            "exampleEn": "Push the bicycle pedal.",
            "examplePt": "Empurre o pedal da bicicleta."
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator",
            "simplePronunciation": "trék-tor",
            "phonetic": "/ˈtræk.tər/",
            "exampleEn": "The farmer drives a tractor.",
            "examplePt": "O fazendeiro dirige um trator."
          }
        ],
        "options": [
          "Ferry",
          "Scooter",
          "Pedal",
          "Tractor"
        ],
        "correctAnswer": "Tractor",
        "contextSentence": "The farmer drives a tractor.",
        "contextSentencePt": "O fazendeiro dirige um trator.",
        "explanation": "Exemplo: \"The farmer drives a tractor.\" — O fazendeiro dirige um trator.",
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
            "exampleEn": "Boats are in the harbor.",
            "examplePt": "Os barcos estão no porto."
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora",
            "simplePronunciation": "én-cor",
            "phonetic": "/ˈæŋ.kər/",
            "exampleEn": "The ship dropped its anchor.",
            "examplePt": "O navio lançou a âncora."
          },
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake",
            "translationPt": "Freio",
            "simplePronunciation": "brêik",
            "phonetic": "/breɪk/",
            "exampleEn": "Step on the brake to stop.",
            "examplePt": "Pise no freio para parar."
          }
        ],
        "options": [
          "Ferry",
          "Harbor",
          "Anchor",
          "Brake"
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
        "audioPhrase": "Runway",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator",
            "simplePronunciation": "trék-tor",
            "phonetic": "/ˈtræk.tər/",
            "exampleEn": "The farmer drives a tractor.",
            "examplePt": "O fazendeiro dirige um trator."
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane is on the runway.",
            "examplePt": "O avião está na pista de pouso."
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
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal",
            "translationPt": "Pedal",
            "simplePronunciation": "pé-dal",
            "phonetic": "/ˈped.əl/",
            "exampleEn": "Push the bicycle pedal.",
            "examplePt": "Empurre o pedal da bicicleta."
          }
        ],
        "options": [
          "Tractor",
          "Runway",
          "Scooter",
          "Pedal"
        ],
        "correctAnswer": "Runway",
        "contextSentence": "The plane is on the runway.",
        "contextSentencePt": "O avião está na pista de pouso.",
        "explanation": "Exemplo: \"The plane is on the runway.\" — O avião está na pista de pouso.",
        "phoneticHint": "\"rân-uêi\" • /ˈrʌn.weɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Harbor",
        "visualEmoji": "⚓",
        "visualOptions": [
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
            "exampleEn": "The ship dropped its anchor.",
            "examplePt": "O navio lançou a âncora."
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator",
            "simplePronunciation": "trék-tor",
            "phonetic": "/ˈtræk.tər/",
            "exampleEn": "The farmer drives a tractor.",
            "examplePt": "O fazendeiro dirige um trator."
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor",
            "translationPt": "Porto",
            "simplePronunciation": "rár-bor",
            "phonetic": "/ˈhɑːr.bər/",
            "exampleEn": "Boats are in the harbor.",
            "examplePt": "Os barcos estão no porto."
          }
        ],
        "options": [
          "Ferry",
          "Anchor",
          "Tractor",
          "Harbor"
        ],
        "correctAnswer": "Harbor",
        "contextSentence": "Boats are in the harbor.",
        "contextSentencePt": "Os barcos estão no porto.",
        "explanation": "Exemplo: \"Boats are in the harbor.\" — Os barcos estão no porto.",
        "phoneticHint": "\"rár-bor\" • /ˈhɑːr.bər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Anchor",
        "visualEmoji": "⚓",
        "visualOptions": [
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake",
            "translationPt": "Freio",
            "simplePronunciation": "brêik",
            "phonetic": "/breɪk/",
            "exampleEn": "Step on the brake to stop.",
            "examplePt": "Pise no freio para parar."
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane is on the runway.",
            "examplePt": "O avião está na pista de pouso."
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora",
            "simplePronunciation": "én-cor",
            "phonetic": "/ˈæŋ.kər/",
            "exampleEn": "The ship dropped its anchor.",
            "examplePt": "O navio lançou a âncora."
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
          }
        ],
        "options": [
          "Brake",
          "Runway",
          "Anchor",
          "Scooter"
        ],
        "correctAnswer": "Anchor",
        "contextSentence": "The ship dropped its anchor.",
        "contextSentencePt": "O navio lançou a âncora.",
        "explanation": "Exemplo: \"The ship dropped its anchor.\" — O navio lançou a âncora.",
        "phoneticHint": "\"én-cor\" • /ˈæŋ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pedal",
        "visualEmoji": "🚲",
        "visualOptions": [
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal",
            "translationPt": "Pedal",
            "simplePronunciation": "pé-dal",
            "phonetic": "/ˈped.əl/",
            "exampleEn": "Push the bicycle pedal.",
            "examplePt": "Empurre o pedal da bicicleta."
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator",
            "simplePronunciation": "trék-tor",
            "phonetic": "/ˈtræk.tər/",
            "exampleEn": "The farmer drives a tractor.",
            "examplePt": "O fazendeiro dirige um trator."
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor",
            "translationPt": "Porto",
            "simplePronunciation": "rár-bor",
            "phonetic": "/ˈhɑːr.bər/",
            "exampleEn": "Boats are in the harbor.",
            "examplePt": "Os barcos estão no porto."
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
          "Pedal",
          "Tractor",
          "Harbor",
          "Ferry"
        ],
        "correctAnswer": "Pedal",
        "contextSentence": "Push the bicycle pedal.",
        "contextSentencePt": "Empurre o pedal da bicicleta.",
        "explanation": "Exemplo: \"Push the bicycle pedal.\" — Empurre o pedal da bicicleta.",
        "phoneticHint": "\"pé-dal\" • /ˈped.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Brake",
        "visualEmoji": "🛑",
        "visualOptions": [
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora",
            "simplePronunciation": "én-cor",
            "phonetic": "/ˈæŋ.kər/",
            "exampleEn": "The ship dropped its anchor.",
            "examplePt": "O navio lançou a âncora."
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
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake",
            "translationPt": "Freio",
            "simplePronunciation": "brêik",
            "phonetic": "/breɪk/",
            "exampleEn": "Step on the brake to stop.",
            "examplePt": "Pise no freio para parar."
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway",
            "translationPt": "Pista de pouso",
            "simplePronunciation": "rân-uêi",
            "phonetic": "/ˈrʌn.weɪ/",
            "exampleEn": "The plane is on the runway.",
            "examplePt": "O avião está na pista de pouso."
          }
        ],
        "options": [
          "Anchor",
          "Scooter",
          "Brake",
          "Runway"
        ],
        "correctAnswer": "Brake",
        "contextSentence": "Step on the brake to stop.",
        "contextSentencePt": "Pise no freio para parar.",
        "explanation": "Exemplo: \"Step on the brake to stop.\" — Pise no freio para parar.",
        "phoneticHint": "\"brêik\" • /breɪk/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p22",
    "worldId": 0,
    "phaseNumber": 22,
    "themeId": "clothes",
    "themeTitle": "Tema 5: Roupas",
    "frequencyLevel": "Módulo 1 • Essenciais e Mais Comuns",
    "title": "Roupas • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema: Roupas (1/4) • 8 peças de vestuário essenciais",
    "pedagogicalObjective": "Dominar as 8 peças de roupa mais essenciais: Shirt, Pants, Shoes, Dress, Shorts, Skirt, Jacket e Socks.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Roupas — Módulo 1 (Palavras essenciais e mais comuns): as peças básicas do vestuário diário.",
      "Palavras deste módulo (8): Shirt (\"xârt\" = Camisa), Pants (\"pénts\" = Calça), Shoes (\"xúz\" = Sapatos), Dress (\"drés\" = Vestido), Shorts (\"xórts\" = Shorts/Bermuda), Skirt (\"skârt\" = Saia), Jacket (\"djé-ket\" = Jaqueta) e Socks (\"sóks\" = Meias)."
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
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia",
            "simplePronunciation": "skârt",
            "phonetic": "/skɜːrt/",
            "exampleEn": "Her blue skirt is pretty.",
            "examplePt": "A saia azul dela é bonita."
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
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean shirt.",
            "examplePt": "Ele veste uma camisa limpa."
          }
        ],
        "options": [
          "Skirt",
          "Shorts",
          "Shoes",
          "Shirt"
        ],
        "correctAnswer": "Shirt",
        "contextSentence": "He wears a clean shirt.",
        "contextSentencePt": "Ele veste uma camisa limpa.",
        "explanation": "Exemplo: \"He wears a clean shirt.\" — Ele veste uma camisa limpa.",
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
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça",
            "simplePronunciation": "pénts",
            "phonetic": "/pænts/",
            "exampleEn": "These pants are comfortable.",
            "examplePt": "Esta calça é confortável."
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
            "exampleEn": "She bought a red dress.",
            "examplePt": "Ela comprou um vestido vermelho."
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias",
            "simplePronunciation": "sóks",
            "phonetic": "/sɑːks/",
            "exampleEn": "Put on clean socks.",
            "examplePt": "Coloque meias limpas."
          }
        ],
        "options": [
          "Pants",
          "Jacket",
          "Dress",
          "Socks"
        ],
        "correctAnswer": "Pants",
        "contextSentence": "These pants are comfortable.",
        "contextSentencePt": "Esta calça é confortável.",
        "explanation": "Exemplo: \"These pants are comfortable.\" — Esta calça é confortável.",
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
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean shirt.",
            "examplePt": "Ele veste uma camisa limpa."
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia",
            "simplePronunciation": "skârt",
            "phonetic": "/skɜːrt/",
            "exampleEn": "Her blue skirt is pretty.",
            "examplePt": "A saia azul dela é bonita."
          }
        ],
        "options": [
          "Shorts",
          "Shoes",
          "Shirt",
          "Skirt"
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
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça",
            "simplePronunciation": "pénts",
            "phonetic": "/pænts/",
            "exampleEn": "These pants are comfortable.",
            "examplePt": "Esta calça é confortável."
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias",
            "simplePronunciation": "sóks",
            "phonetic": "/sɑːks/",
            "exampleEn": "Put on clean socks.",
            "examplePt": "Coloque meias limpas."
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
            "exampleEn": "She bought a red dress.",
            "examplePt": "Ela comprou um vestido vermelho."
          }
        ],
        "options": [
          "Pants",
          "Socks",
          "Jacket",
          "Dress"
        ],
        "correctAnswer": "Dress",
        "contextSentence": "She bought a red dress.",
        "contextSentencePt": "Ela comprou um vestido vermelho.",
        "explanation": "Exemplo: \"She bought a red dress.\" — Ela comprou um vestido vermelho.",
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
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean shirt.",
            "examplePt": "Ele veste uma camisa limpa."
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
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça",
            "simplePronunciation": "pénts",
            "phonetic": "/pænts/",
            "exampleEn": "These pants are comfortable.",
            "examplePt": "Esta calça é confortável."
          }
        ],
        "options": [
          "Shirt",
          "Shoes",
          "Shorts",
          "Pants"
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
            "exampleEn": "Her blue skirt is pretty.",
            "examplePt": "A saia azul dela é bonita."
          },
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean shirt.",
            "examplePt": "Ele veste uma camisa limpa."
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido",
            "simplePronunciation": "drés",
            "phonetic": "/dres/",
            "exampleEn": "She bought a red dress.",
            "examplePt": "Ela comprou um vestido vermelho."
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
          }
        ],
        "options": [
          "Skirt",
          "Shirt",
          "Dress",
          "Shoes"
        ],
        "correctAnswer": "Skirt",
        "contextSentence": "Her blue skirt is pretty.",
        "contextSentencePt": "A saia azul dela é bonita.",
        "explanation": "Exemplo: \"Her blue skirt is pretty.\" — A saia azul dela é bonita.",
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
            "exampleEn": "Put on clean socks.",
            "examplePt": "Coloque meias limpas."
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
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia",
            "simplePronunciation": "skârt",
            "phonetic": "/skɜːrt/",
            "exampleEn": "Her blue skirt is pretty.",
            "examplePt": "A saia azul dela é bonita."
          }
        ],
        "options": [
          "Shorts",
          "Socks",
          "Jacket",
          "Skirt"
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
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça",
            "simplePronunciation": "pénts",
            "phonetic": "/pænts/",
            "exampleEn": "These pants are comfortable.",
            "examplePt": "Esta calça é confortável."
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias",
            "simplePronunciation": "sóks",
            "phonetic": "/sɑːks/",
            "exampleEn": "Put on clean socks.",
            "examplePt": "Coloque meias limpas."
          },
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt",
            "translationPt": "Camisa",
            "simplePronunciation": "xârt",
            "phonetic": "/ʃɜːrt/",
            "exampleEn": "He wears a clean shirt.",
            "examplePt": "Ele veste uma camisa limpa."
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido",
            "simplePronunciation": "drés",
            "phonetic": "/dres/",
            "exampleEn": "She bought a red dress.",
            "examplePt": "Ela comprou um vestido vermelho."
          }
        ],
        "options": [
          "Pants",
          "Socks",
          "Shirt",
          "Dress"
        ],
        "correctAnswer": "Socks",
        "contextSentence": "Put on clean socks.",
        "contextSentencePt": "Coloque meias limpas.",
        "explanation": "Exemplo: \"Put on clean socks.\" — Coloque meias limpas.",
        "phoneticHint": "\"sóks\" • /sɑːks/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p23",
    "worldId": 0,
    "phaseNumber": 23,
    "themeId": "clothes",
    "themeTitle": "Tema 5: Roupas",
    "frequencyLevel": "Módulo 2 • Palavras Comuns",
    "title": "Roupas • Módulo 2: Palavras Comuns",
    "subtitle": "Tema: Roupas (2/4) • 8 roupas e calçados comuns",
    "pedagogicalObjective": "Reconhecer 8 peças comuns do vestuário: Coat, Hat, Jeans, Bag, T-shirt, Sweater, Boots e Sneakers.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Roupas — Módulo 2 (Palavras comuns): agasalhos, calçados e peças casuais.",
      "Palavras deste módulo (8): Coat (\"côut\" = Casaco), Hat (\"rét\" = Chapéu), Jeans (\"djínz\" = Calça jeans), Bag (\"bég\" = Bolsa), T-shirt (\"tí-xârt\" = Camiseta), Sweater (\"sué-ter\" = Suéter), Boots (\"búts\" = Botas) e Sneakers (\"sní-kers\" = Tênis)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p23-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Coat",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco no inverno."
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Blusa de lã",
            "simplePronunciation": "sué-ter",
            "phonetic": "/ˈswet.ər/",
            "exampleEn": "This wool sweater is warm.",
            "examplePt": "Este suéter de lã é quentinho."
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
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag",
            "translationPt": "Bolsa",
            "simplePronunciation": "bég",
            "phonetic": "/bæɡ/",
            "exampleEn": "She carries her bag.",
            "examplePt": "Ela carrega a bolsa dela."
          }
        ],
        "options": [
          "Coat",
          "Sweater",
          "Boots",
          "Bag"
        ],
        "correctAnswer": "Coat",
        "contextSentence": "You need a warm coat in winter.",
        "contextSentencePt": "Você precisa de um casaco no inverno.",
        "explanation": "Exemplo: \"You need a warm coat in winter.\" — Você precisa de um casaco no inverno.",
        "phoneticHint": "\"côut\" • /koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hat",
        "visualEmoji": "👒",
        "visualOptions": [
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco no inverno."
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu",
            "simplePronunciation": "rét",
            "phonetic": "/hæt/",
            "exampleEn": "Wear a hat in the sun.",
            "examplePt": "Use um chapéu no sol."
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis",
            "simplePronunciation": "sní-kers",
            "phonetic": "/ˈsniː.kərz/",
            "exampleEn": "Put on your sneakers to walk.",
            "examplePt": "Calce seus tênis para caminhar."
          },
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt",
            "translationPt": "Camiseta",
            "simplePronunciation": "tí-xârt",
            "phonetic": "/ˈtiː.ʃɜːrt/",
            "exampleEn": "I wear a cotton T-shirt.",
            "examplePt": "Eu uso uma camiseta de algodão."
          }
        ],
        "options": [
          "Coat",
          "Hat",
          "Sneakers",
          "T-shirt"
        ],
        "correctAnswer": "Hat",
        "contextSentence": "Wear a hat in the sun.",
        "contextSentencePt": "Use um chapéu no sol.",
        "explanation": "Exemplo: \"Wear a hat in the sun.\" — Use um chapéu no sol.",
        "phoneticHint": "\"rét\" • /hæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Jeans",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt",
            "translationPt": "Camiseta",
            "simplePronunciation": "tí-xârt",
            "phonetic": "/ˈtiː.ʃɜːrt/",
            "exampleEn": "I wear a cotton T-shirt.",
            "examplePt": "Eu uso uma camiseta de algodão."
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag",
            "translationPt": "Bolsa",
            "simplePronunciation": "bég",
            "phonetic": "/bæɡ/",
            "exampleEn": "She carries her bag.",
            "examplePt": "Ela carrega a bolsa dela."
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu",
            "simplePronunciation": "rét",
            "phonetic": "/hæt/",
            "exampleEn": "Wear a hat in the sun.",
            "examplePt": "Use um chapéu no sol."
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans",
            "simplePronunciation": "djínz",
            "phonetic": "/dʒiːnz/",
            "exampleEn": "Blue jeans go with everything.",
            "examplePt": "Calça jeans combina com tudo."
          }
        ],
        "options": [
          "T-shirt",
          "Bag",
          "Hat",
          "Jeans"
        ],
        "correctAnswer": "Jeans",
        "contextSentence": "Blue jeans go with everything.",
        "contextSentencePt": "Calça jeans combina com tudo.",
        "explanation": "Exemplo: \"Blue jeans go with everything.\" — Calça jeans combina com tudo.",
        "phoneticHint": "\"djínz\" • /dʒiːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bag",
        "visualEmoji": "👜",
        "visualOptions": [
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Blusa de lã",
            "simplePronunciation": "sué-ter",
            "phonetic": "/ˈswet.ər/",
            "exampleEn": "This wool sweater is warm.",
            "examplePt": "Este suéter de lã é quentinho."
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis",
            "simplePronunciation": "sní-kers",
            "phonetic": "/ˈsniː.kərz/",
            "exampleEn": "Put on your sneakers to walk.",
            "examplePt": "Calce seus tênis para caminhar."
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag",
            "translationPt": "Bolsa",
            "simplePronunciation": "bég",
            "phonetic": "/bæɡ/",
            "exampleEn": "She carries her bag.",
            "examplePt": "Ela carrega a bolsa dela."
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
          "Sweater",
          "Sneakers",
          "Bag",
          "Boots"
        ],
        "correctAnswer": "Bag",
        "contextSentence": "She carries her bag.",
        "contextSentencePt": "Ela carrega a bolsa dela.",
        "explanation": "Exemplo: \"She carries her bag.\" — Ela carrega a bolsa dela.",
        "phoneticHint": "\"bég\" • /bæɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "T-shirt",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt",
            "translationPt": "Camiseta",
            "simplePronunciation": "tí-xârt",
            "phonetic": "/ˈtiː.ʃɜːrt/",
            "exampleEn": "I wear a cotton T-shirt.",
            "examplePt": "Eu uso uma camiseta de algodão."
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco no inverno."
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans",
            "simplePronunciation": "djínz",
            "phonetic": "/dʒiːnz/",
            "exampleEn": "Blue jeans go with everything.",
            "examplePt": "Calça jeans combina com tudo."
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu",
            "simplePronunciation": "rét",
            "phonetic": "/hæt/",
            "exampleEn": "Wear a hat in the sun.",
            "examplePt": "Use um chapéu no sol."
          }
        ],
        "options": [
          "T-shirt",
          "Coat",
          "Jeans",
          "Hat"
        ],
        "correctAnswer": "T-shirt",
        "contextSentence": "I wear a cotton T-shirt.",
        "contextSentencePt": "Eu uso uma camiseta de algodão.",
        "explanation": "Exemplo: \"I wear a cotton T-shirt.\" — Eu uso uma camiseta de algodão.",
        "phoneticHint": "\"tí-xârt\" • /ˈtiː.ʃɜːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sweater",
        "visualEmoji": "🧶",
        "visualOptions": [
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco no inverno."
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans",
            "simplePronunciation": "djínz",
            "phonetic": "/dʒiːnz/",
            "exampleEn": "Blue jeans go with everything.",
            "examplePt": "Calça jeans combina com tudo."
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Blusa de lã",
            "simplePronunciation": "sué-ter",
            "phonetic": "/ˈswet.ər/",
            "exampleEn": "This wool sweater is warm.",
            "examplePt": "Este suéter de lã é quentinho."
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis",
            "simplePronunciation": "sní-kers",
            "phonetic": "/ˈsniː.kərz/",
            "exampleEn": "Put on your sneakers to walk.",
            "examplePt": "Calce seus tênis para caminhar."
          }
        ],
        "options": [
          "Coat",
          "Jeans",
          "Sweater",
          "Sneakers"
        ],
        "correctAnswer": "Sweater",
        "contextSentence": "This wool sweater is warm.",
        "contextSentencePt": "Este suéter de lã é quentinho.",
        "explanation": "Exemplo: \"This wool sweater is warm.\" — Este suéter de lã é quentinho.",
        "phoneticHint": "\"sué-ter\" • /ˈswet.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Boots",
        "visualEmoji": "🥾",
        "visualOptions": [
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu",
            "simplePronunciation": "rét",
            "phonetic": "/hæt/",
            "exampleEn": "Wear a hat in the sun.",
            "examplePt": "Use um chapéu no sol."
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
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag",
            "translationPt": "Bolsa",
            "simplePronunciation": "bég",
            "phonetic": "/bæɡ/",
            "exampleEn": "She carries her bag.",
            "examplePt": "Ela carrega a bolsa dela."
          },
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt",
            "translationPt": "Camiseta",
            "simplePronunciation": "tí-xârt",
            "phonetic": "/ˈtiː.ʃɜːrt/",
            "exampleEn": "I wear a cotton T-shirt.",
            "examplePt": "Eu uso uma camiseta de algodão."
          }
        ],
        "options": [
          "Hat",
          "Boots",
          "Bag",
          "T-shirt"
        ],
        "correctAnswer": "Boots",
        "contextSentence": "Wear boots when it rains.",
        "contextSentencePt": "Use botas quando chover.",
        "explanation": "Exemplo: \"Wear boots when it rains.\" — Use botas quando chover.",
        "phoneticHint": "\"búts\" • /buːts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sneakers",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco",
            "simplePronunciation": "côut",
            "phonetic": "/koʊt/",
            "exampleEn": "You need a warm coat in winter.",
            "examplePt": "Você precisa de um casaco no inverno."
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Blusa de lã",
            "simplePronunciation": "sué-ter",
            "phonetic": "/ˈswet.ər/",
            "exampleEn": "This wool sweater is warm.",
            "examplePt": "Este suéter de lã é quentinho."
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans",
            "simplePronunciation": "djínz",
            "phonetic": "/dʒiːnz/",
            "exampleEn": "Blue jeans go with everything.",
            "examplePt": "Calça jeans combina com tudo."
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis",
            "simplePronunciation": "sní-kers",
            "phonetic": "/ˈsniː.kərz/",
            "exampleEn": "Put on your sneakers to walk.",
            "examplePt": "Calce seus tênis para caminhar."
          }
        ],
        "options": [
          "Coat",
          "Sweater",
          "Jeans",
          "Sneakers"
        ],
        "correctAnswer": "Sneakers",
        "contextSentence": "Put on your sneakers to walk.",
        "contextSentencePt": "Calce seus tênis para caminhar.",
        "explanation": "Exemplo: \"Put on your sneakers to walk.\" — Calce seus tênis para caminhar.",
        "phoneticHint": "\"sní-kers\" • /ˈsniː.kərz/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p24",
    "worldId": 0,
    "phaseNumber": 24,
    "themeId": "pronouns",
    "themeTitle": "Lição de Pronomes",
    "frequencyLevel": "1 a cada 3 Módulos de Vocabulário",
    "title": "Lição de Pronomes VI • Aplicando Possessivos & Demonstrativos",
    "subtitle": "Módulo de Pronomes 6/8 (Após 18 de Vocabulário) • Frases Práticas + Voz da Professora",
    "pedagogicalObjective": "Praticar frases combinando Pronomes Possessivos (My, Your, Our, Mine) e Demonstrativos (This, That, These, Those).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "6ª Lição Exclusiva de Pronomes (após 18 módulos de vocabulário).",
      "Combinação prática de Demonstrativos (This, That, These, Those) com Possessivos (My, Your, Our, Mine) em frases de conversação."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p24-pron-1",
        "type": "pair-match",
        "conceptTitle": "Aplicação • Demonstrativos e Possessivos em Frases",
        "conceptHeader": "Veja como combinamos Demonstrativos e Possessivos na mesma frase para apontar e indicar posse ao mesmo tempo: \"This is my...\" (Este é o meu...), \"That is your...\" (Aquele é o seu...), \"These... are mine\" e \"Those are our...\".",
        "teacherAudioPt": "/audio/teacher/pronoun_4.wav",
        "prompt": "🤝 Conecte cada frase em inglês à sua tradução exata:",
        "pairs": [
          {
            "id": "w0-p24-b1-pd1",
            "en": "This is my car",
            "emoji": "🚗",
            "phonetic": "/ðɪs ɪz maɪ kɑːr/",
            "pt": "Este aqui é o meu carro (1 perto)",
            "tipPt": "Correto! \"This\" (este perto) + \"my\" (meu)."
          },
          {
            "id": "w0-p24-b1-pd2",
            "en": "That is your bus",
            "emoji": "🚌",
            "phonetic": "/ðæt ɪz jʊr bʌs/",
            "pt": "Aquele lá é o seu ônibus (1 longe)",
            "tipPt": "Perfeito! \"That\" (aquele longe) + \"your\" (seu)."
          },
          {
            "id": "w0-p24-b1-pd3",
            "en": "These shoes are mine",
            "emoji": "👟",
            "phonetic": "/ðiːz ʃuːz ɑːr maɪn/",
            "pt": "Estes sapatos aqui são meus (vários perto)",
            "tipPt": "Muito bem! \"These\" (estes perto) + \"mine\" (meus, no final)."
          },
          {
            "id": "w0-p24-b1-pd4",
            "en": "Those are our bags",
            "emoji": "👜",
            "phonetic": "/ðoʊz ɑːr aʊər bæɡz/",
            "pt": "Aquelas lá são as nossas bolsas (várias longe)",
            "tipPt": "Excelente! \"Those\" (aquelas longe) + \"our\" (nossas)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This is my car (Este é meu carro), That is your bus (Aquele é seu ônibus), These shoes are mine (Estes sapatos são meus), Those are our bags (Aquelas são nossas bolsas).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p25",
    "worldId": 0,
    "phaseNumber": 25,
    "themeId": "clothes",
    "themeTitle": "Tema 5: Roupas",
    "frequencyLevel": "Módulo 3 • Palavras Intermediárias",
    "title": "Roupas • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema: Roupas (3/4) • 8 acessórios pessoais intermediários",
    "pedagogicalObjective": "Aprender 8 acessórios intermediários: Glasses, Watch, Belt, Cap, Tie, Scarf, Gloves e Umbrella.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Roupas — Módulo 3 (Palavras intermediárias): acessórios de uso pessoal e proteção.",
      "Palavras deste módulo (8): Glasses (\"glé-ses\" = Óculos), Watch (\"uótch\" = Relógio de pulso), Belt (\"bélt\" = Cinto), Cap (\"kép\" = Boné), Tie (\"tái\" = Gravata), Scarf (\"scárf\" = Cachecol), Gloves (\"glâvz\" = Luvas) e Umbrella (\"âm-bré-la\" = Guarda-chuva)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p25-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné",
            "simplePronunciation": "kép",
            "phonetic": "/kæp/",
            "exampleEn": "He wears a cap outdoors.",
            "examplePt": "Ele usa um boné ao ar livre."
          },
          {
            "text": "Belt",
            "emoji": "👖",
            "label": "Belt",
            "translationPt": "Cinto",
            "simplePronunciation": "bélt",
            "phonetic": "/belt/",
            "exampleEn": "This leather belt fits well.",
            "examplePt": "Este cinto de couro serve bem."
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva",
            "simplePronunciation": "âm-bré-la",
            "phonetic": "/ʌmˈbrel.ə/",
            "exampleEn": "Take an umbrella in the rain.",
            "examplePt": "Leve um guarda-chuva na chuva."
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
          }
        ],
        "options": [
          "Cap",
          "Belt",
          "Umbrella",
          "Glasses"
        ],
        "correctAnswer": "Glasses",
        "contextSentence": "I need my glasses to read.",
        "contextSentencePt": "Preciso dos meus óculos para ler.",
        "explanation": "Exemplo: \"I need my glasses to read.\" — Preciso dos meus óculos para ler.",
        "phoneticHint": "\"glé-ses\" • /ˈɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Watch",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol",
            "simplePronunciation": "scárf",
            "phonetic": "/skɑːrf/",
            "exampleEn": "Wrap a scarf around your neck.",
            "examplePt": "Enrole um cachecol no pescoço."
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas",
            "simplePronunciation": "glâvz",
            "phonetic": "/ɡlʌvz/",
            "exampleEn": "Gloves keep your hands warm.",
            "examplePt": "As luvas mantêm as mãos quentes."
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso",
            "simplePronunciation": "uótch",
            "phonetic": "/wɑːtʃ/",
            "exampleEn": "Check the time on your watch.",
            "examplePt": "Veja a hora no seu relógio de pulso."
          },
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie",
            "translationPt": "Gravata",
            "simplePronunciation": "tái",
            "phonetic": "/taɪ/",
            "exampleEn": "He wears a tie to work.",
            "examplePt": "Ele usa gravata no trabalho."
          }
        ],
        "options": [
          "Scarf",
          "Gloves",
          "Watch",
          "Tie"
        ],
        "correctAnswer": "Watch",
        "contextSentence": "Check the time on your watch.",
        "contextSentencePt": "Veja a hora no seu relógio de pulso.",
        "explanation": "Exemplo: \"Check the time on your watch.\" — Veja a hora no seu relógio de pulso.",
        "phoneticHint": "\"uótch\" • /wɑːtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Belt",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Belt",
            "emoji": "👖",
            "label": "Belt",
            "translationPt": "Cinto",
            "simplePronunciation": "bélt",
            "phonetic": "/belt/",
            "exampleEn": "This leather belt fits well.",
            "examplePt": "Este cinto de couro serve bem."
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas",
            "simplePronunciation": "glâvz",
            "phonetic": "/ɡlʌvz/",
            "exampleEn": "Gloves keep your hands warm.",
            "examplePt": "As luvas mantêm as mãos quentes."
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso",
            "simplePronunciation": "uótch",
            "phonetic": "/wɑːtʃ/",
            "exampleEn": "Check the time on your watch.",
            "examplePt": "Veja a hora no seu relógio de pulso."
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
          }
        ],
        "options": [
          "Belt",
          "Gloves",
          "Watch",
          "Glasses"
        ],
        "correctAnswer": "Belt",
        "contextSentence": "This leather belt fits well.",
        "contextSentencePt": "Este cinto de couro serve bem.",
        "explanation": "Exemplo: \"This leather belt fits well.\" — Este cinto de couro serve bem.",
        "phoneticHint": "\"bélt\" • /belt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cap",
        "visualEmoji": "🧢",
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
            "exampleEn": "Check the time on your watch.",
            "examplePt": "Veja a hora no seu relógio de pulso."
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné",
            "simplePronunciation": "kép",
            "phonetic": "/kæp/",
            "exampleEn": "He wears a cap outdoors.",
            "examplePt": "Ele usa um boné ao ar livre."
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol",
            "simplePronunciation": "scárf",
            "phonetic": "/skɑːrf/",
            "exampleEn": "Wrap a scarf around your neck.",
            "examplePt": "Enrole um cachecol no pescoço."
          }
        ],
        "options": [
          "Glasses",
          "Watch",
          "Cap",
          "Scarf"
        ],
        "correctAnswer": "Cap",
        "contextSentence": "He wears a cap outdoors.",
        "contextSentencePt": "Ele usa um boné ao ar livre.",
        "explanation": "Exemplo: \"He wears a cap outdoors.\" — Ele usa um boné ao ar livre.",
        "phoneticHint": "\"kép\" • /kæp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Tie",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva",
            "simplePronunciation": "âm-bré-la",
            "phonetic": "/ʌmˈbrel.ə/",
            "exampleEn": "Take an umbrella in the rain.",
            "examplePt": "Leve um guarda-chuva na chuva."
          },
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie",
            "translationPt": "Gravata",
            "simplePronunciation": "tái",
            "phonetic": "/taɪ/",
            "exampleEn": "He wears a tie to work.",
            "examplePt": "Ele usa gravata no trabalho."
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas",
            "simplePronunciation": "glâvz",
            "phonetic": "/ɡlʌvz/",
            "exampleEn": "Gloves keep your hands warm.",
            "examplePt": "As luvas mantêm as mãos quentes."
          },
          {
            "text": "Belt",
            "emoji": "👖",
            "label": "Belt",
            "translationPt": "Cinto",
            "simplePronunciation": "bélt",
            "phonetic": "/belt/",
            "exampleEn": "This leather belt fits well.",
            "examplePt": "Este cinto de couro serve bem."
          }
        ],
        "options": [
          "Umbrella",
          "Tie",
          "Gloves",
          "Belt"
        ],
        "correctAnswer": "Tie",
        "contextSentence": "He wears a tie to work.",
        "contextSentencePt": "Ele usa gravata no trabalho.",
        "explanation": "Exemplo: \"He wears a tie to work.\" — Ele usa gravata no trabalho.",
        "phoneticHint": "\"tái\" • /taɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Scarf",
        "visualEmoji": "🧣",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné",
            "simplePronunciation": "kép",
            "phonetic": "/kæp/",
            "exampleEn": "He wears a cap outdoors.",
            "examplePt": "Ele usa um boné ao ar livre."
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
            "exampleEn": "Check the time on your watch.",
            "examplePt": "Veja a hora no seu relógio de pulso."
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol",
            "simplePronunciation": "scárf",
            "phonetic": "/skɑːrf/",
            "exampleEn": "Wrap a scarf around your neck.",
            "examplePt": "Enrole um cachecol no pescoço."
          }
        ],
        "options": [
          "Cap",
          "Glasses",
          "Watch",
          "Scarf"
        ],
        "correctAnswer": "Scarf",
        "contextSentence": "Wrap a scarf around your neck.",
        "contextSentencePt": "Enrole um cachecol no pescoço.",
        "explanation": "Exemplo: \"Wrap a scarf around your neck.\" — Enrole um cachecol no pescoço.",
        "phoneticHint": "\"scárf\" • /skɑːrf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Gloves",
        "visualEmoji": "🧤",
        "visualOptions": [
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas",
            "simplePronunciation": "glâvz",
            "phonetic": "/ɡlʌvz/",
            "exampleEn": "Gloves keep your hands warm.",
            "examplePt": "As luvas mantêm as mãos quentes."
          },
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie",
            "translationPt": "Gravata",
            "simplePronunciation": "tái",
            "phonetic": "/taɪ/",
            "exampleEn": "He wears a tie to work.",
            "examplePt": "Ele usa gravata no trabalho."
          },
          {
            "text": "Belt",
            "emoji": "👖",
            "label": "Belt",
            "translationPt": "Cinto",
            "simplePronunciation": "bélt",
            "phonetic": "/belt/",
            "exampleEn": "This leather belt fits well.",
            "examplePt": "Este cinto de couro serve bem."
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva",
            "simplePronunciation": "âm-bré-la",
            "phonetic": "/ʌmˈbrel.ə/",
            "exampleEn": "Take an umbrella in the rain.",
            "examplePt": "Leve um guarda-chuva na chuva."
          }
        ],
        "options": [
          "Gloves",
          "Tie",
          "Belt",
          "Umbrella"
        ],
        "correctAnswer": "Gloves",
        "contextSentence": "Gloves keep your hands warm.",
        "contextSentencePt": "As luvas mantêm as mãos quentes.",
        "explanation": "Exemplo: \"Gloves keep your hands warm.\" — As luvas mantêm as mãos quentes.",
        "phoneticHint": "\"glâvz\" • /ɡlʌvz/",
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
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol",
            "simplePronunciation": "scárf",
            "phonetic": "/skɑːrf/",
            "exampleEn": "Wrap a scarf around your neck.",
            "examplePt": "Enrole um cachecol no pescoço."
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva",
            "simplePronunciation": "âm-bré-la",
            "phonetic": "/ʌmˈbrel.ə/",
            "exampleEn": "Take an umbrella in the rain.",
            "examplePt": "Leve um guarda-chuva na chuva."
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné",
            "simplePronunciation": "kép",
            "phonetic": "/kæp/",
            "exampleEn": "He wears a cap outdoors.",
            "examplePt": "Ele usa um boné ao ar livre."
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso",
            "simplePronunciation": "uótch",
            "phonetic": "/wɑːtʃ/",
            "exampleEn": "Check the time on your watch.",
            "examplePt": "Veja a hora no seu relógio de pulso."
          }
        ],
        "options": [
          "Scarf",
          "Umbrella",
          "Cap",
          "Watch"
        ],
        "correctAnswer": "Umbrella",
        "contextSentence": "Take an umbrella in the rain.",
        "contextSentencePt": "Leve um guarda-chuva na chuva.",
        "explanation": "Exemplo: \"Take an umbrella in the rain.\" — Leve um guarda-chuva na chuva.",
        "phoneticHint": "\"âm-bré-la\" • /ʌmˈbrel.ə/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p26",
    "worldId": 0,
    "phaseNumber": 26,
    "themeId": "clothes",
    "themeTitle": "Tema 5: Roupas",
    "frequencyLevel": "Módulo 4 • Menos Comuns ou Específicas",
    "title": "Roupas • Módulo 4: Menos Comuns",
    "subtitle": "Tema: Roupas (4/4) • 8 peças específicas e detalhes das roupas",
    "pedagogicalObjective": "Conhecer 8 termos específicos de vestuário: Apron, Vest, Raincoat, Slippers, Zipper, Sleeve, Collar e Hanger.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Roupas — Módulo 4 (Palavras menos comuns ou específicas): partes das roupas e peças específicas.",
      "Palavras deste módulo (8): Apron (\"êi-pron\" = Avental), Vest (\"vést\" = Colete), Raincoat (\"rêin-côut\" = Capa de chuva), Slippers (\"slí-pers\" = Pantufas), Zipper (\"zí-per\" = Zíper), Sleeve (\"slív\" = Manga), Collar (\"có-lar\" = Gola) e Hanger (\"rén-guer\" = Cabide)."
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
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar",
            "translationPt": "Gola / Colarinho",
            "simplePronunciation": "có-lar",
            "phonetic": "/ˈkɑː.lər/",
            "exampleEn": "Straighten your shirt collar.",
            "examplePt": "Arrume a gola da camisa."
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger",
            "translationPt": "Cabide",
            "simplePronunciation": "rén-guer",
            "phonetic": "/ˈhæŋ.ər/",
            "exampleEn": "Put the shirt on a hanger.",
            "examplePt": "Coloque a camisa em um cabide."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental ao cozinhar."
          },
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat",
            "translationPt": "Capa de chuva",
            "simplePronunciation": "rêin-côut",
            "phonetic": "/ˈreɪn.koʊt/",
            "exampleEn": "A raincoat keeps you dry.",
            "examplePt": "A capa de chuva mantém você seco."
          }
        ],
        "options": [
          "Collar",
          "Hanger",
          "Apron",
          "Raincoat"
        ],
        "correctAnswer": "Apron",
        "contextSentence": "Wear an apron while cooking.",
        "contextSentencePt": "Use um avental ao cozinhar.",
        "explanation": "Exemplo: \"Wear an apron while cooking.\" — Use um avental ao cozinhar.",
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
            "exampleEn": "He wore a vest over his shirt.",
            "examplePt": "Ele usou um colete sobre a camisa."
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
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve",
            "translationPt": "Manga",
            "simplePronunciation": "slív",
            "phonetic": "/sliːv/",
            "exampleEn": "Roll up your shirt sleeves.",
            "examplePt": "Dobre as mangas da camisa."
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers",
            "translationPt": "Pantufas",
            "simplePronunciation": "slí-pers",
            "phonetic": "/ˈslɪp.ərz/",
            "exampleEn": "Wear soft slippers at home.",
            "examplePt": "Use pantufas macias em casa."
          }
        ],
        "options": [
          "Vest",
          "Zipper",
          "Sleeve",
          "Slippers"
        ],
        "correctAnswer": "Vest",
        "contextSentence": "He wore a vest over his shirt.",
        "contextSentencePt": "Ele usou um colete sobre a camisa.",
        "explanation": "Exemplo: \"He wore a vest over his shirt.\" — Ele usou um colete sobre a camisa.",
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
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar",
            "translationPt": "Gola / Colarinho",
            "simplePronunciation": "có-lar",
            "phonetic": "/ˈkɑː.lər/",
            "exampleEn": "Straighten your shirt collar.",
            "examplePt": "Arrume a gola da camisa."
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger",
            "translationPt": "Cabide",
            "simplePronunciation": "rén-guer",
            "phonetic": "/ˈhæŋ.ər/",
            "exampleEn": "Put the shirt on a hanger.",
            "examplePt": "Coloque a camisa em um cabide."
          },
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat",
            "translationPt": "Capa de chuva",
            "simplePronunciation": "rêin-côut",
            "phonetic": "/ˈreɪn.koʊt/",
            "exampleEn": "A raincoat keeps you dry.",
            "examplePt": "A capa de chuva mantém você seco."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental ao cozinhar."
          }
        ],
        "options": [
          "Collar",
          "Hanger",
          "Raincoat",
          "Apron"
        ],
        "correctAnswer": "Raincoat",
        "contextSentence": "A raincoat keeps you dry.",
        "contextSentencePt": "A capa de chuva mantém você seco.",
        "explanation": "Exemplo: \"A raincoat keeps you dry.\" — A capa de chuva mantém você seco.",
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
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve",
            "translationPt": "Manga",
            "simplePronunciation": "slív",
            "phonetic": "/sliːv/",
            "exampleEn": "Roll up your shirt sleeves.",
            "examplePt": "Dobre as mangas da camisa."
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers",
            "translationPt": "Pantufas",
            "simplePronunciation": "slí-pers",
            "phonetic": "/ˈslɪp.ərz/",
            "exampleEn": "Wear soft slippers at home.",
            "examplePt": "Use pantufas macias em casa."
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
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest",
            "translationPt": "Colete",
            "simplePronunciation": "vést",
            "phonetic": "/vest/",
            "exampleEn": "He wore a vest over his shirt.",
            "examplePt": "Ele usou um colete sobre a camisa."
          }
        ],
        "options": [
          "Sleeve",
          "Slippers",
          "Zipper",
          "Vest"
        ],
        "correctAnswer": "Slippers",
        "contextSentence": "Wear soft slippers at home.",
        "contextSentencePt": "Use pantufas macias em casa.",
        "explanation": "Exemplo: \"Wear soft slippers at home.\" — Use pantufas macias em casa.",
        "phoneticHint": "\"slí-pers\" • /ˈslɪp.ərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Zipper",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat",
            "translationPt": "Capa de chuva",
            "simplePronunciation": "rêin-côut",
            "phonetic": "/ˈreɪn.koʊt/",
            "exampleEn": "A raincoat keeps you dry.",
            "examplePt": "A capa de chuva mantém você seco."
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar",
            "translationPt": "Gola / Colarinho",
            "simplePronunciation": "có-lar",
            "phonetic": "/ˈkɑː.lər/",
            "exampleEn": "Straighten your shirt collar.",
            "examplePt": "Arrume a gola da camisa."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental ao cozinhar."
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
          "Raincoat",
          "Collar",
          "Apron",
          "Zipper"
        ],
        "correctAnswer": "Zipper",
        "contextSentence": "Close the jacket zipper.",
        "contextSentencePt": "Feche o zíper da jaqueta.",
        "explanation": "Exemplo: \"Close the jacket zipper.\" — Feche o zíper da jaqueta.",
        "phoneticHint": "\"zí-per\" • /ˈzɪp.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sleeve",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve",
            "translationPt": "Manga",
            "simplePronunciation": "slív",
            "phonetic": "/sliːv/",
            "exampleEn": "Roll up your shirt sleeves.",
            "examplePt": "Dobre as mangas da camisa."
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger",
            "translationPt": "Cabide",
            "simplePronunciation": "rén-guer",
            "phonetic": "/ˈhæŋ.ər/",
            "exampleEn": "Put the shirt on a hanger.",
            "examplePt": "Coloque a camisa em um cabide."
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers",
            "translationPt": "Pantufas",
            "simplePronunciation": "slí-pers",
            "phonetic": "/ˈslɪp.ərz/",
            "exampleEn": "Wear soft slippers at home.",
            "examplePt": "Use pantufas macias em casa."
          },
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest",
            "translationPt": "Colete",
            "simplePronunciation": "vést",
            "phonetic": "/vest/",
            "exampleEn": "He wore a vest over his shirt.",
            "examplePt": "Ele usou um colete sobre a camisa."
          }
        ],
        "options": [
          "Sleeve",
          "Hanger",
          "Slippers",
          "Vest"
        ],
        "correctAnswer": "Sleeve",
        "contextSentence": "Roll up your shirt sleeves.",
        "contextSentencePt": "Dobre as mangas da camisa.",
        "explanation": "Exemplo: \"Roll up your shirt sleeves.\" — Dobre as mangas da camisa.",
        "phoneticHint": "\"slív\" • /sliːv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Collar",
        "visualEmoji": "👔",
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
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar",
            "translationPt": "Gola / Colarinho",
            "simplePronunciation": "có-lar",
            "phonetic": "/ˈkɑː.lər/",
            "exampleEn": "Straighten your shirt collar.",
            "examplePt": "Arrume a gola da camisa."
          },
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat",
            "translationPt": "Capa de chuva",
            "simplePronunciation": "rêin-côut",
            "phonetic": "/ˈreɪn.koʊt/",
            "exampleEn": "A raincoat keeps you dry.",
            "examplePt": "A capa de chuva mantém você seco."
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental",
            "simplePronunciation": "êi-pron",
            "phonetic": "/ˈeɪ.prən/",
            "exampleEn": "Wear an apron while cooking.",
            "examplePt": "Use um avental ao cozinhar."
          }
        ],
        "options": [
          "Zipper",
          "Collar",
          "Raincoat",
          "Apron"
        ],
        "correctAnswer": "Collar",
        "contextSentence": "Straighten your shirt collar.",
        "contextSentencePt": "Arrume a gola da camisa.",
        "explanation": "Exemplo: \"Straighten your shirt collar.\" — Arrume a gola da camisa.",
        "phoneticHint": "\"có-lar\" • /ˈkɑː.lər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hanger",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers",
            "translationPt": "Pantufas",
            "simplePronunciation": "slí-pers",
            "phonetic": "/ˈslɪp.ərz/",
            "exampleEn": "Wear soft slippers at home.",
            "examplePt": "Use pantufas macias em casa."
          },
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest",
            "translationPt": "Colete",
            "simplePronunciation": "vést",
            "phonetic": "/vest/",
            "exampleEn": "He wore a vest over his shirt.",
            "examplePt": "Ele usou um colete sobre a camisa."
          },
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve",
            "translationPt": "Manga",
            "simplePronunciation": "slív",
            "phonetic": "/sliːv/",
            "exampleEn": "Roll up your shirt sleeves.",
            "examplePt": "Dobre as mangas da camisa."
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger",
            "translationPt": "Cabide",
            "simplePronunciation": "rén-guer",
            "phonetic": "/ˈhæŋ.ər/",
            "exampleEn": "Put the shirt on a hanger.",
            "examplePt": "Coloque a camisa em um cabide."
          }
        ],
        "options": [
          "Slippers",
          "Vest",
          "Sleeve",
          "Hanger"
        ],
        "correctAnswer": "Hanger",
        "contextSentence": "Put the shirt on a hanger.",
        "contextSentencePt": "Coloque a camisa em um cabide.",
        "explanation": "Exemplo: \"Put the shirt on a hanger.\" — Coloque a camisa em um cabide.",
        "phoneticHint": "\"rén-guer\" • /ˈhæŋ.ər/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p27",
    "worldId": 0,
    "phaseNumber": 27,
    "themeId": "work",
    "themeTitle": "Tema 6: Trabalho",
    "frequencyLevel": "Módulo 1 • Essenciais e Mais Comuns",
    "title": "Trabalho • Módulo 1: Palavras Essenciais",
    "subtitle": "Tema: Trabalho (1/4) • 8 palavras essenciais de trabalho e estudo",
    "pedagogicalObjective": "Dominar 8 termos essenciais de trabalho e rotina profissional: Office, School, Teacher, Doctor, Computer, Book, Pen e Phone.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Trabalho — Módulo 1 (Palavras essenciais e mais comuns): profissões, locais e ferramentas essenciais.",
      "Palavras deste módulo (8): Office (\"ó-fis\" = Escritório), School (\"scúl\" = Escola), Teacher (\"tí-tcher\" = Professor), Doctor (\"dók-tor\" = Médico), Computer (\"com-piú-ter\" = Computador), Book (\"búk\" = Livro), Pen (\"pén\" = Caneta) e Phone (\"fôun\" = Telefone/Celular)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p27-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Office",
        "visualEmoji": "🏢",
        "visualOptions": [
          {
            "text": "Office",
            "emoji": "🏢",
            "label": "Office",
            "translationPt": "Escritório",
            "simplePronunciation": "ó-fis",
            "phonetic": "/ˈɑː.fɪs/",
            "exampleEn": "She works in an office.",
            "examplePt": "Ela trabalha em um escritório."
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta",
            "simplePronunciation": "pén",
            "phonetic": "/pen/",
            "exampleEn": "Sign the document with a pen.",
            "examplePt": "Assine o documento com uma caneta."
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro",
            "simplePronunciation": "búk",
            "phonetic": "/bʊk/",
            "exampleEn": "Read this book carefully.",
            "examplePt": "Leia este livro com atenção."
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador",
            "simplePronunciation": "com-piú-ter",
            "phonetic": "/kəmˈpjuː.tər/",
            "exampleEn": "Use the computer for work.",
            "examplePt": "Use o computador para trabalhar."
          }
        ],
        "options": [
          "Office",
          "Pen",
          "Book",
          "Computer"
        ],
        "correctAnswer": "Office",
        "contextSentence": "She works in an office.",
        "contextSentencePt": "Ela trabalha em um escritório.",
        "explanation": "Exemplo: \"She works in an office.\" — Ela trabalha em um escritório.",
        "phoneticHint": "\"ó-fis\" • /ˈɑː.fɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "School",
        "visualEmoji": "🏫",
        "visualOptions": [
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)",
            "simplePronunciation": "tí-tcher",
            "phonetic": "/ˈtiː.tʃər/",
            "exampleEn": "The teacher explains the lesson.",
            "examplePt": "A professora explica a lição."
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone / Celular",
            "simplePronunciation": "fôun",
            "phonetic": "/foʊn/",
            "exampleEn": "Answer the office phone.",
            "examplePt": "Atenda o telefone."
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola",
            "simplePronunciation": "scúl",
            "phonetic": "/skuːl/",
            "exampleEn": "The school opens at seven.",
            "examplePt": "A escola abre às sete."
          },
          {
            "text": "Office",
            "emoji": "🏢",
            "label": "Office",
            "translationPt": "Escritório",
            "simplePronunciation": "ó-fis",
            "phonetic": "/ˈɑː.fɪs/",
            "exampleEn": "She works in an office.",
            "examplePt": "Ela trabalha em um escritório."
          }
        ],
        "options": [
          "Teacher",
          "Phone",
          "School",
          "Office"
        ],
        "correctAnswer": "School",
        "contextSentence": "The school opens at seven.",
        "contextSentencePt": "A escola abre às sete.",
        "explanation": "Exemplo: \"The school opens at seven.\" — A escola abre às sete.",
        "phoneticHint": "\"scúl\" • /skuːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p27-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Teacher",
        "visualEmoji": "👩‍🏫",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro",
            "simplePronunciation": "búk",
            "phonetic": "/bʊk/",
            "exampleEn": "Read this book carefully.",
            "examplePt": "Leia este livro com atenção."
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)",
            "simplePronunciation": "tí-tcher",
            "phonetic": "/ˈtiː.tʃər/",
            "exampleEn": "The teacher explains the lesson.",
            "examplePt": "A professora explica a lição."
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta",
            "simplePronunciation": "pén",
            "phonetic": "/pen/",
            "exampleEn": "Sign the document with a pen.",
            "examplePt": "Assine o documento com uma caneta."
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador",
            "simplePronunciation": "com-piú-ter",
            "phonetic": "/kəmˈpjuː.tər/",
            "exampleEn": "Use the computer for work.",
            "examplePt": "Use o computador para trabalhar."
          }
        ],
        "options": [
          "Book",
          "Teacher",
          "Pen",
          "Computer"
        ],
        "correctAnswer": "Teacher",
        "contextSentence": "The teacher explains the lesson.",
        "contextSentencePt": "A professora explica a lição.",
        "explanation": "Exemplo: \"The teacher explains the lesson.\" — A professora explica a lição.",
        "phoneticHint": "\"tí-tcher\" • /ˈtiː.tʃər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Doctor",
        "visualEmoji": "🩺",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone / Celular",
            "simplePronunciation": "fôun",
            "phonetic": "/foʊn/",
            "exampleEn": "Answer the office phone.",
            "examplePt": "Atenda o telefone."
          },
          {
            "text": "Office",
            "emoji": "🏢",
            "label": "Office",
            "translationPt": "Escritório",
            "simplePronunciation": "ó-fis",
            "phonetic": "/ˈɑː.fɪs/",
            "exampleEn": "She works in an office.",
            "examplePt": "Ela trabalha em um escritório."
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola",
            "simplePronunciation": "scúl",
            "phonetic": "/skuːl/",
            "exampleEn": "The school opens at seven.",
            "examplePt": "A escola abre às sete."
          },
          {
            "text": "Doctor",
            "emoji": "🩺",
            "label": "Doctor",
            "translationPt": "Médico(a)",
            "simplePronunciation": "dók-tor",
            "phonetic": "/ˈdɑːk.tər/",
            "exampleEn": "The doctor works at the hospital.",
            "examplePt": "O médico trabalha no hospital."
          }
        ],
        "options": [
          "Phone",
          "Office",
          "School",
          "Doctor"
        ],
        "correctAnswer": "Doctor",
        "contextSentence": "The doctor works at the hospital.",
        "contextSentencePt": "O médico trabalha no hospital.",
        "explanation": "Exemplo: \"The doctor works at the hospital.\" — O médico trabalha no hospital.",
        "phoneticHint": "\"dók-tor\" • /ˈdɑːk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Computer",
        "visualEmoji": "💻",
        "visualOptions": [
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador",
            "simplePronunciation": "com-piú-ter",
            "phonetic": "/kəmˈpjuː.tər/",
            "exampleEn": "Use the computer for work.",
            "examplePt": "Use o computador para trabalhar."
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)",
            "simplePronunciation": "tí-tcher",
            "phonetic": "/ˈtiː.tʃər/",
            "exampleEn": "The teacher explains the lesson.",
            "examplePt": "A professora explica a lição."
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola",
            "simplePronunciation": "scúl",
            "phonetic": "/skuːl/",
            "exampleEn": "The school opens at seven.",
            "examplePt": "A escola abre às sete."
          },
          {
            "text": "Doctor",
            "emoji": "🩺",
            "label": "Doctor",
            "translationPt": "Médico(a)",
            "simplePronunciation": "dók-tor",
            "phonetic": "/ˈdɑːk.tər/",
            "exampleEn": "The doctor works at the hospital.",
            "examplePt": "O médico trabalha no hospital."
          }
        ],
        "options": [
          "Computer",
          "Teacher",
          "School",
          "Doctor"
        ],
        "correctAnswer": "Computer",
        "contextSentence": "Use the computer for work.",
        "contextSentencePt": "Use o computador para trabalhar.",
        "explanation": "Exemplo: \"Use the computer for work.\" — Use o computador para trabalhar.",
        "phoneticHint": "\"com-piú-ter\" • /kəmˈpjuː.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p27-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Book",
        "visualEmoji": "📘",
        "visualOptions": [
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador",
            "simplePronunciation": "com-piú-ter",
            "phonetic": "/kəmˈpjuː.tər/",
            "exampleEn": "Use the computer for work.",
            "examplePt": "Use o computador para trabalhar."
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro",
            "simplePronunciation": "búk",
            "phonetic": "/bʊk/",
            "exampleEn": "Read this book carefully.",
            "examplePt": "Leia este livro com atenção."
          },
          {
            "text": "Office",
            "emoji": "🏢",
            "label": "Office",
            "translationPt": "Escritório",
            "simplePronunciation": "ó-fis",
            "phonetic": "/ˈɑː.fɪs/",
            "exampleEn": "She works in an office.",
            "examplePt": "Ela trabalha em um escritório."
          },
          {
            "text": "Doctor",
            "emoji": "🩺",
            "label": "Doctor",
            "translationPt": "Médico(a)",
            "simplePronunciation": "dók-tor",
            "phonetic": "/ˈdɑːk.tər/",
            "exampleEn": "The doctor works at the hospital.",
            "examplePt": "O médico trabalha no hospital."
          }
        ],
        "options": [
          "Computer",
          "Book",
          "Office",
          "Doctor"
        ],
        "correctAnswer": "Book",
        "contextSentence": "Read this book carefully.",
        "contextSentencePt": "Leia este livro com atenção.",
        "explanation": "Exemplo: \"Read this book carefully.\" — Leia este livro com atenção.",
        "phoneticHint": "\"búk\" • /bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pen",
        "visualEmoji": "🖊️",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola",
            "simplePronunciation": "scúl",
            "phonetic": "/skuːl/",
            "exampleEn": "The school opens at seven.",
            "examplePt": "A escola abre às sete."
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro",
            "simplePronunciation": "búk",
            "phonetic": "/bʊk/",
            "exampleEn": "Read this book carefully.",
            "examplePt": "Leia este livro com atenção."
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone / Celular",
            "simplePronunciation": "fôun",
            "phonetic": "/foʊn/",
            "exampleEn": "Answer the office phone.",
            "examplePt": "Atenda o telefone."
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta",
            "simplePronunciation": "pén",
            "phonetic": "/pen/",
            "exampleEn": "Sign the document with a pen.",
            "examplePt": "Assine o documento com uma caneta."
          }
        ],
        "options": [
          "School",
          "Book",
          "Phone",
          "Pen"
        ],
        "correctAnswer": "Pen",
        "contextSentence": "Sign the document with a pen.",
        "contextSentencePt": "Assine o documento com uma caneta.",
        "explanation": "Exemplo: \"Sign the document with a pen.\" — Assine o documento com uma caneta.",
        "phoneticHint": "\"pén\" • /pen/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "🩺",
            "label": "Doctor",
            "translationPt": "Médico(a)",
            "simplePronunciation": "dók-tor",
            "phonetic": "/ˈdɑːk.tər/",
            "exampleEn": "The doctor works at the hospital.",
            "examplePt": "O médico trabalha no hospital."
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)",
            "simplePronunciation": "tí-tcher",
            "phonetic": "/ˈtiː.tʃər/",
            "exampleEn": "The teacher explains the lesson.",
            "examplePt": "A professora explica a lição."
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone / Celular",
            "simplePronunciation": "fôun",
            "phonetic": "/foʊn/",
            "exampleEn": "Answer the office phone.",
            "examplePt": "Atenda o telefone."
          },
          {
            "text": "Office",
            "emoji": "🏢",
            "label": "Office",
            "translationPt": "Escritório",
            "simplePronunciation": "ó-fis",
            "phonetic": "/ˈɑː.fɪs/",
            "exampleEn": "She works in an office.",
            "examplePt": "Ela trabalha em um escritório."
          }
        ],
        "options": [
          "Doctor",
          "Teacher",
          "Phone",
          "Office"
        ],
        "correctAnswer": "Phone",
        "contextSentence": "Answer the office phone.",
        "contextSentencePt": "Atenda o telefone.",
        "explanation": "Exemplo: \"Answer the office phone.\" — Atenda o telefone.",
        "phoneticHint": "\"fôun\" • /foʊn/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p28",
    "worldId": 0,
    "phaseNumber": 28,
    "themeId": "pronouns",
    "themeTitle": "Lição de Pronomes",
    "frequencyLevel": "1 a cada 3 Módulos de Vocabulário",
    "title": "Lição de Pronomes VII • Aplicando Reflexivos & Interrogativos",
    "subtitle": "Módulo de Pronomes 7/8 (Após 21 de Vocabulário) • Perguntas e Frases + Voz da Professora",
    "pedagogicalObjective": "Praticar perguntas completas com Who, Where, Whose, What e frases com Pronomes Reflexivos.",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "7ª Lição Exclusiva de Pronomes (após 21 módulos de vocabulário).",
      "Prática de perguntas essenciais com Pronomes Interrogativos (Who, Where, Whose, What) no cotidiano."
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p28-pron-1",
        "type": "pair-match",
        "conceptTitle": "Aplicação • Perguntas Essenciais com Interrogativos",
        "conceptHeader": "No inglês cotidiano, os Pronomes Interrogativos vêm no início da pergunta: \"Who\" para saber quem é a pessoa, \"Where\" para saber a localização, \"Whose\" para saber de quem é o objeto e \"What\" para saber o que é algo.",
        "teacherAudioPt": "/audio/teacher/pronoun_6.wav",
        "prompt": "🤝 Associe cada pergunta em inglês ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p28-b1-pi1",
            "en": "Who is at the door?",
            "emoji": "🚪",
            "phonetic": "/huː ɪz æt ðə dɔːr/",
            "pt": "Quem está na porta?",
            "tipPt": "Correto! \"Who\" pergunta sobre pessoas."
          },
          {
            "id": "w0-p28-b1-pi2",
            "en": "Where is my shirt?",
            "emoji": "👔",
            "phonetic": "/wer ɪz maɪ ʃɜːrt/",
            "pt": "Onde está a minha camisa?",
            "tipPt": "Muito bem! \"Where\" pergunta sobre lugar ou localização."
          },
          {
            "id": "w0-p28-b1-pi3",
            "en": "Whose coat is this?",
            "emoji": "🧥",
            "phonetic": "/huːz koʊt ɪz ðɪs/",
            "pt": "De quem é este casaco?",
            "tipPt": "Perfeito! \"Whose\" pergunta a quem pertence o item."
          },
          {
            "id": "w0-p28-b1-pi4",
            "en": "What is on the table?",
            "emoji": "🪑",
            "phonetic": "/wɑːt ɪz ɑːn ðə ˈteɪ.bəl/",
            "pt": "O que está sobre a mesa?",
            "tipPt": "Excelente! \"What\" pergunta sobre objetos ou coisas."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Who is at the door? (Quem está na porta?), Where is my shirt? (Onde está minha camisa?), Whose coat is this? (De quem é este casaco?), What is on the table? (O que está na mesa?).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p29",
    "worldId": 0,
    "phaseNumber": 29,
    "themeId": "work",
    "themeTitle": "Tema 6: Trabalho",
    "frequencyLevel": "Módulo 2 • Palavras Comuns",
    "title": "Trabalho • Módulo 2: Palavras Comuns",
    "subtitle": "Tema: Trabalho (2/4) • 8 objetos e funções comuns no trabalho",
    "pedagogicalObjective": "Aprender 8 termos comuns do ambiente profissional: Desk, Paper, Clock, Notebook, Pencil, Nurse, Chef e Police.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Trabalho — Módulo 2 (Palavras comuns): materiais e profissões frequentes.",
      "Palavras deste módulo (8): Desk (\"désk\" = Mesa de trabalho), Paper (\"pêi-per\" = Papel), Clock (\"clók\" = Relógio de parede), Notebook (\"nôut-búk\" = Caderno), Pencil (\"pên-sol\" = Lápis), Nurse (\"nârs\" = Enfermeira), Chef (\"xéf\" = Cozinheiro/Chef) e Police (\"po-lís\" = Polícia)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p29-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Desk",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Clock",
            "emoji": "🕒",
            "label": "Clock",
            "translationPt": "Relógio de parede",
            "simplePronunciation": "clók",
            "phonetic": "/klɑːk/",
            "exampleEn": "Look at the wall clock.",
            "examplePt": "Olhe para o relógio de parede."
          },
          {
            "text": "Desk",
            "emoji": "🪑",
            "label": "Desk",
            "translationPt": "Mesa de trabalho / Escrivaninha",
            "simplePronunciation": "désk",
            "phonetic": "/desk/",
            "exampleEn": "Put the laptop on the desk.",
            "examplePt": "Coloque o notebook na escrivaninha."
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis",
            "simplePronunciation": "pên-sol",
            "phonetic": "/ˈpen.səl/",
            "exampleEn": "Draw with a wooden pencil.",
            "examplePt": "Desenhe com um lápis."
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Cozinheiro / Chef",
            "simplePronunciation": "xéf",
            "phonetic": "/ʃef/",
            "exampleEn": "The chef prepares the meal.",
            "examplePt": "O chef prepara a refeição."
          }
        ],
        "options": [
          "Clock",
          "Desk",
          "Pencil",
          "Chef"
        ],
        "correctAnswer": "Desk",
        "contextSentence": "Put the laptop on the desk.",
        "contextSentencePt": "Coloque o notebook na escrivaninha.",
        "explanation": "Exemplo: \"Put the laptop on the desk.\" — Coloque o notebook na escrivaninha.",
        "phoneticHint": "\"désk\" • /desk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Paper",
        "visualEmoji": "📄",
        "visualOptions": [
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno",
            "simplePronunciation": "nôut-búk",
            "phonetic": "/ˈnoʊt.bʊk/",
            "exampleEn": "Take notes in your notebook.",
            "examplePt": "Anote no seu caderno."
          },
          {
            "text": "Nurse",
            "emoji": "🧑‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeiro(a)",
            "simplePronunciation": "nârs",
            "phonetic": "/nɜːrs/",
            "exampleEn": "The nurse helps the patients.",
            "examplePt": "A enfermeira ajuda os pacientes."
          },
          {
            "text": "Police",
            "emoji": "👮",
            "label": "Police",
            "translationPt": "Policial / Polícia",
            "simplePronunciation": "po-lís",
            "phonetic": "/pəˈliːs/",
            "exampleEn": "The police officer helps the city.",
            "examplePt": "O policial ajuda a cidade."
          },
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Papel",
            "simplePronunciation": "pêi-per",
            "phonetic": "/ˈpeɪ.pər/",
            "exampleEn": "Write on a sheet of paper.",
            "examplePt": "Escreva em uma folha de papel."
          }
        ],
        "options": [
          "Notebook",
          "Nurse",
          "Police",
          "Paper"
        ],
        "correctAnswer": "Paper",
        "contextSentence": "Write on a sheet of paper.",
        "contextSentencePt": "Escreva em uma folha de papel.",
        "explanation": "Exemplo: \"Write on a sheet of paper.\" — Escreva em uma folha de papel.",
        "phoneticHint": "\"pêi-per\" • /ˈpeɪ.pər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Clock",
        "visualEmoji": "🕒",
        "visualOptions": [
          {
            "text": "Clock",
            "emoji": "🕒",
            "label": "Clock",
            "translationPt": "Relógio de parede",
            "simplePronunciation": "clók",
            "phonetic": "/klɑːk/",
            "exampleEn": "Look at the wall clock.",
            "examplePt": "Olhe para o relógio de parede."
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis",
            "simplePronunciation": "pên-sol",
            "phonetic": "/ˈpen.səl/",
            "exampleEn": "Draw with a wooden pencil.",
            "examplePt": "Desenhe com um lápis."
          },
          {
            "text": "Desk",
            "emoji": "🪑",
            "label": "Desk",
            "translationPt": "Mesa de trabalho / Escrivaninha",
            "simplePronunciation": "désk",
            "phonetic": "/desk/",
            "exampleEn": "Put the laptop on the desk.",
            "examplePt": "Coloque o notebook na escrivaninha."
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Cozinheiro / Chef",
            "simplePronunciation": "xéf",
            "phonetic": "/ʃef/",
            "exampleEn": "The chef prepares the meal.",
            "examplePt": "O chef prepara a refeição."
          }
        ],
        "options": [
          "Clock",
          "Pencil",
          "Desk",
          "Chef"
        ],
        "correctAnswer": "Clock",
        "contextSentence": "Look at the wall clock.",
        "contextSentencePt": "Olhe para o relógio de parede.",
        "explanation": "Exemplo: \"Look at the wall clock.\" — Olhe para o relógio de parede.",
        "phoneticHint": "\"clók\" • /klɑːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Notebook",
        "visualEmoji": "📓",
        "visualOptions": [
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Papel",
            "simplePronunciation": "pêi-per",
            "phonetic": "/ˈpeɪ.pər/",
            "exampleEn": "Write on a sheet of paper.",
            "examplePt": "Escreva em uma folha de papel."
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno",
            "simplePronunciation": "nôut-búk",
            "phonetic": "/ˈnoʊt.bʊk/",
            "exampleEn": "Take notes in your notebook.",
            "examplePt": "Anote no seu caderno."
          },
          {
            "text": "Nurse",
            "emoji": "🧑‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeiro(a)",
            "simplePronunciation": "nârs",
            "phonetic": "/nɜːrs/",
            "exampleEn": "The nurse helps the patients.",
            "examplePt": "A enfermeira ajuda os pacientes."
          },
          {
            "text": "Police",
            "emoji": "👮",
            "label": "Police",
            "translationPt": "Policial / Polícia",
            "simplePronunciation": "po-lís",
            "phonetic": "/pəˈliːs/",
            "exampleEn": "The police officer helps the city.",
            "examplePt": "O policial ajuda a cidade."
          }
        ],
        "options": [
          "Paper",
          "Notebook",
          "Nurse",
          "Police"
        ],
        "correctAnswer": "Notebook",
        "contextSentence": "Take notes in your notebook.",
        "contextSentencePt": "Anote no seu caderno.",
        "explanation": "Exemplo: \"Take notes in your notebook.\" — Anote no seu caderno.",
        "phoneticHint": "\"nôut-búk\" • /ˈnoʊt.bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pencil",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "Clock",
            "emoji": "🕒",
            "label": "Clock",
            "translationPt": "Relógio de parede",
            "simplePronunciation": "clók",
            "phonetic": "/klɑːk/",
            "exampleEn": "Look at the wall clock.",
            "examplePt": "Olhe para o relógio de parede."
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Cozinheiro / Chef",
            "simplePronunciation": "xéf",
            "phonetic": "/ʃef/",
            "exampleEn": "The chef prepares the meal.",
            "examplePt": "O chef prepara a refeição."
          },
          {
            "text": "Desk",
            "emoji": "🪑",
            "label": "Desk",
            "translationPt": "Mesa de trabalho / Escrivaninha",
            "simplePronunciation": "désk",
            "phonetic": "/desk/",
            "exampleEn": "Put the laptop on the desk.",
            "examplePt": "Coloque o notebook na escrivaninha."
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis",
            "simplePronunciation": "pên-sol",
            "phonetic": "/ˈpen.səl/",
            "exampleEn": "Draw with a wooden pencil.",
            "examplePt": "Desenhe com um lápis."
          }
        ],
        "options": [
          "Clock",
          "Chef",
          "Desk",
          "Pencil"
        ],
        "correctAnswer": "Pencil",
        "contextSentence": "Draw with a wooden pencil.",
        "contextSentencePt": "Desenhe com um lápis.",
        "explanation": "Exemplo: \"Draw with a wooden pencil.\" — Desenhe com um lápis.",
        "phoneticHint": "\"pên-sol\" • /ˈpen.səl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Nurse",
        "visualEmoji": "🧑‍⚕️",
        "visualOptions": [
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno",
            "simplePronunciation": "nôut-búk",
            "phonetic": "/ˈnoʊt.bʊk/",
            "exampleEn": "Take notes in your notebook.",
            "examplePt": "Anote no seu caderno."
          },
          {
            "text": "Police",
            "emoji": "👮",
            "label": "Police",
            "translationPt": "Policial / Polícia",
            "simplePronunciation": "po-lís",
            "phonetic": "/pəˈliːs/",
            "exampleEn": "The police officer helps the city.",
            "examplePt": "O policial ajuda a cidade."
          },
          {
            "text": "Nurse",
            "emoji": "🧑‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeiro(a)",
            "simplePronunciation": "nârs",
            "phonetic": "/nɜːrs/",
            "exampleEn": "The nurse helps the patients.",
            "examplePt": "A enfermeira ajuda os pacientes."
          },
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Papel",
            "simplePronunciation": "pêi-per",
            "phonetic": "/ˈpeɪ.pər/",
            "exampleEn": "Write on a sheet of paper.",
            "examplePt": "Escreva em uma folha de papel."
          }
        ],
        "options": [
          "Notebook",
          "Police",
          "Nurse",
          "Paper"
        ],
        "correctAnswer": "Nurse",
        "contextSentence": "The nurse helps the patients.",
        "contextSentencePt": "A enfermeira ajuda os pacientes.",
        "explanation": "Exemplo: \"The nurse helps the patients.\" — A enfermeira ajuda os pacientes.",
        "phoneticHint": "\"nârs\" • /nɜːrs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chef",
        "visualEmoji": "👨‍🍳",
        "visualOptions": [
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Cozinheiro / Chef",
            "simplePronunciation": "xéf",
            "phonetic": "/ʃef/",
            "exampleEn": "The chef prepares the meal.",
            "examplePt": "O chef prepara a refeição."
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis",
            "simplePronunciation": "pên-sol",
            "phonetic": "/ˈpen.səl/",
            "exampleEn": "Draw with a wooden pencil.",
            "examplePt": "Desenhe com um lápis."
          },
          {
            "text": "Desk",
            "emoji": "🪑",
            "label": "Desk",
            "translationPt": "Mesa de trabalho / Escrivaninha",
            "simplePronunciation": "désk",
            "phonetic": "/desk/",
            "exampleEn": "Put the laptop on the desk.",
            "examplePt": "Coloque o notebook na escrivaninha."
          },
          {
            "text": "Clock",
            "emoji": "🕒",
            "label": "Clock",
            "translationPt": "Relógio de parede",
            "simplePronunciation": "clók",
            "phonetic": "/klɑːk/",
            "exampleEn": "Look at the wall clock.",
            "examplePt": "Olhe para o relógio de parede."
          }
        ],
        "options": [
          "Chef",
          "Pencil",
          "Desk",
          "Clock"
        ],
        "correctAnswer": "Chef",
        "contextSentence": "The chef prepares the meal.",
        "contextSentencePt": "O chef prepara a refeição.",
        "explanation": "Exemplo: \"The chef prepares the meal.\" — O chef prepara a refeição.",
        "phoneticHint": "\"xéf\" • /ʃef/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Police",
        "visualEmoji": "👮",
        "visualOptions": [
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Papel",
            "simplePronunciation": "pêi-per",
            "phonetic": "/ˈpeɪ.pər/",
            "exampleEn": "Write on a sheet of paper.",
            "examplePt": "Escreva em uma folha de papel."
          },
          {
            "text": "Nurse",
            "emoji": "🧑‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeiro(a)",
            "simplePronunciation": "nârs",
            "phonetic": "/nɜːrs/",
            "exampleEn": "The nurse helps the patients.",
            "examplePt": "A enfermeira ajuda os pacientes."
          },
          {
            "text": "Police",
            "emoji": "👮",
            "label": "Police",
            "translationPt": "Policial / Polícia",
            "simplePronunciation": "po-lís",
            "phonetic": "/pəˈliːs/",
            "exampleEn": "The police officer helps the city.",
            "examplePt": "O policial ajuda a cidade."
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno",
            "simplePronunciation": "nôut-búk",
            "phonetic": "/ˈnoʊt.bʊk/",
            "exampleEn": "Take notes in your notebook.",
            "examplePt": "Anote no seu caderno."
          }
        ],
        "options": [
          "Paper",
          "Nurse",
          "Police",
          "Notebook"
        ],
        "correctAnswer": "Police",
        "contextSentence": "The police officer helps the city.",
        "contextSentencePt": "O policial ajuda a cidade.",
        "explanation": "Exemplo: \"The police officer helps the city.\" — O policial ajuda a cidade.",
        "phoneticHint": "\"po-lís\" • /pəˈliːs/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p30",
    "worldId": 0,
    "phaseNumber": 30,
    "themeId": "work",
    "themeTitle": "Tema 6: Trabalho",
    "frequencyLevel": "Módulo 3 • Palavras Intermediárias",
    "title": "Trabalho • Módulo 3: Palavras Intermediárias",
    "subtitle": "Tema: Trabalho (3/4) • 8 equipamentos e ferramentas intermediárias",
    "pedagogicalObjective": "Dominar 8 ferramentas intermediárias de trabalho: Keyboard, Screen, Printer, Scissors, Ruler, Eraser, Envelope e Calculator.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Trabalho — Módulo 3 (Palavras intermediárias): periféricos e utensílios de escritório.",
      "Palavras deste módulo (8): Keyboard (\"kí-bórd\" = Teclado), Screen (\"scrín\" = Tela/Monitor), Printer (\"prín-ter\" = Impressora), Scissors (\"sí-zors\" = Tesoura), Ruler (\"rú-ler\" = Régua), Eraser (\"i-rêi-ser\" = Borracha), Envelope (\"ên-ve-lôup\" = Envelope) e Calculator (\"kél-kiu-lêi-tor\" = Calculadora)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p30-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Keyboard",
        "visualEmoji": "⌨️",
        "visualOptions": [
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha",
            "simplePronunciation": "i-rêi-ser",
            "phonetic": "/ɪˈreɪ.sər/",
            "exampleEn": "Use an eraser to fix it.",
            "examplePt": "Use uma borracha para corrigir."
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua",
            "simplePronunciation": "rú-ler",
            "phonetic": "/ˈruː.lər/",
            "exampleEn": "Measure the line with a ruler.",
            "examplePt": "Meça a linha com uma régua."
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope",
            "simplePronunciation": "ên-ve-lôup",
            "phonetic": "/ˈen.və.loʊp/",
            "exampleEn": "Put the letter in the envelope.",
            "examplePt": "Coloque a carta no envelope."
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado",
            "simplePronunciation": "kí-bórd",
            "phonetic": "/ˈkiː.bɔːrd/",
            "exampleEn": "Type on the computer keyboard.",
            "examplePt": "Digite no teclado do computador."
          }
        ],
        "options": [
          "Eraser",
          "Ruler",
          "Envelope",
          "Keyboard"
        ],
        "correctAnswer": "Keyboard",
        "contextSentence": "Type on the computer keyboard.",
        "contextSentencePt": "Digite no teclado do computador.",
        "explanation": "Exemplo: \"Type on the computer keyboard.\" — Digite no teclado do computador.",
        "phoneticHint": "\"kí-bórd\" • /ˈkiː.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Screen",
        "visualEmoji": "🖥️",
        "visualOptions": [
          {
            "text": "Screen",
            "emoji": "🖥️",
            "label": "Screen",
            "translationPt": "Tela / Monitor",
            "simplePronunciation": "scrín",
            "phonetic": "/skriːn/",
            "exampleEn": "Look at the computer screen.",
            "examplePt": "Olhe para a tela do computador."
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora",
            "simplePronunciation": "kél-kiu-lêi-tor",
            "phonetic": "/ˈkæl.kjə.leɪ.tər/",
            "exampleEn": "Check the numbers on the calculator.",
            "examplePt": "Confira os números na calculadora."
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado",
            "simplePronunciation": "kí-bórd",
            "phonetic": "/ˈkiː.bɔːrd/",
            "exampleEn": "Type on the computer keyboard.",
            "examplePt": "Digite no teclado do computador."
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura",
            "simplePronunciation": "sí-zors",
            "phonetic": "/ˈsɪz.ərz/",
            "exampleEn": "Cut the paper with scissors.",
            "examplePt": "Corte o papel com a tesoura."
          }
        ],
        "options": [
          "Screen",
          "Calculator",
          "Keyboard",
          "Scissors"
        ],
        "correctAnswer": "Screen",
        "contextSentence": "Look at the computer screen.",
        "contextSentencePt": "Olhe para a tela do computador.",
        "explanation": "Exemplo: \"Look at the computer screen.\" — Olhe para a tela do computador.",
        "phoneticHint": "\"scrín\" • /skriːn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Printer",
        "visualEmoji": "🖨️",
        "visualOptions": [
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua",
            "simplePronunciation": "rú-ler",
            "phonetic": "/ˈruː.lər/",
            "exampleEn": "Measure the line with a ruler.",
            "examplePt": "Meça a linha com uma régua."
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora",
            "simplePronunciation": "prín-ter",
            "phonetic": "/ˈprɪn.tər/",
            "exampleEn": "Print the page on the printer.",
            "examplePt": "Imprima a página na impressora."
          },
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha",
            "simplePronunciation": "i-rêi-ser",
            "phonetic": "/ɪˈreɪ.sər/",
            "exampleEn": "Use an eraser to fix it.",
            "examplePt": "Use uma borracha para corrigir."
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope",
            "simplePronunciation": "ên-ve-lôup",
            "phonetic": "/ˈen.və.loʊp/",
            "exampleEn": "Put the letter in the envelope.",
            "examplePt": "Coloque a carta no envelope."
          }
        ],
        "options": [
          "Ruler",
          "Printer",
          "Eraser",
          "Envelope"
        ],
        "correctAnswer": "Printer",
        "contextSentence": "Print the page on the printer.",
        "contextSentencePt": "Imprima a página na impressora.",
        "explanation": "Exemplo: \"Print the page on the printer.\" — Imprima a página na impressora.",
        "phoneticHint": "\"prín-ter\" • /ˈprɪn.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Scissors",
        "visualEmoji": "✂️",
        "visualOptions": [
          {
            "text": "Screen",
            "emoji": "🖥️",
            "label": "Screen",
            "translationPt": "Tela / Monitor",
            "simplePronunciation": "scrín",
            "phonetic": "/skriːn/",
            "exampleEn": "Look at the computer screen.",
            "examplePt": "Olhe para a tela do computador."
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora",
            "simplePronunciation": "kél-kiu-lêi-tor",
            "phonetic": "/ˈkæl.kjə.leɪ.tər/",
            "exampleEn": "Check the numbers on the calculator.",
            "examplePt": "Confira os números na calculadora."
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado",
            "simplePronunciation": "kí-bórd",
            "phonetic": "/ˈkiː.bɔːrd/",
            "exampleEn": "Type on the computer keyboard.",
            "examplePt": "Digite no teclado do computador."
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura",
            "simplePronunciation": "sí-zors",
            "phonetic": "/ˈsɪz.ərz/",
            "exampleEn": "Cut the paper with scissors.",
            "examplePt": "Corte o papel com a tesoura."
          }
        ],
        "options": [
          "Screen",
          "Calculator",
          "Keyboard",
          "Scissors"
        ],
        "correctAnswer": "Scissors",
        "contextSentence": "Cut the paper with scissors.",
        "contextSentencePt": "Corte o papel com a tesoura.",
        "explanation": "Exemplo: \"Cut the paper with scissors.\" — Corte o papel com a tesoura.",
        "phoneticHint": "\"sí-zors\" • /ˈsɪz.ərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ruler",
        "visualEmoji": "📏",
        "visualOptions": [
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora",
            "simplePronunciation": "prín-ter",
            "phonetic": "/ˈprɪn.tər/",
            "exampleEn": "Print the page on the printer.",
            "examplePt": "Imprima a página na impressora."
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura",
            "simplePronunciation": "sí-zors",
            "phonetic": "/ˈsɪz.ərz/",
            "exampleEn": "Cut the paper with scissors.",
            "examplePt": "Corte o papel com a tesoura."
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua",
            "simplePronunciation": "rú-ler",
            "phonetic": "/ˈruː.lər/",
            "exampleEn": "Measure the line with a ruler.",
            "examplePt": "Meça a linha com uma régua."
          },
          {
            "text": "Screen",
            "emoji": "🖥️",
            "label": "Screen",
            "translationPt": "Tela / Monitor",
            "simplePronunciation": "scrín",
            "phonetic": "/skriːn/",
            "exampleEn": "Look at the computer screen.",
            "examplePt": "Olhe para a tela do computador."
          }
        ],
        "options": [
          "Printer",
          "Scissors",
          "Ruler",
          "Screen"
        ],
        "correctAnswer": "Ruler",
        "contextSentence": "Measure the line with a ruler.",
        "contextSentencePt": "Meça a linha com uma régua.",
        "explanation": "Exemplo: \"Measure the line with a ruler.\" — Meça a linha com uma régua.",
        "phoneticHint": "\"rú-ler\" • /ˈruː.lər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Eraser",
        "visualEmoji": "🧽",
        "visualOptions": [
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha",
            "simplePronunciation": "i-rêi-ser",
            "phonetic": "/ɪˈreɪ.sər/",
            "exampleEn": "Use an eraser to fix it.",
            "examplePt": "Use uma borracha para corrigir."
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua",
            "simplePronunciation": "rú-ler",
            "phonetic": "/ˈruː.lər/",
            "exampleEn": "Measure the line with a ruler.",
            "examplePt": "Meça a linha com uma régua."
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora",
            "simplePronunciation": "kél-kiu-lêi-tor",
            "phonetic": "/ˈkæl.kjə.leɪ.tər/",
            "exampleEn": "Check the numbers on the calculator.",
            "examplePt": "Confira os números na calculadora."
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora",
            "simplePronunciation": "prín-ter",
            "phonetic": "/ˈprɪn.tər/",
            "exampleEn": "Print the page on the printer.",
            "examplePt": "Imprima a página na impressora."
          }
        ],
        "options": [
          "Eraser",
          "Ruler",
          "Calculator",
          "Printer"
        ],
        "correctAnswer": "Eraser",
        "contextSentence": "Use an eraser to fix it.",
        "contextSentencePt": "Use uma borracha para corrigir.",
        "explanation": "Exemplo: \"Use an eraser to fix it.\" — Use uma borracha para corrigir.",
        "phoneticHint": "\"i-rêi-ser\" • /ɪˈreɪ.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Envelope",
        "visualEmoji": "✉️",
        "visualOptions": [
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado",
            "simplePronunciation": "kí-bórd",
            "phonetic": "/ˈkiː.bɔːrd/",
            "exampleEn": "Type on the computer keyboard.",
            "examplePt": "Digite no teclado do computador."
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura",
            "simplePronunciation": "sí-zors",
            "phonetic": "/ˈsɪz.ərz/",
            "exampleEn": "Cut the paper with scissors.",
            "examplePt": "Corte o papel com a tesoura."
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope",
            "simplePronunciation": "ên-ve-lôup",
            "phonetic": "/ˈen.və.loʊp/",
            "exampleEn": "Put the letter in the envelope.",
            "examplePt": "Coloque a carta no envelope."
          },
          {
            "text": "Screen",
            "emoji": "🖥️",
            "label": "Screen",
            "translationPt": "Tela / Monitor",
            "simplePronunciation": "scrín",
            "phonetic": "/skriːn/",
            "exampleEn": "Look at the computer screen.",
            "examplePt": "Olhe para a tela do computador."
          }
        ],
        "options": [
          "Keyboard",
          "Scissors",
          "Envelope",
          "Screen"
        ],
        "correctAnswer": "Envelope",
        "contextSentence": "Put the letter in the envelope.",
        "contextSentencePt": "Coloque a carta no envelope.",
        "explanation": "Exemplo: \"Put the letter in the envelope.\" — Coloque a carta no envelope.",
        "phoneticHint": "\"ên-ve-lôup\" • /ˈen.və.loʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Calculator",
        "visualEmoji": "🧮",
        "visualOptions": [
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua",
            "simplePronunciation": "rú-ler",
            "phonetic": "/ˈruː.lər/",
            "exampleEn": "Measure the line with a ruler.",
            "examplePt": "Meça a linha com uma régua."
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora",
            "simplePronunciation": "kél-kiu-lêi-tor",
            "phonetic": "/ˈkæl.kjə.leɪ.tər/",
            "exampleEn": "Check the numbers on the calculator.",
            "examplePt": "Confira os números na calculadora."
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora",
            "simplePronunciation": "prín-ter",
            "phonetic": "/ˈprɪn.tər/",
            "exampleEn": "Print the page on the printer.",
            "examplePt": "Imprima a página na impressora."
          },
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha",
            "simplePronunciation": "i-rêi-ser",
            "phonetic": "/ɪˈreɪ.sər/",
            "exampleEn": "Use an eraser to fix it.",
            "examplePt": "Use uma borracha para corrigir."
          }
        ],
        "options": [
          "Ruler",
          "Calculator",
          "Printer",
          "Eraser"
        ],
        "correctAnswer": "Calculator",
        "contextSentence": "Check the numbers on the calculator.",
        "contextSentencePt": "Confira os números na calculadora.",
        "explanation": "Exemplo: \"Check the numbers on the calculator.\" — Confira os números na calculadora.",
        "phoneticHint": "\"kél-kiu-lêi-tor\" • /ˈkæl.kjə.leɪ.tər/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p31",
    "worldId": 0,
    "phaseNumber": 31,
    "themeId": "work",
    "themeTitle": "Tema 6: Trabalho",
    "frequencyLevel": "Módulo 4 • Menos Comuns ou Específicas",
    "title": "Trabalho • Módulo 4: Menos Comuns",
    "subtitle": "Tema: Trabalho (4/4) • 8 ferramentas e instrumentos específicos",
    "pedagogicalObjective": "Conhecer 8 instrumentos específicos de trabalho e ciência: Folder, Stapler, Calendar, Microscope, Globe, Paintbrush, Hammer e Wrench.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tema: Trabalho — Módulo 4 (Palavras menos comuns ou específicas): ferramentas técnicas e materiais específicos.",
      "Palavras deste módulo (8): Folder (\"fôul-der\" = Pasta de arquivo), Stapler (\"stêi-pler\" = Grampeador), Calendar (\"ké-len-dar\" = Calendário), Microscope (\"mái-cro-scôup\" = Microscópio), Globe (\"glôub\" = Globo terrestre), Paintbrush (\"pêint-brâx\" = Pincel), Hammer (\"ré-mer\" = Martelo) e Wrench (\"rêntch\" = Chave inglesa)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p31-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Folder",
        "visualEmoji": "📁",
        "visualOptions": [
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de documentos",
            "simplePronunciation": "fôul-der",
            "phonetic": "/ˈfoʊl.dər/",
            "exampleEn": "Keep the files inside the folder.",
            "examplePt": "Guarde os documentos na pasta."
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo",
            "simplePronunciation": "ré-mer",
            "phonetic": "/ˈhæm.ər/",
            "exampleEn": "Hit the nail with a hammer.",
            "examplePt": "Bata o prego com o martelo."
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário",
            "simplePronunciation": "ké-len-dar",
            "phonetic": "/ˈkæl.ən.dər/",
            "exampleEn": "Check the date on the calendar.",
            "examplePt": "Veja a data no calendário."
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel",
            "simplePronunciation": "pêint-brâx",
            "phonetic": "/ˈpeɪnt.brʌʃ/",
            "exampleEn": "Paint with a clean paintbrush.",
            "examplePt": "Pinte com um pincel limpo."
          }
        ],
        "options": [
          "Folder",
          "Hammer",
          "Calendar",
          "Paintbrush"
        ],
        "correctAnswer": "Folder",
        "contextSentence": "Keep the files inside the folder.",
        "contextSentencePt": "Guarde os documentos na pasta.",
        "explanation": "Exemplo: \"Keep the files inside the folder.\" — Guarde os documentos na pasta.",
        "phoneticHint": "\"fôul-der\" • /ˈfoʊl.dər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p31-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Stapler",
        "visualEmoji": "📎",
        "visualOptions": [
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre",
            "simplePronunciation": "glôub",
            "phonetic": "/ɡloʊb/",
            "exampleEn": "Find the country on the globe.",
            "examplePt": "Encontre o país no globo terrestre."
          },
          {
            "text": "Stapler",
            "emoji": "📎",
            "label": "Stapler",
            "translationPt": "Grampeador",
            "simplePronunciation": "stêi-pler",
            "phonetic": "/ˈsteɪ.plər/",
            "exampleEn": "Use the stapler on the papers.",
            "examplePt": "Use o grampeador nos papéis."
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio",
            "simplePronunciation": "mái-cro-scôup",
            "phonetic": "/ˈmaɪ.krə.skoʊp/",
            "exampleEn": "Look through the microscope.",
            "examplePt": "Olhe pelo microscópio."
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa",
            "simplePronunciation": "rêntch",
            "phonetic": "/rentʃ/",
            "exampleEn": "Tighten the bolt with a wrench.",
            "examplePt": "Aperte o parafuso com a chave inglesa."
          }
        ],
        "options": [
          "Globe",
          "Stapler",
          "Microscope",
          "Wrench"
        ],
        "correctAnswer": "Stapler",
        "contextSentence": "Use the stapler on the papers.",
        "contextSentencePt": "Use o grampeador nos papéis.",
        "explanation": "Exemplo: \"Use the stapler on the papers.\" — Use o grampeador nos papéis.",
        "phoneticHint": "\"stêi-pler\" • /ˈsteɪ.plər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p31-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Calendar",
        "visualEmoji": "📅",
        "visualOptions": [
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel",
            "simplePronunciation": "pêint-brâx",
            "phonetic": "/ˈpeɪnt.brʌʃ/",
            "exampleEn": "Paint with a clean paintbrush.",
            "examplePt": "Pinte com um pincel limpo."
          },
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de documentos",
            "simplePronunciation": "fôul-der",
            "phonetic": "/ˈfoʊl.dər/",
            "exampleEn": "Keep the files inside the folder.",
            "examplePt": "Guarde os documentos na pasta."
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo",
            "simplePronunciation": "ré-mer",
            "phonetic": "/ˈhæm.ər/",
            "exampleEn": "Hit the nail with a hammer.",
            "examplePt": "Bata o prego com o martelo."
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário",
            "simplePronunciation": "ké-len-dar",
            "phonetic": "/ˈkæl.ən.dər/",
            "exampleEn": "Check the date on the calendar.",
            "examplePt": "Veja a data no calendário."
          }
        ],
        "options": [
          "Paintbrush",
          "Folder",
          "Hammer",
          "Calendar"
        ],
        "correctAnswer": "Calendar",
        "contextSentence": "Check the date on the calendar.",
        "contextSentencePt": "Veja a data no calendário.",
        "explanation": "Exemplo: \"Check the date on the calendar.\" — Veja a data no calendário.",
        "phoneticHint": "\"ké-len-dar\" • /ˈkæl.ən.dər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p31-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Microscope",
        "visualEmoji": "🔬",
        "visualOptions": [
          {
            "text": "Stapler",
            "emoji": "📎",
            "label": "Stapler",
            "translationPt": "Grampeador",
            "simplePronunciation": "stêi-pler",
            "phonetic": "/ˈsteɪ.plər/",
            "exampleEn": "Use the stapler on the papers.",
            "examplePt": "Use o grampeador nos papéis."
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre",
            "simplePronunciation": "glôub",
            "phonetic": "/ɡloʊb/",
            "exampleEn": "Find the country on the globe.",
            "examplePt": "Encontre o país no globo terrestre."
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio",
            "simplePronunciation": "mái-cro-scôup",
            "phonetic": "/ˈmaɪ.krə.skoʊp/",
            "exampleEn": "Look through the microscope.",
            "examplePt": "Olhe pelo microscópio."
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa",
            "simplePronunciation": "rêntch",
            "phonetic": "/rentʃ/",
            "exampleEn": "Tighten the bolt with a wrench.",
            "examplePt": "Aperte o parafuso com a chave inglesa."
          }
        ],
        "options": [
          "Stapler",
          "Globe",
          "Microscope",
          "Wrench"
        ],
        "correctAnswer": "Microscope",
        "contextSentence": "Look through the microscope.",
        "contextSentencePt": "Olhe pelo microscópio.",
        "explanation": "Exemplo: \"Look through the microscope.\" — Olhe pelo microscópio.",
        "phoneticHint": "\"mái-cro-scôup\" • /ˈmaɪ.krə.skoʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p31-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Globe",
        "visualEmoji": "🌍",
        "visualOptions": [
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre",
            "simplePronunciation": "glôub",
            "phonetic": "/ɡloʊb/",
            "exampleEn": "Find the country on the globe.",
            "examplePt": "Encontre o país no globo terrestre."
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo",
            "simplePronunciation": "ré-mer",
            "phonetic": "/ˈhæm.ər/",
            "exampleEn": "Hit the nail with a hammer.",
            "examplePt": "Bata o prego com o martelo."
          },
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de documentos",
            "simplePronunciation": "fôul-der",
            "phonetic": "/ˈfoʊl.dər/",
            "exampleEn": "Keep the files inside the folder.",
            "examplePt": "Guarde os documentos na pasta."
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário",
            "simplePronunciation": "ké-len-dar",
            "phonetic": "/ˈkæl.ən.dər/",
            "exampleEn": "Check the date on the calendar.",
            "examplePt": "Veja a data no calendário."
          }
        ],
        "options": [
          "Globe",
          "Hammer",
          "Folder",
          "Calendar"
        ],
        "correctAnswer": "Globe",
        "contextSentence": "Find the country on the globe.",
        "contextSentencePt": "Encontre o país no globo terrestre.",
        "explanation": "Exemplo: \"Find the country on the globe.\" — Encontre o país no globo terrestre.",
        "phoneticHint": "\"glôub\" • /ɡloʊb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p31-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Paintbrush",
        "visualEmoji": "🖌️",
        "visualOptions": [
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa",
            "simplePronunciation": "rêntch",
            "phonetic": "/rentʃ/",
            "exampleEn": "Tighten the bolt with a wrench.",
            "examplePt": "Aperte o parafuso com a chave inglesa."
          },
          {
            "text": "Stapler",
            "emoji": "📎",
            "label": "Stapler",
            "translationPt": "Grampeador",
            "simplePronunciation": "stêi-pler",
            "phonetic": "/ˈsteɪ.plər/",
            "exampleEn": "Use the stapler on the papers.",
            "examplePt": "Use o grampeador nos papéis."
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel",
            "simplePronunciation": "pêint-brâx",
            "phonetic": "/ˈpeɪnt.brʌʃ/",
            "exampleEn": "Paint with a clean paintbrush.",
            "examplePt": "Pinte com um pincel limpo."
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio",
            "simplePronunciation": "mái-cro-scôup",
            "phonetic": "/ˈmaɪ.krə.skoʊp/",
            "exampleEn": "Look through the microscope.",
            "examplePt": "Olhe pelo microscópio."
          }
        ],
        "options": [
          "Wrench",
          "Stapler",
          "Paintbrush",
          "Microscope"
        ],
        "correctAnswer": "Paintbrush",
        "contextSentence": "Paint with a clean paintbrush.",
        "contextSentencePt": "Pinte com um pincel limpo.",
        "explanation": "Exemplo: \"Paint with a clean paintbrush.\" — Pinte com um pincel limpo.",
        "phoneticHint": "\"pêint-brâx\" • /ˈpeɪnt.brʌʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p31-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hammer",
        "visualEmoji": "🔨",
        "visualOptions": [
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de documentos",
            "simplePronunciation": "fôul-der",
            "phonetic": "/ˈfoʊl.dər/",
            "exampleEn": "Keep the files inside the folder.",
            "examplePt": "Guarde os documentos na pasta."
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo",
            "simplePronunciation": "ré-mer",
            "phonetic": "/ˈhæm.ər/",
            "exampleEn": "Hit the nail with a hammer.",
            "examplePt": "Bata o prego com o martelo."
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre",
            "simplePronunciation": "glôub",
            "phonetic": "/ɡloʊb/",
            "exampleEn": "Find the country on the globe.",
            "examplePt": "Encontre o país no globo terrestre."
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário",
            "simplePronunciation": "ké-len-dar",
            "phonetic": "/ˈkæl.ən.dər/",
            "exampleEn": "Check the date on the calendar.",
            "examplePt": "Veja a data no calendário."
          }
        ],
        "options": [
          "Folder",
          "Hammer",
          "Globe",
          "Calendar"
        ],
        "correctAnswer": "Hammer",
        "contextSentence": "Hit the nail with a hammer.",
        "contextSentencePt": "Bata o prego com o martelo.",
        "explanation": "Exemplo: \"Hit the nail with a hammer.\" — Bata o prego com o martelo.",
        "phoneticHint": "\"ré-mer\" • /ˈhæm.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p31-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wrench",
        "visualEmoji": "🔧",
        "visualOptions": [
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio",
            "simplePronunciation": "mái-cro-scôup",
            "phonetic": "/ˈmaɪ.krə.skoʊp/",
            "exampleEn": "Look through the microscope.",
            "examplePt": "Olhe pelo microscópio."
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel",
            "simplePronunciation": "pêint-brâx",
            "phonetic": "/ˈpeɪnt.brʌʃ/",
            "exampleEn": "Paint with a clean paintbrush.",
            "examplePt": "Pinte com um pincel limpo."
          },
          {
            "text": "Stapler",
            "emoji": "📎",
            "label": "Stapler",
            "translationPt": "Grampeador",
            "simplePronunciation": "stêi-pler",
            "phonetic": "/ˈsteɪ.plər/",
            "exampleEn": "Use the stapler on the papers.",
            "examplePt": "Use o grampeador nos papéis."
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa",
            "simplePronunciation": "rêntch",
            "phonetic": "/rentʃ/",
            "exampleEn": "Tighten the bolt with a wrench.",
            "examplePt": "Aperte o parafuso com a chave inglesa."
          }
        ],
        "options": [
          "Microscope",
          "Paintbrush",
          "Stapler",
          "Wrench"
        ],
        "correctAnswer": "Wrench",
        "contextSentence": "Tighten the bolt with a wrench.",
        "contextSentencePt": "Aperte o parafuso com a chave inglesa.",
        "explanation": "Exemplo: \"Tighten the bolt with a wrench.\" — Aperte o parafuso com a chave inglesa.",
        "phoneticHint": "\"rêntch\" • /rentʃ/",
        "skillCategory": "listening"
      }
    ]
  },
  {
    "id": "w0-p32",
    "worldId": 0,
    "phaseNumber": 32,
    "themeId": "pronouns",
    "themeTitle": "Lição de Pronomes",
    "frequencyLevel": "1 a cada 3 Módulos de Vocabulário",
    "title": "Lição de Pronomes VIII • Aplicando Indefinidos & Relativos",
    "subtitle": "Módulo de Pronomes 8/8 (Após 24 de Vocabulário) • Revisão Final de Pronomes",
    "pedagogicalObjective": "Consolidar o uso de Pronomes Indefinidos (Nobody, Nothing, Anyone, Anything) e Pronomes Relativos (Who, Which, Where, That) em frases completas.",
    "type": "boss",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "8ª Lição Exclusiva de Pronomes (após 24 módulos de vocabulário).",
      "Revisão final conectando frases com Pronomes Indefinidos negativos/interrogativos e Pronomes Relativos."
    ],
    "xpReward": 100,
    "gemsReward": 40,
    "exercises": [
      {
        "id": "w0-p32-pron-1",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos Negativos e em Perguntas (Nobody, Nothing, Anyone, Anything)",
        "conceptHeader": "Para expressar ausência total sem usar a palavra \"not\", empregamos \"Nobody\" (Ninguém) e \"Nothing\" (Nada). Já em frases interrogativas (perguntas), usamos \"Anyone\" (Alguém) para pessoas e \"Anything\" (Alguma coisa) para objetos.",
        "teacherAudioPt": "/audio/teacher/pronoun_7.wav",
        "prompt": "🤝 Conecte cada Pronome Indefinido ao seu uso e significado:",
        "pairs": [
          {
            "id": "w0-p32-b1-ind5",
            "en": "Nobody (\"nôu-bó-di\")",
            "emoji": "🚫",
            "phonetic": "/ˈnoʊ.bɑː.di/",
            "pt": "Ninguém (ausência de pessoas)",
            "tipPt": "Correto! Exemplo: \"Nobody is in the office\" (Ninguém está no escritório)."
          },
          {
            "id": "w0-p32-b1-ind6",
            "en": "Nothing (\"nâ-thing\")",
            "emoji": "⭕",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (ausência de coisas)",
            "tipPt": "Exato! Exemplo: \"There is nothing in the box\" (Não há nada na caixa)."
          },
          {
            "id": "w0-p32-b1-ind7",
            "en": "Anyone? (\"é-ni-uân\")",
            "emoji": "🙋",
            "phonetic": "/ˈen.i.wʌn/",
            "pt": "Alguém? (usado em perguntas para pessoas)",
            "tipPt": "Perfeito! Exemplo: \"Is anyone at home?\" (Tem alguém em casa?)."
          },
          {
            "id": "w0-p32-b1-ind8",
            "en": "Anything? (\"é-ni-thing\")",
            "emoji": "🥤",
            "phonetic": "/ˈen.i.θɪŋ/",
            "pt": "Alguma coisa? (usado em perguntas para coisas)",
            "tipPt": "Muito bem! Exemplo: \"Do you need anything?\" (Você precisa de alguma coisa?)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Nobody (Ninguém), Nothing (Nada), Anyone (Alguém em perguntas), Anything (Alguma coisa em perguntas).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p32-pron-2",
        "type": "pair-match",
        "conceptTitle": "8º • Aplicação de Pronomes Relativos em Frases (Who, Which, Where, That)",
        "conceptHeader": "Revise na prática como os Pronomes Relativos conectam as ideias na frase: \"who\" após pessoas (the teacher who...), \"which\" após objetos (the key which...), \"where\" após lugares (the house where...) e \"that\" como forma geral.",
        "teacherAudioPt": "/audio/teacher/pronoun_8.wav",
        "prompt": "🤝 Associe cada frase com Pronome Relativo ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p32-b2-rel5",
            "en": "The teacher who teaches",
            "emoji": "👩‍🏫",
            "phonetic": "/ðə ˈtiː.tʃər huː ˈtiː.tʃɪz/",
            "pt": "A professora que ensina (pessoa = who)",
            "tipPt": "Correto! Para pessoas usamos o relativo \"who\"."
          },
          {
            "id": "w0-p32-b2-rel6",
            "en": "The key which opens",
            "emoji": "🔑",
            "phonetic": "/ðə kiː wɪtʃ ˈoʊ.pənz/",
            "pt": "A chave que abre (objeto = which)",
            "tipPt": "Muito bem! Para objetos usamos o relativo \"which\"."
          },
          {
            "id": "w0-p32-b2-rel7",
            "en": "The house where I live",
            "emoji": "🏠",
            "phonetic": "/ðə haʊs wer aɪ lɪv/",
            "pt": "A casa onde eu moro (lugar = where)",
            "tipPt": "Perfeito! Para lugares usamos o relativo \"where\"."
          },
          {
            "id": "w0-p32-b2-rel8",
            "en": "The car that is red",
            "emoji": "🚗",
            "phonetic": "/ðə kɑːr ðæt ɪz red/",
            "pt": "O carro que é vermelho (geral = that)",
            "tipPt": "Excelente! Você concluiu todos os 8 módulos de Pronomes."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "The teacher who teaches (A professora que ensina), The key which opens (A chave que abre), The house where I live (A casa onde eu moro), The car that is red (O carro que é vermelho).",
        "skillCategory": "grammar"
      }
    ]
  }
];
