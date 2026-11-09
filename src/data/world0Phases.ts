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
        "prompt": "Qual imagem representa \"Apple\"?",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
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
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Grape",
          "Orange",
          "Banana",
          "Apple"
        ],
        "correctAnswer": "Apple",
        "explanation": "Exemplo prático: \"I eat a fresh red apple every morning.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Banana\" em inglês?",
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
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
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
          "Banana",
          "Grape",
          "Apple",
          "Orange"
        ],
        "correctAnswer": "Banana",
        "explanation": "Exemplo prático: \"Monkeys love sweet yellow bananas.\"",
        "phoneticHint": "/bəˈnæn.ə/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p1-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
        "explanation": "Exemplo prático: \"Orange juice is very rich in Vitamin C.\"",
        "phoneticHint": "/ˈɒr.ɪndʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Grape\"?",
        "audioPhrase": "Grape",
        "visualEmoji": "🍇",
        "visualOptions": [
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
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
          "Grape",
          "Apple",
          "Orange",
          "Banana"
        ],
        "correctAnswer": "Grape",
        "explanation": "Exemplo prático: \"Purple grapes are sweet and refreshing.\"",
        "phoneticHint": "/ɡreɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Morango\" em inglês?",
        "audioPhrase": "Strawberry",
        "visualEmoji": "🍓",
        "visualOptions": [
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
          "Banana",
          "Apple",
          "Strawberry",
          "Orange"
        ],
        "correctAnswer": "Strawberry",
        "explanation": "Exemplo prático: \"Strawberry ice cream is delicious.\"",
        "phoneticHint": "/ˈstrɔː.bər.i/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p1-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
          "Pineapple",
          "Banana",
          "Apple",
          "Orange"
        ],
        "correctAnswer": "Pineapple",
        "explanation": "Exemplo prático: \"Pineapple is a tropical and juicy fruit.\"",
        "phoneticHint": "/ˈpaɪnˌæp.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Lemon\"?",
        "audioPhrase": "Lemon",
        "visualEmoji": "🍋",
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
            "text": "Lemon",
            "emoji": "🍋",
            "label": "Lemon",
            "translationPt": "Limão"
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
          "Lemon",
          "Orange"
        ],
        "correctAnswer": "Lemon",
        "explanation": "Exemplo prático: \"Lemon has a sour and fresh flavor.\"",
        "phoneticHint": "/ˈlem.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Melancia\" em inglês?",
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
        "explanation": "Exemplo prático: \"Watermelon is great on hot summer days.\"",
        "phoneticHint": "/ˈwɔː.təˌmel.ən/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p1-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Peach",
        "visualEmoji": "🍑",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          },
          {
            "text": "Peach",
            "emoji": "🍑",
            "label": "Peach",
            "translationPt": "Pêssego"
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
          "Apple",
          "Peach",
          "Banana",
          "Orange"
        ],
        "correctAnswer": "Peach",
        "explanation": "Exemplo prático: \"A ripe peach is soft and fragrant.\"",
        "phoneticHint": "/piːtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Mango\"?",
        "audioPhrase": "Mango",
        "visualEmoji": "🥭",
        "visualOptions": [
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
          },
          {
            "text": "Mango",
            "emoji": "🥭",
            "label": "Mango",
            "translationPt": "Manga"
          }
        ],
        "options": [
          "Banana",
          "Apple",
          "Orange",
          "Mango"
        ],
        "correctAnswer": "Mango",
        "explanation": "Exemplo prático: \"Mango is popular in tropical countries.\"",
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
        "prompt": "Qual imagem representa \"Dog\"?",
        "audioPhrase": "Dog",
        "visualEmoji": "🐶",
        "visualOptions": [
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
          },
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Fish",
          "Cat",
          "Bird",
          "Dog"
        ],
        "correctAnswer": "Dog",
        "explanation": "Exemplo prático: \"The loyal dog wags its tail.\"",
        "phoneticHint": "/dɒɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Gato\" em inglês?",
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
        "correctAnswer": "Cat",
        "explanation": "Exemplo prático: \"The soft cat sleeps on the sofa.\"",
        "phoneticHint": "/kæt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p2-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
        "explanation": "Exemplo prático: \"A colorful bird sings in the tree.\"",
        "phoneticHint": "/bɜːd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Fish\"?",
        "audioPhrase": "Fish",
        "visualEmoji": "🐟",
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
          }
        ],
        "options": [
          "Dog",
          "Bird",
          "Fish",
          "Cat"
        ],
        "correctAnswer": "Fish",
        "explanation": "Exemplo prático: \"A gold fish swims in clean water.\"",
        "phoneticHint": "/fɪʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Coelho\" em inglês?",
        "audioPhrase": "Rabbit",
        "visualEmoji": "🐰",
        "visualOptions": [
          {
            "text": "Rabbit",
            "emoji": "🐰",
            "label": "Rabbit",
            "translationPt": "Coelho"
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
          "Rabbit",
          "Bird",
          "Cat",
          "Dog"
        ],
        "correctAnswer": "Rabbit",
        "explanation": "Exemplo prático: \"The white rabbit hops around the garden.\"",
        "phoneticHint": "/ˈræb.ɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p2-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Hamster",
            "emoji": "🐹",
            "label": "Hamster",
            "translationPt": "Hamster"
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
          "Hamster",
          "Bird"
        ],
        "correctAnswer": "Hamster",
        "explanation": "Exemplo prático: \"The little hamster runs on its wheel.\"",
        "phoneticHint": "/ˈhæm.stər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Turtle\"?",
        "audioPhrase": "Turtle",
        "visualEmoji": "🐢",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
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
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          }
        ],
        "options": [
          "Cat",
          "Turtle",
          "Dog",
          "Bird"
        ],
        "correctAnswer": "Turtle",
        "explanation": "Exemplo prático: \"The green turtle walks very slowly.\"",
        "phoneticHint": "/ˈtɜː.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Papagaio\" em inglês?",
        "audioPhrase": "Parrot",
        "visualEmoji": "🦜",
        "visualOptions": [
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
          "Parrot",
          "Dog",
          "Cat"
        ],
        "correctAnswer": "Parrot",
        "explanation": "Exemplo prático: \"The green parrot repeats human words.\"",
        "phoneticHint": "/ˈpær.ət/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p2-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Puppy",
        "visualEmoji": "🐕",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
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
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Cat",
          "Puppy",
          "Bird",
          "Dog"
        ],
        "correctAnswer": "Puppy",
        "explanation": "Exemplo prático: \"The playful puppy loves to fetch the ball.\"",
        "phoneticHint": "/ˈpʌp.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Kitten\"?",
        "audioPhrase": "Kitten",
        "visualEmoji": "🐈",
        "visualOptions": [
          {
            "text": "Kitten",
            "emoji": "🐈",
            "label": "Kitten",
            "translationPt": "Gatinho filhote"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
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
          "Kitten",
          "Bird",
          "Dog",
          "Cat"
        ],
        "correctAnswer": "Kitten",
        "explanation": "Exemplo prático: \"The tiny kitten drinks warm milk.\"",
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
        "prompt": "Qual imagem representa \"Bed\"?",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
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
          "Door",
          "Chair",
          "Bed",
          "Table"
        ],
        "correctAnswer": "Bed",
        "explanation": "Exemplo prático: \"I sleep comfortably in my bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cadeira\" em inglês?",
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
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Door",
          "Chair",
          "Bed",
          "Table"
        ],
        "correctAnswer": "Chair",
        "explanation": "Exemplo prático: \"Please sit down on this wooden chair.\"",
        "phoneticHint": "/tʃeər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p3-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Table",
        "visualEmoji": "🪵",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
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
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          }
        ],
        "options": [
          "Table",
          "Door",
          "Chair",
          "Bed"
        ],
        "correctAnswer": "Table",
        "explanation": "Exemplo prático: \"Dinner is served on the dining table.\"",
        "phoneticHint": "/ˈteɪ.bəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Door\"?",
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
        "correctAnswer": "Door",
        "explanation": "Exemplo prático: \"Please close the front door.\"",
        "phoneticHint": "/dɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Janela\" em inglês?",
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
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Window",
          "Bed",
          "Chair",
          "Table"
        ],
        "correctAnswer": "Window",
        "explanation": "Exemplo prático: \"Open the window to let fresh air in.\"",
        "phoneticHint": "/ˈwɪn.doʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p3-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
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
          "Bed",
          "Lamp",
          "Table"
        ],
        "correctAnswer": "Lamp",
        "explanation": "Exemplo prático: \"Turn on the reading lamp beside the bed.\"",
        "phoneticHint": "/læmp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Clock\"?",
        "audioPhrase": "Clock",
        "visualEmoji": "⏰",
        "visualOptions": [
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
          "Clock",
          "Table",
          "Bed",
          "Chair"
        ],
        "correctAnswer": "Clock",
        "explanation": "Exemplo prático: \"The alarm clock rings at seven o’clock.\"",
        "phoneticHint": "/klɒk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Travesseiro\" em inglês?",
        "audioPhrase": "Pillow",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Pillow",
            "emoji": "🛋️",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira"
          },
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Bed",
          "Pillow",
          "Chair",
          "Table"
        ],
        "correctAnswer": "Pillow",
        "explanation": "Exemplo prático: \"A soft pillow helps you sleep well.\"",
        "phoneticHint": "/ˈpɪl.oʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p3-e9",
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
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
          }
        ],
        "options": [
          "Mirror",
          "Bed",
          "Chair",
          "Table"
        ],
        "correctAnswer": "Mirror",
        "explanation": "Exemplo prático: \"She looks at herself in the bathroom mirror.\"",
        "phoneticHint": "/ˈmɪr.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Key\"?",
        "audioPhrase": "Key",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪵",
            "label": "Table",
            "translationPt": "Mesa"
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
          "Key",
          "Bed",
          "Chair"
        ],
        "correctAnswer": "Key",
        "explanation": "Exemplo prático: \"Never lose your house key.\"",
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
        "prompt": "Qual imagem representa \"Water\"?",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
        "visualOptions": [
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
          "Tea",
          "Milk",
          "Water"
        ],
        "correctAnswer": "Water",
        "explanation": "Exemplo prático: \"Drinking pure water keeps you hydrated.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Leite\" em inglês?",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
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
          "Coffee",
          "Water",
          "Tea",
          "Milk"
        ],
        "correctAnswer": "Milk",
        "explanation": "Exemplo prático: \"He drinks a glass of cold milk.\"",
        "phoneticHint": "/mɪlk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p4-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
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
          }
        ],
        "options": [
          "Tea",
          "Coffee",
          "Water",
          "Milk"
        ],
        "correctAnswer": "Coffee",
        "explanation": "Exemplo prático: \"Hot black coffee wakes me up.\"",
        "phoneticHint": "/ˈkɒf.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Tea\"?",
        "audioPhrase": "Tea",
        "visualEmoji": "🍵",
        "visualOptions": [
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite"
          },
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
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Milk",
          "Tea",
          "Water",
          "Coffee"
        ],
        "correctAnswer": "Tea",
        "explanation": "Exemplo prático: \"Green tea is very good for your health.\"",
        "phoneticHint": "/tiː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Suco\" em inglês?",
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
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Juice",
          "Coffee",
          "Milk",
          "Water"
        ],
        "correctAnswer": "Juice",
        "explanation": "Exemplo prático: \"Fresh apple juice tastes sweet.\"",
        "phoneticHint": "/dʒuːs/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p4-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
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
          }
        ],
        "options": [
          "Soda",
          "Coffee",
          "Water",
          "Milk"
        ],
        "correctAnswer": "Soda",
        "explanation": "Exemplo prático: \"Cold soda with ice on a sunny day.\"",
        "phoneticHint": "/ˈsoʊ.də/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Hot Chocolate\"?",
        "audioPhrase": "Hot Chocolate",
        "visualEmoji": "🍫",
        "visualOptions": [
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
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Hot Chocolate",
          "Milk",
          "Coffee",
          "Water"
        ],
        "correctAnswer": "Hot Chocolate",
        "explanation": "Exemplo prático: \"Hot chocolate warms you up during winter.\"",
        "phoneticHint": "/hɒt ˈtʃɒk.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Limonada\" em inglês?",
        "audioPhrase": "Lemonade",
        "visualEmoji": "🍋",
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
            "text": "Lemonade",
            "emoji": "🍋",
            "label": "Lemonade",
            "translationPt": "Limonada"
          }
        ],
        "options": [
          "Water",
          "Coffee",
          "Milk",
          "Lemonade"
        ],
        "correctAnswer": "Lemonade",
        "explanation": "Exemplo prático: \"Fresh lemonade with mint leaves.\"",
        "phoneticHint": "/ˌlem.əˈneɪd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p4-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Smoothie",
        "visualEmoji": "🍧",
        "visualOptions": [
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
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Milk",
          "Smoothie",
          "Coffee",
          "Water"
        ],
        "correctAnswer": "Smoothie",
        "explanation": "Exemplo prático: \"A strawberry and banana smoothie.\"",
        "phoneticHint": "/ˈsmuː.ði/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Coconut Water\"?",
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
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
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
          }
        ],
        "options": [
          "Water",
          "Coffee",
          "Coconut Water",
          "Milk"
        ],
        "correctAnswer": "Coconut Water",
        "explanation": "Exemplo prático: \"Cold coconut water on the beach.\"",
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
        "prompt": "Qual imagem representa \"Red\"?",
        "audioPhrase": "Red",
        "visualEmoji": "🔴",
        "visualOptions": [
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
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Yellow",
            "emoji": "🟡",
            "label": "Yellow",
            "translationPt": "Amarelo"
          }
        ],
        "options": [
          "Red",
          "Green",
          "Blue",
          "Yellow"
        ],
        "correctAnswer": "Red",
        "explanation": "Exemplo prático: \"The red car stops at the light.\"",
        "phoneticHint": "/red/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Azul\" em inglês?",
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
          "Yellow",
          "Blue",
          "Red",
          "Green"
        ],
        "correctAnswer": "Blue",
        "explanation": "Exemplo prático: \"The blue sky is clear and bright.\"",
        "phoneticHint": "/bluː/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p5-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Green",
        "visualEmoji": "🟢",
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
          }
        ],
        "options": [
          "Blue",
          "Green",
          "Red",
          "Yellow"
        ],
        "correctAnswer": "Green",
        "explanation": "Exemplo prático: \"The green grass grows in the yard.\"",
        "phoneticHint": "/ɡriːn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Yellow\"?",
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
            "text": "Green",
            "emoji": "🟢",
            "label": "Green",
            "translationPt": "Verde"
          }
        ],
        "options": [
          "Blue",
          "Yellow",
          "Red",
          "Green"
        ],
        "correctAnswer": "Yellow",
        "explanation": "Exemplo prático: \"The bright yellow sun gives warmth.\"",
        "phoneticHint": "/ˈjel.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Preto\" em inglês?",
        "audioPhrase": "Black",
        "visualEmoji": "⚫",
        "visualOptions": [
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
          },
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Black",
            "emoji": "⚫",
            "label": "Black",
            "translationPt": "Preto"
          }
        ],
        "options": [
          "Red",
          "Green",
          "Blue",
          "Black"
        ],
        "correctAnswer": "Black",
        "explanation": "Exemplo prático: \"The elegant black suit fits perfectly.\"",
        "phoneticHint": "/blæk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p5-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "White",
        "visualEmoji": "⚪",
        "visualOptions": [
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "White",
            "emoji": "⚪",
            "label": "White",
            "translationPt": "Branco"
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
          "Red",
          "White",
          "Blue",
          "Green"
        ],
        "correctAnswer": "White",
        "explanation": "Exemplo prático: \"White snow covers the rooftops.\"",
        "phoneticHint": "/waɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Orange\"?",
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
        "explanation": "Exemplo prático: \"An orange leaf falls in autumn.\"",
        "phoneticHint": "/ˈɒr.ɪndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Roxo\" em inglês?",
        "audioPhrase": "Purple",
        "visualEmoji": "🟣",
        "visualOptions": [
          {
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          },
          {
            "text": "Purple",
            "emoji": "🟣",
            "label": "Purple",
            "translationPt": "Roxo"
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
          }
        ],
        "options": [
          "Blue",
          "Purple",
          "Green",
          "Red"
        ],
        "correctAnswer": "Purple",
        "explanation": "Exemplo prático: \"A beautiful purple flower blooms.\"",
        "phoneticHint": "/ˈpɜː.pəl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p5-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pink",
        "visualEmoji": "🌸",
        "visualOptions": [
          {
            "text": "Pink",
            "emoji": "🌸",
            "label": "Pink",
            "translationPt": "Rosa"
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
          },
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          }
        ],
        "options": [
          "Pink",
          "Blue",
          "Green",
          "Red"
        ],
        "correctAnswer": "Pink",
        "explanation": "Exemplo prático: \"The baby wears a soft pink hat.\"",
        "phoneticHint": "/pɪŋk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Brown\"?",
        "audioPhrase": "Brown",
        "visualEmoji": "🟤",
        "visualOptions": [
          {
            "text": "Red",
            "emoji": "🔴",
            "label": "Red",
            "translationPt": "Vermelho"
          },
          {
            "text": "Brown",
            "emoji": "🟤",
            "label": "Brown",
            "translationPt": "Marrom"
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
          }
        ],
        "options": [
          "Red",
          "Brown",
          "Green",
          "Blue"
        ],
        "correctAnswer": "Brown",
        "explanation": "Exemplo prático: \"A cozy brown coat for winter.\"",
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
        "prompt": "Qual imagem representa \"Car\"?",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
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
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
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
          "Car",
          "Bicycle",
          "Bus"
        ],
        "correctAnswer": "Car",
        "explanation": "Exemplo prático: \"My electric car is quiet and fast.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Ônibus\" em inglês?",
        "audioPhrase": "Bus",
        "visualEmoji": "🚌",
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
          "Car",
          "Bus",
          "Airplane",
          "Bicycle"
        ],
        "correctAnswer": "Bus",
        "explanation": "Exemplo prático: \"The yellow school bus arrives on time.\"",
        "phoneticHint": "/bʌs/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p6-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bicycle",
        "visualEmoji": "🚲",
        "visualOptions": [
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
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
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
          "Car",
          "Airplane",
          "Bus"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "Exemplo prático: \"Riding a bicycle is great exercise.\"",
        "phoneticHint": "/ˈbaɪ.sɪ.kəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Airplane\"?",
        "audioPhrase": "Airplane",
        "visualEmoji": "✈️",
        "visualOptions": [
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
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião"
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
          "Car",
          "Airplane",
          "Bus"
        ],
        "correctAnswer": "Airplane",
        "explanation": "Exemplo prático: \"The airplane flies high above the clouds.\"",
        "phoneticHint": "/ˈeər.pleɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Trem\" em inglês?",
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
          "Train",
          "Bicycle",
          "Car",
          "Bus"
        ],
        "correctAnswer": "Train",
        "explanation": "Exemplo prático: \"The high-speed train connects the cities.\"",
        "phoneticHint": "/treɪn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p6-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus"
          },
          {
            "text": "Boat",
            "emoji": "⛵",
            "label": "Boat",
            "translationPt": "Barco"
          }
        ],
        "options": [
          "Car",
          "Bicycle",
          "Bus",
          "Boat"
        ],
        "correctAnswer": "Boat",
        "explanation": "Exemplo prático: \"The small boat sails smoothly on the lake.\"",
        "phoneticHint": "/boʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Motorcycle\"?",
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
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Motocicleta"
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
          "Car",
          "Motorcycle",
          "Bus"
        ],
        "correctAnswer": "Motorcycle",
        "explanation": "Exemplo prático: \"He rides a modern motorcycle to work.\"",
        "phoneticHint": "/ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Helicóptero\" em inglês?",
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
          "Helicopter",
          "Bicycle",
          "Car",
          "Bus"
        ],
        "correctAnswer": "Helicopter",
        "explanation": "Exemplo prático: \"A rescue helicopter lands on the roof.\"",
        "phoneticHint": "/ˈhel.ɪˌkɒp.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p6-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Taxi",
        "visualEmoji": "🚕",
        "visualOptions": [
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
          "Taxi",
          "Bus",
          "Bicycle",
          "Car"
        ],
        "correctAnswer": "Taxi",
        "explanation": "Exemplo prático: \"Call a yellow taxi to go to the airport.\"",
        "phoneticHint": "/ˈtæk.si/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Truck\"?",
        "audioPhrase": "Truck",
        "visualEmoji": "🚚",
        "visualOptions": [
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle / Bike",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
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
          "Truck",
          "Car",
          "Bus"
        ],
        "correctAnswer": "Truck",
        "explanation": "Exemplo prático: \"The heavy delivery truck transports goods.\"",
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
        "prompt": "Qual imagem representa \"Shirt\"?",
        "audioPhrase": "Shirt",
        "visualEmoji": "👕",
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
          }
        ],
        "options": [
          "Pants",
          "Shirt",
          "Shoes",
          "Hat"
        ],
        "correctAnswer": "Shirt",
        "explanation": "Exemplo prático: \"He wears a clean white shirt.\"",
        "phoneticHint": "/ʃɜːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Calças\" em inglês?",
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
          }
        ],
        "options": [
          "Shoes",
          "Pants",
          "Shirt",
          "Hat"
        ],
        "correctAnswer": "Pants",
        "explanation": "Exemplo prático: \"Blue denim pants are comfortable.\"",
        "phoneticHint": "/pænts/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p7-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Hat",
            "emoji": "🧢",
            "label": "Hat / Cap",
            "translationPt": "Chapéu / Boné"
          }
        ],
        "options": [
          "Shoes",
          "Pants",
          "Shirt",
          "Hat"
        ],
        "correctAnswer": "Shoes",
        "explanation": "Exemplo prático: \"Running shoes protect your feet.\"",
        "phoneticHint": "/ʃuːz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Hat\"?",
        "audioPhrase": "Hat",
        "visualEmoji": "🧢",
        "visualOptions": [
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
          "Hat",
          "Shirt",
          "Shoes",
          "Pants"
        ],
        "correctAnswer": "Hat",
        "explanation": "Exemplo prático: \"Wear a hat to shield your eyes from the sun.\"",
        "phoneticHint": "/hæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Vestido\" em inglês?",
        "audioPhrase": "Dress",
        "visualEmoji": "👗",
        "visualOptions": [
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
          "Dress",
          "Shirt",
          "Pants",
          "Shoes"
        ],
        "correctAnswer": "Dress",
        "explanation": "Exemplo prático: \"She bought an elegant red dress for the party.\"",
        "phoneticHint": "/dres/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p7-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Jacket",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Casaco"
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
          }
        ],
        "options": [
          "Pants",
          "Jacket",
          "Shoes",
          "Shirt"
        ],
        "correctAnswer": "Jacket",
        "explanation": "Exemplo prático: \"Put on a warm jacket because it is cold.\"",
        "phoneticHint": "/ˈdʒæk.ɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Socks\"?",
        "audioPhrase": "Socks",
        "visualEmoji": "🧦",
        "visualOptions": [
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
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
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calças"
          }
        ],
        "options": [
          "Socks",
          "Shoes",
          "Shirt",
          "Pants"
        ],
        "correctAnswer": "Socks",
        "explanation": "Exemplo prático: \"Warm woolen socks keep your feet cozy.\"",
        "phoneticHint": "/sɒks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Óculos\" em inglês?",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
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
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos"
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
          "Glasses",
          "Shirt"
        ],
        "correctAnswer": "Glasses",
        "explanation": "Exemplo prático: \"Reading glasses help you see fine text.\"",
        "phoneticHint": "/ˈɡlæs.ɪz/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p7-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Watch",
        "visualEmoji": "⌚",
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
          "Shoes",
          "Pants",
          "Shirt",
          "Watch"
        ],
        "correctAnswer": "Watch",
        "explanation": "Exemplo prático: \"Check your watch so you are not late.\"",
        "phoneticHint": "/wɒtʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Backpack\"?",
        "audioPhrase": "Backpack",
        "visualEmoji": "🎒",
        "visualOptions": [
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila"
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
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Backpack",
          "Shoes",
          "Pants",
          "Shirt"
        ],
        "correctAnswer": "Backpack",
        "explanation": "Exemplo prático: \"Students carry books in their backpack.\"",
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
        "prompt": "Qual imagem representa \"Eye\"?",
        "audioPhrase": "Eye",
        "visualEmoji": "👁️",
        "visualOptions": [
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
          "Hand",
          "Ear",
          "Foot"
        ],
        "correctAnswer": "Eye",
        "explanation": "Exemplo prático: \"Open your eyes to see the sunshine.\"",
        "phoneticHint": "/aɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Mão\" em inglês?",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
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
        "correctAnswer": "Hand",
        "explanation": "Exemplo prático: \"Wash your hands before eating.\"",
        "phoneticHint": "/hænd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p8-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Foot",
        "visualEmoji": "🦶",
        "visualOptions": [
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
          "Hand",
          "Ear",
          "Foot"
        ],
        "correctAnswer": "Foot",
        "explanation": "Exemplo prático: \"He kicked the ball with his right foot.\"",
        "phoneticHint": "/fʊt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Ear\"?",
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
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          }
        ],
        "options": [
          "Ear",
          "Eye",
          "Hand",
          "Foot"
        ],
        "correctAnswer": "Ear",
        "explanation": "Exemplo prático: \"Humans listen with two ears.\"",
        "phoneticHint": "/ɪər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Nariz\" em inglês?",
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
          "Nose",
          "Eye",
          "Foot"
        ],
        "correctAnswer": "Nose",
        "explanation": "Exemplo prático: \"Smell the fresh scent with your nose.\"",
        "phoneticHint": "/noʊz/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p8-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Mouth",
        "visualEmoji": "👄",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Eye",
          "Hand",
          "Mouth",
          "Foot"
        ],
        "correctAnswer": "Mouth",
        "explanation": "Exemplo prático: \"Smile and open your mouth to speak.\"",
        "phoneticHint": "/maʊθ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Head\"?",
        "audioPhrase": "Head",
        "visualEmoji": "👤",
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
            "text": "Head",
            "emoji": "👤",
            "label": "Head",
            "translationPt": "Cabeça"
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
          "Head",
          "Hand"
        ],
        "correctAnswer": "Head",
        "explanation": "Exemplo prático: \"Nod your head if you understand.\"",
        "phoneticHint": "/hed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Braço\" em inglês?",
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
          }
        ],
        "options": [
          "Arm",
          "Foot",
          "Eye",
          "Hand"
        ],
        "correctAnswer": "Arm",
        "explanation": "Exemplo prático: \"Strong arms help lift heavy weights.\"",
        "phoneticHint": "/ɑːm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p8-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Leg",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
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
          "Leg",
          "Eye",
          "Foot",
          "Hand"
        ],
        "correctAnswer": "Leg",
        "explanation": "Exemplo prático: \"Walking every day strengthens your legs.\"",
        "phoneticHint": "/leɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Heart\"?",
        "audioPhrase": "Heart",
        "visualEmoji": "❤️",
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
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          }
        ],
        "options": [
          "Foot",
          "Eye",
          "Hand",
          "Heart"
        ],
        "correctAnswer": "Heart",
        "explanation": "Exemplo prático: \"A healthy heart beats steadily.\"",
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
        "prompt": "Qual imagem representa \"Cow\"?",
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
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
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
          }
        ],
        "options": [
          "Cow",
          "Sheep",
          "Pig",
          "Horse"
        ],
        "correctAnswer": "Cow",
        "explanation": "Exemplo prático: \"The gentle cow gives fresh milk.\"",
        "phoneticHint": "/kaʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cavalo\" em inglês?",
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
          },
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          }
        ],
        "options": [
          "Cow",
          "Sheep",
          "Horse",
          "Pig"
        ],
        "correctAnswer": "Horse",
        "explanation": "Exemplo prático: \"The brown horse runs across the field.\"",
        "phoneticHint": "/hɔːs/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p9-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
          }
        ],
        "options": [
          "Pig",
          "Horse",
          "Sheep",
          "Cow"
        ],
        "correctAnswer": "Pig",
        "explanation": "Exemplo prático: \"The pink pig rests in the shade.\"",
        "phoneticHint": "/pɪɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Sheep\"?",
        "audioPhrase": "Sheep",
        "visualEmoji": "🐑",
        "visualOptions": [
          {
            "text": "Sheep",
            "emoji": "🐑",
            "label": "Sheep",
            "translationPt": "Ovelha"
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
          "Sheep",
          "Pig",
          "Cow",
          "Horse"
        ],
        "correctAnswer": "Sheep",
        "explanation": "Exemplo prático: \"Fluffy white sheep produce warm wool.\"",
        "phoneticHint": "/ʃiːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Galinha\" em inglês?",
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
            "text": "Chicken",
            "emoji": "🐔",
            "label": "Chicken",
            "translationPt": "Galinha"
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
          }
        ],
        "options": [
          "Cow",
          "Chicken",
          "Pig",
          "Horse"
        ],
        "correctAnswer": "Chicken",
        "explanation": "Exemplo prático: \"The farm chicken lays eggs in the morning.\"",
        "phoneticHint": "/ˈtʃɪk.ɪn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p9-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lion",
        "visualEmoji": "🦁",
        "visualOptions": [
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
          },
          {
            "text": "Horse",
            "emoji": "🐴",
            "label": "Horse",
            "translationPt": "Cavalo"
          }
        ],
        "options": [
          "Cow",
          "Lion",
          "Pig",
          "Horse"
        ],
        "correctAnswer": "Lion",
        "explanation": "Exemplo prático: \"The brave lion roars across the savanna.\"",
        "phoneticHint": "/ˈlaɪ.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Elephant\"?",
        "audioPhrase": "Elephant",
        "visualEmoji": "🐘",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Elephant",
            "emoji": "🐘",
            "label": "Elephant",
            "translationPt": "Elefante"
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
          }
        ],
        "options": [
          "Cow",
          "Elephant",
          "Horse",
          "Pig"
        ],
        "correctAnswer": "Elephant",
        "explanation": "Exemplo prático: \"The giant elephant has large ears.\"",
        "phoneticHint": "/ˈel.ɪ.fənt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Macaco\" em inglês?",
        "audioPhrase": "Monkey",
        "visualEmoji": "🐵",
        "visualOptions": [
          {
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          },
          {
            "text": "Monkey",
            "emoji": "🐵",
            "label": "Monkey",
            "translationPt": "Macaco"
          },
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
          }
        ],
        "options": [
          "Pig",
          "Monkey",
          "Horse",
          "Cow"
        ],
        "correctAnswer": "Monkey",
        "explanation": "Exemplo prático: \"The clever monkey swings between branches.\"",
        "phoneticHint": "/ˈmʌŋ.ki/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p9-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Giraffe",
        "visualEmoji": "🦒",
        "visualOptions": [
          {
            "text": "Cow",
            "emoji": "🐮",
            "label": "Cow",
            "translationPt": "Vaca"
          },
          {
            "text": "Giraffe",
            "emoji": "🦒",
            "label": "Giraffe",
            "translationPt": "Girafa"
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
          }
        ],
        "options": [
          "Cow",
          "Giraffe",
          "Pig",
          "Horse"
        ],
        "correctAnswer": "Giraffe",
        "explanation": "Exemplo prático: \"The tall giraffe eats leaves high in the trees.\"",
        "phoneticHint": "/dʒɪˈrɑːf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Bear\"?",
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
            "text": "Pig",
            "emoji": "🐷",
            "label": "Pig",
            "translationPt": "Porco"
          }
        ],
        "options": [
          "Bear",
          "Horse",
          "Cow",
          "Pig"
        ],
        "correctAnswer": "Bear",
        "explanation": "Exemplo prático: \"The furry brown bear loves honey and fish.\"",
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
        "prompt": "Qual imagem representa \"Apple\"?",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
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
          "Water",
          "Dog",
          "Car",
          "Apple"
        ],
        "correctAnswer": "Apple",
        "explanation": "Exemplo prático: \"A delicious red apple.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cachorro\" em inglês?",
        "audioPhrase": "Dog",
        "visualEmoji": "🐶",
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
          "Car",
          "Apple",
          "Water",
          "Dog"
        ],
        "correctAnswer": "Dog",
        "explanation": "Exemplo prático: \"A faithful dog.\"",
        "phoneticHint": "/dɒɡ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p10-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
        "correctAnswer": "Water",
        "explanation": "Exemplo prático: \"Fresh cold water.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Car\"?",
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
          }
        ],
        "options": [
          "Car",
          "Apple",
          "Dog",
          "Water"
        ],
        "correctAnswer": "Car",
        "explanation": "Exemplo prático: \"A modern electric car.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Azul\" em inglês?",
        "audioPhrase": "Blue",
        "visualEmoji": "🔵",
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
            "text": "Blue",
            "emoji": "🔵",
            "label": "Blue",
            "translationPt": "Azul"
          }
        ],
        "options": [
          "Water",
          "Dog",
          "Apple",
          "Blue"
        ],
        "correctAnswer": "Blue",
        "explanation": "Exemplo prático: \"A bright blue sphere.\"",
        "phoneticHint": "/bluː/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p10-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shirt",
        "visualEmoji": "👕",
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
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camiseta"
          }
        ],
        "options": [
          "Water",
          "Apple",
          "Dog",
          "Shirt"
        ],
        "correctAnswer": "Shirt",
        "explanation": "Exemplo prático: \"A clean cotton shirt.\"",
        "phoneticHint": "/ʃɜːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Hand\"?",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
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
          "Hand",
          "Apple",
          "Dog"
        ],
        "correctAnswer": "Hand",
        "explanation": "Exemplo prático: \"Raise your open hand.\"",
        "phoneticHint": "/hænd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cama\" em inglês?",
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
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Dog",
          "Bed",
          "Apple",
          "Water"
        ],
        "correctAnswer": "Bed",
        "explanation": "Exemplo prático: \"A cozy warm bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p10-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lion",
        "visualEmoji": "🦁",
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
            "text": "Lion",
            "emoji": "🦁",
            "label": "Lion",
            "translationPt": "Leão"
          }
        ],
        "options": [
          "Dog",
          "Apple",
          "Water",
          "Lion"
        ],
        "correctAnswer": "Lion",
        "explanation": "Exemplo prático: \"The king of the jungle.\"",
        "phoneticHint": "/ˈlaɪ.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Banana\"?",
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
          }
        ],
        "options": [
          "Banana",
          "Apple",
          "Dog",
          "Water"
        ],
        "correctAnswer": "Banana",
        "explanation": "Exemplo prático: \"A sweet yellow banana.\"",
        "phoneticHint": "/bəˈnæn.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e11",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Bicicleta\" em inglês?",
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
        "explanation": "Exemplo prático: \"Ride a bicycle in the park.\"",
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
        "prompt": "Qual imagem representa \"Bread\"?",
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
        "explanation": "Exemplo prático: \"Freshly baked bread smells wonderful.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Ovo\" em inglês?",
        "audioPhrase": "Egg",
        "visualEmoji": "🥚",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Bread",
          "Egg",
          "Butter",
          "Cheese"
        ],
        "correctAnswer": "Egg",
        "explanation": "Exemplo prático: \"Fried eggs with toast for breakfast.\"",
        "phoneticHint": "/eɡ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p11-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
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
        "correctAnswer": "Cheese",
        "explanation": "Exemplo prático: \"Melted yellow cheese on a sandwich.\"",
        "phoneticHint": "/tʃiːz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Butter\"?",
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
          "Bread",
          "Cheese",
          "Butter"
        ],
        "correctAnswer": "Butter",
        "explanation": "Exemplo prático: \"Spread creamy butter on warm toast.\"",
        "phoneticHint": "/ˈbʌt.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Sanduíche\" em inglês?",
        "audioPhrase": "Sandwich",
        "visualEmoji": "🥪",
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
          }
        ],
        "options": [
          "Cheese",
          "Bread",
          "Sandwich",
          "Egg"
        ],
        "correctAnswer": "Sandwich",
        "explanation": "Exemplo prático: \"A healthy club sandwich with lettuce.\"",
        "phoneticHint": "/ˈsæn.wɪdʒ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p11-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
          }
        ],
        "options": [
          "Pizza",
          "Cheese",
          "Bread",
          "Egg"
        ],
        "correctAnswer": "Pizza",
        "explanation": "Exemplo prático: \"A hot slice of cheese pizza.\"",
        "phoneticHint": "/ˈpiːt.sə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Burger\"?",
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
        "explanation": "Exemplo prático: \"A juicy burger with tomato.\"",
        "phoneticHint": "/ˈbɜː.ɡər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Arroz\" em inglês?",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
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
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
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
          "Rice",
          "Egg"
        ],
        "correctAnswer": "Rice",
        "explanation": "Exemplo prático: \"Steamed white rice accompanies dinner.\"",
        "phoneticHint": "/raɪs/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p11-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pasta",
        "visualEmoji": "🍝",
        "visualOptions": [
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Massa / Macarrão"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo"
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
          "Pasta",
          "Egg",
          "Bread",
          "Cheese"
        ],
        "correctAnswer": "Pasta",
        "explanation": "Exemplo prático: \"Italian pasta with homemade tomato sauce.\"",
        "phoneticHint": "/ˈpæs.tə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Soup\"?",
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
            "text": "Soup",
            "emoji": "🍲",
            "label": "Soup",
            "translationPt": "Sopa"
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
          "Soup",
          "Bread",
          "Cheese"
        ],
        "correctAnswer": "Soup",
        "explanation": "Exemplo prático: \"A warm bowl of vegetable soup.\"",
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
        "prompt": "Qual imagem representa \"Phone\"?",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
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
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer / Laptop",
            "translationPt": "Computador / Notebook"
          }
        ],
        "options": [
          "Television",
          "Headphones",
          "Phone",
          "Computer"
        ],
        "correctAnswer": "Phone",
        "explanation": "Exemplo prático: \"I check text messages on my phone.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Computador / Notebook\" em inglês?",
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
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television / TV",
            "translationPt": "Televisão"
          }
        ],
        "options": [
          "Computer",
          "Phone",
          "Headphones",
          "Television"
        ],
        "correctAnswer": "Computer",
        "explanation": "Exemplo prático: \"She studies English on her computer.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p12-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Headphones",
        "visualEmoji": "🎧",
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
          }
        ],
        "options": [
          "Computer",
          "Phone",
          "Television",
          "Headphones"
        ],
        "correctAnswer": "Headphones",
        "explanation": "Exemplo prático: \"Wireless headphones provide clear audio.\"",
        "phoneticHint": "/ˈhed.foʊnz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Television\"?",
        "audioPhrase": "Television",
        "visualEmoji": "📺",
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
          }
        ],
        "options": [
          "Headphones",
          "Phone",
          "Television",
          "Computer"
        ],
        "correctAnswer": "Television",
        "explanation": "Exemplo prático: \"Watch educational shows on television.\"",
        "phoneticHint": "/ˈtel.ɪˌvɪʒ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Câmera fotográfica\" em inglês?",
        "audioPhrase": "Camera",
        "visualEmoji": "📷",
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
          }
        ],
        "options": [
          "Headphones",
          "Phone",
          "Camera",
          "Computer"
        ],
        "correctAnswer": "Camera",
        "explanation": "Exemplo prático: \"Take memorable pictures with this camera.\"",
        "phoneticHint": "/ˈkæm.rə/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p12-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Battery",
        "visualEmoji": "🔋",
        "visualOptions": [
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Bateria"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
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
          "Battery",
          "Phone",
          "Headphones",
          "Computer"
        ],
        "correctAnswer": "Battery",
        "explanation": "Exemplo prático: \"Recharge the battery when it gets low.\"",
        "phoneticHint": "/ˈbæt.ər.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Mouse\"?",
        "audioPhrase": "Mouse",
        "visualEmoji": "🖱️",
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
            "text": "Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
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
          "Mouse",
          "Computer"
        ],
        "correctAnswer": "Mouse",
        "explanation": "Exemplo prático: \"Click on the link using your mouse.\"",
        "phoneticHint": "/maʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Teclado\" em inglês?",
        "audioPhrase": "Keyboard",
        "visualEmoji": "⌨️",
        "visualOptions": [
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
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Telefone"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          }
        ],
        "options": [
          "Keyboard",
          "Computer",
          "Phone",
          "Headphones"
        ],
        "correctAnswer": "Keyboard",
        "explanation": "Exemplo prático: \"Type the sentences on the keyboard.\"",
        "phoneticHint": "/ˈkiː.bɔːd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p12-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tablet",
        "visualEmoji": "📟",
        "visualOptions": [
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
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fones de ouvido"
          }
        ],
        "options": [
          "Tablet",
          "Computer",
          "Phone",
          "Headphones"
        ],
        "correctAnswer": "Tablet",
        "explanation": "Exemplo prático: \"Children read e-books on the tablet.\"",
        "phoneticHint": "/ˈtæb.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Radio\"?",
        "audioPhrase": "Radio",
        "visualEmoji": "📻",
        "visualOptions": [
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
          },
          {
            "text": "Radio",
            "emoji": "📻",
            "label": "Radio",
            "translationPt": "Rádio"
          }
        ],
        "options": [
          "Computer",
          "Headphones",
          "Phone",
          "Radio"
        ],
        "correctAnswer": "Radio",
        "explanation": "Exemplo prático: \"Listen to English podcasts on the radio.\"",
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
        "prompt": "Qual imagem representa \"School\"?",
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
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital"
          }
        ],
        "options": [
          "School",
          "Supermarket",
          "Park",
          "Hospital"
        ],
        "correctAnswer": "School",
        "explanation": "Exemplo prático: \"Students learn languages at school.\"",
        "phoneticHint": "/skuːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Hospital\" em inglês?",
        "audioPhrase": "Hospital",
        "visualEmoji": "🏥",
        "visualOptions": [
          {
            "text": "Park",
            "emoji": "🌳",
            "label": "Park",
            "translationPt": "Parque / Praça"
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
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Park",
          "Supermarket",
          "Hospital",
          "School"
        ],
        "correctAnswer": "Hospital",
        "explanation": "Exemplo prático: \"Doctors and nurses care for patients at the hospital.\"",
        "phoneticHint": "/ˈhɒs.pɪ.təl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p13-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Park",
        "visualEmoji": "🌳",
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
          "School",
          "Park",
          "Supermarket",
          "Hospital"
        ],
        "correctAnswer": "Park",
        "explanation": "Exemplo prático: \"Families have picnics in the green park.\"",
        "phoneticHint": "/pɑːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Supermarket\"?",
        "audioPhrase": "Supermarket",
        "visualEmoji": "🛒",
        "visualOptions": [
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
          "Supermarket",
          "Hospital",
          "Park",
          "School"
        ],
        "correctAnswer": "Supermarket",
        "explanation": "Exemplo prático: \"Buy fresh food at the local supermarket.\"",
        "phoneticHint": "/ˈsuː.pəˌmɑː.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Restaurante\" em inglês?",
        "audioPhrase": "Restaurant",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
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
          }
        ],
        "options": [
          "School",
          "Restaurant",
          "Park",
          "Hospital"
        ],
        "correctAnswer": "Restaurant",
        "explanation": "Exemplo prático: \"We have dinner at our favorite restaurant.\"",
        "phoneticHint": "/ˈres.trɒnt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p13-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bank",
        "visualEmoji": "🏦",
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
          }
        ],
        "options": [
          "School",
          "Bank",
          "Hospital",
          "Park"
        ],
        "correctAnswer": "Bank",
        "explanation": "Exemplo prático: \"Deposit money safely at the city bank.\"",
        "phoneticHint": "/bæŋk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Airport\"?",
        "audioPhrase": "Airport",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto"
          },
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
          }
        ],
        "options": [
          "Airport",
          "Hospital",
          "School",
          "Park"
        ],
        "correctAnswer": "Airport",
        "explanation": "Exemplo prático: \"Depart on international flights from the airport.\"",
        "phoneticHint": "/ˈeə.pɔːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Hotel\" em inglês?",
        "audioPhrase": "Hotel",
        "visualEmoji": "🏨",
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
          }
        ],
        "options": [
          "School",
          "Park",
          "Hotel",
          "Hospital"
        ],
        "correctAnswer": "Hotel",
        "explanation": "Exemplo prático: \"Stay at a comfortable downtown hotel.\"",
        "phoneticHint": "/hoʊˈtel/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p13-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca"
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
          }
        ],
        "options": [
          "School",
          "Library",
          "Park",
          "Hospital"
        ],
        "correctAnswer": "Library",
        "explanation": "Exemplo prático: \"Read quiet books in the public library.\"",
        "phoneticHint": "/ˈlaɪ.brər.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Bakery\"?",
        "audioPhrase": "Bakery",
        "visualEmoji": "🥖",
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
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Padaria"
          }
        ],
        "options": [
          "School",
          "Park",
          "Hospital",
          "Bakery"
        ],
        "correctAnswer": "Bakery",
        "explanation": "Exemplo prático: \"Buy warm bread every morning at the bakery.\"",
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
        "prompt": "Qual imagem representa \"Sun\"?",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Moon",
          "Sun",
          "Flower",
          "Tree"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The morning sun brings light and energy.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Lua\" em inglês?",
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
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          }
        ],
        "options": [
          "Moon",
          "Sun",
          "Flower",
          "Tree"
        ],
        "correctAnswer": "Moon",
        "explanation": "Exemplo prático: \"The crescent moon shines at night.\"",
        "phoneticHint": "/muːn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p14-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          }
        ],
        "options": [
          "Flower",
          "Moon",
          "Sun",
          "Tree"
        ],
        "correctAnswer": "Tree",
        "explanation": "Exemplo prático: \"Tall green trees grow in the forest.\"",
        "phoneticHint": "/triː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Flower\"?",
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
            "text": "Flower",
            "emoji": "🌸",
            "label": "Flower",
            "translationPt": "Flor"
          }
        ],
        "options": [
          "Tree",
          "Moon",
          "Sun",
          "Flower"
        ],
        "correctAnswer": "Flower",
        "explanation": "Exemplo prático: \"A beautiful pink flower blooms in spring.\"",
        "phoneticHint": "/ˈflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Montanha\" em inglês?",
        "audioPhrase": "Mountain",
        "visualEmoji": "⛰️",
        "visualOptions": [
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
          },
          {
            "text": "Mountain",
            "emoji": "⛰️",
            "label": "Mountain",
            "translationPt": "Montanha"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          }
        ],
        "options": [
          "Moon",
          "Tree",
          "Mountain",
          "Sun"
        ],
        "correctAnswer": "Mountain",
        "explanation": "Exemplo prático: \"Snow covers the peaks of the high mountain.\"",
        "phoneticHint": "/ˈmaʊn.tɪn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p14-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "River",
        "visualEmoji": "🌊",
        "visualOptions": [
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
          },
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          }
        ],
        "options": [
          "River",
          "Sun",
          "Moon",
          "Tree"
        ],
        "correctAnswer": "River",
        "explanation": "Exemplo prático: \"Clean freshwater flows down the winding river.\"",
        "phoneticHint": "/ˈrɪv.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Forest\"?",
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
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Forest",
            "emoji": "🌳",
            "label": "Forest",
            "translationPt": "Floresta / Bosque"
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
          "Tree",
          "Forest",
          "Moon"
        ],
        "correctAnswer": "Forest",
        "explanation": "Exemplo prático: \"Wild animals live peacefully in the dense forest.\"",
        "phoneticHint": "/ˈfɒr.ɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Praia\" em inglês?",
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
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
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
          }
        ],
        "options": [
          "Tree",
          "Moon",
          "Beach",
          "Sun"
        ],
        "correctAnswer": "Beach",
        "explanation": "Exemplo prático: \"Walk barefoot on the sunny sandy beach.\"",
        "phoneticHint": "/biːtʃ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p14-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fire",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Fire",
            "emoji": "🔥",
            "label": "Fire",
            "translationPt": "Fogo"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
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
          "Fire",
          "Sun",
          "Tree",
          "Moon"
        ],
        "correctAnswer": "Fire",
        "explanation": "Exemplo prático: \"A warm camp fire keeps travelers warm.\"",
        "phoneticHint": "/faɪər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Island\"?",
        "audioPhrase": "Island",
        "visualEmoji": "🏝️",
        "visualOptions": [
          {
            "text": "Island",
            "emoji": "🏝️",
            "label": "Island",
            "translationPt": "Ilha"
          },
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
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          }
        ],
        "options": [
          "Island",
          "Tree",
          "Sun",
          "Moon"
        ],
        "correctAnswer": "Island",
        "explanation": "Exemplo prático: \"An island surrounded by tropical blue water.\"",
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
        "prompt": "Qual imagem representa \"Rain\"?",
        "audioPhrase": "Rain",
        "visualEmoji": "🌧️",
        "visualOptions": [
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
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          }
        ],
        "options": [
          "Wind",
          "Cloud",
          "Snow",
          "Rain"
        ],
        "correctAnswer": "Rain",
        "explanation": "Exemplo prático: \"Gentle rain waters the thirsty crops.\"",
        "phoneticHint": "/reɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Neve\" em inglês?",
        "audioPhrase": "Snow",
        "visualEmoji": "❄️",
        "visualOptions": [
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
          "Wind",
          "Cloud",
          "Rain",
          "Snow"
        ],
        "correctAnswer": "Snow",
        "explanation": "Exemplo prático: \"White snow falls silently in winter.\"",
        "phoneticHint": "/snoʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p15-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cloud",
        "visualEmoji": "☁️",
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
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          },
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          }
        ],
        "options": [
          "Rain",
          "Cloud",
          "Wind",
          "Snow"
        ],
        "correctAnswer": "Cloud",
        "explanation": "Exemplo prático: \"Fluffy white clouds drift across the blue sky.\"",
        "phoneticHint": "/klaʊd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Wind\"?",
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
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Wind",
            "emoji": "💨",
            "label": "Wind",
            "translationPt": "Vento"
          }
        ],
        "options": [
          "Cloud",
          "Snow",
          "Rain",
          "Wind"
        ],
        "correctAnswer": "Wind",
        "explanation": "Exemplo prático: \"A cool summer wind rustles the leaves.\"",
        "phoneticHint": "/wɪnd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Arco-íris\" em inglês?",
        "audioPhrase": "Rainbow",
        "visualEmoji": "🌈",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Rain",
          "Rainbow",
          "Cloud",
          "Snow"
        ],
        "correctAnswer": "Rainbow",
        "explanation": "Exemplo prático: \"A colorful rainbow appears after the storm.\"",
        "phoneticHint": "/ˈreɪn.boʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p15-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lightning",
        "visualEmoji": "⚡",
        "visualOptions": [
          {
            "text": "Lightning",
            "emoji": "⚡",
            "label": "Lightning",
            "translationPt": "Relâmpago / Raio"
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
            "text": "Cloud",
            "emoji": "☁️",
            "label": "Cloud",
            "translationPt": "Nuvem"
          }
        ],
        "options": [
          "Lightning",
          "Rain",
          "Snow",
          "Cloud"
        ],
        "correctAnswer": "Lightning",
        "explanation": "Exemplo prático: \"Bright lightning flashes across the dark sky.\"",
        "phoneticHint": "/ˈlaɪt.nɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Fog\"?",
        "audioPhrase": "Fog",
        "visualEmoji": "🌫️",
        "visualOptions": [
          {
            "text": "Fog",
            "emoji": "🌫️",
            "label": "Fog",
            "translationPt": "Neblina / Nevoeiro"
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
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          }
        ],
        "options": [
          "Fog",
          "Cloud",
          "Snow",
          "Rain"
        ],
        "correctAnswer": "Fog",
        "explanation": "Exemplo prático: \"Thick morning fog reduces visibility.\"",
        "phoneticHint": "/fɒɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Guarda-chuva\" em inglês?",
        "audioPhrase": "Umbrella",
        "visualEmoji": "☂️",
        "visualOptions": [
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
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
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          }
        ],
        "options": [
          "Snow",
          "Cloud",
          "Rain",
          "Umbrella"
        ],
        "correctAnswer": "Umbrella",
        "explanation": "Exemplo prático: \"Carry an umbrella when it looks like rain.\"",
        "phoneticHint": "/ʌmˈbrel.ə/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p15-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
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
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sunny Day",
            "translationPt": "Dia ensolarado"
          }
        ],
        "options": [
          "Rain",
          "Cloud",
          "Snow",
          "Sun"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"A warm sunny day for outdoor activities.\"",
        "phoneticHint": "/ˈsʌn.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Thermometer\"?",
        "audioPhrase": "Thermometer",
        "visualEmoji": "🌡️",
        "visualOptions": [
          {
            "text": "Snow",
            "emoji": "❄️",
            "label": "Snow",
            "translationPt": "Neve"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro (Temperatura)"
          },
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
          }
        ],
        "options": [
          "Snow",
          "Thermometer",
          "Rain",
          "Cloud"
        ],
        "correctAnswer": "Thermometer",
        "explanation": "Exemplo prático: \"The thermometer shows high temperatures.\"",
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
        "prompt": "Qual imagem representa \"Run\"?",
        "audioPhrase": "Run",
        "visualEmoji": "🏃",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Eat",
          "Walk",
          "Run",
          "Drink"
        ],
        "correctAnswer": "Run",
        "explanation": "Exemplo prático: \"Athletes run fast in the stadium.\"",
        "phoneticHint": "/rʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Caminhar\" em inglês?",
        "audioPhrase": "Walk",
        "visualEmoji": "🚶",
        "visualOptions": [
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
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
            "text": "Eat",
            "emoji": "🍽️",
            "label": "Eat",
            "translationPt": "Comer"
          }
        ],
        "options": [
          "Walk",
          "Run",
          "Drink",
          "Eat"
        ],
        "correctAnswer": "Walk",
        "explanation": "Exemplo prático: \"Take a relaxed walk through the botanical garden.\"",
        "phoneticHint": "/wɔːk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p16-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Eat",
        "visualEmoji": "🍽️",
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
        "correctAnswer": "Eat",
        "explanation": "Exemplo prático: \"We eat wholesome meals with family.\"",
        "phoneticHint": "/iːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Drink\"?",
        "audioPhrase": "Drink",
        "visualEmoji": "🥤",
        "visualOptions": [
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
          "Run",
          "Eat",
          "Drink",
          "Walk"
        ],
        "correctAnswer": "Drink",
        "explanation": "Exemplo prático: \"Remember to drink water throughout the day.\"",
        "phoneticHint": "/drɪŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Dormir\" em inglês?",
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
            "text": "Sleep",
            "emoji": "😴",
            "label": "Sleep",
            "translationPt": "Dormir"
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
          }
        ],
        "options": [
          "Walk",
          "Sleep",
          "Eat",
          "Run"
        ],
        "correctAnswer": "Sleep",
        "explanation": "Exemplo prático: \"Get eight hours of restful sleep.\"",
        "phoneticHint": "/sliːp/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p16-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Read",
        "visualEmoji": "📖",
        "visualOptions": [
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          },
          {
            "text": "Read",
            "emoji": "📖",
            "label": "Read",
            "translationPt": "Ler"
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
          "Read",
          "Run",
          "Eat"
        ],
        "correctAnswer": "Read",
        "explanation": "Exemplo prático: \"I read inspiring stories before bedtime.\"",
        "phoneticHint": "/riːd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Write\"?",
        "audioPhrase": "Write",
        "visualEmoji": "✍️",
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
            "text": "Write",
            "emoji": "✍️",
            "label": "Write",
            "translationPt": "Escrever"
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
          "Write",
          "Run"
        ],
        "correctAnswer": "Write",
        "explanation": "Exemplo prático: \"Write new English words in your notebook.\"",
        "phoneticHint": "/raɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p16-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Nadar\" em inglês?",
        "audioPhrase": "Swim",
        "visualEmoji": "🏊",
        "visualOptions": [
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
          },
          {
            "text": "Walk",
            "emoji": "🚶",
            "label": "Walk",
            "translationPt": "Caminhar"
          }
        ],
        "options": [
          "Swim",
          "Run",
          "Eat",
          "Walk"
        ],
        "correctAnswer": "Swim",
        "explanation": "Exemplo prático: \"Learn how to swim in the pool.\"",
        "phoneticHint": "/swɪm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p16-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
          },
          {
            "text": "Sing",
            "emoji": "🎤",
            "label": "Sing",
            "translationPt": "Cantar"
          }
        ],
        "options": [
          "Run",
          "Eat",
          "Walk",
          "Sing"
        ],
        "correctAnswer": "Sing",
        "explanation": "Exemplo prático: \"Sing cheerful songs with friends.\"",
        "phoneticHint": "/sɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p16-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Dance\"?",
        "audioPhrase": "Dance",
        "visualEmoji": "💃",
        "visualOptions": [
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
          "Dance",
          "Walk",
          "Run",
          "Eat"
        ],
        "correctAnswer": "Dance",
        "explanation": "Exemplo prático: \"People dance to upbeat music.\"",
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
        "prompt": "Qual imagem representa \"Happy\"?",
        "audioPhrase": "Happy",
        "visualEmoji": "😊",
        "visualOptions": [
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
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
          }
        ],
        "options": [
          "Angry",
          "Surprised",
          "Sad",
          "Happy"
        ],
        "correctAnswer": "Happy",
        "explanation": "Exemplo prático: \"A warm smile shows that you are happy.\"",
        "phoneticHint": "/ˈhæp.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Triste\" em inglês?",
        "audioPhrase": "Sad",
        "visualEmoji": "😢",
        "visualOptions": [
          {
            "text": "Surprised",
            "emoji": "😮",
            "label": "Surprised",
            "translationPt": "Surpreso / Admirado"
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
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
          "Surprised",
          "Sad",
          "Happy",
          "Angry"
        ],
        "correctAnswer": "Sad",
        "explanation": "Exemplo prático: \"A hug helps when someone feels sad.\"",
        "phoneticHint": "/sæd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p17-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz"
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
          "Sad",
          "Happy",
          "Surprised"
        ],
        "correctAnswer": "Angry",
        "explanation": "Exemplo prático: \"Take deep breaths when you feel angry.\"",
        "phoneticHint": "/ˈæŋ.ɡri/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Surprised\"?",
        "audioPhrase": "Surprised",
        "visualEmoji": "😮",
        "visualOptions": [
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
          "Surprised",
          "Happy",
          "Sad"
        ],
        "correctAnswer": "Surprised",
        "explanation": "Exemplo prático: \"She was pleasantly surprised by the gift.\"",
        "phoneticHint": "/səˈpraɪzd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cansado\" em inglês?",
        "audioPhrase": "Tired",
        "visualEmoji": "🥱",
        "visualOptions": [
          {
            "text": "Tired",
            "emoji": "🥱",
            "label": "Tired",
            "translationPt": "Cansado"
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
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          }
        ],
        "options": [
          "Tired",
          "Happy",
          "Angry",
          "Sad"
        ],
        "correctAnswer": "Tired",
        "explanation": "Exemplo prático: \"After a long workday, he feels tired.\"",
        "phoneticHint": "/taɪəd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p17-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Confused",
        "visualEmoji": "🤔",
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
            "text": "Confused",
            "emoji": "🤔",
            "label": "Confused",
            "translationPt": "Confuso"
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
          "Confused",
          "Happy"
        ],
        "correctAnswer": "Confused",
        "explanation": "Exemplo prático: \"Ask questions if you feel confused.\"",
        "phoneticHint": "/kənˈfjuːzd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Scared\"?",
        "audioPhrase": "Scared",
        "visualEmoji": "😨",
        "visualOptions": [
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
          },
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          }
        ],
        "options": [
          "Scared",
          "Happy",
          "Angry",
          "Sad"
        ],
        "correctAnswer": "Scared",
        "explanation": "Exemplo prático: \"Thunder sometimes makes children scared.\"",
        "phoneticHint": "/skeəd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p17-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Animado / Empolgado\" em inglês?",
        "audioPhrase": "Excited",
        "visualEmoji": "🤩",
        "visualOptions": [
          {
            "text": "Angry",
            "emoji": "😠",
            "label": "Angry",
            "translationPt": "Bravo / Irritado"
          },
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
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
          "Angry",
          "Sad",
          "Happy",
          "Excited"
        ],
        "correctAnswer": "Excited",
        "explanation": "Exemplo prático: \"We are excited about the upcoming holiday.\"",
        "phoneticHint": "/ɪkˈsaɪ.tɪd/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p17-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Calm",
        "visualEmoji": "😌",
        "visualOptions": [
          {
            "text": "Sad",
            "emoji": "😢",
            "label": "Sad",
            "translationPt": "Triste"
          },
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
          }
        ],
        "options": [
          "Sad",
          "Calm",
          "Angry",
          "Happy"
        ],
        "correctAnswer": "Calm",
        "explanation": "Exemplo prático: \"Meditation keeps your mind peaceful and calm.\"",
        "phoneticHint": "/kɑːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p17-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cool\"?",
        "audioPhrase": "Cool",
        "visualEmoji": "😎",
        "visualOptions": [
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
          "Cool",
          "Sad",
          "Angry"
        ],
        "correctAnswer": "Cool",
        "explanation": "Exemplo prático: \"Wearing sunglasses looks very cool.\"",
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
        "prompt": "Qual imagem representa \"Book\"?",
        "audioPhrase": "Book",
        "visualEmoji": "📚",
        "visualOptions": [
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
          "Notebook",
          "Pencil",
          "Book",
          "Pen"
        ],
        "correctAnswer": "Book",
        "explanation": "Exemplo prático: \"Reading a good book enriches your vocabulary.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Caderno de anotações\" em inglês?",
        "audioPhrase": "Notebook",
        "visualEmoji": "📓",
        "visualOptions": [
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis"
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
          "Pencil",
          "Book",
          "Pen",
          "Notebook"
        ],
        "correctAnswer": "Notebook",
        "explanation": "Exemplo prático: \"Write lecture notes inside your notebook.\"",
        "phoneticHint": "/ˈnoʊt.bʊk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p18-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pen",
        "visualEmoji": "🖊️",
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
          }
        ],
        "options": [
          "Book",
          "Pen",
          "Pencil",
          "Notebook"
        ],
        "correctAnswer": "Pen",
        "explanation": "Exemplo prático: \"Sign the contract using blue ink with a pen.\"",
        "phoneticHint": "/pen/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Pencil\"?",
        "audioPhrase": "Pencil",
        "visualEmoji": "✏️",
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
          }
        ],
        "options": [
          "Pen",
          "Book",
          "Pencil",
          "Notebook"
        ],
        "correctAnswer": "Pencil",
        "explanation": "Exemplo prático: \"Sketch drawing lines with a sharp pencil.\"",
        "phoneticHint": "/ˈpen.səl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Borracha escolar\" em inglês?",
        "audioPhrase": "Eraser",
        "visualEmoji": "🧼",
        "visualOptions": [
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
          },
          {
            "text": "Eraser",
            "emoji": "🧼",
            "label": "Eraser",
            "translationPt": "Borracha escolar"
          }
        ],
        "options": [
          "Notebook",
          "Book",
          "Pen",
          "Eraser"
        ],
        "correctAnswer": "Eraser",
        "explanation": "Exemplo prático: \"Erase mistakes cleanly with an eraser.\"",
        "phoneticHint": "/ɪˈreɪ.zər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p18-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ruler",
        "visualEmoji": "📏",
        "visualOptions": [
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
          "Ruler",
          "Pen",
          "Book"
        ],
        "correctAnswer": "Ruler",
        "explanation": "Exemplo prático: \"Measure length accurately with a clear ruler.\"",
        "phoneticHint": "/ˈruː.lər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Scissors\"?",
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
          "Scissors",
          "Pen",
          "Book",
          "Notebook"
        ],
        "correctAnswer": "Scissors",
        "explanation": "Exemplo prático: \"Cut paper shapes using safety scissors.\"",
        "phoneticHint": "/ˈsɪz.əz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p18-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cola escolar\" em inglês?",
        "audioPhrase": "Glue",
        "visualEmoji": "🧴",
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
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          }
        ],
        "options": [
          "Book",
          "Pen",
          "Notebook",
          "Glue"
        ],
        "correctAnswer": "Glue",
        "explanation": "Exemplo prático: \"Paste the collage together with stick glue.\"",
        "phoneticHint": "/ɡluː/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p18-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
          }
        ],
        "options": [
          "Desk",
          "Notebook",
          "Pen",
          "Book"
        ],
        "correctAnswer": "Desk",
        "explanation": "Exemplo prático: \"Sit at your study desk to complete homework.\"",
        "phoneticHint": "/desk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p18-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Calculator\"?",
        "audioPhrase": "Calculator",
        "visualEmoji": "🔢",
        "visualOptions": [
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
          },
          {
            "text": "Calculator",
            "emoji": "🔢",
            "label": "Calculator",
            "translationPt": "Calculadora"
          }
        ],
        "options": [
          "Pen",
          "Notebook",
          "Book",
          "Calculator"
        ],
        "correctAnswer": "Calculator",
        "explanation": "Exemplo prático: \"Solve math equations using a digital calculator.\"",
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
        "prompt": "Qual imagem representa \"Baby\"?",
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
        "explanation": "Exemplo prático: \"The newborn baby smiles gently.\"",
        "phoneticHint": "/ˈbeɪ.bi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Menino / Garoto\" em inglês?",
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
        "explanation": "Exemplo prático: \"The active boy kicks the football.\"",
        "phoneticHint": "/bɔɪ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p19-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Man",
            "emoji": "👨",
            "label": "Man",
            "translationPt": "Homem"
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
          }
        ],
        "options": [
          "Girl",
          "Man",
          "Boy",
          "Baby"
        ],
        "correctAnswer": "Girl",
        "explanation": "Exemplo prático: \"The creative girl paints a portrait.\"",
        "phoneticHint": "/ɡɜːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Man\"?",
        "audioPhrase": "Man",
        "visualEmoji": "👨",
        "visualOptions": [
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
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          }
        ],
        "options": [
          "Boy",
          "Girl",
          "Man",
          "Baby"
        ],
        "correctAnswer": "Man",
        "explanation": "Exemplo prático: \"The kind man helps his neighbors.\"",
        "phoneticHint": "/mæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Mulher\" em inglês?",
        "audioPhrase": "Woman",
        "visualEmoji": "👩",
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
            "text": "Woman",
            "emoji": "👩",
            "label": "Woman",
            "translationPt": "Mulher"
          },
          {
            "text": "Boy",
            "emoji": "👦",
            "label": "Boy",
            "translationPt": "Menino / Garoto"
          }
        ],
        "options": [
          "Girl",
          "Baby",
          "Woman",
          "Boy"
        ],
        "correctAnswer": "Woman",
        "explanation": "Exemplo prático: \"The professional woman leads the meeting.\"",
        "phoneticHint": "/ˈwʊm.ən/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p19-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Mother",
        "visualEmoji": "👩‍👧",
        "visualOptions": [
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
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Mother",
            "emoji": "👩‍👧",
            "label": "Mother / Mom",
            "translationPt": "Mãe"
          }
        ],
        "options": [
          "Boy",
          "Baby",
          "Girl",
          "Mother"
        ],
        "correctAnswer": "Mother",
        "explanation": "Exemplo prático: \"A mother hugs her child with love.\"",
        "phoneticHint": "/ˈmʌð.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Father\"?",
        "audioPhrase": "Father",
        "visualEmoji": "👨‍👦",
        "visualOptions": [
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          },
          {
            "text": "Father",
            "emoji": "👨‍👦",
            "label": "Father / Dad",
            "translationPt": "Pai"
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
          "Father",
          "Girl",
          "Boy"
        ],
        "correctAnswer": "Father",
        "explanation": "Exemplo prático: \"A father teaches his son to ride a bike.\"",
        "phoneticHint": "/ˈfɑː.ðər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p19-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Amigo(a)\" em inglês?",
        "audioPhrase": "Friend",
        "visualEmoji": "🤝",
        "visualOptions": [
          {
            "text": "Friend",
            "emoji": "🤝",
            "label": "Friend",
            "translationPt": "Amigo(a)"
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
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          }
        ],
        "options": [
          "Friend",
          "Girl",
          "Boy",
          "Baby"
        ],
        "correctAnswer": "Friend",
        "explanation": "Exemplo prático: \"A true friend is always supportive.\"",
        "phoneticHint": "/frend/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p19-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Grandfather",
        "visualEmoji": "👴",
        "visualOptions": [
          {
            "text": "Girl",
            "emoji": "👧",
            "label": "Girl",
            "translationPt": "Menina / Garota"
          },
          {
            "text": "Grandfather",
            "emoji": "👴",
            "label": "Grandfather / Grandpa",
            "translationPt": "Avô"
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
          "Girl",
          "Grandfather",
          "Baby",
          "Boy"
        ],
        "correctAnswer": "Grandfather",
        "explanation": "Exemplo prático: \"Grandfather tells entertaining historical stories.\"",
        "phoneticHint": "/ˈɡræn.fɑː.ðər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p19-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Grandmother\"?",
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
            "text": "Grandmother",
            "emoji": "👵",
            "label": "Grandmother / Grandma",
            "translationPt": "Avó"
          },
          {
            "text": "Baby",
            "emoji": "👶",
            "label": "Baby",
            "translationPt": "Bebê"
          }
        ],
        "options": [
          "Girl",
          "Boy",
          "Grandmother",
          "Baby"
        ],
        "correctAnswer": "Grandmother",
        "explanation": "Exemplo prático: \"Grandmother bakes delicious cinnamon cookies.\"",
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
        "prompt": "Qual imagem representa \"Bread\"?",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          },
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
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "School",
          "Sun",
          "Phone",
          "Bread"
        ],
        "correctAnswer": "Bread",
        "explanation": "Exemplo prático: \"Warm sliced bread.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Telefone celular\" em inglês?",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
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
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
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
          "Phone",
          "School",
          "Sun"
        ],
        "correctAnswer": "Phone",
        "explanation": "Exemplo prático: \"A smart mobile phone.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p20-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
        "explanation": "Exemplo prático: \"A place of knowledge.\"",
        "phoneticHint": "/skuːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Sun\"?",
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
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Sun",
          "Bread",
          "Phone",
          "School"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The radiant center of our solar system.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Chuva\" em inglês?",
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
          "Rain",
          "Bread",
          "School",
          "Phone"
        ],
        "correctAnswer": "Rain",
        "explanation": "Exemplo prático: \"Refreshing raindrops falling.\"",
        "phoneticHint": "/reɪn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p20-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Run",
        "visualEmoji": "🏃",
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
            "text": "Run",
            "emoji": "🏃",
            "label": "Run",
            "translationPt": "Correr"
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
          "Run",
          "Bread"
        ],
        "correctAnswer": "Run",
        "explanation": "Exemplo prático: \"Move swiftly on foot.\"",
        "phoneticHint": "/rʌn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Happy\"?",
        "audioPhrase": "Happy",
        "visualEmoji": "😊",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Happy",
            "emoji": "😊",
            "label": "Happy",
            "translationPt": "Feliz / Contente"
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
          "Happy",
          "School",
          "Phone"
        ],
        "correctAnswer": "Happy",
        "explanation": "Exemplo prático: \"Full of positive joy.\"",
        "phoneticHint": "/ˈhæp.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Livro didático\" em inglês?",
        "audioPhrase": "Book",
        "visualEmoji": "📚",
        "visualOptions": [
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
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro didático"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola"
          }
        ],
        "options": [
          "Bread",
          "Phone",
          "Book",
          "School"
        ],
        "correctAnswer": "Book",
        "explanation": "Exemplo prático: \"A wealth of written wisdom.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p20-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
          "School",
          "Friend",
          "Bread"
        ],
        "correctAnswer": "Friend",
        "explanation": "Exemplo prático: \"A trustworthy companion.\"",
        "phoneticHint": "/frend/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p20-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Computer\"?",
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
          }
        ],
        "options": [
          "Computer",
          "School",
          "Bread",
          "Phone"
        ],
        "correctAnswer": "Computer",
        "explanation": "Exemplo prático: \"A fast computing machine.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p20-e11",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Mãe\" em inglês?",
        "audioPhrase": "Mother",
        "visualEmoji": "👩‍👧",
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
            "text": "Mother",
            "emoji": "👩‍👧",
            "label": "Mother",
            "translationPt": "Mãe"
          }
        ],
        "options": [
          "Phone",
          "Bread",
          "School",
          "Mother"
        ],
        "correctAnswer": "Mother",
        "explanation": "Exemplo prático: \"The loving heart of the home.\"",
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
        "prompt": "Qual imagem representa \"Soccer\"?",
        "audioPhrase": "Soccer",
        "visualEmoji": "⚽",
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
          }
        ],
        "options": [
          "Basketball",
          "Tennis",
          "Soccer",
          "Volleyball"
        ],
        "correctAnswer": "Soccer",
        "explanation": "Exemplo prático: \"Kids play soccer on Saturday afternoon.\"",
        "phoneticHint": "/ˈsɒk.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Basquete\" em inglês?",
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
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          }
        ],
        "options": [
          "Volleyball",
          "Basketball",
          "Soccer",
          "Tennis"
        ],
        "correctAnswer": "Basketball",
        "explanation": "Exemplo prático: \"Shoot the basketball into the high hoop.\"",
        "phoneticHint": "/ˈbɑː.skɪt.bɔːl/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p21-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tennis",
        "visualEmoji": "🎾",
        "visualOptions": [
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
          },
          {
            "text": "Volleyball",
            "emoji": "🏐",
            "label": "Volleyball",
            "translationPt": "Vôlei"
          }
        ],
        "options": [
          "Soccer",
          "Tennis",
          "Basketball",
          "Volleyball"
        ],
        "correctAnswer": "Tennis",
        "explanation": "Exemplo prático: \"Hit the tennis ball over the net with a racket.\"",
        "phoneticHint": "/ˈten.ɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Volleyball\"?",
        "audioPhrase": "Volleyball",
        "visualEmoji": "🏐",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          },
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
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer / Football",
            "translationPt": "Futebol"
          }
        ],
        "options": [
          "Basketball",
          "Volleyball",
          "Tennis",
          "Soccer"
        ],
        "correctAnswer": "Volleyball",
        "explanation": "Exemplo prático: \"Beach volleyball is fun in the summer.\"",
        "phoneticHint": "/ˈvɒl.i.bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Natação\" em inglês?",
        "audioPhrase": "Swimming",
        "visualEmoji": "🏊",
        "visualOptions": [
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
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          },
          {
            "text": "Swimming",
            "emoji": "🏊",
            "label": "Swimming",
            "translationPt": "Natação"
          }
        ],
        "options": [
          "Basketball",
          "Soccer",
          "Tennis",
          "Swimming"
        ],
        "correctAnswer": "Swimming",
        "explanation": "Exemplo prático: \"Swimming provides a complete full-body workout.\"",
        "phoneticHint": "/ˈswɪm.ɪŋ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p21-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
          "Tennis",
          "Cycling",
          "Basketball",
          "Soccer"
        ],
        "correctAnswer": "Cycling",
        "explanation": "Exemplo prático: \"Cycling along the coast is scenic and refreshing.\"",
        "phoneticHint": "/ˈsaɪ.klɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Baseball\"?",
        "audioPhrase": "Baseball",
        "visualEmoji": "⚾",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Basquete"
          },
          {
            "text": "Baseball",
            "emoji": "⚾",
            "label": "Baseball",
            "translationPt": "Beisebol"
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
          }
        ],
        "options": [
          "Basketball",
          "Baseball",
          "Soccer",
          "Tennis"
        ],
        "correctAnswer": "Baseball",
        "explanation": "Exemplo prático: \"Strike the baseball with the wooden bat.\"",
        "phoneticHint": "/ˈbeɪs.bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p21-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Skate\" em inglês?",
        "audioPhrase": "Skateboarding",
        "visualEmoji": "🛹",
        "visualOptions": [
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
          },
          {
            "text": "Skateboarding",
            "emoji": "🛹",
            "label": "Skateboarding",
            "translationPt": "Skate"
          }
        ],
        "options": [
          "Soccer",
          "Tennis",
          "Basketball",
          "Skateboarding"
        ],
        "correctAnswer": "Skateboarding",
        "explanation": "Exemplo prático: \"Youth practice kickflips at the skate park.\"",
        "phoneticHint": "/ˈskeɪtˌbɔː.dɪŋ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p21-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Boxing",
        "visualEmoji": "🥊",
        "visualOptions": [
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
          },
          {
            "text": "Boxing",
            "emoji": "🥊",
            "label": "Boxing",
            "translationPt": "Boxe"
          },
          {
            "text": "Tennis",
            "emoji": "🎾",
            "label": "Tennis",
            "translationPt": "Tênis"
          }
        ],
        "options": [
          "Basketball",
          "Soccer",
          "Boxing",
          "Tennis"
        ],
        "correctAnswer": "Boxing",
        "explanation": "Exemplo prático: \"Wear padded gloves during boxing training.\"",
        "phoneticHint": "/ˈbɒk.sɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p21-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Running\"?",
        "audioPhrase": "Running",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Running",
            "emoji": "👟",
            "label": "Running",
            "translationPt": "Corrida"
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
          "Running",
          "Tennis",
          "Basketball",
          "Soccer"
        ],
        "correctAnswer": "Running",
        "explanation": "Exemplo prático: \"Morning running builds cardiovascular endurance.\"",
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
        "prompt": "Qual imagem representa \"Fork\"?",
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
          }
        ],
        "options": [
          "Fork",
          "Knife",
          "Spoon",
          "Plate"
        ],
        "correctAnswer": "Fork",
        "explanation": "Exemplo prático: \"Hold the fork in your left hand.\"",
        "phoneticHint": "/fɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Colher\" em inglês?",
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
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca"
          }
        ],
        "options": [
          "Spoon",
          "Plate",
          "Fork",
          "Knife"
        ],
        "correctAnswer": "Spoon",
        "explanation": "Exemplo prático: \"Eat hearty hot soup with a spoon.\"",
        "phoneticHint": "/spuːn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p22-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Knife",
        "visualEmoji": "🔪",
        "visualOptions": [
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
          "Spoon",
          "Fork",
          "Plate",
          "Knife"
        ],
        "correctAnswer": "Knife",
        "explanation": "Exemplo prático: \"Cut tender meat carefully with a sharp knife.\"",
        "phoneticHint": "/naɪf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Plate\"?",
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
        "explanation": "Exemplo prático: \"Place delicious food on the ceramic plate.\"",
        "phoneticHint": "/pleɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Copo / Xícara\" em inglês?",
        "audioPhrase": "Cup",
        "visualEmoji": "🥛",
        "visualOptions": [
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
          },
          {
            "text": "Cup",
            "emoji": "🥛",
            "label": "Cup / Glass",
            "translationPt": "Copo / Xícara"
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
          "Knife",
          "Cup",
          "Fork"
        ],
        "correctAnswer": "Cup",
        "explanation": "Exemplo prático: \"Pour fresh juice into a tall glass cup.\"",
        "phoneticHint": "/kʌp/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p22-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bowl",
        "visualEmoji": "🥣",
        "visualOptions": [
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
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
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
          "Knife",
          "Bowl",
          "Fork"
        ],
        "correctAnswer": "Bowl",
        "explanation": "Exemplo prático: \"Serve breakfast cereal inside a bowl.\"",
        "phoneticHint": "/boʊl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Pan\"?",
        "audioPhrase": "Pan",
        "visualEmoji": "🍳",
        "visualOptions": [
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
          },
          {
            "text": "Pan",
            "emoji": "🍳",
            "label": "Pan / Frying Pan",
            "translationPt": "Frigideira"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          }
        ],
        "options": [
          "Knife",
          "Fork",
          "Pan",
          "Spoon"
        ],
        "correctAnswer": "Pan",
        "explanation": "Exemplo prático: \"Fry sunny-side eggs on the non-stick pan.\"",
        "phoneticHint": "/pæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p22-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Panela\" em inglês?",
        "audioPhrase": "Pot",
        "visualEmoji": "🍲",
        "visualOptions": [
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
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          }
        ],
        "options": [
          "Pot",
          "Knife",
          "Fork",
          "Spoon"
        ],
        "correctAnswer": "Pot",
        "explanation": "Exemplo prático: \"Boil pasta water inside a stainless pot.\"",
        "phoneticHint": "/pɒt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p22-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bottle",
        "visualEmoji": "🍾",
        "visualOptions": [
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa"
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
          "Bottle",
          "Knife",
          "Fork"
        ],
        "correctAnswer": "Bottle",
        "explanation": "Exemplo prático: \"Carry a reusable water bottle everywhere.\"",
        "phoneticHint": "/ˈbɒt.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p22-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Teapot\"?",
        "audioPhrase": "Teapot",
        "visualEmoji": "🫖",
        "visualOptions": [
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
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Teapot",
            "emoji": "🫖",
            "label": "Teapot",
            "translationPt": "Bule de chá"
          }
        ],
        "options": [
          "Knife",
          "Fork",
          "Spoon",
          "Teapot"
        ],
        "correctAnswer": "Teapot",
        "explanation": "Exemplo prático: \"Brew herbal green tea in the ceramic teapot.\"",
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
        "prompt": "Qual imagem representa \"Soap\"?",
        "audioPhrase": "Soap",
        "visualEmoji": "🧼",
        "visualOptions": [
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
          },
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
          }
        ],
        "options": [
          "Towel",
          "Toothbrush",
          "Soap",
          "Toothpaste"
        ],
        "correctAnswer": "Soap",
        "explanation": "Exemplo prático: \"Lather your hands with lavender scented soap.\"",
        "phoneticHint": "/soʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Escova de dentes\" em inglês?",
        "audioPhrase": "Toothbrush",
        "visualEmoji": "🪥",
        "visualOptions": [
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
          },
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          }
        ],
        "options": [
          "Towel",
          "Soap",
          "Toothbrush",
          "Toothpaste"
        ],
        "correctAnswer": "Toothbrush",
        "explanation": "Exemplo prático: \"Dentists advise changing your toothbrush regularly.\"",
        "phoneticHint": "/ˈtuːθ.brʌʃ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p23-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Toothpaste",
        "visualEmoji": "🧴",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Toothbrush",
          "Toothpaste",
          "Soap",
          "Towel"
        ],
        "correctAnswer": "Toothpaste",
        "explanation": "Exemplo prático: \"Squeeze mint toothpaste onto the bristles.\"",
        "phoneticHint": "/ˈtuːθ.peɪst/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Towel\"?",
        "audioPhrase": "Towel",
        "visualEmoji": "🧖",
        "visualOptions": [
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
          "Toothbrush",
          "Toothpaste",
          "Towel",
          "Soap"
        ],
        "correctAnswer": "Towel",
        "explanation": "Exemplo prático: \"Dry your face with a fluffy cotton towel.\"",
        "phoneticHint": "/ˈtaʊ.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Chuveiro / Banho\" em inglês?",
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
        "explanation": "Exemplo prático: \"A warm shower relaxes tired muscles.\"",
        "phoneticHint": "/ˈʃaʊ.ər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p23-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Comb",
        "visualEmoji": "🪮",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb / Hairbrush",
            "translationPt": "Pente de cabelo"
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
          "Comb",
          "Soap",
          "Toothbrush"
        ],
        "correctAnswer": "Comb",
        "explanation": "Exemplo prático: \"Untangle hair neatly using a wide-tooth comb.\"",
        "phoneticHint": "/koʊm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Shampoo\"?",
        "audioPhrase": "Shampoo",
        "visualEmoji": "🧴",
        "visualOptions": [
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
          },
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
          }
        ],
        "options": [
          "Toothbrush",
          "Shampoo",
          "Toothpaste",
          "Soap"
        ],
        "correctAnswer": "Shampoo",
        "explanation": "Exemplo prático: \"Wash your scalp thoroughly with gentle shampoo.\"",
        "phoneticHint": "/ʃæmˈpuː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p23-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Espelho do banheiro\" em inglês?",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
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
            "text": "Toothpaste",
            "emoji": "🧴",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho do banheiro"
          }
        ],
        "options": [
          "Soap",
          "Toothbrush",
          "Toothpaste",
          "Mirror"
        ],
        "correctAnswer": "Mirror",
        "explanation": "Exemplo prático: \"Look in the mirror while styling your hair.\"",
        "phoneticHint": "/ˈmɪr.ər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p23-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sponge",
        "visualEmoji": "🧽",
        "visualOptions": [
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de banho"
          },
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
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          }
        ],
        "options": [
          "Sponge",
          "Soap",
          "Toothpaste",
          "Toothbrush"
        ],
        "correctAnswer": "Sponge",
        "explanation": "Exemplo prático: \"Create abundant foam using a bath sponge.\"",
        "phoneticHint": "/spʌndʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p23-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Faucet\"?",
        "audioPhrase": "Faucet",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet / Tap",
            "translationPt": "Torneira"
          },
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
          }
        ],
        "options": [
          "Faucet",
          "Toothpaste",
          "Soap",
          "Toothbrush"
        ],
        "correctAnswer": "Faucet",
        "explanation": "Exemplo prático: \"Turn off the bathroom faucet to save water.\"",
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
        "prompt": "Qual imagem representa \"Guitar\"?",
        "audioPhrase": "Guitar",
        "visualEmoji": "🎸",
        "visualOptions": [
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
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          }
        ],
        "options": [
          "Drums",
          "Violin",
          "Piano",
          "Guitar"
        ],
        "correctAnswer": "Guitar",
        "explanation": "Exemplo prático: \"Strum acoustic chords on the classical guitar.\"",
        "phoneticHint": "/ɡɪˈtɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Piano\" em inglês?",
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
          }
        ],
        "options": [
          "Piano",
          "Guitar",
          "Drums",
          "Violin"
        ],
        "correctAnswer": "Piano",
        "explanation": "Exemplo prático: \"Press the black and white keys of the piano.\"",
        "phoneticHint": "/piˈæn.oʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p24-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Drums",
        "visualEmoji": "🥁",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Piano",
          "Violin",
          "Guitar",
          "Drums"
        ],
        "correctAnswer": "Drums",
        "explanation": "Exemplo prático: \"Keep the energetic beat with dynamic drums.\"",
        "phoneticHint": "/drʌmz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Violin\"?",
        "audioPhrase": "Violin",
        "visualEmoji": "🎻",
        "visualOptions": [
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
          "Drums",
          "Violin",
          "Guitar",
          "Piano"
        ],
        "correctAnswer": "Violin",
        "explanation": "Exemplo prático: \"The symphony orchestra features brilliant violins.\"",
        "phoneticHint": "/ˌvaɪəˈlɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Trompete\" em inglês?",
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
        "explanation": "Exemplo prático: \"A brass trumpet plays loud fanfare notes.\"",
        "phoneticHint": "/ˈtrʌm.pɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p24-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Flute",
        "visualEmoji": "🪈",
        "visualOptions": [
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta"
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
          "Flute",
          "Drums",
          "Guitar",
          "Piano"
        ],
        "correctAnswer": "Flute",
        "explanation": "Exemplo prático: \"The wooden flute produces sweet gentle melodies.\"",
        "phoneticHint": "/fluːt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Saxophone\"?",
        "audioPhrase": "Saxophone",
        "visualEmoji": "🎷",
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
            "text": "Saxophone",
            "emoji": "🎷",
            "label": "Saxophone",
            "translationPt": "Saxofone"
          }
        ],
        "options": [
          "Guitar",
          "Piano",
          "Drums",
          "Saxophone"
        ],
        "correctAnswer": "Saxophone",
        "explanation": "Exemplo prático: \"Jazz musicians express emotion through the saxophone.\"",
        "phoneticHint": "/ˈsæk.sə.foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p24-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Microfone\" em inglês?",
        "audioPhrase": "Microphone",
        "visualEmoji": "🎤",
        "visualOptions": [
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
            "translationPt": "Piano"
          },
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
          }
        ],
        "options": [
          "Microphone",
          "Piano",
          "Guitar",
          "Drums"
        ],
        "correctAnswer": "Microphone",
        "explanation": "Exemplo prático: \"Sing your favorite English song into the microphone.\"",
        "phoneticHint": "/ˈmaɪ.krə.foʊn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p24-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bell",
        "visualEmoji": "🔔",
        "visualOptions": [
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
          "Bell",
          "Drums",
          "Piano",
          "Guitar"
        ],
        "correctAnswer": "Bell",
        "explanation": "Exemplo prático: \"The church bell rings at noon.\"",
        "phoneticHint": "/bel/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p24-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Headphones\"?",
        "audioPhrase": "Headphones",
        "visualEmoji": "🎧",
        "visualOptions": [
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano"
          },
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
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão / Guitarra"
          }
        ],
        "options": [
          "Piano",
          "Headphones",
          "Drums",
          "Guitar"
        ],
        "correctAnswer": "Headphones",
        "explanation": "Exemplo prático: \"Producers listen to music mixes through headphones.\"",
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
        "prompt": "Qual imagem representa \"Doctor\"?",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
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
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          }
        ],
        "options": [
          "Teacher",
          "Doctor",
          "Police Officer",
          "Chef"
        ],
        "correctAnswer": "Doctor",
        "explanation": "Exemplo prático: \"The caring doctor examines the patient.\"",
        "phoneticHint": "/ˈdɒk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Professor(a)\" em inglês?",
        "audioPhrase": "Teacher",
        "visualEmoji": "👨‍🏫",
        "visualOptions": [
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
          "Teacher",
          "Chef",
          "Doctor",
          "Police Officer"
        ],
        "correctAnswer": "Teacher",
        "explanation": "Exemplo prático: \"The dedicated teacher explains English grammar.\"",
        "phoneticHint": "/ˈtiː.tʃər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p25-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chef",
        "visualEmoji": "👨‍🍳",
        "visualOptions": [
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
          "Doctor",
          "Police Officer",
          "Chef",
          "Teacher"
        ],
        "correctAnswer": "Chef",
        "explanation": "Exemplo prático: \"The master chef prepares delicious gourmet dishes.\"",
        "phoneticHint": "/ʃef/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Police Officer\"?",
        "audioPhrase": "Police Officer",
        "visualEmoji": "👮",
        "visualOptions": [
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          },
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
            "text": "Teacher",
            "emoji": "👨‍🏫",
            "label": "Teacher",
            "translationPt": "Professor(a)"
          }
        ],
        "options": [
          "Chef",
          "Police Officer",
          "Doctor",
          "Teacher"
        ],
        "correctAnswer": "Police Officer",
        "explanation": "Exemplo prático: \"Police officers ensure safety in the neighborhood.\"",
        "phoneticHint": "/pəˈliːs ˈɒf.ɪ.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Bombeiro(a)\" em inglês?",
        "audioPhrase": "Firefighter",
        "visualEmoji": "👨‍🚒",
        "visualOptions": [
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          },
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
          }
        ],
        "options": [
          "Chef",
          "Firefighter",
          "Doctor",
          "Teacher"
        ],
        "correctAnswer": "Firefighter",
        "explanation": "Exemplo prático: \"Brave firefighters extinguish blazing fires.\"",
        "phoneticHint": "/ˈfaɪəˌfaɪ.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p25-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pilot",
        "visualEmoji": "👨‍✈️",
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
          "Doctor",
          "Chef",
          "Pilot",
          "Teacher"
        ],
        "correctAnswer": "Pilot",
        "explanation": "Exemplo prático: \"The commercial pilot navigates across oceans.\"",
        "phoneticHint": "/ˈpaɪ.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Artist\"?",
        "audioPhrase": "Artist",
        "visualEmoji": "🎨",
        "visualOptions": [
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
            "text": "Artist",
            "emoji": "🎨",
            "label": "Artist / Painter",
            "translationPt": "Artista / Pintor(a)"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          }
        ],
        "options": [
          "Teacher",
          "Doctor",
          "Artist",
          "Chef"
        ],
        "correctAnswer": "Artist",
        "explanation": "Exemplo prático: \"The talented artist paints vibrant oil canvases.\"",
        "phoneticHint": "/ˈɑː.tɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p25-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Agricultor(a) / Fazendeiro\" em inglês?",
        "audioPhrase": "Farmer",
        "visualEmoji": "👨‍🌾",
        "visualOptions": [
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
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef / Cook",
            "translationPt": "Cozinheiro(a) / Chef"
          }
        ],
        "options": [
          "Teacher",
          "Doctor",
          "Farmer",
          "Chef"
        ],
        "correctAnswer": "Farmer",
        "explanation": "Exemplo prático: \"The hardworking farmer harvests organic vegetables.\"",
        "phoneticHint": "/ˈfɑː.mər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p25-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Singer",
        "visualEmoji": "🧑‍🎤",
        "visualOptions": [
          {
            "text": "Singer",
            "emoji": "🧑‍🎤",
            "label": "Singer",
            "translationPt": "Cantor(a)"
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
          "Singer",
          "Chef",
          "Doctor",
          "Teacher"
        ],
        "correctAnswer": "Singer",
        "explanation": "Exemplo prático: \"The musical singer performs at large concert halls.\"",
        "phoneticHint": "/ˈsɪŋ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p25-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Builder\"?",
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
            "text": "Builder",
            "emoji": "👷",
            "label": "Builder / Engineer",
            "translationPt": "Construtor(a) / Engenheiro"
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
          "Builder",
          "Teacher",
          "Chef"
        ],
        "correctAnswer": "Builder",
        "explanation": "Exemplo prático: \"Builders construct sturdy modern homes.\"",
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
        "prompt": "Qual imagem representa \"Carrot\"?",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Broccoli",
          "Carrot",
          "Tomato",
          "Potato"
        ],
        "correctAnswer": "Carrot",
        "explanation": "Exemplo prático: \"Crunchy raw carrots are healthy snacks.\"",
        "phoneticHint": "/ˈkær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Tomate\" em inglês?",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
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
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          }
        ],
        "options": [
          "Carrot",
          "Broccoli",
          "Tomato",
          "Potato"
        ],
        "correctAnswer": "Tomato",
        "explanation": "Exemplo prático: \"Ripe red tomatoes make fantastic salad.\"",
        "phoneticHint": "/təˈmɑː.toʊ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p26-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Potato",
        "visualEmoji": "🥔",
        "visualOptions": [
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
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          }
        ],
        "options": [
          "Tomato",
          "Potato",
          "Carrot",
          "Broccoli"
        ],
        "correctAnswer": "Potato",
        "explanation": "Exemplo prático: \"Mashed potatoes are a popular side dish.\"",
        "phoneticHint": "/pəˈteɪ.toʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Broccoli\"?",
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
          "Broccoli",
          "Tomato",
          "Potato",
          "Carrot"
        ],
        "correctAnswer": "Broccoli",
        "explanation": "Exemplo prático: \"Steamed green broccoli is packed with vitamins.\"",
        "phoneticHint": "/ˈbrɒk.əl.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Milho\" em inglês?",
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
          "Tomato",
          "Carrot",
          "Corn"
        ],
        "correctAnswer": "Corn",
        "explanation": "Exemplo prático: \"Sweet yellow corn boiled on the cob.\"",
        "phoneticHint": "/kɔːn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p26-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Onion",
        "visualEmoji": "🧅",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
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
          "Onion",
          "Carrot",
          "Tomato"
        ],
        "correctAnswer": "Onion",
        "explanation": "Exemplo prático: \"Chopped onions add aroma to dishes.\"",
        "phoneticHint": "/ˈʌn.jən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Garlic\"?",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
        "visualOptions": [
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
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          }
        ],
        "options": [
          "Carrot",
          "Garlic",
          "Tomato",
          "Potato"
        ],
        "correctAnswer": "Garlic",
        "explanation": "Exemplo prático: \"A clove of crushed garlic enhances flavor.\"",
        "phoneticHint": "/ˈɡɑː.lɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p26-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Pimenta\" em inglês?",
        "audioPhrase": "Pepper",
        "visualEmoji": "🌶️",
        "visualOptions": [
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Pepper",
            "emoji": "🌶️",
            "label": "Chili Pepper",
            "translationPt": "Pimenta"
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
          "Pepper",
          "Carrot",
          "Potato"
        ],
        "correctAnswer": "Pepper",
        "explanation": "Exemplo prático: \"Spicy chili pepper adds heat to recipes.\"",
        "phoneticHint": "/ˈpep.ər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p26-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cucumber",
        "visualEmoji": "🥒",
        "visualOptions": [
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Cucumber",
            "emoji": "🥒",
            "label": "Cucumber",
            "translationPt": "Pepino"
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
          "Cucumber",
          "Potato",
          "Carrot"
        ],
        "correctAnswer": "Cucumber",
        "explanation": "Exemplo prático: \"Cool cucumber slices are very refreshing.\"",
        "phoneticHint": "/ˈkjuː.kʌm.bər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p26-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Mushroom\"?",
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
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
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
          }
        ],
        "options": [
          "Tomato",
          "Carrot",
          "Mushroom",
          "Potato"
        ],
        "correctAnswer": "Mushroom",
        "explanation": "Exemplo prático: \"Sautéed mushrooms complement grilled dishes.\"",
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
        "prompt": "Qual imagem representa \"Cake\"?",
        "audioPhrase": "Cake",
        "visualEmoji": "🍰",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Chocolate",
          "Cake",
          "Donut",
          "Ice Cream"
        ],
        "correctAnswer": "Cake",
        "explanation": "Exemplo prático: \"A slice of vanilla birthday cake.\"",
        "phoneticHint": "/keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Sorvete\" em inglês?",
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
          "Ice Cream",
          "Chocolate",
          "Donut"
        ],
        "correctAnswer": "Ice Cream",
        "explanation": "Exemplo prático: \"A double scoop of chocolate ice cream.\"",
        "phoneticHint": "/ˈaɪs ˌkriːm/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p27-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Donut",
        "visualEmoji": "🍩",
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
          }
        ],
        "options": [
          "Cake",
          "Chocolate",
          "Donut",
          "Ice Cream"
        ],
        "correctAnswer": "Donut",
        "explanation": "Exemplo prático: \"Glazed donuts with colorful sprinkles.\"",
        "phoneticHint": "/ˈdoʊ.nʌt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p27-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Chocolate\"?",
        "audioPhrase": "Chocolate",
        "visualEmoji": "🍫",
        "visualOptions": [
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
            "text": "Chocolate",
            "emoji": "🍫",
            "label": "Chocolate",
            "translationPt": "Chocolate"
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          }
        ],
        "options": [
          "Ice Cream",
          "Cake",
          "Chocolate",
          "Donut"
        ],
        "correctAnswer": "Chocolate",
        "explanation": "Exemplo prático: \"Dark chocolate melts smoothly on the tongue.\"",
        "phoneticHint": "/ˈtʃɒk.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Bala / Doce\" em inglês?",
        "audioPhrase": "Candy",
        "visualEmoji": "🍬",
        "visualOptions": [
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          },
          {
            "text": "Candy",
            "emoji": "🍬",
            "label": "Candy / Sweet",
            "translationPt": "Bala / Doce"
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
          "Candy",
          "Cake",
          "Ice Cream"
        ],
        "correctAnswer": "Candy",
        "explanation": "Exemplo prático: \"Fruity wrapped candy in assorted flavors.\"",
        "phoneticHint": "/ˈkæn.di/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p27-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lollipop",
        "visualEmoji": "🍭",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
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
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Cake",
          "Lollipop",
          "Donut",
          "Ice Cream"
        ],
        "correctAnswer": "Lollipop",
        "explanation": "Exemplo prático: \"A swirl cherry lollipop on a plastic stick.\"",
        "phoneticHint": "/ˈlɒl.i.pɒp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p27-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Pie\"?",
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
        "explanation": "Exemplo prático: \"Warm American apple pie with cinnamon.\"",
        "phoneticHint": "/paɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p27-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cupcake / Bolinho\" em inglês?",
        "audioPhrase": "Cupcake",
        "visualEmoji": "🧁",
        "visualOptions": [
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
          },
          {
            "text": "Donut",
            "emoji": "🍩",
            "label": "Donut",
            "translationPt": "Rosquinha / Donut"
          }
        ],
        "options": [
          "Ice Cream",
          "Cake",
          "Cupcake",
          "Donut"
        ],
        "correctAnswer": "Cupcake",
        "explanation": "Exemplo prático: \"Mini cupcakes topped with strawberry frosting.\"",
        "phoneticHint": "/ˈkʌp.keɪk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p27-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Honey",
        "visualEmoji": "🍯",
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
            "text": "Honey",
            "emoji": "🍯",
            "label": "Honey",
            "translationPt": "Mel de abelha"
          }
        ],
        "options": [
          "Donut",
          "Ice Cream",
          "Cake",
          "Honey"
        ],
        "correctAnswer": "Honey",
        "explanation": "Exemplo prático: \"Pure golden honey drizzled over pancakes.\"",
        "phoneticHint": "/ˈhʌn.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p27-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Pudding\"?",
        "audioPhrase": "Pudding",
        "visualEmoji": "🍮",
        "visualOptions": [
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
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo / Torta"
          }
        ],
        "options": [
          "Pudding",
          "Ice Cream",
          "Donut",
          "Cake"
        ],
        "correctAnswer": "Pudding",
        "explanation": "Exemplo prático: \"Creamy caramel pudding served chilled.\"",
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
        "prompt": "Qual imagem representa \"Star\"?",
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
          "Rocket",
          "Planet",
          "Earth"
        ],
        "correctAnswer": "Star",
        "explanation": "Exemplo prático: \"Distant stars twinkle brightly in the night sky.\"",
        "phoneticHint": "/stɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p28-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Planeta com anéis\" em inglês?",
        "audioPhrase": "Planet",
        "visualEmoji": "🪐",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Planet",
          "Star",
          "Rocket",
          "Earth"
        ],
        "correctAnswer": "Planet",
        "explanation": "Exemplo prático: \"Saturn is a magnificent ringed planet.\"",
        "phoneticHint": "/ˈplæn.ɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p28-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Earth",
        "visualEmoji": "🌍",
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
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete espacial"
          }
        ],
        "options": [
          "Earth",
          "Star",
          "Planet",
          "Rocket"
        ],
        "correctAnswer": "Earth",
        "explanation": "Exemplo prático: \"Planet Earth is our blue and green home.\"",
        "phoneticHint": "/ɜːθ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p28-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Rocket\"?",
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
          "Star",
          "Earth",
          "Planet"
        ],
        "correctAnswer": "Rocket",
        "explanation": "Exemplo prático: \"The powerful rocket launches toward orbit.\"",
        "phoneticHint": "/ˈrɒk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p28-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Astronauta\" em inglês?",
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
            "text": "Astronaut",
            "emoji": "👨‍🚀",
            "label": "Astronaut",
            "translationPt": "Astronauta"
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
          }
        ],
        "options": [
          "Star",
          "Astronaut",
          "Planet",
          "Earth"
        ],
        "correctAnswer": "Astronaut",
        "explanation": "Exemplo prático: \"Astronauts float weightlessly in space.\"",
        "phoneticHint": "/ˈæs.trə.nɔːt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p28-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
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
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol / Estrela central"
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
          "Earth",
          "Sun",
          "Planet"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The sun provides gravity and light to planets.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p28-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Moon\"?",
        "audioPhrase": "Moon",
        "visualEmoji": "🌙",
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
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua"
          }
        ],
        "options": [
          "Earth",
          "Star",
          "Planet",
          "Moon"
        ],
        "correctAnswer": "Moon",
        "explanation": "Exemplo prático: \"The moon orbits the Earth every month.\"",
        "phoneticHint": "/muːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p28-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cometa\" em inglês?",
        "audioPhrase": "Comet",
        "visualEmoji": "☄️",
        "visualOptions": [
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
          },
          {
            "text": "Comet",
            "emoji": "☄️",
            "label": "Comet",
            "translationPt": "Cometa"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          }
        ],
        "options": [
          "Earth",
          "Planet",
          "Comet",
          "Star"
        ],
        "correctAnswer": "Comet",
        "explanation": "Exemplo prático: \"A glowing comet with an icy tail.\"",
        "phoneticHint": "/ˈkɒm.ɪt/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p28-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Telescope",
        "visualEmoji": "🔭",
        "visualOptions": [
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Telescope",
            "emoji": "🔭",
            "label": "Telescope",
            "translationPt": "Telescópio"
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
          "Telescope",
          "Earth",
          "Planet"
        ],
        "correctAnswer": "Telescope",
        "explanation": "Exemplo prático: \"Observe distant galaxies through an optical telescope.\"",
        "phoneticHint": "/ˈtel.ɪ.skoʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p28-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Satellite\"?",
        "audioPhrase": "Satellite",
        "visualEmoji": "🛰️",
        "visualOptions": [
          {
            "text": "Satellite",
            "emoji": "🛰️",
            "label": "Satellite",
            "translationPt": "Satélite"
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
          },
          {
            "text": "Planet",
            "emoji": "🪐",
            "label": "Planet (Saturn)",
            "translationPt": "Planeta com anéis"
          }
        ],
        "options": [
          "Satellite",
          "Star",
          "Earth",
          "Planet"
        ],
        "correctAnswer": "Satellite",
        "explanation": "Exemplo prático: \"Communications satellites orbit high in space.\"",
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
        "prompt": "Qual imagem representa \"Apple\"?",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
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
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          }
        ],
        "options": [
          "Dog",
          "Apple",
          "Water",
          "Car"
        ],
        "correctAnswer": "Apple",
        "explanation": "Exemplo prático: \"A crunchy red apple.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cachorro\" em inglês?",
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
            "text": "Water",
            "emoji": "💧",
            "label": "Water",
            "translationPt": "Água"
          }
        ],
        "options": [
          "Dog",
          "Apple",
          "Car",
          "Water"
        ],
        "correctAnswer": "Dog",
        "explanation": "Exemplo prático: \"A friendly dog.\"",
        "phoneticHint": "/dɒɡ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p29-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã"
          }
        ],
        "options": [
          "Dog",
          "Car",
          "Water",
          "Apple"
        ],
        "correctAnswer": "Car",
        "explanation": "Exemplo prático: \"A fast motor car.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Water\"?",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
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
          "Car",
          "Water",
          "Apple",
          "Dog"
        ],
        "correctAnswer": "Water",
        "explanation": "Exemplo prático: \"Pure drinking water.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Livro\" em inglês?",
        "audioPhrase": "Book",
        "visualEmoji": "📚",
        "visualOptions": [
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
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
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
          "Car",
          "Book",
          "Apple"
        ],
        "correctAnswer": "Book",
        "explanation": "Exemplo prático: \"An educational book.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p29-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
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
          "Bed",
          "Dog",
          "Apple"
        ],
        "correctAnswer": "Bed",
        "explanation": "Exemplo prático: \"A comfortable bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Phone\"?",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
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
          "Phone",
          "Dog",
          "Car",
          "Apple"
        ],
        "correctAnswer": "Phone",
        "explanation": "Exemplo prático: \"A smart touch phone.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Sol\" em inglês?",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
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
          "Sun",
          "Apple",
          "Dog",
          "Car"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The radiant sun.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p29-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Run",
        "visualEmoji": "🏃",
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
          }
        ],
        "options": [
          "Car",
          "Apple",
          "Dog",
          "Run"
        ],
        "correctAnswer": "Run",
        "explanation": "Exemplo prático: \"To run with energy.\"",
        "phoneticHint": "/rʌn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Doctor\"?",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico"
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
          "Doctor",
          "Apple",
          "Car",
          "Dog"
        ],
        "correctAnswer": "Doctor",
        "explanation": "Exemplo prático: \"A helpful doctor.\"",
        "phoneticHint": "/ˈdɒk.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p29-e11",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Estrela\" em inglês?",
        "audioPhrase": "Star",
        "visualEmoji": "⭐",
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
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          }
        ],
        "options": [
          "Apple",
          "Car",
          "Dog",
          "Star"
        ],
        "correctAnswer": "Star",
        "explanation": "Exemplo prático: \"A brilliant star.\"",
        "phoneticHint": "/stɑːr/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p29-e12",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
          "Happy",
          "Dog",
          "Apple",
          "Car"
        ],
        "correctAnswer": "Happy",
        "explanation": "Exemplo prático: \"Feeling joyful and happy.\"",
        "phoneticHint": "/ˈhæp.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p29-e13",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Pizza\"?",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
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
          "Pizza",
          "Dog",
          "Apple"
        ],
        "correctAnswer": "Pizza",
        "explanation": "Exemplo prático: \"A tasty pizza slice.\"",
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
        "prompt": "Qual imagem representa \"Apple\"?",
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
          }
        ],
        "options": [
          "Apple",
          "Dog",
          "Cat",
          "Water"
        ],
        "correctAnswer": "Apple",
        "explanation": "Exemplo prático: \"A red apple symbol of knowledge.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e2",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Cachorro\" em inglês?",
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
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          }
        ],
        "options": [
          "Apple",
          "Cat",
          "Water",
          "Dog"
        ],
        "correctAnswer": "Dog",
        "explanation": "Exemplo prático: \"Man’s best friend, the dog.\"",
        "phoneticHint": "/dɒɡ/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e3",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
        "explanation": "Exemplo prático: \"A curious and agile cat.\"",
        "phoneticHint": "/kæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e4",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Water\"?",
        "audioPhrase": "Water",
        "visualEmoji": "💧",
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
          "Cat",
          "Apple",
          "Water",
          "Dog"
        ],
        "correctAnswer": "Water",
        "explanation": "Exemplo prático: \"Life-giving pure water.\"",
        "phoneticHint": "/ˈwɔː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e5",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Carro\" em inglês?",
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
          "Car",
          "Apple",
          "Cat",
          "Dog"
        ],
        "correctAnswer": "Car",
        "explanation": "Exemplo prático: \"An automobile vehicle.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e6",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Blue",
        "visualEmoji": "🔵",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
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
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          }
        ],
        "options": [
          "Dog",
          "Blue",
          "Apple",
          "Cat"
        ],
        "correctAnswer": "Blue",
        "explanation": "Exemplo prático: \"The color of ocean and sky.\"",
        "phoneticHint": "/bluː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e7",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"House\"?",
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
          "House",
          "Apple",
          "Cat",
          "Dog"
        ],
        "correctAnswer": "House",
        "explanation": "Exemplo prático: \"A welcoming family home.\"",
        "phoneticHint": "/haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e8",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Pão\" em inglês?",
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
          "Bread",
          "Cat",
          "Apple",
          "Dog"
        ],
        "correctAnswer": "Bread",
        "explanation": "Exemplo prático: \"Fresh loaf of bread.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e9",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
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
          "Computer",
          "Dog",
          "Apple",
          "Cat"
        ],
        "correctAnswer": "Computer",
        "explanation": "Exemplo prático: \"A digital computing device.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e10",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Tree\"?",
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
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Tree",
            "emoji": "🌲",
            "label": "Tree",
            "translationPt": "Árvore"
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
          "Tree",
          "Apple"
        ],
        "correctAnswer": "Tree",
        "explanation": "Exemplo prático: \"A strong evergreen tree.\"",
        "phoneticHint": "/triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e11",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Sol\" em inglês?",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
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
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          }
        ],
        "options": [
          "Cat",
          "Dog",
          "Apple",
          "Sun"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The daylight sun.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e12",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Happy",
        "visualEmoji": "😊",
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
          }
        ],
        "options": [
          "Dog",
          "Apple",
          "Happy",
          "Cat"
        ],
        "correctAnswer": "Happy",
        "explanation": "Exemplo prático: \"Smiling and truly happy.\"",
        "phoneticHint": "/ˈhæp.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e13",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Book\"?",
        "audioPhrase": "Book",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐶",
            "label": "Dog",
            "translationPt": "Cachorro"
          },
          {
            "text": "Book",
            "emoji": "📚",
            "label": "Book",
            "translationPt": "Livro"
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
          "Dog",
          "Book",
          "Apple",
          "Cat"
        ],
        "correctAnswer": "Book",
        "explanation": "Exemplo prático: \"A gateway of imagination.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p30-e14",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Médico\" em inglês?",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
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
          "Dog",
          "Doctor",
          "Apple",
          "Cat"
        ],
        "correctAnswer": "Doctor",
        "explanation": "Exemplo prático: \"A certified medical doctor.\"",
        "phoneticHint": "/ˈdɒk.tər/",
        "skillCategory": "reading"
      },
      {
        "id": "w0-p30-e15",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soccer",
        "visualEmoji": "⚽",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐱",
            "label": "Cat",
            "translationPt": "Gato"
          },
          {
            "text": "Soccer",
            "emoji": "⚽",
            "label": "Soccer",
            "translationPt": "Futebol"
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
          "Cat",
          "Soccer",
          "Dog",
          "Apple"
        ],
        "correctAnswer": "Soccer",
        "explanation": "Exemplo prático: \"The world’s favorite sport.\"",
        "phoneticHint": "/ˈsɒk.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p30-e16",
        "type": "image-choice",
        "prompt": "Qual imagem representa \"Rocket\"?",
        "audioPhrase": "Rocket",
        "visualEmoji": "🚀",
        "visualOptions": [
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
          },
          {
            "text": "Rocket",
            "emoji": "🚀",
            "label": "Rocket",
            "translationPt": "Foguete"
          }
        ],
        "options": [
          "Cat",
          "Dog",
          "Apple",
          "Rocket"
        ],
        "correctAnswer": "Rocket",
        "explanation": "Exemplo prático: \"A rocket reaching the stars.\"",
        "phoneticHint": "/ˈrɒk.ɪt/",
        "skillCategory": "vocabulary"
      }
    ]
  }
];
