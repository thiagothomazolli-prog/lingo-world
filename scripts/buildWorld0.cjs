const fs = require('fs');

// Helper to create a vocabulary item ordered from most common (#1) to less common (#30) in the Brazilian context.
// Queries use clean product photo terms on white background without square cropping (no c=7) and without stock agency keywords.
function v(text, emoji, pt, phonetic, sentence, studioQuery) {
  return {
    text,
    emoji,
    label: text,
    pt,
    phonetic,
    sentence: sentence || `This is ${text.toLowerCase()}.`,
    studioQuery: studioQuery || `single whole ${text} on white background`,
  };
}

// ============================================================================
// DEFINIÇÃO DOS MÓDULOS POR TEMA (INTERCALADOS EM 4 RODADAS + PRÁTICA AO FINAL DE CADA RODADA)
// ============================================================================

const FOOD_1 = {
  title: 'Rodada 1 • Alimentos I: Frutas do Dia a Dia',
  subtitle: 'Passo 1/5 da Rodada 1 • Frutas mais conhecidas no Brasil',
  pedagogicalObjective: 'Reconhecer pelo som as frutas mais comuns do cotidiano brasileiro (inteiras ou abertas ao meio conforme mais conhecidas).',
  icon: 'apple',
  theory: [
    'Começamos a Rodada 1 com as frutas mais comuns no Brasil: Maçã, Banana, Laranja, Morango, Uva, Melancia, Abacaxi, Manga e Mamão.',
    'Frutas mais conhecidas inteiras (como Maçã, Banana, Morango, Uva, Abacaxi, Manga, Pera) aparecem inteiras; já frutas conhecidas abertas (como Mamão, Melancia, Maracujá, Abacate e Kiwi) mostram seu interior característico.',
    'Ao final desta rodada (após Alimentos, Animais, Casa e Roupas), você fará uma prática especial com palavras simples!'
  ],
  items: [
    v('Apple', '🍎', 'Maçã', '/ˈæp.əl/', 'I eat a fresh red apple every morning.', 'single whole red apple fruit with leaf on white background'),
    v('Banana', '🍌', 'Banana', '/bəˈnæn.ə/', 'Bananas are rich in potassium.', 'ripe yellow banana bunch whole fruit on white background'),
    v('Orange', '🍊', 'Laranja', '/ˈɔːr.ɪndʒ/', 'Fresh orange juice has lots of vitamin C.', 'whole orange fruit and half orange on white background'),
    v('Strawberry', '🍓', 'Morango', '/ˈstrɔː.ber.i/', 'She loves sweet red strawberries.', 'single whole red strawberry fruit with green leaf on white background'),
    v('Grape', '🍇', 'Uva', '/ɡreɪp/', 'Purple grapes grow on vines.', 'whole bunch of purple grapes fruit on white background'),
    v('Watermelon', '🍉', 'Melancia', '/ˈwɔː.tərˌmel.ən/', 'Cold watermelon is great in the summer.', 'whole green watermelon with one red triangle wedge on white background'),
    v('Pineapple', '🍍', 'Abacaxi', '/ˈpaɪnˌæp.əl/', 'Pineapple is a juicy tropical fruit.', 'single whole pineapple fruit with green crown on white background'),
    v('Mango', '🥭', 'Manga', '/ˈmæŋ.ɡoʊ/', 'This ripe mango is very sweet.', 'single whole ripe red yellow mango fruit on white background'),
    v('Papaya', '🧡', 'Mamão', '/pəˈpaɪ.ə/', 'Papaya is very popular for breakfast in Brazil.', 'ripe orange papaya fruit cut in half lengthwise showing black seeds on white background'),
    v('Lemon', '🍋', 'Limão siciliano', '/ˈlem.ən/', 'Yellow lemon tastes sour and refreshing.', 'whole yellow lemon fruit and half on white background'),
    v('Lime', '🟢', 'Limão verde (Taiti)', '/laɪm/', 'Squeeze fresh green lime over the food.', 'whole green lime fruit and half on white background'),
    v('Tangerine', '🍊', 'Tangerina / Mexerica', '/ˈtæn.dʒə.riːn/', 'Tangerines are easy to peel.', 'single whole orange tangerine mandarin fruit on white background'),
    v('Guava', '🩷', 'Goiaba', '/ˈɡwɑː.və/', 'Red guava is very common in Brazil.', 'whole green guava fruit with pink half on white background'),
    v('Passion Fruit', '💛', 'Maracujá', '/ˈpæʃ.ən fruːt/', 'Passion fruit juice is very relaxing.', 'yellow passion fruit maracuja cut in half showing seeds on white background'),
    v('Melon', '🍈', 'Melão', '/ˈmel.ən/', 'Sweet yellow melon is refreshing.', 'whole yellow honeydew melon with one wedge on white background'),
    v('Avocado', '🥑', 'Abacate', '/ˌæv.əˈkɑː.doʊ/', 'Avocado is creamy and nutritious.', 'green avocado fruit cut in half with brown seed on white background'),
    v('Coconut', '🥥', 'Coco', '/ˈkoʊ.kə.nʌt/', 'We drank fresh coconut water at the beach.', 'brown coconut cracked in half showing white meat on white background'),
    v('Pear', '🍐', 'Pera', '/per/', 'The green pear is sweet and soft.', 'single whole green pear fruit on white background'),
    v('Peach', '🍑', 'Pêssego', '/piːtʃ/', 'A ripe peach has soft skin.', 'single whole ripe peach fruit with green leaf on white background'),
    v('Kiwi', '🥝', 'Kiwi', '/ˈkiː.wiː/', 'Kiwi has bright green flesh inside.', 'whole brown kiwi fruit and green half on white background'),
    v('Plum', '🟣', 'Ameixa', '/plʌm/', 'She picked a ripe purple plum.', 'single whole ripe red purple plum fruit on white background'),
    v('Cherry', '🍒', 'Cereja', '/ˈtʃer.i/', 'He put a red cherry on top of the cake.', 'two whole red cherries with stems on white background'),
    v('Cashew', '🧡', 'Caju', '/ˈkæʃ.uː/', 'Cashew fruit is native to Brazil.', 'single whole ripe yellow red cashew apple caju fruit on white background'),
    v('Acai', '🟣', 'Açaí', '/ˌɑː.sɑːˈiː/', 'Cold acai bowl is a Brazilian favorite.', 'purple acai bowl with whole acai berries on white background'),
    v('Jabuticaba', '⚫', 'Jabuticaba', '/ˌʒɑː.buː.tɪˈkɑː.bə/', 'Jabuticaba is a sweet dark Brazilian fruit.', 'whole dark purple jabuticaba fruits on white background'),
    v('Persimmon', '🟠', 'Caqui', '/pərˈsɪm.ən/', 'Ripe persimmon is very sweet.', 'single whole orange persimmon caqui fruit on white background'),
    v('Starfruit', '⭐', 'Carambola', '/ˈstɑːr.fruːt/', 'Slices of starfruit look like bright stars.', 'whole yellow starfruit carambola with one star slice on white background'),
    v('Blackberry', '⚫', 'Amora', '/ˈblækˌber.i/', 'Blackberries are dark and sweet.', 'whole fresh black blackberry fruit on white background'),
    v('Jackfruit', '🟢', 'Jaca', '/ˈdʒæk.fruːt/', 'Jackfruit is a very large tropical fruit.', 'whole green jackfruit on white background'),
    v('Fig', '🟤', 'Figo', '/fɪɡ/', 'Fresh figs are sweet and soft.', 'whole purple fig fruit and half on white background'),
  ]
};

const ANIMALS_1 = {
  title: 'Rodada 1 • Animais I: Pets, Quintal & Fazenda',
  subtitle: 'Passo 2/5 da Rodada 1 • Os 30 animais mais conhecidos pelas famílias',
  pedagogicalObjective: 'Reconhecer os animais domésticos, pets e bichos da fazenda mais familiares do dia a dia.',
  icon: 'dog',
  theory: [
    'Agora variamos o tema para você não cansar: saímos de Frutas e entramos nos Animais mais conhecidos no Brasil!',
    'Inclui Cachorro (Dog), Gato (Cat), Pássaro (Bird), Peixe (Fish), Coelho (Rabbit), Cavalo (Horse), Vaca (Cow), Porco (Pig) e Galinha (Chicken).',
    'Todos os animais aparecem inteiros, sem cortes e sem tarjas.'
  ],
  items: [
    v('Dog', '🐕', 'Cachorro', '/dɔːɡ/', 'The friendly dog wags its tail.', 'golden retriever dog full body sitting on white background'),
    v('Cat', '🐈', 'Gato', '/kæt/', 'The cute cat walks quietly.', 'domestic tabby cat full body standing on white background'),
    v('Bird', '🐦', 'Pássaro / Passarinho', '/bɜːrd/', 'The little bird sings in the morning.', 'small colorful songbird full body perching on white background'),
    v('Fish', '🐟', 'Peixe', '/fɪʃ/', 'The orange goldfish swims in the aquarium.', 'single orange goldfish full body side view on white background'),
    v('Rabbit', '🐇', 'Coelho', '/ˈræb.ɪt/', 'The white rabbit has long ears.', 'cute rabbit bunny full body sitting on white background'),
    v('Turtle', '🐢', 'Tartaruga / Jabuti', '/ˈtɜːr.təl/', 'The turtle walks slowly with its shell.', 'land tortoise turtle full body on white background'),
    v('Parrot', '🦜', 'Papagaio', '/ˈpær.ət/', 'The green parrot can repeat words.', 'green parrot bird full body perching on white background'),
    v('Hamster', '🐹', 'Hamster', '/ˈhæm.stər/', 'The small golden hamster eats seeds.', 'golden hamster pet full body on white background'),
    v('Guinea Pig', '🐹', 'Porquinho-da-índia', '/ˈɡɪn.i pɪɡ/', 'The guinea pig is a gentle pet.', 'tricolor guinea pig pet full body on white background'),
    v('Horse', '🐎', 'Cavalo', '/hɔːrs/', 'The brown horse runs across the farm.', 'brown horse full body standing side view on white background'),
    v('Cow', '🐄', 'Vaca', '/kaʊ/', 'The dairy cow gives us fresh milk.', 'black and white dairy cow full body standing on white background'),
    v('Pig', '🐖', 'Porco', '/pɪɡ/', 'The pink pig lives on the farm.', 'pink farm pig full body standing on white background'),
    v('Chicken', '🐔', 'Galinha', '/ˈtʃɪk.ɪn/', 'The brown hen lays eggs on the farm.', 'brown hen chicken full body standing on white background'),
    v('Rooster', '🐓', 'Galo', '/ˈruː.stər/', 'The rooster crows early in the morning.', 'rooster cock bird full body standing on white background'),
    v('Chick', '🐥', 'Pintinho', '/tʃɪk/', 'The little yellow chick follows the hen.', 'yellow baby chick bird full body standing on white background'),
    v('Duck', '🦆', 'Pato', '/dʌk/', 'The white duck swims in the lake.', 'white farm duck full body standing on white background'),
    v('Sheep', '🐑', 'Ovelha', '/ʃiːp/', 'White sheep have soft wool.', 'fluffy white sheep full body standing on white background'),
    v('Goat', '🐐', 'Cabra / Bode', '/ɡoʊt/', 'The goat climbs rocks on the farm.', 'farm goat full body standing on white background'),
    v('Donkey', '🫏', 'Burro / Jegue', '/ˈdɑːŋ.ki/', 'The gray donkey has long ears.', 'gray donkey mule full body standing on white background'),
    v('Bull', '🐂', 'Touro / Boi', '/bʊl/', 'The strong bull has two horns.', 'brown bull cattle with horns full body on white background'),
    v('Turkey', '🦃', 'Peru', '/ˈtɜːr.ki/', 'The turkey opens its fan tail.', 'turkey bird full body standing on white background'),
    v('Goose', '🪿', 'Ganso', '/ɡuːs/', 'The white goose has a long neck.', 'white goose bird full body standing on white background'),
    v('Mouse', '🐁', 'Rato / Camundongo', '/maʊs/', 'The small mouse loves cheese.', 'small white mouse full body on white background'),
    v('Pigeon', '🐦', 'Pombo', '/ˈpɪdʒ.ən/', 'Pigeons walk in the city square.', 'gray city pigeon bird full body standing on white background'),
    v('Frog', '🐸', 'Sapo / Rã', '/frɔːɡ/', 'The green frog jumps high.', 'green tree frog full body sitting on white background'),
    v('Butterfly', '🦋', 'Borboleta', '/ˈbʌt.ər.flaɪ/', 'A colorful butterfly lands on a flower.', 'orange monarch butterfly full wings on white background'),
    v('Bee', '🐝', 'Abelha', '/biː/', 'Honeybees make golden honey.', 'honeybee insect full body on white background'),
    v('Ant', '🐜', 'Formiga', '/ænt/', 'Small ants carry leaves together.', 'single ant insect full body on white background'),
    v('Ladybug', '🐞', 'Joaninha', '/ˈleɪ.di.bʌɡ/', 'A red ladybug with black spots.', 'red ladybug beetle with black spots on white background'),
    v('Spider', '🕷️', 'Aranha', '/ˈspaɪ.dər/', 'The spider builds a web in the garden.', 'spider arachnid full body on white background'),
  ]
};

