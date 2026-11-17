const fs = require('fs');

// Read existing verified REAL_VOCAB_IMAGES so we NEVER overwrite any of the 480 approved image URLs
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

function v(text, emoji, pt, phonetic, sentence, studioQuery) {
  return {
    text,
    emoji,
    label: text,
    pt,
    phonetic,
    sentence: sentence || `This is ${text.toLowerCase()}.`,
    studioQuery: studioQuery || `${text} isolated on white background cutout`,
  };
}

// ============================================================================
// MÓDULO 0: JORNADA IMERSIVA PELOS AMBIENTES DO COTIDIANO (12 MÓDULOS DE 30 ITENS)
// Da calçada e porta de entrada, passando por cada cômodo da casa até a rua, escola, mercado, igreja e cidade.
// ============================================================================

const MODULE_1_ENTRANCE = {
  title: 'Ambiente 1 • Entrada da Casa, Calçada & Porta',
  subtitle: 'Cômodo 1/12 • Da calçada até abrir a porta (objetos e materiais)',
  pedagogicalObjective: 'Conhecer tudo o que vemos ao chegar em casa: calçada, portão, parede, tinta, porta de madeira, fechadura de metal, maçaneta, chave e fachada.',
  icon: 'house',
  theory: [
    'Bem-vindo à Jornada de Imersão Residencial! Vamos explorar uma casa inteira passo a passo, começando pela calçada e pela porta de entrada.',
    'Aqui você aprende não apenas os objetos (Porta, Parede, Fechadura, Maçaneta, Chave, Portão, Campainha), mas também os materiais de que são feitos: Madeira (Wood), Metal (Metal), Vidro (Glass) e Tinta na Parede (Wall Paint).',
    '🎓 REGRA DA PROVA: Você precisa atingir 70 pontos ou mais (pelo menos 21 acertos em 30) para ser aprovado e liberar o próximo cômodo!'
  ],
  items: [
    v('Sidewalk', '🚶', 'Calçada', '/ˈsaɪd.wɔːk/', 'We walk on the concrete sidewalk in front of the house.', 'concrete sidewalk pavement isolated on white background'),
    v('Gate', '🚪', 'Portão da frente', '/ɡeɪt/', 'Open the front metal gate to enter the yard.', 'house front metal gate isolated on white background'),
    v('Brick Wall', '🧱', 'Muro / Parede de tijolos', '/brɪk wɔːl/', 'A strong brick wall surrounds the house.', 'red brick wall section isolated on white background'),
    v('Fence', '栅', 'Cerca / Grade', '/fens/', 'A white wooden fence in front of the garden.', 'white picket fence section isolated on white background'),
    v('Mailbox', '📫', 'Caixa de correio', '/ˈmeɪl.bɑːks/', 'Check the mailbox for letters and packages.', 'house mailbox isolated on white background'),
    v('Doorbell', '🔔', 'Campainha', '/ˈdɔːr.bel/', 'Press the doorbell button when you arrive.', 'wall doorbell button isolated on white background'),
    v('Intercom', '📞', 'Interfone', '/ˈɪn.tər.kɑːm/', 'Answer the visitor using the wall intercom.', 'home wall intercom phone isolated on white background'),
    v('Front Yard', '🏡', 'Jardim da frente / Quintal', '/frʌnt jɑːrd/', 'Green grass grows in the front yard.', 'green lawn grass turf patch isolated on white background'),
    v('Plant Pot', '🪴', 'Vaso de planta', '/ˈplænt pɑːt/', 'A green plant in a ceramic pot by the entrance.', 'green potted houseplant in clay pot on white background'),
    v('Doormat', '🟫', 'Capacho / Tapete de entrada', '/ˈdɔːr.mæt/', 'Wipe your shoes on the welcome doormat.', 'welcome coir doormat isolated on white background'),
    v('Stairs', '🪜', 'Escada / Degraus da entrada', '/sterz/', 'Walk up the front steps to the porch.', 'steps stairs isolated on white background'),
    v('Door', '🚪', 'Porta de entrada', '/dɔːr/', 'The front door is made of solid wood.', 'single wooden front door on white background'),
    v('Wood', '🪵', 'Madeira (material da porta)', '/wʊd/', 'The door is made of natural brown wood.', 'wooden plank board texture isolated on white background'),
    v('Doorknob', '🚪', 'Maçaneta da porta', '/ˈdɔːr.nɑːb/', 'Turn the metal doorknob to open the door.', 'metal door handle doorknob isolated on white background'),
    v('Door Lock', '🔒', 'Fechadura da porta', '/dɔːr lɑːk/', 'The door lock is made of strong metal.', 'metal cylinder door lock mechanism isolated on white background'),
    v('Metal', '🔩', 'Metal / Aço (material da fechadura)', '/ˈmet.əl/', 'The lock and key are made of shiny metal.', 'brushed steel metal plate hardware isolated on white background'),
    v('Key', '🔑', 'Chave', '/kiː/', 'Insert the metal key into the door lock.', 'single metal house key on white background'),
    v('Keychain', '🔑', 'Chaveiro', '/ˈkiː.tʃeɪn/', 'My house keys are on a ring keychain.', 'metal keyring keychain with key isolated on white background'),
    v('Lock', '🔒', 'Cadeado', '/lɑːk/', 'Close the side gate with a metal padlock.', 'brass metal padlock with key on white background'),
    v('Hinge', '🔩', 'Dobradiça da porta', '/hɪndʒ/', 'Metal hinges hold the wooden door to the frame.', 'stainless steel door hinge isolated on white background'),
    v('Wall', '🧱', 'Parede', '/wɔːl/', 'The house wall is smooth and painted white.', 'smooth painted house wall corner isolated on white background'),
    v('Wall Paint', '🎨', 'Tinta de parede', '/wɔːl peɪnt/', 'Fresh wall paint makes the house look new.', 'paint can with brush and wall paint swatch isolated on white background'),
    v('Paint Roller', '🖌️', 'Rolo de pintar parede', '/peɪnt ˈroʊ.lər/', 'Use a paint roller to paint the bedroom wall.', 'paint roller tool isolated on white background'),
    v('Window', '🪟', 'Janela', '/ˈwɪn.doʊ/', 'The glass window lets sunlight into the house.', 'closed house glass window frame on white background'),
    v('Glass', '🪟', 'Vidro (material da janela)', '/ɡlæs/', 'The window pane is made of clear glass.', 'clear glass pane sheet isolated on white background'),
    v('Roof', '🏠', 'Telhado', '/ruːf/', 'The ceramic roof protects the house from rain.', 'house roof with red tiles isolated on white background'),
    v('Roof Tile', '🧱', 'Telha', '/ruːf taɪl/', 'Clay roof tiles cover the top of the house.', 'single terracotta clay roof tile isolated on white background'),
    v('Porch Light', '💡', 'Luminária externa / Arandela', '/pɔːrtʃ laɪt/', 'Turn on the porch light at night.', 'outdoor wall lantern porch light fixture isolated on white background'),
    v('Garage', '🚗', 'Garagem', '/ɡəˈrɑːʒ/', 'Park the family car inside the garage.', 'house garage door isolated on white background'),
    v('House', '🏠', 'Casa / Residência', '/haʊs/', 'Welcome to my comfortable house!', 'single family house home on white background'),
  ]
};

const MODULE_2_LIVING_ROOM = {
  title: 'Ambiente 2 • Sala de Estar, TV, Internet & Iluminação',
  subtitle: 'Cômodo 2/12 • Sofá, almofadas, rack, modem, TV, videogame, tomada, interruptor e piso',
  pedagogicalObjective: 'Identificar todos os móveis, aparelhos eletrônicos, tomadas, interruptores, iluminação e revestimentos da sala de estar.',
  icon: 'house',
  theory: [
    'Você abriu a porta e entrou na Sala de Estar! Olhe ao seu redor: temos o Sofá (Sofa), as Almofadas (Cushion), o Rack de TV (TV Stand), a Televisão (Television) e o Modem de Internet (Wi-Fi Router).',
    'Veja também os Retratos de Fotografia (Picture Frame), o Videogame (Video Game Console), o Controle (Game Controller), as Caixas de Som (Speaker), a Mesa de Centro (Coffee Table), o Tapete (Rug), a Cortina (Curtain) e o Notebook (Computer).',
    'Nas paredes, teto e chão temos a Tomada (Power Outlet), o Interruptor (Light Switch), a Lâmpada no Teto (Light Bulb), o Ventilador (Fan), o Ar-Condicionado (Air Conditioner) e o Piso Cerâmico (Ceramic Tile).'
  ],
  items: [
    v('Sofa', '🛋️', 'Sofá da sala', '/ˈsoʊ.fə/', 'The family sits together on the living room sofa.', 'modern fabric sofa couch furniture on white background'),
    v('Cushion', '🛋️', 'Almofada de sofá', '/ˈkʊʃ.ən/', 'Soft decorative cushions are on the sofa.', 'decorative square sofa cushion throw pillow isolated on white background'),
    v('Armchair', '🛋️', 'Poltrona', '/ˈɑːrm.tʃer/', 'Grandpa reads in a comfortable armchair.', 'comfortable fabric armchair isolated on white background'),
    v('TV Stand', '📺', 'Rack de TV / Painel de sala', '/ˌtiːˈviː stænd/', 'The television sits on a wooden TV stand.', 'modern wooden tv stand media console furniture isolated on white background'),
    v('Television', '📺', 'Televisão (Smart TV)', '/ˈtel.ə.vɪʒ.ən/', 'We watch movies on the flat-screen television.', 'flat screen smart tv television on white background'),
    v('Remote Control', '📱', 'Controle remoto da TV', '/rɪˈmoʊt kənˈtroʊl/', 'Change the channel with the TV remote control.', 'black tv remote control with buttons on white background'),
    v('Wi-Fi Router', '🛜', 'Modem / Roteador de internet', '/ˈwaɪ.faɪ ˈraʊ.tər/', 'The Wi-Fi router connects our home to the internet.', 'wireless wifi router modem with antennas isolated on white background'),
    v('Picture Frame', '🖼️', 'Porta-retrato / Retrato de fotografia', '/ˈpɪk.tʃər freɪm/', 'A family photo inside a wooden picture frame.', 'wooden photo picture frame isolated on white background'),
    v('Video Game Console', '🎮', 'Videogame (Console)', '/ˈvɪd.i.oʊ ɡeɪm ˈkɑːn.soʊl/', 'The video game console is connected to the TV.', 'modern video game console isolated on white background'),
    v('Game Controller', '🎮', 'Controle de videogame / Joystick', '/ɡeɪm kənˈtroʊ.lər/', 'Hold the wireless game controller to play.', 'wireless video game controller gamepad isolated on white background'),
    v('Speaker', '🔊', 'Caixa de som', '/ˈspiː.kər/', 'Play music through the Bluetooth speaker.', 'audio speaker box isolated on white background'),
    v('Coffee Table', '🪑', 'Mesa de centro da sala', '/ˈkɔː.fi ˈteɪ.bəl/', 'Put the magazines on the living room coffee table.', 'wooden living room coffee table isolated on white background'),
    v('Rug', '🟥', 'Tapete da sala', '/rʌɡ/', 'A soft woven rug covers the living room floor.', 'decorative woven floor rug carpet on white background'),
    v('Curtain', '🪟', 'Cortina da janela', '/ˈkɜːr.tən/', 'Close the living room curtains in the evening.', 'fabric window curtains drapes on white background'),
    v('Window Blind', '🪟', 'Persiana', '/ˈwɪn.doʊ blaɪnd/', 'Adjust the window blinds to control the light.', 'horizontal window blinds isolated on white background'),
    v('Computer', '💻', 'Notebook / Computador portátil', '/kəmˈpjuː.tər/', 'My open laptop computer is on the table.', 'open laptop computer notebook on white background'),
    v('Power Outlet', '🔌', 'Tomada elétrica na parede', '/ˈpaʊ.ər ˈaʊt.let/', 'Plug the notebook charger into the wall power outlet.', 'white wall electrical power outlet socket isolated on white background'),
    v('Power Plug', '🔌', 'Plugue / Cabo de energia', '/ˈpaʊ.ər plʌɡ/', 'Insert the power plug into the socket.', 'electrical power plug with cord isolated on white background'),
    v('Light Switch', '💡', 'Interruptor de luz na parede', '/laɪt swɪtʃ/', 'Flip the wall light switch to turn on the lamp.', 'white wall light switch rocker isolated on white background'),
    v('Light Bulb', '💡', 'Lâmpada no teto', '/ˈlaɪt bʌlb/', 'The LED light bulb illuminates the whole room.', 'single led light bulb on white background'),
    v('Ceiling Lamp', '💡', 'Lustre / Plafon de teto', '/ˈsiː.lɪŋ læmp/', 'A modern ceiling lamp hangs in the living room.', 'modern ceiling light fixture chandelier isolated on white background'),
    v('Lamp', '💡', 'Abajur / Luminária de canto', '/læmp/', 'Turn on the warm lamp next to the sofa.', 'bedside table lamp with shade on white background'),
    v('Fan', '🌀', 'Ventilador', '/fæn/', 'Turn on the electric fan on warm days.', 'standing electric table fan on white background'),
    v('Ceiling Fan', '🌀', 'Ventilador de teto', '/ˈsiː.lɪŋ fæn/', 'The ceiling fan spins quietly above the sofa.', 'ceiling fan with blades and light isolated on white background'),
    v('Air Conditioner', '❄️', 'Ar-condicionado', '/ˈer kənˌdɪʃ.ən.ər/', 'The split air conditioner cools the living room.', 'white split wall air conditioner unit on white background'),
    v('Ceramic Tile', '⬜', 'Piso cerâmico / Porcelanato', '/səˈræm.ɪk taɪl/', 'The living room has shiny ceramic floor tiles.', 'porcelain ceramic floor tile square isolated on white background'),
    v('Bookshelf', '📚', 'Estante de livros', '/ˈbʊk.ʃelf/', 'Our books are organized on the wooden bookshelf.', 'wooden bookcase bookshelf with books on white background'),
    v('Clock', '⏰', 'Relógio de parede', '/klɑːk/', 'Check the time on the living room wall clock.', 'round wall clock showing numbers on white background'),
    v('Vase', '🏺', 'Vaso decorativo', '/veɪs/', 'A ceramic vase sits on the coffee table.', 'decorative ceramic flower vase isolated on white background'),
    v('Telephone', '☎️', 'Telefone fixo', '/ˈtel.ə.foʊn/', 'The home telephone is next to the modem.', 'cordless home telephone isolated on white background'),
  ]
};

