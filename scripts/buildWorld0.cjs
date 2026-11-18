const fs = require('fs');

// Preserve existing verified REAL_VOCAB_IMAGES from v1.18.0
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

// Helper for each generic vocabulary word (8 words per module, between 6 and 10 words):
// 1. Palavra em inglês (word - generic term)
// 2. Tradução em português (pt)
// 3. Pronúncia simplificada (simplePronunciation, ex: "dór") + IPA (phonetic)
// 4. Frase curta de exemplo em inglês com tradução (exampleEn, examplePt)
// 5. Imagem ilustrativa real (query) + ícone (emoji)
function w(word, pt, simplePronunciation, phonetic, exampleEn, examplePt, emoji, query, forceOverrideImage = false) {
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
    studioQuery: query || `single ${word} isolated on white background real photo`,
    forceOverrideImage,
  };
}

// ============================================================================
// 6 TEMAS COMPLETOS (CASA, COMIDA, CORPO HUMANO, TRANSPORTE, ROUPAS E TRABALHO)
// Cada tema é dividido em 4 MÓDULOS separados por nível de frequência de uso:
//   - Módulo 1: palavras essenciais e mais comuns
//   - Módulo 2: palavras comuns
//   - Módulo 3: palavras intermediárias
//   - Módulo 4: palavras menos comuns ou específicas
// Cada módulo possui 8 palavras genéricas (entre 6 e 10 palavras, para não sobrecarregar o aluno)
// ============================================================================

