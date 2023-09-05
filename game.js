const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Você é Targon, um renomado bardo élfico, conhecido por sua habilidade em entoar canções que ecoam através das eras e encantam até mesmo as criaturas mais antigas. Seu coração anseia por aventuras e pelas histórias épicas que apenas a Terra Média pode proporcionar. Uma noite, enquanto está em uma taverna enfumaçada nas fronteiras da vila de Bree, uma voz rouca chama sua atenção.',
    options: [
      {
        text: 'Prestar atenção na história e se aproximar',
        nextText: 2
      },
      {
        text: 'Ignorar a história e tocar sua música',
        nextText: 10
      }
    ]
  },
  {
    id: 2,
    text: '"Amuleto perdido nas profundezas da Montanha da Perdição!" As palavras ecoam na taverna, pronunciadas por um viajante cansado, cujas vestes desgastadas contam histórias de sua própria jornada. A aura de mistério envolve a conversa, e os olhos curiosos dos presentes se voltam para você, Gaelion, o bardo élfico. A jornada começa com uma caminhada pela densa Floresta Sombria. Enquanto avança, você se depara com um rio furioso e uma ponte quebrada.',
    options: [
      {
        text: 'Tentar nadar através do rio',
        nextText: 3
      },
      {
        text: 'Procurar por uma maneira de consertar a ponte',
        nextText: 4
      },
      {
        text: 'Retornar e seguir outro caminho',
        nextText: 9
      }
    ]
  },
  {
    id: 3,
    text: 'Suas habilidades de natação permitem que você atravesse o rio com facilidade, emergindo do outro lado encharcado, mas ileso.',
    options: [
      {
        text: 'Continuar a jornada',
        nextText: 5
      }
    ]
  },
  {
    id: 4,
    text: 'Com sua habilidade de engenharia, você conserta a ponte e atravessa com segurança, admirando sua destreza.',
    options: [
      {
        text: 'Continuar a jornada',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'Ao sair da floresta, você se depara com a entrada escura e sinistra da Montanha da Perdição. À medida que você avança mais profundamente, as sombras parecem ganhar vida.',
    options: [
      {
        text: 'Acender uma tocha e explorar as profundezas',
        nextText: 6
      },
      {
        text: 'Continuar em frente, confiando em sua intuição',
        nextText: 7
      }
    ]
  },
  {
    id: 6,
    text: 'A luz da tocha ilumina corredores sombrios, revelando passagens secretas e símbolos antigos. Você sente que está no caminho certo.',
    options: [
      {
        text: 'Explorar mais profundamente',
        nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: 'Você segue em frente, guiado pela sua intuição. Cada passo traz novos desafios, mas também a sensação de que está destinado a encontrar o amuleto.',
    options: [
      {
        text: 'Enfrentar os desafios e prosseguir',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'Após inúmeras provações, você finalmente encontra o amuleto em uma câmara brilhante no coração da montanha. Seu coração se enche de triunfo e orgulho.',
    options: [
      {
        text: 'Retornar à superfície e compartilhar a história',
        nextText: 11
      }
    ]
  },
  {
    id: 9,
    text: 'Você volta e segue outro caminho, ansioso por novas aventuras.',
    options: [
      {
        text: 'Explorar o desconhecido',
        nextText: 1
      }
    ]
  },
  {
    id: 10,
    text: 'Sua música enche a taverna, encantando a todos. Você é aplaudido e recompensado, mas a história da Montanha da Perdição permanece uma incógnita.',
    options: [
      {
        text: 'Encontrar outras histórias para contar',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'À medida que emerge da Montanha da Perdição, você se vê diante de uma vila em ruínas. Um vento gélido sopra, e a sensação de que algo está errado paira no ar.',
    options: [
      {
        text: 'Investigar a vila e procurar sobreviventes',
        nextText: 12
      },
      {
        text: 'Seguir o caminho para longe da vila',
        nextText: 13
      }
    ]
  },
  {
    id: 12,
    text: 'Você vasculha a vila, encontrando casas abandonadas e vestígios de uma luta. Em um beco escuro, você encontra um sobrevivente ferido que revela a presença de um dragão ameaçador nas redondezas.',
    options: [
      {
        text: 'Preparar-se para enfrentar o dragão',
        nextText: 14
      },
      {
        text: 'Partir imediatamente e alertar as autoridades',
        nextText: 15
      }
    ]
  },
  {
    id: 13,
    text: 'Você escolhe evitar a vila e seguir em frente. A cada passo, a sensação de que o perigo ainda o segue aumenta.',
    options: [
      {
        text: 'Retornar à vila e investigar',
        nextText: 12
      },
      {
        text: 'Continuar avançando, mantendo-se alerta',
        nextText: 16
      }
    ]
  },
  {
    id: 14,
    text: 'Com coragem e determinação, você enfrenta o dragão em uma batalha épica nas ruas em chamas da vila. Suas músicas ecoam, inspirando os moradores a se unirem na luta contra a terrível besta escamosa. Juntos, vocês travam uma batalha feroz, enquanto o fogo do dragão ilumina a noite escura. Com habilidade e trabalho em equipe, conseguem derrotar a ameaça e salvar a vila da destruição.',
    options: [
      {
        text: 'Comemorar a vitória com os moradores',
        nextText: 17
      }
    ]
  },
  {
    id: 18,
    text: 'Depois de derrotar o dragão, a vila está em ruínas, e os moradores estão exaustos, mas vivos. Você ajuda a cuidar dos feridos e lidera os esforços para reconstruir o que foi destruído. A vila se recupera gradualmente, e você é admirado como um verdadeiro herói.',
    options: [
      {
        text: 'Continuar sua jornada em busca de novas aventuras',
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    text: 'Você encontra o dragão rugindo ferozmente, liberando chamas ardentes em sua direção. Desvia habilmente do fogo e ataca com coragem, acertando pontos fracos na armadura do dragão. A batalha é intensa, mas, com determinação, você finalmente derrota a ameaça e salva a vila das garras do dragão.',
    options: [
      {
        text: 'Comemorar a vitória com os moradores',
        nextText: 17
      }
    ]
  },
  {
    id: 20,
    text: 'Você não consegue encontrar ajuda a tempo e retorna à vila quando é tarde demais. A vila está em ruínas, e os moradores estão em estado de choque. Você lamenta não ter enfrentado o dragão e se sente responsável pela destruição.',
    options: [
      {
        text: 'Ajudar os sobreviventes e reconstruir a vila',
        nextText: 18
      },
      {
        text: 'Partir em busca de aventuras para redimir-se',
        nextText: -1
      }
    ]
  }
  ];
  


startGame()