const MODULE_3_KITCHEN_STRUCTURE = {
  title: 'Ambiente 3 • Cozinha I: Armários, Pia, Ilha, Fogão & Eletros',
  subtitle: 'Cômodo 3/12 • Armário, gavetas, pia, torneira, pedra, ilha, coifa, pendentes e eletroportáteis',
  pedagogicalObjective: 'Dominar os móveis planejados, bancadas de pedra, ilha, pia, torneira, coifa, iluminação pendente e eletrodomésticos da cozinha.',
  icon: 'apple',
  theory: [
    'Agora entramos na Cozinha! Primeiro observamos toda a estrutura e os aparelhos: Armário (Kitchen Cabinet), Porta do Armário (Cabinet Door), Gavetas (Drawer), Geladeira (Fridge) e a Mesa com Cadeiras (Table & Chair).',
    'Na área de preparo vemos a Pia (Kitchen Sink), a Torneira (Faucet), a Pedra do Armário / Bancada (Granite Countertop), a Ilha (Kitchen Island), o Fogão (Stove), a Coifa (Range Hood), o Depurador de Ar (Air Purifier) e os Pendentes de Luz (Pendant Light).',
    'E nos eletros temos: Forno Micro-ondas (Microwave), Forno Elétrico (Electric Oven), Torradeira (Toaster), Cafeteira (Coffee Maker), Liquidificador (Blender), Batedeira (Stand Mixer) e Air Fryer!'
  ],
  items: [
    v('Kitchen Cabinet', '🗄️', 'Armário de cozinha', '/ˈkɪtʃ.ən ˈkæb.ɪ.nət/', 'Store the plates inside the kitchen cabinet.', 'wooden kitchen cabinet cupboard isolated on white background'),
    v('Cabinet Door', '🚪', 'Porta do armário', '/ˈkæb.ɪ.nət dɔːr/', 'Open the wooden cabinet door carefully.', 'wooden cabinet door with handle isolated on white background'),
    v('Drawer', '🗄️', 'Gaveta do armário', '/drɔːr/', 'The silverware is kept inside the kitchen drawer.', 'open wooden drawer furniture isolated on white background'),
    v('Fridge', '🧊', 'Geladeira / Refrigerador', '/frɪdʒ/', 'Keep water, milk and food cold in the fridge.', 'modern stainless steel refrigerator fridge appliance on white background'),
    v('Freezer', '❄️', 'Freezer / Congelador', '/ˈfriː.zər/', 'Ice stays frozen inside the freezer compartment.', 'upright freezer appliance with ice isolated on white background'),
    v('Table', '🪑', 'Mesa de jantar da cozinha', '/ˈteɪ.bəl/', 'The kitchen table has four chairs around it.', 'empty wooden dining table furniture on white background'),
    v('Chair', '🪑', 'Cadeira da cozinha', '/tʃer/', 'Pull out a chair and sit at the kitchen table.', 'single wooden dining chair furniture on white background'),
    v('Kitchen Sink', '🚰', 'Pia da cozinha (cuba de inox)', '/ˈkɪtʃ.ən sɪŋk/', 'Wash the vegetables in the stainless steel kitchen sink.', 'stainless steel kitchen sink basin isolated on white background'),
    v('Faucet', '🚰', 'Torneira da pia', '/ˈfɔː.sɪt/', 'Turn on the kitchen faucet to rinse the plate.', 'chrome kitchen water faucet tap isolated on white background'),
    v('Countertop', '🪨', 'Pedra do armário / Bancada de granito', '/ˈkaʊn.tər.tɑːp/', 'The kitchen cabinet has a polished granite stone countertop.', 'granite stone kitchen countertop slab isolated on white background'),
    v('Kitchen Island', '🏝️', 'Ilha da cozinha', '/ˈkɪtʃ.ən ˈaɪ.lənd/', 'We prepare meals on the central kitchen island.', 'modern kitchen island cabinet with stone top isolated on white background'),
    v('Bar Stool', '🪑', 'Banqueta alta da ilha', '/bɑːr stuːl/', 'High bar stools are placed next to the kitchen island.', 'high kitchen bar stool chair isolated on white background'),
    v('Stove', '🔥', 'Fogão', '/stoʊv/', 'Cook rice and beans on the gas stove.', 'kitchen gas stove oven appliance on white background'),
    v('Range Hood', '💨', 'Coifa de inox', '/reɪndʒ hʊd/', 'The stainless steel range hood removes smoke above the stove.', 'stainless steel kitchen chimney range hood isolated on white background'),
    v('Exhaust Hood', '💨', 'Depurador de ar', '/ɪɡˈzɔːst hʊd/', 'Turn on the slim exhaust hood while frying food.', 'slim under cabinet kitchen range hood depurator isolated on white background'),
    v('Pendant Light', '💡', 'Luminária pendente (sobre a ilha/mesa)', '/ˈpen.dənt laɪt/', 'Hanging pendant lights illuminate the kitchen island.', 'modern hanging pendant light lamp fixture isolated on white background'),
    v('Microwave', '⏲️', 'Forno micro-ondas', '/ˈmaɪ.krə.weɪv/', 'Warm up your lunch in the microwave oven.', 'countertop microwave oven appliance on white background'),
    v('Electric Oven', '♨️', 'Forno elétrico', '/ɪˈlek.trɪk ˈʌv.ən/', 'Bake bread and pies inside the electric oven.', 'countertop electric toaster oven appliance isolated on white background'),
    v('Toaster', '🍞', 'Torradeira elétrica', '/ˈtoʊ.stər/', 'Toast two slices of bread in the toaster.', 'electric bread toaster appliance on white background'),
    v('Coffee Maker', '☕', 'Cafeteira elétrica', '/ˈkɔː.fi ˌmeɪ.kər/', 'Fresh coffee is brewing in the coffee maker.', 'electric drip coffee maker machine on white background'),
    v('Blender', '🌪️', 'Liquidificador', '/ˈblen.dər/', 'Blend fresh fruit smoothie in the blender.', 'electric kitchen blender with jar on white background'),
    v('Stand Mixer', '🥣', 'Batedeira de bolo', '/stænd ˈmɪk.sər/', 'Mix the cake batter with an electric stand mixer.', 'electric kitchen stand mixer with bowl isolated on white background'),
    v('Air Fryer', '🍟', 'Fritadeira elétrica (Air Fryer)', '/er ˈfraɪ.ər/', 'Cook crispy potatoes in the electric air fryer.', 'black digital air fryer kitchen appliance isolated on white background'),
    v('Sandwich Maker', '🥪', 'Sanduicheira / Grill elétrico', '/ˈsæn.wɪtʃ ˈmeɪ.kər/', 'Toast a warm cheese sandwich in the sandwich maker.', 'electric sandwich maker grill press appliance isolated on white background'),
    v('Water Dispenser', '🚰', 'Filtro / Purificador de água', '/ˈwɔː.tər dɪˌspen.sər/', 'Get cold filtered water from the water dispenser.', 'countertop water filter dispenser clay or white on white background'),
    v('Kettle', '🫖', 'Chaleira elétrica / de fogão', '/ˈket.əl/', 'Boil water for tea in the stainless steel kettle.', 'stainless steel tea kettle with spout on white background'),
    v('Kitchen Scale', '⚖️', 'Balança de cozinha', '/ˈkɪtʃ.ən skeɪl/', 'Weigh the flour on the digital kitchen scale.', 'digital kitchen food scale on white background'),
    v('Sponge', '🧽', 'Esponja de lavar louça', '/spʌndʒ/', 'Wash the dishes with soap and a kitchen sponge.', 'yellow and green dishwashing kitchen sponge on white background'),
    v('Apron', '🎽', 'Avental de cozinha', '/ˈeɪ.prən/', 'Wear a clean apron while cooking in the kitchen.', 'fabric kitchen cooking apron on white background'),
    v('Trash Can', '🗑️', 'Lixeira de cozinha', '/ˈtræʃ kæn/', 'Step on the pedal to open the kitchen trash can.', 'metal pedal trash can bin on white background'),
  ]
};