const HOME_1 = {
  title: 'Rodada 1 • Casa & Objetos I: Móveis & Quarto',
  subtitle: 'Passo 3/5 da Rodada 1 • Os 30 móveis e objetos mais comuns da casa',
  pedagogicalObjective: 'Reconhecer os móveis e objetos essenciais de casa em fotos inteiras sobre fundo branco.',
  icon: 'house',
  theory: [
    'No 3º passo da Rodada 1 aprendemos os móveis e objetos mais básicos de qualquer casa: Cama (Bed), Cadeira (Chair), Mesa (Table), Sofá (Sofa) e Travesseiro (Pillow).',
    'Cada objeto aparece inteiro e centralizado sobre fundo branco.',
    'Continue firme para chegar à Prática da Rodada 1!'
  ],
  items: [
    v('Bed', '🛏️', 'Cama', '/bed/', 'I sleep in a comfortable bed.', 'wooden bed with mattress and pillows furniture on white background'),
    v('Chair', '🪑', 'Cadeira', '/tʃer/', 'Please sit down on this wooden chair.', 'single wooden dining chair furniture on white background'),
    v('Table', '🪑', 'Mesa', '/ˈteɪ.bəl/', 'Dinner is served on the wooden table.', 'empty wooden dining table furniture on white background'),
    v('Sofa', '🛋️', 'Sofá', '/ˈsoʊ.fə/', 'The family sits together on the living room sofa.', 'modern fabric sofa couch furniture on white background'),
    v('Pillow', '⬜', 'Travesseiro', '/ˈpɪl.oʊ/', 'I rest my head on a soft white pillow.', 'single soft white bed pillow on white background'),
    v('Blanket', '🛌', 'Cobertor / Edredom', '/ˈblæŋ.kɪt/', 'A warm folded blanket for cold nights.', 'folded soft wool blanket on white background'),
    v('Door', '🚪', 'Porta', '/dɔːr/', 'Please close the wooden door.', 'single wooden front door on white background'),
    v('Window', '🪟', 'Janela', '/ˈwɪn.doʊ/', 'Open the house window to let fresh air in.', 'closed house glass window frame on white background'),
    v('Key', '🔑', 'Chave', '/kiː/', 'Keep your house key in your pocket.', 'single metal house key on white background'),
    v('Television', '📺', 'Televisão (TV)', '/ˈtel.ə.vɪʒ.ən/', 'We watch movies on the flat-screen television.', 'flat screen smart tv television on white background'),
    v('Lamp', '💡', 'Abajur / Luminária', '/læmp/', 'Turn on the bedside table lamp.', 'bedside table lamp with shade on white background'),
    v('Mirror', '🪞', 'Espelho', '/ˈmɪr.ər/', 'She looked in the framed mirror.', 'framed standing mirror on white background'),
    v('Clock', '⏰', 'Relógio / Despertador', '/klɑːk/', 'Look at the round wall clock to check the time.', 'round wall clock showing numbers on white background'),
    v('Wardrobe', '🚪', 'Guarda-roupa', '/ˈwɔːr.droʊb/', 'Hang your clothes inside the wooden wardrobe.', 'wooden bedroom wardrobe closet furniture on white background'),
    v('Rug', '🟥', 'Tapete', '/rʌɡ/', 'A soft woven rug on the floor.', 'decorative woven floor rug carpet on white background'),
    v('Curtain', '🪟', 'Cortina', '/ˈkɜːr.tən/', 'Close the window curtains at night.', 'fabric window curtains drapes on white background'),
    v('Bookshelf', '📚', 'Estante de livros', '/ˈbʊk.ʃelf/', 'The wooden bookshelf holds many books.', 'wooden bookcase bookshelf with books on white background'),
    v('Fan', '🌀', 'Ventilador', '/fæn/', 'Turn on the electric fan on hot days.', 'standing electric table fan on white background'),
    v('Air Conditioner', '❄️', 'Ar-condicionado', '/ˈer kənˌdɪʃ.ən.ər/', 'The wall air conditioner cools the bedroom.', 'white split wall air conditioner unit on white background'),
    v('Shower', '🚿', 'Chuveiro', '/ˈʃaʊ.ər/', 'Take a warm shower in the bathroom.', 'bathroom shower head fixture on white background'),
    v('Towel', '🧺', 'Toalha de banho', '/ˈtaʊ.əl/', 'Dry your hands with a clean cotton towel.', 'folded cotton bath towel stack on white background'),
    v('Soap', '🧼', 'Sabonete', '/soʊp/', 'Wash your hands with a bar of soap.', 'bar of bath soap on soap dish on white background'),
    v('Toothbrush', '🪥', 'Escova de dentes', '/ˈtuːθ.brʌʃ/', 'Brush your teeth with a toothbrush after meals.', 'single plastic toothbrush on white background'),
    v('Toothpaste', '🪥', 'Pasta de dente', '/ˈtuːθ.peɪst/', 'Put toothpaste on your toothbrush.', 'toothpaste tube with cap on white background'),
    v('Toilet', '🚽', 'Vaso sanitário', '/ˈtɔɪ.lət/', 'A clean white ceramic bathroom toilet.', 'white ceramic toilet bowl on white background'),
    v('Toilet Paper', '🧻', 'Papel higiênico', '/ˈtɔɪ.lət ˈpeɪ.pər/', 'A white roll of soft toilet paper.', 'single roll of white toilet paper on white background'),
    v('Trash Can', '🗑️', 'Lixeira', '/ˈtræʃ kæn/', 'Throw the wrapper into the trash can.', 'metal pedal trash can bin on white background'),
    v('Broom', '🧹', 'Vassoura', '/bruːm/', 'Sweep the floor with a broom.', 'household sweeping broom with handle on white background'),
    v('Bucket', '🪣', 'Balde', '/ˈbʌk.ɪt/', 'Fill the plastic bucket with water.', 'blue plastic water bucket with handle on white background'),
    v('Plant Pot', '🪴', 'Vaso de planta', '/ˈplænt pɑːt/', 'A green indoor plant in a ceramic pot.', 'green potted houseplant in clay pot on white background'),
  ]
};

const CITY_1 = {
  title: 'Rodada 1 • Cotidiano I: Roupas, Calçados & Acessórios',
  subtitle: 'Passo 4/5 da Rodada 1 • 30 peças de roupa e acessórios do dia a dia',
  pedagogicalObjective: 'Dominar o vocabulário de roupas, calçados e acessórios pessoais em fotos inteiras sem cortes.',
  icon: 'shirt',
  theory: [
    'No 4º passo da Rodada 1 aprendemos as roupas, calçados e acessórios que usamos todos os dias.',
    'Inclui Camiseta (Shirt), Calça (Pants), Calça Jeans (Jeans), Shorts, Vestido (Dress), Tênis (Sneakers), Chinelo (Sandals), Boné (Cap) e Óculos (Glasses).',
    'Logo após concluir este módulo, você fará o Exercício de Prática com Palavras da Rodada 1!'
  ],
  items: [
    v('Shirt', '👕', 'Camisa / Camiseta', '/ʃɜːrt/', 'He wears a clean cotton shirt.', 'blue cotton t-shirt shirt flat lay on white background'),
    v('Pants', '👖', 'Calça', '/pænts/', 'Comfortable pants for work or school.', 'beige chino trousers pants full length on white background'),
    v('Jeans', '👖', 'Calça jeans', '/dʒiːnz/', 'Blue denim jeans are worn everywhere.', 'blue denim jeans pants full length on white background'),
    v('Shorts', '🩳', 'Shorts / Bermuda', '/ʃɔːrts/', 'Wear light shorts on a hot Brazilian summer day.', 'casual summer shorts pants on white background'),
    v('Dress', '👗', 'Vestido', '/dres/', 'She wore a colorful summer dress.', 'red women summer dress full length on white background'),
    v('Skirt', '👗', 'Saia', '/skɜːrt/', 'A pleated fabric skirt.', 'pleated skirt garment on white background'),
    v('Jacket', '🧥', 'Jaqueta / Blusa de frio', '/ˈdʒæk.ɪt/', 'Put on a zipper jacket in the evening.', 'zipper jacket outerwear on white background'),
    v('Coat', '🧥', 'Casaco / Sobretudo', '/koʊt/', 'A warm winter coat for cold trips.', 'winter trench coat outerwear on white background'),
    v('Sweater', '🧶', 'Suéter / Moletom', '/ˈswet.ər/', 'A soft knitted sweater keeps you warm.', 'knitted wool pullover sweater on white background'),
    v('Pajamas', '🛌', 'Pijama', '/pəˈdʒæm.əz/', 'Put on comfortable pajamas before going to sleep.', 'two piece sleep pajamas set on white background'),
    v('Socks', '🧦', 'Meias', '/sɑːks/', 'Put on a pair of cotton socks.', 'pair of colorful cotton socks on white background'),
    v('Shoes', '👞', 'Sapatos', '/ʃuːz/', 'Clean leather dress shoes.', 'pair of brown leather dress shoes on white background'),
    v('Sneakers', '👟', 'Tênis', '/ˈsniː.kərz/', 'Wear comfortable running sneakers to walk.', 'pair of running sport sneakers shoes on white background'),
    v('Sandals', '🩴', 'Chinelo / Sandália', '/ˈsæn.dəlz/', 'Rubber flip-flop sandals are an everyday classic in Brazil.', 'pair of rubber flip flop sandals on white background'),
    v('Boots', '🥾', 'Botas', '/buːts/', 'Leather boots protect your feet in the rain.', 'pair of brown leather boots on white background'),
    v('High Heels', '👠', 'Sapato de salto alto', '/ˌhaɪ ˈhiːlz/', 'She wore red high heels to the party.', 'pair of red high heel shoes on white background'),
    v('Cap', '🧢', 'Boné', '/kæp/', 'Wear a baseball cap in the sun.', 'blue baseball cap hat on white background'),
    v('Hat', '👒', 'Chapéu', '/hæt/', 'A straw sun hat for the beach.', 'straw sun hat on white background'),
    v('Glasses', '👓', 'Óculos de grau', '/ˈɡlæs.ɪz/', 'He wears prescription glasses to read.', 'pair of prescription eyeglasses frames on white background'),
    v('Sunglasses', '🕶️', 'Óculos de sol', '/ˈsʌnˌɡlæs.ɪz/', 'Dark sunglasses protect your eyes on sunny days.', 'pair of dark aviator sunglasses on white background'),
    v('Watch', '⌚', 'Relógio de pulso', '/wɑːtʃ/', 'Check the time on your wristwatch.', 'classic wristwatch with leather strap on white background'),
    v('Umbrella', '☂️', 'Guarda-chuva', '/ʌmˈbrel.ə/', 'Open your umbrella when it starts to rain.', 'open colorful rain umbrella on white background'),
    v('Belt', 'ベルト', 'Cinto', '/belt/', 'Fasten the leather belt around your waist.', 'brown leather waist belt with buckle on white background'),
    v('Necktie', '👔', 'Gravata', '/ˈnek.taɪ/', 'He wore a silk necktie with his suit.', 'red silk necktie tie on white background'),
    v('Scarf', '🧣', 'Cachecol', '/skɑːrf/', 'Wrap a warm wool scarf around your neck.', 'knitted winter wool scarf on white background'),
    v('Gloves', '🧤', 'Luvas', '/ɡlʌvz/', 'Wear winter gloves to keep your hands warm.', 'pair of winter hand gloves on white background'),
    v('Handbag', '👜', 'Bolsa feminina', '/ˈhænd.bæɡ/', 'She carries her phone inside a leather handbag.', 'women leather handbag purse on white background'),
    v('Wallet', '👛', 'Carteira de bolso', '/ˈwɑː.lɪt/', 'Keep your money and cards inside a leather wallet.', 'brown leather bifold wallet on white background'),
    v('Ring', '💍', 'Anel / Aliança', '/rɪŋ/', 'A shiny gold ring on the finger.', 'gold ring with diamond on white background'),
    v('Necklace', '📿', 'Colar / Correntinha', '/ˈnek.lɪs/', 'A delicate gold necklace.', 'gold chain necklace with pendant on white background'),
  ]
};

const FOOD_2 = {
  title: 'Rodada 2 • Alimentos II: Legumes, Verduras & Feira',
  subtitle: 'Passo 1/5 da Rodada 2 • 30 vegetais inteiros da mesa brasileira',
  pedagogicalObjective: 'Identificar legumes, verduras e raízes inteiras da alimentação diária.',
  icon: 'apple',
  theory: [
    'Iniciamos a Rodada 2! Voltamos aos Alimentos, agora com os 30 legumes e verduras mais conhecidos da feira brasileira.',
    'Todos os itens aparecem inteiros e com seu formato característico (Tomate, Batata, Cenoura, Cebola, Alho, Alface, Milho, Pepino, Brócolis, Mandioca, Quiabo e Chuchu).',
    'Ouça a pronúncia em inglês americano e toque no vegetal correto!'
  ],
  items: [
    v('Tomato', '🍅', 'Tomate', '/təˈmeɪ.toʊ/', 'Fresh red tomatoes go in the salad.', 'single whole red tomato with green stem on white background'),
    v('Potato', '🥔', 'Batata', '/pəˈteɪ.toʊ/', 'Potatoes are used in many recipes.', 'whole washed yellow potato vegetable on white background'),
    v('Carrot', '🥕', 'Cenoura', '/ˈkær.ət/', 'Rabbits love crunchy orange carrots.', 'single whole orange carrot with green leaves on white background'),
    v('Onion', '🧅', 'Cebola', '/ˈʌn.jən/', 'Chopped onion adds flavor to the meal.', 'single whole yellow onion bulb on white background'),
    v('Garlic', '🧄', 'Alho', '/ˈɡɑːr.lɪk/', 'Garlic smells great when cooked.', 'whole white garlic head bulb on white background'),
    v('Lettuce', '🥬', 'Alface', '/ˈlet.ɪs/', 'Wash the green lettuce leaves well.', 'whole fresh green lettuce head on white background'),
    v('Corn', '🌽', 'Milho', '/kɔːrn/', 'Sweet yellow corn on the cob.', 'whole yellow sweet corn cob with green husk leaves on white background'),
    v('Cucumber', '🥒', 'Pepino', '/ˈkjuː.kʌm.bər/', 'Cucumber slices are cool and crisp.', 'single whole green cucumber vegetable on white background'),
    v('Broccoli', '🥦', 'Brócolis', '/ˈbrɑː.kəl.i/', 'Steamed broccoli is very nutritious.', 'single whole green broccoli head on white background'),
    v('Cabbage', '🥬', 'Repolho', '/ˈkæb.ɪdʒ/', 'Green cabbage is crunchy in salads.', 'single whole green cabbage head on white background'),
    v('Cauliflower', '⚪', 'Couve-flor', '/ˈkɑː.lɪˌflaʊ.ər/', 'Cauliflower looks like a white flower.', 'single whole white cauliflower head with green leaves on white background'),
    v('Pumpkin', '🎃', 'Abóbora', '/ˈpʌmp.kɪn/', 'Orange pumpkin soup is warm and creamy.', 'single whole orange pumpkin squash on white background'),
    v('Sweet Potato', '🍠', 'Batata-doce', '/ˌswiːt pəˈteɪ.toʊ/', 'Roasted sweet potato is healthy.', 'whole purple red sweet potato tuber on white background'),
    v('Beetroot', '🟣', 'Beterraba', '/ˈbiːt.ruːt/', 'Beetroot has a deep purple color.', 'whole purple red beetroot bulb with leaves on white background'),
    v('Zucchini', '🥒', 'Abobrinha', '/zuːˈkiː.ni/', 'Sliced zucchini cooks very quickly.', 'single whole green zucchini squash on white background'),
    v('Eggplant', '🍆', 'Berinjela', '/ˈeɡ.plænt/', 'Purple eggplant is delicious when baked.', 'single whole glossy purple eggplant on white background'),
    v('Bell Pepper', '🫑', 'Pimentão', '/ˈbel ˌpep.ər/', 'Bell peppers can be green, red or yellow.', 'single whole red bell pepper vegetable on white background'),
    v('Chili Pepper', '🌶️', 'Pimenta vermelha', '/ˈtʃɪl.i ˌpep.ər/', 'That red chili pepper is very spicy.', 'single whole red hot chili pepper on white background'),
    v('Peas', '🫛', 'Ervilha', '/piːz/', 'Green peas are small and round.', 'green pea pod open showing round peas on white background'),
    v('Spinach', '🌿', 'Espinafre', '/ˈspɪn.ɪtʃ/', 'Fresh spinach leaves are rich in iron.', 'bunch of fresh green spinach leaves on white background'),
    v('Mushroom', '🍄', 'Cogumelo / Champignon', '/ˈmʌʃ.ruːm/', 'White mushrooms are great in pasta.', 'whole white button champignon mushroom on white background'),
    v('Cassava', '🥔', 'Mandioca / Aipim', '/kəˈsɑː.və/', 'Fried cassava is very popular in Brazil.', 'whole brown cassava yuca manioc root on white background'),
    v('Okra', '🟢', 'Quiabo', '/ˈoʊ.krə/', 'Okra is a traditional vegetable in Brazilian cooking.', 'whole green okra pods vegetable on white background'),
    v('Chayote', '🍐', 'Chuchu', '/tʃaɪˈoʊ.ti/', 'Light green chayote is mild and healthy.', 'single whole light green chayote squash on white background'),
    v('Heart of Palm', '⚪', 'Palmito', '/ˌhɑːrt əv ˈpɑːm/', 'Heart of palm is great in salads and pies.', 'whole white heart of palm cylinders palmito on white background'),
    v('Peanut', '🥜', 'Amendoim', '/ˈpiː.nʌt/', 'Roasted peanuts are a crunchy snack.', 'whole peanuts in shell on white background'),
    v('Olive', '🫒', 'Azeitona', '/ˈɑː.lɪv/', 'Green olives are common on pizzas.', 'whole green olives with leaf on white background'),
    v('Ginger', '🫚', 'Gengibre', '/ˈdʒɪn.dʒər/', 'Fresh ginger root is aromatic.', 'whole fresh ginger root rhizome on white background'),
    v('Radish', '🔴', 'Rabanete', '/ˈræd.ɪʃ/', 'Red radishes are crunchy in salads.', 'whole red radish bulb with green leaves on white background'),
    v('Spring Onion', '🌱', 'Cebolinha verde', '/ˌsprɪŋ ˈʌn.jən/', 'Chopped spring onion finishes the dish.', 'whole bunch of green spring onions scallions on white background'),
  ]
};

