// Generator for World 2 (A1+/A2: Construindo Frases)
// 30 phases, 8-10 exercises each, 11 on chest, 15 on boss
const fs = require('fs');

const w2PhasesDef = [
  {
    num: 1, title: 'O Poderoso Verbo TO BE em Ação', subtitle: 'Afirmativas, contrações e descrições',
    obj: 'Consolidar o verbo To Be em contextos descritivos reais.',
    type: 'lesson', icon: 'book',
    theory: [
      'O verbo TO BE significa "ser" ou "estar": I am, You are, He/She/It is, We/They are.',
      'Contrações no dia a dia: I\'m, You\'re, He\'s, She\'s, It\'s, We\'re, They\'re.',
      'Usamos To Be para profissões, sentimentos, origens, locais e características físicas.'
    ],
    items: [
      { type: 'multiple-choice', visualEmoji: '👨‍🏫', prompt: 'Como se diz "Ele é um professor dedicado"?', options: ['He is a dedicated teacher.', 'He are a dedicated teacher.', 'He am a dedicated teacher.', 'He have a dedicated teacher.'], ans: 'He is a dedicated teacher.', exp: 'Com "He", usamos "is".' },
      { type: 'word-order', prompt: 'Monte a frase afirmativa:', options: ['ready', 'for', 'are', 'We', 'dinner.'], ans: 'We are ready for dinner.', exp: '"We are ready for dinner." = "Nós estamos prontos para o jantar.".' },
      { type: 'listening', prompt: 'Ouça o áudio da descrição:', audio: 'They are very happy with their new house.', options: ['They are very happy with their new house.', 'We are very happy with our new car.', 'They are very tired from the long trip.', 'She is very happy with her new job.'], ans: 'They are very happy with their new house.', exp: '"They are very happy with their new house."' },
      { type: 'fill-blank', visualEmoji: '🏥', prompt: 'Complete: "My mother _____ a doctor at the city hospital."', options: ['is', 'are', 'am', 'be'], ans: 'is', exp: 'My mother (She) -> is.' },
      { type: 'translate', prompt: 'Traduza: "Eu estou cansado hoje."', options: ['I am tired today.', 'I have tired today.', 'I am tire today.', 'I do tired today.'], ans: 'I am tired today.', exp: 'I am tired today.' },
      { type: 'multiple-choice', visualEmoji: '🏙️', prompt: 'Qual é a frase correta para "Nós estamos em Nova York"?', options: ['We are in New York.', 'We is in New York.', 'We am in New York.', 'We be in New York.'], ans: 'We are in New York.', exp: 'We are in New York.' },
      { type: 'word-order', prompt: 'Organize a contração com adjetivo:', options: ['excited', 'the', 'party.', 'about', 'They\'re'], ans: 'They\'re excited about the party.', exp: '"They\'re excited about the party."' },
      { type: 'listening', prompt: 'Ouça e selecione a frase ouvida:', audio: 'She is my best friend since childhood.', options: ['She is my best friend since childhood.', 'He is my best friend from school.', 'They are our friends from work.', 'She is a good student in college.'], ans: 'She is my best friend since childhood.', exp: 'She is my best friend since childhood.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I am happy to be here"', audio: 'I am happy to be here', ans: 'I am happy to be here', hint: '/aɪ æm ˈhæp.i tuː biː hɪr/', exp: 'Excelente fluência e clareza!' },
      { type: 'multiple-choice', prompt: 'Qual forma é uma contração INCORRETA do verbo To Be?', options: ['They\'m', 'I\'m', 'You\'re', 'She\'s'], ans: 'They\'m', exp: '"They\'m" não existe; o correto é "They\'re".' }
    ]
  },
  {
    num: 2, title: 'Pronomes Objeto (Object Pronouns)', subtitle: 'Me, you, him, her, it, us, them',
    obj: 'Substituir pessoas e coisas que recebem a ação do verbo.',
    type: 'lesson', icon: 'user-check',
    theory: [
      'Pronomes sujeitos fazem a ação (I, You, He, She, It, We, They).',
      'Pronomes objetos RECEBEM a ação e vêm após o verbo ou preposição: me, you, him, her, it, us, them.',
      'Exemplo: "She loves HIM" (não "She loves he"); "Listen to ME" (não "Listen to I").'
    ],
    items: [
      { type: 'multiple-choice', visualEmoji: '📞', prompt: 'Como se diz "Ligue para mim amanhã"?', options: ['Call me tomorrow.', 'Call I tomorrow.', 'Call my tomorrow.', 'Call mine tomorrow.'], ans: 'Call me tomorrow.', exp: 'Após verbos usamos o pronome objeto "me" ("Call me").' },
      { type: 'fill-blank', prompt: 'Complete: "I see Peter every day. I really like _____."', options: ['him', 'he', 'his', 'himself'], ans: 'him', exp: 'Peter é masculino singular recebendo a ação -> "him".' },
      { type: 'word-order', prompt: 'Monte a frase com pronome objeto:', options: ['give', 'Can', 'book?', 'you', 'me', 'that'], ans: 'Can you give me that book?', exp: '"Can you give me that book?" = "Você pode me dar aquele livro?".' },
      { type: 'listening', prompt: 'Ouça a frase com pronome objeto:', audio: 'Please listen to us carefully.', options: ['Please listen to us carefully.', 'Please listen to me carefully.', 'Please talk to them carefully.', 'Please call us immediately.'], ans: 'Please listen to us carefully.', exp: '"to us" = para nós / nos.' },
      { type: 'translate', prompt: 'Traduza: "Ela conhece eles."', options: ['She knows them.', 'She knows they.', 'She knows their.', 'She knows him.'], ans: 'She knows them.', exp: 'Eles como objeto = "them".' },
      { type: 'multiple-choice', visualEmoji: '🎁', prompt: '"This present is for _____." (para ela)', options: ['her', 'she', 'hers', 'her sister'], ans: 'her', exp: 'Após preposição ("for") usamos pronome objeto: "her".' },
      { type: 'word-order', prompt: 'Ordene a pergunta educada:', options: ['help', 'Can', 'today?', 'you', 'them'], ans: 'Can you help them today?', exp: '"Can you help them today?" = "Você pode ajudá-los hoje?".' },
      { type: 'listening', prompt: 'Ouça o conselho:', audio: 'Don\'t tell him the secret yet.', options: ['Don\'t tell him the secret yet.', 'Don\'t tell her the story yet.', 'Don\'t ask him any questions.', 'Tell them the good news now.'], ans: 'Don\'t tell him the secret yet.', exp: '"Don\'t tell him" = não conte a ele.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Look at me"', audio: 'Look at me', ans: 'Look at me', hint: '/lʊk æt miː/', exp: 'Perfeito! "Look at me" = "Olhe para mim".' },
      { type: 'multiple-choice', prompt: 'Qual frase está gramaticalmente correta?', options: ['Invite us to the party.', 'Invite we to the party.', 'Invite our to the party.', 'Invite ours to the party.'], ans: 'Invite us to the party.', exp: 'Objeto de "we" é "us".' }
    ]
  },
  {
    num: 3, title: 'Adjetivos Possessivos', subtitle: 'My, your, his, her, its, our, their',
    obj: 'Indicar posse antes de substantivos de maneira clara.',
    type: 'lesson', icon: 'key',
    theory: [
      'Adjetivos possessivos SEMPRE acompanham um substantivo: my car, your house, his dog, her bag, our school, their books.',
      '"His" é dele (homem); "Her" é dela (mulher); "Its" é neutro (de animal/coisa).',
      'Nunca use artigo antes do possessivo em inglês: diga "my friend", e JAMAIS "the my friend".'
    ],
    items: [
      { type: 'multiple-choice', visualEmoji: '🚗', prompt: 'Como se diz "O carro dele é azul"?', options: ['His car is blue.', 'He car is blue.', 'The his car is blue.', 'Him car is blue.'], ans: 'His car is blue.', exp: '"His" = dele. Nunca usamos "the his car".' },
      { type: 'fill-blank', visualEmoji: '👜', prompt: 'Complete: "Sarah forgot _____ bag at the restaurant."', options: ['her', 'his', 'its', 'their'], ans: 'her', exp: 'Sarah é feminino -> "her bag" (a bolsa dela).' },
      { type: 'word-order', prompt: 'Monte a frase com possessivo:', options: ['clean', 'bedroom', 'is', 'Our', 'spacious.', 'and'], ans: 'Our bedroom is clean and spacious.', exp: '"Our bedroom is clean and spacious." = "Nosso quarto é limpo e espaçoso.".' },
      { type: 'listening', prompt: 'Ouça a frase com possessivo:', audio: 'Their parents are traveling to London.', options: ['Their parents are traveling to London.', 'Our parents are traveling to London.', 'His parents are traveling to Paris.', 'Her parents are living in London.'], ans: 'Their parents are traveling to London.', exp: '"Their parents" = os pais deles.' },
      { type: 'translate', prompt: 'Traduza: "Qual é o seu número de telefone?"', options: ['What is your phone number?', 'What is you phone number?', 'What is the your phone number?', 'Where is your phone number?'], ans: 'What is your phone number?', exp: 'What is your phone number?' },
      { type: 'multiple-choice', visualEmoji: '🐶', prompt: 'Para um cachorro: "O cachorro está abanando _____ rabo."', options: ['its', 'his', 'her', 'it\'s'], ans: 'its', exp: '"Its" sem apóstrofo é o possessivo neutro. "It\'s" com apóstrofo significa "it is".' },
      { type: 'word-order', prompt: 'Organize a frase possessiva:', options: ['house', 'very', 'big.', 'Their', 'is'], ans: 'Their house is very big.', exp: '"Their house is very big."' },
      { type: 'listening', prompt: 'Ouça o possessivo familiar:', audio: 'My brother loves his new bicycle.', options: ['My brother loves his new bicycle.', 'My brother wants a new bicycle.', 'My sister loves her new bicycle.', 'Our brother rides his new bicycle.'], ans: 'My brother loves his new bicycle.', exp: '"his new bicycle" = a bicicleta nova dele.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "This is my house"', audio: 'This is my house', ans: 'This is my house', hint: '/ðɪs ɪz maɪ haʊs/', exp: 'Muito bem! "Esta é a minha casa".' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um erro comum cometido por brasileiros?', options: ['The my car is outside.', 'My car is outside.', 'His brother is here.', 'Our house is small.'], ans: 'The my car is outside.', exp: 'Em inglês NÃO se usa "The my...". Diz-se apenas "My car is outside".' }
    ]
  },
  {
    num: 4, title: 'Pronomes Possessivos', subtitle: 'Mine, yours, his, hers, ours, theirs',
    obj: 'Substituir o substantivo evitando repetições desnecessárias.',
    type: 'lesson', icon: 'shield',
    theory: [
      'Ao contrário dos adjetivos possessivos (my car), os pronomes possessivos substituem o substantivo: mine, yours, his, hers, ours, theirs.',
      'Exemplo: "This car is MINE" (Este carro é meu); "That jacket is HERS" (Aquela jaqueta é dela).',
      'Eles nunca vêm seguidos de um substantivo!'
    ],
    items: [
      { type: 'multiple-choice', visualEmoji: '📱', prompt: '"This phone is not mine. Is it _____?" (seu)', options: ['yours', 'your', 'you', 'yourse'], ans: 'yours', exp: 'Sozinho no final substituindo o substantivo -> "yours".' },
      { type: 'fill-blank', prompt: 'Complete: "That house is theirs, and this one is _____." (nossa)', options: ['ours', 'our', 'we', 'us'], ans: 'ours', exp: '"Ours" = nossa/nosso (pronome possessivo).' },
      { type: 'word-order', prompt: 'Monte a frase comparando possessões:', options: ['is', 'mine,', 'car', 'hers.', 'This', 'that', 'is'], ans: 'This car is mine, that is hers.', exp: '"This car is mine, that is hers."' },
      { type: 'listening', prompt: 'Ouça e selecione o pronome possessivo ouvida:', audio: 'The decision is completely yours.', options: ['The decision is completely yours.', 'The decision is completely ours.', 'The decision is completely mine.', 'The decision is completely theirs.'], ans: 'The decision is completely yours.', exp: '"completely yours" = completamente sua.' },
      { type: 'translate', prompt: 'Traduza: "Aquele livro é meu."', options: ['That book is mine.', 'That book is my.', 'That book is of me.', 'That book is mine book.'], ans: 'That book is mine.', exp: 'Mine = meu/minha no final.' },
      { type: 'multiple-choice', prompt: '"Her coat is red, but _____ is black." (o dele)', options: ['his', 'he', 'him', 'hises'], ans: 'his', exp: 'O pronome possessivo para masculino singular é "his".' },
      { type: 'word-order', prompt: 'Organize a pergunta de posse:', options: ['book', 'Whose', 'this?', 'is'], ans: 'Whose book is this?', exp: '"Whose" = De quem.' },
      { type: 'listening', prompt: 'Ouça a resposta sobre posse:', audio: 'Don\'t touch that, it is hers.', options: ['Don\'t touch that, it is hers.', 'Don\'t touch that, it is his.', 'Don\'t touch that, it is ours.', 'Don\'t touch that, it is mine.'], ans: 'Don\'t touch that, it is hers.', exp: '"it is hers" = é dela.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "It is mine!"', audio: 'It is mine', ans: 'It is mine', hint: '/ɪt ɪz maɪn/', exp: 'Perfeito! "É meu/minha!".' },
      { type: 'multiple-choice', prompt: 'Qual frase está gramaticalmente CORRETA?', options: ['The red suitcase is hers.', 'The red suitcase is her.', 'The red suitcase is she.', 'The red suitcase is of her.'], ans: 'The red suitcase is hers.', exp: '"hers" substitui "her suitcase".' }
    ]
  },
  {
    num: 5, title: 'Demonstrativos: Perto e Longe', subtitle: 'This, That, These, Those',
    obj: 'Apontar objetos e pessoas no singular e plural considerando distância.',
    type: 'lesson', icon: 'compass',
    theory: [
      'Perto de você: THIS (singular: este/esta/isto) e THESE (plural: estes/estas).',
      'Longe de você: THAT (singular: aquele/aquela/aquilo) e THOSE (plural: aqueles/aquelas).',
      'Atenção à pronúncia: "This" (/ðɪs/ com som de i curto) vs "These" (/ðiːz/ com som de i longo e z no final).'
    ],
    items: [
      { type: 'multiple-choice', visualEmoji: '👉', prompt: 'Para um objeto perto de você no singular ("este livro"):', options: ['This book', 'That book', 'These book', 'Those book'], ans: 'This book', exp: 'Perto e singular = THIS.' },
      { type: 'fill-blank', visualEmoji: '👉👉', prompt: 'Para vários objetos perto de você no plural: "_____ are my keys."', options: ['These', 'This', 'That', 'Those'], ans: 'These', exp: 'Perto e plural = THESE.' },
      { type: 'word-order', prompt: 'Monte a frase apontando para algo distante:', options: ['is', 'house', 'That', 'expensive.', 'very'], ans: 'That house is very expensive.', exp: '"That house is very expensive."' },
      { type: 'listening', prompt: 'Ouça o pronome demonstrativo:', audio: 'Look at those beautiful stars in the sky.', options: ['Look at those beautiful stars in the sky.', 'Look at these beautiful flowers in the vase.', 'Look at that bright star in the sky.', 'Look at this amazing sunset outside.'], ans: 'Look at those beautiful stars in the sky.', exp: '"Those" = aquelas (longe e plural).' },
      { type: 'translate', prompt: 'Traduza: "Quem é aquela mulher lá longe?"', options: ['Who is that woman over there?', 'Who is this woman over there?', 'Who are those woman over there?', 'Who is these woman over there?'], ans: 'Who is that woman over there?', exp: 'That woman = aquela mulher.' },
      { type: 'multiple-choice', prompt: 'Qual par representa o plural de "THIS" e "THAT"?', options: ['These and Those', 'Thises and Thats', 'Theses and Those', 'Those and These'], ans: 'These and Those', exp: 'This -> These; That -> Those.' },
      { type: 'word-order', prompt: 'Organize a pergunta com demonstrativo plural:', options: ['yours?', 'Are', 'shoes', 'these'], ans: 'Are these shoes yours?', exp: '"Are these shoes yours?" = "Estes sapatos são seus?".' },
      { type: 'listening', prompt: 'Ouça a frase de compra:', audio: 'How much are these apples?', options: ['How much are these apples?', 'How much is this apple?', 'How much are those oranges?', 'How much is that banana?'], ans: 'How much are these apples?', exp: '"these apples" = estas maçãs.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I like this one"', audio: 'I like this one', ans: 'I like this one', hint: '/aɪ laɪk ðɪs wʌn/', exp: 'Muito bem! "Eu gosto deste aqui".' },
      { type: 'multiple-choice', prompt: 'Como dizer "Aqueles carros são rápidos"?', options: ['Those cars are fast.', 'That cars are fast.', 'These cars are fast.', 'This cars are fast.'], ans: 'Those cars are fast.', exp: 'Those cars = aqueles carros.' }
    ]
  }
];

console.log('World 2 definitions part 1 loaded');