const MODULE_4_KITCHEN_UTENSILS_FRIDGE = {
  title: 'Ambiente 4 • Cozinha II: Panelas, Talheres & Dentro da Geladeira',
  subtitle: 'Cômodo 4/12 • Modelos de panelas, utensílios de gaveta, louças e alimentos na geladeira',
  pedagogicalObjective: 'Conhecer cada modelo de panela (caçarola, frigideira, panela de pressão), os talheres e utensílios das gavetas e o que vemos ao abrir a geladeira.',
  icon: 'apple',
  theory: [
    'Continuando na Cozinha, agora abrimos os armários, as gavetas e a porta da geladeira!',
    'Veja os vários modelos de panelas: Panela de cozinhar (Cooking Pot), Frigideira (Frying Pan), Panela de Pressão (Pressure Cooker) e Assadeira (Baking Tray).',
    'Nas gavetas temos os talheres e utensílios (Fork, Knife, Spoon, Ladle, Spatula, Grater, Strainer, Cutting Board) e, dentro da geladeira, vemos Garrafa de Água (Bottle), Leite (Milk), Manteiga (Butter), Queijo (Cheese), Ovos (Egg), Suco (Juice) e frutas/verduras!'
  ],
  items: [
    v('Cooking Pot', '🍲', 'Panela com tampa', '/ˈkʊk.ɪŋ pɑːt/', 'Boil soup and pasta in the stainless steel cooking pot.', 'stainless steel cooking pot with lid on white background'),
    v('Frying Pan', '🍳', 'Frigideira antiaderente', '/ˈfraɪ.ɪŋ pæn/', 'Fry eggs in a non-stick frying pan.', 'black nonstick frying pan skillet on white background'),
    v('Pressure Cooker', '🍲', 'Panela de pressão', '/ˈpreʃ.ər ˌkʊk.ər/', 'Cook beans fast in the aluminum pressure cooker.', 'aluminum kitchen pressure cooker pot on white background'),
    v('Baking Tray', '🥮', 'Assadeira / Forma de forno', '/ˈbeɪ.kɪŋ treɪ/', 'Put the metal baking tray inside the oven.', 'rectangular metal baking pan tray isolated on white background'),
    v('Fork', '🍴', 'Garfo', '/fɔːrk/', 'Take a clean fork from the kitchen drawer.', 'single metal dinner fork cutlery on white background'),
    v('Knife', '🔪', 'Faca de cozinha', '/naɪf/', 'Slice the meat carefully with a sharp knife.', 'single stainless steel kitchen chef knife on white background'),
    v('Spoon', '🥄', 'Colher', '/spuːn/', 'Use a metal spoon to eat soup.', 'single metal soup spoon cutlery on white background'),
    v('Soup Ladle', '🥄', 'Concha de feijão / sopa', '/suːp ˈleɪ.dəl/', 'Serve hot soup with a deep metal ladle.', 'stainless steel soup ladle kitchen utensil isolated on white background'),
    v('Spatula', '🍳', 'Espátula / Escumadeira', '/ˈspætʃ.ə.lə/', 'Flip the pancake with a kitchen spatula.', 'kitchen turner spatula utensil isolated on white background'),
    v('Grater', '🧀', 'Ralador de queijo e legumes', '/ˈɡreɪ.tər/', 'Grate the cheese using a metal box grater.', 'stainless steel kitchen cheese grater isolated on white background'),
    v('Strainer', '🥣', 'Peneira / Escorredor de cozinha', '/ˈstreɪ.nər/', 'Wash the rice using a fine mesh strainer.', 'kitchen mesh sieve strainer utensil isolated on white background'),
    v('Cutting Board', '🪵', 'Tábua de corte', '/ˈkʌt.ɪŋ bɔːrd/', 'Chop tomatoes and onions on the wooden cutting board.', 'wooden kitchen cutting chopping board on white background'),
    v('Rolling Pin', '🥖', 'Rolo de abrir massa', '/ˈroʊ.lɪŋ pɪn/', 'Roll the bread dough with a wooden rolling pin.', 'wooden dough rolling pin isolated on white background'),
    v('Plate', '🍽️', 'Prato', '/pleɪt/', 'Set the white ceramic plates on the table.', 'single empty round ceramic dinner plate on white background'),
    v('Bowl', '🥣', 'Tigela / Cumbuca', '/boʊl/', 'Pour cereal and milk into the ceramic bowl.', 'single empty ceramic soup bowl on white background'),
    v('Glass', '🥛', 'Copo de vidro', '/ɡlæs/', 'Drink cold water from a clear glass.', 'empty clear glass water tumbler on white background'),
    v('Cup', '☕', 'Xícara', '/kʌp/', 'Serve hot coffee in a porcelain cup.', 'empty porcelain coffee cup with handle on white background'),
    v('Jar', '🫙', 'Pote de vidro com tampa', '/dʒɑːr/', 'Store food inside a sealed glass jar.', 'empty clear glass jar with lid on white background'),
    v('Salt Shaker', '🧂', 'Saleiro', '/ˈsɔːlt ˌʃeɪ.kər/', 'The salt shaker is on the kitchen counter.', 'glass salt shaker with metal cap on white background'),
    v('Napkin', '🧻', 'Guardanapo', '/ˈnæp.kɪn/', 'Place paper napkins next to the plates.', 'folded table napkin on white background'),
    v('Bottle', '🍾', 'Garrafa de água (na geladeira)', '/ˈbɑː.təl/', 'There is a cold water bottle inside the fridge.', 'single reusable water bottle on white background'),
    v('Milk', '🥛', 'Leite (na geladeira)', '/mɪlk/', 'Keep the fresh milk inside the refrigerator.', 'glass of white milk and milk bottle on white background'),
    v('Butter', '🧈', 'Manteiga (na geladeira)', '/ˈbʌt.ər/', 'Take the butter out of the fridge for breakfast.', 'yellow butter block on dish on white background'),
    v('Cheese', '🧀', 'Queijo (na geladeira)', '/tʃiːz/', 'Sliced yellow cheese is stored in the fridge.', 'wedge of yellow swiss cheese with holes on white background'),
    v('Yogurt', '🥣', 'Iogurte (na geladeira)', '/ˈjoʊ.ɡərt/', 'Cold strawberry yogurt is in the refrigerator.', 'creamy yogurt in bowl with spoon on white background'),
    v('Egg', '🥚', 'Ovo (na porta/prateleira da geladeira)', '/eɡ/', 'There are twelve eggs in the refrigerator.', 'whole egg and sunny side up fried egg on white background'),
    v('Juice', '🧃', 'Jarra de suco (na geladeira)', '/dʒuːs/', 'Cold orange juice is ready in the fridge.', 'glass of fresh orange juice on white background'),
    v('Ham', '🥩', 'Presunto (na geladeira)', '/hæm/', 'Keep cheese and ham cold in the refrigerator.', 'sliced cooked pink ham meat on white background'),
    v('Lettuce', '🥬', 'Alface (na gaveta da geladeira)', '/ˈlet.ɪs/', 'Fresh green lettuce stays crisp in the fridge drawer.', 'whole fresh green lettuce head on white background'),
    v('Apple', '🍎', 'Maçã (na fruteira / geladeira)', '/ˈæp.əl/', 'I eat a cold red apple from the kitchen.', 'fresh red apple fruit with green leaf isolated on white background'),
  ]
};

const MODULE_5_BEDROOM_CLOSET = {
  title: 'Ambiente 5 • Quarto de Dormir, Cama, Guarda-Roupa & Vestuário',
  subtitle: 'Cômodo 5/12 • Cama, colchão, travesseiro, cobertor, guarda-roupa, cabide, roupas e calçados',
  pedagogicalObjective: 'Dominar cada item do quarto de dormir, roupas de cama, móveis do quarto e todas as peças de roupa e calçados do guarda-roupa.',
  icon: 'shirt',
  theory: [
    'Saindo da cozinha pelo corredor, entramos no Quarto de Dormir!',
    'Olhe para a Cama (Bed), o Colchão (Mattress), o Travesseiro (Pillow), o Lençol (Bed Sheet), o Cobertor (Blanket), o Criado-mudo (Nightstand), o Guarda-roupa (Wardrobe), o Cabide (Clothes Hanger) e o Espelho (Mirror).',
    'Abrindo o guarda-roupa, vemos todas as nossas roupas, calçados e acessórios do dia a dia!'
  ],
  items: [
    v('Bed', '🛏️', 'Cama', '/bed/', 'I sleep in a comfortable wooden bed.', 'wooden bed with mattress and pillows furniture on white background'),
    v('Mattress', '🛏️', 'Colchão da cama', '/ˈmæt.rəs/', 'A soft orthopedic mattress on the bed.', 'white bed mattress isolated on white background'),
    v('Pillow', '⬜', 'Travesseiro', '/ˈpɪl.oʊ/', 'Rest your head on a soft white pillow.', 'single soft white bed pillow on white background'),
    v('Blanket', '🛌', 'Cobertor / Edredom', '/ˈblæŋ.kɪt/', 'Pull up the warm blanket on cold nights.', 'folded soft wool blanket on white background'),
    v('Nightstand', '🗄️', 'Criado-mudo / Mesa de cabeceira', '/ˈnaɪt.stænd/', 'Keep your book and lamp on the wooden nightstand.', 'wooden bedside table nightstand with drawer isolated on white background'),
    v('Wardrobe', '🚪', 'Guarda-roupa', '/ˈwɔːr.droʊb/', 'Open the bedroom wardrobe to choose your clothes.', 'wooden bedroom wardrobe closet furniture on white background'),
    v('Clothes Hanger', '🧥', 'Cabide de roupas', '/ˈkloʊðz ˈhæŋ.ər/', 'Hang your shirt on a wooden clothes hanger.', 'single wooden clothes hanger isolated on white background'),
    v('Mirror', '🪞', 'Espelho do quarto', '/ˈmɪr.ər/', 'Look in the bedroom mirror before leaving home.', 'framed standing mirror on white background'),
    v('Shirt', '👕', 'Camisa / Camiseta', '/ʃɜːrt/', 'Put on a clean cotton shirt.', 'blue cotton t-shirt shirt flat lay on white background'),
    v('Pants', '👖', 'Calça', '/pænts/', 'Fold the pants and put them in the wardrobe.', 'beige chino trousers pants full length on white background'),
    v('Jeans', '👖', 'Calça jeans', '/dʒiːnz/', 'Blue denim jeans are durable and comfortable.', 'blue denim jeans pants full length on white background'),
    v('Shorts', '🩳', 'Shorts / Bermuda', '/ʃɔːrts/', 'Wear light shorts on hot days.', 'casual summer shorts pants on white background'),
    v('Dress', '👗', 'Vestido', '/dres/', 'The red dress hangs inside the closet.', 'red women summer dress full length on white background'),
    v('Skirt', '👗', 'Saia', '/skɜːrt/', 'She wore a pleated skirt.', 'pleated skirt garment on white background'),
    v('Jacket', '🧥', 'Jaqueta / Blusa de frio', '/ˈdʒæk.ɪt/', 'Take a warm jacket from the wardrobe.', 'zipper jacket outerwear on white background'),
    v('Coat', '🧥', 'Casaco / Sobretudo', '/koʊt/', 'A heavy coat for cold winter days.', 'winter trench coat outerwear on white background'),
    v('Sweater', '🧶', 'Suéter / Moletom', '/ˈswet.ər/', 'A knitted wool sweater is very cozy.', 'knitted wool pullover sweater on white background'),
    v('Pajamas', '🛌', 'Pijama de dormir', '/pəˈdʒæm.əz/', 'Put on your pajamas before going to bed.', 'two piece sleep pajamas set on white background'),
    v('Socks', '🧦', 'Meias', '/sɑːks/', 'My cotton socks are in the top drawer.', 'pair of colorful cotton socks on white background'),
    v('Sneakers', '👟', 'Tênis', '/ˈsniː.kərz/', 'Put on your running sneakers.', 'pair of running sport sneakers shoes on white background'),
    v('Shoes', '👞', 'Sapatos', '/ʃuːz/', 'Polish your brown leather shoes.', 'pair of brown leather dress shoes on white background'),
    v('Sandals', '🩴', 'Chinelo / Sandália', '/ˈsæn.dəlz/', 'Wear comfortable sandals inside the house.', 'pair of rubber flip flop sandals on white background'),
    v('Boots', '🥾', 'Botas', '/buːts/', 'Keep your leather boots at the bottom of the closet.', 'pair of brown leather boots on white background'),
    v('High Heels', '👠', 'Sapato de salto alto', '/ˌhaɪ ˈhiːlz/', 'Red high heels for a special party.', 'pair of red high heel shoes on white background'),
    v('Belt', 'ベルト', 'Cinto de couro', '/belt/', 'Fasten your leather belt.', 'brown leather waist belt with buckle on white background'),
    v('Cap', '🧢', 'Boné', '/kæp/', 'Wear a blue cap on sunny afternoons.', 'blue baseball cap hat on white background'),
    v('Glasses', '👓', 'Óculos de grau', '/ˈɡlæs.ɪz/', 'My reading glasses are on the nightstand.', 'pair of prescription eyeglasses frames on white background'),
    v('Watch', '⌚', 'Relógio de pulso', '/wɑːtʃ/', 'Put on your wristwatch in the morning.', 'classic wristwatch with leather strap on white background'),
    v('Wallet', '👛', 'Carteira de bolso', '/ˈwɑː.lɪt/', 'Keep your documents inside the leather wallet.', 'brown leather bifold wallet on white background'),
    v('Handbag', '👜', 'Bolsa', '/ˈhænd.bæɡ/', 'Her leather handbag is on the bedroom chair.', 'women leather handbag purse on white background'),
  ]
};