const THEMATIC_MODULES = [
  // ==========================================================================
  // TEMA 1: A CASA (HOME) — 4 MÓDULOS POR FREQUÊNCIA (8 PALAVRAS CADA)
  // ==========================================================================
  {
    themeId: 'home',
    themeTitle: 'Tema 1: A Casa',
    frequencyLevel: 'Módulo 1 • Essenciais e Mais Comuns',
    title: 'A Casa • Módulo 1: Palavras Essenciais',
    subtitle: 'Tema: A Casa (1/4) • 8 palavras essenciais e mais comuns do dia a dia',
    pedagogicalObjective: 'Aprender as 8 palavras mais essenciais sobre a casa: Door, Window, Room, Floor, Kitchen, Bedroom, Table e Chair.',
    icon: 'house',
    theory: [
      'Tema: A Casa — Módulo 1 (Palavras essenciais e mais comuns): aprenda primeiro os termos mais frequentes do cotidiano residencial.',
      'Palavras deste módulo (8): Door ("dór" = Porta), Window ("uín-dou" = Janela), Room ("rúm" = Quarto/Cômodo), Floor ("flór" = Chão), Kitchen ("kít-chen" = Cozinha), Bedroom ("béd-rum" = Quarto de dormir), Table ("têi-bol" = Mesa) e Chair ("tchér" = Cadeira).'
    ],
    items: [
      w('Door', 'Porta', 'dór', '/dɔːr/', 'Please close the door.', 'Por favor, feche a porta.', '🚪', 'wooden front entrance door of a house real photo'),
      w('Window', 'Janela', 'uín-dou', '/ˈwɪn.doʊ/', 'Open the window, please.', 'Abra a janela, por favor.', '🪟', 'house glass window with curtains real photo'),
      w('Room', 'Quarto / Cômodo', 'rúm', '/ruːm/', 'This room is very bright.', 'Este cômodo é muito iluminado.', '🏠', 'cozy bright house room interior real photo', true),
      w('Floor', 'Chão / Piso', 'flór', '/flɔːr/', 'The floor is clean.', 'O chão está limpo.', '🟫', 'ceramic tile floor in house room real photo', true),
      w('Kitchen', 'Cozinha', 'kít-chen', '/ˈkɪtʃ.ən/', 'We cook in the kitchen.', 'Nós cozinhamos na cozinha.', '🍳', 'modern home kitchen interior real photo', true),
      w('Bedroom', 'Quarto de dormir', 'béd-rum', '/ˈbed.ruːm/', 'I sleep in my bedroom.', 'Eu durmo no meu quarto.', '🛏️', 'cozy bedroom interior with bed real photo', true),
      w('Table', 'Mesa', 'têi-bol', '/ˈteɪ.bəl/', 'The food is on the table.', 'A comida está na mesa.', '🪑', 'wooden kitchen dining table with chairs real photo'),
      w('Chair', 'Cadeira', 'tchér', '/tʃer/', 'Sit on this chair.', 'Sente-se nesta cadeira.', '🪑', 'single wooden dining chair furniture on white background'),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'Tema 1: A Casa',
    frequencyLevel: 'Módulo 2 • Palavras Comuns',
    title: 'A Casa • Módulo 2: Palavras Comuns',
    subtitle: 'Tema: A Casa (2/4) • 8 palavras comuns da estrutura e móveis',
    pedagogicalObjective: 'Dominar 8 palavras comuns da casa: Roof, Wall, Bathroom, Living room, Bed, Sofa, Fridge e Stove.',
    icon: 'house',
    theory: [
      'Tema: A Casa — Módulo 2 (Palavras comuns): amplie sua base com os cômodos e itens domésticos comuns.',
      'Palavras deste módulo (8): Roof ("rúf" = Telhado), Wall ("uól" = Parede), Bathroom ("béth-rum" = Banheiro), Living room ("lí-ving rúm" = Sala de estar), Bed ("béd" = Cama), Sofa ("sôu-fa" = Sofá), Fridge ("frídj" = Geladeira) e Stove ("stôuv" = Fogão).'
    ],
    items: [
      w('Roof', 'Telhado', 'rúf', '/ruːf/', 'The roof protects the house.', 'O telhado protege a casa.', '🏠', 'house roof with ceramic tiles on top of house exterior real photo'),
      w('Wall', 'Parede', 'uól', '/wɔːl/', 'The wall is painted white.', 'A parede está pintada de branco.', '🧱', 'interior house room wall painted real photo', true),
      w('Bathroom', 'Banheiro', 'béth-rum', '/ˈbæθ.ruːm/', 'Wash your hands in the bathroom.', 'Lave as mãos no banheiro.', '🚿', 'clean modern home bathroom interior real photo', true),
      w('Living room', 'Sala de estar', 'lí-ving rúm', '/ˈlɪv.ɪŋ ruːm/', 'We relax in the living room.', 'Nós descansamos na sala de estar.', '🛋️', 'cozy living room interior with sofa real photo', true),
      w('Bed', 'Cama', 'béd', '/bed/', 'My bed is very comfortable.', 'Minha cama é muito confortável.', '🛏️', 'comfortable bedroom bed with mattress and pillows on white background'),
      w('Sofa', 'Sofá', 'sôu-fa', '/ˈsoʊ.fə/', 'Sit on the living room sofa.', 'Sente-se no sofá da sala.', '🛋️', 'comfortable living room sofa couch on white background'),
      w('Fridge', 'Geladeira', 'frídj', '/frɪdʒ/', 'The milk is in the fridge.', 'O leite está na geladeira.', '🧊', 'modern stainless steel refrigerator fridge appliance on white background'),
      w('Stove', 'Fogão', 'stôuv', '/stoʊv/', 'She cooks dinner on the stove.', 'Ela faz o jantar no fogão.', '🔥', 'kitchen gas stove oven appliance on white background'),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'Tema 1: A Casa',
    frequencyLevel: 'Módulo 3 • Palavras Intermediárias',
    title: 'A Casa • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema: A Casa (3/4) • 8 palavras intermediárias da residência',
    pedagogicalObjective: 'Expandir o vocabulário residencial com 8 palavras intermediárias: Ceiling, Stairs, Garage, Balcony, Curtain, Rug, Pillow e Shelf.',
    icon: 'house',
    theory: [
      'Tema: A Casa — Módulo 3 (Palavras intermediárias): partes e objetos complementares da residência.',
      'Palavras deste módulo (8): Ceiling ("sí-ling" = Teto), Stairs ("stérz" = Escada), Garage ("ga-rádj" = Garagem), Balcony ("bél-co-ni" = Varanda), Curtain ("câr-ten" = Cortina), Rug ("râg" = Tapete), Pillow ("pí-lou" = Travesseiro) e Shelf ("xélf" = Prateleira).'
    ],
    items: [
      w('Ceiling', 'Teto', 'sí-ling', '/ˈsiː.lɪŋ/', 'The light is on the ceiling.', 'A luminária fica no teto.', '🏠', 'room ceiling overhead view with ceiling light real photo'),
      w('Stairs', 'Escada', 'stérz', '/sterz/', 'Walk up the stairs carefully.', 'Suba a escada com cuidado.', '🪜', 'house front porch entrance steps stairs real photo'),
      w('Garage', 'Garagem', 'ga-rádj', '/ɡəˈrɑːʒ/', 'The car is in the garage.', 'O carro está na garagem.', '🚗', 'residential house garage with car inside real photo', true),
      w('Balcony', 'Varanda / Sacada', 'bél-co-ni', '/ˈbæl.kə.ni/', 'The apartment has a balcony.', 'O apartamento tem uma varanda.', '🌤️', 'house apartment balcony with railing and chair real photo', true),
      w('Curtain', 'Cortina', 'câr-ten', '/ˈkɜːr.tən/', 'Close the window curtain.', 'Feche a cortina da janela.', '🪟', 'fabric window curtains hanging on rod real photo'),
      w('Rug', 'Tapete', 'râg', '/rʌɡ/', 'There is a soft rug on the floor.', 'Há um tapete macio no chão.', '🟥', 'living room floor rug carpet under coffee table real photo'),
      w('Pillow', 'Travesseiro', 'pí-lou', '/ˈpɪl.oʊ/', 'This pillow is very soft.', 'Este travesseiro é muito macio.', '⬜', 'soft white bed sleeping pillow on white background'),
      w('Shelf', 'Prateleira', 'xélf', '/ʃelf/', 'Put the book on the shelf.', 'Coloque o livro na prateleira.', '📚', 'wooden wall bookshelf with books real photo', true),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'Tema 1: A Casa',
    frequencyLevel: 'Módulo 4 • Menos Comuns ou Específicas',
    title: 'A Casa • Módulo 4: Menos Comuns',
    subtitle: 'Tema: A Casa (4/4) • 8 palavras menos comuns ou específicas da casa',
    pedagogicalObjective: 'Conhecer 8 termos mais específicos da casa: Attic, Basement, Chimney, Doorknob, Gutter, Fence, Faucet e Closet.',
    icon: 'house',
    theory: [
      'Tema: A Casa — Módulo 4 (Palavras menos comuns ou específicas): detalhes estruturais e específicos da residência.',
      'Palavras deste módulo (8): Attic ("é-tik" = Sótão), Basement ("bêis-ment" = Porão), Chimney ("tchím-ni" = Chaminé), Doorknob ("dór-nób" = Maçaneta), Gutter ("gâ-ter" = Calha), Fence ("féns" = Cerca), Faucet ("fó-set" = Torneira) e Closet ("cló-zet" = Armário/Closet).'
    ],
    items: [
      w('Attic', 'Sótão', 'é-tik', '/ˈæt.ɪk/', 'Old boxes are in the attic.', 'As caixas antigas estão no sótão.', '🏠', 'house wooden attic room under roof real photo', true),
      w('Basement', 'Porão', 'bêis-ment', '/ˈbeɪs.mənt/', 'The basement is downstairs.', 'O porão fica no andar de baixo.', '🪜', 'house basement room with stairs real photo', true),
      w('Chimney', 'Chaminé', 'tchím-ni', '/ˈtʃɪm.ni/', 'Smoke comes out of the chimney.', 'A fumaça sai pela chaminé.', '🧱', 'brick chimney on house roof exterior real photo', true),
      w('Doorknob', 'Maçaneta', 'dór-nób', '/ˈdɔːr.nɑːb/', 'Turn the doorknob to open it.', 'Gire a maçaneta para abrir.', '🚪', 'metal doorknob handle on wooden door closeup real photo'),
      w('Gutter', 'Calha', 'gâ-ter', '/ˈɡʌt.ər/', 'Rain flows through the gutter.', 'A chuva escorre pela calha.', '🌧️', 'house roof rain gutter with downspout real photo', true),
      w('Fence', 'Cerca', 'féns', '/fens/', 'A fence surrounds the yard.', 'Uma cerca contorna o quintal.', '🏡', 'white wooden picket fence in front of house garden real photo'),
      w('Faucet', 'Torneira', 'fó-set', '/ˈfɔː.sɪt/', 'Turn off the water faucet.', 'Feche a torneira de água.', '🚰', 'chrome kitchen sink faucet tap with running water closeup real photo'),
      w('Closet', 'Armário / Closet', 'cló-zet', '/ˈklɑː.zɪt/', 'Hang your coat in the closet.', 'Pendure seu casaco no armário.', '🚪', 'open bedroom wardrobe closet with clothes on hangers real photo', true),
    ],
  },

  // ==========================================================================
  // TEMA 2: COMIDA (FOOD) — 4 MÓDULOS POR FREQUÊNCIA (8 PALAVRAS CADA)
  // ==========================================================================
  {
    themeId: 'food',
    themeTitle: 'Tema 2: Comida',
    frequencyLevel: 'Módulo 1 • Essenciais e Mais Comuns',
    title: 'Comida • Módulo 1: Palavras Essenciais',
    subtitle: 'Tema: Comida (1/4) • 8 alimentos e bebidas essenciais do dia a dia',
    pedagogicalObjective: 'Dominar os 8 alimentos e bebidas mais essenciais: Water, Bread, Rice, Beans, Meat, Chicken, Egg e Milk.',
    icon: 'apple',
    theory: [
      'Tema: Comida — Módulo 1 (Palavras essenciais e mais comuns): os alimentos mais presentes nas refeições diárias.',
      'Palavras deste módulo (8): Water ("uó-ter" = Água), Bread ("bréd" = Pão), Rice ("ráis" = Arroz), Beans ("bínz" = Feijão), Meat ("mít" = Carne), Chicken ("tchí-ken" = Frango), Egg ("ég" = Ovo) e Milk ("mílk" = Leite).'
    ],
    items: [
      w('Water', 'Água', 'uó-ter', '/ˈwɔː.tər/', 'I drink cold water.', 'Eu bebo água gelada.', '💧', 'clear glass of drinking water on white background', true),
      w('Bread', 'Pão', 'bréd', '/bred/', 'I eat warm bread for breakfast.', 'Eu como pão quentinho no café da manhã.', '🍞', 'fresh loaf of sliced bread on white background'),
      w('Rice', 'Arroz', 'ráis', '/raɪs/', 'We eat white rice every day.', 'Nós comemos arroz branco todos os dias.', '🍚', 'white bowl of cooked white rice on white background'),
      w('Beans', 'Feijão', 'bínz', '/biːnz/', 'Rice and beans taste great.', 'Arroz e feijão são deliciosos.', '🫘', 'bowl of cooked brown beans food on white background'),
      w('Meat', 'Carne', 'mít', '/miːt/', 'He cooked the meat on the grill.', 'Ele assou a carne na grelha.', '🥩', 'cooked beef steak meat on plate on white background', true),
      w('Chicken', 'Frango', 'tchí-ken', '/ˈtʃɪk.ɪn/', 'We had roast chicken for lunch.', 'Comemos frango assado no almoço.', '🍗', 'roasted chicken food on plate on white background'),
      w('Egg', 'Ovo', 'ég', '/eɡ/', 'I like eggs in the morning.', 'Eu gosto de ovos de manhã.', '🥚', 'fresh chicken eggs on white background', true),
      w('Milk', 'Leite', 'mílk', '/mɪlk/', 'Drink a glass of milk.', 'Beba um copo de leite.', '🥛', 'glass and carton of white milk on white background'),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Tema 2: Comida',
    frequencyLevel: 'Módulo 2 • Palavras Comuns',
    title: 'Comida • Módulo 2: Palavras Comuns',
    subtitle: 'Tema: Comida (2/4) • 8 alimentos e bebidas comuns',
    pedagogicalObjective: 'Aprender 8 alimentos muito comuns: Coffee, Juice, Apple, Banana, Cheese, Fish, Soup e Salad.',
    icon: 'apple',
    theory: [
      'Tema: Comida — Módulo 2 (Palavras comuns): bebidas, frutas e pratos frequentes.',
      'Palavras deste módulo (8): Coffee ("có-fi" = Café), Juice ("djús" = Suco), Apple ("é-pol" = Maçã), Banana ("ba-né-na" = Banana), Cheese ("tchíz" = Queijo), Fish ("fíx" = Peixe), Soup ("súp" = Sopa) e Salad ("sé-lad" = Salada).'
    ],
    items: [
      w('Coffee', 'Café', 'có-fi', '/ˈkɔː.fi/', 'She loves hot coffee.', 'Ela adora café quente.', '☕', 'cup of hot black coffee on white background', true),
      w('Juice', 'Suco', 'djús', '/dʒuːs/', 'Fresh orange juice is delicious.', 'Suco de laranja fresco é delicioso.', '🧃', 'glass pitcher of fresh orange juice on white background'),
      w('Apple', 'Maçã', 'é-pol', '/ˈæp.əl/', 'This red apple is sweet.', 'Esta maçã vermelha é doce.', '🍎', 'single fresh red apple fruit with green leaf on white background'),
      w('Banana', 'Banana', 'ba-né-na', '/bəˈnæn.ə/', 'Peel the yellow banana.', 'Descasque a banana amarela.', '🍌', 'ripe yellow bananas fruit on white background'),
      w('Cheese', 'Queijo', 'tchíz', '/tʃiːz/', 'Put cheese on the bread.', 'Coloque queijo no pão.', '🧀', 'wedge of yellow cheese on white background'),
      w('Fish', 'Peixe', 'fíx', '/fɪʃ/', 'Grilled fish is very healthy.', 'Peixe grelhado é muito saudável.', '🐟', 'cooked grilled fish fillet on plate on white background', true),
      w('Soup', 'Sopa', 'súp', '/suːp/', 'Hot soup is great at night.', 'Sopa quente é ótima à noite.', '🍲', 'bowl of hot vegetable soup with spoon on white background', true),
      w('Salad', 'Salada', 'sé-lad', '/ˈsæl.əd/', 'I made a fresh salad.', 'Eu fiz uma salada fresca.', '🥗', 'bowl of fresh green vegetable salad on white background', true),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Tema 2: Comida',
    frequencyLevel: 'Módulo 3 • Palavras Intermediárias',
    title: 'Comida • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema: Comida (3/4) • 8 pratos, frutas e legumes intermediários',
    pedagogicalObjective: 'Ampliar o vocabulário alimentar com 8 palavras intermediárias: Pasta, Cake, Orange, Tomato, Potato, Onion, Carrot e Sandwich.',
    icon: 'apple',
    theory: [
      'Tema: Comida — Módulo 3 (Palavras intermediárias): massas, vegetais e lanches do cotidiano.',
      'Palavras deste módulo (8): Pasta ("pás-ta" = Macarrão), Cake ("kêik" = Bolo), Orange ("ó-rendj" = Laranja), Tomato ("to-mêi-tou" = Tomate), Potato ("po-têi-tou" = Batata), Onion ("â-nion" = Cebola), Carrot ("ké-rot" = Cenoura) e Sandwich ("sénd-uitch" = Sanduíche).'
    ],
    items: [
      w('Pasta', 'Macarrão', 'pás-ta', '/ˈpɑː.stə/', 'We love pasta for lunch.', 'Adoramos macarrão no almoço.', '🍝', 'plate of spaghetti pasta with tomato sauce on white background'),
      w('Cake', 'Bolo', 'kêik', '/keɪk/', 'She baked a chocolate cake.', 'Ela assou um bolo de chocolate.', '🍰', 'chocolate cake on plate on white background', true),
      w('Orange', 'Laranja', 'ó-rendj', '/ˈɔːr.ɪndʒ/', 'This orange is very juicy.', 'Esta laranja tem muito suco.', '🍊', 'fresh orange fruit whole and half on white background'),
      w('Tomato', 'Tomate', 'to-mêi-tou', '/təˈmeɪ.toʊ/', 'Slice the red tomato.', 'Corte o tomate em fatias.', '🍅', 'fresh red tomato vegetable on white background'),
      w('Potato', 'Batata', 'po-têi-tou', '/pəˈteɪ.toʊ/', 'Baked potatoes are delicious.', 'Batatas assadas são deliciosas.', '🥔', 'raw potatoes vegetables on white background'),
      w('Onion', 'Cebola', 'â-nion', '/ˈʌn.jən/', 'Chop the onion for the sauce.', 'Pique a cebola para o molho.', '🧅', 'whole onion vegetable on white background'),
      w('Carrot', 'Cenoura', 'ké-rot', '/ˈkær.ət/', 'Carrots are crunchy and sweet.', 'Cenouras são crocantes e doces.', '🥕', 'fresh orange carrot vegetable on white background'),
      w('Sandwich', 'Sanduíche', 'sénd-uitch', '/ˈsæn.wɪtʃ/', 'I packed a cheese sandwich.', 'Eu preparei um sanduíche de queijo.', '🥪', 'fresh sandwich with cheese and lettuce on white background', true),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Tema 2: Comida',
    frequencyLevel: 'Módulo 4 • Menos Comuns ou Específicas',
    title: 'Comida • Módulo 4: Menos Comuns',
    subtitle: 'Tema: Comida (4/4) • 8 ingredientes e alimentos específicos',
    pedagogicalObjective: 'Conhecer 8 alimentos e ingredientes específicos: Garlic, Pineapple, Avocado, Broccoli, Mushroom, Pepper, Honey e Flour.',
    icon: 'apple',
    theory: [
      'Tema: Comida — Módulo 4 (Palavras menos comuns ou específicas): ingredientes culinários e vegetais específicos.',
      'Palavras deste módulo (8): Garlic ("gár-lik" = Alho), Pineapple ("pái-né-pol" = Abacaxi), Avocado ("a-vo-cá-dou" = Abacate), Broccoli ("bró-co-li" = Brócolis), Mushroom ("mâx-rum" = Cogumelo), Pepper ("pé-per" = Pimentão/Pimenta), Honey ("râ-ni" = Mel) e Flour ("fláu-er" = Farinha).'
    ],
    items: [
      w('Garlic', 'Alho', 'gár-lik', '/ˈɡɑːr.lɪk/', 'Garlic gives flavor to food.', 'O alho dá sabor à comida.', '🧄', 'white garlic bulb and cloves on white background'),
      w('Pineapple', 'Abacaxi', 'pái-né-pol', '/ˈpaɪnˌæp.əl/', 'Pineapple is a tropical fruit.', 'O abacaxi é uma fruta tropical.', '🍍', 'whole pineapple fruit on white background', true),
      w('Avocado', 'Abacate', 'a-vo-cá-dou', '/ˌæv.əˈkɑː.doʊ/', 'Avocado is rich and creamy.', 'O abacate é rico e cremoso.', '🥑', 'green avocado cut in half on white background', true),
      w('Broccoli', 'Brócolis', 'bró-co-li', '/ˈbrɑː.kəl.i/', 'Broccoli is very nutritious.', 'O brócolis é muito nutritivo.', '🥦', 'fresh green broccoli head on white background', true),
      w('Mushroom', 'Cogumelo', 'mâx-rum', '/ˈmʌʃ.ruːm/', 'Add mushrooms to the sauce.', 'Adicione cogumelos ao molho.', '🍄', 'fresh champignon mushrooms on white background', true),
      w('Pepper', 'Pimentão / Pimenta', 'pé-per', '/ˈpep.ər/', 'Red pepper adds color to the dish.', 'O pimentão dá cor ao prato.', '🫑', 'fresh red bell pepper vegetable on white background', true),
      w('Honey', 'Mel', 'râ-ni', '/ˈhʌn.i/', 'Bees make golden honey.', 'As abelhas produzem mel.', '🍯', 'jar of golden honey with dipper on white background', true),
      w('Flour', 'Farinha', 'fláu-er', '/ˈflaʊ.ər/', 'Mix flour and eggs for the cake.', 'Misture farinha e ovos para o bolo.', '🥣', 'white wheat flour in bowl on white background', true),
    ],
  },

  // ==========================================================================
  // TEMA 3: CORPO HUMANO (BODY) — 4 MÓDULOS POR FREQUÊNCIA (8 PALAVRAS CADA)
  // ==========================================================================
  {
    themeId: 'body',
    themeTitle: 'Tema 3: Corpo Humano',
    frequencyLevel: 'Módulo 1 • Essenciais e Mais Comuns',
    title: 'Corpo Humano • Módulo 1: Palavras Essenciais',
    subtitle: 'Tema: Corpo Humano (1/4) • 8 partes essenciais do corpo',
    pedagogicalObjective: 'Reconhecer as 8 partes mais essenciais do corpo humano: Head, Hand, Foot, Eye, Ear, Nose, Mouth e Arm.',
    icon: 'star',
    theory: [
      'Tema: Corpo Humano — Módulo 1 (Palavras essenciais e mais comuns): as partes fundamentais do corpo.',
      'Palavras deste módulo (8): Head ("réd" = Cabeça), Hand ("rénd" = Mão), Foot ("fút" = Pé), Eye ("ái" = Olho), Ear ("ír" = Orelha/Ouvido), Nose ("nôuz" = Nariz), Mouth ("máuth" = Boca) e Arm ("árm" = Braço).'
    ],
    items: [
      w('Head', 'Cabeça', 'réd', '/hed/', 'Nod your head to say yes.', 'Balance a cabeça para dizer sim.', '🧑', 'person head portrait closeup real photo', true),
      w('Hand', 'Mão', 'rénd', '/hænd/', 'Raise your hand to speak.', 'Levante a mão para falar.', '✋', 'open human hand palm on white background', true),
      w('Foot', 'Pé', 'fút', '/fʊt/', 'Put your shoe on your foot.', 'Coloque o sapato no pé.', '🦶', 'human bare foot on white background', true),
      w('Eye', 'Olho', 'ái', '/aɪ/', 'She has brown eyes.', 'Ela tem olhos castanhos.', '👁️', 'human eye closeup real photo', true),
      w('Ear', 'Orelha / Ouvido', 'ír', '/ɪr/', 'We listen with our ears.', 'Nós ouvimos com os ouvidos.', '👂', 'human ear closeup real photo', true),
      w('Nose', 'Nariz', 'nôuz', '/noʊz/', 'Breathe through your nose.', 'Respire pelo nariz.', '👃', 'human nose closeup real photo', true),
      w('Mouth', 'Boca', 'máuth', '/maʊθ/', 'Open your mouth to speak.', 'Abra a boca para falar.', '👄', 'smiling human mouth closeup real photo', true),
      w('Arm', 'Braço', 'árm', '/ɑːrm/', 'Stretch your arms high.', 'Estique seus braços para o alto.', '💪', 'human arm and hand on white background', true),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Tema 3: Corpo Humano',
    frequencyLevel: 'Módulo 2 • Palavras Comuns',
    title: 'Corpo Humano • Módulo 2: Palavras Comuns',
    subtitle: 'Tema: Corpo Humano (2/4) • 8 partes comuns do corpo',
    pedagogicalObjective: 'Identificar 8 partes comuns do corpo: Leg, Hair, Face, Tooth, Finger, Back, Heart e Neck.',
    icon: 'star',
    theory: [
      'Tema: Corpo Humano — Módulo 2 (Palavras comuns): partes do corpo muito frequentes no cotidiano.',
      'Palavras deste módulo (8): Leg ("lég" = Perna), Hair ("rér" = Cabelo), Face ("fêis" = Rosto), Tooth ("túth" = Dente), Finger ("fín-guer" = Dedo da mão), Back ("bék" = Costas), Heart ("rárt" = Coração) e Neck ("nék" = Pescoço).'
    ],
    items: [
      w('Leg', 'Perna', 'lég', '/leɡ/', 'He has strong legs for running.', 'Ele tem pernas fortes para correr.', '🦵', 'runner human legs real photo', true),
      w('Hair', 'Cabelo', 'rér', '/her/', 'She brushes her long hair.', 'Ela escova o cabelo comprido.', '💇', 'healthy brown hair closeup real photo', true),
      w('Face', 'Rosto', 'fêis', '/feɪs/', 'Wash your face in the morning.', 'Lave o rosto de manhã.', '😊', 'smiling person face portrait real photo', true),
      w('Tooth', 'Dente', 'túth', '/tuːθ/', 'Brush every tooth after meals.', 'Escove os dentes após as refeições.', '🦷', 'clean white tooth dental model on white background', true),
      w('Finger', 'Dedo da mão', 'fín-guer', '/ˈfɪŋ.ɡər/', 'We have five fingers on each hand.', 'Temos cinco dedos em cada mão.', '☝️', 'hand pointing index finger on white background', true),
      w('Back', 'Costas', 'bék', '/bæk/', 'Keep your back straight.', 'Mantenha as costas retas.', '🧍', 'person back posture real photo', true),
      w('Heart', 'Coração', 'rárt', '/hɑːrt/', 'Your heart beats fast when you run.', 'Seu coração bate rápido ao correr.', '❤️', 'red heart anatomical model on white background', true),
      w('Neck', 'Pescoço', 'nék', '/nek/', 'Wrap a scarf around your neck.', 'Coloque um cachecol no pescoço.', '🧣', 'human neck and shoulders closeup real photo', true),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Tema 3: Corpo Humano',
    frequencyLevel: 'Módulo 3 • Palavras Intermediárias',
    title: 'Corpo Humano • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema: Corpo Humano (3/4) • 8 articulações e órgãos intermediários',
    pedagogicalObjective: 'Aprender 8 partes intermediárias do corpo: Shoulder, Knee, Stomach, Skin, Tongue, Brain, Elbow e Wrist.',
    icon: 'star',
    theory: [
      'Tema: Corpo Humano — Módulo 3 (Palavras intermediárias): articulações e órgãos importantes.',
      'Palavras deste módulo (8): Shoulder ("xôul-der" = Ombro), Knee ("ní" = Joelho), Stomach ("stâ-mak" = Estômago/Barriga), Skin ("skín" = Pele), Tongue ("tâng" = Língua), Brain ("brêin" = Cérebro), Elbow ("él-bou" = Cotovelo) e Wrist ("ríst" = Pulso).'
    ],
    items: [
      w('Shoulder', 'Ombro', 'xôul-der', '/ˈʃoʊl.dər/', 'Carry the bag on your shoulder.', 'Carregue a bolsa no ombro.', '🤷', 'person shoulder closeup real photo', true),
      w('Knee', 'Joelho', 'ní', '/niː/', 'Bend your knees slowly.', 'Dobre os joelhos devagar.', '🦵', 'human knee leg joint closeup real photo', true),
      w('Stomach', 'Estômago / Barriga', 'stâ-mak', '/ˈstʌm.ək/', 'My stomach is full after dinner.', 'Meu estômago está cheio após o jantar.', '🤰', 'person holding stomach belly real photo', true),
      w('Skin', 'Pele', 'skín', '/skɪn/', 'Drink water for healthy skin.', 'Beba água para uma pele saudável.', '✋', 'healthy human skin hand closeup real photo', true),
      w('Tongue', 'Língua', 'tâng', '/tʌŋ/', 'We taste food with our tongue.', 'Sentimos o gosto com a língua.', '👅', 'mouth showing tongue closeup real photo', true),
      w('Brain', 'Cérebro', 'brêin', '/breɪn/', 'Reading exercises the brain.', 'A leitura exercita o cérebro.', '🧠', 'human brain anatomical model on white background', true),
      w('Elbow', 'Cotovelo', 'él-bou', '/ˈel.boʊ/', 'Rest your elbow on the armrest.', 'Apoie o cotovelo no braço da cadeira.', '💪', 'human arm elbow joint closeup real photo', true),
      w('Wrist', 'Pulso / Punho', 'ríst', '/rɪst/', 'She wears a watch on her wrist.', 'Ela usa um relógio no pulso.', '⌚', 'human wrist hand joint closeup real photo', true),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Tema 3: Corpo Humano',
    frequencyLevel: 'Módulo 4 • Menos Comuns ou Específicas',
    title: 'Corpo Humano • Módulo 4: Menos Comuns',
    subtitle: 'Tema: Corpo Humano (4/4) • 8 partes específicas do rosto e corpo',
    pedagogicalObjective: 'Dominar 8 detalhes específicos do corpo: Ankle, Eyebrow, Eyelash, Chin, Cheek, Forehead, Throat e Lung.',
    icon: 'star',
    theory: [
      'Tema: Corpo Humano — Módulo 4 (Palavras menos comuns ou específicas): detalhes do rosto e sistema respiratório.',
      'Palavras deste módulo (8): Ankle ("én-kol" = Tornozelo), Eyebrow ("ái-brau" = Sobrancelha), Eyelash ("ái-léx" = Cílio), Chin ("tchín" = Queixo), Cheek ("tchík" = Bochecha), Forehead ("fór-réd" = Testa), Throat ("thrôut" = Garganta) e Lung ("lâng" = Pulmão).'
    ],
    items: [
      w('Ankle', 'Tornozelo', 'én-kol', '/ˈæŋ.kəl/', 'Warm up your ankles before running.', 'Aqueça os tornozelos antes de correr.', '🦶', 'human foot and ankle closeup real photo', true),
      w('Eyebrow', 'Sobrancelha', 'ái-brau', '/ˈaɪ.braʊ/', 'He raised one eyebrow.', 'Ele levantou uma sobrancelha.', '🤨', 'eye and eyebrow closeup real photo', true),
      w('Eyelash', 'Cílio', 'ái-léx', '/ˈaɪ.læʃ/', 'Eyelashes protect our eyes.', 'Os cílios protegem nossos olhos.', '👁️', 'long eyelashes eye closeup real photo', true),
      w('Chin', 'Queixo', 'tchín', '/tʃɪn/', 'He rested his chin on his hand.', 'Ele apoiou o queixo na mão.', '🧑', 'person chin and jawline closeup real photo', true),
      w('Cheek', 'Bochecha', 'tchík', '/tʃiːk/', 'She kissed her baby on the cheek.', 'Ela beijou o bebê na bochecha.', '😊', 'smiling face rosy cheek closeup real photo', true),
      w('Forehead', 'Testa', 'fór-réd', '/ˈfɔːr.hed/', 'She touched his forehead.', 'Ela tocou a testa dele.', '🧑', 'hand touching forehead closeup real photo', true),
      w('Throat', 'Garganta', 'thrôut', '/θroʊt/', 'Warm tea soothes the throat.', 'Chá morno alivia a garganta.', '🍵', 'person touching throat neck real photo', true),
      w('Lung', 'Pulmão', 'lâng', '/lʌŋ/', 'Fresh air fills our lungs.', 'O ar puro enche nossos pulmões.', '🫁', 'human lungs anatomical model on white background', true),
    ],
  },

  // ==========================================================================
  // TEMA 4: TRANSPORTE (TRANSPORT) — 4 MÓDULOS POR FREQUÊNCIA (8 PALAVRAS CADA)
  // ==========================================================================
  {
    themeId: 'transport',
    themeTitle: 'Tema 4: Transporte',
    frequencyLevel: 'Módulo 1 • Essenciais e Mais Comuns',
    title: 'Transporte • Módulo 1: Palavras Essenciais',
    subtitle: 'Tema: Transporte (1/4) • 8 veículos e vias essenciais',
    pedagogicalObjective: 'Conhecer os 8 termos mais essenciais de transporte: Car, Bus, Street, Bicycle, Train, Airplane, Taxi e Boat.',
    icon: 'car',
    theory: [
      'Tema: Transporte — Módulo 1 (Palavras essenciais e mais comuns): veículos e vias mais usados.',
      'Palavras deste módulo (8): Car ("cár" = Carro), Bus ("bâs" = Ônibus), Street ("strít" = Rua), Bicycle ("bái-si-kol" = Bicicleta), Train ("trêin" = Trem), Airplane ("ér-plêin" = Avião), Taxi ("ték-si" = Táxi) e Boat ("bôut" = Barco).'
    ],
    items: [
      w('Car', 'Carro', 'cár', '/kɑːr/', 'We travel by car on weekends.', 'Nós viajamos de carro nos fins de semana.', '🚗', 'modern passenger car automobile on white background'),
      w('Bus', 'Ônibus', 'bâs', '/bʌs/', 'Take the bus to work.', 'Pegue o ônibus para o trabalho.', '🚌', 'city passenger bus vehicle on white background'),
      w('Street', 'Rua', 'strít', '/striːt/', 'Look before crossing the street.', 'Olhe antes de atravessar a rua.', '🛣️', 'paved residential street road with houses real photo'),
      w('Bicycle', 'Bicicleta', 'bái-si-kol', '/ˈbaɪ.sɪ.kəl/', 'She rides her bicycle in the park.', 'Ela anda de bicicleta no parque.', '🚲', 'single bicycle bike on white background'),
      w('Train', 'Trem', 'trêin', '/treɪn/', 'The train arrives at eight.', 'O trem chega às oito.', '🚆', 'modern passenger train on tracks real photo', true),
      w('Airplane', 'Avião', 'ér-plêin', '/ˈer.pleɪn/', 'The airplane flies high.', 'O avião voa alto.', '✈️', 'commercial passenger airplane flying real photo', true),
      w('Taxi', 'Táxi', 'ték-si', '/ˈtæk.si/', 'Let us take a taxi.', 'Vamos pegar um táxi.', '🚕', 'yellow taxi cab car on white background'),
      w('Boat', 'Barco', 'bôut', '/boʊt/', 'A boat crosses the lake.', 'Um barco atravessa o lago.', '⛵', 'small boat on water real photo', true),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Tema 4: Transporte',
    frequencyLevel: 'Módulo 2 • Palavras Comuns',
    title: 'Transporte • Módulo 2: Palavras Comuns',
    subtitle: 'Tema: Transporte (2/4) • 8 palavras comuns de trânsito e viagens',
    pedagogicalObjective: 'Aprender 8 termos comuns de transporte: Truck, Motorcycle, Subway, Ship, Road, Bridge, Airport e Ticket.',
    icon: 'car',
    theory: [
      'Tema: Transporte — Módulo 2 (Palavras comuns): meios de transporte e infraestrutura de viagem.',
      'Palavras deste módulo (8): Truck ("trâk" = Caminhão), Motorcycle ("môu-tor-sái-kol" = Moto), Subway ("sâb-uêi" = Metrô), Ship ("xíp" = Navio), Road ("rôud" = Estrada), Bridge ("brídj" = Ponte), Airport ("ér-pórt" = Aeroporto) e Ticket ("tí-ket" = Passagem/Bilhete).'
    ],
    items: [
      w('Truck', 'Caminhão', 'trâk', '/trʌk/', 'The truck carries heavy boxes.', 'O caminhão transporta caixas pesadas.', '🚚', 'delivery cargo truck vehicle on white background'),
      w('Motorcycle', 'Moto', 'môu-tor-sái-kol', '/ˈmoʊ.tərˌsaɪ.kəl/', 'Wear a helmet on a motorcycle.', 'Use capacete na moto.', '🏍️', 'motorcycle motorbike on white background'),
      w('Subway', 'Metrô', 'sâb-uêi', '/ˈsʌb.weɪ/', 'The subway is fast.', 'O metrô é rápido.', '🚇', 'underground subway metro train at station real photo'),
      w('Ship', 'Navio', 'xíp', '/ʃɪp/', 'A large ship sails the ocean.', 'Um grande navio navega pelo oceano.', '🚢', 'large passenger cruise ship at sea real photo', true),
      w('Road', 'Estrada / Rodovia', 'rôud', '/roʊd/', 'Follow this road to the beach.', 'Siga esta estrada até a praia.', '🛣️', 'highway asphalt road in landscape real photo', true),
      w('Bridge', 'Ponte', 'brídj', '/brɪdʒ/', 'Drive across the bridge.', 'Dirija sobre a ponte.', '🌉', 'highway bridge over river real photo'),
      w('Airport', 'Aeroporto', 'ér-pórt', '/ˈer.pɔːrt/', 'We arrived early at the airport.', 'Chegamos cedo ao aeroporto.', '🛫', 'airport terminal with airplane real photo', true),
      w('Ticket', 'Passagem / Bilhete', 'tí-ket', '/ˈtɪk.ɪt/', 'Buy your ticket here.', 'Compre sua passagem aqui.', '🎫', 'travel boarding pass ticket on white background', true),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Tema 4: Transporte',
    frequencyLevel: 'Módulo 3 • Palavras Intermediárias',
    title: 'Transporte • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema: Transporte (3/4) • 8 palavras intermediárias da via urbana',
    pedagogicalObjective: 'Dominar 8 termos intermediários de transporte: Helicopter, Van, Ambulance, Seat, Helmet, Sidewalk, Crosswalk e Engine.',
    icon: 'car',
    theory: [
      'Tema: Transporte — Módulo 3 (Palavras intermediárias): segurança, veículos e elementos da via.',
      'Palavras deste módulo (8): Helicopter ("ré-li-cóp-ter" = Helicóptero), Van ("vén" = Van), Ambulance ("ém-biu-lans" = Ambulância), Seat ("sít" = Assento), Helmet ("rél-met" = Capacete), Sidewalk ("sáid-uók" = Calçada), Crosswalk ("crós-uók" = Faixa de pedestres) e Engine ("én-djin" = Motor).'
    ],
    items: [
      w('Helicopter', 'Helicóptero', 'ré-li-cóp-ter', '/ˈhel.ɪˌkɑːp.tər/', 'The helicopter flies over the city.', 'O helicóptero sobrevoa a cidade.', '🚁', 'helicopter flying in sky real photo', true),
      w('Van', 'Van', 'vén', '/væn/', 'The van carries eight people.', 'A van transporta oito pessoas.', '🚐', 'white passenger van vehicle on white background', true),
      w('Ambulance', 'Ambulância', 'ém-biu-lans', '/ˈæm.bjə.ləns/', 'Make way for the ambulance.', 'Dê passagem para a ambulância.', '🚑', 'emergency medical ambulance van on white background'),
      w('Seat', 'Assento / Banco', 'sít', '/siːt/', 'Take a seat on the train.', 'Sente-se no banco do trem.', '💺', 'passenger car or airplane seat real photo', true),
      w('Helmet', 'Capacete', 'rél-met', '/ˈhel.mət/', 'Always wear a safety helmet.', 'Use sempre um capacete de segurança.', '⛑️', 'motorcycle safety helmet on white background'),
      w('Sidewalk', 'Calçada', 'sáid-uók', '/ˈsaɪd.wɔːk/', 'Walk on the sidewalk.', 'Caminhe na calçada.', '🚶', 'residential street concrete sidewalk walkway beside house real photo'),
      w('Crosswalk', 'Faixa de pedestres', 'crós-uók', '/ˈkrɔːs.wɔːk/', 'Cross at the crosswalk.', 'Atravesse na faixa de pedestres.', '🚸', 'white painted pedestrian zebra crosswalk on city street road real photo'),
      w('Engine', 'Motor', 'én-djin', '/ˈen.dʒɪn/', 'Start the car engine.', 'Ligue o motor do carro.', '⚙️', 'car engine under open hood real photo', true),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Tema 4: Transporte',
    frequencyLevel: 'Módulo 4 • Menos Comuns ou Específicas',
    title: 'Transporte • Módulo 4: Menos Comuns',
    subtitle: 'Tema: Transporte (4/4) • 8 veículos e peças específicas',
    pedagogicalObjective: 'Conhecer 8 termos específicos de transporte: Scooter, Tractor, Ferry, Runway, Harbor, Anchor, Pedal e Brake.',
    icon: 'car',
    theory: [
      'Tema: Transporte — Módulo 4 (Palavras menos comuns ou específicas): embarcações, pistas e componentes mecânicos.',
      'Palavras deste módulo (8): Scooter ("scú-ter" = Patinete/Scooter), Tractor ("trék-tor" = Trator), Ferry ("fé-ri" = Balsa), Runway ("rân-uêi" = Pista de pouso), Harbor ("rár-bor" = Porto), Anchor ("én-cor" = Âncora), Pedal ("pé-dal" = Pedal) e Brake ("brêik" = Freio).'
    ],
    items: [
      w('Scooter', 'Patinete / Scooter', 'scú-ter', '/ˈskuː.tər/', 'He rides an electric scooter.', 'Ele anda de patinete elétrico.', '🛴', 'electric kick scooter on white background', true),
      w('Tractor', 'Trator', 'trék-tor', '/ˈtræk.tər/', 'The farmer drives a tractor.', 'O fazendeiro dirige um trator.', '🚜', 'farm tractor in field real photo', true),
      w('Ferry', 'Balsa', 'fé-ri', '/ˈfer.i/', 'We crossed the bay on a ferry.', 'Atravessamos a baía em uma balsa.', '⛴️', 'passenger ferry boat on water real photo', true),
      w('Runway', 'Pista de pouso', 'rân-uêi', '/ˈrʌn.weɪ/', 'The plane is on the runway.', 'O avião está na pista de pouso.', '🛫', 'airport runway with airplane taking off real photo', true),
      w('Harbor', 'Porto', 'rár-bor', '/ˈhɑːr.bər/', 'Boats are in the harbor.', 'Os barcos estão no porto.', '⚓', 'harbor port with boats and ships real photo', true),
      w('Anchor', 'Âncora', 'én-cor', '/ˈæŋ.kər/', 'The ship dropped its anchor.', 'O navio lançou a âncora.', '⚓', 'metal ship anchor on white background', true),
      w('Pedal', 'Pedal', 'pé-dal', '/ˈped.əl/', 'Push the bicycle pedal.', 'Empurre o pedal da bicicleta.', '🚲', 'bicycle foot pedal closeup real photo', true),
      w('Brake', 'Freio', 'brêik', '/breɪk/', 'Step on the brake to stop.', 'Pise no freio para parar.', '🛑', 'car brake pedal and disc brake real photo', true),
    ],
  },

  // ==========================================================================
  // TEMA 5: ROUPAS (CLOTHES) — 4 MÓDULOS POR FREQUÊNCIA (8 PALAVRAS CADA)
  // ==========================================================================
  {
    themeId: 'clothes',
    themeTitle: 'Tema 5: Roupas',
    frequencyLevel: 'Módulo 1 • Essenciais e Mais Comuns',
    title: 'Roupas • Módulo 1: Palavras Essenciais',
    subtitle: 'Tema: Roupas (1/4) • 8 peças de vestuário essenciais',
    pedagogicalObjective: 'Dominar as 8 peças de roupa mais essenciais: Shirt, Pants, Shoes, Dress, Shorts, Skirt, Jacket e Socks.',
    icon: 'shirt',
    theory: [
      'Tema: Roupas — Módulo 1 (Palavras essenciais e mais comuns): as peças básicas do vestuário diário.',
      'Palavras deste módulo (8): Shirt ("xârt" = Camisa), Pants ("pénts" = Calça), Shoes ("xúz" = Sapatos), Dress ("drés" = Vestido), Shorts ("xórts" = Shorts/Bermuda), Skirt ("skârt" = Saia), Jacket ("djé-ket" = Jaqueta) e Socks ("sóks" = Meias).'
    ],
    items: [
      w('Shirt', 'Camisa', 'xârt', '/ʃɜːrt/', 'He wears a clean shirt.', 'Ele veste uma camisa limpa.', '👔', 'long sleeve button dress shirt on white background'),
      w('Pants', 'Calça', 'pénts', '/pænts/', 'These pants are comfortable.', 'Esta calça é confortável.', '👖', 'pair of trousers pants garment on white background'),
      w('Shoes', 'Sapatos', 'xúz', '/ʃuːz/', 'Take off your shoes at the door.', 'Tire os sapatos na porta.', '👞', 'pair of leather dress shoes on white background'),
      w('Dress', 'Vestido', 'drés', '/dres/', 'She bought a red dress.', 'Ela comprou um vestido vermelho.', '👗', 'women summer dress garment on white background'),
      w('Shorts', 'Shorts / Bermuda', 'xórts', '/ʃɔːrts/', 'I wear shorts on hot days.', 'Eu uso bermuda em dias quentes.', '🩳', 'casual summer shorts pants on white background'),
      w('Skirt', 'Saia', 'skârt', '/skɜːrt/', 'Her blue skirt is pretty.', 'A saia azul dela é bonita.', '👗', 'pleated fabric skirt garment on white background'),
      w('Jacket', 'Jaqueta', 'djé-ket', '/ˈdʒæk.ɪt/', 'Put on a jacket before going out.', 'Vista uma jaqueta antes de sair.', '🧥', 'zipper winter jacket coat on white background'),
      w('Socks', 'Meias', 'sóks', '/sɑːks/', 'Put on clean socks.', 'Coloque meias limpas.', '🧦', 'pair of cotton socks on white background'),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Tema 5: Roupas',
    frequencyLevel: 'Módulo 2 • Palavras Comuns',
    title: 'Roupas • Módulo 2: Palavras Comuns',
    subtitle: 'Tema: Roupas (2/4) • 8 roupas e calçados comuns',
    pedagogicalObjective: 'Reconhecer 8 peças comuns do vestuário: Coat, Hat, Jeans, Bag, T-shirt, Sweater, Boots e Sneakers.',
    icon: 'shirt',
    theory: [
      'Tema: Roupas — Módulo 2 (Palavras comuns): agasalhos, calçados e peças casuais.',
      'Palavras deste módulo (8): Coat ("côut" = Casaco), Hat ("rét" = Chapéu), Jeans ("djínz" = Calça jeans), Bag ("bég" = Bolsa), T-shirt ("tí-xârt" = Camiseta), Sweater ("sué-ter" = Suéter), Boots ("búts" = Botas) e Sneakers ("sní-kers" = Tênis).'
    ],
    items: [
      w('Coat', 'Casaco', 'côut', '/koʊt/', 'You need a warm coat in winter.', 'Você precisa de um casaco no inverno.', '🧥', 'warm winter coat outerwear on white background', true),
      w('Hat', 'Chapéu', 'rét', '/hæt/', 'Wear a hat in the sun.', 'Use um chapéu no sol.', '👒', 'sun hat headwear on white background', true),
      w('Jeans', 'Calça jeans', 'djínz', '/dʒiːnz/', 'Blue jeans go with everything.', 'Calça jeans combina com tudo.', '👖', 'blue denim jeans pants on white background', true),
      w('Bag', 'Bolsa', 'bég', '/bæɡ/', 'She carries her bag.', 'Ela carrega a bolsa dela.', '👜', 'leather shoulder bag handbag on white background', true),
      w('T-shirt', 'Camiseta', 'tí-xârt', '/ˈtiː.ʃɜːrt/', 'I wear a cotton T-shirt.', 'Eu uso uma camiseta de algodão.', '👕', 'cotton crew neck t-shirt on white background'),
      w('Sweater', 'Suéter / Blusa de lã', 'sué-ter', '/ˈswet.ər/', 'This wool sweater is warm.', 'Este suéter de lã é quentinho.', '🧶', 'knitted wool sweater pullover on white background'),
      w('Boots', 'Botas', 'búts', '/buːts/', 'Wear boots when it rains.', 'Use botas quando chover.', '🥾', 'pair of brown leather boots on white background', true),
      w('Sneakers', 'Tênis', 'sní-kers', '/ˈsniː.kərz/', 'Put on your sneakers to walk.', 'Calce seus tênis para caminhar.', '👟', 'pair of running sneakers sport shoes on white background'),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Tema 5: Roupas',
    frequencyLevel: 'Módulo 3 • Palavras Intermediárias',
    title: 'Roupas • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema: Roupas (3/4) • 8 acessórios pessoais intermediários',
    pedagogicalObjective: 'Aprender 8 acessórios intermediários: Glasses, Watch, Belt, Cap, Tie, Scarf, Gloves e Umbrella.',
    icon: 'shirt',
    theory: [
      'Tema: Roupas — Módulo 3 (Palavras intermediárias): acessórios de uso pessoal e proteção.',
      'Palavras deste módulo (8): Glasses ("glé-ses" = Óculos), Watch ("uótch" = Relógio de pulso), Belt ("bélt" = Cinto), Cap ("kép" = Boné), Tie ("tái" = Gravata), Scarf ("scárf" = Cachecol), Gloves ("glâvz" = Luvas) e Umbrella ("âm-bré-la" = Guarda-chuva).'
    ],
    items: [
      w('Glasses', 'Óculos', 'glé-ses', '/ˈɡlæs.ɪz/', 'I need my glasses to read.', 'Preciso dos meus óculos para ler.', '👓', 'reading eyeglasses frames on white background'),
      w('Watch', 'Relógio de pulso', 'uótch', '/wɑːtʃ/', 'Check the time on your watch.', 'Veja a hora no seu relógio de pulso.', '⌚', 'wristwatch on leather strap on white background'),
      w('Belt', 'Cinto', 'bélt', '/belt/', 'This leather belt fits well.', 'Este cinto de couro serve bem.', '👖', 'brown leather belt with metal buckle on white background'),
      w('Cap', 'Boné', 'kép', '/kæp/', 'He wears a cap outdoors.', 'Ele usa um boné ao ar livre.', '🧢', 'baseball cap hat on white background'),
      w('Tie', 'Gravata', 'tái', '/taɪ/', 'He wears a tie to work.', 'Ele usa gravata no trabalho.', '👔', 'silk necktie tie on white background'),
      w('Scarf', 'Cachecol', 'scárf', '/skɑːrf/', 'Wrap a scarf around your neck.', 'Enrole um cachecol no pescoço.', '🧣', 'knitted winter wool scarf on white background', true),
      w('Gloves', 'Luvas', 'glâvz', '/ɡlʌvz/', 'Gloves keep your hands warm.', 'As luvas mantêm as mãos quentes.', '🧤', 'pair of winter hand gloves on white background', true),
      w('Umbrella', 'Guarda-chuva', 'âm-bré-la', '/ʌmˈbrel.ə/', 'Take an umbrella in the rain.', 'Leve um guarda-chuva na chuva.', '☂️', 'open colorful rain umbrella on white background'),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Tema 5: Roupas',
    frequencyLevel: 'Módulo 4 • Menos Comuns ou Específicas',
    title: 'Roupas • Módulo 4: Menos Comuns',
    subtitle: 'Tema: Roupas (4/4) • 8 peças específicas e detalhes das roupas',
    pedagogicalObjective: 'Conhecer 8 termos específicos de vestuário: Apron, Vest, Raincoat, Slippers, Zipper, Sleeve, Collar e Hanger.',
    icon: 'shirt',
    theory: [
      'Tema: Roupas — Módulo 4 (Palavras menos comuns ou específicas): partes das roupas e peças específicas.',
      'Palavras deste módulo (8): Apron ("êi-pron" = Avental), Vest ("vést" = Colete), Raincoat ("rêin-côut" = Capa de chuva), Slippers ("slí-pers" = Pantufas), Zipper ("zí-per" = Zíper), Sleeve ("slív" = Manga), Collar ("có-lar" = Gola) e Hanger ("rén-guer" = Cabide).'
    ],
    items: [
      w('Apron', 'Avental', 'êi-pron', '/ˈeɪ.prən/', 'Wear an apron while cooking.', 'Use um avental ao cozinhar.', '🎽', 'kitchen cooking apron garment on white background', true),
      w('Vest', 'Colete', 'vést', '/vest/', 'He wore a vest over his shirt.', 'Ele usou um colete sobre a camisa.', '🦺', 'sleeveless vest waistcoat garment on white background', true),
      w('Raincoat', 'Capa de chuva', 'rêin-côut', '/ˈreɪn.koʊt/', 'A raincoat keeps you dry.', 'A capa de chuva mantém você seco.', '🧥', 'yellow waterproof raincoat jacket on white background', true),
      w('Slippers', 'Pantufas', 'slí-pers', '/ˈslɪp.ərz/', 'Wear soft slippers at home.', 'Use pantufas macias em casa.', '🥿', 'pair of cozy house slippers on white background'),
      w('Zipper', 'Zíper', 'zí-per', '/ˈzɪp.ər/', 'Close the jacket zipper.', 'Feche o zíper da jaqueta.', '🧥', 'metal zipper on jacket closeup real photo', true),
      w('Sleeve', 'Manga', 'slív', '/sliːv/', 'Roll up your shirt sleeves.', 'Dobre as mangas da camisa.', '👕', 'long shirt sleeve cuff closeup real photo', true),
      w('Collar', 'Gola / Colarinho', 'có-lar', '/ˈkɑː.lər/', 'Straighten your shirt collar.', 'Arrume a gola da camisa.', '👔', 'folded shirt collar closeup real photo', true),
      w('Hanger', 'Cabide', 'rén-guer', '/ˈhæŋ.ər/', 'Put the shirt on a hanger.', 'Coloque a camisa em um cabide.', '🧥', 'wooden clothes hanger on white background'),
    ],
  },

  // ==========================================================================
  // TEMA 6: TRABALHO & ESTUDO (WORK) — 4 MÓDULOS POR FREQUÊNCIA (8 PALAVRAS CADA)
  // ==========================================================================
  {
    themeId: 'work',
    themeTitle: 'Tema 6: Trabalho',
    frequencyLevel: 'Módulo 1 • Essenciais e Mais Comuns',
    title: 'Trabalho • Módulo 1: Palavras Essenciais',
    subtitle: 'Tema: Trabalho (1/4) • 8 palavras essenciais de trabalho e estudo',
    pedagogicalObjective: 'Dominar 8 termos essenciais de trabalho e rotina profissional: Office, School, Teacher, Doctor, Computer, Book, Pen e Phone.',
    icon: 'book',
    theory: [
      'Tema: Trabalho — Módulo 1 (Palavras essenciais e mais comuns): profissões, locais e ferramentas essenciais.',
      'Palavras deste módulo (8): Office ("ó-fis" = Escritório), School ("scúl" = Escola), Teacher ("tí-tcher" = Professor), Doctor ("dók-tor" = Médico), Computer ("com-piú-ter" = Computador), Book ("búk" = Livro), Pen ("pén" = Caneta) e Phone ("fôun" = Telefone/Celular).'
    ],
    items: [
      w('Office', 'Escritório', 'ó-fis', '/ˈɑː.fɪs/', 'She works in an office.', 'Ela trabalha em um escritório.', '🏢', 'modern workplace office desk with computer real photo', true),
      w('School', 'Escola', 'scúl', '/skuːl/', 'The school opens at seven.', 'A escola abre às sete.', '🏫', 'school building exterior with entrance real photo'),
      w('Teacher', 'Professor(a)', 'tí-tcher', '/ˈtiː.tʃər/', 'The teacher explains the lesson.', 'A professora explica a lição.', '👩‍🏫', 'friendly school teacher holding book on white background'),
      w('Doctor', 'Médico(a)', 'dók-tor', '/ˈdɑːk.tər/', 'The doctor works at the hospital.', 'O médico trabalha no hospital.', '🩺', 'friendly medical doctor with stethoscope on white background', true),
      w('Computer', 'Computador', 'com-piú-ter', '/kəmˈpjuː.tər/', 'Use the computer for work.', 'Use o computador para trabalhar.', '💻', 'desktop computer monitor and keyboard on white background', true),
      w('Book', 'Livro', 'búk', '/bʊk/', 'Read this book carefully.', 'Leia este livro com atenção.', '📘', 'single hardcover book on white background'),
      w('Pen', 'Caneta', 'pén', '/pen/', 'Sign the document with a pen.', 'Assine o documento com uma caneta.', '🖊️', 'single blue ballpoint pen on white background'),
      w('Phone', 'Telefone / Celular', 'fôun', '/foʊn/', 'Answer the office phone.', 'Atenda o telefone.', '📱', 'modern smartphone mobile phone on white background', true),
    ],
  },
  {
    themeId: 'work',
    themeTitle: 'Tema 6: Trabalho',
    frequencyLevel: 'Módulo 2 • Palavras Comuns',
    title: 'Trabalho • Módulo 2: Palavras Comuns',
    subtitle: 'Tema: Trabalho (2/4) • 8 objetos e funções comuns no trabalho',
    pedagogicalObjective: 'Aprender 8 termos comuns do ambiente profissional: Desk, Paper, Clock, Notebook, Pencil, Nurse, Chef e Police.',
    icon: 'book',
    theory: [
      'Tema: Trabalho — Módulo 2 (Palavras comuns): materiais e profissões frequentes.',
      'Palavras deste módulo (8): Desk ("désk" = Mesa de trabalho), Paper ("pêi-per" = Papel), Clock ("clók" = Relógio de parede), Notebook ("nôut-búk" = Caderno), Pencil ("pên-sol" = Lápis), Nurse ("nârs" = Enfermeira), Chef ("xéf" = Cozinheiro/Chef) e Police ("po-lís" = Polícia).'
    ],
    items: [
      w('Desk', 'Mesa de trabalho / Escrivaninha', 'désk', '/desk/', 'Put the laptop on the desk.', 'Coloque o notebook na escrivaninha.', '🪑', 'wooden office work desk table on white background', true),
      w('Paper', 'Papel', 'pêi-per', '/ˈpeɪ.pər/', 'Write on a sheet of paper.', 'Escreva em uma folha de papel.', '📄', 'clean white paper sheets on white background'),
      w('Clock', 'Relógio de parede', 'clók', '/klɑːk/', 'Look at the wall clock.', 'Olhe para o relógio de parede.', '🕒', 'round wall clock on white background'),
      w('Notebook', 'Caderno', 'nôut-búk', '/ˈnoʊt.bʊk/', 'Take notes in your notebook.', 'Anote no seu caderno.', '📓', 'spiral paper notebook on white background'),
      w('Pencil', 'Lápis', 'pên-sol', '/ˈpen.səl/', 'Draw with a wooden pencil.', 'Desenhe com um lápis.', '✏️', 'single yellow wooden pencil with eraser on white background'),
      w('Nurse', 'Enfermeiro(a)', 'nârs', '/nɜːrs/', 'The nurse helps the patients.', 'A enfermeira ajuda os pacientes.', '🧑‍⚕️', 'hospital nurse in medical scrubs on white background', true),
      w('Chef', 'Cozinheiro / Chef', 'xéf', '/ʃef/', 'The chef prepares the meal.', 'O chef prepara a refeição.', '👨‍🍳', 'restaurant chef in white uniform and hat on white background', true),
      w('Police', 'Policial / Polícia', 'po-lís', '/pəˈliːs/', 'The police officer helps the city.', 'O policial ajuda a cidade.', '👮', 'police officer in uniform on white background', true),
    ],
  },
  {
    themeId: 'work',
    themeTitle: 'Tema 6: Trabalho',
    frequencyLevel: 'Módulo 3 • Palavras Intermediárias',
    title: 'Trabalho • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema: Trabalho (3/4) • 8 equipamentos e ferramentas intermediárias',
    pedagogicalObjective: 'Dominar 8 ferramentas intermediárias de trabalho: Keyboard, Screen, Printer, Scissors, Ruler, Eraser, Envelope e Calculator.',
    icon: 'book',
    theory: [
      'Tema: Trabalho — Módulo 3 (Palavras intermediárias): periféricos e utensílios de escritório.',
      'Palavras deste módulo (8): Keyboard ("kí-bórd" = Teclado), Screen ("scrín" = Tela/Monitor), Printer ("prín-ter" = Impressora), Scissors ("sí-zors" = Tesoura), Ruler ("rú-ler" = Régua), Eraser ("i-rêi-ser" = Borracha), Envelope ("ên-ve-lôup" = Envelope) e Calculator ("kél-kiu-lêi-tor" = Calculadora).'
    ],
    items: [
      w('Keyboard', 'Teclado', 'kí-bórd', '/ˈkiː.bɔːrd/', 'Type on the computer keyboard.', 'Digite no teclado do computador.', '⌨️', 'computer keyboard on white background', true),
      w('Screen', 'Tela / Monitor', 'scrín', '/skriːn/', 'Look at the computer screen.', 'Olhe para a tela do computador.', '🖥️', 'computer monitor display screen on white background', true),
      w('Printer', 'Impressora', 'prín-ter', '/ˈprɪn.tər/', 'Print the page on the printer.', 'Imprima a página na impressora.', '🖨️', 'office paper printer machine on white background', true),
      w('Scissors', 'Tesoura', 'sí-zors', '/ˈsɪz.ərz/', 'Cut the paper with scissors.', 'Corte o papel com a tesoura.', '✂️', 'single pair of paper scissors on white background'),
      w('Ruler', 'Régua', 'rú-ler', '/ˈruː.lər/', 'Measure the line with a ruler.', 'Meça a linha com uma régua.', '📏', 'plastic centimeter ruler on white background'),
      w('Eraser', 'Borracha', 'i-rêi-ser', '/ɪˈreɪ.sər/', 'Use an eraser to fix it.', 'Use uma borracha para corrigir.', '🧽', 'single white rubber pencil eraser on white background'),
      w('Envelope', 'Envelope', 'ên-ve-lôup', '/ˈen.və.loʊp/', 'Put the letter in the envelope.', 'Coloque a carta no envelope.', '✉️', 'white paper mailing envelope on white background'),
      w('Calculator', 'Calculadora', 'kél-kiu-lêi-tor', '/ˈkæl.kjə.leɪ.tər/', 'Check the numbers on the calculator.', 'Confira os números na calculadora.', '🧮', 'electronic pocket calculator with buttons on white background'),
    ],
  },
  {
    themeId: 'work',
    themeTitle: 'Tema 6: Trabalho',
    frequencyLevel: 'Módulo 4 • Menos Comuns ou Específicas',
    title: 'Trabalho • Módulo 4: Menos Comuns',
    subtitle: 'Tema: Trabalho (4/4) • 8 ferramentas e instrumentos específicos',
    pedagogicalObjective: 'Conhecer 8 instrumentos específicos de trabalho e ciência: Folder, Stapler, Calendar, Microscope, Globe, Paintbrush, Hammer e Wrench.',
    icon: 'book',
    theory: [
      'Tema: Trabalho — Módulo 4 (Palavras menos comuns ou específicas): ferramentas técnicas e materiais específicos.',
      'Palavras deste módulo (8): Folder ("fôul-der" = Pasta de arquivo), Stapler ("stêi-pler" = Grampeador), Calendar ("ké-len-dar" = Calendário), Microscope ("mái-cro-scôup" = Microscópio), Globe ("glôub" = Globo terrestre), Paintbrush ("pêint-brâx" = Pincel), Hammer ("ré-mer" = Martelo) e Wrench ("rêntch" = Chave inglesa).'
    ],
    items: [
      w('Folder', 'Pasta de documentos', 'fôul-der', '/ˈfoʊl.dər/', 'Keep the files inside the folder.', 'Guarde os documentos na pasta.', '📁', 'office document file folder on white background', true),
      w('Stapler', 'Grampeador', 'stêi-pler', '/ˈsteɪ.plər/', 'Use the stapler on the papers.', 'Use o grampeador nos papéis.', '📎', 'office desk stapler on white background', true),
      w('Calendar', 'Calendário', 'ké-len-dar', '/ˈkæl.ən.dər/', 'Check the date on the calendar.', 'Veja a data no calendário.', '📅', 'desk paper calendar on white background', true),
      w('Microscope', 'Microscópio', 'mái-cro-scôup', '/ˈmaɪ.krə.skoʊp/', 'Look through the microscope.', 'Olhe pelo microscópio.', '🔬', 'laboratory optical microscope on white background'),
      w('Globe', 'Globo terrestre', 'glôub', '/ɡloʊb/', 'Find the country on the globe.', 'Encontre o país no globo terrestre.', '🌍', 'world earth globe on stand on white background'),
      w('Paintbrush', 'Pincel', 'pêint-brâx', '/ˈpeɪnt.brʌʃ/', 'Paint with a clean paintbrush.', 'Pinte com um pincel limpo.', '🖌️', 'artist paintbrush with wooden handle on white background'),
      w('Hammer', 'Martelo', 'ré-mer', '/ˈhæm.ər/', 'Hit the nail with a hammer.', 'Bata o prego com o martelo.', '🔨', 'steel claw hammer tool on white background', true),
      w('Wrench', 'Chave inglesa', 'rêntch', '/rentʃ/', 'Tighten the bolt with a wrench.', 'Aperte o parafuso com a chave inglesa.', '🔧', 'metal adjustable wrench tool on white background', true),
    ],
  },
];

// ============================================================================
// MÓDULOS EXCLUSIVOS DE PRONOMES (1 A CADA 3 DE VOCABULÁRIO)
// Explicações 100% didáticas, claras, objetivas e sem linguagem infantilizada!
// ============================================================================

const PRONOUN_MODULE_1 = {
  title: 'Lição de Pronomes I • Pessoais & De Tratamento',
  subtitle: 'Módulo de Pronomes 1/8 (Após 3 de Vocabulário) • Explicação Didática + Pares Associativos',
  pedagogicalObjective: 'Dominar os Pronomes Pessoais (I, You, He, She, It, We, You, They) e os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma\'am) com explicação didática e clara da professora.',
  icon: 'star',
  type: 'chest',
  theory: [
    'Lição Exclusiva de Pronomes (intercalada a cada 3 módulos de vocabulário).',
    '1ª Parte — Pronomes Pessoais (Subject Pronouns): indicam quem realiza a ação na frase, substituindo o nome (I, You, He, She, It, We, You, They).',
    '2ª Parte — Pronomes de Tratamento: usados para demonstrar respeito, cortesia ou formalidade (Mr., Mrs., Miss, Ms., Sir, Ma\'am, Dr., Prof.).'
  ],
  boards: [
    {
      conceptTitle: '1º • Pronomes Pessoais do Singular (I, You, He, She)',
      conceptHeader: 'Os Pronomes Pessoais indicam quem realiza a ação na frase, substituindo o nome da pessoa. No singular usamos: "I" (Eu), "You" (Você), "He" (Ele — para homem ou menino) e "She" (Ela — para mulher ou menina).',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Conecte cada Pronome Pessoal em inglês ao seu significado em português:',
      explanation: 'Pronomes Pessoais do Singular: I (Eu), You (Você), He (Ele), She (Ela).',
      pairs: [
        { id: 'p1', en: 'I ("ái")', emoji: '🙋', phonetic: '/aɪ/', pt: 'Eu (1ª pessoa do singular)', tipPt: 'Correto! "I" ("ái") significa "Eu" e sempre é escrito com letra maiúscula em inglês.' },
        { id: 'p2', en: 'You ("iú")', emoji: '👉', phonetic: '/juː/', pt: 'Você (2ª pessoa do singular)', tipPt: 'Exato! "You" ("iú") significa "Você".' },
        { id: 'p3', en: 'He ("rí")', emoji: '👨', phonetic: '/hiː/', pt: 'Ele (usado para pessoas do sexo masculino)', tipPt: 'Perfeito! "He" ("rí") é usado para "Ele".' },
        { id: 'p4', en: 'She ("xí")', emoji: '👩', phonetic: '/ʃiː/', pt: 'Ela (usado para pessoas do sexo feminino)', tipPt: 'Muito bem! "She" ("xí") é usado para "Ela".' },
      ],
    },
    {
      conceptTitle: '1º • Pronomes Pessoais: Neutro e Plural (It, We, You, They)',
      conceptHeader: 'Para nos referirmos a um único objeto, lugar ou animal, usamos o pronome neutro "It" (Ele/Ela). No plural usamos: "We" (Nós), "You" (Vocês) e "They" (Eles/Elas — válido para pessoas, animais e objetos).',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Associe os Pronomes Pessoais "It, We, You, They" aos seus pares:',
      explanation: 'It (neutro singular para objeto/lugar/animal), We (Nós), You (Vocês), They (Eles/Elas).',
      pairs: [
        { id: 'p5', en: 'It ("ít")', emoji: '🏠', phonetic: '/ɪt/', pt: 'Ele / Ela (neutro: para 1 objeto, lugar ou animal)', tipPt: 'Correto! "It" substitui o nome de um objeto, animal ou lugar no singular.' },
        { id: 'p6', en: 'We ("uí")', emoji: '👥', phonetic: '/wiː/', pt: 'Nós (1ª pessoa do plural: eu + outra pessoa)', tipPt: 'Muito bem! "We" ("uí") significa "Nós".' },
        { id: 'p7', en: 'You ("iú" - plural)', emoji: '👫', phonetic: '/juː/', pt: 'Vocês (2ª pessoa do plural)', tipPt: 'Exato! "You" tem a mesma forma para "Você" (singular) e "Vocês" (plural).' },
        { id: 'p8', en: 'They ("dêi")', emoji: '👨‍👩‍👧‍👦', phonetic: '/ðeɪ/', pt: 'Eles / Elas (plural para pessoas, animais ou coisas)', tipPt: 'Perfeito! "They" ("dêi") é o plural de He, She e também de It.' },
      ],
    },
    {
      conceptTitle: '2º • Pronomes de Tratamento com Sobrenome (Mr., Mrs., Miss, Ms.)',
      conceptHeader: 'Os Pronomes de Tratamento demonstram respeito e cortesia. Antes do nome ou sobrenome usamos: "Mr." (Senhor), "Mrs." (Senhora — mulher casada), "Miss" (Senhorita — mulher solteira) e "Ms." (Senhora ou Senhorita — neutro para qualquer mulher).',
      teacherAudioPt: '/audio/teacher/pronoun_2.wav',
      prompt: '🤝 Conecte cada Pronome de Tratamento ao seu uso correto:',
      explanation: 'Mr. (Senhor), Mrs. (Senhora - casada), Miss (Senhorita - solteira), Ms. (Senhora/Senhorita - uso profissional geral).',
      pairs: [
        { id: 't1', en: 'Mr. ("mís-ter")', emoji: '👨', phonetic: '/ˈmɪs.tər/', pt: 'Senhor (usado antes do nome ou sobrenome)', tipPt: 'Correto! Exemplo: "Mr. Smith" (Senhor Smith).' },
        { id: 't2', en: 'Mrs. ("mí-siz")', emoji: '👩', phonetic: '/ˈmɪs.ɪz/', pt: 'Senhora (usado antes do sobrenome de mulher casada)', tipPt: 'Exato! "Mrs." refere-se a uma mulher casada.' },
        { id: 't3', en: 'Miss ("mís")', emoji: '👩‍🏫', phonetic: '/mɪs/', pt: 'Senhorita (mulher solteira ou tratamento escolar)', tipPt: 'Perfeito! "Miss" é usado para mulheres solteiras ou professoras.' },
        { id: 't4', en: 'Ms. ("míz")', emoji: '👩‍💼', phonetic: '/mɪz/', pt: 'Senhora / Senhorita (formal para qualquer mulher)', tipPt: 'Excelente! "Ms." é muito usado no ambiente profissional pois independe do estado civil.' },
      ],
    },
    {
      conceptTitle: '2º • Pronomes de Tratamento Direto e Títulos (Sir, Ma\'am, Dr., Prof.)',
      conceptHeader: 'Quando falamos diretamente com alguém de forma respeitosa sem citar o nome da pessoa, usamos "Sir" (Senhor) e "Ma\'am" (Senhora). Para títulos profissionais ou acadêmicos antes do nome, usamos "Dr." (Doutor/Médico) e "Prof." (Professor universitário).',
      teacherAudioPt: '/audio/teacher/pronoun_2.wav',
      prompt: '🤝 Ligue cada Pronome de Tratamento direto ou título ao seu significado:',
      explanation: 'Sir (Senhor - sem nome), Ma\'am (Senhora - sem nome), Dr. (Doutor/Doutora), Prof. (Professor/Professora).',
      pairs: [
        { id: 't5', en: 'Sir ("sâr")', emoji: '🎩', phonetic: '/sɜːr/', pt: 'Senhor (tratamento direto sem dizer o nome)', tipPt: 'Correto! Exemplo: "Excuse me, Sir" (Com licença, Senhor).' },
        { id: 't6', en: 'Ma\'am ("mém")', emoji: '🌸', phonetic: '/mæm/', pt: 'Senhora (tratamento direto sem dizer o nome)', tipPt: 'Muito bem! Exemplo: "Thank you, Ma\'am" (Obrigado, Senhora).' },
        { id: 't7', en: 'Dr. ("dók-tor")', emoji: '🩺', phonetic: '/ˈdɑːk.tər/', pt: 'Doutor(a) / Médico(a)', tipPt: 'Exato! Usado antes do nome de médicos ou doutores.' },
        { id: 't8', en: 'Prof. ("pro-fé-sor")', emoji: '🎓', phonetic: '/prəˈfes.ər/', pt: 'Professor(a) (título acadêmico)', tipPt: 'Excelente! Você concluiu o estudo de Pronomes Pessoais e de Tratamento.' },
      ],
    },
  ],
};

const PRONOUN_MODULE_2 = {
  title: 'Lição de Pronomes II • Possessivos & Demonstrativos',
  subtitle: 'Módulo de Pronomes 2/8 (Após 6 de Vocabulário) • Explicação Didática + Pares Associativos',
  pedagogicalObjective: 'Dominar os Pronomes Possessivos (My, Your, His, Her, Our, Their, Mine, Yours) e os Pronomes Demonstrativos (This, That, These, Those).',
  icon: 'star',
  type: 'chest',
  theory: [
    '2ª Lição Exclusiva de Pronomes (após 6 módulos de vocabulário).',
    '3ª Parte — Pronomes Possessivos: indicam a quem pertence um objeto, pessoa ou lugar (My, Your, His, Her, Our, Their, Mine, Yours).',
    '4ª Parte — Pronomes Demonstrativos: indicam se algo está perto ou longe de quem fala, no singular ou no plural (This, That, These, Those).'
  ],
  boards: [
    {
      conceptTitle: '3º • Pronomes Possessivos Antes do Substantivo (My, Your, His, Her)',
      conceptHeader: 'Os Pronomes Possessivos Adjetivos vêm sempre antes do substantivo para indicar posse: "My" (Meu/Minha), "Your" (Seu/Sua), "His" (Dele — quando o dono é masculino) e "Her" (Dela — quando a dona é feminina).',
      teacherAudioPt: '/audio/teacher/pronoun_3.wav',
      prompt: '🤝 Conecte cada Pronome Possessivo ao seu equivalente em português:',
      explanation: 'My (Meu/Minha), Your (Seu/Sua), His (Dele), Her (Dela).',
      pairs: [
        { id: 'pos1', en: 'My ("mái")', emoji: '🔑', phonetic: '/maɪ/', pt: 'Meu / Minha / Meus / Minhas (ex: My house)', tipPt: 'Correto! "My" serve tanto para singular quanto para plural em português.' },
        { id: 'pos2', en: 'Your ("iór")', emoji: '📘', phonetic: '/jʊr/', pt: 'Seu / Sua / Seus / Suas (ex: Your book)', tipPt: 'Exato! "Your" indica que algo pertence a você ou a vocês.' },
        { id: 'pos3', en: 'His ("ríz")', emoji: '👨', phonetic: '/hɪz/', pt: 'Dele (ex: His car = O carro dele)', tipPt: 'Perfeito! "His" é usado quando o possuidor é um homem ou menino.' },
        { id: 'pos4', en: 'Her ("râr")', emoji: '👩', phonetic: '/hɜːr/', pt: 'Dela (ex: Her dress = O vestido dela)', tipPt: 'Muito bem! "Her" é usado quando a possuidora é uma mulher ou menina.' },
      ],
    },
    {
      conceptTitle: '3º • Pronomes Possessivos: Plural e Fim de Frase (Our, Their, Mine, Yours)',
      conceptHeader: 'Para posse coletiva antes do substantivo usamos "Our" (Nosso/Nossa) e "Their" (Deles/Delas). Já quando o pronome vem no final da frase, sem repetir o substantivo, usamos as formas substantivas "Mine" (o meu/a minha) e "Yours" (o seu/a sua).',
      teacherAudioPt: '/audio/teacher/pronoun_3.wav',
      prompt: '🤝 Associe os Pronomes Possessivos "Our, Their, Mine, Yours" aos seus pares:',
      explanation: 'Our (Nosso/Nossa), Their (Deles/Delas), Mine (O meu/A minha - final de frase), Yours (O seu/A sua - final de frase).',
      pairs: [
        { id: 'pos5', en: 'Our ("áu-er")', emoji: '🏡', phonetic: '/aʊər/', pt: 'Nosso / Nossa (usado antes do substantivo)', tipPt: 'Correto! Exemplo: "Our kitchen" (Nossa cozinha).' },
        { id: 'pos6', en: 'Their ("dér")', emoji: '👨‍👩‍👧‍👦', phonetic: '/ðer/', pt: 'Deles / Delas (usado antes do substantivo)', tipPt: 'Exato! Exemplo: "Their house" (A casa deles).' },
        { id: 'pos7', en: 'Mine ("máin")', emoji: '✨', phonetic: '/maɪn/', pt: 'O meu / A minha (usado sozinho no final da frase)', tipPt: 'Perfeito! Exemplo: "This key is mine" (Esta chave é minha).' },
        { id: 'pos8', en: 'Yours ("iórz")', emoji: '🌟', phonetic: '/jʊrz/', pt: 'O seu / A sua (usado sozinho no final da frase)', tipPt: 'Excelente! Exemplo: "The book is yours" (O livro é seu).' },
      ],
    },
    {
      conceptTitle: '4º • Pronomes Demonstrativos: Perto vs. Longe (This, That, These, Those)',
      conceptHeader: 'Os Pronomes Demonstrativos variam conforme a distância e a quantidade. Para o que está PERTO de quem fala: "This" (Este/Esta/Isto — singular) e "These" (Estes/Estas — plural). Para o que está LONGE: "That" (Aquele/Aquela/Aquilo — singular) e "Those" (Aqueles/Aquelas — plural).',
      teacherAudioPt: '/audio/teacher/pronoun_4.wav',
      prompt: '🤝 Conecte cada Pronome Demonstrativo à distância e número correspondentes:',
      explanation: 'This (1 perto), That (1 longe), These (vários perto), Those (vários longe).',
      pairs: [
        { id: 'dem1', en: 'This ("dís")', emoji: '👇', phonetic: '/ðɪs/', pt: 'Este / Esta / Isto (SINGULAR e PERTO)', tipPt: 'Correto! Usamos "This" para um único item próximo de nós.' },
        { id: 'dem2', en: 'That ("dét")', emoji: '👉', phonetic: '/ðæt/', pt: 'Aquele / Aquela / Aquilo (SINGULAR e LONGE)', tipPt: 'Exato! Usamos "That" para um único item distante de nós.' },
        { id: 'dem3', en: 'These ("díz")', emoji: '🤲', phonetic: '/ðiːz/', pt: 'Estes / Estas (PLURAL e PERTO)', tipPt: 'Perfeito! "These" é o plural de "This" (vários itens próximos).' },
        { id: 'dem4', en: 'Those ("dôuz")', emoji: '🔭', phonetic: '/ðoʊz/', pt: 'Aqueles / Aquelas (PLURAL e LONGE)', tipPt: 'Muito bem! "Those" é o plural de "That" (vários itens distantes).' },
      ],
    },
  ],
};

const PRONOUN_MODULE_3 = {
  title: 'Lição de Pronomes III • Reflexivos & Interrogativos',
  subtitle: 'Módulo de Pronomes 3/8 (Após 9 de Vocabulário) • Explicação Didática + Pares Associativos',
  pedagogicalObjective: 'Dominar os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Ourselves) e os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How).',
  icon: 'star',
  type: 'chest',
  theory: [
    '3ª Lição Exclusiva de Pronomes (após 9 módulos de vocabulário).',
    '5ª Parte — Pronomes Reflexivos: usados quando o sujeito faz e recebe a ação, ou para enfatizar que realizou a ação sozinho.',
    '6ª Parte — Pronomes Interrogativos (Question Words): usados para formular perguntas diretas sobre pessoas, coisas, lugares, tempo, motivo, posse e modo.'
  ],
  boards: [
    {
      conceptTitle: '5º • Pronomes Reflexivos (Myself, Yourself, Himself, Herself)',
      conceptHeader: 'Os Pronomes Reflexivos indicam que a ação recai sobre quem a pratica, ou destacam que alguém fez algo por conta própria: "Myself" (Eu mesmo / me), "Yourself" (Você mesmo / se), "Himself" (Ele mesmo) e "Herself" (Ela mesma).',
      teacherAudioPt: '/audio/teacher/pronoun_5.wav',
      prompt: '🤝 Conecte cada Pronome Reflexivo ao seu significado em português:',
      explanation: 'Myself (Eu mesmo), Yourself (Você mesmo), Himself (Ele mesmo), Herself (Ela mesma).',
      pairs: [
        { id: 'ref1', en: 'Myself ("mai-sélf")', emoji: '🪞', phonetic: '/maɪˈself/', pt: 'Eu mesmo(a) / a mim mesmo(a)', tipPt: 'Correto! Exemplo: "I see myself in the mirror" (Eu me vejo no espelho).' },
        { id: 'ref2', en: 'Yourself ("iór-sélf")', emoji: '🫵', phonetic: '/jʊrˈself/', pt: 'Você mesmo(a) / a si mesmo(a)', tipPt: 'Exato! Exemplo: "Take care of yourself" (Cuide de si mesmo).' },
        { id: 'ref3', en: 'Himself ("rim-sélf")', emoji: '👨', phonetic: '/hɪmˈself/', pt: 'Ele mesmo (masculino singular)', tipPt: 'Perfeito! Exemplo: "He cooked dinner himself" (Ele mesmo preparou o jantar).' },
        { id: 'ref4', en: 'Herself ("râr-sélf")', emoji: '👩', phonetic: '/hɜːrˈself/', pt: 'Ela mesma (feminino singular)', tipPt: 'Muito bem! Exemplo: "She fixed it herself" (Ela mesma consertou isso).' },
      ],
    },
    {
      conceptTitle: '6º • Pronomes Interrogativos I (Who, What, Where, When)',
      conceptHeader: 'Os Pronomes Interrogativos iniciam perguntas específicas: "Who" pergunta sobre pessoas (Quem?), "What" pergunta sobre coisas, ações ou informações (O quê? / Qual?), "Where" pergunta sobre lugares (Onde?) e "When" pergunta sobre tempo (Quando?).',
      teacherAudioPt: '/audio/teacher/pronoun_6.wav',
      prompt: '🤝 Conecte cada Pronome Interrogativo à sua função na pergunta:',
      explanation: 'Who? (Quem?), What? (O quê? / Qual?), Where? (Onde?), When? (Quando?).',
      pairs: [
        { id: 'int1', en: 'Who? ("rú")', emoji: '🧑', phonetic: '/huː/', pt: 'Quem? (usado para perguntar sobre PESSOAS)', tipPt: 'Correto! Exemplo: "Who is the teacher?" (Quem é o professor?).' },
        { id: 'int2', en: 'What? ("uót")', emoji: '❓', phonetic: '/wɑːt/', pt: 'O quê? / Qual? (para COISAS ou informações)', tipPt: 'Exato! Exemplo: "What is your name?" (Qual é o seu nome?).' },
        { id: 'int3', en: 'Where? ("uér")', emoji: '📍', phonetic: '/wer/', pt: 'Onde? (usado para perguntar sobre LUGARES)', tipPt: 'Perfeito! Exemplo: "Where is the station?" (Onde fica a estação?).' },
        { id: 'int4', en: 'When? ("uén")', emoji: '⏰', phonetic: '/wen/', pt: 'Quando? (usado para perguntar sobre TEMPO/HORA)', tipPt: 'Muito bem! Exemplo: "When is the meeting?" (Quando é a reunião?).' },
      ],
    },
    {
      conceptTitle: '6º • Pronomes Interrogativos II (Why, Whose, Which, How)',
      conceptHeader: 'Completando as palavras interrogativas: "Why" pergunta a razão ou motivo (Por quê?), "Whose" pergunta a quem pertence algo (De quem?), "Which" é usado para escolher entre opções definidas (Qual?) e "How" pergunta o modo ou estado (Como?).',
      teacherAudioPt: '/audio/teacher/pronoun_6.wav',
      prompt: '🤝 Associe os Pronomes Interrogativos "Why, Whose, Which, How" aos seus pares:',
      explanation: 'Why? (Por quê?), Whose? (De quem?), Which? (Qual - entre opções?), How? (Como?).',
      pairs: [
        { id: 'int5', en: 'Why? ("uái")', emoji: '🤔', phonetic: '/waɪ/', pt: 'Por quê? (pergunta a RAZÃO ou MOTIVO)', tipPt: 'Correto! E para responder "Porque", usamos "Because".' },
        { id: 'int6', en: 'Whose? ("rúz")', emoji: '👜', phonetic: '/huːz/', pt: 'De quem? (pergunta sobre POSSE / DONO)', tipPt: 'Exato! Exemplo: "Whose bag is this?" (De quem é esta bolsa?).' },
        { id: 'int7', en: 'Which? ("uítch")', emoji: '⚖️', phonetic: '/wɪtʃ/', pt: 'Qual? (usado para ESCOLHER entre opções dadas)', tipPt: 'Perfeito! Exemplo: "Which shirt do you prefer?" (Qual camisa você prefere?).' },
        { id: 'int8', en: 'How? ("ráu")', emoji: '🛠️', phonetic: '/haʊ/', pt: 'Como? (pergunta o MODO, meio ou estado)', tipPt: 'Excelente! Exemplo: "How are you today?" (Como você está hoje?).' },
      ],
    },
  ],
};

const PRONOUN_MODULE_4 = {
  title: 'Lição de Pronomes IV • Indefinidos & Relativos',
  subtitle: 'Módulo de Pronomes 4/8 (Após 12 de Vocabulário) • Explicação Didática + Pares Associativos',
  pedagogicalObjective: 'Dominar os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing) e os Pronomes Relativos (Who, Which, That, Where).',
  icon: 'star',
  type: 'chest',
  theory: [
    '4ª Lição Exclusiva de Pronomes (após 12 módulos de vocabulário).',
    '7ª Parte — Pronomes Indefinidos: referem-se a pessoas ou coisas de modo geral, sem identificar especificamente quem ou o quê.',
    '8ª Parte — Pronomes Relativos: conectam duas orações, referindo-se a uma pessoa, coisa ou lugar citado anteriormente.'
  ],
  boards: [
    {
      conceptTitle: '7º • Pronomes Indefinidos Afirmativos (Someone, Something, Everyone, Everything)',
      conceptHeader: 'Os Pronomes Indefinidos referem-se a pessoas (terminados em "-one" ou "-body") ou a coisas (terminados em "-thing") de maneira geral: "Someone" (Alguém), "Something" (Algo/Alguma coisa), "Everyone" (Todos/Todo mundo) e "Everything" (Tudo).',
      teacherAudioPt: '/audio/teacher/pronoun_7.wav',
      prompt: '🤝 Conecte cada Pronome Indefinido ao seu significado em português:',
      explanation: 'Someone (Alguém - pessoa), Something (Algo - coisa), Everyone (Todos - pessoas), Everything (Tudo - coisas).',
      pairs: [
        { id: 'ind1', en: 'Someone ("sâm-uân")', emoji: '🧑', phonetic: '/ˈsʌm.wʌn/', pt: 'Alguém (uma pessoa não especificada)', tipPt: 'Correto! Exemplo: "Someone is at the door" (Alguém está na porta).' },
        { id: 'ind2', en: 'Something ("sâm-thing")', emoji: '📦', phonetic: '/ˈsʌm.θɪŋ/', pt: 'Algo / Alguma coisa (um objeto ou ideia)', tipPt: 'Exato! Exemplo: "I need something to drink" (Preciso de algo para beber).' },
        { id: 'ind3', en: 'Everyone ("é-vri-uân")', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˈev.ri.wʌn/', pt: 'Todos / Todo mundo (todas as pessoas)', tipPt: 'Perfeito! Exemplo: "Everyone is ready" (Todos estão prontos).' },
        { id: 'ind4', en: 'Everything ("é-vri-thing")', emoji: '🌟', phonetic: '/ˈev.ri.θɪŋ/', pt: 'Tudo / Todas as coisas', tipPt: 'Muito bem! Exemplo: "Everything is clean" (Tudo está limpo).' },
      ],
    },
    {
      conceptTitle: '8º • Pronomes Relativos (Who, Which, That, Where)',
      conceptHeader: 'Os Pronomes Relativos conectam duas partes de uma frase para explicar melhor um termo anterior: usamos "Who" (que/quem) para PESSOAS, "Which" (que/o qual) para COISAS ou animais, "That" (que) tanto para pessoas quanto para coisas, e "Where" (onde) para LUGARES.',
      teacherAudioPt: '/audio/teacher/pronoun_8.wav',
      prompt: '🤝 Associe cada Pronome Relativo à sua regra de uso correta:',
      explanation: 'Who (relativo para pessoas), Which (relativo para coisas/animais), That (relativo para pessoas ou coisas), Where (relativo para lugares).',
      pairs: [
        { id: 'rel1', en: 'Who ("rú" - relativo)', emoji: '👩‍🏫', phonetic: '/huː/', pt: 'Que / Quem (retoma PESSOAS na frase)', tipPt: 'Correto! Exemplo: "The teacher who helped me" (A professora que me ajudou).' },
        { id: 'rel2', en: 'Which ("uítch" - relativo)', emoji: '📘', phonetic: '/wɪtʃ/', pt: 'Que / O qual (retoma COISAS ou animais)', tipPt: 'Exato! Exemplo: "The book which I read" (O livro que eu li).' },
        { id: 'rel3', en: 'That ("dét" - relativo)', emoji: '🔗', phonetic: '/ðæt/', pt: 'Que (curinga: retoma PESSOAS ou COISAS)', tipPt: 'Perfeito! "That" pode substituir tanto "Who" quanto "Which" em frases restritivas.' },
        { id: 'rel4', en: 'Where ("uér" - relativo)', emoji: '🏠', phonetic: '/wer/', pt: 'Onde / Em que (retoma LUGARES na frase)', tipPt: 'Excelente! Exemplo: "The house where I live" (A casa onde eu moro).' },
      ],
    },
  ],
};

const PRONOUN_MODULE_5 = {
  title: 'Lição de Pronomes V • Aplicando Pessoais & Tratamento',
  subtitle: 'Módulo de Pronomes 5/8 (Após 15 de Vocabulário) • Frases Práticas + Voz da Professora',
  pedagogicalObjective: 'Praticar frases completas do cotidiano aplicando os Pronomes Pessoais e de Tratamento junto ao vocabulário estudado.',
  icon: 'star',
  type: 'chest',
  theory: [
    '5ª Lição Exclusiva de Pronomes (após 15 módulos de vocabulário).',
    'Aplicação prática dos Pronomes Pessoais (I, He, She, It, We, They) e de Tratamento (Mr., Mrs., Sir, Ma\'am) em frases reais do dia a dia.'
  ],
  boards: [
    {
      conceptTitle: 'Aplicação • Pronomes Pessoais em Frases Completas',
      conceptHeader: 'Observe como os Pronomes Pessoais iniciam as frases no dia a dia: "I" (Eu), "He" (Ele), "She" (Ela) e "It" (usado para objetos como a chave ou a porta). Toque na frase em inglês para ouvir a pronúncia e conecte à tradução.',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Associe cada frase com Pronome Pessoal à sua tradução:',
      explanation: 'I am at home (Eu estou em casa), He is at the door (Ele está na porta), She is on the sofa (Ela está no sofá), It is a house key (É uma chave de casa).',
      pairs: [
        { id: 'p9', en: 'I am at home', emoji: '🏠', phonetic: '/aɪ æm æt hoʊm/', pt: 'Eu estou em casa', tipPt: 'Correto! "I" = "Eu".' },
        { id: 'p10', en: 'He is at the door', emoji: '🚪', phonetic: '/hiː ɪz æt ðə dɔːr/', pt: 'Ele está na porta', tipPt: 'Muito bem! "He" = "Ele".' },
        { id: 'p11', en: 'She is on the sofa', emoji: '🛋️', phonetic: '/ʃiː ɪz ɑːn ðə ˈsoʊ.fə/', pt: 'Ela está no sofá', tipPt: 'Perfeito! "She" = "Ela".' },
        { id: 'p12', en: 'It is a house key', emoji: '🔑', phonetic: '/ɪt ɪz ə haʊs kiː/', pt: 'É uma chave de casa (objeto = It)', tipPt: 'Exato! Objetos no singular usam o pronome "It".' },
      ],
    },
    {
      conceptTitle: 'Aplicação • Pronomes de Tratamento em Contexto',
      conceptHeader: 'Em situações formais ou profissionais, combinamos cumprimentos com os Pronomes de Tratamento: "Mr." antes de sobrenome masculino, "Mrs." antes de sobrenome feminino, e "Sir" ou "Ma\'am" no atendimento direto.',
      teacherAudioPt: '/audio/teacher/pronoun_2.wav',
      prompt: '🤝 Conecte cada frase formal em inglês ao seu significado em português:',
      explanation: 'Good morning, Mr. Silva (Bom dia, Sr. Silva), Hello, Mrs. Costa (Olá, Sra. Costa), Excuse me, Sir (Com licença, Senhor), Thank you, Ma\'am (Obrigado, Senhora).',
      pairs: [
        { id: 'pt1', en: 'Good morning, Mr. Silva', emoji: '👨', phonetic: '/ɡʊd ˈmɔːr.nɪŋ ˈmɪs.tər ˈsɪl.və/', pt: 'Bom dia, Senhor Silva', tipPt: 'Correto! "Mr." precede o nome ou sobrenome masculino.' },
        { id: 'pt2', en: 'Hello, Mrs. Costa', emoji: '👩', phonetic: '/həˈloʊ ˈmɪs.ɪz ˈkɑː.stə/', pt: 'Olá, Senhora Costa', tipPt: 'Exato! "Mrs." precede o sobrenome de mulher casada.' },
        { id: 'pt3', en: 'Excuse me, Sir', emoji: '🎩', phonetic: '/ɪkˈskjuːz miː sɜːr/', pt: 'Com licença, Senhor (sem citar o nome)', tipPt: 'Perfeito! "Sir" é usado diretamente sem o nome.' },
        { id: 'pt4', en: 'Thank you, Ma\'am', emoji: '🌸', phonetic: '/θæŋk juː mæm/', pt: 'Obrigado(a), Senhora (sem citar o nome)', tipPt: 'Excelente! "Ma\'am" é o tratamento direto feminino.' },
      ],
    },
  ],
};

const PRONOUN_MODULE_6 = {
  title: 'Lição de Pronomes VI • Aplicando Possessivos & Demonstrativos',
  subtitle: 'Módulo de Pronomes 6/8 (Após 18 de Vocabulário) • Frases Práticas + Voz da Professora',
  pedagogicalObjective: 'Praticar frases combinando Pronomes Possessivos (My, Your, Our, Mine) e Demonstrativos (This, That, These, Those).',
  icon: 'star',
  type: 'chest',
  theory: [
    '6ª Lição Exclusiva de Pronomes (após 18 módulos de vocabulário).',
    'Combinação prática de Demonstrativos (This, That, These, Those) com Possessivos (My, Your, Our, Mine) em frases de conversação.'
  ],
  boards: [
    {
      conceptTitle: 'Aplicação • Demonstrativos e Possessivos em Frases',
      conceptHeader: 'Veja como combinamos Demonstrativos e Possessivos na mesma frase para apontar e indicar posse ao mesmo tempo: "This is my..." (Este é o meu...), "That is your..." (Aquele é o seu...), "These... are mine" e "Those are our...".',
      teacherAudioPt: '/audio/teacher/pronoun_4.wav',
      prompt: '🤝 Conecte cada frase em inglês à sua tradução exata:',
      explanation: 'This is my car (Este é meu carro), That is your bus (Aquele é seu ônibus), These shoes are mine (Estes sapatos são meus), Those are our bags (Aquelas são nossas bolsas).',
      pairs: [
        { id: 'pd1', en: 'This is my car', emoji: '🚗', phonetic: '/ðɪs ɪz maɪ kɑːr/', pt: 'Este aqui é o meu carro (1 perto)', tipPt: 'Correto! "This" (este perto) + "my" (meu).' },
        { id: 'pd2', en: 'That is your bus', emoji: '🚌', phonetic: '/ðæt ɪz jʊr bʌs/', pt: 'Aquele lá é o seu ônibus (1 longe)', tipPt: 'Perfeito! "That" (aquele longe) + "your" (seu).' },
        { id: 'pd3', en: 'These shoes are mine', emoji: '👟', phonetic: '/ðiːz ʃuːz ɑːr maɪn/', pt: 'Estes sapatos aqui são meus (vários perto)', tipPt: 'Muito bem! "These" (estes perto) + "mine" (meus, no final).' },
        { id: 'pd4', en: 'Those are our bags', emoji: '👜', phonetic: '/ðoʊz ɑːr aʊər bæɡz/', pt: 'Aquelas lá são as nossas bolsas (várias longe)', tipPt: 'Excelente! "Those" (aquelas longe) + "our" (nossas).' },
      ],
    },
  ],
};

const PRONOUN_MODULE_7 = {
  title: 'Lição de Pronomes VII • Aplicando Reflexivos & Interrogativos',
  subtitle: 'Módulo de Pronomes 7/8 (Após 21 de Vocabulário) • Perguntas e Frases + Voz da Professora',
  pedagogicalObjective: 'Praticar perguntas completas com Who, Where, Whose, What e frases com Pronomes Reflexivos.',
  icon: 'star',
  type: 'chest',
  theory: [
    '7ª Lição Exclusiva de Pronomes (após 21 módulos de vocabulário).',
    'Prática de perguntas essenciais com Pronomes Interrogativos (Who, Where, Whose, What) no cotidiano.'
  ],
  boards: [
    {
      conceptTitle: 'Aplicação • Perguntas Essenciais com Interrogativos',
      conceptHeader: 'No inglês cotidiano, os Pronomes Interrogativos vêm no início da pergunta: "Who" para saber quem é a pessoa, "Where" para saber a localização, "Whose" para saber de quem é o objeto e "What" para saber o que é algo.',
      teacherAudioPt: '/audio/teacher/pronoun_6.wav',
      prompt: '🤝 Associe cada pergunta em inglês ao seu significado em português:',
      explanation: 'Who is at the door? (Quem está na porta?), Where is my shirt? (Onde está minha camisa?), Whose coat is this? (De quem é este casaco?), What is on the table? (O que está na mesa?).',
      pairs: [
        { id: 'pi1', en: 'Who is at the door?', emoji: '🚪', phonetic: '/huː ɪz æt ðə dɔːr/', pt: 'Quem está na porta?', tipPt: 'Correto! "Who" pergunta sobre pessoas.' },
        { id: 'pi2', en: 'Where is my shirt?', emoji: '👔', phonetic: '/wer ɪz maɪ ʃɜːrt/', pt: 'Onde está a minha camisa?', tipPt: 'Muito bem! "Where" pergunta sobre lugar ou localização.' },
        { id: 'pi3', en: 'Whose coat is this?', emoji: '🧥', phonetic: '/huːz koʊt ɪz ðɪs/', pt: 'De quem é este casaco?', tipPt: 'Perfeito! "Whose" pergunta a quem pertence o item.' },
        { id: 'pi4', en: 'What is on the table?', emoji: '🪑', phonetic: '/wɑːt ɪz ɑːn ðə ˈteɪ.bəl/', pt: 'O que está sobre a mesa?', tipPt: 'Excelente! "What" pergunta sobre objetos ou coisas.' },
      ],
    },
  ],
};

const PRONOUN_MODULE_8 = {
  title: 'Lição de Pronomes VIII • Aplicando Indefinidos & Relativos',
  subtitle: 'Módulo de Pronomes 8/8 (Após 24 de Vocabulário) • Revisão Final de Pronomes',
  pedagogicalObjective: 'Consolidar o uso de Pronomes Indefinidos (Nobody, Nothing, Anyone, Anything) e Pronomes Relativos (Who, Which, Where, That) em frases completas.',
  icon: 'star',
  type: 'boss',
  theory: [
    '8ª Lição Exclusiva de Pronomes (após 24 módulos de vocabulário).',
    'Revisão final conectando frases com Pronomes Indefinidos negativos/interrogativos e Pronomes Relativos.'
  ],
  boards: [
    {
      conceptTitle: '7º • Pronomes Indefinidos Negativos e em Perguntas (Nobody, Nothing, Anyone, Anything)',
      conceptHeader: 'Para expressar ausência total sem usar a palavra "not", empregamos "Nobody" (Ninguém) e "Nothing" (Nada). Já em frases interrogativas (perguntas), usamos "Anyone" (Alguém) para pessoas e "Anything" (Alguma coisa) para objetos.',
      teacherAudioPt: '/audio/teacher/pronoun_7.wav',
      prompt: '🤝 Conecte cada Pronome Indefinido ao seu uso e significado:',
      explanation: 'Nobody (Ninguém), Nothing (Nada), Anyone (Alguém em perguntas), Anything (Alguma coisa em perguntas).',
      pairs: [
        { id: 'ind5', en: 'Nobody ("nôu-bó-di")', emoji: '🚫', phonetic: '/ˈnoʊ.bɑː.di/', pt: 'Ninguém (ausência de pessoas)', tipPt: 'Correto! Exemplo: "Nobody is in the office" (Ninguém está no escritório).' },
        { id: 'ind6', en: 'Nothing ("nâ-thing")', emoji: '⭕', phonetic: '/ˈnʌθ.ɪŋ/', pt: 'Nada (ausência de coisas)', tipPt: 'Exato! Exemplo: "There is nothing in the box" (Não há nada na caixa).' },
        { id: 'ind7', en: 'Anyone? ("é-ni-uân")', emoji: '🙋', phonetic: '/ˈen.i.wʌn/', pt: 'Alguém? (usado em perguntas para pessoas)', tipPt: 'Perfeito! Exemplo: "Is anyone at home?" (Tem alguém em casa?).' },
        { id: 'ind8', en: 'Anything? ("é-ni-thing")', emoji: '🥤', phonetic: '/ˈen.i.θɪŋ/', pt: 'Alguma coisa? (usado em perguntas para coisas)', tipPt: 'Muito bem! Exemplo: "Do you need anything?" (Você precisa de alguma coisa?).' },
      ],
    },
    {
      conceptTitle: '8º • Aplicação de Pronomes Relativos em Frases (Who, Which, Where, That)',
      conceptHeader: 'Revise na prática como os Pronomes Relativos conectam as ideias na frase: "who" após pessoas (the teacher who...), "which" após objetos (the key which...), "where" após lugares (the house where...) e "that" como forma geral.',
      teacherAudioPt: '/audio/teacher/pronoun_8.wav',
      prompt: '🤝 Associe cada frase com Pronome Relativo ao seu significado em português:',
      explanation: 'The teacher who teaches (A professora que ensina), The key which opens (A chave que abre), The house where I live (A casa onde eu moro), The car that is red (O carro que é vermelho).',
      pairs: [
        { id: 'rel5', en: 'The teacher who teaches', emoji: '👩‍🏫', phonetic: '/ðə ˈtiː.tʃər huː ˈtiː.tʃɪz/', pt: 'A professora que ensina (pessoa = who)', tipPt: 'Correto! Para pessoas usamos o relativo "who".' },
        { id: 'rel6', en: 'The key which opens', emoji: '🔑', phonetic: '/ðə kiː wɪtʃ ˈoʊ.pənz/', pt: 'A chave que abre (objeto = which)', tipPt: 'Muito bem! Para objetos usamos o relativo "which".' },
        { id: 'rel7', en: 'The house where I live', emoji: '🏠', phonetic: '/ðə haʊs wer aɪ lɪv/', pt: 'A casa onde eu moro (lugar = where)', tipPt: 'Perfeito! Para lugares usamos o relativo "where".' },
        { id: 'rel8', en: 'The car that is red', emoji: '🚗', phonetic: '/ðə kɑːr ðæt ɪz red/', pt: 'O carro que é vermelho (geral = that)', tipPt: 'Excelente! Você concluiu todos os 8 módulos de Pronomes.' },
      ],
    },
  ],
};

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

// ============================================================================
// METODOLOGIA v1.18.0: 100% EXERCÍCIOS VISUAIS/AUDITIVOS DE 4 CARDS DE IMAGEM
// Com 8 palavras por módulo (entre 6 e 10 palavras, para não sobrecarregar o aluno)
// ============================================================================
function buildExercisesWithCooldown(theme, phaseNumber) {
  const items = theme.items;
  const n = items.length; // 8 words per module
  const phaseId = `w0-p${phaseNumber}`;

  const lastSeenAt = new Map();
  const usageCount = new Map();
  items.forEach((it) => usageCount.set(it.text, 0));

  const exercises = [];

  for (let idx = 0; idx < n; idx++) {
    const target = items[idx];

    const futureTargetSet = new Set();
    for (let f = idx + 1; f <= Math.min(n - 1, idx + 1); f++) {
      futureTargetSet.add(items[f].text);
    }

    let eligible = items.filter((cand) => {
      if (cand.text === target.text) return false;
      if (futureTargetSet.has(cand.text)) return false;
      const seen = lastSeenAt.get(cand.text);
      if (seen !== undefined && idx - seen < 2) return false;
      return true;
    });

    if (eligible.length < 3) {
      eligible = items.filter((cand) => cand.text !== target.text);
    }

    eligible.sort((a, b) => {
      const diff = (usageCount.get(a.text) || 0) - (usageCount.get(b.text) || 0);
      if (diff !== 0) return diff;
      const hashA = ((a.text.charCodeAt(0) * 31 + idx * 17) % 97);
      const hashB = ((b.text.charCodeAt(0) * 31 + idx * 17) % 97);
      return hashA - hashB;
    });

    const distractors = eligible.slice(0, 3);

    lastSeenAt.set(target.text, idx);
    distractors.forEach((d) => {
      lastSeenAt.set(d.text, idx);
      usageCount.set(d.text, (usageCount.get(d.text) || 0) + 1);
    });

    const shuffledDistractors = deterministicShuffle(distractors, phaseNumber * 131 + idx * 29 + 7);
    const visualSlotPattern = [1, 3, 2, 0, 2, 1, 3, 0];
    const targetSlot = visualSlotPattern[(idx + phaseNumber) % visualSlotPattern.length] % 4;
    const optionsList = [...shuffledDistractors];
    optionsList.splice(targetSlot, 0, target);

    const visualOptions = optionsList.map((opt) => ({
      text: opt.text,
      emoji: opt.emoji,
      label: opt.label,
      translationPt: opt.pt,
      simplePronunciation: opt.simplePronunciation,
      phonetic: opt.phonetic,
      exampleEn: opt.exampleEn,
      examplePt: opt.examplePt,
    }));

    let prompt = '🎧 Ouça a pronúncia e selecione a imagem correspondente:';
    let category = 'vocabulary';

    if (idx % 3 === 0) {
      prompt = '🎧 Ouça a pronúncia e selecione a imagem correspondente:';
      category = 'vocabulary';
    } else if (idx % 3 === 1) {
      prompt = '🎧 Escute a palavra em inglês e toque na imagem correta:';
      category = 'listening';
    } else {
      prompt = '🎧 Identifique pelo som qual é o item correto:';
      category = 'vocabulary';
    }

    exercises.push({
      id: `${phaseId}-e${idx + 1}`,
      type: 'image-choice',
      prompt,
      audioPhrase: target.text,
      visualEmoji: target.emoji,
      visualOptions,
      options: visualOptions.map((v) => v.text),
      correctAnswer: target.text,
      contextSentence: target.exampleEn,
      contextSentencePt: target.examplePt,
      explanation: `Exemplo: "${target.exampleEn}" — ${target.examplePt}`,
      phoneticHint: `"${target.simplePronunciation}" • ${target.phonetic}`,
      skillCategory: category,
    });
  }

  return exercises;
}

function makeVocabularyPhase(theme, phaseNumber) {
  const phaseId = `w0-p${phaseNumber}`;
  return {
    id: phaseId,
    worldId: 0,
    phaseNumber,
    themeId: theme.themeId,
    themeTitle: theme.themeTitle,
    frequencyLevel: theme.frequencyLevel,
    title: theme.title,
    subtitle: theme.subtitle,
    pedagogicalObjective: theme.pedagogicalObjective,
    type: 'lesson',
    icon: theme.icon,
    cefrLevel: 'A1',
    theorySummary: theme.theory,
    xpReward: 50,
    gemsReward: 20,
    exercises: buildExercisesWithCooldown(theme, phaseNumber),
  };
}

function makePronounPhase(pronounModule, phaseNumber) {
  const phaseId = `w0-p${phaseNumber}`;
  const exercises = pronounModule.boards.map((b, idx) => ({
    id: `${phaseId}-pron-${idx + 1}`,
    type: 'pair-match',
    conceptTitle: b.conceptTitle,
    conceptHeader: b.conceptHeader,
    teacherAudioPt: b.teacherAudioPt,
    prompt: b.prompt,
    pairs: b.pairs.map((p) => ({
      ...p,
      id: `${phaseId}-b${idx + 1}-${p.id}`,
    })),
    correctAnswer: 'ALL_PAIRS_MATCHED',
    explanation: b.explanation,
    skillCategory: 'grammar',
  }));

  return {
    id: phaseId,
    worldId: 0,
    phaseNumber,
    themeId: 'pronouns',
    themeTitle: 'Lição de Pronomes',
    frequencyLevel: '1 a cada 3 Módulos de Vocabulário',
    title: pronounModule.title,
    subtitle: pronounModule.subtitle,
    pedagogicalObjective: pronounModule.pedagogicalObjective,
    type: pronounModule.type || 'chest',
    icon: pronounModule.icon || 'star',
    cefrLevel: 'A1',
    theorySummary: pronounModule.theory,
    xpReward: pronounModule.type === 'boss' ? 100 : 70,
    gemsReward: pronounModule.type === 'boss' ? 40 : 30,
    exercises,
  };
}

// ============================================================================
// INTERCALAÇÃO EXATA DA v1.18.0: 1 MÓDULO DE PRONOMES A CADA 3 DE VOCABULÁRIO
// ============================================================================
const PRONOUN_SEQUENCE = [
  PRONOUN_MODULE_1,
  PRONOUN_MODULE_2,
  PRONOUN_MODULE_3,
  PRONOUN_MODULE_4,
  PRONOUN_MODULE_5,
  PRONOUN_MODULE_6,
  PRONOUN_MODULE_7,
  PRONOUN_MODULE_8,
];

const phases = [];
let phaseCounter = 1;
let pronounIndex = 0;

for (let i = 0; i < THEMATIC_MODULES.length; i++) {
  phases.push(makeVocabularyPhase(THEMATIC_MODULES[i], phaseCounter++));

  // A cada 3 módulos de vocabulário, insere 1 módulo exclusivo de Pronomes
  if ((i + 1) % 3 === 0 && pronounIndex < PRONOUN_SEQUENCE.length) {
    phases.push(makePronounPhase(PRONOUN_SEQUENCE[pronounIndex++], phaseCounter++));
  }
}

// Preserve verified images from v1.18.0 and add any new words from the 6 progressive themes
const mergedImagesMap = { ...existingImagesMap };
let updatedCount = 0;
for (const mod of THEMATIC_MODULES) {
  for (const item of mod.items) {
    if (!mergedImagesMap[item.text] || item.forceOverrideImage) {
      const q = encodeURIComponent(item.studioQuery);
      mergedImagesMap[item.text] = `https://tse1.mm.bing.net/th?q=${q}&w=500&p=0`;
      updatedCount++;
    }
  }
}

const fileContent = `import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

const imagesFileContent = `// Auto-generated specific & contextual photographs for all vocabulary items\nexport const REAL_VOCAB_IMAGES: Record<string, string> = ${JSON.stringify(mergedImagesMap, null, 2)};\n`;

fs.writeFileSync('src/data/world0Phases.ts', fileContent, 'utf-8');
fs.writeFileSync('src/data/realVocabImages.ts', imagesFileContent, 'utf-8');

console.log(`Successfully generated ${phases.length} phases (24 Vocabulary Modules across 6 Themes by Frequency, 8 words each + 8 Interleaved Pronoun Modules)!`);
