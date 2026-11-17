import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = [
  {
    "id": "w0-p1",
    "worldId": 0,
    "phaseNumber": 1,
    "title": "Ambiente 1 • Entrada da Casa, Calçada & Porta",
    "subtitle": "Cômodo 1/12 • Da calçada até abrir a porta (objetos e materiais)",
    "pedagogicalObjective": "Conhecer tudo o que vemos ao chegar em casa: calçada, portão, parede, tinta, porta de madeira, fechadura de metal, maçaneta, chave e fachada.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à Jornada de Imersão Residencial! Vamos explorar uma casa inteira passo a passo, começando pela calçada e pela porta de entrada.",
      "Aqui você aprende não apenas os objetos (Porta, Parede, Fechadura, Maçaneta, Chave, Portão, Campainha), mas também os materiais de que são feitos: Madeira (Wood), Metal (Metal), Vidro (Glass) e Tinta na Parede (Wall Paint).",
      "🎓 REGRA DA PROVA: Você precisa atingir 70 pontos ou mais (pelo menos 21 acertos em 30) para ser aprovado e liberar o próximo cômodo!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p1-e1",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sidewalk",
        "visualEmoji": "🚶",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa / Residência"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado"
          },
          {
            "text": "Hinge",
            "emoji": "🔩",
            "label": "Hinge",
            "translationPt": "Dobradiça da porta"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada"
          }
        ],
        "options": [
          "House",
          "Roof",
          "Hinge",
          "Sidewalk"
        ],
        "correctAnswer": "Sidewalk",
        "explanation": "Exemplo prático: \"We walk on the concrete sidewalk in front of the house.\"",
        "phoneticHint": "/ˈsaɪd.wɔːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e2",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Gate",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Roof Tile",
            "emoji": "🧱",
            "label": "Roof Tile",
            "translationPt": "Telha"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão da frente"
          },
          {
            "text": "Keychain",
            "emoji": "🔑",
            "label": "Keychain",
            "translationPt": "Chaveiro"
          }
        ],
        "options": [
          "Key",
          "Roof Tile",
          "Gate",
          "Keychain"
        ],
        "correctAnswer": "Gate",
        "explanation": "Exemplo prático: \"Open the front metal gate to enter the yard.\"",
        "phoneticHint": "/ɡeɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e3",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Brick Wall",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Brick Wall",
            "emoji": "🧱",
            "label": "Brick Wall",
            "translationPt": "Muro / Parede de tijolos"
          },
          {
            "text": "Doormat",
            "emoji": "🟫",
            "label": "Doormat",
            "translationPt": "Capacho / Tapete de entrada"
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem"
          },
          {
            "text": "Glass",
            "emoji": "🪟",
            "label": "Glass",
            "translationPt": "Vidro (material da janela)"
          }
        ],
        "options": [
          "Brick Wall",
          "Doormat",
          "Garage",
          "Glass"
        ],
        "correctAnswer": "Brick Wall",
        "explanation": "Exemplo prático: \"A strong brick wall surrounds the house.\"",
        "phoneticHint": "/brɪk wɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p1-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p1-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p1-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p1-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p1-e5",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fence",
        "visualEmoji": "栅",
        "visualOptions": [
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Paint Roller",
            "emoji": "🖌️",
            "label": "Paint Roller",
            "translationPt": "Rolo de pintar parede"
          },
          {
            "text": "Fence",
            "emoji": "栅",
            "label": "Fence",
            "translationPt": "Cerca / Grade"
          },
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs",
            "translationPt": "Escada / Degraus da entrada"
          }
        ],
        "options": [
          "Plant Pot",
          "Paint Roller",
          "Fence",
          "Stairs"
        ],
        "correctAnswer": "Fence",
        "explanation": "Exemplo prático: \"A white wooden fence in front of the garden.\"",
        "phoneticHint": "/fens/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e6",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mailbox",
        "visualEmoji": "📫",
        "visualOptions": [
          {
            "text": "Porch Light",
            "emoji": "💡",
            "label": "Porch Light",
            "translationPt": "Luminária externa / Arandela"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio"
          },
          {
            "text": "Metal",
            "emoji": "🔩",
            "label": "Metal",
            "translationPt": "Metal / Aço (material da fechadura)"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada"
          }
        ],
        "options": [
          "Porch Light",
          "Mailbox",
          "Metal",
          "Sidewalk"
        ],
        "correctAnswer": "Mailbox",
        "explanation": "Exemplo prático: \"Check the mailbox for letters and packages.\"",
        "phoneticHint": "/ˈmeɪl.bɑːks/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e7",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Doorbell",
        "visualEmoji": "🔔",
        "visualOptions": [
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão da frente"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta de entrada"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha"
          }
        ],
        "options": [
          "Lock",
          "Gate",
          "Door",
          "Doorbell"
        ],
        "correctAnswer": "Doorbell",
        "explanation": "Exemplo prático: \"Press the doorbell button when you arrive.\"",
        "phoneticHint": "/ˈdɔːr.bel/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e8",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Intercom",
        "visualEmoji": "📞",
        "visualOptions": [
          {
            "text": "Intercom",
            "emoji": "📞",
            "label": "Intercom",
            "translationPt": "Interfone"
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta da porta"
          },
          {
            "text": "Brick Wall",
            "emoji": "🧱",
            "label": "Brick Wall",
            "translationPt": "Muro / Parede de tijolos"
          },
          {
            "text": "Door Lock",
            "emoji": "🔒",
            "label": "Door Lock",
            "translationPt": "Fechadura da porta"
          }
        ],
        "options": [
          "Intercom",
          "Doorknob",
          "Brick Wall",
          "Door Lock"
        ],
        "correctAnswer": "Intercom",
        "explanation": "Exemplo prático: \"Answer the visitor using the wall intercom.\"",
        "phoneticHint": "/ˈɪn.tər.kɑːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p1-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p1-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p1-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p1-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p1-e10",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Front Yard",
        "visualEmoji": "🏡",
        "visualOptions": [
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede"
          },
          {
            "text": "Wood",
            "emoji": "🪵",
            "label": "Wood",
            "translationPt": "Madeira (material da porta)"
          },
          {
            "text": "Wall Paint",
            "emoji": "🎨",
            "label": "Wall Paint",
            "translationPt": "Tinta de parede"
          },
          {
            "text": "Front Yard",
            "emoji": "🏡",
            "label": "Front Yard",
            "translationPt": "Jardim da frente / Quintal"
          }
        ],
        "options": [
          "Wall",
          "Wood",
          "Wall Paint",
          "Front Yard"
        ],
        "correctAnswer": "Front Yard",
        "explanation": "Exemplo prático: \"Green grass grows in the front yard.\"",
        "phoneticHint": "/frʌnt jɑːrd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e11",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Plant Pot",
        "visualEmoji": "🪴",
        "visualOptions": [
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Fence",
            "emoji": "栅",
            "label": "Fence",
            "translationPt": "Cerca / Grade"
          }
        ],
        "options": [
          "Mailbox",
          "Window",
          "Plant Pot",
          "Fence"
        ],
        "correctAnswer": "Plant Pot",
        "explanation": "Exemplo prático: \"A green plant in a ceramic pot by the entrance.\"",
        "phoneticHint": "/ˈplænt pɑːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e12",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Doormat",
        "visualEmoji": "🟫",
        "visualOptions": [
          {
            "text": "Doormat",
            "emoji": "🟫",
            "label": "Doormat",
            "translationPt": "Capacho / Tapete de entrada"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada"
          },
          {
            "text": "Paint Roller",
            "emoji": "🖌️",
            "label": "Paint Roller",
            "translationPt": "Rolo de pintar parede"
          }
        ],
        "options": [
          "Doormat",
          "Doorbell",
          "Sidewalk",
          "Paint Roller"
        ],
        "correctAnswer": "Doormat",
        "explanation": "Exemplo prático: \"Wipe your shoes on the welcome doormat.\"",
        "phoneticHint": "/ˈdɔːr.mæt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e13",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Stairs",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Porch Light",
            "emoji": "💡",
            "label": "Porch Light",
            "translationPt": "Luminária externa / Arandela"
          },
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs",
            "translationPt": "Escada / Degraus da entrada"
          },
          {
            "text": "Intercom",
            "emoji": "📞",
            "label": "Intercom",
            "translationPt": "Interfone"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado"
          }
        ],
        "options": [
          "Porch Light",
          "Stairs",
          "Intercom",
          "Lock"
        ],
        "correctAnswer": "Stairs",
        "explanation": "Exemplo prático: \"Walk up the front steps to the porch.\"",
        "phoneticHint": "/sterz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p1-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p1-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p1-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p1-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p1-e15",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Front Yard",
            "emoji": "🏡",
            "label": "Front Yard",
            "translationPt": "Jardim da frente / Quintal"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta de entrada"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado"
          },
          {
            "text": "Brick Wall",
            "emoji": "🧱",
            "label": "Brick Wall",
            "translationPt": "Muro / Parede de tijolos"
          }
        ],
        "options": [
          "Front Yard",
          "Door",
          "Roof",
          "Brick Wall"
        ],
        "correctAnswer": "Door",
        "explanation": "Exemplo prático: \"The front door is made of solid wood.\"",
        "phoneticHint": "/dɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e16",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wood",
        "visualEmoji": "🪵",
        "visualOptions": [
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Hinge",
            "emoji": "🔩",
            "label": "Hinge",
            "translationPt": "Dobradiça da porta"
          },
          {
            "text": "Keychain",
            "emoji": "🔑",
            "label": "Keychain",
            "translationPt": "Chaveiro"
          },
          {
            "text": "Wood",
            "emoji": "🪵",
            "label": "Wood",
            "translationPt": "Madeira (material da porta)"
          }
        ],
        "options": [
          "Key",
          "Hinge",
          "Keychain",
          "Wood"
        ],
        "correctAnswer": "Wood",
        "explanation": "Exemplo prático: \"The door is made of natural brown wood.\"",
        "phoneticHint": "/wʊd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e17",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Doorknob",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha"
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta da porta"
          },
          {
            "text": "Doormat",
            "emoji": "🟫",
            "label": "Doormat",
            "translationPt": "Capacho / Tapete de entrada"
          }
        ],
        "options": [
          "Wall",
          "Doorbell",
          "Doorknob",
          "Doormat"
        ],
        "correctAnswer": "Doorknob",
        "explanation": "Exemplo prático: \"Turn the metal doorknob to open the door.\"",
        "phoneticHint": "/ˈdɔːr.nɑːb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e18",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Door Lock",
        "visualEmoji": "🔒",
        "visualOptions": [
          {
            "text": "Door Lock",
            "emoji": "🔒",
            "label": "Door Lock",
            "translationPt": "Fechadura da porta"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão da frente"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          }
        ],
        "options": [
          "Door Lock",
          "Mailbox",
          "Gate",
          "Plant Pot"
        ],
        "correctAnswer": "Door Lock",
        "explanation": "Exemplo prático: \"The door lock is made of strong metal.\"",
        "phoneticHint": "/dɔːr lɑːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p1-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p1-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p1-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p1-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p1-e20",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Metal",
        "visualEmoji": "🔩",
        "visualOptions": [
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs",
            "translationPt": "Escada / Degraus da entrada"
          },
          {
            "text": "Front Yard",
            "emoji": "🏡",
            "label": "Front Yard",
            "translationPt": "Jardim da frente / Quintal"
          },
          {
            "text": "Metal",
            "emoji": "🔩",
            "label": "Metal",
            "translationPt": "Metal / Aço (material da fechadura)"
          },
          {
            "text": "Fence",
            "emoji": "栅",
            "label": "Fence",
            "translationPt": "Cerca / Grade"
          }
        ],
        "options": [
          "Stairs",
          "Front Yard",
          "Metal",
          "Fence"
        ],
        "correctAnswer": "Metal",
        "explanation": "Exemplo prático: \"The lock and key are made of shiny metal.\"",
        "phoneticHint": "/ˈmet.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e21",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Key",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Intercom",
            "emoji": "📞",
            "label": "Intercom",
            "translationPt": "Interfone"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Glass",
            "emoji": "🪟",
            "label": "Glass",
            "translationPt": "Vidro (material da janela)"
          },
          {
            "text": "Roof Tile",
            "emoji": "🧱",
            "label": "Roof Tile",
            "translationPt": "Telha"
          }
        ],
        "options": [
          "Intercom",
          "Key",
          "Glass",
          "Roof Tile"
        ],
        "correctAnswer": "Key",
        "explanation": "Exemplo prático: \"Insert the metal key into the door lock.\"",
        "phoneticHint": "/kiː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e22",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Keychain",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta de entrada"
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem"
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta da porta"
          },
          {
            "text": "Keychain",
            "emoji": "🔑",
            "label": "Keychain",
            "translationPt": "Chaveiro"
          }
        ],
        "options": [
          "Door",
          "Garage",
          "Doorknob",
          "Keychain"
        ],
        "correctAnswer": "Keychain",
        "explanation": "Exemplo prático: \"My house keys are on a ring keychain.\"",
        "phoneticHint": "/ˈkiː.tʃeɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e23",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lock",
        "visualEmoji": "🔒",
        "visualOptions": [
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa / Residência"
          },
          {
            "text": "Door Lock",
            "emoji": "🔒",
            "label": "Door Lock",
            "translationPt": "Fechadura da porta"
          },
          {
            "text": "Wood",
            "emoji": "🪵",
            "label": "Wood",
            "translationPt": "Madeira (material da porta)"
          }
        ],
        "options": [
          "Lock",
          "House",
          "Door Lock",
          "Wood"
        ],
        "correctAnswer": "Lock",
        "explanation": "Exemplo prático: \"Close the side gate with a metal padlock.\"",
        "phoneticHint": "/lɑːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p1-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p1-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p1-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p1-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p1-e25",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hinge",
        "visualEmoji": "🔩",
        "visualOptions": [
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Metal",
            "emoji": "🔩",
            "label": "Metal",
            "translationPt": "Metal / Aço (material da fechadura)"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão da frente"
          },
          {
            "text": "Hinge",
            "emoji": "🔩",
            "label": "Hinge",
            "translationPt": "Dobradiça da porta"
          }
        ],
        "options": [
          "Window",
          "Metal",
          "Gate",
          "Hinge"
        ],
        "correctAnswer": "Hinge",
        "explanation": "Exemplo prático: \"Metal hinges hold the wooden door to the frame.\"",
        "phoneticHint": "/hɪndʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e26",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Wall",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Stairs",
            "emoji": "🪜",
            "label": "Stairs",
            "translationPt": "Escada / Degraus da entrada"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada"
          },
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          }
        ],
        "options": [
          "Stairs",
          "Sidewalk",
          "Wall",
          "Plant Pot"
        ],
        "correctAnswer": "Wall",
        "explanation": "Exemplo prático: \"The house wall is smooth and painted white.\"",
        "phoneticHint": "/wɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e27",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wall Paint",
        "visualEmoji": "🎨",
        "visualOptions": [
          {
            "text": "Wall Paint",
            "emoji": "🎨",
            "label": "Wall Paint",
            "translationPt": "Tinta de parede"
          },
          {
            "text": "Intercom",
            "emoji": "📞",
            "label": "Intercom",
            "translationPt": "Interfone"
          },
          {
            "text": "Fence",
            "emoji": "栅",
            "label": "Fence",
            "translationPt": "Cerca / Grade"
          },
          {
            "text": "Front Yard",
            "emoji": "🏡",
            "label": "Front Yard",
            "translationPt": "Jardim da frente / Quintal"
          }
        ],
        "options": [
          "Wall Paint",
          "Intercom",
          "Fence",
          "Front Yard"
        ],
        "correctAnswer": "Wall Paint",
        "explanation": "Exemplo prático: \"Fresh wall paint makes the house look new.\"",
        "phoneticHint": "/wɔːl peɪnt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e28",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Paint Roller",
        "visualEmoji": "🖌️",
        "visualOptions": [
          {
            "text": "Roof Tile",
            "emoji": "🧱",
            "label": "Roof Tile",
            "translationPt": "Telha"
          },
          {
            "text": "Paint Roller",
            "emoji": "🖌️",
            "label": "Paint Roller",
            "translationPt": "Rolo de pintar parede"
          },
          {
            "text": "Porch Light",
            "emoji": "💡",
            "label": "Porch Light",
            "translationPt": "Luminária externa / Arandela"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado"
          }
        ],
        "options": [
          "Roof Tile",
          "Paint Roller",
          "Porch Light",
          "Lock"
        ],
        "correctAnswer": "Paint Roller",
        "explanation": "Exemplo prático: \"Use a paint roller to paint the bedroom wall.\"",
        "phoneticHint": "/peɪnt ˈroʊ.lər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p1-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p1-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p1-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p1-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p1-e30",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Window",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Hinge",
            "emoji": "🔩",
            "label": "Hinge",
            "translationPt": "Dobradiça da porta"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Keychain",
            "emoji": "🔑",
            "label": "Keychain",
            "translationPt": "Chaveiro"
          }
        ],
        "options": [
          "Hinge",
          "Window",
          "Key",
          "Keychain"
        ],
        "correctAnswer": "Window",
        "explanation": "Exemplo prático: \"The glass window lets sunlight into the house.\"",
        "phoneticHint": "/ˈwɪn.doʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e31",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Glass",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa / Residência"
          },
          {
            "text": "Wood",
            "emoji": "🪵",
            "label": "Wood",
            "translationPt": "Madeira (material da porta)"
          },
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede"
          },
          {
            "text": "Glass",
            "emoji": "🪟",
            "label": "Glass",
            "translationPt": "Vidro (material da janela)"
          }
        ],
        "options": [
          "House",
          "Wood",
          "Wall",
          "Glass"
        ],
        "correctAnswer": "Glass",
        "explanation": "Exemplo prático: \"The window pane is made of clear glass.\"",
        "phoneticHint": "/ɡlæs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e32",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Roof",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Doormat",
            "emoji": "🟫",
            "label": "Doormat",
            "translationPt": "Capacho / Tapete de entrada"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado"
          },
          {
            "text": "Wall Paint",
            "emoji": "🎨",
            "label": "Wall Paint",
            "translationPt": "Tinta de parede"
          }
        ],
        "options": [
          "Doormat",
          "Doorbell",
          "Roof",
          "Wall Paint"
        ],
        "correctAnswer": "Roof",
        "explanation": "Exemplo prático: \"The ceramic roof protects the house from rain.\"",
        "phoneticHint": "/ruːf/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e33",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Roof Tile",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Roof Tile",
            "emoji": "🧱",
            "label": "Roof Tile",
            "translationPt": "Telha"
          },
          {
            "text": "Metal",
            "emoji": "🔩",
            "label": "Metal",
            "translationPt": "Metal / Aço (material da fechadura)"
          },
          {
            "text": "Paint Roller",
            "emoji": "🖌️",
            "label": "Paint Roller",
            "translationPt": "Rolo de pintar parede"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio"
          }
        ],
        "options": [
          "Roof Tile",
          "Metal",
          "Paint Roller",
          "Mailbox"
        ],
        "correctAnswer": "Roof Tile",
        "explanation": "Exemplo prático: \"Clay roof tiles cover the top of the house.\"",
        "phoneticHint": "/ruːf taɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p1-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p1-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p1-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p1-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p1-e35",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Porch Light",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta da porta"
          },
          {
            "text": "Door Lock",
            "emoji": "🔒",
            "label": "Door Lock",
            "translationPt": "Fechadura da porta"
          },
          {
            "text": "Porch Light",
            "emoji": "💡",
            "label": "Porch Light",
            "translationPt": "Luminária externa / Arandela"
          },
          {
            "text": "Door",
            "emoji": "🚪",
            "label": "Door",
            "translationPt": "Porta de entrada"
          }
        ],
        "options": [
          "Doorknob",
          "Door Lock",
          "Porch Light",
          "Door"
        ],
        "correctAnswer": "Porch Light",
        "explanation": "Exemplo prático: \"Turn on the porch light at night.\"",
        "phoneticHint": "/pɔːrtʃ laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e36",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Garage",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela"
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem"
          },
          {
            "text": "Glass",
            "emoji": "🪟",
            "label": "Glass",
            "translationPt": "Vidro (material da janela)"
          },
          {
            "text": "Brick Wall",
            "emoji": "🧱",
            "label": "Brick Wall",
            "translationPt": "Muro / Parede de tijolos"
          }
        ],
        "options": [
          "Window",
          "Garage",
          "Glass",
          "Brick Wall"
        ],
        "correctAnswer": "Garage",
        "explanation": "Exemplo prático: \"Park the family car inside the garage.\"",
        "phoneticHint": "/ɡəˈrɑːʒ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p1-e37",
        "type": "image-choice",
        "conceptTitle": "Entrada da Casa, Calçada & Porta • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "House",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Key",
            "emoji": "🔑",
            "label": "Key",
            "translationPt": "Chave"
          },
          {
            "text": "Wall Paint",
            "emoji": "🎨",
            "label": "Wall Paint",
            "translationPt": "Tinta de parede"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa / Residência"
          }
        ],
        "options": [
          "Key",
          "Wall Paint",
          "Roof",
          "House"
        ],
        "correctAnswer": "House",
        "explanation": "Exemplo prático: \"Welcome to my comfortable house!\"",
        "phoneticHint": "/haʊs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p1-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p1-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p1-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p1-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p2",
    "worldId": 0,
    "phaseNumber": 2,
    "title": "Ambiente 2 • Sala de Estar, TV, Internet & Iluminação",
    "subtitle": "Cômodo 2/12 • Sofá, almofadas, rack, modem, TV, videogame, tomada, interruptor e piso",
    "pedagogicalObjective": "Identificar todos os móveis, aparelhos eletrônicos, tomadas, interruptores, iluminação e revestimentos da sala de estar.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Você abriu a porta e entrou na Sala de Estar! Olhe ao seu redor: temos o Sofá (Sofa), as Almofadas (Cushion), o Rack de TV (TV Stand), a Televisão (Television) e o Modem de Internet (Wi-Fi Router).",
      "Veja também os Retratos de Fotografia (Picture Frame), o Videogame (Video Game Console), o Controle (Game Controller), as Caixas de Som (Speaker), a Mesa de Centro (Coffee Table), o Tapete (Rug), a Cortina (Curtain) e o Notebook (Computer).",
      "Nas paredes, teto e chão temos a Tomada (Power Outlet), o Interruptor (Light Switch), a Lâmpada no Teto (Light Bulb), o Ventilador (Fan), o Ar-Condicionado (Air Conditioner) e o Piso Cerâmico (Ceramic Tile)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p2-e1",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sofa",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete da sala"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá da sala"
          },
          {
            "text": "Remote Control",
            "emoji": "📱",
            "label": "Remote Control",
            "translationPt": "Controle remoto da TV"
          }
        ],
        "options": [
          "Rug",
          "Bookshelf",
          "Sofa",
          "Remote Control"
        ],
        "correctAnswer": "Sofa",
        "explanation": "Exemplo prático: \"The family sits together on the living room sofa.\"",
        "phoneticHint": "/ˈsoʊ.fə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e2",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cushion",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Cushion",
            "emoji": "🛋️",
            "label": "Cushion",
            "translationPt": "Almofada de sofá"
          },
          {
            "text": "Telephone",
            "emoji": "☎️",
            "label": "Telephone",
            "translationPt": "Telefone fixo"
          },
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada no teto"
          },
          {
            "text": "Light Switch",
            "emoji": "💡",
            "label": "Light Switch",
            "translationPt": "Interruptor de luz na parede"
          }
        ],
        "options": [
          "Cushion",
          "Telephone",
          "Light Bulb",
          "Light Switch"
        ],
        "correctAnswer": "Cushion",
        "explanation": "Exemplo prático: \"Soft decorative cushions are on the sofa.\"",
        "phoneticHint": "/ˈkʊʃ.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e3",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Armchair",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Wi-Fi Router",
            "emoji": "🛜",
            "label": "Wi-Fi Router",
            "translationPt": "Modem / Roteador de internet"
          },
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado"
          },
          {
            "text": "Armchair",
            "emoji": "🛋️",
            "label": "Armchair",
            "translationPt": "Poltrona"
          },
          {
            "text": "Game Controller",
            "emoji": "🎮",
            "label": "Game Controller",
            "translationPt": "Controle de videogame / Joystick"
          }
        ],
        "options": [
          "Wi-Fi Router",
          "Air Conditioner",
          "Armchair",
          "Game Controller"
        ],
        "correctAnswer": "Armchair",
        "explanation": "Exemplo prático: \"Grandpa reads in a comfortable armchair.\"",
        "phoneticHint": "/ˈɑːrm.tʃer/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p2-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p2-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p2-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p2-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p2-e5",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "TV Stand",
        "visualEmoji": "📺",
        "visualOptions": [
          {
            "text": "Vase",
            "emoji": "🏺",
            "label": "Vase",
            "translationPt": "Vaso decorativo"
          },
          {
            "text": "TV Stand",
            "emoji": "📺",
            "label": "TV Stand",
            "translationPt": "Rack de TV / Painel de sala"
          },
          {
            "text": "Speaker",
            "emoji": "🔊",
            "label": "Speaker",
            "translationPt": "Caixa de som"
          },
          {
            "text": "Video Game Console",
            "emoji": "🎮",
            "label": "Video Game Console",
            "translationPt": "Videogame (Console)"
          }
        ],
        "options": [
          "Vase",
          "TV Stand",
          "Speaker",
          "Video Game Console"
        ],
        "correctAnswer": "TV Stand",
        "explanation": "Exemplo prático: \"The television sits on a wooden TV stand.\"",
        "phoneticHint": "/ˌtiːˈviː stænd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e6",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Television",
        "visualEmoji": "📺",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina da janela"
          },
          {
            "text": "Coffee Table",
            "emoji": "🪑",
            "label": "Coffee Table",
            "translationPt": "Mesa de centro da sala"
          },
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão (Smart TV)"
          }
        ],
        "options": [
          "Curtain",
          "Coffee Table",
          "Fan",
          "Television"
        ],
        "correctAnswer": "Television",
        "explanation": "Exemplo prático: \"We watch movies on the flat-screen television.\"",
        "phoneticHint": "/ˈtel.ə.vɪʒ.ən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e7",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Remote Control",
        "visualEmoji": "📱",
        "visualOptions": [
          {
            "text": "Remote Control",
            "emoji": "📱",
            "label": "Remote Control",
            "translationPt": "Controle remoto da TV"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Notebook / Computador portátil"
          },
          {
            "text": "Cushion",
            "emoji": "🛋️",
            "label": "Cushion",
            "translationPt": "Almofada de sofá"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária de canto"
          }
        ],
        "options": [
          "Remote Control",
          "Computer",
          "Cushion",
          "Lamp"
        ],
        "correctAnswer": "Remote Control",
        "explanation": "Exemplo prático: \"Change the channel with the TV remote control.\"",
        "phoneticHint": "/rɪˈmoʊt kənˈtroʊl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e8",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wi-Fi Router",
        "visualEmoji": "🛜",
        "visualOptions": [
          {
            "text": "Ceiling Fan",
            "emoji": "🌀",
            "label": "Ceiling Fan",
            "translationPt": "Ventilador de teto"
          },
          {
            "text": "Ceramic Tile",
            "emoji": "⬜",
            "label": "Ceramic Tile",
            "translationPt": "Piso cerâmico / Porcelanato"
          },
          {
            "text": "Ceiling Lamp",
            "emoji": "💡",
            "label": "Ceiling Lamp",
            "translationPt": "Lustre / Plafon de teto"
          },
          {
            "text": "Wi-Fi Router",
            "emoji": "🛜",
            "label": "Wi-Fi Router",
            "translationPt": "Modem / Roteador de internet"
          }
        ],
        "options": [
          "Ceiling Fan",
          "Ceramic Tile",
          "Ceiling Lamp",
          "Wi-Fi Router"
        ],
        "correctAnswer": "Wi-Fi Router",
        "explanation": "Exemplo prático: \"The Wi-Fi router connects our home to the internet.\"",
        "phoneticHint": "/ˈwaɪ.faɪ ˈraʊ.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p2-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p2-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p2-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p2-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p2-e10",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Picture Frame",
        "visualEmoji": "🖼️",
        "visualOptions": [
          {
            "text": "Window Blind",
            "emoji": "🪟",
            "label": "Window Blind",
            "translationPt": "Persiana"
          },
          {
            "text": "Armchair",
            "emoji": "🛋️",
            "label": "Armchair",
            "translationPt": "Poltrona"
          },
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Porta-retrato / Retrato de fotografia"
          },
          {
            "text": "TV Stand",
            "emoji": "📺",
            "label": "TV Stand",
            "translationPt": "Rack de TV / Painel de sala"
          }
        ],
        "options": [
          "Window Blind",
          "Armchair",
          "Picture Frame",
          "TV Stand"
        ],
        "correctAnswer": "Picture Frame",
        "explanation": "Exemplo prático: \"A family photo inside a wooden picture frame.\"",
        "phoneticHint": "/ˈpɪk.tʃər freɪm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e11",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Video Game Console",
        "visualEmoji": "🎮",
        "visualOptions": [
          {
            "text": "Video Game Console",
            "emoji": "🎮",
            "label": "Video Game Console",
            "translationPt": "Videogame (Console)"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão (Smart TV)"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio de parede"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá da sala"
          }
        ],
        "options": [
          "Video Game Console",
          "Television",
          "Clock",
          "Sofa"
        ],
        "correctAnswer": "Video Game Console",
        "explanation": "Exemplo prático: \"The video game console is connected to the TV.\"",
        "phoneticHint": "/ˈvɪd.i.oʊ ɡeɪm ˈkɑːn.soʊl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e12",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Game Controller",
        "visualEmoji": "🎮",
        "visualOptions": [
          {
            "text": "Power Plug",
            "emoji": "🔌",
            "label": "Power Plug",
            "translationPt": "Plugue / Cabo de energia"
          },
          {
            "text": "Game Controller",
            "emoji": "🎮",
            "label": "Game Controller",
            "translationPt": "Controle de videogame / Joystick"
          },
          {
            "text": "Power Outlet",
            "emoji": "🔌",
            "label": "Power Outlet",
            "translationPt": "Tomada elétrica na parede"
          },
          {
            "text": "Vase",
            "emoji": "🏺",
            "label": "Vase",
            "translationPt": "Vaso decorativo"
          }
        ],
        "options": [
          "Power Plug",
          "Game Controller",
          "Power Outlet",
          "Vase"
        ],
        "correctAnswer": "Game Controller",
        "explanation": "Exemplo prático: \"Hold the wireless game controller to play.\"",
        "phoneticHint": "/ɡeɪm kənˈtroʊ.lər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e13",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Speaker",
        "visualEmoji": "🔊",
        "visualOptions": [
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária de canto"
          },
          {
            "text": "Speaker",
            "emoji": "🔊",
            "label": "Speaker",
            "translationPt": "Caixa de som"
          },
          {
            "text": "Light Switch",
            "emoji": "💡",
            "label": "Light Switch",
            "translationPt": "Interruptor de luz na parede"
          },
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada no teto"
          }
        ],
        "options": [
          "Lamp",
          "Speaker",
          "Light Switch",
          "Light Bulb"
        ],
        "correctAnswer": "Speaker",
        "explanation": "Exemplo prático: \"Play music through the Bluetooth speaker.\"",
        "phoneticHint": "/ˈspiː.kər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p2-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p2-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p2-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p2-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p2-e15",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Coffee Table",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Porta-retrato / Retrato de fotografia"
          },
          {
            "text": "Remote Control",
            "emoji": "📱",
            "label": "Remote Control",
            "translationPt": "Controle remoto da TV"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Coffee Table",
            "emoji": "🪑",
            "label": "Coffee Table",
            "translationPt": "Mesa de centro da sala"
          }
        ],
        "options": [
          "Picture Frame",
          "Remote Control",
          "Bookshelf",
          "Coffee Table"
        ],
        "correctAnswer": "Coffee Table",
        "explanation": "Exemplo prático: \"Put the magazines on the living room coffee table.\"",
        "phoneticHint": "/ˈkɔː.fi ˈteɪ.bəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e16",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Rug",
        "visualEmoji": "🟥",
        "visualOptions": [
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador"
          },
          {
            "text": "Ceiling Lamp",
            "emoji": "💡",
            "label": "Ceiling Lamp",
            "translationPt": "Lustre / Plafon de teto"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete da sala"
          },
          {
            "text": "Cushion",
            "emoji": "🛋️",
            "label": "Cushion",
            "translationPt": "Almofada de sofá"
          }
        ],
        "options": [
          "Fan",
          "Ceiling Lamp",
          "Rug",
          "Cushion"
        ],
        "correctAnswer": "Rug",
        "explanation": "Exemplo prático: \"A soft woven rug covers the living room floor.\"",
        "phoneticHint": "/rʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e17",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Curtain",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina da janela"
          },
          {
            "text": "Wi-Fi Router",
            "emoji": "🛜",
            "label": "Wi-Fi Router",
            "translationPt": "Modem / Roteador de internet"
          },
          {
            "text": "Armchair",
            "emoji": "🛋️",
            "label": "Armchair",
            "translationPt": "Poltrona"
          },
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado"
          }
        ],
        "options": [
          "Curtain",
          "Wi-Fi Router",
          "Armchair",
          "Air Conditioner"
        ],
        "correctAnswer": "Curtain",
        "explanation": "Exemplo prático: \"Close the living room curtains in the evening.\"",
        "phoneticHint": "/ˈkɜːr.tən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e18",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Window Blind",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Game Controller",
            "emoji": "🎮",
            "label": "Game Controller",
            "translationPt": "Controle de videogame / Joystick"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão (Smart TV)"
          },
          {
            "text": "Window Blind",
            "emoji": "🪟",
            "label": "Window Blind",
            "translationPt": "Persiana"
          },
          {
            "text": "TV Stand",
            "emoji": "📺",
            "label": "TV Stand",
            "translationPt": "Rack de TV / Painel de sala"
          }
        ],
        "options": [
          "Game Controller",
          "Television",
          "Window Blind",
          "TV Stand"
        ],
        "correctAnswer": "Window Blind",
        "explanation": "Exemplo prático: \"Adjust the window blinds to control the light.\"",
        "phoneticHint": "/ˈwɪn.doʊ blaɪnd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p2-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p2-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p2-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p2-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p2-e20",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Computer",
        "visualEmoji": "💻",
        "visualOptions": [
          {
            "text": "Ceramic Tile",
            "emoji": "⬜",
            "label": "Ceramic Tile",
            "translationPt": "Piso cerâmico / Porcelanato"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Notebook / Computador portátil"
          },
          {
            "text": "Ceiling Fan",
            "emoji": "🌀",
            "label": "Ceiling Fan",
            "translationPt": "Ventilador de teto"
          },
          {
            "text": "Coffee Table",
            "emoji": "🪑",
            "label": "Coffee Table",
            "translationPt": "Mesa de centro da sala"
          }
        ],
        "options": [
          "Ceramic Tile",
          "Computer",
          "Ceiling Fan",
          "Coffee Table"
        ],
        "correctAnswer": "Computer",
        "explanation": "Exemplo prático: \"My open laptop computer is on the table.\"",
        "phoneticHint": "/kəmˈpjuː.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e21",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Power Outlet",
        "visualEmoji": "🔌",
        "visualOptions": [
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio de parede"
          },
          {
            "text": "Video Game Console",
            "emoji": "🎮",
            "label": "Video Game Console",
            "translationPt": "Videogame (Console)"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete da sala"
          },
          {
            "text": "Power Outlet",
            "emoji": "🔌",
            "label": "Power Outlet",
            "translationPt": "Tomada elétrica na parede"
          }
        ],
        "options": [
          "Clock",
          "Video Game Console",
          "Rug",
          "Power Outlet"
        ],
        "correctAnswer": "Power Outlet",
        "explanation": "Exemplo prático: \"Plug the notebook charger into the wall power outlet.\"",
        "phoneticHint": "/ˈpaʊ.ər ˈaʊt.let/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e22",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Power Plug",
        "visualEmoji": "🔌",
        "visualOptions": [
          {
            "text": "Power Plug",
            "emoji": "🔌",
            "label": "Power Plug",
            "translationPt": "Plugue / Cabo de energia"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá da sala"
          },
          {
            "text": "Speaker",
            "emoji": "🔊",
            "label": "Speaker",
            "translationPt": "Caixa de som"
          },
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina da janela"
          }
        ],
        "options": [
          "Power Plug",
          "Sofa",
          "Speaker",
          "Curtain"
        ],
        "correctAnswer": "Power Plug",
        "explanation": "Exemplo prático: \"Insert the power plug into the socket.\"",
        "phoneticHint": "/ˈpaʊ.ər plʌɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e23",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Light Switch",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Window Blind",
            "emoji": "🪟",
            "label": "Window Blind",
            "translationPt": "Persiana"
          },
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Porta-retrato / Retrato de fotografia"
          },
          {
            "text": "Telephone",
            "emoji": "☎️",
            "label": "Telephone",
            "translationPt": "Telefone fixo"
          },
          {
            "text": "Light Switch",
            "emoji": "💡",
            "label": "Light Switch",
            "translationPt": "Interruptor de luz na parede"
          }
        ],
        "options": [
          "Window Blind",
          "Picture Frame",
          "Telephone",
          "Light Switch"
        ],
        "correctAnswer": "Light Switch",
        "explanation": "Exemplo prático: \"Flip the wall light switch to turn on the lamp.\"",
        "phoneticHint": "/laɪt swɪtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p2-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p2-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p2-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p2-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p2-e25",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Light Bulb",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Game Controller",
            "emoji": "🎮",
            "label": "Game Controller",
            "translationPt": "Controle de videogame / Joystick"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Notebook / Computador portátil"
          },
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada no teto"
          },
          {
            "text": "Armchair",
            "emoji": "🛋️",
            "label": "Armchair",
            "translationPt": "Poltrona"
          }
        ],
        "options": [
          "Game Controller",
          "Computer",
          "Light Bulb",
          "Armchair"
        ],
        "correctAnswer": "Light Bulb",
        "explanation": "Exemplo prático: \"The LED light bulb illuminates the whole room.\"",
        "phoneticHint": "/ˈlaɪt bʌlb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e26",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ceiling Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Ceiling Lamp",
            "emoji": "💡",
            "label": "Ceiling Lamp",
            "translationPt": "Lustre / Plafon de teto"
          },
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado"
          },
          {
            "text": "Power Outlet",
            "emoji": "🔌",
            "label": "Power Outlet",
            "translationPt": "Tomada elétrica na parede"
          },
          {
            "text": "Wi-Fi Router",
            "emoji": "🛜",
            "label": "Wi-Fi Router",
            "translationPt": "Modem / Roteador de internet"
          }
        ],
        "options": [
          "Ceiling Lamp",
          "Air Conditioner",
          "Power Outlet",
          "Wi-Fi Router"
        ],
        "correctAnswer": "Ceiling Lamp",
        "explanation": "Exemplo prático: \"A modern ceiling lamp hangs in the living room.\"",
        "phoneticHint": "/ˈsiː.lɪŋ læmp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e27",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Power Plug",
            "emoji": "🔌",
            "label": "Power Plug",
            "translationPt": "Plugue / Cabo de energia"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária de canto"
          },
          {
            "text": "Cushion",
            "emoji": "🛋️",
            "label": "Cushion",
            "translationPt": "Almofada de sofá"
          },
          {
            "text": "Coffee Table",
            "emoji": "🪑",
            "label": "Coffee Table",
            "translationPt": "Mesa de centro da sala"
          }
        ],
        "options": [
          "Power Plug",
          "Lamp",
          "Cushion",
          "Coffee Table"
        ],
        "correctAnswer": "Lamp",
        "explanation": "Exemplo prático: \"Turn on the warm lamp next to the sofa.\"",
        "phoneticHint": "/læmp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e28",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Fan",
        "visualEmoji": "🌀",
        "visualOptions": [
          {
            "text": "Remote Control",
            "emoji": "📱",
            "label": "Remote Control",
            "translationPt": "Controle remoto da TV"
          },
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador"
          },
          {
            "text": "Light Switch",
            "emoji": "💡",
            "label": "Light Switch",
            "translationPt": "Interruptor de luz na parede"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete da sala"
          }
        ],
        "options": [
          "Remote Control",
          "Fan",
          "Light Switch",
          "Rug"
        ],
        "correctAnswer": "Fan",
        "explanation": "Exemplo prático: \"Turn on the electric fan on warm days.\"",
        "phoneticHint": "/fæn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p2-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p2-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p2-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p2-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p2-e30",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ceiling Fan",
        "visualEmoji": "🌀",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina da janela"
          },
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada no teto"
          },
          {
            "text": "Computer",
            "emoji": "💻",
            "label": "Computer",
            "translationPt": "Notebook / Computador portátil"
          },
          {
            "text": "Ceiling Fan",
            "emoji": "🌀",
            "label": "Ceiling Fan",
            "translationPt": "Ventilador de teto"
          }
        ],
        "options": [
          "Curtain",
          "Light Bulb",
          "Computer",
          "Ceiling Fan"
        ],
        "correctAnswer": "Ceiling Fan",
        "explanation": "Exemplo prático: \"The ceiling fan spins quietly above the sofa.\"",
        "phoneticHint": "/ˈsiː.lɪŋ fæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e31",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Air Conditioner",
        "visualEmoji": "❄️",
        "visualOptions": [
          {
            "text": "Window Blind",
            "emoji": "🪟",
            "label": "Window Blind",
            "translationPt": "Persiana"
          },
          {
            "text": "Television",
            "emoji": "📺",
            "label": "Television",
            "translationPt": "Televisão (Smart TV)"
          },
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado"
          },
          {
            "text": "TV Stand",
            "emoji": "📺",
            "label": "TV Stand",
            "translationPt": "Rack de TV / Painel de sala"
          }
        ],
        "options": [
          "Window Blind",
          "Television",
          "Air Conditioner",
          "TV Stand"
        ],
        "correctAnswer": "Air Conditioner",
        "explanation": "Exemplo prático: \"The split air conditioner cools the living room.\"",
        "phoneticHint": "/ˈer kənˌdɪʃ.ən.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e32",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ceramic Tile",
        "visualEmoji": "⬜",
        "visualOptions": [
          {
            "text": "Ceramic Tile",
            "emoji": "⬜",
            "label": "Ceramic Tile",
            "translationPt": "Piso cerâmico / Porcelanato"
          },
          {
            "text": "Telephone",
            "emoji": "☎️",
            "label": "Telephone",
            "translationPt": "Telefone fixo"
          },
          {
            "text": "Ceiling Lamp",
            "emoji": "💡",
            "label": "Ceiling Lamp",
            "translationPt": "Lustre / Plafon de teto"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária de canto"
          }
        ],
        "options": [
          "Ceramic Tile",
          "Telephone",
          "Ceiling Lamp",
          "Lamp"
        ],
        "correctAnswer": "Ceramic Tile",
        "explanation": "Exemplo prático: \"The living room has shiny ceramic floor tiles.\"",
        "phoneticHint": "/səˈræm.ɪk taɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e33",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bookshelf",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Speaker",
            "emoji": "🔊",
            "label": "Speaker",
            "translationPt": "Caixa de som"
          },
          {
            "text": "Video Game Console",
            "emoji": "🎮",
            "label": "Video Game Console",
            "translationPt": "Videogame (Console)"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante de livros"
          },
          {
            "text": "Sofa",
            "emoji": "🛋️",
            "label": "Sofa",
            "translationPt": "Sofá da sala"
          }
        ],
        "options": [
          "Speaker",
          "Video Game Console",
          "Bookshelf",
          "Sofa"
        ],
        "correctAnswer": "Bookshelf",
        "explanation": "Exemplo prático: \"Our books are organized on the wooden bookshelf.\"",
        "phoneticHint": "/ˈbʊk.ʃelf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p2-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p2-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p2-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p2-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p2-e35",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Clock",
        "visualEmoji": "⏰",
        "visualOptions": [
          {
            "text": "Ceiling Fan",
            "emoji": "🌀",
            "label": "Ceiling Fan",
            "translationPt": "Ventilador de teto"
          },
          {
            "text": "Clock",
            "emoji": "⏰",
            "label": "Clock",
            "translationPt": "Relógio de parede"
          },
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Porta-retrato / Retrato de fotografia"
          },
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador"
          }
        ],
        "options": [
          "Ceiling Fan",
          "Clock",
          "Picture Frame",
          "Fan"
        ],
        "correctAnswer": "Clock",
        "explanation": "Exemplo prático: \"Check the time on the living room wall clock.\"",
        "phoneticHint": "/klɑːk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e36",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Vase",
        "visualEmoji": "🏺",
        "visualOptions": [
          {
            "text": "Remote Control",
            "emoji": "📱",
            "label": "Remote Control",
            "translationPt": "Controle remoto da TV"
          },
          {
            "text": "Power Plug",
            "emoji": "🔌",
            "label": "Power Plug",
            "translationPt": "Plugue / Cabo de energia"
          },
          {
            "text": "Power Outlet",
            "emoji": "🔌",
            "label": "Power Outlet",
            "translationPt": "Tomada elétrica na parede"
          },
          {
            "text": "Vase",
            "emoji": "🏺",
            "label": "Vase",
            "translationPt": "Vaso decorativo"
          }
        ],
        "options": [
          "Remote Control",
          "Power Plug",
          "Power Outlet",
          "Vase"
        ],
        "correctAnswer": "Vase",
        "explanation": "Exemplo prático: \"A ceramic vase sits on the coffee table.\"",
        "phoneticHint": "/veɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e37",
        "type": "image-choice",
        "conceptTitle": "Sala de Estar, TV, Internet & Iluminação • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Telephone",
        "visualEmoji": "☎️",
        "visualOptions": [
          {
            "text": "Telephone",
            "emoji": "☎️",
            "label": "Telephone",
            "translationPt": "Telefone fixo"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete da sala"
          },
          {
            "text": "Light Switch",
            "emoji": "💡",
            "label": "Light Switch",
            "translationPt": "Interruptor de luz na parede"
          },
          {
            "text": "Ceramic Tile",
            "emoji": "⬜",
            "label": "Ceramic Tile",
            "translationPt": "Piso cerâmico / Porcelanato"
          }
        ],
        "options": [
          "Telephone",
          "Rug",
          "Light Switch",
          "Ceramic Tile"
        ],
        "correctAnswer": "Telephone",
        "explanation": "Exemplo prático: \"The home telephone is next to the modem.\"",
        "phoneticHint": "/ˈtel.ə.foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p2-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p2-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p2-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p2-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p3",
    "worldId": 0,
    "phaseNumber": 3,
    "title": "Ambiente 3 • Cozinha I: Armários, Pia, Ilha, Fogão & Eletros",
    "subtitle": "Cômodo 3/12 • Armário, gavetas, pia, torneira, pedra, ilha, coifa, pendentes e eletroportáteis",
    "pedagogicalObjective": "Dominar os móveis planejados, bancadas de pedra, ilha, pia, torneira, coifa, iluminação pendente e eletrodomésticos da cozinha.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Agora entramos na Cozinha! Primeiro observamos toda a estrutura e os aparelhos: Armário (Kitchen Cabinet), Porta do Armário (Cabinet Door), Gavetas (Drawer), Geladeira (Fridge) e a Mesa com Cadeiras (Table & Chair).",
      "Na área de preparo vemos a Pia (Kitchen Sink), a Torneira (Faucet), a Pedra do Armário / Bancada (Granite Countertop), a Ilha (Kitchen Island), o Fogão (Stove), a Coifa (Range Hood), o Depurador de Ar (Air Purifier) e os Pendentes de Luz (Pendant Light).",
      "E nos eletros temos: Forno Micro-ondas (Microwave), Forno Elétrico (Electric Oven), Torradeira (Toaster), Cafeteira (Coffee Maker), Liquidificador (Blender), Batedeira (Stand Mixer) e Air Fryer!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p3-e1",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Kitchen Cabinet",
        "visualEmoji": "🗄️",
        "visualOptions": [
          {
            "text": "Kitchen Cabinet",
            "emoji": "🗄️",
            "label": "Kitchen Cabinet",
            "translationPt": "Armário de cozinha"
          },
          {
            "text": "Electric Oven",
            "emoji": "♨️",
            "label": "Electric Oven",
            "translationPt": "Forno elétrico"
          },
          {
            "text": "Exhaust Hood",
            "emoji": "💨",
            "label": "Exhaust Hood",
            "translationPt": "Depurador de ar"
          },
          {
            "text": "Bar Stool",
            "emoji": "🪑",
            "label": "Bar Stool",
            "translationPt": "Banqueta alta da ilha"
          }
        ],
        "options": [
          "Kitchen Cabinet",
          "Electric Oven",
          "Exhaust Hood",
          "Bar Stool"
        ],
        "correctAnswer": "Kitchen Cabinet",
        "explanation": "Exemplo prático: \"Store the plates inside the kitchen cabinet.\"",
        "phoneticHint": "/ˈkɪtʃ.ən ˈkæb.ɪ.nət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e2",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cabinet Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa de jantar da cozinha"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira de cozinha"
          },
          {
            "text": "Cabinet Door",
            "emoji": "🚪",
            "label": "Cabinet Door",
            "translationPt": "Porta do armário"
          },
          {
            "text": "Toaster",
            "emoji": "🍞",
            "label": "Toaster",
            "translationPt": "Torradeira elétrica"
          }
        ],
        "options": [
          "Table",
          "Trash Can",
          "Cabinet Door",
          "Toaster"
        ],
        "correctAnswer": "Cabinet Door",
        "explanation": "Exemplo prático: \"Open the wooden cabinet door carefully.\"",
        "phoneticHint": "/ˈkæb.ɪ.nət dɔːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e3",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Drawer",
        "visualEmoji": "🗄️",
        "visualOptions": [
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental de cozinha"
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer",
            "translationPt": "Gaveta do armário"
          },
          {
            "text": "Water Dispenser",
            "emoji": "🚰",
            "label": "Water Dispenser",
            "translationPt": "Filtro / Purificador de água"
          },
          {
            "text": "Air Fryer",
            "emoji": "🍟",
            "label": "Air Fryer",
            "translationPt": "Fritadeira elétrica (Air Fryer)"
          }
        ],
        "options": [
          "Apron",
          "Drawer",
          "Water Dispenser",
          "Air Fryer"
        ],
        "correctAnswer": "Drawer",
        "explanation": "Exemplo prático: \"The silverware is kept inside the kitchen drawer.\"",
        "phoneticHint": "/drɔːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p3-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p3-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p3-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p3-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p3-e5",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fridge",
        "visualEmoji": "🧊",
        "visualOptions": [
          {
            "text": "Sandwich Maker",
            "emoji": "🥪",
            "label": "Sandwich Maker",
            "translationPt": "Sanduicheira / Grill elétrico"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          },
          {
            "text": "Stand Mixer",
            "emoji": "🥣",
            "label": "Stand Mixer",
            "translationPt": "Batedeira de bolo"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira / Refrigerador"
          }
        ],
        "options": [
          "Sandwich Maker",
          "Stove",
          "Stand Mixer",
          "Fridge"
        ],
        "correctAnswer": "Fridge",
        "explanation": "Exemplo prático: \"Keep water, milk and food cold in the fridge.\"",
        "phoneticHint": "/frɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e6",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Freezer",
        "visualEmoji": "❄️",
        "visualOptions": [
          {
            "text": "Freezer",
            "emoji": "❄️",
            "label": "Freezer",
            "translationPt": "Freezer / Congelador"
          },
          {
            "text": "Coffee Maker",
            "emoji": "☕",
            "label": "Coffee Maker",
            "translationPt": "Cafeteira elétrica"
          },
          {
            "text": "Countertop",
            "emoji": "🪨",
            "label": "Countertop",
            "translationPt": "Pedra do armário / Bancada de granito"
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira da pia"
          }
        ],
        "options": [
          "Freezer",
          "Coffee Maker",
          "Countertop",
          "Faucet"
        ],
        "correctAnswer": "Freezer",
        "explanation": "Exemplo prático: \"Ice stays frozen inside the freezer compartment.\"",
        "phoneticHint": "/ˈfriː.zər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e7",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Table",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de lavar louça"
          },
          {
            "text": "Cabinet Door",
            "emoji": "🚪",
            "label": "Cabinet Door",
            "translationPt": "Porta do armário"
          },
          {
            "text": "Range Hood",
            "emoji": "💨",
            "label": "Range Hood",
            "translationPt": "Coifa de inox"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa de jantar da cozinha"
          }
        ],
        "options": [
          "Sponge",
          "Cabinet Door",
          "Range Hood",
          "Table"
        ],
        "correctAnswer": "Table",
        "explanation": "Exemplo prático: \"The kitchen table has four chairs around it.\"",
        "phoneticHint": "/ˈteɪ.bəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e8",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chair",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Kitchen Island",
            "emoji": "🏝️",
            "label": "Kitchen Island",
            "translationPt": "Ilha da cozinha"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira elétrica / de fogão"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira da cozinha"
          },
          {
            "text": "Kitchen Cabinet",
            "emoji": "🗄️",
            "label": "Kitchen Cabinet",
            "translationPt": "Armário de cozinha"
          }
        ],
        "options": [
          "Kitchen Island",
          "Kettle",
          "Chair",
          "Kitchen Cabinet"
        ],
        "correctAnswer": "Chair",
        "explanation": "Exemplo prático: \"Pull out a chair and sit at the kitchen table.\"",
        "phoneticHint": "/tʃer/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p3-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p3-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p3-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p3-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p3-e10",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kitchen Sink",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Kitchen Sink",
            "emoji": "🚰",
            "label": "Kitchen Sink",
            "translationPt": "Pia da cozinha (cuba de inox)"
          },
          {
            "text": "Kitchen Scale",
            "emoji": "⚖️",
            "label": "Kitchen Scale",
            "translationPt": "Balança de cozinha"
          },
          {
            "text": "Blender",
            "emoji": "🌪️",
            "label": "Blender",
            "translationPt": "Liquidificador"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira / Refrigerador"
          }
        ],
        "options": [
          "Kitchen Sink",
          "Kitchen Scale",
          "Blender",
          "Fridge"
        ],
        "correctAnswer": "Kitchen Sink",
        "explanation": "Exemplo prático: \"Wash the vegetables in the stainless steel kitchen sink.\"",
        "phoneticHint": "/ˈkɪtʃ.ən sɪŋk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e11",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Faucet",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Forno micro-ondas"
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira da pia"
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer",
            "translationPt": "Gaveta do armário"
          },
          {
            "text": "Freezer",
            "emoji": "❄️",
            "label": "Freezer",
            "translationPt": "Freezer / Congelador"
          }
        ],
        "options": [
          "Microwave",
          "Faucet",
          "Drawer",
          "Freezer"
        ],
        "correctAnswer": "Faucet",
        "explanation": "Exemplo prático: \"Turn on the kitchen faucet to rinse the plate.\"",
        "phoneticHint": "/ˈfɔː.sɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e12",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Countertop",
        "visualEmoji": "🪨",
        "visualOptions": [
          {
            "text": "Stand Mixer",
            "emoji": "🥣",
            "label": "Stand Mixer",
            "translationPt": "Batedeira de bolo"
          },
          {
            "text": "Countertop",
            "emoji": "🪨",
            "label": "Countertop",
            "translationPt": "Pedra do armário / Bancada de granito"
          },
          {
            "text": "Pendant Light",
            "emoji": "💡",
            "label": "Pendant Light",
            "translationPt": "Luminária pendente (sobre a ilha/mesa)"
          },
          {
            "text": "Sandwich Maker",
            "emoji": "🥪",
            "label": "Sandwich Maker",
            "translationPt": "Sanduicheira / Grill elétrico"
          }
        ],
        "options": [
          "Stand Mixer",
          "Countertop",
          "Pendant Light",
          "Sandwich Maker"
        ],
        "correctAnswer": "Countertop",
        "explanation": "Exemplo prático: \"The kitchen cabinet has a polished granite stone countertop.\"",
        "phoneticHint": "/ˈkaʊn.tər.tɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e13",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kitchen Island",
        "visualEmoji": "🏝️",
        "visualOptions": [
          {
            "text": "Cabinet Door",
            "emoji": "🚪",
            "label": "Cabinet Door",
            "translationPt": "Porta do armário"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira da cozinha"
          },
          {
            "text": "Coffee Maker",
            "emoji": "☕",
            "label": "Coffee Maker",
            "translationPt": "Cafeteira elétrica"
          },
          {
            "text": "Kitchen Island",
            "emoji": "🏝️",
            "label": "Kitchen Island",
            "translationPt": "Ilha da cozinha"
          }
        ],
        "options": [
          "Cabinet Door",
          "Chair",
          "Coffee Maker",
          "Kitchen Island"
        ],
        "correctAnswer": "Kitchen Island",
        "explanation": "Exemplo prático: \"We prepare meals on the central kitchen island.\"",
        "phoneticHint": "/ˈkɪtʃ.ən ˈaɪ.lənd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p3-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p3-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p3-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p3-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p3-e15",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bar Stool",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Kitchen Sink",
            "emoji": "🚰",
            "label": "Kitchen Sink",
            "translationPt": "Pia da cozinha (cuba de inox)"
          },
          {
            "text": "Blender",
            "emoji": "🌪️",
            "label": "Blender",
            "translationPt": "Liquidificador"
          },
          {
            "text": "Bar Stool",
            "emoji": "🪑",
            "label": "Bar Stool",
            "translationPt": "Banqueta alta da ilha"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira / Refrigerador"
          }
        ],
        "options": [
          "Kitchen Sink",
          "Blender",
          "Bar Stool",
          "Fridge"
        ],
        "correctAnswer": "Bar Stool",
        "explanation": "Exemplo prático: \"High bar stools are placed next to the kitchen island.\"",
        "phoneticHint": "/bɑːr stuːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e16",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Stove",
        "visualEmoji": "🔥",
        "visualOptions": [
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          },
          {
            "text": "Kitchen Scale",
            "emoji": "⚖️",
            "label": "Kitchen Scale",
            "translationPt": "Balança de cozinha"
          },
          {
            "text": "Kitchen Cabinet",
            "emoji": "🗄️",
            "label": "Kitchen Cabinet",
            "translationPt": "Armário de cozinha"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira elétrica / de fogão"
          }
        ],
        "options": [
          "Stove",
          "Kitchen Scale",
          "Kitchen Cabinet",
          "Kettle"
        ],
        "correctAnswer": "Stove",
        "explanation": "Exemplo prático: \"Cook rice and beans on the gas stove.\"",
        "phoneticHint": "/stoʊv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e17",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Range Hood",
        "visualEmoji": "💨",
        "visualOptions": [
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental de cozinha"
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer",
            "translationPt": "Gaveta do armário"
          },
          {
            "text": "Range Hood",
            "emoji": "💨",
            "label": "Range Hood",
            "translationPt": "Coifa de inox"
          },
          {
            "text": "Air Fryer",
            "emoji": "🍟",
            "label": "Air Fryer",
            "translationPt": "Fritadeira elétrica (Air Fryer)"
          }
        ],
        "options": [
          "Apron",
          "Drawer",
          "Range Hood",
          "Air Fryer"
        ],
        "correctAnswer": "Range Hood",
        "explanation": "Exemplo prático: \"The stainless steel range hood removes smoke above the stove.\"",
        "phoneticHint": "/reɪndʒ hʊd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e18",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Exhaust Hood",
        "visualEmoji": "💨",
        "visualOptions": [
          {
            "text": "Water Dispenser",
            "emoji": "🚰",
            "label": "Water Dispenser",
            "translationPt": "Filtro / Purificador de água"
          },
          {
            "text": "Exhaust Hood",
            "emoji": "💨",
            "label": "Exhaust Hood",
            "translationPt": "Depurador de ar"
          },
          {
            "text": "Toaster",
            "emoji": "🍞",
            "label": "Toaster",
            "translationPt": "Torradeira elétrica"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa de jantar da cozinha"
          }
        ],
        "options": [
          "Water Dispenser",
          "Exhaust Hood",
          "Toaster",
          "Table"
        ],
        "correctAnswer": "Exhaust Hood",
        "explanation": "Exemplo prático: \"Turn on the slim exhaust hood while frying food.\"",
        "phoneticHint": "/ɪɡˈzɔːst hʊd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p3-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p3-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p3-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p3-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p3-e20",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pendant Light",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira da cozinha"
          },
          {
            "text": "Freezer",
            "emoji": "❄️",
            "label": "Freezer",
            "translationPt": "Freezer / Congelador"
          },
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira da pia"
          },
          {
            "text": "Pendant Light",
            "emoji": "💡",
            "label": "Pendant Light",
            "translationPt": "Luminária pendente (sobre a ilha/mesa)"
          }
        ],
        "options": [
          "Chair",
          "Freezer",
          "Faucet",
          "Pendant Light"
        ],
        "correctAnswer": "Pendant Light",
        "explanation": "Exemplo prático: \"Hanging pendant lights illuminate the kitchen island.\"",
        "phoneticHint": "/ˈpen.dənt laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e21",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Microwave",
        "visualEmoji": "⏲️",
        "visualOptions": [
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Forno micro-ondas"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de lavar louça"
          },
          {
            "text": "Countertop",
            "emoji": "🪨",
            "label": "Countertop",
            "translationPt": "Pedra do armário / Bancada de granito"
          }
        ],
        "options": [
          "Microwave",
          "Stove",
          "Sponge",
          "Countertop"
        ],
        "correctAnswer": "Microwave",
        "explanation": "Exemplo prático: \"Warm up your lunch in the microwave oven.\"",
        "phoneticHint": "/ˈmaɪ.krə.weɪv/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e22",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Electric Oven",
        "visualEmoji": "♨️",
        "visualOptions": [
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira de cozinha"
          },
          {
            "text": "Range Hood",
            "emoji": "💨",
            "label": "Range Hood",
            "translationPt": "Coifa de inox"
          },
          {
            "text": "Bar Stool",
            "emoji": "🪑",
            "label": "Bar Stool",
            "translationPt": "Banqueta alta da ilha"
          },
          {
            "text": "Electric Oven",
            "emoji": "♨️",
            "label": "Electric Oven",
            "translationPt": "Forno elétrico"
          }
        ],
        "options": [
          "Trash Can",
          "Range Hood",
          "Bar Stool",
          "Electric Oven"
        ],
        "correctAnswer": "Electric Oven",
        "explanation": "Exemplo prático: \"Bake bread and pies inside the electric oven.\"",
        "phoneticHint": "/ɪˈlek.trɪk ˈʌv.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e23",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Toaster",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Exhaust Hood",
            "emoji": "💨",
            "label": "Exhaust Hood",
            "translationPt": "Depurador de ar"
          },
          {
            "text": "Kitchen Island",
            "emoji": "🏝️",
            "label": "Kitchen Island",
            "translationPt": "Ilha da cozinha"
          },
          {
            "text": "Toaster",
            "emoji": "🍞",
            "label": "Toaster",
            "translationPt": "Torradeira elétrica"
          },
          {
            "text": "Kitchen Sink",
            "emoji": "🚰",
            "label": "Kitchen Sink",
            "translationPt": "Pia da cozinha (cuba de inox)"
          }
        ],
        "options": [
          "Exhaust Hood",
          "Kitchen Island",
          "Toaster",
          "Kitchen Sink"
        ],
        "correctAnswer": "Toaster",
        "explanation": "Exemplo prático: \"Toast two slices of bread in the toaster.\"",
        "phoneticHint": "/ˈtoʊ.stər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p3-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p3-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p3-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p3-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p3-e25",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Coffee Maker",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Coffee Maker",
            "emoji": "☕",
            "label": "Coffee Maker",
            "translationPt": "Cafeteira elétrica"
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer",
            "translationPt": "Gaveta do armário"
          },
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental de cozinha"
          },
          {
            "text": "Pendant Light",
            "emoji": "💡",
            "label": "Pendant Light",
            "translationPt": "Luminária pendente (sobre a ilha/mesa)"
          }
        ],
        "options": [
          "Coffee Maker",
          "Drawer",
          "Apron",
          "Pendant Light"
        ],
        "correctAnswer": "Coffee Maker",
        "explanation": "Exemplo prático: \"Fresh coffee is brewing in the coffee maker.\"",
        "phoneticHint": "/ˈkɔː.fi ˌmeɪ.kər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e26",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Blender",
        "visualEmoji": "🌪️",
        "visualOptions": [
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Forno micro-ondas"
          },
          {
            "text": "Blender",
            "emoji": "🌪️",
            "label": "Blender",
            "translationPt": "Liquidificador"
          },
          {
            "text": "Stove",
            "emoji": "🔥",
            "label": "Stove",
            "translationPt": "Fogão"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de lavar louça"
          }
        ],
        "options": [
          "Microwave",
          "Blender",
          "Stove",
          "Sponge"
        ],
        "correctAnswer": "Blender",
        "explanation": "Exemplo prático: \"Blend fresh fruit smoothie in the blender.\"",
        "phoneticHint": "/ˈblen.dər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e27",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Stand Mixer",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Electric Oven",
            "emoji": "♨️",
            "label": "Electric Oven",
            "translationPt": "Forno elétrico"
          },
          {
            "text": "Stand Mixer",
            "emoji": "🥣",
            "label": "Stand Mixer",
            "translationPt": "Batedeira de bolo"
          },
          {
            "text": "Fridge",
            "emoji": "🧊",
            "label": "Fridge",
            "translationPt": "Geladeira / Refrigerador"
          },
          {
            "text": "Freezer",
            "emoji": "❄️",
            "label": "Freezer",
            "translationPt": "Freezer / Congelador"
          }
        ],
        "options": [
          "Electric Oven",
          "Stand Mixer",
          "Fridge",
          "Freezer"
        ],
        "correctAnswer": "Stand Mixer",
        "explanation": "Exemplo prático: \"Mix the cake batter with an electric stand mixer.\"",
        "phoneticHint": "/stænd ˈmɪk.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e28",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Air Fryer",
        "visualEmoji": "🍟",
        "visualOptions": [
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira da pia"
          },
          {
            "text": "Range Hood",
            "emoji": "💨",
            "label": "Range Hood",
            "translationPt": "Coifa de inox"
          },
          {
            "text": "Cabinet Door",
            "emoji": "🚪",
            "label": "Cabinet Door",
            "translationPt": "Porta do armário"
          },
          {
            "text": "Air Fryer",
            "emoji": "🍟",
            "label": "Air Fryer",
            "translationPt": "Fritadeira elétrica (Air Fryer)"
          }
        ],
        "options": [
          "Faucet",
          "Range Hood",
          "Cabinet Door",
          "Air Fryer"
        ],
        "correctAnswer": "Air Fryer",
        "explanation": "Exemplo prático: \"Cook crispy potatoes in the electric air fryer.\"",
        "phoneticHint": "/er ˈfraɪ.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p3-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p3-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p3-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p3-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p3-e30",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Sandwich Maker",
        "visualEmoji": "🥪",
        "visualOptions": [
          {
            "text": "Kitchen Sink",
            "emoji": "🚰",
            "label": "Kitchen Sink",
            "translationPt": "Pia da cozinha (cuba de inox)"
          },
          {
            "text": "Kitchen Cabinet",
            "emoji": "🗄️",
            "label": "Kitchen Cabinet",
            "translationPt": "Armário de cozinha"
          },
          {
            "text": "Sandwich Maker",
            "emoji": "🥪",
            "label": "Sandwich Maker",
            "translationPt": "Sanduicheira / Grill elétrico"
          },
          {
            "text": "Kitchen Island",
            "emoji": "🏝️",
            "label": "Kitchen Island",
            "translationPt": "Ilha da cozinha"
          }
        ],
        "options": [
          "Kitchen Sink",
          "Kitchen Cabinet",
          "Sandwich Maker",
          "Kitchen Island"
        ],
        "correctAnswer": "Sandwich Maker",
        "explanation": "Exemplo prático: \"Toast a warm cheese sandwich in the sandwich maker.\"",
        "phoneticHint": "/ˈsæn.wɪtʃ ˈmeɪ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e31",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Water Dispenser",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Water Dispenser",
            "emoji": "🚰",
            "label": "Water Dispenser",
            "translationPt": "Filtro / Purificador de água"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa de jantar da cozinha"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira de cozinha"
          },
          {
            "text": "Toaster",
            "emoji": "🍞",
            "label": "Toaster",
            "translationPt": "Torradeira elétrica"
          }
        ],
        "options": [
          "Water Dispenser",
          "Table",
          "Trash Can",
          "Toaster"
        ],
        "correctAnswer": "Water Dispenser",
        "explanation": "Exemplo prático: \"Get cold filtered water from the water dispenser.\"",
        "phoneticHint": "/ˈwɔː.tər dɪˌspen.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e32",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kettle",
        "visualEmoji": "🫖",
        "visualOptions": [
          {
            "text": "Bar Stool",
            "emoji": "🪑",
            "label": "Bar Stool",
            "translationPt": "Banqueta alta da ilha"
          },
          {
            "text": "Exhaust Hood",
            "emoji": "💨",
            "label": "Exhaust Hood",
            "translationPt": "Depurador de ar"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira elétrica / de fogão"
          },
          {
            "text": "Electric Oven",
            "emoji": "♨️",
            "label": "Electric Oven",
            "translationPt": "Forno elétrico"
          }
        ],
        "options": [
          "Bar Stool",
          "Exhaust Hood",
          "Kettle",
          "Electric Oven"
        ],
        "correctAnswer": "Kettle",
        "explanation": "Exemplo prático: \"Boil water for tea in the stainless steel kettle.\"",
        "phoneticHint": "/ˈket.əl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e33",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Kitchen Scale",
        "visualEmoji": "⚖️",
        "visualOptions": [
          {
            "text": "Microwave",
            "emoji": "⏲️",
            "label": "Microwave",
            "translationPt": "Forno micro-ondas"
          },
          {
            "text": "Kitchen Scale",
            "emoji": "⚖️",
            "label": "Kitchen Scale",
            "translationPt": "Balança de cozinha"
          },
          {
            "text": "Stand Mixer",
            "emoji": "🥣",
            "label": "Stand Mixer",
            "translationPt": "Batedeira de bolo"
          },
          {
            "text": "Pendant Light",
            "emoji": "💡",
            "label": "Pendant Light",
            "translationPt": "Luminária pendente (sobre a ilha/mesa)"
          }
        ],
        "options": [
          "Microwave",
          "Kitchen Scale",
          "Stand Mixer",
          "Pendant Light"
        ],
        "correctAnswer": "Kitchen Scale",
        "explanation": "Exemplo prático: \"Weigh the flour on the digital kitchen scale.\"",
        "phoneticHint": "/ˈkɪtʃ.ən skeɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p3-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p3-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p3-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p3-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p3-e35",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sponge",
        "visualEmoji": "🧽",
        "visualOptions": [
          {
            "text": "Coffee Maker",
            "emoji": "☕",
            "label": "Coffee Maker",
            "translationPt": "Cafeteira elétrica"
          },
          {
            "text": "Countertop",
            "emoji": "🪨",
            "label": "Countertop",
            "translationPt": "Pedra do armário / Bancada de granito"
          },
          {
            "text": "Chair",
            "emoji": "🪑",
            "label": "Chair",
            "translationPt": "Cadeira da cozinha"
          },
          {
            "text": "Sponge",
            "emoji": "🧽",
            "label": "Sponge",
            "translationPt": "Esponja de lavar louça"
          }
        ],
        "options": [
          "Coffee Maker",
          "Countertop",
          "Chair",
          "Sponge"
        ],
        "correctAnswer": "Sponge",
        "explanation": "Exemplo prático: \"Wash the dishes with soap and a kitchen sponge.\"",
        "phoneticHint": "/spʌndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e36",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Apron",
        "visualEmoji": "🎽",
        "visualOptions": [
          {
            "text": "Apron",
            "emoji": "🎽",
            "label": "Apron",
            "translationPt": "Avental de cozinha"
          },
          {
            "text": "Blender",
            "emoji": "🌪️",
            "label": "Blender",
            "translationPt": "Liquidificador"
          },
          {
            "text": "Air Fryer",
            "emoji": "🍟",
            "label": "Air Fryer",
            "translationPt": "Fritadeira elétrica (Air Fryer)"
          },
          {
            "text": "Sandwich Maker",
            "emoji": "🥪",
            "label": "Sandwich Maker",
            "translationPt": "Sanduicheira / Grill elétrico"
          }
        ],
        "options": [
          "Apron",
          "Blender",
          "Air Fryer",
          "Sandwich Maker"
        ],
        "correctAnswer": "Apron",
        "explanation": "Exemplo prático: \"Wear a clean apron while cooking in the kitchen.\"",
        "phoneticHint": "/ˈeɪ.prən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p3-e37",
        "type": "image-choice",
        "conceptTitle": "Cozinha I: Armários, Pia, Ilha, Fogão & Eletros • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Trash Can",
        "visualEmoji": "🗑️",
        "visualOptions": [
          {
            "text": "Water Dispenser",
            "emoji": "🚰",
            "label": "Water Dispenser",
            "translationPt": "Filtro / Purificador de água"
          },
          {
            "text": "Kitchen Cabinet",
            "emoji": "🗄️",
            "label": "Kitchen Cabinet",
            "translationPt": "Armário de cozinha"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira elétrica / de fogão"
          },
          {
            "text": "Trash Can",
            "emoji": "🗑️",
            "label": "Trash Can",
            "translationPt": "Lixeira de cozinha"
          }
        ],
        "options": [
          "Water Dispenser",
          "Kitchen Cabinet",
          "Kettle",
          "Trash Can"
        ],
        "correctAnswer": "Trash Can",
        "explanation": "Exemplo prático: \"Step on the pedal to open the kitchen trash can.\"",
        "phoneticHint": "/ˈtræʃ kæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p3-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p3-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p3-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p3-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p4",
    "worldId": 0,
    "phaseNumber": 4,
    "title": "Ambiente 4 • Cozinha II: Panelas, Talheres & Dentro da Geladeira",
    "subtitle": "Cômodo 4/12 • Modelos de panelas, utensílios de gaveta, louças e alimentos na geladeira",
    "pedagogicalObjective": "Conhecer cada modelo de panela (caçarola, frigideira, panela de pressão), os talheres e utensílios das gavetas e o que vemos ao abrir a geladeira.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Continuando na Cozinha, agora abrimos os armários, as gavetas e a porta da geladeira!",
      "Veja os vários modelos de panelas: Panela de cozinhar (Cooking Pot), Frigideira (Frying Pan), Panela de Pressão (Pressure Cooker) e Assadeira (Baking Tray).",
      "Nas gavetas temos os talheres e utensílios (Fork, Knife, Spoon, Ladle, Spatula, Grater, Strainer, Cutting Board) e, dentro da geladeira, vemos Garrafa de Água (Bottle), Leite (Milk), Manteiga (Butter), Queijo (Cheese), Ovos (Egg), Suco (Juice) e frutas/verduras!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p4-e1",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cooking Pot",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto (na geladeira)"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo (na porta/prateleira da geladeira)"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela com tampa"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          }
        ],
        "options": [
          "Ham",
          "Egg",
          "Cooking Pot",
          "Bowl"
        ],
        "correctAnswer": "Cooking Pot",
        "explanation": "Exemplo prático: \"Boil soup and pasta in the stainless steel cooking pot.\"",
        "phoneticHint": "/ˈkʊk.ɪŋ pɑːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e2",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Frying Pan",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira antiaderente"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa de água (na geladeira)"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca de cozinha"
          }
        ],
        "options": [
          "Napkin",
          "Frying Pan",
          "Bottle",
          "Knife"
        ],
        "correctAnswer": "Frying Pan",
        "explanation": "Exemplo prático: \"Fry eggs in a non-stick frying pan.\"",
        "phoneticHint": "/ˈfraɪ.ɪŋ pæn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e3",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pressure Cooker",
        "visualEmoji": "🍲",
        "visualOptions": [
          {
            "text": "Grater",
            "emoji": "🧀",
            "label": "Grater",
            "translationPt": "Ralador de queijo e legumes"
          },
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro com tampa"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Jarra de suco (na geladeira)"
          },
          {
            "text": "Pressure Cooker",
            "emoji": "🍲",
            "label": "Pressure Cooker",
            "translationPt": "Panela de pressão"
          }
        ],
        "options": [
          "Grater",
          "Jar",
          "Juice",
          "Pressure Cooker"
        ],
        "correctAnswer": "Pressure Cooker",
        "explanation": "Exemplo prático: \"Cook beans fast in the aluminum pressure cooker.\"",
        "phoneticHint": "/ˈpreʃ.ər ˌkʊk.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p4-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p4-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p4-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p4-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-e5",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Baking Tray",
        "visualEmoji": "🥮",
        "visualOptions": [
          {
            "text": "Baking Tray",
            "emoji": "🥮",
            "label": "Baking Tray",
            "translationPt": "Assadeira / Forma de forno"
          },
          {
            "text": "Soup Ladle",
            "emoji": "🥄",
            "label": "Soup Ladle",
            "translationPt": "Concha de feijão / sopa"
          },
          {
            "text": "Strainer",
            "emoji": "🥣",
            "label": "Strainer",
            "translationPt": "Peneira / Escorredor de cozinha"
          },
          {
            "text": "Spatula",
            "emoji": "🍳",
            "label": "Spatula",
            "translationPt": "Espátula / Escumadeira"
          }
        ],
        "options": [
          "Baking Tray",
          "Soup Ladle",
          "Strainer",
          "Spatula"
        ],
        "correctAnswer": "Baking Tray",
        "explanation": "Exemplo prático: \"Put the metal baking tray inside the oven.\"",
        "phoneticHint": "/ˈbeɪ.kɪŋ treɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e6",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Fork",
        "visualEmoji": "🍴",
        "visualOptions": [
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela com tampa"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          }
        ],
        "options": [
          "Cup",
          "Cutting Board",
          "Cooking Pot",
          "Fork"
        ],
        "correctAnswer": "Fork",
        "explanation": "Exemplo prático: \"Take a clean fork from the kitchen drawer.\"",
        "phoneticHint": "/fɔːrk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e7",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Knife",
        "visualEmoji": "🔪",
        "visualOptions": [
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira antiaderente"
          },
          {
            "text": "Rolling Pin",
            "emoji": "🥖",
            "label": "Rolling Pin",
            "translationPt": "Rolo de abrir massa"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca de cozinha"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface (na gaveta da geladeira)"
          }
        ],
        "options": [
          "Frying Pan",
          "Rolling Pin",
          "Knife",
          "Lettuce"
        ],
        "correctAnswer": "Knife",
        "explanation": "Exemplo prático: \"Slice the meat carefully with a sharp knife.\"",
        "phoneticHint": "/naɪf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e8",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Spoon",
        "visualEmoji": "🥄",
        "visualOptions": [
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo (na geladeira)"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte (na geladeira)"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga (na geladeira)"
          }
        ],
        "options": [
          "Spoon",
          "Cheese",
          "Yogurt",
          "Butter"
        ],
        "correctAnswer": "Spoon",
        "explanation": "Exemplo prático: \"Use a metal spoon to eat soup.\"",
        "phoneticHint": "/spuːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p4-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p4-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p4-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p4-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-e10",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Soup Ladle",
        "visualEmoji": "🥄",
        "visualOptions": [
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Soup Ladle",
            "emoji": "🥄",
            "label": "Soup Ladle",
            "translationPt": "Concha de feijão / sopa"
          },
          {
            "text": "Baking Tray",
            "emoji": "🥮",
            "label": "Baking Tray",
            "translationPt": "Assadeira / Forma de forno"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã (na fruteira / geladeira)"
          }
        ],
        "options": [
          "Salt Shaker",
          "Soup Ladle",
          "Baking Tray",
          "Apple"
        ],
        "correctAnswer": "Soup Ladle",
        "explanation": "Exemplo prático: \"Serve hot soup with a deep metal ladle.\"",
        "phoneticHint": "/suːp ˈleɪ.dəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e11",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Spatula",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          },
          {
            "text": "Spatula",
            "emoji": "🍳",
            "label": "Spatula",
            "translationPt": "Espátula / Escumadeira"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite (na geladeira)"
          }
        ],
        "options": [
          "Glass",
          "Spatula",
          "Fork",
          "Milk"
        ],
        "correctAnswer": "Spatula",
        "explanation": "Exemplo prático: \"Flip the pancake with a kitchen spatula.\"",
        "phoneticHint": "/ˈspætʃ.ə.lə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e12",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Grater",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Pressure Cooker",
            "emoji": "🍲",
            "label": "Pressure Cooker",
            "translationPt": "Panela de pressão"
          },
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro com tampa"
          },
          {
            "text": "Grater",
            "emoji": "🧀",
            "label": "Grater",
            "translationPt": "Ralador de queijo e legumes"
          }
        ],
        "options": [
          "Plate",
          "Pressure Cooker",
          "Jar",
          "Grater"
        ],
        "correctAnswer": "Grater",
        "explanation": "Exemplo prático: \"Grate the cheese using a metal box grater.\"",
        "phoneticHint": "/ˈɡreɪ.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e13",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Strainer",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface (na gaveta da geladeira)"
          },
          {
            "text": "Strainer",
            "emoji": "🥣",
            "label": "Strainer",
            "translationPt": "Peneira / Escorredor de cozinha"
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira antiaderente"
          }
        ],
        "options": [
          "Spoon",
          "Lettuce",
          "Strainer",
          "Frying Pan"
        ],
        "correctAnswer": "Strainer",
        "explanation": "Exemplo prático: \"Wash the rice using a fine mesh strainer.\"",
        "phoneticHint": "/ˈstreɪ.nər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p4-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p4-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p4-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p4-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-e15",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Cutting Board",
        "visualEmoji": "🪵",
        "visualOptions": [
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          },
          {
            "text": "Baking Tray",
            "emoji": "🥮",
            "label": "Baking Tray",
            "translationPt": "Assadeira / Forma de forno"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa de água (na geladeira)"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga (na geladeira)"
          }
        ],
        "options": [
          "Cutting Board",
          "Baking Tray",
          "Bottle",
          "Butter"
        ],
        "correctAnswer": "Cutting Board",
        "explanation": "Exemplo prático: \"Chop tomatoes and onions on the wooden cutting board.\"",
        "phoneticHint": "/ˈkʌt.ɪŋ bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e16",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Rolling Pin",
        "visualEmoji": "🥖",
        "visualOptions": [
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto (na geladeira)"
          },
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Rolling Pin",
            "emoji": "🥖",
            "label": "Rolling Pin",
            "translationPt": "Rolo de abrir massa"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca de cozinha"
          }
        ],
        "options": [
          "Ham",
          "Napkin",
          "Rolling Pin",
          "Knife"
        ],
        "correctAnswer": "Rolling Pin",
        "explanation": "Exemplo prático: \"Roll the bread dough with a wooden rolling pin.\"",
        "phoneticHint": "/ˈroʊ.lɪŋ pɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e17",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Plate",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã (na fruteira / geladeira)"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo (na porta/prateleira da geladeira)"
          }
        ],
        "options": [
          "Apple",
          "Plate",
          "Fork",
          "Egg"
        ],
        "correctAnswer": "Plate",
        "explanation": "Exemplo prático: \"Set the white ceramic plates on the table.\"",
        "phoneticHint": "/pleɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e18",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bowl",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Pressure Cooker",
            "emoji": "🍲",
            "label": "Pressure Cooker",
            "translationPt": "Panela de pressão"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Jarra de suco (na geladeira)"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite (na geladeira)"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          }
        ],
        "options": [
          "Pressure Cooker",
          "Juice",
          "Milk",
          "Bowl"
        ],
        "correctAnswer": "Bowl",
        "explanation": "Exemplo prático: \"Pour cereal and milk into the ceramic bowl.\"",
        "phoneticHint": "/boʊl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p4-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p4-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p4-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p4-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-e20",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Glass",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo (na geladeira)"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela com tampa"
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          }
        ],
        "options": [
          "Glass",
          "Cheese",
          "Cooking Pot",
          "Cutting Board"
        ],
        "correctAnswer": "Glass",
        "explanation": "Exemplo prático: \"Drink cold water from a clear glass.\"",
        "phoneticHint": "/ɡlæs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e21",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cup",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Rolling Pin",
            "emoji": "🥖",
            "label": "Rolling Pin",
            "translationPt": "Rolo de abrir massa"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte (na geladeira)"
          },
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          }
        ],
        "options": [
          "Spoon",
          "Rolling Pin",
          "Yogurt",
          "Cup"
        ],
        "correctAnswer": "Cup",
        "explanation": "Exemplo prático: \"Serve hot coffee in a porcelain cup.\"",
        "phoneticHint": "/kʌp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e22",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Jar",
        "visualEmoji": "🫙",
        "visualOptions": [
          {
            "text": "Strainer",
            "emoji": "🥣",
            "label": "Strainer",
            "translationPt": "Peneira / Escorredor de cozinha"
          },
          {
            "text": "Spatula",
            "emoji": "🍳",
            "label": "Spatula",
            "translationPt": "Espátula / Escumadeira"
          },
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro com tampa"
          },
          {
            "text": "Soup Ladle",
            "emoji": "🥄",
            "label": "Soup Ladle",
            "translationPt": "Concha de feijão / sopa"
          }
        ],
        "options": [
          "Strainer",
          "Spatula",
          "Jar",
          "Soup Ladle"
        ],
        "correctAnswer": "Jar",
        "explanation": "Exemplo prático: \"Store food inside a sealed glass jar.\"",
        "phoneticHint": "/dʒɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e23",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Salt Shaker",
        "visualEmoji": "🧂",
        "visualOptions": [
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Grater",
            "emoji": "🧀",
            "label": "Grater",
            "translationPt": "Ralador de queijo e legumes"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          }
        ],
        "options": [
          "Salt Shaker",
          "Plate",
          "Grater",
          "Bowl"
        ],
        "correctAnswer": "Salt Shaker",
        "explanation": "Exemplo prático: \"The salt shaker is on the kitchen counter.\"",
        "phoneticHint": "/ˈsɔːlt ˌʃeɪ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p4-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p4-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p4-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p4-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-e25",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Napkin",
        "visualEmoji": "🧻",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã (na fruteira / geladeira)"
          },
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca de cozinha"
          },
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          }
        ],
        "options": [
          "Apple",
          "Napkin",
          "Knife",
          "Glass"
        ],
        "correctAnswer": "Napkin",
        "explanation": "Exemplo prático: \"Place paper napkins next to the plates.\"",
        "phoneticHint": "/ˈnæp.kɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e26",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bottle",
        "visualEmoji": "🍾",
        "visualOptions": [
          {
            "text": "Pressure Cooker",
            "emoji": "🍲",
            "label": "Pressure Cooker",
            "translationPt": "Panela de pressão"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa de água (na geladeira)"
          },
          {
            "text": "Spoon",
            "emoji": "🥄",
            "label": "Spoon",
            "translationPt": "Colher"
          },
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          }
        ],
        "options": [
          "Pressure Cooker",
          "Bottle",
          "Spoon",
          "Cup"
        ],
        "correctAnswer": "Bottle",
        "explanation": "Exemplo prático: \"There is a cold water bottle inside the fridge.\"",
        "phoneticHint": "/ˈbɑː.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e27",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
        "visualOptions": [
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira antiaderente"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela com tampa"
          },
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite (na geladeira)"
          }
        ],
        "options": [
          "Frying Pan",
          "Fork",
          "Cooking Pot",
          "Milk"
        ],
        "correctAnswer": "Milk",
        "explanation": "Exemplo prático: \"Keep the fresh milk inside the refrigerator.\"",
        "phoneticHint": "/mɪlk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e28",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Butter",
        "visualEmoji": "🧈",
        "visualOptions": [
          {
            "text": "Rolling Pin",
            "emoji": "🥖",
            "label": "Rolling Pin",
            "translationPt": "Rolo de abrir massa"
          },
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga (na geladeira)"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface (na gaveta da geladeira)"
          }
        ],
        "options": [
          "Rolling Pin",
          "Salt Shaker",
          "Butter",
          "Lettuce"
        ],
        "correctAnswer": "Butter",
        "explanation": "Exemplo prático: \"Take the butter out of the fridge for breakfast.\"",
        "phoneticHint": "/ˈbʌt.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p4-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p4-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p4-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p4-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-e30",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo (na geladeira)"
          },
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto (na geladeira)"
          },
          {
            "text": "Baking Tray",
            "emoji": "🥮",
            "label": "Baking Tray",
            "translationPt": "Assadeira / Forma de forno"
          },
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          }
        ],
        "options": [
          "Cheese",
          "Ham",
          "Baking Tray",
          "Bowl"
        ],
        "correctAnswer": "Cheese",
        "explanation": "Exemplo prático: \"Sliced yellow cheese is stored in the fridge.\"",
        "phoneticHint": "/tʃiːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e31",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Yogurt",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte (na geladeira)"
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa de água (na geladeira)"
          }
        ],
        "options": [
          "Napkin",
          "Cutting Board",
          "Yogurt",
          "Bottle"
        ],
        "correctAnswer": "Yogurt",
        "explanation": "Exemplo prático: \"Cold strawberry yogurt is in the refrigerator.\"",
        "phoneticHint": "/ˈjoʊ.ɡərt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e32",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Egg",
        "visualEmoji": "🥚",
        "visualOptions": [
          {
            "text": "Grater",
            "emoji": "🧀",
            "label": "Grater",
            "translationPt": "Ralador de queijo e legumes"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo (na porta/prateleira da geladeira)"
          },
          {
            "text": "Jar",
            "emoji": "🫙",
            "label": "Jar",
            "translationPt": "Pote de vidro com tampa"
          },
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          }
        ],
        "options": [
          "Grater",
          "Egg",
          "Jar",
          "Glass"
        ],
        "correctAnswer": "Egg",
        "explanation": "Exemplo prático: \"There are twelve eggs in the refrigerator.\"",
        "phoneticHint": "/eɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e33",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Juice",
        "visualEmoji": "🧃",
        "visualOptions": [
          {
            "text": "Strainer",
            "emoji": "🥣",
            "label": "Strainer",
            "translationPt": "Peneira / Escorredor de cozinha"
          },
          {
            "text": "Soup Ladle",
            "emoji": "🥄",
            "label": "Soup Ladle",
            "translationPt": "Concha de feijão / sopa"
          },
          {
            "text": "Spatula",
            "emoji": "🍳",
            "label": "Spatula",
            "translationPt": "Espátula / Escumadeira"
          },
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Jarra de suco (na geladeira)"
          }
        ],
        "options": [
          "Strainer",
          "Soup Ladle",
          "Spatula",
          "Juice"
        ],
        "correctAnswer": "Juice",
        "explanation": "Exemplo prático: \"Cold orange juice is ready in the fridge.\"",
        "phoneticHint": "/dʒuːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p4-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p4-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p4-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p4-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-e35",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ham",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto (na geladeira)"
          },
          {
            "text": "Cup",
            "emoji": "☕",
            "label": "Cup",
            "translationPt": "Xícara"
          },
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
          },
          {
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo (na geladeira)"
          }
        ],
        "options": [
          "Ham",
          "Cup",
          "Salt Shaker",
          "Cheese"
        ],
        "correctAnswer": "Ham",
        "explanation": "Exemplo prático: \"Keep cheese and ham cold in the refrigerator.\"",
        "phoneticHint": "/hæm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-e36",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Lettuce",
        "visualEmoji": "🥬",
        "visualOptions": [
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga (na geladeira)"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte (na geladeira)"
          },
          {
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface (na gaveta da geladeira)"
          }
        ],
        "options": [
          "Plate",
          "Butter",
          "Yogurt",
          "Lettuce"
        ],
        "correctAnswer": "Lettuce",
        "explanation": "Exemplo prático: \"Fresh green lettuce stays crisp in the fridge drawer.\"",
        "phoneticHint": "/ˈlet.ɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p4-e37",
        "type": "image-choice",
        "conceptTitle": "Cozinha II: Panelas, Talheres & Dentro da Geladeira • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Milk",
            "emoji": "🥛",
            "label": "Milk",
            "translationPt": "Leite (na geladeira)"
          },
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã (na fruteira / geladeira)"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo (na porta/prateleira da geladeira)"
          }
        ],
        "options": [
          "Milk",
          "Napkin",
          "Apple",
          "Egg"
        ],
        "correctAnswer": "Apple",
        "explanation": "Exemplo prático: \"I eat a cold red apple from the kitchen.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p4-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p4-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p4-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p4-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p4-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p5",
    "worldId": 0,
    "phaseNumber": 5,
    "title": "Ambiente 5 • Quarto de Dormir, Cama, Guarda-Roupa & Vestuário",
    "subtitle": "Cômodo 5/12 • Cama, colchão, travesseiro, cobertor, guarda-roupa, cabide, roupas e calçados",
    "pedagogicalObjective": "Dominar cada item do quarto de dormir, roupas de cama, móveis do quarto e todas as peças de roupa e calçados do guarda-roupa.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Saindo da cozinha pelo corredor, entramos no Quarto de Dormir!",
      "Olhe para a Cama (Bed), o Colchão (Mattress), o Travesseiro (Pillow), o Lençol (Bed Sheet), o Cobertor (Blanket), o Criado-mudo (Nightstand), o Guarda-roupa (Wardrobe), o Cabide (Clothes Hanger) e o Espelho (Mirror).",
      "Abrindo o guarda-roupa, vemos todas as nossas roupas, calçados e acessórios do dia a dia!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p5-e1",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bed",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          }
        ],
        "options": [
          "High Heels",
          "Bed",
          "Handbag",
          "Boots"
        ],
        "correctAnswer": "Bed",
        "explanation": "Exemplo prático: \"I sleep in a comfortable wooden bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e2",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mattress",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto de couro"
          },
          {
            "text": "Clothes Hanger",
            "emoji": "🧥",
            "label": "Clothes Hanger",
            "translationPt": "Cabide de roupas"
          },
          {
            "text": "Mattress",
            "emoji": "🛏️",
            "label": "Mattress",
            "translationPt": "Colchão da cama"
          }
        ],
        "options": [
          "Coat",
          "Belt",
          "Clothes Hanger",
          "Mattress"
        ],
        "correctAnswer": "Mattress",
        "explanation": "Exemplo prático: \"A soft orthopedic mattress on the bed.\"",
        "phoneticHint": "/ˈmæt.rəs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e3",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pillow",
        "visualEmoji": "⬜",
        "visualOptions": [
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          }
        ],
        "options": [
          "Pillow",
          "Jacket",
          "Jeans",
          "Glasses"
        ],
        "correctAnswer": "Pillow",
        "explanation": "Exemplo prático: \"Rest your head on a soft white pillow.\"",
        "phoneticHint": "/ˈpɪl.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p5-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p5-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p5-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p5-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p5-e5",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Blanket",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          }
        ],
        "options": [
          "Shirt",
          "Skirt",
          "Shorts",
          "Blanket"
        ],
        "correctAnswer": "Blanket",
        "explanation": "Exemplo prático: \"Pull up the warm blanket on cold nights.\"",
        "phoneticHint": "/ˈblæŋ.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e6",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Nightstand",
        "visualEmoji": "🗄️",
        "visualOptions": [
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          },
          {
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo / Mesa de cabeceira"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          }
        ],
        "options": [
          "Socks",
          "Sweater",
          "Nightstand",
          "Cap"
        ],
        "correctAnswer": "Nightstand",
        "explanation": "Exemplo prático: \"Keep your book and lamp on the wooden nightstand.\"",
        "phoneticHint": "/ˈnaɪt.stænd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e7",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Wardrobe",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          }
        ],
        "options": [
          "Wardrobe",
          "Sandals",
          "Sneakers",
          "Shoes"
        ],
        "correctAnswer": "Wardrobe",
        "explanation": "Exemplo prático: \"Open the bedroom wardrobe to choose your clothes.\"",
        "phoneticHint": "/ˈwɔːr.droʊb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e8",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Clothes Hanger",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama de dormir"
          },
          {
            "text": "Clothes Hanger",
            "emoji": "🧥",
            "label": "Clothes Hanger",
            "translationPt": "Cabide de roupas"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          }
        ],
        "options": [
          "Pajamas",
          "Clothes Hanger",
          "Pillow",
          "Bed"
        ],
        "correctAnswer": "Clothes Hanger",
        "explanation": "Exemplo prático: \"Hang your shirt on a wooden clothes hanger.\"",
        "phoneticHint": "/ˈkloʊðz ˈhæŋ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p5-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p5-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p5-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p5-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p5-e10",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
        "visualOptions": [
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho do quarto"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          }
        ],
        "options": [
          "Blanket",
          "Mirror",
          "Wallet",
          "Watch"
        ],
        "correctAnswer": "Mirror",
        "explanation": "Exemplo prático: \"Look in the bedroom mirror before leaving home.\"",
        "phoneticHint": "/ˈmɪr.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e11",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Shirt",
        "visualEmoji": "👕",
        "visualOptions": [
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo / Mesa de cabeceira"
          },
          {
            "text": "Mattress",
            "emoji": "🛏️",
            "label": "Mattress",
            "translationPt": "Colchão da cama"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Dress",
          "Nightstand",
          "Mattress",
          "Shirt"
        ],
        "correctAnswer": "Shirt",
        "explanation": "Exemplo prático: \"Put on a clean cotton shirt.\"",
        "phoneticHint": "/ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e12",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pants",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          }
        ],
        "options": [
          "Skirt",
          "Wardrobe",
          "Pants",
          "Sweater"
        ],
        "correctAnswer": "Pants",
        "explanation": "Exemplo prático: \"Fold the pants and put them in the wardrobe.\"",
        "phoneticHint": "/pænts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e13",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Jeans",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Clothes Hanger",
            "emoji": "🧥",
            "label": "Clothes Hanger",
            "translationPt": "Cabide de roupas"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          }
        ],
        "options": [
          "Jeans",
          "Clothes Hanger",
          "Coat",
          "Cap"
        ],
        "correctAnswer": "Jeans",
        "explanation": "Exemplo prático: \"Blue denim jeans are durable and comfortable.\"",
        "phoneticHint": "/dʒiːnz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p5-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p5-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p5-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p5-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p5-e15",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Shorts",
        "visualEmoji": "🩳",
        "visualOptions": [
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho do quarto"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          }
        ],
        "options": [
          "Bed",
          "Mirror",
          "Shorts",
          "Blanket"
        ],
        "correctAnswer": "Shorts",
        "explanation": "Exemplo prático: \"Wear light shorts on hot days.\"",
        "phoneticHint": "/ʃɔːrts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e16",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dress",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo / Mesa de cabeceira"
          },
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa"
          }
        ],
        "options": [
          "High Heels",
          "Dress",
          "Nightstand",
          "Handbag"
        ],
        "correctAnswer": "Dress",
        "explanation": "Exemplo prático: \"The red dress hangs inside the closet.\"",
        "phoneticHint": "/dres/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e17",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Skirt",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          }
        ],
        "options": [
          "Pants",
          "Wardrobe",
          "Watch",
          "Skirt"
        ],
        "correctAnswer": "Skirt",
        "explanation": "Exemplo prático: \"She wore a pleated skirt.\"",
        "phoneticHint": "/skɜːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e18",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Jacket",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Mattress",
            "emoji": "🛏️",
            "label": "Mattress",
            "translationPt": "Colchão da cama"
          }
        ],
        "options": [
          "Jacket",
          "Pillow",
          "Jeans",
          "Mattress"
        ],
        "correctAnswer": "Jacket",
        "explanation": "Exemplo prático: \"Take a warm jacket from the wardrobe.\"",
        "phoneticHint": "/ˈdʒæk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p5-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p5-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p5-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p5-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p5-e20",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Coat",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          }
        ],
        "options": [
          "Sneakers",
          "Shirt",
          "Shorts",
          "Coat"
        ],
        "correctAnswer": "Coat",
        "explanation": "Exemplo prático: \"A heavy coat for cold winter days.\"",
        "phoneticHint": "/koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e21",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sweater",
        "visualEmoji": "🧶",
        "visualOptions": [
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho do quarto"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          }
        ],
        "options": [
          "Shoes",
          "Mirror",
          "Sweater",
          "Sandals"
        ],
        "correctAnswer": "Sweater",
        "explanation": "Exemplo prático: \"A knitted wool sweater is very cozy.\"",
        "phoneticHint": "/ˈswet.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e22",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pajamas",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama de dormir"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto de couro"
          }
        ],
        "options": [
          "Pajamas",
          "Boots",
          "Pants",
          "Belt"
        ],
        "correctAnswer": "Pajamas",
        "explanation": "Exemplo prático: \"Put on your pajamas before going to bed.\"",
        "phoneticHint": "/pəˈdʒæm.əz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e23",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Socks",
        "visualEmoji": "🧦",
        "visualOptions": [
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          }
        ],
        "options": [
          "Glasses",
          "Socks",
          "Dress",
          "Jacket"
        ],
        "correctAnswer": "Socks",
        "explanation": "Exemplo prático: \"My cotton socks are in the top drawer.\"",
        "phoneticHint": "/sɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p5-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p5-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p5-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p5-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p5-e25",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sneakers",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          }
        ],
        "options": [
          "Wardrobe",
          "Sneakers",
          "Watch",
          "Wallet"
        ],
        "correctAnswer": "Sneakers",
        "explanation": "Exemplo prático: \"Put on your running sneakers.\"",
        "phoneticHint": "/ˈsniː.kərz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e26",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Shoes",
        "visualEmoji": "👞",
        "visualOptions": [
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          }
        ],
        "options": [
          "Skirt",
          "Shorts",
          "Shirt",
          "Shoes"
        ],
        "correctAnswer": "Shoes",
        "explanation": "Exemplo prático: \"Polish your brown leather shoes.\"",
        "phoneticHint": "/ʃuːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e27",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sandals",
        "visualEmoji": "🩴",
        "visualOptions": [
          {
            "text": "Clothes Hanger",
            "emoji": "🧥",
            "label": "Clothes Hanger",
            "translationPt": "Cabide de roupas"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama de dormir"
          }
        ],
        "options": [
          "Clothes Hanger",
          "Coat",
          "Sandals",
          "Pajamas"
        ],
        "correctAnswer": "Sandals",
        "explanation": "Exemplo prático: \"Wear comfortable sandals inside the house.\"",
        "phoneticHint": "/ˈsæn.dəlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e28",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Boots",
        "visualEmoji": "🥾",
        "visualOptions": [
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          }
        ],
        "options": [
          "Boots",
          "Sweater",
          "Socks",
          "Pillow"
        ],
        "correctAnswer": "Boots",
        "explanation": "Exemplo prático: \"Keep your leather boots at the bottom of the closet.\"",
        "phoneticHint": "/buːts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p5-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p5-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p5-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p5-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p5-e30",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "High Heels",
        "visualEmoji": "👠",
        "visualOptions": [
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa"
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          },
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          }
        ],
        "options": [
          "Handbag",
          "Bed",
          "High Heels",
          "Blanket"
        ],
        "correctAnswer": "High Heels",
        "explanation": "Exemplo prático: \"Red high heels for a special party.\"",
        "phoneticHint": "/ˌhaɪ ˈhiːlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e31",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Belt",
        "visualEmoji": "ベルト",
        "visualOptions": [
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto de couro"
          },
          {
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo / Mesa de cabeceira"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          }
        ],
        "options": [
          "Wallet",
          "Belt",
          "Nightstand",
          "Sneakers"
        ],
        "correctAnswer": "Belt",
        "explanation": "Exemplo prático: \"Fasten your leather belt.\"",
        "phoneticHint": "/belt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e32",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cap",
        "visualEmoji": "🧢",
        "visualOptions": [
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          },
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          }
        ],
        "options": [
          "Jacket",
          "Jeans",
          "Dress",
          "Cap"
        ],
        "correctAnswer": "Cap",
        "explanation": "Exemplo prático: \"Wear a blue cap on sunny afternoons.\"",
        "phoneticHint": "/kæp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e33",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
        "visualOptions": [
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          },
          {
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          }
        ],
        "options": [
          "Glasses",
          "Socks",
          "Sandals",
          "Shoes"
        ],
        "correctAnswer": "Glasses",
        "explanation": "Exemplo prático: \"My reading glasses are on the nightstand.\"",
        "phoneticHint": "/ˈɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p5-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p5-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p5-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p5-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p5-e35",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Watch",
        "visualEmoji": "⌚",
        "visualOptions": [
          {
            "text": "Pants",
            "emoji": "👖",
            "label": "Pants",
            "translationPt": "Calça"
          },
          {
            "text": "Mattress",
            "emoji": "🛏️",
            "label": "Mattress",
            "translationPt": "Colchão da cama"
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama de dormir"
          },
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          }
        ],
        "options": [
          "Pants",
          "Mattress",
          "Pajamas",
          "Watch"
        ],
        "correctAnswer": "Watch",
        "explanation": "Exemplo prático: \"Put on your wristwatch in the morning.\"",
        "phoneticHint": "/wɑːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e36",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wallet",
        "visualEmoji": "👛",
        "visualOptions": [
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho do quarto"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto de couro"
          }
        ],
        "options": [
          "Mirror",
          "Boots",
          "Wallet",
          "Belt"
        ],
        "correctAnswer": "Wallet",
        "explanation": "Exemplo prático: \"Keep your documents inside the leather wallet.\"",
        "phoneticHint": "/ˈwɑː.lɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e37",
        "type": "image-choice",
        "conceptTitle": "Quarto de Dormir, Cama, Guarda-Roupa & Vestuário • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Handbag",
        "visualEmoji": "👜",
        "visualOptions": [
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo / Mesa de cabeceira"
          },
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          }
        ],
        "options": [
          "Handbag",
          "Cap",
          "Nightstand",
          "High Heels"
        ],
        "correctAnswer": "Handbag",
        "explanation": "Exemplo prático: \"Her leather handbag is on the bedroom chair.\"",
        "phoneticHint": "/ˈhænd.bæɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p5-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p5-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p5-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p5-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p6",
    "worldId": 0,
    "phaseNumber": 6,
    "title": "Ambiente 6 • Banheiro, Chuveiro, Pia & Higiene Pessoal",
    "subtitle": "Cômodo 6/12 • Vaso sanitário, chuveiro, pia, toalhas, itens de higiene e partes do corpo",
    "pedagogicalObjective": "Reconhecer todos os itens do banheiro, produtos de higiene diária e partes do corpo humano.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Agora entramos no Banheiro da casa!",
      "Veja o Vaso Sanitário (Toilet), o Papel Higiênico (Toilet Paper), a Pia do Banheiro (Bathroom Sink), o Chuveiro (Shower), a Banheira (Bathtub), a Toalha de Banho (Towel), o Sabonete (Soap) e o Shampoo.",
      "Na bancada do banheiro usamos a Escova de Dentes (Toothbrush), a Pasta de Dente (Toothpaste), o Pente (Comb), a Escova de Cabelo (Hairbrush) e o Secador (Hair Dryer), cuidando de cada parte do corpo!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p6-e1",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Toilet",
        "visualEmoji": "🚽",
        "visualOptions": [
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          },
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          }
        ],
        "options": [
          "Hairbrush",
          "Hair Dryer",
          "Hand",
          "Toilet"
        ],
        "correctAnswer": "Toilet",
        "explanation": "Exemplo prático: \"A clean white ceramic toilet in the bathroom.\"",
        "phoneticHint": "/ˈtɔɪ.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e2",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toilet Paper",
        "visualEmoji": "🧻",
        "visualOptions": [
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          },
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente / Creme dental"
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          }
        ],
        "options": [
          "Toilet Paper",
          "Toothpaste",
          "Towel",
          "Toothbrush"
        ],
        "correctAnswer": "Toilet Paper",
        "explanation": "Exemplo prático: \"Put a new roll of toilet paper on the holder.\"",
        "phoneticHint": "/ˈtɔɪ.lət ˈpeɪ.pər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e3",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bathroom Sink",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          },
          {
            "text": "Dental Floss",
            "emoji": "🦷",
            "label": "Dental Floss",
            "translationPt": "Fio dental"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro digital"
          },
          {
            "text": "Bathroom Sink",
            "emoji": "🚰",
            "label": "Bathroom Sink",
            "translationPt": "Pia / Lavatório do banheiro"
          }
        ],
        "options": [
          "Arm",
          "Dental Floss",
          "Thermometer",
          "Bathroom Sink"
        ],
        "correctAnswer": "Bathroom Sink",
        "explanation": "Exemplo prático: \"Wash your hands and face in the bathroom sink.\"",
        "phoneticHint": "/ˈbæθ.ruːm sɪŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p6-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p6-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p6-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p6-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p6-e5",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shower",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Shampoo / Condicionador"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          },
          {
            "text": "Perfume",
            "emoji": "🧴",
            "label": "Perfume",
            "translationPt": "Perfume / Colônia"
          }
        ],
        "options": [
          "Shampoo",
          "Pill",
          "Shower",
          "Perfume"
        ],
        "correctAnswer": "Shower",
        "explanation": "Exemplo prático: \"Take a warm shower every day.\"",
        "phoneticHint": "/ˈʃaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e6",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bathtub",
        "visualEmoji": "🛁",
        "visualOptions": [
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          }
        ],
        "options": [
          "Bathtub",
          "Mouth",
          "Foot",
          "Comb"
        ],
        "correctAnswer": "Bathtub",
        "explanation": "Exemplo prático: \"Fill the white bathtub with warm water.\"",
        "phoneticHint": "/ˈbæθ.tʌb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e7",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Towel",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Aparelho de barbear"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
          }
        ],
        "options": [
          "Toilet",
          "Towel",
          "Razor",
          "Leg"
        ],
        "correctAnswer": "Towel",
        "explanation": "Exemplo prático: \"Dry yourself with a soft cotton bath towel.\"",
        "phoneticHint": "/ˈtaʊ.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e8",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soap",
        "visualEmoji": "🧼",
        "visualOptions": [
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete em barra"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo"
          }
        ],
        "options": [
          "Ear",
          "Soap",
          "Eye",
          "Hair"
        ],
        "correctAnswer": "Soap",
        "explanation": "Exemplo prático: \"Wash your hands with fragrant soap.\"",
        "phoneticHint": "/soʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p6-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p6-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p6-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p6-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p6-e10",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Liquid Soap",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Liquid Soap",
            "emoji": "🧴",
            "label": "Liquid Soap",
            "translationPt": "Sabonete líquido"
          }
        ],
        "options": [
          "Toilet Paper",
          "Nose",
          "Tooth",
          "Liquid Soap"
        ],
        "correctAnswer": "Liquid Soap",
        "explanation": "Exemplo prático: \"Press the pump dispenser for liquid hand soap.\"",
        "phoneticHint": "/ˈlɪk.wɪd soʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e11",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Shampoo",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          },
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Shampoo / Condicionador"
          },
          {
            "text": "Bathroom Sink",
            "emoji": "🚰",
            "label": "Bathroom Sink",
            "translationPt": "Pia / Lavatório do banheiro"
          }
        ],
        "options": [
          "Bathtub",
          "Bandage",
          "Shampoo",
          "Bathroom Sink"
        ],
        "correctAnswer": "Shampoo",
        "explanation": "Exemplo prático: \"Wash your hair with shampoo in the shower.\"",
        "phoneticHint": "/ʃæmˈpuː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e12",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Toothbrush",
        "visualEmoji": "🪥",
        "visualOptions": [
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          },
          {
            "text": "Perfume",
            "emoji": "🧴",
            "label": "Perfume",
            "translationPt": "Perfume / Colônia"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          }
        ],
        "options": [
          "Toothbrush",
          "Shower",
          "Perfume",
          "Pill"
        ],
        "correctAnswer": "Toothbrush",
        "explanation": "Exemplo prático: \"Brush your teeth with a soft toothbrush.\"",
        "phoneticHint": "/ˈtuːθ.brʌʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e13",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toothpaste",
        "visualEmoji": "🪥",
        "visualOptions": [
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
          },
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente / Creme dental"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete em barra"
          }
        ],
        "options": [
          "Foot",
          "Leg",
          "Toothpaste",
          "Soap"
        ],
        "correctAnswer": "Toothpaste",
        "explanation": "Exemplo prático: \"Squeeze white toothpaste onto the brush.\"",
        "phoneticHint": "/ˈtuːθ.peɪst/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p6-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p6-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p6-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p6-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p6-e15",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Dental Floss",
        "visualEmoji": "🦷",
        "visualOptions": [
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Aparelho de barbear"
          },
          {
            "text": "Dental Floss",
            "emoji": "🦷",
            "label": "Dental Floss",
            "translationPt": "Fio dental"
          },
          {
            "text": "Liquid Soap",
            "emoji": "🧴",
            "label": "Liquid Soap",
            "translationPt": "Sabonete líquido"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          }
        ],
        "options": [
          "Razor",
          "Dental Floss",
          "Liquid Soap",
          "Mouth"
        ],
        "correctAnswer": "Dental Floss",
        "explanation": "Exemplo prático: \"Use dental floss between your teeth every night.\"",
        "phoneticHint": "/ˈden.təl flɑːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e16",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Comb",
        "visualEmoji": "🪮",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo"
          },
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          }
        ],
        "options": [
          "Hand",
          "Nose",
          "Hair",
          "Comb"
        ],
        "correctAnswer": "Comb",
        "explanation": "Exemplo prático: \"Part your wet hair with a comb.\"",
        "phoneticHint": "/koʊm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e17",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hairbrush",
        "visualEmoji": "🪮",
        "visualOptions": [
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          },
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          },
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          }
        ],
        "options": [
          "Hairbrush",
          "Arm",
          "Toilet",
          "Toilet Paper"
        ],
        "correctAnswer": "Hairbrush",
        "explanation": "Exemplo prático: \"Brush your hair in front of the bathroom mirror.\"",
        "phoneticHint": "/ˈher.brʌʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e18",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Hair Dryer",
        "visualEmoji": "💨",
        "visualOptions": [
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente / Creme dental"
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          }
        ],
        "options": [
          "Toothpaste",
          "Towel",
          "Toothbrush",
          "Hair Dryer"
        ],
        "correctAnswer": "Hair Dryer",
        "explanation": "Exemplo prático: \"Dry your hair quickly with an electric hair dryer.\"",
        "phoneticHint": "/ˈher ˌdraɪ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p6-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p6-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p6-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p6-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p6-e20",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Razor",
        "visualEmoji": "🪒",
        "visualOptions": [
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Shampoo / Condicionador"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          },
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Aparelho de barbear"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete em barra"
          }
        ],
        "options": [
          "Shampoo",
          "Shower",
          "Razor",
          "Soap"
        ],
        "correctAnswer": "Razor",
        "explanation": "Exemplo prático: \"Shave carefully with a safety razor.\"",
        "phoneticHint": "/ˈreɪ.zər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e21",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Perfume",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Perfume",
            "emoji": "🧴",
            "label": "Perfume",
            "translationPt": "Perfume / Colônia"
          },
          {
            "text": "Liquid Soap",
            "emoji": "🧴",
            "label": "Liquid Soap",
            "translationPt": "Sabonete líquido"
          },
          {
            "text": "Dental Floss",
            "emoji": "🦷",
            "label": "Dental Floss",
            "translationPt": "Fio dental"
          },
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          }
        ],
        "options": [
          "Perfume",
          "Liquid Soap",
          "Dental Floss",
          "Comb"
        ],
        "correctAnswer": "Perfume",
        "explanation": "Exemplo prático: \"Spray a little perfume before going out.\"",
        "phoneticHint": "/pərˈfjuːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e22",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bandage",
        "visualEmoji": "🩹",
        "visualOptions": [
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          },
          {
            "text": "Bathroom Sink",
            "emoji": "🚰",
            "label": "Bathroom Sink",
            "translationPt": "Pia / Lavatório do banheiro"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Eye",
          "Bandage",
          "Bathroom Sink",
          "Ear"
        ],
        "correctAnswer": "Bandage",
        "explanation": "Exemplo prático: \"Keep adhesive bandages in the bathroom cabinet.\"",
        "phoneticHint": "/ˈbæn.dɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e23",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Thermometer",
        "visualEmoji": "🌡️",
        "visualOptions": [
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro digital"
          },
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          },
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          }
        ],
        "options": [
          "Bathtub",
          "Thermometer",
          "Hairbrush",
          "Hair Dryer"
        ],
        "correctAnswer": "Thermometer",
        "explanation": "Exemplo prático: \"Measure your temperature with a digital thermometer.\"",
        "phoneticHint": "/θərˈmɑː.mə.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p6-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p6-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p6-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p6-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p6-e25",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pill",
        "visualEmoji": "💊",
        "visualOptions": [
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          },
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          }
        ],
        "options": [
          "Toilet Paper",
          "Toilet",
          "Arm",
          "Pill"
        ],
        "correctAnswer": "Pill",
        "explanation": "Exemplo prático: \"Take the medicine pill with a glass of water.\"",
        "phoneticHint": "/pɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e26",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Shampoo / Condicionador"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete em barra"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro"
          }
        ],
        "options": [
          "Shampoo",
          "Soap",
          "Hand",
          "Shower"
        ],
        "correctAnswer": "Hand",
        "explanation": "Exemplo prático: \"Wash both hands with soap and water.\"",
        "phoneticHint": "/hænd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e27",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tooth",
        "visualEmoji": "🦷",
        "visualOptions": [
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          }
        ],
        "options": [
          "Tooth",
          "Foot",
          "Comb",
          "Bandage"
        ],
        "correctAnswer": "Tooth",
        "explanation": "Exemplo prático: \"Brush every tooth after meals.\"",
        "phoneticHint": "/tuːθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e28",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mouth",
        "visualEmoji": "👄",
        "visualOptions": [
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Aparelho de barbear"
          },
          {
            "text": "Liquid Soap",
            "emoji": "🧴",
            "label": "Liquid Soap",
            "translationPt": "Sabonete líquido"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro digital"
          }
        ],
        "options": [
          "Razor",
          "Liquid Soap",
          "Mouth",
          "Thermometer"
        ],
        "correctAnswer": "Mouth",
        "explanation": "Exemplo prático: \"Rinse your mouth with water.\"",
        "phoneticHint": "/maʊθ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p6-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p6-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p6-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p6-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p6-e30",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Eye",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          },
          {
            "text": "Bathroom Sink",
            "emoji": "🚰",
            "label": "Bathroom Sink",
            "translationPt": "Pia / Lavatório do banheiro"
          }
        ],
        "options": [
          "Hairbrush",
          "Eye",
          "Hair Dryer",
          "Bathroom Sink"
        ],
        "correctAnswer": "Eye",
        "explanation": "Exemplo prático: \"Close your eyes when washing your face with soap.\"",
        "phoneticHint": "/aɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e31",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ear",
        "visualEmoji": "👂",
        "visualOptions": [
          {
            "text": "Toothbrush",
            "emoji": "🪥",
            "label": "Toothbrush",
            "translationPt": "Escova de dentes"
          },
          {
            "text": "Towel",
            "emoji": "🧺",
            "label": "Towel",
            "translationPt": "Toalha de banho"
          },
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente / Creme dental"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Toothbrush",
          "Towel",
          "Toothpaste",
          "Ear"
        ],
        "correctAnswer": "Ear",
        "explanation": "Exemplo prático: \"Dry your ears gently with a towel.\"",
        "phoneticHint": "/ɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e32",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Nose",
        "visualEmoji": "👃",
        "visualOptions": [
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Dental Floss",
            "emoji": "🦷",
            "label": "Dental Floss",
            "translationPt": "Fio dental"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "Nose",
          "Dental Floss",
          "Tooth",
          "Hand"
        ],
        "correctAnswer": "Nose",
        "explanation": "Exemplo prático: \"Breathe fresh air through your nose.\"",
        "phoneticHint": "/noʊz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e33",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Hair",
        "visualEmoji": "💇",
        "visualOptions": [
          {
            "text": "Perfume",
            "emoji": "🧴",
            "label": "Perfume",
            "translationPt": "Perfume / Colônia"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo"
          }
        ],
        "options": [
          "Perfume",
          "Mouth",
          "Pill",
          "Hair"
        ],
        "correctAnswer": "Hair",
        "explanation": "Exemplo prático: \"Wash and brush your hair.\"",
        "phoneticHint": "/her/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p6-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p6-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p6-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p6-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p6-e35",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Foot",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro digital"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira"
          }
        ],
        "options": [
          "Thermometer",
          "Eye",
          "Foot",
          "Bathtub"
        ],
        "correctAnswer": "Foot",
        "explanation": "Exemplo prático: \"Wash your feet in the shower.\"",
        "phoneticHint": "/fʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e36",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Arm",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          },
          {
            "text": "Bathroom Sink",
            "emoji": "🚰",
            "label": "Bathroom Sink",
            "translationPt": "Pia / Lavatório do banheiro"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Arm",
          "Bathroom Sink",
          "Bandage",
          "Ear"
        ],
        "correctAnswer": "Arm",
        "explanation": "Exemplo prático: \"Apply lotion to your arms.\"",
        "phoneticHint": "/ɑːrm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e37",
        "type": "image-choice",
        "conceptTitle": "Banheiro, Chuveiro, Pia & Higiene Pessoal • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Leg",
        "visualEmoji": "🦵",
        "visualOptions": [
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
          },
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          },
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          }
        ],
        "options": [
          "Nose",
          "Leg",
          "Hairbrush",
          "Tooth"
        ],
        "correctAnswer": "Leg",
        "explanation": "Exemplo prático: \"Dry your legs with the bath towel.\"",
        "phoneticHint": "/leɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p6-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p6-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p6-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p6-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p7",
    "worldId": 0,
    "phaseNumber": 7,
    "title": "Ambiente 7 • Área de Serviço, Lavanderia, Quintal & Ferramentas",
    "subtitle": "Cômodo 7/12 • Máquina de lavar, cesto, ferro, vassoura, balde, ferramentas e animais no quintal",
    "pedagogicalObjective": "Explorar o fundo da residência: lavanderia, produtos e utensílios de limpeza, ferramentas de manutenção e os pets no quintal.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Chegamos ao fundo da casa: a Área de Serviço, Lavanderia e Quintal!",
      "Aqui vemos a Máquina de Lavar (Washing Machine), o Cesto de Roupa (Laundry Basket), o Sabão de Lavar Roupa (Laundry Detergent), o Pregador (Clothespin), o Ferro de Passar (Clothes Iron) e a Tábua de Passar (Ironing Board).",
      "Também temos os itens de limpeza (Broom, Dustpan, Mop, Bucket, Vacuum Cleaner), as ferramentas (Ladder, Hammer, Screwdriver, Wrench, Pliers, Saw, Drill) e nossos pets no quintal!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p7-e1",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Washing Machine",
        "visualEmoji": "🫧",
        "visualOptions": [
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde de água"
          }
        ],
        "options": [
          "Washing Machine",
          "Hammer",
          "Broom",
          "Bucket"
        ],
        "correctAnswer": "Washing Machine",
        "explanation": "Exemplo prático: \"Wash the family clothes in the washing machine.\"",
        "phoneticHint": "/ˈwɑː.ʃɪŋ məˌʃiːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e2",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Laundry Basket",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          },
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Laundry Basket",
            "emoji": "🧺",
            "label": "Laundry Basket",
            "translationPt": "Cesto de roupa"
          }
        ],
        "options": [
          "Box",
          "Tape Measure",
          "Battery",
          "Laundry Basket"
        ],
        "correctAnswer": "Laundry Basket",
        "explanation": "Exemplo prático: \"Put the clothes inside the plastic laundry basket.\"",
        "phoneticHint": "/ˈlɔːn.dri ˈbæs.kɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e3",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Laundry Detergent",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Garden Hose",
            "emoji": "🐍",
            "label": "Garden Hose",
            "translationPt": "Mangueira de jardim / quintal"
          },
          {
            "text": "Dustpan",
            "emoji": "🧹",
            "label": "Dustpan",
            "translationPt": "Pá de lixo"
          },
          {
            "text": "Laundry Detergent",
            "emoji": "🧴",
            "label": "Laundry Detergent",
            "translationPt": "Sabão líquido / em pó para roupas"
          },
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira elétrica"
          }
        ],
        "options": [
          "Garden Hose",
          "Dustpan",
          "Laundry Detergent",
          "Drill"
        ],
        "correctAnswer": "Laundry Detergent",
        "explanation": "Exemplo prático: \"Add laundry detergent to the washing machine.\"",
        "phoneticHint": "/ˈlɔːn.dri dɪˈtɜːr.dʒənt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p7-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p7-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p7-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p7-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p7-e5",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Clothespin",
        "visualEmoji": "📎",
        "visualOptions": [
          {
            "text": "Clothespin",
            "emoji": "📎",
            "label": "Clothespin",
            "translationPt": "Pregador de roupa no varal"
          },
          {
            "text": "Vacuum Cleaner",
            "emoji": "🧹",
            "label": "Vacuum Cleaner",
            "translationPt": "Aspirador de pó"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Shovel",
            "emoji": " лопата",
            "label": "Shovel",
            "translationPt": "Pá de jardim / obra"
          }
        ],
        "options": [
          "Clothespin",
          "Vacuum Cleaner",
          "Screwdriver",
          "Shovel"
        ],
        "correctAnswer": "Clothespin",
        "explanation": "Exemplo prático: \"Hang the wet shirts on the line with clothespins.\"",
        "phoneticHint": "/ˈkloʊðz.pɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e6",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Clothes Iron",
        "visualEmoji": "💨",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato (em casa)"
          },
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          },
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote de cortar madeira"
          }
        ],
        "options": [
          "Cat",
          "Clothes Iron",
          "Flashlight",
          "Saw"
        ],
        "correctAnswer": "Clothes Iron",
        "explanation": "Exemplo prático: \"Iron the dress shirt with a steam clothes iron.\"",
        "phoneticHint": "/ˈkloʊðz ˌaɪ.ərn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e7",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ironing Board",
        "visualEmoji": " ironing",
        "visualOptions": [
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil de alumínio"
          },
          {
            "text": "Ironing Board",
            "emoji": " ironing",
            "label": "Ironing Board",
            "translationPt": "Tábua de passar roupa"
          },
          {
            "text": "Rope",
            "emoji": "🪢",
            "label": "Rope",
            "translationPt": "Corda"
          },
          {
            "text": "Laundry Basket",
            "emoji": "🧺",
            "label": "Laundry Basket",
            "translationPt": "Cesto de roupa"
          }
        ],
        "options": [
          "Ladder",
          "Ironing Board",
          "Rope",
          "Laundry Basket"
        ],
        "correctAnswer": "Ironing Board",
        "explanation": "Exemplo prático: \"Set up the folding ironing board in the laundry room.\"",
        "phoneticHint": "/ˈaɪ.ər.nɪŋ bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e8",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Broom",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Pliers",
            "emoji": "🔧",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Laundry Detergent",
            "emoji": "🧴",
            "label": "Laundry Detergent",
            "translationPt": "Sabão líquido / em pó para roupas"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          }
        ],
        "options": [
          "Parrot",
          "Pliers",
          "Laundry Detergent",
          "Broom"
        ],
        "correctAnswer": "Broom",
        "explanation": "Exemplo prático: \"Sweep the backyard floor with a broom.\"",
        "phoneticHint": "/bruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p7-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p7-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p7-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p7-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p7-e10",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Dustpan",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Wheelbarrow",
            "emoji": "🛒",
            "label": "Wheelbarrow",
            "translationPt": "Carrinho de mão"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          },
          {
            "text": "Dustpan",
            "emoji": "🧹",
            "label": "Dustpan",
            "translationPt": "Pá de lixo"
          },
          {
            "text": "Watering Can",
            "emoji": "🚿",
            "label": "Watering Can",
            "translationPt": "Regador de plantas"
          }
        ],
        "options": [
          "Wheelbarrow",
          "Washing Machine",
          "Dustpan",
          "Watering Can"
        ],
        "correctAnswer": "Dustpan",
        "explanation": "Exemplo prático: \"Sweep the dust into the plastic dustpan.\"",
        "phoneticHint": "/ˈdʌst.pæn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e11",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Mop",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Mop",
            "emoji": "🧹",
            "label": "Mop",
            "translationPt": "Esfregão / Rodo com pano"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          },
          {
            "text": "Clothespin",
            "emoji": "📎",
            "label": "Clothespin",
            "translationPt": "Pregador de roupa no varal"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro (no quintal)"
          }
        ],
        "options": [
          "Mop",
          "Wrench",
          "Clothespin",
          "Dog"
        ],
        "correctAnswer": "Mop",
        "explanation": "Exemplo prático: \"Clean the ceramic floor tiles with a wet mop.\"",
        "phoneticHint": "/mɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e12",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bucket",
        "visualEmoji": "🪣",
        "visualOptions": [
          {
            "text": "Shovel",
            "emoji": " лопата",
            "label": "Shovel",
            "translationPt": "Pá de jardim / obra"
          },
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde de água"
          },
          {
            "text": "Ironing Board",
            "emoji": " ironing",
            "label": "Ironing Board",
            "translationPt": "Tábua de passar roupa"
          }
        ],
        "options": [
          "Shovel",
          "Clothes Iron",
          "Bucket",
          "Ironing Board"
        ],
        "correctAnswer": "Bucket",
        "explanation": "Exemplo prático: \"Fill the plastic bucket with water and soap.\"",
        "phoneticHint": "/ˈbʌk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e13",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Vacuum Cleaner",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil de alumínio"
          },
          {
            "text": "Vacuum Cleaner",
            "emoji": "🧹",
            "label": "Vacuum Cleaner",
            "translationPt": "Aspirador de pó"
          },
          {
            "text": "Laundry Detergent",
            "emoji": "🧴",
            "label": "Laundry Detergent",
            "translationPt": "Sabão líquido / em pó para roupas"
          },
          {
            "text": "Laundry Basket",
            "emoji": "🧺",
            "label": "Laundry Basket",
            "translationPt": "Cesto de roupa"
          }
        ],
        "options": [
          "Ladder",
          "Vacuum Cleaner",
          "Laundry Detergent",
          "Laundry Basket"
        ],
        "correctAnswer": "Vacuum Cleaner",
        "explanation": "Exemplo prático: \"Clean the living room rug with a vacuum cleaner.\"",
        "phoneticHint": "/ˈvæk.juːm ˈkliː.nər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p7-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p7-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p7-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p7-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p7-e15",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Garden Hose",
        "visualEmoji": "🐍",
        "visualOptions": [
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          },
          {
            "text": "Garden Hose",
            "emoji": "🐍",
            "label": "Garden Hose",
            "translationPt": "Mangueira de jardim / quintal"
          }
        ],
        "options": [
          "Battery",
          "Broom",
          "Box",
          "Garden Hose"
        ],
        "correctAnswer": "Garden Hose",
        "explanation": "Exemplo prático: \"Wash the backyard with the green garden hose.\"",
        "phoneticHint": "/ˈɡɑːr.dən hoʊz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e16",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Watering Can",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Watering Can",
            "emoji": "🚿",
            "label": "Watering Can",
            "translationPt": "Regador de plantas"
          },
          {
            "text": "Mop",
            "emoji": "🧹",
            "label": "Mop",
            "translationPt": "Esfregão / Rodo com pano"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Rope",
            "emoji": "🪢",
            "label": "Rope",
            "translationPt": "Corda"
          }
        ],
        "options": [
          "Watering Can",
          "Mop",
          "Hammer",
          "Rope"
        ],
        "correctAnswer": "Watering Can",
        "explanation": "Exemplo prático: \"Water the flowers using a watering can.\"",
        "phoneticHint": "/ˈwɔː.tər.ɪŋ kæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e17",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wheelbarrow",
        "visualEmoji": "🛒",
        "visualOptions": [
          {
            "text": "Dustpan",
            "emoji": "🧹",
            "label": "Dustpan",
            "translationPt": "Pá de lixo"
          },
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira elétrica"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro (no quintal)"
          },
          {
            "text": "Wheelbarrow",
            "emoji": "🛒",
            "label": "Wheelbarrow",
            "translationPt": "Carrinho de mão"
          }
        ],
        "options": [
          "Dustpan",
          "Drill",
          "Dog",
          "Wheelbarrow"
        ],
        "correctAnswer": "Wheelbarrow",
        "explanation": "Exemplo prático: \"Carry soil and bricks in a wheelbarrow.\"",
        "phoneticHint": "/ˈwiːlˌbær.oʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e18",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Shovel",
        "visualEmoji": " лопата",
        "visualOptions": [
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Pliers",
            "emoji": "🔧",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Shovel",
            "emoji": " лопата",
            "label": "Shovel",
            "translationPt": "Pá de jardim / obra"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          }
        ],
        "options": [
          "Parrot",
          "Pliers",
          "Shovel",
          "Washing Machine"
        ],
        "correctAnswer": "Shovel",
        "explanation": "Exemplo prático: \"Dig the garden soil with a metal shovel.\"",
        "phoneticHint": "/ˈʃʌv.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p7-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p7-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p7-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p7-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p7-e20",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ladder",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil de alumínio"
          },
          {
            "text": "Clothespin",
            "emoji": "📎",
            "label": "Clothespin",
            "translationPt": "Pregador de roupa no varal"
          },
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          }
        ],
        "options": [
          "Ladder",
          "Clothespin",
          "Flashlight",
          "Clothes Iron"
        ],
        "correctAnswer": "Ladder",
        "explanation": "Exemplo prático: \"Climb the step ladder to change the ceiling bulb.\"",
        "phoneticHint": "/ˈlæd.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e21",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hammer",
        "visualEmoji": "🔨",
        "visualOptions": [
          {
            "text": "Ironing Board",
            "emoji": " ironing",
            "label": "Ironing Board",
            "translationPt": "Tábua de passar roupa"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Vacuum Cleaner",
            "emoji": "🧹",
            "label": "Vacuum Cleaner",
            "translationPt": "Aspirador de pó"
          },
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato (em casa)"
          }
        ],
        "options": [
          "Ironing Board",
          "Hammer",
          "Vacuum Cleaner",
          "Cat"
        ],
        "correctAnswer": "Hammer",
        "explanation": "Exemplo prático: \"Fix the nail on the wall with a hammer.\"",
        "phoneticHint": "/ˈhæm.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e22",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Screwdriver",
        "visualEmoji": "🪛",
        "visualOptions": [
          {
            "text": "Garden Hose",
            "emoji": "🐍",
            "label": "Garden Hose",
            "translationPt": "Mangueira de jardim / quintal"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde de água"
          },
          {
            "text": "Mop",
            "emoji": "🧹",
            "label": "Mop",
            "translationPt": "Esfregão / Rodo com pano"
          }
        ],
        "options": [
          "Garden Hose",
          "Screwdriver",
          "Bucket",
          "Mop"
        ],
        "correctAnswer": "Screwdriver",
        "explanation": "Exemplo prático: \"Tighten the door hinge screw with a screwdriver.\"",
        "phoneticHint": "/ˈskruːˌdraɪ.vər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e23",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wrench",
        "visualEmoji": "🔧",
        "visualOptions": [
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Watering Can",
            "emoji": "🚿",
            "label": "Watering Can",
            "translationPt": "Regador de plantas"
          },
          {
            "text": "Wheelbarrow",
            "emoji": "🛒",
            "label": "Wheelbarrow",
            "translationPt": "Carrinho de mão"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          }
        ],
        "options": [
          "Broom",
          "Watering Can",
          "Wheelbarrow",
          "Wrench"
        ],
        "correctAnswer": "Wrench",
        "explanation": "Exemplo prático: \"Tighten the pipe nut with a steel wrench.\"",
        "phoneticHint": "/rentʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p7-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p7-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p7-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p7-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p7-e25",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pliers",
        "visualEmoji": "🔧",
        "visualOptions": [
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro (no quintal)"
          },
          {
            "text": "Pliers",
            "emoji": "🔧",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Dustpan",
            "emoji": "🧹",
            "label": "Dustpan",
            "translationPt": "Pá de lixo"
          }
        ],
        "options": [
          "Washing Machine",
          "Dog",
          "Pliers",
          "Dustpan"
        ],
        "correctAnswer": "Pliers",
        "explanation": "Exemplo prático: \"Cut and hold the wire using pliers.\"",
        "phoneticHint": "/ˈplaɪ.ərz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e26",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Saw",
        "visualEmoji": "🪚",
        "visualOptions": [
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote de cortar madeira"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Shovel",
            "emoji": " лопата",
            "label": "Shovel",
            "translationPt": "Pá de jardim / obra"
          }
        ],
        "options": [
          "Saw",
          "Hammer",
          "Parrot",
          "Shovel"
        ],
        "correctAnswer": "Saw",
        "explanation": "Exemplo prático: \"Cut the wooden board with a sharp hand saw.\"",
        "phoneticHint": "/sɔː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e27",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tape Measure",
        "visualEmoji": "📏",
        "visualOptions": [
          {
            "text": "Ironing Board",
            "emoji": " ironing",
            "label": "Ironing Board",
            "translationPt": "Tábua de passar roupa"
          },
          {
            "text": "Clothespin",
            "emoji": "📎",
            "label": "Clothespin",
            "translationPt": "Pregador de roupa no varal"
          },
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          }
        ],
        "options": [
          "Ironing Board",
          "Clothespin",
          "Tape Measure",
          "Screwdriver"
        ],
        "correctAnswer": "Tape Measure",
        "explanation": "Exemplo prático: \"Measure the cabinet width with a tape measure.\"",
        "phoneticHint": "/ˈteɪp ˌmeʒ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e28",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Drill",
        "visualEmoji": "🪛",
        "visualOptions": [
          {
            "text": "Laundry Detergent",
            "emoji": "🧴",
            "label": "Laundry Detergent",
            "translationPt": "Sabão líquido / em pó para roupas"
          },
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira elétrica"
          },
          {
            "text": "Laundry Basket",
            "emoji": "🧺",
            "label": "Laundry Basket",
            "translationPt": "Cesto de roupa"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          }
        ],
        "options": [
          "Laundry Detergent",
          "Drill",
          "Laundry Basket",
          "Wrench"
        ],
        "correctAnswer": "Drill",
        "explanation": "Exemplo prático: \"Drill a hole in the brick wall with an electric drill.\"",
        "phoneticHint": "/drɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p7-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p7-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p7-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p7-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p7-e30",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Flashlight",
        "visualEmoji": "🔦",
        "visualOptions": [
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil de alumínio"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde de água"
          },
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          }
        ],
        "options": [
          "Clothes Iron",
          "Ladder",
          "Bucket",
          "Flashlight"
        ],
        "correctAnswer": "Flashlight",
        "explanation": "Exemplo prático: \"Keep a bright flashlight for power outages.\"",
        "phoneticHint": "/ˈflæʃ.laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e31",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Battery",
        "visualEmoji": "🔋",
        "visualOptions": [
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Watering Can",
            "emoji": "🚿",
            "label": "Watering Can",
            "translationPt": "Regador de plantas"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote de cortar madeira"
          },
          {
            "text": "Wheelbarrow",
            "emoji": "🛒",
            "label": "Wheelbarrow",
            "translationPt": "Carrinho de mão"
          }
        ],
        "options": [
          "Battery",
          "Watering Can",
          "Saw",
          "Wheelbarrow"
        ],
        "correctAnswer": "Battery",
        "explanation": "Exemplo prático: \"Put two new AA batteries in the remote control.\"",
        "phoneticHint": "/ˈbæt.ər.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e32",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rope",
        "visualEmoji": "🪢",
        "visualOptions": [
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          },
          {
            "text": "Garden Hose",
            "emoji": "🐍",
            "label": "Garden Hose",
            "translationPt": "Mangueira de jardim / quintal"
          },
          {
            "text": "Vacuum Cleaner",
            "emoji": "🧹",
            "label": "Vacuum Cleaner",
            "translationPt": "Aspirador de pó"
          },
          {
            "text": "Rope",
            "emoji": "🪢",
            "label": "Rope",
            "translationPt": "Corda"
          }
        ],
        "options": [
          "Tape Measure",
          "Garden Hose",
          "Vacuum Cleaner",
          "Rope"
        ],
        "correctAnswer": "Rope",
        "explanation": "Exemplo prático: \"A strong coiled rope in the tool shed.\"",
        "phoneticHint": "/roʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e33",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Box",
        "visualEmoji": "📦",
        "visualOptions": [
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Pliers",
            "emoji": "🔧",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          },
          {
            "text": "Mop",
            "emoji": "🧹",
            "label": "Mop",
            "translationPt": "Esfregão / Rodo com pano"
          }
        ],
        "options": [
          "Screwdriver",
          "Pliers",
          "Box",
          "Mop"
        ],
        "correctAnswer": "Box",
        "explanation": "Exemplo prático: \"Store old items inside a cardboard box.\"",
        "phoneticHint": "/bɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p7-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p7-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p7-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p7-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p7-e35",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dog",
        "visualEmoji": "🐕",
        "visualOptions": [
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro (no quintal)"
          },
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira elétrica"
          },
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          }
        ],
        "options": [
          "Dog",
          "Drill",
          "Flashlight",
          "Wrench"
        ],
        "correctAnswer": "Dog",
        "explanation": "Exemplo prático: \"Our friendly dog plays in the backyard.\"",
        "phoneticHint": "/dɔːɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e36",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cat",
        "visualEmoji": "🐈",
        "visualOptions": [
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato (em casa)"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote de cortar madeira"
          }
        ],
        "options": [
          "Broom",
          "Cat",
          "Battery",
          "Saw"
        ],
        "correctAnswer": "Cat",
        "explanation": "Exemplo prático: \"The cat naps near the laundry room.\"",
        "phoneticHint": "/kæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e37",
        "type": "image-choice",
        "conceptTitle": "Área de Serviço, Lavanderia, Quintal & Ferramentas • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Parrot",
        "visualEmoji": "🦜",
        "visualOptions": [
          {
            "text": "Rope",
            "emoji": "🪢",
            "label": "Rope",
            "translationPt": "Corda"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          }
        ],
        "options": [
          "Rope",
          "Parrot",
          "Hammer",
          "Tape Measure"
        ],
        "correctAnswer": "Parrot",
        "explanation": "Exemplo prático: \"The green parrot chirps happily.\"",
        "phoneticHint": "/ˈpær.ət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p7-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p7-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p7-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p7-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p8",
    "worldId": 0,
    "phaseNumber": 8,
    "title": "Ambiente 8 • Na Rua, Calçada, Trânsito & Vizinhança",
    "subtitle": "Ambiente 8/12 • Saindo de casa: rua, faixa, semáforo, poste, veículos, praça e clima",
    "pedagogicalObjective": "Reconhecer tudo o que vemos ao sair de casa para caminhar ou dirigir pela rua e vizinhança.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Terminamos de explorar toda a nossa casa da frente aos fundos! Agora abrimos o portão e saímos para a Rua (Street)!",
      "Olhe para a Rua asfaltada (Street), a Faixa de Pedestres (Crosswalk), o Semáforo (Traffic Light), a Placa de Pare (Stop Sign), o Poste de Luz (Streetlight) e o Ponto de Ônibus (Bus Stop).",
      "Veja os veículos passando (Car, Bus, Motorcycle, Bicycle, Truck, Taxi, Ambulance, Police Car, Fire Truck), a Praça (Park Bench, Tree, Flower) e o Clima (Sun, Rain, Cloud, Umbrella)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p8-e1",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Street",
        "visualEmoji": "🛣️",
        "visualOptions": [
          {
            "text": "Bus Stop",
            "emoji": "🚏",
            "label": "Bus Stop",
            "translationPt": "Ponto de ônibus"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus urbano"
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua asfaltada"
          }
        ],
        "options": [
          "Bus Stop",
          "Helmet",
          "Bus",
          "Street"
        ],
        "correctAnswer": "Street",
        "explanation": "Exemplo prático: \"Cars drive along the paved city street.\"",
        "phoneticHint": "/striːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e2",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Crosswalk",
        "visualEmoji": "🚸",
        "visualOptions": [
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu / Roda do veículo"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          }
        ],
        "options": [
          "Taxi",
          "Tire",
          "Crosswalk",
          "Truck"
        ],
        "correctAnswer": "Crosswalk",
        "explanation": "Exemplo prático: \"Always cross the street on the white crosswalk stripes.\"",
        "phoneticHint": "/ˈkrɔːs.wɔːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e3",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Traffic Light",
        "visualEmoji": "🚦",
        "visualOptions": [
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore na calçada / praça"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          }
        ],
        "options": [
          "Traffic Light",
          "Ambulance",
          "Tree",
          "Bicycle"
        ],
        "correctAnswer": "Traffic Light",
        "explanation": "Exemplo prático: \"Wait for the green traffic light before crossing.\"",
        "phoneticHint": "/ˈtræf.ɪk laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p8-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p8-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p8-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p8-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-e5",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Stop Sign",
        "visualEmoji": "🛑",
        "visualOptions": [
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua escolar"
          },
          {
            "text": "Stop Sign",
            "emoji": "🛑",
            "label": "Stop Sign",
            "translationPt": "Placa de PARE (sinalização)"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol no céu"
          },
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de direção"
          }
        ],
        "options": [
          "Van",
          "Stop Sign",
          "Sun",
          "Steering Wheel"
        ],
        "correctAnswer": "Stop Sign",
        "explanation": "Exemplo prático: \"Every driver must stop at the red stop sign.\"",
        "phoneticHint": "/stɑːp saɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e6",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Streetlight",
        "visualEmoji": "🏮",
        "visualOptions": [
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível (Posto)"
          },
          {
            "text": "Streetlight",
            "emoji": "🏮",
            "label": "Streetlight",
            "translationPt": "Poste de iluminação pública"
          },
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Flower",
            "emoji": "🌻",
            "label": "Flower",
            "translationPt": "Flor do jardim / canteiro"
          }
        ],
        "options": [
          "Fuel Pump",
          "Streetlight",
          "Fire Truck",
          "Flower"
        ],
        "correctAnswer": "Streetlight",
        "explanation": "Exemplo prático: \"The tall streetlight turns on at dusk.\"",
        "phoneticHint": "/ˈstriːt.laɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e7",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bus Stop",
        "visualEmoji": "🚏",
        "visualOptions": [
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Bus Stop",
            "emoji": "🚏",
            "label": "Bus Stop",
            "translationPt": "Ponto de ônibus"
          }
        ],
        "options": [
          "Umbrella",
          "Crosswalk",
          "Rain",
          "Bus Stop"
        ],
        "correctAnswer": "Bus Stop",
        "explanation": "Exemplo prático: \"Passengers wait for the bus at the bus stop shelter.\"",
        "phoneticHint": "/bʌs stɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e8",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte / Viaduto"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro de passeio"
          },
          {
            "text": "Building",
            "emoji": "🏢",
            "label": "Building",
            "translationPt": "Prédio / Edifício"
          }
        ],
        "options": [
          "Bridge",
          "Bird",
          "Car",
          "Building"
        ],
        "correctAnswer": "Car",
        "explanation": "Exemplo prático: \"A red car is parked on the street.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p8-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p8-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p8-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p8-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-e10",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bus",
        "visualEmoji": "🚌",
        "visualOptions": [
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus urbano"
          },
          {
            "text": "Stop Sign",
            "emoji": "🛑",
            "label": "Stop Sign",
            "translationPt": "Placa de PARE (sinalização)"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua asfaltada"
          }
        ],
        "options": [
          "Bus",
          "Stop Sign",
          "Traffic Light",
          "Street"
        ],
        "correctAnswer": "Bus",
        "explanation": "Exemplo prático: \"Take the city bus to go downtown.\"",
        "phoneticHint": "/bʌs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e11",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Motorcycle",
        "visualEmoji": "🏍️",
        "visualOptions": [
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          },
          {
            "text": "Park Bench",
            "emoji": "🪑",
            "label": "Park Bench",
            "translationPt": "Banco da praça"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
          {
            "text": "Streetlight",
            "emoji": "🏮",
            "label": "Streetlight",
            "translationPt": "Poste de iluminação pública"
          }
        ],
        "options": [
          "Police Car",
          "Park Bench",
          "Motorcycle",
          "Streetlight"
        ],
        "correctAnswer": "Motorcycle",
        "explanation": "Exemplo prático: \"The delivery rider drives a motorcycle.\"",
        "phoneticHint": "/ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e12",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bicycle",
        "visualEmoji": "🚲",
        "visualOptions": [
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo na praça"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol no céu"
          },
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de direção"
          }
        ],
        "options": [
          "Pigeon",
          "Bicycle",
          "Sun",
          "Steering Wheel"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "Exemplo prático: \"Ride your bicycle along the bike lane.\"",
        "phoneticHint": "/ˈbaɪ.sɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e13",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Truck",
        "visualEmoji": "🚚",
        "visualOptions": [
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível (Posto)"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro de passeio"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          }
        ],
        "options": [
          "Fire Truck",
          "Fuel Pump",
          "Car",
          "Truck"
        ],
        "correctAnswer": "Truck",
        "explanation": "Exemplo prático: \"The cargo truck delivers goods to the market.\"",
        "phoneticHint": "/trʌk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p8-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p8-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p8-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p8-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-e15",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Taxi",
        "visualEmoji": "🚕",
        "visualOptions": [
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus urbano"
          },
          {
            "text": "Bus Stop",
            "emoji": "🚏",
            "label": "Bus Stop",
            "translationPt": "Ponto de ônibus"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte / Viaduto"
          }
        ],
        "options": [
          "Taxi",
          "Bus",
          "Bus Stop",
          "Bridge"
        ],
        "correctAnswer": "Taxi",
        "explanation": "Exemplo prático: \"Wave to call a yellow taxi on the avenue.\"",
        "phoneticHint": "/ˈtæk.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e16",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Van",
        "visualEmoji": "🚐",
        "visualOptions": [
          {
            "text": "Building",
            "emoji": "🏢",
            "label": "Building",
            "translationPt": "Prédio / Edifício"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua escolar"
          }
        ],
        "options": [
          "Building",
          "Helmet",
          "Motorcycle",
          "Van"
        ],
        "correctAnswer": "Van",
        "explanation": "Exemplo prático: \"The white van transports students to school.\"",
        "phoneticHint": "/væn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e17",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ambulance",
        "visualEmoji": "🚑",
        "visualOptions": [
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu / Roda do veículo"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore na calçada / praça"
          }
        ],
        "options": [
          "Tire",
          "Traffic Light",
          "Ambulance",
          "Tree"
        ],
        "correctAnswer": "Ambulance",
        "explanation": "Exemplo prático: \"The ambulance siren sounds in the street.\"",
        "phoneticHint": "/ˈæm.bjə.ləns/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e18",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Police Car",
        "visualEmoji": "🚓",
        "visualOptions": [
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          },
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo na praça"
          },
          {
            "text": "Park Bench",
            "emoji": "🪑",
            "label": "Park Bench",
            "translationPt": "Banco da praça"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          }
        ],
        "options": [
          "Police Car",
          "Pigeon",
          "Park Bench",
          "Truck"
        ],
        "correctAnswer": "Police Car",
        "explanation": "Exemplo prático: \"The police car patrols our neighborhood.\"",
        "phoneticHint": "/pəˈliːs kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p8-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p8-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p8-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p8-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-e20",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fire Truck",
        "visualEmoji": "🚒",
        "visualOptions": [
          {
            "text": "Flower",
            "emoji": "🌻",
            "label": "Flower",
            "translationPt": "Flor do jardim / canteiro"
          },
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro de passeio"
          }
        ],
        "options": [
          "Flower",
          "Fire Truck",
          "Crosswalk",
          "Car"
        ],
        "correctAnswer": "Fire Truck",
        "explanation": "Exemplo prático: \"The red fire truck speeds down the avenue.\"",
        "phoneticHint": "/ˈfaɪ.ər trʌk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e21",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Helmet",
        "visualEmoji": "⛑️",
        "visualOptions": [
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua asfaltada"
          },
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua escolar"
          }
        ],
        "options": [
          "Rain",
          "Helmet",
          "Street",
          "Van"
        ],
        "correctAnswer": "Helmet",
        "explanation": "Exemplo prático: \"Always wear a helmet on a motorcycle or bike.\"",
        "phoneticHint": "/ˈhel.mət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e22",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Tire",
        "visualEmoji": "🛞",
        "visualOptions": [
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu / Roda do veículo"
          }
        ],
        "options": [
          "Umbrella",
          "Bicycle",
          "Bird",
          "Tire"
        ],
        "correctAnswer": "Tire",
        "explanation": "Exemplo prático: \"The car has four rubber tires.\"",
        "phoneticHint": "/ˈtaɪ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e23",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Steering Wheel",
        "visualEmoji": "🛞",
        "visualOptions": [
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Streetlight",
            "emoji": "🏮",
            "label": "Streetlight",
            "translationPt": "Poste de iluminação pública"
          },
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de direção"
          },
          {
            "text": "Stop Sign",
            "emoji": "🛑",
            "label": "Stop Sign",
            "translationPt": "Placa de PARE (sinalização)"
          }
        ],
        "options": [
          "Taxi",
          "Streetlight",
          "Steering Wheel",
          "Stop Sign"
        ],
        "correctAnswer": "Steering Wheel",
        "explanation": "Exemplo prático: \"Hold the car steering wheel firmly.\"",
        "phoneticHint": "/ˈstɪr.ɪŋ wiːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p8-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p8-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p8-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p8-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-e25",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Fuel Pump",
        "visualEmoji": "⛽",
        "visualOptions": [
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível (Posto)"
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          }
        ],
        "options": [
          "Fuel Pump",
          "Ambulance",
          "Motorcycle",
          "Police Car"
        ],
        "correctAnswer": "Fuel Pump",
        "explanation": "Exemplo prático: \"Stop at the gas station fuel pump to refuel.\"",
        "phoneticHint": "/ˈfjuː.əl pʌmp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e26",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Park Bench",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo na praça"
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua asfaltada"
          },
          {
            "text": "Park Bench",
            "emoji": "🪑",
            "label": "Park Bench",
            "translationPt": "Banco da praça"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol no céu"
          }
        ],
        "options": [
          "Pigeon",
          "Street",
          "Park Bench",
          "Sun"
        ],
        "correctAnswer": "Park Bench",
        "explanation": "Exemplo prático: \"Sit on the wooden park bench in the square.\"",
        "phoneticHint": "/pɑːrk bentʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e27",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bridge",
        "visualEmoji": "🌉",
        "visualOptions": [
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte / Viaduto"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro de passeio"
          },
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          }
        ],
        "options": [
          "Crosswalk",
          "Bridge",
          "Car",
          "Fire Truck"
        ],
        "correctAnswer": "Bridge",
        "explanation": "Exemplo prático: \"Cross the bridge over the city river.\"",
        "phoneticHint": "/brɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e28",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Building",
        "visualEmoji": "🏢",
        "visualOptions": [
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua escolar"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Building",
            "emoji": "🏢",
            "label": "Building",
            "translationPt": "Prédio / Edifício"
          }
        ],
        "options": [
          "Van",
          "Rain",
          "Umbrella",
          "Building"
        ],
        "correctAnswer": "Building",
        "explanation": "Exemplo prático: \"Tall apartment buildings line the avenue.\"",
        "phoneticHint": "/ˈbɪl.dɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p8-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p8-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p8-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p8-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-e30",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Tree",
        "visualEmoji": "🌳",
        "visualOptions": [
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore na calçada / praça"
          },
          {
            "text": "Bus Stop",
            "emoji": "🚏",
            "label": "Bus Stop",
            "translationPt": "Ponto de ônibus"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus urbano"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          }
        ],
        "options": [
          "Tree",
          "Bus Stop",
          "Bus",
          "Helmet"
        ],
        "correctAnswer": "Tree",
        "explanation": "Exemplo prático: \"Green trees give shade along the sidewalk.\"",
        "phoneticHint": "/triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e31",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Flower",
        "visualEmoji": "🌻",
        "visualOptions": [
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Flower",
            "emoji": "🌻",
            "label": "Flower",
            "translationPt": "Flor do jardim / canteiro"
          }
        ],
        "options": [
          "Truck",
          "Taxi",
          "Traffic Light",
          "Flower"
        ],
        "correctAnswer": "Flower",
        "explanation": "Exemplo prático: \"Colorful flowers bloom in the town square.\"",
        "phoneticHint": "/ˈflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e32",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bird",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Tire",
            "emoji": "🛞",
            "label": "Tire",
            "translationPt": "Pneu / Roda do veículo"
          },
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Bicycle",
            "emoji": "🚲",
            "label": "Bicycle",
            "translationPt": "Bicicleta"
          }
        ],
        "options": [
          "Ambulance",
          "Tire",
          "Bird",
          "Bicycle"
        ],
        "correctAnswer": "Bird",
        "explanation": "Exemplo prático: \"A bird sings on the tree branch.\"",
        "phoneticHint": "/bɜːrd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e33",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pigeon",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo na praça"
          },
          {
            "text": "Stop Sign",
            "emoji": "🛑",
            "label": "Stop Sign",
            "translationPt": "Placa de PARE (sinalização)"
          },
          {
            "text": "Streetlight",
            "emoji": "🏮",
            "label": "Streetlight",
            "translationPt": "Poste de iluminação pública"
          },
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de direção"
          }
        ],
        "options": [
          "Pigeon",
          "Stop Sign",
          "Streetlight",
          "Steering Wheel"
        ],
        "correctAnswer": "Pigeon",
        "explanation": "Exemplo prático: \"Gray pigeons walk around the square.\"",
        "phoneticHint": "/ˈpɪdʒ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p8-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p8-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p8-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p8-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-e35",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sun",
        "visualEmoji": "☀️",
        "visualOptions": [
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol no céu"
          },
          {
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível (Posto)"
          },
          {
            "text": "Park Bench",
            "emoji": "🪑",
            "label": "Park Bench",
            "translationPt": "Banco da praça"
          }
        ],
        "options": [
          "Police Car",
          "Sun",
          "Fuel Pump",
          "Park Bench"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The bright sun warms the neighborhood.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-e36",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rain",
        "visualEmoji": "🌧️",
        "visualOptions": [
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte / Viaduto"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Building",
            "emoji": "🏢",
            "label": "Building",
            "translationPt": "Prédio / Edifício"
          },
          {
            "text": "Flower",
            "emoji": "🌻",
            "label": "Flower",
            "translationPt": "Flor do jardim / canteiro"
          }
        ],
        "options": [
          "Bridge",
          "Rain",
          "Building",
          "Flower"
        ],
        "correctAnswer": "Rain",
        "explanation": "Exemplo prático: \"Rain falls on the street.\"",
        "phoneticHint": "/reɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p8-e37",
        "type": "image-choice",
        "conceptTitle": "Na Rua, Calçada, Trânsito & Vizinhança • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Umbrella",
        "visualEmoji": "☂️",
        "visualOptions": [
          {
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore na calçada / praça"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          }
        ],
        "options": [
          "Bird",
          "Tree",
          "Motorcycle",
          "Umbrella"
        ],
        "correctAnswer": "Umbrella",
        "explanation": "Exemplo prático: \"Open your umbrella when walking in the rain.\"",
        "phoneticHint": "/ʌmˈbrel.ə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p8-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p8-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p8-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p8-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p8-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p9",
    "worldId": 0,
    "phaseNumber": 9,
    "title": "Ambiente 9 • Na Escola, Sala de Aula & Material Escolar",
    "subtitle": "Ambiente 9/12 • Sala de aula, quadro, carteira, professor, mochila, cadernos, papelaria e esportes",
    "pedagogicalObjective": "Dominar todo o ambiente escolar: sala de aula, mobiliário, professor, materiais de estudo, laboratório e quadra.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Caminhando pela rua, chegamos à Escola (School) e entramos na Sala de Aula (Classroom)!",
      "Veja o Quadro Branco / Lousa (Whiteboard), a Carteira Escolar (Student Desk), o Professor (Teacher), a Mochila (Backpack), o Livro (Book) e o Caderno (Notebook).",
      "Sobre a carteira estão a Caneta (Pen), o Lápis (Pencil), a Borracha (Eraser), o Apontador (Pencil Sharpener), a Régua (Ruler), a Tesoura (Scissors), a Cola (Glue), a Calculadora (Calculator) e o Globo Terrestre (Globe)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p9-e1",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "School",
        "visualEmoji": "🏫",
        "visualOptions": [
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola / Colégio"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope de papel"
          }
        ],
        "options": [
          "Eraser",
          "Headphones",
          "School",
          "Envelope"
        ],
        "correctAnswer": "School",
        "explanation": "Exemplo prático: \"Children arrive at the school in the morning.\"",
        "phoneticHint": "/skuːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e2",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Classroom",
        "visualEmoji": "🏫",
        "visualOptions": [
          {
            "text": "Classroom",
            "emoji": "🏫",
            "label": "Classroom",
            "translationPt": "Sala de aula"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila escolar"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          }
        ],
        "options": [
          "Classroom",
          "Backpack",
          "Keyboard",
          "Notebook"
        ],
        "correctAnswer": "Classroom",
        "explanation": "Exemplo prático: \"Students sit at their desks in the classroom.\"",
        "phoneticHint": "/ˈklæs.ruːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e3",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Whiteboard",
        "visualEmoji": "📋",
        "visualOptions": [
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola branca / bastão"
          },
          {
            "text": "Whiteboard",
            "emoji": "📋",
            "label": "Whiteboard",
            "translationPt": "Quadro branco / Lousa escolar"
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro didático"
          }
        ],
        "options": [
          "Glue",
          "Whiteboard",
          "Globe",
          "Book"
        ],
        "correctAnswer": "Whiteboard",
        "explanation": "Exemplo prático: \"The teacher writes English words on the whiteboard.\"",
        "phoneticHint": "/ˈwaɪt.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p9-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p9-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p9-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p9-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p9-e5",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Student Desk",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta esferográfica"
          },
          {
            "text": "Student Desk",
            "emoji": "🪑",
            "label": "Student Desk",
            "translationPt": "Carteira escolar (mesa e cadeira)"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura escolar"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol (na quadra)"
          }
        ],
        "options": [
          "Pen",
          "Student Desk",
          "Scissors",
          "Soccer Ball"
        ],
        "correctAnswer": "Student Desk",
        "explanation": "Exemplo prático: \"Open your notebook on the student desk.\"",
        "phoneticHint": "/ˈstuː.dənt desk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e6",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Teacher",
        "visualEmoji": "👩‍🏫",
        "visualOptions": [
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola / Colégio"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          }
        ],
        "options": [
          "Computer Mouse",
          "Calculator",
          "School",
          "Teacher"
        ],
        "correctAnswer": "Teacher",
        "explanation": "Exemplo prático: \"The teacher explains the lesson clearly.\"",
        "phoneticHint": "/ˈtiː.tʃər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e7",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Backpack",
        "visualEmoji": "🎒",
        "visualOptions": [
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua escolar"
          },
          {
            "text": "Classroom",
            "emoji": "🏫",
            "label": "Classroom",
            "translationPt": "Sala de aula"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila escolar"
          },
          {
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca escolar"
          }
        ],
        "options": [
          "Ruler",
          "Classroom",
          "Backpack",
          "Library"
        ],
        "correctAnswer": "Backpack",
        "explanation": "Exemplo prático: \"Carry your books inside a school backpack.\"",
        "phoneticHint": "/ˈbæk.pæk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e8",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Book",
        "visualEmoji": "📘",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro didático"
          },
          {
            "text": "Pencil Sharpener",
            "emoji": "✏️",
            "label": "Pencil Sharpener",
            "translationPt": "Apontador de lápis"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          },
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Folha de papel"
          }
        ],
        "options": [
          "Book",
          "Pencil Sharpener",
          "Basketball",
          "Paper"
        ],
        "correctAnswer": "Book",
        "explanation": "Exemplo prático: \"Open your English book to page ten.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p9-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p9-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p9-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p9-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p9-e10",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Notebook",
        "visualEmoji": "📓",
        "visualOptions": [
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel de pintura (aula de artes)"
          },
          {
            "text": "Whiteboard",
            "emoji": "📋",
            "label": "Whiteboard",
            "translationPt": "Quadro branco / Lousa escolar"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          },
          {
            "text": "Student Desk",
            "emoji": "🪑",
            "label": "Student Desk",
            "translationPt": "Carteira escolar (mesa e cadeira)"
          }
        ],
        "options": [
          "Paintbrush",
          "Whiteboard",
          "Notebook",
          "Student Desk"
        ],
        "correctAnswer": "Notebook",
        "explanation": "Exemplo prático: \"Write the vocabulary list in your spiral notebook.\"",
        "phoneticHint": "/ˈnoʊt.bʊk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e11",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pen",
        "visualEmoji": "🖊️",
        "visualOptions": [
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha escolar / esportiva"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta esferográfica"
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio de ciências"
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa geográfico"
          }
        ],
        "options": [
          "Medal",
          "Pen",
          "Microscope",
          "Map"
        ],
        "correctAnswer": "Pen",
        "explanation": "Exemplo prático: \"Sign your name with a blue ballpoint pen.\"",
        "phoneticHint": "/pen/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e12",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pencil",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola / Colégio"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis de escrever"
          }
        ],
        "options": [
          "Phone",
          "School",
          "Teacher",
          "Pencil"
        ],
        "correctAnswer": "Pencil",
        "explanation": "Exemplo prático: \"Draw and write with a yellow wooden pencil.\"",
        "phoneticHint": "/ˈpen.səl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e13",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Eraser",
        "visualEmoji": "🧽",
        "visualOptions": [
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          },
          {
            "text": "Classroom",
            "emoji": "🏫",
            "label": "Classroom",
            "translationPt": "Sala de aula"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca escolar"
          }
        ],
        "options": [
          "Eraser",
          "Classroom",
          "Calculator",
          "Library"
        ],
        "correctAnswer": "Eraser",
        "explanation": "Exemplo prático: \"Correct the mistake using a rubber eraser.\"",
        "phoneticHint": "/ɪˈreɪ.sər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p9-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p9-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p9-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p9-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p9-e15",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pencil Sharpener",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro didático"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila escolar"
          },
          {
            "text": "Pencil Sharpener",
            "emoji": "✏️",
            "label": "Pencil Sharpener",
            "translationPt": "Apontador de lápis"
          }
        ],
        "options": [
          "Basketball",
          "Book",
          "Backpack",
          "Pencil Sharpener"
        ],
        "correctAnswer": "Pencil Sharpener",
        "explanation": "Exemplo prático: \"Sharpen the pencil tip with a pencil sharpener.\"",
        "phoneticHint": "/ˈpen.səl ˈʃɑːr.pən.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e16",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ruler",
        "visualEmoji": "📏",
        "visualOptions": [
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua escolar"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          }
        ],
        "options": [
          "Headphones",
          "Keyboard",
          "Ruler",
          "Notebook"
        ],
        "correctAnswer": "Ruler",
        "explanation": "Exemplo prático: \"Draw a straight line with a plastic ruler.\"",
        "phoneticHint": "/ˈruː.lər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e17",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Scissors",
        "visualEmoji": "✂️",
        "visualOptions": [
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura escolar"
          },
          {
            "text": "Whiteboard",
            "emoji": "📋",
            "label": "Whiteboard",
            "translationPt": "Quadro branco / Lousa escolar"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis de escrever"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          }
        ],
        "options": [
          "Scissors",
          "Whiteboard",
          "Pencil",
          "Teacher"
        ],
        "correctAnswer": "Scissors",
        "explanation": "Exemplo prático: \"Cut the paper along the line with scissors.\"",
        "phoneticHint": "/ˈsɪz.ərz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e18",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Glue",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel de pintura (aula de artes)"
          },
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola branca / bastão"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta esferográfica"
          }
        ],
        "options": [
          "Paintbrush",
          "Glue",
          "Phone",
          "Pen"
        ],
        "correctAnswer": "Glue",
        "explanation": "Exemplo prático: \"Use school glue to paste the picture.\"",
        "phoneticHint": "/ɡluː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p9-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p9-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p9-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p9-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p9-e20",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Paper",
        "visualEmoji": "📄",
        "visualOptions": [
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Folha de papel"
          },
          {
            "text": "Student Desk",
            "emoji": "🪑",
            "label": "Student Desk",
            "translationPt": "Carteira escolar (mesa e cadeira)"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol (na quadra)"
          }
        ],
        "options": [
          "Computer Mouse",
          "Paper",
          "Student Desk",
          "Soccer Ball"
        ],
        "correctAnswer": "Paper",
        "explanation": "Exemplo prático: \"Write your test answers on a sheet of paper.\"",
        "phoneticHint": "/ˈpeɪ.pər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e21",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Envelope",
        "visualEmoji": "✉️",
        "visualOptions": [
          {
            "text": "Pencil Sharpener",
            "emoji": "✏️",
            "label": "Pencil Sharpener",
            "translationPt": "Apontador de lápis"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua escolar"
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio de ciências"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope de papel"
          }
        ],
        "options": [
          "Pencil Sharpener",
          "Ruler",
          "Microscope",
          "Envelope"
        ],
        "correctAnswer": "Envelope",
        "explanation": "Exemplo prático: \"Put the school letter inside a paper envelope.\"",
        "phoneticHint": "/ˈen.və.loʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e22",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Calculator",
        "visualEmoji": "🧮",
        "visualOptions": [
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura escolar"
          },
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis de escrever"
          }
        ],
        "options": [
          "Scissors",
          "Eraser",
          "Calculator",
          "Pencil"
        ],
        "correctAnswer": "Calculator",
        "explanation": "Exemplo prático: \"Check the math result on a pocket calculator.\"",
        "phoneticHint": "/ˈkæl.kjə.leɪ.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e23",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Globe",
        "visualEmoji": "🌍",
        "visualOptions": [
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          },
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha escolar / esportiva"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          },
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola branca / bastão"
          }
        ],
        "options": [
          "Globe",
          "Medal",
          "Teacher",
          "Glue"
        ],
        "correctAnswer": "Globe",
        "explanation": "Exemplo prático: \"Find Brazil and the United States on the desk globe.\"",
        "phoneticHint": "/ɡloʊb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p9-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p9-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p9-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p9-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p9-e25",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Map",
        "visualEmoji": "🗺️",
        "visualOptions": [
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Folha de papel"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa geográfico"
          },
          {
            "text": "Whiteboard",
            "emoji": "📋",
            "label": "Whiteboard",
            "translationPt": "Quadro branco / Lousa escolar"
          }
        ],
        "options": [
          "Paper",
          "Notebook",
          "Map",
          "Whiteboard"
        ],
        "correctAnswer": "Map",
        "explanation": "Exemplo prático: \"Look at the world map in geography class.\"",
        "phoneticHint": "/mæp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e26",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Microscope",
        "visualEmoji": "🔬",
        "visualOptions": [
          {
            "text": "Student Desk",
            "emoji": "🪑",
            "label": "Student Desk",
            "translationPt": "Carteira escolar (mesa e cadeira)"
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio de ciências"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope de papel"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Escola / Colégio"
          }
        ],
        "options": [
          "Student Desk",
          "Microscope",
          "Envelope",
          "School"
        ],
        "correctAnswer": "Microscope",
        "explanation": "Exemplo prático: \"Look at cells through the laboratory microscope.\"",
        "phoneticHint": "/ˈmaɪ.krə.skoʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e27",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Paintbrush",
        "visualEmoji": "🖌️",
        "visualOptions": [
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Classroom",
            "emoji": "🏫",
            "label": "Classroom",
            "translationPt": "Sala de aula"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel de pintura (aula de artes)"
          }
        ],
        "options": [
          "Computer Mouse",
          "Calculator",
          "Classroom",
          "Paintbrush"
        ],
        "correctAnswer": "Paintbrush",
        "explanation": "Exemplo prático: \"Paint a picture using watercolors and a paintbrush.\"",
        "phoneticHint": "/ˈpeɪnt.brʌʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e28",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca escolar"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua escolar"
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          }
        ],
        "options": [
          "Phone",
          "Library",
          "Ruler",
          "Globe"
        ],
        "correctAnswer": "Phone",
        "explanation": "Exemplo prático: \"Use the Lingo World app on your phone to study.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p9-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p9-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p9-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p9-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p9-e30",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Headphones",
        "visualEmoji": "🎧",
        "visualOptions": [
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila escolar"
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa geográfico"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          }
        ],
        "options": [
          "Eraser",
          "Backpack",
          "Map",
          "Headphones"
        ],
        "correctAnswer": "Headphones",
        "explanation": "Exemplo prático: \"Listen to the English pronunciation with headphones.\"",
        "phoneticHint": "/ˈhed.foʊnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e31",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Keyboard",
        "visualEmoji": "⌨️",
        "visualOptions": [
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro didático"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope de papel"
          }
        ],
        "options": [
          "Book",
          "Basketball",
          "Keyboard",
          "Envelope"
        ],
        "correctAnswer": "Keyboard",
        "explanation": "Exemplo prático: \"Type your essay on the computer keyboard.\"",
        "phoneticHint": "/ˈkiː.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e32",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Computer Mouse",
        "visualEmoji": "🖱️",
        "visualOptions": [
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta esferográfica"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura escolar"
          },
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola branca / bastão"
          }
        ],
        "options": [
          "Computer Mouse",
          "Pen",
          "Scissors",
          "Glue"
        ],
        "correctAnswer": "Computer Mouse",
        "explanation": "Exemplo prático: \"Click the button using the computer mouse.\"",
        "phoneticHint": "/kəmˈpjuː.tər maʊs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e33",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Library",
        "visualEmoji": "📚",
        "visualOptions": [
          {
            "text": "Pencil Sharpener",
            "emoji": "✏️",
            "label": "Pencil Sharpener",
            "translationPt": "Apontador de lápis"
          },
          {
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca escolar"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis de escrever"
          },
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Folha de papel"
          }
        ],
        "options": [
          "Pencil Sharpener",
          "Library",
          "Pencil",
          "Paper"
        ],
        "correctAnswer": "Library",
        "explanation": "Exemplo prático: \"Students read quietly in the school library.\"",
        "phoneticHint": "/ˈlaɪ.brer.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p9-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p9-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p9-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p9-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p9-e35",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soccer Ball",
        "visualEmoji": "⚽",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol (na quadra)"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel de pintura (aula de artes)"
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa geográfico"
          }
        ],
        "options": [
          "Phone",
          "Soccer Ball",
          "Paintbrush",
          "Map"
        ],
        "correctAnswer": "Soccer Ball",
        "explanation": "Exemplo prático: \"Play soccer in physical education class.\"",
        "phoneticHint": "/ˈsɑː.kər bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e36",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Basketball",
        "visualEmoji": "🏀",
        "visualOptions": [
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio de ciências"
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          },
          {
            "text": "Keyboard",
            "emoji": "⌨️",
            "label": "Keyboard",
            "translationPt": "Teclado de computador"
          },
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          }
        ],
        "options": [
          "Microscope",
          "Globe",
          "Keyboard",
          "Basketball"
        ],
        "correctAnswer": "Basketball",
        "explanation": "Exemplo prático: \"Shoot the orange basketball into the hoop.\"",
        "phoneticHint": "/ˈbæs.kɪt.bɔːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e37",
        "type": "image-choice",
        "conceptTitle": "Na Escola, Sala de Aula & Material Escolar • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Medal",
        "visualEmoji": "🥇",
        "visualOptions": [
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          },
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha escolar / esportiva"
          },
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          }
        ],
        "options": [
          "Headphones",
          "Notebook",
          "Medal",
          "Eraser"
        ],
        "correctAnswer": "Medal",
        "explanation": "Exemplo prático: \"She won a gold medal in the school competition.\"",
        "phoneticHint": "/ˈmed.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p9-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p9-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p9-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p9-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p10",
    "worldId": 0,
    "phaseNumber": 10,
    "title": "Ambiente 10 • No Supermercado, Hortifrúti, Padaria & Caixa",
    "subtitle": "Ambiente 10/12 • Carrinho, cesta, corredores, frutas, verduras, açougue, padaria e pagamento",
    "pedagogicalObjective": "Fazer compras completas no supermercado identificando equipamentos, alimentos básicos, hortifrúti, padaria e formas de pagamento.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Saindo da escola, vamos ao Supermercado (Supermarket) fazer as compras da casa!",
      "Pegue o Carrinho de Compras (Shopping Cart) ou a Cesta (Basket) e passe pela Padaria (Bakery: Bread, Cheese Bread, Cake), pela Mercearia (Rice, Beans, Pasta, Coffee, Sugar, Olive Oil) e pelo Açougue (Steak, Roast Chicken, Fish Fillet).",
      "No setor de Hortifrúti escolhemos as frutas e verduras mais frescas e, ao final, passamos no Caixa com Cartão de Crédito (Credit Card) ou Dinheiro (Money)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p10-e1",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Supermarket",
        "visualEmoji": "🛒",
        "visualOptions": [
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana (Hortifrúti)"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Supermarket",
          "Beans",
          "Banana",
          "Bread"
        ],
        "correctAnswer": "Supermarket",
        "explanation": "Exemplo prático: \"We buy food for the week at the supermarket.\"",
        "phoneticHint": "/ˈsuː.pərˌmɑːr.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e2",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Shopping Cart",
        "visualEmoji": "🛒",
        "visualOptions": [
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Shopping Cart",
            "emoji": "🛒",
            "label": "Shopping Cart",
            "translationPt": "Carrinho de supermercado"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Rice",
          "Shopping Cart",
          "Broccoli",
          "Tomato"
        ],
        "correctAnswer": "Shopping Cart",
        "explanation": "Exemplo prático: \"Push the metal shopping cart down the aisle.\"",
        "phoneticHint": "/ˈʃɑː.pɪŋ kɑːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e3",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Basket",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta de compras"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          }
        ],
        "options": [
          "Grape",
          "Basket",
          "Garlic",
          "Watermelon"
        ],
        "correctAnswer": "Basket",
        "explanation": "Exemplo prático: \"Carry a few items in a hand basket.\"",
        "phoneticHint": "/ˈbæs.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p10-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p10-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p10-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p10-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p10-e5",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bakery",
        "visualEmoji": "🥖",
        "visualOptions": [
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão"
          },
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Carne bovina / Bife (Açougue)"
          },
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Padaria"
          }
        ],
        "options": [
          "Strawberry",
          "Pasta",
          "Steak",
          "Bakery"
        ],
        "correctAnswer": "Bakery",
        "explanation": "Exemplo prático: \"Fresh warm bread is baked at the bakery.\"",
        "phoneticHint": "/ˈbeɪ.kər.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e6",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe (Peixaria)"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Fish Fillet",
          "Carrot",
          "Bread",
          "Coffee"
        ],
        "correctAnswer": "Bread",
        "explanation": "Exemplo prático: \"Buy a fresh loaf of bread at the bakery.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e7",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Cheese Bread",
        "visualEmoji": "🧀",
        "visualOptions": [
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          }
        ],
        "options": [
          "Cheese Bread",
          "Roast Chicken",
          "Onion",
          "Orange"
        ],
        "correctAnswer": "Cheese Bread",
        "explanation": "Exemplo prático: \"Warm Brazilian cheese bread from the bakery.\"",
        "phoneticHint": "/ˈtʃiːz bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e8",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cake",
        "visualEmoji": "🍰",
        "visualOptions": [
          {
            "text": "Olive Oil",
            "emoji": "🫒",
            "label": "Olive Oil",
            "translationPt": "Azeite de oliva"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta de compras"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo confeitado"
          },
          {
            "text": "Credit Card",
            "emoji": "💳",
            "label": "Credit Card",
            "translationPt": "Cartão de crédito / débito (no caixa)"
          }
        ],
        "options": [
          "Olive Oil",
          "Basket",
          "Cake",
          "Credit Card"
        ],
        "correctAnswer": "Cake",
        "explanation": "Exemplo prático: \"Pick up a chocolate cake for the birthday.\"",
        "phoneticHint": "/keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p10-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p10-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p10-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p10-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p10-e10",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
        "visualOptions": [
          {
            "text": "Shopping Cart",
            "emoji": "🛒",
            "label": "Shopping Cart",
            "translationPt": "Carrinho de supermercado"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Padaria"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          }
        ],
        "options": [
          "Shopping Cart",
          "Rice",
          "Bakery",
          "Supermarket"
        ],
        "correctAnswer": "Rice",
        "explanation": "Exemplo prático: \"Put a bag of white rice in the shopping cart.\"",
        "phoneticHint": "/raɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e11",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Beans",
        "visualEmoji": "🫘",
        "visualOptions": [
          {
            "text": "Money",
            "emoji": "💵",
            "label": "Money",
            "translationPt": "Dinheiro em espécie"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          }
        ],
        "options": [
          "Money",
          "Papaya",
          "Pineapple",
          "Beans"
        ],
        "correctAnswer": "Beans",
        "explanation": "Exemplo prático: \"Rice and beans are essentials on the grocery list.\"",
        "phoneticHint": "/biːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e12",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pasta",
        "visualEmoji": "🍝",
        "visualOptions": [
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          }
        ],
        "options": [
          "Pasta",
          "Strawberry",
          "Potato",
          "Cheese Bread"
        ],
        "correctAnswer": "Pasta",
        "explanation": "Exemplo prático: \"Buy two packages of spaghetti pasta.\"",
        "phoneticHint": "/ˈpɑː.stə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e13",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Steak",
        "visualEmoji": "🥩",
        "visualOptions": [
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo confeitado"
          },
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Carne bovina / Bife (Açougue)"
          }
        ],
        "options": [
          "Orange",
          "Onion",
          "Cake",
          "Steak"
        ],
        "correctAnswer": "Steak",
        "explanation": "Exemplo prático: \"Choose fresh beef steak at the butcher counter.\"",
        "phoneticHint": "/steɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p10-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p10-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p10-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p10-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p10-e15",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Roast Chicken",
        "visualEmoji": "🍗",
        "visualOptions": [
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta de compras"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango"
          },
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Padaria"
          }
        ],
        "options": [
          "Basket",
          "Bread",
          "Roast Chicken",
          "Bakery"
        ],
        "correctAnswer": "Roast Chicken",
        "explanation": "Exemplo prático: \"Roast chicken for Sunday family lunch.\"",
        "phoneticHint": "/ˈroʊst ˈtʃɪk.ɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e16",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fish Fillet",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe (Peixaria)"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          }
        ],
        "options": [
          "Fish Fillet",
          "Rice",
          "Broccoli",
          "Beans"
        ],
        "correctAnswer": "Fish Fillet",
        "explanation": "Exemplo prático: \"Fresh fish fillet from the seafood counter.\"",
        "phoneticHint": "/ˈfɪʃ fɪˈleɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e17",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Banana",
        "visualEmoji": "🍌",
        "visualOptions": [
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana (Hortifrúti)"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          },
          {
            "text": "Olive Oil",
            "emoji": "🫒",
            "label": "Olive Oil",
            "translationPt": "Azeite de oliva"
          }
        ],
        "options": [
          "Tomato",
          "Banana",
          "Watermelon",
          "Olive Oil"
        ],
        "correctAnswer": "Banana",
        "explanation": "Exemplo prático: \"Pick a bunch of ripe yellow bananas.\"",
        "phoneticHint": "/bəˈnæn.ə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e18",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Orange",
        "visualEmoji": "🍊",
        "visualOptions": [
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão"
          }
        ],
        "options": [
          "Papaya",
          "Orange",
          "Pineapple",
          "Pasta"
        ],
        "correctAnswer": "Orange",
        "explanation": "Exemplo prático: \"Sweet oranges for making fresh juice.\"",
        "phoneticHint": "/ˈɔːr.ɪndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p10-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p10-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p10-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p10-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p10-e20",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Strawberry",
        "visualEmoji": "🍓",
        "visualOptions": [
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo confeitado"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          }
        ],
        "options": [
          "Cheese Bread",
          "Cake",
          "Carrot",
          "Strawberry"
        ],
        "correctAnswer": "Strawberry",
        "explanation": "Exemplo prático: \"A box of red strawberries from the market.\"",
        "phoneticHint": "/ˈstrɔː.ber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e21",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Grape",
        "visualEmoji": "🍇",
        "visualOptions": [
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe (Peixaria)"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          }
        ],
        "options": [
          "Fish Fillet",
          "Roast Chicken",
          "Grape",
          "Coffee"
        ],
        "correctAnswer": "Grape",
        "explanation": "Exemplo prático: \"Sweet purple grapes in the produce section.\"",
        "phoneticHint": "/ɡreɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e22",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Watermelon",
        "visualEmoji": "🍉",
        "visualOptions": [
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          },
          {
            "text": "Credit Card",
            "emoji": "💳",
            "label": "Credit Card",
            "translationPt": "Cartão de crédito / débito (no caixa)"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana (Hortifrúti)"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          }
        ],
        "options": [
          "Watermelon",
          "Credit Card",
          "Banana",
          "Supermarket"
        ],
        "correctAnswer": "Watermelon",
        "explanation": "Exemplo prático: \"A large green watermelon with red flesh.\"",
        "phoneticHint": "/ˈwɔː.tərˌmel.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e23",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pineapple",
        "visualEmoji": "🍍",
        "visualOptions": [
          {
            "text": "Shopping Cart",
            "emoji": "🛒",
            "label": "Shopping Cart",
            "translationPt": "Carrinho de supermercado"
          },
          {
            "text": "Money",
            "emoji": "💵",
            "label": "Money",
            "translationPt": "Dinheiro em espécie"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Carne bovina / Bife (Açougue)"
          }
        ],
        "options": [
          "Shopping Cart",
          "Money",
          "Pineapple",
          "Steak"
        ],
        "correctAnswer": "Pineapple",
        "explanation": "Exemplo prático: \"Smell the ripe pineapple to see if it is sweet.\"",
        "phoneticHint": "/ˈpaɪnˌæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p10-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p10-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p10-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p10-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p10-e25",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Papaya",
        "visualEmoji": "🧡",
        "visualOptions": [
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Padaria"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta de compras"
          }
        ],
        "options": [
          "Bakery",
          "Papaya",
          "Garlic",
          "Basket"
        ],
        "correctAnswer": "Papaya",
        "explanation": "Exemplo prático: \"Ripe papaya for tomorrow morning breakfast.\"",
        "phoneticHint": "/pəˈpaɪ.ə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e26",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Strawberry",
            "emoji": "🍓",
            "label": "Strawberry",
            "translationPt": "Morango"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Pasta",
          "Grape",
          "Strawberry",
          "Tomato"
        ],
        "correctAnswer": "Tomato",
        "explanation": "Exemplo prático: \"Red tomatoes for the salad and sauce.\"",
        "phoneticHint": "/təˈmeɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e27",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Potato",
        "visualEmoji": "🥔",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe (Peixaria)"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo confeitado"
          },
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          }
        ],
        "options": [
          "Potato",
          "Fish Fillet",
          "Cake",
          "Cheese Bread"
        ],
        "correctAnswer": "Potato",
        "explanation": "Exemplo prático: \"Wash and peel the yellow potatoes.\"",
        "phoneticHint": "/pəˈteɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e28",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
        "visualOptions": [
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Rice",
          "Orange",
          "Roast Chicken",
          "Carrot"
        ],
        "correctAnswer": "Carrot",
        "explanation": "Exemplo prático: \"Crunchy orange carrots from the market.\"",
        "phoneticHint": "/ˈkær.ət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p10-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p10-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p10-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p10-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p10-e30",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Onion",
        "visualEmoji": "🧅",
        "visualOptions": [
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana (Hortifrúti)"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Beans",
          "Banana",
          "Onion",
          "Bread"
        ],
        "correctAnswer": "Onion",
        "explanation": "Exemplo prático: \"Yellow onions and garlic for seasoning.\"",
        "phoneticHint": "/ˈʌn.jən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e31",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
        "visualOptions": [
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Credit Card",
            "emoji": "💳",
            "label": "Credit Card",
            "translationPt": "Cartão de crédito / débito (no caixa)"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          }
        ],
        "options": [
          "Garlic",
          "Credit Card",
          "Tomato",
          "Watermelon"
        ],
        "correctAnswer": "Garlic",
        "explanation": "Exemplo prático: \"A whole bulb of white garlic.\"",
        "phoneticHint": "/ˈɡɑːr.lɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e32",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Broccoli",
        "visualEmoji": "🥦",
        "visualOptions": [
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Supermercado"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          }
        ],
        "options": [
          "Supermarket",
          "Broccoli",
          "Grape",
          "Potato"
        ],
        "correctAnswer": "Broccoli",
        "explanation": "Exemplo prático: \"Fresh green broccoli florets.\"",
        "phoneticHint": "/ˈbrɑː.kəl.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e33",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Coffee",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Carne bovina / Bife (Açougue)"
          },
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Shopping Cart",
            "emoji": "🛒",
            "label": "Shopping Cart",
            "translationPt": "Carrinho de supermercado"
          }
        ],
        "options": [
          "Steak",
          "Coffee",
          "Pineapple",
          "Shopping Cart"
        ],
        "correctAnswer": "Coffee",
        "explanation": "Exemplo prático: \"Brazilians love fresh hot coffee every day.\"",
        "phoneticHint": "/ˈkɔː.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p10-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p10-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p10-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p10-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p10-e35",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Olive Oil",
        "visualEmoji": "🫒",
        "visualOptions": [
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Olive Oil",
            "emoji": "🫒",
            "label": "Olive Oil",
            "translationPt": "Azeite de oliva"
          }
        ],
        "options": [
          "Papaya",
          "Carrot",
          "Onion",
          "Olive Oil"
        ],
        "correctAnswer": "Olive Oil",
        "explanation": "Exemplo prático: \"A glass bottle of extra virgin olive oil.\"",
        "phoneticHint": "/ˈɑː.lɪv ɔɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e36",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Credit Card",
        "visualEmoji": "💳",
        "visualOptions": [
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          },
          {
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta de compras"
          },
          {
            "text": "Credit Card",
            "emoji": "💳",
            "label": "Credit Card",
            "translationPt": "Cartão de crédito / débito (no caixa)"
          },
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Padaria"
          }
        ],
        "options": [
          "Garlic",
          "Basket",
          "Credit Card",
          "Bakery"
        ],
        "correctAnswer": "Credit Card",
        "explanation": "Exemplo prático: \"Pay for the groceries with a credit card.\"",
        "phoneticHint": "/ˈkred.ɪt kɑːrd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e37",
        "type": "image-choice",
        "conceptTitle": "No Supermercado, Hortifrúti, Padaria & Caixa • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Money",
        "visualEmoji": "💵",
        "visualOptions": [
          {
            "text": "Money",
            "emoji": "💵",
            "label": "Money",
            "translationPt": "Dinheiro em espécie"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          }
        ],
        "options": [
          "Money",
          "Potato",
          "Broccoli",
          "Bread"
        ],
        "correctAnswer": "Money",
        "explanation": "Exemplo prático: \"Count your change in paper money and coins.\"",
        "phoneticHint": "/ˈmʌn.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p10-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p10-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p10-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p10-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p11",
    "worldId": 0,
    "phaseNumber": 11,
    "title": "Ambiente 11 • Na Igreja, Música, Comunidade & Celebração",
    "subtitle": "Ambiente 11/12 • Igreja, sino, cruz, vitral, bancos, altar, Bíblia, vela, instrumentos e trajes",
    "pedagogicalObjective": "Reconhecer todos os elementos arquitetônicos, objetos litúrgicos, instrumentos musicais e vestimentas encontrados na igreja e em celebrações comunitárias.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Continuando nosso passeio pelos locais do cotidiano, visitamos a Igreja (Church)!",
      "Olhe para a arquitetura e o interior do templo: a Igreja (Church), o Sino da Torre (Church Bell), a Cruz (Cross), o Vitral Colorido (Stained Glass), os Bancos da Igreja (Church Pew), o Altar (Altar), o Púlpito (Pulpit), a Bíblia (Bible) e a Vela (Candle).",
      "Na parte musical e comunitária vemos o Microfone (Microphone), o Violão (Guitar), o Piano / Teclado (Piano), o Violino (Violin), a Flauta (Flute), o Terno (Suit), a Gravata (Necktie) e a Aliança (Ring)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p11-e1",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Church",
        "visualEmoji": "⛪",
        "visualOptions": [
          {
            "text": "Bible",
            "emoji": "📖",
            "label": "Bible",
            "translationPt": "Bíblia Sagrada"
          },
          {
            "text": "Church",
            "emoji": "⛪",
            "label": "Church",
            "translationPt": "Igreja / Templo"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração (amor e caridade)"
          },
          {
            "text": "Handshake",
            "emoji": "🤝",
            "label": "Handshake",
            "translationPt": "Aperto de mão / Cumprimento fraterno"
          }
        ],
        "options": [
          "Bible",
          "Church",
          "Heart",
          "Handshake"
        ],
        "correctAnswer": "Church",
        "explanation": "Exemplo prático: \"Families gather at the neighborhood church on Sunday.\"",
        "phoneticHint": "/tʃɜːrtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e2",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Church Bell",
        "visualEmoji": "🔔",
        "visualOptions": [
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Aliança / Anel de ouro"
          },
          {
            "text": "Church Bell",
            "emoji": "🔔",
            "label": "Church Bell",
            "translationPt": "Sino da igreja"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata social"
          }
        ],
        "options": [
          "Ring",
          "Church Bell",
          "Necklace",
          "Necktie"
        ],
        "correctAnswer": "Church Bell",
        "explanation": "Exemplo prático: \"The bronze church bell rings in the tower.\"",
        "phoneticHint": "/tʃɜːrtʃ bel/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e3",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Cross",
        "visualEmoji": "✝️",
        "visualOptions": [
          {
            "text": "Gift",
            "emoji": "🎁",
            "label": "Gift",
            "translationPt": "Presente / Doação comunitária"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão acústico"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          },
          {
            "text": "Cross",
            "emoji": "✝️",
            "label": "Cross",
            "translationPt": "Cruz"
          }
        ],
        "options": [
          "Gift",
          "Guitar",
          "Drum",
          "Cross"
        ],
        "correctAnswer": "Cross",
        "explanation": "Exemplo prático: \"A wooden cross stands above the church altar.\"",
        "phoneticHint": "/krɔːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p11-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p11-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p11-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p11-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p11-e5",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Stained Glass",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela guia"
          },
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit",
            "translationPt": "Terno / Roupa social"
          },
          {
            "text": "Stained Glass",
            "emoji": "🪟",
            "label": "Stained Glass",
            "translationPt": "Vitral colorido da igreja"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          }
        ],
        "options": [
          "Star",
          "Suit",
          "Stained Glass",
          "Violin"
        ],
        "correctAnswer": "Stained Glass",
        "explanation": "Exemplo prático: \"Sunlight shines through the colorful stained glass window.\"",
        "phoneticHint": "/steɪnd ɡlæs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e6",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Church Pew",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Church Pew",
            "emoji": "🪑",
            "label": "Church Pew",
            "translationPt": "Banco de madeira da igreja"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta musical"
          },
          {
            "text": "Church",
            "emoji": "⛪",
            "label": "Church",
            "translationPt": "Igreja / Templo"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela acesa"
          }
        ],
        "options": [
          "Church Pew",
          "Flute",
          "Church",
          "Candle"
        ],
        "correctAnswer": "Church Pew",
        "explanation": "Exemplo prático: \"The congregation sits on the long wooden church pews.\"",
        "phoneticHint": "/tʃɜːrtʃ pjuː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e7",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Altar",
        "visualEmoji": "🕯️",
        "visualOptions": [
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris no céu"
          },
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa dourada"
          },
          {
            "text": "Altar",
            "emoji": "🕯️",
            "label": "Altar",
            "translationPt": "Altar da igreja"
          },
          {
            "text": "Church Bell",
            "emoji": "🔔",
            "label": "Church Bell",
            "translationPt": "Sino da igreja"
          }
        ],
        "options": [
          "Rainbow",
          "Crown",
          "Altar",
          "Church Bell"
        ],
        "correctAnswer": "Altar",
        "explanation": "Exemplo prático: \"White flowers and candles decorate the church altar.\"",
        "phoneticHint": "/ˈɔːl.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e8",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pulpit",
        "visualEmoji": "📖",
        "visualOptions": [
          {
            "text": "Chandelier",
            "emoji": "💡",
            "label": "Chandelier",
            "translationPt": "Lustre clássico do templo"
          },
          {
            "text": "Pulpit",
            "emoji": "📖",
            "label": "Pulpit",
            "translationPt": "Púlpito / Tribuna de leitura"
          },
          {
            "text": "Cross",
            "emoji": "✝️",
            "label": "Cross",
            "translationPt": "Cruz"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          }
        ],
        "options": [
          "Chandelier",
          "Pulpit",
          "Cross",
          "Piano"
        ],
        "correctAnswer": "Pulpit",
        "explanation": "Exemplo prático: \"The speaker reads from the Bible at the wooden pulpit.\"",
        "phoneticHint": "/ˈpʊl.pɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p11-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p11-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p11-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p11-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p11-e10",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bible",
        "visualEmoji": "📖",
        "visualOptions": [
          {
            "text": "Wine Glass",
            "emoji": "🍷",
            "label": "Wine Glass",
            "translationPt": "Cálice / Taça"
          },
          {
            "text": "Stained Glass",
            "emoji": "🪟",
            "label": "Stained Glass",
            "translationPt": "Vitral colorido da igreja"
          },
          {
            "text": "Wheelchair",
            "emoji": "♿",
            "label": "Wheelchair",
            "translationPt": "Cadeira de rodas (Acessibilidade)"
          },
          {
            "text": "Bible",
            "emoji": "📖",
            "label": "Bible",
            "translationPt": "Bíblia Sagrada"
          }
        ],
        "options": [
          "Wine Glass",
          "Stained Glass",
          "Wheelchair",
          "Bible"
        ],
        "correctAnswer": "Bible",
        "explanation": "Exemplo prático: \"Read a chapter from the Holy Bible.\"",
        "phoneticHint": "/ˈbaɪ.bəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e11",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Candle",
        "visualEmoji": "🕯️",
        "visualOptions": [
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela acesa"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua no céu noturno"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba branca da paz"
          },
          {
            "text": "Church Pew",
            "emoji": "🪑",
            "label": "Church Pew",
            "translationPt": "Banco de madeira da igreja"
          }
        ],
        "options": [
          "Candle",
          "Moon",
          "Dove",
          "Church Pew"
        ],
        "correctAnswer": "Candle",
        "explanation": "Exemplo prático: \"A white wax candle burns softly on the altar.\"",
        "phoneticHint": "/ˈkæn.dəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e12",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Microphone",
        "visualEmoji": "🎤",
        "visualOptions": [
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela guia"
          },
          {
            "text": "Altar",
            "emoji": "🕯️",
            "label": "Altar",
            "translationPt": "Altar da igreja"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone do altar / coral"
          }
        ],
        "options": [
          "Star",
          "Altar",
          "Violin",
          "Microphone"
        ],
        "correctAnswer": "Microphone",
        "explanation": "Exemplo prático: \"Speak clearly into the stand microphone.\"",
        "phoneticHint": "/ˈmaɪ.krə.foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e13",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Guitar",
        "visualEmoji": "🎸",
        "visualOptions": [
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta musical"
          },
          {
            "text": "Church",
            "emoji": "⛪",
            "label": "Church",
            "translationPt": "Igreja / Templo"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão acústico"
          },
          {
            "text": "Pulpit",
            "emoji": "📖",
            "label": "Pulpit",
            "translationPt": "Púlpito / Tribuna de leitura"
          }
        ],
        "options": [
          "Flute",
          "Church",
          "Guitar",
          "Pulpit"
        ],
        "correctAnswer": "Guitar",
        "explanation": "Exemplo prático: \"He plays the acoustic guitar in the church choir.\"",
        "phoneticHint": "/ɡɪˈtɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p11-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p11-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p11-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p11-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p11-e15",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Piano",
        "visualEmoji": "🎹",
        "visualOptions": [
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          },
          {
            "text": "Bible",
            "emoji": "📖",
            "label": "Bible",
            "translationPt": "Bíblia Sagrada"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris no céu"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Aliança / Anel de ouro"
          }
        ],
        "options": [
          "Piano",
          "Bible",
          "Rainbow",
          "Ring"
        ],
        "correctAnswer": "Piano",
        "explanation": "Exemplo prático: \"She plays beautiful melodies on the piano.\"",
        "phoneticHint": "/piˈæn.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e16",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Drum",
        "visualEmoji": "🥁",
        "visualOptions": [
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração (amor e caridade)"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata social"
          }
        ],
        "options": [
          "Necklace",
          "Drum",
          "Heart",
          "Necktie"
        ],
        "correctAnswer": "Drum",
        "explanation": "Exemplo prático: \"The drummer keeps the rhythm on the drum.\"",
        "phoneticHint": "/drʌm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e17",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Violin",
        "visualEmoji": "🎻",
        "visualOptions": [
          {
            "text": "Altar",
            "emoji": "🕯️",
            "label": "Altar",
            "translationPt": "Altar da igreja"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Wine Glass",
            "emoji": "🍷",
            "label": "Wine Glass",
            "translationPt": "Cálice / Taça"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone do altar / coral"
          }
        ],
        "options": [
          "Altar",
          "Violin",
          "Wine Glass",
          "Microphone"
        ],
        "correctAnswer": "Violin",
        "explanation": "Exemplo prático: \"The wooden violin sounds warm and expressive.\"",
        "phoneticHint": "/ˌvaɪ.əˈlɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e18",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Flute",
        "visualEmoji": "🪈",
        "visualOptions": [
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão acústico"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua no céu noturno"
          },
          {
            "text": "Pulpit",
            "emoji": "📖",
            "label": "Pulpit",
            "translationPt": "Púlpito / Tribuna de leitura"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta musical"
          }
        ],
        "options": [
          "Guitar",
          "Moon",
          "Pulpit",
          "Flute"
        ],
        "correctAnswer": "Flute",
        "explanation": "Exemplo prático: \"A silver flute plays a gentle melody.\"",
        "phoneticHint": "/fluːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p11-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p11-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p11-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p11-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p11-e20",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dove",
        "visualEmoji": "🕊️",
        "visualOptions": [
          {
            "text": "Church Bell",
            "emoji": "🔔",
            "label": "Church Bell",
            "translationPt": "Sino da igreja"
          },
          {
            "text": "Cross",
            "emoji": "✝️",
            "label": "Cross",
            "translationPt": "Cruz"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba branca da paz"
          },
          {
            "text": "Church Pew",
            "emoji": "🪑",
            "label": "Church Pew",
            "translationPt": "Banco de madeira da igreja"
          }
        ],
        "options": [
          "Church Bell",
          "Cross",
          "Dove",
          "Church Pew"
        ],
        "correctAnswer": "Dove",
        "explanation": "Exemplo prático: \"The white dove is a universal symbol of peace.\"",
        "phoneticHint": "/dʌv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e21",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Heart",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração (amor e caridade)"
          },
          {
            "text": "Chandelier",
            "emoji": "💡",
            "label": "Chandelier",
            "translationPt": "Lustre clássico do templo"
          },
          {
            "text": "Stained Glass",
            "emoji": "🪟",
            "label": "Stained Glass",
            "translationPt": "Vitral colorido da igreja"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela acesa"
          }
        ],
        "options": [
          "Heart",
          "Chandelier",
          "Stained Glass",
          "Candle"
        ],
        "correctAnswer": "Heart",
        "explanation": "Exemplo prático: \"Share kindness from the bottom of your heart.\"",
        "phoneticHint": "/hɑːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e22",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Crown",
        "visualEmoji": "👑",
        "visualOptions": [
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit",
            "translationPt": "Terno / Roupa social"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          },
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa dourada"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone do altar / coral"
          }
        ],
        "options": [
          "Suit",
          "Piano",
          "Crown",
          "Microphone"
        ],
        "correctAnswer": "Crown",
        "explanation": "Exemplo prático: \"A golden crown with shining jewels.\"",
        "phoneticHint": "/kraʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e23",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Star",
        "visualEmoji": "⭐",
        "visualOptions": [
          {
            "text": "Handshake",
            "emoji": "🤝",
            "label": "Handshake",
            "translationPt": "Aperto de mão / Cumprimento fraterno"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela guia"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          },
          {
            "text": "Wheelchair",
            "emoji": "♿",
            "label": "Wheelchair",
            "translationPt": "Cadeira de rodas (Acessibilidade)"
          }
        ],
        "options": [
          "Handshake",
          "Star",
          "Drum",
          "Wheelchair"
        ],
        "correctAnswer": "Star",
        "explanation": "Exemplo prático: \"A bright star shines in the night sky.\"",
        "phoneticHint": "/stɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p11-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p11-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p11-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p11-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p11-e25",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Gift",
        "visualEmoji": "🎁",
        "visualOptions": [
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão acústico"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba branca da paz"
          },
          {
            "text": "Altar",
            "emoji": "🕯️",
            "label": "Altar",
            "translationPt": "Altar da igreja"
          },
          {
            "text": "Gift",
            "emoji": "🎁",
            "label": "Gift",
            "translationPt": "Presente / Doação comunitária"
          }
        ],
        "options": [
          "Guitar",
          "Dove",
          "Altar",
          "Gift"
        ],
        "correctAnswer": "Gift",
        "explanation": "Exemplo prático: \"They prepared gift boxes for charity.\"",
        "phoneticHint": "/ɡɪft/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e26",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Chandelier",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Chandelier",
            "emoji": "💡",
            "label": "Chandelier",
            "translationPt": "Lustre clássico do templo"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua no céu noturno"
          },
          {
            "text": "Stained Glass",
            "emoji": "🪟",
            "label": "Stained Glass",
            "translationPt": "Vitral colorido da igreja"
          },
          {
            "text": "Pulpit",
            "emoji": "📖",
            "label": "Pulpit",
            "translationPt": "Púlpito / Tribuna de leitura"
          }
        ],
        "options": [
          "Chandelier",
          "Moon",
          "Stained Glass",
          "Pulpit"
        ],
        "correctAnswer": "Chandelier",
        "explanation": "Exemplo prático: \"A crystal chandelier hangs from the church ceiling.\"",
        "phoneticHint": "/ˌʃæn.dəˈlɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e27",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Suit",
        "visualEmoji": "🤵",
        "visualOptions": [
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa dourada"
          },
          {
            "text": "Church",
            "emoji": "⛪",
            "label": "Church",
            "translationPt": "Igreja / Templo"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta musical"
          },
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit",
            "translationPt": "Terno / Roupa social"
          }
        ],
        "options": [
          "Crown",
          "Church",
          "Flute",
          "Suit"
        ],
        "correctAnswer": "Suit",
        "explanation": "Exemplo prático: \"He wore a navy blue suit to the ceremony.\"",
        "phoneticHint": "/suːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e28",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Necktie",
        "visualEmoji": "👔",
        "visualOptions": [
          {
            "text": "Cross",
            "emoji": "✝️",
            "label": "Cross",
            "translationPt": "Cruz"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris no céu"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata social"
          },
          {
            "text": "Church Bell",
            "emoji": "🔔",
            "label": "Church Bell",
            "translationPt": "Sino da igreja"
          }
        ],
        "options": [
          "Cross",
          "Rainbow",
          "Necktie",
          "Church Bell"
        ],
        "correctAnswer": "Necktie",
        "explanation": "Exemplo prático: \"Tie a silk necktie around your collar.\"",
        "phoneticHint": "/ˈnek.taɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p11-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p11-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p11-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p11-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p11-e30",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ring",
        "visualEmoji": "💍",
        "visualOptions": [
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Aliança / Anel de ouro"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração (amor e caridade)"
          },
          {
            "text": "Handshake",
            "emoji": "🤝",
            "label": "Handshake",
            "translationPt": "Aperto de mão / Cumprimento fraterno"
          },
          {
            "text": "Gift",
            "emoji": "🎁",
            "label": "Gift",
            "translationPt": "Presente / Doação comunitária"
          }
        ],
        "options": [
          "Ring",
          "Heart",
          "Handshake",
          "Gift"
        ],
        "correctAnswer": "Ring",
        "explanation": "Exemplo prático: \"The couple exchanged gold wedding rings at the altar.\"",
        "phoneticHint": "/rɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e31",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Necklace",
        "visualEmoji": "📿",
        "visualOptions": [
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela acesa"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          },
          {
            "text": "Church Pew",
            "emoji": "🪑",
            "label": "Church Pew",
            "translationPt": "Banco de madeira da igreja"
          },
          {
            "text": "Bible",
            "emoji": "📖",
            "label": "Bible",
            "translationPt": "Bíblia Sagrada"
          }
        ],
        "options": [
          "Candle",
          "Necklace",
          "Church Pew",
          "Bible"
        ],
        "correctAnswer": "Necklace",
        "explanation": "Exemplo prático: \"She wears a delicate gold necklace.\"",
        "phoneticHint": "/ˈnek.lɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e32",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wine Glass",
        "visualEmoji": "🍷",
        "visualOptions": [
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa dourada"
          },
          {
            "text": "Wine Glass",
            "emoji": "🍷",
            "label": "Wine Glass",
            "translationPt": "Cálice / Taça"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba branca da paz"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          }
        ],
        "options": [
          "Crown",
          "Wine Glass",
          "Dove",
          "Drum"
        ],
        "correctAnswer": "Wine Glass",
        "explanation": "Exemplo prático: \"A golden chalice and glass goblet on the table.\"",
        "phoneticHint": "/waɪn ɡlæs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e33",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Wheelchair",
        "visualEmoji": "♿",
        "visualOptions": [
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela guia"
          },
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit",
            "translationPt": "Terno / Roupa social"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Wheelchair",
            "emoji": "♿",
            "label": "Wheelchair",
            "translationPt": "Cadeira de rodas (Acessibilidade)"
          }
        ],
        "options": [
          "Star",
          "Suit",
          "Violin",
          "Wheelchair"
        ],
        "correctAnswer": "Wheelchair",
        "explanation": "Exemplo prático: \"The church entrance has a ramp for wheelchairs.\"",
        "phoneticHint": "/ˈwiːl.tʃer/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p11-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p11-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p11-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p11-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p11-e35",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Handshake",
        "visualEmoji": "🤝",
        "visualOptions": [
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone do altar / coral"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          },
          {
            "text": "Handshake",
            "emoji": "🤝",
            "label": "Handshake",
            "translationPt": "Aperto de mão / Cumprimento fraterno"
          },
          {
            "text": "Chandelier",
            "emoji": "💡",
            "label": "Chandelier",
            "translationPt": "Lustre clássico do templo"
          }
        ],
        "options": [
          "Microphone",
          "Piano",
          "Handshake",
          "Chandelier"
        ],
        "correctAnswer": "Handshake",
        "explanation": "Exemplo prático: \"Greet your neighbors with a warm handshake.\"",
        "phoneticHint": "/ˈhænd.ʃeɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e36",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rainbow",
        "visualEmoji": "🌈",
        "visualOptions": [
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris no céu"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Aliança / Anel de ouro"
          },
          {
            "text": "Gift",
            "emoji": "🎁",
            "label": "Gift",
            "translationPt": "Presente / Doação comunitária"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata social"
          }
        ],
        "options": [
          "Rainbow",
          "Ring",
          "Gift",
          "Necktie"
        ],
        "correctAnswer": "Rainbow",
        "explanation": "Exemplo prático: \"A colorful rainbow appeared after the rain.\"",
        "phoneticHint": "/ˈreɪn.boʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e37",
        "type": "image-choice",
        "conceptTitle": "Na Igreja, Música, Comunidade & Celebração • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Moon",
        "visualEmoji": "🌙",
        "visualOptions": [
          {
            "text": "Wine Glass",
            "emoji": "🍷",
            "label": "Wine Glass",
            "translationPt": "Cálice / Taça"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua no céu noturno"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração (amor e caridade)"
          }
        ],
        "options": [
          "Wine Glass",
          "Necklace",
          "Moon",
          "Heart"
        ],
        "correctAnswer": "Moon",
        "explanation": "Exemplo prático: \"The full moon shines after the evening service.\"",
        "phoneticHint": "/muːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p11-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p11-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p11-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p11-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p12",
    "worldId": 0,
    "phaseNumber": 12,
    "title": "Ambiente 12 • Restaurante, Hospital, Banco, Segurança & Viagem",
    "subtitle": "Ambiente 12/12 • Locais públicos, profissões, saúde, finanças, lazer e aeroporto",
    "pedagogicalObjective": "Concluir a jornada pelo cotidiano dominando restaurantes, hospitais, bancos, delegacia, bombeiros, hotel, cinema e aeroporto.",
    "type": "boss",
    "icon": "swords",
    "cefrLevel": "A1",
    "theorySummary": [
      "Chegamos ao 12º e último módulo da nossa Jornada de Imersão pelo Cotidiano!",
      "Aqui visitamos o Restaurante (Restaurant, Chef, Pizza, Hamburger, Ice Cream), o Hospital e Consultório (Hospital, Doctor, Nurse, Dentist), o Banco (Bank, Coin) e a Segurança Pública (Police Station, Police Officer, Fire Station, Firefighter).",
      "Por fim, passamos pelo Hotel, Cinema e Aeroporto (Hotel, Suitcase, Passport, Airport, Airplane, Pilot, Train, Subway, Ship). Faça 70 pontos ou mais nesta prova final para concluir o Módulo 0 com maestria!"
    ],
    "xpReward": 100,
    "gemsReward": 40,
    "exercises": [
      {
        "id": "w0-p12-e1",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 1 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Restaurant",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital / Pronto-socorro"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          }
        ],
        "options": [
          "Hospital",
          "Restaurant",
          "Helicopter",
          "Hotel"
        ],
        "correctAnswer": "Restaurant",
        "explanation": "Exemplo prático: \"We had dinner together at an Italian restaurant.\"",
        "phoneticHint": "/ˈres.tər.ɑːnt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e2",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 2 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Chef",
        "visualEmoji": "👨‍🍳",
        "visualOptions": [
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de conquista"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem ferroviário"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          }
        ],
        "options": [
          "Nurse",
          "Trophy",
          "Train",
          "Chef"
        ],
        "correctAnswer": "Chef",
        "explanation": "Exemplo prático: \"The restaurant chef prepares delicious meals.\"",
        "phoneticHint": "/ʃef/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e3",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 3 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          }
        ],
        "options": [
          "Dentist",
          "Airport",
          "Pizza",
          "Doctor"
        ],
        "correctAnswer": "Pizza",
        "explanation": "Exemplo prático: \"Order a hot cheese pizza at the restaurant.\"",
        "phoneticHint": "/ˈpiːt.sə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Personal Pronouns)",
        "conceptHeader": "Brincadeira de apontar com carinho: quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino, digo \"He\" (Ele); para uma menina, digo \"She\" (Ela); e para um objeto ou bichinho, digo \"It\"!",
        "teacherAudioPt": "Oi, meu amor! Vamos aprender os Pronomes Pessoais bem devagarinho? Quando falo de mim mesmo, eu digo I, que significa Eu. Quando falo com você, digo You, que é Você. Para um menino ou homem, usamos He, Ele. E para uma menina ou mulher, usamos She, Ela. Agora toque em cada par certinho!",
        "prompt": "🤝 Associe cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p12-p1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p12-p1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você / Vocês (com quem falo)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p12-p1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p12-p1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Pessoais substituem o nome de quem faz a ação: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-e5",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 4 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hamburger",
        "visualEmoji": "🍔",
        "visualOptions": [
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô subterrâneo"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem com rodinhas"
          }
        ],
        "options": [
          "Hamburger",
          "Subway",
          "Ship",
          "Suitcase"
        ],
        "correctAnswer": "Hamburger",
        "explanation": "Exemplo prático: \"A juicy hamburger with lettuce and cheese.\"",
        "phoneticHint": "/ˈhæmˌbɜːr.ɡər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e6",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 5 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "French Fries",
        "visualEmoji": "🍟",
        "visualOptions": [
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Quartel do Corpo de Bombeiros"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Coin",
            "emoji": "🪙",
            "label": "Coin",
            "translationPt": "Moeda"
          }
        ],
        "options": [
          "Fire Station",
          "Firefighter",
          "French Fries",
          "Coin"
        ],
        "correctAnswer": "French Fries",
        "explanation": "Exemplo prático: \"Crispy golden French fries with ketchup.\"",
        "phoneticHint": "/ˈfrentʃ fraɪz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e7",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 6 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ice Cream",
        "visualEmoji": "🍦",
        "visualOptions": [
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Pharmacy",
            "emoji": "💊",
            "label": "Pharmacy",
            "translationPt": "Farmácia / Drogaria"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          }
        ],
        "options": [
          "Chef",
          "Ice Cream",
          "Pharmacy",
          "Restaurant"
        ],
        "correctAnswer": "Ice Cream",
        "explanation": "Exemplo prático: \"Cold chocolate and vanilla ice cream.\"",
        "phoneticHint": "/ˈaɪs kriːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e8",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 7 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hospital",
        "visualEmoji": "🏥",
        "visualOptions": [
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Agência bancária"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital / Pronto-socorro"
          }
        ],
        "options": [
          "Pizza",
          "Bank",
          "Police Station",
          "Hospital"
        ],
        "correctAnswer": "Hospital",
        "explanation": "Exemplo prático: \"Doctors and nurses work at the city hospital.\"",
        "phoneticHint": "/ˈhɑː.spɪ.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-pron-2",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Forms of Address)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora), \"Miss\" (Senhorita / Professora) e \"Sir / Ma'am\"!",
        "teacherAudioPt": "Que bonito ser educado, meu bem! Os Pronomes de Tratamento são usados para demonstrar respeito e carinho pelas pessoas. Para um homem, dizemos Mister, Senhor. Para uma mulher casada, dizemos Missus, Senhora. Para uma jovem ou professora, dizemos Miss, Senhorita. E para dizer Senhor com respeito, usamos Sir. Vamos ligar os pares!",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu significado respeitoso:",
        "pairs": [
          {
            "id": "w0-p12-p2-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (antes do nome de um homem)",
            "tipPt": "Muito educado! \"Mr.\" significa \"Senhor\"!"
          },
          {
            "id": "w0-p12-p2-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (antes do nome de mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p12-p2-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (jovem ou professora)",
            "tipPt": "Isso! As crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p12-p2-t4",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto de respeito)",
            "tipPt": "Lindo! \"Yes, Sir!\" significa \"Sim, Senhor!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes de Tratamento mostram respeito e educação ao chamar alguém: Mr., Mrs., Miss e Sir.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-e10",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 8 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Doctor",
        "visualEmoji": "👨‍⚕️",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião comercial"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          }
        ],
        "options": [
          "Doctor",
          "Airplane",
          "Police Officer",
          "Hamburger"
        ],
        "correctAnswer": "Doctor",
        "explanation": "Exemplo prático: \"The doctor examines the patient with a stethoscope.\"",
        "phoneticHint": "/ˈdɑːk.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e11",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 9 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Nurse",
        "visualEmoji": "👩‍⚕️",
        "visualOptions": [
          {
            "text": "Movie Theater",
            "emoji": "🍿",
            "label": "Movie Theater",
            "translationPt": "Cinema"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Passport",
            "emoji": "🛂",
            "label": "Passport",
            "translationPt": "Passaporte de viagem"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          }
        ],
        "options": [
          "Movie Theater",
          "French Fries",
          "Passport",
          "Nurse"
        ],
        "correctAnswer": "Nurse",
        "explanation": "Exemplo prático: \"The hospital nurse takes care of everyone.\"",
        "phoneticHint": "/nɜːrs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e12",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 10 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dentist",
        "visualEmoji": "🦷",
        "visualOptions": [
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          },
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          }
        ],
        "options": [
          "Ice Cream",
          "Pilot",
          "Dentist",
          "Popcorn"
        ],
        "correctAnswer": "Dentist",
        "explanation": "Exemplo prático: \"Visit the dentist twice a year.\"",
        "phoneticHint": "/ˈden.tɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e13",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 11 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pharmacy",
        "visualEmoji": "💊",
        "visualOptions": [
          {
            "text": "Pharmacy",
            "emoji": "💊",
            "label": "Pharmacy",
            "translationPt": "Farmácia / Drogaria"
          },
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Quartel do Corpo de Bombeiros"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          }
        ],
        "options": [
          "Pharmacy",
          "Fire Station",
          "Chef",
          "Firefighter"
        ],
        "correctAnswer": "Pharmacy",
        "explanation": "Exemplo prático: \"Buy medicine and vitamins at the pharmacy.\"",
        "phoneticHint": "/ˈfɑːr.mə.si/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-pron-3",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Possessive Pronouns)",
        "conceptHeader": "Mostram de quem é cada coisinha! Se a chave é minha, digo \"My\" (Meu/Minha). Se é sua, digo \"Your\" (Seu/Sua). Se é de um menino, \"His\" (Dele); se é de uma menina, \"Her\" (Dela); e se é da nossa família, \"Our\" (Nosso/Nossa)!",
        "teacherAudioPt": "Vem cá, meu anjo, olha que fácil: quando você abraça algo que pertence a você, diga My, que é Meu ou Minha. Quando pertence a quem está com você, diga Your, Seu ou Sua. Quando é de um menino, diga His, Dele. E quando é de toda a nossa família junta, diga Our, Nosso ou Nossa! Encontre os pares!",
        "prompt": "🤝 Selecione o par de cada Pronome Possessivo (de quem pertence):",
        "pairs": [
          {
            "id": "w0-p12-p3-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My house = Minha casa)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p12-p3-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your key = Sua chave)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p12-p3-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His car\" é \"O carro dele\"!"
          },
          {
            "id": "w0-p12-p3-pos4",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (pertence a nós juntos)",
            "tipPt": "Que orgulho! \"Our family\" é \"Nossa família\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Possessivos indicam posse: My (Meu/Minha), Your (Seu/Sua), His (Dele), Our (Nosso/Nossa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-e15",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 12 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bank",
        "visualEmoji": "🏦",
        "visualOptions": [
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Agência bancária"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô subterrâneo"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem com rodinhas"
          }
        ],
        "options": [
          "Restaurant",
          "Bank",
          "Subway",
          "Suitcase"
        ],
        "correctAnswer": "Bank",
        "explanation": "Exemplo prático: \"Deposit money safely at the bank.\"",
        "phoneticHint": "/bæŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e16",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 13 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Coin",
        "visualEmoji": "🪙",
        "visualOptions": [
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Coin",
            "emoji": "🪙",
            "label": "Coin",
            "translationPt": "Moeda"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital / Pronto-socorro"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          }
        ],
        "options": [
          "Hamburger",
          "Coin",
          "Hospital",
          "Nurse"
        ],
        "correctAnswer": "Coin",
        "explanation": "Exemplo prático: \"Keep the shiny metal coins in your wallet.\"",
        "phoneticHint": "/kɔɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e17",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 14 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Police Station",
        "visualEmoji": "🚓",
        "visualOptions": [
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          },
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          }
        ],
        "options": [
          "Airport",
          "Doctor",
          "Dentist",
          "Police Station"
        ],
        "correctAnswer": "Police Station",
        "explanation": "Exemplo prático: \"Report the lost document at the police station.\"",
        "phoneticHint": "/pəˈliːs ˈsteɪ.ʃən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e18",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 15 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Police Officer",
        "visualEmoji": "👮",
        "visualOptions": [
          {
            "text": "Passport",
            "emoji": "🛂",
            "label": "Passport",
            "translationPt": "Passaporte de viagem"
          },
          {
            "text": "Pharmacy",
            "emoji": "💊",
            "label": "Pharmacy",
            "translationPt": "Farmácia / Drogaria"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          }
        ],
        "options": [
          "Passport",
          "Pharmacy",
          "Police Officer",
          "Pizza"
        ],
        "correctAnswer": "Police Officer",
        "explanation": "Exemplo prático: \"The police officer helps citizens in the city.\"",
        "phoneticHint": "/pəˈliːs ˌɔː.fɪ.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Demonstrative Pronouns)",
        "conceptHeader": "Está pertinho da mão ou lá longe? Para 1 coisa bem pertinho que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "Preste atenção nessa brincadeira gostosa, meu bem: se tem uma coisa só bem pertinho da sua mão, diga This, Este ou Esta. Se estiver lá longe, aponte com o dedinho e diga That, Aquele ou Aquela. Agora, se forem várias coisas pertinho da mão, diga These, Estes ou Estas. E se forem várias coisas lá longe, diga Those, Aqueles ou Aquelas!",
        "prompt": "🤝 Ligue cada Pronome Demonstrativo (pertinho da mão vs. lá longe):",
        "pairs": [
          {
            "id": "w0-p12-p4-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da sua mão!"
          },
          {
            "id": "w0-p12-p4-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p12-p4-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (várias coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p12-p4-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (várias coisas LONGE)",
            "tipPt": "Parabéns! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This/These usamos para o que está perto de nós; That/Those usamos para o que está longe.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-e20",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 16 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fire Station",
        "visualEmoji": "🚒",
        "visualOptions": [
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Quartel do Corpo de Bombeiros"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          }
        ],
        "options": [
          "Fire Station",
          "Ship",
          "French Fries",
          "Pilot"
        ],
        "correctAnswer": "Fire Station",
        "explanation": "Exemplo prático: \"Fire trucks are parked inside the fire station.\"",
        "phoneticHint": "/ˈfaɪ.ər ˈsteɪ.ʃən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e21",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 17 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Firefighter",
        "visualEmoji": "🧑‍🚒",
        "visualOptions": [
          {
            "text": "Coin",
            "emoji": "🪙",
            "label": "Coin",
            "translationPt": "Moeda"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Coin",
          "Popcorn",
          "Firefighter",
          "Ice Cream"
        ],
        "correctAnswer": "Firefighter",
        "explanation": "Exemplo prático: \"The brave firefighter wears a yellow helmet.\"",
        "phoneticHint": "/ˈfaɪ.ərˌfaɪ.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e22",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 18 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Hotel",
        "visualEmoji": "🏨",
        "visualOptions": [
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Agência bancária"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          },
          {
            "text": "Movie Theater",
            "emoji": "🍿",
            "label": "Movie Theater",
            "translationPt": "Cinema"
          }
        ],
        "options": [
          "Bank",
          "Hotel",
          "Police Station",
          "Movie Theater"
        ],
        "correctAnswer": "Hotel",
        "explanation": "Exemplo prático: \"We stayed at a comfortable hotel during vacation.\"",
        "phoneticHint": "/hoʊˈtel/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e23",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 19 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Suitcase",
        "visualEmoji": "🧳",
        "visualOptions": [
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem ferroviário"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de conquista"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem com rodinhas"
          }
        ],
        "options": [
          "Train",
          "Trophy",
          "Helicopter",
          "Suitcase"
        ],
        "correctAnswer": "Suitcase",
        "explanation": "Exemplo prático: \"Pack your clothes inside the rolling suitcase.\"",
        "phoneticHint": "/ˈsuːt.keɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-pron-5",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Reflexive Pronouns)",
        "conceptHeader": "Funcionam como um espelho! Quando você faz algo sozinho ou olha para si mesmo no espelho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "Olha que lindo, meu amor: os Pronomes Reflexivos são como um espelho, quando a pessoa faz a ação para ela mesma! Myself significa eu mesmo ou a mim mesmo. Yourself significa você mesmo. Himself é ele mesmo, e Herself é ela mesma. Vamos conectar cada par com calma!",
        "prompt": "🤝 Associe cada Pronome Reflexivo (como em um espelho) ao seu par:",
        "pairs": [
          {
            "id": "w0-p12-p5-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"By myself\" = \"Por mim mesmo / Sozinho\"!"
          },
          {
            "id": "w0-p12-p5-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" refere-se a \"Você mesmo\"!"
          },
          {
            "id": "w0-p12-p5-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" significa \"Ele mesmo\"!"
          },
          {
            "id": "w0-p12-p5-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" significa \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Reflexivos indicam que a pessoa faz a ação para si mesma: Myself, Yourself, Himself, Herself.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-e25",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 20 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Passport",
        "visualEmoji": "🛂",
        "visualOptions": [
          {
            "text": "Passport",
            "emoji": "🛂",
            "label": "Passport",
            "translationPt": "Passaporte de viagem"
          },
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          }
        ],
        "options": [
          "Passport",
          "Doctor",
          "Police Officer",
          "Dentist"
        ],
        "correctAnswer": "Passport",
        "explanation": "Exemplo prático: \"Show your passport at the international airport.\"",
        "phoneticHint": "/ˈpæs.pɔːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e26",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 21 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Airport",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô subterrâneo"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto"
          }
        ],
        "options": [
          "Subway",
          "Pizza",
          "Ship",
          "Airport"
        ],
        "correctAnswer": "Airport",
        "explanation": "Exemplo prático: \"Arrive at the airport two hours before your flight.\"",
        "phoneticHint": "/ˈer.pɔːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e27",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 22 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Airplane",
        "visualEmoji": "✈️",
        "visualOptions": [
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião comercial"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Hotel",
          "French Fries",
          "Airplane",
          "Ice Cream"
        ],
        "correctAnswer": "Airplane",
        "explanation": "Exemplo prático: \"The passenger airplane takes off from the runway.\"",
        "phoneticHint": "/ˈer.pleɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e28",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 23 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pilot",
        "visualEmoji": "👨‍✈️",
        "visualOptions": [
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante"
          },
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Quartel do Corpo de Bombeiros"
          }
        ],
        "options": [
          "Pilot",
          "Firefighter",
          "Restaurant",
          "Fire Station"
        ],
        "correctAnswer": "Pilot",
        "explanation": "Exemplo prático: \"The airline pilot greets the passengers.\"",
        "phoneticHint": "/ˈpaɪ.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-pron-6",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Interrogative Pronouns)",
        "conceptHeader": "São as palavrinhas de detetive para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (tempo/hora)!",
        "teacherAudioPt": "Criança inteligente adora perguntar para aprender, não é, meu bem? Para perguntar sobre uma pessoa, dizemos Who, Quem. Para perguntar sobre uma coisa, dizemos What, O quê. Para saber o lugar, dizemos Where, Onde. E para saber a hora ou o dia, dizemos When, Quando! Ligue os pares!",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à pergunta correta:",
        "pairs": [
          {
            "id": "w0-p12-p6-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is there?\" = \"Quem está aí?\""
          },
          {
            "id": "w0-p12-p6-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is this?\" = \"O que é isto?\""
          },
          {
            "id": "w0-p12-p6-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the key?\" = \"Onde está a chave?\""
          },
          {
            "id": "w0-p12-p6-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo/dia)",
            "tipPt": "Maravilha! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Usamos os Pronomes Interrogativos para perguntar: Who (Quem), What (O quê), Where (Onde) e When (Quando).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-e30",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 24 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Helicopter",
        "visualEmoji": "🚁",
        "visualOptions": [
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Agência bancária"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Hospital / Pronto-socorro"
          }
        ],
        "options": [
          "Hamburger",
          "Helicopter",
          "Bank",
          "Hospital"
        ],
        "correctAnswer": "Helicopter",
        "explanation": "Exemplo prático: \"A helicopter flies above the city buildings.\"",
        "phoneticHint": "/ˈhel.ɪˌkɑːp.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e31",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 25 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Train",
        "visualEmoji": "🚆",
        "visualOptions": [
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de conquista"
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem ferroviário"
          },
          {
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          }
        ],
        "options": [
          "Trophy",
          "Train",
          "Chef",
          "Nurse"
        ],
        "correctAnswer": "Train",
        "explanation": "Exemplo prático: \"The express train travels between cities.\"",
        "phoneticHint": "/treɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e32",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 26 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Subway",
        "visualEmoji": "🚇",
        "visualOptions": [
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto"
          },
          {
            "text": "Hotel",
            "emoji": "🏨",
            "label": "Hotel",
            "translationPt": "Hotel"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião comercial"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô subterrâneo"
          }
        ],
        "options": [
          "Airport",
          "Hotel",
          "Airplane",
          "Subway"
        ],
        "correctAnswer": "Subway",
        "explanation": "Exemplo prático: \"Take the underground subway to avoid traffic.\"",
        "phoneticHint": "/ˈsʌb.weɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e33",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 27 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ship",
        "visualEmoji": "🚢",
        "visualOptions": [
          {
            "text": "Pharmacy",
            "emoji": "💊",
            "label": "Pharmacy",
            "translationPt": "Farmácia / Drogaria"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem com rodinhas"
          }
        ],
        "options": [
          "Pharmacy",
          "Police Station",
          "Ship",
          "Suitcase"
        ],
        "correctAnswer": "Ship",
        "explanation": "Exemplo prático: \"The large ship sails across the blue ocean.\"",
        "phoneticHint": "/ʃɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-pron-7",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Indefinite Pronouns)",
        "conceptHeader": "Usamos quando não dizemos o nome exato de quem ou do que é: \"Someone\" é Alguém (1 pessoa), \"Something\" é Alguma coisa, \"Everyone\" é Todo mundo, e \"Nothing\" é Nadinha (Nada)!",
        "teacherAudioPt": "Agora vem cá ouvir com carinho os Pronomes Indefinidos: sabe quando a campainha toca e dizemos que tem Alguém na porta? Em inglês dizemos Someone! Quando tem alguma coisa na mesa, dizemos Something. Quando falamos de todo mundo junto, é Everyone. E quando não tem nadinha, é Nothing! Conecte os pares!",
        "prompt": "🤝 Associe cada Pronome Indefinido ao seu significado:",
        "pairs": [
          {
            "id": "w0-p12-p7-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone\" significa \"Alguém\"!"
          },
          {
            "id": "w0-p12-p7-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" é \"Alguma coisa\"!"
          },
          {
            "id": "w0-p12-p7-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" significa \"Todo mundo\"!"
          },
          {
            "id": "w0-p12-p7-ind4",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Lindo! \"Nothing\" significa \"Nada\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Indefinidos referem-se a pessoas ou coisas de modo geral: Someone, Something, Everyone, Nothing.",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-e35",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 28 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Movie Theater",
        "visualEmoji": "🍿",
        "visualOptions": [
          {
            "text": "Movie Theater",
            "emoji": "🍿",
            "label": "Movie Theater",
            "translationPt": "Cinema"
          },
          {
            "text": "Passport",
            "emoji": "🛂",
            "label": "Passport",
            "translationPt": "Passaporte de viagem"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Coin",
            "emoji": "🪙",
            "label": "Coin",
            "translationPt": "Moeda"
          }
        ],
        "options": [
          "Movie Theater",
          "Passport",
          "Police Officer",
          "Coin"
        ],
        "correctAnswer": "Movie Theater",
        "explanation": "Exemplo prático: \"Watch a new film at the movie theater.\"",
        "phoneticHint": "/ˈmuː.vi ˈθiː.ə.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-e36",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 29 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Popcorn",
        "visualEmoji": "🍿",
        "visualOptions": [
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem ferroviário"
          },
          {
            "text": "Helicopter",
            "emoji": "🚁",
            "label": "Helicopter",
            "translationPt": "Helicóptero"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          },
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          }
        ],
        "options": [
          "Train",
          "Helicopter",
          "Popcorn",
          "Pilot"
        ],
        "correctAnswer": "Popcorn",
        "explanation": "Exemplo prático: \"Eat warm buttered popcorn at the cinema.\"",
        "phoneticHint": "/ˈpɑːp.kɔːrn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p12-e37",
        "type": "image-choice",
        "conceptTitle": "Restaurante, Hospital, Banco, Segurança & Viagem • Item 30 de 30",
        "conceptHeader": "Olhe com carinho ao seu redor neste ambiente! Primeiro escute a pronúncia em inglês americano e depois toque na figura que representa o que você ouviu.",
        "teacherAudioPt": "Escute com calma a palavrinha em inglês, meu bem! Imagine esse item aí pertinho de você neste ambiente e escolha a figura certinha. Se precisar, toque na tartaruguinha para ouvir bem devagarinho!",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Trophy",
        "visualEmoji": "🏆",
        "visualOptions": [
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de conquista"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião comercial"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          }
        ],
        "options": [
          "Nurse",
          "Trophy",
          "Airplane",
          "Hamburger"
        ],
        "correctAnswer": "Trophy",
        "explanation": "Exemplo prático: \"Congratulations! You earned the golden trophy!\"",
        "phoneticHint": "/ˈtroʊ.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p12-pron-8",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (Relative Pronouns)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar pessoas; \"Which\" significa \"que/o qual\" para ligar coisas ou animais; \"That\" é a pontezinha curinga para tudo; e \"Whose\" indica \"de quem / cujo\"!",
        "teacherAudioPt": "Chegamos à oitava família, meu amor: os Pronomes Relativos! Imagine que eles são pontezinhas de carinho que ligam duas partes da frase. Quando falamos de uma pessoa, usamos a ponte Who, que significa que ou quem. Para objetos ou animais, usamos a ponte Which. A palavrinha That serve tanto para pessoas quanto para objetos! E Whose mostra de quem é. Vamos ligar cada par!",
        "prompt": "🤝 Ligue cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p12-p8-rel1",
            "en": "Who",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p12-p8-rel2",
            "en": "Which",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p12-p8-rel3",
            "en": "That",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p12-p8-rel4",
            "en": "Whose",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Parabéns, meu bem! Você aprendeu todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Os Pronomes Relativos conectam ideias na frase: Who (pessoas), Which (coisas/animais), That (curinga) e Whose (posse).",
        "skillCategory": "grammar"
      }
    ]
  }
];
