// Full Generator for World 2: 30 phases, 8-10 exercises each (11 on chest, 15 on boss)
const fs = require('fs');

// We define the rich curriculum for all 30 phases of World 2 (A1+/A2: Construindo Frases)
const w2Profiles = [
  // 1
  {
    num: 1, title: 'O Poderoso Verbo TO BE em Ação', subtitle: 'Afirmativas, contrações e descrições',
    obj: 'Consolidar o verbo To Be em contextos descritivos reais.',
    type: 'lesson', icon: 'book',
    theory: ['O verbo TO BE significa "ser" ou "estar": I am, You are, He/She/It is, We/They are.', 'Contrações cotidianas: I\'m, You\'re, He\'s, She\'s, It\'s, We\'re, They\'re.', 'Usamos To Be para profissões, sentimentos, origens e locais.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '👨‍🏫', prompt: 'Como se diz "Ele é um professor dedicado"?', options: ['He is a dedicated teacher.', 'He are a dedicated teacher.', 'He am a dedicated teacher.', 'He have a dedicated teacher.'], ans: 'He is a dedicated teacher.', exp: 'Com "He", usamos "is".' },
      { type: 'word-order', prompt: 'Monte a frase afirmativa:', options: ['ready', 'for', 'are', 'We', 'dinner.'], ans: 'We are ready for dinner.', exp: '"We are ready for dinner."' },
      { type: 'listening', prompt: 'Ouça o áudio da descrição:', audio: 'They are very happy with their new house.', options: ['They are very happy with their new house.', 'We are very happy with our new car.', 'They are very tired from the long trip.', 'She is very happy with her new job.'], ans: 'They are very happy with their new house.', exp: 'They are very happy with their new house.' },
      { type: 'fill-blank', visualEmoji: '🏥', prompt: 'Complete: "My mother _____ a doctor at the city hospital."', options: ['is', 'are', 'am', 'be'], ans: 'is', exp: 'My mother (She) -> is.' },
      { type: 'translate', prompt: 'Traduza: "Eu estou cansado hoje."', options: ['I am tired today.', 'I have tired today.', 'I am tire today.', 'I do tired today.'], ans: 'I am tired today.', exp: 'I am tired today.' },
      { type: 'multiple-choice', visualEmoji: '🏙️', prompt: 'Qual é a frase correta para "Nós estamos em Nova York"?', options: ['We are in New York.', 'We is in New York.', 'We am in New York.', 'We be in New York.'], ans: 'We are in New York.', exp: 'We are in New York.' },
      { type: 'word-order', prompt: 'Organize a contração com adjetivo:', options: ['excited', 'the', 'party.', 'about', 'They\'re'], ans: 'They\'re excited about the party.', exp: '"They\'re excited about the party."' },
      { type: 'listening', prompt: 'Ouça e selecione a frase ouvida:', audio: 'She is my best friend since childhood.', options: ['She is my best friend since childhood.', 'He is my best friend from school.', 'They are our friends from work.', 'She is a good student in college.'], ans: 'She is my best friend since childhood.', exp: 'She is my best friend since childhood.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I am happy to be here"', audio: 'I am happy to be here', ans: 'I am happy to be here', hint: '/aɪ æm ˈhæp.i tuː biː hɪr/', exp: 'Excelente fluência e clareza!' },
      { type: 'multiple-choice', prompt: 'Qual forma é uma contração INCORRETA do verbo To Be?', options: ['They\'m', 'I\'m', 'You\'re', 'She\'s'], ans: 'They\'m', exp: '"They\'m" não existe; o correto é "They\'re".' }
    ]
  },
  // 2
  {
    num: 2, title: 'Pronomes Objeto (Object Pronouns)', subtitle: 'Me, you, him, her, it, us, them',
    obj: 'Substituir pessoas e coisas que recebem a ação do verbo.',
    type: 'lesson', icon: 'user-check',
    theory: ['Pronomes objetos recebem a ação e vêm após verbos ou preposições: me, you, him, her, it, us, them.', 'Exemplo: "Call me", "Look at him", "Listen to us".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '📞', prompt: 'Como se diz "Ligue para mim amanhã"?', options: ['Call me tomorrow.', 'Call I tomorrow.', 'Call my tomorrow.', 'Call mine tomorrow.'], ans: 'Call me tomorrow.', exp: 'Após verbos usamos "me".' },
      { type: 'fill-blank', prompt: 'Complete: "I see Peter every day. I really like _____."', options: ['him', 'he', 'his', 'himself'], ans: 'him', exp: 'Peter (masculino objeto) -> him.' },
      { type: 'word-order', prompt: 'Monte a frase com pronome objeto:', options: ['give', 'Can', 'book?', 'you', 'me', 'that'], ans: 'Can you give me that book?', exp: 'Can you give me that book?' },
      { type: 'listening', prompt: 'Ouça a frase com pronome objeto:', audio: 'Please listen to us carefully.', options: ['Please listen to us carefully.', 'Please listen to me carefully.', 'Please talk to them carefully.', 'Please call us immediately.'], ans: 'Please listen to us carefully.', exp: 'to us = para nós.' },
      { type: 'translate', prompt: 'Traduza: "Ela conhece eles."', options: ['She knows them.', 'She knows they.', 'She knows their.', 'She knows him.'], ans: 'She knows them.', exp: 'Eles como objeto = them.' },
      { type: 'multiple-choice', visualEmoji: '🎁', prompt: '"This present is for _____." (para ela)', options: ['her', 'she', 'hers', 'her sister'], ans: 'her', exp: 'Após "for" usamos her.' },
      { type: 'word-order', prompt: 'Ordene a pergunta educada:', options: ['help', 'Can', 'today?', 'you', 'them'], ans: 'Can you help them today?', exp: 'Can you help them today?' },
      { type: 'listening', prompt: 'Ouça o conselho:', audio: 'Don\'t tell him the secret yet.', options: ['Don\'t tell him the secret yet.', 'Don\'t tell her the story yet.', 'Don\'t ask him any questions.', 'Tell them the good news now.'], ans: 'Don\'t tell him the secret yet.', exp: 'Don\'t tell him = não conte a ele.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Look at me"', audio: 'Look at me', ans: 'Look at me', hint: '/lʊk æt miː/', exp: 'Perfeito! "Look at me" = "Olhe para mim".' },
      { type: 'multiple-choice', prompt: 'Qual frase está gramaticalmente correta?', options: ['Invite us to the party.', 'Invite we to the party.', 'Invite our to the party.', 'Invite ours to the party.'], ans: 'Invite us to the party.', exp: 'Objeto de "we" é "us".' }
    ]
  },
  // 3
  {
    num: 3, title: 'Adjetivos Possessivos', subtitle: 'My, your, his, her, its, our, their',
    obj: 'Indicar posse antes de substantivos de maneira clara.',
    type: 'lesson', icon: 'key',
    theory: ['Acompanham substantivos: my car, your house, his dog, her bag, our school, their books.', 'Nunca use artigo antes do possessivo: "my friend", JAMAIS "the my friend".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🚗', prompt: 'Como se diz "O carro dele é azul"?', options: ['His car is blue.', 'He car is blue.', 'The his car is blue.', 'Him car is blue.'], ans: 'His car is blue.', exp: 'His car is blue.' },
      { type: 'fill-blank', visualEmoji: '👜', prompt: 'Complete: "Sarah forgot _____ bag at the restaurant."', options: ['her', 'his', 'its', 'their'], ans: 'her', exp: 'Sarah (feminino) -> her bag.' },
      { type: 'word-order', prompt: 'Monte a frase com possessivo:', options: ['clean', 'bedroom', 'is', 'Our', 'spacious.', 'and'], ans: 'Our bedroom is clean and spacious.', exp: 'Our bedroom is clean and spacious.' },
      { type: 'listening', prompt: 'Ouça a frase com possessivo:', audio: 'Their parents are traveling to London.', options: ['Their parents are traveling to London.', 'Our parents are traveling to London.', 'His parents are traveling to Paris.', 'Her parents are living in London.'], ans: 'Their parents are traveling to London.', exp: 'Their parents = os pais deles.' },
      { type: 'translate', prompt: 'Traduza: "Qual é o seu número de telefone?"', options: ['What is your phone number?', 'What is you phone number?', 'What is the your phone number?', 'Where is your phone number?'], ans: 'What is your phone number?', exp: 'What is your phone number?' },
      { type: 'multiple-choice', visualEmoji: '🐶', prompt: 'Para um cachorro: "O cachorro está abanando _____ rabo."', options: ['its', 'his', 'her', 'it\'s'], ans: 'its', exp: 'Its sem apóstrofo é o possessivo.' },
      { type: 'word-order', prompt: 'Organize a frase possessiva:', options: ['house', 'very', 'big.', 'Their', 'is'], ans: 'Their house is very big.', exp: 'Their house is very big.' },
      { type: 'listening', prompt: 'Ouça o possessivo familiar:', audio: 'My brother loves his new bicycle.', options: ['My brother loves his new bicycle.', 'My brother wants a new bicycle.', 'My sister loves her new bicycle.', 'Our brother rides his new bicycle.'], ans: 'My brother loves his new bicycle.', exp: 'his new bicycle.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "This is my house"', audio: 'This is my house', ans: 'This is my house', hint: '/ðɪs ɪz maɪ haʊs/', exp: 'Esta é a minha casa.' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um erro comum?', options: ['The my car is outside.', 'My car is outside.', 'His brother is here.', 'Our house is small.'], ans: 'The my car is outside.', exp: 'Nunca use "The my...".' }
    ]
  },
  // 4
  {
    num: 4, title: 'Pronomes Possessivos', subtitle: 'Mine, yours, his, hers, ours, theirs',
    obj: 'Substituir o substantivo evitando repetições.',
    type: 'lesson', icon: 'shield',
    theory: ['Substituem o substantivo: mine, yours, his, hers, ours, theirs.', '"This car is MINE", "That jacket is HERS".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '📱', prompt: '"This phone is not mine. Is it _____?" (seu)', options: ['yours', 'your', 'you', 'yourse'], ans: 'yours', exp: 'Substituindo substantivo -> yours.' },
      { type: 'fill-blank', prompt: 'Complete: "That house is theirs, and this one is _____." (nossa)', options: ['ours', 'our', 'we', 'us'], ans: 'ours', exp: 'Ours = nossa/nosso.' },
      { type: 'word-order', prompt: 'Monte a frase comparando possessões:', options: ['is', 'mine,', 'car', 'hers.', 'This', 'that', 'is'], ans: 'This car is mine, that is hers.', exp: 'This car is mine, that is hers.' },
      { type: 'listening', prompt: 'Ouça e selecione a frase ouvida:', audio: 'The decision is completely yours.', options: ['The decision is completely yours.', 'The decision is completely ours.', 'The decision is completely mine.', 'The decision is completely theirs.'], ans: 'The decision is completely yours.', exp: 'completely yours.' },
      { type: 'translate', prompt: 'Traduza: "Aquele livro é meu."', options: ['That book is mine.', 'That book is my.', 'That book is of me.', 'That book is mine book.'], ans: 'That book is mine.', exp: 'Mine = meu/minha.' },
      { type: 'multiple-choice', prompt: '"Her coat is red, but _____ is black." (o dele)', options: ['his', 'he', 'him', 'hises'], ans: 'his', exp: 'Possessivo masculino = his.' },
      { type: 'word-order', prompt: 'Organize a pergunta de posse:', options: ['book', 'Whose', 'this?', 'is'], ans: 'Whose book is this?', exp: 'Whose = de quem.' },
      { type: 'listening', prompt: 'Ouça a resposta sobre posse:', audio: 'Don\'t touch that, it is hers.', options: ['Don\'t touch that, it is hers.', 'Don\'t touch that, it is his.', 'Don\'t touch that, it is ours.', 'Don\'t touch that, it is mine.'], ans: 'Don\'t touch that, it is hers.', exp: 'it is hers.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "It is mine!"', audio: 'It is mine', ans: 'It is mine', hint: '/ɪt ɪz maɪn/', exp: 'Perfeito! "É meu/minha!".' },
      { type: 'multiple-choice', prompt: 'Qual frase está correta?', options: ['The red suitcase is hers.', 'The red suitcase is her.', 'The red suitcase is she.', 'The red suitcase is of her.'], ans: 'The red suitcase is hers.', exp: 'The red suitcase is hers.' }
    ]
  },
  // 5
  {
    num: 5, title: 'Demonstrativos: Perto e Longe', subtitle: 'This, That, These, Those',
    obj: 'Apontar objetos e pessoas considerando distância e quantidade.',
    type: 'lesson', icon: 'compass',
    theory: ['Perto: THIS (singular) e THESE (plural). Longe: THAT (singular) e THOSE (plural).'],
    items: [
      { type: 'multiple-choice', visualEmoji: '👉', prompt: 'Para um objeto perto de você no singular ("este livro"):', options: ['This book', 'That book', 'These book', 'Those book'], ans: 'This book', exp: 'Perto e singular = THIS.' },
      { type: 'fill-blank', visualEmoji: '👉👉', prompt: 'Para vários objetos perto de você no plural: "_____ are my keys."', options: ['These', 'This', 'That', 'Those'], ans: 'These', exp: 'Perto e plural = THESE.' },
      { type: 'word-order', prompt: 'Monte a frase apontando para algo distante:', options: ['is', 'house', 'That', 'expensive.', 'very'], ans: 'That house is very expensive.', exp: 'That house is very expensive.' },
      { type: 'listening', prompt: 'Ouça o demonstrativo:', audio: 'Look at those beautiful stars in the sky.', options: ['Look at those beautiful stars in the sky.', 'Look at these beautiful flowers in the vase.', 'Look at that bright star in the sky.', 'Look at this amazing sunset outside.'], ans: 'Look at those beautiful stars in the sky.', exp: 'Those = aquelas (longe/plural).' },
      { type: 'translate', prompt: 'Traduza: "Quem é aquela mulher lá longe?"', options: ['Who is that woman over there?', 'Who is this woman over there?', 'Who are those woman over there?', 'Who is these woman over there?'], ans: 'Who is that woman over there?', exp: 'That woman = aquela mulher.' },
      { type: 'multiple-choice', prompt: 'Qual par representa o plural de "THIS" e "THAT"?', options: ['These and Those', 'Thises and Thats', 'Theses and Those', 'Those and These'], ans: 'These and Those', exp: 'This -> These; That -> Those.' },
      { type: 'word-order', prompt: 'Organize a pergunta com demonstrativo plural:', options: ['yours?', 'Are', 'shoes', 'these'], ans: 'Are these shoes yours?', exp: 'Are these shoes yours?' },
      { type: 'listening', prompt: 'Ouça a frase:', audio: 'How much are these apples?', options: ['How much are these apples?', 'How much is this apple?', 'How much are those oranges?', 'How much is that banana?'], ans: 'How much are these apples?', exp: 'these apples.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I like this one"', audio: 'I like this one', ans: 'I like this one', hint: '/aɪ laɪk ðɪs wʌn/', exp: 'I like this one.' },
      { type: 'multiple-choice', prompt: 'Como dizer "Aqueles carros são rápidos"?', options: ['Those cars are fast.', 'That cars are fast.', 'These cars are fast.', 'This cars are fast.'], ans: 'Those cars are fast.', exp: 'Those cars = aqueles carros.' }
    ]
  },
  // 6
  {
    num: 6, title: 'O Artigo Definido THE', subtitle: 'Quando usar e quando NÃO usar "THE"',
    obj: 'Dominar o uso e a omissão do artigo THE.',
    type: 'lesson', icon: 'check-circle',
    theory: ['THE = o, a, os, as para coisas específicas.', 'NÃO usamos THE para generalizações: "Life is good", "I love dogs".'],
    items: [
      { type: 'multiple-choice', prompt: 'Como dizer "Música é relaxante" (em geral)?', options: ['Music is relaxing.', 'The music is relaxing.', 'A music is relaxing.', 'An music is relaxing.'], ans: 'Music is relaxing.', exp: 'Generalizações não usam "The".' },
      { type: 'fill-blank', visualEmoji: '☀️', prompt: 'Para coisas únicas no universo: "_____ sun is shining bright today."', options: ['The', 'A', 'An', 'One'], ans: 'The', exp: 'The sun, the moon.' },
      { type: 'word-order', prompt: 'Monte a frase com água específica:', options: ['water', 'cold.', 'in', 'The', 'the', 'is', 'glass'], ans: 'The water in the glass is cold.', exp: 'The water in the glass is cold.' },
      { type: 'listening', prompt: 'Ouça a frase geral:', audio: 'Children love playing in the park.', options: ['Children love playing in the park.', 'The children love playing in the park.', 'Children like running in the park.', 'People love walking in the park.'], ans: 'Children love playing in the park.', exp: 'Children em geral sem "The".' },
      { type: 'translate', prompt: 'Traduza: "Eu gosto de café da manhã."', options: ['I like breakfast.', 'I like the breakfast.', 'I like a breakfast.', 'I like an breakfast.'], ans: 'I like breakfast.', exp: 'Refeições não levam "The".' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um erro?', options: ['The life is beautiful.', 'Life is beautiful.', 'The weather is great.', 'The president made a speech.'], ans: 'The life is beautiful.', exp: 'Diga "Life is beautiful".' },
      { type: 'word-order', prompt: 'Organize a frase com instrumento musical:', options: ['plays', 'piano', 'the', 'She', 'well.', 'very'], ans: 'She plays the piano very well.', exp: 'Instrumentos musicais levam "The".' },
      { type: 'listening', prompt: 'Ouça:', audio: 'He is going to the cinema tonight.', options: ['He is going to the cinema tonight.', 'He is going to cinema tonight.', 'He is going to a cinema tonight.', 'He is going to the hospital tonight.'], ans: 'He is going to the cinema tonight.', exp: 'go to the cinema.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "The weather is nice today"', audio: 'The weather is nice today', ans: 'The weather is nice today', hint: '/ðə ˈweð.ər ɪz naɪs təˈdeɪ/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: 'Qual país leva "THE" no nome oficial?', options: ['The United States', 'The Brazil', 'The Spain', 'The Germany'], ans: 'The United States', exp: 'The US, The UK.' }
    ]
  },
  // 7
  {
    num: 7, title: 'Plurais Irregulares Avançados', subtitle: 'Feet, teeth, mice, geese, fish, sheep',
    obj: 'Reconhecer e usar substantivos com formas plurais especiais.',
    type: 'lesson', icon: 'layers',
    theory: ['foot -> feet, tooth -> teeth, goose -> geese, mouse -> mice, sheep -> sheep, fish -> fish.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🐭', prompt: 'Qual é o plural de "MOUSE" (camundongo)?', options: ['Mice', 'Mouses', 'Mices', 'Mousees'], ans: 'Mice', exp: 'One mouse, two mice.' },
      { type: 'fill-blank', visualEmoji: '🦷', prompt: 'Complete: "The dentist examined all of my _____."', options: ['teeth', 'tooths', 'teethes', 'toothes'], ans: 'teeth', exp: 'Tooth -> Teeth.' },
      { type: 'word-order', prompt: 'Monte a frase com plural invariável:', options: ['field.', 'grazing', 'The', 'sheep', 'are', 'in', 'the'], ans: 'The sheep are grazing in the field.', exp: 'Sheep não muda no plural.' },
      { type: 'listening', prompt: 'Ouça o plural irregular:', audio: 'My feet are tired after running five kilometers.', options: ['My feet are tired after running five kilometers.', 'My foot is tired after running five kilometers.', 'My feet are cold after walking in the snow.', 'My legs are tired after playing soccer.'], ans: 'My feet are tired after running five kilometers.', exp: 'feet = pés.' },
      { type: 'translate', prompt: 'Traduza: "Havia muitos peixes no lago."', options: ['There were many fish in the lake.', 'There were many fishes in the lake.', 'There was many fish in the lake.', 'There were much fish in the lake.'], ans: 'There were many fish in the lake.', exp: 'Plural de fish é fish.' },
      { type: 'multiple-choice', visualEmoji: '🦆', prompt: 'Qual é o plural de "GOOSE" (ganso)?', options: ['Geese', 'Gooses', 'Geeses', 'Goos'], ans: 'Geese', exp: 'One goose, two geese.' },
      { type: 'word-order', prompt: 'Organize a frase com plural de pessoa:', options: ['the', 'many', 'were', 'There', 'at', 'people', 'concert.'], ans: 'There were many people at the concert.', exp: 'Person -> People.' },
      { type: 'listening', prompt: 'Ouça e marque:', audio: 'The cat caught two mice under the sofa.', options: ['The cat caught two mice under the sofa.', 'The cat caught two mouses under the sofa.', 'The dog saw two mice under the bed.', 'The cat caught a mouse under the table.'], ans: 'The cat caught two mice under the sofa.', exp: 'two mice = dois ratos.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Brush your teeth"', audio: 'Brush your teeth', ans: 'Brush your teeth', hint: '/brʌʃ jɔːr tiːθ/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Qual palavra permanece IDÊNTICA no plural?', options: ['Fish', 'Foot', 'Tooth', 'Child'], ans: 'Fish', exp: 'One fish, ten fish.' }
    ]
  },
  // 8
  {
    num: 8, title: 'Existe / Há: There Is & There Are', subtitle: 'Descrevendo a existência de coisas',
    obj: 'Expressar existência no singular e plural sem usar "have".',
    type: 'lesson', icon: 'map-pin',
    theory: ['Singular = There is / There\'s. Plural = There are. NUNCA use "have/has" para existência.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🏦', prompt: 'Como dizer "Há um banco perto daqui"?', options: ['There is a bank near here.', 'Has a bank near here.', 'Have a bank near here.', 'There are a bank near here.'], ans: 'There is a bank near here.', exp: 'Existência = There is.' },
      { type: 'fill-blank', visualEmoji: '🚗', prompt: 'Complete: "_____ many cars on the street today."', options: ['There are', 'There is', 'Have', 'Has'], ans: 'There are', exp: 'Cars é plural -> There are.' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre existência:', options: ['hotel', 'Is', 'here?', 'a', 'near', 'there'], ans: 'Is there a hotel near here?', exp: 'Is there a hotel near here?' },
      { type: 'listening', prompt: 'Ouça e selecione a frase ouvida:', audio: 'There are thirty students in this classroom.', options: ['There are thirty students in this classroom.', 'There are thirteen students in this classroom.', 'There is a student in this classroom.', 'There are twenty students in this classroom.'], ans: 'There are thirty students in this classroom.', exp: 'There are thirty students.' },
      { type: 'translate', prompt: 'Traduza: "Não há leite na geladeira."', options: ['There is no milk in the fridge.', 'Has no milk in the fridge.', 'Have not milk in the fridge.', 'There are no milk in the fridge.'], ans: 'There is no milk in the fridge.', exp: 'There is no milk in the fridge.' },
      { type: 'multiple-choice', prompt: 'Como perguntar "Há perguntas?" no plural?', options: ['Are there any questions?', 'Is there any questions?', 'Has there any questions?', 'Have any questions?'], ans: 'Are there any questions?', exp: 'Are there any questions?' },
      { type: 'word-order', prompt: 'Organize a negativa:', options: ['problems.', 'aren\'t', 'There', 'any'], ans: 'There aren\'t any problems.', exp: 'There aren\'t any problems.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'There is a delicious restaurant around the corner.', options: ['There is a delicious restaurant around the corner.', 'There is a modern supermarket around the corner.', 'There was a nice restaurant around the corner.', 'There is an Italian bakery around the corner.'], ans: 'There is a delicious restaurant around the corner.', exp: 'There is a delicious restaurant...' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "There is someone at the door"', audio: 'There is someone at the door', ans: 'There is someone at the door', hint: '/ðer ɪz ˈsʌm.wʌn æt ðə dɔːr/', exp: 'Muito bem!' },
      { type: 'multiple-choice', prompt: 'Qual frase contém erro de tradução literal?', options: ['Have a supermarket on this street.', 'There is a supermarket on this street.', 'There are two parks in this city.', 'Is there a pharmacy nearby?'], ans: 'Have a supermarket on this street.', exp: 'Erro clássico do português.' }
    ]
  },
  // 9
  {
    num: 9, title: 'Quantificadores: Some, Any & No', subtitle: 'Quantidades indeterminadas',
    obj: 'Usar some, any e no em afirmativas, negativas e perguntas.',
    type: 'lesson', icon: 'pie-chart',
    theory: ['SOME em afirmativas e ofertas educadas. ANY em perguntas e negativas. NO em frases com verbo afirmativo.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '☕', prompt: 'Ao oferecer educadamente um café:', options: ['Would you like some coffee?', 'Would you like any coffee?', 'Would you like no coffee?', 'Would you like many coffee?'], ans: 'Would you like some coffee?', exp: 'Ofertas educadas usam "SOME".' },
      { type: 'fill-blank', prompt: 'Complete a negativa: "I don\'t have _____ doubts about the lesson."', options: ['any', 'some', 'no', 'none'], ans: 'any', exp: 'Com don\'t usamos any.' },
      { type: 'word-order', prompt: 'Monte a frase com NO:', options: ['have', 'time', 'I', 'lose.', 'no', 'to'], ans: 'I have no time to lose.', exp: 'I have no time to lose.' },
      { type: 'listening', prompt: 'Ouça a pergunta:', audio: 'Are there any messages for me today?', options: ['Are there any messages for me today?', 'Are there some messages for me today?', 'Are there no messages for me today?', 'Is there any email for me today?'], ans: 'Are there any messages for me today?', exp: 'Are there any messages...' },
      { type: 'translate', prompt: 'Traduza: "Eu comprei algumas maçãs."', options: ['I bought some apples.', 'I bought any apples.', 'I bought no apples.', 'I bought much apples.'], ans: 'I bought some apples.', exp: 'I bought some apples.' },
      { type: 'multiple-choice', prompt: 'Qual frase contém dupla negativa incorreta?', options: ['I don\'t have no money.', 'I don\'t have any money.', 'I have no money.', 'I have some money.'], ans: 'I don\'t have no money.', exp: 'Não use don\'t + no juntos.' },
      { type: 'word-order', prompt: 'Organize a frase afirmativa:', options: ['water,', 'need', 'please.', 'some', 'We'], ans: 'We need some water, please.', exp: 'We need some water, please.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'There are no empty seats on this flight.', options: ['There are no empty seats on this flight.', 'There aren\'t any tickets for this flight.', 'There are some empty seats on this flight.', 'There was no delay on this flight.'], ans: 'There are no empty seats on this flight.', exp: 'There are no empty seats.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Do you have any questions?"', audio: 'Do you have any questions', ans: 'Do you have any questions', hint: '/duː juː hæv ˈen.i ˈkwes.tʃənz/', exp: 'Perfeita clareza!' },
      { type: 'multiple-choice', prompt: '"I looked everywhere, but I found _____." (nada)', options: ['nothing', 'anything', 'something', 'everything'], ans: 'nothing', exp: 'found nothing.' }
    ]
  },
  // 10: Chest 1 (11 questions)
  {
    num: 10, title: 'Baú da Sabedoria: Construtor I', subtitle: 'Revisão das 9 primeiras lições e baú de gemas',
    obj: 'Consolidar pronomes, possessivos, demonstrativos e existência.',
    type: 'chest', icon: 'award',
    theory: ['Parabéns pelo Baú I! Revise pronomes objetos, possessivos, demonstrativos e There is/are.'],
    items: [
      { type: 'multiple-choice', prompt: '[Revisão] "Where is Sarah? I need to talk to _____."', options: ['her', 'she', 'hers', 'him'], ans: 'her', exp: 'Objeto feminino = her.' },
      { type: 'fill-blank', prompt: '[Revisão] "This jacket is not mine, it is _____." (dela)', options: ['hers', 'her', 'she', 'him'], ans: 'hers', exp: 'Pronome possessivo = hers.' },
      { type: 'word-order', prompt: '[Revisão] Monte a frase de existência:', options: ['supermarket', 'near', 'is', 'There', 'a', 'here.'], ans: 'There is a supermarket near here.', exp: 'There is a supermarket near here.' },
      { type: 'listening', prompt: '[Revisão] Ouça e marque a alternativa ouvida:', audio: 'Look at those birds flying above the trees.', options: ['Look at those birds flying above the trees.', 'Look at these birds sitting on the trees.', 'Look at that bird flying in the sky.', 'Look at those airplanes above the city.'], ans: 'Look at those birds flying above the trees.', exp: 'Those birds = aqueles pássaros.' },
      { type: 'multiple-choice', prompt: '[Revisão] Qual é o plural irregular de "CHILD"?', options: ['Children', 'Childs', 'Childrens', 'Childes'], ans: 'Children', exp: 'One child, two children.' },
      { type: 'translate', prompt: '[Revisão] Traduza: "Você gostaria de um pouco de chá?"', options: ['Would you like some tea?', 'Would you like any tea?', 'Do you want many tea?', 'Would you like no tea?'], ans: 'Would you like some tea?', exp: 'Oferta educada = some tea.' },
      { type: 'word-order', prompt: '[Revisão] Ordene a pergunta com demonstrativo:', options: ['keys', 'these', 'Whose', 'are?'], ans: 'Whose keys are these?', exp: 'Whose keys are these?' },
      { type: 'speaking-repeat', prompt: '[Revisão] Fale no microfone: "There are two books on the table"', audio: 'There are two books on the table', ans: 'There are two books on the table', hint: '/ðer ɑːr tuː bʊks ɑːn ðə ˈteɪ.bəl/', exp: 'Excelente!' },
      { type: 'fill-blank', prompt: '[Revisão] "We don\'t have _____ doubts."', options: ['any', 'some', 'no', 'none'], ans: 'any', exp: 'Negativa com don\'t = any.' },
      { type: 'multiple-choice', prompt: '[Revisão] Qual frase está 100% correta?', options: ['His car is new and fast.', 'The his car is new and fast.', 'He car is new and fast.', 'Him car is new and fast.'], ans: 'His car is new and fast.', exp: 'Nunca use The his...' },
      { type: 'translate', prompt: '[Revisão] "Ele conhece eles muito bem."', options: ['He knows them very well.', 'He knows they very well.', 'He knows their very well.', 'Him knows them very well.'], ans: 'He knows them very well.', exp: 'He knows them very well.' }
    ]
  },
  // 11
  {
    num: 11, title: 'Substantivos Contáveis e Incontáveis', subtitle: 'Countable vs Uncountable nouns',
    obj: 'Diferenciar substantivos contáveis de incontáveis.',
    type: 'lesson', icon: 'coffee',
    theory: ['Contáveis têm plural (one book, two books). Incontáveis não têm plural direto (water, bread, money, advice, information).'],
    items: [
      { type: 'multiple-choice', visualEmoji: '💧', prompt: 'Qual substantivo é INCONTÁVEL em inglês?', options: ['Water', 'Bottle', 'Apple', 'Coin'], ans: 'Water', exp: 'Water não tem plural direto.' },
      { type: 'fill-blank', visualEmoji: '💰', prompt: 'Complete: "How much _____ do you have?"', options: ['money', 'moneys', 'dollar', 'coin'], ans: 'money', exp: 'Money é incontável.' },
      { type: 'word-order', prompt: 'Monte a frase com substantivo incontável:', options: ['need', 'some', 'I', 'information,', 'please.'], ans: 'I need some information, please.', exp: 'Information nunca leva -s.' },
      { type: 'listening', prompt: 'Ouça o substantivo:', audio: 'Could you give me some good advice?', options: ['Could you give me some good advice?', 'Could you give me some good advices?', 'Could you give me an advice?', 'Could you give me some good news?'], ans: 'Could you give me some good advice?', exp: 'Advice é incontável.' },
      { type: 'translate', prompt: 'Traduza: "Eu comprei pão."', options: ['I bought some bread.', 'I bought a bread.', 'I bought many breads.', 'I bought two breads.'], ans: 'I bought some bread.', exp: 'Bread é incontável -> some bread.' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um erro gramatical?', options: ['She gave me two advices.', 'She gave me two pieces of advice.', 'I drink water every day.', 'We need more information.'], ans: 'She gave me two advices.', exp: 'Advices não existe.' },
      { type: 'word-order', prompt: 'Organize a frase de compra:', options: ['two', 'I', 'bottles', 'bought', 'water.', 'of'], ans: 'I bought two bottles of water.', exp: 'Two bottles of water.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'There is too much sugar in this coffee.', options: ['There is too much sugar in this coffee.', 'There are too many sugar in this coffee.', 'There is some milk in this coffee.', 'There is no sugar in this tea.'], ans: 'There is too much sugar in this coffee.', exp: 'much sugar.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "A piece of information"', audio: 'A piece of information', ans: 'A piece of information', hint: '/ə piːs əv ˌɪn.fɚˈmeɪ.ʃən/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Qual é a forma contável para falar de pão?', options: ['A slice of bread / a loaf of bread', 'A bread', 'One bread', 'Two breads'], ans: 'A slice of bread / a loaf of bread', exp: 'Uma fatia ou um filão de pão.' }
    ]
  },
  // 12
  {
    num: 12, title: 'How Much vs How Many', subtitle: 'Perguntando quantidades e preços',
    obj: 'Usar How Much para incontáveis/preços e How Many para contáveis no plural.',
    type: 'lesson', icon: 'dollar-sign',
    theory: ['HOW MUCH: coisas incontáveis e preços. HOW MANY: coisas contáveis no plural.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🏷️', prompt: 'Como se pergunta "Quanto custa isto?" em inglês?', options: ['How much is this?', 'How many is this?', 'How much are this?', 'What price is this?'], ans: 'How much is this?', exp: 'Preços usam sempre HOW MUCH.' },
      { type: 'fill-blank', visualEmoji: '📚', prompt: 'Complete com contável no plural: "_____ books did you read this year?"', options: ['How many', 'How much', 'How long', 'How often'], ans: 'How many', exp: 'Books é contável -> How many.' },
      { type: 'word-order', prompt: 'Monte a pergunta sobre água:', options: ['water', 'do', 'drink?', 'How', 'much', 'you'], ans: 'How much water do you drink?', exp: 'How much water do you drink?' },
      { type: 'listening', prompt: 'Ouça e selecione a pergunta:', audio: 'How many brothers and sisters do you have?', options: ['How many brothers and sisters do you have?', 'How much brothers and sisters do you have?', 'How many friends do you have in town?', 'How much time do you have today?'], ans: 'How many brothers and sisters do you have?', exp: 'How many brothers and sisters...' },
      { type: 'translate', prompt: 'Traduza: "Quanto tempo nós temos?"', options: ['How much time do we have?', 'How many time do we have?', 'How long time do we have?', 'How much times do we have?'], ans: 'How much time do we have?', exp: 'Tempo é incontável -> How much time.' },
      { type: 'multiple-choice', prompt: '"How many _____ are there in the room?"', options: ['people', 'time', 'water', 'sugar'], ans: 'people', exp: 'How many exige plural.' },
      { type: 'word-order', prompt: 'Organize a pergunta de preço no plural:', options: ['are', 'shoes?', 'How', 'those', 'much'], ans: 'How much are those shoes?', exp: 'How much are those shoes?' },
      { type: 'listening', prompt: 'Ouça o preço informado:', audio: 'This shirt costs twenty-five dollars.', options: ['This shirt costs twenty-five dollars.', 'This shirt costs thirty-five dollars.', 'This skirt costs twenty-five dollars.', 'This jacket costs forty-five dollars.'], ans: 'This shirt costs twenty-five dollars.', exp: 'twenty-five dollars ($25).' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "How much is it?"', audio: 'How much is it', ans: 'How much is it', hint: '/haʊ mʌtʃ ɪz ɪt/', exp: 'Frase essencial em viagens!' },
      { type: 'multiple-choice', prompt: 'Complete: "How _____ sugar do you take in your coffee?"', options: ['much', 'many', 'lot', 'few'], ans: 'much', exp: 'Sugar é incontável -> much.' }
    ]
  },
  // 13
  {
    num: 13, title: 'Conectores Fundamentais', subtitle: 'And, But, Because, So',
    obj: 'Ligar orações expressando adição, contraste, causa e consequência.',
    type: 'lesson', icon: 'git-commit',
    theory: ['AND = adição. BUT = oposição. BECAUSE = causa. SO = resultado/consequência.'],
    items: [
      { type: 'multiple-choice', prompt: 'Complete: "I studied very hard, _____ I passed the test."', options: ['so', 'because', 'but', 'and'], ans: 'so', exp: 'So = consequência.' },
      { type: 'fill-blank', prompt: 'Complete com contraste: "I like him, _____ I don\'t agree with him."', options: ['but', 'and', 'because', 'so'], ans: 'but', exp: 'But = mas.' },
      { type: 'word-order', prompt: 'Monte a frase com causa:', options: ['stayed', 'home', 'it', 'was', 'raining.', 'I', 'at', 'because'], ans: 'I stayed at home because it was raining.', exp: 'I stayed at home because it was raining.' },
      { type: 'listening', prompt: 'Ouça o conector:', audio: 'She was tired, so she went to sleep early.', options: ['She was tired, so she went to sleep early.', 'She was tired, but she went to sleep late.', 'She was happy, and she went to sleep early.', 'She was sick, so she stayed in bed.'], ans: 'She was tired, so she went to sleep early.', exp: 'so she went to sleep early.' },
      { type: 'translate', prompt: 'Traduza: "Eu gosto de café e chá."', options: ['I like coffee and tea.', 'I like coffee but tea.', 'I like coffee so tea.', 'I like coffee because tea.'], ans: 'I like coffee and tea.', exp: 'And = e.' },
      { type: 'multiple-choice', prompt: '"I woke up late _____ my alarm didn\'t go off." (porque)', options: ['because', 'so', 'but', 'although'], ans: 'because', exp: 'Because = porque.' },
      { type: 'word-order', prompt: 'Organize a frase de contraste:', options: ['tired,', 'working.', 'kept', 'He', 'was', 'he', 'but'], ans: 'He was tired, but he kept working.', exp: 'He was tired, but he kept working.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'It was very cold, so I put on my coat.', options: ['It was very cold, so I put on my coat.', 'It was very hot, so I took off my coat.', 'It was raining, so I took an umbrella.', 'It was cold, but I didn\'t have a coat.'], ans: 'It was very cold, so I put on my coat.', exp: 'so I put on my coat.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "I like it, but it is expensive"', audio: 'I like it but it is expensive', ans: 'I like it but it is expensive', hint: '/aɪ laɪk ɪt bʌt ɪt ɪz ɪkˈspen.sɪv/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Qual conector expressa MOTIVO / CAUSA?', options: ['Because', 'So', 'And', 'Or'], ans: 'Because', exp: 'Because = motivo.' }
    ]
  },
  // 14
  {
    num: 14, title: 'Habilidades com o Modal CAN', subtitle: 'I can speak, I can swim',
    obj: 'Expressar habilidades e permissões usando CAN.',
    type: 'lesson', icon: 'zap',
    theory: ['CAN não muda com he/she/it. O verbo seguinte não leva "to": "I can swim". Negativa: can\'t.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🏊‍♂️', prompt: 'Como dizer "Ela sabe nadar muito bem"?', options: ['She can swim very well.', 'She can to swim very well.', 'She cans swim very well.', 'She can swimming very well.'], ans: 'She can swim very well.', exp: 'Sem "to" e sem "-s".' },
      { type: 'fill-blank', visualEmoji: '🗣️', prompt: 'Complete: "_____ you speak English?"', options: ['Can', 'Do can', 'Are', 'Is'], ans: 'Can', exp: 'Can you speak English?' },
      { type: 'word-order', prompt: 'Monte a negativa com CAN\'T:', options: ['play', 'I', 'the', 'guitar.', 'can\'t'], ans: 'I can\'t play the guitar.', exp: 'I can\'t play the guitar.' },
      { type: 'listening', prompt: 'Ouça a habilidade:', audio: 'He can speak three languages fluently.', options: ['He can speak three languages fluently.', 'He can speak two languages fluently.', 'She can speak three languages fluently.', 'He can write three languages fluently.'], ans: 'He can speak three languages fluently.', exp: 'three languages fluently.' },
      { type: 'translate', prompt: 'Traduza: "Você pode me ajudar agora?"', options: ['Can you help me now?', 'Do you can help me now?', 'Are you help me now?', 'Can you to help me now?'], ans: 'Can you help me now?', exp: 'Can you help me now?' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um ERRO?', options: ['He can to drive a car.', 'He can drive a car.', 'He cannot drive a car.', 'Can he drive a car?'], ans: 'He can to drive a car.', exp: 'Nunca use "to" após can.' },
      { type: 'word-order', prompt: 'Organize a pergunta:', options: ['come', 'party?', 'Can', 'to', 'the', 'they'], ans: 'Can they come to the party?', exp: 'Can they come to the party?' },
      { type: 'listening', prompt: 'Ouça a permissão:', audio: 'Can I open the window, please?', options: ['Can I open the window, please?', 'Can I close the door, please?', 'Could I open the box, please?', 'Can you open the car, please?'], ans: 'Can I open the window, please?', exp: 'Can I open the window, please?' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Yes, I can do it!"', audio: 'Yes I can do it', ans: 'Yes I can do it', hint: '/jes aɪ kæn duː ɪt/', exp: 'Perfeita confiança!' },
      { type: 'multiple-choice', prompt: 'Qual é a contração de CAN NOT?', options: ['Can\'t', 'Cann\'t', 'Cansn\'t', 'Don\'t can'], ans: 'Can\'t', exp: 'Can\'t.' }
    ]
  },
  // 15
  {
    num: 15, title: 'Pedidos Educados com COULD e WOULD', subtitle: 'Could you help me? Would you like coffee?',
    obj: 'Fazer pedidos e ofertas com alto grau de polidez.',
    type: 'lesson', icon: 'heart',
    theory: ['Could you... please? = Você poderia...? Would you like...? = Você gostaria de...?'],
    items: [
      { type: 'multiple-choice', prompt: 'Como pedir educadamente para repetir?', options: ['Could you repeat that, please?', 'Repeat that now!', 'You can repeat that?', 'Can to repeat that?'], ans: 'Could you repeat that, please?', exp: 'Could you repeat that, please?' },
      { type: 'fill-blank', visualEmoji: '☕', prompt: 'Complete: "_____ you like some dessert?"', options: ['Would', 'Could', 'Do', 'Are'], ans: 'Would', exp: 'Would you like...?' },
      { type: 'word-order', prompt: 'Monte o pedido educado:', options: ['the', 'pass', 'you', 'salt,', 'Could', 'please?'], ans: 'Could you pass the salt, please?', exp: 'Could you pass the salt, please?' },
      { type: 'listening', prompt: 'Ouça o pedido formal:', audio: 'Could you tell me how to get to the station?', options: ['Could you tell me how to get to the station?', 'Could you show me where the train is?', 'Can you take me to the airport now?', 'Would you like to visit the station?'], ans: 'Could you tell me how to get to the station?', exp: 'Could you tell me...' },
      { type: 'translate', prompt: 'Traduza: "Eu gostaria de uma mesa para dois."', options: ['I would like a table for two, please.', 'I want table for two now.', 'I will like a table for two.', 'Could I a table for two.'], ans: 'I would like a table for two, please.', exp: 'I would like = Eu gostaria.' },
      { type: 'multiple-choice', prompt: 'Qual é a contração de "I would like"?', options: ['I\'d like', 'I\'w like', 'I\'ould like', 'I\'ll like'], ans: 'I\'d like', exp: 'I\'d like.' },
      { type: 'word-order', prompt: 'Organize a pergunta:', options: ['like', 'tea', 'Would', 'coffee?', 'you', 'or'], ans: 'Would you like coffee or tea?', exp: 'Would you like coffee or tea?' },
      { type: 'listening', prompt: 'Ouça a resposta:', audio: 'I would love to join you for dinner.', options: ['I would love to join you for dinner.', 'I would like to have lunch with you.', 'Could you join us for dinner today?', 'I will call you after dinner.'], ans: 'I would love to join you for dinner.', exp: 'I would love to...' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Could you help me, please?"', audio: 'Could you help me please', ans: 'Could you help me please', hint: '/kʊd juː help miː pliːz/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'No restaurante, qual pedido é mais educado?', options: ['I\'d like the chicken salad, please.', 'Give me chicken salad.', 'I want chicken salad.', 'I need the salad now.'], ans: 'I\'d like the chicken salad, please.', exp: 'I\'d like... please.' }
    ]
  },
  // 16
  {
    num: 16, title: 'Present Continuous: Acontecendo Agora', subtitle: 'Verbo To Be + Verbo com -ING',
    obj: 'Descrever ações que estão ocorrendo no momento da fala.',
    type: 'lesson', icon: 'play-circle',
    theory: ['Sujeito + am/is/are + verbo com -ING: "I am studying", "She is cooking".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🍳', prompt: 'Como se diz "Ela está cozinhando o jantar agora"?', options: ['She is cooking dinner right now.', 'She cooking dinner right now.', 'She is cook dinner right now.', 'She cooks dinner right now.'], ans: 'She is cooking dinner right now.', exp: 'To Be (is) + verbo com -ing (cooking).' },
      { type: 'fill-blank', visualEmoji: '📖', prompt: 'Complete: "I am _____ an interesting book at the moment."', options: ['reading', 'read', 'reads', 'to read'], ans: 'reading', exp: 'Am + reading.' },
      { type: 'word-order', prompt: 'Monte a frase no Present Continuous:', options: ['English', 'are', 'We', 'now.', 'learning'], ans: 'We are learning English now.', exp: 'We are learning English now.' },
      { type: 'listening', prompt: 'Ouça a ação em andamento:', audio: 'Listen! The baby is sleeping peacefully.', options: ['Listen! The baby is sleeping peacefully.', 'Listen! The baby is crying loudly.', 'Look! The baby is playing peacefully.', 'Listen! The dog is sleeping outside.'], ans: 'Listen! The baby is sleeping peacefully.', exp: 'is sleeping.' },
      { type: 'translate', prompt: 'Traduza: "Eles estão jogando futebol no parque."', options: ['They are playing soccer in the park.', 'They are play soccer in the park.', 'They playing soccer in the park.', 'They do play soccer in the park.'], ans: 'They are playing soccer in the park.', exp: 'They are playing soccer.' },
      { type: 'multiple-choice', prompt: 'Como fica o verbo "RUN" com -ING?', options: ['Running (dobra o N)', 'Runing', 'Runneing', 'Runnin'], ans: 'Running (dobra o N)', exp: 'Consoante-vogal-consoante (CVC) dobra a última letra: run -> running.' },
      { type: 'word-order', prompt: 'Organize a frase de ação:', options: ['raining', 'It', 'hard.', 'very', 'is'], ans: 'It is raining very hard.', exp: 'It is raining very hard.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'What are you doing right now?', options: ['What are you doing right now?', 'Where are you going right now?', 'Who are you talking to right now?', 'Why are you running right now?'], ans: 'What are you doing right now?', exp: 'What are you doing...' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I am studying English"', audio: 'I am studying English', ans: 'I am studying English', hint: '/aɪ æm ˈstʌd.i.ɪŋ ˈɪŋ.ɡlɪʃ/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: 'Qual forma de verbo NÃO dobra a consoante final?', options: ['Playing', 'Sitting', 'Swimming', 'Running'], ans: 'Playing', exp: 'Verbos que terminam em Y apenas recebem -ing: playing.' }
    ]
  },
  // 17
  {
    num: 17, title: 'Present Continuous: Perguntas e Negativas', subtitle: 'Are you working? I am not sleeping',
    obj: 'Fazer perguntas e negativas no Present Continuous.',
    type: 'lesson', icon: 'help-circle',
    theory: ['Negativa: am not / isn\'t / aren\'t + verbo com -ing. Pergunta: Are you working?'],
    items: [
      { type: 'multiple-choice', prompt: 'Como perguntar "Você está prestando atenção?"', options: ['Are you paying attention?', 'Do you paying attention?', 'Is you paying attention?', 'You are paying attention?'], ans: 'Are you paying attention?', exp: 'Inversão do verbo To Be: Are you paying...?' },
      { type: 'fill-blank', prompt: 'Complete a negativa: "He _____ working today, he is on vacation."', options: ['isn\'t', 'aren\'t', 'doesn\'t', 'not is'], ans: 'isn\'t', exp: 'He isn\'t working.' },
      { type: 'word-order', prompt: 'Monte a pergunta interrogativa:', options: ['to', 'listening', 'you', 'music?', 'Are'], ans: 'Are you listening to music?', exp: 'Are you listening to music?' },
      { type: 'listening', prompt: 'Ouça a negativa:', audio: 'We are not watching television right now.', options: ['We are not watching television right now.', 'We are not listening to music right now.', 'They are not watching television right now.', 'She is not watching television right now.'], ans: 'We are not watching television right now.', exp: 'We are not watching...' },
      { type: 'translate', prompt: 'Traduza: "O que ela está fazendo?"', options: ['What is she doing?', 'What does she doing?', 'What is she do?', 'Where is she doing?'], ans: 'What is she doing?', exp: 'What is she doing?' },
      { type: 'multiple-choice', prompt: 'Como responder negativamente a "Are you sleeping?"', options: ['No, I\'m not.', 'No, I don\'t.', 'No, I amn\'t.', 'No, I not.'], ans: 'No, I\'m not.', exp: 'No, I\'m not.' },
      { type: 'word-order', prompt: 'Organize a pergunta com WHERE:', options: ['going', 'Where', 'they', 'now?', 'are'], ans: 'Where are they going now?', exp: 'Where are they going now?' },
      { type: 'listening', prompt: 'Ouça a pergunta:', audio: 'Why are you leaving so early?', options: ['Why are you leaving so early?', 'Why are you coming so early?', 'Where are you going so early?', 'When are you leaving today?'], ans: 'Why are you leaving so early?', exp: 'Why are you leaving so early?' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "What are you doing?"', audio: 'What are you doing', ans: 'What are you doing', hint: '/wɑːt ɑːr juː ˈduː.ɪŋ/', exp: 'Excelente entonação!' },
      { type: 'multiple-choice', prompt: 'Qual frase está INCORRETA?', options: ['I don\'t working today.', 'I am not working today.', 'She isn\'t working today.', 'They aren\'t working today.'], ans: 'I don\'t working today.', exp: 'Não se usa "don\'t" com gerúndio.' }
    ]
  },
  // 18
  {
    num: 18, title: 'Verbos de Sentimento (+ ING)', subtitle: 'Like, Love, Hate, Enjoy doing',
    obj: 'Usar o gerúndio (-ing) após verbos que expressam gostos e sentimentos.',
    type: 'lesson', icon: 'smile',
    theory: ['Após like, love, hate, enjoy usamos -ING: "I love dancing", "He enjoys cooking".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '📚', prompt: 'Como se diz "Eu adoro ler livros de ficção"?', options: ['I love reading fiction books.', 'I love read fiction books.', 'I love to reading fiction books.', 'I love reads fiction books.'], ans: 'I love reading fiction books.', exp: 'Love + reading.' },
      { type: 'fill-blank', visualEmoji: '🍳', prompt: 'Complete: "He really enjoys _____ dinner for his family."', options: ['cooking', 'cook', 'cooks', 'cooked'], ans: 'cooking', exp: 'Enjoy + cooking.' },
      { type: 'word-order', prompt: 'Monte a frase com HATE:', options: ['traffic.', 'in', 'waiting', 'I', 'hate'], ans: 'I hate waiting in traffic.', exp: 'I hate waiting in traffic.' },
      { type: 'listening', prompt: 'Ouça a preferência:', audio: 'Do you like traveling to foreign countries?', options: ['Do you like traveling to foreign countries?', 'Do you enjoy living in foreign countries?', 'Do you want to travel to other countries?', 'Do you like studying foreign languages?'], ans: 'Do you like traveling to foreign countries?', exp: 'like traveling.' },
      { type: 'translate', prompt: 'Traduza: "Ela não gosta de acordar cedo."', options: ['She doesn\'t like waking up early.', 'She not likes waking up early.', 'She doesn\'t like wake up early.', 'She don\'t like waking up early.'], ans: 'She doesn\'t like waking up early.', exp: 'doesn\'t like waking up early.' },
      { type: 'multiple-choice', prompt: '"I enjoy _____ with my friends on weekends." (conversar)', options: ['talking', 'talk', 'to talking', 'talks'], ans: 'talking', exp: 'enjoy + talking.' },
      { type: 'word-order', prompt: 'Organize a pergunta de preferência:', options: ['music?', 'enjoy', 'to', 'listening', 'Do', 'you'], ans: 'Do you enjoy listening to music?', exp: 'Do you enjoy listening to music?' },
      { type: 'listening', prompt: 'Ouça:', audio: 'They love playing video games together.', options: ['They love playing video games together.', 'They like watching movies together.', 'They hate playing soccer together.', 'They enjoy working together.'], ans: 'They love playing video games together.', exp: 'love playing.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "I love learning English"', audio: 'I love learning English', ans: 'I love learning English', hint: '/aɪ lʌv ˈlɜːr.nɪŋ ˈɪŋ.ɡlɪʃ/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: 'Qual verbo NÃO é tipicamente seguido de gerúndio para preferências?', options: ['Decide', 'Enjoy', 'Love', 'Hate'], ans: 'Decide', exp: 'Decide leva infinitivo com to: "decide to go".' }
    ]
  },
  // 19
  {
    num: 19, title: 'Simple Present: Rotina na 1ª e 2ª Pessoa', subtitle: 'I live, you work, we study',
    obj: 'Descrever hábitos e rotinas regulares com I, You, We e They.',
    type: 'lesson', icon: 'clock',
    theory: ['Com I, You, We e They o verbo fica na forma básica: I live, you work, we study, they play.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🏢', prompt: 'Como dizer "Eu trabalho em um escritório no centro"?', options: ['I work in an office downtown.', 'I works in an office downtown.', 'I am work in an office downtown.', 'I working in an office downtown.'], ans: 'I work in an office downtown.', exp: 'Com I o verbo fica simples: I work.' },
      { type: 'fill-blank', visualEmoji: '☕', prompt: 'Complete a rotina: "We _____ coffee together every morning."', options: ['drink', 'drinks', 'drinking', 'are drink'], ans: 'drink', exp: 'We drink.' },
      { type: 'word-order', prompt: 'Monte a frase de rotina:', options: ['English', 'every', 'They', 'study', 'day.'], ans: 'They study English every day.', exp: 'They study English every day.' },
      { type: 'listening', prompt: 'Ouça a rotina:', audio: 'I live in a small apartment near the university.', options: ['I live in a small apartment near the university.', 'We live in a big house near the university.', 'I study in a modern classroom at the university.', 'They live in a beautiful house in the city.'], ans: 'I live in a small apartment near the university.', exp: 'I live in a small apartment...' },
      { type: 'translate', prompt: 'Traduza: "Nós moramos no Brasil e falamos português."', options: ['We live in Brazil and we speak Portuguese.', 'We lives in Brazil and we speaks Portuguese.', 'We are live in Brazil and speak Portuguese.', 'We living in Brazil and speaking Portuguese.'], ans: 'We live in Brazil and we speak Portuguese.', exp: 'We live ... and we speak.' },
      { type: 'multiple-choice', prompt: 'Para rotinas com "YOU", qual forma verbal é correta?', options: ['You drive to work.', 'You drives to work.', 'You driving to work.', 'You are drive to work.'], ans: 'You drive to work.', exp: 'You drive.' },
      { type: 'word-order', prompt: 'Organize a rotina:', options: ['six', 'at', 'wake', 'up', 'I', 'o\'clock.'], ans: 'I wake up at six o\'clock.', exp: 'I wake up at six o\'clock.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'They take the subway to work every morning.', options: ['They take the subway to work every morning.', 'They drive the car to work every morning.', 'We take the bus to school every morning.', 'They take the train to work every evening.'], ans: 'They take the subway to work every morning.', exp: 'take the subway.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "I speak English every day"', audio: 'I speak English every day', ans: 'I speak English every day', hint: '/aɪ spiːk ˈɪŋ.ɡlɪʃ ˈev.ri deɪ/', exp: 'Muito bem!' },
      { type: 'multiple-choice', prompt: 'Qual oração expressa uma ROTINA ou HÁBITO permanente?', options: ['I drink coffee every morning.', 'I am drinking coffee right now.', 'I drank coffee yesterday.', 'I will drink coffee tomorrow.'], ans: 'I drink coffee every morning.', exp: 'Simple Present expressa hábitos cotidianos.' }
    ]
  },
  // 20: Chest 2 (Review 11-19) - 11 questions
  {
    num: 20, title: 'Baú da Sabedoria: Construtor II', subtitle: 'Revisão intermediária do Mundo 2 e gemas bônus',
    obj: 'Consolidar contáveis/incontáveis, modais e presente contínuo.',
    type: 'chest', icon: 'award',
    theory: ['Segundo Baú do Mundo 2 conquistado! Revise How much/many, Can/Could e Present Continuous.'],
    items: [
      { type: 'multiple-choice', prompt: '[Revisão] "How _____ apples did you buy?"', options: ['many', 'much', 'often', 'long'], ans: 'many', exp: 'Apples é contável no plural -> How many.' },
      { type: 'fill-blank', prompt: '[Revisão] "Could you _____ the door, please?"', options: ['close', 'closing', 'to close', 'closed'], ans: 'close', exp: 'Após Could usamos verbo base sem to.' },
      { type: 'word-order', prompt: '[Revisão] Monte a frase no Present Continuous:', options: ['dinner', 'is', 'She', 'cooking', 'now.'], ans: 'She is cooking dinner now.', exp: 'She is cooking dinner now.' },
      { type: 'listening', prompt: '[Revisão] Ouça e marque:', audio: 'I would like a glass of orange juice, please.', options: ['I would like a glass of orange juice, please.', 'I would like a cup of black coffee, please.', 'Could you bring a bottle of water, please?', 'I will have a glass of apple juice, please.'], ans: 'I would like a glass of orange juice, please.', exp: 'a glass of orange juice.' },
      { type: 'multiple-choice', prompt: '[Revisão] Qual substantivo é incontável?', options: ['Information', 'Book', 'Computer', 'Car'], ans: 'Information', exp: 'Information é incontável.' },
      { type: 'translate', prompt: '[Revisão] Traduza: "Eu adoro ouvir música."', options: ['I love listening to music.', 'I love listen to music.', 'I love to listening music.', 'I love listening music.'], ans: 'I love listening to music.', exp: 'love listening to music.' },
      { type: 'word-order', prompt: '[Revisão] Ordene a habilidade:', options: ['speak', 'He', 'English.', 'can', 'fluent'], ans: 'He can speak fluent English.', exp: 'He can speak fluent English.' },
      { type: 'speaking-repeat', prompt: '[Revisão] Fale no microfone: "What are you doing now?"', audio: 'What are you doing now', ans: 'What are you doing now', hint: '/wɑːt ɑːr juː ˈduː.ɪŋ naʊ/', exp: 'Excelente!' },
      { type: 'fill-blank', prompt: '[Revisão] "We stayed home _____ it was raining."', options: ['because', 'so', 'but', 'and'], ans: 'because', exp: 'because = porque.' },
      { type: 'multiple-choice', prompt: '[Revisão] Qual frase está 100% correta?', options: ['She can swim very well.', 'She can to swim very well.', 'She cans swim very well.', 'She can swimming very well.'], ans: 'She can swim very well.', exp: 'She can swim very well.' },
      { type: 'translate', prompt: '[Revisão] "Quanto custa esta jaqueta?"', options: ['How much is this jacket?', 'How many is this jacket?', 'How much are this jacket?', 'What cost is this jacket?'], ans: 'How much is this jacket?', exp: 'How much is this jacket?' }
    ]
  },
  // 21
  {
    num: 21, title: 'Simple Present: A Regra da 3ª Pessoa (-S/-ES)', subtitle: 'He works, She watches, It runs',
    obj: 'Aplicar -s, -es e -ies na 3ª pessoa do singular (He, She, It).',
    type: 'lesson', icon: 'user',
    theory: ['He/She/It levam -S: works, lives, speaks.', 'Terminados em -ch, -sh, -ss, -x, -o levam -ES: watches, washes, kisses, fixes, goes.', 'Consoante + Y: study -> studies.'],
    items: [
      { type: 'multiple-choice', visualEmoji: '💼', prompt: 'Como dizer "Ele trabalha em um banco"?', options: ['He works in a bank.', 'He work in a bank.', 'He working in a bank.', 'He is work in a bank.'], ans: 'He works in a bank.', exp: 'He workS in a bank.' },
      { type: 'fill-blank', visualEmoji: '📺', prompt: 'Complete com o verbo WATCH: "She _____ television every evening."', options: ['watches', 'watch', 'watchs', 'watching'], ans: 'watches', exp: 'Termina em -ch -> watches.' },
      { type: 'word-order', prompt: 'Monte a frase com 3ª pessoa:', options: ['hard', 'studies', 'sister', 'My', 'school.', 'at'], ans: 'My sister studies hard at school.', exp: 'study -> studies.' },
      { type: 'listening', prompt: 'Ouça o verbo com -S:', audio: 'He drives his children to school every morning.', options: ['He drives his children to school every morning.', 'He drive his children to school every morning.', 'She walks with children to school every morning.', 'He takes his son to school every morning.'], ans: 'He drives his children to school every morning.', exp: 'He drives.' },
      { type: 'translate', prompt: 'Traduza: "O cachorro late para estranhos."', options: ['The dog barks at strangers.', 'The dog bark at strangers.', 'The dog is bark at strangers.', 'The dog barking at strangers.'], ans: 'The dog barks at strangers.', exp: 'The dog (it) barks.' },
      { type: 'multiple-choice', prompt: 'Qual verbo tem a forma de 3ª pessoa irregular especial?', options: ['Have -> Has', 'Play -> Playes', 'Go -> Gos', 'Work -> Workes'], ans: 'Have -> Has', exp: 'Have vira HAS (He has, She has).' },
      { type: 'word-order', prompt: 'Organize a rotina da 3ª pessoa:', options: ['up', 'early.', 'always', 'She', 'wakes'], ans: 'She always wakes up early.', exp: 'She always wakes up early.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'My father speaks three foreign languages.', options: ['My father speaks three foreign languages.', 'My father speaks two foreign languages.', 'My brother learns three foreign languages.', 'My mother teaches three foreign languages.'], ans: 'My father speaks three foreign languages.', exp: 'speaks.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "She speaks English very well"', audio: 'She speaks English very well', ans: 'She speaks English very well', hint: '/ʃiː spiːks ˈɪŋ.ɡlɪʃ ˈver.i wel/', exp: 'Excelente ênfase no som de -S!' },
      { type: 'multiple-choice', prompt: 'Qual forma da 3ª pessoa está INCORRETA?', options: ['He studys', 'He studies', 'He goes', 'He washes'], ans: 'He studys', exp: 'Study vira studies (com i-e-s).' }
    ]
  },
  // 22
  {
    num: 22, title: 'Perguntas no Presente: Auxiliares DO & DOES', subtitle: 'Do you...? Does he...?',
    obj: 'Construir perguntas no presente utilizando DO e DOES.',
    type: 'lesson', icon: 'help-circle',
    theory: ['DO para I, you, we, they: "Do you live here?".', 'DOES para he, she, it: "Does he work here?". O verbo principal VOLTA para a forma base (sem -s)!'],
    items: [
      { type: 'multiple-choice', prompt: 'Como perguntar "Ele mora no Brasil?"', options: ['Does he live in Brazil?', 'Does he lives in Brazil?', 'Do he live in Brazil?', 'Is he live in Brazil?'], ans: 'Does he live in Brazil?', exp: 'Com Does o verbo principal fica base: "live" (não "lives").' },
      { type: 'fill-blank', prompt: 'Complete: "_____ you study English every day?"', options: ['Do', 'Does', 'Are', 'Is'], ans: 'Do', exp: 'Do you study...?' },
      { type: 'word-order', prompt: 'Monte a pergunta no Simple Present:', options: ['she', 'work', 'Does', 'here?'], ans: 'Does she work here?', exp: 'Does she work here?' },
      { type: 'listening', prompt: 'Ouça a pergunta com auxiliar:', audio: 'Do you know where the nearest bank is?', options: ['Do you know where the nearest bank is?', 'Do you know where the train station is?', 'Does he know where the nearest bank is?', 'Do you have the address of the bank?'], ans: 'Do you know where the nearest bank is?', exp: 'Do you know...' },
      { type: 'translate', prompt: 'Traduza: "Você gosta de comida italiana?"', options: ['Do you like Italian food?', 'Are you like Italian food?', 'Does you like Italian food?', 'You like Italian food?'], ans: 'Do you like Italian food?', exp: 'Do you like Italian food?' },
      { type: 'multiple-choice', prompt: 'Qual pergunta contém um erro comum?', options: ['Does she likes chocolate?', 'Does she like chocolate?', 'Do they like chocolate?', 'Do you like chocolate?'], ans: 'Does she likes chocolate?', exp: 'Nunca use "likes" com "Does".' },
      { type: 'word-order', prompt: 'Organize a pergunta com WHERE:', options: ['he', 'does', 'Where', 'live?'], ans: 'Where does he live?', exp: 'Where does he live?' },
      { type: 'listening', prompt: 'Ouça:', audio: 'What time does the train arrive?', options: ['What time does the train arrive?', 'What time does the bus arrive?', 'What time does the plane leave?', 'When does the train arrive?'], ans: 'What time does the train arrive?', exp: 'What time does the train arrive?' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Do you speak English?"', audio: 'Do you speak English', ans: 'Do you speak English', hint: '/duː juː spiːk ˈɪŋ.ɡlɪʃ/', exp: 'Perfeita clareza!' },
      { type: 'multiple-choice', prompt: 'Qual auxiliar usamos para a pergunta "_____ your brother have a car?"', options: ['Does', 'Do', 'Is', 'Has'], ans: 'Does', exp: 'Your brother (he) -> Does.' }
    ]
  },
  // 23
  {
    num: 23, title: 'Respostas Curtas no Presente', subtitle: 'Yes, I do / No, he doesn\'t',
    obj: 'Responder perguntas de sim ou não com DO e DOES.',
    type: 'lesson', icon: 'check-square',
    theory: ['"Do you speak English? Yes, I do / No, I don\'t."', '"Does she work here? Yes, she does / No, she doesn\'t."'],
    items: [
      { type: 'multiple-choice', prompt: 'Como responder afirmativamente a "Do you live here?" de forma curta?', options: ['Yes, I do.', 'Yes, I live.', 'Yes, I am.', 'Yes, I does.'], ans: 'Yes, I do.', exp: 'Yes, I do.' },
      { type: 'fill-blank', prompt: 'Complete a resposta curta negativa: "Does he speak Spanish? No, he _____."', options: ['doesn\'t', 'don\'t', 'isn\'t', 'not does'], ans: 'doesn\'t', exp: 'No, he doesn\'t.' },
      { type: 'word-order', prompt: 'Monte a resposta curta afirmativa:', options: ['do.', 'they', 'Yes,'], ans: 'Yes, they do.', exp: 'Yes, they do.' },
      { type: 'listening', prompt: 'Ouça o par pergunta e resposta:', audio: 'Do you work on weekends? No, I don\'t.', options: ['Do you work on weekends? No, I don\'t.', 'Do you study on weekends? Yes, I do.', 'Does he work on weekends? No, he doesn\'t.', 'Do they work on weekends? Yes, they do.'], ans: 'Do you work on weekends? No, I don\'t.', exp: 'No, I don\'t.' },
      { type: 'translate', prompt: 'Traduza: "Ela gosta de café? Sim, gosta."', options: ['Does she like coffee? Yes, she does.', 'Does she like coffee? Yes, she likes.', 'Is she like coffee? Yes, she is.', 'Do she like coffee? Yes, she do.'], ans: 'Does she like coffee? Yes, she does.', exp: 'Yes, she does.' },
      { type: 'multiple-choice', prompt: 'Qual resposta curta está INCORRETA para "Do you have pets?"', options: ['Yes, I have.', 'Yes, I do.', 'No, I don\'t.', 'No, I do not.'], ans: 'Yes, I have.', exp: 'Em inglês não se responde "Yes, I have" para perguntas com Do.' },
      { type: 'word-order', prompt: 'Organize a resposta negativa:', options: ['she', 'No,', 'doesn\'t.'], ans: 'No, she doesn\'t.', exp: 'No, she doesn\'t.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'Does your sister live with you? Yes, she does.', options: ['Does your sister live with you? Yes, she does.', 'Does your brother live with you? No, he doesn\'t.', 'Does your mother live with you? Yes, she does.', 'Do your parents live with you? Yes, they do.'], ans: 'Does your sister live with you? Yes, she does.', exp: 'Yes, she does.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "Yes, I do!"', audio: 'Yes I do', ans: 'Yes I do', hint: '/jes aɪ duː/', exp: 'Perfeito!' },
      { type: 'multiple-choice', prompt: '"Do they study at night?" Resposta negativa:', options: ['No, they don\'t.', 'No, they doesn\'t.', 'No, they aren\'t.', 'No, they not.'], ans: 'No, they don\'t.', exp: 'No, they don\'t.' }
    ]
  },
  // 24
  {
    num: 24, title: 'Advérbios de Frequência', subtitle: 'Always, Usually, Often, Sometimes, Never',
    obj: 'Indicar a frequência de ações cotidianas na posição correta.',
    type: 'lesson', icon: 'repeat',
    theory: ['Posição: ANTES do verbo comum ("I always eat breakfast"), mas DEPOIS do To Be ("He is always late").', 'Never já é negativo (não use "don\'t never").'],
    items: [
      { type: 'multiple-choice', prompt: 'Onde colocar o advérbio "always" na frase "I drink coffee"?', options: ['I always drink coffee.', 'Always I drink coffee.', 'I drink always coffee.', 'I drink coffee always.'], ans: 'I always drink coffee.', exp: 'Antes do verbo principal: I always drink coffee.' },
      { type: 'fill-blank', visualEmoji: '⏰', prompt: 'Complete: "He is _____ late for work, he is very punctual."', options: ['never', 'always', 'usually', 'often'], ans: 'never', exp: 'Never = nunca.' },
      { type: 'word-order', prompt: 'Monte a frase com advérbio e To Be:', options: ['friendly.', 'is', 'always', 'She', 'very'], ans: 'She is always very friendly.', exp: 'Depois do To Be: She is always.' },
      { type: 'listening', prompt: 'Ouça a frequência:', audio: 'I usually go to the gym on Tuesday and Thursday.', options: ['I usually go to the gym on Tuesday and Thursday.', 'I always go to the gym on Monday and Friday.', 'I never go to the gym during the week.', 'I sometimes go running on the weekend.'], ans: 'I usually go to the gym on Tuesday and Thursday.', exp: 'I usually go...' },
      { type: 'translate', prompt: 'Traduza: "Nós às vezes jantamos fora."', options: ['We sometimes have dinner out.', 'We have sometimes dinner out.', 'Sometimes we are dinner out.', 'We dinner out sometimes.'], ans: 'We sometimes have dinner out.', exp: 'We sometimes have dinner out.' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um erro com "never"?', options: ['I don\'t never eat meat.', 'I never eat meat.', 'He never drinks alcohol.', 'They are never late.'], ans: 'I don\'t never eat meat.', exp: 'Dupla negativa: use apenas "I never eat meat".' },
      { type: 'word-order', prompt: 'Organize a rotina:', options: ['at', 'often', 'They', 'eat', 'restaurant.', 'that'], ans: 'They often eat at that restaurant.', exp: 'They often eat at that restaurant.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'My boss is never satisfied with average work.', options: ['My boss is never satisfied with average work.', 'My boss is always satisfied with our work.', 'My teacher is never angry with students.', 'My father is usually happy with his job.'], ans: 'My boss is never satisfied with average work.', exp: 'is never satisfied.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "I always study English"', audio: 'I always study English', ans: 'I always study English', hint: '/aɪ ˈɔːl.weɪz ˈstʌd.i ˈɪŋ.ɡlɪʃ/', exp: 'Excelente!' },
      { type: 'multiple-choice', prompt: 'Qual advérbio indica aproximadamente 80% de frequência?', options: ['Usually', 'Never', 'Rarely', 'Always'], ans: 'Usually', exp: 'Usually = geralmente / habitualmente.' }
    ]
  },
  // 25
  {
    num: 25, title: 'Preposições de Tempo: IN, ON, AT', subtitle: 'In July, On Monday, At 5 o\'clock',
    obj: 'Usar as preposições temporais com precisão milimétrica.',
    type: 'lesson', icon: 'calendar',
    theory: ['AT: horas e momentos exatos (at 5 pm, at night, at midnight).', 'ON: dias da semana e datas específicas (on Monday, on May 10th).', 'IN: meses, anos, estações e períodos do dia (in July, in 2026, in the morning).'],
    items: [
      { type: 'multiple-choice', prompt: 'Qual preposição usamos com dias da semana ("_____ Friday")?', options: ['ON', 'IN', 'AT', 'BY'], ans: 'ON', exp: 'Dias da semana = ON.' },
      { type: 'fill-blank', visualEmoji: '🌙', prompt: 'Atenção à exceção noturna: "I like to read _____ night."', options: ['at', 'in', 'on', 'by'], ans: 'at', exp: 'Dizemos "in the morning", mas "at night"!' },
      { type: 'word-order', prompt: 'Monte a frase com horário:', options: ['meeting', 'starts', 'nine.', 'The', 'at'], ans: 'The meeting starts at nine.', exp: 'Horários levam AT.' },
      { type: 'listening', prompt: 'Ouça as preposições de tempo:', audio: 'The conference will take place in September.', options: ['The conference will take place in September.', 'The conference will take place on September 5th.', 'The meeting will take place at seven o\'clock.', 'The class will take place in November.'], ans: 'The conference will take place in September.', exp: 'in September (mês sem data).' },
      { type: 'translate', prompt: 'Traduza: "Minha aula é na segunda-feira de manhã."', options: ['My class is on Monday morning.', 'My class is in Monday morning.', 'My class is at Monday morning.', 'My class is by Monday morning.'], ans: 'My class is on Monday morning.', exp: 'Dias da semana levam ON.' },
      { type: 'multiple-choice', prompt: 'Qual combinação está INCORRETA?', options: ['In Monday', 'On Monday', 'At 4 o\'clock', 'In 2026'], ans: 'In Monday', exp: 'O correto é ON Monday.' },
      { type: 'word-order', prompt: 'Organize a data completa (leva ON):', options: ['was', 'born', 'on', 'He', '15th.', 'July'], ans: 'He was born on July 15th.', exp: 'Data completa com dia leva ON.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'We always wake up early in the morning.', options: ['We always wake up early in the morning.', 'We always wake up late in the afternoon.', 'They usually wake up early on Monday.', 'I always go to bed early at night.'], ans: 'We always wake up early in the morning.', exp: 'in the morning.' },
      { type: 'speaking-repeat', prompt: 'Fale no microfone: "See you on Monday!"', audio: 'See you on Monday', ans: 'See you on Monday', hint: '/siː juː ɑːn ˈmʌn.deɪ/', exp: 'Muito bem!' },
      { type: 'multiple-choice', prompt: 'Qual preposição usamos para os anos ("_____ 2026")?', options: ['IN', 'ON', 'AT', 'TO'], ans: 'IN', exp: 'Anos levam IN: in 2026.' }
    ]
  },
  // 26
  {
    num: 26, title: 'Rotinas Diárias & Frequência', subtitle: 'Integrando o dia a dia completo',
    obj: 'Narrar uma rotina completa do amanhecer ao anoitecer.',
    type: 'lesson', icon: 'sun',
    theory: ['Integrando Simple Present, horários e advérbios: "First I wake up, then I have breakfast, and at 8 I leave for work".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '🚿', prompt: 'Como se diz "Tomar banho de chuveiro" em inglês?', options: ['Take a shower', 'Make a bath', 'Do a shower', 'Have a clean'], ans: 'Take a shower', exp: 'Take a shower (ou have a shower).' },
      { type: 'fill-blank', visualEmoji: '🥪', prompt: 'Complete: "I usually _____ lunch at noon with my colleagues."', options: ['have', 'do', 'make', 'cooks'], ans: 'have', exp: 'Have lunch = almoçar.' },
      { type: 'word-order', prompt: 'Monte a sequência da rotina:', options: ['teeth', 'brush', 'my', 'breakfast.', 'I', 'after'], ans: 'I brush my teeth after breakfast.', exp: 'I brush my teeth after breakfast.' },
      { type: 'listening', prompt: 'Ouça o relato da rotina:', audio: 'After work, I usually go to the supermarket and then go home.', options: ['After work, I usually go to the supermarket and then go home.', 'After school, I usually go to the gym and then study.', 'Before work, I always have coffee and read the news.', 'After work, I usually meet my friends for dinner.'], ans: 'After work, I usually go to the supermarket and then go home.', exp: 'After work...' },
      { type: 'translate', prompt: 'Traduza: "Eu vou para a cama às 23h."', options: ['I go to bed at eleven o\'clock.', 'I go to sleep on eleven o\'clock.', 'I sleep myself at eleven o\'clock.', 'I am sleeping in eleven o\'clock.'], ans: 'I go to bed at eleven o\'clock.', exp: 'go to bed at...' },
      { type: 'multiple-choice', prompt: 'Como se diz "Vestir-se" na rotina matinal?', options: ['Get dressed', 'Put dressed', 'Make dressed', 'Do clothes'], ans: 'Get dressed', exp: 'Get dressed = vestir-se.' },
      { type: 'word-order', prompt: 'Organize a rotina noturna:', options: ['book', 'read', 'before', 'sleeping.', 'I', 'a'], ans: 'I read a book before sleeping.', exp: 'I read a book before sleeping.' },
      { type: 'listening', prompt: 'Ouça:', audio: 'She always leaves the house at seven thirty.', options: ['She always leaves the house at seven thirty.', 'She always leaves the office at five thirty.', 'He always leaves the house at eight thirty.', 'She usually arrives home at seven thirty.'], ans: 'She always leaves the house at seven thirty.', exp: 'leaves the house at seven thirty.' },
      { type: 'speaking-repeat', prompt: 'Fale sua rotina: "I wake up, have breakfast and study"', audio: 'I wake up have breakfast and study', ans: 'I wake up have breakfast and study', hint: '/aɪ weɪk ʌp hæv ˈbrek.fəst ənd ˈstʌd.i/', exp: 'Perfeita fluência!' },
      { type: 'multiple-choice', prompt: 'Qual expressão significa "Sair de casa"?', options: ['Leave the house', 'Go out of house', 'Exit home', 'Take off house'], ans: 'Leave the house', exp: 'Leave the house.' }
    ]
  },
  // 27
  {
    num: 27, title: 'Verbos Want, Need & Have To', subtitle: 'I want to go, I need to study, I have to work',
    obj: 'Expressar desejos (want), necessidades (need) e obrigações (have to).',
    type: 'lesson', icon: 'flag',
    theory: ['Todos exigem "TO" antes do próximo verbo: "I want TO sleep", "I need TO talk", "I have TO go".'],
    items: [
      { type: 'multiple-choice', prompt: 'Como dizer "Eu preciso estudar para a prova de amanhã"?', options: ['I need to study for tomorrow\'s test.', 'I need study for tomorrow\'s test.', 'I need studying for tomorrow\'s test.', 'I am need to study for tomorrow\'s test.'], ans: 'I need to study for tomorrow\'s test.', exp: 'Need + TO + verbo.' },
      { type: 'fill-blank', visualEmoji: '✈️', prompt: 'Complete o desejo de viajar: "I _____ to travel to London next vacation."', options: ['want', 'must', 'can', 'should'], ans: 'want', exp: 'Want to travel.' },
      { type: 'word-order', prompt: 'Monte a frase de obrigação:', options: ['early', 'tomorrow.', 'have', 'to', 'wake', 'up', 'I'], ans: 'I have to wake up early tomorrow.', exp: 'I have to wake up early tomorrow.' },
      { type: 'listening', prompt: 'Ouça a necessidade:', audio: 'We need to talk about the project immediately.', options: ['We need to talk about the project immediately.', 'We want to talk about the project tomorrow.', 'She has to talk to the manager immediately.', 'They need to finish the project today.'], ans: 'We need to talk about the project immediately.', exp: 'We need to talk...' },
      { type: 'translate', prompt: 'Traduza: "Ele tem que trabalhar aos sábados."', options: ['He has to work on Saturdays.', 'He have to work on Saturdays.', 'He has work on Saturdays.', 'He needs work on Saturdays.'], ans: 'He has to work on Saturdays.', exp: 'He has to work.' },
      { type: 'multiple-choice', prompt: 'Qual frase contém um ERRO?', options: ['I want go home now.', 'I want to go home now.', 'I need to sleep.', 'I have to study.'], ans: 'I want go home now.', exp: 'Falta o "to": I want TO go.' },
      { type: 'word-order', prompt: 'Organize a pergunta:', options: ['buy', 'Do', 'you', 'want', 'this?', 'to'], ans: 'Do you want to buy this?', exp: 'Do you want to buy this?' },
      { type: 'listening', prompt: 'Ouça:', audio: 'She doesn\'t have to work on Sundays.', options: ['She doesn\'t have to work on Sundays.', 'She doesn\'t want to work on Saturdays.', 'He doesn\'t have to study on weekends.', 'She has to work on Sundays.'], ans: 'She doesn\'t have to work on Sundays.', exp: 'doesn\'t have to work.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "I have to go now"', audio: 'I have to go now', ans: 'I have to go now', hint: '/aɪ hæv tuː ɡoʊ naʊ/', exp: 'Frase super comum no dia a dia!' },
      { type: 'multiple-choice', prompt: 'Qual verbo expressa OBRIGAÇÃO ou NECESSIDADE EXTERNA?', options: ['Have to', 'Want to', 'Like to', 'Hope to'], ans: 'Have to', exp: 'Have to = ter que (obrigação).' }
    ]
  },
  // 28
  {
    num: 28, title: 'O Modo Imperativo', subtitle: 'Listen!, Be careful!, Don\'t touch!',
    obj: 'Dar instruções, alertas e comandos diretos.',
    type: 'lesson', icon: 'alert-triangle',
    theory: ['Comece direto com a forma base do verbo: "Listen!", "Come here!", "Open the door!". Negativa: use "Don\'t".'],
    items: [
      { type: 'multiple-choice', visualEmoji: '⚠️', prompt: 'Como dar o alerta "Tenha cuidado!" em inglês?', options: ['Be careful!', 'Have careful!', 'Are careful!', 'Do careful!'], ans: 'Be careful!', exp: 'Be careful!' },
      { type: 'fill-blank', visualEmoji: '🚫', prompt: 'Complete a proibição: "_____ touch that hot plate!"', options: ['Don\'t', 'Not', 'No', 'Doesn\'t'], ans: 'Don\'t', exp: 'Imperativo negativo usa Don\'t.' },
      { type: 'word-order', prompt: 'Monte o comando educado:', options: ['your', 'please.', 'seatbelt,', 'Fasten'], ans: 'Fasten your seatbelt, please.', exp: 'Fasten your seatbelt, please.' },
      { type: 'listening', prompt: 'Ouça a instrução:', audio: 'Please turn off the lights before leaving.', options: ['Please turn off the lights before leaving.', 'Please turn on the lights in the room.', 'Please close the windows before leaving.', 'Please lock the front door carefully.'], ans: 'Please turn off the lights before leaving.', exp: 'turn off the lights.' },
      { type: 'translate', prompt: 'Traduza: "Não se preocupe, tudo vai ficar bem."', options: ['Don\'t worry, everything will be fine.', 'No worry, everything will be good.', 'Not worry, all will be fine.', 'Doesn\'t worry, everything goes well.'], ans: 'Don\'t worry, everything will be fine.', exp: 'Don\'t worry.' },
      { type: 'multiple-choice', prompt: 'Qual frase está no modo imperativo?', options: ['Open your book to page 10.', 'You open your book to page 10.', 'Are you opening your book?', 'She opens her book.'], ans: 'Open your book to page 10.', exp: 'Começa direto pelo verbo.' },
      { type: 'word-order', prompt: 'Organize a instrução:', options: ['listen', 'carefully.', 'and', 'Sit', 'down'], ans: 'Sit down and listen carefully.', exp: 'Sit down and listen carefully.' },
      { type: 'listening', prompt: 'Ouça o aviso:', audio: 'Watch your step while boarding the train.', options: ['Watch your step while boarding the train.', 'Watch your bags while waiting for the train.', 'Mind the gap between the train and platform.', 'Keep your ticket until you exit the station.'], ans: 'Watch your step while boarding the train.', exp: 'Watch your step.' },
      { type: 'speaking-repeat', prompt: 'Diga no microfone: "Don\'t worry, be happy!"', audio: 'Don\'t worry be happy', ans: 'Don\'t worry be happy', hint: '/doʊnt ˈwɜːr.i biː ˈhæp.i/', exp: 'Perfeito e clássico!' },
      { type: 'multiple-choice', prompt: 'Para suavizar um imperativo e torná-lo educado, adicionamos:', options: ['Please', 'Now', 'Must', 'Quickly'], ans: 'Please', exp: '"Please" torna qualquer comando educado.' }
    ]
  },
  // 29
  {
    num: 29, title: 'Simulado Pré-Boss: O Desafio da Sintaxe', subtitle: 'Revisão integrada de todas as estruturas do Mundo 2',
    obj: 'Testar domínio de toda a gramática estrutural do nível A2.',
    type: 'review', icon: 'award',
    theory: ['Grande simulado do Mundo 2! Reúna tudo sobre To Be, Simple Present, Continuous, Modais e Preposições.'],
    items: [
      { type: 'multiple-choice', prompt: '[Simulado] "She _____ to work by train every morning."', options: ['goes', 'go', 'is go', 'going'], ans: 'goes', exp: '3ª pessoa singular: go -> goes.' },
      { type: 'fill-blank', prompt: '[Simulado] "Listen! The birds _____ outside."', options: ['are singing', 'sing', 'is singing', 'sings'], ans: 'are singing', exp: 'Present Continuous: are singing.' },
      { type: 'word-order', prompt: '[Simulado] Reorganize a pergunta:', options: ['you', 'Does', 'sister', 'live', 'with?', 'your'], ans: 'Does your sister live with you?', exp: 'Does your sister live with you?' },
      { type: 'listening', prompt: '[Simulado] Ouça o diálogo completo:', audio: 'Can you tell me how much this costs? It costs fifty dollars.', options: ['Can you tell me how much this costs? It costs fifty dollars.', 'Can you tell me how many this costs? It costs fifteen dollars.', 'Could you show me this shirt? It is forty dollars.', 'How much are these shoes? They are fifty dollars.'], ans: 'Can you tell me how much this costs? It costs fifty dollars.', exp: 'fifty dollars ($50).' },
      { type: 'multiple-choice', prompt: '[Simulado] "I like him, _____ I don\'t see him often."', options: ['but', 'so', 'because', 'and'], ans: 'but', exp: 'but = mas.' },
      { type: 'translate', prompt: '[Simulado] Traduza: "Aquele carro não é dele, é nosso."', options: ['That car is not his, it is ours.', 'That car is not he, it is our.', 'That car is not of him, it is us.', 'That car is no his, it is ours.'], ans: 'That car is not his, it is ours.', exp: 'his / ours.' },
      { type: 'fill-blank', prompt: '[Simulado] "He _____ drive a car, he has a driver\'s license."', options: ['can', 'could to', 'cans', 'is can'], ans: 'can', exp: 'can drive.' },
      { type: 'word-order', prompt: '[Simulado] Monte a frase com advérbio de frequência:', options: ['late.', 'is', 'never', 'He', 'work', 'for'], ans: 'He is never late for work.', exp: 'He is never late for work.' },
      { type: 'listening', prompt: '[Simulado] Ouça:', audio: 'Would you like some tea or would you prefer coffee?', options: ['Would you like some tea or would you prefer coffee?', 'Do you have some tea or do you want coffee?', 'Would you like a cup of milk or coffee?', 'Could you bring some tea and coffee?'], ans: 'Would you like some tea or would you prefer coffee?', exp: 'Would you like...' },
      { type: 'speaking-repeat', prompt: '[Simulado] Fale no microfone: "I am ready to conquer the boss battle!"', audio: 'I am ready to conquer the boss battle', ans: 'I am ready to conquer the boss battle', hint: '/aɪ æm ˈred.i tuː ˈkɑːŋ.kər ðə bɔːs ˈbæt.əl/', exp: 'Você está no nível dos mestres!' },
      { type: 'multiple-choice', prompt: '[Simulado] Qual frase expressa existência correta no plural?', options: ['There are twenty people waiting outside.', 'Has twenty people waiting outside.', 'Have twenty people waiting outside.', 'There is twenty people waiting outside.'], ans: 'There are twenty people waiting outside.', exp: 'There are twenty people.' },
      { type: 'translate', prompt: '[Simulado] "Por favor, tenha cuidado com o piso molhado."', options: ['Please be careful with the wet floor.', 'Please have careful with wet floor.', 'Please do careful with the floor.', 'Make careful with the wet floor.'], ans: 'Please be careful with the wet floor.', exp: 'Please be careful.' }
    ]
  },
  // 30: Grand Boss World 2 (15 questions)
  {
    num: 30, title: 'O Guardião do Mundo 2: Mestre das Estruturas', subtitle: 'Boss Final de Proficiência A2',
    obj: 'Provar maestria absoluta na construção de frases, tempos presentes e modais.',
    type: 'boss', icon: 'crown',
    theory: ['A grande batalha final do Mundo 2! Vença as 15 provas do Guardião das Estruturas para avançar ao Mundo 3!'],
    items: [
      { type: 'multiple-choice', prompt: '[Chefe A2] "Why _____ he always wake up so early?"', options: ['does', 'do', 'is', 'has'], ans: 'does', exp: 'Com "he" usamos does.' },
      { type: 'word-order', prompt: '[Chefe A2] Monte o desafio estrutural:', options: ['is', 'English', 'speaking', 'fluently.', 'She', 'now'], ans: 'She is speaking English fluently now.', exp: 'She is speaking English fluently now.' },
      { type: 'listening', prompt: '[Chefe A2] Ouça o enigma do Guardião:', audio: 'Congratulations, traveller! You have mastered the rules of sentences and daily speech.', options: ['Congratulations, traveller! You have mastered the rules of sentences and daily speech.', 'Welcome traveller! You need more grammar practice.', 'Goodbye traveller! Return to World One now.', 'Listen traveller! The test is too difficult.'], ans: 'Congratulations, traveller! You have mastered the rules of sentences and daily speech.', exp: 'Enigma do Guardião superado!' },
      { type: 'fill-blank', prompt: '[Chefe A2] "I don\'t have _____ questions about this topic."', options: ['any', 'some', 'no', 'none'], ans: 'any', exp: 'Negativa = any.' },
      { type: 'translate', prompt: '[Chefe A2] Traduza: "Você poderia me dar uma informação, por favor?"', options: ['Could you give me some information, please?', 'Could you give me an information, please?', 'Can you give me informations, please?', 'Would you give me an advice, please?'], ans: 'Could you give me some information, please?', exp: 'Information é incontável -> some information.' },
      { type: 'multiple-choice', visualEmoji: '👑', prompt: '[Chefe A2] Qual frase NÃO contém nenhum erro gramatical?', options: ['She always drives her car to work.', 'She always drive her car to work.', 'She is drive her car to work.', 'She drives always her car to work.'], ans: 'She always drives her car to work.', exp: 'Sujeito + advérbio + verbo com -s.' },
      { type: 'word-order', prompt: '[Chefe A2] Organize a sentença complexa:', options: ['is', 'expensive,', 'it', 'worth', 'although', 'it.', 'Car', 'the'], ans: 'The car is expensive, although it is worth it.', exp: 'The car is expensive, although it is worth it.' },
      { type: 'listening', prompt: '[Chefe A2] Ouça o comando do Boss:', audio: 'Fasten your seatbelts, the journey to World Three begins now.', options: ['Fasten your seatbelts, the journey to World Three begins now.', 'Open your books, the lesson of World Two begins now.', 'Watch your step, the train to World Three is leaving.', 'Listen carefully, the test is not over yet.'], ans: 'Fasten your seatbelts, the journey to World Three begins now.', exp: 'Rumo ao Mundo 3!' },
      { type: 'fill-blank', prompt: '[Chefe A2] "How _____ money do you need for the trip?"', options: ['much', 'many', 'lot', 'few'], ans: 'much', exp: 'Money é incontável -> How much.' },
      { type: 'speaking-repeat', prompt: '[Chefe A2] Declare sua vitória: "I am the master of English structures!"', audio: 'I am the master of English structures', ans: 'I am the master of English structures', hint: '/aɪ æm ðə ˈmæs.tər əv ˈɪŋ.ɡlɪʃ ˈstrʌk.tʃərz/', exp: 'Você conquistou o Guardião do Mundo 2!' },
      { type: 'multiple-choice', prompt: '[Chefe A2] Qual é o plural correto de "MOUSE" e "FOOT"?', options: ['Mice and Feet', 'Mouses and Foots', 'Mices and Feets', 'Mouse and Foot'], ans: 'Mice and Feet', exp: 'Mice e Feet.' },
      { type: 'word-order', prompt: '[Chefe A2] Monte a pergunta de preferência:', options: ['dinner?', 'What', 'would', 'for', 'you', 'like'], ans: 'What would you like for dinner?', exp: 'What would you like for dinner?' },
      { type: 'translate', prompt: '[Chefe A2] "Há dois novos alunos na nossa turma."', options: ['There are two new students in our class.', 'Has two new students in our class.', 'Have two new students in our class.', 'There is two new students in our class.'], ans: 'There are two new students in our class.', exp: 'There are two new students...' },
      { type: 'listening', prompt: '[Chefe A2] Ouça a fala final:', audio: 'Practice every single day and your fluency will shine.', options: ['Practice every single day and your fluency will shine.', 'Study hard every day and you will pass.', 'Listen carefully every day to improve.', 'Read books every day and learn new words.'], ans: 'Practice every single day and your fluency will shine.', exp: 'Mensagem inspiradora do Guardião!' },
      { type: 'multiple-choice', prompt: '[Chefe A2] Qual pronome objeto completa: "We love our teacher, and she loves _____ too."', options: ['us', 'we', 'our', 'ours'], ans: 'us', exp: 'Objeto de We = us.' }
    ]
  }
];

// Now let's transform w2Profiles into the standard Phase[] format
const phases = w2Profiles.map(p => {
  return {
    id: `w2-p${p.num}`,
    worldId: 2,
    phaseNumber: p.num,
    title: p.title,
    subtitle: p.subtitle,
    pedagogicalObjective: p.obj,
    type: p.type,
    icon: p.icon,
    cefrLevel: 'A2',
    theorySummary: p.theory,
    xpReward: p.type === 'boss' ? 60 : p.type === 'chest' ? 50 : 40,
    gemsReward: p.type === 'boss' ? 25 : p.type === 'chest' ? 30 : 10,
    exercises: p.items.map((item, idx) => {
      const ex = {
        id: `w2-p${p.num}-e${idx + 1}`,
        type: item.type,
        prompt: item.prompt,
        correctAnswer: item.ans,
        explanation: item.exp,
        skillCategory: item.type === 'speaking-repeat' ? 'pronunciation' : item.type === 'listening' ? 'listening' : item.type === 'word-order' ? 'grammar' : item.type === 'translate' ? 'reading' : 'vocabulary'
      };
      if (item.visualEmoji) ex.visualEmoji = item.visualEmoji;
      if (item.audio) ex.audioPhrase = item.audio;
      if (item.hint) ex.phoneticHint = item.hint;
      if (item.options) ex.options = item.options;
      return ex;
    })
  };
});

const outputTs = `import { Phase } from '../types';

export const WORLD_2_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

fs.writeFileSync('src/data/world2Phases.ts', outputTs, 'utf8');
console.log(`Successfully generated World 2: ${phases.length} phases, total exercises: ${phases.reduce((acc, p) => acc + p.exercises.length, 0)}`);
