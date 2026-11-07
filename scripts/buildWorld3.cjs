// Generator for World 3: Vida Cotidiana (A2)
// 30 phases, 8-10 exercises each (11 on chest, 15 on boss)
const { writeWorldFile } = require('./worldsHelper.cjs');

const w3Phases = [
  // 1: Casa & Cômodos
  {
    num: 1, title: 'Minha Casa & Cômodos Detalhados', subtitle: 'Móveis, eletrodomésticos e rotina doméstica',
    obj: 'Nomear móveis, eletrodomésticos e descrever sua casa com riqueza de vocabulário.',
    type: 'lesson', icon: 'home',
    theory: ['Cômodos: living room, kitchen, bedroom, bathroom, laundry room, attic, basement.', 'Móveis: sofa, armchair, coffee table, wardrobe, microwave, refrigerator.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🛋️', prompt: 'Como se diz "Sofá" e "Poltrona" em inglês?', options: ['Sofa and Armchair', 'Chair and Table', 'Bed and Wardrobe', 'Desk and Lamp'], ans: 'Sofa and Armchair', exp: 'Sofa / couch = sofá; Armchair = poltrona.' },
      { type: 'fill-blank', visualEmoji: '🧊', prompt: 'Onde guardamos alimentos perecíveis? "Put the milk in the _____."', options: ['refrigerator', 'microwave', 'wardrobe', 'bookshelf'], ans: 'refrigerator', exp: 'Refrigerator / fridge = geladeira.' },
      { type: 'word-order', prompt: 'Monte a frase descrevendo a casa:', options: ['is', 'house', 'My', 'cozy.', 'very', 'warm', 'and'], ans: 'My house is very warm and cozy.', exp: 'My house is very warm and cozy.' },
      { type: 'listening', prompt: 'Ouça onde está o objeto:', audio: 'The remote control is on the coffee table.', options: ['The remote control is on the coffee table.', 'The telephone is on the dining table.', 'The remote control is under the sofa.', 'The book is on the coffee table.'], ans: 'The remote control is on the coffee table.', exp: 'on the coffee table (na mesinha de centro).' },
      { type: 'translate', prompt: 'Traduza: "O guarda-roupa fica no meu quarto."', options: ['The wardrobe is in my bedroom.', 'The closet is in my kitchen.', 'The wardrobe is on my living room.', 'The wardrobe is under my bedroom.'], ans: 'The wardrobe is in my bedroom.', exp: 'The wardrobe is in my bedroom.' },
      { type: 'multiple-choice', visualEmoji: '🧺', prompt: 'Qual cômodo usamos para lavar roupas?', options: ['Laundry room', 'Living room', 'Dining room', 'Bathroom'], ans: 'Laundry room', exp: 'Laundry room = lavanderia / área de serviço.' },
      { type: 'word-order', prompt: 'Organize a descrição:', options: ['three', 'apartment', 'bedrooms.', 'Our', 'has'], ans: 'Our apartment has three bedrooms.', exp: 'Our apartment has three bedrooms.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'There is a large mirror in the bathroom.', options: ['There is a large mirror in the bathroom.', 'There is a small window in the bedroom.', 'There are two mirrors in the hallway.', 'There is a large painting in the living room.'], ans: 'There is a large mirror in the bathroom.', exp: 'a large mirror in the bathroom.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Welcome to my new apartment"', audio: 'Welcome to my new apartment', ans: 'Welcome to my new apartment', hint: '/ˈwel.kəm tuː maɪ nuː əˈpɑːrt.mənt/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: 'Qual eletrodoméstico usamos para esquentar comida rapidamente?', options: ['Microwave', 'Dishwasher', 'Blender', 'Toaster'], ans: 'Microwave', exp: 'Microwave = micro-ondas.' }
    ]
  },
  // 2: Na Cozinha
  {
    num: 2, title: 'Na Cozinha: Utensílios & Receitas', subtitle: 'Fork, knife, spoon, plate, pan',
    obj: 'Dominar os nomes de talheres, panelas e verbos culinários básicos.',
    type: 'lesson', icon: 'utensils',
    theory: ['Talheres (cutlery): fork (garfo), knife (faca), spoon (colher).', 'Utensílios: plate (prato), pan/pot (panela), cutting board (tábua).', 'Verbos: chop (picar), boil (ferver), fry (fritar), bake (assar no forno).'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🍴', prompt: 'Como se diz "Garfo, faca e colher" em inglês?', options: ['Fork, knife and spoon', 'Plate, cup and bowl', 'Pan, pot and skillet', 'Dish, napkin and glass'], ans: 'Fork, knife and spoon', exp: 'Fork, knife and spoon.' },
      { type: 'fill-blank', visualEmoji: '🍳', prompt: 'Complete com o verbo culinário: "_____ the water before adding pasta."', options: ['Boil', 'Bake', 'Fry', 'Freeze'], ans: 'Boil', exp: 'Boil the water = ferver a água.' },
      { type: 'word-order', prompt: 'Monte o pedido na mesa:', options: ['a', 'pass', 'Could', 'me', 'spoon?', 'you'], ans: 'Could you pass me a spoon?', exp: 'Could you pass me a spoon?' },
      { type: 'listening', prompt: 'Ouça a instrução da receita:', audio: 'Chop the onions and fry them in olive oil.', options: ['Chop the onions and fry them in olive oil.', 'Boil the onions and mix them with butter.', 'Slice the garlic and fry it in butter.', 'Chop the tomatoes and add olive oil.'], ans: 'Chop the onions and fry them in olive oil.', exp: 'Chop the onions and fry them...' },
      { type: 'translate', prompt: 'Traduza: "Onde estão as panelas?"', options: ['Where are the pans?', 'Where are the plates?', 'Where are the knives?', 'Where are the spoons?'], ans: 'Where are the pans?', exp: 'Pans = panelas.' },
      { type: 'multiple-choice', visualEmoji: '🎂', prompt: 'Qual verbo usamos para assar um bolo no forno?', options: ['Bake', 'Boil', 'Fry', 'Grill'], ans: 'Bake', exp: 'Bake a cake = assar um bolo.' },
      { type: 'word-order', prompt: 'Organize a frase:', options: ['on', 'plate', 'table.', 'The', 'is', 'the'], ans: 'The plate is on the table.', exp: 'The plate is on the table.' },
      { type: 'listening', prompt: 'Ouça o utensílio:', audio: 'Be careful, that knife is extremely sharp.', options: ['Be careful, that knife is extremely sharp.', 'Be careful, that pan is extremely hot.', 'Watch out, the plate is broken.', 'Please wash the spoon before using it.'], ans: 'Be careful, that knife is extremely sharp.', exp: 'knife is extremely sharp (muito afiada).' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Can I have a clean fork, please?"', audio: 'Can I have a clean fork please', ans: 'Can I have a clean fork please', hint: '/kæn aɪ hæv ə kliːn fɔːrk pliːz/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Qual palavra significa "Prato raso"?', options: ['Plate', 'Bowl (prato fundo/tigela)', 'Cup', 'Glass'], ans: 'Plate', exp: 'Plate = prato raso; Bowl = tigela / prato fundo.' }
    ]
  },
  // 3: No Supermercado
  {
    num: 3, title: 'No Supermercado: Compras & Alimentos', subtitle: 'Grocery shopping, aisles & cart',
    obj: 'Fazer compras no supermercado, encontrar seções e produtos.',
    type: 'lesson', icon: 'shopping-cart',
    theory: ['Grocery store / supermarket = supermercado.', 'Shopping cart = carrinho de compras; basket = cesta.', 'Aisle (/aɪl/ com s mudo) = corredor do mercado; checkout / cashier = caixa.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🛒', prompt: 'Como se diz "Carrinho de compras" em inglês?', options: ['Shopping cart', 'Grocery box', 'Buying car', 'Market wagon'], ans: 'Shopping cart', exp: 'Shopping cart (US) / trolley (UK).' },
      { type: 'fill-blank', visualEmoji: '🧾', prompt: 'No final das compras vamos ao: "Pay for the items at the _____."', options: ['cashier', 'aisle', 'shelf', 'parking'], ans: 'cashier', exp: 'Cashier / checkout = caixa.' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre localização:', options: ['aisle', 'is', 'milk?', 'the', 'Which', 'in'], ans: 'Which aisle is the milk in?', exp: 'Which aisle is the milk in?' },
      { type: 'listening', prompt: 'Ouça a pergunta do atendente:', audio: 'Do you need a plastic bag or a paper bag?', options: ['Do you need a plastic bag or a paper bag?', 'Would you like to pay with cash or card?', 'Do you have our store discount card?', 'Did you find everything you were looking for?'], ans: 'Do you need a plastic bag or a paper bag?', exp: 'plastic bag or paper bag.' },
      { type: 'translate', prompt: 'Traduza: "Onde fica a seção de laticínios?"', options: ['Where is the dairy section?', 'Where is the bakery section?', 'Where is the fruit aisle?', 'Where is the frozen food section?'], ans: 'Where is the dairy section?', exp: 'Dairy section = laticínios (leite, queijo, manteiga).' },
      { type: 'multiple-choice', prompt: 'A palavra "AISLE" (corredor) tem qual letra silenciosa?', options: ['A letra S (soa como /aɪl/)', 'A letra A', 'A letra L', 'A letra E'], ans: 'A letra S (soa como /aɪl/)', exp: 'O "s" é totalmente silencioso: /aɪl/.' },
      { type: 'word-order', prompt: 'Organize a lista de compras:', options: ['bread,', 'need', 'eggs.', 'and', 'We', 'milk'], ans: 'We need bread, milk and eggs.', exp: 'We need bread, milk and eggs.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'The organic apples are on sale today.', options: ['The organic apples are on sale today.', 'The fresh bananas are in aisle four.', 'The red tomatoes are sold out today.', 'The green apples are very expensive.'], ans: 'The organic apples are on sale today.', exp: 'on sale = em promoção.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "Where can I find fresh bread?"', audio: 'Where can I find fresh bread', ans: 'Where can I find fresh bread', hint: '/wer kæn aɪ faɪnd freʃ bred/', exp: 'Muito natural!' },
      { type: 'multiple-choice', prompt: '"On sale" significa:', options: ['Em promoção / com desconto', 'À venda pelo preço normal', 'Esgotado', 'Devolvido'], ans: 'Em promoção / com desconto', exp: '"On sale" = em oferta promocional.' }
    ]
  },
  // 4: No Restaurante
  {
    num: 4, title: 'No Restaurante: Fazendo Pedidos', subtitle: 'I would like..., Can I have the bill?',
    obj: 'Fazer pedidos, tirar dúvidas sobre o cardápio e pedir a conta.',
    type: 'lesson', icon: 'coffee',
    theory: ['Ao pedir: "I\'d like the steak, please" ou "Can I have the salmon?".', 'Pedir a conta: "Can we have the bill, please?" (UK) ou "Can I get the check?" (US).', 'Tip = gorjeta; Waiter / waitress = garçom/garçonete.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🍽️', prompt: 'Como pedir a conta ao garçom nos EUA?', options: ['Can I get the check, please?', 'Bring me the numbers, please!', 'Give me the cost now!', 'What is my price, waiter?'], ans: 'Can I get the check, please?', exp: 'The check (US) / the bill (UK) = a conta.' },
      { type: 'fill-blank', visualEmoji: '🥩', prompt: 'Complete o pedido: "I would like the grilled _____, please."', options: ['salmon', 'table', 'menu', 'fork'], ans: 'salmon', exp: 'grilled salmon = salmão grelhado.' },
      { type: 'word-order', prompt: 'Monte o pedido de água:', options: ['have', 'Can', 'still', 'we', 'water?', 'some'], ans: 'Can we have some still water?', exp: 'Still water = água sem gás (sparkling water = com gás).' },
      { type: 'listening', prompt: 'Ouça a pergunta do garçom:', audio: 'Are you ready to order or do you need a few more minutes?', options: ['Are you ready to order or do you need a few more minutes?', 'Would you like some dessert or coffee after dinner?', 'How would you like your steak cooked tonight?', 'Is everything delicious with your meal tonight?'], ans: 'Are you ready to order or do you need a few more minutes?', exp: 'Are you ready to order...?' },
      { type: 'translate', prompt: 'Traduza: "A comida está deliciosa!"', options: ['The food is delicious!', 'The food is disgusting!', 'The food is cold!', 'The menu is delicious!'], ans: 'The food is delicious!', exp: 'The food is delicious!' },
      { type: 'multiple-choice', prompt: 'Como se diz "Água com gás" em inglês?', options: ['Sparkling water', 'Gas water', 'Bubbly drink', 'Air water'], ans: 'Sparkling water', exp: 'Sparkling water = água com gás.' },
      { type: 'word-order', prompt: 'Organize a pergunta sobre recomendação:', options: ['recommend?', 'What', 'you', 'do'], ans: 'What do you recommend?', exp: 'What do you recommend? = O que você recomenda?' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Does this dish contain any nuts or gluten?', options: ['Does this dish contain any nuts or gluten?', 'Does this pasta have fresh tomatoes and garlic?', 'Is this soup served hot or cold?', 'Can I order this salad without onions?'], ans: 'Does this dish contain any nuts or gluten?', exp: 'contain any nuts or gluten.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "The check, please"', audio: 'The check please', ans: 'The check please', hint: '/ðə tʃek pliːz/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: 'O que significa "Tip" em um restaurante?', options: ['Gorjeta', 'Prato do dia', 'Sobremesa', 'Cardápio'], ans: 'Gorjeta', exp: 'Tip = gorjeta.' }
    ]
  },
  // 5: Lugares na Cidade
  {
    num: 5, title: 'Lugares na Cidade', subtitle: 'Bank, pharmacy, hospital, bakery, park',
    obj: 'Reconhecer e nomear os principais pontos e serviços de uma cidade.',
    type: 'lesson', icon: 'map',
    theory: ['Estabelecimentos: bank, pharmacy/drugstore, bakery, grocery store, library, bookstore, post office, hospital, police station.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '💊', prompt: 'Onde compramos remédios em inglês americano?', options: ['Pharmacy or Drugstore', 'Bakery', 'Library', 'Post office'], ans: 'Pharmacy or Drugstore', exp: 'Pharmacy / drugstore = farmácia.' },
      { type: 'fill-blank', visualEmoji: '📚', prompt: 'Atenção: "Library" é biblioteca! "I borrow books from the city _____."', options: ['library', 'bookstore', 'bakery', 'hospital'], ans: 'library', exp: 'Library = biblioteca (onde pega emprestado). Bookstore = livraria (onde compra).' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre correios:', options: ['is', 'office?', 'Where', 'post', 'nearest', 'the'], ans: 'Where is the nearest post office?', exp: 'Where is the nearest post office?' },
      { type: 'listening', prompt: 'Ouça o local:', audio: 'The museum is open every day except Monday.', options: ['The museum is open every day except Monday.', 'The library is open every day except Sunday.', 'The gallery is closed on Monday afternoon.', 'The park is open twenty-four hours a day.'], ans: 'The museum is open every day except Monday.', exp: 'The museum is open...' },
      { type: 'translate', prompt: 'Traduza: "Eu comprei pão fresco na padaria."', options: ['I bought fresh bread at the bakery.', 'I bought fresh bread at the library.', 'I bought fresh bread at the bookstore.', 'I bought fresh bread at the bank.'], ans: 'I bought fresh bread at the bakery.', exp: 'Bakery = padaria.' },
      { type: 'multiple-choice', prompt: 'Cuidado com o falso cognato: O que significa "BOOKSTORE"?', options: ['Livraria (loja onde se compram livros)', 'Biblioteca (onde se pegam livros emprestados)', 'Caderno de anotações', 'Editora'], ans: 'Livraria (loja onde se compram livros)', exp: 'Bookstore = loja de livros. Library = biblioteca.' },
      { type: 'word-order', prompt: 'Organize a frase de localização:', options: ['park', 'is', 'The', 'station.', 'behind', 'the'], ans: 'The park is behind the station.', exp: 'The park is behind the station.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Is there a gas station near this highway?', options: ['Is there a gas station near this highway?', 'Is there a police station near this exit?', 'Is there a train station near this avenue?', 'Is there a pharmacy near this hotel?'], ans: 'Is there a gas station near this highway?', exp: 'gas station = posto de gasolina.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Where is the nearest pharmacy?"', audio: 'Where is the nearest pharmacy', ans: 'Where is the nearest pharmacy', hint: '/wer ɪz ðə ˈnɪr.ɪst ˈfɑːr.mə.si/', exp: 'Muito bem!' },
      { type: 'multiple-choice', visualEmoji: '🚒', prompt: 'Como se chama o quartel de bombeiros?', options: ['Fire station', 'Police station', 'Train station', 'Gas station'], ans: 'Fire station', exp: 'Fire station = corpo de bombeiros.' }
    ]
  },
  // 6: Direções
  {
    num: 6, title: 'Pedindo & Dando Direções', subtitle: 'Turn left, go straight, next to, across from',
    obj: 'Pedir e fornecer direções na rua com confiança.',
    type: 'lesson', icon: 'compass',
    theory: ['Go straight ahead = siga em frente.', 'Turn left / turn right = vire à esquerda / à direita.', 'Cross the street = atravesse a rua. Block = quarteirão. Across from = do outro lado de.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '➡️', prompt: 'Como dizer "Vire à direita no semáforo"?', options: ['Turn right at the traffic lights.', 'Turn left at the traffic lights.', 'Go straight at the traffic lights.', 'Cross right at the traffic lights.'], ans: 'Turn right at the traffic lights.', exp: 'Turn right = vire à direita.' },
      { type: 'fill-blank', visualEmoji: '⬆️', prompt: 'Complete: "Go _____ ahead for two blocks."', options: ['straight', 'right', 'left', 'across'], ans: 'straight', exp: 'Go straight ahead = siga em frente.' },
      { type: 'word-order', prompt: 'Monte o pedido de informação na rua:', options: ['get', 'the', 'How', 'to', 'station?', 'can', 'I'], ans: 'How can I get to the station?', exp: 'How can I get to...?' },
      { type: 'listening', prompt: 'Ouça a instrução de direção:', audio: 'Walk two blocks, turn left, and it is on your right.', options: ['Walk two blocks, turn left, and it is on your right.', 'Walk three blocks, turn right, and it is on your left.', 'Go straight ahead and turn right at the corner.', 'Cross the avenue and turn left at the bank.'], ans: 'Walk two blocks, turn left, and it is on your right.', exp: 'on your right = à sua direita.' },
      { type: 'translate', prompt: 'Traduza: "Fica do outro lado da rua."', options: ['It is across the street.', 'It is in the street.', 'It is next street.', 'It is inside the street.'], ans: 'It is across the street.', exp: 'Across the street = do outro lado da rua.' },
      { type: 'multiple-choice', visualEmoji: '🚦', prompt: 'O que significa "Traffic lights"?', options: ['Semáforo / sinaleira', 'Faixa de pedestres', 'Calçada', 'Placa de trânsito'], ans: 'Semáforo / sinaleira', exp: 'Traffic lights = semáforo.' },
      { type: 'word-order', prompt: 'Organize a orientação:', options: ['corner.', 'on', 'It', 'is', 'the'], ans: 'It is on the corner.', exp: 'It is on the corner = Fica na esquina.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'The bank is between the pharmacy and the bakery.', options: ['The bank is between the pharmacy and the bakery.', 'The bank is next to the supermarket and the library.', 'The pharmacy is behind the bakery and the bank.', 'The hospital is opposite the post office.'], ans: 'The bank is between the pharmacy and the bakery.', exp: 'between = entre dois lugares.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Turn left at the next corner"', audio: 'Turn left at the next corner', ans: 'Turn left at the next corner', hint: '/tɜːrn left æt ðə nekst ˈkɔːr.nər/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Como se diz "Quarteirão" em inglês?', options: ['Block', 'Street', 'Avenue', 'Corner'], ans: 'Block', exp: 'A block = um quarteirão.' }
    ]
  },
  // 7: Transporte
  {
    num: 7, title: 'Meios de Transporte', subtitle: 'Bus, train, subway, flight, bicycle, taxi',
    obj: 'Falar sobre locomoção urbana e viagens em diferentes transportes.',
    type: 'lesson', icon: 'navigation',
    theory: ['Meios: bus, train, subway/metro, taxi/cab, bicycle/bike, airplane/flight.', 'Preposições: ON the bus, ON the train, ON the plane (onde você fica em pé), mas IN the car, IN a taxi.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🚇', prompt: 'Como se chama o metrô em Nova York?', options: ['Subway', 'Tube', 'Underground', 'Train car'], ans: 'Subway', exp: 'Subway (EUA); The Tube / Underground (Londres).' },
      { type: 'fill-blank', visualEmoji: '🚌', prompt: 'Qual preposição usamos com ônibus? "I am _____ the bus right now."', options: ['on', 'in', 'at', 'into'], ans: 'on', exp: 'Para transporte coletivo usamos ON: on the bus, on the train.' },
      { type: 'word-order', prompt: 'Monte a frase de ida ao trabalho:', options: ['takes', 'She', 'to', 'work.', 'train', 'the'], ans: 'She takes the train to work.', exp: 'She takes the train to work.' },
      { type: 'listening', prompt: 'Ouça a informação sobre o transporte:', audio: 'The next bus arrives in ten minutes.', options: ['The next bus arrives in ten minutes.', 'The next train leaves in ten minutes.', 'The previous bus was delayed fifteen minutes.', 'The subway arrives in five minutes.'], ans: 'The next bus arrives in ten minutes.', exp: 'The next bus arrives...' },
      { type: 'translate', prompt: 'Traduza: "Eu vou para o trabalho de bicicleta."', options: ['I go to work by bicycle.', 'I go to work on car.', 'I go to work by foot.', 'I go to work in train.'], ans: 'I go to work by bicycle.', exp: 'By bicycle / by bike.' },
      { type: 'multiple-choice', prompt: 'Qual preposição usamos para "a pé"?', options: ['ON foot', 'BY foot', 'IN foot', 'AT foot'], ans: 'ON foot', exp: 'Dizemos "by bus", "by car", mas "ON foot" (a pé).' },
      { type: 'word-order', prompt: 'Organize a pergunta sobre passagem:', options: ['is', 'ticket?', 'How', 'much', 'bus', 'the'], ans: 'How much is the bus ticket?', exp: 'How much is the bus ticket?' },
      { type: 'listening', prompt: 'Ouça:', audio: 'You need to change trains at Central Station.', options: ['You need to change trains at Central Station.', 'You need to get off the bus at Central Park.', 'You should take the express train to Central Station.', 'The train stops at Central Station and then airport.'], ans: 'You need to change trains at Central Station.', exp: 'change trains = trocar de trem/baldeação.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I take the subway every day"', audio: 'I take the subway every day', ans: 'I take the subway every day', hint: '/aɪ teɪk ðə ˈsʌb.weɪ ˈev.ri deɪ/', exp: 'Perfeita pronúncia!' },
      { type: 'multiple-choice', prompt: 'Para táxi e carro particular, usamos qual preposição?', options: ['IN a car / IN a taxi', 'ON a car / ON a taxi', 'BY the taxi', 'AT a car'], ans: 'IN a car / IN a taxi', exp: 'Em veículos menores onde não se anda de pé usamos IN.' }
    ]
  },
  // 8: Aeroporto
  {
    num: 8, title: 'No Aeroporto: Check-in & Embarque', subtitle: 'Boarding pass, gate, luggage, passport',
    obj: 'Navegar com autonomia em aeroportos internacionais.',
    type: 'lesson', icon: 'plane',
    theory: ['Documentos: passport, boarding pass, visa.', 'Locais: check-in counter, security check, departure gate, baggage claim.', 'Termos: carry-on bag, checked luggage, flight delayed/on time.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🎫', prompt: 'Como se chama o cartão de embarque?', options: ['Boarding pass', 'Travel card', 'Flight ticket', 'Entry paper'], ans: 'Boarding pass', exp: 'Boarding pass = cartão de embarque.' },
      { type: 'fill-blank', visualEmoji: '🧳', prompt: 'Complete com bagagem: "How many pieces of _____ are you checking?"', options: ['luggage', 'luggages', 'bag', 'suitcase'], ans: 'luggage', exp: 'Luggage / baggage é incontável (nunca "luggages").' },
      { type: 'word-order', prompt: 'Monte o pedido do agente de imigração:', options: ['May', 'your', 'passport,', 'I', 'see', 'please?'], ans: 'May I see your passport, please?', exp: 'May I see your passport, please?' },
      { type: 'listening', prompt: 'Ouça o anúncio do voo:', audio: 'Flight 402 to London is now boarding at Gate 15.', options: ['Flight 402 to London is now boarding at Gate 15.', 'Flight 402 to Paris is now delayed at Gate 15.', 'Flight 302 to London is now boarding at Gate 12.', 'Flight 402 to New York is ready at Gate 50.'], ans: 'Flight 402 to London is now boarding at Gate 15.', exp: 'boarding at Gate 15.' },
      { type: 'translate', prompt: 'Traduza: "Onde fica a esteira de bagagens?"', options: ['Where is the baggage claim?', 'Where is the security check?', 'Where is the departure gate?', 'Where is the customs office?'], ans: 'Where is the baggage claim?', exp: 'Baggage claim = restituição de bagagens.' },
      { type: 'multiple-choice', visualEmoji: '🚪', prompt: 'O portão de embarque é chamado de:', options: ['Gate', 'Door', 'Port', 'Exit'], ans: 'Gate', exp: 'Departure gate = portão de embarque.' },
      { type: 'word-order', prompt: 'Organize a pergunta sobre o status do voo:', options: ['time?', 'flight', 'Is', 'the', 'on'], ans: 'Is the flight on time?', exp: 'Is the flight on time? (O voo está no horário?)' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Please place all liquids and electronic devices in the tray.', options: ['Please place all liquids and electronic devices in the tray.', 'Please keep your shoes and jacket on during the check.', 'Please take out your boarding pass and passport.', 'Please proceed directly to your departure gate.'], ans: 'Please place all liquids and electronic devices in the tray.', exp: 'security check instructions.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "Here is my passport and boarding pass"', audio: 'Here is my passport and boarding pass', ans: 'Here is my passport and boarding pass', hint: '/hɪr ɪz maɪ ˈpæs.pɔːrt ənd ˈbɔːr.dɪŋ pæs/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Bagagem de mão que sobe com você na cabine é chamada de:', options: ['Carry-on bag', 'Checked bag', 'Heavy luggage', 'Cargo item'], ans: 'Carry-on bag', exp: 'Carry-on bag / hand luggage.' }
    ]
  },
  // 9: Hotel
  {
    num: 9, title: 'No Hotel: Hospedagem & Serviços', subtitle: 'Reservation, key card, receptionist, check-out',
    obj: 'Fazer check-in, solicitar serviços de quarto e fazer check-out em hotéis.',
    type: 'lesson', icon: 'key',
    theory: ['Vocabulário: reservation, receptionist, key card, room service, wake-up call, Wi-Fi password.', 'Perguntas: "What time is breakfast?", "Could I have an extra towel?".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🏨', prompt: 'Como dizer "Eu tenho uma reserva no nome de Silva"?', options: ['I have a reservation under the name Silva.', 'I have a booking with Silva.', 'I got a room for Silva name.', 'My reserve is Silva.'], ans: 'I have a reservation under the name Silva.', exp: 'under the name Silva.' },
      { type: 'fill-blank', visualEmoji: '💳', prompt: 'O cartão magnético da porta do quarto chama-se: "Here is your _____."', options: ['key card', 'door card', 'room paper', 'hotel tag'], ans: 'key card', exp: 'Key card = cartão chave.' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre o café da manhã:', options: ['served?', 'is', 'time', 'breakfast', 'What'], ans: 'What time is breakfast served?', exp: 'What time is breakfast served?' },
      { type: 'listening', prompt: 'Ouça a informação da recepção:', audio: 'Check-out is at eleven o\'clock in the morning.', options: ['Check-out is at eleven o\'clock in the morning.', 'Check-in is at three o\'clock in the afternoon.', 'Breakfast is served until ten o\'clock.', 'The swimming pool closes at nine o\'clock.'], ans: 'Check-out is at eleven o\'clock in the morning.', exp: 'Check-out is at eleven...' },
      { type: 'translate', prompt: 'Traduza: "Você poderia me trazer uma toalha extra?"', options: ['Could you bring me an extra towel, please?', 'Can you take an extra blanket, please?', 'Could I bring you an extra towel?', 'Would you like an extra pillow?'], ans: 'Could you bring me an extra towel, please?', exp: 'an extra towel = uma toalha extra.' },
      { type: 'multiple-choice', visualEmoji: '📶', prompt: 'Como perguntar a senha do Wi-Fi no hotel?', options: ['What is the Wi-Fi password, please?', 'Where is the internet code?', 'How is the connection name?', 'Can I take the Wi-Fi key?'], ans: 'What is the Wi-Fi password, please?', exp: 'What is the Wi-Fi password?' },
      { type: 'word-order', prompt: 'Organize a frase de solicitação:', options: ['is', 'working.', 'not', 'air', 'conditioning', 'The'], ans: 'The air conditioning is not working.', exp: 'The air conditioning is not working.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Your room is on the fourth floor, right opposite the elevator.', options: ['Your room is on the fourth floor, right opposite the elevator.', 'Your room is on the third floor, near the stairs.', 'Your room is on the fourteenth floor with ocean view.', 'The restaurant is on the first floor near the lobby.'], ans: 'Your room is on the fourth floor, right opposite the elevator.', exp: 'on the fourth floor.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I would like to check out, please"', audio: 'I would like to check out please', ans: 'I would like to check out please', hint: '/aɪ wʊd laɪk tuː tʃek aʊt pliːz/', exp: 'Perfeita naturalidade!' },
      { type: 'multiple-choice', prompt: 'O serviço de refeições entregues no próprio quarto é:', options: ['Room service', 'Kitchen delivery', 'Bed food', 'House dish'], ans: 'Room service', exp: 'Room service = serviço de quarto.' }
    ]
  },
  // 10: Chest 1 (11 questions)
  {
    num: 10, title: 'Baú da Sabedoria: O Explorador Urbano', subtitle: 'Revisão das 9 lições cotidianas e bônus',
    obj: 'Consolidar vocabulário de casa, compras, restaurantes, transporte e viagens.',
    type: 'chest', icon: 'award',
    theory: ['Primeiro Baú do Mundo 3! Parabéns por dominar situações urbanas práticas.'],
    items: [
      { type: 'multiple-choice', prompt: '[Revisão] Como pedir a conta no restaurante?', options: ['The check, please.', 'The cost, please.', 'Give receipt now.', 'Finish my table.'], ans: 'The check, please.', exp: 'The check, please.' },
      { type: 'fill-blank', prompt: '[Revisão] "Go _____ ahead for two blocks, then turn right."', options: ['straight', 'across', 'left', 'corner'], ans: 'straight', exp: 'Go straight ahead.' },
      { type: 'word-order', prompt: '[Revisão] Monte a frase de aeroporto:', options: ['passport', 'is', 'my', 'boarding', 'Here', 'pass.', 'and'], ans: 'Here is my passport and boarding pass.', exp: 'Here is my passport and boarding pass.' },
      { type: 'listening', prompt: '[Revisão] Ouça e marque:', audio: 'The subway arrives every four minutes during rush hour.', options: ['The subway arrives every four minutes during rush hour.', 'The bus arrives every fifteen minutes on weekends.', 'The express train leaves in forty minutes.', 'The station is closed for maintenance tonight.'], ans: 'The subway arrives every four minutes during rush hour.', exp: 'every four minutes.' },
      { type: 'multiple-choice', prompt: '[Revisão] Qual preposição usamos com ônibus e metrô?', options: ['ON (on the bus, on the subway)', 'IN (in the bus, in the subway)', 'AT (at the bus)', 'BY (by the bus inside)'], ans: 'ON (on the bus, on the subway)', exp: 'ON the bus / train.' },
      { type: 'translate', prompt: '[Revisão] Traduza: "Onde fica o supermercado mais próximo?"', options: ['Where is the nearest supermarket?', 'Where is the closed supermarket?', 'Which is the nearest bookstore?', 'Where was the supermarket yesterday?'], ans: 'Where is the nearest supermarket?', exp: 'nearest supermarket.' },
      { type: 'word-order', prompt: '[Revisão] Ordene o pedido no hotel:', options: ['extra', 'pillow,', 'I', 'an', 'please?', 'Can', 'have'], ans: 'Can I have an extra pillow, please?', exp: 'Can I have an extra pillow, please?' },
      { type: 'speaking-repeat', prompt: '[Revisão] Fale no microfone: "Could you tell me how to get to the hotel?"', audio: 'Could you tell me how to get to the hotel', ans: 'Could you tell me how to get to the hotel', hint: '/kʊd juː tel miː haʊ tuː ɡet tuː ðə hoʊˈtel/', exp: 'Excelente!' },
      { type: 'fill-blank', prompt: '[Revisão] "A slice of _____ with butter."', options: ['bread', 'water', 'rice', 'soup'], ans: 'bread', exp: 'A slice of bread.' },
      { type: 'multiple-choice', prompt: '[Revisão] O que significa "Baggage claim"?', options: ['Esteira de bagagens / restituição', 'Inspeção de segurança', 'Portão de embarque', 'Cartão de embarque'], ans: 'Esteira de bagagens / restituição', exp: 'Restituição de bagagens.' },
      { type: 'translate', prompt: '[Revisão] "A comida estava deliciosa, obrigado."', options: ['The food was delicious, thank you.', 'The food was disgusting, thanks.', 'The plate is clean, thank you.', 'The meal was cold, thanks.'], ans: 'The food was delicious, thank you.', exp: 'The food was delicious.' }
    ]
  }
];

// Let's add phases 11 to 30 for World 3:
// We can define phases 11 to 30 with rich items
const remainingW3 = [
  // 11: Clima
  {
    num: 11, title: 'O Clima & Previsão do Tempo', subtitle: 'Sunny, rainy, cloudy, windy, snowy',
    obj: 'Descrever o tempo meteorológico e compreender previsões.',
    type: 'lesson', icon: 'cloud-rain',
    theory: ['Sunny (ensolarado), rainy (chuvoso), cloudy (nublado), windy (com vento), snowy (com neve).', '"What\'s the weather like today?" = "Como está o tempo hoje?".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '☀️', prompt: 'Como se diz "Hoje está ensolarado e quente"?', options: ['Today is sunny and warm.', 'Today is rainy and cold.', 'Today is cloudy and dark.', 'Today has sun and hot.'], ans: 'Today is sunny and warm.', exp: 'sunny and warm.' },
      { type: 'fill-blank', visualEmoji: '🌧️', prompt: 'Complete: "Take an umbrella, it is _____ outside."', options: ['raining', 'shining', 'snow', 'wind'], ans: 'raining', exp: 'It is raining outside.' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre o clima:', options: ['is', 'What', 'weather', 'the', 'like?'], ans: 'What is the weather like?', exp: 'What is the weather like?' },
      { type: 'listening', prompt: 'Ouça a previsão:', audio: 'The forecast says it will rain this afternoon.', options: ['The forecast says it will rain this afternoon.', 'The forecast says it will be sunny all day.', 'The news says it will snow tomorrow morning.', 'The report says the wind will be strong.'], ans: 'The forecast says it will rain this afternoon.', exp: 'The forecast says...' },
      { type: 'translate', prompt: 'Traduza: "Está ventando muito hoje."', options: ['It is very windy today.', 'It has much wind today.', 'It is wind today.', 'It does wind today.'], ans: 'It is very windy today.', exp: 'It is very windy today.' },
      { type: 'multiple-choice', prompt: 'Como dizer "Está nevando"?', options: ['It is snowing.', 'It is snow.', 'Has snowing.', 'There snows.'], ans: 'It is snowing.', exp: 'It is snowing.' },
      { type: 'word-order', prompt: 'Organize a frase de temperatura:', options: ['degrees', 'It', 'twenty-five', 'is', 'Celsius.'], ans: 'It is twenty-five degrees Celsius.', exp: 'It is twenty-five degrees Celsius.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Don\'t forget your sunglasses, it is very bright outside.', options: ['Don\'t forget your sunglasses, it is very bright outside.', 'Don\'t forget your raincoat, it is stormy outside.', 'Take your warm hat, it is freezing cold.', 'Wear your boots, the street is muddy.'], ans: 'Don\'t forget your sunglasses, it is very bright outside.', exp: 'sunglasses... very bright.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "What is the weather like today?"', audio: 'What is the weather like today', ans: 'What is the weather like today', hint: '/wɑːt ɪz ðə ˈweð.ər laɪk təˈdeɪ/', exp: 'Perfeita entonação!' },
      { type: 'multiple-choice', prompt: 'Qual termo significa "Previsão do tempo"?', options: ['Weather forecast', 'Weather prediction', 'Sky news', 'Climate report'], ans: 'Weather forecast', exp: 'Weather forecast = previsão do tempo.' }
    ]
  },
  // 12: Estações do Ano
  {
    num: 12, title: 'As Quatro Estações do Ano', subtitle: 'Spring, Summer, Autumn/Fall, Winter',
    obj: 'Nomear as estações e falar sobre preferências sazonais.',
    type: 'lesson', icon: 'sun',
    theory: ['Spring (primavera), Summer (verão), Autumn/Fall (outono), Winter (inverno).', 'Preposição: sempre "IN": in summer, in winter.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🌸', prompt: 'Como se diz "Primavera" em inglês?', options: ['Spring', 'Summer', 'Autumn', 'Winter'], ans: 'Spring', exp: 'Spring = primavera.' },
      { type: 'fill-blank', visualEmoji: '❄️', prompt: 'A estação mais fria é: "It snows a lot during _____."', options: ['winter', 'summer', 'spring', 'fall'], ans: 'winter', exp: 'Winter = inverno.' },
      { type: 'word-order', prompt: 'Monte a frase de preferência:', options: ['is', 'season.', 'Summer', 'favorite', 'my'], ans: 'Summer is my favorite season.', exp: 'Summer is my favorite season.' },
      { type: 'listening', prompt: 'Ouça a estação mencionada:', audio: 'The leaves turn orange and red in autumn.', options: ['The leaves turn orange and red in autumn.', 'The flowers bloom beautifully in spring.', 'People love going to the beach in summer.', 'The snow covers the mountains in winter.'], ans: 'The leaves turn orange and red in autumn.', exp: 'Autumn / Fall = outono.' },
      { type: 'translate', prompt: 'Traduza: "Eu costumo tirar férias no verão."', options: ['I usually take vacation in summer.', 'I usually take vacation on summer.', 'I always work in summer.', 'I go to holiday at summer.'], ans: 'I usually take vacation in summer.', exp: 'in summer.' },
      { type: 'multiple-choice', prompt: 'No inglês americano, qual outro nome é dado para "Autumn"?', options: ['Fall', 'Drop', 'Leaf', 'Down'], ans: 'Fall', exp: 'Fall (EUA) = Autumn (UK).' },
      { type: 'word-order', prompt: 'Organize a frase primaveril:', options: ['bloom', 'spring.', 'Flowers', 'in'], ans: 'Flowers bloom in spring.', exp: 'Flowers bloom in spring.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Winter in Canada is extremely cold and snowy.', options: ['Winter in Canada is extremely cold and snowy.', 'Summer in Spain is warm and sunny.', 'Spring in Japan is famous for cherry blossoms.', 'Autumn in New York is pleasant and colorful.'], ans: 'Winter in Canada is extremely cold and snowy.', exp: 'Winter in Canada...' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "My favorite season is spring"', audio: 'My favorite season is spring', ans: 'My favorite season is spring', hint: '/maɪ ˈfeɪ.vər.ɪt ˈsiː.zən ɪz sprɪŋ/', exp: 'Muito bom!' },
      { type: 'multiple-choice', prompt: 'Qual preposição usamos antes de estações do ano?', options: ['IN (in summer, in winter)', 'ON (on summer)', 'AT (at summer)', 'BY (by winter)'], ans: 'IN (in summer, in winter)', exp: 'Estações levam IN.' }
    ]
  },
  // 13: Corpo Humano
  {
    num: 13, title: 'Partes do Corpo Humano', subtitle: 'Head, eyes, ears, hands, arms, legs, back',
    obj: 'Identificar partes do corpo e descrever sensações físicas.',
    type: 'lesson', icon: 'user',
    theory: ['Head (cabeça), eyes (olhos), ears (orelhas), mouth (boca), nose (nariz).', 'Hands (mãos), arms (braços), legs (pernas), feet (pés), back (costas).'],
    items: [
      { type: 'multiple-choice', visualEmoji: '👀', prompt: 'Como se diz "Olhos" e "Ouvidos" em inglês?', options: ['Eyes and Ears', 'Nose and Mouth', 'Hands and Feet', 'Arms and Legs'], ans: 'Eyes and Ears', exp: 'Eyes (/aɪz/) e Ears (/ɪərz/).' },
      { type: 'fill-blank', visualEmoji: '🤚', prompt: 'Complete: "Wash your _____ before eating."', options: ['hands', 'feet', 'ears', 'shoulders'], ans: 'hands', exp: 'Wash your hands = lave suas mãos.' },
      { type: 'word-order', prompt: 'Monte a frase sobre dor nas costas:', options: ['hurts', 'after', 'working.', 'back', 'My'], ans: 'My back hurts after working.', exp: 'My back hurts = Minhas costas doem.' },
      { type: 'listening', prompt: 'Ouça a parte do corpo mencionada:', audio: 'He injured his left shoulder during the football match.', options: ['He injured his left shoulder during the football match.', 'He injured his right knee during the soccer game.', 'She hurt her left ankle while running.', 'He broke his left arm in an accident.'], ans: 'He injured his left shoulder during the football match.', exp: 'left shoulder (ombro esquerdo).' },
      { type: 'translate', prompt: 'Traduza: "Minha cabeça dói."', options: ['My head hurts.', 'My head is hurt.', 'My head pain.', 'I have head hurt.'], ans: 'My head hurts.', exp: 'My head hurts.' },
      { type: 'multiple-choice', visualEmoji: '🦶', prompt: 'Qual é o plural de FOOT (pé)?', options: ['Feet', 'Foots', 'Feets', 'Footes'], ans: 'Feet', exp: 'One foot, two feet.' },
      { type: 'word-order', prompt: 'Organize a descrição física:', options: ['blue', 'has', 'eyes.', 'She', 'bright'], ans: 'She has bright blue eyes.', exp: 'She has bright blue eyes.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Open your mouth and say ah.', options: ['Open your mouth and say ah.', 'Close your eyes and breathe deeply.', 'Raise your right arm please.', 'Turn your head to the left.'], ans: 'Open your mouth and say ah.', exp: 'Open your mouth.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "My head hurts"', audio: 'My head hurts', ans: 'My head hurts', hint: '/maɪ hed hɜːrts/', exp: 'Perfeita clareza!' },
      { type: 'multiple-choice', prompt: 'Qual parte do corpo usamos para ouvir sons?', options: ['Ears', 'Eyes', 'Nose', 'Tongue'], ans: 'Ears', exp: 'Ears = orelhas / ouvidos.' }
    ]
  },
  // 14: Farmácia
  {
    num: 14, title: 'Na Farmácia & Sintomas de Saúde', subtitle: 'Headache, fever, stomachache, medicine',
    obj: 'Descrever sintomas comuns e comprar medicamentos na farmácia.',
    type: 'lesson', icon: 'activity',
    theory: ['Dores terminadas em -ache: headache (dor de cabeça), stomachache (dor de estômago), toothache (dor de dente).', 'Sintomas: fever (febre), cough (tosse), sore throat (dor de garganta), cold (resfriado).'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🤕', prompt: 'Como se diz "Dor de cabeça" em inglês?', options: ['Headache', 'Stomachache', 'Toothache', 'Backache'], ans: 'Headache', exp: 'Headache (/ˈhed.eɪk/).' },
      { type: 'fill-blank', visualEmoji: '🤒', prompt: 'Complete: "I have a high _____ and I feel very cold."', options: ['fever', 'cough', 'ache', 'throat'], ans: 'fever', exp: 'A high fever = febre alta.' },
      { type: 'word-order', prompt: 'Monte o pedido na farmácia:', options: ['for', 'something', 'a', 'I', 'need', 'headache.'], ans: 'I need something for a headache.', exp: 'I need something for a headache.' },
      { type: 'listening', prompt: 'Ouça a recomendação do farmacêutico:', audio: 'Take this pill twice a day after meals.', options: ['Take this pill twice a day after meals.', 'Take this syrup three times a day before bed.', 'Drink plenty of water and rest for two days.', 'Take one tablet every four hours if fever continues.'], ans: 'Take this pill twice a day after meals.', exp: 'twice a day after meals.' },
      { type: 'translate', prompt: 'Traduza: "Estou com dor de garganta."', options: ['I have a sore throat.', 'I have a throat pain.', 'My throat is soreache.', 'I am with sore throat.'], ans: 'I have a sore throat.', exp: 'a sore throat = dor de garganta.' },
      { type: 'multiple-choice', prompt: 'Receita médica em inglês é chamada de:', options: ['Prescription', 'Medical recipe', 'Doctor note', 'Health paper'], ans: 'Prescription', exp: 'Prescription = receita médica (recipe é receita culinária!).' },
      { type: 'word-order', prompt: 'Organize o conselho médico:', options: ['drink', 'water.', 'Rest', 'and', 'plenty', 'of'], ans: 'Rest and drink plenty of water.', exp: 'Rest and drink plenty of water.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Do you need a prescription for these painkillers?', options: ['Do you need a prescription for these painkillers?', 'Do you have any allergies to penicillin?', 'Can I take this medication without food?', 'Are these vitamins suitable for children?'], ans: 'Do you need a prescription for these painkillers?', exp: 'painkillers = analgésicos.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I have a terrible headache"', audio: 'I have a terrible headache', ans: 'I have a terrible headache', hint: '/aɪ hæv ə ˈter.ə.bəl ˈhed.eɪk/', exp: 'Muito bem!' },
      { type: 'multiple-choice', prompt: 'Qual termo significa "Dor de dente"?', options: ['Toothache', 'Headache', 'Earache', 'Backache'], ans: 'Toothache', exp: 'Toothache = dor de dente.' }
    ]
  },
  // 15: No Médico
  {
    num: 15, title: 'No Médico: Consulta & Diagnóstico', subtitle: 'Doctor, appointment, prescription, rest',
    obj: 'Interagir em uma consulta médica descrevendo sintomas e entendendo orientações.',
    type: 'lesson', icon: 'clipboard',
    theory: ['Doctor / physician = médico; appointment = consulta marcada.', '"Where does it hurt?" = Onde dói? "How long have you had this?" = Há quanto tempo você está com isso?'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🩺', prompt: 'Como agendar uma consulta médica?', options: ['I would like to make an appointment.', 'I want to reserve a doctor.', 'I need to book a medical time.', 'Can I rent a physician?'], ans: 'I would like to make an appointment.', exp: 'make an appointment = agendar consulta.' },
      { type: 'fill-blank', prompt: 'O médico pergunta onde dói: "Where does it _____?"', options: ['hurt', 'pain', 'sore', 'break'], ans: 'hurt', exp: 'Where does it hurt?' },
      { type: 'word-order', prompt: 'Monte o relato do paciente:', options: ['two', 'dizzy', 'for', 'have', 'I', 'felt', 'days.'], ans: 'I have felt dizzy for two days.', exp: 'Dizzy = com tontura.' },
      { type: 'listening', prompt: 'Ouça o diagnóstico do médico:', audio: 'You have a mild flu. Get plenty of rest and drink liquids.', options: ['You have a mild flu. Get plenty of rest and drink liquids.', 'You have a severe infection. Take these antibiotics.', 'Your blood pressure is completely normal today.', 'You need to take an X-ray of your chest.'], ans: 'You have a mild flu. Get plenty of rest and drink liquids.', exp: 'a mild flu = uma gripe leve.' },
      { type: 'translate', prompt: 'Traduza: "Eu sou alérgico a penicilina."', options: ['I am allergic to penicillin.', 'I have allergy to penicillin.', 'I am allergical with penicillin.', 'My body is allergic of penicillin.'], ans: 'I am allergic to penicillin.', exp: 'I am allergic to...' },
      { type: 'multiple-choice', prompt: 'O que significa "Blood pressure"?', options: ['Pressão arterial', 'Exame de sangue', 'Glicose', 'Frequência cardíaca'], ans: 'Pressão arterial', exp: 'Blood pressure = pressão arterial.' },
      { type: 'word-order', prompt: 'Organize a orientação médica:', options: ['medicine', 'Take', 'food.', 'with', 'this'], ans: 'Take this medicine with food.', exp: 'Take this medicine with food.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'If your condition worsens, return to the clinic immediately.', options: ['If your condition worsens, return to the clinic immediately.', 'If you feel better tomorrow, stop taking the pills.', 'Come back for a follow-up visit in two weeks.', 'The nurse will take your temperature now.'], ans: 'If your condition worsens, return to the clinic immediately.', exp: 'condition worsens = piorar.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "I have an appointment at three"', audio: 'I have an appointment at three', ans: 'I have an appointment at three', hint: '/aɪ hæv ən əˈpɔɪnt.mənt æt θriː/', exp: 'Perfeita clareza!' },
      { type: 'multiple-choice', prompt: 'Qual termo significa "Fazer um raio-X"?', options: ['Take an X-ray', 'Make an X-ray', 'Do an X-ray', 'Have a photo'], ans: 'Take an X-ray', exp: 'Take an X-ray.' }
    ]
  },
  // 16: Compras de Roupas
  {
    num: 16, title: 'Compras de Roupas & Provador', subtitle: 'Fitting room, size, color, discount, refund',
    obj: 'Comprar roupas, experimentar peças no provador e pedir tamanhos.',
    type: 'lesson', icon: 'tag',
    theory: ['Fitting room = provador. Sizes: Small (S), Medium (M), Large (L), Extra Large (XL).', '"Can I try this on?" = Posso experimentar? "Does it fit?" = Ficou bom/serviu?'],
    items: [
      { type: 'multiple-choice', visualEmoji: '👔', prompt: 'Como perguntar se pode experimentar uma roupa?', options: ['Can I try this on?', 'Can I test this cloth?', 'May I wear this here?', 'Can I sample this shirt?'], ans: 'Can I try this on?', exp: 'Try on = experimentar roupa.' },
      { type: 'fill-blank', visualEmoji: '👗', prompt: 'Onde se experimenta a roupa: "Where is the _____ room?"', options: ['fitting', 'dressing', 'changing', 'testing'], ans: 'fitting', exp: 'Fitting room = provador.' },
      { type: 'word-order', prompt: 'Monte o pedido de tamanho maior:', options: ['have', 'Do', 'in', 'large?', 'this', 'you', 'a'], ans: 'Do you have this in a large?', exp: 'Do you have this in a large?' },
      { type: 'listening', prompt: 'Ouça a pergunta do atendente:', audio: 'How does it fit? Is it too tight or too loose?', options: ['How does it fit? Is it too tight or too loose?', 'What color would you like to see next?', 'Would you like to try the matching shoes as well?', 'Do you want to pay with debit or credit card?'], ans: 'How does it fit? Is it too tight or too loose?', exp: 'tight = apertado; loose = folgado.' },
      { type: 'translate', prompt: 'Traduza: "Esta camisa ficou perfeita em mim."', options: ['This shirt fits me perfectly.', 'This shirt is matching me.', 'This shirt wears me well.', 'This shirt sizes me right.'], ans: 'This shirt fits me perfectly.', exp: 'fits me perfectly = me serviu perfeitamente.' },
      { type: 'multiple-choice', prompt: 'O que significa a letra "M" na etiqueta de roupas?', options: ['Medium (Médio)', 'Mini', 'Maximum', 'Modern'], ans: 'Medium (Médio)', exp: 'S = Small; M = Medium; L = Large.' },
      { type: 'word-order', prompt: 'Organize a pergunta sobre desconto:', options: ['discount', 'Is', 'any', 'there', 'item?', 'this', 'on'], ans: 'Is there any discount on this item?', exp: 'Is there any discount on this item?' },
      { type: 'listening', prompt: 'Ouça:', audio: 'You can return or exchange this within thirty days with your receipt.', options: ['You can return or exchange this within thirty days with your receipt.', 'This final sale item cannot be returned or refunded.', 'We have this jacket available in black and dark blue.', 'The fitting rooms are located on the second floor.'], ans: 'You can return or exchange this within thirty days with your receipt.', exp: 'return or exchange = devolver ou trocar.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Can I try this jacket on?"', audio: 'Can I try this jacket on', ans: 'Can I try this jacket on', hint: '/kæn aɪ traɪ ðɪs ˈdʒæk.ɪt ɑːn/', exp: 'Muito bem!' },
      { type: 'multiple-choice', prompt: 'Se uma roupa está muito larga e frouxa, dizemos que está:', options: ['Too loose', 'Too tight', 'Too small', 'Too short'], ans: 'Too loose', exp: 'Too loose = folgada demais.' }
    ]
  },
  // 17: Dinheiro & Pagamentos
  {
    num: 17, title: 'Lidando com Dinheiro & Pagamentos', subtitle: 'Cash, credit card, change, receipt, cost',
    obj: 'Efetuar pagamentos, conferir troco e recibos em transações financeiras.',
    type: 'lesson', icon: 'dollar-sign',
    theory: ['Cash = dinheiro em espécie; credit/debit card = cartão de crédito/débito.', 'Change = troco; receipt = recibo/comprovante; ATM = caixa eletrônico.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '💵', prompt: 'Como se diz "Pagar em dinheiro vivo"?', options: ['Pay in cash (ou with cash)', 'Pay with coins', 'Pay by paper', 'Pay with bill'], ans: 'Pay in cash (ou with cash)', exp: 'In cash = em dinheiro em espécie.' },
      { type: 'fill-blank', visualEmoji: '🧾', prompt: 'O comprovante da compra: "Here is your _____ and your change."', options: ['receipt', 'recipe', 'ticket', 'billboard'], ans: 'receipt', exp: 'Receipt (/rɪˈsiːt/ com p mudo) = recibo.' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre forma de pagamento:', options: ['accept', 'cards?', 'Do', 'credit', 'you'], ans: 'Do you accept credit cards?', exp: 'Do you accept credit cards?' },
      { type: 'listening', prompt: 'Ouça o valor total e o troco:', audio: 'That will be eighteen dollars. Here is two dollars change.', options: ['That will be eighteen dollars. Here is two dollars change.', 'That will be eighty dollars. Here is ten dollars change.', 'That costs twelve dollars. Do you have exact change?', 'The total is fifteen dollars and fifty cents.'], ans: 'That will be eighteen dollars. Here is two dollars change.', exp: 'eighteen dollars ($18).' },
      { type: 'translate', prompt: 'Traduza: "Pode ficar com o troco."', options: ['Keep the change.', 'Stay with the change.', 'Hold the money.', 'Leave the change here.'], ans: 'Keep the change.', exp: 'Keep the change = Fique com o troco.' },
      { type: 'multiple-choice', prompt: 'Na palavra RECEIPT (recibo), qual letra é muda?', options: ['A letra P (soa como /rɪˈsiːt/)', 'A letra R', 'A letra C', 'A letra T'], ans: 'A letra P (soa como /rɪˈsiːt/)', exp: 'O P é completamente silencioso.' },
      { type: 'word-order', prompt: 'Organize a pergunta sobre caixa eletrônico:', options: ['ATM', 'near', 'there', 'an', 'here?', 'Is'], ans: 'Is there an ATM near here?', exp: 'ATM = caixa eletrônico.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Please insert your card and enter your PIN code.', options: ['Please insert your card and enter your PIN code.', 'Please tap your phone on the payment terminal.', 'The machine is currently out of cash.', 'Your transaction has been approved successfully.'], ans: 'Please insert your card and enter your PIN code.', exp: 'insert your card and enter PIN.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "Keep the change, thank you!"', audio: 'Keep the change thank you', ans: 'Keep the change thank you', hint: '/kiːp ðə tʃeɪndʒ θæŋk juː/', exp: 'Perfeita atitude e pronúncia!' },
      { type: 'multiple-choice', prompt: 'Caixa eletrônico em inglês é conhecido pela sigla:', options: ['ATM', 'CTA', 'TMA', 'MTA'], ans: 'ATM', exp: 'ATM = Automated Teller Machine.' }
    ]
  },
  // 18: Hobbies & Lazer
  {
    num: 18, title: 'Hobbies & Atividades de Lazer', subtitle: 'Playing music, painting, gaming, reading',
    obj: 'Conversar sobre interesses pessoais e atividades nos momentos livres.',
    type: 'lesson', icon: 'music',
    theory: ['Verbos de lazer: play the guitar, take photos, paint, garden, cook, read, play video games.', '"What do you do in your free time?" = O que você faz no seu tempo livre?'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🎸', prompt: 'Como dizer "Eu toco violão no meu tempo livre"?', options: ['I play the guitar in my free time.', 'I play guitar in my free hours.', 'I touch the guitar in free time.', 'I do guitar on my free moments.'], ans: 'I play the guitar in my free time.', exp: 'play the guitar (instrumento leva the).' },
      { type: 'fill-blank', visualEmoji: '📸', prompt: 'Complete com o hobby: "She loves taking _____ with her camera."', options: ['photos', 'books', 'paints', 'movies'], ans: 'photos', exp: 'take photos = tirar fotos.' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre passatempos:', options: ['do', 'do', 'in', 'your', 'free', 'What', 'you', 'time?'], ans: 'What do you do in your free time?', exp: 'What do you do in your free time?' },
      { type: 'listening', prompt: 'Ouça o hobby descrito:', audio: 'I find painting landscapes very relaxing on weekends.', options: ['I find painting landscapes very relaxing on weekends.', 'I enjoy playing video games with my brother on weekends.', 'I love hiking in the mountains every Sunday morning.', 'I listen to classical music while studying.'], ans: 'I find painting landscapes very relaxing on weekends.', exp: 'painting landscapes.' },
      { type: 'translate', prompt: 'Traduza: "Meu passatempo favorito é cozinhar."', options: ['My favorite hobby is cooking.', 'My preferred hobby is to cook.', 'My best hobby is make food.', 'My favorite hobby are cook.'], ans: 'My favorite hobby is cooking.', exp: 'My favorite hobby is cooking.' },
      { type: 'multiple-choice', prompt: 'Qual frase expressa um passatempo ao ar livre?', options: ['I enjoy hiking in the mountains.', 'I like playing computer games.', 'I love watching TV series.', 'I read books before bed.'], ans: 'I enjoy hiking in the mountains.', exp: 'Hiking = caminhada / trilha na natureza.' },
      { type: 'word-order', prompt: 'Organize a preferência de lazer:', options: ['games', 'play', 'We', 'board', 'together.', 'often'], ans: 'We often play board games together.', exp: 'Board games = jogos de tabuleiro.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'He has been collecting vintage vinyl records for years.', options: ['He has been collecting vintage vinyl records for years.', 'He has been playing the drums in a rock band for years.', 'She has been writing short stories since college.', 'They love going to modern art museums together.'], ans: 'He has been collecting vintage vinyl records for years.', exp: 'collecting vinyl records.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "In my free time I love reading"', audio: 'In my free time I love reading', ans: 'In my free time I love reading', hint: '/ɪn maɪ friː taɪm aɪ lʌv ˈriː.dɪŋ/', exp: 'Excelente fluência!' },
      { type: 'multiple-choice', prompt: 'Jogos de tabuleiro (xadrez, banco imobiliário, etc.) são chamados de:', options: ['Board games', 'Table sports', 'Card matches', 'Wood games'], ans: 'Board games', exp: 'Board games.' }
    ]
  },
  // 19: Esportes & Exercícios
  {
    num: 19, title: 'Esportes & Exercícios Físicos', subtitle: 'Play football, do yoga, go swimming',
    obj: 'Diferenciar os verbos PLAY, DO e GO com atividades esportivas.',
    type: 'lesson', icon: 'activity',
    theory: ['PLAY para esportes coletivos e com bola: play soccer, play basketball, play tennis.', 'DO para lutas, artes marciais e exercícios individuais: do yoga, do judo, do aerobics.', 'GO para atividades que terminam em -ING: go swimming, go running, go cycling.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '⚽', prompt: 'Qual verbo usamos com SOCCER (futebol)?', options: ['PLAY (play soccer)', 'DO (do soccer)', 'GO (go soccer)', 'MAKE (make soccer)'], ans: 'PLAY (play soccer)', exp: 'Esportes com bola e times = PLAY.' },
      { type: 'fill-blank', visualEmoji: '🧘‍♀️', prompt: 'Complete com o verbo correto para yoga: "I _____ yoga every morning."', options: ['do', 'play', 'go', 'make'], ans: 'do', exp: 'Atividades como yoga e ginástica = DO.' },
      { type: 'word-order', prompt: 'Monte a frase com atividade em -ING:', options: ['running', 'every', 'go', 'They', 'morning.'], ans: 'They go running every morning.', exp: 'Atividades em -ing usam GO: go running.' },
      { type: 'listening', prompt: 'Ouça a rotina esportiva:', audio: 'I go swimming twice a week at the community pool.', options: ['I go swimming twice a week at the community pool.', 'I play tennis three times a week with my friend.', 'I do karate every Saturday morning at the gym.', 'I go cycling around the lake every afternoon.'], ans: 'I go swimming twice a week at the community pool.', exp: 'go swimming.' },
      { type: 'translate', prompt: 'Traduza: "Você pratica algum esporte?"', options: ['Do you play any sports?', 'Do you make any sports?', 'Are you sports player?', 'Do you have sports?'], ans: 'Do you play any sports?', exp: 'Do you play any sports?' },
      { type: 'multiple-choice', prompt: 'Qual combinação está CORRETA?', options: ['Go swimming / Do yoga / Play tennis', 'Do tennis / Play swimming / Go yoga', 'Make running / Do soccer / Play karate', 'Go yoga / Play running / Do football'], ans: 'Go swimming / Do yoga / Play tennis', exp: 'Regra de ouro: Play (bola), Do (marcial/individual), Go (-ing).' },
      { type: 'word-order', prompt: 'Organize a frequência esportiva:', options: ['gym', 'three', 'times', 'the', 'I', 'to', 'a', 'week.', 'go'], ans: 'I go to the gym three times a week.', exp: 'I go to the gym three times a week.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'She enjoys playing volleyball on the beach during summer.', options: ['She enjoys playing volleyball on the beach during summer.', 'She loves playing basketball at the sports club.', 'They enjoy doing gymnastics after school every day.', 'He goes surfing early in the morning when waves are high.'], ans: 'She enjoys playing volleyball on the beach during summer.', exp: 'playing volleyball.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I go running three times a week"', audio: 'I go running three times a week', ans: 'I go running three times a week', hint: '/aɪ ɡoʊ ˈrʌn.ɪŋ θriː taɪmz ə wiːk/', exp: 'Perfeita clareza!' },
      { type: 'multiple-choice', prompt: 'Academia de musculação/ginástica em inglês é comumente chamada de:', options: ['Gym (gymnasium)', 'Academy', 'Sport room', 'Body shop'], ans: 'Gym (gymnasium)', exp: 'Gym = academia.' }
    ]
  },
  // 20: Chest 2 (Review 11-19) - 11 questions
  {
    num: 20, title: 'Baú da Sabedoria: Cidadão do Mundo', subtitle: 'Ponto de verificação intermediário e gemas',
    obj: 'Consolidar clima, saúde, consultas, compras de roupas e esportes.',
    type: 'chest', icon: 'award',
    theory: ['Segundo Baú do Mundo 3 conquistado! Revise vocabulário de saúde, esportes, provadores e pagamentos.'],
    items: [
      { type: 'multiple-choice', prompt: '[Revisão] "I _____ yoga on Mondays and I _____ swimming on Fridays."', options: ['do / go', 'play / do', 'go / play', 'make / go'], ans: 'do / go', exp: 'Do yoga e Go swimming.' },
      { type: 'fill-blank', prompt: '[Revisão] "I have a terrible _____ in my head."', options: ['headache', 'toothache', 'sore', 'feverache'], ans: 'headache', exp: 'headache = dor de cabeça.' },
      { type: 'word-order', prompt: '[Revisão] Monte a pergunta no provador:', options: ['this', 'on,', 'try', 'I', 'Can', 'please?'], ans: 'Can I try this on, please?', exp: 'Can I try this on, please?' },
      { type: 'listening', prompt: '[Revisão] Ouça e marque:', audio: 'The weather forecast predicts heavy rain this weekend.', options: ['The weather forecast predicts heavy rain this weekend.', 'The weather forecast predicts sunny days all week.', 'The news says the flight to London was cancelled.', 'The temperature will drop below zero tonight.'], ans: 'The weather forecast predicts heavy rain this weekend.', exp: 'weather forecast predicts...' },
      { type: 'multiple-choice', prompt: '[Revisão] Qual é o plural irregular de "FOOT"?', options: ['Feet', 'Foots', 'Feets', 'Footes'], ans: 'Feet', exp: 'One foot, two feet.' },
      { type: 'translate', prompt: '[Revisão] Traduza: "Pode ficar com o troco."', options: ['Keep the change.', 'Hold the money.', 'Stay with change.', 'Leave the cash.'], ans: 'Keep the change.', exp: 'Keep the change.' },
      { type: 'word-order', prompt: '[Revisão] Ordene a consulta médica:', options: ['appointment', 'I', 'have', 'doctor.', 'an', 'the', 'with'], ans: 'I have an appointment with the doctor.', exp: 'I have an appointment with the doctor.' },
      { type: 'speaking-repeat', prompt: '[Revisão] Fale no microfone: "What is the weather like today?"', audio: 'What is the weather like today', ans: 'What is the weather like today', hint: '/wɑːt ɪz ðə ˈweð.ər laɪk təˈdeɪ/', exp: 'Excelente!' },
      { type: 'fill-blank', prompt: '[Revisão] "She loves taking photos _____ her camera."', options: ['with', 'at', 'by', 'on'], ans: 'with', exp: 'with her camera.' },
      { type: 'multiple-choice', prompt: '[Revisão] "Prescription" em contexto médico significa:', options: ['Receita médica', 'Comprovante fiscal', 'Ficha de inscrição', 'Atestado de óbito'], ans: 'Receita médica', exp: 'Prescription = receita médica.' },
      { type: 'translate', prompt: '[Revisão] "Onde fica o provador?"', options: ['Where is the fitting room?', 'Where is the dressing hall?', 'Where are the clothing room?', 'Where is the trying box?'], ans: 'Where is the fitting room?', exp: 'fitting room.' }
    ]
  },
  // 21: Rotina Matinal
  {
    num: 21, title: 'A Rotina Matinal Perfeita', subtitle: 'Brushing teeth, taking a shower, getting dressed',
    obj: 'Descrever ações sequenciais matinais em detalhes.',
    type: 'lesson', icon: 'sunrise',
    theory: ['Wake up (acordar), get up (levantar da cama), brush teeth, take a shower, comb hair, get dressed, have breakfast.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🪥', prompt: 'Como se diz "Escovar os dentes" em inglês?', options: ['Brush my teeth', 'Wash my teeth', 'Clean my tooths', 'Make my mouth'], ans: 'Brush my teeth', exp: 'Brush my teeth.' },
      { type: 'fill-blank', visualEmoji: '⏰', prompt: 'Diferença entre acordar e levantar: "I wake up at 6:30, but I _____ at 7:00."', options: ['get up', 'sleep up', 'stand on', 'wake off'], ans: 'get up', exp: 'Wake up = abrir os olhos; Get up = levantar da cama.' },
      { type: 'word-order', prompt: 'Monte a sequência matinal:', options: ['shower', 'I', 'take', 'after', 'breakfast.', 'a'], ans: 'I take a shower after breakfast.', exp: 'I take a shower after breakfast.' },
      { type: 'listening', prompt: 'Ouça o relato matinal:', audio: 'First I drink a glass of water, and then I stretch for ten minutes.', options: ['First I drink a glass of water, and then I stretch for ten minutes.', 'First I take a cold shower, and then I prepare black coffee.', 'First I read the morning news, and then I wake up the kids.', 'I check my phone immediately after my alarm goes off.'], ans: 'First I drink a glass of water, and then I stretch for ten minutes.', exp: 'First I drink... then I stretch.' },
      { type: 'translate', prompt: 'Traduza: "Eu me visto rapidamente."', options: ['I get dressed quickly.', 'I wear me quickly.', 'I dress me fast.', 'I put clothes rapidly.'], ans: 'I get dressed quickly.', exp: 'get dressed quickly.' },
      { type: 'multiple-choice', prompt: 'Qual ação significa pentear o cabelo?', options: ['Comb my hair', 'Brush my head', 'Cut my hair', 'Wash my hair'], ans: 'Comb my hair', exp: 'Comb / brush my hair.' },
      { type: 'word-order', prompt: 'Organize a rotina:', options: ['house', 'leaves', 'eight.', 'at', 'She', 'the'], ans: 'She leaves the house at eight.', exp: 'She leaves the house at eight.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'He never skips breakfast because he needs energy for work.', options: ['He never skips breakfast because he needs energy for work.', 'He always has coffee on his way to the office.', 'She prepares breakfast for the whole family every day.', 'They usually have breakfast together at seven o\'clock.'], ans: 'He never skips breakfast because he needs energy for work.', exp: 'skips breakfast = pula o café.' },
      { type: 'speaking-repeat', prompt: 'Fale sua rotina matinal: "I brush my teeth and get dressed"', audio: 'I brush my teeth and get dressed', ans: 'I brush my teeth and get dressed', hint: '/aɪ brʌʃ maɪ tiːθ ənd ɡet drest/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'O que significa "Skip breakfast"?', options: ['Pular o café da manhã / não tomar café', 'Preparar o café rapidamente', 'Tomar café reforçado', 'Comer fora de casa'], ans: 'Pular o café da manhã / não tomar café', exp: 'Skip = pular/omitir uma refeição.' }
    ]
  },
  // 22: No Trabalho / Escola
  {
    num: 22, title: 'No Trabalho / Escola: Ambiente & Tarefas', subtitle: 'Colleagues, meetings, schedule, homework',
    obj: 'Falar sobre o dia a dia profissional e acadêmico.',
    type: 'lesson', icon: 'briefcase',
    theory: ['Trabalho/Escola: colleague/coworker (colega), meeting (reunião), deadline (prazo), schedule (agenda/cronograma), homework (tarefa).'],
    items: [
      { type: 'multiple-choice', visualEmoji: '👥', prompt: 'Como se diz "Reunião de trabalho" em inglês?', options: ['Meeting', 'Reunion (reunião familiar)', 'Conference call', 'Appointment'], ans: 'Meeting', exp: 'Meeting = reunião de trabalho. Reunion é reencontro de família/amigos!' },
      { type: 'fill-blank', visualEmoji: '📅', prompt: 'Complete com o prazo final: "The project _____ is tomorrow at 5 pm."', options: ['deadline', 'schedule', 'finish', 'timebox'], ans: 'deadline', exp: 'Deadline = prazo final de entrega.' },
      { type: 'word-order', prompt: 'Monte a frase de tarefas:', options: ['have', 'busy', 'schedule', 'today.', 'a', 'I', 'very'], ans: 'I have a very busy schedule today.', exp: 'a very busy schedule = uma agenda muito cheia.' },
      { type: 'listening', prompt: 'Ouça a conversa de trabalho:', audio: 'Could you send me the updated presentation by noon?', options: ['Could you send me the updated presentation by noon?', 'Can we reschedule our team meeting for tomorrow morning?', 'Have you finished reviewing the financial report yet?', 'I will email you the contract as soon as I arrive.'], ans: 'Could you send me the updated presentation by noon?', exp: 'send me the updated presentation...' },
      { type: 'translate', prompt: 'Traduza: "Meus colegas são muito profissionais."', options: ['My colleagues are very professional.', 'My coworkers are very friendly.', 'My partners are very hardworking.', 'My classmates are very smart.'], ans: 'My colleagues are very professional.', exp: 'My colleagues are very professional.' },
      { type: 'multiple-choice', prompt: 'Cuidado com o falso cognato: "REUNION" em inglês geralmente significa:', options: ['Reencontro / confraternização (de família ou ex-alunos)', 'Reunião de negócios', 'Entrevista de emprego', 'Assembleia de condomínio'], ans: 'Reencontro / confraternização (de família ou ex-alunos)', exp: 'Reunion = reencontro (family reunion, high school reunion).' },
      { type: 'word-order', prompt: 'Organize a frase de estudante:', options: ['finish', 'my', 'I', 'homework', 'dinner.', 'before'], ans: 'I finish my homework before dinner.', exp: 'I finish my homework before dinner.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'The manager announced that our department reached its monthly goal.', options: ['The manager announced that our department reached its monthly goal.', 'The director called an emergency meeting for all employees.', 'Our team will start the new project next Monday morning.', 'The company will hire three new software developers.'], ans: 'The manager announced that our department reached its monthly goal.', exp: 'reached its monthly goal.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "I have a meeting at ten"', audio: 'I have a meeting at ten', ans: 'I have a meeting at ten', hint: '/aɪ hæv ə ˈmiː.tɪŋ æt ten/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: 'A palavra "Homework" (lição de casa) é:', options: ['Incontável (nunca dizemos "homeworks")', 'Contável regular', 'Sempre usada no plural', 'Um verbo transitivo'], ans: 'Incontável (nunca dizemos "homeworks")', exp: 'Homework é incontável: "a lot of homework".' }
    ]
  },
  // 23: Sentimentos & Emoções
  {
    num: 23, title: 'Sentimentos & Emoções', subtitle: 'Excited, nervous, relaxed, bored, proud',
    obj: 'Expressar estados emocionais com vocabulário rico e nuances.',
    type: 'lesson', icon: 'heart',
    theory: ['Excited (empolgado/animado), nervous (nervoso/ansioso), relaxed (relaxado), bored (entediado), proud (orgulhoso), angry (bravo/irritado).'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🤩', prompt: 'Cuidado com falso cognato: "EXCITED" em inglês significa:', options: ['Empolgado / animado / entusiasmado', 'Excitado sexualmente', 'Nervoso com raiva', 'Assustado'], ans: 'Empolgado / animado / entusiasmado', exp: 'Excited = muito feliz e animado com algo bom que vai acontecer!' },
      { type: 'fill-blank', visualEmoji: '🥱', prompt: 'Complete: "The movie was so slow that I felt completely _____."', options: ['bored', 'excited', 'proud', 'nervous'], ans: 'bored', exp: 'Bored = entediado.' },
      { type: 'word-order', prompt: 'Monte a frase de orgulho:', options: ['proud', 'am', 'your', 'I', 'of', 'achievements.'], ans: 'I am proud of your achievements.', exp: 'Proud of = orgulhoso de.' },
      { type: 'listening', prompt: 'Ouça o sentimento expresso:', audio: 'I was really nervous before my job interview, but everything went great.', options: ['I was really nervous before my job interview, but everything went great.', 'I was very excited about my new job interview yesterday morning.', 'She felt completely relaxed during her English oral exam.', 'He was disappointed with the test results despite studying hard.'], ans: 'I was really nervous before my job interview, but everything went great.', exp: 'really nervous before job interview.' },
      { type: 'translate', prompt: 'Traduza: "Eu estou muito empolgado com a viagem."', options: ['I am very excited about the trip.', 'I am very nervous about the travel.', 'I am very happy with the journey.', 'I am excited for the flight.'], ans: 'I am very excited about the trip.', exp: 'excited about the trip.' },
      { type: 'multiple-choice', visualEmoji: '🧘', prompt: 'Como se diz "Relaxado e calmo"?', options: ['Relaxed and calm', 'Tired and bored', 'Angry and upset', 'Nervous and worried'], ans: 'Relaxed and calm', exp: 'Relaxed and calm.' },
      { type: 'word-order', prompt: 'Organize a emoção:', options: ['upset', 'news.', 'the', 'about', 'is', 'He'], ans: 'He is upset about the news.', exp: 'Upset = chateado / aborrecido.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Her parents were so proud when she graduated from university.', options: ['Her parents were so proud when she graduated from university.', 'Her friends threw a surprise party for her graduation.', 'Her mother was very emotional during the ceremony.', 'She was excited to start her master\'s degree in London.'], ans: 'Her parents were so proud when she graduated from university.', exp: 'so proud when she graduated.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I am so excited about this!"', audio: 'I am so excited about this', ans: 'I am so excited about this', hint: '/aɪ æm soʊ ɪkˈsaɪ.t̬ɪd əˈbaʊt ðɪs/', exp: 'Excelente entonação e entusiasmo!' },
      { type: 'multiple-choice', prompt: 'Qual adjetivo descreve alguém que está chateado ou contrariado?', options: ['Upset', 'Relaxed', 'Glad', 'Pleased'], ans: 'Upset', exp: 'Upset = chateado / chateada.' }
    ]
  },
  // 24: Feriados & Celebrações
  {
    num: 24, title: 'Feriados & Celebrações', subtitle: 'Christmas, New Year, Birthday, Party',
    obj: 'Felicitar pessoas e falar sobre datas comemorativas e tradições.',
    type: 'lesson', icon: 'gift',
    theory: ['Celebrações: Christmas (Natal), New Year\'s Eve (Réveillon), Birthday (aniversário), Thanksgiving (Ação de Graças).', 'Felicitações: Happy Birthday!, Merry Christmas!, Happy New Year!, Congratulations!'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🎄', prompt: 'Como desejar "Feliz Natal" em inglês tradicionalmente?', options: ['Merry Christmas!', 'Happy Christmas!', 'Good Christmas!', 'Joy Christmas!'], ans: 'Merry Christmas!', exp: 'Merry Christmas!' },
      { type: 'fill-blank', visualEmoji: '🎂', prompt: 'Ao cumprimentar alguém pelo aniversário: "Happy _____ to you!"', options: ['Birthday', 'Anniversary', 'Celebration', 'Party'], ans: 'Birthday', exp: 'Birthday = aniversário de nascimento. Anniversary é para casamento ou fundação!' },
      { type: 'word-order', prompt: 'Monte o brinde de celebração:', options: ['to', 'health', 'success!', 'Here\'s', 'and', 'your'], ans: 'Here\'s to your health and success!', exp: 'Here\'s to... = Um brinde a...' },
      { type: 'listening', prompt: 'Ouça a mensagem comemorativa:', audio: 'We wish you a wonderful New Year filled with joy and health.', options: ['We wish you a wonderful New Year filled with joy and health.', 'We wish you a Merry Christmas and a relaxing holiday.', 'Happy Birthday, may all your dreams come true this year.', 'Congratulations on your wedding anniversary today.'], ans: 'We wish you a wonderful New Year filled with joy and health.', exp: 'wonderful New Year...' },
      { type: 'translate', prompt: 'Traduza: "Parabéns pela sua conquista!"', options: ['Congratulations on your achievement!', 'Felicitations for your achievement!', 'Congrats to your achievement!', 'Happy celebrations for you!'], ans: 'Congratulations on your achievement!', exp: 'Congratulations on...' },
      { type: 'multiple-choice', prompt: 'Cuidado com o falso cognato: "ANNIVERSARY" refere-se a:', options: ['Aniversário de casamento ou evento histórico', 'Aniversário de nascimento de uma pessoa', 'Festa de fim de ano', 'Feriado nacional'], ans: 'Aniversário de casamento ou evento histórico', exp: 'Wedding anniversary = bodas/casamento. Nascimento é Birthday!' },
      { type: 'word-order', prompt: 'Organize o convite para a festa:', options: ['party', 'birthday', 'invited', 'to', 'You', 'are', 'my'], ans: 'You are invited to my birthday party', exp: 'You are invited to my birthday party.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Thanksgiving is celebrated on the fourth Thursday of November.', options: ['Thanksgiving is celebrated on the fourth Thursday of November.', 'Halloween is celebrated on the thirty-first of October.', 'Labor Day is celebrated on the first Monday of September.', 'Independence Day is celebrated on the fourth of July.'], ans: 'Thanksgiving is celebrated on the fourth Thursday of November.', exp: 'Thanksgiving in November.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "Happy Birthday to you!"', audio: 'Happy Birthday to you', ans: 'Happy Birthday to you', hint: '/ˈhæp.i ˈbɜːrθ.deɪ tuː juː/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: 'O dia 31 de dezembro (véspera de Ano Novo) é chamado de:', options: ['New Year\'s Eve', 'New Year\'s Night', 'Year End Day', 'Old Year Night'], ans: 'New Year\'s Eve', exp: 'New Year\'s Eve (Eve = véspera).' }
    ]
  },
  // 25: Tecnologia & Vida Digital
  {
    num: 25, title: 'Tecnologia & Vida Digital', subtitle: 'Smartphone, message, battery, internet, charger',
    obj: 'Falar sobre dispositivos digitais, conectividade e problemas tecnológicos cotidianos.',
    type: 'lesson', icon: 'smartphone',
    theory: ['Dispositivos: smartphone, charger (carregador), battery, headphones/earbuds.', 'Expressões: "My battery is low", "Can you send me a text?", "Download the app", "Restart the device".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🔋', prompt: 'Como dizer "Minha bateria está acabando / fraca"?', options: ['My battery is low / dying.', 'My battery is ending.', 'My battery is finished.', 'I have low electricity.'], ans: 'My battery is low / dying.', exp: 'My battery is low (ou dying).' },
      { type: 'fill-blank', visualEmoji: '🔌', prompt: 'Complete: "Do you have a phone _____ I can borrow?"', options: ['charger', 'cable', 'battery', 'plug'], ans: 'charger', exp: 'Charger = carregador.' },
      { type: 'word-order', prompt: 'Monte o pedido tecnológico:', options: ['me', 'message', 'Send', 'on', 'WhatsApp.', 'a'], ans: 'Send me a message on WhatsApp.', exp: 'Send me a message on WhatsApp.' },
      { type: 'listening', prompt: 'Ouça o problema digital:', audio: 'The Wi-Fi signal is very weak in this corner of the room.', options: ['The Wi-Fi signal is very weak in this corner of the room.', 'The internet connection is completely down today.', 'My smartphone screen is cracked and unresponsive.', 'I forgot my email password and cannot log in.'], ans: 'The Wi-Fi signal is very weak in this corner of the room.', exp: 'Wi-Fi signal is very weak.' },
      { type: 'translate', prompt: 'Traduza: "Eu preciso baixar este aplicativo."', options: ['I need to download this app.', 'I need to upload this application.', 'I have to send this program.', 'I want to install this site.'], ans: 'I need to download this app.', exp: 'download this app.' },
      { type: 'multiple-choice', prompt: 'Qual termo significa "Carregar a bateria"?', options: ['Charge the battery', 'Load the battery', 'Fill the battery', 'Power the battery'], ans: 'Charge the battery', exp: 'Charge the battery.' },
      { type: 'word-order', prompt: 'Organize a dica de suporte técnico:', options: ['Restart', 'try', 'device', 'again.', 'your', 'and'], ans: 'Restart your device and try again.', exp: 'Restart your device and try again.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Make sure you back up your files to the cloud regularly.', options: ['Make sure you back up your files to the cloud regularly.', 'Check if your computer has the latest operating system.', 'Delete all temporary files to free up disk space.', 'Change your password every six months for better security.'], ans: 'Make sure you back up your files to the cloud regularly.', exp: 'back up your files to the cloud.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "My phone battery is low"', audio: 'My phone battery is low', ans: 'My phone battery is low', hint: '/maɪ foʊn ˈbæt̬.ɚ.i ɪz loʊ/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Fones de ouvido pequenos intra-auriculares (sem fio) são chamados de:', options: ['Earbuds', 'Headphones (com arco)', 'Speakers', 'Microphones'], ans: 'Earbuds', exp: 'Earbuds = fones intra-auriculares (ex: AirPods).' }
    ]
  },
  // 26: Animais Selvagens
  {
    num: 26, title: 'Animais Selvagens & Zoológico', subtitle: 'Lion, elephant, monkey, tiger, giraffe',
    obj: 'Nomear animais da fauna global e descrever seus habitats.',
    type: 'lesson', icon: 'feather',
    theory: ['Animais selvagens: lion, elephant, monkey, tiger, giraffe, bear, dolphin, whale, snake, eagle.', 'Habitats: jungle, savannah, forest, ocean, desert.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🦁', prompt: 'Como se diz "O leão é o rei da savana"?', options: ['The lion is the king of the savannah.', 'The tiger is the king of the jungle.', 'The elephant is the king of the forest.', 'The bear is the ruler of the mountains.'], ans: 'The lion is the king of the savannah.', exp: 'Lion = leão.' },
      { type: 'fill-blank', visualEmoji: '🐘', prompt: 'O maior mamífero terrestre: "The _____ has a long trunk and big ears."', options: ['elephant', 'giraffe', 'rhino', 'hippo'], ans: 'elephant', exp: 'Elephant = elefante; trunk = tromba.' },
      { type: 'word-order', prompt: 'Monte a frase sobre o animal marinho:', options: ['very', 'are', 'animals.', 'Dolphins', 'intelligent'], ans: 'Dolphins are very intelligent animals.', exp: 'Dolphins are very intelligent animals.' },
      { type: 'listening', prompt: 'Ouça a descrição do animal:', audio: 'The giraffe has an extremely long neck to reach high leaves.', options: ['The giraffe has an extremely long neck to reach high leaves.', 'The zebra has black and white stripes for camouflage.', 'The cheetah is the fastest land animal in the world.', 'The kangaroo carries its baby in a front pouch.'], ans: 'The giraffe has an extremely long neck to reach high leaves.', exp: 'giraffe... long neck.' },
      { type: 'translate', prompt: 'Traduza: "Nós vimos muitos animais no zoológico."', options: ['We saw many animals at the zoo.', 'We looked many animals in the park.', 'We see many pets at the zoo.', 'We watched animals in the forest.'], ans: 'We saw many animals at the zoo.', exp: 'We saw many animals at the zoo.' },
      { type: 'multiple-choice', visualEmoji: '🦅', prompt: 'Como se diz "Águia" em inglês?', options: ['Eagle', 'Hawk', 'Falcon', 'Owl'], ans: 'Eagle', exp: 'Eagle (/ˈiː.ɡəl/) = águia.' },
      { type: 'word-order', prompt: 'Organize a descrição do macaco:', options: ['trees.', 'Monkeys', 'jumping', 'love', 'between'], ans: 'Monkeys love jumping between trees.', exp: 'Monkeys love jumping between trees.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Polar bears live in the freezing Arctic and swim long distances.', options: ['Polar bears live in the freezing Arctic and swim long distances.', 'Brown bears hibernate in deep caves during the winter.', 'Panda bears eat bamboo leaves all day long.', 'Grizzly bears hunt salmon in fast rivers.'], ans: 'Polar bears live in the freezing Arctic and swim long distances.', exp: 'Polar bears in the Arctic.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "Dolphins are intelligent animals"', audio: 'Dolphins are intelligent animals', ans: 'Dolphins are intelligent animals', hint: '/ˈdɑːl.fɪnz ɑːr ɪnˈtel.ə.dʒənt ˈæn.ə.məlz/', exp: 'Perfeita pronúncia!' },
      { type: 'multiple-choice', prompt: 'Qual animal é o mais rápido em terra firme?', options: ['Cheetah (guepardo/chita)', 'Lion', 'Horse', 'Leopard'], ans: 'Cheetah (guepardo/chita)', exp: 'Cheetah = o mamífero terrestre mais veloz.' }
    ]
  },
  // 27: Going To (Planos Futuros)
  {
    num: 27, title: 'Expressando Planos Simples (Going To)', subtitle: 'I am going to travel next month',
    obj: 'Falar sobre planos futuros e intenções já decididas usando GOING TO.',
    type: 'lesson', icon: 'calendar',
    theory: ['Estrutura: Sujeito + AM/IS/ARE + GOING TO + Verbo base.', 'Exemplo: "I am going to travel to London next month", "She is going to study medicine".'],
    items: [
      { type: 'multiple-choice', prompt: 'Como dizer "Eu vou viajar no próximo mês" (plano decidido)?', options: ['I am going to travel next month.', 'I will to travel next month.', 'I am travel next month.', 'I go to travel next month.'], ans: 'I am going to travel next month.', exp: 'To Be + going to + verbo base.' },
      { type: 'fill-blank', visualEmoji: '🏠', prompt: 'Complete o plano: "We are going to _____ a new house this year."', options: ['buy', 'buying', 'bought', 'buys'], ans: 'buy', exp: 'Após going to usamos o verbo base sem alteração: buy.' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre planos futuros:', options: ['you', 'What', 'to', 'do', 'going', 'are', 'tonight?'], ans: 'What are you going to do tonight?', exp: 'What are you going to do tonight?' },
      { type: 'listening', prompt: 'Ouça o plano futuro:', audio: 'She is going to start her new job next Monday.', options: ['She is going to start her new job next Monday.', 'She is going to move to another apartment next week.', 'He is going to start college in September.', 'They are going to get married in December.'], ans: 'She is going to start her new job next Monday.', exp: 'is going to start her new job.' },
      { type: 'translate', prompt: 'Traduza: "Eles vão comprar um carro novo."', options: ['They are going to buy a new car.', 'They will buying a new car.', 'They are buy a new car.', 'They go to buy a new car.'], ans: 'They are going to buy a new car.', exp: 'They are going to buy...' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um erro na estrutura do "Going to"?', options: ['She is going to visits her grandmother.', 'She is going to visit her grandmother.', 'They are going to travel to Spain.', 'I am going to sleep early tonight.'], ans: 'She is going to visits her grandmother.', exp: 'O verbo após going to não leva -s: "visit".' },
      { type: 'word-order', prompt: 'Organize a negativa de plano:', options: ['not', 'rain', 'today.', 'going', 'It', 'to', 'is'], ans: 'It is not going to rain today.', exp: 'It is not going to rain today.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Are you going to attend the conference tomorrow?', options: ['Are you going to attend the conference tomorrow?', 'Are you going to present the project tomorrow?', 'Is he going to join the meeting this afternoon?', 'Are they going to travel to the conference together?'], ans: 'Are you going to attend the conference tomorrow?', exp: 'Are you going to attend...?' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone seu plano: "I am going to learn English"', audio: 'I am going to learn English', ans: 'I am going to learn English', hint: '/aɪ æm ˈɡoʊ.ɪŋ tuː lɜːrn ˈɪŋ.ɡlɪʃ/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Na fala rápida e informal, "going to" frequentemente soa como:', options: ['Gonna', 'Wanna', 'Gotta', 'Kinda'], ans: 'Gonna', exp: 'Going to vira "gonna" no inglês falado informal.' }
    ]
  },
  // 28: Conectores Temporais
  {
    num: 28, title: 'Conectando o Dia a Dia: First, Then, After that', subtitle: 'Sequenciadores temporais de narrativa',
    obj: 'Contar histórias e relatar procedimentos em ordem cronológica fluida.',
    type: 'lesson', icon: 'list',
    theory: ['Sequenciadores: First (primeiro), Then (então/depois), After that (depois disso), Later (mais tarde), Finally (finalmente).'],
    items: [
      { type: 'multiple-choice', prompt: 'Qual sequenciador usamos para abrir uma narrativa ou lista de passos?', options: ['First / Firstly', 'Finally', 'After that', 'Later'], ans: 'First / Firstly', exp: 'First = Primeiro / Em primeiro lugar.' },
      { type: 'fill-blank', prompt: 'Complete a sequência: "First, wash your hands. _____, chop the vegetables."', options: ['Then', 'Finally', 'First', 'Last'], ans: 'Then', exp: 'Then = Então / Depois.' },
      { type: 'word-order', prompt: 'Monte o fechamento da rotina:', options: ['Finally,', 'went', 'bed.', 'I', 'to'], ans: 'Finally, I went to bed.', exp: 'Finally = Finalmente.' },
      { type: 'listening', prompt: 'Ouça a narrativa cronológica:', audio: 'First we visited the museum, then we had lunch, and finally we took a walk in the park.', options: ['First we visited the museum, then we had lunch, and finally we took a walk in the park.', 'First we took a walk, then we went shopping, and finally we had dinner.', 'We arrived at the airport, then checked in, and finally boarded the plane.', 'First I studied grammar, then I practiced listening, and finally I spoke.'], ans: 'First we visited the museum, then we had lunch, and finally we took a walk in the park.', exp: 'First... then... finally...' },
      { type: 'translate', prompt: 'Traduza: "Depois disso, nós fomos para casa."', options: ['After that, we went home.', 'Before that, we were home.', 'Then that, we go home.', 'Later that, we arrived home.'], ans: 'After that, we went home.', exp: 'After that = Depois disso.' },
      { type: 'multiple-choice', prompt: 'Qual palavra indica o passo FINAL de um processo?', options: ['Finally', 'First', 'Next', 'Meanwhile'], ans: 'Finally', exp: 'Finally = Por fim / Finalmente.' },
      { type: 'word-order', prompt: 'Organize a sequência:', options: ['that,', 'called', 'friend.', 'my', 'After', 'I'], ans: 'After that, I called my friend.', exp: 'After that, I called my friend.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Mix the ingredients thoroughly, and next bake in the oven for thirty minutes.', options: ['Mix the ingredients thoroughly, and next bake in the oven for thirty minutes.', 'Chop all the vegetables finely, and next fry them in hot olive oil.', 'Boil the pasta for ten minutes, and next add the tomato sauce.', 'Preheat the oven to two hundred degrees, and next prepare the dough.'], ans: 'Mix the ingredients thoroughly, and next bake in the oven for thirty minutes.', exp: 'and next bake...' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "First, second and finally"', audio: 'First second and finally', ans: 'First second and finally', hint: '/fɜːrst ˈsek.ənd ənd ˈfaɪ.nəl.i/', exp: 'Perfeita clareza!' },
      { type: 'multiple-choice', prompt: 'O que significa "Meanwhile"?', options: ['Enquanto isso', 'Depois disso', 'Antes de tudo', 'Nunca mais'], ans: 'Enquanto isso', exp: 'Meanwhile = Enquanto isso.' }
    ]
  },
  // 29: Simulado Pré-Boss
  {
    num: 29, title: 'Simulado Pré-Boss: O Desafio da Vida Real', subtitle: 'Revisão integrada de todas as situações cotidianas',
    obj: 'Provar prontidão nas situações cotidianas reais do nível A2.',
    type: 'review', icon: 'award',
    theory: ['Grande simulado do Mundo 3! Consolide hotéis, restaurantes, aeroportos, saúde, compras e rotina.'],
    items: [
      { type: 'multiple-choice', prompt: '[Simulado] No aeroporto, onde você pega suas malas após o pouso?', options: ['Baggage claim', 'Security check', 'Departure gate', 'Ticket counter'], ans: 'Baggage claim', exp: 'Baggage claim.' },
      { type: 'fill-blank', prompt: '[Simulado] "Could you bring me the _____, please? We want to pay."', options: ['check', 'menu', 'reservation', 'towel'], ans: 'check', exp: 'The check / bill = a conta.' },
      { type: 'word-order', prompt: '[Simulado] Reorganize a orientação na cidade:', options: ['two', 'and', 'blocks', 'Walk', 'right.', 'turn'], ans: 'Walk two blocks and turn right.', exp: 'Walk two blocks and turn right.' },
      { type: 'listening', prompt: '[Simulado] Ouça a situação de hotel:', audio: 'Good morning! I have a reservation for three nights under the name Smith.', options: ['Good morning! I have a reservation for three nights under the name Smith.', 'Good evening! Could you please call a taxi for terminal two?', 'What time is breakfast served in the main dining room?', 'Can I request a wake-up call tomorrow morning at seven?'], ans: 'Good morning! I have a reservation for three nights under the name Smith.', exp: 'reservation for three nights...' },
      { type: 'multiple-choice', prompt: '[Simulado] Qual verbo esportivo completa: "I _____ swimming on Saturdays."', options: ['go', 'play', 'do', 'make'], ans: 'go', exp: 'Go swimming.' },
      { type: 'translate', prompt: '[Simulado] Traduza: "O tempo está ensolarado e agradável hoje."', options: ['The weather is sunny and pleasant today.', 'The weather is rainy and cold today.', 'The forecast has sun and warmth today.', 'It is clouds and warm today.'], ans: 'The weather is sunny and pleasant today.', exp: 'sunny and pleasant.' },
      { type: 'fill-blank', prompt: '[Simulado] "I have a sore _____ and I can hardly speak."', options: ['throat', 'head', 'arm', 'foot'], ans: 'throat', exp: 'a sore throat = dor de garganta.' },
      { type: 'word-order', prompt: '[Simulado] Monte o plano futuro com Going To:', options: ['is', 'medicine.', 'study', 'to', 'going', 'She'], ans: 'She is going to study medicine.', exp: 'She is going to study medicine.' },
      { type: 'listening', prompt: '[Simulado] Ouça:', audio: 'Take this medication twice a day after meals and get plenty of rest.', options: ['Take this medication twice a day after meals and get plenty of rest.', 'You should exercise at least three times a week at the gym.', 'Drink eight glasses of water every day to stay hydrated.', 'Please return for another check-up in three weeks.'], ans: 'Take this medication twice a day after meals and get plenty of rest.', exp: 'twice a day after meals.' },
      { type: 'speaking-repeat', prompt: '[Simulado] Fale no microfone: "I am ready for the boss battle!"', audio: 'I am ready for the boss battle', ans: 'I am ready for the boss battle', hint: '/aɪ æm ˈred.i fɔːr ðə bɔːs ˈbæt.əl/', exp: 'Você está preparadíssimo!' },
      { type: 'multiple-choice', prompt: '[Simulado] Qual é a resposta correta para "What is the Wi-Fi password?"', options: ['It is written on your key card envelope.', 'Yes, I am connected.', 'The internet is sixty dollars.', 'No, thank you very much.'], ans: 'It is written on your key card envelope.', exp: 'Resposta contextual perfeita.' },
      { type: 'translate', prompt: '[Simulado] "Com licença, posso experimentar esta jaqueta?"', options: ['Excuse me, can I try this jacket on?', 'Pardon, may I wear this jacket here?', 'Sorry, can I sample this jacket?', 'Excuse me, could you buy this jacket?'], ans: 'Excuse me, can I try this jacket on?', exp: 'can I try this jacket on?' }
    ]
  },
  // 30: Grand Boss World 3 (15 questions)
  {
    num: 30, title: 'O Guardião do Mundo 3: Guardião da Cidade Cotidiana', subtitle: 'Boss Final de Proficiência A2 Consolidada',
    obj: 'Provar maestria absoluta na comunicação e sobrevivência em todas as situações da vida real.',
    type: 'boss', icon: 'crown',
    theory: ['A Batalha Final do Mundo 3! Enfrente os 15 desafios do Guardião da Cidade Cotidiana e desbloqueie o nível intermediário B1!'],
    items: [
      { type: 'multiple-choice', prompt: '[Chefe Supremo A2] Em uma emergência na cidade, como pedir ajuda na rua?', options: ['Excuse me, could you please help me?', 'Hey you, do my task now!', 'I am with emergency, look at me!', 'What is the help here?'], ans: 'Excuse me, could you please help me?', exp: 'Excuse me, could you please help me?' },
      { type: 'word-order', prompt: '[Chefe Supremo A2] Monte o desafio urbano:', options: ['is', 'station', 'across', 'supermarket.', 'The', 'from', 'the'], ans: 'The station is across from the supermarket.', exp: 'across from = do outro lado de.' },
      { type: 'listening', prompt: '[Chefe Supremo A2] Ouça a proclamação do Guardião:', audio: 'You have conquered the streets, airports, hotels, and daily routines of World Three! You are ready for true English communication.', options: ['You have conquered the streets, airports, hotels, and daily routines of World Three! You are ready for true English communication.', 'Welcome to the city traveler, but you need to practice more.', 'Your luggage is lost at the airport, please wait here.', 'Return to the beginning of the world and study again.'], ans: 'You have conquered the streets, airports, hotels, and daily routines of World Three! You are ready for true English communication.', exp: 'Parabéns pela vitória monumental!' },
      { type: 'fill-blank', prompt: '[Chefe Supremo A2] "We are going to _____ to New York next month."', options: ['travel', 'traveling', 'travels', 'traveled'], ans: 'travel', exp: 'Going to + travel.' },
      { type: 'translate', prompt: '[Chefe Supremo A2] Traduza: "A conta, por favor, e pode ficar com o troco."', options: ['The check, please, and keep the change.', 'The bill, please, and stay with money.', 'Give me receipt and hold change.', 'The ticket, please, and save change.'], ans: 'The check, please, and keep the change.', exp: 'The check, please, and keep the change.' },
      { type: 'multiple-choice', visualEmoji: '👑', prompt: '[Chefe Supremo A2] Qual frase NÃO tem nenhum erro gramatical?', options: ['I go running every morning and do yoga on Sundays.', 'I play running every morning and make yoga.', 'I do running every morning and play yoga.', 'I am run every morning and do the yoga.'], ans: 'I go running every morning and do yoga on Sundays.', exp: 'Go running + Do yoga.' },
      { type: 'word-order', prompt: '[Chefe Supremo A2] Organize a sentença de aeroporto:', options: ['boarding', 'Please', 'gate', 'fifteen.', 'proceed', 'to'], ans: 'Please proceed to boarding gate fifteen.', exp: 'Please proceed to boarding gate fifteen.' },
      { type: 'listening', prompt: '[Chefe Supremo A2] Ouça o conselho do Guardião:', audio: 'Always carry your passport and keep your boarding pass safe while traveling.', options: ['Always carry your passport and keep your boarding pass safe while traveling.', 'Never check in your luggage at the counter before traveling.', 'Make sure you arrive at the airport only thirty minutes before departure.', 'Do not exchange your money before arriving at the foreign city.'], ans: 'Always carry your passport and keep your boarding pass safe while traveling.', exp: 'carry your passport... keep boarding pass safe.' },
      { type: 'fill-blank', prompt: '[Chefe Supremo A2] "I have an appointment _____ the doctor at 4:30 pm."', options: ['with', 'at', 'to', 'for'], ans: 'with', exp: 'appointment with the doctor.' },
      { type: 'speaking-repeat', prompt: '[Chefe Supremo A2] Declare sua vitória: "I conquered World Three and I speak English!"', audio: 'I conquered World Three and I speak English', ans: 'I conquered World Three and I speak English', hint: '/aɪ ˈkɑːŋ.kərd wɜːrld θriː ənd aɪ spiːk ˈɪŋ.ɡlɪʃ/', exp: 'Você é um mestre da vida cotidiana em inglês!' },
      { type: 'multiple-choice', prompt: '[Chefe Supremo A2] Qual substantivo é incontável em inglês?', options: ['Luggage', 'Suitcase', 'Bag', 'Backpack'], ans: 'Luggage', exp: 'Luggage é incontável.' },
      { type: 'word-order', prompt: '[Chefe Supremo A2] Monte a frase de tempo meteorológico:', options: ['today,', 'sunny', 'it', 'cold.', 'is', 'Although', 'it', 'is'], ans: 'Although it is sunny today, it is cold.', exp: 'Although it is sunny today, it is cold.' },
      { type: 'translate', prompt: '[Chefe Supremo A2] "Qual é o melhor restaurante da cidade?"', options: ['What is the best restaurant in town?', 'Which is the good restaurant in city?', 'Where is the better restaurant near here?', 'What has best restaurant in the city?'], ans: 'What is the best restaurant in town?', exp: 'the best restaurant in town.' },
      { type: 'listening', prompt: '[Chefe Supremo A2] Ouça a revelação final:', audio: 'The portal to World Four is now open. Step forward into intermediate communication!', options: ['The portal to World Four is now open. Step forward into intermediate communication!', 'The test of World Three has ended in defeat. Try again.', 'You have collected all the luggage from the airport.', 'Welcome back to the hotel lobby traveler.'], ans: 'The portal to World Four is now open. Step forward into intermediate communication!', exp: 'Portal para o Mundo 4 desbloqueado!' },
      { type: 'multiple-choice', prompt: '[Chefe Supremo A2] Qual par de palavras significa "Provador" e "Recibo"?', options: ['Fitting room and Receipt', 'Dressing room and Recipe', 'Testing room and Ticket', 'Changing room and Prescription'], ans: 'Fitting room and Receipt', exp: 'Fitting room and Receipt.' }
    ]
  }
];

const allW3 = [...w3Phases, ...remainingW3];
writeWorldFile(3, 'A2', allW3);

