import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = [
  {
    "id": "w0-p1",
    "worldId": 0,
    "phaseNumber": 1,
    "title": "Frutas & Alimentos I: Essenciais",
    "subtitle": "Módulo 1/4 • 30 frutas do mais comum ao mais incomum",
    "pedagogicalObjective": "Dominar 30 frutas em inglês, partindo das mais comuns do dia a dia até as mais exóticas.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Este módulo possui 30 frutas organizadas da mais comum (#1 Apple) até as menos comuns (#30 Starfruit).",
      "Ouça a pronúncia nativa americana ao iniciar cada pergunta e selecione a ilustração correta.",
      "Se errar algum item, você fará a revisão ao final até acertar 100% do módulo!"
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
            "text": "Raspberry",
            "emoji": "❤️",
            "label": "Raspberry",
            "translationPt": "Framboesa"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Blueberry",
            "emoji": "🫐",
            "label": "Blueberry",
            "translationPt": "Mirtilo"
          },
          {
            "text": "Blackberry",
            "emoji": "⚫",
            "label": "Blackberry",
            "translationPt": "Amora"
          }
        ],
        "options": [
          "Raspberry",
          "Apple",
          "Blueberry",
          "Blackberry"
        ],
        "correctAnswer": "Apple",
        "explanation": "Exemplo prático: \"I eat a fresh red apple every morning.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "emoji": "🟠",
            "label": "Tangerine",
            "translationPt": "Tangerina / Mexerica"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão siciliano"
          }
        ],
        "options": [
          "Banana",
          "Kiwi",
          "Tangerine",
          "Lemon"
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
          },
          {
            "text": "Dragon Fruit",
            "emoji": "🐉",
            "label": "Dragon Fruit",
            "translationPt": "Pitaia"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          }
        ],
        "options": [
          "Guava",
          "Avocado",
          "Dragon Fruit",
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
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          },
          {
            "text": "Pear",
            "emoji": "🍐",
            "label": "Pear",
            "translationPt": "Pera"
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
          "Peach",
          "Pear",
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
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Grape",
        "visualEmoji": "🍇",
        "visualOptions": [
          {
            "text": "Coconut",
            "emoji": "🥥",
            "label": "Coconut",
            "translationPt": "Coco"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Fig",
            "emoji": "🟤",
            "label": "Fig",
            "translationPt": "Figo"
          },
          {
            "text": "Cherry",
            "emoji": "🍒",
            "label": "Cherry",
            "translationPt": "Cereja"
          }
        ],
        "options": [
          "Coconut",
          "Grape",
          "Fig",
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
            "text": "Lime",
            "emoji": "🟢",
            "label": "Lime",
            "translationPt": "Limão taiti"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
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
          "Lime",
          "Papaya",
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
        "audioPhrase": "Lemon",
        "visualEmoji": "🍋",
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
            "text": "Pomegranate",
            "emoji": "🔴",
            "label": "Pomegranate",
            "translationPt": "Romã"
          },
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão siciliano"
          }
        ],
        "options": [
          "Banana",
          "Orange",
          "Pomegranate",
          "Lemon"
        ],
        "correctAnswer": "Lemon",
        "explanation": "Exemplo prático: \"Lemon tastes sour and refreshing.\"",
        "phoneticHint": "/ˈlem.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Pineapple",
        "visualEmoji": "🍍",
        "visualOptions": [
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Apricot",
            "emoji": "🟡",
            "label": "Apricot",
            "translationPt": "Damasco"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Pineapple",
          "Apricot",
          "Strawberry",
          "Apple"
        ],
        "correctAnswer": "Pineapple",
        "explanation": "Exemplo prático: \"Pineapple is a juicy tropical fruit.\"",
        "phoneticHint": "/ˈpaɪnˌæp.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Mango",
        "visualEmoji": "🥭",
        "visualOptions": [
          {
            "text": "Melon",
            "emoji": "🍈",
            "label": "Melon",
            "translationPt": "Melão"
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          },
          {
            "text": "Passion Fruit",
            "emoji": "💛",
            "label": "Passion Fruit",
            "translationPt": "Maracujá"
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
          "Mango",
          "Passion Fruit",
          "Grape"
        ],
        "correctAnswer": "Mango",
        "explanation": "Exemplo prático: \"This ripe mango is very sweet.\"",
        "phoneticHint": "/ˈmæŋ.ɡoʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Peach",
        "visualEmoji": "🍑",
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
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          }
        ],
        "options": [
          "Starfruit",
          "Watermelon",
          "Peach",
          "Papaya"
        ],
        "correctAnswer": "Peach",
        "explanation": "Exemplo prático: \"A soft peach has velvety skin.\"",
        "phoneticHint": "/piːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Pear",
        "visualEmoji": "🍐",
        "visualOptions": [
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
            "translationPt": "Limão taiti"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Pear",
            "emoji": "🍐",
            "label": "Pear",
            "translationPt": "Pera"
          }
        ],
        "options": [
          "Lemon",
          "Lime",
          "Orange",
          "Pear"
        ],
        "correctAnswer": "Pear",
        "explanation": "Exemplo prático: \"The green pear is sweet and soft.\"",
        "phoneticHint": "/per/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
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
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          }
        ],
        "options": [
          "Cherry",
          "Blackberry",
          "Banana",
          "Pineapple"
        ],
        "correctAnswer": "Cherry",
        "explanation": "Exemplo prático: \"He put a red cherry on top of the cake.\"",
        "phoneticHint": "/ˈtʃer.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Avocado",
        "visualEmoji": "🥑",
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
            "text": "Fig",
            "emoji": "🟤",
            "label": "Fig",
            "translationPt": "Figo"
          },
          {
            "text": "Raspberry",
            "emoji": "❤️",
            "label": "Raspberry",
            "translationPt": "Framboesa"
          }
        ],
        "options": [
          "Mango",
          "Avocado",
          "Fig",
          "Raspberry"
        ],
        "correctAnswer": "Avocado",
        "explanation": "Exemplo prático: \"Avocado toast is a healthy breakfast.\"",
        "phoneticHint": "/ˌæv.əˈkɑː.doʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Coconut",
        "visualEmoji": "🥥",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dragon Fruit",
            "emoji": "🐉",
            "label": "Dragon Fruit",
            "translationPt": "Pitaia"
          },
          {
            "text": "Coconut",
            "emoji": "🥥",
            "label": "Coconut",
            "translationPt": "Coco"
          },
          {
            "text": "Apricot",
            "emoji": "🟡",
            "label": "Apricot",
            "translationPt": "Damasco"
          }
        ],
        "options": [
          "Apple",
          "Dragon Fruit",
          "Coconut",
          "Apricot"
        ],
        "correctAnswer": "Coconut",
        "explanation": "Exemplo prático: \"We drank fresh coconut water at the beach.\"",
        "phoneticHint": "/ˈkoʊ.kə.nʌt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Kiwi",
        "visualEmoji": "🥝",
        "visualOptions": [
          {
            "text": "Pear",
            "emoji": "🍐",
            "label": "Pear",
            "translationPt": "Pera"
          },
          {
            "text": "Pomegranate",
            "emoji": "🔴",
            "label": "Pomegranate",
            "translationPt": "Romã"
          },
          {
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          },
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          }
        ],
        "options": [
          "Pear",
          "Pomegranate",
          "Peach",
          "Kiwi"
        ],
        "correctAnswer": "Kiwi",
        "explanation": "Exemplo prático: \"Kiwi has bright green flesh inside.\"",
        "phoneticHint": "/ˈkiː.wiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Blueberry",
        "visualEmoji": "🫐",
        "visualOptions": [
          {
            "text": "Blueberry",
            "emoji": "🫐",
            "label": "Blueberry",
            "translationPt": "Mirtilo"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Cherry",
            "emoji": "🍒",
            "label": "Cherry",
            "translationPt": "Cereja"
          }
        ],
        "options": [
          "Blueberry",
          "Pineapple",
          "Strawberry",
          "Cherry"
        ],
        "correctAnswer": "Blueberry",
        "explanation": "Exemplo prático: \"Blueberry muffins are delicious.\"",
        "phoneticHint": "/ˈbluːˌber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Melon",
        "visualEmoji": "🍈",
        "visualOptions": [
          {
            "text": "Passion Fruit",
            "emoji": "💛",
            "label": "Passion Fruit",
            "translationPt": "Maracujá"
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
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          }
        ],
        "options": [
          "Passion Fruit",
          "Grape",
          "Melon",
          "Mango"
        ],
        "correctAnswer": "Melon",
        "explanation": "Exemplo prático: \"Sweet melon is a light dessert.\"",
        "phoneticHint": "/ˈmel.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Papaya",
        "visualEmoji": "🧡",
        "visualOptions": [
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Guava",
            "emoji": "🩷",
            "label": "Guava",
            "translationPt": "Goiaba"
          },
          {
            "text": "Coconut",
            "emoji": "🥥",
            "label": "Coconut",
            "translationPt": "Coco"
          },
          {
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate"
          }
        ],
        "options": [
          "Papaya",
          "Guava",
          "Coconut",
          "Avocado"
        ],
        "correctAnswer": "Papaya",
        "explanation": "Exemplo prático: \"Papaya is very popular for breakfast.\"",
        "phoneticHint": "/pəˈpaɪ.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Plum",
        "visualEmoji": "🟣",
        "visualOptions": [
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          },
          {
            "text": "Plum",
            "emoji": "🟣",
            "label": "Plum",
            "translationPt": "Ameixa"
          }
        ],
        "options": [
          "Kiwi",
          "Banana",
          "Watermelon",
          "Plum"
        ],
        "correctAnswer": "Plum",
        "explanation": "Exemplo prático: \"She picked a ripe purple plum.\"",
        "phoneticHint": "/plʌm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Raspberry",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Dragon Fruit",
            "emoji": "🐉",
            "label": "Dragon Fruit",
            "translationPt": "Pitaia"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
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
            "translationPt": "Mirtilo"
          }
        ],
        "options": [
          "Dragon Fruit",
          "Apple",
          "Raspberry",
          "Blueberry"
        ],
        "correctAnswer": "Raspberry",
        "explanation": "Exemplo prático: \"Raspberry jam tastes wonderful on bread.\"",
        "phoneticHint": "/ˈræzˌber.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Blackberry",
        "visualEmoji": "⚫",
        "visualOptions": [
          {
            "text": "Starfruit",
            "emoji": "⭐",
            "label": "Starfruit",
            "translationPt": "Carambola"
          },
          {
            "text": "Blackberry",
            "emoji": "⚫",
            "label": "Blackberry",
            "translationPt": "Amora"
          },
          {
            "text": "Melon",
            "emoji": "🍈",
            "label": "Melon",
            "translationPt": "Melão"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          }
        ],
        "options": [
          "Starfruit",
          "Blackberry",
          "Melon",
          "Strawberry"
        ],
        "correctAnswer": "Blackberry",
        "explanation": "Exemplo prático: \"Wild blackberries grow on bushes.\"",
        "phoneticHint": "/ˈblækˌber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tangerine",
        "visualEmoji": "🟠",
        "visualOptions": [
          {
            "text": "Tangerine",
            "emoji": "🟠",
            "label": "Tangerine",
            "translationPt": "Tangerina / Mexerica"
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
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          }
        ],
        "options": [
          "Tangerine",
          "Cherry",
          "Coconut",
          "Pineapple"
        ],
        "correctAnswer": "Tangerine",
        "explanation": "Exemplo prático: \"Tangerines are easy to peel.\"",
        "phoneticHint": "/ˈtæn.dʒə.riːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Lime",
        "visualEmoji": "🟢",
        "visualOptions": [
          {
            "text": "Plum",
            "emoji": "🟣",
            "label": "Plum",
            "translationPt": "Ameixa"
          },
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
            "translationPt": "Limão taiti"
          }
        ],
        "options": [
          "Plum",
          "Orange",
          "Lemon",
          "Lime"
        ],
        "correctAnswer": "Lime",
        "explanation": "Exemplo prático: \"Squeeze fresh lime over the fish.\"",
        "phoneticHint": "/laɪm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pomegranate",
        "visualEmoji": "🔴",
        "visualOptions": [
          {
            "text": "Blueberry",
            "emoji": "🫐",
            "label": "Blueberry",
            "translationPt": "Mirtilo"
          },
          {
            "text": "Raspberry",
            "emoji": "❤️",
            "label": "Raspberry",
            "translationPt": "Framboesa"
          },
          {
            "text": "Pomegranate",
            "emoji": "🔴",
            "label": "Pomegranate",
            "translationPt": "Romã"
          },
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          }
        ],
        "options": [
          "Blueberry",
          "Raspberry",
          "Pomegranate",
          "Kiwi"
        ],
        "correctAnswer": "Pomegranate",
        "explanation": "Exemplo prático: \"Pomegranate is full of ruby red seeds.\"",
        "phoneticHint": "/ˈpɑː.mɪˌɡræn.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Apricot",
        "visualEmoji": "🟡",
        "visualOptions": [
          {
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          },
          {
            "text": "Apricot",
            "emoji": "🟡",
            "label": "Apricot",
            "translationPt": "Damasco"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          },
          {
            "text": "Blackberry",
            "emoji": "⚫",
            "label": "Blackberry",
            "translationPt": "Amora"
          }
        ],
        "options": [
          "Peach",
          "Apricot",
          "Watermelon",
          "Blackberry"
        ],
        "correctAnswer": "Apricot",
        "explanation": "Exemplo prático: \"Dried apricots are a great snack.\"",
        "phoneticHint": "/ˈeɪ.prɪ.kɑːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Fig",
        "visualEmoji": "🟤",
        "visualOptions": [
          {
            "text": "Fig",
            "emoji": "🟤",
            "label": "Fig",
            "translationPt": "Figo"
          },
          {
            "text": "Tangerine",
            "emoji": "🟠",
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
            "text": "Avocado",
            "emoji": "🥑",
            "label": "Avocado",
            "translationPt": "Abacate"
          }
        ],
        "options": [
          "Fig",
          "Tangerine",
          "Grape",
          "Avocado"
        ],
        "correctAnswer": "Fig",
        "explanation": "Exemplo prático: \"Fresh figs are sweet and soft.\"",
        "phoneticHint": "/fɪɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Guava",
        "visualEmoji": "🩷",
        "visualOptions": [
          {
            "text": "Pear",
            "emoji": "🍐",
            "label": "Pear",
            "translationPt": "Pera"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Plum",
            "emoji": "🟣",
            "label": "Plum",
            "translationPt": "Ameixa"
          },
          {
            "text": "Guava",
            "emoji": "🩷",
            "label": "Guava",
            "translationPt": "Goiaba"
          }
        ],
        "options": [
          "Pear",
          "Papaya",
          "Plum",
          "Guava"
        ],
        "correctAnswer": "Guava",
        "explanation": "Exemplo prático: \"Guava juice is very aromatic.\"",
        "phoneticHint": "/ˈɡwɑː.və/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Passion Fruit",
        "visualEmoji": "💛",
        "visualOptions": [
          {
            "text": "Passion Fruit",
            "emoji": "💛",
            "label": "Passion Fruit",
            "translationPt": "Maracujá"
          },
          {
            "text": "Pomegranate",
            "emoji": "🔴",
            "label": "Pomegranate",
            "translationPt": "Romã"
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          },
          {
            "text": "Lime",
            "emoji": "🟢",
            "label": "Lime",
            "translationPt": "Limão taiti"
          }
        ],
        "options": [
          "Passion Fruit",
          "Pomegranate",
          "Mango",
          "Lime"
        ],
        "correctAnswer": "Passion Fruit",
        "explanation": "Exemplo prático: \"Passion fruit mousse is a classic dessert.\"",
        "phoneticHint": "/ˈpæʃ.ən fruːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Dragon Fruit",
        "visualEmoji": "🐉",
        "visualOptions": [
          {
            "text": "Melon",
            "emoji": "🍈",
            "label": "Melon",
            "translationPt": "Melão"
          },
          {
            "text": "Dragon Fruit",
            "emoji": "🐉",
            "label": "Dragon Fruit",
            "translationPt": "Pitaia"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Apricot",
            "emoji": "🟡",
            "label": "Apricot",
            "translationPt": "Damasco"
          }
        ],
        "options": [
          "Melon",
          "Dragon Fruit",
          "Banana",
          "Apricot"
        ],
        "correctAnswer": "Dragon Fruit",
        "explanation": "Exemplo prático: \"Dragon fruit has a vibrant pink skin.\"",
        "phoneticHint": "/ˈdræɡ.ən fruːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Starfruit",
        "visualEmoji": "⭐",
        "visualOptions": [
          {
            "text": "Tangerine",
            "emoji": "🟠",
            "label": "Tangerine",
            "translationPt": "Tangerina / Mexerica"
          },
          {
            "text": "Fig",
            "emoji": "🟤",
            "label": "Fig",
            "translationPt": "Figo"
          },
          {
            "text": "Starfruit",
            "emoji": "⭐",
            "label": "Starfruit",
            "translationPt": "Carambola"
          },
          {
            "text": "Kiwi",
            "emoji": "🥝",
            "label": "Kiwi",
            "translationPt": "Kiwi"
          }
        ],
        "options": [
          "Tangerine",
          "Fig",
          "Starfruit",
          "Kiwi"
        ],
        "correctAnswer": "Starfruit",
        "explanation": "Exemplo prático: \"Slices of starfruit look like bright stars.\"",
        "phoneticHint": "/ˈstɑːr.fruːt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p2",
    "worldId": 0,
    "phaseNumber": 2,
    "title": "Frutas & Alimentos II: Vegetais & Grãos",
    "subtitle": "Módulo 2/4 • 30 vegetais e grãos do comum ao incomum",
    "pedagogicalObjective": "Identificar legumes, verduras e grãos essenciais da culinária em inglês.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Neste segundo módulo de alimentos, avançamos pelos 30 vegetais, hortaliças e grãos mais importantes.",
      "Preste atenção na pronúncia de palavras como Onion (/ˈʌn.jən/) e Cucumber (/ˈkjuː.kʌm.bər/).",
      "As imagens não se repetem em sequência para estimular sua memória visual real."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p2-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Potato",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          }
        ],
        "options": [
          "Beans",
          "Potato",
          "Eggplant",
          "Broccoli"
        ],
        "correctAnswer": "Potato",
        "explanation": "Exemplo prático: \"Baked potatoes are warm and filling.\"",
        "phoneticHint": "/pəˈteɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Turnip",
            "emoji": "⚪",
            "label": "Turnip",
            "translationPt": "Nabo"
          },
          {
            "text": "Beetroot",
            "emoji": "🟣",
            "label": "Beetroot",
            "translationPt": "Beterraba"
          },
          {
            "text": "Radish",
            "emoji": "🔴",
            "label": "Radish",
            "translationPt": "Rabanete"
          }
        ],
        "options": [
          "Tomato",
          "Turnip",
          "Beetroot",
          "Radish"
        ],
        "correctAnswer": "Tomato",
        "explanation": "Exemplo prático: \"Fresh red tomatoes go in the salad.\"",
        "phoneticHint": "/təˈmeɪ.toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
        "visualOptions": [
          {
            "text": "Zucchini",
            "emoji": "🟩",
            "label": "Zucchini",
            "translationPt": "Abobrinha"
          },
          {
            "text": "Asparagus",
            "emoji": "🌱",
            "label": "Asparagus",
            "translationPt": "Aspargo"
          },
          {
            "text": "Artichoke",
            "emoji": "💚",
            "label": "Artichoke",
            "translationPt": "Alcachofra"
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
          "Asparagus",
          "Artichoke",
          "Carrot"
        ],
        "correctAnswer": "Carrot",
        "explanation": "Exemplo prático: \"Rabbits love crunchy orange carrots.\"",
        "phoneticHint": "/ˈkær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e4",
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
            "text": "Spinach",
            "emoji": "🌿",
            "label": "Spinach",
            "translationPt": "Espinafre"
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão"
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
          "Spinach",
          "Pepper",
          "Sweet Potato"
        ],
        "correctAnswer": "Onion",
        "explanation": "Exemplo prático: \"Chopped onion adds flavor to the soup.\"",
        "phoneticHint": "/ˈʌn.jən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
        "visualOptions": [
          {
            "text": "Chili",
            "emoji": "🌶️",
            "label": "Chili",
            "translationPt": "Pimenta"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Cabbage",
            "emoji": "🟢",
            "label": "Cabbage",
            "translationPt": "Repolho"
          },
          {
            "text": "Chestnut",
            "emoji": "🌰",
            "label": "Chestnut",
            "translationPt": "Castanha"
          }
        ],
        "options": [
          "Chili",
          "Garlic",
          "Cabbage",
          "Chestnut"
        ],
        "correctAnswer": "Garlic",
        "explanation": "Exemplo prático: \"Garlic smells strong when roasted.\"",
        "phoneticHint": "/ˈɡɑːr.lɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lettuce",
        "visualEmoji": "🥬",
        "visualOptions": [
          {
            "text": "Cauliflower",
            "emoji": "⚪",
            "label": "Cauliflower",
            "translationPt": "Couve-flor"
          },
          {
            "text": "Leek",
            "emoji": "🎍",
            "label": "Leek",
            "translationPt": "Alho-poró"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface"
          },
          {
            "text": "Celery",
            "emoji": "🎋",
            "label": "Celery",
            "translationPt": "Aipo / Salsão"
          }
        ],
        "options": [
          "Cauliflower",
          "Leek",
          "Lettuce",
          "Celery"
        ],
        "correctAnswer": "Lettuce",
        "explanation": "Exemplo prático: \"Wash the green lettuce leaves well.\"",
        "phoneticHint": "/ˈlet.ɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Corn",
        "visualEmoji": "🌽",
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
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho"
          }
        ],
        "options": [
          "Potato",
          "Peas",
          "Carrot",
          "Corn"
        ],
        "correctAnswer": "Corn",
        "explanation": "Exemplo prático: \"Sweet yellow corn on the cob.\"",
        "phoneticHint": "/kɔːrn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Broccoli",
        "visualEmoji": "🥦",
        "visualOptions": [
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Pumpkin",
            "emoji": "🎃",
            "label": "Pumpkin",
            "translationPt": "Abóbora"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Broccoli",
          "Pumpkin",
          "Onion",
          "Tomato"
        ],
        "correctAnswer": "Broccoli",
        "explanation": "Exemplo prático: \"Steamed broccoli is very nutritious.\"",
        "phoneticHint": "/ˈbrɑː.kəl.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cucumber",
        "visualEmoji": "🥒",
        "visualOptions": [
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Zucchini",
            "emoji": "🟩",
            "label": "Zucchini",
            "translationPt": "Abobrinha"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim"
          }
        ],
        "options": [
          "Garlic",
          "Zucchini",
          "Cucumber",
          "Peanut"
        ],
        "correctAnswer": "Cucumber",
        "explanation": "Exemplo prático: \"Cucumber slices are cool and crisp.\"",
        "phoneticHint": "/ˈkjuː.kʌm.bər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pepper",
        "visualEmoji": "🫑",
        "visualOptions": [
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão"
          },
          {
            "text": "Sweet Potato",
            "emoji": "🍠",
            "label": "Sweet Potato",
            "translationPt": "Batata-doce"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface"
          },
          {
            "text": "Spinach",
            "emoji": "🌿",
            "label": "Spinach",
            "translationPt": "Espinafre"
          }
        ],
        "options": [
          "Pepper",
          "Sweet Potato",
          "Lettuce",
          "Spinach"
        ],
        "correctAnswer": "Pepper",
        "explanation": "Exemplo prático: \"Green bell peppers are crunchy.\"",
        "phoneticHint": "/ˈpep.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Chili",
        "visualEmoji": "🌶️",
        "visualOptions": [
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Leek",
            "emoji": "🎍",
            "label": "Leek",
            "translationPt": "Alho-poró"
          },
          {
            "text": "Chili",
            "emoji": "🌶️",
            "label": "Chili",
            "translationPt": "Pimenta"
          }
        ],
        "options": [
          "Corn",
          "Carrot",
          "Leek",
          "Chili"
        ],
        "correctAnswer": "Chili",
        "explanation": "Exemplo prático: \"That red chili pepper is very spicy.\"",
        "phoneticHint": "/ˈtʃɪl.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Mushroom",
        "visualEmoji": "🍄",
        "visualOptions": [
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo"
          },
          {
            "text": "Radish",
            "emoji": "🔴",
            "label": "Radish",
            "translationPt": "Rabanete"
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
          }
        ],
        "options": [
          "Mushroom",
          "Radish",
          "Beetroot",
          "Broccoli"
        ],
        "correctAnswer": "Mushroom",
        "explanation": "Exemplo prático: \"Mushrooms grow in damp forests.\"",
        "phoneticHint": "/ˈmʌʃ.ruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Eggplant",
        "visualEmoji": "🍆",
        "visualOptions": [
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
          },
          {
            "text": "Chestnut",
            "emoji": "🌰",
            "label": "Chestnut",
            "translationPt": "Castanha"
          },
          {
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          }
        ],
        "options": [
          "Cucumber",
          "Chestnut",
          "Eggplant",
          "Onion"
        ],
        "correctAnswer": "Eggplant",
        "explanation": "Exemplo prático: \"Grilled eggplant is delicious with olive oil.\"",
        "phoneticHint": "/ˈeɡ.plænt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Peas",
        "visualEmoji": "🫛",
        "visualOptions": [
          {
            "text": "Peas",
            "emoji": "🫛",
            "label": "Peas",
            "translationPt": "Ervilha"
          },
          {
            "text": "Artichoke",
            "emoji": "💚",
            "label": "Artichoke",
            "translationPt": "Alcachofra"
          },
          {
            "text": "Asparagus",
            "emoji": "🌱",
            "label": "Asparagus",
            "translationPt": "Aspargo"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Peas",
          "Artichoke",
          "Asparagus",
          "Tomato"
        ],
        "correctAnswer": "Peas",
        "explanation": "Exemplo prático: \"Green peas are small and round.\"",
        "phoneticHint": "/piːz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Beans",
        "visualEmoji": "🫘",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          }
        ],
        "options": [
          "Potato",
          "Garlic",
          "Pepper",
          "Beans"
        ],
        "correctAnswer": "Beans",
        "explanation": "Exemplo prático: \"Rice and beans are a daily meal.\"",
        "phoneticHint": "/biːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pumpkin",
        "visualEmoji": "🎃",
        "visualOptions": [
          {
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho"
          },
          {
            "text": "Chili",
            "emoji": "🌶️",
            "label": "Chili",
            "translationPt": "Pimenta"
          },
          {
            "text": "Pumpkin",
            "emoji": "🎃",
            "label": "Pumpkin",
            "translationPt": "Abóbora"
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo"
          }
        ],
        "options": [
          "Corn",
          "Chili",
          "Pumpkin",
          "Mushroom"
        ],
        "correctAnswer": "Pumpkin",
        "explanation": "Exemplo prático: \"Pumpkin soup is warm and creamy.\"",
        "phoneticHint": "/ˈpʌmp.kɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Sweet Potato",
        "visualEmoji": "🍠",
        "visualOptions": [
          {
            "text": "Cauliflower",
            "emoji": "⚪",
            "label": "Cauliflower",
            "translationPt": "Couve-flor"
          },
          {
            "text": "Sweet Potato",
            "emoji": "🍠",
            "label": "Sweet Potato",
            "translationPt": "Batata-doce"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
          }
        ],
        "options": [
          "Cauliflower",
          "Sweet Potato",
          "Lettuce",
          "Cucumber"
        ],
        "correctAnswer": "Sweet Potato",
        "explanation": "Exemplo prático: \"Roasted sweet potato is naturally sweet.\"",
        "phoneticHint": "/ˌswiːt pəˈteɪ.toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
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
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          },
          {
            "text": "Celery",
            "emoji": "🎋",
            "label": "Celery",
            "translationPt": "Aipo / Salsão"
          },
          {
            "text": "Peas",
            "emoji": "🫛",
            "label": "Peas",
            "translationPt": "Ervilha"
          }
        ],
        "options": [
          "Peanut",
          "Eggplant",
          "Celery",
          "Peas"
        ],
        "correctAnswer": "Peanut",
        "explanation": "Exemplo prático: \"Peanuts are a crunchy snack.\"",
        "phoneticHint": "/ˈpiː.nʌt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chestnut",
        "visualEmoji": "🌰",
        "visualOptions": [
          {
            "text": "Turnip",
            "emoji": "⚪",
            "label": "Turnip",
            "translationPt": "Nabo"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Chestnut",
            "emoji": "🌰",
            "label": "Chestnut",
            "translationPt": "Castanha"
          }
        ],
        "options": [
          "Turnip",
          "Beans",
          "Tomato",
          "Chestnut"
        ],
        "correctAnswer": "Chestnut",
        "explanation": "Exemplo prático: \"Roasted chestnuts are popular in winter.\"",
        "phoneticHint": "/ˈtʃes.nʌt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Pumpkin",
            "emoji": "🎃",
            "label": "Pumpkin",
            "translationPt": "Abóbora"
          }
        ],
        "options": [
          "Spinach",
          "Mushroom",
          "Garlic",
          "Pumpkin"
        ],
        "correctAnswer": "Spinach",
        "explanation": "Exemplo prático: \"Spinach is rich in iron.\"",
        "phoneticHint": "/ˈspɪn.ɪtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cabbage",
        "visualEmoji": "🟢",
        "visualOptions": [
          {
            "text": "Sweet Potato",
            "emoji": "🍠",
            "label": "Sweet Potato",
            "translationPt": "Batata-doce"
          },
          {
            "text": "Cabbage",
            "emoji": "🟢",
            "label": "Cabbage",
            "translationPt": "Repolho"
          },
          {
            "text": "Pepper",
            "emoji": "🫑",
            "label": "Pepper",
            "translationPt": "Pimentão"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          }
        ],
        "options": [
          "Sweet Potato",
          "Cabbage",
          "Pepper",
          "Potato"
        ],
        "correctAnswer": "Cabbage",
        "explanation": "Exemplo prático: \"Shredded cabbage makes great coleslaw.\"",
        "phoneticHint": "/ˈkæb.ɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cauliflower",
        "visualEmoji": "⚪",
        "visualOptions": [
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim"
          },
          {
            "text": "Cauliflower",
            "emoji": "⚪",
            "label": "Cauliflower",
            "translationPt": "Couve-flor"
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
          "Peanut",
          "Cauliflower",
          "Corn"
        ],
        "correctAnswer": "Cauliflower",
        "explanation": "Exemplo prático: \"Cauliflower looks like a white flower.\"",
        "phoneticHint": "/ˈkɑː.lɪˌflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Zucchini",
        "visualEmoji": "🟩",
        "visualOptions": [
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface"
          },
          {
            "text": "Leek",
            "emoji": "🎍",
            "label": "Leek",
            "translationPt": "Alho-poró"
          },
          {
            "text": "Zucchini",
            "emoji": "🟩",
            "label": "Zucchini",
            "translationPt": "Abobrinha"
          }
        ],
        "options": [
          "Onion",
          "Lettuce",
          "Leek",
          "Zucchini"
        ],
        "correctAnswer": "Zucchini",
        "explanation": "Exemplo prático: \"Sliced zucchini cooks very quickly.\"",
        "phoneticHint": "/zuːˈkiː.ni/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
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
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          }
        ],
        "options": [
          "Beetroot",
          "Broccoli",
          "Beans",
          "Eggplant"
        ],
        "correctAnswer": "Beetroot",
        "explanation": "Exemplo prático: \"Beetroot has a deep purple color.\"",
        "phoneticHint": "/ˈbiːt.ruːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Radish",
        "visualEmoji": "🔴",
        "visualOptions": [
          {
            "text": "Cabbage",
            "emoji": "🟢",
            "label": "Cabbage",
            "translationPt": "Repolho"
          },
          {
            "text": "Radish",
            "emoji": "🔴",
            "label": "Radish",
            "translationPt": "Rabanete"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
          },
          {
            "text": "Turnip",
            "emoji": "⚪",
            "label": "Turnip",
            "translationPt": "Nabo"
          }
        ],
        "options": [
          "Cabbage",
          "Radish",
          "Cucumber",
          "Turnip"
        ],
        "correctAnswer": "Radish",
        "explanation": "Exemplo prático: \"Radishes add a peppery crunch to salads.\"",
        "phoneticHint": "/ˈræd.ɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Celery",
        "visualEmoji": "🎋",
        "visualOptions": [
          {
            "text": "Chestnut",
            "emoji": "🌰",
            "label": "Chestnut",
            "translationPt": "Castanha"
          },
          {
            "text": "Chili",
            "emoji": "🌶️",
            "label": "Chili",
            "translationPt": "Pimenta"
          },
          {
            "text": "Celery",
            "emoji": "🎋",
            "label": "Celery",
            "translationPt": "Aipo / Salsão"
          },
          {
            "text": "Cauliflower",
            "emoji": "⚪",
            "label": "Cauliflower",
            "translationPt": "Couve-flor"
          }
        ],
        "options": [
          "Chestnut",
          "Chili",
          "Celery",
          "Cauliflower"
        ],
        "correctAnswer": "Celery",
        "explanation": "Exemplo prático: \"Celery stalks are crisp and light.\"",
        "phoneticHint": "/ˈsel.ər.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Asparagus",
        "visualEmoji": "🌱",
        "visualOptions": [
          {
            "text": "Peas",
            "emoji": "🫛",
            "label": "Peas",
            "translationPt": "Ervilha"
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
            "text": "Asparagus",
            "emoji": "🌱",
            "label": "Asparagus",
            "translationPt": "Aspargo"
          }
        ],
        "options": [
          "Peas",
          "Pumpkin",
          "Spinach",
          "Asparagus"
        ],
        "correctAnswer": "Asparagus",
        "explanation": "Exemplo prático: \"Grilled asparagus is a gourmet side dish.\"",
        "phoneticHint": "/əˈspær.ə.ɡəs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Artichoke",
        "visualEmoji": "💚",
        "visualOptions": [
          {
            "text": "Artichoke",
            "emoji": "💚",
            "label": "Artichoke",
            "translationPt": "Alcachofra"
          },
          {
            "text": "Zucchini",
            "emoji": "🟩",
            "label": "Zucchini",
            "translationPt": "Abobrinha"
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo"
          },
          {
            "text": "Peanut",
            "emoji": "🥜",
            "label": "Peanut",
            "translationPt": "Amendoim"
          }
        ],
        "options": [
          "Artichoke",
          "Zucchini",
          "Mushroom",
          "Peanut"
        ],
        "correctAnswer": "Artichoke",
        "explanation": "Exemplo prático: \"Artichoke hearts are tender and flavorful.\"",
        "phoneticHint": "/ˈɑːr.tə.tʃoʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Leek",
        "visualEmoji": "🎍",
        "visualOptions": [
          {
            "text": "Beetroot",
            "emoji": "🟣",
            "label": "Beetroot",
            "translationPt": "Beterraba"
          },
          {
            "text": "Cabbage",
            "emoji": "🟢",
            "label": "Cabbage",
            "translationPt": "Repolho"
          },
          {
            "text": "Leek",
            "emoji": "🎍",
            "label": "Leek",
            "translationPt": "Alho-poró"
          },
          {
            "text": "Radish",
            "emoji": "🔴",
            "label": "Radish",
            "translationPt": "Rabanete"
          }
        ],
        "options": [
          "Beetroot",
          "Cabbage",
          "Leek",
          "Radish"
        ],
        "correctAnswer": "Leek",
        "explanation": "Exemplo prático: \"Leek and potato soup is a classic.\"",
        "phoneticHint": "/liːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Turnip",
        "visualEmoji": "⚪",
        "visualOptions": [
          {
            "text": "Turnip",
            "emoji": "⚪",
            "label": "Turnip",
            "translationPt": "Nabo"
          },
          {
            "text": "Eggplant",
            "emoji": "🍆",
            "label": "Eggplant",
            "translationPt": "Berinjela"
          },
          {
            "text": "Celery",
            "emoji": "🎋",
            "label": "Celery",
            "translationPt": "Aipo / Salsão"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          }
        ],
        "options": [
          "Turnip",
          "Eggplant",
          "Celery",
          "Broccoli"
        ],
        "correctAnswer": "Turnip",
        "explanation": "Exemplo prático: \"Turnips are root vegetables grown in cool weather.\"",
        "phoneticHint": "/ˈtɜːr.nɪp/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p3",
    "worldId": 0,
    "phaseNumber": 3,
    "title": "Frutas & Alimentos III: Refeições & Pratos",
    "subtitle": "Módulo 3/4 • 30 alimentos preparados do comum ao incomum",
    "pedagogicalObjective": "Reconhecer carnes, pães, laticínios e refeições completas em inglês.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Aqui você aprenderá os 30 alimentos de refeições diárias e gastronomia.",
      "Observe a diferença sonora entre Bread (/bred/), Cheese (/tʃiːz/) e Steak (/steɪk/).",
      "Todas as palavras são pronunciadas com voz humana nativa em inglês americano."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p3-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
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
          }
        ],
        "options": [
          "Hamburger",
          "Bread",
          "Bacon",
          "Butter"
        ],
        "correctAnswer": "Bread",
        "explanation": "Exemplo prático: \"Warm fresh bread smells amazing.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
        "visualOptions": [
          {
            "text": "Baguette",
            "emoji": "🥖",
            "label": "Baguette",
            "translationPt": "Baguete"
          },
          {
            "text": "Taco",
            "emoji": "🌮",
            "label": "Taco",
            "translationPt": "Taco mexicano"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Bagel",
            "emoji": "🥯",
            "label": "Bagel",
            "translationPt": "Bagel (pão em anel)"
          }
        ],
        "options": [
          "Baguette",
          "Taco",
          "Rice",
          "Bagel"
        ],
        "correctAnswer": "Rice",
        "explanation": "Exemplo prático: \"White rice is served with dinner.\"",
        "phoneticHint": "/raɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Egg",
        "visualEmoji": "🥚",
        "visualOptions": [
          {
            "text": "Waffle",
            "emoji": "🧇",
            "label": "Waffle",
            "translationPt": "Waffle"
          },
          {
            "text": "Burrito",
            "emoji": "🌯",
            "label": "Burrito",
            "translationPt": "Burrito"
          },
          {
            "text": "Dumpling",
            "emoji": "🥟",
            "label": "Dumpling",
            "translationPt": "Bolinho / Guioza"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Waffle",
          "Burrito",
          "Dumpling",
          "Egg"
        ],
        "correctAnswer": "Egg",
        "explanation": "Exemplo prático: \"I eat a boiled egg for breakfast.\"",
        "phoneticHint": "/eɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Shrimp",
            "emoji": "🍤",
            "label": "Shrimp",
            "translationPt": "Camarão"
          },
          {
            "text": "Sausage",
            "emoji": "🌭",
            "label": "Sausage",
            "translationPt": "Salsicha / Linguiça"
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche"
          }
        ],
        "options": [
          "Cheese",
          "Shrimp",
          "Sausage",
          "Sandwich"
        ],
        "correctAnswer": "Cheese",
        "explanation": "Exemplo prático: \"Melted cheese tastes great on toast.\"",
        "phoneticHint": "/tʃiːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Roast Chicken",
        "visualEmoji": "🍗",
        "visualOptions": [
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Croissant",
            "emoji": "🥐",
            "label": "Croissant",
            "translationPt": "Croissant"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango assado"
          },
          {
            "text": "Fondue",
            "emoji": "🫕",
            "label": "Fondue",
            "translationPt": "Fondue"
          }
        ],
        "options": [
          "French Fries",
          "Croissant",
          "Roast Chicken",
          "Fondue"
        ],
        "correctAnswer": "Roast Chicken",
        "explanation": "Exemplo prático: \"Roast chicken is a family favorite.\"",
        "phoneticHint": "/ˈroʊst ˈtʃɪk.ɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Meat",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat",
            "translationPt": "Carne / Bife"
          },
          {
            "text": "Omelet",
            "emoji": "🍳",
            "label": "Omelet",
            "translationPt": "Omelete"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Oyster",
            "emoji": "🦪",
            "label": "Oyster",
            "translationPt": "Ostra"
          }
        ],
        "options": [
          "Meat",
          "Omelet",
          "Rice",
          "Oyster"
        ],
        "correctAnswer": "Meat",
        "explanation": "Exemplo prático: \"He cooked the meat on the grill.\"",
        "phoneticHint": "/miːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soup",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          },
          {
            "text": "Sushi",
            "emoji": "🍣",
            "label": "Sushi",
            "translationPt": "Sushi"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa"
          }
        ],
        "options": [
          "Egg",
          "Sushi",
          "Bread",
          "Soup"
        ],
        "correctAnswer": "Soup",
        "explanation": "Exemplo prático: \"Hot soup is comforting on a cold night.\"",
        "phoneticHint": "/suːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Salad",
        "visualEmoji": "🥗",
        "visualOptions": [
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão / Massa"
          },
          {
            "text": "Pancake",
            "emoji": "🥞",
            "label": "Pancake",
            "translationPt": "Panqueca"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          }
        ],
        "options": [
          "Pasta",
          "Pancake",
          "Salad",
          "Cheese"
        ],
        "correctAnswer": "Salad",
        "explanation": "Exemplo prático: \"A fresh green salad before the main course.\"",
        "phoneticHint": "/ˈsæl.əd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
          {
            "text": "Dumpling",
            "emoji": "🥟",
            "label": "Dumpling",
            "translationPt": "Bolinho / Guioza"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango assado"
          },
          {
            "text": "Pretzel",
            "emoji": "🥨",
            "label": "Pretzel",
            "translationPt": "Pretzel"
          }
        ],
        "options": [
          "Dumpling",
          "Pizza",
          "Roast Chicken",
          "Pretzel"
        ],
        "correctAnswer": "Pizza",
        "explanation": "Exemplo prático: \"We shared a large cheese pizza.\"",
        "phoneticHint": "/ˈpiːt.sə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sandwich",
        "visualEmoji": "🥪",
        "visualOptions": [
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche"
          },
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat",
            "translationPt": "Carne / Bife"
          },
          {
            "text": "Sausage",
            "emoji": "🌭",
            "label": "Sausage",
            "translationPt": "Salsicha / Linguiça"
          },
          {
            "text": "Shrimp",
            "emoji": "🍤",
            "label": "Shrimp",
            "translationPt": "Camarão"
          }
        ],
        "options": [
          "Sandwich",
          "Meat",
          "Sausage",
          "Shrimp"
        ],
        "correctAnswer": "Sandwich",
        "explanation": "Exemplo prático: \"She packed a turkey sandwich for lunch.\"",
        "phoneticHint": "/ˈsæn.wɪtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Hamburger",
        "visualEmoji": "🍔",
        "visualOptions": [
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa"
          },
          {
            "text": "Oyster",
            "emoji": "🦪",
            "label": "Oyster",
            "translationPt": "Ostra"
          },
          {
            "text": "Omelet",
            "emoji": "🍳",
            "label": "Omelet",
            "translationPt": "Omelete"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          }
        ],
        "options": [
          "Soup",
          "Oyster",
          "Omelet",
          "Hamburger"
        ],
        "correctAnswer": "Hamburger",
        "explanation": "Exemplo prático: \"A juicy hamburger with lettuce and tomato.\"",
        "phoneticHint": "/ˈhæmˌbɜːr.ɡər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "French Fries",
        "visualEmoji": "🍟",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Baguette",
            "emoji": "🥖",
            "label": "Baguette",
            "translationPt": "Baguete"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada"
          }
        ],
        "options": [
          "Bread",
          "Baguette",
          "French Fries",
          "Salad"
        ],
        "correctAnswer": "French Fries",
        "explanation": "Exemplo prático: \"Crispy golden French fries.\"",
        "phoneticHint": "/ˈfrentʃ fraɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pasta",
        "visualEmoji": "🍝",
        "visualOptions": [
          {
            "text": "Bagel",
            "emoji": "🥯",
            "label": "Bagel",
            "translationPt": "Bagel (pão em anel)"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão / Massa"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Bagel",
          "Pasta",
          "Pizza",
          "Egg"
        ],
        "correctAnswer": "Pasta",
        "explanation": "Exemplo prático: \"Italian pasta with tomato sauce.\"",
        "phoneticHint": "/ˈpɑː.stə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Waffle",
            "emoji": "🧇",
            "label": "Waffle",
            "translationPt": "Waffle"
          },
          {
            "text": "Taco",
            "emoji": "🌮",
            "label": "Taco",
            "translationPt": "Taco mexicano"
          },
          {
            "text": "Burrito",
            "emoji": "🌯",
            "label": "Burrito",
            "translationPt": "Burrito"
          }
        ],
        "options": [
          "Butter",
          "Waffle",
          "Taco",
          "Burrito"
        ],
        "correctAnswer": "Butter",
        "explanation": "Exemplo prático: \"Spread a little butter on the warm bread.\"",
        "phoneticHint": "/ˈbʌt.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bacon",
        "visualEmoji": "🥓",
        "visualOptions": [
          {
            "text": "Pretzel",
            "emoji": "🥨",
            "label": "Pretzel",
            "translationPt": "Pretzel"
          },
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat",
            "translationPt": "Carne / Bife"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Bacon",
            "emoji": "🥓",
            "label": "Bacon",
            "translationPt": "Bacon"
          }
        ],
        "options": [
          "Pretzel",
          "Meat",
          "Hamburger",
          "Bacon"
        ],
        "correctAnswer": "Bacon",
        "explanation": "Exemplo prático: \"Crispy bacon and eggs in the morning.\"",
        "phoneticHint": "/ˈbeɪ.kən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sausage",
        "visualEmoji": "🌭",
        "visualOptions": [
          {
            "text": "Sausage",
            "emoji": "🌭",
            "label": "Sausage",
            "translationPt": "Salsicha / Linguiça"
          },
          {
            "text": "Fondue",
            "emoji": "🫕",
            "label": "Fondue",
            "translationPt": "Fondue"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          }
        ],
        "options": [
          "Sausage",
          "Fondue",
          "Cheese",
          "French Fries"
        ],
        "correctAnswer": "Sausage",
        "explanation": "Exemplo prático: \"Grilled sausage on a bun.\"",
        "phoneticHint": "/ˈsɔː.sɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Shrimp",
        "visualEmoji": "🍤",
        "visualOptions": [
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Shrimp",
            "emoji": "🍤",
            "label": "Shrimp",
            "translationPt": "Camarão"
          },
          {
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango assado"
          }
        ],
        "options": [
          "Rice",
          "Shrimp",
          "Soup",
          "Roast Chicken"
        ],
        "correctAnswer": "Shrimp",
        "explanation": "Exemplo prático: \"Fried shrimp with lemon.\"",
        "phoneticHint": "/ʃrɪmp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sushi",
        "visualEmoji": "🍣",
        "visualOptions": [
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Sushi",
            "emoji": "🍣",
            "label": "Sushi",
            "translationPt": "Sushi"
          },
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche"
          }
        ],
        "options": [
          "Salad",
          "Butter",
          "Sushi",
          "Sandwich"
        ],
        "correctAnswer": "Sushi",
        "explanation": "Exemplo prático: \"Fresh salmon sushi from Japan.\"",
        "phoneticHint": "/ˈsuː.ʃi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pancake",
        "visualEmoji": "🥞",
        "visualOptions": [
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão / Massa"
          },
          {
            "text": "Bacon",
            "emoji": "🥓",
            "label": "Bacon",
            "translationPt": "Bacon"
          },
          {
            "text": "Pancake",
            "emoji": "🥞",
            "label": "Pancake",
            "translationPt": "Panqueca"
          }
        ],
        "options": [
          "Pizza",
          "Pasta",
          "Bacon",
          "Pancake"
        ],
        "correctAnswer": "Pancake",
        "explanation": "Exemplo prático: \"Fluffy pancakes with maple syrup.\"",
        "phoneticHint": "/ˈpæn.keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Waffle",
        "visualEmoji": "🧇",
        "visualOptions": [
          {
            "text": "Waffle",
            "emoji": "🧇",
            "label": "Waffle",
            "translationPt": "Waffle"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Taco",
            "emoji": "🌮",
            "label": "Taco",
            "translationPt": "Taco mexicano"
          },
          {
            "text": "Dumpling",
            "emoji": "🥟",
            "label": "Dumpling",
            "translationPt": "Bolinho / Guioza"
          }
        ],
        "options": [
          "Waffle",
          "Hamburger",
          "Taco",
          "Dumpling"
        ],
        "correctAnswer": "Waffle",
        "explanation": "Exemplo prático: \"A crispy Belgian waffle for breakfast.\"",
        "phoneticHint": "/ˈwɑː.fəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Croissant",
        "visualEmoji": "🥐",
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
            "text": "Croissant",
            "emoji": "🥐",
            "label": "Croissant",
            "translationPt": "Croissant"
          },
          {
            "text": "Sausage",
            "emoji": "🌭",
            "label": "Sausage",
            "translationPt": "Salsicha / Linguiça"
          }
        ],
        "options": [
          "Soup",
          "Shrimp",
          "Croissant",
          "Sausage"
        ],
        "correctAnswer": "Croissant",
        "explanation": "Exemplo prático: \"A flaky butter croissant from the bakery.\"",
        "phoneticHint": "/krwɑːˈsɑːnt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Baguette",
        "visualEmoji": "🥖",
        "visualOptions": [
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
          },
          {
            "text": "Baguette",
            "emoji": "🥖",
            "label": "Baguette",
            "translationPt": "Baguete"
          },
          {
            "text": "Fondue",
            "emoji": "🫕",
            "label": "Fondue",
            "translationPt": "Fondue"
          }
        ],
        "options": [
          "French Fries",
          "Sushi",
          "Baguette",
          "Fondue"
        ],
        "correctAnswer": "Baguette",
        "explanation": "Exemplo prático: \"A long crunchy French baguette.\"",
        "phoneticHint": "/bæˈɡet/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Bagel",
        "visualEmoji": "🥯",
        "visualOptions": [
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
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
          },
          {
            "text": "Bagel",
            "emoji": "🥯",
            "label": "Bagel",
            "translationPt": "Bagel (pão em anel)"
          }
        ],
        "options": [
          "Rice",
          "Roast Chicken",
          "Pancake",
          "Bagel"
        ],
        "correctAnswer": "Bagel",
        "explanation": "Exemplo prático: \"A toasted bagel with cream cheese.\"",
        "phoneticHint": "/ˈbeɪ.ɡəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pretzel",
        "visualEmoji": "🥨",
        "visualOptions": [
          {
            "text": "Pretzel",
            "emoji": "🥨",
            "label": "Pretzel",
            "translationPt": "Pretzel"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Pretzel",
          "Butter",
          "Bread",
          "Egg"
        ],
        "correctAnswer": "Pretzel",
        "explanation": "Exemplo prático: \"A salted twisted pretzel.\"",
        "phoneticHint": "/ˈpret.səl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Taco",
        "visualEmoji": "🌮",
        "visualOptions": [
          {
            "text": "Croissant",
            "emoji": "🥐",
            "label": "Croissant",
            "translationPt": "Croissant"
          },
          {
            "text": "Bacon",
            "emoji": "🥓",
            "label": "Bacon",
            "translationPt": "Bacon"
          },
          {
            "text": "Taco",
            "emoji": "🌮",
            "label": "Taco",
            "translationPt": "Taco mexicano"
          },
          {
            "text": "Waffle",
            "emoji": "🧇",
            "label": "Waffle",
            "translationPt": "Waffle"
          }
        ],
        "options": [
          "Croissant",
          "Bacon",
          "Taco",
          "Waffle"
        ],
        "correctAnswer": "Taco",
        "explanation": "Exemplo prático: \"Crunchy tacos with beef and salsa.\"",
        "phoneticHint": "/ˈtɑː.koʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Burrito",
        "visualEmoji": "🌯",
        "visualOptions": [
          {
            "text": "Burrito",
            "emoji": "🌯",
            "label": "Burrito",
            "translationPt": "Burrito"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Baguette",
            "emoji": "🥖",
            "label": "Baguette",
            "translationPt": "Baguete"
          },
          {
            "text": "Salad",
            "emoji": "🥗",
            "label": "Salad",
            "translationPt": "Salada"
          }
        ],
        "options": [
          "Burrito",
          "Cheese",
          "Baguette",
          "Salad"
        ],
        "correctAnswer": "Burrito",
        "explanation": "Exemplo prático: \"A warm flour tortilla burrito.\"",
        "phoneticHint": "/bəˈriː.toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Dumpling",
        "visualEmoji": "🥟",
        "visualOptions": [
          {
            "text": "Sandwich",
            "emoji": "🥪",
            "label": "Sandwich",
            "translationPt": "Sanduíche"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Sushi",
            "emoji": "🍣",
            "label": "Sushi",
            "translationPt": "Sushi"
          },
          {
            "text": "Dumpling",
            "emoji": "🥟",
            "label": "Dumpling",
            "translationPt": "Bolinho / Guioza"
          }
        ],
        "options": [
          "Sandwich",
          "Pizza",
          "Sushi",
          "Dumpling"
        ],
        "correctAnswer": "Dumpling",
        "explanation": "Exemplo prático: \"Steamed dumplings filled with vegetables.\"",
        "phoneticHint": "/ˈdʌm.plɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Omelet",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Pancake",
            "emoji": "🥞",
            "label": "Pancake",
            "translationPt": "Panqueca"
          },
          {
            "text": "Pretzel",
            "emoji": "🥨",
            "label": "Pretzel",
            "translationPt": "Pretzel"
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
            "translationPt": "Macarrão / Massa"
          }
        ],
        "options": [
          "Pancake",
          "Pretzel",
          "Omelet",
          "Pasta"
        ],
        "correctAnswer": "Omelet",
        "explanation": "Exemplo prático: \"A cheese and herb omelet.\"",
        "phoneticHint": "/ˈɑːm.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Fondue",
        "visualEmoji": "🫕",
        "visualOptions": [
          {
            "text": "Meat",
            "emoji": "🥩",
            "label": "Meat",
            "translationPt": "Carne / Bife"
          },
          {
            "text": "Fondue",
            "emoji": "🫕",
            "label": "Fondue",
            "translationPt": "Fondue"
          },
          {
            "text": "Bagel",
            "emoji": "🥯",
            "label": "Bagel",
            "translationPt": "Bagel (pão em anel)"
          },
          {
            "text": "Croissant",
            "emoji": "🥐",
            "label": "Croissant",
            "translationPt": "Croissant"
          }
        ],
        "options": [
          "Meat",
          "Fondue",
          "Bagel",
          "Croissant"
        ],
        "correctAnswer": "Fondue",
        "explanation": "Exemplo prático: \"Melted cheese fondue in a warm pot.\"",
        "phoneticHint": "/fɑːnˈduː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Oyster",
        "visualEmoji": "🦪",
        "visualOptions": [
          {
            "text": "Oyster",
            "emoji": "🦪",
            "label": "Oyster",
            "translationPt": "Ostra"
          },
          {
            "text": "Burrito",
            "emoji": "🌯",
            "label": "Burrito",
            "translationPt": "Burrito"
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
          "Oyster",
          "Burrito",
          "Hamburger",
          "Egg"
        ],
        "correctAnswer": "Oyster",
        "explanation": "Exemplo prático: \"Fresh ocean oysters on ice.\"",
        "phoneticHint": "/ˈɔɪ.stər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p4",
    "worldId": 0,
    "phaseNumber": 4,
    "title": "Frutas & Alimentos IV: Bebidas & Sobremesas",
    "subtitle": "Módulo 4/4 • 30 bebidas e doces do comum ao incomum",
    "pedagogicalObjective": "Dominar o vocabulário completo de bebidas, sobremesas e confeitaria.",
    "type": "lesson",
    "icon": "cup",
    "cefrLevel": "A1",
    "theorySummary": [
      "Fechamos a trilha de Alimentos com 30 bebidas, doces e sobremesas.",
      "Desde Water (/ˈwɔː.tər/) e Coffee (/ˈkɔː.fi/) até itens de confeitaria como Cupcake e Macaron.",
      "Acerte todos os itens para concluir os 4 módulos de Gastronomia!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p4-e1",
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
            "text": "Bubble Tea",
            "emoji": "🧋",
            "label": "Bubble Tea",
            "translationPt": "Chá com pérolas (Boba)"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Baby Bottle",
            "emoji": "🍼",
            "label": "Baby Bottle",
            "translationPt": "Mamadeira"
          }
        ],
        "options": [
          "Honey",
          "Bubble Tea",
          "Water",
          "Baby Bottle"
        ],
        "correctAnswer": "Water",
        "explanation": "Exemplo prático: \"Drink plenty of fresh water every day.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          },
          {
            "text": "Teapot",
            "emoji": "🫖",
            "label": "Teapot",
            "translationPt": "Bule de chá"
          },
          {
            "text": "Lemonade",
            "emoji": "🍋",
            "label": "Lemonade",
            "translationPt": "Limonada"
          }
        ],
        "options": [
          "Milk",
          "Lollipop",
          "Teapot",
          "Lemonade"
        ],
        "correctAnswer": "Milk",
        "explanation": "Exemplo prático: \"A glass of cold milk.\"",
        "phoneticHint": "/mɪlk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Coffee",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍨",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Dango",
            "emoji": "🍡",
            "label": "Dango",
            "translationPt": "Doce japonês no palito"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Donut",
          "Ice Cream",
          "Dango",
          "Coffee"
        ],
        "correctAnswer": "Coffee",
        "explanation": "Exemplo prático: \"A cup of hot black coffee.\"",
        "phoneticHint": "/ˈkɔː.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tea",
        "visualEmoji": "🍵",
        "visualOptions": [
          {
            "text": "Smoothie",
            "emoji": "🍧",
            "label": "Smoothie",
            "translationPt": "Vitamina / Raspadinha"
          },
          {
            "text": "Pie",
            "emoji": "🥧",
            "label": "Pie",
            "translationPt": "Torta"
          },
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          },
          {
            "text": "Sugar",
            "emoji": "🧂",
            "label": "Sugar",
            "translationPt": "Açúcar / Sal"
          }
        ],
        "options": [
          "Smoothie",
          "Pie",
          "Tea",
          "Sugar"
        ],
        "correctAnswer": "Tea",
        "explanation": "Exemplo prático: \"Warm green tea is relaxing.\"",
        "phoneticHint": "/tiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Juice",
        "visualEmoji": "🧃",
        "visualOptions": [
          {
            "text": "Cookie",
            "emoji": "🍪",
            "label": "Cookie",
            "translationPt": "Biscoito / Cookie"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco"
          },
          {
            "text": "Ice Cube",
            "emoji": "🧊",
            "label": "Ice Cube",
            "translationPt": "Cubo de gelo"
          },
          {
            "text": "Fortune Cookie",
            "emoji": "🥠",
            "label": "Fortune Cookie",
            "translationPt": "Biscoito da sorte"
          }
        ],
        "options": [
          "Cookie",
          "Juice",
          "Ice Cube",
          "Fortune Cookie"
        ],
        "correctAnswer": "Juice",
        "explanation": "Exemplo prático: \"Natural apple juice with no sugar.\"",
        "phoneticHint": "/dʒuːs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Soda",
        "visualEmoji": "🥤",
        "visualOptions": [
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
          },
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          }
        ],
        "options": [
          "Soda",
          "Candy",
          "Cupcake",
          "Popcorn"
        ],
        "correctAnswer": "Soda",
        "explanation": "Exemplo prático: \"Cold soda with ice cubes.\"",
        "phoneticHint": "/ˈsoʊ.də/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e7",
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
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding",
            "translationPt": "Pudim"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
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
          "Pudding",
          "Milk",
          "Cake"
        ],
        "correctAnswer": "Cake",
        "explanation": "Exemplo prático: \"A slice of strawberry birthday cake.\"",
        "phoneticHint": "/keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Chocolate",
        "visualEmoji": "🍫",
        "visualOptions": [
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          },
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          },
          {
            "text": "Milkshake",
            "emoji": "🥤",
            "label": "Milkshake",
            "translationPt": "Milk-shake"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Chocolate",
          "Tea",
          "Milkshake",
          "Water"
        ],
        "correctAnswer": "Chocolate",
        "explanation": "Exemplo prático: \"Dark chocolate is delicious.\"",
        "phoneticHint": "/ˈtʃɑːk.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ice Cream",
        "visualEmoji": "🍨",
        "visualOptions": [
          {
            "text": "Mate Tea",
            "emoji": "🧉",
            "label": "Mate Tea",
            "translationPt": "Chimarrão / Mate"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍨",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco"
          },
          {
            "text": "Mooncake",
            "emoji": "🥮",
            "label": "Mooncake",
            "translationPt": "Bolo lunar"
          }
        ],
        "options": [
          "Mate Tea",
          "Ice Cream",
          "Juice",
          "Mooncake"
        ],
        "correctAnswer": "Ice Cream",
        "explanation": "Exemplo prático: \"Vanilla ice cream in a bowl.\"",
        "phoneticHint": "/ˈaɪs kriːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cookie",
        "visualEmoji": "🍪",
        "visualOptions": [
          {
            "text": "Cookie",
            "emoji": "🍪",
            "label": "Cookie",
            "translationPt": "Biscoito / Cookie"
          },
          {
            "text": "Soda",
            "emoji": "🥤",
            "label": "Soda",
            "translationPt": "Refrigerante"
          },
          {
            "text": "Smoothie",
            "emoji": "🍧",
            "label": "Smoothie",
            "translationPt": "Vitamina / Raspadinha"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          }
        ],
        "options": [
          "Cookie",
          "Soda",
          "Smoothie",
          "Popcorn"
        ],
        "correctAnswer": "Cookie",
        "explanation": "Exemplo prático: \"Chocolate chip cookies fresh from the oven.\"",
        "phoneticHint": "/ˈkʊk.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Candy",
        "visualEmoji": "🍬",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo"
          },
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          },
          {
            "text": "Lemonade",
            "emoji": "🍋",
            "label": "Lemonade",
            "translationPt": "Limonada"
          },
          {
            "text": "Candy",
            "emoji": "🍬",
            "label": "Candy",
            "translationPt": "Bala / Doce"
          }
        ],
        "options": [
          "Cake",
          "Lollipop",
          "Lemonade",
          "Candy"
        ],
        "correctAnswer": "Candy",
        "explanation": "Exemplo prático: \"Sweet fruit candy.\"",
        "phoneticHint": "/ˈkæn.di/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
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
            "text": "Baby Bottle",
            "emoji": "🍼",
            "label": "Baby Bottle",
            "translationPt": "Mamadeira"
          },
          {
            "text": "Bubble Tea",
            "emoji": "🧋",
            "label": "Bubble Tea",
            "translationPt": "Chá com pérolas (Boba)"
          },
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          }
        ],
        "options": [
          "Honey",
          "Baby Bottle",
          "Bubble Tea",
          "Chocolate"
        ],
        "correctAnswer": "Honey",
        "explanation": "Exemplo prático: \"Golden bee honey in a jar.\"",
        "phoneticHint": "/ˈhʌn.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sugar",
        "visualEmoji": "🧂",
        "visualOptions": [
          {
            "text": "Ice Cream",
            "emoji": "🍨",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Sugar",
            "emoji": "🧂",
            "label": "Sugar",
            "translationPt": "Açúcar / Sal"
          },
          {
            "text": "Fortune Cookie",
            "emoji": "🥠",
            "label": "Fortune Cookie",
            "translationPt": "Biscoito da sorte"
          },
          {
            "text": "Ice Cube",
            "emoji": "🧊",
            "label": "Ice Cube",
            "translationPt": "Cubo de gelo"
          }
        ],
        "options": [
          "Ice Cream",
          "Sugar",
          "Fortune Cookie",
          "Ice Cube"
        ],
        "correctAnswer": "Sugar",
        "explanation": "Exemplo prático: \"One spoon of sugar in my tea.\"",
        "phoneticHint": "/ˈʃʊɡ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Pie",
        "visualEmoji": "🥧",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Dango",
            "emoji": "🍡",
            "label": "Dango",
            "translationPt": "Doce japonês no palito"
          },
          {
            "text": "Pie",
            "emoji": "🥧",
            "label": "Pie",
            "translationPt": "Torta"
          },
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          }
        ],
        "options": [
          "Water",
          "Dango",
          "Pie",
          "Tea"
        ],
        "correctAnswer": "Pie",
        "explanation": "Exemplo prático: \"Warm homemade apple pie.\"",
        "phoneticHint": "/paɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Donut",
        "visualEmoji": "🍩",
        "visualOptions": [
          {
            "text": "Milkshake",
            "emoji": "🥤",
            "label": "Milkshake",
            "translationPt": "Milk-shake"
          },
          {
            "text": "Mate Tea",
            "emoji": "🧉",
            "label": "Mate Tea",
            "translationPt": "Chimarrão / Mate"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          }
        ],
        "options": [
          "Milkshake",
          "Mate Tea",
          "Milk",
          "Donut"
        ],
        "correctAnswer": "Donut",
        "explanation": "Exemplo prático: \"A glazed donut with sprinkles.\"",
        "phoneticHint": "/ˈdoʊ.nʌt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          },
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
          }
        ],
        "options": [
          "Lollipop",
          "Chocolate",
          "Cake",
          "Coffee"
        ],
        "correctAnswer": "Lollipop",
        "explanation": "Exemplo prático: \"A colorful swirl lollipop.\"",
        "phoneticHint": "/ˈlɑː.li.pɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Popcorn",
        "visualEmoji": "🍿",
        "visualOptions": [
          {
            "text": "Cookie",
            "emoji": "🍪",
            "label": "Cookie",
            "translationPt": "Biscoito / Cookie"
          },
          {
            "text": "Soda",
            "emoji": "🥤",
            "label": "Soda",
            "translationPt": "Refrigerante"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
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
          "Soda",
          "Popcorn",
          "Candy"
        ],
        "correctAnswer": "Popcorn",
        "explanation": "Exemplo prático: \"Salty popcorn at the movie theater.\"",
        "phoneticHint": "/ˈpɑːp.kɔːrn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cupcake",
        "visualEmoji": "🧁",
        "visualOptions": [
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          },
          {
            "text": "Pie",
            "emoji": "🥧",
            "label": "Pie",
            "translationPt": "Torta"
          },
          {
            "text": "Sugar",
            "emoji": "🧂",
            "label": "Sugar",
            "translationPt": "Açúcar / Sal"
          },
          {
            "text": "Mooncake",
            "emoji": "🥮",
            "label": "Mooncake",
            "translationPt": "Bolo lunar"
          }
        ],
        "options": [
          "Cupcake",
          "Pie",
          "Sugar",
          "Mooncake"
        ],
        "correctAnswer": "Cupcake",
        "explanation": "Exemplo prático: \"A vanilla cupcake with pink frosting.\"",
        "phoneticHint": "/ˈkʌp.keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pudding",
        "visualEmoji": "🍮",
        "visualOptions": [
          {
            "text": "Teapot",
            "emoji": "🫖",
            "label": "Teapot",
            "translationPt": "Bule de chá"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel"
          },
          {
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding",
            "translationPt": "Pudim"
          }
        ],
        "options": [
          "Teapot",
          "Juice",
          "Honey",
          "Pudding"
        ],
        "correctAnswer": "Pudding",
        "explanation": "Exemplo prático: \"Caramel pudding for dessert.\"",
        "phoneticHint": "/ˈpʊd.ɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Smoothie",
        "visualEmoji": "🍧",
        "visualOptions": [
          {
            "text": "Dango",
            "emoji": "🍡",
            "label": "Dango",
            "translationPt": "Doce japonês no palito"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Smoothie",
            "emoji": "🍧",
            "label": "Smoothie",
            "translationPt": "Vitamina / Raspadinha"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          }
        ],
        "options": [
          "Dango",
          "Water",
          "Smoothie",
          "Donut"
        ],
        "correctAnswer": "Smoothie",
        "explanation": "Exemplo prático: \"A cold berry smoothie.\"",
        "phoneticHint": "/ˈsmuː.ði/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lemonade",
        "visualEmoji": "🍋",
        "visualOptions": [
          {
            "text": "Soda",
            "emoji": "🥤",
            "label": "Soda",
            "translationPt": "Refrigerante"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Lemonade",
            "emoji": "🍋",
            "label": "Lemonade",
            "translationPt": "Limonada"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          }
        ],
        "options": [
          "Soda",
          "Milk",
          "Lemonade",
          "Popcorn"
        ],
        "correctAnswer": "Lemonade",
        "explanation": "Exemplo prático: \"Cold lemonade on a sunny afternoon.\"",
        "phoneticHint": "/ˌlem.əˈneɪd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e22",
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
            "text": "Ice Cream",
            "emoji": "🍨",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          },
          {
            "text": "Fortune Cookie",
            "emoji": "🥠",
            "label": "Fortune Cookie",
            "translationPt": "Biscoito da sorte"
          }
        ],
        "options": [
          "Milkshake",
          "Ice Cream",
          "Cupcake",
          "Fortune Cookie"
        ],
        "correctAnswer": "Milkshake",
        "explanation": "Exemplo prático: \"Thick chocolate milkshake.\"",
        "phoneticHint": "/ˈmɪlk.ʃeɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Ice Cube",
        "visualEmoji": "🧊",
        "visualOptions": [
          {
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding",
            "translationPt": "Pudim"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          },
          {
            "text": "Ice Cube",
            "emoji": "🧊",
            "label": "Ice Cube",
            "translationPt": "Cubo de gelo"
          }
        ],
        "options": [
          "Pudding",
          "Coffee",
          "Lollipop",
          "Ice Cube"
        ],
        "correctAnswer": "Ice Cube",
        "explanation": "Exemplo prático: \"Put two ice cubes in the glass.\"",
        "phoneticHint": "/ˈaɪs kjuːb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Teapot",
        "visualEmoji": "🫖",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo"
          },
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          },
          {
            "text": "Teapot",
            "emoji": "🫖",
            "label": "Teapot",
            "translationPt": "Bule de chá"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel"
          }
        ],
        "options": [
          "Cake",
          "Chocolate",
          "Teapot",
          "Honey"
        ],
        "correctAnswer": "Teapot",
        "explanation": "Exemplo prático: \"Pour hot water from the teapot.\"",
        "phoneticHint": "/ˈtiː.pɑːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Baby Bottle",
        "visualEmoji": "🍼",
        "visualOptions": [
          {
            "text": "Cookie",
            "emoji": "🍪",
            "label": "Cookie",
            "translationPt": "Biscoito / Cookie"
          },
          {
            "text": "Baby Bottle",
            "emoji": "🍼",
            "label": "Baby Bottle",
            "translationPt": "Mamadeira"
          },
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          },
          {
            "text": "Lemonade",
            "emoji": "🍋",
            "label": "Lemonade",
            "translationPt": "Limonada"
          }
        ],
        "options": [
          "Cookie",
          "Baby Bottle",
          "Tea",
          "Lemonade"
        ],
        "correctAnswer": "Baby Bottle",
        "explanation": "Exemplo prático: \"Warm milk in the baby bottle.\"",
        "phoneticHint": "/ˈbeɪ.bi ˈbɑː.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Mate Tea",
        "visualEmoji": "🧉",
        "visualOptions": [
          {
            "text": "Mate Tea",
            "emoji": "🧉",
            "label": "Mate Tea",
            "translationPt": "Chimarrão / Mate"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Candy",
            "emoji": "🍬",
            "label": "Candy",
            "translationPt": "Bala / Doce"
          }
        ],
        "options": [
          "Mate Tea",
          "Juice",
          "Donut",
          "Candy"
        ],
        "correctAnswer": "Mate Tea",
        "explanation": "Exemplo prático: \"Traditional herbal mate tea.\"",
        "phoneticHint": "/ˈmɑː.teɪ tiː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bubble Tea",
        "visualEmoji": "🧋",
        "visualOptions": [
          {
            "text": "Sugar",
            "emoji": "🧂",
            "label": "Sugar",
            "translationPt": "Açúcar / Sal"
          },
          {
            "text": "Smoothie",
            "emoji": "🍧",
            "label": "Smoothie",
            "translationPt": "Vitamina / Raspadinha"
          },
          {
            "text": "Pie",
            "emoji": "🥧",
            "label": "Pie",
            "translationPt": "Torta"
          },
          {
            "text": "Bubble Tea",
            "emoji": "🧋",
            "label": "Bubble Tea",
            "translationPt": "Chá com pérolas (Boba)"
          }
        ],
        "options": [
          "Sugar",
          "Smoothie",
          "Pie",
          "Bubble Tea"
        ],
        "correctAnswer": "Bubble Tea",
        "explanation": "Exemplo prático: \"Sweet bubble tea with tapioca pearls.\"",
        "phoneticHint": "/ˈbʌb.əl tiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fortune Cookie",
        "visualEmoji": "🥠",
        "visualOptions": [
          {
            "text": "Fortune Cookie",
            "emoji": "🥠",
            "label": "Fortune Cookie",
            "translationPt": "Biscoito da sorte"
          },
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          },
          {
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding",
            "translationPt": "Pudim"
          },
          {
            "text": "Ice Cube",
            "emoji": "🧊",
            "label": "Ice Cube",
            "translationPt": "Cubo de gelo"
          }
        ],
        "options": [
          "Fortune Cookie",
          "Cupcake",
          "Pudding",
          "Ice Cube"
        ],
        "correctAnswer": "Fortune Cookie",
        "explanation": "Exemplo prático: \"Read the message inside the fortune cookie.\"",
        "phoneticHint": "/ˈfɔːr.tʃən ˈkʊk.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Mooncake",
        "visualEmoji": "🥮",
        "visualOptions": [
          {
            "text": "Baby Bottle",
            "emoji": "🍼",
            "label": "Baby Bottle",
            "translationPt": "Mamadeira"
          },
          {
            "text": "Mooncake",
            "emoji": "🥮",
            "label": "Mooncake",
            "translationPt": "Bolo lunar"
          },
          {
            "text": "Teapot",
            "emoji": "🫖",
            "label": "Teapot",
            "translationPt": "Bule de chá"
          },
          {
            "text": "Milkshake",
            "emoji": "🥤",
            "label": "Milkshake",
            "translationPt": "Milk-shake"
          }
        ],
        "options": [
          "Baby Bottle",
          "Mooncake",
          "Teapot",
          "Milkshake"
        ],
        "correctAnswer": "Mooncake",
        "explanation": "Exemplo prático: \"Traditional festival mooncake.\"",
        "phoneticHint": "/ˈmuːn.keɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Dango",
        "visualEmoji": "🍡",
        "visualOptions": [
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel"
          },
          {
            "text": "Mate Tea",
            "emoji": "🧉",
            "label": "Mate Tea",
            "translationPt": "Chimarrão / Mate"
          },
          {
            "text": "Dango",
            "emoji": "🍡",
            "label": "Dango",
            "translationPt": "Doce japonês no palito"
          },
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          }
        ],
        "options": [
          "Honey",
          "Mate Tea",
          "Dango",
          "Lollipop"
        ],
        "correctAnswer": "Dango",
        "explanation": "Exemplo prático: \"Sweet rice dumplings on a skewer.\"",
        "phoneticHint": "/ˈdɑːŋ.ɡoʊ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p5",
    "worldId": 0,
    "phaseNumber": 5,
    "title": "Animais & Natureza I: Domésticos & Fazenda",
    "subtitle": "Módulo 1/4 • 30 animais conhecidos (corpo inteiro) do comum ao incomum",
    "pedagogicalObjective": "Reconhecer animais domésticos e da fazenda com ilustrações de corpo inteiro.",
    "type": "lesson",
    "icon": "dog",
    "cefrLevel": "A1",
    "theorySummary": [
      "Todos os animais principais são apresentados em ilustrações de corpo inteiro (sem rostos soltos e sem filhotes).",
      "Começamos pelos mais comuns (Dog, Cat, Horse, Cow) até animais rurais menos comuns (Llama, Alpaca, Yak).",
      "Ouça com atenção a pronúncia nativa de Bird (/bɜːrd/) e Rabbit (/ˈræb.ɪt/)."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p5-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dog",
        "visualEmoji": "🐕",
        "visualOptions": [
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
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
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Ouriço"
          }
        ],
        "options": [
          "Bird",
          "Dog",
          "Hamster",
          "Hedgehog"
        ],
        "correctAnswer": "Dog",
        "explanation": "Exemplo prático: \"The loyal dog runs across the yard.\"",
        "phoneticHint": "/dɔːɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Turkey",
            "emoji": "🦃",
            "label": "Turkey",
            "translationPt": "Peru"
          },
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga"
          },
          {
            "text": "Bull",
            "emoji": "🐂",
            "label": "Bull",
            "translationPt": "Touro"
          }
        ],
        "options": [
          "Cat",
          "Turkey",
          "Turtle",
          "Bull"
        ],
        "correctAnswer": "Cat",
        "explanation": "Exemplo prático: \"The agile cat walks along the wall.\"",
        "phoneticHint": "/kæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Horse",
        "visualEmoji": "🐎",
        "visualOptions": [
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
            "text": "Duck",
            "emoji": "🦆",
            "label": "Duck",
            "translationPt": "Pato"
          },
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          }
        ],
        "options": [
          "Goat",
          "Goose",
          "Duck",
          "Horse"
        ],
        "correctAnswer": "Horse",
        "explanation": "Exemplo prático: \"The brown horse gallops across the field.\"",
        "phoneticHint": "/hɔːrs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cow",
        "visualEmoji": "🐄",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐄",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Peacock",
            "emoji": "🦚",
            "label": "Peacock",
            "translationPt": "Pavão"
          },
          {
            "text": "Swan",
            "emoji": "🦢",
            "label": "Swan",
            "translationPt": "Cisne"
          }
        ],
        "options": [
          "Cow",
          "Parrot",
          "Peacock",
          "Swan"
        ],
        "correctAnswer": "Cow",
        "explanation": "Exemplo prático: \"The dairy cow eats green grass.\"",
        "phoneticHint": "/kaʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Pig",
        "visualEmoji": "🐖",
        "visualOptions": [
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Pig",
            "emoji": "🐖",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Mouse",
            "emoji": "🐁",
            "label": "Mouse",
            "translationPt": "Rato / Camundongo"
          },
          {
            "text": "Camel",
            "emoji": "🐪",
            "label": "Camel",
            "translationPt": "Camelo"
          }
        ],
        "options": [
          "Fish",
          "Pig",
          "Mouse",
          "Camel"
        ],
        "correctAnswer": "Pig",
        "explanation": "Exemplo prático: \"The pink pig rests on the farm.\"",
        "phoneticHint": "/pɪɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sheep",
        "visualEmoji": "🐑",
        "visualOptions": [
          {
            "text": "Ram",
            "emoji": "🐏",
            "label": "Ram",
            "translationPt": "Carneiro"
          },
          {
            "text": "Rooster",
            "emoji": "🐓",
            "label": "Rooster",
            "translationPt": "Galo"
          },
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          },
          {
            "text": "Llama",
            "emoji": "🦙",
            "label": "Llama",
            "translationPt": "Lhama"
          }
        ],
        "options": [
          "Ram",
          "Rooster",
          "Sheep",
          "Llama"
        ],
        "correctAnswer": "Sheep",
        "explanation": "Exemplo prático: \"Sheep give us warm wool.\"",
        "phoneticHint": "/ʃiːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chicken",
        "visualEmoji": "🐓",
        "visualOptions": [
          {
            "text": "Bison",
            "emoji": "🦬",
            "label": "Bison",
            "translationPt": "Bisão"
          },
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Chicken",
            "emoji": "🐓",
            "label": "Chicken",
            "translationPt": "Galinha / Galo"
          }
        ],
        "options": [
          "Bison",
          "Cat",
          "Horse",
          "Chicken"
        ],
        "correctAnswer": "Chicken",
        "explanation": "Exemplo prático: \"The chicken pecks corn in the barn.\"",
        "phoneticHint": "/ˈtʃɪk.ɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Duck",
        "visualEmoji": "🦆",
        "visualOptions": [
          {
            "text": "Duck",
            "emoji": "🦆",
            "label": "Duck",
            "translationPt": "Pato"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cow",
            "emoji": "🐄",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Water Buffalo",
            "emoji": "🐃",
            "label": "Water Buffalo",
            "translationPt": "Búfalo"
          }
        ],
        "options": [
          "Duck",
          "Dog",
          "Cow",
          "Water Buffalo"
        ],
        "correctAnswer": "Duck",
        "explanation": "Exemplo prático: \"The duck swims peacefully on the lake.\"",
        "phoneticHint": "/dʌk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Rabbit",
        "visualEmoji": "🐇",
        "visualOptions": [
          {
            "text": "Donkey",
            "emoji": "🫏",
            "label": "Donkey",
            "translationPt": "Burro / Jegue"
          },
          {
            "text": "Pig",
            "emoji": "🐖",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Rabbit",
            "emoji": "🐇",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba"
          }
        ],
        "options": [
          "Donkey",
          "Pig",
          "Rabbit",
          "Dove"
        ],
        "correctAnswer": "Rabbit",
        "explanation": "Exemplo prático: \"The white rabbit has long ears.\"",
        "phoneticHint": "/ˈræb.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bird",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Swan",
            "emoji": "🦢",
            "label": "Swan",
            "translationPt": "Cisne"
          },
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          }
        ],
        "options": [
          "Swan",
          "Sheep",
          "Bird",
          "Parrot"
        ],
        "correctAnswer": "Bird",
        "explanation": "Exemplo prático: \"A blue bird perches on the branch.\"",
        "phoneticHint": "/bɜːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Fish",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Llama",
            "emoji": "🦙",
            "label": "Llama",
            "translationPt": "Lhama"
          },
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Chicken",
            "emoji": "🐓",
            "label": "Chicken",
            "translationPt": "Galinha / Galo"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          }
        ],
        "options": [
          "Llama",
          "Cat",
          "Chicken",
          "Fish"
        ],
        "correctAnswer": "Fish",
        "explanation": "Exemplo prático: \"The fish swims in clear water.\"",
        "phoneticHint": "/fɪʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Mouse",
        "visualEmoji": "🐁",
        "visualOptions": [
          {
            "text": "Mouse",
            "emoji": "🐁",
            "label": "Mouse",
            "translationPt": "Rato / Camundongo"
          },
          {
            "text": "Rooster",
            "emoji": "🐓",
            "label": "Rooster",
            "translationPt": "Galo"
          },
          {
            "text": "Bison",
            "emoji": "🦬",
            "label": "Bison",
            "translationPt": "Bisão"
          },
          {
            "text": "Bull",
            "emoji": "🐂",
            "label": "Bull",
            "translationPt": "Touro"
          }
        ],
        "options": [
          "Mouse",
          "Rooster",
          "Bison",
          "Bull"
        ],
        "correctAnswer": "Mouse",
        "explanation": "Exemplo prático: \"The small mouse runs very fast.\"",
        "phoneticHint": "/maʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Goat",
        "visualEmoji": "🐐",
        "visualOptions": [
          {
            "text": "Rabbit",
            "emoji": "🐇",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Ouriço"
          },
          {
            "text": "Goat",
            "emoji": "🐐",
            "label": "Goat",
            "translationPt": "Cabra / Bode"
          },
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          }
        ],
        "options": [
          "Rabbit",
          "Hedgehog",
          "Goat",
          "Horse"
        ],
        "correctAnswer": "Goat",
        "explanation": "Exemplo prático: \"Mountain goats climb steep rocks.\"",
        "phoneticHint": "/ɡoʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Donkey",
        "visualEmoji": "🫏",
        "visualOptions": [
          {
            "text": "Donkey",
            "emoji": "🫏",
            "label": "Donkey",
            "translationPt": "Burro / Jegue"
          },
          {
            "text": "Duck",
            "emoji": "🦆",
            "label": "Duck",
            "translationPt": "Pato"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba"
          }
        ],
        "options": [
          "Donkey",
          "Duck",
          "Dog",
          "Dove"
        ],
        "correctAnswer": "Donkey",
        "explanation": "Exemplo prático: \"The strong donkey carries heavy loads.\"",
        "phoneticHint": "/ˈdɑːŋ.ki/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Turkey",
        "visualEmoji": "🦃",
        "visualOptions": [
          {
            "text": "Pig",
            "emoji": "🐖",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Water Buffalo",
            "emoji": "🐃",
            "label": "Water Buffalo",
            "translationPt": "Búfalo"
          },
          {
            "text": "Peacock",
            "emoji": "🦚",
            "label": "Peacock",
            "translationPt": "Pavão"
          },
          {
            "text": "Turkey",
            "emoji": "🦃",
            "label": "Turkey",
            "translationPt": "Peru"
          }
        ],
        "options": [
          "Pig",
          "Water Buffalo",
          "Peacock",
          "Turkey"
        ],
        "correctAnswer": "Turkey",
        "explanation": "Exemplo prático: \"The wild turkey has large tail feathers.\"",
        "phoneticHint": "/ˈtɜːr.ki/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Goose",
        "visualEmoji": "🪿",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐄",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Chicken",
            "emoji": "🐓",
            "label": "Chicken",
            "translationPt": "Galinha / Galo"
          },
          {
            "text": "Goose",
            "emoji": "🪿",
            "label": "Goose",
            "translationPt": "Ganso"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          }
        ],
        "options": [
          "Cow",
          "Chicken",
          "Goose",
          "Fish"
        ],
        "correctAnswer": "Goose",
        "explanation": "Exemplo prático: \"A white goose walks near the pond.\"",
        "phoneticHint": "/ɡuːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Hamster",
        "visualEmoji": "🐹",
        "visualOptions": [
          {
            "text": "Camel",
            "emoji": "🐪",
            "label": "Camel",
            "translationPt": "Camelo"
          },
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          },
          {
            "text": "Rabbit",
            "emoji": "🐇",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Ram",
            "emoji": "🐏",
            "label": "Ram",
            "translationPt": "Carneiro"
          }
        ],
        "options": [
          "Camel",
          "Hamster",
          "Rabbit",
          "Ram"
        ],
        "correctAnswer": "Hamster",
        "explanation": "Exemplo prático: \"The golden hamster stores seeds in its cheeks.\"",
        "phoneticHint": "/ˈhæm.stər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Parrot",
        "visualEmoji": "🦜",
        "visualOptions": [
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          },
          {
            "text": "Mouse",
            "emoji": "🐁",
            "label": "Mouse",
            "translationPt": "Rato / Camundongo"
          }
        ],
        "options": [
          "Parrot",
          "Bird",
          "Sheep",
          "Mouse"
        ],
        "correctAnswer": "Parrot",
        "explanation": "Exemplo prático: \"The colorful parrot can mimic human speech.\"",
        "phoneticHint": "/ˈpær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Turtle",
        "visualEmoji": "🐢",
        "visualOptions": [
          {
            "text": "Turkey",
            "emoji": "🦃",
            "label": "Turkey",
            "translationPt": "Peru"
          },
          {
            "text": "Goat",
            "emoji": "🐐",
            "label": "Goat",
            "translationPt": "Cabra / Bode"
          },
          {
            "text": "Donkey",
            "emoji": "🫏",
            "label": "Donkey",
            "translationPt": "Burro / Jegue"
          },
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga"
          }
        ],
        "options": [
          "Turkey",
          "Goat",
          "Donkey",
          "Turtle"
        ],
        "correctAnswer": "Turtle",
        "explanation": "Exemplo prático: \"The turtle carries a hard shell on its back.\"",
        "phoneticHint": "/ˈtɜːr.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Bull",
        "visualEmoji": "🐂",
        "visualOptions": [
          {
            "text": "Bull",
            "emoji": "🐂",
            "label": "Bull",
            "translationPt": "Touro"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Duck",
            "emoji": "🦆",
            "label": "Duck",
            "translationPt": "Pato"
          },
          {
            "text": "Goose",
            "emoji": "🪿",
            "label": "Goose",
            "translationPt": "Ganso"
          }
        ],
        "options": [
          "Bull",
          "Dog",
          "Duck",
          "Goose"
        ],
        "correctAnswer": "Bull",
        "explanation": "Exemplo prático: \"The muscular bull has strong horns.\"",
        "phoneticHint": "/bʊl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Rooster",
        "visualEmoji": "🐓",
        "visualOptions": [
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba"
          },
          {
            "text": "Rooster",
            "emoji": "🐓",
            "label": "Rooster",
            "translationPt": "Galo"
          },
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          },
          {
            "text": "Pig",
            "emoji": "🐖",
            "label": "Pig",
            "translationPt": "Porco"
          }
        ],
        "options": [
          "Dove",
          "Rooster",
          "Hamster",
          "Pig"
        ],
        "correctAnswer": "Rooster",
        "explanation": "Exemplo prático: \"The rooster crows at sunrise.\"",
        "phoneticHint": "/ˈruː.stər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Camel",
        "visualEmoji": "🐪",
        "visualOptions": [
          {
            "text": "Camel",
            "emoji": "🐪",
            "label": "Camel",
            "translationPt": "Camelo"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Cow",
            "emoji": "🐄",
            "label": "Cow",
            "translationPt": "Vaca"
          }
        ],
        "options": [
          "Camel",
          "Fish",
          "Cat",
          "Cow"
        ],
        "correctAnswer": "Camel",
        "explanation": "Exemplo prático: \"Camels cross the dry desert.\"",
        "phoneticHint": "/ˈkæm.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Llama",
        "visualEmoji": "🦙",
        "visualOptions": [
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga"
          },
          {
            "text": "Rabbit",
            "emoji": "🐇",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Ram",
            "emoji": "🐏",
            "label": "Ram",
            "translationPt": "Carneiro"
          },
          {
            "text": "Llama",
            "emoji": "🦙",
            "label": "Llama",
            "translationPt": "Lhama"
          }
        ],
        "options": [
          "Turtle",
          "Rabbit",
          "Ram",
          "Llama"
        ],
        "correctAnswer": "Llama",
        "explanation": "Exemplo prático: \"Llamas live high in the Andes mountains.\"",
        "phoneticHint": "/ˈlɑː.mə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Swan",
        "visualEmoji": "🦢",
        "visualOptions": [
          {
            "text": "Swan",
            "emoji": "🦢",
            "label": "Swan",
            "translationPt": "Cisne"
          },
          {
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Ouriço"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          }
        ],
        "options": [
          "Swan",
          "Hedgehog",
          "Bird",
          "Horse"
        ],
        "correctAnswer": "Swan",
        "explanation": "Exemplo prático: \"The graceful white swan glides on the water.\"",
        "phoneticHint": "/swɑːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Peacock",
        "visualEmoji": "🦚",
        "visualOptions": [
          {
            "text": "Turkey",
            "emoji": "🦃",
            "label": "Turkey",
            "translationPt": "Peru"
          },
          {
            "text": "Peacock",
            "emoji": "🦚",
            "label": "Peacock",
            "translationPt": "Pavão"
          },
          {
            "text": "Bull",
            "emoji": "🐂",
            "label": "Bull",
            "translationPt": "Touro"
          },
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          }
        ],
        "options": [
          "Turkey",
          "Peacock",
          "Bull",
          "Hamster"
        ],
        "correctAnswer": "Peacock",
        "explanation": "Exemplo prático: \"The peacock opens its brilliant tail feathers.\"",
        "phoneticHint": "/ˈpiː.kɑːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Dove",
        "visualEmoji": "🕊️",
        "visualOptions": [
          {
            "text": "Goose",
            "emoji": "🪿",
            "label": "Goose",
            "translationPt": "Ganso"
          },
          {
            "text": "Goat",
            "emoji": "🐐",
            "label": "Goat",
            "translationPt": "Cabra / Bode"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba"
          },
          {
            "text": "Donkey",
            "emoji": "🫏",
            "label": "Donkey",
            "translationPt": "Burro / Jegue"
          }
        ],
        "options": [
          "Goose",
          "Goat",
          "Dove",
          "Donkey"
        ],
        "correctAnswer": "Dove",
        "explanation": "Exemplo prático: \"The white dove is a symbol of peace.\"",
        "phoneticHint": "/dʌv/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Water Buffalo",
        "visualEmoji": "🐃",
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
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          },
          {
            "text": "Water Buffalo",
            "emoji": "🐃",
            "label": "Water Buffalo",
            "translationPt": "Búfalo"
          }
        ],
        "options": [
          "Parrot",
          "Mouse",
          "Sheep",
          "Water Buffalo"
        ],
        "correctAnswer": "Water Buffalo",
        "explanation": "Exemplo prático: \"Water buffaloes cool off in the mud.\"",
        "phoneticHint": "/ˈwɔː.tər ˈbʌf.ə.loʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ram",
        "visualEmoji": "🐏",
        "visualOptions": [
          {
            "text": "Ram",
            "emoji": "🐏",
            "label": "Ram",
            "translationPt": "Carneiro"
          },
          {
            "text": "Camel",
            "emoji": "🐪",
            "label": "Camel",
            "translationPt": "Camelo"
          },
          {
            "text": "Chicken",
            "emoji": "🐓",
            "label": "Chicken",
            "translationPt": "Galinha / Galo"
          },
          {
            "text": "Llama",
            "emoji": "🦙",
            "label": "Llama",
            "translationPt": "Lhama"
          }
        ],
        "options": [
          "Ram",
          "Camel",
          "Chicken",
          "Llama"
        ],
        "correctAnswer": "Ram",
        "explanation": "Exemplo prático: \"The mountain ram has curved horns.\"",
        "phoneticHint": "/ræm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Hedgehog",
        "visualEmoji": "🦔",
        "visualOptions": [
          {
            "text": "Rooster",
            "emoji": "🐓",
            "label": "Rooster",
            "translationPt": "Galo"
          },
          {
            "text": "Peacock",
            "emoji": "🦚",
            "label": "Peacock",
            "translationPt": "Pavão"
          },
          {
            "text": "Hedgehog",
            "emoji": "🦔",
            "label": "Hedgehog",
            "translationPt": "Ouriço"
          },
          {
            "text": "Swan",
            "emoji": "🦢",
            "label": "Swan",
            "translationPt": "Cisne"
          }
        ],
        "options": [
          "Rooster",
          "Peacock",
          "Hedgehog",
          "Swan"
        ],
        "correctAnswer": "Hedgehog",
        "explanation": "Exemplo prático: \"The little hedgehog is covered in spines.\"",
        "phoneticHint": "/ˈhedʒ.hɔːɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bison",
        "visualEmoji": "🦬",
        "visualOptions": [
          {
            "text": "Bison",
            "emoji": "🦬",
            "label": "Bison",
            "translationPt": "Bisão"
          },
          {
            "text": "Horse",
            "emoji": "🐎",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga"
          },
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          }
        ],
        "options": [
          "Bison",
          "Horse",
          "Turtle",
          "Hamster"
        ],
        "correctAnswer": "Bison",
        "explanation": "Exemplo prático: \"Wild bison roam the northern plains.\"",
        "phoneticHint": "/ˈbaɪ.sən/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p6",
    "worldId": 0,
    "phaseNumber": 6,
    "title": "Animais & Natureza II: Selvagens & Floresta",
    "subtitle": "Módulo 2/4 • 30 animais selvagens de corpo inteiro",
    "pedagogicalObjective": "Identificar grandes mamíferos e animais selvagens da selva, savana e floresta.",
    "type": "lesson",
    "icon": "dog",
    "cefrLevel": "A1",
    "theorySummary": [
      "Agora exploramos os 30 animais selvagens mais conhecidos do planeta.",
      "Leão (Lion), Tigre (Tiger), Elefante (Elephant), Urso (Bear) e Girafa (Giraffe) têm ilustrações completas.",
      "Observe os sons das vogais em Bear (/ber/), Deer (/dɪr/) e Wolf (/wʊlf/)."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p6-e1",
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
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          },
          {
            "text": "Beaver",
            "emoji": "🦫",
            "label": "Beaver",
            "translationPt": "Castor"
          },
          {
            "text": "Bat",
            "emoji": "🦇",
            "label": "Bat",
            "translationPt": "Morcego"
          }
        ],
        "options": [
          "Hippopotamus",
          "Lion",
          "Beaver",
          "Bat"
        ],
        "correctAnswer": "Lion",
        "explanation": "Exemplo prático: \"The majestic lion is the king of the savanna.\"",
        "phoneticHint": "/ˈlaɪ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Tiger",
        "visualEmoji": "🐅",
        "visualOptions": [
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
          },
          {
            "text": "Tiger",
            "emoji": "🐅",
            "label": "Tiger",
            "translationPt": "Tigre"
          },
          {
            "text": "Badger",
            "emoji": "🦡",
            "label": "Badger",
            "translationPt": "Texugo"
          }
        ],
        "options": [
          "Kangaroo",
          "Koala",
          "Tiger",
          "Badger"
        ],
        "correctAnswer": "Tiger",
        "explanation": "Exemplo prático: \"The striped tiger hunts in the jungle.\"",
        "phoneticHint": "/ˈtaɪ.ɡər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Elephant",
        "visualEmoji": "🐘",
        "visualOptions": [
          {
            "text": "Deer",
            "emoji": "🦌",
            "label": "Deer",
            "translationPt": "Cervo / Veado"
          },
          {
            "text": "Wolf",
            "emoji": "🐺",
            "label": "Wolf",
            "translationPt": "Lobo"
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
          "Deer",
          "Wolf",
          "Gorilla",
          "Elephant"
        ],
        "correctAnswer": "Elephant",
        "explanation": "Exemplo prático: \"The elephant has a long trunk and big ears.\"",
        "phoneticHint": "/ˈel.ɪ.fənt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bear",
        "visualEmoji": "🐻",
        "visualOptions": [
          {
            "text": "Bear",
            "emoji": "🐻",
            "label": "Bear",
            "translationPt": "Urso"
          },
          {
            "text": "Skunk",
            "emoji": "🦨",
            "label": "Skunk",
            "translationPt": "Gambá"
          },
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
          }
        ],
        "options": [
          "Bear",
          "Skunk",
          "Sloth",
          "Squirrel"
        ],
        "correctAnswer": "Bear",
        "explanation": "Exemplo prático: \"The brown bear catches fish in the river.\"",
        "phoneticHint": "/ber/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Monkey",
        "visualEmoji": "🐒",
        "visualOptions": [
          {
            "text": "Chipmunk",
            "emoji": "🐿️",
            "label": "Chipmunk",
            "translationPt": "Tâmia / Esquilo-listrado"
          },
          {
            "text": "Mammoth",
            "emoji": "🦣",
            "label": "Mammoth",
            "translationPt": "Mamute"
          },
          {
            "text": "Monkey",
            "emoji": "🐒",
            "label": "Monkey",
            "translationPt": "Macaco"
          },
          {
            "text": "Panda",
            "emoji": "🐼",
            "label": "Panda",
            "translationPt": "Urso Panda"
          }
        ],
        "options": [
          "Chipmunk",
          "Mammoth",
          "Monkey",
          "Panda"
        ],
        "correctAnswer": "Monkey",
        "explanation": "Exemplo prático: \"The agile monkey climbs tall trees.\"",
        "phoneticHint": "/ˈmʌŋ.ki/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Giraffe",
        "visualEmoji": "🦒",
        "visualOptions": [
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          },
          {
            "text": "Raccoon",
            "emoji": "🦝",
            "label": "Raccoon",
            "translationPt": "Guaxinim"
          },
          {
            "text": "Rhinoceros",
            "emoji": "🦏",
            "label": "Rhinoceros",
            "translationPt": "Rinoceronte"
          },
          {
            "text": "Otter",
            "emoji": "🦦",
            "label": "Otter",
            "translationPt": "Lontra"
          }
        ],
        "options": [
          "Giraffe",
          "Raccoon",
          "Rhinoceros",
          "Otter"
        ],
        "correctAnswer": "Giraffe",
        "explanation": "Exemplo prático: \"The giraffe has a very long neck.\"",
        "phoneticHint": "/dʒɪˈræf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Zebra",
        "visualEmoji": "🦓",
        "visualOptions": [
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
          },
          {
            "text": "Orangutan",
            "emoji": "🦧",
            "label": "Orangutan",
            "translationPt": "Orangotango"
          },
          {
            "text": "Boar",
            "emoji": "🐗",
            "label": "Boar",
            "translationPt": "Javali"
          },
          {
            "text": "Zebra",
            "emoji": "🦓",
            "label": "Zebra",
            "translationPt": "Zebra"
          }
        ],
        "options": [
          "Elephant",
          "Orangutan",
          "Boar",
          "Zebra"
        ],
        "correctAnswer": "Zebra",
        "explanation": "Exemplo prático: \"Every zebra has unique black and white stripes.\"",
        "phoneticHint": "/ˈziː.brə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Wolf",
        "visualEmoji": "🐺",
        "visualOptions": [
          {
            "text": "Bear",
            "emoji": "🐻",
            "label": "Bear",
            "translationPt": "Urso"
          },
          {
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
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
          "Bear",
          "Lion",
          "Wolf",
          "Tiger"
        ],
        "correctAnswer": "Wolf",
        "explanation": "Exemplo prático: \"The gray wolf howls at the full moon.\"",
        "phoneticHint": "/wʊlf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fox",
        "visualEmoji": "🦊",
        "visualOptions": [
          {
            "text": "Monkey",
            "emoji": "🐒",
            "label": "Monkey",
            "translationPt": "Macaco"
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
            "text": "Moose",
            "emoji": "🫎",
            "label": "Moose",
            "translationPt": "Alce"
          }
        ],
        "options": [
          "Monkey",
          "Leopard",
          "Fox",
          "Moose"
        ],
        "correctAnswer": "Fox",
        "explanation": "Exemplo prático: \"The clever red fox has a bushy tail.\"",
        "phoneticHint": "/fɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e10",
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
            "text": "Squirrel",
            "emoji": "🐿️",
            "label": "Squirrel",
            "translationPt": "Esquilo"
          },
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          },
          {
            "text": "Sloth",
            "emoji": "🦥",
            "label": "Sloth",
            "translationPt": "Bicho-preguiça"
          }
        ],
        "options": [
          "Deer",
          "Squirrel",
          "Giraffe",
          "Sloth"
        ],
        "correctAnswer": "Deer",
        "explanation": "Exemplo prático: \"The deer leaps gracefully through the forest.\"",
        "phoneticHint": "/dɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Panda",
        "visualEmoji": "🐼",
        "visualOptions": [
          {
            "text": "Zebra",
            "emoji": "🦓",
            "label": "Zebra",
            "translationPt": "Zebra"
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
          },
          {
            "text": "Panda",
            "emoji": "🐼",
            "label": "Panda",
            "translationPt": "Urso Panda"
          }
        ],
        "options": [
          "Zebra",
          "Orangutan",
          "Otter",
          "Panda"
        ],
        "correctAnswer": "Panda",
        "explanation": "Exemplo prático: \"Giant pandas eat bamboo all day.\"",
        "phoneticHint": "/ˈpæn.də/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Koala",
        "visualEmoji": "🐨",
        "visualOptions": [
          {
            "text": "Bat",
            "emoji": "🦇",
            "label": "Bat",
            "translationPt": "Morcego"
          },
          {
            "text": "Beaver",
            "emoji": "🦫",
            "label": "Beaver",
            "translationPt": "Castor"
          },
          {
            "text": "Koala",
            "emoji": "🐨",
            "label": "Koala",
            "translationPt": "Coala"
          },
          {
            "text": "Bear",
            "emoji": "🐻",
            "label": "Bear",
            "translationPt": "Urso"
          }
        ],
        "options": [
          "Bat",
          "Beaver",
          "Koala",
          "Bear"
        ],
        "correctAnswer": "Koala",
        "explanation": "Exemplo prático: \"The koala sleeps in eucalyptus trees.\"",
        "phoneticHint": "/koʊˈɑː.lə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Kangaroo",
        "visualEmoji": "🦘",
        "visualOptions": [
          {
            "text": "Badger",
            "emoji": "🦡",
            "label": "Badger",
            "translationPt": "Texugo"
          },
          {
            "text": "Kangaroo",
            "emoji": "🦘",
            "label": "Kangaroo",
            "translationPt": "Canguru"
          },
          {
            "text": "Fox",
            "emoji": "🦊",
            "label": "Fox",
            "translationPt": "Raposa"
          },
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
          }
        ],
        "options": [
          "Badger",
          "Kangaroo",
          "Fox",
          "Elephant"
        ],
        "correctAnswer": "Kangaroo",
        "explanation": "Exemplo prático: \"Kangaroos jump high across Australia.\"",
        "phoneticHint": "/ˌkæŋ.ɡəˈruː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Gorilla",
        "visualEmoji": "🦍",
        "visualOptions": [
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
          "Gorilla",
          "Deer",
          "Wolf",
          "Tiger"
        ],
        "correctAnswer": "Gorilla",
        "explanation": "Exemplo prático: \"The strong gorilla lives in the tropical forest.\"",
        "phoneticHint": "/ɡəˈrɪl.ə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hippopotamus",
        "visualEmoji": "🦛",
        "visualOptions": [
          {
            "text": "Panda",
            "emoji": "🐼",
            "label": "Panda",
            "translationPt": "Urso Panda"
          },
          {
            "text": "Monkey",
            "emoji": "🐒",
            "label": "Monkey",
            "translationPt": "Macaco"
          },
          {
            "text": "Mammoth",
            "emoji": "🦣",
            "label": "Mammoth",
            "translationPt": "Mamute"
          },
          {
            "text": "Hippopotamus",
            "emoji": "🦛",
            "label": "Hippopotamus",
            "translationPt": "Hipopótamo"
          }
        ],
        "options": [
          "Panda",
          "Monkey",
          "Mammoth",
          "Hippopotamus"
        ],
        "correctAnswer": "Hippopotamus",
        "explanation": "Exemplo prático: \"The hippopotamus spends hours in the river.\"",
        "phoneticHint": "/ˌhɪp.əˈpɑː.tə.məs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Rhinoceros",
        "visualEmoji": "🦏",
        "visualOptions": [
          {
            "text": "Rhinoceros",
            "emoji": "🦏",
            "label": "Rhinoceros",
            "translationPt": "Rinoceronte"
          },
          {
            "text": "Skunk",
            "emoji": "🦨",
            "label": "Skunk",
            "translationPt": "Gambá"
          },
          {
            "text": "Moose",
            "emoji": "🫎",
            "label": "Moose",
            "translationPt": "Alce"
          },
          {
            "text": "Chipmunk",
            "emoji": "🐿️",
            "label": "Chipmunk",
            "translationPt": "Tâmia / Esquilo-listrado"
          }
        ],
        "options": [
          "Rhinoceros",
          "Skunk",
          "Moose",
          "Chipmunk"
        ],
        "correctAnswer": "Rhinoceros",
        "explanation": "Exemplo prático: \"The rhinoceros has a thick horn on its nose.\"",
        "phoneticHint": "/raɪˈnɑː.sər.əs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Leopard",
        "visualEmoji": "🐆",
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
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          },
          {
            "text": "Fox",
            "emoji": "🦊",
            "label": "Fox",
            "translationPt": "Raposa"
          }
        ],
        "options": [
          "Lion",
          "Leopard",
          "Giraffe",
          "Fox"
        ],
        "correctAnswer": "Leopard",
        "explanation": "Exemplo prático: \"The spotted leopard runs at tremendous speed.\"",
        "phoneticHint": "/ˈlep.ərd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Squirrel",
        "visualEmoji": "🐿️",
        "visualOptions": [
          {
            "text": "Gorilla",
            "emoji": "🦍",
            "label": "Gorilla",
            "translationPt": "Gorila"
          },
          {
            "text": "Boar",
            "emoji": "🐗",
            "label": "Boar",
            "translationPt": "Javali"
          },
          {
            "text": "Squirrel",
            "emoji": "🐿️",
            "label": "Squirrel",
            "translationPt": "Esquilo"
          },
          {
            "text": "Zebra",
            "emoji": "🦓",
            "label": "Zebra",
            "translationPt": "Zebra"
          }
        ],
        "options": [
          "Gorilla",
          "Boar",
          "Squirrel",
          "Zebra"
        ],
        "correctAnswer": "Squirrel",
        "explanation": "Exemplo prático: \"The squirrel gathers acorns for winter.\"",
        "phoneticHint": "/ˈskwɜːr.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bat",
        "visualEmoji": "🦇",
        "visualOptions": [
          {
            "text": "Kangaroo",
            "emoji": "🦘",
            "label": "Kangaroo",
            "translationPt": "Canguru"
          },
          {
            "text": "Hippopotamus",
            "emoji": "🦛",
            "label": "Hippopotamus",
            "translationPt": "Hipopótamo"
          },
          {
            "text": "Koala",
            "emoji": "🐨",
            "label": "Koala",
            "translationPt": "Coala"
          },
          {
            "text": "Bat",
            "emoji": "🦇",
            "label": "Bat",
            "translationPt": "Morcego"
          }
        ],
        "options": [
          "Kangaroo",
          "Hippopotamus",
          "Koala",
          "Bat"
        ],
        "correctAnswer": "Bat",
        "explanation": "Exemplo prático: \"Bats fly in the night using echolocation.\"",
        "phoneticHint": "/bæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Raccoon",
        "visualEmoji": "🦝",
        "visualOptions": [
          {
            "text": "Raccoon",
            "emoji": "🦝",
            "label": "Raccoon",
            "translationPt": "Guaxinim"
          },
          {
            "text": "Deer",
            "emoji": "🦌",
            "label": "Deer",
            "translationPt": "Cervo / Veado"
          },
          {
            "text": "Wolf",
            "emoji": "🐺",
            "label": "Wolf",
            "translationPt": "Lobo"
          },
          {
            "text": "Rhinoceros",
            "emoji": "🦏",
            "label": "Rhinoceros",
            "translationPt": "Rinoceronte"
          }
        ],
        "options": [
          "Raccoon",
          "Deer",
          "Wolf",
          "Rhinoceros"
        ],
        "correctAnswer": "Raccoon",
        "explanation": "Exemplo prático: \"The raccoon has a dark mask around its eyes.\"",
        "phoneticHint": "/ræˈkuːn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sloth",
        "visualEmoji": "🦥",
        "visualOptions": [
          {
            "text": "Leopard",
            "emoji": "🐆",
            "label": "Leopard",
            "translationPt": "Leopardo"
          },
          {
            "text": "Sloth",
            "emoji": "🦥",
            "label": "Sloth",
            "translationPt": "Bicho-preguiça"
          },
          {
            "text": "Monkey",
            "emoji": "🐒",
            "label": "Monkey",
            "translationPt": "Macaco"
          },
          {
            "text": "Panda",
            "emoji": "🐼",
            "label": "Panda",
            "translationPt": "Urso Panda"
          }
        ],
        "options": [
          "Leopard",
          "Sloth",
          "Monkey",
          "Panda"
        ],
        "correctAnswer": "Sloth",
        "explanation": "Exemplo prático: \"The sloth moves very slowly in the trees.\"",
        "phoneticHint": "/slɔːθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Otter",
        "visualEmoji": "🦦",
        "visualOptions": [
          {
            "text": "Chipmunk",
            "emoji": "🐿️",
            "label": "Chipmunk",
            "translationPt": "Tâmia / Esquilo-listrado"
          },
          {
            "text": "Fox",
            "emoji": "🦊",
            "label": "Fox",
            "translationPt": "Raposa"
          },
          {
            "text": "Otter",
            "emoji": "🦦",
            "label": "Otter",
            "translationPt": "Lontra"
          },
          {
            "text": "Squirrel",
            "emoji": "🐿️",
            "label": "Squirrel",
            "translationPt": "Esquilo"
          }
        ],
        "options": [
          "Chipmunk",
          "Fox",
          "Otter",
          "Squirrel"
        ],
        "correctAnswer": "Otter",
        "explanation": "Exemplo prático: \"Playful river otters swim on their backs.\"",
        "phoneticHint": "/ˈɑː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Beaver",
        "visualEmoji": "🦫",
        "visualOptions": [
          {
            "text": "Mammoth",
            "emoji": "🦣",
            "label": "Mammoth",
            "translationPt": "Mamute"
          },
          {
            "text": "Moose",
            "emoji": "🫎",
            "label": "Moose",
            "translationPt": "Alce"
          },
          {
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          },
          {
            "text": "Beaver",
            "emoji": "🦫",
            "label": "Beaver",
            "translationPt": "Castor"
          }
        ],
        "options": [
          "Mammoth",
          "Moose",
          "Lion",
          "Beaver"
        ],
        "correctAnswer": "Beaver",
        "explanation": "Exemplo prático: \"Beavers build wooden dams across streams.\"",
        "phoneticHint": "/ˈbiː.vər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Skunk",
        "visualEmoji": "🦨",
        "visualOptions": [
          {
            "text": "Skunk",
            "emoji": "🦨",
            "label": "Skunk",
            "translationPt": "Gambá"
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
          },
          {
            "text": "Raccoon",
            "emoji": "🦝",
            "label": "Raccoon",
            "translationPt": "Guaxinim"
          }
        ],
        "options": [
          "Skunk",
          "Kangaroo",
          "Koala",
          "Raccoon"
        ],
        "correctAnswer": "Skunk",
        "explanation": "Exemplo prático: \"A skunk has a black coat with a white stripe.\"",
        "phoneticHint": "/skʌŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Badger",
        "visualEmoji": "🦡",
        "visualOptions": [
          {
            "text": "Tiger",
            "emoji": "🐅",
            "label": "Tiger",
            "translationPt": "Tigre"
          },
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
          },
          {
            "text": "Badger",
            "emoji": "🦡",
            "label": "Badger",
            "translationPt": "Texugo"
          },
          {
            "text": "Hippopotamus",
            "emoji": "🦛",
            "label": "Hippopotamus",
            "translationPt": "Hipopótamo"
          }
        ],
        "options": [
          "Tiger",
          "Elephant",
          "Badger",
          "Hippopotamus"
        ],
        "correctAnswer": "Badger",
        "explanation": "Exemplo prático: \"The badger digs deep burrows underground.\"",
        "phoneticHint": "/ˈbædʒ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Orangutan",
        "visualEmoji": "🦧",
        "visualOptions": [
          {
            "text": "Orangutan",
            "emoji": "🦧",
            "label": "Orangutan",
            "translationPt": "Orangotango"
          },
          {
            "text": "Gorilla",
            "emoji": "🦍",
            "label": "Gorilla",
            "translationPt": "Gorila"
          },
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          },
          {
            "text": "Zebra",
            "emoji": "🦓",
            "label": "Zebra",
            "translationPt": "Zebra"
          }
        ],
        "options": [
          "Orangutan",
          "Gorilla",
          "Giraffe",
          "Zebra"
        ],
        "correctAnswer": "Orangutan",
        "explanation": "Exemplo prático: \"Orangutans have long reddish-brown hair.\"",
        "phoneticHint": "/əˈræŋ.ə.tæn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Boar",
        "visualEmoji": "🐗",
        "visualOptions": [
          {
            "text": "Sloth",
            "emoji": "🦥",
            "label": "Sloth",
            "translationPt": "Bicho-preguiça"
          },
          {
            "text": "Bat",
            "emoji": "🦇",
            "label": "Bat",
            "translationPt": "Morcego"
          },
          {
            "text": "Bear",
            "emoji": "🐻",
            "label": "Bear",
            "translationPt": "Urso"
          },
          {
            "text": "Boar",
            "emoji": "🐗",
            "label": "Boar",
            "translationPt": "Javali"
          }
        ],
        "options": [
          "Sloth",
          "Bat",
          "Bear",
          "Boar"
        ],
        "correctAnswer": "Boar",
        "explanation": "Exemplo prático: \"The wild boar searches for roots in the woods.\"",
        "phoneticHint": "/bɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chipmunk",
        "visualEmoji": "🐿️",
        "visualOptions": [
          {
            "text": "Skunk",
            "emoji": "🦨",
            "label": "Skunk",
            "translationPt": "Gambá"
          },
          {
            "text": "Beaver",
            "emoji": "🦫",
            "label": "Beaver",
            "translationPt": "Castor"
          },
          {
            "text": "Chipmunk",
            "emoji": "🐿️",
            "label": "Chipmunk",
            "translationPt": "Tâmia / Esquilo-listrado"
          },
          {
            "text": "Leopard",
            "emoji": "🐆",
            "label": "Leopard",
            "translationPt": "Leopardo"
          }
        ],
        "options": [
          "Skunk",
          "Beaver",
          "Chipmunk",
          "Leopard"
        ],
        "correctAnswer": "Chipmunk",
        "explanation": "Exemplo prático: \"The small chipmunk has stripes on its back.\"",
        "phoneticHint": "/ˈtʃɪp.mʌŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Mammoth",
        "visualEmoji": "🦣",
        "visualOptions": [
          {
            "text": "Raccoon",
            "emoji": "🦝",
            "label": "Raccoon",
            "translationPt": "Guaxinim"
          },
          {
            "text": "Mammoth",
            "emoji": "🦣",
            "label": "Mammoth",
            "translationPt": "Mamute"
          },
          {
            "text": "Badger",
            "emoji": "🦡",
            "label": "Badger",
            "translationPt": "Texugo"
          },
          {
            "text": "Rhinoceros",
            "emoji": "🦏",
            "label": "Rhinoceros",
            "translationPt": "Rinoceronte"
          }
        ],
        "options": [
          "Raccoon",
          "Mammoth",
          "Badger",
          "Rhinoceros"
        ],
        "correctAnswer": "Mammoth",
        "explanation": "Exemplo prático: \"Woolly mammoths lived during the Ice Age.\"",
        "phoneticHint": "/ˈmæm.əθ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Moose",
        "visualEmoji": "🫎",
        "visualOptions": [
          {
            "text": "Moose",
            "emoji": "🫎",
            "label": "Moose",
            "translationPt": "Alce"
          },
          {
            "text": "Otter",
            "emoji": "🦦",
            "label": "Otter",
            "translationPt": "Lontra"
          },
          {
            "text": "Orangutan",
            "emoji": "🦧",
            "label": "Orangutan",
            "translationPt": "Orangotango"
          },
          {
            "text": "Koala",
            "emoji": "🐨",
            "label": "Koala",
            "translationPt": "Coala"
          }
        ],
        "options": [
          "Moose",
          "Otter",
          "Orangutan",
          "Koala"
        ],
        "correctAnswer": "Moose",
        "explanation": "Exemplo prático: \"The giant moose has wide antlers.\"",
        "phoneticHint": "/muːs/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p7",
    "worldId": 0,
    "phaseNumber": 7,
    "title": "Animais & Natureza III: Marinhos, Aves & Répteis",
    "subtitle": "Módulo 3/4 • 30 criaturas do oceano, céu e pântano",
    "pedagogicalObjective": "Dominar o vocabulário de animais aquáticos, aves de rapina, répteis e insetos.",
    "type": "lesson",
    "icon": "dog",
    "cefrLevel": "A1",
    "theorySummary": [
      "Neste terceiro módulo de animais, mergulhamos nos oceanos e voamos pelos céus.",
      "Preste atenção na pronúncia de Shark (/ʃɑːrk/), Whale (/weɪl/) e Eagle (/ˈiː.ɡəl/).",
      "Repare como cada espécie possui traços visuais claros para associação imediata."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p7-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shark",
        "visualEmoji": "🦈",
        "visualOptions": [
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          },
          {
            "text": "Bee",
            "emoji": "🐝",
            "label": "Bee",
            "translationPt": "Abelha"
          },
          {
            "text": "Shark",
            "emoji": "🦈",
            "label": "Shark",
            "translationPt": "Tubarão"
          },
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          }
        ],
        "options": [
          "Eagle",
          "Bee",
          "Shark",
          "Butterfly"
        ],
        "correctAnswer": "Shark",
        "explanation": "Exemplo prático: \"The great white shark swims in the deep ocean.\"",
        "phoneticHint": "/ʃɑːrk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Whale",
        "visualEmoji": "🐋",
        "visualOptions": [
          {
            "text": "Whale",
            "emoji": "🐋",
            "label": "Whale",
            "translationPt": "Baleia"
          },
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          },
          {
            "text": "Tropical Fish",
            "emoji": "🐠",
            "label": "Tropical Fish",
            "translationPt": "Peixe-palhaço / Tropical"
          },
          {
            "text": "Beetle",
            "emoji": "🪲",
            "label": "Beetle",
            "translationPt": "Besouro"
          }
        ],
        "options": [
          "Whale",
          "Blowfish",
          "Tropical Fish",
          "Beetle"
        ],
        "correctAnswer": "Whale",
        "explanation": "Exemplo prático: \"The blue whale is the largest animal on Earth.\"",
        "phoneticHint": "/weɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Dolphin",
        "visualEmoji": "🐬",
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
            "text": "Ant",
            "emoji": "🐜",
            "label": "Ant",
            "translationPt": "Formiga"
          },
          {
            "text": "Dolphin",
            "emoji": "🐬",
            "label": "Dolphin",
            "translationPt": "Golfinho"
          }
        ],
        "options": [
          "Jellyfish",
          "Octopus",
          "Ant",
          "Dolphin"
        ],
        "correctAnswer": "Dolphin",
        "explanation": "Exemplo prático: \"Intelligent dolphins leap out of the waves.\"",
        "phoneticHint": "/ˈdɑːl.fɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Snake",
        "visualEmoji": "🐍",
        "visualOptions": [
          {
            "text": "Snail",
            "emoji": "🐌",
            "label": "Snail",
            "translationPt": "Caracol"
          },
          {
            "text": "Seal",
            "emoji": "🦭",
            "label": "Seal",
            "translationPt": "Foca"
          },
          {
            "text": "Snake",
            "emoji": "🐍",
            "label": "Snake",
            "translationPt": "Cobra / Serpente"
          },
          {
            "text": "Spider",
            "emoji": "🕷️",
            "label": "Spider",
            "translationPt": "Aranha"
          }
        ],
        "options": [
          "Snail",
          "Seal",
          "Snake",
          "Spider"
        ],
        "correctAnswer": "Snake",
        "explanation": "Exemplo prático: \"The green snake slithers through the grass.\"",
        "phoneticHint": "/sneɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Frog",
        "visualEmoji": "🐸",
        "visualOptions": [
          {
            "text": "Crocodile",
            "emoji": "🐊",
            "label": "Crocodile",
            "translationPt": "Crocodilo / Jacaré"
          },
          {
            "text": "Frog",
            "emoji": "🐸",
            "label": "Frog",
            "translationPt": "Sapo / Rã"
          },
          {
            "text": "Flamingo",
            "emoji": "🦩",
            "label": "Flamingo",
            "translationPt": "Flamingo"
          },
          {
            "text": "Crab",
            "emoji": "🦀",
            "label": "Crab",
            "translationPt": "Caranguejo"
          }
        ],
        "options": [
          "Crocodile",
          "Frog",
          "Flamingo",
          "Crab"
        ],
        "correctAnswer": "Frog",
        "explanation": "Exemplo prático: \"The green frog jumps onto a lily pad.\"",
        "phoneticHint": "/frɔːɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Eagle",
        "visualEmoji": "🦅",
        "visualOptions": [
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          },
          {
            "text": "Lizard",
            "emoji": "🦎",
            "label": "Lizard",
            "translationPt": "Lagarto / Lagartixa"
          },
          {
            "text": "Ladybug",
            "emoji": "🐞",
            "label": "Ladybug",
            "translationPt": "Joaninha"
          },
          {
            "text": "Lobster",
            "emoji": "🦞",
            "label": "Lobster",
            "translationPt": "Lagosta"
          }
        ],
        "options": [
          "Eagle",
          "Lizard",
          "Ladybug",
          "Lobster"
        ],
        "correctAnswer": "Eagle",
        "explanation": "Exemplo prático: \"The eagle soars high above the mountains.\"",
        "phoneticHint": "/ˈiː.ɡəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Owl",
        "visualEmoji": "🦉",
        "visualOptions": [
          {
            "text": "Coral",
            "emoji": "🪸",
            "label": "Coral",
            "translationPt": "Coral"
          },
          {
            "text": "Cricket",
            "emoji": "🦗",
            "label": "Cricket",
            "translationPt": "Grilo"
          },
          {
            "text": "Shark",
            "emoji": "🦈",
            "label": "Shark",
            "translationPt": "Tubarão"
          },
          {
            "text": "Owl",
            "emoji": "🦉",
            "label": "Owl",
            "translationPt": "Coruja"
          }
        ],
        "options": [
          "Coral",
          "Cricket",
          "Shark",
          "Owl"
        ],
        "correctAnswer": "Owl",
        "explanation": "Exemplo prático: \"The wise owl hunts quietly at night.\"",
        "phoneticHint": "/aʊl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Penguin",
        "visualEmoji": "🐧",
        "visualOptions": [
          {
            "text": "Snake",
            "emoji": "🐍",
            "label": "Snake",
            "translationPt": "Cobra / Serpente"
          },
          {
            "text": "Squid",
            "emoji": "🦑",
            "label": "Squid",
            "translationPt": "Lula"
          },
          {
            "text": "Penguin",
            "emoji": "🐧",
            "label": "Penguin",
            "translationPt": "Pinguim"
          },
          {
            "text": "Whale",
            "emoji": "🐋",
            "label": "Whale",
            "translationPt": "Baleia"
          }
        ],
        "options": [
          "Snake",
          "Squid",
          "Penguin",
          "Whale"
        ],
        "correctAnswer": "Penguin",
        "explanation": "Exemplo prático: \"Penguins live on the icy coast of Antarctica.\"",
        "phoneticHint": "/ˈpeŋ.ɡwɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Octopus",
        "visualEmoji": "🐙",
        "visualOptions": [
          {
            "text": "Frog",
            "emoji": "🐸",
            "label": "Frog",
            "translationPt": "Sapo / Rã"
          },
          {
            "text": "Octopus",
            "emoji": "🐙",
            "label": "Octopus",
            "translationPt": "Polvo"
          },
          {
            "text": "Mosquito",
            "emoji": "🦟",
            "label": "Mosquito",
            "translationPt": "Mosquito / Pernilongo"
          },
          {
            "text": "Dolphin",
            "emoji": "🐬",
            "label": "Dolphin",
            "translationPt": "Golfinho"
          }
        ],
        "options": [
          "Frog",
          "Octopus",
          "Mosquito",
          "Dolphin"
        ],
        "correctAnswer": "Octopus",
        "explanation": "Exemplo prático: \"An octopus has eight flexible arms.\"",
        "phoneticHint": "/ˈɑːk.tə.pəs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Crab",
        "visualEmoji": "🦀",
        "visualOptions": [
          {
            "text": "Crab",
            "emoji": "🦀",
            "label": "Crab",
            "translationPt": "Caranguejo"
          },
          {
            "text": "Scorpion",
            "emoji": "🦂",
            "label": "Scorpion",
            "translationPt": "Escorpião"
          },
          {
            "text": "Snail",
            "emoji": "🐌",
            "label": "Snail",
            "translationPt": "Caracol"
          },
          {
            "text": "Seal",
            "emoji": "🦭",
            "label": "Seal",
            "translationPt": "Foca"
          }
        ],
        "options": [
          "Crab",
          "Scorpion",
          "Snail",
          "Seal"
        ],
        "correctAnswer": "Crab",
        "explanation": "Exemplo prático: \"The red crab walks sideways on the sand.\"",
        "phoneticHint": "/kræb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Butterfly",
        "visualEmoji": "🦋",
        "visualOptions": [
          {
            "text": "Owl",
            "emoji": "🦉",
            "label": "Owl",
            "translationPt": "Coruja"
          },
          {
            "text": "Lizard",
            "emoji": "🦎",
            "label": "Lizard",
            "translationPt": "Lagarto / Lagartixa"
          },
          {
            "text": "Ladybug",
            "emoji": "🐞",
            "label": "Ladybug",
            "translationPt": "Joaninha"
          },
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          }
        ],
        "options": [
          "Owl",
          "Lizard",
          "Ladybug",
          "Butterfly"
        ],
        "correctAnswer": "Butterfly",
        "explanation": "Exemplo prático: \"A colorful butterfly lands on the flower.\"",
        "phoneticHint": "/ˈbʌt.ər.flaɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bee",
        "visualEmoji": "🐝",
        "visualOptions": [
          {
            "text": "Bee",
            "emoji": "🐝",
            "label": "Bee",
            "translationPt": "Abelha"
          },
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          },
          {
            "text": "Beetle",
            "emoji": "🪲",
            "label": "Beetle",
            "translationPt": "Besouro"
          },
          {
            "text": "Penguin",
            "emoji": "🐧",
            "label": "Penguin",
            "translationPt": "Pinguim"
          }
        ],
        "options": [
          "Bee",
          "Blowfish",
          "Beetle",
          "Penguin"
        ],
        "correctAnswer": "Bee",
        "explanation": "Exemplo prático: \"Busy bees make sweet golden honey.\"",
        "phoneticHint": "/biː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ant",
        "visualEmoji": "🐜",
        "visualOptions": [
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          },
          {
            "text": "Ant",
            "emoji": "🐜",
            "label": "Ant",
            "translationPt": "Formiga"
          },
          {
            "text": "Lobster",
            "emoji": "🦞",
            "label": "Lobster",
            "translationPt": "Lagosta"
          },
          {
            "text": "Octopus",
            "emoji": "🐙",
            "label": "Octopus",
            "translationPt": "Polvo"
          }
        ],
        "options": [
          "Eagle",
          "Ant",
          "Lobster",
          "Octopus"
        ],
        "correctAnswer": "Ant",
        "explanation": "Exemplo prático: \"Tiny ants work together in a colony.\"",
        "phoneticHint": "/ænt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Spider",
        "visualEmoji": "🕷️",
        "visualOptions": [
          {
            "text": "Whale",
            "emoji": "🐋",
            "label": "Whale",
            "translationPt": "Baleia"
          },
          {
            "text": "Dolphin",
            "emoji": "🐬",
            "label": "Dolphin",
            "translationPt": "Golfinho"
          },
          {
            "text": "Spider",
            "emoji": "🕷️",
            "label": "Spider",
            "translationPt": "Aranha"
          },
          {
            "text": "Tropical Fish",
            "emoji": "🐠",
            "label": "Tropical Fish",
            "translationPt": "Peixe-palhaço / Tropical"
          }
        ],
        "options": [
          "Whale",
          "Dolphin",
          "Spider",
          "Tropical Fish"
        ],
        "correctAnswer": "Spider",
        "explanation": "Exemplo prático: \"The spider spins a delicate silk web.\"",
        "phoneticHint": "/ˈspaɪ.dər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Crocodile",
        "visualEmoji": "🐊",
        "visualOptions": [
          {
            "text": "Jellyfish",
            "emoji": "🪼",
            "label": "Jellyfish",
            "translationPt": "Água-viva"
          },
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          },
          {
            "text": "Mosquito",
            "emoji": "🦟",
            "label": "Mosquito",
            "translationPt": "Mosquito / Pernilongo"
          },
          {
            "text": "Crocodile",
            "emoji": "🐊",
            "label": "Crocodile",
            "translationPt": "Crocodilo / Jacaré"
          }
        ],
        "options": [
          "Jellyfish",
          "Butterfly",
          "Mosquito",
          "Crocodile"
        ],
        "correctAnswer": "Crocodile",
        "explanation": "Exemplo prático: \"The crocodile waits near the riverbank.\"",
        "phoneticHint": "/ˈkrɑː.kə.daɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lizard",
        "visualEmoji": "🦎",
        "visualOptions": [
          {
            "text": "Lizard",
            "emoji": "🦎",
            "label": "Lizard",
            "translationPt": "Lagarto / Lagartixa"
          },
          {
            "text": "Coral",
            "emoji": "🪸",
            "label": "Coral",
            "translationPt": "Coral"
          },
          {
            "text": "Crab",
            "emoji": "🦀",
            "label": "Crab",
            "translationPt": "Caranguejo"
          },
          {
            "text": "Frog",
            "emoji": "🐸",
            "label": "Frog",
            "translationPt": "Sapo / Rã"
          }
        ],
        "options": [
          "Lizard",
          "Coral",
          "Crab",
          "Frog"
        ],
        "correctAnswer": "Lizard",
        "explanation": "Exemplo prático: \"A small lizard warms itself on a sunny rock.\"",
        "phoneticHint": "/ˈlɪz.ərd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Snail",
        "visualEmoji": "🐌",
        "visualOptions": [
          {
            "text": "Owl",
            "emoji": "🦉",
            "label": "Owl",
            "translationPt": "Coruja"
          },
          {
            "text": "Shark",
            "emoji": "🦈",
            "label": "Shark",
            "translationPt": "Tubarão"
          },
          {
            "text": "Snail",
            "emoji": "🐌",
            "label": "Snail",
            "translationPt": "Caracol"
          },
          {
            "text": "Cricket",
            "emoji": "🦗",
            "label": "Cricket",
            "translationPt": "Grilo"
          }
        ],
        "options": [
          "Owl",
          "Shark",
          "Snail",
          "Cricket"
        ],
        "correctAnswer": "Snail",
        "explanation": "Exemplo prático: \"The garden snail moves very slowly.\"",
        "phoneticHint": "/sneɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ladybug",
        "visualEmoji": "🐞",
        "visualOptions": [
          {
            "text": "Ladybug",
            "emoji": "🐞",
            "label": "Ladybug",
            "translationPt": "Joaninha"
          },
          {
            "text": "Snake",
            "emoji": "🐍",
            "label": "Snake",
            "translationPt": "Cobra / Serpente"
          },
          {
            "text": "Bee",
            "emoji": "🐝",
            "label": "Bee",
            "translationPt": "Abelha"
          },
          {
            "text": "Spider",
            "emoji": "🕷️",
            "label": "Spider",
            "translationPt": "Aranha"
          }
        ],
        "options": [
          "Ladybug",
          "Snake",
          "Bee",
          "Spider"
        ],
        "correctAnswer": "Ladybug",
        "explanation": "Exemplo prático: \"A red ladybug with black spots.\"",
        "phoneticHint": "/ˈleɪ.di.bʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Flamingo",
        "visualEmoji": "🦩",
        "visualOptions": [
          {
            "text": "Scorpion",
            "emoji": "🦂",
            "label": "Scorpion",
            "translationPt": "Escorpião"
          },
          {
            "text": "Penguin",
            "emoji": "🐧",
            "label": "Penguin",
            "translationPt": "Pinguim"
          },
          {
            "text": "Crocodile",
            "emoji": "🐊",
            "label": "Crocodile",
            "translationPt": "Crocodilo / Jacaré"
          },
          {
            "text": "Flamingo",
            "emoji": "🦩",
            "label": "Flamingo",
            "translationPt": "Flamingo"
          }
        ],
        "options": [
          "Scorpion",
          "Penguin",
          "Crocodile",
          "Flamingo"
        ],
        "correctAnswer": "Flamingo",
        "explanation": "Exemplo prático: \"Pink flamingos stand on one leg in the lagoon.\"",
        "phoneticHint": "/fləˈmɪŋ.ɡoʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Seal",
        "visualEmoji": "🦭",
        "visualOptions": [
          {
            "text": "Seal",
            "emoji": "🦭",
            "label": "Seal",
            "translationPt": "Foca"
          },
          {
            "text": "Whale",
            "emoji": "🐋",
            "label": "Whale",
            "translationPt": "Baleia"
          },
          {
            "text": "Dolphin",
            "emoji": "🐬",
            "label": "Dolphin",
            "translationPt": "Golfinho"
          },
          {
            "text": "Ant",
            "emoji": "🐜",
            "label": "Ant",
            "translationPt": "Formiga"
          }
        ],
        "options": [
          "Seal",
          "Whale",
          "Dolphin",
          "Ant"
        ],
        "correctAnswer": "Seal",
        "explanation": "Exemplo prático: \"The seal claps its flippers on the ice.\"",
        "phoneticHint": "/siːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Jellyfish",
        "visualEmoji": "🪼",
        "visualOptions": [
          {
            "text": "Shark",
            "emoji": "🦈",
            "label": "Shark",
            "translationPt": "Tubarão"
          },
          {
            "text": "Mosquito",
            "emoji": "🦟",
            "label": "Mosquito",
            "translationPt": "Mosquito / Pernilongo"
          },
          {
            "text": "Jellyfish",
            "emoji": "🪼",
            "label": "Jellyfish",
            "translationPt": "Água-viva"
          },
          {
            "text": "Snail",
            "emoji": "🐌",
            "label": "Snail",
            "translationPt": "Caracol"
          }
        ],
        "options": [
          "Shark",
          "Mosquito",
          "Jellyfish",
          "Snail"
        ],
        "correctAnswer": "Jellyfish",
        "explanation": "Exemplo prático: \"Glowing jellyfish float with the ocean current.\"",
        "phoneticHint": "/ˈdʒel.i.fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lobster",
        "visualEmoji": "🦞",
        "visualOptions": [
          {
            "text": "Lobster",
            "emoji": "🦞",
            "label": "Lobster",
            "translationPt": "Lagosta"
          },
          {
            "text": "Crab",
            "emoji": "🦀",
            "label": "Crab",
            "translationPt": "Caranguejo"
          },
          {
            "text": "Frog",
            "emoji": "🐸",
            "label": "Frog",
            "translationPt": "Sapo / Rã"
          },
          {
            "text": "Cricket",
            "emoji": "🦗",
            "label": "Cricket",
            "translationPt": "Grilo"
          }
        ],
        "options": [
          "Lobster",
          "Crab",
          "Frog",
          "Cricket"
        ],
        "correctAnswer": "Lobster",
        "explanation": "Exemplo prático: \"A large red lobster with strong claws.\"",
        "phoneticHint": "/ˈlɑːb.stər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Squid",
        "visualEmoji": "🦑",
        "visualOptions": [
          {
            "text": "Flamingo",
            "emoji": "🦩",
            "label": "Flamingo",
            "translationPt": "Flamingo"
          },
          {
            "text": "Octopus",
            "emoji": "🐙",
            "label": "Octopus",
            "translationPt": "Polvo"
          },
          {
            "text": "Owl",
            "emoji": "🦉",
            "label": "Owl",
            "translationPt": "Coruja"
          },
          {
            "text": "Squid",
            "emoji": "🦑",
            "label": "Squid",
            "translationPt": "Lula"
          }
        ],
        "options": [
          "Flamingo",
          "Octopus",
          "Owl",
          "Squid"
        ],
        "correctAnswer": "Squid",
        "explanation": "Exemplo prático: \"The giant squid lives in deep waters.\"",
        "phoneticHint": "/skwɪd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Blowfish",
        "visualEmoji": "🐡",
        "visualOptions": [
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          },
          {
            "text": "Bee",
            "emoji": "🐝",
            "label": "Bee",
            "translationPt": "Abelha"
          },
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          },
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          }
        ],
        "options": [
          "Butterfly",
          "Bee",
          "Blowfish",
          "Eagle"
        ],
        "correctAnswer": "Blowfish",
        "explanation": "Exemplo prático: \"The blowfish puffs up like a spiky ball.\"",
        "phoneticHint": "/ˈbloʊ.fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tropical Fish",
        "visualEmoji": "🐠",
        "visualOptions": [
          {
            "text": "Ladybug",
            "emoji": "🐞",
            "label": "Ladybug",
            "translationPt": "Joaninha"
          },
          {
            "text": "Tropical Fish",
            "emoji": "🐠",
            "label": "Tropical Fish",
            "translationPt": "Peixe-palhaço / Tropical"
          },
          {
            "text": "Beetle",
            "emoji": "🪲",
            "label": "Beetle",
            "translationPt": "Besouro"
          },
          {
            "text": "Lizard",
            "emoji": "🦎",
            "label": "Lizard",
            "translationPt": "Lagarto / Lagartixa"
          }
        ],
        "options": [
          "Ladybug",
          "Tropical Fish",
          "Beetle",
          "Lizard"
        ],
        "correctAnswer": "Tropical Fish",
        "explanation": "Exemplo prático: \"Bright tropical fish swim around the coral.\"",
        "phoneticHint": "/ˈtrɑː.pɪ.kəl fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Coral",
        "visualEmoji": "🪸",
        "visualOptions": [
          {
            "text": "Coral",
            "emoji": "🪸",
            "label": "Coral",
            "translationPt": "Coral"
          },
          {
            "text": "Jellyfish",
            "emoji": "🪼",
            "label": "Jellyfish",
            "translationPt": "Água-viva"
          },
          {
            "text": "Ant",
            "emoji": "🐜",
            "label": "Ant",
            "translationPt": "Formiga"
          },
          {
            "text": "Lobster",
            "emoji": "🦞",
            "label": "Lobster",
            "translationPt": "Lagosta"
          }
        ],
        "options": [
          "Coral",
          "Jellyfish",
          "Ant",
          "Lobster"
        ],
        "correctAnswer": "Coral",
        "explanation": "Exemplo prático: \"Colorful coral reefs protect marine life.\"",
        "phoneticHint": "/ˈkɔːr.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Scorpion",
        "visualEmoji": "🦂",
        "visualOptions": [
          {
            "text": "Squid",
            "emoji": "🦑",
            "label": "Squid",
            "translationPt": "Lula"
          },
          {
            "text": "Snake",
            "emoji": "🐍",
            "label": "Snake",
            "translationPt": "Cobra / Serpente"
          },
          {
            "text": "Spider",
            "emoji": "🕷️",
            "label": "Spider",
            "translationPt": "Aranha"
          },
          {
            "text": "Scorpion",
            "emoji": "🦂",
            "label": "Scorpion",
            "translationPt": "Escorpião"
          }
        ],
        "options": [
          "Squid",
          "Snake",
          "Spider",
          "Scorpion"
        ],
        "correctAnswer": "Scorpion",
        "explanation": "Exemplo prático: \"A desert scorpion curls its tail.\"",
        "phoneticHint": "/ˈskɔːr.pi.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Crocodile",
            "emoji": "🐊",
            "label": "Crocodile",
            "translationPt": "Crocodilo / Jacaré"
          },
          {
            "text": "Seal",
            "emoji": "🦭",
            "label": "Seal",
            "translationPt": "Foca"
          },
          {
            "text": "Flamingo",
            "emoji": "🦩",
            "label": "Flamingo",
            "translationPt": "Flamingo"
          }
        ],
        "options": [
          "Mosquito",
          "Crocodile",
          "Seal",
          "Flamingo"
        ],
        "correctAnswer": "Mosquito",
        "explanation": "Exemplo prático: \"Use a net to keep mosquitoes away.\"",
        "phoneticHint": "/məˈskiː.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Cricket",
        "visualEmoji": "🦗",
        "visualOptions": [
          {
            "text": "Blowfish",
            "emoji": "🐡",
            "label": "Blowfish",
            "translationPt": "Baiacu"
          },
          {
            "text": "Cricket",
            "emoji": "🦗",
            "label": "Cricket",
            "translationPt": "Grilo"
          },
          {
            "text": "Tropical Fish",
            "emoji": "🐠",
            "label": "Tropical Fish",
            "translationPt": "Peixe-palhaço / Tropical"
          },
          {
            "text": "Penguin",
            "emoji": "🐧",
            "label": "Penguin",
            "translationPt": "Pinguim"
          }
        ],
        "options": [
          "Blowfish",
          "Cricket",
          "Tropical Fish",
          "Penguin"
        ],
        "correctAnswer": "Cricket",
        "explanation": "Exemplo prático: \"Crickets chirp on warm summer nights.\"",
        "phoneticHint": "/ˈkrɪk.ɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Beetle",
        "visualEmoji": "🪲",
        "visualOptions": [
          {
            "text": "Beetle",
            "emoji": "🪲",
            "label": "Beetle",
            "translationPt": "Besouro"
          },
          {
            "text": "Coral",
            "emoji": "🪸",
            "label": "Coral",
            "translationPt": "Coral"
          },
          {
            "text": "Eagle",
            "emoji": "🦅",
            "label": "Eagle",
            "translationPt": "Águia"
          },
          {
            "text": "Butterfly",
            "emoji": "🦋",
            "label": "Butterfly",
            "translationPt": "Borboleta"
          }
        ],
        "options": [
          "Beetle",
          "Coral",
          "Eagle",
          "Butterfly"
        ],
        "correctAnswer": "Beetle",
        "explanation": "Exemplo prático: \"The shiny green beetle crawls on a leaf.\"",
        "phoneticHint": "/ˈbiː.təl/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p8",
    "worldId": 0,
    "phaseNumber": 8,
    "title": "Animais & Natureza IV: Ecossistemas & Clima",
    "subtitle": "Módulo 4/4 • 30 elementos da natureza, plantas e clima",
    "pedagogicalObjective": "Dominar o vocabulário de árvores, flores, fenômenos climáticos e relevo natural.",
    "type": "lesson",
    "icon": "sun",
    "cefrLevel": "A1",
    "theorySummary": [
      "Concluímos a categoria Natureza com 30 elementos essenciais de paisagens, plantas e clima.",
      "Pratique a pronúncia de Mountain (/ˈmaʊn.tən/), Island (/ˈaɪ.lənd/) — onde o S é mudo! — e Rainbow (/ˈreɪn.boʊ/).",
      "Acerte todos para liberar os módulos de Objetos da Casa!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p8-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tree",
        "visualEmoji": "🌳",
        "visualOptions": [
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          }
        ],
        "options": [
          "Rain",
          "Tree",
          "Earth",
          "Beach"
        ],
        "correctAnswer": "Tree",
        "explanation": "Exemplo prático: \"A tall oak tree gives cool shade.\"",
        "phoneticHint": "/triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Tornado",
            "emoji": "🌪️",
            "label": "Tornado",
            "translationPt": "Tornado / Furacão"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          },
          {
            "text": "Rose",
            "emoji": "🌹",
            "label": "Rose",
            "translationPt": "Rosa"
          }
        ],
        "options": [
          "Flower",
          "Tornado",
          "Rainbow",
          "Rose"
        ],
        "correctAnswer": "Flower",
        "explanation": "Exemplo prático: \"The pink flower blooms in spring.\"",
        "phoneticHint": "/ˈflaʊ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Desert",
            "emoji": "🏜️",
            "label": "Desert",
            "translationPt": "Deserto"
          },
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          },
          {
            "text": "Ocean Wave",
            "emoji": "🌊",
            "label": "Ocean Wave",
            "translationPt": "Onda do mar"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          }
        ],
        "options": [
          "Desert",
          "Wind",
          "Ocean Wave",
          "Sun"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The bright sun shines in the sky.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e4",
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
            "text": "Sunflower",
            "emoji": "🌻",
            "label": "Sunflower",
            "translationPt": "Girassol"
          },
          {
            "text": "Palm Tree",
            "emoji": "🌴",
            "label": "Palm Tree",
            "translationPt": "Palmeira / Coqueiro"
          },
          {
            "text": "Volcano",
            "emoji": "🌋",
            "label": "Volcano",
            "translationPt": "Vulcão"
          }
        ],
        "options": [
          "Moon",
          "Sunflower",
          "Palm Tree",
          "Volcano"
        ],
        "correctAnswer": "Moon",
        "explanation": "Exemplo prático: \"The silver moon glows at night.\"",
        "phoneticHint": "/muːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Star",
        "visualEmoji": "⭐",
        "visualOptions": [
          {
            "text": "Island",
            "emoji": "🏝️",
            "label": "Island",
            "translationPt": "Ilha"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Cactus",
            "emoji": "🌵",
            "label": "Cactus",
            "translationPt": "Cacto"
          },
          {
            "text": "Fog",
            "emoji": "🌫️",
            "label": "Fog",
            "translationPt": "Neblina / Nevoeiro"
          }
        ],
        "options": [
          "Island",
          "Star",
          "Cactus",
          "Fog"
        ],
        "correctAnswer": "Star",
        "explanation": "Exemplo prático: \"Thousands of stars twinkle in the dark sky.\"",
        "phoneticHint": "/stɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Cloud",
        "visualEmoji": "☁️",
        "visualOptions": [
          {
            "text": "Leaf",
            "emoji": "🍃",
            "label": "Leaf",
            "translationPt": "Folha"
          },
          {
            "text": "Lightning",
            "emoji": "⚡",
            "label": "Lightning",
            "translationPt": "Raio / Relâmpago"
          },
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          }
        ],
        "options": [
          "Leaf",
          "Lightning",
          "Cloud",
          "Flower"
        ],
        "correctAnswer": "Cloud",
        "explanation": "Exemplo prático: \"White fluffy clouds float overhead.\"",
        "phoneticHint": "/klaʊd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Rain",
        "visualEmoji": "🌧️",
        "visualOptions": [
          {
            "text": "Comet",
            "emoji": "☄️",
            "label": "Comet",
            "translationPt": "Cometa"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Pine Tree",
            "emoji": "🌲",
            "label": "Pine Tree",
            "translationPt": "Pinheiro"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          }
        ],
        "options": [
          "Comet",
          "Sun",
          "Pine Tree",
          "Rain"
        ],
        "correctAnswer": "Rain",
        "explanation": "Exemplo prático: \"Gentle rain waters the garden.\"",
        "phoneticHint": "/reɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Snow",
        "visualEmoji": "❄️",
        "visualOptions": [
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet",
            "translationPt": "Planeta"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          }
        ],
        "options": [
          "Snow",
          "Planet",
          "Moon",
          "Tree"
        ],
        "correctAnswer": "Snow",
        "explanation": "Exemplo prático: \"Soft white snow covers the ground.\"",
        "phoneticHint": "/snoʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fire",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Maple Leaf",
            "emoji": "🍁",
            "label": "Maple Leaf",
            "translationPt": "Folha de outono (Bordo)"
          },
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo"
          },
          {
            "text": "Desert",
            "emoji": "🏜️",
            "label": "Desert",
            "translationPt": "Deserto"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          }
        ],
        "options": [
          "Maple Leaf",
          "Fire",
          "Desert",
          "Star"
        ],
        "correctAnswer": "Fire",
        "explanation": "Exemplo prático: \"The warm campfire crackles at night.\"",
        "phoneticHint": "/ˈfaɪ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Mountain",
        "visualEmoji": "⛰️",
        "visualOptions": [
          {
            "text": "Volcano",
            "emoji": "🌋",
            "label": "Volcano",
            "translationPt": "Vulcão"
          },
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Mountain",
            "emoji": "⛰️",
            "label": "Mountain",
            "translationPt": "Montanha"
          },
          {
            "text": "Sunflower",
            "emoji": "🌻",
            "label": "Sunflower",
            "translationPt": "Girassol"
          }
        ],
        "options": [
          "Volcano",
          "Cloud",
          "Mountain",
          "Sunflower"
        ],
        "correctAnswer": "Mountain",
        "explanation": "Exemplo prático: \"They climbed to the top of the mountain.\"",
        "phoneticHint": "/ˈmaʊn.tən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Beach",
        "visualEmoji": "🏖️",
        "visualOptions": [
          {
            "text": "Island",
            "emoji": "🏝️",
            "label": "Island",
            "translationPt": "Ilha"
          },
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Leaf",
            "emoji": "🍃",
            "label": "Leaf",
            "translationPt": "Folha"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          }
        ],
        "options": [
          "Island",
          "Flower",
          "Leaf",
          "Beach"
        ],
        "correctAnswer": "Beach",
        "explanation": "Exemplo prático: \"We walked barefoot on the sandy beach.\"",
        "phoneticHint": "/biːtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ocean Wave",
        "visualEmoji": "🌊",
        "visualOptions": [
          {
            "text": "Ocean Wave",
            "emoji": "🌊",
            "label": "Ocean Wave",
            "translationPt": "Onda do mar"
          },
          {
            "text": "Fog",
            "emoji": "🌫️",
            "label": "Fog",
            "translationPt": "Neblina / Nevoeiro"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          }
        ],
        "options": [
          "Ocean Wave",
          "Fog",
          "Rain",
          "Snow"
        ],
        "correctAnswer": "Ocean Wave",
        "explanation": "Exemplo prático: \"Surfers ride the high ocean waves.\"",
        "phoneticHint": "/ˈoʊ.ʃən weɪv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Rainbow",
        "visualEmoji": "🌈",
        "visualOptions": [
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo"
          },
          {
            "text": "Cactus",
            "emoji": "🌵",
            "label": "Cactus",
            "translationPt": "Cacto"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          }
        ],
        "options": [
          "Fire",
          "Cactus",
          "Rainbow",
          "Earth"
        ],
        "correctAnswer": "Rainbow",
        "explanation": "Exemplo prático: \"A colorful rainbow appeared after the rain.\"",
        "phoneticHint": "/ˈreɪn.boʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Wind",
        "visualEmoji": "💨",
        "visualOptions": [
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Mountain",
            "emoji": "⛰️",
            "label": "Mountain",
            "translationPt": "Montanha"
          },
          {
            "text": "Tornado",
            "emoji": "🌪️",
            "label": "Tornado",
            "translationPt": "Tornado / Furacão"
          }
        ],
        "options": [
          "Wind",
          "Tree",
          "Mountain",
          "Tornado"
        ],
        "correctAnswer": "Wind",
        "explanation": "Exemplo prático: \"The autumn wind blows the leaves.\"",
        "phoneticHint": "/wɪnd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lightning",
        "visualEmoji": "⚡",
        "visualOptions": [
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet",
            "translationPt": "Planeta"
          },
          {
            "text": "Maple Leaf",
            "emoji": "🍁",
            "label": "Maple Leaf",
            "translationPt": "Folha de outono (Bordo)"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Lightning",
            "emoji": "⚡",
            "label": "Lightning",
            "translationPt": "Raio / Relâmpago"
          }
        ],
        "options": [
          "Planet",
          "Maple Leaf",
          "Moon",
          "Lightning"
        ],
        "correctAnswer": "Lightning",
        "explanation": "Exemplo prático: \"A flash of lightning lit up the storm.\"",
        "phoneticHint": "/ˈlaɪt.nɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Rose",
        "visualEmoji": "🌹",
        "visualOptions": [
          {
            "text": "Comet",
            "emoji": "☄️",
            "label": "Comet",
            "translationPt": "Cometa"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Rose",
            "emoji": "🌹",
            "label": "Rose",
            "translationPt": "Rosa"
          },
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          }
        ],
        "options": [
          "Comet",
          "Sun",
          "Rose",
          "Cloud"
        ],
        "correctAnswer": "Rose",
        "explanation": "Exemplo prático: \"He gave her a red rose.\"",
        "phoneticHint": "/roʊz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Sunflower",
        "visualEmoji": "🌻",
        "visualOptions": [
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo"
          },
          {
            "text": "Sunflower",
            "emoji": "🌻",
            "label": "Sunflower",
            "translationPt": "Girassol"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          },
          {
            "text": "Ocean Wave",
            "emoji": "🌊",
            "label": "Ocean Wave",
            "translationPt": "Onda do mar"
          }
        ],
        "options": [
          "Fire",
          "Sunflower",
          "Rainbow",
          "Ocean Wave"
        ],
        "correctAnswer": "Sunflower",
        "explanation": "Exemplo prático: \"Sunflowers turn toward the sun.\"",
        "phoneticHint": "/ˈsʌnˌflaʊ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Palm Tree",
        "visualEmoji": "🌴",
        "visualOptions": [
          {
            "text": "Palm Tree",
            "emoji": "🌴",
            "label": "Palm Tree",
            "translationPt": "Palmeira / Coqueiro"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          }
        ],
        "options": [
          "Palm Tree",
          "Star",
          "Beach",
          "Snow"
        ],
        "correctAnswer": "Palm Tree",
        "explanation": "Exemplo prático: \"Palm trees sway in the tropical breeze.\"",
        "phoneticHint": "/ˈpɑːm triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pine Tree",
        "visualEmoji": "🌲",
        "visualOptions": [
          {
            "text": "Lightning",
            "emoji": "⚡",
            "label": "Lightning",
            "translationPt": "Raio / Relâmpago"
          },
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          },
          {
            "text": "Mountain",
            "emoji": "⛰️",
            "label": "Mountain",
            "translationPt": "Montanha"
          },
          {
            "text": "Pine Tree",
            "emoji": "🌲",
            "label": "Pine Tree",
            "translationPt": "Pinheiro"
          }
        ],
        "options": [
          "Lightning",
          "Wind",
          "Mountain",
          "Pine Tree"
        ],
        "correctAnswer": "Pine Tree",
        "explanation": "Exemplo prático: \"Evergreen pine trees stay green all year.\"",
        "phoneticHint": "/ˈpaɪn triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Cactus",
        "visualEmoji": "🌵",
        "visualOptions": [
          {
            "text": "Desert",
            "emoji": "🏜️",
            "label": "Desert",
            "translationPt": "Deserto"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
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
            "translationPt": "Rosa"
          }
        ],
        "options": [
          "Desert",
          "Tree",
          "Cactus",
          "Rose"
        ],
        "correctAnswer": "Cactus",
        "explanation": "Exemplo prático: \"A cactus stores water in the dry desert.\"",
        "phoneticHint": "/ˈkæk.təs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Leaf",
        "visualEmoji": "🍃",
        "visualOptions": [
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet",
            "translationPt": "Planeta"
          },
          {
            "text": "Leaf",
            "emoji": "🍃",
            "label": "Leaf",
            "translationPt": "Folha"
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
          }
        ],
        "options": [
          "Planet",
          "Leaf",
          "Sun",
          "Sunflower"
        ],
        "correctAnswer": "Leaf",
        "explanation": "Exemplo prático: \"A green leaf fell from the branch.\"",
        "phoneticHint": "/liːf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Maple Leaf",
        "visualEmoji": "🍁",
        "visualOptions": [
          {
            "text": "Maple Leaf",
            "emoji": "🍁",
            "label": "Maple Leaf",
            "translationPt": "Folha de outono (Bordo)"
          },
          {
            "text": "Palm Tree",
            "emoji": "🌴",
            "label": "Palm Tree",
            "translationPt": "Palmeira / Coqueiro"
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
            "translationPt": "Fogo"
          }
        ],
        "options": [
          "Maple Leaf",
          "Palm Tree",
          "Flower",
          "Fire"
        ],
        "correctAnswer": "Maple Leaf",
        "explanation": "Exemplo prático: \"Red maple leaves fall in autumn.\"",
        "phoneticHint": "/ˈmeɪ.pəl liːf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Island",
        "visualEmoji": "🏝️",
        "visualOptions": [
          {
            "text": "Pine Tree",
            "emoji": "🌲",
            "label": "Pine Tree",
            "translationPt": "Pinheiro"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          },
          {
            "text": "Island",
            "emoji": "🏝️",
            "label": "Island",
            "translationPt": "Ilha"
          }
        ],
        "options": [
          "Pine Tree",
          "Rain",
          "Rainbow",
          "Island"
        ],
        "correctAnswer": "Island",
        "explanation": "Exemplo prático: \"A peaceful tropical island surrounded by sea.\"",
        "phoneticHint": "/ˈaɪ.lənd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Volcano",
        "visualEmoji": "🌋",
        "visualOptions": [
          {
            "text": "Volcano",
            "emoji": "🌋",
            "label": "Volcano",
            "translationPt": "Vulcão"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          },
          {
            "text": "Rose",
            "emoji": "🌹",
            "label": "Rose",
            "translationPt": "Rosa"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          }
        ],
        "options": [
          "Volcano",
          "Beach",
          "Rose",
          "Earth"
        ],
        "correctAnswer": "Volcano",
        "explanation": "Exemplo prático: \"Smoke rises from the active volcano.\"",
        "phoneticHint": "/vɑːlˈkeɪ.noʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Desert",
        "visualEmoji": "🏜️",
        "visualOptions": [
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          },
          {
            "text": "Desert",
            "emoji": "🏜️",
            "label": "Desert",
            "translationPt": "Deserto"
          },
          {
            "text": "Lightning",
            "emoji": "⚡",
            "label": "Lightning",
            "translationPt": "Raio / Relâmpago"
          },
          {
            "text": "Ocean Wave",
            "emoji": "🌊",
            "label": "Ocean Wave",
            "translationPt": "Onda do mar"
          }
        ],
        "options": [
          "Wind",
          "Desert",
          "Lightning",
          "Ocean Wave"
        ],
        "correctAnswer": "Desert",
        "explanation": "Exemplo prático: \"The desert is hot during the day.\"",
        "phoneticHint": "/ˈdez.ərt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Tornado",
        "visualEmoji": "🌪️",
        "visualOptions": [
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Leaf",
            "emoji": "🍃",
            "label": "Leaf",
            "translationPt": "Folha"
          },
          {
            "text": "Tornado",
            "emoji": "🌪️",
            "label": "Tornado",
            "translationPt": "Tornado / Furacão"
          },
          {
            "text": "Cactus",
            "emoji": "🌵",
            "label": "Cactus",
            "translationPt": "Cacto"
          }
        ],
        "options": [
          "Cloud",
          "Leaf",
          "Tornado",
          "Cactus"
        ],
        "correctAnswer": "Tornado",
        "explanation": "Exemplo prático: \"A strong tornado spins across the plain.\"",
        "phoneticHint": "/tɔːrˈneɪ.doʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fog",
        "visualEmoji": "🌫️",
        "visualOptions": [
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          },
          {
            "text": "Palm Tree",
            "emoji": "🌴",
            "label": "Palm Tree",
            "translationPt": "Palmeira / Coqueiro"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Fog",
            "emoji": "🌫️",
            "label": "Fog",
            "translationPt": "Neblina / Nevoeiro"
          }
        ],
        "options": [
          "Snow",
          "Palm Tree",
          "Star",
          "Fog"
        ],
        "correctAnswer": "Fog",
        "explanation": "Exemplo prático: \"Thick morning fog covered the bridge.\"",
        "phoneticHint": "/fɔːɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Comet",
        "visualEmoji": "☄️",
        "visualOptions": [
          {
            "text": "Comet",
            "emoji": "☄️",
            "label": "Comet",
            "translationPt": "Cometa"
          },
          {
            "text": "Pine Tree",
            "emoji": "🌲",
            "label": "Pine Tree",
            "translationPt": "Pinheiro"
          },
          {
            "text": "Volcano",
            "emoji": "🌋",
            "label": "Volcano",
            "translationPt": "Vulcão"
          },
          {
            "text": "Island",
            "emoji": "🏝️",
            "label": "Island",
            "translationPt": "Ilha"
          }
        ],
        "options": [
          "Comet",
          "Pine Tree",
          "Volcano",
          "Island"
        ],
        "correctAnswer": "Comet",
        "explanation": "Exemplo prático: \"A bright comet streaked across space.\"",
        "phoneticHint": "/ˈkɑː.mɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Planet",
        "visualEmoji": "🪐",
        "visualOptions": [
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet",
            "translationPt": "Planeta"
          },
          {
            "text": "Maple Leaf",
            "emoji": "🍁",
            "label": "Maple Leaf",
            "translationPt": "Folha de outono (Bordo)"
          },
          {
            "text": "Mountain",
            "emoji": "⛰️",
            "label": "Mountain",
            "translationPt": "Montanha"
          }
        ],
        "options": [
          "Moon",
          "Planet",
          "Maple Leaf",
          "Mountain"
        ],
        "correctAnswer": "Planet",
        "explanation": "Exemplo prático: \"Saturn is a planet with beautiful rings.\"",
        "phoneticHint": "/ˈplæn.ɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Earth",
        "visualEmoji": "🌍",
        "visualOptions": [
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          },
          {
            "text": "Tornado",
            "emoji": "🌪️",
            "label": "Tornado",
            "translationPt": "Tornado / Furacão"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          }
        ],
        "options": [
          "Beach",
          "Tornado",
          "Earth",
          "Rain"
        ],
        "correctAnswer": "Earth",
        "explanation": "Exemplo prático: \"Earth is our home in the solar system.\"",
        "phoneticHint": "/ɜːrθ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p9",
    "worldId": 0,
    "phaseNumber": 9,
    "title": "Casa & Objetos I: Móveis & Quarto",
    "subtitle": "Módulo 1/4 • 30 móveis e itens de quarto com ilustrações reais",
    "pedagogicalObjective": "Reconhecer móveis e objetos de casa com ilustrações vetoriais fiéis (Mesa, Cadeira, Travesseiro, Cama, Sofá).",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Cadeira (Chair /tʃer/), Mesa (Table /ˈteɪ.bəl/) e Travesseiro (Pillow /ˈpɪl.oʊ/) possuem ilustrações vetoriais dedicadas e pronúncia limpa.",
      "Estude os 30 itens da sala e do quarto do mais comum ao menos comum.",
      "Lembre-se: você só avança ao final quando dominar 100% dos itens!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p9-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Hourglass",
            "emoji": "⏳",
            "label": "Hourglass",
            "translationPt": "Ampulheta"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor"
          },
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Tomada / Plugue"
          }
        ],
        "options": [
          "Hourglass",
          "Bed",
          "Blanket",
          "Electric Plug"
        ],
        "correctAnswer": "Bed",
        "explanation": "Exemplo prático: \"I sleep in a comfortable wooden bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Chair",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira / Cesto de lixo"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          }
        ],
        "options": [
          "Key",
          "Trash Can",
          "Chair",
          "Bookshelf"
        ],
        "correctAnswer": "Chair",
        "explanation": "Exemplo prático: \"Please sit down on this wooden chair.\"",
        "phoneticHint": "/tʃer/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Table",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Bell",
            "emoji": "🔔",
            "label": "Bell",
            "translationPt": "Campainha / Sino"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Bell",
          "Battery",
          "Wardrobe",
          "Table"
        ],
        "correctAnswer": "Table",
        "explanation": "Exemplo prático: \"Dinner is ready on the dining table.\"",
        "phoneticHint": "/ˈteɪ.bəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Quadro / Porta-retrato"
          }
        ],
        "options": [
          "Door",
          "Mirror",
          "Plant Pot",
          "Picture Frame"
        ],
        "correctAnswer": "Door",
        "explanation": "Exemplo prático: \"Please close the front door.\"",
        "phoneticHint": "/dɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Window",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio / Despertador"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Fire Extinguisher",
            "emoji": "🧯",
            "label": "Fire Extinguisher",
            "translationPt": "Extintor de incêndio"
          }
        ],
        "options": [
          "Flashlight",
          "Clock",
          "Window",
          "Fire Extinguisher"
        ],
        "correctAnswer": "Window",
        "explanation": "Exemplo prático: \"Open the window to let the sunlight in.\"",
        "phoneticHint": "/ˈwɪn.doʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Sofa",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado / Fechadura"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil"
          }
        ],
        "options": [
          "Lock",
          "Rug",
          "Sofa",
          "Ladder"
        ],
        "correctAnswer": "Sofa",
        "explanation": "Exemplo prático: \"The family sits together on the living room sofa.\"",
        "phoneticHint": "/ˈsoʊ.fə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pillow",
        "visualEmoji": "⬜",
        "visualOptions": [
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesto / Cesta"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          }
        ],
        "options": [
          "Box",
          "Basket",
          "Bed",
          "Pillow"
        ],
        "correctAnswer": "Pillow",
        "explanation": "Exemplo prático: \"I rest my head on a soft white pillow.\"",
        "phoneticHint": "/ˈpɪl.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Blanket",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor"
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
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Blanket",
          "Curtain",
          "Chair",
          "Table"
        ],
        "correctAnswer": "Blanket",
        "explanation": "Exemplo prático: \"A warm wool blanket for cold nights.\"",
        "phoneticHint": "/ˈblæŋ.kɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Lâmpada / Abajur"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          }
        ],
        "options": [
          "Door",
          "Candle",
          "Lamp",
          "Window"
        ],
        "correctAnswer": "Lamp",
        "explanation": "Exemplo prático: \"Turn on the reading lamp by the desk.\"",
        "phoneticHint": "/læmp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
        "visualOptions": [
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Quadro / Porta-retrato"
          },
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
          }
        ],
        "options": [
          "Mirror",
          "Picture Frame",
          "Sofa",
          "Plant Pot"
        ],
        "correctAnswer": "Mirror",
        "explanation": "Exemplo prático: \"He looked at himself in the bedroom mirror.\"",
        "phoneticHint": "/ˈmɪr.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Clock",
        "visualEmoji": "⏰",
        "visualOptions": [
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado / Fechadura"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio / Despertador"
          }
        ],
        "options": [
          "Pillow",
          "Ladder",
          "Lock",
          "Clock"
        ],
        "correctAnswer": "Clock",
        "explanation": "Exemplo prático: \"The alarm clock rings at seven in the morning.\"",
        "phoneticHint": "/klɑːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Key",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor"
          },
          {
            "text": "Bell",
            "emoji": "🔔",
            "label": "Bell",
            "translationPt": "Campainha / Sino"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
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
          "Bell",
          "Key",
          "Bed"
        ],
        "correctAnswer": "Key",
        "explanation": "Exemplo prático: \"Keep your house key in your pocket.\"",
        "phoneticHint": "/kiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wardrobe",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Tomada / Plugue"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Lâmpada / Abajur"
          },
          {
            "text": "Hourglass",
            "emoji": "⏳",
            "label": "Hourglass",
            "translationPt": "Ampulheta"
          }
        ],
        "options": [
          "Electric Plug",
          "Wardrobe",
          "Lamp",
          "Hourglass"
        ],
        "correctAnswer": "Wardrobe",
        "explanation": "Exemplo prático: \"Hang your coats inside the wooden wardrobe.\"",
        "phoneticHint": "/ˈwɔːr.droʊb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Bookshelf",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Bookshelf",
          "Door",
          "Window",
          "Table"
        ],
        "correctAnswer": "Bookshelf",
        "explanation": "Exemplo prático: \"The bookshelf is organized by topic.\"",
        "phoneticHint": "/ˈbʊk.ʃelf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e15",
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
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira / Cesto de lixo"
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
          "Mirror",
          "Trash Can",
          "Rug"
        ],
        "correctAnswer": "Rug",
        "explanation": "Exemplo prático: \"A soft woven rug on the living room floor.\"",
        "phoneticHint": "/rʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e16",
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
            "text": "Fire Extinguisher",
            "emoji": "🧯",
            "label": "Fire Extinguisher",
            "translationPt": "Extintor de incêndio"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          }
        ],
        "options": [
          "Curtain",
          "Fire Extinguisher",
          "Chair",
          "Flashlight"
        ],
        "correctAnswer": "Curtain",
        "explanation": "Exemplo prático: \"Draw the red curtains to block the sun.\"",
        "phoneticHint": "/ˈkɜːr.tən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Picture Frame",
        "visualEmoji": "🖼️",
        "visualOptions": [
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Lâmpada / Abajur"
          },
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Quadro / Porta-retrato"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá"
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
          "Picture Frame",
          "Sofa",
          "Clock"
        ],
        "correctAnswer": "Picture Frame",
        "explanation": "Exemplo prático: \"A colorful painting hangs in a picture frame.\"",
        "phoneticHint": "/ˈpɪk.tʃər freɪm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Candle",
        "visualEmoji": "🕯️",
        "visualOptions": [
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa"
          }
        ],
        "options": [
          "Candle",
          "Bookshelf",
          "Battery",
          "Box"
        ],
        "correctAnswer": "Candle",
        "explanation": "Exemplo prático: \"A scented candle burns on the table.\"",
        "phoneticHint": "/ˈkæn.dəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Plant Pot",
        "visualEmoji": "🪴",
        "visualOptions": [
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesto / Cesta"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          }
        ],
        "options": [
          "Key",
          "Basket",
          "Rug",
          "Plant Pot"
        ],
        "correctAnswer": "Plant Pot",
        "explanation": "Exemplo prático: \"Water the green fern in the plant pot.\"",
        "phoneticHint": "/ˈplænt pɑːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Lock",
        "visualEmoji": "🔒",
        "visualOptions": [
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado / Fechadura"
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          }
        ],
        "options": [
          "Lock",
          "Curtain",
          "Door",
          "Wardrobe"
        ],
        "correctAnswer": "Lock",
        "explanation": "Exemplo prático: \"Make sure the gate lock is closed.\"",
        "phoneticHint": "/lɑːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bell",
        "visualEmoji": "🔔",
        "visualOptions": [
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá"
          },
          {
            "text": "Bell",
            "emoji": "🔔",
            "label": "Bell",
            "translationPt": "Campainha / Sino"
          },
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Quadro / Porta-retrato"
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
          "Bell",
          "Picture Frame",
          "Pillow"
        ],
        "correctAnswer": "Bell",
        "explanation": "Exemplo prático: \"Ring the front door bell.\"",
        "phoneticHint": "/bel/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Flashlight",
        "visualEmoji": "🔦",
        "visualOptions": [
          {
            "text": "Fire Extinguisher",
            "emoji": "🧯",
            "label": "Fire Extinguisher",
            "translationPt": "Extintor de incêndio"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela"
          },
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          }
        ],
        "options": [
          "Fire Extinguisher",
          "Candle",
          "Flashlight",
          "Chair"
        ],
        "correctAnswer": "Flashlight",
        "explanation": "Exemplo prático: \"Use a flashlight when the power goes out.\"",
        "phoneticHint": "/ˈflæʃ.laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Battery",
        "visualEmoji": "🔋",
        "visualOptions": [
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Lâmpada / Abajur"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          }
        ],
        "options": [
          "Lamp",
          "Ladder",
          "Rug",
          "Battery"
        ],
        "correctAnswer": "Battery",
        "explanation": "Exemplo prático: \"The remote control needs a new battery.\"",
        "phoneticHint": "/ˈbæt.ər.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Electric Plug",
        "visualEmoji": "🔌",
        "visualOptions": [
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Tomada / Plugue"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Hourglass",
            "emoji": "⏳",
            "label": "Hourglass",
            "translationPt": "Ampulheta"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          }
        ],
        "options": [
          "Electric Plug",
          "Bed",
          "Hourglass",
          "Key"
        ],
        "correctAnswer": "Electric Plug",
        "explanation": "Exemplo prático: \"Insert the electric plug into the wall socket.\"",
        "phoneticHint": "/ɪˈlek.trɪk plʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Trash Can",
        "visualEmoji": "🗑️",
        "visualOptions": [
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira / Cesto de lixo"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          }
        ],
        "options": [
          "Window",
          "Table",
          "Trash Can",
          "Wardrobe"
        ],
        "correctAnswer": "Trash Can",
        "explanation": "Exemplo prático: \"Throw the paper into the trash can.\"",
        "phoneticHint": "/ˈtræʃ kæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Box",
        "visualEmoji": "📦",
        "visualOptions": [
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor"
          },
          {
            "text": "Bell",
            "emoji": "🔔",
            "label": "Bell",
            "translationPt": "Campainha / Sino"
          }
        ],
        "options": [
          "Box",
          "Bookshelf",
          "Blanket",
          "Bell"
        ],
        "correctAnswer": "Box",
        "explanation": "Exemplo prático: \"Pack the old toys into a cardboard box.\"",
        "phoneticHint": "/bɑːks/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Basket",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesto / Cesta"
          }
        ],
        "options": [
          "Plant Pot",
          "Battery",
          "Mirror",
          "Basket"
        ],
        "correctAnswer": "Basket",
        "explanation": "Exemplo prático: \"Put the clean laundry in the wicker basket.\"",
        "phoneticHint": "/ˈbæs.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ladder",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio / Despertador"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado / Fechadura"
          }
        ],
        "options": [
          "Flashlight",
          "Clock",
          "Ladder",
          "Lock"
        ],
        "correctAnswer": "Ladder",
        "explanation": "Exemplo prático: \"Climb the ladder carefully to reach the roof.\"",
        "phoneticHint": "/ˈlæd.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Fire Extinguisher",
        "visualEmoji": "🧯",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira / Cesto de lixo"
          },
          {
            "text": "Fire Extinguisher",
            "emoji": "🧯",
            "label": "Fire Extinguisher",
            "translationPt": "Extintor de incêndio"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela"
          }
        ],
        "options": [
          "Curtain",
          "Trash Can",
          "Fire Extinguisher",
          "Candle"
        ],
        "correctAnswer": "Fire Extinguisher",
        "explanation": "Exemplo prático: \"A red fire extinguisher hangs in the hallway.\"",
        "phoneticHint": "/ˈfaɪ.ər ɪkˌstɪŋ.ɡwɪ.ʃər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hourglass",
        "visualEmoji": "⏳",
        "visualOptions": [
          {
            "text": "Hourglass",
            "emoji": "⏳",
            "label": "Hourglass",
            "translationPt": "Ampulheta"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa"
          },
          {
            "text": "Electric Plug",
            "emoji": "🔌",
            "label": "Electric Plug",
            "translationPt": "Tomada / Plugue"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          }
        ],
        "options": [
          "Hourglass",
          "Box",
          "Electric Plug",
          "Key"
        ],
        "correctAnswer": "Hourglass",
        "explanation": "Exemplo prático: \"Sand flows slowly through the glass hourglass.\"",
        "phoneticHint": "/ˈaʊr.ɡlæs/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p10",
    "worldId": 0,
    "phaseNumber": 10,
    "title": "Casa & Objetos II: Cozinha, Louças & Eletros",
    "subtitle": "Módulo 2/4 • 30 utensílios e eletrodomésticos do dia a dia",
    "pedagogicalObjective": "Dominar o vocabulário de utensílios de mesa, panelas e eletrodomésticos de cozinha.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "A cozinha é um dos ambientes mais ricos em vocabulário prático.",
      "Geladeira (Fridge /frɪdʒ/), Fogão (Stove /stoʊv/) e Micro-ondas (Microwave /ˈmaɪ.krə.weɪv/) possuem ilustrações exclusivas.",
      "Pratique a pronúncia de Knife (/naɪf/) — onde a letra K inicial é muda!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p10-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Plate",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa"
          }
        ],
        "options": [
          "Bowl",
          "Broom",
          "Plate",
          "Bottle"
        ],
        "correctAnswer": "Plate",
        "explanation": "Exemplo prático: \"Put the warm food on a clean plate.\"",
        "phoneticHint": "/pleɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde"
          },
          {
            "text": "Tin Can",
            "emoji": "🥫",
            "label": "Tin Can",
            "translationPt": "Lata de conserva"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira"
          }
        ],
        "options": [
          "Cup",
          "Bucket",
          "Tin Can",
          "Fridge"
        ],
        "correctAnswer": "Cup",
        "explanation": "Exemplo prático: \"A porcelain cup of hot coffee.\"",
        "phoneticHint": "/kʌp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e3",
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
            "text": "Amphora",
            "emoji": "🏺",
            "label": "Amphora",
            "translationPt": "Vasija / Ânfora de cerâmica"
          },
          {
            "text": "Drinking Straw",
            "emoji": "🥤",
            "label": "Drinking Straw",
            "translationPt": "Canudo"
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
          "Amphora",
          "Drinking Straw",
          "Glass"
        ],
        "correctAnswer": "Glass",
        "explanation": "Exemplo prático: \"Pour cold water into the tall glass.\"",
        "phoneticHint": "/ɡlæs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fork",
        "visualEmoji": "🍴",
        "visualOptions": [
          {
            "text": "Spout Kettle",
            "emoji": "🫖",
            "label": "Spout Kettle",
            "translationPt": "Chaleira"
          },
          {
            "text": "Scale",
            "emoji": "⚖️",
            "label": "Scale",
            "translationPt": "Balança"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          }
        ],
        "options": [
          "Spout Kettle",
          "Scale",
          "Fork",
          "Salt Shaker"
        ],
        "correctAnswer": "Fork",
        "explanation": "Exemplo prático: \"Use a fork to eat your pasta.\"",
        "phoneticHint": "/fɔːrk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Knife",
        "visualEmoji": "🔪",
        "visualOptions": [
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira"
          },
          {
            "text": "Funnel",
            "emoji": "🔻",
            "label": "Funnel",
            "translationPt": "Funil"
          }
        ],
        "options": [
          "Cooking Pot",
          "Knife",
          "Frying Pan",
          "Funnel"
        ],
        "correctAnswer": "Knife",
        "explanation": "Exemplo prático: \"The chef uses a sharp kitchen knife.\"",
        "phoneticHint": "/naɪf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Spoon",
        "visualEmoji": "🥄",
        "visualOptions": [
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Chopsticks",
            "emoji": "🥢",
            "label": "Chopsticks",
            "translationPt": "Hashi (Palitinhos)"
          },
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Cooler",
            "emoji": "🧊",
            "label": "Cooler",
            "translationPt": "Caixa térmica"
          }
        ],
        "options": [
          "Spoon",
          "Chopsticks",
          "Cup",
          "Cooler"
        ],
        "correctAnswer": "Spoon",
        "explanation": "Exemplo prático: \"Stir the soup with a silver spoon.\"",
        "phoneticHint": "/spuːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fridge",
        "visualEmoji": "🧊",
        "visualOptions": [
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de pia"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira"
          }
        ],
        "options": [
          "Cutting Board",
          "Plate",
          "Sponge",
          "Fridge"
        ],
        "correctAnswer": "Fridge",
        "explanation": "Exemplo prático: \"Keep the milk cold inside the fridge.\"",
        "phoneticHint": "/frɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Stove",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Plunger",
            "emoji": "🪠",
            "label": "Plunger",
            "translationPt": "Desentupidor"
          },
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
            "translationPt": "Máquina de lavar"
          }
        ],
        "options": [
          "Fork",
          "Plunger",
          "Stove",
          "Washing Machine"
        ],
        "correctAnswer": "Stove",
        "explanation": "Exemplo prático: \"Boil the water on the kitchen stove.\"",
        "phoneticHint": "/stoʊv/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Microwave",
        "visualEmoji": "⏲️",
        "visualOptions": [
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          },
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Micro-ondas"
          },
          {
            "text": "Mousetrap",
            "emoji": "🪤",
            "label": "Mousetrap",
            "translationPt": "Ratoeira"
          },
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          }
        ],
        "options": [
          "Knife",
          "Microwave",
          "Mousetrap",
          "Glass"
        ],
        "correctAnswer": "Microwave",
        "explanation": "Exemplo prático: \"Heat the lunch for one minute in the microwave.\"",
        "phoneticHint": "/ˈmaɪ.krə.weɪv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Frying Pan",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Spout Kettle",
            "emoji": "🫖",
            "label": "Spout Kettle",
            "translationPt": "Chaleira"
          }
        ],
        "options": [
          "Frying Pan",
          "Spoon",
          "Salt Shaker",
          "Spout Kettle"
        ],
        "correctAnswer": "Frying Pan",
        "explanation": "Exemplo prático: \"Fry the eggs in a non-stick frying pan.\"",
        "phoneticHint": "/ˈfraɪ.ɪŋ pæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Cooking Pot",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira"
          },
          {
            "text": "Funnel",
            "emoji": "🔻",
            "label": "Funnel",
            "translationPt": "Funil"
          },
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela"
          }
        ],
        "options": [
          "Fridge",
          "Funnel",
          "Cup",
          "Cooking Pot"
        ],
        "correctAnswer": "Cooking Pot",
        "explanation": "Exemplo prático: \"Simmer the beans in a large cooking pot.\"",
        "phoneticHint": "/ˈkʊk.ɪŋ pɑːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bowl",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          }
        ],
        "options": [
          "Bowl",
          "Broom",
          "Bucket",
          "Stove"
        ],
        "correctAnswer": "Bowl",
        "explanation": "Exemplo prático: \"A ceramic bowl of morning cereal.\"",
        "phoneticHint": "/boʊl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bottle",
        "visualEmoji": "🍾",
        "visualOptions": [
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Micro-ondas"
          },
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
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Microwave",
          "Bottle",
          "Fork",
          "Knife"
        ],
        "correctAnswer": "Bottle",
        "explanation": "Exemplo prático: \"A glass bottle of sparkling water.\"",
        "phoneticHint": "/ˈbɑː.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Washing Machine",
        "visualEmoji": "🫧",
        "visualOptions": [
          {
            "text": "Amphora",
            "emoji": "🏺",
            "label": "Amphora",
            "translationPt": "Vasija / Ânfora de cerâmica"
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
            "translationPt": "Máquina de lavar"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira"
          }
        ],
        "options": [
          "Amphora",
          "Drinking Straw",
          "Washing Machine",
          "Frying Pan"
        ],
        "correctAnswer": "Washing Machine",
        "explanation": "Exemplo prático: \"Put the dirty clothes in the washing machine.\"",
        "phoneticHint": "/ˈwɑː.ʃɪŋ məˌʃiːn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chopsticks",
        "visualEmoji": "🥢",
        "visualOptions": [
          {
            "text": "Plunger",
            "emoji": "🪠",
            "label": "Plunger",
            "translationPt": "Desentupidor"
          },
          {
            "text": "Mousetrap",
            "emoji": "🪤",
            "label": "Mousetrap",
            "translationPt": "Ratoeira"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Chopsticks",
            "emoji": "🥢",
            "label": "Chopsticks",
            "translationPt": "Hashi (Palitinhos)"
          }
        ],
        "options": [
          "Plunger",
          "Mousetrap",
          "Plate",
          "Chopsticks"
        ],
        "correctAnswer": "Chopsticks",
        "explanation": "Exemplo prático: \"They eat sushi using wooden chopsticks.\"",
        "phoneticHint": "/ˈtʃɑːp.stɪks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Salt Shaker",
        "visualEmoji": "🧂",
        "visualOptions": [
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
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
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela"
          }
        ],
        "options": [
          "Salt Shaker",
          "Spoon",
          "Cutting Board",
          "Cooking Pot"
        ],
        "correctAnswer": "Salt Shaker",
        "explanation": "Exemplo prático: \"Pass the salt shaker across the table.\"",
        "phoneticHint": "/ˈsɔːlt ˌʃeɪ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Jar",
        "visualEmoji": "🫙",
        "visualOptions": [
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          },
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de pia"
          },
          {
            "text": "Scale",
            "emoji": "⚖️",
            "label": "Scale",
            "translationPt": "Balança"
          }
        ],
        "options": [
          "Stove",
          "Jar",
          "Sponge",
          "Scale"
        ],
        "correctAnswer": "Jar",
        "explanation": "Exemplo prático: \"Store homemade jam in a glass jar.\"",
        "phoneticHint": "/dʒɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tin Can",
        "visualEmoji": "🥫",
        "visualOptions": [
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
          },
          {
            "text": "Tin Can",
            "emoji": "🥫",
            "label": "Tin Can",
            "translationPt": "Lata de conserva"
          },
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Micro-ondas"
          }
        ],
        "options": [
          "Bottle",
          "Bowl",
          "Tin Can",
          "Microwave"
        ],
        "correctAnswer": "Tin Can",
        "explanation": "Exemplo prático: \"Open a tin can of tomato sauce.\"",
        "phoneticHint": "/ˈtɪn kæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cooler",
        "visualEmoji": "🧊",
        "visualOptions": [
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar"
          },
          {
            "text": "Chopsticks",
            "emoji": "🥢",
            "label": "Chopsticks",
            "translationPt": "Hashi (Palitinhos)"
          },
          {
            "text": "Cooler",
            "emoji": "🧊",
            "label": "Cooler",
            "translationPt": "Caixa térmica"
          }
        ],
        "options": [
          "Glass",
          "Washing Machine",
          "Chopsticks",
          "Cooler"
        ],
        "correctAnswer": "Cooler",
        "explanation": "Exemplo prático: \"Pack cold drinks in the beach cooler.\"",
        "phoneticHint": "/ˈkuː.lər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Drinking Straw",
        "visualEmoji": "🥤",
        "visualOptions": [
          {
            "text": "Drinking Straw",
            "emoji": "🥤",
            "label": "Drinking Straw",
            "translationPt": "Canudo"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          },
          {
            "text": "Amphora",
            "emoji": "🏺",
            "label": "Amphora",
            "translationPt": "Vasija / Ânfora de cerâmica"
          }
        ],
        "options": [
          "Drinking Straw",
          "Broom",
          "Knife",
          "Amphora"
        ],
        "correctAnswer": "Drinking Straw",
        "explanation": "Exemplo prático: \"Sip the juice through a paper drinking straw.\"",
        "phoneticHint": "/ˈdrɪŋ.kɪŋ strɔː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Spout Kettle",
        "visualEmoji": "🫖",
        "visualOptions": [
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          },
          {
            "text": "Spout Kettle",
            "emoji": "🫖",
            "label": "Spout Kettle",
            "translationPt": "Chaleira"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          }
        ],
        "options": [
          "Jar",
          "Stove",
          "Spout Kettle",
          "Spoon"
        ],
        "correctAnswer": "Spout Kettle",
        "explanation": "Exemplo prático: \"The kettle whistles when the water boils.\"",
        "phoneticHint": "/ˈspaʊt ˈket.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cutting Board",
        "visualEmoji": "🪵",
        "visualOptions": [
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Tin Can",
            "emoji": "🥫",
            "label": "Tin Can",
            "translationPt": "Lata de conserva"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira"
          }
        ],
        "options": [
          "Cutting Board",
          "Fork",
          "Tin Can",
          "Fridge"
        ],
        "correctAnswer": "Cutting Board",
        "explanation": "Exemplo prático: \"Chop vegetables on a wooden cutting board.\"",
        "phoneticHint": "/ˈkʌt.ɪŋ bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Scale",
        "visualEmoji": "⚖️",
        "visualOptions": [
          {
            "text": "Cooler",
            "emoji": "🧊",
            "label": "Cooler",
            "translationPt": "Caixa térmica"
          },
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira"
          },
          {
            "text": "Scale",
            "emoji": "⚖️",
            "label": "Scale",
            "translationPt": "Balança"
          }
        ],
        "options": [
          "Cooler",
          "Cup",
          "Frying Pan",
          "Scale"
        ],
        "correctAnswer": "Scale",
        "explanation": "Exemplo prático: \"Weigh the flour on the kitchen scale.\"",
        "phoneticHint": "/skeɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Funnel",
        "visualEmoji": "🔻",
        "visualOptions": [
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela"
          },
          {
            "text": "Funnel",
            "emoji": "🔻",
            "label": "Funnel",
            "translationPt": "Funil"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          }
        ],
        "options": [
          "Bottle",
          "Cooking Pot",
          "Funnel",
          "Bowl"
        ],
        "correctAnswer": "Funnel",
        "explanation": "Exemplo prático: \"Use a funnel to pour oil into the bottle.\"",
        "phoneticHint": "/ˈfʌn.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sponge",
        "visualEmoji": "🧽",
        "visualOptions": [
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de pia"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar"
          },
          {
            "text": "Chopsticks",
            "emoji": "🥢",
            "label": "Chopsticks",
            "translationPt": "Hashi (Palitinhos)"
          }
        ],
        "options": [
          "Salt Shaker",
          "Sponge",
          "Washing Machine",
          "Chopsticks"
        ],
        "correctAnswer": "Sponge",
        "explanation": "Exemplo prático: \"Wash the dishes with soap and a yellow sponge.\"",
        "phoneticHint": "/spʌndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Broom",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro"
          },
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
          }
        ],
        "options": [
          "Broom",
          "Jar",
          "Glass",
          "Drinking Straw"
        ],
        "correctAnswer": "Broom",
        "explanation": "Exemplo prático: \"Sweep the kitchen floor with a broom.\"",
        "phoneticHint": "/bruːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bucket",
        "visualEmoji": "🪣",
        "visualOptions": [
          {
            "text": "Spout Kettle",
            "emoji": "🫖",
            "label": "Spout Kettle",
            "translationPt": "Chaleira"
          },
          {
            "text": "Scale",
            "emoji": "⚖️",
            "label": "Scale",
            "translationPt": "Balança"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde"
          }
        ],
        "options": [
          "Spout Kettle",
          "Scale",
          "Plate",
          "Bucket"
        ],
        "correctAnswer": "Bucket",
        "explanation": "Exemplo prático: \"Fill the plastic bucket with warm water.\"",
        "phoneticHint": "/ˈbʌk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Plunger",
        "visualEmoji": "🪠",
        "visualOptions": [
          {
            "text": "Cooler",
            "emoji": "🧊",
            "label": "Cooler",
            "translationPt": "Caixa térmica"
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          },
          {
            "text": "Plunger",
            "emoji": "🪠",
            "label": "Plunger",
            "translationPt": "Desentupidor"
          },
          {
            "text": "Funnel",
            "emoji": "🔻",
            "label": "Funnel",
            "translationPt": "Funil"
          }
        ],
        "options": [
          "Cooler",
          "Cutting Board",
          "Plunger",
          "Funnel"
        ],
        "correctAnswer": "Plunger",
        "explanation": "Exemplo prático: \"Use a rubber plunger to clear the drain.\"",
        "phoneticHint": "/ˈplʌn.dʒər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Mousetrap",
        "visualEmoji": "🪤",
        "visualOptions": [
          {
            "text": "Tin Can",
            "emoji": "🥫",
            "label": "Tin Can",
            "translationPt": "Lata de conserva"
          },
          {
            "text": "Mousetrap",
            "emoji": "🪤",
            "label": "Mousetrap",
            "translationPt": "Ratoeira"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de pia"
          },
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Micro-ondas"
          }
        ],
        "options": [
          "Tin Can",
          "Mousetrap",
          "Sponge",
          "Microwave"
        ],
        "correctAnswer": "Mousetrap",
        "explanation": "Exemplo prático: \"Set a mousetrap in the old barn.\"",
        "phoneticHint": "/ˈmaʊs.træp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Amphora",
        "visualEmoji": "🏺",
        "visualOptions": [
          {
            "text": "Amphora",
            "emoji": "🏺",
            "label": "Amphora",
            "translationPt": "Vasija / Ânfora de cerâmica"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
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
          "Amphora",
          "Knife",
          "Bowl",
          "Bottle"
        ],
        "correctAnswer": "Amphora",
        "explanation": "Exemplo prático: \"Ancient olive oil was kept in a clay amphora.\"",
        "phoneticHint": "/ˈæm.fər.ə/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p11",
    "worldId": 0,
    "phaseNumber": 11,
    "title": "Casa & Objetos III: Higiene, Saúde & Estudos",
    "subtitle": "Módulo 3/4 • 30 objetos de higiene pessoal e material escolar",
    "pedagogicalObjective": "Reconhecer itens de banheiro, cuidados pessoais, papelaria e material de escritório.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Neste módulo reunimos os 30 objetos mais importantes de higiene, saúde e estudos.",
      "Observe palavras compostas muito úteis como Toothbrush (/ˈtuːθ.brʌʃ/) e Notebook (/ˈnoʊt.bʊk/).",
      "Ouça cada palavra ao abrir o exercício e use o botão 0.65x se quiser ouvir sílaba por sílaba."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p11-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Book",
        "visualEmoji": "📘",
        "visualOptions": [
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo / Band-aid"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope / Carta"
          },
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira"
          }
        ],
        "options": [
          "Bandage",
          "Book",
          "Envelope",
          "Bathtub"
        ],
        "correctAnswer": "Book",
        "explanation": "Exemplo prático: \"Read a chapter of your favorite book every night.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
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
          "Pen",
          "Toothbrush",
          "Toilet",
          "Toilet Paper"
        ],
        "correctAnswer": "Pen",
        "explanation": "Exemplo prático: \"Sign the document with a blue ink pen.\"",
        "phoneticHint": "/pen/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pencil",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "Newspaper",
            "emoji": "📰",
            "label": "Newspaper",
            "translationPt": "Jornal"
          },
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Lâmina de barbear"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          }
        ],
        "options": [
          "Newspaper",
          "Razor",
          "Ruler",
          "Pencil"
        ],
        "correctAnswer": "Pencil",
        "explanation": "Exemplo prático: \"Draw a sketch with a wooden pencil.\"",
        "phoneticHint": "/ˈpen.səl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Notebook",
        "visualEmoji": "📓",
        "visualOptions": [
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno"
          },
          {
            "text": "Syringe",
            "emoji": "💉",
            "label": "Syringe",
            "translationPt": "Seringa / Vacina"
          },
          {
            "text": "Stethoscope",
            "emoji": "🩺",
            "label": "Stethoscope",
            "translationPt": "Estetoscópio"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          }
        ],
        "options": [
          "Notebook",
          "Syringe",
          "Stethoscope",
          "Shower"
        ],
        "correctAnswer": "Notebook",
        "explanation": "Exemplo prático: \"Write the new vocabulary in your notebook.\"",
        "phoneticHint": "/ˈnoʊt.bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Backpack",
        "visualEmoji": "🎒",
        "visualOptions": [
          {
            "text": "Clipboard",
            "emoji": "📋",
            "label": "Clipboard",
            "translationPt": "Prancheta"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          },
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de arquivos"
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário"
          }
        ],
        "options": [
          "Clipboard",
          "Backpack",
          "Folder",
          "Calendar"
        ],
        "correctAnswer": "Backpack",
        "explanation": "Exemplo prático: \"Carry your school books in a backpack.\"",
        "phoneticHint": "/ˈbæk.pæk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Scissors",
        "visualEmoji": "✂️",
        "visualOptions": [
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura"
          },
          {
            "text": "Lotion",
            "emoji": "🧴",
            "label": "Lotion",
            "translationPt": "Loção / Xampu"
          },
          {
            "text": "Lipstick",
            "emoji": "💄",
            "label": "Lipstick",
            "translationPt": "Batom"
          },
          {
            "text": "Crayon",
            "emoji": "🖍️",
            "label": "Crayon",
            "translationPt": "Giz de cera"
          }
        ],
        "options": [
          "Scissors",
          "Lotion",
          "Lipstick",
          "Crayon"
        ],
        "correctAnswer": "Scissors",
        "explanation": "Exemplo prático: \"Cut the paper along the line with scissors.\"",
        "phoneticHint": "/ˈsɪz.ərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soap",
        "visualEmoji": "🧼",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete / Sabão"
          }
        ],
        "options": [
          "Book",
          "Pen",
          "Pencil",
          "Soap"
        ],
        "correctAnswer": "Soap",
        "explanation": "Exemplo prático: \"Wash your hands with warm water and soap.\"",
        "phoneticHint": "/soʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Toothbrush",
        "visualEmoji": "🪥",
        "visualOptions": [
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Paperclip",
            "emoji": "📎",
            "label": "Paperclip",
            "translationPt": "Clipe de papel"
          },
          {
            "text": "Pushpin",
            "emoji": "📌",
            "label": "Pushpin",
            "translationPt": "Tachinha / Alfinete"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno"
          }
        ],
        "options": [
          "Toothbrush",
          "Paperclip",
          "Pushpin",
          "Notebook"
        ],
        "correctAnswer": "Toothbrush",
        "explanation": "Exemplo prático: \"Brush your teeth with a soft toothbrush.\"",
        "phoneticHint": "/ˈtuːθ.brʌʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Shower",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Magnifying Glass",
            "emoji": "🔍",
            "label": "Magnifying Glass",
            "translationPt": "Lupa"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          }
        ],
        "options": [
          "Magnifying Glass",
          "Shower",
          "Paintbrush",
          "Backpack"
        ],
        "correctAnswer": "Shower",
        "explanation": "Exemplo prático: \"Take a refreshing warm shower.\"",
        "phoneticHint": "/ˈʃaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bathtub",
        "visualEmoji": "🛁",
        "visualOptions": [
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura"
          },
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira"
          },
          {
            "text": "Syringe",
            "emoji": "💉",
            "label": "Syringe",
            "translationPt": "Seringa / Vacina"
          }
        ],
        "options": [
          "Pill",
          "Scissors",
          "Bathtub",
          "Syringe"
        ],
        "correctAnswer": "Bathtub",
        "explanation": "Exemplo prático: \"Fill the bathtub with warm water and bubbles.\"",
        "phoneticHint": "/ˈbæθ.tʌb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Toilet",
        "visualEmoji": "🚽",
        "visualOptions": [
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de arquivos"
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete / Sabão"
          },
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          }
        ],
        "options": [
          "Folder",
          "Calendar",
          "Soap",
          "Toilet"
        ],
        "correctAnswer": "Toilet",
        "explanation": "Exemplo prático: \"Clean the bathroom toilet regularly.\"",
        "phoneticHint": "/ˈtɔɪ.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
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
            "text": "Clipboard",
            "emoji": "📋",
            "label": "Clipboard",
            "translationPt": "Prancheta"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo / Band-aid"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          }
        ],
        "options": [
          "Toilet Paper",
          "Clipboard",
          "Bandage",
          "Book"
        ],
        "correctAnswer": "Toilet Paper",
        "explanation": "Exemplo prático: \"Put a new roll of toilet paper in the holder.\"",
        "phoneticHint": "/ˈtɔɪ.lət ˈpeɪ.pər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lotion",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope / Carta"
          },
          {
            "text": "Lotion",
            "emoji": "🧴",
            "label": "Lotion",
            "translationPt": "Loção / Xampu"
          },
          {
            "text": "Newspaper",
            "emoji": "📰",
            "label": "Newspaper",
            "translationPt": "Jornal"
          }
        ],
        "options": [
          "Notebook",
          "Envelope",
          "Lotion",
          "Newspaper"
        ],
        "correctAnswer": "Lotion",
        "explanation": "Exemplo prático: \"Apply sunscreen lotion before going outside.\"",
        "phoneticHint": "/ˈloʊ.ʃən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Razor",
        "visualEmoji": "🪒",
        "visualOptions": [
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Lâmina de barbear"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira"
          }
        ],
        "options": [
          "Razor",
          "Backpack",
          "Toothbrush",
          "Bathtub"
        ],
        "correctAnswer": "Razor",
        "explanation": "Exemplo prático: \"Shave carefully with a clean safety razor.\"",
        "phoneticHint": "/ˈreɪ.zər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lipstick",
        "visualEmoji": "💄",
        "visualOptions": [
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          },
          {
            "text": "Lipstick",
            "emoji": "💄",
            "label": "Lipstick",
            "translationPt": "Batom"
          }
        ],
        "options": [
          "Pen",
          "Paintbrush",
          "Pencil",
          "Lipstick"
        ],
        "correctAnswer": "Lipstick",
        "explanation": "Exemplo prático: \"She wore bright red lipstick to the party.\"",
        "phoneticHint": "/ˈlɪp.stɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e16",
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
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete / Sabão"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura"
          },
          {
            "text": "Crayon",
            "emoji": "🖍️",
            "label": "Crayon",
            "translationPt": "Giz de cera"
          }
        ],
        "options": [
          "Ruler",
          "Soap",
          "Scissors",
          "Crayon"
        ],
        "correctAnswer": "Ruler",
        "explanation": "Exemplo prático: \"Measure the line with a plastic ruler.\"",
        "phoneticHint": "/ˈruː.lər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Paperclip",
        "visualEmoji": "📎",
        "visualOptions": [
          {
            "text": "Lotion",
            "emoji": "🧴",
            "label": "Lotion",
            "translationPt": "Loção / Xampu"
          },
          {
            "text": "Stethoscope",
            "emoji": "🩺",
            "label": "Stethoscope",
            "translationPt": "Estetoscópio"
          },
          {
            "text": "Paperclip",
            "emoji": "📎",
            "label": "Paperclip",
            "translationPt": "Clipe de papel"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          }
        ],
        "options": [
          "Lotion",
          "Stethoscope",
          "Paperclip",
          "Shower"
        ],
        "correctAnswer": "Paperclip",
        "explanation": "Exemplo prático: \"Hold the pages together with a metal paperclip.\"",
        "phoneticHint": "/ˈpeɪ.pər.klɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pushpin",
        "visualEmoji": "📌",
        "visualOptions": [
          {
            "text": "Pushpin",
            "emoji": "📌",
            "label": "Pushpin",
            "translationPt": "Tachinha / Alfinete"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          },
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Lâmina de barbear"
          },
          {
            "text": "Magnifying Glass",
            "emoji": "🔍",
            "label": "Magnifying Glass",
            "translationPt": "Lupa"
          }
        ],
        "options": [
          "Pushpin",
          "Pill",
          "Razor",
          "Magnifying Glass"
        ],
        "correctAnswer": "Pushpin",
        "explanation": "Exemplo prático: \"Pin the note to the board with a red pushpin.\"",
        "phoneticHint": "/ˈpʊʃ.pɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Envelope",
        "visualEmoji": "✉️",
        "visualOptions": [
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          },
          {
            "text": "Lipstick",
            "emoji": "💄",
            "label": "Lipstick",
            "translationPt": "Batom"
          },
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope / Carta"
          }
        ],
        "options": [
          "Toilet",
          "Lipstick",
          "Toilet Paper",
          "Envelope"
        ],
        "correctAnswer": "Envelope",
        "explanation": "Exemplo prático: \"Put the letter inside a white envelope.\"",
        "phoneticHint": "/ˈen.və.loʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Calendar",
        "visualEmoji": "📅",
        "visualOptions": [
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno"
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua"
          }
        ],
        "options": [
          "Toothbrush",
          "Notebook",
          "Calendar",
          "Ruler"
        ],
        "correctAnswer": "Calendar",
        "explanation": "Exemplo prático: \"Circle the date on the wall calendar.\"",
        "phoneticHint": "/ˈkæl.ən.dər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Newspaper",
        "visualEmoji": "📰",
        "visualOptions": [
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete / Sabão"
          },
          {
            "text": "Newspaper",
            "emoji": "📰",
            "label": "Newspaper",
            "translationPt": "Jornal"
          },
          {
            "text": "Paperclip",
            "emoji": "📎",
            "label": "Paperclip",
            "translationPt": "Clipe de papel"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura"
          }
        ],
        "options": [
          "Soap",
          "Newspaper",
          "Paperclip",
          "Scissors"
        ],
        "correctAnswer": "Newspaper",
        "explanation": "Exemplo prático: \"He reads the morning newspaper with coffee.\"",
        "phoneticHint": "/ˈnuːzˌpeɪ.pər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Folder",
        "visualEmoji": "📁",
        "visualOptions": [
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de arquivos"
          },
          {
            "text": "Pushpin",
            "emoji": "📌",
            "label": "Pushpin",
            "translationPt": "Tachinha / Alfinete"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          },
          {
            "text": "Syringe",
            "emoji": "💉",
            "label": "Syringe",
            "translationPt": "Seringa / Vacina"
          }
        ],
        "options": [
          "Folder",
          "Pushpin",
          "Shower",
          "Syringe"
        ],
        "correctAnswer": "Folder",
        "explanation": "Exemplo prático: \"Organize your documents inside a yellow folder.\"",
        "phoneticHint": "/ˈfoʊl.dər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Clipboard",
        "visualEmoji": "📋",
        "visualOptions": [
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Lâmina de barbear"
          },
          {
            "text": "Lotion",
            "emoji": "🧴",
            "label": "Lotion",
            "translationPt": "Loção / Xampu"
          },
          {
            "text": "Lipstick",
            "emoji": "💄",
            "label": "Lipstick",
            "translationPt": "Batom"
          },
          {
            "text": "Clipboard",
            "emoji": "📋",
            "label": "Clipboard",
            "translationPt": "Prancheta"
          }
        ],
        "options": [
          "Razor",
          "Lotion",
          "Lipstick",
          "Clipboard"
        ],
        "correctAnswer": "Clipboard",
        "explanation": "Exemplo prático: \"The coach holds a checklist on a clipboard.\"",
        "phoneticHint": "/ˈklɪp.bɔːrd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Paintbrush",
        "visualEmoji": "🖌️",
        "visualOptions": [
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope / Carta"
          }
        ],
        "options": [
          "Paintbrush",
          "Book",
          "Backpack",
          "Envelope"
        ],
        "correctAnswer": "Paintbrush",
        "explanation": "Exemplo prático: \"Dip the paintbrush into the blue paint.\"",
        "phoneticHint": "/ˈpeɪnt.brʌʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Crayon",
        "visualEmoji": "🖍️",
        "visualOptions": [
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          },
          {
            "text": "Crayon",
            "emoji": "🖍️",
            "label": "Crayon",
            "translationPt": "Giz de cera"
          },
          {
            "text": "Newspaper",
            "emoji": "📰",
            "label": "Newspaper",
            "translationPt": "Jornal"
          },
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          }
        ],
        "options": [
          "Toilet",
          "Crayon",
          "Newspaper",
          "Toilet Paper"
        ],
        "correctAnswer": "Crayon",
        "explanation": "Exemplo prático: \"Children color pictures with wax crayons.\"",
        "phoneticHint": "/ˈkreɪ.ɑːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Magnifying Glass",
        "visualEmoji": "🔍",
        "visualOptions": [
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua"
          },
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira"
          },
          {
            "text": "Magnifying Glass",
            "emoji": "🔍",
            "label": "Magnifying Glass",
            "translationPt": "Lupa"
          },
          {
            "text": "Folder",
            "emoji": "📁",
            "label": "Folder",
            "translationPt": "Pasta de arquivos"
          }
        ],
        "options": [
          "Ruler",
          "Bathtub",
          "Magnifying Glass",
          "Folder"
        ],
        "correctAnswer": "Magnifying Glass",
        "explanation": "Exemplo prático: \"Examine the tiny stamp with a magnifying glass.\"",
        "phoneticHint": "/ˈmæɡ.nə.faɪ.ɪŋ ɡlæs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Pill",
        "visualEmoji": "💊",
        "visualOptions": [
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
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
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          }
        ],
        "options": [
          "Pen",
          "Pencil",
          "Paperclip",
          "Pill"
        ],
        "correctAnswer": "Pill",
        "explanation": "Exemplo prático: \"Take the vitamin pill with a glass of water.\"",
        "phoneticHint": "/pɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bandage",
        "visualEmoji": "🩹",
        "visualOptions": [
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo / Band-aid"
          },
          {
            "text": "Clipboard",
            "emoji": "📋",
            "label": "Clipboard",
            "translationPt": "Prancheta"
          },
          {
            "text": "Pushpin",
            "emoji": "📌",
            "label": "Pushpin",
            "translationPt": "Tachinha / Alfinete"
          },
          {
            "text": "Calendar",
            "emoji": "📅",
            "label": "Calendar",
            "translationPt": "Calendário"
          }
        ],
        "options": [
          "Bandage",
          "Clipboard",
          "Pushpin",
          "Calendar"
        ],
        "correctAnswer": "Bandage",
        "explanation": "Exemplo prático: \"Put an adhesive bandage on the small cut.\"",
        "phoneticHint": "/ˈbæn.dɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Syringe",
        "visualEmoji": "💉",
        "visualOptions": [
          {
            "text": "Crayon",
            "emoji": "🖍️",
            "label": "Crayon",
            "translationPt": "Giz de cera"
          },
          {
            "text": "Syringe",
            "emoji": "💉",
            "label": "Syringe",
            "translationPt": "Seringa / Vacina"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel"
          }
        ],
        "options": [
          "Crayon",
          "Syringe",
          "Book",
          "Paintbrush"
        ],
        "correctAnswer": "Syringe",
        "explanation": "Exemplo prático: \"The nurse prepared the vaccine syringe.\"",
        "phoneticHint": "/səˈrɪndʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Stethoscope",
        "visualEmoji": "🩺",
        "visualOptions": [
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno"
          },
          {
            "text": "Magnifying Glass",
            "emoji": "🔍",
            "label": "Magnifying Glass",
            "translationPt": "Lupa"
          },
          {
            "text": "Stethoscope",
            "emoji": "🩺",
            "label": "Stethoscope",
            "translationPt": "Estetoscópio"
          },
          {
            "text": "Newspaper",
            "emoji": "📰",
            "label": "Newspaper",
            "translationPt": "Jornal"
          }
        ],
        "options": [
          "Notebook",
          "Magnifying Glass",
          "Stethoscope",
          "Newspaper"
        ],
        "correctAnswer": "Stethoscope",
        "explanation": "Exemplo prático: \"The doctor listens to your heart with a stethoscope.\"",
        "phoneticHint": "/ˈsteθ.ə.skoʊp/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p12",
    "worldId": 0,
    "phaseNumber": 12,
    "title": "Casa & Objetos IV: Eletrônicos, Ferramentas & Música",
    "subtitle": "Módulo 4/4 • 30 equipamentos, ferramentas e instrumentos",
    "pedagogicalObjective": "Dominar o vocabulário de tecnologia, ferramentas de reparo e instrumentos musicais.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Fechamos os 4 módulos de Objetos com tecnologia, ferramentas e música.",
      "Palavras como Wrench (/rentʃ/) e Hammer (/ˈhæm.ər/) são indispensáveis no vocabulário prático.",
      "Conclua com 100% de acerto para avançar aos módulos de Lugares da Cidade!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p12-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Radio",
            "emoji": "📻",
            "label": "Radio",
            "translationPt": "Rádio"
          },
          {
            "text": "Hook",
            "emoji": "🪝",
            "label": "Hook",
            "translationPt": "Gancho"
          }
        ],
        "options": [
          "Hammer",
          "Phone",
          "Radio",
          "Hook"
        ],
        "correctAnswer": "Phone",
        "explanation": "Exemplo prático: \"I sent a text message on my mobile phone.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Computer",
        "visualEmoji": "💻",
        "visualOptions": [
          {
            "text": "Trumpet",
            "emoji": "🎺",
            "label": "Trumpet",
            "translationPt": "Trompete"
          },
          {
            "text": "Telescope",
            "emoji": "🔭",
            "label": "Telescope",
            "translationPt": "Telescópio"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Nut and Bolt",
            "emoji": "🔩",
            "label": "Nut and Bolt",
            "translationPt": "Porca e parafuso"
          }
        ],
        "options": [
          "Trumpet",
          "Telescope",
          "Computer",
          "Nut and Bolt"
        ],
        "correctAnswer": "Computer",
        "explanation": "Exemplo prático: \"She works from home on her laptop computer.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Television",
        "visualEmoji": "📺",
        "visualOptions": [
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Tambor / Bateria"
          },
          {
            "text": "Gear",
            "emoji": "⚙️",
            "label": "Gear",
            "translationPt": "Engrenagem"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão"
          }
        ],
        "options": [
          "Guitar",
          "Drum",
          "Gear",
          "Television"
        ],
        "correctAnswer": "Television",
        "explanation": "Exemplo prático: \"We watched a movie on the living room television.\"",
        "phoneticHint": "/ˈtel.ə.vɪʒ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote / Serra"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          }
        ],
        "options": [
          "Camera",
          "Screwdriver",
          "Saw",
          "Violin"
        ],
        "correctAnswer": "Camera",
        "explanation": "Exemplo prático: \"Take a family photo with the digital camera.\"",
        "phoneticHint": "/ˈkæm.rə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Headphones",
        "visualEmoji": "🎧",
        "visualOptions": [
          {
            "text": "Chain",
            "emoji": "⛓️",
            "label": "Chain",
            "translationPt": "Corrente"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          }
        ],
        "options": [
          "Chain",
          "Headphones",
          "Phone",
          "Saxophone"
        ],
        "correctAnswer": "Headphones",
        "explanation": "Exemplo prático: \"Put on your headphones to listen to the English audio.\"",
        "phoneticHint": "/ˈhed.foʊnz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Microphone",
        "visualEmoji": "🎤",
        "visualOptions": [
          {
            "text": "Pickaxe",
            "emoji": "⛏️",
            "label": "Pickaxe",
            "translationPt": "Picareta"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          }
        ],
        "options": [
          "Pickaxe",
          "Computer",
          "Microphone",
          "Piano"
        ],
        "correctAnswer": "Microphone",
        "explanation": "Exemplo prático: \"Speak clearly into the studio microphone.\"",
        "phoneticHint": "/ˈmaɪ.krə.foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Keyboard",
        "visualEmoji": "⌨️",
        "visualOptions": [
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio"
          },
          {
            "text": "Axe",
            "emoji": "🪓",
            "label": "Axe",
            "translationPt": "Machado"
          },
          {
            "text": "Magnet",
            "emoji": "🧲",
            "label": "Magnet",
            "translationPt": "Ímã"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado"
          }
        ],
        "options": [
          "Microscope",
          "Axe",
          "Magnet",
          "Keyboard"
        ],
        "correctAnswer": "Keyboard",
        "explanation": "Exemplo prático: \"Type the password on the computer keyboard.\"",
        "phoneticHint": "/ˈkiː.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Computer Mouse",
        "visualEmoji": "🖱️",
        "visualOptions": [
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "Camera",
            "emoji": "📷",
            "label": "Camera",
            "translationPt": "Câmera fotográfica"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão"
          },
          {
            "text": "Accordion",
            "emoji": "🪗",
            "label": "Accordion",
            "translationPt": "Acordeão / Sanfona"
          }
        ],
        "options": [
          "Computer Mouse",
          "Camera",
          "Television",
          "Accordion"
        ],
        "correctAnswer": "Computer Mouse",
        "explanation": "Exemplo prático: \"Click the icon using the wireless computer mouse.\"",
        "phoneticHint": "/kəmˈpjuː.tər maʊs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Printer",
        "visualEmoji": "🖨️",
        "visualOptions": [
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora"
          },
          {
            "text": "Gear",
            "emoji": "⚙️",
            "label": "Gear",
            "translationPt": "Engrenagem"
          }
        ],
        "options": [
          "Headphones",
          "Guitar",
          "Printer",
          "Gear"
        ],
        "correctAnswer": "Printer",
        "explanation": "Exemplo prático: \"Print two copies of the ticket on the printer.\"",
        "phoneticHint": "/ˈprɪn.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e10",
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
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
          },
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          }
        ],
        "options": [
          "Radio",
          "Violin",
          "Microphone",
          "Saxophone"
        ],
        "correctAnswer": "Radio",
        "explanation": "Exemplo prático: \"Listen to the morning news on the radio.\"",
        "phoneticHint": "/ˈreɪ.di.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Hammer",
        "visualEmoji": "🔨",
        "visualOptions": [
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado"
          },
          {
            "text": "Chain",
            "emoji": "⛓️",
            "label": "Chain",
            "translationPt": "Corrente"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          }
        ],
        "options": [
          "Keyboard",
          "Chain",
          "Computer",
          "Hammer"
        ],
        "correctAnswer": "Hammer",
        "explanation": "Exemplo prático: \"Use a hammer to drive the nail into the wood.\"",
        "phoneticHint": "/ˈhæm.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Wrench",
        "visualEmoji": "🔧",
        "visualOptions": [
          {
            "text": "Camera",
            "emoji": "📷",
            "label": "Camera",
            "translationPt": "Câmera fotográfica"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Grifo"
          },
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          }
        ],
        "options": [
          "Camera",
          "Phone",
          "Wrench",
          "Computer Mouse"
        ],
        "correctAnswer": "Wrench",
        "explanation": "Exemplo prático: \"Tighten the metal bolt with a wrench.\"",
        "phoneticHint": "/rentʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Screwdriver",
        "visualEmoji": "🪛",
        "visualOptions": [
          {
            "text": "Hook",
            "emoji": "🪝",
            "label": "Hook",
            "translationPt": "Gancho"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          }
        ],
        "options": [
          "Hook",
          "Screwdriver",
          "Printer",
          "Headphones"
        ],
        "correctAnswer": "Screwdriver",
        "explanation": "Exemplo prático: \"Turn the screw with a flathead screwdriver.\"",
        "phoneticHint": "/ˈskruːˌdraɪ.vər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Saw",
        "visualEmoji": "🪚",
        "visualOptions": [
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote / Serra"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Tambor / Bateria"
          },
          {
            "text": "Accordion",
            "emoji": "🪗",
            "label": "Accordion",
            "translationPt": "Acordeão / Sanfona"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão"
          }
        ],
        "options": [
          "Saw",
          "Drum",
          "Accordion",
          "Television"
        ],
        "correctAnswer": "Saw",
        "explanation": "Exemplo prático: \"Cut the wooden plank with a hand saw.\"",
        "phoneticHint": "/sɔː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Axe",
        "visualEmoji": "🪓",
        "visualOptions": [
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          },
          {
            "text": "Magnet",
            "emoji": "🧲",
            "label": "Magnet",
            "translationPt": "Ímã"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
          },
          {
            "text": "Axe",
            "emoji": "🪓",
            "label": "Axe",
            "translationPt": "Machado"
          }
        ],
        "options": [
          "Piano",
          "Magnet",
          "Microphone",
          "Axe"
        ],
        "correctAnswer": "Axe",
        "explanation": "Exemplo prático: \"Split firewood logs with a sharp axe.\"",
        "phoneticHint": "/æks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pickaxe",
        "visualEmoji": "⛏️",
        "visualOptions": [
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio"
          },
          {
            "text": "Pickaxe",
            "emoji": "⛏️",
            "label": "Pickaxe",
            "translationPt": "Picareta"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Grifo"
          }
        ],
        "options": [
          "Computer Mouse",
          "Microscope",
          "Pickaxe",
          "Wrench"
        ],
        "correctAnswer": "Pickaxe",
        "explanation": "Exemplo prático: \"Miners break hard rock with a pickaxe.\"",
        "phoneticHint": "/ˈpɪk.æks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Nut and Bolt",
        "visualEmoji": "🔩",
        "visualOptions": [
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora"
          },
          {
            "text": "Nut and Bolt",
            "emoji": "🔩",
            "label": "Nut and Bolt",
            "translationPt": "Porca e parafuso"
          },
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
          }
        ],
        "options": [
          "Printer",
          "Nut and Bolt",
          "Radio",
          "Screwdriver"
        ],
        "correctAnswer": "Nut and Bolt",
        "explanation": "Exemplo prático: \"Fasten the steel plate with a nut and bolt.\"",
        "phoneticHint": "/ˈnʌt ənd boʊlt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Gear",
        "visualEmoji": "⚙️",
        "visualOptions": [
          {
            "text": "Gear",
            "emoji": "⚙️",
            "label": "Gear",
            "translationPt": "Engrenagem"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote / Serra"
          },
          {
            "text": "Trumpet",
            "emoji": "🎺",
            "label": "Trumpet",
            "translationPt": "Trompete"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado"
          }
        ],
        "options": [
          "Gear",
          "Saw",
          "Trumpet",
          "Keyboard"
        ],
        "correctAnswer": "Gear",
        "explanation": "Exemplo prático: \"The metal gears turn inside the machine.\"",
        "phoneticHint": "/ɡɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chain",
        "visualEmoji": "⛓️",
        "visualOptions": [
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Axe",
            "emoji": "🪓",
            "label": "Axe",
            "translationPt": "Machado"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão"
          },
          {
            "text": "Chain",
            "emoji": "⛓️",
            "label": "Chain",
            "translationPt": "Corrente"
          }
        ],
        "options": [
          "Hammer",
          "Axe",
          "Television",
          "Chain"
        ],
        "correctAnswer": "Chain",
        "explanation": "Exemplo prático: \"Secure the heavy gate with an iron chain.\"",
        "phoneticHint": "/tʃeɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Hook",
        "visualEmoji": "🪝",
        "visualOptions": [
          {
            "text": "Hook",
            "emoji": "🪝",
            "label": "Hook",
            "translationPt": "Gancho"
          },
          {
            "text": "Pickaxe",
            "emoji": "⛏️",
            "label": "Pickaxe",
            "translationPt": "Picareta"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Tambor / Bateria"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Grifo"
          }
        ],
        "options": [
          "Hook",
          "Pickaxe",
          "Drum",
          "Wrench"
        ],
        "correctAnswer": "Hook",
        "explanation": "Exemplo prático: \"Hang your wet coat on the wall hook.\"",
        "phoneticHint": "/hʊk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Magnet",
        "visualEmoji": "🧲",
        "visualOptions": [
          {
            "text": "Nut and Bolt",
            "emoji": "🔩",
            "label": "Nut and Bolt",
            "translationPt": "Porca e parafuso"
          },
          {
            "text": "Magnet",
            "emoji": "🧲",
            "label": "Magnet",
            "translationPt": "Ímã"
          },
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          }
        ],
        "options": [
          "Nut and Bolt",
          "Magnet",
          "Saxophone",
          "Screwdriver"
        ],
        "correctAnswer": "Magnet",
        "explanation": "Exemplo prático: \"A horseshoe magnet attracts iron nails.\"",
        "phoneticHint": "/ˈmæɡ.nət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Telescope",
        "visualEmoji": "🔭",
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
            "text": "Telescope",
            "emoji": "🔭",
            "label": "Telescope",
            "translationPt": "Telescópio"
          },
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          }
        ],
        "options": [
          "Camera",
          "Computer",
          "Telescope",
          "Computer Mouse"
        ],
        "correctAnswer": "Telescope",
        "explanation": "Exemplo prático: \"Look at the craters of the moon through a telescope.\"",
        "phoneticHint": "/ˈtel.ə.skoʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Microscope",
        "visualEmoji": "🔬",
        "visualOptions": [
          {
            "text": "Chain",
            "emoji": "⛓️",
            "label": "Chain",
            "translationPt": "Corrente"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote / Serra"
          },
          {
            "text": "Radio",
            "emoji": "📻",
            "label": "Radio",
            "translationPt": "Rádio"
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio"
          }
        ],
        "options": [
          "Chain",
          "Saw",
          "Radio",
          "Microscope"
        ],
        "correctAnswer": "Microscope",
        "explanation": "Exemplo prático: \"Scientists study tiny cells under a microscope.\"",
        "phoneticHint": "/ˈmaɪ.krə.skoʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Guitar",
        "visualEmoji": "🎸",
        "visualOptions": [
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
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado"
          }
        ],
        "options": [
          "Guitar",
          "Hammer",
          "Headphones",
          "Keyboard"
        ],
        "correctAnswer": "Guitar",
        "explanation": "Exemplo prático: \"He plays acoustic guitar around the campfire.\"",
        "phoneticHint": "/ɡɪˈtɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Piano",
        "visualEmoji": "🎹",
        "visualOptions": [
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Grifo"
          },
          {
            "text": "Hook",
            "emoji": "🪝",
            "label": "Hook",
            "translationPt": "Gancho"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          },
          {
            "text": "Nut and Bolt",
            "emoji": "🔩",
            "label": "Nut and Bolt",
            "translationPt": "Porca e parafuso"
          }
        ],
        "options": [
          "Wrench",
          "Hook",
          "Piano",
          "Nut and Bolt"
        ],
        "correctAnswer": "Piano",
        "explanation": "Exemplo prático: \"She practices classical music on the grand piano.\"",
        "phoneticHint": "/piˈæn.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Drum",
        "visualEmoji": "🥁",
        "visualOptions": [
          {
            "text": "Gear",
            "emoji": "⚙️",
            "label": "Gear",
            "translationPt": "Engrenagem"
          },
          {
            "text": "Telescope",
            "emoji": "🔭",
            "label": "Telescope",
            "translationPt": "Telescópio"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Tambor / Bateria"
          },
          {
            "text": "Axe",
            "emoji": "🪓",
            "label": "Axe",
            "translationPt": "Machado"
          }
        ],
        "options": [
          "Gear",
          "Telescope",
          "Drum",
          "Axe"
        ],
        "correctAnswer": "Drum",
        "explanation": "Exemplo prático: \"Keep the rhythm on the snare drum.\"",
        "phoneticHint": "/drʌm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Violin",
        "visualEmoji": "🎻",
        "visualOptions": [
          {
            "text": "Printer",
            "emoji": "🖨️",
            "label": "Printer",
            "translationPt": "Impressora"
          },
          {
            "text": "Pickaxe",
            "emoji": "⛏️",
            "label": "Pickaxe",
            "translationPt": "Picareta"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          }
        ],
        "options": [
          "Printer",
          "Pickaxe",
          "Phone",
          "Violin"
        ],
        "correctAnswer": "Violin",
        "explanation": "Exemplo prático: \"The violinist played a beautiful melody on the violin.\"",
        "phoneticHint": "/ˌvaɪ.əˈlɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Trumpet",
        "visualEmoji": "🎺",
        "visualOptions": [
          {
            "text": "Trumpet",
            "emoji": "🎺",
            "label": "Trumpet",
            "translationPt": "Trompete"
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio"
          },
          {
            "text": "Magnet",
            "emoji": "🧲",
            "label": "Magnet",
            "translationPt": "Ímã"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
          }
        ],
        "options": [
          "Trumpet",
          "Microscope",
          "Magnet",
          "Microphone"
        ],
        "correctAnswer": "Trumpet",
        "explanation": "Exemplo prático: \"The jazz musician plays a brass trumpet.\"",
        "phoneticHint": "/ˈtrʌm.pɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Saxophone",
        "visualEmoji": "🎷",
        "visualOptions": [
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          },
          {
            "text": "Radio",
            "emoji": "📻",
            "label": "Radio",
            "translationPt": "Rádio"
          },
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          }
        ],
        "options": [
          "Piano",
          "Radio",
          "Saxophone",
          "Guitar"
        ],
        "correctAnswer": "Saxophone",
        "explanation": "Exemplo prático: \"A smooth solo on the golden saxophone.\"",
        "phoneticHint": "/ˈsæk.sə.foʊn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Accordion",
        "visualEmoji": "🪗",
        "visualOptions": [
          {
            "text": "Accordion",
            "emoji": "🪗",
            "label": "Accordion",
            "translationPt": "Acordeão / Sanfona"
          },
          {
            "text": "Nut and Bolt",
            "emoji": "🔩",
            "label": "Nut and Bolt",
            "translationPt": "Porca e parafuso"
          },
          {
            "text": "Telescope",
            "emoji": "🔭",
            "label": "Telescope",
            "translationPt": "Telescópio"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado"
          }
        ],
        "options": [
          "Accordion",
          "Nut and Bolt",
          "Telescope",
          "Keyboard"
        ],
        "correctAnswer": "Accordion",
        "explanation": "Exemplo prático: \"Traditional folk music played on an accordion.\"",
        "phoneticHint": "/əˈkɔːr.di.ən/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p13",
    "worldId": 0,
    "phaseNumber": 13,
    "title": "Cidade & Cotidiano I: Comércio & Lugares",
    "subtitle": "Módulo 1/4 • 30 estabelecimentos e prédios reais da cidade",
    "pedagogicalObjective": "Identificar estabelecimentos comerciais e prédios públicos pela fachada real (Livraria, Padaria, Farmácia, Supermercado).",
    "type": "lesson",
    "icon": "map",
    "cefrLevel": "A1",
    "theorySummary": [
      "Livraria (Bookstore), Padaria (Bakery), Farmácia (Pharmacy) e Supermercado (Supermarket) exibem a fachada real do comércio com vitrines detalhadas!",
      "Nenhum nome em inglês aparece na placa antes de você responder.",
      "Domine os 30 lugares da cidade do mais comum ao menos comum."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p13-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "House",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Bookstore",
            "emoji": "🏪",
            "label": "Bookstore",
            "translationPt": "Livraria"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Hardware Store",
            "emoji": "🧰",
            "label": "Hardware Store",
            "translationPt": "Loja de ferragens / Material de construção"
          }
        ],
        "options": [
          "Hotel",
          "Bookstore",
          "House",
          "Hardware Store"
        ],
        "correctAnswer": "House",
        "explanation": "Exemplo prático: \"They live in a cozy house with a garden.\"",
        "phoneticHint": "/haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco"
          },
          {
            "text": "Toy Store",
            "emoji": "🧸",
            "label": "Toy Store",
            "translationPt": "Loja de brinquedos"
          },
          {
            "text": "Butcher Shop",
            "emoji": "🥩",
            "label": "Butcher Shop",
            "translationPt": "Açougue"
          }
        ],
        "options": [
          "School",
          "Bank",
          "Toy Store",
          "Butcher Shop"
        ],
        "correctAnswer": "School",
        "explanation": "Exemplo prático: \"Children walk to school every morning.\"",
        "phoneticHint": "/skuːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Hospital",
        "visualEmoji": "🏥",
        "visualOptions": [
          {
            "text": "Gym",
            "emoji": "🏋️",
            "label": "Gym",
            "translationPt": "Academia"
          },
          {
            "text": "Barber Shop",
            "emoji": "💈",
            "label": "Barber Shop",
            "translationPt": "Barbearia / Salão"
          },
          {
            "text": "Jewelry Store",
            "emoji": "💎",
            "label": "Jewelry Store",
            "translationPt": "Joalheria"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          }
        ],
        "options": [
          "Gym",
          "Barber Shop",
          "Jewelry Store",
          "Hospital"
        ],
        "correctAnswer": "Hospital",
        "explanation": "Exemplo prático: \"Doctors and nurses work at the city hospital.\"",
        "phoneticHint": "/ˈhɑː.spɪ.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Supermarket",
        "visualEmoji": "🏪",
        "visualOptions": [
          {
            "text": "Supermarket",
            "emoji": "🏪",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          },
          {
            "text": "Post Office",
            "emoji": "🏣",
            "label": "Post Office",
            "translationPt": "Correios"
          },
          {
            "text": "Shoe Store",
            "emoji": "👟",
            "label": "Shoe Store",
            "translationPt": "Loja de calçados / Sapataria"
          }
        ],
        "options": [
          "Supermarket",
          "Police Station",
          "Post Office",
          "Shoe Store"
        ],
        "correctAnswer": "Supermarket",
        "explanation": "Exemplo prático: \"We buy fresh food and groceries at the supermarket.\"",
        "phoneticHint": "/ˈsuː.pərˌmɑːr.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Bakery",
        "visualEmoji": "🏪",
        "visualOptions": [
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Corpo de bombeiros"
          },
          {
            "text": "Factory",
            "emoji": "🏭",
            "label": "Factory",
            "translationPt": "Fábrica / Indústria"
          },
          {
            "text": "Bakery",
            "emoji": "🏪",
            "label": "Bakery",
            "translationPt": "Padaria"
          },
          {
            "text": "Flower Shop",
            "emoji": "💐",
            "label": "Flower Shop",
            "translationPt": "Floricultura"
          }
        ],
        "options": [
          "Fire Station",
          "Factory",
          "Bakery",
          "Flower Shop"
        ],
        "correctAnswer": "Bakery",
        "explanation": "Exemplo prático: \"The neighborhood bakery sells warm bread and cakes.\"",
        "phoneticHint": "/ˈbeɪ.kər.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bookstore",
        "visualEmoji": "🏪",
        "visualOptions": [
          {
            "text": "Bookstore",
            "emoji": "🏪",
            "label": "Bookstore",
            "translationPt": "Livraria"
          },
          {
            "text": "Laundromat",
            "emoji": "🫧",
            "label": "Laundromat",
            "translationPt": "Lavanderia"
          },
          {
            "text": "Library",
            "emoji": "🏛️",
            "label": "Library",
            "translationPt": "Biblioteca"
          },
          {
            "text": "Lighthouse",
            "emoji": "🗼",
            "label": "Lighthouse",
            "translationPt": "Farol / Torre"
          }
        ],
        "options": [
          "Bookstore",
          "Laundromat",
          "Library",
          "Lighthouse"
        ],
        "correctAnswer": "Bookstore",
        "explanation": "Exemplo prático: \"I bought an English dictionary at the bookstore.\"",
        "phoneticHint": "/ˈbʊk.stɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pharmacy",
        "visualEmoji": "🏪",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Coffee Shop",
            "emoji": "☕",
            "label": "Coffee Shop",
            "translationPt": "Cafeteria"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "Pharmacy",
            "emoji": "🏪",
            "label": "Pharmacy",
            "translationPt": "Farmácia"
          }
        ],
        "options": [
          "House",
          "Coffee Shop",
          "Hospital",
          "Pharmacy"
        ],
        "correctAnswer": "Pharmacy",
        "explanation": "Exemplo prático: \"Pick up the medicine at the corner pharmacy.\"",
        "phoneticHint": "/ˈfɑːr.mə.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Restaurant",
        "visualEmoji": "🏪",
        "visualOptions": [
          {
            "text": "Clothing Store",
            "emoji": "👕",
            "label": "Clothing Store",
            "translationPt": "Loja de roupas"
          },
          {
            "text": "Castle",
            "emoji": "🏰",
            "label": "Castle",
            "translationPt": "Castelo"
          },
          {
            "text": "Restaurant",
            "emoji": "🏪",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Cinema",
            "emoji": "🎬",
            "label": "Cinema",
            "translationPt": "Cinema"
          }
        ],
        "options": [
          "Clothing Store",
          "Castle",
          "Restaurant",
          "Cinema"
        ],
        "correctAnswer": "Restaurant",
        "explanation": "Exemplo prático: \"We had dinner at an Italian restaurant.\"",
        "phoneticHint": "/ˈres.trɑːnt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bank",
        "visualEmoji": "🏦",
        "visualOptions": [
          {
            "text": "Supermarket",
            "emoji": "🏪",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco"
          },
          {
            "text": "Bakery",
            "emoji": "🏪",
            "label": "Bakery",
            "translationPt": "Padaria"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Supermarket",
          "Bank",
          "Bakery",
          "School"
        ],
        "correctAnswer": "Bank",
        "explanation": "Exemplo prático: \"Deposit the money at the downtown bank.\"",
        "phoneticHint": "/bæŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hotel",
        "visualEmoji": "🏨",
        "visualOptions": [
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Pet Shop",
            "emoji": "🐾",
            "label": "Pet Shop",
            "translationPt": "Pet shop / Loja de animais"
          },
          {
            "text": "Shoe Store",
            "emoji": "👟",
            "label": "Shoe Store",
            "translationPt": "Loja de calçados / Sapataria"
          },
          {
            "text": "Jewelry Store",
            "emoji": "💎",
            "label": "Jewelry Store",
            "translationPt": "Joalheria"
          }
        ],
        "options": [
          "Hotel",
          "Pet Shop",
          "Shoe Store",
          "Jewelry Store"
        ],
        "correctAnswer": "Hotel",
        "explanation": "Exemplo prático: \"We booked a room at a comfortable hotel.\"",
        "phoneticHint": "/hoʊˈtel/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Library",
        "visualEmoji": "🏛️",
        "visualOptions": [
          {
            "text": "Pharmacy",
            "emoji": "🏪",
            "label": "Pharmacy",
            "translationPt": "Farmácia"
          },
          {
            "text": "Laundromat",
            "emoji": "🫧",
            "label": "Laundromat",
            "translationPt": "Lavanderia"
          },
          {
            "text": "Lighthouse",
            "emoji": "🗼",
            "label": "Lighthouse",
            "translationPt": "Farol / Torre"
          },
          {
            "text": "Library",
            "emoji": "🏛️",
            "label": "Library",
            "translationPt": "Biblioteca"
          }
        ],
        "options": [
          "Pharmacy",
          "Laundromat",
          "Lighthouse",
          "Library"
        ],
        "correctAnswer": "Library",
        "explanation": "Exemplo prático: \"Students study quietly in the public library.\"",
        "phoneticHint": "/ˈlaɪ.brer.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Coffee Shop",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Coffee Shop",
            "emoji": "☕",
            "label": "Coffee Shop",
            "translationPt": "Cafeteria"
          },
          {
            "text": "Bookstore",
            "emoji": "🏪",
            "label": "Bookstore",
            "translationPt": "Livraria"
          },
          {
            "text": "Butcher Shop",
            "emoji": "🥩",
            "label": "Butcher Shop",
            "translationPt": "Açougue"
          },
          {
            "text": "Restaurant",
            "emoji": "🏪",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          }
        ],
        "options": [
          "Coffee Shop",
          "Bookstore",
          "Butcher Shop",
          "Restaurant"
        ],
        "correctAnswer": "Coffee Shop",
        "explanation": "Exemplo prático: \"Let us meet for espresso at the coffee shop.\"",
        "phoneticHint": "/ˈkɔː.fi ʃɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Post Office",
        "visualEmoji": "🏣",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Post Office",
            "emoji": "🏣",
            "label": "Post Office",
            "translationPt": "Correios"
          },
          {
            "text": "Hardware Store",
            "emoji": "🧰",
            "label": "Hardware Store",
            "translationPt": "Loja de ferragens / Material de construção"
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
          "Post Office",
          "Hardware Store",
          "Hospital"
        ],
        "correctAnswer": "Post Office",
        "explanation": "Exemplo prático: \"Mail the package at the post office.\"",
        "phoneticHint": "/ˈpoʊst ˌɔː.fɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Police Station",
        "visualEmoji": "🚓",
        "visualOptions": [
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          },
          {
            "text": "Toy Store",
            "emoji": "🧸",
            "label": "Toy Store",
            "translationPt": "Loja de brinquedos"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Bakery",
            "emoji": "🏪",
            "label": "Bakery",
            "translationPt": "Padaria"
          }
        ],
        "options": [
          "Police Station",
          "Toy Store",
          "Hotel",
          "Bakery"
        ],
        "correctAnswer": "Police Station",
        "explanation": "Exemplo prático: \"Report the lost wallet at the police station.\"",
        "phoneticHint": "/pəˈliːs ˌsteɪ.ʃən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fire Station",
        "visualEmoji": "🚒",
        "visualOptions": [
          {
            "text": "Pharmacy",
            "emoji": "🏪",
            "label": "Pharmacy",
            "translationPt": "Farmácia"
          },
          {
            "text": "Pet Shop",
            "emoji": "🐾",
            "label": "Pet Shop",
            "translationPt": "Pet shop / Loja de animais"
          },
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco"
          },
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Corpo de bombeiros"
          }
        ],
        "options": [
          "Pharmacy",
          "Pet Shop",
          "Bank",
          "Fire Station"
        ],
        "correctAnswer": "Fire Station",
        "explanation": "Exemplo prático: \"Red fire trucks are parked inside the fire station.\"",
        "phoneticHint": "/ˈfaɪ.ər ˌsteɪ.ʃən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Coffee Shop",
            "emoji": "☕",
            "label": "Coffee Shop",
            "translationPt": "Cafeteria"
          },
          {
            "text": "Castle",
            "emoji": "🏰",
            "label": "Castle",
            "translationPt": "Castelo"
          },
          {
            "text": "Factory",
            "emoji": "🏭",
            "label": "Factory",
            "translationPt": "Fábrica / Indústria"
          }
        ],
        "options": [
          "Cinema",
          "Coffee Shop",
          "Castle",
          "Factory"
        ],
        "correctAnswer": "Cinema",
        "explanation": "Exemplo prático: \"We watched a new film at the cinema.\"",
        "phoneticHint": "/ˈsɪn.ə.mə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Gym",
        "visualEmoji": "🏋️",
        "visualOptions": [
          {
            "text": "Restaurant",
            "emoji": "🏪",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Gym",
            "emoji": "🏋️",
            "label": "Gym",
            "translationPt": "Academia"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Library",
            "emoji": "🏛️",
            "label": "Library",
            "translationPt": "Biblioteca"
          }
        ],
        "options": [
          "Restaurant",
          "Gym",
          "School",
          "Library"
        ],
        "correctAnswer": "Gym",
        "explanation": "Exemplo prático: \"She exercises at the fitness gym three times a week.\"",
        "phoneticHint": "/dʒɪm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Butcher Shop",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Post Office",
            "emoji": "🏣",
            "label": "Post Office",
            "translationPt": "Correios"
          },
          {
            "text": "Supermarket",
            "emoji": "🏪",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Butcher Shop",
            "emoji": "🥩",
            "label": "Butcher Shop",
            "translationPt": "Açougue"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          }
        ],
        "options": [
          "Post Office",
          "Supermarket",
          "Butcher Shop",
          "Police Station"
        ],
        "correctAnswer": "Butcher Shop",
        "explanation": "Exemplo prático: \"Buy fresh steaks at the local butcher shop.\"",
        "phoneticHint": "/ˈbʊtʃ.ər ʃɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Flower Shop",
        "visualEmoji": "💐",
        "visualOptions": [
          {
            "text": "Toy Store",
            "emoji": "🧸",
            "label": "Toy Store",
            "translationPt": "Loja de brinquedos"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Corpo de bombeiros"
          },
          {
            "text": "Flower Shop",
            "emoji": "💐",
            "label": "Flower Shop",
            "translationPt": "Floricultura"
          }
        ],
        "options": [
          "Toy Store",
          "House",
          "Fire Station",
          "Flower Shop"
        ],
        "correctAnswer": "Flower Shop",
        "explanation": "Exemplo prático: \"He bought a bouquet of roses at the flower shop.\"",
        "phoneticHint": "/ˈflaʊ.ər ʃɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Clothing Store",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Clothing Store",
            "emoji": "👕",
            "label": "Clothing Store",
            "translationPt": "Loja de roupas"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "Cinema",
            "emoji": "🎬",
            "label": "Cinema",
            "translationPt": "Cinema"
          }
        ],
        "options": [
          "Clothing Store",
          "Hotel",
          "Hospital",
          "Cinema"
        ],
        "correctAnswer": "Clothing Store",
        "explanation": "Exemplo prático: \"She tried on a winter coat at the clothing store.\"",
        "phoneticHint": "/ˈkloʊ.ðɪŋ stɔːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Shoe Store",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Gym",
            "emoji": "🏋️",
            "label": "Gym",
            "translationPt": "Academia"
          },
          {
            "text": "Pharmacy",
            "emoji": "🏪",
            "label": "Pharmacy",
            "translationPt": "Farmácia"
          },
          {
            "text": "Shoe Store",
            "emoji": "👟",
            "label": "Shoe Store",
            "translationPt": "Loja de calçados / Sapataria"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Gym",
          "Pharmacy",
          "Shoe Store",
          "School"
        ],
        "correctAnswer": "Shoe Store",
        "explanation": "Exemplo prático: \"He bought running sneakers at the shoe store.\"",
        "phoneticHint": "/ˈʃuː stɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Barber Shop",
        "visualEmoji": "💈",
        "visualOptions": [
          {
            "text": "Barber Shop",
            "emoji": "💈",
            "label": "Barber Shop",
            "translationPt": "Barbearia / Salão"
          },
          {
            "text": "Coffee Shop",
            "emoji": "☕",
            "label": "Coffee Shop",
            "translationPt": "Cafeteria"
          },
          {
            "text": "Factory",
            "emoji": "🏭",
            "label": "Factory",
            "translationPt": "Fábrica / Indústria"
          },
          {
            "text": "Castle",
            "emoji": "🏰",
            "label": "Castle",
            "translationPt": "Castelo"
          }
        ],
        "options": [
          "Barber Shop",
          "Coffee Shop",
          "Factory",
          "Castle"
        ],
        "correctAnswer": "Barber Shop",
        "explanation": "Exemplo prático: \"Get a neat haircut at the barber shop.\"",
        "phoneticHint": "/ˈbɑːr.bər ʃɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Pet Shop",
        "visualEmoji": "🐾",
        "visualOptions": [
          {
            "text": "Flower Shop",
            "emoji": "💐",
            "label": "Flower Shop",
            "translationPt": "Floricultura"
          },
          {
            "text": "Library",
            "emoji": "🏛️",
            "label": "Library",
            "translationPt": "Biblioteca"
          },
          {
            "text": "Restaurant",
            "emoji": "🏪",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Pet Shop",
            "emoji": "🐾",
            "label": "Pet Shop",
            "translationPt": "Pet shop / Loja de animais"
          }
        ],
        "options": [
          "Flower Shop",
          "Library",
          "Restaurant",
          "Pet Shop"
        ],
        "correctAnswer": "Pet Shop",
        "explanation": "Exemplo prático: \"Buy dog food and a collar at the pet shop.\"",
        "phoneticHint": "/ˈpet ʃɑːp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Toy Store",
        "visualEmoji": "🧸",
        "visualOptions": [
          {
            "text": "Bakery",
            "emoji": "🏪",
            "label": "Bakery",
            "translationPt": "Padaria"
          },
          {
            "text": "Bookstore",
            "emoji": "🏪",
            "label": "Bookstore",
            "translationPt": "Livraria"
          },
          {
            "text": "Toy Store",
            "emoji": "🧸",
            "label": "Toy Store",
            "translationPt": "Loja de brinquedos"
          },
          {
            "text": "Clothing Store",
            "emoji": "👕",
            "label": "Clothing Store",
            "translationPt": "Loja de roupas"
          }
        ],
        "options": [
          "Bakery",
          "Bookstore",
          "Toy Store",
          "Clothing Store"
        ],
        "correctAnswer": "Toy Store",
        "explanation": "Exemplo prático: \"The children loved the colorful display at the toy store.\"",
        "phoneticHint": "/ˈtɔɪ stɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hardware Store",
        "visualEmoji": "🧰",
        "visualOptions": [
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco"
          },
          {
            "text": "Lighthouse",
            "emoji": "🗼",
            "label": "Lighthouse",
            "translationPt": "Farol / Torre"
          },
          {
            "text": "Hardware Store",
            "emoji": "🧰",
            "label": "Hardware Store",
            "translationPt": "Loja de ferragens / Material de construção"
          },
          {
            "text": "Butcher Shop",
            "emoji": "🥩",
            "label": "Butcher Shop",
            "translationPt": "Açougue"
          }
        ],
        "options": [
          "Bank",
          "Lighthouse",
          "Hardware Store",
          "Butcher Shop"
        ],
        "correctAnswer": "Hardware Store",
        "explanation": "Exemplo prático: \"Buy paint and tools at the hardware store.\"",
        "phoneticHint": "/ˈhɑːrd.wer stɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Jewelry Store",
        "visualEmoji": "💎",
        "visualOptions": [
          {
            "text": "Jewelry Store",
            "emoji": "💎",
            "label": "Jewelry Store",
            "translationPt": "Joalheria"
          },
          {
            "text": "Gym",
            "emoji": "🏋️",
            "label": "Gym",
            "translationPt": "Academia"
          },
          {
            "text": "Barber Shop",
            "emoji": "💈",
            "label": "Barber Shop",
            "translationPt": "Barbearia / Salão"
          },
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Corpo de bombeiros"
          }
        ],
        "options": [
          "Jewelry Store",
          "Gym",
          "Barber Shop",
          "Fire Station"
        ],
        "correctAnswer": "Jewelry Store",
        "explanation": "Exemplo prático: \"Gold rings sparkle in the window of the jewelry store.\"",
        "phoneticHint": "/ˈdʒuː.əl.ri stɔːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Laundromat",
        "visualEmoji": "🫧",
        "visualOptions": [
          {
            "text": "Supermarket",
            "emoji": "🏪",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Post Office",
            "emoji": "🏣",
            "label": "Post Office",
            "translationPt": "Correios"
          },
          {
            "text": "Shoe Store",
            "emoji": "👟",
            "label": "Shoe Store",
            "translationPt": "Loja de calçados / Sapataria"
          },
          {
            "text": "Laundromat",
            "emoji": "🫧",
            "label": "Laundromat",
            "translationPt": "Lavanderia"
          }
        ],
        "options": [
          "Supermarket",
          "Post Office",
          "Shoe Store",
          "Laundromat"
        ],
        "correctAnswer": "Laundromat",
        "explanation": "Exemplo prático: \"Wash and dry your clothes at the self-service laundromat.\"",
        "phoneticHint": "/ˈlɔːn.drə.mæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Factory",
        "visualEmoji": "🏭",
        "visualOptions": [
          {
            "text": "Cinema",
            "emoji": "🎬",
            "label": "Cinema",
            "translationPt": "Cinema"
          },
          {
            "text": "Clothing Store",
            "emoji": "👕",
            "label": "Clothing Store",
            "translationPt": "Loja de roupas"
          },
          {
            "text": "Factory",
            "emoji": "🏭",
            "label": "Factory",
            "translationPt": "Fábrica / Indústria"
          },
          {
            "text": "Flower Shop",
            "emoji": "💐",
            "label": "Flower Shop",
            "translationPt": "Floricultura"
          }
        ],
        "options": [
          "Cinema",
          "Clothing Store",
          "Factory",
          "Flower Shop"
        ],
        "correctAnswer": "Factory",
        "explanation": "Exemplo prático: \"Cars are assembled inside the modern factory.\"",
        "phoneticHint": "/ˈfæk.tər.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Castle",
        "visualEmoji": "🏰",
        "visualOptions": [
          {
            "text": "Hardware Store",
            "emoji": "🧰",
            "label": "Hardware Store",
            "translationPt": "Loja de ferragens / Material de construção"
          },
          {
            "text": "Castle",
            "emoji": "🏰",
            "label": "Castle",
            "translationPt": "Castelo"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          },
          {
            "text": "Pet Shop",
            "emoji": "🐾",
            "label": "Pet Shop",
            "translationPt": "Pet shop / Loja de animais"
          }
        ],
        "options": [
          "Hardware Store",
          "Castle",
          "Police Station",
          "Pet Shop"
        ],
        "correctAnswer": "Castle",
        "explanation": "Exemplo prático: \"The medieval stone castle stands on the hill.\"",
        "phoneticHint": "/ˈkæs.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lighthouse",
        "visualEmoji": "🗼",
        "visualOptions": [
          {
            "text": "Lighthouse",
            "emoji": "🗼",
            "label": "Lighthouse",
            "translationPt": "Farol / Torre"
          },
          {
            "text": "Barber Shop",
            "emoji": "💈",
            "label": "Barber Shop",
            "translationPt": "Barbearia / Salão"
          },
          {
            "text": "Jewelry Store",
            "emoji": "💎",
            "label": "Jewelry Store",
            "translationPt": "Joalheria"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          }
        ],
        "options": [
          "Lighthouse",
          "Barber Shop",
          "Jewelry Store",
          "House"
        ],
        "correctAnswer": "Lighthouse",
        "explanation": "Exemplo prático: \"The coastal tower guides ships safely at night.\"",
        "phoneticHint": "/ˈlaɪt.haʊs/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p14",
    "worldId": 0,
    "phaseNumber": 14,
    "title": "Cidade & Cotidiano II: Transportes & Viagem",
    "subtitle": "Módulo 2/4 • 30 veículos e meios de transporte do comum ao incomum",
    "pedagogicalObjective": "Reconhecer todos os meios de transporte terrestres, aéreos, marítimos e infraestrutura.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Domine os 30 meios de transporte e elementos de tráfego urbano.",
      "Desde Car (/kɑːr/), Bus (/bʌs/) e Bicycle (/ˈbaɪ.sɪ.kəl/) até Helicopter (/ˈhel.ɪˌkɑːp.tər/) e Rocket (/ˈrɑː.kɪt/).",
      "Repare como cada veículo possui uma representação gráfica única."
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p14-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Roller Skate",
            "emoji": "🛼",
            "label": "Roller Skate",
            "translationPt": "Patins"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco a vela"
          }
        ],
        "options": [
          "Roller Skate",
          "Car",
          "Helicopter",
          "Boat"
        ],
        "correctAnswer": "Car",
        "explanation": "Exemplo prático: \"Drive the red car carefully on the road.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Bus",
        "visualEmoji": "🚌",
        "visualOptions": [
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
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
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator"
          }
        ],
        "options": [
          "Bus",
          "Truck",
          "Taxi",
          "Tractor"
        ],
        "correctAnswer": "Bus",
        "explanation": "Exemplo prático: \"Take the city bus to downtown.\"",
        "phoneticHint": "/bʌs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Bicycle",
        "visualEmoji": "🚲",
        "visualOptions": [
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
            "translationPt": "Semáforo / Sinal"
          },
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          }
        ],
        "options": [
          "Ambulance",
          "Traffic Light",
          "Anchor",
          "Bicycle"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "Exemplo prático: \"Riding a bicycle is great exercise.\"",
        "phoneticHint": "/ˈbaɪ.sɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Train",
        "visualEmoji": "🚆",
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
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô"
          }
        ],
        "options": [
          "Scooter",
          "Skateboard",
          "Train",
          "Subway"
        ],
        "correctAnswer": "Train",
        "explanation": "Exemplo prático: \"The express train arrives at the platform on time.\"",
        "phoneticHint": "/treɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Airplane",
        "visualEmoji": "✈️",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
          },
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível"
          }
        ],
        "options": [
          "Car",
          "Airplane",
          "Fire Truck",
          "Fuel Pump"
        ],
        "correctAnswer": "Airplane",
        "explanation": "Exemplo prático: \"The commercial airplane flies above the clouds.\"",
        "phoneticHint": "/ˈer.pleɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Boat",
        "visualEmoji": "⛵",
        "visualOptions": [
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco a vela"
          },
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Canoe",
            "emoji": "🛶",
            "label": "Canoe",
            "translationPt": "Canoa / Caiaque"
          },
          {
            "text": "Cable Car",
            "emoji": "🚡",
            "label": "Cable Car",
            "translationPt": "Bondinho / Teleférico"
          }
        ],
        "options": [
          "Boat",
          "Rocket",
          "Canoe",
          "Cable Car"
        ],
        "correctAnswer": "Boat",
        "explanation": "Exemplo prático: \"A white sailboat glides across the bay.\"",
        "phoneticHint": "/boʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ship",
        "visualEmoji": "🚢",
        "visualOptions": [
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Compass",
            "emoji": "🧭",
            "label": "Compass",
            "translationPt": "Bússola"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          }
        ],
        "options": [
          "Bus",
          "Bicycle",
          "Compass",
          "Ship"
        ],
        "correctAnswer": "Ship",
        "explanation": "Exemplo prático: \"The large passenger ship crosses the Atlantic Ocean.\"",
        "phoneticHint": "/ʃɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Motorcycle",
        "visualEmoji": "🏍️",
        "visualOptions": [
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Motocicleta / Moto"
          },
          {
            "text": "Speedboat",
            "emoji": "🚤",
            "label": "Speedboat",
            "translationPt": "Lancha"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem"
          }
        ],
        "options": [
          "Motorcycle",
          "Speedboat",
          "Suitcase",
          "Train"
        ],
        "correctAnswer": "Motorcycle",
        "explanation": "Exemplo prático: \"Always wear a helmet when riding a motorcycle.\"",
        "phoneticHint": "/ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Truck",
        "visualEmoji": "🚚",
        "visualOptions": [
          {
            "text": "Motor Scooter",
            "emoji": "🛵",
            "label": "Motor Scooter",
            "translationPt": "Motoneta / Lambreta"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          },
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
          }
        ],
        "options": [
          "Motor Scooter",
          "Truck",
          "Police Car",
          "Airplane"
        ],
        "correctAnswer": "Truck",
        "explanation": "Exemplo prático: \"The delivery truck carries fresh goods.\"",
        "phoneticHint": "/trʌk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Taxi",
        "visualEmoji": "🚕",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete"
          },
          {
            "text": "Parachute",
            "emoji": "🪂",
            "label": "Parachute",
            "translationPt": "Paraquedas"
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
          "Scooter",
          "Parachute",
          "Taxi",
          "Skateboard"
        ],
        "correctAnswer": "Taxi",
        "explanation": "Exemplo prático: \"Hail a yellow taxi outside the station.\"",
        "phoneticHint": "/ˈtæk.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Subway",
        "visualEmoji": "🚇",
        "visualOptions": [
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
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
          "Fuel Pump",
          "Car",
          "Ship",
          "Subway"
        ],
        "correctAnswer": "Subway",
        "explanation": "Exemplo prático: \"The underground subway is fast during rush hour.\"",
        "phoneticHint": "/ˈsʌb.weɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ambulance",
        "visualEmoji": "🚑",
        "visualOptions": [
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
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
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Motocicleta / Moto"
          }
        ],
        "options": [
          "Ambulance",
          "Bicycle",
          "Bus",
          "Motorcycle"
        ],
        "correctAnswer": "Ambulance",
        "explanation": "Exemplo prático: \"Make way for the emergency ambulance.\"",
        "phoneticHint": "/ˈæm.bjə.ləns/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fire Truck",
        "visualEmoji": "🚒",
        "visualOptions": [
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco a vela"
          },
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Roller Skate",
            "emoji": "🛼",
            "label": "Roller Skate",
            "translationPt": "Patins"
          }
        ],
        "options": [
          "Boat",
          "Rocket",
          "Fire Truck",
          "Roller Skate"
        ],
        "correctAnswer": "Fire Truck",
        "explanation": "Exemplo prático: \"The red fire truck has a long ladder.\"",
        "phoneticHint": "/ˈfaɪ.ər trʌk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Police Car",
        "visualEmoji": "🚓",
        "visualOptions": [
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
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
          "Anchor",
          "Airplane",
          "Police Car",
          "Train"
        ],
        "correctAnswer": "Police Car",
        "explanation": "Exemplo prático: \"The police car patrols the neighborhood.\"",
        "phoneticHint": "/pəˈliːs kɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Helicopter",
        "visualEmoji": "🚁",
        "visualOptions": [
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
            "text": "Parachute",
            "emoji": "🪂",
            "label": "Parachute",
            "translationPt": "Paraquedas"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          }
        ],
        "options": [
          "Truck",
          "Taxi",
          "Parachute",
          "Helicopter"
        ],
        "correctAnswer": "Helicopter",
        "explanation": "Exemplo prático: \"The rescue helicopter hovered over the water.\"",
        "phoneticHint": "/ˈhel.ɪˌkɑːp.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e16",
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
            "text": "Compass",
            "emoji": "🧭",
            "label": "Compass",
            "translationPt": "Bússola"
          },
          {
            "text": "Cable Car",
            "emoji": "🚡",
            "label": "Cable Car",
            "translationPt": "Bondinho / Teleférico"
          },
          {
            "text": "Canoe",
            "emoji": "🛶",
            "label": "Canoe",
            "translationPt": "Canoa / Caiaque"
          }
        ],
        "options": [
          "Tractor",
          "Compass",
          "Cable Car",
          "Canoe"
        ],
        "correctAnswer": "Tractor",
        "explanation": "Exemplo prático: \"The farmer plows the field with a green tractor.\"",
        "phoneticHint": "/ˈtræk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Scooter",
        "visualEmoji": "🛴",
        "visualOptions": [
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô"
          },
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          }
        ],
        "options": [
          "Fire Truck",
          "Subway",
          "Scooter",
          "Ship"
        ],
        "correctAnswer": "Scooter",
        "explanation": "Exemplo prático: \"Kids ride kick scooters in the park.\"",
        "phoneticHint": "/ˈskuː.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Motor Scooter",
        "visualEmoji": "🛵",
        "visualOptions": [
          {
            "text": "Motor Scooter",
            "emoji": "🛵",
            "label": "Motor Scooter",
            "translationPt": "Motoneta / Lambreta"
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
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Motocicleta / Moto"
          }
        ],
        "options": [
          "Motor Scooter",
          "Police Car",
          "Suitcase",
          "Motorcycle"
        ],
        "correctAnswer": "Motor Scooter",
        "explanation": "Exemplo prático: \"A compact motor scooter is easy to park.\"",
        "phoneticHint": "/ˈmoʊ.tər ˈskuː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Skateboard",
        "visualEmoji": "🛹",
        "visualOptions": [
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal"
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
            "text": "Skateboard",
            "emoji": "🛹",
            "label": "Skateboard",
            "translationPt": "Skate"
          }
        ],
        "options": [
          "Traffic Light",
          "Ambulance",
          "Helicopter",
          "Skateboard"
        ],
        "correctAnswer": "Skateboard",
        "explanation": "Exemplo prático: \"He practiced tricks on his wooden skateboard.\"",
        "phoneticHint": "/ˈskeɪt.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Roller Skate",
        "visualEmoji": "🛼",
        "visualOptions": [
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
            "translationPt": "Âncora"
          },
          {
            "text": "Roller Skate",
            "emoji": "🛼",
            "label": "Roller Skate",
            "translationPt": "Patins"
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator"
          }
        ],
        "options": [
          "Airplane",
          "Anchor",
          "Roller Skate",
          "Tractor"
        ],
        "correctAnswer": "Roller Skate",
        "explanation": "Exemplo prático: \"She glides smoothly on four-wheel roller skates.\"",
        "phoneticHint": "/ˈroʊ.lər skeɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Canoe",
        "visualEmoji": "🛶",
        "visualOptions": [
          {
            "text": "Scooter",
            "emoji": "🛴",
            "label": "Scooter",
            "translationPt": "Patinete"
          },
          {
            "text": "Canoe",
            "emoji": "🛶",
            "label": "Canoe",
            "translationPt": "Canoa / Caiaque"
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
          "Scooter",
          "Canoe",
          "Ship",
          "Subway"
        ],
        "correctAnswer": "Canoe",
        "explanation": "Exemplo prático: \"Paddle the wooden canoe down the calm river.\"",
        "phoneticHint": "/kəˈnuː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Speedboat",
        "visualEmoji": "🚤",
        "visualOptions": [
          {
            "text": "Speedboat",
            "emoji": "🚤",
            "label": "Speedboat",
            "translationPt": "Lancha"
          },
          {
            "text": "Motor Scooter",
            "emoji": "🛵",
            "label": "Motor Scooter",
            "translationPt": "Motoneta / Lambreta"
          },
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível"
          }
        ],
        "options": [
          "Speedboat",
          "Motor Scooter",
          "Fire Truck",
          "Fuel Pump"
        ],
        "correctAnswer": "Speedboat",
        "explanation": "Exemplo prático: \"The fast speedboat skims across the waves.\"",
        "phoneticHint": "/ˈspiːd.boʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Rocket",
        "visualEmoji": "🚀",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
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
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          }
        ],
        "options": [
          "Car",
          "Compass",
          "Skateboard",
          "Rocket"
        ],
        "correctAnswer": "Rocket",
        "explanation": "Exemplo prático: \"The space rocket launched into orbit.\"",
        "phoneticHint": "/ˈrɑː.kɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Parachute",
        "visualEmoji": "🪂",
        "visualOptions": [
          {
            "text": "Parachute",
            "emoji": "🪂",
            "label": "Parachute",
            "translationPt": "Paraquedas"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          }
        ],
        "options": [
          "Parachute",
          "Bus",
          "Bicycle",
          "Helicopter"
        ],
        "correctAnswer": "Parachute",
        "explanation": "Exemplo prático: \"The skydiver opened a colorful parachute.\"",
        "phoneticHint": "/ˈpær.ə.ʃuːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cable Car",
        "visualEmoji": "🚡",
        "visualOptions": [
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Cable Car",
            "emoji": "🚡",
            "label": "Cable Car",
            "translationPt": "Bondinho / Teleférico"
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
          "Taxi",
          "Cable Car",
          "Train",
          "Truck"
        ],
        "correctAnswer": "Cable Car",
        "explanation": "Exemplo prático: \"Take the mountain cable car for a panoramic view.\"",
        "phoneticHint": "/ˈkeɪ.bəl kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Traffic Light",
        "visualEmoji": "🚦",
        "visualOptions": [
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal"
          },
          {
            "text": "Speedboat",
            "emoji": "🚤",
            "label": "Speedboat",
            "translationPt": "Lancha"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Tractor",
            "emoji": "🚜",
            "label": "Tractor",
            "translationPt": "Trator"
          }
        ],
        "options": [
          "Traffic Light",
          "Speedboat",
          "Ambulance",
          "Tractor"
        ],
        "correctAnswer": "Traffic Light",
        "explanation": "Exemplo prático: \"Stop the vehicle when the traffic light turns red.\"",
        "phoneticHint": "/ˈtræf.ɪk laɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Fuel Pump",
        "visualEmoji": "⛽",
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
            "translationPt": "Motocicleta / Moto"
          },
          {
            "text": "Motor Scooter",
            "emoji": "🛵",
            "label": "Motor Scooter",
            "translationPt": "Motoneta / Lambreta"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível"
          }
        ],
        "options": [
          "Police Car",
          "Motorcycle",
          "Motor Scooter",
          "Fuel Pump"
        ],
        "correctAnswer": "Fuel Pump",
        "explanation": "Exemplo prático: \"Fill up the tank at the gas station fuel pump.\"",
        "phoneticHint": "/ˈfjuː.əl pʌmp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Anchor",
        "visualEmoji": "⚓",
        "visualOptions": [
          {
            "text": "Anchor",
            "emoji": "⚓",
            "label": "Anchor",
            "translationPt": "Âncora"
          },
          {
            "text": "Parachute",
            "emoji": "🪂",
            "label": "Parachute",
            "translationPt": "Paraquedas"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco a vela"
          },
          {
            "text": "Canoe",
            "emoji": "🛶",
            "label": "Canoe",
            "translationPt": "Canoa / Caiaque"
          }
        ],
        "options": [
          "Anchor",
          "Parachute",
          "Boat",
          "Canoe"
        ],
        "correctAnswer": "Anchor",
        "explanation": "Exemplo prático: \"Drop the heavy iron anchor in the harbor.\"",
        "phoneticHint": "/ˈæŋ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Suitcase",
        "visualEmoji": "🧳",
        "visualOptions": [
          {
            "text": "Roller Skate",
            "emoji": "🛼",
            "label": "Roller Skate",
            "translationPt": "Patins"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem"
          },
          {
            "text": "Cable Car",
            "emoji": "🚡",
            "label": "Cable Car",
            "translationPt": "Bondinho / Teleférico"
          },
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          }
        ],
        "options": [
          "Roller Skate",
          "Suitcase",
          "Cable Car",
          "Rocket"
        ],
        "correctAnswer": "Suitcase",
        "explanation": "Exemplo prático: \"Pack your clothes neatly in a rolling suitcase.\"",
        "phoneticHint": "/ˈsuːt.keɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Compass",
        "visualEmoji": "🧭",
        "visualOptions": [
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal"
          },
          {
            "text": "Speedboat",
            "emoji": "🚤",
            "label": "Speedboat",
            "translationPt": "Lancha"
          },
          {
            "text": "Compass",
            "emoji": "🧭",
            "label": "Compass",
            "translationPt": "Bússola"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          }
        ],
        "options": [
          "Traffic Light",
          "Speedboat",
          "Compass",
          "Helicopter"
        ],
        "correctAnswer": "Compass",
        "explanation": "Exemplo prático: \"The magnetic compass needle always points north.\"",
        "phoneticHint": "/ˈkʌm.pəs/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p15",
    "worldId": 0,
    "phaseNumber": 15,
    "title": "Cidade & Cotidiano III: Roupas, Calçados & Estilo",
    "subtitle": "Módulo 3/4 • 30 peças de vestuário e acessórios do comum ao incomum",
    "pedagogicalObjective": "Dominar o vocabulário de roupas, calçados e acessórios pessoais em inglês.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Aprender roupas e acessórios permite descrever pessoas e fazer compras em viagens.",
      "Preste atenção na pronúncia de Shirt (/ʃɜːrt/), Shoes (/ʃuːz/) e Gloves (/ɡlʌvz/).",
      "Substantivos como Pants, Jeans, Glasses e Socks são usados quase sempre no plural!"
    ],
    "xpReward": 45,
    "gemsReward": 15,
    "exercises": [
      {
        "id": "w0-p15-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shirt",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa feminina"
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
          "Shirt",
          "Handbag",
          "High Heels"
        ],
        "correctAnswer": "Shirt",
        "explanation": "Exemplo prático: \"He wears a clean cotton shirt.\"",
        "phoneticHint": "/ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          },
          {
            "text": "Kimono",
            "emoji": "👘",
            "label": "Kimono",
            "translationPt": "Quimono"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          }
        ],
        "options": [
          "Pants",
          "Necktie",
          "Kimono",
          "Helmet"
        ],
        "correctAnswer": "Pants",
        "explanation": "Exemplo prático: \"Blue denim pants are comfortable for work.\"",
        "phoneticHint": "/pænts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Shoes",
        "visualEmoji": "👞",
        "visualOptions": [
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          }
        ],
        "options": [
          "Glasses",
          "Gloves",
          "Watch",
          "Shoes"
        ],
        "correctAnswer": "Shoes",
        "explanation": "Exemplo prático: \"Polish your leather dress shoes.\"",
        "phoneticHint": "/ʃuːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sneakers",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
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
          "Sneakers",
          "Sunglasses",
          "Scarf",
          "Socks"
        ],
        "correctAnswer": "Sneakers",
        "explanation": "Exemplo prático: \"Wear comfortable running sneakers for the walk.\"",
        "phoneticHint": "/ˈsniː.kərz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Dress",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Sandálias / Chinelos"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Crown",
          "Dress",
          "Sandals",
          "Shirt"
        ],
        "correctAnswer": "Dress",
        "explanation": "Exemplo prático: \"She bought a summer dress for the party.\"",
        "phoneticHint": "/dres/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Coat",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança"
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
          },
          {
            "text": "Lab Coat",
            "emoji": "🥼",
            "label": "Lab Coat",
            "translationPt": "Jaleco branco"
          }
        ],
        "options": [
          "Ring",
          "Umbrella",
          "Coat",
          "Lab Coat"
        ],
        "correctAnswer": "Coat",
        "explanation": "Exemplo prático: \"Put on a heavy winter coat before going out in the snow.\"",
        "phoneticHint": "/koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hat",
        "visualEmoji": "👒",
        "visualOptions": [
          {
            "text": "Ballet Shoes",
            "emoji": "🩰",
            "label": "Ballet Shoes",
            "translationPt": "Sapatilhas de balé"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          }
        ],
        "options": [
          "Ballet Shoes",
          "Shoes",
          "Boots",
          "Hat"
        ],
        "correctAnswer": "Hat",
        "explanation": "Exemplo prático: \"A wide straw hat protects your face from the sun.\"",
        "phoneticHint": "/hæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Cap",
        "visualEmoji": "🧢",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Swimsuit",
            "emoji": "🩱",
            "label": "Swimsuit",
            "translationPt": "Maiô / Roupa de banho"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermudas"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          }
        ],
        "options": [
          "Cap",
          "Swimsuit",
          "Shorts",
          "Sneakers"
        ],
        "correctAnswer": "Cap",
        "explanation": "Exemplo prático: \"He wears a blue baseball cap.\"",
        "phoneticHint": "/kæp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Socks",
        "visualEmoji": "🧦",
        "visualOptions": [
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Safety Vest",
            "emoji": "🦺",
            "label": "Safety Vest",
            "translationPt": "Colete refletivo"
          }
        ],
        "options": [
          "Dress",
          "Pants",
          "Socks",
          "Safety Vest"
        ],
        "correctAnswer": "Socks",
        "explanation": "Exemplo prático: \"Warm wool socks keep your feet cozy.\"",
        "phoneticHint": "/sɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
        "visualOptions": [
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          },
          {
            "text": "Purse",
            "emoji": "👛",
            "label": "Purse",
            "translationPt": "Carteira / Bolsinha"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Glasses",
          "Coat",
          "Purse",
          "Shirt"
        ],
        "correctAnswer": "Glasses",
        "explanation": "Exemplo prático: \"She puts on her reading glasses to read the book.\"",
        "phoneticHint": "/ˈɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Sunglasses",
        "visualEmoji": "🕶️",
        "visualOptions": [
          {
            "text": "Lab Coat",
            "emoji": "🥼",
            "label": "Lab Coat",
            "translationPt": "Jaleco branco"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          },
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol"
          }
        ],
        "options": [
          "Lab Coat",
          "Shoes",
          "Crown",
          "Sunglasses"
        ],
        "correctAnswer": "Sunglasses",
        "explanation": "Exemplo prático: \"Wear dark sunglasses on a bright beach day.\"",
        "phoneticHint": "/ˈsʌnˌɡlæs.ɪz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Watch",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Ballet Shoes",
            "emoji": "🩰",
            "label": "Ballet Shoes",
            "translationPt": "Sapatilhas de balé"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          }
        ],
        "options": [
          "Boots",
          "Ballet Shoes",
          "Watch",
          "Cap"
        ],
        "correctAnswer": "Watch",
        "explanation": "Exemplo prático: \"He checked the time on his wristwatch.\"",
        "phoneticHint": "/wɑːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Umbrella",
        "visualEmoji": "☂️",
        "visualOptions": [
          {
            "text": "Kimono",
            "emoji": "👘",
            "label": "Kimono",
            "translationPt": "Quimono"
          },
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          }
        ],
        "options": [
          "Kimono",
          "High Heels",
          "Umbrella",
          "Hat"
        ],
        "correctAnswer": "Umbrella",
        "explanation": "Exemplo prático: \"Take an umbrella in case it rains today.\"",
        "phoneticHint": "/ʌmˈbrel.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
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
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa feminina"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          }
        ],
        "options": [
          "Gloves",
          "Handbag",
          "Dress",
          "Helmet"
        ],
        "correctAnswer": "Gloves",
        "explanation": "Exemplo prático: \"Wear knitted gloves in freezing weather.\"",
        "phoneticHint": "/ɡlʌvz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Scarf",
        "visualEmoji": "🧣",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Purse",
            "emoji": "👛",
            "label": "Purse",
            "translationPt": "Carteira / Bolsinha"
          },
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol"
          }
        ],
        "options": [
          "Pants",
          "Glasses",
          "Purse",
          "Scarf"
        ],
        "correctAnswer": "Scarf",
        "explanation": "Exemplo prático: \"Wrap a warm red scarf around your neck.\"",
        "phoneticHint": "/skɑːrf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Necktie",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          }
        ],
        "options": [
          "Cap",
          "Sneakers",
          "Necktie",
          "Coat"
        ],
        "correctAnswer": "Necktie",
        "explanation": "Exemplo prático: \"He wore a silk necktie with his business suit.\"",
        "phoneticHint": "/ˈnek.taɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Boots",
        "visualEmoji": "🥾",
        "visualOptions": [
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
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
          }
        ],
        "options": [
          "Sunglasses",
          "Boots",
          "Ring",
          "Socks"
        ],
        "correctAnswer": "Boots",
        "explanation": "Exemplo prático: \"Sturdy hiking boots are essential on mountain trails.\"",
        "phoneticHint": "/buːts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
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
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Safety Vest",
            "emoji": "🦺",
            "label": "Safety Vest",
            "translationPt": "Colete refletivo"
          },
          {
            "text": "Gloves",
            "emoji": "🧤",
            "label": "Gloves",
            "translationPt": "Luvas"
          }
        ],
        "options": [
          "High Heels",
          "Umbrella",
          "Safety Vest",
          "Gloves"
        ],
        "correctAnswer": "High Heels",
        "explanation": "Exemplo prático: \"She wore elegant red high heels.\"",
        "phoneticHint": "/ˌhaɪ ˈhiːlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sandals",
        "visualEmoji": "🩴",
        "visualOptions": [
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
            "text": "Kimono",
            "emoji": "👘",
            "label": "Kimono",
            "translationPt": "Quimono"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Sandálias / Chinelos"
          }
        ],
        "options": [
          "Scarf",
          "Watch",
          "Kimono",
          "Sandals"
        ],
        "correctAnswer": "Sandals",
        "explanation": "Exemplo prático: \"Wear light rubber sandals by the swimming pool.\"",
        "phoneticHint": "/ˈsæn.dəlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Shorts",
        "visualEmoji": "🩳",
        "visualOptions": [
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermudas"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          }
        ],
        "options": [
          "Shorts",
          "Glasses",
          "Dress",
          "Necktie"
        ],
        "correctAnswer": "Shorts",
        "explanation": "Exemplo prático: \"Light athletic shorts are great for running.\"",
        "phoneticHint": "/ʃɔːrts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Swimsuit",
        "visualEmoji": "🩱",
        "visualOptions": [
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Swimsuit",
            "emoji": "🩱",
            "label": "Swimsuit",
            "translationPt": "Maiô / Roupa de banho"
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
          }
        ],
        "options": [
          "Shirt",
          "Swimsuit",
          "Sneakers",
          "Shoes"
        ],
        "correctAnswer": "Swimsuit",
        "explanation": "Exemplo prático: \"Pack your swimsuit for the trip to the lake.\"",
        "phoneticHint": "/ˈswɪm.suːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Handbag",
        "visualEmoji": "👜",
        "visualOptions": [
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
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa feminina"
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
          "Coat",
          "Handbag",
          "Socks"
        ],
        "correctAnswer": "Handbag",
        "explanation": "Exemplo prático: \"She carries her keys and wallet in a leather handbag.\"",
        "phoneticHint": "/ˈhænd.bæɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Purse",
        "visualEmoji": "👛",
        "visualOptions": [
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Lab Coat",
            "emoji": "🥼",
            "label": "Lab Coat",
            "translationPt": "Jaleco branco"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Sandálias / Chinelos"
          },
          {
            "text": "Purse",
            "emoji": "👛",
            "label": "Purse",
            "translationPt": "Carteira / Bolsinha"
          }
        ],
        "options": [
          "Umbrella",
          "Lab Coat",
          "Sandals",
          "Purse"
        ],
        "correctAnswer": "Purse",
        "explanation": "Exemplo prático: \"Keep your coins inside a small clasp purse.\"",
        "phoneticHint": "/pɜːrs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ring",
        "visualEmoji": "💍",
        "visualOptions": [
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          },
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermudas"
          }
        ],
        "options": [
          "Ring",
          "Hat",
          "High Heels",
          "Shorts"
        ],
        "correctAnswer": "Ring",
        "explanation": "Exemplo prático: \"A gold wedding ring with a diamond.\"",
        "phoneticHint": "/rɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Crown",
        "visualEmoji": "👑",
        "visualOptions": [
          {
            "text": "Swimsuit",
            "emoji": "🩱",
            "label": "Swimsuit",
            "translationPt": "Maiô / Roupa de banho"
          },
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          }
        ],
        "options": [
          "Swimsuit",
          "Crown",
          "Necktie",
          "Watch"
        ],
        "correctAnswer": "Crown",
        "explanation": "Exemplo prático: \"The royal crown is made of gold and jewels.\"",
        "phoneticHint": "/kraʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Helmet",
        "visualEmoji": "⛑️",
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
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          }
        ],
        "options": [
          "Handbag",
          "Gloves",
          "Helmet",
          "Boots"
        ],
        "correctAnswer": "Helmet",
        "explanation": "Exemplo prático: \"Rescue workers wear protective helmets.\"",
        "phoneticHint": "/ˈhel.mət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Safety Vest",
        "visualEmoji": "🦺",
        "visualOptions": [
          {
            "text": "Scarf",
            "emoji": "🧣",
            "label": "Scarf",
            "translationPt": "Cachecol"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Sandálias / Chinelos"
          },
          {
            "text": "Sunglasses",
            "emoji": "🕶️",
            "label": "Sunglasses",
            "translationPt": "Óculos de sol"
          },
          {
            "text": "Safety Vest",
            "emoji": "🦺",
            "label": "Safety Vest",
            "translationPt": "Colete refletivo"
          }
        ],
        "options": [
          "Scarf",
          "Sandals",
          "Sunglasses",
          "Safety Vest"
        ],
        "correctAnswer": "Safety Vest",
        "explanation": "Exemplo prático: \"Construction workers wear a bright orange safety vest.\"",
        "phoneticHint": "/ˈseɪf.ti vest/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lab Coat",
        "visualEmoji": "🥼",
        "visualOptions": [
          {
            "text": "Lab Coat",
            "emoji": "🥼",
            "label": "Lab Coat",
            "translationPt": "Jaleco branco"
          },
          {
            "text": "Purse",
            "emoji": "👛",
            "label": "Purse",
            "translationPt": "Carteira / Bolsinha"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermudas"
          }
        ],
        "options": [
          "Lab Coat",
          "Purse",
          "Pants",
          "Shorts"
        ],
        "correctAnswer": "Lab Coat",
        "explanation": "Exemplo prático: \"The scientist wears a clean white lab coat.\"",
        "phoneticHint": "/ˈlæb koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Kimono",
        "visualEmoji": "👘",
        "visualOptions": [
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Anel / Aliança"
          },
          {
            "text": "Swimsuit",
            "emoji": "🩱",
            "label": "Swimsuit",
            "translationPt": "Maiô / Roupa de banho"
          },
          {
            "text": "Kimono",
            "emoji": "👘",
            "label": "Kimono",
            "translationPt": "Quimono"
          },
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa"
          }
        ],
        "options": [
          "Ring",
          "Swimsuit",
          "Kimono",
          "Crown"
        ],
        "correctAnswer": "Kimono",
        "explanation": "Exemplo prático: \"A traditional silk kimono from Japan.\"",
        "phoneticHint": "/kɪˈmoʊ.noʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Ballet Shoes",
        "visualEmoji": "🩰",
        "visualOptions": [
          {
            "text": "Ballet Shoes",
            "emoji": "🩰",
            "label": "Ballet Shoes",
            "translationPt": "Sapatilhas de balé"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          },
          {
            "text": "Hat",
            "emoji": "👒",
            "label": "Hat",
            "translationPt": "Chapéu"
          }
        ],
        "options": [
          "Ballet Shoes",
          "Necktie",
          "Helmet",
          "Hat"
        ],
        "correctAnswer": "Ballet Shoes",
        "explanation": "Exemplo prático: \"The dancer tied the ribbons of her pink ballet shoes.\"",
        "phoneticHint": "/bæˈleɪ ʃuːz/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p16",
    "worldId": 0,
    "phaseNumber": 16,
    "title": "Cidade & Cotidiano IV: Corpo, Esportes & Profissões",
    "subtitle": "Módulo 4/4 • 30 palavras de corpo humano, esportes e carreiras",
    "pedagogicalObjective": "Consolidar o domínio dos 4 blocos de vocabulário com 30 termos de corpo humano, esportes e profissões.",
    "type": "boss",
    "icon": "swords",
    "cefrLevel": "A1",
    "theorySummary": [
      "Parabéns por chegar ao 16º módulo de 30 palavras (480 termos essenciais dominados)!",
      "Aqui você domina partes do corpo, esportes olímpicos e profissões fundamentais.",
      "Acerte 100% dos itens (corrigindo eventuais erros no final) para conquistar o Troféu Mestre do Vocabulário!"
    ],
    "xpReward": 80,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p16-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Heart",
            "emoji": "🫀",
            "label": "Heart",
            "translationPt": "Coração"
          }
        ],
        "options": [
          "Hand",
          "Doctor",
          "Eye",
          "Heart"
        ],
        "correctAnswer": "Doctor",
        "explanation": "Exemplo prático: \"The doctor works at the community hospital.\"",
        "phoneticHint": "/ˈdɑːk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Teacher",
        "visualEmoji": "👩‍🏫",
        "visualOptions": [
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis (esporte)"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
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
            "translationPt": "Troféu"
          }
        ],
        "options": [
          "Tennis",
          "Tooth",
          "Teacher",
          "Trophy"
        ],
        "correctAnswer": "Teacher",
        "explanation": "Exemplo prático: \"Our English teacher explains every word clearly.\"",
        "phoneticHint": "/ˈtiː.tʃər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chef",
        "visualEmoji": "👨‍🍳",
        "visualOptions": [
          {
            "text": "American Football",
            "emoji": "🏈",
            "label": "American Football",
            "translationPt": "Futebol americano"
          },
          {
            "text": "Archery Bow",
            "emoji": "🏹",
            "label": "Archery Bow",
            "translationPt": "Arco e flecha"
          },
          {
            "text": "Gold Medal",
            "emoji": "🥇",
            "label": "Gold Medal",
            "translationPt": "Medalha de ouro"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          }
        ],
        "options": [
          "American Football",
          "Archery Bow",
          "Gold Medal",
          "Chef"
        ],
        "correctAnswer": "Chef",
        "explanation": "Exemplo prático: \"The chef prepares fresh meals in the restaurant.\"",
        "phoneticHint": "/ʃef/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Police Officer",
        "visualEmoji": "👮",
        "visualOptions": [
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
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
            "translationPt": "Vôlei"
          }
        ],
        "options": [
          "Police Officer",
          "Mouth",
          "Soccer Ball",
          "Volleyball"
        ],
        "correctAnswer": "Police Officer",
        "explanation": "Exemplo prático: \"The police officer helps keep the streets safe.\"",
        "phoneticHint": "/pəˈliːs ˌɔː.fɪ.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Firefighter",
        "visualEmoji": "🧑‍🚒",
        "visualOptions": [
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Chess Pawn",
            "emoji": "♟️",
            "label": "Chess Pawn",
            "translationPt": "Peça de xadrez"
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
          }
        ],
        "options": [
          "Foot",
          "Chess Pawn",
          "Firefighter",
          "Fishing Rod"
        ],
        "correctAnswer": "Firefighter",
        "explanation": "Exemplo prático: \"Brave firefighters put out the fire.\"",
        "phoneticHint": "/ˈfaɪ.ərˌfaɪ.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Farmer",
        "visualEmoji": "🧑‍🌾",
        "visualOptions": [
          {
            "text": "Farmer",
            "emoji": "🧑‍🌾",
            "label": "Farmer",
            "translationPt": "Fazendeiro / Agricultor"
          },
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle",
            "translationPt": "Músculo / Força"
          },
          {
            "text": "Lungs",
            "emoji": "🫁",
            "label": "Lungs",
            "translationPt": "Pulmões"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico"
          }
        ],
        "options": [
          "Farmer",
          "Muscle",
          "Lungs",
          "Doctor"
        ],
        "correctAnswer": "Farmer",
        "explanation": "Exemplo prático: \"The farmer harvests fresh vegetables.\"",
        "phoneticHint": "/ˈfɑːr.mər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Eye",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete / Bola de basquete"
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
          }
        ],
        "options": [
          "Brain",
          "Basketball",
          "Bone",
          "Eye"
        ],
        "correctAnswer": "Eye",
        "explanation": "Exemplo prático: \"Blink your eye to keep it moist.\"",
        "phoneticHint": "/aɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Ear",
        "visualEmoji": "👂",
        "visualOptions": [
          {
            "text": "Baseball",
            "emoji": "⚾",
            "label": "Baseball",
            "translationPt": "Beisebol"
          },
          {
            "text": "Boxing Glove",
            "emoji": "🥊",
            "label": "Boxing Glove",
            "translationPt": "Luva de boxe"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          }
        ],
        "options": [
          "Baseball",
          "Boxing Glove",
          "Ear",
          "Teacher"
        ],
        "correctAnswer": "Ear",
        "explanation": "Exemplo prático: \"Listen carefully with your ear.\"",
        "phoneticHint": "/ɪr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Nose",
        "visualEmoji": "👃",
        "visualOptions": [
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          }
        ],
        "options": [
          "Police Officer",
          "Nose",
          "Firefighter",
          "Chef"
        ],
        "correctAnswer": "Nose",
        "explanation": "Exemplo prático: \"Breathe fresh air through your nose.\"",
        "phoneticHint": "/noʊz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Farmer",
            "emoji": "🧑‍🌾",
            "label": "Farmer",
            "translationPt": "Fazendeiro / Agricultor"
          },
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Vôlei"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          }
        ],
        "options": [
          "Mouth",
          "Farmer",
          "Volleyball",
          "Soccer Ball"
        ],
        "correctAnswer": "Mouth",
        "explanation": "Exemplo prático: \"Open your mouth to pronounce the vowel.\"",
        "phoneticHint": "/maʊθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Lungs",
            "emoji": "🫁",
            "label": "Lungs",
            "translationPt": "Pulmões"
          },
          {
            "text": "Fishing Rod",
            "emoji": "🎣",
            "label": "Fishing Rod",
            "translationPt": "Vara de pescar"
          },
          {
            "text": "Chess Pawn",
            "emoji": "♟️",
            "label": "Chess Pawn",
            "translationPt": "Peça de xadrez"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "Lungs",
          "Fishing Rod",
          "Chess Pawn",
          "Hand"
        ],
        "correctAnswer": "Hand",
        "explanation": "Exemplo prático: \"Raise your hand if you have a question.\"",
        "phoneticHint": "/hænd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Foot",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete / Bola de basquete"
          },
          {
            "text": "Baseball",
            "emoji": "⚾",
            "label": "Baseball",
            "translationPt": "Beisebol"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Basketball",
          "Baseball",
          "Foot",
          "Ear"
        ],
        "correctAnswer": "Foot",
        "explanation": "Exemplo prático: \"Kick the ball with your right foot.\"",
        "phoneticHint": "/fʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Heart",
        "visualEmoji": "🫀",
        "visualOptions": [
          {
            "text": "Boxing Glove",
            "emoji": "🥊",
            "label": "Boxing Glove",
            "translationPt": "Luva de boxe"
          },
          {
            "text": "Heart",
            "emoji": "🫀",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          }
        ],
        "options": [
          "Boxing Glove",
          "Heart",
          "Nose",
          "Eye"
        ],
        "correctAnswer": "Heart",
        "explanation": "Exemplo prático: \"Your heart pumps blood through the body.\"",
        "phoneticHint": "/hɑːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Brain",
        "visualEmoji": "🧠",
        "visualOptions": [
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico"
          },
          {
            "text": "American Football",
            "emoji": "🏈",
            "label": "American Football",
            "translationPt": "Futebol americano"
          },
          {
            "text": "Archery Bow",
            "emoji": "🏹",
            "label": "Archery Bow",
            "translationPt": "Arco e flecha"
          }
        ],
        "options": [
          "Brain",
          "Doctor",
          "American Football",
          "Archery Bow"
        ],
        "correctAnswer": "Brain",
        "explanation": "Exemplo prático: \"Learning a new language exercises your brain.\"",
        "phoneticHint": "/breɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tooth",
        "visualEmoji": "🦷",
        "visualOptions": [
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Gold Medal",
            "emoji": "🥇",
            "label": "Gold Medal",
            "translationPt": "Medalha de ouro"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          }
        ],
        "options": [
          "Police Officer",
          "Mouth",
          "Gold Medal",
          "Tooth"
        ],
        "correctAnswer": "Tooth",
        "explanation": "Exemplo prático: \"Brush every tooth after meals.\"",
        "phoneticHint": "/tuːθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Farmer",
            "emoji": "🧑‍🌾",
            "label": "Farmer",
            "translationPt": "Fazendeiro / Agricultor"
          },
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
          }
        ],
        "options": [
          "Bone",
          "Farmer",
          "Foot",
          "Firefighter"
        ],
        "correctAnswer": "Bone",
        "explanation": "Exemplo prático: \"Calcium keeps your bones strong.\"",
        "phoneticHint": "/boʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Muscle",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          },
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle",
            "translationPt": "Músculo / Força"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          }
        ],
        "options": [
          "Chef",
          "Muscle",
          "Trophy",
          "Teacher"
        ],
        "correctAnswer": "Muscle",
        "explanation": "Exemplo prático: \"Regular exercise builds strong muscles.\"",
        "phoneticHint": "/ˈmʌs.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Lungs",
        "visualEmoji": "🫁",
        "visualOptions": [
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Lungs",
            "emoji": "🫁",
            "label": "Lungs",
            "translationPt": "Pulmões"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          }
        ],
        "options": [
          "Brain",
          "Ear",
          "Lungs",
          "Nose"
        ],
        "correctAnswer": "Lungs",
        "explanation": "Exemplo prático: \"Take a deep breath to fill your lungs with oxygen.\"",
        "phoneticHint": "/lʌŋz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soccer Ball",
        "visualEmoji": "⚽",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Heart",
            "emoji": "🫀",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          }
        ],
        "options": [
          "Hand",
          "Heart",
          "Tooth",
          "Soccer Ball"
        ],
        "correctAnswer": "Soccer Ball",
        "explanation": "Exemplo prático: \"Kick the soccer ball into the goal.\"",
        "phoneticHint": "/ˈsɑː.kər bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Basketball",
        "visualEmoji": "🏀",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete / Bola de basquete"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico"
          },
          {
            "text": "Gold Medal",
            "emoji": "🥇",
            "label": "Gold Medal",
            "translationPt": "Medalha de ouro"
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
          "Doctor",
          "Gold Medal",
          "Bone"
        ],
        "correctAnswer": "Basketball",
        "explanation": "Exemplo prático: \"Shoot the orange basketball through the hoop.\"",
        "phoneticHint": "/ˈbæs.kɪt.bɔːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Tennis",
        "visualEmoji": "🎾",
        "visualOptions": [
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle",
            "translationPt": "Músculo / Força"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis (esporte)"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          }
        ],
        "options": [
          "Muscle",
          "Mouth",
          "Tennis",
          "Police Officer"
        ],
        "correctAnswer": "Tennis",
        "explanation": "Exemplo prático: \"Hit the yellow tennis ball over the net.\"",
        "phoneticHint": "/ˈten.ɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Volleyball",
        "visualEmoji": "🏐",
        "visualOptions": [
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Vôlei"
          },
          {
            "text": "Farmer",
            "emoji": "🧑‍🌾",
            "label": "Farmer",
            "translationPt": "Fazendeiro / Agricultor"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          }
        ],
        "options": [
          "Volleyball",
          "Farmer",
          "Firefighter",
          "Foot"
        ],
        "correctAnswer": "Volleyball",
        "explanation": "Exemplo prático: \"They played beach volleyball on the sand.\"",
        "phoneticHint": "/ˈvɑː.li.bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Baseball",
        "visualEmoji": "⚾",
        "visualOptions": [
          {
            "text": "Fishing Rod",
            "emoji": "🎣",
            "label": "Fishing Rod",
            "translationPt": "Vara de pescar"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          },
          {
            "text": "Lungs",
            "emoji": "🫁",
            "label": "Lungs",
            "translationPt": "Pulmões"
          },
          {
            "text": "Baseball",
            "emoji": "⚾",
            "label": "Baseball",
            "translationPt": "Beisebol"
          }
        ],
        "options": [
          "Fishing Rod",
          "Chef",
          "Lungs",
          "Baseball"
        ],
        "correctAnswer": "Baseball",
        "explanation": "Exemplo prático: \"Catch the baseball with a leather glove.\"",
        "phoneticHint": "/ˈbeɪs.bɔːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "American Football",
        "visualEmoji": "🏈",
        "visualOptions": [
          {
            "text": "American Football",
            "emoji": "🏈",
            "label": "American Football",
            "translationPt": "Futebol americano"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Heart",
            "emoji": "🫀",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "American Football",
          "Eye",
          "Heart",
          "Hand"
        ],
        "correctAnswer": "American Football",
        "explanation": "Exemplo prático: \"Throw an oval American football pass.\"",
        "phoneticHint": "/əˈmer.ɪ.kən ˈfʊt.bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Trophy",
        "visualEmoji": "🏆",
        "visualOptions": [
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis (esporte)"
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
            "translationPt": "Troféu"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          }
        ],
        "options": [
          "Tennis",
          "Tooth",
          "Trophy",
          "Teacher"
        ],
        "correctAnswer": "Trophy",
        "explanation": "Exemplo prático: \"The champion team lifted the golden trophy.\"",
        "phoneticHint": "/ˈtroʊ.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Gold Medal",
        "visualEmoji": "🥇",
        "visualOptions": [
          {
            "text": "Gold Medal",
            "emoji": "🥇",
            "label": "Gold Medal",
            "translationPt": "Medalha de ouro"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Brain",
            "emoji": "🧠",
            "label": "Brain",
            "translationPt": "Cérebro"
          }
        ],
        "options": [
          "Gold Medal",
          "Ear",
          "Nose",
          "Brain"
        ],
        "correctAnswer": "Gold Medal",
        "explanation": "Exemplo prático: \"The athlete won a gold medal at the Olympics.\"",
        "phoneticHint": "/ˈɡoʊld ˈmed.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Boxing Glove",
        "visualEmoji": "🥊",
        "visualOptions": [
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Vôlei"
          },
          {
            "text": "Muscle",
            "emoji": "💪",
            "label": "Muscle",
            "translationPt": "Músculo / Força"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          },
          {
            "text": "Boxing Glove",
            "emoji": "🥊",
            "label": "Boxing Glove",
            "translationPt": "Luva de boxe"
          }
        ],
        "options": [
          "Volleyball",
          "Muscle",
          "Soccer Ball",
          "Boxing Glove"
        ],
        "correctAnswer": "Boxing Glove",
        "explanation": "Exemplo prático: \"The fighter trains with red boxing gloves.\"",
        "phoneticHint": "/ˈbɑːk.sɪŋ ɡlʌv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Archery Bow",
        "visualEmoji": "🏹",
        "visualOptions": [
          {
            "text": "Bone",
            "emoji": "🦴",
            "label": "Bone",
            "translationPt": "Osso"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete / Bola de basquete"
          },
          {
            "text": "Archery Bow",
            "emoji": "🏹",
            "label": "Archery Bow",
            "translationPt": "Arco e flecha"
          },
          {
            "text": "American Football",
            "emoji": "🏈",
            "label": "American Football",
            "translationPt": "Futebol americano"
          }
        ],
        "options": [
          "Bone",
          "Basketball",
          "Archery Bow",
          "American Football"
        ],
        "correctAnswer": "Archery Bow",
        "explanation": "Exemplo prático: \"Aim at the center of the target with an archery bow.\"",
        "phoneticHint": "/ˈɑːr.tʃər.i boʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na foto correta:",
        "audioPhrase": "Fishing Rod",
        "visualEmoji": "🎣",
        "visualOptions": [
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu"
          },
          {
            "text": "Fishing Rod",
            "emoji": "🎣",
            "label": "Fishing Rod",
            "translationPt": "Vara de pescar"
          },
          {
            "text": "Baseball",
            "emoji": "⚾",
            "label": "Baseball",
            "translationPt": "Beisebol"
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis (esporte)"
          }
        ],
        "options": [
          "Trophy",
          "Fishing Rod",
          "Baseball",
          "Tennis"
        ],
        "correctAnswer": "Fishing Rod",
        "explanation": "Exemplo prático: \"Cast the line into the lake with a fishing rod.\"",
        "phoneticHint": "/ˈfɪʃ.ɪŋ rɑːd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto:",
        "audioPhrase": "Chess Pawn",
        "visualEmoji": "♟️",
        "visualOptions": [
          {
            "text": "Chess Pawn",
            "emoji": "♟️",
            "label": "Chess Pawn",
            "translationPt": "Peça de xadrez"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Heart",
            "emoji": "🫀",
            "label": "Heart",
            "translationPt": "Coração"
          }
        ],
        "options": [
          "Chess Pawn",
          "Nose",
          "Hand",
          "Heart"
        ],
        "correctAnswer": "Chess Pawn",
        "explanation": "Exemplo prático: \"Move the chess pawn forward on the board.\"",
        "phoneticHint": "/ˈtʃes pɔːn/",
        "skillCategory": "vocabulary"
      }
    ]
  }
];
