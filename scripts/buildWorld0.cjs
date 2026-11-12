const fs = require('fs');

// Helper to create a vocabulary item ordered from most common (#1) to less common (#30) in the Brazilian context,
// with a dedicated studio white-background photograph query so the single item is always large, sharp and isolated.
function v(text, emoji, pt, phonetic, sentence, studioQuery) {
  return {
    text,
    emoji,
    label: text,
    pt,
    phonetic,
    sentence: sentence || `This is ${text.toLowerCase()}.`,
    studioQuery: studioQuery || `${text} single object isolated on pure white background studio photo`,
  };
}

const THEMES = [
  // ==========================================================================
  // CATEGORIA 1: FRUTAS, ALIMENTOS & GASTRONOMIA (4 MÓDULOS DE 30 ITENS CADA)
  // Organizados pela realidade brasileira: das frutas e comidas mais comuns do dia a dia até as menos comuns
  // ==========================================================================
  {
    phaseNumber: 1,
    title: 'Frutas & Alimentos I: Frutas do Dia a Dia',
    subtitle: 'Módulo 1/4 • As 30 frutas mais conhecidas no Brasil em destaque',
    pedagogicalObjective: 'Reconhecer pelo som as 30 frutas mais comuns no cotidiano brasileiro com imagens nítidas em fundo branco.',
    icon: 'apple',
    theory: [
      'Começamos pelas 30 frutas mais conhecidas no Brasil: Maçã (Apple), Banana, Laranja (Orange), Mamão (Papaya), Manga (Mango), Goiaba (Guava) e Maracujá (Passion Fruit).',
      'Cada imagem apresenta a fruta inteira e em destaque sobre fundo branco para que não haja nenhuma dúvida visual.',
      'Ouça o áudio que inicia automaticamente; se tiver dúvida na pronúncia, toque no botão para revelar a palavra escrita após ouvir a primeira vez!'
    ],
    items: [
      v('Apple', '🍎', 'Maçã', '/ˈæp.əl/', 'I eat a fresh red apple every morning.', 'red apple fruit with slice isolated on pure white background studio photo'),
      v('Banana', '🍌', 'Banana', '/bəˈnæn.ə/', 'Bananas are rich in potassium.', 'ripe yellow banana fruit isolated on pure white background studio photo'),
      v('Orange', '🍊', 'Laranja', '/ˈɔːr.ɪndʒ/', 'Fresh orange juice has lots of vitamin C.', 'orange fruit whole and half isolated on pure white background studio photo'),
      v('Strawberry', '🍓', 'Morango', '/ˈstrɔː.ber.i/', 'She loves sweet red strawberries.', 'single red strawberry fruit isolated on pure white background studio photo'),
      v('Grape', '🍇', 'Uva', '/ɡreɪp/', 'Purple grapes grow on vines.', 'bunch of purple grapes fruit isolated on pure white background studio photo'),
      v('Watermelon', '🍉', 'Melancia', '/ˈwɔː.tərˌmel.ən/', 'Cold watermelon is great in the summer.', 'watermelon fruit and red slice isolated on pure white background studio photo'),
      v('Pineapple', '🍍', 'Abacaxi', '/ˈpaɪnˌæp.əl/', 'Pineapple is a juicy tropical fruit.', 'whole pineapple fruit with slice isolated on pure white background studio photo'),
      v('Mango', '🥭', 'Manga', '/ˈmæŋ.ɡoʊ/', 'This ripe mango is very sweet.', 'ripe mango fruit with slice isolated on pure white background studio photo'),
      v('Papaya', '🧡', 'Mamão', '/pəˈpaɪ.ə/', 'Papaya is very popular for breakfast in Brazil.', 'ripe papaya fruit cut in half with seeds isolated on pure white background studio photo'),
      v('Lemon', '🍋', 'Limão siciliano', '/ˈlem.ən/', 'Yellow lemon tastes sour and refreshing.', 'yellow lemon fruit whole and half isolated on pure white background studio photo'),
      v('Lime', '🟢', 'Limão verde (Taiti)', '/laɪm/', 'Squeeze fresh green lime over the food.', 'green lime fruit whole and half isolated on pure white background studio photo'),
      v('Tangerine', '🍊', 'Tangerina / Mexerica', '/ˈtæn.dʒə.riːn/', 'Tangerines are easy to peel.', 'peeled tangerine mandarin fruit isolated on pure white background studio photo'),
      v('Guava', '🩷', 'Goiaba', '/ˈɡwɑː.və/', 'Red guava is very common in Brazil.', 'fresh red guava fruit whole and half isolated on pure white background studio photo'),
      v('Passion Fruit', '💛', 'Maracujá', '/ˈpæʃ.ən fruːt/', 'Passion fruit juice is very relaxing.', 'yellow passion fruit maracuja cut in half isolated on pure white background studio photo'),
      v('Melon', '🍈', 'Melão', '/ˈmel.ən/', 'Sweet yellow melon is refreshing.', 'yellow honeydew melon whole and slice isolated on pure white background studio photo'),
      v('Avocado', '🥑', 'Abacate', '/ˌæv.əˈkɑː.doʊ/', 'Avocado is creamy and nutritious.', 'green avocado fruit whole and half with seed isolated on pure white background studio photo'),
      v('Coconut', '🥥', 'Coco', '/ˈkoʊ.kə.nʌt/', 'We drank fresh coconut water at the beach.', 'brown coconut whole and cracked half isolated on pure white background studio photo'),
      v('Pear', '🍐', 'Pera', '/per/', 'The green pear is sweet and soft.', 'single green pear fruit isolated on pure white background studio photo'),
      v('Peach', '🍑', 'Pêssego', '/piːtʃ/', 'A ripe peach has soft skin.', 'ripe peach fruit with slice isolated on pure white background studio photo'),
      v('Kiwi', '🥝', 'Kiwi', '/ˈkiː.wiː/', 'Kiwi has bright green flesh inside.', 'kiwi fruit whole and sliced half isolated on pure white background studio photo'),
      v('Plum', '🟣', 'Ameixa', '/plʌm/', 'She picked a ripe purple plum.', 'ripe purple plum fruit with half isolated on pure white background studio photo'),
      v('Cherry', '🍒', 'Cereja', '/ˈtʃer.i/', 'He put a red cherry on top of the cake.', 'two red cherries with stem isolated on pure white background studio photo'),
      v('Cashew', '🧡', 'Caju', '/ˈkæʃ.uː/', 'Cashew fruit is native to Brazil.', 'ripe cashew apple fruit caju isolated on pure white background studio photo'),
      v('Acai', '🟣', 'Açaí', '/ˌɑː.sɑːˈiː/', 'Cold acai bowl is a Brazilian favorite.', 'acai berries bowl fruit isolated on pure white background studio photo'),
      v('Jabuticaba', '⚫', 'Jabuticaba', '/ˌʒɑː.buː.tɪˈkɑː.bə/', 'Jabuticaba is a sweet dark Brazilian fruit.', 'jabuticaba dark purple fruits isolated on pure white background studio photo'),
      v('Persimmon', '🟠', 'Caqui', '/pərˈsɪm.ən/', 'Ripe persimmon is very sweet.', 'orange persimmon fruit caqui isolated on pure white background studio photo'),
      v('Starfruit', '⭐', 'Carambola', '/ˈstɑːr.fruːt/', 'Slices of starfruit look like bright stars.', 'yellow starfruit carambola with star slice isolated on pure white background studio photo'),
      v('Blackberry', '⚫', 'Amora', '/ˈblækˌber.i/', 'Blackberries are dark and sweet.', 'fresh blackberry fruit isolated on pure white background studio photo'),
      v('Jackfruit', '🟢', 'Jaca', '/ˈdʒæk.fruːt/', 'Jackfruit is a very large tropical fruit.', 'jackfruit whole and open segments isolated on pure white background studio photo'),
      v('Fig', '🟤', 'Figo', '/fɪɡ/', 'Fresh figs are sweet and soft.', 'fresh purple fig fruit whole and half isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 2,
    title: 'Frutas & Alimentos II: Legumes, Verduras & Feira',
    subtitle: 'Módulo 2/4 • 30 vegetais e ingredientes comuns na mesa brasileira',
    pedagogicalObjective: 'Identificar legumes, verduras e grãos essenciais da alimentação diária.',
    icon: 'apple',
    theory: [
      'Neste segundo módulo estudamos os 30 vegetais e alimentos de feira mais comuns no Brasil.',
      'Inclui Tomate, Batata, Cenoura, Cebola, Alho, Alface, Mandioca (Cassava), Quiabo (Okra) e Chuchu (Chayote).',
      'Observe cada item isolado em fundo branco com máxima nitidez.'
    ],
    items: [
      v('Tomato', '🍅', 'Tomate', '/təˈmeɪ.toʊ/', 'Fresh red tomatoes go in the salad.', 'red tomato whole and slice isolated on pure white background studio photo'),
      v('Potato', '🥔', 'Batata', '/pəˈteɪ.toʊ/', 'Potatoes are used in many recipes.', 'washed yellow potato tuber isolated on pure white background studio photo'),
      v('Carrot', '🥕', 'Cenoura', '/ˈkær.ət/', 'Rabbits love crunchy orange carrots.', 'fresh orange carrot with green top isolated on pure white background studio photo'),
      v('Onion', '🧅', 'Cebola', '/ˈʌn.jən/', 'Chopped onion adds flavor to the meal.', 'yellow onion bulb whole and half isolated on pure white background studio photo'),
      v('Garlic', '🧄', 'Alho', '/ˈɡɑːr.lɪk/', 'Garlic smells great when cooked.', 'white garlic bulb with cloves isolated on pure white background studio photo'),
      v('Lettuce', '🥬', 'Alface', '/ˈlet.ɪs/', 'Wash the green lettuce leaves well.', 'fresh green lettuce head isolated on pure white background studio photo'),
      v('Corn', '🌽', 'Milho', '/kɔːrn/', 'Sweet yellow corn on the cob.', 'yellow sweet corn cob with husk isolated on pure white background studio photo'),
      v('Cucumber', '🥒', 'Pepino', '/ˈkjuː.kʌm.bər/', 'Cucumber slices are cool and crisp.', 'green cucumber whole and slices isolated on pure white background studio photo'),
      v('Broccoli', '🥦', 'Brócolis', '/ˈbrɑː.kəl.i/', 'Steamed broccoli is very nutritious.', 'fresh green broccoli floret head isolated on pure white background studio photo'),
      v('Cabbage', '🥬', 'Repolho', '/ˈkæb.ɪdʒ/', 'Green cabbage is crunchy in salads.', 'whole green cabbage isolated on pure white background studio photo'),
      v('Cauliflower', '⚪', 'Couve-flor', '/ˈkɑː.lɪˌflaʊ.ər/', 'Cauliflower looks like a white flower.', 'whole white cauliflower head isolated on pure white background studio photo'),
      v('Pumpkin', '🎃', 'Abóbora / Cabotiá', '/ˈpʌmp.kɪn/', 'Orange pumpkin soup is warm and creamy.', 'orange pumpkin vegetable isolated on pure white background studio photo'),
      v('Sweet Potato', '🍠', 'Batata-doce', '/ˌswiːt pəˈteɪ.toʊ/', 'Roasted sweet potato is healthy.', 'purple skin sweet potatowhole and cut isolated on pure white background studio photo'),
      v('Beetroot', '🟣', 'Beterraba', '/ˈbiːt.ruːt/', 'Beetroot has a deep purple color.', 'red beetroot whole and half isolated on pure white background studio photo'),
      v('Zucchini', '🥒', 'Abobrinha', '/zuːˈkiː.ni/', 'Sliced zucchini cooks very quickly.', 'green zucchini squash whole and slices isolated on pure white background studio photo'),
      v('Eggplant', '🍆', 'Berinjela', '/ˈeɡ.plænt/', 'Purple eggplant is delicious when baked.', 'single purple eggplant vegetable isolated on pure white background studio photo'),
      v('Bell Pepper', '🫑', 'Pimentão', '/ˈbel ˌpep.ər/', 'Bell peppers can be green, red or yellow.', 'red yellow green bell pepper isolated on pure white background studio photo'),
      v('Chili Pepper', '🌶️', 'Pimenta vermelha', '/ˈtʃɪl.i ˌpep.ər/', 'That red chili pepper is very spicy.', 'red hot chili pepper isolated on pure white background studio photo'),
      v('Peas', '🫛', 'Ervilha', '/piːz/', 'Green peas are small and round.', 'green pea pod open with peas isolated on pure white background studio photo'),
      v('Spinach', '🌿', 'Espinafre', '/ˈspɪn.ɪtʃ/', 'Fresh spinach leaves are rich in iron.', 'fresh green spinach leaves bunch isolated on pure white background studio photo'),
      v('Mushroom', '🍄', 'Cogumelo / Champignon', '/ˈmʌʃ.ruːm/', 'White mushrooms are great in pasta.', 'fresh champignon mushroom isolated on pure white background studio photo'),
      v('Cassava', '🥔', 'Mandioca / Aipim', '/kəˈsɑː.və/', 'Fried cassava is very popular in Brazil.', 'cassava yuca root whole and peeled piece isolated on pure white background studio photo'),
      v('Okra', '🟢', 'Quiabo', '/ˈoʊ.krə/', 'Okra is a traditional vegetable in Brazilian cooking.', 'fresh green okra pods isolated on pure white background studio photo'),
      v('Chayote', '🍐', 'Chuchu', '/tʃaɪˈoʊ.ti/', 'Light green chayote is mild and healthy.', 'green chayote squash vegetable isolated on pure white background studio photo'),
      v('Heart of Palm', '⚪', 'Palmito', '/ˌhɑːrt əv ˈpɑːm/', 'Heart of palm is great in salads and pies.', 'white heart of palm stalks cut isolated on pure white background studio photo'),
      v('Peanut', '🥜', 'Amendoim', '/ˈpiː.nʌt/', 'Roasted peanuts are a crunchy snack.', 'peanuts in shell and peeled kernels isolated on pure white background studio photo'),
      v('Olive', '🫒', 'Azeitona', '/ˈɑː.lɪv/', 'Green olives are common on pizzas.', 'green olives fruit isolated on pure white background studio photo'),
      v('Ginger', '🫚', 'Gengibre', '/ˈdʒɪn.dʒər/', 'Fresh ginger root is aromatic.', 'fresh ginger root piece isolated on pure white background studio photo'),
      v('Radish', '🔴', 'Rabanete', '/ˈræd.ɪʃ/', 'Red radishes are crunchy in salads.', 'red radish root whole and half isolated on pure white background studio photo'),
      v('Spring Onion', '🌱', 'Cebolinha verde', '/ˌsprɪŋ ˈʌn.jən/', 'Chopped spring onion finishes the dish.', 'fresh green spring onion scallions isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 3,
    title: 'Frutas & Alimentos III: Refeições & Pratos',
    subtitle: 'Módulo 3/4 • 30 comidas e pratos presentes no dia a dia',
    pedagogicalObjective: 'Reconhecer pães, carnes, laticínios e refeições completas em inglês.',
    icon: 'apple',
    theory: [
      'Aqui estão os 30 alimentos e pratos mais presentes nas refeições brasileiras: Pão, Arroz, Feijão, Ovo, Queijo, Frango Assado, Bife e Pão de Queijo.',
      'Todas as fotos mostram o prato ou alimento isolado com total clareza.',
      'Pratique a escuta atenta antes de selecionar o cartão correspondente!'
    ],
    items: [
      v('Bread', '🍞', 'Pão', '/bred/', 'Warm fresh bread smells amazing.', 'fresh loaf of bread sliced isolated on pure white background studio photo'),
      v('Rice', '🍚', 'Arroz branco', '/raɪs/', 'White rice is served every day in Brazil.', 'white cooked rice in bowl isolated on pure white background studio photo'),
      v('Beans', '🫘', 'Feijão', '/biːnz/', 'Rice and beans are the classic Brazilian meal.', 'cooked pinto beans in bowl isolated on pure white background studio photo'),
      v('Egg', '🥚', 'Ovo', '/eɡ/', 'I eat a fried egg for breakfast.', 'whole egg and fried egg isolated on pure white background studio photo'),
      v('Cheese', '🧀', 'Queijo', '/tʃiːz/', 'Yellow cheese tastes great on bread.', 'wedge of yellow cheese with holes isolated on pure white background studio photo'),
      v('Butter', '🧈', 'Manteiga', '/ˈbʌt.ər/', 'Spread butter on the warm toast.', 'block of yellow butter on dish isolated on pure white background studio photo'),
      v('Ham', '🥩', 'Presunto', '/hæm/', 'A sandwich with cheese and ham.', 'sliced pink ham meat isolated on pure white background studio photo'),
      v('Roast Chicken', '🍗', 'Frango assado', '/ˈroʊst ˈtʃɪk.ɪn/', 'Roast chicken is a Sunday lunch classic.', 'golden roast chicken on plate isolated on pure white background studio photo'),
      v('Steak', '🥩', 'Bife / Carne grelhada', '/steɪk/', 'He cooked a juicy beef steak on the grill.', 'grilled beef steak meat isolated on pure white background studio photo'),
      v('Fish Fillet', '🐟', 'Filé de peixe', '/ˈfɪʃ fɪˈleɪ/', 'Grilled fish fillet with lemon.', 'cooked fish fillet on plate isolated on pure white background studio photo'),
      v('Pasta', '🍝', 'Macarrão / Espaguete', '/ˈpɑː.stə/', 'Italian spaghetti pasta with tomato sauce.', 'plate of spaghetti pasta with tomato sauce isolated on pure white background studio photo'),
      v('Pizza', '🍕', 'Pizza', '/ˈpiːt.sə/', 'We shared a delicious cheese pizza.', 'whole pepperoni cheese pizza isolated on pure white background studio photo'),
      v('Hamburger', '🍔', 'Hambúrguer', '/ˈhæmˌbɜːr.ɡər/', 'A juicy hamburger with cheese and lettuce.', 'classic cheeseburger hamburger isolated on pure white background studio photo'),
      v('French Fries', '🍟', 'Batata frita', '/ˈfrentʃ fraɪz/', 'Crispy golden French fries.', 'crispy golden french fries isolated on pure white background studio photo'),
      v('Hot Dog', '🌭', 'Cachorro-quente', '/ˈhɑːt dɔːɡ/', 'A warm hot dog in a soft bun.', 'classic hot dog in bun with mustard isolated on pure white background studio photo'),
      v('Sandwich', '🥪', 'Sanduíche natural', '/ˈsæn.wɪtʃ/', 'She packed a sandwich for lunch.', 'club sandwich cut in half isolated on pure white background studio photo'),
      v('Cheese Bread', '🧀', 'Pão de queijo', '/ˈtʃiːz bred/', 'Warm Brazilian cheese bread is delicious.', 'brazilian pao de queijo cheese bread balls isolated on pure white background studio photo'),
      v('Soup', '🍲', 'Sopa', '/suːp/', 'Hot vegetable soup in a bowl.', 'bowl of hot vegetable soup with spoon isolated on pure white background studio photo'),
      v('Salad', '🥗', 'Salada', '/ˈsæl.əd/', 'A fresh green salad with tomatoes.', 'fresh green salad in bowl isolated on pure white background studio photo'),
      v('Sausage', '🌭', 'Linguiça / Salsicha', '/ˈsɔː.sɪdʒ/', 'Grilled sausage for the barbecue.', 'grilled pork sausages isolated on pure white background studio photo'),
      v('Bacon', '🥓', 'Bacon', '/ˈbeɪ.kən/', 'Crispy strips of fried bacon.', 'crispy cooked bacon strips isolated on pure white background studio photo'),
      v('Omelet', '🍳', 'Omelete', '/ˈɑːm.lət/', 'A fluffy yellow egg omelet.', 'folded yellow egg omelet on plate isolated on pure white background studio photo'),
      v('Pancake', '🥞', 'Panqueca', '/ˈpæn.keɪk/', 'Stack of pancakes with syrup.', 'stack of pancakes with honey isolated on pure white background studio photo'),
      v('Lasagna', '🍝', 'Lasanha', '/ləˈzɑːn.jə/', 'Baked cheese lasagna is a family favorite.', 'slice of beef lasagna on plate isolated on pure white background studio photo'),
      v('Barbecue', '🍖', 'Churrasco / Espetinho', '/ˈbɑːr.bɪ.kjuː/', 'Brazilian barbecue meat on skewers.', 'grilled barbecue meat skewer churrasco isolated on pure white background studio photo'),
      v('Shrimp', '🍤', 'Camarão', '/ʃrɪmp/', 'Cooked pink shrimp with lemon.', 'cooked peeled pink shrimp prawns isolated on pure white background studio photo'),
      v('Sushi', '🍣', 'Sushi', '/ˈsuː.ʃi/', 'Fresh salmon sushi rolls.', 'salmon sushi nigiri and rolls isolated on pure white background studio photo'),
      v('Croissant', '🥐', 'Croissant', '/krwɑːˈsɑːnt/', 'A golden butter croissant from the bakery.', 'single golden butter croissant isolated on pure white background studio photo'),
      v('Toast', '🍞', 'Torrada', '/toʊst/', 'Crispy toasted bread for breakfast.', 'two slices of golden toasted bread isolated on pure white background studio photo'),
      v('Mashed Potatoes', '🥔', 'Purê de batata', '/ˌmæʃt pəˈteɪ.toʊz/', 'Creamy mashed potatoes in a bowl.', 'bowl of creamy mashed potatoes isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 4,
    title: 'Frutas & Alimentos IV: Bebidas, Doces & Especiais',
    subtitle: 'Módulo 4/4 • 30 bebidas, sobremesas e frutas menos comuns',
    pedagogicalObjective: 'Dominar o vocabulário de bebidas, doces famosos e frutas especiais.',
    icon: 'cup',
    theory: [
      'Fechamos a categoria de Alimentos com bebidas (Água, Leite, Café, Suco, Refrigerante), doces queridos (Bolo, Chocolate, Sorvete, Picolé, Pudim) e frutas menos comuns no final.',
      'Apenas nos últimos itens deste 4º módulo aparecem frutas mais exóticas como Framboesa, Mirtilo, Romã e Pitaia.',
      'Conclua com 100% de acerto para avançar aos módulos de Animais!'
    ],
    items: [
      v('Water', '💧', 'Água', '/ˈwɔː.tər/', 'Drink a glass of fresh clear water.', 'clear glass of drinking water isolated on pure white background studio photo'),
      v('Milk', '🥛', 'Leite', '/mɪlk/', 'A glass of cold white milk.', 'glass of white milk isolated on pure white background studio photo'),
      v('Coffee', '☕', 'Café', '/ˈkɔː.fi/', 'A warm cup of black coffee.', 'white cup of hot black coffee isolated on pure white background studio photo'),
      v('Juice', '🧃', 'Suco de laranja', '/dʒuːs/', 'A glass of natural orange juice.', 'glass of fresh orange juice isolated on pure white background studio photo'),
      v('Soda', '🥤', 'Refrigerante', '/ˈsoʊ.də/', 'Cold cola soda with ice cubes.', 'glass of cola soda with ice isolated on pure white background studio photo'),
      v('Tea', '🍵', 'Chá', '/tiː/', 'A cup of warm herbal tea.', 'cup of hot tea with tea bag isolated on pure white background studio photo'),
      v('Cake', '🍰', 'Bolo', '/keɪk/', 'A slice of chocolate birthday cake.', 'slice of chocolate cake isolated on pure white background studio photo'),
      v('Chocolate', '🍫', 'Chocolate', '/ˈtʃɑːk.lət/', 'A bar of milk chocolate.', 'milk chocolate bar pieces isolated on pure white background studio photo'),
      v('Ice Cream', '🍨', 'Sorvete', '/ˈaɪs kriːm/', 'Scoops of ice cream in a cone.', 'ice cream scoops in waffle cone isolated on pure white background studio photo'),
      v('Popsicle', '🍧', 'Picolé', '/ˈpɑːp.sɪ.kəl/', 'A fruit popsicle on a hot day.', 'fruity ice popsicle on wooden stick isolated on pure white background studio photo'),
      v('Cookie', '🍪', 'Biscoito / Cookie', '/ˈkʊk.i/', 'Chocolate chip cookies are crunchy.', 'chocolate chip cookie isolated on pure white background studio photo'),
      v('Pudding', '🍮', 'Pudim de leite', '/ˈpʊd.ɪŋ/', 'Caramel pudding is a classic Brazilian dessert.', 'caramel flan pudding pudim on plate isolated on pure white background studio photo'),
      v('Candy', '🍬', 'Bala / Doce', '/ˈkæn.di/', 'Wrapped colorful fruit candy.', 'colorful wrapped hard candy sweets isolated on pure white background studio photo'),
      v('Lollipop', '🍭', 'Pirulito', '/ˈlɑː.li.pɑːp/', 'A colorful round lollipop on a stick.', 'colorful swirl lollipop candy isolated on pure white background studio photo'),
      v('Popcorn', '🍿', 'Pipoca', '/ˈpɑːp.kɔːrn/', 'Warm salted popcorn at the cinema.', 'popcorn in striped bucket isolated on pure white background studio photo'),
      v('Donut', '🍩', 'Rosquinha / Donut', '/ˈdoʊ.nʌt/', 'A pink glazed donut with sprinkles.', 'pink frosted donut with sprinkles isolated on pure white background studio photo'),
      v('Pie', '🥧', 'Torta doce', '/paɪ/', 'Warm homemade fruit pie.', 'fruit pie with lattice crust isolated on pure white background studio photo'),
      v('Cupcake', '🧁', 'Cupcake / Bolinho', '/ˈkʌp.keɪk/', 'A cupcake with creamy frosting.', 'vanilla cupcake with pink frosting isolated on pure white background studio photo'),
      v('Yogurt', '🥣', 'Iogurte', '/ˈjoʊ.ɡərt/', 'Creamy strawberry yogurt in a spoon.', 'bowl of creamy white yogurt with strawberry isolated on pure white background studio photo'),
      v('Honey', '🍯', 'Mel', '/ˈhʌn.i/', 'Golden bee honey in a glass jar.', 'glass jar of golden honey with dipper isolated on pure white background studio photo'),
      v('Jam', '🍓', 'Geleia de frutas', '/dʒæm/', 'Strawberry jam on morning toast.', 'jar of red strawberry jam isolated on pure white background studio photo'),
      v('Milkshake', '🥤', 'Milk-shake', '/ˈmɪlk.ʃeɪk/', 'Cold chocolate milkshake with whipped cream.', 'chocolate milkshake in tall glass with whipped cream isolated on pure white background studio photo'),
      v('Waffle', '🧇', 'Waffle', '/ˈwɑː.fəl/', 'Crispy golden waffle for breakfast.', 'golden waffle square isolated on pure white background studio photo'),
      v('Jelly', '🍮', 'Gelatina', '/ˈdʒel.i/', 'Red strawberry jelly dessert.', 'red gelatin jelly dessert on plate isolated on pure white background studio photo'),
      v('Cereal', '🥣', 'Cereal matinal', '/ˈsɪr.i.əl/', 'Cornflakes cereal with cold milk.', 'bowl of cornflakes cereal with milk isolated on pure white background studio photo'),
      v('Raspberry', '❤️', 'Framboesa', '/ˈræzˌber.i/', 'Raspberries are bright red berries.', 'fresh red raspberry fruit isolated on pure white background studio photo'),
      v('Blueberry', '🫐', 'Mirtilo (Blueberry)', '/ˈbluːˌber.i/', 'Blueberries are small blue fruits.', 'fresh blueberries fruit isolated on pure white background studio photo'),
      v('Pomegranate', '🔴', 'Romã', '/ˈpɑː.mɪˌɡræn.ɪt/', 'Pomegranate is full of red seeds.', 'red pomegranate fruit cut open with seeds isolated on pure white background studio photo'),
      v('Dragon Fruit', '🐉', 'Pitaia', '/ˈdræɡ.ən fruːt/', 'Dragon fruit has bright pink skin.', 'pink pitaya dragon fruit whole and half isolated on pure white background studio photo'),
      v('Chestnut', '🌰', 'Castanha / Noz', '/ˈtʃes.nʌt/', 'Crunchy nuts and chestnuts.', 'brown chestnuts nuts isolated on pure white background studio photo'),
    ]
  },

  // ==========================================================================
  // CATEGORIA 2: ANIMAIS (4 MÓDULOS DE 30 ITENS CADA)
  // Progressão pedagógica brasileira:
  // Módulo 5 (1/4): Pets, Quintal & Fazenda (os mais conhecidos por qualquer criança)
  // Módulo 6 (2/4): Animais de Zoológico & Safári (facilmente reconhecidos)
  // Módulo 7 (3/4): Animais Conhecidos pelo Público Geral (Marinhos, Aves e Fauna Brasileira)
  // Módulo 8 (4/4): Animais Menos Comuns & Exóticos
  // ==========================================================================
  {
    phaseNumber: 5,
    title: 'Animais I: Pets, Quintal & Fazenda',
    subtitle: 'Módulo 1/4 • Os 30 animais mais conhecidos pelas famílias no Brasil',
    pedagogicalObjective: 'Reconhecer os animais domésticos, pets e bichos da fazenda mais familiares do dia a dia.',
    icon: 'dog',
    theory: [
      'Começamos pelos animais que toda criança e adulto no Brasil conhece desde cedo: Cachorro (Dog), Gato (Cat), Pássaro (Bird), Peixe (Fish), Coelho (Rabbit), Cavalo (Horse) e Vaca (Cow).',
      'Todos os animais aparecem de corpo inteiro, grandes e isolados em fundo branco.',
      'Ouça a pronúncia nativa americana e selecione a foto correspondente!'
    ],
    items: [
      v('Dog', '🐕', 'Cachorro', '/dɔːɡ/', 'The friendly dog wags its tail.', 'happy golden retriever dog full body sitting isolated on pure white background studio photo'),
      v('Cat', '🐈', 'Gato', '/kæt/', 'The cute cat walks quietly.', 'domestic tabby cat full body standing isolated on pure white background studio photo'),
      v('Bird', '🐦', 'Pássaro / Passarinho', '/bɜːrd/', 'The little bird sings in the morning.', 'colorful songbird full body isolated on pure white background studio photo'),
      v('Fish', '🐟', 'Peixe', '/fɪʃ/', 'The orange goldfish swims in the aquarium.', 'single orange goldfish full body isolated on pure white background studio photo'),
      v('Rabbit', '🐇', 'Coelho', '/ˈræb.ɪt/', 'The white rabbit has long ears.', 'cute rabbit bunny full body isolated on pure white background studio photo'),
      v('Turtle', '🐢', 'Tartaruga / Jabuti', '/ˈtɜːr.təl/', 'The turtle walks slowly with its shell.', 'tortoise land turtle full body isolated on pure white background studio photo'),
      v('Parrot', '🦜', 'Papagaio', '/ˈpær.ət/', 'The green parrot can repeat words.', 'green amazon parrot full body isolated on pure white background studio photo'),
      v('Hamster', '🐹', 'Hamster', '/ˈhæm.stər/', 'The small golden hamster eats seeds.', 'cute golden hamster full body isolated on pure white background studio photo'),
      v('Guinea Pig', '🐹', 'Porquinho-da-índia', '/ˈɡɪn.i pɪɡ/', 'The guinea pig is a gentle pet.', 'cute guinea pig pet full body isolated on pure white background studio photo'),
      v('Horse', '🐎', 'Cavalo', '/hɔːrs/', 'The brown horse runs across the farm.', 'brown horse full body standing isolated on pure white background studio photo'),
      v('Cow', '🐄', 'Vaca', '/kaʊ/', 'The dairy cow gives us fresh milk.', 'black and white dairy cow full body isolated on pure white background studio photo'),
      v('Pig', '🐖', 'Porco', '/pɪɡ/', 'The pink pig lives on the farm.', 'pink farm pig full body standing isolated on pure white background studio photo'),
      v('Chicken', '🐔', 'Galinha', '/ˈtʃɪk.ɪn/', 'The brown hen lays eggs on the farm.', 'brown hen chicken full body standing isolated on pure white background studio photo'),
      v('Rooster', '🐓', 'Galo', '/ˈruː.stər/', 'The rooster crows early in the morning.', 'colorful rooster cock full body standing isolated on pure white background studio photo'),
      v('Chick', '🐥', 'Pintinho', '/tʃɪk/', 'The little yellow chick follows the hen.', 'tiny yellow baby chick bird full body isolated on pure white background studio photo'),
      v('Duck', '🦆', 'Pato', '/dʌk/', 'The white duck swims in the lake.', 'white farm duck full body standing isolated on pure white background studio photo'),
      v('Sheep', '🐑', 'Ovelha', '/ʃiːp/', 'White sheep have soft wool.', 'fluffy white sheep full body standing isolated on pure white background studio photo'),
      v('Goat', '🐐', 'Cabra / Bode', '/ɡoʊt/', 'The goat climbs rocks on the farm.', 'farm goat full body standing isolated on pure white background studio photo'),
      v('Donkey', '🫏', 'Burro / Jegue', '/ˈdɑːŋ.ki/', 'The gray donkey has long ears.', 'gray donkey full body standing isolated on pure white background studio photo'),
      v('Bull', '🐂', 'Touro / Boi', '/bʊl/', 'The strong bull has two horns.', 'brown bull with horns full body isolated on pure white background studio photo'),
      v('Turkey', '🦃', 'Peru', '/ˈtɜːr.ki/', 'The turkey opens its fan tail.', 'turkey bird full body standing isolated on pure white background studio photo'),
      v('Goose', '🪿', 'Ganso', '/ɡuːs/', 'The white goose has a long neck.', 'white goose bird full body standing isolated on pure white background studio photo'),
      v('Mouse', '🐁', 'Rato / Camundongo', '/maʊs/', 'The small mouse loves cheese.', 'small mouse full body isolated on pure white background studio photo'),
      v('Pigeon', '🐦', 'Pombo', '/ˈpɪdʒ.ən/', 'Pigeons walk in the city square.', 'gray city pigeon dove full body isolated on pure white background studio photo'),
      v('Frog', '🐸', 'Sapo / Rã', '/frɔːɡ/', 'The green frog jumps high.', 'green frog full body sitting isolated on pure white background studio photo'),
      v('Butterfly', '🦋', 'Borboleta', '/ˈbʌt.ər.flaɪ/', 'A colorful butterfly lands on a flower.', 'colorful monarch butterfly isolated on pure white background studio photo'),
      v('Bee', '🐝', 'Abelha', '/biː/', 'Honeybees make golden honey.', 'honey bee insect isolated on pure white background studio photo'),
      v('Ant', '🐜', 'Formiga', '/ænt/', 'Small ants carry leaves together.', 'single ant insect macro isolated on pure white background studio photo'),
      v('Ladybug', '🐞', 'Joaninha', '/ˈleɪ.di.bʌɡ/', 'A red ladybug with black spots.', 'red ladybug with black spots isolated on pure white background studio photo'),
      v('Spider', '🕷️', 'Aranha', '/ˈspaɪ.dər/', 'The spider builds a web in the garden.', 'spider arachnid isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 6,
    title: 'Animais II: Atrações do Zoológico & Safári',
    subtitle: 'Módulo 2/4 • 30 animais famosos que todos conhecem dos zoológicos',
    pedagogicalObjective: 'Identificar os grandes animais facilmente encontrados em zoológicos, livros e filmes.',
    icon: 'dog',
    theory: [
      'Depois dos pets e animais de fazenda, avançamos para os 30 animais mais famosos dos zoológicos!',
      'Inclui Leão (Lion), Tigre (Tiger), Elefante (Elephant), Girafa (Giraffe), Macaco (Monkey), Zebra, Urso (Bear), Jacaré (Alligator), Onça (Jaguar), Tucano (Toucan) e Arara (Macaw).',
      'Todos em fotos limpas de corpo inteiro em destaque sobre fundo branco.'
    ],
    items: [
      v('Lion', '🦁', 'Leão', '/ˈlaɪ.ən/', 'The lion has a large golden mane.', 'adult male lion full body standing isolated on pure white background studio photo'),
      v('Tiger', '🐅', 'Tigre', '/ˈtaɪ.ɡər/', 'The orange tiger has black stripes.', 'bengal tiger full body standing isolated on pure white background studio photo'),
      v('Elephant', '🐘', 'Elefante', '/ˈel.ɪ.fənt/', 'The elephant has a long trunk and big ears.', 'african elephant full body standing isolated on pure white background studio photo'),
      v('Giraffe', '🦒', 'Girafa', '/dʒɪˈræf/', 'The tall giraffe eats leaves from high trees.', 'giraffe full body standing isolated on pure white background studio photo'),
      v('Monkey', '🐒', 'Macaco', '/ˈmʌŋ.ki/', 'The playful monkey loves bananas.', 'capuchin monkey full body sitting isolated on pure white background studio photo'),
      v('Zebra', '🦓', 'Zebra', '/ˈziː.brə/', 'The zebra has black and white stripes.', 'zebra full body standing isolated on pure white background studio photo'),
      v('Bear', '🐻', 'Urso', '/ber/', 'The big brown bear walks in the forest.', 'brown bear full body standing isolated on pure white background studio photo'),
      v('Panda', '🐼', 'Urso Panda', '/ˈpæn.də/', 'The giant panda eats green bamboo.', 'giant panda bear full body sitting isolated on pure white background studio photo'),
      v('Polar Bear', '🐻‍❄️', 'Urso Polar', '/ˈpoʊ.lər ber/', 'The white polar bear lives on the ice.', 'white polar bear full body standing isolated on pure white background studio photo'),
      v('Hippopotamus', '🦛', 'Hipopótamo', '/ˌhɪp.əˈpɑː.tə.məs/', 'The heavy hippopotamus loves the water.', 'hippopotamus full body standing isolated on pure white background studio photo'),
      v('Rhinoceros', '🦏', 'Rinoceronte', '/raɪˈnɑː.sər.əs/', 'The rhinoceros has a horn on its nose.', 'rhinoceros full body standing isolated on pure white background studio photo'),
      v('Alligator', '🐊', 'Jacaré', '/ˈæl.ɪ.ɡeɪ.tər/', 'The alligator lives in Brazilian rivers and pantanal.', 'alligator caiman full body isolated on pure white background studio photo'),
      v('Crocodile', '🐊', 'Crocodilo', '/ˈkrɑː.kə.daɪl/', 'The large crocodile has sharp teeth.', 'crocodile full body isolated on pure white background studio photo'),
      v('Snake', '🐍', 'Cobra / Serpente', '/sneɪk/', 'The snake slithers across the ground.', 'green snake coiled full body isolated on pure white background studio photo'),
      v('Gorilla', '🦍', 'Gorila', '/ɡəˈrɪl.ə/', 'The strong gorilla beats its chest.', 'silverback gorilla full body isolated on pure white background studio photo'),
      v('Chimpanzee', '🐒', 'Chimpanzé', '/ˌtʃɪm.pænˈziː/', 'Chimpanzees are very intelligent primates.', 'chimpanzee full body sitting isolated on pure white background studio photo'),
      v('Kangaroo', '🦘', 'Canguru', '/ˌkæŋ.ɡəˈruː/', 'The kangaroo jumps on its strong back legs.', 'kangaroo full body standing isolated on pure white background studio photo'),
      v('Koala', '🐨', 'Coala', '/koʊˈɑː.lə/', 'The gray koala holds onto a branch.', 'koala bear full body isolated on pure white background studio photo'),
      v('Camel', '🐪', 'Camelo', '/ˈkæm.əl/', 'The desert camel has a hump on its back.', 'camel full body standing isolated on pure white background studio photo'),
      v('Wolf', '🐺', 'Lobo', '/wʊlf/', 'The gray wolf howls at night.', 'gray wolf full body standing isolated on pure white background studio photo'),
      v('Fox', '🦊', 'Raposa', '/fɑːks/', 'The red fox has a fluffy tail.', 'red fox full body standing isolated on pure white background studio photo'),
      v('Deer', '🦌', 'Cervo / Veado', '/dɪr/', 'The forest deer has branching antlers.', 'male deer stag full body standing isolated on pure white background studio photo'),
      v('Jaguar', '🐆', 'Onça-pintada', '/ˈdʒæɡ.wɑːr/', 'The jaguar is the largest cat in Brazil.', 'spotted jaguar full body standing isolated on pure white background studio photo'),
      v('Leopard', '🐆', 'Leopardo', '/ˈlep.ərd/', 'The leopard climbs trees with ease.', 'leopard cat full body standing isolated on pure white background studio photo'),
      v('Cheetah', '🐆', 'Guepardo', '/ˈtʃiː.tə/', 'The cheetah is the fastest land animal.', 'cheetah full body standing isolated on pure white background studio photo'),
      v('Penguin', '🐧', 'Pinguim', '/ˈpeŋ.ɡwɪn/', 'Penguins walk on the snow and swim well.', 'emperor penguin full body standing isolated on pure white background studio photo'),
      v('Flamingo', '🦩', 'Flamingo', '/fləˈmɪŋ.ɡoʊ/', 'The pink flamingo has long thin legs.', 'pink flamingo bird full body standing isolated on pure white background studio photo'),
      v('Peacock', '🦚', 'Pavão', '/ˈpiː.kɑːk/', 'The peacock has colorful tail feathers.', 'male peacock bird full body isolated on pure white background studio photo'),
      v('Toucan', '🦜', 'Tucano', '/ˈtuː.kæn/', 'The Brazilian toucan has a big orange beak.', 'toco toucan bird full body isolated on pure white background studio photo'),
      v('Macaw', '🦜', 'Arara', '/məˈkɔː/', 'Blue and red macaws fly across the Brazilian sky.', 'red and blue macaw arara bird full body isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 7,
    title: 'Animais III: Marinhos, Aves & Fauna Conhecida',
    subtitle: 'Módulo 3/4 • 30 animais do mar e da natureza conhecidos pelo público geral',
    pedagogicalObjective: 'Reconhecer animais marinhos famosos, aves conhecidas e animais típicos da fauna brasileira.',
    icon: 'dog',
    theory: [
      'Neste terceiro módulo avançamos para os animais do oceano e da fauna brasileira que todo mundo conhece.',
      'Inclui Tubarão (Shark), Baleia (Whale), Golfinho (Dolphin), Polvo (Octopus), Águia (Eagle), Coruja (Owl), Beija-flor (Hummingbird), Capivara (Capybara), Bicho-preguiça (Sloth), Tamanduá (Anteater) e Tatu (Armadillo).',
      'Repare como cada espécie está isolada com nitidez em fundo branco.'
    ],
    items: [
      v('Shark', '🦈', 'Tubarão', '/ʃɑːrk/', 'The great shark swims in the ocean.', 'great white shark full body isolated on pure white background studio photo'),
      v('Whale', '🐋', 'Baleia', '/weɪl/', 'The whale is the biggest animal in the sea.', 'humpback whale full body isolated on pure white background studio photo'),
      v('Dolphin', '🐬', 'Golfinho', '/ˈdɑːl.fɪn/', 'Friendly dolphins jump out of the water.', 'bottlenose dolphin full body isolated on pure white background studio photo'),
      v('Octopus', '🐙', 'Polvo', '/ˈɑːk.tə.pəs/', 'An octopus has eight tentacles.', 'octopus full body isolated on pure white background studio photo'),
      v('Crab', '🦀', 'Caranguejo / Siri', '/kræb/', 'The red crab walks on the beach sand.', 'red crab full body isolated on pure white background studio photo'),
      v('Starfish', '⭐', 'Estrela-do-mar', '/ˈstɑːr.fɪʃ/', 'A five-pointed starfish on the ocean floor.', 'orange starfish sea star isolated on pure white background studio photo'),
      v('Seahorse', '🐠', 'Cavalo-marinho', '/ˈsiː.hɔːrs/', 'The tiny seahorse curls its tail.', 'yellow seahorse full body isolated on pure white background studio photo'),
      v('Jellyfish', '🪼', 'Água-viva', '/ˈdʒel.i.fɪʃ/', 'Jellyfish float gracefully in the sea.', 'jellyfish sea animal isolated on pure white background studio photo'),
      v('Seal', '🦭', 'Foca', '/siːl/', 'The cute seal swims in cold water.', 'harbor seal full body isolated on pure white background studio photo'),
      v('Sea Turtle', '🐢', 'Tartaruga-marinha', '/ˈsiː ˌtɜːr.təl/', 'The sea turtle swims across the ocean.', 'green sea turtle full body isolated on pure white background studio photo'),
      v('Clownfish', '🐠', 'Peixe-palhaço', '/ˈklaʊn.fɪʃ/', 'The orange and white clownfish lives in coral reefs.', 'orange clownfish nemo fish isolated on pure white background studio photo'),
      v('Eagle', '🦅', 'Águia', '/ˈiː.ɡəl/', 'The eagle flies high in the sky.', 'bald eagle bird full body isolated on pure white background studio photo'),
      v('Owl', '🦉', 'Coruja', '/aʊl/', 'The owl has big round eyes and stays awake at night.', 'owl bird full body perching isolated on pure white background studio photo'),
      v('Hawk', '🦅', 'Gavião / Falcão', '/hɔːk/', 'The hawk has sharp eyesight.', 'hawk falcon bird full body isolated on pure white background studio photo'),
      v('Swan', '🦢', 'Cisne', '/swɑːn/', 'The white swan glides on the lake.', 'white swan bird full body isolated on pure white background studio photo'),
      v('Hummingbird', '🐦', 'Beija-flor', '/ˈhʌm.ɪŋ.bɜːrd/', 'The tiny hummingbird hovers near flowers.', 'colorful hummingbird flying isolated on pure white background studio photo'),
      v('Woodpecker', '🐦', 'Pica-pau', '/ˈwʊdˌpek.ər/', 'The woodpecker taps on tree trunks.', 'red headed woodpecker bird full body isolated on pure white background studio photo'),
      v('Ostrich', '🐦', 'Avestruz / Ema', '/ˈɔː.strɪtʃ/', 'The tall ostrich runs very fast.', 'ostrich bird full body standing isolated on pure white background studio photo'),
      v('Capybara', '🐹', 'Capivara', '/ˌkæp.ɪˈbɑː.rə/', 'The capybara is a very famous Brazilian animal.', 'capybara full body standing isolated on pure white background studio photo'),
      v('Sloth', '🦥', 'Bicho-preguiça', '/slɔːθ/', 'The sloth moves very slowly in the trees.', 'three toed sloth full body isolated on pure white background studio photo'),
      v('Anteater', '🐜', 'Tamanduá', '/ˈæntˌiː.tər/', 'The giant anteater has a long snout.', 'giant anteater tamandua full body standing isolated on pure white background studio photo'),
      v('Armadillo', '🦔', 'Tatu', '/ˌɑːr.məˈdɪl.oʊ/', 'The armadillo has a protective armor shell.', 'armadillo tatu full body standing isolated on pure white background studio photo'),
      v('Bat', '🦇', 'Morcego', '/bæt/', 'Bats fly at night and eat fruits or insects.', 'bat with open wings isolated on pure white background studio photo'),
      v('Squirrel', '🐿️', 'Esquilo', '/ˈskwɜːr.əl/', 'The squirrel holds a nut in its paws.', 'red squirrel holding nut full body isolated on pure white background studio photo'),
      v('Lizard', '🦎', 'Lagarto / Lagartixa', '/ˈlɪz.ərd/', 'A green lizard rests on the warm stone.', 'green lizard reptile full body isolated on pure white background studio photo'),
      v('Iguana', '🦎', 'Iguana', '/ɪˈɡwɑː.nə/', 'Green iguanas love sunny trees.', 'green iguana full body isolated on pure white background studio photo'),
      v('Chameleon', '🦎', 'Camaleão', '/kəˈmiː.li.ən/', 'The chameleon can change its skin color.', 'colorful chameleon lizard full body isolated on pure white background studio photo'),
      v('Snail', '🐌', 'Caracol / Caramujo', '/sneɪl/', 'The snail carries a spiral shell.', 'garden snail with shell isolated on pure white background studio photo'),
      v('Caterpillar', '🐛', 'Lagarta', '/ˈkæt.ərˌpɪl.ər/', 'The green caterpillar will become a butterfly.', 'green caterpillar insect isolated on pure white background studio photo'),
      v('Mosquito', '🦟', 'Mosquito / Pernilongo', '/məˈskiː.toʊ/', 'Close the window screen to keep mosquitoes out.', 'mosquito insect isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 8,
    title: 'Animais IV: Animais Menos Comuns & Exóticos',
    subtitle: 'Módulo 4/4 • 30 animais menos frequentes no cotidiano',
    pedagogicalObjective: 'Expandir o vocabulário com 30 animais menos cotidianos, porém presentes em documentários e livros.',
    icon: 'dog',
    theory: [
      'Somente aqui no 4º e último módulo de animais entramos nos bichos menos comuns do dia a dia.',
      'Inclui Lagosta (Lobster), Lula (Squid), Arraia (Stingray), Orca, Piranha, Lhama (Llama), Orangotango (Orangutan), Hiena (Hyena), Porco-espinho (Hedgehog), Guaxinim (Raccoon), Lontra (Otter), Castor (Beaver), Suricato (Meerkat) e Ornitorrinco (Platypus).',
      'Conclua para dominar todos os 120 animais do curso!'
    ],
    items: [
      v('Lobster', '🦞', 'Lagosta', '/ˈlɑːb.stər/', 'The red lobster has two big claws.', 'red lobster crustacean full body isolated on pure white background studio photo'),
      v('Squid', '🦑', 'Lula', '/skwɪd/', 'The squid swims fast in deep water.', 'squid sea animal isolated on pure white background studio photo'),
      v('Stingray', '🐟', 'Arraia', '/ˈstɪŋ.reɪ/', 'The flat stingray glides near the ocean floor.', 'stingray manta ray fish isolated on pure white background studio photo'),
      v('Orca', '🐋', 'Orca (Baleia-assassina)', '/ˈɔːr.kə/', 'The black and white orca leaps from the sea.', 'orca killer whale full body isolated on pure white background studio photo'),
      v('Piranha', '🐟', 'Piranha', '/pɪˈrɑː.njə/', 'The piranha is an Amazon river fish with sharp teeth.', 'red bellied piranha fish isolated on pure white background studio photo'),
      v('Blowfish', '🐡', 'Baiacu', '/ˈbloʊ.fɪʃ/', 'The blowfish puffs up like a round ball.', 'pufferfish blowfish inflated isolated on pure white background studio photo'),
      v('Walrus', '🦭', 'Morsa', '/ˈwɔːl.rəs/', 'The arctic walrus has two long ivory tusks.', 'walrus with tusks full body isolated on pure white background studio photo'),
      v('Pelican', '🐦', 'Pelicano', '/ˈpel.ɪ.kən/', 'The pelican catches fish in its large throat pouch.', 'pelican bird full body isolated on pure white background studio photo'),
      v('Stork', '🐦', 'Cegonha', '/stɔːrk/', 'The white stork builds big nests on roofs.', 'white stork bird full body standing isolated on pure white background studio photo'),
      v('Seagull', '🐦', 'Gaivota', '/ˈsiː.ɡʌl/', 'Seagulls fly over the beach.', 'white seagull bird full body standing isolated on pure white background studio photo'),
      v('Crow', '🐦‍⬛', 'Corvo', '/kroʊ/', 'The black crow is a very smart bird.', 'black crow raven bird full body isolated on pure white background studio photo'),
      v('Vulture', '🦅', 'Urubu / Abutre', '/ˈvʌl.tʃər/', 'Vultures soar high on warm air currents.', 'vulture bird full body standing isolated on pure white background studio photo'),
      v('Canary', '🐤', 'Canário', '/kəˈner.i/', 'The yellow canary sings a bright song.', 'yellow canary bird full body isolated on pure white background studio photo'),
      v('Llama', '🦙', 'Lhama', '/ˈlɑː.mə/', 'Llamas live in the Andes mountains of South America.', 'white llama full body standing isolated on pure white background studio photo'),
      v('Orangutan', '🦧', 'Orangotango', '/əˈræŋ.ə.tæn/', 'The orangutan has long reddish hair.', 'orangutan ape full body sitting isolated on pure white background studio photo'),
      v('Hyena', '🐕', 'Hiena', '/haɪˈiː.nə/', 'Spotted hyenas live in the African savanna.', 'spotted hyena full body standing isolated on pure white background studio photo'),
      v('Bison', '🦬', 'Búfalo / Bisão', '/ˈbaɪ.sən/', 'The large bison has thick fur on its shoulders.', 'american bison buffalo full body standing isolated on pure white background studio photo'),
      v('Boar', '🐗', 'Javali', '/bɔːr/', 'The wild boar has curved tusks.', 'wild boar pig full body standing isolated on pure white background studio photo'),
      v('Moose', '🫎', 'Alce', '/muːs/', 'The northern moose has huge flat antlers.', 'moose with antlers full body standing isolated on pure white background studio photo'),
      v('Hedgehog', '🦔', 'Porco-espinho / Ouriço', '/ˈhedʒ.hɔːɡ/', 'The little hedgehog curls into a spiky ball.', 'cute hedgehog full body isolated on pure white background studio photo'),
      v('Raccoon', '🦝', 'Guaxinim', '/ræˈkuːn/', 'The raccoon looks like it is wearing a black mask.', 'raccoon full body standing isolated on pure white background studio photo'),
      v('Otter', '🦦', 'Lontra', '/ˈɑː.tər/', 'River otters are playful swimmers.', 'river otter full body isolated on pure white background studio photo'),
      v('Beaver', '🦫', 'Castor', '/ˈbiː.vər/', 'The beaver has strong teeth and a flat tail.', 'beaver animal full body isolated on pure white background studio photo'),
      v('Skunk', '🦨', 'Gambá', '/skʌŋk/', 'The black skunk has a white stripe down its back.', 'striped skunk full body isolated on pure white background studio photo'),
      v('Meerkat', '🐿️', 'Suricato', '/ˈmɪr.kæt/', 'The meerkat stands upright to watch the desert.', 'meerkat standing upright full body isolated on pure white background studio photo'),
      v('Platypus', '🦆', 'Ornitorrinco', '/ˈplæt.ɪ.pəs/', 'The Australian platypus has a duck bill and beaver tail.', 'platypus animal full body isolated on pure white background studio photo'),
      v('Scorpion', '🦂', 'Escorpião', '/ˈskɔːr.pi.ən/', 'The scorpion has pincers and a curved tail.', 'scorpion arachnid isolated on pure white background studio photo'),
      v('Grasshopper', '🦗', 'Gafanhoto / Grilo', '/ˈɡræsˌhɑː.pər/', 'The green grasshopper jumps in the grass.', 'green grasshopper insect isolated on pure white background studio photo'),
      v('Dragonfly', '蜻', 'Libélula', '/ˈdræɡ.ən.flaɪ/', 'A dragonfly has four transparent wings.', 'blue dragonfly insect isolated on pure white background studio photo'),
      v('Beetle', '🪲', 'Besouro', '/ˈbiː.təl/', 'The shiny beetle has a hard shell.', 'shiny beetle insect isolated on pure white background studio photo'),
    ]
  },

  // ==========================================================================
  // CATEGORIA 3: CASA, MÓVEIS & OBJETOS DO COTIDIANO (4 MÓDULOS DE 30 ITENS)
  // ==========================================================================
  {
    phaseNumber: 9,
    title: 'Casa & Objetos I: Móveis, Quarto & Banheiro',
    subtitle: 'Módulo 1/4 • Os 30 móveis e objetos mais comuns dentro de casa',
    pedagogicalObjective: 'Reconhecer os móveis e objetos essenciais de casa em fotos isoladas em fundo branco.',
    icon: 'house',
    theory: [
      'Começamos pelos 30 itens mais presentes em qualquer casa brasileira: Cama (Bed), Cadeira (Chair), Mesa (Table), Sofá (Sofa), Travesseiro (Pillow), Porta (Door), Janela (Window), Chuveiro (Shower) e Escova de Dentes (Toothbrush).',
      'Cada móvel ou objeto aparece isolado em fundo branco, sem cômodos bagunçados ao fundo.',
      'Ouça a pronúncia em inglês americano e selecione a imagem correta!'
    ],
    items: [
      v('Bed', '🛏️', 'Cama', '/bed/', 'I sleep in a comfortable bed.', 'single wooden bed with mattress and pillow isolated on pure white background studio photo'),
      v('Chair', '🪑', 'Cadeira', '/tʃer/', 'Please sit down on this wooden chair.', 'single wooden dining chair isolated on pure white background studio photo'),
      v('Table', '🪑', 'Mesa', '/ˈteɪ.bəl/', 'Dinner is served on the wooden table.', 'empty wooden dining table isolated on pure white background studio photo'),
      v('Sofa', '🛋️', 'Sofá', '/ˈsoʊ.fə/', 'The family sits together on the living room sofa.', 'modern comfortable sofa couch isolated on pure white background studio photo'),
      v('Pillow', '⬜', 'Travesseiro', '/ˈpɪl.oʊ/', 'I rest my head on a soft white pillow.', 'single soft white bed pillow isolated on pure white background studio photo'),
      v('Blanket', '🛌', 'Cobertor / Edredom', '/ˈblæŋ.kɪt/', 'A warm folded blanket for cold nights.', 'folded cozy wool blanket isolated on pure white background studio photo'),
      v('Door', '🚪', 'Porta', '/dɔːr/', 'Please close the wooden door.', 'single wooden house door isolated on pure white background studio photo'),
      v('Window', '🪟', 'Janela', '/ˈwɪn.doʊ/', 'Open the house window to let fresh air in.', 'modern house glass window frame isolated on pure white background studio photo'),
      v('Key', '🔑', 'Chave', '/kiː/', 'Keep your house key in your pocket.', 'metal house key isolated on pure white background studio photo'),
      v('Television', '📺', 'Televisão (TV)', '/ˈtel.ə.vɪʒ.ən/', 'We watch movies on the flat-screen television.', 'modern flat screen smart tv television isolated on pure white background studio photo'),
      v('Lamp', '💡', 'Abajur / Luminária', '/læmp/', 'Turn on the bedside table lamp.', 'table lamp with lampshade isolated on pure white background studio photo'),
      v('Mirror', '🪞', 'Espelho', '/ˈmɪr.ər/', 'She looked in the framed mirror.', 'oval wall mirror in frame isolated on pure white background studio photo'),
      v('Clock', '⏰', 'Relógio de parede / Despertador', '/klɑːk/', 'Look at the round wall clock to check the time.', 'round analog wall clock isolated on pure white background studio photo'),
      v('Wardrobe', '🚪', 'Guarda-roupa', '/ˈwɔːr.droʊb/', 'Hang your clothes inside the wooden wardrobe.', 'wooden bedroom wardrobe closet isolated on pure white background studio photo'),
      v('Rug', '🟥', 'Tapete', '/rʌɡ/', 'A soft woven rug on the floor.', 'decorative living room floor rug carpet isolated on pure white background studio photo'),
      v('Curtain', '🪟', 'Cortina', '/ˈkɜːr.tən/', 'Close the window curtains at night.', 'window curtains drapes isolated on pure white background studio photo'),
      v('Bookshelf', '📚', 'Estante de livros', '/ˈbʊk.ʃelf/', 'The wooden bookshelf holds many books.', 'wooden bookshelf bookcase with books isolated on pure white background studio photo'),
      v('Fan', '🌀', 'Ventilador', '/fæn/', 'Turn on the electric fan on hot days.', 'electric table fan isolated on pure white background studio photo'),
      v('Air Conditioner', '❄️', 'Ar-condicionado', '/ˈer kənˌdɪʃ.ən.ər/', 'The wall air conditioner cools the bedroom.', 'white split wall air conditioner unit isolated on pure white background studio photo'),
      v('Shower', '🚿', 'Chuveiro', '/ˈʃaʊ.ər/', 'Take a warm shower in the bathroom.', 'chrome bathroom shower head with water drops isolated on pure white background studio photo'),
      v('Towel', '🧺', 'Toalha de banho', '/ˈtaʊ.əl/', 'Dry your hands with a clean cotton towel.', 'folded cotton bath towel isolated on pure white background studio photo'),
      v('Soap', '🧼', 'Sabonete', '/soʊp/', 'Wash your hands with a bar of soap.', 'bar of bath soap with foam isolated on pure white background studio photo'),
      v('Toothbrush', '🪥', 'Escova de dentes', '/ˈtuːθ.brʌʃ/', 'Brush your teeth with a toothbrush after meals.', 'single toothbrush isolated on pure white background studio photo'),
      v('Toothpaste', '🪥', 'Pasta de dente', '/ˈtuːθ.peɪst/', 'Put toothpaste on your toothbrush.', 'toothpaste tube isolated on pure white background studio photo'),
      v('Toilet', '🚽', 'Vaso sanitário', '/ˈtɔɪ.lət/', 'A clean white ceramic bathroom toilet.', 'white ceramic bathroom toilet bowl isolated on pure white background studio photo'),
      v('Toilet Paper', '🧻', 'Papel higiênico', '/ˈtɔɪ.lət ˈpeɪ.pər/', 'A white roll of soft toilet paper.', 'single roll of white toilet paper isolated on pure white background studio photo'),
      v('Trash Can', '🗑️', 'Lixeira', '/ˈtræʃ kæn/', 'Throw the wrapper into the trash can.', 'stainless steel pedal trash can bin isolated on pure white background studio photo'),
      v('Broom', '🧹', 'Vassoura', '/bruːm/', 'Sweep the floor with a broom.', 'household sweeping broom isolated on pure white background studio photo'),
      v('Bucket', '🪣', 'Balde', '/ˈbʌk.ɪt/', 'Fill the plastic bucket with water.', 'blue plastic cleaning bucket with handle isolated on pure white background studio photo'),
      v('Plant Pot', '🪴', 'Vaso de planta', '/ˈplænt pɑːt/', 'A green indoor plant in a ceramic pot.', 'green houseplant in terracotta pot isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 10,
    title: 'Casa & Objetos II: Cozinha & Eletrodomésticos',
    subtitle: 'Módulo 2/4 • 30 utensílios e eletrodomésticos da cozinha brasileira',
    pedagogicalObjective: 'Dominar o vocabulário de louças, talheres, panelas e eletrodomésticos.',
    icon: 'house',
    theory: [
      'Neste segundo módulo da casa estudamos os 30 objetos mais comuns da cozinha.',
      'Inclui Prato (Plate), Copo (Glass), Xícara (Cup), Garfo (Fork), Faca (Knife), Colher (Spoon), Geladeira (Fridge), Fogão (Stove), Liquidificador (Blender) e Panela de Pressão (Pressure Cooker).',
      'Repare que em Knife (/naɪf/) a letra K inicial não é pronunciada!'
    ],
    items: [
      v('Plate', '🍽️', 'Prato', '/pleɪt/', 'Put the food on a clean white plate.', 'single empty white ceramic dinner plate isolated on pure white background studio photo'),
      v('Cup', '☕', 'Xícara', '/kʌp/', 'A porcelain cup with a handle.', 'empty white ceramic coffee cup with saucer isolated on pure white background studio photo'),
      v('Glass', '🥛', 'Copo de vidro', '/ɡlæs/', 'Pour cold water into the drinking glass.', 'empty clear drinking glass tumbler isolated on pure white background studio photo'),
      v('Fork', '🍴', 'Garfo', '/fɔːrk/', 'Use a metal fork to eat your meal.', 'single stainless steel dinner fork isolated on pure white background studio photo'),
      v('Knife', '🔪', 'Faca', '/naɪf/', 'The chef uses a sharp kitchen knife.', 'single kitchen chef knife isolated on pure white background studio photo'),
      v('Spoon', '🥄', 'Colher', '/spuːn/', 'Stir the soup with a metal spoon.', 'single stainless steel soup spoon isolated on pure white background studio photo'),
      v('Bowl', '🥣', 'Tigela / Cumbuca', '/boʊl/', 'A round ceramic bowl for cereal or soup.', 'single ceramic soup bowl isolated on pure white background studio photo'),
      v('Bottle', '🍾', 'Garrafa', '/ˈbɑː.təl/', 'Fill the reusable water bottle.', 'water bottle container isolated on pure white background studio photo'),
      v('Napkin', '🧻', 'Guardanapo', '/ˈnæp.kɪn/', 'Wipe your mouth with a paper napkin.', 'folded table napkin isolated on pure white background studio photo'),
      v('Fridge', '🧊', 'Geladeira', '/frɪdʒ/', 'Keep milk and fruit cold inside the fridge.', 'modern silver kitchen refrigerator fridge closed isolated on pure white background studio photo'),
      v('Stove', '🔥', 'Fogão', '/stoʊv/', 'Cook dinner on the gas kitchen stove.', 'kitchen gas stove range with oven isolated on pure white background studio photo'),
      v('Microwave', '⏲️', 'Micro-ondas', '/ˈmaɪ.krə.weɪv/', 'Heat the food in the microwave oven.', 'kitchen microwave oven appliance isolated on pure white background studio photo'),
      v('Blender', '🌪️', 'Liquidificador', '/ˈblen.dər/', 'Make fresh fruit juice in the electric blender.', 'electric kitchen blender appliance isolated on pure white background studio photo'),
      v('Toaster', '🍞', 'Torradeira', '/ˈtoʊ.stər/', 'Make warm crispy toast in the toaster.', 'chrome electric bread toaster isolated on pure white background studio photo'),
      v('Coffee Maker', '☕', 'Cafeteira', '/ˈkɔː.fi ˌmeɪ.kər/', 'Brew morning coffee in the coffee maker.', 'electric drip coffee maker machine isolated on pure white background studio photo'),
      v('Frying Pan', '🍳', 'Frigideira', '/ˈfraɪ.ɪŋ pæn/', 'Fry the egg in a non-stick frying pan.', 'black nonstick frying pan skillet isolated on pure white background studio photo'),
      v('Cooking Pot', '🍲', 'Panela', '/ˈkʊk.ɪŋ pɑːt/', 'Boil water for pasta in a cooking pot.', 'stainless steel cooking pot with lid isolated on pure white background studio photo'),
      v('Pressure Cooker', '🍲', 'Panela de pressão', '/ˈpreʃ.ər ˌkʊk.ər/', 'Cook beans quickly in the pressure cooker.', 'aluminum kitchen pressure cooker pot isolated on pure white background studio photo'),
      v('Cutting Board', '🪵', 'Tábua de corte', '/ˈkʌt.ɪŋ bɔːrd/', 'Chop vegetables on a wooden cutting board.', 'wooden kitchen cutting board isolated on pure white background studio photo'),
      v('Sponge', '🧽', 'Esponja de lavar louça', '/spʌndʒ/', 'Wash the plates with a yellow and green sponge.', 'yellow and green kitchen dish washing sponge isolated on pure white background studio photo'),
      v('Washing Machine', '🫧', 'Máquina de lavar roupa', '/ˈwɑː.ʃɪŋ məˌʃiːn/', 'Wash your clothes in the washing machine.', 'front load clothes washing machine isolated on pure white background studio photo'),
      v('Clothes Iron', '💨', 'Ferro de passar roupa', '/ˈkloʊðz ˌaɪ.ərn/', 'Press the shirt with a warm clothes iron.', 'electric steam clothes iron isolated on pure white background studio photo'),
      v('Kettle', '🫖', 'Chaleira', '/ˈket.əl/', 'Heat water for tea in the kettle.', 'stainless steel tea kettle with spout isolated on pure white background studio photo'),
      v('Jar', '🫙', 'Pote de vidro', '/dʒɑːr/', 'Keep cookies or jam inside a glass jar.', 'clear glass mason jar with lid isolated on pure white background studio photo'),
      v('Salt Shaker', '🧂', 'Saleiro', '/ˈsɔːlt ˌʃeɪ.kər/', 'Add a pinch of salt from the salt shaker.', 'glass salt shaker with metal top isolated on pure white background studio photo'),
      v('Tin Can', '🥫', 'Lata de alumínio / conserva', '/ˈtɪn kæn/', 'Open a metal tin can of corn.', 'metal food tin can isolated on pure white background studio photo'),
      v('Drinking Straw', '🥤', 'Canudo', '/ˈdrɪŋ.kɪŋ strɔː/', 'Drink the cold juice with a drinking straw.', 'colorful bendy drinking straws isolated on pure white background studio photo'),
      v('Tray', '🍽️', 'Bandeja', '/treɪ/', 'Carry the cups on a serving tray.', 'wooden serving tray with handles isolated on pure white background studio photo'),
      v('Apron', '🎽', 'Avental de cozinha', '/ˈeɪ.prən/', 'Wear a kitchen apron while cooking.', 'chef kitchen apron isolated on pure white background studio photo'),
      v('Kitchen Scale', '⚖️', 'Balança de cozinha', '/ˈkɪtʃ.ən skeɪl/', 'Weigh the ingredients on the digital kitchen scale.', 'digital kitchen food scale isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 11,
    title: 'Casa & Objetos III: Escola, Escritório & Tecnologia',
    subtitle: 'Módulo 3/4 • 30 itens de estudo, papelaria e eletrônicos do cotidiano',
    pedagogicalObjective: 'Reconhecer aparelhos eletrônicos, materiais escolares e objetos pessoais.',
    icon: 'book',
    theory: [
      'Aqui reunimos os 30 objetos de tecnologia e material escolar que todo estudante e profissional usa.',
      'Desde Celular (Phone), Computador (Computer) e Fone de Ouvido (Headphones) até Livro (Book), Caderno (Notebook), Caneta (Pen), Lápis (Pencil), Borracha (Eraser) e Mochila (Backpack).',
      'Todas as imagens mostram o objeto único em destaque sobre fundo branco.'
    ],
    items: [
      v('Phone', '📱', 'Celular / Smartphone', '/foʊn/', 'I use my smartphone to study English.', 'modern smartphone mobile phone isolated on pure white background studio photo'),
      v('Computer', '💻', 'Computador / Notebook', '/kəmˈpjuː.tər/', 'She works on her laptop computer.', 'open silver laptop computer isolated on pure white background studio photo'),
      v('Headphones', '🎧', 'Fone de ouvido', '/ˈhed.foʊnz/', 'Put on your headphones to listen to the audio.', 'over ear wireless headphones isolated on pure white background studio photo'),
      v('Charger', '🔌', 'Carregador de celular', '/ˈtʃɑːr.dʒər/', 'Plug in the phone charger to recharge the battery.', 'white usb phone wall charger with cable isolated on pure white background studio photo'),
      v('Remote Control', '🎛️', 'Controle remoto', '/rɪˈmoʊt kənˈtroʊl/', 'Use the remote control to turn on the TV.', 'black tv remote control isolated on pure white background studio photo'),
      v('Camera', '📷', 'Câmera fotográfica', '/ˈkæm.rə/', 'Take a clear photo with the digital camera.', 'digital dslr photo camera isolated on pure white background studio photo'),
      v('Keyboard', '⌨️', 'Teclado de computador', '/ˈkiː.bɔːrd/', 'Type the sentence on the computer keyboard.', 'computer keyboard isolated on pure white background studio photo'),
      v('Computer Mouse', '🖱️', 'Mouse de computador', '/kəmˈpjuː.tər maʊs/', 'Click the button using the wireless computer mouse.', 'wireless computer mouse isolated on pure white background studio photo'),
      v('Printer', '🖨️', 'Impressora', '/ˈprɪn.tər/', 'Print the page on the office printer.', 'home office inkjet printer isolated on pure white background studio photo'),
      v('Book', '📘', 'Livro', '/bʊk/', 'Read a chapter of your book every night.', 'single hardcover book isolated on pure white background studio photo'),
      v('Notebook', '📓', 'Caderno espiral', '/ˈnoʊt.bʊk/', 'Write the new English words in your spiral notebook.', 'spiral school notebook pad isolated on pure white background studio photo'),
      v('Pen', '🖊️', 'Caneta', '/pen/', 'Write your name with a blue ballpoint pen.', 'single blue ballpoint pen isolated on pure white background studio photo'),
      v('Pencil', '✏️', 'Lápis', '/ˈpen.səl/', 'Draw a picture with a wooden pencil.', 'single yellow wooden pencil with eraser isolated on pure white background studio photo'),
      v('Eraser', '⬜', 'Borracha escolar', '/ɪˈreɪ.sər/', 'Use a rubber eraser to fix the pencil mistake.', 'school pencil rubber eraser isolated on pure white background studio photo'),
      v('Sharpener', '✏️', 'Apontador de lápis', '/ˈʃɑːr.pən.ər/', 'Sharpen the pencil point with a sharpener.', 'small school pencil sharpener isolated on pure white background studio photo'),
      v('Ruler', '📏', 'Régua', '/ˈruː.lər/', 'Draw a straight line using a ruler.', 'school metric ruler isolated on pure white background studio photo'),
      v('Backpack', '🎒', 'Mochila', '/ˈbæk.pæk/', 'Carry your books inside a school backpack.', 'school backpack bag isolated on pure white background studio photo'),
      v('Scissors', '✂️', 'Tesoura', '/ˈsɪz.ərz/', 'Cut the paper carefully with scissors.', 'pair of school scissors isolated on pure white background studio photo'),
      v('Glue', '🧴', 'Cola escolar', '/ɡluː/', 'Stick the paper with white school glue.', 'school glue stick bottle isolated on pure white background studio photo'),
      v('Crayon', '🖍️', 'Giz de cera', '/ˈkreɪ.ɑːn/', 'Children color drawings with colorful wax crayons.', 'colorful wax crayons isolated on pure white background studio photo'),
      v('Paintbrush', '🖌️', 'Pincel', '/ˈpeɪnt.brʌʃ/', 'Paint the canvas with an artist paintbrush.', 'wooden artist paintbrush isolated on pure white background studio photo'),
      v('Envelope', '✉️', 'Envelope', '/ˈen.və.loʊp/', 'Put the letter inside a paper envelope.', 'white paper mail envelope isolated on pure white background studio photo'),
      v('Calendar', '📅', 'Calendário', '/ˈkæl.ən.dər/', 'Check the date on the desk calendar.', 'desk flip calendar showing dates isolated on pure white background studio photo'),
      v('Folder', '📁', 'Pasta de documentos', '/ˈfoʊl.dər/', 'Keep your sheets organized in a folder.', 'office document file folder isolated on pure white background studio photo'),
      v('Paperclip', '📎', 'Clipe de papel', '/ˈpeɪ.pər.klɪp/', 'Hold the pages together with a metal paperclip.', 'metal office paperclip isolated on pure white background studio photo'),
      v('Calculator', '🧮', 'Calculadora', '/ˈkæl.kjə.leɪ.tər/', 'Add the numbers on a pocket calculator.', 'electronic pocket calculator isolated on pure white background studio photo'),
      v('Globe', '🌍', 'Globo terrestre', '/ɡloʊb/', 'Find Brazil and the United States on the world globe.', 'school world desk globe on stand isolated on pure white background studio photo'),
      v('Comb', '🪮', 'Pente de cabelo', '/koʊm/', 'Neaten your hair with a plastic comb.', 'plastic hair comb isolated on pure white background studio photo'),
      v('Hairbrush', '🪮', 'Escova de cabelo', '/ˈher.brʌʃ/', 'Brush your hair in front of the mirror.', 'paddle hairbrush isolated on pure white background studio photo'),
      v('Hair Dryer', '💨', 'Secador de cabelo', '/ˈher ˌdraɪ.ər/', 'Dry your wet hair with an electric hair dryer.', 'electric blow hair dryer appliance isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 12,
    title: 'Casa & Objetos IV: Instrumentos, Ferramentas & Utensílios',
    subtitle: 'Módulo 4/4 • 30 instrumentos musicais, ferramentas e itens específicos',
    pedagogicalObjective: 'Dominar o vocabulário de instrumentos musicais, ferramentas domésticas e primeiros socorros.',
    icon: 'house',
    theory: [
      'No 4º módulo de Objetos aprendemos instrumentos musicais (Violão, Piano, Bateria, Violino), ferramentas práticas (Martelo, Chave de Fenda, Alicate, Furadeira, Escada) e itens de apoio.',
      'Lembre-se de usar o botão 0.65x se quiser ouvir a pronúncia de forma mais pausada!',
      'Conclua para liberar a categoria final de Cidade, Roupas & Transportes!'
    ],
    items: [
      v('Guitar', '🎸', 'Violão / Guitarra', '/ɡɪˈtɑːr/', 'He plays acoustic guitar with his friends.', 'wooden acoustic guitar instrument isolated on pure white background studio photo'),
      v('Piano', '🎹', 'Piano', '/piˈæn.oʊ/', 'She plays a melody on the grand piano.', 'black grand piano instrument isolated on pure white background studio photo'),
      v('Drum', '🥁', 'Bateria / Tambor', '/drʌm/', 'Keep the musical beat on the drum.', 'snare drum with drumsticks isolated on pure white background studio photo'),
      v('Violin', '🎻', 'Violino', '/ˌvaɪ.əˈlɪn/', 'The wooden violin has four strings and a bow.', 'wooden violin with bow isolated on pure white background studio photo'),
      v('Flute', '🪈', 'Flauta', '/fluːt/', 'Play a soft tune on the flute.', 'silver concert flute instrument isolated on pure white background studio photo'),
      v('Trumpet', '🎺', 'Trompete', '/ˈtrʌm.pɪt/', 'The brass trumpet shines on stage.', 'gold brass trumpet instrument isolated on pure white background studio photo'),
      v('Saxophone', '🎷', 'Saxofone', '/ˈsæk.sə.foʊn/', 'He plays jazz on the golden saxophone.', 'gold alto saxophone instrument isolated on pure white background studio photo'),
      v('Accordion', '🪗', 'Sanfona / Acordeão', '/əˈkɔːr.di.ən/', 'The accordion is traditional in Brazilian forró.', 'musical piano accordion sanfona isolated on pure white background studio photo'),
      v('Microphone', '🎤', 'Microfone', '/ˈmaɪ.krə.foʊn/', 'Sing clearly into the microphone.', 'handheld vocal microphone isolated on pure white background studio photo'),
      v('Radio', '📻', 'Rádio', '/ˈreɪ.di.oʊ/', 'Listen to music and news on the portable radio.', 'portable fm radio with antenna isolated on pure white background studio photo'),
      v('Flashlight', '🔦', 'Lanterna', '/ˈflæʃ.laɪt/', 'Use a battery flashlight in the dark.', 'handheld led flashlight torch isolated on pure white background studio photo'),
      v('Battery', '🔋', 'Pilha / Bateria', '/ˈbæt.ər.i/', 'Put two AA batteries inside the remote.', 'alkaline AA battery cell isolated on pure white background studio photo'),
      v('Electric Plug', '🔌', 'Plugue de tomada', '/ɪˈlek.trɪk plʌɡ/', 'Connect the electric plug to the outlet.', 'electric power plug cord isolated on pure white background studio photo'),
      v('Light Bulb', '💡', 'Lâmpada', '/ˈlaɪt bʌlb/', 'Replace the burned-out light bulb.', 'led light bulb isolated on pure white background studio photo'),
      v('Lock', '🔒', 'Cadeado', '/lɑːk/', 'Close the gate with a metal lock.', 'brass metal padlock with key isolated on pure white background studio photo'),
      v('Box', '📦', 'Caixa de papelão', '/bɑːks/', 'Pack the items inside a cardboard box.', 'brown cardboard shipping box isolated on pure white background studio photo'),
      v('Basket', '🧺', 'Cesta / Cesto', '/ˈbæs.kɪt/', 'Carry the picnic food in a woven basket.', 'woven wicker basket with handle isolated on pure white background studio photo'),
      v('Ladder', '🪜', 'Escada portátil', '/ˈlæd.ər/', 'Use a folding step ladder to reach the top shelf.', 'aluminum folding step ladder isolated on pure white background studio photo'),
      v('Hammer', '🔨', 'Martelo', '/ˈhæm.ər/', 'Hit the nail with a claw hammer.', 'claw hammer tool with wooden handle isolated on pure white background studio photo'),
      v('Screwdriver', '🪛', 'Chave de fenda', '/ˈskruːˌdraɪ.vər/', 'Tighten the screw with a screwdriver.', 'hand screwdriver tool isolated on pure white background studio photo'),
      v('Wrench', '🔧', 'Chave inglesa / Chave de boca', '/rentʃ/', 'Turn the metal nut with a steel wrench.', 'steel adjustable wrench spanner tool isolated on pure white background studio photo'),
      v('Pliers', '钳', 'Alicate', '/ˈplaɪ.ərz/', 'Hold the wire firmly with pliers.', 'hand pliers tool isolated on pure white background studio photo'),
      v('Saw', '🪚', 'Serrote', '/sɔː/', 'Cut the wooden board with a hand saw.', 'carpenter hand saw tool isolated on pure white background studio photo'),
      v('Tape Measure', '📏', 'Trena / Fita métrica', '/ˈteɪp ˌmeʒ.ər/', 'Measure the wall width with a tape measure.', 'retractable yellow tape measure tool isolated on pure white background studio photo'),
      v('Drill', '🪛', 'Furadeira', '/drɪl/', 'Make a hole in the wall with an electric drill.', 'cordless electric power drill tool isolated on pure white background studio photo'),
      v('Chain', '⛓️', 'Corrente de metal', '/tʃeɪn/', 'A strong steel chain.', 'metal steel chain links isolated on pure white background studio photo'),
      v('Candle', '🕯️', 'Vela', '/ˈkæn.dəl/', 'Light a white wax candle.', 'lit white wax pillar candle isolated on pure white background studio photo'),
      v('Bandage', '🩹', 'Curativo (Band-aid)', '/ˈbæn.dɪdʒ/', 'Put an adhesive bandage on the small cut.', 'adhesive medical band-aid bandage plaster isolated on pure white background studio photo'),
      v('Pill', '💊', 'Comprimido / Cápsula', '/pɪl/', 'Take the medicine pill with water.', 'medicine capsule and tablet pill isolated on pure white background studio photo'),
      v('Thermometer', '🌡️', 'Termômetro', '/θərˈmɑː.mə.tər/', 'Check for a fever with a digital thermometer.', 'digital medical fever thermometer isolated on pure white background studio photo'),
    ]
  },

  // ==========================================================================
  // CATEGORIA 4: ROUPAS, TRANSPORTES, CIDADE & CORPO HUMANO (4 MÓDULOS DE 30 ITENS)
  // ==========================================================================
  {
    phaseNumber: 13,
    title: 'Cidade & Cotidiano I: Roupas, Calçados & Acessórios',
    subtitle: 'Módulo 1/4 • 30 peças de roupa e acessórios do dia a dia em destaque',
    pedagogicalObjective: 'Dominar o vocabulário de roupas, calçados e acessórios pessoais com fotos de produto isoladas.',
    icon: 'shirt',
    theory: [
      'Aprender o nome das roupas e acessórios é essencial para o dia a dia e viagens.',
      'Cada peça (Camiseta, Calça, Shorts, Tênis, Chinelo, Boné, Óculos, Relógio, Guarda-chuva) aparece isolada como em uma vitrine de fundo branco, sem distrações.',
      'Observe que Pants, Jeans, Shorts, Socks, Shoes, Sneakers e Glasses são usados no plural!'
    ],
    items: [
      v('Shirt', '👕', 'Camisa / Camiseta', '/ʃɜːrt/', 'He wears a clean cotton shirt.', 'folded cotton t-shirt shirt isolated on pure white background studio photo'),
      v('Pants', '👖', 'Calça', '/pænts/', 'Comfortable pants for work or school.', 'pair of men casual trousers pants isolated on pure white background studio photo'),
      v('Jeans', '👖', 'Calça jeans', '/dʒiːnz/', 'Blue denim jeans are worn everywhere.', 'pair of blue denim jeans pants isolated on pure white background studio photo'),
      v('Shorts', '🩳', 'Shorts / Bermuda', '/ʃɔːrts/', 'Wear light shorts on a hot Brazilian summer day.', 'pair of casual summer shorts isolated on pure white background studio photo'),
      v('Dress', '👗', 'Vestido', '/dres/', 'She wore a colorful summer dress.', 'women summer dress garment isolated on pure white background studio photo'),
      v('Skirt', '👗', 'Saia', '/skɜːrt/', 'A pleated fabric skirt.', 'women skirt garment isolated on pure white background studio photo'),
      v('Jacket', '🧥', 'Jaqueta / Blusa de frio', '/ˈdʒæk.ɪt/', 'Put on a zipper jacket in the evening.', 'zipper jacket coat isolated on pure white background studio photo'),
      v('Coat', '🧥', 'Casaco / Sobretudo', '/koʊt/', 'A warm winter coat for cold trips.', 'long winter wool coat isolated on pure white background studio photo'),
      v('Sweater', '🧶', 'Suéter / Moletom', '/ˈswet.ər/', 'A soft knitted sweater keeps you warm.', 'knitted pullover sweater isolated on pure white background studio photo'),
      v('Pajamas', '🛌', 'Pijama', '/pəˈdʒæm.əz/', 'Put on comfortable pajamas before going to sleep.', 'cotton sleep pajamas set isolated on pure white background studio photo'),
      v('Socks', '🧦', 'Meias', '/sɑːks/', 'Put on a pair of cotton socks.', 'pair of cotton crew socks isolated on pure white background studio photo'),
      v('Shoes', '👞', 'Sapatos', '/ʃuːz/', 'Clean leather dress shoes.', 'pair of brown leather dress shoes isolated on pure white background studio photo'),
      v('Sneakers', '👟', 'Tênis', '/ˈsniː.kərz/', 'Wear comfortable running sneakers to walk.', 'pair of sport running sneakers shoes isolated on pure white background studio photo'),
      v('Sandals', '🩴', 'Chinelo / Sandália', '/ˈsæn.dəlz/', 'Rubber flip-flop sandals are an everyday classic in Brazil.', 'pair of flip flop beach sandals isolated on pure white background studio photo'),
      v('Boots', '🥾', 'Botas', '/buːts/', 'Leather boots protect your feet in the rain.', 'pair of leather ankle boots isolated on pure white background studio photo'),
      v('High Heels', '👠', 'Sapato de salto alto', '/ˌhaɪ ˈhiːlz/', 'She wore red high heels to the party.', 'pair of red high heel shoes isolated on pure white background studio photo'),
      v('Cap', '🧢', 'Boné', '/kæp/', 'Wear a baseball cap in the sun.', 'blue baseball cap hat isolated on pure white background studio photo'),
      v('Hat', '👒', 'Chapéu', '/hæt/', 'A straw sun hat for the beach.', 'straw sun hat isolated on pure white background studio photo'),
      v('Glasses', '👓', 'Óculos de grau', '/ˈɡlæs.ɪz/', 'He wears prescription glasses to read.', 'pair of eyeglasses spectacles isolated on pure white background studio photo'),
      v('Sunglasses', '🕶️', 'Óculos de sol', '/ˈsʌnˌɡlæs.ɪz/', 'Dark sunglasses protect your eyes on sunny days.', 'pair of dark sunglasses isolated on pure white background studio photo'),
      v('Watch', '⌚', 'Relógio de pulso', '/wɑːtʃ/', 'Check the time on your wristwatch.', 'analog wristwatch with strap isolated on pure white background studio photo'),
      v('Umbrella', '☂️', 'Guarda-chuva', '/ʌmˈbrel.ə/', 'Open your umbrella when it starts to rain.', 'open rain umbrella isolated on pure white background studio photo'),
      v('Belt', 'ベルト', 'Cinto', '/belt/', 'Fasten the leather belt around your waist.', 'brown leather belt with metal buckle isolated on pure white background studio photo'),
      v('Necktie', '👔', 'Gravata', '/ˈnek.taɪ/', 'He wore a silk necktie with his suit.', 'silk business necktie tie isolated on pure white background studio photo'),
      v('Scarf', '🧣', 'Cachecol', '/skɑːrf/', 'Wrap a warm wool scarf around your neck.', 'knitted winter neck scarf isolated on pure white background studio photo'),
      v('Gloves', '🧤', 'Luvas', '/ɡlʌvz/', 'Wear winter gloves to keep your hands warm.', 'pair of winter hand gloves isolated on pure white background studio photo'),
      v('Handbag', '👜', 'Bolsa feminina', '/ˈhænd.bæɡ/', 'She carries her phone inside a leather handbag.', 'leather women handbag purse isolated on pure white background studio photo'),
      v('Wallet', '👛', 'Carteira de bolso', '/ˈwɑː.lɪt/', 'Keep your money and cards inside a leather wallet.', 'folded brown leather men wallet isolated on pure white background studio photo'),
      v('Ring', '💍', 'Anel / Aliança', '/rɪŋ/', 'A shiny gold ring on the finger.', 'gold ring with diamond gem isolated on pure white background studio photo'),
      v('Necklace', '📿', 'Colar / Correntinha', '/ˈnek.lɪs/', 'A delicate gold necklace.', 'gold chain pendant necklace jewelry isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 14,
    title: 'Cidade & Cotidiano II: Transportes & Trânsito',
    subtitle: 'Módulo 2/4 • 30 veículos e itens de viagem em fotos isoladas',
    pedagogicalObjective: 'Reconhecer todos os meios de transporte terrestres, aéreos e marítimos.',
    icon: 'car',
    theory: [
      'Domine os 30 meios de transporte e elementos de rua e viagem.',
      'Desde Carro (Car), Ônibus (Bus), Moto (Motorcycle), Bicicleta (Bicycle) e Avião (Airplane) até Semáforo (Traffic Light), Capacete (Helmet) e Mala de Viagem (Suitcase).',
      'Cada veículo aparece inteiro e nítido em fundo branco!'
    ],
    items: [
      v('Car', '🚗', 'Carro', '/kɑːr/', 'Drive the red car carefully on the street.', 'modern red passenger car side view isolated on pure white background studio photo'),
      v('Bus', '🚌', 'Ônibus', '/bʌs/', 'Take the passenger bus to work.', 'passenger city bus vehicle isolated on pure white background studio photo'),
      v('Motorcycle', '🏍️', 'Moto / Motocicleta', '/ˈmoʊ.tərˌsaɪ.kəl/', 'Always wear a helmet when riding a motorcycle.', 'motorcycle motorbike side view isolated on pure white background studio photo'),
      v('Bicycle', '🚲', 'Bicicleta', '/ˈbaɪ.sɪ.kəl/', 'Riding a bicycle in the park is great exercise.', 'bicycle bike side view isolated on pure white background studio photo'),
      v('Truck', '🚚', 'Caminhão', '/trʌk/', 'The cargo truck transports food across Brazil.', 'delivery cargo truck vehicle isolated on pure white background studio photo'),
      v('Taxi', '🚕', 'Táxi', '/ˈtæk.si/', 'Take a taxi to the airport.', 'yellow taxi cab car isolated on pure white background studio photo'),
      v('Airplane', '✈️', 'Avião', '/ˈer.pleɪn/', 'The passenger airplane flies above the clouds.', 'commercial passenger airplane jet isolated on pure white background studio photo'),
      v('Helicopter', '🚁', 'Helicóptero', '/ˈhel.ɪˌkɑːp.tər/', 'The helicopter flies over the city.', 'helicopter aircraft isolated on pure white background studio photo'),
      v('Train', '🚆', 'Trem', '/treɪn/', 'The passenger train travels on steel rails.', 'modern passenger train locomotive isolated on pure white background studio photo'),
      v('Subway', '🚇', 'Metrô', '/ˈsʌb.weɪ/', 'The underground subway train is fast.', 'metro subway train car isolated on pure white background studio photo'),
      v('Boat', '⛵', 'Barco / Veleiro', '/boʊt/', 'A small boat floats on the water.', 'wooden rowboat sailboat isolated on pure white background studio photo'),
      v('Ship', '🚢', 'Navio', '/ʃɪp/', 'The large cruise ship crosses the ocean.', 'passenger cruise ship vessel isolated on pure white background studio photo'),
      v('Ambulance', '🚑', 'Ambulância', '/ˈæm.bjə.ləns/', 'Make way for the emergency hospital ambulance.', 'emergency medical ambulance van isolated on pure white background studio photo'),
      v('Police Car', '🚓', 'Viatura de polícia', '/pəˈliːs kɑːr/', 'The police car has flashing lights on top.', 'police patrol car with siren lights isolated on pure white background studio photo'),
      v('Fire Truck', '🚒', 'Caminhão de bombeiros', '/ˈfaɪ.ər trʌk/', 'The red fire truck carries a tall ladder.', 'red fire engine truck with ladder isolated on pure white background studio photo'),
      v('Tractor', '🚜', 'Trator', '/ˈtræk.tər/', 'The farm tractor pulls heavy equipment.', 'green farm tractor with big wheels isolated on pure white background studio photo'),
      v('Van', '🚐', 'Van / Perua escolar', '/væn/', 'The passenger van carries the group to school.', 'white passenger minivan van vehicle isolated on pure white background studio photo'),
      v('Scooter', '🛴', 'Patinete', '/ˈskuː.tər/', 'Kids love riding kick scooters.', 'kick scooter with two wheels isolated on pure white background studio photo'),
      v('Skateboard', '🛹', 'Skate', '/ˈskeɪt.bɔːrd/', 'He practices tricks on his four-wheel skateboard.', 'wooden skateboard deck with wheels isolated on pure white background studio photo'),
      v('Roller Skate', '🛼', 'Patins', '/ˈroʊ.lər skeɪt/', 'She glides smoothly on roller skates.', 'roller skate boot with wheels isolated on pure white background studio photo'),
      v('Helmet', '⛑️', 'Capacete', '/ˈhel.mət/', 'Protect your head with a safety helmet.', 'motorcycle protective safety helmet isolated on pure white background studio photo'),
      v('Traffic Light', '🚦', 'Semáforo / Sinal de trânsito', '/ˈtræf.ɪk laɪt/', 'Stop the car when the traffic light is red.', 'red yellow green traffic light signal isolated on pure white background studio photo'),
      v('Tire', '🛞', 'Pneu / Roda', '/ˈtaɪ.ər/', 'Check the air pressure in the car tire.', 'black rubber car tire wheel isolated on pure white background studio photo'),
      v('Steering Wheel', '🛞', 'Volante de carro', '/ˈstɪr.ɪŋ wiːl/', 'Keep both hands on the car steering wheel.', 'car steering wheel isolated on pure white background studio photo'),
      v('Fuel Pump', '⛽', 'Bomba de combustível', '/ˈfjuː.əl pʌmp/', 'Fill the car tank at the gas station fuel pump.', 'gasoline fuel pump nozzle dispenser isolated on pure white background studio photo'),
      v('Suitcase', '🧳', 'Mala de viagem', '/ˈsuːt.keɪs/', 'Pack your clothes in a rolling travel suitcase.', 'rolling travel luggage suitcase with wheels isolated on pure white background studio photo'),
      v('Rocket', '🚀', 'Foguete espacial', '/ˈrɑː.kɪt/', 'The space rocket blasts into orbit.', 'space rocket ship isolated on pure white background studio photo'),
      v('Parachute', '🪂', 'Paraquedas', '/ˈpær.ə.ʃuːt/', 'The colorful parachute opens in the sky.', 'open colorful skydiving parachute isolated on pure white background studio photo'),
      v('Anchor', '⚓', 'Âncora de navio', '/ˈæŋ.kər/', 'The ship drops its heavy metal anchor.', 'metal marine ship anchor isolated on pure white background studio photo'),
      v('Compass', '🧭', 'Bússola', '/ˈkʌm.pəs/', 'The compass needle always points north.', 'navigation magnetic pocket compass isolated on pure white background studio photo'),
    ]
  },
  {
    phaseNumber: 15,
    title: 'Cidade & Cotidiano III: Lugares & Natureza',
    subtitle: 'Módulo 3/4 • 30 lugares da cidade e elementos da natureza',
    pedagogicalObjective: 'Reconhecer estabelecimentos comerciais, prédios e elementos naturais fundamentais.',
    icon: 'map',
    theory: [
      'Neste módulo aprendemos os lugares mais importantes da cidade (Casa, Escola, Supermercado, Padaria, Farmácia, Hospital, Restaurante, Livraria) e os elementos básicos da natureza (Sol, Lua, Estrela, Nuvem, Chuva, Arco-íris, Árvore, Flor).',
      'As imagens destacam claramente cada estabelecimento e elemento natural.'
    ],
    items: [
      v('House', '🏠', 'Casa', '/haʊs/', 'They live in a cozy family house.', 'single family house building model isolated on pure white background studio photo'),
      v('School', '🏫', 'Escola', '/skuːl/', 'Children study at school every day.', 'school classroom building exterior isolated on pure white background'),
      v('Supermarket', '🛒', 'Supermercado', '/ˈsuː.pərˌmɑːr.kɪt/', 'We buy groceries with a shopping cart at the supermarket.', 'supermarket grocery aisle with shopping cart photo'),
      v('Bakery', '🥐', 'Padaria', '/ˈbeɪ.kər.i/', 'The bakery display is full of fresh bread and cakes.', 'bakery shop counter display full of bread and pastries photo'),
      v('Pharmacy', '🏥', 'Farmácia', '/ˈfɑːr.mə.si/', 'Buy medicine at the neighborhood pharmacy.', 'pharmacy drugstore counter with medicine shelves photo'),
      v('Hospital', '🏥', 'Hospital', '/ˈhɑː.spɪ.təl/', 'Doctors and nurses care for patients at the hospital.', 'modern hospital building exterior with ambulance photo'),
      v('Restaurant', '🍽️', 'Restaurante', '/ˈres.trɑːnt/', 'We had dinner together at a nice restaurant.', 'restaurant dining tables and chairs interior photo'),
      v('Bank', '🏦', 'Banco / Caixa eletrônico', '/bæŋk/', 'Withdraw money at the bank.', 'bank building with ATM machine photo'),
      v('Hotel', '🏨', 'Hotel', '/hoʊˈtel/', 'We stayed in a comfortable hotel room on vacation.', 'hotel building reception and room photo'),
      v('Bookstore', '📚', 'Livraria', '/ˈbʊk.stɔːr/', 'She bought a new book at the bookstore.', 'bookstore shop interior with shelves of books on display photo'),
      v('Library', '🏛️', 'Biblioteca', '/ˈlaɪ.brer.i/', 'Read quietly in the public library.', 'public library reading room with desks and bookshelves photo'),
      v('Cinema', '🎬', 'Cinema', '/ˈsɪn.ə.mə/', 'Watch a movie on the big screen at the cinema.', 'cinema movie theater auditorium with red seats and screen photo'),
      v('Gym', '🏋️', 'Academia de ginástica', '/dʒɪm/', 'Exercise with weights and treadmills at the gym.', 'fitness gym interior with dumbbells and treadmills photo'),
      v('Barber Shop', '💈', 'Barbearia / Salão', '/ˈbɑːr.bər ʃɑːp/', 'Get a haircut at the barber shop.', 'barber shop chair and mirror with barber pole photo'),
      v('Pet Shop', '🐾', 'Pet shop', '/ˈpet ʃɑːp/', 'Buy pet food and toys at the pet shop.', 'pet shop store with dog accessories and pet food shelves photo'),
      v('Park', '🌳', 'Parque / Praça', '/pɑːrk/', 'Families walk and play in the green city park.', 'green city park with trees bench and path photo'),
      v('Beach', '🏖️', 'Praia', '/biːtʃ/', 'We love going to the sunny beach on weekends.', 'sunny tropical sandy beach with ocean waves photo'),
      v('Swimming Pool', '🏊', 'Piscina', '/ˈswɪm.ɪŋ puːl/', 'Swim in the blue swimming pool on hot days.', 'clear blue backyard swimming pool photo'),
      v('Bridge', '🌉', 'Ponte', '/brɪdʒ/', 'Cars cross the river over the suspension bridge.', 'bridge crossing over river water photo'),
      v('Castle', '🏰', 'Castelo', '/ˈkæs.əl/', 'The stone castle has tall towers.', 'medieval stone castle with towers isolated on white background'),
      v('Tree', '🌳', 'Árvore', '/triː/', 'A green tree provides cool shade.', 'single green leafy tree isolated on pure white background studio photo'),
      v('Flower', '🌸', 'Flor', '/ˈflaʊ.ər/', 'A colorful flower blooms in spring.', 'single pink hibiscus flower bloom isolated on pure white background studio photo'),
      v('Rose', '🌹', 'Rosa vermelha', '/roʊz/', 'He gave her a single red rose.', 'single red rose flower with green stem isolated on pure white background studio photo'),
      v('Sunflower', '🌻', 'Girassol', '/ˈsʌnˌflaʊ.ər/', 'The yellow sunflower faces the sun.', 'single bright yellow sunflower isolated on pure white background studio photo'),
      v('Cactus', '🌵', 'Cacto', '/ˈkæk.təs/', 'A green cactus grows in dry places.', 'green cactus plant in pot isolated on pure white background studio photo'),
      v('Leaf', '🍃', 'Folha de planta', '/liːf/', 'A bright green tree leaf.', 'single green plant leaf isolated on pure white background studio photo'),
      v('Sun', '☀️', 'Sol', '/sʌn/', 'The bright yellow sun shines in the blue sky.', 'bright shining yellow sun in blue sky photo'),
      v('Moon', '🌙', 'Lua', '/muːn/', 'The full moon glows in the night sky.', 'bright full moon isolated on black sky photo'),
      v('Rainbow', '🌈', 'Arco-íris', '/ˈreɪn.boʊ/', 'A colorful rainbow appeared after the rain.', 'colorful rainbow arch in sky photo'),
      v('Fire', '🔥', 'Fogo / Fogueira', '/ˈfaɪ.ər/', 'Warm campfire flames.', 'campfire wood fire flames isolated on white background'),
    ]
  },
  {
    phaseNumber: 16,
    type: 'boss',
    title: 'Cidade & Cotidiano IV: Corpo, Esportes & Profissões',
    subtitle: 'Módulo 4/4 • 30 termos de partes do corpo, esportes e profissões',
    pedagogicalObjective: 'Concluir os 480 termos essenciais dominando corpo humano, esportes e profissões.',
    icon: 'swords',
    theory: [
      'Parabéns por chegar ao 16º módulo (totalizando 480 palavras essenciais em inglês)!',
      'Aqui aprendemos partes do corpo (Mão, Pé, Olho, Orelha, Nariz, Boca, Dente, Coração), esportes muito praticados no Brasil (Futebol, Basquete, Vôlei, Tênis) e as profissões mais conhecidas (Médico, Enfermeira, Dentista, Professor, Cozinheiro, Policial, Bombeiro).',
      'Acerte 100% para concluir o Módulo de Vocabulário Visual!'
    ],
    items: [
      v('Hand', '✋', 'Mão', '/hænd/', 'Raise your hand to ask a question.', 'open human hand palm isolated on pure white background studio photo'),
      v('Foot', '🦶', 'Pé', '/fʊt/', 'Kick the soccer ball with your foot.', 'human bare foot isolated on pure white background studio photo'),
      v('Eye', '👁️', 'Olho', '/aɪ/', 'We see the world with our eyes.', 'human eye closeup isolated on pure white background studio photo'),
      v('Ear', '👂', 'Orelha / Ouvido', '/ɪr/', 'We listen to music and speech with our ears.', 'human ear closeup isolated on pure white background studio photo'),
      v('Nose', '👃', 'Nariz', '/noʊz/', 'Smell the fresh coffee with your nose.', 'human nose closeup isolated on pure white background studio photo'),
      v('Mouth', '👄', 'Boca', '/maʊθ/', 'Open your mouth to pronounce the English vowel.', 'smiling human mouth lips and teeth isolated on pure white background studio photo'),
      v('Tooth', '🦷', 'Dente', '/tuːθ/', 'Brush every tooth with toothpaste.', 'single white tooth dental model isolated on pure white background studio photo'),
      v('Hair', '💇', 'Cabelo', '/her/', 'She brushes her long brown hair.', 'healthy shiny brown hair closeup studio photo'),
      v('Finger', '☝️', 'Dedo da mão', '/ˈfɪŋ.ɡər/', 'Point at the picture with your index finger.', 'hand pointing index finger isolated on pure white background studio photo'),
      v('Arm', '💪', 'Braço', '/ɑːrm/', 'Stretch your arms before exercising.', 'human arm and hand isolated on pure white background studio photo'),
      v('Leg', '🦵', 'Perna', '/leɡ/', 'Run fast using your strong legs.', 'human leg and foot isolated on pure white background studio photo'),
      v('Heart', '❤️', 'Coração', '/hɑːrt/', 'Your heart beats inside your chest.', 'red heart shape 3d model isolated on pure white background studio photo'),
      v('Brain', '🧠', 'Cérebro', '/breɪn/', 'Learning English exercises your brain.', 'human brain model isolated on pure white background studio photo'),
      v('Bone', '🦴', 'Osso', '/boʊn/', 'Milk and calcium keep your bones strong.', 'white bone isolated on pure white background studio photo'),
      v('Soccer Ball', '⚽', 'Bola de futebol', '/ˈsɑː.kər bɔːl/', 'Soccer is the most popular sport in Brazil.', 'classic black and white soccer football ball isolated on pure white background studio photo'),
      v('Basketball', '🏀', 'Bola de basquete', '/ˈbæs.kɪt.bɔːl/', 'Bounce the orange basketball on the court.', 'orange basketball ball isolated on pure white background studio photo'),
      v('Volleyball', '🏐', 'Bola de vôlei', '/ˈvɑː.li.bɔːl/', 'Hit the volleyball over the net.', 'volleyball ball isolated on pure white background studio photo'),
      v('Tennis Ball', '🎾', 'Bola de tênis (e raquete)', '/ˈten.ɪs bɔːl/', 'Hit the yellow tennis ball with a racket.', 'yellow tennis ball and racket isolated on pure white background studio photo'),
      v('Boxing Glove', '🥊', 'Luva de boxe', '/ˈbɑːk.sɪŋ ɡlʌv/', 'Put on red boxing gloves for training.', 'pair of red leather boxing gloves isolated on pure white background studio photo'),
      v('Fishing Rod', '🎣', 'Vara de pescar', '/ˈfɪʃ.ɪŋ rɑːd/', 'Catch a fish in the river with a fishing rod.', 'fishing rod with reel isolated on pure white background studio photo'),
      v('Medal', '🥇', 'Medalha de ouro', '/ˈmed.əl/', 'The champion athlete won a gold medal.', 'gold winner medal with ribbon isolated on pure white background studio photo'),
      v('Trophy', '🏆', 'Troféu de campeão', '/ˈtroʊ.fi/', 'The winning team lifted the golden trophy cup.', 'golden champion trophy cup isolated on pure white background studio photo'),
      v('Doctor', '👨‍⚕️', 'Médico / Médica', '/ˈdɑːk.tər/', 'The doctor wears a white coat and a stethoscope.', 'friendly medical doctor in white coat with stethoscope isolated on pure white background studio photo'),
      v('Nurse', '👩‍⚕️', 'Enfermeira / Enfermeiro', '/nɜːrs/', 'The hospital nurse cares for the patients.', 'friendly hospital nurse in scrubs isolated on pure white background studio photo'),
      v('Dentist', '🦷', 'Dentista', '/ˈden.tɪst/', 'Visit the dentist to keep your teeth healthy.', 'dentist holding dental mirror and tooth model isolated on pure white background studio photo'),
      v('Teacher', '👩‍🏫', 'Professor / Professora', '/ˈtiː.tʃər/', 'The English teacher writes on the board.', 'friendly school teacher with book pointing at board studio photo'),
      v('Chef', '👨‍🍳', 'Cozinheiro / Chef de cozinha', '/ʃef/', 'The chef wears a white hat in the restaurant kitchen.', 'cook chef in white uniform and chef hat isolated on pure white background studio photo'),
      v('Police Officer', '👮', 'Policial', '/pəˈliːs ˌɔː.fɪ.sər/', 'The police officer helps people in the city.', 'police officer in uniform isolated on pure white background studio photo'),
      v('Firefighter', '🧑‍🚒', 'Bombeiro', '/ˈfaɪ.ərˌfaɪ.tər/', 'The firefighter wears a protective helmet and jacket.', 'firefighter in helmet and uniform isolated on pure white background studio photo'),
      v('Pilot', '👨‍✈️', 'Piloto de avião', '/ˈpaɪ.lət/', 'The airline pilot flies the commercial airplane.', 'airline pilot in uniform and cap isolated on pure white background studio photo'),
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

// Build exercises for a 30-item module ensuring:
// 1. Items are presented from #1 (most common in Brazil) to #30 (less common).
// 2. ZERO image overlap between exercise i and exercise i-1.
// 3. Cooldown of at least 4 exercises before any image (target or distractor) can reappear.
function buildExercisesWithCooldown(theme) {
  const items = theme.items;
  const n = items.length; // 30
  const phaseId = `w0-p${theme.phaseNumber}`;

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

    const optionsList = deterministicShuffle([target, ...distractors], theme.phaseNumber * 100 + idx + 7);

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

// Build studio white-background image map for all 480 items
const realImagesMap = {};
for (const theme of THEMES) {
  for (const item of theme.items) {
    const q = encodeURIComponent(item.studioQuery);
    realImagesMap[item.text] = `https://tse1.mm.bing.net/th?q=${q}&w=600&h=600&c=7&rs=1&p=0`;
  }
}

const fileContent = `import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

const imagesFileContent = `// Auto-generated high-resolution studio isolated photographs on white background for all 480 vocabulary items
export const REAL_VOCAB_IMAGES: Record<string, string> = ${JSON.stringify(realImagesMap, null, 2)};
`;

fs.writeFileSync('src/data/world0Phases.ts', fileContent, 'utf-8');
fs.writeFileSync('src/data/realVocabImages.ts', imagesFileContent, 'utf-8');

console.log('Successfully generated src/data/world0Phases.ts and src/data/realVocabImages.ts!');
console.log('Total modules (phases) in World 0:', phases.length);
console.log('Total unique studio images generated:', Object.keys(realImagesMap).length);
