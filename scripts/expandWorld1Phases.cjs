// Script to expand World 1 phases to 9-10 exercises each (and 12 for chest, 15 for boss)
const fs = require('fs');

// We have tailored additional exercises for each of the 30 phases of World 1:
const additionalExercisesW1 = {
  // Phase 1: Alfabeto & Sons
  1: [
    { type: 'multiple-choice', visualEmoji: '🍎', prompt: 'Qual palavra começa com a letra "A" e tem o som /æ/?', options: ['Apple', 'Book', 'Door', 'Cat'], correctAnswer: 'Apple', explanation: 'Apple (/ˈæp.əl/) significa maçã e começa com a letra A.', skillCategory: 'vocabulary' },
    { type: 'fill-blank', visualEmoji: '📖', prompt: 'Complete a letra que falta para formar "BOOK" (livro): B - O - ___ - K', options: ['O', 'A', 'E', 'U'], correctAnswer: 'O', explanation: 'A palavra correta é BOOK (B-O-O-K).', skillCategory: 'vocabulary' },
    { type: 'word-order', visualEmoji: '☀️', prompt: 'Ordene as letras para soletrar "SUN" (sol):', options: ['N', 'S', 'U'], correctAnswer: 'S U N', explanation: 'A palavra sol em inglês é SUN (S-U-N).', skillCategory: 'vocabulary' },
    { type: 'listening', prompt: 'Ouça o áudio e identifique a letra pronunciada:', audioPhrase: 'The letter H', options: ['The letter H', 'The letter A', 'The letter E', 'The letter 8'], correctAnswer: 'The letter H', explanation: '"H" em inglês soa como /eɪtʃ/ ("eitch").', skillCategory: 'listening' },
    { type: 'speaking-repeat', prompt: 'Pratique sua fala: Diga as letras "A B C D"', audioPhrase: 'A B C D', correctAnswer: 'A B C D', phoneticHint: '/eɪ biː siː diː/', explanation: 'Excelente pronúncia das letras A, B, C e D!', skillCategory: 'pronunciation' },
    { type: 'multiple-choice', prompt: 'A letra "I" em inglês tem a pronúncia de:', options: ['ai (/aɪ/)', 'i (/iː/)', 'e (/eɪ/)', 'ou (/oʊ/)'], correctAnswer: 'ai (/aɪ/)', explanation: 'A letra "I" soa como "ai" (/aɪ/), como em "Ice" ou "Time".', phoneticHint: '/aɪ/', skillCategory: 'pronunciation' }
  ],

  // Phase 2: Cumprimentos & Saudações
  2: [
    { type: 'multiple-choice', visualEmoji: '👋', prompt: 'Qual é a forma mais comum e descontraída de dizer "Oi" entre amigos?', options: ['Hi', 'Good evening', 'Farewell', 'Pleasure to meet you'], correctAnswer: 'Hi', explanation: '"Hi" ou "Hey" são as saudações informais mais comuns.', skillCategory: 'vocabulary' },
    { type: 'fill-blank', visualEmoji: '🌅', prompt: 'Complete a saudação matinal: "Good _____, have a great day!"', options: ['morning', 'night', 'bye', 'afternoon'], correctAnswer: 'morning', explanation: '"Good morning" significa bom dia.', skillCategory: 'vocabulary' },
    { type: 'word-order', prompt: 'Organize a resposta educada:', options: ['fine,', 'thank', 'I', 'am', 'you.'], correctAnswer: 'I am fine, thank you.', explanation: '"I am fine, thank you." significa "Eu estou bem, obrigado(a).".', skillCategory: 'grammar' },
    { type: 'listening', prompt: 'Ouça o cumprimento da tarde e escolha a alternativa correta:', audioPhrase: 'Good afternoon, welcome to our class!', options: ['Good afternoon, welcome to our class!', 'Good morning, welcome to our class!', 'Good evening, welcome to our class!', 'Goodbye, welcome to our class!'], correctAnswer: 'Good afternoon, welcome to our class!', explanation: '"Good afternoon" refere-se à tarde (após o meio-dia).', skillCategory: 'listening' },
    { type: 'speaking-repeat', prompt: 'Fale no microfone para desejar um bom dia: "Good morning!"', audioPhrase: 'Good morning', correctAnswer: 'Good morning', phoneticHint: '/ɡʊd ˈmɔːr.nɪŋ/', explanation: 'Excelente pronúncia! "Good morning" significa "Bom dia".', skillCategory: 'pronunciation' },
    { type: 'multiple-choice', visualEmoji: '🌙', prompt: 'Você está se despedindo às 22h para ir para casa dormir. O que você diz?', options: ['Good night!', 'Good evening!', 'Good morning!', 'Hello!'], correctAnswer: 'Good night!', explanation: 'Para despedida noturna ou antes de dormir, usamos exclusivamente "Good night!".', skillCategory: 'vocabulary' }
  ],

  // Phase 3: Apresentando-se & Seu Nome
  3: [
    { type: 'fill-blank', visualEmoji: '🤝', prompt: 'Complete a apresentação: "Hi, I _____ John."', options: ['am', 'is', 'are', 'be'], correctAnswer: 'am', explanation: 'Com o pronome "I", usamos a forma "am" do verbo To Be ("I am John").', skillCategory: 'grammar' },
    { type: 'multiple-choice', prompt: 'Qual é a resposta mais comum quando alguém diz "Nice to meet you"?', options: ['Nice to meet you too!', 'You are welcome!', 'I am very happy!', 'Good night!'], correctAnswer: 'Nice to meet you too!', explanation: '"Nice to meet you too!" significa "Prazer em conhecer você também!".', skillCategory: 'vocabulary' },
    { type: 'word-order', prompt: 'Organize a pergunta contraída:', options: ['name?', 'What\'s', 'your'], correctAnswer: 'What\'s your name?', explanation: '"What\'s your name?" é a contração de "What is your name?".', skillCategory: 'grammar' },
    { type: 'listening', prompt: 'Ouça e selecione a identificação pessoal ouvida:', audioPhrase: 'I am David, I am a student.', options: ['I am David, I am a student.', 'My name is David, I am a teacher.', 'You are David, a good student.', 'He is David, my best friend.'], correctAnswer: 'I am David, I am a student.', explanation: '"I am David, I am a student." significa "Eu sou David, eu sou um estudante."', skillCategory: 'listening' },
    { type: 'speaking-repeat', prompt: 'Fale no microfone sua apresentação: "My name is Alex."', audioPhrase: 'My name is Alex', correctAnswer: 'My name is Alex', phoneticHint: '/maɪ neɪm ɪz ˈæl.ɪks/', explanation: 'Muito bem! Você pronunciou perfeitamente sua apresentação.', skillCategory: 'pronunciation' },
    { type: 'multiple-choice', visualEmoji: '🪪', prompt: 'Como apresentar um amigo para outra pessoa?', options: ['This is my friend, Pedro.', 'Here is my friend, Pedro.', 'That has my friend, Pedro.', 'There is my friend, Pedro.'], correctAnswer: 'This is my friend, Pedro.', explanation: 'Usamos "This is [Nome]" para apresentar alguém a outra pessoa.', skillCategory: 'vocabulary' }
  ],

  // Phase 4: Cortesia & Boas Maneiras
  4: [
    { type: 'fill-blank', prompt: 'Complete com a palavra de cortesia: "Can I have some water, _____?"', options: ['please', 'thanks', 'sorry', 'welcome'], correctAnswer: 'please', explanation: '"Please" (por favor) é fundamental para fazer pedidos com educação.', skillCategory: 'vocabulary' },
    { type: 'multiple-choice', visualEmoji: '🙏', prompt: 'Qual é a resposta clássica e educada para "Thank you"?', options: ['You are welcome!', 'No problem, please!', 'Yes, I thank!', 'Good night!'], correctAnswer: 'You are welcome!', explanation: '"You are welcome!" significa "De nada!" ou "Por nada!".', skillCategory: 'vocabulary' },
    { type: 'word-order', prompt: 'Organize o pedido educado de desculpas:', options: ['late,', 'sorry', 'I', 'am', 'sir.'], correctAnswer: 'I am sorry I am late, sir.', explanation: '"I am sorry" é a fórmula mais sincera para se desculpar.', skillCategory: 'grammar' },
    { type: 'listening', prompt: 'Ouça a frase de cortesia no transporte público:', audioPhrase: 'Excuse me, is this seat free?', options: ['Excuse me, is this seat free?', 'Thank you, is this seat clean?', 'Pardon me, where is this bus?', 'Hello, can you help me sit?'], correctAnswer: 'Excuse me, is this seat free?', explanation: '"Excuse me, is this seat free?" significa "Com licença, este assento está livre?".', skillCategory: 'listening' },
    { type: 'speaking-repeat', prompt: 'Diga no microfone para agradecer: "Thank you very much!"', audioPhrase: 'Thank you very much', correctAnswer: 'Thank you very much', phoneticHint: '/θæŋk juː ˈver.i mʌtʃ/', explanation: 'Excelente! Lembre-se do som do "th" com a língua entre os dentes.', skillCategory: 'pronunciation' },
    { type: 'multiple-choice', prompt: 'Ao esbarrar acidentalmente em alguém na rua, o que você diz imediatamente?', options: ['I am so sorry!', 'You are welcome!', 'Please meet me!', 'Good afternoon!'], correctAnswer: 'I am so sorry!', explanation: '"I am sorry" ou "Oops, sorry!" é a reação correta ao esbarrar em alguém.', skillCategory: 'vocabulary' }
  ],

  // Phase 5: Números de 1 a 10 & Idades
  5: [
    { type: 'multiple-choice', visualEmoji: '🎂', prompt: 'Como se diz "Eu tenho 20 anos" em inglês de forma correta?', options: ['I am 20 years old.', 'I have 20 years.', 'I got 20 ages.', 'My age has 20.'], correctAnswer: 'I am 20 years old.', explanation: 'Em inglês NÃO usamos o verbo "have" para idade! Usamos o verbo TO BE: "I am 20 years old".', skillCategory: 'grammar' },
    { type: 'fill-blank', visualEmoji: '🔢', prompt: 'Qual número vem logo após o sete (seven)? "Seven, _____, nine."', options: ['eight', 'six', 'ten', 'five'], correctAnswer: 'eight', explanation: 'Eight (/eɪt/) é o número 8.', skillCategory: 'vocabulary' },
    { type: 'word-order', prompt: 'Ordene a pergunta de idade:', options: ['old', 'you?', 'are', 'How'], correctAnswer: 'How old are you?', explanation: '"How old are you?" é a pergunta padrão para "Quantos anos você tem?".', skillCategory: 'grammar' },
    { type: 'listening', prompt: 'Ouça a resposta sobre idade e marque a alternativa correta:', audioPhrase: 'I am seven years old.', options: ['I am seven years old.', 'I am eleven years old.', 'I am seventy years old.', 'I have seven books today.'], correctAnswer: 'I am seven years old.', explanation: '"I am seven years old" significa "Eu tenho 7 anos".', skillCategory: 'listening' },
    { type: 'speaking-repeat', prompt: 'Fale no microfone os números: "One, two, three, four, five"', audioPhrase: 'One two three four five', correctAnswer: 'One two three four five', phoneticHint: '/wʌn tuː θriː fɔːr faɪv/', explanation: 'Ótima pronúncia dos primeiros 5 números em inglês!', skillCategory: 'pronunciation' },
    { type: 'multiple-choice', visualEmoji: '🔟', prompt: 'Qual é o número "TEN"?', options: ['10', '12', '20', '2'], correctAnswer: '10', explanation: 'Ten é o número 10.', skillCategory: 'vocabulary' }
  ],

  // Phase 6: Cores Fundamentais
  6: [
    { type: 'multiple-choice', visualEmoji: '🔵', prompt: 'Qual é a cor do céu em um dia limpo?', options: ['Blue', 'Red', 'Yellow', 'Black'], correctAnswer: 'Blue', explanation: 'Blue (/bluː/) é azul.', skillCategory: 'vocabulary' },
    { type: 'fill-blank', visualEmoji: '🟢', prompt: 'A cor da grama é verde. Em inglês: "The grass is _____."', options: ['green', 'yellow', 'purple', 'orange'], correctAnswer: 'green', explanation: 'Green (/ɡriːn/) significa verde.', skillCategory: 'vocabulary' },
    { type: 'word-order', prompt: 'Monte a frase descrevendo o carro:', options: ['is', 'car', 'The', 'red.'], correctAnswer: 'The car is red.', explanation: '"The car is red." significa "O carro é vermelho.".', skillCategory: 'grammar' },
    { type: 'listening', prompt: 'Ouça a cor e selecione a frase ouvida:', audioPhrase: 'I like my yellow shirt.', options: ['I like my yellow shirt.', 'I like my blue shirt.', 'I see a yellow bird.', 'I want a yellow skirt.'], correctAnswer: 'I like my yellow shirt.', explanation: '"Yellow" é amarelo e "shirt" é camisa.', skillCategory: 'listening' },
    { type: 'speaking-repeat', prompt: 'Diga em voz alta: "The sky is blue"', audioPhrase: 'The sky is blue', correctAnswer: 'The sky is blue', phoneticHint: '/ðə skaɪ ɪz bluː/', explanation: 'Excelente pronúncia! "The sky is blue" significa "O céu é azul".', skillCategory: 'pronunciation' },
    { type: 'multiple-choice', visualEmoji: '⚪', prompt: 'Como se diz "Branco" e "Preto" em inglês?', options: ['White and Black', 'Green and Yellow', 'Brown and Pink', 'Grey and Orange'], correctAnswer: 'White and Black', explanation: 'White é branco e Black é preto.', skillCategory: 'vocabulary' }
  ]
};

console.log('Script loaded. Total defined phases in sample:', Object.keys(additionalExercisesW1).length);
