const fs = require('fs');

// Read existing verified REAL_VOCAB_IMAGES so we keep the approved isolated object/fruit/animal images
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

function v(text, emoji, pt, phonetic, sentence, studioQuery, forceOverrideImage = false) {
  return {
    text,
    emoji,
    label: text,
    pt,
    phonetic,
    sentence: sentence || `This is ${text.toLowerCase()}.`,
    studioQuery: studioQuery || `${text} isolated on white background cutout`,
    forceOverrideImage,
  };
}

// ============================================================================
// 12 MÓDULOS PUROS DE VOCABULÁRIO (AMBIENTES REAIS) + 4 MÓDULOS PUROS DE PRONOMES
// (1 Módulo de Pronomes a cada 3 Módulos de Vocabulário = 16 Fases no Módulo 0)
// ============================================================================

const MODULE_1_ENTRANCE = {
  title: 'Vocabulário 1 • Entrada da Casa, Calçada & Porta',
  subtitle: 'Ambiente 1/12 • Da calçada completa até abrir a porta de entrada',
  pedagogicalObjective: 'Conhecer tudo o que vemos ao chegar em casa: calçada completa, portão, muro, telhado na casa, parede, tinta, porta de madeira, fechadura de metal, maçaneta e chave.',
  icon: 'house',
  theory: [
    'Exploramos nossa residência começando pela frente da casa: Calçada (Sidewalk), Portão (Gate), Muro (Brick Wall), Cerca (Fence), Jardim (Front Yard) e o Telhado na casa (Roof).',
    'Na porta de entrada vemos a Porta (Door), a Madeira (Wood), a Maçaneta (Doorknob), a Fechadura (Door Lock), o Metal (Metal), a Chave (Key) e a Tinta na Parede (Wall Paint).',
    '🎓 Atingindo 70 pontos ou mais você aprova neste ambiente! E a cada 3 módulos de vocabulário, você terá 1 módulo exclusivo de Pronomes!'
  ],
  items: [
    v('Sidewalk', '🚶', 'Calçada (completa na rua)', '/ˈsaɪd.wɔːk/', 'We walk on the concrete sidewalk in front of the house.', 'residential street concrete sidewalk walkway beside house real photo', true),
    v('Gate', '🚪', 'Portão da frente da casa', '/ɡeɪt/', 'Open the front metal gate to enter the yard.', 'residential house front entrance metal gate real photo', true),
    v('Brick Wall', '🧱', 'Muro de tijolos', '/brɪk wɔːl/', 'A strong brick wall surrounds the house.', 'residential exterior red brick boundary wall real photo', true),
    v('Fence', '🏡', 'Cerca em frente à casa', '/fens/', 'A white wooden fence in front of the garden.', 'white wooden picket fence in front of house garden real photo', true),
    v('Mailbox', '📫', 'Caixa de correio na entrada', '/ˈmeɪl.bɑːks/', 'Check the mailbox for letters and packages.', 'residential post mailbox in front of house real photo', true),
    v('Doorbell', '🔔', 'Campainha na parede', '/ˈdɔːr.bel/', 'Press the doorbell button when you arrive.', 'finger pressing house doorbell button on wall closeup real photo', true),
    v('Intercom', '📞', 'Interfone residencial', '/ˈɪn.tər.kɑːm/', 'Answer the visitor using the wall intercom.', 'home wall intercom phone mounted on wall real photo', true),
    v('Front Yard', '🏡', 'Jardim da frente da casa', '/frʌnt jɑːrd/', 'Green grass grows in the front yard.', 'house front yard green lawn and garden path real photo', true),
    v('Plant Pot', '🪴', 'Vaso de planta', '/ˈplænt pɑːt/', 'A green plant in a ceramic pot by the entrance.', 'green potted houseplant in clay pot on white background'),
    v('Doormat', '🟫', 'Capacho / Tapete na porta', '/ˈdɔːr.mæt/', 'Wipe your shoes on the welcome doormat.', 'welcome doormat in front of house entrance door real photo', true),
    v('Stairs', '🪜', 'Escada / Degraus da entrada', '/sterz/', 'Walk up the front steps to the porch.', 'house front porch entrance steps stairs real photo', true),
    v('Door', '🚪', 'Porta de entrada', '/dɔːr/', 'The front door is made of solid wood.', 'wooden front entrance door of a house real photo', true),
    v('Wood', '🪵', 'Madeira (material da porta)', '/wʊd/', 'The door is made of natural brown wood.', 'natural brown wooden boards timber planks closeup photo', true),
    v('Doorknob', '🚪', 'Maçaneta na porta', '/ˈdɔːr.nɑːb/', 'Turn the metal doorknob to open the door.', 'metal doorknob handle on wooden door closeup real photo', true),
    v('Door Lock', '🔒', 'Fechadura na porta', '/dɔːr lɑːk/', 'The door lock is made of strong metal.', 'metal keyhole cylinder door lock on wooden door closeup photo', true),
    v('Metal', '🔩', 'Metal / Aço (material)', '/ˈmet.əl/', 'The lock and key are made of shiny metal.', 'brushed stainless steel metal bars and plate closeup photo', true),
    v('Key', '🔑', 'Chave', '/kiː/', 'Insert the metal key into the door lock.', 'single metal house key on white background'),
    v('Keychain', '🔑', 'Chaveiro com chaves', '/ˈkiː.tʃeɪn/', 'My house keys are on a ring keychain.', 'house keys on metal keychain ring closeup photo', true),
    v('Lock', '🔒', 'Cadeado de metal', '/lɑːk/', 'Close the side gate with a metal padlock.', 'brass metal padlock with key on white background'),
    v('Hinge', '🔩', 'Dobradiça presa na porta', '/hɪndʒ/', 'Metal hinges hold the wooden door to the frame.', 'metal door hinge mounted on wooden door frame closeup photo', true),
    v('Wall', '🧱', 'Parede da casa', '/wɔːl/', 'The house wall is smooth and painted.', 'clean painted interior room wall of a house real photo', true),
    v('Wall Paint', '🎨', 'Tinta sendo aplicada na parede', '/wɔːl peɪnt/', 'Fresh wall paint makes the house look new.', 'paint roller applying fresh paint on house wall real photo', true),
    v('Paint Roller', '🖌️', 'Rolo de pintar parede', '/peɪnt ˈroʊ.lər/', 'Use a paint roller to paint the bedroom wall.', 'paint roller with paint tray real photo', true),
    v('Window', '🪟', 'Janela da casa', '/ˈwɪn.doʊ/', 'The glass window lets sunlight into the house.', 'house glass window with frame real photo', true),
    v('Glass', '🪟', 'Vidro transparente (na janela)', '/ɡlæs/', 'The window pane is made of clear glass.', 'clear transparent window glass pane closeup photo', true),
    v('Roof', '🏠', 'Telhado na casa (foco no telhado)', '/ruːf/', 'The ceramic roof protects the house from rain.', 'house roof with red ceramic tiles on top of house closeup real photo', true),
    v('Roof Tile', '🧱', 'Telhas no telhado', '/ruːf taɪl/', 'Clay roof tiles cover the top of the house.', 'terracotta ceramic roof tiles on house roof closeup real photo', true),
    v('Porch Light', '💡', 'Luminária externa na parede', '/pɔːrtʃ laɪt/', 'Turn on the porch light at night.', 'illuminated outdoor wall lantern porch light next to house door photo', true),
    v('Garage', '🚗', 'Garagem da casa', '/ɡəˈrɑːʒ/', 'Park the family car inside the garage.', 'house garage with open door and car parked inside real photo', true),
    v('House', '🏠', 'Casa / Residência completa', '/haʊs/', 'Welcome to my comfortable house!', 'beautiful single family house exterior with roof and yard real photo', true),
  ]
};

const MODULE_2_LIVING_ROOM = {
  title: 'Vocabulário 2 • Sala de Estar, TV, Internet & Iluminação',
  subtitle: 'Ambiente 2/12 • Sofá, almofadas, rack, modem, TV, videogame, tomada, interruptor e piso',
  pedagogicalObjective: 'Identificar todos os móveis, aparelhos eletrônicos, tomadas, interruptores, iluminação e piso cerâmico da sala de estar.',
  icon: 'house',
  theory: [
    'Entrando na Sala de Estar vemos o Sofá (Sofa), as Almofadas (Cushion), o Rack de TV (TV Stand), a Televisão (Television) e o Modem de Internet (Wi-Fi Router).',
    'Veja também os Retratos de Fotografia (Picture Frame), o Videogame (Video Game Console), o Controle (Game Controller), as Caixas de Som (Speaker), a Mesa de Centro (Coffee Table), o Tapete (Rug), a Cortina (Curtain) e o Notebook (Computer).',
    'Nas paredes, teto e chão temos a Tomada (Power Outlet), o Interruptor (Light Switch), a Lâmpada no Teto (Ceiling Lamp), o Ventilador (Fan), o Ar-Condicionado (Air Conditioner) e o Piso Cerâmico (Ceramic Tile).'
  ],
  items: [
    v('Sofa', '🛋️', 'Sofá da sala', '/ˈsoʊ.fə/', 'The family sits together on the living room sofa.', 'modern fabric sofa couch furniture on white background'),
    v('Cushion', '🛋️', 'Almofadas no sofá', '/ˈkʊʃ.ən/', 'Soft decorative cushions are on the sofa.', 'colorful throw pillows cushions on living room sofa closeup photo', true),
    v('Armchair', '🛋️', 'Poltrona', '/ˈɑːrm.tʃer/', 'Grandpa reads in a comfortable armchair.', 'comfortable fabric armchair in living room photo', true),
    v('TV Stand', '📺', 'Rack de TV / Painel na sala', '/ˌtiːˈviː stænd/', 'The television sits on a wooden TV stand.', 'modern wooden tv stand rack with television in living room real photo', true),
    v('Television', '📺', 'Televisão (Smart TV)', '/ˈtel.ə.vɪʒ.ən/', 'We watch movies on the flat-screen television.', 'flat screen smart tv television on white background'),
    v('Remote Control', '📱', 'Controle remoto da TV', '/rɪˈmoʊt kənˈtroʊl/', 'Change the channel with the TV remote control.', 'black tv remote control with buttons on white background'),
    v('Wi-Fi Router', '🛜', 'Modem / Roteador de internet', '/ˈwaɪ.faɪ ˈraʊ.tər/', 'The Wi-Fi router connects our home to the internet.', 'wireless wifi router modem with antennas and lights on table photo', true),
    v('Picture Frame', '🖼️', 'Porta-retrato com fotografia', '/ˈpɪk.tʃər freɪm/', 'A family photo inside a wooden picture frame.', 'framed family photograph picture frame on table real photo', true),
    v('Video Game Console', '🎮', 'Videogame (Console)', '/ˈvɪd.i.oʊ ɡeɪm ˈkɑːn.soʊl/', 'The video game console is connected to the TV.', 'modern video game console with controller real photo', true),
    v('Game Controller', '🎮', 'Controle de videogame', '/ɡeɪm kənˈtroʊ.lər/', 'Hold the wireless game controller to play.', 'wireless video game controller gamepad closeup photo', true),
    v('Speaker', '🔊', 'Caixa de som', '/ˈspiː.kər/', 'Play music through the speaker.', 'home audio speaker sound box closeup photo', true),
    v('Coffee Table', '🪑', 'Mesa de centro na sala', '/ˈkɔː.fi ˈteɪ.bəl/', 'Put the magazines on the living room coffee table.', 'wooden coffee table in front of sofa in living room real photo', true),
    v('Rug', '🟥', 'Tapete na sala', '/rʌɡ/', 'A soft woven rug covers the living room floor.', 'decorative woven floor rug carpet on white background'),
    v('Curtain', '🪟', 'Cortina na janela da sala', '/ˈkɜːr.tən/', 'Close the living room curtains in the evening.', 'fabric window curtains hanging on living room window real photo', true),
    v('Window Blind', '🪟', 'Persiana na janela', '/ˈwɪn.doʊ blaɪnd/', 'Adjust the window blinds to control the light.', 'horizontal window blinds installed on room window real photo', true),
    v('Computer', '💻', 'Notebook / Computador portátil', '/kəmˈpjuː.tər/', 'My open laptop computer is on the table.', 'open laptop computer notebook on white background'),
    v('Power Outlet', '🔌', 'Tomada elétrica na parede', '/ˈpaʊ.ər ˈaʊt.let/', 'Plug the notebook charger into the wall power outlet.', 'electrical power outlet socket mounted on wall closeup real photo', true),
    v('Power Plug', '🔌', 'Plugue sendo conectado na tomada', '/ˈpaʊ.ər plʌɡ/', 'Insert the power plug into the socket.', 'electrical power plug cord plugging into wall outlet closeup photo', true),
    v('Light Switch', '💡', 'Interruptor de luz na parede', '/laɪt swɪtʃ/', 'Flip the wall light switch to turn on the lamp.', 'finger pressing wall light switch on room wall closeup real photo', true),
    v('Light Bulb', '💡', 'Lâmpada', '/ˈlaɪt bʌlb/', 'The LED light bulb illuminates the whole room.', 'single led light bulb on white background'),
    v('Ceiling Lamp', '💡', 'Luminária / Lâmpada acesa no teto', '/ˈsiː.lɪŋ læmp/', 'A modern ceiling lamp illuminates the living room from above.', 'illuminated ceiling light fixture mounted on room ceiling real photo', true),
    v('Lamp', '💡', 'Abajur / Luminária de mesa', '/læmp/', 'Turn on the warm lamp next to the sofa.', 'bedside table lamp with shade on white background'),
    v('Fan', '🌀', 'Ventilador de mesa/coluna', '/fæn/', 'Turn on the electric fan on warm days.', 'standing electric table fan on white background'),
    v('Ceiling Fan', '🌀', 'Ventilador de teto na sala', '/ˈsiː.lɪŋ fæn/', 'The ceiling fan spins quietly above the sofa.', 'ceiling fan with blades mounted on living room ceiling real photo', true),
    v('Air Conditioner', '❄️', 'Ar-condicionado na parede', '/ˈer kənˌdɪʃ.ən.ər/', 'The split air conditioner cools the living room.', 'white split wall air conditioner mounted on room wall real photo', true),
    v('Ceramic Tile', '⬜', 'Piso cerâmico / Porcelanato no chão', '/səˈræm.ɪk taɪl/', 'The living room has shiny ceramic floor tiles.', 'shiny porcelain ceramic tile flooring installed in living room real photo', true),
    v('Bookshelf', '📚', 'Estante cheia de livros', '/ˈbʊk.ʃelf/', 'Our books are organized on the wooden bookshelf.', 'wooden bookcase bookshelf with books on white background'),
    v('Clock', '⏰', 'Relógio de parede', '/klɑːk/', 'Check the time on the living room wall clock.', 'round wall clock showing numbers on white background'),
    v('Vase', '🏺', 'Vaso com flores na mesa', '/veɪs/', 'A ceramic vase sits on the coffee table.', 'ceramic flower vase on table real photo', true),
    v('Telephone', '☎️', 'Telefone fixo', '/ˈtel.ə.foʊn/', 'The home telephone is next to the modem.', 'cordless home telephone on table real photo', true),
  ]
};