const ANIMALS_2 = {
  title: 'Rodada 2 • Animais II: Zoológico & Safári',
  subtitle: 'Passo 2/5 da Rodada 2 • 30 animais famosos dos zoológicos',
  pedagogicalObjective: 'Identificar os grandes animais facilmente encontrados em zoológicos, livros e filmes.',
  icon: 'dog',
  theory: [
    'No 2º passo da Rodada 2 visitamos os 30 animais mais famosos do Zoológico!',
    'Inclui Leão (Lion), Tigre (Tiger), Elefante (Elephant), Girafa (Giraffe), Macaco (Monkey), Zebra, Urso (Bear), Panda, Jacaré (Alligator), Onça-pintada (Jaguar), Tucano (Toucan) e Arara (Macaw).',
    'Todos em fotos inteiras sem cortes.'
  ],
  items: [
    v('Lion', '🦁', 'Leão', '/ˈlaɪ.ən/', 'The lion has a large golden mane.', 'adult male lion full body standing on white background'),
    v('Tiger', '🐅', 'Tigre', '/ˈtaɪ.ɡər/', 'The orange tiger has black stripes.', 'bengal tiger full body standing on white background'),
    v('Elephant', '🐘', 'Elefante', '/ˈel.ɪ.fənt/', 'The elephant has a long trunk and big ears.', 'african elephant full body standing on white background'),
    v('Giraffe', '🦒', 'Girafa', '/dʒɪˈræf/', 'The tall giraffe eats leaves from high trees.', 'tall giraffe full body standing on white background'),
    v('Monkey', '🐒', 'Macaco', '/ˈmʌŋ.ki/', 'The playful monkey loves bananas.', 'capuchin monkey full body sitting on white background'),
    v('Zebra', '🦓', 'Zebra', '/ˈziː.brə/', 'The zebra has black and white stripes.', 'zebra full body standing side view on white background'),
    v('Bear', '🐻', 'Urso', '/ber/', 'The big brown bear walks in the forest.', 'brown grizzly bear full body standing on white background'),
    v('Panda', '🐼', 'Urso Panda', '/ˈpæn.də/', 'The giant panda eats green bamboo.', 'giant panda bear full body sitting on white background'),
    v('Polar Bear', '🐻‍❄️', 'Urso Polar', '/ˈpoʊ.lər ber/', 'The white polar bear lives on the ice.', 'white polar bear full body standing on white background'),
    v('Hippopotamus', '🦛', 'Hipopótamo', '/ˌhɪp.əˈpɑː.tə.məs/', 'The heavy hippopotamus loves the water.', 'hippopotamus full body standing on white background'),
    v('Rhinoceros', '🦏', 'Rinoceronte', '/raɪˈnɑː.sər.əs/', 'The rhinoceros has a horn on its nose.', 'rhinoceros full body standing side view on white background'),
    v('Alligator', '🐊', 'Jacaré', '/ˈæl.ɪ.ɡeɪ.tər/', 'The alligator lives in Brazilian rivers and pantanal.', 'alligator caiman reptile full body on white background'),
    v('Crocodile', '🐊', 'Crocodilo', '/ˈkrɑː.kə.daɪl/', 'The large crocodile has sharp teeth.', 'nile crocodile reptile full body on white background'),
    v('Snake', '🐍', 'Cobra / Serpente', '/sneɪk/', 'The snake slithers across the ground.', 'green snake reptile coiled full body on white background'),
    v('Gorilla', '🦍', 'Gorila', '/ɡəˈrɪl.ə/', 'The strong gorilla beats its chest.', 'silverback gorilla ape full body on white background'),
    v('Chimpanzee', '🐒', 'Chimpanzé', '/ˌtʃɪm.pænˈziː/', 'Chimpanzees are very intelligent primates.', 'chimpanzee primate full body sitting on white background'),
    v('Kangaroo', '🦘', 'Canguru', '/ˌkæŋ.ɡəˈruː/', 'The kangaroo jumps on its strong back legs.', 'australian kangaroo full body standing on white background'),
    v('Koala', '🐨', 'Coala', '/koʊˈɑː.lə/', 'The gray koala holds onto a branch.', 'koala bear full body sitting on white background'),
    v('Camel', '🐪', 'Camelo', '/ˈkæm.əl/', 'The desert camel has a hump on its back.', 'desert camel full body standing side view on white background'),
    v('Wolf', '🐺', 'Lobo', '/wʊlf/', 'The gray wolf howls at night.', 'gray wolf full body standing on white background'),
    v('Fox', '🦊', 'Raposa', '/fɑːks/', 'The red fox has a fluffy tail.', 'orange red fox full body standing on white background'),
    v('Deer', '🦌', 'Cervo / Veado', '/dɪr/', 'The forest deer has branching antlers.', 'deer stag with antlers full body standing on white background'),
    v('Jaguar', '🐆', 'Onça-pintada', '/ˈdʒæɡ.wɑːr/', 'The jaguar is the largest cat in Brazil.', 'brazilian spotted jaguar cat full body standing on white background'),
    v('Leopard', '🐆', 'Leopardo', '/ˈlep.ərd/', 'The leopard climbs trees with ease.', 'spotted leopard full body standing on white background'),
    v('Cheetah', '🐆', 'Guepardo', '/ˈtʃiː.tə/', 'The cheetah is the fastest land animal.', 'cheetah wild cat full body standing on white background'),
    v('Penguin', '🐧', 'Pinguim', '/ˈpeŋ.ɡwɪn/', 'Penguins walk on the snow and swim well.', 'penguin bird full body standing on white background'),
    v('Flamingo', '🦩', 'Flamingo', '/fləˈmɪŋ.ɡoʊ/', 'The pink flamingo has long thin legs.', 'pink flamingo bird full body standing on white background'),
    v('Peacock', '🦚', 'Pavão', '/ˈpiː.kɑːk/', 'The peacock has colorful tail feathers.', 'male peacock bird with colorful tail on white background'),
    v('Toucan', '🦜', 'Tucano', '/ˈtuː.kæn/', 'The Brazilian toucan has a big orange beak.', 'toco toucan bird with orange beak full body on white background'),
    v('Macaw', '🦜', 'Arara', '/məˈkɔː/', 'Blue and red macaws fly across the Brazilian sky.', 'red and blue macaw arara parrot full body on white background'),
  ]
};

const HOME_2 = {
  title: 'Rodada 2 • Casa & Objetos II: Cozinha & Eletros',
  subtitle: 'Passo 3/5 da Rodada 2 • 30 utensílios e eletrodomésticos de cozinha',
  pedagogicalObjective: 'Dominar o vocabulário de louças, talheres, panelas e eletrodomésticos.',
  icon: 'house',
  theory: [
    'No 3º passo da Rodada 2 aprendemos os objetos da cozinha: Prato (Plate), Copo (Glass), Xícara (Cup), Garfo (Fork), Faca (Knife), Colher (Spoon), Geladeira (Fridge), Fogão (Stove), Liquidificador (Blender) e Panela de Pressão (Pressure Cooker).',
    'Repare que em Knife (/naɪf/) a letra K inicial é muda!'
  ],
  items: [
    v('Plate', '🍽️', 'Prato', '/pleɪt/', 'Put the food on a clean white plate.', 'single empty round ceramic dinner plate on white background'),
    v('Cup', '☕', 'Xícara', '/kʌp/', 'A porcelain cup with a handle.', 'empty porcelain coffee cup with handle on white background'),
    v('Glass', '🥛', 'Copo de vidro', '/ɡlæs/', 'Pour cold water into the drinking glass.', 'empty clear glass water tumbler on white background'),
    v('Fork', '🍴', 'Garfo', '/fɔːrk/', 'Use a metal fork to eat your meal.', 'single metal dinner fork cutlery on white background'),
    v('Knife', '🔪', 'Faca', '/naɪf/', 'The chef uses a sharp kitchen knife.', 'single stainless steel kitchen chef knife on white background'),
    v('Spoon', '🥄', 'Colher', '/spuːn/', 'Stir the soup with a metal spoon.', 'single metal soup spoon cutlery on white background'),
    v('Bowl', '🥣', 'Tigela / Cumbuca', '/boʊl/', 'A round ceramic bowl for cereal or soup.', 'single empty ceramic soup bowl on white background'),
    v('Bottle', '🍾', 'Garrafa', '/ˈbɑː.təl/', 'Fill the reusable water bottle.', 'single reusable water bottle on white background'),
    v('Napkin', '🧻', 'Guardanapo', '/ˈnæp.kɪn/', 'Wipe your mouth with a paper napkin.', 'folded table napkin on white background'),
    v('Fridge', '🧊', 'Geladeira', '/frɪdʒ/', 'Keep milk and fruit cold inside the fridge.', 'modern stainless steel refrigerator fridge appliance on white background'),
    v('Stove', '🔥', 'Fogão', '/stoʊv/', 'Cook dinner on the gas kitchen stove.', 'kitchen gas stove oven appliance on white background'),
    v('Microwave', '⏲️', 'Micro-ondas', '/ˈmaɪ.krə.weɪv/', 'Heat the food in the microwave oven.', 'countertop microwave oven appliance on white background'),
    v('Blender', '🌪️', 'Liquidificador', '/ˈblen.dər/', 'Make fresh fruit juice in the electric blender.', 'electric kitchen blender with jar on white background'),
    v('Toaster', '🍞', 'Torradeira', '/ˈtoʊ.stər/', 'Make warm crispy toast in the toaster.', 'electric bread toaster appliance on white background'),
    v('Coffee Maker', '☕', 'Cafeteira', '/ˈkɔː.fi ˌmeɪ.kər/', 'Brew morning coffee in the coffee maker.', 'electric drip coffee maker machine on white background'),
    v('Frying Pan', '🍳', 'Frigideira', '/ˈfraɪ.ɪŋ pæn/', 'Fry the egg in a non-stick frying pan.', 'black nonstick frying pan skillet on white background'),
    v('Cooking Pot', '🍲', 'Panela', '/ˈkʊk.ɪŋ pɑːt/', 'Boil water for pasta in a cooking pot.', 'stainless steel cooking pot with lid on white background'),
    v('Pressure Cooker', '🍲', 'Panela de pressão', '/ˈpreʃ.ər ˌkʊk.ər/', 'Cook beans quickly in the pressure cooker.', 'aluminum kitchen pressure cooker pot on white background'),
    v('Cutting Board', '🪵', 'Tábua de corte', '/ˈkʌt.ɪŋ bɔːrd/', 'Chop vegetables on a wooden cutting board.', 'wooden kitchen cutting chopping board on white background'),
    v('Sponge', '🧽', 'Esponja de lavar louça', '/spʌndʒ/', 'Wash the plates with a yellow and green sponge.', 'yellow and green dishwashing kitchen sponge on white background'),
    v('Washing Machine', '🫧', 'Máquina de lavar roupa', '/ˈwɑː.ʃɪŋ məˌʃiːn/', 'Wash your clothes in the washing machine.', 'front load clothes washing machine appliance on white background'),
    v('Clothes Iron', '💨', 'Ferro de passar roupa', '/ˈkloʊðz ˌaɪ.ərn/', 'Press the shirt with a warm clothes iron.', 'electric steam clothes iron appliance on white background'),
    v('Kettle', '🫖', 'Chaleira', '/ˈket.əl/', 'Heat water for tea in the kettle.', 'stainless steel tea kettle with spout on white background'),
    v('Jar', '🫙', 'Pote de vidro', '/dʒɑːr/', 'Keep cookies or jam inside a glass jar.', 'empty clear glass jar with lid on white background'),
    v('Salt Shaker', '🧂', 'Saleiro', '/ˈsɔːlt ˌʃeɪ.kər/', 'Add a pinch of salt from the salt shaker.', 'glass salt shaker with metal cap on white background'),
    v('Tin Can', '🥫', 'Lata de conserva', '/ˈtɪn kæn/', 'Open a metal tin can of corn.', 'sealed metal food tin can on white background'),
    v('Drinking Straw', '🥤', 'Canudo', '/ˈdrɪŋ.kɪŋ strɔː/', 'Drink the cold juice with a drinking straw.', 'colorful bendy drinking straws on white background'),
    v('Tray', '🍽️', 'Bandeja', '/treɪ/', 'Carry the cups on a serving tray.', 'rectangular wooden serving tray on white background'),
    v('Apron', '🎽', 'Avental de cozinha', '/ˈeɪ.prən/', 'Wear a kitchen apron while cooking.', 'fabric kitchen cooking apron on white background'),
    v('Kitchen Scale', '⚖️', 'Balança de cozinha', '/ˈkɪtʃ.ən skeɪl/', 'Weigh the ingredients on the digital kitchen scale.', 'digital kitchen food scale on white background'),
  ]
};