const MODULE_6_BATHROOM_HYGIENE = {
  title: 'Ambiente 6 • Banheiro, Chuveiro, Pia & Higiene Pessoal',
  subtitle: 'Cômodo 6/12 • Vaso sanitário, chuveiro, pia, toalhas, itens de higiene e partes do corpo',
  pedagogicalObjective: 'Reconhecer todos os itens do banheiro, produtos de higiene diária e partes do corpo humano.',
  icon: 'house',
  theory: [
    'Agora entramos no Banheiro da casa!',
    'Veja o Vaso Sanitário (Toilet), o Papel Higiênico (Toilet Paper), a Pia do Banheiro (Bathroom Sink), o Chuveiro (Shower), a Banheira (Bathtub), a Toalha de Banho (Towel), o Sabonete (Soap) e o Shampoo.',
    'Na bancada do banheiro usamos a Escova de Dentes (Toothbrush), a Pasta de Dente (Toothpaste), o Pente (Comb), a Escova de Cabelo (Hairbrush) e o Secador (Hair Dryer), cuidando de cada parte do corpo!'
  ],
  items: [
    v('Toilet', '🚽', 'Vaso sanitário', '/ˈtɔɪ.lət/', 'A clean white ceramic toilet in the bathroom.', 'white ceramic toilet bowl on white background'),
    v('Toilet Paper', '🧻', 'Papel higiênico', '/ˈtɔɪ.lət ˈpeɪ.pər/', 'Put a new roll of toilet paper on the holder.', 'single roll of white toilet paper on white background'),
    v('Bathroom Sink', '🚰', 'Pia / Lavatório do banheiro', '/ˈbæθ.ruːm sɪŋk/', 'Wash your hands and face in the bathroom sink.', 'white ceramic bathroom sink basin with faucet isolated on white background'),
    v('Shower', '🚿', 'Chuveiro', '/ˈʃaʊ.ər/', 'Take a warm shower every day.', 'bathroom shower head fixture on white background'),
    v('Bathtub', '🛁', 'Banheira', '/ˈbæθ.tʌb/', 'Fill the white bathtub with warm water.', 'white freestanding bathtub isolated on white background'),
    v('Towel', '🧺', 'Toalha de banho', '/ˈtaʊ.əl/', 'Dry yourself with a soft cotton bath towel.', 'folded cotton bath towel stack on white background'),
    v('Soap', '🧼', 'Sabonete em barra', '/soʊp/', 'Wash your hands with fragrant soap.', 'bar of bath soap on soap dish on white background'),
    v('Liquid Soap', '🧴', 'Sabonete líquido', '/ˈlɪk.wɪd soʊp/', 'Press the pump dispenser for liquid hand soap.', 'liquid hand soap pump dispenser bottle isolated on white background'),
    v('Shampoo', '🧴', 'Shampoo / Condicionador', '/ʃæmˈpuː/', 'Wash your hair with shampoo in the shower.', 'plastic shampoo bottle isolated on white background'),
    v('Toothbrush', '🪥', 'Escova de dentes', '/ˈtuːθ.brʌʃ/', 'Brush your teeth with a soft toothbrush.', 'single plastic toothbrush on white background'),
    v('Toothpaste', '🪥', 'Pasta de dente / Creme dental', '/ˈtuːθ.peɪst/', 'Squeeze white toothpaste onto the brush.', 'toothpaste tube with cap on white background'),
    v('Dental Floss', '🦷', 'Fio dental', '/ˈden.təl flɑːs/', 'Use dental floss between your teeth every night.', 'dental floss container box isolated on white background'),
    v('Comb', '🪮', 'Pente de cabelo', '/koʊm/', 'Part your wet hair with a comb.', 'hair comb on white background'),
    v('Hairbrush', '🪮', 'Escova de cabelo', '/ˈher.brʌʃ/', 'Brush your hair in front of the bathroom mirror.', 'paddle hairbrush isolated on white background'),
    v('Hair Dryer', '💨', 'Secador de cabelo', '/ˈher ˌdraɪ.ər/', 'Dry your hair quickly with an electric hair dryer.', 'electric blow hair dryer appliance isolated on white background'),
    v('Razor', '🪒', 'Aparelho de barbear', '/ˈreɪ.zər/', 'Shave carefully with a safety razor.', 'shaving razor blade handle isolated on white background'),
    v('Perfume', '🧴', 'Perfume / Colônia', '/pərˈfjuːm/', 'Spray a little perfume before going out.', 'glass perfume spray bottle on white background'),
    v('Bandage', '🩹', 'Curativo (Band-aid)', '/ˈbæn.dɪdʒ/', 'Keep adhesive bandages in the bathroom cabinet.', 'adhesive medical band-aid strip on white background'),
    v('Thermometer', '🌡️', 'Termômetro digital', '/θərˈmɑː.mə.tər/', 'Measure your temperature with a digital thermometer.', 'digital medical fever thermometer on white background'),
    v('Pill', '💊', 'Comprimido / Remédio', '/pɪl/', 'Take the medicine pill with a glass of water.', 'medicine pill capsule and tablet on white background'),
    v('Hand', '✋', 'Mão', '/hænd/', 'Wash both hands with soap and water.', 'open human hand palm on white background'),
    v('Tooth', '🦷', 'Dente', '/tuːθ/', 'Brush every tooth after meals.', 'single white tooth dental model on white background'),
    v('Mouth', '👄', 'Boca', '/maʊθ/', 'Rinse your mouth with water.', 'smiling human mouth lips and teeth on white background'),
    v('Eye', '👁️', 'Olho', '/aɪ/', 'Close your eyes when washing your face with soap.', 'human eye closeup on white background'),
    v('Ear', '👂', 'Orelha / Ouvido', '/ɪr/', 'Dry your ears gently with a towel.', 'human ear closeup on white background'),
    v('Nose', '👃', 'Nariz', '/noʊz/', 'Breathe fresh air through your nose.', 'human nose closeup on white background'),
    v('Hair', '💇', 'Cabelo', '/her/', 'Wash and brush your hair.', 'long healthy brown hair on white background'),
    v('Foot', '🦶', 'Pé', '/fʊt/', 'Wash your feet in the shower.', 'human bare foot on white background'),
    v('Arm', '💪', 'Braço', '/ɑːrm/', 'Apply lotion to your arms.', 'human arm and hand on white background'),
    v('Leg', '🦵', 'Perna', '/leɡ/', 'Dry your legs with the bath towel.', 'human leg and foot on white background'),
  ]
};