const MODULE_3_KITCHEN_STRUCTURE = {
  title: 'Vocabulário 3 • Cozinha I: Armários, Pia, Ilha, Fogão & Eletros',
  subtitle: 'Ambiente 3/12 • Armário, gavetas, pia, torneira, pedra, ilha, coifa, pendentes e eletroportáteis',
  pedagogicalObjective: 'Dominar os móveis planejados, bancadas de pedra, ilha, pia, torneira, coifa, iluminação pendente e eletrodomésticos da cozinha.',
  icon: 'apple',
  theory: [
    'Agora entramos na Cozinha! Observamos toda a estrutura: Armário (Kitchen Cabinet), Porta do Armário (Cabinet Door), Gavetas (Drawer), Geladeira (Fridge) e a Mesa com Cadeiras (Table & Chair).',
    'Veja a Pia (Kitchen Sink), a Torneira (Faucet), a Pedra do Armário / Bancada (Countertop), a Ilha (Kitchen Island), o Fogão (Stove), a Coifa (Range Hood), o Depurador de Ar (Exhaust Hood) e os Pendentes de Luz (Pendant Light).',
    'Logo após concluir este 3º módulo de vocabulário, você fará o seu 1º Módulo Exclusivo de Pronomes!'
  ],
  items: [
    v('Kitchen Cabinet', '🗄️', 'Armário de cozinha completo', '/ˈkɪtʃ.ən ˈkæb.ɪ.nət/', 'Store the plates inside the kitchen cabinet.', 'modern fitted wooden kitchen wall and base cabinets real photo', true),
    v('Cabinet Door', '🚪', 'Porta do armário de cozinha', '/ˈkæb.ɪ.nət dɔːr/', 'Open the wooden cabinet door carefully.', 'open kitchen cabinet door showing dishes inside real photo', true),
    v('Drawer', '🗄️', 'Gaveta aberta do armário', '/drɔːr/', 'The silverware is kept inside the kitchen drawer.', 'open kitchen cabinet drawer pulled out showing utensils real photo', true),
    v('Fridge', '🧊', 'Geladeira / Refrigerador', '/frɪdʒ/', 'Keep water, milk and food cold in the fridge.', 'modern stainless steel refrigerator fridge appliance on white background'),
    v('Freezer', '❄️', 'Freezer / Congelador', '/ˈfriː.zər/', 'Ice stays frozen inside the freezer compartment.', 'open refrigerator freezer compartment with ice real photo', true),
    v('Table', '🪑', 'Mesa de jantar com cadeiras', '/ˈteɪ.bəl/', 'The kitchen dining table has chairs around it.', 'wooden kitchen dining table with chairs real photo', true),
    v('Chair', '🪑', 'Cadeira da cozinha', '/tʃer/', 'Pull out a chair and sit at the kitchen table.', 'single wooden dining chair furniture on white background'),
    v('Kitchen Sink', '🚰', 'Pia da cozinha completa', '/ˈkɪtʃ.ən sɪŋk/', 'Wash the vegetables in the stainless steel kitchen sink.', 'stainless steel kitchen sink basin installed in countertop with faucet real photo', true),
    v('Faucet', '🚰', 'Torneira da pia com água', '/ˈfɔː.sɪt/', 'Turn on the kitchen faucet to rinse the plate.', 'chrome kitchen sink faucet tap with running water closeup real photo', true),
    v('Countertop', '🪨', 'Pedra do armário / Bancada de granito', '/ˈkaʊn.tər.tɑːp/', 'The kitchen cabinet has a polished granite stone countertop.', 'polished granite stone countertop on kitchen cabinets real photo', true),
    v('Kitchen Island', '🏝️', 'Ilha da cozinha completa', '/ˈkɪtʃ.ən ˈaɪ.lənd/', 'We prepare meals on the central kitchen island.', 'modern kitchen island counter in center of kitchen with stools real photo', true),
    v('Bar Stool', '🪑', 'Banqueta alta da ilha', '/bɑːr stuːl/', 'High bar stools are placed next to the kitchen island.', 'high kitchen bar stool chair next to counter real photo', true),
    v('Stove', '🔥', 'Fogão', '/stoʊv/', 'Cook rice and beans on the gas stove.', 'kitchen gas stove oven appliance on white background'),
    v('Range Hood', '💨', 'Coifa instalada sobre o fogão', '/reɪndʒ hʊd/', 'The stainless steel range hood removes smoke above the stove.', 'stainless steel chimney range hood mounted above kitchen stove real photo', true),
    v('Exhaust Hood', '💨', 'Depurador de ar sobre o fogão', '/ɪɡˈzɔːst hʊd/', 'Turn on the slim exhaust hood while frying food.', 'slim under cabinet exhaust hood depurator above stove real photo', true),
    v('Pendant Light', '💡', 'Luminárias pendentes sobre a ilha/mesa', '/ˈpen.dənt laɪt/', 'Hanging pendant lights illuminate the kitchen island.', 'hanging pendant lights glowing over kitchen island counter real photo', true),
    v('Microwave', '⏲️', 'Forno micro-ondas', '/ˈmaɪ.krə.weɪv/', 'Warm up your lunch in the microwave oven.', 'countertop microwave oven appliance on white background'),
    v('Electric Oven', '♨️', 'Forno elétrico', '/ɪˈlek.trɪk ˈʌv.ən/', 'Bake bread and pies inside the electric oven.', 'countertop electric oven baking appliance real photo', true),
    v('Toaster', '🍞', 'Torradeira elétrica', '/ˈtoʊ.stər/', 'Toast two slices of bread in the toaster.', 'electric bread toaster appliance on white background'),
    v('Coffee Maker', '☕', 'Cafeteira elétrica', '/ˈkɔː.fi ˌmeɪ.kər/', 'Fresh coffee is brewing in the coffee maker.', 'electric drip coffee maker machine on white background'),
    v('Blender', '🌪️', 'Liquidificador', '/ˈblen.dər/', 'Blend fresh fruit smoothie in the blender.', 'electric kitchen blender with jar on white background'),
    v('Stand Mixer', '🥣', 'Batedeira planetária', '/stænd ˈmɪk.sər/', 'Mix the cake batter with an electric stand mixer.', 'electric kitchen stand mixer with bowl real photo', true),
    v('Air Fryer', '🍟', 'Fritadeira elétrica (Air Fryer)', '/er ˈfraɪ.ər/', 'Cook crispy potatoes in the electric air fryer.', 'digital air fryer kitchen appliance real photo', true),
    v('Sandwich Maker', '🥪', 'Sanduicheira / Grill elétrico', '/ˈsæn.wɪtʃ ˈmeɪ.kər/', 'Toast a warm cheese sandwich in the sandwich maker.', 'electric sandwich maker press grill real photo', true),
    v('Water Dispenser', '🚰', 'Filtro / Purificador de água', '/ˈwɔː.tər dɪˌspen.sər/', 'Get cold filtered water from the water dispenser.', 'countertop water filter dispenser clay or white on white background'),
    v('Kettle', '🫖', 'Chaleira', '/ˈket.əl/', 'Boil water for tea in the stainless steel kettle.', 'stainless steel tea kettle with spout on white background'),
    v('Kitchen Scale', '⚖️', 'Balança de cozinha', '/ˈkɪtʃ.ən skeɪl/', 'Weigh the flour on the digital kitchen scale.', 'digital kitchen food scale on white background'),
    v('Sponge', '🧽', 'Esponja de lavar louça', '/spʌndʒ/', 'Wash the dishes with soap and a kitchen sponge.', 'yellow and green dishwashing kitchen sponge on white background'),
    v('Apron', '🎽', 'Avental de cozinha', '/ˈeɪ.prən/', 'Wear a clean apron while cooking in the kitchen.', 'fabric kitchen cooking apron on white background'),
    v('Trash Can', '🗑️', 'Lixeira de cozinha', '/ˈtræʃ kæn/', 'Step on the pedal to open the kitchen trash can.', 'metal pedal trash can bin on white background'),
  ]
};

