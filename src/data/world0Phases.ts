import { Phase } from '../types';

export const WORLD_0_PHASES: Phase[] = [
  {
    "id": "w0-p1",
    "worldId": 0,
    "phaseNumber": 1,
    "title": "Vocabulário 1 • Entrada da Casa, Calçada & Porta",
    "subtitle": "Ambiente 1/12 • Da calçada completa até abrir a porta de entrada",
    "pedagogicalObjective": "Conhecer tudo o que vemos ao chegar em casa: calçada completa, portão, muro, telhado na casa, parede, tinta, porta de madeira, fechadura de metal, maçaneta e chave.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Exploramos nossa residência começando pela frente da casa: Calçada (Sidewalk), Portão (Gate), Muro (Brick Wall), Cerca (Fence), Jardim (Front Yard) e o Telhado na casa (Roof).",
      "Na porta de entrada vemos a Porta (Door), a Madeira (Wood), a Maçaneta (Doorknob), a Fechadura (Door Lock), o Metal (Metal), a Chave (Key) e a Tinta na Parede (Wall Paint).",
      "🎓 Atingindo 70 pontos ou mais você aprova neste ambiente! E a cada 3 módulos de vocabulário, você terá 1 módulo exclusivo de Pronomes!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p1-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sidewalk",
        "visualEmoji": "🚶",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa / Residência completa"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado na casa (foco no telhado)"
          },
          {
            "text": "Hinge",
            "emoji": "🔩",
            "label": "Hinge",
            "translationPt": "Dobradiça presa na porta"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada (completa na rua)"
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
            "translationPt": "Telhas no telhado"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão da frente da casa"
          },
          {
            "text": "Keychain",
            "emoji": "🔑",
            "label": "Keychain",
            "translationPt": "Chaveiro com chaves"
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
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Brick Wall",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Brick Wall",
            "emoji": "🧱",
            "label": "Brick Wall",
            "translationPt": "Muro de tijolos"
          },
          {
            "text": "Doormat",
            "emoji": "🟫",
            "label": "Doormat",
            "translationPt": "Capacho / Tapete na porta"
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem da casa"
          },
          {
            "text": "Glass",
            "emoji": "🪟",
            "label": "Glass",
            "translationPt": "Vidro transparente (na janela)"
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
        "id": "w0-p1-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fence",
        "visualEmoji": "🏡",
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
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca em frente à casa"
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
        "id": "w0-p1-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mailbox",
        "visualEmoji": "📫",
        "visualOptions": [
          {
            "text": "Porch Light",
            "emoji": "💡",
            "label": "Porch Light",
            "translationPt": "Luminária externa na parede"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio na entrada"
          },
          {
            "text": "Metal",
            "emoji": "🔩",
            "label": "Metal",
            "translationPt": "Metal / Aço (material)"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada (completa na rua)"
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
        "id": "w0-p1-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Doorbell",
        "visualEmoji": "🔔",
        "visualOptions": [
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado de metal"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão da frente da casa"
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
            "translationPt": "Campainha na parede"
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
        "id": "w0-p1-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Intercom",
        "visualEmoji": "📞",
        "visualOptions": [
          {
            "text": "Intercom",
            "emoji": "📞",
            "label": "Intercom",
            "translationPt": "Interfone residencial"
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta na porta"
          },
          {
            "text": "Brick Wall",
            "emoji": "🧱",
            "label": "Brick Wall",
            "translationPt": "Muro de tijolos"
          },
          {
            "text": "Door Lock",
            "emoji": "🔒",
            "label": "Door Lock",
            "translationPt": "Fechadura na porta"
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
        "id": "w0-p1-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Front Yard",
        "visualEmoji": "🏡",
        "visualOptions": [
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede da casa"
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
            "translationPt": "Tinta sendo aplicada na parede"
          },
          {
            "text": "Front Yard",
            "emoji": "🏡",
            "label": "Front Yard",
            "translationPt": "Jardim da frente da casa"
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
        "id": "w0-p1-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Plant Pot",
        "visualEmoji": "🪴",
        "visualOptions": [
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio na entrada"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela da casa"
          },
          {
            "text": "Plant Pot",
            "emoji": "🪴",
            "label": "Plant Pot",
            "translationPt": "Vaso de planta"
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca em frente à casa"
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
        "id": "w0-p1-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Doormat",
        "visualEmoji": "🟫",
        "visualOptions": [
          {
            "text": "Doormat",
            "emoji": "🟫",
            "label": "Doormat",
            "translationPt": "Capacho / Tapete na porta"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha na parede"
          },
          {
            "text": "Sidewalk",
            "emoji": "🚶",
            "label": "Sidewalk",
            "translationPt": "Calçada (completa na rua)"
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
        "id": "w0-p1-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Stairs",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Porch Light",
            "emoji": "💡",
            "label": "Porch Light",
            "translationPt": "Luminária externa na parede"
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
            "translationPt": "Interfone residencial"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado de metal"
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
        "id": "w0-p1-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Front Yard",
            "emoji": "🏡",
            "label": "Front Yard",
            "translationPt": "Jardim da frente da casa"
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
            "translationPt": "Telhado na casa (foco no telhado)"
          },
          {
            "text": "Brick Wall",
            "emoji": "🧱",
            "label": "Brick Wall",
            "translationPt": "Muro de tijolos"
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
        "id": "w0-p1-e13",
        "type": "image-choice",
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
            "translationPt": "Dobradiça presa na porta"
          },
          {
            "text": "Keychain",
            "emoji": "🔑",
            "label": "Keychain",
            "translationPt": "Chaveiro com chaves"
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
        "id": "w0-p1-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Doorknob",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede da casa"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha na parede"
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta na porta"
          },
          {
            "text": "Doormat",
            "emoji": "🟫",
            "label": "Doormat",
            "translationPt": "Capacho / Tapete na porta"
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
        "id": "w0-p1-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Door Lock",
        "visualEmoji": "🔒",
        "visualOptions": [
          {
            "text": "Door Lock",
            "emoji": "🔒",
            "label": "Door Lock",
            "translationPt": "Fechadura na porta"
          },
          {
            "text": "Mailbox",
            "emoji": "📫",
            "label": "Mailbox",
            "translationPt": "Caixa de correio na entrada"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão da frente da casa"
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
        "id": "w0-p1-e16",
        "type": "image-choice",
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
            "translationPt": "Jardim da frente da casa"
          },
          {
            "text": "Metal",
            "emoji": "🔩",
            "label": "Metal",
            "translationPt": "Metal / Aço (material)"
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca em frente à casa"
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
        "id": "w0-p1-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Key",
        "visualEmoji": "🔑",
        "visualOptions": [
          {
            "text": "Intercom",
            "emoji": "📞",
            "label": "Intercom",
            "translationPt": "Interfone residencial"
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
            "translationPt": "Vidro transparente (na janela)"
          },
          {
            "text": "Roof Tile",
            "emoji": "🧱",
            "label": "Roof Tile",
            "translationPt": "Telhas no telhado"
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
        "id": "w0-p1-e18",
        "type": "image-choice",
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
            "translationPt": "Garagem da casa"
          },
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta na porta"
          },
          {
            "text": "Keychain",
            "emoji": "🔑",
            "label": "Keychain",
            "translationPt": "Chaveiro com chaves"
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
        "id": "w0-p1-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lock",
        "visualEmoji": "🔒",
        "visualOptions": [
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado de metal"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa / Residência completa"
          },
          {
            "text": "Door Lock",
            "emoji": "🔒",
            "label": "Door Lock",
            "translationPt": "Fechadura na porta"
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
        "id": "w0-p1-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hinge",
        "visualEmoji": "🔩",
        "visualOptions": [
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela da casa"
          },
          {
            "text": "Metal",
            "emoji": "🔩",
            "label": "Metal",
            "translationPt": "Metal / Aço (material)"
          },
          {
            "text": "Gate",
            "emoji": "🚪",
            "label": "Gate",
            "translationPt": "Portão da frente da casa"
          },
          {
            "text": "Hinge",
            "emoji": "🔩",
            "label": "Hinge",
            "translationPt": "Dobradiça presa na porta"
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
        "id": "w0-p1-e21",
        "type": "image-choice",
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
            "translationPt": "Calçada (completa na rua)"
          },
          {
            "text": "Wall",
            "emoji": "🧱",
            "label": "Wall",
            "translationPt": "Parede da casa"
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
        "explanation": "Exemplo prático: \"The house wall is smooth and painted.\"",
        "phoneticHint": "/wɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p1-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wall Paint",
        "visualEmoji": "🎨",
        "visualOptions": [
          {
            "text": "Wall Paint",
            "emoji": "🎨",
            "label": "Wall Paint",
            "translationPt": "Tinta sendo aplicada na parede"
          },
          {
            "text": "Intercom",
            "emoji": "📞",
            "label": "Intercom",
            "translationPt": "Interfone residencial"
          },
          {
            "text": "Fence",
            "emoji": "🏡",
            "label": "Fence",
            "translationPt": "Cerca em frente à casa"
          },
          {
            "text": "Front Yard",
            "emoji": "🏡",
            "label": "Front Yard",
            "translationPt": "Jardim da frente da casa"
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
        "id": "w0-p1-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Paint Roller",
        "visualEmoji": "🖌️",
        "visualOptions": [
          {
            "text": "Roof Tile",
            "emoji": "🧱",
            "label": "Roof Tile",
            "translationPt": "Telhas no telhado"
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
            "translationPt": "Luminária externa na parede"
          },
          {
            "text": "Lock",
            "emoji": "🔒",
            "label": "Lock",
            "translationPt": "Cadeado de metal"
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
        "id": "w0-p1-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Window",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Hinge",
            "emoji": "🔩",
            "label": "Hinge",
            "translationPt": "Dobradiça presa na porta"
          },
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela da casa"
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
            "translationPt": "Chaveiro com chaves"
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
        "id": "w0-p1-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Glass",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa / Residência completa"
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
            "translationPt": "Parede da casa"
          },
          {
            "text": "Glass",
            "emoji": "🪟",
            "label": "Glass",
            "translationPt": "Vidro transparente (na janela)"
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
        "id": "w0-p1-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Roof",
        "visualEmoji": "🏠",
        "visualOptions": [
          {
            "text": "Doormat",
            "emoji": "🟫",
            "label": "Doormat",
            "translationPt": "Capacho / Tapete na porta"
          },
          {
            "text": "Doorbell",
            "emoji": "🔔",
            "label": "Doorbell",
            "translationPt": "Campainha na parede"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado na casa (foco no telhado)"
          },
          {
            "text": "Wall Paint",
            "emoji": "🎨",
            "label": "Wall Paint",
            "translationPt": "Tinta sendo aplicada na parede"
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
        "id": "w0-p1-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Roof Tile",
        "visualEmoji": "🧱",
        "visualOptions": [
          {
            "text": "Roof Tile",
            "emoji": "🧱",
            "label": "Roof Tile",
            "translationPt": "Telhas no telhado"
          },
          {
            "text": "Metal",
            "emoji": "🔩",
            "label": "Metal",
            "translationPt": "Metal / Aço (material)"
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
            "translationPt": "Caixa de correio na entrada"
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
        "id": "w0-p1-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Porch Light",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Doorknob",
            "emoji": "🚪",
            "label": "Doorknob",
            "translationPt": "Maçaneta na porta"
          },
          {
            "text": "Door Lock",
            "emoji": "🔒",
            "label": "Door Lock",
            "translationPt": "Fechadura na porta"
          },
          {
            "text": "Porch Light",
            "emoji": "💡",
            "label": "Porch Light",
            "translationPt": "Luminária externa na parede"
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
        "id": "w0-p1-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Garage",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Window",
            "emoji": "🪟",
            "label": "Window",
            "translationPt": "Janela da casa"
          },
          {
            "text": "Garage",
            "emoji": "🚗",
            "label": "Garage",
            "translationPt": "Garagem da casa"
          },
          {
            "text": "Glass",
            "emoji": "🪟",
            "label": "Glass",
            "translationPt": "Vidro transparente (na janela)"
          },
          {
            "text": "Brick Wall",
            "emoji": "🧱",
            "label": "Brick Wall",
            "translationPt": "Muro de tijolos"
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
        "id": "w0-p1-e30",
        "type": "image-choice",
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
            "translationPt": "Tinta sendo aplicada na parede"
          },
          {
            "text": "Roof",
            "emoji": "🏠",
            "label": "Roof",
            "translationPt": "Telhado na casa (foco no telhado)"
          },
          {
            "text": "House",
            "emoji": "🏠",
            "label": "House",
            "translationPt": "Casa / Residência completa"
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
      }
    ]
  },
  {
    "id": "w0-p2",
    "worldId": 0,
    "phaseNumber": 2,
    "title": "Vocabulário 2 • Sala de Estar, TV, Internet & Iluminação",
    "subtitle": "Ambiente 2/12 • Sofá, almofadas, rack, modem, TV, videogame, tomada, interruptor e piso",
    "pedagogicalObjective": "Identificar todos os móveis, aparelhos eletrônicos, tomadas, interruptores, iluminação e piso cerâmico da sala de estar.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Entrando na Sala de Estar vemos o Sofá (Sofa), as Almofadas (Cushion), o Rack de TV (TV Stand), a Televisão (Television) e o Modem de Internet (Wi-Fi Router).",
      "Veja também os Retratos de Fotografia (Picture Frame), o Videogame (Video Game Console), o Controle (Game Controller), as Caixas de Som (Speaker), a Mesa de Centro (Coffee Table), o Tapete (Rug), a Cortina (Curtain) e o Notebook (Computer).",
      "Nas paredes, teto e chão temos a Tomada (Power Outlet), o Interruptor (Light Switch), a Lâmpada no Teto (Ceiling Lamp), o Ventilador (Fan), o Ar-Condicionado (Air Conditioner) e o Piso Cerâmico (Ceramic Tile)."
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p2-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sofa",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete na sala"
          },
          {
            "text": "Bookshelf",
            "emoji": "📚",
            "label": "Bookshelf",
            "translationPt": "Estante cheia de livros"
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
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cushion",
        "visualEmoji": "🛋️",
        "visualOptions": [
          {
            "text": "Cushion",
            "emoji": "🛋️",
            "label": "Cushion",
            "translationPt": "Almofadas no sofá"
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
            "translationPt": "Lâmpada"
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
            "translationPt": "Ar-condicionado na parede"
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
            "translationPt": "Controle de videogame"
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
        "id": "w0-p2-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "TV Stand",
        "visualEmoji": "📺",
        "visualOptions": [
          {
            "text": "Vase",
            "emoji": "🏺",
            "label": "Vase",
            "translationPt": "Vaso com flores na mesa"
          },
          {
            "text": "TV Stand",
            "emoji": "📺",
            "label": "TV Stand",
            "translationPt": "Rack de TV / Painel na sala"
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
        "id": "w0-p2-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Television",
        "visualEmoji": "📺",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina na janela da sala"
          },
          {
            "text": "Coffee Table",
            "emoji": "🪑",
            "label": "Coffee Table",
            "translationPt": "Mesa de centro na sala"
          },
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador de mesa/coluna"
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
        "id": "w0-p2-e6",
        "type": "image-choice",
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
            "translationPt": "Almofadas no sofá"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária de mesa"
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
        "id": "w0-p2-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wi-Fi Router",
        "visualEmoji": "🛜",
        "visualOptions": [
          {
            "text": "Ceiling Fan",
            "emoji": "🌀",
            "label": "Ceiling Fan",
            "translationPt": "Ventilador de teto na sala"
          },
          {
            "text": "Ceramic Tile",
            "emoji": "⬜",
            "label": "Ceramic Tile",
            "translationPt": "Piso cerâmico / Porcelanato no chão"
          },
          {
            "text": "Ceiling Lamp",
            "emoji": "💡",
            "label": "Ceiling Lamp",
            "translationPt": "Luminária / Lâmpada acesa no teto"
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
        "id": "w0-p2-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Picture Frame",
        "visualEmoji": "🖼️",
        "visualOptions": [
          {
            "text": "Window Blind",
            "emoji": "🪟",
            "label": "Window Blind",
            "translationPt": "Persiana na janela"
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
            "translationPt": "Porta-retrato com fotografia"
          },
          {
            "text": "TV Stand",
            "emoji": "📺",
            "label": "TV Stand",
            "translationPt": "Rack de TV / Painel na sala"
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
        "id": "w0-p2-e9",
        "type": "image-choice",
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
        "id": "w0-p2-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Game Controller",
        "visualEmoji": "🎮",
        "visualOptions": [
          {
            "text": "Power Plug",
            "emoji": "🔌",
            "label": "Power Plug",
            "translationPt": "Plugue sendo conectado na tomada"
          },
          {
            "text": "Game Controller",
            "emoji": "🎮",
            "label": "Game Controller",
            "translationPt": "Controle de videogame"
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
            "translationPt": "Vaso com flores na mesa"
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
        "id": "w0-p2-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Speaker",
        "visualEmoji": "🔊",
        "visualOptions": [
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária de mesa"
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
            "translationPt": "Lâmpada"
          }
        ],
        "options": [
          "Lamp",
          "Speaker",
          "Light Switch",
          "Light Bulb"
        ],
        "correctAnswer": "Speaker",
        "explanation": "Exemplo prático: \"Play music through the speaker.\"",
        "phoneticHint": "/ˈspiː.kər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p2-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Coffee Table",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Porta-retrato com fotografia"
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
            "translationPt": "Estante cheia de livros"
          },
          {
            "text": "Coffee Table",
            "emoji": "🪑",
            "label": "Coffee Table",
            "translationPt": "Mesa de centro na sala"
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
        "id": "w0-p2-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Rug",
        "visualEmoji": "🟥",
        "visualOptions": [
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador de mesa/coluna"
          },
          {
            "text": "Ceiling Lamp",
            "emoji": "💡",
            "label": "Ceiling Lamp",
            "translationPt": "Luminária / Lâmpada acesa no teto"
          },
          {
            "text": "Rug",
            "emoji": "🟥",
            "label": "Rug",
            "translationPt": "Tapete na sala"
          },
          {
            "text": "Cushion",
            "emoji": "🛋️",
            "label": "Cushion",
            "translationPt": "Almofadas no sofá"
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
        "id": "w0-p2-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Curtain",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina na janela da sala"
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
            "translationPt": "Ar-condicionado na parede"
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
        "id": "w0-p2-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Window Blind",
        "visualEmoji": "🪟",
        "visualOptions": [
          {
            "text": "Game Controller",
            "emoji": "🎮",
            "label": "Game Controller",
            "translationPt": "Controle de videogame"
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
            "translationPt": "Persiana na janela"
          },
          {
            "text": "TV Stand",
            "emoji": "📺",
            "label": "TV Stand",
            "translationPt": "Rack de TV / Painel na sala"
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
        "id": "w0-p2-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Computer",
        "visualEmoji": "💻",
        "visualOptions": [
          {
            "text": "Ceramic Tile",
            "emoji": "⬜",
            "label": "Ceramic Tile",
            "translationPt": "Piso cerâmico / Porcelanato no chão"
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
            "translationPt": "Ventilador de teto na sala"
          },
          {
            "text": "Coffee Table",
            "emoji": "🪑",
            "label": "Coffee Table",
            "translationPt": "Mesa de centro na sala"
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
        "id": "w0-p2-e17",
        "type": "image-choice",
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
            "translationPt": "Tapete na sala"
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
        "id": "w0-p2-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Power Plug",
        "visualEmoji": "🔌",
        "visualOptions": [
          {
            "text": "Power Plug",
            "emoji": "🔌",
            "label": "Power Plug",
            "translationPt": "Plugue sendo conectado na tomada"
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
            "translationPt": "Cortina na janela da sala"
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
        "id": "w0-p2-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Light Switch",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Window Blind",
            "emoji": "🪟",
            "label": "Window Blind",
            "translationPt": "Persiana na janela"
          },
          {
            "text": "Picture Frame",
            "emoji": "🖼️",
            "label": "Picture Frame",
            "translationPt": "Porta-retrato com fotografia"
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
        "id": "w0-p2-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Light Bulb",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Game Controller",
            "emoji": "🎮",
            "label": "Game Controller",
            "translationPt": "Controle de videogame"
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
            "translationPt": "Lâmpada"
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
        "id": "w0-p2-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ceiling Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Ceiling Lamp",
            "emoji": "💡",
            "label": "Ceiling Lamp",
            "translationPt": "Luminária / Lâmpada acesa no teto"
          },
          {
            "text": "Air Conditioner",
            "emoji": "❄️",
            "label": "Air Conditioner",
            "translationPt": "Ar-condicionado na parede"
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
        "explanation": "Exemplo prático: \"A modern ceiling lamp illuminates the living room from above.\"",
        "phoneticHint": "/ˈsiː.lɪŋ læmp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p2-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Lamp",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Power Plug",
            "emoji": "🔌",
            "label": "Power Plug",
            "translationPt": "Plugue sendo conectado na tomada"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária de mesa"
          },
          {
            "text": "Cushion",
            "emoji": "🛋️",
            "label": "Cushion",
            "translationPt": "Almofadas no sofá"
          },
          {
            "text": "Coffee Table",
            "emoji": "🪑",
            "label": "Coffee Table",
            "translationPt": "Mesa de centro na sala"
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
        "id": "w0-p2-e23",
        "type": "image-choice",
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
            "translationPt": "Ventilador de mesa/coluna"
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
            "translationPt": "Tapete na sala"
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
        "id": "w0-p2-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ceiling Fan",
        "visualEmoji": "🌀",
        "visualOptions": [
          {
            "text": "Curtain",
            "emoji": "🪟",
            "label": "Curtain",
            "translationPt": "Cortina na janela da sala"
          },
          {
            "text": "Light Bulb",
            "emoji": "💡",
            "label": "Light Bulb",
            "translationPt": "Lâmpada"
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
            "translationPt": "Ventilador de teto na sala"
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
        "id": "w0-p2-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Air Conditioner",
        "visualEmoji": "❄️",
        "visualOptions": [
          {
            "text": "Window Blind",
            "emoji": "🪟",
            "label": "Window Blind",
            "translationPt": "Persiana na janela"
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
            "translationPt": "Ar-condicionado na parede"
          },
          {
            "text": "TV Stand",
            "emoji": "📺",
            "label": "TV Stand",
            "translationPt": "Rack de TV / Painel na sala"
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
        "id": "w0-p2-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Ceramic Tile",
        "visualEmoji": "⬜",
        "visualOptions": [
          {
            "text": "Ceramic Tile",
            "emoji": "⬜",
            "label": "Ceramic Tile",
            "translationPt": "Piso cerâmico / Porcelanato no chão"
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
            "translationPt": "Luminária / Lâmpada acesa no teto"
          },
          {
            "text": "Lamp",
            "emoji": "💡",
            "label": "Lamp",
            "translationPt": "Abajur / Luminária de mesa"
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
        "id": "w0-p2-e27",
        "type": "image-choice",
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
            "translationPt": "Estante cheia de livros"
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
        "id": "w0-p2-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Clock",
        "visualEmoji": "⏰",
        "visualOptions": [
          {
            "text": "Ceiling Fan",
            "emoji": "🌀",
            "label": "Ceiling Fan",
            "translationPt": "Ventilador de teto na sala"
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
            "translationPt": "Porta-retrato com fotografia"
          },
          {
            "text": "Fan",
            "emoji": "🌀",
            "label": "Fan",
            "translationPt": "Ventilador de mesa/coluna"
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
        "id": "w0-p2-e29",
        "type": "image-choice",
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
            "translationPt": "Plugue sendo conectado na tomada"
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
            "translationPt": "Vaso com flores na mesa"
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
        "id": "w0-p2-e30",
        "type": "image-choice",
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
            "translationPt": "Tapete na sala"
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
            "translationPt": "Piso cerâmico / Porcelanato no chão"
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
      }
    ]
  },
  {
    "id": "w0-p3",
    "worldId": 0,
    "phaseNumber": 3,
    "title": "Vocabulário 3 • Cozinha I: Armários, Pia, Ilha, Fogão & Eletros",
    "subtitle": "Ambiente 3/12 • Armário, gavetas, pia, torneira, pedra, ilha, coifa, pendentes e eletroportáteis",
    "pedagogicalObjective": "Dominar os móveis planejados, bancadas de pedra, ilha, pia, torneira, coifa, iluminação pendente e eletrodomésticos da cozinha.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Agora entramos na Cozinha! Observamos toda a estrutura: Armário (Kitchen Cabinet), Porta do Armário (Cabinet Door), Gavetas (Drawer), Geladeira (Fridge) e a Mesa com Cadeiras (Table & Chair).",
      "Veja a Pia (Kitchen Sink), a Torneira (Faucet), a Pedra do Armário / Bancada (Countertop), a Ilha (Kitchen Island), o Fogão (Stove), a Coifa (Range Hood), o Depurador de Ar (Exhaust Hood) e os Pendentes de Luz (Pendant Light).",
      "Logo após concluir este 3º módulo de vocabulário, você fará o seu 1º Módulo Exclusivo de Pronomes!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p3-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Kitchen Cabinet",
        "visualEmoji": "🗄️",
        "visualOptions": [
          {
            "text": "Kitchen Cabinet",
            "emoji": "🗄️",
            "label": "Kitchen Cabinet",
            "translationPt": "Armário de cozinha completo"
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
            "translationPt": "Depurador de ar sobre o fogão"
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
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cabinet Door",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa de jantar com cadeiras"
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
            "translationPt": "Porta do armário de cozinha"
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
            "translationPt": "Gaveta aberta do armário"
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
        "id": "w0-p3-e4",
        "type": "image-choice",
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
            "translationPt": "Batedeira planetária"
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
        "id": "w0-p3-e5",
        "type": "image-choice",
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
            "translationPt": "Torneira da pia com água"
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
        "id": "w0-p3-e6",
        "type": "image-choice",
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
            "translationPt": "Porta do armário de cozinha"
          },
          {
            "text": "Range Hood",
            "emoji": "💨",
            "label": "Range Hood",
            "translationPt": "Coifa instalada sobre o fogão"
          },
          {
            "text": "Table",
            "emoji": "🪑",
            "label": "Table",
            "translationPt": "Mesa de jantar com cadeiras"
          }
        ],
        "options": [
          "Sponge",
          "Cabinet Door",
          "Range Hood",
          "Table"
        ],
        "correctAnswer": "Table",
        "explanation": "Exemplo prático: \"The kitchen dining table has chairs around it.\"",
        "phoneticHint": "/ˈteɪ.bəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p3-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Chair",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Kitchen Island",
            "emoji": "🏝️",
            "label": "Kitchen Island",
            "translationPt": "Ilha da cozinha completa"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira"
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
            "translationPt": "Armário de cozinha completo"
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
        "id": "w0-p3-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kitchen Sink",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Kitchen Sink",
            "emoji": "🚰",
            "label": "Kitchen Sink",
            "translationPt": "Pia da cozinha completa"
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
        "id": "w0-p3-e9",
        "type": "image-choice",
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
            "translationPt": "Torneira da pia com água"
          },
          {
            "text": "Drawer",
            "emoji": "🗄️",
            "label": "Drawer",
            "translationPt": "Gaveta aberta do armário"
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
        "id": "w0-p3-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Countertop",
        "visualEmoji": "🪨",
        "visualOptions": [
          {
            "text": "Stand Mixer",
            "emoji": "🥣",
            "label": "Stand Mixer",
            "translationPt": "Batedeira planetária"
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
            "translationPt": "Luminárias pendentes sobre a ilha/mesa"
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
        "id": "w0-p3-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Kitchen Island",
        "visualEmoji": "🏝️",
        "visualOptions": [
          {
            "text": "Cabinet Door",
            "emoji": "🚪",
            "label": "Cabinet Door",
            "translationPt": "Porta do armário de cozinha"
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
            "translationPt": "Ilha da cozinha completa"
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
        "id": "w0-p3-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bar Stool",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Kitchen Sink",
            "emoji": "🚰",
            "label": "Kitchen Sink",
            "translationPt": "Pia da cozinha completa"
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
        "id": "w0-p3-e13",
        "type": "image-choice",
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
            "translationPt": "Armário de cozinha completo"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira"
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
        "id": "w0-p3-e14",
        "type": "image-choice",
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
            "translationPt": "Gaveta aberta do armário"
          },
          {
            "text": "Range Hood",
            "emoji": "💨",
            "label": "Range Hood",
            "translationPt": "Coifa instalada sobre o fogão"
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
        "id": "w0-p3-e15",
        "type": "image-choice",
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
            "translationPt": "Depurador de ar sobre o fogão"
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
            "translationPt": "Mesa de jantar com cadeiras"
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
        "id": "w0-p3-e16",
        "type": "image-choice",
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
            "translationPt": "Torneira da pia com água"
          },
          {
            "text": "Pendant Light",
            "emoji": "💡",
            "label": "Pendant Light",
            "translationPt": "Luminárias pendentes sobre a ilha/mesa"
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
        "id": "w0-p3-e17",
        "type": "image-choice",
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
        "id": "w0-p3-e18",
        "type": "image-choice",
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
            "translationPt": "Coifa instalada sobre o fogão"
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
        "id": "w0-p3-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Toaster",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Exhaust Hood",
            "emoji": "💨",
            "label": "Exhaust Hood",
            "translationPt": "Depurador de ar sobre o fogão"
          },
          {
            "text": "Kitchen Island",
            "emoji": "🏝️",
            "label": "Kitchen Island",
            "translationPt": "Ilha da cozinha completa"
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
            "translationPt": "Pia da cozinha completa"
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
        "id": "w0-p3-e20",
        "type": "image-choice",
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
            "translationPt": "Gaveta aberta do armário"
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
            "translationPt": "Luminárias pendentes sobre a ilha/mesa"
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
        "id": "w0-p3-e21",
        "type": "image-choice",
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
        "id": "w0-p3-e22",
        "type": "image-choice",
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
            "translationPt": "Batedeira planetária"
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
        "id": "w0-p3-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Air Fryer",
        "visualEmoji": "🍟",
        "visualOptions": [
          {
            "text": "Faucet",
            "emoji": "🚰",
            "label": "Faucet",
            "translationPt": "Torneira da pia com água"
          },
          {
            "text": "Range Hood",
            "emoji": "💨",
            "label": "Range Hood",
            "translationPt": "Coifa instalada sobre o fogão"
          },
          {
            "text": "Cabinet Door",
            "emoji": "🚪",
            "label": "Cabinet Door",
            "translationPt": "Porta do armário de cozinha"
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
        "id": "w0-p3-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Sandwich Maker",
        "visualEmoji": "🥪",
        "visualOptions": [
          {
            "text": "Kitchen Sink",
            "emoji": "🚰",
            "label": "Kitchen Sink",
            "translationPt": "Pia da cozinha completa"
          },
          {
            "text": "Kitchen Cabinet",
            "emoji": "🗄️",
            "label": "Kitchen Cabinet",
            "translationPt": "Armário de cozinha completo"
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
            "translationPt": "Ilha da cozinha completa"
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
        "id": "w0-p3-e25",
        "type": "image-choice",
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
            "translationPt": "Mesa de jantar com cadeiras"
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
        "id": "w0-p3-e26",
        "type": "image-choice",
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
            "translationPt": "Depurador de ar sobre o fogão"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira"
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
        "id": "w0-p3-e27",
        "type": "image-choice",
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
            "translationPt": "Batedeira planetária"
          },
          {
            "text": "Pendant Light",
            "emoji": "💡",
            "label": "Pendant Light",
            "translationPt": "Luminárias pendentes sobre a ilha/mesa"
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
        "id": "w0-p3-e28",
        "type": "image-choice",
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
        "id": "w0-p3-e29",
        "type": "image-choice",
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
        "id": "w0-p3-e30",
        "type": "image-choice",
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
            "translationPt": "Armário de cozinha completo"
          },
          {
            "text": "Kettle",
            "emoji": "🫖",
            "label": "Kettle",
            "translationPt": "Chaleira"
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
      }
    ]
  },
  {
    "id": "w0-p4",
    "worldId": 0,
    "phaseNumber": 4,
    "title": "Lição de Pronomes I • Pessoais & De Tratamento",
    "subtitle": "Módulo de Pronomes 1/4 (Após 3 de Vocabulário) • Pares Associativos + Voz da Professora",
    "pedagogicalObjective": "Dominar os Pronomes Pessoais (I, You, He, She, It, We, They, Me, Him, Her, Us, Them) e os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma'am, Dr., Prof.) conectando cada par.",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Chegou a hora da nossa 1ª Lição Exclusiva de Pronomes (inserida a cada 3 módulos de vocabulário)!",
      "1º Passo: Começamos pelos Pronomes Pessoais (I, You, He, She, It, We, They), que substituem o nome das pessoas e coisas.",
      "2º Passo: Em seguida praticamos os Pronomes de Tratamento (Mr., Mrs., Miss, Ms., Sir, Ma'am, Dr., Prof.). Ouça a voz humana e meiga da professora no cabeçalho e conecte cada par!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p4-pron-1",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Quem fala e com quem falamos)",
        "conceptHeader": "Quando aponto para mim mesmo, digo \"I\" (Eu). Quando aponto para você, digo \"You\" (Você). Para um menino ou homem, digo \"He\" (Ele); e para uma menina ou mulher, digo \"She\" (Ela)!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Conecte cada Pronome Pessoal em inglês ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p4-b1-p1",
            "en": "I",
            "emoji": "🙋",
            "phonetic": "/aɪ/",
            "pt": "Eu (falando de mim mesmo)",
            "tipPt": "Muito bem, meu bem! \"I\" significa \"Eu\"!"
          },
          {
            "id": "w0-p4-b1-p2",
            "en": "You",
            "emoji": "👉",
            "phonetic": "/juː/",
            "pt": "Você (com quem estou falando)",
            "tipPt": "Isso mesmo! \"You\" significa \"Você\"!"
          },
          {
            "id": "w0-p4-b1-p3",
            "en": "He",
            "emoji": "👦",
            "phonetic": "/hiː/",
            "pt": "Ele (para menino ou homem)",
            "tipPt": "Perfeito! \"He\" usamos para \"Ele\" (papai, irmão, amigo)."
          },
          {
            "id": "w0-p4-b1-p4",
            "en": "She",
            "emoji": "👧",
            "phonetic": "/ʃiː/",
            "pt": "Ela (para menina ou mulher)",
            "tipPt": "Lindo! \"She\" usamos para \"Ela\" (mamãe, irmã, professora)."
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Pronomes Pessoais do Singular: I (Eu), You (Você), He (Ele), She (Ela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-2",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais (Coisas, Bichinhos e Plural)",
        "conceptHeader": "Para 1 objeto da casa ou 1 bichinho, usamos \"It\" (Ele/Ela). Quando estamos juntos (eu + você), dizemos \"We\" (Nós). Para várias pessoas com quem falamos, \"You\" (Vocês); e para eles ou elas, \"They\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Ligue os Pronomes Pessoais de coisas/animais e do plural aos seus pares:",
        "pairs": [
          {
            "id": "w0-p4-b2-p5",
            "en": "It",
            "emoji": "🐶",
            "phonetic": "/ɪt/",
            "pt": "Ele / Ela (para 1 objeto, casa ou animal)",
            "tipPt": "Isso! A porta, o sofá ou o cachorrinho são \"It\"!"
          },
          {
            "id": "w0-p4-b2-p6",
            "en": "We",
            "emoji": "👨‍👩‍👧",
            "phonetic": "/wiː/",
            "pt": "Nós (eu e você juntos)",
            "tipPt": "Muito bem! \"We\" significa \"Nós\"!"
          },
          {
            "id": "w0-p4-b2-p7",
            "en": "You (plural)",
            "emoji": "👫",
            "phonetic": "/juː/",
            "pt": "Vocês (várias pessoas com quem falo)",
            "tipPt": "Ótimo! \"You\" serve para \"Você\" e também para \"Vocês\"!"
          },
          {
            "id": "w0-p4-b2-p8",
            "en": "They",
            "emoji": "👥",
            "phonetic": "/ðeɪ/",
            "pt": "Eles / Elas (pessoas, animais ou objetos)",
            "tipPt": "Perfeito! \"They\" é o plural para tudo!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "It (para 1 objeto/animal), We (Nós), You (Vocês), They (Eles/Elas).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-3",
        "type": "pair-match",
        "conceptTitle": "1º • Pronomes Pessoais na Prática (Frases Curtas)",
        "conceptHeader": "Vamos ver como os Pronomes Pessoais ficam lindos junto das palavras que aprendemos na casa? Toque no inglês para ouvir e conecte ao significado!",
        "teacherAudioPt": "/audio/teacher/pronoun_1.wav",
        "prompt": "🤝 Associe cada frase curta com Pronome Pessoal ao seu par:",
        "pairs": [
          {
            "id": "w0-p4-b3-p9",
            "en": "I am at home",
            "emoji": "🏠",
            "phonetic": "/aɪ æm æt hoʊm/",
            "pt": "Eu estou em casa",
            "tipPt": "Isso! \"I\" = \"Eu\"!"
          },
          {
            "id": "w0-p4-b3-p10",
            "en": "He is at the door",
            "emoji": "🚪",
            "phonetic": "/hiː ɪz æt ðə dɔːr/",
            "pt": "Ele está na porta",
            "tipPt": "Muito bem! \"He\" = \"Ele\"!"
          },
          {
            "id": "w0-p4-b3-p11",
            "en": "She is on the sofa",
            "emoji": "🛋️",
            "phonetic": "/ʃiː ɪz ɑːn ðə ˈsoʊ.fə/",
            "pt": "Ela está no sofá",
            "tipPt": "Perfeito! \"She\" = \"Ela\"!"
          },
          {
            "id": "w0-p4-b3-p12",
            "en": "It is a metal key",
            "emoji": "🔑",
            "phonetic": "/ɪt ɪz ə ˈmet.əl kiː/",
            "pt": "Ela (a chave) é uma chave de metal",
            "tipPt": "Lindo! Para objetos como a chave usamos \"It\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "I am at home (Eu estou em casa), He is at the door (Ele está na porta), She is in the living room (Ela está na sala), It is a wooden door (É uma porta de madeira).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-4",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Educação e Respeito - Parte 1)",
        "conceptHeader": "São as palavrinhas mágicas da boa educação! Quando falamos com respeito com um adulto, usamos \"Mr.\" (Senhor), \"Mrs.\" (Senhora casada), \"Miss\" (Senhorita / Professora) e \"Ms.\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_2.wav",
        "prompt": "🤝 Conecte cada Pronome de Tratamento ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p4-b4-t1",
            "en": "Mr.",
            "emoji": "👨",
            "phonetic": "/ˈmɪs.tər/",
            "pt": "Senhor (usado antes do nome do homem)",
            "tipPt": "Muito educado! \"Mr. Silva\" = \"Senhor Silva\"!"
          },
          {
            "id": "w0-p4-b4-t2",
            "en": "Mrs.",
            "emoji": "👩",
            "phonetic": "/ˈmɪs.ɪz/",
            "pt": "Senhora (usado para mulher casada)",
            "tipPt": "Perfeito! \"Mrs.\" significa \"Senhora\"!"
          },
          {
            "id": "w0-p4-b4-t3",
            "en": "Miss",
            "emoji": "👩‍🏫",
            "phonetic": "/mɪs/",
            "pt": "Senhorita (moça jovem ou professora)",
            "tipPt": "Isso! Na escola as crianças chamam a professora de \"Miss\"!"
          },
          {
            "id": "w0-p4-b4-t4",
            "en": "Ms.",
            "emoji": "👩‍💼",
            "phonetic": "/mɪz/",
            "pt": "Senhora / Senhorita (para qualquer mulher)",
            "tipPt": "Excelente! \"Ms.\" é respeitoso para qualquer mulher!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Pronomes de Tratamento antes do nome: Mr. (Senhor), Mrs. (Senhora), Miss (Senhorita), Ms. (Senhora/Senhorita).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p4-pron-5",
        "type": "pair-match",
        "conceptTitle": "2º • Pronomes de Tratamento (Educação no Dia a Dia - Parte 2)",
        "conceptHeader": "Quando falamos com respeito sem dizer o nome da pessoa, usamos \"Sir\" (Senhor) e \"Ma'am\" (Senhora). E para profissionais usamos \"Dr.\" (Doutor) e \"Prof.\" (Professor)!",
        "teacherAudioPt": "/audio/teacher/pronoun_2.wav",
        "prompt": "🤝 Ligue cada Pronome de Tratamento direto ao seu significado:",
        "pairs": [
          {
            "id": "w0-p4-b5-t5",
            "en": "Sir",
            "emoji": "🎩",
            "phonetic": "/sɜːr/",
            "pt": "Senhor (tratamento direto: Yes, Sir!)",
            "tipPt": "Lindo! \"Thank you, Sir!\" = \"Obrigado, Senhor!\""
          },
          {
            "id": "w0-p4-b5-t6",
            "en": "Ma'am",
            "emoji": "🌸",
            "phonetic": "/mæm/",
            "pt": "Senhora (tratamento direto: Yes, Ma'am!)",
            "tipPt": "Perfeito! \"Excuse me, Ma'am\" = \"Com licença, Senhora\"!"
          },
          {
            "id": "w0-p4-b5-t7",
            "en": "Dr. (Doctor)",
            "emoji": "🩺",
            "phonetic": "/ˈdɑːk.tər/",
            "pt": "Doutor / Doutora (médico ou dentista)",
            "tipPt": "Isso mesmo! \"Dr.\" usamos para médicos e doutores!"
          },
          {
            "id": "w0-p4-b5-t8",
            "en": "Prof. (Professor)",
            "emoji": "🎓",
            "phonetic": "/prəˈfes.ər/",
            "pt": "Professor(a) / Mestre",
            "tipPt": "Parabéns! Você concluiu Pessoais e Tratamento!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Sir (Senhor), Ma'am (Senhora), Dr. (Doutor/Doutora), Prof. (Professor/Mestre).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p5",
    "worldId": 0,
    "phaseNumber": 5,
    "title": "Vocabulário 4 • Cozinha II: Panelas, Talheres & Dentro da Geladeira",
    "subtitle": "Ambiente 4/12 • Modelos de panelas, utensílios de gaveta, louças e alimentos na geladeira",
    "pedagogicalObjective": "Conhecer cada modelo de panela (caçarola, frigideira, panela de pressão), os talheres e utensílios das gavetas e o que vemos ao abrir a geladeira.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Continuando na Cozinha, abrimos os armários, as gavetas e a porta da geladeira!",
      "Veja os vários modelos de panelas: Panela de cozinhar (Cooking Pot), Frigideira (Frying Pan), Panela de Pressão (Pressure Cooker) e Assadeira (Baking Tray).",
      "Nas gavetas temos os talheres e utensílios (Fork, Knife, Spoon, Soup Ladle, Spatula, Grater, Strainer, Cutting Board) e, dentro da geladeira, vemos Garrafa de Água (Bottle), Leite (Milk), Manteiga (Butter), Queijo (Cheese), Ovos (Egg), Suco (Juice) e frutas/verduras!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p5-e1",
        "type": "image-choice",
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
            "text": "Cooking Pot",
            "emoji": "🍲",
            "label": "Cooking Pot",
            "translationPt": "Panela com tampa"
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo (na geladeira)"
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
          "Cooking Pot",
          "Egg",
          "Bowl"
        ],
        "correctAnswer": "Cooking Pot",
        "explanation": "Exemplo prático: \"Boil soup and pasta in the stainless steel cooking pot.\"",
        "phoneticHint": "/ˈkʊk.ɪŋ pɑːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Frying Pan",
        "visualEmoji": "🍳",
        "visualOptions": [
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa de água (na geladeira)"
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
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira antiaderente"
          }
        ],
        "options": [
          "Bottle",
          "Napkin",
          "Knife",
          "Frying Pan"
        ],
        "correctAnswer": "Frying Pan",
        "explanation": "Exemplo prático: \"Fry eggs in a non-stick frying pan.\"",
        "phoneticHint": "/ˈfraɪ.ɪŋ pæn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pressure Cooker",
        "visualEmoji": "🍲",
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
          "Pressure Cooker",
          "Juice",
          "Jar",
          "Grater"
        ],
        "correctAnswer": "Pressure Cooker",
        "explanation": "Exemplo prático: \"Cook beans fast in the aluminum pressure cooker.\"",
        "phoneticHint": "/ˈpreʃ.ər ˌkʊk.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Baking Tray",
        "visualEmoji": "🥮",
        "visualOptions": [
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
          },
          {
            "text": "Baking Tray",
            "emoji": "🥮",
            "label": "Baking Tray",
            "translationPt": "Assadeira / Forma de forno"
          }
        ],
        "options": [
          "Soup Ladle",
          "Strainer",
          "Spatula",
          "Baking Tray"
        ],
        "correctAnswer": "Baking Tray",
        "explanation": "Exemplo prático: \"Put the metal baking tray inside the oven.\"",
        "phoneticHint": "/ˈbeɪ.kɪŋ treɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e5",
        "type": "image-choice",
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
          }
        ],
        "options": [
          "Cup",
          "Cutting Board",
          "Fork",
          "Cooking Pot"
        ],
        "correctAnswer": "Fork",
        "explanation": "Exemplo prático: \"Take a clean fork from the kitchen drawer.\"",
        "phoneticHint": "/fɔːrk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Knife",
        "visualEmoji": "🔪",
        "visualOptions": [
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca de cozinha"
          },
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
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface (na gaveta da geladeira)"
          }
        ],
        "options": [
          "Knife",
          "Frying Pan",
          "Rolling Pin",
          "Lettuce"
        ],
        "correctAnswer": "Knife",
        "explanation": "Exemplo prático: \"Slice the meat carefully with a sharp knife.\"",
        "phoneticHint": "/naɪf/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Spoon",
        "visualEmoji": "🥄",
        "visualOptions": [
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte (na geladeira)"
          },
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
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga (na geladeira)"
          }
        ],
        "options": [
          "Yogurt",
          "Spoon",
          "Cheese",
          "Butter"
        ],
        "correctAnswer": "Spoon",
        "explanation": "Exemplo prático: \"Use a metal spoon to eat soup.\"",
        "phoneticHint": "/spuːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e8",
        "type": "image-choice",
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
        "id": "w0-p5-e9",
        "type": "image-choice",
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
          },
          {
            "text": "Spatula",
            "emoji": "🍳",
            "label": "Spatula",
            "translationPt": "Espátula / Escumadeira"
          }
        ],
        "options": [
          "Glass",
          "Fork",
          "Milk",
          "Spatula"
        ],
        "correctAnswer": "Spatula",
        "explanation": "Exemplo prático: \"Flip the pancake with a kitchen spatula.\"",
        "phoneticHint": "/ˈspætʃ.ə.lə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e10",
        "type": "image-choice",
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
          }
        ],
        "options": [
          "Plate",
          "Pressure Cooker",
          "Grater",
          "Jar"
        ],
        "correctAnswer": "Grater",
        "explanation": "Exemplo prático: \"Grate the cheese using a metal box grater.\"",
        "phoneticHint": "/ˈɡreɪ.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Strainer",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Strainer",
            "emoji": "🥣",
            "label": "Strainer",
            "translationPt": "Peneira / Escorredor de cozinha"
          },
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
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira antiaderente"
          }
        ],
        "options": [
          "Strainer",
          "Spoon",
          "Lettuce",
          "Frying Pan"
        ],
        "correctAnswer": "Strainer",
        "explanation": "Exemplo prático: \"Wash the rice using a fine mesh strainer.\"",
        "phoneticHint": "/ˈstreɪ.nər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Cutting Board",
        "visualEmoji": "🪵",
        "visualOptions": [
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa de água (na geladeira)"
          },
          {
            "text": "Baking Tray",
            "emoji": "🥮",
            "label": "Baking Tray",
            "translationPt": "Assadeira / Forma de forno"
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          },
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga (na geladeira)"
          }
        ],
        "options": [
          "Bottle",
          "Baking Tray",
          "Cutting Board",
          "Butter"
        ],
        "correctAnswer": "Cutting Board",
        "explanation": "Exemplo prático: \"Chop tomatoes and onions on the wooden cutting board.\"",
        "phoneticHint": "/ˈkʌt.ɪŋ bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Rolling Pin",
        "visualEmoji": "🥖",
        "visualOptions": [
          {
            "text": "Knife",
            "emoji": "🔪",
            "label": "Knife",
            "translationPt": "Faca de cozinha"
          },
          {
            "text": "Rolling Pin",
            "emoji": "🥖",
            "label": "Rolling Pin",
            "translationPt": "Rolo de abrir massa"
          },
          {
            "text": "Napkin",
            "emoji": "🧻",
            "label": "Napkin",
            "translationPt": "Guardanapo"
          },
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto (na geladeira)"
          }
        ],
        "options": [
          "Knife",
          "Rolling Pin",
          "Napkin",
          "Ham"
        ],
        "correctAnswer": "Rolling Pin",
        "explanation": "Exemplo prático: \"Roll the bread dough with a wooden rolling pin.\"",
        "phoneticHint": "/ˈroʊ.lɪŋ pɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e14",
        "type": "image-choice",
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
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo (na geladeira)"
          },
          {
            "text": "Fork",
            "emoji": "🍴",
            "label": "Fork",
            "translationPt": "Garfo"
          },
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          }
        ],
        "options": [
          "Apple",
          "Egg",
          "Fork",
          "Plate"
        ],
        "correctAnswer": "Plate",
        "explanation": "Exemplo prático: \"Set the white ceramic plates on the table.\"",
        "phoneticHint": "/pleɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bowl",
        "visualEmoji": "🥣",
        "visualOptions": [
          {
            "text": "Bowl",
            "emoji": "🥣",
            "label": "Bowl",
            "translationPt": "Tigela / Cumbuca"
          },
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
          }
        ],
        "options": [
          "Bowl",
          "Pressure Cooker",
          "Juice",
          "Milk"
        ],
        "correctAnswer": "Bowl",
        "explanation": "Exemplo prático: \"Pour cereal and milk into the ceramic bowl.\"",
        "phoneticHint": "/boʊl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Glass",
        "visualEmoji": "🥛",
        "visualOptions": [
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
          },
          {
            "text": "Glass",
            "emoji": "🥛",
            "label": "Glass",
            "translationPt": "Copo de vidro"
          }
        ],
        "options": [
          "Cheese",
          "Cooking Pot",
          "Cutting Board",
          "Glass"
        ],
        "correctAnswer": "Glass",
        "explanation": "Exemplo prático: \"Drink cold water from a clear glass.\"",
        "phoneticHint": "/ɡlæs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cup",
        "visualEmoji": "☕",
        "visualOptions": [
          {
            "text": "Rolling Pin",
            "emoji": "🥖",
            "label": "Rolling Pin",
            "translationPt": "Rolo de abrir massa"
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
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte (na geladeira)"
          }
        ],
        "options": [
          "Rolling Pin",
          "Spoon",
          "Cup",
          "Yogurt"
        ],
        "correctAnswer": "Cup",
        "explanation": "Exemplo prático: \"Serve hot coffee in a porcelain cup.\"",
        "phoneticHint": "/kʌp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Jar",
        "visualEmoji": "🫙",
        "visualOptions": [
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
          "Jar",
          "Soup Ladle",
          "Strainer",
          "Spatula"
        ],
        "correctAnswer": "Jar",
        "explanation": "Exemplo prático: \"Store food inside a sealed glass jar.\"",
        "phoneticHint": "/dʒɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Salt Shaker",
        "visualEmoji": "🧂",
        "visualOptions": [
          {
            "text": "Plate",
            "emoji": "🍽️",
            "label": "Plate",
            "translationPt": "Prato"
          },
          {
            "text": "Salt Shaker",
            "emoji": "🧂",
            "label": "Salt Shaker",
            "translationPt": "Saleiro"
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
          "Plate",
          "Salt Shaker",
          "Grater",
          "Bowl"
        ],
        "correctAnswer": "Salt Shaker",
        "explanation": "Exemplo prático: \"The salt shaker is on the kitchen counter.\"",
        "phoneticHint": "/ˈsɔːlt ˌʃeɪ.kər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e20",
        "type": "image-choice",
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
        "id": "w0-p5-e21",
        "type": "image-choice",
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
          },
          {
            "text": "Bottle",
            "emoji": "🍾",
            "label": "Bottle",
            "translationPt": "Garrafa de água (na geladeira)"
          }
        ],
        "options": [
          "Pressure Cooker",
          "Spoon",
          "Cup",
          "Bottle"
        ],
        "correctAnswer": "Bottle",
        "explanation": "Exemplo prático: \"There is a cold water bottle inside the fridge.\"",
        "phoneticHint": "/ˈbɑː.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Milk",
        "visualEmoji": "🥛",
        "visualOptions": [
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
          },
          {
            "text": "Frying Pan",
            "emoji": "🍳",
            "label": "Frying Pan",
            "translationPt": "Frigideira antiaderente"
          }
        ],
        "options": [
          "Fork",
          "Cooking Pot",
          "Milk",
          "Frying Pan"
        ],
        "correctAnswer": "Milk",
        "explanation": "Exemplo prático: \"Keep the fresh milk inside the refrigerator.\"",
        "phoneticHint": "/mɪlk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Butter",
        "visualEmoji": "🧈",
        "visualOptions": [
          {
            "text": "Butter",
            "emoji": "🧈",
            "label": "Butter",
            "translationPt": "Manteiga (na geladeira)"
          },
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
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface (na gaveta da geladeira)"
          }
        ],
        "options": [
          "Butter",
          "Rolling Pin",
          "Salt Shaker",
          "Lettuce"
        ],
        "correctAnswer": "Butter",
        "explanation": "Exemplo prático: \"Take the butter out of the fridge for breakfast.\"",
        "phoneticHint": "/ˈbʌt.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Cheese",
        "visualEmoji": "🧀",
        "visualOptions": [
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
            "text": "Cheese",
            "emoji": "🧀",
            "label": "Cheese",
            "translationPt": "Queijo (na geladeira)"
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
          "Baking Tray",
          "Cheese",
          "Bowl"
        ],
        "correctAnswer": "Cheese",
        "explanation": "Exemplo prático: \"Sliced yellow cheese is stored in the fridge.\"",
        "phoneticHint": "/tʃiːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e25",
        "type": "image-choice",
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
          },
          {
            "text": "Cutting Board",
            "emoji": "🪵",
            "label": "Cutting Board",
            "translationPt": "Tábua de corte"
          }
        ],
        "options": [
          "Napkin",
          "Yogurt",
          "Bottle",
          "Cutting Board"
        ],
        "correctAnswer": "Yogurt",
        "explanation": "Exemplo prático: \"Cold strawberry yogurt is in the refrigerator.\"",
        "phoneticHint": "/ˈjoʊ.ɡərt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e26",
        "type": "image-choice",
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
          },
          {
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo (na geladeira)"
          }
        ],
        "options": [
          "Grater",
          "Jar",
          "Glass",
          "Egg"
        ],
        "correctAnswer": "Egg",
        "explanation": "Exemplo prático: \"There are twelve eggs in the refrigerator.\"",
        "phoneticHint": "/eɡ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Juice",
        "visualEmoji": "🧃",
        "visualOptions": [
          {
            "text": "Juice",
            "emoji": "🧃",
            "label": "Juice",
            "translationPt": "Jarra de suco (na geladeira)"
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
          "Juice",
          "Soup Ladle",
          "Strainer",
          "Spatula"
        ],
        "correctAnswer": "Juice",
        "explanation": "Exemplo prático: \"Cold orange juice is ready in the fridge.\"",
        "phoneticHint": "/dʒuːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ham",
        "visualEmoji": "🥩",
        "visualOptions": [
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
          },
          {
            "text": "Ham",
            "emoji": "🥩",
            "label": "Ham",
            "translationPt": "Presunto (na geladeira)"
          }
        ],
        "options": [
          "Cup",
          "Salt Shaker",
          "Cheese",
          "Ham"
        ],
        "correctAnswer": "Ham",
        "explanation": "Exemplo prático: \"Keep cheese and ham cold in the refrigerator.\"",
        "phoneticHint": "/hæm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p5-e29",
        "type": "image-choice",
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
            "text": "Lettuce",
            "emoji": "🥬",
            "label": "Lettuce",
            "translationPt": "Alface (na gaveta da geladeira)"
          },
          {
            "text": "Yogurt",
            "emoji": "🥣",
            "label": "Yogurt",
            "translationPt": "Iogurte (na geladeira)"
          }
        ],
        "options": [
          "Plate",
          "Butter",
          "Lettuce",
          "Yogurt"
        ],
        "correctAnswer": "Lettuce",
        "explanation": "Exemplo prático: \"Fresh green lettuce stays crisp in the fridge drawer.\"",
        "phoneticHint": "/ˈlet.ɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p5-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Apple",
        "visualEmoji": "🍎",
        "visualOptions": [
          {
            "text": "Apple",
            "emoji": "🍎",
            "label": "Apple",
            "translationPt": "Maçã (na fruteira / geladeira)"
          },
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
            "text": "Egg",
            "emoji": "🥚",
            "label": "Egg",
            "translationPt": "Ovo (na geladeira)"
          }
        ],
        "options": [
          "Apple",
          "Milk",
          "Napkin",
          "Egg"
        ],
        "correctAnswer": "Apple",
        "explanation": "Exemplo prático: \"I eat a cold red apple from the kitchen.\"",
        "phoneticHint": "/ˈæp.əl/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p6",
    "worldId": 0,
    "phaseNumber": 6,
    "title": "Vocabulário 5 • Quarto de Dormir, Cama, Guarda-Roupa & Vestuário",
    "subtitle": "Ambiente 5/12 • Cama, colchão, travesseiro, cobertor, guarda-roupa, cabide, roupas e calçados",
    "pedagogicalObjective": "Dominar cada item do quarto de dormir, roupas de cama, móveis do quarto e todas as peças de roupa e calçados do guarda-roupa.",
    "type": "lesson",
    "icon": "shirt",
    "cefrLevel": "A1",
    "theorySummary": [
      "Saindo da cozinha pelo corredor, entramos no Quarto de Dormir!",
      "Olhe para a Cama (Bed), o Colchão (Mattress), o Travesseiro (Pillow), o Cobertor (Blanket), o Criado-mudo (Nightstand), o Guarda-roupa (Wardrobe), o Cabide (Clothes Hanger) e o Espelho (Mirror).",
      "Abrindo o guarda-roupa, vemos todas as nossas roupas, calçados e acessórios do dia a dia!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p6-e1",
        "type": "image-choice",
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
          },
          {
            "text": "Bed",
            "emoji": "🛏️",
            "label": "Bed",
            "translationPt": "Cama"
          }
        ],
        "options": [
          "High Heels",
          "Handbag",
          "Boots",
          "Bed"
        ],
        "correctAnswer": "Bed",
        "explanation": "Exemplo prático: \"I sleep in a comfortable wooden bed.\"",
        "phoneticHint": "/bed/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mattress",
        "visualEmoji": "🛏️",
        "visualOptions": [
          {
            "text": "Mattress",
            "emoji": "🛏️",
            "label": "Mattress",
            "translationPt": "Colchão na cama"
          },
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
          }
        ],
        "options": [
          "Mattress",
          "Coat",
          "Belt",
          "Clothes Hanger"
        ],
        "correctAnswer": "Mattress",
        "explanation": "Exemplo prático: \"A soft orthopedic mattress on the bed.\"",
        "phoneticHint": "/ˈmæt.rəs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pillow",
        "visualEmoji": "⬜",
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
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          }
        ],
        "options": [
          "Jacket",
          "Jeans",
          "Glasses",
          "Pillow"
        ],
        "correctAnswer": "Pillow",
        "explanation": "Exemplo prático: \"Rest your head on a soft white pillow.\"",
        "phoneticHint": "/ˈpɪl.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e4",
        "type": "image-choice",
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
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          }
        ],
        "options": [
          "Shirt",
          "Skirt",
          "Blanket",
          "Shorts"
        ],
        "correctAnswer": "Blanket",
        "explanation": "Exemplo prático: \"Pull up the warm blanket on cold nights.\"",
        "phoneticHint": "/ˈblæŋ.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Nightstand",
        "visualEmoji": "🗄️",
        "visualOptions": [
          {
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo ao lado da cama"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          }
        ],
        "options": [
          "Nightstand",
          "Socks",
          "Cap",
          "Sweater"
        ],
        "correctAnswer": "Nightstand",
        "explanation": "Exemplo prático: \"Keep your book and lamp on the wooden nightstand.\"",
        "phoneticHint": "/ˈnaɪt.stænd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Wardrobe",
        "visualEmoji": "🚪",
        "visualOptions": [
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          },
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
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          }
        ],
        "options": [
          "Sandals",
          "Wardrobe",
          "Sneakers",
          "Shoes"
        ],
        "correctAnswer": "Wardrobe",
        "explanation": "Exemplo prático: \"Open the bedroom wardrobe to choose your clothes.\"",
        "phoneticHint": "/ˈwɔːr.droʊb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e7",
        "type": "image-choice",
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
        "id": "w0-p6-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mirror",
        "visualEmoji": "🪞",
        "visualOptions": [
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho do quarto"
          }
        ],
        "options": [
          "Watch",
          "Blanket",
          "Wallet",
          "Mirror"
        ],
        "correctAnswer": "Mirror",
        "explanation": "Exemplo prático: \"Look in the bedroom mirror before leaving home.\"",
        "phoneticHint": "/ˈmɪr.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e9",
        "type": "image-choice",
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
            "translationPt": "Criado-mudo ao lado da cama"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          },
          {
            "text": "Mattress",
            "emoji": "🛏️",
            "label": "Mattress",
            "translationPt": "Colchão na cama"
          }
        ],
        "options": [
          "Dress",
          "Nightstand",
          "Shirt",
          "Mattress"
        ],
        "correctAnswer": "Shirt",
        "explanation": "Exemplo prático: \"Put on a clean cotton shirt.\"",
        "phoneticHint": "/ʃɜːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pants",
        "visualEmoji": "👖",
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
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          }
        ],
        "options": [
          "Pants",
          "Wardrobe",
          "Skirt",
          "Sweater"
        ],
        "correctAnswer": "Pants",
        "explanation": "Exemplo prático: \"Fold the pants and put them in the wardrobe.\"",
        "phoneticHint": "/pænts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Jeans",
        "visualEmoji": "👖",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          },
          {
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          },
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
          }
        ],
        "options": [
          "Cap",
          "Coat",
          "Jeans",
          "Clothes Hanger"
        ],
        "correctAnswer": "Jeans",
        "explanation": "Exemplo prático: \"Blue denim jeans are durable and comfortable.\"",
        "phoneticHint": "/dʒiːnz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e12",
        "type": "image-choice",
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
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          },
          {
            "text": "Mirror",
            "emoji": "🪞",
            "label": "Mirror",
            "translationPt": "Espelho do quarto"
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
          "Shorts",
          "Mirror",
          "Blanket"
        ],
        "correctAnswer": "Shorts",
        "explanation": "Exemplo prático: \"Wear light shorts on hot days.\"",
        "phoneticHint": "/ʃɔːrts/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e13",
        "type": "image-choice",
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
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo ao lado da cama"
          },
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa"
          },
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          }
        ],
        "options": [
          "High Heels",
          "Nightstand",
          "Handbag",
          "Dress"
        ],
        "correctAnswer": "Dress",
        "explanation": "Exemplo prático: \"The red dress hangs inside the closet.\"",
        "phoneticHint": "/dres/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Skirt",
        "visualEmoji": "👗",
        "visualOptions": [
          {
            "text": "Skirt",
            "emoji": "👗",
            "label": "Skirt",
            "translationPt": "Saia"
          },
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
          }
        ],
        "options": [
          "Skirt",
          "Pants",
          "Wardrobe",
          "Watch"
        ],
        "correctAnswer": "Skirt",
        "explanation": "Exemplo prático: \"She wore a pleated skirt.\"",
        "phoneticHint": "/skɜːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Jacket",
        "visualEmoji": "🧥",
        "visualOptions": [
          {
            "text": "Jeans",
            "emoji": "👖",
            "label": "Jeans",
            "translationPt": "Calça jeans"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Mattress",
            "emoji": "🛏️",
            "label": "Mattress",
            "translationPt": "Colchão na cama"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          }
        ],
        "options": [
          "Jeans",
          "Pillow",
          "Mattress",
          "Jacket"
        ],
        "correctAnswer": "Jacket",
        "explanation": "Exemplo prático: \"Take a warm jacket from the wardrobe.\"",
        "phoneticHint": "/ˈdʒæk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e16",
        "type": "image-choice",
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
            "text": "Coat",
            "emoji": "🧥",
            "label": "Coat",
            "translationPt": "Casaco / Sobretudo"
          },
          {
            "text": "Shorts",
            "emoji": "🩳",
            "label": "Shorts",
            "translationPt": "Shorts / Bermuda"
          }
        ],
        "options": [
          "Sneakers",
          "Shirt",
          "Coat",
          "Shorts"
        ],
        "correctAnswer": "Coat",
        "explanation": "Exemplo prático: \"A heavy coat for cold winter days.\"",
        "phoneticHint": "/koʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sweater",
        "visualEmoji": "🧶",
        "visualOptions": [
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          },
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
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
          }
        ],
        "options": [
          "Sweater",
          "Shoes",
          "Mirror",
          "Sandals"
        ],
        "correctAnswer": "Sweater",
        "explanation": "Exemplo prático: \"A knitted wool sweater is very cozy.\"",
        "phoneticHint": "/ˈswet.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pajamas",
        "visualEmoji": "🛌",
        "visualOptions": [
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama de dormir"
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
          "Boots",
          "Pajamas",
          "Pants",
          "Belt"
        ],
        "correctAnswer": "Pajamas",
        "explanation": "Exemplo prático: \"Put on your pajamas before going to bed.\"",
        "phoneticHint": "/pəˈdʒæm.əz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Socks",
        "visualEmoji": "🧦",
        "visualOptions": [
          {
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          },
          {
            "text": "Jacket",
            "emoji": "🧥",
            "label": "Jacket",
            "translationPt": "Jaqueta / Blusa de frio"
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          }
        ],
        "options": [
          "Dress",
          "Socks",
          "Jacket",
          "Glasses"
        ],
        "correctAnswer": "Socks",
        "explanation": "Exemplo prático: \"My cotton socks are in the top drawer.\"",
        "phoneticHint": "/sɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Sneakers",
        "visualEmoji": "👟",
        "visualOptions": [
          {
            "text": "Watch",
            "emoji": "⌚",
            "label": "Watch",
            "translationPt": "Relógio de pulso"
          },
          {
            "text": "Wardrobe",
            "emoji": "🚪",
            "label": "Wardrobe",
            "translationPt": "Guarda-roupa"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          }
        ],
        "options": [
          "Watch",
          "Wardrobe",
          "Wallet",
          "Sneakers"
        ],
        "correctAnswer": "Sneakers",
        "explanation": "Exemplo prático: \"Put on your running sneakers.\"",
        "phoneticHint": "/ˈsniː.kərz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e21",
        "type": "image-choice",
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
            "text": "Shoes",
            "emoji": "👞",
            "label": "Shoes",
            "translationPt": "Sapatos"
          },
          {
            "text": "Shirt",
            "emoji": "👕",
            "label": "Shirt",
            "translationPt": "Camisa / Camiseta"
          }
        ],
        "options": [
          "Skirt",
          "Shorts",
          "Shoes",
          "Shirt"
        ],
        "correctAnswer": "Shoes",
        "explanation": "Exemplo prático: \"Polish your brown leather shoes.\"",
        "phoneticHint": "/ʃuːz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Sandals",
        "visualEmoji": "🩴",
        "visualOptions": [
          {
            "text": "Sandals",
            "emoji": "🩴",
            "label": "Sandals",
            "translationPt": "Chinelo / Sandália"
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
            "text": "Pajamas",
            "emoji": "🛌",
            "label": "Pajamas",
            "translationPt": "Pijama de dormir"
          }
        ],
        "options": [
          "Sandals",
          "Clothes Hanger",
          "Coat",
          "Pajamas"
        ],
        "correctAnswer": "Sandals",
        "explanation": "Exemplo prático: \"Wear comfortable sandals inside the house.\"",
        "phoneticHint": "/ˈsæn.dəlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Boots",
        "visualEmoji": "🥾",
        "visualOptions": [
          {
            "text": "Sweater",
            "emoji": "🧶",
            "label": "Sweater",
            "translationPt": "Suéter / Moletom"
          },
          {
            "text": "Pillow",
            "emoji": "⬜",
            "label": "Pillow",
            "translationPt": "Travesseiro"
          },
          {
            "text": "Boots",
            "emoji": "🥾",
            "label": "Boots",
            "translationPt": "Botas"
          },
          {
            "text": "Socks",
            "emoji": "🧦",
            "label": "Socks",
            "translationPt": "Meias"
          }
        ],
        "options": [
          "Sweater",
          "Pillow",
          "Boots",
          "Socks"
        ],
        "correctAnswer": "Boots",
        "explanation": "Exemplo prático: \"Keep your leather boots at the bottom of the closet.\"",
        "phoneticHint": "/buːts/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e24",
        "type": "image-choice",
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
            "text": "Blanket",
            "emoji": "🛌",
            "label": "Blanket",
            "translationPt": "Cobertor / Edredom"
          }
        ],
        "options": [
          "Handbag",
          "High Heels",
          "Bed",
          "Blanket"
        ],
        "correctAnswer": "High Heels",
        "explanation": "Exemplo prático: \"Red high heels for a special party.\"",
        "phoneticHint": "/ˌhaɪ ˈhiːlz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Belt",
        "visualEmoji": "ベルト",
        "visualOptions": [
          {
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo ao lado da cama"
          },
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
          {
            "text": "Sneakers",
            "emoji": "👟",
            "label": "Sneakers",
            "translationPt": "Tênis"
          },
          {
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto de couro"
          }
        ],
        "options": [
          "Nightstand",
          "Wallet",
          "Sneakers",
          "Belt"
        ],
        "correctAnswer": "Belt",
        "explanation": "Exemplo prático: \"Fasten your leather belt.\"",
        "phoneticHint": "/belt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cap",
        "visualEmoji": "🧢",
        "visualOptions": [
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
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
            "text": "Dress",
            "emoji": "👗",
            "label": "Dress",
            "translationPt": "Vestido"
          }
        ],
        "options": [
          "Cap",
          "Jacket",
          "Jeans",
          "Dress"
        ],
        "correctAnswer": "Cap",
        "explanation": "Exemplo prático: \"Wear a blue cap on sunny afternoons.\"",
        "phoneticHint": "/kæp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Glasses",
        "visualEmoji": "👓",
        "visualOptions": [
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
          },
          {
            "text": "Glasses",
            "emoji": "👓",
            "label": "Glasses",
            "translationPt": "Óculos de grau"
          }
        ],
        "options": [
          "Socks",
          "Sandals",
          "Shoes",
          "Glasses"
        ],
        "correctAnswer": "Glasses",
        "explanation": "Exemplo prático: \"My reading glasses are on the nightstand.\"",
        "phoneticHint": "/ˈɡlæs.ɪz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e28",
        "type": "image-choice",
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
          },
          {
            "text": "Mattress",
            "emoji": "🛏️",
            "label": "Mattress",
            "translationPt": "Colchão na cama"
          }
        ],
        "options": [
          "Pants",
          "Pajamas",
          "Watch",
          "Mattress"
        ],
        "correctAnswer": "Watch",
        "explanation": "Exemplo prático: \"Put on your wristwatch in the morning.\"",
        "phoneticHint": "/wɑːtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p6-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wallet",
        "visualEmoji": "👛",
        "visualOptions": [
          {
            "text": "Wallet",
            "emoji": "👛",
            "label": "Wallet",
            "translationPt": "Carteira de bolso"
          },
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
            "text": "Belt",
            "emoji": "ベルト",
            "label": "Belt",
            "translationPt": "Cinto de couro"
          }
        ],
        "options": [
          "Wallet",
          "Mirror",
          "Boots",
          "Belt"
        ],
        "correctAnswer": "Wallet",
        "explanation": "Exemplo prático: \"Keep your documents inside the leather wallet.\"",
        "phoneticHint": "/ˈwɑː.lɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p6-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Handbag",
        "visualEmoji": "👜",
        "visualOptions": [
          {
            "text": "High Heels",
            "emoji": "👠",
            "label": "High Heels",
            "translationPt": "Sapato de salto alto"
          },
          {
            "text": "Handbag",
            "emoji": "👜",
            "label": "Handbag",
            "translationPt": "Bolsa"
          },
          {
            "text": "Nightstand",
            "emoji": "🗄️",
            "label": "Nightstand",
            "translationPt": "Criado-mudo ao lado da cama"
          },
          {
            "text": "Cap",
            "emoji": "🧢",
            "label": "Cap",
            "translationPt": "Boné"
          }
        ],
        "options": [
          "High Heels",
          "Handbag",
          "Nightstand",
          "Cap"
        ],
        "correctAnswer": "Handbag",
        "explanation": "Exemplo prático: \"Her leather handbag is on the bedroom chair.\"",
        "phoneticHint": "/ˈhænd.bæɡ/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p7",
    "worldId": 0,
    "phaseNumber": 7,
    "title": "Vocabulário 6 • Banheiro, Chuveiro, Pia & Higiene Pessoal",
    "subtitle": "Ambiente 6/12 • Vaso sanitário, chuveiro, pia, toalhas, itens de higiene e partes do corpo",
    "pedagogicalObjective": "Reconhecer todos os itens do banheiro, produtos de higiene diária e partes do corpo humano.",
    "type": "lesson",
    "icon": "house",
    "cefrLevel": "A1",
    "theorySummary": [
      "Agora entramos no Banheiro da casa!",
      "Veja o Vaso Sanitário (Toilet), o Papel Higiênico (Toilet Paper), a Pia do Banheiro (Bathroom Sink), o Chuveiro (Shower), a Banheira (Bathtub), a Toalha de Banho (Towel), o Sabonete (Soap) e o Shampoo.",
      "Logo após concluir este 6º módulo de vocabulário, você fará o seu 2º Módulo Exclusivo de Pronomes (Possessivos & Demonstrativos)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p7-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Toilet",
        "visualEmoji": "🚽",
        "visualOptions": [
          {
            "text": "Toilet",
            "emoji": "🚽",
            "label": "Toilet",
            "translationPt": "Vaso sanitário"
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
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          }
        ],
        "options": [
          "Toilet",
          "Hairbrush",
          "Hair Dryer",
          "Hand"
        ],
        "correctAnswer": "Toilet",
        "explanation": "Exemplo prático: \"A clean white ceramic toilet in the bathroom.\"",
        "phoneticHint": "/ˈtɔɪ.lət/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Toilet Paper",
        "visualEmoji": "🧻",
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
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          }
        ],
        "options": [
          "Toothpaste",
          "Towel",
          "Toothbrush",
          "Toilet Paper"
        ],
        "correctAnswer": "Toilet Paper",
        "explanation": "Exemplo prático: \"Put a new roll of toilet paper on the holder.\"",
        "phoneticHint": "/ˈtɔɪ.lət ˈpeɪ.pər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bathroom Sink",
        "visualEmoji": "🚰",
        "visualOptions": [
          {
            "text": "Dental Floss",
            "emoji": "🦷",
            "label": "Dental Floss",
            "translationPt": "Fio dental"
          },
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
            "translationPt": "Pia / Gabinete do banheiro"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro digital"
          }
        ],
        "options": [
          "Dental Floss",
          "Arm",
          "Bathroom Sink",
          "Thermometer"
        ],
        "correctAnswer": "Bathroom Sink",
        "explanation": "Exemplo prático: \"Wash your hands and face in the bathroom sink.\"",
        "phoneticHint": "/ˈbæθ.ruːm sɪŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Shower",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro no box do banheiro"
          },
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Frasco de shampoo"
          },
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          },
          {
            "text": "Perfume",
            "emoji": "🧴",
            "label": "Perfume",
            "translationPt": "Perfume / Colônia"
          }
        ],
        "options": [
          "Shower",
          "Shampoo",
          "Pill",
          "Perfume"
        ],
        "correctAnswer": "Shower",
        "explanation": "Exemplo prático: \"Take a warm shower every day.\"",
        "phoneticHint": "/ˈʃaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bathtub",
        "visualEmoji": "🛁",
        "visualOptions": [
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          },
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira no banheiro"
          },
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          }
        ],
        "options": [
          "Comb",
          "Bathtub",
          "Foot",
          "Mouth"
        ],
        "correctAnswer": "Bathtub",
        "explanation": "Exemplo prático: \"Fill the white bathtub with warm water.\"",
        "phoneticHint": "/ˈbæθ.tʌb/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e6",
        "type": "image-choice",
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
        "id": "w0-p7-e7",
        "type": "image-choice",
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
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete em barra"
          }
        ],
        "options": [
          "Ear",
          "Eye",
          "Hair",
          "Soap"
        ],
        "correctAnswer": "Soap",
        "explanation": "Exemplo prático: \"Wash your hands with fragrant soap.\"",
        "phoneticHint": "/soʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Liquid Soap",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Toilet Paper",
            "emoji": "🧻",
            "label": "Toilet Paper",
            "translationPt": "Papel higiênico"
          },
          {
            "text": "Liquid Soap",
            "emoji": "🧴",
            "label": "Liquid Soap",
            "translationPt": "Sabonete líquido na pia"
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
          "Toilet Paper",
          "Liquid Soap",
          "Tooth"
        ],
        "correctAnswer": "Liquid Soap",
        "explanation": "Exemplo prático: \"Press the pump dispenser for liquid hand soap.\"",
        "phoneticHint": "/ˈlɪk.wɪd soʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Shampoo",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Frasco de shampoo"
          },
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira no banheiro"
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
            "translationPt": "Pia / Gabinete do banheiro"
          }
        ],
        "options": [
          "Shampoo",
          "Bathtub",
          "Bandage",
          "Bathroom Sink"
        ],
        "correctAnswer": "Shampoo",
        "explanation": "Exemplo prático: \"Wash your hair with shampoo in the shower.\"",
        "phoneticHint": "/ʃæmˈpuː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Toothbrush",
        "visualEmoji": "🪥",
        "visualOptions": [
          {
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          },
          {
            "text": "Perfume",
            "emoji": "🧴",
            "label": "Perfume",
            "translationPt": "Perfume / Colônia"
          },
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
            "translationPt": "Chuveiro no box do banheiro"
          }
        ],
        "options": [
          "Pill",
          "Perfume",
          "Toothbrush",
          "Shower"
        ],
        "correctAnswer": "Toothbrush",
        "explanation": "Exemplo prático: \"Brush your teeth with a soft toothbrush.\"",
        "phoneticHint": "/ˈtuːθ.brʌʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e11",
        "type": "image-choice",
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
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente / Creme dental"
          },
          {
            "text": "Leg",
            "emoji": "🦵",
            "label": "Leg",
            "translationPt": "Perna"
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
          "Toothpaste",
          "Leg",
          "Soap"
        ],
        "correctAnswer": "Toothpaste",
        "explanation": "Exemplo prático: \"Squeeze white toothpaste onto the brush.\"",
        "phoneticHint": "/ˈtuːθ.peɪst/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e12",
        "type": "image-choice",
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
            "text": "Liquid Soap",
            "emoji": "🧴",
            "label": "Liquid Soap",
            "translationPt": "Sabonete líquido na pia"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Dental Floss",
            "emoji": "🦷",
            "label": "Dental Floss",
            "translationPt": "Fio dental"
          }
        ],
        "options": [
          "Razor",
          "Liquid Soap",
          "Mouth",
          "Dental Floss"
        ],
        "correctAnswer": "Dental Floss",
        "explanation": "Exemplo prático: \"Use dental floss between your teeth every night.\"",
        "phoneticHint": "/ˈden.təl flɑːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Comb",
        "visualEmoji": "🪮",
        "visualOptions": [
          {
            "text": "Comb",
            "emoji": "🪮",
            "label": "Comb",
            "translationPt": "Pente de cabelo"
          },
          {
            "text": "Nose",
            "emoji": "👃",
            "label": "Nose",
            "translationPt": "Nariz"
          },
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Hair",
            "emoji": "💇",
            "label": "Hair",
            "translationPt": "Cabelo"
          }
        ],
        "options": [
          "Comb",
          "Nose",
          "Hand",
          "Hair"
        ],
        "correctAnswer": "Comb",
        "explanation": "Exemplo prático: \"Part your wet hair with a comb.\"",
        "phoneticHint": "/koʊm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hairbrush",
        "visualEmoji": "🪮",
        "visualOptions": [
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
          },
          {
            "text": "Hairbrush",
            "emoji": "🪮",
            "label": "Hairbrush",
            "translationPt": "Escova de cabelo"
          }
        ],
        "options": [
          "Arm",
          "Toilet",
          "Toilet Paper",
          "Hairbrush"
        ],
        "correctAnswer": "Hairbrush",
        "explanation": "Exemplo prático: \"Brush your hair in front of the bathroom mirror.\"",
        "phoneticHint": "/ˈher.brʌʃ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Hair Dryer",
        "visualEmoji": "💨",
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
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          },
          {
            "text": "Toothpaste",
            "emoji": "🪥",
            "label": "Toothpaste",
            "translationPt": "Pasta de dente / Creme dental"
          }
        ],
        "options": [
          "Toothbrush",
          "Towel",
          "Hair Dryer",
          "Toothpaste"
        ],
        "correctAnswer": "Hair Dryer",
        "explanation": "Exemplo prático: \"Dry your hair quickly with an electric hair dryer.\"",
        "phoneticHint": "/ˈher ˌdraɪ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Razor",
        "visualEmoji": "🪒",
        "visualOptions": [
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
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro no box do banheiro"
          },
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Frasco de shampoo"
          }
        ],
        "options": [
          "Razor",
          "Soap",
          "Shower",
          "Shampoo"
        ],
        "correctAnswer": "Razor",
        "explanation": "Exemplo prático: \"Shave carefully with a safety razor.\"",
        "phoneticHint": "/ˈreɪ.zər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Perfume",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Liquid Soap",
            "emoji": "🧴",
            "label": "Liquid Soap",
            "translationPt": "Sabonete líquido na pia"
          },
          {
            "text": "Perfume",
            "emoji": "🧴",
            "label": "Perfume",
            "translationPt": "Perfume / Colônia"
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
          "Liquid Soap",
          "Perfume",
          "Dental Floss",
          "Comb"
        ],
        "correctAnswer": "Perfume",
        "explanation": "Exemplo prático: \"Spray a little perfume before going out.\"",
        "phoneticHint": "/pərˈfjuːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bandage",
        "visualEmoji": "🩹",
        "visualOptions": [
          {
            "text": "Bathroom Sink",
            "emoji": "🚰",
            "label": "Bathroom Sink",
            "translationPt": "Pia / Gabinete do banheiro"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          }
        ],
        "options": [
          "Bathroom Sink",
          "Bandage",
          "Eye",
          "Ear"
        ],
        "correctAnswer": "Bandage",
        "explanation": "Exemplo prático: \"Keep adhesive bandages in the bathroom cabinet.\"",
        "phoneticHint": "/ˈbæn.dɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Thermometer",
        "visualEmoji": "🌡️",
        "visualOptions": [
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira no banheiro"
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
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro digital"
          }
        ],
        "options": [
          "Bathtub",
          "Hairbrush",
          "Hair Dryer",
          "Thermometer"
        ],
        "correctAnswer": "Thermometer",
        "explanation": "Exemplo prático: \"Measure your temperature with a digital thermometer.\"",
        "phoneticHint": "/θərˈmɑː.mə.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e20",
        "type": "image-choice",
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
            "text": "Pill",
            "emoji": "💊",
            "label": "Pill",
            "translationPt": "Comprimido / Remédio"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
          }
        ],
        "options": [
          "Toilet Paper",
          "Toilet",
          "Pill",
          "Arm"
        ],
        "correctAnswer": "Pill",
        "explanation": "Exemplo prático: \"Take the medicine pill with a glass of water.\"",
        "phoneticHint": "/pɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Hand",
        "visualEmoji": "✋",
        "visualOptions": [
          {
            "text": "Hand",
            "emoji": "✋",
            "label": "Hand",
            "translationPt": "Mão"
          },
          {
            "text": "Shampoo",
            "emoji": "🧴",
            "label": "Shampoo",
            "translationPt": "Frasco de shampoo"
          },
          {
            "text": "Soap",
            "emoji": "🧼",
            "label": "Soap",
            "translationPt": "Sabonete em barra"
          },
          {
            "text": "Shower",
            "emoji": "🚿",
            "label": "Shower",
            "translationPt": "Chuveiro no box do banheiro"
          }
        ],
        "options": [
          "Hand",
          "Shampoo",
          "Soap",
          "Shower"
        ],
        "correctAnswer": "Hand",
        "explanation": "Exemplo prático: \"Wash both hands with soap and water.\"",
        "phoneticHint": "/hænd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tooth",
        "visualEmoji": "🦷",
        "visualOptions": [
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
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Bandage",
            "emoji": "🩹",
            "label": "Bandage",
            "translationPt": "Curativo (Band-aid)"
          }
        ],
        "options": [
          "Foot",
          "Comb",
          "Tooth",
          "Bandage"
        ],
        "correctAnswer": "Tooth",
        "explanation": "Exemplo prático: \"Brush every tooth after meals.\"",
        "phoneticHint": "/tuːθ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Mouth",
        "visualEmoji": "👄",
        "visualOptions": [
          {
            "text": "Liquid Soap",
            "emoji": "🧴",
            "label": "Liquid Soap",
            "translationPt": "Sabonete líquido na pia"
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          },
          {
            "text": "Razor",
            "emoji": "🪒",
            "label": "Razor",
            "translationPt": "Aparelho de barbear"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro digital"
          }
        ],
        "options": [
          "Liquid Soap",
          "Mouth",
          "Razor",
          "Thermometer"
        ],
        "correctAnswer": "Mouth",
        "explanation": "Exemplo prático: \"Rinse your mouth with water.\"",
        "phoneticHint": "/maʊθ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Eye",
        "visualEmoji": "👁️",
        "visualOptions": [
          {
            "text": "Bathroom Sink",
            "emoji": "🚰",
            "label": "Bathroom Sink",
            "translationPt": "Pia / Gabinete do banheiro"
          },
          {
            "text": "Hair Dryer",
            "emoji": "💨",
            "label": "Hair Dryer",
            "translationPt": "Secador de cabelo"
          },
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
          }
        ],
        "options": [
          "Bathroom Sink",
          "Hair Dryer",
          "Hairbrush",
          "Eye"
        ],
        "correctAnswer": "Eye",
        "explanation": "Exemplo prático: \"Close your eyes when washing your face with soap.\"",
        "phoneticHint": "/aɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ear",
        "visualEmoji": "👂",
        "visualOptions": [
          {
            "text": "Ear",
            "emoji": "👂",
            "label": "Ear",
            "translationPt": "Orelha / Ouvido"
          },
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
          }
        ],
        "options": [
          "Ear",
          "Toothbrush",
          "Towel",
          "Toothpaste"
        ],
        "correctAnswer": "Ear",
        "explanation": "Exemplo prático: \"Dry your ears gently with a towel.\"",
        "phoneticHint": "/ɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Nose",
        "visualEmoji": "👃",
        "visualOptions": [
          {
            "text": "Tooth",
            "emoji": "🦷",
            "label": "Tooth",
            "translationPt": "Dente"
          },
          {
            "text": "Dental Floss",
            "emoji": "🦷",
            "label": "Dental Floss",
            "translationPt": "Fio dental"
          },
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
          }
        ],
        "options": [
          "Tooth",
          "Dental Floss",
          "Hand",
          "Nose"
        ],
        "correctAnswer": "Nose",
        "explanation": "Exemplo prático: \"Breathe fresh air through your nose.\"",
        "phoneticHint": "/noʊz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e27",
        "type": "image-choice",
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
          },
          {
            "text": "Mouth",
            "emoji": "👄",
            "label": "Mouth",
            "translationPt": "Boca"
          }
        ],
        "options": [
          "Perfume",
          "Pill",
          "Hair",
          "Mouth"
        ],
        "correctAnswer": "Hair",
        "explanation": "Exemplo prático: \"Wash and brush your hair.\"",
        "phoneticHint": "/her/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Foot",
        "visualEmoji": "🦶",
        "visualOptions": [
          {
            "text": "Foot",
            "emoji": "🦶",
            "label": "Foot",
            "translationPt": "Pé"
          },
          {
            "text": "Eye",
            "emoji": "👁️",
            "label": "Eye",
            "translationPt": "Olho"
          },
          {
            "text": "Thermometer",
            "emoji": "🌡️",
            "label": "Thermometer",
            "translationPt": "Termômetro digital"
          },
          {
            "text": "Bathtub",
            "emoji": "🛁",
            "label": "Bathtub",
            "translationPt": "Banheira no banheiro"
          }
        ],
        "options": [
          "Foot",
          "Eye",
          "Thermometer",
          "Bathtub"
        ],
        "correctAnswer": "Foot",
        "explanation": "Exemplo prático: \"Wash your feet in the shower.\"",
        "phoneticHint": "/fʊt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p7-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Arm",
        "visualEmoji": "💪",
        "visualOptions": [
          {
            "text": "Bathroom Sink",
            "emoji": "🚰",
            "label": "Bathroom Sink",
            "translationPt": "Pia / Gabinete do banheiro"
          },
          {
            "text": "Arm",
            "emoji": "💪",
            "label": "Arm",
            "translationPt": "Braço"
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
          "Bathroom Sink",
          "Arm",
          "Bandage",
          "Ear"
        ],
        "correctAnswer": "Arm",
        "explanation": "Exemplo prático: \"Apply lotion to your arms.\"",
        "phoneticHint": "/ɑːrm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p7-e30",
        "type": "image-choice",
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
      }
    ]
  },
  {
    "id": "w0-p8",
    "worldId": 0,
    "phaseNumber": 8,
    "title": "Lição de Pronomes II • Possessivos & Demonstrativos",
    "subtitle": "Módulo de Pronomes 2/4 (Após 6 de Vocabulário) • Pares Associativos + Voz da Professora",
    "pedagogicalObjective": "Dominar os Pronomes Possessivos (My, Your, His, Her, Its, Our, Their, Mine, Yours) e os Pronomes Demonstrativos (This, That, These, Those).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à 2ª Lição Exclusiva de Pronomes (após mais 3 módulos de vocabulário)!",
      "3º Passo: Aprendemos os Pronomes Possessivos (My, Your, His, Her, Our, Their, Mine, Yours), que mostram de quem é cada objeto.",
      "4º Passo: Aprendemos os Pronomes Demonstrativos (This, That, These, Those), que mostram se o objeto está pertinho da mão ou lá longe!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p8-pron-1",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (De quem é cada coisa? - Parte 1)",
        "conceptHeader": "Mostram quem é o dono! Se é meu, digo \"My\" (Meu/Minha). Se é seu, digo \"Your\" (Seu/Sua). Se pertence a um menino, \"His\" (Dele); e se pertence a uma menina, \"Her\" (Dela)!",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Conecte cada Pronome Possessivo ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p8-b1-pos1",
            "en": "My",
            "emoji": "💖",
            "phonetic": "/maɪ/",
            "pt": "Meu / Minha (ex: My bed = Minha cama)",
            "tipPt": "Isso mesmo! \"My\" mostra que pertence a você!"
          },
          {
            "id": "w0-p8-b1-pos2",
            "en": "Your",
            "emoji": "🎁",
            "phonetic": "/jʊr/",
            "pt": "Seu / Sua (ex: Your shirt = Sua camisa)",
            "tipPt": "Muito bem! \"Your\" significa \"Seu\" ou \"Sua\"!"
          },
          {
            "id": "w0-p8-b1-pos3",
            "en": "His",
            "emoji": "👦",
            "phonetic": "/hɪz/",
            "pt": "Dele (pertence a um menino ou homem)",
            "tipPt": "Perfeito! \"His shoes\" = \"Os sapatos dele\"!"
          },
          {
            "id": "w0-p8-b1-pos4",
            "en": "Her",
            "emoji": "👧",
            "phonetic": "/hɜːr/",
            "pt": "Dela (pertence a uma menina ou mulher)",
            "tipPt": "Lindo! \"Her dress\" = \"O vestido dela\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "My (Meu/Minha), Your (Seu/Sua), His (Dele), Her (Dela).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-pron-2",
        "type": "pair-match",
        "conceptTitle": "3º • Pronomes Possessivos (Nosso, Deles e É Meu! - Parte 2)",
        "conceptHeader": "Quando algo é de toda a nossa família junta, dizemos \"Our\" (Nosso/Nossa)! Quando é de outras pessoas, \"Their\" (Deles/Delas). E no final da frase, para dizer \"É meu!\" ou \"É seu!\", usamos \"Mine\" e \"Yours\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_3.wav",
        "prompt": "🤝 Ligue os Pronomes Possessivos de plural e fim de frase aos seus pares:",
        "pairs": [
          {
            "id": "w0-p8-b2-pos5",
            "en": "Our",
            "emoji": "🏡",
            "phonetic": "/aʊər/",
            "pt": "Nosso / Nossa (ex: Our kitchen = Nossa cozinha)",
            "tipPt": "Que orgulho! \"Our\" é \"Nosso\" ou \"Nossa\"!"
          },
          {
            "id": "w0-p8-b2-pos6",
            "en": "Their",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ðer/",
            "pt": "Deles / Delas (pertence a eles ou elas)",
            "tipPt": "Isso! \"Their house\" = \"A casa deles\"!"
          },
          {
            "id": "w0-p8-b2-pos7",
            "en": "Mine",
            "emoji": "✨",
            "phonetic": "/maɪn/",
            "pt": "O meu / A minha (ex: This cup is mine!)",
            "tipPt": "Perfeito! \"It is mine!\" = \"É meu!\""
          },
          {
            "id": "w0-p8-b2-pos8",
            "en": "Yours",
            "emoji": "🌟",
            "phonetic": "/jʊrz/",
            "pt": "O seu / A sua (ex: This plate is yours!)",
            "tipPt": "Maravilha! \"It is yours!\" = \"É seu!\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Our (Nosso/Nossa), Their (Deles/Delas), Mine (Meu/Minha no final), Yours (Seu/Sua no final).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-pron-3",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos (Pertinho da Mão vs. Lá Longe)",
        "conceptHeader": "Para 1 coisa bem pertinho da mão que podemos tocar, dizemos \"This\" (Este/Esta). Para 1 coisa lá longe que apontamos com o dedinho, dizemos \"That\" (Aquele/Aquela). Para várias coisas pertinho, \"These\"; e várias lá longe, \"Those\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_4.wav",
        "prompt": "🤝 Conecte cada Pronome Demonstrativo (perto vs. longe):",
        "pairs": [
          {
            "id": "w0-p8-b3-dem1",
            "en": "This",
            "emoji": "🤏",
            "phonetic": "/ðɪs/",
            "pt": "Este / Esta / Isto (1 coisa PERTINHO)",
            "tipPt": "Exato! \"This\" é para 1 coisa bem pertinho da mão!"
          },
          {
            "id": "w0-p8-b3-dem2",
            "en": "That",
            "emoji": "👉",
            "phonetic": "/ðæt/",
            "pt": "Aquele / Aquela / Aquilo (1 coisa LONGE)",
            "tipPt": "Muito bem! \"That\" é para 1 coisa lá longe!"
          },
          {
            "id": "w0-p8-b3-dem3",
            "en": "These",
            "emoji": "🤲",
            "phonetic": "/ðiːz/",
            "pt": "Estes / Estas (2 ou mais coisas PERTINHO)",
            "tipPt": "Perfeito! \"These\" é o plural pertinho de nós!"
          },
          {
            "id": "w0-p8-b3-dem4",
            "en": "Those",
            "emoji": "🔭",
            "phonetic": "/ðoʊz/",
            "pt": "Aqueles / Aquelas (2 ou mais coisas LONGE)",
            "tipPt": "Lindo! \"Those\" é o plural para o que está lá longe!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This (1 perto), That (1 longe), These (vários perto), Those (vários longe).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p8-pron-4",
        "type": "pair-match",
        "conceptTitle": "4º • Pronomes Demonstrativos na Prática (Com Objetos da Casa)",
        "conceptHeader": "Agora vamos usar \"This, That, These, Those\" com os objetos que já conhecemos da casa! Lembre-se: This/These = aqui pertinho; That/Those = lá longe!",
        "teacherAudioPt": "/audio/teacher/pronoun_4.wav",
        "prompt": "🤝 Ligue cada expressão com Pronome Demonstrativo ao seu par:",
        "pairs": [
          {
            "id": "w0-p8-b4-dem5",
            "en": "This spoon",
            "emoji": "🥄",
            "phonetic": "/ðɪs spuːn/",
            "pt": "Esta colher (aqui na minha mão)",
            "tipPt": "Isso! 1 colher pertinho = \"This spoon\"!"
          },
          {
            "id": "w0-p8-b4-dem6",
            "en": "That fridge",
            "emoji": "🧊",
            "phonetic": "/ðæt frɪdʒ/",
            "pt": "Aquela geladeira (ali longe)",
            "tipPt": "Muito bem! 1 geladeira longe = \"That fridge\"!"
          },
          {
            "id": "w0-p8-b4-dem7",
            "en": "These pillows",
            "emoji": "⬜",
            "phonetic": "/ðiːz ˈpɪl.oʊz/",
            "pt": "Estes travesseiros (aqui pertinho)",
            "tipPt": "Perfeito! Vários pertinho = \"These pillows\"!"
          },
          {
            "id": "w0-p8-b4-dem8",
            "en": "Those shoes",
            "emoji": "👞",
            "phonetic": "/ðoʊz ʃuːz/",
            "pt": "Aqueles sapatos (lá longe)",
            "tipPt": "Parabéns! Vários lá longe = \"Those shoes\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "This spoon (Esta colher aqui), That fridge (Aquela geladeira lá), These pillows (Estes travesseiros aqui), Those shoes (Aqueles sapatos lá).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p9",
    "worldId": 0,
    "phaseNumber": 9,
    "title": "Vocabulário 7 • Área de Serviço, Lavanderia, Quintal & Ferramentas",
    "subtitle": "Ambiente 7/12 • Máquina de lavar, cesto, ferro, vassoura, balde, ferramentas e animais no quintal",
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
        "id": "w0-p9-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Washing Machine",
        "visualEmoji": "🫧",
        "visualOptions": [
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde de água"
          }
        ],
        "options": [
          "Broom",
          "Hammer",
          "Washing Machine",
          "Bucket"
        ],
        "correctAnswer": "Washing Machine",
        "explanation": "Exemplo prático: \"Wash the family clothes in the washing machine.\"",
        "phoneticHint": "/ˈwɑː.ʃɪŋ məˌʃiːn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Laundry Basket",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Laundry Basket",
            "emoji": "🧺",
            "label": "Laundry Basket",
            "translationPt": "Cesto de roupa na lavanderia"
          },
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          },
          {
            "text": "Battery",
            "emoji": "🔋",
            "label": "Battery",
            "translationPt": "Pilha / Bateria"
          },
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          }
        ],
        "options": [
          "Laundry Basket",
          "Box",
          "Battery",
          "Tape Measure"
        ],
        "correctAnswer": "Laundry Basket",
        "explanation": "Exemplo prático: \"Put the clothes inside the plastic laundry basket.\"",
        "phoneticHint": "/ˈlɔːn.dri ˈbæs.kɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Laundry Detergent",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Garden Hose",
            "emoji": "🐍",
            "label": "Garden Hose",
            "translationPt": "Mangueira de jardim no quintal"
          },
          {
            "text": "Laundry Detergent",
            "emoji": "🧴",
            "label": "Laundry Detergent",
            "translationPt": "Sabão líquido para lavar roupas"
          },
          {
            "text": "Dustpan",
            "emoji": "🧹",
            "label": "Dustpan",
            "translationPt": "Pá de lixo com vassoura"
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
          "Laundry Detergent",
          "Dustpan",
          "Drill"
        ],
        "correctAnswer": "Laundry Detergent",
        "explanation": "Exemplo prático: \"Add laundry detergent to the washing machine.\"",
        "phoneticHint": "/ˈlɔːn.dri dɪˈtɜːr.dʒənt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Clothespin",
        "visualEmoji": "📎",
        "visualOptions": [
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Clothespin",
            "emoji": "📎",
            "label": "Clothespin",
            "translationPt": "Pregadores de roupa no varal"
          },
          {
            "text": "Vacuum Cleaner",
            "emoji": "🧹",
            "label": "Vacuum Cleaner",
            "translationPt": "Aspirador de pó"
          },
          {
            "text": "Shovel",
            "emoji": "⛏️",
            "label": "Shovel",
            "translationPt": "Pá de jardim / obra"
          }
        ],
        "options": [
          "Screwdriver",
          "Clothespin",
          "Vacuum Cleaner",
          "Shovel"
        ],
        "correctAnswer": "Clothespin",
        "explanation": "Exemplo prático: \"Hang the wet shirts on the line with clothespins.\"",
        "phoneticHint": "/ˈkloʊðz.pɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e5",
        "type": "image-choice",
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
          },
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          }
        ],
        "options": [
          "Cat",
          "Flashlight",
          "Saw",
          "Clothes Iron"
        ],
        "correctAnswer": "Clothes Iron",
        "explanation": "Exemplo prático: \"Iron the dress shirt with a steam clothes iron.\"",
        "phoneticHint": "/ˈkloʊðz ˌaɪ.ərn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ironing Board",
        "visualEmoji": "🧺",
        "visualOptions": [
          {
            "text": "Rope",
            "emoji": "🪢",
            "label": "Rope",
            "translationPt": "Corda"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil de alumínio"
          },
          {
            "text": "Ironing Board",
            "emoji": "🧺",
            "label": "Ironing Board",
            "translationPt": "Tábua de passar roupa"
          },
          {
            "text": "Laundry Basket",
            "emoji": "🧺",
            "label": "Laundry Basket",
            "translationPt": "Cesto de roupa na lavanderia"
          }
        ],
        "options": [
          "Rope",
          "Ladder",
          "Ironing Board",
          "Laundry Basket"
        ],
        "correctAnswer": "Ironing Board",
        "explanation": "Exemplo prático: \"Set up the folding ironing board in the laundry room.\"",
        "phoneticHint": "/ˈaɪ.ər.nɪŋ bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Broom",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
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
            "translationPt": "Sabão líquido para lavar roupas"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          }
        ],
        "options": [
          "Broom",
          "Pliers",
          "Laundry Detergent",
          "Parrot"
        ],
        "correctAnswer": "Broom",
        "explanation": "Exemplo prático: \"Sweep the backyard floor with a broom.\"",
        "phoneticHint": "/bruːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e8",
        "type": "image-choice",
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
            "translationPt": "Pá de lixo com vassoura"
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
        "id": "w0-p9-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Mop",
        "visualEmoji": "🧹",
        "visualOptions": [
          {
            "text": "Clothespin",
            "emoji": "📎",
            "label": "Clothespin",
            "translationPt": "Pregadores de roupa no varal"
          },
          {
            "text": "Mop",
            "emoji": "🧹",
            "label": "Mop",
            "translationPt": "Esfregão / Rodo de limpeza"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro (no quintal)"
          }
        ],
        "options": [
          "Clothespin",
          "Mop",
          "Wrench",
          "Dog"
        ],
        "correctAnswer": "Mop",
        "explanation": "Exemplo prático: \"Clean the ceramic floor tiles with a wet mop.\"",
        "phoneticHint": "/mɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bucket",
        "visualEmoji": "🪣",
        "visualOptions": [
          {
            "text": "Ironing Board",
            "emoji": "🧺",
            "label": "Ironing Board",
            "translationPt": "Tábua de passar roupa"
          },
          {
            "text": "Shovel",
            "emoji": "⛏️",
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
          }
        ],
        "options": [
          "Ironing Board",
          "Shovel",
          "Clothes Iron",
          "Bucket"
        ],
        "correctAnswer": "Bucket",
        "explanation": "Exemplo prático: \"Fill the plastic bucket with water and soap.\"",
        "phoneticHint": "/ˈbʌk.ɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Vacuum Cleaner",
        "visualEmoji": "🧹",
        "visualOptions": [
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
            "translationPt": "Sabão líquido para lavar roupas"
          },
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil de alumínio"
          },
          {
            "text": "Laundry Basket",
            "emoji": "🧺",
            "label": "Laundry Basket",
            "translationPt": "Cesto de roupa na lavanderia"
          }
        ],
        "options": [
          "Vacuum Cleaner",
          "Laundry Detergent",
          "Ladder",
          "Laundry Basket"
        ],
        "correctAnswer": "Vacuum Cleaner",
        "explanation": "Exemplo prático: \"Clean the living room rug with a vacuum cleaner.\"",
        "phoneticHint": "/ˈvæk.juːm ˈkliː.nər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Garden Hose",
        "visualEmoji": "🐍",
        "visualOptions": [
          {
            "text": "Box",
            "emoji": "📦",
            "label": "Box",
            "translationPt": "Caixa de papelão"
          },
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
            "text": "Garden Hose",
            "emoji": "🐍",
            "label": "Garden Hose",
            "translationPt": "Mangueira de jardim no quintal"
          }
        ],
        "options": [
          "Box",
          "Battery",
          "Broom",
          "Garden Hose"
        ],
        "correctAnswer": "Garden Hose",
        "explanation": "Exemplo prático: \"Wash the backyard with the green garden hose.\"",
        "phoneticHint": "/ˈɡɑːr.dən hoʊz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Watering Can",
        "visualEmoji": "🚿",
        "visualOptions": [
          {
            "text": "Rope",
            "emoji": "🪢",
            "label": "Rope",
            "translationPt": "Corda"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
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
            "translationPt": "Esfregão / Rodo de limpeza"
          }
        ],
        "options": [
          "Rope",
          "Hammer",
          "Watering Can",
          "Mop"
        ],
        "correctAnswer": "Watering Can",
        "explanation": "Exemplo prático: \"Water the flowers using a watering can.\"",
        "phoneticHint": "/ˈwɔː.tər.ɪŋ kæn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wheelbarrow",
        "visualEmoji": "🛒",
        "visualOptions": [
          {
            "text": "Wheelbarrow",
            "emoji": "🛒",
            "label": "Wheelbarrow",
            "translationPt": "Carrinho de mão"
          },
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira elétrica"
          },
          {
            "text": "Dustpan",
            "emoji": "🧹",
            "label": "Dustpan",
            "translationPt": "Pá de lixo com vassoura"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro (no quintal)"
          }
        ],
        "options": [
          "Wheelbarrow",
          "Drill",
          "Dustpan",
          "Dog"
        ],
        "correctAnswer": "Wheelbarrow",
        "explanation": "Exemplo prático: \"Carry soil and bricks in a wheelbarrow.\"",
        "phoneticHint": "/ˈwiːlˌbær.oʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Shovel",
        "visualEmoji": "⛏️",
        "visualOptions": [
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          },
          {
            "text": "Shovel",
            "emoji": "⛏️",
            "label": "Shovel",
            "translationPt": "Pá de jardim / obra"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          },
          {
            "text": "Pliers",
            "emoji": "🔧",
            "label": "Pliers",
            "translationPt": "Alicate"
          }
        ],
        "options": [
          "Parrot",
          "Shovel",
          "Washing Machine",
          "Pliers"
        ],
        "correctAnswer": "Shovel",
        "explanation": "Exemplo prático: \"Dig the garden soil with a metal shovel.\"",
        "phoneticHint": "/ˈʃʌv.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ladder",
        "visualEmoji": "🪜",
        "visualOptions": [
          {
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          },
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
            "translationPt": "Pregadores de roupa no varal"
          },
          {
            "text": "Clothes Iron",
            "emoji": "💨",
            "label": "Clothes Iron",
            "translationPt": "Ferro de passar roupa"
          }
        ],
        "options": [
          "Flashlight",
          "Ladder",
          "Clothespin",
          "Clothes Iron"
        ],
        "correctAnswer": "Ladder",
        "explanation": "Exemplo prático: \"Climb the step ladder to change the ceiling bulb.\"",
        "phoneticHint": "/ˈlæd.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Hammer",
        "visualEmoji": "🔨",
        "visualOptions": [
          {
            "text": "Cat",
            "emoji": "🐈",
            "label": "Cat",
            "translationPt": "Gato (em casa)"
          },
          {
            "text": "Ironing Board",
            "emoji": "🧺",
            "label": "Ironing Board",
            "translationPt": "Tábua de passar roupa"
          },
          {
            "text": "Vacuum Cleaner",
            "emoji": "🧹",
            "label": "Vacuum Cleaner",
            "translationPt": "Aspirador de pó"
          },
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          }
        ],
        "options": [
          "Cat",
          "Ironing Board",
          "Vacuum Cleaner",
          "Hammer"
        ],
        "correctAnswer": "Hammer",
        "explanation": "Exemplo prático: \"Fix the nail on the wall with a hammer.\"",
        "phoneticHint": "/ˈhæm.ər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Screwdriver",
        "visualEmoji": "🪛",
        "visualOptions": [
          {
            "text": "Mop",
            "emoji": "🧹",
            "label": "Mop",
            "translationPt": "Esfregão / Rodo de limpeza"
          },
          {
            "text": "Bucket",
            "emoji": "🪣",
            "label": "Bucket",
            "translationPt": "Balde de água"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Garden Hose",
            "emoji": "🐍",
            "label": "Garden Hose",
            "translationPt": "Mangueira de jardim no quintal"
          }
        ],
        "options": [
          "Mop",
          "Bucket",
          "Screwdriver",
          "Garden Hose"
        ],
        "correctAnswer": "Screwdriver",
        "explanation": "Exemplo prático: \"Tighten the door hinge screw with a screwdriver.\"",
        "phoneticHint": "/ˈskruːˌdraɪ.vər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Wrench",
        "visualEmoji": "🔧",
        "visualOptions": [
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          },
          {
            "text": "Watering Can",
            "emoji": "🚿",
            "label": "Watering Can",
            "translationPt": "Regador de plantas"
          },
          {
            "text": "Broom",
            "emoji": "🧹",
            "label": "Broom",
            "translationPt": "Vassoura"
          },
          {
            "text": "Wheelbarrow",
            "emoji": "🛒",
            "label": "Wheelbarrow",
            "translationPt": "Carrinho de mão"
          }
        ],
        "options": [
          "Wrench",
          "Watering Can",
          "Broom",
          "Wheelbarrow"
        ],
        "correctAnswer": "Wrench",
        "explanation": "Exemplo prático: \"Tighten the pipe nut with a steel wrench.\"",
        "phoneticHint": "/rentʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pliers",
        "visualEmoji": "🔧",
        "visualOptions": [
          {
            "text": "Dustpan",
            "emoji": "🧹",
            "label": "Dustpan",
            "translationPt": "Pá de lixo com vassoura"
          },
          {
            "text": "Washing Machine",
            "emoji": "🫧",
            "label": "Washing Machine",
            "translationPt": "Máquina de lavar roupa"
          },
          {
            "text": "Pliers",
            "emoji": "🔧",
            "label": "Pliers",
            "translationPt": "Alicate"
          },
          {
            "text": "Dog",
            "emoji": "🐕",
            "label": "Dog",
            "translationPt": "Cachorro (no quintal)"
          }
        ],
        "options": [
          "Dustpan",
          "Washing Machine",
          "Pliers",
          "Dog"
        ],
        "correctAnswer": "Pliers",
        "explanation": "Exemplo prático: \"Cut and hold the wire using pliers.\"",
        "phoneticHint": "/ˈplaɪ.ərz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Saw",
        "visualEmoji": "🪚",
        "visualOptions": [
          {
            "text": "Hammer",
            "emoji": "🔨",
            "label": "Hammer",
            "translationPt": "Martelo"
          },
          {
            "text": "Saw",
            "emoji": "🪚",
            "label": "Saw",
            "translationPt": "Serrote de cortar madeira"
          },
          {
            "text": "Shovel",
            "emoji": "⛏️",
            "label": "Shovel",
            "translationPt": "Pá de jardim / obra"
          },
          {
            "text": "Parrot",
            "emoji": "🦜",
            "label": "Parrot",
            "translationPt": "Papagaio"
          }
        ],
        "options": [
          "Hammer",
          "Saw",
          "Shovel",
          "Parrot"
        ],
        "correctAnswer": "Saw",
        "explanation": "Exemplo prático: \"Cut the wooden board with a sharp hand saw.\"",
        "phoneticHint": "/sɔː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Tape Measure",
        "visualEmoji": "📏",
        "visualOptions": [
          {
            "text": "Clothespin",
            "emoji": "📎",
            "label": "Clothespin",
            "translationPt": "Pregadores de roupa no varal"
          },
          {
            "text": "Ironing Board",
            "emoji": "🧺",
            "label": "Ironing Board",
            "translationPt": "Tábua de passar roupa"
          },
          {
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
          }
        ],
        "options": [
          "Clothespin",
          "Ironing Board",
          "Screwdriver",
          "Tape Measure"
        ],
        "correctAnswer": "Tape Measure",
        "explanation": "Exemplo prático: \"Measure the cabinet width with a tape measure.\"",
        "phoneticHint": "/ˈteɪp ˌmeʒ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Drill",
        "visualEmoji": "🪛",
        "visualOptions": [
          {
            "text": "Drill",
            "emoji": "🪛",
            "label": "Drill",
            "translationPt": "Furadeira elétrica"
          },
          {
            "text": "Laundry Detergent",
            "emoji": "🧴",
            "label": "Laundry Detergent",
            "translationPt": "Sabão líquido para lavar roupas"
          },
          {
            "text": "Laundry Basket",
            "emoji": "🧺",
            "label": "Laundry Basket",
            "translationPt": "Cesto de roupa na lavanderia"
          },
          {
            "text": "Wrench",
            "emoji": "🔧",
            "label": "Wrench",
            "translationPt": "Chave inglesa / Chave de boca"
          }
        ],
        "options": [
          "Drill",
          "Laundry Detergent",
          "Laundry Basket",
          "Wrench"
        ],
        "correctAnswer": "Drill",
        "explanation": "Exemplo prático: \"Drill a hole in the brick wall with an electric drill.\"",
        "phoneticHint": "/drɪl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Flashlight",
        "visualEmoji": "🔦",
        "visualOptions": [
          {
            "text": "Ladder",
            "emoji": "🪜",
            "label": "Ladder",
            "translationPt": "Escada portátil de alumínio"
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
            "text": "Flashlight",
            "emoji": "🔦",
            "label": "Flashlight",
            "translationPt": "Lanterna"
          }
        ],
        "options": [
          "Ladder",
          "Clothes Iron",
          "Bucket",
          "Flashlight"
        ],
        "correctAnswer": "Flashlight",
        "explanation": "Exemplo prático: \"Keep a bright flashlight for power outages.\"",
        "phoneticHint": "/ˈflæʃ.laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Battery",
        "visualEmoji": "🔋",
        "visualOptions": [
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
          "Watering Can",
          "Wheelbarrow",
          "Battery",
          "Saw"
        ],
        "correctAnswer": "Battery",
        "explanation": "Exemplo prático: \"Put two new AA batteries in the remote control.\"",
        "phoneticHint": "/ˈbæt.ər.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rope",
        "visualEmoji": "🪢",
        "visualOptions": [
          {
            "text": "Rope",
            "emoji": "🪢",
            "label": "Rope",
            "translationPt": "Corda"
          },
          {
            "text": "Vacuum Cleaner",
            "emoji": "🧹",
            "label": "Vacuum Cleaner",
            "translationPt": "Aspirador de pó"
          },
          {
            "text": "Garden Hose",
            "emoji": "🐍",
            "label": "Garden Hose",
            "translationPt": "Mangueira de jardim no quintal"
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
          "Vacuum Cleaner",
          "Garden Hose",
          "Tape Measure"
        ],
        "correctAnswer": "Rope",
        "explanation": "Exemplo prático: \"A strong coiled rope in the tool shed.\"",
        "phoneticHint": "/roʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Box",
        "visualEmoji": "📦",
        "visualOptions": [
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
            "text": "Screwdriver",
            "emoji": "🪛",
            "label": "Screwdriver",
            "translationPt": "Chave de fenda"
          },
          {
            "text": "Mop",
            "emoji": "🧹",
            "label": "Mop",
            "translationPt": "Esfregão / Rodo de limpeza"
          }
        ],
        "options": [
          "Pliers",
          "Box",
          "Screwdriver",
          "Mop"
        ],
        "correctAnswer": "Box",
        "explanation": "Exemplo prático: \"Store old items inside a cardboard box.\"",
        "phoneticHint": "/bɑːks/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dog",
        "visualEmoji": "🐕",
        "visualOptions": [
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
          "Drill",
          "Dog",
          "Flashlight",
          "Wrench"
        ],
        "correctAnswer": "Dog",
        "explanation": "Exemplo prático: \"Our friendly dog plays in the backyard.\"",
        "phoneticHint": "/dɔːɡ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p9-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Cat",
        "visualEmoji": "🐈",
        "visualOptions": [
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
          },
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
          }
        ],
        "options": [
          "Battery",
          "Saw",
          "Broom",
          "Cat"
        ],
        "correctAnswer": "Cat",
        "explanation": "Exemplo prático: \"The cat naps near the laundry room.\"",
        "phoneticHint": "/kæt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p9-e30",
        "type": "image-choice",
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
            "text": "Tape Measure",
            "emoji": "📏",
            "label": "Tape Measure",
            "translationPt": "Trena / Fita métrica"
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
          }
        ],
        "options": [
          "Rope",
          "Tape Measure",
          "Parrot",
          "Hammer"
        ],
        "correctAnswer": "Parrot",
        "explanation": "Exemplo prático: \"The green parrot chirps happily.\"",
        "phoneticHint": "/ˈpær.ət/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p10",
    "worldId": 0,
    "phaseNumber": 10,
    "title": "Vocabulário 8 • Na Rua, Calçada, Trânsito & Vizinhança",
    "subtitle": "Ambiente 8/12 • Saindo de casa: rua completa, faixa, semáforo, poste, veículos e praça",
    "pedagogicalObjective": "Reconhecer tudo o que vemos ao sair de casa para caminhar ou dirigir pela rua e vizinhança.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Terminamos de explorar toda a nossa casa! Agora abrimos o portão e saímos para a Rua (Street)!",
      "Olhe para a Rua completa (Street), a Faixa de Pedestres na via (Crosswalk), o Semáforo (Traffic Light), a Placa de Pare (Stop Sign), o Poste de Luz (Streetlight) e o Ponto de Ônibus (Bus Stop).",
      "Veja também os veículos passando, a Praça com Banco (Park Bench), as Árvores (Tree) e o Clima!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p10-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Street",
        "visualEmoji": "🛣️",
        "visualOptions": [
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua asfaltada completa"
          },
          {
            "text": "Bus Stop",
            "emoji": "🚏",
            "label": "Bus Stop",
            "translationPt": "Ponto de ônibus na calçada"
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
          "Street",
          "Bus Stop",
          "Bus",
          "Helmet"
        ],
        "correctAnswer": "Street",
        "explanation": "Exemplo prático: \"Cars drive along the paved city street.\"",
        "phoneticHint": "/striːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Crosswalk",
        "visualEmoji": "🚸",
        "visualOptions": [
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
            "translationPt": "Faixa de pedestres na rua"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          }
        ],
        "options": [
          "Tire",
          "Crosswalk",
          "Taxi",
          "Truck"
        ],
        "correctAnswer": "Crosswalk",
        "explanation": "Exemplo prático: \"Always cross the street on the white crosswalk stripes.\"",
        "phoneticHint": "/ˈkrɔːs.wɔːk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Traffic Light",
        "visualEmoji": "🚦",
        "visualOptions": [
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
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
          "Traffic Light",
          "Tree",
          "Bicycle"
        ],
        "correctAnswer": "Traffic Light",
        "explanation": "Exemplo prático: \"Wait for the green traffic light before crossing.\"",
        "phoneticHint": "/ˈtræf.ɪk laɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Stop Sign",
        "visualEmoji": "🛑",
        "visualOptions": [
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de direção"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
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
            "translationPt": "Placa de PARE na rua"
          }
        ],
        "options": [
          "Steering Wheel",
          "Sun",
          "Van",
          "Stop Sign"
        ],
        "correctAnswer": "Stop Sign",
        "explanation": "Exemplo prático: \"Every driver must stop at the red stop sign.\"",
        "phoneticHint": "/stɑːp saɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Streetlight",
        "visualEmoji": "🏮",
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
            "text": "Streetlight",
            "emoji": "🏮",
            "label": "Streetlight",
            "translationPt": "Poste de iluminação pública"
          },
          {
            "text": "Flower",
            "emoji": "🌻",
            "label": "Flower",
            "translationPt": "Flor"
          }
        ],
        "options": [
          "Fire Truck",
          "Fuel Pump",
          "Streetlight",
          "Flower"
        ],
        "correctAnswer": "Streetlight",
        "explanation": "Exemplo prático: \"The tall streetlight turns on at dusk.\"",
        "phoneticHint": "/ˈstriːt.laɪt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bus Stop",
        "visualEmoji": "🚏",
        "visualOptions": [
          {
            "text": "Bus Stop",
            "emoji": "🚏",
            "label": "Bus Stop",
            "translationPt": "Ponto de ônibus na calçada"
          },
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
            "translationPt": "Faixa de pedestres na rua"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          }
        ],
        "options": [
          "Bus Stop",
          "Umbrella",
          "Crosswalk",
          "Rain"
        ],
        "correctAnswer": "Bus Stop",
        "explanation": "Exemplo prático: \"Passengers wait for the bus at the bus stop shelter.\"",
        "phoneticHint": "/bʌs stɑːp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Car",
        "visualEmoji": "🚗",
        "visualOptions": [
          {
            "text": "Building",
            "emoji": "🏢",
            "label": "Building",
            "translationPt": "Prédio / Edifício"
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
            "text": "Bird",
            "emoji": "🐦",
            "label": "Bird",
            "translationPt": "Pássaro"
          }
        ],
        "options": [
          "Building",
          "Bridge",
          "Car",
          "Bird"
        ],
        "correctAnswer": "Car",
        "explanation": "Exemplo prático: \"A red car is parked on the street.\"",
        "phoneticHint": "/kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bus",
        "visualEmoji": "🚌",
        "visualOptions": [
          {
            "text": "Stop Sign",
            "emoji": "🛑",
            "label": "Stop Sign",
            "translationPt": "Placa de PARE na rua"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus urbano"
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
            "translationPt": "Rua asfaltada completa"
          }
        ],
        "options": [
          "Stop Sign",
          "Bus",
          "Traffic Light",
          "Street"
        ],
        "correctAnswer": "Bus",
        "explanation": "Exemplo prático: \"Take the city bus to go downtown.\"",
        "phoneticHint": "/bʌs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Motorcycle",
        "visualEmoji": "🏍️",
        "visualOptions": [
          {
            "text": "Streetlight",
            "emoji": "🏮",
            "label": "Streetlight",
            "translationPt": "Poste de iluminação pública"
          },
          {
            "text": "Park Bench",
            "emoji": "🪑",
            "label": "Park Bench",
            "translationPt": "Banco na praça"
          },
          {
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          }
        ],
        "options": [
          "Streetlight",
          "Park Bench",
          "Police Car",
          "Motorcycle"
        ],
        "correctAnswer": "Motorcycle",
        "explanation": "Exemplo prático: \"The delivery rider drives a motorcycle.\"",
        "phoneticHint": "/ˈmoʊ.tərˌsaɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bicycle",
        "visualEmoji": "🚲",
        "visualOptions": [
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
            "translationPt": "Sol"
          },
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo na praça"
          },
          {
            "text": "Steering Wheel",
            "emoji": "🛞",
            "label": "Steering Wheel",
            "translationPt": "Volante de direção"
          }
        ],
        "options": [
          "Bicycle",
          "Sun",
          "Pigeon",
          "Steering Wheel"
        ],
        "correctAnswer": "Bicycle",
        "explanation": "Exemplo prático: \"Ride your bicycle along the bike lane.\"",
        "phoneticHint": "/ˈbaɪ.sɪ.kəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e11",
        "type": "image-choice",
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
        "id": "w0-p10-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Taxi",
        "visualEmoji": "🚕",
        "visualOptions": [
          {
            "text": "Bus Stop",
            "emoji": "🚏",
            "label": "Bus Stop",
            "translationPt": "Ponto de ônibus na calçada"
          },
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte / Viaduto"
          },
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
          }
        ],
        "options": [
          "Bus Stop",
          "Bridge",
          "Taxi",
          "Bus"
        ],
        "correctAnswer": "Taxi",
        "explanation": "Exemplo prático: \"Wave to call a yellow taxi on the avenue.\"",
        "phoneticHint": "/ˈtæk.si/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Van",
        "visualEmoji": "🚐",
        "visualOptions": [
          {
            "text": "Van",
            "emoji": "🚐",
            "label": "Van",
            "translationPt": "Van / Perua escolar"
          },
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
          }
        ],
        "options": [
          "Van",
          "Building",
          "Helmet",
          "Motorcycle"
        ],
        "correctAnswer": "Van",
        "explanation": "Exemplo prático: \"The white van transports students to school.\"",
        "phoneticHint": "/væn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e14",
        "type": "image-choice",
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
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          }
        ],
        "options": [
          "Tire",
          "Ambulance",
          "Traffic Light",
          "Tree"
        ],
        "correctAnswer": "Ambulance",
        "explanation": "Exemplo prático: \"The ambulance siren sounds in the street.\"",
        "phoneticHint": "/ˈæm.bjə.ləns/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Police Car",
        "visualEmoji": "🚓",
        "visualOptions": [
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          },
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
            "translationPt": "Banco na praça"
          }
        ],
        "options": [
          "Truck",
          "Police Car",
          "Pigeon",
          "Park Bench"
        ],
        "correctAnswer": "Police Car",
        "explanation": "Exemplo prático: \"The police car patrols our neighborhood.\"",
        "phoneticHint": "/pəˈliːs kɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fire Truck",
        "visualEmoji": "🚒",
        "visualOptions": [
          {
            "text": "Flower",
            "emoji": "🌻",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres na rua"
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
          "Flower",
          "Crosswalk",
          "Car",
          "Fire Truck"
        ],
        "correctAnswer": "Fire Truck",
        "explanation": "Exemplo prático: \"The red fire truck speeds down the avenue.\"",
        "phoneticHint": "/ˈfaɪ.ər trʌk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Helmet",
        "visualEmoji": "⛑️",
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
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          },
          {
            "text": "Street",
            "emoji": "🛣️",
            "label": "Street",
            "translationPt": "Rua asfaltada completa"
          }
        ],
        "options": [
          "Van",
          "Rain",
          "Helmet",
          "Street"
        ],
        "correctAnswer": "Helmet",
        "explanation": "Exemplo prático: \"Always wear a helmet on a motorcycle or bike.\"",
        "phoneticHint": "/ˈhel.mət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Tire",
        "visualEmoji": "🛞",
        "visualOptions": [
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
          },
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          }
        ],
        "options": [
          "Tire",
          "Bird",
          "Bicycle",
          "Umbrella"
        ],
        "correctAnswer": "Tire",
        "explanation": "Exemplo prático: \"The car has four rubber tires.\"",
        "phoneticHint": "/ˈtaɪ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e19",
        "type": "image-choice",
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
            "translationPt": "Placa de PARE na rua"
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
        "id": "w0-p10-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Fuel Pump",
        "visualEmoji": "⛽",
        "visualOptions": [
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
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
            "text": "Police Car",
            "emoji": "🚓",
            "label": "Police Car",
            "translationPt": "Viatura de polícia"
          }
        ],
        "options": [
          "Motorcycle",
          "Fuel Pump",
          "Ambulance",
          "Police Car"
        ],
        "correctAnswer": "Fuel Pump",
        "explanation": "Exemplo prático: \"Stop at the gas station fuel pump to refuel.\"",
        "phoneticHint": "/ˈfjuː.əl pʌmp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e21",
        "type": "image-choice",
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
            "translationPt": "Rua asfaltada completa"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          },
          {
            "text": "Park Bench",
            "emoji": "🪑",
            "label": "Park Bench",
            "translationPt": "Banco na praça"
          }
        ],
        "options": [
          "Pigeon",
          "Street",
          "Sun",
          "Park Bench"
        ],
        "correctAnswer": "Park Bench",
        "explanation": "Exemplo prático: \"Sit on the wooden park bench in the square.\"",
        "phoneticHint": "/pɑːrk bentʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bridge",
        "visualEmoji": "🌉",
        "visualOptions": [
          {
            "text": "Bridge",
            "emoji": "🌉",
            "label": "Bridge",
            "translationPt": "Ponte / Viaduto"
          },
          {
            "text": "Fire Truck",
            "emoji": "🚒",
            "label": "Fire Truck",
            "translationPt": "Caminhão de bombeiros"
          },
          {
            "text": "Car",
            "emoji": "🚗",
            "label": "Car",
            "translationPt": "Carro de passeio"
          },
          {
            "text": "Crosswalk",
            "emoji": "🚸",
            "label": "Crosswalk",
            "translationPt": "Faixa de pedestres na rua"
          }
        ],
        "options": [
          "Bridge",
          "Fire Truck",
          "Car",
          "Crosswalk"
        ],
        "correctAnswer": "Bridge",
        "explanation": "Exemplo prático: \"Cross the bridge over the city river.\"",
        "phoneticHint": "/brɪdʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Building",
        "visualEmoji": "🏢",
        "visualOptions": [
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
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
            "text": "Building",
            "emoji": "🏢",
            "label": "Building",
            "translationPt": "Prédio / Edifício"
          }
        ],
        "options": [
          "Umbrella",
          "Van",
          "Rain",
          "Building"
        ],
        "correctAnswer": "Building",
        "explanation": "Exemplo prático: \"Tall apartment buildings line the avenue.\"",
        "phoneticHint": "/ˈbɪl.dɪŋ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Tree",
        "visualEmoji": "🌳",
        "visualOptions": [
          {
            "text": "Bus Stop",
            "emoji": "🚏",
            "label": "Bus Stop",
            "translationPt": "Ponto de ônibus na calçada"
          },
          {
            "text": "Bus",
            "emoji": "🚌",
            "label": "Bus",
            "translationPt": "Ônibus urbano"
          },
          {
            "text": "Tree",
            "emoji": "🌳",
            "label": "Tree",
            "translationPt": "Árvore"
          },
          {
            "text": "Helmet",
            "emoji": "⛑️",
            "label": "Helmet",
            "translationPt": "Capacete de segurança"
          }
        ],
        "options": [
          "Bus Stop",
          "Bus",
          "Tree",
          "Helmet"
        ],
        "correctAnswer": "Tree",
        "explanation": "Exemplo prático: \"Green trees give shade along the sidewalk.\"",
        "phoneticHint": "/triː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Flower",
        "visualEmoji": "🌻",
        "visualOptions": [
          {
            "text": "Flower",
            "emoji": "🌻",
            "label": "Flower",
            "translationPt": "Flor"
          },
          {
            "text": "Taxi",
            "emoji": "🚕",
            "label": "Taxi",
            "translationPt": "Táxi"
          },
          {
            "text": "Truck",
            "emoji": "🚚",
            "label": "Truck",
            "translationPt": "Caminhão"
          },
          {
            "text": "Traffic Light",
            "emoji": "🚦",
            "label": "Traffic Light",
            "translationPt": "Semáforo / Sinal de trânsito"
          }
        ],
        "options": [
          "Flower",
          "Taxi",
          "Truck",
          "Traffic Light"
        ],
        "correctAnswer": "Flower",
        "explanation": "Exemplo prático: \"Colorful flowers bloom in the town square.\"",
        "phoneticHint": "/ˈflaʊ.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bird",
        "visualEmoji": "🐦",
        "visualOptions": [
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
          },
          {
            "text": "Ambulance",
            "emoji": "🚑",
            "label": "Ambulance",
            "translationPt": "Ambulância"
          }
        ],
        "options": [
          "Bicycle",
          "Bird",
          "Tire",
          "Ambulance"
        ],
        "correctAnswer": "Bird",
        "explanation": "Exemplo prático: \"A bird sings on the tree branch.\"",
        "phoneticHint": "/bɜːrd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pigeon",
        "visualEmoji": "🐦",
        "visualOptions": [
          {
            "text": "Streetlight",
            "emoji": "🏮",
            "label": "Streetlight",
            "translationPt": "Poste de iluminação pública"
          },
          {
            "text": "Pigeon",
            "emoji": "🐦",
            "label": "Pigeon",
            "translationPt": "Pombo na praça"
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
            "translationPt": "Placa de PARE na rua"
          }
        ],
        "options": [
          "Streetlight",
          "Pigeon",
          "Steering Wheel",
          "Stop Sign"
        ],
        "correctAnswer": "Pigeon",
        "explanation": "Exemplo prático: \"Gray pigeons walk around the square.\"",
        "phoneticHint": "/ˈpɪdʒ.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e28",
        "type": "image-choice",
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
            "text": "Fuel Pump",
            "emoji": "⛽",
            "label": "Fuel Pump",
            "translationPt": "Bomba de combustível (Posto)"
          },
          {
            "text": "Park Bench",
            "emoji": "🪑",
            "label": "Park Bench",
            "translationPt": "Banco na praça"
          },
          {
            "text": "Sun",
            "emoji": "☀️",
            "label": "Sun",
            "translationPt": "Sol"
          }
        ],
        "options": [
          "Police Car",
          "Fuel Pump",
          "Park Bench",
          "Sun"
        ],
        "correctAnswer": "Sun",
        "explanation": "Exemplo prático: \"The bright sun warms the neighborhood.\"",
        "phoneticHint": "/sʌn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p10-e29",
        "type": "image-choice",
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
            "text": "Building",
            "emoji": "🏢",
            "label": "Building",
            "translationPt": "Prédio / Edifício"
          },
          {
            "text": "Rain",
            "emoji": "🌧️",
            "label": "Rain",
            "translationPt": "Chuva"
          },
          {
            "text": "Flower",
            "emoji": "🌻",
            "label": "Flower",
            "translationPt": "Flor"
          }
        ],
        "options": [
          "Bridge",
          "Building",
          "Rain",
          "Flower"
        ],
        "correctAnswer": "Rain",
        "explanation": "Exemplo prático: \"Rain falls on the street.\"",
        "phoneticHint": "/reɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p10-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Umbrella",
        "visualEmoji": "☂️",
        "visualOptions": [
          {
            "text": "Umbrella",
            "emoji": "☂️",
            "label": "Umbrella",
            "translationPt": "Guarda-chuva"
          },
          {
            "text": "Motorcycle",
            "emoji": "🏍️",
            "label": "Motorcycle",
            "translationPt": "Moto / Motocicleta"
          },
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
            "translationPt": "Árvore"
          }
        ],
        "options": [
          "Umbrella",
          "Motorcycle",
          "Bird",
          "Tree"
        ],
        "correctAnswer": "Umbrella",
        "explanation": "Exemplo prático: \"Open your umbrella when walking in the rain.\"",
        "phoneticHint": "/ʌmˈbrel.ə/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p11",
    "worldId": 0,
    "phaseNumber": 11,
    "title": "Vocabulário 9 • Na Escola, Sala de Aula & Material Escolar",
    "subtitle": "Ambiente 9/12 • Sala de aula, quadro, carteira, professor, mochila, cadernos e esportes",
    "pedagogicalObjective": "Dominar todo o ambiente escolar: sala de aula completa, mobiliário, professor, materiais de estudo, laboratório e quadra.",
    "type": "lesson",
    "icon": "book",
    "cefrLevel": "A1",
    "theorySummary": [
      "Caminhando pela rua, chegamos à Escola (School) e entramos na Sala de Aula (Classroom)!",
      "Veja o Quadro Branco / Lousa na parede (Whiteboard), a Carteira Escolar (Student Desk), o Professor (Teacher), a Mochila (Backpack), o Livro (Book) e o Caderno (Notebook).",
      "Logo após concluir este 9º módulo de vocabulário, você fará o seu 3º Módulo Exclusivo de Pronomes (Reflexivos & Interrogativos)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p11-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "School",
        "visualEmoji": "🏫",
        "visualOptions": [
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
            "translationPt": "Prédio da escola"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          },
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          }
        ],
        "options": [
          "Envelope",
          "School",
          "Headphones",
          "Eraser"
        ],
        "correctAnswer": "School",
        "explanation": "Exemplo prático: \"Children arrive at the school in the morning.\"",
        "phoneticHint": "/skuːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Classroom",
        "visualEmoji": "🏫",
        "visualOptions": [
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila escolar"
          },
          {
            "text": "Classroom",
            "emoji": "🏫",
            "label": "Classroom",
            "translationPt": "Sala de aula completa"
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
          "Backpack",
          "Classroom",
          "Keyboard",
          "Notebook"
        ],
        "correctAnswer": "Classroom",
        "explanation": "Exemplo prático: \"Students sit at their desks in the classroom.\"",
        "phoneticHint": "/ˈklæs.ruːm/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Whiteboard",
        "visualEmoji": "📋",
        "visualOptions": [
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          },
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          },
          {
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro didático"
          },
          {
            "text": "Whiteboard",
            "emoji": "📋",
            "label": "Whiteboard",
            "translationPt": "Quadro branco / Lousa na parede"
          }
        ],
        "options": [
          "Globe",
          "Glue",
          "Book",
          "Whiteboard"
        ],
        "correctAnswer": "Whiteboard",
        "explanation": "Exemplo prático: \"The teacher writes English words on the whiteboard.\"",
        "phoneticHint": "/ˈwaɪt.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Student Desk",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          },
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
          }
        ],
        "options": [
          "Soccer Ball",
          "Pen",
          "Student Desk",
          "Scissors"
        ],
        "correctAnswer": "Student Desk",
        "explanation": "Exemplo prático: \"Open your notebook on the student desk.\"",
        "phoneticHint": "/ˈstuː.dənt desk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Teacher",
        "visualEmoji": "👩‍🏫",
        "visualOptions": [
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
          },
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Prédio da escola"
          }
        ],
        "options": [
          "Teacher",
          "Calculator",
          "Computer Mouse",
          "School"
        ],
        "correctAnswer": "Teacher",
        "explanation": "Exemplo prático: \"The teacher explains the lesson clearly.\"",
        "phoneticHint": "/ˈtiː.tʃər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e6",
        "type": "image-choice",
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
            "translationPt": "Sala de aula completa"
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
        "id": "w0-p11-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Book",
        "visualEmoji": "📘",
        "visualOptions": [
          {
            "text": "Pencil Sharpener",
            "emoji": "✏️",
            "label": "Pencil Sharpener",
            "translationPt": "Apontador de lápis"
          },
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
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Folha de papel"
          }
        ],
        "options": [
          "Pencil Sharpener",
          "Book",
          "Basketball",
          "Paper"
        ],
        "correctAnswer": "Book",
        "explanation": "Exemplo prático: \"Open your English book to page ten.\"",
        "phoneticHint": "/bʊk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Notebook",
        "visualEmoji": "📓",
        "visualOptions": [
          {
            "text": "Whiteboard",
            "emoji": "📋",
            "label": "Whiteboard",
            "translationPt": "Quadro branco / Lousa na parede"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel de pintura"
          },
          {
            "text": "Student Desk",
            "emoji": "🪑",
            "label": "Student Desk",
            "translationPt": "Carteira escolar (mesa e cadeira)"
          },
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          }
        ],
        "options": [
          "Whiteboard",
          "Paintbrush",
          "Student Desk",
          "Notebook"
        ],
        "correctAnswer": "Notebook",
        "explanation": "Exemplo prático: \"Write the vocabulary list in your spiral notebook.\"",
        "phoneticHint": "/ˈnoʊt.bʊk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pen",
        "visualEmoji": "🖊️",
        "visualOptions": [
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta esferográfica"
          },
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa geográfico"
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio de ciências"
          },
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha"
          }
        ],
        "options": [
          "Pen",
          "Map",
          "Microscope",
          "Medal"
        ],
        "correctAnswer": "Pen",
        "explanation": "Exemplo prático: \"Sign your name with a blue ballpoint pen.\"",
        "phoneticHint": "/pen/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pencil",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "School",
            "emoji": "🏫",
            "label": "School",
            "translationPt": "Prédio da escola"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
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
          "School",
          "Phone",
          "Teacher",
          "Pencil"
        ],
        "correctAnswer": "Pencil",
        "explanation": "Exemplo prático: \"Draw and write with a yellow wooden pencil.\"",
        "phoneticHint": "/ˈpen.səl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Eraser",
        "visualEmoji": "🧽",
        "visualOptions": [
          {
            "text": "Classroom",
            "emoji": "🏫",
            "label": "Classroom",
            "translationPt": "Sala de aula completa"
          },
          {
            "text": "Calculator",
            "emoji": "🧮",
            "label": "Calculator",
            "translationPt": "Calculadora"
          },
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          },
          {
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca escolar"
          }
        ],
        "options": [
          "Classroom",
          "Calculator",
          "Eraser",
          "Library"
        ],
        "correctAnswer": "Eraser",
        "explanation": "Exemplo prático: \"Correct the mistake using a rubber eraser.\"",
        "phoneticHint": "/ɪˈreɪ.sər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pencil Sharpener",
        "visualEmoji": "✏️",
        "visualOptions": [
          {
            "text": "Pencil Sharpener",
            "emoji": "✏️",
            "label": "Pencil Sharpener",
            "translationPt": "Apontador de lápis"
          },
          {
            "text": "Backpack",
            "emoji": "🎒",
            "label": "Backpack",
            "translationPt": "Mochila escolar"
          },
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
          }
        ],
        "options": [
          "Pencil Sharpener",
          "Backpack",
          "Basketball",
          "Book"
        ],
        "correctAnswer": "Pencil Sharpener",
        "explanation": "Exemplo prático: \"Sharpen the pencil tip with a pencil sharpener.\"",
        "phoneticHint": "/ˈpen.səl ˈʃɑːr.pən.ər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Ruler",
        "visualEmoji": "📏",
        "visualOptions": [
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
          }
        ],
        "options": [
          "Keyboard",
          "Ruler",
          "Headphones",
          "Notebook"
        ],
        "correctAnswer": "Ruler",
        "explanation": "Exemplo prático: \"Draw a straight line with a plastic ruler.\"",
        "phoneticHint": "/ˈruː.lər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Scissors",
        "visualEmoji": "✂️",
        "visualOptions": [
          {
            "text": "Whiteboard",
            "emoji": "📋",
            "label": "Whiteboard",
            "translationPt": "Quadro branco / Lousa na parede"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura escolar"
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
          "Whiteboard",
          "Scissors",
          "Teacher",
          "Pencil"
        ],
        "correctAnswer": "Scissors",
        "explanation": "Exemplo prático: \"Cut the paper along the line with scissors.\"",
        "phoneticHint": "/ˈsɪz.ərz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Glue",
        "visualEmoji": "🧴",
        "visualOptions": [
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel de pintura"
          },
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta esferográfica"
          },
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          }
        ],
        "options": [
          "Phone",
          "Paintbrush",
          "Pen",
          "Glue"
        ],
        "correctAnswer": "Glue",
        "explanation": "Exemplo prático: \"Use school glue to paste the picture.\"",
        "phoneticHint": "/ɡluː/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e16",
        "type": "image-choice",
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
            "text": "Student Desk",
            "emoji": "🪑",
            "label": "Student Desk",
            "translationPt": "Carteira escolar (mesa e cadeira)"
          },
          {
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Folha de papel"
          },
          {
            "text": "Soccer Ball",
            "emoji": "⚽",
            "label": "Soccer Ball",
            "translationPt": "Bola de futebol"
          }
        ],
        "options": [
          "Computer Mouse",
          "Student Desk",
          "Paper",
          "Soccer Ball"
        ],
        "correctAnswer": "Paper",
        "explanation": "Exemplo prático: \"Write your test answers on a sheet of paper.\"",
        "phoneticHint": "/ˈpeɪ.pər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Envelope",
        "visualEmoji": "✉️",
        "visualOptions": [
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope de papel"
          },
          {
            "text": "Pencil Sharpener",
            "emoji": "✏️",
            "label": "Pencil Sharpener",
            "translationPt": "Apontador de lápis"
          },
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio de ciências"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua escolar"
          }
        ],
        "options": [
          "Envelope",
          "Pencil Sharpener",
          "Microscope",
          "Ruler"
        ],
        "correctAnswer": "Envelope",
        "explanation": "Exemplo prático: \"Put the school letter inside a paper envelope.\"",
        "phoneticHint": "/ˈen.və.loʊp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Calculator",
        "visualEmoji": "🧮",
        "visualOptions": [
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          },
          {
            "text": "Scissors",
            "emoji": "✂️",
            "label": "Scissors",
            "translationPt": "Tesoura escolar"
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
          "Eraser",
          "Scissors",
          "Calculator",
          "Pencil"
        ],
        "correctAnswer": "Calculator",
        "explanation": "Exemplo prático: \"Check the math result on a pocket calculator.\"",
        "phoneticHint": "/ˈkæl.kjə.leɪ.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Globe",
        "visualEmoji": "🌍",
        "visualOptions": [
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha"
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          },
          {
            "text": "Glue",
            "emoji": "🧴",
            "label": "Glue",
            "translationPt": "Cola escolar"
          },
          {
            "text": "Teacher",
            "emoji": "👩‍🏫",
            "label": "Teacher",
            "translationPt": "Professor / Professora"
          }
        ],
        "options": [
          "Medal",
          "Globe",
          "Glue",
          "Teacher"
        ],
        "correctAnswer": "Globe",
        "explanation": "Exemplo prático: \"Find Brazil and the United States on the desk globe.\"",
        "phoneticHint": "/ɡloʊb/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Map",
        "visualEmoji": "🗺️",
        "visualOptions": [
          {
            "text": "Whiteboard",
            "emoji": "📋",
            "label": "Whiteboard",
            "translationPt": "Quadro branco / Lousa na parede"
          },
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
          }
        ],
        "options": [
          "Whiteboard",
          "Paper",
          "Notebook",
          "Map"
        ],
        "correctAnswer": "Map",
        "explanation": "Exemplo prático: \"Look at the world map in geography class.\"",
        "phoneticHint": "/mæp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Microscope",
        "visualEmoji": "🔬",
        "visualOptions": [
          {
            "text": "Microscope",
            "emoji": "🔬",
            "label": "Microscope",
            "translationPt": "Microscópio de ciências"
          },
          {
            "text": "Student Desk",
            "emoji": "🪑",
            "label": "Student Desk",
            "translationPt": "Carteira escolar (mesa e cadeira)"
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
            "translationPt": "Prédio da escola"
          }
        ],
        "options": [
          "Microscope",
          "Student Desk",
          "Envelope",
          "School"
        ],
        "correctAnswer": "Microscope",
        "explanation": "Exemplo prático: \"Look at cells through the laboratory microscope.\"",
        "phoneticHint": "/ˈmaɪ.krə.skoʊp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Paintbrush",
        "visualEmoji": "🖌️",
        "visualOptions": [
          {
            "text": "Classroom",
            "emoji": "🏫",
            "label": "Classroom",
            "translationPt": "Sala de aula completa"
          },
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
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel de pintura"
          }
        ],
        "options": [
          "Classroom",
          "Computer Mouse",
          "Calculator",
          "Paintbrush"
        ],
        "correctAnswer": "Paintbrush",
        "explanation": "Exemplo prático: \"Paint a picture using watercolors and a paintbrush.\"",
        "phoneticHint": "/ˈpeɪnt.brʌʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Phone",
        "visualEmoji": "📱",
        "visualOptions": [
          {
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca escolar"
          },
          {
            "text": "Globe",
            "emoji": "🌍",
            "label": "Globe",
            "translationPt": "Globo terrestre"
          },
          {
            "text": "Phone",
            "emoji": "📱",
            "label": "Phone",
            "translationPt": "Celular / Smartphone"
          },
          {
            "text": "Ruler",
            "emoji": "📏",
            "label": "Ruler",
            "translationPt": "Régua escolar"
          }
        ],
        "options": [
          "Library",
          "Globe",
          "Phone",
          "Ruler"
        ],
        "correctAnswer": "Phone",
        "explanation": "Exemplo prático: \"Use the Lingo World app on your phone to study.\"",
        "phoneticHint": "/foʊn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Headphones",
        "visualEmoji": "🎧",
        "visualOptions": [
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          },
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
          }
        ],
        "options": [
          "Headphones",
          "Eraser",
          "Backpack",
          "Map"
        ],
        "correctAnswer": "Headphones",
        "explanation": "Exemplo prático: \"Listen to the English pronunciation with headphones.\"",
        "phoneticHint": "/ˈhed.foʊnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Keyboard",
        "visualEmoji": "⌨️",
        "visualOptions": [
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
            "text": "Book",
            "emoji": "📘",
            "label": "Book",
            "translationPt": "Livro didático"
          },
          {
            "text": "Envelope",
            "emoji": "✉️",
            "label": "Envelope",
            "translationPt": "Envelope de papel"
          }
        ],
        "options": [
          "Basketball",
          "Keyboard",
          "Book",
          "Envelope"
        ],
        "correctAnswer": "Keyboard",
        "explanation": "Exemplo prático: \"Type your essay on the computer keyboard.\"",
        "phoneticHint": "/ˈkiː.bɔːrd/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Computer Mouse",
        "visualEmoji": "🖱️",
        "visualOptions": [
          {
            "text": "Pen",
            "emoji": "🖊️",
            "label": "Pen",
            "translationPt": "Caneta esferográfica"
          },
          {
            "text": "Computer Mouse",
            "emoji": "🖱️",
            "label": "Computer Mouse",
            "translationPt": "Mouse de computador"
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
            "translationPt": "Cola escolar"
          }
        ],
        "options": [
          "Pen",
          "Computer Mouse",
          "Scissors",
          "Glue"
        ],
        "correctAnswer": "Computer Mouse",
        "explanation": "Exemplo prático: \"Click the button using the computer mouse.\"",
        "phoneticHint": "/kəmˈpjuː.tər maʊs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e27",
        "type": "image-choice",
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
            "text": "Paper",
            "emoji": "📄",
            "label": "Paper",
            "translationPt": "Folha de papel"
          },
          {
            "text": "Pencil",
            "emoji": "✏️",
            "label": "Pencil",
            "translationPt": "Lápis de escrever"
          },
          {
            "text": "Library",
            "emoji": "📚",
            "label": "Library",
            "translationPt": "Biblioteca escolar"
          }
        ],
        "options": [
          "Pencil Sharpener",
          "Paper",
          "Pencil",
          "Library"
        ],
        "correctAnswer": "Library",
        "explanation": "Exemplo prático: \"Students read quietly in the school library.\"",
        "phoneticHint": "/ˈlaɪ.brer.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Soccer Ball",
        "visualEmoji": "⚽",
        "visualOptions": [
          {
            "text": "Map",
            "emoji": "🗺️",
            "label": "Map",
            "translationPt": "Mapa geográfico"
          },
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
            "translationPt": "Bola de futebol"
          },
          {
            "text": "Paintbrush",
            "emoji": "🖌️",
            "label": "Paintbrush",
            "translationPt": "Pincel de pintura"
          }
        ],
        "options": [
          "Map",
          "Phone",
          "Soccer Ball",
          "Paintbrush"
        ],
        "correctAnswer": "Soccer Ball",
        "explanation": "Exemplo prático: \"Play soccer in physical education class.\"",
        "phoneticHint": "/ˈsɑː.kər bɔːl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p11-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Basketball",
        "visualEmoji": "🏀",
        "visualOptions": [
          {
            "text": "Basketball",
            "emoji": "🏀",
            "label": "Basketball",
            "translationPt": "Bola de basquete"
          },
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
          }
        ],
        "options": [
          "Basketball",
          "Microscope",
          "Globe",
          "Keyboard"
        ],
        "correctAnswer": "Basketball",
        "explanation": "Exemplo prático: \"Shoot the orange basketball into the hoop.\"",
        "phoneticHint": "/ˈbæs.kɪt.bɔːl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p11-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Medal",
        "visualEmoji": "🥇",
        "visualOptions": [
          {
            "text": "Notebook",
            "emoji": "📓",
            "label": "Notebook",
            "translationPt": "Caderno espiral"
          },
          {
            "text": "Headphones",
            "emoji": "🎧",
            "label": "Headphones",
            "translationPt": "Fone de ouvido"
          },
          {
            "text": "Medal",
            "emoji": "🥇",
            "label": "Medal",
            "translationPt": "Medalha"
          },
          {
            "text": "Eraser",
            "emoji": "🧽",
            "label": "Eraser",
            "translationPt": "Borracha de apagar"
          }
        ],
        "options": [
          "Notebook",
          "Headphones",
          "Medal",
          "Eraser"
        ],
        "correctAnswer": "Medal",
        "explanation": "Exemplo prático: \"She won a gold medal in the school competition.\"",
        "phoneticHint": "/ˈmed.əl/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p12",
    "worldId": 0,
    "phaseNumber": 12,
    "title": "Lição de Pronomes III • Reflexivos & Interrogativos",
    "subtitle": "Módulo de Pronomes 3/4 (Após 9 de Vocabulário) • Pares Associativos + Voz da Professora",
    "pedagogicalObjective": "Dominar os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Itself, Ourselves, Themselves) e os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How).",
    "type": "chest",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Bem-vindo à 3ª Lição Exclusiva de Pronomes (após 9 módulos de vocabulário)!",
      "5º Passo: Aprendemos os Pronomes Reflexivos (Myself, Yourself, Himself, Herself, Ourselves, Themselves), que funcionam como um espelho.",
      "6º Passo: Aprendemos os Pronomes Interrogativos (Who, What, Where, When, Why, Whose, Which, How), usados para fazer perguntas!"
    ],
    "xpReward": 70,
    "gemsReward": 30,
    "exercises": [
      {
        "id": "w0-p12-pron-1",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Como em um Espelho - Parte 1)",
        "conceptHeader": "Funcionam igual a um espelho! Quando você olha para si mesmo ou faz algo sozinho, usamos \"-self\": \"Myself\" (Eu mesmo), \"Yourself\" (Você mesmo), \"Himself\" (Ele mesmo) e \"Herself\" (Ela mesma)!",
        "teacherAudioPt": "/audio/teacher/pronoun_5.wav",
        "prompt": "🤝 Conecte cada Pronome Reflexivo ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p12-b1-ref1",
            "en": "Myself",
            "emoji": "🪞",
            "phonetic": "/maɪˈself/",
            "pt": "Eu mesmo(a) / A mim mesmo",
            "tipPt": "Isso! \"I see myself in the mirror\" = \"Eu me vejo no espelho\"!"
          },
          {
            "id": "w0-p12-b1-ref2",
            "en": "Yourself",
            "emoji": "🫵",
            "phonetic": "/jʊrˈself/",
            "pt": "Você mesmo(a) / A si mesmo",
            "tipPt": "Muito bem! \"Yourself\" = \"Você mesmo\"!"
          },
          {
            "id": "w0-p12-b1-ref3",
            "en": "Himself",
            "emoji": "👦",
            "phonetic": "/hɪmˈself/",
            "pt": "Ele mesmo (para menino ou homem)",
            "tipPt": "Perfeito! \"Himself\" = \"Ele mesmo\"!"
          },
          {
            "id": "w0-p12-b1-ref4",
            "en": "Herself",
            "emoji": "👧",
            "phonetic": "/hɜːrˈself/",
            "pt": "Ela mesma (para menina ou mulher)",
            "tipPt": "Lindo! \"Herself\" = \"Ela mesma\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Myself (Eu mesmo), Yourself (Você mesmo), Himself (Ele mesmo), Herself (Ela mesma).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-pron-2",
        "type": "pair-match",
        "conceptTitle": "5º • Pronomes Reflexivos (Coisas e Plural - Parte 2)",
        "conceptHeader": "Para um aparelho ou animalzinho que faz algo sozinho, dizemos \"Itself\". E quando são várias pessoas, o final vira \"-selves\": \"Ourselves\" (Nós mesmos), \"Yourselves\" (Vocês mesmos) e \"Themselves\" (Eles mesmos)!",
        "teacherAudioPt": "/audio/teacher/pronoun_5.wav",
        "prompt": "🤝 Ligue os Pronomes Reflexivos de objetos e plural aos seus pares:",
        "pairs": [
          {
            "id": "w0-p12-b2-ref5",
            "en": "Itself",
            "emoji": "🚪",
            "phonetic": "/ɪtˈself/",
            "pt": "Ele(a) mesmo(a) / Sozinho (para coisas/animais)",
            "tipPt": "Isso! \"The door closed by itself\" = \"A porta fechou sozinha\"!"
          },
          {
            "id": "w0-p12-b2-ref6",
            "en": "Ourselves",
            "emoji": "👨‍👩‍👧",
            "phonetic": "/ɑːrˈselvz/",
            "pt": "Nós mesmos(as)",
            "tipPt": "Muito bem! \"Ourselves\" = \"Nós mesmos\"!"
          },
          {
            "id": "w0-p12-b2-ref7",
            "en": "Yourselves",
            "emoji": "👫",
            "phonetic": "/jʊrˈselvz/",
            "pt": "Vocês mesmos(as) (no plural)",
            "tipPt": "Perfeito! \"Yourselves\" = \"Vocês mesmos\"!"
          },
          {
            "id": "w0-p12-b2-ref8",
            "en": "Themselves",
            "emoji": "👥",
            "phonetic": "/ðəmˈselvz/",
            "pt": "Eles mesmos / Elas mesmas",
            "tipPt": "Excelente! Você dominou todos os Reflexivos!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Itself (Ele/Ela mesmo para coisas), Ourselves (Nós mesmos), Yourselves (Vocês mesmos), Themselves (Eles/Elas mesmas).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-pron-3",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Perguntas de Detetive - Parte 1)",
        "conceptHeader": "São as palavrinhas para fazer perguntas! \"Who?\" pergunta Quem (pessoa), \"What?\" pergunta O quê (coisa), \"Where?\" pergunta Onde (lugar) e \"When?\" pergunta Quando (hora ou dia)!",
        "teacherAudioPt": "/audio/teacher/pronoun_6.wav",
        "prompt": "🤝 Conecte cada Pronome Interrogativo à sua pergunta:",
        "pairs": [
          {
            "id": "w0-p12-b3-int1",
            "en": "Who?",
            "emoji": "🕵️",
            "phonetic": "/huː/",
            "pt": "Quem? (pergunta sobre pessoas)",
            "tipPt": "Exato! \"Who is the teacher?\" = \"Quem é a professora?\""
          },
          {
            "id": "w0-p12-b3-int2",
            "en": "What?",
            "emoji": "❓",
            "phonetic": "/wɑːt/",
            "pt": "O quê? / Qual? (pergunta sobre coisas)",
            "tipPt": "Muito bem! \"What is in the backpack?\" = \"O que tem na mochila?\""
          },
          {
            "id": "w0-p12-b3-int3",
            "en": "Where?",
            "emoji": "📍",
            "phonetic": "/wer/",
            "pt": "Onde? (pergunta sobre o lugar)",
            "tipPt": "Perfeito! \"Where is the school?\" = \"Onde fica a escola?\""
          },
          {
            "id": "w0-p12-b3-int4",
            "en": "When?",
            "emoji": "⏰",
            "phonetic": "/wen/",
            "pt": "Quando? (pergunta sobre tempo ou hora)",
            "tipPt": "Lindo! \"When\" pergunta \"Quando?\""
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Who? (Quem?), What? (O quê?), Where? (Onde?), When? (Quando?).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p12-pron-4",
        "type": "pair-match",
        "conceptTitle": "6º • Pronomes Interrogativos (Por quê, De quem, Qual e Como - Parte 2)",
        "conceptHeader": "Mais 4 palavrinhas curiosas: \"Why?\" pergunta Por quê (o motivo), \"Whose?\" pergunta De quem é (o dono), \"Which?\" pergunta Qual (escolhendo entre opções) e \"How?\" pergunta Como!",
        "teacherAudioPt": "/audio/teacher/pronoun_6.wav",
        "prompt": "🤝 Ligue os Pronomes Interrogativos Why, Whose, Which e How aos seus pares:",
        "pairs": [
          {
            "id": "w0-p12-b4-int5",
            "en": "Why?",
            "emoji": "🤔",
            "phonetic": "/waɪ/",
            "pt": "Por quê? (pergunta o motivo)",
            "tipPt": "Isso! \"Why?\" = \"Por quê?\""
          },
          {
            "id": "w0-p12-b4-int6",
            "en": "Whose?",
            "emoji": "🔑",
            "phonetic": "/huːz/",
            "pt": "De quem? (ex: Whose notebook is this?)",
            "tipPt": "Brilhante! \"Whose\" pergunta quem é o dono!"
          },
          {
            "id": "w0-p12-b4-int7",
            "en": "Which?",
            "emoji": "⚖️",
            "phonetic": "/wɪtʃ/",
            "pt": "Qual? (escolhendo entre opções)",
            "tipPt": "Muito bem! \"Which pen do you want?\" = \"Qual caneta você quer?\""
          },
          {
            "id": "w0-p12-b4-int8",
            "en": "How?",
            "emoji": "🛠️",
            "phonetic": "/haʊ/",
            "pt": "Como? (ex: How are you? = Como vai você?)",
            "tipPt": "Parabéns! Você aprendeu todos os Interrogativos!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Why? (Por quê?), Whose? (De quem?), Which? (Qual dentre opções?), How? (Como?).",
        "skillCategory": "grammar"
      }
    ]
  },
  {
    "id": "w0-p13",
    "worldId": 0,
    "phaseNumber": 13,
    "title": "Vocabulário 10 • No Supermercado, Hortifrúti, Padaria & Caixa",
    "subtitle": "Ambiente 10/12 • Carrinho, cesta, corredores, frutas, verduras, açougue, padaria e pagamento",
    "pedagogicalObjective": "Fazer compras completas no supermercado identificando equipamentos, alimentos básicos, hortifrúti, padaria e formas de pagamento.",
    "type": "lesson",
    "icon": "apple",
    "cefrLevel": "A1",
    "theorySummary": [
      "Saindo da escola, vamos ao Supermercado (Supermarket) fazer as compras da casa!",
      "Pegue o Carrinho de Compras (Shopping Cart) ou a Cesta (Basket) e passe pela Padaria (Bakery: Bread, Cheese Bread, Cake), pela Mercearia (Rice, Beans, Pasta, Coffee, Olive Oil) e pelo Açougue (Steak, Roast Chicken, Fish Fillet).",
      "No setor de Hortifrúti escolhemos as frutas e verduras mais frescas e, ao final, passamos no Caixa com Cartão de Crédito (Credit Card) ou Dinheiro (Money)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p13-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Supermarket",
        "visualEmoji": "🛒",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Corredor de supermercado completo"
          }
        ],
        "options": [
          "Bread",
          "Banana",
          "Beans",
          "Supermarket"
        ],
        "correctAnswer": "Supermarket",
        "explanation": "Exemplo prático: \"We buy food for the week at the supermarket.\"",
        "phoneticHint": "/ˈsuː.pərˌmɑːr.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e2",
        "type": "image-choice",
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
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Shopping Cart",
            "emoji": "🛒",
            "label": "Shopping Cart",
            "translationPt": "Carrinho de supermercado"
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
          "Broccoli",
          "Shopping Cart",
          "Tomato"
        ],
        "correctAnswer": "Shopping Cart",
        "explanation": "Exemplo prático: \"Push the metal shopping cart down the aisle.\"",
        "phoneticHint": "/ˈʃɑː.pɪŋ kɑːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Basket",
        "visualEmoji": "🧺",
        "visualOptions": [
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
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          }
        ],
        "options": [
          "Basket",
          "Garlic",
          "Watermelon",
          "Grape"
        ],
        "correctAnswer": "Basket",
        "explanation": "Exemplo prático: \"Carry a few items in a hand basket.\"",
        "phoneticHint": "/ˈbæs.kɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Bakery",
        "visualEmoji": "🥖",
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
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Balcão de padaria cheio de pães"
          },
          {
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Carne bovina / Bife"
          }
        ],
        "options": [
          "Pasta",
          "Strawberry",
          "Bakery",
          "Steak"
        ],
        "correctAnswer": "Bakery",
        "explanation": "Exemplo prático: \"Fresh warm bread is baked at the bakery.\"",
        "phoneticHint": "/ˈbeɪ.kər.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bread",
        "visualEmoji": "🍞",
        "visualOptions": [
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
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
          "Bread",
          "Carrot",
          "Coffee"
        ],
        "correctAnswer": "Bread",
        "explanation": "Exemplo prático: \"Buy a fresh loaf of bread at the bakery.\"",
        "phoneticHint": "/bred/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Cheese Bread",
        "visualEmoji": "🧀",
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
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango"
          },
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          }
        ],
        "options": [
          "Orange",
          "Onion",
          "Roast Chicken",
          "Cheese Bread"
        ],
        "correctAnswer": "Cheese Bread",
        "explanation": "Exemplo prático: \"Warm Brazilian cheese bread from the bakery.\"",
        "phoneticHint": "/ˈtʃiːz bred/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Cake",
        "visualEmoji": "🍰",
        "visualOptions": [
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo confeitado"
          },
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
            "text": "Credit Card",
            "emoji": "💳",
            "label": "Credit Card",
            "translationPt": "Cartão de crédito / débito"
          }
        ],
        "options": [
          "Cake",
          "Olive Oil",
          "Basket",
          "Credit Card"
        ],
        "correctAnswer": "Cake",
        "explanation": "Exemplo prático: \"Pick up a chocolate cake for the birthday.\"",
        "phoneticHint": "/keɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rice",
        "visualEmoji": "🍚",
        "visualOptions": [
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Balcão de padaria cheio de pães"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Corredor de supermercado completo"
          },
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
          }
        ],
        "options": [
          "Bakery",
          "Supermarket",
          "Shopping Cart",
          "Rice"
        ],
        "correctAnswer": "Rice",
        "explanation": "Exemplo prático: \"Put a bag of white rice in the shopping cart.\"",
        "phoneticHint": "/raɪs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Beans",
        "visualEmoji": "🫘",
        "visualOptions": [
          {
            "text": "Pineapple",
            "emoji": "🍍",
            "label": "Pineapple",
            "translationPt": "Abacaxi"
          },
          {
            "text": "Money",
            "emoji": "💵",
            "label": "Money",
            "translationPt": "Dinheiro em cédulas"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          }
        ],
        "options": [
          "Pineapple",
          "Money",
          "Beans",
          "Papaya"
        ],
        "correctAnswer": "Beans",
        "explanation": "Exemplo prático: \"Rice and beans are essentials on the grocery list.\"",
        "phoneticHint": "/biːnz/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e10",
        "type": "image-choice",
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
        "id": "w0-p13-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Steak",
        "visualEmoji": "🥩",
        "visualOptions": [
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
            "translationPt": "Carne bovina / Bife"
          },
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
          }
        ],
        "options": [
          "Cake",
          "Steak",
          "Orange",
          "Onion"
        ],
        "correctAnswer": "Steak",
        "explanation": "Exemplo prático: \"Choose fresh beef steak at the butcher counter.\"",
        "phoneticHint": "/steɪk/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Roast Chicken",
        "visualEmoji": "🍗",
        "visualOptions": [
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
            "text": "Basket",
            "emoji": "🧺",
            "label": "Basket",
            "translationPt": "Cesta de compras"
          },
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Balcão de padaria cheio de pães"
          }
        ],
        "options": [
          "Bread",
          "Roast Chicken",
          "Basket",
          "Bakery"
        ],
        "correctAnswer": "Roast Chicken",
        "explanation": "Exemplo prático: \"Roast chicken for Sunday family lunch.\"",
        "phoneticHint": "/ˈroʊst ˈtʃɪk.ɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fish Fillet",
        "visualEmoji": "🐟",
        "visualOptions": [
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          },
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe"
          }
        ],
        "options": [
          "Broccoli",
          "Rice",
          "Beans",
          "Fish Fillet"
        ],
        "correctAnswer": "Fish Fillet",
        "explanation": "Exemplo prático: \"Fresh fish fillet from the seafood counter.\"",
        "phoneticHint": "/ˈfɪʃ fɪˈleɪ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Banana",
        "visualEmoji": "🍌",
        "visualOptions": [
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
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          }
        ],
        "options": [
          "Watermelon",
          "Olive Oil",
          "Banana",
          "Tomato"
        ],
        "correctAnswer": "Banana",
        "explanation": "Exemplo prático: \"Pick a bunch of ripe yellow bananas.\"",
        "phoneticHint": "/bəˈnæn.ə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Orange",
        "visualEmoji": "🍊",
        "visualOptions": [
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
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
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão"
          }
        ],
        "options": [
          "Orange",
          "Papaya",
          "Pineapple",
          "Pasta"
        ],
        "correctAnswer": "Orange",
        "explanation": "Exemplo prático: \"Sweet oranges for making fresh juice.\"",
        "phoneticHint": "/ˈɔːr.ɪndʒ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Strawberry",
        "visualEmoji": "🍓",
        "visualOptions": [
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
          },
          {
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          }
        ],
        "options": [
          "Cake",
          "Carrot",
          "Strawberry",
          "Cheese Bread"
        ],
        "correctAnswer": "Strawberry",
        "explanation": "Exemplo prático: \"A box of red strawberries from the market.\"",
        "phoneticHint": "/ˈstrɔː.ber.i/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Grape",
        "visualEmoji": "🍇",
        "visualOptions": [
          {
            "text": "Coffee",
            "emoji": "☕",
            "label": "Coffee",
            "translationPt": "Café"
          },
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango"
          }
        ],
        "options": [
          "Coffee",
          "Grape",
          "Fish Fillet",
          "Roast Chicken"
        ],
        "correctAnswer": "Grape",
        "explanation": "Exemplo prático: \"Sweet purple grapes in the produce section.\"",
        "phoneticHint": "/ɡreɪp/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Watermelon",
        "visualEmoji": "🍉",
        "visualOptions": [
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Credit Card",
            "emoji": "💳",
            "label": "Credit Card",
            "translationPt": "Cartão de crédito / débito"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Corredor de supermercado completo"
          },
          {
            "text": "Watermelon",
            "emoji": "🍉",
            "label": "Watermelon",
            "translationPt": "Melancia"
          }
        ],
        "options": [
          "Banana",
          "Credit Card",
          "Supermarket",
          "Watermelon"
        ],
        "correctAnswer": "Watermelon",
        "explanation": "Exemplo prático: \"A large green watermelon with red flesh.\"",
        "phoneticHint": "/ˈwɔː.tərˌmel.ən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pineapple",
        "visualEmoji": "🍍",
        "visualOptions": [
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
            "translationPt": "Carne bovina / Bife"
          },
          {
            "text": "Money",
            "emoji": "💵",
            "label": "Money",
            "translationPt": "Dinheiro em cédulas"
          },
          {
            "text": "Shopping Cart",
            "emoji": "🛒",
            "label": "Shopping Cart",
            "translationPt": "Carrinho de supermercado"
          }
        ],
        "options": [
          "Pineapple",
          "Steak",
          "Money",
          "Shopping Cart"
        ],
        "correctAnswer": "Pineapple",
        "explanation": "Exemplo prático: \"Smell the ripe pineapple to see if it is sweet.\"",
        "phoneticHint": "/ˈpaɪnˌæp.əl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Papaya",
        "visualEmoji": "🧡",
        "visualOptions": [
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
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Balcão de padaria cheio de pães"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          }
        ],
        "options": [
          "Basket",
          "Garlic",
          "Bakery",
          "Papaya"
        ],
        "correctAnswer": "Papaya",
        "explanation": "Exemplo prático: \"Ripe papaya for tomorrow morning breakfast.\"",
        "phoneticHint": "/pəˈpaɪ.ə/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Tomato",
        "visualEmoji": "🍅",
        "visualOptions": [
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
          },
          {
            "text": "Pasta",
            "emoji": "🍝",
            "label": "Pasta",
            "translationPt": "Macarrão"
          }
        ],
        "options": [
          "Grape",
          "Strawberry",
          "Tomato",
          "Pasta"
        ],
        "correctAnswer": "Tomato",
        "explanation": "Exemplo prático: \"Red tomatoes for the salad and sauce.\"",
        "phoneticHint": "/təˈmeɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e22",
        "type": "image-choice",
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
            "text": "Cheese Bread",
            "emoji": "🧀",
            "label": "Cheese Bread",
            "translationPt": "Pão de queijo"
          },
          {
            "text": "Fish Fillet",
            "emoji": "🐟",
            "label": "Fish Fillet",
            "translationPt": "Filé de peixe"
          },
          {
            "text": "Cake",
            "emoji": "🍰",
            "label": "Cake",
            "translationPt": "Bolo confeitado"
          }
        ],
        "options": [
          "Potato",
          "Cheese Bread",
          "Fish Fillet",
          "Cake"
        ],
        "correctAnswer": "Potato",
        "explanation": "Exemplo prático: \"Wash and peel the yellow potatoes.\"",
        "phoneticHint": "/pəˈteɪ.toʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Carrot",
        "visualEmoji": "🥕",
        "visualOptions": [
          {
            "text": "Orange",
            "emoji": "🍊",
            "label": "Orange",
            "translationPt": "Laranja"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          },
          {
            "text": "Rice",
            "emoji": "🍚",
            "label": "Rice",
            "translationPt": "Arroz"
          },
          {
            "text": "Roast Chicken",
            "emoji": "🍗",
            "label": "Roast Chicken",
            "translationPt": "Frango"
          }
        ],
        "options": [
          "Orange",
          "Carrot",
          "Rice",
          "Roast Chicken"
        ],
        "correctAnswer": "Carrot",
        "explanation": "Exemplo prático: \"Crunchy orange carrots from the market.\"",
        "phoneticHint": "/ˈkær.ət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Onion",
        "visualEmoji": "🧅",
        "visualOptions": [
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Banana",
            "emoji": "🍌",
            "label": "Banana",
            "translationPt": "Banana"
          },
          {
            "text": "Beans",
            "emoji": "🫘",
            "label": "Beans",
            "translationPt": "Feijão"
          }
        ],
        "options": [
          "Bread",
          "Onion",
          "Banana",
          "Beans"
        ],
        "correctAnswer": "Onion",
        "explanation": "Exemplo prático: \"Yellow onions and garlic for seasoning.\"",
        "phoneticHint": "/ˈʌn.jən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Garlic",
        "visualEmoji": "🧄",
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
            "translationPt": "Cartão de crédito / débito"
          },
          {
            "text": "Tomato",
            "emoji": "🍅",
            "label": "Tomato",
            "translationPt": "Tomate"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          }
        ],
        "options": [
          "Watermelon",
          "Credit Card",
          "Tomato",
          "Garlic"
        ],
        "correctAnswer": "Garlic",
        "explanation": "Exemplo prático: \"A whole bulb of white garlic.\"",
        "phoneticHint": "/ˈɡɑːr.lɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Broccoli",
        "visualEmoji": "🥦",
        "visualOptions": [
          {
            "text": "Grape",
            "emoji": "🍇",
            "label": "Grape",
            "translationPt": "Uva"
          },
          {
            "text": "Supermarket",
            "emoji": "🛒",
            "label": "Supermarket",
            "translationPt": "Corredor de supermercado completo"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          }
        ],
        "options": [
          "Grape",
          "Supermarket",
          "Broccoli",
          "Potato"
        ],
        "correctAnswer": "Broccoli",
        "explanation": "Exemplo prático: \"Fresh green broccoli florets.\"",
        "phoneticHint": "/ˈbrɑː.kəl.i/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Coffee",
        "visualEmoji": "☕",
        "visualOptions": [
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
            "text": "Steak",
            "emoji": "🥩",
            "label": "Steak",
            "translationPt": "Carne bovina / Bife"
          },
          {
            "text": "Shopping Cart",
            "emoji": "🛒",
            "label": "Shopping Cart",
            "translationPt": "Carrinho de supermercado"
          }
        ],
        "options": [
          "Coffee",
          "Pineapple",
          "Steak",
          "Shopping Cart"
        ],
        "correctAnswer": "Coffee",
        "explanation": "Exemplo prático: \"Brazilians love fresh hot coffee every day.\"",
        "phoneticHint": "/ˈkɔː.fi/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Olive Oil",
        "visualEmoji": "🫒",
        "visualOptions": [
          {
            "text": "Onion",
            "emoji": "🧅",
            "label": "Onion",
            "translationPt": "Cebola"
          },
          {
            "text": "Papaya",
            "emoji": "🧡",
            "label": "Papaya",
            "translationPt": "Mamão"
          },
          {
            "text": "Olive Oil",
            "emoji": "🫒",
            "label": "Olive Oil",
            "translationPt": "Azeite de oliva"
          },
          {
            "text": "Carrot",
            "emoji": "🥕",
            "label": "Carrot",
            "translationPt": "Cenoura"
          }
        ],
        "options": [
          "Onion",
          "Papaya",
          "Olive Oil",
          "Carrot"
        ],
        "correctAnswer": "Olive Oil",
        "explanation": "Exemplo prático: \"A glass bottle of extra virgin olive oil.\"",
        "phoneticHint": "/ˈɑː.lɪv ɔɪl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p13-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Credit Card",
        "visualEmoji": "💳",
        "visualOptions": [
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
            "translationPt": "Cartão de crédito / débito"
          },
          {
            "text": "Bakery",
            "emoji": "🥖",
            "label": "Bakery",
            "translationPt": "Balcão de padaria cheio de pães"
          },
          {
            "text": "Garlic",
            "emoji": "🧄",
            "label": "Garlic",
            "translationPt": "Alho"
          }
        ],
        "options": [
          "Basket",
          "Credit Card",
          "Bakery",
          "Garlic"
        ],
        "correctAnswer": "Credit Card",
        "explanation": "Exemplo prático: \"Pay for the groceries with a credit card.\"",
        "phoneticHint": "/ˈkred.ɪt kɑːrd/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p13-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Money",
        "visualEmoji": "💵",
        "visualOptions": [
          {
            "text": "Potato",
            "emoji": "🥔",
            "label": "Potato",
            "translationPt": "Batata"
          },
          {
            "text": "Bread",
            "emoji": "🍞",
            "label": "Bread",
            "translationPt": "Pão"
          },
          {
            "text": "Broccoli",
            "emoji": "🥦",
            "label": "Broccoli",
            "translationPt": "Brócolis"
          },
          {
            "text": "Money",
            "emoji": "💵",
            "label": "Money",
            "translationPt": "Dinheiro em cédulas"
          }
        ],
        "options": [
          "Potato",
          "Bread",
          "Broccoli",
          "Money"
        ],
        "correctAnswer": "Money",
        "explanation": "Exemplo prático: \"Count your change in paper money and coins.\"",
        "phoneticHint": "/ˈmʌn.i/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p14",
    "worldId": 0,
    "phaseNumber": 14,
    "title": "Vocabulário 11 • Na Igreja, Música, Comunidade & Celebração",
    "subtitle": "Ambiente 11/12 • Igreja, sino, cruz, vitral, bancos, altar, Bíblia, vela, instrumentos e trajes",
    "pedagogicalObjective": "Reconhecer todos os elementos arquitetônicos, objetos litúrgicos, instrumentos musicais e vestimentas encontrados na igreja e em celebrações comunitárias.",
    "type": "lesson",
    "icon": "star",
    "cefrLevel": "A1",
    "theorySummary": [
      "Continuando nosso passeio pelos locais do cotidiano, visitamos a Igreja (Church)!",
      "Olhe para a arquitetura e o interior do templo: a Igreja (Church), o Sino da Torre (Church Bell), a Cruz (Cross), o Vitral Colorido na parede (Stained Glass), os Bancos da Igreja (Church Pew), o Altar (Altar), o Púlpito (Pulpit), a Bíblia (Bible) e a Vela (Candle).",
      "Na parte musical e comunitária vemos o Microfone, o Violão, o Piano, o Violino, a Flauta, o Terno, a Gravata e a Aliança!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p14-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Church",
        "visualEmoji": "⛪",
        "visualOptions": [
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Bible",
            "emoji": "📖",
            "label": "Bible",
            "translationPt": "Bíblia Sagrada aberta"
          },
          {
            "text": "Church",
            "emoji": "⛪",
            "label": "Church",
            "translationPt": "Igreja completa (fachada e torre)"
          },
          {
            "text": "Handshake",
            "emoji": "🤝",
            "label": "Handshake",
            "translationPt": "Aperto de mão / Cumprimento"
          }
        ],
        "options": [
          "Heart",
          "Bible",
          "Church",
          "Handshake"
        ],
        "correctAnswer": "Church",
        "explanation": "Exemplo prático: \"Families gather at the neighborhood church on Sunday.\"",
        "phoneticHint": "/tʃɜːrtʃ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e2",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Church Bell",
        "visualEmoji": "🔔",
        "visualOptions": [
          {
            "text": "Church Bell",
            "emoji": "🔔",
            "label": "Church Bell",
            "translationPt": "Sino no campanário da igreja"
          },
          {
            "text": "Necklace",
            "emoji": "📿",
            "label": "Necklace",
            "translationPt": "Colar / Correntinha"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Aliança / Anel de ouro"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata social"
          }
        ],
        "options": [
          "Church Bell",
          "Necklace",
          "Ring",
          "Necktie"
        ],
        "correctAnswer": "Church Bell",
        "explanation": "Exemplo prático: \"The bronze church bell rings in the tower.\"",
        "phoneticHint": "/tʃɜːrtʃ bel/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Cross",
        "visualEmoji": "✝️",
        "visualOptions": [
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão acústico"
          },
          {
            "text": "Cross",
            "emoji": "✝️",
            "label": "Cross",
            "translationPt": "Cruz"
          },
          {
            "text": "Gift",
            "emoji": "🎁",
            "label": "Gift",
            "translationPt": "Presente / Doação"
          }
        ],
        "options": [
          "Drum",
          "Guitar",
          "Cross",
          "Gift"
        ],
        "correctAnswer": "Cross",
        "explanation": "Exemplo prático: \"A wooden cross stands above the church altar.\"",
        "phoneticHint": "/krɔːs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Stained Glass",
        "visualEmoji": "🪟",
        "visualOptions": [
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
            "translationPt": "Vitral colorido na parede da igreja"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          }
        ],
        "options": [
          "Suit",
          "Stained Glass",
          "Star",
          "Violin"
        ],
        "correctAnswer": "Stained Glass",
        "explanation": "Exemplo prático: \"Sunlight shines through the colorful stained glass window.\"",
        "phoneticHint": "/steɪnd ɡlæs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Church Pew",
        "visualEmoji": "🪑",
        "visualOptions": [
          {
            "text": "Church",
            "emoji": "⛪",
            "label": "Church",
            "translationPt": "Igreja completa (fachada e torre)"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela acesa"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta musical"
          },
          {
            "text": "Church Pew",
            "emoji": "🪑",
            "label": "Church Pew",
            "translationPt": "Bancos de madeira na igreja"
          }
        ],
        "options": [
          "Church",
          "Candle",
          "Flute",
          "Church Pew"
        ],
        "correctAnswer": "Church Pew",
        "explanation": "Exemplo prático: \"The congregation sits on the long wooden church pews.\"",
        "phoneticHint": "/tʃɜːrtʃ pjuː/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e6",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Altar",
        "visualEmoji": "🕯️",
        "visualOptions": [
          {
            "text": "Altar",
            "emoji": "🕯️",
            "label": "Altar",
            "translationPt": "Altar completo na igreja"
          },
          {
            "text": "Church Bell",
            "emoji": "🔔",
            "label": "Church Bell",
            "translationPt": "Sino no campanário da igreja"
          },
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa dourada"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris no céu"
          }
        ],
        "options": [
          "Altar",
          "Church Bell",
          "Crown",
          "Rainbow"
        ],
        "correctAnswer": "Altar",
        "explanation": "Exemplo prático: \"White flowers and candles decorate the church altar.\"",
        "phoneticHint": "/ˈɔːl.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Pulpit",
        "visualEmoji": "📖",
        "visualOptions": [
          {
            "text": "Cross",
            "emoji": "✝️",
            "label": "Cross",
            "translationPt": "Cruz"
          },
          {
            "text": "Chandelier",
            "emoji": "💡",
            "label": "Chandelier",
            "translationPt": "Lustre aceso no teto da igreja"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          },
          {
            "text": "Pulpit",
            "emoji": "📖",
            "label": "Pulpit",
            "translationPt": "Púlpito / Tribuna no altar"
          }
        ],
        "options": [
          "Cross",
          "Chandelier",
          "Piano",
          "Pulpit"
        ],
        "correctAnswer": "Pulpit",
        "explanation": "Exemplo prático: \"The speaker reads from the Bible at the wooden pulpit.\"",
        "phoneticHint": "/ˈpʊl.pɪt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e8",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Bible",
        "visualEmoji": "📖",
        "visualOptions": [
          {
            "text": "Stained Glass",
            "emoji": "🪟",
            "label": "Stained Glass",
            "translationPt": "Vitral colorido na parede da igreja"
          },
          {
            "text": "Wheelchair",
            "emoji": "♿",
            "label": "Wheelchair",
            "translationPt": "Cadeira de rodas"
          },
          {
            "text": "Bible",
            "emoji": "📖",
            "label": "Bible",
            "translationPt": "Bíblia Sagrada aberta"
          },
          {
            "text": "Wine Glass",
            "emoji": "🍷",
            "label": "Wine Glass",
            "translationPt": "Cálice / Taça"
          }
        ],
        "options": [
          "Stained Glass",
          "Wheelchair",
          "Bible",
          "Wine Glass"
        ],
        "correctAnswer": "Bible",
        "explanation": "Exemplo prático: \"Read a chapter from the Holy Bible.\"",
        "phoneticHint": "/ˈbaɪ.bəl/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e9",
        "type": "image-choice",
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
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba branca da paz"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua no céu"
          },
          {
            "text": "Church Pew",
            "emoji": "🪑",
            "label": "Church Pew",
            "translationPt": "Bancos de madeira na igreja"
          }
        ],
        "options": [
          "Candle",
          "Dove",
          "Moon",
          "Church Pew"
        ],
        "correctAnswer": "Candle",
        "explanation": "Exemplo prático: \"A white wax candle burns softly on the altar.\"",
        "phoneticHint": "/ˈkæn.dəl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Microphone",
        "visualEmoji": "🎤",
        "visualOptions": [
          {
            "text": "Altar",
            "emoji": "🕯️",
            "label": "Altar",
            "translationPt": "Altar completo na igreja"
          },
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone no pedestal"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          },
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          }
        ],
        "options": [
          "Altar",
          "Microphone",
          "Star",
          "Violin"
        ],
        "correctAnswer": "Microphone",
        "explanation": "Exemplo prático: \"Speak clearly into the stand microphone.\"",
        "phoneticHint": "/ˈmaɪ.krə.foʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Guitar",
        "visualEmoji": "🎸",
        "visualOptions": [
          {
            "text": "Pulpit",
            "emoji": "📖",
            "label": "Pulpit",
            "translationPt": "Púlpito / Tribuna no altar"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão acústico"
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
            "translationPt": "Igreja completa (fachada e torre)"
          }
        ],
        "options": [
          "Pulpit",
          "Guitar",
          "Flute",
          "Church"
        ],
        "correctAnswer": "Guitar",
        "explanation": "Exemplo prático: \"He plays the acoustic guitar in the church choir.\"",
        "phoneticHint": "/ɡɪˈtɑːr/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Piano",
        "visualEmoji": "🎹",
        "visualOptions": [
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris no céu"
          },
          {
            "text": "Bible",
            "emoji": "📖",
            "label": "Bible",
            "translationPt": "Bíblia Sagrada aberta"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Aliança / Anel de ouro"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          }
        ],
        "options": [
          "Rainbow",
          "Bible",
          "Ring",
          "Piano"
        ],
        "correctAnswer": "Piano",
        "explanation": "Exemplo prático: \"She plays beautiful melodies on the piano.\"",
        "phoneticHint": "/piˈæn.oʊ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e13",
        "type": "image-choice",
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
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
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
          "Heart",
          "Drum",
          "Necktie"
        ],
        "correctAnswer": "Drum",
        "explanation": "Exemplo prático: \"The drummer keeps the rhythm on the drum.\"",
        "phoneticHint": "/drʌm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Violin",
        "visualEmoji": "🎻",
        "visualOptions": [
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
            "translationPt": "Microfone no pedestal"
          },
          {
            "text": "Wine Glass",
            "emoji": "🍷",
            "label": "Wine Glass",
            "translationPt": "Cálice / Taça"
          },
          {
            "text": "Altar",
            "emoji": "🕯️",
            "label": "Altar",
            "translationPt": "Altar completo na igreja"
          }
        ],
        "options": [
          "Violin",
          "Microphone",
          "Wine Glass",
          "Altar"
        ],
        "correctAnswer": "Violin",
        "explanation": "Exemplo prático: \"The wooden violin sounds warm and expressive.\"",
        "phoneticHint": "/ˌvaɪ.əˈlɪn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Flute",
        "visualEmoji": "🪈",
        "visualOptions": [
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua no céu"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão acústico"
          },
          {
            "text": "Flute",
            "emoji": "🪈",
            "label": "Flute",
            "translationPt": "Flauta musical"
          },
          {
            "text": "Pulpit",
            "emoji": "📖",
            "label": "Pulpit",
            "translationPt": "Púlpito / Tribuna no altar"
          }
        ],
        "options": [
          "Moon",
          "Guitar",
          "Flute",
          "Pulpit"
        ],
        "correctAnswer": "Flute",
        "explanation": "Exemplo prático: \"A silver flute plays a gentle melody.\"",
        "phoneticHint": "/fluːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dove",
        "visualEmoji": "🕊️",
        "visualOptions": [
          {
            "text": "Church Pew",
            "emoji": "🪑",
            "label": "Church Pew",
            "translationPt": "Bancos de madeira na igreja"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba branca da paz"
          },
          {
            "text": "Church Bell",
            "emoji": "🔔",
            "label": "Church Bell",
            "translationPt": "Sino no campanário da igreja"
          },
          {
            "text": "Cross",
            "emoji": "✝️",
            "label": "Cross",
            "translationPt": "Cruz"
          }
        ],
        "options": [
          "Church Pew",
          "Dove",
          "Church Bell",
          "Cross"
        ],
        "correctAnswer": "Dove",
        "explanation": "Exemplo prático: \"The white dove is a universal symbol of peace.\"",
        "phoneticHint": "/dʌv/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Heart",
        "visualEmoji": "❤️",
        "visualOptions": [
          {
            "text": "Stained Glass",
            "emoji": "🪟",
            "label": "Stained Glass",
            "translationPt": "Vitral colorido na parede da igreja"
          },
          {
            "text": "Chandelier",
            "emoji": "💡",
            "label": "Chandelier",
            "translationPt": "Lustre aceso no teto da igreja"
          },
          {
            "text": "Candle",
            "emoji": "🕯️",
            "label": "Candle",
            "translationPt": "Vela acesa"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          }
        ],
        "options": [
          "Stained Glass",
          "Chandelier",
          "Candle",
          "Heart"
        ],
        "correctAnswer": "Heart",
        "explanation": "Exemplo prático: \"Share kindness from the bottom of your heart.\"",
        "phoneticHint": "/hɑːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Crown",
        "visualEmoji": "👑",
        "visualOptions": [
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa dourada"
          },
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
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone no pedestal"
          }
        ],
        "options": [
          "Crown",
          "Suit",
          "Piano",
          "Microphone"
        ],
        "correctAnswer": "Crown",
        "explanation": "Exemplo prático: \"A golden crown with shining jewels.\"",
        "phoneticHint": "/kraʊn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Star",
        "visualEmoji": "⭐",
        "visualOptions": [
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
            "translationPt": "Cadeira de rodas"
          },
          {
            "text": "Handshake",
            "emoji": "🤝",
            "label": "Handshake",
            "translationPt": "Aperto de mão / Cumprimento"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          }
        ],
        "options": [
          "Drum",
          "Wheelchair",
          "Handshake",
          "Star"
        ],
        "correctAnswer": "Star",
        "explanation": "Exemplo prático: \"A bright star shines in the night sky.\"",
        "phoneticHint": "/stɑːr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e20",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Gift",
        "visualEmoji": "🎁",
        "visualOptions": [
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba branca da paz"
          },
          {
            "text": "Guitar",
            "emoji": "🎸",
            "label": "Guitar",
            "translationPt": "Violão acústico"
          },
          {
            "text": "Gift",
            "emoji": "🎁",
            "label": "Gift",
            "translationPt": "Presente / Doação"
          },
          {
            "text": "Altar",
            "emoji": "🕯️",
            "label": "Altar",
            "translationPt": "Altar completo na igreja"
          }
        ],
        "options": [
          "Dove",
          "Guitar",
          "Gift",
          "Altar"
        ],
        "correctAnswer": "Gift",
        "explanation": "Exemplo prático: \"They prepared gift boxes for charity.\"",
        "phoneticHint": "/ɡɪft/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Chandelier",
        "visualEmoji": "💡",
        "visualOptions": [
          {
            "text": "Chandelier",
            "emoji": "💡",
            "label": "Chandelier",
            "translationPt": "Lustre aceso no teto da igreja"
          },
          {
            "text": "Stained Glass",
            "emoji": "🪟",
            "label": "Stained Glass",
            "translationPt": "Vitral colorido na parede da igreja"
          },
          {
            "text": "Pulpit",
            "emoji": "📖",
            "label": "Pulpit",
            "translationPt": "Púlpito / Tribuna no altar"
          },
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua no céu"
          }
        ],
        "options": [
          "Chandelier",
          "Stained Glass",
          "Pulpit",
          "Moon"
        ],
        "correctAnswer": "Chandelier",
        "explanation": "Exemplo prático: \"A crystal chandelier hangs from the church ceiling.\"",
        "phoneticHint": "/ˌʃæn.dəˈlɪr/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Suit",
        "visualEmoji": "🤵",
        "visualOptions": [
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
          },
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
            "translationPt": "Igreja completa (fachada e torre)"
          }
        ],
        "options": [
          "Flute",
          "Suit",
          "Crown",
          "Church"
        ],
        "correctAnswer": "Suit",
        "explanation": "Exemplo prático: \"He wore a navy blue suit to the ceremony.\"",
        "phoneticHint": "/suːt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e23",
        "type": "image-choice",
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
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata social"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris no céu"
          },
          {
            "text": "Church Bell",
            "emoji": "🔔",
            "label": "Church Bell",
            "translationPt": "Sino no campanário da igreja"
          }
        ],
        "options": [
          "Cross",
          "Necktie",
          "Rainbow",
          "Church Bell"
        ],
        "correctAnswer": "Necktie",
        "explanation": "Exemplo prático: \"Tie a silk necktie around your collar.\"",
        "phoneticHint": "/ˈnek.taɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e24",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ring",
        "visualEmoji": "💍",
        "visualOptions": [
          {
            "text": "Gift",
            "emoji": "🎁",
            "label": "Gift",
            "translationPt": "Presente / Doação"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          },
          {
            "text": "Handshake",
            "emoji": "🤝",
            "label": "Handshake",
            "translationPt": "Aperto de mão / Cumprimento"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Aliança / Anel de ouro"
          }
        ],
        "options": [
          "Gift",
          "Heart",
          "Handshake",
          "Ring"
        ],
        "correctAnswer": "Ring",
        "explanation": "Exemplo prático: \"The couple exchanged gold wedding rings at the altar.\"",
        "phoneticHint": "/rɪŋ/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e25",
        "type": "image-choice",
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
            "text": "Bible",
            "emoji": "📖",
            "label": "Bible",
            "translationPt": "Bíblia Sagrada aberta"
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
            "translationPt": "Bancos de madeira na igreja"
          }
        ],
        "options": [
          "Candle",
          "Bible",
          "Necklace",
          "Church Pew"
        ],
        "correctAnswer": "Necklace",
        "explanation": "Exemplo prático: \"She wears a delicate gold necklace.\"",
        "phoneticHint": "/ˈnek.lɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Wine Glass",
        "visualEmoji": "🍷",
        "visualOptions": [
          {
            "text": "Wine Glass",
            "emoji": "🍷",
            "label": "Wine Glass",
            "translationPt": "Cálice / Taça"
          },
          {
            "text": "Crown",
            "emoji": "👑",
            "label": "Crown",
            "translationPt": "Coroa dourada"
          },
          {
            "text": "Drum",
            "emoji": "🥁",
            "label": "Drum",
            "translationPt": "Bateria / Tambor"
          },
          {
            "text": "Dove",
            "emoji": "🕊️",
            "label": "Dove",
            "translationPt": "Pomba branca da paz"
          }
        ],
        "options": [
          "Wine Glass",
          "Crown",
          "Drum",
          "Dove"
        ],
        "correctAnswer": "Wine Glass",
        "explanation": "Exemplo prático: \"A golden chalice and glass goblet on the table.\"",
        "phoneticHint": "/waɪn ɡlæs/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Wheelchair",
        "visualEmoji": "♿",
        "visualOptions": [
          {
            "text": "Violin",
            "emoji": "🎻",
            "label": "Violin",
            "translationPt": "Violino"
          },
          {
            "text": "Suit",
            "emoji": "🤵",
            "label": "Suit",
            "translationPt": "Terno / Roupa social"
          },
          {
            "text": "Wheelchair",
            "emoji": "♿",
            "label": "Wheelchair",
            "translationPt": "Cadeira de rodas"
          },
          {
            "text": "Star",
            "emoji": "⭐",
            "label": "Star",
            "translationPt": "Estrela"
          }
        ],
        "options": [
          "Violin",
          "Suit",
          "Wheelchair",
          "Star"
        ],
        "correctAnswer": "Wheelchair",
        "explanation": "Exemplo prático: \"The church entrance has a ramp for wheelchairs.\"",
        "phoneticHint": "/ˈwiːl.tʃer/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Handshake",
        "visualEmoji": "🤝",
        "visualOptions": [
          {
            "text": "Microphone",
            "emoji": "🎤",
            "label": "Microphone",
            "translationPt": "Microfone no pedestal"
          },
          {
            "text": "Handshake",
            "emoji": "🤝",
            "label": "Handshake",
            "translationPt": "Aperto de mão / Cumprimento"
          },
          {
            "text": "Piano",
            "emoji": "🎹",
            "label": "Piano",
            "translationPt": "Piano / Teclado musical"
          },
          {
            "text": "Chandelier",
            "emoji": "💡",
            "label": "Chandelier",
            "translationPt": "Lustre aceso no teto da igreja"
          }
        ],
        "options": [
          "Microphone",
          "Handshake",
          "Piano",
          "Chandelier"
        ],
        "correctAnswer": "Handshake",
        "explanation": "Exemplo prático: \"Greet your neighbors with a warm handshake.\"",
        "phoneticHint": "/ˈhænd.ʃeɪk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p14-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Rainbow",
        "visualEmoji": "🌈",
        "visualOptions": [
          {
            "text": "Gift",
            "emoji": "🎁",
            "label": "Gift",
            "translationPt": "Presente / Doação"
          },
          {
            "text": "Necktie",
            "emoji": "👔",
            "label": "Necktie",
            "translationPt": "Gravata social"
          },
          {
            "text": "Ring",
            "emoji": "💍",
            "label": "Ring",
            "translationPt": "Aliança / Anel de ouro"
          },
          {
            "text": "Rainbow",
            "emoji": "🌈",
            "label": "Rainbow",
            "translationPt": "Arco-íris no céu"
          }
        ],
        "options": [
          "Gift",
          "Necktie",
          "Ring",
          "Rainbow"
        ],
        "correctAnswer": "Rainbow",
        "explanation": "Exemplo prático: \"A colorful rainbow appeared after the rain.\"",
        "phoneticHint": "/ˈreɪn.boʊ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p14-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Moon",
        "visualEmoji": "🌙",
        "visualOptions": [
          {
            "text": "Moon",
            "emoji": "🌙",
            "label": "Moon",
            "translationPt": "Lua no céu"
          },
          {
            "text": "Heart",
            "emoji": "❤️",
            "label": "Heart",
            "translationPt": "Coração"
          },
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
          }
        ],
        "options": [
          "Moon",
          "Heart",
          "Wine Glass",
          "Necklace"
        ],
        "correctAnswer": "Moon",
        "explanation": "Exemplo prático: \"The full moon shines after the evening service.\"",
        "phoneticHint": "/muːn/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p15",
    "worldId": 0,
    "phaseNumber": 15,
    "title": "Vocabulário 12 • Restaurante, Hospital, Banco, Segurança & Viagem",
    "subtitle": "Ambiente 12/12 • Locais públicos, profissões, saúde, finanças, lazer e aeroporto",
    "pedagogicalObjective": "Dominar restaurantes, hospitais, farmácias, bancos, delegacia, bombeiros, hotel, cinema e aeroporto.",
    "type": "lesson",
    "icon": "car",
    "cefrLevel": "A1",
    "theorySummary": [
      "Chegamos ao 12º módulo de vocabulário da nossa Jornada pelo Cotidiano!",
      "Aqui visitamos o Restaurante (Restaurant, Chef, Pizza, Hamburger, Ice Cream), o Hospital (Hospital, Doctor, Nurse, Dentist), a Farmácia (Pharmacy), o Banco (Bank, Coin) e a Segurança Pública (Police Station, Police Officer, Fire Station, Firefighter).",
      "Logo após concluir este 12º módulo de vocabulário, você fará o 4º e último Módulo Exclusivo de Pronomes (Indefinidos & Relativos)!"
    ],
    "xpReward": 50,
    "gemsReward": 20,
    "exercises": [
      {
        "id": "w0-p15-e1",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Restaurant",
        "visualEmoji": "🍽️",
        "visualOptions": [
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante completo"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Prédio do hospital"
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
          "Restaurant",
          "Hospital",
          "Helicopter",
          "Hotel"
        ],
        "correctAnswer": "Restaurant",
        "explanation": "Exemplo prático: \"We had dinner together at an Italian restaurant.\"",
        "phoneticHint": "/ˈres.tər.ɑːnt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e2",
        "type": "image-choice",
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
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de conquista"
          }
        ],
        "options": [
          "Nurse",
          "Train",
          "Chef",
          "Trophy"
        ],
        "correctAnswer": "Chef",
        "explanation": "Exemplo prático: \"The restaurant chef prepares delicious meals.\"",
        "phoneticHint": "/ʃef/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e3",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Pizza",
        "visualEmoji": "🍕",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto com avião"
          },
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          }
        ],
        "options": [
          "Doctor",
          "Pizza",
          "Airport",
          "Dentist"
        ],
        "correctAnswer": "Pizza",
        "explanation": "Exemplo prático: \"Order a hot cheese pizza at the restaurant.\"",
        "phoneticHint": "/ˈpiːt.sə/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e4",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hamburger",
        "visualEmoji": "🍔",
        "visualOptions": [
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
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
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          }
        ],
        "options": [
          "Ship",
          "Subway",
          "Suitcase",
          "Hamburger"
        ],
        "correctAnswer": "Hamburger",
        "explanation": "Exemplo prático: \"A juicy hamburger with lettuce and cheese.\"",
        "phoneticHint": "/ˈhæmˌbɜːr.ɡər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e5",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "French Fries",
        "visualEmoji": "🍟",
        "visualOptions": [
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Coin",
            "emoji": "🪙",
            "label": "Coin",
            "translationPt": "Moeda"
          },
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Quartel do Corpo de Bombeiros"
          }
        ],
        "options": [
          "French Fries",
          "Firefighter",
          "Coin",
          "Fire Station"
        ],
        "correctAnswer": "French Fries",
        "explanation": "Exemplo prático: \"Crispy golden French fries with ketchup.\"",
        "phoneticHint": "/ˈfrentʃ fraɪz/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e6",
        "type": "image-choice",
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
            "text": "Pharmacy",
            "emoji": "💊",
            "label": "Pharmacy",
            "translationPt": "Farmácia / Drogaria"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante completo"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Chef",
          "Pharmacy",
          "Restaurant",
          "Ice Cream"
        ],
        "correctAnswer": "Ice Cream",
        "explanation": "Exemplo prático: \"Cold chocolate and vanilla ice cream.\"",
        "phoneticHint": "/ˈaɪs kriːm/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e7",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Hospital",
        "visualEmoji": "🏥",
        "visualOptions": [
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Agência bancária"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Prédio do hospital"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          }
        ],
        "options": [
          "Bank",
          "Pizza",
          "Hospital",
          "Police Station"
        ],
        "correctAnswer": "Hospital",
        "explanation": "Exemplo prático: \"Doctors and nurses work at the city hospital.\"",
        "phoneticHint": "/ˈhɑː.spɪ.təl/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e8",
        "type": "image-choice",
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
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião comercial"
          }
        ],
        "options": [
          "Doctor",
          "Hamburger",
          "Police Officer",
          "Airplane"
        ],
        "correctAnswer": "Doctor",
        "explanation": "Exemplo prático: \"The doctor examines the patient with a stethoscope.\"",
        "phoneticHint": "/ˈdɑːk.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e9",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Nurse",
        "visualEmoji": "👩‍⚕️",
        "visualOptions": [
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          },
          {
            "text": "Movie Theater",
            "emoji": "🍿",
            "label": "Movie Theater",
            "translationPt": "Sala de cinema"
          },
          {
            "text": "Passport",
            "emoji": "🛂",
            "label": "Passport",
            "translationPt": "Passaporte de viagem"
          }
        ],
        "options": [
          "French Fries",
          "Nurse",
          "Movie Theater",
          "Passport"
        ],
        "correctAnswer": "Nurse",
        "explanation": "Exemplo prático: \"The hospital nurse takes care of everyone.\"",
        "phoneticHint": "/nɜːrs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e10",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Dentist",
        "visualEmoji": "🦷",
        "visualOptions": [
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
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Pilot",
          "Dentist",
          "Popcorn",
          "Ice Cream"
        ],
        "correctAnswer": "Dentist",
        "explanation": "Exemplo prático: \"Visit the dentist twice a year.\"",
        "phoneticHint": "/ˈden.tɪst/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e11",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pharmacy",
        "visualEmoji": "💊",
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
            "text": "Chef",
            "emoji": "👨‍🍳",
            "label": "Chef",
            "translationPt": "Chef de cozinha / Cozinheiro"
          },
          {
            "text": "Pharmacy",
            "emoji": "💊",
            "label": "Pharmacy",
            "translationPt": "Farmácia / Drogaria"
          }
        ],
        "options": [
          "Fire Station",
          "Firefighter",
          "Chef",
          "Pharmacy"
        ],
        "correctAnswer": "Pharmacy",
        "explanation": "Exemplo prático: \"Buy medicine and vitamins at the pharmacy.\"",
        "phoneticHint": "/ˈfɑːr.mə.si/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e12",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Bank",
        "visualEmoji": "🏦",
        "visualOptions": [
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô subterrâneo"
          },
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante completo"
          },
          {
            "text": "Bank",
            "emoji": "🏦",
            "label": "Bank",
            "translationPt": "Banco / Agência bancária"
          },
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem com rodinhas"
          }
        ],
        "options": [
          "Subway",
          "Restaurant",
          "Bank",
          "Suitcase"
        ],
        "correctAnswer": "Bank",
        "explanation": "Exemplo prático: \"Deposit money safely at the bank.\"",
        "phoneticHint": "/bæŋk/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e13",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Coin",
        "visualEmoji": "🪙",
        "visualOptions": [
          {
            "text": "Coin",
            "emoji": "🪙",
            "label": "Coin",
            "translationPt": "Moeda"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          },
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Prédio do hospital"
          }
        ],
        "options": [
          "Coin",
          "Nurse",
          "Hamburger",
          "Hospital"
        ],
        "correctAnswer": "Coin",
        "explanation": "Exemplo prático: \"Keep the shiny metal coins in your wallet.\"",
        "phoneticHint": "/kɔɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e14",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Police Station",
        "visualEmoji": "🚓",
        "visualOptions": [
          {
            "text": "Doctor",
            "emoji": "👨‍⚕️",
            "label": "Doctor",
            "translationPt": "Médico / Médica"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto com avião"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          },
          {
            "text": "Dentist",
            "emoji": "🦷",
            "label": "Dentist",
            "translationPt": "Dentista"
          }
        ],
        "options": [
          "Doctor",
          "Airport",
          "Police Station",
          "Dentist"
        ],
        "correctAnswer": "Police Station",
        "explanation": "Exemplo prático: \"Report the lost document at the police station.\"",
        "phoneticHint": "/pəˈliːs ˈsteɪ.ʃən/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e15",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Police Officer",
        "visualEmoji": "👮",
        "visualOptions": [
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
            "text": "Passport",
            "emoji": "🛂",
            "label": "Passport",
            "translationPt": "Passaporte de viagem"
          },
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          }
        ],
        "options": [
          "Pharmacy",
          "Police Officer",
          "Passport",
          "Pizza"
        ],
        "correctAnswer": "Police Officer",
        "explanation": "Exemplo prático: \"The police officer helps citizens in the city.\"",
        "phoneticHint": "/pəˈliːs ˌɔː.fɪ.sər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e16",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Fire Station",
        "visualEmoji": "🚒",
        "visualOptions": [
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          },
          {
            "text": "French Fries",
            "emoji": "🍟",
            "label": "French Fries",
            "translationPt": "Batata frita"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
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
          "French Fries",
          "Ship",
          "Fire Station"
        ],
        "correctAnswer": "Fire Station",
        "explanation": "Exemplo prático: \"Fire trucks are parked inside the fire station.\"",
        "phoneticHint": "/ˈfaɪ.ər ˈsteɪ.ʃən/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e17",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Firefighter",
        "visualEmoji": "🧑‍🚒",
        "visualOptions": [
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          },
          {
            "text": "Coin",
            "emoji": "🪙",
            "label": "Coin",
            "translationPt": "Moeda"
          },
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          }
        ],
        "options": [
          "Firefighter",
          "Popcorn",
          "Coin",
          "Ice Cream"
        ],
        "correctAnswer": "Firefighter",
        "explanation": "Exemplo prático: \"The brave firefighter wears a yellow helmet.\"",
        "phoneticHint": "/ˈfaɪ.ərˌfaɪ.tər/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e18",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Hotel",
        "visualEmoji": "🏨",
        "visualOptions": [
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
            "translationPt": "Sala de cinema"
          },
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
          }
        ],
        "options": [
          "Police Station",
          "Movie Theater",
          "Bank",
          "Hotel"
        ],
        "correctAnswer": "Hotel",
        "explanation": "Exemplo prático: \"We stayed at a comfortable hotel during vacation.\"",
        "phoneticHint": "/hoʊˈtel/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e19",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Suitcase",
        "visualEmoji": "🧳",
        "visualOptions": [
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
          },
          {
            "text": "Train",
            "emoji": "🚆",
            "label": "Train",
            "translationPt": "Trem ferroviário"
          }
        ],
        "options": [
          "Trophy",
          "Helicopter",
          "Suitcase",
          "Train"
        ],
        "correctAnswer": "Suitcase",
        "explanation": "Exemplo prático: \"Pack your clothes inside the rolling suitcase.\"",
        "phoneticHint": "/ˈsuːt.keɪs/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e20",
        "type": "image-choice",
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
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
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
          }
        ],
        "options": [
          "Passport",
          "Police Officer",
          "Doctor",
          "Dentist"
        ],
        "correctAnswer": "Passport",
        "explanation": "Exemplo prático: \"Show your passport at the international airport.\"",
        "phoneticHint": "/ˈpæs.pɔːrt/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e21",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Airport",
        "visualEmoji": "🛫",
        "visualOptions": [
          {
            "text": "Pizza",
            "emoji": "🍕",
            "label": "Pizza",
            "translationPt": "Pizza"
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto com avião"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Subway",
            "emoji": "🚇",
            "label": "Subway",
            "translationPt": "Metrô subterrâneo"
          }
        ],
        "options": [
          "Pizza",
          "Airport",
          "Ship",
          "Subway"
        ],
        "correctAnswer": "Airport",
        "explanation": "Exemplo prático: \"Arrive at the airport two hours before your flight.\"",
        "phoneticHint": "/ˈer.pɔːrt/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e22",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Airplane",
        "visualEmoji": "✈️",
        "visualOptions": [
          {
            "text": "Ice Cream",
            "emoji": "🍦",
            "label": "Ice Cream",
            "translationPt": "Sorvete"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião comercial"
          },
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
          }
        ],
        "options": [
          "Ice Cream",
          "Airplane",
          "Hotel",
          "French Fries"
        ],
        "correctAnswer": "Airplane",
        "explanation": "Exemplo prático: \"The passenger airplane takes off from the runway.\"",
        "phoneticHint": "/ˈer.pleɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e23",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Pilot",
        "visualEmoji": "👨‍✈️",
        "visualOptions": [
          {
            "text": "Restaurant",
            "emoji": "🍽️",
            "label": "Restaurant",
            "translationPt": "Restaurante completo"
          },
          {
            "text": "Firefighter",
            "emoji": "🧑‍🚒",
            "label": "Firefighter",
            "translationPt": "Bombeiro"
          },
          {
            "text": "Fire Station",
            "emoji": "🚒",
            "label": "Fire Station",
            "translationPt": "Quartel do Corpo de Bombeiros"
          },
          {
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          }
        ],
        "options": [
          "Restaurant",
          "Firefighter",
          "Fire Station",
          "Pilot"
        ],
        "correctAnswer": "Pilot",
        "explanation": "Exemplo prático: \"The airline pilot greets the passengers.\"",
        "phoneticHint": "/ˈpaɪ.lət/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e24",
        "type": "image-choice",
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
            "text": "Hospital",
            "emoji": "🏥",
            "label": "Hospital",
            "translationPt": "Prédio do hospital"
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
          }
        ],
        "options": [
          "Hamburger",
          "Hospital",
          "Helicopter",
          "Bank"
        ],
        "correctAnswer": "Helicopter",
        "explanation": "Exemplo prático: \"A helicopter flies above the city buildings.\"",
        "phoneticHint": "/ˈhel.ɪˌkɑːp.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e25",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Train",
        "visualEmoji": "🚆",
        "visualOptions": [
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
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de conquista"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          }
        ],
        "options": [
          "Train",
          "Chef",
          "Trophy",
          "Nurse"
        ],
        "correctAnswer": "Train",
        "explanation": "Exemplo prático: \"The express train travels between cities.\"",
        "phoneticHint": "/treɪn/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e26",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Subway",
        "visualEmoji": "🚇",
        "visualOptions": [
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
          },
          {
            "text": "Airport",
            "emoji": "🛫",
            "label": "Airport",
            "translationPt": "Aeroporto com avião"
          }
        ],
        "options": [
          "Hotel",
          "Airplane",
          "Subway",
          "Airport"
        ],
        "correctAnswer": "Subway",
        "explanation": "Exemplo prático: \"Take the underground subway to avoid traffic.\"",
        "phoneticHint": "/ˈsʌb.weɪ/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e27",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Ship",
        "visualEmoji": "🚢",
        "visualOptions": [
          {
            "text": "Suitcase",
            "emoji": "🧳",
            "label": "Suitcase",
            "translationPt": "Mala de viagem com rodinhas"
          },
          {
            "text": "Ship",
            "emoji": "🚢",
            "label": "Ship",
            "translationPt": "Navio"
          },
          {
            "text": "Police Station",
            "emoji": "🚓",
            "label": "Police Station",
            "translationPt": "Delegacia de polícia"
          },
          {
            "text": "Pharmacy",
            "emoji": "💊",
            "label": "Pharmacy",
            "translationPt": "Farmácia / Drogaria"
          }
        ],
        "options": [
          "Suitcase",
          "Ship",
          "Police Station",
          "Pharmacy"
        ],
        "correctAnswer": "Ship",
        "explanation": "Exemplo prático: \"The large ship sails across the blue ocean.\"",
        "phoneticHint": "/ʃɪp/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e28",
        "type": "image-choice",
        "prompt": "🎧 Ouça a pronúncia e selecione a imagem correspondente:",
        "audioPhrase": "Movie Theater",
        "visualEmoji": "🍿",
        "visualOptions": [
          {
            "text": "Police Officer",
            "emoji": "👮",
            "label": "Police Officer",
            "translationPt": "Policial"
          },
          {
            "text": "Passport",
            "emoji": "🛂",
            "label": "Passport",
            "translationPt": "Passaporte de viagem"
          },
          {
            "text": "Coin",
            "emoji": "🪙",
            "label": "Coin",
            "translationPt": "Moeda"
          },
          {
            "text": "Movie Theater",
            "emoji": "🍿",
            "label": "Movie Theater",
            "translationPt": "Sala de cinema"
          }
        ],
        "options": [
          "Police Officer",
          "Passport",
          "Coin",
          "Movie Theater"
        ],
        "correctAnswer": "Movie Theater",
        "explanation": "Exemplo prático: \"Watch a new film at the movie theater.\"",
        "phoneticHint": "/ˈmuː.vi ˈθiː.ə.tər/",
        "skillCategory": "vocabulary"
      },
      {
        "id": "w0-p15-e29",
        "type": "image-choice",
        "prompt": "🎧 Escute a palavra em inglês e toque na imagem correta:",
        "audioPhrase": "Popcorn",
        "visualEmoji": "🍿",
        "visualOptions": [
          {
            "text": "Popcorn",
            "emoji": "🍿",
            "label": "Popcorn",
            "translationPt": "Pipoca"
          },
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
            "text": "Pilot",
            "emoji": "👨‍✈️",
            "label": "Pilot",
            "translationPt": "Piloto de avião"
          }
        ],
        "options": [
          "Popcorn",
          "Train",
          "Helicopter",
          "Pilot"
        ],
        "correctAnswer": "Popcorn",
        "explanation": "Exemplo prático: \"Eat warm buttered popcorn at the cinema.\"",
        "phoneticHint": "/ˈpɑːp.kɔːrn/",
        "skillCategory": "listening"
      },
      {
        "id": "w0-p15-e30",
        "type": "image-choice",
        "prompt": "🎧 Identifique pelo som qual é o item correto deste ambiente:",
        "audioPhrase": "Trophy",
        "visualEmoji": "🏆",
        "visualOptions": [
          {
            "text": "Hamburger",
            "emoji": "🍔",
            "label": "Hamburger",
            "translationPt": "Hambúrguer"
          },
          {
            "text": "Nurse",
            "emoji": "👩‍⚕️",
            "label": "Nurse",
            "translationPt": "Enfermeira / Enfermeiro"
          },
          {
            "text": "Airplane",
            "emoji": "✈️",
            "label": "Airplane",
            "translationPt": "Avião comercial"
          },
          {
            "text": "Trophy",
            "emoji": "🏆",
            "label": "Trophy",
            "translationPt": "Troféu de conquista"
          }
        ],
        "options": [
          "Hamburger",
          "Nurse",
          "Airplane",
          "Trophy"
        ],
        "correctAnswer": "Trophy",
        "explanation": "Exemplo prático: \"Congratulations! You earned the golden trophy!\"",
        "phoneticHint": "/ˈtroʊ.fi/",
        "skillCategory": "vocabulary"
      }
    ]
  },
  {
    "id": "w0-p16",
    "worldId": 0,
    "phaseNumber": 16,
    "title": "Lição de Pronomes IV • Indefinidos & Relativos",
    "subtitle": "Módulo de Pronomes 4/4 (Após 12 de Vocabulário) • Pares Associativos + Voz da Professora",
    "pedagogicalObjective": "Concluir o domínio dos pronomes com os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing, Anyone, Anything) e os Pronomes Relativos (Who, Which, That, Whose, Where, When).",
    "type": "boss",
    "icon": "swords",
    "cefrLevel": "A1",
    "theorySummary": [
      "Chegamos à 4ª e última Lição Exclusiva de Pronomes (fechando com chave de ouro o Módulo 0)!",
      "7º Passo: Aprendemos os Pronomes Indefinidos (Someone, Something, Everyone, Everything, Nobody, Nothing, Anyone, Anything).",
      "8º Passo: Aprendemos os Pronomes Relativos (Who, Which, That, Whose, Where, When), que funcionam como pontezinhas conectando as frases!"
    ],
    "xpReward": 100,
    "gemsReward": 40,
    "exercises": [
      {
        "id": "w0-p16-pron-1",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Alguém, Algo, Todo Mundo e Tudo - Parte 1)",
        "conceptHeader": "Quando sabemos que tem uma pessoa, mas não sabemos o nome dela, dizemos \"Someone\" (Alguém). Para uma coisa, dizemos \"Something\" (Alguma coisa). Para todas as pessoas juntas, \"Everyone\" (Todo mundo); e para todas as coisas, \"Everything\" (Tudo)!",
        "teacherAudioPt": "/audio/teacher/pronoun_7.wav",
        "prompt": "🤝 Conecte cada Pronome Indefinido ao seu par em português:",
        "pairs": [
          {
            "id": "w0-p16-b1-ind1",
            "en": "Someone",
            "emoji": "🔔",
            "phonetic": "/ˈsʌm.wʌn/",
            "pt": "Alguém (uma pessoa)",
            "tipPt": "Isso! \"Someone is at the door\" = \"Alguém está na porta\"!"
          },
          {
            "id": "w0-p16-b1-ind2",
            "en": "Something",
            "emoji": "🎁",
            "phonetic": "/ˈsʌm.θɪŋ/",
            "pt": "Algo / Alguma coisa",
            "tipPt": "Muito bem! \"Something\" = \"Alguma coisa\"!"
          },
          {
            "id": "w0-p16-b1-ind3",
            "en": "Everyone",
            "emoji": "👨‍👩‍👧‍👦",
            "phonetic": "/ˈev.ri.wʌn/",
            "pt": "Todo mundo / Todas as pessoas",
            "tipPt": "Perfeito! \"Everyone\" = \"Todo mundo\"!"
          },
          {
            "id": "w0-p16-b1-ind4",
            "en": "Everything",
            "emoji": "🌟",
            "phonetic": "/ˈev.ri.θɪŋ/",
            "pt": "Tudo / Todas as coisas",
            "tipPt": "Lindo! \"Everything\" = \"Tudo\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Someone (Alguém), Something (Alguma coisa), Everyone (Todo mundo), Everything (Tudo).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p16-pron-2",
        "type": "pair-match",
        "conceptTitle": "7º • Pronomes Indefinidos (Ninguém, Nada e Qualquer Um - Parte 2)",
        "conceptHeader": "Quando não tem nenhuma pessoa, dizemos \"Nobody\" (Ninguém). Quando não tem nenhuma coisa, dizemos \"Nothing\" (Nada). E em perguntas ou para dizer qualquer um, usamos \"Anyone\" e \"Anything\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_7.wav",
        "prompt": "🤝 Ligue os Pronomes Indefinidos Nobody, Nothing, Anyone e Anything:",
        "pairs": [
          {
            "id": "w0-p16-b2-ind5",
            "en": "Nobody",
            "emoji": "🚫",
            "phonetic": "/ˈnoʊ.bɑː.di/",
            "pt": "Ninguém (nenhuma pessoa)",
            "tipPt": "Exato! \"Nobody\" = \"Ninguém\"!"
          },
          {
            "id": "w0-p16-b2-ind6",
            "en": "Nothing",
            "emoji": "🫙",
            "phonetic": "/ˈnʌθ.ɪŋ/",
            "pt": "Nada (nenhuma coisa)",
            "tipPt": "Isso! \"Nothing in the box\" = \"Nada na caixa\"!"
          },
          {
            "id": "w0-p16-b2-ind7",
            "en": "Anyone",
            "emoji": "🙋‍♂️",
            "phonetic": "/ˈen.i.wʌn/",
            "pt": "Alguém (em perguntas) / Qualquer pessoa",
            "tipPt": "Muito bem! \"Is anyone home?\" = \"Tem alguém em casa?\""
          },
          {
            "id": "w0-p16-b2-ind8",
            "en": "Anything",
            "emoji": "✨",
            "phonetic": "/ˈen.i.θɪŋ/",
            "pt": "Alguma coisa (em perguntas) / Qualquer coisa",
            "tipPt": "Perfeito! Você dominou os Indefinidos!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Nobody (Ninguém), Nothing (Nada), Anyone (Alguém em perguntas / Qualquer pessoa), Anything (Algo em perguntas / Qualquer coisa).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p16-pron-3",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos (As Pontezinhas das Frases - Parte 1)",
        "conceptHeader": "São pontezinhas que juntam duas ideias na mesma frase! \"Who\" significa \"que/quem\" para ligar PESSOAS; \"Which\" significa \"que/o qual\" para ligar COISAS ou ANIMAIS; \"That\" é a ponte curinga para pessoas e coisas; e \"Whose\" indica \"cujo / de quem\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_8.wav",
        "prompt": "🤝 Conecte cada Pronome Relativo (a pontezinha da frase) ao seu uso:",
        "pairs": [
          {
            "id": "w0-p16-b3-rel1",
            "en": "Who (relativo)",
            "emoji": "👩‍⚕️",
            "phonetic": "/huː/",
            "pt": "Que / Quem (ponte usada para PESSOAS)",
            "tipPt": "Perfeito! \"The doctor who helps\" = \"O médico que ajuda\"!"
          },
          {
            "id": "w0-p16-b3-rel2",
            "en": "Which (relativo)",
            "emoji": "🔑",
            "phonetic": "/wɪtʃ/",
            "pt": "Que / O qual (ponte para COISAS ou ANIMAIS)",
            "tipPt": "Isso! \"The key which opens\" = \"A chave que abre\"!"
          },
          {
            "id": "w0-p16-b3-rel3",
            "en": "That (relativo)",
            "emoji": "🌉",
            "phonetic": "/ðæt/",
            "pt": "Que (ponte curinga para PESSOAS ou COISAS)",
            "tipPt": "Muito bem! \"That\" conecta tanto pessoas quanto objetos!"
          },
          {
            "id": "w0-p16-b3-rel4",
            "en": "Whose (relativo)",
            "emoji": "🏠",
            "phonetic": "/huːz/",
            "pt": "Cujo(a) / De quem (ponte que indica POSSE)",
            "tipPt": "Lindo! \"The boy whose dog is here\" = \"O menino cujo cachorro está aqui\"!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "Who (ponte para pessoas), Which (ponte para coisas/animais), That (ponte curinga), Whose (ponte de posse).",
        "skillCategory": "grammar"
      },
      {
        "id": "w0-p16-pron-4",
        "type": "pair-match",
        "conceptTitle": "8º • Pronomes Relativos na Prática (Frases do Cotidiano)",
        "conceptHeader": "Vamos ligar frases reais do nosso dia a dia usando as pontezinhas dos Pronomes Relativos \"Who, Which, That, Where\"!",
        "teacherAudioPt": "/audio/teacher/pronoun_8.wav",
        "prompt": "🤝 Associe cada frase com Pronome Relativo ao seu significado em português:",
        "pairs": [
          {
            "id": "w0-p16-b4-rel5",
            "en": "The teacher who teaches",
            "emoji": "👩‍🏫",
            "phonetic": "/ðə ˈtiː.tʃər huː ˈtiː.tʃɪz/",
            "pt": "A professora que ensina (pessoa = who)",
            "tipPt": "Isso! Pessoa usa a pontezinha \"who\"!"
          },
          {
            "id": "w0-p16-b4-rel6",
            "en": "The key which opens",
            "emoji": "🔑",
            "phonetic": "/ðə kiː wɪtʃ ˈoʊ.pənz/",
            "pt": "A chave que abre (objeto = which)",
            "tipPt": "Muito bem! Objeto usa a pontezinha \"which\"!"
          },
          {
            "id": "w0-p16-b4-rel7",
            "en": "The house where I live",
            "emoji": "🏠",
            "phonetic": "/ðə haʊs wer aɪ lɪv/",
            "pt": "A casa onde eu moro (lugar = where)",
            "tipPt": "Perfeito! Lugar usa a pontezinha \"where\"!"
          },
          {
            "id": "w0-p16-b4-rel8",
            "en": "The car that is red",
            "emoji": "🚗",
            "phonetic": "/ðə kɑːr ðæt ɪz red/",
            "pt": "O carro que é vermelho (curinga = that)",
            "tipPt": "Parabéns, meu amor! Você dominou todas as 8 famílias de pronomes!"
          }
        ],
        "correctAnswer": "ALL_PAIRS_MATCHED",
        "explanation": "The teacher who teaches (A professora que ensina), The cake which I made (O bolo que eu fiz), The house where I live (A casa onde eu moro), The car that is red (O carro que é vermelho).",
        "skillCategory": "grammar"
      }
    ]
  }
];