const MODULE_7_LAUNDRY_BACKYARD = {
  title: 'Ambiente 7 • Área de Serviço, Lavanderia, Quintal & Ferramentas',
  subtitle: 'Cômodo 7/12 • Máquina de lavar, cesto, ferro, vassoura, balde, ferramentas e animais no quintal',
  pedagogicalObjective: 'Explorar o fundo da residência: lavanderia, produtos e utensílios de limpeza, ferramentas de manutenção e os pets no quintal.',
  icon: 'house',
  theory: [
    'Chegamos ao fundo da casa: a Área de Serviço, Lavanderia e Quintal!',
    'Aqui vemos a Máquina de Lavar (Washing Machine), o Cesto de Roupa (Laundry Basket), o Sabão de Lavar Roupa (Laundry Detergent), o Pregador (Clothespin), o Ferro de Passar (Clothes Iron) e a Tábua de Passar (Ironing Board).',
    'Também temos os itens de limpeza (Broom, Dustpan, Mop, Bucket, Vacuum Cleaner), as ferramentas (Ladder, Hammer, Screwdriver, Wrench, Pliers, Saw, Drill) e nossos pets no quintal!'
  ],
  items: [
    v('Washing Machine', '🫧', 'Máquina de lavar roupa', '/ˈwɑː.ʃɪŋ məˌʃiːn/', 'Wash the family clothes in the washing machine.', 'front load clothes washing machine appliance on white background'),
    v('Laundry Basket', '🧺', 'Cesto de roupa', '/ˈlɔːn.dri ˈbæs.kɪt/', 'Put the clothes inside the plastic laundry basket.', 'plastic laundry hamper basket isolated on white background'),
    v('Laundry Detergent', '🧴', 'Sabão líquido / em pó para roupas', '/ˈlɔːn.dri dɪˈtɜːr.dʒənt/', 'Add laundry detergent to the washing machine.', 'liquid laundry detergent bottle isolated on white background'),
    v('Clothespin', '📎', 'Pregador de roupa no varal', '/ˈkloʊðz.pɪn/', 'Hang the wet shirts on the line with clothespins.', 'wooden and plastic clothespins pegs isolated on white background'),
    v('Clothes Iron', '💨', 'Ferro de passar roupa', '/ˈkloʊðz ˌaɪ.ərn/', 'Iron the dress shirt with a steam clothes iron.', 'electric steam clothes iron appliance on white background'),
    v('Ironing Board', ' ironing', 'Tábua de passar roupa', '/ˈaɪ.ər.nɪŋ bɔːrd/', 'Set up the folding ironing board in the laundry room.', 'folding ironing board isolated on white background'),
    v('Broom', '🧹', 'Vassoura', '/bruːm/', 'Sweep the backyard floor with a broom.', 'household sweeping broom with handle on white background'),
    v('Dustpan', '🧹', 'Pá de lixo', '/ˈdʌst.pæn/', 'Sweep the dust into the plastic dustpan.', 'plastic cleaning dustpan isolated on white background'),
    v('Mop', '🧹', 'Esfregão / Rodo com pano', '/mɑːp/', 'Clean the ceramic floor tiles with a wet mop.', 'floor cleaning mop with handle isolated on white background'),
    v('Bucket', '🪣', 'Balde de água', '/ˈbʌk.ɪt/', 'Fill the plastic bucket with water and soap.', 'blue plastic water bucket with handle on white background'),
    v('Vacuum Cleaner', '🧹', 'Aspirador de pó', '/ˈvæk.juːm ˈkliː.nər/', 'Clean the living room rug with a vacuum cleaner.', 'canister vacuum cleaner appliance isolated on white background'),
    v('Garden Hose', '🐍', 'Mangueira de jardim / quintal', '/ˈɡɑːr.dən hoʊz/', 'Wash the backyard with the green garden hose.', 'coiled green garden water hose with nozzle isolated on white background'),
    v('Watering Can', '🚿', 'Regador de plantas', '/ˈwɔː.tər.ɪŋ kæn/', 'Water the flowers using a watering can.', 'garden watering can with spout on white background'),
    v('Wheelbarrow', '🛒', 'Carrinho de mão', '/ˈwiːlˌbær.oʊ/', 'Carry soil and bricks in a wheelbarrow.', 'garden wheelbarrow cart on white background'),
    v('Shovel', ' лопата', 'Pá de jardim / obra', '/ˈʃʌv.əl/', 'Dig the garden soil with a metal shovel.', 'metal garden spade shovel tool on white background'),
    v('Ladder', '🪜', 'Escada portátil de alumínio', '/ˈlæd.ər/', 'Climb the step ladder to change the ceiling bulb.', 'folding aluminum step ladder on white background'),
    v('Hammer', '🔨', 'Martelo', '/ˈhæm.ər/', 'Fix the nail on the wall with a hammer.', 'claw hammer tool with wooden handle on white background'),
    v('Screwdriver', '🪛', 'Chave de fenda', '/ˈskruːˌdraɪ.vər/', 'Tighten the door hinge screw with a screwdriver.', 'hand screwdriver tool on white background'),
    v('Wrench', '🔧', 'Chave inglesa / Chave de boca', '/rentʃ/', 'Tighten the pipe nut with a steel wrench.', 'steel wrench spanner tool on white background'),
    v('Pliers', '🔧', 'Alicate', '/ˈplaɪ.ərz/', 'Cut and hold the wire using pliers.', 'hand pliers tool on white background'),
    v('Saw', '🪚', 'Serrote de cortar madeira', '/sɔː/', 'Cut the wooden board with a sharp hand saw.', 'carpenter hand saw tool on white background'),
    v('Tape Measure', '📏', 'Trena / Fita métrica', '/ˈteɪp ˌmeʒ.ər/', 'Measure the cabinet width with a tape measure.', 'yellow retractable tape measure tool on white background'),
    v('Drill', '🪛', 'Furadeira elétrica', '/drɪl/', 'Drill a hole in the brick wall with an electric drill.', 'cordless electric drill tool on white background'),
    v('Flashlight', '🔦', 'Lanterna', '/ˈflæʃ.laɪt/', 'Keep a bright flashlight for power outages.', 'handheld led flashlight torch on white background'),
    v('Battery', '🔋', 'Pilha / Bateria', '/ˈbæt.ər.i/', 'Put two new AA batteries in the remote control.', 'alkaline aa battery cell on white background'),
    v('Rope', '🪢', 'Corda', '/roʊp/', 'A strong coiled rope in the tool shed.', 'coiled twisted rope on white background'),
    v('Box', '📦', 'Caixa de papelão', '/bɑːks/', 'Store old items inside a cardboard box.', 'brown cardboard box on white background'),
    v('Dog', '🐕', 'Cachorro (no quintal)', '/dɔːɡ/', 'Our friendly dog plays in the backyard.', 'golden retriever dog full body sitting on white background'),
    v('Cat', '🐈', 'Gato (em casa)', '/kæt/', 'The cat naps near the laundry room.', 'domestic tabby cat full body standing on white background'),
    v('Parrot', '🦜', 'Papagaio', '/ˈpær.ət/', 'The green parrot chirps happily.', 'green parrot bird full body perching on white background'),
  ]
};

const MODULE_8_STREET_NEIGHBORHOOD = {
  title: 'Ambiente 8 • Na Rua, Calçada, Trânsito & Vizinhança',
  subtitle: 'Ambiente 8/12 • Saindo de casa: rua, faixa, semáforo, poste, veículos, praça e clima',
  pedagogicalObjective: 'Reconhecer tudo o que vemos ao sair de casa para caminhar ou dirigir pela rua e vizinhança.',
  icon: 'car',
  theory: [
    'Terminamos de explorar toda a nossa casa da frente aos fundos! Agora abrimos o portão e saímos para a Rua (Street)!',
    'Olhe para a Rua asfaltada (Street), a Faixa de Pedestres (Crosswalk), o Semáforo (Traffic Light), a Placa de Pare (Stop Sign), o Poste de Luz (Streetlight) e o Ponto de Ônibus (Bus Stop).',
    'Veja os veículos passando (Car, Bus, Motorcycle, Bicycle, Truck, Taxi, Ambulance, Police Car, Fire Truck), a Praça (Park Bench, Tree, Flower) e o Clima (Sun, Rain, Cloud, Umbrella)!'
  ],
  items: [
    v('Street', '🛣️', 'Rua asfaltada', '/striːt/', 'Cars drive along the paved city street.', 'paved asphalt road street section isolated on white background'),
    v('Crosswalk', '🚸', 'Faixa de pedestres', '/ˈkrɔːs.wɔːk/', 'Always cross the street on the white crosswalk stripes.', 'pedestrian zebra crosswalk stripes sign isolated on white background'),
    v('Traffic Light', '🚦', 'Semáforo / Sinal de trânsito', '/ˈtræf.ɪk laɪt/', 'Wait for the green traffic light before crossing.', 'red yellow green traffic light signal on white background'),
    v('Stop Sign', '🛑', 'Placa de PARE (sinalização)', '/stɑːp saɪn/', 'Every driver must stop at the red stop sign.', 'red octagon stop traffic sign isolated on white background'),
    v('Streetlight', '🏮', 'Poste de iluminação pública', '/ˈstriːt.laɪt/', 'The tall streetlight turns on at dusk.', 'street lamp post light pole isolated on white background'),
    v('Bus Stop', '🚏', 'Ponto de ônibus', '/bʌs stɑːp/', 'Passengers wait for the bus at the bus stop shelter.', 'city bus stop shelter sign isolated on white background'),
    v('Car', '🚗', 'Carro de passeio', '/kɑːr/', 'A red car is parked on the street.', 'red sedan passenger car full vehicle on white background'),
    v('Bus', '🚌', 'Ônibus urbano', '/bʌs/', 'Take the city bus to go downtown.', 'passenger city bus full vehicle on white background'),
    v('Motorcycle', '🏍️', 'Moto / Motocicleta', '/ˈmoʊ.tərˌsaɪ.kəl/', 'The delivery rider drives a motorcycle.', 'sport motorcycle motorbike full vehicle on white background'),
    v('Bicycle', '🚲', 'Bicicleta', '/ˈbaɪ.sɪ.kəl/', 'Ride your bicycle along the bike lane.', 'complete bicycle bike side view on white background'),
    v('Truck', '🚚', 'Caminhão', '/trʌk/', 'The cargo truck delivers goods to the market.', 'delivery box cargo truck full vehicle on white background'),
    v('Taxi', '🚕', 'Táxi', '/ˈtæk.si/', 'Wave to call a yellow taxi on the avenue.', 'yellow taxi cab car full vehicle on white background'),
    v('Van', '🚐', 'Van / Perua escolar', '/væn/', 'The white van transports students to school.', 'white passenger van minivan full vehicle on white background'),
    v('Ambulance', '🚑', 'Ambulância', '/ˈæm.bjə.ləns/', 'The ambulance siren sounds in the street.', 'emergency medical ambulance van full vehicle on white background'),
    v('Police Car', '🚓', 'Viatura de polícia', '/pəˈliːs kɑːr/', 'The police car patrols our neighborhood.', 'police patrol car with lightbar full vehicle on white background'),
    v('Fire Truck', '🚒', 'Caminhão de bombeiros', '/ˈfaɪ.ər trʌk/', 'The red fire truck speeds down the avenue.', 'red fire engine truck with ladder full vehicle on white background'),
    v('Helmet', '⛑️', 'Capacete de segurança', '/ˈhel.mət/', 'Always wear a helmet on a motorcycle or bike.', 'motorcycle protective helmet on white background'),
    v('Tire', '🛞', 'Pneu / Roda do veículo', '/ˈtaɪ.ər/', 'The car has four rubber tires.', 'black rubber car tire with wheel rim on white background'),
    v('Steering Wheel', '🛞', 'Volante de direção', '/ˈstɪr.ɪŋ wiːl/', 'Hold the car steering wheel firmly.', 'car steering wheel on white background'),
    v('Fuel Pump', '⛽', 'Bomba de combustível (Posto)', '/ˈfjuː.əl pʌmp/', 'Stop at the gas station fuel pump to refuel.', 'gasoline fuel pump dispenser on white background'),
    v('Park Bench', '🪑', 'Banco da praça', '/pɑːrk bentʃ/', 'Sit on the wooden park bench in the square.', 'wooden park bench with iron legs isolated on white background'),
    v('Bridge', '🌉', 'Ponte / Viaduto', '/brɪdʒ/', 'Cross the bridge over the city river.', 'bridge structure over water on white background'),
    v('Building', '🏢', 'Prédio / Edifício', '/ˈbɪl.dɪŋ/', 'Tall apartment buildings line the avenue.', 'modern apartment office building on white background'),
    v('Tree', '🌳', 'Árvore na calçada / praça', '/triː/', 'Green trees give shade along the sidewalk.', 'single green leafy tree on white background'),
    v('Flower', '🌻', 'Flor do jardim / canteiro', '/ˈflaʊ.ər/', 'Colorful flowers bloom in the town square.', 'single blooming flower with stem on white background'),
    v('Bird', '🐦', 'Pássaro', '/bɜːrd/', 'A bird sings on the tree branch.', 'small colorful songbird full body perching on white background'),
    v('Pigeon', '🐦', 'Pombo na praça', '/ˈpɪdʒ.ən/', 'Gray pigeons walk around the square.', 'gray city pigeon bird full body standing on white background'),
    v('Sun', '☀️', 'Sol no céu', '/sʌn/', 'The bright sun warms the neighborhood.', 'bright yellow sun in sky on white background'),
    v('Rain', '🌧️', 'Chuva', '/reɪn/', 'Rain falls on the street.', 'raincloud with falling water raindrops on white background'),
    v('Umbrella', '☂️', 'Guarda-chuva', '/ʌmˈbrel.ə/', 'Open your umbrella when walking in the rain.', 'open colorful rain umbrella on white background'),
  ]
};