const CITY_2 = {
  title: 'Rodada 2 • Cotidiano II: Transportes & Trânsito',
  subtitle: 'Passo 4/5 da Rodada 2 • 30 veículos e meios de transporte',
  pedagogicalObjective: 'Reconhecer todos os meios de transporte terrestres, aéreos e marítimos.',
  icon: 'car',
  theory: [
    'No 4º passo da Rodada 2 aprendemos os meios de transporte: Carro (Car), Ônibus (Bus), Moto (Motorcycle), Bicicleta (Bicycle), Caminhão (Truck), Avião (Airplane), Helicóptero (Helicopter), Trem (Train) e Metrô (Subway).',
    'Ao concluir este módulo, você fará a Prática com Palavras da Rodada 2!'
  ],
  items: [
    v('Car', '🚗', 'Carro', '/kɑːr/', 'Drive the red car carefully on the street.', 'red sedan passenger car full vehicle on white background'),
    v('Bus', '🚌', 'Ônibus', '/bʌs/', 'Take the passenger bus to work.', 'passenger city bus full vehicle on white background'),
    v('Motorcycle', '🏍️', 'Moto / Motocicleta', '/ˈmoʊ.tərˌsaɪ.kəl/', 'Always wear a helmet when riding a motorcycle.', 'sport motorcycle motorbike full vehicle on white background'),
    v('Bicycle', '🚲', 'Bicicleta', '/ˈbaɪ.sɪ.kəl/', 'Riding a bicycle in the park is great exercise.', 'complete bicycle bike side view on white background'),
    v('Truck', '🚚', 'Caminhão', '/trʌk/', 'The cargo truck transports food across Brazil.', 'delivery box cargo truck full vehicle on white background'),
    v('Taxi', '🚕', 'Táxi', '/ˈtæk.si/', 'Take a taxi to the airport.', 'yellow taxi cab car full vehicle on white background'),
    v('Airplane', '✈️', 'Avião', '/ˈer.pleɪn/', 'The passenger airplane flies above the clouds.', 'commercial passenger airplane full aircraft on white background'),
    v('Helicopter', '🚁', 'Helicóptero', '/ˈhel.ɪˌkɑːp.tər/', 'The helicopter flies over the city.', 'helicopter full aircraft on white background'),
    v('Train', '🚆', 'Trem', '/treɪn/', 'The passenger train travels on steel rails.', 'modern passenger train locomotive on white background'),
    v('Subway', '🚇', 'Metrô', '/ˈsʌb.weɪ/', 'The underground subway train is fast.', 'subway metro train car on white background'),
    v('Boat', '⛵', 'Barco / Veleiro', '/boʊt/', 'A small boat floats on the water.', 'sailboat boat vessel on white background'),
    v('Ship', '🚢', 'Navio', '/ʃɪp/', 'The large cruise ship crosses the ocean.', 'large passenger cruise ship vessel on white background'),
    v('Ambulance', '🚑', 'Ambulância', '/ˈæm.bjə.ləns/', 'Make way for the emergency hospital ambulance.', 'emergency medical ambulance van full vehicle on white background'),
    v('Police Car', '🚓', 'Viatura de polícia', '/pəˈliːs kɑːr/', 'The police car has flashing lights on top.', 'police patrol car with lightbar full vehicle on white background'),
    v('Fire Truck', '🚒', 'Caminhão de bombeiros', '/ˈfaɪ.ər trʌk/', 'The red fire truck carries a tall ladder.', 'red fire engine truck with ladder full vehicle on white background'),
    v('Tractor', '🚜', 'Trator', '/ˈtræk.tər/', 'The farm tractor pulls heavy equipment.', 'green farm tractor full vehicle on white background'),
    v('Van', '🚐', 'Van / Perua', '/væn/', 'The passenger van carries the group to school.', 'white passenger van minivan full vehicle on white background'),
    v('Scooter', '🛴', 'Patinete', '/ˈskuː.tər/', 'Kids love riding kick scooters.', 'two wheel kick scooter on white background'),
    v('Skateboard', '🛹', 'Skate', '/ˈskeɪt.bɔːrd/', 'He practices tricks on his four-wheel skateboard.', 'complete wooden skateboard with wheels on white background'),
    v('Roller Skate', '🛼', 'Patins', '/ˈroʊ.lər skeɪt/', 'She glides smoothly on roller skates.', 'quad roller skate boot with wheels on white background'),
    v('Helmet', '⛑️', 'Capacete', '/ˈhel.mət/', 'Protect your head with a safety helmet.', 'motorcycle protective helmet on white background'),
    v('Traffic Light', '🚦', 'Semáforo / Sinal de trânsito', '/ˈtræf.ɪk laɪt/', 'Stop the car when the traffic light is red.', 'red yellow green traffic light signal on white background'),
    v('Tire', '🛞', 'Pneu / Roda', '/ˈtaɪ.ər/', 'Check the air pressure in the car tire.', 'black rubber car tire with wheel rim on white background'),
    v('Steering Wheel', '🛞', 'Volante de carro', '/ˈstɪr.ɪŋ wiːl/', 'Keep both hands on the car steering wheel.', 'car steering wheel on white background'),
    v('Fuel Pump', '⛽', 'Bomba de combustível', '/ˈfjuː.əl pʌmp/', 'Fill the car tank at the gas station fuel pump.', 'gasoline fuel pump dispenser on white background'),
    v('Suitcase', '🧳', 'Mala de viagem', '/ˈsuːt.keɪs/', 'Pack your clothes in a rolling travel suitcase.', 'rolling travel suitcase luggage with wheels on white background'),
    v('Rocket', '🚀', 'Foguete espacial', '/ˈrɑː.kɪt/', 'The space rocket blasts into orbit.', 'space rocket ship on white background'),
    v('Parachute', '🪂', 'Paraquedas', '/ˈpær.ə.ʃuːt/', 'The colorful parachute opens in the sky.', 'open colorful parachute canopy on white background'),
    v('Anchor', '⚓', 'Âncora de navio', '/ˈæŋ.kər/', 'The ship drops its heavy metal anchor.', 'metal marine ship anchor on white background'),
    v('Compass', '🧭', 'Bússola', '/ˈkʌm.pəs/', 'The compass needle always points north.', 'magnetic navigation pocket compass on white background'),
  ]
};

const FOOD_3 = {
  title: 'Rodada 3 • Alimentos III: Refeições & Pratos',
  subtitle: 'Passo 1/5 da Rodada 3 • 30 comidas e pratos presentes no dia a dia',
  pedagogicalObjective: 'Reconhecer pães, carnes, laticínios e refeições completas em inglês.',
  icon: 'apple',
  theory: [
    'Começamos a Rodada 3 com as 30 refeições e comidas prontas mais conhecidas no Brasil!',
    'Inclui Pão (Bread), Arroz (Rice), Feijão (Beans), Ovo (Egg), Queijo (Cheese), Frango Assado (Roast Chicken), Bife (Steak), Macarrão (Pasta), Pizza, Hambúrguer e Pão de Queijo (Cheese Bread).',
    'Todas as imagens mostram o prato inteiro e bem visível.'
  ],
  items: [
    v('Bread', '🍞', 'Pão', '/bred/', 'Warm fresh bread smells amazing.', 'whole golden loaf of bread on white background'),
    v('Rice', '🍚', 'Arroz branco', '/raɪs/', 'White rice is served every day in Brazil.', 'bowl of cooked white rice on white background'),
    v('Beans', '🫘', 'Feijão', '/biːnz/', 'Rice and beans are the classic Brazilian meal.', 'bowl of cooked brown beans feijao on white background'),
    v('Egg', '🥚', 'Ovo', '/eɡ/', 'I eat a fried egg for breakfast.', 'whole egg and sunny side up fried egg on white background'),
    v('Cheese', '🧀', 'Queijo', '/tʃiːz/', 'Yellow cheese tastes great on bread.', 'wedge of yellow swiss cheese with holes on white background'),
    v('Butter', '🧈', 'Manteiga', '/ˈbʌt.ər/', 'Spread butter on the warm toast.', 'yellow butter block on dish on white background'),
    v('Ham', '🥩', 'Presunto', '/hæm/', 'A sandwich with cheese and ham.', 'sliced cooked pink ham meat on white background'),
    v('Roast Chicken', '🍗', 'Frango assado', '/ˈroʊst ˈtʃɪk.ɪn/', 'Roast chicken is a Sunday lunch classic.', 'whole golden roast chicken on plate on white background'),
    v('Steak', '🥩', 'Bife / Carne grelhada', '/steɪk/', 'He cooked a juicy beef steak on the grill.', 'grilled beef steak on plate on white background'),
    v('Fish Fillet', '🐟', 'Filé de peixe', '/ˈfɪʃ fɪˈleɪ/', 'Grilled fish fillet with lemon.', 'cooked grilled fish fillet on plate on white background'),
    v('Pasta', '🍝', 'Macarrão / Espaguete', '/ˈpɑː.stə/', 'Italian spaghetti pasta with tomato sauce.', 'plate of spaghetti pasta with red tomato sauce on white background'),
    v('Pizza', '🍕', 'Pizza', '/ˈpiːt.sə/', 'We shared a delicious cheese pizza.', 'whole round cheese pepperoni pizza on white background'),
    v('Hamburger', '🍔', 'Hambúrguer', '/ˈhæmˌbɜːr.ɡər/', 'A juicy hamburger with cheese and lettuce.', 'single classic cheeseburger hamburger on white background'),
    v('French Fries', '🍟', 'Batata frita', '/ˈfrentʃ fraɪz/', 'Crispy golden French fries.', 'portion of crispy golden french fries on white background'),
    v('Hot Dog', '🌭', 'Cachorro-quente', '/ˈhɑːt dɔːɡ/', 'A warm hot dog in a soft bun.', 'single hot dog sausage in bun with mustard on white background'),
    v('Sandwich', '🥪', 'Sanduíche natural', '/ˈsæn.wɪtʃ/', 'She packed a sandwich for lunch.', 'fresh sandwich with cheese lettuce tomato on white background'),
    v('Cheese Bread', '🧀', 'Pão de queijo', '/ˈtʃiːz bred/', 'Warm Brazilian cheese bread is delicious.', 'golden brazilian pao de queijo cheese bread buns on white background'),
    v('Soup', '🍲', 'Sopa', '/suːp/', 'Hot vegetable soup in a bowl.', 'bowl of warm vegetable soup with spoon on white background'),
    v('Salad', '🥗', 'Salada', '/ˈsæl.əd/', 'A fresh green salad with tomatoes.', 'bowl of fresh green lettuce tomato salad on white background'),
    v('Sausage', '🌭', 'Linguiça / Salsicha', '/ˈsɔː.sɪdʒ/', 'Grilled sausage for the barbecue.', 'grilled sausages links on white background'),
    v('Bacon', '🥓', 'Bacon', '/ˈbeɪ.kən/', 'Crispy strips of fried bacon.', 'crispy cooked bacon strips on white background'),
    v('Omelet', '🍳', 'Omelete', '/ˈɑːm.lət/', 'A fluffy yellow egg omelet.', 'folded yellow egg omelet on white plate on white background'),
    v('Pancake', '🥞', 'Panqueca', '/ˈpæn.keɪk/', 'Stack of pancakes with syrup.', 'stack of golden pancakes with syrup on white background'),
    v('Lasagna', '🍝', 'Lasanha', '/ləˈzɑːn.jə/', 'Baked cheese lasagna is a family favorite.', 'portion of baked cheese lasagna on plate on white background'),
    v('Barbecue', '🍖', 'Churrasco / Espetinho', '/ˈbɑːr.bɪ.kjuː/', 'Brazilian barbecue meat on skewers.', 'grilled barbecue meat skewers churrasco on white background'),
    v('Shrimp', '🍤', 'Camarão', '/ʃrɪmp/', 'Cooked pink shrimp with lemon.', 'cooked pink shrimp prawns on white background'),
    v('Sushi', '🍣', 'Sushi', '/ˈsuː.ʃi/', 'Fresh salmon sushi rolls.', 'salmon sushi rolls and nigiri on white background'),
    v('Croissant', '🥐', 'Croissant', '/krwɑːˈsɑːnt/', 'A golden butter croissant from the bakery.', 'single golden flaky croissant pastry on white background'),
    v('Toast', '🍞', 'Torrada', '/toʊst/', 'Crispy toasted bread for breakfast.', 'slices of golden toasted bread on white background'),
    v('Mashed Potatoes', '🥔', 'Purê de batata', '/ˌmæʃt pəˈteɪ.toʊz/', 'Creamy mashed potatoes in a bowl.', 'bowl of creamy mashed potatoes on white background'),
  ]
};

