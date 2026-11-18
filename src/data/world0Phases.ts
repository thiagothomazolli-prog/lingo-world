import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = [
  {
    "id": "w0-p1",
    "worldId": 0,
    "phaseNumber": 1,
    "themeId": "home",
    "themeTitle": "A Casa",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "vocabItems": [
      {
        "word": "Door",
        "pt": "Porta",
        "simplePronunciation": "dór",
        "phonetic": "/dɔːr/",
        "exampleEn": "Please close the door.",
        "examplePt": "Por favor, feche a porta.",
        "emoji": "🚪"
      },
      {
        "word": "Window",
        "pt": "Janela",
        "simplePronunciation": "uín-dou",
        "phonetic": "/ˈwɪn.doʊ/",
        "exampleEn": "Open the window, please.",
        "examplePt": "Abra a janela, por favor.",
        "emoji": "🪟"
      },
      {
        "word": "Room",
        "pt": "Quarto / Cômodo",
        "simplePronunciation": "rúm",
        "phonetic": "/ruːm/",
        "exampleEn": "This room is very clean.",
        "examplePt": "Este cômodo está muito limpo.",
        "emoji": "🏠"
      },
      {
        "word": "Floor",
        "pt": "Chão / Piso",
        "simplePronunciation": "flór",
        "phonetic": "/flɔːr/",
        "exampleEn": "The floor is clean.",
        "examplePt": "O chão está limpo.",
        "emoji": "🟫"
      },
      {
        "word": "Kitchen",
        "pt": "Cozinha",
        "simplePronunciation": "kít-chen",
        "phonetic": "/ˈkɪtʃ.ən/",
        "exampleEn": "Mom is in the kitchen.",
        "examplePt": "A mamãe está na cozinha.",
        "emoji": "🍳"
      },
      {
        "word": "Bedroom",
        "pt": "Quarto de dormir",
        "simplePronunciation": "béd-rum",
        "phonetic": "/ˈbed.ruːm/",
        "exampleEn": "I sleep in my bedroom.",
        "examplePt": "Eu durmo no meu quarto.",
        "emoji": "🛏️"
      },
      {
        "word": "House",
        "pt": "Casa",
        "simplePronunciation": "ráus",
        "phonetic": "/haʊs/",
        "exampleEn": "Welcome to my house.",
        "examplePt": "Bem-vindo à minha casa.",
        "emoji": "🏡"
      },
      {
        "word": "Key",
        "pt": "Chave",
        "simplePronunciation": "kí",
        "phonetic": "/kiː/",
        "exampleEn": "Where is the house key?",
        "examplePt": "Onde está a chave de casa?",
        "emoji": "🔑"
      },
      {
        "word": "Table",
        "pt": "Mesa",
        "simplePronunciation": "têi-bol",
        "phonetic": "/ˈteɪ.bəl/",
        "exampleEn": "The food is on the table.",
        "examplePt": "A comida está na mesa.",
        "emoji": "🪑"
      },
      {
        "word": "Chair",
        "pt": "Cadeira",
        "simplePronunciation": "tchér",
        "phonetic": "/tʃer/",
        "exampleEn": "Sit on this chair.",
        "examplePt": "Sente-se nesta cadeira.",
        "emoji": "🪑"
      },
      {
        "word": "Light",
        "pt": "Luz",
        "simplePronunciation": "láit",
        "phonetic": "/laɪt/",
        "exampleEn": "Turn on the light.",
        "examplePt": "Acenda a luz.",
        "emoji": "💡"
      },
      {
        "word": "Water",
        "pt": "Água",
        "simplePronunciation": "uó-ter",
        "phonetic": "/ˈwɔː.tər/",
        "exampleEn": "I drink cold water.",
        "examplePt": "Eu bebo água gelada.",
        "emoji": "💧"
      }
    ],
    "title": "A Casa • Módulo 1: Palavras Essenciais",
    "subtitle": "Nível 1/4 • As 12 palavras mais usadas no dia a dia dentro de casa",
    "pedagogicalObjective": "Aprender as 12 palavras mais essenciais e frequentes sobre a casa com flashcards, pronúncia simplificada e 4 tipos de exercícios.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "A Casa — Módulo 1 • Essenciais: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p1-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair (\"tchér\")",
            "translationPt": "Cadeira"
          },
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom (\"béd-rum\")",
            "translationPt": "Quarto de dormir"
          },
          {
            "text": "Light",
            "emoji": "💡",
            "label": "Light (\"láit\")",
            "translationPt": "Luz"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door (\"dór\")",
            "translationPt": "Porta"
          }
        ],
        "options": [
          "Chair",
          "Bedroom",
          "Light",
          "Door"
        ],
        "correctAnswer": "Door",
        "explanation": "Door (\"dór\") = Porta. Exemplo: \"Please close the door.\" (Por favor, feche a porta.)",
        "phoneticHint": "\"dór\" /dɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Window",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom (\"béd-rum\")",
            "translationPt": "Quarto de dormir"
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen (\"kít-chen\")",
            "translationPt": "Cozinha"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window (\"uín-dou\")",
            "translationPt": "Janela"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water (\"uó-ter\")",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Bedroom",
          "Kitchen",
          "Window",
          "Water"
        ],
        "correctAnswer": "Window",
        "explanation": "Window (\"uín-dou\") = Janela. Exemplo: \"Open the window, please.\" (Abra a janela, por favor.)",
        "phoneticHint": "\"uín-dou\" /ˈwɪn.doʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Room",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room (\"rúm\")",
            "translationPt": "Quarto / Cômodo"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table (\"têi-bol\")",
            "translationPt": "Mesa"
          },
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom (\"béd-rum\")",
            "translationPt": "Quarto de dormir"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door (\"dór\")",
            "translationPt": "Porta"
          }
        ],
        "options": [
          "Room",
          "Table",
          "Bedroom",
          "Door"
        ],
        "correctAnswer": "Room",
        "explanation": "Room (\"rúm\") = Quarto / Cômodo. Exemplo: \"This room is very clean.\" (Este cômodo está muito limpo.)",
        "phoneticHint": "\"rúm\" /ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Floor",
        "visualEmoji": "🟫",
        "visualOptions": [
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen (\"kít-chen\")",
            "translationPt": "Cozinha"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window (\"uín-dou\")",
            "translationPt": "Janela"
          },
          {
            "text": "Floor",
            "emoji": "🟫",
            "label": "Floor (\"flór\")",
            "translationPt": "Chão / Piso"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door (\"dór\")",
            "translationPt": "Porta"
          }
        ],
        "options": [
          "Kitchen",
          "Window",
          "Floor",
          "Door"
        ],
        "correctAnswer": "Floor",
        "explanation": "Floor (\"flór\") = Chão / Piso. Exemplo: \"The floor is clean.\" (O chão está limpo.)",
        "phoneticHint": "\"flór\" /flɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Kitchen",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Light",
            "emoji": "💡",
            "label": "Light (\"láit\")",
            "translationPt": "Luz"
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen (\"kít-chen\")",
            "translationPt": "Cozinha"
          },
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room (\"rúm\")",
            "translationPt": "Quarto / Cômodo"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key (\"kí\")",
            "translationPt": "Chave"
          }
        ],
        "options": [
          "Light",
          "Kitchen",
          "Room",
          "Key"
        ],
        "correctAnswer": "Kitchen",
        "explanation": "Kitchen (\"kít-chen\") = Cozinha. Exemplo: \"Mom is in the kitchen.\" (A mamãe está na cozinha.)",
        "phoneticHint": "\"kít-chen\" /ˈkɪtʃ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bedroom",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table (\"têi-bol\")",
            "translationPt": "Mesa"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door (\"dór\")",
            "translationPt": "Porta"
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen (\"kít-chen\")",
            "translationPt": "Cozinha"
          },
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom (\"béd-rum\")",
            "translationPt": "Quarto de dormir"
          }
        ],
        "options": [
          "Table",
          "Door",
          "Kitchen",
          "Bedroom"
        ],
        "correctAnswer": "Bedroom",
        "explanation": "Bedroom (\"béd-rum\") = Quarto de dormir. Exemplo: \"I sleep in my bedroom.\" (Eu durmo no meu quarto.)",
        "phoneticHint": "\"béd-rum\" /ˈbed.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "House",
        "visualEmoji": "🏡",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏡",
            "label": "House (\"ráus\")",
            "translationPt": "Casa"
          },
          {
            "text": "Light",
            "emoji": "💡",
            "label": "Light (\"láit\")",
            "translationPt": "Luz"
          },
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room (\"rúm\")",
            "translationPt": "Quarto / Cômodo"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table (\"têi-bol\")",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "House",
          "Light",
          "Room",
          "Table"
        ],
        "correctAnswer": "House",
        "explanation": "House (\"ráus\") = Casa. Exemplo: \"Welcome to my house.\" (Bem-vindo à minha casa.)",
        "phoneticHint": "\"ráus\" /haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Key",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Floor",
            "emoji": "🟫",
            "label": "Floor (\"flór\")",
            "translationPt": "Chão / Piso"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window (\"uín-dou\")",
            "translationPt": "Janela"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair (\"tchér\")",
            "translationPt": "Cadeira"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key (\"kí\")",
            "translationPt": "Chave"
          }
        ],
        "options": [
          "Floor",
          "Window",
          "Chair",
          "Key"
        ],
        "correctAnswer": "Key",
        "explanation": "Key (\"kí\") = Chave. Exemplo: \"Where is the house key?\" (Onde está a chave de casa?)",
        "phoneticHint": "\"kí\" /kiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Table",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom (\"béd-rum\")",
            "translationPt": "Quarto de dormir"
          },
          {
            "text": "Kitchen",
            "emoji": "🍳",
            "label": "Kitchen (\"kít-chen\")",
            "translationPt": "Cozinha"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table (\"têi-bol\")",
            "translationPt": "Mesa"
          },
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room (\"rúm\")",
            "translationPt": "Quarto / Cômodo"
          }
        ],
        "options": [
          "Bedroom",
          "Kitchen",
          "Table",
          "Room"
        ],
        "correctAnswer": "Table",
        "explanation": "Table (\"têi-bol\") = Mesa. Exemplo: \"The food is on the table.\" (A comida está na mesa.)",
        "phoneticHint": "\"têi-bol\" /ˈteɪ.bəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Chair",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair (\"tchér\")",
            "translationPt": "Cadeira"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water (\"uó-ter\")",
            "translationPt": "Água"
          },
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room (\"rúm\")",
            "translationPt": "Quarto / Cômodo"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key (\"kí\")",
            "translationPt": "Chave"
          }
        ],
        "options": [
          "Chair",
          "Water",
          "Room",
          "Key"
        ],
        "correctAnswer": "Chair",
        "explanation": "Chair (\"tchér\") = Cadeira. Exemplo: \"Sit on this chair.\" (Sente-se nesta cadeira.)",
        "phoneticHint": "\"tchér\" /tʃer/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Light",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Room",
            "emoji": "🏠",
            "label": "Room (\"rúm\")",
            "translationPt": "Quarto / Cômodo"
          },
          {
            "text": "Light",
            "emoji": "💡",
            "label": "Light (\"láit\")",
            "translationPt": "Luz"
          },
          {
            "text": "Floor",
            "emoji": "🟫",
            "label": "Floor (\"flór\")",
            "translationPt": "Chão / Piso"
          },
          {
            "text": "Bedroom",
            "emoji": "🛏️",
            "label": "Bedroom (\"béd-rum\")",
            "translationPt": "Quarto de dormir"
          }
        ],
        "options": [
          "Room",
          "Light",
          "Floor",
          "Bedroom"
        ],
        "correctAnswer": "Light",
        "explanation": "Light (\"láit\") = Luz. Exemplo: \"Turn on the light.\" (Acenda a luz.)",
        "phoneticHint": "\"láit\" /laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair (\"tchér\")",
            "translationPt": "Cadeira"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water (\"uó-ter\")",
            "translationPt": "Água"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key (\"kí\")",
            "translationPt": "Chave"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window (\"uín-dou\")",
            "translationPt": "Janela"
          }
        ],
        "options": [
          "Chair",
          "Water",
          "Key",
          "Window"
        ],
        "correctAnswer": "Water",
        "explanation": "Water (\"uó-ter\") = Água. Exemplo: \"I drink cold water.\" (Eu bebo água gelada.)",
        "phoneticHint": "\"uó-ter\" /ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Window",
        "contextSentencePt": "Pronúncia simplificada: \"uín-dou\"",
        "options": [
          "Window — Janela",
          "Floor — Chão / Piso",
          "Water — Água",
          "House — Casa"
        ],
        "correctAnswer": "Window — Janela",
        "explanation": "Você ouviu \"Window\" (\"uín-dou\") = Janela. Frase: \"Open the window, please.\" (Abra a janela, por favor.)",
        "phoneticHint": "\"uín-dou\" /ˈwɪn.doʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Bedroom",
        "contextSentencePt": "Pronúncia simplificada: \"béd-rum\"",
        "options": [
          "Window — Janela",
          "Floor — Chão / Piso",
          "Bedroom — Quarto de dormir",
          "Water — Água"
        ],
        "correctAnswer": "Bedroom — Quarto de dormir",
        "explanation": "Você ouviu \"Bedroom\" (\"béd-rum\") = Quarto de dormir. Frase: \"I sleep in my bedroom.\" (Eu durmo no meu quarto.)",
        "phoneticHint": "\"béd-rum\" /ˈbed.ruːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Chair",
        "contextSentencePt": "Pronúncia simplificada: \"tchér\"",
        "options": [
          "Light — Luz",
          "Chair — Cadeira",
          "Key — Chave",
          "Table — Mesa"
        ],
        "correctAnswer": "Chair — Cadeira",
        "explanation": "Você ouviu \"Chair\" (\"tchér\") = Cadeira. Frase: \"Sit on this chair.\" (Sente-se nesta cadeira.)",
        "phoneticHint": "\"tchér\" /tʃer/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🏠",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Room\" (pronúncia: \"rúm\")?",
        "audioPhrase": "Room",
        "contextSentence": "This room is very clean.",
        "contextSentencePt": "Este cômodo está muito limpo.",
        "options": [
          "Luz",
          "Casa",
          "Chão / Piso",
          "Quarto / Cômodo"
        ],
        "correctAnswer": "Quarto / Cômodo",
        "explanation": "\"Room\" (\"rúm\") significa \"Quarto / Cômodo\".",
        "phoneticHint": "\"rúm\" /ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🏡",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"House\" (pronúncia: \"ráus\")?",
        "audioPhrase": "House",
        "contextSentence": "Welcome to my house.",
        "contextSentencePt": "Bem-vindo à minha casa.",
        "options": [
          "Casa",
          "Chão / Piso",
          "Janela",
          "Cadeira"
        ],
        "correctAnswer": "Casa",
        "explanation": "\"House\" (\"ráus\") significa \"Casa\".",
        "phoneticHint": "\"ráus\" /haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "💡",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Light\" (pronúncia: \"láit\")?",
        "audioPhrase": "Light",
        "contextSentence": "Turn on the light.",
        "contextSentencePt": "Acenda a luz.",
        "options": [
          "Chão / Piso",
          "Chave",
          "Mesa",
          "Luz"
        ],
        "correctAnswer": "Luz",
        "explanation": "\"Light\" (\"láit\") significa \"Luz\".",
        "phoneticHint": "\"láit\" /laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🟫",
        "prompt": "✍️ Complete a frase em inglês (\"O chão está limpo.\"):",
        "contextSentence": "The ______ is clean.",
        "contextSentencePt": "Tradução: \"O chão está limpo.\"",
        "audioPhrase": "The floor is clean.",
        "options": [
          "Table",
          "Light",
          "Floor",
          "Kitchen"
        ],
        "correctAnswer": "Floor",
        "explanation": "Frase completa: \"The floor is clean.\" (O chão está limpo.) — Floor (\"flór\") = Chão / Piso.",
        "phoneticHint": "\"flór\" /flɔːr/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p1-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🔑",
        "prompt": "✍️ Complete a frase em inglês (\"Onde está a chave de casa?\"):",
        "contextSentence": "Where is the house ______?",
        "contextSentencePt": "Tradução: \"Onde está a chave de casa?\"",
        "audioPhrase": "Where is the house key?",
        "options": [
          "Key",
          "Kitchen",
          "Floor",
          "Window"
        ],
        "correctAnswer": "Key",
        "explanation": "Frase completa: \"Where is the house key?\" (Onde está a chave de casa?) — Key (\"kí\") = Chave.",
        "phoneticHint": "\"kí\" /kiː/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p1-fill-3",
        "type": "fill-blank",
        "visualEmoji": "💧",
        "prompt": "✍️ Complete a frase em inglês (\"Eu bebo água gelada.\"):",
        "contextSentence": "I drink cold ______.",
        "contextSentencePt": "Tradução: \"Eu bebo água gelada.\"",
        "audioPhrase": "I drink cold water.",
        "options": [
          "Window",
          "Water",
          "House",
          "Kitchen"
        ],
        "correctAnswer": "Water",
        "explanation": "Frase completa: \"I drink cold water.\" (Eu bebo água gelada.) — Water (\"uó-ter\") = Água.",
        "phoneticHint": "\"uó-ter\" /ˈwɔː.tər/",
        "skillCategory": "reading"
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
    "vocabItems": [
      {
        "word": "Roof",
        "pt": "Telhado",
        "simplePronunciation": "rúf",
        "phonetic": "/ruːf/",
        "exampleEn": "The roof protects the house.",
        "examplePt": "O telhado protege a casa.",
        "emoji": "🏠"
      },
      {
        "word": "Wall",
        "pt": "Parede / Muro",
        "simplePronunciation": "uól",
        "phonetic": "/wɔːl/",
        "exampleEn": "The wall is painted white.",
        "examplePt": "A parede está pintada de branco.",
        "emoji": "🧱"
      },
      {
        "word": "Bathroom",
        "pt": "Banheiro",
        "simplePronunciation": "béth-rum",
        "phonetic": "/ˈbæθ.ruːm/",
        "exampleEn": "Wash your hands in the bathroom.",
        "examplePt": "Lave as mãos no banheiro.",
        "emoji": "🚿"
      },
      {
        "word": "Living room",
        "pt": "Sala de estar",
        "simplePronunciation": "lí-ving rúm",
        "phonetic": "/ˈlɪv.ɪŋ ruːm/",
        "exampleEn": "We watch TV in the living room.",
        "examplePt": "Nós assistimos TV na sala de estar.",
        "emoji": "🛋️"
      },
      {
        "word": "Bed",
        "pt": "Cama",
        "simplePronunciation": "béd",
        "phonetic": "/bed/",
        "exampleEn": "My bed is very comfortable.",
        "examplePt": "Minha cama é muito confortável.",
        "emoji": "🛏️"
      },
      {
        "word": "Sofa",
        "pt": "Sofá",
        "simplePronunciation": "sôu-fa",
        "phonetic": "/ˈsoʊ.fə/",
        "exampleEn": "Sit on the living room sofa.",
        "examplePt": "Sente-se no sofá da sala.",
        "emoji": "🛋️"
      },
      {
        "word": "Fridge",
        "pt": "Geladeira",
        "simplePronunciation": "frídj",
        "phonetic": "/frɪdʒ/",
        "exampleEn": "The milk is in the fridge.",
        "examplePt": "O leite está na geladeira.",
        "emoji": "🧊"
      },
      {
        "word": "Stove",
        "pt": "Fogão",
        "simplePronunciation": "stôuv",
        "phonetic": "/stoʊv/",
        "exampleEn": "She cooks dinner on the stove.",
        "examplePt": "Ela faz o jantar no fogão.",
        "emoji": "🔥"
      },
      {
        "word": "Sink",
        "pt": "Pia",
        "simplePronunciation": "sínk",
        "phonetic": "/sɪŋk/",
        "exampleEn": "Put the cup in the sink.",
        "examplePt": "Coloque a xícara na pia.",
        "emoji": "🚰"
      },
      {
        "word": "Mirror",
        "pt": "Espelho",
        "simplePronunciation": "mí-ror",
        "phonetic": "/ˈmɪr.ər/",
        "exampleEn": "Look in the mirror.",
        "examplePt": "Olhe no espelho.",
        "emoji": "🪞"
      },
      {
        "word": "Lamp",
        "pt": "Abajur / Luminária",
        "simplePronunciation": "lémp",
        "phonetic": "/læmp/",
        "exampleEn": "Turn on the bedside lamp.",
        "examplePt": "Ligue o abajur.",
        "emoji": "💡"
      },
      {
        "word": "Shower",
        "pt": "Chuveiro",
        "simplePronunciation": "xáu-er",
        "phonetic": "/ˈʃaʊ.ər/",
        "exampleEn": "I take a warm shower.",
        "examplePt": "Eu tomo um banho morno de chuveiro.",
        "emoji": "🚿"
      }
    ],
    "title": "A Casa • Módulo 2: Palavras Comuns",
    "subtitle": "Nível 2/4 • 12 palavras comuns da estrutura e móveis da casa",
    "pedagogicalObjective": "Dominar partes comuns da casa e móveis presentes na rotina diária.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "A Casa — Módulo 2 • Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p2-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Roof",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp (\"lémp\")",
            "translationPt": "Abajur / Luminária"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa (\"sôu-fa\")",
            "translationPt": "Sofá"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof (\"rúf\")",
            "translationPt": "Telhado"
          },
          {
            "text": "Sink",
            "emoji": "🚰",
            "label": "Sink (\"sínk\")",
            "translationPt": "Pia"
          }
        ],
        "options": [
          "Lamp",
          "Sofa",
          "Roof",
          "Sink"
        ],
        "correctAnswer": "Roof",
        "explanation": "Roof (\"rúf\") = Telhado. Exemplo: \"The roof protects the house.\" (O telhado protege a casa.)",
        "phoneticHint": "\"rúf\" /ruːf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Wall",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall (\"uól\")",
            "translationPt": "Parede / Muro"
          },
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom (\"béth-rum\")",
            "translationPt": "Banheiro"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed (\"béd\")",
            "translationPt": "Cama"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower (\"xáu-er\")",
            "translationPt": "Chuveiro"
          }
        ],
        "options": [
          "Wall",
          "Bathroom",
          "Bed",
          "Shower"
        ],
        "correctAnswer": "Wall",
        "explanation": "Wall (\"uól\") = Parede / Muro. Exemplo: \"The wall is painted white.\" (A parede está pintada de branco.)",
        "phoneticHint": "\"uól\" /wɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bathroom",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof (\"rúf\")",
            "translationPt": "Telhado"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa (\"sôu-fa\")",
            "translationPt": "Sofá"
          },
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom (\"béth-rum\")",
            "translationPt": "Banheiro"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror (\"mí-ror\")",
            "translationPt": "Espelho"
          }
        ],
        "options": [
          "Roof",
          "Sofa",
          "Bathroom",
          "Mirror"
        ],
        "correctAnswer": "Bathroom",
        "explanation": "Bathroom (\"béth-rum\") = Banheiro. Exemplo: \"Wash your hands in the bathroom.\" (Lave as mãos no banheiro.)",
        "phoneticHint": "\"béth-rum\" /ˈbæθ.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Living room",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof (\"rúf\")",
            "translationPt": "Telhado"
          },
          {
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room (\"lí-ving rúm\")",
            "translationPt": "Sala de estar"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp (\"lémp\")",
            "translationPt": "Abajur / Luminária"
          },
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall (\"uól\")",
            "translationPt": "Parede / Muro"
          }
        ],
        "options": [
          "Roof",
          "Living room",
          "Lamp",
          "Wall"
        ],
        "correctAnswer": "Living room",
        "explanation": "Living room (\"lí-ving rúm\") = Sala de estar. Exemplo: \"We watch TV in the living room.\" (Nós assistimos TV na sala de estar.)",
        "phoneticHint": "\"lí-ving rúm\" /ˈlɪv.ɪŋ ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower (\"xáu-er\")",
            "translationPt": "Chuveiro"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge (\"frídj\")",
            "translationPt": "Geladeira"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp (\"lémp\")",
            "translationPt": "Abajur / Luminária"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed (\"béd\")",
            "translationPt": "Cama"
          }
        ],
        "options": [
          "Shower",
          "Fridge",
          "Lamp",
          "Bed"
        ],
        "correctAnswer": "Bed",
        "explanation": "Bed (\"béd\") = Cama. Exemplo: \"My bed is very comfortable.\" (Minha cama é muito confortável.)",
        "phoneticHint": "\"béd\" /bed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sofa",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa (\"sôu-fa\")",
            "translationPt": "Sofá"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp (\"lémp\")",
            "translationPt": "Abajur / Luminária"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror (\"mí-ror\")",
            "translationPt": "Espelho"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed (\"béd\")",
            "translationPt": "Cama"
          }
        ],
        "options": [
          "Sofa",
          "Lamp",
          "Mirror",
          "Bed"
        ],
        "correctAnswer": "Sofa",
        "explanation": "Sofa (\"sôu-fa\") = Sofá. Exemplo: \"Sit on the living room sofa.\" (Sente-se no sofá da sala.)",
        "phoneticHint": "\"sôu-fa\" /ˈsoʊ.fə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Fridge",
        "visualEmoji": "🧊",
        "visualOptions": [
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa (\"sôu-fa\")",
            "translationPt": "Sofá"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed (\"béd\")",
            "translationPt": "Cama"
          },
          {
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room (\"lí-ving rúm\")",
            "translationPt": "Sala de estar"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge (\"frídj\")",
            "translationPt": "Geladeira"
          }
        ],
        "options": [
          "Sofa",
          "Bed",
          "Living room",
          "Fridge"
        ],
        "correctAnswer": "Fridge",
        "explanation": "Fridge (\"frídj\") = Geladeira. Exemplo: \"The milk is in the fridge.\" (O leite está na geladeira.)",
        "phoneticHint": "\"frídj\" /frɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Stove",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom (\"béth-rum\")",
            "translationPt": "Banheiro"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa (\"sôu-fa\")",
            "translationPt": "Sofá"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove (\"stôuv\")",
            "translationPt": "Fogão"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower (\"xáu-er\")",
            "translationPt": "Chuveiro"
          }
        ],
        "options": [
          "Bathroom",
          "Sofa",
          "Stove",
          "Shower"
        ],
        "correctAnswer": "Stove",
        "explanation": "Stove (\"stôuv\") = Fogão. Exemplo: \"She cooks dinner on the stove.\" (Ela faz o jantar no fogão.)",
        "phoneticHint": "\"stôuv\" /stoʊv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sink",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Sink",
            "emoji": "🚰",
            "label": "Sink (\"sínk\")",
            "translationPt": "Pia"
          },
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom (\"béth-rum\")",
            "translationPt": "Banheiro"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove (\"stôuv\")",
            "translationPt": "Fogão"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa (\"sôu-fa\")",
            "translationPt": "Sofá"
          }
        ],
        "options": [
          "Sink",
          "Bathroom",
          "Stove",
          "Sofa"
        ],
        "correctAnswer": "Sink",
        "explanation": "Sink (\"sínk\") = Pia. Exemplo: \"Put the cup in the sink.\" (Coloque a xícara na pia.)",
        "phoneticHint": "\"sínk\" /sɪŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
        "visualOptions": [
          {
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room (\"lí-ving rúm\")",
            "translationPt": "Sala de estar"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror (\"mí-ror\")",
            "translationPt": "Espelho"
          },
          {
            "text": "Bathroom",
            "emoji": "🚿",
            "label": "Bathroom (\"béth-rum\")",
            "translationPt": "Banheiro"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof (\"rúf\")",
            "translationPt": "Telhado"
          }
        ],
        "options": [
          "Living room",
          "Mirror",
          "Bathroom",
          "Roof"
        ],
        "correctAnswer": "Mirror",
        "explanation": "Mirror (\"mí-ror\") = Espelho. Exemplo: \"Look in the mirror.\" (Olhe no espelho.)",
        "phoneticHint": "\"mí-ror\" /ˈmɪr.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa (\"sôu-fa\")",
            "translationPt": "Sofá"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp (\"lémp\")",
            "translationPt": "Abajur / Luminária"
          },
          {
            "text": "Living room",
            "emoji": "🛋️",
            "label": "Living room (\"lí-ving rúm\")",
            "translationPt": "Sala de estar"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove (\"stôuv\")",
            "translationPt": "Fogão"
          }
        ],
        "options": [
          "Sofa",
          "Lamp",
          "Living room",
          "Stove"
        ],
        "correctAnswer": "Lamp",
        "explanation": "Lamp (\"lémp\") = Abajur / Luminária. Exemplo: \"Turn on the bedside lamp.\" (Ligue o abajur.)",
        "phoneticHint": "\"lémp\" /læmp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Shower",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed (\"béd\")",
            "translationPt": "Cama"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove (\"stôuv\")",
            "translationPt": "Fogão"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa (\"sôu-fa\")",
            "translationPt": "Sofá"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower (\"xáu-er\")",
            "translationPt": "Chuveiro"
          }
        ],
        "options": [
          "Bed",
          "Stove",
          "Sofa",
          "Shower"
        ],
        "correctAnswer": "Shower",
        "explanation": "Shower (\"xáu-er\") = Chuveiro. Exemplo: \"I take a warm shower.\" (Eu tomo um banho morno de chuveiro.)",
        "phoneticHint": "\"xáu-er\" /ˈʃaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Wall",
        "contextSentencePt": "Pronúncia simplificada: \"uól\"",
        "options": [
          "Bed — Cama",
          "Sink — Pia",
          "Wall — Parede / Muro",
          "Shower — Chuveiro"
        ],
        "correctAnswer": "Wall — Parede / Muro",
        "explanation": "Você ouviu \"Wall\" (\"uól\") = Parede / Muro. Frase: \"The wall is painted white.\" (A parede está pintada de branco.)",
        "phoneticHint": "\"uól\" /wɔːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Sofa",
        "contextSentencePt": "Pronúncia simplificada: \"sôu-fa\"",
        "options": [
          "Wall — Parede / Muro",
          "Sofa — Sofá",
          "Shower — Chuveiro",
          "Bathroom — Banheiro"
        ],
        "correctAnswer": "Sofa — Sofá",
        "explanation": "Você ouviu \"Sofa\" (\"sôu-fa\") = Sofá. Frase: \"Sit on the living room sofa.\" (Sente-se no sofá da sala.)",
        "phoneticHint": "\"sôu-fa\" /ˈsoʊ.fə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Mirror",
        "contextSentencePt": "Pronúncia simplificada: \"mí-ror\"",
        "options": [
          "Sofa — Sofá",
          "Wall — Parede / Muro",
          "Lamp — Abajur / Luminária",
          "Mirror — Espelho"
        ],
        "correctAnswer": "Mirror — Espelho",
        "explanation": "Você ouviu \"Mirror\" (\"mí-ror\") = Espelho. Frase: \"Look in the mirror.\" (Olhe no espelho.)",
        "phoneticHint": "\"mí-ror\" /ˈmɪr.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🚿",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Bathroom\" (pronúncia: \"béth-rum\")?",
        "audioPhrase": "Bathroom",
        "contextSentence": "Wash your hands in the bathroom.",
        "contextSentencePt": "Lave as mãos no banheiro.",
        "options": [
          "Banheiro",
          "Cama",
          "Sofá",
          "Abajur / Luminária"
        ],
        "correctAnswer": "Banheiro",
        "explanation": "\"Bathroom\" (\"béth-rum\") significa \"Banheiro\".",
        "phoneticHint": "\"béth-rum\" /ˈbæθ.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🧊",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Fridge\" (pronúncia: \"frídj\")?",
        "audioPhrase": "Fridge",
        "contextSentence": "The milk is in the fridge.",
        "contextSentencePt": "O leite está na geladeira.",
        "options": [
          "Abajur / Luminária",
          "Parede / Muro",
          "Cama",
          "Geladeira"
        ],
        "correctAnswer": "Geladeira",
        "explanation": "\"Fridge\" (\"frídj\") significa \"Geladeira\".",
        "phoneticHint": "\"frídj\" /frɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "💡",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Lamp\" (pronúncia: \"lémp\")?",
        "audioPhrase": "Lamp",
        "contextSentence": "Turn on the bedside lamp.",
        "contextSentencePt": "Ligue o abajur.",
        "options": [
          "Espelho",
          "Geladeira",
          "Abajur / Luminária",
          "Pia"
        ],
        "correctAnswer": "Abajur / Luminária",
        "explanation": "\"Lamp\" (\"lémp\") significa \"Abajur / Luminária\".",
        "phoneticHint": "\"lémp\" /læmp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🛋️",
        "prompt": "✍️ Complete a frase em inglês (\"Nós assistimos TV na sala de estar.\"):",
        "contextSentence": "We watch TV in the ______.",
        "contextSentencePt": "Tradução: \"Nós assistimos TV na sala de estar.\"",
        "audioPhrase": "We watch TV in the living room.",
        "options": [
          "Living room",
          "Lamp",
          "Stove",
          "Bed"
        ],
        "correctAnswer": "Living room",
        "explanation": "Frase completa: \"We watch TV in the living room.\" (Nós assistimos TV na sala de estar.) — Living room (\"lí-ving rúm\") = Sala de estar.",
        "phoneticHint": "\"lí-ving rúm\" /ˈlɪv.ɪŋ ruːm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p2-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🔥",
        "prompt": "✍️ Complete a frase em inglês (\"Ela faz o jantar no fogão.\"):",
        "contextSentence": "She cooks dinner on the ______.",
        "contextSentencePt": "Tradução: \"Ela faz o jantar no fogão.\"",
        "audioPhrase": "She cooks dinner on the stove.",
        "options": [
          "Bed",
          "Stove",
          "Mirror",
          "Wall"
        ],
        "correctAnswer": "Stove",
        "explanation": "Frase completa: \"She cooks dinner on the stove.\" (Ela faz o jantar no fogão.) — Stove (\"stôuv\") = Fogão.",
        "phoneticHint": "\"stôuv\" /stoʊv/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p2-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🚿",
        "prompt": "✍️ Complete a frase em inglês (\"Eu tomo um banho morno de chuveiro.\"):",
        "contextSentence": "I take a warm ______.",
        "contextSentencePt": "Tradução: \"Eu tomo um banho morno de chuveiro.\"",
        "audioPhrase": "I take a warm shower.",
        "options": [
          "Fridge",
          "Shower",
          "Mirror",
          "Lamp"
        ],
        "correctAnswer": "Shower",
        "explanation": "Frase completa: \"I take a warm shower.\" (Eu tomo um banho morno de chuveiro.) — Shower (\"xáu-er\") = Chuveiro.",
        "phoneticHint": "\"xáu-er\" /ˈʃaʊ.ər/",
        "skillCategory": "reading"
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
    "vocabItems": [
      {
        "word": "Ceiling",
        "pt": "Teto",
        "simplePronunciation": "sí-ling",
        "phonetic": "/ˈsiː.lɪŋ/",
        "exampleEn": "The lamp hangs from the ceiling.",
        "examplePt": "A luminária fica presa no teto.",
        "emoji": "🏠"
      },
      {
        "word": "Stairs",
        "pt": "Escada",
        "simplePronunciation": "stérz",
        "phonetic": "/sterz/",
        "exampleEn": "Walk up the stairs carefully.",
        "examplePt": "Suba a escada com cuidado.",
        "emoji": "🪜"
      },
      {
        "word": "Garage",
        "pt": "Garagem",
        "simplePronunciation": "ga-rádj",
        "phonetic": "/ɡəˈrɑːʒ/",
        "exampleEn": "The car is in the garage.",
        "examplePt": "O carro está na garagem.",
        "emoji": "🚗"
      },
      {
        "word": "Balcony",
        "pt": "Varanda / Sacada",
        "simplePronunciation": "bél-co-ni",
        "phonetic": "/ˈbæl.kə.ni/",
        "exampleEn": "The apartment has a sunny balcony.",
        "examplePt": "O apartamento tem uma varanda ensolarada.",
        "emoji": "🌤️"
      },
      {
        "word": "Curtain",
        "pt": "Cortina",
        "simplePronunciation": "câr-ten",
        "phonetic": "/ˈkɜːr.tən/",
        "exampleEn": "Close the window curtain.",
        "examplePt": "Feche a cortina da janela.",
        "emoji": "🪟"
      },
      {
        "word": "Rug",
        "pt": "Tapete",
        "simplePronunciation": "râg",
        "phonetic": "/rʌɡ/",
        "exampleEn": "There is a soft rug on the floor.",
        "examplePt": "Há um tapete macio no chão.",
        "emoji": "🟥"
      },
      {
        "word": "Pillow",
        "pt": "Travesseiro",
        "simplePronunciation": "pí-lou",
        "phonetic": "/ˈpɪl.oʊ/",
        "exampleEn": "This pillow is very soft.",
        "examplePt": "Este travesseiro é muito macio.",
        "emoji": "⬜"
      },
      {
        "word": "Blanket",
        "pt": "Cobertor",
        "simplePronunciation": "blén-ket",
        "phonetic": "/ˈblæŋ.kɪt/",
        "exampleEn": "Take a warm blanket tonight.",
        "examplePt": "Pegue um cobertor quentinho hoje à noite.",
        "emoji": "🛌"
      },
      {
        "word": "Towel",
        "pt": "Toalha",
        "simplePronunciation": "táu-el",
        "phonetic": "/ˈtaʊ.əl/",
        "exampleEn": "Dry your hands with a towel.",
        "examplePt": "Seque suas mãos com uma toalha.",
        "emoji": "🧺"
      },
      {
        "word": "Shelf",
        "pt": "Prateleira / Estante",
        "simplePronunciation": "xélf",
        "phonetic": "/ʃelf/",
        "exampleEn": "Put the book on the shelf.",
        "examplePt": "Coloque o livro na prateleira.",
        "emoji": "📚"
      },
      {
        "word": "Drawer",
        "pt": "Gaveta",
        "simplePronunciation": "dró-er",
        "phonetic": "/drɔːr/",
        "exampleEn": "Open the top drawer.",
        "examplePt": "Abra a gaveta de cima.",
        "emoji": "🗄️"
      },
      {
        "word": "Gate",
        "pt": "Portão",
        "simplePronunciation": "guêit",
        "phonetic": "/ɡeɪt/",
        "exampleEn": "Lock the front gate.",
        "examplePt": "Tranque o portão da frente.",
        "emoji": "🚪"
      }
    ],
    "title": "A Casa • Módulo 3: Palavras Intermediárias",
    "subtitle": "Nível 3/4 • 12 palavras intermediárias de áreas e objetos domésticos",
    "pedagogicalObjective": "Expandir o vocabulário da casa com áreas externas, escadas, teto e itens de conforto.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "A Casa — Módulo 3 • Intermediárias: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p3-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ceiling",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling (\"sí-ling\")",
            "translationPt": "Teto"
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel (\"táu-el\")",
            "translationPt": "Toalha"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug (\"râg\")",
            "translationPt": "Tapete"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate (\"guêit\")",
            "translationPt": "Portão"
          }
        ],
        "options": [
          "Ceiling",
          "Towel",
          "Rug",
          "Gate"
        ],
        "correctAnswer": "Ceiling",
        "explanation": "Ceiling (\"sí-ling\") = Teto. Exemplo: \"The lamp hangs from the ceiling.\" (A luminária fica presa no teto.)",
        "phoneticHint": "\"sí-ling\" /ˈsiː.lɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Stairs",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage (\"ga-rádj\")",
            "translationPt": "Garagem"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket (\"blén-ket\")",
            "translationPt": "Cobertor"
          },
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs (\"stérz\")",
            "translationPt": "Escada"
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain (\"câr-ten\")",
            "translationPt": "Cortina"
          }
        ],
        "options": [
          "Garage",
          "Blanket",
          "Stairs",
          "Curtain"
        ],
        "correctAnswer": "Stairs",
        "explanation": "Stairs (\"stérz\") = Escada. Exemplo: \"Walk up the stairs carefully.\" (Suba a escada com cuidado.)",
        "phoneticHint": "\"stérz\" /sterz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Garage",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs (\"stérz\")",
            "translationPt": "Escada"
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage (\"ga-rádj\")",
            "translationPt": "Garagem"
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer (\"dró-er\")",
            "translationPt": "Gaveta"
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony (\"bél-co-ni\")",
            "translationPt": "Varanda / Sacada"
          }
        ],
        "options": [
          "Stairs",
          "Garage",
          "Drawer",
          "Balcony"
        ],
        "correctAnswer": "Garage",
        "explanation": "Garage (\"ga-rádj\") = Garagem. Exemplo: \"The car is in the garage.\" (O carro está na garagem.)",
        "phoneticHint": "\"ga-rádj\" /ɡəˈrɑːʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Balcony",
        "visualEmoji": "🌤️",
        "visualOptions": [
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage (\"ga-rádj\")",
            "translationPt": "Garagem"
          },
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs (\"stérz\")",
            "translationPt": "Escada"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow (\"pí-lou\")",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony (\"bél-co-ni\")",
            "translationPt": "Varanda / Sacada"
          }
        ],
        "options": [
          "Garage",
          "Stairs",
          "Pillow",
          "Balcony"
        ],
        "correctAnswer": "Balcony",
        "explanation": "Balcony (\"bél-co-ni\") = Varanda / Sacada. Exemplo: \"The apartment has a sunny balcony.\" (O apartamento tem uma varanda ensolarada.)",
        "phoneticHint": "\"bél-co-ni\" /ˈbæl.kə.ni/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Curtain",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain (\"câr-ten\")",
            "translationPt": "Cortina"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow (\"pí-lou\")",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate (\"guêit\")",
            "translationPt": "Portão"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug (\"râg\")",
            "translationPt": "Tapete"
          }
        ],
        "options": [
          "Curtain",
          "Pillow",
          "Gate",
          "Rug"
        ],
        "correctAnswer": "Curtain",
        "explanation": "Curtain (\"câr-ten\") = Cortina. Exemplo: \"Close the window curtain.\" (Feche a cortina da janela.)",
        "phoneticHint": "\"câr-ten\" /ˈkɜːr.tən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Rug",
        "visualEmoji": "🟥",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain (\"câr-ten\")",
            "translationPt": "Cortina"
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer (\"dró-er\")",
            "translationPt": "Gaveta"
          },
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs (\"stérz\")",
            "translationPt": "Escada"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug (\"râg\")",
            "translationPt": "Tapete"
          }
        ],
        "options": [
          "Curtain",
          "Drawer",
          "Stairs",
          "Rug"
        ],
        "correctAnswer": "Rug",
        "explanation": "Rug (\"râg\") = Tapete. Exemplo: \"There is a soft rug on the floor.\" (Há um tapete macio no chão.)",
        "phoneticHint": "\"râg\" /rʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pillow",
        "visualEmoji": "⬜",
        "visualOptions": [
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel (\"táu-el\")",
            "translationPt": "Toalha"
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain (\"câr-ten\")",
            "translationPt": "Cortina"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow (\"pí-lou\")",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony (\"bél-co-ni\")",
            "translationPt": "Varanda / Sacada"
          }
        ],
        "options": [
          "Towel",
          "Curtain",
          "Pillow",
          "Balcony"
        ],
        "correctAnswer": "Pillow",
        "explanation": "Pillow (\"pí-lou\") = Travesseiro. Exemplo: \"This pillow is very soft.\" (Este travesseiro é muito macio.)",
        "phoneticHint": "\"pí-lou\" /ˈpɪl.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Blanket",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket (\"blén-ket\")",
            "translationPt": "Cobertor"
          },
          {
            "text": "Ceiling",
            "emoji": "🏠",
            "label": "Ceiling (\"sí-ling\")",
            "translationPt": "Teto"
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage (\"ga-rádj\")",
            "translationPt": "Garagem"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug (\"râg\")",
            "translationPt": "Tapete"
          }
        ],
        "options": [
          "Blanket",
          "Ceiling",
          "Garage",
          "Rug"
        ],
        "correctAnswer": "Blanket",
        "explanation": "Blanket (\"blén-ket\") = Cobertor. Exemplo: \"Take a warm blanket tonight.\" (Pegue um cobertor quentinho hoje à noite.)",
        "phoneticHint": "\"blén-ket\" /ˈblæŋ.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Towel",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket (\"blén-ket\")",
            "translationPt": "Cobertor"
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel (\"táu-el\")",
            "translationPt": "Toalha"
          },
          {
            "text": "Shelf",
            "emoji": "📚",
            "label": "Shelf (\"xélf\")",
            "translationPt": "Prateleira / Estante"
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony (\"bél-co-ni\")",
            "translationPt": "Varanda / Sacada"
          }
        ],
        "options": [
          "Blanket",
          "Towel",
          "Shelf",
          "Balcony"
        ],
        "correctAnswer": "Towel",
        "explanation": "Towel (\"táu-el\") = Toalha. Exemplo: \"Dry your hands with a towel.\" (Seque suas mãos com uma toalha.)",
        "phoneticHint": "\"táu-el\" /ˈtaʊ.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Shelf",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony (\"bél-co-ni\")",
            "translationPt": "Varanda / Sacada"
          },
          {
            "text": "Shelf",
            "emoji": "📚",
            "label": "Shelf (\"xélf\")",
            "translationPt": "Prateleira / Estante"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate (\"guêit\")",
            "translationPt": "Portão"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow (\"pí-lou\")",
            "translationPt": "Travesseiro"
          }
        ],
        "options": [
          "Balcony",
          "Shelf",
          "Gate",
          "Pillow"
        ],
        "correctAnswer": "Shelf",
        "explanation": "Shelf (\"xélf\") = Prateleira / Estante. Exemplo: \"Put the book on the shelf.\" (Coloque o livro na prateleira.)",
        "phoneticHint": "\"xélf\" /ʃelf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Drawer",
        "visualEmoji": "🗄️",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket (\"blén-ket\")",
            "translationPt": "Cobertor"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow (\"pí-lou\")",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Balcony",
            "emoji": "🌤️",
            "label": "Balcony (\"bél-co-ni\")",
            "translationPt": "Varanda / Sacada"
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer (\"dró-er\")",
            "translationPt": "Gaveta"
          }
        ],
        "options": [
          "Blanket",
          "Pillow",
          "Balcony",
          "Drawer"
        ],
        "correctAnswer": "Drawer",
        "explanation": "Drawer (\"dró-er\") = Gaveta. Exemplo: \"Open the top drawer.\" (Abra a gaveta de cima.)",
        "phoneticHint": "\"dró-er\" /drɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Gate",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer (\"dró-er\")",
            "translationPt": "Gaveta"
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain (\"câr-ten\")",
            "translationPt": "Cortina"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate (\"guêit\")",
            "translationPt": "Portão"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug (\"râg\")",
            "translationPt": "Tapete"
          }
        ],
        "options": [
          "Drawer",
          "Curtain",
          "Gate",
          "Rug"
        ],
        "correctAnswer": "Gate",
        "explanation": "Gate (\"guêit\") = Portão. Exemplo: \"Lock the front gate.\" (Tranque o portão da frente.)",
        "phoneticHint": "\"guêit\" /ɡeɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Stairs",
        "contextSentencePt": "Pronúncia simplificada: \"stérz\"",
        "options": [
          "Blanket — Cobertor",
          "Stairs — Escada",
          "Garage — Garagem",
          "Pillow — Travesseiro"
        ],
        "correctAnswer": "Stairs — Escada",
        "explanation": "Você ouviu \"Stairs\" (\"stérz\") = Escada. Frase: \"Walk up the stairs carefully.\" (Suba a escada com cuidado.)",
        "phoneticHint": "\"stérz\" /sterz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Rug",
        "contextSentencePt": "Pronúncia simplificada: \"râg\"",
        "options": [
          "Pillow — Travesseiro",
          "Shelf — Prateleira / Estante",
          "Drawer — Gaveta",
          "Rug — Tapete"
        ],
        "correctAnswer": "Rug — Tapete",
        "explanation": "Você ouviu \"Rug\" (\"râg\") = Tapete. Frase: \"There is a soft rug on the floor.\" (Há um tapete macio no chão.)",
        "phoneticHint": "\"râg\" /rʌɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Shelf",
        "contextSentencePt": "Pronúncia simplificada: \"xélf\"",
        "options": [
          "Shelf — Prateleira / Estante",
          "Curtain — Cortina",
          "Garage — Garagem",
          "Pillow — Travesseiro"
        ],
        "correctAnswer": "Shelf — Prateleira / Estante",
        "explanation": "Você ouviu \"Shelf\" (\"xélf\") = Prateleira / Estante. Frase: \"Put the book on the shelf.\" (Coloque o livro na prateleira.)",
        "phoneticHint": "\"xélf\" /ʃelf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🚗",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Garage\" (pronúncia: \"ga-rádj\")?",
        "audioPhrase": "Garage",
        "contextSentence": "The car is in the garage.",
        "contextSentencePt": "O carro está na garagem.",
        "options": [
          "Varanda / Sacada",
          "Toalha",
          "Gaveta",
          "Garagem"
        ],
        "correctAnswer": "Garagem",
        "explanation": "\"Garage\" (\"ga-rádj\") significa \"Garagem\".",
        "phoneticHint": "\"ga-rádj\" /ɡəˈrɑːʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "⬜",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Pillow\" (pronúncia: \"pí-lou\")?",
        "audioPhrase": "Pillow",
        "contextSentence": "This pillow is very soft.",
        "contextSentencePt": "Este travesseiro é muito macio.",
        "options": [
          "Varanda / Sacada",
          "Cobertor",
          "Travesseiro",
          "Portão"
        ],
        "correctAnswer": "Travesseiro",
        "explanation": "\"Pillow\" (\"pí-lou\") significa \"Travesseiro\".",
        "phoneticHint": "\"pí-lou\" /ˈpɪl.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🗄️",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Drawer\" (pronúncia: \"dró-er\")?",
        "audioPhrase": "Drawer",
        "contextSentence": "Open the top drawer.",
        "contextSentencePt": "Abra a gaveta de cima.",
        "options": [
          "Gaveta",
          "Garagem",
          "Portão",
          "Cobertor"
        ],
        "correctAnswer": "Gaveta",
        "explanation": "\"Drawer\" (\"dró-er\") significa \"Gaveta\".",
        "phoneticHint": "\"dró-er\" /drɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🌤️",
        "prompt": "✍️ Complete a frase em inglês (\"O apartamento tem uma varanda ensolarada.\"):",
        "contextSentence": "The apartment has a sunny ______.",
        "contextSentencePt": "Tradução: \"O apartamento tem uma varanda ensolarada.\"",
        "audioPhrase": "The apartment has a sunny balcony.",
        "options": [
          "Rug",
          "Balcony",
          "Ceiling",
          "Drawer"
        ],
        "correctAnswer": "Balcony",
        "explanation": "Frase completa: \"The apartment has a sunny balcony.\" (O apartamento tem uma varanda ensolarada.) — Balcony (\"bél-co-ni\") = Varanda / Sacada.",
        "phoneticHint": "\"bél-co-ni\" /ˈbæl.kə.ni/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p3-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🛌",
        "prompt": "✍️ Complete a frase em inglês (\"Pegue um cobertor quentinho hoje à noite.\"):",
        "contextSentence": "Take a warm ______ tonight.",
        "contextSentencePt": "Tradução: \"Pegue um cobertor quentinho hoje à noite.\"",
        "audioPhrase": "Take a warm blanket tonight.",
        "options": [
          "Curtain",
          "Blanket",
          "Balcony",
          "Shelf"
        ],
        "correctAnswer": "Blanket",
        "explanation": "Frase completa: \"Take a warm blanket tonight.\" (Pegue um cobertor quentinho hoje à noite.) — Blanket (\"blén-ket\") = Cobertor.",
        "phoneticHint": "\"blén-ket\" /ˈblæŋ.kɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p3-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🚪",
        "prompt": "✍️ Complete a frase em inglês (\"Tranque o portão da frente.\"):",
        "contextSentence": "Lock the front ______.",
        "contextSentencePt": "Tradução: \"Tranque o portão da frente.\"",
        "audioPhrase": "Lock the front gate.",
        "options": [
          "Ceiling",
          "Towel",
          "Curtain",
          "Gate"
        ],
        "correctAnswer": "Gate",
        "explanation": "Frase completa: \"Lock the front gate.\" (Tranque o portão da frente.) — Gate (\"guêit\") = Portão.",
        "phoneticHint": "\"guêit\" /ɡeɪt/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p4",
    "worldId": 0,
    "phaseNumber": 4,
    "themeId": "home",
    "themeTitle": "A Casa",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "vocabItems": [
      {
        "word": "Attic",
        "pt": "Sótão",
        "simplePronunciation": "é-tik",
        "phonetic": "/ˈæt.ɪk/",
        "exampleEn": "Old boxes are stored in the attic.",
        "examplePt": "Caixas antigas ficam guardadas no sótão.",
        "emoji": "🏠"
      },
      {
        "word": "Basement",
        "pt": "Porão / Subsolo",
        "simplePronunciation": "bêis-ment",
        "phonetic": "/ˈbeɪs.mənt/",
        "exampleEn": "The laundry room is in the basement.",
        "examplePt": "A lavanderia fica no porão.",
        "emoji": "🪜"
      },
      {
        "word": "Chimney",
        "pt": "Chaminé",
        "simplePronunciation": "tchím-ni",
        "phonetic": "/ˈtʃɪm.ni/",
        "exampleEn": "Smoke comes out of the brick chimney.",
        "examplePt": "A fumaça sai pela chaminé.",
        "emoji": "🧱"
      },
      {
        "word": "Doorknob",
        "pt": "Maçaneta",
        "simplePronunciation": "dór-nób",
        "phonetic": "/ˈdɔːr.nɑːb/",
        "exampleEn": "Turn the doorknob to open it.",
        "examplePt": "Gire a maçaneta para abrir.",
        "emoji": "🚪"
      },
      {
        "word": "Gutter",
        "pt": "Calha de chuva",
        "simplePronunciation": "gâ-ter",
        "phonetic": "/ˈɡʌt.ər/",
        "exampleEn": "Rainwater flows through the roof gutter.",
        "examplePt": "A água da chuva corre pela calha do telhado.",
        "emoji": "🌧️"
      },
      {
        "word": "Fence",
        "pt": "Cerca",
        "simplePronunciation": "féns",
        "phonetic": "/fens/",
        "exampleEn": "A wooden fence surrounds the yard.",
        "examplePt": "Uma cerca de madeira rodeia o quintal.",
        "emoji": "🏡"
      },
      {
        "word": "Mailbox",
        "pt": "Caixa de correio",
        "simplePronunciation": "mêil-bóks",
        "phonetic": "/ˈmeɪl.bɑːks/",
        "exampleEn": "Check the mailbox for letters.",
        "examplePt": "Olhe a caixa de correio para ver se há cartas.",
        "emoji": "📫"
      },
      {
        "word": "Doorbell",
        "pt": "Campainha",
        "simplePronunciation": "dór-bél",
        "phonetic": "/ˈdɔːr.bel/",
        "exampleEn": "Somebody rang the doorbell.",
        "examplePt": "Alguém tocou a campainha.",
        "emoji": "🔔"
      },
      {
        "word": "Faucet",
        "pt": "Torneira",
        "simplePronunciation": "fó-set",
        "phonetic": "/ˈfɔː.sɪt/",
        "exampleEn": "Turn off the water faucet.",
        "examplePt": "Feche a torneira de água.",
        "emoji": "🚰"
      },
      {
        "word": "Closet",
        "pt": "Armário / Closet",
        "simplePronunciation": "cló-zet",
        "phonetic": "/ˈklɑː.zɪt/",
        "exampleEn": "Hang your coat in the closet.",
        "examplePt": "Pendure seu casaco no armário.",
        "emoji": "🚪"
      },
      {
        "word": "Broom",
        "pt": "Vassoura",
        "simplePronunciation": "brúm",
        "phonetic": "/bruːm/",
        "exampleEn": "Sweep the kitchen with a broom.",
        "examplePt": "Varra a cozinha com uma vassoura.",
        "emoji": "🧹"
      },
      {
        "word": "Bucket",
        "pt": "Balde",
        "simplePronunciation": "bâ-ket",
        "phonetic": "/ˈbʌk.ɪt/",
        "exampleEn": "Fill the bucket with water.",
        "examplePt": "Encha o balde com água.",
        "emoji": "🪣"
      }
    ],
    "title": "A Casa • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Nível 4/4 • 12 palavras específicas de arquitetura e detalhes da casa",
    "pedagogicalObjective": "Conhecer termos mais específicos da estrutura residencial, como sótão, porão, chaminé, maçaneta e calha.",
    "type": "boss",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "A Casa — Módulo 4 • Menos Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p4-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Attic",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter (\"gâ-ter\")",
            "translationPt": "Calha de chuva"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket (\"bâ-ket\")",
            "translationPt": "Balde"
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic (\"é-tik\")",
            "translationPt": "Sótão"
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet (\"fó-set\")",
            "translationPt": "Torneira"
          }
        ],
        "options": [
          "Gutter",
          "Bucket",
          "Attic",
          "Faucet"
        ],
        "correctAnswer": "Attic",
        "explanation": "Attic (\"é-tik\") = Sótão. Exemplo: \"Old boxes are stored in the attic.\" (Caixas antigas ficam guardadas no sótão.)",
        "phoneticHint": "\"é-tik\" /ˈæt.ɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Basement",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney (\"tchím-ni\")",
            "translationPt": "Chaminé"
          },
          {
            "text": "Basement",
            "emoji": "🪜",
            "label": "Basement (\"bêis-ment\")",
            "translationPt": "Porão / Subsolo"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom (\"brúm\")",
            "translationPt": "Vassoura"
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence (\"féns\")",
            "translationPt": "Cerca"
          }
        ],
        "options": [
          "Chimney",
          "Basement",
          "Broom",
          "Fence"
        ],
        "correctAnswer": "Basement",
        "explanation": "Basement (\"bêis-ment\") = Porão / Subsolo. Exemplo: \"The laundry room is in the basement.\" (A lavanderia fica no porão.)",
        "phoneticHint": "\"bêis-ment\" /ˈbeɪs.mənt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Chimney",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob (\"dór-nób\")",
            "translationPt": "Maçaneta"
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic (\"é-tik\")",
            "translationPt": "Sótão"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox (\"mêil-bóks\")",
            "translationPt": "Caixa de correio"
          },
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney (\"tchím-ni\")",
            "translationPt": "Chaminé"
          }
        ],
        "options": [
          "Doorknob",
          "Attic",
          "Mailbox",
          "Chimney"
        ],
        "correctAnswer": "Chimney",
        "explanation": "Chimney (\"tchím-ni\") = Chaminé. Exemplo: \"Smoke comes out of the brick chimney.\" (A fumaça sai pela chaminé.)",
        "phoneticHint": "\"tchím-ni\" /ˈtʃɪm.ni/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Doorknob",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob (\"dór-nób\")",
            "translationPt": "Maçaneta"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox (\"mêil-bóks\")",
            "translationPt": "Caixa de correio"
          },
          {
            "text": "Closet",
            "emoji": "🚪",
            "label": "Closet (\"cló-zet\")",
            "translationPt": "Armário / Closet"
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter (\"gâ-ter\")",
            "translationPt": "Calha de chuva"
          }
        ],
        "options": [
          "Doorknob",
          "Mailbox",
          "Closet",
          "Gutter"
        ],
        "correctAnswer": "Doorknob",
        "explanation": "Doorknob (\"dór-nób\") = Maçaneta. Exemplo: \"Turn the doorknob to open it.\" (Gire a maçaneta para abrir.)",
        "phoneticHint": "\"dór-nób\" /ˈdɔːr.nɑːb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Gutter",
        "visualEmoji": "🌧️",
        "visualOptions": [
          {
            "text": "Closet",
            "emoji": "🚪",
            "label": "Closet (\"cló-zet\")",
            "translationPt": "Armário / Closet"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox (\"mêil-bóks\")",
            "translationPt": "Caixa de correio"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell (\"dór-bél\")",
            "translationPt": "Campainha"
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter (\"gâ-ter\")",
            "translationPt": "Calha de chuva"
          }
        ],
        "options": [
          "Closet",
          "Mailbox",
          "Doorbell",
          "Gutter"
        ],
        "correctAnswer": "Gutter",
        "explanation": "Gutter (\"gâ-ter\") = Calha de chuva. Exemplo: \"Rainwater flows through the roof gutter.\" (A água da chuva corre pela calha do telhado.)",
        "phoneticHint": "\"gâ-ter\" /ˈɡʌt.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Fence",
        "visualEmoji": "🏡",
        "visualOptions": [
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet (\"fó-set\")",
            "translationPt": "Torneira"
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter (\"gâ-ter\")",
            "translationPt": "Calha de chuva"
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence (\"féns\")",
            "translationPt": "Cerca"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom (\"brúm\")",
            "translationPt": "Vassoura"
          }
        ],
        "options": [
          "Faucet",
          "Gutter",
          "Fence",
          "Broom"
        ],
        "correctAnswer": "Fence",
        "explanation": "Fence (\"féns\") = Cerca. Exemplo: \"A wooden fence surrounds the yard.\" (Uma cerca de madeira rodeia o quintal.)",
        "phoneticHint": "\"féns\" /fens/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Mailbox",
        "visualEmoji": "📫",
        "visualOptions": [
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox (\"mêil-bóks\")",
            "translationPt": "Caixa de correio"
          },
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney (\"tchím-ni\")",
            "translationPt": "Chaminé"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell (\"dór-bél\")",
            "translationPt": "Campainha"
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob (\"dór-nób\")",
            "translationPt": "Maçaneta"
          }
        ],
        "options": [
          "Mailbox",
          "Chimney",
          "Doorbell",
          "Doorknob"
        ],
        "correctAnswer": "Mailbox",
        "explanation": "Mailbox (\"mêil-bóks\") = Caixa de correio. Exemplo: \"Check the mailbox for letters.\" (Olhe a caixa de correio para ver se há cartas.)",
        "phoneticHint": "\"mêil-bóks\" /ˈmeɪl.bɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Doorbell",
        "visualEmoji": "🔔",
        "visualOptions": [
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence (\"féns\")",
            "translationPt": "Cerca"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell (\"dór-bél\")",
            "translationPt": "Campainha"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket (\"bâ-ket\")",
            "translationPt": "Balde"
          },
          {
            "text": "Chimney",
            "emoji": "🧱",
            "label": "Chimney (\"tchím-ni\")",
            "translationPt": "Chaminé"
          }
        ],
        "options": [
          "Fence",
          "Doorbell",
          "Bucket",
          "Chimney"
        ],
        "correctAnswer": "Doorbell",
        "explanation": "Doorbell (\"dór-bél\") = Campainha. Exemplo: \"Somebody rang the doorbell.\" (Alguém tocou a campainha.)",
        "phoneticHint": "\"dór-bél\" /ˈdɔːr.bel/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Faucet",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell (\"dór-bél\")",
            "translationPt": "Campainha"
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet (\"fó-set\")",
            "translationPt": "Torneira"
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence (\"féns\")",
            "translationPt": "Cerca"
          },
          {
            "text": "Gutter",
            "emoji": "🌧️",
            "label": "Gutter (\"gâ-ter\")",
            "translationPt": "Calha de chuva"
          }
        ],
        "options": [
          "Doorbell",
          "Faucet",
          "Fence",
          "Gutter"
        ],
        "correctAnswer": "Faucet",
        "explanation": "Faucet (\"fó-set\") = Torneira. Exemplo: \"Turn off the water faucet.\" (Feche a torneira de água.)",
        "phoneticHint": "\"fó-set\" /ˈfɔː.sɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Closet",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet (\"fó-set\")",
            "translationPt": "Torneira"
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob (\"dór-nób\")",
            "translationPt": "Maçaneta"
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic (\"é-tik\")",
            "translationPt": "Sótão"
          },
          {
            "text": "Closet",
            "emoji": "🚪",
            "label": "Closet (\"cló-zet\")",
            "translationPt": "Armário / Closet"
          }
        ],
        "options": [
          "Faucet",
          "Doorknob",
          "Attic",
          "Closet"
        ],
        "correctAnswer": "Closet",
        "explanation": "Closet (\"cló-zet\") = Armário / Closet. Exemplo: \"Hang your coat in the closet.\" (Pendure seu casaco no armário.)",
        "phoneticHint": "\"cló-zet\" /ˈklɑː.zɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Broom",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Closet",
            "emoji": "🚪",
            "label": "Closet (\"cló-zet\")",
            "translationPt": "Armário / Closet"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell (\"dór-bél\")",
            "translationPt": "Campainha"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom (\"brúm\")",
            "translationPt": "Vassoura"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox (\"mêil-bóks\")",
            "translationPt": "Caixa de correio"
          }
        ],
        "options": [
          "Closet",
          "Doorbell",
          "Broom",
          "Mailbox"
        ],
        "correctAnswer": "Broom",
        "explanation": "Broom (\"brúm\") = Vassoura. Exemplo: \"Sweep the kitchen with a broom.\" (Varra a cozinha com uma vassoura.)",
        "phoneticHint": "\"brúm\" /bruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bucket",
        "visualEmoji": "🪣",
        "visualOptions": [
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket (\"bâ-ket\")",
            "translationPt": "Balde"
          },
          {
            "text": "Attic",
            "emoji": "🏠",
            "label": "Attic (\"é-tik\")",
            "translationPt": "Sótão"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom (\"brúm\")",
            "translationPt": "Vassoura"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox (\"mêil-bóks\")",
            "translationPt": "Caixa de correio"
          }
        ],
        "options": [
          "Bucket",
          "Attic",
          "Broom",
          "Mailbox"
        ],
        "correctAnswer": "Bucket",
        "explanation": "Bucket (\"bâ-ket\") = Balde. Exemplo: \"Fill the bucket with water.\" (Encha o balde com água.)",
        "phoneticHint": "\"bâ-ket\" /ˈbʌk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Basement",
        "contextSentencePt": "Pronúncia simplificada: \"bêis-ment\"",
        "options": [
          "Broom — Vassoura",
          "Bucket — Balde",
          "Doorbell — Campainha",
          "Basement — Porão / Subsolo"
        ],
        "correctAnswer": "Basement — Porão / Subsolo",
        "explanation": "Você ouviu \"Basement\" (\"bêis-ment\") = Porão / Subsolo. Frase: \"The laundry room is in the basement.\" (A lavanderia fica no porão.)",
        "phoneticHint": "\"bêis-ment\" /ˈbeɪs.mənt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Fence",
        "contextSentencePt": "Pronúncia simplificada: \"féns\"",
        "options": [
          "Fence — Cerca",
          "Gutter — Calha de chuva",
          "Closet — Armário / Closet",
          "Basement — Porão / Subsolo"
        ],
        "correctAnswer": "Fence — Cerca",
        "explanation": "Você ouviu \"Fence\" (\"féns\") = Cerca. Frase: \"A wooden fence surrounds the yard.\" (Uma cerca de madeira rodeia o quintal.)",
        "phoneticHint": "\"féns\" /fens/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Closet",
        "contextSentencePt": "Pronúncia simplificada: \"cló-zet\"",
        "options": [
          "Broom — Vassoura",
          "Basement — Porão / Subsolo",
          "Doorbell — Campainha",
          "Closet — Armário / Closet"
        ],
        "correctAnswer": "Closet — Armário / Closet",
        "explanation": "Você ouviu \"Closet\" (\"cló-zet\") = Armário / Closet. Frase: \"Hang your coat in the closet.\" (Pendure seu casaco no armário.)",
        "phoneticHint": "\"cló-zet\" /ˈklɑː.zɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🧱",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Chimney\" (pronúncia: \"tchím-ni\")?",
        "audioPhrase": "Chimney",
        "contextSentence": "Smoke comes out of the brick chimney.",
        "contextSentencePt": "A fumaça sai pela chaminé.",
        "options": [
          "Balde",
          "Cerca",
          "Chaminé",
          "Torneira"
        ],
        "correctAnswer": "Chaminé",
        "explanation": "\"Chimney\" (\"tchím-ni\") significa \"Chaminé\".",
        "phoneticHint": "\"tchím-ni\" /ˈtʃɪm.ni/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "📫",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Mailbox\" (pronúncia: \"mêil-bóks\")?",
        "audioPhrase": "Mailbox",
        "contextSentence": "Check the mailbox for letters.",
        "contextSentencePt": "Olhe a caixa de correio para ver se há cartas.",
        "options": [
          "Caixa de correio",
          "Maçaneta",
          "Campainha",
          "Armário / Closet"
        ],
        "correctAnswer": "Caixa de correio",
        "explanation": "\"Mailbox\" (\"mêil-bóks\") significa \"Caixa de correio\".",
        "phoneticHint": "\"mêil-bóks\" /ˈmeɪl.bɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🧹",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Broom\" (pronúncia: \"brúm\")?",
        "audioPhrase": "Broom",
        "contextSentence": "Sweep the kitchen with a broom.",
        "contextSentencePt": "Varra a cozinha com uma vassoura.",
        "options": [
          "Sótão",
          "Vassoura",
          "Cerca",
          "Calha de chuva"
        ],
        "correctAnswer": "Vassoura",
        "explanation": "\"Broom\" (\"brúm\") significa \"Vassoura\".",
        "phoneticHint": "\"brúm\" /bruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🚪",
        "prompt": "✍️ Complete a frase em inglês (\"Gire a maçaneta para abrir.\"):",
        "contextSentence": "Turn the ______ to open it.",
        "contextSentencePt": "Tradução: \"Gire a maçaneta para abrir.\"",
        "audioPhrase": "Turn the doorknob to open it.",
        "options": [
          "Basement",
          "Doorknob",
          "Closet",
          "Mailbox"
        ],
        "correctAnswer": "Doorknob",
        "explanation": "Frase completa: \"Turn the doorknob to open it.\" (Gire a maçaneta para abrir.) — Doorknob (\"dór-nób\") = Maçaneta.",
        "phoneticHint": "\"dór-nób\" /ˈdɔːr.nɑːb/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p4-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🔔",
        "prompt": "✍️ Complete a frase em inglês (\"Alguém tocou a campainha.\"):",
        "contextSentence": "Somebody rang the ______.",
        "contextSentencePt": "Tradução: \"Alguém tocou a campainha.\"",
        "audioPhrase": "Somebody rang the doorbell.",
        "options": [
          "Bucket",
          "Gutter",
          "Broom",
          "Doorbell"
        ],
        "correctAnswer": "Doorbell",
        "explanation": "Frase completa: \"Somebody rang the doorbell.\" (Alguém tocou a campainha.) — Doorbell (\"dór-bél\") = Campainha.",
        "phoneticHint": "\"dór-bél\" /ˈdɔːr.bel/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p4-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🪣",
        "prompt": "✍️ Complete a frase em inglês (\"Encha o balde com água.\"):",
        "contextSentence": "Fill the ______ with water.",
        "contextSentencePt": "Tradução: \"Encha o balde com água.\"",
        "audioPhrase": "Fill the bucket with water.",
        "options": [
          "Attic",
          "Closet",
          "Bucket",
          "Broom"
        ],
        "correctAnswer": "Bucket",
        "explanation": "Frase completa: \"Fill the bucket with water.\" (Encha o balde com água.) — Bucket (\"bâ-ket\") = Balde.",
        "phoneticHint": "\"bâ-ket\" /ˈbʌk.ɪt/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p5",
    "worldId": 0,
    "phaseNumber": 5,
    "themeId": "food",
    "themeTitle": "Comida",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "vocabItems": [
      {
        "word": "Bread",
        "pt": "Pão",
        "simplePronunciation": "bréd",
        "phonetic": "/bred/",
        "exampleEn": "I eat warm bread for breakfast.",
        "examplePt": "Eu como pão quentinho no café da manhã.",
        "emoji": "🍞"
      },
      {
        "word": "Rice",
        "pt": "Arroz",
        "simplePronunciation": "ráis",
        "phonetic": "/raɪs/",
        "exampleEn": "We eat white rice every day.",
        "examplePt": "Nós comemos arroz branco todos os dias.",
        "emoji": "🍚"
      },
      {
        "word": "Beans",
        "pt": "Feijão",
        "simplePronunciation": "bínz",
        "phonetic": "/biːnz/",
        "exampleEn": "Rice and beans taste great.",
        "examplePt": "Arroz e feijão são deliciosos.",
        "emoji": "🫘"
      },
      {
        "word": "Meat",
        "pt": "Carne",
        "simplePronunciation": "mít",
        "phonetic": "/miːt/",
        "exampleEn": "He cooked the meat on the grill.",
        "examplePt": "Ele assou a carne na grelha.",
        "emoji": "🥩"
      },
      {
        "word": "Chicken",
        "pt": "Frango",
        "simplePronunciation": "tchí-ken",
        "phonetic": "/ˈtʃɪk.ɪn/",
        "exampleEn": "We had roast chicken for lunch.",
        "examplePt": "Comemos frango assado no almoço.",
        "emoji": "🍗"
      },
      {
        "word": "Egg",
        "pt": "Ovo",
        "simplePronunciation": "ég",
        "phonetic": "/eɡ/",
        "exampleEn": "I like fried eggs in the morning.",
        "examplePt": "Eu gosto de ovos fritos de manhã.",
        "emoji": "🥚"
      },
      {
        "word": "Milk",
        "pt": "Leite",
        "simplePronunciation": "mílk",
        "phonetic": "/mɪlk/",
        "exampleEn": "Drink a glass of warm milk.",
        "examplePt": "Beba um copo de leite morno.",
        "emoji": "🥛"
      },
      {
        "word": "Coffee",
        "pt": "Café",
        "simplePronunciation": "có-fi",
        "phonetic": "/ˈkɔː.fi/",
        "exampleEn": "She loves hot coffee.",
        "examplePt": "Ela adora café quente.",
        "emoji": "☕"
      },
      {
        "word": "Juice",
        "pt": "Suco",
        "simplePronunciation": "djús",
        "phonetic": "/dʒuːs/",
        "exampleEn": "Fresh orange juice is delicious.",
        "examplePt": "Suco de laranja fresco é delicioso.",
        "emoji": "🧃"
      },
      {
        "word": "Apple",
        "pt": "Maçã",
        "simplePronunciation": "é-pol",
        "phonetic": "/ˈæp.əl/",
        "exampleEn": "This red apple is sweet.",
        "examplePt": "Esta maçã vermelha é doce.",
        "emoji": "🍎"
      },
      {
        "word": "Banana",
        "pt": "Banana",
        "simplePronunciation": "ba-né-na",
        "phonetic": "/bəˈnæn.ə/",
        "exampleEn": "Peel the yellow banana.",
        "examplePt": "Descasque a banana amarela.",
        "emoji": "🍌"
      },
      {
        "word": "Cheese",
        "pt": "Queijo",
        "simplePronunciation": "tchíz",
        "phonetic": "/tʃiːz/",
        "exampleEn": "Put cheese on the bread.",
        "examplePt": "Coloque queijo no pão.",
        "emoji": "🧀"
      }
    ],
    "title": "Comida • Módulo 1: Palavras Essenciais",
    "subtitle": "Nível 1/4 • Os 12 alimentos e bebidas mais básicos do dia a dia",
    "pedagogicalObjective": "Dominar os alimentos e bebidas indispensáveis em qualquer refeição.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Comida — Módulo 1 • Essenciais: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p5-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat (\"mít\")",
            "translationPt": "Carne"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread (\"bréd\")",
            "translationPt": "Pão"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg (\"ég\")",
            "translationPt": "Ovo"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice (\"djús\")",
            "translationPt": "Suco"
          }
        ],
        "options": [
          "Meat",
          "Bread",
          "Egg",
          "Juice"
        ],
        "correctAnswer": "Bread",
        "explanation": "Bread (\"bréd\") = Pão. Exemplo: \"I eat warm bread for breakfast.\" (Eu como pão quentinho no café da manhã.)",
        "phoneticHint": "\"bréd\" /bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg (\"ég\")",
            "translationPt": "Ovo"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk (\"mílk\")",
            "translationPt": "Leite"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple (\"é-pol\")",
            "translationPt": "Maçã"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice (\"ráis\")",
            "translationPt": "Arroz"
          }
        ],
        "options": [
          "Egg",
          "Milk",
          "Apple",
          "Rice"
        ],
        "correctAnswer": "Rice",
        "explanation": "Rice (\"ráis\") = Arroz. Exemplo: \"We eat white rice every day.\" (Nós comemos arroz branco todos os dias.)",
        "phoneticHint": "\"ráis\" /raɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Beans",
        "visualEmoji": "🫘",
        "visualOptions": [
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans (\"bínz\")",
            "translationPt": "Feijão"
          },
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat (\"mít\")",
            "translationPt": "Carne"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese (\"tchíz\")",
            "translationPt": "Queijo"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice (\"ráis\")",
            "translationPt": "Arroz"
          }
        ],
        "options": [
          "Beans",
          "Meat",
          "Cheese",
          "Rice"
        ],
        "correctAnswer": "Beans",
        "explanation": "Beans (\"bínz\") = Feijão. Exemplo: \"Rice and beans taste great.\" (Arroz e feijão são deliciosos.)",
        "phoneticHint": "\"bínz\" /biːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Meat",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese (\"tchíz\")",
            "translationPt": "Queijo"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk (\"mílk\")",
            "translationPt": "Leite"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice (\"ráis\")",
            "translationPt": "Arroz"
          },
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat (\"mít\")",
            "translationPt": "Carne"
          }
        ],
        "options": [
          "Cheese",
          "Milk",
          "Rice",
          "Meat"
        ],
        "correctAnswer": "Meat",
        "explanation": "Meat (\"mít\") = Carne. Exemplo: \"He cooked the meat on the grill.\" (Ele assou a carne na grelha.)",
        "phoneticHint": "\"mít\" /miːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Chicken",
        "visualEmoji": "🍗",
        "visualOptions": [
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice (\"djús\")",
            "translationPt": "Suco"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee (\"có-fi\")",
            "translationPt": "Café"
          },
          {
            "text": "Chicken",
            "emoji": "🍗",
            "label": "Chicken (\"tchí-ken\")",
            "translationPt": "Frango"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese (\"tchíz\")",
            "translationPt": "Queijo"
          }
        ],
        "options": [
          "Juice",
          "Coffee",
          "Chicken",
          "Cheese"
        ],
        "correctAnswer": "Chicken",
        "explanation": "Chicken (\"tchí-ken\") = Frango. Exemplo: \"We had roast chicken for lunch.\" (Comemos frango assado no almoço.)",
        "phoneticHint": "\"tchí-ken\" /ˈtʃɪk.ɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Egg",
        "visualEmoji": "🥚",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg (\"ég\")",
            "translationPt": "Ovo"
          },
          {
            "text": "Chicken",
            "emoji": "🍗",
            "label": "Chicken (\"tchí-ken\")",
            "translationPt": "Frango"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese (\"tchíz\")",
            "translationPt": "Queijo"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice (\"djús\")",
            "translationPt": "Suco"
          }
        ],
        "options": [
          "Egg",
          "Chicken",
          "Cheese",
          "Juice"
        ],
        "correctAnswer": "Egg",
        "explanation": "Egg (\"ég\") = Ovo. Exemplo: \"I like fried eggs in the morning.\" (Eu gosto de ovos fritos de manhã.)",
        "phoneticHint": "\"ég\" /eɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat (\"mít\")",
            "translationPt": "Carne"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk (\"mílk\")",
            "translationPt": "Leite"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese (\"tchíz\")",
            "translationPt": "Queijo"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee (\"có-fi\")",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Meat",
          "Milk",
          "Cheese",
          "Coffee"
        ],
        "correctAnswer": "Milk",
        "explanation": "Milk (\"mílk\") = Leite. Exemplo: \"Drink a glass of warm milk.\" (Beba um copo de leite morno.)",
        "phoneticHint": "\"mílk\" /mɪlk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Coffee",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple (\"é-pol\")",
            "translationPt": "Maçã"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee (\"có-fi\")",
            "translationPt": "Café"
          },
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat (\"mít\")",
            "translationPt": "Carne"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread (\"bréd\")",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Apple",
          "Coffee",
          "Meat",
          "Bread"
        ],
        "correctAnswer": "Coffee",
        "explanation": "Coffee (\"có-fi\") = Café. Exemplo: \"She loves hot coffee.\" (Ela adora café quente.)",
        "phoneticHint": "\"có-fi\" /ˈkɔː.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Juice",
        "visualEmoji": "🧃",
        "visualOptions": [
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee (\"có-fi\")",
            "translationPt": "Café"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg (\"ég\")",
            "translationPt": "Ovo"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice (\"ráis\")",
            "translationPt": "Arroz"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice (\"djús\")",
            "translationPt": "Suco"
          }
        ],
        "options": [
          "Coffee",
          "Egg",
          "Rice",
          "Juice"
        ],
        "correctAnswer": "Juice",
        "explanation": "Juice (\"djús\") = Suco. Exemplo: \"Fresh orange juice is delicious.\" (Suco de laranja fresco é delicioso.)",
        "phoneticHint": "\"djús\" /dʒuːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread (\"bréd\")",
            "translationPt": "Pão"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee (\"có-fi\")",
            "translationPt": "Café"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple (\"é-pol\")",
            "translationPt": "Maçã"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk (\"mílk\")",
            "translationPt": "Leite"
          }
        ],
        "options": [
          "Bread",
          "Coffee",
          "Apple",
          "Milk"
        ],
        "correctAnswer": "Apple",
        "explanation": "Apple (\"é-pol\") = Maçã. Exemplo: \"This red apple is sweet.\" (Esta maçã vermelha é doce.)",
        "phoneticHint": "\"é-pol\" /ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Banana",
        "visualEmoji": "🍌",
        "visualOptions": [
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana (\"ba-né-na\")",
            "translationPt": "Banana"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans (\"bínz\")",
            "translationPt": "Feijão"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk (\"mílk\")",
            "translationPt": "Leite"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice (\"ráis\")",
            "translationPt": "Arroz"
          }
        ],
        "options": [
          "Banana",
          "Beans",
          "Milk",
          "Rice"
        ],
        "correctAnswer": "Banana",
        "explanation": "Banana (\"ba-né-na\") = Banana. Exemplo: \"Peel the yellow banana.\" (Descasque a banana amarela.)",
        "phoneticHint": "\"ba-né-na\" /bəˈnæn.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee (\"có-fi\")",
            "translationPt": "Café"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread (\"bréd\")",
            "translationPt": "Pão"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese (\"tchíz\")",
            "translationPt": "Queijo"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk (\"mílk\")",
            "translationPt": "Leite"
          }
        ],
        "options": [
          "Coffee",
          "Bread",
          "Cheese",
          "Milk"
        ],
        "correctAnswer": "Cheese",
        "explanation": "Cheese (\"tchíz\") = Queijo. Exemplo: \"Put cheese on the bread.\" (Coloque queijo no pão.)",
        "phoneticHint": "\"tchíz\" /tʃiːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Rice",
        "contextSentencePt": "Pronúncia simplificada: \"ráis\"",
        "options": [
          "Rice — Arroz",
          "Juice — Suco",
          "Cheese — Queijo",
          "Egg — Ovo"
        ],
        "correctAnswer": "Rice — Arroz",
        "explanation": "Você ouviu \"Rice\" (\"ráis\") = Arroz. Frase: \"We eat white rice every day.\" (Nós comemos arroz branco todos os dias.)",
        "phoneticHint": "\"ráis\" /raɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Egg",
        "contextSentencePt": "Pronúncia simplificada: \"ég\"",
        "options": [
          "Chicken — Frango",
          "Milk — Leite",
          "Cheese — Queijo",
          "Egg — Ovo"
        ],
        "correctAnswer": "Egg — Ovo",
        "explanation": "Você ouviu \"Egg\" (\"ég\") = Ovo. Frase: \"I like fried eggs in the morning.\" (Eu gosto de ovos fritos de manhã.)",
        "phoneticHint": "\"ég\" /eɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Apple",
        "contextSentencePt": "Pronúncia simplificada: \"é-pol\"",
        "options": [
          "Meat — Carne",
          "Beans — Feijão",
          "Apple — Maçã",
          "Bread — Pão"
        ],
        "correctAnswer": "Apple — Maçã",
        "explanation": "Você ouviu \"Apple\" (\"é-pol\") = Maçã. Frase: \"This red apple is sweet.\" (Esta maçã vermelha é doce.)",
        "phoneticHint": "\"é-pol\" /ˈæp.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🫘",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Beans\" (pronúncia: \"bínz\")?",
        "audioPhrase": "Beans",
        "contextSentence": "Rice and beans taste great.",
        "contextSentencePt": "Arroz e feijão são deliciosos.",
        "options": [
          "Feijão",
          "Maçã",
          "Frango",
          "Queijo"
        ],
        "correctAnswer": "Feijão",
        "explanation": "\"Beans\" (\"bínz\") significa \"Feijão\".",
        "phoneticHint": "\"bínz\" /biːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🥛",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Milk\" (pronúncia: \"mílk\")?",
        "audioPhrase": "Milk",
        "contextSentence": "Drink a glass of warm milk.",
        "contextSentencePt": "Beba um copo de leite morno.",
        "options": [
          "Suco",
          "Leite",
          "Frango",
          "Maçã"
        ],
        "correctAnswer": "Leite",
        "explanation": "\"Milk\" (\"mílk\") significa \"Leite\".",
        "phoneticHint": "\"mílk\" /mɪlk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🍌",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Banana\" (pronúncia: \"ba-né-na\")?",
        "audioPhrase": "Banana",
        "contextSentence": "Peel the yellow banana.",
        "contextSentencePt": "Descasque a banana amarela.",
        "options": [
          "Café",
          "Banana",
          "Pão",
          "Feijão"
        ],
        "correctAnswer": "Banana",
        "explanation": "\"Banana\" (\"ba-né-na\") significa \"Banana\".",
        "phoneticHint": "\"ba-né-na\" /bəˈnæn.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🥩",
        "prompt": "✍️ Complete a frase em inglês (\"Ele assou a carne na grelha.\"):",
        "contextSentence": "He cooked the ______ on the grill.",
        "contextSentencePt": "Tradução: \"Ele assou a carne na grelha.\"",
        "audioPhrase": "He cooked the meat on the grill.",
        "options": [
          "Coffee",
          "Cheese",
          "Milk",
          "Meat"
        ],
        "correctAnswer": "Meat",
        "explanation": "Frase completa: \"He cooked the meat on the grill.\" (Ele assou a carne na grelha.) — Meat (\"mít\") = Carne.",
        "phoneticHint": "\"mít\" /miːt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p5-fill-2",
        "type": "fill-blank",
        "visualEmoji": "☕",
        "prompt": "✍️ Complete a frase em inglês (\"Ela adora café quente.\"):",
        "contextSentence": "She loves hot ______.",
        "contextSentencePt": "Tradução: \"Ela adora café quente.\"",
        "audioPhrase": "She loves hot coffee.",
        "options": [
          "Cheese",
          "Rice",
          "Coffee",
          "Bread"
        ],
        "correctAnswer": "Coffee",
        "explanation": "Frase completa: \"She loves hot coffee.\" (Ela adora café quente.) — Coffee (\"có-fi\") = Café.",
        "phoneticHint": "\"có-fi\" /ˈkɔː.fi/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p5-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🧀",
        "prompt": "✍️ Complete a frase em inglês (\"Coloque queijo no pão.\"):",
        "contextSentence": "Put ______ on the bread.",
        "contextSentencePt": "Tradução: \"Coloque queijo no pão.\"",
        "audioPhrase": "Put cheese on the bread.",
        "options": [
          "Cheese",
          "Coffee",
          "Juice",
          "Rice"
        ],
        "correctAnswer": "Cheese",
        "explanation": "Frase completa: \"Put cheese on the bread.\" (Coloque queijo no pão.) — Cheese (\"tchíz\") = Queijo.",
        "phoneticHint": "\"tchíz\" /tʃiːz/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p6",
    "worldId": 0,
    "phaseNumber": 6,
    "themeId": "food",
    "themeTitle": "Comida",
    "frequencyLevel": "Módulo 2 • Comuns",
    "vocabItems": [
      {
        "word": "Butter",
        "pt": "Manteiga",
        "simplePronunciation": "bâ-ter",
        "phonetic": "/ˈbʌt.ər/",
        "exampleEn": "Spread butter on the toast.",
        "examplePt": "Passe manteiga na torrada.",
        "emoji": "🧈"
      },
      {
        "word": "Fish",
        "pt": "Peixe",
        "simplePronunciation": "fíx",
        "phonetic": "/fɪʃ/",
        "exampleEn": "Grilled fish is very healthy.",
        "examplePt": "Peixe grelhado é muito saudável.",
        "emoji": "🐟"
      },
      {
        "word": "Soup",
        "pt": "Sopa",
        "simplePronunciation": "súp",
        "phonetic": "/suːp/",
        "exampleEn": "Hot soup is great on cold nights.",
        "examplePt": "Sopa quente é ótima em noites frias.",
        "emoji": "🍲"
      },
      {
        "word": "Salad",
        "pt": "Salada",
        "simplePronunciation": "sé-lad",
        "phonetic": "/ˈsæl.əd/",
        "exampleEn": "I made a fresh green salad.",
        "examplePt": "Eu fiz uma salada verde fresca.",
        "emoji": "🥗"
      },
      {
        "word": "Pasta",
        "pt": "Macarrão",
        "simplePronunciation": "pás-ta",
        "phonetic": "/ˈpɑː.stə/",
        "exampleEn": "We love pasta with tomato sauce.",
        "examplePt": "Adoramos macarrão com molho de tomate.",
        "emoji": "🍝"
      },
      {
        "word": "Pizza",
        "pt": "Pizza",
        "simplePronunciation": "pít-sa",
        "phonetic": "/ˈpiːt.sə/",
        "exampleEn": "Let us share a cheese pizza.",
        "examplePt": "Vamos dividir uma pizza de queijo.",
        "emoji": "🍕"
      },
      {
        "word": "Cake",
        "pt": "Bolo",
        "simplePronunciation": "kêik",
        "phonetic": "/keɪk/",
        "exampleEn": "She baked a chocolate cake.",
        "examplePt": "Ela assou um bolo de chocolate.",
        "emoji": "🍰"
      },
      {
        "word": "Orange",
        "pt": "Laranja",
        "simplePronunciation": "ó-rendj",
        "phonetic": "/ˈɔːr.ɪndʒ/",
        "exampleEn": "This orange is very juicy.",
        "examplePt": "Esta laranja tem muito suco.",
        "emoji": "🍊"
      },
      {
        "word": "Tomato",
        "pt": "Tomate",
        "simplePronunciation": "to-mêi-tou",
        "phonetic": "/təˈmeɪ.toʊ/",
        "exampleEn": "Slice the red tomato.",
        "examplePt": "Corte o tomate vermelho em fatias.",
        "emoji": "🍅"
      },
      {
        "word": "Potato",
        "pt": "Batata",
        "simplePronunciation": "po-têi-tou",
        "phonetic": "/pəˈteɪ.toʊ/",
        "exampleEn": "Baked potatoes are delicious.",
        "examplePt": "Batatas assadas são deliciosas.",
        "emoji": "🥔"
      },
      {
        "word": "Sugar",
        "pt": "Açúcar",
        "simplePronunciation": "xú-gar",
        "phonetic": "/ˈʃʊɡ.ər/",
        "exampleEn": "Do you want sugar in your coffee?",
        "examplePt": "Você quer açúcar no seu café?",
        "emoji": "🥄"
      },
      {
        "word": "Salt",
        "pt": "Sal",
        "simplePronunciation": "sólt",
        "phonetic": "/sɔːlt/",
        "exampleEn": "Add a little salt to the food.",
        "examplePt": "Coloque um pouco de sal na comida.",
        "emoji": "🧂"
      }
    ],
    "title": "Comida • Módulo 2: Palavras Comuns",
    "subtitle": "Nível 2/4 • 12 comidas muito comuns nas refeições",
    "pedagogicalObjective": "Aprender pratos, temperos básicos e alimentos muito frequentes na mesa.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Comida — Módulo 2 • Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p6-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Butter",
        "visualEmoji": "🧈",
        "visualOptions": [
          {
            "text": "Salt",
            "emoji": "🧂",
            "label": "Salt (\"sólt\")",
            "translationPt": "Sal"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato (\"po-têi-tou\")",
            "translationPt": "Batata"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup (\"súp\")",
            "translationPt": "Sopa"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter (\"bâ-ter\")",
            "translationPt": "Manteiga"
          }
        ],
        "options": [
          "Salt",
          "Potato",
          "Soup",
          "Butter"
        ],
        "correctAnswer": "Butter",
        "explanation": "Butter (\"bâ-ter\") = Manteiga. Exemplo: \"Spread butter on the toast.\" (Passe manteiga na torrada.)",
        "phoneticHint": "\"bâ-ter\" /ˈbʌt.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Fish",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish (\"fíx\")",
            "translationPt": "Peixe"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato (\"to-mêi-tou\")",
            "translationPt": "Tomate"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza (\"pít-sa\")",
            "translationPt": "Pizza"
          },
          {
            "text": "Sugar",
            "emoji": "🥄",
            "label": "Sugar (\"xú-gar\")",
            "translationPt": "Açúcar"
          }
        ],
        "options": [
          "Fish",
          "Tomato",
          "Pizza",
          "Sugar"
        ],
        "correctAnswer": "Fish",
        "explanation": "Fish (\"fíx\") = Peixe. Exemplo: \"Grilled fish is very healthy.\" (Peixe grelhado é muito saudável.)",
        "phoneticHint": "\"fíx\" /fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Soup",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza (\"pít-sa\")",
            "translationPt": "Pizza"
          },
          {
            "text": "Salt",
            "emoji": "🧂",
            "label": "Salt (\"sólt\")",
            "translationPt": "Sal"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato (\"po-têi-tou\")",
            "translationPt": "Batata"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup (\"súp\")",
            "translationPt": "Sopa"
          }
        ],
        "options": [
          "Pizza",
          "Salt",
          "Potato",
          "Soup"
        ],
        "correctAnswer": "Soup",
        "explanation": "Soup (\"súp\") = Sopa. Exemplo: \"Hot soup is great on cold nights.\" (Sopa quente é ótima em noites frias.)",
        "phoneticHint": "\"súp\" /suːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Salad",
        "visualEmoji": "🥗",
        "visualOptions": [
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish (\"fíx\")",
            "translationPt": "Peixe"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup (\"súp\")",
            "translationPt": "Sopa"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad (\"sé-lad\")",
            "translationPt": "Salada"
          },
          {
            "text": "Sugar",
            "emoji": "🥄",
            "label": "Sugar (\"xú-gar\")",
            "translationPt": "Açúcar"
          }
        ],
        "options": [
          "Fish",
          "Soup",
          "Salad",
          "Sugar"
        ],
        "correctAnswer": "Salad",
        "explanation": "Salad (\"sé-lad\") = Salada. Exemplo: \"I made a fresh green salad.\" (Eu fiz uma salada verde fresca.)",
        "phoneticHint": "\"sé-lad\" /ˈsæl.əd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pasta",
        "visualEmoji": "🍝",
        "visualOptions": [
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta (\"pás-ta\")",
            "translationPt": "Macarrão"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato (\"po-têi-tou\")",
            "translationPt": "Batata"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato (\"to-mêi-tou\")",
            "translationPt": "Tomate"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza (\"pít-sa\")",
            "translationPt": "Pizza"
          }
        ],
        "options": [
          "Pasta",
          "Potato",
          "Tomato",
          "Pizza"
        ],
        "correctAnswer": "Pasta",
        "explanation": "Pasta (\"pás-ta\") = Macarrão. Exemplo: \"We love pasta with tomato sauce.\" (Adoramos macarrão com molho de tomate.)",
        "phoneticHint": "\"pás-ta\" /ˈpɑː.stə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato (\"po-têi-tou\")",
            "translationPt": "Batata"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza (\"pít-sa\")",
            "translationPt": "Pizza"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup (\"súp\")",
            "translationPt": "Sopa"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad (\"sé-lad\")",
            "translationPt": "Salada"
          }
        ],
        "options": [
          "Potato",
          "Pizza",
          "Soup",
          "Salad"
        ],
        "correctAnswer": "Pizza",
        "explanation": "Pizza (\"pít-sa\") = Pizza. Exemplo: \"Let us share a cheese pizza.\" (Vamos dividir uma pizza de queijo.)",
        "phoneticHint": "\"pít-sa\" /ˈpiːt.sə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Cake",
        "visualEmoji": "🍰",
        "visualOptions": [
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza (\"pít-sa\")",
            "translationPt": "Pizza"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake (\"kêik\")",
            "translationPt": "Bolo"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta (\"pás-ta\")",
            "translationPt": "Macarrão"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange (\"ó-rendj\")",
            "translationPt": "Laranja"
          }
        ],
        "options": [
          "Pizza",
          "Cake",
          "Pasta",
          "Orange"
        ],
        "correctAnswer": "Cake",
        "explanation": "Cake (\"kêik\") = Bolo. Exemplo: \"She baked a chocolate cake.\" (Ela assou um bolo de chocolate.)",
        "phoneticHint": "\"kêik\" /keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Orange",
        "visualEmoji": "🍊",
        "visualOptions": [
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad (\"sé-lad\")",
            "translationPt": "Salada"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza (\"pít-sa\")",
            "translationPt": "Pizza"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish (\"fíx\")",
            "translationPt": "Peixe"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange (\"ó-rendj\")",
            "translationPt": "Laranja"
          }
        ],
        "options": [
          "Salad",
          "Pizza",
          "Fish",
          "Orange"
        ],
        "correctAnswer": "Orange",
        "explanation": "Orange (\"ó-rendj\") = Laranja. Exemplo: \"This orange is very juicy.\" (Esta laranja tem muito suco.)",
        "phoneticHint": "\"ó-rendj\" /ˈɔːr.ɪndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato (\"po-têi-tou\")",
            "translationPt": "Batata"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza (\"pít-sa\")",
            "translationPt": "Pizza"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato (\"to-mêi-tou\")",
            "translationPt": "Tomate"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish (\"fíx\")",
            "translationPt": "Peixe"
          }
        ],
        "options": [
          "Potato",
          "Pizza",
          "Tomato",
          "Fish"
        ],
        "correctAnswer": "Tomato",
        "explanation": "Tomato (\"to-mêi-tou\") = Tomate. Exemplo: \"Slice the red tomato.\" (Corte o tomate vermelho em fatias.)",
        "phoneticHint": "\"to-mêi-tou\" /təˈmeɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Potato",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato (\"po-têi-tou\")",
            "translationPt": "Batata"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter (\"bâ-ter\")",
            "translationPt": "Manteiga"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake (\"kêik\")",
            "translationPt": "Bolo"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup (\"súp\")",
            "translationPt": "Sopa"
          }
        ],
        "options": [
          "Potato",
          "Butter",
          "Cake",
          "Soup"
        ],
        "correctAnswer": "Potato",
        "explanation": "Potato (\"po-têi-tou\") = Batata. Exemplo: \"Baked potatoes are delicious.\" (Batatas assadas são deliciosas.)",
        "phoneticHint": "\"po-têi-tou\" /pəˈteɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sugar",
        "visualEmoji": "🥄",
        "visualOptions": [
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish (\"fíx\")",
            "translationPt": "Peixe"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta (\"pás-ta\")",
            "translationPt": "Macarrão"
          },
          {
            "text": "Sugar",
            "emoji": "🥄",
            "label": "Sugar (\"xú-gar\")",
            "translationPt": "Açúcar"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup (\"súp\")",
            "translationPt": "Sopa"
          }
        ],
        "options": [
          "Fish",
          "Pasta",
          "Sugar",
          "Soup"
        ],
        "correctAnswer": "Sugar",
        "explanation": "Sugar (\"xú-gar\") = Açúcar. Exemplo: \"Do you want sugar in your coffee?\" (Você quer açúcar no seu café?)",
        "phoneticHint": "\"xú-gar\" /ˈʃʊɡ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Salt",
        "visualEmoji": "🧂",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato (\"po-têi-tou\")",
            "translationPt": "Batata"
          },
          {
            "text": "Salt",
            "emoji": "🧂",
            "label": "Salt (\"sólt\")",
            "translationPt": "Sal"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad (\"sé-lad\")",
            "translationPt": "Salada"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange (\"ó-rendj\")",
            "translationPt": "Laranja"
          }
        ],
        "options": [
          "Potato",
          "Salt",
          "Salad",
          "Orange"
        ],
        "correctAnswer": "Salt",
        "explanation": "Salt (\"sólt\") = Sal. Exemplo: \"Add a little salt to the food.\" (Coloque um pouco de sal na comida.)",
        "phoneticHint": "\"sólt\" /sɔːlt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Fish",
        "contextSentencePt": "Pronúncia simplificada: \"fíx\"",
        "options": [
          "Tomato — Tomate",
          "Potato — Batata",
          "Orange — Laranja",
          "Fish — Peixe"
        ],
        "correctAnswer": "Fish — Peixe",
        "explanation": "Você ouviu \"Fish\" (\"fíx\") = Peixe. Frase: \"Grilled fish is very healthy.\" (Peixe grelhado é muito saudável.)",
        "phoneticHint": "\"fíx\" /fɪʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Pizza",
        "contextSentencePt": "Pronúncia simplificada: \"pít-sa\"",
        "options": [
          "Cake — Bolo",
          "Tomato — Tomate",
          "Pizza — Pizza",
          "Orange — Laranja"
        ],
        "correctAnswer": "Pizza — Pizza",
        "explanation": "Você ouviu \"Pizza\" (\"pít-sa\") = Pizza. Frase: \"Let us share a cheese pizza.\" (Vamos dividir uma pizza de queijo.)",
        "phoneticHint": "\"pít-sa\" /ˈpiːt.sə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Potato",
        "contextSentencePt": "Pronúncia simplificada: \"po-têi-tou\"",
        "options": [
          "Potato — Batata",
          "Pasta — Macarrão",
          "Soup — Sopa",
          "Pizza — Pizza"
        ],
        "correctAnswer": "Potato — Batata",
        "explanation": "Você ouviu \"Potato\" (\"po-têi-tou\") = Batata. Frase: \"Baked potatoes are delicious.\" (Batatas assadas são deliciosas.)",
        "phoneticHint": "\"po-têi-tou\" /pəˈteɪ.toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🍲",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Soup\" (pronúncia: \"súp\")?",
        "audioPhrase": "Soup",
        "contextSentence": "Hot soup is great on cold nights.",
        "contextSentencePt": "Sopa quente é ótima em noites frias.",
        "options": [
          "Peixe",
          "Sopa",
          "Tomate",
          "Açúcar"
        ],
        "correctAnswer": "Sopa",
        "explanation": "\"Soup\" (\"súp\") significa \"Sopa\".",
        "phoneticHint": "\"súp\" /suːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🍰",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Cake\" (pronúncia: \"kêik\")?",
        "audioPhrase": "Cake",
        "contextSentence": "She baked a chocolate cake.",
        "contextSentencePt": "Ela assou um bolo de chocolate.",
        "options": [
          "Pizza",
          "Bolo",
          "Peixe",
          "Tomate"
        ],
        "correctAnswer": "Bolo",
        "explanation": "\"Cake\" (\"kêik\") significa \"Bolo\".",
        "phoneticHint": "\"kêik\" /keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🥄",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Sugar\" (pronúncia: \"xú-gar\")?",
        "audioPhrase": "Sugar",
        "contextSentence": "Do you want sugar in your coffee?",
        "contextSentencePt": "Você quer açúcar no seu café?",
        "options": [
          "Peixe",
          "Batata",
          "Pizza",
          "Açúcar"
        ],
        "correctAnswer": "Açúcar",
        "explanation": "\"Sugar\" (\"xú-gar\") significa \"Açúcar\".",
        "phoneticHint": "\"xú-gar\" /ˈʃʊɡ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🥗",
        "prompt": "✍️ Complete a frase em inglês (\"Eu fiz uma salada verde fresca.\"):",
        "contextSentence": "I made a fresh green ______.",
        "contextSentencePt": "Tradução: \"Eu fiz uma salada verde fresca.\"",
        "audioPhrase": "I made a fresh green salad.",
        "options": [
          "Orange",
          "Tomato",
          "Salad",
          "Cake"
        ],
        "correctAnswer": "Salad",
        "explanation": "Frase completa: \"I made a fresh green salad.\" (Eu fiz uma salada verde fresca.) — Salad (\"sé-lad\") = Salada.",
        "phoneticHint": "\"sé-lad\" /ˈsæl.əd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p6-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🍊",
        "prompt": "✍️ Complete a frase em inglês (\"Esta laranja tem muito suco.\"):",
        "contextSentence": "This ______ is very juicy.",
        "contextSentencePt": "Tradução: \"Esta laranja tem muito suco.\"",
        "audioPhrase": "This orange is very juicy.",
        "options": [
          "Orange",
          "Soup",
          "Fish",
          "Potato"
        ],
        "correctAnswer": "Orange",
        "explanation": "Frase completa: \"This orange is very juicy.\" (Esta laranja tem muito suco.) — Orange (\"ó-rendj\") = Laranja.",
        "phoneticHint": "\"ó-rendj\" /ˈɔːr.ɪndʒ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p6-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🧂",
        "prompt": "✍️ Complete a frase em inglês (\"Coloque um pouco de sal na comida.\"):",
        "contextSentence": "Add a little ______ to the food.",
        "contextSentencePt": "Tradução: \"Coloque um pouco de sal na comida.\"",
        "audioPhrase": "Add a little salt to the food.",
        "options": [
          "Salad",
          "Orange",
          "Salt",
          "Sugar"
        ],
        "correctAnswer": "Salt",
        "explanation": "Frase completa: \"Add a little salt to the food.\" (Coloque um pouco de sal na comida.) — Salt (\"sólt\") = Sal.",
        "phoneticHint": "\"sólt\" /sɔːlt/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p7",
    "worldId": 0,
    "phaseNumber": 7,
    "themeId": "food",
    "themeTitle": "Comida",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "vocabItems": [
      {
        "word": "Oil",
        "pt": "Óleo / Azeite",
        "simplePronunciation": "ói-ol",
        "phonetic": "/ɔɪl/",
        "exampleEn": "Cook the vegetables with olive oil.",
        "examplePt": "Prepare os legumes com azeite.",
        "emoji": "🫒"
      },
      {
        "word": "Onion",
        "pt": "Cebola",
        "simplePronunciation": "â-nion",
        "phonetic": "/ˈʌn.jən/",
        "exampleEn": "Chop the onion for the sauce.",
        "examplePt": "Pique a cebola para o molho.",
        "emoji": "🧅"
      },
      {
        "word": "Garlic",
        "pt": "Alho",
        "simplePronunciation": "gár-lik",
        "phonetic": "/ˈɡɑːr.lɪk/",
        "exampleEn": "Garlic gives great flavor to food.",
        "examplePt": "O alho dá um ótimo sabor à comida.",
        "emoji": "🧄"
      },
      {
        "word": "Carrot",
        "pt": "Cenoura",
        "simplePronunciation": "ké-rot",
        "phonetic": "/ˈkær.ət/",
        "exampleEn": "Carrots are crunchy and sweet.",
        "examplePt": "Cenouras são crocantes e doces.",
        "emoji": "🥕"
      },
      {
        "word": "Lettuce",
        "pt": "Alface",
        "simplePronunciation": "lé-tis",
        "phonetic": "/ˈlet.ɪs/",
        "exampleEn": "Wash the green lettuce leaves.",
        "examplePt": "Lave as folhas verdes de alface.",
        "emoji": "🥬"
      },
      {
        "word": "Lemon",
        "pt": "Limão",
        "simplePronunciation": "lé-mon",
        "phonetic": "/ˈlem.ən/",
        "exampleEn": "Lemon tastes sour and fresh.",
        "examplePt": "O limão tem gosto azedo e refrescante.",
        "emoji": "🍋"
      },
      {
        "word": "Strawberry",
        "pt": "Morango",
        "simplePronunciation": "stró-bé-ri",
        "phonetic": "/ˈstrɔː.ber.i/",
        "exampleEn": "Red strawberries are my favorite fruit.",
        "examplePt": "Morangos vermelhos são minha fruta favorita.",
        "emoji": "🍓"
      },
      {
        "word": "Grape",
        "pt": "Uva",
        "simplePronunciation": "grêip",
        "phonetic": "/ɡreɪp/",
        "exampleEn": "Wash the bunch of grapes.",
        "examplePt": "Lave o cacho de uvas.",
        "emoji": "🍇"
      },
      {
        "word": "Watermelon",
        "pt": "Melancia",
        "simplePronunciation": "uó-ter-mé-lon",
        "phonetic": "/ˈwɔː.tərˌmel.ən/",
        "exampleEn": "Cold watermelon is great in summer.",
        "examplePt": "Melancia gelada é ótima no verão.",
        "emoji": "🍉"
      },
      {
        "word": "Sandwich",
        "pt": "Sanduíche",
        "simplePronunciation": "sénd-uitch",
        "phonetic": "/ˈsæn.wɪtʃ/",
        "exampleEn": "I packed a cheese sandwich.",
        "examplePt": "Eu preparei um sanduíche de queijo.",
        "emoji": "🥪"
      },
      {
        "word": "Ice cream",
        "pt": "Sorvete",
        "simplePronunciation": "áis crím",
        "phonetic": "/ˈaɪs kriːm/",
        "exampleEn": "Kids love chocolate ice cream.",
        "examplePt": "As crianças adoram sorvete de chocolate.",
        "emoji": "🍦"
      },
      {
        "word": "Yogurt",
        "pt": "Iogurte",
        "simplePronunciation": "iôu-gârt",
        "phonetic": "/ˈjoʊ.ɡərt/",
        "exampleEn": "I eat yogurt with fruit.",
        "examplePt": "Eu como iogurte com frutas.",
        "emoji": "🥣"
      }
    ],
    "title": "Comida • Módulo 3: Palavras Intermediárias",
    "subtitle": "Nível 3/4 • 12 frutas, verduras e lanches do cotidiano",
    "pedagogicalObjective": "Ampliar o vocabulário alimentar com vegetais, frutas populares e lanches.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Comida — Módulo 3 • Intermediárias: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p7-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Oil",
        "visualEmoji": "🫒",
        "visualOptions": [
          {
            "text": "Oil",
            "emoji": "🫒",
            "label": "Oil (\"ói-ol\")",
            "translationPt": "Óleo / Azeite"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic (\"gár-lik\")",
            "translationPt": "Alho"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt (\"iôu-gârt\")",
            "translationPt": "Iogurte"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape (\"grêip\")",
            "translationPt": "Uva"
          }
        ],
        "options": [
          "Oil",
          "Garlic",
          "Yogurt",
          "Grape"
        ],
        "correctAnswer": "Oil",
        "explanation": "Oil (\"ói-ol\") = Óleo / Azeite. Exemplo: \"Cook the vegetables with olive oil.\" (Prepare os legumes com azeite.)",
        "phoneticHint": "\"ói-ol\" /ɔɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Onion",
        "visualEmoji": "🧅",
        "visualOptions": [
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream (\"áis crím\")",
            "translationPt": "Sorvete"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon (\"uó-ter-mé-lon\")",
            "translationPt": "Melancia"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce (\"lé-tis\")",
            "translationPt": "Alface"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion (\"â-nion\")",
            "translationPt": "Cebola"
          }
        ],
        "options": [
          "Ice cream",
          "Watermelon",
          "Lettuce",
          "Onion"
        ],
        "correctAnswer": "Onion",
        "explanation": "Onion (\"â-nion\") = Cebola. Exemplo: \"Chop the onion for the sauce.\" (Pique a cebola para o molho.)",
        "phoneticHint": "\"â-nion\" /ˈʌn.jən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
        "visualOptions": [
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce (\"lé-tis\")",
            "translationPt": "Alface"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot (\"ké-rot\")",
            "translationPt": "Cenoura"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic (\"gár-lik\")",
            "translationPt": "Alho"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon (\"lé-mon\")",
            "translationPt": "Limão"
          }
        ],
        "options": [
          "Lettuce",
          "Carrot",
          "Garlic",
          "Lemon"
        ],
        "correctAnswer": "Garlic",
        "explanation": "Garlic (\"gár-lik\") = Alho. Exemplo: \"Garlic gives great flavor to food.\" (O alho dá um ótimo sabor à comida.)",
        "phoneticHint": "\"gár-lik\" /ˈɡɑːr.lɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
        "visualOptions": [
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot (\"ké-rot\")",
            "translationPt": "Cenoura"
          },
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream (\"áis crím\")",
            "translationPt": "Sorvete"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape (\"grêip\")",
            "translationPt": "Uva"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce (\"lé-tis\")",
            "translationPt": "Alface"
          }
        ],
        "options": [
          "Carrot",
          "Ice cream",
          "Grape",
          "Lettuce"
        ],
        "correctAnswer": "Carrot",
        "explanation": "Carrot (\"ké-rot\") = Cenoura. Exemplo: \"Carrots are crunchy and sweet.\" (Cenouras são crocantes e doces.)",
        "phoneticHint": "\"ké-rot\" /ˈkær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Lettuce",
        "visualEmoji": "🥬",
        "visualOptions": [
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt (\"iôu-gârt\")",
            "translationPt": "Iogurte"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce (\"lé-tis\")",
            "translationPt": "Alface"
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich (\"sénd-uitch\")",
            "translationPt": "Sanduíche"
          },
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream (\"áis crím\")",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Yogurt",
          "Lettuce",
          "Sandwich",
          "Ice cream"
        ],
        "correctAnswer": "Lettuce",
        "explanation": "Lettuce (\"lé-tis\") = Alface. Exemplo: \"Wash the green lettuce leaves.\" (Lave as folhas verdes de alface.)",
        "phoneticHint": "\"lé-tis\" /ˈlet.ɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Lemon",
        "visualEmoji": "🍋",
        "visualOptions": [
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape (\"grêip\")",
            "translationPt": "Uva"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon (\"lé-mon\")",
            "translationPt": "Limão"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic (\"gár-lik\")",
            "translationPt": "Alho"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry (\"stró-bé-ri\")",
            "translationPt": "Morango"
          }
        ],
        "options": [
          "Grape",
          "Lemon",
          "Garlic",
          "Strawberry"
        ],
        "correctAnswer": "Lemon",
        "explanation": "Lemon (\"lé-mon\") = Limão. Exemplo: \"Lemon tastes sour and fresh.\" (O limão tem gosto azedo e refrescante.)",
        "phoneticHint": "\"lé-mon\" /ˈlem.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Strawberry",
        "visualEmoji": "🍓",
        "visualOptions": [
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich (\"sénd-uitch\")",
            "translationPt": "Sanduíche"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce (\"lé-tis\")",
            "translationPt": "Alface"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt (\"iôu-gârt\")",
            "translationPt": "Iogurte"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry (\"stró-bé-ri\")",
            "translationPt": "Morango"
          }
        ],
        "options": [
          "Sandwich",
          "Lettuce",
          "Yogurt",
          "Strawberry"
        ],
        "correctAnswer": "Strawberry",
        "explanation": "Strawberry (\"stró-bé-ri\") = Morango. Exemplo: \"Red strawberries are my favorite fruit.\" (Morangos vermelhos são minha fruta favorita.)",
        "phoneticHint": "\"stró-bé-ri\" /ˈstrɔː.ber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Grape",
        "visualEmoji": "🍇",
        "visualOptions": [
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream (\"áis crím\")",
            "translationPt": "Sorvete"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon (\"lé-mon\")",
            "translationPt": "Limão"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape (\"grêip\")",
            "translationPt": "Uva"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot (\"ké-rot\")",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Ice cream",
          "Lemon",
          "Grape",
          "Carrot"
        ],
        "correctAnswer": "Grape",
        "explanation": "Grape (\"grêip\") = Uva. Exemplo: \"Wash the bunch of grapes.\" (Lave o cacho de uvas.)",
        "phoneticHint": "\"grêip\" /ɡreɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Watermelon",
        "visualEmoji": "🍉",
        "visualOptions": [
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon (\"uó-ter-mé-lon\")",
            "translationPt": "Melancia"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt (\"iôu-gârt\")",
            "translationPt": "Iogurte"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce (\"lé-tis\")",
            "translationPt": "Alface"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic (\"gár-lik\")",
            "translationPt": "Alho"
          }
        ],
        "options": [
          "Watermelon",
          "Yogurt",
          "Lettuce",
          "Garlic"
        ],
        "correctAnswer": "Watermelon",
        "explanation": "Watermelon (\"uó-ter-mé-lon\") = Melancia. Exemplo: \"Cold watermelon is great in summer.\" (Melancia gelada é ótima no verão.)",
        "phoneticHint": "\"uó-ter-mé-lon\" /ˈwɔː.tərˌmel.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sandwich",
        "visualEmoji": "🥪",
        "visualOptions": [
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic (\"gár-lik\")",
            "translationPt": "Alho"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon (\"lé-mon\")",
            "translationPt": "Limão"
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich (\"sénd-uitch\")",
            "translationPt": "Sanduíche"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape (\"grêip\")",
            "translationPt": "Uva"
          }
        ],
        "options": [
          "Garlic",
          "Lemon",
          "Sandwich",
          "Grape"
        ],
        "correctAnswer": "Sandwich",
        "explanation": "Sandwich (\"sénd-uitch\") = Sanduíche. Exemplo: \"I packed a cheese sandwich.\" (Eu preparei um sanduíche de queijo.)",
        "phoneticHint": "\"sénd-uitch\" /ˈsæn.wɪtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ice cream",
        "visualEmoji": "🍦",
        "visualOptions": [
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon (\"uó-ter-mé-lon\")",
            "translationPt": "Melancia"
          },
          {
            "text": "Ice cream",
            "emoji": "🍦",
            "label": "Ice cream (\"áis crím\")",
            "translationPt": "Sorvete"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion (\"â-nion\")",
            "translationPt": "Cebola"
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich (\"sénd-uitch\")",
            "translationPt": "Sanduíche"
          }
        ],
        "options": [
          "Watermelon",
          "Ice cream",
          "Onion",
          "Sandwich"
        ],
        "correctAnswer": "Ice cream",
        "explanation": "Ice cream (\"áis crím\") = Sorvete. Exemplo: \"Kids love chocolate ice cream.\" (As crianças adoram sorvete de chocolate.)",
        "phoneticHint": "\"áis crím\" /ˈaɪs kriːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Yogurt",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape (\"grêip\")",
            "translationPt": "Uva"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon (\"lé-mon\")",
            "translationPt": "Limão"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry (\"stró-bé-ri\")",
            "translationPt": "Morango"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt (\"iôu-gârt\")",
            "translationPt": "Iogurte"
          }
        ],
        "options": [
          "Grape",
          "Lemon",
          "Strawberry",
          "Yogurt"
        ],
        "correctAnswer": "Yogurt",
        "explanation": "Yogurt (\"iôu-gârt\") = Iogurte. Exemplo: \"I eat yogurt with fruit.\" (Eu como iogurte com frutas.)",
        "phoneticHint": "\"iôu-gârt\" /ˈjoʊ.ɡərt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Onion",
        "contextSentencePt": "Pronúncia simplificada: \"â-nion\"",
        "options": [
          "Lemon — Limão",
          "Oil — Óleo / Azeite",
          "Onion — Cebola",
          "Garlic — Alho"
        ],
        "correctAnswer": "Onion — Cebola",
        "explanation": "Você ouviu \"Onion\" (\"â-nion\") = Cebola. Frase: \"Chop the onion for the sauce.\" (Pique a cebola para o molho.)",
        "phoneticHint": "\"â-nion\" /ˈʌn.jən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Lemon",
        "contextSentencePt": "Pronúncia simplificada: \"lé-mon\"",
        "options": [
          "Lemon — Limão",
          "Sandwich — Sanduíche",
          "Grape — Uva",
          "Ice cream — Sorvete"
        ],
        "correctAnswer": "Lemon — Limão",
        "explanation": "Você ouviu \"Lemon\" (\"lé-mon\") = Limão. Frase: \"Lemon tastes sour and fresh.\" (O limão tem gosto azedo e refrescante.)",
        "phoneticHint": "\"lé-mon\" /ˈlem.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Sandwich",
        "contextSentencePt": "Pronúncia simplificada: \"sénd-uitch\"",
        "options": [
          "Lettuce — Alface",
          "Sandwich — Sanduíche",
          "Grape — Uva",
          "Lemon — Limão"
        ],
        "correctAnswer": "Sandwich — Sanduíche",
        "explanation": "Você ouviu \"Sandwich\" (\"sénd-uitch\") = Sanduíche. Frase: \"I packed a cheese sandwich.\" (Eu preparei um sanduíche de queijo.)",
        "phoneticHint": "\"sénd-uitch\" /ˈsæn.wɪtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🧄",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Garlic\" (pronúncia: \"gár-lik\")?",
        "audioPhrase": "Garlic",
        "contextSentence": "Garlic gives great flavor to food.",
        "contextSentencePt": "O alho dá um ótimo sabor à comida.",
        "options": [
          "Morango",
          "Alho",
          "Uva",
          "Cebola"
        ],
        "correctAnswer": "Alho",
        "explanation": "\"Garlic\" (\"gár-lik\") significa \"Alho\".",
        "phoneticHint": "\"gár-lik\" /ˈɡɑːr.lɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🍓",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Strawberry\" (pronúncia: \"stró-bé-ri\")?",
        "audioPhrase": "Strawberry",
        "contextSentence": "Red strawberries are my favorite fruit.",
        "contextSentencePt": "Morangos vermelhos são minha fruta favorita.",
        "options": [
          "Alho",
          "Sanduíche",
          "Limão",
          "Morango"
        ],
        "correctAnswer": "Morango",
        "explanation": "\"Strawberry\" (\"stró-bé-ri\") significa \"Morango\".",
        "phoneticHint": "\"stró-bé-ri\" /ˈstrɔː.ber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🍦",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Ice cream\" (pronúncia: \"áis crím\")?",
        "audioPhrase": "Ice cream",
        "contextSentence": "Kids love chocolate ice cream.",
        "contextSentencePt": "As crianças adoram sorvete de chocolate.",
        "options": [
          "Cebola",
          "Sanduíche",
          "Sorvete",
          "Morango"
        ],
        "correctAnswer": "Sorvete",
        "explanation": "\"Ice cream\" (\"áis crím\") significa \"Sorvete\".",
        "phoneticHint": "\"áis crím\" /ˈaɪs kriːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🥕",
        "prompt": "✍️ Complete a frase em inglês (\"Cenouras são crocantes e doces.\"):",
        "contextSentence": "______ are crunchy and sweet.",
        "contextSentencePt": "Tradução: \"Cenouras são crocantes e doces.\"",
        "audioPhrase": "Carrots are crunchy and sweet.",
        "options": [
          "Carrot",
          "Lemon",
          "Onion",
          "Garlic"
        ],
        "correctAnswer": "Carrot",
        "explanation": "Frase completa: \"Carrots are crunchy and sweet.\" (Cenouras são crocantes e doces.) — Carrot (\"ké-rot\") = Cenoura.",
        "phoneticHint": "\"ké-rot\" /ˈkær.ət/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p7-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🍇",
        "prompt": "✍️ Complete a frase em inglês (\"Lave o cacho de uvas.\"):",
        "contextSentence": "Wash the bunch of ______.",
        "contextSentencePt": "Tradução: \"Lave o cacho de uvas.\"",
        "audioPhrase": "Wash the bunch of grapes.",
        "options": [
          "Garlic",
          "Onion",
          "Grape",
          "Oil"
        ],
        "correctAnswer": "Grape",
        "explanation": "Frase completa: \"Wash the bunch of grapes.\" (Lave o cacho de uvas.) — Grape (\"grêip\") = Uva.",
        "phoneticHint": "\"grêip\" /ɡreɪp/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p7-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🥣",
        "prompt": "✍️ Complete a frase em inglês (\"Eu como iogurte com frutas.\"):",
        "contextSentence": "I eat ______ with fruit.",
        "contextSentencePt": "Tradução: \"Eu como iogurte com frutas.\"",
        "audioPhrase": "I eat yogurt with fruit.",
        "options": [
          "Grape",
          "Yogurt",
          "Onion",
          "Oil"
        ],
        "correctAnswer": "Yogurt",
        "explanation": "Frase completa: \"I eat yogurt with fruit.\" (Eu como iogurte com frutas.) — Yogurt (\"iôu-gârt\") = Iogurte.",
        "phoneticHint": "\"iôu-gârt\" /ˈjoʊ.ɡərt/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p8",
    "worldId": 0,
    "phaseNumber": 8,
    "themeId": "food",
    "themeTitle": "Comida",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "vocabItems": [
      {
        "word": "Pineapple",
        "pt": "Abacaxi",
        "simplePronunciation": "pái-né-pol",
        "phonetic": "/ˈpaɪnˌæp.əl/",
        "exampleEn": "Pineapple is a tropical fruit.",
        "examplePt": "O abacaxi é uma fruta tropical.",
        "emoji": "🍍"
      },
      {
        "word": "Mango",
        "pt": "Manga",
        "simplePronunciation": "mén-gou",
        "phonetic": "/ˈmæŋ.ɡoʊ/",
        "exampleEn": "This ripe mango is very sweet.",
        "examplePt": "Esta manga madura está muito doce.",
        "emoji": "🥭"
      },
      {
        "word": "Avocado",
        "pt": "Abacate",
        "simplePronunciation": "a-vo-cá-dou",
        "phonetic": "/ˌæv.əˈkɑː.doʊ/",
        "exampleEn": "Avocado is rich and creamy.",
        "examplePt": "O abacate é rico e cremoso.",
        "emoji": "🥑"
      },
      {
        "word": "Corn",
        "pt": "Milho",
        "simplePronunciation": "córn",
        "phonetic": "/kɔːrn/",
        "exampleEn": "Cooked yellow corn is delicious.",
        "examplePt": "Milho amarelo cozido é delicioso.",
        "emoji": "🌽"
      },
      {
        "word": "Broccoli",
        "pt": "Brócolis",
        "simplePronunciation": "bró-co-li",
        "phonetic": "/ˈbrɑː.kəl.i/",
        "exampleEn": "Steamed broccoli is very nutritious.",
        "examplePt": "Brócolis no vapor é muito nutritivo.",
        "emoji": "🥦"
      },
      {
        "word": "Cucumber",
        "pt": "Pepino",
        "simplePronunciation": "kiú-câm-ber",
        "phonetic": "/ˈkjuː.kʌm.bər/",
        "exampleEn": "Put cucumber slices in the salad.",
        "examplePt": "Coloque rodelas de pepino na salada.",
        "emoji": "🥒"
      },
      {
        "word": "Mushroom",
        "pt": "Cogumelo",
        "simplePronunciation": "mâx-rum",
        "phonetic": "/ˈmʌʃ.ruːm/",
        "exampleEn": "Add mushrooms to the pasta sauce.",
        "examplePt": "Adicione cogumelos ao molho de macarrão.",
        "emoji": "🍄"
      },
      {
        "word": "Pepper",
        "pt": "Pimenta / Pimentão",
        "simplePronunciation": "pé-per",
        "phonetic": "/ˈpep.ər/",
        "exampleEn": "Red pepper adds color to the dish.",
        "examplePt": "O pimentão vermelho dá cor ao prato.",
        "emoji": "🫑"
      },
      {
        "word": "Honey",
        "pt": "Mel",
        "simplePronunciation": "râ-ni",
        "phonetic": "/ˈhʌn.i/",
        "exampleEn": "Bees make golden honey.",
        "examplePt": "As abelhas produzem mel dourado.",
        "emoji": "🍯"
      },
      {
        "word": "Jam",
        "pt": "Geleia",
        "simplePronunciation": "djém",
        "phonetic": "/dʒæm/",
        "exampleEn": "Spread strawberry jam on the bread.",
        "examplePt": "Passe geleia de morango no pão.",
        "emoji": "🍓"
      },
      {
        "word": "Flour",
        "pt": "Farinha",
        "simplePronunciation": "fláu-er",
        "phonetic": "/ˈflaʊ.ər/",
        "exampleEn": "Mix wheat flour and eggs for the cake.",
        "examplePt": "Misture farinha de trigo e ovos para o bolo.",
        "emoji": "🥣"
      },
      {
        "word": "Peanut",
        "pt": "Amendoim",
        "simplePronunciation": "pí-nât",
        "phonetic": "/ˈpiː.nʌt/",
        "exampleEn": "Roasted peanuts are a crunchy snack.",
        "examplePt": "Amendoins torrados são um lanche crocante.",
        "emoji": "🥜"
      }
    ],
    "title": "Comida • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Nível 4/4 • 12 ingredientes, frutas tropicais e vegetais específicos",
    "pedagogicalObjective": "Conhecer frutas tropicais, legumes específicos e ingredientes de culinária.",
    "type": "boss",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Comida — Módulo 4 • Menos Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p8-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pineapple",
        "visualEmoji": "🍍",
        "visualOptions": [
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut (\"pí-nât\")",
            "translationPt": "Amendoim"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber (\"kiú-câm-ber\")",
            "translationPt": "Pepino"
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado (\"a-vo-cá-dou\")",
            "translationPt": "Abacate"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple (\"pái-né-pol\")",
            "translationPt": "Abacaxi"
          }
        ],
        "options": [
          "Peanut",
          "Cucumber",
          "Avocado",
          "Pineapple"
        ],
        "correctAnswer": "Pineapple",
        "explanation": "Pineapple (\"pái-né-pol\") = Abacaxi. Exemplo: \"Pineapple is a tropical fruit.\" (O abacaxi é uma fruta tropical.)",
        "phoneticHint": "\"pái-né-pol\" /ˈpaɪnˌæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Mango",
        "visualEmoji": "🥭",
        "visualOptions": [
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour (\"fláu-er\")",
            "translationPt": "Farinha"
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn (\"córn\")",
            "translationPt": "Milho"
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango (\"mén-gou\")",
            "translationPt": "Manga"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey (\"râ-ni\")",
            "translationPt": "Mel"
          }
        ],
        "options": [
          "Flour",
          "Corn",
          "Mango",
          "Honey"
        ],
        "correctAnswer": "Mango",
        "explanation": "Mango (\"mén-gou\") = Manga. Exemplo: \"This ripe mango is very sweet.\" (Esta manga madura está muito doce.)",
        "phoneticHint": "\"mén-gou\" /ˈmæŋ.ɡoʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Avocado",
        "visualEmoji": "🥑",
        "visualOptions": [
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado (\"a-vo-cá-dou\")",
            "translationPt": "Abacate"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple (\"pái-né-pol\")",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber (\"kiú-câm-ber\")",
            "translationPt": "Pepino"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut (\"pí-nât\")",
            "translationPt": "Amendoim"
          }
        ],
        "options": [
          "Avocado",
          "Pineapple",
          "Cucumber",
          "Peanut"
        ],
        "correctAnswer": "Avocado",
        "explanation": "Avocado (\"a-vo-cá-dou\") = Abacate. Exemplo: \"Avocado is rich and creamy.\" (O abacate é rico e cremoso.)",
        "phoneticHint": "\"a-vo-cá-dou\" /ˌæv.əˈkɑː.doʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Corn",
        "visualEmoji": "🌽",
        "visualOptions": [
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber (\"kiú-câm-ber\")",
            "translationPt": "Pepino"
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn (\"córn\")",
            "translationPt": "Milho"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut (\"pí-nât\")",
            "translationPt": "Amendoim"
          },
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam (\"djém\")",
            "translationPt": "Geleia"
          }
        ],
        "options": [
          "Cucumber",
          "Corn",
          "Peanut",
          "Jam"
        ],
        "correctAnswer": "Corn",
        "explanation": "Corn (\"córn\") = Milho. Exemplo: \"Cooked yellow corn is delicious.\" (Milho amarelo cozido é delicioso.)",
        "phoneticHint": "\"córn\" /kɔːrn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Broccoli",
        "visualEmoji": "🥦",
        "visualOptions": [
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour (\"fláu-er\")",
            "translationPt": "Farinha"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli (\"bró-co-li\")",
            "translationPt": "Brócolis"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple (\"pái-né-pol\")",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut (\"pí-nât\")",
            "translationPt": "Amendoim"
          }
        ],
        "options": [
          "Flour",
          "Broccoli",
          "Pineapple",
          "Peanut"
        ],
        "correctAnswer": "Broccoli",
        "explanation": "Broccoli (\"bró-co-li\") = Brócolis. Exemplo: \"Steamed broccoli is very nutritious.\" (Brócolis no vapor é muito nutritivo.)",
        "phoneticHint": "\"bró-co-li\" /ˈbrɑː.kəl.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Cucumber",
        "visualEmoji": "🥒",
        "visualOptions": [
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper (\"pé-per\")",
            "translationPt": "Pimenta / Pimentão"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey (\"râ-ni\")",
            "translationPt": "Mel"
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom (\"mâx-rum\")",
            "translationPt": "Cogumelo"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber (\"kiú-câm-ber\")",
            "translationPt": "Pepino"
          }
        ],
        "options": [
          "Pepper",
          "Honey",
          "Mushroom",
          "Cucumber"
        ],
        "correctAnswer": "Cucumber",
        "explanation": "Cucumber (\"kiú-câm-ber\") = Pepino. Exemplo: \"Put cucumber slices in the salad.\" (Coloque rodelas de pepino na salada.)",
        "phoneticHint": "\"kiú-câm-ber\" /ˈkjuː.kʌm.bər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Mushroom",
        "visualEmoji": "🍄",
        "visualOptions": [
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut (\"pí-nât\")",
            "translationPt": "Amendoim"
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper (\"pé-per\")",
            "translationPt": "Pimenta / Pimentão"
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom (\"mâx-rum\")",
            "translationPt": "Cogumelo"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey (\"râ-ni\")",
            "translationPt": "Mel"
          }
        ],
        "options": [
          "Peanut",
          "Pepper",
          "Mushroom",
          "Honey"
        ],
        "correctAnswer": "Mushroom",
        "explanation": "Mushroom (\"mâx-rum\") = Cogumelo. Exemplo: \"Add mushrooms to the pasta sauce.\" (Adicione cogumelos ao molho de macarrão.)",
        "phoneticHint": "\"mâx-rum\" /ˈmʌʃ.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pepper",
        "visualEmoji": "🫑",
        "visualOptions": [
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper (\"pé-per\")",
            "translationPt": "Pimenta / Pimentão"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli (\"bró-co-li\")",
            "translationPt": "Brócolis"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey (\"râ-ni\")",
            "translationPt": "Mel"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber (\"kiú-câm-ber\")",
            "translationPt": "Pepino"
          }
        ],
        "options": [
          "Pepper",
          "Broccoli",
          "Honey",
          "Cucumber"
        ],
        "correctAnswer": "Pepper",
        "explanation": "Pepper (\"pé-per\") = Pimenta / Pimentão. Exemplo: \"Red pepper adds color to the dish.\" (O pimentão vermelho dá cor ao prato.)",
        "phoneticHint": "\"pé-per\" /ˈpep.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Honey",
        "visualEmoji": "🍯",
        "visualOptions": [
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado (\"a-vo-cá-dou\")",
            "translationPt": "Abacate"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple (\"pái-né-pol\")",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey (\"râ-ni\")",
            "translationPt": "Mel"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut (\"pí-nât\")",
            "translationPt": "Amendoim"
          }
        ],
        "options": [
          "Avocado",
          "Pineapple",
          "Honey",
          "Peanut"
        ],
        "correctAnswer": "Honey",
        "explanation": "Honey (\"râ-ni\") = Mel. Exemplo: \"Bees make golden honey.\" (As abelhas produzem mel dourado.)",
        "phoneticHint": "\"râ-ni\" /ˈhʌn.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Jam",
        "visualEmoji": "🍓",
        "visualOptions": [
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour (\"fláu-er\")",
            "translationPt": "Farinha"
          },
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam (\"djém\")",
            "translationPt": "Geleia"
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom (\"mâx-rum\")",
            "translationPt": "Cogumelo"
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper (\"pé-per\")",
            "translationPt": "Pimenta / Pimentão"
          }
        ],
        "options": [
          "Flour",
          "Jam",
          "Mushroom",
          "Pepper"
        ],
        "correctAnswer": "Jam",
        "explanation": "Jam (\"djém\") = Geleia. Exemplo: \"Spread strawberry jam on the bread.\" (Passe geleia de morango no pão.)",
        "phoneticHint": "\"djém\" /dʒæm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Flour",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper (\"pé-per\")",
            "translationPt": "Pimenta / Pimentão"
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado (\"a-vo-cá-dou\")",
            "translationPt": "Abacate"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber (\"kiú-câm-ber\")",
            "translationPt": "Pepino"
          },
          {
            "text": "Flour",
            "emoji": "🥣",
            "label": "Flour (\"fláu-er\")",
            "translationPt": "Farinha"
          }
        ],
        "options": [
          "Pepper",
          "Avocado",
          "Cucumber",
          "Flour"
        ],
        "correctAnswer": "Flour",
        "explanation": "Flour (\"fláu-er\") = Farinha. Exemplo: \"Mix wheat flour and eggs for the cake.\" (Misture farinha de trigo e ovos para o bolo.)",
        "phoneticHint": "\"fláu-er\" /ˈflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Peanut",
        "visualEmoji": "🥜",
        "visualOptions": [
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut (\"pí-nât\")",
            "translationPt": "Amendoim"
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado (\"a-vo-cá-dou\")",
            "translationPt": "Abacate"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber (\"kiú-câm-ber\")",
            "translationPt": "Pepino"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli (\"bró-co-li\")",
            "translationPt": "Brócolis"
          }
        ],
        "options": [
          "Peanut",
          "Avocado",
          "Cucumber",
          "Broccoli"
        ],
        "correctAnswer": "Peanut",
        "explanation": "Peanut (\"pí-nât\") = Amendoim. Exemplo: \"Roasted peanuts are a crunchy snack.\" (Amendoins torrados são um lanche crocante.)",
        "phoneticHint": "\"pí-nât\" /ˈpiː.nʌt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Mango",
        "contextSentencePt": "Pronúncia simplificada: \"mén-gou\"",
        "options": [
          "Mango — Manga",
          "Pepper — Pimenta / Pimentão",
          "Avocado — Abacate",
          "Honey — Mel"
        ],
        "correctAnswer": "Mango — Manga",
        "explanation": "Você ouviu \"Mango\" (\"mén-gou\") = Manga. Frase: \"This ripe mango is very sweet.\" (Esta manga madura está muito doce.)",
        "phoneticHint": "\"mén-gou\" /ˈmæŋ.ɡoʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Cucumber",
        "contextSentencePt": "Pronúncia simplificada: \"kiú-câm-ber\"",
        "options": [
          "Flour — Farinha",
          "Cucumber — Pepino",
          "Broccoli — Brócolis",
          "Pineapple — Abacaxi"
        ],
        "correctAnswer": "Cucumber — Pepino",
        "explanation": "Você ouviu \"Cucumber\" (\"kiú-câm-ber\") = Pepino. Frase: \"Put cucumber slices in the salad.\" (Coloque rodelas de pepino na salada.)",
        "phoneticHint": "\"kiú-câm-ber\" /ˈkjuː.kʌm.bər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Jam",
        "contextSentencePt": "Pronúncia simplificada: \"djém\"",
        "options": [
          "Pineapple — Abacaxi",
          "Jam — Geleia",
          "Flour — Farinha",
          "Peanut — Amendoim"
        ],
        "correctAnswer": "Jam — Geleia",
        "explanation": "Você ouviu \"Jam\" (\"djém\") = Geleia. Frase: \"Spread strawberry jam on the bread.\" (Passe geleia de morango no pão.)",
        "phoneticHint": "\"djém\" /dʒæm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🥑",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Avocado\" (pronúncia: \"a-vo-cá-dou\")?",
        "audioPhrase": "Avocado",
        "contextSentence": "Avocado is rich and creamy.",
        "contextSentencePt": "O abacate é rico e cremoso.",
        "options": [
          "Milho",
          "Brócolis",
          "Mel",
          "Abacate"
        ],
        "correctAnswer": "Abacate",
        "explanation": "\"Avocado\" (\"a-vo-cá-dou\") significa \"Abacate\".",
        "phoneticHint": "\"a-vo-cá-dou\" /ˌæv.əˈkɑː.doʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🍄",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Mushroom\" (pronúncia: \"mâx-rum\")?",
        "audioPhrase": "Mushroom",
        "contextSentence": "Add mushrooms to the pasta sauce.",
        "contextSentencePt": "Adicione cogumelos ao molho de macarrão.",
        "options": [
          "Abacaxi",
          "Mel",
          "Cogumelo",
          "Brócolis"
        ],
        "correctAnswer": "Cogumelo",
        "explanation": "\"Mushroom\" (\"mâx-rum\") significa \"Cogumelo\".",
        "phoneticHint": "\"mâx-rum\" /ˈmʌʃ.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🥣",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Flour\" (pronúncia: \"fláu-er\")?",
        "audioPhrase": "Flour",
        "contextSentence": "Mix wheat flour and eggs for the cake.",
        "contextSentencePt": "Misture farinha de trigo e ovos para o bolo.",
        "options": [
          "Farinha",
          "Cogumelo",
          "Abacaxi",
          "Pepino"
        ],
        "correctAnswer": "Farinha",
        "explanation": "\"Flour\" (\"fláu-er\") significa \"Farinha\".",
        "phoneticHint": "\"fláu-er\" /ˈflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🌽",
        "prompt": "✍️ Complete a frase em inglês (\"Milho amarelo cozido é delicioso.\"):",
        "contextSentence": "Cooked yellow ______ is delicious.",
        "contextSentencePt": "Tradução: \"Milho amarelo cozido é delicioso.\"",
        "audioPhrase": "Cooked yellow corn is delicious.",
        "options": [
          "Honey",
          "Flour",
          "Corn",
          "Avocado"
        ],
        "correctAnswer": "Corn",
        "explanation": "Frase completa: \"Cooked yellow corn is delicious.\" (Milho amarelo cozido é delicioso.) — Corn (\"córn\") = Milho.",
        "phoneticHint": "\"córn\" /kɔːrn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p8-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🫑",
        "prompt": "✍️ Complete a frase em inglês (\"O pimentão vermelho dá cor ao prato.\"):",
        "contextSentence": "Red ______ adds color to the dish.",
        "contextSentencePt": "Tradução: \"O pimentão vermelho dá cor ao prato.\"",
        "audioPhrase": "Red pepper adds color to the dish.",
        "options": [
          "Flour",
          "Pepper",
          "Peanut",
          "Avocado"
        ],
        "correctAnswer": "Pepper",
        "explanation": "Frase completa: \"Red pepper adds color to the dish.\" (O pimentão vermelho dá cor ao prato.) — Pepper (\"pé-per\") = Pimenta / Pimentão.",
        "phoneticHint": "\"pé-per\" /ˈpep.ər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p8-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🥜",
        "prompt": "✍️ Complete a frase em inglês (\"Amendoins torrados são um lanche crocante.\"):",
        "contextSentence": "Roasted ______ are a crunchy snack.",
        "contextSentencePt": "Tradução: \"Amendoins torrados são um lanche crocante.\"",
        "audioPhrase": "Roasted peanuts are a crunchy snack.",
        "options": [
          "Honey",
          "Jam",
          "Cucumber",
          "Peanut"
        ],
        "correctAnswer": "Peanut",
        "explanation": "Frase completa: \"Roasted peanuts are a crunchy snack.\" (Amendoins torrados são um lanche crocante.) — Peanut (\"pí-nât\") = Amendoim.",
        "phoneticHint": "\"pí-nât\" /ˈpiː.nʌt/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p9",
    "worldId": 0,
    "phaseNumber": 9,
    "themeId": "body",
    "themeTitle": "Corpo Humano",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "vocabItems": [
      {
        "word": "Head",
        "pt": "Cabeça",
        "simplePronunciation": "réd",
        "phonetic": "/hed/",
        "exampleEn": "Nod your head to say yes.",
        "examplePt": "Balance a cabeça para dizer sim.",
        "emoji": "🧑"
      },
      {
        "word": "Hand",
        "pt": "Mão",
        "simplePronunciation": "rénd",
        "phonetic": "/hænd/",
        "exampleEn": "Raise your hand to speak.",
        "examplePt": "Levante a mão para falar.",
        "emoji": "✋"
      },
      {
        "word": "Foot",
        "pt": "Pé",
        "simplePronunciation": "fút",
        "phonetic": "/fʊt/",
        "exampleEn": "Put your shoe on your foot.",
        "examplePt": "Coloque o sapato no pé.",
        "emoji": "🦶"
      },
      {
        "word": "Eye",
        "pt": "Olho",
        "simplePronunciation": "ái",
        "phonetic": "/aɪ/",
        "exampleEn": "She has brown eyes.",
        "examplePt": "Ela tem olhos castanhos.",
        "emoji": "👁️"
      },
      {
        "word": "Ear",
        "pt": "Orelha / Ouvido",
        "simplePronunciation": "ír",
        "phonetic": "/ɪr/",
        "exampleEn": "We listen with our ears.",
        "examplePt": "Nós ouvimos com nossos ouvidos.",
        "emoji": "👂"
      },
      {
        "word": "Nose",
        "pt": "Nariz",
        "simplePronunciation": "nôuz",
        "phonetic": "/noʊz/",
        "exampleEn": "Breathe through your nose.",
        "examplePt": "Respire pelo nariz.",
        "emoji": "👃"
      },
      {
        "word": "Mouth",
        "pt": "Boca",
        "simplePronunciation": "máuth",
        "phonetic": "/maʊθ/",
        "exampleEn": "Open your mouth to speak.",
        "examplePt": "Abra a boca para falar.",
        "emoji": "👄"
      },
      {
        "word": "Hair",
        "pt": "Cabelo",
        "simplePronunciation": "rér",
        "phonetic": "/her/",
        "exampleEn": "She brushes her long hair.",
        "examplePt": "Ela escova seu cabelo comprido.",
        "emoji": "💇"
      },
      {
        "word": "Face",
        "pt": "Rosto",
        "simplePronunciation": "fêis",
        "phonetic": "/feɪs/",
        "exampleEn": "Wash your face in the morning.",
        "examplePt": "Lave o rosto de manhã.",
        "emoji": "😊"
      },
      {
        "word": "Arm",
        "pt": "Braço",
        "simplePronunciation": "árm",
        "phonetic": "/ɑːrm/",
        "exampleEn": "Stretch your arms high.",
        "examplePt": "Estique seus braços para o alto.",
        "emoji": "💪"
      },
      {
        "word": "Leg",
        "pt": "Perna",
        "simplePronunciation": "lég",
        "phonetic": "/leɡ/",
        "exampleEn": "He has strong legs for running.",
        "examplePt": "Ele tem pernas fortes para correr.",
        "emoji": "🦵"
      },
      {
        "word": "Body",
        "pt": "Corpo",
        "simplePronunciation": "bó-di",
        "phonetic": "/ˈbɑː.di/",
        "exampleEn": "Exercise is good for your body.",
        "examplePt": "Exercício faz bem para o seu corpo.",
        "emoji": "🧍"
      }
    ],
    "title": "Corpo Humano • Módulo 1: Palavras Essenciais",
    "subtitle": "Nível 1/4 • As 12 partes principais do corpo mais usadas no dia a dia",
    "pedagogicalObjective": "Reconhecer e pronunciar as 12 partes fundamentais do corpo humano.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Corpo Humano — Módulo 1 • Essenciais: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p9-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Head",
        "visualEmoji": "🧑",
        "visualOptions": [
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth (\"máuth\")",
            "translationPt": "Boca"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear (\"ír\")",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          },
          {
            "text": "Body",
            "emoji": "🧍",
            "label": "Body (\"bó-di\")",
            "translationPt": "Corpo"
          }
        ],
        "options": [
          "Mouth",
          "Ear",
          "Head",
          "Body"
        ],
        "correctAnswer": "Head",
        "explanation": "Head (\"réd\") = Cabeça. Exemplo: \"Nod your head to say yes.\" (Balance a cabeça para dizer sim.)",
        "phoneticHint": "\"réd\" /hed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand (\"rénd\")",
            "translationPt": "Mão"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose (\"nôuz\")",
            "translationPt": "Nariz"
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth (\"máuth\")",
            "translationPt": "Boca"
          }
        ],
        "options": [
          "Hand",
          "Nose",
          "Head",
          "Mouth"
        ],
        "correctAnswer": "Hand",
        "explanation": "Hand (\"rénd\") = Mão. Exemplo: \"Raise your hand to speak.\" (Levante a mão para falar.)",
        "phoneticHint": "\"rénd\" /hænd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Foot",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot (\"fút\")",
            "translationPt": "Pé"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear (\"ír\")",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair (\"rér\")",
            "translationPt": "Cabelo"
          }
        ],
        "options": [
          "Head",
          "Foot",
          "Ear",
          "Hair"
        ],
        "correctAnswer": "Foot",
        "explanation": "Foot (\"fút\") = Pé. Exemplo: \"Put your shoe on your foot.\" (Coloque o sapato no pé.)",
        "phoneticHint": "\"fút\" /fʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Eye",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm (\"árm\")",
            "translationPt": "Braço"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye (\"ái\")",
            "translationPt": "Olho"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg (\"lég\")",
            "translationPt": "Perna"
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          }
        ],
        "options": [
          "Arm",
          "Eye",
          "Leg",
          "Head"
        ],
        "correctAnswer": "Eye",
        "explanation": "Eye (\"ái\") = Olho. Exemplo: \"She has brown eyes.\" (Ela tem olhos castanhos.)",
        "phoneticHint": "\"ái\" /aɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ear",
        "visualEmoji": "👂",
        "visualOptions": [
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg (\"lég\")",
            "translationPt": "Perna"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm (\"árm\")",
            "translationPt": "Braço"
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear (\"ír\")",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Leg",
          "Arm",
          "Head",
          "Ear"
        ],
        "correctAnswer": "Ear",
        "explanation": "Ear (\"ír\") = Orelha / Ouvido. Exemplo: \"We listen with our ears.\" (Nós ouvimos com nossos ouvidos.)",
        "phoneticHint": "\"ír\" /ɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Nose",
        "visualEmoji": "👃",
        "visualOptions": [
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear (\"ír\")",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair (\"rér\")",
            "translationPt": "Cabelo"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose (\"nôuz\")",
            "translationPt": "Nariz"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg (\"lég\")",
            "translationPt": "Perna"
          }
        ],
        "options": [
          "Ear",
          "Hair",
          "Nose",
          "Leg"
        ],
        "correctAnswer": "Nose",
        "explanation": "Nose (\"nôuz\") = Nariz. Exemplo: \"Breathe through your nose.\" (Respire pelo nariz.)",
        "phoneticHint": "\"nôuz\" /noʊz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Mouth",
        "visualEmoji": "👄",
        "visualOptions": [
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth (\"máuth\")",
            "translationPt": "Boca"
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg (\"lég\")",
            "translationPt": "Perna"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose (\"nôuz\")",
            "translationPt": "Nariz"
          }
        ],
        "options": [
          "Mouth",
          "Head",
          "Leg",
          "Nose"
        ],
        "correctAnswer": "Mouth",
        "explanation": "Mouth (\"máuth\") = Boca. Exemplo: \"Open your mouth to speak.\" (Abra a boca para falar.)",
        "phoneticHint": "\"máuth\" /maʊθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Hair",
        "visualEmoji": "💇",
        "visualOptions": [
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear (\"ír\")",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair (\"rér\")",
            "translationPt": "Cabelo"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand (\"rénd\")",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "Head",
          "Ear",
          "Hair",
          "Hand"
        ],
        "correctAnswer": "Hair",
        "explanation": "Hair (\"rér\") = Cabelo. Exemplo: \"She brushes her long hair.\" (Ela escova seu cabelo comprido.)",
        "phoneticHint": "\"rér\" /her/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Face",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg (\"lég\")",
            "translationPt": "Perna"
          },
          {
            "text": "Face",
            "emoji": "😊",
            "label": "Face (\"fêis\")",
            "translationPt": "Rosto"
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth (\"máuth\")",
            "translationPt": "Boca"
          }
        ],
        "options": [
          "Leg",
          "Face",
          "Head",
          "Mouth"
        ],
        "correctAnswer": "Face",
        "explanation": "Face (\"fêis\") = Rosto. Exemplo: \"Wash your face in the morning.\" (Lave o rosto de manhã.)",
        "phoneticHint": "\"fêis\" /feɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Arm",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand (\"rénd\")",
            "translationPt": "Mão"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose (\"nôuz\")",
            "translationPt": "Nariz"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair (\"rér\")",
            "translationPt": "Cabelo"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm (\"árm\")",
            "translationPt": "Braço"
          }
        ],
        "options": [
          "Hand",
          "Nose",
          "Hair",
          "Arm"
        ],
        "correctAnswer": "Arm",
        "explanation": "Arm (\"árm\") = Braço. Exemplo: \"Stretch your arms high.\" (Estique seus braços para o alto.)",
        "phoneticHint": "\"árm\" /ɑːrm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Leg",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg (\"lég\")",
            "translationPt": "Perna"
          },
          {
            "text": "Body",
            "emoji": "🧍",
            "label": "Body (\"bó-di\")",
            "translationPt": "Corpo"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth (\"máuth\")",
            "translationPt": "Boca"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose (\"nôuz\")",
            "translationPt": "Nariz"
          }
        ],
        "options": [
          "Leg",
          "Body",
          "Mouth",
          "Nose"
        ],
        "correctAnswer": "Leg",
        "explanation": "Leg (\"lég\") = Perna. Exemplo: \"He has strong legs for running.\" (Ele tem pernas fortes para correr.)",
        "phoneticHint": "\"lég\" /leɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Body",
        "visualEmoji": "🧍",
        "visualOptions": [
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth (\"máuth\")",
            "translationPt": "Boca"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye (\"ái\")",
            "translationPt": "Olho"
          },
          {
            "text": "Head",
            "emoji": "🧑",
            "label": "Head (\"réd\")",
            "translationPt": "Cabeça"
          },
          {
            "text": "Body",
            "emoji": "🧍",
            "label": "Body (\"bó-di\")",
            "translationPt": "Corpo"
          }
        ],
        "options": [
          "Mouth",
          "Eye",
          "Head",
          "Body"
        ],
        "correctAnswer": "Body",
        "explanation": "Body (\"bó-di\") = Corpo. Exemplo: \"Exercise is good for your body.\" (Exercício faz bem para o seu corpo.)",
        "phoneticHint": "\"bó-di\" /ˈbɑː.di/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Hand",
        "contextSentencePt": "Pronúncia simplificada: \"rénd\"",
        "options": [
          "Arm — Braço",
          "Hand — Mão",
          "Hair — Cabelo",
          "Head — Cabeça"
        ],
        "correctAnswer": "Hand — Mão",
        "explanation": "Você ouviu \"Hand\" (\"rénd\") = Mão. Frase: \"Raise your hand to speak.\" (Levante a mão para falar.)",
        "phoneticHint": "\"rénd\" /hænd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Nose",
        "contextSentencePt": "Pronúncia simplificada: \"nôuz\"",
        "options": [
          "Arm — Braço",
          "Nose — Nariz",
          "Face — Rosto",
          "Hair — Cabelo"
        ],
        "correctAnswer": "Nose — Nariz",
        "explanation": "Você ouviu \"Nose\" (\"nôuz\") = Nariz. Frase: \"Breathe through your nose.\" (Respire pelo nariz.)",
        "phoneticHint": "\"nôuz\" /noʊz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Arm",
        "contextSentencePt": "Pronúncia simplificada: \"árm\"",
        "options": [
          "Face — Rosto",
          "Nose — Nariz",
          "Mouth — Boca",
          "Arm — Braço"
        ],
        "correctAnswer": "Arm — Braço",
        "explanation": "Você ouviu \"Arm\" (\"árm\") = Braço. Frase: \"Stretch your arms high.\" (Estique seus braços para o alto.)",
        "phoneticHint": "\"árm\" /ɑːrm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🦶",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Foot\" (pronúncia: \"fút\")?",
        "audioPhrase": "Foot",
        "contextSentence": "Put your shoe on your foot.",
        "contextSentencePt": "Coloque o sapato no pé.",
        "options": [
          "Mão",
          "Boca",
          "Pé",
          "Olho"
        ],
        "correctAnswer": "Pé",
        "explanation": "\"Foot\" (\"fút\") significa \"Pé\".",
        "phoneticHint": "\"fút\" /fʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "👄",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Mouth\" (pronúncia: \"máuth\")?",
        "audioPhrase": "Mouth",
        "contextSentence": "Open your mouth to speak.",
        "contextSentencePt": "Abra a boca para falar.",
        "options": [
          "Boca",
          "Rosto",
          "Mão",
          "Perna"
        ],
        "correctAnswer": "Boca",
        "explanation": "\"Mouth\" (\"máuth\") significa \"Boca\".",
        "phoneticHint": "\"máuth\" /maʊθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🦵",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Leg\" (pronúncia: \"lég\")?",
        "audioPhrase": "Leg",
        "contextSentence": "He has strong legs for running.",
        "contextSentencePt": "Ele tem pernas fortes para correr.",
        "options": [
          "Cabelo",
          "Orelha / Ouvido",
          "Perna",
          "Olho"
        ],
        "correctAnswer": "Perna",
        "explanation": "\"Leg\" (\"lég\") significa \"Perna\".",
        "phoneticHint": "\"lég\" /leɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-fill-1",
        "type": "fill-blank",
        "visualEmoji": "👁️",
        "prompt": "✍️ Complete a frase em inglês (\"Ela tem olhos castanhos.\"):",
        "contextSentence": "She has brown ______.",
        "contextSentencePt": "Tradução: \"Ela tem olhos castanhos.\"",
        "audioPhrase": "She has brown eyes.",
        "options": [
          "Arm",
          "Eye",
          "Body",
          "Face"
        ],
        "correctAnswer": "Eye",
        "explanation": "Frase completa: \"She has brown eyes.\" (Ela tem olhos castanhos.) — Eye (\"ái\") = Olho.",
        "phoneticHint": "\"ái\" /aɪ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p9-fill-2",
        "type": "fill-blank",
        "visualEmoji": "💇",
        "prompt": "✍️ Complete a frase em inglês (\"Ela escova seu cabelo comprido.\"):",
        "contextSentence": "She brushes her long ______.",
        "contextSentencePt": "Tradução: \"Ela escova seu cabelo comprido.\"",
        "audioPhrase": "She brushes her long hair.",
        "options": [
          "Head",
          "Nose",
          "Face",
          "Hair"
        ],
        "correctAnswer": "Hair",
        "explanation": "Frase completa: \"She brushes her long hair.\" (Ela escova seu cabelo comprido.) — Hair (\"rér\") = Cabelo.",
        "phoneticHint": "\"rér\" /her/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p9-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🧍",
        "prompt": "✍️ Complete a frase em inglês (\"Exercício faz bem para o seu corpo.\"):",
        "contextSentence": "Exercise is good for your ______.",
        "contextSentencePt": "Tradução: \"Exercício faz bem para o seu corpo.\"",
        "audioPhrase": "Exercise is good for your body.",
        "options": [
          "Body",
          "Hair",
          "Nose",
          "Leg"
        ],
        "correctAnswer": "Body",
        "explanation": "Frase completa: \"Exercise is good for your body.\" (Exercício faz bem para o seu corpo.) — Body (\"bó-di\") = Corpo.",
        "phoneticHint": "\"bó-di\" /ˈbɑː.di/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p10",
    "worldId": 0,
    "phaseNumber": 10,
    "themeId": "body",
    "themeTitle": "Corpo Humano",
    "frequencyLevel": "Módulo 2 • Comuns",
    "vocabItems": [
      {
        "word": "Tooth",
        "pt": "Dente",
        "simplePronunciation": "túth",
        "phonetic": "/tuːθ/",
        "exampleEn": "Brush every tooth after meals.",
        "examplePt": "Escove cada dente após as refeições.",
        "emoji": "🦷"
      },
      {
        "word": "Finger",
        "pt": "Dedo da mão",
        "simplePronunciation": "fín-guer",
        "phonetic": "/ˈfɪŋ.ɡər/",
        "exampleEn": "We have five fingers on each hand.",
        "examplePt": "Temos cinco dedos em cada mão.",
        "emoji": "☝️"
      },
      {
        "word": "Back",
        "pt": "Costas",
        "simplePronunciation": "bék",
        "phonetic": "/bæk/",
        "exampleEn": "Keep your back straight when sitting.",
        "examplePt": "Mantenha as costas retas ao sentar.",
        "emoji": "🧍"
      },
      {
        "word": "Heart",
        "pt": "Coração",
        "simplePronunciation": "rárt",
        "phonetic": "/hɑːrt/",
        "exampleEn": "Your heart beats fast when you run.",
        "examplePt": "Seu coração bate rápido quando você corre.",
        "emoji": "❤️"
      },
      {
        "word": "Neck",
        "pt": "Pescoço",
        "simplePronunciation": "nék",
        "phonetic": "/nek/",
        "exampleEn": "Wrap a warm scarf around your neck.",
        "examplePt": "Enrole um cachecol quentinho no pescoço.",
        "emoji": "🧣"
      },
      {
        "word": "Shoulder",
        "pt": "Ombro",
        "simplePronunciation": "xôul-der",
        "phonetic": "/ˈʃoʊl.dər/",
        "exampleEn": "Carry the bag on your shoulder.",
        "examplePt": "Carregue a bolsa no ombro.",
        "emoji": "🤷"
      },
      {
        "word": "Knee",
        "pt": "Joelho",
        "simplePronunciation": "ní",
        "phonetic": "/niː/",
        "exampleEn": "Bend your knees slowly.",
        "examplePt": "Dobre seus joelhos devagar.",
        "emoji": "🦵"
      },
      {
        "word": "Stomach",
        "pt": "Estômago / Barriga",
        "simplePronunciation": "stâ-mak",
        "phonetic": "/ˈstʌm.ək/",
        "exampleEn": "My stomach is full after dinner.",
        "examplePt": "Meu estômago está cheio após o jantar.",
        "emoji": "🤰"
      },
      {
        "word": "Skin",
        "pt": "Pele",
        "simplePronunciation": "skín",
        "phonetic": "/skɪn/",
        "exampleEn": "Drink water for healthy skin.",
        "examplePt": "Beba água para ter uma pele saudável.",
        "emoji": "✋"
      },
      {
        "word": "Voice",
        "pt": "Voz",
        "simplePronunciation": "vóis",
        "phonetic": "/vɔɪs/",
        "exampleEn": "The teacher has a sweet voice.",
        "examplePt": "A professora tem uma voz meiga.",
        "emoji": "🗣️"
      },
      {
        "word": "Blood",
        "pt": "Sangue",
        "simplePronunciation": "blâd",
        "phonetic": "/blʌd/",
        "exampleEn": "The heart pumps blood through the body.",
        "examplePt": "O coração bombeia sangue pelo corpo.",
        "emoji": "🩸"
      },
      {
        "word": "Bone",
        "pt": "Osso",
        "simplePronunciation": "bôun",
        "phonetic": "/boʊn/",
        "exampleEn": "Calcium keeps our bones strong.",
        "examplePt": "O cálcio mantém nossos ossos fortes.",
        "emoji": "🦴"
      }
    ],
    "title": "Corpo Humano • Módulo 2: Palavras Comuns",
    "subtitle": "Nível 2/4 • 12 partes comuns em conversas e consultas médicas",
    "pedagogicalObjective": "Identificar partes do corpo frequentes ao falar de saúde, movimento e bem-estar.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Corpo Humano — Módulo 2 • Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p10-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tooth",
        "visualEmoji": "🦷",
        "visualOptions": [
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth (\"túth\")",
            "translationPt": "Dente"
          },
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck (\"nék\")",
            "translationPt": "Pescoço"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart (\"rárt\")",
            "translationPt": "Coração"
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach (\"stâ-mak\")",
            "translationPt": "Estômago / Barriga"
          }
        ],
        "options": [
          "Tooth",
          "Neck",
          "Heart",
          "Stomach"
        ],
        "correctAnswer": "Tooth",
        "explanation": "Tooth (\"túth\") = Dente. Exemplo: \"Brush every tooth after meals.\" (Escove cada dente após as refeições.)",
        "phoneticHint": "\"túth\" /tuːθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Finger",
        "visualEmoji": "☝️",
        "visualOptions": [
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck (\"nék\")",
            "translationPt": "Pescoço"
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger (\"fín-guer\")",
            "translationPt": "Dedo da mão"
          },
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee (\"ní\")",
            "translationPt": "Joelho"
          },
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice (\"vóis\")",
            "translationPt": "Voz"
          }
        ],
        "options": [
          "Neck",
          "Finger",
          "Knee",
          "Voice"
        ],
        "correctAnswer": "Finger",
        "explanation": "Finger (\"fín-guer\") = Dedo da mão. Exemplo: \"We have five fingers on each hand.\" (Temos cinco dedos em cada mão.)",
        "phoneticHint": "\"fín-guer\" /ˈfɪŋ.ɡər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Back",
        "visualEmoji": "🧍",
        "visualOptions": [
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin (\"skín\")",
            "translationPt": "Pele"
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back (\"bék\")",
            "translationPt": "Costas"
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach (\"stâ-mak\")",
            "translationPt": "Estômago / Barriga"
          },
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee (\"ní\")",
            "translationPt": "Joelho"
          }
        ],
        "options": [
          "Skin",
          "Back",
          "Stomach",
          "Knee"
        ],
        "correctAnswer": "Back",
        "explanation": "Back (\"bék\") = Costas. Exemplo: \"Keep your back straight when sitting.\" (Mantenha as costas retas ao sentar.)",
        "phoneticHint": "\"bék\" /bæk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Heart",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice (\"vóis\")",
            "translationPt": "Voz"
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin (\"skín\")",
            "translationPt": "Pele"
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach (\"stâ-mak\")",
            "translationPt": "Estômago / Barriga"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart (\"rárt\")",
            "translationPt": "Coração"
          }
        ],
        "options": [
          "Voice",
          "Skin",
          "Stomach",
          "Heart"
        ],
        "correctAnswer": "Heart",
        "explanation": "Heart (\"rárt\") = Coração. Exemplo: \"Your heart beats fast when you run.\" (Seu coração bate rápido quando você corre.)",
        "phoneticHint": "\"rárt\" /hɑːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Neck",
        "visualEmoji": "🧣",
        "visualOptions": [
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice (\"vóis\")",
            "translationPt": "Voz"
          },
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee (\"ní\")",
            "translationPt": "Joelho"
          },
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck (\"nék\")",
            "translationPt": "Pescoço"
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger (\"fín-guer\")",
            "translationPt": "Dedo da mão"
          }
        ],
        "options": [
          "Voice",
          "Knee",
          "Neck",
          "Finger"
        ],
        "correctAnswer": "Neck",
        "explanation": "Neck (\"nék\") = Pescoço. Exemplo: \"Wrap a warm scarf around your neck.\" (Enrole um cachecol quentinho no pescoço.)",
        "phoneticHint": "\"nék\" /nek/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Shoulder",
        "visualEmoji": "🤷",
        "visualOptions": [
          {
            "text": "Shoulder",
            "emoji": "🤷",
            "label": "Shoulder (\"xôul-der\")",
            "translationPt": "Ombro"
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back (\"bék\")",
            "translationPt": "Costas"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth (\"túth\")",
            "translationPt": "Dente"
          },
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee (\"ní\")",
            "translationPt": "Joelho"
          }
        ],
        "options": [
          "Shoulder",
          "Back",
          "Tooth",
          "Knee"
        ],
        "correctAnswer": "Shoulder",
        "explanation": "Shoulder (\"xôul-der\") = Ombro. Exemplo: \"Carry the bag on your shoulder.\" (Carregue a bolsa no ombro.)",
        "phoneticHint": "\"xôul-der\" /ˈʃoʊl.dər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Knee",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth (\"túth\")",
            "translationPt": "Dente"
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach (\"stâ-mak\")",
            "translationPt": "Estômago / Barriga"
          },
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee (\"ní\")",
            "translationPt": "Joelho"
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back (\"bék\")",
            "translationPt": "Costas"
          }
        ],
        "options": [
          "Tooth",
          "Stomach",
          "Knee",
          "Back"
        ],
        "correctAnswer": "Knee",
        "explanation": "Knee (\"ní\") = Joelho. Exemplo: \"Bend your knees slowly.\" (Dobre seus joelhos devagar.)",
        "phoneticHint": "\"ní\" /niː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Stomach",
        "visualEmoji": "🤰",
        "visualOptions": [
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth (\"túth\")",
            "translationPt": "Dente"
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach (\"stâ-mak\")",
            "translationPt": "Estômago / Barriga"
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger (\"fín-guer\")",
            "translationPt": "Dedo da mão"
          },
          {
            "text": "Blood",
            "emoji": "🩸",
            "label": "Blood (\"blâd\")",
            "translationPt": "Sangue"
          }
        ],
        "options": [
          "Tooth",
          "Stomach",
          "Finger",
          "Blood"
        ],
        "correctAnswer": "Stomach",
        "explanation": "Stomach (\"stâ-mak\") = Estômago / Barriga. Exemplo: \"My stomach is full after dinner.\" (Meu estômago está cheio após o jantar.)",
        "phoneticHint": "\"stâ-mak\" /ˈstʌm.ək/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Skin",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Knee",
            "emoji": "🦵",
            "label": "Knee (\"ní\")",
            "translationPt": "Joelho"
          },
          {
            "text": "Back",
            "emoji": "🧍",
            "label": "Back (\"bék\")",
            "translationPt": "Costas"
          },
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck (\"nék\")",
            "translationPt": "Pescoço"
          },
          {
            "text": "Skin",
            "emoji": "✋",
            "label": "Skin (\"skín\")",
            "translationPt": "Pele"
          }
        ],
        "options": [
          "Knee",
          "Back",
          "Neck",
          "Skin"
        ],
        "correctAnswer": "Skin",
        "explanation": "Skin (\"skín\") = Pele. Exemplo: \"Drink water for healthy skin.\" (Beba água para ter uma pele saudável.)",
        "phoneticHint": "\"skín\" /skɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Voice",
        "visualEmoji": "🗣️",
        "visualOptions": [
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice (\"vóis\")",
            "translationPt": "Voz"
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger (\"fín-guer\")",
            "translationPt": "Dedo da mão"
          },
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone (\"bôun\")",
            "translationPt": "Osso"
          },
          {
            "text": "Stomach",
            "emoji": "🤰",
            "label": "Stomach (\"stâ-mak\")",
            "translationPt": "Estômago / Barriga"
          }
        ],
        "options": [
          "Voice",
          "Finger",
          "Bone",
          "Stomach"
        ],
        "correctAnswer": "Voice",
        "explanation": "Voice (\"vóis\") = Voz. Exemplo: \"The teacher has a sweet voice.\" (A professora tem uma voz meiga.)",
        "phoneticHint": "\"vóis\" /vɔɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Blood",
        "visualEmoji": "🩸",
        "visualOptions": [
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck (\"nék\")",
            "translationPt": "Pescoço"
          },
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice (\"vóis\")",
            "translationPt": "Voz"
          },
          {
            "text": "Shoulder",
            "emoji": "🤷",
            "label": "Shoulder (\"xôul-der\")",
            "translationPt": "Ombro"
          },
          {
            "text": "Blood",
            "emoji": "🩸",
            "label": "Blood (\"blâd\")",
            "translationPt": "Sangue"
          }
        ],
        "options": [
          "Neck",
          "Voice",
          "Shoulder",
          "Blood"
        ],
        "correctAnswer": "Blood",
        "explanation": "Blood (\"blâd\") = Sangue. Exemplo: \"The heart pumps blood through the body.\" (O coração bombeia sangue pelo corpo.)",
        "phoneticHint": "\"blâd\" /blʌd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bone",
        "visualEmoji": "🦴",
        "visualOptions": [
          {
            "text": "Voice",
            "emoji": "🗣️",
            "label": "Voice (\"vóis\")",
            "translationPt": "Voz"
          },
          {
            "text": "Neck",
            "emoji": "🧣",
            "label": "Neck (\"nék\")",
            "translationPt": "Pescoço"
          },
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone (\"bôun\")",
            "translationPt": "Osso"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart (\"rárt\")",
            "translationPt": "Coração"
          }
        ],
        "options": [
          "Voice",
          "Neck",
          "Bone",
          "Heart"
        ],
        "correctAnswer": "Bone",
        "explanation": "Bone (\"bôun\") = Osso. Exemplo: \"Calcium keeps our bones strong.\" (O cálcio mantém nossos ossos fortes.)",
        "phoneticHint": "\"bôun\" /boʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Finger",
        "contextSentencePt": "Pronúncia simplificada: \"fín-guer\"",
        "options": [
          "Neck — Pescoço",
          "Finger — Dedo da mão",
          "Bone — Osso",
          "Heart — Coração"
        ],
        "correctAnswer": "Finger — Dedo da mão",
        "explanation": "Você ouviu \"Finger\" (\"fín-guer\") = Dedo da mão. Frase: \"We have five fingers on each hand.\" (Temos cinco dedos em cada mão.)",
        "phoneticHint": "\"fín-guer\" /ˈfɪŋ.ɡər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Shoulder",
        "contextSentencePt": "Pronúncia simplificada: \"xôul-der\"",
        "options": [
          "Finger — Dedo da mão",
          "Skin — Pele",
          "Neck — Pescoço",
          "Shoulder — Ombro"
        ],
        "correctAnswer": "Shoulder — Ombro",
        "explanation": "Você ouviu \"Shoulder\" (\"xôul-der\") = Ombro. Frase: \"Carry the bag on your shoulder.\" (Carregue a bolsa no ombro.)",
        "phoneticHint": "\"xôul-der\" /ˈʃoʊl.dər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Voice",
        "contextSentencePt": "Pronúncia simplificada: \"vóis\"",
        "options": [
          "Knee — Joelho",
          "Finger — Dedo da mão",
          "Voice — Voz",
          "Skin — Pele"
        ],
        "correctAnswer": "Voice — Voz",
        "explanation": "Você ouviu \"Voice\" (\"vóis\") = Voz. Frase: \"The teacher has a sweet voice.\" (A professora tem uma voz meiga.)",
        "phoneticHint": "\"vóis\" /vɔɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🧍",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Back\" (pronúncia: \"bék\")?",
        "audioPhrase": "Back",
        "contextSentence": "Keep your back straight when sitting.",
        "contextSentencePt": "Mantenha as costas retas ao sentar.",
        "options": [
          "Costas",
          "Osso",
          "Pele",
          "Dente"
        ],
        "correctAnswer": "Costas",
        "explanation": "\"Back\" (\"bék\") significa \"Costas\".",
        "phoneticHint": "\"bék\" /bæk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🦵",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Knee\" (pronúncia: \"ní\")?",
        "audioPhrase": "Knee",
        "contextSentence": "Bend your knees slowly.",
        "contextSentencePt": "Dobre seus joelhos devagar.",
        "options": [
          "Ombro",
          "Dedo da mão",
          "Joelho",
          "Sangue"
        ],
        "correctAnswer": "Joelho",
        "explanation": "\"Knee\" (\"ní\") significa \"Joelho\".",
        "phoneticHint": "\"ní\" /niː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🩸",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Blood\" (pronúncia: \"blâd\")?",
        "audioPhrase": "Blood",
        "contextSentence": "The heart pumps blood through the body.",
        "contextSentencePt": "O coração bombeia sangue pelo corpo.",
        "options": [
          "Dedo da mão",
          "Sangue",
          "Pescoço",
          "Ombro"
        ],
        "correctAnswer": "Sangue",
        "explanation": "\"Blood\" (\"blâd\") significa \"Sangue\".",
        "phoneticHint": "\"blâd\" /blʌd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-fill-1",
        "type": "fill-blank",
        "visualEmoji": "❤️",
        "prompt": "✍️ Complete a frase em inglês (\"Seu coração bate rápido quando você corre.\"):",
        "contextSentence": "Your ______ beats fast when you run.",
        "contextSentencePt": "Tradução: \"Seu coração bate rápido quando você corre.\"",
        "audioPhrase": "Your heart beats fast when you run.",
        "options": [
          "Shoulder",
          "Stomach",
          "Knee",
          "Heart"
        ],
        "correctAnswer": "Heart",
        "explanation": "Frase completa: \"Your heart beats fast when you run.\" (Seu coração bate rápido quando você corre.) — Heart (\"rárt\") = Coração.",
        "phoneticHint": "\"rárt\" /hɑːrt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p10-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🤰",
        "prompt": "✍️ Complete a frase em inglês (\"Meu estômago está cheio após o jantar.\"):",
        "contextSentence": "My ______ is full after dinner.",
        "contextSentencePt": "Tradução: \"Meu estômago está cheio após o jantar.\"",
        "audioPhrase": "My stomach is full after dinner.",
        "options": [
          "Stomach",
          "Blood",
          "Tooth",
          "Back"
        ],
        "correctAnswer": "Stomach",
        "explanation": "Frase completa: \"My stomach is full after dinner.\" (Meu estômago está cheio após o jantar.) — Stomach (\"stâ-mak\") = Estômago / Barriga.",
        "phoneticHint": "\"stâ-mak\" /ˈstʌm.ək/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p10-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🦴",
        "prompt": "✍️ Complete a frase em inglês (\"O cálcio mantém nossos ossos fortes.\"):",
        "contextSentence": "Calcium keeps our ______ strong.",
        "contextSentencePt": "Tradução: \"O cálcio mantém nossos ossos fortes.\"",
        "audioPhrase": "Calcium keeps our bones strong.",
        "options": [
          "Knee",
          "Skin",
          "Neck",
          "Bone"
        ],
        "correctAnswer": "Bone",
        "explanation": "Frase completa: \"Calcium keeps our bones strong.\" (O cálcio mantém nossos ossos fortes.) — Bone (\"bôun\") = Osso.",
        "phoneticHint": "\"bôun\" /boʊn/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p11",
    "worldId": 0,
    "phaseNumber": 11,
    "themeId": "body",
    "themeTitle": "Corpo Humano",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "vocabItems": [
      {
        "word": "Tongue",
        "pt": "Língua",
        "simplePronunciation": "tâng",
        "phonetic": "/tʌŋ/",
        "exampleEn": "We taste food with our tongue.",
        "examplePt": "Sentimos o gosto da comida com a língua.",
        "emoji": "👅"
      },
      {
        "word": "Lip",
        "pt": "Lábio",
        "simplePronunciation": "líp",
        "phonetic": "/lɪp/",
        "exampleEn": "Use balm on dry lips.",
        "examplePt": "Use protetor labial nos lábios secos.",
        "emoji": "👄"
      },
      {
        "word": "Brain",
        "pt": "Cérebro",
        "simplePronunciation": "brêin",
        "phonetic": "/breɪn/",
        "exampleEn": "Studying languages exercises the brain.",
        "examplePt": "Estudar idiomas exercita o cérebro.",
        "emoji": "🧠"
      },
      {
        "word": "Chest",
        "pt": "Peito / Tórax",
        "simplePronunciation": "tchést",
        "phonetic": "/tʃest/",
        "exampleEn": "Take a deep breath into your chest.",
        "examplePt": "Respire fundo enchendo o peito.",
        "emoji": "🧍"
      },
      {
        "word": "Elbow",
        "pt": "Cotovelo",
        "simplePronunciation": "él-bou",
        "phonetic": "/ˈel.boʊ/",
        "exampleEn": "Do not put your elbows on the table.",
        "examplePt": "Não coloque os cotovelos na mesa.",
        "emoji": "💪"
      },
      {
        "word": "Wrist",
        "pt": "Pulso / Punho",
        "simplePronunciation": "ríst",
        "phonetic": "/rɪst/",
        "exampleEn": "She wears a watch on her wrist.",
        "examplePt": "Ela usa um relógio no pulso.",
        "emoji": "⌚"
      },
      {
        "word": "Ankle",
        "pt": "Tornozelo",
        "simplePronunciation": "én-kol",
        "phonetic": "/ˈæŋ.kəl/",
        "exampleEn": "Warm up your ankles before running.",
        "examplePt": "Aqueça os tornozelos antes de correr.",
        "emoji": "🦶"
      },
      {
        "word": "Toe",
        "pt": "Dedo do pé",
        "simplePronunciation": "tôu",
        "phonetic": "/toʊ/",
        "exampleEn": "Wiggle your toes in the sand.",
        "examplePt": "Mexa os dedos do pé na areia.",
        "emoji": "🦶"
      },
      {
        "word": "Beard",
        "pt": "Barba",
        "simplePronunciation": "bírd",
        "phonetic": "/bɪrd/",
        "exampleEn": "My father has a short beard.",
        "examplePt": "Meu pai tem uma barba curta.",
        "emoji": "🧔"
      },
      {
        "word": "Nail",
        "pt": "Unha",
        "simplePronunciation": "nêil",
        "phonetic": "/neɪl/",
        "exampleEn": "Keep your fingernails clean and short.",
        "examplePt": "Mantenha as unhas limpas e curtas.",
        "emoji": "💅"
      },
      {
        "word": "Muscle",
        "pt": "Músculo",
        "simplePronunciation": "mâ-sol",
        "phonetic": "/ˈmʌs.əl/",
        "exampleEn": "Swimming builds strong muscles.",
        "examplePt": "Nadar desenvolve músculos fortes.",
        "emoji": "💪"
      },
      {
        "word": "Tear",
        "pt": "Lágrima",
        "simplePronunciation": "tír",
        "phonetic": "/tɪr/",
        "exampleEn": "A tear rolled down her face.",
        "examplePt": "Uma lágrima rolou pelo rosto dela.",
        "emoji": "😢"
      }
    ],
    "title": "Corpo Humano • Módulo 3: Palavras Intermediárias",
    "subtitle": "Nível 3/4 • 12 articulações, órgãos e detalhes intermediários do corpo",
    "pedagogicalObjective": "Aprender articulações e partes intermediárias do corpo humano.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Corpo Humano — Módulo 3 • Intermediárias: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p11-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tongue",
        "visualEmoji": "👅",
        "visualOptions": [
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist (\"ríst\")",
            "translationPt": "Pulso / Punho"
          },
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue (\"tâng\")",
            "translationPt": "Língua"
          },
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest (\"tchést\")",
            "translationPt": "Peito / Tórax"
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle (\"én-kol\")",
            "translationPt": "Tornozelo"
          }
        ],
        "options": [
          "Wrist",
          "Tongue",
          "Chest",
          "Ankle"
        ],
        "correctAnswer": "Tongue",
        "explanation": "Tongue (\"tâng\") = Língua. Exemplo: \"We taste food with our tongue.\" (Sentimos o gosto da comida com a língua.)",
        "phoneticHint": "\"tâng\" /tʌŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Lip",
        "visualEmoji": "👄",
        "visualOptions": [
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest (\"tchést\")",
            "translationPt": "Peito / Tórax"
          },
          {
            "text": "Lip",
            "emoji": "👄",
            "label": "Lip (\"líp\")",
            "translationPt": "Lábio"
          },
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle (\"mâ-sol\")",
            "translationPt": "Músculo"
          },
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow (\"él-bou\")",
            "translationPt": "Cotovelo"
          }
        ],
        "options": [
          "Chest",
          "Lip",
          "Muscle",
          "Elbow"
        ],
        "correctAnswer": "Lip",
        "explanation": "Lip (\"líp\") = Lábio. Exemplo: \"Use balm on dry lips.\" (Use protetor labial nos lábios secos.)",
        "phoneticHint": "\"líp\" /lɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Brain",
        "visualEmoji": "🧠",
        "visualOptions": [
          {
            "text": "Nail",
            "emoji": "💅",
            "label": "Nail (\"nêil\")",
            "translationPt": "Unha"
          },
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard (\"bírd\")",
            "translationPt": "Barba"
          },
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle (\"mâ-sol\")",
            "translationPt": "Músculo"
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain (\"brêin\")",
            "translationPt": "Cérebro"
          }
        ],
        "options": [
          "Nail",
          "Beard",
          "Muscle",
          "Brain"
        ],
        "correctAnswer": "Brain",
        "explanation": "Brain (\"brêin\") = Cérebro. Exemplo: \"Studying languages exercises the brain.\" (Estudar idiomas exercita o cérebro.)",
        "phoneticHint": "\"brêin\" /breɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Chest",
        "visualEmoji": "🧍",
        "visualOptions": [
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist (\"ríst\")",
            "translationPt": "Pulso / Punho"
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle (\"én-kol\")",
            "translationPt": "Tornozelo"
          },
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest (\"tchést\")",
            "translationPt": "Peito / Tórax"
          },
          {
            "text": "Nail",
            "emoji": "💅",
            "label": "Nail (\"nêil\")",
            "translationPt": "Unha"
          }
        ],
        "options": [
          "Wrist",
          "Ankle",
          "Chest",
          "Nail"
        ],
        "correctAnswer": "Chest",
        "explanation": "Chest (\"tchést\") = Peito / Tórax. Exemplo: \"Take a deep breath into your chest.\" (Respire fundo enchendo o peito.)",
        "phoneticHint": "\"tchést\" /tʃest/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Elbow",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow (\"él-bou\")",
            "translationPt": "Cotovelo"
          },
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist (\"ríst\")",
            "translationPt": "Pulso / Punho"
          },
          {
            "text": "Nail",
            "emoji": "💅",
            "label": "Nail (\"nêil\")",
            "translationPt": "Unha"
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle (\"én-kol\")",
            "translationPt": "Tornozelo"
          }
        ],
        "options": [
          "Elbow",
          "Wrist",
          "Nail",
          "Ankle"
        ],
        "correctAnswer": "Elbow",
        "explanation": "Elbow (\"él-bou\") = Cotovelo. Exemplo: \"Do not put your elbows on the table.\" (Não coloque os cotovelos na mesa.)",
        "phoneticHint": "\"él-bou\" /ˈel.boʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Wrist",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Toe",
            "emoji": "🦶",
            "label": "Toe (\"tôu\")",
            "translationPt": "Dedo do pé"
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle (\"én-kol\")",
            "translationPt": "Tornozelo"
          },
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist (\"ríst\")",
            "translationPt": "Pulso / Punho"
          },
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard (\"bírd\")",
            "translationPt": "Barba"
          }
        ],
        "options": [
          "Toe",
          "Ankle",
          "Wrist",
          "Beard"
        ],
        "correctAnswer": "Wrist",
        "explanation": "Wrist (\"ríst\") = Pulso / Punho. Exemplo: \"She wears a watch on her wrist.\" (Ela usa um relógio no pulso.)",
        "phoneticHint": "\"ríst\" /rɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ankle",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Lip",
            "emoji": "👄",
            "label": "Lip (\"líp\")",
            "translationPt": "Lábio"
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle (\"én-kol\")",
            "translationPt": "Tornozelo"
          },
          {
            "text": "Toe",
            "emoji": "🦶",
            "label": "Toe (\"tôu\")",
            "translationPt": "Dedo do pé"
          },
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow (\"él-bou\")",
            "translationPt": "Cotovelo"
          }
        ],
        "options": [
          "Lip",
          "Ankle",
          "Toe",
          "Elbow"
        ],
        "correctAnswer": "Ankle",
        "explanation": "Ankle (\"én-kol\") = Tornozelo. Exemplo: \"Warm up your ankles before running.\" (Aqueça os tornozelos antes de correr.)",
        "phoneticHint": "\"én-kol\" /ˈæŋ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Toe",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard (\"bírd\")",
            "translationPt": "Barba"
          },
          {
            "text": "Lip",
            "emoji": "👄",
            "label": "Lip (\"líp\")",
            "translationPt": "Lábio"
          },
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest (\"tchést\")",
            "translationPt": "Peito / Tórax"
          },
          {
            "text": "Toe",
            "emoji": "🦶",
            "label": "Toe (\"tôu\")",
            "translationPt": "Dedo do pé"
          }
        ],
        "options": [
          "Beard",
          "Lip",
          "Chest",
          "Toe"
        ],
        "correctAnswer": "Toe",
        "explanation": "Toe (\"tôu\") = Dedo do pé. Exemplo: \"Wiggle your toes in the sand.\" (Mexa os dedos do pé na areia.)",
        "phoneticHint": "\"tôu\" /toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Beard",
        "visualEmoji": "🧔",
        "visualOptions": [
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard (\"bírd\")",
            "translationPt": "Barba"
          },
          {
            "text": "Chest",
            "emoji": "🧍",
            "label": "Chest (\"tchést\")",
            "translationPt": "Peito / Tórax"
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain (\"brêin\")",
            "translationPt": "Cérebro"
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle (\"én-kol\")",
            "translationPt": "Tornozelo"
          }
        ],
        "options": [
          "Beard",
          "Chest",
          "Brain",
          "Ankle"
        ],
        "correctAnswer": "Beard",
        "explanation": "Beard (\"bírd\") = Barba. Exemplo: \"My father has a short beard.\" (Meu pai tem uma barba curta.)",
        "phoneticHint": "\"bírd\" /bɪrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Nail",
        "visualEmoji": "💅",
        "visualOptions": [
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle (\"mâ-sol\")",
            "translationPt": "Músculo"
          },
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue (\"tâng\")",
            "translationPt": "Língua"
          },
          {
            "text": "Toe",
            "emoji": "🦶",
            "label": "Toe (\"tôu\")",
            "translationPt": "Dedo do pé"
          },
          {
            "text": "Nail",
            "emoji": "💅",
            "label": "Nail (\"nêil\")",
            "translationPt": "Unha"
          }
        ],
        "options": [
          "Muscle",
          "Tongue",
          "Toe",
          "Nail"
        ],
        "correctAnswer": "Nail",
        "explanation": "Nail (\"nêil\") = Unha. Exemplo: \"Keep your fingernails clean and short.\" (Mantenha as unhas limpas e curtas.)",
        "phoneticHint": "\"nêil\" /neɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Muscle",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Elbow",
            "emoji": "💪",
            "label": "Elbow (\"él-bou\")",
            "translationPt": "Cotovelo"
          },
          {
            "text": "Tongue",
            "emoji": "👅",
            "label": "Tongue (\"tâng\")",
            "translationPt": "Língua"
          },
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle (\"mâ-sol\")",
            "translationPt": "Músculo"
          },
          {
            "text": "Wrist",
            "emoji": "⌚",
            "label": "Wrist (\"ríst\")",
            "translationPt": "Pulso / Punho"
          }
        ],
        "options": [
          "Elbow",
          "Tongue",
          "Muscle",
          "Wrist"
        ],
        "correctAnswer": "Muscle",
        "explanation": "Muscle (\"mâ-sol\") = Músculo. Exemplo: \"Swimming builds strong muscles.\" (Nadar desenvolve músculos fortes.)",
        "phoneticHint": "\"mâ-sol\" /ˈmʌs.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tear",
        "visualEmoji": "😢",
        "visualOptions": [
          {
            "text": "Tear",
            "emoji": "😢",
            "label": "Tear (\"tír\")",
            "translationPt": "Lágrima"
          },
          {
            "text": "Beard",
            "emoji": "🧔",
            "label": "Beard (\"bírd\")",
            "translationPt": "Barba"
          },
          {
            "text": "Ankle",
            "emoji": "🦶",
            "label": "Ankle (\"én-kol\")",
            "translationPt": "Tornozelo"
          },
          {
            "text": "Nail",
            "emoji": "💅",
            "label": "Nail (\"nêil\")",
            "translationPt": "Unha"
          }
        ],
        "options": [
          "Tear",
          "Beard",
          "Ankle",
          "Nail"
        ],
        "correctAnswer": "Tear",
        "explanation": "Tear (\"tír\") = Lágrima. Exemplo: \"A tear rolled down her face.\" (Uma lágrima rolou pelo rosto dela.)",
        "phoneticHint": "\"tír\" /tɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Lip",
        "contextSentencePt": "Pronúncia simplificada: \"líp\"",
        "options": [
          "Nail — Unha",
          "Elbow — Cotovelo",
          "Tongue — Língua",
          "Lip — Lábio"
        ],
        "correctAnswer": "Lip — Lábio",
        "explanation": "Você ouviu \"Lip\" (\"líp\") = Lábio. Frase: \"Use balm on dry lips.\" (Use protetor labial nos lábios secos.)",
        "phoneticHint": "\"líp\" /lɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Wrist",
        "contextSentencePt": "Pronúncia simplificada: \"ríst\"",
        "options": [
          "Tear — Lágrima",
          "Chest — Peito / Tórax",
          "Wrist — Pulso / Punho",
          "Ankle — Tornozelo"
        ],
        "correctAnswer": "Wrist — Pulso / Punho",
        "explanation": "Você ouviu \"Wrist\" (\"ríst\") = Pulso / Punho. Frase: \"She wears a watch on her wrist.\" (Ela usa um relógio no pulso.)",
        "phoneticHint": "\"ríst\" /rɪst/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Nail",
        "contextSentencePt": "Pronúncia simplificada: \"nêil\"",
        "options": [
          "Nail — Unha",
          "Lip — Lábio",
          "Ankle — Tornozelo",
          "Brain — Cérebro"
        ],
        "correctAnswer": "Nail — Unha",
        "explanation": "Você ouviu \"Nail\" (\"nêil\") = Unha. Frase: \"Keep your fingernails clean and short.\" (Mantenha as unhas limpas e curtas.)",
        "phoneticHint": "\"nêil\" /neɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🧠",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Brain\" (pronúncia: \"brêin\")?",
        "audioPhrase": "Brain",
        "contextSentence": "Studying languages exercises the brain.",
        "contextSentencePt": "Estudar idiomas exercita o cérebro.",
        "options": [
          "Lágrima",
          "Unha",
          "Cérebro",
          "Lábio"
        ],
        "correctAnswer": "Cérebro",
        "explanation": "\"Brain\" (\"brêin\") significa \"Cérebro\".",
        "phoneticHint": "\"brêin\" /breɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🦶",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Ankle\" (pronúncia: \"én-kol\")?",
        "audioPhrase": "Ankle",
        "contextSentence": "Warm up your ankles before running.",
        "contextSentencePt": "Aqueça os tornozelos antes de correr.",
        "options": [
          "Barba",
          "Tornozelo",
          "Músculo",
          "Unha"
        ],
        "correctAnswer": "Tornozelo",
        "explanation": "\"Ankle\" (\"én-kol\") significa \"Tornozelo\".",
        "phoneticHint": "\"én-kol\" /ˈæŋ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "💪",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Muscle\" (pronúncia: \"mâ-sol\")?",
        "audioPhrase": "Muscle",
        "contextSentence": "Swimming builds strong muscles.",
        "contextSentencePt": "Nadar desenvolve músculos fortes.",
        "options": [
          "Lágrima",
          "Peito / Tórax",
          "Língua",
          "Músculo"
        ],
        "correctAnswer": "Músculo",
        "explanation": "\"Muscle\" (\"mâ-sol\") significa \"Músculo\".",
        "phoneticHint": "\"mâ-sol\" /ˈmʌs.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🧍",
        "prompt": "✍️ Complete a frase em inglês (\"Respire fundo enchendo o peito.\"):",
        "contextSentence": "Take a deep breath into your ______.",
        "contextSentencePt": "Tradução: \"Respire fundo enchendo o peito.\"",
        "audioPhrase": "Take a deep breath into your chest.",
        "options": [
          "Chest",
          "Toe",
          "Ankle",
          "Lip"
        ],
        "correctAnswer": "Chest",
        "explanation": "Frase completa: \"Take a deep breath into your chest.\" (Respire fundo enchendo o peito.) — Chest (\"tchést\") = Peito / Tórax.",
        "phoneticHint": "\"tchést\" /tʃest/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p11-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🦶",
        "prompt": "✍️ Complete a frase em inglês (\"Mexa os dedos do pé na areia.\"):",
        "contextSentence": "Wiggle your ______ in the sand.",
        "contextSentencePt": "Tradução: \"Mexa os dedos do pé na areia.\"",
        "audioPhrase": "Wiggle your toes in the sand.",
        "options": [
          "Muscle",
          "Tongue",
          "Nail",
          "Toe"
        ],
        "correctAnswer": "Toe",
        "explanation": "Frase completa: \"Wiggle your toes in the sand.\" (Mexa os dedos do pé na areia.) — Toe (\"tôu\") = Dedo do pé.",
        "phoneticHint": "\"tôu\" /toʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p11-fill-3",
        "type": "fill-blank",
        "visualEmoji": "😢",
        "prompt": "✍️ Complete a frase em inglês (\"Uma lágrima rolou pelo rosto dela.\"):",
        "contextSentence": "A ______ rolled down her face.",
        "contextSentencePt": "Tradução: \"Uma lágrima rolou pelo rosto dela.\"",
        "audioPhrase": "A tear rolled down her face.",
        "options": [
          "Lip",
          "Toe",
          "Tear",
          "Elbow"
        ],
        "correctAnswer": "Tear",
        "explanation": "Frase completa: \"A tear rolled down her face.\" (Uma lágrima rolou pelo rosto dela.) — Tear (\"tír\") = Lágrima.",
        "phoneticHint": "\"tír\" /tɪr/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p12",
    "worldId": 0,
    "phaseNumber": 12,
    "themeId": "body",
    "themeTitle": "Corpo Humano",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "vocabItems": [
      {
        "word": "Eyebrow",
        "pt": "Sobrancelha",
        "simplePronunciation": "ái-brau",
        "phonetic": "/ˈaɪ.braʊ/",
        "exampleEn": "He raised one eyebrow in surprise.",
        "examplePt": "Ele levantou uma sobrancelha surpreso.",
        "emoji": "🤨"
      },
      {
        "word": "Eyelash",
        "pt": "Cílio",
        "simplePronunciation": "ái-léx",
        "phonetic": "/ˈaɪ.læʃ/",
        "exampleEn": "Eyelashes protect our eyes from dust.",
        "examplePt": "Os cílios protegem nossos olhos da poeira.",
        "emoji": "👁️"
      },
      {
        "word": "Chin",
        "pt": "Queixo",
        "simplePronunciation": "tchín",
        "phonetic": "/tʃɪn/",
        "exampleEn": "He rested his chin on his hand.",
        "examplePt": "Ele apoiou o queixo na mão.",
        "emoji": "🧑"
      },
      {
        "word": "Cheek",
        "pt": "Bochecha",
        "simplePronunciation": "tchík",
        "phonetic": "/tʃiːk/",
        "exampleEn": "She kissed her baby on the cheek.",
        "examplePt": "Ela beijou o bebê na bochecha.",
        "emoji": "😊"
      },
      {
        "word": "Forehead",
        "pt": "Testa",
        "simplePronunciation": "fór-réd",
        "phonetic": "/ˈfɔːr.hed/",
        "exampleEn": "She felt his forehead for a fever.",
        "examplePt": "Ela tocou a testa dele para ver se tinha febre.",
        "emoji": "🧑"
      },
      {
        "word": "Throat",
        "pt": "Garganta",
        "simplePronunciation": "thrôut",
        "phonetic": "/θroʊt/",
        "exampleEn": "Warm tea soothes a sore throat.",
        "examplePt": "Chá morno alivia a dor de garganta.",
        "emoji": "🍵"
      },
      {
        "word": "Lung",
        "pt": "Pulmão",
        "simplePronunciation": "lâng",
        "phonetic": "/lʌŋ/",
        "exampleEn": "Fresh air fills our lungs.",
        "examplePt": "O ar puro enche nossos pulmões.",
        "emoji": "🫁"
      },
      {
        "word": "Thumb",
        "pt": "Polegar (dedão)",
        "simplePronunciation": "thâm",
        "phonetic": "/θʌm/",
        "exampleEn": "Give a thumbs up if you agree.",
        "examplePt": "Faça sinal de positivo com o polegar se concordar.",
        "emoji": "👍"
      },
      {
        "word": "Heel",
        "pt": "Calcanhar",
        "simplePronunciation": "ríl",
        "phonetic": "/hiːl/",
        "exampleEn": "These shoes cushion your heel.",
        "examplePt": "Estes sapatos amortecem o seu calcanhar.",
        "emoji": "🦶"
      },
      {
        "word": "Waist",
        "pt": "Cintura",
        "simplePronunciation": "uêist",
        "phonetic": "/weɪst/",
        "exampleEn": "Fasten the belt around your waist.",
        "examplePt": "Aperte o cinto ao redor da cintura.",
        "emoji": "👖"
      },
      {
        "word": "Hip",
        "pt": "Quadril",
        "simplePronunciation": "ríp",
        "phonetic": "/hɪp/",
        "exampleEn": "Put your hands on your hips.",
        "examplePt": "Coloque as mãos no quadril.",
        "emoji": "🧍"
      },
      {
        "word": "Rib",
        "pt": "Costela",
        "simplePronunciation": "ríb",
        "phonetic": "/rɪb/",
        "exampleEn": "The ribs protect the heart and lungs.",
        "examplePt": "As costelas protegem o coração e os pulmões.",
        "emoji": "🦴"
      }
    ],
    "title": "Corpo Humano • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Nível 4/4 • 12 partes específicas do rosto e anatomia",
    "pedagogicalObjective": "Dominar termos anatômicos e detalhes específicos do rosto e do tronco.",
    "type": "boss",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Corpo Humano — Módulo 4 • Menos Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p12-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Eyebrow",
        "visualEmoji": "🤨",
        "visualOptions": [
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash (\"ái-léx\")",
            "translationPt": "Cílio"
          },
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow (\"ái-brau\")",
            "translationPt": "Sobrancelha"
          },
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead (\"fór-réd\")",
            "translationPt": "Testa"
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat (\"thrôut\")",
            "translationPt": "Garganta"
          }
        ],
        "options": [
          "Eyelash",
          "Eyebrow",
          "Forehead",
          "Throat"
        ],
        "correctAnswer": "Eyebrow",
        "explanation": "Eyebrow (\"ái-brau\") = Sobrancelha. Exemplo: \"He raised one eyebrow in surprise.\" (Ele levantou uma sobrancelha surpreso.)",
        "phoneticHint": "\"ái-brau\" /ˈaɪ.braʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Eyelash",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Thumb",
            "emoji": "👍",
            "label": "Thumb (\"thâm\")",
            "translationPt": "Polegar (dedão)"
          },
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel (\"ríl\")",
            "translationPt": "Calcanhar"
          },
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead (\"fór-réd\")",
            "translationPt": "Testa"
          },
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash (\"ái-léx\")",
            "translationPt": "Cílio"
          }
        ],
        "options": [
          "Thumb",
          "Heel",
          "Forehead",
          "Eyelash"
        ],
        "correctAnswer": "Eyelash",
        "explanation": "Eyelash (\"ái-léx\") = Cílio. Exemplo: \"Eyelashes protect our eyes from dust.\" (Os cílios protegem nossos olhos da poeira.)",
        "phoneticHint": "\"ái-léx\" /ˈaɪ.læʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Chin",
        "visualEmoji": "🧑",
        "visualOptions": [
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel (\"ríl\")",
            "translationPt": "Calcanhar"
          },
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead (\"fór-réd\")",
            "translationPt": "Testa"
          },
          {
            "text": "Chin",
            "emoji": "🧑",
            "label": "Chin (\"tchín\")",
            "translationPt": "Queixo"
          },
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow (\"ái-brau\")",
            "translationPt": "Sobrancelha"
          }
        ],
        "options": [
          "Heel",
          "Forehead",
          "Chin",
          "Eyebrow"
        ],
        "correctAnswer": "Chin",
        "explanation": "Chin (\"tchín\") = Queixo. Exemplo: \"He rested his chin on his hand.\" (Ele apoiou o queixo na mão.)",
        "phoneticHint": "\"tchín\" /tʃɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Cheek",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Cheek",
            "emoji": "😊",
            "label": "Cheek (\"tchík\")",
            "translationPt": "Bochecha"
          },
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung (\"lâng\")",
            "translationPt": "Pulmão"
          },
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist (\"uêist\")",
            "translationPt": "Cintura"
          },
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow (\"ái-brau\")",
            "translationPt": "Sobrancelha"
          }
        ],
        "options": [
          "Cheek",
          "Lung",
          "Waist",
          "Eyebrow"
        ],
        "correctAnswer": "Cheek",
        "explanation": "Cheek (\"tchík\") = Bochecha. Exemplo: \"She kissed her baby on the cheek.\" (Ela beijou o bebê na bochecha.)",
        "phoneticHint": "\"tchík\" /tʃiːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Forehead",
        "visualEmoji": "🧑",
        "visualOptions": [
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung (\"lâng\")",
            "translationPt": "Pulmão"
          },
          {
            "text": "Rib",
            "emoji": "🦴",
            "label": "Rib (\"ríb\")",
            "translationPt": "Costela"
          },
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead (\"fór-réd\")",
            "translationPt": "Testa"
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat (\"thrôut\")",
            "translationPt": "Garganta"
          }
        ],
        "options": [
          "Lung",
          "Rib",
          "Forehead",
          "Throat"
        ],
        "correctAnswer": "Forehead",
        "explanation": "Forehead (\"fór-réd\") = Testa. Exemplo: \"She felt his forehead for a fever.\" (Ela tocou a testa dele para ver se tinha febre.)",
        "phoneticHint": "\"fór-réd\" /ˈfɔːr.hed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Throat",
        "visualEmoji": "🍵",
        "visualOptions": [
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist (\"uêist\")",
            "translationPt": "Cintura"
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat (\"thrôut\")",
            "translationPt": "Garganta"
          },
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung (\"lâng\")",
            "translationPt": "Pulmão"
          },
          {
            "text": "Thumb",
            "emoji": "👍",
            "label": "Thumb (\"thâm\")",
            "translationPt": "Polegar (dedão)"
          }
        ],
        "options": [
          "Waist",
          "Throat",
          "Lung",
          "Thumb"
        ],
        "correctAnswer": "Throat",
        "explanation": "Throat (\"thrôut\") = Garganta. Exemplo: \"Warm tea soothes a sore throat.\" (Chá morno alivia a dor de garganta.)",
        "phoneticHint": "\"thrôut\" /θroʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Lung",
        "visualEmoji": "🫁",
        "visualOptions": [
          {
            "text": "Rib",
            "emoji": "🦴",
            "label": "Rib (\"ríb\")",
            "translationPt": "Costela"
          },
          {
            "text": "Cheek",
            "emoji": "😊",
            "label": "Cheek (\"tchík\")",
            "translationPt": "Bochecha"
          },
          {
            "text": "Forehead",
            "emoji": "🧑",
            "label": "Forehead (\"fór-réd\")",
            "translationPt": "Testa"
          },
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung (\"lâng\")",
            "translationPt": "Pulmão"
          }
        ],
        "options": [
          "Rib",
          "Cheek",
          "Forehead",
          "Lung"
        ],
        "correctAnswer": "Lung",
        "explanation": "Lung (\"lâng\") = Pulmão. Exemplo: \"Fresh air fills our lungs.\" (O ar puro enche nossos pulmões.)",
        "phoneticHint": "\"lâng\" /lʌŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Thumb",
        "visualEmoji": "👍",
        "visualOptions": [
          {
            "text": "Thumb",
            "emoji": "👍",
            "label": "Thumb (\"thâm\")",
            "translationPt": "Polegar (dedão)"
          },
          {
            "text": "Hip",
            "emoji": "🧍",
            "label": "Hip (\"ríp\")",
            "translationPt": "Quadril"
          },
          {
            "text": "Eyelash",
            "emoji": "👁️",
            "label": "Eyelash (\"ái-léx\")",
            "translationPt": "Cílio"
          },
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist (\"uêist\")",
            "translationPt": "Cintura"
          }
        ],
        "options": [
          "Thumb",
          "Hip",
          "Eyelash",
          "Waist"
        ],
        "correctAnswer": "Thumb",
        "explanation": "Thumb (\"thâm\") = Polegar (dedão). Exemplo: \"Give a thumbs up if you agree.\" (Faça sinal de positivo com o polegar se concordar.)",
        "phoneticHint": "\"thâm\" /θʌm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Heel",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Thumb",
            "emoji": "👍",
            "label": "Thumb (\"thâm\")",
            "translationPt": "Polegar (dedão)"
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat (\"thrôut\")",
            "translationPt": "Garganta"
          },
          {
            "text": "Cheek",
            "emoji": "😊",
            "label": "Cheek (\"tchík\")",
            "translationPt": "Bochecha"
          },
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel (\"ríl\")",
            "translationPt": "Calcanhar"
          }
        ],
        "options": [
          "Thumb",
          "Throat",
          "Cheek",
          "Heel"
        ],
        "correctAnswer": "Heel",
        "explanation": "Heel (\"ríl\") = Calcanhar. Exemplo: \"These shoes cushion your heel.\" (Estes sapatos amortecem o seu calcanhar.)",
        "phoneticHint": "\"ríl\" /hiːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Waist",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Hip",
            "emoji": "🧍",
            "label": "Hip (\"ríp\")",
            "translationPt": "Quadril"
          },
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel (\"ríl\")",
            "translationPt": "Calcanhar"
          },
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist (\"uêist\")",
            "translationPt": "Cintura"
          },
          {
            "text": "Lung",
            "emoji": "🫁",
            "label": "Lung (\"lâng\")",
            "translationPt": "Pulmão"
          }
        ],
        "options": [
          "Hip",
          "Heel",
          "Waist",
          "Lung"
        ],
        "correctAnswer": "Waist",
        "explanation": "Waist (\"uêist\") = Cintura. Exemplo: \"Fasten the belt around your waist.\" (Aperte o cinto ao redor da cintura.)",
        "phoneticHint": "\"uêist\" /weɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Hip",
        "visualEmoji": "🧍",
        "visualOptions": [
          {
            "text": "Hip",
            "emoji": "🧍",
            "label": "Hip (\"ríp\")",
            "translationPt": "Quadril"
          },
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist (\"uêist\")",
            "translationPt": "Cintura"
          },
          {
            "text": "Eyebrow",
            "emoji": "🤨",
            "label": "Eyebrow (\"ái-brau\")",
            "translationPt": "Sobrancelha"
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat (\"thrôut\")",
            "translationPt": "Garganta"
          }
        ],
        "options": [
          "Hip",
          "Waist",
          "Eyebrow",
          "Throat"
        ],
        "correctAnswer": "Hip",
        "explanation": "Hip (\"ríp\") = Quadril. Exemplo: \"Put your hands on your hips.\" (Coloque as mãos no quadril.)",
        "phoneticHint": "\"ríp\" /hɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Rib",
        "visualEmoji": "🦴",
        "visualOptions": [
          {
            "text": "Waist",
            "emoji": "👖",
            "label": "Waist (\"uêist\")",
            "translationPt": "Cintura"
          },
          {
            "text": "Rib",
            "emoji": "🦴",
            "label": "Rib (\"ríb\")",
            "translationPt": "Costela"
          },
          {
            "text": "Heel",
            "emoji": "🦶",
            "label": "Heel (\"ríl\")",
            "translationPt": "Calcanhar"
          },
          {
            "text": "Throat",
            "emoji": "🍵",
            "label": "Throat (\"thrôut\")",
            "translationPt": "Garganta"
          }
        ],
        "options": [
          "Waist",
          "Rib",
          "Heel",
          "Throat"
        ],
        "correctAnswer": "Rib",
        "explanation": "Rib (\"ríb\") = Costela. Exemplo: \"The ribs protect the heart and lungs.\" (As costelas protegem o coração e os pulmões.)",
        "phoneticHint": "\"ríb\" /rɪb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Eyelash",
        "contextSentencePt": "Pronúncia simplificada: \"ái-léx\"",
        "options": [
          "Thumb — Polegar (dedão)",
          "Hip — Quadril",
          "Eyelash — Cílio",
          "Chin — Queixo"
        ],
        "correctAnswer": "Eyelash — Cílio",
        "explanation": "Você ouviu \"Eyelash\" (\"ái-léx\") = Cílio. Frase: \"Eyelashes protect our eyes from dust.\" (Os cílios protegem nossos olhos da poeira.)",
        "phoneticHint": "\"ái-léx\" /ˈaɪ.læʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Throat",
        "contextSentencePt": "Pronúncia simplificada: \"thrôut\"",
        "options": [
          "Throat — Garganta",
          "Eyelash — Cílio",
          "Rib — Costela",
          "Hip — Quadril"
        ],
        "correctAnswer": "Throat — Garganta",
        "explanation": "Você ouviu \"Throat\" (\"thrôut\") = Garganta. Frase: \"Warm tea soothes a sore throat.\" (Chá morno alivia a dor de garganta.)",
        "phoneticHint": "\"thrôut\" /θroʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Waist",
        "contextSentencePt": "Pronúncia simplificada: \"uêist\"",
        "options": [
          "Throat — Garganta",
          "Heel — Calcanhar",
          "Waist — Cintura",
          "Thumb — Polegar (dedão)"
        ],
        "correctAnswer": "Waist — Cintura",
        "explanation": "Você ouviu \"Waist\" (\"uêist\") = Cintura. Frase: \"Fasten the belt around your waist.\" (Aperte o cinto ao redor da cintura.)",
        "phoneticHint": "\"uêist\" /weɪst/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🧑",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Chin\" (pronúncia: \"tchín\")?",
        "audioPhrase": "Chin",
        "contextSentence": "He rested his chin on his hand.",
        "contextSentencePt": "Ele apoiou o queixo na mão.",
        "options": [
          "Costela",
          "Queixo",
          "Garganta",
          "Calcanhar"
        ],
        "correctAnswer": "Queixo",
        "explanation": "\"Chin\" (\"tchín\") significa \"Queixo\".",
        "phoneticHint": "\"tchín\" /tʃɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🫁",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Lung\" (pronúncia: \"lâng\")?",
        "audioPhrase": "Lung",
        "contextSentence": "Fresh air fills our lungs.",
        "contextSentencePt": "O ar puro enche nossos pulmões.",
        "options": [
          "Garganta",
          "Cílio",
          "Testa",
          "Pulmão"
        ],
        "correctAnswer": "Pulmão",
        "explanation": "\"Lung\" (\"lâng\") significa \"Pulmão\".",
        "phoneticHint": "\"lâng\" /lʌŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🧍",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Hip\" (pronúncia: \"ríp\")?",
        "audioPhrase": "Hip",
        "contextSentence": "Put your hands on your hips.",
        "contextSentencePt": "Coloque as mãos no quadril.",
        "options": [
          "Quadril",
          "Polegar (dedão)",
          "Cintura",
          "Costela"
        ],
        "correctAnswer": "Quadril",
        "explanation": "\"Hip\" (\"ríp\") significa \"Quadril\".",
        "phoneticHint": "\"ríp\" /hɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-fill-1",
        "type": "fill-blank",
        "visualEmoji": "😊",
        "prompt": "✍️ Complete a frase em inglês (\"Ela beijou o bebê na bochecha.\"):",
        "contextSentence": "She kissed her baby on the ______.",
        "contextSentencePt": "Tradução: \"Ela beijou o bebê na bochecha.\"",
        "audioPhrase": "She kissed her baby on the cheek.",
        "options": [
          "Hip",
          "Rib",
          "Eyelash",
          "Cheek"
        ],
        "correctAnswer": "Cheek",
        "explanation": "Frase completa: \"She kissed her baby on the cheek.\" (Ela beijou o bebê na bochecha.) — Cheek (\"tchík\") = Bochecha.",
        "phoneticHint": "\"tchík\" /tʃiːk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p12-fill-2",
        "type": "fill-blank",
        "visualEmoji": "👍",
        "prompt": "✍️ Complete a frase em inglês (\"Faça sinal de positivo com o polegar se concordar.\"):",
        "contextSentence": "Give a ______ up if you agree.",
        "contextSentencePt": "Tradução: \"Faça sinal de positivo com o polegar se concordar.\"",
        "audioPhrase": "Give a thumbs up if you agree.",
        "options": [
          "Chin",
          "Rib",
          "Thumb",
          "Eyelash"
        ],
        "correctAnswer": "Thumb",
        "explanation": "Frase completa: \"Give a thumbs up if you agree.\" (Faça sinal de positivo com o polegar se concordar.) — Thumb (\"thâm\") = Polegar (dedão).",
        "phoneticHint": "\"thâm\" /θʌm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p12-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🦴",
        "prompt": "✍️ Complete a frase em inglês (\"As costelas protegem o coração e os pulmões.\"):",
        "contextSentence": "The ______ protect the heart and lungs.",
        "contextSentencePt": "Tradução: \"As costelas protegem o coração e os pulmões.\"",
        "audioPhrase": "The ribs protect the heart and lungs.",
        "options": [
          "Rib",
          "Eyelash",
          "Eyebrow",
          "Throat"
        ],
        "correctAnswer": "Rib",
        "explanation": "Frase completa: \"The ribs protect the heart and lungs.\" (As costelas protegem o coração e os pulmões.) — Rib (\"ríb\") = Costela.",
        "phoneticHint": "\"ríb\" /rɪb/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p13",
    "worldId": 0,
    "phaseNumber": 13,
    "themeId": "transport",
    "themeTitle": "Transporte",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "vocabItems": [
      {
        "word": "Car",
        "pt": "Carro",
        "simplePronunciation": "cár",
        "phonetic": "/kɑːr/",
        "exampleEn": "We travel by car on weekends.",
        "examplePt": "Nós viajamos de carro nos fins de semana.",
        "emoji": "🚗"
      },
      {
        "word": "Bus",
        "pt": "Ônibus",
        "simplePronunciation": "bâs",
        "phonetic": "/bʌs/",
        "exampleEn": "Take the bus to school.",
        "examplePt": "Pegue o ônibus para a escola.",
        "emoji": "🚌"
      },
      {
        "word": "Street",
        "pt": "Rua",
        "simplePronunciation": "strít",
        "phonetic": "/striːt/",
        "exampleEn": "Look both ways before crossing the street.",
        "examplePt": "Olhe para os dois lados antes de atravessar a rua.",
        "emoji": "🛣️"
      },
      {
        "word": "Bicycle",
        "pt": "Bicicleta",
        "simplePronunciation": "bái-si-kol",
        "phonetic": "/ˈbaɪ.sɪ.kəl/",
        "exampleEn": "She rides her bicycle in the park.",
        "examplePt": "Ela anda de bicicleta no parque.",
        "emoji": "🚲"
      },
      {
        "word": "Train",
        "pt": "Trem",
        "simplePronunciation": "trêin",
        "phonetic": "/treɪn/",
        "exampleEn": "The train arrives at eight o'clock.",
        "examplePt": "O trem chega às oito horas.",
        "emoji": "🚆"
      },
      {
        "word": "Airplane",
        "pt": "Avião",
        "simplePronunciation": "ér-plêin",
        "phonetic": "/ˈer.pleɪn/",
        "exampleEn": "The airplane flies above the clouds.",
        "examplePt": "O avião voa acima das nuvens.",
        "emoji": "✈️"
      },
      {
        "word": "Taxi",
        "pt": "Táxi",
        "simplePronunciation": "ték-si",
        "phonetic": "/ˈtæk.si/",
        "exampleEn": "Let us take a taxi to the hotel.",
        "examplePt": "Vamos pegar um táxi até o hotel.",
        "emoji": "🚕"
      },
      {
        "word": "Truck",
        "pt": "Caminhão",
        "simplePronunciation": "trâk",
        "phonetic": "/trʌk/",
        "exampleEn": "The truck carries heavy boxes.",
        "examplePt": "O caminhão transporta caixas pesadas.",
        "emoji": "🚚"
      },
      {
        "word": "Motorcycle",
        "pt": "Moto",
        "simplePronunciation": "môu-tor-sái-kol",
        "phonetic": "/ˈmoʊ.tərˌsaɪ.kəl/",
        "exampleEn": "Wear a helmet on a motorcycle.",
        "examplePt": "Use capacete na moto.",
        "emoji": "🏍️"
      },
      {
        "word": "Boat",
        "pt": "Barco",
        "simplePronunciation": "bôut",
        "phonetic": "/boʊt/",
        "exampleEn": "A small boat crosses the lake.",
        "examplePt": "Um pequeno barco atravessa o lago.",
        "emoji": "⛵"
      },
      {
        "word": "Ticket",
        "pt": "Passagem / Bilhete",
        "simplePronunciation": "tí-ket",
        "phonetic": "/ˈtɪk.ɪt/",
        "exampleEn": "Buy your bus ticket here.",
        "examplePt": "Compre sua passagem de ônibus aqui.",
        "emoji": "🎫"
      },
      {
        "word": "Station",
        "pt": "Estação",
        "simplePronunciation": "stêi-xon",
        "phonetic": "/ˈsteɪ.ʃən/",
        "exampleEn": "Meet me at the train station.",
        "examplePt": "Encontre-me na estação de trem.",
        "emoji": "🚉"
      }
    ],
    "title": "Transporte • Módulo 1: Palavras Essenciais",
    "subtitle": "Nível 1/4 • Os 12 veículos e termos de deslocamento mais usados",
    "pedagogicalObjective": "Conhecer os meios de transporte e termos básicos mais usados para se locomover.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Transporte — Módulo 1 • Essenciais: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p13-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane (\"ér-plêin\")",
            "translationPt": "Avião"
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station (\"stêi-xon\")",
            "translationPt": "Estação"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus (\"bâs\")",
            "translationPt": "Ônibus"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car (\"cár\")",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Airplane",
          "Station",
          "Bus",
          "Car"
        ],
        "correctAnswer": "Car",
        "explanation": "Car (\"cár\") = Carro. Exemplo: \"We travel by car on weekends.\" (Nós viajamos de carro nos fins de semana.)",
        "phoneticHint": "\"cár\" /kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bus",
        "visualEmoji": "🚌",
        "visualOptions": [
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat (\"bôut\")",
            "translationPt": "Barco"
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street (\"strít\")",
            "translationPt": "Rua"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus (\"bâs\")",
            "translationPt": "Ônibus"
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station (\"stêi-xon\")",
            "translationPt": "Estação"
          }
        ],
        "options": [
          "Boat",
          "Street",
          "Bus",
          "Station"
        ],
        "correctAnswer": "Bus",
        "explanation": "Bus (\"bâs\") = Ônibus. Exemplo: \"Take the bus to school.\" (Pegue o ônibus para a escola.)",
        "phoneticHint": "\"bâs\" /bʌs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Street",
        "visualEmoji": "🛣️",
        "visualOptions": [
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street (\"strít\")",
            "translationPt": "Rua"
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station (\"stêi-xon\")",
            "translationPt": "Estação"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car (\"cár\")",
            "translationPt": "Carro"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus (\"bâs\")",
            "translationPt": "Ônibus"
          }
        ],
        "options": [
          "Street",
          "Station",
          "Car",
          "Bus"
        ],
        "correctAnswer": "Street",
        "explanation": "Street (\"strít\") = Rua. Exemplo: \"Look both ways before crossing the street.\" (Olhe para os dois lados antes de atravessar a rua.)",
        "phoneticHint": "\"strít\" /striːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bicycle",
        "visualEmoji": "🚲",
        "visualOptions": [
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle (\"môu-tor-sái-kol\")",
            "translationPt": "Moto"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car (\"cár\")",
            "translationPt": "Carro"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle (\"bái-si-kol\")",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane (\"ér-plêin\")",
            "translationPt": "Avião"
          }
        ],
        "options": [
          "Motorcycle",
          "Car",
          "Bicycle",
          "Airplane"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "Bicycle (\"bái-si-kol\") = Bicicleta. Exemplo: \"She rides her bicycle in the park.\" (Ela anda de bicicleta no parque.)",
        "phoneticHint": "\"bái-si-kol\" /ˈbaɪ.sɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Train",
        "visualEmoji": "🚆",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car (\"cár\")",
            "translationPt": "Carro"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train (\"trêin\")",
            "translationPt": "Trem"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi (\"ték-si\")",
            "translationPt": "Táxi"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat (\"bôut\")",
            "translationPt": "Barco"
          }
        ],
        "options": [
          "Car",
          "Train",
          "Taxi",
          "Boat"
        ],
        "correctAnswer": "Train",
        "explanation": "Train (\"trêin\") = Trem. Exemplo: \"The train arrives at eight o'clock.\" (O trem chega às oito horas.)",
        "phoneticHint": "\"trêin\" /treɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Airplane",
        "visualEmoji": "✈️",
        "visualOptions": [
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck (\"trâk\")",
            "translationPt": "Caminhão"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train (\"trêin\")",
            "translationPt": "Trem"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus (\"bâs\")",
            "translationPt": "Ônibus"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane (\"ér-plêin\")",
            "translationPt": "Avião"
          }
        ],
        "options": [
          "Truck",
          "Train",
          "Bus",
          "Airplane"
        ],
        "correctAnswer": "Airplane",
        "explanation": "Airplane (\"ér-plêin\") = Avião. Exemplo: \"The airplane flies above the clouds.\" (O avião voa acima das nuvens.)",
        "phoneticHint": "\"ér-plêin\" /ˈer.pleɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Taxi",
        "visualEmoji": "🚕",
        "visualOptions": [
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi (\"ték-si\")",
            "translationPt": "Táxi"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat (\"bôut\")",
            "translationPt": "Barco"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle (\"bái-si-kol\")",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station (\"stêi-xon\")",
            "translationPt": "Estação"
          }
        ],
        "options": [
          "Taxi",
          "Boat",
          "Bicycle",
          "Station"
        ],
        "correctAnswer": "Taxi",
        "explanation": "Taxi (\"ték-si\") = Táxi. Exemplo: \"Let us take a taxi to the hotel.\" (Vamos pegar um táxi até o hotel.)",
        "phoneticHint": "\"ték-si\" /ˈtæk.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Truck",
        "visualEmoji": "🚚",
        "visualOptions": [
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train (\"trêin\")",
            "translationPt": "Trem"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi (\"ték-si\")",
            "translationPt": "Táxi"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle (\"môu-tor-sái-kol\")",
            "translationPt": "Moto"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck (\"trâk\")",
            "translationPt": "Caminhão"
          }
        ],
        "options": [
          "Train",
          "Taxi",
          "Motorcycle",
          "Truck"
        ],
        "correctAnswer": "Truck",
        "explanation": "Truck (\"trâk\") = Caminhão. Exemplo: \"The truck carries heavy boxes.\" (O caminhão transporta caixas pesadas.)",
        "phoneticHint": "\"trâk\" /trʌk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Motorcycle",
        "visualEmoji": "🏍️",
        "visualOptions": [
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi (\"ték-si\")",
            "translationPt": "Táxi"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle (\"bái-si-kol\")",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle (\"môu-tor-sái-kol\")",
            "translationPt": "Moto"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane (\"ér-plêin\")",
            "translationPt": "Avião"
          }
        ],
        "options": [
          "Taxi",
          "Bicycle",
          "Motorcycle",
          "Airplane"
        ],
        "correctAnswer": "Motorcycle",
        "explanation": "Motorcycle (\"môu-tor-sái-kol\") = Moto. Exemplo: \"Wear a helmet on a motorcycle.\" (Use capacete na moto.)",
        "phoneticHint": "\"môu-tor-sái-kol\" /ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Boat",
        "visualEmoji": "⛵",
        "visualOptions": [
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat (\"bôut\")",
            "translationPt": "Barco"
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station (\"stêi-xon\")",
            "translationPt": "Estação"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane (\"ér-plêin\")",
            "translationPt": "Avião"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train (\"trêin\")",
            "translationPt": "Trem"
          }
        ],
        "options": [
          "Boat",
          "Station",
          "Airplane",
          "Train"
        ],
        "correctAnswer": "Boat",
        "explanation": "Boat (\"bôut\") = Barco. Exemplo: \"A small boat crosses the lake.\" (Um pequeno barco atravessa o lago.)",
        "phoneticHint": "\"bôut\" /boʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ticket",
        "visualEmoji": "🎫",
        "visualOptions": [
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat (\"bôut\")",
            "translationPt": "Barco"
          },
          {
            "text": "Ticket",
            "emoji": "🎫",
            "label": "Ticket (\"tí-ket\")",
            "translationPt": "Passagem / Bilhete"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane (\"ér-plêin\")",
            "translationPt": "Avião"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus (\"bâs\")",
            "translationPt": "Ônibus"
          }
        ],
        "options": [
          "Boat",
          "Ticket",
          "Airplane",
          "Bus"
        ],
        "correctAnswer": "Ticket",
        "explanation": "Ticket (\"tí-ket\") = Passagem / Bilhete. Exemplo: \"Buy your bus ticket here.\" (Compre sua passagem de ônibus aqui.)",
        "phoneticHint": "\"tí-ket\" /ˈtɪk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Station",
        "visualEmoji": "🚉",
        "visualOptions": [
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle (\"bái-si-kol\")",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Station",
            "emoji": "🚉",
            "label": "Station (\"stêi-xon\")",
            "translationPt": "Estação"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train (\"trêin\")",
            "translationPt": "Trem"
          },
          {
            "text": "Ticket",
            "emoji": "🎫",
            "label": "Ticket (\"tí-ket\")",
            "translationPt": "Passagem / Bilhete"
          }
        ],
        "options": [
          "Bicycle",
          "Station",
          "Train",
          "Ticket"
        ],
        "correctAnswer": "Station",
        "explanation": "Station (\"stêi-xon\") = Estação. Exemplo: \"Meet me at the train station.\" (Encontre-me na estação de trem.)",
        "phoneticHint": "\"stêi-xon\" /ˈsteɪ.ʃən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Bus",
        "contextSentencePt": "Pronúncia simplificada: \"bâs\"",
        "options": [
          "Bus — Ônibus",
          "Station — Estação",
          "Car — Carro",
          "Train — Trem"
        ],
        "correctAnswer": "Bus — Ônibus",
        "explanation": "Você ouviu \"Bus\" (\"bâs\") = Ônibus. Frase: \"Take the bus to school.\" (Pegue o ônibus para a escola.)",
        "phoneticHint": "\"bâs\" /bʌs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Airplane",
        "contextSentencePt": "Pronúncia simplificada: \"ér-plêin\"",
        "options": [
          "Car — Carro",
          "Train — Trem",
          "Airplane — Avião",
          "Motorcycle — Moto"
        ],
        "correctAnswer": "Airplane — Avião",
        "explanation": "Você ouviu \"Airplane\" (\"ér-plêin\") = Avião. Frase: \"The airplane flies above the clouds.\" (O avião voa acima das nuvens.)",
        "phoneticHint": "\"ér-plêin\" /ˈer.pleɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Boat",
        "contextSentencePt": "Pronúncia simplificada: \"bôut\"",
        "options": [
          "Street — Rua",
          "Boat — Barco",
          "Ticket — Passagem / Bilhete",
          "Train — Trem"
        ],
        "correctAnswer": "Boat — Barco",
        "explanation": "Você ouviu \"Boat\" (\"bôut\") = Barco. Frase: \"A small boat crosses the lake.\" (Um pequeno barco atravessa o lago.)",
        "phoneticHint": "\"bôut\" /boʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🛣️",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Street\" (pronúncia: \"strít\")?",
        "audioPhrase": "Street",
        "contextSentence": "Look both ways before crossing the street.",
        "contextSentencePt": "Olhe para os dois lados antes de atravessar a rua.",
        "options": [
          "Avião",
          "Caminhão",
          "Táxi",
          "Rua"
        ],
        "correctAnswer": "Rua",
        "explanation": "\"Street\" (\"strít\") significa \"Rua\".",
        "phoneticHint": "\"strít\" /striːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🚕",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Taxi\" (pronúncia: \"ték-si\")?",
        "audioPhrase": "Taxi",
        "contextSentence": "Let us take a taxi to the hotel.",
        "contextSentencePt": "Vamos pegar um táxi até o hotel.",
        "options": [
          "Táxi",
          "Moto",
          "Trem",
          "Bicicleta"
        ],
        "correctAnswer": "Táxi",
        "explanation": "\"Taxi\" (\"ték-si\") significa \"Táxi\".",
        "phoneticHint": "\"ték-si\" /ˈtæk.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🎫",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Ticket\" (pronúncia: \"tí-ket\")?",
        "audioPhrase": "Ticket",
        "contextSentence": "Buy your bus ticket here.",
        "contextSentencePt": "Compre sua passagem de ônibus aqui.",
        "options": [
          "Caminhão",
          "Táxi",
          "Bicicleta",
          "Passagem / Bilhete"
        ],
        "correctAnswer": "Passagem / Bilhete",
        "explanation": "\"Ticket\" (\"tí-ket\") significa \"Passagem / Bilhete\".",
        "phoneticHint": "\"tí-ket\" /ˈtɪk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🚲",
        "prompt": "✍️ Complete a frase em inglês (\"Ela anda de bicicleta no parque.\"):",
        "contextSentence": "She rides her ______ in the park.",
        "contextSentencePt": "Tradução: \"Ela anda de bicicleta no parque.\"",
        "audioPhrase": "She rides her bicycle in the park.",
        "options": [
          "Bus",
          "Street",
          "Bicycle",
          "Boat"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "Frase completa: \"She rides her bicycle in the park.\" (Ela anda de bicicleta no parque.) — Bicycle (\"bái-si-kol\") = Bicicleta.",
        "phoneticHint": "\"bái-si-kol\" /ˈbaɪ.sɪ.kəl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p13-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🚚",
        "prompt": "✍️ Complete a frase em inglês (\"O caminhão transporta caixas pesadas.\"):",
        "contextSentence": "The ______ carries heavy boxes.",
        "contextSentencePt": "Tradução: \"O caminhão transporta caixas pesadas.\"",
        "audioPhrase": "The truck carries heavy boxes.",
        "options": [
          "Truck",
          "Street",
          "Boat",
          "Bus"
        ],
        "correctAnswer": "Truck",
        "explanation": "Frase completa: \"The truck carries heavy boxes.\" (O caminhão transporta caixas pesadas.) — Truck (\"trâk\") = Caminhão.",
        "phoneticHint": "\"trâk\" /trʌk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p13-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🚉",
        "prompt": "✍️ Complete a frase em inglês (\"Encontre-me na estação de trem.\"):",
        "contextSentence": "Meet me at the train ______.",
        "contextSentencePt": "Tradução: \"Encontre-me na estação de trem.\"",
        "audioPhrase": "Meet me at the train station.",
        "options": [
          "Taxi",
          "Station",
          "Car",
          "Bus"
        ],
        "correctAnswer": "Station",
        "explanation": "Frase completa: \"Meet me at the train station.\" (Encontre-me na estação de trem.) — Station (\"stêi-xon\") = Estação.",
        "phoneticHint": "\"stêi-xon\" /ˈsteɪ.ʃən/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p14",
    "worldId": 0,
    "phaseNumber": 14,
    "themeId": "transport",
    "themeTitle": "Transporte",
    "frequencyLevel": "Módulo 2 • Comuns",
    "vocabItems": [
      {
        "word": "Subway",
        "pt": "Metrô",
        "simplePronunciation": "sâb-uêi",
        "phonetic": "/ˈsʌb.weɪ/",
        "exampleEn": "The subway is fast and avoids traffic.",
        "examplePt": "O metrô é rápido e evita o trânsito.",
        "emoji": "🚇"
      },
      {
        "word": "Ship",
        "pt": "Navio",
        "simplePronunciation": "xíp",
        "phonetic": "/ʃɪp/",
        "exampleEn": "A large ship sails across the ocean.",
        "examplePt": "Um grande navio navega pelo oceano.",
        "emoji": "🚢"
      },
      {
        "word": "Road",
        "pt": "Estrada / Rodovia",
        "simplePronunciation": "rôud",
        "phonetic": "/roʊd/",
        "exampleEn": "Follow this road to the beach.",
        "examplePt": "Siga esta estrada até a praia.",
        "emoji": "🛣️"
      },
      {
        "word": "Bridge",
        "pt": "Ponte",
        "simplePronunciation": "brídj",
        "phonetic": "/brɪdʒ/",
        "exampleEn": "Drive across the river bridge.",
        "examplePt": "Dirija sobre a ponte do rio.",
        "emoji": "🌉"
      },
      {
        "word": "Airport",
        "pt": "Aeroporto",
        "simplePronunciation": "ér-pórt",
        "phonetic": "/ˈer.pɔːrt/",
        "exampleEn": "We arrived early at the airport.",
        "examplePt": "Chegamos cedo ao aeroporto.",
        "emoji": "🛫"
      },
      {
        "word": "Driver",
        "pt": "Motorista",
        "simplePronunciation": "drái-ver",
        "phonetic": "/ˈdraɪ.vər/",
        "exampleEn": "The bus driver is very polite.",
        "examplePt": "O motorista do ônibus é muito educado.",
        "emoji": "🧑‍✈️"
      },
      {
        "word": "Passenger",
        "pt": "Passageiro",
        "simplePronunciation": "pé-sen-djer",
        "phonetic": "/ˈpæs.ən.dʒər/",
        "exampleEn": "All passengers must wear seatbelts.",
        "examplePt": "Todos os passageiros devem usar cinto.",
        "emoji": "🧳"
      },
      {
        "word": "Wheel",
        "pt": "Roda / Volante",
        "simplePronunciation": "uíl",
        "phonetic": "/wiːl/",
        "exampleEn": "Keep both hands on the wheel.",
        "examplePt": "Mantenha as duas mãos no volante.",
        "emoji": "🛞"
      },
      {
        "word": "Tire",
        "pt": "Pneu",
        "simplePronunciation": "tái-er",
        "phonetic": "/ˈtaɪ.ər/",
        "exampleEn": "Check the air in the car tire.",
        "examplePt": "Verifique o ar do pneu do carro.",
        "emoji": "🛞"
      },
      {
        "word": "Map",
        "pt": "Mapa",
        "simplePronunciation": "mép",
        "phonetic": "/mæp/",
        "exampleEn": "Check the city map on your phone.",
        "examplePt": "Olhe o mapa da cidade no celular.",
        "emoji": "🗺️"
      },
      {
        "word": "Stop",
        "pt": "Parada / Ponto",
        "simplePronunciation": "stóp",
        "phonetic": "/stɑːp/",
        "exampleEn": "Wait for me at the bus stop.",
        "examplePt": "Espere por mim no ponto de ônibus.",
        "emoji": "🚏"
      },
      {
        "word": "Traffic",
        "pt": "Trânsito / Tráfego",
        "simplePronunciation": "tré-fik",
        "phonetic": "/ˈtræf.ɪk/",
        "exampleEn": "There is heavy traffic this morning.",
        "examplePt": "Há trânsito intenso nesta manhã.",
        "emoji": "🚦"
      }
    ],
    "title": "Transporte • Módulo 2: Palavras Comuns",
    "subtitle": "Nível 2/4 • 12 termos comuns de viagem, trânsito e direção",
    "pedagogicalObjective": "Aprender palavras comuns de trânsito, viagem urbana e partes principais dos veículos.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Transporte — Módulo 2 • Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p14-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Subway",
        "visualEmoji": "🚇",
        "visualOptions": [
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship (\"xíp\")",
            "translationPt": "Navio"
          },
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver (\"drái-ver\")",
            "translationPt": "Motorista"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway (\"sâb-uêi\")",
            "translationPt": "Metrô"
          },
          {
            "text": "Traffic",
            "emoji": "🚦",
            "label": "Traffic (\"tré-fik\")",
            "translationPt": "Trânsito / Tráfego"
          }
        ],
        "options": [
          "Ship",
          "Driver",
          "Subway",
          "Traffic"
        ],
        "correctAnswer": "Subway",
        "explanation": "Subway (\"sâb-uêi\") = Metrô. Exemplo: \"The subway is fast and avoids traffic.\" (O metrô é rápido e evita o trânsito.)",
        "phoneticHint": "\"sâb-uêi\" /ˈsʌb.weɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ship",
        "visualEmoji": "🚢",
        "visualOptions": [
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship (\"xíp\")",
            "translationPt": "Navio"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway (\"sâb-uêi\")",
            "translationPt": "Metrô"
          },
          {
            "text": "Road",
            "emoji": "🛣️",
            "label": "Road (\"rôud\")",
            "translationPt": "Estrada / Rodovia"
          },
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver (\"drái-ver\")",
            "translationPt": "Motorista"
          }
        ],
        "options": [
          "Ship",
          "Subway",
          "Road",
          "Driver"
        ],
        "correctAnswer": "Ship",
        "explanation": "Ship (\"xíp\") = Navio. Exemplo: \"A large ship sails across the ocean.\" (Um grande navio navega pelo oceano.)",
        "phoneticHint": "\"xíp\" /ʃɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Road",
        "visualEmoji": "🛣️",
        "visualOptions": [
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge (\"brídj\")",
            "translationPt": "Ponte"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway (\"sâb-uêi\")",
            "translationPt": "Metrô"
          },
          {
            "text": "Road",
            "emoji": "🛣️",
            "label": "Road (\"rôud\")",
            "translationPt": "Estrada / Rodovia"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship (\"xíp\")",
            "translationPt": "Navio"
          }
        ],
        "options": [
          "Bridge",
          "Subway",
          "Road",
          "Ship"
        ],
        "correctAnswer": "Road",
        "explanation": "Road (\"rôud\") = Estrada / Rodovia. Exemplo: \"Follow this road to the beach.\" (Siga esta estrada até a praia.)",
        "phoneticHint": "\"rôud\" /roʊd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bridge",
        "visualEmoji": "🌉",
        "visualOptions": [
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship (\"xíp\")",
            "translationPt": "Navio"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge (\"brídj\")",
            "translationPt": "Ponte"
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map (\"mép\")",
            "translationPt": "Mapa"
          },
          {
            "text": "Stop",
            "emoji": "🚏",
            "label": "Stop (\"stóp\")",
            "translationPt": "Parada / Ponto"
          }
        ],
        "options": [
          "Ship",
          "Bridge",
          "Map",
          "Stop"
        ],
        "correctAnswer": "Bridge",
        "explanation": "Bridge (\"brídj\") = Ponte. Exemplo: \"Drive across the river bridge.\" (Dirija sobre a ponte do rio.)",
        "phoneticHint": "\"brídj\" /brɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Airport",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map (\"mép\")",
            "translationPt": "Mapa"
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire (\"tái-er\")",
            "translationPt": "Pneu"
          },
          {
            "text": "Wheel",
            "emoji": "🛞",
            "label": "Wheel (\"uíl\")",
            "translationPt": "Roda / Volante"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport (\"ér-pórt\")",
            "translationPt": "Aeroporto"
          }
        ],
        "options": [
          "Map",
          "Tire",
          "Wheel",
          "Airport"
        ],
        "correctAnswer": "Airport",
        "explanation": "Airport (\"ér-pórt\") = Aeroporto. Exemplo: \"We arrived early at the airport.\" (Chegamos cedo ao aeroporto.)",
        "phoneticHint": "\"ér-pórt\" /ˈer.pɔːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Driver",
        "visualEmoji": "🧑‍✈️",
        "visualOptions": [
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver (\"drái-ver\")",
            "translationPt": "Motorista"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport (\"ér-pórt\")",
            "translationPt": "Aeroporto"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship (\"xíp\")",
            "translationPt": "Navio"
          },
          {
            "text": "Wheel",
            "emoji": "🛞",
            "label": "Wheel (\"uíl\")",
            "translationPt": "Roda / Volante"
          }
        ],
        "options": [
          "Driver",
          "Airport",
          "Ship",
          "Wheel"
        ],
        "correctAnswer": "Driver",
        "explanation": "Driver (\"drái-ver\") = Motorista. Exemplo: \"The bus driver is very polite.\" (O motorista do ônibus é muito educado.)",
        "phoneticHint": "\"drái-ver\" /ˈdraɪ.vər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Passenger",
        "visualEmoji": "🧳",
        "visualOptions": [
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship (\"xíp\")",
            "translationPt": "Navio"
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map (\"mép\")",
            "translationPt": "Mapa"
          },
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver (\"drái-ver\")",
            "translationPt": "Motorista"
          },
          {
            "text": "Passenger",
            "emoji": "🧳",
            "label": "Passenger (\"pé-sen-djer\")",
            "translationPt": "Passageiro"
          }
        ],
        "options": [
          "Ship",
          "Map",
          "Driver",
          "Passenger"
        ],
        "correctAnswer": "Passenger",
        "explanation": "Passenger (\"pé-sen-djer\") = Passageiro. Exemplo: \"All passengers must wear seatbelts.\" (Todos os passageiros devem usar cinto.)",
        "phoneticHint": "\"pé-sen-djer\" /ˈpæs.ən.dʒər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Wheel",
        "visualEmoji": "🛞",
        "visualOptions": [
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport (\"ér-pórt\")",
            "translationPt": "Aeroporto"
          },
          {
            "text": "Stop",
            "emoji": "🚏",
            "label": "Stop (\"stóp\")",
            "translationPt": "Parada / Ponto"
          },
          {
            "text": "Wheel",
            "emoji": "🛞",
            "label": "Wheel (\"uíl\")",
            "translationPt": "Roda / Volante"
          },
          {
            "text": "Passenger",
            "emoji": "🧳",
            "label": "Passenger (\"pé-sen-djer\")",
            "translationPt": "Passageiro"
          }
        ],
        "options": [
          "Airport",
          "Stop",
          "Wheel",
          "Passenger"
        ],
        "correctAnswer": "Wheel",
        "explanation": "Wheel (\"uíl\") = Roda / Volante. Exemplo: \"Keep both hands on the wheel.\" (Mantenha as duas mãos no volante.)",
        "phoneticHint": "\"uíl\" /wiːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tire",
        "visualEmoji": "🛞",
        "visualOptions": [
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire (\"tái-er\")",
            "translationPt": "Pneu"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway (\"sâb-uêi\")",
            "translationPt": "Metrô"
          },
          {
            "text": "Passenger",
            "emoji": "🧳",
            "label": "Passenger (\"pé-sen-djer\")",
            "translationPt": "Passageiro"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge (\"brídj\")",
            "translationPt": "Ponte"
          }
        ],
        "options": [
          "Tire",
          "Subway",
          "Passenger",
          "Bridge"
        ],
        "correctAnswer": "Tire",
        "explanation": "Tire (\"tái-er\") = Pneu. Exemplo: \"Check the air in the car tire.\" (Verifique o ar do pneu do carro.)",
        "phoneticHint": "\"tái-er\" /ˈtaɪ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Map",
        "visualEmoji": "🗺️",
        "visualOptions": [
          {
            "text": "Traffic",
            "emoji": "🚦",
            "label": "Traffic (\"tré-fik\")",
            "translationPt": "Trânsito / Tráfego"
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map (\"mép\")",
            "translationPt": "Mapa"
          },
          {
            "text": "Passenger",
            "emoji": "🧳",
            "label": "Passenger (\"pé-sen-djer\")",
            "translationPt": "Passageiro"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport (\"ér-pórt\")",
            "translationPt": "Aeroporto"
          }
        ],
        "options": [
          "Traffic",
          "Map",
          "Passenger",
          "Airport"
        ],
        "correctAnswer": "Map",
        "explanation": "Map (\"mép\") = Mapa. Exemplo: \"Check the city map on your phone.\" (Olhe o mapa da cidade no celular.)",
        "phoneticHint": "\"mép\" /mæp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Stop",
        "visualEmoji": "🚏",
        "visualOptions": [
          {
            "text": "Traffic",
            "emoji": "🚦",
            "label": "Traffic (\"tré-fik\")",
            "translationPt": "Trânsito / Tráfego"
          },
          {
            "text": "Stop",
            "emoji": "🚏",
            "label": "Stop (\"stóp\")",
            "translationPt": "Parada / Ponto"
          },
          {
            "text": "Driver",
            "emoji": "🧑‍✈️",
            "label": "Driver (\"drái-ver\")",
            "translationPt": "Motorista"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge (\"brídj\")",
            "translationPt": "Ponte"
          }
        ],
        "options": [
          "Traffic",
          "Stop",
          "Driver",
          "Bridge"
        ],
        "correctAnswer": "Stop",
        "explanation": "Stop (\"stóp\") = Parada / Ponto. Exemplo: \"Wait for me at the bus stop.\" (Espere por mim no ponto de ônibus.)",
        "phoneticHint": "\"stóp\" /stɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Traffic",
        "visualEmoji": "🚦",
        "visualOptions": [
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport (\"ér-pórt\")",
            "translationPt": "Aeroporto"
          },
          {
            "text": "Wheel",
            "emoji": "🛞",
            "label": "Wheel (\"uíl\")",
            "translationPt": "Roda / Volante"
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire (\"tái-er\")",
            "translationPt": "Pneu"
          },
          {
            "text": "Traffic",
            "emoji": "🚦",
            "label": "Traffic (\"tré-fik\")",
            "translationPt": "Trânsito / Tráfego"
          }
        ],
        "options": [
          "Airport",
          "Wheel",
          "Tire",
          "Traffic"
        ],
        "correctAnswer": "Traffic",
        "explanation": "Traffic (\"tré-fik\") = Trânsito / Tráfego. Exemplo: \"There is heavy traffic this morning.\" (Há trânsito intenso nesta manhã.)",
        "phoneticHint": "\"tré-fik\" /ˈtræf.ɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Ship",
        "contextSentencePt": "Pronúncia simplificada: \"xíp\"",
        "options": [
          "Airport — Aeroporto",
          "Bridge — Ponte",
          "Ship — Navio",
          "Road — Estrada / Rodovia"
        ],
        "correctAnswer": "Ship — Navio",
        "explanation": "Você ouviu \"Ship\" (\"xíp\") = Navio. Frase: \"A large ship sails across the ocean.\" (Um grande navio navega pelo oceano.)",
        "phoneticHint": "\"xíp\" /ʃɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Driver",
        "contextSentencePt": "Pronúncia simplificada: \"drái-ver\"",
        "options": [
          "Stop — Parada / Ponto",
          "Driver — Motorista",
          "Airport — Aeroporto",
          "Ship — Navio"
        ],
        "correctAnswer": "Driver — Motorista",
        "explanation": "Você ouviu \"Driver\" (\"drái-ver\") = Motorista. Frase: \"The bus driver is very polite.\" (O motorista do ônibus é muito educado.)",
        "phoneticHint": "\"drái-ver\" /ˈdraɪ.vər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Map",
        "contextSentencePt": "Pronúncia simplificada: \"mép\"",
        "options": [
          "Passenger — Passageiro",
          "Tire — Pneu",
          "Bridge — Ponte",
          "Map — Mapa"
        ],
        "correctAnswer": "Map — Mapa",
        "explanation": "Você ouviu \"Map\" (\"mép\") = Mapa. Frase: \"Check the city map on your phone.\" (Olhe o mapa da cidade no celular.)",
        "phoneticHint": "\"mép\" /mæp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🛣️",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Road\" (pronúncia: \"rôud\")?",
        "audioPhrase": "Road",
        "contextSentence": "Follow this road to the beach.",
        "contextSentencePt": "Siga esta estrada até a praia.",
        "options": [
          "Estrada / Rodovia",
          "Trânsito / Tráfego",
          "Navio",
          "Parada / Ponto"
        ],
        "correctAnswer": "Estrada / Rodovia",
        "explanation": "\"Road\" (\"rôud\") significa \"Estrada / Rodovia\".",
        "phoneticHint": "\"rôud\" /roʊd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🧳",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Passenger\" (pronúncia: \"pé-sen-djer\")?",
        "audioPhrase": "Passenger",
        "contextSentence": "All passengers must wear seatbelts.",
        "contextSentencePt": "Todos os passageiros devem usar cinto.",
        "options": [
          "Metrô",
          "Roda / Volante",
          "Ponte",
          "Passageiro"
        ],
        "correctAnswer": "Passageiro",
        "explanation": "\"Passenger\" (\"pé-sen-djer\") significa \"Passageiro\".",
        "phoneticHint": "\"pé-sen-djer\" /ˈpæs.ən.dʒər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🚏",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Stop\" (pronúncia: \"stóp\")?",
        "audioPhrase": "Stop",
        "contextSentence": "Wait for me at the bus stop.",
        "contextSentencePt": "Espere por mim no ponto de ônibus.",
        "options": [
          "Ponte",
          "Mapa",
          "Parada / Ponto",
          "Passageiro"
        ],
        "correctAnswer": "Parada / Ponto",
        "explanation": "\"Stop\" (\"stóp\") significa \"Parada / Ponto\".",
        "phoneticHint": "\"stóp\" /stɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🌉",
        "prompt": "✍️ Complete a frase em inglês (\"Dirija sobre a ponte do rio.\"):",
        "contextSentence": "Drive across the river ______.",
        "contextSentencePt": "Tradução: \"Dirija sobre a ponte do rio.\"",
        "audioPhrase": "Drive across the river bridge.",
        "options": [
          "Bridge",
          "Road",
          "Subway",
          "Traffic"
        ],
        "correctAnswer": "Bridge",
        "explanation": "Frase completa: \"Drive across the river bridge.\" (Dirija sobre a ponte do rio.) — Bridge (\"brídj\") = Ponte.",
        "phoneticHint": "\"brídj\" /brɪdʒ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p14-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🛞",
        "prompt": "✍️ Complete a frase em inglês (\"Mantenha as duas mãos no volante.\"):",
        "contextSentence": "Keep both hands on the ______.",
        "contextSentencePt": "Tradução: \"Mantenha as duas mãos no volante.\"",
        "audioPhrase": "Keep both hands on the wheel.",
        "options": [
          "Map",
          "Wheel",
          "Subway",
          "Tire"
        ],
        "correctAnswer": "Wheel",
        "explanation": "Frase completa: \"Keep both hands on the wheel.\" (Mantenha as duas mãos no volante.) — Wheel (\"uíl\") = Roda / Volante.",
        "phoneticHint": "\"uíl\" /wiːl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p14-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🚦",
        "prompt": "✍️ Complete a frase em inglês (\"Há trânsito intenso nesta manhã.\"):",
        "contextSentence": "There is heavy ______ this morning.",
        "contextSentencePt": "Tradução: \"Há trânsito intenso nesta manhã.\"",
        "audioPhrase": "There is heavy traffic this morning.",
        "options": [
          "Tire",
          "Traffic",
          "Map",
          "Stop"
        ],
        "correctAnswer": "Traffic",
        "explanation": "Frase completa: \"There is heavy traffic this morning.\" (Há trânsito intenso nesta manhã.) — Traffic (\"tré-fik\") = Trânsito / Tráfego.",
        "phoneticHint": "\"tré-fik\" /ˈtræf.ɪk/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p15",
    "worldId": 0,
    "phaseNumber": 15,
    "themeId": "transport",
    "themeTitle": "Transporte",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "vocabItems": [
      {
        "word": "Helicopter",
        "pt": "Helicóptero",
        "simplePronunciation": "ré-li-cóp-ter",
        "phonetic": "/ˈhel.ɪˌkɑːp.tər/",
        "exampleEn": "The helicopter landed on the roof.",
        "examplePt": "O helicóptero pousou no topo do prédio.",
        "emoji": "🚁"
      },
      {
        "word": "Van",
        "pt": "Van / Perua",
        "simplePronunciation": "vén",
        "phonetic": "/væn/",
        "exampleEn": "The school van picks up the kids.",
        "examplePt": "A van escolar busca as crianças.",
        "emoji": "🚐"
      },
      {
        "word": "Ambulance",
        "pt": "Ambulância",
        "simplePronunciation": "ém-biu-lans",
        "phonetic": "/ˈæm.bjə.ləns/",
        "exampleEn": "Make way for the ambulance.",
        "examplePt": "Dê passagem para a ambulância.",
        "emoji": "🚑"
      },
      {
        "word": "Seat",
        "pt": "Assento / Banco",
        "simplePronunciation": "sít",
        "phonetic": "/siːt/",
        "exampleEn": "Please take a seat on the train.",
        "examplePt": "Por favor, sente-se no banco do trem.",
        "emoji": "💺"
      },
      {
        "word": "Helmet",
        "pt": "Capacete",
        "simplePronunciation": "rél-met",
        "phonetic": "/ˈhel.mət/",
        "exampleEn": "Always wear a safety helmet.",
        "examplePt": "Use sempre um capacete de segurança.",
        "emoji": "⛑️"
      },
      {
        "word": "Sidewalk",
        "pt": "Calçada",
        "simplePronunciation": "sáid-uók",
        "phonetic": "/ˈsaɪd.wɔːk/",
        "exampleEn": "Pedestrians walk on the sidewalk.",
        "examplePt": "Os pedestres caminham na calçada.",
        "emoji": "🚶"
      },
      {
        "word": "Crosswalk",
        "pt": "Faixa de pedestres",
        "simplePronunciation": "crós-uók",
        "phonetic": "/ˈkrɔːs.wɔːk/",
        "exampleEn": "Cross the avenue at the crosswalk.",
        "examplePt": "Atravesse a avenida na faixa de pedestres.",
        "emoji": "🚸"
      },
      {
        "word": "Corner",
        "pt": "Esquina",
        "simplePronunciation": "cór-ner",
        "phonetic": "/ˈkɔːr.nər/",
        "exampleEn": "The bakery is on the street corner.",
        "examplePt": "A padaria fica na esquina da rua.",
        "emoji": "🏙️"
      },
      {
        "word": "Fuel",
        "pt": "Combustível / Gasolina",
        "simplePronunciation": "fiú-el",
        "phonetic": "/ˈfjuː.əl/",
        "exampleEn": "Stop to put fuel in the car.",
        "examplePt": "Pare para colocar combustível no carro.",
        "emoji": "⛽"
      },
      {
        "word": "Engine",
        "pt": "Motor",
        "simplePronunciation": "én-djin",
        "phonetic": "/ˈen.dʒɪn/",
        "exampleEn": "Start the car engine.",
        "examplePt": "Ligue o motor do carro.",
        "emoji": "⚙️"
      },
      {
        "word": "Sign",
        "pt": "Placa de trânsito",
        "simplePronunciation": "sáin",
        "phonetic": "/saɪn/",
        "exampleEn": "Read the road sign ahead.",
        "examplePt": "Leia a placa de trânsito à frente.",
        "emoji": "🛑"
      },
      {
        "word": "Park",
        "pt": "Estacionar / Parque",
        "simplePronunciation": "párk",
        "phonetic": "/pɑːrk/",
        "exampleEn": "Where can I park the car?",
        "examplePt": "Onde posso estacionar o carro?",
        "emoji": "🅿️"
      }
    ],
    "title": "Transporte • Módulo 3: Palavras Intermediárias",
    "subtitle": "Nível 3/4 • 12 palavras intermediárias da via pública e segurança",
    "pedagogicalObjective": "Dominar elementos da via urbana, segurança no trânsito e veículos de serviço.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Transporte — Módulo 3 • Intermediárias: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p15-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Helicopter",
        "visualEmoji": "🚁",
        "visualOptions": [
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter (\"ré-li-cóp-ter\")",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel (\"fiú-el\")",
            "translationPt": "Combustível / Gasolina"
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van (\"vén\")",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk (\"crós-uók\")",
            "translationPt": "Faixa de pedestres"
          }
        ],
        "options": [
          "Helicopter",
          "Fuel",
          "Van",
          "Crosswalk"
        ],
        "correctAnswer": "Helicopter",
        "explanation": "Helicopter (\"ré-li-cóp-ter\") = Helicóptero. Exemplo: \"The helicopter landed on the roof.\" (O helicóptero pousou no topo do prédio.)",
        "phoneticHint": "\"ré-li-cóp-ter\" /ˈhel.ɪˌkɑːp.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Van",
        "visualEmoji": "🚐",
        "visualOptions": [
          {
            "text": "Engine",
            "emoji": "⚙️",
            "label": "Engine (\"én-djin\")",
            "translationPt": "Motor"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance (\"ém-biu-lans\")",
            "translationPt": "Ambulância"
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van (\"vén\")",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner (\"cór-ner\")",
            "translationPt": "Esquina"
          }
        ],
        "options": [
          "Engine",
          "Ambulance",
          "Van",
          "Corner"
        ],
        "correctAnswer": "Van",
        "explanation": "Van (\"vén\") = Van / Perua. Exemplo: \"The school van picks up the kids.\" (A van escolar busca as crianças.)",
        "phoneticHint": "\"vén\" /væn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ambulance",
        "visualEmoji": "🚑",
        "visualOptions": [
          {
            "text": "Park",
            "emoji": "🅿️",
            "label": "Park (\"párk\")",
            "translationPt": "Estacionar / Parque"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance (\"ém-biu-lans\")",
            "translationPt": "Ambulância"
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van (\"vén\")",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk (\"crós-uók\")",
            "translationPt": "Faixa de pedestres"
          }
        ],
        "options": [
          "Park",
          "Ambulance",
          "Van",
          "Crosswalk"
        ],
        "correctAnswer": "Ambulance",
        "explanation": "Ambulance (\"ém-biu-lans\") = Ambulância. Exemplo: \"Make way for the ambulance.\" (Dê passagem para a ambulância.)",
        "phoneticHint": "\"ém-biu-lans\" /ˈæm.bjə.ləns/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Seat",
        "visualEmoji": "💺",
        "visualOptions": [
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk (\"crós-uók\")",
            "translationPt": "Faixa de pedestres"
          },
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner (\"cór-ner\")",
            "translationPt": "Esquina"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet (\"rél-met\")",
            "translationPt": "Capacete"
          },
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat (\"sít\")",
            "translationPt": "Assento / Banco"
          }
        ],
        "options": [
          "Crosswalk",
          "Corner",
          "Helmet",
          "Seat"
        ],
        "correctAnswer": "Seat",
        "explanation": "Seat (\"sít\") = Assento / Banco. Exemplo: \"Please take a seat on the train.\" (Por favor, sente-se no banco do trem.)",
        "phoneticHint": "\"sít\" /siːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Helmet",
        "visualEmoji": "⛑️",
        "visualOptions": [
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet (\"rél-met\")",
            "translationPt": "Capacete"
          },
          {
            "text": "Sign",
            "emoji": "🛑",
            "label": "Sign (\"sáin\")",
            "translationPt": "Placa de trânsito"
          },
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner (\"cór-ner\")",
            "translationPt": "Esquina"
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel (\"fiú-el\")",
            "translationPt": "Combustível / Gasolina"
          }
        ],
        "options": [
          "Helmet",
          "Sign",
          "Corner",
          "Fuel"
        ],
        "correctAnswer": "Helmet",
        "explanation": "Helmet (\"rél-met\") = Capacete. Exemplo: \"Always wear a safety helmet.\" (Use sempre um capacete de segurança.)",
        "phoneticHint": "\"rél-met\" /ˈhel.mət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sidewalk",
        "visualEmoji": "🚶",
        "visualOptions": [
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet (\"rél-met\")",
            "translationPt": "Capacete"
          },
          {
            "text": "Engine",
            "emoji": "⚙️",
            "label": "Engine (\"én-djin\")",
            "translationPt": "Motor"
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van (\"vén\")",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk (\"sáid-uók\")",
            "translationPt": "Calçada"
          }
        ],
        "options": [
          "Helmet",
          "Engine",
          "Van",
          "Sidewalk"
        ],
        "correctAnswer": "Sidewalk",
        "explanation": "Sidewalk (\"sáid-uók\") = Calçada. Exemplo: \"Pedestrians walk on the sidewalk.\" (Os pedestres caminham na calçada.)",
        "phoneticHint": "\"sáid-uók\" /ˈsaɪd.wɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Crosswalk",
        "visualEmoji": "🚸",
        "visualOptions": [
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter (\"ré-li-cóp-ter\")",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel (\"fiú-el\")",
            "translationPt": "Combustível / Gasolina"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk (\"crós-uók\")",
            "translationPt": "Faixa de pedestres"
          },
          {
            "text": "Park",
            "emoji": "🅿️",
            "label": "Park (\"párk\")",
            "translationPt": "Estacionar / Parque"
          }
        ],
        "options": [
          "Helicopter",
          "Fuel",
          "Crosswalk",
          "Park"
        ],
        "correctAnswer": "Crosswalk",
        "explanation": "Crosswalk (\"crós-uók\") = Faixa de pedestres. Exemplo: \"Cross the avenue at the crosswalk.\" (Atravesse a avenida na faixa de pedestres.)",
        "phoneticHint": "\"crós-uók\" /ˈkrɔːs.wɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Corner",
        "visualEmoji": "🏙️",
        "visualOptions": [
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner (\"cór-ner\")",
            "translationPt": "Esquina"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk (\"crós-uók\")",
            "translationPt": "Faixa de pedestres"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter (\"ré-li-cóp-ter\")",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel (\"fiú-el\")",
            "translationPt": "Combustível / Gasolina"
          }
        ],
        "options": [
          "Corner",
          "Crosswalk",
          "Helicopter",
          "Fuel"
        ],
        "correctAnswer": "Corner",
        "explanation": "Corner (\"cór-ner\") = Esquina. Exemplo: \"The bakery is on the street corner.\" (A padaria fica na esquina da rua.)",
        "phoneticHint": "\"cór-ner\" /ˈkɔːr.nər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Fuel",
        "visualEmoji": "⛽",
        "visualOptions": [
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van (\"vén\")",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel (\"fiú-el\")",
            "translationPt": "Combustível / Gasolina"
          },
          {
            "text": "Sign",
            "emoji": "🛑",
            "label": "Sign (\"sáin\")",
            "translationPt": "Placa de trânsito"
          },
          {
            "text": "Park",
            "emoji": "🅿️",
            "label": "Park (\"párk\")",
            "translationPt": "Estacionar / Parque"
          }
        ],
        "options": [
          "Van",
          "Fuel",
          "Sign",
          "Park"
        ],
        "correctAnswer": "Fuel",
        "explanation": "Fuel (\"fiú-el\") = Combustível / Gasolina. Exemplo: \"Stop to put fuel in the car.\" (Pare para colocar combustível no carro.)",
        "phoneticHint": "\"fiú-el\" /ˈfjuː.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Engine",
        "visualEmoji": "⚙️",
        "visualOptions": [
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter (\"ré-li-cóp-ter\")",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Engine",
            "emoji": "⚙️",
            "label": "Engine (\"én-djin\")",
            "translationPt": "Motor"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk (\"sáid-uók\")",
            "translationPt": "Calçada"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet (\"rél-met\")",
            "translationPt": "Capacete"
          }
        ],
        "options": [
          "Helicopter",
          "Engine",
          "Sidewalk",
          "Helmet"
        ],
        "correctAnswer": "Engine",
        "explanation": "Engine (\"én-djin\") = Motor. Exemplo: \"Start the car engine.\" (Ligue o motor do carro.)",
        "phoneticHint": "\"én-djin\" /ˈen.dʒɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sign",
        "visualEmoji": "🛑",
        "visualOptions": [
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter (\"ré-li-cóp-ter\")",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Fuel",
            "emoji": "⛽",
            "label": "Fuel (\"fiú-el\")",
            "translationPt": "Combustível / Gasolina"
          },
          {
            "text": "Seat",
            "emoji": "💺",
            "label": "Seat (\"sít\")",
            "translationPt": "Assento / Banco"
          },
          {
            "text": "Sign",
            "emoji": "🛑",
            "label": "Sign (\"sáin\")",
            "translationPt": "Placa de trânsito"
          }
        ],
        "options": [
          "Helicopter",
          "Fuel",
          "Seat",
          "Sign"
        ],
        "correctAnswer": "Sign",
        "explanation": "Sign (\"sáin\") = Placa de trânsito. Exemplo: \"Read the road sign ahead.\" (Leia a placa de trânsito à frente.)",
        "phoneticHint": "\"sáin\" /saɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Park",
        "visualEmoji": "🅿️",
        "visualOptions": [
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van (\"vén\")",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk (\"sáid-uók\")",
            "translationPt": "Calçada"
          },
          {
            "text": "Park",
            "emoji": "🅿️",
            "label": "Park (\"párk\")",
            "translationPt": "Estacionar / Parque"
          },
          {
            "text": "Corner",
            "emoji": "🏙️",
            "label": "Corner (\"cór-ner\")",
            "translationPt": "Esquina"
          }
        ],
        "options": [
          "Van",
          "Sidewalk",
          "Park",
          "Corner"
        ],
        "correctAnswer": "Park",
        "explanation": "Park (\"párk\") = Estacionar / Parque. Exemplo: \"Where can I park the car?\" (Onde posso estacionar o carro?)",
        "phoneticHint": "\"párk\" /pɑːrk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Van",
        "contextSentencePt": "Pronúncia simplificada: \"vén\"",
        "options": [
          "Park — Estacionar / Parque",
          "Van — Van / Perua",
          "Helicopter — Helicóptero",
          "Engine — Motor"
        ],
        "correctAnswer": "Van — Van / Perua",
        "explanation": "Você ouviu \"Van\" (\"vén\") = Van / Perua. Frase: \"The school van picks up the kids.\" (A van escolar busca as crianças.)",
        "phoneticHint": "\"vén\" /væn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Sidewalk",
        "contextSentencePt": "Pronúncia simplificada: \"sáid-uók\"",
        "options": [
          "Ambulance — Ambulância",
          "Crosswalk — Faixa de pedestres",
          "Helicopter — Helicóptero",
          "Sidewalk — Calçada"
        ],
        "correctAnswer": "Sidewalk — Calçada",
        "explanation": "Você ouviu \"Sidewalk\" (\"sáid-uók\") = Calçada. Frase: \"Pedestrians walk on the sidewalk.\" (Os pedestres caminham na calçada.)",
        "phoneticHint": "\"sáid-uók\" /ˈsaɪd.wɔːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Engine",
        "contextSentencePt": "Pronúncia simplificada: \"én-djin\"",
        "options": [
          "Engine — Motor",
          "Seat — Assento / Banco",
          "Park — Estacionar / Parque",
          "Fuel — Combustível / Gasolina"
        ],
        "correctAnswer": "Engine — Motor",
        "explanation": "Você ouviu \"Engine\" (\"én-djin\") = Motor. Frase: \"Start the car engine.\" (Ligue o motor do carro.)",
        "phoneticHint": "\"én-djin\" /ˈen.dʒɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🚑",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Ambulance\" (pronúncia: \"ém-biu-lans\")?",
        "audioPhrase": "Ambulance",
        "contextSentence": "Make way for the ambulance.",
        "contextSentencePt": "Dê passagem para a ambulância.",
        "options": [
          "Helicóptero",
          "Esquina",
          "Faixa de pedestres",
          "Ambulância"
        ],
        "correctAnswer": "Ambulância",
        "explanation": "\"Ambulance\" (\"ém-biu-lans\") significa \"Ambulância\".",
        "phoneticHint": "\"ém-biu-lans\" /ˈæm.bjə.ləns/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🚸",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Crosswalk\" (pronúncia: \"crós-uók\")?",
        "audioPhrase": "Crosswalk",
        "contextSentence": "Cross the avenue at the crosswalk.",
        "contextSentencePt": "Atravesse a avenida na faixa de pedestres.",
        "options": [
          "Van / Perua",
          "Esquina",
          "Faixa de pedestres",
          "Estacionar / Parque"
        ],
        "correctAnswer": "Faixa de pedestres",
        "explanation": "\"Crosswalk\" (\"crós-uók\") significa \"Faixa de pedestres\".",
        "phoneticHint": "\"crós-uók\" /ˈkrɔːs.wɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🛑",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Sign\" (pronúncia: \"sáin\")?",
        "audioPhrase": "Sign",
        "contextSentence": "Read the road sign ahead.",
        "contextSentencePt": "Leia a placa de trânsito à frente.",
        "options": [
          "Placa de trânsito",
          "Esquina",
          "Ambulância",
          "Calçada"
        ],
        "correctAnswer": "Placa de trânsito",
        "explanation": "\"Sign\" (\"sáin\") significa \"Placa de trânsito\".",
        "phoneticHint": "\"sáin\" /saɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-fill-1",
        "type": "fill-blank",
        "visualEmoji": "💺",
        "prompt": "✍️ Complete a frase em inglês (\"Por favor, sente-se no banco do trem.\"):",
        "contextSentence": "Please take a ______ on the train.",
        "contextSentencePt": "Tradução: \"Por favor, sente-se no banco do trem.\"",
        "audioPhrase": "Please take a seat on the train.",
        "options": [
          "Van",
          "Seat",
          "Ambulance",
          "Sidewalk"
        ],
        "correctAnswer": "Seat",
        "explanation": "Frase completa: \"Please take a seat on the train.\" (Por favor, sente-se no banco do trem.) — Seat (\"sít\") = Assento / Banco.",
        "phoneticHint": "\"sít\" /siːt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p15-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🏙️",
        "prompt": "✍️ Complete a frase em inglês (\"A padaria fica na esquina da rua.\"):",
        "contextSentence": "The bakery is on the street ______.",
        "contextSentencePt": "Tradução: \"A padaria fica na esquina da rua.\"",
        "audioPhrase": "The bakery is on the street corner.",
        "options": [
          "Sign",
          "Corner",
          "Sidewalk",
          "Van"
        ],
        "correctAnswer": "Corner",
        "explanation": "Frase completa: \"The bakery is on the street corner.\" (A padaria fica na esquina da rua.) — Corner (\"cór-ner\") = Esquina.",
        "phoneticHint": "\"cór-ner\" /ˈkɔːr.nər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p15-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🅿️",
        "prompt": "✍️ Complete a frase em inglês (\"Onde posso estacionar o carro?\"):",
        "contextSentence": "Where can I ______ the car?",
        "contextSentencePt": "Tradução: \"Onde posso estacionar o carro?\"",
        "audioPhrase": "Where can I park the car?",
        "options": [
          "Fuel",
          "Ambulance",
          "Seat",
          "Park"
        ],
        "correctAnswer": "Park",
        "explanation": "Frase completa: \"Where can I park the car?\" (Onde posso estacionar o carro?) — Park (\"párk\") = Estacionar / Parque.",
        "phoneticHint": "\"párk\" /pɑːrk/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p16",
    "worldId": 0,
    "phaseNumber": 16,
    "themeId": "transport",
    "themeTitle": "Transporte",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "vocabItems": [
      {
        "word": "Scooter",
        "pt": "Patinete / Scooter",
        "simplePronunciation": "scú-ter",
        "phonetic": "/ˈskuː.tər/",
        "exampleEn": "He rides an electric scooter.",
        "examplePt": "Ele anda de patinete elétrico.",
        "emoji": "🛴"
      },
      {
        "word": "Tractor",
        "pt": "Trator",
        "simplePronunciation": "trék-tor",
        "phonetic": "/ˈtræk.tər/",
        "exampleEn": "The farmer drives a green tractor.",
        "examplePt": "O fazendeiro dirige um trator verde.",
        "emoji": "🚜"
      },
      {
        "word": "Ferry",
        "pt": "Balsa",
        "simplePronunciation": "fé-ri",
        "phonetic": "/ˈfer.i/",
        "exampleEn": "We crossed the bay on a ferry.",
        "examplePt": "Atravessamos a baía em uma balsa.",
        "emoji": "⛴️"
      },
      {
        "word": "Tram",
        "pt": "Bonde / VLT",
        "simplePronunciation": "trém",
        "phonetic": "/træm/",
        "exampleEn": "The electric tram runs on rails.",
        "examplePt": "O bonde elétrico anda sobre trilhos.",
        "emoji": "🚋"
      },
      {
        "word": "Runway",
        "pt": "Pista de pouso",
        "simplePronunciation": "rân-uêi",
        "phonetic": "/ˈrʌn.weɪ/",
        "exampleEn": "The plane accelerated on the runway.",
        "examplePt": "O avião acelerou na pista de pouso.",
        "emoji": "🛫"
      },
      {
        "word": "Harbor",
        "pt": "Porto",
        "simplePronunciation": "rár-bor",
        "phonetic": "/ˈhɑːr.bər/",
        "exampleEn": "Many boats are anchored in the harbor.",
        "examplePt": "Muitos barcos estão ancorados no porto.",
        "emoji": "⚓"
      },
      {
        "word": "Anchor",
        "pt": "Âncora",
        "simplePronunciation": "én-cor",
        "phonetic": "/ˈæŋ.kər/",
        "exampleEn": "The ship dropped its heavy anchor.",
        "examplePt": "O navio lançou sua âncora pesada.",
        "emoji": "⚓"
      },
      {
        "word": "Pedal",
        "pt": "Pedal",
        "simplePronunciation": "pé-dal",
        "phonetic": "/ˈped.əl/",
        "exampleEn": "Push the bicycle pedal with your foot.",
        "examplePt": "Empurre o pedal da bicicleta com o pé.",
        "emoji": "🚲"
      },
      {
        "word": "Brake",
        "pt": "Freio",
        "simplePronunciation": "brêik",
        "phonetic": "/breɪk/",
        "exampleEn": "Step on the brake to stop the car.",
        "examplePt": "Pise no freio para parar o carro.",
        "emoji": "🛑"
      },
      {
        "word": "Horn",
        "pt": "Buzina",
        "simplePronunciation": "rórn",
        "phonetic": "/hɔːrn/",
        "exampleEn": "Do not honk the car horn at night.",
        "examplePt": "Não toque a buzina do carro à noite.",
        "emoji": "📯"
      },
      {
        "word": "Bumper",
        "pt": "Para-choque",
        "simplePronunciation": "bâm-per",
        "phonetic": "/ˈbʌm.pər/",
        "exampleEn": "The front bumper protects the car.",
        "examplePt": "O para-choque dianteiro protege o carro.",
        "emoji": "🚗"
      },
      {
        "word": "Tunnel",
        "pt": "Túnel",
        "simplePronunciation": "tâ-nel",
        "phonetic": "/ˈtʌn.əl/",
        "exampleEn": "Turn on the headlights inside the tunnel.",
        "examplePt": "Acenda os faróis dentro do túnel.",
        "emoji": "🚇"
      }
    ],
    "title": "Transporte • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Nível 4/4 • 12 veículos e componentes específicos de transporte",
    "pedagogicalObjective": "Conhecer meios de transporte e peças mecânicas menos frequentes.",
    "type": "boss",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Transporte — Módulo 4 • Menos Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p16-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Scooter",
        "visualEmoji": "🛴",
        "visualOptions": [
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel (\"tâ-nel\")",
            "translationPt": "Túnel"
          },
          {
            "text": "Bumper",
            "emoji": "🚗",
            "label": "Bumper (\"bâm-per\")",
            "translationPt": "Para-choque"
          },
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter (\"scú-ter\")",
            "translationPt": "Patinete / Scooter"
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn (\"rórn\")",
            "translationPt": "Buzina"
          }
        ],
        "options": [
          "Tunnel",
          "Bumper",
          "Scooter",
          "Horn"
        ],
        "correctAnswer": "Scooter",
        "explanation": "Scooter (\"scú-ter\") = Patinete / Scooter. Exemplo: \"He rides an electric scooter.\" (Ele anda de patinete elétrico.)",
        "phoneticHint": "\"scú-ter\" /ˈskuː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tractor",
        "visualEmoji": "🚜",
        "visualOptions": [
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn (\"rórn\")",
            "translationPt": "Buzina"
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor (\"trék-tor\")",
            "translationPt": "Trator"
          },
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal (\"pé-dal\")",
            "translationPt": "Pedal"
          },
          {
            "text": "Ferry",
            "emoji": "⛴️",
            "label": "Ferry (\"fé-ri\")",
            "translationPt": "Balsa"
          }
        ],
        "options": [
          "Horn",
          "Tractor",
          "Pedal",
          "Ferry"
        ],
        "correctAnswer": "Tractor",
        "explanation": "Tractor (\"trék-tor\") = Trator. Exemplo: \"The farmer drives a green tractor.\" (O fazendeiro dirige um trator verde.)",
        "phoneticHint": "\"trék-tor\" /ˈtræk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ferry",
        "visualEmoji": "⛴️",
        "visualOptions": [
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal (\"pé-dal\")",
            "translationPt": "Pedal"
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor (\"én-cor\")",
            "translationPt": "Âncora"
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor (\"trék-tor\")",
            "translationPt": "Trator"
          },
          {
            "text": "Ferry",
            "emoji": "⛴️",
            "label": "Ferry (\"fé-ri\")",
            "translationPt": "Balsa"
          }
        ],
        "options": [
          "Pedal",
          "Anchor",
          "Tractor",
          "Ferry"
        ],
        "correctAnswer": "Ferry",
        "explanation": "Ferry (\"fé-ri\") = Balsa. Exemplo: \"We crossed the bay on a ferry.\" (Atravessamos a baía em uma balsa.)",
        "phoneticHint": "\"fé-ri\" /ˈfer.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tram",
        "visualEmoji": "🚋",
        "visualOptions": [
          {
            "text": "Tram",
            "emoji": "🚋",
            "label": "Tram (\"trém\")",
            "translationPt": "Bonde / VLT"
          },
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel (\"tâ-nel\")",
            "translationPt": "Túnel"
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway (\"rân-uêi\")",
            "translationPt": "Pista de pouso"
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn (\"rórn\")",
            "translationPt": "Buzina"
          }
        ],
        "options": [
          "Tram",
          "Tunnel",
          "Runway",
          "Horn"
        ],
        "correctAnswer": "Tram",
        "explanation": "Tram (\"trém\") = Bonde / VLT. Exemplo: \"The electric tram runs on rails.\" (O bonde elétrico anda sobre trilhos.)",
        "phoneticHint": "\"trém\" /træm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Runway",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake (\"brêik\")",
            "translationPt": "Freio"
          },
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal (\"pé-dal\")",
            "translationPt": "Pedal"
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor (\"én-cor\")",
            "translationPt": "Âncora"
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway (\"rân-uêi\")",
            "translationPt": "Pista de pouso"
          }
        ],
        "options": [
          "Brake",
          "Pedal",
          "Anchor",
          "Runway"
        ],
        "correctAnswer": "Runway",
        "explanation": "Runway (\"rân-uêi\") = Pista de pouso. Exemplo: \"The plane accelerated on the runway.\" (O avião acelerou na pista de pouso.)",
        "phoneticHint": "\"rân-uêi\" /ˈrʌn.weɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Harbor",
        "visualEmoji": "⚓",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter (\"scú-ter\")",
            "translationPt": "Patinete / Scooter"
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn (\"rórn\")",
            "translationPt": "Buzina"
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor (\"rár-bor\")",
            "translationPt": "Porto"
          },
          {
            "text": "Ferry",
            "emoji": "⛴️",
            "label": "Ferry (\"fé-ri\")",
            "translationPt": "Balsa"
          }
        ],
        "options": [
          "Scooter",
          "Horn",
          "Harbor",
          "Ferry"
        ],
        "correctAnswer": "Harbor",
        "explanation": "Harbor (\"rár-bor\") = Porto. Exemplo: \"Many boats are anchored in the harbor.\" (Muitos barcos estão ancorados no porto.)",
        "phoneticHint": "\"rár-bor\" /ˈhɑːr.bər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Anchor",
        "visualEmoji": "⚓",
        "visualOptions": [
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor (\"én-cor\")",
            "translationPt": "Âncora"
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn (\"rórn\")",
            "translationPt": "Buzina"
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway (\"rân-uêi\")",
            "translationPt": "Pista de pouso"
          },
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel (\"tâ-nel\")",
            "translationPt": "Túnel"
          }
        ],
        "options": [
          "Anchor",
          "Horn",
          "Runway",
          "Tunnel"
        ],
        "correctAnswer": "Anchor",
        "explanation": "Anchor (\"én-cor\") = Âncora. Exemplo: \"The ship dropped its heavy anchor.\" (O navio lançou sua âncora pesada.)",
        "phoneticHint": "\"én-cor\" /ˈæŋ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pedal",
        "visualEmoji": "🚲",
        "visualOptions": [
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor (\"trék-tor\")",
            "translationPt": "Trator"
          },
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal (\"pé-dal\")",
            "translationPt": "Pedal"
          },
          {
            "text": "Bumper",
            "emoji": "🚗",
            "label": "Bumper (\"bâm-per\")",
            "translationPt": "Para-choque"
          },
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway (\"rân-uêi\")",
            "translationPt": "Pista de pouso"
          }
        ],
        "options": [
          "Tractor",
          "Pedal",
          "Bumper",
          "Runway"
        ],
        "correctAnswer": "Pedal",
        "explanation": "Pedal (\"pé-dal\") = Pedal. Exemplo: \"Push the bicycle pedal with your foot.\" (Empurre o pedal da bicicleta com o pé.)",
        "phoneticHint": "\"pé-dal\" /ˈped.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Brake",
        "visualEmoji": "🛑",
        "visualOptions": [
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel (\"tâ-nel\")",
            "translationPt": "Túnel"
          },
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake (\"brêik\")",
            "translationPt": "Freio"
          },
          {
            "text": "Tram",
            "emoji": "🚋",
            "label": "Tram (\"trém\")",
            "translationPt": "Bonde / VLT"
          },
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter (\"scú-ter\")",
            "translationPt": "Patinete / Scooter"
          }
        ],
        "options": [
          "Tunnel",
          "Brake",
          "Tram",
          "Scooter"
        ],
        "correctAnswer": "Brake",
        "explanation": "Brake (\"brêik\") = Freio. Exemplo: \"Step on the brake to stop the car.\" (Pise no freio para parar o carro.)",
        "phoneticHint": "\"brêik\" /breɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Horn",
        "visualEmoji": "📯",
        "visualOptions": [
          {
            "text": "Runway",
            "emoji": "🛫",
            "label": "Runway (\"rân-uêi\")",
            "translationPt": "Pista de pouso"
          },
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake (\"brêik\")",
            "translationPt": "Freio"
          },
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter (\"scú-ter\")",
            "translationPt": "Patinete / Scooter"
          },
          {
            "text": "Horn",
            "emoji": "📯",
            "label": "Horn (\"rórn\")",
            "translationPt": "Buzina"
          }
        ],
        "options": [
          "Runway",
          "Brake",
          "Scooter",
          "Horn"
        ],
        "correctAnswer": "Horn",
        "explanation": "Horn (\"rórn\") = Buzina. Exemplo: \"Do not honk the car horn at night.\" (Não toque a buzina do carro à noite.)",
        "phoneticHint": "\"rórn\" /hɔːrn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bumper",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter (\"scú-ter\")",
            "translationPt": "Patinete / Scooter"
          },
          {
            "text": "Brake",
            "emoji": "🛑",
            "label": "Brake (\"brêik\")",
            "translationPt": "Freio"
          },
          {
            "text": "Bumper",
            "emoji": "🚗",
            "label": "Bumper (\"bâm-per\")",
            "translationPt": "Para-choque"
          },
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal (\"pé-dal\")",
            "translationPt": "Pedal"
          }
        ],
        "options": [
          "Scooter",
          "Brake",
          "Bumper",
          "Pedal"
        ],
        "correctAnswer": "Bumper",
        "explanation": "Bumper (\"bâm-per\") = Para-choque. Exemplo: \"The front bumper protects the car.\" (O para-choque dianteiro protege o carro.)",
        "phoneticHint": "\"bâm-per\" /ˈbʌm.pər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tunnel",
        "visualEmoji": "🚇",
        "visualOptions": [
          {
            "text": "Tunnel",
            "emoji": "🚇",
            "label": "Tunnel (\"tâ-nel\")",
            "translationPt": "Túnel"
          },
          {
            "text": "Harbor",
            "emoji": "⚓",
            "label": "Harbor (\"rár-bor\")",
            "translationPt": "Porto"
          },
          {
            "text": "Pedal",
            "emoji": "🚲",
            "label": "Pedal (\"pé-dal\")",
            "translationPt": "Pedal"
          },
          {
            "text": "Bumper",
            "emoji": "🚗",
            "label": "Bumper (\"bâm-per\")",
            "translationPt": "Para-choque"
          }
        ],
        "options": [
          "Tunnel",
          "Harbor",
          "Pedal",
          "Bumper"
        ],
        "correctAnswer": "Tunnel",
        "explanation": "Tunnel (\"tâ-nel\") = Túnel. Exemplo: \"Turn on the headlights inside the tunnel.\" (Acenda os faróis dentro do túnel.)",
        "phoneticHint": "\"tâ-nel\" /ˈtʌn.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Tractor",
        "contextSentencePt": "Pronúncia simplificada: \"trék-tor\"",
        "options": [
          "Harbor — Porto",
          "Ferry — Balsa",
          "Bumper — Para-choque",
          "Tractor — Trator"
        ],
        "correctAnswer": "Tractor — Trator",
        "explanation": "Você ouviu \"Tractor\" (\"trék-tor\") = Trator. Frase: \"The farmer drives a green tractor.\" (O fazendeiro dirige um trator verde.)",
        "phoneticHint": "\"trék-tor\" /ˈtræk.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Harbor",
        "contextSentencePt": "Pronúncia simplificada: \"rár-bor\"",
        "options": [
          "Harbor — Porto",
          "Horn — Buzina",
          "Pedal — Pedal",
          "Tractor — Trator"
        ],
        "correctAnswer": "Harbor — Porto",
        "explanation": "Você ouviu \"Harbor\" (\"rár-bor\") = Porto. Frase: \"Many boats are anchored in the harbor.\" (Muitos barcos estão ancorados no porto.)",
        "phoneticHint": "\"rár-bor\" /ˈhɑːr.bər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Horn",
        "contextSentencePt": "Pronúncia simplificada: \"rórn\"",
        "options": [
          "Runway — Pista de pouso",
          "Brake — Freio",
          "Tunnel — Túnel",
          "Horn — Buzina"
        ],
        "correctAnswer": "Horn — Buzina",
        "explanation": "Você ouviu \"Horn\" (\"rórn\") = Buzina. Frase: \"Do not honk the car horn at night.\" (Não toque a buzina do carro à noite.)",
        "phoneticHint": "\"rórn\" /hɔːrn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "⛴️",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Ferry\" (pronúncia: \"fé-ri\")?",
        "audioPhrase": "Ferry",
        "contextSentence": "We crossed the bay on a ferry.",
        "contextSentencePt": "Atravessamos a baía em uma balsa.",
        "options": [
          "Âncora",
          "Trator",
          "Balsa",
          "Pista de pouso"
        ],
        "correctAnswer": "Balsa",
        "explanation": "\"Ferry\" (\"fé-ri\") significa \"Balsa\".",
        "phoneticHint": "\"fé-ri\" /ˈfer.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "⚓",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Anchor\" (pronúncia: \"én-cor\")?",
        "audioPhrase": "Anchor",
        "contextSentence": "The ship dropped its heavy anchor.",
        "contextSentencePt": "O navio lançou sua âncora pesada.",
        "options": [
          "Âncora",
          "Bonde / VLT",
          "Túnel",
          "Freio"
        ],
        "correctAnswer": "Âncora",
        "explanation": "\"Anchor\" (\"én-cor\") significa \"Âncora\".",
        "phoneticHint": "\"én-cor\" /ˈæŋ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🚗",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Bumper\" (pronúncia: \"bâm-per\")?",
        "audioPhrase": "Bumper",
        "contextSentence": "The front bumper protects the car.",
        "contextSentencePt": "O para-choque dianteiro protege o carro.",
        "options": [
          "Porto",
          "Para-choque",
          "Túnel",
          "Âncora"
        ],
        "correctAnswer": "Para-choque",
        "explanation": "\"Bumper\" (\"bâm-per\") significa \"Para-choque\".",
        "phoneticHint": "\"bâm-per\" /ˈbʌm.pər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🚋",
        "prompt": "✍️ Complete a frase em inglês (\"O bonde elétrico anda sobre trilhos.\"):",
        "contextSentence": "The electric ______ runs on rails.",
        "contextSentencePt": "Tradução: \"O bonde elétrico anda sobre trilhos.\"",
        "audioPhrase": "The electric tram runs on rails.",
        "options": [
          "Anchor",
          "Tram",
          "Horn",
          "Harbor"
        ],
        "correctAnswer": "Tram",
        "explanation": "Frase completa: \"The electric tram runs on rails.\" (O bonde elétrico anda sobre trilhos.) — Tram (\"trém\") = Bonde / VLT.",
        "phoneticHint": "\"trém\" /træm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p16-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🚲",
        "prompt": "✍️ Complete a frase em inglês (\"Empurre o pedal da bicicleta com o pé.\"):",
        "contextSentence": "Push the bicycle ______ with your foot.",
        "contextSentencePt": "Tradução: \"Empurre o pedal da bicicleta com o pé.\"",
        "audioPhrase": "Push the bicycle pedal with your foot.",
        "options": [
          "Tractor",
          "Bumper",
          "Harbor",
          "Pedal"
        ],
        "correctAnswer": "Pedal",
        "explanation": "Frase completa: \"Push the bicycle pedal with your foot.\" (Empurre o pedal da bicicleta com o pé.) — Pedal (\"pé-dal\") = Pedal.",
        "phoneticHint": "\"pé-dal\" /ˈped.əl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p16-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🚇",
        "prompt": "✍️ Complete a frase em inglês (\"Acenda os faróis dentro do túnel.\"):",
        "contextSentence": "Turn on the headlights inside the ______.",
        "contextSentencePt": "Tradução: \"Acenda os faróis dentro do túnel.\"",
        "audioPhrase": "Turn on the headlights inside the tunnel.",
        "options": [
          "Runway",
          "Ferry",
          "Tunnel",
          "Tram"
        ],
        "correctAnswer": "Tunnel",
        "explanation": "Frase completa: \"Turn on the headlights inside the tunnel.\" (Acenda os faróis dentro do túnel.) — Tunnel (\"tâ-nel\") = Túnel.",
        "phoneticHint": "\"tâ-nel\" /ˈtʌn.əl/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p17",
    "worldId": 0,
    "phaseNumber": 17,
    "themeId": "clothes",
    "themeTitle": "Roupas",
    "frequencyLevel": "Módulo 1 • Essenciais",
    "vocabItems": [
      {
        "word": "Shirt",
        "pt": "Camisa",
        "simplePronunciation": "xârt",
        "phonetic": "/ʃɜːrt/",
        "exampleEn": "He wears a clean white shirt.",
        "examplePt": "Ele veste uma camisa branca limpa.",
        "emoji": "👔"
      },
      {
        "word": "Pants",
        "pt": "Calça",
        "simplePronunciation": "pénts",
        "phonetic": "/pænts/",
        "exampleEn": "These pants are very comfortable.",
        "examplePt": "Esta calça é muito confortável.",
        "emoji": "👖"
      },
      {
        "word": "Shoes",
        "pt": "Sapatos",
        "simplePronunciation": "xúz",
        "phonetic": "/ʃuːz/",
        "exampleEn": "Take off your shoes at the door.",
        "examplePt": "Tire os sapatos na porta.",
        "emoji": "👞"
      },
      {
        "word": "Dress",
        "pt": "Vestido",
        "simplePronunciation": "drés",
        "phonetic": "/dres/",
        "exampleEn": "She bought a beautiful red dress.",
        "examplePt": "Ela comprou um lindo vestido vermelho.",
        "emoji": "👗"
      },
      {
        "word": "Shorts",
        "pt": "Shorts / Bermuda",
        "simplePronunciation": "xórts",
        "phonetic": "/ʃɔːrts/",
        "exampleEn": "I wear shorts on hot days.",
        "examplePt": "Eu uso bermuda em dias quentes.",
        "emoji": "🩳"
      },
      {
        "word": "Skirt",
        "pt": "Saia",
        "simplePronunciation": "skârt",
        "phonetic": "/skɜːrt/",
        "exampleEn": "Her blue skirt is very pretty.",
        "examplePt": "A saia azul dela é muito bonita.",
        "emoji": "👗"
      },
      {
        "word": "Jacket",
        "pt": "Jaqueta",
        "simplePronunciation": "djé-ket",
        "phonetic": "/ˈdʒæk.ɪt/",
        "exampleEn": "Put on a jacket before going out.",
        "examplePt": "Vista uma jaqueta antes de sair.",
        "emoji": "🧥"
      },
      {
        "word": "Socks",
        "pt": "Meias",
        "simplePronunciation": "sóks",
        "phonetic": "/sɑːks/",
        "exampleEn": "Put on clean cotton socks.",
        "examplePt": "Coloque meias de algodão limpas.",
        "emoji": "🧦"
      },
      {
        "word": "Coat",
        "pt": "Casaco",
        "simplePronunciation": "côut",
        "phonetic": "/koʊt/",
        "exampleEn": "You need a warm coat in winter.",
        "examplePt": "Você precisa de um casaco quente no inverno.",
        "emoji": "🧥"
      },
      {
        "word": "Hat",
        "pt": "Chapéu",
        "simplePronunciation": "rét",
        "phonetic": "/hæt/",
        "exampleEn": "Wear a hat to protect from the sun.",
        "examplePt": "Use um chapéu para se proteger do sol.",
        "emoji": "👒"
      },
      {
        "word": "Jeans",
        "pt": "Calça jeans",
        "simplePronunciation": "djínz",
        "phonetic": "/dʒiːnz/",
        "exampleEn": "Blue jeans go well with everything.",
        "examplePt": "Calça jeans azul combina com tudo.",
        "emoji": "👖"
      },
      {
        "word": "Bag",
        "pt": "Bolsa / Sacola",
        "simplePronunciation": "bég",
        "phonetic": "/bæɡ/",
        "exampleEn": "She carries her books in a bag.",
        "examplePt": "Ela carrega seus livros em uma bolsa.",
        "emoji": "👜"
      }
    ],
    "title": "Roupas • Módulo 1: Palavras Essenciais",
    "subtitle": "Nível 1/4 • As 12 peças de roupa mais básicas do dia a dia",
    "pedagogicalObjective": "Dominar as 12 peças de vestuário mais usadas em qualquer conversa cotidiana.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Roupas — Módulo 1 • Essenciais: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p17-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Shirt",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat (\"rét\")",
            "translationPt": "Chapéu"
          },
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt (\"xârt\")",
            "translationPt": "Camisa"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants (\"pénts\")",
            "translationPt": "Calça"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks (\"sóks\")",
            "translationPt": "Meias"
          }
        ],
        "options": [
          "Hat",
          "Shirt",
          "Pants",
          "Socks"
        ],
        "correctAnswer": "Shirt",
        "explanation": "Shirt (\"xârt\") = Camisa. Exemplo: \"He wears a clean white shirt.\" (Ele veste uma camisa branca limpa.)",
        "phoneticHint": "\"xârt\" /ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pants",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat (\"rét\")",
            "translationPt": "Chapéu"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat (\"côut\")",
            "translationPt": "Casaco"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks (\"sóks\")",
            "translationPt": "Meias"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants (\"pénts\")",
            "translationPt": "Calça"
          }
        ],
        "options": [
          "Hat",
          "Coat",
          "Socks",
          "Pants"
        ],
        "correctAnswer": "Pants",
        "explanation": "Pants (\"pénts\") = Calça. Exemplo: \"These pants are very comfortable.\" (Esta calça é muito confortável.)",
        "phoneticHint": "\"pénts\" /pænts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Shoes",
        "visualEmoji": "👞",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes (\"xúz\")",
            "translationPt": "Sapatos"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks (\"sóks\")",
            "translationPt": "Meias"
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt (\"skârt\")",
            "translationPt": "Saia"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket (\"djé-ket\")",
            "translationPt": "Jaqueta"
          }
        ],
        "options": [
          "Shoes",
          "Socks",
          "Skirt",
          "Jacket"
        ],
        "correctAnswer": "Shoes",
        "explanation": "Shoes (\"xúz\") = Sapatos. Exemplo: \"Take off your shoes at the door.\" (Tire os sapatos na porta.)",
        "phoneticHint": "\"xúz\" /ʃuːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Dress",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket (\"djé-ket\")",
            "translationPt": "Jaqueta"
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans (\"djínz\")",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag (\"bég\")",
            "translationPt": "Bolsa / Sacola"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress (\"drés\")",
            "translationPt": "Vestido"
          }
        ],
        "options": [
          "Jacket",
          "Jeans",
          "Bag",
          "Dress"
        ],
        "correctAnswer": "Dress",
        "explanation": "Dress (\"drés\") = Vestido. Exemplo: \"She bought a beautiful red dress.\" (Ela comprou um lindo vestido vermelho.)",
        "phoneticHint": "\"drés\" /dres/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Shorts",
        "visualEmoji": "🩳",
        "visualOptions": [
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks (\"sóks\")",
            "translationPt": "Meias"
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt (\"skârt\")",
            "translationPt": "Saia"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts (\"xórts\")",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes (\"xúz\")",
            "translationPt": "Sapatos"
          }
        ],
        "options": [
          "Socks",
          "Skirt",
          "Shorts",
          "Shoes"
        ],
        "correctAnswer": "Shorts",
        "explanation": "Shorts (\"xórts\") = Shorts / Bermuda. Exemplo: \"I wear shorts on hot days.\" (Eu uso bermuda em dias quentes.)",
        "phoneticHint": "\"xórts\" /ʃɔːrts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Skirt",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt (\"skârt\")",
            "translationPt": "Saia"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat (\"rét\")",
            "translationPt": "Chapéu"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes (\"xúz\")",
            "translationPt": "Sapatos"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks (\"sóks\")",
            "translationPt": "Meias"
          }
        ],
        "options": [
          "Skirt",
          "Hat",
          "Shoes",
          "Socks"
        ],
        "correctAnswer": "Skirt",
        "explanation": "Skirt (\"skârt\") = Saia. Exemplo: \"Her blue skirt is very pretty.\" (A saia azul dela é muito bonita.)",
        "phoneticHint": "\"skârt\" /skɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Jacket",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat (\"rét\")",
            "translationPt": "Chapéu"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket (\"djé-ket\")",
            "translationPt": "Jaqueta"
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt (\"skârt\")",
            "translationPt": "Saia"
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag (\"bég\")",
            "translationPt": "Bolsa / Sacola"
          }
        ],
        "options": [
          "Hat",
          "Jacket",
          "Skirt",
          "Bag"
        ],
        "correctAnswer": "Jacket",
        "explanation": "Jacket (\"djé-ket\") = Jaqueta. Exemplo: \"Put on a jacket before going out.\" (Vista uma jaqueta antes de sair.)",
        "phoneticHint": "\"djé-ket\" /ˈdʒæk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Socks",
        "visualEmoji": "🧦",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans (\"djínz\")",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks (\"sóks\")",
            "translationPt": "Meias"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress (\"drés\")",
            "translationPt": "Vestido"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat (\"rét\")",
            "translationPt": "Chapéu"
          }
        ],
        "options": [
          "Jeans",
          "Socks",
          "Dress",
          "Hat"
        ],
        "correctAnswer": "Socks",
        "explanation": "Socks (\"sóks\") = Meias. Exemplo: \"Put on clean cotton socks.\" (Coloque meias de algodão limpas.)",
        "phoneticHint": "\"sóks\" /sɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Coat",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans (\"djínz\")",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt (\"xârt\")",
            "translationPt": "Camisa"
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag (\"bég\")",
            "translationPt": "Bolsa / Sacola"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat (\"côut\")",
            "translationPt": "Casaco"
          }
        ],
        "options": [
          "Jeans",
          "Shirt",
          "Bag",
          "Coat"
        ],
        "correctAnswer": "Coat",
        "explanation": "Coat (\"côut\") = Casaco. Exemplo: \"You need a warm coat in winter.\" (Você precisa de um casaco quente no inverno.)",
        "phoneticHint": "\"côut\" /koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Hat",
        "visualEmoji": "👒",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants (\"pénts\")",
            "translationPt": "Calça"
          },
          {
            "text": "Shirt",
            "emoji": "👔",
            "label": "Shirt (\"xârt\")",
            "translationPt": "Camisa"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat (\"rét\")",
            "translationPt": "Chapéu"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks (\"sóks\")",
            "translationPt": "Meias"
          }
        ],
        "options": [
          "Pants",
          "Shirt",
          "Hat",
          "Socks"
        ],
        "correctAnswer": "Hat",
        "explanation": "Hat (\"rét\") = Chapéu. Exemplo: \"Wear a hat to protect from the sun.\" (Use um chapéu para se proteger do sol.)",
        "phoneticHint": "\"rét\" /hæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Jeans",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans (\"djínz\")",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag (\"bég\")",
            "translationPt": "Bolsa / Sacola"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks (\"sóks\")",
            "translationPt": "Meias"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes (\"xúz\")",
            "translationPt": "Sapatos"
          }
        ],
        "options": [
          "Jeans",
          "Bag",
          "Socks",
          "Shoes"
        ],
        "correctAnswer": "Jeans",
        "explanation": "Jeans (\"djínz\") = Calça jeans. Exemplo: \"Blue jeans go well with everything.\" (Calça jeans azul combina com tudo.)",
        "phoneticHint": "\"djínz\" /dʒiːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bag",
        "visualEmoji": "👜",
        "visualOptions": [
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts (\"xórts\")",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants (\"pénts\")",
            "translationPt": "Calça"
          },
          {
            "text": "Bag",
            "emoji": "👜",
            "label": "Bag (\"bég\")",
            "translationPt": "Bolsa / Sacola"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat (\"rét\")",
            "translationPt": "Chapéu"
          }
        ],
        "options": [
          "Shorts",
          "Pants",
          "Bag",
          "Hat"
        ],
        "correctAnswer": "Bag",
        "explanation": "Bag (\"bég\") = Bolsa / Sacola. Exemplo: \"She carries her books in a bag.\" (Ela carrega seus livros em uma bolsa.)",
        "phoneticHint": "\"bég\" /bæɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Pants",
        "contextSentencePt": "Pronúncia simplificada: \"pénts\"",
        "options": [
          "Pants — Calça",
          "Hat — Chapéu",
          "Socks — Meias",
          "Shorts — Shorts / Bermuda"
        ],
        "correctAnswer": "Pants — Calça",
        "explanation": "Você ouviu \"Pants\" (\"pénts\") = Calça. Frase: \"These pants are very comfortable.\" (Esta calça é muito confortável.)",
        "phoneticHint": "\"pénts\" /pænts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Skirt",
        "contextSentencePt": "Pronúncia simplificada: \"skârt\"",
        "options": [
          "Dress — Vestido",
          "Bag — Bolsa / Sacola",
          "Shorts — Shorts / Bermuda",
          "Skirt — Saia"
        ],
        "correctAnswer": "Skirt — Saia",
        "explanation": "Você ouviu \"Skirt\" (\"skârt\") = Saia. Frase: \"Her blue skirt is very pretty.\" (A saia azul dela é muito bonita.)",
        "phoneticHint": "\"skârt\" /skɜːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Hat",
        "contextSentencePt": "Pronúncia simplificada: \"rét\"",
        "options": [
          "Socks — Meias",
          "Bag — Bolsa / Sacola",
          "Hat — Chapéu",
          "Dress — Vestido"
        ],
        "correctAnswer": "Hat — Chapéu",
        "explanation": "Você ouviu \"Hat\" (\"rét\") = Chapéu. Frase: \"Wear a hat to protect from the sun.\" (Use um chapéu para se proteger do sol.)",
        "phoneticHint": "\"rét\" /hæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "👞",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Shoes\" (pronúncia: \"xúz\")?",
        "audioPhrase": "Shoes",
        "contextSentence": "Take off your shoes at the door.",
        "contextSentencePt": "Tire os sapatos na porta.",
        "options": [
          "Sapatos",
          "Calça jeans",
          "Jaqueta",
          "Bolsa / Sacola"
        ],
        "correctAnswer": "Sapatos",
        "explanation": "\"Shoes\" (\"xúz\") significa \"Sapatos\".",
        "phoneticHint": "\"xúz\" /ʃuːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🧥",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Jacket\" (pronúncia: \"djé-ket\")?",
        "audioPhrase": "Jacket",
        "contextSentence": "Put on a jacket before going out.",
        "contextSentencePt": "Vista uma jaqueta antes de sair.",
        "options": [
          "Calça",
          "Jaqueta",
          "Camisa",
          "Meias"
        ],
        "correctAnswer": "Jaqueta",
        "explanation": "\"Jacket\" (\"djé-ket\") significa \"Jaqueta\".",
        "phoneticHint": "\"djé-ket\" /ˈdʒæk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "👖",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Jeans\" (pronúncia: \"djínz\")?",
        "audioPhrase": "Jeans",
        "contextSentence": "Blue jeans go well with everything.",
        "contextSentencePt": "Calça jeans azul combina com tudo.",
        "options": [
          "Vestido",
          "Calça jeans",
          "Meias",
          "Sapatos"
        ],
        "correctAnswer": "Calça jeans",
        "explanation": "\"Jeans\" (\"djínz\") significa \"Calça jeans\".",
        "phoneticHint": "\"djínz\" /dʒiːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-fill-1",
        "type": "fill-blank",
        "visualEmoji": "👗",
        "prompt": "✍️ Complete a frase em inglês (\"Ela comprou um lindo vestido vermelho.\"):",
        "contextSentence": "She bought a beautiful red ______.",
        "contextSentencePt": "Tradução: \"Ela comprou um lindo vestido vermelho.\"",
        "audioPhrase": "She bought a beautiful red dress.",
        "options": [
          "Hat",
          "Shoes",
          "Skirt",
          "Dress"
        ],
        "correctAnswer": "Dress",
        "explanation": "Frase completa: \"She bought a beautiful red dress.\" (Ela comprou um lindo vestido vermelho.) — Dress (\"drés\") = Vestido.",
        "phoneticHint": "\"drés\" /dres/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p17-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🧦",
        "prompt": "✍️ Complete a frase em inglês (\"Coloque meias de algodão limpas.\"):",
        "contextSentence": "Put on clean cotton ______.",
        "contextSentencePt": "Tradução: \"Coloque meias de algodão limpas.\"",
        "audioPhrase": "Put on clean cotton socks.",
        "options": [
          "Dress",
          "Jacket",
          "Socks",
          "Jeans"
        ],
        "correctAnswer": "Socks",
        "explanation": "Frase completa: \"Put on clean cotton socks.\" (Coloque meias de algodão limpas.) — Socks (\"sóks\") = Meias.",
        "phoneticHint": "\"sóks\" /sɑːks/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p17-fill-3",
        "type": "fill-blank",
        "visualEmoji": "👜",
        "prompt": "✍️ Complete a frase em inglês (\"Ela carrega seus livros em uma bolsa.\"):",
        "contextSentence": "She carries her books in a ______.",
        "contextSentencePt": "Tradução: \"Ela carrega seus livros em uma bolsa.\"",
        "audioPhrase": "She carries her books in a bag.",
        "options": [
          "Bag",
          "Coat",
          "Dress",
          "Jeans"
        ],
        "correctAnswer": "Bag",
        "explanation": "Frase completa: \"She carries her books in a bag.\" (Ela carrega seus livros em uma bolsa.) — Bag (\"bég\") = Bolsa / Sacola.",
        "phoneticHint": "\"bég\" /bæɡ/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p18",
    "worldId": 0,
    "phaseNumber": 18,
    "themeId": "clothes",
    "themeTitle": "Roupas",
    "frequencyLevel": "Módulo 2 • Comuns",
    "vocabItems": [
      {
        "word": "T-shirt",
        "pt": "Camiseta",
        "simplePronunciation": "tí-xârt",
        "phonetic": "/ˈtiː.ʃɜːrt/",
        "exampleEn": "I wear a cotton T-shirt at home.",
        "examplePt": "Eu uso uma camiseta de algodão em casa.",
        "emoji": "👕"
      },
      {
        "word": "Sweater",
        "pt": "Suéter / Blusa de lã",
        "simplePronunciation": "sué-ter",
        "phonetic": "/ˈswet.ər/",
        "exampleEn": "This wool sweater is very warm.",
        "examplePt": "Este suéter de lã é muito quentinho.",
        "emoji": "🧶"
      },
      {
        "word": "Boots",
        "pt": "Botas",
        "simplePronunciation": "búts",
        "phonetic": "/buːts/",
        "exampleEn": "Wear boots when it rains.",
        "examplePt": "Use botas quando chover.",
        "emoji": "🥾"
      },
      {
        "word": "Sandals",
        "pt": "Sandália / Chinelo",
        "simplePronunciation": "sén-dals",
        "phonetic": "/ˈsæn.dəlz/",
        "exampleEn": "Sandals are great for the beach.",
        "examplePt": "Sandálias são ótimas para a praia.",
        "emoji": "🩴"
      },
      {
        "word": "Sneakers",
        "pt": "Tênis",
        "simplePronunciation": "sní-kers",
        "phonetic": "/ˈsniː.kərz/",
        "exampleEn": "Put on your sneakers for the walk.",
        "examplePt": "Calce seus tênis para a caminhada.",
        "emoji": "👟"
      },
      {
        "word": "Glasses",
        "pt": "Óculos",
        "simplePronunciation": "glé-ses",
        "phonetic": "/ˈɡlæs.ɪz/",
        "exampleEn": "I need my glasses to read.",
        "examplePt": "Preciso dos meus óculos para ler.",
        "emoji": "👓"
      },
      {
        "word": "Watch",
        "pt": "Relógio de pulso",
        "simplePronunciation": "uótch",
        "phonetic": "/wɑːtʃ/",
        "exampleEn": "What time is it on your watch?",
        "examplePt": "Que horas são no seu relógio de pulso?",
        "emoji": "⌚"
      },
      {
        "word": "Belt",
        "pt": "Cinto",
        "simplePronunciation": "bélt",
        "phonetic": "/belt/",
        "exampleEn": "This brown leather belt fits well.",
        "examplePt": "Este cinto de couro marrom serve bem.",
        "emoji": "ベルト"
      },
      {
        "word": "Cap",
        "pt": "Boné",
        "simplePronunciation": "kép",
        "phonetic": "/kæp/",
        "exampleEn": "He wears a blue cap outdoors.",
        "examplePt": "Ele usa um boné azul ao ar livre.",
        "emoji": "🧢"
      },
      {
        "word": "Pajamas",
        "pt": "Pijama",
        "simplePronunciation": "pa-djá-mas",
        "phonetic": "/pəˈdʒæm.əz/",
        "exampleEn": "Put on your pajamas before bed.",
        "examplePt": "Vista seu pijama antes de dormir.",
        "emoji": "🛌"
      },
      {
        "word": "Suit",
        "pt": "Terno",
        "simplePronunciation": "sút",
        "phonetic": "/suːt/",
        "exampleEn": "He wore a dark suit to the wedding.",
        "examplePt": "Ele usou um terno escuro no casamento.",
        "emoji": "🤵"
      },
      {
        "word": "Pocket",
        "pt": "Bolso",
        "simplePronunciation": "pó-ket",
        "phonetic": "/ˈpɑː.kɪt/",
        "exampleEn": "My keys are in my pants pocket.",
        "examplePt": "Minhas chaves estão no bolso da calça.",
        "emoji": "👖"
      }
    ],
    "title": "Roupas • Módulo 2: Palavras Comuns",
    "subtitle": "Nível 2/4 • 12 calçados, roupas casuais e acessórios muito comuns",
    "pedagogicalObjective": "Reconhecer roupas casuais, calçados e acessórios presentes na rotina diária.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Roupas — Módulo 2 • Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p18-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "T-shirt",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt (\"bélt\")",
            "translationPt": "Cinto"
          },
          {
            "text": "Pocket",
            "emoji": "👖",
            "label": "Pocket (\"pó-ket\")",
            "translationPt": "Bolso"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals (\"sén-dals\")",
            "translationPt": "Sandália / Chinelo"
          },
          {
            "text": "T-shirt",
            "emoji": "👕",
            "label": "T-shirt (\"tí-xârt\")",
            "translationPt": "Camiseta"
          }
        ],
        "options": [
          "Belt",
          "Pocket",
          "Sandals",
          "T-shirt"
        ],
        "correctAnswer": "T-shirt",
        "explanation": "T-shirt (\"tí-xârt\") = Camiseta. Exemplo: \"I wear a cotton T-shirt at home.\" (Eu uso uma camiseta de algodão em casa.)",
        "phoneticHint": "\"tí-xârt\" /ˈtiː.ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sweater",
        "visualEmoji": "🧶",
        "visualOptions": [
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater (\"sué-ter\")",
            "translationPt": "Suéter / Blusa de lã"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots (\"búts\")",
            "translationPt": "Botas"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch (\"uótch\")",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap (\"kép\")",
            "translationPt": "Boné"
          }
        ],
        "options": [
          "Sweater",
          "Boots",
          "Watch",
          "Cap"
        ],
        "correctAnswer": "Sweater",
        "explanation": "Sweater (\"sué-ter\") = Suéter / Blusa de lã. Exemplo: \"This wool sweater is very warm.\" (Este suéter de lã é muito quentinho.)",
        "phoneticHint": "\"sué-ter\" /ˈswet.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Boots",
        "visualEmoji": "🥾",
        "visualOptions": [
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch (\"uótch\")",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater (\"sué-ter\")",
            "translationPt": "Suéter / Blusa de lã"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt (\"bélt\")",
            "translationPt": "Cinto"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots (\"búts\")",
            "translationPt": "Botas"
          }
        ],
        "options": [
          "Watch",
          "Sweater",
          "Belt",
          "Boots"
        ],
        "correctAnswer": "Boots",
        "explanation": "Boots (\"búts\") = Botas. Exemplo: \"Wear boots when it rains.\" (Use botas quando chover.)",
        "phoneticHint": "\"búts\" /buːts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sandals",
        "visualEmoji": "🩴",
        "visualOptions": [
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt (\"bélt\")",
            "translationPt": "Cinto"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers (\"sní-kers\")",
            "translationPt": "Tênis"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals (\"sén-dals\")",
            "translationPt": "Sandália / Chinelo"
          },
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit (\"sút\")",
            "translationPt": "Terno"
          }
        ],
        "options": [
          "Belt",
          "Sneakers",
          "Sandals",
          "Suit"
        ],
        "correctAnswer": "Sandals",
        "explanation": "Sandals (\"sén-dals\") = Sandália / Chinelo. Exemplo: \"Sandals are great for the beach.\" (Sandálias são ótimas para a praia.)",
        "phoneticHint": "\"sén-dals\" /ˈsæn.dəlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sneakers",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers (\"sní-kers\")",
            "translationPt": "Tênis"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots (\"búts\")",
            "translationPt": "Botas"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap (\"kép\")",
            "translationPt": "Boné"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt (\"bélt\")",
            "translationPt": "Cinto"
          }
        ],
        "options": [
          "Sneakers",
          "Boots",
          "Cap",
          "Belt"
        ],
        "correctAnswer": "Sneakers",
        "explanation": "Sneakers (\"sní-kers\") = Tênis. Exemplo: \"Put on your sneakers for the walk.\" (Calce seus tênis para a caminhada.)",
        "phoneticHint": "\"sní-kers\" /ˈsniː.kərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
        "visualOptions": [
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch (\"uótch\")",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses (\"glé-ses\")",
            "translationPt": "Óculos"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt (\"bélt\")",
            "translationPt": "Cinto"
          },
          {
            "text": "Pocket",
            "emoji": "👖",
            "label": "Pocket (\"pó-ket\")",
            "translationPt": "Bolso"
          }
        ],
        "options": [
          "Watch",
          "Glasses",
          "Belt",
          "Pocket"
        ],
        "correctAnswer": "Glasses",
        "explanation": "Glasses (\"glé-ses\") = Óculos. Exemplo: \"I need my glasses to read.\" (Preciso dos meus óculos para ler.)",
        "phoneticHint": "\"glé-ses\" /ˈɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Watch",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers (\"sní-kers\")",
            "translationPt": "Tênis"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch (\"uótch\")",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas (\"pa-djá-mas\")",
            "translationPt": "Pijama"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap (\"kép\")",
            "translationPt": "Boné"
          }
        ],
        "options": [
          "Sneakers",
          "Watch",
          "Pajamas",
          "Cap"
        ],
        "correctAnswer": "Watch",
        "explanation": "Watch (\"uótch\") = Relógio de pulso. Exemplo: \"What time is it on your watch?\" (Que horas são no seu relógio de pulso?)",
        "phoneticHint": "\"uótch\" /wɑːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Belt",
        "visualEmoji": "ベルト",
        "visualOptions": [
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit (\"sút\")",
            "translationPt": "Terno"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch (\"uótch\")",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses (\"glé-ses\")",
            "translationPt": "Óculos"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt (\"bélt\")",
            "translationPt": "Cinto"
          }
        ],
        "options": [
          "Suit",
          "Watch",
          "Glasses",
          "Belt"
        ],
        "correctAnswer": "Belt",
        "explanation": "Belt (\"bélt\") = Cinto. Exemplo: \"This brown leather belt fits well.\" (Este cinto de couro marrom serve bem.)",
        "phoneticHint": "\"bélt\" /belt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Cap",
        "visualEmoji": "🧢",
        "visualOptions": [
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater (\"sué-ter\")",
            "translationPt": "Suéter / Blusa de lã"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses (\"glé-ses\")",
            "translationPt": "Óculos"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap (\"kép\")",
            "translationPt": "Boné"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots (\"búts\")",
            "translationPt": "Botas"
          }
        ],
        "options": [
          "Sweater",
          "Glasses",
          "Cap",
          "Boots"
        ],
        "correctAnswer": "Cap",
        "explanation": "Cap (\"kép\") = Boné. Exemplo: \"He wears a blue cap outdoors.\" (Ele usa um boné azul ao ar livre.)",
        "phoneticHint": "\"kép\" /kæp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pajamas",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas (\"pa-djá-mas\")",
            "translationPt": "Pijama"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater (\"sué-ter\")",
            "translationPt": "Suéter / Blusa de lã"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt (\"bélt\")",
            "translationPt": "Cinto"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers (\"sní-kers\")",
            "translationPt": "Tênis"
          }
        ],
        "options": [
          "Pajamas",
          "Sweater",
          "Belt",
          "Sneakers"
        ],
        "correctAnswer": "Pajamas",
        "explanation": "Pajamas (\"pa-djá-mas\") = Pijama. Exemplo: \"Put on your pajamas before bed.\" (Vista seu pijama antes de dormir.)",
        "phoneticHint": "\"pa-djá-mas\" /pəˈdʒæm.əz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Suit",
        "visualEmoji": "🤵",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap (\"kép\")",
            "translationPt": "Boné"
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas (\"pa-djá-mas\")",
            "translationPt": "Pijama"
          },
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit (\"sút\")",
            "translationPt": "Terno"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots (\"búts\")",
            "translationPt": "Botas"
          }
        ],
        "options": [
          "Cap",
          "Pajamas",
          "Suit",
          "Boots"
        ],
        "correctAnswer": "Suit",
        "explanation": "Suit (\"sút\") = Terno. Exemplo: \"He wore a dark suit to the wedding.\" (Ele usou um terno escuro no casamento.)",
        "phoneticHint": "\"sút\" /suːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Pocket",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses (\"glé-ses\")",
            "translationPt": "Óculos"
          },
          {
            "text": "Pocket",
            "emoji": "👖",
            "label": "Pocket (\"pó-ket\")",
            "translationPt": "Bolso"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater (\"sué-ter\")",
            "translationPt": "Suéter / Blusa de lã"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap (\"kép\")",
            "translationPt": "Boné"
          }
        ],
        "options": [
          "Glasses",
          "Pocket",
          "Sweater",
          "Cap"
        ],
        "correctAnswer": "Pocket",
        "explanation": "Pocket (\"pó-ket\") = Bolso. Exemplo: \"My keys are in my pants pocket.\" (Minhas chaves estão no bolso da calça.)",
        "phoneticHint": "\"pó-ket\" /ˈpɑː.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Sweater",
        "contextSentencePt": "Pronúncia simplificada: \"sué-ter\"",
        "options": [
          "Pajamas — Pijama",
          "Glasses — Óculos",
          "Sandals — Sandália / Chinelo",
          "Sweater — Suéter / Blusa de lã"
        ],
        "correctAnswer": "Sweater — Suéter / Blusa de lã",
        "explanation": "Você ouviu \"Sweater\" (\"sué-ter\") = Suéter / Blusa de lã. Frase: \"This wool sweater is very warm.\" (Este suéter de lã é muito quentinho.)",
        "phoneticHint": "\"sué-ter\" /ˈswet.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Glasses",
        "contextSentencePt": "Pronúncia simplificada: \"glé-ses\"",
        "options": [
          "Sandals — Sandália / Chinelo",
          "Cap — Boné",
          "Glasses — Óculos",
          "Sneakers — Tênis"
        ],
        "correctAnswer": "Glasses — Óculos",
        "explanation": "Você ouviu \"Glasses\" (\"glé-ses\") = Óculos. Frase: \"I need my glasses to read.\" (Preciso dos meus óculos para ler.)",
        "phoneticHint": "\"glé-ses\" /ˈɡlæs.ɪz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Pajamas",
        "contextSentencePt": "Pronúncia simplificada: \"pa-djá-mas\"",
        "options": [
          "Pajamas — Pijama",
          "Glasses — Óculos",
          "Watch — Relógio de pulso",
          "Cap — Boné"
        ],
        "correctAnswer": "Pajamas — Pijama",
        "explanation": "Você ouviu \"Pajamas\" (\"pa-djá-mas\") = Pijama. Frase: \"Put on your pajamas before bed.\" (Vista seu pijama antes de dormir.)",
        "phoneticHint": "\"pa-djá-mas\" /pəˈdʒæm.əz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🥾",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Boots\" (pronúncia: \"búts\")?",
        "audioPhrase": "Boots",
        "contextSentence": "Wear boots when it rains.",
        "contextSentencePt": "Use botas quando chover.",
        "options": [
          "Tênis",
          "Botas",
          "Suéter / Blusa de lã",
          "Cinto"
        ],
        "correctAnswer": "Botas",
        "explanation": "\"Boots\" (\"búts\") significa \"Botas\".",
        "phoneticHint": "\"búts\" /buːts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "⌚",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Watch\" (pronúncia: \"uótch\")?",
        "audioPhrase": "Watch",
        "contextSentence": "What time is it on your watch?",
        "contextSentencePt": "Que horas são no seu relógio de pulso?",
        "options": [
          "Sandália / Chinelo",
          "Relógio de pulso",
          "Bolso",
          "Camiseta"
        ],
        "correctAnswer": "Relógio de pulso",
        "explanation": "\"Watch\" (\"uótch\") significa \"Relógio de pulso\".",
        "phoneticHint": "\"uótch\" /wɑːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🤵",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Suit\" (pronúncia: \"sút\")?",
        "audioPhrase": "Suit",
        "contextSentence": "He wore a dark suit to the wedding.",
        "contextSentencePt": "Ele usou um terno escuro no casamento.",
        "options": [
          "Sandália / Chinelo",
          "Cinto",
          "Óculos",
          "Terno"
        ],
        "correctAnswer": "Terno",
        "explanation": "\"Suit\" (\"sút\") significa \"Terno\".",
        "phoneticHint": "\"sút\" /suːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🩴",
        "prompt": "✍️ Complete a frase em inglês (\"Sandálias são ótimas para a praia.\"):",
        "contextSentence": "______ are great for the beach.",
        "contextSentencePt": "Tradução: \"Sandálias são ótimas para a praia.\"",
        "audioPhrase": "Sandals are great for the beach.",
        "options": [
          "Watch",
          "Belt",
          "Sandals",
          "Pajamas"
        ],
        "correctAnswer": "Sandals",
        "explanation": "Frase completa: \"Sandals are great for the beach.\" (Sandálias são ótimas para a praia.) — Sandals (\"sén-dals\") = Sandália / Chinelo.",
        "phoneticHint": "\"sén-dals\" /ˈsæn.dəlz/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p18-fill-2",
        "type": "fill-blank",
        "visualEmoji": "ベルト",
        "prompt": "✍️ Complete a frase em inglês (\"Este cinto de couro marrom serve bem.\"):",
        "contextSentence": "This brown leather ______ fits well.",
        "contextSentencePt": "Tradução: \"Este cinto de couro marrom serve bem.\"",
        "audioPhrase": "This brown leather belt fits well.",
        "options": [
          "Belt",
          "Glasses",
          "Cap",
          "Sneakers"
        ],
        "correctAnswer": "Belt",
        "explanation": "Frase completa: \"This brown leather belt fits well.\" (Este cinto de couro marrom serve bem.) — Belt (\"bélt\") = Cinto.",
        "phoneticHint": "\"bélt\" /belt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p18-fill-3",
        "type": "fill-blank",
        "visualEmoji": "👖",
        "prompt": "✍️ Complete a frase em inglês (\"Minhas chaves estão no bolso da calça.\"):",
        "contextSentence": "My keys are in my pants ______.",
        "contextSentencePt": "Tradução: \"Minhas chaves estão no bolso da calça.\"",
        "audioPhrase": "My keys are in my pants pocket.",
        "options": [
          "Sneakers",
          "Glasses",
          "Pocket",
          "Sandals"
        ],
        "correctAnswer": "Pocket",
        "explanation": "Frase completa: \"My keys are in my pants pocket.\" (Minhas chaves estão no bolso da calça.) — Pocket (\"pó-ket\") = Bolso.",
        "phoneticHint": "\"pó-ket\" /ˈpɑː.kɪt/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p19",
    "worldId": 0,
    "phaseNumber": 19,
    "themeId": "clothes",
    "themeTitle": "Roupas",
    "frequencyLevel": "Módulo 3 • Intermediárias",
    "vocabItems": [
      {
        "word": "Uniform",
        "pt": "Uniforme",
        "simplePronunciation": "iú-ni-fórm",
        "phonetic": "/ˈjuː.nə.fɔːrm/",
        "exampleEn": "Students wear a school uniform.",
        "examplePt": "Os alunos usam uniforme escolar.",
        "emoji": "🎽"
      },
      {
        "word": "Tie",
        "pt": "Gravata",
        "simplePronunciation": "tái",
        "phonetic": "/taɪ/",
        "exampleEn": "He wears a red tie to work.",
        "examplePt": "Ele usa uma gravata vermelha para trabalhar.",
        "emoji": "👔"
      },
      {
        "word": "Scarf",
        "pt": "Cachecol",
        "simplePronunciation": "scárf",
        "phonetic": "/skɑːrf/",
        "exampleEn": "Wrap a soft scarf around your neck.",
        "examplePt": "Enrole um cachecol macio no pescoço.",
        "emoji": "🧣"
      },
      {
        "word": "Gloves",
        "pt": "Luvas",
        "simplePronunciation": "glâvz",
        "phonetic": "/ɡlʌvz/",
        "exampleEn": "Gloves keep your hands warm.",
        "examplePt": "As luvas mantêm suas mãos aquecidas.",
        "emoji": "🧤"
      },
      {
        "word": "Ring",
        "pt": "Anel / Aliança",
        "simplePronunciation": "ríng",
        "phonetic": "/rɪŋ/",
        "exampleEn": "She wears a gold ring on her finger.",
        "examplePt": "Ela usa um anel de ouro no dedo.",
        "emoji": "💍"
      },
      {
        "word": "Necklace",
        "pt": "Colar",
        "simplePronunciation": "nék-les",
        "phonetic": "/ˈnek.lɪs/",
        "exampleEn": "That silver necklace is lovely.",
        "examplePt": "Aquele colar de prata é lindo.",
        "emoji": "📿"
      },
      {
        "word": "Wallet",
        "pt": "Carteira",
        "simplePronunciation": "uó-let",
        "phonetic": "/ˈwɑː.lɪt/",
        "exampleEn": "Keep your money inside the wallet.",
        "examplePt": "Guarde seu dinheiro dentro da carteira.",
        "emoji": "👛"
      },
      {
        "word": "Umbrella",
        "pt": "Guarda-chuva",
        "simplePronunciation": "âm-bré-la",
        "phonetic": "/ʌmˈbrel.ə/",
        "exampleEn": "Take an umbrella in case it rains.",
        "examplePt": "Leve um guarda-chuva caso chova.",
        "emoji": "☂️"
      },
      {
        "word": "Button",
        "pt": "Botão de roupa",
        "simplePronunciation": "bâ-ton",
        "phonetic": "/ˈbʌt.ən/",
        "exampleEn": "Fasten the top button of your shirt.",
        "examplePt": "Abotoe o botão de cima da sua camisa.",
        "emoji": "🔘"
      },
      {
        "word": "Zipper",
        "pt": "Zíper",
        "simplePronunciation": "zí-per",
        "phonetic": "/ˈzɪp.ər/",
        "exampleEn": "Close the jacket zipper.",
        "examplePt": "Feche o zíper da jaqueta.",
        "emoji": "🧥"
      },
      {
        "word": "Sleeve",
        "pt": "Manga da camisa",
        "simplePronunciation": "slív",
        "phonetic": "/sliːv/",
        "exampleEn": "Roll up your shirt sleeves.",
        "examplePt": "Dobre as mangas da sua camisa.",
        "emoji": "👕"
      },
      {
        "word": "Collar",
        "pt": "Gola / Colarinho",
        "simplePronunciation": "có-lar",
        "phonetic": "/ˈkɑː.lər/",
        "exampleEn": "Straighten your shirt collar.",
        "examplePt": "Arrume a gola da sua camisa.",
        "emoji": "👔"
      }
    ],
    "title": "Roupas • Módulo 3: Palavras Intermediárias",
    "subtitle": "Nível 3/4 • 12 acessórios pessoais e partes das roupas",
    "pedagogicalObjective": "Aprender acessórios de inverno, joias e partes importantes das roupas (botão, zíper, manga, gola).",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Roupas — Módulo 3 • Intermediárias: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p19-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Uniform",
        "visualEmoji": "🎽",
        "visualOptions": [
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform (\"iú-ni-fórm\")",
            "translationPt": "Uniforme"
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves (\"glâvz\")",
            "translationPt": "Luvas"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf (\"scárf\")",
            "translationPt": "Cachecol"
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella (\"âm-bré-la\")",
            "translationPt": "Guarda-chuva"
          }
        ],
        "options": [
          "Uniform",
          "Gloves",
          "Scarf",
          "Umbrella"
        ],
        "correctAnswer": "Uniform",
        "explanation": "Uniform (\"iú-ni-fórm\") = Uniforme. Exemplo: \"Students wear a school uniform.\" (Os alunos usam uniforme escolar.)",
        "phoneticHint": "\"iú-ni-fórm\" /ˈjuː.nə.fɔːrm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Tie",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves (\"glâvz\")",
            "translationPt": "Luvas"
          },
          {
            "text": "Button",
            "emoji": "🔘",
            "label": "Button (\"bâ-ton\")",
            "translationPt": "Botão de roupa"
          },
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper (\"zí-per\")",
            "translationPt": "Zíper"
          },
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie (\"tái\")",
            "translationPt": "Gravata"
          }
        ],
        "options": [
          "Gloves",
          "Button",
          "Zipper",
          "Tie"
        ],
        "correctAnswer": "Tie",
        "explanation": "Tie (\"tái\") = Gravata. Exemplo: \"He wears a red tie to work.\" (Ele usa uma gravata vermelha para trabalhar.)",
        "phoneticHint": "\"tái\" /taɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Scarf",
        "visualEmoji": "🧣",
        "visualOptions": [
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve (\"slív\")",
            "translationPt": "Manga da camisa"
          },
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper (\"zí-per\")",
            "translationPt": "Zíper"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf (\"scárf\")",
            "translationPt": "Cachecol"
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar (\"có-lar\")",
            "translationPt": "Gola / Colarinho"
          }
        ],
        "options": [
          "Sleeve",
          "Zipper",
          "Scarf",
          "Collar"
        ],
        "correctAnswer": "Scarf",
        "explanation": "Scarf (\"scárf\") = Cachecol. Exemplo: \"Wrap a soft scarf around your neck.\" (Enrole um cachecol macio no pescoço.)",
        "phoneticHint": "\"scárf\" /skɑːrf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Gloves",
        "visualEmoji": "🧤",
        "visualOptions": [
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves (\"glâvz\")",
            "translationPt": "Luvas"
          },
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform (\"iú-ni-fórm\")",
            "translationPt": "Uniforme"
          },
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve (\"slív\")",
            "translationPt": "Manga da camisa"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace (\"nék-les\")",
            "translationPt": "Colar"
          }
        ],
        "options": [
          "Gloves",
          "Uniform",
          "Sleeve",
          "Necklace"
        ],
        "correctAnswer": "Gloves",
        "explanation": "Gloves (\"glâvz\") = Luvas. Exemplo: \"Gloves keep your hands warm.\" (As luvas mantêm suas mãos aquecidas.)",
        "phoneticHint": "\"glâvz\" /ɡlʌvz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Ring",
        "visualEmoji": "💍",
        "visualOptions": [
          {
            "text": "Button",
            "emoji": "🔘",
            "label": "Button (\"bâ-ton\")",
            "translationPt": "Botão de roupa"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring (\"ríng\")",
            "translationPt": "Anel / Aliança"
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar (\"có-lar\")",
            "translationPt": "Gola / Colarinho"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf (\"scárf\")",
            "translationPt": "Cachecol"
          }
        ],
        "options": [
          "Button",
          "Ring",
          "Collar",
          "Scarf"
        ],
        "correctAnswer": "Ring",
        "explanation": "Ring (\"ríng\") = Anel / Aliança. Exemplo: \"She wears a gold ring on her finger.\" (Ela usa um anel de ouro no dedo.)",
        "phoneticHint": "\"ríng\" /rɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Necklace",
        "visualEmoji": "📿",
        "visualOptions": [
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella (\"âm-bré-la\")",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace (\"nék-les\")",
            "translationPt": "Colar"
          },
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform (\"iú-ni-fórm\")",
            "translationPt": "Uniforme"
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar (\"có-lar\")",
            "translationPt": "Gola / Colarinho"
          }
        ],
        "options": [
          "Umbrella",
          "Necklace",
          "Uniform",
          "Collar"
        ],
        "correctAnswer": "Necklace",
        "explanation": "Necklace (\"nék-les\") = Colar. Exemplo: \"That silver necklace is lovely.\" (Aquele colar de prata é lindo.)",
        "phoneticHint": "\"nék-les\" /ˈnek.lɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Wallet",
        "visualEmoji": "👛",
        "visualOptions": [
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie (\"tái\")",
            "translationPt": "Gravata"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace (\"nék-les\")",
            "translationPt": "Colar"
          },
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform (\"iú-ni-fórm\")",
            "translationPt": "Uniforme"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet (\"uó-let\")",
            "translationPt": "Carteira"
          }
        ],
        "options": [
          "Tie",
          "Necklace",
          "Uniform",
          "Wallet"
        ],
        "correctAnswer": "Wallet",
        "explanation": "Wallet (\"uó-let\") = Carteira. Exemplo: \"Keep your money inside the wallet.\" (Guarde seu dinheiro dentro da carteira.)",
        "phoneticHint": "\"uó-let\" /ˈwɑː.lɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Umbrella",
        "visualEmoji": "☂️",
        "visualOptions": [
          {
            "text": "Uniform",
            "emoji": "🎽",
            "label": "Uniform (\"iú-ni-fórm\")",
            "translationPt": "Uniforme"
          },
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper (\"zí-per\")",
            "translationPt": "Zíper"
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella (\"âm-bré-la\")",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar (\"có-lar\")",
            "translationPt": "Gola / Colarinho"
          }
        ],
        "options": [
          "Uniform",
          "Zipper",
          "Umbrella",
          "Collar"
        ],
        "correctAnswer": "Umbrella",
        "explanation": "Umbrella (\"âm-bré-la\") = Guarda-chuva. Exemplo: \"Take an umbrella in case it rains.\" (Leve um guarda-chuva caso chova.)",
        "phoneticHint": "\"âm-bré-la\" /ʌmˈbrel.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Button",
        "visualEmoji": "🔘",
        "visualOptions": [
          {
            "text": "Button",
            "emoji": "🔘",
            "label": "Button (\"bâ-ton\")",
            "translationPt": "Botão de roupa"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf (\"scárf\")",
            "translationPt": "Cachecol"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring (\"ríng\")",
            "translationPt": "Anel / Aliança"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace (\"nék-les\")",
            "translationPt": "Colar"
          }
        ],
        "options": [
          "Button",
          "Scarf",
          "Ring",
          "Necklace"
        ],
        "correctAnswer": "Button",
        "explanation": "Button (\"bâ-ton\") = Botão de roupa. Exemplo: \"Fasten the top button of your shirt.\" (Abotoe o botão de cima da sua camisa.)",
        "phoneticHint": "\"bâ-ton\" /ˈbʌt.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Zipper",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace (\"nék-les\")",
            "translationPt": "Colar"
          },
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve (\"slív\")",
            "translationPt": "Manga da camisa"
          },
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper (\"zí-per\")",
            "translationPt": "Zíper"
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar (\"có-lar\")",
            "translationPt": "Gola / Colarinho"
          }
        ],
        "options": [
          "Necklace",
          "Sleeve",
          "Zipper",
          "Collar"
        ],
        "correctAnswer": "Zipper",
        "explanation": "Zipper (\"zí-per\") = Zíper. Exemplo: \"Close the jacket zipper.\" (Feche o zíper da jaqueta.)",
        "phoneticHint": "\"zí-per\" /ˈzɪp.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sleeve",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf (\"scárf\")",
            "translationPt": "Cachecol"
          },
          {
            "text": "Sleeve",
            "emoji": "👕",
            "label": "Sleeve (\"slív\")",
            "translationPt": "Manga da camisa"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet (\"uó-let\")",
            "translationPt": "Carteira"
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar (\"có-lar\")",
            "translationPt": "Gola / Colarinho"
          }
        ],
        "options": [
          "Scarf",
          "Sleeve",
          "Wallet",
          "Collar"
        ],
        "correctAnswer": "Sleeve",
        "explanation": "Sleeve (\"slív\") = Manga da camisa. Exemplo: \"Roll up your shirt sleeves.\" (Dobre as mangas da sua camisa.)",
        "phoneticHint": "\"slív\" /sliːv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Collar",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet (\"uó-let\")",
            "translationPt": "Carteira"
          },
          {
            "text": "Zipper",
            "emoji": "🧥",
            "label": "Zipper (\"zí-per\")",
            "translationPt": "Zíper"
          },
          {
            "text": "Tie",
            "emoji": "👔",
            "label": "Tie (\"tái\")",
            "translationPt": "Gravata"
          },
          {
            "text": "Collar",
            "emoji": "👔",
            "label": "Collar (\"có-lar\")",
            "translationPt": "Gola / Colarinho"
          }
        ],
        "options": [
          "Wallet",
          "Zipper",
          "Tie",
          "Collar"
        ],
        "correctAnswer": "Collar",
        "explanation": "Collar (\"có-lar\") = Gola / Colarinho. Exemplo: \"Straighten your shirt collar.\" (Arrume a gola da sua camisa.)",
        "phoneticHint": "\"có-lar\" /ˈkɑː.lər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Tie",
        "contextSentencePt": "Pronúncia simplificada: \"tái\"",
        "options": [
          "Gloves — Luvas",
          "Button — Botão de roupa",
          "Tie — Gravata",
          "Ring — Anel / Aliança"
        ],
        "correctAnswer": "Tie — Gravata",
        "explanation": "Você ouviu \"Tie\" (\"tái\") = Gravata. Frase: \"He wears a red tie to work.\" (Ele usa uma gravata vermelha para trabalhar.)",
        "phoneticHint": "\"tái\" /taɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Necklace",
        "contextSentencePt": "Pronúncia simplificada: \"nék-les\"",
        "options": [
          "Necklace — Colar",
          "Sleeve — Manga da camisa",
          "Collar — Gola / Colarinho",
          "Scarf — Cachecol"
        ],
        "correctAnswer": "Necklace — Colar",
        "explanation": "Você ouviu \"Necklace\" (\"nék-les\") = Colar. Frase: \"That silver necklace is lovely.\" (Aquele colar de prata é lindo.)",
        "phoneticHint": "\"nék-les\" /ˈnek.lɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Zipper",
        "contextSentencePt": "Pronúncia simplificada: \"zí-per\"",
        "options": [
          "Umbrella — Guarda-chuva",
          "Zipper — Zíper",
          "Button — Botão de roupa",
          "Sleeve — Manga da camisa"
        ],
        "correctAnswer": "Zipper — Zíper",
        "explanation": "Você ouviu \"Zipper\" (\"zí-per\") = Zíper. Frase: \"Close the jacket zipper.\" (Feche o zíper da jaqueta.)",
        "phoneticHint": "\"zí-per\" /ˈzɪp.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🧣",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Scarf\" (pronúncia: \"scárf\")?",
        "audioPhrase": "Scarf",
        "contextSentence": "Wrap a soft scarf around your neck.",
        "contextSentencePt": "Enrole um cachecol macio no pescoço.",
        "options": [
          "Carteira",
          "Cachecol",
          "Gola / Colarinho",
          "Gravata"
        ],
        "correctAnswer": "Cachecol",
        "explanation": "\"Scarf\" (\"scárf\") significa \"Cachecol\".",
        "phoneticHint": "\"scárf\" /skɑːrf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "👛",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Wallet\" (pronúncia: \"uó-let\")?",
        "audioPhrase": "Wallet",
        "contextSentence": "Keep your money inside the wallet.",
        "contextSentencePt": "Guarde seu dinheiro dentro da carteira.",
        "options": [
          "Zíper",
          "Guarda-chuva",
          "Botão de roupa",
          "Carteira"
        ],
        "correctAnswer": "Carteira",
        "explanation": "\"Wallet\" (\"uó-let\") significa \"Carteira\".",
        "phoneticHint": "\"uó-let\" /ˈwɑː.lɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "👕",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Sleeve\" (pronúncia: \"slív\")?",
        "audioPhrase": "Sleeve",
        "contextSentence": "Roll up your shirt sleeves.",
        "contextSentencePt": "Dobre as mangas da sua camisa.",
        "options": [
          "Gola / Colarinho",
          "Guarda-chuva",
          "Manga da camisa",
          "Luvas"
        ],
        "correctAnswer": "Manga da camisa",
        "explanation": "\"Sleeve\" (\"slív\") significa \"Manga da camisa\".",
        "phoneticHint": "\"slív\" /sliːv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🧤",
        "prompt": "✍️ Complete a frase em inglês (\"As luvas mantêm suas mãos aquecidas.\"):",
        "contextSentence": "______ keep your hands warm.",
        "contextSentencePt": "Tradução: \"As luvas mantêm suas mãos aquecidas.\"",
        "audioPhrase": "Gloves keep your hands warm.",
        "options": [
          "Gloves",
          "Wallet",
          "Tie",
          "Scarf"
        ],
        "correctAnswer": "Gloves",
        "explanation": "Frase completa: \"Gloves keep your hands warm.\" (As luvas mantêm suas mãos aquecidas.) — Gloves (\"glâvz\") = Luvas.",
        "phoneticHint": "\"glâvz\" /ɡlʌvz/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p19-fill-2",
        "type": "fill-blank",
        "visualEmoji": "☂️",
        "prompt": "✍️ Complete a frase em inglês (\"Leve um guarda-chuva caso chova.\"):",
        "contextSentence": "Take an ______ in case it rains.",
        "contextSentencePt": "Tradução: \"Leve um guarda-chuva caso chova.\"",
        "audioPhrase": "Take an umbrella in case it rains.",
        "options": [
          "Ring",
          "Tie",
          "Umbrella",
          "Collar"
        ],
        "correctAnswer": "Umbrella",
        "explanation": "Frase completa: \"Take an umbrella in case it rains.\" (Leve um guarda-chuva caso chova.) — Umbrella (\"âm-bré-la\") = Guarda-chuva.",
        "phoneticHint": "\"âm-bré-la\" /ʌmˈbrel.ə/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p19-fill-3",
        "type": "fill-blank",
        "visualEmoji": "👔",
        "prompt": "✍️ Complete a frase em inglês (\"Arrume a gola da sua camisa.\"):",
        "contextSentence": "Straighten your shirt ______.",
        "contextSentencePt": "Tradução: \"Arrume a gola da sua camisa.\"",
        "audioPhrase": "Straighten your shirt collar.",
        "options": [
          "Necklace",
          "Collar",
          "Wallet",
          "Umbrella"
        ],
        "correctAnswer": "Collar",
        "explanation": "Frase completa: \"Straighten your shirt collar.\" (Arrume a gola da sua camisa.) — Collar (\"có-lar\") = Gola / Colarinho.",
        "phoneticHint": "\"có-lar\" /ˈkɑː.lər/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p20",
    "worldId": 0,
    "phaseNumber": 20,
    "themeId": "clothes",
    "themeTitle": "Roupas",
    "frequencyLevel": "Módulo 4 • Menos Comuns",
    "vocabItems": [
      {
        "word": "Apron",
        "pt": "Avental",
        "simplePronunciation": "êi-pron",
        "phonetic": "/ˈeɪ.prən/",
        "exampleEn": "Wear an apron while cooking.",
        "examplePt": "Use um avental enquanto cozinha.",
        "emoji": "🎽"
      },
      {
        "word": "Vest",
        "pt": "Colete",
        "simplePronunciation": "vést",
        "phonetic": "/vest/",
        "exampleEn": "He wore a warm vest over his shirt.",
        "examplePt": "Ele usou um colete quentinho sobre a camisa.",
        "emoji": "🦺"
      },
      {
        "word": "Raincoat",
        "pt": "Capa de chuva",
        "simplePronunciation": "rêin-côut",
        "phonetic": "/ˈreɪn.koʊt/",
        "exampleEn": "A yellow raincoat keeps you dry.",
        "examplePt": "Uma capa de chuva amarela mantém você seco.",
        "emoji": "🧥"
      },
      {
        "word": "Slippers",
        "pt": "Pantufas",
        "simplePronunciation": "slí-pers",
        "phonetic": "/ˈslɪp.ərz/",
        "exampleEn": "Wear soft slippers inside the bedroom.",
        "examplePt": "Use pantufas macias dentro do quarto.",
        "emoji": "🥿"
      },
      {
        "word": "Bracelet",
        "pt": "Pulseira",
        "simplePronunciation": "brêis-let",
        "phonetic": "/ˈbreɪ.slət/",
        "exampleEn": "She has a silver bracelet on her wrist.",
        "examplePt": "Ela tem uma pulseira de prata no pulso.",
        "emoji": "📿"
      },
      {
        "word": "Earrings",
        "pt": "Brincos",
        "simplePronunciation": "ír-rings",
        "phonetic": "/ˈɪr.rɪŋz/",
        "exampleEn": "Those gold earrings shine brightly.",
        "examplePt": "Aqueles brincos de ouro brilham muito.",
        "emoji": "💎"
      },
      {
        "word": "Sunglasses",
        "pt": "Óculos de sol",
        "simplePronunciation": "sân-glé-ses",
        "phonetic": "/ˈsʌnˌɡlæs.ɪz/",
        "exampleEn": "Wear sunglasses on sunny days.",
        "examplePt": "Use óculos de sol em dias ensolarados.",
        "emoji": "🕶️"
      },
      {
        "word": "Hood",
        "pt": "Capuz",
        "simplePronunciation": "rúd",
        "phonetic": "/hʊd/",
        "exampleEn": "Pull up your jacket hood in the wind.",
        "examplePt": "Coloque o capuz da blusa no vento.",
        "emoji": "🧥"
      },
      {
        "word": "Heel",
        "pt": "Salto do sapato",
        "simplePronunciation": "ríl",
        "phonetic": "/hiːl/",
        "exampleEn": "She wore shoes with a high heel.",
        "examplePt": "Ela usou sapatos de salto alto.",
        "emoji": "👠"
      },
      {
        "word": "Buckle",
        "pt": "Fivela",
        "simplePronunciation": "bâ-kol",
        "phonetic": "/ˈbʌk.əl/",
        "exampleEn": "Fasten the metal belt buckle.",
        "examplePt": "Feche a fivela de metal do cinto.",
        "emoji": "ベルト"
      },
      {
        "word": "Fabric",
        "pt": "Tecido / Pano",
        "simplePronunciation": "fé-brik",
        "phonetic": "/ˈfæb.rɪk/",
        "exampleEn": "Cotton is a soft and breathable fabric.",
        "examplePt": "O algodão é um tecido macio e fresco.",
        "emoji": "🧵"
      },
      {
        "word": "Hanger",
        "pt": "Cabide",
        "simplePronunciation": "rén-guer",
        "phonetic": "/ˈhæŋ.ər/",
        "exampleEn": "Put the dress on a wooden hanger.",
        "examplePt": "Coloque o vestido em um cabide de madeira.",
        "emoji": "🧥"
      }
    ],
    "title": "Roupas • Módulo 4: Menos Comuns & Específicas",
    "subtitle": "Nível 4/4 • 12 peças específicas, tecidos e detalhes do vestuário",
    "pedagogicalObjective": "Conhecer termos específicos de vestuário como avental, colete, capa de chuva, pantufas, fivela e tecido.",
    "type": "boss",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Roupas — Módulo 4 • Menos Comuns: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.",
      "Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p20-img-1",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Apron",
        "visualEmoji": "🎽",
        "visualOptions": [
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet (\"brêis-let\")",
            "translationPt": "Pulseira"
          },
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat (\"rêin-côut\")",
            "translationPt": "Capa de chuva"
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers (\"slí-pers\")",
            "translationPt": "Pantufas"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron (\"êi-pron\")",
            "translationPt": "Avental"
          }
        ],
        "options": [
          "Bracelet",
          "Raincoat",
          "Slippers",
          "Apron"
        ],
        "correctAnswer": "Apron",
        "explanation": "Apron (\"êi-pron\") = Avental. Exemplo: \"Wear an apron while cooking.\" (Use um avental enquanto cozinha.)",
        "phoneticHint": "\"êi-pron\" /ˈeɪ.prən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-2",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Vest",
        "visualEmoji": "🦺",
        "visualOptions": [
          {
            "text": "Heel",
            "emoji": "👠",
            "label": "Heel (\"ríl\")",
            "translationPt": "Salto do sapato"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron (\"êi-pron\")",
            "translationPt": "Avental"
          },
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest (\"vést\")",
            "translationPt": "Colete"
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers (\"slí-pers\")",
            "translationPt": "Pantufas"
          }
        ],
        "options": [
          "Heel",
          "Apron",
          "Vest",
          "Slippers"
        ],
        "correctAnswer": "Vest",
        "explanation": "Vest (\"vést\") = Colete. Exemplo: \"He wore a warm vest over his shirt.\" (Ele usou um colete quentinho sobre a camisa.)",
        "phoneticHint": "\"vést\" /vest/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-3",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Raincoat",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat (\"rêin-côut\")",
            "translationPt": "Capa de chuva"
          },
          {
            "text": "Fabric",
            "emoji": "🧵",
            "label": "Fabric (\"fé-brik\")",
            "translationPt": "Tecido / Pano"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron (\"êi-pron\")",
            "translationPt": "Avental"
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger (\"rén-guer\")",
            "translationPt": "Cabide"
          }
        ],
        "options": [
          "Raincoat",
          "Fabric",
          "Apron",
          "Hanger"
        ],
        "correctAnswer": "Raincoat",
        "explanation": "Raincoat (\"rêin-côut\") = Capa de chuva. Exemplo: \"A yellow raincoat keeps you dry.\" (Uma capa de chuva amarela mantém você seco.)",
        "phoneticHint": "\"rêin-côut\" /ˈreɪn.koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-4",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Slippers",
        "visualEmoji": "🥿",
        "visualOptions": [
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat (\"rêin-côut\")",
            "translationPt": "Capa de chuva"
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers (\"slí-pers\")",
            "translationPt": "Pantufas"
          },
          {
            "text": "Earrings",
            "emoji": "💎",
            "label": "Earrings (\"ír-rings\")",
            "translationPt": "Brincos"
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger (\"rén-guer\")",
            "translationPt": "Cabide"
          }
        ],
        "options": [
          "Raincoat",
          "Slippers",
          "Earrings",
          "Hanger"
        ],
        "correctAnswer": "Slippers",
        "explanation": "Slippers (\"slí-pers\") = Pantufas. Exemplo: \"Wear soft slippers inside the bedroom.\" (Use pantufas macias dentro do quarto.)",
        "phoneticHint": "\"slí-pers\" /ˈslɪp.ərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-5",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Bracelet",
        "visualEmoji": "📿",
        "visualOptions": [
          {
            "text": "Heel",
            "emoji": "👠",
            "label": "Heel (\"ríl\")",
            "translationPt": "Salto do sapato"
          },
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet (\"brêis-let\")",
            "translationPt": "Pulseira"
          },
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest (\"vést\")",
            "translationPt": "Colete"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses (\"sân-glé-ses\")",
            "translationPt": "Óculos de sol"
          }
        ],
        "options": [
          "Heel",
          "Bracelet",
          "Vest",
          "Sunglasses"
        ],
        "correctAnswer": "Bracelet",
        "explanation": "Bracelet (\"brêis-let\") = Pulseira. Exemplo: \"She has a silver bracelet on her wrist.\" (Ela tem uma pulseira de prata no pulso.)",
        "phoneticHint": "\"brêis-let\" /ˈbreɪ.slət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-6",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Earrings",
        "visualEmoji": "💎",
        "visualOptions": [
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger (\"rén-guer\")",
            "translationPt": "Cabide"
          },
          {
            "text": "Fabric",
            "emoji": "🧵",
            "label": "Fabric (\"fé-brik\")",
            "translationPt": "Tecido / Pano"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron (\"êi-pron\")",
            "translationPt": "Avental"
          },
          {
            "text": "Earrings",
            "emoji": "💎",
            "label": "Earrings (\"ír-rings\")",
            "translationPt": "Brincos"
          }
        ],
        "options": [
          "Hanger",
          "Fabric",
          "Apron",
          "Earrings"
        ],
        "correctAnswer": "Earrings",
        "explanation": "Earrings (\"ír-rings\") = Brincos. Exemplo: \"Those gold earrings shine brightly.\" (Aqueles brincos de ouro brilham muito.)",
        "phoneticHint": "\"ír-rings\" /ˈɪr.rɪŋz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-7",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Sunglasses",
        "visualEmoji": "🕶️",
        "visualOptions": [
          {
            "text": "Buckle",
            "emoji": "ベルト",
            "label": "Buckle (\"bâ-kol\")",
            "translationPt": "Fivela"
          },
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet (\"brêis-let\")",
            "translationPt": "Pulseira"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses (\"sân-glé-ses\")",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron (\"êi-pron\")",
            "translationPt": "Avental"
          }
        ],
        "options": [
          "Buckle",
          "Bracelet",
          "Sunglasses",
          "Apron"
        ],
        "correctAnswer": "Sunglasses",
        "explanation": "Sunglasses (\"sân-glé-ses\") = Óculos de sol. Exemplo: \"Wear sunglasses on sunny days.\" (Use óculos de sol em dias ensolarados.)",
        "phoneticHint": "\"sân-glé-ses\" /ˈsʌnˌɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-8",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Hood",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Hood",
            "emoji": "🧥",
            "label": "Hood (\"rúd\")",
            "translationPt": "Capuz"
          },
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger (\"rén-guer\")",
            "translationPt": "Cabide"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses (\"sân-glé-ses\")",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Earrings",
            "emoji": "💎",
            "label": "Earrings (\"ír-rings\")",
            "translationPt": "Brincos"
          }
        ],
        "options": [
          "Hood",
          "Hanger",
          "Sunglasses",
          "Earrings"
        ],
        "correctAnswer": "Hood",
        "explanation": "Hood (\"rúd\") = Capuz. Exemplo: \"Pull up your jacket hood in the wind.\" (Coloque o capuz da blusa no vento.)",
        "phoneticHint": "\"rúd\" /hʊd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-9",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Heel",
        "visualEmoji": "👠",
        "visualOptions": [
          {
            "text": "Fabric",
            "emoji": "🧵",
            "label": "Fabric (\"fé-brik\")",
            "translationPt": "Tecido / Pano"
          },
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet (\"brêis-let\")",
            "translationPt": "Pulseira"
          },
          {
            "text": "Heel",
            "emoji": "👠",
            "label": "Heel (\"ríl\")",
            "translationPt": "Salto do sapato"
          },
          {
            "text": "Vest",
            "emoji": "🦺",
            "label": "Vest (\"vést\")",
            "translationPt": "Colete"
          }
        ],
        "options": [
          "Fabric",
          "Bracelet",
          "Heel",
          "Vest"
        ],
        "correctAnswer": "Heel",
        "explanation": "Heel (\"ríl\") = Salto do sapato. Exemplo: \"She wore shoes with a high heel.\" (Ela usou sapatos de salto alto.)",
        "phoneticHint": "\"ríl\" /hiːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-10",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Buckle",
        "visualEmoji": "ベルト",
        "visualOptions": [
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses (\"sân-glé-ses\")",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Buckle",
            "emoji": "ベルト",
            "label": "Buckle (\"bâ-kol\")",
            "translationPt": "Fivela"
          },
          {
            "text": "Earrings",
            "emoji": "💎",
            "label": "Earrings (\"ír-rings\")",
            "translationPt": "Brincos"
          },
          {
            "text": "Hood",
            "emoji": "🧥",
            "label": "Hood (\"rúd\")",
            "translationPt": "Capuz"
          }
        ],
        "options": [
          "Sunglasses",
          "Buckle",
          "Earrings",
          "Hood"
        ],
        "correctAnswer": "Buckle",
        "explanation": "Buckle (\"bâ-kol\") = Fivela. Exemplo: \"Fasten the metal belt buckle.\" (Feche a fivela de metal do cinto.)",
        "phoneticHint": "\"bâ-kol\" /ˈbʌk.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-11",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Fabric",
        "visualEmoji": "🧵",
        "visualOptions": [
          {
            "text": "Bracelet",
            "emoji": "📿",
            "label": "Bracelet (\"brêis-let\")",
            "translationPt": "Pulseira"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses (\"sân-glé-ses\")",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Raincoat",
            "emoji": "🧥",
            "label": "Raincoat (\"rêin-côut\")",
            "translationPt": "Capa de chuva"
          },
          {
            "text": "Fabric",
            "emoji": "🧵",
            "label": "Fabric (\"fé-brik\")",
            "translationPt": "Tecido / Pano"
          }
        ],
        "options": [
          "Bracelet",
          "Sunglasses",
          "Raincoat",
          "Fabric"
        ],
        "correctAnswer": "Fabric",
        "explanation": "Fabric (\"fé-brik\") = Tecido / Pano. Exemplo: \"Cotton is a soft and breathable fabric.\" (O algodão é um tecido macio e fresco.)",
        "phoneticHint": "\"fé-brik\" /ˈfæb.rɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-img-12",
        "type": "image-choice",
        "prompt": "🖼️ Associe a palavra e o som à imagem correta:",
        "audioPhrase": "Hanger",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Hanger",
            "emoji": "🧥",
            "label": "Hanger (\"rén-guer\")",
            "translationPt": "Cabide"
          },
          {
            "text": "Buckle",
            "emoji": "ベルト",
            "label": "Buckle (\"bâ-kol\")",
            "translationPt": "Fivela"
          },
          {
            "text": "Slippers",
            "emoji": "🥿",
            "label": "Slippers (\"slí-pers\")",
            "translationPt": "Pantufas"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron (\"êi-pron\")",
            "translationPt": "Avental"
          }
        ],
        "options": [
          "Hanger",
          "Buckle",
          "Slippers",
          "Apron"
        ],
        "correctAnswer": "Hanger",
        "explanation": "Hanger (\"rén-guer\") = Cabide. Exemplo: \"Put the dress on a wooden hanger.\" (Coloque o vestido em um cabide de madeira.)",
        "phoneticHint": "\"rén-guer\" /ˈhæŋ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Vest",
        "contextSentencePt": "Pronúncia simplificada: \"vést\"",
        "options": [
          "Vest — Colete",
          "Raincoat — Capa de chuva",
          "Heel — Salto do sapato",
          "Hood — Capuz"
        ],
        "correctAnswer": "Vest — Colete",
        "explanation": "Você ouviu \"Vest\" (\"vést\") = Colete. Frase: \"He wore a warm vest over his shirt.\" (Ele usou um colete quentinho sobre a camisa.)",
        "phoneticHint": "\"vést\" /vest/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Earrings",
        "contextSentencePt": "Pronúncia simplificada: \"ír-rings\"",
        "options": [
          "Apron — Avental",
          "Earrings — Brincos",
          "Buckle — Fivela",
          "Bracelet — Pulseira"
        ],
        "correctAnswer": "Earrings — Brincos",
        "explanation": "Você ouviu \"Earrings\" (\"ír-rings\") = Brincos. Frase: \"Those gold earrings shine brightly.\" (Aqueles brincos de ouro brilham muito.)",
        "phoneticHint": "\"ír-rings\" /ˈɪr.rɪŋz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Buckle",
        "contextSentencePt": "Pronúncia simplificada: \"bâ-kol\"",
        "options": [
          "Sunglasses — Óculos de sol",
          "Buckle — Fivela",
          "Hanger — Cabide",
          "Bracelet — Pulseira"
        ],
        "correctAnswer": "Buckle — Fivela",
        "explanation": "Você ouviu \"Buckle\" (\"bâ-kol\") = Fivela. Frase: \"Fasten the metal belt buckle.\" (Feche a fivela de metal do cinto.)",
        "phoneticHint": "\"bâ-kol\" /ˈbʌk.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "🧥",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Raincoat\" (pronúncia: \"rêin-côut\")?",
        "audioPhrase": "Raincoat",
        "contextSentence": "A yellow raincoat keeps you dry.",
        "contextSentencePt": "Uma capa de chuva amarela mantém você seco.",
        "options": [
          "Salto do sapato",
          "Pulseira",
          "Brincos",
          "Capa de chuva"
        ],
        "correctAnswer": "Capa de chuva",
        "explanation": "\"Raincoat\" (\"rêin-côut\") significa \"Capa de chuva\".",
        "phoneticHint": "\"rêin-côut\" /ˈreɪn.koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🕶️",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Sunglasses\" (pronúncia: \"sân-glé-ses\")?",
        "audioPhrase": "Sunglasses",
        "contextSentence": "Wear sunglasses on sunny days.",
        "contextSentencePt": "Use óculos de sol em dias ensolarados.",
        "options": [
          "Pulseira",
          "Fivela",
          "Óculos de sol",
          "Cabide"
        ],
        "correctAnswer": "Óculos de sol",
        "explanation": "\"Sunglasses\" (\"sân-glé-ses\") significa \"Óculos de sol\".",
        "phoneticHint": "\"sân-glé-ses\" /ˈsʌnˌɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🧵",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Fabric\" (pronúncia: \"fé-brik\")?",
        "audioPhrase": "Fabric",
        "contextSentence": "Cotton is a soft and breathable fabric.",
        "contextSentencePt": "O algodão é um tecido macio e fresco.",
        "options": [
          "Tecido / Pano",
          "Óculos de sol",
          "Fivela",
          "Capuz"
        ],
        "correctAnswer": "Tecido / Pano",
        "explanation": "\"Fabric\" (\"fé-brik\") significa \"Tecido / Pano\".",
        "phoneticHint": "\"fé-brik\" /ˈfæb.rɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🥿",
        "prompt": "✍️ Complete a frase em inglês (\"Use pantufas macias dentro do quarto.\"):",
        "contextSentence": "Wear soft ______ inside the bedroom.",
        "contextSentencePt": "Tradução: \"Use pantufas macias dentro do quarto.\"",
        "audioPhrase": "Wear soft slippers inside the bedroom.",
        "options": [
          "Buckle",
          "Raincoat",
          "Slippers",
          "Vest"
        ],
        "correctAnswer": "Slippers",
        "explanation": "Frase completa: \"Wear soft slippers inside the bedroom.\" (Use pantufas macias dentro do quarto.) — Slippers (\"slí-pers\") = Pantufas.",
        "phoneticHint": "\"slí-pers\" /ˈslɪp.ərz/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p20-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🧥",
        "prompt": "✍️ Complete a frase em inglês (\"Coloque o capuz da blusa no vento.\"):",
        "contextSentence": "Pull up your jacket ______ in the wind.",
        "contextSentencePt": "Tradução: \"Coloque o capuz da blusa no vento.\"",
        "audioPhrase": "Pull up your jacket hood in the wind.",
        "options": [
          "Bracelet",
          "Hood",
          "Buckle",
          "Sunglasses"
        ],
        "correctAnswer": "Hood",
        "explanation": "Frase completa: \"Pull up your jacket hood in the wind.\" (Coloque o capuz da blusa no vento.) — Hood (\"rúd\") = Capuz.",
        "phoneticHint": "\"rúd\" /hʊd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p20-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🧥",
        "prompt": "✍️ Complete a frase em inglês (\"Coloque o vestido em um cabide de madeira.\"):",
        "contextSentence": "Put the dress on a wooden ______.",
        "contextSentencePt": "Tradução: \"Coloque o vestido em um cabide de madeira.\"",
        "audioPhrase": "Put the dress on a wooden hanger.",
        "options": [
          "Apron",
          "Sunglasses",
          "Raincoat",
          "Hanger"
        ],
        "correctAnswer": "Hanger",
        "explanation": "Frase completa: \"Put the dress on a wooden hanger.\" (Coloque o vestido em um cabide de madeira.) — Hanger (\"rén-guer\") = Cabide.",
        "phoneticHint": "\"rén-guer\" /ˈhæŋ.ər/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p21",
    "worldId": 0,
    "phaseNumber": 21,
    "themeId": "pronouns",
    "themeTitle": "Pronomes",
    "frequencyLevel": "Módulo 1 • Pessoais & Tratamento",
    "vocabItems": [
      {
        "word": "I",
        "pt": "Eu (falando de mim)",
        "simplePronunciation": "ái",
        "phonetic": "/aɪ/",
        "exampleEn": "I am at home.",
        "examplePt": "Eu estou em casa.",
        "emoji": "🙋"
      },
      {
        "word": "You",
        "pt": "Você / Vocês",
        "simplePronunciation": "iú",
        "phonetic": "/juː/",
        "exampleEn": "You are my friend.",
        "examplePt": "Você é meu amigo.",
        "emoji": "👉"
      },
      {
        "word": "He",
        "pt": "Ele (menino / homem)",
        "simplePronunciation": "rí",
        "phonetic": "/hiː/",
        "exampleEn": "He is in the kitchen.",
        "examplePt": "Ele está na cozinha.",
        "emoji": "👦"
      },
      {
        "word": "She",
        "pt": "Ela (menina / mulher)",
        "simplePronunciation": "xí",
        "phonetic": "/ʃiː/",
        "exampleEn": "She is a good teacher.",
        "examplePt": "Ela é uma boa professora.",
        "emoji": "👧"
      },
      {
        "word": "It",
        "pt": "Ele / Ela (coisa ou animal)",
        "simplePronunciation": "ít",
        "phonetic": "/ɪt/",
        "exampleEn": "It is a wooden door.",
        "examplePt": "É uma porta de madeira.",
        "emoji": "🐶"
      },
      {
        "word": "We",
        "pt": "Nós (eu e você juntos)",
        "simplePronunciation": "uí",
        "phonetic": "/wiː/",
        "exampleEn": "We live in this house.",
        "examplePt": "Nós moramos nesta casa.",
        "emoji": "👨‍👩‍👧"
      },
      {
        "word": "They",
        "pt": "Eles / Elas",
        "simplePronunciation": "dêi",
        "phonetic": "/ðeɪ/",
        "exampleEn": "They are at school.",
        "examplePt": "Eles estão na escola.",
        "emoji": "👥"
      },
      {
        "word": "Mr.",
        "pt": "Senhor (antes do nome)",
        "simplePronunciation": "mís-ter",
        "phonetic": "/ˈmɪs.tər/",
        "exampleEn": "Good morning, Mr. Silva.",
        "examplePt": "Bom dia, Senhor Silva.",
        "emoji": "👨"
      },
      {
        "word": "Mrs.",
        "pt": "Senhora (mulher casada)",
        "simplePronunciation": "mí-siz",
        "phonetic": "/ˈmɪs.ɪz/",
        "exampleEn": "Hello, Mrs. Costa.",
        "examplePt": "Olá, Senhora Costa.",
        "emoji": "👩"
      },
      {
        "word": "Miss",
        "pt": "Senhorita / Professora",
        "simplePronunciation": "mís",
        "phonetic": "/mɪs/",
        "exampleEn": "Thank you, Miss Ana.",
        "examplePt": "Obrigado, Senhorita Ana.",
        "emoji": "👩‍🏫"
      },
      {
        "word": "Sir",
        "pt": "Senhor (tratamento direto)",
        "simplePronunciation": "sâr",
        "phonetic": "/sɜːr/",
        "exampleEn": "Yes, Sir!",
        "examplePt": "Sim, Senhor!",
        "emoji": "🎩"
      },
      {
        "word": "Ma'am",
        "pt": "Senhora (tratamento direto)",
        "simplePronunciation": "mém",
        "phonetic": "/mæm/",
        "exampleEn": "Excuse me, Ma'am.",
        "examplePt": "Com licença, Senhora.",
        "emoji": "🌸"
      }
    ],
    "title": "Pronomes • Módulo 1: Pessoais & Tratamento",
    "subtitle": "Nível 1/4 • I, You, He, She, It, We, They + Mr., Mrs., Miss, Sir",
    "pedagogicalObjective": "Dominar os Pronomes Pessoais e de Tratamento com explicação para 5 anos, voz humana da professora e pares associativos.",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, \"He\" (Ele); para uma menina, \"She\" (Ela); e para um objeto ou animal, \"It\"!",
      "Ouça a voz humana e meiga da professora e pratique conectando os pares e completando os 4 tipos de exercícios!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p21-pair-1",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 1: Pessoais & Tratamento • Bloco 1 de 3",
        "conceptHeader": "Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, \"He\" (Ele); para uma menina, \"She\" (Ela); e para um objeto ou animal, \"It\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p21-b1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "\"ái\" /aɪ/",
            "pt": "Eu (falando de mim)",
            "tipPt": "I (\"ái\") = Eu (falando de mim). Exemplo: \"I am at home.\" (Eu estou em casa.)"
          },
          {
            "id": "w0-p21-b1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "\"iú\" /juː/",
            "pt": "Você / Vocês",
            "tipPt": "You (\"iú\") = Você / Vocês. Exemplo: \"You are my friend.\" (Você é meu amigo.)"
          },
          {
            "id": "w0-p21-b1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "\"rí\" /hiː/",
            "pt": "Ele (menino / homem)",
            "tipPt": "He (\"rí\") = Ele (menino / homem). Exemplo: \"He is in the kitchen.\" (Ele está na cozinha.)"
          },
          {
            "id": "w0-p21-b1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "\"xí\" /ʃiː/",
            "pt": "Ela (menina / mulher)",
            "tipPt": "She (\"xí\") = Ela (menina / mulher). Exemplo: \"She is a good teacher.\" (Ela é uma boa professora.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, \"He\" (Ele); para uma menina, \"She\" (Ela); e para um objeto ou animal, \"It\"!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p21-pair-2",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 1: Pessoais & Tratamento • Bloco 2 de 3",
        "conceptHeader": "Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, \"He\" (Ele); para uma menina, \"She\" (Ela); e para um objeto ou animal, \"It\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p21-b2-p1",
            "en": "It",
            "emoji": "🐶",
            "phonetic": "\"ít\" /ɪt/",
            "pt": "Ele / Ela (coisa ou animal)",
            "tipPt": "It (\"ít\") = Ele / Ela (coisa ou animal). Exemplo: \"It is a wooden door.\" (É uma porta de madeira.)"
          },
          {
            "id": "w0-p21-b2-p2",
            "en": "We",
            "emoji": "👨‍👩‍👧",
            "phonetic": "\"uí\" /wiː/",
            "pt": "Nós (eu e você juntos)",
            "tipPt": "We (\"uí\") = Nós (eu e você juntos). Exemplo: \"We live in this house.\" (Nós moramos nesta casa.)"
          },
          {
            "id": "w0-p21-b2-p3",
            "en": "They",
            "emoji": "👥",
            "phonetic": "\"dêi\" /ðeɪ/",
            "pt": "Eles / Elas",
            "tipPt": "They (\"dêi\") = Eles / Elas. Exemplo: \"They are at school.\" (Eles estão na escola.)"
          },
          {
            "id": "w0-p21-b2-p4",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "\"mís-ter\" /ˈmɪs.tər/",
            "pt": "Senhor (antes do nome)",
            "tipPt": "Mr. (\"mís-ter\") = Senhor (antes do nome). Exemplo: \"Good morning, Mr. Silva.\" (Bom dia, Senhor Silva.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, \"He\" (Ele); para uma menina, \"She\" (Ela); e para um objeto ou animal, \"It\"!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p21-pair-3",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 1: Pessoais & Tratamento • Bloco 3 de 3",
        "conceptHeader": "Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, \"He\" (Ele); para uma menina, \"She\" (Ela); e para um objeto ou animal, \"It\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p21-b3-p1",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "\"mí-siz\" /ˈmɪs.ɪz/",
            "pt": "Senhora (mulher casada)",
            "tipPt": "Mrs. (\"mí-siz\") = Senhora (mulher casada). Exemplo: \"Hello, Mrs. Costa.\" (Olá, Senhora Costa.)"
          },
          {
            "id": "w0-p21-b3-p2",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "\"mís\" /mɪs/",
            "pt": "Senhorita / Professora",
            "tipPt": "Miss (\"mís\") = Senhorita / Professora. Exemplo: \"Thank you, Miss Ana.\" (Obrigado, Senhorita Ana.)"
          },
          {
            "id": "w0-p21-b3-p3",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "\"sâr\" /sɜːr/",
            "pt": "Senhor (tratamento direto)",
            "tipPt": "Sir (\"sâr\") = Senhor (tratamento direto). Exemplo: \"Yes, Sir!\" (Sim, Senhor!)"
          },
          {
            "id": "w0-p21-b3-p4",
            "en": "Ma'am",
            "emoji": "🌸",
            "phonetic": "\"mém\" /mæm/",
            "pt": "Senhora (tratamento direto)",
            "tipPt": "Ma'am (\"mém\") = Senhora (tratamento direto). Exemplo: \"Excuse me, Ma'am.\" (Com licença, Senhora.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, \"He\" (Ele); para uma menina, \"She\" (Ela); e para um objeto ou animal, \"It\"!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p21-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "You",
        "contextSentencePt": "Pronúncia simplificada: \"iú\"",
        "options": [
          "They — Eles / Elas",
          "You — Você / Vocês",
          "Miss — Senhorita / Professora",
          "Sir — Senhor (tratamento direto)"
        ],
        "correctAnswer": "You — Você / Vocês",
        "explanation": "Você ouviu \"You\" (\"iú\") = Você / Vocês. Frase: \"You are my friend.\" (Você é meu amigo.)",
        "phoneticHint": "\"iú\" /juː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "We",
        "contextSentencePt": "Pronúncia simplificada: \"uí\"",
        "options": [
          "It — Ele / Ela (coisa ou animal)",
          "We — Nós (eu e você juntos)",
          "They — Eles / Elas",
          "You — Você / Vocês"
        ],
        "correctAnswer": "We — Nós (eu e você juntos)",
        "explanation": "Você ouviu \"We\" (\"uí\") = Nós (eu e você juntos). Frase: \"We live in this house.\" (Nós moramos nesta casa.)",
        "phoneticHint": "\"uí\" /wiː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Miss",
        "contextSentencePt": "Pronúncia simplificada: \"mís\"",
        "options": [
          "Mrs. — Senhora (mulher casada)",
          "We — Nós (eu e você juntos)",
          "They — Eles / Elas",
          "Miss — Senhorita / Professora"
        ],
        "correctAnswer": "Miss — Senhorita / Professora",
        "explanation": "Você ouviu \"Miss\" (\"mís\") = Senhorita / Professora. Frase: \"Thank you, Miss Ana.\" (Obrigado, Senhorita Ana.)",
        "phoneticHint": "\"mís\" /mɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "👦",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"He\" (pronúncia: \"rí\")?",
        "audioPhrase": "He",
        "contextSentence": "He is in the kitchen.",
        "contextSentencePt": "Ele está na cozinha.",
        "options": [
          "Senhora (mulher casada)",
          "Você / Vocês",
          "Ele (menino / homem)",
          "Ele / Ela (coisa ou animal)"
        ],
        "correctAnswer": "Ele (menino / homem)",
        "explanation": "\"He\" (\"rí\") significa \"Ele (menino / homem)\".",
        "phoneticHint": "\"rí\" /hiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "👥",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"They\" (pronúncia: \"dêi\")?",
        "audioPhrase": "They",
        "contextSentence": "They are at school.",
        "contextSentencePt": "Eles estão na escola.",
        "options": [
          "Eles / Elas",
          "Ela (menina / mulher)",
          "Eu (falando de mim)",
          "Ele (menino / homem)"
        ],
        "correctAnswer": "Eles / Elas",
        "explanation": "\"They\" (\"dêi\") significa \"Eles / Elas\".",
        "phoneticHint": "\"dêi\" /ðeɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🎩",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Sir\" (pronúncia: \"sâr\")?",
        "audioPhrase": "Sir",
        "contextSentence": "Yes, Sir!",
        "contextSentencePt": "Sim, Senhor!",
        "options": [
          "Senhora (tratamento direto)",
          "Nós (eu e você juntos)",
          "Senhor (tratamento direto)",
          "Ele (menino / homem)"
        ],
        "correctAnswer": "Senhor (tratamento direto)",
        "explanation": "\"Sir\" (\"sâr\") significa \"Senhor (tratamento direto)\".",
        "phoneticHint": "\"sâr\" /sɜːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-fill-1",
        "type": "fill-blank",
        "visualEmoji": "👧",
        "prompt": "✍️ Complete a frase em inglês (\"Ela é uma boa professora.\"):",
        "contextSentence": "______ is a good teacher.",
        "contextSentencePt": "Tradução: \"Ela é uma boa professora.\"",
        "audioPhrase": "She is a good teacher.",
        "options": [
          "Sir",
          "She",
          "You",
          "Miss"
        ],
        "correctAnswer": "She",
        "explanation": "Frase completa: \"She is a good teacher.\" (Ela é uma boa professora.) — She (\"xí\") = Ela (menina / mulher).",
        "phoneticHint": "\"xí\" /ʃiː/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p21-fill-2",
        "type": "fill-blank",
        "visualEmoji": "👨",
        "prompt": "✍️ Complete a frase em inglês (\"Bom dia, Senhor Silva.\"):",
        "contextSentence": "Good morning, Mr. Silva. (______)",
        "contextSentencePt": "Tradução: \"Bom dia, Senhor Silva.\"",
        "audioPhrase": "Good morning, Mr. Silva.",
        "options": [
          "It",
          "Mrs.",
          "Miss",
          "Mr."
        ],
        "correctAnswer": "Mr.",
        "explanation": "Frase completa: \"Good morning, Mr. Silva.\" (Bom dia, Senhor Silva.) — Mr. (\"mís-ter\") = Senhor (antes do nome).",
        "phoneticHint": "\"mís-ter\" /ˈmɪs.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p21-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🌸",
        "prompt": "✍️ Complete a frase em inglês (\"Com licença, Senhora.\"):",
        "contextSentence": "Excuse me, ______.",
        "contextSentencePt": "Tradução: \"Com licença, Senhora.\"",
        "audioPhrase": "Excuse me, Ma'am.",
        "options": [
          "Ma'am",
          "I",
          "She",
          "He"
        ],
        "correctAnswer": "Ma'am",
        "explanation": "Frase completa: \"Excuse me, Ma'am.\" (Com licença, Senhora.) — Ma'am (\"mém\") = Senhora (tratamento direto).",
        "phoneticHint": "\"mém\" /mæm/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p22",
    "worldId": 0,
    "phaseNumber": 22,
    "themeId": "pronouns",
    "themeTitle": "Pronomes",
    "frequencyLevel": "Módulo 2 • Possessivos & Demonstrativos",
    "vocabItems": [
      {
        "word": "My",
        "pt": "Meu / Minha",
        "simplePronunciation": "mái",
        "phonetic": "/maɪ/",
        "exampleEn": "This is my house.",
        "examplePt": "Esta é a minha casa.",
        "emoji": "💖"
      },
      {
        "word": "Your",
        "pt": "Seu / Sua",
        "simplePronunciation": "iór",
        "phonetic": "/jʊr/",
        "exampleEn": "Here is your book.",
        "examplePt": "Aqui está o seu livro.",
        "emoji": "🎁"
      },
      {
        "word": "His",
        "pt": "Dele",
        "simplePronunciation": "ríz",
        "phonetic": "/hɪz/",
        "exampleEn": "That is his car.",
        "examplePt": "Aquele é o carro dele.",
        "emoji": "👦"
      },
      {
        "word": "Her",
        "pt": "Dela",
        "simplePronunciation": "râr",
        "phonetic": "/hɜːr/",
        "exampleEn": "This is her dress.",
        "examplePt": "Este é o vestido dela.",
        "emoji": "👧"
      },
      {
        "word": "Our",
        "pt": "Nosso / Nossa",
        "simplePronunciation": "áu-er",
        "phonetic": "/aʊər/",
        "exampleEn": "Welcome to our kitchen.",
        "examplePt": "Bem-vindo à nossa cozinha.",
        "emoji": "🏡"
      },
      {
        "word": "Their",
        "pt": "Deles / Delas",
        "simplePronunciation": "dér",
        "phonetic": "/ðer/",
        "exampleEn": "That is their dog.",
        "examplePt": "Aquele é o cachorro deles.",
        "emoji": "👨‍👩‍👧‍👦"
      },
      {
        "word": "Mine",
        "pt": "O meu / A minha (no final)",
        "simplePronunciation": "máin",
        "phonetic": "/maɪn/",
        "exampleEn": "This cup is mine.",
        "examplePt": "Esta xícara é minha.",
        "emoji": "☕"
      },
      {
        "word": "Yours",
        "pt": "O seu / A sua (no final)",
        "simplePronunciation": "iórz",
        "phonetic": "/jʊrz/",
        "exampleEn": "The key is yours.",
        "examplePt": "A chave é sua.",
        "emoji": "🔑"
      },
      {
        "word": "This",
        "pt": "Este / Esta / Isto (1 perto)",
        "simplePronunciation": "dís",
        "phonetic": "/ðɪs/",
        "exampleEn": "This apple is sweet.",
        "examplePt": "Esta maçã aqui está doce.",
        "emoji": "🍎"
      },
      {
        "word": "That",
        "pt": "Aquele / Aquela / Aquilo (1 longe)",
        "simplePronunciation": "dét",
        "phonetic": "/ðæt/",
        "exampleEn": "Look at that tree.",
        "examplePt": "Olhe para aquela árvore lá longe.",
        "emoji": "🌳"
      },
      {
        "word": "These",
        "pt": "Estes / Estas (vários perto)",
        "simplePronunciation": "díz",
        "phonetic": "/ðiːz/",
        "exampleEn": "These shoes are new.",
        "examplePt": "Estes sapatos aqui são novos.",
        "emoji": "👟"
      },
      {
        "word": "Those",
        "pt": "Aqueles / Aquelas (vários longe)",
        "simplePronunciation": "dôuz",
        "phonetic": "/ðoʊz/",
        "exampleEn": "Those birds are flying.",
        "examplePt": "Aqueles pássaros lá longe estão voando.",
        "emoji": "🐦"
      }
    ],
    "title": "Pronomes • Módulo 2: Possessivos & Demonstrativos",
    "subtitle": "Nível 2/4 • My, Your, His, Her, Our, Their + This, That, These, Those",
    "pedagogicalObjective": "Indicar posse (Meu, Seu, Dele, Dela, Nosso) e distância (Este pertinho vs. Aquele lá longe).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Mostram de quem é cada coisinha (My = Meu, Your = Seu, His = Dele, Her = Dela, Our = Nosso) e se está pertinho da mão (This / These) ou lá longe (That / Those)!",
      "Ouça a voz humana e meiga da professora e pratique conectando os pares e completando os 4 tipos de exercícios!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p22-pair-1",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 2: Possessivos & Demonstrativos • Bloco 1 de 3",
        "conceptHeader": "Mostram de quem é cada coisinha (My = Meu, Your = Seu, His = Dele, Her = Dela, Our = Nosso) e se está pertinho da mão (This / These) ou lá longe (That / Those)!",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p22-b1-p1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "\"mái\" /maɪ/",
            "pt": "Meu / Minha",
            "tipPt": "My (\"mái\") = Meu / Minha. Exemplo: \"This is my house.\" (Esta é a minha casa.)"
          },
          {
            "id": "w0-p22-b1-p2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "\"iór\" /jʊr/",
            "pt": "Seu / Sua",
            "tipPt": "Your (\"iór\") = Seu / Sua. Exemplo: \"Here is your book.\" (Aqui está o seu livro.)"
          },
          {
            "id": "w0-p22-b1-p3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "\"ríz\" /hɪz/",
            "pt": "Dele",
            "tipPt": "His (\"ríz\") = Dele. Exemplo: \"That is his car.\" (Aquele é o carro dele.)"
          },
          {
            "id": "w0-p22-b1-p4",
            "en": "Her",
            "emoji": "👧",
            "phonetic": "\"râr\" /hɜːr/",
            "pt": "Dela",
            "tipPt": "Her (\"râr\") = Dela. Exemplo: \"This is her dress.\" (Este é o vestido dela.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Mostram de quem é cada coisinha (My = Meu, Your = Seu, His = Dele, Her = Dela, Our = Nosso) e se está pertinho da mão (This / These) ou lá longe (That / Those)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p22-pair-2",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 2: Possessivos & Demonstrativos • Bloco 2 de 3",
        "conceptHeader": "Mostram de quem é cada coisinha (My = Meu, Your = Seu, His = Dele, Her = Dela, Our = Nosso) e se está pertinho da mão (This / These) ou lá longe (That / Those)!",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p22-b2-p1",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "\"áu-er\" /aʊər/",
            "pt": "Nosso / Nossa",
            "tipPt": "Our (\"áu-er\") = Nosso / Nossa. Exemplo: \"Welcome to our kitchen.\" (Bem-vindo à nossa cozinha.)"
          },
          {
            "id": "w0-p22-b2-p2",
            "en": "Their",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "\"dér\" /ðer/",
            "pt": "Deles / Delas",
            "tipPt": "Their (\"dér\") = Deles / Delas. Exemplo: \"That is their dog.\" (Aquele é o cachorro deles.)"
          },
          {
            "id": "w0-p22-b2-p3",
            "en": "Mine",
            "emoji": "☕",
            "phonetic": "\"máin\" /maɪn/",
            "pt": "O meu / A minha (no final)",
            "tipPt": "Mine (\"máin\") = O meu / A minha (no final). Exemplo: \"This cup is mine.\" (Esta xícara é minha.)"
          },
          {
            "id": "w0-p22-b2-p4",
            "en": "Yours",
            "emoji": "🔑",
            "phonetic": "\"iórz\" /jʊrz/",
            "pt": "O seu / A sua (no final)",
            "tipPt": "Yours (\"iórz\") = O seu / A sua (no final). Exemplo: \"The key is yours.\" (A chave é sua.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Mostram de quem é cada coisinha (My = Meu, Your = Seu, His = Dele, Her = Dela, Our = Nosso) e se está pertinho da mão (This / These) ou lá longe (That / Those)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p22-pair-3",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 2: Possessivos & Demonstrativos • Bloco 3 de 3",
        "conceptHeader": "Mostram de quem é cada coisinha (My = Meu, Your = Seu, His = Dele, Her = Dela, Our = Nosso) e se está pertinho da mão (This / These) ou lá longe (That / Those)!",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p22-b3-p1",
            "en": "This",
            "emoji": "🍎",
            "phonetic": "\"dís\" /ðɪs/",
            "pt": "Este / Esta / Isto (1 perto)",
            "tipPt": "This (\"dís\") = Este / Esta / Isto (1 perto). Exemplo: \"This apple is sweet.\" (Esta maçã aqui está doce.)"
          },
          {
            "id": "w0-p22-b3-p2",
            "en": "That",
            "emoji": "🌳",
            "phonetic": "\"dét\" /ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 longe)",
            "tipPt": "That (\"dét\") = Aquele / Aquela / Aquilo (1 longe). Exemplo: \"Look at that tree.\" (Olhe para aquela árvore lá longe.)"
          },
          {
            "id": "w0-p22-b3-p3",
            "en": "These",
            "emoji": "👟",
            "phonetic": "\"díz\" /ðiːz/",
            "pt": "Estes / Estas (vários perto)",
            "tipPt": "These (\"díz\") = Estes / Estas (vários perto). Exemplo: \"These shoes are new.\" (Estes sapatos aqui são novos.)"
          },
          {
            "id": "w0-p22-b3-p4",
            "en": "Those",
            "emoji": "🐦",
            "phonetic": "\"dôuz\" /ðoʊz/",
            "pt": "Aqueles / Aquelas (vários longe)",
            "tipPt": "Those (\"dôuz\") = Aqueles / Aquelas (vários longe). Exemplo: \"Those birds are flying.\" (Aqueles pássaros lá longe estão voando.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Mostram de quem é cada coisinha (My = Meu, Your = Seu, His = Dele, Her = Dela, Our = Nosso) e se está pertinho da mão (This / These) ou lá longe (That / Those)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p22-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Your",
        "contextSentencePt": "Pronúncia simplificada: \"iór\"",
        "options": [
          "Her — Dela",
          "Your — Seu / Sua",
          "Those — Aqueles / Aquelas (vários longe)",
          "Their — Deles / Delas"
        ],
        "correctAnswer": "Your — Seu / Sua",
        "explanation": "Você ouviu \"Your\" (\"iór\") = Seu / Sua. Frase: \"Here is your book.\" (Aqui está o seu livro.)",
        "phoneticHint": "\"iór\" /jʊr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Their",
        "contextSentencePt": "Pronúncia simplificada: \"dér\"",
        "options": [
          "These — Estes / Estas (vários perto)",
          "Mine — O meu / A minha (no final)",
          "Yours — O seu / A sua (no final)",
          "Their — Deles / Delas"
        ],
        "correctAnswer": "Their — Deles / Delas",
        "explanation": "Você ouviu \"Their\" (\"dér\") = Deles / Delas. Frase: \"That is their dog.\" (Aquele é o cachorro deles.)",
        "phoneticHint": "\"dér\" /ðer/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "That",
        "contextSentencePt": "Pronúncia simplificada: \"dét\"",
        "options": [
          "Their — Deles / Delas",
          "His — Dele",
          "That — Aquele / Aquela / Aquilo (1 longe)",
          "My — Meu / Minha"
        ],
        "correctAnswer": "That — Aquele / Aquela / Aquilo (1 longe)",
        "explanation": "Você ouviu \"That\" (\"dét\") = Aquele / Aquela / Aquilo (1 longe). Frase: \"Look at that tree.\" (Olhe para aquela árvore lá longe.)",
        "phoneticHint": "\"dét\" /ðæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "👦",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"His\" (pronúncia: \"ríz\")?",
        "audioPhrase": "His",
        "contextSentence": "That is his car.",
        "contextSentencePt": "Aquele é o carro dele.",
        "options": [
          "Dele",
          "O meu / A minha (no final)",
          "Nosso / Nossa",
          "Aqueles / Aquelas (vários longe)"
        ],
        "correctAnswer": "Dele",
        "explanation": "\"His\" (\"ríz\") significa \"Dele\".",
        "phoneticHint": "\"ríz\" /hɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "☕",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Mine\" (pronúncia: \"máin\")?",
        "audioPhrase": "Mine",
        "contextSentence": "This cup is mine.",
        "contextSentencePt": "Esta xícara é minha.",
        "options": [
          "Dela",
          "Dele",
          "O meu / A minha (no final)",
          "Este / Esta / Isto (1 perto)"
        ],
        "correctAnswer": "O meu / A minha (no final)",
        "explanation": "\"Mine\" (\"máin\") significa \"O meu / A minha (no final)\".",
        "phoneticHint": "\"máin\" /maɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "👟",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"These\" (pronúncia: \"díz\")?",
        "audioPhrase": "These",
        "contextSentence": "These shoes are new.",
        "contextSentencePt": "Estes sapatos aqui são novos.",
        "options": [
          "Dela",
          "Estes / Estas (vários perto)",
          "O seu / A sua (no final)",
          "Aquele / Aquela / Aquilo (1 longe)"
        ],
        "correctAnswer": "Estes / Estas (vários perto)",
        "explanation": "\"These\" (\"díz\") significa \"Estes / Estas (vários perto)\".",
        "phoneticHint": "\"díz\" /ðiːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-fill-1",
        "type": "fill-blank",
        "visualEmoji": "👧",
        "prompt": "✍️ Complete a frase em inglês (\"Este é o vestido dela.\"):",
        "contextSentence": "This is ______ dress.",
        "contextSentencePt": "Tradução: \"Este é o vestido dela.\"",
        "audioPhrase": "This is her dress.",
        "options": [
          "These",
          "Those",
          "Your",
          "Her"
        ],
        "correctAnswer": "Her",
        "explanation": "Frase completa: \"This is her dress.\" (Este é o vestido dela.) — Her (\"râr\") = Dela.",
        "phoneticHint": "\"râr\" /hɜːr/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p22-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🔑",
        "prompt": "✍️ Complete a frase em inglês (\"A chave é sua.\"):",
        "contextSentence": "The key is ______.",
        "contextSentencePt": "Tradução: \"A chave é sua.\"",
        "audioPhrase": "The key is yours.",
        "options": [
          "Yours",
          "My",
          "This",
          "Her"
        ],
        "correctAnswer": "Yours",
        "explanation": "Frase completa: \"The key is yours.\" (A chave é sua.) — Yours (\"iórz\") = O seu / A sua (no final).",
        "phoneticHint": "\"iórz\" /jʊrz/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p22-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🐦",
        "prompt": "✍️ Complete a frase em inglês (\"Aqueles pássaros lá longe estão voando.\"):",
        "contextSentence": "______ birds are flying.",
        "contextSentencePt": "Tradução: \"Aqueles pássaros lá longe estão voando.\"",
        "audioPhrase": "Those birds are flying.",
        "options": [
          "These",
          "Mine",
          "His",
          "Those"
        ],
        "correctAnswer": "Those",
        "explanation": "Frase completa: \"Those birds are flying.\" (Aqueles pássaros lá longe estão voando.) — Those (\"dôuz\") = Aqueles / Aquelas (vários longe).",
        "phoneticHint": "\"dôuz\" /ðoʊz/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p23",
    "worldId": 0,
    "phaseNumber": 23,
    "themeId": "pronouns",
    "themeTitle": "Pronomes",
    "frequencyLevel": "Módulo 3 • Reflexivos & Interrogativos",
    "vocabItems": [
      {
        "word": "Myself",
        "pt": "Eu mesmo(a)",
        "simplePronunciation": "mai-sélf",
        "phonetic": "/maɪˈself/",
        "exampleEn": "I see myself in the mirror.",
        "examplePt": "Eu me vejo no espelho.",
        "emoji": "🪞"
      },
      {
        "word": "Yourself",
        "pt": "Você mesmo(a)",
        "simplePronunciation": "iór-sélf",
        "phonetic": "/jʊrˈself/",
        "exampleEn": "Take care of yourself.",
        "examplePt": "Cuide de você mesmo.",
        "emoji": "🫵"
      },
      {
        "word": "Himself",
        "pt": "Ele mesmo",
        "simplePronunciation": "rim-sélf",
        "phonetic": "/hɪmˈself/",
        "exampleEn": "He made breakfast himself.",
        "examplePt": "Ele mesmo preparou o café da manhã.",
        "emoji": "👦"
      },
      {
        "word": "Herself",
        "pt": "Ela mesma",
        "simplePronunciation": "râr-sélf",
        "phonetic": "/hɜːrˈself/",
        "exampleEn": "She painted the wall herself.",
        "examplePt": "Ela mesma pintou a parede.",
        "emoji": "👧"
      },
      {
        "word": "Ourselves",
        "pt": "Nós mesmos(as)",
        "simplePronunciation": "aur-sélvz",
        "phonetic": "/ɑːrˈselvz/",
        "exampleEn": "We cooked dinner ourselves.",
        "examplePt": "Nós mesmos fizemos o jantar.",
        "emoji": "👨‍👩‍👧"
      },
      {
        "word": "Who",
        "pt": "Quem? (para pessoas)",
        "simplePronunciation": "rú",
        "phonetic": "/huː/",
        "exampleEn": "Who is at the door?",
        "examplePt": "Quem está na porta?",
        "emoji": "🕵️"
      },
      {
        "word": "What",
        "pt": "O quê? / Qual?",
        "simplePronunciation": "uót",
        "phonetic": "/wɑːt/",
        "exampleEn": "What is your name?",
        "examplePt": "Qual é o seu nome?",
        "emoji": "❓"
      },
      {
        "word": "Where",
        "pt": "Onde? (para lugares)",
        "simplePronunciation": "uér",
        "phonetic": "/wer/",
        "exampleEn": "Where is my key?",
        "examplePt": "Onde está a minha chave?",
        "emoji": "📍"
      },
      {
        "word": "When",
        "pt": "Quando? (tempo / hora)",
        "simplePronunciation": "uén",
        "phonetic": "/wen/",
        "exampleEn": "When is the train leaving?",
        "examplePt": "Quando o trem vai partir?",
        "emoji": "⏰"
      },
      {
        "word": "Why",
        "pt": "Por quê? (motivo)",
        "simplePronunciation": "uái",
        "phonetic": "/waɪ/",
        "exampleEn": "Why are you smiling?",
        "examplePt": "Por que você está sorrindo?",
        "emoji": "🤔"
      },
      {
        "word": "Whose",
        "pt": "De quem? (dono)",
        "simplePronunciation": "rúz",
        "phonetic": "/huːz/",
        "exampleEn": "Whose bag is this?",
        "examplePt": "De quem é esta bolsa?",
        "emoji": "👜"
      },
      {
        "word": "How",
        "pt": "Como? (modo / estado)",
        "simplePronunciation": "ráu",
        "phonetic": "/haʊ/",
        "exampleEn": "How are you today?",
        "examplePt": "Como vai você hoje?",
        "emoji": "🤝"
      }
    ],
    "title": "Pronomes • Módulo 3: Reflexivos & Interrogativos",
    "subtitle": "Nível 3/4 • Myself, Yourself, Himself, Herself + Who, What, Where, When, Why, How",
    "pedagogicalObjective": "Usar pronomes reflexivos (como em um espelho) e fazer perguntas com Who, What, Where, When, Why, Whose e How.",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Reflexivos funcionam como um espelho (Myself = Eu mesmo, Yourself = Você mesmo). E os Interrogativos são as palavrinhas de fazer perguntas: Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?)!",
      "Ouça a voz humana e meiga da professora e pratique conectando os pares e completando os 4 tipos de exercícios!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p23-pair-1",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 3: Reflexivos & Interrogativos • Bloco 1 de 3",
        "conceptHeader": "Reflexivos funcionam como um espelho (Myself = Eu mesmo, Yourself = Você mesmo). E os Interrogativos são as palavrinhas de fazer perguntas: Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?)!",
        "teacherAudioPt": "/audio/teacher/pronoun_5.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p23-b1-p1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "\"mai-sélf\" /maɪˈself/",
            "pt": "Eu mesmo(a)",
            "tipPt": "Myself (\"mai-sélf\") = Eu mesmo(a). Exemplo: \"I see myself in the mirror.\" (Eu me vejo no espelho.)"
          },
          {
            "id": "w0-p23-b1-p2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "\"iór-sélf\" /jʊrˈself/",
            "pt": "Você mesmo(a)",
            "tipPt": "Yourself (\"iór-sélf\") = Você mesmo(a). Exemplo: \"Take care of yourself.\" (Cuide de você mesmo.)"
          },
          {
            "id": "w0-p23-b1-p3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "\"rim-sélf\" /hɪmˈself/",
            "pt": "Ele mesmo",
            "tipPt": "Himself (\"rim-sélf\") = Ele mesmo. Exemplo: \"He made breakfast himself.\" (Ele mesmo preparou o café da manhã.)"
          },
          {
            "id": "w0-p23-b1-p4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "\"râr-sélf\" /hɜːrˈself/",
            "pt": "Ela mesma",
            "tipPt": "Herself (\"râr-sélf\") = Ela mesma. Exemplo: \"She painted the wall herself.\" (Ela mesma pintou a parede.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Reflexivos funcionam como um espelho (Myself = Eu mesmo, Yourself = Você mesmo). E os Interrogativos são as palavrinhas de fazer perguntas: Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p23-pair-2",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 3: Reflexivos & Interrogativos • Bloco 2 de 3",
        "conceptHeader": "Reflexivos funcionam como um espelho (Myself = Eu mesmo, Yourself = Você mesmo). E os Interrogativos são as palavrinhas de fazer perguntas: Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?)!",
        "teacherAudioPt": "/audio/teacher/pronoun_5.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p23-b2-p1",
            "en": "Ourselves",
            "emoji": "👨‍👩‍👧",
            "phonetic": "\"aur-sélvz\" /ɑːrˈselvz/",
            "pt": "Nós mesmos(as)",
            "tipPt": "Ourselves (\"aur-sélvz\") = Nós mesmos(as). Exemplo: \"We cooked dinner ourselves.\" (Nós mesmos fizemos o jantar.)"
          },
          {
            "id": "w0-p23-b2-p2",
            "en": "Who",
            "emoji": "🕵️",
            "phonetic": "\"rú\" /huː/",
            "pt": "Quem? (para pessoas)",
            "tipPt": "Who (\"rú\") = Quem? (para pessoas). Exemplo: \"Who is at the door?\" (Quem está na porta?)"
          },
          {
            "id": "w0-p23-b2-p3",
            "en": "What",
            "emoji": "❓",
            "phonetic": "\"uót\" /wɑːt/",
            "pt": "O quê? / Qual?",
            "tipPt": "What (\"uót\") = O quê? / Qual?. Exemplo: \"What is your name?\" (Qual é o seu nome?)"
          },
          {
            "id": "w0-p23-b2-p4",
            "en": "Where",
            "emoji": "📍",
            "phonetic": "\"uér\" /wer/",
            "pt": "Onde? (para lugares)",
            "tipPt": "Where (\"uér\") = Onde? (para lugares). Exemplo: \"Where is my key?\" (Onde está a minha chave?)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Reflexivos funcionam como um espelho (Myself = Eu mesmo, Yourself = Você mesmo). E os Interrogativos são as palavrinhas de fazer perguntas: Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p23-pair-3",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 3: Reflexivos & Interrogativos • Bloco 3 de 3",
        "conceptHeader": "Reflexivos funcionam como um espelho (Myself = Eu mesmo, Yourself = Você mesmo). E os Interrogativos são as palavrinhas de fazer perguntas: Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?)!",
        "teacherAudioPt": "/audio/teacher/pronoun_5.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p23-b3-p1",
            "en": "When",
            "emoji": "⏰",
            "phonetic": "\"uén\" /wen/",
            "pt": "Quando? (tempo / hora)",
            "tipPt": "When (\"uén\") = Quando? (tempo / hora). Exemplo: \"When is the train leaving?\" (Quando o trem vai partir?)"
          },
          {
            "id": "w0-p23-b3-p2",
            "en": "Why",
            "emoji": "🤔",
            "phonetic": "\"uái\" /waɪ/",
            "pt": "Por quê? (motivo)",
            "tipPt": "Why (\"uái\") = Por quê? (motivo). Exemplo: \"Why are you smiling?\" (Por que você está sorrindo?)"
          },
          {
            "id": "w0-p23-b3-p3",
            "en": "Whose",
            "emoji": "👜",
            "phonetic": "\"rúz\" /huːz/",
            "pt": "De quem? (dono)",
            "tipPt": "Whose (\"rúz\") = De quem? (dono). Exemplo: \"Whose bag is this?\" (De quem é esta bolsa?)"
          },
          {
            "id": "w0-p23-b3-p4",
            "en": "How",
            "emoji": "🤝",
            "phonetic": "\"ráu\" /haʊ/",
            "pt": "Como? (modo / estado)",
            "tipPt": "How (\"ráu\") = Como? (modo / estado). Exemplo: \"How are you today?\" (Como vai você hoje?)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Reflexivos funcionam como um espelho (Myself = Eu mesmo, Yourself = Você mesmo). E os Interrogativos são as palavrinhas de fazer perguntas: Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p23-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Yourself",
        "contextSentencePt": "Pronúncia simplificada: \"iór-sélf\"",
        "options": [
          "When — Quando? (tempo / hora)",
          "How — Como? (modo / estado)",
          "Why — Por quê? (motivo)",
          "Yourself — Você mesmo(a)"
        ],
        "correctAnswer": "Yourself — Você mesmo(a)",
        "explanation": "Você ouviu \"Yourself\" (\"iór-sélf\") = Você mesmo(a). Frase: \"Take care of yourself.\" (Cuide de você mesmo.)",
        "phoneticHint": "\"iór-sélf\" /jʊrˈself/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Who",
        "contextSentencePt": "Pronúncia simplificada: \"rú\"",
        "options": [
          "Yourself — Você mesmo(a)",
          "Himself — Ele mesmo",
          "Who — Quem? (para pessoas)",
          "Where — Onde? (para lugares)"
        ],
        "correctAnswer": "Who — Quem? (para pessoas)",
        "explanation": "Você ouviu \"Who\" (\"rú\") = Quem? (para pessoas). Frase: \"Who is at the door?\" (Quem está na porta?)",
        "phoneticHint": "\"rú\" /huː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Why",
        "contextSentencePt": "Pronúncia simplificada: \"uái\"",
        "options": [
          "Why — Por quê? (motivo)",
          "Where — Onde? (para lugares)",
          "Who — Quem? (para pessoas)",
          "Yourself — Você mesmo(a)"
        ],
        "correctAnswer": "Why — Por quê? (motivo)",
        "explanation": "Você ouviu \"Why\" (\"uái\") = Por quê? (motivo). Frase: \"Why are you smiling?\" (Por que você está sorrindo?)",
        "phoneticHint": "\"uái\" /waɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "👦",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Himself\" (pronúncia: \"rim-sélf\")?",
        "audioPhrase": "Himself",
        "contextSentence": "He made breakfast himself.",
        "contextSentencePt": "Ele mesmo preparou o café da manhã.",
        "options": [
          "Como? (modo / estado)",
          "Quando? (tempo / hora)",
          "Ele mesmo",
          "Nós mesmos(as)"
        ],
        "correctAnswer": "Ele mesmo",
        "explanation": "\"Himself\" (\"rim-sélf\") significa \"Ele mesmo\".",
        "phoneticHint": "\"rim-sélf\" /hɪmˈself/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "❓",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"What\" (pronúncia: \"uót\")?",
        "audioPhrase": "What",
        "contextSentence": "What is your name?",
        "contextSentencePt": "Qual é o seu nome?",
        "options": [
          "Nós mesmos(as)",
          "O quê? / Qual?",
          "Eu mesmo(a)",
          "Quando? (tempo / hora)"
        ],
        "correctAnswer": "O quê? / Qual?",
        "explanation": "\"What\" (\"uót\") significa \"O quê? / Qual?\".",
        "phoneticHint": "\"uót\" /wɑːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "👜",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Whose\" (pronúncia: \"rúz\")?",
        "audioPhrase": "Whose",
        "contextSentence": "Whose bag is this?",
        "contextSentencePt": "De quem é esta bolsa?",
        "options": [
          "Onde? (para lugares)",
          "Quem? (para pessoas)",
          "Ela mesma",
          "De quem? (dono)"
        ],
        "correctAnswer": "De quem? (dono)",
        "explanation": "\"Whose\" (\"rúz\") significa \"De quem? (dono)\".",
        "phoneticHint": "\"rúz\" /huːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-fill-1",
        "type": "fill-blank",
        "visualEmoji": "👧",
        "prompt": "✍️ Complete a frase em inglês (\"Ela mesma pintou a parede.\"):",
        "contextSentence": "She painted the wall ______.",
        "contextSentencePt": "Tradução: \"Ela mesma pintou a parede.\"",
        "audioPhrase": "She painted the wall herself.",
        "options": [
          "Herself",
          "Whose",
          "Ourselves",
          "Who"
        ],
        "correctAnswer": "Herself",
        "explanation": "Frase completa: \"She painted the wall herself.\" (Ela mesma pintou a parede.) — Herself (\"râr-sélf\") = Ela mesma.",
        "phoneticHint": "\"râr-sélf\" /hɜːrˈself/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p23-fill-2",
        "type": "fill-blank",
        "visualEmoji": "📍",
        "prompt": "✍️ Complete a frase em inglês (\"Onde está a minha chave?\"):",
        "contextSentence": "______ is my key?",
        "contextSentencePt": "Tradução: \"Onde está a minha chave?\"",
        "audioPhrase": "Where is my key?",
        "options": [
          "When",
          "Who",
          "Herself",
          "Where"
        ],
        "correctAnswer": "Where",
        "explanation": "Frase completa: \"Where is my key?\" (Onde está a minha chave?) — Where (\"uér\") = Onde? (para lugares).",
        "phoneticHint": "\"uér\" /wer/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p23-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🤝",
        "prompt": "✍️ Complete a frase em inglês (\"Como vai você hoje?\"):",
        "contextSentence": "______ are you today?",
        "contextSentencePt": "Tradução: \"Como vai você hoje?\"",
        "audioPhrase": "How are you today?",
        "options": [
          "Ourselves",
          "Herself",
          "How",
          "Himself"
        ],
        "correctAnswer": "How",
        "explanation": "Frase completa: \"How are you today?\" (Como vai você hoje?) — How (\"ráu\") = Como? (modo / estado).",
        "phoneticHint": "\"ráu\" /haʊ/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p24",
    "worldId": 0,
    "phaseNumber": 24,
    "themeId": "pronouns",
    "themeTitle": "Pronomes",
    "frequencyLevel": "Módulo 4 • Indefinidos & Relativos",
    "vocabItems": [
      {
        "word": "Someone",
        "pt": "Alguém (uma pessoa)",
        "simplePronunciation": "sâm-uân",
        "phonetic": "/ˈsʌm.wʌn/",
        "exampleEn": "Someone is at the gate.",
        "examplePt": "Alguém está no portão.",
        "emoji": "🔔"
      },
      {
        "word": "Something",
        "pt": "Algo / Alguma coisa",
        "simplePronunciation": "sâm-thing",
        "phonetic": "/ˈsʌm.θɪŋ/",
        "exampleEn": "There is something in the box.",
        "examplePt": "Há alguma coisa dentro da caixa.",
        "emoji": "🎁"
      },
      {
        "word": "Everyone",
        "pt": "Todo mundo / Todos",
        "simplePronunciation": "é-vri-uân",
        "phonetic": "/ˈev.ri.wʌn/",
        "exampleEn": "Everyone is in the living room.",
        "examplePt": "Todo mundo está na sala de estar.",
        "emoji": "👨‍👩‍👧‍👦"
      },
      {
        "word": "Everything",
        "pt": "Tudo / Todas as coisas",
        "simplePronunciation": "é-vri-thing",
        "phonetic": "/ˈev.ri.θɪŋ/",
        "exampleEn": "Everything is clean now.",
        "examplePt": "Tudo está limpo agora.",
        "emoji": "🌟"
      },
      {
        "word": "Nobody",
        "pt": "Ninguém (nenhuma pessoa)",
        "simplePronunciation": "nôu-bó-di",
        "phonetic": "/ˈnoʊ.bɑː.di/",
        "exampleEn": "Nobody is in the room.",
        "examplePt": "Ninguém está na sala.",
        "emoji": "🚫"
      },
      {
        "word": "Nothing",
        "pt": "Nada (nenhuma coisa)",
        "simplePronunciation": "nâ-thing",
        "phonetic": "/ˈnʌθ.ɪŋ/",
        "exampleEn": "There is nothing on the plate.",
        "examplePt": "Não há nada no prato.",
        "emoji": "🍽️"
      },
      {
        "word": "Anyone",
        "pt": "Alguém (em perguntas) / Qualquer um",
        "simplePronunciation": "é-ni-uân",
        "phonetic": "/ˈen.i.wʌn/",
        "exampleEn": "Is anyone at home?",
        "examplePt": "Tem alguém em casa?",
        "emoji": "🏠"
      },
      {
        "word": "Anything",
        "pt": "Alguma coisa (perguntas) / Qualquer coisa",
        "simplePronunciation": "é-ni-thing",
        "phonetic": "/ˈen.i.θɪŋ/",
        "exampleEn": "Do you want anything to drink?",
        "examplePt": "Você quer alguma coisa para beber?",
        "emoji": "🥤"
      },
      {
        "word": "Who (que)",
        "pt": "Que / Quem (ponte p/ pessoas)",
        "simplePronunciation": "rú",
        "phonetic": "/huː/",
        "exampleEn": "The doctor who helped me is kind.",
        "examplePt": "O médico que me ajudou é gentil.",
        "emoji": "👨‍⚕️"
      },
      {
        "word": "Which (que)",
        "pt": "Que / O qual (ponte p/ coisas)",
        "simplePronunciation": "uítch",
        "phonetic": "/wɪtʃ/",
        "exampleEn": "The key which opens the door.",
        "examplePt": "A chave que abre a porta.",
        "emoji": "🔑"
      },
      {
        "word": "That (que)",
        "pt": "Que (ponte curinga p/ tudo)",
        "simplePronunciation": "dét",
        "phonetic": "/ðæt/",
        "exampleEn": "The bread that I bought is warm.",
        "examplePt": "O pão que eu comprei está quentinho.",
        "emoji": "🍞"
      },
      {
        "word": "Where (onde)",
        "pt": "Onde (ponte p/ lugares)",
        "simplePronunciation": "uér",
        "phonetic": "/wer/",
        "exampleEn": "The house where I live.",
        "examplePt": "A casa onde eu moro.",
        "emoji": "🏡"
      }
    ],
    "title": "Pronomes • Módulo 4: Indefinidos & Relativos",
    "subtitle": "Nível 4/4 • Someone, Something, Everyone, Nothing + Who, Which, That, Where",
    "pedagogicalObjective": "Completar todas as famílias de pronomes com Indefinidos (Alguém, Algo, Todo mundo, Nada) e Relativos (as pontezinhas da frase).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Indefinidos falam de alguém ou algo sem dizer o nome (Someone = Alguém, Something = Algo, Everyone = Todo mundo, Nothing = Nada). Relativos são pontezinhas que ligam a frase (Who = pessoa, Which = coisa, That = tudo)!",
      "Ouça a voz humana e meiga da professora e pratique conectando os pares e completando os 4 tipos de exercícios!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p24-pair-1",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 4: Indefinidos & Relativos • Bloco 1 de 3",
        "conceptHeader": "Indefinidos falam de alguém ou algo sem dizer o nome (Someone = Alguém, Something = Algo, Everyone = Todo mundo, Nothing = Nada). Relativos são pontezinhas que ligam a frase (Who = pessoa, Which = coisa, That = tudo)!",
        "teacherAudioPt": "/audio/teacher/pronoun_7.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p24-b1-p1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "\"sâm-uân\" /ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Someone (\"sâm-uân\") = Alguém (uma pessoa). Exemplo: \"Someone is at the gate.\" (Alguém está no portão.)"
          },
          {
            "id": "w0-p24-b1-p2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "\"sâm-thing\" /ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Something (\"sâm-thing\") = Algo / Alguma coisa. Exemplo: \"There is something in the box.\" (Há alguma coisa dentro da caixa.)"
          },
          {
            "id": "w0-p24-b1-p3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "\"é-vri-uân\" /ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todos",
            "tipPt": "Everyone (\"é-vri-uân\") = Todo mundo / Todos. Exemplo: \"Everyone is in the living room.\" (Todo mundo está na sala de estar.)"
          },
          {
            "id": "w0-p24-b1-p4",
            "en": "Everything",
            "emoji": "🌟",
            "phonetic": "\"é-vri-thing\" /ˈev.ri.θɪŋ/",
            "pt": "Tudo / Todas as coisas",
            "tipPt": "Everything (\"é-vri-thing\") = Tudo / Todas as coisas. Exemplo: \"Everything is clean now.\" (Tudo está limpo agora.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Indefinidos falam de alguém ou algo sem dizer o nome (Someone = Alguém, Something = Algo, Everyone = Todo mundo, Nothing = Nada). Relativos são pontezinhas que ligam a frase (Who = pessoa, Which = coisa, That = tudo)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p24-pair-2",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 4: Indefinidos & Relativos • Bloco 2 de 3",
        "conceptHeader": "Indefinidos falam de alguém ou algo sem dizer o nome (Someone = Alguém, Something = Algo, Everyone = Todo mundo, Nothing = Nada). Relativos são pontezinhas que ligam a frase (Who = pessoa, Which = coisa, That = tudo)!",
        "teacherAudioPt": "/audio/teacher/pronoun_7.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p24-b2-p1",
            "en": "Nobody",
            "emoji": "🚫",
            "phonetic": "\"nôu-bó-di\" /ˈnoʊ.bɑː.di/",
            "pt": "Ninguém (nenhuma pessoa)",
            "tipPt": "Nobody (\"nôu-bó-di\") = Ninguém (nenhuma pessoa). Exemplo: \"Nobody is in the room.\" (Ninguém está na sala.)"
          },
          {
            "id": "w0-p24-b2-p2",
            "en": "Nothing",
            "emoji": "🍽️",
            "phonetic": "\"nâ-thing\" /ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Nothing (\"nâ-thing\") = Nada (nenhuma coisa). Exemplo: \"There is nothing on the plate.\" (Não há nada no prato.)"
          },
          {
            "id": "w0-p24-b2-p3",
            "en": "Anyone",
            "emoji": "🏠",
            "phonetic": "\"é-ni-uân\" /ˈen.i.wʌn/",
            "pt": "Alguém (em perguntas) / Qualquer um",
            "tipPt": "Anyone (\"é-ni-uân\") = Alguém (em perguntas) / Qualquer um. Exemplo: \"Is anyone at home?\" (Tem alguém em casa?)"
          },
          {
            "id": "w0-p24-b2-p4",
            "en": "Anything",
            "emoji": "🥤",
            "phonetic": "\"é-ni-thing\" /ˈen.i.θɪŋ/",
            "pt": "Alguma coisa (perguntas) / Qualquer coisa",
            "tipPt": "Anything (\"é-ni-thing\") = Alguma coisa (perguntas) / Qualquer coisa. Exemplo: \"Do you want anything to drink?\" (Você quer alguma coisa para beber?)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Indefinidos falam de alguém ou algo sem dizer o nome (Someone = Alguém, Something = Algo, Everyone = Todo mundo, Nothing = Nada). Relativos são pontezinhas que ligam a frase (Who = pessoa, Which = coisa, That = tudo)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p24-pair-3",
        "type": "pair-match",
        "conceptTitle": "Pronomes • Módulo 4: Indefinidos & Relativos • Bloco 3 de 3",
        "conceptHeader": "Indefinidos falam de alguém ou algo sem dizer o nome (Someone = Alguém, Something = Algo, Everyone = Todo mundo, Nothing = Nada). Relativos são pontezinhas que ligam a frase (Who = pessoa, Which = coisa, That = tudo)!",
        "teacherAudioPt": "/audio/teacher/pronoun_7.wav",
        "prompt": "🤝 Exercício Associativo: selecione o par correto de cada pronome:",
        "pairs": [
          {
            "id": "w0-p24-b3-p1",
            "en": "Who (que)",
            "emoji": "👨‍⚕️",
            "phonetic": "\"rú\" /huː/",
            "pt": "Que / Quem (ponte p/ pessoas)",
            "tipPt": "Who (que) (\"rú\") = Que / Quem (ponte p/ pessoas). Exemplo: \"The doctor who helped me is kind.\" (O médico que me ajudou é gentil.)"
          },
          {
            "id": "w0-p24-b3-p2",
            "en": "Which (que)",
            "emoji": "🔑",
            "phonetic": "\"uítch\" /wɪtʃ/",
            "pt": "Que / O qual (ponte p/ coisas)",
            "tipPt": "Which (que) (\"uítch\") = Que / O qual (ponte p/ coisas). Exemplo: \"The key which opens the door.\" (A chave que abre a porta.)"
          },
          {
            "id": "w0-p24-b3-p3",
            "en": "That (que)",
            "emoji": "🍞",
            "phonetic": "\"dét\" /ðæt/",
            "pt": "Que (ponte curinga p/ tudo)",
            "tipPt": "That (que) (\"dét\") = Que (ponte curinga p/ tudo). Exemplo: \"The bread that I bought is warm.\" (O pão que eu comprei está quentinho.)"
          },
          {
            "id": "w0-p24-b3-p4",
            "en": "Where (onde)",
            "emoji": "🏡",
            "phonetic": "\"uér\" /wer/",
            "pt": "Onde (ponte p/ lugares)",
            "tipPt": "Where (onde) (\"uér\") = Onde (ponte p/ lugares). Exemplo: \"The house where I live.\" (A casa onde eu moro.)"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Indefinidos falam de alguém ou algo sem dizer o nome (Someone = Alguém, Something = Algo, Everyone = Todo mundo, Nothing = Nada). Relativos são pontezinhas que ligam a frase (Who = pessoa, Which = coisa, That = tudo)!",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p24-list-1",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Something",
        "contextSentencePt": "Pronúncia simplificada: \"sâm-thing\"",
        "options": [
          "Where (onde) — Onde (ponte p/ lugares)",
          "Anyone — Alguém (em perguntas) / Qualquer um",
          "Something — Algo / Alguma coisa",
          "Which (que) — Que / O qual (ponte p/ coisas)"
        ],
        "correctAnswer": "Something — Algo / Alguma coisa",
        "explanation": "Você ouviu \"Something\" (\"sâm-thing\") = Algo / Alguma coisa. Frase: \"There is something in the box.\" (Há alguma coisa dentro da caixa.)",
        "phoneticHint": "\"sâm-thing\" /ˈsʌm.θɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-list-2",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Nothing",
        "contextSentencePt": "Pronúncia simplificada: \"nâ-thing\"",
        "options": [
          "Nothing — Nada (nenhuma coisa)",
          "That (que) — Que (ponte curinga p/ tudo)",
          "Anything — Alguma coisa (perguntas) / Qualquer coisa",
          "Something — Algo / Alguma coisa"
        ],
        "correctAnswer": "Nothing — Nada (nenhuma coisa)",
        "explanation": "Você ouviu \"Nothing\" (\"nâ-thing\") = Nada (nenhuma coisa). Frase: \"There is nothing on the plate.\" (Não há nada no prato.)",
        "phoneticHint": "\"nâ-thing\" /ˈnʌθ.ɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-list-3",
        "type": "listening",
        "prompt": "🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:",
        "audioPhrase": "Which (que)",
        "contextSentencePt": "Pronúncia simplificada: \"uítch\"",
        "options": [
          "That (que) — Que (ponte curinga p/ tudo)",
          "Everyone — Todo mundo / Todos",
          "Which (que) — Que / O qual (ponte p/ coisas)",
          "Someone — Alguém (uma pessoa)"
        ],
        "correctAnswer": "Which (que) — Que / O qual (ponte p/ coisas)",
        "explanation": "Você ouviu \"Which (que)\" (\"uítch\") = Que / O qual (ponte p/ coisas). Frase: \"The key which opens the door.\" (A chave que abre a porta.)",
        "phoneticHint": "\"uítch\" /wɪtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-mc-1",
        "type": "multiple-choice",
        "visualEmoji": "👨‍👩‍👧‍👦",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Everyone\" (pronúncia: \"é-vri-uân\")?",
        "audioPhrase": "Everyone",
        "contextSentence": "Everyone is in the living room.",
        "contextSentencePt": "Todo mundo está na sala de estar.",
        "options": [
          "Alguém (em perguntas) / Qualquer um",
          "Todo mundo / Todos",
          "Nada (nenhuma coisa)",
          "Que (ponte curinga p/ tudo)"
        ],
        "correctAnswer": "Todo mundo / Todos",
        "explanation": "\"Everyone\" (\"é-vri-uân\") significa \"Todo mundo / Todos\".",
        "phoneticHint": "\"é-vri-uân\" /ˈev.ri.wʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-mc-2",
        "type": "multiple-choice",
        "visualEmoji": "🏠",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"Anyone\" (pronúncia: \"é-ni-uân\")?",
        "audioPhrase": "Anyone",
        "contextSentence": "Is anyone at home?",
        "contextSentencePt": "Tem alguém em casa?",
        "options": [
          "Nada (nenhuma coisa)",
          "Tudo / Todas as coisas",
          "Alguma coisa (perguntas) / Qualquer coisa",
          "Alguém (em perguntas) / Qualquer um"
        ],
        "correctAnswer": "Alguém (em perguntas) / Qualquer um",
        "explanation": "\"Anyone\" (\"é-ni-uân\") significa \"Alguém (em perguntas) / Qualquer um\".",
        "phoneticHint": "\"é-ni-uân\" /ˈen.i.wʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-mc-3",
        "type": "multiple-choice",
        "visualEmoji": "🍞",
        "prompt": "✅ Múltipla escolha: qual é a tradução de \"That (que)\" (pronúncia: \"dét\")?",
        "audioPhrase": "That (que)",
        "contextSentence": "The bread that I bought is warm.",
        "contextSentencePt": "O pão que eu comprei está quentinho.",
        "options": [
          "Que (ponte curinga p/ tudo)",
          "Tudo / Todas as coisas",
          "Que / O qual (ponte p/ coisas)",
          "Algo / Alguma coisa"
        ],
        "correctAnswer": "Que (ponte curinga p/ tudo)",
        "explanation": "\"That (que)\" (\"dét\") significa \"Que (ponte curinga p/ tudo)\".",
        "phoneticHint": "\"dét\" /ðæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-fill-1",
        "type": "fill-blank",
        "visualEmoji": "🌟",
        "prompt": "✍️ Complete a frase em inglês (\"Tudo está limpo agora.\"):",
        "contextSentence": "______ is clean now.",
        "contextSentencePt": "Tradução: \"Tudo está limpo agora.\"",
        "audioPhrase": "Everything is clean now.",
        "options": [
          "Anyone",
          "Nothing",
          "Where (onde)",
          "Everything"
        ],
        "correctAnswer": "Everything",
        "explanation": "Frase completa: \"Everything is clean now.\" (Tudo está limpo agora.) — Everything (\"é-vri-thing\") = Tudo / Todas as coisas.",
        "phoneticHint": "\"é-vri-thing\" /ˈev.ri.θɪŋ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p24-fill-2",
        "type": "fill-blank",
        "visualEmoji": "🥤",
        "prompt": "✍️ Complete a frase em inglês (\"Você quer alguma coisa para beber?\"):",
        "contextSentence": "Do you want ______ to drink?",
        "contextSentencePt": "Tradução: \"Você quer alguma coisa para beber?\"",
        "audioPhrase": "Do you want anything to drink?",
        "options": [
          "Nothing",
          "Anyone",
          "Anything",
          "That (que)"
        ],
        "correctAnswer": "Anything",
        "explanation": "Frase completa: \"Do you want anything to drink?\" (Você quer alguma coisa para beber?) — Anything (\"é-ni-thing\") = Alguma coisa (perguntas) / Qualquer coisa.",
        "phoneticHint": "\"é-ni-thing\" /ˈen.i.θɪŋ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p24-fill-3",
        "type": "fill-blank",
        "visualEmoji": "🏡",
        "prompt": "✍️ Complete a frase em inglês (\"A casa onde eu moro.\"):",
        "contextSentence": "The house where I live. (______)",
        "contextSentencePt": "Tradução: \"A casa onde eu moro.\"",
        "audioPhrase": "The house where I live.",
        "options": [
          "Where (onde)",
          "Nobody",
          "Anything",
          "Nothing"
        ],
        "correctAnswer": "Where (onde)",
        "explanation": "Frase completa: \"The house where I live.\" (A casa onde eu moro.) — Where (onde) (\"uér\") = Onde (ponte p/ lugares).",
        "phoneticHint": "\"uér\" /wer/",
        "skillCategory": "reading"
      }
    ]
  }
];
