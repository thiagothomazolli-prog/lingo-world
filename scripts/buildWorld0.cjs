const fs = require('fs');

// Helper to create a vocabulary item (ordered from most common #1 to most uncommon #30)
function v(text, emoji, pt, phonetic, sentence) {
  return {
    text,
    emoji,
    label: text,
    pt,
    phonetic,
    sentence: sentence || `This is ${text.toLowerCase()}.`,
  };
}

const THEMES = [
  // ==========================================================================
  // CATEGORIA 1: FRUTAS, ALIMENTOS & GASTRONOMIA (4 MÓDULOS DE 30 ITENS CADA)
  // ==========================================================================
  {
    phaseNumber: 1,
    title: 'Frutas & Alimentos I: Essenciais',
    subtitle: 'Módulo 1/4 • 30 frutas do mais comum ao mais incomum',
    pedagogicalObjective: 'Dominar 30 frutas em inglês, partindo das mais comuns do dia a dia até as mais exóticas.',
    icon: 'apple',
    theory: [
      'Este módulo possui 30 frutas organizadas da mais comum (#1 Apple) até as menos comuns (#30 Starfruit).',
      'Ouça a pronúncia nativa americana ao iniciar cada pergunta e selecione a ilustração correta.',
      'Se errar algum item, você fará a revisão ao final até acertar 100% do módulo!'
    ],
    items: [
      v('Apple', '🍎', 'Maçã', '/ˈæp.əl/', 'I eat a fresh red apple every morning.'),
      v('Banana', '🍌', 'Banana', '/bəˈnæn.ə/', 'Bananas are rich in potassium.'),
      v('Orange', '🍊', 'Laranja', '/ˈɔːr.ɪndʒ/', 'Fresh orange juice has lots of vitamin C.'),
      v('Strawberry', '🍓', 'Morango', '/ˈstrɔː.ber.i/', 'She loves sweet red strawberries.'),
      v('Grape', '🍇', 'Uva', '/ɡreɪp/', 'Purple grapes grow on vines.'),
      v('Watermelon', '🍉', 'Melancia', '/ˈwɔː.tərˌmel.ən/', 'Cold watermelon is great in the summer.'),
      v('Lemon', '🍋', 'Limão siciliano', '/ˈlem.ən/', 'Lemon tastes sour and refreshing.'),
      v('Pineapple', '🍍', 'Abacaxi', '/ˈpaɪnˌæp.əl/', 'Pineapple is a juicy tropical fruit.'),
      v('Mango', '🥭', 'Manga', '/ˈmæŋ.ɡoʊ/', 'This ripe mango is very sweet.'),
      v('Peach', '🍑', 'Pêssego', '/piːtʃ/', 'A soft peach has velvety skin.'),
      v('Pear', '🍐', 'Pera', '/per/', 'The green pear is sweet and soft.'),
      v('Cherry', '🍒', 'Cereja', '/ˈtʃer.i/', 'He put a red cherry on top of the cake.'),
      v('Avocado', '🥑', 'Abacate', '/ˌæv.əˈkɑː.doʊ/', 'Avocado toast is a healthy breakfast.'),
      v('Coconut', '🥥', 'Coco', '/ˈkoʊ.kə.nʌt/', 'We drank fresh coconut water at the beach.'),
      v('Kiwi', '🥝', 'Kiwi', '/ˈkiː.wiː/', 'Kiwi has bright green flesh inside.'),
      v('Blueberry', '🫐', 'Mirtilo', '/ˈbluːˌber.i/', 'Blueberry muffins are delicious.'),
      v('Melon', '🍈', 'Melão', '/ˈmel.ən/', 'Sweet melon is a light dessert.'),
      v('Papaya', '🧡', 'Mamão', '/pəˈpaɪ.ə/', 'Papaya is very popular for breakfast.'),
      v('Plum', '🟣', 'Ameixa', '/plʌm/', 'She picked a ripe purple plum.'),
      v('Raspberry', '❤️', 'Framboesa', '/ˈræzˌber.i/', 'Raspberry jam tastes wonderful on bread.'),
      v('Blackberry', '⚫', 'Amora', '/ˈblækˌber.i/', 'Wild blackberries grow on bushes.'),
      v('Tangerine', '🟠', 'Tangerina / Mexerica', '/ˈtæn.dʒə.riːn/', 'Tangerines are easy to peel.'),
      v('Lime', '🟢', 'Limão taiti', '/laɪm/', 'Squeeze fresh lime over the fish.'),
      v('Pomegranate', '🔴', 'Romã', '/ˈpɑː.mɪˌɡræn.ɪt/', 'Pomegranate is full of ruby red seeds.'),
      v('Apricot', '🟡', 'Damasco', '/ˈeɪ.prɪ.kɑːt/', 'Dried apricots are a great snack.'),
      v('Fig', '🟤', 'Figo', '/fɪɡ/', 'Fresh figs are sweet and soft.'),
      v('Guava', '🩷', 'Goiaba', '/ˈɡwɑː.və/', 'Guava juice is very aromatic.'),
      v('Passion Fruit', '💛', 'Maracujá', '/ˈpæʃ.ən fruːt/', 'Passion fruit mousse is a classic dessert.'),
      v('Dragon Fruit', '🐉', 'Pitaia', '/ˈdræɡ.ən fruːt/', 'Dragon fruit has a vibrant pink skin.'),
      v('Starfruit', '⭐', 'Carambola', '/ˈstɑːr.fruːt/', 'Slices of starfruit look like bright stars.'),
    ]
  },
  {
    phaseNumber: 2,
    title: 'Frutas & Alimentos II: Vegetais & Grãos',
    subtitle: 'Módulo 2/4 • 30 vegetais e grãos do comum ao incomum',
    pedagogicalObjective: 'Identificar legumes, verduras e grãos essenciais da culinária em inglês.',
    icon: 'apple',
    theory: [
      'Neste segundo módulo de alimentos, avançamos pelos 30 vegetais, hortaliças e grãos mais importantes.',
      'Preste atenção na pronúncia de palavras como Onion (/ˈʌn.jən/) e Cucumber (/ˈkjuː.kʌm.bər/).',
      'As imagens não se repetem em sequência para estimular sua memória visual real.'
    ],
    items: [
      v('Potato', '🥔', 'Batata', '/pəˈteɪ.toʊ/', 'Baked potatoes are warm and filling.'),
      v('Tomato', '🍅', 'Tomate', '/təˈmeɪ.toʊ/', 'Fresh red tomatoes go in the salad.'),
      v('Carrot', '🥕', 'Cenoura', '/ˈkær.ət/', 'Rabbits love crunchy orange carrots.'),
      v('Onion', '🧅', 'Cebola', '/ˈʌn.jən/', 'Chopped onion adds flavor to the soup.'),
      v('Garlic', '🧄', 'Alho', '/ˈɡɑːr.lɪk/', 'Garlic smells strong when roasted.'),
      v('Lettuce', '🥬', 'Alface', '/ˈlet.ɪs/', 'Wash the green lettuce leaves well.'),
      v('Corn', '🌽', 'Milho', '/kɔːrn/', 'Sweet yellow corn on the cob.'),
      v('Broccoli', '🥦', 'Brócolis', '/ˈbrɑː.kəl.i/', 'Steamed broccoli is very nutritious.'),
      v('Cucumber', '🥒', 'Pepino', '/ˈkjuː.kʌm.bər/', 'Cucumber slices are cool and crisp.'),
      v('Pepper', '🫑', 'Pimentão', '/ˈpep.ər/', 'Green bell peppers are crunchy.'),
      v('Chili', '🌶️', 'Pimenta', '/ˈtʃɪl.i/', 'That red chili pepper is very spicy.'),
      v('Mushroom', '🍄', 'Cogumelo', '/ˈmʌʃ.ruːm/', 'Mushrooms grow in damp forests.'),
      v('Eggplant', '🍆', 'Berinjela', '/ˈeɡ.plænt/', 'Grilled eggplant is delicious with olive oil.'),
      v('Peas', '🫛', 'Ervilha', '/piːz/', 'Green peas are small and round.'),
      v('Beans', '🫘', 'Feijão', '/biːnz/', 'Rice and beans are a daily meal.'),
      v('Pumpkin', '🎃', 'Abóbora', '/ˈpʌmp.kɪn/', 'Pumpkin soup is warm and creamy.'),
      v('Sweet Potato', '🍠', 'Batata-doce', '/ˌswiːt pəˈteɪ.toʊ/', 'Roasted sweet potato is naturally sweet.'),
      v('Peanut', '🥜', 'Amendoim', '/ˈpiː.nʌt/', 'Peanuts are a crunchy snack.'),
      v('Chestnut', '🌰', 'Castanha', '/ˈtʃes.nʌt/', 'Roasted chestnuts are popular in winter.'),
      v('Spinach', '🌿', 'Espinafre', '/ˈspɪn.ɪtʃ/', 'Spinach is rich in iron.'),
      v('Cabbage', '🟢', 'Repolho', '/ˈkæb.ɪdʒ/', 'Shredded cabbage makes great coleslaw.'),
      v('Cauliflower', '⚪', 'Couve-flor', '/ˈkɑː.lɪˌflaʊ.ər/', 'Cauliflower looks like a white flower.'),
      v('Zucchini', '🟩', 'Abobrinha', '/zuːˈkiː.ni/', 'Sliced zucchini cooks very quickly.'),
      v('Beetroot', '🟣', 'Beterraba', '/ˈbiːt.ruːt/', 'Beetroot has a deep purple color.'),
      v('Radish', '🔴', 'Rabanete', '/ˈræd.ɪʃ/', 'Radishes add a peppery crunch to salads.'),
      v('Celery', '🎋', 'Aipo / Salsão', '/ˈsel.ər.i/', 'Celery stalks are crisp and light.'),
      v('Asparagus', '🌱', 'Aspargo', '/əˈspær.ə.ɡəs/', 'Grilled asparagus is a gourmet side dish.'),
      v('Artichoke', '💚', 'Alcachofra', '/ˈɑːr.tə.tʃoʊk/', 'Artichoke hearts are tender and flavorful.'),
      v('Leek', '🎍', 'Alho-poró', '/liːk/', 'Leek and potato soup is a classic.'),
      v('Turnip', '⚪', 'Nabo', '/ˈtɜːr.nɪp/', 'Turnips are root vegetables grown in cool weather.'),
    ]
  },
  {
    phaseNumber: 3,
    title: 'Frutas & Alimentos III: Refeições & Pratos',
    subtitle: 'Módulo 3/4 • 30 alimentos preparados do comum ao incomum',
    pedagogicalObjective: 'Reconhecer carnes, pães, laticínios e refeições completas em inglês.',
    icon: 'apple',
    theory: [
      'Aqui você aprenderá os 30 alimentos de refeições diárias e gastronomia.',
      'Observe a diferença sonora entre Bread (/bred/), Cheese (/tʃiːz/) e Steak (/steɪk/).',
      'Todas as palavras são pronunciadas com voz humana nativa em inglês americano.'
    ],
    items: [
      v('Bread', '🍞', 'Pão', '/bred/', 'Warm fresh bread smells amazing.'),
      v('Rice', '🍚', 'Arroz', '/raɪs/', 'White rice is served with dinner.'),
      v('Egg', '🥚', 'Ovo', '/eɡ/', 'I eat a boiled egg for breakfast.'),
      v('Cheese', '🧀', 'Queijo', '/tʃiːz/', 'Melted cheese tastes great on toast.'),
      v('Chicken', '🍗', 'Frango', '/ˈtʃɪk.ɪn/', 'Roast chicken is a family favorite.'),
      v('Meat', '🥩', 'Carne / Bife', '/miːt/', 'He cooked the meat on the grill.'),
      v('Soup', '🍲', 'Sopa', '/suːp/', 'Hot soup is comforting on a cold night.'),
      v('Salad', '🥗', 'Salada', '/ˈsæl.əd/', 'A fresh green salad before the main course.'),
      v('Pizza', '🍕', 'Pizza', '/ˈpiːt.sə/', 'We shared a large cheese pizza.'),
      v('Sandwich', '🥪', 'Sanduíche', '/ˈsæn.wɪtʃ/', 'She packed a turkey sandwich for lunch.'),
      v('Hamburger', '🍔', 'Hambúrguer', '/ˈhæmˌbɜːr.ɡər/', 'A juicy hamburger with lettuce and tomato.'),
      v('French Fries', '🍟', 'Batata frita', '/ˈfrentʃ fraɪz/', 'Crispy golden French fries.'),
      v('Pasta', '🍝', 'Macarrão / Massa', '/ˈpɑː.stə/', 'Italian pasta with tomato sauce.'),
      v('Butter', '🧈', 'Manteiga', '/ˈbʌt.ər/', 'Spread a little butter on the warm bread.'),
      v('Bacon', '🥓', 'Bacon', '/ˈbeɪ.kən/', 'Crispy bacon and eggs in the morning.'),
      v('Sausage', '🌭', 'Salsicha / Linguiça', '/ˈsɔː.sɪdʒ/', 'Grilled sausage on a bun.'),
      v('Shrimp', '🍤', 'Camarão', '/ʃrɪmp/', 'Fried shrimp with lemon.'),
      v('Sushi', '🍣', 'Sushi', '/ˈsuː.ʃi/', 'Fresh salmon sushi from Japan.'),
      v('Pancake', '🥞', 'Panqueca', '/ˈpæn.keɪk/', 'Fluffy pancakes with maple syrup.'),
      v('Waffle', '🧇', 'Waffle', '/ˈwɑː.fəl/', 'A crispy Belgian waffle for breakfast.'),
      v('Croissant', '🥐', 'Croissant', '/krwɑːˈsɑːnt/', 'A flaky butter croissant from the bakery.'),
      v('Baguette', '🥖', 'Baguete', '/bæˈɡet/', 'A long crunchy French baguette.'),
      v('Bagel', '🥯', 'Bagel (pão em anel)', '/ˈbeɪ.ɡəl/', 'A toasted bagel with cream cheese.'),
      v('Pretzel', '🥨', 'Pretzel', '/ˈpret.səl/', 'A salted twisted pretzel.'),
      v('Taco', '🌮', 'Taco mexicano', '/ˈtɑː.koʊ/', 'Crunchy tacos with beef and salsa.'),
      v('Burrito', '🌯', 'Burrito', '/bəˈriː.toʊ/', 'A warm flour tortilla burrito.'),
      v('Dumpling', '🥟', 'Bolinho / Guioza', '/ˈdʌm.plɪŋ/', 'Steamed dumplings filled with vegetables.'),
      v('Omelet', '🍳', 'Omelete', '/ˈɑːm.lət/', 'A cheese and herb omelet.'),
      v('Fondue', '🫕', 'Fondue', '/fɑːnˈduː/', 'Melted cheese fondue in a warm pot.'),
      v('Oyster', '🦪', 'Ostra', '/ˈɔɪ.stər/', 'Fresh ocean oysters on ice.'),
    ]
  },
  {
    phaseNumber: 4,
    title: 'Frutas & Alimentos IV: Bebidas & Sobremesas',
    subtitle: 'Módulo 4/4 • 30 bebidas e doces do comum ao incomum',
    pedagogicalObjective: 'Dominar o vocabulário completo de bebidas, sobremesas e confeitaria.',
    icon: 'cup',
    theory: [
      'Fechamos a trilha de Alimentos com 30 bebidas, doces e sobremesas.',
      'Desde Water (/ˈwɔː.tər/) e Coffee (/ˈkɔː.fi/) até itens de confeitaria como Cupcake e Macaron.',
      'Acerte todos os itens para concluir os 4 módulos de Gastronomia!'
    ],
    items: [
      v('Water', '💧', 'Água', '/ˈwɔː.tər/', 'Drink plenty of fresh water every day.'),
      v('Milk', '🥛', 'Leite', '/mɪlk/', 'A glass of cold milk.'),
      v('Coffee', '☕', 'Café', '/ˈkɔː.fi/', 'A cup of hot black coffee.'),
      v('Tea', '🍵', 'Chá', '/tiː/', 'Warm green tea is relaxing.'),
      v('Juice', '🧃', 'Suco', '/dʒuːs/', 'Natural apple juice with no sugar.'),
      v('Soda', '🥤', 'Refrigerante', '/ˈsoʊ.də/', 'Cold soda with ice cubes.'),
      v('Cake', '🍰', 'Bolo', '/keɪk/', 'A slice of strawberry birthday cake.'),
      v('Chocolate', '🍫', 'Chocolate', '/ˈtʃɑːk.lət/', 'Dark chocolate is delicious.'),
      v('Ice Cream', '🍨', 'Sorvete', '/ˈaɪs kriːm/', 'Vanilla ice cream in a bowl.'),
      v('Cookie', '🍪', 'Biscoito / Cookie', '/ˈkʊk.i/', 'Chocolate chip cookies fresh from the oven.'),
      v('Candy', '🍬', 'Bala / Doce', '/ˈkæn.di/', 'Sweet fruit candy.'),
      v('Honey', '🍯', 'Mel', '/ˈhʌn.i/', 'Golden bee honey in a jar.'),
      v('Sugar', '🧂', 'Açúcar / Sal', '/ˈʃʊɡ.ər/', 'One spoon of sugar in my tea.'),
      v('Pie', '🥧', 'Torta', '/paɪ/', 'Warm homemade apple pie.'),
      v('Donut', '🍩', 'Rosquinha / Donut', '/ˈdoʊ.nʌt/', 'A glazed donut with sprinkles.'),
      v('Lollipop', '🍭', 'Pirulito', '/ˈlɑː.li.pɑːp/', 'A colorful swirl lollipop.'),
      v('Popcorn', '🍿', 'Pipoca', '/ˈpɑːp.kɔːrn/', 'Salty popcorn at the movie theater.'),
      v('Cupcake', '🧁', 'Cupcake / Bolinho', '/ˈkʌp.keɪk/', 'A vanilla cupcake with pink frosting.'),
      v('Pudding', '🍮', 'Pudim', '/ˈpʊd.ɪŋ/', 'Caramel pudding for dessert.'),
      v('Smoothie', '🍧', 'Vitamina / Raspadinha', '/ˈsmuː.ði/', 'A cold berry smoothie.'),
      v('Lemonade', '🍋', 'Limonada', '/ˌlem.əˈneɪd/', 'Cold lemonade on a sunny afternoon.'),
      v('Milkshake', '🥤', 'Milk-shake', '/ˈmɪlk.ʃeɪk/', 'Thick chocolate milkshake.'),
      v('Ice Cube', '🧊', 'Cubo de gelo', '/ˈaɪs kjuːb/', 'Put two ice cubes in the glass.'),
      v('Teapot', '🫖', 'Bule de chá', '/ˈtiː.pɑːt/', 'Pour hot water from the teapot.'),
      v('Baby Bottle', '🍼', 'Mamadeira', '/ˈbeɪ.bi ˈbɑː.təl/', 'Warm milk in the baby bottle.'),
      v('Mate Tea', '🧉', 'Chimarrão / Mate', '/ˈmɑː.teɪ tiː/', 'Traditional herbal mate tea.'),
      v('Bubble Tea', '🧋', 'Chá com pérolas (Boba)', '/ˈbʌb.əl tiː/', 'Sweet bubble tea with tapioca pearls.'),
      v('Fortune Cookie', '🥠', 'Biscoito da sorte', '/ˈfɔːr.tʃən ˈkʊk.i/', 'Read the message inside the fortune cookie.'),
      v('Mooncake', '🥮', 'Bolo lunar', '/ˈmuːn.keɪk/', 'Traditional festival mooncake.'),
      v('Dango', '🍡', 'Doce japonês no palito', '/ˈdɑːŋ.ɡoʊ/', 'Sweet rice dumplings on a skewer.'),
    ]
  },

  // ==========================================================================
  // CATEGORIA 2: ANIMAIS & NATUREZA (4 MÓDULOS DE 30 ITENS - SEM FILHOTES!)
  // ==========================================================================
  {
    phaseNumber: 5,
    title: 'Animais & Natureza I: Domésticos & Fazenda',
    subtitle: 'Módulo 1/4 • 30 animais conhecidos (corpo inteiro) do comum ao incomum',
    pedagogicalObjective: 'Reconhecer animais domésticos e da fazenda com ilustrações de corpo inteiro.',
    icon: 'dog',
    theory: [
      'Todos os animais principais são apresentados em ilustrações de corpo inteiro (sem rostos soltos e sem filhotes).',
      'Começamos pelos mais comuns (Dog, Cat, Horse, Cow) até animais rurais menos comuns (Llama, Alpaca, Yak).',
      'Ouça com atenção a pronúncia nativa de Bird (/bɜːrd/) e Rabbit (/ˈræb.ɪt/).'
    ],
    items: [
      v('Dog', '🐕', 'Cachorro', '/dɔːɡ/', 'The loyal dog runs across the yard.'),
      v('Cat', '🐈', 'Gato', '/kæt/', 'The agile cat walks along the wall.'),
      v('Horse', '🐎', 'Cavalo', '/hɔːrs/', 'The brown horse gallops across the field.'),
      v('Cow', '🐄', 'Vaca', '/kaʊ/', 'The dairy cow eats green grass.'),
      v('Pig', '🐖', 'Porco', '/pɪɡ/', 'The pink pig rests on the farm.'),
      v('Sheep', '🐑', 'Ovelha', '/ʃiːp/', 'Sheep give us warm wool.'),
      v('Chicken', '🐓', 'Galinha / Galo', '/ˈtʃɪk.ɪn/', 'The chicken pecks corn in the barn.'),
      v('Duck', '🦆', 'Pato', '/dʌk/', 'The duck swims peacefully on the lake.'),
      v('Rabbit', '🐇', 'Coelho', '/ˈræb.ɪt/', 'The white rabbit has long ears.'),
      v('Bird', '🐦', 'Pássaro', '/bɜːrd/', 'A blue bird perches on the branch.'),
      v('Fish', '🐟', 'Peixe', '/fɪʃ/', 'The fish swims in clear water.'),
      v('Mouse', '🐁', 'Rato / Camundongo', '/maʊs/', 'The small mouse runs very fast.'),
      v('Goat', '🐐', 'Cabra / Bode', '/ɡoʊt/', 'Mountain goats climb steep rocks.'),
      v('Donkey', '🫏', 'Burro / Jegue', '/ˈdɑːŋ.ki/', 'The strong donkey carries heavy loads.'),
      v('Turkey', '🦃', 'Peru', '/ˈtɜːr.ki/', 'The wild turkey has large tail feathers.'),
      v('Goose', '🪿', 'Ganso', '/ɡuːs/', 'A white goose walks near the pond.'),
      v('Hamster', '🐹', 'Hamster', '/ˈhæm.stər/', 'The golden hamster stores seeds in its cheeks.'),
      v('Parrot', '🦜', 'Papagaio', '/ˈpær.ət/', 'The colorful parrot can mimic human speech.'),
      v('Turtle', '🐢', 'Tartaruga', '/ˈtɜːr.təl/', 'The turtle carries a hard shell on its back.'),
      v('Bull', '🐂', 'Touro', '/bʊl/', 'The muscular bull has strong horns.'),
      v('Rooster', '🐓', 'Galo', '/ˈruː.stər/', 'The rooster crows at sunrise.'),
      v('Camel', '🐪', 'Camelo', '/ˈkæm.əl/', 'Camels cross the dry desert.'),
      v('Llama', '🦙', 'Lhama', '/ˈlɑː.mə/', 'Llamas live high in the Andes mountains.'),
      v('Swan', '🦢', 'Cisne', '/swɑːn/', 'The graceful white swan glides on the water.'),
      v('Peacock', '🦚', 'Pavão', '/ˈpiː.kɑːk/', 'The peacock opens its brilliant tail feathers.'),
      v('Dove', '🕊️', 'Pomba', '/dʌv/', 'The white dove is a symbol of peace.'),
      v('Water Buffalo', '🐃', 'Búfalo', '/ˈwɔː.tər ˈbʌf.ə.loʊ/', 'Water buffaloes cool off in the mud.'),
      v('Ram', '🐏', 'Carneiro', '/ræm/', 'The mountain ram has curved horns.'),
      v('Hedgehog', '🦔', 'Ouriço', '/ˈhedʒ.hɔːɡ/', 'The little hedgehog is covered in spines.'),
      v('Bison', '🦬', 'Bisão', '/ˈbaɪ.sən/', 'Wild bison roam the northern plains.'),
    ]
  },
  {
    phaseNumber: 6,
    title: 'Animais & Natureza II: Selvagens & Floresta',
    subtitle: 'Módulo 2/4 • 30 animais selvagens de corpo inteiro',
    pedagogicalObjective: 'Identificar grandes mamíferos e animais selvagens da selva, savana e floresta.',
    icon: 'dog',
    theory: [
      'Agora exploramos os 30 animais selvagens mais conhecidos do planeta.',
      'Leão (Lion), Tigre (Tiger), Elefante (Elephant), Urso (Bear) e Girafa (Giraffe) têm ilustrações completas.',
      'Observe os sons das vogais em Bear (/ber/), Deer (/dɪr/) e Wolf (/wʊlf/).'
    ],
    items: [
      v('Lion', '🦁', 'Leão', '/ˈlaɪ.ən/', 'The majestic lion is the king of the savanna.'),
      v('Tiger', '🐅', 'Tigre', '/ˈtaɪ.ɡər/', 'The striped tiger hunts in the jungle.'),
      v('Elephant', '🐘', 'Elefante', '/ˈel.ɪ.fənt/', 'The elephant has a long trunk and big ears.'),
      v('Bear', '🐻', 'Urso', '/ber/', 'The brown bear catches fish in the river.'),
      v('Monkey', '🐒', 'Macaco', '/ˈmʌŋ.ki/', 'The agile monkey climbs tall trees.'),
      v('Giraffe', '🦒', 'Girafa', '/dʒɪˈræf/', 'The giraffe has a very long neck.'),
      v('Zebra', '🦓', 'Zebra', '/ˈziː.brə/', 'Every zebra has unique black and white stripes.'),
      v('Wolf', '🐺', 'Lobo', '/wʊlf/', 'The gray wolf howls at the full moon.'),
      v('Fox', '🦊', 'Raposa', '/fɑːks/', 'The clever red fox has a bushy tail.'),
      v('Deer', '🦌', 'Cervo / Veado', '/dɪr/', 'The deer leaps gracefully through the forest.'),
      v('Panda', '🐼', 'Urso Panda', '/ˈpæn.də/', 'Giant pandas eat bamboo all day.'),
      v('Koala', '🐨', 'Coala', '/koʊˈɑː.lə/', 'The koala sleeps in eucalyptus trees.'),
      v('Kangaroo', '🦘', 'Canguru', '/ˌkæŋ.ɡəˈruː/', 'Kangaroos jump high across Australia.'),
      v('Gorilla', '🦍', 'Gorila', '/ɡəˈrɪl.ə/', 'The strong gorilla lives in the tropical forest.'),
      v('Hippopotamus', '🦛', 'Hipopótamo', '/ˌhɪp.əˈpɑː.tə.məs/', 'The hippopotamus spends hours in the river.'),
      v('Rhinoceros', '🦏', 'Rinoceronte', '/raɪˈnɑː.sər.əs/', 'The rhinoceros has a thick horn on its nose.'),
      v('Leopard', '🐆', 'Leopardo', '/ˈlep.ərd/', 'The spotted leopard runs at tremendous speed.'),
      v('Squirrel', '🐿️', 'Esquilo', '/ˈskwɜːr.əl/', 'The squirrel gathers acorns for winter.'),
      v('Bat', '🦇', 'Morcego', '/bæt/', 'Bats fly in the night using echolocation.'),
      v('Raccoon', '🦝', 'Guaxinim', '/ræˈkuːn/', 'The raccoon has a dark mask around its eyes.'),
      v('Sloth', '🦥', 'Bicho-preguiça', '/slɔːθ/', 'The sloth moves very slowly in the trees.'),
      v('Otter', '🦦', 'Lontra', '/ˈɑː.tər/', 'Playful river otters swim on their backs.'),
      v('Beaver', '🦫', 'Castor', '/ˈbiː.vər/', 'Beavers build wooden dams across streams.'),
      v('Skunk', '🦨', 'Gambá', '/skʌŋk/', 'A skunk has a black coat with a white stripe.'),
      v('Badger', '🦡', 'Texugo', '/ˈbædʒ.ər/', 'The badger digs deep burrows underground.'),
      v('Orangutan', '🦧', 'Orangotango', '/əˈræŋ.ə.tæn/', 'Orangutans have long reddish-brown hair.'),
      v('Boar', '🐗', 'Javali', '/bɔːr/', 'The wild boar searches for roots in the woods.'),
      v('Chipmunk', '🐿️', 'Tâmia / Esquilo-listrado', '/ˈtʃɪp.mʌŋk/', 'The small chipmunk has stripes on its back.'),
      v('Mammoth', '🦣', 'Mamute', '/ˈmæm.əθ/', 'Woolly mammoths lived during the Ice Age.'),
      v('Moose', '🫎', 'Alce', '/muːs/', 'The giant moose has wide antlers.'),
    ]
  },
  {
    phaseNumber: 7,
    title: 'Animais & Natureza III: Marinhos, Aves & Répteis',
    subtitle: 'Módulo 3/4 • 30 criaturas do oceano, céu e pântano',
    pedagogicalObjective: 'Dominar o vocabulário de animais aquáticos, aves de rapina, répteis e insetos.',
    icon: 'dog',
    theory: [
      'Neste terceiro módulo de animais, mergulhamos nos oceanos e voamos pelos céus.',
      'Preste atenção na pronúncia de Shark (/ʃɑːrk/), Whale (/weɪl/) e Eagle (/ˈiː.ɡəl/).',
      'Repare como cada espécie possui traços visuais claros para associação imediata.'
    ],
    items: [
      v('Shark', '🦈', 'Tubarão', '/ʃɑːrk/', 'The great white shark swims in the deep ocean.'),
      v('Whale', '🐋', 'Baleia', '/weɪl/', 'The blue whale is the largest animal on Earth.'),
      v('Dolphin', '🐬', 'Golfinho', '/ˈdɑːl.fɪn/', 'Intelligent dolphins leap out of the waves.'),
      v('Snake', '🐍', 'Cobra / Serpente', '/sneɪk/', 'The green snake slithers through the grass.'),
      v('Frog', '🐸', 'Sapo / Rã', '/frɔːɡ/', 'The green frog jumps onto a lily pad.'),
      v('Eagle', '🦅', 'Águia', '/ˈiː.ɡəl/', 'The eagle soars high above the mountains.'),
      v('Owl', '🦉', 'Coruja', '/aʊl/', 'The wise owl hunts quietly at night.'),
      v('Penguin', '🐧', 'Pinguim', '/ˈpeŋ.ɡwɪn/', 'Penguins live on the icy coast of Antarctica.'),
      v('Octopus', '🐙', 'Polvo', '/ˈɑːk.tə.pəs/', 'An octopus has eight flexible arms.'),
      v('Crab', '🦀', 'Caranguejo', '/kræb/', 'The red crab walks sideways on the sand.'),
      v('Butterfly', '🦋', 'Borboleta', '/ˈbʌt.ər.flaɪ/', 'A colorful butterfly lands on the flower.'),
      v('Bee', '🐝', 'Abelha', '/biː/', 'Busy bees make sweet golden honey.'),
      v('Ant', '🐜', 'Formiga', '/ænt/', 'Tiny ants work together in a colony.'),
      v('Spider', '🕷️', 'Aranha', '/ˈspaɪ.dər/', 'The spider spins a delicate silk web.'),
      v('Crocodile', '🐊', 'Crocodilo / Jacaré', '/ˈkrɑː.kə.daɪl/', 'The crocodile waits near the riverbank.'),
      v('Lizard', '🦎', 'Lagarto / Lagartixa', '/ˈlɪz.ərd/', 'A small lizard warms itself on a sunny rock.'),
      v('Snail', '🐌', 'Caracol', '/sneɪl/', 'The garden snail moves very slowly.'),
      v('Ladybug', '🐞', 'Joaninha', '/ˈleɪ.di.bʌɡ/', 'A red ladybug with black spots.'),
      v('Flamingo', '🦩', 'Flamingo', '/fləˈmɪŋ.ɡoʊ/', 'Pink flamingos stand on one leg in the lagoon.'),
      v('Seal', '🦭', 'Foca', '/siːl/', 'The seal claps its flippers on the ice.'),
      v('Jellyfish', '🪼', 'Água-viva', '/ˈdʒel.i.fɪʃ/', 'Glowing jellyfish float with the ocean current.'),
      v('Lobster', '🦞', 'Lagosta', '/ˈlɑːb.stər/', 'A large red lobster with strong claws.'),
      v('Squid', '🦑', 'Lula', '/skwɪd/', 'The giant squid lives in deep waters.'),
      v('Blowfish', '🐡', 'Baiacu', '/ˈbloʊ.fɪʃ/', 'The blowfish puffs up like a spiky ball.'),
      v('Tropical Fish', '🐠', 'Peixe-palhaço / Tropical', '/ˈtrɑː.pɪ.kəl fɪʃ/', 'Bright tropical fish swim around the coral.'),
      v('Coral', '🪸', 'Coral', '/ˈkɔːr.əl/', 'Colorful coral reefs protect marine life.'),
      v('Scorpion', '🦂', 'Escorpião', '/ˈskɔːr.pi.ən/', 'A desert scorpion curls its tail.'),
      v('Mosquito', '🦟', 'Mosquito / Pernilongo', '/məˈskiː.toʊ/', 'Use a net to keep mosquitoes away.'),
      v('Cricket', '🦗', 'Grilo', '/ˈkrɪk.ɪt/', 'Crickets chirp on warm summer nights.'),
      v('Beetle', '🪲', 'Besouro', '/ˈbiː.təl/', 'The shiny green beetle crawls on a leaf.'),
    ]
  },
  {
    phaseNumber: 8,
    title: 'Animais & Natureza IV: Ecossistemas & Clima',
    subtitle: 'Módulo 4/4 • 30 elementos da natureza, plantas e clima',
    pedagogicalObjective: 'Dominar o vocabulário de árvores, flores, fenômenos climáticos e relevo natural.',
    icon: 'sun',
    theory: [
      'Concluímos a categoria Natureza com 30 elementos essenciais de paisagens, plantas e clima.',
      'Pratique a pronúncia de Mountain (/ˈmaʊn.tən/), Island (/ˈaɪ.lənd/) — onde o S é mudo! — e Rainbow (/ˈreɪn.boʊ/).',
      'Acerte todos para liberar os módulos de Objetos da Casa!'
    ],
    items: [
      v('Tree', '🌳', 'Árvore', '/triː/', 'A tall oak tree gives cool shade.'),
      v('Flower', '🌸', 'Flor', '/ˈflaʊ.ər/', 'The pink flower blooms in spring.'),
      v('Sun', '☀️', 'Sol', '/sʌn/', 'The bright sun shines in the sky.'),
      v('Moon', '🌙', 'Lua', '/muːn/', 'The silver moon glows at night.'),
      v('Star', '⭐', 'Estrela', '/stɑːr/', 'Thousands of stars twinkle in the dark sky.'),
      v('Cloud', '☁️', 'Nuvem', '/klaʊd/', 'White fluffy clouds float overhead.'),
      v('Rain', '🌧️', 'Chuva', '/reɪn/', 'Gentle rain waters the garden.'),
      v('Snow', '❄️', 'Neve', '/snoʊ/', 'Soft white snow covers the ground.'),
      v('Fire', '🔥', 'Fogo', '/ˈfaɪ.ər/', 'The warm campfire crackles at night.'),
      v('Mountain', '⛰️', 'Montanha', '/ˈmaʊn.tən/', 'They climbed to the top of the mountain.'),
      v('Beach', '🏖️', 'Praia', '/biːtʃ/', 'We walked barefoot on the sandy beach.'),
      v('Ocean Wave', '🌊', 'Onda do mar', '/ˈoʊ.ʃən weɪv/', 'Surfers ride the high ocean waves.'),
      v('Rainbow', '🌈', 'Arco-íris', '/ˈreɪn.boʊ/', 'A colorful rainbow appeared after the rain.'),
      v('Wind', '💨', 'Vento', '/wɪnd/', 'The autumn wind blows the leaves.'),
      v('Lightning', '⚡', 'Raio / Relâmpago', '/ˈlaɪt.nɪŋ/', 'A flash of lightning lit up the storm.'),
      v('Rose', '🌹', 'Rosa', '/roʊz/', 'He gave her a red rose.'),
      v('Sunflower', '🌻', 'Girassol', '/ˈsʌnˌflaʊ.ər/', 'Sunflowers turn toward the sun.'),
      v('Palm Tree', '🌴', 'Palmeira / Coqueiro', '/ˈpɑːm triː/', 'Palm trees sway in the tropical breeze.'),
      v('Pine Tree', '🌲', 'Pinheiro', '/ˈpaɪn triː/', 'Evergreen pine trees stay green all year.'),
      v('Cactus', '🌵', 'Cacto', '/ˈkæk.təs/', 'A cactus stores water in the dry desert.'),
      v('Leaf', '🍃', 'Folha', '/liːf/', 'A green leaf fell from the branch.'),
      v('Maple Leaf', '🍁', 'Folha de outono (Bordo)', '/ˈmeɪ.pəl liːf/', 'Red maple leaves fall in autumn.'),
      v('Island', '🏝️', 'Ilha', '/ˈaɪ.lənd/', 'A peaceful tropical island surrounded by sea.'),
      v('Volcano', '🌋', 'Vulcão', '/vɑːlˈkeɪ.noʊ/', 'Smoke rises from the active volcano.'),
      v('Desert', '🏜️', 'Deserto', '/ˈdez.ərt/', 'The desert is hot during the day.'),
      v('Tornado', '🌪️', 'Tornado / Furacão', '/tɔːrˈneɪ.doʊ/', 'A strong tornado spins across the plain.'),
      v('Fog', '🌫️', 'Neblina / Nevoeiro', '/fɔːɡ/', 'Thick morning fog covered the bridge.'),
      v('Comet', '☄️', 'Cometa', '/ˈkɑː.mɪt/', 'A bright comet streaked across space.'),
      v('Planet', '🪐', 'Planeta', '/ˈplæn.ɪt/', 'Saturn is a planet with beautiful rings.'),
      v('Earth', '🌍', 'Planeta Terra', '/ɜːrθ/', 'Earth is our home in the solar system.'),
    ]
  },

  // ==========================================================================
  // CATEGORIA 3: CASA, MÓVEIS & OBJETOS DO LAR (4 MÓDULOS DE 30 ITENS)
  // ==========================================================================
  {
    phaseNumber: 9,
    title: 'Casa & Objetos I: Móveis & Quarto',
    subtitle: 'Módulo 1/4 • 30 móveis e itens de quarto com ilustrações reais',
    pedagogicalObjective: 'Reconhecer móveis e objetos de casa com ilustrações vetoriais fiéis (Mesa, Cadeira, Travesseiro, Cama, Sofá).',
    icon: 'house',
    theory: [
      'Cadeira (Chair /tʃer/), Mesa (Table /ˈteɪ.bəl/) e Travesseiro (Pillow /ˈpɪl.oʊ/) possuem ilustrações vetoriais dedicadas e pronúncia limpa.',
      'Estude os 30 itens da sala e do quarto do mais comum ao menos comum.',
      'Lembre-se: você só avança ao final quando dominar 100% dos itens!'
    ],
    items: [
      v('Bed', '🛏️', 'Cama', '/bed/', 'I sleep in a comfortable wooden bed.'),
      v('Chair', '🪑', 'Cadeira', '/tʃer/', 'Please sit down on this wooden chair.'),
      v('Table', '🪑', 'Mesa', '/ˈteɪ.bəl/', 'Dinner is ready on the dining table.'),
      v('Door', '🚪', 'Porta', '/dɔːr/', 'Please close the front door.'),
      v('Window', '🪟', 'Janela', '/ˈwɪn.doʊ/', 'Open the window to let the sunlight in.'),
      v('Sofa', '🛋️', 'Sofá', '/ˈsoʊ.fə/', 'The family sits together on the living room sofa.'),
      v('Pillow', '⬜', 'Travesseiro', '/ˈpɪl.oʊ/', 'I rest my head on a soft white pillow.'),
      v('Blanket', '🛌', 'Cobertor', '/ˈblæŋ.kɪt/', 'A warm wool blanket for cold nights.'),
      v('Lamp', '💡', 'Lâmpada / Abajur', '/læmp/', 'Turn on the reading lamp by the desk.'),
      v('Mirror', '🪞', 'Espelho', '/ˈmɪr.ər/', 'He looked at himself in the bedroom mirror.'),
      v('Clock', '⏰', 'Relógio / Despertador', '/klɑːk/', 'The alarm clock rings at seven in the morning.'),
      v('Key', '🔑', 'Chave', '/kiː/', 'Keep your house key in your pocket.'),
      v('Wardrobe', '🚪', 'Guarda-roupa', '/ˈwɔːr.droʊb/', 'Hang your coats inside the wooden wardrobe.'),
      v('Bookshelf', '📚', 'Estante de livros', '/ˈbʊk.ʃelf/', 'The bookshelf is organized by topic.'),
      v('Rug', '🟥', 'Tapete', '/rʌɡ/', 'A soft woven rug on the living room floor.'),
      v('Curtain', '🪟', 'Cortina', '/ˈkɜːr.tən/', 'Draw the red curtains to block the sun.'),
      v('Picture Frame', '🖼️', 'Quadro / Porta-retrato', '/ˈpɪk.tʃər freɪm/', 'A colorful painting hangs in a picture frame.'),
      v('Candle', '🕯️', 'Vela', '/ˈkæn.dəl/', 'A scented candle burns on the table.'),
      v('Plant Pot', '🪴', 'Vaso de planta', '/ˈplænt pɑːt/', 'Water the green fern in the plant pot.'),
      v('Lock', '🔒', 'Cadeado / Fechadura', '/lɑːk/', 'Make sure the gate lock is closed.'),
      v('Bell', '🔔', 'Campainha / Sino', '/bel/', 'Ring the front door bell.'),
      v('Flashlight', '🔦', 'Lanterna', '/ˈflæʃ.laɪt/', 'Use a flashlight when the power goes out.'),
      v('Battery', '🔋', 'Pilha / Bateria', '/ˈbæt.ər.i/', 'The remote control needs a new battery.'),
      v('Electric Plug', '🔌', 'Tomada / Plugue', '/ɪˈlek.trɪk plʌɡ/', 'Insert the electric plug into the wall socket.'),
      v('Trash Can', '🗑️', 'Lixeira / Cesto de lixo', '/ˈtræʃ kæn/', 'Throw the paper into the trash can.'),
      v('Box', '📦', 'Caixa', '/bɑːks/', 'Pack the old toys into a cardboard box.'),
      v('Basket', '🧺', 'Cesto / Cesta', '/ˈbæs.kɪt/', 'Put the clean laundry in the wicker basket.'),
      v('Ladder', '🪜', 'Escada portátil', '/ˈlæd.ər/', 'Climb the ladder carefully to reach the roof.'),
      v('Fire Extinguisher', '🧯', 'Extintor de incêndio', '/ˈfaɪ.ər ɪkˌstɪŋ.ɡwɪ.ʃər/', 'A red fire extinguisher hangs in the hallway.'),
      v('Hourglass', '⏳', 'Ampulheta', '/ˈaʊr.ɡlæs/', 'Sand flows slowly through the glass hourglass.'),
    ]
  },
  {
    phaseNumber: 10,
    title: 'Casa & Objetos II: Cozinha, Louças & Eletros',
    subtitle: 'Módulo 2/4 • 30 utensílios e eletrodomésticos do dia a dia',
    pedagogicalObjective: 'Dominar o vocabulário de utensílios de mesa, panelas e eletrodomésticos de cozinha.',
    icon: 'house',
    theory: [
      'A cozinha é um dos ambientes mais ricos em vocabulário prático.',
      'Geladeira (Fridge /frɪdʒ/), Fogão (Stove /stoʊv/) e Micro-ondas (Microwave /ˈmaɪ.krə.weɪv/) possuem ilustrações exclusivas.',
      'Pratique a pronúncia de Knife (/naɪf/) — onde a letra K inicial é muda!'
    ],
    items: [
      v('Plate', '🍽️', 'Prato', '/pleɪt/', 'Put the warm food on a clean plate.'),
      v('Cup', '☕', 'Xícara', '/kʌp/', 'A porcelain cup of hot coffee.'),
      v('Glass', '🥛', 'Copo de vidro', '/ɡlæs/', 'Pour cold water into the tall glass.'),
      v('Fork', '🍴', 'Garfo', '/fɔːrk/', 'Use a fork to eat your pasta.'),
      v('Knife', '🔪', 'Faca', '/naɪf/', 'The chef uses a sharp kitchen knife.'),
      v('Spoon', '🥄', 'Colher', '/spuːn/', 'Stir the soup with a silver spoon.'),
      v('Fridge', '🧊', 'Geladeira', '/frɪdʒ/', 'Keep the milk cold inside the fridge.'),
      v('Stove', '🔥', 'Fogão', '/stoʊv/', 'Boil the water on the kitchen stove.'),
      v('Microwave', '⏲️', 'Micro-ondas', '/ˈmaɪ.krə.weɪv/', 'Heat the lunch for one minute in the microwave.'),
      v('Frying Pan', '🍳', 'Frigideira', '/ˈfraɪ.ɪŋ pæn/', 'Fry the eggs in a non-stick frying pan.'),
      v('Cooking Pot', '🍲', 'Panela', '/ˈkʊk.ɪŋ pɑːt/', 'Simmer the beans in a large cooking pot.'),
      v('Bowl', '🥣', 'Tigela / Cumbuca', '/boʊl/', 'A ceramic bowl of morning cereal.'),
      v('Bottle', '🍾', 'Garrafa', '/ˈbɑː.təl/', 'A glass bottle of sparkling water.'),
      v('Washing Machine', '🫧', 'Máquina de lavar', '/ˈwɑː.ʃɪŋ məˌʃiːn/', 'Put the dirty clothes in the washing machine.'),
      v('Chopsticks', '🥢', 'Hashi (Palitinhos)', '/ˈtʃɑːp.stɪks/', 'They eat sushi using wooden chopsticks.'),
      v('Salt Shaker', '🧂', 'Saleiro', '/ˈsɔːlt ˌʃeɪ.kər/', 'Pass the salt shaker across the table.'),
      v('Jar', '🫙', 'Pote de vidro', '/dʒɑːr/', 'Store homemade jam in a glass jar.'),
      v('Tin Can', '🥫', 'Lata de conserva', '/ˈtɪn kæn/', 'Open a tin can of tomato sauce.'),
      v('Cooler', '🧊', 'Caixa térmica', '/ˈkuː.lər/', 'Pack cold drinks in the beach cooler.'),
      v('Drinking Straw', '🥤', 'Canudo', '/ˈdrɪŋ.kɪŋ strɔː/', 'Sip the juice through a paper drinking straw.'),
      v('Spout Kettle', '🫖', 'Chaleira', '/ˈspaʊt ˈket.əl/', 'The kettle whistles when the water boils.'),
      v('Cutting Board', '🪵', 'Tábua de corte', '/ˈkʌt.ɪŋ bɔːrd/', 'Chop vegetables on a wooden cutting board.'),
      v('Scale', '⚖️', 'Balança', '/skeɪl/', 'Weigh the flour on the kitchen scale.'),
      v('Funnel', '🔻', 'Funil', '/ˈfʌn.əl/', 'Use a funnel to pour oil into the bottle.'),
      v('Sponge', '🧽', 'Esponja de pia', '/spʌndʒ/', 'Wash the dishes with soap and a yellow sponge.'),
      v('Broom', '🧹', 'Vassoura', '/bruːm/', 'Sweep the kitchen floor with a broom.'),
      v('Bucket', '🪣', 'Balde', '/ˈbʌk.ɪt/', 'Fill the plastic bucket with warm water.'),
      v('Plunger', '🪠', 'Desentupidor', '/ˈplʌn.dʒər/', 'Use a rubber plunger to clear the drain.'),
      v('Mousetrap', '🪤', 'Ratoeira', '/ˈmaʊs.træp/', 'Set a mousetrap in the old barn.'),
      v('Amphora', '🏺', 'Vasija / Ânfora de cerâmica', '/ˈæm.fər.ə/', 'Ancient olive oil was kept in a clay amphora.'),
    ]
  },
  {
    phaseNumber: 11,
    title: 'Casa & Objetos III: Higiene, Saúde & Estudos',
    subtitle: 'Módulo 3/4 • 30 objetos de higiene pessoal e material escolar',
    pedagogicalObjective: 'Reconhecer itens de banheiro, cuidados pessoais, papelaria e material de escritório.',
    icon: 'book',
    theory: [
      'Neste módulo reunimos os 30 objetos mais importantes de higiene, saúde e estudos.',
      'Observe palavras compostas muito úteis como Toothbrush (/ˈtuːθ.brʌʃ/) e Notebook (/ˈnoʊt.bʊk/).',
      'Ouça cada palavra ao abrir o exercício e use o botão 0.65x se quiser ouvir sílaba por sílaba.'
    ],
    items: [
      v('Book', '📘', 'Livro', '/bʊk/', 'Read a chapter of your favorite book every night.'),
      v('Pen', '🖊️', 'Caneta', '/pen/', 'Sign the document with a blue ink pen.'),
      v('Pencil', '✏️', 'Lápis', '/ˈpen.səl/', 'Draw a sketch with a wooden pencil.'),
      v('Notebook', '📓', 'Caderno', '/ˈnoʊt.bʊk/', 'Write the new vocabulary in your notebook.'),
      v('Backpack', '🎒', 'Mochila', '/ˈbæk.pæk/', 'Carry your school books in a backpack.'),
      v('Scissors', '✂️', 'Tesoura', '/ˈsɪz.ərz/', 'Cut the paper along the line with scissors.'),
      v('Soap', '🧼', 'Sabonete / Sabão', '/soʊp/', 'Wash your hands with warm water and soap.'),
      v('Toothbrush', '🪥', 'Escova de dentes', '/ˈtuːθ.brʌʃ/', 'Brush your teeth with a soft toothbrush.'),
      v('Shower', '🚿', 'Chuveiro', '/ˈʃaʊ.ər/', 'Take a refreshing warm shower.'),
      v('Bathtub', '🛁', 'Banheira', '/ˈbæθ.tʌb/', 'Fill the bathtub with warm water and bubbles.'),
      v('Toilet', '🚽', 'Vaso sanitário', '/ˈtɔɪ.lət/', 'Clean the bathroom toilet regularly.'),
      v('Toilet Paper', '🧻', 'Papel higiênico', '/ˈtɔɪ.lət ˈpeɪ.pər/', 'Put a new roll of toilet paper in the holder.'),
      v('Lotion', '🧴', 'Loção / Xampu', '/ˈloʊ.ʃən/', 'Apply sunscreen lotion before going outside.'),
      v('Razor', '🪒', 'Lâmina de barbear', '/ˈreɪ.zər/', 'Shave carefully with a clean safety razor.'),
      v('Lipstick', '💄', 'Batom', '/ˈlɪp.stɪk/', 'She wore bright red lipstick to the party.'),
      v('Ruler', '📏', 'Régua', '/ˈruː.lər/', 'Measure the line with a plastic ruler.'),
      v('Paperclip', '📎', 'Clipe de papel', '/ˈpeɪ.pər.klɪp/', 'Hold the pages together with a metal paperclip.'),
      v('Pushpin', '📌', 'Tachinha / Alfinete', '/ˈpʊʃ.pɪn/', 'Pin the note to the board with a red pushpin.'),
      v('Envelope', '✉️', 'Envelope / Carta', '/ˈen.və.loʊp/', 'Put the letter inside a white envelope.'),
      v('Calendar', '📅', 'Calendário', '/ˈkæl.ən.dər/', 'Circle the date on the wall calendar.'),
      v('Newspaper', '📰', 'Jornal', '/ˈnuːzˌpeɪ.pər/', 'He reads the morning newspaper with coffee.'),
      v('Folder', '📁', 'Pasta de arquivos', '/ˈfoʊl.dər/', 'Organize your documents inside a yellow folder.'),
      v('Clipboard', '📋', 'Prancheta', '/ˈklɪp.bɔːrd/', 'The coach holds a checklist on a clipboard.'),
      v('Paintbrush', '🖌️', 'Pincel', '/ˈpeɪnt.brʌʃ/', 'Dip the paintbrush into the blue paint.'),
      v('Crayon', '🖍️', 'Giz de cera', '/ˈkreɪ.ɑːn/', 'Children color pictures with wax crayons.'),
      v('Magnifying Glass', '🔍', 'Lupa', '/ˈmæɡ.nə.faɪ.ɪŋ ɡlæs/', 'Examine the tiny stamp with a magnifying glass.'),
      v('Pill', '💊', 'Comprimido / Remédio', '/pɪl/', 'Take the vitamin pill with a glass of water.'),
      v('Bandage', '🩹', 'Curativo / Band-aid', '/ˈbæn.dɪdʒ/', 'Put an adhesive bandage on the small cut.'),
      v('Syringe', '💉', 'Seringa / Vacina', '/səˈrɪndʒ/', 'The nurse prepared the vaccine syringe.'),
      v('Stethoscope', '🩺', 'Estetoscópio', '/ˈsteθ.ə.skoʊp/', 'The doctor listens to your heart with a stethoscope.'),
    ]
  },
  {
    phaseNumber: 12,
    title: 'Casa & Objetos IV: Eletrônicos, Ferramentas & Música',
    subtitle: 'Módulo 4/4 • 30 equipamentos, ferramentas e instrumentos',
    pedagogicalObjective: 'Dominar o vocabulário de tecnologia, ferramentas de reparo e instrumentos musicais.',
    icon: 'house',
    theory: [
      'Fechamos os 4 módulos de Objetos com tecnologia, ferramentas e música.',
      'Palavras como Wrench (/rentʃ/) e Hammer (/ˈhæm.ər/) são indispensáveis no vocabulário prático.',
      'Conclua com 100% de acerto para avançar aos módulos de Lugares da Cidade!'
    ],
    items: [
      v('Phone', '📱', 'Celular / Telefone', '/foʊn/', 'I sent a text message on my mobile phone.'),
      v('Computer', '💻', 'Computador / Notebook', '/kəmˈpjuː.tər/', 'She works from home on her laptop computer.'),
      v('Television', '📺', 'Televisão', '/ˈtel.ə.vɪʒ.ən/', 'We watched a movie on the living room television.'),
      v('Camera', '📷', 'Câmera fotográfica', '/ˈkæm.rə/', 'Take a family photo with the digital camera.'),
      v('Headphones', '🎧', 'Fones de ouvido', '/ˈhed.foʊnz/', 'Put on your headphones to listen to the English audio.'),
      v('Microphone', '🎤', 'Microfone', '/ˈmaɪ.krə.foʊn/', 'Speak clearly into the studio microphone.'),
      v('Keyboard', '⌨️', 'Teclado', '/ˈkiː.bɔːrd/', 'Type the password on the computer keyboard.'),
      v('Computer Mouse', '🖱️', 'Mouse de computador', '/kəmˈpjuː.tər maʊs/', 'Click the icon using the wireless computer mouse.'),
      v('Printer', '🖨️', 'Impressora', '/ˈprɪn.tər/', 'Print two copies of the ticket on the printer.'),
      v('Radio', '📻', 'Rádio', '/ˈreɪ.di.oʊ/', 'Listen to the morning news on the radio.'),
      v('Hammer', '🔨', 'Martelo', '/ˈhæm.ər/', 'Use a hammer to drive the nail into the wood.'),
      v('Wrench', '🔧', 'Chave inglesa / Grifo', '/rentʃ/', 'Tighten the metal bolt with a wrench.'),
      v('Screwdriver', '🪛', 'Chave de fenda', '/ˈskruːˌdraɪ.vər/', 'Turn the screw with a flathead screwdriver.'),
      v('Saw', '🪚', 'Serrote / Serra', '/sɔː/', 'Cut the wooden plank with a hand saw.'),
      v('Axe', '🪓', 'Machado', '/æks/', 'Split firewood logs with a sharp axe.'),
      v('Pickaxe', '⛏️', 'Picareta', '/ˈpɪk.æks/', 'Miners break hard rock with a pickaxe.'),
      v('Nut and Bolt', '🔩', 'Porca e parafuso', '/ˈnʌt ənd boʊlt/', 'Fasten the steel plate with a nut and bolt.'),
      v('Gear', '⚙️', 'Engrenagem', '/ɡɪr/', 'The metal gears turn inside the machine.'),
      v('Chain', '⛓️', 'Corrente', '/tʃeɪn/', 'Secure the heavy gate with an iron chain.'),
      v('Hook', '🪝', 'Gancho', '/hʊk/', 'Hang your wet coat on the wall hook.'),
      v('Magnet', '🧲', 'Ímã', '/ˈmæɡ.nət/', 'A horseshoe magnet attracts iron nails.'),
      v('Telescope', '🔭', 'Telescópio', '/ˈtel.ə.skoʊp/', 'Look at the craters of the moon through a telescope.'),
      v('Microscope', '🔬', 'Microscópio', '/ˈmaɪ.krə.skoʊp/', 'Scientists study tiny cells under a microscope.'),
      v('Guitar', '🎸', 'Violão / Guitarra', '/ɡɪˈtɑːr/', 'He plays acoustic guitar around the campfire.'),
      v('Piano', '🎹', 'Piano / Teclado musical', '/piˈæn.oʊ/', 'She practices classical music on the grand piano.'),
      v('Drum', '🥁', 'Tambor / Bateria', '/drʌm/', 'Keep the rhythm on the snare drum.'),
      v('Violin', '🎻', 'Violino', '/ˌvaɪ.əˈlɪn/', 'The violinist played a beautiful melody on the violin.'),
      v('Trumpet', '🎺', 'Trompete', '/ˈtrʌm.pɪt/', 'The jazz musician plays a brass trumpet.'),
      v('Saxophone', '🎷', 'Saxofone', '/ˈsæk.sə.foʊn/', 'A smooth solo on the golden saxophone.'),
      v('Accordion', '🪗', 'Acordeão / Sanfona', '/əˈkɔːr.di.ən/', 'Traditional folk music played on an accordion.'),
    ]
  },

  // ==========================================================================
  // CATEGORIA 4: LUGARES DA CIDADE, TRANSPORTES & VIDA COTIDIANA (4 MÓDULOS)
  // ==========================================================================
  {
    phaseNumber: 13,
    title: 'Cidade & Cotidiano I: Comércio & Lugares',
    subtitle: 'Módulo 1/4 • 30 estabelecimentos e prédios reais da cidade',
    pedagogicalObjective: 'Identificar estabelecimentos comerciais e prédios públicos pela fachada real (Livraria, Padaria, Farmácia, Supermercado).',
    icon: 'map',
    theory: [
      'Livraria (Bookstore), Padaria (Bakery), Farmácia (Pharmacy) e Supermercado (Supermarket) exibem a fachada real do comércio com vitrines detalhadas!',
      'Nenhum nome em inglês aparece na placa antes de você responder.',
      'Domine os 30 lugares da cidade do mais comum ao menos comum.'
    ],
    items: [
      v('House', '🏠', 'Casa', '/haʊs/', 'They live in a cozy house with a garden.'),
      v('School', '🏫', 'Escola', '/skuːl/', 'Children walk to school every morning.'),
      v('Hospital', '🏥', 'Hospital', '/ˈhɑː.spɪ.təl/', 'Doctors and nurses work at the city hospital.'),
      v('Supermarket', '🏪', 'Supermercado', '/ˈsuː.pərˌmɑːr.kɪt/', 'We buy fresh food and groceries at the supermarket.'),
      v('Bakery', '🏪', 'Padaria', '/ˈbeɪ.kər.i/', 'The neighborhood bakery sells warm bread and cakes.'),
      v('Bookstore', '🏪', 'Livraria', '/ˈbʊk.stɔːr/', 'I bought an English dictionary at the bookstore.'),
      v('Pharmacy', '🏪', 'Farmácia', '/ˈfɑːr.mə.si/', 'Pick up the medicine at the corner pharmacy.'),
      v('Restaurant', '🏪', 'Restaurante', '/ˈres.trɑːnt/', 'We had dinner at an Italian restaurant.'),
      v('Bank', '🏦', 'Banco', '/bæŋk/', 'Deposit the money at the downtown bank.'),
      v('Hotel', '🏨', 'Hotel', '/hoʊˈtel/', 'We booked a room at a comfortable hotel.'),
      v('Library', '🏛️', 'Biblioteca', '/ˈlaɪ.brer.i/', 'Students study quietly in the public library.'),
      v('Coffee Shop', '☕', 'Cafeteria', '/ˈkɔː.fi ʃɑːp/', 'Let us meet for espresso at the coffee shop.'),
      v('Post Office', '🏣', 'Correios', '/ˈpoʊst ˌɔː.fɪs/', 'Mail the package at the post office.'),
      v('Police Station', '🚓', 'Delegacia de polícia', '/pəˈliːs ˌsteɪ.ʃən/', 'Report the lost wallet at the police station.'),
      v('Fire Station', '🚒', 'Corpo de bombeiros', '/ˈfaɪ.ər ˌsteɪ.ʃən/', 'Red fire trucks are parked inside the fire station.'),
      v('Cinema', '🎬', 'Cinema', '/ˈsɪn.ə.mə/', 'We watched a new film at the cinema.'),
      v('Gym', '🏋️', 'Academia', '/dʒɪm/', 'She exercises at the fitness gym three times a week.'),
      v('Butcher Shop', '🥩', 'Açougue', '/ˈbʊtʃ.ər ʃɑːp/', 'Buy fresh steaks at the local butcher shop.'),
      v('Flower Shop', '💐', 'Floricultura', '/ˈflaʊ.ər ʃɑːp/', 'He bought a bouquet of roses at the flower shop.'),
      v('Clothing Store', '👕', 'Loja de roupas', '/ˈkloʊ.ðɪŋ stɔːr/', 'She tried on a winter coat at the clothing store.'),
      v('Shoe Store', '👟', 'Loja de calçados / Sapataria', '/ˈʃuː stɔːr/', 'He bought running sneakers at the shoe store.'),
      v('Barber Shop', '💈', 'Barbearia / Salão', '/ˈbɑːr.bər ʃɑːp/', 'Get a neat haircut at the barber shop.'),
      v('Pet Shop', '🐾', 'Pet shop / Loja de animais', '/ˈpet ʃɑːp/', 'Buy dog food and a collar at the pet shop.'),
      v('Toy Store', '🧸', 'Loja de brinquedos', '/ˈtɔɪ stɔːr/', 'The children loved the colorful display at the toy store.'),
      v('Hardware Store', '🧰', 'Loja de ferragens / Material de construção', '/ˈhɑːrd.wer stɔːr/', 'Buy paint and tools at the hardware store.'),
      v('Jewelry Store', '💎', 'Joalheria', '/ˈdʒuː.əl.ri stɔːr/', 'Gold rings sparkle in the window of the jewelry store.'),
      v('Laundromat', '🫧', 'Lavanderia', '/ˈlɔːn.drə.mæt/', 'Wash and dry your clothes at the self-service laundromat.'),
      v('Factory', '🏭', 'Fábrica / Indústria', '/ˈfæk.tər.i/', 'Cars are assembled inside the modern factory.'),
      v('Castle', '🏰', 'Castelo', '/ˈkæs.əl/', 'The medieval stone castle stands on the hill.'),
      v('Lighthouse', '🗼', 'Farol / Torre', '/ˈlaɪt.haʊs/', 'The coastal tower guides ships safely at night.'),
    ]
  },
  {
    phaseNumber: 14,
    title: 'Cidade & Cotidiano II: Transportes & Viagem',
    subtitle: 'Módulo 2/4 • 30 veículos e meios de transporte do comum ao incomum',
    pedagogicalObjective: 'Reconhecer todos os meios de transporte terrestres, aéreos, marítimos e infraestrutura.',
    icon: 'car',
    theory: [
      'Domine os 30 meios de transporte e elementos de tráfego urbano.',
      'Desde Car (/kɑːr/), Bus (/bʌs/) e Bicycle (/ˈbaɪ.sɪ.kəl/) até Helicopter (/ˈhel.ɪˌkɑːp.tər/) e Rocket (/ˈrɑː.kɪt/).',
      'Repare como cada veículo possui uma representação gráfica única.'
    ],
    items: [
      v('Car', '🚗', 'Carro', '/kɑːr/', 'Drive the red car carefully on the road.'),
      v('Bus', '🚌', 'Ônibus', '/bʌs/', 'Take the city bus to downtown.'),
      v('Bicycle', '🚲', 'Bicicleta', '/ˈbaɪ.sɪ.kəl/', 'Riding a bicycle is great exercise.'),
      v('Train', '🚆', 'Trem', '/treɪn/', 'The express train arrives at the platform on time.'),
      v('Airplane', '✈️', 'Avião', '/ˈer.pleɪn/', 'The commercial airplane flies above the clouds.'),
      v('Boat', '⛵', 'Barco a vela', '/boʊt/', 'A white sailboat glides across the bay.'),
      v('Ship', '🚢', 'Navio', '/ʃɪp/', 'The large passenger ship crosses the Atlantic Ocean.'),
      v('Motorcycle', '🏍️', 'Motocicleta / Moto', '/ˈmoʊ.tərˌsaɪ.kəl/', 'Always wear a helmet when riding a motorcycle.'),
      v('Truck', '🚚', 'Caminhão', '/trʌk/', 'The delivery truck carries fresh goods.'),
      v('Taxi', '🚕', 'Táxi', '/ˈtæk.si/', 'Hail a yellow taxi outside the station.'),
      v('Subway', '🚇', 'Metrô', '/ˈsʌb.weɪ/', 'The underground subway is fast during rush hour.'),
      v('Ambulance', '🚑', 'Ambulância', '/ˈæm.bjə.ləns/', 'Make way for the emergency ambulance.'),
      v('Fire Truck', '🚒', 'Caminhão de bombeiros', '/ˈfaɪ.ər trʌk/', 'The red fire truck has a long ladder.'),
      v('Police Car', '🚓', 'Viatura de polícia', '/pəˈliːs kɑːr/', 'The police car patrols the neighborhood.'),
      v('Helicopter', '🚁', 'Helicóptero', '/ˈhel.ɪˌkɑːp.tər/', 'The rescue helicopter hovered over the water.'),
      v('Tractor', '🚜', 'Trator', '/ˈtræk.tər/', 'The farmer plows the field with a green tractor.'),
      v('Scooter', '🛴', 'Patinete', '/ˈskuː.tər/', 'Kids ride kick scooters in the park.'),
      v('Motor Scooter', '🛵', 'Motoneta / Lambreta', '/ˈmoʊ.tər ˈskuː.tər/', 'A compact motor scooter is easy to park.'),
      v('Skateboard', '🛹', 'Skate', '/ˈskeɪt.bɔːrd/', 'He practiced tricks on his wooden skateboard.'),
      v('Roller Skate', '🛼', 'Patins', '/ˈroʊ.lər skeɪt/', 'She glides smoothly on four-wheel roller skates.'),
      v('Canoe', '🛶', 'Canoa / Caiaque', '/kəˈnuː/', 'Paddle the wooden canoe down the calm river.'),
      v('Speedboat', '🚤', 'Lancha', '/ˈspiːd.boʊt/', 'The fast speedboat skims across the waves.'),
      v('Rocket', '🚀', 'Foguete espacial', '/ˈrɑː.kɪt/', 'The space rocket launched into orbit.'),
      v('Parachute', '🪂', 'Paraquedas', '/ˈpær.ə.ʃuːt/', 'The skydiver opened a colorful parachute.'),
      v('Cable Car', '🚡', 'Bondinho / Teleférico', '/ˈkeɪ.bəl kɑːr/', 'Take the mountain cable car for a panoramic view.'),
      v('Traffic Light', '🚦', 'Semáforo / Sinal', '/ˈtræf.ɪk laɪt/', 'Stop the vehicle when the traffic light turns red.'),
      v('Fuel Pump', '⛽', 'Bomba de combustível', '/ˈfjuː.əl pʌmp/', 'Fill up the tank at the gas station fuel pump.'),
      v('Anchor', '⚓', 'Âncora', '/ˈæŋ.kər/', 'Drop the heavy iron anchor in the harbor.'),
      v('Suitcase', '🧳', 'Mala de viagem', '/ˈsuːt.keɪs/', 'Pack your clothes neatly in a rolling suitcase.'),
      v('Compass', '🧭', 'Bússola', '/ˈkʌm.pəs/', 'The magnetic compass needle always points north.'),
    ]
  },
  {
    phaseNumber: 15,
    title: 'Cidade & Cotidiano III: Roupas, Calçados & Estilo',
    subtitle: 'Módulo 3/4 • 30 peças de vestuário e acessórios do comum ao incomum',
    pedagogicalObjective: 'Dominar o vocabulário de roupas, calçados e acessórios pessoais em inglês.',
    icon: 'shirt',
    theory: [
      'Aprender roupas e acessórios permite descrever pessoas e fazer compras em viagens.',
      'Preste atenção na pronúncia de Shirt (/ʃɜːrt/), Shoes (/ʃuːz/) e Gloves (/ɡlʌvz/).',
      'Substantivos como Pants, Jeans, Glasses e Socks são usados quase sempre no plural!'
    ],
    items: [
      v('Shirt', '👕', 'Camisa / Camiseta', '/ʃɜːrt/', 'He wears a clean cotton shirt.'),
      v('Pants', '👖', 'Calça', '/pænts/', 'Blue denim pants are comfortable for work.'),
      v('Shoes', '👞', 'Sapatos', '/ʃuːz/', 'Polish your leather dress shoes.'),
      v('Sneakers', '👟', 'Tênis', '/ˈsniː.kərz/', 'Wear comfortable running sneakers for the walk.'),
      v('Dress', '👗', 'Vestido', '/dres/', 'She bought a summer dress for the party.'),
      v('Coat', '🧥', 'Casaco / Sobretudo', '/koʊt/', 'Put on a heavy winter coat before going out in the snow.'),
      v('Hat', '👒', 'Chapéu', '/hæt/', 'A wide straw hat protects your face from the sun.'),
      v('Cap', '🧢', 'Boné', '/kæp/', 'He wears a blue baseball cap.'),
      v('Socks', '🧦', 'Meias', '/sɑːks/', 'Warm wool socks keep your feet cozy.'),
      v('Glasses', '👓', 'Óculos de grau', '/ˈɡlæs.ɪz/', 'She puts on her reading glasses to read the book.'),
      v('Sunglasses', '🕶️', 'Óculos de sol', '/ˈsʌnˌɡlæs.ɪz/', 'Wear dark sunglasses on a bright beach day.'),
      v('Watch', '⌚', 'Relógio de pulso', '/wɑːtʃ/', 'He checked the time on his wristwatch.'),
      v('Umbrella', '☂️', 'Guarda-chuva', '/ʌmˈbrel.ə/', 'Take an umbrella in case it rains today.'),
      v('Gloves', '🧤', 'Luvas', '/ɡlʌvz/', 'Wear knitted gloves in freezing weather.'),
      v('Scarf', '🧣', 'Cachecol', '/skɑːrf/', 'Wrap a warm red scarf around your neck.'),
      v('Necktie', '👔', 'Gravata', '/ˈnek.taɪ/', 'He wore a silk necktie with his business suit.'),
      v('Boots', '🥾', 'Botas', '/buːts/', 'Sturdy hiking boots are essential on mountain trails.'),
      v('High Heels', '👠', 'Sapato de salto alto', '/ˌhaɪ ˈhiːlz/', 'She wore elegant red high heels.'),
      v('Sandals', '🩴', 'Sandálias / Chinelos', '/ˈsæn.dəlz/', 'Wear light rubber sandals by the swimming pool.'),
      v('Shorts', '🩳', 'Shorts / Bermudas', '/ʃɔːrts/', 'Light athletic shorts are great for running.'),
      v('Swimsuit', '🩱', 'Maiô / Roupa de banho', '/ˈswɪm.suːt/', 'Pack your swimsuit for the trip to the lake.'),
      v('Handbag', '👜', 'Bolsa feminina', '/ˈhænd.bæɡ/', 'She carries her keys and wallet in a leather handbag.'),
      v('Purse', '👛', 'Carteira / Bolsinha', '/pɜːrs/', 'Keep your coins inside a small clasp purse.'),
      v('Ring', '💍', 'Anel / Aliança', '/rɪŋ/', 'A gold wedding ring with a diamond.'),
      v('Crown', '👑', 'Coroa', '/kraʊn/', 'The royal crown is made of gold and jewels.'),
      v('Helmet', '⛑️', 'Capacete de segurança', '/ˈhel.mət/', 'Rescue workers wear protective helmets.'),
      v('Safety Vest', '🦺', 'Colete refletivo', '/ˈseɪf.ti vest/', 'Construction workers wear a bright orange safety vest.'),
      v('Lab Coat', '🥼', 'Jaleco branco', '/ˈlæb koʊt/', 'The scientist wears a clean white lab coat.'),
      v('Kimono', '👘', 'Quimono', '/kɪˈmoʊ.noʊ/', 'A traditional silk kimono from Japan.'),
      v('Ballet Shoes', '🩰', 'Sapatilhas de balé', '/bæˈleɪ ʃuːz/', 'The dancer tied the ribbons of her pink ballet shoes.'),
    ]
  },
  {
    phaseNumber: 16,
    type: 'boss',
    title: 'Cidade & Cotidiano IV: Corpo, Esportes & Profissões',
    subtitle: 'Módulo 4/4 • 30 palavras de corpo humano, esportes e carreiras',
    pedagogicalObjective: 'Consolidar o domínio dos 4 blocos de vocabulário com 30 termos de corpo humano, esportes e profissões.',
    icon: 'swords',
    theory: [
      'Parabéns por chegar ao 16º módulo de 30 palavras (480 termos essenciais dominados)!',
      'Aqui você domina partes do corpo, esportes olímpicos e profissões fundamentais.',
      'Acerte 100% dos itens (corrigindo eventuais erros no final) para conquistar o Troféu Mestre do Vocabulário!'
    ],
    items: [
      v('Doctor', '👨‍⚕️', 'Médico', '/ˈdɑːk.tər/', 'The doctor works at the community hospital.'),
      v('Teacher', '👩‍🏫', 'Professor / Professora', '/ˈtiː.tʃər/', 'Our English teacher explains every word clearly.'),
      v('Chef', '👨‍🍳', 'Chef de cozinha / Cozinheiro', '/ʃef/', 'The chef prepares fresh meals in the restaurant.'),
      v('Police Officer', '👮', 'Policial', '/pəˈliːs ˌɔː.fɪ.sər/', 'The police officer helps keep the streets safe.'),
      v('Firefighter', '🧑‍🚒', 'Bombeiro', '/ˈfaɪ.ərˌfaɪ.tər/', 'Brave firefighters put out the fire.'),
      v('Farmer', '🧑‍🌾', 'Fazendeiro / Agricultor', '/ˈfɑːr.mər/', 'The farmer harvests fresh vegetables.'),
      v('Eye', '👁️', 'Olho', '/aɪ/', 'Blink your eye to keep it moist.'),
      v('Ear', '👂', 'Orelha / Ouvido', '/ɪr/', 'Listen carefully with your ear.'),
      v('Nose', '👃', 'Nariz', '/noʊz/', 'Breathe fresh air through your nose.'),
      v('Mouth', '👄', 'Boca', '/maʊθ/', 'Open your mouth to pronounce the vowel.'),
      v('Hand', '✋', 'Mão', '/hænd/', 'Raise your hand if you have a question.'),
      v('Foot', '🦶', 'Pé', '/fʊt/', 'Kick the ball with your right foot.'),
      v('Heart', '🫀', 'Coração', '/hɑːrt/', 'Your heart pumps blood through the body.'),
      v('Brain', '🧠', 'Cérebro', '/breɪn/', 'Learning a new language exercises your brain.'),
      v('Tooth', '🦷', 'Dente', '/tuːθ/', 'Brush every tooth after meals.'),
      v('Bone', '🦴', 'Osso', '/boʊn/', 'Calcium keeps your bones strong.'),
      v('Muscle', '💪', 'Músculo / Força', '/ˈmʌs.əl/', 'Regular exercise builds strong muscles.'),
      v('Lungs', '🫁', 'Pulmões', '/lʌŋz/', 'Take a deep breath to fill your lungs with oxygen.'),
      v('Soccer Ball', '⚽', 'Bola de futebol', '/ˈsɑː.kər bɔːl/', 'Kick the soccer ball into the goal.'),
      v('Basketball', '🏀', 'Basquete / Bola de basquete', '/ˈbæs.kɪt.bɔːl/', 'Shoot the orange basketball through the hoop.'),
      v('Tennis', '🎾', 'Tênis (esporte)', '/ˈten.ɪs/', 'Hit the yellow tennis ball over the net.'),
      v('Volleyball', '🏐', 'Vôlei', '/ˈvɑː.li.bɔːl/', 'They played beach volleyball on the sand.'),
      v('Baseball', '⚾', 'Beisebol', '/ˈbeɪs.bɔːl/', 'Catch the baseball with a leather glove.'),
      v('American Football', '🏈', 'Futebol americano', '/əˈmer.ɪ.kən ˈfʊt.bɔːl/', 'Throw an oval American football pass.'),
      v('Trophy', '🏆', 'Troféu', '/ˈtroʊ.fi/', 'The champion team lifted the golden trophy.'),
      v('Gold Medal', '🥇', 'Medalha de ouro', '/ˈɡoʊld ˈmed.əl/', 'The athlete won a gold medal at the Olympics.'),
      v('Boxing Glove', '🥊', 'Luva de boxe', '/ˈbɑːk.sɪŋ ɡlʌv/', 'The fighter trains with red boxing gloves.'),
      v('Archery Bow', '🏹', 'Arco e flecha', '/ˈɑːr.tʃər.i boʊ/', 'Aim at the center of the target with an archery bow.'),
      v('Fishing Rod', '🎣', 'Vara de pescar', '/ˈfɪʃ.ɪŋ rɑːd/', 'Cast the line into the lake with a fishing rod.'),
      v('Chess Pawn', '♟️', 'Peça de xadrez', '/ˈtʃes pɔːn/', 'Move the chess pawn forward on the board.'),
    ]
  },
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

/**
 * Generates exercises for a 30-item module enforcing:
 * - Zero image repetition between consecutive questions (or at most 1 if ever constrained)
 * - Any image shown in exercise `idx` (as target or distractor) cannot reappear until at least `idx + 4` (4 exercises forward cooldown!)
 */
function buildExercisesWithCooldown(theme) {
  const items = theme.items;
  const phaseId = `w0-p${theme.phaseNumber}`;
  const lastSeenAt = new Map(); // item.text -> last exercise index where it appeared
  const usageCount = new Map(); // item.text -> how many times used as distractor

  items.forEach((it) => {
    lastSeenAt.set(it.text, -100);
    usageCount.set(it.text, 0);
  });

  const exercises = [];

  for (let idx = 0; idx < items.length; idx++) {
    const target = items[idx];

    // Block targets of nearby questions so a distractor doesn't immediately spoil the next 4 questions
    const nearbyTargets = new Set();
    for (let offset = -3; offset <= 4; offset++) {
      const nIdx = idx + offset;
      if (nIdx >= 0 && nIdx < items.length) {
        nearbyTargets.add(items[nIdx].text);
      }
    }

    // Filter eligible distractors from the 30-item module that haven't been seen in the last 3 exercises (idx - lastSeen >= 4)
    let eligible = items.filter((candidate) => {
      if (candidate.text === target.text) return false;
      if (nearbyTargets.has(candidate.text)) return false;
      const lastIdx = lastSeenAt.get(candidate.text) ?? -100;
      return idx - lastIdx >= 4;
    });

    // Fallback if needed near wrap-around: relax nearbyTargets slightly while strictly keeping `idx - lastIdx >= 4`
    if (eligible.length < 3) {
      eligible = items.filter((candidate) => {
        if (candidate.text === target.text) return false;
        const lastIdx = lastSeenAt.get(candidate.text) ?? -100;
        return idx - lastIdx >= 4;
      });
    }

    // Sort by least used as distractor + deterministic tie-breaking so all 30 images circulate evenly
    eligible.sort((a, b) => {
      const diff = (usageCount.get(a.text) || 0) - (usageCount.get(b.text) || 0);
      if (diff !== 0) return diff;
      const hashA = ((a.text.charCodeAt(0) * 31 + idx * 17) % 97);
      const hashB = ((b.text.charCodeAt(0) * 31 + idx * 17) % 97);
      return hashA - hashB;
    });

    const distractors = eligible.slice(0, 3);

    // Record appearance at `idx` for both the target and the 3 chosen distractors
    lastSeenAt.set(target.text, idx);
    distractors.forEach((d) => {
      lastSeenAt.set(d.text, idx);
      usageCount.set(d.text, (usageCount.get(d.text) || 0) + 1);
    });

    const optionsList = deterministicShuffle([target, ...distractors], theme.phaseNumber * 100 + idx + 7);

    const visualOptions = optionsList.map((opt) => ({
      text: opt.text,
      emoji: opt.emoji,
      label: opt.label,
      translationPt: opt.pt,
    }));

    let prompt = `Qual imagem representa "${target.text}"?`;
    let category = 'vocabulary';

    if (idx % 3 === 0) {
      prompt = `Qual imagem representa "${target.text}"?`;
      category = 'vocabulary';
    } else if (idx % 3 === 1) {
      prompt = `Qual imagem representa "${target.pt}" em inglês?`;
      category = 'reading';
    } else {
      prompt = `🎧 Ouça a pronúncia e selecione a imagem correspondente:`;
      category = 'listening';
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

const phases = THEMES.map((theme) => {
  const isBoss = theme.type === 'boss';
  const isChest = theme.type === 'chest';
  const phaseId = `w0-p${theme.phaseNumber}`;
  const exercises = buildExercisesWithCooldown(theme);

  return {
    id: phaseId,
    worldId: 0,
    phaseNumber: theme.phaseNumber,
    title: theme.title,
    subtitle: theme.subtitle,
    pedagogicalObjective: theme.pedagogicalObjective,
    type: theme.type || 'lesson',
    icon: theme.icon,
    cefrLevel: 'A1',
    theorySummary: theme.theory,
    xpReward: isBoss ? 80 : isChest ? 50 : 45,
    gemsReward: isBoss ? 30 : isChest ? 20 : 15,
    exercises,
  };
});

// Verify 4-exercise cooldown across all generated phases
let maxConsecutiveOverlap = 0;
let minReturnDistance = 999;
for (const p of phases) {
  const lastSeen = new Map();
  p.exercises.forEach((ex, idx) => {
    const currentSet = ex.visualOptions.map((v) => v.text);
    if (idx > 0) {
      const prevSet = new Set(p.exercises[idx - 1].visualOptions.map((v) => v.text));
      const overlap = currentSet.filter((t) => prevSet.has(t)).length;
      if (overlap > maxConsecutiveOverlap) maxConsecutiveOverlap = overlap;
    }
    currentSet.forEach((t) => {
      if (lastSeen.has(t)) {
        const dist = idx - lastSeen.get(t);
        if (dist < minReturnDistance) minReturnDistance = dist;
      }
      lastSeen.set(t, idx);
    });
  });
}

const fileContent = `import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

fs.writeFileSync('src/data/world0Phases.ts', fileContent, 'utf-8');
console.log('Successfully generated src/data/world0Phases.ts!');
console.log('Total modules (phases) in World 0:', phases.length);
console.log('Items per module:', phases.map((p) => p.exercises.length).join(', '));
console.log('Total vocabulary exercises in World 0:', phases.reduce((acc, p) => acc + p.exercises.length, 0));
console.log('Max overlap between consecutive questions:', maxConsecutiveOverlap);
console.log('Min distance before any image returns:', minReturnDistance, 'exercises forward');