const ANIMALS_3 = {
  title: 'Rodada 3 • Animais III: Marinhos, Aves & Fauna',
  subtitle: 'Passo 2/5 da Rodada 3 • 30 animais do mar e da natureza conhecidos pelo público',
  pedagogicalObjective: 'Reconhecer animais marinhos famosos, aves conhecidas e animais típicos da fauna brasileira.',
  icon: 'dog',
  theory: [
    'No 2º passo da Rodada 3 estudamos os animais do mar e da fauna brasileira que todo mundo conhece.',
    'Inclui Tubarão (Shark), Baleia (Whale), Golfinho (Dolphin), Polvo (Octopus), Águia (Eagle), Coruja (Owl), Beija-flor (Hummingbird), Capivara (Capybara), Bicho-preguiça (Sloth), Tamanduá (Anteater) e Tatu (Armadillo).'
  ],
  items: [
    v('Shark', '🦈', 'Tubarão', '/ʃɑːrk/', 'The great shark swims in the ocean.', 'great white shark full body side view on white background'),
    v('Whale', '🐋', 'Baleia', '/weɪl/', 'The whale is the biggest animal in the sea.', 'humpback blue whale full body side view on white background'),
    v('Dolphin', '🐬', 'Golfinho', '/ˈdɑːl.fɪn/', 'Friendly dolphins jump out of the water.', 'bottlenose dolphin full body jumping on white background'),
    v('Octopus', '🐙', 'Polvo', '/ˈɑːk.tə.pəs/', 'An octopus has eight tentacles.', 'octopus sea animal full tentacles on white background'),
    v('Crab', '🦀', 'Caranguejo / Siri', '/kræb/', 'The red crab walks on the beach sand.', 'red crab with claws full body on white background'),
    v('Starfish', '⭐', 'Estrela-do-mar', '/ˈstɑːr.fɪʃ/', 'A five-pointed starfish on the ocean floor.', 'five point orange starfish sea star on white background'),
    v('Seahorse', '🐠', 'Cavalo-marinho', '/ˈsiː.hɔːrs/', 'The tiny seahorse curls its tail.', 'seahorse marine animal full body on white background'),
    v('Jellyfish', '🪼', 'Água-viva', '/ˈdʒel.i.fɪʃ/', 'Jellyfish float gracefully in the sea.', 'jellyfish marine animal on white background'),
    v('Seal', '🦭', 'Foca', '/siːl/', 'The cute seal swims in cold water.', 'harbor seal animal full body on white background'),
    v('Sea Turtle', '🐢', 'Tartaruga-marinha', '/ˈsiː ˌtɜːr.təl/', 'The sea turtle swims across the ocean.', 'sea turtle with flippers full body on white background'),
    v('Clownfish', '🐠', 'Peixe-palhaço', '/ˈklaʊn.fɪʃ/', 'The orange and white clownfish lives in coral reefs.', 'orange and white clownfish fish full body on white background'),
    v('Eagle', '🦅', 'Águia', '/ˈiː.ɡəl/', 'The eagle flies high in the sky.', 'bald eagle bird full body on white background'),
    v('Owl', '🦉', 'Coruja', '/aʊl/', 'The owl has big round eyes and stays awake at night.', 'barn owl bird full body standing on white background'),
    v('Hawk', '🦅', 'Gavião / Falcão', '/hɔːk/', 'The hawk has sharp eyesight.', 'hawk falcon bird of prey full body on white background'),
    v('Swan', '🦢', 'Cisne', '/swɑːn/', 'The white swan glides on the lake.', 'white swan bird full body on white background'),
    v('Hummingbird', '🐦', 'Beija-flor', '/ˈhʌm.ɪŋ.bɜːrd/', 'The tiny hummingbird hovers near flowers.', 'colorful hummingbird flying full body on white background'),
    v('Woodpecker', '🐦', 'Pica-pau', '/ˈwʊdˌpek.ər/', 'The woodpecker taps on tree trunks.', 'red headed woodpecker bird full body on white background'),
    v('Ostrich', '🐦', 'Avestruz / Ema', '/ˈɔː.strɪtʃ/', 'The tall ostrich runs very fast.', 'ostrich bird full body standing on white background'),
    v('Capybara', '🐹', 'Capivara', '/ˌkæp.ɪˈbɑː.rə/', 'The capybara is a very famous Brazilian animal.', 'capybara rodent full body standing on white background'),
    v('Sloth', '🦥', 'Bicho-preguiça', '/slɔːθ/', 'The sloth moves very slowly in the trees.', 'three toed sloth hanging on branch on white background'),
    v('Anteater', '🐜', 'Tamanduá', '/ˈæntˌiː.tər/', 'The giant anteater has a long snout.', 'giant anteater tamandua full body standing on white background'),
    v('Armadillo', '🦔', 'Tatu', '/ˌɑːr.məˈdɪl.oʊ/', 'The armadillo has a protective armor shell.', 'armadillo tatu animal full body standing on white background'),
    v('Bat', '🦇', 'Morcego', '/bæt/', 'Bats fly at night and eat fruits or insects.', 'bat with open wings full body on white background'),
    v('Squirrel', '🐿️', 'Esquilo', '/ˈskwɜːr.əl/', 'The squirrel holds a nut in its paws.', 'squirrel holding acorn nut full body on white background'),
    v('Lizard', '🦎', 'Lagarto / Lagartixa', '/ˈlɪz.ərd/', 'A green lizard rests on the warm stone.', 'green lizard reptile full body on white background'),
    v('Iguana', '🦎', 'Iguana', '/ɪˈɡwɑː.nə/', 'Green iguanas love sunny trees.', 'green iguana reptile full body on white background'),
    v('Chameleon', '🦎', 'Camaleão', '/kəˈmiː.li.ən/', 'The chameleon can change its skin color.', 'colorful chameleon reptile full body on white background'),
    v('Snail', '🐌', 'Caracol / Caramujo', '/sneɪl/', 'The snail carries a spiral shell.', 'garden snail with spiral shell on white background'),
    v('Caterpillar', '🐛', 'Lagarta', '/ˈkæt.ərˌpɪl.ər/', 'The green caterpillar will become a butterfly.', 'green caterpillar larva on white background'),
    v('Mosquito', '🦟', 'Mosquito / Pernilongo', '/məˈskiː.toʊ/', 'Close the window screen to keep mosquitoes out.', 'mosquito insect full body on white background'),
  ]
};

const HOME_3 = {
  title: 'Rodada 3 • Casa & Objetos III: Escola & Tecnologia',
  subtitle: 'Passo 3/5 da Rodada 3 • 30 itens de estudo, papelaria e eletrônicos',
  pedagogicalObjective: 'Reconhecer aparelhos eletrônicos, materiais escolares e objetos pessoais.',
  icon: 'book',
  theory: [
    'No 3º passo da Rodada 3 estudamos tecnologia e material escolar: Celular (Phone), Computador (Computer), Fone de Ouvido (Headphones), Livro (Book), Caderno (Notebook), Caneta (Pen), Lápis (Pencil), Borracha (Eraser) e Mochila (Backpack).'
  ],
  items: [
    v('Phone', '📱', 'Celular / Smartphone', '/foʊn/', 'I use my smartphone to study English.', 'modern smartphone mobile phone front view on white background'),
    v('Computer', '💻', 'Computador / Notebook', '/kəmˈpjuː.tər/', 'She works on her laptop computer.', 'open laptop computer notebook on white background'),
    v('Headphones', '🎧', 'Fone de ouvido', '/ˈhed.foʊnz/', 'Put on your headphones to listen to the audio.', 'wireless over ear headphones on white background'),
    v('Charger', '🔌', 'Carregador de celular', '/ˈtʃɑːr.dʒər/', 'Plug in the phone charger to recharge the battery.', 'white phone wall charger adapter with usb cable on white background'),
    v('Remote Control', '🎛️', 'Controle remoto', '/rɪˈmoʊt kənˈtroʊl/', 'Use the remote control to turn on the TV.', 'black television remote control with buttons on white background'),
    v('Camera', '📷', 'Câmera fotográfica', '/ˈkæm.rə/', 'Take a clear photo with the digital camera.', 'digital photo camera with lens on white background'),
    v('Keyboard', '⌨️', 'Teclado de computador', '/ˈkiː.bɔːrd/', 'Type the sentence on the computer keyboard.', 'computer qwerty keyboard on white background'),
    v('Computer Mouse', '🖱️', 'Mouse de computador', '/kəmˈpjuː.tər maʊs/', 'Click the button using the wireless computer mouse.', 'wireless computer mouse on white background'),
    v('Printer', '🖨️', 'Impressora', '/ˈprɪn.tər/', 'Print the page on the office printer.', 'desktop inkjet printer with paper on white background'),
    v('Book', '📘', 'Livro', '/bʊk/', 'Read a chapter of your book every night.', 'single hardcover book closed on white background'),
    v('Notebook', '📓', 'Caderno espiral', '/ˈnoʊt.bʊk/', 'Write the new English words in your spiral notebook.', 'spiral bound school notebook on white background'),
    v('Pen', '🖊️', 'Caneta', '/pen/', 'Write your name with a blue ballpoint pen.', 'single blue ballpoint pen on white background'),
    v('Pencil', '✏️', 'Lápis', '/ˈpen.səl/', 'Draw a picture with a wooden pencil.', 'single yellow wooden pencil with pink eraser on white background'),
    v('Eraser', '⬜', 'Borracha escolar', '/ɪˈreɪ.sər/', 'Use a rubber eraser to fix the pencil mistake.', 'single school pencil rubber eraser on white background'),
    v('Sharpener', '✏️', 'Apontador de lápis', '/ˈʃɑːr.pən.ər/', 'Sharpen the pencil point with a sharpener.', 'small handheld pencil sharpener on white background'),
    v('Ruler', '📏', 'Régua', '/ˈruː.lər/', 'Draw a straight line using a ruler.', 'straight school ruler with centimeter marks on white background'),
    v('Backpack', '🎒', 'Mochila', '/ˈbæk.pæk/', 'Carry your books inside a school backpack.', 'zipper school backpack bag on white background'),
    v('Scissors', '✂️', 'Tesoura', '/ˈsɪz.ərz/', 'Cut the paper carefully with scissors.', 'pair of open school scissors on white background'),
    v('Glue', '🧴', 'Cola escolar', '/ɡluː/', 'Stick the paper with white school glue.', 'school glue stick and bottle on white background'),
    v('Crayon', '🖍️', 'Giz de cera', '/ˈkreɪ.ɑːn/', 'Children color drawings with colorful wax crayons.', 'colorful wax crayons on white background'),
    v('Paintbrush', '🖌️', 'Pincel', '/ˈpeɪnt.brʌʃ/', 'Paint the canvas with an artist paintbrush.', 'artist paintbrush with wooden handle on white background'),
    v('Envelope', '✉️', 'Envelope', '/ˈen.və.loʊp/', 'Put the letter inside a paper envelope.', 'white paper mail letter envelope on white background'),
    v('Calendar', '📅', 'Calendário', '/ˈkæl.ən.dər/', 'Check the date on the desk calendar.', 'standing desk calendar showing days on white background'),
    v('Folder', '📁', 'Pasta de documentos', '/ˈfoʊl.dər/', 'Keep your sheets organized in a folder.', 'office document file folder on white background'),
    v('Paperclip', '📎', 'Clipe de papel', '/ˈpeɪ.pər.klɪp/', 'Hold the pages together with a metal paperclip.', 'metal office paperclip on white background'),
    v('Calculator', '🧮', 'Calculadora', '/ˈkæl.kjə.leɪ.tər/', 'Add the numbers on a pocket calculator.', 'digital pocket calculator with buttons on white background'),
    v('Globe', '🌍', 'Globo terrestre', '/ɡloʊb/', 'Find Brazil and the United States on the world globe.', 'world map desk globe on stand on white background'),
    v('Comb', '🪮', 'Pente de cabelo', '/koʊm/', 'Neaten your hair with a plastic comb.', 'hair comb on white background'),
    v('Hairbrush', '🪮', 'Escova de cabelo', '/ˈher.brʌʃ/', 'Brush your hair in front of the mirror.', 'hairbrush with bristles on white background'),
    v('Hair Dryer', '💨', 'Secador de cabelo', '/ˈher ˌdraɪ.ər/', 'Dry your wet hair with an electric hair dryer.', 'electric blow hair dryer appliance on white background'),
  ]
};

const CITY_3 = {
  title: 'Rodada 3 • Cotidiano III: Lugares & Natureza',
  subtitle: 'Passo 4/5 da Rodada 3 • 30 lugares da cidade e elementos da natureza',
  pedagogicalObjective: 'Reconhecer estabelecimentos comerciais, prédios e elementos naturais fundamentais.',
  icon: 'map',
  theory: [
    'No 4º passo da Rodada 3 aprendemos os lugares da cidade (Casa, Escola, Supermercado, Padaria, Farmácia, Hospital, Restaurante, Livraria) e os elementos da natureza (Árvore, Flor, Rosa, Girassol, Sol, Lua, Arco-íris).',
    'Logo a seguir vem a Prática com Palavras da Rodada 3!'
  ],
  items: [
    v('House', '🏠', 'Casa', '/haʊs/', 'They live in a cozy family house.', 'single family house building with roof and windows on white background'),
    v('School', '🏫', 'Escola', '/skuːl/', 'Children study at school every day.', 'school building exterior on white background'),
    v('Supermarket', '🛒', 'Supermercado', '/ˈsuː.pərˌmɑːr.kɪt/', 'We buy groceries with a shopping cart at the supermarket.', 'supermarket grocery aisle with shopping cart'),
    v('Bakery', '🥐', 'Padaria', '/ˈbeɪ.kər.i/', 'The bakery display is full of fresh bread and cakes.', 'bakery glass display case full of bread and croissants'),
    v('Pharmacy', '🏥', 'Farmácia', '/ˈfɑːr.mə.si/', 'Buy medicine at the neighborhood pharmacy.', 'pharmacy drugstore shelves with medicine boxes'),
    v('Hospital', '🏥', 'Hospital', '/ˈhɑː.spɪ.təl/', 'Doctors and nurses care for patients at the hospital.', 'hospital building exterior with red cross sign'),
    v('Restaurant', '🍽️', 'Restaurante', '/ˈres.trɑːnt/', 'We had dinner together at a nice restaurant.', 'restaurant dining room with set tables and chairs'),
    v('Bank', '🏦', 'Banco / Caixa eletrônico', '/bæŋk/', 'Withdraw money at the bank.', 'bank building with ATM cash machine'),
    v('Hotel', '🏨', 'Hotel', '/hoʊˈtel/', 'We stayed in a comfortable hotel room on vacation.', 'hotel building exterior entrance'),
    v('Bookstore', '📚', 'Livraria', '/ˈbʊk.stɔːr/', 'She bought a new book at the bookstore.', 'bookstore shop interior with shelves full of books'),
    v('Library', '🏛️', 'Biblioteca', '/ˈlaɪ.brer.i/', 'Read quietly in the public library.', 'library reading room with study desks and bookshelves'),
    v('Cinema', '🎬', 'Cinema', '/ˈsɪn.ə.mə/', 'Watch a movie on the big screen at the cinema.', 'cinema movie theater with red seats and big screen'),
    v('Gym', '🏋️', 'Academia de ginástica', '/dʒɪm/', 'Exercise with weights and treadmills at the gym.', 'fitness gym room with dumbbells and treadmills'),
    v('Barber Shop', '💈', 'Barbearia / Salão', '/ˈbɑːr.bər ʃɑːp/', 'Get a haircut at the barber shop.', 'barber shop chair mirror and barber pole'),
    v('Pet Shop', '🐾', 'Pet shop', '/ˈpet ʃɑːp/', 'Buy pet food and toys at the pet shop.', 'pet shop store with dog beds toys and pet food'),
    v('Park', '🌳', 'Parque / Praça', '/pɑːrk/', 'Families walk and play in the green city park.', 'green city park with trees grass and bench'),
    v('Beach', '🏖️', 'Praia', '/biːtʃ/', 'We love going to the sunny beach on weekends.', 'sunny sandy beach with blue ocean waves and palm tree'),
    v('Swimming Pool', '🏊', 'Piscina', '/ˈswɪm.ɪŋ puːl/', 'Swim in the blue swimming pool on hot days.', 'clear blue swimming pool with ladder'),
    v('Bridge', '🌉', 'Ponte', '/brɪdʒ/', 'Cars cross the river over the suspension bridge.', 'bridge crossing over river water'),
    v('Castle', '🏰', 'Castelo', '/ˈkæs.əl/', 'The stone castle has tall towers.', 'stone medieval castle with towers on white background'),
    v('Tree', '🌳', 'Árvore', '/triː/', 'A green tree provides cool shade.', 'single green leafy tree with trunk on white background'),
    v('Flower', '🌸', 'Flor', '/ˈflaʊ.ər/', 'A colorful flower blooms in spring.', 'single pink flower blossom on white background'),
    v('Rose', '🌹', 'Rosa vermelha', '/roʊz/', 'He gave her a single red rose.', 'single red rose flower with green stem on white background'),
    v('Sunflower', '🌻', 'Girassol', '/ˈsʌnˌflaʊ.ər/', 'The yellow sunflower faces the sun.', 'single bright yellow sunflower bloom on white background'),
    v('Cactus', '🌵', 'Cacto', '/ˈkæk.təs/', 'A green cactus grows in dry places.', 'green cactus plant in small pot on white background'),
    v('Leaf', '🍃', 'Folha de planta', '/liːf/', 'A bright green tree leaf.', 'single green tree leaf on white background'),
    v('Sun', '☀️', 'Sol', '/sʌn/', 'The bright yellow sun shines in the blue sky.', 'bright shining yellow sun in clear blue sky'),
    v('Moon', '🌙', 'Lua', '/muːn/', 'The full moon glows in the night sky.', 'bright full moon in night sky'),
    v('Rainbow', '🌈', 'Arco-íris', '/ˈreɪn.boʊ/', 'A colorful rainbow appeared after the rain.', 'colorful rainbow arc in blue sky'),
    v('Fire', '🔥', 'Fogo / Fogueira', '/ˈfaɪ.ər/', 'Warm campfire flames.', 'campfire burning wood logs with orange flames on white background'),
  ]
};

