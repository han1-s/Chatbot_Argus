const empresa = {
  nome: "ARGUS",
  descricao: "Sistema de monitoramento e análise de computadores para empresas.",
  objetivo: "Proporcionar uma visão centralizada de computadores autorizados, acompanhar informações de atividades e apoiar a análise da utilização dos recursos computacionais.",
  publicoAlvo: "Empresas, equipes de TI e organizações que precisam acompanhar computadores de seu ambiente de trabalho.",
  funcionamento: "A Web oferece a interface administrativa. A Platform participa do monitoramento e da apresentação das informações recebidas dos agentes instalados nos computadores autorizados. Web e Platform utilizam a mesma conta e o mesmo banco de dados MySQL.",
  privacidade: "O monitoramento deve ocorrer com autorização da organização, transparência e os cuidados necessários com dados pessoais. Esta descrição não representa uma certificação nem confirma mecanismos específicos de segurança.",
  requisitos: "O projeto principal documenta Windows 10/11, versões LTS compatíveis do Node.js e MySQL Server 8 ou superior. O chatbot independente funciona em um navegador moderno e não depende desses componentes."
};

const servicos = [
  {
    nome: "Free",
    valorMensal: "R$ 0,00",
    valorAnual: null,
    computadores: "Até 10 computadores",
    historico: "Histórico de 7 dias",
    recursos: [],
    proposta: true
  },
  {
    nome: "Pro",
    valorMensal: "R$ 49,00 por mês",
    valorAnual: "R$ 39,00 por mês na modalidade anual",
    computadores: "Até 50 computadores",
    historico: "Histórico de 90 dias",
    recursos: ["Alertas"],
    proposta: true
  },
  {
    nome: "Business",
    valorMensal: "R$ 149,00 por mês",
    valorAnual: "R$ 119,00 por mês na modalidade anual",
    computadores: "Computadores ilimitados",
    historico: null,
    recursos: ["Recursos propostos de IA", "API", "Disponibilidade 24 horas por dia"],
    proposta: true
  }
];

