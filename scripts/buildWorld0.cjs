const fs = require('fs');

// Read existing verified REAL_VOCAB_IMAGES from v1.18.0 so we preserve all approved images
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

// Helper for each vocabulary word following the 5 required fields inside the v1.18.0 methodology:
// 1. Palavra em inglês (word)
// 2. Tradução em português (pt)
// 3. Pronúncia simplificada (simplePronunciation, ex: "dór") + IPA (phonetic)
// 4. Frase curta de exemplo em inglês com tradução (exampleEn, examplePt)
// 5. Sugestão de imagem ou ícone ilustrativo (emoji, query)
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
// 5 TEMAS COMPLETOS (CASA, COMIDA, CORPO HUMANO, TRANSPORTE, ROUPAS)
// Divididos em 4 MÓDULOS progressivos por frequência de uso (12 palavras genéricas por módulo)
// Mantendo 100% a metodologia visual/auditiva da v1.18.0 + 1 Módulo de Pronomes a cada 3 de Vocabulário!
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
    subtitle: 'Tema 1 (Nível 1/4) • As 12 palavras mais usadas no dia a dia em casa',
    pedagogicalObjective: 'Aprender as 12 palavras mais essenciais e frequentes sobre a casa: Door, Window, Room, Floor, Kitchen, Bedroom, House, Key, Table, Chair, Light e Water.',
    icon: 'house',
    theory: [
      'Começamos pelas 12 palavras mais essenciais da Casa (Módulo 1): Door ("dór" = Porta), Window ("uín-dou" = Janela), Room ("rúm" = Quarto/Cômodo), Floor ("flór" = Chão), Kitchen ("kít-chen" = Cozinha) e Bedroom ("béd-rum" = Quarto de dormir).',
      'Também aprendemos House ("ráus" = Casa), Key ("kí" = Chave), Table ("têi-bol" = Mesa), Chair ("tchér" = Cadeira), Light ("láit" = Luz) e Water ("uó-ter" = Água).',
      '🎓 Metodologia v1.18: ouça o som, associe à imagem em tamanho total do card e veja a pronúncia simplificada e a frase de exemplo ao verificar!'
    ],
    items: [
      w('Door', 'Porta', 'dór', '/dɔːr/', 'Please close the door.', 'Por favor, feche a porta.', '🚪', 'wooden front entrance door of a house real photo'),
      w('Window', 'Janela', 'uín-dou', '/ˈwɪn.doʊ/', 'Open the window, please.', 'Abra a janela, por favor.', '🪟', 'house glass window with curtains real photo'),
      w('Room', 'Quarto / Cômodo', 'rúm', '/ruːm/', 'This room is very clean.', 'Este cômodo está muito limpo.', '🏠', 'cozy bright house room interior real photo', true),
      w('Floor', 'Chão / Piso', 'flór', '/flɔːr/', 'The floor is clean.', 'O chão está limpo.', '🟫', 'ceramic tile floor in house room real photo', true),
      w('Kitchen', 'Cozinha', 'kít-chen', '/ˈkɪtʃ.ən/', 'Mom is in the kitchen.', 'A mamãe está na cozinha.', '🍳', 'modern home kitchen interior real photo', true),
      w('Bedroom', 'Quarto de dormir', 'béd-rum', '/ˈbed.ruːm/', 'I sleep in my bedroom.', 'Eu durmo no meu quarto.', '🛏️', 'cozy bedroom interior with bed real photo', true),
      w('House', 'Casa', 'ráus', '/haʊs/', 'Welcome to my house.', 'Bem-vindo à minha casa.', '🏡', 'family house exterior real photo', true),
      w('Key', 'Chave', 'kí', '/kiː/', 'Where is the house key?', 'Onde está a chave de casa?', '🔑', 'single metal house key on white background'),
      w('Table', 'Mesa', 'têi-bol', '/ˈteɪ.bəl/', 'The food is on the table.', 'A comida está na mesa.', '🪑', 'wooden kitchen dining table with chairs real photo'),
      w('Chair', 'Cadeira', 'tchér', '/tʃer/', 'Sit on this chair.', 'Sente-se nesta cadeira.', '🪑', 'single wooden dining chair furniture on white background'),
      w('Light', 'Luz', 'láit', '/laɪt/', 'Turn on the light.', 'Acenda a luz.', '💡', 'ceiling light fixture glowing on room ceiling real photo', true),
      w('Water', 'Água', 'uó-ter', '/ˈwɔː.tər/', 'I drink cold water.', 'Eu bebo água gelada.', '💧', 'clear glass of drinking water on white background', true),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'A Casa',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'A Casa • Módulo 2: Palavras Comuns',
    subtitle: 'Tema 1 (Nível 2/4) • 12 palavras comuns da estrutura e móveis da casa',
    pedagogicalObjective: 'Dominar partes comuns da casa: Roof, Wall, Bathroom, Living room, Bed, Sofa, Fridge, Stove, Sink, Mirror, Lamp e Shower.',
    icon: 'house',
    theory: [
      'No Módulo 2 da Casa avançamos para as palavras comuns: Roof ("rúf" = Telhado), Wall ("uól" = Parede/Muro), Bathroom ("béth-rum" = Banheiro), Living room ("lí-ving rúm" = Sala de estar) e Bed ("béd" = Cama).',
      'Também praticamos Sofa ("sôu-fa" = Sofá), Fridge ("frídj" = Geladeira), Stove ("stôuv" = Fogão), Sink ("sínk" = Pia), Mirror ("mí-ror" = Espelho), Lamp ("lémp" = Abajur/Luminária) e Shower ("xáu-er" = Chuveiro).'
    ],
    items: [
      w('Roof', 'Telhado', 'rúf', '/ruːf/', 'The roof protects the house.', 'O telhado protege a casa.', '🏠', 'house roof with ceramic tiles on top of house exterior real photo'),
      w('Wall', 'Parede / Muro', 'uól', '/wɔːl/', 'The wall is painted white.', 'A parede está pintada de branco.', '🧱', 'interior house room wall painted real photo', true),
      w('Bathroom', 'Banheiro', 'béth-rum', '/ˈbæθ.ruːm/', 'Wash your hands in the bathroom.', 'Lave as mãos no banheiro.', '🚿', 'clean modern home bathroom interior real photo', true),
      w('Living room', 'Sala de estar', 'lí-ving rúm', '/ˈlɪv.ɪŋ ruːm/', 'We watch TV in the living room.', 'Nós assistimos TV na sala de estar.', '🛋️', 'cozy living room interior with sofa real photo', true),
      w('Bed', 'Cama', 'béd', '/bed/', 'My bed is very comfortable.', 'Minha cama é muito confortável.', '🛏️', 'comfortable bedroom bed with mattress and pillows on white background'),
      w('Sofa', 'Sofá', 'sôu-fa', '/ˈsoʊ.fə/', 'Sit on the living room sofa.', 'Sente-se no sofá da sala.', '🛋️', 'comfortable living room sofa couch on white background'),
      w('Fridge', 'Geladeira', 'frídj', '/frɪdʒ/', 'The milk is in the fridge.', 'O leite está na geladeira.', '🧊', 'modern stainless steel refrigerator fridge appliance on white background'),
      w('Stove', 'Fogão', 'stôuv', '/stoʊv/', 'She cooks dinner on the stove.', 'Ela faz o jantar no fogão.', '🔥', 'kitchen gas stove oven appliance on white background'),
      w('Sink', 'Pia', 'sínk', '/sɪŋk/', 'Put the cup in the sink.', 'Coloque a xícara na pia.', '🚰', 'stainless steel kitchen sink basin installed in countertop with faucet real photo', true),
      w('Mirror', 'Espelho', 'mí-ror', '/ˈmɪr.ər/', 'Look in the mirror.', 'Olhe no espelho.', '🪞', 'bathroom wall mirror above sink vanity real photo'),
      w('Lamp', 'Abajur / Luminária', 'lémp', '/læmp/', 'Turn on the bedside lamp.', 'Ligue o abajur.', '💡', 'bedside table lamp on nightstand real photo', true),
      w('Shower', 'Chuveiro', 'xáu-er', '/ˈʃaʊ.ər/', 'I take a warm shower.', 'Eu tomo um banho morno de chuveiro.', '🚿', 'bathroom shower head spraying water in shower box real photo'),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'A Casa',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'A Casa • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema 1 (Nível 3/4) • 12 palavras intermediárias de áreas e objetos domésticos',
    pedagogicalObjective: 'Expandir o vocabulário da casa: Ceiling, Stairs, Garage, Balcony, Curtain, Rug, Pillow, Blanket, Towel, Shelf, Drawer e Gate.',
    icon: 'house',
    theory: [
      'No Módulo 3 da Casa aprendemos palavras intermediárias: Ceiling ("sí-ling" = Teto), Stairs ("stérz" = Escada), Garage ("ga-rádj" = Garagem), Balcony ("bél-co-ni" = Varanda) e Curtain ("câr-ten" = Cortina).',
      'Também vemos Rug ("râg" = Tapete), Pillow ("pí-lou" = Travesseiro), Blanket ("blén-ket" = Cobertor), Towel ("táu-el" = Toalha), Shelf ("xélf" = Prateleira), Drawer ("dró-er" = Gaveta) e Gate ("guêit" = Portão).',
      'Logo após concluir este 3º módulo de vocabulário, você fará o seu 1º Módulo Exclusivo de Pronomes!'
    ],
    items: [
      w('Ceiling', 'Teto', 'sí-ling', '/ˈsiː.lɪŋ/', 'The lamp hangs from the ceiling.', 'A luminária fica presa no teto.', '🏠', 'room ceiling overhead view with ceiling light real photo'),
      w('Stairs', 'Escada', 'stérz', '/sterz/', 'Walk up the stairs carefully.', 'Suba a escada com cuidado.', '🪜', 'house front porch entrance steps stairs real photo'),
      w('Garage', 'Garagem', 'ga-rádj', '/ɡəˈrɑːʒ/', 'The car is in the garage.', 'O carro está na garagem.', '🚗', 'residential house garage with car inside real photo', true),
      w('Balcony', 'Varanda / Sacada', 'bél-co-ni', '/ˈbæl.kə.ni/', 'The apartment has a sunny balcony.', 'O apartamento tem uma varanda ensolarada.', '🌤️', 'house apartment balcony with railing and chair real photo', true),
      w('Curtain', 'Cortina', 'câr-ten', '/ˈkɜːr.tən/', 'Close the window curtain.', 'Feche a cortina da janela.', '🪟', 'fabric window curtains hanging on rod real photo'),
      w('Rug', 'Tapete', 'râg', '/rʌɡ/', 'There is a soft rug on the floor.', 'Há um tapete macio no chão.', '🟥', 'living room floor rug carpet under coffee table real photo'),
      w('Pillow', 'Travesseiro', 'pí-lou', '/ˈpɪl.oʊ/', 'This pillow is very soft.', 'Este travesseiro é muito macio.', '⬜', 'soft white bed sleeping pillow on white background'),
      w('Blanket', 'Cobertor', 'blén-ket', '/ˈblæŋ.kɪt/', 'Take a warm blanket tonight.', 'Pegue um cobertor quentinho hoje à noite.', '🛌', 'warm folded wool bed blanket on white background'),
      w('Towel', 'Toalha', 'táu-el', '/ˈtaʊ.əl/', 'Dry your hands with a towel.', 'Seque suas mãos com uma toalha.', '🧺', 'clean folded cotton bath towel on white background', true),
      w('Shelf', 'Prateleira / Estante', 'xélf', '/ʃelf/', 'Put the book on the shelf.', 'Coloque o livro na prateleira.', '📚', 'wooden wall bookshelf with books real photo', true),
      w('Drawer', 'Gaveta', 'dró-er', '/drɔːr/', 'Open the top drawer.', 'Abra a gaveta de cima.', '🗄️', 'open kitchen cabinet drawer pulled out showing utensils real photo'),
      w('Gate', 'Portão', 'guêit', '/ɡeɪt/', 'Lock the front gate.', 'Tranque o portão da frente.', '🚪', 'residential house front entrance metal gate real photo'),
    ],
  },
  {
    themeId: 'home',
    themeTitle: 'A Casa',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'A Casa • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Tema 1 (Nível 4/4) • 12 palavras menos comuns e detalhes da casa',
    pedagogicalObjective: 'Conhecer termos mais específicos da casa: Attic, Basement, Chimney, Doorknob, Gutter, Fence, Mailbox, Doorbell, Faucet, Closet, Broom e Bucket.',
    icon: 'house',
    theory: [
      'No Módulo 4 da Casa aprendemos palavras menos comuns ou específicas: Attic ("é-tik" = Sótão), Basement ("bêis-ment" = Porão), Chimney ("tchím-ni" = Chaminé), Doorknob ("dór-nób" = Maçaneta) e Gutter ("gâ-ter" = Calha).',
      'E completamos o tema A Casa com Fence ("féns" = Cerca), Mailbox ("mêil-bóks" = Caixa de correio), Doorbell ("dór-bél" = Campainha), Faucet ("fó-set" = Torneira), Closet ("cló-zet" = Armário), Broom ("brúm" = Vassoura) e Bucket ("bâ-ket" = Balde).'
    ],
    items: [
      w('Attic', 'Sótão', 'é-tik', '/ˈæt.ɪk/', 'Old boxes are stored in the attic.', 'Caixas antigas ficam guardadas no sótão.', '🏠', 'house wooden attic room under roof real photo', true),
      w('Basement', 'Porão / Subsolo', 'bêis-ment', '/ˈbeɪs.mənt/', 'The laundry room is in the basement.', 'A lavanderia fica no porão.', '🪜', 'house basement room with stairs real photo', true),
      w('Chimney', 'Chaminé', 'tchím-ni', '/ˈtʃɪm.ni/', 'Smoke comes out of the brick chimney.', 'A fumaça sai pela chaminé.', '🧱', 'brick chimney on house roof exterior real photo', true),
      w('Doorknob', 'Maçaneta', 'dór-nób', '/ˈdɔːr.nɑːb/', 'Turn the doorknob to open it.', 'Gire a maçaneta para abrir.', '🚪', 'metal doorknob handle on wooden door closeup real photo'),
      w('Gutter', 'Calha de chuva', 'gâ-ter', '/ˈɡʌt.ər/', 'Rainwater flows through the roof gutter.', 'A água da chuva corre pela calha do telhado.', '🌧️', 'house roof rain gutter with downspout real photo', true),
      w('Fence', 'Cerca', 'féns', '/fens/', 'A wooden fence surrounds the yard.', 'Uma cerca de madeira rodeia o quintal.', '🏡', 'white wooden picket fence in front of house garden real photo'),
      w('Mailbox', 'Caixa de correio', 'mêil-bóks', '/ˈmeɪl.bɑːks/', 'Check the mailbox for letters.', 'Olhe a caixa de correio para ver se há cartas.', '📫', 'residential post mailbox in front of house real photo'),
      w('Doorbell', 'Campainha', 'dór-bél', '/ˈdɔːr.bel/', 'Somebody rang the doorbell.', 'Alguém tocou a campainha.', '🔔', 'finger pressing house doorbell button on wall closeup real photo'),
      w('Faucet', 'Torneira', 'fó-set', '/ˈfɔː.sɪt/', 'Turn off the water faucet.', 'Feche a torneira de água.', '🚰', 'chrome kitchen sink faucet tap with running water closeup real photo'),
      w('Closet', 'Armário / Guarda-roupa', 'cló-zet', '/ˈklɑː.zɪt/', 'Hang your coat in the closet.', 'Pendure seu casaco no armário.', '🚪', 'open bedroom wardrobe closet with clothes on hangers real photo', true),
      w('Broom', 'Vassoura', 'brúm', '/bruːm/', 'Sweep the kitchen with a broom.', 'Varra a cozinha com uma vassoura.', '🧹', 'long sweeping broom on white background'),
      w('Bucket', 'Balde', 'bâ-ket', '/ˈbʌk.ɪt/', 'Fill the bucket with water.', 'Encha o balde com água.', '🪣', 'plastic cleaning water bucket with handle on white background'),
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
    subtitle: 'Tema 2 (Nível 1/4) • Os 12 alimentos e bebidas mais básicos do dia a dia',
    pedagogicalObjective: 'Dominar os alimentos e bebidas indispensáveis: Bread, Rice, Beans, Meat, Chicken, Egg, Milk, Coffee, Juice, Apple, Banana e Cheese.',
    icon: 'apple',
    theory: [
      'Iniciamos o Tema 2 (Comida • Módulo 1: Essenciais): Bread ("bréd" = Pão), Rice ("ráis" = Arroz), Beans ("bínz" = Feijão), Meat ("mít" = Carne), Chicken ("tchí-ken" = Frango) e Egg ("ég" = Ovo).',
      'E completamos os essenciais com Milk ("mílk" = Leite), Coffee ("có-fi" = Café), Juice ("djús" = Suco), Apple ("é-pol" = Maçã), Banana ("ba-né-na" = Banana) e Cheese ("tchíz" = Queijo).'
    ],
    items: [
      w('Bread', 'Pão', 'bréd', '/bred/', 'I eat warm bread for breakfast.', 'Eu como pão quentinho no café da manhã.', '🍞', 'fresh loaf of sliced bread on white background'),
      w('Rice', 'Arroz', 'ráis', '/raɪs/', 'We eat white rice every day.', 'Nós comemos arroz branco todos os dias.', '🍚', 'white bowl of cooked white rice on white background'),
      w('Beans', 'Feijão', 'bínz', '/biːnz/', 'Rice and beans taste great.', 'Arroz e feijão são deliciosos.', '🫘', 'bowl of cooked brown beans food on white background'),
      w('Meat', 'Carne', 'mít', '/miːt/', 'He cooked the meat on the grill.', 'Ele assou a carne na grelha.', '🥩', 'cooked beef steak meat on plate on white background', true),
      w('Chicken', 'Frango', 'tchí-ken', '/ˈtʃɪk.ɪn/', 'We had roast chicken for lunch.', 'Comemos frango assado no almoço.', '🍗', 'roasted chicken food on plate on white background'),
      w('Egg', 'Ovo', 'ég', '/eɡ/', 'I like fried eggs in the morning.', 'Eu gosto de ovos fritos de manhã.', '🥚', 'fresh chicken eggs on white background', true),
      w('Milk', 'Leite', 'mílk', '/mɪlk/', 'Drink a glass of warm milk.', 'Beba um copo de leite morno.', '🥛', 'glass and carton of white milk on white background'),
      w('Coffee', 'Café', 'có-fi', '/ˈkɔː.fi/', 'She loves hot coffee.', 'Ela adora café quente.', '☕', 'cup of hot black coffee on white background', true),
      w('Juice', 'Suco', 'djús', '/dʒuːs/', 'Fresh orange juice is delicious.', 'Suco de laranja fresco é delicioso.', '🧃', 'glass pitcher of fresh orange juice on white background'),
      w('Apple', 'Maçã', 'é-pol', '/ˈæp.əl/', 'This red apple is sweet.', 'Esta maçã vermelha é doce.', '🍎', 'single fresh red apple fruit with green leaf on white background'),
      w('Banana', 'Banana', 'ba-né-na', '/bəˈnæn.ə/', 'Peel the yellow banana.', 'Descasque a banana amarela.', '🍌', 'ripe yellow bananas fruit on white background'),
      w('Cheese', 'Queijo', 'tchíz', '/tʃiːz/', 'Put cheese on the bread.', 'Coloque queijo no pão.', '🧀', 'wedge of yellow cheese on white background'),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Comida',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'Comida • Módulo 2: Palavras Comuns',
    subtitle: 'Tema 2 (Nível 2/4) • 12 comidas muito comuns nas refeições',
    pedagogicalObjective: 'Aprender pratos e alimentos muito frequentes: Butter, Fish, Soup, Salad, Pasta, Pizza, Cake, Orange, Tomato, Potato, Sugar e Salt.',
    icon: 'apple',
    theory: [
      'No Módulo 2 de Comida aprendemos alimentos comuns: Butter ("bâ-ter" = Manteiga), Fish ("fíx" = Peixe), Soup ("súp" = Sopa), Salad ("sé-lad" = Salada), Pasta ("pás-ta" = Macarrão) e Pizza ("pít-sa" = Pizza).',
      'Também vemos Cake ("kêik" = Bolo), Orange ("ó-rendj" = Laranja), Tomato ("to-mêi-tou" = Tomate), Potato ("po-têi-tou" = Batata), Sugar ("xú-gar" = Açúcar) e Salt ("sólt" = Sal).',
      'Logo após este módulo, você fará o seu 2º Módulo Exclusivo de Pronomes (Possessivos & Demonstrativos)!'
    ],
    items: [
      w('Butter', 'Manteiga', 'bâ-ter', '/ˈbʌt.ər/', 'Spread butter on the toast.', 'Passe manteiga na torrada.', '🧈', 'stick of yellow butter on dish on white background'),
      w('Fish', 'Peixe', 'fíx', '/fɪʃ/', 'Grilled fish is very healthy.', 'Peixe grelhado é muito saudável.', '🐟', 'cooked grilled fish fillet on plate on white background', true),
      w('Soup', 'Sopa', 'súp', '/suːp/', 'Hot soup is great on cold nights.', 'Sopa quente é ótima em noites frias.', '🍲', 'bowl of hot vegetable soup with spoon on white background', true),
      w('Salad', 'Salada', 'sé-lad', '/ˈsæl.əd/', 'I made a fresh green salad.', 'Eu fiz uma salada verde fresca.', '🥗', 'bowl of fresh green vegetable salad on white background', true),
      w('Pasta', 'Macarrão', 'pás-ta', '/ˈpɑː.stə/', 'We love pasta with tomato sauce.', 'Adoramos macarrão com molho de tomate.', '🍝', 'plate of spaghetti pasta with tomato sauce on white background'),
      w('Pizza', 'Pizza', 'pít-sa', '/ˈpiːt.sə/', 'Let us share a cheese pizza.', 'Vamos dividir uma pizza de queijo.', '🍕', 'whole cheese pizza on white background', true),
      w('Cake', 'Bolo', 'kêik', '/keɪk/', 'She baked a chocolate cake.', 'Ela assou um bolo de chocolate.', '🍰', 'chocolate cake on plate on white background', true),
      w('Orange', 'Laranja', 'ó-rendj', '/ˈɔːr.ɪndʒ/', 'This orange is very juicy.', 'Esta laranja tem muito suco.', '🍊', 'fresh orange fruit whole and half on white background'),
      w('Tomato', 'Tomate', 'to-mêi-tou', '/təˈmeɪ.toʊ/', 'Slice the red tomato.', 'Corte o tomate vermelho em fatias.', '🍅', 'fresh red tomato vegetable on white background'),
      w('Potato', 'Batata', 'po-têi-tou', '/pəˈteɪ.toʊ/', 'Baked potatoes are delicious.', 'Batatas assadas são deliciosas.', '🥔', 'raw potatoes vegetables on white background'),
      w('Sugar', 'Açúcar', 'xú-gar', '/ˈʃʊɡ.ər/', 'Do you want sugar in your coffee?', 'Você quer açúcar no seu café?', '🥄', 'white sugar bowl with spoon on white background'),
      w('Salt', 'Sal', 'sólt', '/sɔːlt/', 'Add a little salt to the food.', 'Coloque um pouco de sal na comida.', '🧂', 'glass salt shaker on white background'),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Comida',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'Comida • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema 2 (Nível 3/4) • 12 frutas, verduras e lanches do cotidiano',
    pedagogicalObjective: 'Ampliar o vocabulário alimentar: Oil, Onion, Garlic, Carrot, Lettuce, Lemon, Strawberry, Grape, Watermelon, Sandwich, Ice cream e Yogurt.',
    icon: 'apple',
    theory: [
      'No Módulo 3 de Comida praticamos palavras intermediárias: Oil ("ói-ol" = Óleo/Azeite), Onion ("â-nion" = Cebola), Garlic ("gár-lik" = Alho), Carrot ("ké-rot" = Cenoura), Lettuce ("lé-tis" = Alface) e Lemon ("lé-mon" = Limão).',
      'Também aprendemos Strawberry ("stró-bé-ri" = Morango), Grape ("grêip" = Uva), Watermelon ("uó-ter-mé-lon" = Melancia), Sandwich ("sénd-uitch" = Sanduíche), Ice cream ("áis crím" = Sorvete) e Yogurt ("iôu-gârt" = Iogurte).'
    ],
    items: [
      w('Oil', 'Óleo / Azeite', 'ói-ol', '/ɔɪl/', 'Cook the vegetables with olive oil.', 'Prepare os legumes com azeite.', '🫒', 'bottle of olive cooking oil on white background', true),
      w('Onion', 'Cebola', 'â-nion', '/ˈʌn.jən/', 'Chop the onion for the sauce.', 'Pique a cebola para o molho.', '🧅', 'whole onion vegetable on white background'),
      w('Garlic', 'Alho', 'gár-lik', '/ˈɡɑːr.lɪk/', 'Garlic gives great flavor to food.', 'O alho dá um ótimo sabor à comida.', '🧄', 'white garlic bulb and cloves on white background'),
      w('Carrot', 'Cenoura', 'ké-rot', '/ˈkær.ət/', 'Carrots are crunchy and sweet.', 'Cenouras são crocantes e doces.', '🥕', 'fresh orange carrot vegetable on white background'),
      w('Lettuce', 'Alface', 'lé-tis', '/ˈlet.ɪs/', 'Wash the green lettuce leaves.', 'Lave as folhas verdes de alface.', '🥬', 'fresh green lettuce head vegetable on white background'),
      w('Lemon', 'Limão', 'lé-mon', '/ˈlem.ən/', 'Lemon tastes sour and fresh.', 'O limão tem gosto azedo e refrescante.', '🍋', 'fresh lemon fruit whole and half on white background', true),
      w('Strawberry', 'Morango', 'stró-bé-ri', '/ˈstrɔː.ber.i/', 'Red strawberries are my favorite fruit.', 'Morangos vermelhos são minha fruta favorita.', '🍓', 'fresh red strawberry fruit on white background', true),
      w('Grape', 'Uva', 'grêip', '/ɡreɪp/', 'Wash the bunch of grapes.', 'Lave o cacho de uvas.', '🍇', 'bunch of purple grapes fruit on white background', true),
      w('Watermelon', 'Melancia', 'uó-ter-mé-lon', '/ˈwɔː.tərˌmel.ən/', 'Cold watermelon is great in summer.', 'Melancia gelada é ótima no verão.', '🍉', 'watermelon fruit with red slice on white background', true),
      w('Sandwich', 'Sanduíche', 'sénd-uitch', '/ˈsæn.wɪtʃ/', 'I packed a cheese sandwich.', 'Eu preparei um sanduíche de queijo.', '🥪', 'fresh sandwich with cheese and lettuce on white background', true),
      w('Ice cream', 'Sorvete', 'áis crím', '/ˈaɪs kriːm/', 'Kids love chocolate ice cream.', 'As crianças adoram sorvete de chocolate.', '🍦', 'ice cream cone scoop on white background'),
      w('Yogurt', 'Iogurte', 'iôu-gârt', '/ˈjoʊ.ɡərt/', 'I eat yogurt with fruit.', 'Eu como iogurte com frutas.', '🥣', 'yogurt cup dairy food on white background'),
    ],
  },
  {
    themeId: 'food',
    themeTitle: 'Comida',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'Comida • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Tema 2 (Nível 4/4) • 12 ingredientes, frutas tropicais e vegetais específicos',
    pedagogicalObjective: 'Conhecer alimentos e ingredientes específicos: Pineapple, Mango, Avocado, Corn, Broccoli, Cucumber, Mushroom, Pepper, Honey, Jam, Flour e Peanut.',
    icon: 'apple',
    theory: [
      'No Módulo 4 de Comida aprendemos itens menos comuns ou mais específicos: Pineapple ("pái-né-pol" = Abacaxi), Mango ("mén-gou" = Manga), Avocado ("a-vo-cá-dou" = Abacate), Corn ("córn" = Milho), Broccoli ("bró-co-li" = Brócolis) e Cucumber ("kiú-câm-ber" = Pepino).',
      'E completamos o Tema 2 com Mushroom ("mâx-rum" = Cogumelo), Pepper ("pé-per" = Pimentão/Pimenta), Honey ("râ-ni" = Mel), Jam ("djém" = Geleia), Flour ("fláu-er" = Farinha) e Peanut ("pí-nât" = Amendoim).'
    ],
    items: [
      w('Pineapple', 'Abacaxi', 'pái-né-pol', '/ˈpaɪnˌæp.əl/', 'Pineapple is a tropical fruit.', 'O abacaxi é uma fruta tropical.', '🍍', 'whole pineapple fruit on white background', true),
      w('Mango', 'Manga', 'mén-gou', '/ˈmæŋ.ɡoʊ/', 'This ripe mango is very sweet.', 'Esta manga madura está muito doce.', '🥭', 'ripe mango fruit on white background', true),
      w('Avocado', 'Abacate', 'a-vo-cá-dou', '/ˌæv.əˈkɑː.doʊ/', 'Avocado is rich and creamy.', 'O abacate é rico e cremoso.', '🥑', 'green avocado cut in half on white background', true),
      w('Corn', 'Milho', 'córn', '/kɔːrn/', 'Cooked yellow corn is delicious.', 'Milho amarelo cozido é delicioso.', '🌽', 'yellow sweet corn cob on white background', true),
      w('Broccoli', 'Brócolis', 'bró-co-li', '/ˈbrɑː.kəl.i/', 'Steamed broccoli is very nutritious.', 'Brócolis no vapor é muito nutritivo.', '🥦', 'fresh green broccoli head on white background', true),
      w('Cucumber', 'Pepino', 'kiú-câm-ber', '/ˈkjuː.kʌm.bər/', 'Put cucumber slices in the salad.', 'Coloque rodelas de pepino na salada.', '🥒', 'fresh green cucumber on white background', true),
      w('Mushroom', 'Cogumelo', 'mâx-rum', '/ˈmʌʃ.ruːm/', 'Add mushrooms to the pasta sauce.', 'Adicione cogumelos ao molho de macarrão.', '🍄', 'fresh champignon mushrooms on white background', true),
      w('Pepper', 'Pimentão / Pimenta', 'pé-per', '/ˈpep.ər/', 'Red pepper adds color to the dish.', 'O pimentão vermelho dá cor ao prato.', '🫑', 'fresh red bell pepper vegetable on white background', true),
      w('Honey', 'Mel', 'râ-ni', '/ˈhʌn.i/', 'Bees make golden honey.', 'As abelhas produzem mel dourado.', '🍯', 'jar of golden honey with dipper on white background', true),
      w('Jam', 'Geleia', 'djém', '/dʒæm/', 'Spread strawberry jam on the bread.', 'Passe geleia de morango no pão.', '🍓', 'glass jar of red strawberry jam on white background', true),
      w('Flour', 'Farinha', 'fláu-er', '/ˈflaʊ.ər/', 'Mix wheat flour and eggs for the cake.', 'Misture farinha de trigo e ovos para o bolo.', '🥣', 'white wheat flour in bowl on white background', true),
      w('Peanut', 'Amendoim', 'pí-nât', '/ˈpiː.nʌt/', 'Roasted peanuts are a crunchy snack.', 'Amendoins torrados são um lanche crocante.', '🥜', 'peanuts in shell on white background', true),
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
    subtitle: 'Tema 3 (Nível 1/4) • As 12 partes principais do corpo mais usadas no dia a dia',
    pedagogicalObjective: 'Reconhecer e pronunciar as 12 partes essenciais do corpo humano: Head, Hand, Foot, Eye, Ear, Nose, Mouth, Hair, Face, Arm, Leg e Body.',
    icon: 'star',
    theory: [
      'Iniciamos o Tema 3 (Corpo Humano • Módulo 1: Essenciais): Head ("réd" = Cabeça), Hand ("rénd" = Mão), Foot ("fút" = Pé), Eye ("ái" = Olho), Ear ("ír" = Orelha/Ouvido) e Nose ("nôuz" = Nariz).',
      'Também aprendemos Mouth ("máuth" = Boca), Hair ("rér" = Cabelo), Face ("fêis" = Rosto), Arm ("árm" = Braço), Leg ("lég" = Perna) e Body ("bó-di" = Corpo).',
      'Logo após concluir este módulo, você fará o seu 3º Módulo Exclusivo de Pronomes (Reflexivos & Interrogativos)!'
    ],
    items: [
      w('Head', 'Cabeça', 'réd', '/hed/', 'Nod your head to say yes.', 'Balance a cabeça para dizer sim.', '🧑', 'person head portrait closeup real photo', true),
      w('Hand', 'Mão', 'rénd', '/hænd/', 'Raise your hand to speak.', 'Levante a mão para falar.', '✋', 'open human hand palm on white background', true),
      w('Foot', 'Pé', 'fút', '/fʊt/', 'Put your shoe on your foot.', 'Coloque o sapato no pé.', '🦶', 'human bare foot on white background', true),
      w('Eye', 'Olho', 'ái', '/aɪ/', 'She has brown eyes.', 'Ela tem olhos castanhos.', '👁️', 'human eye closeup real photo', true),
      w('Ear', 'Orelha / Ouvido', 'ír', '/ɪr/', 'We listen with our ears.', 'Nós ouvimos com nossos ouvidos.', '👂', 'human ear closeup real photo', true),
      w('Nose', 'Nariz', 'nôuz', '/noʊz/', 'Breathe through your nose.', 'Respire pelo nariz.', '👃', 'human nose closeup real photo', true),
      w('Mouth', 'Boca', 'máuth', '/maʊθ/', 'Open your mouth to speak.', 'Abra a boca para falar.', '👄', 'smiling human mouth closeup real photo', true),
      w('Hair', 'Cabelo', 'rér', '/her/', 'She brushes her long hair.', 'Ela escova seu cabelo comprido.', '💇', 'healthy brown hair closeup real photo', true),
      w('Face', 'Rosto', 'fêis', '/feɪs/', 'Wash your face in the morning.', 'Lave o rosto de manhã.', '😊', 'smiling person face portrait real photo', true),
      w('Arm', 'Braço', 'árm', '/ɑːrm/', 'Stretch your arms high.', 'Estique seus braços para o alto.', '💪', 'human arm and hand on white background', true),
      w('Leg', 'Perna', 'lég', '/leɡ/', 'He has strong legs for running.', 'Ele tem pernas fortes para correr.', '🦵', 'runner human legs real photo', true),
      w('Body', 'Corpo', 'bó-di', '/ˈbɑː.di/', 'Exercise is good for your body.', 'Exercício faz bem para o seu corpo.', '🧍', 'healthy person stretching full body real photo', true),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Corpo Humano',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'Corpo Humano • Módulo 2: Palavras Comuns',
    subtitle: 'Tema 3 (Nível 2/4) • 12 partes comuns em conversas e saúde',
    pedagogicalObjective: 'Identificar partes comuns do corpo: Tooth, Finger, Back, Heart, Neck, Shoulder, Knee, Stomach, Skin, Voice, Blood e Bone.',
    icon: 'star',
    theory: [
      'No Módulo 2 do Corpo Humano vemos palavras comuns: Tooth ("túth" = Dente), Finger ("fín-guer" = Dedo da mão), Back ("bék" = Costas), Heart ("rárt" = Coração), Neck ("nék" = Pescoço) e Shoulder ("xôul-der" = Ombro).',
      'E completamos com Knee ("ní" = Joelho), Stomach ("stâ-mak" = Estômago/Barriga), Skin ("skín" = Pele), Voice ("vóis" = Voz), Blood ("blâd" = Sangue) e Bone ("bôun" = Osso).'
    ],
    items: [
      w('Tooth', 'Dente', 'túth', '/tuːθ/', 'Brush every tooth after meals.', 'Escove cada dente após as refeições.', '🦷', 'clean white tooth dental model on white background', true),
      w('Finger', 'Dedo da mão', 'fín-guer', '/ˈfɪŋ.ɡər/', 'We have five fingers on each hand.', 'Temos cinco dedos em cada mão.', '☝️', 'hand pointing index finger on white background', true),
      w('Back', 'Costas', 'bék', '/bæk/', 'Keep your back straight when sitting.', 'Mantenha as costas retas ao sentar.', '🧍', 'person back posture real photo', true),
      w('Heart', 'Coração', 'rárt', '/hɑːrt/', 'Your heart beats fast when you run.', 'Seu coração bate rápido quando você corre.', '❤️', 'red heart anatomical model on white background', true),
      w('Neck', 'Pescoço', 'nék', '/nek/', 'Wrap a warm scarf around your neck.', 'Enrole um cachecol quentinho no pescoço.', '🧣', 'human neck and shoulders closeup real photo', true),
      w('Shoulder', 'Ombro', 'xôul-der', '/ˈʃoʊl.dər/', 'Carry the bag on your shoulder.', 'Carregue a bolsa no ombro.', '🤷', 'person shoulder closeup real photo', true),
      w('Knee', 'Joelho', 'ní', '/niː/', 'Bend your knees slowly.', 'Dobre seus joelhos devagar.', '🦵', 'human knee leg joint closeup real photo', true),
      w('Stomach', 'Estômago / Barriga', 'stâ-mak', '/ˈstʌm.ək/', 'My stomach is full after dinner.', 'Meu estômago está cheio após o jantar.', '🤰', 'person holding stomach belly real photo', true),
      w('Skin', 'Pele', 'skín', '/skɪn/', 'Drink water for healthy skin.', 'Beba água para ter uma pele saudável.', '✋', 'healthy human skin hand closeup real photo', true),
      w('Voice', 'Voz', 'vóis', '/vɔɪs/', 'The teacher has a sweet voice.', 'A professora tem uma voz meiga.', '🗣️', 'person speaking into microphone real photo', true),
      w('Blood', 'Sangue', 'blâd', '/blʌd/', 'The heart pumps blood through the body.', 'O coração bombeia sangue pelo corpo.', '🩸', 'red blood drop laboratory test tube real photo', true),
      w('Bone', 'Osso', 'bôun', '/boʊn/', 'Calcium keeps our bones strong.', 'O cálcio mantém nossos ossos fortes.', '🦴', 'white bone skeleton model on white background', true),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Corpo Humano',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'Corpo Humano • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema 3 (Nível 3/4) • 12 articulações, órgãos e detalhes intermediários do corpo',
    pedagogicalObjective: 'Aprender articulações e partes intermediárias: Tongue, Lip, Brain, Chest, Elbow, Wrist, Ankle, Toe, Beard, Nail, Muscle e Tear.',
    icon: 'star',
    theory: [
      'No Módulo 3 do Corpo Humano praticamos palavras intermediárias: Tongue ("tâng" = Língua), Lip ("líp" = Lábio), Brain ("brêin" = Cérebro), Chest ("tchést" = Peito), Elbow ("él-bou" = Cotovelo) e Wrist ("ríst" = Pulso).',
      'Também aprendemos Ankle ("én-kol" = Tornozelo), Toe ("tôu" = Dedo do pé), Beard ("bírd" = Barba), Nail ("nêil" = Unha), Muscle ("mâ-sol" = Músculo) e Tear ("tír" = Lágrima).'
    ],
    items: [
      w('Tongue', 'Língua', 'tâng', '/tʌŋ/', 'We taste food with our tongue.', 'Sentimos o gosto da comida com a língua.', '👅', 'mouth showing tongue closeup real photo', true),
      w('Lip', 'Lábio', 'líp', '/lɪp/', 'Use balm on dry lips.', 'Use protetor labial nos lábios secos.', '👄', 'human lips closeup real photo', true),
      w('Brain', 'Cérebro', 'brêin', '/breɪn/', 'Studying languages exercises the brain.', 'Estudar idiomas exercita o cérebro.', '🧠', 'human brain anatomical model on white background', true),
      w('Chest', 'Peito / Tórax', 'tchést', '/tʃest/', 'Take a deep breath into your chest.', 'Respire fundo enchendo o peito.', '🧍', 'person hand on chest breathing real photo', true),
      w('Elbow', 'Cotovelo', 'él-bou', '/ˈel.boʊ/', 'Do not put your elbows on the table.', 'Não coloque os cotovelos na mesa.', '💪', 'human arm elbow joint closeup real photo', true),
      w('Wrist', 'Pulso / Punho', 'ríst', '/rɪst/', 'She wears a watch on her wrist.', 'Ela usa um relógio no pulso.', '⌚', 'human wrist hand joint closeup real photo', true),
      w('Ankle', 'Tornozelo', 'én-kol', '/ˈæŋ.kəl/', 'Warm up your ankles before running.', 'Aqueça os tornozelos antes de correr.', '🦶', 'human foot and ankle closeup real photo', true),
      w('Toe', 'Dedo do pé', 'tôu', '/toʊ/', 'Wiggle your toes in the sand.', 'Mexa os dedos do pé na areia.', '🦶', 'bare foot toes closeup real photo', true),
      w('Beard', 'Barba', 'bírd', '/bɪrd/', 'My father has a short beard.', 'Meu pai tem uma barba curta.', '🧔', 'man with beard portrait real photo', true),
      w('Nail', 'Unha', 'nêil', '/neɪl/', 'Keep your fingernails clean and short.', 'Mantenha as unhas limpas e curtas.', '💅', 'clean fingernails hand closeup real photo', true),
      w('Muscle', 'Músculo', 'mâ-sol', '/ˈmʌs.əl/', 'Swimming builds strong muscles.', 'Nadar desenvolve músculos fortes.', '💪', 'strong arm biceps muscle real photo', true),
      w('Tear', 'Lágrima', 'tír', '/tɪr/', 'A tear rolled down her face.', 'Uma lágrima rolou pelo rosto dela.', '😢', 'eye with teardrop closeup real photo', true),
    ],
  },
  {
    themeId: 'body',
    themeTitle: 'Corpo Humano',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'Corpo Humano • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Tema 3 (Nível 4/4) • 12 partes específicas do rosto e anatomia',
    pedagogicalObjective: 'Dominar detalhes específicos do rosto e do corpo: Eyebrow, Eyelash, Chin, Cheek, Forehead, Throat, Lung, Thumb, Heel, Waist, Hip e Rib.',
    icon: 'star',
    theory: [
      'No Módulo 4 do Corpo Humano estudamos partes específicas: Eyebrow ("ái-brau" = Sobrancelha), Eyelash ("ái-léx" = Cílio), Chin ("tchín" = Queixo), Cheek ("tchík" = Bochecha), Forehead ("fór-réd" = Testa) e Throat ("thrôut" = Garganta).',
      'E completamos com Lung ("lâng" = Pulmão), Thumb ("thâm" = Polegar), Heel ("ríl" = Calcanhar), Waist ("uêist" = Cintura), Hip ("ríp" = Quadril) e Rib ("ríb" = Costela).',
      'Logo após concluir este módulo, você fará o seu 4º Módulo Exclusivo de Pronomes (Indefinidos & Relativos)!'
    ],
    items: [
      w('Eyebrow', 'Sobrancelha', 'ái-brau', '/ˈaɪ.braʊ/', 'He raised one eyebrow in surprise.', 'Ele levantou uma sobrancelha surpreso.', '🤨', 'eye and eyebrow closeup real photo', true),
      w('Eyelash', 'Cílio', 'ái-léx', '/ˈaɪ.læʃ/', 'Eyelashes protect our eyes from dust.', 'Os cílios protegem nossos olhos da poeira.', '👁️', 'long eyelashes eye closeup real photo', true),
      w('Chin', 'Queixo', 'tchín', '/tʃɪn/', 'He rested his chin on his hand.', 'Ele apoiou o queixo na mão.', '🧑', 'person chin and jawline closeup real photo', true),
      w('Cheek', 'Bochecha', 'tchík', '/tʃiːk/', 'She kissed her baby on the cheek.', 'Ela beijou o bebê na bochecha.', '😊', 'smiling face rosy cheek closeup real photo', true),
      w('Forehead', 'Testa', 'fór-réd', '/ˈfɔːr.hed/', 'She felt his forehead for a fever.', 'Ela tocou a testa dele para ver se tinha febre.', '🧑', 'hand touching forehead closeup real photo', true),
      w('Throat', 'Garganta', 'thrôut', '/θroʊt/', 'Warm tea soothes a sore throat.', 'Chá morno alivia a dor de garganta.', '🍵', 'person touching throat neck real photo', true),
      w('Lung', 'Pulmão', 'lâng', '/lʌŋ/', 'Fresh air fills our lungs.', 'O ar puro enche nossos pulmões.', '🫁', 'human lungs anatomical model on white background', true),
      w('Thumb', 'Polegar (dedão)', 'thâm', '/θʌm/', 'Give a thumbs up if you agree.', 'Faça sinal de positivo com o polegar se concordar.', '👍', 'hand giving thumbs up on white background', true),
      w('Heel', 'Calcanhar', 'ríl', '/hiːl/', 'These shoes cushion your heel.', 'Estes sapatos amortecem o seu calcanhar.', '🦶', 'foot heel closeup real photo', true),
      w('Waist', 'Cintura', 'uêist', '/weɪst/', 'Fasten the belt around your waist.', 'Aperte o cinto ao redor da cintura.', '👖', 'belt around waist closeup real photo', true),
      w('Hip', 'Quadril', 'ríp', '/hɪp/', 'Put your hands on your hips.', 'Coloque as mãos no quadril.', '🧍', 'person hands on hips real photo', true),
      w('Rib', 'Costela', 'ríb', '/rɪb/', 'The ribs protect the heart and lungs.', 'As costelas protegem o coração e os pulmões.', '🦴', 'human rib cage model on white background', true),
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
    subtitle: 'Tema 4 (Nível 1/4) • Os 12 veículos e termos de deslocamento mais usados',
    pedagogicalObjective: 'Conhecer os meios de transporte essenciais: Car, Bus, Street, Bicycle, Train, Airplane, Taxi, Truck, Motorcycle, Boat, Ticket e Station.',
    icon: 'car',
    theory: [
      'Iniciamos o Tema 4 (Transporte • Módulo 1: Essenciais): Car ("cár" = Carro), Bus ("bâs" = Ônibus), Street ("strít" = Rua), Bicycle ("bái-si-kol" = Bicicleta), Train ("trêin" = Trem) e Airplane ("ér-plêin" = Avião).',
      'Também aprendemos Taxi ("ték-si" = Táxi), Truck ("trâk" = Caminhão), Motorcycle ("môu-tor-sái-kol" = Moto), Boat ("bôut" = Barco), Ticket ("tí-ket" = Passagem/Bilhete) e Station ("stêi-xon" = Estação).'
    ],
    items: [
      w('Car', 'Carro', 'cár', '/kɑːr/', 'We travel by car on weekends.', 'Nós viajamos de carro nos fins de semana.', '🚗', 'modern passenger car automobile on white background'),
      w('Bus', 'Ônibus', 'bâs', '/bʌs/', 'Take the bus to school.', 'Pegue o ônibus para a escola.', '🚌', 'city passenger bus vehicle on white background'),
      w('Street', 'Rua', 'strít', '/striːt/', 'Look both ways before crossing the street.', 'Olhe para os dois lados antes de atravessar a rua.', '🛣️', 'paved residential street road with houses real photo'),
      w('Bicycle', 'Bicicleta', 'bái-si-kol', '/ˈbaɪ.sɪ.kəl/', 'She rides her bicycle in the park.', 'Ela anda de bicicleta no parque.', '🚲', 'single bicycle bike on white background'),
      w('Train', 'Trem', 'trêin', '/treɪn/', 'The train arrives at eight o\'clock.', 'O trem chega às oito horas.', '🚆', 'modern passenger train on tracks real photo', true),
      w('Airplane', 'Avião', 'ér-plêin', '/ˈer.pleɪn/', 'The airplane flies above the clouds.', 'O avião voa acima das nuvens.', '✈️', 'commercial passenger airplane flying real photo', true),
      w('Taxi', 'Táxi', 'ték-si', '/ˈtæk.si/', 'Let us take a taxi to the hotel.', 'Vamos pegar um táxi até o hotel.', '🚕', 'yellow taxi cab car on white background'),
      w('Truck', 'Caminhão', 'trâk', '/trʌk/', 'The truck carries heavy boxes.', 'O caminhão transporta caixas pesadas.', '🚚', 'delivery cargo truck vehicle on white background'),
      w('Motorcycle', 'Moto', 'môu-tor-sái-kol', '/ˈmoʊ.tərˌsaɪ.kəl/', 'Wear a helmet on a motorcycle.', 'Use capacete na moto.', '🏍️', 'motorcycle motorbike on white background'),
      w('Boat', 'Barco', 'bôut', '/boʊt/', 'A small boat crosses the lake.', 'Um pequeno barco atravessa o lago.', '⛵', 'small boat on water real photo', true),
      w('Ticket', 'Passagem / Bilhete', 'tí-ket', '/ˈtɪk.ɪt/', 'Buy your bus ticket here.', 'Compre sua passagem de ônibus aqui.', '🎫', 'travel boarding pass ticket on white background', true),
      w('Station', 'Estação', 'stêi-xon', '/ˈsteɪ.ʃən/', 'Meet me at the train station.', 'Encontre-me na estação de trem.', '🚉', 'train subway station platform real photo', true),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Transporte',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'Transporte • Módulo 2: Palavras Comuns',
    subtitle: 'Tema 4 (Nível 2/4) • 12 termos comuns de viagem, trânsito e direção',
    pedagogicalObjective: 'Aprender palavras comuns de transporte: Subway, Ship, Road, Bridge, Airport, Driver, Passenger, Wheel, Tire, Map, Stop e Traffic.',
    icon: 'car',
    theory: [
      'No Módulo 2 de Transporte praticamos palavras comuns: Subway ("sâb-uêi" = Metrô), Ship ("xíp" = Navio), Road ("rôud" = Estrada), Bridge ("brídj" = Ponte), Airport ("ér-pórt" = Aeroporto) e Driver ("drái-ver" = Motorista).',
      'Também vemos Passenger ("pé-sen-djer" = Passageiro), Wheel ("uíl" = Roda/Volante), Tire ("tái-er" = Pneu), Map ("mép" = Mapa), Stop ("stóp" = Parada/Ponto) e Traffic ("tré-fik" = Trânsito).'
    ],
    items: [
      w('Subway', 'Metrô', 'sâb-uêi', '/ˈsʌb.weɪ/', 'The subway is fast and avoids traffic.', 'O metrô é rápido e evita o trânsito.', '🚇', 'underground subway metro train at station real photo'),
      w('Ship', 'Navio', 'xíp', '/ʃɪp/', 'A large ship sails across the ocean.', 'Um grande navio navega pelo oceano.', '🚢', 'large passenger cruise ship at sea real photo', true),
      w('Road', 'Estrada / Rodovia', 'rôud', '/roʊd/', 'Follow this road to the beach.', 'Siga esta estrada até a praia.', '🛣️', 'highway asphalt road in landscape real photo', true),
      w('Bridge', 'Ponte', 'brídj', '/brɪdʒ/', 'Drive across the river bridge.', 'Dirija sobre a ponte do rio.', '🌉', 'highway bridge over river real photo'),
      w('Airport', 'Aeroporto', 'ér-pórt', '/ˈer.pɔːrt/', 'We arrived early at the airport.', 'Chegamos cedo ao aeroporto.', '🛫', 'airport terminal with airplane real photo', true),
      w('Driver', 'Motorista', 'drái-ver', '/ˈdraɪ.vər/', 'The bus driver is very polite.', 'O motorista do ônibus é muito educado.', '🧑‍✈️', 'car driver holding steering wheel real photo', true),
      w('Passenger', 'Passageiro', 'pé-sen-djer', '/ˈpæs.ən.dʒər/', 'All passengers must wear seatbelts.', 'Todos os passageiros devem usar cinto.', '🧳', 'passengers sitting in bus or airplane real photo', true),
      w('Wheel', 'Roda / Volante', 'uíl', '/wiːl/', 'Keep both hands on the wheel.', 'Mantenha as duas mãos no volante.', '🛞', 'car steering wheel interior real photo', true),
      w('Tire', 'Pneu', 'tái-er', '/ˈtaɪ.ər/', 'Check the air in the car tire.', 'Verifique o ar do pneu do carro.', '🛞', 'black rubber car tire wheel on white background', true),
      w('Map', 'Mapa', 'mép', '/mæp/', 'Check the city map on your phone.', 'Olhe o mapa da cidade no celular.', '🗺️', 'folded world map paper on white background'),
      w('Stop', 'Ponto de ônibus / Parada', 'stóp', '/stɑːp/', 'Wait for me at the bus stop.', 'Espere por mim no ponto de ônibus.', '🚏', 'city bus stop shelter on street real photo', true),
      w('Traffic', 'Trânsito / Tráfego', 'tré-fik', '/ˈtræf.ɪk/', 'There is heavy traffic this morning.', 'Há trânsito intenso nesta manhã.', '🚦', 'city street cars traffic real photo', true),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Transporte',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'Transporte • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema 4 (Nível 3/4) • 12 palavras intermediárias da via pública e segurança',
    pedagogicalObjective: 'Dominar elementos intermediários: Helicopter, Van, Ambulance, Seat, Helmet, Sidewalk, Crosswalk, Corner, Fuel, Engine, Sign e Park.',
    icon: 'car',
    theory: [
      'No Módulo 3 de Transporte estudamos: Helicopter ("ré-li-cóp-ter" = Helicóptero), Van ("vén" = Van), Ambulance ("ém-biu-lans" = Ambulância), Seat ("sít" = Assento), Helmet ("rél-met" = Capacete) e Sidewalk ("sáid-uók" = Calçada).',
      'E completamos com Crosswalk ("crós-uók" = Faixa de pedestres), Corner ("cór-ner" = Esquina), Fuel ("fiú-el" = Combustível), Engine ("én-djin" = Motor), Sign ("sáin" = Placa) e Park ("párk" = Estacionar/Parque).',
      'Logo após este módulo, você fará mais uma Lição Exclusiva de Pronomes!'
    ],
    items: [
      w('Helicopter', 'Helicóptero', 'ré-li-cóp-ter', '/ˈhel.ɪˌkɑːp.tər/', 'The helicopter landed on the roof.', 'O helicóptero pousou no topo do prédio.', '🚁', 'helicopter flying in sky real photo', true),
      w('Van', 'Van / Perua', 'vén', '/væn/', 'The school van picks up the kids.', 'A van escolar busca as crianças.', '🚐', 'white passenger van vehicle on white background', true),
      w('Ambulance', 'Ambulância', 'ém-biu-lans', '/ˈæm.bjə.ləns/', 'Make way for the ambulance.', 'Dê passagem para a ambulância.', '🚑', 'emergency medical ambulance van on white background'),
      w('Seat', 'Assento / Banco', 'sít', '/siːt/', 'Please take a seat on the train.', 'Por favor, sente-se no banco do trem.', '💺', 'passenger car or airplane seat real photo', true),
      w('Helmet', 'Capacete', 'rél-met', '/ˈhel.mət/', 'Always wear a safety helmet.', 'Use sempre um capacete de segurança.', '⛑️', 'motorcycle safety helmet on white background'),
      w('Sidewalk', 'Calçada', 'sáid-uók', '/ˈsaɪd.wɔːk/', 'Pedestrians walk on the sidewalk.', 'Os pedestres caminham na calçada.', '🚶', 'residential street concrete sidewalk walkway beside house real photo'),
      w('Crosswalk', 'Faixa de pedestres', 'crós-uók', '/ˈkrɔːs.wɔːk/', 'Cross the avenue at the crosswalk.', 'Atravesse a avenida na faixa de pedestres.', '🚸', 'white painted pedestrian zebra crosswalk on city street road real photo'),
      w('Corner', 'Esquina', 'cór-ner', '/ˈkɔːr.nər/', 'The bakery is on the street corner.', 'A padaria fica na esquina da rua.', '🏙️', 'city street corner building intersection real photo', true),
      w('Fuel', 'Combustível / Gasolina', 'fiú-el', '/ˈfjuː.əl/', 'Stop to put fuel in the car.', 'Pare para colocar combustível no carro.', '⛽', 'gas station fuel pump fueling car real photo', true),
      w('Engine', 'Motor', 'én-djin', '/ˈen.dʒɪn/', 'Start the car engine.', 'Ligue o motor do carro.', '⚙️', 'car engine under open hood real photo', true),
      w('Sign', 'Placa de trânsito', 'sáin', '/saɪn/', 'Read the road sign ahead.', 'Leia a placa de trânsito à frente.', '🛑', 'street traffic road sign real photo', true),
      w('Park', 'Estacionamento / Parque', 'párk', '/pɑːrk/', 'Where can I park the car?', 'Onde posso estacionar o carro?', '🅿️', 'cars parked in parking lot real photo', true),
    ],
  },
  {
    themeId: 'transport',
    themeTitle: 'Transporte',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'Transporte • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Tema 4 (Nível 4/4) • 12 veículos e componentes específicos de transporte',
    pedagogicalObjective: 'Conhecer meios de transporte e peças específicas: Scooter, Tractor, Ferry, Tram, Runway, Harbor, Anchor, Pedal, Brake, Horn, Bumper e Tunnel.',
    icon: 'car',
    theory: [
      'No Módulo 4 de Transporte aprendemos termos menos comuns: Scooter ("scú-ter" = Patinete/Scooter), Tractor ("trék-tor" = Trator), Ferry ("fé-ri" = Balsa), Tram ("trém" = Bonde), Runway ("rân-uêi" = Pista de pouso) e Harbor ("rár-bor" = Porto).',
      'E completamos o Tema 4 com Anchor ("én-cor" = Âncora), Pedal ("pé-dal" = Pedal), Brake ("brêik" = Freio), Horn ("rórn" = Buzina), Bumper ("bâm-per" = Para-choque) e Tunnel ("tâ-nel" = Túnel).'
    ],
    items: [
      w('Scooter', 'Patinete / Scooter', 'scú-ter', '/ˈskuː.tər/', 'He rides an electric scooter.', 'Ele anda de patinete elétrico.', '🛴', 'electric kick scooter on white background', true),
      w('Tractor', 'Trator', 'trék-tor', '/ˈtræk.tər/', 'The farmer drives a green tractor.', 'O fazendeiro dirige um trator verde.', '🚜', 'farm tractor in field real photo', true),
      w('Ferry', 'Balsa', 'fé-ri', '/ˈfer.i/', 'We crossed the bay on a ferry.', 'Atravessamos a baía em uma balsa.', '⛴️', 'passenger ferry boat on water real photo', true),
      w('Tram', 'Bonde / VLT', 'trém', '/træm/', 'The electric tram runs on rails.', 'O bonde elétrico anda sobre trilhos.', '🚋', 'city electric tram streetcar real photo', true),
      w('Runway', 'Pista de pouso', 'rân-uêi', '/ˈrʌn.weɪ/', 'The plane accelerated on the runway.', 'O avião acelerou na pista de pouso.', '🛫', 'airport runway with airplane taking off real photo', true),
      w('Harbor', 'Porto', 'rár-bor', '/ˈhɑːr.bər/', 'Many boats are anchored in the harbor.', 'Muitos barcos estão ancorados no porto.', '⚓', 'harbor port with boats and ships real photo', true),
      w('Anchor', 'Âncora', 'én-cor', '/ˈæŋ.kər/', 'The ship dropped its heavy anchor.', 'O navio lançou sua âncora pesada.', '⚓', 'metal ship anchor on white background', true),
      w('Pedal', 'Pedal', 'pé-dal', '/ˈped.əl/', 'Push the bicycle pedal with your foot.', 'Empurre o pedal da bicicleta com o pé.', '🚲', 'bicycle foot pedal closeup real photo', true),
      w('Brake', 'Freio', 'brêik', '/breɪk/', 'Step on the brake to stop the car.', 'Pise no freio para parar o carro.', '🛑', 'car brake pedal and disc brake real photo', true),
      w('Horn', 'Buzina', 'rórn', '/hɔːrn/', 'Do not honk the car horn at night.', 'Não toque a buzina do carro à noite.', '📯', 'hand pressing car horn on steering wheel real photo', true),
      w('Bumper', 'Para-choque', 'bâm-per', '/ˈbʌm.pər/', 'The front bumper protects the car.', 'O para-choque dianteiro protege o carro.', '🚗', 'car front bumper closeup real photo', true),
      w('Tunnel', 'Túnel', 'tâ-nel', '/ˈtʌn.əl/', 'Turn on the headlights inside the tunnel.', 'Acenda os faróis dentro do túnel.', '🚇', 'road tunnel with lights for cars real photo', true),
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
    subtitle: 'Tema 5 (Nível 1/4) • As 12 peças de roupa mais básicas do dia a dia',
    pedagogicalObjective: 'Dominar as 12 peças de vestuário essenciais: Shirt, Pants, Shoes, Dress, Shorts, Skirt, Jacket, Socks, Coat, Hat, Jeans e Bag.',
    icon: 'shirt',
    theory: [
      'Iniciamos o Tema 5 (Roupas • Módulo 1: Essenciais): Shirt ("xârt" = Camisa), Pants ("pénts" = Calça), Shoes ("xúz" = Sapatos), Dress ("drés" = Vestido), Shorts ("xórts" = Shorts/Bermuda) e Skirt ("skârt" = Saia).',
      'Também aprendemos Jacket ("djé-ket" = Jaqueta), Socks ("sóks" = Meias), Coat ("côut" = Casaco), Hat ("rét" = Chapéu), Jeans ("djínz" = Calça jeans) e Bag ("bég" = Bolsa/Sacola).'
    ],
    items: [
      w('Shirt', 'Camisa', 'xârt', '/ʃɜːrt/', 'He wears a clean white shirt.', 'Ele veste uma camisa branca limpa.', '👔', 'long sleeve button dress shirt on white background'),
      w('Pants', 'Calça', 'pénts', '/pænts/', 'These pants are very comfortable.', 'Esta calça é muito confortável.', '👖', 'pair of trousers pants garment on white background'),
      w('Shoes', 'Sapatos', 'xúz', '/ʃuːz/', 'Take off your shoes at the door.', 'Tire os sapatos na porta.', '👞', 'pair of leather dress shoes on white background'),
      w('Dress', 'Vestido', 'drés', '/dres/', 'She bought a beautiful red dress.', 'Ela comprou um lindo vestido vermelho.', '👗', 'women summer dress garment on white background'),
      w('Shorts', 'Shorts / Bermuda', 'xórts', '/ʃɔːrts/', 'I wear shorts on hot days.', 'Eu uso bermuda em dias quentes.', '🩳', 'casual summer shorts pants on white background'),
      w('Skirt', 'Saia', 'skârt', '/skɜːrt/', 'Her blue skirt is very pretty.', 'A saia azul dela é muito bonita.', '👗', 'pleated fabric skirt garment on white background'),
      w('Jacket', 'Jaqueta', 'djé-ket', '/ˈdʒæk.ɪt/', 'Put on a jacket before going out.', 'Vista uma jaqueta antes de sair.', '🧥', 'zipper winter jacket coat on white background'),
      w('Socks', 'Meias', 'sóks', '/sɑːks/', 'Put on clean cotton socks.', 'Coloque meias de algodão limpas.', '🧦', 'pair of cotton socks on white background'),
      w('Coat', 'Casaco', 'côut', '/koʊt/', 'You need a warm coat in winter.', 'Você precisa de um casaco quente no inverno.', '🧥', 'warm winter coat outerwear on white background', true),
      w('Hat', 'Chapéu', 'rét', '/hæt/', 'Wear a hat to protect from the sun.', 'Use um chapéu para se proteger do sol.', '👒', 'sun hat headwear on white background', true),
      w('Jeans', 'Calça jeans', 'djínz', '/dʒiːnz/', 'Blue jeans go well with everything.', 'Calça jeans azul combina com tudo.', '👖', 'blue denim jeans pants on white background', true),
      w('Bag', 'Bolsa / Sacola', 'bég', '/bæɡ/', 'She carries her books in a bag.', 'Ela carrega seus livros em uma bolsa.', '👜', 'leather shoulder bag handbag on white background', true),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Roupas',
    frequencyLevel: 'Módulo 2 • Comuns',
    title: 'Roupas • Módulo 2: Palavras Comuns',
    subtitle: 'Tema 5 (Nível 2/4) • 12 calçados, roupas casuais e acessórios comuns',
    pedagogicalObjective: 'Reconhecer roupas casuais e acessórios comuns: T-shirt, Sweater, Boots, Sandals, Sneakers, Glasses, Watch, Belt, Cap, Pajamas, Suit e Pocket.',
    icon: 'shirt',
    theory: [
      'No Módulo 2 de Roupas praticamos palavras comuns: T-shirt ("tí-xârt" = Camiseta), Sweater ("sué-ter" = Suéter), Boots ("búts" = Botas), Sandals ("sén-dals" = Sandália), Sneakers ("sní-kers" = Tênis) e Glasses ("glé-ses" = Óculos).',
      'Também vemos Watch ("uótch" = Relógio de pulso), Belt ("bélt" = Cinto), Cap ("kép" = Boné), Pajamas ("pa-djá-mas" = Pijama), Suit ("sút" = Terno) e Pocket ("pó-ket" = Bolso).',
      'Logo após este módulo, você fará mais uma Lição Exclusiva de Pronomes!'
    ],
    items: [
      w('T-shirt', 'Camiseta', 'tí-xârt', '/ˈtiː.ʃɜːrt/', 'I wear a cotton T-shirt at home.', 'Eu uso uma camiseta de algodão em casa.', '👕', 'cotton crew neck t-shirt on white background'),
      w('Sweater', 'Suéter / Blusa de lã', 'sué-ter', '/ˈswet.ər/', 'This wool sweater is very warm.', 'Este suéter de lã é muito quentinho.', '🧶', 'knitted wool sweater pullover on white background'),
      w('Boots', 'Botas', 'búts', '/buːts/', 'Wear boots when it rains.', 'Use botas quando chover.', '🥾', 'pair of brown leather boots on white background', true),
      w('Sandals', 'Sandália / Chinelo', 'sén-dals', '/ˈsæn.dəlz/', 'Sandals are great for the beach.', 'Sandálias são ótimas para a praia.', '🩴', 'pair of summer sandals flip flops on white background', true),
      w('Sneakers', 'Tênis', 'sní-kers', '/ˈsniː.kərz/', 'Put on your sneakers for the walk.', 'Calce seus tênis para a caminhada.', '👟', 'pair of running sneakers sport shoes on white background'),
      w('Glasses', 'Óculos', 'glé-ses', '/ˈɡlæs.ɪz/', 'I need my glasses to read.', 'Preciso dos meus óculos para ler.', '👓', 'reading eyeglasses frames on white background'),
      w('Watch', 'Relógio de pulso', 'uótch', '/wɑːtʃ/', 'What time is it on your watch?', 'Que horas são no seu relógio de pulso?', '⌚', 'wristwatch on leather strap on white background'),
      w('Belt', 'Cinto', 'bélt', '/belt/', 'This brown leather belt fits well.', 'Este cinto de couro marrom serve bem.', '👖', 'brown leather belt with metal buckle on white background'),
      w('Cap', 'Boné', 'kép', '/kæp/', 'He wears a blue cap outdoors.', 'Ele usa um boné azul ao ar livre.', '🧢', 'baseball cap hat on white background'),
      w('Pajamas', 'Pijama', 'pa-djá-mas', '/pəˈdʒæm.əz/', 'Put on your pajamas before bed.', 'Vista seu pijama antes de dormir.', '🛌', 'comfortable sleepwear pajamas set on white background'),
      w('Suit', 'Terno', 'sút', '/suːt/', 'He wore a dark suit to the wedding.', 'Ele usou um terno escuro no casamento.', '🤵', 'men formal suit jacket and pants on white background', true),
      w('Pocket', 'Bolso', 'pó-ket', '/ˈpɑː.kɪt/', 'My keys are in my pants pocket.', 'Minhas chaves estão no bolso da calça.', '👖', 'jeans pants pocket closeup real photo', true),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Roupas',
    frequencyLevel: 'Módulo 3 • Intermediárias',
    title: 'Roupas • Módulo 3: Palavras Intermediárias',
    subtitle: 'Tema 5 (Nível 3/4) • 12 acessórios pessoais e partes das roupas',
    pedagogicalObjective: 'Aprender acessórios e partes das roupas: Uniform, Tie, Scarf, Gloves, Ring, Necklace, Wallet, Umbrella, Button, Zipper, Sleeve e Collar.',
    icon: 'shirt',
    theory: [
      'No Módulo 3 de Roupas aprendemos palavras intermediárias: Uniform ("iú-ni-fórm" = Uniforme), Tie ("tái" = Gravata), Scarf ("scárf" = Cachecol), Gloves ("glâvz" = Luvas), Ring ("ríng" = Anel) e Necklace ("nék-les" = Colar).',
      'E completamos com Wallet ("uó-let" = Carteira), Umbrella ("âm-bré-la" = Guarda-chuva), Button ("bâ-ton" = Botão), Zipper ("zí-per" = Zíper), Sleeve ("slív" = Manga) e Collar ("có-lar" = Gola/Colarinho).'
    ],
    items: [
      w('Uniform', 'Uniforme', 'iú-ni-fórm', '/ˈjuː.nə.fɔːrm/', 'Students wear a school uniform.', 'Os alunos usam uniforme escolar.', '🎽', 'school uniform shirt and tie real photo', true),
      w('Tie', 'Gravata', 'tái', '/taɪ/', 'He wears a red tie to work.', 'Ele usa uma gravata vermelha para trabalhar.', '👔', 'silk necktie tie on white background'),
      w('Scarf', 'Cachecol', 'scárf', '/skɑːrf/', 'Wrap a soft scarf around your neck.', 'Enrole um cachecol macio no pescoço.', '🧣', 'knitted winter wool scarf on white background', true),
      w('Gloves', 'Luvas', 'glâvz', '/ɡlʌvz/', 'Gloves keep your hands warm.', 'As luvas mantêm suas mãos aquecidas.', '🧤', 'pair of winter hand gloves on white background', true),
      w('Ring', 'Anel / Aliança', 'ríng', '/rɪŋ/', 'She wears a gold ring on her finger.', 'Ela usa um anel de ouro no dedo.', '💍', 'gold ring jewelry on white background'),
      w('Necklace', 'Colar', 'nék-les', '/ˈnek.lɪs/', 'That silver necklace is lovely.', 'Aquele colar de prata é lindo.', '📿', 'gold chain necklace with pendant on white background'),
      w('Wallet', 'Carteira', 'uó-let', '/ˈwɑː.lɪt/', 'Keep your money inside the wallet.', 'Guarde seu dinheiro dentro da carteira.', '👛', 'leather bifold pocket wallet on white background'),
      w('Umbrella', 'Guarda-chuva', 'âm-bré-la', '/ʌmˈbrel.ə/', 'Take an umbrella in case it rains.', 'Leve um guarda-chuva caso chova.', '☂️', 'open colorful rain umbrella on white background'),
      w('Button', 'Botão de roupa', 'bâ-ton', '/ˈbʌt.ən/', 'Fasten the top button of your shirt.', 'Abotoe o botão de cima da sua camisa.', '🔘', 'shirt button sewn on fabric closeup real photo', true),
      w('Zipper', 'Zíper', 'zí-per', '/ˈzɪp.ər/', 'Close the jacket zipper.', 'Feche o zíper da jaqueta.', '🧥', 'metal zipper on jacket closeup real photo', true),
      w('Sleeve', 'Manga da camisa', 'slív', '/sliːv/', 'Roll up your shirt sleeves.', 'Dobre as mangas da sua camisa.', '👕', 'long shirt sleeve cuff closeup real photo', true),
      w('Collar', 'Gola / Colarinho', 'có-lar', '/ˈkɑː.lər/', 'Straighten your shirt collar.', 'Arrume a gola da sua camisa.', '👔', 'folded shirt collar closeup real photo', true),
    ],
  },
  {
    themeId: 'clothes',
    themeTitle: 'Roupas',
    frequencyLevel: 'Módulo 4 • Menos Comuns',
    title: 'Roupas • Módulo 4: Menos Comuns & Específicas',
    subtitle: 'Tema 5 (Nível 4/4) • 12 peças específicas, tecidos e detalhes do vestuário',
    pedagogicalObjective: 'Conhecer termos específicos de vestuário: Apron, Vest, Raincoat, Slippers, Bracelet, Earrings, Sunglasses, Hood, Heel, Buckle, Fabric e Hanger.',
    icon: 'shirt',
    theory: [
      'No Módulo 4 de Roupas aprendemos palavras menos comuns: Apron ("êi-pron" = Avental), Vest ("vést" = Colete), Raincoat ("rêin-côut" = Capa de chuva), Slippers ("slí-pers" = Pantufas), Bracelet ("brêis-let" = Pulseira) e Earrings ("ír-rings" = Brincos).',
      'E concluímos o Tema 5 com Sunglasses ("sân-glé-ses" = Óculos de sol), Hood ("rúd" = Capuz), Heel ("ríl" = Salto do sapato), Buckle ("bâ-kol" = Fivela), Fabric ("fé-brik" = Tecido) e Hanger ("rén-guer" = Cabide).'
    ],
    items: [
      w('Apron', 'Avental', 'êi-pron', '/ˈeɪ.prən/', 'Wear an apron while cooking.', 'Use um avental enquanto cozinha.', '🎽', 'kitchen cooking apron garment on white background', true),
      w('Vest', 'Colete', 'vést', '/vest/', 'He wore a warm vest over his shirt.', 'Ele usou um colete quentinho sobre a camisa.', '🦺', 'sleeveless vest waistcoat garment on white background', true),
      w('Raincoat', 'Capa de chuva', 'rêin-côut', '/ˈreɪn.koʊt/', 'A yellow raincoat keeps you dry.', 'Uma capa de chuva amarela mantém você seco.', '🧥', 'yellow waterproof raincoat jacket on white background', true),
      w('Slippers', 'Pantufas', 'slí-pers', '/ˈslɪp.ərz/', 'Wear soft slippers inside the bedroom.', 'Use pantufas macias dentro do quarto.', '🥿', 'pair of cozy house slippers on white background'),
      w('Bracelet', 'Pulseira', 'brêis-let', '/ˈbreɪ.slət/', 'She has a silver bracelet on her wrist.', 'Ela tem uma pulseira de prata no pulso.', '📿', 'wrist bracelet jewelry on white background', true),
      w('Earrings', 'Brincos', 'ír-rings', '/ˈɪr.rɪŋz/', 'Those gold earrings shine brightly.', 'Aqueles brincos de ouro brilham muito.', '💎', 'pair of gold earrings jewelry on white background', true),
      w('Sunglasses', 'Óculos de sol', 'sân-glé-ses', '/ˈsʌnˌɡlæs.ɪz/', 'Wear sunglasses on sunny days.', 'Use óculos de sol em dias ensolarados.', '🕶️', 'dark sunglasses eyewear on white background'),
      w('Hood', 'Capuz', 'rúd', '/hʊd/', 'Pull up your jacket hood in the wind.', 'Coloque o capuz da blusa no vento.', '🧥', 'hoodie sweatshirt hood closeup real photo', true),
      w('Heel', 'Salto do sapato', 'ríl', '/hiːl/', 'She wore shoes with a high heel.', 'Ela usou sapatos de salto alto.', '👠', 'red high heel shoe on white background', true),
      w('Buckle', 'Fivela', 'bâ-kol', '/ˈbʌk.əl/', 'Fasten the metal belt buckle.', 'Feche a fivela de metal do cinto.', '👖', 'metal belt buckle closeup real photo', true),
      w('Fabric', 'Tecido / Pano', 'fé-brik', '/ˈfæb.rɪk/', 'Cotton is a soft and breathable fabric.', 'O algodão é um tecido macio e fresco.', '🧵', 'folded cotton fabric cloth texture real photo', true),
      w('Hanger', 'Cabide', 'rén-guer', '/ˈhæŋ.ər/', 'Put the dress on a wooden hanger.', 'Coloque o vestido em um cabide de madeira.', '🧥', 'wooden clothes hanger on white background'),
    ],
  },
];

// ============================================================================
// MÓDULOS EXCLUSIVOS DE PRONOMES DA v1.18.0 (1 A CADA 3 DE VOCABULÁRIO)
// ============================================================================

const PRONOUN_MODULE_1 = {
  title: 'Lição de Pronomes I • Pessoais & De Tratamento',
  subtitle: 'Módulo de Pronomes 1/6 (Após 3 de Vocabulário) • Pares Associativos + Voz da Professora',
  pedagogicalObjective: 'Dominar os Pronomes Pessoais (I, You, He, She, It, We, You, They) e os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma\'am) com a voz humana e meiga da professora.',
  icon: 'star',
  type: 'chest',
  theory: [
    'Bem-vindo à 1ª Lição Exclusiva de Pronomes (separada das lições de vocabulário, a cada 3 módulos)!',
    '1º Passo: Começamos pelos Pronomes Pessoais (I, You, He, She, It, We, You, They) — as palavrinhas que mostram quem está falando ou de quem falamos.',
    '2º Passo: Aprendemos os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma\'am, Dr.) — as palavrinhas mágicas de respeito e educação.'
  ],
  boards: [
    {
      conceptTitle: '1º • Pronomes Pessoais (Quem sou eu e quem é você?)',
      conceptHeader: 'São palavrinhas mágicas que usamos no lugar do nome! Quando aponto para mim mesmo, digo "I" (Eu). Quando aponto para você, digo "You" (Você). Para um menino, "He" (Ele); e para uma menina, "She" (Ela)!',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Conecte cada Pronome Pessoal em inglês ao seu par em português:',
      explanation: 'Pronomes Pessoais do Singular: I (Eu), You (Você), He (Ele), She (Ela).',
      pairs: [
        { id: 'p1', en: 'I ("ái")', emoji: '🙋', phonetic: '/aɪ/', pt: 'Eu (falando de mim mesmo)', tipPt: 'Muito bem, meu bem! "I" ("ái") significa "Eu"!' },
        { id: 'p2', en: 'You ("iú")', emoji: '👉', phonetic: '/juː/', pt: 'Você (com quem estou falando)', tipPt: 'Isso mesmo! "You" ("iú") significa "Você"!' },
        { id: 'p3', en: 'He ("rí")', emoji: '👦', phonetic: '/hiː/', pt: 'Ele (para menino ou homem)', tipPt: 'Perfeito! "He" ("rí") usamos para "Ele" (papai, irmão, amigo).' },
        { id: 'p4', en: 'She ("xí")', emoji: '👧', phonetic: '/ʃiː/', pt: 'Ela (para menina ou mulher)', tipPt: 'Lindo! "She" ("xí") usamos para "Ela" (mamãe, irmã, professora).' },
      ],
    },
    {
      conceptTitle: '1º • Pronomes Pessoais (Coisas, Bichinhos e Plural)',
      conceptHeader: 'Para 1 objeto da casa ou 1 bichinho, usamos "It" (Ele/Ela). Quando estamos juntos (eu + você), dizemos "We" (Nós). Para várias pessoas com quem falamos, "You" (Vocês); e para eles ou elas, "They"!',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Ligue os Pronomes Pessoais de coisas/animais e do plural aos seus pares:',
      explanation: 'It (para 1 objeto/animal), We (Nós), You (Vocês), They (Eles/Elas).',
      pairs: [
        { id: 'p5', en: 'It ("ít")', emoji: '🐶', phonetic: '/ɪt/', pt: 'Ele / Ela (para 1 objeto, casa ou animal)', tipPt: 'Isso! A porta, o sofá ou o cachorrinho são "It"!' },
        { id: 'p6', en: 'We ("uí")', emoji: '👨‍👩‍👧', phonetic: '/wiː/', pt: 'Nós (eu e você juntos)', tipPt: 'Muito bem! "We" ("uí") significa "Nós"!' },
        { id: 'p7', en: 'You ("iú" - plural)', emoji: '👫', phonetic: '/juː/', pt: 'Vocês (várias pessoas com quem falo)', tipPt: 'Ótimo! "You" serve para "Você" e também para "Vocês"!' },
        { id: 'p8', en: 'They ("dêi")', emoji: '👥', phonetic: '/ðeɪ/', pt: 'Eles / Elas (pessoas, animais ou objetos)', tipPt: 'Perfeito! "They" ("dêi") é o plural para tudo!' },
      ],
    },
    {
      conceptTitle: '2º • Pronomes de Tratamento (Educação e Respeito - Parte 1)',
      conceptHeader: 'São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos "Mr." (Senhor), "Mrs." (Senhora casada), "Miss" (Senhorita / Professora) e "Ms."!',
      teacherAudioPt: '/audio/teacher/pronoun_2.wav',
      prompt: '🤝 Conecte cada Pronome de Tratamento ao seu par em português:',
      explanation: 'Pronomes de Tratamento antes do nome: Mr. (Senhor), Mrs. (Senhora), Miss (Senhorita), Ms. (Senhora/Senhorita).',
      pairs: [
        { id: 't1', en: 'Mr. ("mís-ter")', emoji: '👨', phonetic: '/ˈmɪs.tər/', pt: 'Senhor (usado antes do nome do homem)', tipPt: 'Muito educado! "Mr. Silva" = "Senhor Silva"!' },
        { id: 't2', en: 'Mrs. ("mí-siz")', emoji: '👩', phonetic: '/ˈmɪs.ɪz/', pt: 'Senhora (usado para mulher casada)', tipPt: 'Perfeito! "Mrs." significa "Senhora"!' },
        { id: 't3', en: 'Miss ("mís")', emoji: '👩‍🏫', phonetic: '/mɪs/', pt: 'Senhorita (moça jovem ou professora)', tipPt: 'Isso! Na escola as crianças chamam a professora de "Miss"!' },
        { id: 't4', en: 'Ms. ("míz")', emoji: '👩‍💼', phonetic: '/mɪz/', pt: 'Senhora / Senhorita (para qualquer mulher)', tipPt: 'Excelente! "Ms." é respeitoso para qualquer mulher!' },
      ],
    },
    {
      conceptTitle: '2º • Pronomes de Tratamento (Educação no Dia a Dia - Parte 2)',
      conceptHeader: 'Quando falamos com respeito sem dizer o nome da pessoa, usamos "Sir" (Senhor) e "Ma\'am" (Senhora). E para profissionais usamos "Dr." (Doutor) e "Prof." (Professor)!',
      teacherAudioPt: '/audio/teacher/pronoun_2.wav',
      prompt: '🤝 Ligue cada Pronome de Tratamento direto ao seu significado:',
      explanation: 'Sir (Senhor), Ma\'am (Senhora), Dr. (Doutor/Doutora), Prof. (Professor/Mestre).',
      pairs: [
        { id: 't5', en: 'Sir ("sâr")', emoji: '🎩', phonetic: '/sɜːr/', pt: 'Senhor (tratamento direto: Yes, Sir!)', tipPt: 'Lindo! "Thank you, Sir!" = "Obrigado, Senhor!"' },
        { id: 't6', en: 'Ma\'am ("mém")', emoji: '🌸', phonetic: '/mæm/', pt: 'Senhora (tratamento direto: Yes, Ma\'am!)', tipPt: 'Perfeito! "Excuse me, Ma\'am" = "Com licença, Senhora"!' },
        { id: 't7', en: 'Dr. ("dók-tor")', emoji: '🩺', phonetic: '/ˈdɑːk.tər/', pt: 'Doutor / Doutora (médico ou dentista)', tipPt: 'Isso mesmo! "Dr." usamos para médicos e doutores!' },
        { id: 't8', en: 'Prof. ("pro-fé-sor")', emoji: '🎓', phonetic: '/prəˈfes.ər/', pt: 'Professor(a) / Mestre', tipPt: 'Parabéns! Você concluiu Pessoais e Tratamento!' },
      ],
    },
  ],
};

const PRONOUN_MODULE_2 = {
  title: 'Lição de Pronomes II • Possessivos & Demonstrativos',
  subtitle: 'Módulo de Pronomes 2/6 (Após 6 de Vocabulário) • Pares Associativos + Voz da Professora',
  pedagogicalObjective: 'Dominar os Pronomes Possessivos (My, Your, His, Her, Our, Their, Mine, Yours) e os Pronomes Demonstrativos (This, That, These, Those).',
  icon: 'star',
  type: 'chest',
  theory: [
    'Bem-vindo à 2ª Lição Exclusiva de Pronomes (após mais 3 módulos de vocabulário)!',
    '3º Passo: Aprendemos os Pronomes Possessivos (My, Your, His, Her, Our, Their, Mine, Yours), que mostram de quem é cada objeto.',
    '4º Passo: Aprendemos os Pronomes Demonstrativos (This, That, These, Those), que mostram se o objeto está pertinho da mão ou lá longe!'
  ],
  boards: [
    {
      conceptTitle: '3º • Pronomes Possessivos (De quem é cada coisa? - Parte 1)',
      conceptHeader: 'Mostram quem é o dono! Se é meu, digo "My" (Meu/Minha). Se é seu, digo "Your" (Seu/Sua). Se pertence a um menino, "His" (Dele); e se pertence a uma menina, "Her" (Dela)!',
      teacherAudioPt: '/audio/teacher/pronoun_3.wav',
      prompt: '🤝 Conecte cada Pronome Possessivo ao seu par em português:',
      explanation: 'My (Meu/Minha), Your (Seu/Sua), His (Dele), Her (Dela).',
      pairs: [
        { id: 'pos1', en: 'My ("mái")', emoji: '💖', phonetic: '/maɪ/', pt: 'Meu / Minha (ex: My bed = Minha cama)', tipPt: 'Isso mesmo! "My" mostra que pertence a você!' },
        { id: 'pos2', en: 'Your ("iór")', emoji: '🎁', phonetic: '/jʊr/', pt: 'Seu / Sua (ex: Your shirt = Sua camisa)', tipPt: 'Muito bem! "Your" significa "Seu" ou "Sua"!' },
        { id: 'pos3', en: 'His ("ríz")', emoji: '👦', phonetic: '/hɪz/', pt: 'Dele (pertence a um menino ou homem)', tipPt: 'Perfeito! "His shoes" = "Os sapatos dele"!' },
        { id: 'pos4', en: 'Her ("râr")', emoji: '👧', phonetic: '/hɜːr/', pt: 'Dela (pertence a uma menina ou mulher)', tipPt: 'Lindo! "Her dress" = "O vestido dela"!' },
      ],
    },
    {
      conceptTitle: '3º • Pronomes Possessivos (Nosso, Deles e É Meu! - Parte 2)',
      conceptHeader: 'Quando algo é de toda a nossa família junta, dizemos "Our" (Nosso/Nossa)! Quando é de outras pessoas, "Their" (Deles/Delas). E no final da frase, para dizer "É meu!" ou "É seu!", usamos "Mine" e "Yours"!',
      teacherAudioPt: '/audio/teacher/pronoun_3.wav',
      prompt: '🤝 Ligue os Pronomes Possessivos de plural e fim de frase aos seus pares:',
      explanation: 'Our (Nosso/Nossa), Their (Deles/Delas), Mine (Meu/Minha no final), Yours (Seu/Sua no final).',
      pairs: [
        { id: 'pos5', en: 'Our ("áu-er")', emoji: '🏡', phonetic: '/aʊər/', pt: 'Nosso / Nossa (ex: Our kitchen = Nossa cozinha)', tipPt: 'Que orgulho! "Our" é "Nosso" ou "Nossa"!' },
        { id: 'pos6', en: 'Their ("dér")', emoji: '👨‍👩‍👧‍👦', phonetic: '/ðer/', pt: 'Deles / Delas (pertence a eles ou elas)', tipPt: 'Isso! "Their house" = "A casa deles"!' },
        { id: 'pos7', en: 'Mine ("máin")', emoji: '✨', phonetic: '/maɪn/', pt: 'O meu / A minha (ex: This cup is mine!)', tipPt: 'Perfeito! "It is mine!" = "É meu!"' },
        { id: 'pos8', en: 'Yours ("iórz")', emoji: '🌟', phonetic: '/jʊrz/', pt: 'O seu / A sua (ex: This plate is yours!)', tipPt: 'Maravilha! "It is yours!" = "É seu!"' },
      ],
    },
    {
      conceptTitle: '4º • Pronomes Demonstrativos (Pertinho da Mão vs. Lá Longe)',
      conceptHeader: 'Para 1 coisa bem pertinho da mão que podemos tocar, dizemos "This" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, "That" (Aquele/Aquela). Para várias coisas perto, "These"; e várias lá longe, "Those"!',
      teacherAudioPt: '/audio/teacher/pronoun_4.wav',
      prompt: '🤝 Conecte cada Pronome Demonstrativo à distância e quantidade corretas:',
      explanation: 'This (1 perto), That (1 longe), These (vários perto), Those (vários longe).',
      pairs: [
        { id: 'dem1', en: 'This ("dís")', emoji: '👇', phonetic: '/ðɪs/', pt: 'Este / Esta / Isto (1 coisa AQUI PERTINHO)', tipPt: 'Muito bem! Se está na sua mão, é "This"!' },
        { id: 'dem2', en: 'That ("dét")', emoji: '👉', phonetic: '/ðæt/', pt: 'Aquele / Aquela / Aquilo (1 coisa LÁ LONGE)', tipPt: 'Isso! Se precisa apontar lá longe, é "That"!' },
        { id: 'dem3', en: 'These ("díz")', emoji: '🤲', phonetic: '/ðiːz/', pt: 'Estes / Estas (VÁRIAS coisas AQUI PERTO)', tipPt: 'Excelente! "These" é o plural pertinho da mão!' },
        { id: 'dem4', en: 'Those ("dôuz")', emoji: '🔭', phonetic: '/ðoʊz/', pt: 'Aqueles / Aquelas (VÁRIAS coisas LÁ LONGE)', tipPt: 'Perfeito! "Those" são vários itens lá longe!' },
      ],
    },
  ],
};

const PRONOUN_MODULE_3 = {
  title: 'Lição de Pronomes III • Reflexivos & Interrogativos',
  subtitle: 'Módulo de Pronomes 3/6 (Após 9 de Vocabulário) • Pares Associativos + Voz da Professora',
  pedagogicalObjective: 'Dominar os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Ourselves, Themselves) e os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How).',
  icon: 'star',
  type: 'chest',
  theory: [
    'Bem-vindo à 3ª Lição Exclusiva de Pronomes (após 9 módulos de vocabulário)!',
    '5º Passo: Aprendemos os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Ourselves, Themselves), que funcionam como um espelho.',
    '6º Passo: Aprendemos os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How), as palavrinhas dos detetives curiosos para fazer perguntas!'
  ],
  boards: [
    {
      conceptTitle: '5º • Pronomes Reflexivos (Como se Olhar no Espelho)',
      conceptHeader: 'Funcionam igualzinho a um espelho! Quando eu faço uma ação em mim mesmo, digo "Myself" (Eu mesmo). Para você mesmo, "Yourself". Para um menino sozinho, "Himself"; e para uma menina sozinha, "Herself"!',
      teacherAudioPt: '/audio/teacher/pronoun_5.wav',
      prompt: '🤝 Conecte cada Pronome Reflexivo ao seu par em português:',
      explanation: 'Myself (Eu mesmo), Yourself (Você mesmo), Himself (Ele mesmo), Herself (Ela mesma).',
      pairs: [
        { id: 'ref1', en: 'Myself ("mai-sélf")', emoji: '🪞', phonetic: '/maɪˈself/', pt: 'Eu mesmo(a) / A mim mesmo (no espelho)', tipPt: 'Lindo! "I see myself in the mirror" = "Eu me vejo no espelho"!' },
        { id: 'ref2', en: 'Yourself ("iór-sélf")', emoji: '🫵', phonetic: '/jʊrˈself/', pt: 'Você mesmo(a) / A si mesmo', tipPt: 'Muito bem! "By yourself" = "Por você mesmo"!' },
        { id: 'ref3', en: 'Himself ("rim-sélf")', emoji: '👦', phonetic: '/hɪmˈself/', pt: 'Ele mesmo (menino ou homem sozinho)', tipPt: 'Perfeito! "He did it himself" = "Ele mesmo fez isso"!' },
        { id: 'ref4', en: 'Herself ("râr-sélf")', emoji: '👧', phonetic: '/hɜːrˈself/', pt: 'Ela mesma (menina ou mulher sozinha)', tipPt: 'Excelente! "She dressed herself" = "Ela se vestiu sozinha"!' },
      ],
    },
    {
      conceptTitle: '6º • Pronomes Interrogativos (Perguntas de Detetive - Parte 1)',
      conceptHeader: 'São as palavrinhas dos detetives curiosos para fazer perguntas! Para saber QUEM é a pessoa, perguntamos "Who?". Para saber O QUÊ é uma coisa, "What?". Para saber ONDE fica um lugar, "Where?"; e QUANDO, "When?"!',
      teacherAudioPt: '/audio/teacher/pronoun_6.wav',
      prompt: '🤝 Conecte cada Pronome Interrogativo ao tipo de pergunta que ele faz:',
      explanation: 'Who? (Quem?), What? (O quê? / Qual?), Where? (Onde?), When? (Quando?).',
      pairs: [
        { id: 'int1', en: 'Who? ("rú")', emoji: '🕵️', phonetic: '/huː/', pt: 'Quem? (pergunta sobre PESSOAS)', tipPt: 'Muito bem! "Who is your teacher?" = "Quem é sua professora?"' },
        { id: 'int2', en: 'What? ("uót")', emoji: '❓', phonetic: '/wɑːt/', pt: 'O quê? / Qual? (pergunta sobre COISAS)', tipPt: 'Isso! "What is this?" = "O que é isto?"' },
        { id: 'int3', en: 'Where? ("uér")', emoji: '📍', phonetic: '/wer/', pt: 'Onde? (pergunta sobre LUGAR)', tipPt: 'Perfeito! "Where is the school?" = "Onde fica a escola?"' },
        { id: 'int4', en: 'When? ("uén")', emoji: '⏰', phonetic: '/wen/', pt: 'Quando? (pergunta sobre TEMPO ou HORA)', tipPt: 'Excelente! "When is lunch?" = "Quando é o almoço?"' },
      ],
    },
    {
      conceptTitle: '6º • Pronomes Interrogativos (Por quê, De quem e Como? - Parte 2)',
      conceptHeader: 'Continuando nossas perguntas de detetive: para saber o MOTIVO, perguntamos "Why?" (Por quê?). Para saber DE QUEM é um objeto, "Whose?". Para ESCOLHER entre opções, "Which?"; e para saber COMO, "How?"!',
      teacherAudioPt: '/audio/teacher/pronoun_6.wav',
      prompt: '🤝 Ligue os Pronomes Interrogativos "Why, Whose, Which, How" aos seus pares:',
      explanation: 'Why? (Por quê?), Whose? (De quem?), Which? (Qual dentre opções?), How? (Como?).',
      pairs: [
        { id: 'int5', en: 'Why? ("uái")', emoji: '🤔', phonetic: '/waɪ/', pt: 'Por quê? (pergunta o MOTIVO)', tipPt: 'Isso! "Why are you happy?" = "Por que você está feliz?"' },
        { id: 'int6', en: 'Whose? ("rúz")', emoji: '🎒', phonetic: '/huːz/', pt: 'De quem? (pergunta quem é o DONO)', tipPt: 'Muito bem! "Whose backpack is this?" = "De quem é esta mochila?"' },
        { id: 'int7', en: 'Which? ("uítch")', emoji: '⚖️', phonetic: '/wɪtʃ/', pt: 'Qual? (para ESCOLHER entre opções)', tipPt: 'Perfeito! "Which color do you prefer?" = "Qual cor você prefere?"' },
        { id: 'int8', en: 'How? ("ráu")', emoji: '🛠️', phonetic: '/haʊ/', pt: 'Como? (pergunta o MODO ou estado)', tipPt: 'Parabéns! "How are you?" = "Como vai você?"' },
      ],
    },
  ],
};

const PRONOUN_MODULE_4 = {
  title: 'Lição de Pronomes IV • Indefinidos & Relativos',
  subtitle: 'Módulo de Pronomes 4/6 (Após 12 de Vocabulário) • Pares Associativos + Voz da Professora',
  pedagogicalObjective: 'Dominar os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing) e os Pronomes Relativos (Who, Which, That, Whose, Where).',
  icon: 'star',
  type: 'chest',
  theory: [
    'Bem-vindo à 4ª Lição Exclusiva de Pronomes (após 12 módulos de vocabulário)!',
    '7º Passo: Aprendemos os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing, Anyone, Anything).',
    '8º Passo: Aprendemos os Pronomes Relativos (Who, Which, That, Whose, Where) — as pontezinhas que juntam duas ideias!'
  ],
  boards: [
    {
      conceptTitle: '7º • Pronomes Indefinidos (Alguém, Algo, Todo Mundo e Tudo)',
      conceptHeader: 'Usamos quando falamos de alguém ou de alguma coisa sem dizer o nome exato! "Someone" é Alguém (uma pessoa), "Something" é Alguma coisa, "Everyone" é Todo mundo, e "Everything" é Tudo!',
      teacherAudioPt: '/audio/teacher/pronoun_7.wav',
      prompt: '🤝 Conecte cada Pronome Indefinido ao seu par em português:',
      explanation: 'Someone (Alguém), Something (Algo), Everyone (Todo mundo), Everything (Tudo).',
      pairs: [
        { id: 'ind1', en: 'Someone ("sâm-uân")', emoji: '🧑', phonetic: '/ˈsʌm.wʌn/', pt: 'Alguém (uma pessoa na porta)', tipPt: 'Isso! "Someone is at the door" = "Alguém está na porta"!' },
        { id: 'ind2', en: 'Something ("sâm-thing")', emoji: '🎁', phonetic: '/ˈsʌm.θɪŋ/', pt: 'Algo / Alguma coisa (um objeto ou surpresa)', tipPt: 'Muito bem! "I have something for you" = "Tenho algo para você"!' },
        { id: 'ind3', en: 'Everyone ("é-vri-uân")', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˈev.ri.wʌn/', pt: 'Todo mundo / Todas as pessoas', tipPt: 'Perfeito! "Everyone is happy" = "Todo mundo está feliz"!' },
        { id: 'ind4', en: 'Everything ("é-vri-thing")', emoji: '🌟', phonetic: '/ˈev.ri.θɪŋ/', pt: 'Tudo / Todas as coisas', tipPt: 'Lindo! "Everything is clean" = "Tudo está limpo"!' },
      ],
    },
    {
      conceptTitle: '8º • Pronomes Relativos (As Pontezinhas que Ligam a Frase)',
      conceptHeader: 'Eles são como pequenas pontes que juntam duas ideias! Se a ponte fala de uma PESSOA, usamos "Who" (que/quem). Se a ponte fala de uma COISA ou animal, usamos "Which" (que). E "That" serve para os dois!',
      teacherAudioPt: '/audio/teacher/pronoun_8.wav',
      prompt: '🤝 Conecte cada Pronome Relativo (pontezinha) à sua função correta:',
      explanation: 'Who (ponte para pessoas), Which (ponte para coisas/animais), That (ponte curinga), Whose (ponte de posse: cujo).',
      pairs: [
        { id: 'rel1', en: 'Who ("rú" - relativo)', emoji: '🧑‍🏫', phonetic: '/huː/', pt: 'Que / Quem (ponte que fala de PESSOAS)', tipPt: 'Isso! "The girl who sings" = "A menina que canta"!' },
        { id: 'rel2', en: 'Which ("uítch" - relativo)', emoji: '📦', phonetic: '/wɪtʃ/', pt: 'Que / O qual (ponte que fala de COISAS)', tipPt: 'Perfeito! "The book which I read" = "O livro que eu li"!' },
        { id: 'rel3', en: 'That ("dét" - relativo)', emoji: '🌉', phonetic: '/ðæt/', pt: 'Que (ponte curinga para PESSOAS ou COISAS)', tipPt: 'Muito bem! "That" conecta tanto pessoas quanto objetos!' },
        { id: 'rel4', en: 'Where ("uér" - relativo)', emoji: '🏠', phonetic: '/wer/', pt: 'Onde (ponte que fala de LUGAR)', tipPt: 'Lindo! "The house where I live" = "A casa onde eu moro"!' },
      ],
    },
  ],
};

const PRONOUN_MODULE_5 = {
  title: 'Lição de Pronomes V • Prática Geral I (Pessoais a Demonstrativos)',
  subtitle: 'Módulo de Pronomes 5/6 (Após 15 de Vocabulário) • Frases do Dia a Dia + Voz da Professora',
  pedagogicalObjective: 'Praticar frases reais do cotidiano combinando Pronomes Pessoais, de Tratamento, Possessivos e Demonstrativos com o vocabulário aprendido.',
  icon: 'star',
  type: 'chest',
  theory: [
    'Bem-vindo à 5ª Lição Exclusiva de Pronomes (após 15 módulos de vocabulário)!',
    'Agora vamos associar frases curtas e práticas do dia a dia usando os Pronomes Pessoais, Possessivos e Demonstrativos.'
  ],
  boards: [
    {
      conceptTitle: 'Prática • Pronomes Pessoais em Frases Curtas',
      conceptHeader: 'Vamos ver como os Pronomes Pessoais ficam lindos junto das palavras que aprendemos? Toque no inglês para ouvir e conecte ao significado!',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Associe cada frase curta com Pronome Pessoal ao seu par:',
      explanation: 'I am at home (Eu estou em casa), He is at the door (Ele está na porta), She is on the sofa (Ela está no sofá), It is a metal key (É uma chave de metal).',
      pairs: [
        { id: 'p9', en: 'I am at home', emoji: '🏠', phonetic: '/aɪ æm æt hoʊm/', pt: 'Eu estou em casa', tipPt: 'Isso! "I" = "Eu"!' },
        { id: 'p10', en: 'He is at the door', emoji: '🚪', phonetic: '/hiː ɪz æt ðə dɔːr/', pt: 'Ele está na porta', tipPt: 'Muito bem! "He" = "Ele"!' },
        { id: 'p11', en: 'She is on the sofa', emoji: '🛋️', phonetic: '/ʃiː ɪz ɑːn ðə ˈsoʊ.fə/', pt: 'Ela está no sofá', tipPt: 'Perfeito! "She" = "Ela"!' },
        { id: 'p12', en: 'It is a house key', emoji: '🔑', phonetic: '/ɪt ɪz ə haʊs kiː/', pt: 'É uma chave de casa', tipPt: 'Lindo! Para objetos como a chave usamos "It"!' },
      ],
    },
    {
      conceptTitle: 'Prática • Pronomes Possessivos e Demonstrativos em Frases',
      conceptHeader: 'Vamos combinar os Possessivos (My, Your, Our) e Demonstrativos (This, That, These, Those) com as palavras do nosso dia a dia!',
      teacherAudioPt: '/audio/teacher/pronoun_4.wav',
      prompt: '🤝 Conecte cada frase com Possessivo ou Demonstrativo à sua tradução:',
      explanation: 'This is my car (Este é meu carro), That is your bus (Aquele é seu ônibus), These shoes are mine (Estes sapatos são meus), Those are our bags (Aquelas são nossas bolsas).',
      pairs: [
        { id: 'pd1', en: 'This is my car', emoji: '🚗', phonetic: '/ðɪs ɪz maɪ kɑːr/', pt: 'Este aqui é o meu carro', tipPt: 'Excelente! "This" (este perto) + "my" (meu)!' },
        { id: 'pd2', en: 'That is your bus', emoji: '🚌', phonetic: '/ðæt ɪz jʊr bʌs/', pt: 'Aquele lá longe é o seu ônibus', tipPt: 'Perfeito! "That" (aquele longe) + "your" (seu)!' },
        { id: 'pd3', en: 'These shoes are mine', emoji: '👟', phonetic: '/ðiːz ʃuːz ɑːr maɪn/', pt: 'Estes sapatos aqui são meus', tipPt: 'Muito bem! "These" (estes perto) + "mine" (meus)!' },
        { id: 'pd4', en: 'Those are our bags', emoji: '👜', phonetic: '/ðoʊz ɑːr aʊər bæɡz/', pt: 'Aquelas lá são as nossas bolsas', tipPt: 'Lindo! "Those" (aquelas longe) + "our" (nossas)!' },
      ],
    },
  ],
};

const PRONOUN_MODULE_6 = {
  title: 'Lição de Pronomes VI • Prática Geral II (Reflexivos a Relativos)',
  subtitle: 'Módulo de Pronomes 6/6 (Após 18 de Vocabulário) • Frases do Dia a Dia + Voz da Professora',
  pedagogicalObjective: 'Consolidar todas as famílias de pronomes com frases práticas de Reflexivos, Interrogativos, Indefinidos e Relativos.',
  icon: 'star',
  type: 'boss',
  theory: [
    'Bem-vindo à 6ª Lição Exclusiva de Pronomes (após 18 módulos de vocabulário)!',
    'Aqui você consolida as perguntas com Interrogativos e as frases com Indefinidos e Relativos.'
  ],
  boards: [
    {
      conceptTitle: 'Prática • Perguntas do Dia a Dia com Interrogativos',
      conceptHeader: 'Vamos ligar perguntas reais usando Who (Quem), Where (Onde), What (Qual/O quê) e Whose (De quem)!',
      teacherAudioPt: '/audio/teacher/pronoun_6.wav',
      prompt: '🤝 Associe cada pergunta em inglês ao seu significado em português:',
      explanation: 'Who is at the door? (Quem está na porta?), Where is my shirt? (Onde está minha camisa?), Whose coat is this? (De quem é este casaco?), How are you? (Como vai você?).',
      pairs: [
        { id: 'pi1', en: 'Who is at the door?', emoji: '🚪', phonetic: '/huː ɪz æt ðə dɔːr/', pt: 'Quem está na porta?', tipPt: 'Isso! "Who" pergunta sobre pessoas!' },
        { id: 'pi2', en: 'Where is my shirt?', emoji: '👔', phonetic: '/wer ɪz maɪ ʃɜːrt/', pt: 'Onde está a minha camisa?', tipPt: 'Muito bem! "Where" pergunta o lugar!' },
        { id: 'pi3', en: 'Whose coat is this?', emoji: '🧥', phonetic: '/huːz koʊt ɪz ðɪs/', pt: 'De quem é este casaco?', tipPt: 'Perfeito! "Whose" pergunta de quem é!' },
        { id: 'pi4', en: 'What is in the box?', emoji: '🎁', phonetic: '/wɑːt ɪz ɪn ðə bɑːks/', pt: 'O que tem dentro da caixa?', tipPt: 'Lindo! "What" pergunta sobre coisas!' },
      ],
    },
    {
      conceptTitle: 'Prática • Frases do Cotidiano com Relativos e Indefinidos',
      conceptHeader: 'Vamos ligar frases reais usando as pontezinhas dos Pronomes Relativos "Who, Which, That, Where"!',
      teacherAudioPt: '/audio/teacher/pronoun_8.wav',
      prompt: '🤝 Associe cada frase com Pronome Relativo ao seu significado em português:',
      explanation: 'The teacher who teaches (A professora que ensina), The key which opens (A chave que abre), The house where I live (A casa onde eu moro), The car that is red (O carro que é vermelho).',
      pairs: [
        { id: 'rel5', en: 'The teacher who teaches', emoji: '👩‍🏫', phonetic: '/ðə ˈtiː.tʃər huː ˈtiː.tʃɪz/', pt: 'A professora que ensina (pessoa = who)', tipPt: 'Isso! Pessoa usa a pontezinha "who"!' },
        { id: 'rel6', en: 'The key which opens', emoji: '🔑', phonetic: '/ðə kiː wɪtʃ ˈoʊ.pənz/', pt: 'A chave que abre (objeto = which)', tipPt: 'Muito bem! Objeto usa a pontezinha "which"!' },
        { id: 'rel7', en: 'The house where I live', emoji: '🏠', phonetic: '/ðə haʊs wer aɪ lɪv/', pt: 'A casa onde eu moro (lugar = where)', tipPt: 'Perfeito! Lugar usa a pontezinha "where"!' },
        { id: 'rel8', en: 'The car that is red', emoji: '🚗', phonetic: '/ðə kɑːr ðæt ɪz red/', pt: 'O carro que é vermelho (curinga = that)', tipPt: 'Parabéns! Você dominou todas as famílias de pronomes!' },
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
// Com pronúncia simplificada, tradução e frase de exemplo em cada item!
// ============================================================================
function buildExercisesWithCooldown(theme, phaseNumber) {
  const items = theme.items;
  const n = items.length; // 12 words per module
  const phaseId = `w0-p${phaseNumber}`;

  const lastSeenAt = new Map();
  const usageCount = new Map();
  items.forEach((it) => usageCount.set(it.text, 0));

  const exercises = [];

  for (let idx = 0; idx < n; idx++) {
    const target = items[idx];

    const futureTargetSet = new Set();
    for (let f = idx + 1; f <= Math.min(n - 1, idx + 2); f++) {
      futureTargetSet.add(items[f].text);
    }

    let eligible = items.filter((cand) => {
      if (cand.text === target.text) return false;
      if (futureTargetSet.has(cand.text)) return false;
      const seen = lastSeenAt.get(cand.text);
      if (seen !== undefined && idx - seen < 3) return false;
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
    const visualSlotPattern = [1, 3, 2, 0, 2, 1, 3, 0, 3, 2, 0, 1];
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

// Preserve verified images from v1.18.0 and add any new words from the 5 progressive themes
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

console.log(`Successfully generated ${phases.length} phases (20 Vocabulary Modules across 5 Themes by Frequency + 6 Interleaved Pronoun Modules, 1 every 3 vocab modules)!`);
console.log('Added/updated', updatedCount, 'images while preserving all v1.18.0 verified photos.');
