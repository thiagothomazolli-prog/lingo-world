const fs = require('fs');

const THEMES = [
  {
    phaseNumber: 1,
    title: 'Frutas & Alimentos Frescos',
    subtitle: 'Vocabulário de frutas e alimentos do dia a dia com imagens',
    pedagogicalObjective: 'Aprender o vocabulário básico de frutas e alimentos saudáveis associando imagens e sons.',
    icon: 'apple',
    theory: [
      'Associe a imagem à palavra em inglês antes de ler a tradução.',
      'Frutas em inglês costumam manter nomes bem conhecidos: Apple (/ˈæp.əl/), Banana (/bəˈnæn.ə/), Orange (/ˈɒr.ɪndʒ/).',
      'Toque no cartão para escutar a pronúncia nativa de cada alimento.'
    ],
    items: [
      { text: 'Apple', emoji: '🍎', label: 'Apple', pt: 'Maçã', phonetic: '/ˈæp.əl/', sentence: 'I eat a fresh red apple every morning.' },
      { text: 'Banana', emoji: '🍌', label: 'Banana', pt: 'Banana', phonetic: '/bəˈnæn.ə/', sentence: 'Monkeys love sweet yellow bananas.' },
      { text: 'Orange', emoji: '🍊', label: 'Orange', pt: 'Laranja', phonetic: '/ˈɒr.ɪndʒ/', sentence: 'Orange juice is very rich in Vitamin C.' },
      { text: 'Grape', emoji: '🍇', label: 'Grape', pt: 'Uva', phonetic: '/ɡreɪp/', sentence: 'Purple grapes are sweet and refreshing.' },
      { text: 'Strawberry', emoji: '🍓', label: 'Strawberry', pt: 'Morango', phonetic: '/ˈstrɔː.bər.i/', sentence: 'Strawberry ice cream is delicious.' },
      { text: 'Pineapple', emoji: '🍍', label: 'Pineapple', pt: 'Abacaxi', phonetic: '/ˈpaɪnˌæp.əl/', sentence: 'Pineapple is a tropical and juicy fruit.' },
      { text: 'Lemon', emoji: '🍋', label: 'Lemon', pt: 'Limão', phonetic: '/ˈlem.ən/', sentence: 'Lemon has a sour and fresh flavor.' },
      { text: 'Watermelon', emoji: '🍉', label: 'Watermelon', pt: 'Melancia', phonetic: '/ˈwɔː.təˌmel.ən/', sentence: 'Watermelon is great on hot summer days.' },
      { text: 'Peach', emoji: '🍑', label: 'Peach', pt: 'Pêssego', phonetic: '/piːtʃ/', sentence: 'A ripe peach is soft and fragrant.' },
      { text: 'Mango', emoji: '🥭', label: 'Mango', pt: 'Manga', phonetic: '/ˈmæŋ.ɡoʊ/', sentence: 'Mango is popular in tropical countries.' }
    ]
  },
  {
    phaseNumber: 2,
    title: 'Animais de Estimação & Pets',
    subtitle: 'Nomes e sons dos animais companheiros com imagens',
    pedagogicalObjective: 'Identificar e pronunciar os nomes dos animais domésticos mais populares.',
    icon: 'dog',
    theory: [
      'Dog (/dɒɡ/) e Cat (/kæt/) são as primeiras palavras aprendidas por crianças falantes de inglês.',
      'Preste atenção à pronúncia da consoante final em Bird (/bɜːd/) e Fish (/fɪʃ/).',
      'Ouça com atenção o som emitido ao clicar em cada animal.'
    ],
    items: [
      { text: 'Dog', emoji: '🐶', label: 'Dog', pt: 'Cachorro', phonetic: '/dɒɡ/', sentence: 'The loyal dog wags its tail.' },
      { text: 'Cat', emoji: '🐱', label: 'Cat', pt: 'Gato', phonetic: '/kæt/', sentence: 'The soft cat sleeps on the sofa.' },
      { text: 'Bird', emoji: '🐦', label: 'Bird', pt: 'Pássaro', phonetic: '/bɜːd/', sentence: 'A colorful bird sings in the tree.' },
      { text: 'Fish', emoji: '🐟', label: 'Fish', pt: 'Peixe', phonetic: '/fɪʃ/', sentence: 'A gold fish swims in clean water.' },
      { text: 'Rabbit', emoji: '🐰', label: 'Rabbit', pt: 'Coelho', phonetic: '/ˈræb.ɪt/', sentence: 'The white rabbit hops around the garden.' },
      { text: 'Hamster', emoji: '🐹', label: 'Hamster', pt: 'Hamster', phonetic: '/ˈhæm.stər/', sentence: 'The little hamster runs on its wheel.' },
      { text: 'Turtle', emoji: '🐢', label: 'Turtle', pt: 'Tartaruga', phonetic: '/ˈtɜː.təl/', sentence: 'The green turtle walks very slowly.' },
      { text: 'Parrot', emoji: '🦜', label: 'Parrot', pt: 'Papagaio', phonetic: '/ˈpær.ət/', sentence: 'The green parrot repeats human words.' },
      { text: 'Puppy', emoji: '🐕', label: 'Puppy', pt: 'Filhote de cão', phonetic: '/ˈpʌp.i/', sentence: 'The playful puppy loves to fetch the ball.' },
      { text: 'Kitten', emoji: '🐈', label: 'Kitten', pt: 'Gatinho filhote', phonetic: '/ˈkɪt.ən/', sentence: 'The tiny kitten drinks warm milk.' }
    ]
  },
  {
    phaseNumber: 3,
    title: 'Objetos da Casa & Quarto',
    subtitle: 'Móveis e elementos do lar com cartões visuais',
    pedagogicalObjective: 'Fixar o vocabulário de mobília e objetos essenciais de uma residência.',
    icon: 'house',
    theory: [
      'Conhecer objetos do lar cria um ambiente imersivo imediato de estudos.',
      'Palavras como Door (/dɔːr/) e Window (/ˈwɪn.doʊ/) aparecem em todas as conversas do cotidiano.',
      'Lembre-se: Chair (/tʃeər/) começa com o som \"tch\".'
    ],
    items: [
      { text: 'Bed', emoji: '🛏️', label: 'Bed', pt: 'Cama', phonetic: '/bed/', sentence: 'I sleep comfortably in my bed.' },
      { text: 'Chair', emoji: '🪑', label: 'Chair', pt: 'Cadeira', phonetic: '/tʃeər/', sentence: 'Please sit down on this wooden chair.' },
      { text: 'Table', emoji: '🪵', label: 'Table', pt: 'Mesa', phonetic: '/ˈteɪ.bəl/', sentence: 'Dinner is served on the dining table.' },
      { text: 'Door', emoji: '🚪', label: 'Door', pt: 'Porta', phonetic: '/dɔːr/', sentence: 'Please close the front door.' },
      { text: 'Window', emoji: '🪟', label: 'Window', pt: 'Janela', phonetic: '/ˈwɪn.doʊ/', sentence: 'Open the window to let fresh air in.' },
      { text: 'Lamp', emoji: '💡', label: 'Lamp', pt: 'Lâmpada / Abajur', phonetic: '/læmp/', sentence: 'Turn on the reading lamp beside the bed.' },
      { text: 'Clock', emoji: '⏰', label: 'Clock', pt: 'Relógio de parede', phonetic: '/klɒk/', sentence: 'The alarm clock rings at seven o’clock.' },
      { text: 'Pillow', emoji: '🛋️', label: 'Pillow', pt: 'Travesseiro', phonetic: '/ˈpɪl.oʊ/', sentence: 'A soft pillow helps you sleep well.' },
      { text: 'Mirror', emoji: '🪞', label: 'Mirror', pt: 'Espelho', phonetic: '/ˈmɪr.ər/', sentence: 'She looks at herself in the bathroom mirror.' },
      { text: 'Key', emoji: '🔑', label: 'Key', pt: 'Chave', phonetic: '/kiː/', sentence: 'Never lose your house key.' }
    ]
  },
  {
    phaseNumber: 4,
    title: 'Bebidas & Líquidos do Cotidiano',
    subtitle: 'Água, sucos, café e leite associados a imagens',
    pedagogicalObjective: 'Reconhecer e pedir bebidas essenciais com clareza fonética.',
    icon: 'cup',
    theory: [
      'Water (/ˈwɔː.tər/) tem pronúncia variada: no inglês americano, o \"t\" soa como um \"r\" suave.',
      'Coffee (/ˈkɒf.i/) e Tea (/tiː/) são as bebidas quentes mais universais.',
      'Milk (/mɪlk/) termina com um som nítido de \"k\".'
    ],
    items: [
      { text: 'Water', emoji: '💧', label: 'Water', pt: 'Água', phonetic: '/ˈwɔː.tər/', sentence: 'Drinking pure water keeps you hydrated.' },
      { text: 'Milk', emoji: '🥛', label: 'Milk', pt: 'Leite', phonetic: '/mɪlk/', sentence: 'He drinks a glass of cold milk.' },
      { text: 'Coffee', emoji: '☕', label: 'Coffee', pt: 'Café', phonetic: '/ˈkɒf.i/', sentence: 'Hot black coffee wakes me up.' },
      { text: 'Tea', emoji: '🍵', label: 'Tea', pt: 'Chá', phonetic: '/tiː/', sentence: 'Green tea is very good for your health.' },
      { text: 'Juice', emoji: '🧃', label: 'Juice', pt: 'Suco', phonetic: '/dʒuːs/', sentence: 'Fresh apple juice tastes sweet.' },
      { text: 'Soda', emoji: '🥤', label: 'Soda', pt: 'Refrigerante', phonetic: '/ˈsoʊ.də/', sentence: 'Cold soda with ice on a sunny day.' },
      { text: 'Hot Chocolate', emoji: '🍫', label: 'Hot Chocolate', pt: 'Chocolate Quente', phonetic: '/hɒt ˈtʃɒk.lət/', sentence: 'Hot chocolate warms you up during winter.' },
      { text: 'Lemonade', emoji: '🍋', label: 'Lemonade', pt: 'Limonada', phonetic: '/ˌlem.əˈneɪd/', sentence: 'Fresh lemonade with mint leaves.' },
      { text: 'Smoothie', emoji: '🍧', label: 'Smoothie', pt: 'Vitamina de frutas', phonetic: '/ˈsmuː.ði/', sentence: 'A strawberry and banana smoothie.' },
      { text: 'Coconut Water', emoji: '🥥', label: 'Coconut Water', pt: 'Água de Coco', phonetic: '/ˈkoʊ.kə.nʌt ˈwɔː.tər/', sentence: 'Cold coconut water on the beach.' }
    ]
  },
  {
    phaseNumber: 5,
    title: 'Cores Visuais & Objetos Coloridos',
    subtitle: 'Associação direta de cores a elementos visuais',
    pedagogicalObjective: 'Dominar o nome das cores em inglês através do reconhecimento visual instantâneo.',
    icon: 'palette',
    theory: [
      'Em inglês, a cor (adjetivo) sempre vem ANTES do substantivo: \"A red apple\" (Uma maçã vermelha).',
      'Blue (/bluː/), Green (/ɡriːn/) e Yellow (/ˈjel.oʊ/) formam a tríade inicial de cores.',
      'Black (/blæk/) e White (/waɪt/) representam os contrastes básicos.'
    ],
    items: [
      { text: 'Red', emoji: '🔴', label: 'Red', pt: 'Vermelho', phonetic: '/red/', sentence: 'The red car stops at the light.' },
      { text: 'Blue', emoji: '🔵', label: 'Blue', pt: 'Azul', phonetic: '/bluː/', sentence: 'The blue sky is clear and bright.' },
      { text: 'Green', emoji: '🟢', label: 'Green', pt: 'Verde', phonetic: '/ɡriːn/', sentence: 'The green grass grows in the yard.' },
      { text: 'Yellow', emoji: '🟡', label: 'Yellow', pt: 'Amarelo', phonetic: '/ˈjel.oʊ/', sentence: 'The bright yellow sun gives warmth.' },
      { text: 'Black', emoji: '⚫', label: 'Black', pt: 'Preto', phonetic: '/blæk/', sentence: 'The elegant black suit fits perfectly.' },
      { text: 'White', emoji: '⚪', label: 'White', pt: 'Branco', phonetic: '/waɪt/', sentence: 'White snow covers the rooftops.' },
      { text: 'Orange', emoji: '🟠', label: 'Orange', pt: 'Laranja (cor)', phonetic: '/ˈɒr.ɪndʒ/', sentence: 'An orange leaf falls in autumn.' },
      { text: 'Purple', emoji: '🟣', label: 'Purple', pt: 'Roxo', phonetic: '/ˈpɜː.pəl/', sentence: 'A beautiful purple flower blooms.' },
      { text: 'Pink', emoji: '🌸', label: 'Pink', pt: 'Rosa', phonetic: '/pɪŋk/', sentence: 'The baby wears a soft pink hat.' },
      { text: 'Brown', emoji: '🟤', label: 'Brown', pt: 'Marrom', phonetic: '/braʊn/', sentence: 'A cozy brown coat for winter.' }
    ]
  },
  {
    phaseNumber: 6,
    title: 'Meios de Transporte & Veículos',
    subtitle: 'Carros, ônibus, aviões e bicicletas em cartões ilustrados',
    pedagogicalObjective: 'Reconhecer e nomear veículos para mobilidade e viagens.',
    icon: 'car',
    theory: [
      'Car (/kɑːr/), Bus (/bʌs/) e Train (/treɪn/) são meios essenciais para se locomover em qualquer cidade.',
      'Airplane (/ˈeər.pleɪn/) muitas vezes é abreviado para Plane.',
      'Para dizer \"de carro\" ou \"de ônibus\", use a preposição \"by\": \"by car\", \"by bus\".'
    ],
    items: [
      { text: 'Car', emoji: '🚗', label: 'Car', pt: 'Carro', phonetic: '/kɑːr/', sentence: 'My electric car is quiet and fast.' },
      { text: 'Bus', emoji: '🚌', label: 'Bus', pt: 'Ônibus', phonetic: '/bʌs/', sentence: 'The yellow school bus arrives on time.' },
      { text: 'Bicycle', emoji: '🚲', label: 'Bicycle / Bike', pt: 'Bicicleta', phonetic: '/ˈbaɪ.sɪ.kəl/', sentence: 'Riding a bicycle is great exercise.' },
      { text: 'Airplane', emoji: '✈️', label: 'Airplane', pt: 'Avião', phonetic: '/ˈeər.pleɪn/', sentence: 'The airplane flies high above the clouds.' },
      { text: 'Train', emoji: '🚆', label: 'Train', pt: 'Trem', phonetic: '/treɪn/', sentence: 'The high-speed train connects the cities.' },
      { text: 'Boat', emoji: '⛵', label: 'Boat', pt: 'Barco', phonetic: '/boʊt/', sentence: 'The small boat sails smoothly on the lake.' },
      { text: 'Motorcycle', emoji: '🏍️', label: 'Motorcycle', pt: 'Motocicleta', phonetic: '/ˈmoʊ.tərˌsaɪ.kəl/', sentence: 'He rides a modern motorcycle to work.' },
      { text: 'Helicopter', emoji: '🚁', label: 'Helicopter', pt: 'Helicóptero', phonetic: '/ˈhel.ɪˌkɒp.tər/', sentence: 'A rescue helicopter lands on the roof.' },
      { text: 'Taxi', emoji: '🚕', label: 'Taxi', pt: 'Táxi', phonetic: '/ˈtæk.si/', sentence: 'Call a yellow taxi to go to the airport.' },
      { text: 'Truck', emoji: '🚚', label: 'Truck', pt: 'Caminhão', phonetic: '/trʌk/', sentence: 'The heavy delivery truck transports goods.' }
    ]
  },
  {
    phaseNumber: 7,
    title: 'Roupas & Vestuário',
    subtitle: 'Vestimentas cotidianas associadas a imagens visuais',
    pedagogicalObjective: 'Nomear peças de vestuário e acessórios fundamentais.',
    icon: 'shirt',
    theory: [
      'Pants (/pænts/) e Shoes (/ʃuːz/) sempre são usados no plural porque vêm em pares ou têm duas pernas.',
      'Shirt (/ʃɜːt/) é camisa social ou de botão, enquanto T-shirt é a camiseta básica.',
      'Use o verbo \"wear\" (/weər/) para dizer \"vestir\" ou \"usar\" roupa.'
    ],
    items: [
      { text: 'Shirt', emoji: '👕', label: 'Shirt', pt: 'Camisa / Camiseta', phonetic: '/ʃɜːt/', sentence: 'He wears a clean white shirt.' },
      { text: 'Pants', emoji: '👖', label: 'Pants', pt: 'Calças', phonetic: '/pænts/', sentence: 'Blue denim pants are comfortable.' },
      { text: 'Shoes', emoji: '👟', label: 'Shoes', pt: 'Sapatos / Tênis', phonetic: '/ʃuːz/', sentence: 'Running shoes protect your feet.' },
      { text: 'Hat', emoji: '🧢', label: 'Hat / Cap', pt: 'Chapéu / Boné', phonetic: '/hæt/', sentence: 'Wear a hat to shield your eyes from the sun.' },
      { text: 'Dress', emoji: '👗', label: 'Dress', pt: 'Vestido', phonetic: '/dres/', sentence: 'She bought an elegant red dress for the party.' },
      { text: 'Jacket', emoji: '🧥', label: 'Jacket', pt: 'Jaqueta / Casaco', phonetic: '/ˈdʒæk.ɪt/', sentence: 'Put on a warm jacket because it is cold.' },
      { text: 'Socks', emoji: '🧦', label: 'Socks', pt: 'Meias', phonetic: '/sɒks/', sentence: 'Warm woolen socks keep your feet cozy.' },
      { text: 'Glasses', emoji: '👓', label: 'Glasses', pt: 'Óculos', phonetic: '/ˈɡlæs.ɪz/', sentence: 'Reading glasses help you see fine text.' },
      { text: 'Watch', emoji: '⌚', label: 'Watch', pt: 'Relógio de pulso', phonetic: '/wɒtʃ/', sentence: 'Check your watch so you are not late.' },
      { text: 'Backpack', emoji: '🎒', label: 'Backpack', pt: 'Mochila', phonetic: '/ˈbæk.pæk/', sentence: 'Students carry books in their backpack.' }
    ]
  },
  {
    phaseNumber: 8,
    title: 'Partes do Corpo Humano',
    subtitle: 'Rosto, mãos e membros em cartões visuais',
    pedagogicalObjective: 'Aprender a apontar e nomear partes do corpo em inglês.',
    icon: 'body',
    theory: [
      'Preste atenção aos plurais irregulares: 1 Foot -> 2 Feet (/fiːt/).',
      'Eye (/aɪ/) tem o mesmo som da palavra \"I\" (eu).',
      'Ear (/ɪər/) e Nose (/noʊz/) são partes dos sentidos fundamentais.'
    ],
    items: [
      { text: 'Eye', emoji: '👁️', label: 'Eye', pt: 'Olho', phonetic: '/aɪ/', sentence: 'Open your eyes to see the sunshine.' },
      { text: 'Hand', emoji: '✋', label: 'Hand', pt: 'Mão', phonetic: '/hænd/', sentence: 'Wash your hands before eating.' },
      { text: 'Foot', emoji: '🦶', label: 'Foot', pt: 'Pé', phonetic: '/fʊt/', sentence: 'He kicked the ball with his right foot.' },
      { text: 'Ear', emoji: '👂', label: 'Ear', pt: 'Orelha / Ouvido', phonetic: '/ɪər/', sentence: 'Humans listen with two ears.' },
      { text: 'Nose', emoji: '👃', label: 'Nose', pt: 'Nariz', phonetic: '/noʊz/', sentence: 'Smell the fresh scent with your nose.' },
      { text: 'Mouth', emoji: '👄', label: 'Mouth', pt: 'Boca', phonetic: '/maʊθ/', sentence: 'Smile and open your mouth to speak.' },
      { text: 'Head', emoji: '👤', label: 'Head', pt: 'Cabeça', phonetic: '/hed/', sentence: 'Nod your head if you understand.' },
      { text: 'Arm', emoji: '💪', label: 'Arm', pt: 'Braço', phonetic: '/ɑːm/', sentence: 'Strong arms help lift heavy weights.' },
      { text: 'Leg', emoji: '🦵', label: 'Leg', pt: 'Perna', phonetic: '/leɡ/', sentence: 'Walking every day strengthens your legs.' },
      { text: 'Heart', emoji: '❤️', label: 'Heart', pt: 'Coração', phonetic: '/hɑːt/', sentence: 'A healthy heart beats steadily.' }
    ]
  },
  {
    phaseNumber: 9,
    title: 'Animais da Fazenda & Selvagens',
    subtitle: 'Leão, vaca, elefante e cavalo com imagens e pronúncia',
    pedagogicalObjective: 'Ampliar o vocabulário de fauna global através de cartões ilustrativos.',
    icon: 'lion',
    theory: [
      'Cow (/kaʊ/), Horse (/hɔːs/) e Pig (/pɪɡ/) são clássicos da fazenda.',
      'Lion (/ˈlaɪ.ən/) é conhecido como \"King of the Jungle\".',
      'Elephant (/ˈel.ɪ.fənt/) soa com \"f\" na escrita \"ph\".'
    ],
    items: [
      { text: 'Cow', emoji: '🐮', label: 'Cow', pt: 'Vaca', phonetic: '/kaʊ/', sentence: 'The gentle cow gives fresh milk.' },
      { text: 'Horse', emoji: '🐴', label: 'Horse', pt: 'Cavalo', phonetic: '/hɔːs/', sentence: 'The brown horse runs across the field.' },
      { text: 'Pig', emoji: '🐷', label: 'Pig', pt: 'Porco', phonetic: '/pɪɡ/', sentence: 'The pink pig rests in the shade.' },
      { text: 'Sheep', emoji: '🐑', label: 'Sheep', pt: 'Ovelha', phonetic: '/ʃiːp/', sentence: 'Fluffy white sheep produce warm wool.' },
      { text: 'Chicken', emoji: '🐔', label: 'Chicken', pt: 'Galinha', phonetic: '/ˈtʃɪk.ɪn/', sentence: 'The farm chicken lays eggs in the morning.' },
      { text: 'Lion', emoji: '🦁', label: 'Lion', pt: 'Leão', phonetic: '/ˈlaɪ.ən/', sentence: 'The brave lion roars across the savanna.' },
      { text: 'Elephant', emoji: '🐘', label: 'Elephant', pt: 'Elefante', phonetic: '/ˈel.ɪ.fənt/', sentence: 'The giant elephant has large ears.' },
      { text: 'Monkey', emoji: '🐵', label: 'Monkey', pt: 'Macaco', phonetic: '/ˈmʌŋ.ki/', sentence: 'The clever monkey swings between branches.' },
      { text: 'Giraffe', emoji: '🦒', label: 'Giraffe', pt: 'Girafa', phonetic: '/dʒɪˈrɑːf/', sentence: 'The tall giraffe eats leaves high in the trees.' },
      { text: 'Bear', emoji: '🐻', label: 'Bear', pt: 'Urso', phonetic: '/beər/', sentence: 'The furry brown bear loves honey and fish.' }
    ]
  },
  {
    phaseNumber: 10,
    type: 'chest',
    title: '🎁 Baú da Sabedoria 1: Revisão Visual (1-9)',
    subtitle: 'Consolidação com 11 desafios das unidades 1 a 9',
    pedagogicalObjective: 'Revisar e consolidar todo o vocabulário visual das lições 1 a 9.',
    icon: 'chest',
    theory: [
      'Parabéns por chegar ao primeiro Baú da Sabedoria do Vocabulário!',
      'Nesta fase de revisão, testaremos sua retenção visual de frutas, animais, casa, bebidas, cores, transportes, roupas e corpo humano.',
      'Você receberá bônus generoso de XP e Gemas ao acertar os desafios!'
    ],
    items: [
      { text: 'Apple', emoji: '🍎', label: 'Apple', pt: 'Maçã', phonetic: '/ˈæp.əl/', sentence: 'A delicious red apple.' },
      { text: 'Dog', emoji: '🐶', label: 'Dog', pt: 'Cachorro', phonetic: '/dɒɡ/', sentence: 'A faithful dog.' },
      { text: 'Water', emoji: '💧', label: 'Water', pt: 'Água', phonetic: '/ˈwɔː.tər/', sentence: 'Fresh cold water.' },
      { text: 'Car', emoji: '🚗', label: 'Car', pt: 'Carro', phonetic: '/kɑːr/', sentence: 'A modern electric car.' },
      { text: 'Blue', emoji: '🔵', label: 'Blue', pt: 'Azul', phonetic: '/bluː/', sentence: 'A bright blue sphere.' },
      { text: 'Shirt', emoji: '👕', label: 'Shirt', pt: 'Camiseta', phonetic: '/ʃɜːt/', sentence: 'A clean cotton shirt.' },
      { text: 'Hand', emoji: '✋', label: 'Hand', pt: 'Mão', phonetic: '/hænd/', sentence: 'Raise your open hand.' },
      { text: 'Bed', emoji: '🛏️', label: 'Bed', pt: 'Cama', phonetic: '/bed/', sentence: 'A cozy warm bed.' },
      { text: 'Lion', emoji: '🦁', label: 'Lion', pt: 'Leão', phonetic: '/ˈlaɪ.ən/', sentence: 'The king of the jungle.' },
      { text: 'Banana', emoji: '🍌', label: 'Banana', pt: 'Banana', phonetic: '/bəˈnæn.ə/', sentence: 'A sweet yellow banana.' },
      { text: 'Bicycle', emoji: '🚲', label: 'Bicycle', pt: 'Bicicleta', phonetic: '/ˈbaɪ.sɪ.kəl/', sentence: 'Ride a bicycle in the park.' }
    ]
  },
  {
    phaseNumber: 11,
    title: 'Café da Manhã & Alimentos Básicos',
    subtitle: 'Pão, ovos, queijo e manteiga com imagens interativas',
    pedagogicalObjective: 'Conhecer os ingredientes do desjejum e das refeições matinais.',
    icon: 'bread',
    theory: [
      'Bread (/bred/) e Egg (/eɡ/) são a base de qualquer desjejum ocidental.',
      'Cheese (/tʃiːz/) tem a vogal longa /iː/, a mesma que falamos ao tirar fotos!',
      'Sandwich (/ˈsæn.wɪdʒ/) tem o som suave no final.'
    ],
    items: [
      { text: 'Bread', emoji: '🍞', label: 'Bread', pt: 'Pão', phonetic: '/bred/', sentence: 'Freshly baked bread smells wonderful.' },
      { text: 'Egg', emoji: '🥚', label: 'Egg', pt: 'Ovo', phonetic: '/eɡ/', sentence: 'Fried eggs with toast for breakfast.' },
      { text: 'Cheese', emoji: '🧀', label: 'Cheese', pt: 'Queijo', phonetic: '/tʃiːz/', sentence: 'Melted yellow cheese on a sandwich.' },
      { text: 'Butter', emoji: '🧈', label: 'Butter', pt: 'Manteiga', phonetic: '/ˈbʌt.ər/', sentence: 'Spread creamy butter on warm toast.' },
      { text: 'Sandwich', emoji: '🥪', label: 'Sandwich', pt: 'Sanduíche', phonetic: '/ˈsæn.wɪdʒ/', sentence: 'A healthy club sandwich with lettuce.' },
      { text: 'Pizza', emoji: '🍕', label: 'Pizza', pt: 'Pizza', phonetic: '/ˈpiːt.sə/', sentence: 'A hot slice of cheese pizza.' },
      { text: 'Burger', emoji: '🍔', label: 'Burger', pt: 'Hambúrguer', phonetic: '/ˈbɜː.ɡər/', sentence: 'A juicy burger with tomato.' },
      { text: 'Rice', emoji: '🍚', label: 'Rice', pt: 'Arroz', phonetic: '/raɪs/', sentence: 'Steamed white rice accompanies dinner.' },
      { text: 'Pasta', emoji: '🍝', label: 'Pasta', pt: 'Massa / Macarrão', phonetic: '/ˈpæs.tə/', sentence: 'Italian pasta with homemade tomato sauce.' },
      { text: 'Soup', emoji: '🍲', label: 'Soup', pt: 'Sopa', phonetic: '/suːp/', sentence: 'A warm bowl of vegetable soup.' }
    ]
  },
  {
    phaseNumber: 12,
    title: 'Sala & Tecnologia Moderna',
    subtitle: 'Celulares, computadores e gadgets em cartões visuais',
    pedagogicalObjective: 'Nomear os aparelhos eletrônicos e recursos tecnológicos atuais.',
    icon: 'phone',
    theory: [
      'Phone (/foʊn/) e Computer (/kəmˈpjuː.tər/) são fundamentais para estudo e trabalho.',
      'Headphones (/ˈhed.foʊnz/) é usado no plural porque possui duas saídas acústicas.',
      'Camera (/ˈkæm.rə/) tem apenas duas sílabas na fala natural em inglês.'
    ],
    items: [
      { text: 'Phone', emoji: '📱', label: 'Phone', pt: 'Celular / Telefone', phonetic: '/foʊn/', sentence: 'I check text messages on my phone.' },
      { text: 'Computer', emoji: '💻', label: 'Computer / Laptop', pt: 'Computador / Notebook', phonetic: '/kəmˈpjuː.tər/', sentence: 'She studies English on her computer.' },
      { text: 'Headphones', emoji: '🎧', label: 'Headphones', pt: 'Fones de ouvido', phonetic: '/ˈhed.foʊnz/', sentence: 'Wireless headphones provide clear audio.' },
      { text: 'Television', emoji: '📺', label: 'Television / TV', pt: 'Televisão', phonetic: '/ˈtel.ɪˌvɪʒ.ən/', sentence: 'Watch educational shows on television.' },
      { text: 'Camera', emoji: '📷', label: 'Camera', pt: 'Câmera fotográfica', phonetic: '/ˈkæm.rə/', sentence: 'Take memorable pictures with this camera.' },
      { text: 'Battery', emoji: '🔋', label: 'Battery', pt: 'Bateria', phonetic: '/ˈbæt.ər.i/', sentence: 'Recharge the battery when it gets low.' },
      { text: 'Mouse', emoji: '🖱️', label: 'Computer Mouse', pt: 'Mouse de computador', phonetic: '/maʊs/', sentence: 'Click on the link using your mouse.' },
      { text: 'Keyboard', emoji: '⌨️', label: 'Keyboard', pt: 'Teclado', phonetic: '/ˈkiː.bɔːd/', sentence: 'Type the sentences on the keyboard.' },
      { text: 'Tablet', emoji: '📟', label: 'Tablet', pt: 'Tablet', phonetic: '/ˈtæb.lət/', sentence: 'Children read e-books on the tablet.' },
      { text: 'Radio', emoji: '📻', label: 'Radio', pt: 'Rádio', phonetic: '/ˈreɪ.di.oʊ/', sentence: 'Listen to English podcasts on the radio.' }
    ]
  },
  {
    phaseNumber: 13,
    title: 'Lugares da Cidade & Comunidade',
    subtitle: 'Escola, hospital, praça e supermercado em imagens',
    pedagogicalObjective: 'Reconhecer locais públicos e pontos de referência urbanos.',
    icon: 'city',
    theory: [
      'School (/skuːl/) e Hospital (/ˈhɒs.pɪ.təl/) são destinos essenciais em qualquer localidade.',
      'Para dizer \"ir à escola\", dizemos \"go to school\" (sem artigo \"the\" geralmente).',
      'Park (/pɑːk/) é o local predileto para caminhadas e lazer ao ar livre.'
    ],
    items: [
      { text: 'School', emoji: '🏫', label: 'School', pt: 'Escola', phonetic: '/skuːl/', sentence: 'Students learn languages at school.' },
      { text: 'Hospital', emoji: '🏥', label: 'Hospital', pt: 'Hospital', phonetic: '/ˈhɒs.pɪ.təl/', sentence: 'Doctors and nurses care for patients at the hospital.' },
      { text: 'Park', emoji: '🌳', label: 'Park', pt: 'Parque / Praça', phonetic: '/pɑːk/', sentence: 'Families have picnics in the green park.' },
      { text: 'Supermarket', emoji: '🛒', label: 'Supermarket', pt: 'Supermercado', phonetic: '/ˈsuː.pəˌmɑː.kɪt/', sentence: 'Buy fresh food at the local supermarket.' },
      { text: 'Restaurant', emoji: '🍽️', label: 'Restaurant', pt: 'Restaurante', phonetic: '/ˈres.trɒnt/', sentence: 'We have dinner at our favorite restaurant.' },
      { text: 'Bank', emoji: '🏦', label: 'Bank', pt: 'Banco', phonetic: '/bæŋk/', sentence: 'Deposit money safely at the city bank.' },
      { text: 'Airport', emoji: '🛫', label: 'Airport', pt: 'Aeroporto', phonetic: '/ˈeə.pɔːt/', sentence: 'Depart on international flights from the airport.' },
      { text: 'Hotel', emoji: '🏨', label: 'Hotel', pt: 'Hotel', phonetic: '/hoʊˈtel/', sentence: 'Stay at a comfortable downtown hotel.' },
      { text: 'Library', emoji: '📚', label: 'Library', pt: 'Biblioteca', phonetic: '/ˈlaɪ.brər.i/', sentence: 'Read quiet books in the public library.' },
      { text: 'Bakery', emoji: '🥖', label: 'Bakery', pt: 'Padaria', phonetic: '/ˈbeɪ.kər.i/', sentence: 'Buy warm bread every morning at the bakery.' }
    ]
  },
  {
    phaseNumber: 14,
    title: 'Natureza & Elementos Naturais',
    subtitle: 'Sol, lua, árvores e rios em cartões ilustrados',
    pedagogicalObjective: 'Nomear elementos da geografia e da natureza do planeta.',
    icon: 'tree',
    theory: [
      'Sun (/sʌn/) e Moon (/muːn/) são elementos universais do céu.',
      'Tree (/triː/) possui pronúncia distinta de Three (/θriː/): cuidado com a ausência do \"H\"!',
      'Mountain (/ˈmaʊn.tɪn/) e River (/ˈrɪv.ər/) são características geográficas centrais.'
    ],
    items: [
      { text: 'Sun', emoji: '☀️', label: 'Sun', pt: 'Sol', phonetic: '/sʌn/', sentence: 'The morning sun brings light and energy.' },
      { text: 'Moon', emoji: '🌙', label: 'Moon', pt: 'Lua', phonetic: '/muːn/', sentence: 'The crescent moon shines at night.' },
      { text: 'Tree', emoji: '🌲', label: 'Tree', pt: 'Árvore', phonetic: '/triː/', sentence: 'Tall green trees grow in the forest.' },
      { text: 'Flower', emoji: '🌸', label: 'Flower', pt: 'Flor', phonetic: '/ˈflaʊ.ər/', sentence: 'A beautiful pink flower blooms in spring.' },
      { text: 'Mountain', emoji: '⛰️', label: 'Mountain', pt: 'Montanha', phonetic: '/ˈmaʊn.tɪn/', sentence: 'Snow covers the peaks of the high mountain.' },
      { text: 'River', emoji: '🌊', label: 'River', pt: 'Rio', phonetic: '/ˈrɪv.ər/', sentence: 'Clean freshwater flows down the winding river.' },
      { text: 'Forest', emoji: '🌳', label: 'Forest', pt: 'Floresta / Bosque', phonetic: '/ˈfɒr.ɪst/', sentence: 'Wild animals live peacefully in the dense forest.' },
      { text: 'Beach', emoji: '🏖️', label: 'Beach', pt: 'Praia', phonetic: '/biːtʃ/', sentence: 'Walk barefoot on the sunny sandy beach.' },
      { text: 'Fire', emoji: '🔥', label: 'Fire', pt: 'Fogo', phonetic: '/faɪər/', sentence: 'A warm camp fire keeps travelers warm.' },
      { text: 'Island', emoji: '🏝️', label: 'Island', pt: 'Ilha', phonetic: '/ˈaɪ.lənd/', sentence: 'An island surrounded by tropical blue water.' }
    ]
  },
  {
    phaseNumber: 15,
    title: 'Clima, Tempo & Estações',
    subtitle: 'Chuva, neve, vento e arco-íris com imagens dinâmicas',
    pedagogicalObjective: 'Descrever condições climáticas através de vocabulário visual direto.',
    icon: 'cloud-rain',
    theory: [
      'Rain (/reɪn/) e Snow (/snoʊ/) podem funcionar tanto como substantivo quanto como verbo.',
      'Wind (/wɪnd/) refere-se ao ar em movimento.',
      'Rainbow (/ˈreɪn.boʊ/) é literalmente o \"arco da chuva\".'
    ],
    items: [
      { text: 'Rain', emoji: '🌧️', label: 'Rain', pt: 'Chuva', phonetic: '/reɪn/', sentence: 'Gentle rain waters the thirsty crops.' },
      { text: 'Snow', emoji: '❄️', label: 'Snow', pt: 'Neve', phonetic: '/snoʊ/', sentence: 'White snow falls silently in winter.' },
      { text: 'Cloud', emoji: '☁️', label: 'Cloud', pt: 'Nuvem', phonetic: '/klaʊd/', sentence: 'Fluffy white clouds drift across the blue sky.' },
      { text: 'Wind', emoji: '💨', label: 'Wind', pt: 'Vento', phonetic: '/wɪnd/', sentence: 'A cool summer wind rustles the leaves.' },
      { text: 'Rainbow', emoji: '🌈', label: 'Rainbow', pt: 'Arco-íris', phonetic: '/ˈreɪn.boʊ/', sentence: 'A colorful rainbow appears after the storm.' },
      { text: 'Lightning', emoji: '⚡', label: 'Lightning', pt: 'Relâmpago / Raio', phonetic: '/ˈlaɪt.nɪŋ/', sentence: 'Bright lightning flashes across the dark sky.' },
      { text: 'Fog', emoji: '🌫️', label: 'Fog', pt: 'Neblina / Nevoeiro', phonetic: '/fɒɡ/', sentence: 'Thick morning fog reduces visibility.' },
      { text: 'Umbrella', emoji: '☂️', label: 'Umbrella', pt: 'Guarda-chuva', phonetic: '/ʌmˈbrel.ə/', sentence: 'Carry an umbrella when it looks like rain.' },
      { text: 'Sun', emoji: '☀️', label: 'Sunny Day', pt: 'Dia ensolarado', phonetic: '/ˈsʌn.i/', sentence: 'A warm sunny day for outdoor activities.' },
      { text: 'Thermometer', emoji: '🌡️', label: 'Thermometer', pt: 'Termômetro (Temperatura)', phonetic: '/θəˈmɒm.ɪ.tər/', sentence: 'The thermometer shows high temperatures.' }
    ]
  },
  {
    phaseNumber: 16,
    title: 'Ações Cotidianas & Verbos Visuais',
    subtitle: 'Correr, comer, dormir e ler associados a gestos claros',
    pedagogicalObjective: 'Associar verbos fundamentais de ação a imagens ilustrativas.',
    icon: 'run',
    theory: [
      'Verbos em inglês são simples: não conjugam intensamente como em português!',
      'Run (/rʌn/), Walk (/wɔːk/), Eat (/iːt/) e Sleep (/sliːp/) formam a espinha dorsal de qualquer conversa.',
      'Read (/riːd/) rima com Need, enquanto Write (/raɪt/) tem o \"W\" mudo.'
    ],
    items: [
      { text: 'Run', emoji: '🏃', label: 'Run', pt: 'Correr', phonetic: '/rʌn/', sentence: 'Athletes run fast in the stadium.' },
      { text: 'Walk', emoji: '🚶', label: 'Walk', pt: 'Caminhar', phonetic: '/wɔːk/', sentence: 'Take a relaxed walk through the botanical garden.' },
      { text: 'Eat', emoji: '🍽️', label: 'Eat', pt: 'Comer', phonetic: '/iːt/', sentence: 'We eat wholesome meals with family.' },
      { text: 'Drink', emoji: '🥤', label: 'Drink', pt: 'Beber', phonetic: '/drɪŋk/', sentence: 'Remember to drink water throughout the day.' },
      { text: 'Sleep', emoji: '😴', label: 'Sleep', pt: 'Dormir', phonetic: '/sliːp/', sentence: 'Get eight hours of restful sleep.' },
      { text: 'Read', emoji: '📖', label: 'Read', pt: 'Ler', phonetic: '/riːd/', sentence: 'I read inspiring stories before bedtime.' },
      { text: 'Write', emoji: '✍️', label: 'Write', pt: 'Escrever', phonetic: '/raɪt/', sentence: 'Write new English words in your notebook.' },
      { text: 'Swim', emoji: '🏊', label: 'Swim', pt: 'Nadar', phonetic: '/swɪm/', sentence: 'Learn how to swim in the pool.' },
      { text: 'Sing', emoji: '🎤', label: 'Sing', pt: 'Cantar', phonetic: '/sɪŋ/', sentence: 'Sing cheerful songs with friends.' },
      { text: 'Dance', emoji: '💃', label: 'Dance', pt: 'Dançar', phonetic: '/dɑːns/', sentence: 'People dance to upbeat music.' }
    ]
  },
  {
    phaseNumber: 17,
    title: 'Sentimentos & Emoções Humanas',
    subtitle: 'Feliz, triste, calmo e surpreso com emojis expressivos',
    pedagogicalObjective: 'Expressar estados de espírito e emoções de forma visual.',
    icon: 'smile',
    theory: [
      'Happy (/ˈhæp.i/) e Sad (/sæd/) são antônimos fundamentais.',
      'Para dizer como se sente, use o verbo TO BE: \"I am happy\", \"She is surprised\".',
      'Tired (/taɪəd/) expressa cansaço físico ou mental.'
    ],
    items: [
      { text: 'Happy', emoji: '😊', label: 'Happy', pt: 'Feliz', phonetic: '/ˈhæp.i/', sentence: 'A warm smile shows that you are happy.' },
      { text: 'Sad', emoji: '😢', label: 'Sad', pt: 'Triste', phonetic: '/sæd/', sentence: 'A hug helps when someone feels sad.' },
      { text: 'Angry', emoji: '😠', label: 'Angry', pt: 'Bravo / Irritado', phonetic: '/ˈæŋ.ɡri/', sentence: 'Take deep breaths when you feel angry.' },
      { text: 'Surprised', emoji: '😮', label: 'Surprised', pt: 'Surpreso / Admirado', phonetic: '/səˈpraɪzd/', sentence: 'She was pleasantly surprised by the gift.' },
      { text: 'Tired', emoji: '🥱', label: 'Tired', pt: 'Cansado', phonetic: '/taɪəd/', sentence: 'After a long workday, he feels tired.' },
      { text: 'Confused', emoji: '🤔', label: 'Confused', pt: 'Confuso', phonetic: '/kənˈfjuːzd/', sentence: 'Ask questions if you feel confused.' },
      { text: 'Scared', emoji: '😨', label: 'Scared / Afraid', pt: 'Com medo / Assustado', phonetic: '/skeəd/', sentence: 'Thunder sometimes makes children scared.' },
      { text: 'Excited', emoji: '🤩', label: 'Excited', pt: 'Animado / Empolgado', phonetic: '/ɪkˈsaɪ.tɪd/', sentence: 'We are excited about the upcoming holiday.' },
      { text: 'Calm', emoji: '😌', label: 'Calm', pt: 'Calmo / Tranquilo', phonetic: '/kɑːm/', sentence: 'Meditation keeps your mind peaceful and calm.' },
      { text: 'Cool', emoji: '😎', label: 'Cool', pt: 'Descolado / Legal', phonetic: '/kuːl/', sentence: 'Wearing sunglasses looks very cool.' }
    ]
  },
  {
    phaseNumber: 18,
    title: 'Material Escolar & Escritório',
    subtitle: 'Livro, caneta, lápis e régua com imagens nítidas',
    pedagogicalObjective: 'Identificar itens de estudo e materiais didáticos.',
    icon: 'book',
    theory: [
      'Book (/bʊk/), Pen (/pen/) e Pencil (/ˈpen.səl/) estão no estojo de todo estudante.',
      'Notebook (/ˈnoʊt.bʊk/) em inglês refere-se primariamente a um caderno de papel!',
      'Eraser (/ɪˈreɪ.zər/) no inglês americano corresponde a \"Rubber\" no inglês britânico.'
    ],
    items: [
      { text: 'Book', emoji: '📚', label: 'Book', pt: 'Livro', phonetic: '/bʊk/', sentence: 'Reading a good book enriches your vocabulary.' },
      { text: 'Notebook', emoji: '📓', label: 'Notebook', pt: 'Caderno de anotações', phonetic: '/ˈnoʊt.bʊk/', sentence: 'Write lecture notes inside your notebook.' },
      { text: 'Pen', emoji: '🖊️', label: 'Pen', pt: 'Caneta', phonetic: '/pen/', sentence: 'Sign the contract using blue ink with a pen.' },
      { text: 'Pencil', emoji: '✏️', label: 'Pencil', pt: 'Lápis', phonetic: '/ˈpen.səl/', sentence: 'Sketch drawing lines with a sharp pencil.' },
      { text: 'Eraser', emoji: '🧼', label: 'Eraser', pt: 'Borracha escolar', phonetic: '/ɪˈreɪ.zər/', sentence: 'Erase mistakes cleanly with an eraser.' },
      { text: 'Ruler', emoji: '📏', label: 'Ruler', pt: 'Régua', phonetic: '/ˈruː.lər/', sentence: 'Measure length accurately with a clear ruler.' },
      { text: 'Scissors', emoji: '✂️', label: 'Scissors', pt: 'Tesoura', phonetic: '/ˈsɪz.əz/', sentence: 'Cut paper shapes using safety scissors.' },
      { text: 'Glue', emoji: '🧴', label: 'Glue', pt: 'Cola escolar', phonetic: '/ɡluː/', sentence: 'Paste the collage together with stick glue.' },
      { text: 'Desk', emoji: '🧑‍💻', label: 'Desk', pt: 'Carteira / Mesa de estudos', phonetic: '/desk/', sentence: 'Sit at your study desk to complete homework.' },
      { text: 'Calculator', emoji: '🔢', label: 'Calculator', pt: 'Calculadora', phonetic: '/ˈkæl.kjə.leɪ.tər/', sentence: 'Solve math equations using a digital calculator.' }
    ]
  },
  {
    phaseNumber: 19,
    title: 'Pessoas, Família & Comunidade',
    subtitle: 'Bebê, menino, menina, mãe e pai em cartões visuais',
    pedagogicalObjective: 'Reconhecer e nomear termos de parentesco e pessoas ao redor.',
    icon: 'family',
    theory: [
      'Baby (/ˈbeɪ.bi/), Boy (/bɔɪ/) e Girl (/ɡɜːl/) descrevem faixas etárias iniciais.',
      'Mother (/ˈmʌð.ər/) e Father (/ˈfɑː.ðər/) são chamados carinhosamente de Mom e Dad.',
      'Friend (/frend/) tem a vogal curta \"e\".'
    ],
    items: [
      { text: 'Baby', emoji: '👶', label: 'Baby', pt: 'Bebê', phonetic: '/ˈbeɪ.bi/', sentence: 'The newborn baby smiles gently.' },
      { text: 'Boy', emoji: '👦', label: 'Boy', pt: 'Menino / Garoto', phonetic: '/bɔɪ/', sentence: 'The active boy kicks the football.' },
      { text: 'Girl', emoji: '👧', label: 'Girl', pt: 'Menina / Garota', phonetic: '/ɡɜːl/', sentence: 'The creative girl paints a portrait.' },
      { text: 'Man', emoji: '👨', label: 'Man', pt: 'Homem', phonetic: '/mæn/', sentence: 'The kind man helps his neighbors.' },
      { text: 'Woman', emoji: '👩', label: 'Woman', pt: 'Mulher', phonetic: '/ˈwʊm.ən/', sentence: 'The professional woman leads the meeting.' },
      { text: 'Mother', emoji: '👩‍👧', label: 'Mother / Mom', pt: 'Mãe', phonetic: '/ˈmʌð.ər/', sentence: 'A mother hugs her child with love.' },
      { text: 'Father', emoji: '👨‍👦', label: 'Father / Dad', pt: 'Pai', phonetic: '/ˈfɑː.ðər/', sentence: 'A father teaches his son to ride a bike.' },
      { text: 'Friend', emoji: '🤝', label: 'Friend', pt: 'Amigo(a)', phonetic: '/frend/', sentence: 'A true friend is always supportive.' },
      { text: 'Grandfather', emoji: '👴', label: 'Grandfather / Grandpa', pt: 'Avô', phonetic: '/ˈɡræn.fɑː.ðər/', sentence: 'Grandfather tells entertaining historical stories.' },
      { text: 'Grandmother', emoji: '👵', label: 'Grandmother / Grandma', pt: 'Avó', phonetic: '/ˈɡræn.mʌð.ər/', sentence: 'Grandmother bakes delicious cinnamon cookies.' }
    ]
  },
  {
    phaseNumber: 20,
    type: 'chest',
    title: '🎁 Baú da Sabedoria 2: Revisão Visual (11-19)',
    subtitle: 'Consolidação com 11 desafios das unidades 11 a 19',
    pedagogicalObjective: 'Fixar e revisar o vocabulário das lições 11 a 19 com máxima retenção.',
    icon: 'chest',
    theory: [
      'Você chegou ao segundo Baú da Sabedoria Visual!',
      'Nesta revisão reforçaremos: café da manhã, tecnologia, lugares urbanos, natureza, clima, verbos de ação, emoções, material escolar e família.',
      'Acumule mais XP e Gemas para subir no ranking de fluência!'
    ],
    items: [
      { text: 'Bread', emoji: '🍞', label: 'Bread', pt: 'Pão', phonetic: '/bred/', sentence: 'Warm sliced bread.' },
      { text: 'Phone', emoji: '📱', label: 'Phone', pt: 'Telefone celular', phonetic: '/foʊn/', sentence: 'A smart mobile phone.' },
      { text: 'School', emoji: '🏫', label: 'School', pt: 'Escola', phonetic: '/skuːl/', sentence: 'A place of knowledge.' },
      { text: 'Sun', emoji: '☀️', label: 'Sun', pt: 'Sol brilhante', phonetic: '/sʌn/', sentence: 'The radiant center of our solar system.' },
      { text: 'Rain', emoji: '🌧️', label: 'Rain', pt: 'Chuva', phonetic: '/reɪn/', sentence: 'Refreshing raindrops falling.' },
      { text: 'Run', emoji: '🏃', label: 'Run', pt: 'Correr', phonetic: '/rʌn/', sentence: 'Move swiftly on foot.' },
      { text: 'Happy', emoji: '😊', label: 'Happy', pt: 'Feliz / Contente', phonetic: '/ˈhæp.i/', sentence: 'Full of positive joy.' },
      { text: 'Book', emoji: '📚', label: 'Book', pt: 'Livro didático', phonetic: '/bʊk/', sentence: 'A wealth of written wisdom.' },
      { text: 'Friend', emoji: '🤝', label: 'Friend', pt: 'Amigo', phonetic: '/frend/', sentence: 'A trustworthy companion.' },
      { text: 'Computer', emoji: '💻', label: 'Computer', pt: 'Computador', phonetic: '/kəmˈpjuː.tər/', sentence: 'A fast computing machine.' },
      { text: 'Mother', emoji: '👩‍👧', label: 'Mother', pt: 'Mãe', phonetic: '/ˈmʌð.ər/', sentence: 'The loving heart of the home.' }
    ]
  },
  {
    phaseNumber: 21,
    title: 'Esportes & Lazer Ativo',
    subtitle: 'Futebol, basquete, tênis e natação com imagens esportivas',
    pedagogicalObjective: 'Nomear modalidades esportivas e práticas de exercícios físicos.',
    icon: 'trophy',
    theory: [
      'Soccer (/ˈsɒk.ər/) é o futebol tradicional nos EUA, enquanto no resto do mundo de língua inglesa é Football.',
      'Basketball (/ˈbɑː.skɪt.bɔːl/) e Tennis (/ˈten.ɪs/) são esportes globais.',
      'Use \"play\" com esportes com bola: \"play soccer\", \"play tennis\".'
    ],
    items: [
      { text: 'Soccer', emoji: '⚽', label: 'Soccer / Football', pt: 'Futebol', phonetic: '/ˈsɒk.ər/', sentence: 'Kids play soccer on Saturday afternoon.' },
      { text: 'Basketball', emoji: '🏀', label: 'Basketball', pt: 'Basquete', phonetic: '/ˈbɑː.skɪt.bɔːl/', sentence: 'Shoot the basketball into the high hoop.' },
      { text: 'Tennis', emoji: '🎾', label: 'Tennis', pt: 'Tênis', phonetic: '/ˈten.ɪs/', sentence: 'Hit the tennis ball over the net with a racket.' },
      { text: 'Volleyball', emoji: '🏐', label: 'Volleyball', pt: 'Vôlei', phonetic: '/ˈvɒl.i.bɔːl/', sentence: 'Beach volleyball is fun in the summer.' },
      { text: 'Swimming', emoji: '🏊', label: 'Swimming', pt: 'Natação', phonetic: '/ˈswɪm.ɪŋ/', sentence: 'Swimming provides a complete full-body workout.' },
      { text: 'Cycling', emoji: '🚴', label: 'Cycling', pt: 'Ciclismo', phonetic: '/ˈsaɪ.klɪŋ/', sentence: 'Cycling along the coast is scenic and refreshing.' },
      { text: 'Baseball', emoji: '⚾', label: 'Baseball', pt: 'Beisebol', phonetic: '/ˈbeɪs.bɔːl/', sentence: 'Strike the baseball with the wooden bat.' },
      { text: 'Skateboarding', emoji: '🛹', label: 'Skateboarding', pt: 'Skate', phonetic: '/ˈskeɪtˌbɔː.dɪŋ/', sentence: 'Youth practice kickflips at the skate park.' },
      { text: 'Boxing', emoji: '🥊', label: 'Boxing', pt: 'Boxe', phonetic: '/ˈbɒk.sɪŋ/', sentence: 'Wear padded gloves during boxing training.' },
      { text: 'Running', emoji: '👟', label: 'Running', pt: 'Corrida', phonetic: '/ˈrʌn.ɪŋ/', sentence: 'Morning running builds cardiovascular endurance.' }
    ]
  },
  {
    phaseNumber: 22,
    title: 'Utensílios de Cozinha & Mesa',
    subtitle: 'Garfo, faca, colher, prato e copo em cartões visuais',
    pedagogicalObjective: 'Identificar talheres e recipientes para refeições e preparo culinário.',
    icon: 'utensils',
    theory: [
      'Fork (/fɔːk/), Knife (/naɪf/) e Spoon (/spuːn/) formam o trio básico de talheres.',
      'Atenção: em Knife (/naɪf/), a letra \"K\" é totalmente muda!',
      'Plate (/pleɪt/) e Cup (/kʌp/) servem refeições e líquidos.'
    ],
    items: [
      { text: 'Fork', emoji: '🍴', label: 'Fork', pt: 'Garfo', phonetic: '/fɔːk/', sentence: 'Hold the fork in your left hand.' },
      { text: 'Spoon', emoji: '🥄', label: 'Spoon', pt: 'Colher', phonetic: '/spuːn/', sentence: 'Eat hearty hot soup with a spoon.' },
      { text: 'Knife', emoji: '🔪', label: 'Knife', pt: 'Faca', phonetic: '/naɪf/', sentence: 'Cut tender meat carefully with a sharp knife.' },
      { text: 'Plate', emoji: '🍽️', label: 'Plate', pt: 'Prato', phonetic: '/pleɪt/', sentence: 'Place delicious food on the ceramic plate.' },
      { text: 'Cup', emoji: '🥛', label: 'Cup / Glass', pt: 'Copo / Xícara', phonetic: '/kʌp/', sentence: 'Pour fresh juice into a tall glass cup.' },
      { text: 'Bowl', emoji: '🥣', label: 'Bowl', pt: 'Tigela / Cumbuca', phonetic: '/boʊl/', sentence: 'Serve breakfast cereal inside a bowl.' },
      { text: 'Pan', emoji: '🍳', label: 'Pan / Frying Pan', pt: 'Frigideira', phonetic: '/pæn/', sentence: 'Fry sunny-side eggs on the non-stick pan.' },
      { text: 'Pot', emoji: '🍲', label: 'Cooking Pot', pt: 'Panela', phonetic: '/pɒt/', sentence: 'Boil pasta water inside a stainless pot.' },
      { text: 'Bottle', emoji: '🍾', label: 'Bottle', pt: 'Garrafa', phonetic: '/ˈbɒt.əl/', sentence: 'Carry a reusable water bottle everywhere.' },
      { text: 'Teapot', emoji: '🫖', label: 'Teapot', pt: 'Bule de chá', phonetic: '/ˈtiː.pɒt/', sentence: 'Brew herbal green tea in the ceramic teapot.' }
    ]
  },
  {
    phaseNumber: 23,
    title: 'Higiene Pessoal & Banheiro',
    subtitle: 'Sabonete, escova de dentes e toalha em imagens cotidianas',
    pedagogicalObjective: 'Dominar termos de higiene e cuidados pessoais diários.',
    icon: 'shower',
    theory: [
      'Soap (/soʊp/) e Shower (/ˈʃaʊ.ər/) são essenciais no banho.',
      'Toothbrush (/ˈtuːθ.brʌʃ/) combina Tooth (dente) + Brush (escova).',
      'Towel (/ˈtaʊ.əl/) é usada para secar o corpo e as mãos.'
    ],
    items: [
      { text: 'Soap', emoji: '🧼', label: 'Soap', pt: 'Sabonete', phonetic: '/soʊp/', sentence: 'Lather your hands with lavender scented soap.' },
      { text: 'Toothbrush', emoji: '🪥', label: 'Toothbrush', pt: 'Escova de dentes', phonetic: '/ˈtuːθ.brʌʃ/', sentence: 'Dentists advise changing your toothbrush regularly.' },
      { text: 'Toothpaste', emoji: '🧴', label: 'Toothpaste', pt: 'Pasta de dente', phonetic: '/ˈtuːθ.peɪst/', sentence: 'Squeeze mint toothpaste onto the bristles.' },
      { text: 'Towel', emoji: '🧖', label: 'Towel', pt: 'Toalha de banho', phonetic: '/ˈtaʊ.əl/', sentence: 'Dry your face with a fluffy cotton towel.' },
      { text: 'Shower', emoji: '🚿', label: 'Shower', pt: 'Chuveiro / Banho', phonetic: '/ˈʃaʊ.ər/', sentence: 'A warm shower relaxes tired muscles.' },
      { text: 'Comb', emoji: '🪮', label: 'Comb / Hairbrush', pt: 'Pente de cabelo', phonetic: '/koʊm/', sentence: 'Untangle hair neatly using a wide-tooth comb.' },
      { text: 'Shampoo', emoji: '🧴', label: 'Shampoo', pt: 'Xampu', phonetic: '/ʃæmˈpuː/', sentence: 'Wash your scalp thoroughly with gentle shampoo.' },
      { text: 'Mirror', emoji: '🪞', label: 'Mirror', pt: 'Espelho do banheiro', phonetic: '/ˈmɪr.ər/', sentence: 'Look in the mirror while styling your hair.' },
      { text: 'Sponge', emoji: '🧽', label: 'Sponge', pt: 'Esponja de banho', phonetic: '/spʌndʒ/', sentence: 'Create abundant foam using a bath sponge.' },
      { text: 'Faucet', emoji: '🚰', label: 'Faucet / Tap', pt: 'Torneira', phonetic: '/ˈfɔː.sɪt/', sentence: 'Turn off the bathroom faucet to save water.' }
    ]
  },
  {
    phaseNumber: 24,
    title: 'Instrumentos Musicais & Ritmo',
    subtitle: 'Violão, piano, bateria e violino com sonoridades nítidas',
    pedagogicalObjective: 'Reconhecer nomes de instrumentos musicais em inglês.',
    icon: 'music',
    theory: [
      'Guitar (/ɡɪˈtɑːr/) em inglês geralmente refere-se ao violão ou à guitarra elétrica (electric guitar).',
      'Piano (/piˈæn.oʊ/) e Drums (/drʌmz/) marcam a melodia e o ritmo.',
      'Use o verbo \"play\" com instrumentos: \"play the piano\", \"play the guitar\" (com \"the\").'
    ],
    items: [
      { text: 'Guitar', emoji: '🎸', label: 'Guitar', pt: 'Violão / Guitarra', phonetic: '/ɡɪˈtɑːr/', sentence: 'Strum acoustic chords on the classical guitar.' },
      { text: 'Piano', emoji: '🎹', label: 'Piano', pt: 'Piano', phonetic: '/piˈæn.oʊ/', sentence: 'Press the black and white keys of the piano.' },
      { text: 'Drums', emoji: '🥁', label: 'Drums', pt: 'Bateria', phonetic: '/drʌmz/', sentence: 'Keep the energetic beat with dynamic drums.' },
      { text: 'Violin', emoji: '🎻', label: 'Violin', pt: 'Violino', phonetic: '/ˌvaɪəˈlɪn/', sentence: 'The symphony orchestra features brilliant violins.' },
      { text: 'Trumpet', emoji: '🎺', label: 'Trumpet', pt: 'Trompete', phonetic: '/ˈtrʌm.pɪt/', sentence: 'A brass trumpet plays loud fanfare notes.' },
      { text: 'Flute', emoji: '🪈', label: 'Flute', pt: 'Flauta', phonetic: '/fluːt/', sentence: 'The wooden flute produces sweet gentle melodies.' },
      { text: 'Saxophone', emoji: '🎷', label: 'Saxophone', pt: 'Saxofone', phonetic: '/ˈsæk.sə.foʊn/', sentence: 'Jazz musicians express emotion through the saxophone.' },
      { text: 'Microphone', emoji: '🎤', label: 'Microphone', pt: 'Microfone', phonetic: '/ˈmaɪ.krə.foʊn/', sentence: 'Sing your favorite English song into the microphone.' },
      { text: 'Bell', emoji: '🔔', label: 'Bell', pt: 'Sino / Campainha', phonetic: '/bel/', sentence: 'The church bell rings at noon.' },
      { text: 'Headphones', emoji: '🎧', label: 'Studio Headphones', pt: 'Fones de estúdio', phonetic: '/ˈhed.foʊnz/', sentence: 'Producers listen to music mixes through headphones.' }
    ]
  },
  {
    phaseNumber: 25,
    title: 'Profissões & Ocupações Comuns',
    subtitle: 'Médico, professor, cozinheiro e bombeiro com ilustrações',
    pedagogicalObjective: 'Identificar ocupações profissionais e prestadores de serviços.',
    icon: 'briefcase',
    theory: [
      'Em inglês, sempre usamos artigo antes de profissão: \"He is A doctor\", \"She is AN engineer\".',
      'Teacher (/ˈtiː.tʃər/) e Doctor (/ˈdɒk.tər/) são as profissões mais universais.',
      'Chef (/ʃef/) vem do francês e pronuncia-se com som de \"ch\" (/ʃ/).'
    ],
    items: [
      { text: 'Doctor', emoji: '👨‍⚕️', label: 'Doctor', pt: 'Médico(a)', phonetic: '/ˈdɒk.tər/', sentence: 'The caring doctor examines the patient.' },
      { text: 'Teacher', emoji: '👨‍🏫', label: 'Teacher', pt: 'Professor(a)', phonetic: '/ˈtiː.tʃər/', sentence: 'The dedicated teacher explains English grammar.' },
      { text: 'Chef', emoji: '👨‍🍳', label: 'Chef / Cook', pt: 'Cozinheiro(a) / Chef', phonetic: '/ʃef/', sentence: 'The master chef prepares delicious gourmet dishes.' },
      { text: 'Police Officer', emoji: '👮', label: 'Police Officer', pt: 'Policial', phonetic: '/pəˈliːs ˈɒf.ɪ.sər/', sentence: 'Police officers ensure safety in the neighborhood.' },
      { text: 'Firefighter', emoji: '👨‍🚒', label: 'Firefighter', pt: 'Bombeiro(a)', phonetic: '/ˈfaɪəˌfaɪ.tər/', sentence: 'Brave firefighters extinguish blazing fires.' },
      { text: 'Pilot', emoji: '👨‍✈️', label: 'Pilot', pt: 'Piloto de avião', phonetic: '/ˈpaɪ.lət/', sentence: 'The commercial pilot navigates across oceans.' },
      { text: 'Artist', emoji: '🎨', label: 'Artist / Painter', pt: 'Artista / Pintor(a)', phonetic: '/ˈɑː.tɪst/', sentence: 'The talented artist paints vibrant oil canvases.' },
      { text: 'Farmer', emoji: '👨‍🌾', label: 'Farmer', pt: 'Agricultor(a) / Fazendeiro', phonetic: '/ˈfɑː.mər/', sentence: 'The hardworking farmer harvests organic vegetables.' },
      { text: 'Singer', emoji: '🧑‍🎤', label: 'Singer', pt: 'Cantor(a)', phonetic: '/ˈsɪŋ.ər/', sentence: 'The musical singer performs at large concert halls.' },
      { text: 'Builder', emoji: '👷', label: 'Builder / Engineer', pt: 'Construtor(a) / Engenheiro', phonetic: '/ˈbɪl.dər/', sentence: 'Builders construct sturdy modern homes.' }
    ]
  },
  {
    phaseNumber: 26,
    title: 'Vegetais & Legumes da Horta',
    subtitle: 'Cenoura, tomate, batata e brócolis em imagens ricas',
    pedagogicalObjective: 'Conhecer vegetais e legumes essenciais para alimentação.',
    icon: 'carrot',
    theory: [
      'Tomato (/təˈmɑː.toʊ/ ou /təˈmeɪ.toʊ/) e Potato (/pəˈteɪ.toʊ/) rimam em inglês.',
      'Carrot (/ˈkær.ət/) é rica em betacaroteno e cor alaranjada.',
      'Onion (/ˈʌn.jən/) e Garlic (/ˈɡɑː.lɪk/) temperam a culinária mundial.'
    ],
    items: [
      { text: 'Carrot', emoji: '🥕', label: 'Carrot', pt: 'Cenoura', phonetic: '/ˈkær.ət/', sentence: 'Crunchy raw carrots are healthy snacks.' },
      { text: 'Tomato', emoji: '🍅', label: 'Tomato', pt: 'Tomate', phonetic: '/təˈmɑː.toʊ/', sentence: 'Ripe red tomatoes make fantastic salad.' },
      { text: 'Potato', emoji: '🥔', label: 'Potato', pt: 'Batata', phonetic: '/pəˈteɪ.toʊ/', sentence: 'Mashed potatoes are a popular side dish.' },
      { text: 'Broccoli', emoji: '🥦', label: 'Broccoli', pt: 'Brócolis', phonetic: '/ˈbrɒk.əl.i/', sentence: 'Steamed green broccoli is packed with vitamins.' },
      { text: 'Corn', emoji: '🌽', label: 'Corn', pt: 'Milho', phonetic: '/kɔːn/', sentence: 'Sweet yellow corn boiled on the cob.' },
      { text: 'Onion', emoji: '🧅', label: 'Onion', pt: 'Cebola', phonetic: '/ˈʌn.jən/', sentence: 'Chopped onions add aroma to dishes.' },
      { text: 'Garlic', emoji: '🧄', label: 'Garlic', pt: 'Alho', phonetic: '/ˈɡɑː.lɪk/', sentence: 'A clove of crushed garlic enhances flavor.' },
      { text: 'Pepper', emoji: '🌶️', label: 'Chili Pepper', pt: 'Pimenta', phonetic: '/ˈpep.ər/', sentence: 'Spicy chili pepper adds heat to recipes.' },
      { text: 'Cucumber', emoji: '🥒', label: 'Cucumber', pt: 'Pepino', phonetic: '/ˈkjuː.kʌm.bər/', sentence: 'Cool cucumber slices are very refreshing.' },
      { text: 'Mushroom', emoji: '🍄', label: 'Mushroom', pt: 'Cogumelo', phonetic: '/ˈmʌʃ.ruːm/', sentence: 'Sautéed mushrooms complement grilled dishes.' }
    ]
  },
  {
    phaseNumber: 27,
    title: 'Sobremesas & Doces Irresistíveis',
    subtitle: 'Bolo, sorvete, chocolate e cookies em cartões visuais',
    pedagogicalObjective: 'Aprender o vocabulário de sobremesas e confeitaria.',
    icon: 'cake',
    theory: [
      'Cake (/keɪk/) e Ice Cream (/ˈaɪs ˌkriːm/) são os favoritos em aniversários.',
      'Chocolate (/ˈtʃɒk.lət/) tem apenas duas sílabas faladas em inglês (\"chok-let\").',
      'Cookie (/ˈkʊk.i/) no inglês britânico é comumente chamado de \"biscuit\".'
    ],
    items: [
      { text: 'Cake', emoji: '🍰', label: 'Cake', pt: 'Bolo / Torta', phonetic: '/keɪk/', sentence: 'A slice of vanilla birthday cake.' },
      { text: 'Ice Cream', emoji: '🍦', label: 'Ice Cream', pt: 'Sorvete', phonetic: '/ˈaɪs ˌkriːm/', sentence: 'A double scoop of chocolate ice cream.' },
      { text: 'Donut', emoji: '🍩', label: 'Donut', pt: 'Rosquinha / Donut', phonetic: '/ˈdoʊ.nʌt/', sentence: 'Glazed donuts with colorful sprinkles.' },
      { text: 'Chocolate', emoji: '🍫', label: 'Chocolate', pt: 'Chocolate', phonetic: '/ˈtʃɒk.lət/', sentence: 'Dark chocolate melts smoothly on the tongue.' },
      { text: 'Candy', emoji: '🍬', label: 'Candy / Sweet', pt: 'Bala / Doce', phonetic: '/ˈkæn.di/', sentence: 'Fruity wrapped candy in assorted flavors.' },
      { text: 'Lollipop', emoji: '🍭', label: 'Lollipop', pt: 'Pirulito', phonetic: '/ˈlɒl.i.pɒp/', sentence: 'A swirl cherry lollipop on a plastic stick.' },
      { text: 'Pie', emoji: '🥧', label: 'Pie', pt: 'Torta doce', phonetic: '/paɪ/', sentence: 'Warm American apple pie with cinnamon.' },
      { text: 'Cupcake', emoji: '🧁', label: 'Cupcake', pt: 'Cupcake / Bolinho', phonetic: '/ˈkʌp.keɪk/', sentence: 'Mini cupcakes topped with strawberry frosting.' },
      { text: 'Honey', emoji: '🍯', label: 'Honey', pt: 'Mel de abelha', phonetic: '/ˈhʌn.i/', sentence: 'Pure golden honey drizzled over pancakes.' },
      { text: 'Pudding', emoji: '🍮', label: 'Pudding / Custard', pt: 'Pudim', phonetic: '/ˈpʊd.ɪŋ/', sentence: 'Creamy caramel pudding served chilled.' }
    ]
  },
  {
    phaseNumber: 28,
    title: 'Céu, Universo & Espaço Sideral',
    subtitle: 'Estrelas, planetas, foguetes e a Terra em imagens fascinantes',
    pedagogicalObjective: 'Explorar vocabulário astronômico e de exploração espacial.',
    icon: 'star',
    theory: [
      'Star (/stɑːr/) e Planet (/ˈplæn.ɪt/) iluminam o céu noturno.',
      'Earth (/ɜːθ/) é o nosso planeta natal, pronunciado com o som fonético \"th\" suave.',
      'Rocket (/ˈrɒk.ɪt/) e Astronaut (/ˈæs.trə.nɔːt/) lideram a exploração espacial.'
    ],
    items: [
      { text: 'Star', emoji: '⭐', label: 'Star', pt: 'Estrela', phonetic: '/stɑːr/', sentence: 'Distant stars twinkle brightly in the night sky.' },
      { text: 'Planet', emoji: '🪐', label: 'Planet (Saturn)', pt: 'Planeta com anéis', phonetic: '/ˈplæn.ɪt/', sentence: 'Saturn is a magnificent ringed planet.' },
      { text: 'Earth', emoji: '🌍', label: 'Earth', pt: 'Planeta Terra', phonetic: '/ɜːθ/', sentence: 'Planet Earth is our blue and green home.' },
      { text: 'Rocket', emoji: '🚀', label: 'Rocket', pt: 'Foguete espacial', phonetic: '/ˈrɒk.ɪt/', sentence: 'The powerful rocket launches toward orbit.' },
      { text: 'Astronaut', emoji: '👨‍🚀', label: 'Astronaut', pt: 'Astronauta', phonetic: '/ˈæs.trə.nɔːt/', sentence: 'Astronauts float weightlessly in space.' },
      { text: 'Sun', emoji: '☀️', label: 'Sun', pt: 'Sol / Estrela central', phonetic: '/sʌn/', sentence: 'The sun provides gravity and light to planets.' },
      { text: 'Moon', emoji: '🌙', label: 'Moon', pt: 'Lua', phonetic: '/muːn/', sentence: 'The moon orbits the Earth every month.' },
      { text: 'Comet', emoji: '☄️', label: 'Comet', pt: 'Cometa', phonetic: '/ˈkɒm.ɪt/', sentence: 'A glowing comet with an icy tail.' },
      { text: 'Telescope', emoji: '🔭', label: 'Telescope', pt: 'Telescópio', phonetic: '/ˈtel.ɪ.skoʊp/', sentence: 'Observe distant galaxies through an optical telescope.' },
      { text: 'Satellite', emoji: '🛰️', label: 'Satellite', pt: 'Satélite', phonetic: '/ˈsæt.əl.aɪt/', sentence: 'Communications satellites orbit high in space.' }
    ]
  },
  {
    phaseNumber: 29,
    title: 'Síntese Pré-Mundo 1: O Domínio das Palavras',
    subtitle: '13 desafios integrando vocabulário essencial de todas as áreas',
    pedagogicalObjective: 'Consolidar mais de 100 termos fundamentais antes da batalha final do vocabulário.',
    icon: 'target',
    theory: [
      'Você percorreu quase todas as categorias visuais fundamentais da língua inglesa!',
      'Nesta fase de síntese, avaliaremos sua agilidade em reconhecer alimentos, animais, objetos, ações e conceitos.',
      'Prepare-se com confiança para o grande Boss Final na Fase 30!'
    ],
    items: [
      { text: 'Apple', emoji: '🍎', label: 'Apple', pt: 'Maçã', phonetic: '/ˈæp.əl/', sentence: 'A crunchy red apple.' },
      { text: 'Dog', emoji: '🐶', label: 'Dog', pt: 'Cachorro', phonetic: '/dɒɡ/', sentence: 'A friendly dog.' },
      { text: 'Car', emoji: '🚗', label: 'Car', pt: 'Carro', phonetic: '/kɑːr/', sentence: 'A fast motor car.' },
      { text: 'Water', emoji: '💧', label: 'Water', pt: 'Água', phonetic: '/ˈwɔː.tər/', sentence: 'Pure drinking water.' },
      { text: 'Book', emoji: '📚', label: 'Book', pt: 'Livro', phonetic: '/bʊk/', sentence: 'An educational book.' },
      { text: 'Bed', emoji: '🛏️', label: 'Bed', pt: 'Cama', phonetic: '/bed/', sentence: 'A comfortable bed.' },
      { text: 'Phone', emoji: '📱', label: 'Phone', pt: 'Telefone', phonetic: '/foʊn/', sentence: 'A smart touch phone.' },
      { text: 'Sun', emoji: '☀️', label: 'Sun', pt: 'Sol', phonetic: '/sʌn/', sentence: 'The radiant sun.' },
      { text: 'Run', emoji: '🏃', label: 'Run', pt: 'Correr', phonetic: '/rʌn/', sentence: 'To run with energy.' },
      { text: 'Doctor', emoji: '👨‍⚕️', label: 'Doctor', pt: 'Médico', phonetic: '/ˈdɒk.tər/', sentence: 'A helpful doctor.' },
      { text: 'Star', emoji: '⭐', label: 'Star', pt: 'Estrela', phonetic: '/stɑːr/', sentence: 'A brilliant star.' },
      { text: 'Happy', emoji: '😊', label: 'Happy', pt: 'Feliz', phonetic: '/ˈhæp.i/', sentence: 'Feeling joyful and happy.' },
      { text: 'Pizza', emoji: '🍕', label: 'Pizza', pt: 'Pizza', phonetic: '/ˈpiːt.sə/', sentence: 'A tasty pizza slice.' }
    ]
  },
  {
    phaseNumber: 30,
    type: 'boss',
    title: '👑 BOSS FINAL DO VOCABULÁRIO: O Guardião Visual',
    subtitle: '16 desafios épicos com imagens integrando todo o Módulo 0',
    pedagogicalObjective: 'Provar maestria total sobre o vocabulário inicial visual e desbloquear o Mundo 1!',
    icon: 'swords',
    theory: [
      'Chegou a hora do confronto supremo com o Guardião Visual das Palavras!',
      'Você enfrentará 16 desafios integrando alimentos, animais, transportes, emoções, profissões, tecnologia e astronomia.',
      'Mantenha o foco: cada resposta correta confirma a tradução imediata e concede o troféu máximo do Módulo 0!'
    ],
    items: [
      { text: 'Apple', emoji: '🍎', label: 'Apple', pt: 'Maçã', phonetic: '/ˈæp.əl/', sentence: 'A red apple symbol of knowledge.' },
      { text: 'Dog', emoji: '🐶', label: 'Dog', pt: 'Cachorro', phonetic: '/dɒɡ/', sentence: 'Man’s best friend, the dog.' },
      { text: 'Cat', emoji: '🐱', label: 'Cat', pt: 'Gato', phonetic: '/kæt/', sentence: 'A curious and agile cat.' },
      { text: 'Water', emoji: '💧', label: 'Water', pt: 'Água', phonetic: '/ˈwɔː.tər/', sentence: 'Life-giving pure water.' },
      { text: 'Car', emoji: '🚗', label: 'Car', pt: 'Carro', phonetic: '/kɑːr/', sentence: 'An automobile vehicle.' },
      { text: 'Blue', emoji: '🔵', label: 'Blue', pt: 'Azul', phonetic: '/bluː/', sentence: 'The color of ocean and sky.' },
      { text: 'House', emoji: '🏠', label: 'House', pt: 'Casa', phonetic: '/haʊs/', sentence: 'A welcoming family home.' },
      { text: 'Bread', emoji: '🍞', label: 'Bread', pt: 'Pão', phonetic: '/bred/', sentence: 'Fresh loaf of bread.' },
      { text: 'Computer', emoji: '💻', label: 'Computer', pt: 'Computador', phonetic: '/kəmˈpjuː.tər/', sentence: 'A digital computing device.' },
      { text: 'Tree', emoji: '🌲', label: 'Tree', pt: 'Árvore', phonetic: '/triː/', sentence: 'A strong evergreen tree.' },
      { text: 'Sun', emoji: '☀️', label: 'Sun', pt: 'Sol', phonetic: '/sʌn/', sentence: 'The daylight sun.' },
      { text: 'Happy', emoji: '😊', label: 'Happy', pt: 'Feliz', phonetic: '/ˈhæp.i/', sentence: 'Smiling and truly happy.' },
      { text: 'Book', emoji: '📚', label: 'Book', pt: 'Livro', phonetic: '/bʊk/', sentence: 'A gateway of imagination.' },
      { text: 'Doctor', emoji: '👨‍⚕️', label: 'Doctor', pt: 'Médico', phonetic: '/ˈdɒk.tər/', sentence: 'A certified medical doctor.' },
      { text: 'Soccer', emoji: '⚽', label: 'Soccer', pt: 'Futebol', phonetic: '/ˈsɒk.ər/', sentence: 'The world’s favorite sport.' },
      { text: 'Rocket', emoji: '🚀', label: 'Rocket', pt: 'Foguete', phonetic: '/ˈrɒk.ɪt/', sentence: 'A rocket reaching the stars.' }
    ]
  }
];