const FOOD_4 = {
  title: 'Rodada 4 • Alimentos IV: Bebidas, Doces & Especiais',
  subtitle: 'Passo 1/5 da Rodada 4 • 30 bebidas, sobremesas e frutas especiais',
  pedagogicalObjective: 'Dominar o vocabulário de bebidas, doces famosos e frutas menos comuns.',
  icon: 'cup',
  theory: [
    'Chegamos à Rodada 4! Começamos com bebidas (Água, Leite, Café, Suco, Refrigerante, Chá), sobremesas queridas (Bolo, Chocolate, Sorvete, Picolé, Pudim, Pipoca) e frutas menos comuns ao final.'
  ],
  items: [
    v('Water', '💧', 'Água', '/ˈwɔː.tər/', 'Drink a glass of fresh clear water.', 'clear glass filled with drinking water on white background'),
    v('Milk', '🥛', 'Leite', '/mɪlk/', 'A glass of cold white milk.', 'clear glass filled with white milk on white background'),
    v('Coffee', '☕', 'Café', '/ˈkɔː.fi/', 'A warm cup of black coffee.', 'cup of hot black coffee with saucer on white background'),
    v('Juice', '🧃', 'Suco de laranja', '/dʒuːs/', 'A glass of natural orange juice.', 'glass of orange juice on white background'),
    v('Soda', '🥤', 'Refrigerante', '/ˈsoʊ.də/', 'Cold cola soda with ice cubes.', 'glass of cola soda drink with ice on white background'),
    v('Tea', '🍵', 'Chá', '/tiː/', 'A cup of warm herbal tea.', 'cup of hot tea with tea bag tag on white background'),
    v('Cake', '🍰', 'Bolo', '/keɪk/', 'A slice of chocolate birthday cake.', 'chocolate birthday cake on white background'),
    v('Chocolate', '🍫', 'Chocolate', '/ˈtʃɑːk.lət/', 'A bar of milk chocolate.', 'milk chocolate bar on white background'),
    v('Ice Cream', '🍨', 'Sorvete', '/ˈaɪs kriːm/', 'Scoops of ice cream in a cone.', 'ice cream scoop in waffle cone on white background'),
    v('Popsicle', '🍧', 'Picolé', '/ˈpɑːp.sɪ.kəl/', 'A fruit popsicle on a hot day.', 'fruit ice popsicle on wooden stick on white background'),
    v('Cookie', '🍪', 'Biscoito / Cookie', '/ˈkʊk.i/', 'Chocolate chip cookies are crunchy.', 'round chocolate chip cookie on white background'),
    v('Pudding', '🍮', 'Pudim de leite', '/ˈpʊd.ɪŋ/', 'Caramel pudding is a classic Brazilian dessert.', 'whole caramel flan pudding pudim on plate on white background'),
    v('Candy', '🍬', 'Bala / Doce', '/ˈkæn.di/', 'Wrapped colorful fruit candy.', 'colorful wrapped fruit candy sweets on white background'),
    v('Lollipop', '🍭', 'Pirulito', '/ˈlɑː.li.pɑːp/', 'A colorful round lollipop on a stick.', 'round colorful swirl lollipop on stick on white background'),
    v('Popcorn', '🍿', 'Pipoca', '/ˈpɑːp.kɔːrn/', 'Warm salted popcorn at the cinema.', 'red and white striped bucket full of popcorn on white background'),
    v('Donut', '🍩', 'Rosquinha / Donut', '/ˈdoʊ.nʌt/', 'A pink glazed donut with sprinkles.', 'single pink frosted donut with sprinkles on white background'),
    v('Pie', '🥧', 'Torta doce', '/paɪ/', 'Warm homemade fruit pie.', 'whole baked fruit pie with lattice crust on white background'),
    v('Cupcake', '🧁', 'Cupcake / Bolinho', '/ˈkʌp.keɪk/', 'A cupcake with creamy frosting.', 'single cupcake with swirl frosting on white background'),
    v('Yogurt', '🥣', 'Iogurte', '/ˈjoʊ.ɡərt/', 'Creamy strawberry yogurt in a spoon.', 'cup of creamy yogurt with spoon on white background'),
    v('Honey', '🍯', 'Mel', '/ˈhʌn.i/', 'Golden bee honey in a glass jar.', 'glass jar of golden honey with wooden dipper on white background'),
    v('Jam', '🍓', 'Geleia de frutas', '/dʒæm/', 'Strawberry jam on morning toast.', 'glass jar of red strawberry jam on white background'),
    v('Milkshake', '🥤', 'Milk-shake', '/ˈmɪlk.ʃeɪk/', 'Cold chocolate milkshake with whipped cream.', 'tall glass of milkshake with whipped cream and straw on white background'),
    v('Waffle', '🧇', 'Waffle', '/ˈwɑː.fəl/', 'Crispy golden waffle for breakfast.', 'golden Belgian waffle on white background'),
    v('Jelly', '🍮', 'Gelatina', '/ˈdʒel.i/', 'Red strawberry jelly dessert.', 'red gelatin jelly dessert in bowl on white background'),
    v('Cereal', '🥣', 'Cereal matinal', '/ˈsɪr.i.əl/', 'Cornflakes cereal with cold milk.', 'bowl of cornflakes breakfast cereal with milk on white background'),
    v('Raspberry', '❤️', 'Framboesa', '/ˈræzˌber.i/', 'Raspberries are bright red berries.', 'whole red raspberry fruit on white background'),
    v('Blueberry', '🫐', 'Mirtilo (Blueberry)', '/ˈbluːˌber.i/', 'Blueberries are small blue fruits.', 'whole blue blueberry fruits on white background'),
    v('Pomegranate', '🔴', 'Romã', '/ˈpɑː.mɪˌɡræn.ɪt/', 'Pomegranate is full of red seeds.', 'red pomegranate fruit whole and open half showing seeds on white background'),
    v('Dragon Fruit', '🐉', 'Pitaia', '/ˈdræɡ.ən fruːt/', 'Dragon fruit has bright pink skin.', 'pink dragon fruit pitaya whole and half on white background'),
    v('Chestnut', '🌰', 'Castanha / Noz', '/ˈtʃes.nʌt/', 'Crunchy nuts and chestnuts.', 'whole brown chestnuts on white background'),
  ]
};

const ANIMALS_4 = {
  title: 'Rodada 4 • Animais IV: Menos Comuns & Exóticos',
  subtitle: 'Passo 2/5 da Rodada 4 • 30 animais menos frequentes no cotidiano',
  pedagogicalObjective: 'Expandir o vocabulário com 30 animais menos cotidianos, porém presentes em livros e documentários.',
  icon: 'dog',
  theory: [
    'Somente aqui na Rodada 4 entramos nos animais menos comuns do dia a dia.',
    'Inclui Lagosta (Lobster), Lula (Squid), Arraia (Stingray), Orca, Piranha, Lhama (Llama), Orangotango (Orangutan), Hiena (Hyena), Porco-espinho (Hedgehog), Guaxinim (Raccoon), Lontra (Otter), Castor (Beaver), Suricato (Meerkat) e Ornitorrinco (Platypus).'
  ],
  items: [
    v('Lobster', '🦞', 'Lagosta', '/ˈlɑːb.stər/', 'The red lobster has two big claws.', 'red lobster crustacean full body on white background'),
    v('Squid', '🦑', 'Lula', '/skwɪd/', 'The squid swims fast in deep water.', 'squid marine animal full body on white background'),
    v('Stingray', '🐟', 'Arraia', '/ˈstɪŋ.reɪ/', 'The flat stingray glides near the ocean floor.', 'stingray ray fish full body on white background'),
    v('Orca', '🐋', 'Orca (Baleia-assassina)', '/ˈɔːr.kə/', 'The black and white orca leaps from the sea.', 'black and white orca killer whale full body on white background'),
    v('Piranha', '🐟', 'Piranha', '/pɪˈrɑː.njə/', 'The piranha is an Amazon river fish with sharp teeth.', 'piranha fish full body side view on white background'),
    v('Blowfish', '🐡', 'Baiacu', '/ˈbloʊ.fɪʃ/', 'The blowfish puffs up like a round ball.', 'inflated round pufferfish blowfish on white background'),
    v('Walrus', '🦭', 'Morsa', '/ˈwɔːl.rəs/', 'The arctic walrus has two long ivory tusks.', 'walrus with ivory tusks full body on white background'),
    v('Pelican', '🐦', 'Pelicano', '/ˈpel.ɪ.kən/', 'The pelican catches fish in its large throat pouch.', 'pelican bird full body standing on white background'),
    v('Stork', '🐦', 'Cegonha', '/stɔːrk/', 'The white stork builds big nests on roofs.', 'white stork bird full body standing on white background'),
    v('Seagull', '🐦', 'Gaivota', '/ˈsiː.ɡʌl/', 'Seagulls fly over the beach.', 'white seagull bird full body standing on white background'),
    v('Crow', '🐦‍⬛', 'Corvo', '/kroʊ/', 'The black crow is a very smart bird.', 'black crow bird full body standing on white background'),
    v('Vulture', '🦅', 'Urubu / Abutre', '/ˈvʌl.tʃər/', 'Vultures soar high on warm air currents.', 'vulture bird full body standing on white background'),
    v('Canary', '🐤', 'Canário', '/kəˈner.i/', 'The yellow canary sings a bright song.', 'yellow canary songbird full body on white background'),
    v('Llama', '🦙', 'Lhama', '/ˈlɑː.mə/', 'Llamas live in the Andes mountains of South America.', 'llama animal full body standing on white background'),
    v('Orangutan', '🦧', 'Orangotango', '/əˈræŋ.ə.tæn/', 'The orangutan has long reddish hair.', 'orangutan ape full body sitting on white background'),
    v('Hyena', '🐕', 'Hiena', '/haɪˈiː.nə/', 'Spotted hyenas live in the African savanna.', 'spotted hyena animal full body standing on white background'),
    v('Bison', '🦬', 'Búfalo / Bisão', '/ˈbaɪ.sən/', 'The large bison has thick fur on its shoulders.', 'bison buffalo animal full body standing on white background'),
    v('Boar', '🐗', 'Javali', '/bɔːr/', 'The wild boar has curved tusks.', 'wild boar pig full body standing on white background'),
    v('Moose', '🫎', 'Alce', '/muːs/', 'The northern moose has huge flat antlers.', 'moose with antlers full body standing on white background'),
    v('Hedgehog', '🦔', 'Porco-espinho / Ouriço', '/ˈhedʒ.hɔːɡ/', 'The little hedgehog curls into a spiky ball.', 'hedgehog animal full body on white background'),
    v('Raccoon', '🦝', 'Guaxinim', '/ræˈkuːn/', 'The raccoon looks like it is wearing a black mask.', 'raccoon animal full body standing on white background'),
    v('Otter', '🦦', 'Lontra', '/ˈɑː.tər/', 'River otters are playful swimmers.', 'river otter animal full body on white background'),
    v('Beaver', '🦫', 'Castor', '/ˈbiː.vər/', 'The beaver has strong teeth and a flat tail.', 'beaver animal with flat tail full body on white background'),
    v('Skunk', '🦨', 'Gambá', '/skʌŋk/', 'The black skunk has a white stripe down its back.', 'black and white striped skunk full body on white background'),
    v('Meerkat', '🐿️', 'Suricato', '/ˈmɪr.kæt/', 'The meerkat stands upright to watch the desert.', 'meerkat animal standing upright full body on white background'),
    v('Platypus', '🦆', 'Ornitorrinco', '/ˈplæt.ɪ.pəs/', 'The Australian platypus has a duck bill and beaver tail.', 'platypus animal full body on white background'),
    v('Scorpion', '🦂', 'Escorpião', '/ˈskɔːr.pi.ən/', 'The scorpion has pincers and a curved tail.', 'scorpion arachnid full body on white background'),
    v('Grasshopper', '🦗', 'Gafanhoto / Grilo', '/ˈɡræsˌhɑː.pər/', 'The green grasshopper jumps in the grass.', 'green grasshopper insect full body on white background'),
    v('Dragonfly', '蜻', 'Libélula', '/ˈdræɡ.ən.flaɪ/', 'A dragonfly has four transparent wings.', 'dragonfly insect with four wings on white background'),
    v('Beetle', '🪲', 'Besouro', '/ˈbiː.təl/', 'The shiny beetle has a hard shell.', 'beetle insect full body on white background'),
  ]
};

