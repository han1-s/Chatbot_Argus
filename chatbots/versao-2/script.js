const categorias = [
  {
    id: "produto", titulo: "Sobre o ARGUS", perguntas: [
      { texto: "O que é o ARGUS?", alternativas: ["o que e o argus", "para que serve o argus", "qual a finalidade do sistema", "finalidade do sistema", "objetivo do argus"], resposta: "O ARGUS é um sistema de monitoramento e análise de computadores para empresas. Ele busca centralizar informações dos computadores autorizados e apoiar a análise da utilização dos recursos computacionais." },
      { texto: "Quais são as funcionalidades?", alternativas: ["quais funcionalidades", "funcionalidades do argus", "recursos do argus", "o que o sistema oferece", "quais recursos"], resposta: "A descrição destaca uma visão centralizada dos computadores autorizados, o acompanhamento de informações de atividades e o apoio à análise da utilização dos recursos computacionais. A Web oferece a interface administrativa; a Platform participa do monitoramento e da apresentação das informações recebidas dos agentes." },
      { texto: "Quem pode utilizar?", alternativas: ["quem pode utilizar", "quem pode usar", "para quem foi feito"], resposta: "A descrição do projeto apresenta o ARGUS para empresas, equipes de TI e organizações que precisam acompanhar computadores de seu ambiente de trabalho." }
    ]
  },
  {
    id: "componentes", titulo: "Web, Platform e agentes", perguntas: [
      { texto: "Qual é a diferença entre Web e Platform?", alternativas: ["diferenca entre web e platform", "web e platform", "o que e a web", "o que e platform", "para que serve a platform"], resposta: "A Web oferece a interface administrativa para acessar funcionalidades e consultar informações. A Platform participa do monitoramento e da apresentação das informações recebidas dos agentes. Web e Platform usam a mesma conta e o mesmo banco MySQL." },
      { texto: "Como os agentes participam?", alternativas: ["como os agentes participam", "agentes instalados", "como os dados chegam", "quem envia os dados"], resposta: "Os agentes são instalados nos computadores autorizados e enviam informações para a estrutura do sistema. A documentação disponível não detalha o protocolo ou a frequência desse envio." }
    ]
  },
  {
    id: "monitoramento", titulo: "Monitoramento", perguntas: [
      { texto: "Como funciona o monitoramento?", alternativas: ["como funciona o monitoramento", "como funciona monitoramento", "como o argus monitora", "como funciona o sistema"], resposta: "O fluxo documentado envolve agentes instalados nos computadores autorizados, a Platform que participa do monitoramento e da apresentação das informações, e a interface Web usada para consultar o sistema. Os tipos específicos de dados e a frequência de coleta não estão descritos." },
      { texto: "O que o ARGUS monitora?", alternativas: ["o que o argus monitora", "quais dados sao monitorados", "quais informacoes sao coletadas", "captura tela"], resposta: "A descrição fala em informações de atividades nos computadores autorizados, mas não especifica quais dados são coletados. Para essa lista, consulte a equipe responsável." }
    ]
  },
  {
    id: "implantacao", titulo: "Instalação e configuração", perguntas: [
      { texto: "Como instalar e configurar?", alternativas: ["como instalar", "instalacao", "configurar o argus", "configuracao do sistema", "passos para instalar"], resposta: "A documentação acessível não descreve comandos nem a sequência de instalação. Para avançar com segurança: 1) confirme os requisitos documentados; 2) solicite à equipe responsável o procedimento de configuração e implantação; 3) instale agentes apenas em computadores autorizados." },
      { texto: "Preciso instalar agentes?", alternativas: ["preciso instalar agentes", "instalar agente", "agentes nos computadores", "instalado nos computadores"], resposta: "A descrição do ARGUS menciona agentes instalados nos computadores autorizados. O procedimento detalhado de instalação não está documentado neste repositório." }
    ]
  },
  {
    id: "requisitos", titulo: "Requisitos técnicos", perguntas: [
      { texto: "Quais são os requisitos técnicos?", alternativas: ["requisitos tecnicos", "requisito tecnico", "windows 10", "windows 11", "node js", "mysql server"], resposta: "O README do projeto registra Windows 10/11, versões LTS compatíveis do Node.js e MySQL Server 8 ou superior para o ARGUS principal. Ele não especifica versões pontuais do Node.js nem configuração de servidor. Esses requisitos não se aplicam ao chatbot independente, que precisa apenas de um navegador moderno." }
    ]
  },
  {
    id: "planos", titulo: "Planos propostos", perguntas: [
      { texto: "Quais são os planos?", alternativas: ["quais sao os planos", "lista de planos", "preco dos planos", "valores dos planos", "quanto custa"], resposta: "O README apresenta uma proposta, ainda sem confirmação de contratação: Free, R$ 0,00, até 10 computadores e histórico de 7 dias; Pro, R$ 49,00 mensais ou R$ 39,00 na modalidade anual, até 50 computadores e histórico de 90 dias; Business, R$ 149,00 mensais ou R$ 119,00 na modalidade anual, computadores ilimitados e recursos propostos de IA, API e disponibilidade 24 horas. Confirme os valores e a disponibilidade com a equipe." },
      { texto: "Quanto custa o plano Pro?", alternativas: ["quanto custa o pro", "preco do pro", "valor do pro", "plano pro"], resposta: "Na proposta registrada, o Pro custa R$ 49,00 por mês ou R$ 39,00 por mês na modalidade anual. Inclui até 50 computadores, histórico de 90 dias e alertas. A disponibilidade comercial precisa ser confirmada." }
    ]
  },
  {
    id: "privacidade", titulo: "Privacidade e segurança", perguntas: [
      { texto: "Como funciona a privacidade?", alternativas: ["privacidade", "seguranca", "dados pessoais", "protecao de dados", "lgpd"], resposta: "A orientação do projeto é realizar o monitoramento com autorização da organização, transparência e cuidado com dados pessoais. A documentação não confirma certificações ou mecanismos técnicos específicos de segurança." }
    ]
  },
  {
    id: "suporte", titulo: "Suporte", perguntas: [
      { texto: "Como obter suporte?", alternativas: ["como obter suporte", "como falar com suporte", "contato do suporte", "preciso de ajuda tecnica", "telefone do suporte", "email do suporte"], resposta: "O repositório não informa um canal oficial, telefone ou e-mail de suporte. Procure a equipe responsável pelo projeto para receber o contato correto; não vou inventar um canal." }
    ]
  }
];