// Helper to pick 3 distractors from the current theme (or all items)
function getDistractors(correctItem, allItems, pool) {
  const distractors = [];
  const candidates = [...allItems.filter(i => i.text !== correctItem.text), ...pool.filter(i => i.text !== correctItem.text)];
  
  for (const c of candidates) {
    if (!distractors.some(d => d.text === c.text) && c.text !== correctItem.text) {
      distractors.push(c);
      if (distractors.length === 3) break;
    }
  }
  return distractors;
}

// Generate the complete phases array
const phases = THEMES.map((theme) => {
  const isBoss = theme.type === 'boss';
  const isChest = theme.type === 'chest';
  const phaseId = `w0-p${theme.phaseNumber}`;

  // All items across all themes for robust distractors
  const globalPool = THEMES.flatMap(t => t.items);

  const exercises = theme.items.map((item, idx) => {
    const distractors = getDistractors(item, theme.items, globalPool);
    const optionsList = [item, ...distractors].sort(() => 0.5 - Math.random());

    const visualOptions = optionsList.map(opt => ({
      text: opt.text,
      emoji: opt.emoji,
      label: opt.label,
      translationPt: opt.pt
    }));

    // Varied engaging pedagogical prompts
    let prompt = `Qual imagem representa "${item.text}"?`;
    let category = 'vocabulary';

    if (idx % 3 === 0) {
      prompt = `Qual imagem representa "${item.text}"?`;
      category = 'vocabulary';
    } else if (idx % 3 === 1) {
      prompt = `Qual imagem representa "${item.pt}" em inglês?`;
      category = 'reading';
    } else {
      prompt = `🎧 Ouça a pronúncia e selecione a imagem correspondente:`;
      category = 'listening';
    }

    return {
      id: `${phaseId}-e${idx + 1}`,
      type: 'image-choice',
      prompt: prompt,
      audioPhrase: item.text,
      visualEmoji: item.emoji,
      visualOptions: visualOptions,
      options: visualOptions.map(v => v.text),
      correctAnswer: item.text,
      explanation: `Exemplo prático: "${item.sentence}"`,
      phoneticHint: item.phonetic,
      skillCategory: category
    };
  });

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
    xpReward: isBoss ? 60 : isChest ? 40 : 30,
    gemsReward: isBoss ? 25 : isChest ? 20 : 10,
    exercises: exercises
  };
});

// Output code to src/data/world0Phases.ts
const fileContent = `import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

fs.writeFileSync('src/data/world0Phases.ts', fileContent, 'utf-8');
console.log('Successfully generated src/data/world0Phases.ts!');
console.log('Total phases in World 0:', phases.length);
console.log('Total exercises in World 0:', phases.reduce((acc, p) => acc + p.exercises.length, 0));