const HOME_4 = {
  title: 'Rodada 4 • Casa & Objetos IV: Instrumentos & Ferramentas',
  subtitle: 'Passo 3/5 da Rodada 4 • 30 instrumentos musicais, ferramentas e utensílios',
  pedagogicalObjective: 'Dominar o vocabulário de instrumentos musicais, ferramentas domésticas e primeiros socorros.',
  icon: 'house',
  theory: [
    'No 3º passo da Rodada 4 aprendemos instrumentos musicais (Violão, Piano, Bateria, Violino, Flauta, Trompete, Sanfona) e ferramentas práticas (Martelo, Chave de Fenda, Alicate, Furadeira, Trena, Escada).'
  ],
  items: [
    v('Guitar', '🎸', 'Violão / Guitarra', '/ɡɪˈtɑːr/', 'He plays acoustic guitar with his friends.', 'wooden acoustic guitar full instrument on white background'),
    v('Piano', '🎹', 'Piano', '/piˈæn.oʊ/', 'She plays a melody on the grand piano.', 'grand piano musical instrument on white background'),
    v('Drum', '🥁', 'Bateria / Tambor', '/drʌm/', 'Keep the musical beat on the drum.', 'snare drum with drumsticks on white background'),
    v('Violin', '🎻', 'Violino', '/ˌvaɪ.əˈlɪn/', 'The wooden violin has four strings and a bow.', 'wooden violin with bow full instrument on white background'),
    v('Flute', '🪈', 'Flauta', '/fluːt/', 'Play a soft tune on the flute.', 'concert flute musical instrument on white background'),
    v('Trumpet', '🎺', 'Trompete', '/ˈtrʌm.pɪt/', 'The brass trumpet shines on stage.', 'brass trumpet musical instrument on white background'),
    v('Saxophone', '🎷', 'Saxofone', '/ˈsæk.sə.foʊn/', 'He plays jazz on the golden saxophone.', 'golden saxophone musical instrument on white background'),
    v('Accordion', '🪗', 'Sanfona / Acordeão', '/əˈkɔːr.di.ən/', 'The accordion is traditional in Brazilian forró.', 'piano accordion musical instrument on white background'),
    v('Microphone', '🎤', 'Microfone', '/ˈmaɪ.krə.foʊn/', 'Sing clearly into the microphone.', 'handheld vocal microphone on white background'),
    v('Radio', '📻', 'Rádio', '/ˈreɪ.di.oʊ/', 'Listen to music and news on the portable radio.', 'portable radio receiver with antenna on white background'),
    v('Flashlight', '🔦', 'Lanterna', '/ˈflæʃ.laɪt/', 'Use a battery flashlight in the dark.', 'handheld led flashlight torch on white background'),
    v('Battery', '🔋', 'Pilha / Bateria', '/ˈbæt.ər.i/', 'Put two AA batteries inside the remote.', 'alkaline AA battery cell on white background'),
    v('Electric Plug', '🔌', 'Plugue de tomada', '/ɪˈlek.trɪk plʌɡ/', 'Connect the electric plug to the outlet.', 'electric power plug with cord on white background'),
    v('Light Bulb', '💡', 'Lâmpada', '/ˈlaɪt bʌlb/', 'Replace the burned-out light bulb.', 'single led light bulb on white background'),
    v('Lock', '🔒', 'Cadeado', '/lɑːk/', 'Close the gate with a metal lock.', 'brass metal padlock with key on white background'),
    v('Box', '📦', 'Caixa de papelão', '/bɑːks/', 'Pack the items inside a cardboard box.', 'brown cardboard box on white background'),
    v('Basket', '🧺', 'Cesta / Cesto', '/ˈbæs.kɪt/', 'Carry the picnic food in a woven basket.', 'woven wicker basket with handle on white background'),
    v('Ladder', '🪜', 'Escada portátil', '/ˈlæd.ər/', 'Use a folding step ladder to reach the top shelf.', 'folding aluminum step ladder on white background'),
    v('Hammer', '🔨', 'Martelo', '/ˈhæm.ər/', 'Hit the nail with a claw hammer.', 'claw hammer tool with wooden handle on white background'),
    v('Screwdriver', '🪛', 'Chave de fenda', '/ˈskruːˌdraɪ.vər/', 'Tighten the screw with a screwdriver.', 'hand screwdriver tool on white background'),
    v('Wrench', '🔧', 'Chave inglesa / Chave de boca', '/rentʃ/', 'Turn the metal nut with a steel wrench.', 'steel wrench spanner tool on white background'),
    v('Pliers', '钳', 'Alicate', '/ˈplaɪ.ərz/', 'Hold the wire firmly with pliers.', 'hand pliers tool on white background'),
    v('Saw', '🪚', 'Serrote', '/sɔː/', 'Cut the wooden board with a hand saw.', 'carpenter hand saw tool on white background'),
    v('Tape Measure', '📏', 'Trena / Fita métrica', '/ˈteɪp ˌmeʒ.ər/', 'Measure the wall width with a tape measure.', 'yellow retractable tape measure tool on white background'),
    v('Drill', '🪛', 'Furadeira', '/drɪl/', 'Make a hole in the wall with an electric drill.', 'cordless electric drill tool on white background'),
    v('Chain', '⛓️', 'Corrente de metal', '/tʃeɪn/', 'A strong steel chain.', 'metal chain links on white background'),
    v('Candle', '🕯️', 'Vela', '/ˈkæn.dəl/', 'Light a white wax candle.', 'lit white wax candle on white background'),
    v('Bandage', '🩹', 'Curativo (Band-aid)', '/ˈbæn.dɪdʒ/', 'Put an adhesive bandage on the small cut.', 'adhesive medical band-aid strip on white background'),
    v('Pill', '💊', 'Comprimido / Cápsula', '/pɪl/', 'Take the medicine pill with water.', 'medicine pill capsule and tablet on white background'),
    v('Thermometer', '🌡️', 'Termômetro', '/θərˈmɑː.mə.tər/', 'Check for a fever with a digital thermometer.', 'digital medical fever thermometer on white background'),
  ]
};

const CITY_4 = {
  title: 'Rodada 4 • Cotidiano IV: Corpo, Esportes & Profissões',
  subtitle: 'Passo 4/5 da Rodada 4 • 30 termos de partes do corpo, esportes e profissões',
  pedagogicalObjective: 'Concluir os 480 termos visuais dominando corpo humano, esportes e profissões.',
  icon: 'swords',
  theory: [
    'No 4º passo da Rodada 4 aprendemos partes do corpo (Mão, Pé, Olho, Orelha, Nariz, Boca, Dente, Coração), esportes muito praticados no Brasil (Futebol, Basquete, Vôlei, Tênis) e profissões (Médico, Enfermeira, Dentista, Professor, Cozinheiro, Policial, Bombeiro, Piloto).',
    'Logo após este módulo, você fará a Prática Final de Palavras da Rodada 4!'
  ],
  items: [
    v('Hand', '✋', 'Mão', '/hænd/', 'Raise your hand to ask a question.', 'open human hand palm on white background'),
    v('Foot', '🦶', 'Pé', '/fʊt/', 'Kick the soccer ball with your foot.', 'human bare foot on white background'),
    v('Eye', '👁️', 'Olho', '/aɪ/', 'We see the world with our eyes.', 'human eye closeup on white background'),
    v('Ear', '👂', 'Orelha / Ouvido', '/ɪr/', 'We listen to music and speech with our ears.', 'human ear closeup on white background'),
    v('Nose', '👃', 'Nariz', '/noʊz/', 'Smell the fresh coffee with your nose.', 'human nose closeup on white background'),
    v('Mouth', '👄', 'Boca', '/maʊθ/', 'Open your mouth to pronounce the English vowel.', 'smiling human mouth lips and teeth on white background'),
    v('Tooth', '🦷', 'Dente', '/tuːθ/', 'Brush every tooth with toothpaste.', 'single white tooth dental model on white background'),
    v('Hair', '💇', 'Cabelo', '/her/', 'She brushes her long brown hair.', 'long healthy brown hair on white background'),
    v('Finger', '☝️', 'Dedo da mão', '/ˈfɪŋ.ɡər/', 'Point at the picture with your index finger.', 'hand pointing index finger on white background'),
    v('Arm', '💪', 'Braço', '/ɑːrm/', 'Stretch your arms before exercising.', 'human arm and hand on white background'),
    v('Leg', '🦵', 'Perna', '/leɡ/', 'Run fast using your strong legs.', 'human leg and foot on white background'),
    v('Heart', '❤️', 'Coração', '/hɑːrt/', 'Your heart beats inside your chest.', 'red heart shape 3d model on white background'),
    v('Brain', '🧠', 'Cérebro', '/breɪn/', 'Learning English exercises your brain.', 'human brain model on white background'),
    v('Bone', '🦴', 'Osso', '/boʊn/', 'Milk and calcium keep your bones strong.', 'white bone on white background'),
    v('Soccer Ball', '⚽', 'Bola de futebol', '/ˈsɑː.kər bɔːl/', 'Soccer is the most popular sport in Brazil.', 'classic black and white soccer ball football on white background'),
    v('Basketball', '🏀', 'Bola de basquete', '/ˈbæs.kɪt.bɔːl/', 'Bounce the orange basketball on the court.', 'orange basketball ball on white background'),
    v('Volleyball', '🏐', 'Bola de vôlei', '/ˈvɑː.li.bɔːl/', 'Hit the volleyball over the net.', 'volleyball sport ball on white background'),
    v('Tennis Ball', '🎾', 'Bola de tênis', '/ˈten.ɪs bɔːl/', 'Hit the yellow tennis ball with a racket.', 'yellow tennis ball on white background'),
    v('Boxing Glove', '🥊', 'Luva de boxe', '/ˈbɑːk.sɪŋ ɡlʌv/', 'Put on red boxing gloves for training.', 'pair of red boxing gloves on white background'),
    v('Fishing Rod', '🎣', 'Vara de pescar', '/ˈfɪʃ.ɪŋ rɑːd/', 'Catch a fish in the river with a fishing rod.', 'fishing rod with reel on white background'),
    v('Medal', '🥇', 'Medalha de ouro', '/ˈmed.əl/', 'The champion athlete won a gold medal.', 'gold winner medal with ribbon on white background'),
    v('Trophy', '🏆', 'Troféu de campeão', '/ˈtroʊ.fi/', 'The winning team lifted the golden trophy cup.', 'golden champion trophy cup on white background'),
    v('Doctor', '👨‍⚕️', 'Médico / Médica', '/ˈdɑːk.tər/', 'The doctor wears a white coat and a stethoscope.', 'friendly medical doctor in white coat with stethoscope on white background'),
    v('Nurse', '👩‍⚕️', 'Enfermeira / Enfermeiro', '/nɜːrs/', 'The hospital nurse cares for the patients.', 'friendly hospital nurse in scrubs on white background'),
    v('Dentist', '🦷', 'Dentista', '/ˈden.tɪst/', 'Visit the dentist to keep your teeth healthy.', 'dentist in coat holding tooth model on white background'),
    v('Teacher', '👩‍🏫', 'Professor / Professora', '/ˈtiː.tʃər/', 'The English teacher writes on the board.', 'friendly school teacher holding book on white background'),
    v('Chef', '👨‍🍳', 'Cozinheiro / Chef de cozinha', '/ʃef/', 'The chef wears a white hat in the restaurant kitchen.', 'chef cook in white uniform and chef hat on white background'),
    v('Police Officer', '👮', 'Policial', '/pəˈliːs ˌɔː.fɪ.sər/', 'The police officer helps people in the city.', 'police officer in uniform on white background'),
    v('Firefighter', '🧑‍🚒', 'Bombeiro', '/ˈfaɪ.ərˌfaɪ.tər/', 'The firefighter wears a protective helmet and jacket.', 'firefighter in helmet and uniform on white background'),
    v('Pilot', '👨‍✈️', 'Piloto de avião', '/ˈpaɪ.lət/', 'The airline pilot flies the commercial airplane.', 'airline pilot in uniform and cap on white background'),
  ]
};

// ============================================================================
// PRÁTICAS DE PALAVRAS AO FINAL DE CADA RODADA (PALAVRAS SIMPLES E DE FÁCIL ASSOCIAÇÃO)
// ============================================================================
function buildPracticePhase(phaseNumber, roundNumber, isFinalBoss, pairs) {
  const phaseId = `w0-p${phaseNumber}`;
  const exercises = pairs.map((p, idx) => {
    const id = `${phaseId}-e${idx + 1}`;
    if (p.mode === 'word-order') {
      return {
        id,
        type: 'word-order',
        visualEmoji: p.emoji,
        prompt: `Monte em inglês: "${p.pt}" (usando o vocabulário da Rodada ${roundNumber}):`,
        audioPhrase: p.en,
        options: p.bank,
        correctAnswer: p.en,
        explanation: `"${p.en}" significa "${p.pt}".`,
        phoneticHint: p.phonetic,
        skillCategory: 'vocabulary',
      };
    }
    return {
      id,
      type: 'multiple-choice',
      visualEmoji: p.emoji,
      prompt: p.prompt || `O que significa "${p.en}" em português?`,
      audioPhrase: p.en,
      options: p.options,
      correctAnswer: p.correct,
      explanation: `"${p.en}" = "${p.pt}". Associação simples e direta!`,
      phoneticHint: p.phonetic,
      skillCategory: 'vocabulary',
    };
  });

  return {
    id: phaseId,
    worldId: 0,
    phaseNumber,
    title: `Prática da Rodada ${roundNumber}: Palavras & Associações Simples`,
    subtitle: `Passo 5/5 da Rodada ${roundNumber} • 12 exercícios simples com as palavras aprendidas`,
    pedagogicalObjective: `Consolidar na prática as palavras aprendidas nos 4 módulos da Rodada ${roundNumber} (Alimentos, Animais, Casa e Cotidiano) com associações simples e diretas.`,
    type: isFinalBoss ? 'boss' : 'chest',
    icon: isFinalBoss ? 'swords' : 'gift',
    cefrLevel: 'A1',
    theorySummary: [
      `Parabéns por completar os 4 módulos visuais da Rodada ${roundNumber} (Alimentos, Animais, Casa e Cotidiano)!`,
      'Agora vamos praticar as palavras aprendidas com combinações curtas, simples e de fácil associação.',
      'Ouça cada expressão em inglês americano e escolha ou monte a resposta correta!'
    ],
    xpReward: isFinalBoss ? 90 : 60,
    gemsReward: isFinalBoss ? 35 : 25,
    exercises,
  };
}

const PRACTICE_ROUND_1 = [
  { mode: 'mc', emoji: '🍎', en: 'Red apple', pt: 'Maçã vermelha', phonetic: '/red ˈæp.əl/', options: ['Maçã vermelha', 'Banana amarela', 'Pera verde', 'Uva roxa'], correct: 'Maçã vermelha' },
  { mode: 'word-order', emoji: '🍌', en: 'Yellow banana', pt: 'Banana amarela', phonetic: '/ˈjel.oʊ bəˈnæn.ə/', bank: ['banana', 'Yellow', 'apple'] },
  { mode: 'mc', emoji: '🍊', en: 'Sweet orange', pt: 'Laranja doce', phonetic: '/swiːt ˈɔːr.ɪndʒ/', options: ['Laranja doce', 'Limão azedo', 'Melancia grande', 'Coco verde'], correct: 'Laranja doce' },
  { mode: 'mc', emoji: '🐕', en: 'Happy dog', pt: 'Cachorro feliz', phonetic: '/ˈhæp.i dɔːɡ/', options: ['Cachorro feliz', 'Gato pequeno', 'Cavalo forte', 'Pato branco'], correct: 'Cachorro feliz' },
  { mode: 'word-order', emoji: '🐈', en: 'White cat', pt: 'Gato branco', phonetic: '/waɪt kæt/', bank: ['cat', 'White', 'dog'] },
  { mode: 'mc', emoji: '🐎', en: 'Big horse', pt: 'Cavalo grande', phonetic: '/bɪɡ hɔːrs/', options: ['Cavalo grande', 'Vaca leiteira', 'Coelho rápido', 'Pássaro azul'], correct: 'Cavalo grande' },
  { mode: 'mc', emoji: '🛏️', en: 'My bed', pt: 'Minha cama', phonetic: '/maɪ bed/', options: ['Minha cama', 'Minha cadeira', 'Minha mesa', 'Minha porta'], correct: 'Minha cama' },
  { mode: 'word-order', emoji: '🪑', en: 'Wooden chair', pt: 'Cadeira de madeira', phonetic: '/ˈwʊd.ən tʃer/', bank: ['chair', 'Wooden', 'table'] },
  { mode: 'mc', emoji: '🔑', en: 'House key', pt: 'Chave de casa', phonetic: '/haʊs kiː/', options: ['Chave de casa', 'Porta de madeira', 'Janela aberta', 'Travesseiro macio'], correct: 'Chave de casa' },
  { mode: 'mc', emoji: '👕', en: 'Blue shirt', pt: 'Camisa azul', phonetic: '/bluː ʃɜːrt/', options: ['Camisa azul', 'Calça preta', 'Vestido vermelho', 'Boné novo'], correct: 'Camisa azul' },
  { mode: 'word-order', emoji: '👟', en: 'New sneakers', pt: 'Tênis novos', phonetic: '/nuː ˈsniː.kərz/', bank: ['sneakers', 'New', 'socks'] },
  { mode: 'mc', emoji: '☂️', en: 'Big umbrella', pt: 'Guarda-chuva grande', phonetic: '/bɪɡ ʌmˈbrel.ə/', options: ['Guarda-chuva grande', 'Óculos de sol', 'Relógio de pulso', 'Bolsa pequena'], correct: 'Guarda-chuva grande' },
];

