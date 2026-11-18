const fs = require('fs');

// Read existing REAL_VOCAB_IMAGES so we keep existing entries and add/update the 240 thematic words with card-filling 600x600 URLs
let existingImagesMap = {};
try {
  const existingContent = fs.readFileSync('src/data/realVocabImages.ts', 'utf-8');
  const m = existingContent.match(/export const REAL_VOCAB_IMAGES:\s*Record<string,\s*string>\s*=\s*(\{[\s\S]*?\});/);
  if (m) {
    existingImagesMap = JSON.parse(m[1]);
  }
} catch {
  // ignore
}

// Helper for each vocabulary word following the 5 required fields:
// 1. Palavra em inglês (word)
// 2. Tradução em português (pt)
// 3. Pronúncia simplificada (simplePronunciation, ex: "dór") + IPA (phonetic)
// 4. Frase curta de exemplo em inglês com tradução (exampleEn, examplePt)
// 5. Sugestão de imagem ou ícone ilustrativo (emoji, query)
function w(word, pt, simplePronunciation, phonetic, exampleEn, examplePt, emoji, query) {
  return {
    text: word,
    word,
    label: word,
    pt,
    simplePronunciation,
    phonetic,
    exampleEn,
    examplePt,
    sentence: exampleEn,
    emoji,
    studioQuery: query || `${word} real photo`,
  };
}

// ============================================================================
// 5 TEMAS COMPLETOS (CASA, COMIDA, CORPO HUMANO, TRANSPORTE, ROUPAS)
// Cada tema dividido em 4 MÓDULOS por nível de frequência (12 palavras por módulo)
// ============================================================================

