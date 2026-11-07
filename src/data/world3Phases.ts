import { Phase } from '../types';

export const WORLD_3_PHASES: Phase[] = [
  {
    "id": "w3-p1",
    "worldId": 3,
    "phaseNumber": 1,
    "title": "Minha Casa & Cômodos Detalhados",
    "subtitle": "Móveis, eletrodomésticos e rotina doméstica",
    "pedagogicalObjective": "Nomear móveis, eletrodomésticos e descrever sua casa com riqueza de vocabulário.",
    "type": "lesson",
    "icon": "home",
    "cefrLevel": "A2",
    "theorySummary": [
      "Cômodos: living room, kitchen, bedroom, bathroom, laundry room, attic, basement.",
      "Móveis: sofa, armchair, coffee table, wardrobe, microwave, refrigerator."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p1-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Sofá\" e \"Poltrona\" em inglês?",
        "correctAnswer": "Sofa and Armchair",
        "explanation": "Sofa / couch = sofá; Armchair = poltrona.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🛋️",
        "options": [
          "Sofa and Armchair",
          "Chair and Table",
          "Bed and Wardrobe",
          "Desk and Lamp"
        ]
      },
      {
        "id": "w3-p1-e2",
        "type": "fill-blank",
        "prompt": "Onde guardamos alimentos perecíveis? \"Put the milk in the _____.\"",
        "correctAnswer": "refrigerator",
        "explanation": "Refrigerator / fridge = geladeira.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🧊",
        "options": [
          "refrigerator",
          "microwave",
          "wardrobe",
          "bookshelf"
        ]
      },
      {
        "id": "w3-p1-e3",
        "type": "word-order",
        "prompt": "Monte a frase descrevendo a casa:",
        "correctAnswer": "My house is very warm and cozy.",
        "explanation": "My house is very warm and cozy.",
        "skillCategory": "grammar",
        "options": [
          "is",
          "house",
          "My",
          "cozy.",
          "very",
          "warm",
          "and"
        ]
      },
      {
        "id": "w3-p1-e4",
        "type": "listening",
        "prompt": "Ouça onde está o objeto:",
        "correctAnswer": "The remote control is on the coffee table.",
        "explanation": "on the coffee table (na mesinha de centro).",
        "skillCategory": "listening",
        "audioPhrase": "The remote control is on the coffee table.",
        "options": [
          "The remote control is on the coffee table.",
          "The telephone is on the dining table.",
          "The remote control is under the sofa.",
          "The book is on the coffee table."
        ]
      },
      {
        "id": "w3-p1-e5",
        "type": "translate",
        "prompt": "Traduza: \"O guarda-roupa fica no meu quarto.\"",
        "correctAnswer": "The wardrobe is in my bedroom.",
        "explanation": "The wardrobe is in my bedroom.",
        "skillCategory": "reading",
        "options": [
          "The wardrobe is in my bedroom.",
          "The closet is in my kitchen.",
          "The wardrobe is on my living room.",
          "The wardrobe is under my bedroom."
        ]
      },
      {
        "id": "w3-p1-e6",
        "type": "multiple-choice",
        "prompt": "Qual cômodo usamos para lavar roupas?",
        "correctAnswer": "Laundry room",
        "explanation": "Laundry room = lavanderia / área de serviço.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🧺",
        "options": [
          "Laundry room",
          "Living room",
          "Dining room",
          "Bathroom"
        ]
      },
      {
        "id": "w3-p1-e7",
        "type": "word-order",
        "prompt": "Organize a descrição:",
        "correctAnswer": "Our apartment has three bedrooms.",
        "explanation": "Our apartment has three bedrooms.",
        "skillCategory": "grammar",
        "options": [
          "three",
          "apartment",
          "bedrooms.",
          "Our",
          "has"
        ]
      },
      {
        "id": "w3-p1-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "There is a large mirror in the bathroom.",
        "explanation": "a large mirror in the bathroom.",
        "skillCategory": "listening",
        "audioPhrase": "There is a large mirror in the bathroom.",
        "options": [
          "There is a large mirror in the bathroom.",
          "There is a small window in the bedroom.",
          "There are two mirrors in the hallway.",
          "There is a large painting in the living room."
        ]
      },
      {
        "id": "w3-p1-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"Welcome to my new apartment\"",
        "correctAnswer": "Welcome to my new apartment",
        "explanation": "Perfeito!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Welcome to my new apartment",
        "phoneticHint": "/ˈwel.kəm tuː maɪ nuː əˈpɑːrt.mənt/"
      },
      {
        "id": "w3-p1-e10",
        "type": "multiple-choice",
        "prompt": "Qual eletrodoméstico usamos para esquentar comida rapidamente?",
        "correctAnswer": "Microwave",
        "explanation": "Microwave = micro-ondas.",
        "skillCategory": "vocabulary",
        "options": [
          "Microwave",
          "Dishwasher",
          "Blender",
          "Toaster"
        ]
      }
    ]
  },
  {
    "id": "w3-p2",
    "worldId": 3,
    "phaseNumber": 2,
    "title": "Na Cozinha: Utensílios & Receitas",
    "subtitle": "Fork, knife, spoon, plate, pan",
    "pedagogicalObjective": "Dominar os nomes de talheres, panelas e verbos culinários básicos.",
    "type": "lesson",
    "icon": "utensils",
    "cefrLevel": "A2",
    "theorySummary": [
      "Talheres (cutlery): fork (garfo), knife (faca), spoon (colher).",
      "Utensílios: plate (prato), pan/pot (panela), cutting board (tábua).",
      "Verbos: chop (picar), boil (ferver), fry (fritar), bake (assar no forno)."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p2-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Garfo, faca e colher\" em inglês?",
        "correctAnswer": "Fork, knife and spoon",
        "explanation": "Fork, knife and spoon.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🍴",
        "options": [
          "Fork, knife and spoon",
          "Plate, cup and bowl",
          "Pan, pot and skillet",
          "Dish, napkin and glass"
        ]
      },
      {
        "id": "w3-p2-e2",
        "type": "fill-blank",
        "prompt": "Complete com o verbo culinário: \"_____ the water before adding pasta.\"",
        "correctAnswer": "Boil",
        "explanation": "Boil the water = ferver a água.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🍳",
        "options": [
          "Boil",
          "Bake",
          "Fry",
          "Freeze"
        ]
      },
      {
        "id": "w3-p2-e3",
        "type": "word-order",
        "prompt": "Monte o pedido na mesa:",
        "correctAnswer": "Could you pass me a spoon?",
        "explanation": "Could you pass me a spoon?",
        "skillCategory": "grammar",
        "options": [
          "a",
          "pass",
          "Could",
          "me",
          "spoon?",
          "you"
        ]
      },
      {
        "id": "w3-p2-e4",
        "type": "listening",
        "prompt": "Ouça a instrução da receita:",
        "correctAnswer": "Chop the onions and fry them in olive oil.",
        "explanation": "Chop the onions and fry them...",
        "skillCategory": "listening",
        "audioPhrase": "Chop the onions and fry them in olive oil.",
        "options": [
          "Chop the onions and fry them in olive oil.",
          "Boil the onions and mix them with butter.",
          "Slice the garlic and fry it in butter.",
          "Chop the tomatoes and add olive oil."
        ]
      },
      {
        "id": "w3-p2-e5",
        "type": "translate",
        "prompt": "Traduza: \"Onde estão as panelas?\"",
        "correctAnswer": "Where are the pans?",
        "explanation": "Pans = panelas.",
        "skillCategory": "reading",
        "options": [
          "Where are the pans?",
          "Where are the plates?",
          "Where are the knives?",
          "Where are the spoons?"
        ]
      },
      {
        "id": "w3-p2-e6",
        "type": "multiple-choice",
        "prompt": "Qual verbo usamos para assar um bolo no forno?",
        "correctAnswer": "Bake",
        "explanation": "Bake a cake = assar um bolo.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🎂",
        "options": [
          "Bake",
          "Boil",
          "Fry",
          "Grill"
        ]
      },
      {
        "id": "w3-p2-e7",
        "type": "word-order",
        "prompt": "Organize a frase:",
        "correctAnswer": "The plate is on the table.",
        "explanation": "The plate is on the table.",
        "skillCategory": "grammar",
        "options": [
          "on",
          "plate",
          "table.",
          "The",
          "is",
          "the"
        ]
      },
      {
        "id": "w3-p2-e8",
        "type": "listening",
        "prompt": "Ouça o utensílio:",
        "correctAnswer": "Be careful, that knife is extremely sharp.",
        "explanation": "knife is extremely sharp (muito afiada).",
        "skillCategory": "listening",
        "audioPhrase": "Be careful, that knife is extremely sharp.",
        "options": [
          "Be careful, that knife is extremely sharp.",
          "Be careful, that pan is extremely hot.",
          "Watch out, the plate is broken.",
          "Please wash the spoon before using it."
        ]
      },
      {
        "id": "w3-p2-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"Can I have a clean fork, please?\"",
        "correctAnswer": "Can I have a clean fork please",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Can I have a clean fork please",
        "phoneticHint": "/kæn aɪ hæv ə kliːn fɔːrk pliːz/"
      },
      {
        "id": "w3-p2-e10",
        "type": "multiple-choice",
        "prompt": "Qual palavra significa \"Prato raso\"?",
        "correctAnswer": "Plate",
        "explanation": "Plate = prato raso; Bowl = tigela / prato fundo.",
        "skillCategory": "vocabulary",
        "options": [
          "Plate",
          "Bowl (prato fundo/tigela)",
          "Cup",
          "Glass"
        ]
      }
    ]
  },
  {
    "id": "w3-p3",
    "worldId": 3,
    "phaseNumber": 3,
    "title": "No Supermercado: Compras & Alimentos",
    "subtitle": "Grocery shopping, aisles & cart",
    "pedagogicalObjective": "Fazer compras no supermercado, encontrar seções e produtos.",
    "type": "lesson",
    "icon": "shopping-cart",
    "cefrLevel": "A2",
    "theorySummary": [
      "Grocery store / supermarket = supermercado.",
      "Shopping cart = carrinho de compras; basket = cesta.",
      "Aisle (/aɪl/ com s mudo) = corredor do mercado; checkout / cashier = caixa."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p3-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Carrinho de compras\" em inglês?",
        "correctAnswer": "Shopping cart",
        "explanation": "Shopping cart (US) / trolley (UK).",
        "skillCategory": "vocabulary",
        "visualEmoji": "🛒",
        "options": [
          "Shopping cart",
          "Grocery box",
          "Buying car",
          "Market wagon"
        ]
      },
      {
        "id": "w3-p3-e2",
        "type": "fill-blank",
        "prompt": "No final das compras vamos ao: \"Pay for the items at the _____.\"",
        "correctAnswer": "cashier",
        "explanation": "Cashier / checkout = caixa.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🧾",
        "options": [
          "cashier",
          "aisle",
          "shelf",
          "parking"
        ]
      },
      {
        "id": "w3-p3-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta sobre localização:",
        "correctAnswer": "Which aisle is the milk in?",
        "explanation": "Which aisle is the milk in?",
        "skillCategory": "grammar",
        "options": [
          "aisle",
          "is",
          "milk?",
          "the",
          "Which",
          "in"
        ]
      },
      {
        "id": "w3-p3-e4",
        "type": "listening",
        "prompt": "Ouça a pergunta do atendente:",
        "correctAnswer": "Do you need a plastic bag or a paper bag?",
        "explanation": "plastic bag or paper bag.",
        "skillCategory": "listening",
        "audioPhrase": "Do you need a plastic bag or a paper bag?",
        "options": [
          "Do you need a plastic bag or a paper bag?",
          "Would you like to pay with cash or card?",
          "Do you have our store discount card?",
          "Did you find everything you were looking for?"
        ]
      },
      {
        "id": "w3-p3-e5",
        "type": "translate",
        "prompt": "Traduza: \"Onde fica a seção de laticínios?\"",
        "correctAnswer": "Where is the dairy section?",
        "explanation": "Dairy section = laticínios (leite, queijo, manteiga).",
        "skillCategory": "reading",
        "options": [
          "Where is the dairy section?",
          "Where is the bakery section?",
          "Where is the fruit aisle?",
          "Where is the frozen food section?"
        ]
      },
      {
        "id": "w3-p3-e6",
        "type": "multiple-choice",
        "prompt": "A palavra \"AISLE\" (corredor) tem qual letra silenciosa?",
        "correctAnswer": "A letra S (soa como /aɪl/)",
        "explanation": "O \"s\" é totalmente silencioso: /aɪl/.",
        "skillCategory": "vocabulary",
        "options": [
          "A letra S (soa como /aɪl/)",
          "A letra A",
          "A letra L",
          "A letra E"
        ]
      },
      {
        "id": "w3-p3-e7",
        "type": "word-order",
        "prompt": "Organize a lista de compras:",
        "correctAnswer": "We need bread, milk and eggs.",
        "explanation": "We need bread, milk and eggs.",
        "skillCategory": "grammar",
        "options": [
          "bread,",
          "need",
          "eggs.",
          "and",
          "We",
          "milk"
        ]
      },
      {
        "id": "w3-p3-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "The organic apples are on sale today.",
        "explanation": "on sale = em promoção.",
        "skillCategory": "listening",
        "audioPhrase": "The organic apples are on sale today.",
        "options": [
          "The organic apples are on sale today.",
          "The fresh bananas are in aisle four.",
          "The red tomatoes are sold out today.",
          "The green apples are very expensive."
        ]
      },
      {
        "id": "w3-p3-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"Where can I find fresh bread?\"",
        "correctAnswer": "Where can I find fresh bread",
        "explanation": "Muito natural!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Where can I find fresh bread",
        "phoneticHint": "/wer kæn aɪ faɪnd freʃ bred/"
      },
      {
        "id": "w3-p3-e10",
        "type": "multiple-choice",
        "prompt": "\"On sale\" significa:",
        "correctAnswer": "Em promoção / com desconto",
        "explanation": "\"On sale\" = em oferta promocional.",
        "skillCategory": "vocabulary",
        "options": [
          "Em promoção / com desconto",
          "À venda pelo preço normal",
          "Esgotado",
          "Devolvido"
        ]
      }
    ]
  },
  {
    "id": "w3-p4",
    "worldId": 3,
    "phaseNumber": 4,
    "title": "No Restaurante: Fazendo Pedidos",
    "subtitle": "I would like..., Can I have the bill?",
    "pedagogicalObjective": "Fazer pedidos, tirar dúvidas sobre o cardápio e pedir a conta.",
    "type": "lesson",
    "icon": "coffee",
    "cefrLevel": "A2",
    "theorySummary": [
      "Ao pedir: \"I'd like the steak, please\" ou \"Can I have the salmon?\".",
      "Pedir a conta: \"Can we have the bill, please?\" (UK) ou \"Can I get the check?\" (US).",
      "Tip = gorjeta; Waiter / waitress = garçom/garçonete."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p4-e1",
        "type": "multiple-choice",
        "prompt": "Como pedir a conta ao garçom nos EUA?",
        "correctAnswer": "Can I get the check, please?",
        "explanation": "The check (US) / the bill (UK) = a conta.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🍽️",
        "options": [
          "Can I get the check, please?",
          "Bring me the numbers, please!",
          "Give me the cost now!",
          "What is my price, waiter?"
        ]
      },
      {
        "id": "w3-p4-e2",
        "type": "fill-blank",
        "prompt": "Complete o pedido: \"I would like the grilled _____, please.\"",
        "correctAnswer": "salmon",
        "explanation": "grilled salmon = salmão grelhado.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🥩",
        "options": [
          "salmon",
          "table",
          "menu",
          "fork"
        ]
      },
      {
        "id": "w3-p4-e3",
        "type": "word-order",
        "prompt": "Monte o pedido de água:",
        "correctAnswer": "Can we have some still water?",
        "explanation": "Still water = água sem gás (sparkling water = com gás).",
        "skillCategory": "grammar",
        "options": [
          "have",
          "Can",
          "still",
          "we",
          "water?",
          "some"
        ]
      },
      {
        "id": "w3-p4-e4",
        "type": "listening",
        "prompt": "Ouça a pergunta do garçom:",
        "correctAnswer": "Are you ready to order or do you need a few more minutes?",
        "explanation": "Are you ready to order...?",
        "skillCategory": "listening",
        "audioPhrase": "Are you ready to order or do you need a few more minutes?",
        "options": [
          "Are you ready to order or do you need a few more minutes?",
          "Would you like some dessert or coffee after dinner?",
          "How would you like your steak cooked tonight?",
          "Is everything delicious with your meal tonight?"
        ]
      },
      {
        "id": "w3-p4-e5",
        "type": "translate",
        "prompt": "Traduza: \"A comida está deliciosa!\"",
        "correctAnswer": "The food is delicious!",
        "explanation": "The food is delicious!",
        "skillCategory": "reading",
        "options": [
          "The food is delicious!",
          "The food is disgusting!",
          "The food is cold!",
          "The menu is delicious!"
        ]
      },
      {
        "id": "w3-p4-e6",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Água com gás\" em inglês?",
        "correctAnswer": "Sparkling water",
        "explanation": "Sparkling water = água com gás.",
        "skillCategory": "vocabulary",
        "options": [
          "Sparkling water",
          "Gas water",
          "Bubbly drink",
          "Air water"
        ]
      },
      {
        "id": "w3-p4-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta sobre recomendação:",
        "correctAnswer": "What do you recommend?",
        "explanation": "What do you recommend? = O que você recomenda?",
        "skillCategory": "grammar",
        "options": [
          "recommend?",
          "What",
          "you",
          "do"
        ]
      },
      {
        "id": "w3-p4-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Does this dish contain any nuts or gluten?",
        "explanation": "contain any nuts or gluten.",
        "skillCategory": "listening",
        "audioPhrase": "Does this dish contain any nuts or gluten?",
        "options": [
          "Does this dish contain any nuts or gluten?",
          "Does this pasta have fresh tomatoes and garlic?",
          "Is this soup served hot or cold?",
          "Can I order this salad without onions?"
        ]
      },
      {
        "id": "w3-p4-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"The check, please\"",
        "correctAnswer": "The check please",
        "explanation": "Perfeito!",
        "skillCategory": "pronunciation",
        "audioPhrase": "The check please",
        "phoneticHint": "/ðə tʃek pliːz/"
      },
      {
        "id": "w3-p4-e10",
        "type": "multiple-choice",
        "prompt": "O que significa \"Tip\" em um restaurante?",
        "correctAnswer": "Gorjeta",
        "explanation": "Tip = gorjeta.",
        "skillCategory": "vocabulary",
        "options": [
          "Gorjeta",
          "Prato do dia",
          "Sobremesa",
          "Cardápio"
        ]
      }
    ]
  },
  {
    "id": "w3-p5",
    "worldId": 3,
    "phaseNumber": 5,
    "title": "Lugares na Cidade",
    "subtitle": "Bank, pharmacy, hospital, bakery, park",
    "pedagogicalObjective": "Reconhecer e nomear os principais pontos e serviços de uma cidade.",
    "type": "lesson",
    "icon": "map",
    "cefrLevel": "A2",
    "theorySummary": [
      "Estabelecimentos: bank, pharmacy/drugstore, bakery, grocery store, library, bookstore, post office, hospital, police station."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p5-e1",
        "type": "multiple-choice",
        "prompt": "Onde compramos remédios em inglês americano?",
        "correctAnswer": "Pharmacy or Drugstore",
        "explanation": "Pharmacy / drugstore = farmácia.",
        "skillCategory": "vocabulary",
        "visualEmoji": "💊",
        "options": [
          "Pharmacy or Drugstore",
          "Bakery",
          "Library",
          "Post office"
        ]
      },
      {
        "id": "w3-p5-e2",
        "type": "fill-blank",
        "prompt": "Atenção: \"Library\" é biblioteca! \"I borrow books from the city _____.\"",
        "correctAnswer": "library",
        "explanation": "Library = biblioteca (onde pega emprestado). Bookstore = livraria (onde compra).",
        "skillCategory": "vocabulary",
        "visualEmoji": "📚",
        "options": [
          "library",
          "bookstore",
          "bakery",
          "hospital"
        ]
      },
      {
        "id": "w3-p5-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta sobre correios:",
        "correctAnswer": "Where is the nearest post office?",
        "explanation": "Where is the nearest post office?",
        "skillCategory": "grammar",
        "options": [
          "is",
          "office?",
          "Where",
          "post",
          "nearest",
          "the"
        ]
      },
      {
        "id": "w3-p5-e4",
        "type": "listening",
        "prompt": "Ouça o local:",
        "correctAnswer": "The museum is open every day except Monday.",
        "explanation": "The museum is open...",
        "skillCategory": "listening",
        "audioPhrase": "The museum is open every day except Monday.",
        "options": [
          "The museum is open every day except Monday.",
          "The library is open every day except Sunday.",
          "The gallery is closed on Monday afternoon.",
          "The park is open twenty-four hours a day."
        ]
      },
      {
        "id": "w3-p5-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu comprei pão fresco na padaria.\"",
        "correctAnswer": "I bought fresh bread at the bakery.",
        "explanation": "Bakery = padaria.",
        "skillCategory": "reading",
        "options": [
          "I bought fresh bread at the bakery.",
          "I bought fresh bread at the library.",
          "I bought fresh bread at the bookstore.",
          "I bought fresh bread at the bank."
        ]
      },
      {
        "id": "w3-p5-e6",
        "type": "multiple-choice",
        "prompt": "Cuidado com o falso cognato: O que significa \"BOOKSTORE\"?",
        "correctAnswer": "Livraria (loja onde se compram livros)",
        "explanation": "Bookstore = loja de livros. Library = biblioteca.",
        "skillCategory": "vocabulary",
        "options": [
          "Livraria (loja onde se compram livros)",
          "Biblioteca (onde se pegam livros emprestados)",
          "Caderno de anotações",
          "Editora"
        ]
      },
      {
        "id": "w3-p5-e7",
        "type": "word-order",
        "prompt": "Organize a frase de localização:",
        "correctAnswer": "The park is behind the station.",
        "explanation": "The park is behind the station.",
        "skillCategory": "grammar",
        "options": [
          "park",
          "is",
          "The",
          "station.",
          "behind",
          "the"
        ]
      },
      {
        "id": "w3-p5-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Is there a gas station near this highway?",
        "explanation": "gas station = posto de gasolina.",
        "skillCategory": "listening",
        "audioPhrase": "Is there a gas station near this highway?",
        "options": [
          "Is there a gas station near this highway?",
          "Is there a police station near this exit?",
          "Is there a train station near this avenue?",
          "Is there a pharmacy near this hotel?"
        ]
      },
      {
        "id": "w3-p5-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"Where is the nearest pharmacy?\"",
        "correctAnswer": "Where is the nearest pharmacy",
        "explanation": "Muito bem!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Where is the nearest pharmacy",
        "phoneticHint": "/wer ɪz ðə ˈnɪr.ɪst ˈfɑːr.mə.si/"
      },
      {
        "id": "w3-p5-e10",
        "type": "multiple-choice",
        "prompt": "Como se chama o quartel de bombeiros?",
        "correctAnswer": "Fire station",
        "explanation": "Fire station = corpo de bombeiros.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚒",
        "options": [
          "Fire station",
          "Police station",
          "Train station",
          "Gas station"
        ]
      }
    ]
  },
  {
    "id": "w3-p6",
    "worldId": 3,
    "phaseNumber": 6,
    "title": "Pedindo & Dando Direções",
    "subtitle": "Turn left, go straight, next to, across from",
    "pedagogicalObjective": "Pedir e fornecer direções na rua com confiança.",
    "type": "lesson",
    "icon": "compass",
    "cefrLevel": "A2",
    "theorySummary": [
      "Go straight ahead = siga em frente.",
      "Turn left / turn right = vire à esquerda / à direita.",
      "Cross the street = atravesse a rua. Block = quarteirão. Across from = do outro lado de."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p6-e1",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Vire à direita no semáforo\"?",
        "correctAnswer": "Turn right at the traffic lights.",
        "explanation": "Turn right = vire à direita.",
        "skillCategory": "vocabulary",
        "visualEmoji": "➡️",
        "options": [
          "Turn right at the traffic lights.",
          "Turn left at the traffic lights.",
          "Go straight at the traffic lights.",
          "Cross right at the traffic lights."
        ]
      },
      {
        "id": "w3-p6-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"Go _____ ahead for two blocks.\"",
        "correctAnswer": "straight",
        "explanation": "Go straight ahead = siga em frente.",
        "skillCategory": "vocabulary",
        "visualEmoji": "⬆️",
        "options": [
          "straight",
          "right",
          "left",
          "across"
        ]
      },
      {
        "id": "w3-p6-e3",
        "type": "word-order",
        "prompt": "Monte o pedido de informação na rua:",
        "correctAnswer": "How can I get to the station?",
        "explanation": "How can I get to...?",
        "skillCategory": "grammar",
        "options": [
          "get",
          "the",
          "How",
          "to",
          "station?",
          "can",
          "I"
        ]
      },
      {
        "id": "w3-p6-e4",
        "type": "listening",
        "prompt": "Ouça a instrução de direção:",
        "correctAnswer": "Walk two blocks, turn left, and it is on your right.",
        "explanation": "on your right = à sua direita.",
        "skillCategory": "listening",
        "audioPhrase": "Walk two blocks, turn left, and it is on your right.",
        "options": [
          "Walk two blocks, turn left, and it is on your right.",
          "Walk three blocks, turn right, and it is on your left.",
          "Go straight ahead and turn right at the corner.",
          "Cross the avenue and turn left at the bank."
        ]
      },
      {
        "id": "w3-p6-e5",
        "type": "translate",
        "prompt": "Traduza: \"Fica do outro lado da rua.\"",
        "correctAnswer": "It is across the street.",
        "explanation": "Across the street = do outro lado da rua.",
        "skillCategory": "reading",
        "options": [
          "It is across the street.",
          "It is in the street.",
          "It is next street.",
          "It is inside the street."
        ]
      },
      {
        "id": "w3-p6-e6",
        "type": "multiple-choice",
        "prompt": "O que significa \"Traffic lights\"?",
        "correctAnswer": "Semáforo / sinaleira",
        "explanation": "Traffic lights = semáforo.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚦",
        "options": [
          "Semáforo / sinaleira",
          "Faixa de pedestres",
          "Calçada",
          "Placa de trânsito"
        ]
      },
      {
        "id": "w3-p6-e7",
        "type": "word-order",
        "prompt": "Organize a orientação:",
        "correctAnswer": "It is on the corner.",
        "explanation": "It is on the corner = Fica na esquina.",
        "skillCategory": "grammar",
        "options": [
          "corner.",
          "on",
          "It",
          "is",
          "the"
        ]
      },
      {
        "id": "w3-p6-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "The bank is between the pharmacy and the bakery.",
        "explanation": "between = entre dois lugares.",
        "skillCategory": "listening",
        "audioPhrase": "The bank is between the pharmacy and the bakery.",
        "options": [
          "The bank is between the pharmacy and the bakery.",
          "The bank is next to the supermarket and the library.",
          "The pharmacy is behind the bakery and the bank.",
          "The hospital is opposite the post office."
        ]
      },
      {
        "id": "w3-p6-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"Turn left at the next corner\"",
        "correctAnswer": "Turn left at the next corner",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Turn left at the next corner",
        "phoneticHint": "/tɜːrn left æt ðə nekst ˈkɔːr.nər/"
      },
      {
        "id": "w3-p6-e10",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Quarteirão\" em inglês?",
        "correctAnswer": "Block",
        "explanation": "A block = um quarteirão.",
        "skillCategory": "vocabulary",
        "options": [
          "Block",
          "Street",
          "Avenue",
          "Corner"
        ]
      }
    ]
  },
  {
    "id": "w3-p7",
    "worldId": 3,
    "phaseNumber": 7,
    "title": "Meios de Transporte",
    "subtitle": "Bus, train, subway, flight, bicycle, taxi",
    "pedagogicalObjective": "Falar sobre locomoção urbana e viagens em diferentes transportes.",
    "type": "lesson",
    "icon": "navigation",
    "cefrLevel": "A2",
    "theorySummary": [
      "Meios: bus, train, subway/metro, taxi/cab, bicycle/bike, airplane/flight.",
      "Preposições: ON the bus, ON the train, ON the plane (onde você fica em pé), mas IN the car, IN a taxi."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p7-e1",
        "type": "multiple-choice",
        "prompt": "Como se chama o metrô em Nova York?",
        "correctAnswer": "Subway",
        "explanation": "Subway (EUA); The Tube / Underground (Londres).",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚇",
        "options": [
          "Subway",
          "Tube",
          "Underground",
          "Train car"
        ]
      },
      {
        "id": "w3-p7-e2",
        "type": "fill-blank",
        "prompt": "Qual preposição usamos com ônibus? \"I am _____ the bus right now.\"",
        "correctAnswer": "on",
        "explanation": "Para transporte coletivo usamos ON: on the bus, on the train.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚌",
        "options": [
          "on",
          "in",
          "at",
          "into"
        ]
      },
      {
        "id": "w3-p7-e3",
        "type": "word-order",
        "prompt": "Monte a frase de ida ao trabalho:",
        "correctAnswer": "She takes the train to work.",
        "explanation": "She takes the train to work.",
        "skillCategory": "grammar",
        "options": [
          "takes",
          "She",
          "to",
          "work.",
          "train",
          "the"
        ]
      },
      {
        "id": "w3-p7-e4",
        "type": "listening",
        "prompt": "Ouça a informação sobre o transporte:",
        "correctAnswer": "The next bus arrives in ten minutes.",
        "explanation": "The next bus arrives...",
        "skillCategory": "listening",
        "audioPhrase": "The next bus arrives in ten minutes.",
        "options": [
          "The next bus arrives in ten minutes.",
          "The next train leaves in ten minutes.",
          "The previous bus was delayed fifteen minutes.",
          "The subway arrives in five minutes."
        ]
      },
      {
        "id": "w3-p7-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu vou para o trabalho de bicicleta.\"",
        "correctAnswer": "I go to work by bicycle.",
        "explanation": "By bicycle / by bike.",
        "skillCategory": "reading",
        "options": [
          "I go to work by bicycle.",
          "I go to work on car.",
          "I go to work by foot.",
          "I go to work in train."
        ]
      },
      {
        "id": "w3-p7-e6",
        "type": "multiple-choice",
        "prompt": "Qual preposição usamos para \"a pé\"?",
        "correctAnswer": "ON foot",
        "explanation": "Dizemos \"by bus\", \"by car\", mas \"ON foot\" (a pé).",
        "skillCategory": "vocabulary",
        "options": [
          "ON foot",
          "BY foot",
          "IN foot",
          "AT foot"
        ]
      },
      {
        "id": "w3-p7-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta sobre passagem:",
        "correctAnswer": "How much is the bus ticket?",
        "explanation": "How much is the bus ticket?",
        "skillCategory": "grammar",
        "options": [
          "is",
          "ticket?",
          "How",
          "much",
          "bus",
          "the"
        ]
      },
      {
        "id": "w3-p7-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "You need to change trains at Central Station.",
        "explanation": "change trains = trocar de trem/baldeação.",
        "skillCategory": "listening",
        "audioPhrase": "You need to change trains at Central Station.",
        "options": [
          "You need to change trains at Central Station.",
          "You need to get off the bus at Central Park.",
          "You should take the express train to Central Station.",
          "The train stops at Central Station and then airport."
        ]
      },
      {
        "id": "w3-p7-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I take the subway every day\"",
        "correctAnswer": "I take the subway every day",
        "explanation": "Perfeita pronúncia!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I take the subway every day",
        "phoneticHint": "/aɪ teɪk ðə ˈsʌb.weɪ ˈev.ri deɪ/"
      },
      {
        "id": "w3-p7-e10",
        "type": "multiple-choice",
        "prompt": "Para táxi e carro particular, usamos qual preposição?",
        "correctAnswer": "IN a car / IN a taxi",
        "explanation": "Em veículos menores onde não se anda de pé usamos IN.",
        "skillCategory": "vocabulary",
        "options": [
          "IN a car / IN a taxi",
          "ON a car / ON a taxi",
          "BY the taxi",
          "AT a car"
        ]
      }
    ]
  },
  {
    "id": "w3-p8",
    "worldId": 3,
    "phaseNumber": 8,
    "title": "No Aeroporto: Check-in & Embarque",
    "subtitle": "Boarding pass, gate, luggage, passport",
    "pedagogicalObjective": "Navegar com autonomia em aeroportos internacionais.",
    "type": "lesson",
    "icon": "plane",
    "cefrLevel": "A2",
    "theorySummary": [
      "Documentos: passport, boarding pass, visa.",
      "Locais: check-in counter, security check, departure gate, baggage claim.",
      "Termos: carry-on bag, checked luggage, flight delayed/on time."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p8-e1",
        "type": "multiple-choice",
        "prompt": "Como se chama o cartão de embarque?",
        "correctAnswer": "Boarding pass",
        "explanation": "Boarding pass = cartão de embarque.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🎫",
        "options": [
          "Boarding pass",
          "Travel card",
          "Flight ticket",
          "Entry paper"
        ]
      },
      {
        "id": "w3-p8-e2",
        "type": "fill-blank",
        "prompt": "Complete com bagagem: \"How many pieces of _____ are you checking?\"",
        "correctAnswer": "luggage",
        "explanation": "Luggage / baggage é incontável (nunca \"luggages\").",
        "skillCategory": "vocabulary",
        "visualEmoji": "🧳",
        "options": [
          "luggage",
          "luggages",
          "bag",
          "suitcase"
        ]
      },
      {
        "id": "w3-p8-e3",
        "type": "word-order",
        "prompt": "Monte o pedido do agente de imigração:",
        "correctAnswer": "May I see your passport, please?",
        "explanation": "May I see your passport, please?",
        "skillCategory": "grammar",
        "options": [
          "May",
          "your",
          "passport,",
          "I",
          "see",
          "please?"
        ]
      },
      {
        "id": "w3-p8-e4",
        "type": "listening",
        "prompt": "Ouça o anúncio do voo:",
        "correctAnswer": "Flight 402 to London is now boarding at Gate 15.",
        "explanation": "boarding at Gate 15.",
        "skillCategory": "listening",
        "audioPhrase": "Flight 402 to London is now boarding at Gate 15.",
        "options": [
          "Flight 402 to London is now boarding at Gate 15.",
          "Flight 402 to Paris is now delayed at Gate 15.",
          "Flight 302 to London is now boarding at Gate 12.",
          "Flight 402 to New York is ready at Gate 50."
        ]
      },
      {
        "id": "w3-p8-e5",
        "type": "translate",
        "prompt": "Traduza: \"Onde fica a esteira de bagagens?\"",
        "correctAnswer": "Where is the baggage claim?",
        "explanation": "Baggage claim = restituição de bagagens.",
        "skillCategory": "reading",
        "options": [
          "Where is the baggage claim?",
          "Where is the security check?",
          "Where is the departure gate?",
          "Where is the customs office?"
        ]
      },
      {
        "id": "w3-p8-e6",
        "type": "multiple-choice",
        "prompt": "O portão de embarque é chamado de:",
        "correctAnswer": "Gate",
        "explanation": "Departure gate = portão de embarque.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🚪",
        "options": [
          "Gate",
          "Door",
          "Port",
          "Exit"
        ]
      },
      {
        "id": "w3-p8-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta sobre o status do voo:",
        "correctAnswer": "Is the flight on time?",
        "explanation": "Is the flight on time? (O voo está no horário?)",
        "skillCategory": "grammar",
        "options": [
          "time?",
          "flight",
          "Is",
          "the",
          "on"
        ]
      },
      {
        "id": "w3-p8-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Please place all liquids and electronic devices in the tray.",
        "explanation": "security check instructions.",
        "skillCategory": "listening",
        "audioPhrase": "Please place all liquids and electronic devices in the tray.",
        "options": [
          "Please place all liquids and electronic devices in the tray.",
          "Please keep your shoes and jacket on during the check.",
          "Please take out your boarding pass and passport.",
          "Please proceed directly to your departure gate."
        ]
      },
      {
        "id": "w3-p8-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"Here is my passport and boarding pass\"",
        "correctAnswer": "Here is my passport and boarding pass",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Here is my passport and boarding pass",
        "phoneticHint": "/hɪr ɪz maɪ ˈpæs.pɔːrt ənd ˈbɔːr.dɪŋ pæs/"
      },
      {
        "id": "w3-p8-e10",
        "type": "multiple-choice",
        "prompt": "Bagagem de mão que sobe com você na cabine é chamada de:",
        "correctAnswer": "Carry-on bag",
        "explanation": "Carry-on bag / hand luggage.",
        "skillCategory": "vocabulary",
        "options": [
          "Carry-on bag",
          "Checked bag",
          "Heavy luggage",
          "Cargo item"
        ]
      }
    ]
  },
  {
    "id": "w3-p9",
    "worldId": 3,
    "phaseNumber": 9,
    "title": "No Hotel: Hospedagem & Serviços",
    "subtitle": "Reservation, key card, receptionist, check-out",
    "pedagogicalObjective": "Fazer check-in, solicitar serviços de quarto e fazer check-out em hotéis.",
    "type": "lesson",
    "icon": "key",
    "cefrLevel": "A2",
    "theorySummary": [
      "Vocabulário: reservation, receptionist, key card, room service, wake-up call, Wi-Fi password.",
      "Perguntas: \"What time is breakfast?\", \"Could I have an extra towel?\"."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p9-e1",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Eu tenho uma reserva no nome de Silva\"?",
        "correctAnswer": "I have a reservation under the name Silva.",
        "explanation": "under the name Silva.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🏨",
        "options": [
          "I have a reservation under the name Silva.",
          "I have a booking with Silva.",
          "I got a room for Silva name.",
          "My reserve is Silva."
        ]
      },
      {
        "id": "w3-p9-e2",
        "type": "fill-blank",
        "prompt": "O cartão magnético da porta do quarto chama-se: \"Here is your _____.\"",
        "correctAnswer": "key card",
        "explanation": "Key card = cartão chave.",
        "skillCategory": "vocabulary",
        "visualEmoji": "💳",
        "options": [
          "key card",
          "door card",
          "room paper",
          "hotel tag"
        ]
      },
      {
        "id": "w3-p9-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta sobre o café da manhã:",
        "correctAnswer": "What time is breakfast served?",
        "explanation": "What time is breakfast served?",
        "skillCategory": "grammar",
        "options": [
          "served?",
          "is",
          "time",
          "breakfast",
          "What"
        ]
      },
      {
        "id": "w3-p9-e4",
        "type": "listening",
        "prompt": "Ouça a informação da recepção:",
        "correctAnswer": "Check-out is at eleven o'clock in the morning.",
        "explanation": "Check-out is at eleven...",
        "skillCategory": "listening",
        "audioPhrase": "Check-out is at eleven o'clock in the morning.",
        "options": [
          "Check-out is at eleven o'clock in the morning.",
          "Check-in is at three o'clock in the afternoon.",
          "Breakfast is served until ten o'clock.",
          "The swimming pool closes at nine o'clock."
        ]
      },
      {
        "id": "w3-p9-e5",
        "type": "translate",
        "prompt": "Traduza: \"Você poderia me trazer uma toalha extra?\"",
        "correctAnswer": "Could you bring me an extra towel, please?",
        "explanation": "an extra towel = uma toalha extra.",
        "skillCategory": "reading",
        "options": [
          "Could you bring me an extra towel, please?",
          "Can you take an extra blanket, please?",
          "Could I bring you an extra towel?",
          "Would you like an extra pillow?"
        ]
      },
      {
        "id": "w3-p9-e6",
        "type": "multiple-choice",
        "prompt": "Como perguntar a senha do Wi-Fi no hotel?",
        "correctAnswer": "What is the Wi-Fi password, please?",
        "explanation": "What is the Wi-Fi password?",
        "skillCategory": "vocabulary",
        "visualEmoji": "📶",
        "options": [
          "What is the Wi-Fi password, please?",
          "Where is the internet code?",
          "How is the connection name?",
          "Can I take the Wi-Fi key?"
        ]
      },
      {
        "id": "w3-p9-e7",
        "type": "word-order",
        "prompt": "Organize a frase de solicitação:",
        "correctAnswer": "The air conditioning is not working.",
        "explanation": "The air conditioning is not working.",
        "skillCategory": "grammar",
        "options": [
          "is",
          "working.",
          "not",
          "air",
          "conditioning",
          "The"
        ]
      },
      {
        "id": "w3-p9-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Your room is on the fourth floor, right opposite the elevator.",
        "explanation": "on the fourth floor.",
        "skillCategory": "listening",
        "audioPhrase": "Your room is on the fourth floor, right opposite the elevator.",
        "options": [
          "Your room is on the fourth floor, right opposite the elevator.",
          "Your room is on the third floor, near the stairs.",
          "Your room is on the fourteenth floor with ocean view.",
          "The restaurant is on the first floor near the lobby."
        ]
      },
      {
        "id": "w3-p9-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I would like to check out, please\"",
        "correctAnswer": "I would like to check out please",
        "explanation": "Perfeita naturalidade!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I would like to check out please",
        "phoneticHint": "/aɪ wʊd laɪk tuː tʃek aʊt pliːz/"
      },
      {
        "id": "w3-p9-e10",
        "type": "multiple-choice",
        "prompt": "O serviço de refeições entregues no próprio quarto é:",
        "correctAnswer": "Room service",
        "explanation": "Room service = serviço de quarto.",
        "skillCategory": "vocabulary",
        "options": [
          "Room service",
          "Kitchen delivery",
          "Bed food",
          "House dish"
        ]
      }
    ]
  },
  {
    "id": "w3-p10",
    "worldId": 3,
    "phaseNumber": 10,
    "title": "Baú da Sabedoria: O Explorador Urbano",
    "subtitle": "Revisão das 9 lições cotidianas e bônus",
    "pedagogicalObjective": "Consolidar vocabulário de casa, compras, restaurantes, transporte e viagens.",
    "type": "chest",
    "icon": "award",
    "cefrLevel": "A2",
    "theorySummary": [
      "Primeiro Baú do Mundo 3! Parabéns por dominar situações urbanas práticas."
    ],
    "xpReward": 55,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w3-p10-e1",
        "type": "multiple-choice",
        "prompt": "[Revisão] Como pedir a conta no restaurante?",
        "correctAnswer": "The check, please.",
        "explanation": "The check, please.",
        "skillCategory": "vocabulary",
        "options": [
          "The check, please.",
          "The cost, please.",
          "Give receipt now.",
          "Finish my table."
        ]
      },
      {
        "id": "w3-p10-e2",
        "type": "fill-blank",
        "prompt": "[Revisão] \"Go _____ ahead for two blocks, then turn right.\"",
        "correctAnswer": "straight",
        "explanation": "Go straight ahead.",
        "skillCategory": "vocabulary",
        "options": [
          "straight",
          "across",
          "left",
          "corner"
        ]
      },
      {
        "id": "w3-p10-e3",
        "type": "word-order",
        "prompt": "[Revisão] Monte a frase de aeroporto:",
        "correctAnswer": "Here is my passport and boarding pass.",
        "explanation": "Here is my passport and boarding pass.",
        "skillCategory": "grammar",
        "options": [
          "passport",
          "is",
          "my",
          "boarding",
          "Here",
          "pass.",
          "and"
        ]
      },
      {
        "id": "w3-p10-e4",
        "type": "listening",
        "prompt": "[Revisão] Ouça e marque:",
        "correctAnswer": "The subway arrives every four minutes during rush hour.",
        "explanation": "every four minutes.",
        "skillCategory": "listening",
        "audioPhrase": "The subway arrives every four minutes during rush hour.",
        "options": [
          "The subway arrives every four minutes during rush hour.",
          "The bus arrives every fifteen minutes on weekends.",
          "The express train leaves in forty minutes.",
          "The station is closed for maintenance tonight."
        ]
      },
      {
        "id": "w3-p10-e5",
        "type": "multiple-choice",
        "prompt": "[Revisão] Qual preposição usamos com ônibus e metrô?",
        "correctAnswer": "ON (on the bus, on the subway)",
        "explanation": "ON the bus / train.",
        "skillCategory": "vocabulary",
        "options": [
          "ON (on the bus, on the subway)",
          "IN (in the bus, in the subway)",
          "AT (at the bus)",
          "BY (by the bus inside)"
        ]
      },
      {
        "id": "w3-p10-e6",
        "type": "translate",
        "prompt": "[Revisão] Traduza: \"Onde fica o supermercado mais próximo?\"",
        "correctAnswer": "Where is the nearest supermarket?",
        "explanation": "nearest supermarket.",
        "skillCategory": "reading",
        "options": [
          "Where is the nearest supermarket?",
          "Where is the closed supermarket?",
          "Which is the nearest bookstore?",
          "Where was the supermarket yesterday?"
        ]
      },
      {
        "id": "w3-p10-e7",
        "type": "word-order",
        "prompt": "[Revisão] Ordene o pedido no hotel:",
        "correctAnswer": "Can I have an extra pillow, please?",
        "explanation": "Can I have an extra pillow, please?",
        "skillCategory": "grammar",
        "options": [
          "extra",
          "pillow,",
          "I",
          "an",
          "please?",
          "Can",
          "have"
        ]
      },
      {
        "id": "w3-p10-e8",
        "type": "speaking-repeat",
        "prompt": "[Revisão] Fale no microfone: \"Could you tell me how to get to the hotel?\"",
        "correctAnswer": "Could you tell me how to get to the hotel",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Could you tell me how to get to the hotel",
        "phoneticHint": "/kʊd juː tel miː haʊ tuː ɡet tuː ðə hoʊˈtel/"
      },
      {
        "id": "w3-p10-e9",
        "type": "fill-blank",
        "prompt": "[Revisão] \"A slice of _____ with butter.\"",
        "correctAnswer": "bread",
        "explanation": "A slice of bread.",
        "skillCategory": "vocabulary",
        "options": [
          "bread",
          "water",
          "rice",
          "soup"
        ]
      },
      {
        "id": "w3-p10-e10",
        "type": "multiple-choice",
        "prompt": "[Revisão] O que significa \"Baggage claim\"?",
        "correctAnswer": "Esteira de bagagens / restituição",
        "explanation": "Restituição de bagagens.",
        "skillCategory": "vocabulary",
        "options": [
          "Esteira de bagagens / restituição",
          "Inspeção de segurança",
          "Portão de embarque",
          "Cartão de embarque"
        ]
      },
      {
        "id": "w3-p10-e11",
        "type": "translate",
        "prompt": "[Revisão] \"A comida estava deliciosa, obrigado.\"",
        "correctAnswer": "The food was delicious, thank you.",
        "explanation": "The food was delicious.",
        "skillCategory": "reading",
        "options": [
          "The food was delicious, thank you.",
          "The food was disgusting, thanks.",
          "The plate is clean, thank you.",
          "The meal was cold, thanks."
        ]
      }
    ]
  },
  {
    "id": "w3-p11",
    "worldId": 3,
    "phaseNumber": 11,
    "title": "O Clima & Previsão do Tempo",
    "subtitle": "Sunny, rainy, cloudy, windy, snowy",
    "pedagogicalObjective": "Descrever o tempo meteorológico e compreender previsões.",
    "type": "lesson",
    "icon": "cloud-rain",
    "cefrLevel": "A2",
    "theorySummary": [
      "Sunny (ensolarado), rainy (chuvoso), cloudy (nublado), windy (com vento), snowy (com neve).",
      "\"What's the weather like today?\" = \"Como está o tempo hoje?\"."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p11-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Hoje está ensolarado e quente\"?",
        "correctAnswer": "Today is sunny and warm.",
        "explanation": "sunny and warm.",
        "skillCategory": "vocabulary",
        "visualEmoji": "☀️",
        "options": [
          "Today is sunny and warm.",
          "Today is rainy and cold.",
          "Today is cloudy and dark.",
          "Today has sun and hot."
        ]
      },
      {
        "id": "w3-p11-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"Take an umbrella, it is _____ outside.\"",
        "correctAnswer": "raining",
        "explanation": "It is raining outside.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌧️",
        "options": [
          "raining",
          "shining",
          "snow",
          "wind"
        ]
      },
      {
        "id": "w3-p11-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta sobre o clima:",
        "correctAnswer": "What is the weather like?",
        "explanation": "What is the weather like?",
        "skillCategory": "grammar",
        "options": [
          "is",
          "What",
          "weather",
          "the",
          "like?"
        ]
      },
      {
        "id": "w3-p11-e4",
        "type": "listening",
        "prompt": "Ouça a previsão:",
        "correctAnswer": "The forecast says it will rain this afternoon.",
        "explanation": "The forecast says...",
        "skillCategory": "listening",
        "audioPhrase": "The forecast says it will rain this afternoon.",
        "options": [
          "The forecast says it will rain this afternoon.",
          "The forecast says it will be sunny all day.",
          "The news says it will snow tomorrow morning.",
          "The report says the wind will be strong."
        ]
      },
      {
        "id": "w3-p11-e5",
        "type": "translate",
        "prompt": "Traduza: \"Está ventando muito hoje.\"",
        "correctAnswer": "It is very windy today.",
        "explanation": "It is very windy today.",
        "skillCategory": "reading",
        "options": [
          "It is very windy today.",
          "It has much wind today.",
          "It is wind today.",
          "It does wind today."
        ]
      },
      {
        "id": "w3-p11-e6",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Está nevando\"?",
        "correctAnswer": "It is snowing.",
        "explanation": "It is snowing.",
        "skillCategory": "vocabulary",
        "options": [
          "It is snowing.",
          "It is snow.",
          "Has snowing.",
          "There snows."
        ]
      },
      {
        "id": "w3-p11-e7",
        "type": "word-order",
        "prompt": "Organize a frase de temperatura:",
        "correctAnswer": "It is twenty-five degrees Celsius.",
        "explanation": "It is twenty-five degrees Celsius.",
        "skillCategory": "grammar",
        "options": [
          "degrees",
          "It",
          "twenty-five",
          "is",
          "Celsius."
        ]
      },
      {
        "id": "w3-p11-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Don't forget your sunglasses, it is very bright outside.",
        "explanation": "sunglasses... very bright.",
        "skillCategory": "listening",
        "audioPhrase": "Don't forget your sunglasses, it is very bright outside.",
        "options": [
          "Don't forget your sunglasses, it is very bright outside.",
          "Don't forget your raincoat, it is stormy outside.",
          "Take your warm hat, it is freezing cold.",
          "Wear your boots, the street is muddy."
        ]
      },
      {
        "id": "w3-p11-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"What is the weather like today?\"",
        "correctAnswer": "What is the weather like today",
        "explanation": "Perfeita entonação!",
        "skillCategory": "pronunciation",
        "audioPhrase": "What is the weather like today",
        "phoneticHint": "/wɑːt ɪz ðə ˈweð.ər laɪk təˈdeɪ/"
      },
      {
        "id": "w3-p11-e10",
        "type": "multiple-choice",
        "prompt": "Qual termo significa \"Previsão do tempo\"?",
        "correctAnswer": "Weather forecast",
        "explanation": "Weather forecast = previsão do tempo.",
        "skillCategory": "vocabulary",
        "options": [
          "Weather forecast",
          "Weather prediction",
          "Sky news",
          "Climate report"
        ]
      }
    ]
  },
  {
    "id": "w3-p12",
    "worldId": 3,
    "phaseNumber": 12,
    "title": "As Quatro Estações do Ano",
    "subtitle": "Spring, Summer, Autumn/Fall, Winter",
    "pedagogicalObjective": "Nomear as estações e falar sobre preferências sazonais.",
    "type": "lesson",
    "icon": "sun",
    "cefrLevel": "A2",
    "theorySummary": [
      "Spring (primavera), Summer (verão), Autumn/Fall (outono), Winter (inverno).",
      "Preposição: sempre \"IN\": in summer, in winter."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p12-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Primavera\" em inglês?",
        "correctAnswer": "Spring",
        "explanation": "Spring = primavera.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🌸",
        "options": [
          "Spring",
          "Summer",
          "Autumn",
          "Winter"
        ]
      },
      {
        "id": "w3-p12-e2",
        "type": "fill-blank",
        "prompt": "A estação mais fria é: \"It snows a lot during _____.\"",
        "correctAnswer": "winter",
        "explanation": "Winter = inverno.",
        "skillCategory": "vocabulary",
        "visualEmoji": "❄️",
        "options": [
          "winter",
          "summer",
          "spring",
          "fall"
        ]
      },
      {
        "id": "w3-p12-e3",
        "type": "word-order",
        "prompt": "Monte a frase de preferência:",
        "correctAnswer": "Summer is my favorite season.",
        "explanation": "Summer is my favorite season.",
        "skillCategory": "grammar",
        "options": [
          "is",
          "season.",
          "Summer",
          "favorite",
          "my"
        ]
      },
      {
        "id": "w3-p12-e4",
        "type": "listening",
        "prompt": "Ouça a estação mencionada:",
        "correctAnswer": "The leaves turn orange and red in autumn.",
        "explanation": "Autumn / Fall = outono.",
        "skillCategory": "listening",
        "audioPhrase": "The leaves turn orange and red in autumn.",
        "options": [
          "The leaves turn orange and red in autumn.",
          "The flowers bloom beautifully in spring.",
          "People love going to the beach in summer.",
          "The snow covers the mountains in winter."
        ]
      },
      {
        "id": "w3-p12-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu costumo tirar férias no verão.\"",
        "correctAnswer": "I usually take vacation in summer.",
        "explanation": "in summer.",
        "skillCategory": "reading",
        "options": [
          "I usually take vacation in summer.",
          "I usually take vacation on summer.",
          "I always work in summer.",
          "I go to holiday at summer."
        ]
      },
      {
        "id": "w3-p12-e6",
        "type": "multiple-choice",
        "prompt": "No inglês americano, qual outro nome é dado para \"Autumn\"?",
        "correctAnswer": "Fall",
        "explanation": "Fall (EUA) = Autumn (UK).",
        "skillCategory": "vocabulary",
        "options": [
          "Fall",
          "Drop",
          "Leaf",
          "Down"
        ]
      },
      {
        "id": "w3-p12-e7",
        "type": "word-order",
        "prompt": "Organize a frase primaveril:",
        "correctAnswer": "Flowers bloom in spring.",
        "explanation": "Flowers bloom in spring.",
        "skillCategory": "grammar",
        "options": [
          "bloom",
          "spring.",
          "Flowers",
          "in"
        ]
      },
      {
        "id": "w3-p12-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Winter in Canada is extremely cold and snowy.",
        "explanation": "Winter in Canada...",
        "skillCategory": "listening",
        "audioPhrase": "Winter in Canada is extremely cold and snowy.",
        "options": [
          "Winter in Canada is extremely cold and snowy.",
          "Summer in Spain is warm and sunny.",
          "Spring in Japan is famous for cherry blossoms.",
          "Autumn in New York is pleasant and colorful."
        ]
      },
      {
        "id": "w3-p12-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"My favorite season is spring\"",
        "correctAnswer": "My favorite season is spring",
        "explanation": "Muito bom!",
        "skillCategory": "pronunciation",
        "audioPhrase": "My favorite season is spring",
        "phoneticHint": "/maɪ ˈfeɪ.vər.ɪt ˈsiː.zən ɪz sprɪŋ/"
      },
      {
        "id": "w3-p12-e10",
        "type": "multiple-choice",
        "prompt": "Qual preposição usamos antes de estações do ano?",
        "correctAnswer": "IN (in summer, in winter)",
        "explanation": "Estações levam IN.",
        "skillCategory": "vocabulary",
        "options": [
          "IN (in summer, in winter)",
          "ON (on summer)",
          "AT (at summer)",
          "BY (by winter)"
        ]
      }
    ]
  },
  {
    "id": "w3-p13",
    "worldId": 3,
    "phaseNumber": 13,
    "title": "Partes do Corpo Humano",
    "subtitle": "Head, eyes, ears, hands, arms, legs, back",
    "pedagogicalObjective": "Identificar partes do corpo e descrever sensações físicas.",
    "type": "lesson",
    "icon": "user",
    "cefrLevel": "A2",
    "theorySummary": [
      "Head (cabeça), eyes (olhos), ears (orelhas), mouth (boca), nose (nariz).",
      "Hands (mãos), arms (braços), legs (pernas), feet (pés), back (costas)."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p13-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Olhos\" e \"Ouvidos\" em inglês?",
        "correctAnswer": "Eyes and Ears",
        "explanation": "Eyes (/aɪz/) e Ears (/ɪərz/).",
        "skillCategory": "vocabulary",
        "visualEmoji": "👀",
        "options": [
          "Eyes and Ears",
          "Nose and Mouth",
          "Hands and Feet",
          "Arms and Legs"
        ]
      },
      {
        "id": "w3-p13-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"Wash your _____ before eating.\"",
        "correctAnswer": "hands",
        "explanation": "Wash your hands = lave suas mãos.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🤚",
        "options": [
          "hands",
          "feet",
          "ears",
          "shoulders"
        ]
      },
      {
        "id": "w3-p13-e3",
        "type": "word-order",
        "prompt": "Monte a frase sobre dor nas costas:",
        "correctAnswer": "My back hurts after working.",
        "explanation": "My back hurts = Minhas costas doem.",
        "skillCategory": "grammar",
        "options": [
          "hurts",
          "after",
          "working.",
          "back",
          "My"
        ]
      },
      {
        "id": "w3-p13-e4",
        "type": "listening",
        "prompt": "Ouça a parte do corpo mencionada:",
        "correctAnswer": "He injured his left shoulder during the football match.",
        "explanation": "left shoulder (ombro esquerdo).",
        "skillCategory": "listening",
        "audioPhrase": "He injured his left shoulder during the football match.",
        "options": [
          "He injured his left shoulder during the football match.",
          "He injured his right knee during the soccer game.",
          "She hurt her left ankle while running.",
          "He broke his left arm in an accident."
        ]
      },
      {
        "id": "w3-p13-e5",
        "type": "translate",
        "prompt": "Traduza: \"Minha cabeça dói.\"",
        "correctAnswer": "My head hurts.",
        "explanation": "My head hurts.",
        "skillCategory": "reading",
        "options": [
          "My head hurts.",
          "My head is hurt.",
          "My head pain.",
          "I have head hurt."
        ]
      },
      {
        "id": "w3-p13-e6",
        "type": "multiple-choice",
        "prompt": "Qual é o plural de FOOT (pé)?",
        "correctAnswer": "Feet",
        "explanation": "One foot, two feet.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🦶",
        "options": [
          "Feet",
          "Foots",
          "Feets",
          "Footes"
        ]
      },
      {
        "id": "w3-p13-e7",
        "type": "word-order",
        "prompt": "Organize a descrição física:",
        "correctAnswer": "She has bright blue eyes.",
        "explanation": "She has bright blue eyes.",
        "skillCategory": "grammar",
        "options": [
          "blue",
          "has",
          "eyes.",
          "She",
          "bright"
        ]
      },
      {
        "id": "w3-p13-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Open your mouth and say ah.",
        "explanation": "Open your mouth.",
        "skillCategory": "listening",
        "audioPhrase": "Open your mouth and say ah.",
        "options": [
          "Open your mouth and say ah.",
          "Close your eyes and breathe deeply.",
          "Raise your right arm please.",
          "Turn your head to the left."
        ]
      },
      {
        "id": "w3-p13-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"My head hurts\"",
        "correctAnswer": "My head hurts",
        "explanation": "Perfeita clareza!",
        "skillCategory": "pronunciation",
        "audioPhrase": "My head hurts",
        "phoneticHint": "/maɪ hed hɜːrts/"
      },
      {
        "id": "w3-p13-e10",
        "type": "multiple-choice",
        "prompt": "Qual parte do corpo usamos para ouvir sons?",
        "correctAnswer": "Ears",
        "explanation": "Ears = orelhas / ouvidos.",
        "skillCategory": "vocabulary",
        "options": [
          "Ears",
          "Eyes",
          "Nose",
          "Tongue"
        ]
      }
    ]
  },
  {
    "id": "w3-p14",
    "worldId": 3,
    "phaseNumber": 14,
    "title": "Na Farmácia & Sintomas de Saúde",
    "subtitle": "Headache, fever, stomachache, medicine",
    "pedagogicalObjective": "Descrever sintomas comuns e comprar medicamentos na farmácia.",
    "type": "lesson",
    "icon": "activity",
    "cefrLevel": "A2",
    "theorySummary": [
      "Dores terminadas em -ache: headache (dor de cabeça), stomachache (dor de estômago), toothache (dor de dente).",
      "Sintomas: fever (febre), cough (tosse), sore throat (dor de garganta), cold (resfriado)."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p14-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Dor de cabeça\" em inglês?",
        "correctAnswer": "Headache",
        "explanation": "Headache (/ˈhed.eɪk/).",
        "skillCategory": "vocabulary",
        "visualEmoji": "🤕",
        "options": [
          "Headache",
          "Stomachache",
          "Toothache",
          "Backache"
        ]
      },
      {
        "id": "w3-p14-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"I have a high _____ and I feel very cold.\"",
        "correctAnswer": "fever",
        "explanation": "A high fever = febre alta.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🤒",
        "options": [
          "fever",
          "cough",
          "ache",
          "throat"
        ]
      },
      {
        "id": "w3-p14-e3",
        "type": "word-order",
        "prompt": "Monte o pedido na farmácia:",
        "correctAnswer": "I need something for a headache.",
        "explanation": "I need something for a headache.",
        "skillCategory": "grammar",
        "options": [
          "for",
          "something",
          "a",
          "I",
          "need",
          "headache."
        ]
      },
      {
        "id": "w3-p14-e4",
        "type": "listening",
        "prompt": "Ouça a recomendação do farmacêutico:",
        "correctAnswer": "Take this pill twice a day after meals.",
        "explanation": "twice a day after meals.",
        "skillCategory": "listening",
        "audioPhrase": "Take this pill twice a day after meals.",
        "options": [
          "Take this pill twice a day after meals.",
          "Take this syrup three times a day before bed.",
          "Drink plenty of water and rest for two days.",
          "Take one tablet every four hours if fever continues."
        ]
      },
      {
        "id": "w3-p14-e5",
        "type": "translate",
        "prompt": "Traduza: \"Estou com dor de garganta.\"",
        "correctAnswer": "I have a sore throat.",
        "explanation": "a sore throat = dor de garganta.",
        "skillCategory": "reading",
        "options": [
          "I have a sore throat.",
          "I have a throat pain.",
          "My throat is soreache.",
          "I am with sore throat."
        ]
      },
      {
        "id": "w3-p14-e6",
        "type": "multiple-choice",
        "prompt": "Receita médica em inglês é chamada de:",
        "correctAnswer": "Prescription",
        "explanation": "Prescription = receita médica (recipe é receita culinária!).",
        "skillCategory": "vocabulary",
        "options": [
          "Prescription",
          "Medical recipe",
          "Doctor note",
          "Health paper"
        ]
      },
      {
        "id": "w3-p14-e7",
        "type": "word-order",
        "prompt": "Organize o conselho médico:",
        "correctAnswer": "Rest and drink plenty of water.",
        "explanation": "Rest and drink plenty of water.",
        "skillCategory": "grammar",
        "options": [
          "drink",
          "water.",
          "Rest",
          "and",
          "plenty",
          "of"
        ]
      },
      {
        "id": "w3-p14-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Do you need a prescription for these painkillers?",
        "explanation": "painkillers = analgésicos.",
        "skillCategory": "listening",
        "audioPhrase": "Do you need a prescription for these painkillers?",
        "options": [
          "Do you need a prescription for these painkillers?",
          "Do you have any allergies to penicillin?",
          "Can I take this medication without food?",
          "Are these vitamins suitable for children?"
        ]
      },
      {
        "id": "w3-p14-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I have a terrible headache\"",
        "correctAnswer": "I have a terrible headache",
        "explanation": "Muito bem!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I have a terrible headache",
        "phoneticHint": "/aɪ hæv ə ˈter.ə.bəl ˈhed.eɪk/"
      },
      {
        "id": "w3-p14-e10",
        "type": "multiple-choice",
        "prompt": "Qual termo significa \"Dor de dente\"?",
        "correctAnswer": "Toothache",
        "explanation": "Toothache = dor de dente.",
        "skillCategory": "vocabulary",
        "options": [
          "Toothache",
          "Headache",
          "Earache",
          "Backache"
        ]
      }
    ]
  },
  {
    "id": "w3-p15",
    "worldId": 3,
    "phaseNumber": 15,
    "title": "No Médico: Consulta & Diagnóstico",
    "subtitle": "Doctor, appointment, prescription, rest",
    "pedagogicalObjective": "Interagir em uma consulta médica descrevendo sintomas e entendendo orientações.",
    "type": "lesson",
    "icon": "clipboard",
    "cefrLevel": "A2",
    "theorySummary": [
      "Doctor / physician = médico; appointment = consulta marcada.",
      "\"Where does it hurt?\" = Onde dói? \"How long have you had this?\" = Há quanto tempo você está com isso?"
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p15-e1",
        "type": "multiple-choice",
        "prompt": "Como agendar uma consulta médica?",
        "correctAnswer": "I would like to make an appointment.",
        "explanation": "make an appointment = agendar consulta.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🩺",
        "options": [
          "I would like to make an appointment.",
          "I want to reserve a doctor.",
          "I need to book a medical time.",
          "Can I rent a physician?"
        ]
      },
      {
        "id": "w3-p15-e2",
        "type": "fill-blank",
        "prompt": "O médico pergunta onde dói: \"Where does it _____?\"",
        "correctAnswer": "hurt",
        "explanation": "Where does it hurt?",
        "skillCategory": "vocabulary",
        "options": [
          "hurt",
          "pain",
          "sore",
          "break"
        ]
      },
      {
        "id": "w3-p15-e3",
        "type": "word-order",
        "prompt": "Monte o relato do paciente:",
        "correctAnswer": "I have felt dizzy for two days.",
        "explanation": "Dizzy = com tontura.",
        "skillCategory": "grammar",
        "options": [
          "two",
          "dizzy",
          "for",
          "have",
          "I",
          "felt",
          "days."
        ]
      },
      {
        "id": "w3-p15-e4",
        "type": "listening",
        "prompt": "Ouça o diagnóstico do médico:",
        "correctAnswer": "You have a mild flu. Get plenty of rest and drink liquids.",
        "explanation": "a mild flu = uma gripe leve.",
        "skillCategory": "listening",
        "audioPhrase": "You have a mild flu. Get plenty of rest and drink liquids.",
        "options": [
          "You have a mild flu. Get plenty of rest and drink liquids.",
          "You have a severe infection. Take these antibiotics.",
          "Your blood pressure is completely normal today.",
          "You need to take an X-ray of your chest."
        ]
      },
      {
        "id": "w3-p15-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu sou alérgico a penicilina.\"",
        "correctAnswer": "I am allergic to penicillin.",
        "explanation": "I am allergic to...",
        "skillCategory": "reading",
        "options": [
          "I am allergic to penicillin.",
          "I have allergy to penicillin.",
          "I am allergical with penicillin.",
          "My body is allergic of penicillin."
        ]
      },
      {
        "id": "w3-p15-e6",
        "type": "multiple-choice",
        "prompt": "O que significa \"Blood pressure\"?",
        "correctAnswer": "Pressão arterial",
        "explanation": "Blood pressure = pressão arterial.",
        "skillCategory": "vocabulary",
        "options": [
          "Pressão arterial",
          "Exame de sangue",
          "Glicose",
          "Frequência cardíaca"
        ]
      },
      {
        "id": "w3-p15-e7",
        "type": "word-order",
        "prompt": "Organize a orientação médica:",
        "correctAnswer": "Take this medicine with food.",
        "explanation": "Take this medicine with food.",
        "skillCategory": "grammar",
        "options": [
          "medicine",
          "Take",
          "food.",
          "with",
          "this"
        ]
      },
      {
        "id": "w3-p15-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "If your condition worsens, return to the clinic immediately.",
        "explanation": "condition worsens = piorar.",
        "skillCategory": "listening",
        "audioPhrase": "If your condition worsens, return to the clinic immediately.",
        "options": [
          "If your condition worsens, return to the clinic immediately.",
          "If you feel better tomorrow, stop taking the pills.",
          "Come back for a follow-up visit in two weeks.",
          "The nurse will take your temperature now."
        ]
      },
      {
        "id": "w3-p15-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"I have an appointment at three\"",
        "correctAnswer": "I have an appointment at three",
        "explanation": "Perfeita clareza!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I have an appointment at three",
        "phoneticHint": "/aɪ hæv ən əˈpɔɪnt.mənt æt θriː/"
      },
      {
        "id": "w3-p15-e10",
        "type": "multiple-choice",
        "prompt": "Qual termo significa \"Fazer um raio-X\"?",
        "correctAnswer": "Take an X-ray",
        "explanation": "Take an X-ray.",
        "skillCategory": "vocabulary",
        "options": [
          "Take an X-ray",
          "Make an X-ray",
          "Do an X-ray",
          "Have a photo"
        ]
      }
    ]
  },
  {
    "id": "w3-p16",
    "worldId": 3,
    "phaseNumber": 16,
    "title": "Compras de Roupas & Provador",
    "subtitle": "Fitting room, size, color, discount, refund",
    "pedagogicalObjective": "Comprar roupas, experimentar peças no provador e pedir tamanhos.",
    "type": "lesson",
    "icon": "tag",
    "cefrLevel": "A2",
    "theorySummary": [
      "Fitting room = provador. Sizes: Small (S), Medium (M), Large (L), Extra Large (XL).",
      "\"Can I try this on?\" = Posso experimentar? \"Does it fit?\" = Ficou bom/serviu?"
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p16-e1",
        "type": "multiple-choice",
        "prompt": "Como perguntar se pode experimentar uma roupa?",
        "correctAnswer": "Can I try this on?",
        "explanation": "Try on = experimentar roupa.",
        "skillCategory": "vocabulary",
        "visualEmoji": "👔",
        "options": [
          "Can I try this on?",
          "Can I test this cloth?",
          "May I wear this here?",
          "Can I sample this shirt?"
        ]
      },
      {
        "id": "w3-p16-e2",
        "type": "fill-blank",
        "prompt": "Onde se experimenta a roupa: \"Where is the _____ room?\"",
        "correctAnswer": "fitting",
        "explanation": "Fitting room = provador.",
        "skillCategory": "vocabulary",
        "visualEmoji": "👗",
        "options": [
          "fitting",
          "dressing",
          "changing",
          "testing"
        ]
      },
      {
        "id": "w3-p16-e3",
        "type": "word-order",
        "prompt": "Monte o pedido de tamanho maior:",
        "correctAnswer": "Do you have this in a large?",
        "explanation": "Do you have this in a large?",
        "skillCategory": "grammar",
        "options": [
          "have",
          "Do",
          "in",
          "large?",
          "this",
          "you",
          "a"
        ]
      },
      {
        "id": "w3-p16-e4",
        "type": "listening",
        "prompt": "Ouça a pergunta do atendente:",
        "correctAnswer": "How does it fit? Is it too tight or too loose?",
        "explanation": "tight = apertado; loose = folgado.",
        "skillCategory": "listening",
        "audioPhrase": "How does it fit? Is it too tight or too loose?",
        "options": [
          "How does it fit? Is it too tight or too loose?",
          "What color would you like to see next?",
          "Would you like to try the matching shoes as well?",
          "Do you want to pay with debit or credit card?"
        ]
      },
      {
        "id": "w3-p16-e5",
        "type": "translate",
        "prompt": "Traduza: \"Esta camisa ficou perfeita em mim.\"",
        "correctAnswer": "This shirt fits me perfectly.",
        "explanation": "fits me perfectly = me serviu perfeitamente.",
        "skillCategory": "reading",
        "options": [
          "This shirt fits me perfectly.",
          "This shirt is matching me.",
          "This shirt wears me well.",
          "This shirt sizes me right."
        ]
      },
      {
        "id": "w3-p16-e6",
        "type": "multiple-choice",
        "prompt": "O que significa a letra \"M\" na etiqueta de roupas?",
        "correctAnswer": "Medium (Médio)",
        "explanation": "S = Small; M = Medium; L = Large.",
        "skillCategory": "vocabulary",
        "options": [
          "Medium (Médio)",
          "Mini",
          "Maximum",
          "Modern"
        ]
      },
      {
        "id": "w3-p16-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta sobre desconto:",
        "correctAnswer": "Is there any discount on this item?",
        "explanation": "Is there any discount on this item?",
        "skillCategory": "grammar",
        "options": [
          "discount",
          "Is",
          "any",
          "there",
          "item?",
          "this",
          "on"
        ]
      },
      {
        "id": "w3-p16-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "You can return or exchange this within thirty days with your receipt.",
        "explanation": "return or exchange = devolver ou trocar.",
        "skillCategory": "listening",
        "audioPhrase": "You can return or exchange this within thirty days with your receipt.",
        "options": [
          "You can return or exchange this within thirty days with your receipt.",
          "This final sale item cannot be returned or refunded.",
          "We have this jacket available in black and dark blue.",
          "The fitting rooms are located on the second floor."
        ]
      },
      {
        "id": "w3-p16-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"Can I try this jacket on?\"",
        "correctAnswer": "Can I try this jacket on",
        "explanation": "Muito bem!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Can I try this jacket on",
        "phoneticHint": "/kæn aɪ traɪ ðɪs ˈdʒæk.ɪt ɑːn/"
      },
      {
        "id": "w3-p16-e10",
        "type": "multiple-choice",
        "prompt": "Se uma roupa está muito larga e frouxa, dizemos que está:",
        "correctAnswer": "Too loose",
        "explanation": "Too loose = folgada demais.",
        "skillCategory": "vocabulary",
        "options": [
          "Too loose",
          "Too tight",
          "Too small",
          "Too short"
        ]
      }
    ]
  },
  {
    "id": "w3-p17",
    "worldId": 3,
    "phaseNumber": 17,
    "title": "Lidando com Dinheiro & Pagamentos",
    "subtitle": "Cash, credit card, change, receipt, cost",
    "pedagogicalObjective": "Efetuar pagamentos, conferir troco e recibos em transações financeiras.",
    "type": "lesson",
    "icon": "dollar-sign",
    "cefrLevel": "A2",
    "theorySummary": [
      "Cash = dinheiro em espécie; credit/debit card = cartão de crédito/débito.",
      "Change = troco; receipt = recibo/comprovante; ATM = caixa eletrônico."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p17-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Pagar em dinheiro vivo\"?",
        "correctAnswer": "Pay in cash (ou with cash)",
        "explanation": "In cash = em dinheiro em espécie.",
        "skillCategory": "vocabulary",
        "visualEmoji": "💵",
        "options": [
          "Pay in cash (ou with cash)",
          "Pay with coins",
          "Pay by paper",
          "Pay with bill"
        ]
      },
      {
        "id": "w3-p17-e2",
        "type": "fill-blank",
        "prompt": "O comprovante da compra: \"Here is your _____ and your change.\"",
        "correctAnswer": "receipt",
        "explanation": "Receipt (/rɪˈsiːt/ com p mudo) = recibo.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🧾",
        "options": [
          "receipt",
          "recipe",
          "ticket",
          "billboard"
        ]
      },
      {
        "id": "w3-p17-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta sobre forma de pagamento:",
        "correctAnswer": "Do you accept credit cards?",
        "explanation": "Do you accept credit cards?",
        "skillCategory": "grammar",
        "options": [
          "accept",
          "cards?",
          "Do",
          "credit",
          "you"
        ]
      },
      {
        "id": "w3-p17-e4",
        "type": "listening",
        "prompt": "Ouça o valor total e o troco:",
        "correctAnswer": "That will be eighteen dollars. Here is two dollars change.",
        "explanation": "eighteen dollars ($18).",
        "skillCategory": "listening",
        "audioPhrase": "That will be eighteen dollars. Here is two dollars change.",
        "options": [
          "That will be eighteen dollars. Here is two dollars change.",
          "That will be eighty dollars. Here is ten dollars change.",
          "That costs twelve dollars. Do you have exact change?",
          "The total is fifteen dollars and fifty cents."
        ]
      },
      {
        "id": "w3-p17-e5",
        "type": "translate",
        "prompt": "Traduza: \"Pode ficar com o troco.\"",
        "correctAnswer": "Keep the change.",
        "explanation": "Keep the change = Fique com o troco.",
        "skillCategory": "reading",
        "options": [
          "Keep the change.",
          "Stay with the change.",
          "Hold the money.",
          "Leave the change here."
        ]
      },
      {
        "id": "w3-p17-e6",
        "type": "multiple-choice",
        "prompt": "Na palavra RECEIPT (recibo), qual letra é muda?",
        "correctAnswer": "A letra P (soa como /rɪˈsiːt/)",
        "explanation": "O P é completamente silencioso.",
        "skillCategory": "vocabulary",
        "options": [
          "A letra P (soa como /rɪˈsiːt/)",
          "A letra R",
          "A letra C",
          "A letra T"
        ]
      },
      {
        "id": "w3-p17-e7",
        "type": "word-order",
        "prompt": "Organize a pergunta sobre caixa eletrônico:",
        "correctAnswer": "Is there an ATM near here?",
        "explanation": "ATM = caixa eletrônico.",
        "skillCategory": "grammar",
        "options": [
          "ATM",
          "near",
          "there",
          "an",
          "here?",
          "Is"
        ]
      },
      {
        "id": "w3-p17-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Please insert your card and enter your PIN code.",
        "explanation": "insert your card and enter PIN.",
        "skillCategory": "listening",
        "audioPhrase": "Please insert your card and enter your PIN code.",
        "options": [
          "Please insert your card and enter your PIN code.",
          "Please tap your phone on the payment terminal.",
          "The machine is currently out of cash.",
          "Your transaction has been approved successfully."
        ]
      },
      {
        "id": "w3-p17-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"Keep the change, thank you!\"",
        "correctAnswer": "Keep the change thank you",
        "explanation": "Perfeita atitude e pronúncia!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Keep the change thank you",
        "phoneticHint": "/kiːp ðə tʃeɪndʒ θæŋk juː/"
      },
      {
        "id": "w3-p17-e10",
        "type": "multiple-choice",
        "prompt": "Caixa eletrônico em inglês é conhecido pela sigla:",
        "correctAnswer": "ATM",
        "explanation": "ATM = Automated Teller Machine.",
        "skillCategory": "vocabulary",
        "options": [
          "ATM",
          "CTA",
          "TMA",
          "MTA"
        ]
      }
    ]
  },
  {
    "id": "w3-p18",
    "worldId": 3,
    "phaseNumber": 18,
    "title": "Hobbies & Atividades de Lazer",
    "subtitle": "Playing music, painting, gaming, reading",
    "pedagogicalObjective": "Conversar sobre interesses pessoais e atividades nos momentos livres.",
    "type": "lesson",
    "icon": "music",
    "cefrLevel": "A2",
    "theorySummary": [
      "Verbos de lazer: play the guitar, take photos, paint, garden, cook, read, play video games.",
      "\"What do you do in your free time?\" = O que você faz no seu tempo livre?"
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p18-e1",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Eu toco violão no meu tempo livre\"?",
        "correctAnswer": "I play the guitar in my free time.",
        "explanation": "play the guitar (instrumento leva the).",
        "skillCategory": "vocabulary",
        "visualEmoji": "🎸",
        "options": [
          "I play the guitar in my free time.",
          "I play guitar in my free hours.",
          "I touch the guitar in free time.",
          "I do guitar on my free moments."
        ]
      },
      {
        "id": "w3-p18-e2",
        "type": "fill-blank",
        "prompt": "Complete com o hobby: \"She loves taking _____ with her camera.\"",
        "correctAnswer": "photos",
        "explanation": "take photos = tirar fotos.",
        "skillCategory": "vocabulary",
        "visualEmoji": "📸",
        "options": [
          "photos",
          "books",
          "paints",
          "movies"
        ]
      },
      {
        "id": "w3-p18-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta sobre passatempos:",
        "correctAnswer": "What do you do in your free time?",
        "explanation": "What do you do in your free time?",
        "skillCategory": "grammar",
        "options": [
          "do",
          "do",
          "in",
          "your",
          "free",
          "What",
          "you",
          "time?"
        ]
      },
      {
        "id": "w3-p18-e4",
        "type": "listening",
        "prompt": "Ouça o hobby descrito:",
        "correctAnswer": "I find painting landscapes very relaxing on weekends.",
        "explanation": "painting landscapes.",
        "skillCategory": "listening",
        "audioPhrase": "I find painting landscapes very relaxing on weekends.",
        "options": [
          "I find painting landscapes very relaxing on weekends.",
          "I enjoy playing video games with my brother on weekends.",
          "I love hiking in the mountains every Sunday morning.",
          "I listen to classical music while studying."
        ]
      },
      {
        "id": "w3-p18-e5",
        "type": "translate",
        "prompt": "Traduza: \"Meu passatempo favorito é cozinhar.\"",
        "correctAnswer": "My favorite hobby is cooking.",
        "explanation": "My favorite hobby is cooking.",
        "skillCategory": "reading",
        "options": [
          "My favorite hobby is cooking.",
          "My preferred hobby is to cook.",
          "My best hobby is make food.",
          "My favorite hobby are cook."
        ]
      },
      {
        "id": "w3-p18-e6",
        "type": "multiple-choice",
        "prompt": "Qual frase expressa um passatempo ao ar livre?",
        "correctAnswer": "I enjoy hiking in the mountains.",
        "explanation": "Hiking = caminhada / trilha na natureza.",
        "skillCategory": "vocabulary",
        "options": [
          "I enjoy hiking in the mountains.",
          "I like playing computer games.",
          "I love watching TV series.",
          "I read books before bed."
        ]
      },
      {
        "id": "w3-p18-e7",
        "type": "word-order",
        "prompt": "Organize a preferência de lazer:",
        "correctAnswer": "We often play board games together.",
        "explanation": "Board games = jogos de tabuleiro.",
        "skillCategory": "grammar",
        "options": [
          "games",
          "play",
          "We",
          "board",
          "together.",
          "often"
        ]
      },
      {
        "id": "w3-p18-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "He has been collecting vintage vinyl records for years.",
        "explanation": "collecting vinyl records.",
        "skillCategory": "listening",
        "audioPhrase": "He has been collecting vintage vinyl records for years.",
        "options": [
          "He has been collecting vintage vinyl records for years.",
          "He has been playing the drums in a rock band for years.",
          "She has been writing short stories since college.",
          "They love going to modern art museums together."
        ]
      },
      {
        "id": "w3-p18-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"In my free time I love reading\"",
        "correctAnswer": "In my free time I love reading",
        "explanation": "Excelente fluência!",
        "skillCategory": "pronunciation",
        "audioPhrase": "In my free time I love reading",
        "phoneticHint": "/ɪn maɪ friː taɪm aɪ lʌv ˈriː.dɪŋ/"
      },
      {
        "id": "w3-p18-e10",
        "type": "multiple-choice",
        "prompt": "Jogos de tabuleiro (xadrez, banco imobiliário, etc.) são chamados de:",
        "correctAnswer": "Board games",
        "explanation": "Board games.",
        "skillCategory": "vocabulary",
        "options": [
          "Board games",
          "Table sports",
          "Card matches",
          "Wood games"
        ]
      }
    ]
  },
  {
    "id": "w3-p19",
    "worldId": 3,
    "phaseNumber": 19,
    "title": "Esportes & Exercícios Físicos",
    "subtitle": "Play football, do yoga, go swimming",
    "pedagogicalObjective": "Diferenciar os verbos PLAY, DO e GO com atividades esportivas.",
    "type": "lesson",
    "icon": "activity",
    "cefrLevel": "A2",
    "theorySummary": [
      "PLAY para esportes coletivos e com bola: play soccer, play basketball, play tennis.",
      "DO para lutas, artes marciais e exercícios individuais: do yoga, do judo, do aerobics.",
      "GO para atividades que terminam em -ING: go swimming, go running, go cycling."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p19-e1",
        "type": "multiple-choice",
        "prompt": "Qual verbo usamos com SOCCER (futebol)?",
        "correctAnswer": "PLAY (play soccer)",
        "explanation": "Esportes com bola e times = PLAY.",
        "skillCategory": "vocabulary",
        "visualEmoji": "⚽",
        "options": [
          "PLAY (play soccer)",
          "DO (do soccer)",
          "GO (go soccer)",
          "MAKE (make soccer)"
        ]
      },
      {
        "id": "w3-p19-e2",
        "type": "fill-blank",
        "prompt": "Complete com o verbo correto para yoga: \"I _____ yoga every morning.\"",
        "correctAnswer": "do",
        "explanation": "Atividades como yoga e ginástica = DO.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🧘‍♀️",
        "options": [
          "do",
          "play",
          "go",
          "make"
        ]
      },
      {
        "id": "w3-p19-e3",
        "type": "word-order",
        "prompt": "Monte a frase com atividade em -ING:",
        "correctAnswer": "They go running every morning.",
        "explanation": "Atividades em -ing usam GO: go running.",
        "skillCategory": "grammar",
        "options": [
          "running",
          "every",
          "go",
          "They",
          "morning."
        ]
      },
      {
        "id": "w3-p19-e4",
        "type": "listening",
        "prompt": "Ouça a rotina esportiva:",
        "correctAnswer": "I go swimming twice a week at the community pool.",
        "explanation": "go swimming.",
        "skillCategory": "listening",
        "audioPhrase": "I go swimming twice a week at the community pool.",
        "options": [
          "I go swimming twice a week at the community pool.",
          "I play tennis three times a week with my friend.",
          "I do karate every Saturday morning at the gym.",
          "I go cycling around the lake every afternoon."
        ]
      },
      {
        "id": "w3-p19-e5",
        "type": "translate",
        "prompt": "Traduza: \"Você pratica algum esporte?\"",
        "correctAnswer": "Do you play any sports?",
        "explanation": "Do you play any sports?",
        "skillCategory": "reading",
        "options": [
          "Do you play any sports?",
          "Do you make any sports?",
          "Are you sports player?",
          "Do you have sports?"
        ]
      },
      {
        "id": "w3-p19-e6",
        "type": "multiple-choice",
        "prompt": "Qual combinação está CORRETA?",
        "correctAnswer": "Go swimming / Do yoga / Play tennis",
        "explanation": "Regra de ouro: Play (bola), Do (marcial/individual), Go (-ing).",
        "skillCategory": "vocabulary",
        "options": [
          "Go swimming / Do yoga / Play tennis",
          "Do tennis / Play swimming / Go yoga",
          "Make running / Do soccer / Play karate",
          "Go yoga / Play running / Do football"
        ]
      },
      {
        "id": "w3-p19-e7",
        "type": "word-order",
        "prompt": "Organize a frequência esportiva:",
        "correctAnswer": "I go to the gym three times a week.",
        "explanation": "I go to the gym three times a week.",
        "skillCategory": "grammar",
        "options": [
          "gym",
          "three",
          "times",
          "the",
          "I",
          "to",
          "a",
          "week.",
          "go"
        ]
      },
      {
        "id": "w3-p19-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "She enjoys playing volleyball on the beach during summer.",
        "explanation": "playing volleyball.",
        "skillCategory": "listening",
        "audioPhrase": "She enjoys playing volleyball on the beach during summer.",
        "options": [
          "She enjoys playing volleyball on the beach during summer.",
          "She loves playing basketball at the sports club.",
          "They enjoy doing gymnastics after school every day.",
          "He goes surfing early in the morning when waves are high."
        ]
      },
      {
        "id": "w3-p19-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I go running three times a week\"",
        "correctAnswer": "I go running three times a week",
        "explanation": "Perfeita clareza!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I go running three times a week",
        "phoneticHint": "/aɪ ɡoʊ ˈrʌn.ɪŋ θriː taɪmz ə wiːk/"
      },
      {
        "id": "w3-p19-e10",
        "type": "multiple-choice",
        "prompt": "Academia de musculação/ginástica em inglês é comumente chamada de:",
        "correctAnswer": "Gym (gymnasium)",
        "explanation": "Gym = academia.",
        "skillCategory": "vocabulary",
        "options": [
          "Gym (gymnasium)",
          "Academy",
          "Sport room",
          "Body shop"
        ]
      }
    ]
  },
  {
    "id": "w3-p20",
    "worldId": 3,
    "phaseNumber": 20,
    "title": "Baú da Sabedoria: Cidadão do Mundo",
    "subtitle": "Ponto de verificação intermediário e gemas",
    "pedagogicalObjective": "Consolidar clima, saúde, consultas, compras de roupas e esportes.",
    "type": "chest",
    "icon": "award",
    "cefrLevel": "A2",
    "theorySummary": [
      "Segundo Baú do Mundo 3 conquistado! Revise vocabulário de saúde, esportes, provadores e pagamentos."
    ],
    "xpReward": 55,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w3-p20-e1",
        "type": "multiple-choice",
        "prompt": "[Revisão] \"I _____ yoga on Mondays and I _____ swimming on Fridays.\"",
        "correctAnswer": "do / go",
        "explanation": "Do yoga e Go swimming.",
        "skillCategory": "vocabulary",
        "options": [
          "do / go",
          "play / do",
          "go / play",
          "make / go"
        ]
      },
      {
        "id": "w3-p20-e2",
        "type": "fill-blank",
        "prompt": "[Revisão] \"I have a terrible _____ in my head.\"",
        "correctAnswer": "headache",
        "explanation": "headache = dor de cabeça.",
        "skillCategory": "vocabulary",
        "options": [
          "headache",
          "toothache",
          "sore",
          "feverache"
        ]
      },
      {
        "id": "w3-p20-e3",
        "type": "word-order",
        "prompt": "[Revisão] Monte a pergunta no provador:",
        "correctAnswer": "Can I try this on, please?",
        "explanation": "Can I try this on, please?",
        "skillCategory": "grammar",
        "options": [
          "this",
          "on,",
          "try",
          "I",
          "Can",
          "please?"
        ]
      },
      {
        "id": "w3-p20-e4",
        "type": "listening",
        "prompt": "[Revisão] Ouça e marque:",
        "correctAnswer": "The weather forecast predicts heavy rain this weekend.",
        "explanation": "weather forecast predicts...",
        "skillCategory": "listening",
        "audioPhrase": "The weather forecast predicts heavy rain this weekend.",
        "options": [
          "The weather forecast predicts heavy rain this weekend.",
          "The weather forecast predicts sunny days all week.",
          "The news says the flight to London was cancelled.",
          "The temperature will drop below zero tonight."
        ]
      },
      {
        "id": "w3-p20-e5",
        "type": "multiple-choice",
        "prompt": "[Revisão] Qual é o plural irregular de \"FOOT\"?",
        "correctAnswer": "Feet",
        "explanation": "One foot, two feet.",
        "skillCategory": "vocabulary",
        "options": [
          "Feet",
          "Foots",
          "Feets",
          "Footes"
        ]
      },
      {
        "id": "w3-p20-e6",
        "type": "translate",
        "prompt": "[Revisão] Traduza: \"Pode ficar com o troco.\"",
        "correctAnswer": "Keep the change.",
        "explanation": "Keep the change.",
        "skillCategory": "reading",
        "options": [
          "Keep the change.",
          "Hold the money.",
          "Stay with change.",
          "Leave the cash."
        ]
      },
      {
        "id": "w3-p20-e7",
        "type": "word-order",
        "prompt": "[Revisão] Ordene a consulta médica:",
        "correctAnswer": "I have an appointment with the doctor.",
        "explanation": "I have an appointment with the doctor.",
        "skillCategory": "grammar",
        "options": [
          "appointment",
          "I",
          "have",
          "doctor.",
          "an",
          "the",
          "with"
        ]
      },
      {
        "id": "w3-p20-e8",
        "type": "speaking-repeat",
        "prompt": "[Revisão] Fale no microfone: \"What is the weather like today?\"",
        "correctAnswer": "What is the weather like today",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "What is the weather like today",
        "phoneticHint": "/wɑːt ɪz ðə ˈweð.ər laɪk təˈdeɪ/"
      },
      {
        "id": "w3-p20-e9",
        "type": "fill-blank",
        "prompt": "[Revisão] \"She loves taking photos _____ her camera.\"",
        "correctAnswer": "with",
        "explanation": "with her camera.",
        "skillCategory": "vocabulary",
        "options": [
          "with",
          "at",
          "by",
          "on"
        ]
      },
      {
        "id": "w3-p20-e10",
        "type": "multiple-choice",
        "prompt": "[Revisão] \"Prescription\" em contexto médico significa:",
        "correctAnswer": "Receita médica",
        "explanation": "Prescription = receita médica.",
        "skillCategory": "vocabulary",
        "options": [
          "Receita médica",
          "Comprovante fiscal",
          "Ficha de inscrição",
          "Atestado de óbito"
        ]
      },
      {
        "id": "w3-p20-e11",
        "type": "translate",
        "prompt": "[Revisão] \"Onde fica o provador?\"",
        "correctAnswer": "Where is the fitting room?",
        "explanation": "fitting room.",
        "skillCategory": "reading",
        "options": [
          "Where is the fitting room?",
          "Where is the dressing hall?",
          "Where are the clothing room?",
          "Where is the trying box?"
        ]
      }
    ]
  },
  {
    "id": "w3-p21",
    "worldId": 3,
    "phaseNumber": 21,
    "title": "A Rotina Matinal Perfeita",
    "subtitle": "Brushing teeth, taking a shower, getting dressed",
    "pedagogicalObjective": "Descrever ações sequenciais matinais em detalhes.",
    "type": "lesson",
    "icon": "sunrise",
    "cefrLevel": "A2",
    "theorySummary": [
      "Wake up (acordar), get up (levantar da cama), brush teeth, take a shower, comb hair, get dressed, have breakfast."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p21-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Escovar os dentes\" em inglês?",
        "correctAnswer": "Brush my teeth",
        "explanation": "Brush my teeth.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🪥",
        "options": [
          "Brush my teeth",
          "Wash my teeth",
          "Clean my tooths",
          "Make my mouth"
        ]
      },
      {
        "id": "w3-p21-e2",
        "type": "fill-blank",
        "prompt": "Diferença entre acordar e levantar: \"I wake up at 6:30, but I _____ at 7:00.\"",
        "correctAnswer": "get up",
        "explanation": "Wake up = abrir os olhos; Get up = levantar da cama.",
        "skillCategory": "vocabulary",
        "visualEmoji": "⏰",
        "options": [
          "get up",
          "sleep up",
          "stand on",
          "wake off"
        ]
      },
      {
        "id": "w3-p21-e3",
        "type": "word-order",
        "prompt": "Monte a sequência matinal:",
        "correctAnswer": "I take a shower after breakfast.",
        "explanation": "I take a shower after breakfast.",
        "skillCategory": "grammar",
        "options": [
          "shower",
          "I",
          "take",
          "after",
          "breakfast.",
          "a"
        ]
      },
      {
        "id": "w3-p21-e4",
        "type": "listening",
        "prompt": "Ouça o relato matinal:",
        "correctAnswer": "First I drink a glass of water, and then I stretch for ten minutes.",
        "explanation": "First I drink... then I stretch.",
        "skillCategory": "listening",
        "audioPhrase": "First I drink a glass of water, and then I stretch for ten minutes.",
        "options": [
          "First I drink a glass of water, and then I stretch for ten minutes.",
          "First I take a cold shower, and then I prepare black coffee.",
          "First I read the morning news, and then I wake up the kids.",
          "I check my phone immediately after my alarm goes off."
        ]
      },
      {
        "id": "w3-p21-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu me visto rapidamente.\"",
        "correctAnswer": "I get dressed quickly.",
        "explanation": "get dressed quickly.",
        "skillCategory": "reading",
        "options": [
          "I get dressed quickly.",
          "I wear me quickly.",
          "I dress me fast.",
          "I put clothes rapidly."
        ]
      },
      {
        "id": "w3-p21-e6",
        "type": "multiple-choice",
        "prompt": "Qual ação significa pentear o cabelo?",
        "correctAnswer": "Comb my hair",
        "explanation": "Comb / brush my hair.",
        "skillCategory": "vocabulary",
        "options": [
          "Comb my hair",
          "Brush my head",
          "Cut my hair",
          "Wash my hair"
        ]
      },
      {
        "id": "w3-p21-e7",
        "type": "word-order",
        "prompt": "Organize a rotina:",
        "correctAnswer": "She leaves the house at eight.",
        "explanation": "She leaves the house at eight.",
        "skillCategory": "grammar",
        "options": [
          "house",
          "leaves",
          "eight.",
          "at",
          "She",
          "the"
        ]
      },
      {
        "id": "w3-p21-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "He never skips breakfast because he needs energy for work.",
        "explanation": "skips breakfast = pula o café.",
        "skillCategory": "listening",
        "audioPhrase": "He never skips breakfast because he needs energy for work.",
        "options": [
          "He never skips breakfast because he needs energy for work.",
          "He always has coffee on his way to the office.",
          "She prepares breakfast for the whole family every day.",
          "They usually have breakfast together at seven o'clock."
        ]
      },
      {
        "id": "w3-p21-e9",
        "type": "speaking-repeat",
        "prompt": "Fale sua rotina matinal: \"I brush my teeth and get dressed\"",
        "correctAnswer": "I brush my teeth and get dressed",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I brush my teeth and get dressed",
        "phoneticHint": "/aɪ brʌʃ maɪ tiːθ ənd ɡet drest/"
      },
      {
        "id": "w3-p21-e10",
        "type": "multiple-choice",
        "prompt": "O que significa \"Skip breakfast\"?",
        "correctAnswer": "Pular o café da manhã / não tomar café",
        "explanation": "Skip = pular/omitir uma refeição.",
        "skillCategory": "vocabulary",
        "options": [
          "Pular o café da manhã / não tomar café",
          "Preparar o café rapidamente",
          "Tomar café reforçado",
          "Comer fora de casa"
        ]
      }
    ]
  },
  {
    "id": "w3-p22",
    "worldId": 3,
    "phaseNumber": 22,
    "title": "No Trabalho / Escola: Ambiente & Tarefas",
    "subtitle": "Colleagues, meetings, schedule, homework",
    "pedagogicalObjective": "Falar sobre o dia a dia profissional e acadêmico.",
    "type": "lesson",
    "icon": "briefcase",
    "cefrLevel": "A2",
    "theorySummary": [
      "Trabalho/Escola: colleague/coworker (colega), meeting (reunião), deadline (prazo), schedule (agenda/cronograma), homework (tarefa)."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p22-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Reunião de trabalho\" em inglês?",
        "correctAnswer": "Meeting",
        "explanation": "Meeting = reunião de trabalho. Reunion é reencontro de família/amigos!",
        "skillCategory": "vocabulary",
        "visualEmoji": "👥",
        "options": [
          "Meeting",
          "Reunion (reunião familiar)",
          "Conference call",
          "Appointment"
        ]
      },
      {
        "id": "w3-p22-e2",
        "type": "fill-blank",
        "prompt": "Complete com o prazo final: \"The project _____ is tomorrow at 5 pm.\"",
        "correctAnswer": "deadline",
        "explanation": "Deadline = prazo final de entrega.",
        "skillCategory": "vocabulary",
        "visualEmoji": "📅",
        "options": [
          "deadline",
          "schedule",
          "finish",
          "timebox"
        ]
      },
      {
        "id": "w3-p22-e3",
        "type": "word-order",
        "prompt": "Monte a frase de tarefas:",
        "correctAnswer": "I have a very busy schedule today.",
        "explanation": "a very busy schedule = uma agenda muito cheia.",
        "skillCategory": "grammar",
        "options": [
          "have",
          "busy",
          "schedule",
          "today.",
          "a",
          "I",
          "very"
        ]
      },
      {
        "id": "w3-p22-e4",
        "type": "listening",
        "prompt": "Ouça a conversa de trabalho:",
        "correctAnswer": "Could you send me the updated presentation by noon?",
        "explanation": "send me the updated presentation...",
        "skillCategory": "listening",
        "audioPhrase": "Could you send me the updated presentation by noon?",
        "options": [
          "Could you send me the updated presentation by noon?",
          "Can we reschedule our team meeting for tomorrow morning?",
          "Have you finished reviewing the financial report yet?",
          "I will email you the contract as soon as I arrive."
        ]
      },
      {
        "id": "w3-p22-e5",
        "type": "translate",
        "prompt": "Traduza: \"Meus colegas são muito profissionais.\"",
        "correctAnswer": "My colleagues are very professional.",
        "explanation": "My colleagues are very professional.",
        "skillCategory": "reading",
        "options": [
          "My colleagues are very professional.",
          "My coworkers are very friendly.",
          "My partners are very hardworking.",
          "My classmates are very smart."
        ]
      },
      {
        "id": "w3-p22-e6",
        "type": "multiple-choice",
        "prompt": "Cuidado com o falso cognato: \"REUNION\" em inglês geralmente significa:",
        "correctAnswer": "Reencontro / confraternização (de família ou ex-alunos)",
        "explanation": "Reunion = reencontro (family reunion, high school reunion).",
        "skillCategory": "vocabulary",
        "options": [
          "Reencontro / confraternização (de família ou ex-alunos)",
          "Reunião de negócios",
          "Entrevista de emprego",
          "Assembleia de condomínio"
        ]
      },
      {
        "id": "w3-p22-e7",
        "type": "word-order",
        "prompt": "Organize a frase de estudante:",
        "correctAnswer": "I finish my homework before dinner.",
        "explanation": "I finish my homework before dinner.",
        "skillCategory": "grammar",
        "options": [
          "finish",
          "my",
          "I",
          "homework",
          "dinner.",
          "before"
        ]
      },
      {
        "id": "w3-p22-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "The manager announced that our department reached its monthly goal.",
        "explanation": "reached its monthly goal.",
        "skillCategory": "listening",
        "audioPhrase": "The manager announced that our department reached its monthly goal.",
        "options": [
          "The manager announced that our department reached its monthly goal.",
          "The director called an emergency meeting for all employees.",
          "Our team will start the new project next Monday morning.",
          "The company will hire three new software developers."
        ]
      },
      {
        "id": "w3-p22-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"I have a meeting at ten\"",
        "correctAnswer": "I have a meeting at ten",
        "explanation": "Perfeito!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I have a meeting at ten",
        "phoneticHint": "/aɪ hæv ə ˈmiː.tɪŋ æt ten/"
      },
      {
        "id": "w3-p22-e10",
        "type": "multiple-choice",
        "prompt": "A palavra \"Homework\" (lição de casa) é:",
        "correctAnswer": "Incontável (nunca dizemos \"homeworks\")",
        "explanation": "Homework é incontável: \"a lot of homework\".",
        "skillCategory": "vocabulary",
        "options": [
          "Incontável (nunca dizemos \"homeworks\")",
          "Contável regular",
          "Sempre usada no plural",
          "Um verbo transitivo"
        ]
      }
    ]
  },
  {
    "id": "w3-p23",
    "worldId": 3,
    "phaseNumber": 23,
    "title": "Sentimentos & Emoções",
    "subtitle": "Excited, nervous, relaxed, bored, proud",
    "pedagogicalObjective": "Expressar estados emocionais com vocabulário rico e nuances.",
    "type": "lesson",
    "icon": "heart",
    "cefrLevel": "A2",
    "theorySummary": [
      "Excited (empolgado/animado), nervous (nervoso/ansioso), relaxed (relaxado), bored (entediado), proud (orgulhoso), angry (bravo/irritado)."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p23-e1",
        "type": "multiple-choice",
        "prompt": "Cuidado com falso cognato: \"EXCITED\" em inglês significa:",
        "correctAnswer": "Empolgado / animado / entusiasmado",
        "explanation": "Excited = muito feliz e animado com algo bom que vai acontecer!",
        "skillCategory": "vocabulary",
        "visualEmoji": "🤩",
        "options": [
          "Empolgado / animado / entusiasmado",
          "Excitado sexualmente",
          "Nervoso com raiva",
          "Assustado"
        ]
      },
      {
        "id": "w3-p23-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"The movie was so slow that I felt completely _____.\"",
        "correctAnswer": "bored",
        "explanation": "Bored = entediado.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🥱",
        "options": [
          "bored",
          "excited",
          "proud",
          "nervous"
        ]
      },
      {
        "id": "w3-p23-e3",
        "type": "word-order",
        "prompt": "Monte a frase de orgulho:",
        "correctAnswer": "I am proud of your achievements.",
        "explanation": "Proud of = orgulhoso de.",
        "skillCategory": "grammar",
        "options": [
          "proud",
          "am",
          "your",
          "I",
          "of",
          "achievements."
        ]
      },
      {
        "id": "w3-p23-e4",
        "type": "listening",
        "prompt": "Ouça o sentimento expresso:",
        "correctAnswer": "I was really nervous before my job interview, but everything went great.",
        "explanation": "really nervous before job interview.",
        "skillCategory": "listening",
        "audioPhrase": "I was really nervous before my job interview, but everything went great.",
        "options": [
          "I was really nervous before my job interview, but everything went great.",
          "I was very excited about my new job interview yesterday morning.",
          "She felt completely relaxed during her English oral exam.",
          "He was disappointed with the test results despite studying hard."
        ]
      },
      {
        "id": "w3-p23-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu estou muito empolgado com a viagem.\"",
        "correctAnswer": "I am very excited about the trip.",
        "explanation": "excited about the trip.",
        "skillCategory": "reading",
        "options": [
          "I am very excited about the trip.",
          "I am very nervous about the travel.",
          "I am very happy with the journey.",
          "I am excited for the flight."
        ]
      },
      {
        "id": "w3-p23-e6",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Relaxado e calmo\"?",
        "correctAnswer": "Relaxed and calm",
        "explanation": "Relaxed and calm.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🧘",
        "options": [
          "Relaxed and calm",
          "Tired and bored",
          "Angry and upset",
          "Nervous and worried"
        ]
      },
      {
        "id": "w3-p23-e7",
        "type": "word-order",
        "prompt": "Organize a emoção:",
        "correctAnswer": "He is upset about the news.",
        "explanation": "Upset = chateado / aborrecido.",
        "skillCategory": "grammar",
        "options": [
          "upset",
          "news.",
          "the",
          "about",
          "is",
          "He"
        ]
      },
      {
        "id": "w3-p23-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Her parents were so proud when she graduated from university.",
        "explanation": "so proud when she graduated.",
        "skillCategory": "listening",
        "audioPhrase": "Her parents were so proud when she graduated from university.",
        "options": [
          "Her parents were so proud when she graduated from university.",
          "Her friends threw a surprise party for her graduation.",
          "Her mother was very emotional during the ceremony.",
          "She was excited to start her master's degree in London."
        ]
      },
      {
        "id": "w3-p23-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"I am so excited about this!\"",
        "correctAnswer": "I am so excited about this",
        "explanation": "Excelente entonação e entusiasmo!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am so excited about this",
        "phoneticHint": "/aɪ æm soʊ ɪkˈsaɪ.t̬ɪd əˈbaʊt ðɪs/"
      },
      {
        "id": "w3-p23-e10",
        "type": "multiple-choice",
        "prompt": "Qual adjetivo descreve alguém que está chateado ou contrariado?",
        "correctAnswer": "Upset",
        "explanation": "Upset = chateado / chateada.",
        "skillCategory": "vocabulary",
        "options": [
          "Upset",
          "Relaxed",
          "Glad",
          "Pleased"
        ]
      }
    ]
  },
  {
    "id": "w3-p24",
    "worldId": 3,
    "phaseNumber": 24,
    "title": "Feriados & Celebrações",
    "subtitle": "Christmas, New Year, Birthday, Party",
    "pedagogicalObjective": "Felicitar pessoas e falar sobre datas comemorativas e tradições.",
    "type": "lesson",
    "icon": "gift",
    "cefrLevel": "A2",
    "theorySummary": [
      "Celebrações: Christmas (Natal), New Year's Eve (Réveillon), Birthday (aniversário), Thanksgiving (Ação de Graças).",
      "Felicitações: Happy Birthday!, Merry Christmas!, Happy New Year!, Congratulations!"
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p24-e1",
        "type": "multiple-choice",
        "prompt": "Como desejar \"Feliz Natal\" em inglês tradicionalmente?",
        "correctAnswer": "Merry Christmas!",
        "explanation": "Merry Christmas!",
        "skillCategory": "vocabulary",
        "visualEmoji": "🎄",
        "options": [
          "Merry Christmas!",
          "Happy Christmas!",
          "Good Christmas!",
          "Joy Christmas!"
        ]
      },
      {
        "id": "w3-p24-e2",
        "type": "fill-blank",
        "prompt": "Ao cumprimentar alguém pelo aniversário: \"Happy _____ to you!\"",
        "correctAnswer": "Birthday",
        "explanation": "Birthday = aniversário de nascimento. Anniversary é para casamento ou fundação!",
        "skillCategory": "vocabulary",
        "visualEmoji": "🎂",
        "options": [
          "Birthday",
          "Anniversary",
          "Celebration",
          "Party"
        ]
      },
      {
        "id": "w3-p24-e3",
        "type": "word-order",
        "prompt": "Monte o brinde de celebração:",
        "correctAnswer": "Here's to your health and success!",
        "explanation": "Here's to... = Um brinde a...",
        "skillCategory": "grammar",
        "options": [
          "to",
          "health",
          "success!",
          "Here's",
          "and",
          "your"
        ]
      },
      {
        "id": "w3-p24-e4",
        "type": "listening",
        "prompt": "Ouça a mensagem comemorativa:",
        "correctAnswer": "We wish you a wonderful New Year filled with joy and health.",
        "explanation": "wonderful New Year...",
        "skillCategory": "listening",
        "audioPhrase": "We wish you a wonderful New Year filled with joy and health.",
        "options": [
          "We wish you a wonderful New Year filled with joy and health.",
          "We wish you a Merry Christmas and a relaxing holiday.",
          "Happy Birthday, may all your dreams come true this year.",
          "Congratulations on your wedding anniversary today."
        ]
      },
      {
        "id": "w3-p24-e5",
        "type": "translate",
        "prompt": "Traduza: \"Parabéns pela sua conquista!\"",
        "correctAnswer": "Congratulations on your achievement!",
        "explanation": "Congratulations on...",
        "skillCategory": "reading",
        "options": [
          "Congratulations on your achievement!",
          "Felicitations for your achievement!",
          "Congrats to your achievement!",
          "Happy celebrations for you!"
        ]
      },
      {
        "id": "w3-p24-e6",
        "type": "multiple-choice",
        "prompt": "Cuidado com o falso cognato: \"ANNIVERSARY\" refere-se a:",
        "correctAnswer": "Aniversário de casamento ou evento histórico",
        "explanation": "Wedding anniversary = bodas/casamento. Nascimento é Birthday!",
        "skillCategory": "vocabulary",
        "options": [
          "Aniversário de casamento ou evento histórico",
          "Aniversário de nascimento de uma pessoa",
          "Festa de fim de ano",
          "Feriado nacional"
        ]
      },
      {
        "id": "w3-p24-e7",
        "type": "word-order",
        "prompt": "Organize o convite para a festa:",
        "correctAnswer": "You are invited to my birthday party",
        "explanation": "You are invited to my birthday party.",
        "skillCategory": "grammar",
        "options": [
          "party",
          "birthday",
          "invited",
          "to",
          "You",
          "are",
          "my"
        ]
      },
      {
        "id": "w3-p24-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Thanksgiving is celebrated on the fourth Thursday of November.",
        "explanation": "Thanksgiving in November.",
        "skillCategory": "listening",
        "audioPhrase": "Thanksgiving is celebrated on the fourth Thursday of November.",
        "options": [
          "Thanksgiving is celebrated on the fourth Thursday of November.",
          "Halloween is celebrated on the thirty-first of October.",
          "Labor Day is celebrated on the first Monday of September.",
          "Independence Day is celebrated on the fourth of July."
        ]
      },
      {
        "id": "w3-p24-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"Happy Birthday to you!\"",
        "correctAnswer": "Happy Birthday to you",
        "explanation": "Perfeito!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Happy Birthday to you",
        "phoneticHint": "/ˈhæp.i ˈbɜːrθ.deɪ tuː juː/"
      },
      {
        "id": "w3-p24-e10",
        "type": "multiple-choice",
        "prompt": "O dia 31 de dezembro (véspera de Ano Novo) é chamado de:",
        "correctAnswer": "New Year's Eve",
        "explanation": "New Year's Eve (Eve = véspera).",
        "skillCategory": "vocabulary",
        "options": [
          "New Year's Eve",
          "New Year's Night",
          "Year End Day",
          "Old Year Night"
        ]
      }
    ]
  },
  {
    "id": "w3-p25",
    "worldId": 3,
    "phaseNumber": 25,
    "title": "Tecnologia & Vida Digital",
    "subtitle": "Smartphone, message, battery, internet, charger",
    "pedagogicalObjective": "Falar sobre dispositivos digitais, conectividade e problemas tecnológicos cotidianos.",
    "type": "lesson",
    "icon": "smartphone",
    "cefrLevel": "A2",
    "theorySummary": [
      "Dispositivos: smartphone, charger (carregador), battery, headphones/earbuds.",
      "Expressões: \"My battery is low\", \"Can you send me a text?\", \"Download the app\", \"Restart the device\"."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p25-e1",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Minha bateria está acabando / fraca\"?",
        "correctAnswer": "My battery is low / dying.",
        "explanation": "My battery is low (ou dying).",
        "skillCategory": "vocabulary",
        "visualEmoji": "🔋",
        "options": [
          "My battery is low / dying.",
          "My battery is ending.",
          "My battery is finished.",
          "I have low electricity."
        ]
      },
      {
        "id": "w3-p25-e2",
        "type": "fill-blank",
        "prompt": "Complete: \"Do you have a phone _____ I can borrow?\"",
        "correctAnswer": "charger",
        "explanation": "Charger = carregador.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🔌",
        "options": [
          "charger",
          "cable",
          "battery",
          "plug"
        ]
      },
      {
        "id": "w3-p25-e3",
        "type": "word-order",
        "prompt": "Monte o pedido tecnológico:",
        "correctAnswer": "Send me a message on WhatsApp.",
        "explanation": "Send me a message on WhatsApp.",
        "skillCategory": "grammar",
        "options": [
          "me",
          "message",
          "Send",
          "on",
          "WhatsApp.",
          "a"
        ]
      },
      {
        "id": "w3-p25-e4",
        "type": "listening",
        "prompt": "Ouça o problema digital:",
        "correctAnswer": "The Wi-Fi signal is very weak in this corner of the room.",
        "explanation": "Wi-Fi signal is very weak.",
        "skillCategory": "listening",
        "audioPhrase": "The Wi-Fi signal is very weak in this corner of the room.",
        "options": [
          "The Wi-Fi signal is very weak in this corner of the room.",
          "The internet connection is completely down today.",
          "My smartphone screen is cracked and unresponsive.",
          "I forgot my email password and cannot log in."
        ]
      },
      {
        "id": "w3-p25-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eu preciso baixar este aplicativo.\"",
        "correctAnswer": "I need to download this app.",
        "explanation": "download this app.",
        "skillCategory": "reading",
        "options": [
          "I need to download this app.",
          "I need to upload this application.",
          "I have to send this program.",
          "I want to install this site."
        ]
      },
      {
        "id": "w3-p25-e6",
        "type": "multiple-choice",
        "prompt": "Qual termo significa \"Carregar a bateria\"?",
        "correctAnswer": "Charge the battery",
        "explanation": "Charge the battery.",
        "skillCategory": "vocabulary",
        "options": [
          "Charge the battery",
          "Load the battery",
          "Fill the battery",
          "Power the battery"
        ]
      },
      {
        "id": "w3-p25-e7",
        "type": "word-order",
        "prompt": "Organize a dica de suporte técnico:",
        "correctAnswer": "Restart your device and try again.",
        "explanation": "Restart your device and try again.",
        "skillCategory": "grammar",
        "options": [
          "Restart",
          "try",
          "device",
          "again.",
          "your",
          "and"
        ]
      },
      {
        "id": "w3-p25-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Make sure you back up your files to the cloud regularly.",
        "explanation": "back up your files to the cloud.",
        "skillCategory": "listening",
        "audioPhrase": "Make sure you back up your files to the cloud regularly.",
        "options": [
          "Make sure you back up your files to the cloud regularly.",
          "Check if your computer has the latest operating system.",
          "Delete all temporary files to free up disk space.",
          "Change your password every six months for better security."
        ]
      },
      {
        "id": "w3-p25-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"My phone battery is low\"",
        "correctAnswer": "My phone battery is low",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "My phone battery is low",
        "phoneticHint": "/maɪ foʊn ˈbæt̬.ɚ.i ɪz loʊ/"
      },
      {
        "id": "w3-p25-e10",
        "type": "multiple-choice",
        "prompt": "Fones de ouvido pequenos intra-auriculares (sem fio) são chamados de:",
        "correctAnswer": "Earbuds",
        "explanation": "Earbuds = fones intra-auriculares (ex: AirPods).",
        "skillCategory": "vocabulary",
        "options": [
          "Earbuds",
          "Headphones (com arco)",
          "Speakers",
          "Microphones"
        ]
      }
    ]
  },
  {
    "id": "w3-p26",
    "worldId": 3,
    "phaseNumber": 26,
    "title": "Animais Selvagens & Zoológico",
    "subtitle": "Lion, elephant, monkey, tiger, giraffe",
    "pedagogicalObjective": "Nomear animais da fauna global e descrever seus habitats.",
    "type": "lesson",
    "icon": "feather",
    "cefrLevel": "A2",
    "theorySummary": [
      "Animais selvagens: lion, elephant, monkey, tiger, giraffe, bear, dolphin, whale, snake, eagle.",
      "Habitats: jungle, savannah, forest, ocean, desert."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p26-e1",
        "type": "multiple-choice",
        "prompt": "Como se diz \"O leão é o rei da savana\"?",
        "correctAnswer": "The lion is the king of the savannah.",
        "explanation": "Lion = leão.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🦁",
        "options": [
          "The lion is the king of the savannah.",
          "The tiger is the king of the jungle.",
          "The elephant is the king of the forest.",
          "The bear is the ruler of the mountains."
        ]
      },
      {
        "id": "w3-p26-e2",
        "type": "fill-blank",
        "prompt": "O maior mamífero terrestre: \"The _____ has a long trunk and big ears.\"",
        "correctAnswer": "elephant",
        "explanation": "Elephant = elefante; trunk = tromba.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🐘",
        "options": [
          "elephant",
          "giraffe",
          "rhino",
          "hippo"
        ]
      },
      {
        "id": "w3-p26-e3",
        "type": "word-order",
        "prompt": "Monte a frase sobre o animal marinho:",
        "correctAnswer": "Dolphins are very intelligent animals.",
        "explanation": "Dolphins are very intelligent animals.",
        "skillCategory": "grammar",
        "options": [
          "very",
          "are",
          "animals.",
          "Dolphins",
          "intelligent"
        ]
      },
      {
        "id": "w3-p26-e4",
        "type": "listening",
        "prompt": "Ouça a descrição do animal:",
        "correctAnswer": "The giraffe has an extremely long neck to reach high leaves.",
        "explanation": "giraffe... long neck.",
        "skillCategory": "listening",
        "audioPhrase": "The giraffe has an extremely long neck to reach high leaves.",
        "options": [
          "The giraffe has an extremely long neck to reach high leaves.",
          "The zebra has black and white stripes for camouflage.",
          "The cheetah is the fastest land animal in the world.",
          "The kangaroo carries its baby in a front pouch."
        ]
      },
      {
        "id": "w3-p26-e5",
        "type": "translate",
        "prompt": "Traduza: \"Nós vimos muitos animais no zoológico.\"",
        "correctAnswer": "We saw many animals at the zoo.",
        "explanation": "We saw many animals at the zoo.",
        "skillCategory": "reading",
        "options": [
          "We saw many animals at the zoo.",
          "We looked many animals in the park.",
          "We see many pets at the zoo.",
          "We watched animals in the forest."
        ]
      },
      {
        "id": "w3-p26-e6",
        "type": "multiple-choice",
        "prompt": "Como se diz \"Águia\" em inglês?",
        "correctAnswer": "Eagle",
        "explanation": "Eagle (/ˈiː.ɡəl/) = águia.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🦅",
        "options": [
          "Eagle",
          "Hawk",
          "Falcon",
          "Owl"
        ]
      },
      {
        "id": "w3-p26-e7",
        "type": "word-order",
        "prompt": "Organize a descrição do macaco:",
        "correctAnswer": "Monkeys love jumping between trees.",
        "explanation": "Monkeys love jumping between trees.",
        "skillCategory": "grammar",
        "options": [
          "trees.",
          "Monkeys",
          "jumping",
          "love",
          "between"
        ]
      },
      {
        "id": "w3-p26-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Polar bears live in the freezing Arctic and swim long distances.",
        "explanation": "Polar bears in the Arctic.",
        "skillCategory": "listening",
        "audioPhrase": "Polar bears live in the freezing Arctic and swim long distances.",
        "options": [
          "Polar bears live in the freezing Arctic and swim long distances.",
          "Brown bears hibernate in deep caves during the winter.",
          "Panda bears eat bamboo leaves all day long.",
          "Grizzly bears hunt salmon in fast rivers."
        ]
      },
      {
        "id": "w3-p26-e9",
        "type": "speaking-repeat",
        "prompt": "Diga no microfone: \"Dolphins are intelligent animals\"",
        "correctAnswer": "Dolphins are intelligent animals",
        "explanation": "Perfeita pronúncia!",
        "skillCategory": "pronunciation",
        "audioPhrase": "Dolphins are intelligent animals",
        "phoneticHint": "/ˈdɑːl.fɪnz ɑːr ɪnˈtel.ə.dʒənt ˈæn.ə.məlz/"
      },
      {
        "id": "w3-p26-e10",
        "type": "multiple-choice",
        "prompt": "Qual animal é o mais rápido em terra firme?",
        "correctAnswer": "Cheetah (guepardo/chita)",
        "explanation": "Cheetah = o mamífero terrestre mais veloz.",
        "skillCategory": "vocabulary",
        "options": [
          "Cheetah (guepardo/chita)",
          "Lion",
          "Horse",
          "Leopard"
        ]
      }
    ]
  },
  {
    "id": "w3-p27",
    "worldId": 3,
    "phaseNumber": 27,
    "title": "Expressando Planos Simples (Going To)",
    "subtitle": "I am going to travel next month",
    "pedagogicalObjective": "Falar sobre planos futuros e intenções já decididas usando GOING TO.",
    "type": "lesson",
    "icon": "calendar",
    "cefrLevel": "A2",
    "theorySummary": [
      "Estrutura: Sujeito + AM/IS/ARE + GOING TO + Verbo base.",
      "Exemplo: \"I am going to travel to London next month\", \"She is going to study medicine\"."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p27-e1",
        "type": "multiple-choice",
        "prompt": "Como dizer \"Eu vou viajar no próximo mês\" (plano decidido)?",
        "correctAnswer": "I am going to travel next month.",
        "explanation": "To Be + going to + verbo base.",
        "skillCategory": "vocabulary",
        "options": [
          "I am going to travel next month.",
          "I will to travel next month.",
          "I am travel next month.",
          "I go to travel next month."
        ]
      },
      {
        "id": "w3-p27-e2",
        "type": "fill-blank",
        "prompt": "Complete o plano: \"We are going to _____ a new house this year.\"",
        "correctAnswer": "buy",
        "explanation": "Após going to usamos o verbo base sem alteração: buy.",
        "skillCategory": "vocabulary",
        "visualEmoji": "🏠",
        "options": [
          "buy",
          "buying",
          "bought",
          "buys"
        ]
      },
      {
        "id": "w3-p27-e3",
        "type": "word-order",
        "prompt": "Monte a pergunta sobre planos futuros:",
        "correctAnswer": "What are you going to do tonight?",
        "explanation": "What are you going to do tonight?",
        "skillCategory": "grammar",
        "options": [
          "you",
          "What",
          "to",
          "do",
          "going",
          "are",
          "tonight?"
        ]
      },
      {
        "id": "w3-p27-e4",
        "type": "listening",
        "prompt": "Ouça o plano futuro:",
        "correctAnswer": "She is going to start her new job next Monday.",
        "explanation": "is going to start her new job.",
        "skillCategory": "listening",
        "audioPhrase": "She is going to start her new job next Monday.",
        "options": [
          "She is going to start her new job next Monday.",
          "She is going to move to another apartment next week.",
          "He is going to start college in September.",
          "They are going to get married in December."
        ]
      },
      {
        "id": "w3-p27-e5",
        "type": "translate",
        "prompt": "Traduza: \"Eles vão comprar um carro novo.\"",
        "correctAnswer": "They are going to buy a new car.",
        "explanation": "They are going to buy...",
        "skillCategory": "reading",
        "options": [
          "They are going to buy a new car.",
          "They will buying a new car.",
          "They are buy a new car.",
          "They go to buy a new car."
        ]
      },
      {
        "id": "w3-p27-e6",
        "type": "multiple-choice",
        "prompt": "Qual frase contém um erro na estrutura do \"Going to\"?",
        "correctAnswer": "She is going to visits her grandmother.",
        "explanation": "O verbo após going to não leva -s: \"visit\".",
        "skillCategory": "vocabulary",
        "options": [
          "She is going to visits her grandmother.",
          "She is going to visit her grandmother.",
          "They are going to travel to Spain.",
          "I am going to sleep early tonight."
        ]
      },
      {
        "id": "w3-p27-e7",
        "type": "word-order",
        "prompt": "Organize a negativa de plano:",
        "correctAnswer": "It is not going to rain today.",
        "explanation": "It is not going to rain today.",
        "skillCategory": "grammar",
        "options": [
          "not",
          "rain",
          "today.",
          "going",
          "It",
          "to",
          "is"
        ]
      },
      {
        "id": "w3-p27-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Are you going to attend the conference tomorrow?",
        "explanation": "Are you going to attend...?",
        "skillCategory": "listening",
        "audioPhrase": "Are you going to attend the conference tomorrow?",
        "options": [
          "Are you going to attend the conference tomorrow?",
          "Are you going to present the project tomorrow?",
          "Is he going to join the meeting this afternoon?",
          "Are they going to travel to the conference together?"
        ]
      },
      {
        "id": "w3-p27-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone seu plano: \"I am going to learn English\"",
        "correctAnswer": "I am going to learn English",
        "explanation": "Excelente!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am going to learn English",
        "phoneticHint": "/aɪ æm ˈɡoʊ.ɪŋ tuː lɜːrn ˈɪŋ.ɡlɪʃ/"
      },
      {
        "id": "w3-p27-e10",
        "type": "multiple-choice",
        "prompt": "Na fala rápida e informal, \"going to\" frequentemente soa como:",
        "correctAnswer": "Gonna",
        "explanation": "Going to vira \"gonna\" no inglês falado informal.",
        "skillCategory": "vocabulary",
        "options": [
          "Gonna",
          "Wanna",
          "Gotta",
          "Kinda"
        ]
      }
    ]
  },
  {
    "id": "w3-p28",
    "worldId": 3,
    "phaseNumber": 28,
    "title": "Conectando o Dia a Dia: First, Then, After that",
    "subtitle": "Sequenciadores temporais de narrativa",
    "pedagogicalObjective": "Contar histórias e relatar procedimentos em ordem cronológica fluida.",
    "type": "lesson",
    "icon": "list",
    "cefrLevel": "A2",
    "theorySummary": [
      "Sequenciadores: First (primeiro), Then (então/depois), After that (depois disso), Later (mais tarde), Finally (finalmente)."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p28-e1",
        "type": "multiple-choice",
        "prompt": "Qual sequenciador usamos para abrir uma narrativa ou lista de passos?",
        "correctAnswer": "First / Firstly",
        "explanation": "First = Primeiro / Em primeiro lugar.",
        "skillCategory": "vocabulary",
        "options": [
          "First / Firstly",
          "Finally",
          "After that",
          "Later"
        ]
      },
      {
        "id": "w3-p28-e2",
        "type": "fill-blank",
        "prompt": "Complete a sequência: \"First, wash your hands. _____, chop the vegetables.\"",
        "correctAnswer": "Then",
        "explanation": "Then = Então / Depois.",
        "skillCategory": "vocabulary",
        "options": [
          "Then",
          "Finally",
          "First",
          "Last"
        ]
      },
      {
        "id": "w3-p28-e3",
        "type": "word-order",
        "prompt": "Monte o fechamento da rotina:",
        "correctAnswer": "Finally, I went to bed.",
        "explanation": "Finally = Finalmente.",
        "skillCategory": "grammar",
        "options": [
          "Finally,",
          "went",
          "bed.",
          "I",
          "to"
        ]
      },
      {
        "id": "w3-p28-e4",
        "type": "listening",
        "prompt": "Ouça a narrativa cronológica:",
        "correctAnswer": "First we visited the museum, then we had lunch, and finally we took a walk in the park.",
        "explanation": "First... then... finally...",
        "skillCategory": "listening",
        "audioPhrase": "First we visited the museum, then we had lunch, and finally we took a walk in the park.",
        "options": [
          "First we visited the museum, then we had lunch, and finally we took a walk in the park.",
          "First we took a walk, then we went shopping, and finally we had dinner.",
          "We arrived at the airport, then checked in, and finally boarded the plane.",
          "First I studied grammar, then I practiced listening, and finally I spoke."
        ]
      },
      {
        "id": "w3-p28-e5",
        "type": "translate",
        "prompt": "Traduza: \"Depois disso, nós fomos para casa.\"",
        "correctAnswer": "After that, we went home.",
        "explanation": "After that = Depois disso.",
        "skillCategory": "reading",
        "options": [
          "After that, we went home.",
          "Before that, we were home.",
          "Then that, we go home.",
          "Later that, we arrived home."
        ]
      },
      {
        "id": "w3-p28-e6",
        "type": "multiple-choice",
        "prompt": "Qual palavra indica o passo FINAL de um processo?",
        "correctAnswer": "Finally",
        "explanation": "Finally = Por fim / Finalmente.",
        "skillCategory": "vocabulary",
        "options": [
          "Finally",
          "First",
          "Next",
          "Meanwhile"
        ]
      },
      {
        "id": "w3-p28-e7",
        "type": "word-order",
        "prompt": "Organize a sequência:",
        "correctAnswer": "After that, I called my friend.",
        "explanation": "After that, I called my friend.",
        "skillCategory": "grammar",
        "options": [
          "that,",
          "called",
          "friend.",
          "my",
          "After",
          "I"
        ]
      },
      {
        "id": "w3-p28-e8",
        "type": "listening",
        "prompt": "Ouça:",
        "correctAnswer": "Mix the ingredients thoroughly, and next bake in the oven for thirty minutes.",
        "explanation": "and next bake...",
        "skillCategory": "listening",
        "audioPhrase": "Mix the ingredients thoroughly, and next bake in the oven for thirty minutes.",
        "options": [
          "Mix the ingredients thoroughly, and next bake in the oven for thirty minutes.",
          "Chop all the vegetables finely, and next fry them in hot olive oil.",
          "Boil the pasta for ten minutes, and next add the tomato sauce.",
          "Preheat the oven to two hundred degrees, and next prepare the dough."
        ]
      },
      {
        "id": "w3-p28-e9",
        "type": "speaking-repeat",
        "prompt": "Fale no microfone: \"First, second and finally\"",
        "correctAnswer": "First second and finally",
        "explanation": "Perfeita clareza!",
        "skillCategory": "pronunciation",
        "audioPhrase": "First second and finally",
        "phoneticHint": "/fɜːrst ˈsek.ənd ənd ˈfaɪ.nəl.i/"
      },
      {
        "id": "w3-p28-e10",
        "type": "multiple-choice",
        "prompt": "O que significa \"Meanwhile\"?",
        "correctAnswer": "Enquanto isso",
        "explanation": "Meanwhile = Enquanto isso.",
        "skillCategory": "vocabulary",
        "options": [
          "Enquanto isso",
          "Depois disso",
          "Antes de tudo",
          "Nunca mais"
        ]
      }
    ]
  },
  {
    "id": "w3-p29",
    "worldId": 3,
    "phaseNumber": 29,
    "title": "Simulado Pré-Boss: O Desafio da Vida Real",
    "subtitle": "Revisão integrada de todas as situações cotidianas",
    "pedagogicalObjective": "Provar prontidão nas situações cotidianas reais do nível A2.",
    "type": "review",
    "icon": "award",
    "cefrLevel": "A2",
    "theorySummary": [
      "Grande simulado do Mundo 3! Consolide hotéis, restaurantes, aeroportos, saúde, compras e rotina."
    ],
    "xpReward": 45,
    "gemsReward": 10,
    "exercises": [
      {
        "id": "w3-p29-e1",
        "type": "multiple-choice",
        "prompt": "[Simulado] No aeroporto, onde você pega suas malas após o pouso?",
        "correctAnswer": "Baggage claim",
        "explanation": "Baggage claim.",
        "skillCategory": "vocabulary",
        "options": [
          "Baggage claim",
          "Security check",
          "Departure gate",
          "Ticket counter"
        ]
      },
      {
        "id": "w3-p29-e2",
        "type": "fill-blank",
        "prompt": "[Simulado] \"Could you bring me the _____, please? We want to pay.\"",
        "correctAnswer": "check",
        "explanation": "The check / bill = a conta.",
        "skillCategory": "vocabulary",
        "options": [
          "check",
          "menu",
          "reservation",
          "towel"
        ]
      },
      {
        "id": "w3-p29-e3",
        "type": "word-order",
        "prompt": "[Simulado] Reorganize a orientação na cidade:",
        "correctAnswer": "Walk two blocks and turn right.",
        "explanation": "Walk two blocks and turn right.",
        "skillCategory": "grammar",
        "options": [
          "two",
          "and",
          "blocks",
          "Walk",
          "right.",
          "turn"
        ]
      },
      {
        "id": "w3-p29-e4",
        "type": "listening",
        "prompt": "[Simulado] Ouça a situação de hotel:",
        "correctAnswer": "Good morning! I have a reservation for three nights under the name Smith.",
        "explanation": "reservation for three nights...",
        "skillCategory": "listening",
        "audioPhrase": "Good morning! I have a reservation for three nights under the name Smith.",
        "options": [
          "Good morning! I have a reservation for three nights under the name Smith.",
          "Good evening! Could you please call a taxi for terminal two?",
          "What time is breakfast served in the main dining room?",
          "Can I request a wake-up call tomorrow morning at seven?"
        ]
      },
      {
        "id": "w3-p29-e5",
        "type": "multiple-choice",
        "prompt": "[Simulado] Qual verbo esportivo completa: \"I _____ swimming on Saturdays.\"",
        "correctAnswer": "go",
        "explanation": "Go swimming.",
        "skillCategory": "vocabulary",
        "options": [
          "go",
          "play",
          "do",
          "make"
        ]
      },
      {
        "id": "w3-p29-e6",
        "type": "translate",
        "prompt": "[Simulado] Traduza: \"O tempo está ensolarado e agradável hoje.\"",
        "correctAnswer": "The weather is sunny and pleasant today.",
        "explanation": "sunny and pleasant.",
        "skillCategory": "reading",
        "options": [
          "The weather is sunny and pleasant today.",
          "The weather is rainy and cold today.",
          "The forecast has sun and warmth today.",
          "It is clouds and warm today."
        ]
      },
      {
        "id": "w3-p29-e7",
        "type": "fill-blank",
        "prompt": "[Simulado] \"I have a sore _____ and I can hardly speak.\"",
        "correctAnswer": "throat",
        "explanation": "a sore throat = dor de garganta.",
        "skillCategory": "vocabulary",
        "options": [
          "throat",
          "head",
          "arm",
          "foot"
        ]
      },
      {
        "id": "w3-p29-e8",
        "type": "word-order",
        "prompt": "[Simulado] Monte o plano futuro com Going To:",
        "correctAnswer": "She is going to study medicine.",
        "explanation": "She is going to study medicine.",
        "skillCategory": "grammar",
        "options": [
          "is",
          "medicine.",
          "study",
          "to",
          "going",
          "She"
        ]
      },
      {
        "id": "w3-p29-e9",
        "type": "listening",
        "prompt": "[Simulado] Ouça:",
        "correctAnswer": "Take this medication twice a day after meals and get plenty of rest.",
        "explanation": "twice a day after meals.",
        "skillCategory": "listening",
        "audioPhrase": "Take this medication twice a day after meals and get plenty of rest.",
        "options": [
          "Take this medication twice a day after meals and get plenty of rest.",
          "You should exercise at least three times a week at the gym.",
          "Drink eight glasses of water every day to stay hydrated.",
          "Please return for another check-up in three weeks."
        ]
      },
      {
        "id": "w3-p29-e10",
        "type": "speaking-repeat",
        "prompt": "[Simulado] Fale no microfone: \"I am ready for the boss battle!\"",
        "correctAnswer": "I am ready for the boss battle",
        "explanation": "Você está preparadíssimo!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I am ready for the boss battle",
        "phoneticHint": "/aɪ æm ˈred.i fɔːr ðə bɔːs ˈbæt.əl/"
      },
      {
        "id": "w3-p29-e11",
        "type": "multiple-choice",
        "prompt": "[Simulado] Qual é a resposta correta para \"What is the Wi-Fi password?\"",
        "correctAnswer": "It is written on your key card envelope.",
        "explanation": "Resposta contextual perfeita.",
        "skillCategory": "vocabulary",
        "options": [
          "It is written on your key card envelope.",
          "Yes, I am connected.",
          "The internet is sixty dollars.",
          "No, thank you very much."
        ]
      },
      {
        "id": "w3-p29-e12",
        "type": "translate",
        "prompt": "[Simulado] \"Com licença, posso experimentar esta jaqueta?\"",
        "correctAnswer": "Excuse me, can I try this jacket on?",
        "explanation": "can I try this jacket on?",
        "skillCategory": "reading",
        "options": [
          "Excuse me, can I try this jacket on?",
          "Pardon, may I wear this jacket here?",
          "Sorry, can I sample this jacket?",
          "Excuse me, could you buy this jacket?"
        ]
      }
    ]
  },
  {
    "id": "w3-p30",
    "worldId": 3,
    "phaseNumber": 30,
    "title": "O Guardião do Mundo 3: Guardião da Cidade Cotidiana",
    "subtitle": "Boss Final de Proficiência A2 Consolidada",
    "pedagogicalObjective": "Provar maestria absoluta na comunicação e sobrevivência em todas as situações da vida real.",
    "type": "boss",
    "icon": "crown",
    "cefrLevel": "A2",
    "theorySummary": [
      "A Batalha Final do Mundo 3! Enfrente os 15 desafios do Guardião da Cidade Cotidiana e desbloqueie o nível intermediário B1!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w3-p30-e1",
        "type": "multiple-choice",
        "prompt": "[Chefe Supremo A2] Em uma emergência na cidade, como pedir ajuda na rua?",
        "correctAnswer": "Excuse me, could you please help me?",
        "explanation": "Excuse me, could you please help me?",
        "skillCategory": "vocabulary",
        "options": [
          "Excuse me, could you please help me?",
          "Hey you, do my task now!",
          "I am with emergency, look at me!",
          "What is the help here?"
        ]
      },
      {
        "id": "w3-p30-e2",
        "type": "word-order",
        "prompt": "[Chefe Supremo A2] Monte o desafio urbano:",
        "correctAnswer": "The station is across from the supermarket.",
        "explanation": "across from = do outro lado de.",
        "skillCategory": "grammar",
        "options": [
          "is",
          "station",
          "across",
          "supermarket.",
          "The",
          "from",
          "the"
        ]
      },
      {
        "id": "w3-p30-e3",
        "type": "listening",
        "prompt": "[Chefe Supremo A2] Ouça a proclamação do Guardião:",
        "correctAnswer": "You have conquered the streets, airports, hotels, and daily routines of World Three! You are ready for true English communication.",
        "explanation": "Parabéns pela vitória monumental!",
        "skillCategory": "listening",
        "audioPhrase": "You have conquered the streets, airports, hotels, and daily routines of World Three! You are ready for true English communication.",
        "options": [
          "You have conquered the streets, airports, hotels, and daily routines of World Three! You are ready for true English communication.",
          "Welcome to the city traveler, but you need to practice more.",
          "Your luggage is lost at the airport, please wait here.",
          "Return to the beginning of the world and study again."
        ]
      },
      {
        "id": "w3-p30-e4",
        "type": "fill-blank",
        "prompt": "[Chefe Supremo A2] \"We are going to _____ to New York next month.\"",
        "correctAnswer": "travel",
        "explanation": "Going to + travel.",
        "skillCategory": "vocabulary",
        "options": [
          "travel",
          "traveling",
          "travels",
          "traveled"
        ]
      },
      {
        "id": "w3-p30-e5",
        "type": "translate",
        "prompt": "[Chefe Supremo A2] Traduza: \"A conta, por favor, e pode ficar com o troco.\"",
        "correctAnswer": "The check, please, and keep the change.",
        "explanation": "The check, please, and keep the change.",
        "skillCategory": "reading",
        "options": [
          "The check, please, and keep the change.",
          "The bill, please, and stay with money.",
          "Give me receipt and hold change.",
          "The ticket, please, and save change."
        ]
      },
      {
        "id": "w3-p30-e6",
        "type": "multiple-choice",
        "prompt": "[Chefe Supremo A2] Qual frase NÃO tem nenhum erro gramatical?",
        "correctAnswer": "I go running every morning and do yoga on Sundays.",
        "explanation": "Go running + Do yoga.",
        "skillCategory": "vocabulary",
        "visualEmoji": "👑",
        "options": [
          "I go running every morning and do yoga on Sundays.",
          "I play running every morning and make yoga.",
          "I do running every morning and play yoga.",
          "I am run every morning and do the yoga."
        ]
      },
      {
        "id": "w3-p30-e7",
        "type": "word-order",
        "prompt": "[Chefe Supremo A2] Organize a sentença de aeroporto:",
        "correctAnswer": "Please proceed to boarding gate fifteen.",
        "explanation": "Please proceed to boarding gate fifteen.",
        "skillCategory": "grammar",
        "options": [
          "boarding",
          "Please",
          "gate",
          "fifteen.",
          "proceed",
          "to"
        ]
      },
      {
        "id": "w3-p30-e8",
        "type": "listening",
        "prompt": "[Chefe Supremo A2] Ouça o conselho do Guardião:",
        "correctAnswer": "Always carry your passport and keep your boarding pass safe while traveling.",
        "explanation": "carry your passport... keep boarding pass safe.",
        "skillCategory": "listening",
        "audioPhrase": "Always carry your passport and keep your boarding pass safe while traveling.",
        "options": [
          "Always carry your passport and keep your boarding pass safe while traveling.",
          "Never check in your luggage at the counter before traveling.",
          "Make sure you arrive at the airport only thirty minutes before departure.",
          "Do not exchange your money before arriving at the foreign city."
        ]
      },
      {
        "id": "w3-p30-e9",
        "type": "fill-blank",
        "prompt": "[Chefe Supremo A2] \"I have an appointment _____ the doctor at 4:30 pm.\"",
        "correctAnswer": "with",
        "explanation": "appointment with the doctor.",
        "skillCategory": "vocabulary",
        "options": [
          "with",
          "at",
          "to",
          "for"
        ]
      },
      {
        "id": "w3-p30-e10",
        "type": "speaking-repeat",
        "prompt": "[Chefe Supremo A2] Declare sua vitória: \"I conquered World Three and I speak English!\"",
        "correctAnswer": "I conquered World Three and I speak English",
        "explanation": "Você é um mestre da vida cotidiana em inglês!",
        "skillCategory": "pronunciation",
        "audioPhrase": "I conquered World Three and I speak English",
        "phoneticHint": "/aɪ ˈkɑːŋ.kərd wɜːrld θriː ənd aɪ spiːk ˈɪŋ.ɡlɪʃ/"
      },
      {
        "id": "w3-p30-e11",
        "type": "multiple-choice",
        "prompt": "[Chefe Supremo A2] Qual substantivo é incontável em inglês?",
        "correctAnswer": "Luggage",
        "explanation": "Luggage é incontável.",
        "skillCategory": "vocabulary",
        "options": [
          "Luggage",
          "Suitcase",
          "Bag",
          "Backpack"
        ]
      },
      {
        "id": "w3-p30-e12",
        "type": "word-order",
        "prompt": "[Chefe Supremo A2] Monte a frase de tempo meteorológico:",
        "correctAnswer": "Although it is sunny today, it is cold.",
        "explanation": "Although it is sunny today, it is cold.",
        "skillCategory": "grammar",
        "options": [
          "today,",
          "sunny",
          "it",
          "cold.",
          "is",
          "Although",
          "it",
          "is"
        ]
      },
      {
        "id": "w3-p30-e13",
        "type": "translate",
        "prompt": "[Chefe Supremo A2] \"Qual é o melhor restaurante da cidade?\"",
        "correctAnswer": "What is the best restaurant in town?",
        "explanation": "the best restaurant in town.",
        "skillCategory": "reading",
        "options": [
          "What is the best restaurant in town?",
          "Which is the good restaurant in city?",
          "Where is the better restaurant near here?",
          "What has best restaurant in the city?"
        ]
      },
      {
        "id": "w3-p30-e14",
        "type": "listening",
        "prompt": "[Chefe Supremo A2] Ouça a revelação final:",
        "correctAnswer": "The portal to World Four is now open. Step forward into intermediate communication!",
        "explanation": "Portal para o Mundo 4 desbloqueado!",
        "skillCategory": "listening",
        "audioPhrase": "The portal to World Four is now open. Step forward into intermediate communication!",
        "options": [
          "The portal to World Four is now open. Step forward into intermediate communication!",
          "The test of World Three has ended in defeat. Try again.",
          "You have collected all the luggage from the airport.",
          "Welcome back to the hotel lobby traveler."
        ]
      },
      {
        "id": "w3-p30-e15",
        "type": "multiple-choice",
        "prompt": "[Chefe Supremo A2] Qual par de palavras significa \"Provador\" e \"Recibo\"?",
        "correctAnswer": "Fitting room and Receipt",
        "explanation": "Fitting room and Receipt.",
        "skillCategory": "vocabulary",
        "options": [
          "Fitting room and Receipt",
          "Dressing room and Recipe",
          "Testing room and Ticket",
          "Changing room and Prescription"
        ]
      }
    ]
  }
];