const PRACTICE_ROUND_2 = [
  { mode: 'mc', emoji: '🍅', en: 'Fresh tomato', pt: 'Tomate fresco', phonetic: '/freʃ təˈmeɪ.toʊ/', options: ['Tomate fresco', 'Batata assada', 'Cenoura laranja', 'Alface verde'], correct: 'Tomate fresco' },
  { mode: 'word-order', emoji: '🥕', en: 'Orange carrot', pt: 'Cenoura laranja', phonetic: '/ˈɔːr.ɪndʒ ˈkær.ət/', bank: ['carrot', 'Orange', 'potato'] },
  { mode: 'mc', emoji: '🌽', en: 'Sweet corn', pt: 'Milho doce', phonetic: '/swiːt kɔːrn/', options: ['Milho doce', 'Cebola branca', 'Pepino verde', 'Abóbora grande'], correct: 'Milho doce' },
  { mode: 'mc', emoji: '🦁', en: 'Strong lion', pt: 'Leão forte', phonetic: '/strɔːŋ ˈlaɪ.ən/', options: ['Leão forte', 'Tigre rápido', 'Elefante grande', 'Macaco esperto'], correct: 'Leão forte' },
  { mode: 'word-order', emoji: '🦒', en: 'Tall giraffe', pt: 'Girafa alta', phonetic: '/tɔːl dʒɪˈræf/', bank: ['giraffe', 'Tall', 'zebra'] },
  { mode: 'mc', emoji: '🐘', en: 'Big elephant', pt: 'Elefante grande', phonetic: '/bɪɡ ˈel.ɪ.fənt/', options: ['Elefante grande', 'Urso pardo', 'Jacaré verde', ' Tucano colorido'], correct: 'Elefante grande' },
  { mode: 'mc', emoji: '🍽️', en: 'Clean plate', pt: 'Prato limpo', phonetic: '/kliːn pleɪt/', options: ['Prato limpo', 'Copo cheio', 'Garfo de metal', 'Panela grande'], correct: 'Prato limpo' },
  { mode: 'word-order', emoji: '🥛', en: 'Cold glass', pt: 'Copo gelado', phonetic: '/koʊld ɡlæs/', bank: ['glass', 'Cold', 'cup'] },
  { mode: 'mc', emoji: '🧊', en: 'Big fridge', pt: 'Geladeira grande', phonetic: '/bɪɡ frɪdʒ/', options: ['Geladeira grande', 'Fogão novo', 'Micro-ondas rápido', 'Liquidificador forte'], correct: 'Geladeira grande' },
  { mode: 'mc', emoji: '🚗', en: 'Red car', pt: 'Carro vermelho', phonetic: '/red kɑːr/', options: ['Carro vermelho', 'Ônibus azul', 'Bicicleta nova', 'Trem rápido'], correct: 'Carro vermelho' },
  { mode: 'word-order', emoji: '🚌', en: 'City bus', pt: 'Ônibus da cidade', phonetic: '/ˈsɪt.i bʌs/', bank: ['bus', 'City', 'car'] },
  { mode: 'mc', emoji: '✈️', en: 'Fast airplane', pt: 'Avião rápido', phonetic: '/fæst ˈer.pleɪn/', options: ['Avião rápido', 'Navio grande', 'Moto preta', 'Caminhão pesado'], correct: 'Avião rápido' },
];

const PRACTICE_ROUND_3 = [
  { mode: 'mc', emoji: '🍞', en: 'Warm bread', pt: 'Pão quentinho', phonetic: '/wɔːrm bred/', options: ['Pão quentinho', 'Arroz branco', 'Queijo amarelo', 'Sopa quente'], correct: 'Pão quentinho' },
  { mode: 'word-order', emoji: '🍕', en: 'Cheese pizza', pt: 'Pizza de queijo', phonetic: '/tʃiːz ˈpiːt.sə/', bank: ['pizza', 'Cheese', 'soup'] },
  { mode: 'mc', emoji: '🥗', en: 'Green salad', pt: 'Salada verde', phonetic: '/ɡriːn ˈsæl.əd/', options: ['Salada verde', 'Batata frita', 'Frango assado', 'Macarrão quente'], correct: 'Salada verde' },
  { mode: 'mc', emoji: '🦈', en: 'Big shark', pt: 'Tubarão grande', phonetic: '/bɪɡ ʃɑːrk/', options: ['Tubarão grande', 'Baleia azul', 'Golfinho amigo', 'Tartaruga lenta'], correct: 'Tubarão grande' },
  { mode: 'word-order', emoji: '🐋', en: 'Blue whale', pt: 'Baleia azul', phonetic: '/bluː weɪl/', bank: ['whale', 'Blue', 'shark'] },
  { mode: 'mc', emoji: '🦅', en: 'Fast eagle', pt: 'Águia rápida', phonetic: '/fæst ˈiː.ɡəl/', options: ['Águia rápida', 'Coruja noturna', 'Cisne branco', 'Beija-flor pequeno'], correct: 'Águia rápida' },
  { mode: 'mc', emoji: '📘', en: 'Good book', pt: 'Bom livro', phonetic: '/ɡʊd bʊk/', options: ['Bom livro', 'Caneta azul', 'Caderno novo', 'Mochila escolar'], correct: 'Bom livro' },
  { mode: 'word-order', emoji: '🖊️', en: 'Blue pen', pt: 'Caneta azul', phonetic: '/bluː pen/', bank: ['pen', 'Blue', 'book'] },
  { mode: 'mc', emoji: '📱', en: 'My phone', pt: 'Meu celular', phonetic: '/maɪ foʊn/', options: ['Meu celular', 'Meu computador', 'Minha câmera', 'Meu teclado'], correct: 'Meu celular' },
  { mode: 'mc', emoji: '🏠', en: 'My house', pt: 'Minha casa', phonetic: '/maɪ haʊs/', options: ['Minha casa', 'Minha escola', 'A padaria', 'O hospital'], correct: 'Minha casa' },
  { mode: 'word-order', emoji: '🌳', en: 'Green tree', pt: 'Árvore verde', phonetic: '/ɡriːn triː/', bank: ['tree', 'Green', 'flower'] },
  { mode: 'mc', emoji: '☀️', en: 'Bright sun', pt: 'Sol brilhante', phonetic: '/braɪt sʌn/', options: ['Sol brilhante', 'Lua cheia', 'Arco-íris colorido', 'Praia bonita'], correct: 'Sol brilhante' },
];

const PRACTICE_ROUND_4 = [
  { mode: 'mc', emoji: '💧', en: 'Cold water', pt: 'Água gelada', phonetic: '/koʊld ˈwɔː.tər/', options: ['Água gelada', 'Café quente', 'Leite fresco', 'Suco de laranja'], correct: 'Água gelada' },
  { mode: 'word-order', emoji: '☕', en: 'Hot coffee', pt: 'Café quente', phonetic: '/hɑːt ˈkɔː.fi/', bank: ['coffee', 'Hot', 'water'] },
  { mode: 'mc', emoji: '🍰', en: 'Sweet cake', pt: 'Bolo doce', phonetic: '/swiːt keɪk/', options: ['Bolo doce', 'Sorvete gelado', 'Pipoca salgada', 'Pudim cremoso'], correct: 'Bolo doce' },
  { mode: 'mc', emoji: '🦞', en: 'Red lobster', pt: 'Lagosta vermelha', phonetic: '/red ˈlɑːb.stər/', options: ['Lagosta vermelha', 'Baleia orca', 'Lhama branca', 'Gaivota voando'], correct: 'Lagosta vermelha' },
  { mode: 'word-order', emoji: '🐤', en: 'Yellow canary', pt: 'Canário amarelo', phonetic: '/ˈjel.oʊ kəˈner.i/', bank: ['canary', 'Yellow', 'crow'] },
  { mode: 'mc', emoji: '🦙', en: 'White llama', pt: 'Lhama branca', phonetic: '/waɪt ˈlɑː.mə/', options: ['Lhama branca', 'Alce grande', 'Javali forte', 'Castor rápido'], correct: 'Lhama branca' },
  { mode: 'mc', emoji: '🎸', en: 'My guitar', pt: 'Meu violão', phonetic: '/maɪ ɡɪˈtɑːr/', options: ['Meu violão', 'Meu piano', 'Meu tambor', 'Minha flauta'], correct: 'Meu violão' },
  { mode: 'word-order', emoji: '🔨', en: 'Heavy hammer', pt: 'Martelo pesado', phonetic: '/ˈhev.i ˈhæm.ər/', bank: ['hammer', 'Heavy', 'saw'] },
  { mode: 'mc', emoji: '📦', en: 'Big box', pt: 'Caixa grande', phonetic: '/bɪɡ bɑːks/', options: ['Caixa grande', 'Cadeado forte', 'Lanterna acesa', 'Escada alta'], correct: 'Caixa grande' },
  { mode: 'mc', emoji: '⚽', en: 'Soccer ball', pt: 'Bola de futebol', phonetic: '/ˈsɑː.kər bɔːl/', options: ['Bola de futebol', 'Bola de basquete', 'Medalha de ouro', 'Troféu de campeão'], correct: 'Bola de futebol' },
  { mode: 'word-order', emoji: '👩‍🏫', en: 'Good teacher', pt: 'Bom professor', phonetic: '/ɡʊd ˈtiː.tʃər/', bank: ['teacher', 'Good', 'doctor'] },
  { mode: 'mc', emoji: '👨‍⚕️', en: 'Family doctor', pt: 'Médico da família', phonetic: '/ˈfæm.əl.i ˈdɑːk.tər/', options: ['Médico da família', 'Chef de cozinha', 'Bombeiro corajoso', 'Piloto de avião'], correct: 'Médico da família' },
];

// Deterministic seeded shuffle helper so builds are stable and varied
function deterministicShuffle(array, seed) {
  const arr = [...array];
  let s = seed;
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

// Build exercises for a 30-item visual vocabulary module ensuring:
// 1. Items are presented from #1 (most common in Brazil) to #30 (less common).
// 2. ZERO image overlap between exercise i and exercise i-1.
// 3. Cooldown of at least 4 exercises before any image (target or distractor) can reappear.
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

    const optionsList = deterministicShuffle([target, ...distractors], phaseNumber * 100 + idx + 7);

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
      explanation: `Exemplo prático: "${target.sentence}"`,
      phoneticHint: target.phonetic,
      skillCategory: category,
    });
  }

  return exercises;
}

function makeVisualPhase(theme, phaseNumber) {
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
    xpReward: 45,
    gemsReward: 15,
    exercises: buildExercisesWithCooldown(theme, phaseNumber),
  };
}

// ============================================================================
// MONTAGEM INTERCALADA EM 4 RODADAS (1 DE CADA CATEGORIA + PRÁTICA DE PALAVRAS)
// ============================================================================
const phases = [
  // RODADA 1 (Essenciais do Dia a Dia)
  makeVisualPhase(FOOD_1, 1),
  makeVisualPhase(ANIMALS_1, 2),
  makeVisualPhase(HOME_1, 3),
  makeVisualPhase(CITY_1, 4),
  buildPracticePhase(5, 1, false, PRACTICE_ROUND_1),

  // RODADA 2 (Muito Comuns no Cotidiano)
  makeVisualPhase(FOOD_2, 6),
  makeVisualPhase(ANIMALS_2, 7),
  makeVisualPhase(HOME_2, 8),
  makeVisualPhase(CITY_2, 9),
  buildPracticePhase(10, 2, false, PRACTICE_ROUND_2),

  // RODADA 3 (Conhecidos pelo Público Geral)
  makeVisualPhase(FOOD_3, 11),
  makeVisualPhase(ANIMALS_3, 12),
  makeVisualPhase(HOME_3, 13),
  makeVisualPhase(CITY_3, 14),
  buildPracticePhase(15, 3, false, PRACTICE_ROUND_3),

  // RODADA 4 (Expansão & Domínio Completo)
  makeVisualPhase(FOOD_4, 16),
  makeVisualPhase(ANIMALS_4, 17),
  makeVisualPhase(HOME_4, 18),
  makeVisualPhase(CITY_4, 19),
  buildPracticePhase(20, 4, true, PRACTICE_ROUND_4),
];

// Build uncropped, watermark-free white-background image map for all 480 items
const ALL_VISUAL_THEMES = [
  FOOD_1, ANIMALS_1, HOME_1, CITY_1,
  FOOD_2, ANIMALS_2, HOME_2, CITY_2,
  FOOD_3, ANIMALS_3, HOME_3, CITY_3,
  FOOD_4, ANIMALS_4, HOME_4, CITY_4,
];

const realImagesMap = {};
for (const theme of ALL_VISUAL_THEMES) {
  for (const item of theme.items) {
    const q = encodeURIComponent(item.studioQuery);
    // Note: No &h=600&c=7 so Bing NEVER crops the sides/top/bottom of the image!
    realImagesMap[item.text] = `https://tse1.mm.bing.net/th?q=${q}&w=500&p=0`;
  }
}

const fileContent = `import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

const imagesFileContent = `// Auto-generated uncropped studio isolated photographs on white background for all 480 vocabulary items
export const REAL_VOCAB_IMAGES: Record<string, string> = ${JSON.stringify(realImagesMap, null, 2)};
`;

fs.writeFileSync('src/data/world0Phases.ts', fileContent, 'utf-8');
fs.writeFileSync('src/data/realVocabImages.ts', imagesFileContent, 'utf-8');

console.log('Successfully generated interleaved src/data/world0Phases.ts and uncropped src/data/realVocabImages.ts!');
console.log('Total phases in World 0:', phases.length, '(16 visual modules + 4 end-of-round word practice modules)');
console.log('Total unique uncropped images generated:', Object.keys(realImagesMap).length);