const palavrasChave = {
  contratacao: [
    "como contratar", "contratar", "contratacao", "assinar", "comprar plano",
    "adquirir plano", "quero contratar", "onde contrato", "como assino"
  ],
  comparacao: [
    "diferenca entre web e platform", "diferenca da web para platform",
    "diferenca web platform", "web versus platform", "web e platform sao iguais",
    "compare web com platform", "comparar web e platform"
  ],
  planoFree: [
    "plano free", "plano gratuito", "plano gratis", "existe plano gratuito",
    "tem plano gratis", "quanto custa o free", "quanto custa o plano free",
    "valor do free", "free custa", "o que inclui o free", "recursos do free"
  ],
  planoPro: [
    "plano pro", "plano profissional", "quanto custa pro", "quanto custa o pro",
    "valor do pro", "preco do pro", "o que inclui o pro", "recursos do pro",
    "computadores pro"
  ],
  planoBusiness: [
    "plano business", "quanto custa business", "valor do business",
    "preco do business", "o que inclui business", "recursos business",
    "computadores business"
  ],
  todosPlanos: [
    "quais sao os planos", "quais os planos", "lista de planos", "planos",
    "preco dos planos", "precos dos planos", "valores dos planos", "quanto custa",
    "quanto custam", "valores e planos", "servicos oferece", "recursos de cada plano"
  ],
  privacidade: [
    "privacidade", "dados pessoais", "protecao de dados", "seguranca",
    "monitoramento autorizado", "autorizacao para monitorar", "transparencia", "lgpd"
  ],
  beneficios: [
    "produtividade", "mais produtivo", "aumenta a produtividade",
    "aumentar produtividade", "economizar dinheiro", "reduzir custos",
    "economia financeira", "beneficios", "vantagens", "ajuda a empresa"
  ],
  instalacao: [
    "preciso instalar", "tem que instalar", "instalar algo", "instalar um programa",
    "instalar aplicativo", "instalacao", "requisitos do sistema", "requisitos tecnicos",
    "windows 10", "windows 11", "node js", "mysql server"
  ],
  fluxoDados: [
    "como os dados chegam", "como chegam os dados", "dados chegam ao sistema",
    "enviar informacoes", "envia informacoes", "quem envia os dados", "agentes enviam",
    "comunicacao dos agentes", "agente instalado", "agentes instalados"
  ],
  publico: [
    "quem pode utilizar", "quem pode usar", "para quem foi feito", "publico alvo",
    "equipe de ti", "empresas podem usar", "organizacoes podem usar"
  ],
  ajuda: [
    "o que voce consegue responder", "que assuntos voce responde",
    "com o que voce pode ajudar", "o que voce sabe", "quais assuntos",
    "sobre o que posso perguntar", "ajuda disponivel"
  ],
  platform: [
    "o que e a platform", "o que e platform", "para que serve a platform",
    "platform do argus", "aplicacao platform", "componente platform"
  ],
  web: [
    "o que e a web", "o que e web", "para que serve a web", "interface web",
    "web do argus", "componente web"
  ],
  monitoramento: [
    "como funciona o monitoramento", "como funciona monitoramento",
    "como funciona o sistema", "como funciona esse sistema", "funcionamento do argus",
    "monitoramento funciona", "acompanhar computadores", "computadores monitorados"
  ],
  limiteComputadores: [
    "quantos computadores", "limite de computadores", "limite de pcs",
    "quantos pcs", "quantos equipamentos", "quantos dispositivos"
  ],
  autorizacao: [
    "pode monitorar qualquer computador", "monitorar qualquer computador",
    "qualquer computador pode ser monitorado", "pode monitorar meu computador",
    "monitorar meu computador", "monitorar computador pessoal", "computador autorizado",
    "computadores autorizados", "quem pode ser monitorado"
  ],
  compatibilidade: [
    "funciona no celular", "funciona em celular", "monitora celular", "monitorar celular",
    "monitora smartphone", "monitorar smartphone", "funciona no android", "funciona no iphone",
    "suporte para celular", "suporte para smartphone"
  ],
  conexaoChatbot: [
    "chatbot conectado", "assistente conectado", "chatbot conectado ao argus",
    "assistente conectado ao argus", "conversa com o sistema",
    "acessa meus dados", "acessa o banco de dados", "conecta ao sistema principal",
    "conexao com o argus", "os dados desta conversa", "voce esta conectado",
    "esta conectado ao argus", "voce consulta o argus", "essa conversa e armazenada"
  ],
  internet: [
    "precisa de internet", "funciona sem internet", "sem internet", "funciona offline",
    "precisa estar online", "usa internet"
  ],
  limparConversa: [
    "limpar conversa", "apagar conversa", "limpar historico", "apagar historico",
    "reiniciar conversa", "comecar de novo", "comecar novamente"
  ],
  naturezaChatbot: [
    "voce e uma ia", "voce e inteligencia artificial", "o assistente usa ia",
    "voce e um robo", "como voce funciona", "como voce responde", "como funciona o chatbot",
    "o chatbot e uma ia", "o chatbot usa ia", "o chatbot usa inteligencia artificial"
  ],
  naturezaProduto: [
    "argus usa ia", "argus utiliza ia", "argus tem ia", "argus usa inteligencia artificial",
    "argus e uma ia", "ia do argus", "argus tem inteligencia artificial"
  ],
  informacoesMonitoradas: [
    "o que o argus monitora", "o que monitora o argus", "quais dados o argus monitora",
    "quais dados sao monitorados", "quais informacoes sao monitoradas",
    "quais informacoes o argus monitora", "quais informacoes o sistema monitora",
    "que informacoes o argus coleta", "dados monitorados", "argus monitora tela",
    "captura tela", "grava tela", "monitora funcionarios"
  ],
  identidade: [
    "quem e voce", "qual seu nome", "qual e seu nome", "como voce se chama",
    "quem esta falando", "quem esta respondendo", "quem esta atendendo"
  ],
  origemNome: [
    "origem do argus", "origem do nome argus", "significado do nome argus", "por que o nome argus",
    "o que significa argus", "quem criou o argus", "quem desenvolveu o argus"
  ],
  apresentacao: [
    "para que serve", "qual a funcao", "qual e a funcao", "objetivo do argus",
    "objetivo desse sistema", "finalidade do argus", "finalidade do sistema",
    "o que e o argus", "o que e argus", "o que e esse sistema", "o que e esse programa",
    "me explica o argus", "me fale sobre o argus", "me fala do argus", "sobre o argus",
    "o que faz o argus", "que sistema e esse", "que programa e esse"
  ],
  bemEstar: ["tudo bem", "como voce esta"],
  agradecimento: ["obrigado", "obrigada", "valeu", "agradeco", "agradecida", "agradecido"],
  despedida: ["tchau", "ate mais", "ate logo", "ate a proxima", "vou sair"],
  repeticao: ["pode repetir", "repita", "repete", "nao entendi", "fala de novo", "fale de novo", "pode falar de novo"],
  saudacao: ["ola", "oi", "opa", "e ai", "bom dia", "boa tarde", "boa noite"]
};

