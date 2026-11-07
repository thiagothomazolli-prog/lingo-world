import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = [
  {
    "id": "w0-p1",
    "worldId": 0,
    "phaseNumber": 1,
    "title": "Frutas & Alimentos Frescos",
    "subtitle": "Vocabulário de frutas e alimentos do dia a dia com imagens",
    "pedagogicalObjective": "Aprender o vocabulário básico de frutas e alimentos saudáveis associando imagens e sons.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Associe a imagem à palavra em inglês antes de ler a tradução.",
      "Frutas em inglês costumam manter nomes bem conhecidos: Apple (/ˈæp.əl/), Banana (/bəˈnæn.ə/), Orange (/ˈɒr.ɪndʒ/).",
      "Toque no cartão para escutar a pronúncia nativa de cada alimento."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p1-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Apple\"**?",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          }
        ],
        "options": [
          "Apple",
          "Grape",
          "Orange",
          "Banana"
        ],
        "correctAnswer": "Apple",
        "explanation": "🍎 **Apple** significa **Maçã** em inglês! Exemplo prático: \"I eat a fresh red apple every morning.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Banana\"** em inglês? Toque na imagem:",
        "audioPhrase": "Banana",
        "visualEmoji": "🍌",
        "visualOptions": [
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          }
        ],
        "options": [
          "Grape",
          "Banana",
          "Apple",
          "Orange"
        ],
        "correctAnswer": "Banana",
        "explanation": "🍌 **Banana** significa **Banana** em inglês! Exemplo prático: \"Monkeys love sweet yellow bananas.\"",
        "phoneticHint": "/bəˈnæn.ə/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p1-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Orange\"**:",
        "audioPhrase": "Orange",
        "visualEmoji": "🍊",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          }
        ],
        "options": [
          "Apple",
          "Orange",
          "Banana",
          "Grape"
        ],
        "correctAnswer": "Orange",
        "explanation": "🍊 **Orange** significa **Laranja** em inglês! Exemplo prático: \"Orange juice is very rich in Vitamin C.\"",
        "phoneticHint": "/ˈɒr.ɪndʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Grape\"**?",
        "audioPhrase": "Grape",
        "visualEmoji": "🍇",
        "visualOptions": [
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          }
        ],
        "options": [
          "Orange",
          "Apple",
          "Grape",
          "Banana"
        ],
        "correctAnswer": "Grape",
        "explanation": "🍇 **Grape** significa **Uva** em inglês! Exemplo prático: \"Purple grapes are sweet and refreshing.\"",
        "phoneticHint": "/ɡreɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Morango\"** em inglês? Toque na imagem:",
        "audioPhrase": "Strawberry",
        "visualEmoji": "🍓",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          }
        ],
        "options": [
          "Apple",
          "Banana",
          "Strawberry",
          "Orange"
        ],
        "correctAnswer": "Strawberry",
        "explanation": "🍓 **Strawberry** significa **Morango** em inglês! Exemplo prático: \"Strawberry ice cream is delicious.\"",
        "phoneticHint": "/ˈstrɔː.bər.i/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p1-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Pineapple\"**:",
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
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          }
        ],
        "options": [
          "Pineapple",
          "Apple",
          "Orange",
          "Banana"
        ],
        "correctAnswer": "Pineapple",
        "explanation": "🍍 **Pineapple** significa **Abacaxi** em inglês! Exemplo prático: \"Pineapple is a tropical and juicy fruit.\"",
        "phoneticHint": "/ˈpaɪnˌæp.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Lemon\"**?",
        "audioPhrase": "Lemon",
        "visualEmoji": "🍋",
        "visualOptions": [
          {
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
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
          }
        ],
        "options": [
          "Lemon",
          "Apple",
          "Banana",
          "Orange"
        ],
        "correctAnswer": "Lemon",
        "explanation": "🍋 **Lemon** significa **Limão** em inglês! Exemplo prático: \"Lemon has a sour and fresh flavor.\"",
        "phoneticHint": "/ˈlem.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Melancia\"** em inglês? Toque na imagem:",
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
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Watermelon",
          "Banana",
          "Orange",
          "Apple"
        ],
        "correctAnswer": "Watermelon",
        "explanation": "🍉 **Watermelon** significa **Melancia** em inglês! Exemplo prático: \"Watermelon is great on hot summer days.\"",
        "phoneticHint": "/ˈwɔː.təˌmel.ən/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p1-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Peach\"**:",
        "audioPhrase": "Peach",
        "visualEmoji": "🍑",
        "visualOptions": [
          {
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          }
        ],
        "options": [
          "Peach",
          "Apple",
          "Orange",
          "Banana"
        ],
        "correctAnswer": "Peach",
        "explanation": "🍑 **Peach** significa **Pêssego** em inglês! Exemplo prático: \"A ripe peach is soft and fragrant.\"",
        "phoneticHint": "/piːtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Mango\"**?",
        "audioPhrase": "Mango",
        "visualEmoji": "🥭",
        "visualOptions": [
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          }
        ],
        "options": [
          "Orange",
          "Banana",
          "Apple",
          "Mango"
        ],
        "correctAnswer": "Mango",
        "explanation": "🥭 **Mango** significa **Manga** em inglês! Exemplo prático: \"Mango is popular in tropical countries.\"",
        "phoneticHint": "/ˈmæŋ.ɡoʊ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p2",
    "worldId": 0,
    "phaseNumber": 2,
    "title": "Animais de Estimação & Pets",
    "subtitle": "Nomes e sons dos animais companheiros com imagens",
    "pedagogicalObjective": "Identificar e pronunciar os nomes dos animais domésticos mais populares.",
    "type": "lesson",
    "icon": "dog",
    "cefrLevel": "A1",
    "theorySummary": [
      "Dog (/dɒɡ/) e Cat (/kæt/) são as primeiras palavras aprendidas por crianças falantes de inglês.",
      "Preste atenção à pronúncia da consoante final em Bird (/bɜːd/) e Fish (/fɪʃ/).",
      "Ouça com atenção o som emitido ao clicar em cada animal."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p2-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Dog\"**?",
        "audioPhrase": "Dog",
        "visualEmoji": "🐶",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          }
        ],
        "options": [
          "Dog",
          "Fish",
          "Cat",
          "Bird"
        ],
        "correctAnswer": "Dog",
        "explanation": "🐶 **Dog** significa **Cachorro** em inglês! Exemplo prático: \"The loyal dog wags its tail.\"",
        "phoneticHint": "/dɒɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Gato\"** em inglês? Toque na imagem:",
        "audioPhrase": "Cat",
        "visualEmoji": "🐱",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          }
        ],
        "options": [
          "Dog",
          "Cat",
          "Fish",
          "Bird"
        ],
        "correctAnswer": "Cat",
        "explanation": "🐱 **Cat** significa **Gato** em inglês! Exemplo prático: \"The soft cat sleeps on the sofa.\"",
        "phoneticHint": "/kæt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p2-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Bird\"**:",
        "audioPhrase": "Bird",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          }
        ],
        "options": [
          "Dog",
          "Cat",
          "Fish",
          "Bird"
        ],
        "correctAnswer": "Bird",
        "explanation": "🐦 **Bird** significa **Pássaro** em inglês! Exemplo prático: \"A colorful bird sings in the tree.\"",
        "phoneticHint": "/bɜːd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Fish\"**?",
        "audioPhrase": "Fish",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Fish",
            "emoji": "🐟",
            "label": "Fish",
            "translationPt": "Peixe"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Bird",
          "Fish",
          "Dog",
          "Cat"
        ],
        "correctAnswer": "Fish",
        "explanation": "🐟 **Fish** significa **Peixe** em inglês! Exemplo prático: \"A gold fish swims in clean water.\"",
        "phoneticHint": "/fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Coelho\"** em inglês? Toque na imagem:",
        "audioPhrase": "Rabbit",
        "visualEmoji": "🐰",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Rabbit",
            "emoji": "🐰",
            "label": "Rabbit",
            "translationPt": "Coelho"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Cat",
          "Bird",
          "Rabbit",
          "Dog"
        ],
        "correctAnswer": "Rabbit",
        "explanation": "🐰 **Rabbit** significa **Coelho** em inglês! Exemplo prático: \"The white rabbit hops around the garden.\"",
        "phoneticHint": "/ˈræb.ɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p2-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Hamster\"**:",
        "audioPhrase": "Hamster",
        "visualEmoji": "🐹",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
          }
        ],
        "options": [
          "Dog",
          "Cat",
          "Bird",
          "Hamster"
        ],
        "correctAnswer": "Hamster",
        "explanation": "🐹 **Hamster** significa **Hamster** em inglês! Exemplo prático: \"The little hamster runs on its wheel.\"",
        "phoneticHint": "/ˈhæm.stər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Turtle\"**?",
        "audioPhrase": "Turtle",
        "visualEmoji": "🐢",
        "visualOptions": [
          {
            "text": "Turtle",
            "emoji": "🐢",
            "label": "Turtle",
            "translationPt": "Tartaruga"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          }
        ],
        "options": [
          "Turtle",
          "Dog",
          "Cat",
          "Bird"
        ],
        "correctAnswer": "Turtle",
        "explanation": "🐢 **Turtle** significa **Tartaruga** em inglês! Exemplo prático: \"The green turtle walks very slowly.\"",
        "phoneticHint": "/ˈtɜː.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Papagaio\"** em inglês? Toque na imagem:",
        "audioPhrase": "Parrot",
        "visualEmoji": "🦜",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          }
        ],
        "options": [
          "Dog",
          "Bird",
          "Cat",
          "Parrot"
        ],
        "correctAnswer": "Parrot",
        "explanation": "🦜 **Parrot** significa **Papagaio** em inglês! Exemplo prático: \"The green parrot repeats human words.\"",
        "phoneticHint": "/ˈpær.ət/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p2-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Puppy\"**:",
        "audioPhrase": "Puppy",
        "visualEmoji": "🐕",
        "visualOptions": [
          {
            "text": "Puppy",
            "emoji": "🐕",
            "label": "Puppy",
            "translationPt": "Filhote de cão"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Puppy",
          "Bird",
          "Cat",
          "Dog"
        ],
        "correctAnswer": "Puppy",
        "explanation": "🐕 **Puppy** significa **Filhote de cão** em inglês! Exemplo prático: \"The playful puppy loves to fetch the ball.\"",
        "phoneticHint": "/ˈpʌp.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Kitten\"**?",
        "audioPhrase": "Kitten",
        "visualEmoji": "🐈",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Kitten",
            "emoji": "🐈",
            "label": "Kitten",
            "translationPt": "Gatinho filhote"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Dog",
          "Bird",
          "Kitten",
          "Cat"
        ],
        "correctAnswer": "Kitten",
        "explanation": "🐈 **Kitten** significa **Gatinho filhote** em inglês! Exemplo prático: \"The tiny kitten drinks warm milk.\"",
        "phoneticHint": "/ˈkɪt.ən/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p3",
    "worldId": 0,
    "phaseNumber": 3,
    "title": "Objetos da Casa & Quarto",
    "subtitle": "Móveis e elementos do lar com cartões visuais",
    "pedagogicalObjective": "Fixar o vocabulário de mobília e objetos essenciais de uma residência.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Conhecer objetos do lar cria um ambiente imersivo imediato de estudos.",
      "Palavras como Door (/dɔːr/) e Window (/ˈwɪn.doʊ/) aparecem em todas as conversas do cotidiano.",
      "Lembre-se: Chair (/tʃeər/) começa com o som \"tch\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p3-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Bed\"**?",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          }
        ],
        "options": [
          "Table",
          "Bed",
          "Chair",
          "Door"
        ],
        "correctAnswer": "Bed",
        "explanation": "🛏️ **Bed** significa **Cama** em inglês! Exemplo prático: \"I sleep comfortably in my bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cadeira\"** em inglês? Toque na imagem:",
        "audioPhrase": "Chair",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          }
        ],
        "options": [
          "Door",
          "Bed",
          "Table",
          "Chair"
        ],
        "correctAnswer": "Chair",
        "explanation": "🪑 **Chair** significa **Cadeira** em inglês! Exemplo prático: \"Please sit down on this wooden chair.\"",
        "phoneticHint": "/tʃeər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p3-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Table\"**:",
        "audioPhrase": "Table",
        "visualEmoji": "🪵",
        "visualOptions": [
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Chair",
          "Door",
          "Bed",
          "Table"
        ],
        "correctAnswer": "Table",
        "explanation": "🪵 **Table** significa **Mesa** em inglês! Exemplo prático: \"Dinner is served on the dining table.\"",
        "phoneticHint": "/ˈteɪ.bəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Door\"**?",
        "audioPhrase": "Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          }
        ],
        "options": [
          "Table",
          "Bed",
          "Door",
          "Chair"
        ],
        "correctAnswer": "Door",
        "explanation": "🚪 **Door** significa **Porta** em inglês! Exemplo prático: \"Please close the front door.\"",
        "phoneticHint": "/dɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Janela\"** em inglês? Toque na imagem:",
        "audioPhrase": "Window",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          }
        ],
        "options": [
          "Window",
          "Table",
          "Chair",
          "Bed"
        ],
        "correctAnswer": "Window",
        "explanation": "🪟 **Window** significa **Janela** em inglês! Exemplo prático: \"Open the window to let fresh air in.\"",
        "phoneticHint": "/ˈwɪn.doʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p3-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Lamp\"**:",
        "audioPhrase": "Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Lâmpada / Abajur"
          }
        ],
        "options": [
          "Table",
          "Chair",
          "Bed",
          "Lamp"
        ],
        "correctAnswer": "Lamp",
        "explanation": "💡 **Lamp** significa **Lâmpada / Abajur** em inglês! Exemplo prático: \"Turn on the reading lamp beside the bed.\"",
        "phoneticHint": "/læmp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Clock\"**?",
        "audioPhrase": "Clock",
        "visualEmoji": "⏰",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio de parede"
          },
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          }
        ],
        "options": [
          "Bed",
          "Clock",
          "Table",
          "Chair"
        ],
        "correctAnswer": "Clock",
        "explanation": "⏰ **Clock** significa **Relógio de parede** em inglês! Exemplo prático: \"The alarm clock rings at seven o’clock.\"",
        "phoneticHint": "/klɒk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Travesseiro\"** em inglês? Toque na imagem:",
        "audioPhrase": "Pillow",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Pillow",
            "emoji": "🛋️",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          }
        ],
        "options": [
          "Chair",
          "Pillow",
          "Table",
          "Bed"
        ],
        "correctAnswer": "Pillow",
        "explanation": "🛋️ **Pillow** significa **Travesseiro** em inglês! Exemplo prático: \"A soft pillow helps you sleep well.\"",
        "phoneticHint": "/ˈpɪl.oʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p3-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Mirror\"**:",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          }
        ],
        "options": [
          "Bed",
          "Table",
          "Mirror",
          "Chair"
        ],
        "correctAnswer": "Mirror",
        "explanation": "🪞 **Mirror** significa **Espelho** em inglês! Exemplo prático: \"She looks at herself in the bathroom mirror.\"",
        "phoneticHint": "/ˈmɪr.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Key\"**?",
        "audioPhrase": "Key",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          }
        ],
        "options": [
          "Key",
          "Table",
          "Bed",
          "Chair"
        ],
        "correctAnswer": "Key",
        "explanation": "🔑 **Key** significa **Chave** em inglês! Exemplo prático: \"Never lose your house key.\"",
        "phoneticHint": "/kiː/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p4",
    "worldId": 0,
    "phaseNumber": 4,
    "title": "Bebidas & Líquidos do Cotidiano",
    "subtitle": "Água, sucos, café e leite associados a imagens",
    "pedagogicalObjective": "Reconhecer e pedir bebidas essenciais com clareza fonética.",
    "type": "lesson",
    "icon": "cup",
    "cefrLevel": "A1",
    "theorySummary": [
      "Water (/ˈwɔː.tər/) tem pronúncia variada: no inglês americano, o \"t\" soa como um \"r\" suave.",
      "Coffee (/ˈkɒf.i/) e Tea (/tiː/) são as bebidas quentes mais universais.",
      "Milk (/mɪlk/) termina com um som nítido de \"k\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p4-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Water\"**?",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
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
          "Milk",
          "Coffee",
          "Tea"
        ],
        "correctAnswer": "Water",
        "explanation": "💧 **Water** significa **Água** em inglês! Exemplo prático: \"Drinking pure water keeps you hydrated.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Leite\"** em inglês? Toque na imagem:",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
        "visualOptions": [
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
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Tea",
          "Milk",
          "Water",
          "Coffee"
        ],
        "correctAnswer": "Milk",
        "explanation": "🥛 **Milk** significa **Leite** em inglês! Exemplo prático: \"He drinks a glass of cold milk.\"",
        "phoneticHint": "/mɪlk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p4-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Coffee\"**:",
        "audioPhrase": "Coffee",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Tea",
            "emoji": "🍵",
            "label": "Tea",
            "translationPt": "Chá"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Tea",
          "Water",
          "Milk",
          "Coffee"
        ],
        "correctAnswer": "Coffee",
        "explanation": "☕ **Coffee** significa **Café** em inglês! Exemplo prático: \"Hot black coffee wakes me up.\"",
        "phoneticHint": "/ˈkɒf.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Tea\"**?",
        "audioPhrase": "Tea",
        "visualEmoji": "🍵",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
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
          }
        ],
        "options": [
          "Water",
          "Coffee",
          "Tea",
          "Milk"
        ],
        "correctAnswer": "Tea",
        "explanation": "🍵 **Tea** significa **Chá** em inglês! Exemplo prático: \"Green tea is very good for your health.\"",
        "phoneticHint": "/tiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Suco\"** em inglês? Toque na imagem:",
        "audioPhrase": "Juice",
        "visualEmoji": "🧃",
        "visualOptions": [
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Suco"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Juice",
          "Milk",
          "Water",
          "Coffee"
        ],
        "correctAnswer": "Juice",
        "explanation": "🧃 **Juice** significa **Suco** em inglês! Exemplo prático: \"Fresh apple juice tastes sweet.\"",
        "phoneticHint": "/dʒuːs/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p4-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Soda\"**:",
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
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Soda",
          "Milk",
          "Water",
          "Coffee"
        ],
        "correctAnswer": "Soda",
        "explanation": "🥤 **Soda** significa **Refrigerante** em inglês! Exemplo prático: \"Cold soda with ice on a sunny day.\"",
        "phoneticHint": "/ˈsoʊ.də/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Hot Chocolate\"**?",
        "audioPhrase": "Hot Chocolate",
        "visualEmoji": "🍫",
        "visualOptions": [
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Hot Chocolate",
            "emoji": "🍫",
            "label": "Hot Chocolate",
            "translationPt": "Chocolate Quente"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Coffee",
          "Hot Chocolate",
          "Milk",
          "Water"
        ],
        "correctAnswer": "Hot Chocolate",
        "explanation": "🍫 **Hot Chocolate** significa **Chocolate Quente** em inglês! Exemplo prático: \"Hot chocolate warms you up during winter.\"",
        "phoneticHint": "/hɒt ˈtʃɒk.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Limonada\"** em inglês? Toque na imagem:",
        "audioPhrase": "Lemonade",
        "visualEmoji": "🍋",
        "visualOptions": [
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
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
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Coffee",
          "Milk",
          "Lemonade",
          "Water"
        ],
        "correctAnswer": "Lemonade",
        "explanation": "🍋 **Lemonade** significa **Limonada** em inglês! Exemplo prático: \"Fresh lemonade with mint leaves.\"",
        "phoneticHint": "/ˌlem.əˈneɪd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p4-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Smoothie\"**:",
        "audioPhrase": "Smoothie",
        "visualEmoji": "🍧",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Smoothie",
            "emoji": "🍧",
            "label": "Smoothie",
            "translationPt": "Vitamina de frutas"
          }
        ],
        "options": [
          "Water",
          "Coffee",
          "Milk",
          "Smoothie"
        ],
        "correctAnswer": "Smoothie",
        "explanation": "🍧 **Smoothie** significa **Vitamina de frutas** em inglês! Exemplo prático: \"A strawberry and banana smoothie.\"",
        "phoneticHint": "/ˈsmuː.ði/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Coconut Water\"**?",
        "audioPhrase": "Coconut Water",
        "visualEmoji": "🥥",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Coconut Water",
            "emoji": "🥥",
            "label": "Coconut Water",
            "translationPt": "Água de Coco"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Water",
          "Coconut Water",
          "Milk",
          "Coffee"
        ],
        "correctAnswer": "Coconut Water",
        "explanation": "🥥 **Coconut Water** significa **Água de Coco** em inglês! Exemplo prático: \"Cold coconut water on the beach.\"",
        "phoneticHint": "/ˈkoʊ.kə.nʌt ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p5",
    "worldId": 0,
    "phaseNumber": 5,
    "title": "Cores Visuais & Objetos Coloridos",
    "subtitle": "Associação direta de cores a elementos visuais",
    "pedagogicalObjective": "Dominar o nome das cores em inglês através do reconhecimento visual instantâneo.",
    "type": "lesson",
    "icon": "palette",
    "cefrLevel": "A1",
    "theorySummary": [
      "Em inglês, a cor (adjetivo) sempre vem ANTES do substantivo: \"A red apple\" (Uma maçã vermelha).",
      "Blue (/bluː/), Green (/ɡriːn/) e Yellow (/ˈjel.oʊ/) formam a tríade inicial de cores.",
      "Black (/blæk/) e White (/waɪt/) representam os contrastes básicos."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p5-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Red\"**?",
        "audioPhrase": "Red",
        "visualEmoji": "🔴",
        "visualOptions": [
          {
            "text": "Yellow",
            "emoji": "🟡",
            "label": "Yellow",
            "translationPt": "Amarelo"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          }
        ],
        "options": [
          "Yellow",
          "Red",
          "Blue",
          "Green"
        ],
        "correctAnswer": "Red",
        "explanation": "🔴 **Red** significa **Vermelho** em inglês! Exemplo prático: \"The red car stops at the light.\"",
        "phoneticHint": "/red/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Azul\"** em inglês? Toque na imagem:",
        "audioPhrase": "Blue",
        "visualEmoji": "🔵",
        "visualOptions": [
          {
            "text": "Yellow",
            "emoji": "🟡",
            "label": "Yellow",
            "translationPt": "Amarelo"
          },
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          }
        ],
        "options": [
          "Yellow",
          "Green",
          "Red",
          "Blue"
        ],
        "correctAnswer": "Blue",
        "explanation": "🔵 **Blue** significa **Azul** em inglês! Exemplo prático: \"The blue sky is clear and bright.\"",
        "phoneticHint": "/bluː/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p5-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Green\"**:",
        "audioPhrase": "Green",
        "visualEmoji": "🟢",
        "visualOptions": [
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Yellow",
            "emoji": "🟡",
            "label": "Yellow",
            "translationPt": "Amarelo"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          }
        ],
        "options": [
          "Green",
          "Red",
          "Yellow",
          "Blue"
        ],
        "correctAnswer": "Green",
        "explanation": "🟢 **Green** significa **Verde** em inglês! Exemplo prático: \"The green grass grows in the yard.\"",
        "phoneticHint": "/ɡriːn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Yellow\"**?",
        "audioPhrase": "Yellow",
        "visualEmoji": "🟡",
        "visualOptions": [
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          },
          {
            "text": "Yellow",
            "emoji": "🟡",
            "label": "Yellow",
            "translationPt": "Amarelo"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          }
        ],
        "options": [
          "Blue",
          "Green",
          "Yellow",
          "Red"
        ],
        "correctAnswer": "Yellow",
        "explanation": "🟡 **Yellow** significa **Amarelo** em inglês! Exemplo prático: \"The bright yellow sun gives warmth.\"",
        "phoneticHint": "/ˈjel.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Preto\"** em inglês? Toque na imagem:",
        "audioPhrase": "Black",
        "visualEmoji": "⚫",
        "visualOptions": [
          {
            "text": "Black",
            "emoji": "⚫",
            "label": "Black",
            "translationPt": "Preto"
          },
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          }
        ],
        "options": [
          "Black",
          "Green",
          "Red",
          "Blue"
        ],
        "correctAnswer": "Black",
        "explanation": "⚫ **Black** significa **Preto** em inglês! Exemplo prático: \"The elegant black suit fits perfectly.\"",
        "phoneticHint": "/blæk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p5-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"White\"**:",
        "audioPhrase": "White",
        "visualEmoji": "⚪",
        "visualOptions": [
          {
            "text": "White",
            "emoji": "⚪",
            "label": "White",
            "translationPt": "Branco"
          },
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          }
        ],
        "options": [
          "White",
          "Green",
          "Blue",
          "Red"
        ],
        "correctAnswer": "White",
        "explanation": "⚪ **White** significa **Branco** em inglês! Exemplo prático: \"White snow covers the rooftops.\"",
        "phoneticHint": "/waɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Orange\"**?",
        "audioPhrase": "Orange",
        "visualEmoji": "🟠",
        "visualOptions": [
          {
            "text": "Orange",
            "emoji": "🟠",
            "label": "Orange",
            "translationPt": "Laranja (cor)"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          }
        ],
        "options": [
          "Orange",
          "Red",
          "Blue",
          "Green"
        ],
        "correctAnswer": "Orange",
        "explanation": "🟠 **Orange** significa **Laranja (cor)** em inglês! Exemplo prático: \"An orange leaf falls in autumn.\"",
        "phoneticHint": "/ˈɒr.ɪndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Roxo\"** em inglês? Toque na imagem:",
        "audioPhrase": "Purple",
        "visualEmoji": "🟣",
        "visualOptions": [
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Purple",
            "emoji": "🟣",
            "label": "Purple",
            "translationPt": "Roxo"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          }
        ],
        "options": [
          "Green",
          "Red",
          "Purple",
          "Blue"
        ],
        "correctAnswer": "Purple",
        "explanation": "🟣 **Purple** significa **Roxo** em inglês! Exemplo prático: \"A beautiful purple flower blooms.\"",
        "phoneticHint": "/ˈpɜː.pəl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p5-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Pink\"**:",
        "audioPhrase": "Pink",
        "visualEmoji": "🌸",
        "visualOptions": [
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Pink",
            "emoji": "🌸",
            "label": "Pink",
            "translationPt": "Rosa"
          },
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          }
        ],
        "options": [
          "Red",
          "Blue",
          "Pink",
          "Green"
        ],
        "correctAnswer": "Pink",
        "explanation": "🌸 **Pink** significa **Rosa** em inglês! Exemplo prático: \"The baby wears a soft pink hat.\"",
        "phoneticHint": "/pɪŋk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Brown\"**?",
        "audioPhrase": "Brown",
        "visualEmoji": "🟤",
        "visualOptions": [
          {
            "text": "Brown",
            "emoji": "🟤",
            "label": "Brown",
            "translationPt": "Marrom"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          }
        ],
        "options": [
          "Brown",
          "Blue",
          "Red",
          "Green"
        ],
        "correctAnswer": "Brown",
        "explanation": "🟤 **Brown** significa **Marrom** em inglês! Exemplo prático: \"A cozy brown coat for winter.\"",
        "phoneticHint": "/braʊn/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p6",
    "worldId": 0,
    "phaseNumber": 6,
    "title": "Meios de Transporte & Veículos",
    "subtitle": "Carros, ônibus, aviões e bicicletas em cartões ilustrados",
    "pedagogicalObjective": "Reconhecer e nomear veículos para mobilidade e viagens.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Car (/kɑːr/), Bus (/bʌs/) e Train (/treɪn/) são meios essenciais para se locomover em qualquer cidade.",
      "Airplane (/ˈeər.pleɪn/) muitas vezes é abreviado para Plane.",
      "Para dizer \"de carro\" ou \"de ônibus\", use a preposição \"by\": \"by car\", \"by bus\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p6-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Car\"**?",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          },
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
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          }
        ],
        "options": [
          "Bus",
          "Car",
          "Airplane",
          "Bicycle"
        ],
        "correctAnswer": "Car",
        "explanation": "🚗 **Car** significa **Carro** em inglês! Exemplo prático: \"My electric car is quiet and fast.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Ônibus\"** em inglês? Toque na imagem:",
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
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Bus",
          "Airplane",
          "Bicycle",
          "Car"
        ],
        "correctAnswer": "Bus",
        "explanation": "🚌 **Bus** significa **Ônibus** em inglês! Exemplo prático: \"The yellow school bus arrives on time.\"",
        "phoneticHint": "/bʌs/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p6-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Bicycle\"**:",
        "audioPhrase": "Bicycle",
        "visualEmoji": "🚲",
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
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Bus",
          "Bicycle",
          "Airplane",
          "Car"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "🚲 **Bicycle** significa **Bicicleta** em inglês! Exemplo prático: \"Riding a bicycle is great exercise.\"",
        "phoneticHint": "/ˈbaɪ.sɪ.kəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Airplane\"**?",
        "audioPhrase": "Airplane",
        "visualEmoji": "✈️",
        "visualOptions": [
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          }
        ],
        "options": [
          "Airplane",
          "Bicycle",
          "Car",
          "Bus"
        ],
        "correctAnswer": "Airplane",
        "explanation": "✈️ **Airplane** significa **Avião** em inglês! Exemplo prático: \"The airplane flies high above the clouds.\"",
        "phoneticHint": "/ˈeər.pleɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Trem\"** em inglês? Toque na imagem:",
        "audioPhrase": "Train",
        "visualEmoji": "🚆",
        "visualOptions": [
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
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
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          }
        ],
        "options": [
          "Train",
          "Car",
          "Bus",
          "Bicycle"
        ],
        "correctAnswer": "Train",
        "explanation": "🚆 **Train** significa **Trem** em inglês! Exemplo prático: \"The high-speed train connects the cities.\"",
        "phoneticHint": "/treɪn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p6-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Boat\"**:",
        "audioPhrase": "Boat",
        "visualEmoji": "⛵",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          }
        ],
        "options": [
          "Car",
          "Bicycle",
          "Boat",
          "Bus"
        ],
        "correctAnswer": "Boat",
        "explanation": "⛵ **Boat** significa **Barco** em inglês! Exemplo prático: \"The small boat sails smoothly on the lake.\"",
        "phoneticHint": "/boʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Motorcycle\"**?",
        "audioPhrase": "Motorcycle",
        "visualEmoji": "🏍️",
        "visualOptions": [
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Motocicleta"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
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
          "Motorcycle",
          "Car",
          "Bus"
        ],
        "correctAnswer": "Motorcycle",
        "explanation": "🏍️ **Motorcycle** significa **Motocicleta** em inglês! Exemplo prático: \"He rides a modern motorcycle to work.\"",
        "phoneticHint": "/ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Helicóptero\"** em inglês? Toque na imagem:",
        "audioPhrase": "Helicopter",
        "visualEmoji": "🚁",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          }
        ],
        "options": [
          "Car",
          "Bicycle",
          "Helicopter",
          "Bus"
        ],
        "correctAnswer": "Helicopter",
        "explanation": "🚁 **Helicopter** significa **Helicóptero** em inglês! Exemplo prático: \"A rescue helicopter lands on the roof.\"",
        "phoneticHint": "/ˈhel.ɪˌkɒp.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p6-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Taxi\"**:",
        "audioPhrase": "Taxi",
        "visualEmoji": "🚕",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          }
        ],
        "options": [
          "Car",
          "Bus",
          "Taxi",
          "Bicycle"
        ],
        "correctAnswer": "Taxi",
        "explanation": "🚕 **Taxi** significa **Táxi** em inglês! Exemplo prático: \"Call a yellow taxi to go to the airport.\"",
        "phoneticHint": "/ˈtæk.si/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Truck\"**?",
        "audioPhrase": "Truck",
        "visualEmoji": "🚚",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
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
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          }
        ],
        "options": [
          "Car",
          "Bus",
          "Truck",
          "Bicycle"
        ],
        "correctAnswer": "Truck",
        "explanation": "🚚 **Truck** significa **Caminhão** em inglês! Exemplo prático: \"The heavy delivery truck transports goods.\"",
        "phoneticHint": "/trʌk/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p7",
    "worldId": 0,
    "phaseNumber": 7,
    "title": "Roupas & Vestuário",
    "subtitle": "Vestimentas cotidianas associadas a imagens visuais",
    "pedagogicalObjective": "Nomear peças de vestuário e acessórios fundamentais.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Pants (/pænts/) e Shoes (/ʃuːz/) sempre são usados no plural porque vêm em pares ou têm duas pernas.",
      "Shirt (/ʃɜːt/) é camisa social ou de botão, enquanto T-shirt é a camiseta básica.",
      "Use o verbo \"wear\" (/weər/) para dizer \"vestir\" ou \"usar\" roupa."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p7-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Shirt\"**?",
        "audioPhrase": "Shirt",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Hat",
            "emoji": "🧢",
            "label": "Hat / Cap",
            "translationPt": "Chapéu / Boné"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          }
        ],
        "options": [
          "Shoes",
          "Shirt",
          "Hat",
          "Pants"
        ],
        "correctAnswer": "Shirt",
        "explanation": "👕 **Shirt** significa **Camisa / Camiseta** em inglês! Exemplo prático: \"He wears a clean white shirt.\"",
        "phoneticHint": "/ʃɜːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Calças\"** em inglês? Toque na imagem:",
        "audioPhrase": "Pants",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Hat",
            "emoji": "🧢",
            "label": "Hat / Cap",
            "translationPt": "Chapéu / Boné"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Shoes",
          "Pants",
          "Hat",
          "Shirt"
        ],
        "correctAnswer": "Pants",
        "explanation": "👖 **Pants** significa **Calças** em inglês! Exemplo prático: \"Blue denim pants are comfortable.\"",
        "phoneticHint": "/pænts/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p7-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Shoes\"**:",
        "audioPhrase": "Shoes",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          },
          {
            "text": "Hat",
            "emoji": "🧢",
            "label": "Hat / Cap",
            "translationPt": "Chapéu / Boné"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Shoes",
          "Hat",
          "Pants",
          "Shirt"
        ],
        "correctAnswer": "Shoes",
        "explanation": "👟 **Shoes** significa **Sapatos / Tênis** em inglês! Exemplo prático: \"Running shoes protect your feet.\"",
        "phoneticHint": "/ʃuːz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Hat\"**?",
        "audioPhrase": "Hat",
        "visualEmoji": "🧢",
        "visualOptions": [
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Hat",
            "emoji": "🧢",
            "label": "Hat / Cap",
            "translationPt": "Chapéu / Boné"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          }
        ],
        "options": [
          "Shirt",
          "Hat",
          "Pants",
          "Shoes"
        ],
        "correctAnswer": "Hat",
        "explanation": "🧢 **Hat** significa **Chapéu / Boné** em inglês! Exemplo prático: \"Wear a hat to shield your eyes from the sun.\"",
        "phoneticHint": "/hæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Vestido\"** em inglês? Toque na imagem:",
        "audioPhrase": "Dress",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          }
        ],
        "options": [
          "Pants",
          "Dress",
          "Shirt",
          "Shoes"
        ],
        "correctAnswer": "Dress",
        "explanation": "👗 **Dress** significa **Vestido** em inglês! Exemplo prático: \"She bought an elegant red dress for the party.\"",
        "phoneticHint": "/dres/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p7-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Jacket\"**:",
        "audioPhrase": "Jacket",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Casaco"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          }
        ],
        "options": [
          "Jacket",
          "Shirt",
          "Shoes",
          "Pants"
        ],
        "correctAnswer": "Jacket",
        "explanation": "🧥 **Jacket** significa **Jaqueta / Casaco** em inglês! Exemplo prático: \"Put on a warm jacket because it is cold.\"",
        "phoneticHint": "/ˈdʒæk.ɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Socks\"**?",
        "audioPhrase": "Socks",
        "visualEmoji": "🧦",
        "visualOptions": [
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          }
        ],
        "options": [
          "Shirt",
          "Socks",
          "Pants",
          "Shoes"
        ],
        "correctAnswer": "Socks",
        "explanation": "🧦 **Socks** significa **Meias** em inglês! Exemplo prático: \"Warm woolen socks keep your feet cozy.\"",
        "phoneticHint": "/sɒks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Óculos\"** em inglês? Toque na imagem:",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos"
          },
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          }
        ],
        "options": [
          "Pants",
          "Shirt",
          "Glasses",
          "Shoes"
        ],
        "correctAnswer": "Glasses",
        "explanation": "👓 **Glasses** significa **Óculos** em inglês! Exemplo prático: \"Reading glasses help you see fine text.\"",
        "phoneticHint": "/ˈɡlæs.ɪz/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p7-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Watch\"**:",
        "audioPhrase": "Watch",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          }
        ],
        "options": [
          "Pants",
          "Shoes",
          "Shirt",
          "Watch"
        ],
        "correctAnswer": "Watch",
        "explanation": "⌚ **Watch** significa **Relógio de pulso** em inglês! Exemplo prático: \"Check your watch so you are not late.\"",
        "phoneticHint": "/wɒtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Backpack\"**?",
        "audioPhrase": "Backpack",
        "visualEmoji": "🎒",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👟",
            "label": "Shoes",
            "translationPt": "Sapatos / Tênis"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Shoes",
          "Pants",
          "Backpack",
          "Shirt"
        ],
        "correctAnswer": "Backpack",
        "explanation": "🎒 **Backpack** significa **Mochila** em inglês! Exemplo prático: \"Students carry books in their backpack.\"",
        "phoneticHint": "/ˈbæk.pæk/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p8",
    "worldId": 0,
    "phaseNumber": 8,
    "title": "Partes do Corpo Humano",
    "subtitle": "Rosto, mãos e membros em cartões visuais",
    "pedagogicalObjective": "Aprender a apontar e nomear partes do corpo em inglês.",
    "type": "lesson",
    "icon": "body",
    "cefrLevel": "A1",
    "theorySummary": [
      "Preste atenção aos plurais irregulares: 1 Foot -> 2 Feet (/fiːt/).",
      "Eye (/aɪ/) tem o mesmo som da palavra \"I\" (eu).",
      "Ear (/ɪər/) e Nose (/noʊz/) são partes dos sentidos fundamentais."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p8-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Eye\"**?",
        "audioPhrase": "Eye",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Hand",
          "Foot",
          "Eye",
          "Ear"
        ],
        "correctAnswer": "Eye",
        "explanation": "👁️ **Eye** significa **Olho** em inglês! Exemplo prático: \"Open your eyes to see the sunshine.\"",
        "phoneticHint": "/aɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Mão\"** em inglês? Toque na imagem:",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Foot",
          "Eye",
          "Hand",
          "Ear"
        ],
        "correctAnswer": "Hand",
        "explanation": "✋ **Hand** significa **Mão** em inglês! Exemplo prático: \"Wash your hands before eating.\"",
        "phoneticHint": "/hænd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p8-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Foot\"**:",
        "audioPhrase": "Foot",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          }
        ],
        "options": [
          "Hand",
          "Eye",
          "Ear",
          "Foot"
        ],
        "correctAnswer": "Foot",
        "explanation": "🦶 **Foot** significa **Pé** em inglês! Exemplo prático: \"He kicked the ball with his right foot.\"",
        "phoneticHint": "/fʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Ear\"**?",
        "audioPhrase": "Ear",
        "visualEmoji": "👂",
        "visualOptions": [
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "Eye",
          "Ear",
          "Foot",
          "Hand"
        ],
        "correctAnswer": "Ear",
        "explanation": "👂 **Ear** significa **Orelha / Ouvido** em inglês! Exemplo prático: \"Humans listen with two ears.\"",
        "phoneticHint": "/ɪər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Nariz\"** em inglês? Toque na imagem:",
        "audioPhrase": "Nose",
        "visualEmoji": "👃",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          }
        ],
        "options": [
          "Hand",
          "Foot",
          "Eye",
          "Nose"
        ],
        "correctAnswer": "Nose",
        "explanation": "👃 **Nose** significa **Nariz** em inglês! Exemplo prático: \"Smell the fresh scent with your nose.\"",
        "phoneticHint": "/noʊz/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p8-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Mouth\"**:",
        "audioPhrase": "Mouth",
        "visualEmoji": "👄",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          }
        ],
        "options": [
          "Hand",
          "Foot",
          "Eye",
          "Mouth"
        ],
        "correctAnswer": "Mouth",
        "explanation": "👄 **Mouth** significa **Boca** em inglês! Exemplo prático: \"Smile and open your mouth to speak.\"",
        "phoneticHint": "/maʊθ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Head\"**?",
        "audioPhrase": "Head",
        "visualEmoji": "👤",
        "visualOptions": [
          {
            "text": "Head",
            "emoji": "👤",
            "label": "Head",
            "translationPt": "Cabeça"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "Head",
          "Eye",
          "Foot",
          "Hand"
        ],
        "correctAnswer": "Head",
        "explanation": "👤 **Head** significa **Cabeça** em inglês! Exemplo prático: \"Nod your head if you understand.\"",
        "phoneticHint": "/hed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Braço\"** em inglês? Toque na imagem:",
        "audioPhrase": "Arm",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          }
        ],
        "options": [
          "Eye",
          "Arm",
          "Hand",
          "Foot"
        ],
        "correctAnswer": "Arm",
        "explanation": "💪 **Arm** significa **Braço** em inglês! Exemplo prático: \"Strong arms help lift heavy weights.\"",
        "phoneticHint": "/ɑːm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p8-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Leg\"**:",
        "audioPhrase": "Leg",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
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
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "Eye",
          "Foot",
          "Leg",
          "Hand"
        ],
        "correctAnswer": "Leg",
        "explanation": "🦵 **Leg** significa **Perna** em inglês! Exemplo prático: \"Walking every day strengthens your legs.\"",
        "phoneticHint": "/leɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Heart\"**?",
        "audioPhrase": "Heart",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          }
        ],
        "options": [
          "Eye",
          "Heart",
          "Hand",
          "Foot"
        ],
        "correctAnswer": "Heart",
        "explanation": "❤️ **Heart** significa **Coração** em inglês! Exemplo prático: \"A healthy heart beats steadily.\"",
        "phoneticHint": "/hɑːt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p9",
    "worldId": 0,
    "phaseNumber": 9,
    "title": "Animais da Fazenda & Selvagens",
    "subtitle": "Leão, vaca, elefante e cavalo com imagens e pronúncia",
    "pedagogicalObjective": "Ampliar o vocabulário de fauna global através de cartões ilustrativos.",
    "type": "lesson",
    "icon": "lion",
    "cefrLevel": "A1",
    "theorySummary": [
      "Cow (/kaʊ/), Horse (/hɔːs/) e Pig (/pɪɡ/) são clássicos da fazenda.",
      "Lion (/ˈlaɪ.ən/) é conhecido como \"King of the Jungle\".",
      "Elephant (/ˈel.ɪ.fənt/) soa com \"f\" na escrita \"ph\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p9-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Cow\"**?",
        "audioPhrase": "Cow",
        "visualEmoji": "🐮",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Pig",
            "emoji": "🐷",
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
          "Cow",
          "Horse",
          "Pig",
          "Sheep"
        ],
        "correctAnswer": "Cow",
        "explanation": "🐮 **Cow** significa **Vaca** em inglês! Exemplo prático: \"The gentle cow gives fresh milk.\"",
        "phoneticHint": "/kaʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cavalo\"** em inglês? Toque na imagem:",
        "audioPhrase": "Horse",
        "visualEmoji": "🐴",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Pig",
            "emoji": "🐷",
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
          "Cow",
          "Horse",
          "Pig",
          "Sheep"
        ],
        "correctAnswer": "Horse",
        "explanation": "🐴 **Horse** significa **Cavalo** em inglês! Exemplo prático: \"The brown horse runs across the field.\"",
        "phoneticHint": "/hɔːs/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p9-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Pig\"**:",
        "audioPhrase": "Pig",
        "visualEmoji": "🐷",
        "visualOptions": [
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          },
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          }
        ],
        "options": [
          "Pig",
          "Cow",
          "Sheep",
          "Horse"
        ],
        "correctAnswer": "Pig",
        "explanation": "🐷 **Pig** significa **Porco** em inglês! Exemplo prático: \"The pink pig rests in the shade.\"",
        "phoneticHint": "/pɪɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Sheep\"**?",
        "audioPhrase": "Sheep",
        "visualEmoji": "🐑",
        "visualOptions": [
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
          },
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          }
        ],
        "options": [
          "Horse",
          "Sheep",
          "Cow",
          "Pig"
        ],
        "correctAnswer": "Sheep",
        "explanation": "🐑 **Sheep** significa **Ovelha** em inglês! Exemplo prático: \"Fluffy white sheep produce warm wool.\"",
        "phoneticHint": "/ʃiːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Galinha\"** em inglês? Toque na imagem:",
        "audioPhrase": "Chicken",
        "visualEmoji": "🐔",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Chicken",
            "emoji": "🐔",
            "label": "Chicken",
            "translationPt": "Galinha"
          }
        ],
        "options": [
          "Cow",
          "Pig",
          "Horse",
          "Chicken"
        ],
        "correctAnswer": "Chicken",
        "explanation": "🐔 **Chicken** significa **Galinha** em inglês! Exemplo prático: \"The farm chicken lays eggs in the morning.\"",
        "phoneticHint": "/ˈtʃɪk.ɪn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p9-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Lion\"**:",
        "audioPhrase": "Lion",
        "visualEmoji": "🦁",
        "visualOptions": [
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          },
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          }
        ],
        "options": [
          "Horse",
          "Cow",
          "Lion",
          "Pig"
        ],
        "correctAnswer": "Lion",
        "explanation": "🦁 **Lion** significa **Leão** em inglês! Exemplo prático: \"The brave lion roars across the savanna.\"",
        "phoneticHint": "/ˈlaɪ.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Elephant\"**?",
        "audioPhrase": "Elephant",
        "visualEmoji": "🐘",
        "visualOptions": [
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
          },
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          }
        ],
        "options": [
          "Horse",
          "Elephant",
          "Cow",
          "Pig"
        ],
        "correctAnswer": "Elephant",
        "explanation": "🐘 **Elephant** significa **Elefante** em inglês! Exemplo prático: \"The giant elephant has large ears.\"",
        "phoneticHint": "/ˈel.ɪ.fənt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Macaco\"** em inglês? Toque na imagem:",
        "audioPhrase": "Monkey",
        "visualEmoji": "🐵",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          },
          {
            "text": "Monkey",
            "emoji": "🐵",
            "label": "Monkey",
            "translationPt": "Macaco"
          }
        ],
        "options": [
          "Cow",
          "Pig",
          "Horse",
          "Monkey"
        ],
        "correctAnswer": "Monkey",
        "explanation": "🐵 **Monkey** significa **Macaco** em inglês! Exemplo prático: \"The clever monkey swings between branches.\"",
        "phoneticHint": "/ˈmʌŋ.ki/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p9-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Giraffe\"**:",
        "audioPhrase": "Giraffe",
        "visualEmoji": "🦒",
        "visualOptions": [
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
          },
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          }
        ],
        "options": [
          "Pig",
          "Giraffe",
          "Cow",
          "Horse"
        ],
        "correctAnswer": "Giraffe",
        "explanation": "🦒 **Giraffe** significa **Girafa** em inglês! Exemplo prático: \"The tall giraffe eats leaves high in the trees.\"",
        "phoneticHint": "/dʒɪˈrɑːf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Bear\"**?",
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
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          }
        ],
        "options": [
          "Bear",
          "Pig",
          "Cow",
          "Horse"
        ],
        "correctAnswer": "Bear",
        "explanation": "🐻 **Bear** significa **Urso** em inglês! Exemplo prático: \"The furry brown bear loves honey and fish.\"",
        "phoneticHint": "/beər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p10",
    "worldId": 0,
    "phaseNumber": 10,
    "title": "🎁 Baú da Sabedoria 1: Revisão Visual (1-9)",
    "subtitle": "Consolidação com 11 desafios das unidades 1 a 9",
    "pedagogicalObjective": "Revisar e consolidar todo o vocabulário visual das lições 1 a 9.",
    "type": "chest",
    "icon": "chest",
    "cefrLevel": "A1",
    "theorySummary": [
      "Parabéns por chegar ao primeiro Baú da Sabedoria do Vocabulário!",
      "Nesta fase de revisão, testaremos sua retenção visual de frutas, animais, casa, bebidas, cores, transportes, roupas e corpo humano.",
      "Você receberá bônus generoso de XP e Gemas ao acertar os desafios!"
    ],
    "xpReward": 40,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p10-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Apple\"**?",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Apple",
          "Water",
          "Car",
          "Dog"
        ],
        "correctAnswer": "Apple",
        "explanation": "🍎 **Apple** significa **Maçã** em inglês! Exemplo prático: \"A delicious red apple.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cachorro\"** em inglês? Toque na imagem:",
        "audioPhrase": "Dog",
        "visualEmoji": "🐶",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Water",
          "Apple",
          "Dog",
          "Car"
        ],
        "correctAnswer": "Dog",
        "explanation": "🐶 **Dog** significa **Cachorro** em inglês! Exemplo prático: \"A faithful dog.\"",
        "phoneticHint": "/dɒɡ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p10-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Water\"**:",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Water",
          "Dog",
          "Apple",
          "Car"
        ],
        "correctAnswer": "Water",
        "explanation": "💧 **Water** significa **Água** em inglês! Exemplo prático: \"Fresh cold water.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Car\"**?",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Apple",
          "Car",
          "Dog",
          "Water"
        ],
        "correctAnswer": "Car",
        "explanation": "🚗 **Car** significa **Carro** em inglês! Exemplo prático: \"A modern electric car.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Azul\"** em inglês? Toque na imagem:",
        "audioPhrase": "Blue",
        "visualEmoji": "🔵",
        "visualOptions": [
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Blue",
          "Apple",
          "Water",
          "Dog"
        ],
        "correctAnswer": "Blue",
        "explanation": "🔵 **Blue** significa **Azul** em inglês! Exemplo prático: \"A bright blue sphere.\"",
        "phoneticHint": "/bluː/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p10-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Shirt\"**:",
        "audioPhrase": "Shirt",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camiseta"
          }
        ],
        "options": [
          "Dog",
          "Apple",
          "Water",
          "Shirt"
        ],
        "correctAnswer": "Shirt",
        "explanation": "👕 **Shirt** significa **Camiseta** em inglês! Exemplo prático: \"A clean cotton shirt.\"",
        "phoneticHint": "/ʃɜːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Hand\"**?",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Apple",
          "Water",
          "Hand",
          "Dog"
        ],
        "correctAnswer": "Hand",
        "explanation": "✋ **Hand** significa **Mão** em inglês! Exemplo prático: \"Raise your open hand.\"",
        "phoneticHint": "/hænd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cama\"** em inglês? Toque na imagem:",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Water",
          "Bed",
          "Apple",
          "Dog"
        ],
        "correctAnswer": "Bed",
        "explanation": "🛏️ **Bed** significa **Cama** em inglês! Exemplo prático: \"A cozy warm bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p10-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Lion\"**:",
        "audioPhrase": "Lion",
        "visualEmoji": "🦁",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Water",
          "Lion",
          "Dog",
          "Apple"
        ],
        "correctAnswer": "Lion",
        "explanation": "🦁 **Lion** significa **Leão** em inglês! Exemplo prático: \"The king of the jungle.\"",
        "phoneticHint": "/ˈlaɪ.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Banana\"**?",
        "audioPhrase": "Banana",
        "visualEmoji": "🍌",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          }
        ],
        "options": [
          "Water",
          "Apple",
          "Dog",
          "Banana"
        ],
        "correctAnswer": "Banana",
        "explanation": "🍌 **Banana** significa **Banana** em inglês! Exemplo prático: \"A sweet yellow banana.\"",
        "phoneticHint": "/bəˈnæn.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e11",
        "type": "image-choice",
        "prompt": "Como se diz **\"Bicicleta\"** em inglês? Toque na imagem:",
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
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Bicycle",
          "Water",
          "Dog",
          "Apple"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "🚲 **Bicycle** significa **Bicicleta** em inglês! Exemplo prático: \"Ride a bicycle in the park.\"",
        "phoneticHint": "/ˈbaɪ.sɪ.kəl/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p11",
    "worldId": 0,
    "phaseNumber": 11,
    "title": "Café da Manhã & Alimentos Básicos",
    "subtitle": "Pão, ovos, queijo e manteiga com imagens interativas",
    "pedagogicalObjective": "Conhecer os ingredientes do desjejum e das refeições matinais.",
    "type": "lesson",
    "icon": "bread",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bread (/bred/) e Egg (/eɡ/) são a base de qualquer desjejum ocidental.",
      "Cheese (/tʃiːz/) tem a vogal longa /iː/, a mesma que falamos ao tirar fotos!",
      "Sandwich (/ˈsæn.wɪdʒ/) tem o som suave no final."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p11-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Bread\"**?",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Cheese",
          "Bread",
          "Butter",
          "Egg"
        ],
        "correctAnswer": "Bread",
        "explanation": "🍞 **Bread** significa **Pão** em inglês! Exemplo prático: \"Freshly baked bread smells wonderful.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Ovo\"** em inglês? Toque na imagem:",
        "audioPhrase": "Egg",
        "visualEmoji": "🥚",
        "visualOptions": [
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Cheese",
          "Bread",
          "Butter",
          "Egg"
        ],
        "correctAnswer": "Egg",
        "explanation": "🥚 **Egg** significa **Ovo** em inglês! Exemplo prático: \"Fried eggs with toast for breakfast.\"",
        "phoneticHint": "/eɡ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p11-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Cheese\"**:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Bread",
          "Butter",
          "Cheese",
          "Egg"
        ],
        "correctAnswer": "Cheese",
        "explanation": "🧀 **Cheese** significa **Queijo** em inglês! Exemplo prático: \"Melted yellow cheese on a sandwich.\"",
        "phoneticHint": "/tʃiːz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Butter\"**?",
        "audioPhrase": "Butter",
        "visualEmoji": "🧈",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga"
          }
        ],
        "options": [
          "Egg",
          "Cheese",
          "Bread",
          "Butter"
        ],
        "correctAnswer": "Butter",
        "explanation": "🧈 **Butter** significa **Manteiga** em inglês! Exemplo prático: \"Spread creamy butter on warm toast.\"",
        "phoneticHint": "/ˈbʌt.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Sanduíche\"** em inglês? Toque na imagem:",
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
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Sandwich",
          "Egg",
          "Cheese",
          "Bread"
        ],
        "correctAnswer": "Sandwich",
        "explanation": "🥪 **Sandwich** significa **Sanduíche** em inglês! Exemplo prático: \"A healthy club sandwich with lettuce.\"",
        "phoneticHint": "/ˈsæn.wɪdʒ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p11-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Pizza\"**:",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          }
        ],
        "options": [
          "Egg",
          "Pizza",
          "Bread",
          "Cheese"
        ],
        "correctAnswer": "Pizza",
        "explanation": "🍕 **Pizza** significa **Pizza** em inglês! Exemplo prático: \"A hot slice of cheese pizza.\"",
        "phoneticHint": "/ˈpiːt.sə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Burger\"**?",
        "audioPhrase": "Burger",
        "visualEmoji": "🍔",
        "visualOptions": [
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          },
          {
            "text": "Burger",
            "emoji": "🍔",
            "label": "Burger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
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
          "Burger",
          "Cheese",
          "Bread"
        ],
        "correctAnswer": "Burger",
        "explanation": "🍔 **Burger** significa **Hambúrguer** em inglês! Exemplo prático: \"A juicy burger with tomato.\"",
        "phoneticHint": "/ˈbɜː.ɡər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Arroz\"** em inglês? Toque na imagem:",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Bread",
          "Rice",
          "Cheese",
          "Egg"
        ],
        "correctAnswer": "Rice",
        "explanation": "🍚 **Rice** significa **Arroz** em inglês! Exemplo prático: \"Steamed white rice accompanies dinner.\"",
        "phoneticHint": "/raɪs/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p11-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Pasta\"**:",
        "audioPhrase": "Pasta",
        "visualEmoji": "🍝",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Massa / Macarrão"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Bread",
          "Pasta",
          "Cheese",
          "Egg"
        ],
        "correctAnswer": "Pasta",
        "explanation": "🍝 **Pasta** significa **Massa / Macarrão** em inglês! Exemplo prático: \"Italian pasta with homemade tomato sauce.\"",
        "phoneticHint": "/ˈpæs.tə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Soup\"**?",
        "audioPhrase": "Soup",
        "visualEmoji": "🍲",
        "visualOptions": [
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
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Bread",
          "Soup",
          "Cheese",
          "Egg"
        ],
        "correctAnswer": "Soup",
        "explanation": "🍲 **Soup** significa **Sopa** em inglês! Exemplo prático: \"A warm bowl of vegetable soup.\"",
        "phoneticHint": "/suːp/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p12",
    "worldId": 0,
    "phaseNumber": 12,
    "title": "Sala & Tecnologia Moderna",
    "subtitle": "Celulares, computadores e gadgets em cartões visuais",
    "pedagogicalObjective": "Nomear os aparelhos eletrônicos e recursos tecnológicos atuais.",
    "type": "lesson",
    "icon": "phone",
    "cefrLevel": "A1",
    "theorySummary": [
      "Phone (/foʊn/) e Computer (/kəmˈpjuː.tər/) são fundamentais para estudo e trabalho.",
      "Headphones (/ˈhed.foʊnz/) é usado no plural porque possui duas saídas acústicas.",
      "Camera (/ˈkæm.rə/) tem apenas duas sílabas na fala natural em inglês."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p12-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Phone\"**?",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
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
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television / TV",
            "translationPt": "Televisão"
          }
        ],
        "options": [
          "Headphones",
          "Phone",
          "Computer",
          "Television"
        ],
        "correctAnswer": "Phone",
        "explanation": "📱 **Phone** significa **Celular / Telefone** em inglês! Exemplo prático: \"I check text messages on my phone.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Computador / Notebook\"** em inglês? Toque na imagem:",
        "audioPhrase": "Computer",
        "visualEmoji": "💻",
        "visualOptions": [
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television / TV",
            "translationPt": "Televisão"
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
          }
        ],
        "options": [
          "Computer",
          "Television",
          "Headphones",
          "Phone"
        ],
        "correctAnswer": "Computer",
        "explanation": "💻 **Computer** significa **Computador / Notebook** em inglês! Exemplo prático: \"She studies English on her computer.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p12-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Headphones\"**:",
        "audioPhrase": "Headphones",
        "visualEmoji": "🎧",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television / TV",
            "translationPt": "Televisão"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          }
        ],
        "options": [
          "Phone",
          "Television",
          "Headphones",
          "Computer"
        ],
        "correctAnswer": "Headphones",
        "explanation": "🎧 **Headphones** significa **Fones de ouvido** em inglês! Exemplo prático: \"Wireless headphones provide clear audio.\"",
        "phoneticHint": "/ˈhed.foʊnz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Television\"**?",
        "audioPhrase": "Television",
        "visualEmoji": "📺",
        "visualOptions": [
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television / TV",
            "translationPt": "Televisão"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
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
          }
        ],
        "options": [
          "Television",
          "Computer",
          "Headphones",
          "Phone"
        ],
        "correctAnswer": "Television",
        "explanation": "📺 **Television** significa **Televisão** em inglês! Exemplo prático: \"Watch educational shows on television.\"",
        "phoneticHint": "/ˈtel.ɪˌvɪʒ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Câmera fotográfica\"** em inglês? Toque na imagem:",
        "audioPhrase": "Camera",
        "visualEmoji": "📷",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Camera",
            "emoji": "📷",
            "label": "Camera",
            "translationPt": "Câmera fotográfica"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          }
        ],
        "options": [
          "Phone",
          "Camera",
          "Computer",
          "Headphones"
        ],
        "correctAnswer": "Camera",
        "explanation": "📷 **Camera** significa **Câmera fotográfica** em inglês! Exemplo prático: \"Take memorable pictures with this camera.\"",
        "phoneticHint": "/ˈkæm.rə/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p12-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Battery\"**:",
        "audioPhrase": "Battery",
        "visualEmoji": "🔋",
        "visualOptions": [
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Bateria"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          }
        ],
        "options": [
          "Computer",
          "Phone",
          "Battery",
          "Headphones"
        ],
        "correctAnswer": "Battery",
        "explanation": "🔋 **Battery** significa **Bateria** em inglês! Exemplo prático: \"Recharge the battery when it gets low.\"",
        "phoneticHint": "/ˈbæt.ər.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Mouse\"**?",
        "audioPhrase": "Mouse",
        "visualEmoji": "🖱️",
        "visualOptions": [
          {
            "text": "Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
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
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          }
        ],
        "options": [
          "Mouse",
          "Headphones",
          "Phone",
          "Computer"
        ],
        "correctAnswer": "Mouse",
        "explanation": "🖱️ **Mouse** significa **Mouse de computador** em inglês! Exemplo prático: \"Click on the link using your mouse.\"",
        "phoneticHint": "/maʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Teclado\"** em inglês? Toque na imagem:",
        "audioPhrase": "Keyboard",
        "visualEmoji": "⌨️",
        "visualOptions": [
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
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          }
        ],
        "options": [
          "Headphones",
          "Phone",
          "Keyboard",
          "Computer"
        ],
        "correctAnswer": "Keyboard",
        "explanation": "⌨️ **Keyboard** significa **Teclado** em inglês! Exemplo prático: \"Type the sentences on the keyboard.\"",
        "phoneticHint": "/ˈkiː.bɔːd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p12-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Tablet\"**:",
        "audioPhrase": "Tablet",
        "visualEmoji": "📟",
        "visualOptions": [
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          },
          {
            "text": "Tablet",
            "emoji": "📟",
            "label": "Tablet",
            "translationPt": "Tablet"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          }
        ],
        "options": [
          "Headphones",
          "Tablet",
          "Computer",
          "Phone"
        ],
        "correctAnswer": "Tablet",
        "explanation": "📟 **Tablet** significa **Tablet** em inglês! Exemplo prático: \"Children read e-books on the tablet.\"",
        "phoneticHint": "/ˈtæb.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Radio\"**?",
        "audioPhrase": "Radio",
        "visualEmoji": "📻",
        "visualOptions": [
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
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          }
        ],
        "options": [
          "Phone",
          "Radio",
          "Computer",
          "Headphones"
        ],
        "correctAnswer": "Radio",
        "explanation": "📻 **Radio** significa **Rádio** em inglês! Exemplo prático: \"Listen to English podcasts on the radio.\"",
        "phoneticHint": "/ˈreɪ.di.oʊ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p13",
    "worldId": 0,
    "phaseNumber": 13,
    "title": "Lugares da Cidade & Comunidade",
    "subtitle": "Escola, hospital, praça e supermercado em imagens",
    "pedagogicalObjective": "Reconhecer locais públicos e pontos de referência urbanos.",
    "type": "lesson",
    "icon": "city",
    "cefrLevel": "A1",
    "theorySummary": [
      "School (/skuːl/) e Hospital (/ˈhɒs.pɪ.təl/) são destinos essenciais em qualquer localidade.",
      "Para dizer \"ir à escola\", dizemos \"go to school\" (sem artigo \"the\" geralmente).",
      "Park (/pɑːk/) é o local predileto para caminhadas e lazer ao ar livre."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p13-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"School\"**?",
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
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          }
        ],
        "options": [
          "School",
          "Hospital",
          "Supermarket",
          "Park"
        ],
        "correctAnswer": "School",
        "explanation": "🏫 **School** significa **Escola** em inglês! Exemplo prático: \"Students learn languages at school.\"",
        "phoneticHint": "/skuːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Hospital\"** em inglês? Toque na imagem:",
        "audioPhrase": "Hospital",
        "visualEmoji": "🏥",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          }
        ],
        "options": [
          "School",
          "Park",
          "Hospital",
          "Supermarket"
        ],
        "correctAnswer": "Hospital",
        "explanation": "🏥 **Hospital** significa **Hospital** em inglês! Exemplo prático: \"Doctors and nurses care for patients at the hospital.\"",
        "phoneticHint": "/ˈhɒs.pɪ.təl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p13-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Park\"**:",
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
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          }
        ],
        "options": [
          "Park",
          "School",
          "Supermarket",
          "Hospital"
        ],
        "correctAnswer": "Park",
        "explanation": "🌳 **Park** significa **Parque / Praça** em inglês! Exemplo prático: \"Families have picnics in the green park.\"",
        "phoneticHint": "/pɑːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Supermarket\"**?",
        "audioPhrase": "Supermarket",
        "visualEmoji": "🛒",
        "visualOptions": [
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Hospital",
          "Supermarket",
          "Park",
          "School"
        ],
        "correctAnswer": "Supermarket",
        "explanation": "🛒 **Supermarket** significa **Supermercado** em inglês! Exemplo prático: \"Buy fresh food at the local supermarket.\"",
        "phoneticHint": "/ˈsuː.pəˌmɑː.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Restaurante\"** em inglês? Toque na imagem:",
        "audioPhrase": "Restaurant",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Hospital",
          "Park",
          "Restaurant",
          "School"
        ],
        "correctAnswer": "Restaurant",
        "explanation": "🍽️ **Restaurant** significa **Restaurante** em inglês! Exemplo prático: \"We have dinner at our favorite restaurant.\"",
        "phoneticHint": "/ˈres.trɒnt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p13-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Bank\"**:",
        "audioPhrase": "Bank",
        "visualEmoji": "🏦",
        "visualOptions": [
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
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
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          }
        ],
        "options": [
          "Park",
          "School",
          "Bank",
          "Hospital"
        ],
        "correctAnswer": "Bank",
        "explanation": "🏦 **Bank** significa **Banco** em inglês! Exemplo prático: \"Deposit money safely at the city bank.\"",
        "phoneticHint": "/bæŋk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Airport\"**?",
        "audioPhrase": "Airport",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto"
          }
        ],
        "options": [
          "Hospital",
          "School",
          "Park",
          "Airport"
        ],
        "correctAnswer": "Airport",
        "explanation": "🛫 **Airport** significa **Aeroporto** em inglês! Exemplo prático: \"Depart on international flights from the airport.\"",
        "phoneticHint": "/ˈeə.pɔːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Hotel\"** em inglês? Toque na imagem:",
        "audioPhrase": "Hotel",
        "visualEmoji": "🏨",
        "visualOptions": [
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
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
          "Park",
          "School",
          "Hospital",
          "Hotel"
        ],
        "correctAnswer": "Hotel",
        "explanation": "🏨 **Hotel** significa **Hotel** em inglês! Exemplo prático: \"Stay at a comfortable downtown hotel.\"",
        "phoneticHint": "/hoʊˈtel/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p13-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Library\"**:",
        "audioPhrase": "Library",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          }
        ],
        "options": [
          "School",
          "Park",
          "Library",
          "Hospital"
        ],
        "correctAnswer": "Library",
        "explanation": "📚 **Library** significa **Biblioteca** em inglês! Exemplo prático: \"Read quiet books in the public library.\"",
        "phoneticHint": "/ˈlaɪ.brər.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Bakery\"**?",
        "audioPhrase": "Bakery",
        "visualEmoji": "🥖",
        "visualOptions": [
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Padaria"
          },
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          }
        ],
        "options": [
          "Bakery",
          "Park",
          "School",
          "Hospital"
        ],
        "correctAnswer": "Bakery",
        "explanation": "🥖 **Bakery** significa **Padaria** em inglês! Exemplo prático: \"Buy warm bread every morning at the bakery.\"",
        "phoneticHint": "/ˈbeɪ.kər.i/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p14",
    "worldId": 0,
    "phaseNumber": 14,
    "title": "Natureza & Elementos Naturais",
    "subtitle": "Sol, lua, árvores e rios em cartões ilustrados",
    "pedagogicalObjective": "Nomear elementos da geografia e da natureza do planeta.",
    "type": "lesson",
    "icon": "tree",
    "cefrLevel": "A1",
    "theorySummary": [
      "Sun (/sʌn/) e Moon (/muːn/) são elementos universais do céu.",
      "Tree (/triː/) possui pronúncia distinta de Three (/θriː/): cuidado com a ausência do \"H\"!",
      "Mountain (/ˈmaʊn.tɪn/) e River (/ˈrɪv.ər/) são características geográficas centrais."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p14-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Sun\"**?",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          }
        ],
        "options": [
          "Flower",
          "Tree",
          "Moon",
          "Sun"
        ],
        "correctAnswer": "Sun",
        "explanation": "☀️ **Sun** significa **Sol** em inglês! Exemplo prático: \"The morning sun brings light and energy.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Lua\"** em inglês? Toque na imagem:",
        "audioPhrase": "Moon",
        "visualEmoji": "🌙",
        "visualOptions": [
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          }
        ],
        "options": [
          "Tree",
          "Sun",
          "Flower",
          "Moon"
        ],
        "correctAnswer": "Moon",
        "explanation": "🌙 **Moon** significa **Lua** em inglês! Exemplo prático: \"The crescent moon shines at night.\"",
        "phoneticHint": "/muːn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p14-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Tree\"**:",
        "audioPhrase": "Tree",
        "visualEmoji": "🌲",
        "visualOptions": [
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          }
        ],
        "options": [
          "Flower",
          "Sun",
          "Moon",
          "Tree"
        ],
        "correctAnswer": "Tree",
        "explanation": "🌲 **Tree** significa **Árvore** em inglês! Exemplo prático: \"Tall green trees grow in the forest.\"",
        "phoneticHint": "/triː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Flower\"**?",
        "audioPhrase": "Flower",
        "visualEmoji": "🌸",
        "visualOptions": [
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          }
        ],
        "options": [
          "Tree",
          "Flower",
          "Sun",
          "Moon"
        ],
        "correctAnswer": "Flower",
        "explanation": "🌸 **Flower** significa **Flor** em inglês! Exemplo prático: \"A beautiful pink flower blooms in spring.\"",
        "phoneticHint": "/ˈflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Montanha\"** em inglês? Toque na imagem:",
        "audioPhrase": "Mountain",
        "visualEmoji": "⛰️",
        "visualOptions": [
          {
            "text": "Mountain",
            "emoji": "⛰️",
            "label": "Mountain",
            "translationPt": "Montanha"
          },
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          }
        ],
        "options": [
          "Mountain",
          "Tree",
          "Moon",
          "Sun"
        ],
        "correctAnswer": "Mountain",
        "explanation": "⛰️ **Mountain** significa **Montanha** em inglês! Exemplo prático: \"Snow covers the peaks of the high mountain.\"",
        "phoneticHint": "/ˈmaʊn.tɪn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p14-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"River\"**:",
        "audioPhrase": "River",
        "visualEmoji": "🌊",
        "visualOptions": [
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "River",
            "emoji": "🌊",
            "label": "River",
            "translationPt": "Rio"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          }
        ],
        "options": [
          "Tree",
          "River",
          "Sun",
          "Moon"
        ],
        "correctAnswer": "River",
        "explanation": "🌊 **River** significa **Rio** em inglês! Exemplo prático: \"Clean freshwater flows down the winding river.\"",
        "phoneticHint": "/ˈrɪv.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Forest\"**?",
        "audioPhrase": "Forest",
        "visualEmoji": "🌳",
        "visualOptions": [
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Forest",
            "emoji": "🌳",
            "label": "Forest",
            "translationPt": "Floresta / Bosque"
          },
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          }
        ],
        "options": [
          "Sun",
          "Forest",
          "Tree",
          "Moon"
        ],
        "correctAnswer": "Forest",
        "explanation": "🌳 **Forest** significa **Floresta / Bosque** em inglês! Exemplo prático: \"Wild animals live peacefully in the dense forest.\"",
        "phoneticHint": "/ˈfɒr.ɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Praia\"** em inglês? Toque na imagem:",
        "audioPhrase": "Beach",
        "visualEmoji": "🏖️",
        "visualOptions": [
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Beach",
            "emoji": "🏖️",
            "label": "Beach",
            "translationPt": "Praia"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          }
        ],
        "options": [
          "Tree",
          "Beach",
          "Sun",
          "Moon"
        ],
        "correctAnswer": "Beach",
        "explanation": "🏖️ **Beach** significa **Praia** em inglês! Exemplo prático: \"Walk barefoot on the sunny sandy beach.\"",
        "phoneticHint": "/biːtʃ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p14-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Fire\"**:",
        "audioPhrase": "Fire",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo"
          },
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          }
        ],
        "options": [
          "Sun",
          "Moon",
          "Fire",
          "Tree"
        ],
        "correctAnswer": "Fire",
        "explanation": "🔥 **Fire** significa **Fogo** em inglês! Exemplo prático: \"A warm camp fire keeps travelers warm.\"",
        "phoneticHint": "/faɪər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Island\"**?",
        "audioPhrase": "Island",
        "visualEmoji": "🏝️",
        "visualOptions": [
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Island",
            "emoji": "🏝️",
            "label": "Island",
            "translationPt": "Ilha"
          }
        ],
        "options": [
          "Tree",
          "Moon",
          "Sun",
          "Island"
        ],
        "correctAnswer": "Island",
        "explanation": "🏝️ **Island** significa **Ilha** em inglês! Exemplo prático: \"An island surrounded by tropical blue water.\"",
        "phoneticHint": "/ˈaɪ.lənd/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p15",
    "worldId": 0,
    "phaseNumber": 15,
    "title": "Clima, Tempo & Estações",
    "subtitle": "Chuva, neve, vento e arco-íris com imagens dinâmicas",
    "pedagogicalObjective": "Descrever condições climáticas através de vocabulário visual direto.",
    "type": "lesson",
    "icon": "cloud-rain",
    "cefrLevel": "A1",
    "theorySummary": [
      "Rain (/reɪn/) e Snow (/snoʊ/) podem funcionar tanto como substantivo quanto como verbo.",
      "Wind (/wɪnd/) refere-se ao ar em movimento.",
      "Rainbow (/ˈreɪn.boʊ/) é literalmente o \"arco da chuva\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p15-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Rain\"**?",
        "audioPhrase": "Rain",
        "visualEmoji": "🌧️",
        "visualOptions": [
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
          },
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          },
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          }
        ],
        "options": [
          "Rain",
          "Snow",
          "Wind",
          "Cloud"
        ],
        "correctAnswer": "Rain",
        "explanation": "🌧️ **Rain** significa **Chuva** em inglês! Exemplo prático: \"Gentle rain waters the thirsty crops.\"",
        "phoneticHint": "/reɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Neve\"** em inglês? Toque na imagem:",
        "audioPhrase": "Snow",
        "visualEmoji": "❄️",
        "visualOptions": [
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          },
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          }
        ],
        "options": [
          "Rain",
          "Cloud",
          "Snow",
          "Wind"
        ],
        "correctAnswer": "Snow",
        "explanation": "❄️ **Snow** significa **Neve** em inglês! Exemplo prático: \"White snow falls silently in winter.\"",
        "phoneticHint": "/snoʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p15-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Cloud\"**:",
        "audioPhrase": "Cloud",
        "visualEmoji": "☁️",
        "visualOptions": [
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          },
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          }
        ],
        "options": [
          "Cloud",
          "Snow",
          "Wind",
          "Rain"
        ],
        "correctAnswer": "Cloud",
        "explanation": "☁️ **Cloud** significa **Nuvem** em inglês! Exemplo prático: \"Fluffy white clouds drift across the blue sky.\"",
        "phoneticHint": "/klaʊd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Wind\"**?",
        "audioPhrase": "Wind",
        "visualEmoji": "💨",
        "visualOptions": [
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
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
          "Cloud",
          "Wind",
          "Rain",
          "Snow"
        ],
        "correctAnswer": "Wind",
        "explanation": "💨 **Wind** significa **Vento** em inglês! Exemplo prático: \"A cool summer wind rustles the leaves.\"",
        "phoneticHint": "/wɪnd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Arco-íris\"** em inglês? Toque na imagem:",
        "audioPhrase": "Rainbow",
        "visualEmoji": "🌈",
        "visualOptions": [
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris"
          },
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
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
          "Rainbow",
          "Cloud",
          "Rain",
          "Snow"
        ],
        "correctAnswer": "Rainbow",
        "explanation": "🌈 **Rainbow** significa **Arco-íris** em inglês! Exemplo prático: \"A colorful rainbow appears after the storm.\"",
        "phoneticHint": "/ˈreɪn.boʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p15-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Lightning\"**:",
        "audioPhrase": "Lightning",
        "visualEmoji": "⚡",
        "visualOptions": [
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
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
          },
          {
            "text": "Lightning",
            "emoji": "⚡",
            "label": "Lightning",
            "translationPt": "Relâmpago / Raio"
          }
        ],
        "options": [
          "Cloud",
          "Rain",
          "Snow",
          "Lightning"
        ],
        "correctAnswer": "Lightning",
        "explanation": "⚡ **Lightning** significa **Relâmpago / Raio** em inglês! Exemplo prático: \"Bright lightning flashes across the dark sky.\"",
        "phoneticHint": "/ˈlaɪt.nɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Fog\"**?",
        "audioPhrase": "Fog",
        "visualEmoji": "🌫️",
        "visualOptions": [
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Fog",
            "emoji": "🌫️",
            "label": "Fog",
            "translationPt": "Neblina / Nevoeiro"
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          }
        ],
        "options": [
          "Cloud",
          "Rain",
          "Fog",
          "Snow"
        ],
        "correctAnswer": "Fog",
        "explanation": "🌫️ **Fog** significa **Neblina / Nevoeiro** em inglês! Exemplo prático: \"Thick morning fog reduces visibility.\"",
        "phoneticHint": "/fɒɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Guarda-chuva\"** em inglês? Toque na imagem:",
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
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
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
          "Umbrella",
          "Cloud",
          "Rain",
          "Snow"
        ],
        "correctAnswer": "Umbrella",
        "explanation": "☂️ **Umbrella** significa **Guarda-chuva** em inglês! Exemplo prático: \"Carry an umbrella when it looks like rain.\"",
        "phoneticHint": "/ʌmˈbrel.ə/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p15-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Sun\"**:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sunny Day",
            "translationPt": "Dia ensolarado"
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          }
        ],
        "options": [
          "Cloud",
          "Rain",
          "Sun",
          "Snow"
        ],
        "correctAnswer": "Sun",
        "explanation": "☀️ **Sun** significa **Dia ensolarado** em inglês! Exemplo prático: \"A warm sunny day for outdoor activities.\"",
        "phoneticHint": "/ˈsʌn.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Thermometer\"**?",
        "audioPhrase": "Thermometer",
        "visualEmoji": "🌡️",
        "visualOptions": [
          {
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro (Temperatura)"
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          }
        ],
        "options": [
          "Cloud",
          "Rain",
          "Thermometer",
          "Snow"
        ],
        "correctAnswer": "Thermometer",
        "explanation": "🌡️ **Thermometer** significa **Termômetro (Temperatura)** em inglês! Exemplo prático: \"The thermometer shows high temperatures.\"",
        "phoneticHint": "/θəˈmɒm.ɪ.tər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p16",
    "worldId": 0,
    "phaseNumber": 16,
    "title": "Ações Cotidianas & Verbos Visuais",
    "subtitle": "Correr, comer, dormir e ler associados a gestos claros",
    "pedagogicalObjective": "Associar verbos fundamentais de ação a imagens ilustrativas.",
    "type": "lesson",
    "icon": "run",
    "cefrLevel": "A1",
    "theorySummary": [
      "Verbos em inglês são simples: não conjugam intensamente como em português!",
      "Run (/rʌn/), Walk (/wɔːk/), Eat (/iːt/) e Sleep (/sliːp/) formam a espinha dorsal de qualquer conversa.",
      "Read (/riːd/) rima com Need, enquanto Write (/raɪt/) tem o \"W\" mudo."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p16-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Run\"**?",
        "audioPhrase": "Run",
        "visualEmoji": "🏃",
        "visualOptions": [
          {
            "text": "Drink",
            "emoji": "🥤",
            "label": "Drink",
            "translationPt": "Beber"
          },
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          }
        ],
        "options": [
          "Drink",
          "Run",
          "Walk",
          "Eat"
        ],
        "correctAnswer": "Run",
        "explanation": "🏃 **Run** significa **Correr** em inglês! Exemplo prático: \"Athletes run fast in the stadium.\"",
        "phoneticHint": "/rʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Caminhar\"** em inglês? Toque na imagem:",
        "audioPhrase": "Walk",
        "visualEmoji": "🚶",
        "visualOptions": [
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          },
          {
            "text": "Drink",
            "emoji": "🥤",
            "label": "Drink",
            "translationPt": "Beber"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          }
        ],
        "options": [
          "Run",
          "Walk",
          "Drink",
          "Eat"
        ],
        "correctAnswer": "Walk",
        "explanation": "🚶 **Walk** significa **Caminhar** em inglês! Exemplo prático: \"Take a relaxed walk through the botanical garden.\"",
        "phoneticHint": "/wɔːk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p16-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Eat\"**:",
        "audioPhrase": "Eat",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          },
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Drink",
            "emoji": "🥤",
            "label": "Drink",
            "translationPt": "Beber"
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          }
        ],
        "options": [
          "Eat",
          "Run",
          "Drink",
          "Walk"
        ],
        "correctAnswer": "Eat",
        "explanation": "🍽️ **Eat** significa **Comer** em inglês! Exemplo prático: \"We eat wholesome meals with family.\"",
        "phoneticHint": "/iːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Drink\"**?",
        "audioPhrase": "Drink",
        "visualEmoji": "🥤",
        "visualOptions": [
          {
            "text": "Drink",
            "emoji": "🥤",
            "label": "Drink",
            "translationPt": "Beber"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          },
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          }
        ],
        "options": [
          "Drink",
          "Eat",
          "Run",
          "Walk"
        ],
        "correctAnswer": "Drink",
        "explanation": "🥤 **Drink** significa **Beber** em inglês! Exemplo prático: \"Remember to drink water throughout the day.\"",
        "phoneticHint": "/drɪŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Dormir\"** em inglês? Toque na imagem:",
        "audioPhrase": "Sleep",
        "visualEmoji": "😴",
        "visualOptions": [
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          },
          {
            "text": "Sleep",
            "emoji": "😴",
            "label": "Sleep",
            "translationPt": "Dormir"
          },
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          }
        ],
        "options": [
          "Walk",
          "Eat",
          "Sleep",
          "Run"
        ],
        "correctAnswer": "Sleep",
        "explanation": "😴 **Sleep** significa **Dormir** em inglês! Exemplo prático: \"Get eight hours of restful sleep.\"",
        "phoneticHint": "/sliːp/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p16-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Read\"**:",
        "audioPhrase": "Read",
        "visualEmoji": "📖",
        "visualOptions": [
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          },
          {
            "text": "Read",
            "emoji": "📖",
            "label": "Read",
            "translationPt": "Ler"
          }
        ],
        "options": [
          "Run",
          "Walk",
          "Eat",
          "Read"
        ],
        "correctAnswer": "Read",
        "explanation": "📖 **Read** significa **Ler** em inglês! Exemplo prático: \"I read inspiring stories before bedtime.\"",
        "phoneticHint": "/riːd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Write\"**?",
        "audioPhrase": "Write",
        "visualEmoji": "✍️",
        "visualOptions": [
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Write",
            "emoji": "✍️",
            "label": "Write",
            "translationPt": "Escrever"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          }
        ],
        "options": [
          "Run",
          "Write",
          "Eat",
          "Walk"
        ],
        "correctAnswer": "Write",
        "explanation": "✍️ **Write** significa **Escrever** em inglês! Exemplo prático: \"Write new English words in your notebook.\"",
        "phoneticHint": "/raɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Nadar\"** em inglês? Toque na imagem:",
        "audioPhrase": "Swim",
        "visualEmoji": "🏊",
        "visualOptions": [
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          },
          {
            "text": "Swim",
            "emoji": "🏊",
            "label": "Swim",
            "translationPt": "Nadar"
          },
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          }
        ],
        "options": [
          "Walk",
          "Swim",
          "Run",
          "Eat"
        ],
        "correctAnswer": "Swim",
        "explanation": "🏊 **Swim** significa **Nadar** em inglês! Exemplo prático: \"Learn how to swim in the pool.\"",
        "phoneticHint": "/swɪm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p16-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Sing\"**:",
        "audioPhrase": "Sing",
        "visualEmoji": "🎤",
        "visualOptions": [
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Sing",
            "emoji": "🎤",
            "label": "Sing",
            "translationPt": "Cantar"
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          }
        ],
        "options": [
          "Run",
          "Sing",
          "Walk",
          "Eat"
        ],
        "correctAnswer": "Sing",
        "explanation": "🎤 **Sing** significa **Cantar** em inglês! Exemplo prático: \"Sing cheerful songs with friends.\"",
        "phoneticHint": "/sɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Dance\"**?",
        "audioPhrase": "Dance",
        "visualEmoji": "💃",
        "visualOptions": [
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Dance",
            "emoji": "💃",
            "label": "Dance",
            "translationPt": "Dançar"
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          },
          {
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          }
        ],
        "options": [
          "Run",
          "Dance",
          "Walk",
          "Eat"
        ],
        "correctAnswer": "Dance",
        "explanation": "💃 **Dance** significa **Dançar** em inglês! Exemplo prático: \"People dance to upbeat music.\"",
        "phoneticHint": "/dɑːns/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p17",
    "worldId": 0,
    "phaseNumber": 17,
    "title": "Sentimentos & Emoções Humanas",
    "subtitle": "Feliz, triste, calmo e surpreso com emojis expressivos",
    "pedagogicalObjective": "Expressar estados de espírito e emoções de forma visual.",
    "type": "lesson",
    "icon": "smile",
    "cefrLevel": "A1",
    "theorySummary": [
      "Happy (/ˈhæp.i/) e Sad (/sæd/) são antônimos fundamentais.",
      "Para dizer como se sente, use o verbo TO BE: \"I am happy\", \"She is surprised\".",
      "Tired (/taɪəd/) expressa cansaço físico ou mental."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p17-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Happy\"**?",
        "audioPhrase": "Happy",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Surprised",
            "emoji": "😮",
            "label": "Surprised",
            "translationPt": "Surpreso / Admirado"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          }
        ],
        "options": [
          "Sad",
          "Surprised",
          "Happy",
          "Angry"
        ],
        "correctAnswer": "Happy",
        "explanation": "😊 **Happy** significa **Feliz** em inglês! Exemplo prático: \"A warm smile shows that you are happy.\"",
        "phoneticHint": "/ˈhæp.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Triste\"** em inglês? Toque na imagem:",
        "audioPhrase": "Sad",
        "visualEmoji": "😢",
        "visualOptions": [
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Surprised",
            "emoji": "😮",
            "label": "Surprised",
            "translationPt": "Surpreso / Admirado"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          }
        ],
        "options": [
          "Sad",
          "Surprised",
          "Happy",
          "Angry"
        ],
        "correctAnswer": "Sad",
        "explanation": "😢 **Sad** significa **Triste** em inglês! Exemplo prático: \"A hug helps when someone feels sad.\"",
        "phoneticHint": "/sæd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p17-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Angry\"**:",
        "audioPhrase": "Angry",
        "visualEmoji": "😠",
        "visualOptions": [
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Surprised",
            "emoji": "😮",
            "label": "Surprised",
            "translationPt": "Surpreso / Admirado"
          }
        ],
        "options": [
          "Angry",
          "Happy",
          "Sad",
          "Surprised"
        ],
        "correctAnswer": "Angry",
        "explanation": "😠 **Angry** significa **Bravo / Irritado** em inglês! Exemplo prático: \"Take deep breaths when you feel angry.\"",
        "phoneticHint": "/ˈæŋ.ɡri/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Surprised\"**?",
        "audioPhrase": "Surprised",
        "visualEmoji": "😮",
        "visualOptions": [
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Surprised",
            "emoji": "😮",
            "label": "Surprised",
            "translationPt": "Surpreso / Admirado"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          }
        ],
        "options": [
          "Sad",
          "Angry",
          "Surprised",
          "Happy"
        ],
        "correctAnswer": "Surprised",
        "explanation": "😮 **Surprised** significa **Surpreso / Admirado** em inglês! Exemplo prático: \"She was pleasantly surprised by the gift.\"",
        "phoneticHint": "/səˈpraɪzd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cansado\"** em inglês? Toque na imagem:",
        "audioPhrase": "Tired",
        "visualEmoji": "🥱",
        "visualOptions": [
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Tired",
            "emoji": "🥱",
            "label": "Tired",
            "translationPt": "Cansado"
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          }
        ],
        "options": [
          "Happy",
          "Angry",
          "Tired",
          "Sad"
        ],
        "correctAnswer": "Tired",
        "explanation": "🥱 **Tired** significa **Cansado** em inglês! Exemplo prático: \"After a long workday, he feels tired.\"",
        "phoneticHint": "/taɪəd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p17-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Confused\"**:",
        "audioPhrase": "Confused",
        "visualEmoji": "🤔",
        "visualOptions": [
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Confused",
            "emoji": "🤔",
            "label": "Confused",
            "translationPt": "Confuso"
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          }
        ],
        "options": [
          "Happy",
          "Confused",
          "Sad",
          "Angry"
        ],
        "correctAnswer": "Confused",
        "explanation": "🤔 **Confused** significa **Confuso** em inglês! Exemplo prático: \"Ask questions if you feel confused.\"",
        "phoneticHint": "/kənˈfjuːzd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Scared\"**?",
        "audioPhrase": "Scared",
        "visualEmoji": "😨",
        "visualOptions": [
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Scared",
            "emoji": "😨",
            "label": "Scared / Afraid",
            "translationPt": "Com medo / Assustado"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          }
        ],
        "options": [
          "Sad",
          "Angry",
          "Scared",
          "Happy"
        ],
        "correctAnswer": "Scared",
        "explanation": "😨 **Scared** significa **Com medo / Assustado** em inglês! Exemplo prático: \"Thunder sometimes makes children scared.\"",
        "phoneticHint": "/skeəd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Animado / Empolgado\"** em inglês? Toque na imagem:",
        "audioPhrase": "Excited",
        "visualEmoji": "🤩",
        "visualOptions": [
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Excited",
            "emoji": "🤩",
            "label": "Excited",
            "translationPt": "Animado / Empolgado"
          }
        ],
        "options": [
          "Sad",
          "Angry",
          "Happy",
          "Excited"
        ],
        "correctAnswer": "Excited",
        "explanation": "🤩 **Excited** significa **Animado / Empolgado** em inglês! Exemplo prático: \"We are excited about the upcoming holiday.\"",
        "phoneticHint": "/ɪkˈsaɪ.tɪd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p17-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Calm\"**:",
        "audioPhrase": "Calm",
        "visualEmoji": "😌",
        "visualOptions": [
          {
            "text": "Calm",
            "emoji": "😌",
            "label": "Calm",
            "translationPt": "Calmo / Tranquilo"
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          }
        ],
        "options": [
          "Calm",
          "Angry",
          "Happy",
          "Sad"
        ],
        "correctAnswer": "Calm",
        "explanation": "😌 **Calm** significa **Calmo / Tranquilo** em inglês! Exemplo prático: \"Meditation keeps your mind peaceful and calm.\"",
        "phoneticHint": "/kɑːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Cool\"**?",
        "audioPhrase": "Cool",
        "visualEmoji": "😎",
        "visualOptions": [
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Cool",
            "emoji": "😎",
            "label": "Cool",
            "translationPt": "Descolado / Legal"
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          }
        ],
        "options": [
          "Angry",
          "Happy",
          "Cool",
          "Sad"
        ],
        "correctAnswer": "Cool",
        "explanation": "😎 **Cool** significa **Descolado / Legal** em inglês! Exemplo prático: \"Wearing sunglasses looks very cool.\"",
        "phoneticHint": "/kuːl/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p18",
    "worldId": 0,
    "phaseNumber": 18,
    "title": "Material Escolar & Escritório",
    "subtitle": "Livro, caneta, lápis e régua com imagens nítidas",
    "pedagogicalObjective": "Identificar itens de estudo e materiais didáticos.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Book (/bʊk/), Pen (/pen/) e Pencil (/ˈpen.səl/) estão no estojo de todo estudante.",
      "Notebook (/ˈnoʊt.bʊk/) em inglês refere-se primariamente a um caderno de papel!",
      "Eraser (/ɪˈreɪ.zər/) no inglês americano corresponde a \"Rubber\" no inglês britânico."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p18-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Book\"**?",
        "audioPhrase": "Book",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          },
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          }
        ],
        "options": [
          "Pencil",
          "Notebook",
          "Book",
          "Pen"
        ],
        "correctAnswer": "Book",
        "explanation": "📚 **Book** significa **Livro** em inglês! Exemplo prático: \"Reading a good book enriches your vocabulary.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Caderno de anotações\"** em inglês? Toque na imagem:",
        "audioPhrase": "Notebook",
        "visualEmoji": "📓",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📚",
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
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
          }
        ],
        "options": [
          "Book",
          "Pen",
          "Notebook",
          "Pencil"
        ],
        "correctAnswer": "Notebook",
        "explanation": "📓 **Notebook** significa **Caderno de anotações** em inglês! Exemplo prático: \"Write lecture notes inside your notebook.\"",
        "phoneticHint": "/ˈnoʊt.bʊk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p18-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Pen\"**:",
        "audioPhrase": "Pen",
        "visualEmoji": "🖊️",
        "visualOptions": [
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
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          }
        ],
        "options": [
          "Pencil",
          "Pen",
          "Book",
          "Notebook"
        ],
        "correctAnswer": "Pen",
        "explanation": "🖊️ **Pen** significa **Caneta** em inglês! Exemplo prático: \"Sign the contract using blue ink with a pen.\"",
        "phoneticHint": "/pen/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Pencil\"**?",
        "audioPhrase": "Pencil",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
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
          }
        ],
        "options": [
          "Book",
          "Notebook",
          "Pen",
          "Pencil"
        ],
        "correctAnswer": "Pencil",
        "explanation": "✏️ **Pencil** significa **Lápis** em inglês! Exemplo prático: \"Sketch drawing lines with a sharp pencil.\"",
        "phoneticHint": "/ˈpen.səl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Borracha escolar\"** em inglês? Toque na imagem:",
        "audioPhrase": "Eraser",
        "visualEmoji": "🧼",
        "visualOptions": [
          {
            "text": "Eraser",
            "emoji": "🧼",
            "label": "Eraser",
            "translationPt": "Borracha escolar"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          },
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          }
        ],
        "options": [
          "Eraser",
          "Notebook",
          "Book",
          "Pen"
        ],
        "correctAnswer": "Eraser",
        "explanation": "🧼 **Eraser** significa **Borracha escolar** em inglês! Exemplo prático: \"Erase mistakes cleanly with an eraser.\"",
        "phoneticHint": "/ɪˈreɪ.zər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p18-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Ruler\"**:",
        "audioPhrase": "Ruler",
        "visualEmoji": "📏",
        "visualOptions": [
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua"
          }
        ],
        "options": [
          "Pen",
          "Book",
          "Notebook",
          "Ruler"
        ],
        "correctAnswer": "Ruler",
        "explanation": "📏 **Ruler** significa **Régua** em inglês! Exemplo prático: \"Measure length accurately with a clear ruler.\"",
        "phoneticHint": "/ˈruː.lər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Scissors\"**?",
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
            "text": "Book",
            "emoji": "📚",
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
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          }
        ],
        "options": [
          "Scissors",
          "Book",
          "Pen",
          "Notebook"
        ],
        "correctAnswer": "Scissors",
        "explanation": "✂️ **Scissors** significa **Tesoura** em inglês! Exemplo prático: \"Cut paper shapes using safety scissors.\"",
        "phoneticHint": "/ˈsɪz.əz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cola escolar\"** em inglês? Toque na imagem:",
        "audioPhrase": "Glue",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          },
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          }
        ],
        "options": [
          "Glue",
          "Pen",
          "Notebook",
          "Book"
        ],
        "correctAnswer": "Glue",
        "explanation": "🧴 **Glue** significa **Cola escolar** em inglês! Exemplo prático: \"Paste the collage together with stick glue.\"",
        "phoneticHint": "/ɡluː/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p18-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Desk\"**:",
        "audioPhrase": "Desk",
        "visualEmoji": "🧑‍💻",
        "visualOptions": [
          {
            "text": "Desk",
            "emoji": "🧑‍💻",
            "label": "Desk",
            "translationPt": "Carteira / Mesa de estudos"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          }
        ],
        "options": [
          "Desk",
          "Pen",
          "Book",
          "Notebook"
        ],
        "correctAnswer": "Desk",
        "explanation": "🧑‍💻 **Desk** significa **Carteira / Mesa de estudos** em inglês! Exemplo prático: \"Sit at your study desk to complete homework.\"",
        "phoneticHint": "/desk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Calculator\"**?",
        "audioPhrase": "Calculator",
        "visualEmoji": "🔢",
        "visualOptions": [
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno de anotações"
          },
          {
            "text": "Calculator",
            "emoji": "🔢",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta"
          },
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          }
        ],
        "options": [
          "Notebook",
          "Calculator",
          "Pen",
          "Book"
        ],
        "correctAnswer": "Calculator",
        "explanation": "🔢 **Calculator** significa **Calculadora** em inglês! Exemplo prático: \"Solve math equations using a digital calculator.\"",
        "phoneticHint": "/ˈkæl.kjə.leɪ.tər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p19",
    "worldId": 0,
    "phaseNumber": 19,
    "title": "Pessoas, Família & Comunidade",
    "subtitle": "Bebê, menino, menina, mãe e pai em cartões visuais",
    "pedagogicalObjective": "Reconhecer e nomear termos de parentesco e pessoas ao redor.",
    "type": "lesson",
    "icon": "family",
    "cefrLevel": "A1",
    "theorySummary": [
      "Baby (/ˈbeɪ.bi/), Boy (/bɔɪ/) e Girl (/ɡɜːl/) descrevem faixas etárias iniciais.",
      "Mother (/ˈmʌð.ər/) e Father (/ˈfɑː.ðər/) são chamados carinhosamente de Mom e Dad.",
      "Friend (/frend/) tem a vogal curta \"e\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p19-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Baby\"**?",
        "audioPhrase": "Baby",
        "visualEmoji": "👶",
        "visualOptions": [
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          },
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Man",
            "emoji": "👨",
            "label": "Man",
            "translationPt": "Homem"
          }
        ],
        "options": [
          "Baby",
          "Boy",
          "Girl",
          "Man"
        ],
        "correctAnswer": "Baby",
        "explanation": "👶 **Baby** significa **Bebê** em inglês! Exemplo prático: \"The newborn baby smiles gently.\"",
        "phoneticHint": "/ˈbeɪ.bi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Menino / Garoto\"** em inglês? Toque na imagem:",
        "audioPhrase": "Boy",
        "visualEmoji": "👦",
        "visualOptions": [
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          },
          {
            "text": "Man",
            "emoji": "👨",
            "label": "Man",
            "translationPt": "Homem"
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          }
        ],
        "options": [
          "Boy",
          "Man",
          "Baby",
          "Girl"
        ],
        "correctAnswer": "Boy",
        "explanation": "👦 **Boy** significa **Menino / Garoto** em inglês! Exemplo prático: \"The active boy kicks the football.\"",
        "phoneticHint": "/bɔɪ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p19-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Girl\"**:",
        "audioPhrase": "Girl",
        "visualEmoji": "👧",
        "visualOptions": [
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          },
          {
            "text": "Man",
            "emoji": "👨",
            "label": "Man",
            "translationPt": "Homem"
          }
        ],
        "options": [
          "Girl",
          "Baby",
          "Boy",
          "Man"
        ],
        "correctAnswer": "Girl",
        "explanation": "👧 **Girl** significa **Menina / Garota** em inglês! Exemplo prático: \"The creative girl paints a portrait.\"",
        "phoneticHint": "/ɡɜːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Man\"**?",
        "audioPhrase": "Man",
        "visualEmoji": "👨",
        "visualOptions": [
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          },
          {
            "text": "Man",
            "emoji": "👨",
            "label": "Man",
            "translationPt": "Homem"
          }
        ],
        "options": [
          "Girl",
          "Baby",
          "Boy",
          "Man"
        ],
        "correctAnswer": "Man",
        "explanation": "👨 **Man** significa **Homem** em inglês! Exemplo prático: \"The kind man helps his neighbors.\"",
        "phoneticHint": "/mæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Mulher\"** em inglês? Toque na imagem:",
        "audioPhrase": "Woman",
        "visualEmoji": "👩",
        "visualOptions": [
          {
            "text": "Woman",
            "emoji": "👩",
            "label": "Woman",
            "translationPt": "Mulher"
          },
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          }
        ],
        "options": [
          "Woman",
          "Girl",
          "Baby",
          "Boy"
        ],
        "correctAnswer": "Woman",
        "explanation": "👩 **Woman** significa **Mulher** em inglês! Exemplo prático: \"The professional woman leads the meeting.\"",
        "phoneticHint": "/ˈwʊm.ən/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p19-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Mother\"**:",
        "audioPhrase": "Mother",
        "visualEmoji": "👩‍👧",
        "visualOptions": [
          {
            "text": "Mother",
            "emoji": "👩‍👧",
            "label": "Mother / Mom",
            "translationPt": "Mãe"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          },
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          }
        ],
        "options": [
          "Mother",
          "Boy",
          "Girl",
          "Baby"
        ],
        "correctAnswer": "Mother",
        "explanation": "👩‍👧 **Mother** significa **Mãe** em inglês! Exemplo prático: \"A mother hugs her child with love.\"",
        "phoneticHint": "/ˈmʌð.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Father\"**?",
        "audioPhrase": "Father",
        "visualEmoji": "👨‍👦",
        "visualOptions": [
          {
            "text": "Father",
            "emoji": "👨‍👦",
            "label": "Father / Dad",
            "translationPt": "Pai"
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          },
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          }
        ],
        "options": [
          "Father",
          "Baby",
          "Boy",
          "Girl"
        ],
        "correctAnswer": "Father",
        "explanation": "👨‍👦 **Father** significa **Pai** em inglês! Exemplo prático: \"A father teaches his son to ride a bike.\"",
        "phoneticHint": "/ˈfɑː.ðər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Amigo(a)\"** em inglês? Toque na imagem:",
        "audioPhrase": "Friend",
        "visualEmoji": "🤝",
        "visualOptions": [
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Friend",
            "emoji": "🤝",
            "label": "Friend",
            "translationPt": "Amigo(a)"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          },
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          }
        ],
        "options": [
          "Baby",
          "Friend",
          "Boy",
          "Girl"
        ],
        "correctAnswer": "Friend",
        "explanation": "🤝 **Friend** significa **Amigo(a)** em inglês! Exemplo prático: \"A true friend is always supportive.\"",
        "phoneticHint": "/frend/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p19-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Grandfather\"**:",
        "audioPhrase": "Grandfather",
        "visualEmoji": "👴",
        "visualOptions": [
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Grandfather",
            "emoji": "👴",
            "label": "Grandfather / Grandpa",
            "translationPt": "Avô"
          },
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          }
        ],
        "options": [
          "Baby",
          "Grandfather",
          "Girl",
          "Boy"
        ],
        "correctAnswer": "Grandfather",
        "explanation": "👴 **Grandfather** significa **Avô** em inglês! Exemplo prático: \"Grandfather tells entertaining historical stories.\"",
        "phoneticHint": "/ˈɡræn.fɑː.ðər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Grandmother\"**?",
        "audioPhrase": "Grandmother",
        "visualEmoji": "👵",
        "visualOptions": [
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Grandmother",
            "emoji": "👵",
            "label": "Grandmother / Grandma",
            "translationPt": "Avó"
          }
        ],
        "options": [
          "Girl",
          "Boy",
          "Baby",
          "Grandmother"
        ],
        "correctAnswer": "Grandmother",
        "explanation": "👵 **Grandmother** significa **Avó** em inglês! Exemplo prático: \"Grandmother bakes delicious cinnamon cookies.\"",
        "phoneticHint": "/ˈɡræn.mʌð.ər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p20",
    "worldId": 0,
    "phaseNumber": 20,
    "title": "🎁 Baú da Sabedoria 2: Revisão Visual (11-19)",
    "subtitle": "Consolidação com 11 desafios das unidades 11 a 19",
    "pedagogicalObjective": "Fixar e revisar o vocabulário das lições 11 a 19 com máxima retenção.",
    "type": "chest",
    "icon": "chest",
    "cefrLevel": "A1",
    "theorySummary": [
      "Você chegou ao segundo Baú da Sabedoria Visual!",
      "Nesta revisão reforçaremos: café da manhã, tecnologia, lugares urbanos, natureza, clima, verbos de ação, emoções, material escolar e família.",
      "Acumule mais XP e Gemas para subir no ranking de fluência!"
    ],
    "xpReward": 40,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p20-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Bread\"**?",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol brilhante"
          }
        ],
        "options": [
          "Bread",
          "School",
          "Phone",
          "Sun"
        ],
        "correctAnswer": "Bread",
        "explanation": "🍞 **Bread** significa **Pão** em inglês! Exemplo prático: \"Warm sliced bread.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Telefone celular\"** em inglês? Toque na imagem:",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol brilhante"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Phone",
          "Sun",
          "Bread",
          "School"
        ],
        "correctAnswer": "Phone",
        "explanation": "📱 **Phone** significa **Telefone celular** em inglês! Exemplo prático: \"A smart mobile phone.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p20-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"School\"**:",
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
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol brilhante"
          }
        ],
        "options": [
          "School",
          "Bread",
          "Phone",
          "Sun"
        ],
        "correctAnswer": "School",
        "explanation": "🏫 **School** significa **Escola** em inglês! Exemplo prático: \"A place of knowledge.\"",
        "phoneticHint": "/skuːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Sun\"**?",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol brilhante"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Sun",
          "Phone",
          "School",
          "Bread"
        ],
        "correctAnswer": "Sun",
        "explanation": "☀️ **Sun** significa **Sol brilhante** em inglês! Exemplo prático: \"The radiant center of our solar system.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Chuva\"** em inglês? Toque na imagem:",
        "audioPhrase": "Rain",
        "visualEmoji": "🌧️",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          }
        ],
        "options": [
          "School",
          "Bread",
          "Phone",
          "Rain"
        ],
        "correctAnswer": "Rain",
        "explanation": "🌧️ **Rain** significa **Chuva** em inglês! Exemplo prático: \"Refreshing raindrops falling.\"",
        "phoneticHint": "/reɪn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p20-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Run\"**:",
        "audioPhrase": "Run",
        "visualEmoji": "🏃",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          }
        ],
        "options": [
          "Bread",
          "Run",
          "School",
          "Phone"
        ],
        "correctAnswer": "Run",
        "explanation": "🏃 **Run** significa **Correr** em inglês! Exemplo prático: \"Move swiftly on foot.\"",
        "phoneticHint": "/rʌn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Happy\"**?",
        "audioPhrase": "Happy",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz / Contente"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          }
        ],
        "options": [
          "Happy",
          "Bread",
          "School",
          "Phone"
        ],
        "correctAnswer": "Happy",
        "explanation": "😊 **Happy** significa **Feliz / Contente** em inglês! Exemplo prático: \"Full of positive joy.\"",
        "phoneticHint": "/ˈhæp.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Livro didático\"** em inglês? Toque na imagem:",
        "audioPhrase": "Book",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro didático"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          }
        ],
        "options": [
          "School",
          "Book",
          "Bread",
          "Phone"
        ],
        "correctAnswer": "Book",
        "explanation": "📚 **Book** significa **Livro didático** em inglês! Exemplo prático: \"A wealth of written wisdom.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p20-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Friend\"**:",
        "audioPhrase": "Friend",
        "visualEmoji": "🤝",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Friend",
            "emoji": "🤝",
            "label": "Friend",
            "translationPt": "Amigo"
          }
        ],
        "options": [
          "Phone",
          "Bread",
          "School",
          "Friend"
        ],
        "correctAnswer": "Friend",
        "explanation": "🤝 **Friend** significa **Amigo** em inglês! Exemplo prático: \"A trustworthy companion.\"",
        "phoneticHint": "/frend/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Computer\"**?",
        "audioPhrase": "Computer",
        "visualEmoji": "💻",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Phone",
          "Computer",
          "School",
          "Bread"
        ],
        "correctAnswer": "Computer",
        "explanation": "💻 **Computer** significa **Computador** em inglês! Exemplo prático: \"A fast computing machine.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e11",
        "type": "image-choice",
        "prompt": "Como se diz **\"Mãe\"** em inglês? Toque na imagem:",
        "audioPhrase": "Mother",
        "visualEmoji": "👩‍👧",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone celular"
          },
          {
            "text": "Mother",
            "emoji": "👩‍👧",
            "label": "Mother",
            "translationPt": "Mãe"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "School",
          "Phone",
          "Mother",
          "Bread"
        ],
        "correctAnswer": "Mother",
        "explanation": "👩‍👧 **Mother** significa **Mãe** em inglês! Exemplo prático: \"The loving heart of the home.\"",
        "phoneticHint": "/ˈmʌð.ər/",
        "skillCategory": "reading"
      }
    ]
  },
  {
    "id": "w0-p21",
    "worldId": 0,
    "phaseNumber": 21,
    "title": "Esportes & Lazer Ativo",
    "subtitle": "Futebol, basquete, tênis e natação com imagens esportivas",
    "pedagogicalObjective": "Nomear modalidades esportivas e práticas de exercícios físicos.",
    "type": "lesson",
    "icon": "trophy",
    "cefrLevel": "A1",
    "theorySummary": [
      "Soccer (/ˈsɒk.ər/) é o futebol tradicional nos EUA, enquanto no resto do mundo de língua inglesa é Football.",
      "Basketball (/ˈbɑː.skɪt.bɔːl/) e Tennis (/ˈten.ɪs/) são esportes globais.",
      "Use \"play\" com esportes com bola: \"play soccer\", \"play tennis\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p21-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Soccer\"**?",
        "audioPhrase": "Soccer",
        "visualEmoji": "⚽",
        "visualOptions": [
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Vôlei"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          }
        ],
        "options": [
          "Volleyball",
          "Basketball",
          "Tennis",
          "Soccer"
        ],
        "correctAnswer": "Soccer",
        "explanation": "⚽ **Soccer** significa **Futebol** em inglês! Exemplo prático: \"Kids play soccer on Saturday afternoon.\"",
        "phoneticHint": "/ˈsɒk.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Basquete\"** em inglês? Toque na imagem:",
        "audioPhrase": "Basketball",
        "visualEmoji": "🏀",
        "visualOptions": [
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Vôlei"
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          }
        ],
        "options": [
          "Volleyball",
          "Tennis",
          "Basketball",
          "Soccer"
        ],
        "correctAnswer": "Basketball",
        "explanation": "🏀 **Basketball** significa **Basquete** em inglês! Exemplo prático: \"Shoot the basketball into the high hoop.\"",
        "phoneticHint": "/ˈbɑː.skɪt.bɔːl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p21-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Tennis\"**:",
        "audioPhrase": "Tennis",
        "visualEmoji": "🎾",
        "visualOptions": [
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          },
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Vôlei"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          }
        ],
        "options": [
          "Tennis",
          "Soccer",
          "Volleyball",
          "Basketball"
        ],
        "correctAnswer": "Tennis",
        "explanation": "🎾 **Tennis** significa **Tênis** em inglês! Exemplo prático: \"Hit the tennis ball over the net with a racket.\"",
        "phoneticHint": "/ˈten.ɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Volleyball\"**?",
        "audioPhrase": "Volleyball",
        "visualEmoji": "🏐",
        "visualOptions": [
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Vôlei"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          }
        ],
        "options": [
          "Tennis",
          "Volleyball",
          "Soccer",
          "Basketball"
        ],
        "correctAnswer": "Volleyball",
        "explanation": "🏐 **Volleyball** significa **Vôlei** em inglês! Exemplo prático: \"Beach volleyball is fun in the summer.\"",
        "phoneticHint": "/ˈvɒl.i.bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Natação\"** em inglês? Toque na imagem:",
        "audioPhrase": "Swimming",
        "visualEmoji": "🏊",
        "visualOptions": [
          {
            "text": "Swimming",
            "emoji": "🏊",
            "label": "Swimming",
            "translationPt": "Natação"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          }
        ],
        "options": [
          "Swimming",
          "Soccer",
          "Tennis",
          "Basketball"
        ],
        "correctAnswer": "Swimming",
        "explanation": "🏊 **Swimming** significa **Natação** em inglês! Exemplo prático: \"Swimming provides a complete full-body workout.\"",
        "phoneticHint": "/ˈswɪm.ɪŋ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p21-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Cycling\"**:",
        "audioPhrase": "Cycling",
        "visualEmoji": "🚴",
        "visualOptions": [
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Cycling",
            "emoji": "🚴",
            "label": "Cycling",
            "translationPt": "Ciclismo"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          }
        ],
        "options": [
          "Tennis",
          "Cycling",
          "Soccer",
          "Basketball"
        ],
        "correctAnswer": "Cycling",
        "explanation": "🚴 **Cycling** significa **Ciclismo** em inglês! Exemplo prático: \"Cycling along the coast is scenic and refreshing.\"",
        "phoneticHint": "/ˈsaɪ.klɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Baseball\"**?",
        "audioPhrase": "Baseball",
        "visualEmoji": "⚾",
        "visualOptions": [
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
            "translationPt": "Tênis"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          }
        ],
        "options": [
          "Baseball",
          "Tennis",
          "Soccer",
          "Basketball"
        ],
        "correctAnswer": "Baseball",
        "explanation": "⚾ **Baseball** significa **Beisebol** em inglês! Exemplo prático: \"Strike the baseball with the wooden bat.\"",
        "phoneticHint": "/ˈbeɪs.bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Skate\"** em inglês? Toque na imagem:",
        "audioPhrase": "Skateboarding",
        "visualEmoji": "🛹",
        "visualOptions": [
          {
            "text": "Skateboarding",
            "emoji": "🛹",
            "label": "Skateboarding",
            "translationPt": "Skate"
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          }
        ],
        "options": [
          "Skateboarding",
          "Tennis",
          "Soccer",
          "Basketball"
        ],
        "correctAnswer": "Skateboarding",
        "explanation": "🛹 **Skateboarding** significa **Skate** em inglês! Exemplo prático: \"Youth practice kickflips at the skate park.\"",
        "phoneticHint": "/ˈskeɪtˌbɔː.dɪŋ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p21-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Boxing\"**:",
        "audioPhrase": "Boxing",
        "visualEmoji": "🥊",
        "visualOptions": [
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          },
          {
            "text": "Boxing",
            "emoji": "🥊",
            "label": "Boxing",
            "translationPt": "Boxe"
          }
        ],
        "options": [
          "Tennis",
          "Soccer",
          "Basketball",
          "Boxing"
        ],
        "correctAnswer": "Boxing",
        "explanation": "🥊 **Boxing** significa **Boxe** em inglês! Exemplo prático: \"Wear padded gloves during boxing training.\"",
        "phoneticHint": "/ˈbɒk.sɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Running\"**?",
        "audioPhrase": "Running",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Running",
            "emoji": "👟",
            "label": "Running",
            "translationPt": "Corrida"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          }
        ],
        "options": [
          "Basketball",
          "Tennis",
          "Running",
          "Soccer"
        ],
        "correctAnswer": "Running",
        "explanation": "👟 **Running** significa **Corrida** em inglês! Exemplo prático: \"Morning running builds cardiovascular endurance.\"",
        "phoneticHint": "/ˈrʌn.ɪŋ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p22",
    "worldId": 0,
    "phaseNumber": 22,
    "title": "Utensílios de Cozinha & Mesa",
    "subtitle": "Garfo, faca, colher, prato e copo em cartões visuais",
    "pedagogicalObjective": "Identificar talheres e recipientes para refeições e preparo culinário.",
    "type": "lesson",
    "icon": "utensils",
    "cefrLevel": "A1",
    "theorySummary": [
      "Fork (/fɔːk/), Knife (/naɪf/) e Spoon (/spuːn/) formam o trio básico de talheres.",
      "Atenção: em Knife (/naɪf/), a letra \"K\" é totalmente muda!",
      "Plate (/pleɪt/) e Cup (/kʌp/) servem refeições e líquidos."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p22-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Fork\"**?",
        "audioPhrase": "Fork",
        "visualEmoji": "🍴",
        "visualOptions": [
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
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
          "Plate",
          "Spoon",
          "Fork",
          "Knife"
        ],
        "correctAnswer": "Fork",
        "explanation": "🍴 **Fork** significa **Garfo** em inglês! Exemplo prático: \"Hold the fork in your left hand.\"",
        "phoneticHint": "/fɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Colher\"** em inglês? Toque na imagem:",
        "audioPhrase": "Spoon",
        "visualEmoji": "🥄",
        "visualOptions": [
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          }
        ],
        "options": [
          "Knife",
          "Spoon",
          "Plate",
          "Fork"
        ],
        "correctAnswer": "Spoon",
        "explanation": "🥄 **Spoon** significa **Colher** em inglês! Exemplo prático: \"Eat hearty hot soup with a spoon.\"",
        "phoneticHint": "/spuːn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p22-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Knife\"**:",
        "audioPhrase": "Knife",
        "visualEmoji": "🔪",
        "visualOptions": [
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
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          }
        ],
        "options": [
          "Fork",
          "Knife",
          "Plate",
          "Spoon"
        ],
        "correctAnswer": "Knife",
        "explanation": "🔪 **Knife** significa **Faca** em inglês! Exemplo prático: \"Cut tender meat carefully with a sharp knife.\"",
        "phoneticHint": "/naɪf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Plate\"**?",
        "audioPhrase": "Plate",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Fork",
          "Spoon",
          "Plate",
          "Knife"
        ],
        "correctAnswer": "Plate",
        "explanation": "🍽️ **Plate** significa **Prato** em inglês! Exemplo prático: \"Place delicious food on the ceramic plate.\"",
        "phoneticHint": "/pleɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Copo / Xícara\"** em inglês? Toque na imagem:",
        "audioPhrase": "Cup",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Cup",
            "emoji": "🥛",
            "label": "Cup / Glass",
            "translationPt": "Copo / Xícara"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
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
          "Cup",
          "Spoon",
          "Fork",
          "Knife"
        ],
        "correctAnswer": "Cup",
        "explanation": "🥛 **Cup** significa **Copo / Xícara** em inglês! Exemplo prático: \"Pour fresh juice into a tall glass cup.\"",
        "phoneticHint": "/kʌp/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p22-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Bowl\"**:",
        "audioPhrase": "Bowl",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Fork",
          "Spoon",
          "Bowl",
          "Knife"
        ],
        "correctAnswer": "Bowl",
        "explanation": "🥣 **Bowl** significa **Tigela / Cumbuca** em inglês! Exemplo prático: \"Serve breakfast cereal inside a bowl.\"",
        "phoneticHint": "/boʊl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Pan\"**?",
        "audioPhrase": "Pan",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Pan",
            "emoji": "🍳",
            "label": "Pan / Frying Pan",
            "translationPt": "Frigideira"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Pan",
          "Fork",
          "Spoon",
          "Knife"
        ],
        "correctAnswer": "Pan",
        "explanation": "🍳 **Pan** significa **Frigideira** em inglês! Exemplo prático: \"Fry sunny-side eggs on the non-stick pan.\"",
        "phoneticHint": "/pæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Panela\"** em inglês? Toque na imagem:",
        "audioPhrase": "Pot",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Pot",
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
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          }
        ],
        "options": [
          "Spoon",
          "Pot",
          "Knife",
          "Fork"
        ],
        "correctAnswer": "Pot",
        "explanation": "🍲 **Pot** significa **Panela** em inglês! Exemplo prático: \"Boil pasta water inside a stainless pot.\"",
        "phoneticHint": "/pɒt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p22-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Bottle\"**:",
        "audioPhrase": "Bottle",
        "visualEmoji": "🍾",
        "visualOptions": [
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
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Fork",
          "Bottle",
          "Spoon",
          "Knife"
        ],
        "correctAnswer": "Bottle",
        "explanation": "🍾 **Bottle** significa **Garrafa** em inglês! Exemplo prático: \"Carry a reusable water bottle everywhere.\"",
        "phoneticHint": "/ˈbɒt.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Teapot\"**?",
        "audioPhrase": "Teapot",
        "visualEmoji": "🫖",
        "visualOptions": [
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
          },
          {
            "text": "Teapot",
            "emoji": "🫖",
            "label": "Teapot",
            "translationPt": "Bule de chá"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          }
        ],
        "options": [
          "Fork",
          "Knife",
          "Teapot",
          "Spoon"
        ],
        "correctAnswer": "Teapot",
        "explanation": "🫖 **Teapot** significa **Bule de chá** em inglês! Exemplo prático: \"Brew herbal green tea in the ceramic teapot.\"",
        "phoneticHint": "/ˈtiː.pɒt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p23",
    "worldId": 0,
    "phaseNumber": 23,
    "title": "Higiene Pessoal & Banheiro",
    "subtitle": "Sabonete, escova de dentes e toalha em imagens cotidianas",
    "pedagogicalObjective": "Dominar termos de higiene e cuidados pessoais diários.",
    "type": "lesson",
    "icon": "shower",
    "cefrLevel": "A1",
    "theorySummary": [
      "Soap (/soʊp/) e Shower (/ˈʃaʊ.ər/) são essenciais no banho.",
      "Toothbrush (/ˈtuːθ.brʌʃ/) combina Tooth (dente) + Brush (escova).",
      "Towel (/ˈtaʊ.əl/) é usada para secar o corpo e as mãos."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p23-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Soap\"**?",
        "audioPhrase": "Soap",
        "visualEmoji": "🧼",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Towel",
            "emoji": "🧖",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          }
        ],
        "options": [
          "Toothpaste",
          "Towel",
          "Soap",
          "Toothbrush"
        ],
        "correctAnswer": "Soap",
        "explanation": "🧼 **Soap** significa **Sabonete** em inglês! Exemplo prático: \"Lather your hands with lavender scented soap.\"",
        "phoneticHint": "/soʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Escova de dentes\"** em inglês? Toque na imagem:",
        "audioPhrase": "Toothbrush",
        "visualEmoji": "🪥",
        "visualOptions": [
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Towel",
            "emoji": "🧖",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          }
        ],
        "options": [
          "Soap",
          "Toothpaste",
          "Towel",
          "Toothbrush"
        ],
        "correctAnswer": "Toothbrush",
        "explanation": "🪥 **Toothbrush** significa **Escova de dentes** em inglês! Exemplo prático: \"Dentists advise changing your toothbrush regularly.\"",
        "phoneticHint": "/ˈtuːθ.brʌʃ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p23-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Toothpaste\"**:",
        "audioPhrase": "Toothpaste",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Towel",
            "emoji": "🧖",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          }
        ],
        "options": [
          "Toothpaste",
          "Soap",
          "Towel",
          "Toothbrush"
        ],
        "correctAnswer": "Toothpaste",
        "explanation": "🧴 **Toothpaste** significa **Pasta de dente** em inglês! Exemplo prático: \"Squeeze mint toothpaste onto the bristles.\"",
        "phoneticHint": "/ˈtuːθ.peɪst/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Towel\"**?",
        "audioPhrase": "Towel",
        "visualEmoji": "🧖",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Towel",
            "emoji": "🧖",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          }
        ],
        "options": [
          "Toothpaste",
          "Toothbrush",
          "Towel",
          "Soap"
        ],
        "correctAnswer": "Towel",
        "explanation": "🧖 **Towel** significa **Toalha de banho** em inglês! Exemplo prático: \"Dry your face with a fluffy cotton towel.\"",
        "phoneticHint": "/ˈtaʊ.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Chuveiro / Banho\"** em inglês? Toque na imagem:",
        "audioPhrase": "Shower",
        "visualEmoji": "🚿",
        "visualOptions": [
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
            "translationPt": "Chuveiro / Banho"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          }
        ],
        "options": [
          "Soap",
          "Shower",
          "Toothbrush",
          "Toothpaste"
        ],
        "correctAnswer": "Shower",
        "explanation": "🚿 **Shower** significa **Chuveiro / Banho** em inglês! Exemplo prático: \"A warm shower relaxes tired muscles.\"",
        "phoneticHint": "/ˈʃaʊ.ər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p23-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Comb\"**:",
        "audioPhrase": "Comb",
        "visualEmoji": "🪮",
        "visualOptions": [
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb / Hairbrush",
            "translationPt": "Pente de cabelo"
          },
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          }
        ],
        "options": [
          "Soap",
          "Toothbrush",
          "Comb",
          "Toothpaste"
        ],
        "correctAnswer": "Comb",
        "explanation": "🪮 **Comb** significa **Pente de cabelo** em inglês! Exemplo prático: \"Untangle hair neatly using a wide-tooth comb.\"",
        "phoneticHint": "/koʊm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Shampoo\"**?",
        "audioPhrase": "Shampoo",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Xampu"
          }
        ],
        "options": [
          "Toothpaste",
          "Soap",
          "Toothbrush",
          "Shampoo"
        ],
        "correctAnswer": "Shampoo",
        "explanation": "🧴 **Shampoo** significa **Xampu** em inglês! Exemplo prático: \"Wash your scalp thoroughly with gentle shampoo.\"",
        "phoneticHint": "/ʃæmˈpuː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Espelho do banheiro\"** em inglês? Toque na imagem:",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho do banheiro"
          }
        ],
        "options": [
          "Toothpaste",
          "Soap",
          "Toothbrush",
          "Mirror"
        ],
        "correctAnswer": "Mirror",
        "explanation": "🪞 **Mirror** significa **Espelho do banheiro** em inglês! Exemplo prático: \"Look in the mirror while styling your hair.\"",
        "phoneticHint": "/ˈmɪr.ər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p23-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Sponge\"**:",
        "audioPhrase": "Sponge",
        "visualEmoji": "🧽",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de banho"
          }
        ],
        "options": [
          "Toothpaste",
          "Soap",
          "Toothbrush",
          "Sponge"
        ],
        "correctAnswer": "Sponge",
        "explanation": "🧽 **Sponge** significa **Esponja de banho** em inglês! Exemplo prático: \"Create abundant foam using a bath sponge.\"",
        "phoneticHint": "/spʌndʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Faucet\"**?",
        "audioPhrase": "Faucet",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete"
          },
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet / Tap",
            "translationPt": "Torneira"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          }
        ],
        "options": [
          "Soap",
          "Toothpaste",
          "Faucet",
          "Toothbrush"
        ],
        "correctAnswer": "Faucet",
        "explanation": "🚰 **Faucet** significa **Torneira** em inglês! Exemplo prático: \"Turn off the bathroom faucet to save water.\"",
        "phoneticHint": "/ˈfɔː.sɪt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p24",
    "worldId": 0,
    "phaseNumber": 24,
    "title": "Instrumentos Musicais & Ritmo",
    "subtitle": "Violão, piano, bateria e violino com sonoridades nítidas",
    "pedagogicalObjective": "Reconhecer nomes de instrumentos musicais em inglês.",
    "type": "lesson",
    "icon": "music",
    "cefrLevel": "A1",
    "theorySummary": [
      "Guitar (/ɡɪˈtɑːr/) em inglês geralmente refere-se ao violão ou à guitarra elétrica (electric guitar).",
      "Piano (/piˈæn.oʊ/) e Drums (/drʌmz/) marcam a melodia e o ritmo.",
      "Use o verbo \"play\" com instrumentos: \"play the piano\", \"play the guitar\" (com \"the\")."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p24-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Guitar\"**?",
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
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          }
        ],
        "options": [
          "Guitar",
          "Drums",
          "Violin",
          "Piano"
        ],
        "correctAnswer": "Guitar",
        "explanation": "🎸 **Guitar** significa **Violão / Guitarra** em inglês! Exemplo prático: \"Strum acoustic chords on the classical guitar.\"",
        "phoneticHint": "/ɡɪˈtɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Piano\"** em inglês? Toque na imagem:",
        "audioPhrase": "Piano",
        "visualEmoji": "🎹",
        "visualOptions": [
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          }
        ],
        "options": [
          "Guitar",
          "Piano",
          "Drums",
          "Violin"
        ],
        "correctAnswer": "Piano",
        "explanation": "🎹 **Piano** significa **Piano** em inglês! Exemplo prático: \"Press the black and white keys of the piano.\"",
        "phoneticHint": "/piˈæn.oʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p24-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Drums\"**:",
        "audioPhrase": "Drums",
        "visualEmoji": "🥁",
        "visualOptions": [
          {
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
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
          }
        ],
        "options": [
          "Drums",
          "Guitar",
          "Piano",
          "Violin"
        ],
        "correctAnswer": "Drums",
        "explanation": "🥁 **Drums** significa **Bateria** em inglês! Exemplo prático: \"Keep the energetic beat with dynamic drums.\"",
        "phoneticHint": "/drʌmz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Violin\"**?",
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
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          }
        ],
        "options": [
          "Violin",
          "Drums",
          "Piano",
          "Guitar"
        ],
        "correctAnswer": "Violin",
        "explanation": "🎻 **Violin** significa **Violino** em inglês! Exemplo prático: \"The symphony orchestra features brilliant violins.\"",
        "phoneticHint": "/ˌvaɪəˈlɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Trompete\"** em inglês? Toque na imagem:",
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
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          }
        ],
        "options": [
          "Trumpet",
          "Drums",
          "Guitar",
          "Piano"
        ],
        "correctAnswer": "Trumpet",
        "explanation": "🎺 **Trumpet** significa **Trompete** em inglês! Exemplo prático: \"A brass trumpet plays loud fanfare notes.\"",
        "phoneticHint": "/ˈtrʌm.pɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p24-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Flute\"**:",
        "audioPhrase": "Flute",
        "visualEmoji": "🪈",
        "visualOptions": [
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          }
        ],
        "options": [
          "Guitar",
          "Drums",
          "Flute",
          "Piano"
        ],
        "correctAnswer": "Flute",
        "explanation": "🪈 **Flute** significa **Flauta** em inglês! Exemplo prático: \"The wooden flute produces sweet gentle melodies.\"",
        "phoneticHint": "/fluːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Saxophone\"**?",
        "audioPhrase": "Saxophone",
        "visualEmoji": "🎷",
        "visualOptions": [
          {
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          },
          {
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          }
        ],
        "options": [
          "Saxophone",
          "Drums",
          "Piano",
          "Guitar"
        ],
        "correctAnswer": "Saxophone",
        "explanation": "🎷 **Saxophone** significa **Saxofone** em inglês! Exemplo prático: \"Jazz musicians express emotion through the saxophone.\"",
        "phoneticHint": "/ˈsæk.sə.foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Microfone\"** em inglês? Toque na imagem:",
        "audioPhrase": "Microphone",
        "visualEmoji": "🎤",
        "visualOptions": [
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone"
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
          "Drums",
          "Microphone",
          "Guitar"
        ],
        "correctAnswer": "Microphone",
        "explanation": "🎤 **Microphone** significa **Microfone** em inglês! Exemplo prático: \"Sing your favorite English song into the microphone.\"",
        "phoneticHint": "/ˈmaɪ.krə.foʊn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p24-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Bell\"**:",
        "audioPhrase": "Bell",
        "visualEmoji": "🔔",
        "visualOptions": [
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          },
          {
            "text": "Bell",
            "emoji": "🔔",
            "label": "Bell",
            "translationPt": "Sino / Campainha"
          },
          {
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          }
        ],
        "options": [
          "Piano",
          "Guitar",
          "Bell",
          "Drums"
        ],
        "correctAnswer": "Bell",
        "explanation": "🔔 **Bell** significa **Sino / Campainha** em inglês! Exemplo prático: \"The church bell rings at noon.\"",
        "phoneticHint": "/bel/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Headphones\"**?",
        "audioPhrase": "Headphones",
        "visualEmoji": "🎧",
        "visualOptions": [
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Studio Headphones",
            "translationPt": "Fones de estúdio"
          },
          {
            "text": "Drums",
            "emoji": "🥁",
            "label": "Drums",
            "translationPt": "Bateria"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          }
        ],
        "options": [
          "Headphones",
          "Drums",
          "Piano",
          "Guitar"
        ],
        "correctAnswer": "Headphones",
        "explanation": "🎧 **Headphones** significa **Fones de estúdio** em inglês! Exemplo prático: \"Producers listen to music mixes through headphones.\"",
        "phoneticHint": "/ˈhed.foʊnz/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p25",
    "worldId": 0,
    "phaseNumber": 25,
    "title": "Profissões & Ocupações Comuns",
    "subtitle": "Médico, professor, cozinheiro e bombeiro com ilustrações",
    "pedagogicalObjective": "Identificar ocupações profissionais e prestadores de serviços.",
    "type": "lesson",
    "icon": "briefcase",
    "cefrLevel": "A1",
    "theorySummary": [
      "Em inglês, sempre usamos artigo antes de profissão: \"He is A doctor\", \"She is AN engineer\".",
      "Teacher (/ˈtiː.tʃər/) e Doctor (/ˈdɒk.tər/) são as profissões mais universais.",
      "Chef (/ʃef/) vem do francês e pronuncia-se com som de \"ch\" (/ʃ/)."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p25-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Doctor\"**?",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          }
        ],
        "options": [
          "Doctor",
          "Teacher",
          "Police Officer",
          "Chef"
        ],
        "correctAnswer": "Doctor",
        "explanation": "👨‍⚕️ **Doctor** significa **Médico(a)** em inglês! Exemplo prático: \"The caring doctor examines the patient.\"",
        "phoneticHint": "/ˈdɒk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Professor(a)\"** em inglês? Toque na imagem:",
        "audioPhrase": "Teacher",
        "visualEmoji": "👨‍🏫",
        "visualOptions": [
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          }
        ],
        "options": [
          "Police Officer",
          "Doctor",
          "Chef",
          "Teacher"
        ],
        "correctAnswer": "Teacher",
        "explanation": "👨‍🏫 **Teacher** significa **Professor(a)** em inglês! Exemplo prático: \"The dedicated teacher explains English grammar.\"",
        "phoneticHint": "/ˈtiː.tʃər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p25-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Chef\"**:",
        "audioPhrase": "Chef",
        "visualEmoji": "👨‍🍳",
        "visualOptions": [
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          }
        ],
        "options": [
          "Chef",
          "Teacher",
          "Doctor",
          "Police Officer"
        ],
        "correctAnswer": "Chef",
        "explanation": "👨‍🍳 **Chef** significa **Cozinheiro(a) / Chef** em inglês! Exemplo prático: \"The master chef prepares delicious gourmet dishes.\"",
        "phoneticHint": "/ʃef/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Police Officer\"**?",
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
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          }
        ],
        "options": [
          "Police Officer",
          "Chef",
          "Doctor",
          "Teacher"
        ],
        "correctAnswer": "Police Officer",
        "explanation": "👮 **Police Officer** significa **Policial** em inglês! Exemplo prático: \"Police officers ensure safety in the neighborhood.\"",
        "phoneticHint": "/pəˈliːs ˈɒf.ɪ.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Bombeiro(a)\"** em inglês? Toque na imagem:",
        "audioPhrase": "Firefighter",
        "visualEmoji": "👨‍🚒",
        "visualOptions": [
          {
            "text": "Firefighter",
            "emoji": "👨‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro(a)"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          }
        ],
        "options": [
          "Firefighter",
          "Doctor",
          "Teacher",
          "Chef"
        ],
        "correctAnswer": "Firefighter",
        "explanation": "👨‍🚒 **Firefighter** significa **Bombeiro(a)** em inglês! Exemplo prático: \"Brave firefighters extinguish blazing fires.\"",
        "phoneticHint": "/ˈfaɪəˌfaɪ.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p25-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Pilot\"**:",
        "audioPhrase": "Pilot",
        "visualEmoji": "👨‍✈️",
        "visualOptions": [
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          }
        ],
        "options": [
          "Chef",
          "Doctor",
          "Pilot",
          "Teacher"
        ],
        "correctAnswer": "Pilot",
        "explanation": "👨‍✈️ **Pilot** significa **Piloto de avião** em inglês! Exemplo prático: \"The commercial pilot navigates across oceans.\"",
        "phoneticHint": "/ˈpaɪ.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Artist\"**?",
        "audioPhrase": "Artist",
        "visualEmoji": "🎨",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          },
          {
            "text": "Artist",
            "emoji": "🎨",
            "label": "Artist / Painter",
            "translationPt": "Artista / Pintor(a)"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          }
        ],
        "options": [
          "Doctor",
          "Chef",
          "Artist",
          "Teacher"
        ],
        "correctAnswer": "Artist",
        "explanation": "🎨 **Artist** significa **Artista / Pintor(a)** em inglês! Exemplo prático: \"The talented artist paints vibrant oil canvases.\"",
        "phoneticHint": "/ˈɑː.tɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Agricultor(a) / Fazendeiro\"** em inglês? Toque na imagem:",
        "audioPhrase": "Farmer",
        "visualEmoji": "👨‍🌾",
        "visualOptions": [
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Farmer",
            "emoji": "👨‍🌾",
            "label": "Farmer",
            "translationPt": "Agricultor(a) / Fazendeiro"
          }
        ],
        "options": [
          "Chef",
          "Teacher",
          "Doctor",
          "Farmer"
        ],
        "correctAnswer": "Farmer",
        "explanation": "👨‍🌾 **Farmer** significa **Agricultor(a) / Fazendeiro** em inglês! Exemplo prático: \"The hardworking farmer harvests organic vegetables.\"",
        "phoneticHint": "/ˈfɑː.mər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p25-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Singer\"**:",
        "audioPhrase": "Singer",
        "visualEmoji": "🧑‍🎤",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Singer",
            "emoji": "🧑‍🎤",
            "label": "Singer",
            "translationPt": "Cantor(a)"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          }
        ],
        "options": [
          "Doctor",
          "Singer",
          "Teacher",
          "Chef"
        ],
        "correctAnswer": "Singer",
        "explanation": "🧑‍🎤 **Singer** significa **Cantor(a)** em inglês! Exemplo prático: \"The musical singer performs at large concert halls.\"",
        "phoneticHint": "/ˈsɪŋ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Builder\"**?",
        "audioPhrase": "Builder",
        "visualEmoji": "👷",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico(a)"
          },
          {
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          },
          {
            "text": "Builder",
            "emoji": "👷",
            "label": "Builder / Engineer",
            "translationPt": "Construtor(a) / Engenheiro"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          }
        ],
        "options": [
          "Doctor",
          "Teacher",
          "Builder",
          "Chef"
        ],
        "correctAnswer": "Builder",
        "explanation": "👷 **Builder** significa **Construtor(a) / Engenheiro** em inglês! Exemplo prático: \"Builders construct sturdy modern homes.\"",
        "phoneticHint": "/ˈbɪl.dər/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p26",
    "worldId": 0,
    "phaseNumber": 26,
    "title": "Vegetais & Legumes da Horta",
    "subtitle": "Cenoura, tomate, batata e brócolis em imagens ricas",
    "pedagogicalObjective": "Conhecer vegetais e legumes essenciais para alimentação.",
    "type": "lesson",
    "icon": "carrot",
    "cefrLevel": "A1",
    "theorySummary": [
      "Tomato (/təˈmɑː.toʊ/ ou /təˈmeɪ.toʊ/) e Potato (/pəˈteɪ.toʊ/) rimam em inglês.",
      "Carrot (/ˈkær.ət/) é rica em betacaroteno e cor alaranjada.",
      "Onion (/ˈʌn.jən/) e Garlic (/ˈɡɑː.lɪk/) temperam a culinária mundial."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p26-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Carrot\"**?",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
        "visualOptions": [
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
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          }
        ],
        "options": [
          "Tomato",
          "Broccoli",
          "Carrot",
          "Potato"
        ],
        "correctAnswer": "Carrot",
        "explanation": "🥕 **Carrot** significa **Cenoura** em inglês! Exemplo prático: \"Crunchy raw carrots are healthy snacks.\"",
        "phoneticHint": "/ˈkær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Tomate\"** em inglês? Toque na imagem:",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Broccoli",
          "Potato",
          "Tomato",
          "Carrot"
        ],
        "correctAnswer": "Tomato",
        "explanation": "🍅 **Tomato** significa **Tomate** em inglês! Exemplo prático: \"Ripe red tomatoes make fantastic salad.\"",
        "phoneticHint": "/təˈmɑː.toʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p26-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Potato\"**:",
        "audioPhrase": "Potato",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Potato",
          "Carrot",
          "Broccoli",
          "Tomato"
        ],
        "correctAnswer": "Potato",
        "explanation": "🥔 **Potato** significa **Batata** em inglês! Exemplo prático: \"Mashed potatoes are a popular side dish.\"",
        "phoneticHint": "/pəˈteɪ.toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Broccoli\"**?",
        "audioPhrase": "Broccoli",
        "visualEmoji": "🥦",
        "visualOptions": [
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
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Tomato",
          "Broccoli",
          "Potato",
          "Carrot"
        ],
        "correctAnswer": "Broccoli",
        "explanation": "🥦 **Broccoli** significa **Brócolis** em inglês! Exemplo prático: \"Steamed green broccoli is packed with vitamins.\"",
        "phoneticHint": "/ˈbrɒk.əl.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Milho\"** em inglês? Toque na imagem:",
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
            "text": "Corn",
            "emoji": "🌽",
            "label": "Corn",
            "translationPt": "Milho"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Carrot",
          "Corn",
          "Potato",
          "Tomato"
        ],
        "correctAnswer": "Corn",
        "explanation": "🌽 **Corn** significa **Milho** em inglês! Exemplo prático: \"Sweet yellow corn boiled on the cob.\"",
        "phoneticHint": "/kɔːn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p26-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Onion\"**:",
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
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Onion",
          "Tomato",
          "Potato",
          "Carrot"
        ],
        "correctAnswer": "Onion",
        "explanation": "🧅 **Onion** significa **Cebola** em inglês! Exemplo prático: \"Chopped onions add aroma to dishes.\"",
        "phoneticHint": "/ˈʌn.jən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Garlic\"**?",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Potato",
          "Carrot",
          "Garlic",
          "Tomato"
        ],
        "correctAnswer": "Garlic",
        "explanation": "🧄 **Garlic** significa **Alho** em inglês! Exemplo prático: \"A clove of crushed garlic enhances flavor.\"",
        "phoneticHint": "/ˈɡɑː.lɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Pimenta\"** em inglês? Toque na imagem:",
        "audioPhrase": "Pepper",
        "visualEmoji": "🌶️",
        "visualOptions": [
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Pepper",
            "emoji": "🌶️",
            "label": "Chili Pepper",
            "translationPt": "Pimenta"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Carrot",
          "Pepper",
          "Potato",
          "Tomato"
        ],
        "correctAnswer": "Pepper",
        "explanation": "🌶️ **Pepper** significa **Pimenta** em inglês! Exemplo prático: \"Spicy chili pepper adds heat to recipes.\"",
        "phoneticHint": "/ˈpep.ər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p26-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Cucumber\"**:",
        "audioPhrase": "Cucumber",
        "visualEmoji": "🥒",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
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
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Potato",
          "Cucumber",
          "Tomato",
          "Carrot"
        ],
        "correctAnswer": "Cucumber",
        "explanation": "🥒 **Cucumber** significa **Pepino** em inglês! Exemplo prático: \"Cool cucumber slices are very refreshing.\"",
        "phoneticHint": "/ˈkjuː.kʌm.bər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Mushroom\"**?",
        "audioPhrase": "Mushroom",
        "visualEmoji": "🍄",
        "visualOptions": [
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Mushroom",
            "emoji": "🍄",
            "label": "Mushroom",
            "translationPt": "Cogumelo"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Tomato",
          "Mushroom",
          "Potato",
          "Carrot"
        ],
        "correctAnswer": "Mushroom",
        "explanation": "🍄 **Mushroom** significa **Cogumelo** em inglês! Exemplo prático: \"Sautéed mushrooms complement grilled dishes.\"",
        "phoneticHint": "/ˈmʌʃ.ruːm/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p27",
    "worldId": 0,
    "phaseNumber": 27,
    "title": "Sobremesas & Doces Irresistíveis",
    "subtitle": "Bolo, sorvete, chocolate e cookies em cartões visuais",
    "pedagogicalObjective": "Aprender o vocabulário de sobremesas e confeitaria.",
    "type": "lesson",
    "icon": "cake",
    "cefrLevel": "A1",
    "theorySummary": [
      "Cake (/keɪk/) e Ice Cream (/ˈaɪs ˌkriːm/) são os favoritos em aniversários.",
      "Chocolate (/ˈtʃɒk.lət/) tem apenas duas sílabas faladas em inglês (\"chok-let\").",
      "Cookie (/ˈkʊk.i/) no inglês britânico é comumente chamado de \"biscuit\"."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p27-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Cake\"**?",
        "audioPhrase": "Cake",
        "visualEmoji": "🍰",
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
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          }
        ],
        "options": [
          "Donut",
          "Chocolate",
          "Ice Cream",
          "Cake"
        ],
        "correctAnswer": "Cake",
        "explanation": "🍰 **Cake** significa **Bolo / Torta** em inglês! Exemplo prático: \"A slice of vanilla birthday cake.\"",
        "phoneticHint": "/keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Sorvete\"** em inglês? Toque na imagem:",
        "audioPhrase": "Ice Cream",
        "visualEmoji": "🍦",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          },
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          }
        ],
        "options": [
          "Cake",
          "Chocolate",
          "Ice Cream",
          "Donut"
        ],
        "correctAnswer": "Ice Cream",
        "explanation": "🍦 **Ice Cream** significa **Sorvete** em inglês! Exemplo prático: \"A double scoop of chocolate ice cream.\"",
        "phoneticHint": "/ˈaɪs ˌkriːm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p27-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Donut\"**:",
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
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          }
        ],
        "options": [
          "Donut",
          "Cake",
          "Ice Cream",
          "Chocolate"
        ],
        "correctAnswer": "Donut",
        "explanation": "🍩 **Donut** significa **Rosquinha / Donut** em inglês! Exemplo prático: \"Glazed donuts with colorful sprinkles.\"",
        "phoneticHint": "/ˈdoʊ.nʌt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p27-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Chocolate\"**?",
        "audioPhrase": "Chocolate",
        "visualEmoji": "🍫",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          }
        ],
        "options": [
          "Cake",
          "Donut",
          "Ice Cream",
          "Chocolate"
        ],
        "correctAnswer": "Chocolate",
        "explanation": "🍫 **Chocolate** significa **Chocolate** em inglês! Exemplo prático: \"Dark chocolate melts smoothly on the tongue.\"",
        "phoneticHint": "/ˈtʃɒk.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Bala / Doce\"** em inglês? Toque na imagem:",
        "audioPhrase": "Candy",
        "visualEmoji": "🍬",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          },
          {
            "text": "Candy",
            "emoji": "🍬",
            "label": "Candy / Sweet",
            "translationPt": "Bala / Doce"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          }
        ],
        "options": [
          "Cake",
          "Candy",
          "Ice Cream",
          "Donut"
        ],
        "correctAnswer": "Candy",
        "explanation": "🍬 **Candy** significa **Bala / Doce** em inglês! Exemplo prático: \"Fruity wrapped candy in assorted flavors.\"",
        "phoneticHint": "/ˈkæn.di/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p27-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Lollipop\"**:",
        "audioPhrase": "Lollipop",
        "visualEmoji": "🍭",
        "visualOptions": [
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Lollipop",
            "emoji": "🍭",
            "label": "Lollipop",
            "translationPt": "Pirulito"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          }
        ],
        "options": [
          "Ice Cream",
          "Lollipop",
          "Donut",
          "Cake"
        ],
        "correctAnswer": "Lollipop",
        "explanation": "🍭 **Lollipop** significa **Pirulito** em inglês! Exemplo prático: \"A swirl cherry lollipop on a plastic stick.\"",
        "phoneticHint": "/ˈlɒl.i.pɒp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p27-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Pie\"**?",
        "audioPhrase": "Pie",
        "visualEmoji": "🥧",
        "visualOptions": [
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
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
            "translationPt": "Bolo / Torta"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Donut",
          "Pie",
          "Cake",
          "Ice Cream"
        ],
        "correctAnswer": "Pie",
        "explanation": "🥧 **Pie** significa **Torta doce** em inglês! Exemplo prático: \"Warm American apple pie with cinnamon.\"",
        "phoneticHint": "/paɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cupcake / Bolinho\"** em inglês? Toque na imagem:",
        "audioPhrase": "Cupcake",
        "visualEmoji": "🧁",
        "visualOptions": [
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          },
          {
            "text": "Cupcake",
            "emoji": "🧁",
            "label": "Cupcake",
            "translationPt": "Cupcake / Bolinho"
          }
        ],
        "options": [
          "Donut",
          "Ice Cream",
          "Cake",
          "Cupcake"
        ],
        "correctAnswer": "Cupcake",
        "explanation": "🧁 **Cupcake** significa **Cupcake / Bolinho** em inglês! Exemplo prático: \"Mini cupcakes topped with strawberry frosting.\"",
        "phoneticHint": "/ˈkʌp.keɪk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p27-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Honey\"**:",
        "audioPhrase": "Honey",
        "visualEmoji": "🍯",
        "visualOptions": [
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel de abelha"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          }
        ],
        "options": [
          "Ice Cream",
          "Donut",
          "Honey",
          "Cake"
        ],
        "correctAnswer": "Honey",
        "explanation": "🍯 **Honey** significa **Mel de abelha** em inglês! Exemplo prático: \"Pure golden honey drizzled over pancakes.\"",
        "phoneticHint": "/ˈhʌn.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p27-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Pudding\"**?",
        "audioPhrase": "Pudding",
        "visualEmoji": "🍮",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          },
          {
            "text": "Pudding",
            "emoji": "🍮",
            "label": "Pudding / Custard",
            "translationPt": "Pudim"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          }
        ],
        "options": [
          "Cake",
          "Pudding",
          "Ice Cream",
          "Donut"
        ],
        "correctAnswer": "Pudding",
        "explanation": "🍮 **Pudding** significa **Pudim** em inglês! Exemplo prático: \"Creamy caramel pudding served chilled.\"",
        "phoneticHint": "/ˈpʊd.ɪŋ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p28",
    "worldId": 0,
    "phaseNumber": 28,
    "title": "Céu, Universo & Espaço Sideral",
    "subtitle": "Estrelas, planetas, foguetes e a Terra em imagens fascinantes",
    "pedagogicalObjective": "Explorar vocabulário astronômico e de exploração espacial.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Star (/stɑːr/) e Planet (/ˈplæn.ɪt/) iluminam o céu noturno.",
      "Earth (/ɜːθ/) é o nosso planeta natal, pronunciado com o som fonético \"th\" suave.",
      "Rocket (/ˈrɒk.ɪt/) e Astronaut (/ˈæs.trə.nɔːt/) lideram a exploração espacial."
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p28-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Star\"**?",
        "audioPhrase": "Star",
        "visualEmoji": "⭐",
        "visualOptions": [
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          },
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          }
        ],
        "options": [
          "Planet",
          "Rocket",
          "Star",
          "Earth"
        ],
        "correctAnswer": "Star",
        "explanation": "⭐ **Star** significa **Estrela** em inglês! Exemplo prático: \"Distant stars twinkle brightly in the night sky.\"",
        "phoneticHint": "/stɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p28-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Planeta com anéis\"** em inglês? Toque na imagem:",
        "audioPhrase": "Planet",
        "visualEmoji": "🪐",
        "visualOptions": [
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          }
        ],
        "options": [
          "Earth",
          "Star",
          "Rocket",
          "Planet"
        ],
        "correctAnswer": "Planet",
        "explanation": "🪐 **Planet** significa **Planeta com anéis** em inglês! Exemplo prático: \"Saturn is a magnificent ringed planet.\"",
        "phoneticHint": "/ˈplæn.ɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p28-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Earth\"**:",
        "audioPhrase": "Earth",
        "visualEmoji": "🌍",
        "visualOptions": [
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          },
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          }
        ],
        "options": [
          "Planet",
          "Rocket",
          "Earth",
          "Star"
        ],
        "correctAnswer": "Earth",
        "explanation": "🌍 **Earth** significa **Planeta Terra** em inglês! Exemplo prático: \"Planet Earth is our blue and green home.\"",
        "phoneticHint": "/ɜːθ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p28-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Rocket\"**?",
        "audioPhrase": "Rocket",
        "visualEmoji": "🚀",
        "visualOptions": [
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          }
        ],
        "options": [
          "Rocket",
          "Earth",
          "Star",
          "Planet"
        ],
        "correctAnswer": "Rocket",
        "explanation": "🚀 **Rocket** significa **Foguete espacial** em inglês! Exemplo prático: \"The powerful rocket launches toward orbit.\"",
        "phoneticHint": "/ˈrɒk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p28-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Astronauta\"** em inglês? Toque na imagem:",
        "audioPhrase": "Astronaut",
        "visualEmoji": "👨‍🚀",
        "visualOptions": [
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          },
          {
            "text": "Astronaut",
            "emoji": "👨‍🚀",
            "label": "Astronaut",
            "translationPt": "Astronauta"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          }
        ],
        "options": [
          "Star",
          "Planet",
          "Astronaut",
          "Earth"
        ],
        "correctAnswer": "Astronaut",
        "explanation": "👨‍🚀 **Astronaut** significa **Astronauta** em inglês! Exemplo prático: \"Astronauts float weightlessly in space.\"",
        "phoneticHint": "/ˈæs.trə.nɔːt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p28-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Sun\"**:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol / Estrela central"
          }
        ],
        "options": [
          "Earth",
          "Star",
          "Planet",
          "Sun"
        ],
        "correctAnswer": "Sun",
        "explanation": "☀️ **Sun** significa **Sol / Estrela central** em inglês! Exemplo prático: \"The sun provides gravity and light to planets.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p28-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Moon\"**?",
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
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          }
        ],
        "options": [
          "Moon",
          "Planet",
          "Earth",
          "Star"
        ],
        "correctAnswer": "Moon",
        "explanation": "🌙 **Moon** significa **Lua** em inglês! Exemplo prático: \"The moon orbits the Earth every month.\"",
        "phoneticHint": "/muːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p28-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cometa\"** em inglês? Toque na imagem:",
        "audioPhrase": "Comet",
        "visualEmoji": "☄️",
        "visualOptions": [
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          },
          {
            "text": "Comet",
            "emoji": "☄️",
            "label": "Comet",
            "translationPt": "Cometa"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          }
        ],
        "options": [
          "Star",
          "Planet",
          "Comet",
          "Earth"
        ],
        "correctAnswer": "Comet",
        "explanation": "☄️ **Comet** significa **Cometa** em inglês! Exemplo prático: \"A glowing comet with an icy tail.\"",
        "phoneticHint": "/ˈkɒm.ɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p28-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Telescope\"**:",
        "audioPhrase": "Telescope",
        "visualEmoji": "🔭",
        "visualOptions": [
          {
            "text": "Telescope",
            "emoji": "🔭",
            "label": "Telescope",
            "translationPt": "Telescópio"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          }
        ],
        "options": [
          "Telescope",
          "Planet",
          "Star",
          "Earth"
        ],
        "correctAnswer": "Telescope",
        "explanation": "🔭 **Telescope** significa **Telescópio** em inglês! Exemplo prático: \"Observe distant galaxies through an optical telescope.\"",
        "phoneticHint": "/ˈtel.ɪ.skoʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p28-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Satellite\"**?",
        "audioPhrase": "Satellite",
        "visualEmoji": "🛰️",
        "visualOptions": [
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Satellite",
            "emoji": "🛰️",
            "label": "Satellite",
            "translationPt": "Satélite"
          },
          {
            "text": "Earth",
            "emoji": "🌍",
            "label": "Earth",
            "translationPt": "Planeta Terra"
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          }
        ],
        "options": [
          "Star",
          "Satellite",
          "Earth",
          "Planet"
        ],
        "correctAnswer": "Satellite",
        "explanation": "🛰️ **Satellite** significa **Satélite** em inglês! Exemplo prático: \"Communications satellites orbit high in space.\"",
        "phoneticHint": "/ˈsæt.əl.aɪt/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p29",
    "worldId": 0,
    "phaseNumber": 29,
    "title": "Síntese Pré-Mundo 1: O Domínio das Palavras",
    "subtitle": "13 desafios integrando vocabulário essencial de todas as áreas",
    "pedagogicalObjective": "Consolidar mais de 100 termos fundamentais antes da batalha final do vocabulário.",
    "type": "lesson",
    "icon": "target",
    "cefrLevel": "A1",
    "theorySummary": [
      "Você percorreu quase todas as categorias visuais fundamentais da língua inglesa!",
      "Nesta fase de síntese, avaliaremos sua agilidade em reconhecer alimentos, animais, objetos, ações e conceitos.",
      "Prepare-se com confiança para o grande Boss Final na Fase 30!"
    ],
    "xpReward": 30,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w0-p29-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Apple\"**?",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Car",
          "Water",
          "Dog",
          "Apple"
        ],
        "correctAnswer": "Apple",
        "explanation": "🍎 **Apple** significa **Maçã** em inglês! Exemplo prático: \"A crunchy red apple.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cachorro\"** em inglês? Toque na imagem:",
        "audioPhrase": "Dog",
        "visualEmoji": "🐶",
        "visualOptions": [
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Water",
          "Dog",
          "Apple",
          "Car"
        ],
        "correctAnswer": "Dog",
        "explanation": "🐶 **Dog** significa **Cachorro** em inglês! Exemplo prático: \"A friendly dog.\"",
        "phoneticHint": "/dɒɡ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p29-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Car\"**:",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Dog",
          "Water",
          "Apple",
          "Car"
        ],
        "correctAnswer": "Car",
        "explanation": "🚗 **Car** significa **Carro** em inglês! Exemplo prático: \"A fast motor car.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Water\"**?",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Apple",
          "Dog",
          "Water",
          "Car"
        ],
        "correctAnswer": "Water",
        "explanation": "💧 **Water** significa **Água** em inglês! Exemplo prático: \"Pure drinking water.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Livro\"** em inglês? Toque na imagem:",
        "audioPhrase": "Book",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Book",
          "Dog",
          "Car",
          "Apple"
        ],
        "correctAnswer": "Book",
        "explanation": "📚 **Book** significa **Livro** em inglês! Exemplo prático: \"An educational book.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p29-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Bed\"**:",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Dog",
          "Apple",
          "Bed",
          "Car"
        ],
        "correctAnswer": "Bed",
        "explanation": "🛏️ **Bed** significa **Cama** em inglês! Exemplo prático: \"A comfortable bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Phone\"**?",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Telefone"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Car",
          "Apple",
          "Phone",
          "Dog"
        ],
        "correctAnswer": "Phone",
        "explanation": "📱 **Phone** significa **Telefone** em inglês! Exemplo prático: \"A smart touch phone.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Sol\"** em inglês? Toque na imagem:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Apple",
          "Sun",
          "Car",
          "Dog"
        ],
        "correctAnswer": "Sun",
        "explanation": "☀️ **Sun** significa **Sol** em inglês! Exemplo prático: \"The radiant sun.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p29-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Run\"**:",
        "audioPhrase": "Run",
        "visualEmoji": "🏃",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Apple",
          "Dog",
          "Run",
          "Car"
        ],
        "correctAnswer": "Run",
        "explanation": "🏃 **Run** significa **Correr** em inglês! Exemplo prático: \"To run with energy.\"",
        "phoneticHint": "/rʌn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Doctor\"**?",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Apple",
          "Dog",
          "Doctor",
          "Car"
        ],
        "correctAnswer": "Doctor",
        "explanation": "👨‍⚕️ **Doctor** significa **Médico** em inglês! Exemplo prático: \"A helpful doctor.\"",
        "phoneticHint": "/ˈdɒk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e11",
        "type": "image-choice",
        "prompt": "Como se diz **\"Estrela\"** em inglês? Toque na imagem:",
        "audioPhrase": "Star",
        "visualEmoji": "⭐",
        "visualOptions": [
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Star",
          "Apple",
          "Car",
          "Dog"
        ],
        "correctAnswer": "Star",
        "explanation": "⭐ **Star** significa **Estrela** em inglês! Exemplo prático: \"A brilliant star.\"",
        "phoneticHint": "/stɑːr/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p29-e12",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Happy\"**:",
        "audioPhrase": "Happy",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Happy",
          "Car",
          "Dog",
          "Apple"
        ],
        "correctAnswer": "Happy",
        "explanation": "😊 **Happy** significa **Feliz** em inglês! Exemplo prático: \"Feeling joyful and happy.\"",
        "phoneticHint": "/ˈhæp.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e13",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Pizza\"**?",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Apple",
          "Car",
          "Pizza",
          "Dog"
        ],
        "correctAnswer": "Pizza",
        "explanation": "🍕 **Pizza** significa **Pizza** em inglês! Exemplo prático: \"A tasty pizza slice.\"",
        "phoneticHint": "/ˈpiːt.sə/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p30",
    "worldId": 0,
    "phaseNumber": 30,
    "title": "👑 BOSS FINAL DO VOCABULÁRIO: O Guardião Visual",
    "subtitle": "16 desafios épicos com imagens integrando todo o Módulo 0",
    "pedagogicalObjective": "Provar maestria total sobre o vocabulário inicial visual e desbloquear o Mundo 1!",
    "type": "boss",
    "icon": "swords",
    "cefrLevel": "A1",
    "theorySummary": [
      "Chegou a hora do confronto supremo com o Guardião Visual das Palavras!",
      "Você enfrentará 16 desafios integrando alimentos, animais, transportes, emoções, profissões, tecnologia e astronomia.",
      "Mantenha o foco: cada resposta correta confirma a tradução imediata e concede o troféu máximo do Módulo 0!"
    ],
    "xpReward": 60,
    "gemsReward": 25,
    "exercises": [
      {
        "id": "w0-p30-e1",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Apple\"**?",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Apple",
          "Water",
          "Dog",
          "Cat"
        ],
        "correctAnswer": "Apple",
        "explanation": "🍎 **Apple** significa **Maçã** em inglês! Exemplo prático: \"A red apple symbol of knowledge.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e2",
        "type": "image-choice",
        "prompt": "Como se diz **\"Cachorro\"** em inglês? Toque na imagem:",
        "audioPhrase": "Dog",
        "visualEmoji": "🐶",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Apple",
          "Dog",
          "Water",
          "Cat"
        ],
        "correctAnswer": "Dog",
        "explanation": "🐶 **Dog** significa **Cachorro** em inglês! Exemplo prático: \"Man’s best friend, the dog.\"",
        "phoneticHint": "/dɒɡ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Cat\"**:",
        "audioPhrase": "Cat",
        "visualEmoji": "🐱",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Apple",
          "Water",
          "Cat",
          "Dog"
        ],
        "correctAnswer": "Cat",
        "explanation": "🐱 **Cat** significa **Gato** em inglês! Exemplo prático: \"A curious and agile cat.\"",
        "phoneticHint": "/kæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Water\"**?",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Dog",
          "Cat",
          "Water",
          "Apple"
        ],
        "correctAnswer": "Water",
        "explanation": "💧 **Water** significa **Água** em inglês! Exemplo prático: \"Life-giving pure water.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e5",
        "type": "image-choice",
        "prompt": "Como se diz **\"Carro\"** em inglês? Toque na imagem:",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Car",
          "Cat",
          "Dog",
          "Apple"
        ],
        "correctAnswer": "Car",
        "explanation": "🚗 **Car** significa **Carro** em inglês! Exemplo prático: \"An automobile vehicle.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Blue\"**:",
        "audioPhrase": "Blue",
        "visualEmoji": "🔵",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Cat",
          "Blue",
          "Apple",
          "Dog"
        ],
        "correctAnswer": "Blue",
        "explanation": "🔵 **Blue** significa **Azul** em inglês! Exemplo prático: \"The color of ocean and sky.\"",
        "phoneticHint": "/bluː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"House\"**?",
        "audioPhrase": "House",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "House",
          "Apple",
          "Dog",
          "Cat"
        ],
        "correctAnswer": "House",
        "explanation": "🏠 **House** significa **Casa** em inglês! Exemplo prático: \"A welcoming family home.\"",
        "phoneticHint": "/haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e8",
        "type": "image-choice",
        "prompt": "Como se diz **\"Pão\"** em inglês? Toque na imagem:",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Apple",
          "Bread",
          "Cat",
          "Dog"
        ],
        "correctAnswer": "Bread",
        "explanation": "🍞 **Bread** significa **Pão** em inglês! Exemplo prático: \"Fresh loaf of bread.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Computer\"**:",
        "audioPhrase": "Computer",
        "visualEmoji": "💻",
        "visualOptions": [
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Computador"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Computer",
          "Apple",
          "Cat",
          "Dog"
        ],
        "correctAnswer": "Computer",
        "explanation": "💻 **Computer** significa **Computador** em inglês! Exemplo prático: \"A digital computing device.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Tree\"**?",
        "audioPhrase": "Tree",
        "visualEmoji": "🌲",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Dog",
          "Tree",
          "Cat",
          "Apple"
        ],
        "correctAnswer": "Tree",
        "explanation": "🌲 **Tree** significa **Árvore** em inglês! Exemplo prático: \"A strong evergreen tree.\"",
        "phoneticHint": "/triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e11",
        "type": "image-choice",
        "prompt": "Como se diz **\"Sol\"** em inglês? Toque na imagem:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Dog",
          "Sun",
          "Cat",
          "Apple"
        ],
        "correctAnswer": "Sun",
        "explanation": "☀️ **Sun** significa **Sol** em inglês! Exemplo prático: \"The daylight sun.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e12",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Happy\"**:",
        "audioPhrase": "Happy",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Apple",
          "Happy",
          "Cat",
          "Dog"
        ],
        "correctAnswer": "Happy",
        "explanation": "😊 **Happy** significa **Feliz** em inglês! Exemplo prático: \"Smiling and truly happy.\"",
        "phoneticHint": "/ˈhæp.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e13",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Book\"**?",
        "audioPhrase": "Book",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Book",
          "Dog",
          "Apple",
          "Cat"
        ],
        "correctAnswer": "Book",
        "explanation": "📚 **Book** significa **Livro** em inglês! Exemplo prático: \"A gateway of imagination.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e14",
        "type": "image-choice",
        "prompt": "Como se diz **\"Médico\"** em inglês? Toque na imagem:",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico"
          }
        ],
        "options": [
          "Cat",
          "Apple",
          "Dog",
          "Doctor"
        ],
        "correctAnswer": "Doctor",
        "explanation": "👨‍⚕️ **Doctor** significa **Médico** em inglês! Exemplo prático: \"A certified medical doctor.\"",
        "phoneticHint": "/ˈdɒk.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e15",
        "type": "image-choice",
        "prompt": "🎧 Ouça e selecione a imagem correspondente a **\"Soccer\"**:",
        "audioPhrase": "Soccer",
        "visualEmoji": "⚽",
        "visualOptions": [
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer",
            "translationPt": "Futebol"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Soccer",
          "Cat",
          "Apple",
          "Dog"
        ],
        "correctAnswer": "Soccer",
        "explanation": "⚽ **Soccer** significa **Futebol** em inglês! Exemplo prático: \"The world’s favorite sport.\"",
        "phoneticHint": "/ˈsɒk.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e16",
        "type": "image-choice",
        "prompt": "Qual imagem representa a palavra: **\"Rocket\"**?",
        "audioPhrase": "Rocket",
        "visualEmoji": "🚀",
        "visualOptions": [
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete"
          },
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Rocket",
          "Cat",
          "Apple",
          "Dog"
        ],
        "correctAnswer": "Rocket",
        "explanation": "🚀 **Rocket** significa **Foguete** em inglês! Exemplo prático: \"A rocket reaching the stars.\"",
        "phoneticHint": "/ˈrɒk.ɪt/",
        "skillCategory": "vocabulary"
      }
    ]
  }
];