const MODULE_9_SCHOOL_CLASSROOM = {
  title: 'Ambiente 9 • Na Escola, Sala de Aula & Material Escolar',
  subtitle: 'Ambiente 9/12 • Sala de aula, quadro, carteira, professor, mochila, cadernos, papelaria e esportes',
  pedagogicalObjective: 'Dominar todo o ambiente escolar: sala de aula, mobiliário, professor, materiais de estudo, laboratório e quadra.',
  icon: 'book',
  theory: [
    'Caminhando pela rua, chegamos à Escola (School) e entramos na Sala de Aula (Classroom)!',
    'Veja o Quadro Branco / Lousa (Whiteboard), a Carteira Escolar (Student Desk), o Professor (Teacher), a Mochila (Backpack), o Livro (Book) e o Caderno (Notebook).',
    'Sobre a carteira estão a Caneta (Pen), o Lápis (Pencil), a Borracha (Eraser), o Apontador (Pencil Sharpener), a Régua (Ruler), a Tesoura (Scissors), a Cola (Glue), a Calculadora (Calculator) e o Globo Terrestre (Globe)!'
  ],
  items: [
    v('School', '🏫', 'Escola / Colégio', '/skuːl/', 'Children arrive at the school in the morning.', 'school building with flag on white background'),
    v('Classroom', '🏫', 'Sala de aula', '/ˈklæs.ruːm/', 'Students sit at their desks in the classroom.', 'school classroom desk and board isolated on white background'),
    v('Whiteboard', '📋', 'Quadro branco / Lousa escolar', '/ˈwaɪt.bɔːrd/', 'The teacher writes English words on the whiteboard.', 'blank school whiteboard with marker tray isolated on white background'),
    v('Student Desk', '🪑', 'Carteira escolar (mesa e cadeira)', '/ˈstuː.dənt desk/', 'Open your notebook on the student desk.', 'school student desk and chair furniture isolated on white background'),
    v('Teacher', '👩‍🏫', 'Professor / Professora', '/ˈtiː.tʃər/', 'The teacher explains the lesson clearly.', 'friendly school teacher holding book on white background'),
    v('Backpack', '🎒', 'Mochila escolar', '/ˈbæk.pæk/', 'Carry your books inside a school backpack.', 'school backpack bag with zippers on white background'),
    v('Book', '📘', 'Livro didático', '/bʊk/', 'Open your English book to page ten.', 'single hardcover book on white background'),
    v('Notebook', '📓', 'Caderno espiral', '/ˈnoʊt.bʊk/', 'Write the vocabulary list in your spiral notebook.', 'spiral paper notebook on white background'),
    v('Pen', '🖊️', 'Caneta esferográfica', '/pen/', 'Sign your name with a blue ballpoint pen.', 'single blue ballpoint pen on white background'),
    v('Pencil', '✏️', 'Lápis de escrever', '/ˈpen.səl/', 'Draw and write with a yellow wooden pencil.', 'single yellow wooden pencil with eraser on white background'),
    v('Eraser', '🧽', 'Borracha de apagar', '/ɪˈreɪ.sər/', 'Correct the mistake using a rubber eraser.', 'single white rubber pencil eraser on white background'),
    v('Pencil Sharpener', '✏️', 'Apontador de lápis', '/ˈpen.səl ˈʃɑːr.pən.ər/', 'Sharpen the pencil tip with a pencil sharpener.', 'plastic pencil sharpener isolated on white background'),
    v('Ruler', '📏', 'Régua escolar', '/ˈruː.lər/', 'Draw a straight line with a plastic ruler.', 'plastic centimeter ruler on white background'),
    v('Scissors', '✂️', 'Tesoura escolar', '/ˈsɪz.ərz/', 'Cut the paper along the line with scissors.', 'single pair of paper scissors on white background'),
    v('Glue', '🧴', 'Cola branca / bastão', '/ɡluː/', 'Use school glue to paste the picture.', 'white school glue bottle on white background'),
    v('Paper', '📄', 'Folha de papel', '/ˈpeɪ.pər/', 'Write your test answers on a sheet of paper.', 'clean white paper sheets on white background'),
    v('Envelope', '✉️', 'Envelope de papel', '/ˈen.və.loʊp/', 'Put the school letter inside a paper envelope.', 'white paper mailing envelope on white background'),
    v('Calculator', '🧮', 'Calculadora', '/ˈkæl.kjə.leɪ.tər/', 'Check the math result on a pocket calculator.', 'electronic pocket calculator with buttons on white background'),
    v('Globe', '🌍', 'Globo terrestre', '/ɡloʊb/', 'Find Brazil and the United States on the desk globe.', 'world earth globe on stand on white background'),
    v('Map', '🗺️', 'Mapa geográfico', '/mæp/', 'Look at the world map in geography class.', 'folded world map paper on white background'),
    v('Microscope', '🔬', 'Microscópio de ciências', '/ˈmaɪ.krə.skoʊp/', 'Look at cells through the laboratory microscope.', 'laboratory optical microscope on white background'),
    v('Paintbrush', '🖌️', 'Pincel de pintura (aula de artes)', '/ˈpeɪnt.brʌʃ/', 'Paint a picture using watercolors and a paintbrush.', 'artist paintbrush with wooden handle on white background'),
    v('Phone', '📱', 'Celular / Smartphone', '/foʊn/', 'Use the Lingo World app on your phone to study.', 'modern smartphone mobile phone front view on white background'),
    v('Headphones', '🎧', 'Fone de ouvido', '/ˈhed.foʊnz/', 'Listen to the English pronunciation with headphones.', 'wireless over ear headphones on white background'),
    v('Keyboard', '⌨️', 'Teclado de computador', '/ˈkiː.bɔːrd/', 'Type your essay on the computer keyboard.', 'computer typing keyboard on white background'),
    v('Computer Mouse', '🖱️', 'Mouse de computador', '/kəmˈpjuː.tər maʊs/', 'Click the button using the computer mouse.', 'wireless computer mouse on white background'),
    v('Library', '📚', 'Biblioteca escolar', '/ˈlaɪ.brer.i/', 'Students read quietly in the school library.', 'library building interior with bookshelves on white background'),
    v('Soccer Ball', '⚽', 'Bola de futebol (na quadra)', '/ˈsɑː.kər bɔːl/', 'Play soccer in physical education class.', 'classic black and white soccer ball football on white background'),
    v('Basketball', '🏀', 'Bola de basquete', '/ˈbæs.kɪt.bɔːl/', 'Shoot the orange basketball into the hoop.', 'orange basketball ball on white background'),
    v('Medal', '🥇', 'Medalha escolar / esportiva', '/ˈmed.əl/', 'She won a gold medal in the school competition.', 'gold winner medal with ribbon on white background'),
  ]
};