const categoryList = document.querySelector("#category-list");
const questionList = document.querySelector("#question-list");
const questionTitle = document.querySelector("#question-title");
const conversation = document.querySelector("#conversation");
const form = document.querySelector("#chat-form");
const input = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-button");
let categoriaAtual = categorias[0];
const formatadorHora = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" });

function normalizar(texto) {
  return texto.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function incluiExpressao(texto, expressao) {
  return ` ${texto} `.includes(` ${expressao} `);
}

function montarCategorias() {
  categorias.forEach((categoria, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "category-button";
    botao.dataset.category = categoria.id;
    botao.setAttribute("aria-pressed", String(categoria.id === categoriaAtual.id));
    const numero = document.createElement("span");
    numero.className = "category-number";
    numero.textContent = String(indice + 1).padStart(2, "0");
    const nome = document.createElement("span");
    nome.textContent = categoria.titulo;
    botao.append(numero, nome);
    botao.addEventListener("click", () => selecionarCategoria(categoria));
    categoryList.append(botao);
  });
  renderizarPerguntas();
}

function selecionarCategoria(categoria) {
  categoriaAtual = categoria;
  categoryList.querySelectorAll(".category-button").forEach((botao) => {
    botao.setAttribute("aria-pressed", String(botao.dataset.category === categoria.id));
  });
  renderizarPerguntas();
}

function renderizarPerguntas() {
  questionTitle.textContent = `Perguntas: ${categoriaAtual.titulo}`;
  questionList.replaceChildren();
  categoriaAtual.perguntas.forEach((pergunta) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "question-chip";
    botao.textContent = pergunta.texto;
    botao.addEventListener("click", () => enviarMensagem(pergunta.texto));
    questionList.append(botao);
  });
}

function adicionarMensagem(remetente, texto) {
  const linha = document.createElement("div");
  linha.className = `message-row ${remetente === "user" ? "user-row" : "assistant-row"}`;
  const avatar = document.createElement("div");
  avatar.className = `avatar ${remetente === "user" ? "user-avatar" : "assistant-avatar"}`;
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = remetente === "user" ? "V" : "A";
  const stack = document.createElement("div");
  stack.className = "message-stack";
  const speaker = document.createElement("span");
  speaker.className = "speaker";
  speaker.textContent = remetente === "user" ? "Você" : "Assistente ARGUS";
  const bubble = document.createElement("div");
  bubble.className = `bubble ${remetente === "user" ? "user-bubble" : "assistant-bubble"}`;
  bubble.textContent = texto;
  const time = document.createElement("time");
  time.className = "speaker";
  time.textContent = formatadorHora.format(new Date());
  stack.append(speaker, bubble, time);
  linha.append(avatar, stack);
  conversation.append(linha);
  conversation.scrollTop = conversation.scrollHeight;
}

function responder(pergunta) {
  const texto = normalizar(pergunta);
  const possiveis = categorias.flatMap((categoria) => categoria.perguntas.map((item) => ({ ...item, categoria })));
  const correspondencias = possiveis.flatMap((item) => item.alternativas
    .map(normalizar)
    .filter((expressao) => incluiExpressao(texto, expressao))
    .map((expressao) => ({ item, tamanho: expressao.length })));
  correspondencias.sort((a, b) => b.tamanho - a.tamanho);
  if (correspondencias.length) {
    selecionarCategoria(correspondencias[0].item.categoria);
    return correspondencias[0].item.resposta;
  }
  if (["oi", "ola", "bom dia", "boa tarde", "boa noite"].some((termo) => incluiExpressao(texto, termo))) {
    return "Olá! Você pode escolher uma categoria ao lado ou perguntar sobre o produto, monitoramento, instalação, requisitos, planos, privacidade ou suporte.";
  }
  return "Não encontrei uma resposta para essa pergunta na base disponível. Escolha uma categoria ao lado ou reformule a dúvida. Se o detalhe não estiver documentado, vou informar essa limitação.";
}

function atualizarBotao() { sendButton.disabled = input.value.trim().length === 0; }

function enviarMensagem(valor = input.value) {
  const pergunta = valor.trim();
  if (!pergunta) { input.focus(); return false; }
  adicionarMensagem("user", pergunta);
  input.value = "";
  input.style.height = "auto";
  atualizarBotao();
  const resposta = responder(pergunta);
  window.setTimeout(() => adicionarMensagem("assistant", resposta), 100);
  input.focus();
  return true;
}

form.addEventListener("submit", (evento) => { evento.preventDefault(); enviarMensagem(); });
input.addEventListener("input", () => { input.style.height = "auto"; input.style.height = `${Math.min(input.scrollHeight, 100)}px`; atualizarBotao(); });
input.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" && !evento.shiftKey && !evento.isComposing) { evento.preventDefault(); enviarMensagem(); }
});

montarCategorias();