const MODULE_4_KITCHEN_UTENSILS_FRIDGE = {
  title: 'Vocabulário 4 • Cozinha II: Panelas, Talheres & Dentro da Geladeira',
  subtitle: 'Ambiente 4/12 • Modelos de panelas, utensílios de gaveta, louças e alimentos na geladeira',
  pedagogicalObjective: 'Conhecer cada modelo de panela (caçarola, frigideira, panela de pressão), os talheres e utensílios das gavetas e o que vemos ao abrir a geladeira.',
  icon: 'apple',
  theory: [
    'Continuando na Cozinha, abrimos os armários, as gavetas e a porta da geladeira!',
    'Veja os vários modelos de panelas: Panela de cozinhar (Cooking Pot), Frigideira (Frying Pan), Panela de Pressão (Pressure Cooker) e Assadeira (Baking Tray).',
    'Nas gavetas temos os talheres e utensílios (Fork, Knife, Spoon, Soup Ladle, Spatula, Grater, Strainer, Cutting Board) e, dentro da geladeira, vemos Garrafa de Água (Bottle), Leite (Milk), Manteiga (Butter), Queijo (Cheese), Ovos (Egg), Suco (Juice) e frutas/verduras!'
  ],
  items: [
    v('Cooking Pot', '🍲', 'Panela com tampa', '/ˈkʊk.ɪŋ pɑːt/', 'Boil soup and pasta in the stainless steel cooking pot.', 'stainless steel cooking pot with lid on white background'),
    v('Frying Pan', '🍳', 'Frigideira antiaderente', '/ˈfraɪ.ɪŋ pæn/', 'Fry eggs in a non-stick frying pan.', 'black nonstick frying pan skillet on white background'),
    v('Pressure Cooker', '🍲', 'Panela de pressão', '/ˈpreʃ.ər ˌkʊk.ər/', 'Cook beans fast in the aluminum pressure cooker.', 'aluminum kitchen pressure cooker pot on white background'),
    v('Baking Tray', '🥮', 'Assadeira / Forma de forno', '/ˈbeɪ.kɪŋ treɪ/', 'Put the metal baking tray inside the oven.', 'rectangular metal baking tray pan real photo', true),
    v('Fork', '🍴', 'Garfo', '/fɔːrk/', 'Take a clean fork from the kitchen drawer.', 'single metal dinner fork cutlery on white background'),
    v('Knife', '🔪', 'Faca de cozinha', '/naɪf/', 'Slice the meat carefully with a sharp knife.', 'single stainless steel kitchen chef knife on white background'),
    v('Spoon', '🥄', 'Colher', '/spuːn/', 'Use a metal spoon to eat soup.', 'single metal soup spoon cutlery on white background'),
    v('Soup Ladle', '🥄', 'Concha de feijão / sopa', '/suːp ˈleɪ.dəl/', 'Serve hot soup with a deep metal ladle.', 'stainless steel soup ladle kitchen utensil real photo', true),
    v('Spatula', '🍳', 'Espátula / Escumadeira', '/ˈspætʃ.ə.lə/', 'Flip the pancake with a kitchen spatula.', 'kitchen turner spatula utensil real photo', true),
    v('Grater', '🧀', 'Ralador de queijo e legumes', '/ˈɡreɪ.tər/', 'Grate the cheese using a metal box grater.', 'stainless steel kitchen box cheese grater real photo', true),
    v('Strainer', '🥣', 'Peneira / Escorredor de cozinha', '/ˈstreɪ.nər/', 'Wash the rice using a fine mesh strainer.', 'stainless steel mesh kitchen strainer sieve real photo', true),
    v('Cutting Board', '🪵', 'Tábua de corte', '/ˈkʌt.ɪŋ bɔːrd/', 'Chop tomatoes and onions on the wooden cutting board.', 'wooden kitchen cutting chopping board on white background'),
    v('Rolling Pin', '🥖', 'Rolo de abrir massa', '/ˈroʊ.lɪŋ pɪn/', 'Roll the bread dough with a wooden rolling pin.', 'wooden kitchen dough rolling pin real photo', true),
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
    v('Egg', '🥚', 'Ovo (na geladeira)', '/eɡ/', 'There are twelve eggs in the refrigerator.', 'whole egg and sunny side up fried egg on white background'),
    v('Juice', '🧃', 'Jarra de suco (na geladeira)', '/dʒuːs/', 'Cold orange juice is ready in the fridge.', 'glass of fresh orange juice on white background'),
    v('Ham', '🥩', 'Presunto (na geladeira)', '/hæm/', 'Keep cheese and ham cold in the refrigerator.', 'sliced cooked pink ham meat on white background'),
    v('Lettuce', '🥬', 'Alface (na gaveta da geladeira)', '/ˈlet.ɪs/', 'Fresh green lettuce stays crisp in the fridge drawer.', 'whole fresh green lettuce head on white background'),
    v('Apple', '🍎', 'Maçã (na fruteira / geladeira)', '/ˈæp.əl/', 'I eat a cold red apple from the kitchen.', 'fresh red apple fruit with green leaf isolated on white background'),
  ]
};