const form = document.querySelector("#chat-form");
const input = document.querySelector("#message-input");
const conversation = document.querySelector("#conversation");
const sendButton = document.querySelector("#send-button");
const suggestions = document.querySelector("#suggestions");
let ultimaResposta = "";
const formatadorHora = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit"
});

function normalizarTexto(texto) {
  return texto
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function correspondeAAlgumTermo(texto, termos) {
  const textoComLimites = ` ${texto} `;
  return termos.some((termo) => textoComLimites.includes(` ${termo} `));
}

function adicionarMensagem(remetente, texto) {
  const mensagemDoUsuario = remetente === "user";
  const agora = new Date();
  const linha = document.createElement("div");
  linha.className = `message-row ${mensagemDoUsuario ? "user-row" : "assistant-row"}`;

  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = mensagemDoUsuario ? "V" : "A";

  const conteudo = document.createElement("div");
  conteudo.className = "message-content";

  const byline = document.createElement("div");
  byline.className = "message-byline";

  const nome = document.createElement("span");
  nome.textContent = mensagemDoUsuario ? "Você" : "Assistente ARGUS";

  const hora = document.createElement("time");
  hora.dateTime = agora.toISOString();
  hora.textContent = formatadorHora.format(agora);

  const bolha = document.createElement("div");
  bolha.className = `message-bubble ${mensagemDoUsuario ? "user-bubble" : "assistant-bubble"}`;
  bolha.textContent = texto;

  byline.append(nome, hora);
  conteudo.append(byline, bolha);
  linha.append(avatar, conteudo);
  conversation.append(linha);

  const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  conversation.scrollTo({
    top: conversation.scrollHeight,
    behavior: movimentoReduzido ? "auto" : "smooth"
  });

  return linha;
}

function formatarPlano(plano) {
  const valores = plano.valorAnual
    ? `${plano.valorMensal} ou ${plano.valorAnual}`
    : plano.valorMensal;
  const detalhes = [valores, plano.computadores, plano.historico, ...plano.recursos]
    .filter(Boolean)
    .join("; ");

  return `${plano.nome}: ${detalhes}.`;
}

function responderSobrePlano(nomePlano) {
  const plano = servicos.find((servico) => servico.nome === nomePlano);

  if (!plano) {
    return "Não encontrei esse plano na proposta cadastrada.";
  }

  const aviso = plano.proposta
    ? "Estes valores e recursos fazem parte da proposta comercial do projeto, e não confirmam disponibilidade para contratação."
    : "";

  return `${formatarPlano(plano)}\n\n${aviso}`.trim();
}

function listarPlanos() {
  const detalhesDosPlanos = servicos.map(formatarPlano).join("\n\n");
  return `A proposta comercial do projeto inclui:\n\n${detalhesDosPlanos}\n\nOs valores e recursos são uma proposta do projeto; a disponibilidade para contratação precisa ser confirmada com a equipe responsável.`;
}

function obterResposta(mensagem) {
  const pergunta = normalizarTexto(mensagem);

  if (correspondeAAlgumTermo(pergunta, palavrasChave.contratacao)) {
    return "Os planos cadastrados são uma proposta comercial do projeto. A disponibilidade para contratação precisa ser confirmada com a equipe responsável.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.comparacao)) {
    return "A Web é a interface administrativa para acessar funcionalidades e consultar informações. A Platform participa do monitoramento dos computadores e da apresentação das informações recebidas dos agentes. Os dois componentes usam a mesma conta e o mesmo banco de dados MySQL.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.planoFree)) {
    return responderSobrePlano("Free");
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.planoPro)) {
    return responderSobrePlano("Pro");
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.planoBusiness)) {
    return responderSobrePlano("Business");
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.todosPlanos)) {
    return listarPlanos();
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.limiteComputadores)) {
    return "A proposta prevê até 10 computadores no Free, até 50 no Pro e computadores ilimitados no Business. Os valores e recursos são uma proposta do projeto; a disponibilidade precisa ser confirmada com a equipe responsável.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.autorizacao)) {
    return "O ARGUS é apresentado para acompanhar computadores autorizados da organização. O monitoramento deve ter autorização, transparência e os cuidados necessários com dados pessoais. A proposta não é monitorar qualquer computador sem consentimento.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.compatibilidade)) {
    return "A documentação do ARGUS descreve monitoramento de computadores. Ela não confirma suporte para celulares ou outros dispositivos móveis; essa compatibilidade precisa ser consultada com a equipe responsável.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.conexaoChatbot)) {
    return "Não. Esta demonstração não se conecta ao sistema principal, não consulta o banco de dados do ARGUS e não envia a conversa para um serviço externo. As respostas vêm de informações cadastradas neste projeto.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.internet)) {
    return "Depois de baixar os arquivos do projeto, você pode abrir o chatbot localmente em um navegador moderno. Ele não precisa de conexão com a internet nem de serviços externos para responder.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.limparConversa)) {
    return "O histórico fica apenas na página aberta. Atualize a página para iniciar uma conversa nova; as mensagens não são salvas pelo chatbot.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.naturezaChatbot)) {
    return "Esta demonstração não usa inteligência artificial generativa. Ela identifica palavras-chave e mostra respostas escritas previamente em uma base local.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.naturezaProduto)) {
    return "A documentação disponível não confirma funções de inteligência artificial no produto ARGUS. Ela menciona recursos de IA como parte da proposta do plano Business, sem confirmar disponibilidade para contratação.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.informacoesMonitoradas)) {
    return "A descrição do projeto fala em acompanhar informações de atividades nos computadores autorizados, mas não detalha tipos específicos de dados coletados. Para esses detalhes, consulte a equipe responsável.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.identidade)) {
    return "Sou o assistente virtual demonstrativo do ARGUS. Posso responder perguntas introdutórias com informações cadastradas neste chatbot.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.origemNome)) {
    return "A documentação disponível para este projeto não informa a origem do nome ARGUS nem quem criou o produto. Posso explicar as funções e os componentes descritos.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.privacidade)) {
    return empresa.privacidade;
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.beneficios)) {
    return "O ARGUS busca centralizar informações, dar visibilidade sobre os computadores monitorados, apoiar o acompanhamento de atividades e ajudar na análise da utilização dos recursos computacionais. Esses objetivos podem apoiar o trabalho da organização, mas não representam garantia de aumento de produtividade ou economia financeira.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.instalacao)) {
    return `A solução principal envolve a Web, a Platform e agentes instalados nos computadores autorizados. Os requisitos documentados para o projeto principal são ${empresa.requisitos} O chatbot não precisa desses componentes.`;
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.fluxoDados)) {
    return "Os agentes instalados nos computadores autorizados enviam informações para a estrutura do sistema. A Web e a Platform apresentam e permitem consultar as informações disponibilizadas. Esta versão do chatbot não se conecta aos agentes nem ao sistema principal.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.publico)) {
    return empresa.publicoAlvo;
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.ajuda)) {
    return "Posso responder sobre o que é o ARGUS e seu público, como Web, Platform e agentes participam do monitoramento, requisitos introdutórios, benefícios pretendidos, privacidade e a proposta de planos. O atendimento usa respostas cadastradas localmente e não consulta o sistema principal.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.platform)) {
    return "A Platform é uma aplicação que participa do monitoramento dos computadores e da apresentação das informações recebidas dos agentes instalados nos equipamentos autorizados. Ela e a Web utilizam a mesma conta e o mesmo banco de dados MySQL.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.web)) {
    return "A Web é a interface administrativa do ARGUS. Por ela, os usuários podem acessar funcionalidades, consultar informações e acompanhar os dados disponibilizados pelo sistema.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.monitoramento)) {
    return empresa.funcionamento;
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.apresentacao)) {
    const descricao = empresa.descricao.toLocaleLowerCase("pt-BR");
    const objetivo = empresa.objetivo.toLocaleLowerCase("pt-BR");
    return `${empresa.nome} é um ${descricao} Seu objetivo é ${objetivo} A solução oferece uma visão centralizada para apoiar o acompanhamento dos computadores autorizados da organização.`;
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.bemEstar)) {
    return "Tudo pronto para ajudar! Posso explicar o ARGUS, seus componentes, os computadores autorizados ou os planos propostos.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.agradecimento)) {
    return "Por nada! Se surgir outra dúvida sobre o ARGUS, pode perguntar.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.despedida)) {
    return "Até mais! Quando quiser, volte para perguntar sobre o ARGUS.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.repeticao)) {
    return ultimaResposta || "Ainda não respondi uma pergunta para repetir. Você pode perguntar sobre o ARGUS, seus componentes, os planos ou privacidade.";
  } else if (correspondeAAlgumTermo(pergunta, palavrasChave.saudacao)) {
    return "Olá! Posso ajudar com informações sobre o ARGUS, o monitoramento, os componentes Web e Platform, privacidade e os planos propostos. O que você gostaria de saber?";
  } else {
    return "Não consegui identificar sua dúvida. Posso ajudar com informações sobre o ARGUS, seu funcionamento, os computadores monitorados, os recursos e os planos. Tente reformular sua pergunta.";
  }
}

function atualizarBotao() {
  sendButton.disabled = input.value.trim().length === 0;
}

function ajustarAlturaInput() {
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 145)}px`;
}

function enviarMensagem(texto = input.value) {
  const mensagem = texto.trim();

  if (!mensagem) {
    input.focus();
    return false;
  }

  adicionarMensagem("user", mensagem);
  suggestions.hidden = true;
  input.value = "";
  ajustarAlturaInput();
  atualizarBotao();

  const resposta = obterResposta(mensagem);
  ultimaResposta = resposta;
  window.setTimeout(() => adicionarMensagem("assistant", resposta), 180);

  input.focus();
  return true;
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  enviarMensagem();
});

input.addEventListener("input", () => {
  ajustarAlturaInput();
  atualizarBotao();
});

input.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" && !evento.shiftKey && !evento.isComposing) {
    evento.preventDefault();
    enviarMensagem();
  }
});

document.querySelectorAll(".suggestion-chip").forEach((botao) => {
  botao.addEventListener("click", () => enviarMensagem(botao.dataset.question));
});
