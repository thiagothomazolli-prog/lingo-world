import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = [
  {
    "id": "w0-p1",
    "worldId": 0,
    "phaseNumber": 1,
    "title": "Rodada 1 • Alimentos I: Frutas do Dia a Dia",
    "subtitle": "Passo 1/5 da Rodada 1 • Frutas mais conhecidas no Brasil",
    "pedagogicalObjective": "Reconhecer pelo som as frutas mais comuns do cotidiano brasileiro (inteiras ou abertas ao meio conforme mais conhecidas).",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Começamos a Rodada 1 com as frutas mais comuns no Brasil: Maçã, Banana, Laranja, Morango, Uva, Melancia, Abacaxi, Manga e Mamão.",
      "Frutas mais conhecidas inteiras (como Maçã, Banana, Morango, Uva, Abacaxi, Manga, Pera) aparecem inteiras; já frutas conhecidas abertas (como Mamão, Melancia, Maracujá, Abacate e Kiwi) mostram seu interior característico.",
      "Ao final desta rodada (após Alimentos, Animais, Casa e Roupas), você fará uma prática especial com palavras simples!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p1-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Lime",
            "emoji": "🟢",
            "label": "Lime",
            "translationPt": "Limão verde (Taiti)"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Blackberry",
            "emoji": "⚫",
            "label": "Blackberry",
            "translationPt": "Amora"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão siciliano"
          }
        ],
        "options": [
          "Lime",
          "Apple",
          "Blackberry",
          "Lemon"
        ],
        "correctAnswer": "Apple",
        "explanation": "Exemplo prático: \"I eat a fresh red apple every morning.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Banana",
        "visualEmoji": "🍌",
        "visualOptions": [
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          },
          {
            "text": "Tangerine",
            "emoji": "🍊",
            "label": "Tangerine",
            "translationPt": "Tangerina / Mexerica"
          },
          {
            "text": "Fig",
            "emoji": "🟤",
            "label": "Fig",
            "translationPt": "Figo"
          }
        ],
        "options": [
          "Banana",
          "Kiwi",
          "Tangerine",
          "Fig"
        ],
        "correctAnswer": "Banana",
        "explanation": "Exemplo prático: \"Bananas are rich in potassium.\"",
        "phoneticHint": "/bəˈnæn.ə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Orange",
        "visualEmoji": "🍊",
        "visualOptions": [
          {
            "text": "Jabuticaba",
            "emoji": "⚫",
            "label": "Jabuticaba",
            "translationPt": "Jabuticaba"
          },
          {
            "text": "Guava",
            "emoji": "🩷",
            "label": "Guava",
            "translationPt": "Goiaba"
          },
          {
            "text": "Jackfruit",
            "emoji": "🟢",
            "label": "Jackfruit",
            "translationPt": "Jaca"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          }
        ],
        "options": [
          "Jabuticaba",
          "Guava",
          "Jackfruit",
          "Orange"
        ],
        "correctAnswer": "Orange",
        "explanation": "Exemplo prático: \"Fresh orange juice has lots of vitamin C.\"",
        "phoneticHint": "/ˈɔːr.ɪndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Strawberry",
        "visualEmoji": "🍓",
        "visualOptions": [
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Passion Fruit",
            "emoji": "💛",
            "label": "Passion Fruit",
            "translationPt": "Maracujá"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Starfruit",
            "emoji": "⭐",
            "label": "Starfruit",
            "translationPt": "Carambola"
          }
        ],
        "options": [
          "Papaya",
          "Passion Fruit",
          "Strawberry",
          "Starfruit"
        ],
        "correctAnswer": "Strawberry",
        "explanation": "Exemplo prático: \"She loves sweet red strawberries.\"",
        "phoneticHint": "/ˈstrɔː.ber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Grape",
        "visualEmoji": "🍇",
        "visualOptions": [
          {
            "text": "Cashew",
            "emoji": "🧡",
            "label": "Cashew",
            "translationPt": "Caju"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Coconut",
            "emoji": "🥥",
            "label": "Coconut",
            "translationPt": "Coco"
          },
          {
            "text": "Cherry",
            "emoji": "🍒",
            "label": "Cherry",
            "translationPt": "Cereja"
          }
        ],
        "options": [
          "Cashew",
          "Grape",
          "Coconut",
          "Cherry"
        ],
        "correctAnswer": "Grape",
        "explanation": "Exemplo prático: \"Purple grapes grow on vines.\"",
        "phoneticHint": "/ɡreɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Watermelon",
        "visualEmoji": "🍉",
        "visualOptions": [
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          },
          {
            "text": "Pear",
            "emoji": "🍐",
            "label": "Pear",
            "translationPt": "Pera"
          },
          {
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          },
          {
            "text": "Plum",
            "emoji": "🟣",
            "label": "Plum",
            "translationPt": "Ameixa"
          }
        ],
        "options": [
          "Watermelon",
          "Pear",
          "Peach",
          "Plum"
        ],
        "correctAnswer": "Watermelon",
        "explanation": "Exemplo prático: \"Cold watermelon is great in the summer.\"",
        "phoneticHint": "/ˈwɔː.tərˌmel.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pineapple",
        "visualEmoji": "🍍",
        "visualOptions": [
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Persimmon",
            "emoji": "🟠",
            "label": "Persimmon",
            "translationPt": "Caqui"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          }
        ],
        "options": [
          "Banana",
          "Orange",
          "Persimmon",
          "Pineapple"
        ],
        "correctAnswer": "Pineapple",
        "explanation": "Exemplo prático: \"Pineapple is a juicy tropical fruit.\"",
        "phoneticHint": "/ˈpaɪnˌæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mango",
        "visualEmoji": "🥭",
        "visualOptions": [
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate"
          },
          {
            "text": "Acai",
            "emoji": "🟣",
            "label": "Acai",
            "translationPt": "Açaí"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Mango",
          "Avocado",
          "Acai",
          "Apple"
        ],
        "correctAnswer": "Mango",
        "explanation": "Exemplo prático: \"This ripe mango is very sweet.\"",
        "phoneticHint": "/ˈmæŋ.ɡoʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Papaya",
        "visualEmoji": "🧡",
        "visualOptions": [
          {
            "text": "Melon",
            "emoji": "🍈",
            "label": "Melon",
            "translationPt": "Melão"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          }
        ],
        "options": [
          "Melon",
          "Papaya",
          "Strawberry",
          "Grape"
        ],
        "correctAnswer": "Papaya",
        "explanation": "Exemplo prático: \"Papaya is very popular for breakfast in Brazil.\"",
        "phoneticHint": "/pəˈpaɪ.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lemon",
        "visualEmoji": "🍋",
        "visualOptions": [
          {
            "text": "Starfruit",
            "emoji": "⭐",
            "label": "Starfruit",
            "translationPt": "Carambola"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão siciliano"
          },
          {
            "text": "Passion Fruit",
            "emoji": "💛",
            "label": "Passion Fruit",
            "translationPt": "Maracujá"
          }
        ],
        "options": [
          "Starfruit",
          "Watermelon",
          "Lemon",
          "Passion Fruit"
        ],
        "correctAnswer": "Lemon",
        "explanation": "Exemplo prático: \"Yellow lemon tastes sour and refreshing.\"",
        "phoneticHint": "/ˈlem.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Lime",
        "visualEmoji": "🟢",
        "visualOptions": [
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Fig",
            "emoji": "🟤",
            "label": "Fig",
            "translationPt": "Figo"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Lime",
            "emoji": "🟢",
            "label": "Lime",
            "translationPt": "Limão verde (Taiti)"
          }
        ],
        "options": [
          "Orange",
          "Fig",
          "Pineapple",
          "Lime"
        ],
        "correctAnswer": "Lime",
        "explanation": "Exemplo prático: \"Squeeze fresh green lime over the food.\"",
        "phoneticHint": "/laɪm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tangerine",
        "visualEmoji": "🍊",
        "visualOptions": [
          {
            "text": "Tangerine",
            "emoji": "🍊",
            "label": "Tangerine",
            "translationPt": "Tangerina / Mexerica"
          },
          {
            "text": "Blackberry",
            "emoji": "⚫",
            "label": "Blackberry",
            "translationPt": "Amora"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          }
        ],
        "options": [
          "Tangerine",
          "Blackberry",
          "Banana",
          "Mango"
        ],
        "correctAnswer": "Tangerine",
        "explanation": "Exemplo prático: \"Tangerines are easy to peel.\"",
        "phoneticHint": "/ˈtæn.dʒə.riːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Guava",
        "visualEmoji": "🩷",
        "visualOptions": [
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          },
          {
            "text": "Guava",
            "emoji": "🩷",
            "label": "Guava",
            "translationPt": "Goiaba"
          },
          {
            "text": "Cherry",
            "emoji": "🍒",
            "label": "Cherry",
            "translationPt": "Cereja"
          },
          {
            "text": "Coconut",
            "emoji": "🥥",
            "label": "Coconut",
            "translationPt": "Coco"
          }
        ],
        "options": [
          "Kiwi",
          "Guava",
          "Cherry",
          "Coconut"
        ],
        "correctAnswer": "Guava",
        "explanation": "Exemplo prático: \"Red guava is very common in Brazil.\"",
        "phoneticHint": "/ˈɡwɑː.və/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Passion Fruit",
        "visualEmoji": "💛",
        "visualOptions": [
          {
            "text": "Acai",
            "emoji": "🟣",
            "label": "Acai",
            "translationPt": "Açaí"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Passion Fruit",
            "emoji": "💛",
            "label": "Passion Fruit",
            "translationPt": "Maracujá"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          }
        ],
        "options": [
          "Acai",
          "Apple",
          "Passion Fruit",
          "Watermelon"
        ],
        "correctAnswer": "Passion Fruit",
        "explanation": "Exemplo prático: \"Passion fruit juice is very relaxing.\"",
        "phoneticHint": "/ˈpæʃ.ən fruːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Melon",
        "visualEmoji": "🍈",
        "visualOptions": [
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Melon",
            "emoji": "🍈",
            "label": "Melon",
            "translationPt": "Melão"
          }
        ],
        "options": [
          "Papaya",
          "Peach",
          "Pineapple",
          "Melon"
        ],
        "correctAnswer": "Melon",
        "explanation": "Exemplo prático: \"Sweet yellow melon is refreshing.\"",
        "phoneticHint": "/ˈmel.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Avocado",
        "visualEmoji": "🥑",
        "visualOptions": [
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate"
          },
          {
            "text": "Plum",
            "emoji": "🟣",
            "label": "Plum",
            "translationPt": "Ameixa"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Cashew",
            "emoji": "🧡",
            "label": "Cashew",
            "translationPt": "Caju"
          }
        ],
        "options": [
          "Avocado",
          "Plum",
          "Strawberry",
          "Cashew"
        ],
        "correctAnswer": "Avocado",
        "explanation": "Exemplo prático: \"Avocado is creamy and nutritious.\"",
        "phoneticHint": "/ˌæv.əˈkɑː.doʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Coconut",
        "visualEmoji": "🥥",
        "visualOptions": [
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão siciliano"
          },
          {
            "text": "Persimmon",
            "emoji": "🟠",
            "label": "Persimmon",
            "translationPt": "Caqui"
          },
          {
            "text": "Coconut",
            "emoji": "🥥",
            "label": "Coconut",
            "translationPt": "Coco"
          },
          {
            "text": "Lime",
            "emoji": "🟢",
            "label": "Lime",
            "translationPt": "Limão verde (Taiti)"
          }
        ],
        "options": [
          "Lemon",
          "Persimmon",
          "Coconut",
          "Lime"
        ],
        "correctAnswer": "Coconut",
        "explanation": "Exemplo prático: \"We drank fresh coconut water at the beach.\"",
        "phoneticHint": "/ˈkoʊ.kə.nʌt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pear",
        "visualEmoji": "🍐",
        "visualOptions": [
          {
            "text": "Pear",
            "emoji": "🍐",
            "label": "Pear",
            "translationPt": "Pera"
          },
          {
            "text": "Jabuticaba",
            "emoji": "⚫",
            "label": "Jabuticaba",
            "translationPt": "Jabuticaba"
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          },
          {
            "text": "Jackfruit",
            "emoji": "🟢",
            "label": "Jackfruit",
            "translationPt": "Jaca"
          }
        ],
        "options": [
          "Pear",
          "Jabuticaba",
          "Mango",
          "Jackfruit"
        ],
        "correctAnswer": "Pear",
        "explanation": "Exemplo prático: \"The green pear is sweet and soft.\"",
        "phoneticHint": "/per/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Peach",
        "visualEmoji": "🍑",
        "visualOptions": [
          {
            "text": "Tangerine",
            "emoji": "🍊",
            "label": "Tangerine",
            "translationPt": "Tangerina / Mexerica"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Melon",
            "emoji": "🍈",
            "label": "Melon",
            "translationPt": "Melão"
          },
          {
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          }
        ],
        "options": [
          "Tangerine",
          "Grape",
          "Melon",
          "Peach"
        ],
        "correctAnswer": "Peach",
        "explanation": "Exemplo prático: \"A ripe peach has soft skin.\"",
        "phoneticHint": "/piːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kiwi",
        "visualEmoji": "🥝",
        "visualOptions": [
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          },
          {
            "text": "Guava",
            "emoji": "🩷",
            "label": "Guava",
            "translationPt": "Goiaba"
          }
        ],
        "options": [
          "Avocado",
          "Apple",
          "Kiwi",
          "Guava"
        ],
        "correctAnswer": "Kiwi",
        "explanation": "Exemplo prático: \"Kiwi has bright green flesh inside.\"",
        "phoneticHint": "/ˈkiː.wiː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Plum",
        "visualEmoji": "🟣",
        "visualOptions": [
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Plum",
            "emoji": "🟣",
            "label": "Plum",
            "translationPt": "Ameixa"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Starfruit",
            "emoji": "⭐",
            "label": "Starfruit",
            "translationPt": "Carambola"
          }
        ],
        "options": [
          "Pineapple",
          "Plum",
          "Strawberry",
          "Starfruit"
        ],
        "correctAnswer": "Plum",
        "explanation": "Exemplo prático: \"She picked a ripe purple plum.\"",
        "phoneticHint": "/plʌm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cherry",
        "visualEmoji": "🍒",
        "visualOptions": [
          {
            "text": "Cherry",
            "emoji": "🍒",
            "label": "Cherry",
            "translationPt": "Cereja"
          },
          {
            "text": "Pear",
            "emoji": "🍐",
            "label": "Pear",
            "translationPt": "Pera"
          },
          {
            "text": "Fig",
            "emoji": "🟤",
            "label": "Fig",
            "translationPt": "Figo"
          },
          {
            "text": "Coconut",
            "emoji": "🥥",
            "label": "Coconut",
            "translationPt": "Coco"
          }
        ],
        "options": [
          "Cherry",
          "Pear",
          "Fig",
          "Coconut"
        ],
        "correctAnswer": "Cherry",
        "explanation": "Exemplo prático: \"He put a red cherry on top of the cake.\"",
        "phoneticHint": "/ˈtʃer.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cashew",
        "visualEmoji": "🧡",
        "visualOptions": [
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão siciliano"
          },
          {
            "text": "Lime",
            "emoji": "🟢",
            "label": "Lime",
            "translationPt": "Limão verde (Taiti)"
          },
          {
            "text": "Cashew",
            "emoji": "🧡",
            "label": "Cashew",
            "translationPt": "Caju"
          }
        ],
        "options": [
          "Orange",
          "Lemon",
          "Lime",
          "Cashew"
        ],
        "correctAnswer": "Cashew",
        "explanation": "Exemplo prático: \"Cashew fruit is native to Brazil.\"",
        "phoneticHint": "/ˈkæʃ.uː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Acai",
        "visualEmoji": "🟣",
        "visualOptions": [
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Blackberry",
            "emoji": "⚫",
            "label": "Blackberry",
            "translationPt": "Amora"
          },
          {
            "text": "Acai",
            "emoji": "🟣",
            "label": "Acai",
            "translationPt": "Açaí"
          },
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          }
        ],
        "options": [
          "Banana",
          "Blackberry",
          "Acai",
          "Kiwi"
        ],
        "correctAnswer": "Acai",
        "explanation": "Exemplo prático: \"Cold acai bowl is a Brazilian favorite.\"",
        "phoneticHint": "/ˌɑː.sɑːˈiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Jabuticaba",
        "visualEmoji": "⚫",
        "visualOptions": [
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Jabuticaba",
            "emoji": "⚫",
            "label": "Jabuticaba",
            "translationPt": "Jabuticaba"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          },
          {
            "text": "Tangerine",
            "emoji": "🍊",
            "label": "Tangerine",
            "translationPt": "Tangerina / Mexerica"
          }
        ],
        "options": [
          "Papaya",
          "Jabuticaba",
          "Watermelon",
          "Tangerine"
        ],
        "correctAnswer": "Jabuticaba",
        "explanation": "Exemplo prático: \"Jabuticaba is a sweet dark Brazilian fruit.\"",
        "phoneticHint": "/ˌʒɑː.buː.tɪˈkɑː.bə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Persimmon",
        "visualEmoji": "🟠",
        "visualOptions": [
          {
            "text": "Persimmon",
            "emoji": "🟠",
            "label": "Persimmon",
            "translationPt": "Caqui"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Guava",
            "emoji": "🩷",
            "label": "Guava",
            "translationPt": "Goiaba"
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate"
          }
        ],
        "options": [
          "Persimmon",
          "Grape",
          "Guava",
          "Avocado"
        ],
        "correctAnswer": "Persimmon",
        "explanation": "Exemplo prático: \"Ripe persimmon is very sweet.\"",
        "phoneticHint": "/pərˈsɪm.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Starfruit",
        "visualEmoji": "⭐",
        "visualOptions": [
          {
            "text": "Passion Fruit",
            "emoji": "💛",
            "label": "Passion Fruit",
            "translationPt": "Maracujá"
          },
          {
            "text": "Pear",
            "emoji": "🍐",
            "label": "Pear",
            "translationPt": "Pera"
          },
          {
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          },
          {
            "text": "Starfruit",
            "emoji": "⭐",
            "label": "Starfruit",
            "translationPt": "Carambola"
          }
        ],
        "options": [
          "Passion Fruit",
          "Pear",
          "Peach",
          "Starfruit"
        ],
        "correctAnswer": "Starfruit",
        "explanation": "Exemplo prático: \"Slices of starfruit look like bright stars.\"",
        "phoneticHint": "/ˈstɑːr.fruːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Blackberry",
        "visualEmoji": "⚫",
        "visualOptions": [
          {
            "text": "Blackberry",
            "emoji": "⚫",
            "label": "Blackberry",
            "translationPt": "Amora"
          },
          {
            "text": "Cashew",
            "emoji": "🧡",
            "label": "Cashew",
            "translationPt": "Caju"
          },
          {
            "text": "Plum",
            "emoji": "🟣",
            "label": "Plum",
            "translationPt": "Ameixa"
          },
          {
            "text": "Cherry",
            "emoji": "🍒",
            "label": "Cherry",
            "translationPt": "Cereja"
          }
        ],
        "options": [
          "Blackberry",
          "Cashew",
          "Plum",
          "Cherry"
        ],
        "correctAnswer": "Blackberry",
        "explanation": "Exemplo prático: \"Blackberries are dark and sweet.\"",
        "phoneticHint": "/ˈblækˌber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Jackfruit",
        "visualEmoji": "🟢",
        "visualOptions": [
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          },
          {
            "text": "Jackfruit",
            "emoji": "🟢",
            "label": "Jackfruit",
            "translationPt": "Jaca"
          },
          {
            "text": "Jabuticaba",
            "emoji": "⚫",
            "label": "Jabuticaba",
            "translationPt": "Jabuticaba"
          },
          {
            "text": "Melon",
            "emoji": "🍈",
            "label": "Melon",
            "translationPt": "Melão"
          }
        ],
        "options": [
          "Mango",
          "Jackfruit",
          "Jabuticaba",
          "Melon"
        ],
        "correctAnswer": "Jackfruit",
        "explanation": "Exemplo prático: \"Jackfruit is a very large tropical fruit.\"",
        "phoneticHint": "/ˈdʒæk.fruːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fig",
        "visualEmoji": "🟤",
        "visualOptions": [
          {
            "text": "Acai",
            "emoji": "🟣",
            "label": "Acai",
            "translationPt": "Açaí"
          },
          {
            "text": "Persimmon",
            "emoji": "🟠",
            "label": "Persimmon",
            "translationPt": "Caqui"
          },
          {
            "text": "Fig",
            "emoji": "🟤",
            "label": "Fig",
            "translationPt": "Figo"
          },
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          }
        ],
        "options": [
          "Acai",
          "Persimmon",
          "Fig",
          "Kiwi"
        ],
        "correctAnswer": "Fig",
        "explanation": "Exemplo prático: \"Fresh figs are sweet and soft.\"",
        "phoneticHint": "/fɪɡ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p2",
    "worldId": 0,
    "phaseNumber": 2,
    "title": "Rodada 1 • Animais I: Pets, Quintal & Fazenda",
    "subtitle": "Passo 2/5 da Rodada 1 • Os 30 animais mais conhecidos pelas famílias",
    "pedagogicalObjective": "Reconhecer os animais domésticos, pets e bichos da fazenda mais familiares do dia a dia.",
    "type": "lesson",
    "icon": "dog",
    "cefrLevel": "A1",
    "theorySummary": [
      "Agora variamos o tema para você não cansar: saímos de Frutas e entramos nos Animais mais conhecidos no Brasil!",
      "Inclui Cachorro (Dog), Gato (Cat), Pássaro (Bird), Peixe (Fish), Coelho (Rabbit), Cavalo (Horse), Vaca (Cow), Porco (Pig) e Galinha (Chicken).",
      "Todos os animais aparecem inteiros, sem cortes e sem tarjas."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p2-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dog",
        "visualEmoji": "🐕",
        "visualOptions": [
          {
            "text": "Bull",
            "emoji": "🐂",
            "label": "Bull",
            "translationPt": "Touro / Boi"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          },
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          }
        ],
        "options": [
          "Bull",
          "Dog",
          "Hamster",
          "Horse"
        ],
        "correctAnswer": "Dog",
        "explanation": "Exemplo prático: \"The friendly dog wags its tail.\"",
        "phoneticHint": "/dɔːɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cat",
        "visualEmoji": "🐈",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga / Jabuti"
          },
          {
            "text": "Turkey",
            "emoji": "🦃",
            "label": "Turkey",
            "translationPt": "Peru"
          },
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          }
        ],
        "options": [
          "Cat",
          "Turtle",
          "Turkey",
          "Butterfly"
        ],
        "correctAnswer": "Cat",
        "explanation": "Exemplo prático: \"The cute cat walks quietly.\"",
        "phoneticHint": "/kæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bird",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Guinea Pig",
            "emoji": "🐹",
            "label": "Guinea Pig",
            "translationPt": "Porquinho-da-índia"
          },
          {
            "text": "Goat",
            "emoji": "🐐",
            "label": "Goat",
            "translationPt": "Cabra / Bode"
          },
          {
            "text": "Goose",
            "emoji": "🪿",
            "label": "Goose",
            "translationPt": "Ganso"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro / Passarinho"
          }
        ],
        "options": [
          "Guinea Pig",
          "Goat",
          "Goose",
          "Bird"
        ],
        "correctAnswer": "Bird",
        "explanation": "Exemplo prático: \"The little bird sings in the morning.\"",
        "phoneticHint": "/bɜːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fish",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Spider",
            "emoji": "🕷️",
            "label": "Spider",
            "translationPt": "Aranha"
          },
          {
            "text": "Pig",
            "emoji": "🐖",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          }
        ],
        "options": [
          "Fish",
          "Spider",
          "Pig",
          "Sheep"
        ],
        "correctAnswer": "Fish",
        "explanation": "Exemplo prático: \"The orange goldfish swims in the aquarium.\"",
        "phoneticHint": "/fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rabbit",
        "visualEmoji": "🐇",
        "visualOptions": [
          {
            "text": "Frog",
            "emoji": "🐸",
            "label": "Frog",
            "translationPt": "Sapo / Rã"
          },
          {
            "text": "Rabbit",
            "emoji": "🐇",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Chicken",
            "emoji": "🐔",
            "label": "Chicken",
            "translationPt": "Galinha"
          },
          {
            "text": "Cow",
            "emoji": "🐄",
            "label": "Cow",
            "translationPt": "Vaca"
          }
        ],
        "options": [
          "Frog",
          "Rabbit",
          "Chicken",
          "Cow"
        ],
        "correctAnswer": "Rabbit",
        "explanation": "Exemplo prático: \"The white rabbit has long ears.\"",
        "phoneticHint": "/ˈræb.ɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Turtle",
        "visualEmoji": "🐢",
        "visualOptions": [
          {
            "text": "Ladybug",
            "emoji": "🐞",
            "label": "Ladybug",
            "translationPt": "Joaninha"
          },
          {
            "text": "Rooster",
            "emoji": "🐓",
            "label": "Rooster",
            "translationPt": "Galo"
          },
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga / Jabuti"
          },
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Ladybug",
          "Rooster",
          "Turtle",
          "Cat"
        ],
        "correctAnswer": "Turtle",
        "explanation": "Exemplo prático: \"The turtle walks slowly with its shell.\"",
        "phoneticHint": "/ˈtɜːr.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Parrot",
        "visualEmoji": "🦜",
        "visualOptions": [
          {
            "text": "Bee",
            "emoji": "🐝",
            "label": "Bee",
            "translationPt": "Abelha"
          },
          {
            "text": "Chick",
            "emoji": "🐥",
            "label": "Chick",
            "translationPt": "Pintinho"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro / Passarinho"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          }
        ],
        "options": [
          "Bee",
          "Chick",
          "Bird",
          "Parrot"
        ],
        "correctAnswer": "Parrot",
        "explanation": "Exemplo prático: \"The green parrot can repeat words.\"",
        "phoneticHint": "/ˈpær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hamster",
        "visualEmoji": "🐹",
        "visualOptions": [
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          },
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Ant",
            "emoji": "🐜",
            "label": "Ant",
            "translationPt": "Formiga"
          }
        ],
        "options": [
          "Hamster",
          "Pigeon",
          "Fish",
          "Ant"
        ],
        "correctAnswer": "Hamster",
        "explanation": "Exemplo prático: \"The small golden hamster eats seeds.\"",
        "phoneticHint": "/ˈhæm.stər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Guinea Pig",
        "visualEmoji": "🐹",
        "visualOptions": [
          {
            "text": "Mouse",
            "emoji": "🐁",
            "label": "Mouse",
            "translationPt": "Rato / Camundongo"
          },
          {
            "text": "Duck",
            "emoji": "🦆",
            "label": "Duck",
            "translationPt": "Pato"
          },
          {
            "text": "Guinea Pig",
            "emoji": "🐹",
            "label": "Guinea Pig",
            "translationPt": "Porquinho-da-índia"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Mouse",
          "Duck",
          "Guinea Pig",
          "Dog"
        ],
        "correctAnswer": "Guinea Pig",
        "explanation": "Exemplo prático: \"The guinea pig is a gentle pet.\"",
        "phoneticHint": "/ˈɡɪn.i pɪɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Horse",
        "visualEmoji": "🐎",
        "visualOptions": [
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Rabbit",
            "emoji": "🐇",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Donkey",
            "emoji": "🫏",
            "label": "Donkey",
            "translationPt": "Burro / Jegue"
          },
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          }
        ],
        "options": [
          "Horse",
          "Rabbit",
          "Donkey",
          "Sheep"
        ],
        "correctAnswer": "Horse",
        "explanation": "Exemplo prático: \"The brown horse runs across the farm.\"",
        "phoneticHint": "/hɔːrs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cow",
        "visualEmoji": "🐄",
        "visualOptions": [
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Frog",
            "emoji": "🐸",
            "label": "Frog",
            "translationPt": "Sapo / Rã"
          },
          {
            "text": "Ladybug",
            "emoji": "🐞",
            "label": "Ladybug",
            "translationPt": "Joaninha"
          },
          {
            "text": "Cow",
            "emoji": "🐄",
            "label": "Cow",
            "translationPt": "Vaca"
          }
        ],
        "options": [
          "Parrot",
          "Frog",
          "Ladybug",
          "Cow"
        ],
        "correctAnswer": "Cow",
        "explanation": "Exemplo prático: \"The dairy cow gives us fresh milk.\"",
        "phoneticHint": "/kaʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pig",
        "visualEmoji": "🐖",
        "visualOptions": [
          {
            "text": "Pig",
            "emoji": "🐖",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          },
          {
            "text": "Bull",
            "emoji": "🐂",
            "label": "Bull",
            "translationPt": "Touro / Boi"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro / Passarinho"
          }
        ],
        "options": [
          "Pig",
          "Butterfly",
          "Bull",
          "Bird"
        ],
        "correctAnswer": "Pig",
        "explanation": "Exemplo prático: \"The pink pig lives on the farm.\"",
        "phoneticHint": "/pɪɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chicken",
        "visualEmoji": "🐔",
        "visualOptions": [
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Chicken",
            "emoji": "🐔",
            "label": "Chicken",
            "translationPt": "Galinha"
          },
          {
            "text": "Bee",
            "emoji": "🐝",
            "label": "Bee",
            "translationPt": "Abelha"
          }
        ],
        "options": [
          "Hamster",
          "Fish",
          "Chicken",
          "Bee"
        ],
        "correctAnswer": "Chicken",
        "explanation": "Exemplo prático: \"The brown hen lays eggs on the farm.\"",
        "phoneticHint": "/ˈtʃɪk.ɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rooster",
        "visualEmoji": "🐓",
        "visualOptions": [
          {
            "text": "Rooster",
            "emoji": "🐓",
            "label": "Rooster",
            "translationPt": "Galo"
          },
          {
            "text": "Donkey",
            "emoji": "🫏",
            "label": "Donkey",
            "translationPt": "Burro / Jegue"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Ant",
            "emoji": "🐜",
            "label": "Ant",
            "translationPt": "Formiga"
          }
        ],
        "options": [
          "Rooster",
          "Donkey",
          "Dog",
          "Ant"
        ],
        "correctAnswer": "Rooster",
        "explanation": "Exemplo prático: \"The rooster crows early in the morning.\"",
        "phoneticHint": "/ˈruː.stər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chick",
        "visualEmoji": "🐥",
        "visualOptions": [
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Mouse",
            "emoji": "🐁",
            "label": "Mouse",
            "translationPt": "Rato / Camundongo"
          },
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo"
          },
          {
            "text": "Chick",
            "emoji": "🐥",
            "label": "Chick",
            "translationPt": "Pintinho"
          }
        ],
        "options": [
          "Parrot",
          "Mouse",
          "Pigeon",
          "Chick"
        ],
        "correctAnswer": "Chick",
        "explanation": "Exemplo prático: \"The little yellow chick follows the hen.\"",
        "phoneticHint": "/tʃɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Duck",
        "visualEmoji": "🦆",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐄",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Spider",
            "emoji": "🕷️",
            "label": "Spider",
            "translationPt": "Aranha"
          },
          {
            "text": "Duck",
            "emoji": "🦆",
            "label": "Duck",
            "translationPt": "Pato"
          },
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Cow",
          "Spider",
          "Duck",
          "Cat"
        ],
        "correctAnswer": "Duck",
        "explanation": "Exemplo prático: \"The white duck swims in the lake.\"",
        "phoneticHint": "/dʌk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sheep",
        "visualEmoji": "🐑",
        "visualOptions": [
          {
            "text": "Pig",
            "emoji": "🐖",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          },
          {
            "text": "Rabbit",
            "emoji": "🐇",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Chicken",
            "emoji": "🐔",
            "label": "Chicken",
            "translationPt": "Galinha"
          }
        ],
        "options": [
          "Pig",
          "Sheep",
          "Rabbit",
          "Chicken"
        ],
        "correctAnswer": "Sheep",
        "explanation": "Exemplo prático: \"White sheep have soft wool.\"",
        "phoneticHint": "/ʃiːp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Goat",
        "visualEmoji": "🐐",
        "visualOptions": [
          {
            "text": "Goat",
            "emoji": "🐐",
            "label": "Goat",
            "translationPt": "Cabra / Bode"
          },
          {
            "text": "Rooster",
            "emoji": "🐓",
            "label": "Rooster",
            "translationPt": "Galo"
          },
          {
            "text": "Guinea Pig",
            "emoji": "🐹",
            "label": "Guinea Pig",
            "translationPt": "Porquinho-da-índia"
          },
          {
            "text": "Goose",
            "emoji": "🪿",
            "label": "Goose",
            "translationPt": "Ganso"
          }
        ],
        "options": [
          "Goat",
          "Rooster",
          "Guinea Pig",
          "Goose"
        ],
        "correctAnswer": "Goat",
        "explanation": "Exemplo prático: \"The goat climbs rocks on the farm.\"",
        "phoneticHint": "/ɡoʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Donkey",
        "visualEmoji": "🫏",
        "visualOptions": [
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga / Jabuti"
          },
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Chick",
            "emoji": "🐥",
            "label": "Chick",
            "translationPt": "Pintinho"
          },
          {
            "text": "Donkey",
            "emoji": "🫏",
            "label": "Donkey",
            "translationPt": "Burro / Jegue"
          }
        ],
        "options": [
          "Turtle",
          "Horse",
          "Chick",
          "Donkey"
        ],
        "correctAnswer": "Donkey",
        "explanation": "Exemplo prático: \"The gray donkey has long ears.\"",
        "phoneticHint": "/ˈdɑːŋ.ki/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bull",
        "visualEmoji": "🐂",
        "visualOptions": [
          {
            "text": "Bull",
            "emoji": "🐂",
            "label": "Bull",
            "translationPt": "Touro / Boi"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Ant",
            "emoji": "🐜",
            "label": "Ant",
            "translationPt": "Formiga"
          },
          {
            "text": "Duck",
            "emoji": "🦆",
            "label": "Duck",
            "translationPt": "Pato"
          }
        ],
        "options": [
          "Bull",
          "Dog",
          "Ant",
          "Duck"
        ],
        "correctAnswer": "Bull",
        "explanation": "Exemplo prático: \"The strong bull has two horns.\"",
        "phoneticHint": "/bʊl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Turkey",
        "visualEmoji": "🦃",
        "visualOptions": [
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          },
          {
            "text": "Turkey",
            "emoji": "🦃",
            "label": "Turkey",
            "translationPt": "Peru"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Spider",
            "emoji": "🕷️",
            "label": "Spider",
            "translationPt": "Aranha"
          }
        ],
        "options": [
          "Sheep",
          "Turkey",
          "Parrot",
          "Spider"
        ],
        "correctAnswer": "Turkey",
        "explanation": "Exemplo prático: \"The turkey opens its fan tail.\"",
        "phoneticHint": "/ˈtɜːr.ki/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Goose",
        "visualEmoji": "🪿",
        "visualOptions": [
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Goat",
            "emoji": "🐐",
            "label": "Goat",
            "translationPt": "Cabra / Bode"
          },
          {
            "text": "Goose",
            "emoji": "🪿",
            "label": "Goose",
            "translationPt": "Ganso"
          },
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Fish",
          "Goat",
          "Goose",
          "Cat"
        ],
        "correctAnswer": "Goose",
        "explanation": "Exemplo prático: \"The white goose has a long neck.\"",
        "phoneticHint": "/ɡuːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mouse",
        "visualEmoji": "🐁",
        "visualOptions": [
          {
            "text": "Rabbit",
            "emoji": "🐇",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Rooster",
            "emoji": "🐓",
            "label": "Rooster",
            "translationPt": "Galo"
          },
          {
            "text": "Ladybug",
            "emoji": "🐞",
            "label": "Ladybug",
            "translationPt": "Joaninha"
          },
          {
            "text": "Mouse",
            "emoji": "🐁",
            "label": "Mouse",
            "translationPt": "Rato / Camundongo"
          }
        ],
        "options": [
          "Rabbit",
          "Rooster",
          "Ladybug",
          "Mouse"
        ],
        "correctAnswer": "Mouse",
        "explanation": "Exemplo prático: \"The small mouse loves cheese.\"",
        "phoneticHint": "/maʊs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pigeon",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo"
          },
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro / Passarinho"
          },
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          }
        ],
        "options": [
          "Pigeon",
          "Horse",
          "Bird",
          "Hamster"
        ],
        "correctAnswer": "Pigeon",
        "explanation": "Exemplo prático: \"Pigeons walk in the city square.\"",
        "phoneticHint": "/ˈpɪdʒ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Frog",
        "visualEmoji": "🐸",
        "visualOptions": [
          {
            "text": "Turkey",
            "emoji": "🦃",
            "label": "Turkey",
            "translationPt": "Peru"
          },
          {
            "text": "Frog",
            "emoji": "🐸",
            "label": "Frog",
            "translationPt": "Sapo / Rã"
          },
          {
            "text": "Bull",
            "emoji": "🐂",
            "label": "Bull",
            "translationPt": "Touro / Boi"
          },
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga / Jabuti"
          }
        ],
        "options": [
          "Turkey",
          "Frog",
          "Bull",
          "Turtle"
        ],
        "correctAnswer": "Frog",
        "explanation": "Exemplo prático: \"The green frog jumps high.\"",
        "phoneticHint": "/frɔːɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Butterfly",
        "visualEmoji": "🦋",
        "visualOptions": [
          {
            "text": "Goat",
            "emoji": "🐐",
            "label": "Goat",
            "translationPt": "Cabra / Bode"
          },
          {
            "text": "Guinea Pig",
            "emoji": "🐹",
            "label": "Guinea Pig",
            "translationPt": "Porquinho-da-índia"
          },
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          },
          {
            "text": "Goose",
            "emoji": "🪿",
            "label": "Goose",
            "translationPt": "Ganso"
          }
        ],
        "options": [
          "Goat",
          "Guinea Pig",
          "Butterfly",
          "Goose"
        ],
        "correctAnswer": "Butterfly",
        "explanation": "Exemplo prático: \"A colorful butterfly lands on a flower.\"",
        "phoneticHint": "/ˈbʌt.ər.flaɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bee",
        "visualEmoji": "🐝",
        "visualOptions": [
          {
            "text": "Mouse",
            "emoji": "🐁",
            "label": "Mouse",
            "translationPt": "Rato / Camundongo"
          },
          {
            "text": "Duck",
            "emoji": "🦆",
            "label": "Duck",
            "translationPt": "Pato"
          },
          {
            "text": "Pig",
            "emoji": "🐖",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Bee",
            "emoji": "🐝",
            "label": "Bee",
            "translationPt": "Abelha"
          }
        ],
        "options": [
          "Mouse",
          "Duck",
          "Pig",
          "Bee"
        ],
        "correctAnswer": "Bee",
        "explanation": "Exemplo prático: \"Honeybees make golden honey.\"",
        "phoneticHint": "/biː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ant",
        "visualEmoji": "🐜",
        "visualOptions": [
          {
            "text": "Ant",
            "emoji": "🐜",
            "label": "Ant",
            "translationPt": "Formiga"
          },
          {
            "text": "Chick",
            "emoji": "🐥",
            "label": "Chick",
            "translationPt": "Pintinho"
          },
          {
            "text": "Chicken",
            "emoji": "🐔",
            "label": "Chicken",
            "translationPt": "Galinha"
          },
          {
            "text": "Cow",
            "emoji": "🐄",
            "label": "Cow",
            "translationPt": "Vaca"
          }
        ],
        "options": [
          "Ant",
          "Chick",
          "Chicken",
          "Cow"
        ],
        "correctAnswer": "Ant",
        "explanation": "Exemplo prático: \"Small ants carry leaves together.\"",
        "phoneticHint": "/ænt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ladybug",
        "visualEmoji": "🐞",
        "visualOptions": [
          {
            "text": "Frog",
            "emoji": "🐸",
            "label": "Frog",
            "translationPt": "Sapo / Rã"
          },
          {
            "text": "Donkey",
            "emoji": "🫏",
            "label": "Donkey",
            "translationPt": "Burro / Jegue"
          },
          {
            "text": "Ladybug",
            "emoji": "🐞",
            "label": "Ladybug",
            "translationPt": "Joaninha"
          },
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo"
          }
        ],
        "options": [
          "Frog",
          "Donkey",
          "Ladybug",
          "Pigeon"
        ],
        "correctAnswer": "Ladybug",
        "explanation": "Exemplo prático: \"A red ladybug with black spots.\"",
        "phoneticHint": "/ˈleɪ.di.bʌɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Spider",
        "visualEmoji": "🕷️",
        "visualOptions": [
          {
            "text": "Spider",
            "emoji": "🕷️",
            "label": "Spider",
            "translationPt": "Aranha"
          },
          {
            "text": "Turkey",
            "emoji": "🦃",
            "label": "Turkey",
            "translationPt": "Peru"
          },
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          },
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          }
        ],
        "options": [
          "Spider",
          "Turkey",
          "Butterfly",
          "Hamster"
        ],
        "correctAnswer": "Spider",
        "explanation": "Exemplo prático: \"The spider builds a web in the garden.\"",
        "phoneticHint": "/ˈspaɪ.dər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p3",
    "worldId": 0,
    "phaseNumber": 3,
    "title": "Rodada 1 • Casa & Objetos I: Móveis & Quarto",
    "subtitle": "Passo 3/5 da Rodada 1 • Os 30 móveis e objetos mais comuns da casa",
    "pedagogicalObjective": "Reconhecer os móveis e objetos essenciais de casa em fotos inteiras sobre fundo branco.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 3º passo da Rodada 1 aprendemos os móveis e objetos mais básicos de qualquer casa: Cama (Bed), Cadeira (Chair), Mesa (Table), Sofá (Sofa) e Travesseiro (Pillow).",
      "Cada objeto aparece inteiro e centralizado sobre fundo branco.",
      "Continue firme para chegar à Prática da Rodada 1!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p3-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          }
        ],
        "options": [
          "Blanket",
          "Bed",
          "Broom",
          "Bookshelf"
        ],
        "correctAnswer": "Bed",
        "explanation": "Exemplo prático: \"I sleep in a comfortable bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Chair",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão (TV)"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          }
        ],
        "options": [
          "Towel",
          "Television",
          "Chair",
          "Toothbrush"
        ],
        "correctAnswer": "Chair",
        "explanation": "Exemplo prático: \"Please sit down on this wooden chair.\"",
        "phoneticHint": "/tʃer/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Table",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Air Conditioner",
          "Window",
          "Door",
          "Table"
        ],
        "correctAnswer": "Table",
        "explanation": "Exemplo prático: \"Dinner is served on the wooden table.\"",
        "phoneticHint": "/ˈteɪ.bəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sofa",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          }
        ],
        "options": [
          "Sofa",
          "Plant Pot",
          "Soap",
          "Shower"
        ],
        "correctAnswer": "Sofa",
        "explanation": "Exemplo prático: \"The family sits together on the living room sofa.\"",
        "phoneticHint": "/ˈsoʊ.fə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pillow",
        "visualEmoji": "⬜",
        "visualOptions": [
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador"
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio / Despertador"
          }
        ],
        "options": [
          "Fan",
          "Curtain",
          "Pillow",
          "Clock"
        ],
        "correctAnswer": "Pillow",
        "explanation": "Exemplo prático: \"I rest my head on a soft white pillow.\"",
        "phoneticHint": "/ˈpɪl.oʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Blanket",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          }
        ],
        "options": [
          "Blanket",
          "Lamp",
          "Rug",
          "Chair"
        ],
        "correctAnswer": "Blanket",
        "explanation": "Exemplo prático: \"A warm folded blanket for cold nights.\"",
        "phoneticHint": "/ˈblæŋ.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          }
        ],
        "options": [
          "Bed",
          "Mirror",
          "Bucket",
          "Door"
        ],
        "correctAnswer": "Door",
        "explanation": "Exemplo prático: \"Please close the wooden door.\"",
        "phoneticHint": "/dɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Window",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          }
        ],
        "options": [
          "Table",
          "Toothpaste",
          "Window",
          "Wardrobe"
        ],
        "correctAnswer": "Window",
        "explanation": "Exemplo prático: \"Open the house window to let fresh air in.\"",
        "phoneticHint": "/ˈwɪn.doʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Key",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          },
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          }
        ],
        "options": [
          "Trash Can",
          "Key",
          "Toilet",
          "Toilet Paper"
        ],
        "correctAnswer": "Key",
        "explanation": "Exemplo prático: \"Keep your house key in your pocket.\"",
        "phoneticHint": "/kiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Television",
        "visualEmoji": "📺",
        "visualOptions": [
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão (TV)"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          }
        ],
        "options": [
          "Television",
          "Sofa",
          "Pillow",
          "Shower"
        ],
        "correctAnswer": "Television",
        "explanation": "Exemplo prático: \"We watch movies on the flat-screen television.\"",
        "phoneticHint": "/ˈtel.ə.vɪʒ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador"
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária"
          }
        ],
        "options": [
          "Fan",
          "Curtain",
          "Chair",
          "Lamp"
        ],
        "correctAnswer": "Lamp",
        "explanation": "Exemplo prático: \"Turn on the bedside table lamp.\"",
        "phoneticHint": "/læmp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          }
        ],
        "options": [
          "Blanket",
          "Bookshelf",
          "Mirror",
          "Bed"
        ],
        "correctAnswer": "Mirror",
        "explanation": "Exemplo prático: \"She looked in the framed mirror.\"",
        "phoneticHint": "/ˈmɪr.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Clock",
        "visualEmoji": "⏰",
        "visualOptions": [
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio / Despertador"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          }
        ],
        "options": [
          "Bucket",
          "Clock",
          "Key",
          "Broom"
        ],
        "correctAnswer": "Clock",
        "explanation": "Exemplo prático: \"Look at the round wall clock to check the time.\"",
        "phoneticHint": "/klɑːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wardrobe",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          }
        ],
        "options": [
          "Wardrobe",
          "Door",
          "Air Conditioner",
          "Window"
        ],
        "correctAnswer": "Wardrobe",
        "explanation": "Exemplo prático: \"Hang your clothes inside the wooden wardrobe.\"",
        "phoneticHint": "/ˈwɔːr.droʊb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Rug",
        "visualEmoji": "🟥",
        "visualOptions": [
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete"
          }
        ],
        "options": [
          "Pillow",
          "Plant Pot",
          "Table",
          "Rug"
        ],
        "correctAnswer": "Rug",
        "explanation": "Exemplo prático: \"A soft woven rug on the floor.\"",
        "phoneticHint": "/rʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Curtain",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá"
          }
        ],
        "options": [
          "Curtain",
          "Soap",
          "Mirror",
          "Sofa"
        ],
        "correctAnswer": "Curtain",
        "explanation": "Exemplo prático: \"Close the window curtains at night.\"",
        "phoneticHint": "/ˈkɜːr.tən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bookshelf",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão (TV)"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio / Despertador"
          }
        ],
        "options": [
          "Lamp",
          "Bookshelf",
          "Television",
          "Clock"
        ],
        "correctAnswer": "Bookshelf",
        "explanation": "Exemplo prático: \"The wooden bookshelf holds many books.\"",
        "phoneticHint": "/ˈbʊk.ʃelf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fan",
        "visualEmoji": "🌀",
        "visualOptions": [
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador"
          },
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          }
        ],
        "options": [
          "Toothbrush",
          "Wardrobe",
          "Fan",
          "Toothpaste"
        ],
        "correctAnswer": "Fan",
        "explanation": "Exemplo prático: \"Turn on the electric fan on hot days.\"",
        "phoneticHint": "/fæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Air Conditioner",
        "visualEmoji": "❄️",
        "visualOptions": [
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira"
          },
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          },
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado"
          }
        ],
        "options": [
          "Toilet Paper",
          "Trash Can",
          "Toilet",
          "Air Conditioner"
        ],
        "correctAnswer": "Air Conditioner",
        "explanation": "Exemplo prático: \"The wall air conditioner cools the bedroom.\"",
        "phoneticHint": "/ˈer kənˌdɪʃ.ən.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Shower",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          }
        ],
        "options": [
          "Shower",
          "Door",
          "Rug",
          "Key"
        ],
        "correctAnswer": "Shower",
        "explanation": "Exemplo prático: \"Take a warm shower in the bathroom.\"",
        "phoneticHint": "/ˈʃaʊ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Towel",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          }
        ],
        "options": [
          "Sofa",
          "Plant Pot",
          "Towel",
          "Pillow"
        ],
        "correctAnswer": "Towel",
        "explanation": "Exemplo prático: \"Dry your hands with a clean cotton towel.\"",
        "phoneticHint": "/ˈtaʊ.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soap",
        "visualEmoji": "🧼",
        "visualOptions": [
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio / Despertador"
          }
        ],
        "options": [
          "Chair",
          "Fan",
          "Soap",
          "Clock"
        ],
        "correctAnswer": "Soap",
        "explanation": "Exemplo prático: \"Wash your hands with a bar of soap.\"",
        "phoneticHint": "/soʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toothbrush",
        "visualEmoji": "🪥",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          }
        ],
        "options": [
          "Curtain",
          "Mirror",
          "Lamp",
          "Toothbrush"
        ],
        "correctAnswer": "Toothbrush",
        "explanation": "Exemplo prático: \"Brush your teeth with a toothbrush after meals.\"",
        "phoneticHint": "/ˈtuːθ.brʌʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Toothpaste",
        "visualEmoji": "🪥",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          }
        ],
        "options": [
          "Toothpaste",
          "Blanket",
          "Bed",
          "Key"
        ],
        "correctAnswer": "Toothpaste",
        "explanation": "Exemplo prático: \"Put toothpaste on your toothbrush.\"",
        "phoneticHint": "/ˈtuːθ.peɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Toilet",
        "visualEmoji": "🚽",
        "visualOptions": [
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          }
        ],
        "options": [
          "Towel",
          "Wardrobe",
          "Toilet",
          "Window"
        ],
        "correctAnswer": "Toilet",
        "explanation": "Exemplo prático: \"A clean white ceramic bathroom toilet.\"",
        "phoneticHint": "/ˈtɔɪ.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toilet Paper",
        "visualEmoji": "🧻",
        "visualOptions": [
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão (TV)"
          }
        ],
        "options": [
          "Toilet Paper",
          "Table",
          "Air Conditioner",
          "Television"
        ],
        "correctAnswer": "Toilet Paper",
        "explanation": "Exemplo prático: \"A white roll of soft toilet paper.\"",
        "phoneticHint": "/ˈtɔɪ.lət ˈpeɪ.pər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Trash Can",
        "visualEmoji": "🗑️",
        "visualOptions": [
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira"
          }
        ],
        "options": [
          "Shower",
          "Toothbrush",
          "Soap",
          "Trash Can"
        ],
        "correctAnswer": "Trash Can",
        "explanation": "Exemplo prático: \"Throw the wrapper into the trash can.\"",
        "phoneticHint": "/ˈtræʃ kæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Broom",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          }
        ],
        "options": [
          "Bookshelf",
          "Rug",
          "Broom",
          "Toothpaste"
        ],
        "correctAnswer": "Broom",
        "explanation": "Exemplo prático: \"Sweep the floor with a broom.\"",
        "phoneticHint": "/bruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bucket",
        "visualEmoji": "🪣",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde"
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          }
        ],
        "options": [
          "Bed",
          "Bucket",
          "Towel",
          "Toilet"
        ],
        "correctAnswer": "Bucket",
        "explanation": "Exemplo prático: \"Fill the plastic bucket with water.\"",
        "phoneticHint": "/ˈbʌk.ɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Plant Pot",
        "visualEmoji": "🪴",
        "visualOptions": [
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          }
        ],
        "options": [
          "Plant Pot",
          "Toilet Paper",
          "Key",
          "Blanket"
        ],
        "correctAnswer": "Plant Pot",
        "explanation": "Exemplo prático: \"A green indoor plant in a ceramic pot.\"",
        "phoneticHint": "/ˈplænt pɑːt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p4",
    "worldId": 0,
    "phaseNumber": 4,
    "title": "Rodada 1 • Cotidiano I: Roupas, Calçados & Acessórios",
    "subtitle": "Passo 4/5 da Rodada 1 • 30 peças de roupa e acessórios do dia a dia",
    "pedagogicalObjective": "Dominar o vocabulário de roupas, calçados e acessórios pessoais em fotos inteiras sem cortes.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 4º passo da Rodada 1 aprendemos as roupas, calçados e acessórios que usamos todos os dias.",
      "Inclui Camiseta (Shirt), Calça (Pants), Calça Jeans (Jeans), Shorts, Vestido (Dress), Tênis (Sneakers), Chinelo (Sandals), Boné (Cap) e Óculos (Glasses).",
      "Logo após concluir este módulo, você fará o Exercício de Prática com Palavras da Rodada 1!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p4-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shirt",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa feminina"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          }
        ],
        "options": [
          "High Heels",
          "Handbag",
          "Shirt",
          "Hat"
        ],
        "correctAnswer": "Shirt",
        "explanation": "Exemplo prático: \"He wears a clean cotton shirt.\"",
        "phoneticHint": "/ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pants",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          }
        ],
        "options": [
          "Pants",
          "Necklace",
          "Necktie",
          "Boots"
        ],
        "correctAnswer": "Pants",
        "explanation": "Exemplo prático: \"Comfortable pants for work or school.\"",
        "phoneticHint": "/pænts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Jeans",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          }
        ],
        "options": [
          "Jacket",
          "Gloves",
          "Glasses",
          "Jeans"
        ],
        "correctAnswer": "Jeans",
        "explanation": "Exemplo prático: \"Blue denim jeans are worn everywhere.\"",
        "phoneticHint": "/dʒiːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shorts",
        "visualEmoji": "🩳",
        "visualOptions": [
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          }
        ],
        "options": [
          "Socks",
          "Shoes",
          "Shorts",
          "Sweater"
        ],
        "correctAnswer": "Shorts",
        "explanation": "Exemplo prático: \"Wear light shorts on a hot Brazilian summer day.\"",
        "phoneticHint": "/ʃɔːrts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Dress",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Sneakers",
          "Dress",
          "Cap",
          "Shirt"
        ],
        "correctAnswer": "Dress",
        "explanation": "Exemplo prático: \"She wore a colorful summer dress.\"",
        "phoneticHint": "/dres/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Skirt",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          }
        ],
        "options": [
          "Skirt",
          "Umbrella",
          "Ring",
          "Sandals"
        ],
        "correctAnswer": "Skirt",
        "explanation": "Exemplo prático: \"A pleated fabric skirt.\"",
        "phoneticHint": "/skɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Jacket",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          }
        ],
        "options": [
          "Belt",
          "Sunglasses",
          "Scarf",
          "Jacket"
        ],
        "correctAnswer": "Jacket",
        "explanation": "Exemplo prático: \"Put on a zipper jacket in the evening.\"",
        "phoneticHint": "/ˈdʒæk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Coat",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          }
        ],
        "options": [
          "Coat",
          "Wallet",
          "Shorts",
          "Watch"
        ],
        "correctAnswer": "Coat",
        "explanation": "Exemplo prático: \"A warm winter coat for cold trips.\"",
        "phoneticHint": "/koʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sweater",
        "visualEmoji": "🧶",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          }
        ],
        "options": [
          "Jeans",
          "Sweater",
          "Pants",
          "Dress"
        ],
        "correctAnswer": "Sweater",
        "explanation": "Exemplo prático: \"A soft knitted sweater keeps you warm.\"",
        "phoneticHint": "/ˈswet.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pajamas",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama"
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          }
        ],
        "options": [
          "Pajamas",
          "Skirt",
          "Shirt",
          "Sandals"
        ],
        "correctAnswer": "Pajamas",
        "explanation": "Exemplo prático: \"Put on comfortable pajamas before going to sleep.\"",
        "phoneticHint": "/pəˈdʒæm.əz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Socks",
        "visualEmoji": "🧦",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          }
        ],
        "options": [
          "Cap",
          "Sunglasses",
          "Scarf",
          "Socks"
        ],
        "correctAnswer": "Socks",
        "explanation": "Exemplo prático: \"Put on a pair of cotton socks.\"",
        "phoneticHint": "/sɑːks/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Shoes",
        "visualEmoji": "👞",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto"
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          }
        ],
        "options": [
          "Shoes",
          "Belt",
          "Umbrella",
          "Coat"
        ],
        "correctAnswer": "Shoes",
        "explanation": "Exemplo prático: \"Clean leather dress shoes.\"",
        "phoneticHint": "/ʃuːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sneakers",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          }
        ],
        "options": [
          "Necktie",
          "Sneakers",
          "Hat",
          "Necklace"
        ],
        "correctAnswer": "Sneakers",
        "explanation": "Exemplo prático: \"Wear comfortable running sneakers to walk.\"",
        "phoneticHint": "/ˈsniː.kərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sandals",
        "visualEmoji": "🩴",
        "visualOptions": [
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          }
        ],
        "options": [
          "Dress",
          "Pajamas",
          "Sandals",
          "Watch"
        ],
        "correctAnswer": "Sandals",
        "explanation": "Exemplo prático: \"Rubber flip-flop sandals are an everyday classic in Brazil.\"",
        "phoneticHint": "/ˈsæn.dəlz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Boots",
        "visualEmoji": "🥾",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          }
        ],
        "options": [
          "Jeans",
          "Jacket",
          "Pants",
          "Boots"
        ],
        "correctAnswer": "Boots",
        "explanation": "Exemplo prático: \"Leather boots protect your feet in the rain.\"",
        "phoneticHint": "/buːts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "High Heels",
        "visualEmoji": "👠",
        "visualOptions": [
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          }
        ],
        "options": [
          "High Heels",
          "Skirt",
          "Shorts",
          "Coat"
        ],
        "correctAnswer": "High Heels",
        "explanation": "Exemplo prático: \"She wore red high heels to the party.\"",
        "phoneticHint": "/ˌhaɪ ˈhiːlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cap",
        "visualEmoji": "🧢",
        "visualOptions": [
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          }
        ],
        "options": [
          "Ring",
          "Socks",
          "Cap",
          "Sweater"
        ],
        "correctAnswer": "Cap",
        "explanation": "Exemplo prático: \"Wear a baseball cap in the sun.\"",
        "phoneticHint": "/kæp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hat",
        "visualEmoji": "👒",
        "visualOptions": [
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama"
          }
        ],
        "options": [
          "Hat",
          "Sneakers",
          "Shoes",
          "Pajamas"
        ],
        "correctAnswer": "Hat",
        "explanation": "Exemplo prático: \"A straw sun hat for the beach.\"",
        "phoneticHint": "/hæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
        "visualOptions": [
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa feminina"
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          }
        ],
        "options": [
          "Handbag",
          "Gloves",
          "Boots",
          "Glasses"
        ],
        "correctAnswer": "Glasses",
        "explanation": "Exemplo prático: \"He wears prescription glasses to read.\"",
        "phoneticHint": "/ˈɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sunglasses",
        "visualEmoji": "🕶️",
        "visualOptions": [
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          }
        ],
        "options": [
          "High Heels",
          "Dress",
          "Sunglasses",
          "Wallet"
        ],
        "correctAnswer": "Sunglasses",
        "explanation": "Exemplo prático: \"Dark sunglasses protect your eyes on sunny days.\"",
        "phoneticHint": "/ˈsʌnˌɡlæs.ɪz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Watch",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          }
        ],
        "options": [
          "Shirt",
          "Skirt",
          "Watch",
          "Shorts"
        ],
        "correctAnswer": "Watch",
        "explanation": "Exemplo prático: \"Check the time on your wristwatch.\"",
        "phoneticHint": "/wɑːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Umbrella",
        "visualEmoji": "☂️",
        "visualOptions": [
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          }
        ],
        "options": [
          "Umbrella",
          "Cap",
          "Coat",
          "Sweater"
        ],
        "correctAnswer": "Umbrella",
        "explanation": "Exemplo prático: \"Open your umbrella when it starts to rain.\"",
        "phoneticHint": "/ʌmˈbrel.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Belt",
        "visualEmoji": "ベルト",
        "visualOptions": [
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto"
          }
        ],
        "options": [
          "Glasses",
          "Socks",
          "Ring",
          "Belt"
        ],
        "correctAnswer": "Belt",
        "explanation": "Exemplo prático: \"Fasten the leather belt around your waist.\"",
        "phoneticHint": "/belt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Necktie",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          },
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          }
        ],
        "options": [
          "Hat",
          "Boots",
          "Necktie",
          "High Heels"
        ],
        "correctAnswer": "Necktie",
        "explanation": "Exemplo prático: \"He wore a silk necktie with his suit.\"",
        "phoneticHint": "/ˈnek.taɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Scarf",
        "visualEmoji": "🧣",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          }
        ],
        "options": [
          "Shoes",
          "Scarf",
          "Watch",
          "Necklace"
        ],
        "correctAnswer": "Scarf",
        "explanation": "Exemplo prático: \"Wrap a warm wool scarf around your neck.\"",
        "phoneticHint": "/skɑːrf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Gloves",
        "visualEmoji": "🧤",
        "visualOptions": [
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas"
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          }
        ],
        "options": [
          "Gloves",
          "Jeans",
          "Jacket",
          "Umbrella"
        ],
        "correctAnswer": "Gloves",
        "explanation": "Exemplo prático: \"Wear winter gloves to keep your hands warm.\"",
        "phoneticHint": "/ɡlʌvz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Handbag",
        "visualEmoji": "👜",
        "visualOptions": [
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa feminina"
          }
        ],
        "options": [
          "Sneakers",
          "Sandals",
          "Sunglasses",
          "Handbag"
        ],
        "correctAnswer": "Handbag",
        "explanation": "Exemplo prático: \"She carries her phone inside a leather handbag.\"",
        "phoneticHint": "/ˈhænd.bæɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wallet",
        "visualEmoji": "👛",
        "visualOptions": [
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          }
        ],
        "options": [
          "Wallet",
          "Pajamas",
          "Glasses",
          "Pants"
        ],
        "correctAnswer": "Wallet",
        "explanation": "Exemplo prático: \"Keep your money and cards inside a leather wallet.\"",
        "phoneticHint": "/ˈwɑː.lɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ring",
        "visualEmoji": "💍",
        "visualOptions": [
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol"
          }
        ],
        "options": [
          "Belt",
          "Ring",
          "Necktie",
          "Scarf"
        ],
        "correctAnswer": "Ring",
        "explanation": "Exemplo prático: \"A shiny gold ring on the finger.\"",
        "phoneticHint": "/rɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Necklace",
        "visualEmoji": "📿",
        "visualOptions": [
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          }
        ],
        "options": [
          "High Heels",
          "Gloves",
          "Necklace",
          "Hat"
        ],
        "correctAnswer": "Necklace",
        "explanation": "Exemplo prático: \"A delicate gold necklace.\"",
        "phoneticHint": "/ˈnek.lɪs/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p5",
    "worldId": 0,
    "phaseNumber": 5,
    "title": "Prática da Rodada 1: Palavras & Associações Simples",
    "subtitle": "Passo 5/5 da Rodada 1 • 12 exercícios simples com as palavras aprendidas",
    "pedagogicalObjective": "Consolidar na prática as palavras aprendidas nos 4 módulos da Rodada 1 (Alimentos, Animais, Casa e Cotidiano) com associações simples e diretas.",
    "type": "chest",
    "icon": "gift",
    "cefrLevel": "A1",
    "theorySummary": [
      "Parabéns por completar os 4 módulos visuais da Rodada 1 (Alimentos, Animais, Casa e Cotidiano)!",
      "Agora vamos praticar as palavras aprendidas com combinações curtas, simples e de fácil associação.",
      "Ouça cada expressão em inglês americano e escolha ou monte a resposta correta!"
    ],
    "xpReward": 60,
    "gemsReward": 25,
    "exercises": [
      {
        "id": "w0-p5-e1",
        "type": "multiple-choice",
        "visualEmoji": "🍎",
        "prompt": "O que significa \"Red apple\" em português?",
        "audioPhrase": "Red apple",
        "options": [
          "Maçã vermelha",
          "Banana amarela",
          "Pera verde",
          "Uva roxa"
        ],
        "correctAnswer": "Maçã vermelha",
        "explanation": "\"Red apple\" = \"Maçã vermelha\". Associação simples e direta!",
        "phoneticHint": "/red ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e2",
        "type": "word-order",
        "visualEmoji": "🍌",
        "prompt": "Monte em inglês: \"Banana amarela\" (usando o vocabulário da Rodada 1):",
        "audioPhrase": "Yellow banana",
        "options": [
          "banana",
          "Yellow",
          "apple"
        ],
        "correctAnswer": "Yellow banana",
        "explanation": "\"Yellow banana\" significa \"Banana amarela\".",
        "phoneticHint": "/ˈjel.oʊ bəˈnæn.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e3",
        "type": "multiple-choice",
        "visualEmoji": "🍊",
        "prompt": "O que significa \"Sweet orange\" em português?",
        "audioPhrase": "Sweet orange",
        "options": [
          "Laranja doce",
          "Limão azedo",
          "Melancia grande",
          "Coco verde"
        ],
        "correctAnswer": "Laranja doce",
        "explanation": "\"Sweet orange\" = \"Laranja doce\". Associação simples e direta!",
        "phoneticHint": "/swiːt ˈɔːr.ɪndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e4",
        "type": "multiple-choice",
        "visualEmoji": "🐕",
        "prompt": "O que significa \"Happy dog\" em português?",
        "audioPhrase": "Happy dog",
        "options": [
          "Cachorro feliz",
          "Gato pequeno",
          "Cavalo forte",
          "Pato branco"
        ],
        "correctAnswer": "Cachorro feliz",
        "explanation": "\"Happy dog\" = \"Cachorro feliz\". Associação simples e direta!",
        "phoneticHint": "/ˈhæp.i dɔːɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e5",
        "type": "word-order",
        "visualEmoji": "🐈",
        "prompt": "Monte em inglês: \"Gato branco\" (usando o vocabulário da Rodada 1):",
        "audioPhrase": "White cat",
        "options": [
          "cat",
          "White",
          "dog"
        ],
        "correctAnswer": "White cat",
        "explanation": "\"White cat\" significa \"Gato branco\".",
        "phoneticHint": "/waɪt kæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e6",
        "type": "multiple-choice",
        "visualEmoji": "🐎",
        "prompt": "O que significa \"Big horse\" em português?",
        "audioPhrase": "Big horse",
        "options": [
          "Cavalo grande",
          "Vaca leiteira",
          "Coelho rápido",
          "Pássaro azul"
        ],
        "correctAnswer": "Cavalo grande",
        "explanation": "\"Big horse\" = \"Cavalo grande\". Associação simples e direta!",
        "phoneticHint": "/bɪɡ hɔːrs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e7",
        "type": "multiple-choice",
        "visualEmoji": "🛏️",
        "prompt": "O que significa \"My bed\" em português?",
        "audioPhrase": "My bed",
        "options": [
          "Minha cama",
          "Minha cadeira",
          "Minha mesa",
          "Minha porta"
        ],
        "correctAnswer": "Minha cama",
        "explanation": "\"My bed\" = \"Minha cama\". Associação simples e direta!",
        "phoneticHint": "/maɪ bed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e8",
        "type": "word-order",
        "visualEmoji": "🪑",
        "prompt": "Monte em inglês: \"Cadeira de madeira\" (usando o vocabulário da Rodada 1):",
        "audioPhrase": "Wooden chair",
        "options": [
          "chair",
          "Wooden",
          "table"
        ],
        "correctAnswer": "Wooden chair",
        "explanation": "\"Wooden chair\" significa \"Cadeira de madeira\".",
        "phoneticHint": "/ˈwʊd.ən tʃer/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e9",
        "type": "multiple-choice",
        "visualEmoji": "🔑",
        "prompt": "O que significa \"House key\" em português?",
        "audioPhrase": "House key",
        "options": [
          "Chave de casa",
          "Porta de madeira",
          "Janela aberta",
          "Travesseiro macio"
        ],
        "correctAnswer": "Chave de casa",
        "explanation": "\"House key\" = \"Chave de casa\". Associação simples e direta!",
        "phoneticHint": "/haʊs kiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e10",
        "type": "multiple-choice",
        "visualEmoji": "👕",
        "prompt": "O que significa \"Blue shirt\" em português?",
        "audioPhrase": "Blue shirt",
        "options": [
          "Camisa azul",
          "Calça preta",
          "Vestido vermelho",
          "Boné novo"
        ],
        "correctAnswer": "Camisa azul",
        "explanation": "\"Blue shirt\" = \"Camisa azul\". Associação simples e direta!",
        "phoneticHint": "/bluː ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e11",
        "type": "word-order",
        "visualEmoji": "👟",
        "prompt": "Monte em inglês: \"Tênis novos\" (usando o vocabulário da Rodada 1):",
        "audioPhrase": "New sneakers",
        "options": [
          "sneakers",
          "New",
          "socks"
        ],
        "correctAnswer": "New sneakers",
        "explanation": "\"New sneakers\" significa \"Tênis novos\".",
        "phoneticHint": "/nuː ˈsniː.kərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e12",
        "type": "multiple-choice",
        "visualEmoji": "☂️",
        "prompt": "O que significa \"Big umbrella\" em português?",
        "audioPhrase": "Big umbrella",
        "options": [
          "Guarda-chuva grande",
          "Óculos de sol",
          "Relógio de pulso",
          "Bolsa pequena"
        ],
        "correctAnswer": "Guarda-chuva grande",
        "explanation": "\"Big umbrella\" = \"Guarda-chuva grande\". Associação simples e direta!",
        "phoneticHint": "/bɪɡ ʌmˈbrel.ə/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p6",
    "worldId": 0,
    "phaseNumber": 6,
    "title": "Rodada 2 • Alimentos II: Legumes, Verduras & Feira",
    "subtitle": "Passo 1/5 da Rodada 2 • 30 vegetais inteiros da mesa brasileira",
    "pedagogicalObjective": "Identificar legumes, verduras e raízes inteiras da alimentação diária.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Iniciamos a Rodada 2! Voltamos aos Alimentos, agora com os 30 legumes e verduras mais conhecidos da feira brasileira.",
      "Todos os itens aparecem inteiros e com seu formato característico (Tomate, Batata, Cenoura, Cebola, Alho, Alface, Milho, Pepino, Brócolis, Mandioca, Quiabo e Chuchu).",
      "Ouça a pronúncia em inglês americano e toque no vegetal correto!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p6-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
          {
            "text": "Heart of Palm",
            "emoji": "⚪",
            "label": "Heart of Palm",
            "translationPt": "Palmito"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          }
        ],
        "options": [
          "Heart of Palm",
          "Tomato",
          "Broccoli",
          "Eggplant"
        ],
        "correctAnswer": "Tomato",
        "explanation": "Exemplo prático: \"Fresh red tomatoes go in the salad.\"",
        "phoneticHint": "/təˈmeɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Potato",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Bell Pepper",
            "emoji": "🫑",
            "label": "Bell Pepper",
            "translationPt": "Pimentão"
          },
          {
            "text": "Beetroot",
            "emoji": "🟣",
            "label": "Beetroot",
            "translationPt": "Beterraba"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Radish",
            "emoji": "🔴",
            "label": "Radish",
            "translationPt": "Rabanete"
          }
        ],
        "options": [
          "Bell Pepper",
          "Beetroot",
          "Potato",
          "Radish"
        ],
        "correctAnswer": "Potato",
        "explanation": "Exemplo prático: \"Potatoes are used in many recipes.\"",
        "phoneticHint": "/pəˈteɪ.toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
        "visualOptions": [
          {
            "text": "Zucchini",
            "emoji": "🥒",
            "label": "Zucchini",
            "translationPt": "Abobrinha"
          },
          {
            "text": "Okra",
            "emoji": "🟢",
            "label": "Okra",
            "translationPt": "Quiabo"
          },
          {
            "text": "Ginger",
            "emoji": "🫚",
            "label": "Ginger",
            "translationPt": "Gengibre"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Zucchini",
          "Okra",
          "Ginger",
          "Carrot"
        ],
        "correctAnswer": "Carrot",
        "explanation": "Exemplo prático: \"Rabbits love crunchy orange carrots.\"",
        "phoneticHint": "/ˈkær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Onion",
        "visualEmoji": "🧅",
        "visualOptions": [
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Spring Onion",
            "emoji": "🌱",
            "label": "Spring Onion",
            "translationPt": "Cebolinha verde"
          },
          {
            "text": "Spinach",
            "emoji": "🌿",
            "label": "Spinach",
            "translationPt": "Espinafre"
          },
          {
            "text": "Sweet Potato",
            "emoji": "🍠",
            "label": "Sweet Potato",
            "translationPt": "Batata-doce"
          }
        ],
        "options": [
          "Onion",
          "Spring Onion",
          "Spinach",
          "Sweet Potato"
        ],
        "correctAnswer": "Onion",
        "explanation": "Exemplo prático: \"Chopped onion adds flavor to the meal.\"",
        "phoneticHint": "/ˈʌn.jən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
        "visualOptions": [
          {
            "text": "Cabbage",
            "emoji": "🥬",
            "label": "Cabbage",
            "translationPt": "Repolho"
          },
          {
            "text": "Chili Pepper",
            "emoji": "🌶️",
            "label": "Chili Pepper",
            "translationPt": "Pimenta vermelha"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Cauliflower",
            "emoji": "⚪",
            "label": "Cauliflower",
            "translationPt": "Couve-flor"
          }
        ],
        "options": [
          "Cabbage",
          "Chili Pepper",
          "Garlic",
          "Cauliflower"
        ],
        "correctAnswer": "Garlic",
        "explanation": "Exemplo prático: \"Garlic smells great when cooked.\"",
        "phoneticHint": "/ˈɡɑːr.lɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lettuce",
        "visualEmoji": "🥬",
        "visualOptions": [
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface"
          },
          {
            "text": "Cassava",
            "emoji": "🥔",
            "label": "Cassava",
            "translationPt": "Mandioca / Aipim"
          },
          {
            "text": "Olive",
            "emoji": "🫒",
            "label": "Olive",
            "translationPt": "Azeitona"
          },
          {
            "text": "Chayote",
            "emoji": "🍐",
            "label": "Chayote",
            "translationPt": "Chuchu"
          }
        ],
        "options": [
          "Lettuce",
          "Cassava",
          "Olive",
          "Chayote"
        ],
        "correctAnswer": "Lettuce",
        "explanation": "Exemplo prático: \"Wash the green lettuce leaves well.\"",
        "phoneticHint": "/ˈlet.ɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Corn",
        "visualEmoji": "🌽",
        "visualOptions": [
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Pumpkin",
            "emoji": "🎃",
            "label": "Pumpkin",
            "translationPt": "Abóbora"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho"
          }
        ],
        "options": [
          "Carrot",
          "Pumpkin",
          "Potato",
          "Corn"
        ],
        "correctAnswer": "Corn",
        "explanation": "Exemplo prático: \"Sweet yellow corn on the cob.\"",
        "phoneticHint": "/kɔːrn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cucumber",
        "visualEmoji": "🥒",
        "visualOptions": [
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Peas",
            "emoji": "🫛",
            "label": "Peas",
            "translationPt": "Ervilha"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Onion",
          "Peas",
          "Cucumber",
          "Tomato"
        ],
        "correctAnswer": "Cucumber",
        "explanation": "Exemplo prático: \"Cucumber slices are cool and crisp.\"",
        "phoneticHint": "/ˈkjuː.kʌm.bər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Broccoli",
        "visualEmoji": "🥦",
        "visualOptions": [
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo / Champignon"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          }
        ],
        "options": [
          "Mushroom",
          "Peanut",
          "Broccoli",
          "Garlic"
        ],
        "correctAnswer": "Broccoli",
        "explanation": "Exemplo prático: \"Steamed broccoli is very nutritious.\"",
        "phoneticHint": "/ˈbrɑː.kəl.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cabbage",
        "visualEmoji": "🥬",
        "visualOptions": [
          {
            "text": "Cabbage",
            "emoji": "🥬",
            "label": "Cabbage",
            "translationPt": "Repolho"
          },
          {
            "text": "Spinach",
            "emoji": "🌿",
            "label": "Spinach",
            "translationPt": "Espinafre"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface"
          },
          {
            "text": "Spring Onion",
            "emoji": "🌱",
            "label": "Spring Onion",
            "translationPt": "Cebolinha verde"
          }
        ],
        "options": [
          "Cabbage",
          "Spinach",
          "Lettuce",
          "Spring Onion"
        ],
        "correctAnswer": "Cabbage",
        "explanation": "Exemplo prático: \"Green cabbage is crunchy in salads.\"",
        "phoneticHint": "/ˈkæb.ɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cauliflower",
        "visualEmoji": "⚪",
        "visualOptions": [
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho"
          },
          {
            "text": "Olive",
            "emoji": "🫒",
            "label": "Olive",
            "translationPt": "Azeitona"
          },
          {
            "text": "Okra",
            "emoji": "🟢",
            "label": "Okra",
            "translationPt": "Quiabo"
          },
          {
            "text": "Cauliflower",
            "emoji": "⚪",
            "label": "Cauliflower",
            "translationPt": "Couve-flor"
          }
        ],
        "options": [
          "Corn",
          "Olive",
          "Okra",
          "Cauliflower"
        ],
        "correctAnswer": "Cauliflower",
        "explanation": "Exemplo prático: \"Cauliflower looks like a white flower.\"",
        "phoneticHint": "/ˈkɑː.lɪˌflaʊ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pumpkin",
        "visualEmoji": "🎃",
        "visualOptions": [
          {
            "text": "Bell Pepper",
            "emoji": "🫑",
            "label": "Bell Pepper",
            "translationPt": "Pimentão"
          },
          {
            "text": "Radish",
            "emoji": "🔴",
            "label": "Radish",
            "translationPt": "Rabanete"
          },
          {
            "text": "Pumpkin",
            "emoji": "🎃",
            "label": "Pumpkin",
            "translationPt": "Abóbora"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
          }
        ],
        "options": [
          "Bell Pepper",
          "Radish",
          "Pumpkin",
          "Cucumber"
        ],
        "correctAnswer": "Pumpkin",
        "explanation": "Exemplo prático: \"Orange pumpkin soup is warm and creamy.\"",
        "phoneticHint": "/ˈpʌmp.kɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sweet Potato",
        "visualEmoji": "🍠",
        "visualOptions": [
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Sweet Potato",
            "emoji": "🍠",
            "label": "Sweet Potato",
            "translationPt": "Batata-doce"
          },
          {
            "text": "Heart of Palm",
            "emoji": "⚪",
            "label": "Heart of Palm",
            "translationPt": "Palmito"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          }
        ],
        "options": [
          "Onion",
          "Sweet Potato",
          "Heart of Palm",
          "Broccoli"
        ],
        "correctAnswer": "Sweet Potato",
        "explanation": "Exemplo prático: \"Roasted sweet potato is healthy.\"",
        "phoneticHint": "/ˌswiːt pəˈteɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Beetroot",
        "visualEmoji": "🟣",
        "visualOptions": [
          {
            "text": "Beetroot",
            "emoji": "🟣",
            "label": "Beetroot",
            "translationPt": "Beterraba"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Beetroot",
          "Tomato",
          "Lettuce",
          "Carrot"
        ],
        "correctAnswer": "Beetroot",
        "explanation": "Exemplo prático: \"Beetroot has a deep purple color.\"",
        "phoneticHint": "/ˈbiːt.ruːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Zucchini",
        "visualEmoji": "🥒",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Peas",
            "emoji": "🫛",
            "label": "Peas",
            "translationPt": "Ervilha"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim"
          },
          {
            "text": "Zucchini",
            "emoji": "🥒",
            "label": "Zucchini",
            "translationPt": "Abobrinha"
          }
        ],
        "options": [
          "Potato",
          "Peas",
          "Peanut",
          "Zucchini"
        ],
        "correctAnswer": "Zucchini",
        "explanation": "Exemplo prático: \"Sliced zucchini cooks very quickly.\"",
        "phoneticHint": "/zuːˈkiː.ni/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Eggplant",
        "visualEmoji": "🍆",
        "visualOptions": [
          {
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
          },
          {
            "text": "Cabbage",
            "emoji": "🥬",
            "label": "Cabbage",
            "translationPt": "Repolho"
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho"
          }
        ],
        "options": [
          "Eggplant",
          "Cucumber",
          "Cabbage",
          "Corn"
        ],
        "correctAnswer": "Eggplant",
        "explanation": "Exemplo prático: \"Purple eggplant is delicious when baked.\"",
        "phoneticHint": "/ˈeɡ.plænt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bell Pepper",
        "visualEmoji": "🫑",
        "visualOptions": [
          {
            "text": "Cauliflower",
            "emoji": "⚪",
            "label": "Cauliflower",
            "translationPt": "Couve-flor"
          },
          {
            "text": "Bell Pepper",
            "emoji": "🫑",
            "label": "Bell Pepper",
            "translationPt": "Pimentão"
          },
          {
            "text": "Chayote",
            "emoji": "🍐",
            "label": "Chayote",
            "translationPt": "Chuchu"
          },
          {
            "text": "Cassava",
            "emoji": "🥔",
            "label": "Cassava",
            "translationPt": "Mandioca / Aipim"
          }
        ],
        "options": [
          "Cauliflower",
          "Bell Pepper",
          "Chayote",
          "Cassava"
        ],
        "correctAnswer": "Bell Pepper",
        "explanation": "Exemplo prático: \"Bell peppers can be green, red or yellow.\"",
        "phoneticHint": "/ˈbel ˌpep.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chili Pepper",
        "visualEmoji": "🌶️",
        "visualOptions": [
          {
            "text": "Sweet Potato",
            "emoji": "🍠",
            "label": "Sweet Potato",
            "translationPt": "Batata-doce"
          },
          {
            "text": "Beetroot",
            "emoji": "🟣",
            "label": "Beetroot",
            "translationPt": "Beterraba"
          },
          {
            "text": "Chili Pepper",
            "emoji": "🌶️",
            "label": "Chili Pepper",
            "translationPt": "Pimenta vermelha"
          },
          {
            "text": "Pumpkin",
            "emoji": "🎃",
            "label": "Pumpkin",
            "translationPt": "Abóbora"
          }
        ],
        "options": [
          "Sweet Potato",
          "Beetroot",
          "Chili Pepper",
          "Pumpkin"
        ],
        "correctAnswer": "Chili Pepper",
        "explanation": "Exemplo prático: \"That red chili pepper is very spicy.\"",
        "phoneticHint": "/ˈtʃɪl.i ˌpep.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Peas",
        "visualEmoji": "🫛",
        "visualOptions": [
          {
            "text": "Ginger",
            "emoji": "🫚",
            "label": "Ginger",
            "translationPt": "Gengibre"
          },
          {
            "text": "Zucchini",
            "emoji": "🥒",
            "label": "Zucchini",
            "translationPt": "Abobrinha"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Peas",
            "emoji": "🫛",
            "label": "Peas",
            "translationPt": "Ervilha"
          }
        ],
        "options": [
          "Ginger",
          "Zucchini",
          "Garlic",
          "Peas"
        ],
        "correctAnswer": "Peas",
        "explanation": "Exemplo prático: \"Green peas are small and round.\"",
        "phoneticHint": "/piːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Spinach",
        "visualEmoji": "🌿",
        "visualOptions": [
          {
            "text": "Spinach",
            "emoji": "🌿",
            "label": "Spinach",
            "translationPt": "Espinafre"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Heart of Palm",
            "emoji": "⚪",
            "label": "Heart of Palm",
            "translationPt": "Palmito"
          },
          {
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          }
        ],
        "options": [
          "Spinach",
          "Tomato",
          "Heart of Palm",
          "Eggplant"
        ],
        "correctAnswer": "Spinach",
        "explanation": "Exemplo prático: \"Fresh spinach leaves are rich in iron.\"",
        "phoneticHint": "/ˈspɪn.ɪtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Mushroom",
        "visualEmoji": "🍄",
        "visualOptions": [
          {
            "text": "Spring Onion",
            "emoji": "🌱",
            "label": "Spring Onion",
            "translationPt": "Cebolinha verde"
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo / Champignon"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          }
        ],
        "options": [
          "Spring Onion",
          "Mushroom",
          "Peanut",
          "Potato"
        ],
        "correctAnswer": "Mushroom",
        "explanation": "Exemplo prático: \"White mushrooms are great in pasta.\"",
        "phoneticHint": "/ˈmʌʃ.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cassava",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Chili Pepper",
            "emoji": "🌶️",
            "label": "Chili Pepper",
            "translationPt": "Pimenta vermelha"
          },
          {
            "text": "Cassava",
            "emoji": "🥔",
            "label": "Cassava",
            "translationPt": "Mandioca / Aipim"
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho"
          }
        ],
        "options": [
          "Carrot",
          "Chili Pepper",
          "Cassava",
          "Corn"
        ],
        "correctAnswer": "Cassava",
        "explanation": "Exemplo prático: \"Fried cassava is very popular in Brazil.\"",
        "phoneticHint": "/kəˈsɑː.və/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Okra",
        "visualEmoji": "🟢",
        "visualOptions": [
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Olive",
            "emoji": "🫒",
            "label": "Olive",
            "translationPt": "Azeitona"
          },
          {
            "text": "Radish",
            "emoji": "🔴",
            "label": "Radish",
            "translationPt": "Rabanete"
          },
          {
            "text": "Okra",
            "emoji": "🟢",
            "label": "Okra",
            "translationPt": "Quiabo"
          }
        ],
        "options": [
          "Onion",
          "Olive",
          "Radish",
          "Okra"
        ],
        "correctAnswer": "Okra",
        "explanation": "Exemplo prático: \"Okra is a traditional vegetable in Brazilian cooking.\"",
        "phoneticHint": "/ˈoʊ.krə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chayote",
        "visualEmoji": "🍐",
        "visualOptions": [
          {
            "text": "Chayote",
            "emoji": "🍐",
            "label": "Chayote",
            "translationPt": "Chuchu"
          },
          {
            "text": "Beetroot",
            "emoji": "🟣",
            "label": "Beetroot",
            "translationPt": "Beterraba"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          }
        ],
        "options": [
          "Chayote",
          "Beetroot",
          "Broccoli",
          "Eggplant"
        ],
        "correctAnswer": "Chayote",
        "explanation": "Exemplo prático: \"Light green chayote is mild and healthy.\"",
        "phoneticHint": "/tʃaɪˈoʊ.ti/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Heart of Palm",
        "visualEmoji": "⚪",
        "visualOptions": [
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo / Champignon"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface"
          },
          {
            "text": "Heart of Palm",
            "emoji": "⚪",
            "label": "Heart of Palm",
            "translationPt": "Palmito"
          },
          {
            "text": "Bell Pepper",
            "emoji": "🫑",
            "label": "Bell Pepper",
            "translationPt": "Pimentão"
          }
        ],
        "options": [
          "Mushroom",
          "Lettuce",
          "Heart of Palm",
          "Bell Pepper"
        ],
        "correctAnswer": "Heart of Palm",
        "explanation": "Exemplo prático: \"Heart of palm is great in salads and pies.\"",
        "phoneticHint": "/ˌhɑːrt əv ˈpɑːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Peanut",
        "visualEmoji": "🥜",
        "visualOptions": [
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim"
          },
          {
            "text": "Zucchini",
            "emoji": "🥒",
            "label": "Zucchini",
            "translationPt": "Abobrinha"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
          }
        ],
        "options": [
          "Peanut",
          "Zucchini",
          "Garlic",
          "Cucumber"
        ],
        "correctAnswer": "Peanut",
        "explanation": "Exemplo prático: \"Roasted peanuts are a crunchy snack.\"",
        "phoneticHint": "/ˈpiː.nʌt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Olive",
        "visualEmoji": "🫒",
        "visualOptions": [
          {
            "text": "Sweet Potato",
            "emoji": "🍠",
            "label": "Sweet Potato",
            "translationPt": "Batata-doce"
          },
          {
            "text": "Pumpkin",
            "emoji": "🎃",
            "label": "Pumpkin",
            "translationPt": "Abóbora"
          },
          {
            "text": "Spinach",
            "emoji": "🌿",
            "label": "Spinach",
            "translationPt": "Espinafre"
          },
          {
            "text": "Olive",
            "emoji": "🫒",
            "label": "Olive",
            "translationPt": "Azeitona"
          }
        ],
        "options": [
          "Sweet Potato",
          "Pumpkin",
          "Spinach",
          "Olive"
        ],
        "correctAnswer": "Olive",
        "explanation": "Exemplo prático: \"Green olives are common on pizzas.\"",
        "phoneticHint": "/ˈɑː.lɪv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ginger",
        "visualEmoji": "🫚",
        "visualOptions": [
          {
            "text": "Cauliflower",
            "emoji": "⚪",
            "label": "Cauliflower",
            "translationPt": "Couve-flor"
          },
          {
            "text": "Chili Pepper",
            "emoji": "🌶️",
            "label": "Chili Pepper",
            "translationPt": "Pimenta vermelha"
          },
          {
            "text": "Ginger",
            "emoji": "🫚",
            "label": "Ginger",
            "translationPt": "Gengibre"
          },
          {
            "text": "Cabbage",
            "emoji": "🥬",
            "label": "Cabbage",
            "translationPt": "Repolho"
          }
        ],
        "options": [
          "Cauliflower",
          "Chili Pepper",
          "Ginger",
          "Cabbage"
        ],
        "correctAnswer": "Ginger",
        "explanation": "Exemplo prático: \"Fresh ginger root is aromatic.\"",
        "phoneticHint": "/ˈdʒɪn.dʒər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Radish",
        "visualEmoji": "🔴",
        "visualOptions": [
          {
            "text": "Chayote",
            "emoji": "🍐",
            "label": "Chayote",
            "translationPt": "Chuchu"
          },
          {
            "text": "Radish",
            "emoji": "🔴",
            "label": "Radish",
            "translationPt": "Rabanete"
          },
          {
            "text": "Okra",
            "emoji": "🟢",
            "label": "Okra",
            "translationPt": "Quiabo"
          },
          {
            "text": "Cassava",
            "emoji": "🥔",
            "label": "Cassava",
            "translationPt": "Mandioca / Aipim"
          }
        ],
        "options": [
          "Chayote",
          "Radish",
          "Okra",
          "Cassava"
        ],
        "correctAnswer": "Radish",
        "explanation": "Exemplo prático: \"Red radishes are crunchy in salads.\"",
        "phoneticHint": "/ˈræd.ɪʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Spring Onion",
        "visualEmoji": "🌱",
        "visualOptions": [
          {
            "text": "Spring Onion",
            "emoji": "🌱",
            "label": "Spring Onion",
            "translationPt": "Cebolinha verde"
          },
          {
            "text": "Peas",
            "emoji": "🫛",
            "label": "Peas",
            "translationPt": "Ervilha"
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo / Champignon"
          },
          {
            "text": "Heart of Palm",
            "emoji": "⚪",
            "label": "Heart of Palm",
            "translationPt": "Palmito"
          }
        ],
        "options": [
          "Spring Onion",
          "Peas",
          "Mushroom",
          "Heart of Palm"
        ],
        "correctAnswer": "Spring Onion",
        "explanation": "Exemplo prático: \"Chopped spring onion finishes the dish.\"",
        "phoneticHint": "/ˌsprɪŋ ˈʌn.jən/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p7",
    "worldId": 0,
    "phaseNumber": 7,
    "title": "Rodada 2 • Animais II: Zoológico & Safári",
    "subtitle": "Passo 2/5 da Rodada 2 • 30 animais famosos dos zoológicos",
    "pedagogicalObjective": "Identificar os grandes animais facilmente encontrados em zoológicos, livros e filmes.",
    "type": "lesson",
    "icon": "dog",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 2º passo da Rodada 2 visitamos os 30 animais mais famosos do Zoológico!",
      "Inclui Leão (Lion), Tigre (Tiger), Elefante (Elephant), Girafa (Giraffe), Macaco (Monkey), Zebra, Urso (Bear), Panda, Jacaré (Alligator), Onça-pintada (Jaguar), Tucano (Toucan) e Arara (Macaw).",
      "Todos em fotos inteiras sem cortes."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p7-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lion",
        "visualEmoji": "🦁",
        "visualOptions": [
          {
            "text": "Hippopotamus",
            "emoji": "🦛",
            "label": "Hippopotamus",
            "translationPt": "Hipopótamo"
          },
          {
            "text": "Rhinoceros",
            "emoji": "🦏",
            "label": "Rhinoceros",
            "translationPt": "Rinoceronte"
          },
          {
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          },
          {
            "text": "Bear",
            "emoji": "🐻",
            "label": "Bear",
            "translationPt": "Urso"
          }
        ],
        "options": [
          "Hippopotamus",
          "Rhinoceros",
          "Lion",
          "Bear"
        ],
        "correctAnswer": "Lion",
        "explanation": "Exemplo prático: \"The lion has a large golden mane.\"",
        "phoneticHint": "/ˈlaɪ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Tiger",
        "visualEmoji": "🐅",
        "visualOptions": [
          {
            "text": "Tiger",
            "emoji": "🐅",
            "label": "Tiger",
            "translationPt": "Tigre"
          },
          {
            "text": "Kangaroo",
            "emoji": "🦘",
            "label": "Kangaroo",
            "translationPt": "Canguru"
          },
          {
            "text": "Toucan",
            "emoji": "🦜",
            "label": "Toucan",
            "translationPt": "Tucano"
          },
          {
            "text": "Koala",
            "emoji": "🐨",
            "label": "Koala",
            "translationPt": "Coala"
          }
        ],
        "options": [
          "Tiger",
          "Kangaroo",
          "Toucan",
          "Koala"
        ],
        "correctAnswer": "Tiger",
        "explanation": "Exemplo prático: \"The orange tiger has black stripes.\"",
        "phoneticHint": "/ˈtaɪ.ɡər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Elephant",
        "visualEmoji": "🐘",
        "visualOptions": [
          {
            "text": "Jaguar",
            "emoji": "🐆",
            "label": "Jaguar",
            "translationPt": "Onça-pintada"
          },
          {
            "text": "Deer",
            "emoji": "🦌",
            "label": "Deer",
            "translationPt": "Cervo / Veado"
          },
          {
            "text": "Gorilla",
            "emoji": "🦍",
            "label": "Gorilla",
            "translationPt": "Gorila"
          },
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
          }
        ],
        "options": [
          "Jaguar",
          "Deer",
          "Gorilla",
          "Elephant"
        ],
        "correctAnswer": "Elephant",
        "explanation": "Exemplo prático: \"The elephant has a long trunk and big ears.\"",
        "phoneticHint": "/ˈel.ɪ.fənt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Giraffe",
        "visualEmoji": "🦒",
        "visualOptions": [
          {
            "text": "Panda",
            "emoji": "🐼",
            "label": "Panda",
            "translationPt": "Urso Panda"
          },
          {
            "text": "Polar Bear",
            "emoji": "🐻‍❄️",
            "label": "Polar Bear",
            "translationPt": "Urso Polar"
          },
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          },
          {
            "text": "Snake",
            "emoji": "🐍",
            "label": "Snake",
            "translationPt": "Cobra / Serpente"
          }
        ],
        "options": [
          "Panda",
          "Polar Bear",
          "Giraffe",
          "Snake"
        ],
        "correctAnswer": "Giraffe",
        "explanation": "Exemplo prático: \"The tall giraffe eats leaves from high trees.\"",
        "phoneticHint": "/dʒɪˈræf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Monkey",
        "visualEmoji": "🐒",
        "visualOptions": [
          {
            "text": "Crocodile",
            "emoji": "🐊",
            "label": "Crocodile",
            "translationPt": "Crocodilo"
          },
          {
            "text": "Monkey",
            "emoji": "🐒",
            "label": "Monkey",
            "translationPt": "Macaco"
          },
          {
            "text": "Fox",
            "emoji": "🦊",
            "label": "Fox",
            "translationPt": "Raposa"
          },
          {
            "text": "Flamingo",
            "emoji": "🦩",
            "label": "Flamingo",
            "translationPt": "Flamingo"
          }
        ],
        "options": [
          "Crocodile",
          "Monkey",
          "Fox",
          "Flamingo"
        ],
        "correctAnswer": "Monkey",
        "explanation": "Exemplo prático: \"The playful monkey loves bananas.\"",
        "phoneticHint": "/ˈmʌŋ.ki/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Zebra",
        "visualEmoji": "🦓",
        "visualOptions": [
          {
            "text": "Zebra",
            "emoji": "🦓",
            "label": "Zebra",
            "translationPt": "Zebra"
          },
          {
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          },
          {
            "text": "Leopard",
            "emoji": "🐆",
            "label": "Leopard",
            "translationPt": "Leopardo"
          },
          {
            "text": "Chimpanzee",
            "emoji": "🐒",
            "label": "Chimpanzee",
            "translationPt": "Chimpanzé"
          }
        ],
        "options": [
          "Zebra",
          "Lion",
          "Leopard",
          "Chimpanzee"
        ],
        "correctAnswer": "Zebra",
        "explanation": "Exemplo prático: \"The zebra has black and white stripes.\"",
        "phoneticHint": "/ˈziː.brə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bear",
        "visualEmoji": "🐻",
        "visualOptions": [
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
          },
          {
            "text": "Camel",
            "emoji": "🐪",
            "label": "Camel",
            "translationPt": "Camelo"
          },
          {
            "text": "Cheetah",
            "emoji": "🐆",
            "label": "Cheetah",
            "translationPt": "Guepardo"
          },
          {
            "text": "Bear",
            "emoji": "🐻",
            "label": "Bear",
            "translationPt": "Urso"
          }
        ],
        "options": [
          "Elephant",
          "Camel",
          "Cheetah",
          "Bear"
        ],
        "correctAnswer": "Bear",
        "explanation": "Exemplo prático: \"The big brown bear walks in the forest.\"",
        "phoneticHint": "/ber/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Panda",
        "visualEmoji": "🐼",
        "visualOptions": [
          {
            "text": "Wolf",
            "emoji": "🐺",
            "label": "Wolf",
            "translationPt": "Lobo"
          },
          {
            "text": "Tiger",
            "emoji": "🐅",
            "label": "Tiger",
            "translationPt": "Tigre"
          },
          {
            "text": "Panda",
            "emoji": "🐼",
            "label": "Panda",
            "translationPt": "Urso Panda"
          },
          {
            "text": "Alligator",
            "emoji": "🐊",
            "label": "Alligator",
            "translationPt": "Jacaré"
          }
        ],
        "options": [
          "Wolf",
          "Tiger",
          "Panda",
          "Alligator"
        ],
        "correctAnswer": "Panda",
        "explanation": "Exemplo prático: \"The giant panda eats green bamboo.\"",
        "phoneticHint": "/ˈpæn.də/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Polar Bear",
        "visualEmoji": "🐻‍❄️",
        "visualOptions": [
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          },
          {
            "text": "Polar Bear",
            "emoji": "🐻‍❄️",
            "label": "Polar Bear",
            "translationPt": "Urso Polar"
          },
          {
            "text": "Monkey",
            "emoji": "🐒",
            "label": "Monkey",
            "translationPt": "Macaco"
          },
          {
            "text": "Macaw",
            "emoji": "🦜",
            "label": "Macaw",
            "translationPt": "Arara"
          }
        ],
        "options": [
          "Giraffe",
          "Polar Bear",
          "Monkey",
          "Macaw"
        ],
        "correctAnswer": "Polar Bear",
        "explanation": "Exemplo prático: \"The white polar bear lives on the ice.\"",
        "phoneticHint": "/ˈpoʊ.lər ber/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hippopotamus",
        "visualEmoji": "🦛",
        "visualOptions": [
          {
            "text": "Hippopotamus",
            "emoji": "🦛",
            "label": "Hippopotamus",
            "translationPt": "Hipopótamo"
          },
          {
            "text": "Penguin",
            "emoji": "🐧",
            "label": "Penguin",
            "translationPt": "Pinguim"
          },
          {
            "text": "Peacock",
            "emoji": "🦚",
            "label": "Peacock",
            "translationPt": "Pavão"
          },
          {
            "text": "Zebra",
            "emoji": "🦓",
            "label": "Zebra",
            "translationPt": "Zebra"
          }
        ],
        "options": [
          "Hippopotamus",
          "Penguin",
          "Peacock",
          "Zebra"
        ],
        "correctAnswer": "Hippopotamus",
        "explanation": "Exemplo prático: \"The heavy hippopotamus loves the water.\"",
        "phoneticHint": "/ˌhɪp.əˈpɑː.tə.məs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rhinoceros",
        "visualEmoji": "🦏",
        "visualOptions": [
          {
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          },
          {
            "text": "Leopard",
            "emoji": "🐆",
            "label": "Leopard",
            "translationPt": "Leopardo"
          },
          {
            "text": "Fox",
            "emoji": "🦊",
            "label": "Fox",
            "translationPt": "Raposa"
          },
          {
            "text": "Rhinoceros",
            "emoji": "🦏",
            "label": "Rhinoceros",
            "translationPt": "Rinoceronte"
          }
        ],
        "options": [
          "Lion",
          "Leopard",
          "Fox",
          "Rhinoceros"
        ],
        "correctAnswer": "Rhinoceros",
        "explanation": "Exemplo prático: \"The rhinoceros has a horn on its nose.\"",
        "phoneticHint": "/raɪˈnɑː.sər.əs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Alligator",
        "visualEmoji": "🐊",
        "visualOptions": [
          {
            "text": "Alligator",
            "emoji": "🐊",
            "label": "Alligator",
            "translationPt": "Jacaré"
          },
          {
            "text": "Flamingo",
            "emoji": "🦩",
            "label": "Flamingo",
            "translationPt": "Flamingo"
          },
          {
            "text": "Chimpanzee",
            "emoji": "🐒",
            "label": "Chimpanzee",
            "translationPt": "Chimpanzé"
          },
          {
            "text": "Bear",
            "emoji": "🐻",
            "label": "Bear",
            "translationPt": "Urso"
          }
        ],
        "options": [
          "Alligator",
          "Flamingo",
          "Chimpanzee",
          "Bear"
        ],
        "correctAnswer": "Alligator",
        "explanation": "Exemplo prático: \"The alligator lives in Brazilian rivers and pantanal.\"",
        "phoneticHint": "/ˈæl.ɪ.ɡeɪ.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Crocodile",
        "visualEmoji": "🐊",
        "visualOptions": [
          {
            "text": "Kangaroo",
            "emoji": "🦘",
            "label": "Kangaroo",
            "translationPt": "Canguru"
          },
          {
            "text": "Crocodile",
            "emoji": "🐊",
            "label": "Crocodile",
            "translationPt": "Crocodilo"
          },
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
          },
          {
            "text": "Koala",
            "emoji": "🐨",
            "label": "Koala",
            "translationPt": "Coala"
          }
        ],
        "options": [
          "Kangaroo",
          "Crocodile",
          "Elephant",
          "Koala"
        ],
        "correctAnswer": "Crocodile",
        "explanation": "Exemplo prático: \"The large crocodile has sharp teeth.\"",
        "phoneticHint": "/ˈkrɑː.kə.daɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Snake",
        "visualEmoji": "🐍",
        "visualOptions": [
          {
            "text": "Zebra",
            "emoji": "🦓",
            "label": "Zebra",
            "translationPt": "Zebra"
          },
          {
            "text": "Deer",
            "emoji": "🦌",
            "label": "Deer",
            "translationPt": "Cervo / Veado"
          },
          {
            "text": "Snake",
            "emoji": "🐍",
            "label": "Snake",
            "translationPt": "Cobra / Serpente"
          },
          {
            "text": "Wolf",
            "emoji": "🐺",
            "label": "Wolf",
            "translationPt": "Lobo"
          }
        ],
        "options": [
          "Zebra",
          "Deer",
          "Snake",
          "Wolf"
        ],
        "correctAnswer": "Snake",
        "explanation": "Exemplo prático: \"The snake slithers across the ground.\"",
        "phoneticHint": "/sneɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Gorilla",
        "visualEmoji": "🦍",
        "visualOptions": [
          {
            "text": "Polar Bear",
            "emoji": "🐻‍❄️",
            "label": "Polar Bear",
            "translationPt": "Urso Polar"
          },
          {
            "text": "Penguin",
            "emoji": "🐧",
            "label": "Penguin",
            "translationPt": "Pinguim"
          },
          {
            "text": "Panda",
            "emoji": "🐼",
            "label": "Panda",
            "translationPt": "Urso Panda"
          },
          {
            "text": "Gorilla",
            "emoji": "🦍",
            "label": "Gorilla",
            "translationPt": "Gorila"
          }
        ],
        "options": [
          "Polar Bear",
          "Penguin",
          "Panda",
          "Gorilla"
        ],
        "correctAnswer": "Gorilla",
        "explanation": "Exemplo prático: \"The strong gorilla beats its chest.\"",
        "phoneticHint": "/ɡəˈrɪl.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chimpanzee",
        "visualEmoji": "🐒",
        "visualOptions": [
          {
            "text": "Chimpanzee",
            "emoji": "🐒",
            "label": "Chimpanzee",
            "translationPt": "Chimpanzé"
          },
          {
            "text": "Monkey",
            "emoji": "🐒",
            "label": "Monkey",
            "translationPt": "Macaco"
          },
          {
            "text": "Peacock",
            "emoji": "🦚",
            "label": "Peacock",
            "translationPt": "Pavão"
          },
          {
            "text": "Cheetah",
            "emoji": "🐆",
            "label": "Cheetah",
            "translationPt": "Guepardo"
          }
        ],
        "options": [
          "Chimpanzee",
          "Monkey",
          "Peacock",
          "Cheetah"
        ],
        "correctAnswer": "Chimpanzee",
        "explanation": "Exemplo prático: \"Chimpanzees are very intelligent primates.\"",
        "phoneticHint": "/ˌtʃɪm.pænˈziː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kangaroo",
        "visualEmoji": "🦘",
        "visualOptions": [
          {
            "text": "Rhinoceros",
            "emoji": "🦏",
            "label": "Rhinoceros",
            "translationPt": "Rinoceronte"
          },
          {
            "text": "Macaw",
            "emoji": "🦜",
            "label": "Macaw",
            "translationPt": "Arara"
          },
          {
            "text": "Kangaroo",
            "emoji": "🦘",
            "label": "Kangaroo",
            "translationPt": "Canguru"
          },
          {
            "text": "Crocodile",
            "emoji": "🐊",
            "label": "Crocodile",
            "translationPt": "Crocodilo"
          }
        ],
        "options": [
          "Rhinoceros",
          "Macaw",
          "Kangaroo",
          "Crocodile"
        ],
        "correctAnswer": "Kangaroo",
        "explanation": "Exemplo prático: \"The kangaroo jumps on its strong back legs.\"",
        "phoneticHint": "/ˌkæŋ.ɡəˈruː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Koala",
        "visualEmoji": "🐨",
        "visualOptions": [
          {
            "text": "Koala",
            "emoji": "🐨",
            "label": "Koala",
            "translationPt": "Coala"
          },
          {
            "text": "Jaguar",
            "emoji": "🐆",
            "label": "Jaguar",
            "translationPt": "Onça-pintada"
          },
          {
            "text": "Snake",
            "emoji": "🐍",
            "label": "Snake",
            "translationPt": "Cobra / Serpente"
          },
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          }
        ],
        "options": [
          "Koala",
          "Jaguar",
          "Snake",
          "Giraffe"
        ],
        "correctAnswer": "Koala",
        "explanation": "Exemplo prático: \"The gray koala holds onto a branch.\"",
        "phoneticHint": "/koʊˈɑː.lə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Camel",
        "visualEmoji": "🐪",
        "visualOptions": [
          {
            "text": "Toucan",
            "emoji": "🦜",
            "label": "Toucan",
            "translationPt": "Tucano"
          },
          {
            "text": "Hippopotamus",
            "emoji": "🦛",
            "label": "Hippopotamus",
            "translationPt": "Hipopótamo"
          },
          {
            "text": "Tiger",
            "emoji": "🐅",
            "label": "Tiger",
            "translationPt": "Tigre"
          },
          {
            "text": "Camel",
            "emoji": "🐪",
            "label": "Camel",
            "translationPt": "Camelo"
          }
        ],
        "options": [
          "Toucan",
          "Hippopotamus",
          "Tiger",
          "Camel"
        ],
        "correctAnswer": "Camel",
        "explanation": "Exemplo prático: \"The desert camel has a hump on its back.\"",
        "phoneticHint": "/ˈkæm.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wolf",
        "visualEmoji": "🐺",
        "visualOptions": [
          {
            "text": "Wolf",
            "emoji": "🐺",
            "label": "Wolf",
            "translationPt": "Lobo"
          },
          {
            "text": "Zebra",
            "emoji": "🦓",
            "label": "Zebra",
            "translationPt": "Zebra"
          },
          {
            "text": "Alligator",
            "emoji": "🐊",
            "label": "Alligator",
            "translationPt": "Jacaré"
          },
          {
            "text": "Gorilla",
            "emoji": "🦍",
            "label": "Gorilla",
            "translationPt": "Gorila"
          }
        ],
        "options": [
          "Wolf",
          "Zebra",
          "Alligator",
          "Gorilla"
        ],
        "correctAnswer": "Wolf",
        "explanation": "Exemplo prático: \"The gray wolf howls at night.\"",
        "phoneticHint": "/wʊlf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fox",
        "visualEmoji": "🦊",
        "visualOptions": [
          {
            "text": "Panda",
            "emoji": "🐼",
            "label": "Panda",
            "translationPt": "Urso Panda"
          },
          {
            "text": "Penguin",
            "emoji": "🐧",
            "label": "Penguin",
            "translationPt": "Pinguim"
          },
          {
            "text": "Fox",
            "emoji": "🦊",
            "label": "Fox",
            "translationPt": "Raposa"
          },
          {
            "text": "Polar Bear",
            "emoji": "🐻‍❄️",
            "label": "Polar Bear",
            "translationPt": "Urso Polar"
          }
        ],
        "options": [
          "Panda",
          "Penguin",
          "Fox",
          "Polar Bear"
        ],
        "correctAnswer": "Fox",
        "explanation": "Exemplo prático: \"The red fox has a fluffy tail.\"",
        "phoneticHint": "/fɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Deer",
        "visualEmoji": "🦌",
        "visualOptions": [
          {
            "text": "Deer",
            "emoji": "🦌",
            "label": "Deer",
            "translationPt": "Cervo / Veado"
          },
          {
            "text": "Crocodile",
            "emoji": "🐊",
            "label": "Crocodile",
            "translationPt": "Crocodilo"
          },
          {
            "text": "Flamingo",
            "emoji": "🦩",
            "label": "Flamingo",
            "translationPt": "Flamingo"
          },
          {
            "text": "Chimpanzee",
            "emoji": "🐒",
            "label": "Chimpanzee",
            "translationPt": "Chimpanzé"
          }
        ],
        "options": [
          "Deer",
          "Crocodile",
          "Flamingo",
          "Chimpanzee"
        ],
        "correctAnswer": "Deer",
        "explanation": "Exemplo prático: \"The forest deer has branching antlers.\"",
        "phoneticHint": "/dɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Jaguar",
        "visualEmoji": "🐆",
        "visualOptions": [
          {
            "text": "Camel",
            "emoji": "🐪",
            "label": "Camel",
            "translationPt": "Camelo"
          },
          {
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          },
          {
            "text": "Rhinoceros",
            "emoji": "🦏",
            "label": "Rhinoceros",
            "translationPt": "Rinoceronte"
          },
          {
            "text": "Jaguar",
            "emoji": "🐆",
            "label": "Jaguar",
            "translationPt": "Onça-pintada"
          }
        ],
        "options": [
          "Camel",
          "Lion",
          "Rhinoceros",
          "Jaguar"
        ],
        "correctAnswer": "Jaguar",
        "explanation": "Exemplo prático: \"The jaguar is the largest cat in Brazil.\"",
        "phoneticHint": "/ˈdʒæɡ.wɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Leopard",
        "visualEmoji": "🐆",
        "visualOptions": [
          {
            "text": "Koala",
            "emoji": "🐨",
            "label": "Koala",
            "translationPt": "Coala"
          },
          {
            "text": "Hippopotamus",
            "emoji": "🦛",
            "label": "Hippopotamus",
            "translationPt": "Hipopótamo"
          },
          {
            "text": "Leopard",
            "emoji": "🐆",
            "label": "Leopard",
            "translationPt": "Leopardo"
          },
          {
            "text": "Kangaroo",
            "emoji": "🦘",
            "label": "Kangaroo",
            "translationPt": "Canguru"
          }
        ],
        "options": [
          "Koala",
          "Hippopotamus",
          "Leopard",
          "Kangaroo"
        ],
        "correctAnswer": "Leopard",
        "explanation": "Exemplo prático: \"The leopard climbs trees with ease.\"",
        "phoneticHint": "/ˈlep.ərd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cheetah",
        "visualEmoji": "🐆",
        "visualOptions": [
          {
            "text": "Toucan",
            "emoji": "🦜",
            "label": "Toucan",
            "translationPt": "Tucano"
          },
          {
            "text": "Cheetah",
            "emoji": "🐆",
            "label": "Cheetah",
            "translationPt": "Guepardo"
          },
          {
            "text": "Wolf",
            "emoji": "🐺",
            "label": "Wolf",
            "translationPt": "Lobo"
          },
          {
            "text": "Tiger",
            "emoji": "🐅",
            "label": "Tiger",
            "translationPt": "Tigre"
          }
        ],
        "options": [
          "Toucan",
          "Cheetah",
          "Wolf",
          "Tiger"
        ],
        "correctAnswer": "Cheetah",
        "explanation": "Exemplo prático: \"The cheetah is the fastest land animal.\"",
        "phoneticHint": "/ˈtʃiː.tə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Penguin",
        "visualEmoji": "🐧",
        "visualOptions": [
          {
            "text": "Penguin",
            "emoji": "🐧",
            "label": "Penguin",
            "translationPt": "Pinguim"
          },
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          },
          {
            "text": "Gorilla",
            "emoji": "🦍",
            "label": "Gorilla",
            "translationPt": "Gorila"
          },
          {
            "text": "Deer",
            "emoji": "🦌",
            "label": "Deer",
            "translationPt": "Cervo / Veado"
          }
        ],
        "options": [
          "Penguin",
          "Giraffe",
          "Gorilla",
          "Deer"
        ],
        "correctAnswer": "Penguin",
        "explanation": "Exemplo prático: \"Penguins walk on the snow and swim well.\"",
        "phoneticHint": "/ˈpeŋ.ɡwɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Flamingo",
        "visualEmoji": "🦩",
        "visualOptions": [
          {
            "text": "Snake",
            "emoji": "🐍",
            "label": "Snake",
            "translationPt": "Cobra / Serpente"
          },
          {
            "text": "Monkey",
            "emoji": "🐒",
            "label": "Monkey",
            "translationPt": "Macaco"
          },
          {
            "text": "Jaguar",
            "emoji": "🐆",
            "label": "Jaguar",
            "translationPt": "Onça-pintada"
          },
          {
            "text": "Flamingo",
            "emoji": "🦩",
            "label": "Flamingo",
            "translationPt": "Flamingo"
          }
        ],
        "options": [
          "Snake",
          "Monkey",
          "Jaguar",
          "Flamingo"
        ],
        "correctAnswer": "Flamingo",
        "explanation": "Exemplo prático: \"The pink flamingo has long thin legs.\"",
        "phoneticHint": "/fləˈmɪŋ.ɡoʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Peacock",
        "visualEmoji": "🦚",
        "visualOptions": [
          {
            "text": "Peacock",
            "emoji": "🦚",
            "label": "Peacock",
            "translationPt": "Pavão"
          },
          {
            "text": "Fox",
            "emoji": "🦊",
            "label": "Fox",
            "translationPt": "Raposa"
          },
          {
            "text": "Camel",
            "emoji": "🐪",
            "label": "Camel",
            "translationPt": "Camelo"
          },
          {
            "text": "Leopard",
            "emoji": "🐆",
            "label": "Leopard",
            "translationPt": "Leopardo"
          }
        ],
        "options": [
          "Peacock",
          "Fox",
          "Camel",
          "Leopard"
        ],
        "correctAnswer": "Peacock",
        "explanation": "Exemplo prático: \"The peacock has colorful tail feathers.\"",
        "phoneticHint": "/ˈpiː.kɑːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toucan",
        "visualEmoji": "🦜",
        "visualOptions": [
          {
            "text": "Bear",
            "emoji": "🐻",
            "label": "Bear",
            "translationPt": "Urso"
          },
          {
            "text": "Toucan",
            "emoji": "🦜",
            "label": "Toucan",
            "translationPt": "Tucano"
          },
          {
            "text": "Alligator",
            "emoji": "🐊",
            "label": "Alligator",
            "translationPt": "Jacaré"
          },
          {
            "text": "Cheetah",
            "emoji": "🐆",
            "label": "Cheetah",
            "translationPt": "Guepardo"
          }
        ],
        "options": [
          "Bear",
          "Toucan",
          "Alligator",
          "Cheetah"
        ],
        "correctAnswer": "Toucan",
        "explanation": "Exemplo prático: \"The Brazilian toucan has a big orange beak.\"",
        "phoneticHint": "/ˈtuː.kæn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Macaw",
        "visualEmoji": "🦜",
        "visualOptions": [
          {
            "text": "Macaw",
            "emoji": "🦜",
            "label": "Macaw",
            "translationPt": "Arara"
          },
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
          },
          {
            "text": "Kangaroo",
            "emoji": "🦘",
            "label": "Kangaroo",
            "translationPt": "Canguru"
          },
          {
            "text": "Koala",
            "emoji": "🐨",
            "label": "Koala",
            "translationPt": "Coala"
          }
        ],
        "options": [
          "Macaw",
          "Elephant",
          "Kangaroo",
          "Koala"
        ],
        "correctAnswer": "Macaw",
        "explanation": "Exemplo prático: \"Blue and red macaws fly across the Brazilian sky.\"",
        "phoneticHint": "/məˈkɔː/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p8",
    "worldId": 0,
    "phaseNumber": 8,
    "title": "Rodada 2 • Casa & Objetos II: Cozinha & Eletros",
    "subtitle": "Passo 3/5 da Rodada 2 • 30 utensílios e eletrodomésticos de cozinha",
    "pedagogicalObjective": "Dominar o vocabulário de louças, talheres, panelas e eletrodomésticos.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 3º passo da Rodada 2 aprendemos os objetos da cozinha: Prato (Plate), Copo (Glass), Xícara (Cup), Garfo (Fork), Faca (Knife), Colher (Spoon), Geladeira (Fridge), Fogão (Stove), Liquidificador (Blender) e Panela de Pressão (Pressure Cooker).",
      "Repare que em Knife (/naɪf/) a letra K inicial é muda!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p8-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Plate",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Blender",
            "emoji": "🌪️",
            "label": "Blender",
            "translationPt": "Liquidificador"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa"
          }
        ],
        "options": [
          "Blender",
          "Plate",
          "Bowl",
          "Bottle"
        ],
        "correctAnswer": "Plate",
        "explanation": "Exemplo prático: \"Put the food on a clean white plate.\"",
        "phoneticHint": "/pleɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cup",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Toaster",
            "emoji": "🍞",
            "label": "Toaster",
            "translationPt": "Torradeira"
          },
          {
            "text": "Tin Can",
            "emoji": "🥫",
            "label": "Tin Can",
            "translationPt": "Lata de conserva"
          },
          {
            "text": "Tray",
            "emoji": "🍽️",
            "label": "Tray",
            "translationPt": "Bandeja"
          }
        ],
        "options": [
          "Cup",
          "Toaster",
          "Tin Can",
          "Tray"
        ],
        "correctAnswer": "Cup",
        "explanation": "Exemplo prático: \"A porcelain cup with a handle.\"",
        "phoneticHint": "/kʌp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Glass",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro"
          },
          {
            "text": "Drinking Straw",
            "emoji": "🥤",
            "label": "Drinking Straw",
            "translationPt": "Canudo"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental de cozinha"
          },
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          }
        ],
        "options": [
          "Jar",
          "Drinking Straw",
          "Apron",
          "Glass"
        ],
        "correctAnswer": "Glass",
        "explanation": "Exemplo prático: \"Pour cold water into the drinking glass.\"",
        "phoneticHint": "/ɡlæs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fork",
        "visualEmoji": "🍴",
        "visualOptions": [
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de lavar louça"
          },
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          }
        ],
        "options": [
          "Fork",
          "Sponge",
          "Salt Shaker",
          "Stove"
        ],
        "correctAnswer": "Fork",
        "explanation": "Exemplo prático: \"Use a metal fork to eat your meal.\"",
        "phoneticHint": "/fɔːrk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Knife",
        "visualEmoji": "🔪",
        "visualOptions": [
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          },
          {
            "text": "Coffee Maker",
            "emoji": "☕",
            "label": "Coffee Maker",
            "translationPt": "Cafeteira"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira"
          }
        ],
        "options": [
          "Fridge",
          "Knife",
          "Coffee Maker",
          "Frying Pan"
        ],
        "correctAnswer": "Knife",
        "explanation": "Exemplo prático: \"The chef uses a sharp kitchen knife.\"",
        "phoneticHint": "/naɪf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Spoon",
        "visualEmoji": "🥄",
        "visualOptions": [
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela"
          },
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          }
        ],
        "options": [
          "Cooking Pot",
          "Cup",
          "Spoon",
          "Cutting Board"
        ],
        "correctAnswer": "Spoon",
        "explanation": "Exemplo prático: \"Stir the soup with a metal spoon.\"",
        "phoneticHint": "/spuːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bowl",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira"
          },
          {
            "text": "Kitchen Scale",
            "emoji": "⚖️",
            "label": "Kitchen Scale",
            "translationPt": "Balança de cozinha"
          },
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          }
        ],
        "options": [
          "Kettle",
          "Kitchen Scale",
          "Clothes Iron",
          "Bowl"
        ],
        "correctAnswer": "Bowl",
        "explanation": "Exemplo prático: \"A round ceramic bowl for cereal or soup.\"",
        "phoneticHint": "/boʊl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bottle",
        "visualEmoji": "🍾",
        "visualOptions": [
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          }
        ],
        "options": [
          "Bottle",
          "Fork",
          "Plate",
          "Washing Machine"
        ],
        "correctAnswer": "Bottle",
        "explanation": "Exemplo prático: \"Fill the reusable water bottle.\"",
        "phoneticHint": "/ˈbɑː.təl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Napkin",
        "visualEmoji": "🧻",
        "visualOptions": [
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          },
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Pressure Cooker",
            "emoji": "🍲",
            "label": "Pressure Cooker",
            "translationPt": "Panela de pressão"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Glass",
          "Napkin",
          "Pressure Cooker",
          "Knife"
        ],
        "correctAnswer": "Napkin",
        "explanation": "Exemplo prático: \"Wipe your mouth with a paper napkin.\"",
        "phoneticHint": "/ˈnæp.kɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fridge",
        "visualEmoji": "🧊",
        "visualOptions": [
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de lavar louça"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira"
          },
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          }
        ],
        "options": [
          "Sponge",
          "Spoon",
          "Fridge",
          "Salt Shaker"
        ],
        "correctAnswer": "Fridge",
        "explanation": "Exemplo prático: \"Keep milk and fruit cold inside the fridge.\"",
        "phoneticHint": "/frɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Stove",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Coffee Maker",
            "emoji": "☕",
            "label": "Coffee Maker",
            "translationPt": "Cafeteira"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          }
        ],
        "options": [
          "Cup",
          "Coffee Maker",
          "Frying Pan",
          "Stove"
        ],
        "correctAnswer": "Stove",
        "explanation": "Exemplo prático: \"Cook dinner on the gas kitchen stove.\"",
        "phoneticHint": "/stoʊv/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Microwave",
        "visualEmoji": "⏲️",
        "visualOptions": [
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Micro-ondas"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          }
        ],
        "options": [
          "Microwave",
          "Fork",
          "Bottle",
          "Bowl"
        ],
        "correctAnswer": "Microwave",
        "explanation": "Exemplo prático: \"Heat the food in the microwave oven.\"",
        "phoneticHint": "/ˈmaɪ.krə.weɪv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Blender",
        "visualEmoji": "🌪️",
        "visualOptions": [
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira"
          },
          {
            "text": "Blender",
            "emoji": "🌪️",
            "label": "Blender",
            "translationPt": "Liquidificador"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Napkin",
          "Kettle",
          "Blender",
          "Knife"
        ],
        "correctAnswer": "Blender",
        "explanation": "Exemplo prático: \"Make fresh fruit juice in the electric blender.\"",
        "phoneticHint": "/ˈblen.dər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toaster",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Toaster",
            "emoji": "🍞",
            "label": "Toaster",
            "translationPt": "Torradeira"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental de cozinha"
          },
          {
            "text": "Drinking Straw",
            "emoji": "🥤",
            "label": "Drinking Straw",
            "translationPt": "Canudo"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          }
        ],
        "options": [
          "Toaster",
          "Apron",
          "Drinking Straw",
          "Washing Machine"
        ],
        "correctAnswer": "Toaster",
        "explanation": "Exemplo prático: \"Make warm crispy toast in the toaster.\"",
        "phoneticHint": "/ˈtoʊ.stər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Coffee Maker",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          },
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro"
          },
          {
            "text": "Coffee Maker",
            "emoji": "☕",
            "label": "Coffee Maker",
            "translationPt": "Cafeteira"
          }
        ],
        "options": [
          "Plate",
          "Glass",
          "Jar",
          "Coffee Maker"
        ],
        "correctAnswer": "Coffee Maker",
        "explanation": "Exemplo prático: \"Brew morning coffee in the coffee maker.\"",
        "phoneticHint": "/ˈkɔː.fi ˌmeɪ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Frying Pan",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira"
          },
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira"
          },
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Micro-ondas"
          }
        ],
        "options": [
          "Fridge",
          "Clothes Iron",
          "Frying Pan",
          "Microwave"
        ],
        "correctAnswer": "Frying Pan",
        "explanation": "Exemplo prático: \"Fry the egg in a non-stick frying pan.\"",
        "phoneticHint": "/ˈfraɪ.ɪŋ pæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cooking Pot",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Tin Can",
            "emoji": "🥫",
            "label": "Tin Can",
            "translationPt": "Lata de conserva"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          }
        ],
        "options": [
          "Tin Can",
          "Cooking Pot",
          "Spoon",
          "Stove"
        ],
        "correctAnswer": "Cooking Pot",
        "explanation": "Exemplo prático: \"Boil water for pasta in a cooking pot.\"",
        "phoneticHint": "/ˈkʊk.ɪŋ pɑːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pressure Cooker",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Pressure Cooker",
            "emoji": "🍲",
            "label": "Pressure Cooker",
            "translationPt": "Panela de pressão"
          },
          {
            "text": "Toaster",
            "emoji": "🍞",
            "label": "Toaster",
            "translationPt": "Torradeira"
          },
          {
            "text": "Blender",
            "emoji": "🌪️",
            "label": "Blender",
            "translationPt": "Liquidificador"
          },
          {
            "text": "Tray",
            "emoji": "🍽️",
            "label": "Tray",
            "translationPt": "Bandeja"
          }
        ],
        "options": [
          "Pressure Cooker",
          "Toaster",
          "Blender",
          "Tray"
        ],
        "correctAnswer": "Pressure Cooker",
        "explanation": "Exemplo prático: \"Cook beans quickly in the pressure cooker.\"",
        "phoneticHint": "/ˈpreʃ.ər ˌkʊk.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cutting Board",
        "visualEmoji": "🪵",
        "visualOptions": [
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          },
          {
            "text": "Kitchen Scale",
            "emoji": "⚖️",
            "label": "Kitchen Scale",
            "translationPt": "Balança de cozinha"
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          }
        ],
        "options": [
          "Napkin",
          "Knife",
          "Kitchen Scale",
          "Cutting Board"
        ],
        "correctAnswer": "Cutting Board",
        "explanation": "Exemplo prático: \"Chop vegetables on a wooden cutting board.\"",
        "phoneticHint": "/ˈkʌt.ɪŋ bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sponge",
        "visualEmoji": "🧽",
        "visualOptions": [
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          },
          {
            "text": "Drinking Straw",
            "emoji": "🥤",
            "label": "Drinking Straw",
            "translationPt": "Canudo"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de lavar louça"
          },
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Micro-ondas"
          }
        ],
        "options": [
          "Glass",
          "Drinking Straw",
          "Sponge",
          "Microwave"
        ],
        "correctAnswer": "Sponge",
        "explanation": "Exemplo prático: \"Wash the plates with a yellow and green sponge.\"",
        "phoneticHint": "/spʌndʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Washing Machine",
        "visualEmoji": "🫧",
        "visualOptions": [
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          }
        ],
        "options": [
          "Stove",
          "Washing Machine",
          "Cooking Pot",
          "Spoon"
        ],
        "correctAnswer": "Washing Machine",
        "explanation": "Exemplo prático: \"Wash your clothes in the washing machine.\"",
        "phoneticHint": "/ˈwɑː.ʃɪŋ məˌʃiːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Clothes Iron",
        "visualEmoji": "💨",
        "visualOptions": [
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          },
          {
            "text": "Pressure Cooker",
            "emoji": "🍲",
            "label": "Pressure Cooker",
            "translationPt": "Panela de pressão"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira"
          }
        ],
        "options": [
          "Clothes Iron",
          "Pressure Cooker",
          "Fork",
          "Fridge"
        ],
        "correctAnswer": "Clothes Iron",
        "explanation": "Exemplo prático: \"Press the shirt with a warm clothes iron.\"",
        "phoneticHint": "/ˈkloʊðz ˌaɪ.ərn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kettle",
        "visualEmoji": "🫖",
        "visualOptions": [
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira"
          },
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira"
          }
        ],
        "options": [
          "Cutting Board",
          "Frying Pan",
          "Cup",
          "Kettle"
        ],
        "correctAnswer": "Kettle",
        "explanation": "Exemplo prático: \"Heat water for tea in the kettle.\"",
        "phoneticHint": "/ˈket.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Jar",
        "visualEmoji": "🫙",
        "visualOptions": [
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa"
          },
          {
            "text": "Kitchen Scale",
            "emoji": "⚖️",
            "label": "Kitchen Scale",
            "translationPt": "Balança de cozinha"
          }
        ],
        "options": [
          "Jar",
          "Bowl",
          "Bottle",
          "Kitchen Scale"
        ],
        "correctAnswer": "Jar",
        "explanation": "Exemplo prático: \"Keep cookies or jam inside a glass jar.\"",
        "phoneticHint": "/dʒɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Salt Shaker",
        "visualEmoji": "🧂",
        "visualOptions": [
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          },
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Toaster",
            "emoji": "🍞",
            "label": "Toaster",
            "translationPt": "Torradeira"
          }
        ],
        "options": [
          "Washing Machine",
          "Salt Shaker",
          "Napkin",
          "Toaster"
        ],
        "correctAnswer": "Salt Shaker",
        "explanation": "Exemplo prático: \"Add a pinch of salt from the salt shaker.\"",
        "phoneticHint": "/ˈsɔːlt ˌʃeɪ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Tin Can",
        "visualEmoji": "🥫",
        "visualOptions": [
          {
            "text": "Coffee Maker",
            "emoji": "☕",
            "label": "Coffee Maker",
            "translationPt": "Cafeteira"
          },
          {
            "text": "Blender",
            "emoji": "🌪️",
            "label": "Blender",
            "translationPt": "Liquidificador"
          },
          {
            "text": "Tin Can",
            "emoji": "🥫",
            "label": "Tin Can",
            "translationPt": "Lata de conserva"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela"
          }
        ],
        "options": [
          "Coffee Maker",
          "Blender",
          "Tin Can",
          "Cooking Pot"
        ],
        "correctAnswer": "Tin Can",
        "explanation": "Exemplo prático: \"Open a metal tin can of corn.\"",
        "phoneticHint": "/ˈtɪn kæn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Drinking Straw",
        "visualEmoji": "🥤",
        "visualOptions": [
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Pressure Cooker",
            "emoji": "🍲",
            "label": "Pressure Cooker",
            "translationPt": "Panela de pressão"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de lavar louça"
          },
          {
            "text": "Drinking Straw",
            "emoji": "🥤",
            "label": "Drinking Straw",
            "translationPt": "Canudo"
          }
        ],
        "options": [
          "Plate",
          "Pressure Cooker",
          "Sponge",
          "Drinking Straw"
        ],
        "correctAnswer": "Drinking Straw",
        "explanation": "Exemplo prático: \"Drink the cold juice with a drinking straw.\"",
        "phoneticHint": "/ˈdrɪŋ.kɪŋ strɔː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tray",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Tray",
            "emoji": "🍽️",
            "label": "Tray",
            "translationPt": "Bandeja"
          },
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Micro-ondas"
          },
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          }
        ],
        "options": [
          "Tray",
          "Microwave",
          "Clothes Iron",
          "Cutting Board"
        ],
        "correctAnswer": "Tray",
        "explanation": "Exemplo prático: \"Carry the cups on a serving tray.\"",
        "phoneticHint": "/treɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Apron",
        "visualEmoji": "🎽",
        "visualOptions": [
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental de cozinha"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira"
          },
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro"
          }
        ],
        "options": [
          "Salt Shaker",
          "Apron",
          "Kettle",
          "Jar"
        ],
        "correctAnswer": "Apron",
        "explanation": "Exemplo prático: \"Wear a kitchen apron while cooking.\"",
        "phoneticHint": "/ˈeɪ.prən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Kitchen Scale",
        "visualEmoji": "⚖️",
        "visualOptions": [
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Tin Can",
            "emoji": "🥫",
            "label": "Tin Can",
            "translationPt": "Lata de conserva"
          },
          {
            "text": "Kitchen Scale",
            "emoji": "⚖️",
            "label": "Kitchen Scale",
            "translationPt": "Balança de cozinha"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Napkin",
          "Tin Can",
          "Kitchen Scale",
          "Knife"
        ],
        "correctAnswer": "Kitchen Scale",
        "explanation": "Exemplo prático: \"Weigh the ingredients on the digital kitchen scale.\"",
        "phoneticHint": "/ˈkɪtʃ.ən skeɪl/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p9",
    "worldId": 0,
    "phaseNumber": 9,
    "title": "Rodada 2 • Cotidiano II: Transportes & Trânsito",
    "subtitle": "Passo 4/5 da Rodada 2 • 30 veículos e meios de transporte",
    "pedagogicalObjective": "Reconhecer todos os meios de transporte terrestres, aéreos e marítimos.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 4º passo da Rodada 2 aprendemos os meios de transporte: Carro (Car), Ônibus (Bus), Moto (Motorcycle), Bicicleta (Bicycle), Caminhão (Truck), Avião (Airplane), Helicóptero (Helicopter), Trem (Train) e Metrô (Subway).",
      "Ao concluir este módulo, você fará a Prática com Palavras da Rodada 2!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p9-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco / Veleiro"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete"
          }
        ],
        "options": [
          "Helicopter",
          "Car",
          "Boat",
          "Helmet"
        ],
        "correctAnswer": "Car",
        "explanation": "Exemplo prático: \"Drive the red car carefully on the street.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bus",
        "visualEmoji": "🚌",
        "visualOptions": [
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator"
          }
        ],
        "options": [
          "Train",
          "Taxi",
          "Bus",
          "Tractor"
        ],
        "correctAnswer": "Bus",
        "explanation": "Exemplo prático: \"Take the passenger bus to work.\"",
        "phoneticHint": "/bʌs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Motorcycle",
        "visualEmoji": "🏍️",
        "visualOptions": [
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora de navio"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          }
        ],
        "options": [
          "Ambulance",
          "Anchor",
          "Airplane",
          "Motorcycle"
        ],
        "correctAnswer": "Motorcycle",
        "explanation": "Exemplo prático: \"Always wear a helmet when riding a motorcycle.\"",
        "phoneticHint": "/ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bicycle",
        "visualEmoji": "🚲",
        "visualOptions": [
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô"
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua"
          }
        ],
        "options": [
          "Bicycle",
          "Ship",
          "Subway",
          "Van"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "Exemplo prático: \"Riding a bicycle in the park is great exercise.\"",
        "phoneticHint": "/ˈbaɪ.sɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Truck",
        "visualEmoji": "🚚",
        "visualOptions": [
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível"
          }
        ],
        "options": [
          "Fire Truck",
          "Car",
          "Truck",
          "Fuel Pump"
        ],
        "correctAnswer": "Truck",
        "explanation": "Exemplo prático: \"The cargo truck transports food across Brazil.\"",
        "phoneticHint": "/trʌk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Taxi",
        "visualEmoji": "🚕",
        "visualOptions": [
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Roller Skate",
            "emoji": "🛼",
            "label": "Roller Skate",
            "translationPt": "Patins"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Compass",
            "emoji": "🧭",
            "label": "Compass",
            "translationPt": "Bússola"
          }
        ],
        "options": [
          "Rocket",
          "Roller Skate",
          "Taxi",
          "Compass"
        ],
        "correctAnswer": "Taxi",
        "explanation": "Exemplo prático: \"Take a taxi to the airport.\"",
        "phoneticHint": "/ˈtæk.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Airplane",
        "visualEmoji": "✈️",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete"
          },
          {
            "text": "Skateboard",
            "emoji": "🛹",
            "label": "Skateboard",
            "translationPt": "Skate"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
          }
        ],
        "options": [
          "Scooter",
          "Skateboard",
          "Bus",
          "Airplane"
        ],
        "correctAnswer": "Airplane",
        "explanation": "Exemplo prático: \"The passenger airplane flies above the clouds.\"",
        "phoneticHint": "/ˈer.pleɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Helicopter",
        "visualEmoji": "🚁",
        "visualOptions": [
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu / Roda"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          }
        ],
        "options": [
          "Helicopter",
          "Bicycle",
          "Tire",
          "Traffic Light"
        ],
        "correctAnswer": "Helicopter",
        "explanation": "Exemplo prático: \"The helicopter flies over the city.\"",
        "phoneticHint": "/ˈhel.ɪˌkɑːp.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Train",
        "visualEmoji": "🚆",
        "visualOptions": [
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de carro"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          }
        ],
        "options": [
          "Motorcycle",
          "Steering Wheel",
          "Train",
          "Truck"
        ],
        "correctAnswer": "Train",
        "explanation": "Exemplo prático: \"The passenger train travels on steel rails.\"",
        "phoneticHint": "/treɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Subway",
        "visualEmoji": "🚇",
        "visualOptions": [
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô"
          },
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem"
          },
          {
            "text": "Parachute",
            "emoji": "🪂",
            "label": "Parachute",
            "translationPt": "Paraquedas"
          }
        ],
        "options": [
          "Subway",
          "Police Car",
          "Suitcase",
          "Parachute"
        ],
        "correctAnswer": "Subway",
        "explanation": "Exemplo prático: \"The underground subway train is fast.\"",
        "phoneticHint": "/ˈsʌb.weɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Boat",
        "visualEmoji": "⛵",
        "visualOptions": [
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco / Veleiro"
          }
        ],
        "options": [
          "Fire Truck",
          "Car",
          "Fuel Pump",
          "Boat"
        ],
        "correctAnswer": "Boat",
        "explanation": "Exemplo prático: \"A small boat floats on the water.\"",
        "phoneticHint": "/boʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ship",
        "visualEmoji": "🚢",
        "visualOptions": [
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Roller Skate",
            "emoji": "🛼",
            "label": "Roller Skate",
            "translationPt": "Patins"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          }
        ],
        "options": [
          "Bicycle",
          "Roller Skate",
          "Ship",
          "Bus"
        ],
        "correctAnswer": "Ship",
        "explanation": "Exemplo prático: \"The large cruise ship crosses the ocean.\"",
        "phoneticHint": "/ʃɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ambulance",
        "visualEmoji": "🚑",
        "visualOptions": [
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete"
          }
        ],
        "options": [
          "Rocket",
          "Ambulance",
          "Helicopter",
          "Helmet"
        ],
        "correctAnswer": "Ambulance",
        "explanation": "Exemplo prático: \"Make way for the emergency hospital ambulance.\"",
        "phoneticHint": "/ˈæm.bjə.ləns/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Police Car",
        "visualEmoji": "🚓",
        "visualOptions": [
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora de navio"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          }
        ],
        "options": [
          "Police Car",
          "Airplane",
          "Anchor",
          "Truck"
        ],
        "correctAnswer": "Police Car",
        "explanation": "Exemplo prático: \"The police car has flashing lights on top.\"",
        "phoneticHint": "/pəˈliːs kɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fire Truck",
        "visualEmoji": "🚒",
        "visualOptions": [
          {
            "text": "Parachute",
            "emoji": "🪂",
            "label": "Parachute",
            "translationPt": "Paraquedas"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          }
        ],
        "options": [
          "Parachute",
          "Motorcycle",
          "Taxi",
          "Fire Truck"
        ],
        "correctAnswer": "Fire Truck",
        "explanation": "Exemplo prático: \"The red fire truck carries a tall ladder.\"",
        "phoneticHint": "/ˈfaɪ.ər trʌk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tractor",
        "visualEmoji": "🚜",
        "visualOptions": [
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Compass",
            "emoji": "🧭",
            "label": "Compass",
            "translationPt": "Bússola"
          }
        ],
        "options": [
          "Tractor",
          "Subway",
          "Ship",
          "Compass"
        ],
        "correctAnswer": "Tractor",
        "explanation": "Exemplo prático: \"The farm tractor pulls heavy equipment.\"",
        "phoneticHint": "/ˈtræk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Van",
        "visualEmoji": "🚐",
        "visualOptions": [
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de carro"
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem"
          }
        ],
        "options": [
          "Steering Wheel",
          "Van",
          "Ambulance",
          "Suitcase"
        ],
        "correctAnswer": "Van",
        "explanation": "Exemplo prático: \"The passenger van carries the group to school.\"",
        "phoneticHint": "/væn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Scooter",
        "visualEmoji": "🛴",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco / Veleiro"
          },
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem"
          }
        ],
        "options": [
          "Scooter",
          "Boat",
          "Police Car",
          "Train"
        ],
        "correctAnswer": "Scooter",
        "explanation": "Exemplo prático: \"Kids love riding kick scooters.\"",
        "phoneticHint": "/ˈskuː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Skateboard",
        "visualEmoji": "🛹",
        "visualOptions": [
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu / Roda"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Skateboard",
            "emoji": "🛹",
            "label": "Skateboard",
            "translationPt": "Skate"
          }
        ],
        "options": [
          "Tire",
          "Truck",
          "Taxi",
          "Skateboard"
        ],
        "correctAnswer": "Skateboard",
        "explanation": "Exemplo prático: \"He practices tricks on his four-wheel skateboard.\"",
        "phoneticHint": "/ˈskeɪt.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Roller Skate",
        "visualEmoji": "🛼",
        "visualOptions": [
          {
            "text": "Roller Skate",
            "emoji": "🛼",
            "label": "Roller Skate",
            "translationPt": "Patins"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora de navio"
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator"
          }
        ],
        "options": [
          "Roller Skate",
          "Airplane",
          "Anchor",
          "Tractor"
        ],
        "correctAnswer": "Roller Skate",
        "explanation": "Exemplo prático: \"She glides smoothly on roller skates.\"",
        "phoneticHint": "/ˈroʊ.lər skeɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Helmet",
        "visualEmoji": "⛑️",
        "visualOptions": [
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô"
          }
        ],
        "options": [
          "Van",
          "Helmet",
          "Ship",
          "Subway"
        ],
        "correctAnswer": "Helmet",
        "explanation": "Exemplo prático: \"Protect your head with a safety helmet.\"",
        "phoneticHint": "/ˈhel.mət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Traffic Light",
        "visualEmoji": "🚦",
        "visualOptions": [
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Fire Truck",
          "Scooter",
          "Traffic Light",
          "Car"
        ],
        "correctAnswer": "Traffic Light",
        "explanation": "Exemplo prático: \"Stop the car when the traffic light is red.\"",
        "phoneticHint": "/ˈtræf.ɪk laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Tire",
        "visualEmoji": "🛞",
        "visualOptions": [
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Compass",
            "emoji": "🧭",
            "label": "Compass",
            "translationPt": "Bússola"
          },
          {
            "text": "Skateboard",
            "emoji": "🛹",
            "label": "Skateboard",
            "translationPt": "Skate"
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu / Roda"
          }
        ],
        "options": [
          "Rocket",
          "Compass",
          "Skateboard",
          "Tire"
        ],
        "correctAnswer": "Tire",
        "explanation": "Exemplo prático: \"Check the air pressure in the car tire.\"",
        "phoneticHint": "/ˈtaɪ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Steering Wheel",
        "visualEmoji": "🛞",
        "visualOptions": [
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de carro"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          }
        ],
        "options": [
          "Steering Wheel",
          "Bicycle",
          "Bus",
          "Helicopter"
        ],
        "correctAnswer": "Steering Wheel",
        "explanation": "Exemplo prático: \"Keep both hands on the car steering wheel.\"",
        "phoneticHint": "/ˈstɪr.ɪŋ wiːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fuel Pump",
        "visualEmoji": "⛽",
        "visualOptions": [
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível"
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator"
          }
        ],
        "options": [
          "Train",
          "Helmet",
          "Fuel Pump",
          "Tractor"
        ],
        "correctAnswer": "Fuel Pump",
        "explanation": "Exemplo prático: \"Fill the car tank at the gas station fuel pump.\"",
        "phoneticHint": "/ˈfjuː.əl pʌmp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Suitcase",
        "visualEmoji": "🧳",
        "visualOptions": [
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco / Veleiro"
          }
        ],
        "options": [
          "Suitcase",
          "Ambulance",
          "Traffic Light",
          "Boat"
        ],
        "correctAnswer": "Suitcase",
        "explanation": "Exemplo prático: \"Pack your clothes in a rolling travel suitcase.\"",
        "phoneticHint": "/ˈsuːt.keɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Rocket",
        "visualEmoji": "🚀",
        "visualOptions": [
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua"
          },
          {
            "text": "Skateboard",
            "emoji": "🛹",
            "label": "Skateboard",
            "translationPt": "Skate"
          },
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete"
          },
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          }
        ],
        "options": [
          "Van",
          "Skateboard",
          "Scooter",
          "Rocket"
        ],
        "correctAnswer": "Rocket",
        "explanation": "Exemplo prático: \"The space rocket blasts into orbit.\"",
        "phoneticHint": "/ˈrɑː.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Parachute",
        "visualEmoji": "🪂",
        "visualOptions": [
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
          {
            "text": "Parachute",
            "emoji": "🪂",
            "label": "Parachute",
            "translationPt": "Paraquedas"
          },
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de carro"
          }
        ],
        "options": [
          "Police Car",
          "Motorcycle",
          "Parachute",
          "Steering Wheel"
        ],
        "correctAnswer": "Parachute",
        "explanation": "Exemplo prático: \"The colorful parachute opens in the sky.\"",
        "phoneticHint": "/ˈpær.ə.ʃuːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Anchor",
        "visualEmoji": "⚓",
        "visualOptions": [
          {
            "text": "Roller Skate",
            "emoji": "🛼",
            "label": "Roller Skate",
            "translationPt": "Patins"
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu / Roda"
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora de navio"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível"
          }
        ],
        "options": [
          "Roller Skate",
          "Tire",
          "Anchor",
          "Fuel Pump"
        ],
        "correctAnswer": "Anchor",
        "explanation": "Exemplo prático: \"The ship drops its heavy metal anchor.\"",
        "phoneticHint": "/ˈæŋ.kər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Compass",
        "visualEmoji": "🧭",
        "visualOptions": [
          {
            "text": "Compass",
            "emoji": "🧭",
            "label": "Compass",
            "translationPt": "Bússola"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          }
        ],
        "options": [
          "Compass",
          "Traffic Light",
          "Suitcase",
          "Helicopter"
        ],
        "correctAnswer": "Compass",
        "explanation": "Exemplo prático: \"The compass needle always points north.\"",
        "phoneticHint": "/ˈkʌm.pəs/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p10",
    "worldId": 0,
    "phaseNumber": 10,
    "title": "Prática da Rodada 2: Palavras & Associações Simples",
    "subtitle": "Passo 5/5 da Rodada 2 • 12 exercícios simples com as palavras aprendidas",
    "pedagogicalObjective": "Consolidar na prática as palavras aprendidas nos 4 módulos da Rodada 2 (Alimentos, Animais, Casa e Cotidiano) com associações simples e diretas.",
    "type": "chest",
    "icon": "gift",
    "cefrLevel": "A1",
    "theorySummary": [
      "Parabéns por completar os 4 módulos visuais da Rodada 2 (Alimentos, Animais, Casa e Cotidiano)!",
      "Agora vamos praticar as palavras aprendidas com combinações curtas, simples e de fácil associação.",
      "Ouça cada expressão em inglês americano e escolha ou monte a resposta correta!"
    ],
    "xpReward": 60,
    "gemsReward": 25,
    "exercises": [
      {
        "id": "w0-p10-e1",
        "type": "multiple-choice",
        "visualEmoji": "🍅",
        "prompt": "O que significa \"Fresh tomato\" em português?",
        "audioPhrase": "Fresh tomato",
        "options": [
          "Tomate fresco",
          "Batata assada",
          "Cenoura laranja",
          "Alface verde"
        ],
        "correctAnswer": "Tomate fresco",
        "explanation": "\"Fresh tomato\" = \"Tomate fresco\". Associação simples e direta!",
        "phoneticHint": "/freʃ təˈmeɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e2",
        "type": "word-order",
        "visualEmoji": "🥕",
        "prompt": "Monte em inglês: \"Cenoura laranja\" (usando o vocabulário da Rodada 2):",
        "audioPhrase": "Orange carrot",
        "options": [
          "carrot",
          "Orange",
          "potato"
        ],
        "correctAnswer": "Orange carrot",
        "explanation": "\"Orange carrot\" significa \"Cenoura laranja\".",
        "phoneticHint": "/ˈɔːr.ɪndʒ ˈkær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e3",
        "type": "multiple-choice",
        "visualEmoji": "🌽",
        "prompt": "O que significa \"Sweet corn\" em português?",
        "audioPhrase": "Sweet corn",
        "options": [
          "Milho doce",
          "Cebola branca",
          "Pepino verde",
          "Abóbora grande"
        ],
        "correctAnswer": "Milho doce",
        "explanation": "\"Sweet corn\" = \"Milho doce\". Associação simples e direta!",
        "phoneticHint": "/swiːt kɔːrn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e4",
        "type": "multiple-choice",
        "visualEmoji": "🦁",
        "prompt": "O que significa \"Strong lion\" em português?",
        "audioPhrase": "Strong lion",
        "options": [
          "Leão forte",
          "Tigre rápido",
          "Elefante grande",
          "Macaco esperto"
        ],
        "correctAnswer": "Leão forte",
        "explanation": "\"Strong lion\" = \"Leão forte\". Associação simples e direta!",
        "phoneticHint": "/strɔːŋ ˈlaɪ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e5",
        "type": "word-order",
        "visualEmoji": "🦒",
        "prompt": "Monte em inglês: \"Girafa alta\" (usando o vocabulário da Rodada 2):",
        "audioPhrase": "Tall giraffe",
        "options": [
          "giraffe",
          "Tall",
          "zebra"
        ],
        "correctAnswer": "Tall giraffe",
        "explanation": "\"Tall giraffe\" significa \"Girafa alta\".",
        "phoneticHint": "/tɔːl dʒɪˈræf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e6",
        "type": "multiple-choice",
        "visualEmoji": "🐘",
        "prompt": "O que significa \"Big elephant\" em português?",
        "audioPhrase": "Big elephant",
        "options": [
          "Elefante grande",
          "Urso pardo",
          "Jacaré verde",
          " Tucano colorido"
        ],
        "correctAnswer": "Elefante grande",
        "explanation": "\"Big elephant\" = \"Elefante grande\". Associação simples e direta!",
        "phoneticHint": "/bɪɡ ˈel.ɪ.fənt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e7",
        "type": "multiple-choice",
        "visualEmoji": "🍽️",
        "prompt": "O que significa \"Clean plate\" em português?",
        "audioPhrase": "Clean plate",
        "options": [
          "Prato limpo",
          "Copo cheio",
          "Garfo de metal",
          "Panela grande"
        ],
        "correctAnswer": "Prato limpo",
        "explanation": "\"Clean plate\" = \"Prato limpo\". Associação simples e direta!",
        "phoneticHint": "/kliːn pleɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e8",
        "type": "word-order",
        "visualEmoji": "🥛",
        "prompt": "Monte em inglês: \"Copo gelado\" (usando o vocabulário da Rodada 2):",
        "audioPhrase": "Cold glass",
        "options": [
          "glass",
          "Cold",
          "cup"
        ],
        "correctAnswer": "Cold glass",
        "explanation": "\"Cold glass\" significa \"Copo gelado\".",
        "phoneticHint": "/koʊld ɡlæs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e9",
        "type": "multiple-choice",
        "visualEmoji": "🧊",
        "prompt": "O que significa \"Big fridge\" em português?",
        "audioPhrase": "Big fridge",
        "options": [
          "Geladeira grande",
          "Fogão novo",
          "Micro-ondas rápido",
          "Liquidificador forte"
        ],
        "correctAnswer": "Geladeira grande",
        "explanation": "\"Big fridge\" = \"Geladeira grande\". Associação simples e direta!",
        "phoneticHint": "/bɪɡ frɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e10",
        "type": "multiple-choice",
        "visualEmoji": "🚗",
        "prompt": "O que significa \"Red car\" em português?",
        "audioPhrase": "Red car",
        "options": [
          "Carro vermelho",
          "Ônibus azul",
          "Bicicleta nova",
          "Trem rápido"
        ],
        "correctAnswer": "Carro vermelho",
        "explanation": "\"Red car\" = \"Carro vermelho\". Associação simples e direta!",
        "phoneticHint": "/red kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e11",
        "type": "word-order",
        "visualEmoji": "🚌",
        "prompt": "Monte em inglês: \"Ônibus da cidade\" (usando o vocabulário da Rodada 2):",
        "audioPhrase": "City bus",
        "options": [
          "bus",
          "City",
          "car"
        ],
        "correctAnswer": "City bus",
        "explanation": "\"City bus\" significa \"Ônibus da cidade\".",
        "phoneticHint": "/ˈsɪt.i bʌs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e12",
        "type": "multiple-choice",
        "visualEmoji": "✈️",
        "prompt": "O que significa \"Fast airplane\" em português?",
        "audioPhrase": "Fast airplane",
        "options": [
          "Avião rápido",
          "Navio grande",
          "Moto preta",
          "Caminhão pesado"
        ],
        "correctAnswer": "Avião rápido",
        "explanation": "\"Fast airplane\" = \"Avião rápido\". Associação simples e direta!",
        "phoneticHint": "/fæst ˈer.pleɪn/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p11",
    "worldId": 0,
    "phaseNumber": 11,
    "title": "Rodada 3 • Alimentos III: Refeições & Pratos",
    "subtitle": "Passo 1/5 da Rodada 3 • 30 comidas e pratos presentes no dia a dia",
    "pedagogicalObjective": "Reconhecer pães, carnes, laticínios e refeições completas em inglês.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Começamos a Rodada 3 com as 30 refeições e comidas prontas mais conhecidas no Brasil!",
      "Inclui Pão (Bread), Arroz (Rice), Feijão (Beans), Ovo (Egg), Queijo (Cheese), Frango Assado (Roast Chicken), Bife (Steak), Macarrão (Pasta), Pizza, Hambúrguer e Pão de Queijo (Cheese Bread).",
      "Todas as imagens mostram o prato inteiro e bem visível."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p11-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Hot Dog",
            "emoji": "🌭",
            "label": "Hot Dog",
            "translationPt": "Cachorro-quente"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          }
        ],
        "options": [
          "Hot Dog",
          "Bread",
          "Ham",
          "Hamburger"
        ],
        "correctAnswer": "Bread",
        "explanation": "Exemplo prático: \"Warm fresh bread smells amazing.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
        "visualOptions": [
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz branco"
          },
          {
            "text": "Toast",
            "emoji": "🍞",
            "label": "Toast",
            "translationPt": "Torrada"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Bacon",
            "emoji": "🥓",
            "label": "Bacon",
            "translationPt": "Bacon"
          }
        ],
        "options": [
          "Rice",
          "Toast",
          "Butter",
          "Bacon"
        ],
        "correctAnswer": "Rice",
        "explanation": "Exemplo prático: \"White rice is served every day in Brazil.\"",
        "phoneticHint": "/raɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Beans",
        "visualEmoji": "🫘",
        "visualOptions": [
          {
            "text": "Barbecue",
            "emoji": "🍖",
            "label": "Barbecue",
            "translationPt": "Churrasco / Espetinho"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango assado"
          },
          {
            "text": "Omelet",
            "emoji": "🍳",
            "label": "Omelet",
            "translationPt": "Omelete"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          }
        ],
        "options": [
          "Barbecue",
          "Roast Chicken",
          "Omelet",
          "Beans"
        ],
        "correctAnswer": "Beans",
        "explanation": "Exemplo prático: \"Rice and beans are the classic Brazilian meal.\"",
        "phoneticHint": "/biːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Egg",
        "visualEmoji": "🥚",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche natural"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa"
          },
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Bife / Carne grelhada"
          }
        ],
        "options": [
          "Egg",
          "Sandwich",
          "Soup",
          "Steak"
        ],
        "correctAnswer": "Egg",
        "explanation": "Exemplo prático: \"I eat a fried egg for breakfast.\"",
        "phoneticHint": "/eɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          }
        ],
        "options": [
          "Cheese Bread",
          "Cheese",
          "Fish Fillet",
          "French Fries"
        ],
        "correctAnswer": "Cheese",
        "explanation": "Exemplo prático: \"Yellow cheese tastes great on bread.\"",
        "phoneticHint": "/tʃiːz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Butter",
        "visualEmoji": "🧈",
        "visualOptions": [
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz branco"
          },
          {
            "text": "Lasagna",
            "emoji": "🍝",
            "label": "Lasagna",
            "translationPt": "Lasanha"
          },
          {
            "text": "Croissant",
            "emoji": "🥐",
            "label": "Croissant",
            "translationPt": "Croissant"
          }
        ],
        "options": [
          "Butter",
          "Rice",
          "Lasagna",
          "Croissant"
        ],
        "correctAnswer": "Butter",
        "explanation": "Exemplo prático: \"Spread butter on the warm toast.\"",
        "phoneticHint": "/ˈbʌt.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ham",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada"
          },
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto"
          }
        ],
        "options": [
          "Bread",
          "Beans",
          "Salad",
          "Ham"
        ],
        "correctAnswer": "Ham",
        "explanation": "Exemplo prático: \"A sandwich with cheese and ham.\"",
        "phoneticHint": "/hæm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Roast Chicken",
        "visualEmoji": "🍗",
        "visualOptions": [
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango assado"
          },
          {
            "text": "Sausage",
            "emoji": "🌭",
            "label": "Sausage",
            "translationPt": "Linguiça / Salsicha"
          },
          {
            "text": "Shrimp",
            "emoji": "🍤",
            "label": "Shrimp",
            "translationPt": "Camarão"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Roast Chicken",
          "Sausage",
          "Shrimp",
          "Egg"
        ],
        "correctAnswer": "Roast Chicken",
        "explanation": "Exemplo prático: \"Roast chicken is a Sunday lunch classic.\"",
        "phoneticHint": "/ˈroʊst ˈtʃɪk.ɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Steak",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Mashed Potatoes",
            "emoji": "🥔",
            "label": "Mashed Potatoes",
            "translationPt": "Purê de batata"
          },
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Bife / Carne grelhada"
          },
          {
            "text": "Sushi",
            "emoji": "🍣",
            "label": "Sushi",
            "translationPt": "Sushi"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          }
        ],
        "options": [
          "Mashed Potatoes",
          "Steak",
          "Sushi",
          "Cheese"
        ],
        "correctAnswer": "Steak",
        "explanation": "Exemplo prático: \"He cooked a juicy beef steak on the grill.\"",
        "phoneticHint": "/steɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fish Fillet",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche natural"
          },
          {
            "text": "Pancake",
            "emoji": "🥞",
            "label": "Pancake",
            "translationPt": "Panqueca"
          },
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa"
          }
        ],
        "options": [
          "Sandwich",
          "Pancake",
          "Fish Fillet",
          "Soup"
        ],
        "correctAnswer": "Fish Fillet",
        "explanation": "Exemplo prático: \"Grilled fish fillet with lemon.\"",
        "phoneticHint": "/ˈfɪʃ fɪˈleɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pasta",
        "visualEmoji": "🍝",
        "visualOptions": [
          {
            "text": "Lasagna",
            "emoji": "🍝",
            "label": "Lasagna",
            "translationPt": "Lasanha"
          },
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          },
          {
            "text": "Omelet",
            "emoji": "🍳",
            "label": "Omelet",
            "translationPt": "Omelete"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão / Espaguete"
          }
        ],
        "options": [
          "Lasagna",
          "Cheese Bread",
          "Omelet",
          "Pasta"
        ],
        "correctAnswer": "Pasta",
        "explanation": "Exemplo prático: \"Italian spaghetti pasta with tomato sauce.\"",
        "phoneticHint": "/ˈpɑː.stə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Pizza",
          "Butter",
          "Beans",
          "Bread"
        ],
        "correctAnswer": "Pizza",
        "explanation": "Exemplo prático: \"We shared a delicious cheese pizza.\"",
        "phoneticHint": "/ˈpiːt.sə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hamburger",
        "visualEmoji": "🍔",
        "visualOptions": [
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto"
          },
          {
            "text": "Bacon",
            "emoji": "🥓",
            "label": "Bacon",
            "translationPt": "Bacon"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Ham",
          "Bacon",
          "Hamburger",
          "Egg"
        ],
        "correctAnswer": "Hamburger",
        "explanation": "Exemplo prático: \"A juicy hamburger with cheese and lettuce.\"",
        "phoneticHint": "/ˈhæmˌbɜːr.ɡər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "French Fries",
        "visualEmoji": "🍟",
        "visualOptions": [
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Barbecue",
            "emoji": "🍖",
            "label": "Barbecue",
            "translationPt": "Churrasco / Espetinho"
          },
          {
            "text": "Toast",
            "emoji": "🍞",
            "label": "Toast",
            "translationPt": "Torrada"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz branco"
          }
        ],
        "options": [
          "French Fries",
          "Barbecue",
          "Toast",
          "Rice"
        ],
        "correctAnswer": "French Fries",
        "explanation": "Exemplo prático: \"Crispy golden French fries.\"",
        "phoneticHint": "/ˈfrentʃ fraɪz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hot Dog",
        "visualEmoji": "🌭",
        "visualOptions": [
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão / Espaguete"
          },
          {
            "text": "Mashed Potatoes",
            "emoji": "🥔",
            "label": "Mashed Potatoes",
            "translationPt": "Purê de batata"
          },
          {
            "text": "Pancake",
            "emoji": "🥞",
            "label": "Pancake",
            "translationPt": "Panqueca"
          },
          {
            "text": "Hot Dog",
            "emoji": "🌭",
            "label": "Hot Dog",
            "translationPt": "Cachorro-quente"
          }
        ],
        "options": [
          "Pasta",
          "Mashed Potatoes",
          "Pancake",
          "Hot Dog"
        ],
        "correctAnswer": "Hot Dog",
        "explanation": "Exemplo prático: \"A warm hot dog in a soft bun.\"",
        "phoneticHint": "/ˈhɑːt dɔːɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sandwich",
        "visualEmoji": "🥪",
        "visualOptions": [
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche natural"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          }
        ],
        "options": [
          "Sandwich",
          "Cheese",
          "Fish Fillet",
          "Pizza"
        ],
        "correctAnswer": "Sandwich",
        "explanation": "Exemplo prático: \"She packed a sandwich for lunch.\"",
        "phoneticHint": "/ˈsæn.wɪtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cheese Bread",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango assado"
          },
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Bife / Carne grelhada"
          },
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          },
          {
            "text": "Croissant",
            "emoji": "🥐",
            "label": "Croissant",
            "translationPt": "Croissant"
          }
        ],
        "options": [
          "Roast Chicken",
          "Steak",
          "Cheese Bread",
          "Croissant"
        ],
        "correctAnswer": "Cheese Bread",
        "explanation": "Exemplo prático: \"Warm Brazilian cheese bread is delicious.\"",
        "phoneticHint": "/ˈtʃiːz bred/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Soup",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa"
          },
          {
            "text": "Shrimp",
            "emoji": "🍤",
            "label": "Shrimp",
            "translationPt": "Camarão"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Sushi",
            "emoji": "🍣",
            "label": "Sushi",
            "translationPt": "Sushi"
          }
        ],
        "options": [
          "Soup",
          "Shrimp",
          "French Fries",
          "Sushi"
        ],
        "correctAnswer": "Soup",
        "explanation": "Exemplo prático: \"Hot vegetable soup in a bowl.\"",
        "phoneticHint": "/suːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Salad",
        "visualEmoji": "🥗",
        "visualOptions": [
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão / Espaguete"
          },
          {
            "text": "Hot Dog",
            "emoji": "🌭",
            "label": "Hot Dog",
            "translationPt": "Cachorro-quente"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada"
          }
        ],
        "options": [
          "Hamburger",
          "Pasta",
          "Hot Dog",
          "Salad"
        ],
        "correctAnswer": "Salad",
        "explanation": "Exemplo prático: \"A fresh green salad with tomatoes.\"",
        "phoneticHint": "/ˈsæl.əd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sausage",
        "visualEmoji": "🌭",
        "visualOptions": [
          {
            "text": "Toast",
            "emoji": "🍞",
            "label": "Toast",
            "translationPt": "Torrada"
          },
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto"
          },
          {
            "text": "Sausage",
            "emoji": "🌭",
            "label": "Sausage",
            "translationPt": "Linguiça / Salsicha"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          }
        ],
        "options": [
          "Toast",
          "Ham",
          "Sausage",
          "Pizza"
        ],
        "correctAnswer": "Sausage",
        "explanation": "Exemplo prático: \"Grilled sausage for the barbecue.\"",
        "phoneticHint": "/ˈsɔː.sɪdʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bacon",
        "visualEmoji": "🥓",
        "visualOptions": [
          {
            "text": "Mashed Potatoes",
            "emoji": "🥔",
            "label": "Mashed Potatoes",
            "translationPt": "Purê de batata"
          },
          {
            "text": "Bacon",
            "emoji": "🥓",
            "label": "Bacon",
            "translationPt": "Bacon"
          },
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Bife / Carne grelhada"
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche natural"
          }
        ],
        "options": [
          "Mashed Potatoes",
          "Bacon",
          "Steak",
          "Sandwich"
        ],
        "correctAnswer": "Bacon",
        "explanation": "Exemplo prático: \"Crispy strips of fried bacon.\"",
        "phoneticHint": "/ˈbeɪ.kən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Omelet",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Omelet",
            "emoji": "🍳",
            "label": "Omelet",
            "translationPt": "Omelete"
          },
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          }
        ],
        "options": [
          "Omelet",
          "Fish Fillet",
          "French Fries",
          "Cheese"
        ],
        "correctAnswer": "Omelet",
        "explanation": "Exemplo prático: \"A fluffy yellow egg omelet.\"",
        "phoneticHint": "/ˈɑːm.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pancake",
        "visualEmoji": "🥞",
        "visualOptions": [
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz branco"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango assado"
          },
          {
            "text": "Pancake",
            "emoji": "🥞",
            "label": "Pancake",
            "translationPt": "Panqueca"
          }
        ],
        "options": [
          "Salad",
          "Rice",
          "Roast Chicken",
          "Pancake"
        ],
        "correctAnswer": "Pancake",
        "explanation": "Exemplo prático: \"Stack of pancakes with syrup.\"",
        "phoneticHint": "/ˈpæn.keɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lasagna",
        "visualEmoji": "🍝",
        "visualOptions": [
          {
            "text": "Lasagna",
            "emoji": "🍝",
            "label": "Lasagna",
            "translationPt": "Lasanha"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Hot Dog",
            "emoji": "🌭",
            "label": "Hot Dog",
            "translationPt": "Cachorro-quente"
          },
          {
            "text": "Sausage",
            "emoji": "🌭",
            "label": "Sausage",
            "translationPt": "Linguiça / Salsicha"
          }
        ],
        "options": [
          "Lasagna",
          "Hamburger",
          "Hot Dog",
          "Sausage"
        ],
        "correctAnswer": "Lasagna",
        "explanation": "Exemplo prático: \"Baked cheese lasagna is a family favorite.\"",
        "phoneticHint": "/ləˈzɑːn.jə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Barbecue",
        "visualEmoji": "🍖",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          },
          {
            "text": "Barbecue",
            "emoji": "🍖",
            "label": "Barbecue",
            "translationPt": "Churrasco / Espetinho"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Egg",
          "Barbecue",
          "Beans",
          "Bread"
        ],
        "correctAnswer": "Barbecue",
        "explanation": "Exemplo prático: \"Brazilian barbecue meat on skewers.\"",
        "phoneticHint": "/ˈbɑːr.bɪ.kjuː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Shrimp",
        "visualEmoji": "🍤",
        "visualOptions": [
          {
            "text": "Bacon",
            "emoji": "🥓",
            "label": "Bacon",
            "translationPt": "Bacon"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Shrimp",
            "emoji": "🍤",
            "label": "Shrimp",
            "translationPt": "Camarão"
          },
          {
            "text": "Omelet",
            "emoji": "🍳",
            "label": "Omelet",
            "translationPt": "Omelete"
          }
        ],
        "options": [
          "Bacon",
          "Butter",
          "Shrimp",
          "Omelet"
        ],
        "correctAnswer": "Shrimp",
        "explanation": "Exemplo prático: \"Cooked pink shrimp with lemon.\"",
        "phoneticHint": "/ʃrɪmp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sushi",
        "visualEmoji": "🍣",
        "visualOptions": [
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão / Espaguete"
          },
          {
            "text": "Sushi",
            "emoji": "🍣",
            "label": "Sushi",
            "translationPt": "Sushi"
          }
        ],
        "options": [
          "Soup",
          "Salad",
          "Pasta",
          "Sushi"
        ],
        "correctAnswer": "Sushi",
        "explanation": "Exemplo prático: \"Fresh salmon sushi rolls.\"",
        "phoneticHint": "/ˈsuː.ʃi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Croissant",
        "visualEmoji": "🥐",
        "visualOptions": [
          {
            "text": "Croissant",
            "emoji": "🥐",
            "label": "Croissant",
            "translationPt": "Croissant"
          },
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          },
          {
            "text": "Sausage",
            "emoji": "🌭",
            "label": "Sausage",
            "translationPt": "Linguiça / Salsicha"
          },
          {
            "text": "Lasagna",
            "emoji": "🍝",
            "label": "Lasagna",
            "translationPt": "Lasanha"
          }
        ],
        "options": [
          "Croissant",
          "Cheese Bread",
          "Sausage",
          "Lasagna"
        ],
        "correctAnswer": "Croissant",
        "explanation": "Exemplo prático: \"A golden butter croissant from the bakery.\"",
        "phoneticHint": "/krwɑːˈsɑːnt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toast",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Barbecue",
            "emoji": "🍖",
            "label": "Barbecue",
            "translationPt": "Churrasco / Espetinho"
          },
          {
            "text": "Toast",
            "emoji": "🍞",
            "label": "Toast",
            "translationPt": "Torrada"
          },
          {
            "text": "Pancake",
            "emoji": "🥞",
            "label": "Pancake",
            "translationPt": "Panqueca"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          }
        ],
        "options": [
          "Barbecue",
          "Toast",
          "Pancake",
          "Pizza"
        ],
        "correctAnswer": "Toast",
        "explanation": "Exemplo prático: \"Crispy toasted bread for breakfast.\"",
        "phoneticHint": "/toʊst/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Mashed Potatoes",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto"
          },
          {
            "text": "Shrimp",
            "emoji": "🍤",
            "label": "Shrimp",
            "translationPt": "Camarão"
          },
          {
            "text": "Mashed Potatoes",
            "emoji": "🥔",
            "label": "Mashed Potatoes",
            "translationPt": "Purê de batata"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          }
        ],
        "options": [
          "Ham",
          "Shrimp",
          "Mashed Potatoes",
          "Hamburger"
        ],
        "correctAnswer": "Mashed Potatoes",
        "explanation": "Exemplo prático: \"Creamy mashed potatoes in a bowl.\"",
        "phoneticHint": "/ˌmæʃt pəˈteɪ.toʊz/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p12",
    "worldId": 0,
    "phaseNumber": 12,
    "title": "Rodada 3 • Animais III: Marinhos, Aves & Fauna",
    "subtitle": "Passo 2/5 da Rodada 3 • 30 animais do mar e da natureza conhecidos pelo público",
    "pedagogicalObjective": "Reconhecer animais marinhos famosos, aves conhecidas e animais típicos da fauna brasileira.",
    "type": "lesson",
    "icon": "dog",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 2º passo da Rodada 3 estudamos os animais do mar e da fauna brasileira que todo mundo conhece.",
      "Inclui Tubarão (Shark), Baleia (Whale), Golfinho (Dolphin), Polvo (Octopus), Águia (Eagle), Coruja (Owl), Beija-flor (Hummingbird), Capivara (Capybara), Bicho-preguiça (Sloth), Tamanduá (Anteater) e Tatu (Armadillo)."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p12-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shark",
        "visualEmoji": "🦈",
        "visualOptions": [
          {
            "text": "Hawk",
            "emoji": "🦅",
            "label": "Hawk",
            "translationPt": "Gavião / Falcão"
          },
          {
            "text": "Shark",
            "emoji": "🦈",
            "label": "Shark",
            "translationPt": "Tubarão"
          },
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          },
          {
            "text": "Hummingbird",
            "emoji": "🐦",
            "label": "Hummingbird",
            "translationPt": "Beija-flor"
          }
        ],
        "options": [
          "Hawk",
          "Shark",
          "Eagle",
          "Hummingbird"
        ],
        "correctAnswer": "Shark",
        "explanation": "Exemplo prático: \"The great shark swims in the ocean.\"",
        "phoneticHint": "/ʃɑːrk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Whale",
        "visualEmoji": "🐋",
        "visualOptions": [
          {
            "text": "Owl",
            "emoji": "🦉",
            "label": "Owl",
            "translationPt": "Coruja"
          },
          {
            "text": "Bat",
            "emoji": "🦇",
            "label": "Bat",
            "translationPt": "Morcego"
          },
          {
            "text": "Whale",
            "emoji": "🐋",
            "label": "Whale",
            "translationPt": "Baleia"
          },
          {
            "text": "Ostrich",
            "emoji": "🐦",
            "label": "Ostrich",
            "translationPt": "Avestruz / Ema"
          }
        ],
        "options": [
          "Owl",
          "Bat",
          "Whale",
          "Ostrich"
        ],
        "correctAnswer": "Whale",
        "explanation": "Exemplo prático: \"The whale is the biggest animal in the sea.\"",
        "phoneticHint": "/weɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Dolphin",
        "visualEmoji": "🐬",
        "visualOptions": [
          {
            "text": "Anteater",
            "emoji": "🐜",
            "label": "Anteater",
            "translationPt": "Tamanduá"
          },
          {
            "text": "Armadillo",
            "emoji": "🦔",
            "label": "Armadillo",
            "translationPt": "Tatu"
          },
          {
            "text": "Jellyfish",
            "emoji": "🪼",
            "label": "Jellyfish",
            "translationPt": "Água-viva"
          },
          {
            "text": "Dolphin",
            "emoji": "🐬",
            "label": "Dolphin",
            "translationPt": "Golfinho"
          }
        ],
        "options": [
          "Anteater",
          "Armadillo",
          "Jellyfish",
          "Dolphin"
        ],
        "correctAnswer": "Dolphin",
        "explanation": "Exemplo prático: \"Friendly dolphins jump out of the water.\"",
        "phoneticHint": "/ˈdɑːl.fɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Octopus",
        "visualEmoji": "🐙",
        "visualOptions": [
          {
            "text": "Octopus",
            "emoji": "🐙",
            "label": "Octopus",
            "translationPt": "Polvo"
          },
          {
            "text": "Sea Turtle",
            "emoji": "🐢",
            "label": "Sea Turtle",
            "translationPt": "Tartaruga-marinha"
          },
          {
            "text": "Swan",
            "emoji": "🦢",
            "label": "Swan",
            "translationPt": "Cisne"
          },
          {
            "text": "Seal",
            "emoji": "🦭",
            "label": "Seal",
            "translationPt": "Foca"
          }
        ],
        "options": [
          "Octopus",
          "Sea Turtle",
          "Swan",
          "Seal"
        ],
        "correctAnswer": "Octopus",
        "explanation": "Exemplo prático: \"An octopus has eight tentacles.\"",
        "phoneticHint": "/ˈɑːk.tə.pəs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Crab",
        "visualEmoji": "🦀",
        "visualOptions": [
          {
            "text": "Iguana",
            "emoji": "🦎",
            "label": "Iguana",
            "translationPt": "Iguana"
          },
          {
            "text": "Crab",
            "emoji": "🦀",
            "label": "Crab",
            "translationPt": "Caranguejo / Siri"
          },
          {
            "text": "Capybara",
            "emoji": "🐹",
            "label": "Capybara",
            "translationPt": "Capivara"
          },
          {
            "text": "Clownfish",
            "emoji": "🐠",
            "label": "Clownfish",
            "translationPt": "Peixe-palhaço"
          }
        ],
        "options": [
          "Iguana",
          "Crab",
          "Capybara",
          "Clownfish"
        ],
        "correctAnswer": "Crab",
        "explanation": "Exemplo prático: \"The red crab walks on the beach sand.\"",
        "phoneticHint": "/kræb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Starfish",
        "visualEmoji": "⭐",
        "visualOptions": [
          {
            "text": "Chameleon",
            "emoji": "🦎",
            "label": "Chameleon",
            "translationPt": "Camaleão"
          },
          {
            "text": "Lizard",
            "emoji": "🦎",
            "label": "Lizard",
            "translationPt": "Lagarto / Lagartixa"
          },
          {
            "text": "Starfish",
            "emoji": "⭐",
            "label": "Starfish",
            "translationPt": "Estrela-do-mar"
          },
          {
            "text": "Caterpillar",
            "emoji": "🐛",
            "label": "Caterpillar",
            "translationPt": "Lagarta"
          }
        ],
        "options": [
          "Chameleon",
          "Lizard",
          "Starfish",
          "Caterpillar"
        ],
        "correctAnswer": "Starfish",
        "explanation": "Exemplo prático: \"A five-pointed starfish on the ocean floor.\"",
        "phoneticHint": "/ˈstɑːr.fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Seahorse",
        "visualEmoji": "🐠",
        "visualOptions": [
          {
            "text": "Sloth",
            "emoji": "🦥",
            "label": "Sloth",
            "translationPt": "Bicho-preguiça"
          },
          {
            "text": "Squirrel",
            "emoji": "🐿️",
            "label": "Squirrel",
            "translationPt": "Esquilo"
          },
          {
            "text": "Shark",
            "emoji": "🦈",
            "label": "Shark",
            "translationPt": "Tubarão"
          },
          {
            "text": "Seahorse",
            "emoji": "🐠",
            "label": "Seahorse",
            "translationPt": "Cavalo-marinho"
          }
        ],
        "options": [
          "Sloth",
          "Squirrel",
          "Shark",
          "Seahorse"
        ],
        "correctAnswer": "Seahorse",
        "explanation": "Exemplo prático: \"The tiny seahorse curls its tail.\"",
        "phoneticHint": "/ˈsiː.hɔːrs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Jellyfish",
        "visualEmoji": "🪼",
        "visualOptions": [
          {
            "text": "Jellyfish",
            "emoji": "🪼",
            "label": "Jellyfish",
            "translationPt": "Água-viva"
          },
          {
            "text": "Octopus",
            "emoji": "🐙",
            "label": "Octopus",
            "translationPt": "Polvo"
          },
          {
            "text": "Woodpecker",
            "emoji": "🐦",
            "label": "Woodpecker",
            "translationPt": "Pica-pau"
          },
          {
            "text": "Whale",
            "emoji": "🐋",
            "label": "Whale",
            "translationPt": "Baleia"
          }
        ],
        "options": [
          "Jellyfish",
          "Octopus",
          "Woodpecker",
          "Whale"
        ],
        "correctAnswer": "Jellyfish",
        "explanation": "Exemplo prático: \"Jellyfish float gracefully in the sea.\"",
        "phoneticHint": "/ˈdʒel.i.fɪʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Seal",
        "visualEmoji": "🦭",
        "visualOptions": [
          {
            "text": "Mosquito",
            "emoji": "🦟",
            "label": "Mosquito",
            "translationPt": "Mosquito / Pernilongo"
          },
          {
            "text": "Crab",
            "emoji": "🦀",
            "label": "Crab",
            "translationPt": "Caranguejo / Siri"
          },
          {
            "text": "Seal",
            "emoji": "🦭",
            "label": "Seal",
            "translationPt": "Foca"
          },
          {
            "text": "Dolphin",
            "emoji": "🐬",
            "label": "Dolphin",
            "translationPt": "Golfinho"
          }
        ],
        "options": [
          "Mosquito",
          "Crab",
          "Seal",
          "Dolphin"
        ],
        "correctAnswer": "Seal",
        "explanation": "Exemplo prático: \"The cute seal swims in cold water.\"",
        "phoneticHint": "/siːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sea Turtle",
        "visualEmoji": "🐢",
        "visualOptions": [
          {
            "text": "Sea Turtle",
            "emoji": "🐢",
            "label": "Sea Turtle",
            "translationPt": "Tartaruga-marinha"
          },
          {
            "text": "Snail",
            "emoji": "🐌",
            "label": "Snail",
            "translationPt": "Caracol / Caramujo"
          },
          {
            "text": "Starfish",
            "emoji": "⭐",
            "label": "Starfish",
            "translationPt": "Estrela-do-mar"
          },
          {
            "text": "Swan",
            "emoji": "🦢",
            "label": "Swan",
            "translationPt": "Cisne"
          }
        ],
        "options": [
          "Sea Turtle",
          "Snail",
          "Starfish",
          "Swan"
        ],
        "correctAnswer": "Sea Turtle",
        "explanation": "Exemplo prático: \"The sea turtle swims across the ocean.\"",
        "phoneticHint": "/ˈsiː ˌtɜːr.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Clownfish",
        "visualEmoji": "🐠",
        "visualOptions": [
          {
            "text": "Seahorse",
            "emoji": "🐠",
            "label": "Seahorse",
            "translationPt": "Cavalo-marinho"
          },
          {
            "text": "Lizard",
            "emoji": "🦎",
            "label": "Lizard",
            "translationPt": "Lagarto / Lagartixa"
          },
          {
            "text": "Ostrich",
            "emoji": "🐦",
            "label": "Ostrich",
            "translationPt": "Avestruz / Ema"
          },
          {
            "text": "Clownfish",
            "emoji": "🐠",
            "label": "Clownfish",
            "translationPt": "Peixe-palhaço"
          }
        ],
        "options": [
          "Seahorse",
          "Lizard",
          "Ostrich",
          "Clownfish"
        ],
        "correctAnswer": "Clownfish",
        "explanation": "Exemplo prático: \"The orange and white clownfish lives in coral reefs.\"",
        "phoneticHint": "/ˈklaʊn.fɪʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Eagle",
        "visualEmoji": "🦅",
        "visualOptions": [
          {
            "text": "Octopus",
            "emoji": "🐙",
            "label": "Octopus",
            "translationPt": "Polvo"
          },
          {
            "text": "Iguana",
            "emoji": "🦎",
            "label": "Iguana",
            "translationPt": "Iguana"
          },
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          },
          {
            "text": "Bat",
            "emoji": "🦇",
            "label": "Bat",
            "translationPt": "Morcego"
          }
        ],
        "options": [
          "Octopus",
          "Iguana",
          "Eagle",
          "Bat"
        ],
        "correctAnswer": "Eagle",
        "explanation": "Exemplo prático: \"The eagle flies high in the sky.\"",
        "phoneticHint": "/ˈiː.ɡəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Owl",
        "visualEmoji": "🦉",
        "visualOptions": [
          {
            "text": "Chameleon",
            "emoji": "🦎",
            "label": "Chameleon",
            "translationPt": "Camaleão"
          },
          {
            "text": "Owl",
            "emoji": "🦉",
            "label": "Owl",
            "translationPt": "Coruja"
          },
          {
            "text": "Crab",
            "emoji": "🦀",
            "label": "Crab",
            "translationPt": "Caranguejo / Siri"
          },
          {
            "text": "Capybara",
            "emoji": "🐹",
            "label": "Capybara",
            "translationPt": "Capivara"
          }
        ],
        "options": [
          "Chameleon",
          "Owl",
          "Crab",
          "Capybara"
        ],
        "correctAnswer": "Owl",
        "explanation": "Exemplo prático: \"The owl has big round eyes and stays awake at night.\"",
        "phoneticHint": "/aʊl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hawk",
        "visualEmoji": "🦅",
        "visualOptions": [
          {
            "text": "Hawk",
            "emoji": "🦅",
            "label": "Hawk",
            "translationPt": "Gavião / Falcão"
          },
          {
            "text": "Dolphin",
            "emoji": "🐬",
            "label": "Dolphin",
            "translationPt": "Golfinho"
          },
          {
            "text": "Anteater",
            "emoji": "🐜",
            "label": "Anteater",
            "translationPt": "Tamanduá"
          },
          {
            "text": "Armadillo",
            "emoji": "🦔",
            "label": "Armadillo",
            "translationPt": "Tatu"
          }
        ],
        "options": [
          "Hawk",
          "Dolphin",
          "Anteater",
          "Armadillo"
        ],
        "correctAnswer": "Hawk",
        "explanation": "Exemplo prático: \"The hawk has sharp eyesight.\"",
        "phoneticHint": "/hɔːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Swan",
        "visualEmoji": "🦢",
        "visualOptions": [
          {
            "text": "Mosquito",
            "emoji": "🦟",
            "label": "Mosquito",
            "translationPt": "Mosquito / Pernilongo"
          },
          {
            "text": "Whale",
            "emoji": "🐋",
            "label": "Whale",
            "translationPt": "Baleia"
          },
          {
            "text": "Jellyfish",
            "emoji": "🪼",
            "label": "Jellyfish",
            "translationPt": "Água-viva"
          },
          {
            "text": "Swan",
            "emoji": "🦢",
            "label": "Swan",
            "translationPt": "Cisne"
          }
        ],
        "options": [
          "Mosquito",
          "Whale",
          "Jellyfish",
          "Swan"
        ],
        "correctAnswer": "Swan",
        "explanation": "Exemplo prático: \"The white swan glides on the lake.\"",
        "phoneticHint": "/swɑːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hummingbird",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Caterpillar",
            "emoji": "🐛",
            "label": "Caterpillar",
            "translationPt": "Lagarta"
          },
          {
            "text": "Shark",
            "emoji": "🦈",
            "label": "Shark",
            "translationPt": "Tubarão"
          },
          {
            "text": "Hummingbird",
            "emoji": "🐦",
            "label": "Hummingbird",
            "translationPt": "Beija-flor"
          },
          {
            "text": "Clownfish",
            "emoji": "🐠",
            "label": "Clownfish",
            "translationPt": "Peixe-palhaço"
          }
        ],
        "options": [
          "Caterpillar",
          "Shark",
          "Hummingbird",
          "Clownfish"
        ],
        "correctAnswer": "Hummingbird",
        "explanation": "Exemplo prático: \"The tiny hummingbird hovers near flowers.\"",
        "phoneticHint": "/ˈhʌm.ɪŋ.bɜːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Woodpecker",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Seahorse",
            "emoji": "🐠",
            "label": "Seahorse",
            "translationPt": "Cavalo-marinho"
          },
          {
            "text": "Woodpecker",
            "emoji": "🐦",
            "label": "Woodpecker",
            "translationPt": "Pica-pau"
          },
          {
            "text": "Owl",
            "emoji": "🦉",
            "label": "Owl",
            "translationPt": "Coruja"
          },
          {
            "text": "Starfish",
            "emoji": "⭐",
            "label": "Starfish",
            "translationPt": "Estrela-do-mar"
          }
        ],
        "options": [
          "Seahorse",
          "Woodpecker",
          "Owl",
          "Starfish"
        ],
        "correctAnswer": "Woodpecker",
        "explanation": "Exemplo prático: \"The woodpecker taps on tree trunks.\"",
        "phoneticHint": "/ˈwʊdˌpek.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ostrich",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Ostrich",
            "emoji": "🐦",
            "label": "Ostrich",
            "translationPt": "Avestruz / Ema"
          },
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          },
          {
            "text": "Seal",
            "emoji": "🦭",
            "label": "Seal",
            "translationPt": "Foca"
          },
          {
            "text": "Sea Turtle",
            "emoji": "🐢",
            "label": "Sea Turtle",
            "translationPt": "Tartaruga-marinha"
          }
        ],
        "options": [
          "Ostrich",
          "Eagle",
          "Seal",
          "Sea Turtle"
        ],
        "correctAnswer": "Ostrich",
        "explanation": "Exemplo prático: \"The tall ostrich runs very fast.\"",
        "phoneticHint": "/ˈɔː.strɪtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Capybara",
        "visualEmoji": "🐹",
        "visualOptions": [
          {
            "text": "Hawk",
            "emoji": "🦅",
            "label": "Hawk",
            "translationPt": "Gavião / Falcão"
          },
          {
            "text": "Squirrel",
            "emoji": "🐿️",
            "label": "Squirrel",
            "translationPt": "Esquilo"
          },
          {
            "text": "Snail",
            "emoji": "🐌",
            "label": "Snail",
            "translationPt": "Caracol / Caramujo"
          },
          {
            "text": "Capybara",
            "emoji": "🐹",
            "label": "Capybara",
            "translationPt": "Capivara"
          }
        ],
        "options": [
          "Hawk",
          "Squirrel",
          "Snail",
          "Capybara"
        ],
        "correctAnswer": "Capybara",
        "explanation": "Exemplo prático: \"The capybara is a very famous Brazilian animal.\"",
        "phoneticHint": "/ˌkæp.ɪˈbɑː.rə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sloth",
        "visualEmoji": "🦥",
        "visualOptions": [
          {
            "text": "Sloth",
            "emoji": "🦥",
            "label": "Sloth",
            "translationPt": "Bicho-preguiça"
          },
          {
            "text": "Dolphin",
            "emoji": "🐬",
            "label": "Dolphin",
            "translationPt": "Golfinho"
          },
          {
            "text": "Whale",
            "emoji": "🐋",
            "label": "Whale",
            "translationPt": "Baleia"
          },
          {
            "text": "Hummingbird",
            "emoji": "🐦",
            "label": "Hummingbird",
            "translationPt": "Beija-flor"
          }
        ],
        "options": [
          "Sloth",
          "Dolphin",
          "Whale",
          "Hummingbird"
        ],
        "correctAnswer": "Sloth",
        "explanation": "Exemplo prático: \"The sloth moves very slowly in the trees.\"",
        "phoneticHint": "/slɔːθ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Anteater",
        "visualEmoji": "🐜",
        "visualOptions": [
          {
            "text": "Woodpecker",
            "emoji": "🐦",
            "label": "Woodpecker",
            "translationPt": "Pica-pau"
          },
          {
            "text": "Anteater",
            "emoji": "🐜",
            "label": "Anteater",
            "translationPt": "Tamanduá"
          },
          {
            "text": "Starfish",
            "emoji": "⭐",
            "label": "Starfish",
            "translationPt": "Estrela-do-mar"
          },
          {
            "text": "Shark",
            "emoji": "🦈",
            "label": "Shark",
            "translationPt": "Tubarão"
          }
        ],
        "options": [
          "Woodpecker",
          "Anteater",
          "Starfish",
          "Shark"
        ],
        "correctAnswer": "Anteater",
        "explanation": "Exemplo prático: \"The giant anteater has a long snout.\"",
        "phoneticHint": "/ˈæntˌiː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Armadillo",
        "visualEmoji": "🦔",
        "visualOptions": [
          {
            "text": "Crab",
            "emoji": "🦀",
            "label": "Crab",
            "translationPt": "Caranguejo / Siri"
          },
          {
            "text": "Iguana",
            "emoji": "🦎",
            "label": "Iguana",
            "translationPt": "Iguana"
          },
          {
            "text": "Armadillo",
            "emoji": "🦔",
            "label": "Armadillo",
            "translationPt": "Tatu"
          },
          {
            "text": "Clownfish",
            "emoji": "🐠",
            "label": "Clownfish",
            "translationPt": "Peixe-palhaço"
          }
        ],
        "options": [
          "Crab",
          "Iguana",
          "Armadillo",
          "Clownfish"
        ],
        "correctAnswer": "Armadillo",
        "explanation": "Exemplo prático: \"The armadillo has a protective armor shell.\"",
        "phoneticHint": "/ˌɑːr.məˈdɪl.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bat",
        "visualEmoji": "🦇",
        "visualOptions": [
          {
            "text": "Owl",
            "emoji": "🦉",
            "label": "Owl",
            "translationPt": "Coruja"
          },
          {
            "text": "Ostrich",
            "emoji": "🐦",
            "label": "Ostrich",
            "translationPt": "Avestruz / Ema"
          },
          {
            "text": "Octopus",
            "emoji": "🐙",
            "label": "Octopus",
            "translationPt": "Polvo"
          },
          {
            "text": "Bat",
            "emoji": "🦇",
            "label": "Bat",
            "translationPt": "Morcego"
          }
        ],
        "options": [
          "Owl",
          "Ostrich",
          "Octopus",
          "Bat"
        ],
        "correctAnswer": "Bat",
        "explanation": "Exemplo prático: \"Bats fly at night and eat fruits or insects.\"",
        "phoneticHint": "/bæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Squirrel",
        "visualEmoji": "🐿️",
        "visualOptions": [
          {
            "text": "Squirrel",
            "emoji": "🐿️",
            "label": "Squirrel",
            "translationPt": "Esquilo"
          },
          {
            "text": "Hummingbird",
            "emoji": "🐦",
            "label": "Hummingbird",
            "translationPt": "Beija-flor"
          },
          {
            "text": "Hawk",
            "emoji": "🦅",
            "label": "Hawk",
            "translationPt": "Gavião / Falcão"
          },
          {
            "text": "Sloth",
            "emoji": "🦥",
            "label": "Sloth",
            "translationPt": "Bicho-preguiça"
          }
        ],
        "options": [
          "Squirrel",
          "Hummingbird",
          "Hawk",
          "Sloth"
        ],
        "correctAnswer": "Squirrel",
        "explanation": "Exemplo prático: \"The squirrel holds a nut in its paws.\"",
        "phoneticHint": "/ˈskwɜːr.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lizard",
        "visualEmoji": "🦎",
        "visualOptions": [
          {
            "text": "Woodpecker",
            "emoji": "🐦",
            "label": "Woodpecker",
            "translationPt": "Pica-pau"
          },
          {
            "text": "Capybara",
            "emoji": "🐹",
            "label": "Capybara",
            "translationPt": "Capivara"
          },
          {
            "text": "Lizard",
            "emoji": "🦎",
            "label": "Lizard",
            "translationPt": "Lagarto / Lagartixa"
          },
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          }
        ],
        "options": [
          "Woodpecker",
          "Capybara",
          "Lizard",
          "Eagle"
        ],
        "correctAnswer": "Lizard",
        "explanation": "Exemplo prático: \"A green lizard rests on the warm stone.\"",
        "phoneticHint": "/ˈlɪz.ərd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Iguana",
        "visualEmoji": "🦎",
        "visualOptions": [
          {
            "text": "Anteater",
            "emoji": "🐜",
            "label": "Anteater",
            "translationPt": "Tamanduá"
          },
          {
            "text": "Jellyfish",
            "emoji": "🪼",
            "label": "Jellyfish",
            "translationPt": "Água-viva"
          },
          {
            "text": "Iguana",
            "emoji": "🦎",
            "label": "Iguana",
            "translationPt": "Iguana"
          },
          {
            "text": "Armadillo",
            "emoji": "🦔",
            "label": "Armadillo",
            "translationPt": "Tatu"
          }
        ],
        "options": [
          "Anteater",
          "Jellyfish",
          "Iguana",
          "Armadillo"
        ],
        "correctAnswer": "Iguana",
        "explanation": "Exemplo prático: \"Green iguanas love sunny trees.\"",
        "phoneticHint": "/ɪˈɡwɑː.nə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chameleon",
        "visualEmoji": "🦎",
        "visualOptions": [
          {
            "text": "Seal",
            "emoji": "🦭",
            "label": "Seal",
            "translationPt": "Foca"
          },
          {
            "text": "Sea Turtle",
            "emoji": "🐢",
            "label": "Sea Turtle",
            "translationPt": "Tartaruga-marinha"
          },
          {
            "text": "Seahorse",
            "emoji": "🐠",
            "label": "Seahorse",
            "translationPt": "Cavalo-marinho"
          },
          {
            "text": "Chameleon",
            "emoji": "🦎",
            "label": "Chameleon",
            "translationPt": "Camaleão"
          }
        ],
        "options": [
          "Seal",
          "Sea Turtle",
          "Seahorse",
          "Chameleon"
        ],
        "correctAnswer": "Chameleon",
        "explanation": "Exemplo prático: \"The chameleon can change its skin color.\"",
        "phoneticHint": "/kəˈmiː.li.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Snail",
        "visualEmoji": "🐌",
        "visualOptions": [
          {
            "text": "Snail",
            "emoji": "🐌",
            "label": "Snail",
            "translationPt": "Caracol / Caramujo"
          },
          {
            "text": "Squirrel",
            "emoji": "🐿️",
            "label": "Squirrel",
            "translationPt": "Esquilo"
          },
          {
            "text": "Sloth",
            "emoji": "🦥",
            "label": "Sloth",
            "translationPt": "Bicho-preguiça"
          },
          {
            "text": "Swan",
            "emoji": "🦢",
            "label": "Swan",
            "translationPt": "Cisne"
          }
        ],
        "options": [
          "Snail",
          "Squirrel",
          "Sloth",
          "Swan"
        ],
        "correctAnswer": "Snail",
        "explanation": "Exemplo prático: \"The snail carries a spiral shell.\"",
        "phoneticHint": "/sneɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Caterpillar",
        "visualEmoji": "🐛",
        "visualOptions": [
          {
            "text": "Bat",
            "emoji": "🦇",
            "label": "Bat",
            "translationPt": "Morcego"
          },
          {
            "text": "Octopus",
            "emoji": "🐙",
            "label": "Octopus",
            "translationPt": "Polvo"
          },
          {
            "text": "Caterpillar",
            "emoji": "🐛",
            "label": "Caterpillar",
            "translationPt": "Lagarta"
          },
          {
            "text": "Lizard",
            "emoji": "🦎",
            "label": "Lizard",
            "translationPt": "Lagarto / Lagartixa"
          }
        ],
        "options": [
          "Bat",
          "Octopus",
          "Caterpillar",
          "Lizard"
        ],
        "correctAnswer": "Caterpillar",
        "explanation": "Exemplo prático: \"The green caterpillar will become a butterfly.\"",
        "phoneticHint": "/ˈkæt.ərˌpɪl.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Mosquito",
        "visualEmoji": "🦟",
        "visualOptions": [
          {
            "text": "Mosquito",
            "emoji": "🦟",
            "label": "Mosquito",
            "translationPt": "Mosquito / Pernilongo"
          },
          {
            "text": "Hummingbird",
            "emoji": "🐦",
            "label": "Hummingbird",
            "translationPt": "Beija-flor"
          },
          {
            "text": "Hawk",
            "emoji": "🦅",
            "label": "Hawk",
            "translationPt": "Gavião / Falcão"
          },
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          }
        ],
        "options": [
          "Mosquito",
          "Hummingbird",
          "Hawk",
          "Eagle"
        ],
        "correctAnswer": "Mosquito",
        "explanation": "Exemplo prático: \"Close the window screen to keep mosquitoes out.\"",
        "phoneticHint": "/məˈskiː.toʊ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p13",
    "worldId": 0,
    "phaseNumber": 13,
    "title": "Rodada 3 • Casa & Objetos III: Escola & Tecnologia",
    "subtitle": "Passo 3/5 da Rodada 3 • 30 itens de estudo, papelaria e eletrônicos",
    "pedagogicalObjective": "Reconhecer aparelhos eletrônicos, materiais escolares e objetos pessoais.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 3º passo da Rodada 3 estudamos tecnologia e material escolar: Celular (Phone), Computador (Computer), Fone de Ouvido (Headphones), Livro (Book), Caderno (Notebook), Caneta (Pen), Lápis (Pencil), Borracha (Eraser) e Mochila (Backpack)."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p13-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          },
          {
            "text": "Eraser",
            "emoji": "⬜",
            "label": "Eraser",
            "translationPt": "Borracha escolar"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          }
        ],
        "options": [
          "Hairbrush",
          "Eraser",
          "Phone",
          "Hair Dryer"
        ],
        "correctAnswer": "Phone",
        "explanation": "Exemplo prático: \"I use my smartphone to study English.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Computer",
        "visualEmoji": "💻",
        "visualOptions": [
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope"
          }
        ],
        "options": [
          "Computer",
          "Keyboard",
          "Notebook",
          "Envelope"
        ],
        "correctAnswer": "Computer",
        "explanation": "Exemplo prático: \"She works on her laptop computer.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Headphones",
        "visualEmoji": "🎧",
        "visualOptions": [
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          }
        ],
        "options": [
          "Globe",
          "Book",
          "Glue",
          "Headphones"
        ],
        "correctAnswer": "Headphones",
        "explanation": "Exemplo prático: \"Put on your headphones to listen to the audio.\"",
        "phoneticHint": "/ˈhed.foʊnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Charger",
        "visualEmoji": "🔌",
        "visualOptions": [
          {
            "text": "Charger",
            "emoji": "🔌",
            "label": "Charger",
            "translationPt": "Carregador de celular"
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura"
          },
          {
            "text": "Sharpener",
            "emoji": "✏️",
            "label": "Sharpener",
            "translationPt": "Apontador de lápis"
          }
        ],
        "options": [
          "Charger",
          "Printer",
          "Scissors",
          "Sharpener"
        ],
        "correctAnswer": "Charger",
        "explanation": "Exemplo prático: \"Plug in the phone charger to recharge the battery.\"",
        "phoneticHint": "/ˈtʃɑːr.dʒər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Remote Control",
        "visualEmoji": "🎛️",
        "visualOptions": [
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de documentos"
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário"
          },
          {
            "text": "Remote Control",
            "emoji": "🎛️",
            "label": "Remote Control",
            "translationPt": "Controle remoto"
          },
          {
            "text": "Crayon",
            "emoji": "🖍️",
            "label": "Crayon",
            "translationPt": "Giz de cera"
          }
        ],
        "options": [
          "Folder",
          "Calendar",
          "Remote Control",
          "Crayon"
        ],
        "correctAnswer": "Remote Control",
        "explanation": "Exemplo prático: \"Use the remote control to turn on the TV.\"",
        "phoneticHint": "/rɪˈmoʊt kənˈtroʊl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Camera",
        "visualEmoji": "📷",
        "visualOptions": [
          {
            "text": "Camera",
            "emoji": "📷",
            "label": "Camera",
            "translationPt": "Câmera fotográfica"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          }
        ],
        "options": [
          "Camera",
          "Computer",
          "Ruler",
          "Calculator"
        ],
        "correctAnswer": "Camera",
        "explanation": "Exemplo prático: \"Take a clear photo with the digital camera.\"",
        "phoneticHint": "/ˈkæm.rə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Keyboard",
        "visualEmoji": "⌨️",
        "visualOptions": [
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          },
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          }
        ],
        "options": [
          "Headphones",
          "Comb",
          "Backpack",
          "Keyboard"
        ],
        "correctAnswer": "Keyboard",
        "explanation": "Exemplo prático: \"Type the sentence on the computer keyboard.\"",
        "phoneticHint": "/ˈkiː.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Computer Mouse",
        "visualEmoji": "🖱️",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "Charger",
            "emoji": "🔌",
            "label": "Charger",
            "translationPt": "Carregador de celular"
          }
        ],
        "options": [
          "Phone",
          "Pen",
          "Computer Mouse",
          "Charger"
        ],
        "correctAnswer": "Computer Mouse",
        "explanation": "Exemplo prático: \"Click the button using the wireless computer mouse.\"",
        "phoneticHint": "/kəmˈpjuː.tər maʊs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Printer",
        "visualEmoji": "🖨️",
        "visualOptions": [
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel"
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora"
          },
          {
            "text": "Remote Control",
            "emoji": "🎛️",
            "label": "Remote Control",
            "translationPt": "Controle remoto"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          }
        ],
        "options": [
          "Paintbrush",
          "Printer",
          "Remote Control",
          "Pencil"
        ],
        "correctAnswer": "Printer",
        "explanation": "Exemplo prático: \"Print the page on the office printer.\"",
        "phoneticHint": "/ˈprɪn.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Book",
        "visualEmoji": "📘",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Paperclip",
            "emoji": "📎",
            "label": "Paperclip",
            "translationPt": "Clipe de papel"
          },
          {
            "text": "Camera",
            "emoji": "📷",
            "label": "Camera",
            "translationPt": "Câmera fotográfica"
          },
          {
            "text": "Sharpener",
            "emoji": "✏️",
            "label": "Sharpener",
            "translationPt": "Apontador de lápis"
          }
        ],
        "options": [
          "Book",
          "Paperclip",
          "Camera",
          "Sharpener"
        ],
        "correctAnswer": "Book",
        "explanation": "Exemplo prático: \"Read a chapter of your book every night.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Notebook",
        "visualEmoji": "📓",
        "visualOptions": [
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de documentos"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Crayon",
            "emoji": "🖍️",
            "label": "Crayon",
            "translationPt": "Giz de cera"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          }
        ],
        "options": [
          "Folder",
          "Computer",
          "Crayon",
          "Notebook"
        ],
        "correctAnswer": "Notebook",
        "explanation": "Exemplo prático: \"Write the new English words in your spiral notebook.\"",
        "phoneticHint": "/ˈnoʊt.bʊk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pen",
        "visualEmoji": "🖊️",
        "visualOptions": [
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua"
          },
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          }
        ],
        "options": [
          "Pen",
          "Backpack",
          "Ruler",
          "Computer Mouse"
        ],
        "correctAnswer": "Pen",
        "explanation": "Exemplo prático: \"Write your name with a blue ballpoint pen.\"",
        "phoneticHint": "/pen/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pencil",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          },
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          }
        ],
        "options": [
          "Keyboard",
          "Pencil",
          "Hairbrush",
          "Headphones"
        ],
        "correctAnswer": "Pencil",
        "explanation": "Exemplo prático: \"Draw a picture with a wooden pencil.\"",
        "phoneticHint": "/ˈpen.səl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Eraser",
        "visualEmoji": "⬜",
        "visualOptions": [
          {
            "text": "Eraser",
            "emoji": "⬜",
            "label": "Eraser",
            "translationPt": "Borracha escolar"
          },
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          }
        ],
        "options": [
          "Eraser",
          "Hair Dryer",
          "Envelope",
          "Book"
        ],
        "correctAnswer": "Eraser",
        "explanation": "Exemplo prático: \"Use a rubber eraser to fix the pencil mistake.\"",
        "phoneticHint": "/ɪˈreɪ.sər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sharpener",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel"
          },
          {
            "text": "Sharpener",
            "emoji": "✏️",
            "label": "Sharpener",
            "translationPt": "Apontador de lápis"
          }
        ],
        "options": [
          "Phone",
          "Printer",
          "Paintbrush",
          "Sharpener"
        ],
        "correctAnswer": "Sharpener",
        "explanation": "Exemplo prático: \"Sharpen the pencil point with a sharpener.\"",
        "phoneticHint": "/ˈʃɑːr.pən.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ruler",
        "visualEmoji": "📏",
        "visualOptions": [
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua"
          },
          {
            "text": "Camera",
            "emoji": "📷",
            "label": "Camera",
            "translationPt": "Câmera fotográfica"
          },
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "Charger",
            "emoji": "🔌",
            "label": "Charger",
            "translationPt": "Carregador de celular"
          }
        ],
        "options": [
          "Ruler",
          "Camera",
          "Computer Mouse",
          "Charger"
        ],
        "correctAnswer": "Ruler",
        "explanation": "Exemplo prático: \"Draw a straight line using a ruler.\"",
        "phoneticHint": "/ˈruː.lər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Backpack",
        "visualEmoji": "🎒",
        "visualOptions": [
          {
            "text": "Remote Control",
            "emoji": "🎛️",
            "label": "Remote Control",
            "translationPt": "Controle remoto"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário"
          }
        ],
        "options": [
          "Remote Control",
          "Backpack",
          "Calculator",
          "Calendar"
        ],
        "correctAnswer": "Backpack",
        "explanation": "Exemplo prático: \"Carry your books inside a school backpack.\"",
        "phoneticHint": "/ˈbæk.pæk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Scissors",
        "visualEmoji": "✂️",
        "visualOptions": [
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          },
          {
            "text": "Eraser",
            "emoji": "⬜",
            "label": "Eraser",
            "translationPt": "Borracha escolar"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          }
        ],
        "options": [
          "Comb",
          "Eraser",
          "Scissors",
          "Pen"
        ],
        "correctAnswer": "Scissors",
        "explanation": "Exemplo prático: \"Cut the paper carefully with scissors.\"",
        "phoneticHint": "/ˈsɪz.ərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Glue",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          },
          {
            "text": "Paperclip",
            "emoji": "📎",
            "label": "Paperclip",
            "translationPt": "Clipe de papel"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          },
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          }
        ],
        "options": [
          "Pencil",
          "Paperclip",
          "Notebook",
          "Glue"
        ],
        "correctAnswer": "Glue",
        "explanation": "Exemplo prático: \"Stick the paper with white school glue.\"",
        "phoneticHint": "/ɡluː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Crayon",
        "visualEmoji": "🖍️",
        "visualOptions": [
          {
            "text": "Crayon",
            "emoji": "🖍️",
            "label": "Crayon",
            "translationPt": "Giz de cera"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          }
        ],
        "options": [
          "Crayon",
          "Headphones",
          "Keyboard",
          "Globe"
        ],
        "correctAnswer": "Crayon",
        "explanation": "Exemplo prático: \"Children color drawings with colorful wax crayons.\"",
        "phoneticHint": "/ˈkreɪ.ɑːn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Paintbrush",
        "visualEmoji": "🖌️",
        "visualOptions": [
          {
            "text": "Sharpener",
            "emoji": "✏️",
            "label": "Sharpener",
            "translationPt": "Apontador de lápis"
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          }
        ],
        "options": [
          "Sharpener",
          "Printer",
          "Paintbrush",
          "Phone"
        ],
        "correctAnswer": "Paintbrush",
        "explanation": "Exemplo prático: \"Paint the canvas with an artist paintbrush.\"",
        "phoneticHint": "/ˈpeɪnt.brʌʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Envelope",
        "visualEmoji": "✉️",
        "visualOptions": [
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura"
          },
          {
            "text": "Charger",
            "emoji": "🔌",
            "label": "Charger",
            "translationPt": "Carregador de celular"
          }
        ],
        "options": [
          "Envelope",
          "Computer",
          "Scissors",
          "Charger"
        ],
        "correctAnswer": "Envelope",
        "explanation": "Exemplo prático: \"Put the letter inside a paper envelope.\"",
        "phoneticHint": "/ˈen.və.loʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Calendar",
        "visualEmoji": "📅",
        "visualOptions": [
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua"
          },
          {
            "text": "Remote Control",
            "emoji": "🎛️",
            "label": "Remote Control",
            "translationPt": "Controle remoto"
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário"
          }
        ],
        "options": [
          "Glue",
          "Ruler",
          "Remote Control",
          "Calendar"
        ],
        "correctAnswer": "Calendar",
        "explanation": "Exemplo prático: \"Check the date on the desk calendar.\"",
        "phoneticHint": "/ˈkæl.ən.dər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Folder",
        "visualEmoji": "📁",
        "visualOptions": [
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          },
          {
            "text": "Eraser",
            "emoji": "⬜",
            "label": "Eraser",
            "translationPt": "Borracha escolar"
          },
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de documentos"
          },
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          }
        ],
        "options": [
          "Hair Dryer",
          "Eraser",
          "Folder",
          "Hairbrush"
        ],
        "correctAnswer": "Folder",
        "explanation": "Exemplo prático: \"Keep your sheets organized in a folder.\"",
        "phoneticHint": "/ˈfoʊl.dər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Paperclip",
        "visualEmoji": "📎",
        "visualOptions": [
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          },
          {
            "text": "Paperclip",
            "emoji": "📎",
            "label": "Paperclip",
            "translationPt": "Clipe de papel"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          }
        ],
        "options": [
          "Notebook",
          "Backpack",
          "Paperclip",
          "Book"
        ],
        "correctAnswer": "Paperclip",
        "explanation": "Exemplo prático: \"Hold the pages together with a metal paperclip.\"",
        "phoneticHint": "/ˈpeɪ.pər.klɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Calculator",
        "visualEmoji": "🧮",
        "visualOptions": [
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Camera",
            "emoji": "📷",
            "label": "Camera",
            "translationPt": "Câmera fotográfica"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope"
          },
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          }
        ],
        "options": [
          "Calculator",
          "Camera",
          "Envelope",
          "Computer Mouse"
        ],
        "correctAnswer": "Calculator",
        "explanation": "Exemplo prático: \"Add the numbers on a pocket calculator.\"",
        "phoneticHint": "/ˈkæl.kjə.leɪ.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Globe",
        "visualEmoji": "🌍",
        "visualOptions": [
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          }
        ],
        "options": [
          "Scissors",
          "Pencil",
          "Pen",
          "Globe"
        ],
        "correctAnswer": "Globe",
        "explanation": "Exemplo prático: \"Find Brazil and the United States on the world globe.\"",
        "phoneticHint": "/ɡloʊb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Comb",
        "visualEmoji": "🪮",
        "visualOptions": [
          {
            "text": "Crayon",
            "emoji": "🖍️",
            "label": "Crayon",
            "translationPt": "Giz de cera"
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário"
          },
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          },
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de documentos"
          }
        ],
        "options": [
          "Crayon",
          "Calendar",
          "Comb",
          "Folder"
        ],
        "correctAnswer": "Comb",
        "explanation": "Exemplo prático: \"Neaten your hair with a plastic comb.\"",
        "phoneticHint": "/koʊm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hairbrush",
        "visualEmoji": "🪮",
        "visualOptions": [
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          },
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel"
          },
          {
            "text": "Paperclip",
            "emoji": "📎",
            "label": "Paperclip",
            "translationPt": "Clipe de papel"
          }
        ],
        "options": [
          "Glue",
          "Hairbrush",
          "Paintbrush",
          "Paperclip"
        ],
        "correctAnswer": "Hairbrush",
        "explanation": "Exemplo prático: \"Brush your hair in front of the mirror.\"",
        "phoneticHint": "/ˈher.brʌʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hair Dryer",
        "visualEmoji": "💨",
        "visualOptions": [
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          }
        ],
        "options": [
          "Hair Dryer",
          "Calculator",
          "Notebook",
          "Keyboard"
        ],
        "correctAnswer": "Hair Dryer",
        "explanation": "Exemplo prático: \"Dry your wet hair with an electric hair dryer.\"",
        "phoneticHint": "/ˈher ˌdraɪ.ər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p14",
    "worldId": 0,
    "phaseNumber": 14,
    "title": "Rodada 3 • Cotidiano III: Lugares & Natureza",
    "subtitle": "Passo 4/5 da Rodada 3 • 30 lugares da cidade e elementos da natureza",
    "pedagogicalObjective": "Reconhecer estabelecimentos comerciais, prédios e elementos naturais fundamentais.",
    "type": "lesson",
    "icon": "map",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 4º passo da Rodada 3 aprendemos os lugares da cidade (Casa, Escola, Supermercado, Padaria, Farmácia, Hospital, Restaurante, Livraria) e os elementos da natureza (Árvore, Flor, Rosa, Girassol, Sol, Lua, Arco-íris).",
      "Logo a seguir vem a Prática com Palavras da Rodada 3!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p14-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "House",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Caixa eletrônico"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          }
        ],
        "options": [
          "Bank",
          "House",
          "Hospital",
          "Hotel"
        ],
        "correctAnswer": "House",
        "explanation": "Exemplo prático: \"They live in a cozy family house.\"",
        "phoneticHint": "/haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "School",
        "visualEmoji": "🏫",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Bookstore",
            "emoji": "📚",
            "label": "Bookstore",
            "translationPt": "Livraria"
          },
          {
            "text": "Barber Shop",
            "emoji": "💈",
            "label": "Barber Shop",
            "translationPt": "Barbearia / Salão"
          }
        ],
        "options": [
          "School",
          "Tree",
          "Bookstore",
          "Barber Shop"
        ],
        "correctAnswer": "School",
        "explanation": "Exemplo prático: \"Children study at school every day.\"",
        "phoneticHint": "/skuːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Supermarket",
        "visualEmoji": "🛒",
        "visualOptions": [
          {
            "text": "Gym",
            "emoji": "🏋️",
            "label": "Gym",
            "translationPt": "Academia de ginástica"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          }
        ],
        "options": [
          "Gym",
          "Bridge",
          "Beach",
          "Supermarket"
        ],
        "correctAnswer": "Supermarket",
        "explanation": "Exemplo prático: \"We buy groceries with a shopping cart at the supermarket.\"",
        "phoneticHint": "/ˈsuː.pərˌmɑːr.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bakery",
        "visualEmoji": "🥐",
        "visualOptions": [
          {
            "text": "Sunflower",
            "emoji": "🌻",
            "label": "Sunflower",
            "translationPt": "Girassol"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Bakery",
            "emoji": "🥐",
            "label": "Bakery",
            "translationPt": "Padaria"
          },
          {
            "text": "Swimming Pool",
            "emoji": "🏊",
            "label": "Swimming Pool",
            "translationPt": "Piscina"
          }
        ],
        "options": [
          "Sunflower",
          "Sun",
          "Bakery",
          "Swimming Pool"
        ],
        "correctAnswer": "Bakery",
        "explanation": "Exemplo prático: \"The bakery display is full of fresh bread and cakes.\"",
        "phoneticHint": "/ˈbeɪ.kər.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pharmacy",
        "visualEmoji": "🏥",
        "visualOptions": [
          {
            "text": "Cinema",
            "emoji": "🎬",
            "label": "Cinema",
            "translationPt": "Cinema"
          },
          {
            "text": "Pharmacy",
            "emoji": "🏥",
            "label": "Pharmacy",
            "translationPt": "Farmácia"
          },
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo / Fogueira"
          }
        ],
        "options": [
          "Cinema",
          "Pharmacy",
          "Flower",
          "Fire"
        ],
        "correctAnswer": "Pharmacy",
        "explanation": "Exemplo prático: \"Buy medicine at the neighborhood pharmacy.\"",
        "phoneticHint": "/ˈfɑːr.mə.si/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hospital",
        "visualEmoji": "🏥",
        "visualOptions": [
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "Rose",
            "emoji": "🌹",
            "label": "Rose",
            "translationPt": "Rosa vermelha"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          },
          {
            "text": "Library",
            "emoji": "🏛️",
            "label": "Library",
            "translationPt": "Biblioteca"
          }
        ],
        "options": [
          "Hospital",
          "Rose",
          "Rainbow",
          "Library"
        ],
        "correctAnswer": "Hospital",
        "explanation": "Exemplo prático: \"Doctors and nurses care for patients at the hospital.\"",
        "phoneticHint": "/ˈhɑː.spɪ.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Restaurant",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Leaf",
            "emoji": "🍃",
            "label": "Leaf",
            "translationPt": "Folha de planta"
          },
          {
            "text": "Castle",
            "emoji": "🏰",
            "label": "Castle",
            "translationPt": "Castelo"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          }
        ],
        "options": [
          "House",
          "Leaf",
          "Castle",
          "Restaurant"
        ],
        "correctAnswer": "Restaurant",
        "explanation": "Exemplo prático: \"We had dinner together at a nice restaurant.\"",
        "phoneticHint": "/ˈres.trɑːnt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bank",
        "visualEmoji": "🏦",
        "visualOptions": [
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Caixa eletrônico"
          },
          {
            "text": "Cactus",
            "emoji": "🌵",
            "label": "Cactus",
            "translationPt": "Cacto"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Bakery",
            "emoji": "🥐",
            "label": "Bakery",
            "translationPt": "Padaria"
          }
        ],
        "options": [
          "Bank",
          "Cactus",
          "School",
          "Bakery"
        ],
        "correctAnswer": "Bank",
        "explanation": "Exemplo prático: \"Withdraw money at the bank.\"",
        "phoneticHint": "/bæŋk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hotel",
        "visualEmoji": "🏨",
        "visualOptions": [
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Pharmacy",
            "emoji": "🏥",
            "label": "Pharmacy",
            "translationPt": "Farmácia"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          }
        ],
        "options": [
          "Moon",
          "Hotel",
          "Pharmacy",
          "Supermarket"
        ],
        "correctAnswer": "Hotel",
        "explanation": "Exemplo prático: \"We stayed in a comfortable hotel room on vacation.\"",
        "phoneticHint": "/hoʊˈtel/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bookstore",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "Pet Shop",
            "emoji": "🐾",
            "label": "Pet Shop",
            "translationPt": "Pet shop"
          },
          {
            "text": "Bookstore",
            "emoji": "📚",
            "label": "Bookstore",
            "translationPt": "Livraria"
          },
          {
            "text": "Swimming Pool",
            "emoji": "🏊",
            "label": "Swimming Pool",
            "translationPt": "Piscina"
          }
        ],
        "options": [
          "Park",
          "Pet Shop",
          "Bookstore",
          "Swimming Pool"
        ],
        "correctAnswer": "Bookstore",
        "explanation": "Exemplo prático: \"She bought a new book at the bookstore.\"",
        "phoneticHint": "/ˈbʊk.stɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Library",
        "visualEmoji": "🏛️",
        "visualOptions": [
          {
            "text": "Leaf",
            "emoji": "🍃",
            "label": "Leaf",
            "translationPt": "Folha de planta"
          },
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Library",
            "emoji": "🏛️",
            "label": "Library",
            "translationPt": "Biblioteca"
          }
        ],
        "options": [
          "Leaf",
          "Flower",
          "Restaurant",
          "Library"
        ],
        "correctAnswer": "Library",
        "explanation": "Exemplo prático: \"Read quietly in the public library.\"",
        "phoneticHint": "/ˈlaɪ.brer.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cinema",
        "visualEmoji": "🎬",
        "visualOptions": [
          {
            "text": "Cinema",
            "emoji": "🎬",
            "label": "Cinema",
            "translationPt": "Cinema"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          },
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Caixa eletrônico"
          },
          {
            "text": "Bakery",
            "emoji": "🥐",
            "label": "Bakery",
            "translationPt": "Padaria"
          }
        ],
        "options": [
          "Cinema",
          "Beach",
          "Bank",
          "Bakery"
        ],
        "correctAnswer": "Cinema",
        "explanation": "Exemplo prático: \"Watch a movie on the big screen at the cinema.\"",
        "phoneticHint": "/ˈsɪn.ə.mə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Gym",
        "visualEmoji": "🏋️",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Gym",
            "emoji": "🏋️",
            "label": "Gym",
            "translationPt": "Academia de ginástica"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          }
        ],
        "options": [
          "House",
          "Hotel",
          "Gym",
          "Hospital"
        ],
        "correctAnswer": "Gym",
        "explanation": "Exemplo prático: \"Exercise with weights and treadmills at the gym.\"",
        "phoneticHint": "/dʒɪm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Barber Shop",
        "visualEmoji": "💈",
        "visualOptions": [
          {
            "text": "Bookstore",
            "emoji": "📚",
            "label": "Bookstore",
            "translationPt": "Livraria"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Barber Shop",
            "emoji": "💈",
            "label": "Barber Shop",
            "translationPt": "Barbearia / Salão"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte"
          }
        ],
        "options": [
          "Bookstore",
          "Tree",
          "Barber Shop",
          "Bridge"
        ],
        "correctAnswer": "Barber Shop",
        "explanation": "Exemplo prático: \"Get a haircut at the barber shop.\"",
        "phoneticHint": "/ˈbɑːr.bər ʃɑːp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pet Shop",
        "visualEmoji": "🐾",
        "visualOptions": [
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Pharmacy",
            "emoji": "🏥",
            "label": "Pharmacy",
            "translationPt": "Farmácia"
          },
          {
            "text": "Pet Shop",
            "emoji": "🐾",
            "label": "Pet Shop",
            "translationPt": "Pet shop"
          }
        ],
        "options": [
          "Moon",
          "Restaurant",
          "Pharmacy",
          "Pet Shop"
        ],
        "correctAnswer": "Pet Shop",
        "explanation": "Exemplo prático: \"Buy pet food and toys at the pet shop.\"",
        "phoneticHint": "/ˈpet ʃɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Park",
        "visualEmoji": "🌳",
        "visualOptions": [
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "Castle",
            "emoji": "🏰",
            "label": "Castle",
            "translationPt": "Castelo"
          },
          {
            "text": "Cinema",
            "emoji": "🎬",
            "label": "Cinema",
            "translationPt": "Cinema"
          },
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo / Fogueira"
          }
        ],
        "options": [
          "Park",
          "Castle",
          "Cinema",
          "Fire"
        ],
        "correctAnswer": "Park",
        "explanation": "Exemplo prático: \"Families walk and play in the green city park.\"",
        "phoneticHint": "/pɑːrk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Beach",
        "visualEmoji": "🏖️",
        "visualOptions": [
          {
            "text": "Rose",
            "emoji": "🌹",
            "label": "Rose",
            "translationPt": "Rosa vermelha"
          },
          {
            "text": "Library",
            "emoji": "🏛️",
            "label": "Library",
            "translationPt": "Biblioteca"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          }
        ],
        "options": [
          "Rose",
          "Library",
          "Beach",
          "Rainbow"
        ],
        "correctAnswer": "Beach",
        "explanation": "Exemplo prático: \"We love going to the sunny beach on weekends.\"",
        "phoneticHint": "/biːtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Swimming Pool",
        "visualEmoji": "🏊",
        "visualOptions": [
          {
            "text": "Swimming Pool",
            "emoji": "🏊",
            "label": "Swimming Pool",
            "translationPt": "Piscina"
          },
          {
            "text": "Cactus",
            "emoji": "🌵",
            "label": "Cactus",
            "translationPt": "Cacto"
          },
          {
            "text": "Barber Shop",
            "emoji": "💈",
            "label": "Barber Shop",
            "translationPt": "Barbearia / Salão"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Swimming Pool",
          "Cactus",
          "Barber Shop",
          "School"
        ],
        "correctAnswer": "Swimming Pool",
        "explanation": "Exemplo prático: \"Swim in the blue swimming pool on hot days.\"",
        "phoneticHint": "/ˈswɪm.ɪŋ puːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bridge",
        "visualEmoji": "🌉",
        "visualOptions": [
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Sunflower",
            "emoji": "🌻",
            "label": "Sunflower",
            "translationPt": "Girassol"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte"
          }
        ],
        "options": [
          "Supermarket",
          "Sun",
          "Sunflower",
          "Bridge"
        ],
        "correctAnswer": "Bridge",
        "explanation": "Exemplo prático: \"Cars cross the river over the suspension bridge.\"",
        "phoneticHint": "/brɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Castle",
        "visualEmoji": "🏰",
        "visualOptions": [
          {
            "text": "Pet Shop",
            "emoji": "🐾",
            "label": "Pet Shop",
            "translationPt": "Pet shop"
          },
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "Castle",
            "emoji": "🏰",
            "label": "Castle",
            "translationPt": "Castelo"
          },
          {
            "text": "Gym",
            "emoji": "🏋️",
            "label": "Gym",
            "translationPt": "Academia de ginástica"
          }
        ],
        "options": [
          "Pet Shop",
          "Park",
          "Castle",
          "Gym"
        ],
        "correctAnswer": "Castle",
        "explanation": "Exemplo prático: \"The stone castle has tall towers.\"",
        "phoneticHint": "/ˈkæs.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tree",
        "visualEmoji": "🌳",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Pharmacy",
            "emoji": "🏥",
            "label": "Pharmacy",
            "translationPt": "Farmácia"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          }
        ],
        "options": [
          "House",
          "Tree",
          "Pharmacy",
          "Moon"
        ],
        "correctAnswer": "Tree",
        "explanation": "Exemplo prático: \"A green tree provides cool shade.\"",
        "phoneticHint": "/triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Flower",
        "visualEmoji": "🌸",
        "visualOptions": [
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo / Fogueira"
          },
          {
            "text": "Cinema",
            "emoji": "🎬",
            "label": "Cinema",
            "translationPt": "Cinema"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Flower",
          "Fire",
          "Cinema",
          "School"
        ],
        "correctAnswer": "Flower",
        "explanation": "Exemplo prático: \"A colorful flower blooms in spring.\"",
        "phoneticHint": "/ˈflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rose",
        "visualEmoji": "🌹",
        "visualOptions": [
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          },
          {
            "text": "Library",
            "emoji": "🏛️",
            "label": "Library",
            "translationPt": "Biblioteca"
          },
          {
            "text": "Rose",
            "emoji": "🌹",
            "label": "Rose",
            "translationPt": "Rosa vermelha"
          }
        ],
        "options": [
          "Restaurant",
          "Rainbow",
          "Library",
          "Rose"
        ],
        "correctAnswer": "Rose",
        "explanation": "Exemplo prático: \"He gave her a single red rose.\"",
        "phoneticHint": "/roʊz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sunflower",
        "visualEmoji": "🌻",
        "visualOptions": [
          {
            "text": "Sunflower",
            "emoji": "🌻",
            "label": "Sunflower",
            "translationPt": "Girassol"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Bakery",
            "emoji": "🥐",
            "label": "Bakery",
            "translationPt": "Padaria"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          }
        ],
        "options": [
          "Sunflower",
          "Hotel",
          "Bakery",
          "Hospital"
        ],
        "correctAnswer": "Sunflower",
        "explanation": "Exemplo prático: \"The yellow sunflower faces the sun.\"",
        "phoneticHint": "/ˈsʌnˌflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cactus",
        "visualEmoji": "🌵",
        "visualOptions": [
          {
            "text": "Bookstore",
            "emoji": "📚",
            "label": "Bookstore",
            "translationPt": "Livraria"
          },
          {
            "text": "Cactus",
            "emoji": "🌵",
            "label": "Cactus",
            "translationPt": "Cacto"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Caixa eletrônico"
          }
        ],
        "options": [
          "Bookstore",
          "Cactus",
          "Tree",
          "Bank"
        ],
        "correctAnswer": "Cactus",
        "explanation": "Exemplo prático: \"A green cactus grows in dry places.\"",
        "phoneticHint": "/ˈkæk.təs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Leaf",
        "visualEmoji": "🍃",
        "visualOptions": [
          {
            "text": "Leaf",
            "emoji": "🍃",
            "label": "Leaf",
            "translationPt": "Folha de planta"
          },
          {
            "text": "Gym",
            "emoji": "🏋️",
            "label": "Gym",
            "translationPt": "Academia de ginástica"
          },
          {
            "text": "Barber Shop",
            "emoji": "💈",
            "label": "Barber Shop",
            "translationPt": "Barbearia / Salão"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          }
        ],
        "options": [
          "Leaf",
          "Gym",
          "Barber Shop",
          "Beach"
        ],
        "correctAnswer": "Leaf",
        "explanation": "Exemplo prático: \"A bright green tree leaf.\"",
        "phoneticHint": "/liːf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Swimming Pool",
            "emoji": "🏊",
            "label": "Swimming Pool",
            "translationPt": "Piscina"
          },
          {
            "text": "Pet Shop",
            "emoji": "🐾",
            "label": "Pet Shop",
            "translationPt": "Pet shop"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          }
        ],
        "options": [
          "Supermarket",
          "Swimming Pool",
          "Pet Shop",
          "Sun"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The bright yellow sun shines in the blue sky.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Moon",
        "visualEmoji": "🌙",
        "visualOptions": [
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Castle",
            "emoji": "🏰",
            "label": "Castle",
            "translationPt": "Castelo"
          },
          {
            "text": "Sunflower",
            "emoji": "🌻",
            "label": "Sunflower",
            "translationPt": "Girassol"
          },
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          }
        ],
        "options": [
          "Moon",
          "Castle",
          "Sunflower",
          "Flower"
        ],
        "correctAnswer": "Moon",
        "explanation": "Exemplo prático: \"The full moon glows in the night sky.\"",
        "phoneticHint": "/muːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rainbow",
        "visualEmoji": "🌈",
        "visualOptions": [
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          },
          {
            "text": "Cactus",
            "emoji": "🌵",
            "label": "Cactus",
            "translationPt": "Cacto"
          },
          {
            "text": "Rose",
            "emoji": "🌹",
            "label": "Rose",
            "translationPt": "Rosa vermelha"
          }
        ],
        "options": [
          "Bridge",
          "Rainbow",
          "Cactus",
          "Rose"
        ],
        "correctAnswer": "Rainbow",
        "explanation": "Exemplo prático: \"A colorful rainbow appeared after the rain.\"",
        "phoneticHint": "/ˈreɪn.boʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fire",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "Leaf",
            "emoji": "🍃",
            "label": "Leaf",
            "translationPt": "Folha de planta"
          },
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo / Fogueira"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          }
        ],
        "options": [
          "Park",
          "Leaf",
          "Fire",
          "House"
        ],
        "correctAnswer": "Fire",
        "explanation": "Exemplo prático: \"Warm campfire flames.\"",
        "phoneticHint": "/ˈfaɪ.ər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p15",
    "worldId": 0,
    "phaseNumber": 15,
    "title": "Prática da Rodada 3: Palavras & Associações Simples",
    "subtitle": "Passo 5/5 da Rodada 3 • 12 exercícios simples com as palavras aprendidas",
    "pedagogicalObjective": "Consolidar na prática as palavras aprendidas nos 4 módulos da Rodada 3 (Alimentos, Animais, Casa e Cotidiano) com associações simples e diretas.",
    "type": "chest",
    "icon": "gift",
    "cefrLevel": "A1",
    "theorySummary": [
      "Parabéns por completar os 4 módulos visuais da Rodada 3 (Alimentos, Animais, Casa e Cotidiano)!",
      "Agora vamos praticar as palavras aprendidas com combinações curtas, simples e de fácil associação.",
      "Ouça cada expressão em inglês americano e escolha ou monte a resposta correta!"
    ],
    "xpReward": 60,
    "gemsReward": 25,
    "exercises": [
      {
        "id": "w0-p15-e1",
        "type": "multiple-choice",
        "visualEmoji": "🍞",
        "prompt": "O que significa \"Warm bread\" em português?",
        "audioPhrase": "Warm bread",
        "options": [
          "Pão quentinho",
          "Arroz branco",
          "Queijo amarelo",
          "Sopa quente"
        ],
        "correctAnswer": "Pão quentinho",
        "explanation": "\"Warm bread\" = \"Pão quentinho\". Associação simples e direta!",
        "phoneticHint": "/wɔːrm bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e2",
        "type": "word-order",
        "visualEmoji": "🍕",
        "prompt": "Monte em inglês: \"Pizza de queijo\" (usando o vocabulário da Rodada 3):",
        "audioPhrase": "Cheese pizza",
        "options": [
          "pizza",
          "Cheese",
          "soup"
        ],
        "correctAnswer": "Cheese pizza",
        "explanation": "\"Cheese pizza\" significa \"Pizza de queijo\".",
        "phoneticHint": "/tʃiːz ˈpiːt.sə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e3",
        "type": "multiple-choice",
        "visualEmoji": "🥗",
        "prompt": "O que significa \"Green salad\" em português?",
        "audioPhrase": "Green salad",
        "options": [
          "Salada verde",
          "Batata frita",
          "Frango assado",
          "Macarrão quente"
        ],
        "correctAnswer": "Salada verde",
        "explanation": "\"Green salad\" = \"Salada verde\". Associação simples e direta!",
        "phoneticHint": "/ɡriːn ˈsæl.əd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e4",
        "type": "multiple-choice",
        "visualEmoji": "🦈",
        "prompt": "O que significa \"Big shark\" em português?",
        "audioPhrase": "Big shark",
        "options": [
          "Tubarão grande",
          "Baleia azul",
          "Golfinho amigo",
          "Tartaruga lenta"
        ],
        "correctAnswer": "Tubarão grande",
        "explanation": "\"Big shark\" = \"Tubarão grande\". Associação simples e direta!",
        "phoneticHint": "/bɪɡ ʃɑːrk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e5",
        "type": "word-order",
        "visualEmoji": "🐋",
        "prompt": "Monte em inglês: \"Baleia azul\" (usando o vocabulário da Rodada 3):",
        "audioPhrase": "Blue whale",
        "options": [
          "whale",
          "Blue",
          "shark"
        ],
        "correctAnswer": "Blue whale",
        "explanation": "\"Blue whale\" significa \"Baleia azul\".",
        "phoneticHint": "/bluː weɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e6",
        "type": "multiple-choice",
        "visualEmoji": "🦅",
        "prompt": "O que significa \"Fast eagle\" em português?",
        "audioPhrase": "Fast eagle",
        "options": [
          "Águia rápida",
          "Coruja noturna",
          "Cisne branco",
          "Beija-flor pequeno"
        ],
        "correctAnswer": "Águia rápida",
        "explanation": "\"Fast eagle\" = \"Águia rápida\". Associação simples e direta!",
        "phoneticHint": "/fæst ˈiː.ɡəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e7",
        "type": "multiple-choice",
        "visualEmoji": "📘",
        "prompt": "O que significa \"Good book\" em português?",
        "audioPhrase": "Good book",
        "options": [
          "Bom livro",
          "Caneta azul",
          "Caderno novo",
          "Mochila escolar"
        ],
        "correctAnswer": "Bom livro",
        "explanation": "\"Good book\" = \"Bom livro\". Associação simples e direta!",
        "phoneticHint": "/ɡʊd bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e8",
        "type": "word-order",
        "visualEmoji": "🖊️",
        "prompt": "Monte em inglês: \"Caneta azul\" (usando o vocabulário da Rodada 3):",
        "audioPhrase": "Blue pen",
        "options": [
          "pen",
          "Blue",
          "book"
        ],
        "correctAnswer": "Blue pen",
        "explanation": "\"Blue pen\" significa \"Caneta azul\".",
        "phoneticHint": "/bluː pen/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e9",
        "type": "multiple-choice",
        "visualEmoji": "📱",
        "prompt": "O que significa \"My phone\" em português?",
        "audioPhrase": "My phone",
        "options": [
          "Meu celular",
          "Meu computador",
          "Minha câmera",
          "Meu teclado"
        ],
        "correctAnswer": "Meu celular",
        "explanation": "\"My phone\" = \"Meu celular\". Associação simples e direta!",
        "phoneticHint": "/maɪ foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e10",
        "type": "multiple-choice",
        "visualEmoji": "🏠",
        "prompt": "O que significa \"My house\" em português?",
        "audioPhrase": "My house",
        "options": [
          "Minha casa",
          "Minha escola",
          "A padaria",
          "O hospital"
        ],
        "correctAnswer": "Minha casa",
        "explanation": "\"My house\" = \"Minha casa\". Associação simples e direta!",
        "phoneticHint": "/maɪ haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e11",
        "type": "word-order",
        "visualEmoji": "🌳",
        "prompt": "Monte em inglês: \"Árvore verde\" (usando o vocabulário da Rodada 3):",
        "audioPhrase": "Green tree",
        "options": [
          "tree",
          "Green",
          "flower"
        ],
        "correctAnswer": "Green tree",
        "explanation": "\"Green tree\" significa \"Árvore verde\".",
        "phoneticHint": "/ɡriːn triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e12",
        "type": "multiple-choice",
        "visualEmoji": "☀️",
        "prompt": "O que significa \"Bright sun\" em português?",
        "audioPhrase": "Bright sun",
        "options": [
          "Sol brilhante",
          "Lua cheia",
          "Arco-íris colorido",
          "Praia bonita"
        ],
        "correctAnswer": "Sol brilhante",
        "explanation": "\"Bright sun\" = \"Sol brilhante\". Associação simples e direta!",
        "phoneticHint": "/braɪt sʌn/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p16",
    "worldId": 0,
    "phaseNumber": 16,
    "title": "Rodada 4 • Alimentos IV: Bebidas, Doces & Especiais",
    "subtitle": "Passo 1/5 da Rodada 4 • 30 bebidas, sobremesas e frutas especiais",
    "pedagogicalObjective": "Dominar o vocabulário de bebidas, doces famosos e frutas menos comuns.",
    "type": "lesson",
    "icon": "cup",
    "cefrLevel": "A1",
    "theorySummary": [
      "Chegamos à Rodada 4! Começamos com bebidas (Água, Leite, Café, Suco, Refrigerante, Chá), sobremesas queridas (Bolo, Chocolate, Sorvete, Picolé, Pudim, Pipoca) e frutas menos comuns ao final."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p16-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Raspberry",
            "emoji": "❤️",
            "label": "Raspberry",
            "translationPt": "Framboesa"
          },
          {
            "text": "Blueberry",
            "emoji": "🫐",
            "label": "Blueberry",
            "translationPt": "Mirtilo (Blueberry)"
          }
        ],
        "options": [
          "Honey",
          "Water",
          "Raspberry",
          "Blueberry"
        ],
        "correctAnswer": "Water",
        "explanation": "Exemplo prático: \"Drink a glass of fresh clear water.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          },
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍨",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Lollipop",
          "Tea",
          "Milk",
          "Ice Cream"
        ],
        "correctAnswer": "Milk",
        "explanation": "Exemplo prático: \"A glass of cold white milk.\"",
        "phoneticHint": "/mɪlk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Coffee",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Jelly",
            "emoji": "🍮",
            "label": "Jelly",
            "translationPt": "Gelatina"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam",
            "translationPt": "Geleia de frutas"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Jelly",
          "Donut",
          "Jam",
          "Coffee"
        ],
        "correctAnswer": "Coffee",
        "explanation": "Exemplo prático: \"A warm cup of black coffee.\"",
        "phoneticHint": "/ˈkɔː.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Juice",
        "visualEmoji": "🧃",
        "visualOptions": [
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco de laranja"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          },
          {
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding",
            "translationPt": "Pudim de leite"
          },
          {
            "text": "Popsicle",
            "emoji": "🍧",
            "label": "Popsicle",
            "translationPt": "Picolé"
          }
        ],
        "options": [
          "Juice",
          "Popcorn",
          "Pudding",
          "Popsicle"
        ],
        "correctAnswer": "Juice",
        "explanation": "Exemplo prático: \"A glass of natural orange juice.\"",
        "phoneticHint": "/dʒuːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Soda",
        "visualEmoji": "🥤",
        "visualOptions": [
          {
            "text": "Cookie",
            "emoji": "🍪",
            "label": "Cookie",
            "translationPt": "Biscoito / Cookie"
          },
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          },
          {
            "text": "Soda",
            "emoji": "🥤",
            "label": "Soda",
            "translationPt": "Refrigerante"
          },
          {
            "text": "Candy",
            "emoji": "🍬",
            "label": "Candy",
            "translationPt": "Bala / Doce"
          }
        ],
        "options": [
          "Cookie",
          "Cupcake",
          "Soda",
          "Candy"
        ],
        "correctAnswer": "Soda",
        "explanation": "Exemplo prático: \"Cold cola soda with ice cubes.\"",
        "phoneticHint": "/ˈsoʊ.də/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tea",
        "visualEmoji": "🍵",
        "visualOptions": [
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          },
          {
            "text": "Chestnut",
            "emoji": "🌰",
            "label": "Chestnut",
            "translationPt": "Castanha / Noz"
          },
          {
            "text": "Cereal",
            "emoji": "🥣",
            "label": "Cereal",
            "translationPt": "Cereal matinal"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte"
          }
        ],
        "options": [
          "Tea",
          "Chestnut",
          "Cereal",
          "Yogurt"
        ],
        "correctAnswer": "Tea",
        "explanation": "Exemplo prático: \"A cup of warm herbal tea.\"",
        "phoneticHint": "/tiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cake",
        "visualEmoji": "🍰",
        "visualOptions": [
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Pomegranate",
            "emoji": "🔴",
            "label": "Pomegranate",
            "translationPt": "Romã"
          },
          {
            "text": "Pie",
            "emoji": "🥧",
            "label": "Pie",
            "translationPt": "Torta doce"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo"
          }
        ],
        "options": [
          "Coffee",
          "Pomegranate",
          "Pie",
          "Cake"
        ],
        "correctAnswer": "Cake",
        "explanation": "Exemplo prático: \"A slice of chocolate birthday cake.\"",
        "phoneticHint": "/keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Chocolate",
        "visualEmoji": "🍫",
        "visualOptions": [
          {
            "text": "Waffle",
            "emoji": "🧇",
            "label": "Waffle",
            "translationPt": "Waffle"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Waffle",
          "Milk",
          "Chocolate",
          "Water"
        ],
        "correctAnswer": "Chocolate",
        "explanation": "Exemplo prático: \"A bar of milk chocolate.\"",
        "phoneticHint": "/ˈtʃɑːk.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ice Cream",
        "visualEmoji": "🍨",
        "visualOptions": [
          {
            "text": "Dragon Fruit",
            "emoji": "🐉",
            "label": "Dragon Fruit",
            "translationPt": "Pitaia"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍨",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Milkshake",
            "emoji": "🥤",
            "label": "Milkshake",
            "translationPt": "Milk-shake"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco de laranja"
          }
        ],
        "options": [
          "Dragon Fruit",
          "Ice Cream",
          "Milkshake",
          "Juice"
        ],
        "correctAnswer": "Ice Cream",
        "explanation": "Exemplo prático: \"Scoops of ice cream in a cone.\"",
        "phoneticHint": "/ˈaɪs kriːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Popsicle",
        "visualEmoji": "🍧",
        "visualOptions": [
          {
            "text": "Popsicle",
            "emoji": "🍧",
            "label": "Popsicle",
            "translationPt": "Picolé"
          },
          {
            "text": "Soda",
            "emoji": "🥤",
            "label": "Soda",
            "translationPt": "Refrigerante"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          }
        ],
        "options": [
          "Popsicle",
          "Soda",
          "Yogurt",
          "Popcorn"
        ],
        "correctAnswer": "Popsicle",
        "explanation": "Exemplo prático: \"A fruit popsicle on a hot day.\"",
        "phoneticHint": "/ˈpɑːp.sɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cookie",
        "visualEmoji": "🍪",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          },
          {
            "text": "Cookie",
            "emoji": "🍪",
            "label": "Cookie",
            "translationPt": "Biscoito / Cookie"
          }
        ],
        "options": [
          "Cake",
          "Coffee",
          "Cupcake",
          "Cookie"
        ],
        "correctAnswer": "Cookie",
        "explanation": "Exemplo prático: \"Chocolate chip cookies are crunchy.\"",
        "phoneticHint": "/ˈkʊk.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pudding",
        "visualEmoji": "🍮",
        "visualOptions": [
          {
            "text": "Blueberry",
            "emoji": "🫐",
            "label": "Blueberry",
            "translationPt": "Mirtilo (Blueberry)"
          },
          {
            "text": "Raspberry",
            "emoji": "❤️",
            "label": "Raspberry",
            "translationPt": "Framboesa"
          },
          {
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding",
            "translationPt": "Pudim de leite"
          },
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          }
        ],
        "options": [
          "Blueberry",
          "Raspberry",
          "Pudding",
          "Chocolate"
        ],
        "correctAnswer": "Pudding",
        "explanation": "Exemplo prático: \"Caramel pudding is a classic Brazilian dessert.\"",
        "phoneticHint": "/ˈpʊd.ɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Candy",
        "visualEmoji": "🍬",
        "visualOptions": [
          {
            "text": "Cereal",
            "emoji": "🥣",
            "label": "Cereal",
            "translationPt": "Cereal matinal"
          },
          {
            "text": "Candy",
            "emoji": "🍬",
            "label": "Candy",
            "translationPt": "Bala / Doce"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍨",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Cereal",
          "Candy",
          "Honey",
          "Ice Cream"
        ],
        "correctAnswer": "Candy",
        "explanation": "Exemplo prático: \"Wrapped colorful fruit candy.\"",
        "phoneticHint": "/ˈkæn.di/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Lollipop",
        "visualEmoji": "🍭",
        "visualOptions": [
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          },
          {
            "text": "Dragon Fruit",
            "emoji": "🐉",
            "label": "Dragon Fruit",
            "translationPt": "Pitaia"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Waffle",
            "emoji": "🧇",
            "label": "Waffle",
            "translationPt": "Waffle"
          }
        ],
        "options": [
          "Lollipop",
          "Dragon Fruit",
          "Water",
          "Waffle"
        ],
        "correctAnswer": "Lollipop",
        "explanation": "Exemplo prático: \"A colorful round lollipop on a stick.\"",
        "phoneticHint": "/ˈlɑː.li.pɑːp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Popcorn",
        "visualEmoji": "🍿",
        "visualOptions": [
          {
            "text": "Popsicle",
            "emoji": "🍧",
            "label": "Popsicle",
            "translationPt": "Picolé"
          },
          {
            "text": "Pomegranate",
            "emoji": "🔴",
            "label": "Pomegranate",
            "translationPt": "Romã"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          }
        ],
        "options": [
          "Popsicle",
          "Pomegranate",
          "Milk",
          "Popcorn"
        ],
        "correctAnswer": "Popcorn",
        "explanation": "Exemplo prático: \"Warm salted popcorn at the cinema.\"",
        "phoneticHint": "/ˈpɑːp.kɔːrn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Donut",
        "visualEmoji": "🍩",
        "visualOptions": [
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          },
          {
            "text": "Cookie",
            "emoji": "🍪",
            "label": "Cookie",
            "translationPt": "Biscoito / Cookie"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo"
          }
        ],
        "options": [
          "Donut",
          "Chocolate",
          "Cookie",
          "Cake"
        ],
        "correctAnswer": "Donut",
        "explanation": "Exemplo prático: \"A pink glazed donut with sprinkles.\"",
        "phoneticHint": "/ˈdoʊ.nʌt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pie",
        "visualEmoji": "🥧",
        "visualOptions": [
          {
            "text": "Candy",
            "emoji": "🍬",
            "label": "Candy",
            "translationPt": "Bala / Doce"
          },
          {
            "text": "Pie",
            "emoji": "🥧",
            "label": "Pie",
            "translationPt": "Torta doce"
          },
          {
            "text": "Soda",
            "emoji": "🥤",
            "label": "Soda",
            "translationPt": "Refrigerante"
          },
          {
            "text": "Chestnut",
            "emoji": "🌰",
            "label": "Chestnut",
            "translationPt": "Castanha / Noz"
          }
        ],
        "options": [
          "Candy",
          "Pie",
          "Soda",
          "Chestnut"
        ],
        "correctAnswer": "Pie",
        "explanation": "Exemplo prático: \"Warm homemade fruit pie.\"",
        "phoneticHint": "/paɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cupcake",
        "visualEmoji": "🧁",
        "visualOptions": [
          {
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding",
            "translationPt": "Pudim de leite"
          },
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          },
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          },
          {
            "text": "Milkshake",
            "emoji": "🥤",
            "label": "Milkshake",
            "translationPt": "Milk-shake"
          }
        ],
        "options": [
          "Pudding",
          "Lollipop",
          "Cupcake",
          "Milkshake"
        ],
        "correctAnswer": "Cupcake",
        "explanation": "Exemplo prático: \"A cupcake with creamy frosting.\"",
        "phoneticHint": "/ˈkʌp.keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Yogurt",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco de laranja"
          },
          {
            "text": "Jelly",
            "emoji": "🍮",
            "label": "Jelly",
            "translationPt": "Gelatina"
          },
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte"
          }
        ],
        "options": [
          "Juice",
          "Jelly",
          "Tea",
          "Yogurt"
        ],
        "correctAnswer": "Yogurt",
        "explanation": "Exemplo prático: \"Creamy strawberry yogurt in a spoon.\"",
        "phoneticHint": "/ˈjoʊ.ɡərt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Honey",
        "visualEmoji": "🍯",
        "visualOptions": [
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Dragon Fruit",
            "emoji": "🐉",
            "label": "Dragon Fruit",
            "translationPt": "Pitaia"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          }
        ],
        "options": [
          "Honey",
          "Water",
          "Dragon Fruit",
          "Donut"
        ],
        "correctAnswer": "Honey",
        "explanation": "Exemplo prático: \"Golden bee honey in a glass jar.\"",
        "phoneticHint": "/ˈhʌn.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Jam",
        "visualEmoji": "🍓",
        "visualOptions": [
          {
            "text": "Pie",
            "emoji": "🥧",
            "label": "Pie",
            "translationPt": "Torta doce"
          },
          {
            "text": "Popsicle",
            "emoji": "🍧",
            "label": "Popsicle",
            "translationPt": "Picolé"
          },
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam",
            "translationPt": "Geleia de frutas"
          },
          {
            "text": "Soda",
            "emoji": "🥤",
            "label": "Soda",
            "translationPt": "Refrigerante"
          }
        ],
        "options": [
          "Pie",
          "Popsicle",
          "Jam",
          "Soda"
        ],
        "correctAnswer": "Jam",
        "explanation": "Exemplo prático: \"Strawberry jam on morning toast.\"",
        "phoneticHint": "/dʒæm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Milkshake",
        "visualEmoji": "🥤",
        "visualOptions": [
          {
            "text": "Milkshake",
            "emoji": "🥤",
            "label": "Milkshake",
            "translationPt": "Milk-shake"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍨",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo"
          }
        ],
        "options": [
          "Milkshake",
          "Coffee",
          "Ice Cream",
          "Cake"
        ],
        "correctAnswer": "Milkshake",
        "explanation": "Exemplo prático: \"Cold chocolate milkshake with whipped cream.\"",
        "phoneticHint": "/ˈmɪlk.ʃeɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Waffle",
        "visualEmoji": "🧇",
        "visualOptions": [
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          },
          {
            "text": "Cookie",
            "emoji": "🍪",
            "label": "Cookie",
            "translationPt": "Biscoito / Cookie"
          },
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          },
          {
            "text": "Waffle",
            "emoji": "🧇",
            "label": "Waffle",
            "translationPt": "Waffle"
          }
        ],
        "options": [
          "Chocolate",
          "Cookie",
          "Lollipop",
          "Waffle"
        ],
        "correctAnswer": "Waffle",
        "explanation": "Exemplo prático: \"Crispy golden waffle for breakfast.\"",
        "phoneticHint": "/ˈwɑː.fəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Jelly",
        "visualEmoji": "🍮",
        "visualOptions": [
          {
            "text": "Jelly",
            "emoji": "🍮",
            "label": "Jelly",
            "translationPt": "Gelatina"
          },
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          },
          {
            "text": "Candy",
            "emoji": "🍬",
            "label": "Candy",
            "translationPt": "Bala / Doce"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel"
          }
        ],
        "options": [
          "Jelly",
          "Cupcake",
          "Candy",
          "Honey"
        ],
        "correctAnswer": "Jelly",
        "explanation": "Exemplo prático: \"Red strawberry jelly dessert.\"",
        "phoneticHint": "/ˈdʒel.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cereal",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam",
            "translationPt": "Geleia de frutas"
          },
          {
            "text": "Chestnut",
            "emoji": "🌰",
            "label": "Chestnut",
            "translationPt": "Castanha / Noz"
          },
          {
            "text": "Cereal",
            "emoji": "🥣",
            "label": "Cereal",
            "translationPt": "Cereal matinal"
          },
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          }
        ],
        "options": [
          "Jam",
          "Chestnut",
          "Cereal",
          "Tea"
        ],
        "correctAnswer": "Cereal",
        "explanation": "Exemplo prático: \"Cornflakes cereal with cold milk.\"",
        "phoneticHint": "/ˈsɪr.i.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Raspberry",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Raspberry",
            "emoji": "❤️",
            "label": "Raspberry",
            "translationPt": "Framboesa"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco de laranja"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte"
          }
        ],
        "options": [
          "Raspberry",
          "Donut",
          "Juice",
          "Yogurt"
        ],
        "correctAnswer": "Raspberry",
        "explanation": "Exemplo prático: \"Raspberries are bright red berries.\"",
        "phoneticHint": "/ˈræzˌber.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Blueberry",
        "visualEmoji": "🫐",
        "visualOptions": [
          {
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding",
            "translationPt": "Pudim de leite"
          },
          {
            "text": "Pie",
            "emoji": "🥧",
            "label": "Pie",
            "translationPt": "Torta doce"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          },
          {
            "text": "Blueberry",
            "emoji": "🫐",
            "label": "Blueberry",
            "translationPt": "Mirtilo (Blueberry)"
          }
        ],
        "options": [
          "Pudding",
          "Pie",
          "Popcorn",
          "Blueberry"
        ],
        "correctAnswer": "Blueberry",
        "explanation": "Exemplo prático: \"Blueberries are small blue fruits.\"",
        "phoneticHint": "/ˈbluːˌber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pomegranate",
        "visualEmoji": "🔴",
        "visualOptions": [
          {
            "text": "Milkshake",
            "emoji": "🥤",
            "label": "Milkshake",
            "translationPt": "Milk-shake"
          },
          {
            "text": "Jelly",
            "emoji": "🍮",
            "label": "Jelly",
            "translationPt": "Gelatina"
          },
          {
            "text": "Pomegranate",
            "emoji": "🔴",
            "label": "Pomegranate",
            "translationPt": "Romã"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          }
        ],
        "options": [
          "Milkshake",
          "Jelly",
          "Pomegranate",
          "Milk"
        ],
        "correctAnswer": "Pomegranate",
        "explanation": "Exemplo prático: \"Pomegranate is full of red seeds.\"",
        "phoneticHint": "/ˈpɑː.mɪˌɡræn.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Dragon Fruit",
        "visualEmoji": "🐉",
        "visualOptions": [
          {
            "text": "Waffle",
            "emoji": "🧇",
            "label": "Waffle",
            "translationPt": "Waffle"
          },
          {
            "text": "Dragon Fruit",
            "emoji": "🐉",
            "label": "Dragon Fruit",
            "translationPt": "Pitaia"
          },
          {
            "text": "Cereal",
            "emoji": "🥣",
            "label": "Cereal",
            "translationPt": "Cereal matinal"
          },
          {
            "text": "Jam",
            "emoji": "🍓",
            "label": "Jam",
            "translationPt": "Geleia de frutas"
          }
        ],
        "options": [
          "Waffle",
          "Dragon Fruit",
          "Cereal",
          "Jam"
        ],
        "correctAnswer": "Dragon Fruit",
        "explanation": "Exemplo prático: \"Dragon fruit has bright pink skin.\"",
        "phoneticHint": "/ˈdræɡ.ən fruːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chestnut",
        "visualEmoji": "🌰",
        "visualOptions": [
          {
            "text": "Chestnut",
            "emoji": "🌰",
            "label": "Chestnut",
            "translationPt": "Castanha / Noz"
          },
          {
            "text": "Raspberry",
            "emoji": "❤️",
            "label": "Raspberry",
            "translationPt": "Framboesa"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel"
          },
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          }
        ],
        "options": [
          "Chestnut",
          "Raspberry",
          "Honey",
          "Lollipop"
        ],
        "correctAnswer": "Chestnut",
        "explanation": "Exemplo prático: \"Crunchy nuts and chestnuts.\"",
        "phoneticHint": "/ˈtʃes.nʌt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p17",
    "worldId": 0,
    "phaseNumber": 17,
    "title": "Rodada 4 • Animais IV: Menos Comuns & Exóticos",
    "subtitle": "Passo 2/5 da Rodada 4 • 30 animais menos frequentes no cotidiano",
    "pedagogicalObjective": "Expandir o vocabulário com 30 animais menos cotidianos, porém presentes em livros e documentários.",
    "type": "lesson",
    "icon": "dog",
    "cefrLevel": "A1",
    "theorySummary": [
      "Somente aqui na Rodada 4 entramos nos animais menos comuns do dia a dia.",
      "Inclui Lagosta (Lobster), Lula (Squid), Arraia (Stingray), Orca, Piranha, Lhama (Llama), Orangotango (Orangutan), Hiena (Hyena), Porco-espinho (Hedgehog), Guaxinim (Raccoon), Lontra (Otter), Castor (Beaver), Suricato (Meerkat) e Ornitorrinco (Platypus)."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p17-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lobster",
        "visualEmoji": "🦞",
        "visualOptions": [
          {
            "text": "Hyena",
            "emoji": "🐕",
            "label": "Hyena",
            "translationPt": "Hiena"
          },
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          },
          {
            "text": "Lobster",
            "emoji": "🦞",
            "label": "Lobster",
            "translationPt": "Lagosta"
          },
          {
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Porco-espinho / Ouriço"
          }
        ],
        "options": [
          "Hyena",
          "Blowfish",
          "Lobster",
          "Hedgehog"
        ],
        "correctAnswer": "Lobster",
        "explanation": "Exemplo prático: \"The red lobster has two big claws.\"",
        "phoneticHint": "/ˈlɑːb.stər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Squid",
        "visualEmoji": "🦑",
        "visualOptions": [
          {
            "text": "Squid",
            "emoji": "🦑",
            "label": "Squid",
            "translationPt": "Lula"
          },
          {
            "text": "Boar",
            "emoji": "🐗",
            "label": "Boar",
            "translationPt": "Javali"
          },
          {
            "text": "Bison",
            "emoji": "🦬",
            "label": "Bison",
            "translationPt": "Búfalo / Bisão"
          },
          {
            "text": "Beaver",
            "emoji": "🦫",
            "label": "Beaver",
            "translationPt": "Castor"
          }
        ],
        "options": [
          "Squid",
          "Boar",
          "Bison",
          "Beaver"
        ],
        "correctAnswer": "Squid",
        "explanation": "Exemplo prático: \"The squid swims fast in deep water.\"",
        "phoneticHint": "/skwɪd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Stingray",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Grasshopper",
            "emoji": "🦗",
            "label": "Grasshopper",
            "translationPt": "Gafanhoto / Grilo"
          },
          {
            "text": "Walrus",
            "emoji": "🦭",
            "label": "Walrus",
            "translationPt": "Morsa"
          },
          {
            "text": "Dragonfly",
            "emoji": "蜻",
            "label": "Dragonfly",
            "translationPt": "Libélula"
          },
          {
            "text": "Stingray",
            "emoji": "🐟",
            "label": "Stingray",
            "translationPt": "Arraia"
          }
        ],
        "options": [
          "Grasshopper",
          "Walrus",
          "Dragonfly",
          "Stingray"
        ],
        "correctAnswer": "Stingray",
        "explanation": "Exemplo prático: \"The flat stingray glides near the ocean floor.\"",
        "phoneticHint": "/ˈstɪŋ.reɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Orca",
        "visualEmoji": "🐋",
        "visualOptions": [
          {
            "text": "Stork",
            "emoji": "🐦",
            "label": "Stork",
            "translationPt": "Cegonha"
          },
          {
            "text": "Seagull",
            "emoji": "🐦",
            "label": "Seagull",
            "translationPt": "Gaivota"
          },
          {
            "text": "Orca",
            "emoji": "🐋",
            "label": "Orca",
            "translationPt": "Orca (Baleia-assassina)"
          },
          {
            "text": "Vulture",
            "emoji": "🦅",
            "label": "Vulture",
            "translationPt": "Urubu / Abutre"
          }
        ],
        "options": [
          "Stork",
          "Seagull",
          "Orca",
          "Vulture"
        ],
        "correctAnswer": "Orca",
        "explanation": "Exemplo prático: \"The black and white orca leaps from the sea.\"",
        "phoneticHint": "/ˈɔːr.kə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Piranha",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Skunk",
            "emoji": "🦨",
            "label": "Skunk",
            "translationPt": "Gambá"
          },
          {
            "text": "Piranha",
            "emoji": "🐟",
            "label": "Piranha",
            "translationPt": "Piranha"
          },
          {
            "text": "Crow",
            "emoji": "🐦‍⬛",
            "label": "Crow",
            "translationPt": "Corvo"
          },
          {
            "text": "Canary",
            "emoji": "🐤",
            "label": "Canary",
            "translationPt": "Canário"
          }
        ],
        "options": [
          "Skunk",
          "Piranha",
          "Crow",
          "Canary"
        ],
        "correctAnswer": "Piranha",
        "explanation": "Exemplo prático: \"The piranha is an Amazon river fish with sharp teeth.\"",
        "phoneticHint": "/pɪˈrɑː.njə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Blowfish",
        "visualEmoji": "🐡",
        "visualOptions": [
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          },
          {
            "text": "Raccoon",
            "emoji": "🦝",
            "label": "Raccoon",
            "translationPt": "Guaxinim"
          },
          {
            "text": "Orangutan",
            "emoji": "🦧",
            "label": "Orangutan",
            "translationPt": "Orangotango"
          },
          {
            "text": "Otter",
            "emoji": "🦦",
            "label": "Otter",
            "translationPt": "Lontra"
          }
        ],
        "options": [
          "Blowfish",
          "Raccoon",
          "Orangutan",
          "Otter"
        ],
        "correctAnswer": "Blowfish",
        "explanation": "Exemplo prático: \"The blowfish puffs up like a round ball.\"",
        "phoneticHint": "/ˈbloʊ.fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Walrus",
        "visualEmoji": "🦭",
        "visualOptions": [
          {
            "text": "Beetle",
            "emoji": "🪲",
            "label": "Beetle",
            "translationPt": "Besouro"
          },
          {
            "text": "Lobster",
            "emoji": "🦞",
            "label": "Lobster",
            "translationPt": "Lagosta"
          },
          {
            "text": "Llama",
            "emoji": "🦙",
            "label": "Llama",
            "translationPt": "Lhama"
          },
          {
            "text": "Walrus",
            "emoji": "🦭",
            "label": "Walrus",
            "translationPt": "Morsa"
          }
        ],
        "options": [
          "Beetle",
          "Lobster",
          "Llama",
          "Walrus"
        ],
        "correctAnswer": "Walrus",
        "explanation": "Exemplo prático: \"The arctic walrus has two long ivory tusks.\"",
        "phoneticHint": "/ˈwɔːl.rəs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pelican",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Pelican",
            "emoji": "🐦",
            "label": "Pelican",
            "translationPt": "Pelicano"
          },
          {
            "text": "Squid",
            "emoji": "🦑",
            "label": "Squid",
            "translationPt": "Lula"
          },
          {
            "text": "Stingray",
            "emoji": "🐟",
            "label": "Stingray",
            "translationPt": "Arraia"
          },
          {
            "text": "Orca",
            "emoji": "🐋",
            "label": "Orca",
            "translationPt": "Orca (Baleia-assassina)"
          }
        ],
        "options": [
          "Pelican",
          "Squid",
          "Stingray",
          "Orca"
        ],
        "correctAnswer": "Pelican",
        "explanation": "Exemplo prático: \"The pelican catches fish in its large throat pouch.\"",
        "phoneticHint": "/ˈpel.ɪ.kən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Stork",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Moose",
            "emoji": "🫎",
            "label": "Moose",
            "translationPt": "Alce"
          },
          {
            "text": "Stork",
            "emoji": "🐦",
            "label": "Stork",
            "translationPt": "Cegonha"
          },
          {
            "text": "Scorpion",
            "emoji": "🦂",
            "label": "Scorpion",
            "translationPt": "Escorpião"
          },
          {
            "text": "Meerkat",
            "emoji": "🐿️",
            "label": "Meerkat",
            "translationPt": "Suricato"
          }
        ],
        "options": [
          "Moose",
          "Stork",
          "Scorpion",
          "Meerkat"
        ],
        "correctAnswer": "Stork",
        "explanation": "Exemplo prático: \"The white stork builds big nests on roofs.\"",
        "phoneticHint": "/stɔːrk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Seagull",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Platypus",
            "emoji": "🦆",
            "label": "Platypus",
            "translationPt": "Ornitorrinco"
          },
          {
            "text": "Piranha",
            "emoji": "🐟",
            "label": "Piranha",
            "translationPt": "Piranha"
          },
          {
            "text": "Seagull",
            "emoji": "🐦",
            "label": "Seagull",
            "translationPt": "Gaivota"
          },
          {
            "text": "Skunk",
            "emoji": "🦨",
            "label": "Skunk",
            "translationPt": "Gambá"
          }
        ],
        "options": [
          "Platypus",
          "Piranha",
          "Seagull",
          "Skunk"
        ],
        "correctAnswer": "Seagull",
        "explanation": "Exemplo prático: \"Seagulls fly over the beach.\"",
        "phoneticHint": "/ˈsiː.ɡʌl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Crow",
        "visualEmoji": "🐦‍⬛",
        "visualOptions": [
          {
            "text": "Orangutan",
            "emoji": "🦧",
            "label": "Orangutan",
            "translationPt": "Orangotango"
          },
          {
            "text": "Otter",
            "emoji": "🦦",
            "label": "Otter",
            "translationPt": "Lontra"
          },
          {
            "text": "Lobster",
            "emoji": "🦞",
            "label": "Lobster",
            "translationPt": "Lagosta"
          },
          {
            "text": "Crow",
            "emoji": "🐦‍⬛",
            "label": "Crow",
            "translationPt": "Corvo"
          }
        ],
        "options": [
          "Orangutan",
          "Otter",
          "Lobster",
          "Crow"
        ],
        "correctAnswer": "Crow",
        "explanation": "Exemplo prático: \"The black crow is a very smart bird.\"",
        "phoneticHint": "/kroʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Vulture",
        "visualEmoji": "🦅",
        "visualOptions": [
          {
            "text": "Vulture",
            "emoji": "🦅",
            "label": "Vulture",
            "translationPt": "Urubu / Abutre"
          },
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          },
          {
            "text": "Bison",
            "emoji": "🦬",
            "label": "Bison",
            "translationPt": "Búfalo / Bisão"
          },
          {
            "text": "Pelican",
            "emoji": "🐦",
            "label": "Pelican",
            "translationPt": "Pelicano"
          }
        ],
        "options": [
          "Vulture",
          "Blowfish",
          "Bison",
          "Pelican"
        ],
        "correctAnswer": "Vulture",
        "explanation": "Exemplo prático: \"Vultures soar high on warm air currents.\"",
        "phoneticHint": "/ˈvʌl.tʃər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Canary",
        "visualEmoji": "🐤",
        "visualOptions": [
          {
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Porco-espinho / Ouriço"
          },
          {
            "text": "Canary",
            "emoji": "🐤",
            "label": "Canary",
            "translationPt": "Canário"
          },
          {
            "text": "Beaver",
            "emoji": "🦫",
            "label": "Beaver",
            "translationPt": "Castor"
          },
          {
            "text": "Boar",
            "emoji": "🐗",
            "label": "Boar",
            "translationPt": "Javali"
          }
        ],
        "options": [
          "Hedgehog",
          "Canary",
          "Beaver",
          "Boar"
        ],
        "correctAnswer": "Canary",
        "explanation": "Exemplo prático: \"The yellow canary sings a bright song.\"",
        "phoneticHint": "/kəˈner.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Llama",
        "visualEmoji": "🦙",
        "visualOptions": [
          {
            "text": "Walrus",
            "emoji": "🦭",
            "label": "Walrus",
            "translationPt": "Morsa"
          },
          {
            "text": "Dragonfly",
            "emoji": "蜻",
            "label": "Dragonfly",
            "translationPt": "Libélula"
          },
          {
            "text": "Llama",
            "emoji": "🦙",
            "label": "Llama",
            "translationPt": "Lhama"
          },
          {
            "text": "Beetle",
            "emoji": "🪲",
            "label": "Beetle",
            "translationPt": "Besouro"
          }
        ],
        "options": [
          "Walrus",
          "Dragonfly",
          "Llama",
          "Beetle"
        ],
        "correctAnswer": "Llama",
        "explanation": "Exemplo prático: \"Llamas live in the Andes mountains of South America.\"",
        "phoneticHint": "/ˈlɑː.mə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Orangutan",
        "visualEmoji": "🦧",
        "visualOptions": [
          {
            "text": "Platypus",
            "emoji": "🦆",
            "label": "Platypus",
            "translationPt": "Ornitorrinco"
          },
          {
            "text": "Moose",
            "emoji": "🫎",
            "label": "Moose",
            "translationPt": "Alce"
          },
          {
            "text": "Piranha",
            "emoji": "🐟",
            "label": "Piranha",
            "translationPt": "Piranha"
          },
          {
            "text": "Orangutan",
            "emoji": "🦧",
            "label": "Orangutan",
            "translationPt": "Orangotango"
          }
        ],
        "options": [
          "Platypus",
          "Moose",
          "Piranha",
          "Orangutan"
        ],
        "correctAnswer": "Orangutan",
        "explanation": "Exemplo prático: \"The orangutan has long reddish hair.\"",
        "phoneticHint": "/əˈræŋ.ə.tæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hyena",
        "visualEmoji": "🐕",
        "visualOptions": [
          {
            "text": "Hyena",
            "emoji": "🐕",
            "label": "Hyena",
            "translationPt": "Hiena"
          },
          {
            "text": "Squid",
            "emoji": "🦑",
            "label": "Squid",
            "translationPt": "Lula"
          },
          {
            "text": "Vulture",
            "emoji": "🦅",
            "label": "Vulture",
            "translationPt": "Urubu / Abutre"
          },
          {
            "text": "Crow",
            "emoji": "🐦‍⬛",
            "label": "Crow",
            "translationPt": "Corvo"
          }
        ],
        "options": [
          "Hyena",
          "Squid",
          "Vulture",
          "Crow"
        ],
        "correctAnswer": "Hyena",
        "explanation": "Exemplo prático: \"Spotted hyenas live in the African savanna.\"",
        "phoneticHint": "/haɪˈiː.nə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bison",
        "visualEmoji": "🦬",
        "visualOptions": [
          {
            "text": "Raccoon",
            "emoji": "🦝",
            "label": "Raccoon",
            "translationPt": "Guaxinim"
          },
          {
            "text": "Canary",
            "emoji": "🐤",
            "label": "Canary",
            "translationPt": "Canário"
          },
          {
            "text": "Bison",
            "emoji": "🦬",
            "label": "Bison",
            "translationPt": "Búfalo / Bisão"
          },
          {
            "text": "Orca",
            "emoji": "🐋",
            "label": "Orca",
            "translationPt": "Orca (Baleia-assassina)"
          }
        ],
        "options": [
          "Raccoon",
          "Canary",
          "Bison",
          "Orca"
        ],
        "correctAnswer": "Bison",
        "explanation": "Exemplo prático: \"The large bison has thick fur on its shoulders.\"",
        "phoneticHint": "/ˈbaɪ.sən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Boar",
        "visualEmoji": "🐗",
        "visualOptions": [
          {
            "text": "Boar",
            "emoji": "🐗",
            "label": "Boar",
            "translationPt": "Javali"
          },
          {
            "text": "Stingray",
            "emoji": "🐟",
            "label": "Stingray",
            "translationPt": "Arraia"
          },
          {
            "text": "Llama",
            "emoji": "🦙",
            "label": "Llama",
            "translationPt": "Lhama"
          },
          {
            "text": "Stork",
            "emoji": "🐦",
            "label": "Stork",
            "translationPt": "Cegonha"
          }
        ],
        "options": [
          "Boar",
          "Stingray",
          "Llama",
          "Stork"
        ],
        "correctAnswer": "Boar",
        "explanation": "Exemplo prático: \"The wild boar has curved tusks.\"",
        "phoneticHint": "/bɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Moose",
        "visualEmoji": "🫎",
        "visualOptions": [
          {
            "text": "Seagull",
            "emoji": "🐦",
            "label": "Seagull",
            "translationPt": "Gaivota"
          },
          {
            "text": "Pelican",
            "emoji": "🐦",
            "label": "Pelican",
            "translationPt": "Pelicano"
          },
          {
            "text": "Scorpion",
            "emoji": "🦂",
            "label": "Scorpion",
            "translationPt": "Escorpião"
          },
          {
            "text": "Moose",
            "emoji": "🫎",
            "label": "Moose",
            "translationPt": "Alce"
          }
        ],
        "options": [
          "Seagull",
          "Pelican",
          "Scorpion",
          "Moose"
        ],
        "correctAnswer": "Moose",
        "explanation": "Exemplo prático: \"The northern moose has huge flat antlers.\"",
        "phoneticHint": "/muːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hedgehog",
        "visualEmoji": "🦔",
        "visualOptions": [
          {
            "text": "Hyena",
            "emoji": "🐕",
            "label": "Hyena",
            "translationPt": "Hiena"
          },
          {
            "text": "Meerkat",
            "emoji": "🐿️",
            "label": "Meerkat",
            "translationPt": "Suricato"
          },
          {
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Porco-espinho / Ouriço"
          },
          {
            "text": "Grasshopper",
            "emoji": "🦗",
            "label": "Grasshopper",
            "translationPt": "Gafanhoto / Grilo"
          }
        ],
        "options": [
          "Hyena",
          "Meerkat",
          "Hedgehog",
          "Grasshopper"
        ],
        "correctAnswer": "Hedgehog",
        "explanation": "Exemplo prático: \"The little hedgehog curls into a spiky ball.\"",
        "phoneticHint": "/ˈhedʒ.hɔːɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Raccoon",
        "visualEmoji": "🦝",
        "visualOptions": [
          {
            "text": "Platypus",
            "emoji": "🦆",
            "label": "Platypus",
            "translationPt": "Ornitorrinco"
          },
          {
            "text": "Raccoon",
            "emoji": "🦝",
            "label": "Raccoon",
            "translationPt": "Guaxinim"
          },
          {
            "text": "Squid",
            "emoji": "🦑",
            "label": "Squid",
            "translationPt": "Lula"
          },
          {
            "text": "Piranha",
            "emoji": "🐟",
            "label": "Piranha",
            "translationPt": "Piranha"
          }
        ],
        "options": [
          "Platypus",
          "Raccoon",
          "Squid",
          "Piranha"
        ],
        "correctAnswer": "Raccoon",
        "explanation": "Exemplo prático: \"The raccoon looks like it is wearing a black mask.\"",
        "phoneticHint": "/ræˈkuːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Otter",
        "visualEmoji": "🦦",
        "visualOptions": [
          {
            "text": "Otter",
            "emoji": "🦦",
            "label": "Otter",
            "translationPt": "Lontra"
          },
          {
            "text": "Canary",
            "emoji": "🐤",
            "label": "Canary",
            "translationPt": "Canário"
          },
          {
            "text": "Crow",
            "emoji": "🐦‍⬛",
            "label": "Crow",
            "translationPt": "Corvo"
          },
          {
            "text": "Vulture",
            "emoji": "🦅",
            "label": "Vulture",
            "translationPt": "Urubu / Abutre"
          }
        ],
        "options": [
          "Otter",
          "Canary",
          "Crow",
          "Vulture"
        ],
        "correctAnswer": "Otter",
        "explanation": "Exemplo prático: \"River otters are playful swimmers.\"",
        "phoneticHint": "/ˈɑː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Beaver",
        "visualEmoji": "🦫",
        "visualOptions": [
          {
            "text": "Orca",
            "emoji": "🐋",
            "label": "Orca",
            "translationPt": "Orca (Baleia-assassina)"
          },
          {
            "text": "Lobster",
            "emoji": "🦞",
            "label": "Lobster",
            "translationPt": "Lagosta"
          },
          {
            "text": "Orangutan",
            "emoji": "🦧",
            "label": "Orangutan",
            "translationPt": "Orangotango"
          },
          {
            "text": "Beaver",
            "emoji": "🦫",
            "label": "Beaver",
            "translationPt": "Castor"
          }
        ],
        "options": [
          "Orca",
          "Lobster",
          "Orangutan",
          "Beaver"
        ],
        "correctAnswer": "Beaver",
        "explanation": "Exemplo prático: \"The beaver has strong teeth and a flat tail.\"",
        "phoneticHint": "/ˈbiː.vər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Skunk",
        "visualEmoji": "🦨",
        "visualOptions": [
          {
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Porco-espinho / Ouriço"
          },
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          },
          {
            "text": "Skunk",
            "emoji": "🦨",
            "label": "Skunk",
            "translationPt": "Gambá"
          },
          {
            "text": "Hyena",
            "emoji": "🐕",
            "label": "Hyena",
            "translationPt": "Hiena"
          }
        ],
        "options": [
          "Hedgehog",
          "Blowfish",
          "Skunk",
          "Hyena"
        ],
        "correctAnswer": "Skunk",
        "explanation": "Exemplo prático: \"The black skunk has a white stripe down its back.\"",
        "phoneticHint": "/skʌŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Meerkat",
        "visualEmoji": "🐿️",
        "visualOptions": [
          {
            "text": "Boar",
            "emoji": "🐗",
            "label": "Boar",
            "translationPt": "Javali"
          },
          {
            "text": "Meerkat",
            "emoji": "🐿️",
            "label": "Meerkat",
            "translationPt": "Suricato"
          },
          {
            "text": "Walrus",
            "emoji": "🦭",
            "label": "Walrus",
            "translationPt": "Morsa"
          },
          {
            "text": "Bison",
            "emoji": "🦬",
            "label": "Bison",
            "translationPt": "Búfalo / Bisão"
          }
        ],
        "options": [
          "Boar",
          "Meerkat",
          "Walrus",
          "Bison"
        ],
        "correctAnswer": "Meerkat",
        "explanation": "Exemplo prático: \"The meerkat stands upright to watch the desert.\"",
        "phoneticHint": "/ˈmɪr.kæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Platypus",
        "visualEmoji": "🦆",
        "visualOptions": [
          {
            "text": "Platypus",
            "emoji": "🦆",
            "label": "Platypus",
            "translationPt": "Ornitorrinco"
          },
          {
            "text": "Beetle",
            "emoji": "🪲",
            "label": "Beetle",
            "translationPt": "Besouro"
          },
          {
            "text": "Raccoon",
            "emoji": "🦝",
            "label": "Raccoon",
            "translationPt": "Guaxinim"
          },
          {
            "text": "Otter",
            "emoji": "🦦",
            "label": "Otter",
            "translationPt": "Lontra"
          }
        ],
        "options": [
          "Platypus",
          "Beetle",
          "Raccoon",
          "Otter"
        ],
        "correctAnswer": "Platypus",
        "explanation": "Exemplo prático: \"The Australian platypus has a duck bill and beaver tail.\"",
        "phoneticHint": "/ˈplæt.ɪ.pəs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Scorpion",
        "visualEmoji": "🦂",
        "visualOptions": [
          {
            "text": "Stingray",
            "emoji": "🐟",
            "label": "Stingray",
            "translationPt": "Arraia"
          },
          {
            "text": "Stork",
            "emoji": "🐦",
            "label": "Stork",
            "translationPt": "Cegonha"
          },
          {
            "text": "Seagull",
            "emoji": "🐦",
            "label": "Seagull",
            "translationPt": "Gaivota"
          },
          {
            "text": "Scorpion",
            "emoji": "🦂",
            "label": "Scorpion",
            "translationPt": "Escorpião"
          }
        ],
        "options": [
          "Stingray",
          "Stork",
          "Seagull",
          "Scorpion"
        ],
        "correctAnswer": "Scorpion",
        "explanation": "Exemplo prático: \"The scorpion has pincers and a curved tail.\"",
        "phoneticHint": "/ˈskɔːr.pi.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Grasshopper",
        "visualEmoji": "🦗",
        "visualOptions": [
          {
            "text": "Grasshopper",
            "emoji": "🦗",
            "label": "Grasshopper",
            "translationPt": "Gafanhoto / Grilo"
          },
          {
            "text": "Skunk",
            "emoji": "🦨",
            "label": "Skunk",
            "translationPt": "Gambá"
          },
          {
            "text": "Pelican",
            "emoji": "🐦",
            "label": "Pelican",
            "translationPt": "Pelicano"
          },
          {
            "text": "Llama",
            "emoji": "🦙",
            "label": "Llama",
            "translationPt": "Lhama"
          }
        ],
        "options": [
          "Grasshopper",
          "Skunk",
          "Pelican",
          "Llama"
        ],
        "correctAnswer": "Grasshopper",
        "explanation": "Exemplo prático: \"The green grasshopper jumps in the grass.\"",
        "phoneticHint": "/ˈɡræsˌhɑː.pər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Dragonfly",
        "visualEmoji": "蜻",
        "visualOptions": [
          {
            "text": "Beaver",
            "emoji": "🦫",
            "label": "Beaver",
            "translationPt": "Castor"
          },
          {
            "text": "Dragonfly",
            "emoji": "蜻",
            "label": "Dragonfly",
            "translationPt": "Libélula"
          },
          {
            "text": "Meerkat",
            "emoji": "🐿️",
            "label": "Meerkat",
            "translationPt": "Suricato"
          },
          {
            "text": "Moose",
            "emoji": "🫎",
            "label": "Moose",
            "translationPt": "Alce"
          }
        ],
        "options": [
          "Beaver",
          "Dragonfly",
          "Meerkat",
          "Moose"
        ],
        "correctAnswer": "Dragonfly",
        "explanation": "Exemplo prático: \"A dragonfly has four transparent wings.\"",
        "phoneticHint": "/ˈdræɡ.ən.flaɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Beetle",
        "visualEmoji": "🪲",
        "visualOptions": [
          {
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Porco-espinho / Ouriço"
          },
          {
            "text": "Hyena",
            "emoji": "🐕",
            "label": "Hyena",
            "translationPt": "Hiena"
          },
          {
            "text": "Beetle",
            "emoji": "🪲",
            "label": "Beetle",
            "translationPt": "Besouro"
          },
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          }
        ],
        "options": [
          "Hedgehog",
          "Hyena",
          "Beetle",
          "Blowfish"
        ],
        "correctAnswer": "Beetle",
        "explanation": "Exemplo prático: \"The shiny beetle has a hard shell.\"",
        "phoneticHint": "/ˈbiː.təl/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p18",
    "worldId": 0,
    "phaseNumber": 18,
    "title": "Rodada 4 • Casa & Objetos IV: Instrumentos & Ferramentas",
    "subtitle": "Passo 3/5 da Rodada 4 • 30 instrumentos musicais, ferramentas e utensílios",
    "pedagogicalObjective": "Dominar o vocabulário de instrumentos musicais, ferramentas domésticas e primeiros socorros.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 3º passo da Rodada 4 aprendemos instrumentos musicais (Violão, Piano, Bateria, Violino, Flauta, Trompete, Sanfona) e ferramentas práticas (Martelo, Chave de Fenda, Alicate, Furadeira, Trena, Escada)."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p18-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Guitar",
        "visualEmoji": "🎸",
        "visualOptions": [
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Plugue de tomada"
          }
        ],
        "options": [
          "Battery",
          "Guitar",
          "Hammer",
          "Electric Plug"
        ],
        "correctAnswer": "Guitar",
        "explanation": "Exemplo prático: \"He plays acoustic guitar with his friends.\"",
        "phoneticHint": "/ɡɪˈtɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Piano",
        "visualEmoji": "🎹",
        "visualOptions": [
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Trumpet",
            "emoji": "🎺",
            "label": "Trumpet",
            "translationPt": "Trompete"
          },
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro"
          }
        ],
        "options": [
          "Piano",
          "Trumpet",
          "Tape Measure",
          "Thermometer"
        ],
        "correctAnswer": "Piano",
        "explanation": "Exemplo prático: \"She plays a melody on the grand piano.\"",
        "phoneticHint": "/piˈæn.oʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Drum",
        "visualEmoji": "🥁",
        "visualOptions": [
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira"
          },
          {
            "text": "Accordion",
            "emoji": "🪗",
            "label": "Accordion",
            "translationPt": "Sanfona / Acordeão"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          }
        ],
        "options": [
          "Drill",
          "Accordion",
          "Wrench",
          "Drum"
        ],
        "correctAnswer": "Drum",
        "explanation": "Exemplo prático: \"Keep the musical beat on the drum.\"",
        "phoneticHint": "/drʌm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Violin",
        "visualEmoji": "🎻",
        "visualOptions": [
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote"
          },
          {
            "text": "Pliers",
            "emoji": "钳",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          }
        ],
        "options": [
          "Violin",
          "Saw",
          "Pliers",
          "Screwdriver"
        ],
        "correctAnswer": "Violin",
        "explanation": "Exemplo prático: \"The wooden violin has four strings and a bow.\"",
        "phoneticHint": "/ˌvaɪ.əˈlɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Flute",
        "visualEmoji": "🪈",
        "visualOptions": [
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela"
          },
          {
            "text": "Chain",
            "emoji": "⛓️",
            "label": "Chain",
            "translationPt": "Corrente de metal"
          }
        ],
        "options": [
          "Flashlight",
          "Flute",
          "Candle",
          "Chain"
        ],
        "correctAnswer": "Flute",
        "explanation": "Exemplo prático: \"Play a soft tune on the flute.\"",
        "phoneticHint": "/fluːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Trumpet",
        "visualEmoji": "🎺",
        "visualOptions": [
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada"
          },
          {
            "text": "Radio",
            "emoji": "📻",
            "label": "Radio",
            "translationPt": "Rádio"
          },
          {
            "text": "Trumpet",
            "emoji": "🎺",
            "label": "Trumpet",
            "translationPt": "Trompete"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado"
          }
        ],
        "options": [
          "Light Bulb",
          "Radio",
          "Trumpet",
          "Lock"
        ],
        "correctAnswer": "Trumpet",
        "explanation": "Exemplo prático: \"The brass trumpet shines on stage.\"",
        "phoneticHint": "/ˈtrʌm.pɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Saxophone",
        "visualEmoji": "🎷",
        "visualOptions": [
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta / Cesto"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          },
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          }
        ],
        "options": [
          "Basket",
          "Bandage",
          "Box",
          "Saxophone"
        ],
        "correctAnswer": "Saxophone",
        "explanation": "Exemplo prático: \"He plays jazz on the golden saxophone.\"",
        "phoneticHint": "/ˈsæk.sə.foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Accordion",
        "visualEmoji": "🪗",
        "visualOptions": [
          {
            "text": "Accordion",
            "emoji": "🪗",
            "label": "Accordion",
            "translationPt": "Sanfona / Acordeão"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil"
          }
        ],
        "options": [
          "Accordion",
          "Piano",
          "Violin",
          "Ladder"
        ],
        "correctAnswer": "Accordion",
        "explanation": "Exemplo prático: \"The accordion is traditional in Brazilian forró.\"",
        "phoneticHint": "/əˈkɔːr.di.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Microphone",
        "visualEmoji": "🎤",
        "visualOptions": [
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          }
        ],
        "options": [
          "Guitar",
          "Flute",
          "Microphone",
          "Drum"
        ],
        "correctAnswer": "Microphone",
        "explanation": "Exemplo prático: \"Sing clearly into the microphone.\"",
        "phoneticHint": "/ˈmaɪ.krə.foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Radio",
        "visualEmoji": "📻",
        "visualOptions": [
          {
            "text": "Radio",
            "emoji": "📻",
            "label": "Radio",
            "translationPt": "Rádio"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Cápsula"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote"
          }
        ],
        "options": [
          "Radio",
          "Screwdriver",
          "Pill",
          "Saw"
        ],
        "correctAnswer": "Radio",
        "explanation": "Exemplo prático: \"Listen to music and news on the portable radio.\"",
        "phoneticHint": "/ˈreɪ.di.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Flashlight",
        "visualEmoji": "🔦",
        "visualOptions": [
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado"
          },
          {
            "text": "Chain",
            "emoji": "⛓️",
            "label": "Chain",
            "translationPt": "Corrente de metal"
          },
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          },
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          }
        ],
        "options": [
          "Lock",
          "Chain",
          "Saxophone",
          "Flashlight"
        ],
        "correctAnswer": "Flashlight",
        "explanation": "Exemplo prático: \"Use a battery flashlight in the dark.\"",
        "phoneticHint": "/ˈflæʃ.laɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Battery",
        "visualEmoji": "🔋",
        "visualOptions": [
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta / Cesto"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          }
        ],
        "options": [
          "Battery",
          "Bandage",
          "Basket",
          "Box"
        ],
        "correctAnswer": "Battery",
        "explanation": "Exemplo prático: \"Put two AA batteries inside the remote.\"",
        "phoneticHint": "/ˈbæt.ər.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Electric Plug",
        "visualEmoji": "🔌",
        "visualOptions": [
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil"
          },
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Plugue de tomada"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          }
        ],
        "options": [
          "Microphone",
          "Ladder",
          "Electric Plug",
          "Hammer"
        ],
        "correctAnswer": "Electric Plug",
        "explanation": "Exemplo prático: \"Connect the electric plug to the outlet.\"",
        "phoneticHint": "/ɪˈlek.trɪk plʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Light Bulb",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada"
          },
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          },
          {
            "text": "Accordion",
            "emoji": "🪗",
            "label": "Accordion",
            "translationPt": "Sanfona / Acordeão"
          }
        ],
        "options": [
          "Light Bulb",
          "Drill",
          "Drum",
          "Accordion"
        ],
        "correctAnswer": "Light Bulb",
        "explanation": "Exemplo prático: \"Replace the burned-out light bulb.\"",
        "phoneticHint": "/ˈlaɪt bʌlb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lock",
        "visualEmoji": "🔒",
        "visualOptions": [
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Cápsula"
          },
          {
            "text": "Pliers",
            "emoji": "钳",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado"
          }
        ],
        "options": [
          "Piano",
          "Pill",
          "Pliers",
          "Lock"
        ],
        "correctAnswer": "Lock",
        "explanation": "Exemplo prático: \"Close the gate with a metal lock.\"",
        "phoneticHint": "/lɑːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Box",
        "visualEmoji": "📦",
        "visualOptions": [
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta"
          }
        ],
        "options": [
          "Flashlight",
          "Candle",
          "Box",
          "Flute"
        ],
        "correctAnswer": "Box",
        "explanation": "Exemplo prático: \"Pack the items inside a cardboard box.\"",
        "phoneticHint": "/bɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Basket",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta / Cesto"
          },
          {
            "text": "Radio",
            "emoji": "📻",
            "label": "Radio",
            "translationPt": "Rádio"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          }
        ],
        "options": [
          "Saxophone",
          "Basket",
          "Radio",
          "Violin"
        ],
        "correctAnswer": "Basket",
        "explanation": "Exemplo prático: \"Carry the picnic food in a woven basket.\"",
        "phoneticHint": "/ˈbæs.kɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ladder",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil"
          },
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Plugue de tomada"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada"
          }
        ],
        "options": [
          "Ladder",
          "Electric Plug",
          "Battery",
          "Light Bulb"
        ],
        "correctAnswer": "Ladder",
        "explanation": "Exemplo prático: \"Use a folding step ladder to reach the top shelf.\"",
        "phoneticHint": "/ˈlæd.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hammer",
        "visualEmoji": "🔨",
        "visualOptions": [
          {
            "text": "Trumpet",
            "emoji": "🎺",
            "label": "Trumpet",
            "translationPt": "Trompete"
          },
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          }
        ],
        "options": [
          "Trumpet",
          "Tape Measure",
          "Thermometer",
          "Hammer"
        ],
        "correctAnswer": "Hammer",
        "explanation": "Exemplo prático: \"Hit the nail with a claw hammer.\"",
        "phoneticHint": "/ˈhæm.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Screwdriver",
        "visualEmoji": "🪛",
        "visualOptions": [
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          }
        ],
        "options": [
          "Screwdriver",
          "Microphone",
          "Drum",
          "Guitar"
        ],
        "correctAnswer": "Screwdriver",
        "explanation": "Exemplo prático: \"Tighten the screw with a screwdriver.\"",
        "phoneticHint": "/ˈskruːˌdraɪ.vər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Wrench",
        "visualEmoji": "🔧",
        "visualOptions": [
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Cápsula"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          }
        ],
        "options": [
          "Saxophone",
          "Wrench",
          "Pill",
          "Piano"
        ],
        "correctAnswer": "Wrench",
        "explanation": "Exemplo prático: \"Turn the metal nut with a steel wrench.\"",
        "phoneticHint": "/rentʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pliers",
        "visualEmoji": "钳",
        "visualOptions": [
          {
            "text": "Pliers",
            "emoji": "钳",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta"
          },
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Chain",
            "emoji": "⛓️",
            "label": "Chain",
            "translationPt": "Corrente de metal"
          }
        ],
        "options": [
          "Pliers",
          "Flute",
          "Flashlight",
          "Chain"
        ],
        "correctAnswer": "Pliers",
        "explanation": "Exemplo prático: \"Hold the wire firmly with pliers.\"",
        "phoneticHint": "/ˈplaɪ.ərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Saw",
        "visualEmoji": "🪚",
        "visualOptions": [
          {
            "text": "Radio",
            "emoji": "📻",
            "label": "Radio",
            "translationPt": "Rádio"
          },
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote"
          }
        ],
        "options": [
          "Radio",
          "Light Bulb",
          "Lock",
          "Saw"
        ],
        "correctAnswer": "Saw",
        "explanation": "Exemplo prático: \"Cut the wooden board with a hand saw.\"",
        "phoneticHint": "/sɔː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tape Measure",
        "visualEmoji": "📏",
        "visualOptions": [
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          },
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Plugue de tomada"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          }
        ],
        "options": [
          "Tape Measure",
          "Electric Plug",
          "Battery",
          "Hammer"
        ],
        "correctAnswer": "Tape Measure",
        "explanation": "Exemplo prático: \"Measure the wall width with a tape measure.\"",
        "phoneticHint": "/ˈteɪp ˌmeʒ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Drill",
        "visualEmoji": "🪛",
        "visualOptions": [
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          },
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro"
          },
          {
            "text": "Trumpet",
            "emoji": "🎺",
            "label": "Trumpet",
            "translationPt": "Trompete"
          }
        ],
        "options": [
          "Wrench",
          "Drill",
          "Thermometer",
          "Trumpet"
        ],
        "correctAnswer": "Drill",
        "explanation": "Exemplo prático: \"Make a hole in the wall with an electric drill.\"",
        "phoneticHint": "/drɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Chain",
        "visualEmoji": "⛓️",
        "visualOptions": [
          {
            "text": "Accordion",
            "emoji": "🪗",
            "label": "Accordion",
            "translationPt": "Sanfona / Acordeão"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Chain",
            "emoji": "⛓️",
            "label": "Chain",
            "translationPt": "Corrente de metal"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          }
        ],
        "options": [
          "Accordion",
          "Guitar",
          "Chain",
          "Box"
        ],
        "correctAnswer": "Chain",
        "explanation": "Exemplo prático: \"A strong steel chain.\"",
        "phoneticHint": "/tʃeɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Candle",
        "visualEmoji": "🕯️",
        "visualOptions": [
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela"
          }
        ],
        "options": [
          "Screwdriver",
          "Saw",
          "Violin",
          "Candle"
        ],
        "correctAnswer": "Candle",
        "explanation": "Exemplo prático: \"Light a white wax candle.\"",
        "phoneticHint": "/ˈkæn.dəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bandage",
        "visualEmoji": "🩹",
        "visualOptions": [
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
          },
          {
            "text": "Pliers",
            "emoji": "钳",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil"
          }
        ],
        "options": [
          "Bandage",
          "Microphone",
          "Pliers",
          "Ladder"
        ],
        "correctAnswer": "Bandage",
        "explanation": "Exemplo prático: \"Put an adhesive bandage on the small cut.\"",
        "phoneticHint": "/ˈbæn.dɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pill",
        "visualEmoji": "💊",
        "visualOptions": [
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta / Cesto"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Cápsula"
          },
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira"
          }
        ],
        "options": [
          "Basket",
          "Wrench",
          "Pill",
          "Drill"
        ],
        "correctAnswer": "Pill",
        "explanation": "Exemplo prático: \"Take the medicine pill with water.\"",
        "phoneticHint": "/pɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Thermometer",
        "visualEmoji": "🌡️",
        "visualOptions": [
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          },
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Plugue de tomada"
          }
        ],
        "options": [
          "Thermometer",
          "Hammer",
          "Tape Measure",
          "Electric Plug"
        ],
        "correctAnswer": "Thermometer",
        "explanation": "Exemplo prático: \"Check for a fever with a digital thermometer.\"",
        "phoneticHint": "/θərˈmɑː.mə.tər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p19",
    "worldId": 0,
    "phaseNumber": 19,
    "title": "Rodada 4 • Cotidiano IV: Corpo, Esportes & Profissões",
    "subtitle": "Passo 4/5 da Rodada 4 • 30 termos de partes do corpo, esportes e profissões",
    "pedagogicalObjective": "Concluir os 480 termos visuais dominando corpo humano, esportes e profissões.",
    "type": "lesson",
    "icon": "swords",
    "cefrLevel": "A1",
    "theorySummary": [
      "No 4º passo da Rodada 4 aprendemos partes do corpo (Mão, Pé, Olho, Orelha, Nariz, Boca, Dente, Coração), esportes muito praticados no Brasil (Futebol, Basquete, Vôlei, Tênis) e profissões (Médico, Enfermeira, Dentista, Professor, Cozinheiro, Policial, Bombeiro, Piloto).",
      "Logo após este módulo, você fará a Prática Final de Palavras da Rodada 4!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p19-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          }
        ],
        "options": [
          "Hair",
          "Hand",
          "Brain",
          "Heart"
        ],
        "correctAnswer": "Hand",
        "explanation": "Exemplo prático: \"Raise your hand to ask a question.\"",
        "phoneticHint": "/hænd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Foot",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Tennis Ball",
            "emoji": "🎾",
            "label": "Tennis Ball",
            "translationPt": "Bola de tênis"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de campeão"
          }
        ],
        "options": [
          "Tennis Ball",
          "Tooth",
          "Foot",
          "Trophy"
        ],
        "correctAnswer": "Foot",
        "explanation": "Exemplo prático: \"Kick the soccer ball with your foot.\"",
        "phoneticHint": "/fʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Eye",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          }
        ],
        "options": [
          "Dentist",
          "Arm",
          "Doctor",
          "Eye"
        ],
        "correctAnswer": "Eye",
        "explanation": "Exemplo prático: \"We see the world with our eyes.\"",
        "phoneticHint": "/aɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ear",
        "visualEmoji": "👂",
        "visualOptions": [
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          },
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Bola de vôlei"
          }
        ],
        "options": [
          "Ear",
          "Police Officer",
          "Soccer Ball",
          "Volleyball"
        ],
        "correctAnswer": "Ear",
        "explanation": "Exemplo prático: \"We listen to music and speech with our ears.\"",
        "phoneticHint": "/ɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Nose",
        "visualEmoji": "👃",
        "visualOptions": [
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger",
            "translationPt": "Dedo da mão"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Fishing Rod",
            "emoji": "🎣",
            "label": "Fishing Rod",
            "translationPt": "Vara de pescar"
          }
        ],
        "options": [
          "Finger",
          "Firefighter",
          "Nose",
          "Fishing Rod"
        ],
        "correctAnswer": "Nose",
        "explanation": "Exemplo prático: \"Smell the fresh coffee with your nose.\"",
        "phoneticHint": "/noʊz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Mouth",
        "visualEmoji": "👄",
        "visualOptions": [
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Cozinheiro / Chef de cozinha"
          }
        ],
        "options": [
          "Mouth",
          "Foot",
          "Leg",
          "Chef"
        ],
        "correctAnswer": "Mouth",
        "explanation": "Exemplo prático: \"Open your mouth to pronounce the English vowel.\"",
        "phoneticHint": "/maʊθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tooth",
        "visualEmoji": "🦷",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          }
        ],
        "options": [
          "Hand",
          "Bone",
          "Eye",
          "Tooth"
        ],
        "correctAnswer": "Tooth",
        "explanation": "Exemplo prático: \"Brush every tooth with toothpaste.\"",
        "phoneticHint": "/tuːθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hair",
        "visualEmoji": "💇",
        "visualOptions": [
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          }
        ],
        "options": [
          "Nurse",
          "Ear",
          "Hair",
          "Teacher"
        ],
        "correctAnswer": "Hair",
        "explanation": "Exemplo prático: \"She brushes her long brown hair.\"",
        "phoneticHint": "/her/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Finger",
        "visualEmoji": "☝️",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger",
            "translationPt": "Dedo da mão"
          },
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha de ouro"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          }
        ],
        "options": [
          "Basketball",
          "Finger",
          "Medal",
          "Nose"
        ],
        "correctAnswer": "Finger",
        "explanation": "Exemplo prático: \"Point at the picture with your index finger.\"",
        "phoneticHint": "/ˈfɪŋ.ɡər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Arm",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          },
          {
            "text": "Boxing Glove",
            "emoji": "🥊",
            "label": "Boxing Glove",
            "translationPt": "Luva de boxe"
          }
        ],
        "options": [
          "Arm",
          "Mouth",
          "Pilot",
          "Boxing Glove"
        ],
        "correctAnswer": "Arm",
        "explanation": "Exemplo prático: \"Stretch your arms before exercising.\"",
        "phoneticHint": "/ɑːrm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Leg",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Fishing Rod",
            "emoji": "🎣",
            "label": "Fishing Rod",
            "translationPt": "Vara de pescar"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
          }
        ],
        "options": [
          "Foot",
          "Firefighter",
          "Fishing Rod",
          "Leg"
        ],
        "correctAnswer": "Leg",
        "explanation": "Exemplo prático: \"Run fast using your strong legs.\"",
        "phoneticHint": "/leɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Heart",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Bola de vôlei"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Cozinheiro / Chef de cozinha"
          }
        ],
        "options": [
          "Volleyball",
          "Police Officer",
          "Heart",
          "Chef"
        ],
        "correctAnswer": "Heart",
        "explanation": "Exemplo prático: \"Your heart beats inside your chest.\"",
        "phoneticHint": "/hɑːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Brain",
        "visualEmoji": "🧠",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          }
        ],
        "options": [
          "Hand",
          "Brain",
          "Nose",
          "Nurse"
        ],
        "correctAnswer": "Brain",
        "explanation": "Exemplo prático: \"Learning English exercises your brain.\"",
        "phoneticHint": "/breɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bone",
        "visualEmoji": "🦴",
        "visualOptions": [
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          },
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          }
        ],
        "options": [
          "Bone",
          "Doctor",
          "Dentist",
          "Arm"
        ],
        "correctAnswer": "Bone",
        "explanation": "Exemplo prático: \"Milk and calcium keep your bones strong.\"",
        "phoneticHint": "/boʊn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Soccer Ball",
        "visualEmoji": "⚽",
        "visualOptions": [
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha de ouro"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          }
        ],
        "options": [
          "Pilot",
          "Mouth",
          "Medal",
          "Soccer Ball"
        ],
        "correctAnswer": "Soccer Ball",
        "explanation": "Exemplo prático: \"Soccer is the most popular sport in Brazil.\"",
        "phoneticHint": "/ˈsɑː.kər bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Basketball",
        "visualEmoji": "🏀",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de campeão"
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger",
            "translationPt": "Dedo da mão"
          }
        ],
        "options": [
          "Basketball",
          "Tooth",
          "Trophy",
          "Finger"
        ],
        "correctAnswer": "Basketball",
        "explanation": "Exemplo prático: \"Bounce the orange basketball on the court.\"",
        "phoneticHint": "/ˈbæs.kɪt.bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Volleyball",
        "visualEmoji": "🏐",
        "visualOptions": [
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
          },
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Bola de vôlei"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          }
        ],
        "options": [
          "Leg",
          "Volleyball",
          "Hair",
          "Teacher"
        ],
        "correctAnswer": "Volleyball",
        "explanation": "Exemplo prático: \"Hit the volleyball over the net.\"",
        "phoneticHint": "/ˈvɑː.li.bɔːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tennis Ball",
        "visualEmoji": "🎾",
        "visualOptions": [
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Tennis Ball",
            "emoji": "🎾",
            "label": "Tennis Ball",
            "translationPt": "Bola de tênis"
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro"
          }
        ],
        "options": [
          "Ear",
          "Eye",
          "Tennis Ball",
          "Brain"
        ],
        "correctAnswer": "Tennis Ball",
        "explanation": "Exemplo prático: \"Hit the yellow tennis ball with a racket.\"",
        "phoneticHint": "/ˈten.ɪs bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Boxing Glove",
        "visualEmoji": "🥊",
        "visualOptions": [
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Boxing Glove",
            "emoji": "🥊",
            "label": "Boxing Glove",
            "translationPt": "Luva de boxe"
          }
        ],
        "options": [
          "Bone",
          "Soccer Ball",
          "Heart",
          "Boxing Glove"
        ],
        "correctAnswer": "Boxing Glove",
        "explanation": "Exemplo prático: \"Put on red boxing gloves for training.\"",
        "phoneticHint": "/ˈbɑːk.sɪŋ ɡlʌv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Fishing Rod",
        "visualEmoji": "🎣",
        "visualOptions": [
          {
            "text": "Fishing Rod",
            "emoji": "🎣",
            "label": "Fishing Rod",
            "translationPt": "Vara de pescar"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          },
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          }
        ],
        "options": [
          "Fishing Rod",
          "Arm",
          "Dentist",
          "Basketball"
        ],
        "correctAnswer": "Fishing Rod",
        "explanation": "Exemplo prático: \"Catch a fish in the river with a fishing rod.\"",
        "phoneticHint": "/ˈfɪʃ.ɪŋ rɑːd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Medal",
        "visualEmoji": "🥇",
        "visualOptions": [
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha de ouro"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          }
        ],
        "options": [
          "Police Officer",
          "Medal",
          "Mouth",
          "Pilot"
        ],
        "correctAnswer": "Medal",
        "explanation": "Exemplo prático: \"The champion athlete won a gold medal.\"",
        "phoneticHint": "/ˈmed.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Trophy",
        "visualEmoji": "🏆",
        "visualOptions": [
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Tennis Ball",
            "emoji": "🎾",
            "label": "Tennis Ball",
            "translationPt": "Bola de tênis"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de campeão"
          },
          {
            "text": "Finger",
            "emoji": "☝️",
            "label": "Finger",
            "translationPt": "Dedo da mão"
          }
        ],
        "options": [
          "Foot",
          "Tennis Ball",
          "Trophy",
          "Finger"
        ],
        "correctAnswer": "Trophy",
        "explanation": "Exemplo prático: \"The winning team lifted the golden trophy cup.\"",
        "phoneticHint": "/ˈtroʊ.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Boxing Glove",
            "emoji": "🥊",
            "label": "Boxing Glove",
            "translationPt": "Luva de boxe"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          }
        ],
        "options": [
          "Leg",
          "Firefighter",
          "Boxing Glove",
          "Doctor"
        ],
        "correctAnswer": "Doctor",
        "explanation": "Exemplo prático: \"The doctor wears a white coat and a stethoscope.\"",
        "phoneticHint": "/ˈdɑːk.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Nurse",
        "visualEmoji": "👩‍⚕️",
        "visualOptions": [
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "Nurse",
          "Heart",
          "Hair",
          "Hand"
        ],
        "correctAnswer": "Nurse",
        "explanation": "Exemplo prático: \"The hospital nurse cares for the patients.\"",
        "phoneticHint": "/nɜːrs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dentist",
        "visualEmoji": "🦷",
        "visualOptions": [
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          }
        ],
        "options": [
          "Tooth",
          "Eye",
          "Dentist",
          "Nose"
        ],
        "correctAnswer": "Dentist",
        "explanation": "Exemplo prático: \"Visit the dentist to keep your teeth healthy.\"",
        "phoneticHint": "/ˈden.tɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Teacher",
        "visualEmoji": "👩‍🏫",
        "visualOptions": [
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de campeão"
          },
          {
            "text": "Tennis Ball",
            "emoji": "🎾",
            "label": "Tennis Ball",
            "translationPt": "Bola de tênis"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Teacher",
          "Trophy",
          "Tennis Ball",
          "Ear"
        ],
        "correctAnswer": "Teacher",
        "explanation": "Exemplo prático: \"The English teacher writes on the board.\"",
        "phoneticHint": "/ˈtiː.tʃər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chef",
        "visualEmoji": "👨‍🍳",
        "visualOptions": [
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Bola de vôlei"
          },
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha de ouro"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Cozinheiro / Chef de cozinha"
          }
        ],
        "options": [
          "Volleyball",
          "Medal",
          "Soccer Ball",
          "Chef"
        ],
        "correctAnswer": "Chef",
        "explanation": "Exemplo prático: \"The chef wears a white hat in the restaurant kitchen.\"",
        "phoneticHint": "/ʃef/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Police Officer",
        "visualEmoji": "👮",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Fishing Rod",
            "emoji": "🎣",
            "label": "Fishing Rod",
            "translationPt": "Vara de pescar"
          }
        ],
        "options": [
          "Doctor",
          "Nurse",
          "Police Officer",
          "Fishing Rod"
        ],
        "correctAnswer": "Police Officer",
        "explanation": "Exemplo prático: \"The police officer helps people in the city.\"",
        "phoneticHint": "/pəˈliːs ˌɔː.fɪ.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Firefighter",
        "visualEmoji": "🧑‍🚒",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro"
          },
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso"
          }
        ],
        "options": [
          "Basketball",
          "Firefighter",
          "Brain",
          "Bone"
        ],
        "correctAnswer": "Firefighter",
        "explanation": "Exemplo prático: \"The firefighter wears a protective helmet and jacket.\"",
        "phoneticHint": "/ˈfaɪ.ərˌfaɪ.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pilot",
        "visualEmoji": "👨‍✈️",
        "visualOptions": [
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          },
          {
            "text": "Boxing Glove",
            "emoji": "🥊",
            "label": "Boxing Glove",
            "translationPt": "Luva de boxe"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          }
        ],
        "options": [
          "Pilot",
          "Boxing Glove",
          "Teacher",
          "Nose"
        ],
        "correctAnswer": "Pilot",
        "explanation": "Exemplo prático: \"The airline pilot flies the commercial airplane.\"",
        "phoneticHint": "/ˈpaɪ.lət/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p20",
    "worldId": 0,
    "phaseNumber": 20,
    "title": "Prática da Rodada 4: Palavras & Associações Simples",
    "subtitle": "Passo 5/5 da Rodada 4 • 12 exercícios simples com as palavras aprendidas",
    "pedagogicalObjective": "Consolidar na prática as palavras aprendidas nos 4 módulos da Rodada 4 (Alimentos, Animais, Casa e Cotidiano) com associações simples e diretas.",
    "type": "boss",
    "icon": "swords",
    "cefrLevel": "A1",
    "theorySummary": [
      "Parabéns por completar os 4 módulos visuais da Rodada 4 (Alimentos, Animais, Casa e Cotidiano)!",
      "Agora vamos praticar as palavras aprendidas com combinações curtas, simples e de fácil associação.",
      "Ouça cada expressão em inglês americano e escolha ou monte a resposta correta!"
    ],
    "xpReward": 90,
    "gemsReward": 35,
    "exercises": [
      {
        "id": "w0-p20-e1",
        "type": "multiple-choice",
        "visualEmoji": "💧",
        "prompt": "O que significa \"Cold water\" em português?",
        "audioPhrase": "Cold water",
        "options": [
          "Água gelada",
          "Café quente",
          "Leite fresco",
          "Suco de laranja"
        ],
        "correctAnswer": "Água gelada",
        "explanation": "\"Cold water\" = \"Água gelada\". Associação simples e direta!",
        "phoneticHint": "/koʊld ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e2",
        "type": "word-order",
        "visualEmoji": "☕",
        "prompt": "Monte em inglês: \"Café quente\" (usando o vocabulário da Rodada 4):",
        "audioPhrase": "Hot coffee",
        "options": [
          "coffee",
          "Hot",
          "water"
        ],
        "correctAnswer": "Hot coffee",
        "explanation": "\"Hot coffee\" significa \"Café quente\".",
        "phoneticHint": "/hɑːt ˈkɔː.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e3",
        "type": "multiple-choice",
        "visualEmoji": "🍰",
        "prompt": "O que significa \"Sweet cake\" em português?",
        "audioPhrase": "Sweet cake",
        "options": [
          "Bolo doce",
          "Sorvete gelado",
          "Pipoca salgada",
          "Pudim cremoso"
        ],
        "correctAnswer": "Bolo doce",
        "explanation": "\"Sweet cake\" = \"Bolo doce\". Associação simples e direta!",
        "phoneticHint": "/swiːt keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e4",
        "type": "multiple-choice",
        "visualEmoji": "🦞",
        "prompt": "O que significa \"Red lobster\" em português?",
        "audioPhrase": "Red lobster",
        "options": [
          "Lagosta vermelha",
          "Baleia orca",
          "Lhama branca",
          "Gaivota voando"
        ],
        "correctAnswer": "Lagosta vermelha",
        "explanation": "\"Red lobster\" = \"Lagosta vermelha\". Associação simples e direta!",
        "phoneticHint": "/red ˈlɑːb.stər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e5",
        "type": "word-order",
        "visualEmoji": "🐤",
        "prompt": "Monte em inglês: \"Canário amarelo\" (usando o vocabulário da Rodada 4):",
        "audioPhrase": "Yellow canary",
        "options": [
          "canary",
          "Yellow",
          "crow"
        ],
        "correctAnswer": "Yellow canary",
        "explanation": "\"Yellow canary\" significa \"Canário amarelo\".",
        "phoneticHint": "/ˈjel.oʊ kəˈner.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e6",
        "type": "multiple-choice",
        "visualEmoji": "🦙",
        "prompt": "O que significa \"White llama\" em português?",
        "audioPhrase": "White llama",
        "options": [
          "Lhama branca",
          "Alce grande",
          "Javali forte",
          "Castor rápido"
        ],
        "correctAnswer": "Lhama branca",
        "explanation": "\"White llama\" = \"Lhama branca\". Associação simples e direta!",
        "phoneticHint": "/waɪt ˈlɑː.mə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e7",
        "type": "multiple-choice",
        "visualEmoji": "🎸",
        "prompt": "O que significa \"My guitar\" em português?",
        "audioPhrase": "My guitar",
        "options": [
          "Meu violão",
          "Meu piano",
          "Meu tambor",
          "Minha flauta"
        ],
        "correctAnswer": "Meu violão",
        "explanation": "\"My guitar\" = \"Meu violão\". Associação simples e direta!",
        "phoneticHint": "/maɪ ɡɪˈtɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e8",
        "type": "word-order",
        "visualEmoji": "🔨",
        "prompt": "Monte em inglês: \"Martelo pesado\" (usando o vocabulário da Rodada 4):",
        "audioPhrase": "Heavy hammer",
        "options": [
          "hammer",
          "Heavy",
          "saw"
        ],
        "correctAnswer": "Heavy hammer",
        "explanation": "\"Heavy hammer\" significa \"Martelo pesado\".",
        "phoneticHint": "/ˈhev.i ˈhæm.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e9",
        "type": "multiple-choice",
        "visualEmoji": "📦",
        "prompt": "O que significa \"Big box\" em português?",
        "audioPhrase": "Big box",
        "options": [
          "Caixa grande",
          "Cadeado forte",
          "Lanterna acesa",
          "Escada alta"
        ],
        "correctAnswer": "Caixa grande",
        "explanation": "\"Big box\" = \"Caixa grande\". Associação simples e direta!",
        "phoneticHint": "/bɪɡ bɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e10",
        "type": "multiple-choice",
        "visualEmoji": "⚽",
        "prompt": "O que significa \"Soccer ball\" em português?",
        "audioPhrase": "Soccer ball",
        "options": [
          "Bola de futebol",
          "Bola de basquete",
          "Medalha de ouro",
          "Troféu de campeão"
        ],
        "correctAnswer": "Bola de futebol",
        "explanation": "\"Soccer ball\" = \"Bola de futebol\". Associação simples e direta!",
        "phoneticHint": "/ˈsɑː.kər bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e11",
        "type": "word-order",
        "visualEmoji": "👩‍🏫",
        "prompt": "Monte em inglês: \"Bom professor\" (usando o vocabulário da Rodada 4):",
        "audioPhrase": "Good teacher",
        "options": [
          "teacher",
          "Good",
          "doctor"
        ],
        "correctAnswer": "Good teacher",
        "explanation": "\"Good teacher\" significa \"Bom professor\".",
        "phoneticHint": "/ɡʊd ˈtiː.tʃər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e12",
        "type": "multiple-choice",
        "visualEmoji": "👨‍⚕️",
        "prompt": "O que significa \"Family doctor\" em português?",
        "audioPhrase": "Family doctor",
        "options": [
          "Médico da família",
          "Chef de cozinha",
          "Bombeiro corajoso",
          "Piloto de avião"
        ],
        "correctAnswer": "Médico da família",
        "explanation": "\"Family doctor\" = \"Médico da família\". Associação simples e direta!",
        "phoneticHint": "/ˈfæm.əl.i ˈdɑːk.tər/",
        "skillCategory": "vocabulary"
      }
    ]
  }
];
