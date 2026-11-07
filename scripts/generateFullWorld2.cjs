// Master Generator for World 2: all 30 phases, 8-10 exercises each (11 on chest, 15 on boss)
const fs = require('fs');

const w2AllPhases = [
  // 1 to 10 (we saw them)
  // Let's import or define the phase array:
];

// Let's create a builder that has the complete structured data for all 30 phases
const buildW2 = () => {
  const phases = [];

  const rawPhases = [
    // 1: To Be
    {
      num: 1, title: 'O Poderoso Verbo TO BE em Ação', subtitle: 'Afirmativas, contrações e descrições',
      obj: 'Consolidar o verbo To Be em contextos descritivos reais.',
      type: 'lesson', icon: 'book',
      theory: ['O verbo TO BE significa "ser" ou "estar": I am, You are, He/She/It is, We/They are.', 'Contrações: I\'m, You\'re, He\'s, She\'s, It\'s, We\'re, They\'re.', 'Usado para profissões, sentimentos, origens e locais.'],
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
    // 2: Object Pronouns
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
    // 3: Adjetivos Possessivos
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
    // 4: Pronomes Possessivos
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
    // 5: Demonstrativos
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
    // 6: Artigo THE
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
    // 7: Plurais Irregulares
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
    // 8: There Is & There Are
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
    // 9: Some, Any & No
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
    // 11: Contáveis e Incontáveis
    {
      num: 11, title: 'Substantivos Contáveis e Incontáveis', subtitle: 'Countable vs Uncountable nouns',
      obj: 'Diferenciar substantivos contáveis (livros, maçãs) de incontáveis (água, dinheiro, informação).',
      type: 'lesson', icon: 'coffee',
      theory: ['Contáveis podem ser numerados e têm plural: one car, two cars.', 'Incontáveis são substâncias, conceitos ou massas sem plural direto: water, bread, money, information, advice.'],
      items: [
        { type: 'multiple-choice', visualEmoji: '💧', prompt: 'Qual substantivo é INCONTÁVEL em inglês?', options: ['Water', 'Bottle', 'Apple', 'Coin'], ans: 'Water', exp: 'Water não tem plural direto ("waters"); dizemos "two glasses of water".' },
        { type: 'fill-blank', visualEmoji: '💰', prompt: 'Atenção: "Money" é incontável! Complete: "How much _____ do you have?"', options: ['money', 'moneys', 'dollar', 'coin'], ans: 'money', exp: 'Money é incontável (já dollar e coin são contáveis).' },
        { type: 'word-order', prompt: 'Monte a frase com substantivo incontável:', options: ['need', 'some', 'I', 'information,', 'please.'], ans: 'I need some information, please.', exp: '"Information" nunca leva -s em inglês!' },
        { type: 'listening', prompt: 'Ouça o substantivo:', audio: 'Could you give me some good advice?', options: ['Could you give me some good advice?', 'Could you give me some good advices?', 'Could you give me an advice?', 'Could you give me some good news?'], ans: 'Could you give me some good advice?', exp: 'Advice é incontável (nunca "advices").' },
        { type: 'translate', prompt: 'Traduza: "Eu comprei pão."', options: ['I bought some bread.', 'I bought a bread.', 'I bought many breads.', 'I bought two breads.'], ans: 'I bought some bread.', exp: 'Bread é incontável -> some bread (ou a loaf of bread).' },
        { type: 'multiple-choice', prompt: 'Qual frase contém um erro gramatical?', options: ['She gave me two advices.', 'She gave me two pieces of advice.', 'I drink water every day.', 'We need more information.'], ans: 'She gave me two advices.', exp: '"Advices" não existe no inglês padrão.' },
        { type: 'word-order', prompt: 'Organize a frase de compra:', options: ['two', 'I', 'bottles', 'bought', 'water.', 'of'], ans: 'I bought two bottles of water.', exp: 'Two bottles of water.' },
        { type: 'listening', prompt: 'Ouça:', audio: 'There is too much sugar in this coffee.', options: ['There is too much sugar in this coffee.', 'There are too many sugar in this coffee.', 'There is some milk in this coffee.', 'There is no sugar in this tea.'], ans: 'There is too much sugar in this coffee.', exp: 'Sugar é incontável -> much sugar.' },
        { type: 'speaking-repeat', prompt: 'Fale no microfone: "A piece of information"', audio: 'A piece of information', ans: 'A piece of information', hint: '/ə piːs əv ˌɪn.fɚˈmeɪ.ʃən/', exp: 'Excelente!' },
        { type: 'multiple-choice', prompt: 'Qual é a forma contável para falar de pão?', options: ['A slice of bread / a loaf of bread', 'A bread', 'One bread', 'Two breads'], ans: 'A slice of bread / a loaf of bread', exp: 'Uma fatia de pão ou um filão de pão.' }
      ]
    },
    // 12: How Much vs How Many
    {
      num: 12, title: 'How Much vs How Many', subtitle: 'Perguntando quantidades e preços',
      obj: 'Usar How Much para incontáveis e preços, e How Many para contáveis no plural.',
      type: 'lesson', icon: 'dollar-sign',
      theory: ['HOW MUCH: coisas incontáveis ("How much water?") e preços ("How much is it?").', 'HOW MANY: coisas contáveis no plural ("How many books do you have?").'],
      items: [
        { type: 'multiple-choice', visualEmoji: '🏷️', prompt: 'Como se pergunta "Quanto custa isto?" em inglês?', options: ['How much is this?', 'How many is this?', 'How much are this?', 'What price is this?'], ans: 'How much is this?', exp: 'Preços usam sempre HOW MUCH.' },
        { type: 'fill-blank', visualEmoji: '📚', prompt: 'Complete com contável no plural: "_____ books did you read this year?"', options: ['How many', 'How much', 'How long', 'How often'], ans: 'How many', exp: 'Books é contável -> How many.' },
        { type: 'word-order', prompt: 'Monte a pergunta sobre água:', options: ['water', 'do', 'drink?', 'How', 'much', 'you'], ans: 'How much water do you drink?', exp: 'How much water do you drink?' },
        { type: 'listening', prompt: 'Ouça e selecione a pergunta:', audio: 'How many brothers and sisters do you have?', options: ['How many brothers and sisters do you have?', 'How much brothers and sisters do you have?', 'How many friends do you have in town?', 'How much time do you have today?'], ans: 'How many brothers and sisters do you have?', exp: 'Pessoas são contáveis -> How many.' },
        { type: 'translate', prompt: 'Traduza: "Quanto tempo nós temos?"', options: ['How much time do we have?', 'How many time do we have?', 'How long time do we have?', 'How much times do we have?'], ans: 'How much time do we have?', exp: 'Tempo (tempo cronológico) é incontável -> How much time.' },
        { type: 'multiple-choice', prompt: '"How many _____ are there in the room?"', options: ['people', 'time', 'water', 'sugar'], ans: 'people', exp: 'How many exige substantivo contável no plural (people).' },
        { type: 'word-order', prompt: 'Organize a pergunta de preço no plural:', options: ['are', 'shoes?', 'How', 'those', 'much'], ans: 'How much are those shoes?', exp: 'How much are those shoes?' },
        { type: 'listening', prompt: 'Ouça o preço informado:', audio: 'This shirt costs twenty-five dollars.', options: ['This shirt costs twenty-five dollars.', 'This shirt costs thirty-five dollars.', 'This skirt costs twenty-five dollars.', 'This jacket costs forty-five dollars.'], ans: 'This shirt costs twenty-five dollars.', exp: 'twenty-five dollars ($25).' },
        { type: 'speaking-repeat', prompt: 'Fale no microfone: "How much is it?"', audio: 'How much is it', ans: 'How much is it', hint: '/haʊ mʌtʃ ɪz ɪt/', exp: 'Frase essencial em viagens!' },
        { type: 'multiple-choice', prompt: 'Complete: "How _____ sugar do you take in your coffee?"', options: ['much', 'many', 'lot', 'few'], ans: 'much', exp: 'Sugar é incontável -> much.' }
      ]
    },
    // 13: Conectores (And, But, Because, So)
    {
      num: 13, title: 'Conectores Fundamentais', subtitle: 'And, But, Because, So',
      obj: 'Ligar orações expressando adição, contraste, causa e consequência.',
      type: 'lesson', icon: 'git-commit',
      theory: ['AND = e (adição). BUT = mas (contraste). BECAUSE = porque (causa). SO = por isso/então (resultado).'],
      items: [
        { type: 'multiple-choice', prompt: 'Complete: "I studied very hard, _____ I passed the test."', options: ['so', 'because', 'but', 'and'], ans: 'so', exp: '"So" indica a consequência/resultado: estudei muito, ENTÃO passei.' },
        { type: 'fill-blank', prompt: 'Complete com contraste: "I like him, _____ I don\'t agree with him."', options: ['but', 'and', 'because', 'so'], ans: 'but', exp: '"But" expressa oposição/contraste.' },
        { type: 'word-order', prompt: 'Monte a frase com causa:', options: ['stayed', 'home', 'it', 'was', 'raining.', 'I', 'at', 'because'], ans: 'I stayed at home because it was raining.', exp: 'I stayed at home because it was raining.' },
        { type: 'listening', prompt: 'Ouça o conector:', audio: 'She was tired, so she went to sleep early.', options: ['She was tired, so she went to sleep early.', 'She was tired, but she went to sleep late.', 'She was happy, and she went to sleep early.', 'She was sick, so she stayed in bed.'], ans: 'She was tired, so she went to sleep early.', exp: 'so she went to sleep early.' },
        { type: 'translate', prompt: 'Traduza: "Eu gosto de café e chá."', options: ['I like coffee and tea.', 'I like coffee but tea.', 'I like coffee so tea.', 'I like coffee because tea.'], ans: 'I like coffee and tea.', exp: 'And = e.' },
        { type: 'multiple-choice', prompt: '"I woke up late _____ my alarm didn\'t go off." (porque)', options: ['because', 'so', 'but', 'although'], ans: 'because', exp: 'Because explica a razão.' },
        { type: 'word-order', prompt: 'Organize a frase de contraste:', options: ['tired,', 'working.', 'kept', 'He', 'was', 'he', 'but'], ans: 'He was tired, but he kept working.', exp: 'He was tired, but he kept working.' },
        { type: 'listening', prompt: 'Ouça:', audio: 'It was very cold, so I put on my coat.', options: ['It was very cold, so I put on my coat.', 'It was very hot, so I took off my coat.', 'It was raining, so I took an umbrella.', 'It was cold, but I didn\'t have a coat.'], ans: 'It was very cold, so I put on my coat.', exp: 'so I put on my coat.' },
        { type: 'speaking-repeat', prompt: 'Diga no microfone: "I like it, but it is expensive"', audio: 'I like it but it is expensive', ans: 'I like it but it is expensive', hint: '/aɪ laɪk ɪt bʌt ɪt ɪz ɪkˈspen.sɪv/', exp: 'Excelente!' },
        { type: 'multiple-choice', prompt: 'Qual conector expressa MOTIVO / CAUSA?', options: ['Because', 'So', 'And', 'Or'], ans: 'Because', exp: 'Because = porque (explicação).' }
      ]
    },
    // 14: Modal CAN
    {
      num: 14, title: 'Habilidades com o Modal CAN', subtitle: 'I can speak, I can swim',
      obj: 'Expressar habilidades, capacidades e permissões usando o verbo modal CAN.',
      type: 'lesson', icon: 'zap',
      theory: ['CAN nunca muda de forma (não leva -s com he/she/it).', 'O verbo seguinte fica sempre na forma base sem "to": "I can swim" (NUNCA "I can to swim").', 'Negativa: CANNOT ou CAN\'T. Pergunta: "Can you speak English?".'],
      items: [
        { type: 'multiple-choice', visualEmoji: '🏊‍♂️', prompt: 'Como dizer "Ela sabe nadar muito bem"?', options: ['She can swim very well.', 'She can to swim very well.', 'She cans swim very well.', 'She can swimming very well.'], ans: 'She can swim very well.', exp: 'CAN não leva -s e o verbo seguinte não leva "to".' },
        { type: 'fill-blank', visualEmoji: '🗣️', prompt: 'Complete a pergunta de habilidade: "_____ you speak English?"', options: ['Can', 'Do can', 'Are', 'Is'], ans: 'Can', exp: 'Can you speak English?' },
        { type: 'word-order', prompt: 'Monte a negativa com CAN\'T:', options: ['play', 'I', 'the', 'guitar.', 'can\'t'], ans: 'I can\'t play the guitar.', exp: 'I can\'t play the guitar.' },
        { type: 'listening', prompt: 'Ouça a habilidade:', audio: 'He can speak three languages fluently.', options: ['He can speak three languages fluently.', 'He can speak two languages fluently.', 'She can speak three languages fluently.', 'He can write three languages fluently.'], ans: 'He can speak three languages fluently.', exp: 'three languages fluently.' },
        { type: 'translate', prompt: 'Traduza: "Você pode me ajudar agora?"', options: ['Can you help me now?', 'Do you can help me now?', 'Are you help me now?', 'Can you to help me now?'], ans: 'Can you help me now?', exp: 'Can you help me now?' },
        { type: 'multiple-choice', prompt: 'Qual frase contém um ERRO comum de estudantes?', options: ['He can to drive a car.', 'He can drive a car.', 'He cannot drive a car.', 'Can he drive a car?'], ans: 'He can to drive a car.', exp: 'Nunca use "to" após o modal CAN.' },
        { type: 'word-order', prompt: 'Organize a pergunta:', options: ['come', 'party?', 'Can', 'to', 'the', 'they'], ans: 'Can they come to the party?', exp: 'Can they come to the party?' },
        { type: 'listening', prompt: 'Ouça o pedido de permissão:', audio: 'Can I open the window, please?', options: ['Can I open the window, please?', 'Can I close the door, please?', 'Could I open the box, please?', 'Can you open the car, please?'], ans: 'Can I open the window, please?', exp: 'Can I open the window, please?' },
        { type: 'speaking-repeat', prompt: 'Fale no microfone: "Yes, I can do it!"', audio: 'Yes I can do it', ans: 'Yes I can do it', hint: '/jes aɪ kæn duː ɪt/', exp: 'Perfeita confiança e pronúncia!' },
        { type: 'multiple-choice', prompt: 'Qual é a forma negativa contraída de CAN?', options: ['Can\'t', 'Cann\'t', 'Cansn\'t', 'Don\'t can'], ans: 'Can\'t', exp: 'Can\'t (/kænt/ ou britânico /kɑːnt/).' }
      ]
    },
    // 15: Could & Would
    {
      num: 15, title: 'Pedidos Educados com COULD e WOULD', subtitle: 'Could you help me? Would you like coffee?',
      obj: 'Fazer pedidos e ofertas com alto grau de polidez.',
      type: 'lesson', icon: 'heart',
      theory: ['COULD é mais formal e educado que CAN: "Could you please open the door?".', 'WOULD LIKE é a forma educada de "querer": "I would like a glass of water" (Gostaria de...).'],
      items: [
        { type: 'multiple-choice', prompt: 'Como pedir educadamente para alguém repetir o que disse?', options: ['Could you repeat that, please?', 'Repeat that now!', 'You can repeat that?', 'Can to repeat that?'], ans: 'Could you repeat that, please?', exp: 'Could you repeat that, please?' },
        { type: 'fill-blank', visualEmoji: '☕', prompt: 'Complete a oferta no restaurante: "_____ you like some dessert?"', options: ['Would', 'Could', 'Do', 'Are'], ans: 'Would', exp: 'Would you like...?' },
        { type: 'word-order', prompt: 'Monte o pedido educado:', options: ['the', 'pass', 'you', 'salt,', 'Could', 'please?'], ans: 'Could you pass the salt, please?', exp: 'Could you pass the salt, please?' },
        { type: 'listening', prompt: 'Ouça o pedido formal:', audio: 'Could you tell me how to get to the station?', options: ['Could you tell me how to get to the station?', 'Could you show me where the train is?', 'Can you take me to the airport now?', 'Would you like to visit the station?'], ans: 'Could you tell me how to get to the station?', exp: 'Could you tell me...' },
        { type: 'translate', prompt: 'Traduza: "Eu gostaria de uma mesa para dois."', options: ['I would like a table for two, please.', 'I want table for two now.', 'I will like a table for two.', 'Could I a table for two.'], ans: 'I would like a table for two, please.', exp: 'I would like = Eu gostaria.' },
        { type: 'multiple-choice', prompt: 'Qual é a contração de "I would like"?', options: ['I\'d like', 'I\'w like', 'I\'ould like', 'I\'ll like'], ans: 'I\'d like', exp: 'I\'d like (/aɪd laɪk/).' },
        { type: 'word-order', prompt: 'Organize a pergunta de preferência:', options: ['like', 'tea', 'Would', 'coffee?', 'you', 'or'], ans: 'Would you like coffee or tea?', exp: 'Would you like coffee or tea?' },
        { type: 'listening', prompt: 'Ouça a resposta educada:', audio: 'I would love to join you for dinner.', options: ['I would love to join you for dinner.', 'I would like to have lunch with you.', 'Could you join us for dinner today?', 'I will call you after dinner.'], ans: 'I would love to join you for dinner.', exp: 'I would love to...' },
        { type: 'speaking-repeat', prompt: 'Fale no microfone: "Could you help me, please?"', audio: 'Could you help me please', ans: 'Could you help me please', hint: '/kʊd juː help miː pliːz/', exp: 'Excelente polidez!' },
        { type: 'multiple-choice', prompt: 'No restaurante, qual pedido soa mais educado e natural?', options: ['I\'d like the chicken salad, please.', 'Give me chicken salad.', 'I want chicken salad.', 'I need the salad now.'], ans: 'I\'d like the chicken salad, please.', exp: 'I\'d like... please.' }
      ]
    },
    // 16: Present Continuous Afirmativo
    {
      num: 16, title: 'Present Continuous: Acontecendo Agora', subtitle: 'Verbo To Be + Verbo com -ING',
      obj: 'Descrever ações que estão ocorrendo no momento da fala.',
      type: 'lesson', icon: 'play-circle',
      theory: ['Estrutura: Sujeito + AM/IS/ARE + Verbo com -ING.', 'Exemplo: "I am studying English right now", "She is cooking dinner".', 'Regras ortográficas do -ING: write -> writing; run -> running.']
    },
    // 17: Present Continuous Negativas e Interrogativas
    {
      num: 17, title: 'Present Continuous: Perguntas e Negativas', subtitle: 'Are you working? I am not sleeping',
      obj: 'Fazer perguntas e negativas sobre ações em andamento.',
      type: 'lesson', icon: 'help-circle',
      theory: ['Negativa: am not / isn\'t / aren\'t + verbo com -ing: "He isn\'t watching TV".', 'Interrogativa: Inverte o To Be: "Are you listening to me?".']
    },
    // 18: Verbos de Sentimento (+ ING)
    {
      num: 18, title: 'Verbos de Sentimento (+ ING)', subtitle: 'Like, Love, Hate, Enjoy doing',
      obj: 'Expressar gostos e preferências com verbos no gerúndio.',
      type: 'lesson', icon: 'smile',
      theory: ['Após like, love, hate, enjoy usamos o verbo seguinte com -ING: "I love reading", "She enjoys dancing", "They hate waiting".']
    },
    // 19: Simple Present 1ª e 2ª pessoa
    {
      num: 19, title: 'Simple Present: Rotina na 1ª e 2ª Pessoa', subtitle: 'I live, you work, we study',
      obj: 'Descrever hábitos e rotinas regulares com I, You, We e They.',
      type: 'lesson', icon: 'clock',
      theory: ['Com I, You, We e They, o verbo fica na sua forma base simples: "I live in Brazil", "We work from home", "They study every night".']
    },
    // 20: Chest 2 (Review 11-19)
    {
      num: 20, title: 'Baú da Sabedoria: Construtor II', subtitle: 'Revisão intermediária do Mundo 2 e gemas bônus',
      obj: 'Consolidar contáveis/incontáveis, modais e presente contínuo.',
      type: 'chest', icon: 'award',
      theory: ['Parabéns pelo segundo baú do Mundo 2! Revise How much/many, Can/Could e Present Continuous.']
    },
    // 21: Simple Present 3ª Pessoa
    {
      num: 21, title: 'Simple Present: A Regra da 3ª Pessoa (-S/-ES)', subtitle: 'He works, She watches, It runs',
      obj: 'Aplicar a terminação -S, -ES e -IES na 3ª pessoa do singular (He, She, It).',
      type: 'lesson', icon: 'user',
      theory: ['Com He, She e It no presente, SEMPRE adicionamos -S ao verbo: work -> works, live -> lives.', 'Verbos terminados em -ch, -sh, -ss, -x, -o levam -ES: watch -> watches, go -> goes.']
    },
    // 22: Perguntas com DO e DOES
    {
      num: 22, title: 'Perguntas no Presente: Auxiliares DO & DOES', subtitle: 'Do you...? Does he...?',
      obj: 'Construir perguntas no presente utilizando DO e DOES.',
      type: 'lesson', icon: 'help-circle',
      theory: ['Para perguntas no Simple Present, usamos auxiliares: DO (I, you, we, they) e DOES (he, she, it).', 'ATENÇÃO: Quando DOES entra na pergunta, o verbo principal volta para a forma base: "Does he WORK here?" (NUNCA "Does he works").']
    },
    // 23: Respostas Curtas com DO e DOES
    {
      num: 23, title: 'Respostas Curtas no Presente', subtitle: 'Yes, I do / No, he doesn\'t',
      obj: 'Responder perguntas objetivas de sim ou não com naturalidade.',
      type: 'lesson', icon: 'check-square',
      theory: ['"Do you like pizza? Yes, I do / No, I don\'t."', '"Does she speak French? Yes, she does / No, she doesn\'t."']
    },
    // 24: Advérbios de Frequência
    {
      num: 24, title: 'Advérbios de Frequência', subtitle: 'Always, Usually, Often, Sometimes, Never',
      obj: 'Indicar a frequência de ações na rotina diária.',
      type: 'lesson', icon: 'repeat',
      theory: ['Posição: ANTES do verbo principal ("I ALWAYS eat breakfast"), mas DEPOIS do verbo To Be ("She is ALWAYS happy").', 'Always (100%), Usually (80%), Often (60%), Sometimes (40%), Never (0%).']
    },
    // 25: Preposições de Tempo
    {
      num: 25, title: 'Preposições de Tempo: IN, ON, AT', subtitle: 'In July, On Monday, At 5 o\'clock',
      obj: 'Usar as preposições temporais com precisão milimétrica.',
      type: 'lesson', icon: 'calendar',
      theory: ['AT para horários exatos e momentos específicos: at 3 o\'clock, at night, at the weekend.', 'ON para dias e datas específicas: on Monday, on July 4th.', 'IN para períodos mais longos: in July, in 2026, in the morning, in summer.']
    },
    // 26: Rotinas Diárias & Frequência
    {
      num: 26, title: 'Rotinas Diárias & Frequência', subtitle: 'Integrando o dia a dia completo',
      obj: 'Narrar uma rotina completa do amanhecer ao anoitecer.',
      type: 'lesson', icon: 'sun',
      theory: ['Combinando Simple Present, horários e advérbios: "I usually wake up at 7, then I take a shower and have breakfast".']
    },
    // 27: Want, Need & Have To
    {
      num: 27, title: 'Verbos Want, Need & Have To', subtitle: 'I want to go, I need to study, I have to work',
      obj: 'Expressar desejos (want), necessidades (need) e obrigações (have to).',
      type: 'lesson', icon: 'flag',
      theory: ['Todos exigem "TO" antes do próximo verbo: "I want TO sleep", "I need TO talk", "I have TO go".']
    },
    // 28: Modo Imperativo
    {
      num: 28, title: 'O Modo Imperativo', subtitle: 'Listen!, Be careful!, Don\'t touch!',
      obj: 'Dar instruções, alertas e comandos diretos.',
      type: 'lesson', icon: 'alert-triangle',
      theory: ['Comece direto com a forma base do verbo: "Listen!", "Come here!", "Open the door!".', 'Negativa: use "Don\'t": "Don\'t touch that!", "Don\'t worry!".']
    },
    // 29: Simulado Pré-Boss
    {
      num: 29, title: 'Simulado Pré-Boss: O Desafio da Sintaxe', subtitle: 'Revisão integrada de todas as estruturas do Mundo 2',
      obj: 'Testar domínio de toda a gramática estrutural do nível A2.',
      type: 'review', icon: 'award',
      theory: ['Simulado preparatório final para a grande batalha contra o Guardião do Mundo 2!']
    },
    // 30: Grande Chefe Mundo 2
    {
      num: 30, title: 'O Guardião do Mundo 2: Mestre das Estruturas', subtitle: 'Boss Final de Proficiência A2',
      obj: 'Provar maestria absoluta na construção de frases, tempos presentes e modais.',
      type: 'boss', icon: 'crown',
      theory: ['A grande batalha final do Mundo 2! Supere o Guardião das Estruturas para desbloquear o Mundo 3!']
    }
  ];

  return rawPhases;
};

console.log('Script architecture ready');