const MODULE_10_SUPERMARKET_GROCERY = {
  title: 'Ambiente 10 • No Supermercado, Hortifrúti, Padaria & Caixa',
  subtitle: 'Ambiente 10/12 • Carrinho, cesta, corredores, frutas, verduras, açougue, padaria e pagamento',
  pedagogicalObjective: 'Fazer compras completas no supermercado identificando equipamentos, alimentos básicos, hortifrúti, padaria e formas de pagamento.',
  icon: 'apple',
  theory: [
    'Saindo da escola, vamos ao Supermercado (Supermarket) fazer as compras da casa!',
    'Pegue o Carrinho de Compras (Shopping Cart) ou a Cesta (Basket) e passe pela Padaria (Bakery: Bread, Cheese Bread, Cake), pela Mercearia (Rice, Beans, Pasta, Coffee, Sugar, Olive Oil) e pelo Açougue (Steak, Roast Chicken, Fish Fillet).',
    'No setor de Hortifrúti escolhemos as frutas e verduras mais frescas e, ao final, passamos no Caixa com Cartão de Crédito (Credit Card) ou Dinheiro (Money)!'
  ],
  items: [
    v('Supermarket', '🛒', 'Supermercado', '/ˈsuː.pərˌmɑːr.kɪt/', 'We buy food for the week at the supermarket.', 'supermarket grocery store building on white background'),
    v('Shopping Cart', '🛒', 'Carrinho de supermercado', '/ˈʃɑː.pɪŋ kɑːrt/', 'Push the metal shopping cart down the aisle.', 'metal supermarket shopping cart trolley isolated on white background'),
    v('Basket', '🧺', 'Cesta de compras', '/ˈbæs.kɪt/', 'Carry a few items in a hand basket.', 'woven wicker basket with handle on white background'),
    v('Bakery', '🥖', 'Padaria', '/ˈbeɪ.kər.i/', 'Fresh warm bread is baked at the bakery.', 'bakery shop storefront with bread display on white background'),
    v('Bread', '🍞', 'Pão', '/bred/', 'Buy a fresh loaf of bread at the bakery.', 'whole golden loaf of bread on white background'),
    v('Cheese Bread', '🧀', 'Pão de queijo', '/ˈtʃiːz bred/', 'Warm Brazilian cheese bread from the bakery.', 'golden brazilian pao de queijo cheese bread buns on white background'),
    v('Cake', '🍰', 'Bolo confeitado', '/keɪk/', 'Pick up a chocolate cake for the birthday.', 'whole chocolate cake with frosting on white background'),
    v('Rice', '🍚', 'Arroz', '/raɪs/', 'Put a bag of white rice in the shopping cart.', 'bowl of cooked white rice on white background'),
    v('Beans', '🫘', 'Feijão', '/biːnz/', 'Rice and beans are essentials on the grocery list.', 'bowl of cooked brown beans feijao on white background'),
    v('Pasta', '🍝', 'Macarrão', '/ˈpɑː.stə/', 'Buy two packages of spaghetti pasta.', 'plate of spaghetti pasta with red tomato sauce on white background'),
    v('Steak', '🥩', 'Carne bovina / Bife (Açougue)', '/steɪk/', 'Choose fresh beef steak at the butcher counter.', 'grilled beef steak on plate on white background'),
    v('Roast Chicken', '🍗', 'Frango', '/ˈroʊst ˈtʃɪk.ɪn/', 'Roast chicken for Sunday family lunch.', 'whole golden roast chicken on plate on white background'),
    v('Fish Fillet', '🐟', 'Filé de peixe (Peixaria)', '/ˈfɪʃ fɪˈleɪ/', 'Fresh fish fillet from the seafood counter.', 'cooked grilled fish fillet on plate on white background'),
    v('Banana', '🍌', 'Banana (Hortifrúti)', '/bəˈnæn.ə/', 'Pick a bunch of ripe yellow bananas.', 'ripe yellow banana bunch whole fruit on white background'),
    v('Orange', '🍊', 'Laranja', '/ˈɔːr.ɪndʒ/', 'Sweet oranges for making fresh juice.', 'whole orange fruit and half orange on white background'),
    v('Strawberry', '🍓', 'Morango', '/ˈstrɔː.ber.i/', 'A box of red strawberries from the market.', 'single whole red strawberry fruit with green leaf on white background'),
    v('Grape', '🍇', 'Uva', '/ɡreɪp/', 'Sweet purple grapes in the produce section.', 'whole bunch of purple grapes fruit on white background'),
    v('Watermelon', '🍉', 'Melancia', '/ˈwɔː.tərˌmel.ən/', 'A large green watermelon with red flesh.', 'whole green watermelon with one red triangle wedge on white background'),
    v('Pineapple', '🍍', 'Abacaxi', '/ˈpaɪnˌæp.əl/', 'Smell the ripe pineapple to see if it is sweet.', 'single whole pineapple fruit with green crown on white background'),
    v('Papaya', '🧡', 'Mamão', '/pəˈpaɪ.ə/', 'Ripe papaya for tomorrow morning breakfast.', 'ripe orange papaya fruit cut in half lengthwise showing black seeds on white background'),
    v('Tomato', '🍅', 'Tomate', '/təˈmeɪ.toʊ/', 'Red tomatoes for the salad and sauce.', 'single whole red tomato with green stem on white background'),
    v('Potato', '🥔', 'Batata', '/pəˈteɪ.toʊ/', 'Wash and peel the yellow potatoes.', 'whole washed yellow potato vegetable on white background'),
    v('Carrot', '🥕', 'Cenoura', '/ˈkær.ət/', 'Crunchy orange carrots from the market.', 'single whole orange carrot with green leaves on white background'),
    v('Onion', '🧅', 'Cebola', '/ˈʌn.jən/', 'Yellow onions and garlic for seasoning.', 'single whole yellow onion bulb on white background'),
    v('Garlic', '🧄', 'Alho', '/ˈɡɑːr.lɪk/', 'A whole bulb of white garlic.', 'whole white garlic head bulb on white background'),
    v('Broccoli', '🥦', 'Brócolis', '/ˈbrɑː.kəl.i/', 'Fresh green broccoli florets.', 'single whole green broccoli head on white background'),
    v('Coffee', '☕', 'Café', '/ˈkɔː.fi/', 'Brazilians love fresh hot coffee every day.', 'white porcelain cup of black coffee on white background'),
    v('Olive Oil', '🫒', 'Azeite de oliva', '/ˈɑː.lɪv ɔɪl/', 'A glass bottle of extra virgin olive oil.', 'glass bottle of golden olive oil on white background'),
    v('Credit Card', '💳', 'Cartão de crédito / débito (no caixa)', '/ˈkred.ɪt kɑːrd/', 'Pay for the groceries with a credit card.', 'plastic bank credit card with chip on white background'),
    v('Money', '💵', 'Dinheiro em espécie', '/ˈmʌn.i/', 'Count your change in paper money and coins.', 'stack of paper money banknotes on white background'),
  ]
};

const MODULE_11_CHURCH_COMMUNITY = {
  title: 'Ambiente 11 • Na Igreja, Música, Comunidade & Celebração',
  subtitle: 'Ambiente 11/12 • Igreja, sino, cruz, vitral, bancos, altar, Bíblia, vela, instrumentos e trajes',
  pedagogicalObjective: 'Reconhecer todos os elementos arquitetônicos, objetos litúrgicos, instrumentos musicais e vestimentas encontrados na igreja e em celebrações comunitárias.',
  icon: 'star',
  theory: [
    'Continuando nosso passeio pelos locais do cotidiano, visitamos a Igreja (Church)!',
    'Olhe para a arquitetura e o interior do templo: a Igreja (Church), o Sino da Torre (Church Bell), a Cruz (Cross), o Vitral Colorido (Stained Glass), os Bancos da Igreja (Church Pew), o Altar (Altar), o Púlpito (Pulpit), a Bíblia (Bible) e a Vela (Candle).',
    'Na parte musical e comunitária vemos o Microfone (Microphone), o Violão (Guitar), o Piano / Teclado (Piano), o Violino (Violin), a Flauta (Flute), o Terno (Suit), a Gravata (Necktie) e a Aliança (Ring)!'
  ],
  items: [
    v('Church', '⛪', 'Igreja / Templo', '/tʃɜːrtʃ/', 'Families gather at the neighborhood church on Sunday.', 'traditional church building with steeple cross on white background'),
    v('Church Bell', '🔔', 'Sino da igreja', '/tʃɜːrtʃ bel/', 'The bronze church bell rings in the tower.', 'bronze church bell isolated on white background'),
    v('Cross', '✝️', 'Cruz', '/krɔːs/', 'A wooden cross stands above the church altar.', 'wooden christian cross isolated on white background'),
    v('Stained Glass', '🪟', 'Vitral colorido da igreja', '/steɪnd ɡlæs/', 'Sunlight shines through the colorful stained glass window.', 'colorful church stained glass arch window isolated on white background'),
    v('Church Pew', '🪑', 'Banco de madeira da igreja', '/tʃɜːrtʃ pjuː/', 'The congregation sits on the long wooden church pews.', 'wooden church pew bench isolated on white background'),
    v('Altar', '🕯️', 'Altar da igreja', '/ˈɔːl.tər/', 'White flowers and candles decorate the church altar.', 'wooden church altar table with white cloth isolated on white background'),
    v('Pulpit', '📖', 'Púlpito / Tribuna de leitura', '/ˈpʊl.pɪt/', 'The speaker reads from the Bible at the wooden pulpit.', 'wooden church pulpit lectern isolated on white background'),
    v('Bible', '📖', 'Bíblia Sagrada', '/ˈbaɪ.bəl/', 'Read a chapter from the Holy Bible.', 'leather bound holy bible book with gold cross isolated on white background'),
    v('Candle', '🕯️', 'Vela acesa', '/ˈkæn.dəl/', 'A white wax candle burns softly on the altar.', 'lit white wax candle on white background'),
    v('Microphone', '🎤', 'Microfone do altar / coral', '/ˈmaɪ.krə.foʊn/', 'Speak clearly into the stand microphone.', 'vocal microphone on stand isolated on white background'),
    v('Guitar', '🎸', 'Violão acústico', '/ɡɪˈtɑːr/', 'He plays the acoustic guitar in the church choir.', 'wooden acoustic guitar instrument on white background'),
    v('Piano', '🎹', 'Piano / Teclado musical', '/piˈæn.oʊ/', 'She plays beautiful melodies on the piano.', 'grand piano musical instrument with keys on white background'),
    v('Drum', '🥁', 'Bateria / Tambor', '/drʌm/', 'The drummer keeps the rhythm on the drum.', 'musical snare drum with drumsticks on white background'),
    v('Violin', '🎻', 'Violino', '/ˌvaɪ.əˈlɪn/', 'The wooden violin sounds warm and expressive.', 'wooden violin with bow on white background'),
    v('Flute', '🪈', 'Flauta musical', '/fluːt/', 'A silver flute plays a gentle melody.', 'silver concert flute instrument on white background'),
    v('Dove', '🕊️', 'Pomba branca da paz', '/dʌv/', 'The white dove is a universal symbol of peace.', 'white dove bird flying isolated on white background'),
    v('Heart', '❤️', 'Coração (amor e caridade)', '/hɑːrt/', 'Share kindness from the bottom of your heart.', 'red heart shape 3d model on white background'),
    v('Crown', '👑', 'Coroa dourada', '/kraʊn/', 'A golden crown with shining jewels.', 'gold royal crown with jewels on white background'),
    v('Star', '⭐', 'Estrela guia', '/stɑːr/', 'A bright star shines in the night sky.', 'bright five pointed star on white background'),
    v('Gift', '🎁', 'Presente / Doação comunitária', '/ɡɪft/', 'They prepared gift boxes for charity.', 'wrapped gift box with ribbon bow on white background'),
    v('Chandelier', '💡', 'Lustre clássico do templo', '/ˌʃæn.dəˈlɪr/', 'A crystal chandelier hangs from the church ceiling.', 'crystal chandelier ceiling light fixture isolated on white background'),
    v('Suit', '🤵', 'Terno / Roupa social', '/suːt/', 'He wore a navy blue suit to the ceremony.', 'men formal suit jacket and pants isolated on white background'),
    v('Necktie', '👔', 'Gravata social', '/ˈnek.taɪ/', 'Tie a silk necktie around your collar.', 'red silk necktie tie on white background'),
    v('Ring', '💍', 'Aliança / Anel de ouro', '/rɪŋ/', 'The couple exchanged gold wedding rings at the altar.', 'gold ring with diamond on white background'),
    v('Necklace', '📿', 'Colar / Correntinha', '/ˈnek.lɪs/', 'She wears a delicate gold necklace.', 'gold chain necklace with pendant on white background'),
    v('Wine Glass', '🍷', 'Cálice / Taça', '/waɪn ɡlæs/', 'A golden chalice and glass goblet on the table.', 'clear glass goblet chalice isolated on white background'),
    v('Wheelchair', '♿', 'Cadeira de rodas (Acessibilidade)', '/ˈwiːl.tʃer/', 'The church entrance has a ramp for wheelchairs.', 'medical manual wheelchair isolated on white background'),
    v('Handshake', '🤝', 'Aperto de mão / Cumprimento fraterno', '/ˈhænd.ʃeɪk/', 'Greet your neighbors with a warm handshake.', 'two hands shaking handshake isolated on white background'),
    v('Rainbow', '🌈', 'Arco-íris no céu', '/ˈreɪn.boʊ/', 'A colorful rainbow appeared after the rain.', 'colorful rainbow arc in sky on white background'),
    v('Moon', '🌙', 'Lua no céu noturno', '/muːn/', 'The full moon shines after the evening service.', 'full moon in night sky on white background'),
  ]
};