const MODULE_5_BEDROOM_CLOSET = {
  title: 'Vocabulário 5 • Quarto de Dormir, Cama, Guarda-Roupa & Vestuário',
  subtitle: 'Ambiente 5/12 • Cama, colchão, travesseiro, cobertor, guarda-roupa, cabide, roupas e calçados',
  pedagogicalObjective: 'Dominar cada item do quarto de dormir, roupas de cama, móveis do quarto e todas as peças de roupa e calçados do guarda-roupa.',
  icon: 'shirt',
  theory: [
    'Saindo da cozinha pelo corredor, entramos no Quarto de Dormir!',
    'Olhe para a Cama (Bed), o Colchão (Mattress), o Travesseiro (Pillow), o Cobertor (Blanket), o Criado-mudo (Nightstand), o Guarda-roupa (Wardrobe), o Cabide (Clothes Hanger) e o Espelho (Mirror).',
    'Abrindo o guarda-roupa, vemos todas as nossas roupas, calçados e acessórios do dia a dia!'
  ],
  items: [
    v('Bed', '🛏️', 'Cama', '/bed/', 'I sleep in a comfortable wooden bed.', 'wooden bed with mattress and pillows furniture on white background'),
    v('Mattress', '🛏️', 'Colchão na cama', '/ˈmæt.rəs/', 'A soft orthopedic mattress on the bed.', 'white orthopedic bed mattress on bed frame real photo', true),
    v('Pillow', '⬜', 'Travesseiro', '/ˈpɪl.oʊ/', 'Rest your head on a soft white pillow.', 'single soft white bed pillow on white background'),
    v('Blanket', '🛌', 'Cobertor / Edredom', '/ˈblæŋ.kɪt/', 'Pull up the warm blanket on cold nights.', 'folded soft wool blanket on white background'),
    v('Nightstand', '🗄️', 'Criado-mudo ao lado da cama', '/ˈnaɪt.stænd/', 'Keep your book and lamp on the wooden nightstand.', 'wooden bedside table nightstand next to bed real photo', true),
    v('Wardrobe', '🚪', 'Guarda-roupa', '/ˈwɔːr.droʊb/', 'Open the bedroom wardrobe to choose your clothes.', 'wooden bedroom wardrobe closet furniture on white background'),
    v('Clothes Hanger', '🧥', 'Cabide de roupas', '/ˈkloʊðz ˈhæŋ.ər/', 'Hang your shirt on a wooden clothes hanger.', 'wooden clothes hangers hanging on closet rod real photo', true),
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
  title: 'Vocabulário 6 • Banheiro, Chuveiro, Pia & Higiene Pessoal',
  subtitle: 'Ambiente 6/12 • Vaso sanitário, chuveiro, pia, toalhas, itens de higiene e partes do corpo',
  pedagogicalObjective: 'Reconhecer todos os itens do banheiro, produtos de higiene diária e partes do corpo humano.',
  icon: 'house',
  theory: [
    'Agora entramos no Banheiro da casa!',
    'Veja o Vaso Sanitário (Toilet), o Papel Higiênico (Toilet Paper), a Pia do Banheiro (Bathroom Sink), o Chuveiro (Shower), a Banheira (Bathtub), a Toalha de Banho (Towel), o Sabonete (Soap) e o Shampoo.',
    'Logo após concluir este 6º módulo de vocabulário, você fará o seu 2º Módulo Exclusivo de Pronomes (Possessivos & Demonstrativos)!'
  ],
  items: [
    v('Toilet', '🚽', 'Vaso sanitário', '/ˈtɔɪ.lət/', 'A clean white ceramic toilet in the bathroom.', 'white ceramic toilet bowl on white background'),
    v('Toilet Paper', '🧻', 'Papel higiênico', '/ˈtɔɪ.lət ˈpeɪ.pər/', 'Put a new roll of toilet paper on the holder.', 'single roll of white toilet paper on white background'),
    v('Bathroom Sink', '🚰', 'Pia / Gabinete do banheiro', '/ˈbæθ.ruːm sɪŋk/', 'Wash your hands and face in the bathroom sink.', 'modern white bathroom vanity sink with faucet and mirror real photo', true),
    v('Shower', '🚿', 'Chuveiro no box do banheiro', '/ˈʃaʊ.ər/', 'Take a warm shower every day.', 'bathroom shower head spraying water in glass shower enclosure real photo', true),
    v('Bathtub', '🛁', 'Banheira no banheiro', '/ˈbæθ.tʌb/', 'Fill the white bathtub with warm water.', 'white bathtub in clean modern bathroom real photo', true),
    v('Towel', '🧺', 'Toalha de banho', '/ˈtaʊ.əl/', 'Dry yourself with a soft cotton bath towel.', 'folded cotton bath towel stack on white background'),
    v('Soap', '🧼', 'Sabonete em barra', '/soʊp/', 'Wash your hands with fragrant soap.', 'bar of bath soap on soap dish on white background'),
    v('Liquid Soap', '🧴', 'Sabonete líquido na pia', '/ˈlɪk.wɪd soʊp/', 'Press the pump dispenser for liquid hand soap.', 'liquid hand soap pump dispenser bottle on bathroom sink real photo', true),
    v('Shampoo', '🧴', 'Frasco de shampoo', '/ʃæmˈpuː/', 'Wash your hair with shampoo in the shower.', 'shampoo and conditioner bottles in bathroom real photo', true),
    v('Toothbrush', '🪥', 'Escova de dentes', '/ˈtuːθ.brʌʃ/', 'Brush your teeth with a soft toothbrush.', 'single plastic toothbrush on white background'),
    v('Toothpaste', '🪥', 'Pasta de dente / Creme dental', '/ˈtuːθ.peɪst/', 'Squeeze white toothpaste onto the brush.', 'toothpaste tube with cap on white background'),
    v('Dental Floss', '🦷', 'Fio dental', '/ˈden.təl flɑːs/', 'Use dental floss between your teeth every night.', 'dental floss dispenser box with thread closeup photo', true),
    v('Comb', '🪮', 'Pente de cabelo', '/koʊm/', 'Part your wet hair with a comb.', 'hair comb on white background'),
    v('Hairbrush', '🪮', 'Escova de cabelo', '/ˈher.brʌʃ/', 'Brush your hair in front of the bathroom mirror.', 'hairbrush on bathroom counter real photo', true),
    v('Hair Dryer', '💨', 'Secador de cabelo', '/ˈher ˌdraɪ.ər/', 'Dry your hair quickly with an electric hair dryer.', 'electric blow hair dryer appliance real photo', true),
    v('Razor', '🪒', 'Aparelho de barbear', '/ˈreɪ.zər/', 'Shave carefully with a safety razor.', 'men shaving razor blade handle closeup photo', true),
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
  title: 'Vocabulário 7 • Área de Serviço, Lavanderia, Quintal & Ferramentas',
  subtitle: 'Ambiente 7/12 • Máquina de lavar, cesto, ferro, vassoura, balde, ferramentas e animais no quintal',
  pedagogicalObjective: 'Explorar o fundo da residência: lavanderia, produtos e utensílios de limpeza, ferramentas de manutenção e os pets no quintal.',
  icon: 'house',
  theory: [
    'Chegamos ao fundo da casa: a Área de Serviço, Lavanderia e Quintal!',
    'Aqui vemos a Máquina de Lavar (Washing Machine), o Cesto de Roupa (Laundry Basket), o Sabão de Lavar Roupa (Laundry Detergent), o Pregador (Clothespin), o Ferro de Passar (Clothes Iron) e a Tábua de Passar (Ironing Board).',
    'Também temos os itens de limpeza (Broom, Dustpan, Mop, Bucket, Vacuum Cleaner), as ferramentas (Ladder, Hammer, Screwdriver, Wrench, Pliers, Saw, Drill) e nossos pets no quintal!'
  ],
  items: [
    v('Washing Machine', '🫧', 'Máquina de lavar roupa', '/ˈwɑː.ʃɪŋ məˌʃiːn/', 'Wash the family clothes in the washing machine.', 'front load clothes washing machine appliance on white background'),
    v('Laundry Basket', '🧺', 'Cesto de roupa na lavanderia', '/ˈlɔːn.dri ˈbæs.kɪt/', 'Put the clothes inside the plastic laundry basket.', 'laundry basket hamper full of folded clothes real photo', true),
    v('Laundry Detergent', '🧴', 'Sabão líquido para lavar roupas', '/ˈlɔːn.dri dɪˈtɜːr.dʒənt/', 'Add laundry detergent to the washing machine.', 'liquid laundry detergent bottle in laundry room real photo', true),
    v('Clothespin', '📎', 'Pregadores de roupa no varal', '/ˈkloʊðz.pɪn/', 'Hang the wet shirts on the line with clothespins.', 'clothespins holding clothes on clothesline real photo', true),
    v('Clothes Iron', '💨', 'Ferro de passar roupa', '/ˈkloʊðz ˌaɪ.ərn/', 'Iron the dress shirt with a steam clothes iron.', 'electric steam clothes iron appliance on white background'),
    v('Ironing Board', '🧺', 'Tábua de passar roupa', '/ˈaɪ.ər.nɪŋ bɔːrd/', 'Set up the folding ironing board in the laundry room.', 'ironing board with steam iron in laundry room real photo', true),
    v('Broom', '🧹', 'Vassoura', '/bruːm/', 'Sweep the backyard floor with a broom.', 'household sweeping broom with handle on white background'),
    v('Dustpan', '🧹', 'Pá de lixo com vassoura', '/ˈdʌst.pæn/', 'Sweep the dust into the plastic dustpan.', 'plastic cleaning dustpan with brush on floor real photo', true),
    v('Mop', '🧹', 'Esfregão / Rodo de limpeza', '/mɑːp/', 'Clean the ceramic floor tiles with a wet mop.', 'floor cleaning mop with bucket real photo', true),
    v('Bucket', '🪣', 'Balde de água', '/ˈbʌk.ɪt/', 'Fill the plastic bucket with water and soap.', 'blue plastic water bucket with handle on white background'),
    v('Vacuum Cleaner', '🧹', 'Aspirador de pó', '/ˈvæk.juːm ˈkliː.nər/', 'Clean the living room rug with a vacuum cleaner.', 'vacuum cleaner cleaning living room carpet real photo', true),
    v('Garden Hose', '🐍', 'Mangueira de jardim no quintal', '/ˈɡɑːr.dən hoʊz/', 'Wash the backyard with the green garden hose.', 'green garden water hose spraying water in yard real photo', true),
    v('Watering Can', '🚿', 'Regador de plantas', '/ˈwɔː.tər.ɪŋ kæn/', 'Water the flowers using a watering can.', 'garden watering can with spout on white background'),
    v('Wheelbarrow', '🛒', 'Carrinho de mão', '/ˈwiːlˌbær.oʊ/', 'Carry soil and bricks in a wheelbarrow.', 'garden wheelbarrow cart on white background'),
    v('Shovel', '⛏️', 'Pá de jardim / obra', '/ˈʃʌv.əl/', 'Dig the garden soil with a metal shovel.', 'metal garden spade shovel tool on white background'),
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
  title: 'Vocabulário 8 • Na Rua, Calçada, Trânsito & Vizinhança',
  subtitle: 'Ambiente 8/12 • Saindo de casa: rua completa, faixa, semáforo, poste, veículos e praça',
  pedagogicalObjective: 'Reconhecer tudo o que vemos ao sair de casa para caminhar ou dirigir pela rua e vizinhança.',
  icon: 'car',
  theory: [
    'Terminamos de explorar toda a nossa casa! Agora abrimos o portão e saímos para a Rua (Street)!',
    'Olhe para a Rua completa (Street), a Faixa de Pedestres na via (Crosswalk), o Semáforo (Traffic Light), a Placa de Pare (Stop Sign), o Poste de Luz (Streetlight) e o Ponto de Ônibus (Bus Stop).',
    'Veja também os veículos passando, a Praça com Banco (Park Bench), as Árvores (Tree) e o Clima!'
  ],
  items: [
    v('Street', '🛣️', 'Rua asfaltada completa', '/striːt/', 'Cars drive along the paved city street.', 'clean residential paved street with houses and trees real photo', true),
    v('Crosswalk', '🚸', 'Faixa de pedestres na rua', '/ˈkrɔːs.wɔːk/', 'Always cross the street on the white crosswalk stripes.', 'white pedestrian zebra crosswalk painted on city street real photo', true),
    v('Traffic Light', '🚦', 'Semáforo / Sinal de trânsito', '/ˈtræf.ɪk laɪt/', 'Wait for the green traffic light before crossing.', 'red yellow green traffic light signal on white background'),
    v('Stop Sign', '🛑', 'Placa de PARE na rua', '/stɑːp saɪn/', 'Every driver must stop at the red stop sign.', 'red octagonal stop traffic sign on street pole real photo', true),
    v('Streetlight', '🏮', 'Poste de iluminação pública', '/ˈstriːt.laɪt/', 'The tall streetlight turns on at dusk.', 'tall street lamp post illuminated along city street real photo', true),
    v('Bus Stop', '🚏', 'Ponto de ônibus na calçada', '/bʌs stɑːp/', 'Passengers wait for the bus at the bus stop shelter.', 'city bus stop shelter with bench on sidewalk real photo', true),
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
    v('Park Bench', '🪑', 'Banco na praça', '/pɑːrk bentʃ/', 'Sit on the wooden park bench in the square.', 'wooden park bench along path in green park square real photo', true),
    v('Bridge', '🌉', 'Ponte / Viaduto', '/brɪdʒ/', 'Cross the bridge over the city river.', 'bridge structure over water on white background'),
    v('Building', '🏢', 'Prédio / Edifício', '/ˈbɪl.dɪŋ/', 'Tall apartment buildings line the avenue.', 'modern apartment office building on white background'),
    v('Tree', '🌳', 'Árvore', '/triː/', 'Green trees give shade along the sidewalk.', 'single green leafy tree on white background'),
    v('Flower', '🌻', 'Flor', '/ˈflaʊ.ər/', 'Colorful flowers bloom in the town square.', 'single blooming flower with stem on white background'),
    v('Bird', '🐦', 'Pássaro', '/bɜːrd/', 'A bird sings on the tree branch.', 'small colorful songbird full body perching on white background'),
    v('Pigeon', '🐦', 'Pombo na praça', '/ˈpɪdʒ.ən/', 'Gray pigeons walk around the square.', 'gray city pigeon bird full body standing on white background'),
    v('Sun', '☀️', 'Sol', '/sʌn/', 'The bright sun warms the neighborhood.', 'bright yellow sun in sky on white background'),
    v('Rain', '🌧️', 'Chuva', '/reɪn/', 'Rain falls on the street.', 'raincloud with falling water raindrops on white background'),
    v('Umbrella', '☂️', 'Guarda-chuva', '/ʌmˈbrel.ə/', 'Open your umbrella when walking in the rain.', 'open colorful rain umbrella on white background'),
  ]
};

const MODULE_9_SCHOOL_CLASSROOM = {
  title: 'Vocabulário 9 • Na Escola, Sala de Aula & Material Escolar',
  subtitle: 'Ambiente 9/12 • Sala de aula, quadro, carteira, professor, mochila, cadernos e esportes',
  pedagogicalObjective: 'Dominar todo o ambiente escolar: sala de aula completa, mobiliário, professor, materiais de estudo, laboratório e quadra.',
  icon: 'book',
  theory: [
    'Caminhando pela rua, chegamos à Escola (School) e entramos na Sala de Aula (Classroom)!',
    'Veja o Quadro Branco / Lousa na parede (Whiteboard), a Carteira Escolar (Student Desk), o Professor (Teacher), a Mochila (Backpack), o Livro (Book) e o Caderno (Notebook).',
    'Logo após concluir este 9º módulo de vocabulário, você fará o seu 3º Módulo Exclusivo de Pronomes (Reflexivos & Interrogativos)!'
  ],
  items: [
    v('School', '🏫', 'Prédio da escola', '/skuːl/', 'Children arrive at the school in the morning.', 'school building exterior with entrance real photo', true),
    v('Classroom', '🏫', 'Sala de aula completa', '/ˈklæs.ruːm/', 'Students sit at their desks in the classroom.', 'bright school classroom with student desks and whiteboard real photo', true),
    v('Whiteboard', '📋', 'Quadro branco / Lousa na parede', '/ˈwaɪt.bɔːrd/', 'The teacher writes English words on the whiteboard.', 'whiteboard mounted on school classroom wall with markers real photo', true),
    v('Student Desk', '🪑', 'Carteira escolar (mesa e cadeira)', '/ˈstuː.dənt desk/', 'Open your notebook on the student desk.', 'school student desk and chair in classroom real photo', true),
    v('Teacher', '👩‍🏫', 'Professor / Professora', '/ˈtiː.tʃər/', 'The teacher explains the lesson clearly.', 'friendly school teacher holding book on white background'),
    v('Backpack', '🎒', 'Mochila escolar', '/ˈbæk.pæk/', 'Carry your books inside a school backpack.', 'school backpack bag with zippers on white background'),
    v('Book', '📘', 'Livro didático', '/bʊk/', 'Open your English book to page ten.', 'single hardcover book on white background'),
    v('Notebook', '📓', 'Caderno espiral', '/ˈnoʊt.bʊk/', 'Write the vocabulary list in your spiral notebook.', 'spiral paper notebook on white background'),
    v('Pen', '🖊️', 'Caneta esferográfica', '/pen/', 'Sign your name with a blue ballpoint pen.', 'single blue ballpoint pen on white background'),
    v('Pencil', '✏️', 'Lápis de escrever', '/ˈpen.səl/', 'Draw and write with a yellow wooden pencil.', 'single yellow wooden pencil with eraser on white background'),
    v('Eraser', '🧽', 'Borracha de apagar', '/ɪˈreɪ.sər/', 'Correct the mistake using a rubber eraser.', 'single white rubber pencil eraser on white background'),
    v('Pencil Sharpener', '✏️', 'Apontador de lápis', '/ˈpen.səl ˈʃɑːr.pən.ər/', 'Sharpen the pencil tip with a pencil sharpener.', 'handheld pencil sharpener with pencil shavings closeup photo', true),
    v('Ruler', '📏', 'Régua escolar', '/ˈruː.lər/', 'Draw a straight line with a plastic ruler.', 'plastic centimeter ruler on white background'),
    v('Scissors', '✂️', 'Tesoura escolar', '/ˈsɪz.ərz/', 'Cut the paper along the line with scissors.', 'single pair of paper scissors on white background'),
    v('Glue', '🧴', 'Cola escolar', '/ɡluː/', 'Use school glue to paste the picture.', 'white school glue bottle on white background'),
    v('Paper', '📄', 'Folha de papel', '/ˈpeɪ.pər/', 'Write your test answers on a sheet of paper.', 'clean white paper sheets on white background'),
    v('Envelope', '✉️', 'Envelope de papel', '/ˈen.və.loʊp/', 'Put the school letter inside a paper envelope.', 'white paper mailing envelope on white background'),
    v('Calculator', '🧮', 'Calculadora', '/ˈkæl.kjə.leɪ.tər/', 'Check the math result on a pocket calculator.', 'electronic pocket calculator with buttons on white background'),
    v('Globe', '🌍', 'Globo terrestre', '/ɡloʊb/', 'Find Brazil and the United States on the desk globe.', 'world earth globe on stand on white background'),
    v('Map', '🗺️', 'Mapa geográfico', '/mæp/', 'Look at the world map in geography class.', 'folded world map paper on white background'),
    v('Microscope', '🔬', 'Microscópio de ciências', '/ˈmaɪ.krə.skoʊp/', 'Look at cells through the laboratory microscope.', 'laboratory optical microscope on white background'),
    v('Paintbrush', '🖌️', 'Pincel de pintura', '/ˈpeɪnt.brʌʃ/', 'Paint a picture using watercolors and a paintbrush.', 'artist paintbrush with wooden handle on white background'),
    v('Phone', '📱', 'Celular / Smartphone', '/foʊn/', 'Use the Lingo World app on your phone to study.', 'modern smartphone mobile phone front view on white background'),
    v('Headphones', '🎧', 'Fone de ouvido', '/ˈhed.foʊnz/', 'Listen to the English pronunciation with headphones.', 'wireless over ear headphones on white background'),
    v('Keyboard', '⌨️', 'Teclado de computador', '/ˈkiː.bɔːrd/', 'Type your essay on the computer keyboard.', 'computer typing keyboard on white background'),
    v('Computer Mouse', '🖱️', 'Mouse de computador', '/kəmˈpjuː.tər maʊs/', 'Click the button using the computer mouse.', 'wireless computer mouse on white background'),
    v('Library', '📚', 'Biblioteca escolar', '/ˈlaɪ.brer.i/', 'Students read quietly in the school library.', 'school library room with bookshelves and reading tables real photo', true),
    v('Soccer Ball', '⚽', 'Bola de futebol', '/ˈsɑː.kər bɔːl/', 'Play soccer in physical education class.', 'classic black and white soccer ball football on white background'),
    v('Basketball', '🏀', 'Bola de basquete', '/ˈbæs.kɪt.bɔːl/', 'Shoot the orange basketball into the hoop.', 'orange basketball ball on white background'),
    v('Medal', '🥇', 'Medalha', '/ˈmed.əl/', 'She won a gold medal in the school competition.', 'gold winner medal with ribbon on white background'),
  ]
};

const MODULE_10_SUPERMARKET_GROCERY = {
  title: 'Vocabulário 10 • No Supermercado, Hortifrúti, Padaria & Caixa',
  subtitle: 'Ambiente 10/12 • Carrinho, cesta, corredores, frutas, verduras, açougue, padaria e pagamento',
  pedagogicalObjective: 'Fazer compras completas no supermercado identificando equipamentos, alimentos básicos, hortifrúti, padaria e formas de pagamento.',
  icon: 'apple',
  theory: [
    'Saindo da escola, vamos ao Supermercado (Supermarket) fazer as compras da casa!',
    'Pegue o Carrinho de Compras (Shopping Cart) ou a Cesta (Basket) e passe pela Padaria (Bakery: Bread, Cheese Bread, Cake), pela Mercearia (Rice, Beans, Pasta, Coffee, Olive Oil) e pelo Açougue (Steak, Roast Chicken, Fish Fillet).',
    'No setor de Hortifrúti escolhemos as frutas e verduras mais frescas e, ao final, passamos no Caixa com Cartão de Crédito (Credit Card) ou Dinheiro (Money)!'
  ],
  items: [
    v('Supermarket', '🛒', 'Corredor de supermercado completo', '/ˈsuː.pərˌmɑːr.kɪt/', 'We buy food for the week at the supermarket.', 'supermarket grocery store interior aisle with shelves real photo', true),
    v('Shopping Cart', '🛒', 'Carrinho de supermercado', '/ˈʃɑː.pɪŋ kɑːrt/', 'Push the metal shopping cart down the aisle.', 'metal supermarket shopping cart trolley in store real photo', true),
    v('Basket', '🧺', 'Cesta de compras', '/ˈbæs.kɪt/', 'Carry a few items in a hand basket.', 'woven wicker basket with handle on white background'),
    v('Bakery', '🥖', 'Balcão de padaria cheio de pães', '/ˈbeɪ.kər.i/', 'Fresh warm bread is baked at the bakery.', 'bakery counter display full of fresh bread and pastries real photo', true),
    v('Bread', '🍞', 'Pão', '/bred/', 'Buy a fresh loaf of bread at the bakery.', 'whole golden loaf of bread on white background'),
    v('Cheese Bread', '🧀', 'Pão de queijo', '/ˈtʃiːz bred/', 'Warm Brazilian cheese bread from the bakery.', 'golden brazilian pao de queijo cheese bread buns on white background'),
    v('Cake', '🍰', 'Bolo confeitado', '/keɪk/', 'Pick up a chocolate cake for the birthday.', 'whole chocolate cake with frosting on white background'),
    v('Rice', '🍚', 'Arroz', '/raɪs/', 'Put a bag of white rice in the shopping cart.', 'bowl of cooked white rice on white background'),
    v('Beans', '🫘', 'Feijão', '/biːnz/', 'Rice and beans are essentials on the grocery list.', 'bowl of cooked brown beans feijao on white background'),
    v('Pasta', '🍝', 'Macarrão', '/ˈpɑː.stə/', 'Buy two packages of spaghetti pasta.', 'plate of spaghetti pasta with red tomato sauce on white background'),
    v('Steak', '🥩', 'Carne bovina / Bife', '/steɪk/', 'Choose fresh beef steak at the butcher counter.', 'grilled beef steak on plate on white background'),
    v('Roast Chicken', '🍗', 'Frango', '/ˈroʊst ˈtʃɪk.ɪn/', 'Roast chicken for Sunday family lunch.', 'whole golden roast chicken on plate on white background'),
    v('Fish Fillet', '🐟', 'Filé de peixe', '/ˈfɪʃ fɪˈleɪ/', 'Fresh fish fillet from the seafood counter.', 'cooked grilled fish fillet on plate on white background'),
    v('Banana', '🍌', 'Banana', '/bəˈnæn.ə/', 'Pick a bunch of ripe yellow bananas.', 'ripe yellow banana bunch whole fruit on white background'),
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
    v('Credit Card', '💳', 'Cartão de crédito / débito', '/ˈkred.ɪt kɑːrd/', 'Pay for the groceries with a credit card.', 'plastic bank credit card with chip on white background'),
    v('Money', '💵', 'Dinheiro em cédulas', '/ˈmʌn.i/', 'Count your change in paper money and coins.', 'stack of paper money banknotes on white background'),
  ]
};

const MODULE_11_CHURCH_COMMUNITY = {
  title: 'Vocabulário 11 • Na Igreja, Música, Comunidade & Celebração',
  subtitle: 'Ambiente 11/12 • Igreja, sino, cruz, vitral, bancos, altar, Bíblia, vela, instrumentos e trajes',
  pedagogicalObjective: 'Reconhecer todos os elementos arquitetônicos, objetos litúrgicos, instrumentos musicais e vestimentas encontrados na igreja e em celebrações comunitárias.',
  icon: 'star',
  theory: [
    'Continuando nosso passeio pelos locais do cotidiano, visitamos a Igreja (Church)!',
    'Olhe para a arquitetura e o interior do templo: a Igreja (Church), o Sino da Torre (Church Bell), a Cruz (Cross), o Vitral Colorido na parede (Stained Glass), os Bancos da Igreja (Church Pew), o Altar (Altar), o Púlpito (Pulpit), a Bíblia (Bible) e a Vela (Candle).',
    'Na parte musical e comunitária vemos o Microfone, o Violão, o Piano, o Violino, a Flauta, o Terno, a Gravata e a Aliança!'
  ],
  items: [
    v('Church', '⛪', 'Igreja completa (fachada e torre)', '/tʃɜːrtʃ/', 'Families gather at the neighborhood church on Sunday.', 'beautiful traditional church building with bell tower exterior real photo', true),
    v('Church Bell', '🔔', 'Sino no campanário da igreja', '/tʃɜːrtʃ bel/', 'The bronze church bell rings in the tower.', 'bronze church bell hanging in bell tower real photo', true),
    v('Cross', '✝️', 'Cruz', '/krɔːs/', 'A wooden cross stands above the church altar.', 'wooden christian cross on church wall real photo', true),
    v('Stained Glass', '🪟', 'Vitral colorido na parede da igreja', '/steɪnd ɡlæs/', 'Sunlight shines through the colorful stained glass window.', 'colorful stained glass window glowing inside a church real photo', true),
    v('Church Pew', '🪑', 'Bancos de madeira na igreja', '/tʃɜːrtʃ pjuː/', 'The congregation sits on the long wooden church pews.', 'rows of wooden church pews benches inside church real photo', true),
    v('Altar', '🕯️', 'Altar completo na igreja', '/ˈɔːl.tər/', 'White flowers and candles decorate the church altar.', 'church altar decorated with white cloth candles and flowers real photo', true),
    v('Pulpit', '📖', 'Púlpito / Tribuna no altar', '/ˈpʊl.pɪt/', 'The speaker reads from the Bible at the wooden pulpit.', 'wooden church pulpit lectern with microphone at altar real photo', true),
    v('Bible', '📖', 'Bíblia Sagrada aberta', '/ˈbaɪ.bəl/', 'Read a chapter from the Holy Bible.', 'holy bible book with gold cross on table real photo', true),
    v('Candle', '🕯️', 'Vela acesa', '/ˈkæn.dəl/', 'A white wax candle burns softly on the altar.', 'lit white wax candle on white background'),
    v('Microphone', '🎤', 'Microfone no pedestal', '/ˈmaɪ.krə.foʊn/', 'Speak clearly into the stand microphone.', 'vocal microphone on stand real photo', true),
    v('Guitar', '🎸', 'Violão acústico', '/ɡɪˈtɑːr/', 'He plays the acoustic guitar in the church choir.', 'wooden acoustic guitar instrument on white background'),
    v('Piano', '🎹', 'Piano / Teclado musical', '/piˈæn.oʊ/', 'She plays beautiful melodies on the piano.', 'grand piano musical instrument with keys on white background'),
    v('Drum', '🥁', 'Bateria / Tambor', '/drʌm/', 'The drummer keeps the rhythm on the drum.', 'musical snare drum with drumsticks on white background'),
    v('Violin', '🎻', 'Violino', '/ˌvaɪ.əˈlɪn/', 'The wooden violin sounds warm and expressive.', 'wooden violin with bow on white background'),
    v('Flute', '🪈', 'Flauta musical', '/fluːt/', 'A silver flute plays a gentle melody.', 'silver concert flute instrument on white background'),
    v('Dove', '🕊️', 'Pomba branca da paz', '/dʌv/', 'The white dove is a universal symbol of peace.', 'white dove bird flying real photo', true),
    v('Heart', '❤️', 'Coração', '/hɑːrt/', 'Share kindness from the bottom of your heart.', 'red heart shape 3d model on white background'),
    v('Crown', '👑', 'Coroa dourada', '/kraʊn/', 'A golden crown with shining jewels.', 'gold royal crown with jewels on white background'),
    v('Star', '⭐', 'Estrela', '/stɑːr/', 'A bright star shines in the night sky.', 'bright five pointed star on white background'),
    v('Gift', '🎁', 'Presente / Doação', '/ɡɪft/', 'They prepared gift boxes for charity.', 'wrapped gift box with ribbon bow on white background'),
    v('Chandelier', '💡', 'Lustre aceso no teto da igreja', '/ˌʃæn.dəˈlɪr/', 'A crystal chandelier hangs from the church ceiling.', 'illuminated crystal chandelier hanging from ceiling real photo', true),
    v('Suit', '🤵', 'Terno / Roupa social', '/suːt/', 'He wore a navy blue suit to the ceremony.', 'men formal navy blue suit with shirt and tie real photo', true),
    v('Necktie', '👔', 'Gravata social', '/ˈnek.taɪ/', 'Tie a silk necktie around your collar.', 'red silk necktie tie on white background'),
    v('Ring', '💍', 'Aliança / Anel de ouro', '/rɪŋ/', 'The couple exchanged gold wedding rings at the altar.', 'gold ring with diamond on white background'),
    v('Necklace', '📿', 'Colar / Correntinha', '/ˈnek.lɪs/', 'She wears a delicate gold necklace.', 'gold chain necklace with pendant on white background'),
    v('Wine Glass', '🍷', 'Cálice / Taça', '/waɪn ɡlæs/', 'A golden chalice and glass goblet on the table.', 'golden communion chalice goblet on altar table real photo', true),
    v('Wheelchair', '♿', 'Cadeira de rodas', '/ˈwiːl.tʃer/', 'The church entrance has a ramp for wheelchairs.', 'medical manual wheelchair real photo', true),
    v('Handshake', '🤝', 'Aperto de mão / Cumprimento', '/ˈhænd.ʃeɪk/', 'Greet your neighbors with a warm handshake.', 'two people shaking hands handshake closeup real photo', true),
    v('Rainbow', '🌈', 'Arco-íris no céu', '/ˈreɪn.boʊ/', 'A colorful rainbow appeared after the rain.', 'colorful rainbow arc in sky on white background'),
    v('Moon', '🌙', 'Lua no céu', '/muːn/', 'The full moon shines after the evening service.', 'full moon in night sky on white background'),
  ]
};

const MODULE_12_CITY_SERVICES = {
  title: 'Vocabulário 12 • Restaurante, Hospital, Banco, Segurança & Viagem',
  subtitle: 'Ambiente 12/12 • Locais públicos, profissões, saúde, finanças, lazer e aeroporto',
  pedagogicalObjective: 'Dominar restaurantes, hospitais, farmácias, bancos, delegacia, bombeiros, hotel, cinema e aeroporto.',
  icon: 'car',
  theory: [
    'Chegamos ao 12º módulo de vocabulário da nossa Jornada pelo Cotidiano!',
    'Aqui visitamos o Restaurante (Restaurant, Chef, Pizza, Hamburger, Ice Cream), o Hospital (Hospital, Doctor, Nurse, Dentist), a Farmácia (Pharmacy), o Banco (Bank, Coin) e a Segurança Pública (Police Station, Police Officer, Fire Station, Firefighter).',
    'Logo após concluir este 12º módulo de vocabulário, você fará o 4º e último Módulo Exclusivo de Pronomes (Indefinidos & Relativos)!'
  ],
  items: [
    v('Restaurant', '🍽️', 'Restaurante completo', '/ˈres.tər.ɑːnt/', 'We had dinner together at an Italian restaurant.', 'cozy restaurant dining room with set tables and chairs real photo', true),
    v('Chef', '👨‍🍳', 'Chef de cozinha / Cozinheiro', '/ʃef/', 'The restaurant chef prepares delicious meals.', 'chef cook in white uniform and chef hat on white background'),
    v('Pizza', '🍕', 'Pizza', '/ˈpiːt.sə/', 'Order a hot cheese pizza at the restaurant.', 'whole round cheese pepperoni pizza on white background'),
    v('Hamburger', '🍔', 'Hambúrguer', '/ˈhæmˌbɜːr.ɡər/', 'A juicy hamburger with lettuce and cheese.', 'single classic cheeseburger hamburger on white background'),
    v('French Fries', '🍟', 'Batata frita', '/ˈfrentʃ fraɪz/', 'Crispy golden French fries with ketchup.', 'portion of crispy golden french fries on white background'),
    v('Ice Cream', '🍦', 'Sorvete', '/ˈaɪs kriːm/', 'Cold chocolate and vanilla ice cream.', 'ice cream scoop in waffle cone on white background'),
    v('Hospital', '🏥', 'Prédio do hospital', '/ˈhɑː.spɪ.təl/', 'Doctors and nurses work at the city hospital.', 'modern hospital building exterior with ambulance entrance real photo', true),
    v('Doctor', '👨‍⚕️', 'Médico / Médica', '/ˈdɑːk.tər/', 'The doctor examines the patient with a stethoscope.', 'friendly medical doctor in white coat with stethoscope on white background'),
    v('Nurse', '👩‍⚕️', 'Enfermeira / Enfermeiro', '/nɜːrs/', 'The hospital nurse takes care of everyone.', 'friendly hospital nurse in scrubs on white background'),
    v('Dentist', '🦷', 'Dentista', '/ˈden.tɪst/', 'Visit the dentist twice a year.', 'dentist in coat holding tooth model on white background'),
    v('Pharmacy', '💊', 'Farmácia / Drogaria', '/ˈfɑːr.mə.si/', 'Buy medicine and vitamins at the pharmacy.', 'modern pharmacy drugstore interior with medicine shelves real photo', true),
    v('Bank', '🏦', 'Banco / Agência bancária', '/bæŋk/', 'Deposit money safely at the bank.', 'modern bank branch building exterior real photo', true),
    v('Coin', '🪙', 'Moeda', '/kɔɪn/', 'Keep the shiny metal coins in your wallet.', 'shiny gold metal coin on white background'),
    v('Police Station', '🚓', 'Delegacia de polícia', '/pəˈliːs ˈsteɪ.ʃən/', 'Report the lost document at the police station.', 'police station building exterior with police sign real photo', true),
    v('Police Officer', '👮', 'Policial', '/pəˈliːs ˌɔː.fɪ.sər/', 'The police officer helps citizens in the city.', 'police officer in uniform on white background'),
    v('Fire Station', '🚒', 'Quartel do Corpo de Bombeiros', '/ˈfaɪ.ər ˈsteɪ.ʃən/', 'Fire trucks are parked inside the fire station.', 'fire station building with open bays and red fire truck real photo', true),
    v('Firefighter', '🧑‍🚒', 'Bombeiro', '/ˈfaɪ.ərˌfaɪ.tər/', 'The brave firefighter wears a yellow helmet.', 'firefighter in helmet and uniform on white background'),
    v('Hotel', '🏨', 'Hotel', '/hoʊˈtel/', 'We stayed at a comfortable hotel during vacation.', 'modern hotel building exterior entrance real photo', true),
    v('Suitcase', '🧳', 'Mala de viagem com rodinhas', '/ˈsuːt.keɪs/', 'Pack your clothes inside the rolling suitcase.', 'rolling travel suitcase luggage with wheels on white background'),
    v('Passport', '🛂', 'Passaporte de viagem', '/ˈpæs.pɔːrt/', 'Show your passport at the international airport.', 'travel passport booklet on white background'),
    v('Airport', '🛫', 'Aeroporto com avião', '/ˈer.pɔːrt/', 'Arrive at the airport two hours before your flight.', 'airport terminal building with passenger airplane on tarmac real photo', true),
    v('Airplane', '✈️', 'Avião comercial', '/ˈer.pleɪn/', 'The passenger airplane takes off from the runway.', 'commercial passenger airplane full aircraft on white background'),
    v('Pilot', '👨‍✈️', 'Piloto de avião', '/ˈpaɪ.lət/', 'The airline pilot greets the passengers.', 'airline pilot in uniform and cap on white background'),
    v('Helicopter', '🚁', 'Helicóptero', '/ˈhel.ɪˌkɑːp.tər/', 'A helicopter flies above the city buildings.', 'helicopter full aircraft on white background'),
    v('Train', '🚆', 'Trem ferroviário', '/treɪn/', 'The express train travels between cities.', 'modern passenger train locomotive on white background'),
    v('Subway', '🚇', 'Metrô subterrâneo', '/ˈsʌb.weɪ/', 'Take the underground subway to avoid traffic.', 'subway metro train car on white background'),
    v('Ship', '🚢', 'Navio', '/ʃɪp/', 'The large ship sails across the blue ocean.', 'large passenger cruise ship vessel on white background'),
    v('Movie Theater', '🍿', 'Sala de cinema', '/ˈmuː.vi ˈθiː.ə.tər/', 'Watch a new film at the movie theater.', 'cinema movie theater auditorium with big screen and red seats real photo', true),
    v('Popcorn', '🍿', 'Pipoca', '/ˈpɑːp.kɔːrn/', 'Eat warm buttered popcorn at the cinema.', 'striped bucket of popcorn on white background'),
    v('Trophy', '🏆', 'Troféu de conquista', '/ˈtroʊ.fi/', 'Congratulations! You earned the golden trophy!', 'golden champion trophy cup on white background'),
  ]
};

// ============================================================================
// 4 MÓDULOS EXCLUSIVOS DE PRONOMES (1 A CADA 3 MÓDULOS DE VOCABULÁRIO)
// Com explicação resumida para criança de 5 anos + Voz Humana Real da Professora (/audio/teacher/pronoun_X.wav)
// ============================================================================
const PRONOUN_MODULE_1 = {
  title: 'Lição de Pronomes I • Pessoais & De Tratamento',
  subtitle: 'Módulo de Pronomes 1/4 (Após 3 de Vocabulário) • Pares Associativos + Voz da Professora',
  pedagogicalObjective: 'Dominar os Pronomes Pessoais (I, You, He, She, It, We, They, Me, Him, Her, Us, Them) e os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma\'am, Dr., Prof.) conectando cada par.',
  icon: 'star',
  type: 'chest',
  theory: [
    'Chegou a hora da nossa 1ª Lição Exclusiva de Pronomes (inserida a cada 3 módulos de vocabulário)!',
    '1º Passo: Começamos pelos Pronomes Pessoais (I, You, He, She, It, We, They), que substituem o nome das pessoas e coisas.',
    '2º Passo: Em seguida praticamos os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma\'am, Dr., Prof.). Ouça a voz humana e meiga da professora no cabeçalho e conecte cada par!'
  ],
  boards: [
    {
      conceptTitle: '1º • Pronomes Pessoais (Quem fala e com quem falamos)',
      conceptHeader: 'Quando aponto para mim mesmo, digo "I" (Eu). Quando aponto para você, digo "You" (Você). Para um menino ou homem, digo "He" (Ele); e para uma menina ou mulher, digo "She" (Ela)!',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Conecte cada Pronome Pessoal em inglês ao seu par em português:',
      explanation: 'Pronomes Pessoais do Singular: I (Eu), You (Você), He (Ele), She (Ela).',
      pairs: [
        { id: 'p1', en: 'I', emoji: '🙋', phonetic: '/aɪ/', pt: 'Eu (falando de mim mesmo)', tipPt: 'Muito bem, meu bem! "I" significa "Eu"!' },
        { id: 'p2', en: 'You', emoji: '👉', phonetic: '/juː/', pt: 'Você (com quem estou falando)', tipPt: 'Isso mesmo! "You" significa "Você"!' },
        { id: 'p3', en: 'He', emoji: '👦', phonetic: '/hiː/', pt: 'Ele (para menino ou homem)', tipPt: 'Perfeito! "He" usamos para "Ele" (papai, irmão, amigo).' },
        { id: 'p4', en: 'She', emoji: '👧', phonetic: '/ʃiː/', pt: 'Ela (para menina ou mulher)', tipPt: 'Lindo! "She" usamos para "Ela" (mamãe, irmã, professora).' },
      ],
    },
    {
      conceptTitle: '1º • Pronomes Pessoais (Coisas, Bichinhos e Plural)',
      conceptHeader: 'Para 1 objeto da casa ou 1 bichinho, usamos "It" (Ele/Ela). Quando estamos juntos (eu + você), dizemos "We" (Nós). Para várias pessoas com quem falamos, "You" (Vocês); e para eles ou elas, "They"!',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Ligue os Pronomes Pessoais de coisas/animais e do plural aos seus pares:',
      explanation: 'It (para 1 objeto/animal), We (Nós), You (Vocês), They (Eles/Elas).',
      pairs: [
        { id: 'p5', en: 'It', emoji: '🐶', phonetic: '/ɪt/', pt: 'Ele / Ela (para 1 objeto, casa ou animal)', tipPt: 'Isso! A porta, o sofá ou o cachorrinho são "It"!' },
        { id: 'p6', en: 'We', emoji: '👨‍👩‍👧', phonetic: '/wiː/', pt: 'Nós (eu e você juntos)', tipPt: 'Muito bem! "We" significa "Nós"!' },
        { id: 'p7', en: 'You (plural)', emoji: '👫', phonetic: '/juː/', pt: 'Vocês (várias pessoas com quem falo)', tipPt: 'Ótimo! "You" serve para "Você" e também para "Vocês"!' },
        { id: 'p8', en: 'They', emoji: '👥', phonetic: '/ðeɪ/', pt: 'Eles / Elas (pessoas, animais ou objetos)', tipPt: 'Perfeito! "They" é o plural para tudo!' },
      ],
    },
    {
      conceptTitle: '1º • Pronomes Pessoais na Prática (Frases Curtas)',
      conceptHeader: 'Vamos ver como os Pronomes Pessoais ficam lindos junto das palavras que aprendemos na casa? Toque no inglês para ouvir e conecte ao significado!',
      teacherAudioPt: '/audio/teacher/pronoun_1.wav',
      prompt: '🤝 Associe cada frase curta com Pronome Pessoal ao seu par:',
      explanation: 'I am at home (Eu estou em casa), He is at the door (Ele está na porta), She is in the living room (Ela está na sala), It is a wooden door (É uma porta de madeira).',
      pairs: [
        { id: 'p9', en: 'I am at home', emoji: '🏠', phonetic: '/aɪ æm æt hoʊm/', pt: 'Eu estou em casa', tipPt: 'Isso! "I" = "Eu"!' },
        { id: 'p10', en: 'He is at the door', emoji: '🚪', phonetic: '/hiː ɪz æt ðə dɔːr/', pt: 'Ele está na porta', tipPt: 'Muito bem! "He" = "Ele"!' },
        { id: 'p11', en: 'She is on the sofa', emoji: '🛋️', phonetic: '/ʃiː ɪz ɑːn ðə ˈsoʊ.fə/', pt: 'Ela está no sofá', tipPt: 'Perfeito! "She" = "Ela"!' },
        { id: 'p12', en: 'It is a metal key', emoji: '🔑', phonetic: '/ɪt ɪz ə ˈmet.əl kiː/', pt: 'Ela (a chave) é uma chave de metal', tipPt: 'Lindo! Para objetos como a chave usamos "It"!' },
      ],
    },
    {
      conceptTitle: '2º • Pronomes de Tratamento (Educação e Respeito - Parte 1)',
      conceptHeader: 'São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos "Mr." (Senhor), "Mrs." (Senhora casada), "Miss" (Senhorita / Professora) e "Ms."!',
      teacherAudioPt: '/audio/teacher/pronoun_2.wav',
      prompt: '🤝 Conecte cada Pronome de Tratamento ao seu par em português:',
      explanation: 'Pronomes de Tratamento antes do nome: Mr. (Senhor), Mrs. (Senhora), Miss (Senhorita), Ms. (Senhora/Senhorita).',
      pairs: [
        { id: 't1', en: 'Mr.', emoji: '👨', phonetic: '/ˈmɪs.tər/', pt: 'Senhor (usado antes do nome do homem)', tipPt: 'Muito educado! "Mr. Silva" = "Senhor Silva"!' },
        { id: 't2', en: 'Mrs.', emoji: '👩', phonetic: '/ˈmɪs.ɪz/', pt: 'Senhora (usado para mulher casada)', tipPt: 'Perfeito! "Mrs." significa "Senhora"!' },
        { id: 't3', en: 'Miss', emoji: '👩‍🏫', phonetic: '/mɪs/', pt: 'Senhorita (moça jovem ou professora)', tipPt: 'Isso! Na escola as crianças chamam a professora de "Miss"!' },
        { id: 't4', en: 'Ms.', emoji: '👩‍💼', phonetic: '/mɪz/', pt: 'Senhora / Senhorita (para qualquer mulher)', tipPt: 'Excelente! "Ms." é respeitoso para qualquer mulher!' },
      ],
    },
    {
      conceptTitle: '2º • Pronomes de Tratamento (Educação no Dia a Dia - Parte 2)',
      conceptHeader: 'Quando falamos com respeito sem dizer o nome da pessoa, usamos "Sir" (Senhor) e "Ma\'am" (Senhora). E para profissionais usamos "Dr." (Doutor) e "Prof." (Professor)!',
      teacherAudioPt: '/audio/teacher/pronoun_2.wav',
      prompt: '🤝 Ligue cada Pronome de Tratamento direto ao seu significado:',
      explanation: 'Sir (Senhor), Ma\'am (Senhora), Dr. (Doutor/Doutora), Prof. (Professor/Mestre).',
      pairs: [
        { id: 't5', en: 'Sir', emoji: '🎩', phonetic: '/sɜːr/', pt: 'Senhor (tratamento direto: Yes, Sir!)', tipPt: 'Lindo! "Thank you, Sir!" = "Obrigado, Senhor!"' },
        { id: 't6', en: "Ma'am", emoji: '🌸', phonetic: '/mæm/', pt: 'Senhora (tratamento direto: Yes, Ma\'am!)', tipPt: 'Perfeito! "Excuse me, Ma\'am" = "Com licença, Senhora"!' },
        { id: 't7', en: 'Dr. (Doctor)', emoji: '🩺', phonetic: '/ˈdɑːk.tər/', pt: 'Doutor / Doutora (médico ou dentista)', tipPt: 'Isso mesmo! "Dr." usamos para médicos e doutores!' },
        { id: 't8', en: 'Prof. (Professor)', emoji: '🎓', phonetic: '/prəˈfes.ər/', pt: 'Professor(a) / Mestre', tipPt: 'Parabéns! Você concluiu Pessoais e Tratamento!' },
      ],
    },
  ],
};

const PRONOUN_MODULE_2 = {
  title: 'Lição de Pronomes II • Possessivos & Demonstrativos',
  subtitle: 'Módulo de Pronomes 2/4 (Após 6 de Vocabulário) • Pares Associativos + Voz da Professora',
  pedagogicalObjective: 'Dominar os Pronomes Possessivos (My, Your, His, Her, Its, Our, Their, Mine, Yours) e os Pronomes Demonstrativos (This, That, These, Those).',
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
        { id: 'pos1', en: 'My', emoji: '💖', phonetic: '/maɪ/', pt: 'Meu / Minha (ex: My bed = Minha cama)', tipPt: 'Isso mesmo! "My" mostra que pertence a você!' },
        { id: 'pos2', en: 'Your', emoji: '🎁', phonetic: '/jʊr/', pt: 'Seu / Sua (ex: Your shirt = Sua camisa)', tipPt: 'Muito bem! "Your" significa "Seu" ou "Sua"!' },
        { id: 'pos3', en: 'His', emoji: '👦', phonetic: '/hɪz/', pt: 'Dele (pertence a um menino ou homem)', tipPt: 'Perfeito! "His shoes" = "Os sapatos dele"!' },
        { id: 'pos4', en: 'Her', emoji: '👧', phonetic: '/hɜːr/', pt: 'Dela (pertence a uma menina ou mulher)', tipPt: 'Lindo! "Her dress" = "O vestido dela"!' },
      ],
    },
    {
      conceptTitle: '3º • Pronomes Possessivos (Nosso, Deles e É Meu! - Parte 2)',
      conceptHeader: 'Quando algo é de toda a nossa família junta, dizemos "Our" (Nosso/Nossa)! Quando é de outras pessoas, "Their" (Deles/Delas). E no final da frase, para dizer "É meu!" ou "É seu!", usamos "Mine" e "Yours"!',
      teacherAudioPt: '/audio/teacher/pronoun_3.wav',
      prompt: '🤝 Ligue os Pronomes Possessivos de plural e fim de frase aos seus pares:',
      explanation: 'Our (Nosso/Nossa), Their (Deles/Delas), Mine (Meu/Minha no final), Yours (Seu/Sua no final).',
      pairs: [
        { id: 'pos5', en: 'Our', emoji: '🏡', phonetic: '/aʊər/', pt: 'Nosso / Nossa (ex: Our kitchen = Nossa cozinha)', tipPt: 'Que orgulho! "Our" é "Nosso" ou "Nossa"!' },
        { id: 'pos6', en: 'Their', emoji: '👨‍👩‍👧‍👦', phonetic: '/ðer/', pt: 'Deles / Delas (pertence a eles ou elas)', tipPt: 'Isso! "Their house" = "A casa deles"!' },
        { id: 'pos7', en: 'Mine', emoji: '✨', phonetic: '/maɪn/', pt: 'O meu / A minha (ex: This cup is mine!)', tipPt: 'Perfeito! "It is mine!" = "É meu!"' },
        { id: 'pos8', en: 'Yours', emoji: '🌟', phonetic: '/jʊrz/', pt: 'O seu / A sua (ex: This plate is yours!)', tipPt: 'Maravilha! "It is yours!" = "É seu!"' },
      ],
    },
    {
      conceptTitle: '4º • Pronomes Demonstrativos (Pertinho da Mão vs. Lá Longe)',
      conceptHeader: 'Para 1 coisa bem pertinho da mão que podemos tocar, dizemos "This" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos "That" (Aquele/Aquela). Para várias coisas pertinho, "These"; e várias lá longe, "Those"!',
      teacherAudioPt: '/audio/teacher/pronoun_4.wav',
      prompt: '🤝 Conecte cada Pronome Demonstrativo (perto vs. longe):',
      explanation: 'This (1 perto), That (1 longe), These (vários perto), Those (vários longe).',
      pairs: [
        { id: 'dem1', en: 'This', emoji: '🤏', phonetic: '/ðɪs/', pt: 'Este / Esta / Isto (1 coisa PERTINHO)', tipPt: 'Exato! "This" é para 1 coisa bem pertinho da mão!' },
        { id: 'dem2', en: 'That', emoji: '👉', phonetic: '/ðæt/', pt: 'Aquele / Aquela / Aquilo (1 coisa LONGE)', tipPt: 'Muito bem! "That" é para 1 coisa lá longe!' },
        { id: 'dem3', en: 'These', emoji: '🤲', phonetic: '/ðiːz/', pt: 'Estes / Estas (2 ou mais coisas PERTINHO)', tipPt: 'Perfeito! "These" é o plural pertinho de nós!' },
        { id: 'dem4', en: 'Those', emoji: '🔭', phonetic: '/ðoʊz/', pt: 'Aqueles / Aquelas (2 ou mais coisas LONGE)', tipPt: 'Lindo! "Those" é o plural para o que está lá longe!' },
      ],
    },
    {
      conceptTitle: '4º • Pronomes Demonstrativos na Prática (Com Objetos da Casa)',
      conceptHeader: 'Agora vamos usar "This, That, These, Those" com os objetos que já conhecemos da casa! Lembre-se: This/These = aqui pertinho; That/Those = lá longe!',
      teacherAudioPt: '/audio/teacher/pronoun_4.wav',
      prompt: '🤝 Ligue cada expressão com Pronome Demonstrativo ao seu par:',
      explanation: 'This spoon (Esta colher aqui), That fridge (Aquela geladeira lá), These pillows (Estes travesseiros aqui), Those shoes (Aqueles sapatos lá).',
      pairs: [
        { id: 'dem5', en: 'This spoon', emoji: '🥄', phonetic: '/ðɪs spuːn/', pt: 'Esta colher (aqui na minha mão)', tipPt: 'Isso! 1 colher pertinho = "This spoon"!' },
        { id: 'dem6', en: 'That fridge', emoji: '🧊', phonetic: '/ðæt frɪdʒ/', pt: 'Aquela geladeira (ali longe)', tipPt: 'Muito bem! 1 geladeira longe = "That fridge"!' },
        { id: 'dem7', en: 'These pillows', emoji: '⬜', phonetic: '/ðiːz ˈpɪl.oʊz/', pt: 'Estes travesseiros (aqui pertinho)', tipPt: 'Perfeito! Vários pertinho = "These pillows"!' },
        { id: 'dem8', en: 'Those shoes', emoji: '👞', phonetic: '/ðoʊz ʃuːz/', pt: 'Aqueles sapatos (lá longe)', tipPt: 'Parabéns! Vários lá longe = "Those shoes"!' },
      ],
    },
  ],
};