const THEMATIC_MODULES = [
  // ==========================================================================
  // TEMA 1: A CASA (HOME) — 4 MÓDULOS POR FREQUÊNCIA
  // ==========================================================================
  {
    themeId: 'home',
    themeTitle: 'A Casa',
    frequencyLevel: 'Módulo 1 • Essenciais',
    title: 'A Casa • Módulo 1: Palavras Essenciais',
    subtitle: 'Nível 1/4 • As 12 palavras mais usadas no dia a dia dentro de casa',
    pedagogicalObjective: 'Aprender as 12 palavras mais essenciais e frequentes sobre a casa com flashcards, pronúncia simplificada e 4 tipos de exercícios.',
    icon: 'house',
    items: [
      w('Door', 'Porta', 'dór', '/dɔːr/', 'Please close the door.', 'Por favor, feche a porta.', '🚪', 'wooden house door real photo'),
      w('Window', 'Janela', 'uín-dou', '/ˈwɪn.doʊ/', 'Open the window, please.', 'Abra a janela, por favor.', '🪟', 'house glass window real photo'),
      w('Room', 'Quarto / Cômodo', 'rúm', '/ruːm/', 'This room is very clean.', 'Este cômodo está muito limpo.', '🏠', 'cozy bright room interior real photo'),
      w('Floor', 'Chão / Piso', 'flór', '/flɔːr/', 'The floor is clean.', 'O chão está limpo.', '🟫', 'clean house floor interior real photo'),
      w('Kitchen', 'Cozinha', 'kít-chen', '/ˈkɪtʃ.ən/', 'Mom is in the kitchen.', 'A mamãe está na cozinha.', '🍳', 'modern home kitchen interior real photo'),
      w('Bedroom', 'Quarto de dormir', 'béd-rum', '/ˈbed.ruːm/', 'I sleep in my bedroom.', 'Eu durmo no meu quarto.', '🛏️', 'cozy bedroom interior with bed real photo'),
      w('House', 'Casa', 'ráus', '/haʊs/', 'Welcome to my house.', 'Bem-vindo à minha casa.', '🏡', 'family house exterior real photo'),
      w('Key', 'Chave', 'kí', '/kiː/', 'Where is the house key?', 'Onde está a chave de casa?', '🔑', 'metal house key closeup real photo'),
      w('Table', 'Mesa', 'têi-bol', '/ˈteɪ.bəl/', 'The food is on the table.', 'A comida está na mesa.', '🪑', 'wooden dining table real photo'),
      w('Chair', 'Cadeira', 'tchér', '/tʃer/', 'Sit on this chair.', 'Sente-se nesta cadeira.', '🪑', 'wooden chair furniture real photo'),
      w('Light', 'Luz', 'láit', '/laɪt/', 'Turn on the light.', 'Acenda a luz.', '💡', 'warm room ceiling light glowing real photo'),
      w('Water', 'Água', 'uó-ter', '/ˈwɔː.tər/', 'I drink cold water.', 'Eu bebo água gelada.', '💧', 'glass of clear water real photo'),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'A Casa',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'A Casa • Módulo 2: Palavras Comuns',
    subtitle: 'Nível 2/4 • 12 palavras comuns da estrutura e móveis da casa',
    pedagogicalObjective: 'Dominar partes comuns da casa e móveis presentes na rotina diária.',
    icon: 'house',
    items: [
      w('Roof', 'Telhado', 'rúf', '/ruːf/', 'The roof protects the house.', 'O telhado protege a casa.', '🏠', 'house roof with ceramic tiles on top of house real photo'),
      w('Wall', 'Parede / Muro', 'uól', '/wɔːl/', 'The wall is painted white.', 'A parede está pintada de branco.', '🧱', 'painted interior house wall real photo'),
      w('Bathroom', 'Banheiro', 'béth-rum', '/ˈbæθ.ruːm/', 'Wash your hands in the bathroom.', 'Lave as mãos no banheiro.', '🚿', 'clean modern bathroom interior real photo'),
      w('Living room', 'Sala de estar', 'lí-ving rúm', '/ˈlɪv.ɪŋ ruːm/', 'We watch TV in the living room.', 'Nós assistimos TV na sala de estar.', '🛋️', 'living room interior with sofa real photo'),
      w('Bed', 'Cama', 'béd', '/bed/', 'My bed is very comfortable.', 'Minha cama é muito confortável.', '🛏️', 'comfortable bed with pillows real photo'),
      w('Sofa', 'Sofá', 'sôu-fa', '/ˈsoʊ.fə/', 'Sit on the living room sofa.', 'Sente-se no sofá da sala.', '🛋️', 'living room fabric sofa couch real photo'),
      w('Fridge', 'Geladeira', 'frídj', '/frɪdʒ/', 'The milk is in the fridge.', 'O leite está na geladeira.', '🧊', 'modern kitchen refrigerator fridge real photo'),
      w('Stove', 'Fogão', 'stôuv', '/stoʊv/', 'She cooks dinner on the stove.', 'Ela faz o jantar no fogão.', '🔥', 'kitchen stove oven appliance real photo'),
      w('Sink', 'Pia', 'sínk', '/sɪŋk/', 'Put the cup in the sink.', 'Coloque a xícara na pia.', '🚰', 'kitchen sink with faucet real photo'),
      w('Mirror', 'Espelho', 'mí-ror', '/ˈmɪr.ər/', 'Look in the mirror.', 'Olhe no espelho.', '🪞', 'wall mirror in room real photo'),
      w('Lamp', 'Abajur / Luminária', 'lémp', '/læmp/', 'Turn on the bedside lamp.', 'Ligue o abajur.', '💡', 'table lamp glowing real photo'),
      w('Shower', 'Chuveiro', 'xáu-er', '/ˈʃaʊ.ər/', 'I take a warm shower.', 'Eu tomo um banho morno de chuveiro.', '🚿', 'bathroom shower head spraying water real photo'),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'A Casa',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'A Casa • Módulo 3: Palavras Intermediárias',
    subtitle: 'Nível 3/4 • 12 palavras intermediárias de áreas e objetos domésticos',
    pedagogicalObjective: 'Expandir o vocabulário da casa com áreas externas, escadas, teto e itens de conforto.',
    icon: 'house',
    items: [
      w('Ceiling', 'Teto', 'sí-ling', '/ˈsiː.lɪŋ/', 'The lamp hangs from the ceiling.', 'A luminária fica presa no teto.', '🏠', 'white room ceiling with light fixture real photo'),
      w('Stairs', 'Escada', 'stérz', '/sterz/', 'Walk up the stairs carefully.', 'Suba a escada com cuidado.', '🪜', 'house indoor wooden stairs staircase real photo'),
      w('Garage', 'Garagem', 'ga-rádj', '/ɡəˈrɑːʒ/', 'The car is in the garage.', 'O carro está na garagem.', '🚗', 'house garage with open door real photo'),
      w('Balcony', 'Varanda / Sacada', 'bél-co-ni', '/ˈbæl.kə.ni/', 'The apartment has a sunny balcony.', 'O apartamento tem uma varanda ensolarada.', '🌤️', 'house balcony with railing and view real photo'),
      w('Curtain', 'Cortina', 'câr-ten', '/ˈkɜːr.tən/', 'Close the window curtain.', 'Feche a cortina da janela.', '🪟', 'window curtains hanging in room real photo'),
      w('Rug', 'Tapete', 'râg', '/rʌɡ/', 'There is a soft rug on the floor.', 'Há um tapete macio no chão.', '🟥', 'woven rug carpet on floor real photo'),
      w('Pillow', 'Travesseiro', 'pí-lou', '/ˈpɪl.oʊ/', 'This pillow is very soft.', 'Este travesseiro é muito macio.', '⬜', 'soft white bed pillow real photo'),
      w('Blanket', 'Cobertor', 'blén-ket', '/ˈblæŋ.kɪt/', 'Take a warm blanket tonight.', 'Pegue um cobertor quentinho hoje à noite.', '🛌', 'warm folded wool blanket real photo'),
      w('Towel', 'Toalha', 'táu-el', '/ˈtaʊ.əl/', 'Dry your hands with a towel.', 'Seque suas mãos com uma toalha.', '🧺', 'clean folded bath towel real photo'),
      w('Shelf', 'Prateleira / Estante', 'xélf', '/ʃelf/', 'Put the book on the shelf.', 'Coloque o livro na prateleira.', '📚', 'wooden wall shelf with books real photo'),
      w('Drawer', 'Gaveta', 'dró-er', '/drɔːr/', 'Open the top drawer.', 'Abra a gaveta de cima.', '🗄️', 'open wooden cabinet drawer real photo'),
      w('Gate', 'Portão', 'guêit', '/ɡeɪt/', 'Lock the front gate.', 'Tranque o portão da frente.', '🚪', 'house front entrance gate real photo'),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'A Casa',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'A Casa • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Nível 4/4 • 12 palavras específicas de arquitetura e detalhes da casa',
    pedagogicalObjective: 'Conhecer termos mais específicos da estrutura residencial, como sótão, porão, chaminé, maçaneta e calha.',
    icon: 'house',
    items: [
      w('Attic', 'Sótão', 'é-tik', '/ˈæt.ɪk/', 'Old boxes are stored in the attic.', 'Caixas antigas ficam guardadas no sótão.', '🏠', 'house wooden attic room under roof real photo'),
      w('Basement', 'Porão / Subsolo', 'bêis-ment', '/ˈbeɪs.mənt/', 'The laundry room is in the basement.', 'A lavanderia fica no porão.', '🪜', 'house basement room with stairs real photo'),
      w('Chimney', 'Chaminé', 'tchím-ni', '/ˈtʃɪm.ni/', 'Smoke comes out of the brick chimney.', 'A fumaça sai pela chaminé.', '🧱', 'brick chimney on house roof real photo'),
      w('Doorknob', 'Maçaneta', 'dór-nób', '/ˈdɔːr.nɑːb/', 'Turn the doorknob to open it.', 'Gire a maçaneta para abrir.', '🚪', 'metal doorknob on wooden door closeup real photo'),
      w('Gutter', 'Calha de chuva', 'gâ-ter', '/ˈɡʌt.ər/', 'Rainwater flows through the roof gutter.', 'A água da chuva corre pela calha do telhado.', '🌧️', 'house roof rain gutter closeup real photo'),
      w('Fence', 'Cerca', 'féns', '/fens/', 'A wooden fence surrounds the yard.', 'Uma cerca de madeira rodeia o quintal.', '🏡', 'wooden yard fence in front of house real photo'),
      w('Mailbox', 'Caixa de correio', 'mêil-bóks', '/ˈmeɪl.bɑːks/', 'Check the mailbox for letters.', 'Olhe a caixa de correio para ver se há cartas.', '📫', 'house mailbox at entrance real photo'),
      w('Doorbell', 'Campainha', 'dór-bél', '/ˈdɔːr.bel/', 'Somebody rang the doorbell.', 'Alguém tocou a campainha.', '🔔', 'finger pressing house doorbell button real photo'),
      w('Faucet', 'Torneira', 'fó-set', '/ˈfɔː.sɪt/', 'Turn off the water faucet.', 'Feche a torneira de água.', '🚰', 'chrome sink water faucet closeup real photo'),
      w('Closet', 'Armário / Closet', 'cló-zet', '/ˈklɑː.zɪt/', 'Hang your coat in the closet.', 'Pendure seu casaco no armário.', '🚪', 'open bedroom clothes closet real photo'),
      w('Broom', 'Vassoura', 'brúm', '/bruːm/', 'Sweep the kitchen with a broom.', 'Varra a cozinha com uma vassoura.', '🧹', 'household sweeping broom real photo'),
      w('Bucket', 'Balde', 'bâ-ket', '/ˈbʌk.ɪt/', 'Fill the bucket with water.', 'Encha o balde com água.', '🪣', 'plastic water bucket with handle real photo'),
    ],
  },

  // ==========================================================================
  // TEMA 2: COMIDA (FOOD) — 4 MÓDULOS POR FREQUÊNCIA
  // ==========================================================================
  {
    themeId: 'food',
    themeTitle: 'Comida',
    frequencyLevel: 'Módulo 1 • Essenciais',
    title: 'Comida • Módulo 1: Palavras Essenciais',
    subtitle: 'Nível 1/4 • Os 12 alimentos e bebidas mais básicos do dia a dia',
    pedagogicalObjective: 'Dominar os alimentos e bebidas indispensáveis em qualquer refeição.',
    icon: 'apple',
    items: [
      w('Bread', 'Pão', 'bréd', '/bred/', 'I eat warm bread for breakfast.', 'Eu como pão quentinho no café da manhã.', '🍞', 'fresh golden loaf of bread real photo'),
      w('Rice', 'Arroz', 'ráis', '/raɪs/', 'We eat white rice every day.', 'Nós comemos arroz branco todos os dias.', '🍚', 'bowl of cooked white rice real photo'),
      w('Beans', 'Feijão', 'bínz', '/biːnz/', 'Rice and beans taste great.', 'Arroz e feijão são deliciosos.', '🫘', 'bowl of cooked brown beans real photo'),
      w('Meat', 'Carne', 'mít', '/miːt/', 'He cooked the meat on the grill.', 'Ele assou a carne na grelha.', '🥩', 'cooked beef steak meat on plate real photo'),
      w('Chicken', 'Frango', 'tchí-ken', '/ˈtʃɪk.ɪn/', 'We had roast chicken for lunch.', 'Comemos frango assado no almoço.', '🍗', 'golden roast chicken on plate real photo'),
      w('Egg', 'Ovo', 'ég', '/eɡ/', 'I like fried eggs in the morning.', 'Eu gosto de ovos fritos de manhã.', '🥚', 'whole egg and fried egg real photo'),
      w('Milk', 'Leite', 'mílk', '/mɪlk/', 'Drink a glass of warm milk.', 'Beba um copo de leite morno.', '🥛', 'glass of fresh white milk real photo'),
      w('Coffee', 'Café', 'có-fi', '/ˈkɔː.fi/', 'She loves hot coffee.', 'Ela adora café quente.', '☕', 'cup of hot black coffee real photo'),
      w('Juice', 'Suco', 'djús', '/dʒuːs/', 'Fresh orange juice is delicious.', 'Suco de laranja fresco é delicioso.', '🧃', 'glass of fresh orange juice real photo'),
      w('Apple', 'Maçã', 'é-pol', '/ˈæp.əl/', 'This red apple is sweet.', 'Esta maçã vermelha é doce.', '🍎', 'fresh red apple fruit with leaf real photo'),
      w('Banana', 'Banana', 'ba-né-na', '/bəˈnæn.ə/', 'Peel the yellow banana.', 'Descasque a banana amarela.', '🍌', 'ripe yellow bananas real photo'),
      w('Cheese', 'Queijo', 'tchíz', '/tʃiːz/', 'Put cheese on the bread.', 'Coloque queijo no pão.', '🧀', 'yellow cheese wedge real photo'),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Comida',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'Comida • Módulo 2: Palavras Comuns',
    subtitle: 'Nível 2/4 • 12 comidas muito comuns nas refeições',
    pedagogicalObjective: 'Aprender pratos, temperos básicos e alimentos muito frequentes na mesa.',
    icon: 'apple',
    items: [
      w('Butter', 'Manteiga', 'bâ-ter', '/ˈbʌt.ər/', 'Spread butter on the toast.', 'Passe manteiga na torrada.', '🧈', 'yellow butter on dish real photo'),
      w('Fish', 'Peixe', 'fíx', '/fɪʃ/', 'Grilled fish is very healthy.', 'Peixe grelhado é muito saudável.', '🐟', 'cooked grilled fish fillet on plate real photo'),
      w('Soup', 'Sopa', 'súp', '/suːp/', 'Hot soup is great on cold nights.', 'Sopa quente é ótima em noites frias.', '🍲', 'bowl of hot vegetable soup real photo'),
      w('Salad', 'Salada', 'sé-lad', '/ˈsæl.əd/', 'I made a fresh green salad.', 'Eu fiz uma salada verde fresca.', '🥗', 'bowl of fresh vegetable salad real photo'),
      w('Pasta', 'Macarrão', 'pás-ta', '/ˈpɑː.stə/', 'We love pasta with tomato sauce.', 'Adoramos macarrão com molho de tomate.', '🍝', 'plate of spaghetti pasta with tomato sauce real photo'),
      w('Pizza', 'Pizza', 'pít-sa', '/ˈpiːt.sə/', 'Let us share a cheese pizza.', 'Vamos dividir uma pizza de queijo.', '🍕', 'whole cheese pizza real photo'),
      w('Cake', 'Bolo', 'kêik', '/keɪk/', 'She baked a chocolate cake.', 'Ela assou um bolo de chocolate.', '🍰', 'chocolate cake on plate real photo'),
      w('Orange', 'Laranja', 'ó-rendj', '/ˈɔːr.ɪndʒ/', 'This orange is very juicy.', 'Esta laranja tem muito suco.', '🍊', 'fresh orange fruit whole and half real photo'),
      w('Tomato', 'Tomate', 'to-mêi-tou', '/təˈmeɪ.toʊ/', 'Slice the red tomato.', 'Corte o tomate vermelho em fatias.', '🍅', 'fresh red tomato real photo'),
      w('Potato', 'Batata', 'po-têi-tou', '/pəˈteɪ.toʊ/', 'Baked potatoes are delicious.', 'Batatas assadas são deliciosas.', '🥔', 'fresh yellow potatoes real photo'),
      w('Sugar', 'Açúcar', 'xú-gar', '/ˈʃʊɡ.ər/', 'Do you want sugar in your coffee?', 'Você quer açúcar no seu café?', '🥄', 'white sugar in bowl with spoon real photo'),
      w('Salt', 'Sal', 'sólt', '/sɔːlt/', 'Add a little salt to the food.', 'Coloque um pouco de sal na comida.', '🧂', 'salt shaker and white salt real photo'),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Comida',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'Comida • Módulo 3: Palavras Intermediárias',
    subtitle: 'Nível 3/4 • 12 frutas, verduras e lanches do cotidiano',
    pedagogicalObjective: 'Ampliar o vocabulário alimentar com vegetais, frutas populares e lanches.',
    icon: 'apple',
    items: [
      w('Oil', 'Óleo / Azeite', 'ói-ol', '/ɔɪl/', 'Cook the vegetables with olive oil.', 'Prepare os legumes com azeite.', '🫒', 'bottle of cooking olive oil real photo'),
      w('Onion', 'Cebola', 'â-nion', '/ˈʌn.jən/', 'Chop the onion for the sauce.', 'Pique a cebola para o molho.', '🧅', 'whole yellow onion real photo'),
      w('Garlic', 'Alho', 'gár-lik', '/ˈɡɑːr.lɪk/', 'Garlic gives great flavor to food.', 'O alho dá um ótimo sabor à comida.', '🧄', 'white garlic bulb real photo'),
      w('Carrot', 'Cenoura', 'ké-rot', '/ˈkær.ət/', 'Carrots are crunchy and sweet.', 'Cenouras são crocantes e doces.', '🥕', 'fresh orange carrot real photo'),
      w('Lettuce', 'Alface', 'lé-tis', '/ˈlet.ɪs/', 'Wash the green lettuce leaves.', 'Lave as folhas verdes de alface.', '🥬', 'fresh green lettuce head real photo'),
      w('Lemon', 'Limão', 'lé-mon', '/ˈlem.ən/', 'Lemon tastes sour and fresh.', 'O limão tem gosto azedo e refrescante.', '🍋', 'fresh lemon whole and half real photo'),
      w('Strawberry', 'Morango', 'stró-bé-ri', '/ˈstrɔː.ber.i/', 'Red strawberries are my favorite fruit.', 'Morangos vermelhos são minha fruta favorita.', '🍓', 'fresh red strawberry fruit real photo'),
      w('Grape', 'Uva', 'grêip', '/ɡreɪp/', 'Wash the bunch of grapes.', 'Lave o cacho de uvas.', '🍇', 'bunch of purple grapes real photo'),
      w('Watermelon', 'Melancia', 'uó-ter-mé-lon', '/ˈwɔː.tərˌmel.ən/', 'Cold watermelon is great in summer.', 'Melancia gelada é ótima no verão.', '🍉', 'watermelon with red slice real photo'),
      w('Sandwich', 'Sanduíche', 'sénd-uitch', '/ˈsæn.wɪtʃ/', 'I packed a cheese sandwich.', 'Eu preparei um sanduíche de queijo.', '🥪', 'fresh sandwich with cheese and lettuce real photo'),
      w('Ice cream', 'Sorvete', 'áis crím', '/ˈaɪs kriːm/', 'Kids love chocolate ice cream.', 'As crianças adoram sorvete de chocolate.', '🍦', 'ice cream cone scoop real photo'),
      w('Yogurt', 'Iogurte', 'iôu-gârt', '/ˈjoʊ.ɡərt/', 'I eat yogurt with fruit.', 'Eu como iogurte com frutas.', '🥣', 'bowl of creamy yogurt with spoon real photo'),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Comida',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'Comida • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Nível 4/4 • 12 ingredientes, frutas tropicais e vegetais específicos',
    pedagogicalObjective: 'Conhecer frutas tropicais, legumes específicos e ingredientes de culinária.',
    icon: 'apple',
    items: [
      w('Pineapple', 'Abacaxi', 'pái-né-pol', '/ˈpaɪnˌæp.əl/', 'Pineapple is a tropical fruit.', 'O abacaxi é uma fruta tropical.', '🍍', 'whole pineapple fruit real photo'),
      w('Mango', 'Manga', 'mén-gou', '/ˈmæŋ.ɡoʊ/', 'This ripe mango is very sweet.', 'Esta manga madura está muito doce.', '🥭', 'ripe mango fruit real photo'),
      w('Avocado', 'Abacate', 'a-vo-cá-dou', '/ˌæv.əˈkɑː.doʊ/', 'Avocado is rich and creamy.', 'O abacate é rico e cremoso.', '🥑', 'green avocado cut in half real photo'),
      w('Corn', 'Milho', 'córn', '/kɔːrn/', 'Cooked yellow corn is delicious.', 'Milho amarelo cozido é delicioso.', '🌽', 'yellow sweet corn cob real photo'),
      w('Broccoli', 'Brócolis', 'bró-co-li', '/ˈbrɑː.kəl.i/', 'Steamed broccoli is very nutritious.', 'Brócolis no vapor é muito nutritivo.', '🥦', 'fresh green broccoli head real photo'),
      w('Cucumber', 'Pepino', 'kiú-câm-ber', '/ˈkjuː.kʌm.bər/', 'Put cucumber slices in the salad.', 'Coloque rodelas de pepino na salada.', '🥒', 'fresh green cucumber real photo'),
      w('Mushroom', 'Cogumelo', 'mâx-rum', '/ˈmʌʃ.ruːm/', 'Add mushrooms to the pasta sauce.', 'Adicione cogumelos ao molho de macarrão.', '🍄', 'fresh champignon mushrooms real photo'),
      w('Pepper', 'Pimenta / Pimentão', 'pé-per', '/ˈpep.ər/', 'Red pepper adds color to the dish.', 'O pimentão vermelho dá cor ao prato.', '🫑', 'fresh red bell pepper real photo'),
      w('Honey', 'Mel', 'râ-ni', '/ˈhʌn.i/', 'Bees make golden honey.', 'As abelhas produzem mel dourado.', '🍯', 'jar of golden honey with dipper real photo'),
      w('Jam', 'Geleia', 'djém', '/dʒæm/', 'Spread strawberry jam on the bread.', 'Passe geleia de morango no pão.', '🍓', 'glass jar of red fruit jam real photo'),
      w('Flour', 'Farinha', 'fláu-er', '/ˈflaʊ.ər/', 'Mix wheat flour and eggs for the cake.', 'Misture farinha de trigo e ovos para o bolo.', '🥣', 'white wheat flour in bowl real photo'),
      w('Peanut', 'Amendoim', 'pí-nât', '/ˈpiː.nʌt/', 'Roasted peanuts are a crunchy snack.', 'Amendoins torrados são um lanche crocante.', '🥜', 'peanuts in shell closeup real photo'),
    ],
  },

  // ==========================================================================
  // TEMA 3: CORPO HUMANO (HUMAN BODY) — 4 MÓDULOS POR FREQUÊNCIA
  // ==========================================================================
  {
    themeId: 'body',
    themeTitle: 'Corpo Humano',
    frequencyLevel: 'Módulo 1 • Essenciais',
    title: 'Corpo Humano • Módulo 1: Palavras Essenciais',
    subtitle: 'Nível 1/4 • As 12 partes principais do corpo mais usadas no dia a dia',
    pedagogicalObjective: 'Reconhecer e pronunciar as 12 partes fundamentais do corpo humano.',
    icon: 'star',
    items: [
      w('Head', 'Cabeça', 'réd', '/hed/', 'Nod your head to say yes.', 'Balance a cabeça para dizer sim.', '🧑', 'person head portrait closeup real photo'),
      w('Hand', 'Mão', 'rénd', '/hænd/', 'Raise your hand to speak.', 'Levante a mão para falar.', '✋', 'open human hand palm real photo'),
      w('Foot', 'Pé', 'fút', '/fʊt/', 'Put your shoe on your foot.', 'Coloque o sapato no pé.', '🦶', 'human bare foot real photo'),
      w('Eye', 'Olho', 'ái', '/aɪ/', 'She has brown eyes.', 'Ela tem olhos castanhos.', '👁️', 'human eye closeup real photo'),
      w('Ear', 'Orelha / Ouvido', 'ír', '/ɪr/', 'We listen with our ears.', 'Nós ouvimos com nossos ouvidos.', '👂', 'human ear closeup real photo'),
      w('Nose', 'Nariz', 'nôuz', '/noʊz/', 'Breathe through your nose.', 'Respire pelo nariz.', '👃', 'human nose closeup real photo'),
      w('Mouth', 'Boca', 'máuth', '/maʊθ/', 'Open your mouth to speak.', 'Abra a boca para falar.', '👄', 'smiling human mouth closeup real photo'),
      w('Hair', 'Cabelo', 'rér', '/her/', 'She brushes her long hair.', 'Ela escova seu cabelo comprido.', '💇', 'healthy brown hair real photo'),
      w('Face', 'Rosto', 'fêis', '/feɪs/', 'Wash your face in the morning.', 'Lave o rosto de manhã.', '😊', 'smiling person face portrait real photo'),
      w('Arm', 'Braço', 'árm', '/ɑːrm/', 'Stretch your arms high.', 'Estique seus braços para o alto.', '💪', 'human arm and hand real photo'),
      w('Leg', 'Perna', 'lég', '/leɡ/', 'He has strong legs for running.', 'Ele tem pernas fortes para correr.', '🦵', 'runner human legs real photo'),
      w('Body', 'Corpo', 'bó-di', '/ˈbɑː.di/', 'Exercise is good for your body.', 'Exercício faz bem para o seu corpo.', '🧍', 'healthy person stretching full body real photo'),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Corpo Humano',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'Corpo Humano • Módulo 2: Palavras Comuns',
    subtitle: 'Nível 2/4 • 12 partes comuns em conversas e consultas médicas',
    pedagogicalObjective: 'Identificar partes do corpo frequentes ao falar de saúde, movimento e bem-estar.',
    icon: 'star',
    items: [
      w('Tooth', 'Dente', 'túth', '/tuːθ/', 'Brush every tooth after meals.', 'Escove cada dente após as refeições.', '🦷', 'clean white tooth dental model real photo'),
      w('Finger', 'Dedo da mão', 'fín-guer', '/ˈfɪŋ.ɡər/', 'We have five fingers on each hand.', 'Temos cinco dedos em cada mão.', '☝️', 'hand pointing index finger real photo'),
      w('Back', 'Costas', 'bék', '/bæk/', 'Keep your back straight when sitting.', 'Mantenha as costas retas ao sentar.', '🧍', 'person back posture real photo'),
      w('Heart', 'Coração', 'rárt', '/hɑːrt/', 'Your heart beats fast when you run.', 'Seu coração bate rápido quando você corre.', '❤️', 'red heart anatomical model real photo'),
      w('Neck', 'Pescoço', 'nék', '/nek/', 'Wrap a warm scarf around your neck.', 'Enrole um cachecol quentinho no pescoço.', '🧣', 'human neck and shoulders closeup real photo'),
      w('Shoulder', 'Ombro', 'xôul-der', '/ˈʃoʊl.dər/', 'Carry the bag on your shoulder.', 'Carregue a bolsa no ombro.', '🤷', 'person shoulder closeup real photo'),
      w('Knee', 'Joelho', 'ní', '/niː/', 'Bend your knees slowly.', 'Dobre seus joelhos devagar.', '🦵', 'human knee leg joint closeup real photo'),
      w('Stomach', 'Estômago / Barriga', 'stâ-mak', '/ˈstʌm.ək/', 'My stomach is full after dinner.', 'Meu estômago está cheio após o jantar.', '🤰', 'person holding stomach belly real photo'),
      w('Skin', 'Pele', 'skín', '/skɪn/', 'Drink water for healthy skin.', 'Beba água para ter uma pele saudável.', '✋', 'healthy human skin hand closeup real photo'),
      w('Voice', 'Voz', 'vóis', '/vɔɪs/', 'The teacher has a sweet voice.', 'A professora tem uma voz meiga.', '🗣️', 'person speaking into microphone real photo'),
      w('Blood', 'Sangue', 'blâd', '/blʌd/', 'The heart pumps blood through the body.', 'O coração bombeia sangue pelo corpo.', '🩸', 'red blood drop laboratory test real photo'),
      w('Bone', 'Osso', 'bôun', '/boʊn/', 'Calcium keeps our bones strong.', 'O cálcio mantém nossos ossos fortes.', '🦴', 'white bone model real photo'),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Corpo Humano',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'Corpo Humano • Módulo 3: Palavras Intermediárias',
    subtitle: 'Nível 3/4 • 12 articulações, órgãos e detalhes intermediários do corpo',
    pedagogicalObjective: 'Aprender articulações e partes intermediárias do corpo humano.',
    icon: 'star',
    items: [
      w('Tongue', 'Língua', 'tâng', '/tʌŋ/', 'We taste food with our tongue.', 'Sentimos o gosto da comida com a língua.', '👅', 'mouth showing tongue closeup real photo'),
      w('Lip', 'Lábio', 'líp', '/lɪp/', 'Use balm on dry lips.', 'Use protetor labial nos lábios secos.', '👄', 'human lips closeup real photo'),
      w('Brain', 'Cérebro', 'brêin', '/breɪn/', 'Studying languages exercises the brain.', 'Estudar idiomas exercita o cérebro.', '🧠', 'human brain model real photo'),
      w('Chest', 'Peito / Tórax', 'tchést', '/tʃest/', 'Take a deep breath into your chest.', 'Respire fundo enchendo o peito.', '🧍', 'person hand on chest breathing real photo'),
      w('Elbow', 'Cotovelo', 'él-bou', '/ˈel.boʊ/', 'Do not put your elbows on the table.', 'Não coloque os cotovelos na mesa.', '💪', 'human arm elbow joint closeup real photo'),
      w('Wrist', 'Pulso / Punho', 'ríst', '/rɪst/', 'She wears a watch on her wrist.', 'Ela usa um relógio no pulso.', '⌚', 'human wrist with watch closeup real photo'),
      w('Ankle', 'Tornozelo', 'én-kol', '/ˈæŋ.kəl/', 'Warm up your ankles before running.', 'Aqueça os tornozelos antes de correr.', '🦶', 'human foot and ankle closeup real photo'),
      w('Toe', 'Dedo do pé', 'tôu', '/toʊ/', 'Wiggle your toes in the sand.', 'Mexa os dedos do pé na areia.', '🦶', 'bare foot toes closeup real photo'),
      w('Beard', 'Barba', 'bírd', '/bɪrd/', 'My father has a short beard.', 'Meu pai tem uma barba curta.', '🧔', 'man with beard portrait real photo'),
      w('Nail', 'Unha', 'nêil', '/neɪl/', 'Keep your fingernails clean and short.', 'Mantenha as unhas limpas e curtas.', '💅', 'clean fingernails hand closeup real photo'),
      w('Muscle', 'Músculo', 'mâ-sol', '/ˈmʌs.əl/', 'Swimming builds strong muscles.', 'Nadar desenvolve músculos fortes.', '💪', 'strong arm biceps muscle real photo'),
      w('Tear', 'Lágrima', 'tír', '/tɪr/', 'A tear rolled down her face.', 'Uma lágrima rolou pelo rosto dela.', '😢', 'eye with teardrop closeup real photo'),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Corpo Humano',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'Corpo Humano • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Nível 4/4 • 12 partes específicas do rosto e anatomia',
    pedagogicalObjective: 'Dominar termos anatômicos e detalhes específicos do rosto e do tronco.',
    icon: 'star',
    items: [
      w('Eyebrow', 'Sobrancelha', 'ái-brau', '/ˈaɪ.braʊ/', 'He raised one eyebrow in surprise.', 'Ele levantou uma sobrancelha surpreso.', '🤨', 'eye and eyebrow closeup real photo'),
      w('Eyelash', 'Cílio', 'ái-léx', '/ˈaɪ.læʃ/', 'Eyelashes protect our eyes from dust.', 'Os cílios protegem nossos olhos da poeira.', '👁️', 'long eyelashes eye closeup real photo'),
      w('Chin', 'Queixo', 'tchín', '/tʃɪn/', 'He rested his chin on his hand.', 'Ele apoiou o queixo na mão.', '🧑', 'person chin and jawline closeup real photo'),
      w('Cheek', 'Bochecha', 'tchík', '/tʃiːk/', 'She kissed her baby on the cheek.', 'Ela beijou o bebê na bochecha.', '😊', 'smiling face rosy cheek closeup real photo'),
      w('Forehead', 'Testa', 'fór-réd', '/ˈfɔːr.hed/', 'She felt his forehead for a fever.', 'Ela tocou a testa dele para ver se tinha febre.', '🧑', 'hand touching forehead closeup real photo'),
      w('Throat', 'Garganta', 'thrôut', '/θroʊt/', 'Warm tea soothes a sore throat.', 'Chá morno alivia a dor de garganta.', '🍵', 'person touching throat neck real photo'),
      w('Lung', 'Pulmão', 'lâng', '/lʌŋ/', 'Fresh air fills our lungs.', 'O ar puro enche nossos pulmões.', '🫁', 'human lungs anatomical model real photo'),
      w('Thumb', 'Polegar (dedão)', 'thâm', '/θʌm/', 'Give a thumbs up if you agree.', 'Faça sinal de positivo com o polegar se concordar.', '👍', 'hand giving thumbs up real photo'),
      w('Heel', 'Calcanhar', 'ríl', '/hiːl/', 'These shoes cushion your heel.', 'Estes sapatos amortecem o seu calcanhar.', '🦶', 'foot heel closeup real photo'),
      w('Waist', 'Cintura', 'uêist', '/weɪst/', 'Fasten the belt around your waist.', 'Aperte o cinto ao redor da cintura.', '👖', 'belt around waist closeup real photo'),
      w('Hip', 'Quadril', 'ríp', '/hɪp/', 'Put your hands on your hips.', 'Coloque as mãos no quadril.', '🧍', 'person hands on hips real photo'),
      w('Rib', 'Costela', 'ríb', '/rɪb/', 'The ribs protect the heart and lungs.', 'As costelas protegem o coração e os pulmões.', '🦴', 'human rib cage model real photo'),
    ],
  },

  // ==========================================================================
  // TEMA 4: TRANSPORTE (TRANSPORT) — 4 MÓDULOS POR FREQUÊNCIA
  // ==========================================================================
  {
    themeId: 'transport',
    themeTitle: 'Transporte',
    frequencyLevel: 'Módulo 1 • Essenciais',
    title: 'Transporte • Módulo 1: Palavras Essenciais',
    subtitle: 'Nível 1/4 • Os 12 veículos e termos de deslocamento mais usados',
    pedagogicalObjective: 'Conhecer os meios de transporte e termos básicos mais usados para se locomover.',
    icon: 'car',
    items: [
      w('Car', 'Carro', 'cár', '/kɑːr/', 'We travel by car on weekends.', 'Nós viajamos de carro nos fins de semana.', '🚗', 'red passenger sedan car real photo'),
      w('Bus', 'Ônibus', 'bâs', '/bʌs/', 'Take the bus to school.', 'Pegue o ônibus para a escola.', '🚌', 'city passenger bus real photo'),
      w('Street', 'Rua', 'strít', '/striːt/', 'Look both ways before crossing the street.', 'Olhe para os dois lados antes de atravessar a rua.', '🛣️', 'paved residential street with trees real photo'),
      w('Bicycle', 'Bicicleta', 'bái-si-kol', '/ˈbaɪ.sɪ.kəl/', 'She rides her bicycle in the park.', 'Ela anda de bicicleta no parque.', '🚲', 'bicycle bike side view real photo'),
      w('Train', 'Trem', 'trêin', '/treɪn/', 'The train arrives at eight o\'clock.', 'O trem chega às oito horas.', '🚆', 'modern passenger train on tracks real photo'),
      w('Airplane', 'Avião', 'ér-plêin', '/ˈer.pleɪn/', 'The airplane flies above the clouds.', 'O avião voa acima das nuvens.', '✈️', 'commercial passenger airplane flying real photo'),
      w('Taxi', 'Táxi', 'ték-si', '/ˈtæk.si/', 'Let us take a taxi to the hotel.', 'Vamos pegar um táxi até o hotel.', '🚕', 'yellow taxi cab car real photo'),
      w('Truck', 'Caminhão', 'trâk', '/trʌk/', 'The truck carries heavy boxes.', 'O caminhão transporta caixas pesadas.', '🚚', 'delivery cargo truck real photo'),
      w('Motorcycle', 'Moto', 'môu-tor-sái-kol', '/ˈmoʊ.tərˌsaɪ.kəl/', 'Wear a helmet on a motorcycle.', 'Use capacete na moto.', '🏍️', 'motorcycle motorbike real photo'),
      w('Boat', 'Barco', 'bôut', '/boʊt/', 'A small boat crosses the lake.', 'Um pequeno barco atravessa o lago.', '⛵', 'boat on water real photo'),
      w('Ticket', 'Passagem / Bilhete', 'tí-ket', '/ˈtɪk.ɪt/', 'Buy your bus ticket here.', 'Compre sua passagem de ônibus aqui.', '🎫', 'travel boarding pass ticket real photo'),
      w('Station', 'Estação', 'stêi-xon', '/ˈsteɪ.ʃən/', 'Meet me at the train station.', 'Encontre-me na estação de trem.', '🚉', 'train subway station platform real photo'),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Transporte',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'Transporte • Módulo 2: Palavras Comuns',
    subtitle: 'Nível 2/4 • 12 termos comuns de viagem, trânsito e direção',
    pedagogicalObjective: 'Aprender palavras comuns de trânsito, viagem urbana e partes principais dos veículos.',
    icon: 'car',
    items: [
      w('Subway', 'Metrô', 'sâb-uêi', '/ˈsʌb.weɪ/', 'The subway is fast and avoids traffic.', 'O metrô é rápido e evita o trânsito.', '🚇', 'underground subway metro train real photo'),
      w('Ship', 'Navio', 'xíp', '/ʃɪp/', 'A large ship sails across the ocean.', 'Um grande navio navega pelo oceano.', '🚢', 'large passenger cruise ship at sea real photo'),
      w('Road', 'Estrada / Rodovia', 'rôud', '/roʊd/', 'Follow this road to the beach.', 'Siga esta estrada até a praia.', '🛣️', 'highway asphalt road in landscape real photo'),
      w('Bridge', 'Ponte', 'brídj', '/brɪdʒ/', 'Drive across the river bridge.', 'Dirija sobre a ponte do rio.', '🌉', 'bridge over river water real photo'),
      w('Airport', 'Aeroporto', 'ér-pórt', '/ˈer.pɔːrt/', 'We arrived early at the airport.', 'Chegamos cedo ao aeroporto.', '🛫', 'airport terminal with airplane real photo'),
      w('Driver', 'Motorista', 'drái-ver', '/ˈdraɪ.vər/', 'The bus driver is very polite.', 'O motorista do ônibus é muito educado.', '🧑‍✈️', 'car driver holding steering wheel real photo'),
      w('Passenger', 'Passageiro', 'pé-sen-djer', '/ˈpæs.ən.dʒər/', 'All passengers must wear seatbelts.', 'Todos os passageiros devem usar cinto.', '🧳', 'passengers sitting in bus or plane real photo'),
      w('Wheel', 'Roda / Volante', 'uíl', '/wiːl/', 'Keep both hands on the wheel.', 'Mantenha as duas mãos no volante.', '🛞', 'car steering wheel interior real photo'),
      w('Tire', 'Pneu', 'tái-er', '/ˈtaɪ.ər/', 'Check the air in the car tire.', 'Verifique o ar do pneu do carro.', '🛞', 'black rubber car tire wheel real photo'),
      w('Map', 'Mapa', 'mép', '/mæp/', 'Check the city map on your phone.', 'Olhe o mapa da cidade no celular.', '🗺️', 'navigation map on smartphone real photo'),
      w('Stop', 'Parada / Ponto', 'stóp', '/stɑːp/', 'Wait for me at the bus stop.', 'Espere por mim no ponto de ônibus.', '🚏', 'city bus stop shelter on street real photo'),
      w('Traffic', 'Trânsito / Tráfego', 'tré-fik', '/ˈtræf.ɪk/', 'There is heavy traffic this morning.', 'Há trânsito intenso nesta manhã.', '🚦', 'city street cars traffic real photo'),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Transporte',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'Transporte • Módulo 3: Palavras Intermediárias',
    subtitle: 'Nível 3/4 • 12 palavras intermediárias da via pública e segurança',
    pedagogicalObjective: 'Dominar elementos da via urbana, segurança no trânsito e veículos de serviço.',
    icon: 'car',
    items: [
      w('Helicopter', 'Helicóptero', 'ré-li-cóp-ter', '/ˈhel.ɪˌkɑːp.tər/', 'The helicopter landed on the roof.', 'O helicóptero pousou no topo do prédio.', '🚁', 'helicopter flying in sky real photo'),
      w('Van', 'Van / Perua', 'vén', '/væn/', 'The school van picks up the kids.', 'A van escolar busca as crianças.', '🚐', 'white passenger van vehicle real photo'),
      w('Ambulance', 'Ambulância', 'ém-biu-lans', '/ˈæm.bjə.ləns/', 'Make way for the ambulance.', 'Dê passagem para a ambulância.', '🚑', 'emergency medical ambulance van real photo'),
      w('Seat', 'Assento / Banco', 'sít', '/siːt/', 'Please take a seat on the train.', 'Por favor, sente-se no banco do trem.', '💺', 'passenger car or airplane seat real photo'),
      w('Helmet', 'Capacete', 'rél-met', '/ˈhel.mət/', 'Always wear a safety helmet.', 'Use sempre um capacete de segurança.', '⛑️', 'motorcycle protective helmet real photo'),
      w('Sidewalk', 'Calçada', 'sáid-uók', '/ˈsaɪd.wɔːk/', 'Pedestrians walk on the sidewalk.', 'Os pedestres caminham na calçada.', '🚶', 'street concrete sidewalk walkway beside house real photo'),
      w('Crosswalk', 'Faixa de pedestres', 'crós-uók', '/ˈkrɔːs.wɔːk/', 'Cross the avenue at the crosswalk.', 'Atravesse a avenida na faixa de pedestres.', '🚸', 'white pedestrian zebra crosswalk on street real photo'),
      w('Corner', 'Esquina', 'cór-ner', '/ˈkɔːr.nər/', 'The bakery is on the street corner.', 'A padaria fica na esquina da rua.', '🏙️', 'city street corner building intersection real photo'),
      w('Fuel', 'Combustível / Gasolina', 'fiú-el', '/ˈfjuː.əl/', 'Stop to put fuel in the car.', 'Pare para colocar combustível no carro.', '⛽', 'gas station fuel pump fueling car real photo'),
      w('Engine', 'Motor', 'én-djin', '/ˈen.dʒɪn/', 'Start the car engine.', 'Ligue o motor do carro.', '⚙️', 'car engine under open hood real photo'),
      w('Sign', 'Placa de trânsito', 'sáin', '/saɪn/', 'Read the road sign ahead.', 'Leia a placa de trânsito à frente.', '🛑', 'street traffic road sign real photo'),
      w('Park', 'Estacionar / Parque', 'párk', '/pɑːrk/', 'Where can I park the car?', 'Onde posso estacionar o carro?', '🅿️', 'cars parked in parking lot real photo'),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Transporte',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'Transporte • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Nível 4/4 • 12 veículos e componentes específicos de transporte',
    pedagogicalObjective: 'Conhecer meios de transporte e peças mecânicas menos frequentes.',
    icon: 'car',
    items: [
      w('Scooter', 'Patinete / Scooter', 'scú-ter', '/ˈskuː.tər/', 'He rides an electric scooter.', 'Ele anda de patinete elétrico.', '🛴', 'electric kick scooter on street real photo'),
      w('Tractor', 'Trator', 'trék-tor', '/ˈtræk.tər/', 'The farmer drives a green tractor.', 'O fazendeiro dirige um trator verde.', '🚜', 'farm tractor in field real photo'),
      w('Ferry', 'Balsa', 'fé-ri', '/ˈfer.i/', 'We crossed the bay on a ferry.', 'Atravessamos a baía em uma balsa.', '⛴️', 'passenger ferry boat on water real photo'),
      w('Tram', 'Bonde / VLT', 'trém', '/træm/', 'The electric tram runs on rails.', 'O bonde elétrico anda sobre trilhos.', '🚋', 'city electric tram streetcar real photo'),
      w('Runway', 'Pista de pouso', 'rân-uêi', '/ˈrʌn.weɪ/', 'The plane accelerated on the runway.', 'O avião acelerou na pista de pouso.', '🛫', 'airport runway with airplane taking off real photo'),
      w('Harbor', 'Porto', 'rár-bor', '/ˈhɑːr.bər/', 'Many boats are anchored in the harbor.', 'Muitos barcos estão ancorados no porto.', '⚓', 'harbor port with boats and ships real photo'),
      w('Anchor', 'Âncora', 'én-cor', '/ˈæŋ.kər/', 'The ship dropped its heavy anchor.', 'O navio lançou sua âncora pesada.', '⚓', 'metal ship anchor real photo'),
      w('Pedal', 'Pedal', 'pé-dal', '/ˈped.əl/', 'Push the bicycle pedal with your foot.', 'Empurre o pedal da bicicleta com o pé.', '🚲', 'bicycle foot pedal closeup real photo'),
      w('Brake', 'Freio', 'brêik', '/breɪk/', 'Step on the brake to stop the car.', 'Pise no freio para parar o carro.', '🛑', 'car brake pedal and disc brake real photo'),
      w('Horn', 'Buzina', 'rórn', '/hɔːrn/', 'Do not honk the car horn at night.', 'Não toque a buzina do carro à noite.', '📯', 'hand pressing car horn on steering wheel real photo'),
      w('Bumper', 'Para-choque', 'bâm-per', '/ˈbʌm.pər/', 'The front bumper protects the car.', 'O para-choque dianteiro protege o carro.', '🚗', 'car front bumper closeup real photo'),
      w('Tunnel', 'Túnel', 'tâ-nel', '/ˈtʌn.əl/', 'Turn on the headlights inside the tunnel.', 'Acenda os faróis dentro do túnel.', '🚇', 'road tunnel with lights for cars real photo'),
    ],
  },

  // ==========================================================================
  // TEMA 5: ROUPAS (CLOTHES) — 4 MÓDULOS POR FREQUÊNCIA
  // ==========================================================================
  {
    themeId: 'clothes',
    themeTitle: 'Roupas',
    frequencyLevel: 'Módulo 1 • Essenciais',
    title: 'Roupas • Módulo 1: Palavras Essenciais',
    subtitle: 'Nível 1/4 • As 12 peças de roupa mais básicas do dia a dia',
    pedagogicalObjective: 'Dominar as 12 peças de vestuário mais usadas em qualquer conversa cotidiana.',
    icon: 'shirt',
    items: [
      w('Shirt', 'Camisa', 'xârt', '/ʃɜːrt/', 'He wears a clean white shirt.', 'Ele veste uma camisa branca limpa.', '👔', 'men button shirt garment real photo'),
      w('Pants', 'Calça', 'pénts', '/pænts/', 'These pants are very comfortable.', 'Esta calça é muito confortável.', '👖', 'casual trousers pants full length real photo'),
      w('Shoes', 'Sapatos', 'xúz', '/ʃuːz/', 'Take off your shoes at the door.', 'Tire os sapatos na porta.', '👞', 'pair of leather shoes real photo'),
      w('Dress', 'Vestido', 'drés', '/dres/', 'She bought a beautiful red dress.', 'Ela comprou um lindo vestido vermelho.', '👗', 'red women dress garment real photo'),
      w('Shorts', 'Shorts / Bermuda', 'xórts', '/ʃɔːrts/', 'I wear shorts on hot days.', 'Eu uso bermuda em dias quentes.', '🩳', 'casual summer shorts garment real photo'),
      w('Skirt', 'Saia', 'skârt', '/skɜːrt/', 'Her blue skirt is very pretty.', 'A saia azul dela é muito bonita.', '👗', 'pleated skirt garment real photo'),
      w('Jacket', 'Jaqueta', 'djé-ket', '/ˈdʒæk.ɪt/', 'Put on a jacket before going out.', 'Vista uma jaqueta antes de sair.', '🧥', 'zipper jacket outerwear real photo'),
      w('Socks', 'Meias', 'sóks', '/sɑːks/', 'Put on clean cotton socks.', 'Coloque meias de algodão limpas.', '🧦', 'pair of cotton socks real photo'),
      w('Coat', 'Casaco', 'côut', '/koʊt/', 'You need a warm coat in winter.', 'Você precisa de um casaco quente no inverno.', '🧥', 'warm winter coat outerwear real photo'),
      w('Hat', 'Chapéu', 'rét', '/hæt/', 'Wear a hat to protect from the sun.', 'Use um chapéu para se proteger do sol.', '👒', 'sun hat headwear real photo'),
      w('Jeans', 'Calça jeans', 'djínz', '/dʒiːnz/', 'Blue jeans go well with everything.', 'Calça jeans azul combina com tudo.', '👖', 'blue denim jeans pants real photo'),
      w('Bag', 'Bolsa / Sacola', 'bég', '/bæɡ/', 'She carries her books in a bag.', 'Ela carrega seus livros em uma bolsa.', '👜', 'shoulder bag handbag real photo'),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Roupas',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'Roupas • Módulo 2: Palavras Comuns',
    subtitle: 'Nível 2/4 • 12 calçados, roupas casuais e acessórios muito comuns',
    pedagogicalObjective: 'Reconhecer roupas casuais, calçados e acessórios presentes na rotina diária.',
    icon: 'shirt',
    items: [
      w('T-shirt', 'Camiseta', 'tí-xârt', '/ˈtiː.ʃɜːrt/', 'I wear a cotton T-shirt at home.', 'Eu uso uma camiseta de algodão em casa.', '👕', 'blue cotton t-shirt real photo'),
      w('Sweater', 'Suéter / Blusa de lã', 'sué-ter', '/ˈswet.ər/', 'This wool sweater is very warm.', 'Este suéter de lã é muito quentinho.', '🧶', 'knitted wool sweater pullover real photo'),
      w('Boots', 'Botas', 'búts', '/buːts/', 'Wear boots when it rains.', 'Use botas quando chover.', '🥾', 'pair of brown leather boots real photo'),
      w('Sandals', 'Sandália / Chinelo', 'sén-dals', '/ˈsæn.dəlz/', 'Sandals are great for the beach.', 'Sandálias são ótimas para a praia.', '🩴', 'pair of summer sandals flip flops real photo'),
      w('Sneakers', 'Tênis', 'sní-kers', '/ˈsniː.kərz/', 'Put on your sneakers for the walk.', 'Calce seus tênis para a caminhada.', '👟', 'pair of running sport sneakers real photo'),
      w('Glasses', 'Óculos', 'glé-ses', '/ˈɡlæs.ɪz/', 'I need my glasses to read.', 'Preciso dos meus óculos para ler.', '👓', 'eyeglasses frames closeup real photo'),
      w('Watch', 'Relógio de pulso', 'uótch', '/wɑːtʃ/', 'What time is it on your watch?', 'Que horas são no seu relógio de pulso?', '⌚', 'wristwatch on strap real photo'),
      w('Belt', 'Cinto', 'bélt', '/belt/', 'This brown leather belt fits well.', 'Este cinto de couro marrom serve bem.', 'ベルト', 'brown leather belt with buckle real photo'),
      w('Cap', 'Boné', 'kép', '/kæp/', 'He wears a blue cap outdoors.', 'Ele usa um boné azul ao ar livre.', '🧢', 'baseball cap hat real photo'),
      w('Pajamas', 'Pijama', 'pa-djá-mas', '/pəˈdʒæm.əz/', 'Put on your pajamas before bed.', 'Vista seu pijama antes de dormir.', '🛌', 'comfortable sleep pajamas set real photo'),
      w('Suit', 'Terno', 'sút', '/suːt/', 'He wore a dark suit to the wedding.', 'Ele usou um terno escuro no casamento.', '🤵', 'men formal suit jacket and pants real photo'),
      w('Pocket', 'Bolso', 'pó-ket', '/ˈpɑː.kɪt/', 'My keys are in my pants pocket.', 'Minhas chaves estão no bolso da calça.', '👖', 'jeans pants pocket closeup real photo'),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Roupas',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'Roupas • Módulo 3: Palavras Intermediárias',
    subtitle: 'Nível 3/4 • 12 acessórios pessoais e partes das roupas',
    pedagogicalObjective: 'Aprender acessórios de inverno, joias e partes importantes das roupas (botão, zíper, manga, gola).',
    icon: 'shirt',
    items: [
      w('Uniform', 'Uniforme', 'iú-ni-fórm', '/ˈjuː.nə.fɔːrm/', 'Students wear a school uniform.', 'Os alunos usam uniforme escolar.', '🎽', 'school uniform shirt and tie real photo'),
      w('Tie', 'Gravata', 'tái', '/taɪ/', 'He wears a red tie to work.', 'Ele usa uma gravata vermelha para trabalhar.', '👔', 'silk necktie tie real photo'),
      w('Scarf', 'Cachecol', 'scárf', '/skɑːrf/', 'Wrap a soft scarf around your neck.', 'Enrole um cachecol macio no pescoço.', '🧣', 'knitted winter wool scarf real photo'),
      w('Gloves', 'Luvas', 'glâvz', '/ɡlʌvz/', 'Gloves keep your hands warm.', 'As luvas mantêm suas mãos aquecidas.', '🧤', 'pair of winter hand gloves real photo'),
      w('Ring', 'Anel / Aliança', 'ríng', '/rɪŋ/', 'She wears a gold ring on her finger.', 'Ela usa um anel de ouro no dedo.', '💍', 'gold ring jewelry real photo'),
      w('Necklace', 'Colar', 'nék-les', '/ˈnek.lɪs/', 'That silver necklace is lovely.', 'Aquele colar de prata é lindo.', '📿', 'gold chain necklace with pendant real photo'),
      w('Wallet', 'Carteira', 'uó-let', '/ˈwɑː.lɪt/', 'Keep your money inside the wallet.', 'Guarde seu dinheiro dentro da carteira.', '👛', 'leather bifold pocket wallet real photo'),
      w('Umbrella', 'Guarda-chuva', 'âm-bré-la', '/ʌmˈbrel.ə/', 'Take an umbrella in case it rains.', 'Leve um guarda-chuva caso chova.', '☂️', 'open rain umbrella real photo'),
      w('Button', 'Botão de roupa', 'bâ-ton', '/ˈbʌt.ən/', 'Fasten the top button of your shirt.', 'Abotoe o botão de cima da sua camisa.', '🔘', 'shirt button sewn on fabric closeup real photo'),
      w('Zipper', 'Zíper', 'zí-per', '/ˈzɪp.ər/', 'Close the jacket zipper.', 'Feche o zíper da jaqueta.', '🧥', 'metal zipper on jacket closeup real photo'),
      w('Sleeve', 'Manga da camisa', 'slív', '/sliːv/', 'Roll up your shirt sleeves.', 'Dobre as mangas da sua camisa.', '👕', 'long shirt sleeve cuff closeup real photo'),
      w('Collar', 'Gola / Colarinho', 'có-lar', '/ˈkɑː.lər/', 'Straighten your shirt collar.', 'Arrume a gola da sua camisa.', '👔', 'folded shirt collar closeup real photo'),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Roupas',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'Roupas • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Nível 4/4 • 12 peças específicas, tecidos e detalhes do vestuário',
    pedagogicalObjective: 'Conhecer termos específicos de vestuário como avental, colete, capa de chuva, pantufas, fivela e tecido.',
    icon: 'shirt',
    items: [
      w('Apron', 'Avental', 'êi-pron', '/ˈeɪ.prən/', 'Wear an apron while cooking.', 'Use um avental enquanto cozinha.', '🎽', 'kitchen cooking apron garment real photo'),
      w('Vest', 'Colete', 'vést', '/vest/', 'He wore a warm vest over his shirt.', 'Ele usou um colete quentinho sobre a camisa.', '🦺', 'sleeveless vest waistcoat garment real photo'),
      w('Raincoat', 'Capa de chuva', 'rêin-côut', '/ˈreɪn.koʊt/', 'A yellow raincoat keeps you dry.', 'Uma capa de chuva amarela mantém você seco.', '🧥', 'yellow waterproof raincoat jacket real photo'),
      w('Slippers', 'Pantufas', 'slí-pers', '/ˈslɪp.ərz/', 'Wear soft slippers inside the bedroom.', 'Use pantufas macias dentro do quarto.', '🥿', 'pair of cozy house slippers real photo'),
      w('Bracelet', 'Pulseira', 'brêis-let', '/ˈbreɪ.slət/', 'She has a silver bracelet on her wrist.', 'Ela tem uma pulseira de prata no pulso.', '📿', 'wrist bracelet jewelry real photo'),
      w('Earrings', 'Brincos', 'ír-rings', '/ˈɪr.rɪŋz/', 'Those gold earrings shine brightly.', 'Aqueles brincos de ouro brilham muito.', '💎', 'pair of gold earrings jewelry real photo'),
      w('Sunglasses', 'Óculos de sol', 'sân-glé-ses', '/ˈsʌnˌɡlæs.ɪz/', 'Wear sunglasses on sunny days.', 'Use óculos de sol em dias ensolarados.', '🕶️', 'dark sunglasses eyewear real photo'),
      w('Hood', 'Capuz', 'rúd', '/hʊd/', 'Pull up your jacket hood in the wind.', 'Coloque o capuz da blusa no vento.', '🧥', 'hoodie sweatshirt hood closeup real photo'),
      w('Heel', 'Salto do sapato', 'ríl', '/hiːl/', 'She wore shoes with a high heel.', 'Ela usou sapatos de salto alto.', '👠', 'red high heel shoe real photo'),
      w('Buckle', 'Fivela', 'bâ-kol', '/ˈbʌk.əl/', 'Fasten the metal belt buckle.', 'Feche a fivela de metal do cinto.', 'ベルト', 'metal belt buckle closeup real photo'),
      w('Fabric', 'Tecido / Pano', 'fé-brik', '/ˈfæb.rɪk/', 'Cotton is a soft and breathable fabric.', 'O algodão é um tecido macio e fresco.', '🧵', 'folded cotton fabric cloth texture real photo'),
      w('Hanger', 'Cabide', 'rén-guer', '/ˈhæŋ.ər/', 'Put the dress on a wooden hanger.', 'Coloque o vestido em um cabide de madeira.', '🧥', 'wooden clothes hanger in closet real photo'),
    ],
  },
];

// Deterministic seeded shuffle helper using upper bits
function deterministicShuffle(array, seed) {
  const arr = [...array];
  let s = (seed * 2654435761) >>> 0;
  for (let i = arr.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = (s >>> 16) % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

// Build the 4 requested exercise types for each 12-word module:
// 1. Associar palavra e imagem (image-choice) — 12 exercises (one for each word)
// 2. Ouvir e escolher (listening) — 3 exercises
// 3. Múltipla escolha (multiple-choice) — 3 exercises
// 4. Completar a frase (fill-blank) — 3 exercises
function buildModuleExercises(mod, phaseNumber) {
  const items = mod.items; // 12 items
  const n = items.length;
  const phaseId = `w0-p${phaseNumber}`;
  const exercises = [];
  const slotPattern = [1, 3, 2, 0, 2, 1, 3, 0, 3, 2, 0, 1];

  // 1. Associar Palavra e Imagem (12 exercises, one for each word in the module)
  for (let idx = 0; idx < n; idx++) {
    const target = items[idx];
    const pool = items.filter((it) => it.word !== target.word);
    const distractors = deterministicShuffle(pool, phaseNumber * 101 + idx * 37).slice(0, 3);
    const targetSlot = slotPattern[(idx + phaseNumber) % slotPattern.length] % 4;
    const optionsList = [...distractors];
    optionsList.splice(targetSlot, 0, target);

    const visualOptions = optionsList.map((opt) => ({
      text: opt.word,
      emoji: opt.emoji,
      label: `${opt.word} ("${opt.simplePronunciation}")`,
      translationPt: opt.pt,
    }));

    exercises.push({
      id: `${phaseId}-img-${idx + 1}`,
      type: 'image-choice',
      prompt: `🖼️ Associe a palavra e o som à imagem correta:`,
      audioPhrase: target.word,
      visualEmoji: target.emoji,
      visualOptions,
      options: visualOptions.map((v) => v.text),
      correctAnswer: target.word,
      explanation: `${target.word} ("${target.simplePronunciation}") = ${target.pt}. Exemplo: "${target.exampleEn}" (${target.examplePt})`,
      phoneticHint: `"${target.simplePronunciation}" ${target.phonetic}`,
      skillCategory: 'vocabulary',
    });
  }

  // 2. Ouvir e Escolher (listening) — 3 exercises
  for (let k = 0; k < 3; k++) {
    const target = items[(k * 4 + 1) % n];
    const pool = items.filter((it) => it.word !== target.word);
    const distractors = deterministicShuffle(pool, phaseNumber * 211 + k * 41).slice(0, 3);
    const targetSlot = slotPattern[(k + phaseNumber + 2) % slotPattern.length] % 4;
    const optLabels = distractors.map((d) => `${d.word} — ${d.pt}`);
    const correctLabel = `${target.word} — ${target.pt}`;
    optLabels.splice(targetSlot, 0, correctLabel);

    exercises.push({
      id: `${phaseId}-list-${k + 1}`,
      type: 'listening',
      prompt: `🎧 Ouvir e escolher: escute o áudio e toque na palavra correspondente:`,
      audioPhrase: target.word,
      contextSentencePt: `Pronúncia simplificada: "${target.simplePronunciation}"`,
      options: optLabels,
      correctAnswer: correctLabel,
      explanation: `Você ouviu "${target.word}" ("${target.simplePronunciation}") = ${target.pt}. Frase: "${target.exampleEn}" (${target.examplePt})`,
      phoneticHint: `"${target.simplePronunciation}" ${target.phonetic}`,
      skillCategory: 'listening',
    });
  }

  // 3. Múltipla Escolha (multiple-choice) — 3 exercises
  for (let k = 0; k < 3; k++) {
    const target = items[(k * 4 + 2) % n];
    const pool = items.filter((it) => it.word !== target.word);
    const distractors = deterministicShuffle(pool, phaseNumber * 307 + k * 53).slice(0, 3);
    const targetSlot = slotPattern[(k + phaseNumber + 5) % slotPattern.length] % 4;
    const optPts = distractors.map((d) => d.pt);
    optPts.splice(targetSlot, 0, target.pt);

    exercises.push({
      id: `${phaseId}-mc-${k + 1}`,
      type: 'multiple-choice',
      visualEmoji: target.emoji,
      prompt: `✅ Múltipla escolha: qual é a tradução de "${target.word}" (pronúncia: "${target.simplePronunciation}")?`,
      audioPhrase: target.word,
      contextSentence: target.exampleEn,
      contextSentencePt: target.examplePt,
      options: optPts,
      correctAnswer: target.pt,
      explanation: `"${target.word}" ("${target.simplePronunciation}") significa "${target.pt}".`,
      phoneticHint: `"${target.simplePronunciation}" ${target.phonetic}`,
      skillCategory: 'vocabulary',
    });
  }

  // 4. Completar a Frase (fill-blank) — 3 exercises
  for (let k = 0; k < 3; k++) {
    const target = items[(k * 4 + 3) % n];
    const pool = items.filter((it) => it.word !== target.word);
    const distractors = deterministicShuffle(pool, phaseNumber * 409 + k * 67).slice(0, 3);
    const targetSlot = slotPattern[(k + phaseNumber + 8) % slotPattern.length] % 4;
    const optWords = distractors.map((d) => d.word);
    optWords.splice(targetSlot, 0, target.word);

    // Replace the target word (or plural form) in exampleEn with ______
    const escaped = target.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}(s|es)?\\b`, 'i');
    const blankSentence = regex.test(target.exampleEn)
      ? target.exampleEn.replace(regex, '______')
      : `${target.exampleEn} (______)`;

    exercises.push({
      id: `${phaseId}-fill-${k + 1}`,
      type: 'fill-blank',
      visualEmoji: target.emoji,
      prompt: `✍️ Complete a frase em inglês ("${target.examplePt}"):`,
      contextSentence: blankSentence,
      contextSentencePt: `Tradução: "${target.examplePt}"`,
      audioPhrase: target.exampleEn,
      options: optWords,
      correctAnswer: target.word,
      explanation: `Frase completa: "${target.exampleEn}" (${target.examplePt}) — ${target.word} ("${target.simplePronunciation}") = ${target.pt}.`,
      phoneticHint: `"${target.simplePronunciation}" ${target.phonetic}`,
      skillCategory: 'reading',
    });
  }

  return exercises;
}

const PRONOUN_MODULES = [
  {
    themeId: 'pronouns',
    themeTitle: 'Pronomes',
    frequencyLevel: 'Módulo 1 • Pessoais & Tratamento',
    title: 'Pronomes • Módulo 1: Pessoais & Tratamento',
    subtitle: 'Nível 1/4 • I, You, He, She, It, We, They + Mr., Mrs., Miss, Sir',
    pedagogicalObjective: 'Dominar os Pronomes Pessoais e de Tratamento com explicação para 5 anos, voz humana da professora e pares associativos.',
    icon: 'star',
    teacherAudioPt: '/audio/teacher/pronoun_1.wav',
    conceptHeader: 'Quando aponto para mim mesmo, digo "I" (Eu). Quando aponto para você, digo "You" (Você). Para um menino, "He" (Ele); para uma menina, "She" (Ela); e para um objeto ou animal, "It"!',
    items: [
      w('I', 'Eu (falando de mim)', 'ái', '/aɪ/', 'I am at home.', 'Eu estou em casa.', '🙋', 'person pointing to self happy portrait real photo'),
      w('You', 'Você / Vocês', 'iú', '/juː/', 'You are my friend.', 'Você é meu amigo.', '👉', 'two friends talking smiling real photo'),
      w('He', 'Ele (menino / homem)', 'rí', '/hiː/', 'He is in the kitchen.', 'Ele está na cozinha.', '👦', 'smiling boy portrait real photo'),
      w('She', 'Ela (menina / mulher)', 'xí', '/ʃiː/', 'She is a good teacher.', 'Ela é uma boa professora.', '👧', 'smiling woman teacher portrait real photo'),
      w('It', 'Ele / Ela (coisa ou animal)', 'ít', '/ɪt/', 'It is a wooden door.', 'É uma porta de madeira.', '🐶', 'cute dog sitting real photo'),
      w('We', 'Nós (eu e você juntos)', 'uí', '/wiː/', 'We live in this house.', 'Nós moramos nesta casa.', '👨‍👩‍👧', 'happy family together real photo'),
      w('They', 'Eles / Elas', 'dêi', '/ðeɪ/', 'They are at school.', 'Eles estão na escola.', '👥', 'group of friends walking real photo'),
      w('Mr.', 'Senhor (antes do nome)', 'mís-ter', '/ˈmɪs.tər/', 'Good morning, Mr. Silva.', 'Bom dia, Senhor Silva.', '👨', 'polite gentleman in suit portrait real photo'),
      w('Mrs.', 'Senhora (mulher casada)', 'mí-siz', '/ˈmɪs.ɪz/', 'Hello, Mrs. Costa.', 'Olá, Senhora Costa.', '👩', 'polite woman smiling portrait real photo'),
      w('Miss', 'Senhorita / Professora', 'mís', '/mɪs/', 'Thank you, Miss Ana.', 'Obrigado, Senhorita Ana.', '👩‍🏫', 'young female teacher in classroom real photo'),
      w('Sir', 'Senhor (tratamento direto)', 'sâr', '/sɜːr/', 'Yes, Sir!', 'Sim, Senhor!', '🎩', 'man greeting politely handshake real photo'),
      w("Ma'am", 'Senhora (tratamento direto)', 'mém', '/mæm/', 'Excuse me, Ma\'am.', 'Com licença, Senhora.', '🌸', 'kind lady smiling portrait real photo'),
    ],
  },
  {
    themeId: 'pronouns',
    themeTitle: 'Pronomes',
    frequencyLevel: 'Módulo 2 • Possessivos & Demonstrativos',
    title: 'Pronomes • Módulo 2: Possessivos & Demonstrativos',
    subtitle: 'Nível 2/4 • My, Your, His, Her, Our, Their + This, That, These, Those',
    pedagogicalObjective: 'Indicar posse (Meu, Seu, Dele, Dela, Nosso) e distância (Este pertinho vs. Aquele lá longe).',
    icon: 'star',
    teacherAudioPt: '/audio/teacher/pronoun_3.wav',
    conceptHeader: 'Mostram de quem é cada coisinha (My = Meu, Your = Seu, His = Dele, Her = Dela, Our = Nosso) e se está pertinho da mão (This / These) ou lá longe (That / Those)!',
    items: [
      w('My', 'Meu / Minha', 'mái', '/maɪ/', 'This is my house.', 'Esta é a minha casa.', '💖', 'person holding house key closeup real photo'),
      w('Your', 'Seu / Sua', 'iór', '/jʊr/', 'Here is your book.', 'Aqui está o seu livro.', '🎁', 'hand giving a gift box real photo'),
      w('His', 'Dele', 'ríz', '/hɪz/', 'That is his car.', 'Aquele é o carro dele.', '👦', 'man standing next to red car real photo'),
      w('Her', 'Dela', 'râr', '/hɜːr/', 'This is her dress.', 'Este é o vestido dela.', '👧', 'woman holding red dress real photo'),
      w('Our', 'Nosso / Nossa', 'áu-er', '/aʊər/', 'Welcome to our kitchen.', 'Bem-vindo à nossa cozinha.', '🏡', 'family in home kitchen real photo'),
      w('Their', 'Deles / Delas', 'dér', '/ðer/', 'That is their dog.', 'Aquele é o cachorro deles.', '👨‍👩‍👧‍👦', 'children playing with dog in yard real photo'),
      w('Mine', 'O meu / A minha (no final)', 'máin', '/maɪn/', 'This cup is mine.', 'Esta xícara é minha.', '☕', 'hand holding porcelain coffee cup real photo'),
      w('Yours', 'O seu / A sua (no final)', 'iórz', '/jʊrz/', 'The key is yours.', 'A chave é sua.', '🔑', 'metal key on wooden table real photo'),
      w('This', 'Este / Esta / Isto (1 perto)', 'dís', '/ðɪs/', 'This apple is sweet.', 'Esta maçã aqui está doce.', '🍎', 'hand holding red apple closeup real photo'),
      w('That', 'Aquele / Aquela / Aquilo (1 longe)', 'dét', '/ðæt/', 'Look at that tree.', 'Olhe para aquela árvore lá longe.', '🌳', 'green tree in park distance real photo'),
      w('These', 'Estes / Estas (vários perto)', 'díz', '/ðiːz/', 'These shoes are new.', 'Estes sapatos aqui são novos.', '👟', 'pair of new sneakers closeup real photo'),
      w('Those', 'Aqueles / Aquelas (vários longe)', 'dôuz', '/ðoʊz/', 'Those birds are flying.', 'Aqueles pássaros lá longe estão voando.', '🐦', 'birds flying in blue sky real photo'),
    ],
  },
  {
    themeId: 'pronouns',
    themeTitle: 'Pronomes',
    frequencyLevel: 'Módulo 3 • Reflexivos & Interrogativos',
    title: 'Pronomes • Módulo 3: Reflexivos & Interrogativos',
    subtitle: 'Nível 3/4 • Myself, Yourself, Himself, Herself + Who, What, Where, When, Why, How',
    pedagogicalObjective: 'Usar pronomes reflexivos (como em um espelho) e fazer perguntas com Who, What, Where, When, Why, Whose e How.',
    icon: 'star',
    teacherAudioPt: '/audio/teacher/pronoun_5.wav',
    conceptHeader: 'Reflexivos funcionam como um espelho (Myself = Eu mesmo, Yourself = Você mesmo). E os Interrogativos são as palavrinhas de fazer perguntas: Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?)!',
    items: [
      w('Myself', 'Eu mesmo(a)', 'mai-sélf', '/maɪˈself/', 'I see myself in the mirror.', 'Eu me vejo no espelho.', '🪞', 'person looking in bathroom mirror real photo'),
      w('Yourself', 'Você mesmo(a)', 'iór-sélf', '/jʊrˈself/', 'Take care of yourself.', 'Cuide de você mesmo.', '🫵', 'smiling person thumbs up portrait real photo'),
      w('Himself', 'Ele mesmo', 'rim-sélf', '/hɪmˈself/', 'He made breakfast himself.', 'Ele mesmo preparou o café da manhã.', '👦', 'man cooking breakfast in kitchen real photo'),
      w('Herself', 'Ela mesma', 'râr-sélf', '/hɜːrˈself/', 'She painted the wall herself.', 'Ela mesma pintou a parede.', '👧', 'woman painting wall with roller real photo'),
      w('Ourselves', 'Nós mesmos(as)', 'aur-sélvz', '/ɑːrˈselvz/', 'We cooked dinner ourselves.', 'Nós mesmos fizemos o jantar.', '👨‍👩‍👧', 'family cooking dinner together real photo'),
      w('Who', 'Quem? (para pessoas)', 'rú', '/huː/', 'Who is at the door?', 'Quem está na porta?', '🕵️', 'visitor knocking on house door real photo'),
      w('What', 'O quê? / Qual?', 'uót', '/wɑːt/', 'What is your name?', 'Qual é o seu nome?', '❓', 'question mark sign closeup real photo'),
      w('Where', 'Onde? (para lugares)', 'uér', '/wer/', 'Where is my key?', 'Onde está a minha chave?', '📍', 'map pin location icon on map real photo'),
      w('When', 'Quando? (tempo / hora)', 'uén', '/wen/', 'When is the train leaving?', 'Quando o trem vai partir?', '⏰', 'round alarm clock on table real photo'),
      w('Why', 'Por quê? (motivo)', 'uái', '/waɪ/', 'Why are you smiling?', 'Por que você está sorrindo?', '🤔', 'curious child thinking portrait real photo'),
      w('Whose', 'De quem? (dono)', 'rúz', '/huːz/', 'Whose bag is this?', 'De quem é esta bolsa?', '👜', 'leather handbag on chair real photo'),
      w('How', 'Como? (modo / estado)', 'ráu', '/haʊ/', 'How are you today?', 'Como vai você hoje?', '🤝', 'two people shaking hands smiling real photo'),
    ],
  },
  {
    themeId: 'pronouns',
    themeTitle: 'Pronomes',
    frequencyLevel: 'Módulo 4 • Indefinidos & Relativos',
    title: 'Pronomes • Módulo 4: Indefinidos & Relativos',
    subtitle: 'Nível 4/4 • Someone, Something, Everyone, Nothing + Who, Which, That, Where',
    pedagogicalObjective: 'Completar todas as famílias de pronomes com Indefinidos (Alguém, Algo, Todo mundo, Nada) e Relativos (as pontezinhas da frase).',
    icon: 'star',
    teacherAudioPt: '/audio/teacher/pronoun_7.wav',
    conceptHeader: 'Indefinidos falam de alguém ou algo sem dizer o nome (Someone = Alguém, Something = Algo, Everyone = Todo mundo, Nothing = Nada). Relativos são pontezinhas que ligam a frase (Who = pessoa, Which = coisa, That = tudo)!',
    items: [
      w('Someone', 'Alguém (uma pessoa)', 'sâm-uân', '/ˈsʌm.wʌn/', 'Someone is at the gate.', 'Alguém está no portão.', '🔔', 'person ringing doorbell at gate real photo'),
      w('Something', 'Algo / Alguma coisa', 'sâm-thing', '/ˈsʌm.θɪŋ/', 'There is something in the box.', 'Há alguma coisa dentro da caixa.', '🎁', 'cardboard gift box on table real photo'),
      w('Everyone', 'Todo mundo / Todos', 'é-vri-uân', '/ˈev.ri.wʌn/', 'Everyone is in the living room.', 'Todo mundo está na sala de estar.', '👨‍👩‍👧‍👦', 'family sitting on living room sofa real photo'),
      w('Everything', 'Tudo / Todas as coisas', 'é-vri-thing', '/ˈev.ri.θɪŋ/', 'Everything is clean now.', 'Tudo está limpo agora.', '🌟', 'clean bright kitchen interior real photo'),
      w('Nobody', 'Ninguém (nenhuma pessoa)', 'nôu-bó-di', '/ˈnoʊ.bɑː.di/', 'Nobody is in the room.', 'Ninguém está na sala.', '🚫', 'empty room with chair real photo'),
      w('Nothing', 'Nada (nenhuma coisa)', 'nâ-thing', '/ˈnʌθ.ɪŋ/', 'There is nothing on the plate.', 'Não há nada no prato.', '🍽️', 'empty white dinner plate real photo'),
      w('Anyone', 'Alguém (em perguntas) / Qualquer um', 'é-ni-uân', '/ˈen.i.wʌn/', 'Is anyone at home?', 'Tem alguém em casa?', '🏠', 'open house front door real photo'),
      w('Anything', 'Alguma coisa (perguntas) / Qualquer coisa', 'é-ni-thing', '/ˈen.i.θɪŋ/', 'Do you want anything to drink?', 'Você quer alguma coisa para beber?', '🥤', 'glass of juice on table real photo'),
      w('Who (que)', 'Que / Quem (ponte p/ pessoas)', 'rú', '/huː/', 'The doctor who helped me is kind.', 'O médico que me ajudou é gentil.', '👨‍⚕️', 'friendly doctor with stethoscope real photo'),
      w('Which (que)', 'Que / O qual (ponte p/ coisas)', 'uítch', '/wɪtʃ/', 'The key which opens the door.', 'A chave que abre a porta.', '🔑', 'key in door lock closeup real photo'),
      w('That (que)', 'Que (ponte curinga p/ tudo)', 'dét', '/ðæt/', 'The bread that I bought is warm.', 'O pão que eu comprei está quentinho.', '🍞', 'fresh warm bread loaf real photo'),
      w('Where (onde)', 'Onde (ponte p/ lugares)', 'uér', '/wer/', 'The house where I live.', 'A casa onde eu moro.', '🏡', 'cozy house with garden real photo'),
    ],
  },
];

const ALL_MODULES = [...THEMATIC_MODULES, ...PRONOUN_MODULES];

const phases = ALL_MODULES.map((mod, idx) => {
  const phaseNumber = idx + 1;
  const phaseId = `w0-p${phaseNumber}`;
  const baseExercises = buildModuleExercises(mod, phaseNumber);

  // If this is a Pronoun Module, add the Teacher Explanation Header & Associative Pair-Matching exercises!
  if (mod.themeId === 'pronouns') {
    const pairExercises = [];
    for (let b = 0; b < 3; b++) {
      const slice = mod.items.slice(b * 4, b * 4 + 4);
      pairExercises.push({
        id: `${phaseId}-pair-${b + 1}`,
        type: 'pair-match',
        conceptTitle: `${mod.title} • Bloco ${b + 1} de 3`,
        conceptHeader: mod.conceptHeader,
        teacherAudioPt: mod.teacherAudioPt,
        prompt: '🤝 Exercício Associativo: selecione o par correto de cada pronome:',
        pairs: slice.map((it, pIdx) => ({
          id: `${phaseId}-b${b + 1}-p${pIdx + 1}`,
          en: it.word,
          emoji: it.emoji,
          phonetic: `"${it.simplePronunciation}" ${it.phonetic}`,
          pt: it.pt,
          tipPt: `${it.word} ("${it.simplePronunciation}") = ${it.pt}. Exemplo: "${it.exampleEn}" (${it.examplePt})`,
        })),
        correctAnswer: 'ALL_PAIRS_MATCHED',
        explanation: mod.conceptHeader,
        skillCategory: 'grammar',
      });
    }
    return {
      id: phaseId,
      worldId: 0,
      phaseNumber,
      themeId: mod.themeId,
      themeTitle: mod.themeTitle,
      frequencyLevel: mod.frequencyLevel,
      vocabItems: mod.items.map((it) => ({
        word: it.word,
        pt: it.pt,
        simplePronunciation: it.simplePronunciation,
        phonetic: it.phonetic,
        exampleEn: it.exampleEn,
        examplePt: it.examplePt,
        emoji: it.emoji,
      })),
      title: mod.title,
      subtitle: mod.subtitle,
      pedagogicalObjective: mod.pedagogicalObjective,
      type: 'chest',
      icon: mod.icon,
      cefrLevel: 'A1',
      theorySummary: [
        mod.conceptHeader,
        'Ouça a voz humana e meiga da professora e pratique conectando os pares e completando os 4 tipos de exercícios!'
      ],
      xpReward: 70,
      gemsReward: 30,
      exercises: [...pairExercises, ...baseExercises.slice(12)],
    };
  }

  return {
    id: phaseId,
    worldId: 0,
    phaseNumber,
    themeId: mod.themeId,
    themeTitle: mod.themeTitle,
    frequencyLevel: mod.frequencyLevel,
    vocabItems: mod.items.map((it) => ({
      word: it.word,
      pt: it.pt,
      simplePronunciation: it.simplePronunciation,
      phonetic: it.phonetic,
      exampleEn: it.exampleEn,
      examplePt: it.examplePt,
      emoji: it.emoji,
    })),
    title: mod.title,
    subtitle: mod.subtitle,
    pedagogicalObjective: mod.pedagogicalObjective,
    type: (idx + 1) % 4 === 0 ? 'boss' : 'lesson',
    icon: mod.icon,
    cefrLevel: 'A1',
    theorySummary: [
      `${mod.themeTitle} — ${mod.frequencyLevel}: estude primeiro os 12 Flashcards com imagem, pronúncia simplificada e frase de exemplo.`,
      'Em seguida, pratique com os 4 tipos de exercício: Associar Palavra e Imagem, Ouvir e Escolher, Múltipla Escolha e Completar a Frase!'
    ],
    xpReward: 50,
    gemsReward: 20,
    exercises: baseExercises,
  };
});

// Build high-resolution 600x600 card-filling photo URLs for all words so every image fills 100% of the card
const mergedImagesMap = { ...existingImagesMap };
for (const mod of ALL_MODULES) {
  for (const item of mod.items) {
    const q = encodeURIComponent(item.studioQuery);
    mergedImagesMap[item.word] = `https://tse1.mm.bing.net/th?q=${q}&w=600&h=600&c=7&rs=1&p=0`;
  }
}

const fileContent = `import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

const imagesFileContent = `// Auto-generated card-filling 600x600 photographs for all vocabulary items\nexport const REAL_VOCAB_IMAGES: Record<string, string> = ${JSON.stringify(mergedImagesMap, null, 2)};\n`;

fs.writeFileSync('src/data/world0Phases.ts', fileContent, 'utf-8');
fs.writeFileSync('src/data/realVocabImages.ts', imagesFileContent, 'utf-8');

console.log('Successfully generated 5 Themes x 4 Modules by Frequency (20 modules, 240 words, 420 exercises)!');