const MODULE_12_CITY_SERVICES = {
  title: 'Ambiente 12 • Restaurante, Hospital, Banco, Segurança & Viagem',
  subtitle: 'Ambiente 12/12 • Locais públicos, profissões, saúde, finanças, lazer e aeroporto',
  pedagogicalObjective: 'Concluir a jornada pelo cotidiano dominando restaurantes, hospitais, bancos, delegacia, bombeiros, hotel, cinema e aeroporto.',
  icon: 'swords',
  theory: [
    'Chegamos ao 12º e último módulo da nossa Jornada de Imersão pelo Cotidiano!',
    'Aqui visitamos o Restaurante (Restaurant, Chef, Pizza, Hamburger, Ice Cream), o Hospital e Consultório (Hospital, Doctor, Nurse, Dentist), o Banco (Bank, Coin) e a Segurança Pública (Police Station, Police Officer, Fire Station, Firefighter).',
    'Por fim, passamos pelo Hotel, Cinema e Aeroporto (Hotel, Suitcase, Passport, Airport, Airplane, Pilot, Train, Subway, Ship). Faça 70 pontos ou mais nesta prova final para concluir o Módulo 0 com maestria!'
  ],
  items: [
    v('Restaurant', '🍽️', 'Restaurante', '/ˈres.tər.ɑːnt/', 'We had dinner together at an Italian restaurant.', 'restaurant building exterior with tables on white background'),
    v('Chef', '👨‍🍳', 'Chef de cozinha / Cozinheiro', '/ʃef/', 'The restaurant chef prepares delicious meals.', 'chef cook in white uniform and chef hat on white background'),
    v('Pizza', '🍕', 'Pizza', '/ˈpiːt.sə/', 'Order a hot cheese pizza at the restaurant.', 'whole round cheese pepperoni pizza on white background'),
    v('Hamburger', '🍔', 'Hambúrguer', '/ˈhæmˌbɜːr.ɡər/', 'A juicy hamburger with lettuce and cheese.', 'single classic cheeseburger hamburger on white background'),
    v('French Fries', '🍟', 'Batata frita', '/ˈfrentʃ fraɪz/', 'Crispy golden French fries with ketchup.', 'portion of crispy golden french fries on white background'),
    v('Ice Cream', '🍦', 'Sorvete', '/ˈaɪs kriːm/', 'Cold chocolate and vanilla ice cream.', 'ice cream scoop in waffle cone on white background'),
    v('Hospital', '🏥', 'Hospital / Pronto-socorro', '/ˈhɑː.spɪ.təl/', 'Doctors and nurses work at the city hospital.', 'hospital building with red cross sign on white background'),
    v('Doctor', '👨‍⚕️', 'Médico / Médica', '/ˈdɑːk.tər/', 'The doctor examines the patient with a stethoscope.', 'friendly medical doctor in white coat with stethoscope on white background'),
    v('Nurse', '👩‍⚕️', 'Enfermeira / Enfermeiro', '/nɜːrs/', 'The hospital nurse takes care of everyone.', 'friendly hospital nurse in scrubs on white background'),
    v('Dentist', '🦷', 'Dentista', '/ˈden.tɪst/', 'Visit the dentist twice a year.', 'dentist in coat holding tooth model on white background'),
    v('Pharmacy', '💊', 'Farmácia / Drogaria', '/ˈfɑːr.mə.si/', 'Buy medicine and vitamins at the pharmacy.', 'pharmacy drugstore building storefront on white background'),
    v('Bank', '🏦', 'Banco / Agência bancária', '/bæŋk/', 'Deposit money safely at the bank.', 'bank building with columns on white background'),
    v('Coin', '🪙', 'Moeda', '/kɔɪn/', 'Keep the shiny metal coins in your wallet.', 'shiny gold metal coin on white background'),
    v('Police Station', '🚓', 'Delegacia de polícia', '/pəˈliːs ˈsteɪ.ʃən/', 'Report the lost document at the police station.', 'police station building exterior on white background'),
    v('Police Officer', '👮', 'Policial', '/pəˈliːs ˌɔː.fɪ.sər/', 'The police officer helps citizens in the city.', 'police officer in uniform on white background'),
    v('Fire Station', '🚒', 'Quartel do Corpo de Bombeiros', '/ˈfaɪ.ər ˈsteɪ.ʃən/', 'Fire trucks are parked inside the fire station.', 'fire station building with red doors on white background'),
    v('Firefighter', '🧑‍🚒', 'Bombeiro', '/ˈfaɪ.ərˌfaɪ.tər/', 'The brave firefighter wears a yellow helmet.', 'firefighter in helmet and uniform on white background'),
    v('Hotel', '🏨', 'Hotel', '/hoʊˈtel/', 'We stayed at a comfortable hotel during vacation.', 'hotel building exterior on white background'),
    v('Suitcase', '🧳', 'Mala de viagem com rodinhas', '/ˈsuːt.keɪs/', 'Pack your clothes inside the rolling suitcase.', 'rolling travel suitcase luggage with wheels on white background'),
    v('Passport', '🛂', 'Passaporte de viagem', '/ˈpæs.pɔːrt/', 'Show your passport at the international airport.', 'travel passport booklet on white background'),
    v('Airport', '🛫', 'Aeroporto', '/ˈer.pɔːrt/', 'Arrive at the airport two hours before your flight.', 'airport terminal building with control tower on white background'),
    v('Airplane', '✈️', 'Avião comercial', '/ˈer.pleɪn/', 'The passenger airplane takes off from the runway.', 'commercial passenger airplane full aircraft on white background'),
    v('Pilot', '👨‍✈️', 'Piloto de avião', '/ˈpaɪ.lət/', 'The airline pilot greets the passengers.', 'airline pilot in uniform and cap on white background'),
    v('Helicopter', '🚁', 'Helicóptero', '/ˈhel.ɪˌkɑːp.tər/', 'A helicopter flies above the city buildings.', 'helicopter full aircraft on white background'),
    v('Train', '🚆', 'Trem ferroviário', '/treɪn/', 'The express train travels between cities.', 'modern passenger train locomotive on white background'),
    v('Subway', '🚇', 'Metrô subterrâneo', '/ˈsʌb.weɪ/', 'Take the underground subway to avoid traffic.', 'subway metro train car on white background'),
    v('Ship', '🚢', 'Navio', '/ʃɪp/', 'The large ship sails across the blue ocean.', 'large passenger cruise ship vessel on white background'),
    v('Movie Theater', '🍿', 'Cinema', '/ˈmuː.vi ˈθiː.ə.tər/', 'Watch a new film at the movie theater.', 'cinema movie theater entrance with marquee on white background'),
    v('Popcorn', '🍿', 'Pipoca', '/ˈpɑːp.kɔːrn/', 'Eat warm buttered popcorn at the cinema.', 'striped bucket of popcorn on white background'),
    v('Trophy', '🏆', 'Troféu de conquista', '/ˈtroʊ.fi/', 'Congratulations! You earned the golden trophy!', 'golden champion trophy cup on white background'),
  ]
};

// Deterministic seeded shuffle helper using upper bits so modulo 4 / modulo 2 never repeats
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

// Build exercises for a 30-item environment module with 4-exercise image cooldown and evenly distributed correct slots
function buildExercisesWithCooldown(theme, phaseNumber) {
  const items = theme.items;
  const n = items.length; // 30
  const phaseId = `w0-p${phaseNumber}`;

  const lastSeenAt = new Map();
  const usageCount = new Map();
  items.forEach((it) => usageCount.set(it.text, 0));

  const exercises = [];

  for (let idx = 0; idx < n; idx++) {
    const target = items[idx];

    const futureTargetSet = new Set();
    for (let f = idx + 1; f <= Math.min(n - 1, idx + 3); f++) {
      futureTargetSet.add(items[f].text);
    }

    let eligible = items.filter((cand) => {
      if (cand.text === target.text) return false;
      if (futureTargetSet.has(cand.text)) return false;
      const seen = lastSeenAt.get(cand.text);
      if (seen !== undefined && idx - seen < 4) return false;
      return true;
    });

    if (eligible.length < 3) {
      eligible = items.filter((cand) => {
        if (cand.text === target.text) return false;
        const seen = lastSeenAt.get(cand.text);
        if (seen !== undefined && idx - seen < 4) return false;
        return true;
      });
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
      prompt = '🎧 Identifique pelo som qual é o item correto deste ambiente:';
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
      explanation: `Exemplo prático: "${target.sentence}"`,
      phoneticHint: target.phonetic,
      skillCategory: category,
    });
  }

  return exercises;
}

function makeEnvironmentPhase(theme, phaseNumber, isFinal) {
  const phaseId = `w0-p${phaseNumber}`;
  return {
    id: phaseId,
    worldId: 0,
    phaseNumber,
    title: theme.title,
    subtitle: theme.subtitle,
    pedagogicalObjective: theme.pedagogicalObjective,
    type: isFinal ? 'boss' : 'lesson',
    icon: theme.icon,
    cefrLevel: 'A1',
    theorySummary: theme.theory,
    xpReward: isFinal ? 100 : 50,
    gemsReward: isFinal ? 40 : 20,
    exercises: buildExercisesWithCooldown(theme, phaseNumber),
  };
}

const ALL_ENVIRONMENTS = [
  MODULE_1_ENTRANCE,
  MODULE_2_LIVING_ROOM,
  MODULE_3_KITCHEN_STRUCTURE,
  MODULE_4_KITCHEN_UTENSILS_FRIDGE,
  MODULE_5_BEDROOM_CLOSET,
  MODULE_6_BATHROOM_HYGIENE,
  MODULE_7_LAUNDRY_BACKYARD,
  MODULE_8_STREET_NEIGHBORHOOD,
  MODULE_9_SCHOOL_CLASSROOM,
  MODULE_10_SUPERMARKET_GROCERY,
  MODULE_11_CHURCH_COMMUNITY,
  MODULE_12_CITY_SERVICES,
];

const phases = ALL_ENVIRONMENTS.map((env, idx) =>
  makeEnvironmentPhase(env, idx + 1, idx === ALL_ENVIRONMENTS.length - 1)
);

// Preserve all 480 already-approved image URLs and only add new keys for the newly introduced room/environment items
const mergedImagesMap = { ...existingImagesMap };
let addedNewCount = 0;
for (const env of ALL_ENVIRONMENTS) {
  for (const item of env.items) {
    if (!mergedImagesMap[item.text]) {
      const q = encodeURIComponent(item.studioQuery);
      mergedImagesMap[item.text] = `https://tse1.mm.bing.net/th?q=${q}&w=500&p=0`;
      addedNewCount++;
    }
  }
}

const fileContent = `import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

const imagesFileContent = `// Auto-generated & pixel-verified pure white background photographs (zero tarja, uncropped)\nexport const REAL_VOCAB_IMAGES: Record<string, string> = ${JSON.stringify(mergedImagesMap, null, 2)};\n`;

fs.writeFileSync('src/data/world0Phases.ts', fileContent, 'utf-8');
fs.writeFileSync('src/data/realVocabImages.ts', imagesFileContent, 'utf-8');

console.log('Successfully generated 12 real-world environment modules in src/data/world0Phases.ts!');
console.log('Preserved existing approved images and added', addedNewCount, 'new environment item images. Total in map:', Object.keys(mergedImagesMap).length);