const PRONOUN_MODULE_3 = {
  title: 'Lição de Pronomes III • Reflexivos & Interrogativos',
  subtitle: 'Módulo de Pronomes 3/4 (Após 9 de Vocabulário) • Pares Associativos + Voz da Professora',
  pedagogicalObjective: 'Dominar os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Itself, Ourselves, Themselves) e os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How).',
  icon: 'star',
  type: 'chest',
  theory: [
    'Bem-vindo à 3ª Lição Exclusiva de Pronomes (após 9 módulos de vocabulário)!',
    '5º Passo: Aprendemos os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Ourselves, Themselves), que funcionam como um espelho.',
    '6º Passo: Aprendemos os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How), usados para fazer perguntas!'
  ],
  boards: [
    {
      conceptTitle: '5º • Pronomes Reflexivos (Como em um Espelho - Parte 1)',
      conceptHeader: 'Funcionam igual a um espelho! Quando você olha para si mesmo ou faz algo sozinho, usamos "-self": "Myself" (Eu mesmo), "Yourself" (Você mesmo), "Himself" (Ele mesmo) e "Herself" (Ela mesma)!',
      teacherAudioPt: '/audio/teacher/pronoun_5.wav',
      prompt: '🤝 Conecte cada Pronome Reflexivo ao seu par em português:',
      explanation: 'Myself (Eu mesmo), Yourself (Você mesmo), Himself (Ele mesmo), Herself (Ela mesma).',
      pairs: [
        { id: 'ref1', en: 'Myself', emoji: '🪞', phonetic: '/maɪˈself/', pt: 'Eu mesmo(a) / A mim mesmo', tipPt: 'Isso! "I see myself in the mirror" = "Eu me vejo no espelho"!' },
        { id: 'ref2', en: 'Yourself', emoji: '🫵', phonetic: '/jʊrˈself/', pt: 'Você mesmo(a) / A si mesmo', tipPt: 'Muito bem! "Yourself" = "Você mesmo"!' },
        { id: 'ref3', en: 'Himself', emoji: '👦', phonetic: '/hɪmˈself/', pt: 'Ele mesmo (para menino ou homem)', tipPt: 'Perfeito! "Himself" = "Ele mesmo"!' },
        { id: 'ref4', en: 'Herself', emoji: '👧', phonetic: '/hɜːrˈself/', pt: 'Ela mesma (para menina ou mulher)', tipPt: 'Lindo! "Herself" = "Ela mesma"!' },
      ],
    },
    {
      conceptTitle: '5º • Pronomes Reflexivos (Coisas e Plural - Parte 2)',
      conceptHeader: 'Para um aparelho ou animalzinho que faz algo sozinho, dizemos "Itself". E quando são várias pessoas, o final vira "-selves": "Ourselves" (Nós mesmos), "Yourselves" (Vocês mesmos) e "Themselves" (Eles mesmos)!',
      teacherAudioPt: '/audio/teacher/pronoun_5.wav',
      prompt: '🤝 Ligue os Pronomes Reflexivos de objetos e plural aos seus pares:',
      explanation: 'Itself (Ele/Ela mesmo para coisas), Ourselves (Nós mesmos), Yourselves (Vocês mesmos), Themselves (Eles/Elas mesmas).',
      pairs: [
        { id: 'ref5', en: 'Itself', emoji: '🚪', phonetic: '/ɪtˈself/', pt: 'Ele(a) mesmo(a) / Sozinho (para coisas/animais)', tipPt: 'Isso! "The door closed by itself" = "A porta fechou sozinha"!' },
        { id: 'ref6', en: 'Ourselves', emoji: '👨‍👩‍👧', phonetic: '/ɑːrˈselvz/', pt: 'Nós mesmos(as)', tipPt: 'Muito bem! "Ourselves" = "Nós mesmos"!' },
        { id: 'ref7', en: 'Yourselves', emoji: '👫', phonetic: '/jʊrˈselvz/', pt: 'Vocês mesmos(as) (no plural)', tipPt: 'Perfeito! "Yourselves" = "Vocês mesmos"!' },
        { id: 'ref8', en: 'Themselves', emoji: '👥', phonetic: '/ðəmˈselvz/', pt: 'Eles mesmos / Elas mesmas', tipPt: 'Excelente! Você dominou todos os Reflexivos!' },
      ],
    },
    {
      conceptTitle: '6º • Pronomes Interrogativos (Perguntas de Detetive - Parte 1)',
      conceptHeader: 'São as palavrinhas para fazer perguntas! "Who?" pergunta Quem (pessoa), "What?" pergunta O quê (coisa), "Where?" pergunta Onde (lugar) e "When?" pergunta Quando (hora ou dia)!',
      teacherAudioPt: '/audio/teacher/pronoun_6.wav',
      prompt: '🤝 Conecte cada Pronome Interrogativo à sua pergunta:',
      explanation: 'Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?).',
      pairs: [
        { id: 'int1', en: 'Who?', emoji: '🕵️', phonetic: '/huː/', pt: 'Quem? (pergunta sobre pessoas)', tipPt: 'Exato! "Who is the teacher?" = "Quem é a professora?"' },
        { id: 'int2', en: 'What?', emoji: '❓', phonetic: '/wɑːt/', pt: 'O quê? / Qual? (pergunta sobre coisas)', tipPt: 'Muito bem! "What is in the backpack?" = "O que tem na mochila?"' },
        { id: 'int3', en: 'Where?', emoji: '📍', phonetic: '/wer/', pt: 'Onde? (pergunta sobre o lugar)', tipPt: 'Perfeito! "Where is the school?" = "Onde fica a escola?"' },
        { id: 'int4', en: 'When?', emoji: '⏰', phonetic: '/wen/', pt: 'Quando? (pergunta sobre tempo ou hora)', tipPt: 'Lindo! "When" pergunta "Quando?"' },
      ],
    },
    {
      conceptTitle: '6º • Pronomes Interrogativos (Por quê, De quem, Qual e Como - Parte 2)',
      conceptHeader: 'Mais 4 palavrinhas curiosas: "Why?" pergunta Por quê (o motivo), "Whose?" pergunta De quem é (o dono), "Which?" pergunta Qual (escolhendo entre opções) e "How?" pergunta Como!',
      teacherAudioPt: '/audio/teacher/pronoun_6.wav',
      prompt: '🤝 Ligue os Pronomes Interrogativos Why, Whose, Which e How aos seus pares:',
      explanation: 'Why? (Por quê?), Whose? (De quem?), Which? (Qual dentre opções?), How? (Como?).',
      pairs: [
        { id: 'int5', en: 'Why?', emoji: '🤔', phonetic: '/waɪ/', pt: 'Por quê? (pergunta o motivo)', tipPt: 'Isso! "Why?" = "Por quê?"' },
        { id: 'int6', en: 'Whose?', emoji: '🔑', phonetic: '/huːz/', pt: 'De quem? (ex: Whose notebook is this?)', tipPt: 'Brilhante! "Whose" pergunta quem é o dono!' },
        { id: 'int7', en: 'Which?', emoji: '⚖️', phonetic: '/wɪtʃ/', pt: 'Qual? (escolhendo entre opções)', tipPt: 'Muito bem! "Which pen do you want?" = "Qual caneta você quer?"' },
        { id: 'int8', en: 'How?', emoji: '🛠️', phonetic: '/haʊ/', pt: 'Como? (ex: How are you? = Como vai você?)', tipPt: 'Parabéns! Você aprendeu todos os Interrogativos!' },
      ],
    },
  ],
};

const PRONOUN_MODULE_4 = {
  title: 'Lição de Pronomes IV • Indefinidos & Relativos',
  subtitle: 'Módulo de Pronomes 4/4 (Após 12 de Vocabulário) • Pares Associativos + Voz da Professora',
  pedagogicalObjective: 'Concluir o domínio dos pronomes com os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing, Anyone, Anything) e os Pronomes Relativos (Who, Which, That, Whose, Where, When).',
  icon: 'swords',
  type: 'boss',
  theory: [
    'Chegamos à 4ª e última Lição Exclusiva de Pronomes (fechando com chave de ouro o Módulo 0)!',
    '7º Passo: Aprendemos os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing, Anyone, Anything).',
    '8º Passo: Aprendemos os Pronomes Relativos (Who, Which, That, Whose, Where, When), que funcionam como pontezinhas conectando as frases!'
  ],
  boards: [
    {
      conceptTitle: '7º • Pronomes Indefinidos (Alguém, Algo, Todo Mundo e Tudo - Parte 1)',
      conceptHeader: 'Quando sabemos que tem uma pessoa, mas não sabemos o nome dela, dizemos "Someone" (Alguém). Para uma coisa, dizemos "Something" (Alguma coisa). Para todas as pessoas juntas, "Everyone" (Todo mundo); e para todas as coisas, "Everything" (Tudo)!',
      teacherAudioPt: '/audio/teacher/pronoun_7.wav',
      prompt: '🤝 Conecte cada Pronome Indefinido ao seu par em português:',
      explanation: 'Someone (Alguém), Something (Alguma coisa), Everyone (Todo mundo), Everything (Tudo).',
      pairs: [
        { id: 'ind1', en: 'Someone', emoji: '🔔', phonetic: '/ˈsʌm.wʌn/', pt: 'Alguém (uma pessoa)', tipPt: 'Isso! "Someone is at the door" = "Alguém está na porta"!' },
        { id: 'ind2', en: 'Something', emoji: '🎁', phonetic: '/ˈsʌm.θɪŋ/', pt: 'Algo / Alguma coisa', tipPt: 'Muito bem! "Something" = "Alguma coisa"!' },
        { id: 'ind3', en: 'Everyone', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˈev.ri.wʌn/', pt: 'Todo mundo / Todas as pessoas', tipPt: 'Perfeito! "Everyone" = "Todo mundo"!' },
        { id: 'ind4', en: 'Everything', emoji: '🌟', phonetic: '/ˈev.ri.θɪŋ/', pt: 'Tudo / Todas as coisas', tipPt: 'Lindo! "Everything" = "Tudo"!' },
      ],
    },
    {
      conceptTitle: '7º • Pronomes Indefinidos (Ninguém, Nada e Qualquer Um - Parte 2)',
      conceptHeader: 'Quando não tem nenhuma pessoa, dizemos "Nobody" (Ninguém). Quando não tem nenhuma coisa, dizemos "Nothing" (Nada). E em perguntas ou para dizer qualquer um, usamos "Anyone" e "Anything"!',
      teacherAudioPt: '/audio/teacher/pronoun_7.wav',
      prompt: '🤝 Ligue os Pronomes Indefinidos Nobody, Nothing, Anyone e Anything:',
      explanation: 'Nobody (Ninguém), Nothing (Nada), Anyone (Alguém em perguntas / Qualquer pessoa), Anything (Algo em perguntas / Qualquer coisa).',
      pairs: [
        { id: 'ind5', en: 'Nobody', emoji: '🚫', phonetic: '/ˈnoʊ.bɑː.di/', pt: 'Ninguém (nenhuma pessoa)', tipPt: 'Exato! "Nobody" = "Ninguém"!' },
        { id: 'ind6', en: 'Nothing', emoji: '🫙', phonetic: '/ˈnʌθ.ɪŋ/', pt: 'Nada (nenhuma coisa)', tipPt: 'Isso! "Nothing in the box" = "Nada na caixa"!' },
        { id: 'ind7', en: 'Anyone', emoji: '🙋‍♂️', phonetic: '/ˈen.i.wʌn/', pt: 'Alguém (em perguntas) / Qualquer pessoa', tipPt: 'Muito bem! "Is anyone home?" = "Tem alguém em casa?"' },
        { id: 'ind8', en: 'Anything', emoji: '✨', phonetic: '/ˈen.i.θɪŋ/', pt: 'Alguma coisa (em perguntas) / Qualquer coisa', tipPt: 'Perfeito! Você dominou os Indefinidos!' },
      ],
    },
    {
      conceptTitle: '8º • Pronomes Relativos (As Pontezinhas das Frases - Parte 1)',
      conceptHeader: 'São pontezinhas que juntam duas ideias na mesma frase! "Who" significa "que/quem" para ligar PESSOAS; "Which" significa "que/o qual" para ligar COISAS ou ANIMAIS; "That" é a ponte curinga para pessoas e coisas; e "Whose" indica "cujo / de quem"!',
      teacherAudioPt: '/audio/teacher/pronoun_8.wav',
      prompt: '🤝 Conecte cada Pronome Relativo (a pontezinha da frase) ao seu uso:',
      explanation: 'Who (ponte para pessoas), Which (ponte para coisas/animais), That (ponte curinga), Whose (ponte de posse).',
      pairs: [
        { id: 'rel1', en: 'Who (relativo)', emoji: '👩‍⚕️', phonetic: '/huː/', pt: 'Que / Quem (ponte usada para PESSOAS)', tipPt: 'Perfeito! "The doctor who helps" = "O médico que ajuda"!' },
        { id: 'rel2', en: 'Which (relativo)', emoji: '🔑', phonetic: '/wɪtʃ/', pt: 'Que / O qual (ponte para COISAS ou ANIMAIS)', tipPt: 'Isso! "The key which opens" = "A chave que abre"!' },
        { id: 'rel3', en: 'That (relativo)', emoji: '🌉', phonetic: '/ðæt/', pt: 'Que (ponte curinga para PESSOAS ou COISAS)', tipPt: 'Muito bem! "That" conecta tanto pessoas quanto objetos!' },
        { id: 'rel4', en: 'Whose (relativo)', emoji: '🏠', phonetic: '/huːz/', pt: 'Cujo(a) / De quem (ponte que indica POSSE)', tipPt: 'Lindo! "The boy whose dog is here" = "O menino cujo cachorro está aqui"!' },
      ],
    },
    {
      conceptTitle: '8º • Pronomes Relativos na Prática (Frases do Cotidiano)',
      conceptHeader: 'Vamos ligar frases reais do nosso dia a dia usando as pontezinhas dos Pronomes Relativos "Who, Which, That, Where"!',
      teacherAudioPt: '/audio/teacher/pronoun_8.wav',
      prompt: '🤝 Associe cada frase com Pronome Relativo ao seu significado em português:',
      explanation: 'The teacher who teaches (A professora que ensina), The cake which I made (O bolo que eu fiz), The house where I live (A casa onde eu moro), The car that is red (O carro que é vermelho).',
      pairs: [
        { id: 'rel5', en: 'The teacher who teaches', emoji: '👩‍🏫', phonetic: '/ðə ˈtiː.tʃər huː ˈtiː.tʃɪz/', pt: 'A professora que ensina (pessoa = who)', tipPt: 'Isso! Pessoa usa a pontezinha "who"!' },
        { id: 'rel6', en: 'The key which opens', emoji: '🔑', phonetic: '/ðə kiː wɪtʃ ˈoʊ.pənz/', pt: 'A chave que abre (objeto = which)', tipPt: 'Muito bem! Objeto usa a pontezinha "which"!' },
        { id: 'rel7', en: 'The house where I live', emoji: '🏠', phonetic: '/ðə haʊs wer aɪ lɪv/', pt: 'A casa onde eu moro (lugar = where)', tipPt: 'Perfeito! Lugar usa a pontezinha "where"!' },
        { id: 'rel8', en: 'The car that is red', emoji: '🚗', phonetic: '/ðə kɑːr ðæt ɪz red/', pt: 'O carro que é vermelho (curinga = that)', tipPt: 'Parabéns, meu amor! Você dominou todas as 8 famílias de pronomes!' },
      ],
    },
  ],
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

// Build pure vocabulary exercises (NO conceptHeader / teacher explanation on vocabulary items, as requested!)
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

function makeEnvironmentPhase(theme, phaseNumber) {
  const phaseId = `w0-p${phaseNumber}`;
  return {
    id: phaseId,
    worldId: 0,
    phaseNumber,
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

// Intercalação exata solicitada: 3 Módulos de Vocabulário -> 1 Módulo Exclusivo de Pronomes (Total: 16 Fases)
const phases = [
  // Bloco 1: 3 de Vocabulário + 1 de Pronomes (Pessoais & Tratamento)
  makeEnvironmentPhase(MODULE_1_ENTRANCE, 1),
  makeEnvironmentPhase(MODULE_2_LIVING_ROOM, 2),
  makeEnvironmentPhase(MODULE_3_KITCHEN_STRUCTURE, 3),
  makePronounPhase(PRONOUN_MODULE_1, 4),

  // Bloco 2: 3 de Vocabulário + 1 de Pronomes (Possessivos & Demonstrativos)
  makeEnvironmentPhase(MODULE_4_KITCHEN_UTENSILS_FRIDGE, 5),
  makeEnvironmentPhase(MODULE_5_BEDROOM_CLOSET, 6),
  makeEnvironmentPhase(MODULE_6_BATHROOM_HYGIENE, 7),
  makePronounPhase(PRONOUN_MODULE_2, 8),

  // Bloco 3: 3 de Vocabulário + 1 de Pronomes (Reflexivos & Interrogativos)
  makeEnvironmentPhase(MODULE_7_LAUNDRY_BACKYARD, 9),
  makeEnvironmentPhase(MODULE_8_STREET_NEIGHBORHOOD, 10),
  makeEnvironmentPhase(MODULE_9_SCHOOL_CLASSROOM, 11),
  makePronounPhase(PRONOUN_MODULE_3, 12),

  // Bloco 4: 3 de Vocabulário + 1 de Pronomes (Indefinidos & Relativos)
  makeEnvironmentPhase(MODULE_10_SUPERMARKET_GROCERY, 13),
  makeEnvironmentPhase(MODULE_11_CHURCH_COMMUNITY, 14),
  makeEnvironmentPhase(MODULE_12_CITY_SERVICES, 15),
  makePronounPhase(PRONOUN_MODULE_4, 16),
];

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

const mergedImagesMap = { ...existingImagesMap };
let updatedSpecificCount = 0;
for (const env of ALL_ENVIRONMENTS) {
  for (const item of env.items) {
    if (!mergedImagesMap[item.text] || item.forceOverrideImage) {
      const q = encodeURIComponent(item.studioQuery);
      mergedImagesMap[item.text] = `https://tse1.mm.bing.net/th?q=${q}&w=500&p=0`;
      updatedSpecificCount++;
    }
  }
}

const fileContent = `import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

const imagesFileContent = `// Auto-generated specific & contextual photographs for all vocabulary items\nexport const REAL_VOCAB_IMAGES: Record<string, string> = ${JSON.stringify(mergedImagesMap, null, 2)};\n`;

fs.writeFileSync('src/data/world0Phases.ts', fileContent, 'utf-8');
fs.writeFileSync('src/data/realVocabImages.ts', imagesFileContent, 'utf-8');

console.log('Successfully generated 16 phases (12 Vocabulary + 4 Separate Pronoun Modules, 1 every 3 vocab modules)!');
console.log('Updated', updatedSpecificCount, 'specific contextual photos (sidewalk, roof on house, etc.).');
