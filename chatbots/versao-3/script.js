const areas = [
  { id: "visao", nome: "Visão geral", simbolo: "⌂", topicos: ["O que é o ARGUS?", "Como funciona o monitoramento?"] },
  { id: "aplicacoes", nome: "Web e Platform", simbolo: "▣", topicos: ["Qual é a função da Web?", "O que é a Platform?", "Qual é a diferença entre elas?"] },
  { id: "agentes", nome: "Agentes e fluxo de dados", simbolo: "⇄", topicos: ["Qual é o papel dos agentes?", "Como as informações chegam ao sistema?"] },
  { id: "implantacao", nome: "Instalação e configuração", simbolo: "⚙", topicos: ["Como instalar e configurar?", "Quais são os requisitos técnicos?"] },
  { id: "planos", nome: "Planos e recursos", simbolo: "≡", topicos: ["Quais são os planos?", "Quanto custa o plano Pro?"] },
  { id: "governanca", nome: "Privacidade e suporte", simbolo: "◇", topicos: ["Como funciona a privacidade?", "Como obter suporte?"] }
];

const artigos = [
  {
    id: "produto", area: "visao", titulo: "Visão geral do produto",
    frases: ["o que e o argus", "para que serve o argus", "qual a finalidade do sistema", "finalidade do sistema", "objetivo do argus", "o que faz o argus", "quais funcionalidades", "funcionalidades do argus", "recursos do argus"],
    termos: ["argus", "monitoramento", "analise", "computadores", "empresas", "centralizar", "finalidade", "funcionalidades", "recursos"],
    resposta: "O ARGUS é um sistema de monitoramento e análise de computadores voltado para empresas. Seu objetivo documentado é oferecer uma visão centralizada dos computadores autorizados, acompanhar informações de atividades e apoiar a análise da utilização dos recursos computacionais. A documentação acessível não detalha todos os recursos da aplicação."
  },
  {
    id: "monitoramento", area: "visao", titulo: "Fluxo de monitoramento",
    frases: ["como funciona o monitoramento", "como funciona monitoramento", "como os dados chegam", "fluxo de dados"],
    termos: ["monitoramento", "agentes", "computadores", "autorizados", "platform", "informacoes", "fluxo"],
    resposta: "O fluxo descrito começa nos agentes instalados nos computadores autorizados, que enviam informações à estrutura do sistema. A Platform participa do monitoramento e da apresentação desses dados; a Web oferece a interface administrativa para consulta. O README não informa protocolo, frequência de coleta nem o catálogo de dados."
  },
  {
    id: "web", area: "aplicacoes", titulo: "Aplicação Web",
    frases: ["qual e a funcao da web", "o que e a web", "para que serve a web", "interface administrativa"],
    termos: ["web", "interface", "administrativa", "consultar", "funcionalidades", "informacoes"],
    resposta: "A Web é a interface administrativa do ARGUS. A documentação a descreve como o ponto para acessar funcionalidades e consultar as informações disponibilizadas pelo sistema. Ela compartilha a mesma conta e o mesmo banco MySQL usados pela Platform."
  },
  {
    id: "platform", area: "aplicacoes", titulo: "Platform",
    frases: ["o que e a platform", "para que serve a platform", "funcao da platform", "diferenca entre web e platform", "web e platform"],
    termos: ["platform", "monitoramento", "apresentacao", "informacoes", "agentes", "web", "mysql", "conta"],
    resposta: "A Platform participa do monitoramento dos computadores e da apresentação das informações recebidas dos agentes instalados nos equipamentos autorizados. A Web apresenta a interface administrativa. As duas aplicações utilizam a mesma conta e o mesmo banco de dados MySQL. O repositório não detalha serviços internos ou endpoints."
  },
  {
    id: "agentes", area: "agentes", titulo: "Agentes",
    frases: ["qual e o papel dos agentes", "o que sao os agentes", "agentes instalados", "quem envia os dados", "instalar agente"],
    termos: ["agentes", "instalados", "computadores", "autorizados", "enviam", "informacoes", "dados"],
    resposta: "Os agentes são componentes instalados nos computadores autorizados e participam do envio de informações para a estrutura do ARGUS. A documentação disponível não descreve plataforma de execução, mecanismo de atualização, protocolo de comunicação ou processo de instalação do agente."
  },
  {
    id: "implantacao", area: "implantacao", titulo: "Instalação e configuração",
    frases: ["como instalar e configurar", "como instalar", "passos de instalacao", "configurar o argus", "procedimento de implantacao"],
    termos: ["instalar", "instalacao", "configurar", "configuracao", "implantacao", "deploy", "passos"],
    resposta: "O README não documenta comandos, variáveis de ambiente, criação do banco ou ordem de implantação. Orientação segura: 1) confira os requisitos de sistema registrados; 2) obtenha da equipe responsável o guia de instalação e configuração correspondente à versão; 3) instale agentes somente em computadores autorizados. Não há base suficiente para fornecer comandos sem inventá-los."
  },
  {
    id: "requisitos", area: "implantacao", titulo: "Requisitos técnicos",
    frases: ["quais sao os requisitos tecnicos", "requisitos tecnicos", "requisitos do sistema", "windows 10", "windows 11", "node js", "mysql server"],
    termos: ["requisitos", "windows", "node", "lts", "mysql", "server", "servidor", "versao", "ambiente"],
    resposta: "O README registra Windows 10/11, versões LTS compatíveis do Node.js e MySQL Server 8 ou superior para o projeto principal. Não há número exato de versão do Node nem especificação adicional de CPU, memória, rede ou armazenamento. Esses requisitos são do ARGUS; esta demonstração independente precisa apenas de navegador moderno."
  },
  {
    id: "planos", area: "planos", titulo: "Planos propostos",
    frases: ["quais sao os planos", "planos e precos", "preco dos planos", "valores dos planos", "quanto custa o plano pro", "plano pro"],
    termos: ["planos", "free", "pro", "business", "preco", "valor", "computadores", "historico", "proposta"],
    resposta: "A proposta registrada indica: Free, R$ 0,00, até 10 computadores e histórico de 7 dias; Pro, R$ 49,00 mensais ou R$ 39,00 mensais no anual, até 50 computadores, histórico de 90 dias e alertas; Business, R$ 149,00 mensais ou R$ 119,00 no anual, computadores ilimitados e recursos propostos de IA, API e disponibilidade 24 horas. A proposta não confirma venda ou disponibilidade."
  },
  {
    id: "privacidade", area: "governanca", titulo: "Privacidade e segurança",
    frases: ["como funciona a privacidade", "seguranca e privacidade", "protecao de dados", "dados pessoais", "lgpd", "certificacao de seguranca"],
    termos: ["privacidade", "seguranca", "dados", "pessoais", "autorizacao", "transparencia", "certificacao", "protecao"],
    resposta: "A orientação documentada é monitorar com autorização da organização, transparência e cuidado com dados pessoais. O README não confirma certificação, criptografia, política de retenção, controle de acesso ou mecanismo técnico de segurança específico. Esses pontos devem ser validados com a equipe responsável."
  },
  {
    id: "suporte", area: "governanca", titulo: "Canal de suporte",
    frases: ["como obter suporte", "como falar com suporte", "contato do suporte", "telefone do suporte", "email do suporte", "ajuda tecnica"],
    termos: ["suporte", "contato", "telefone", "email", "ajuda", "tecnica", "equipe"],
    resposta: "O repositório não publica telefone, e-mail ou portal oficial de suporte. Procure a equipe responsável pelo projeto para obter o canal adequado. Não há informação suficiente para recomendar um contato específico."
  }
];

const stopWords = new Set(["a", "ao", "as", "com", "como", "da", "das", "de", "do", "dos", "e", "em", "o", "os", "para", "por", "qual", "quais", "que", "um", "uma"]);
const areaList = document.querySelector("#area-list");
const activeArea = document.querySelector("#active-area");
const topicChips = document.querySelector("#topic-chips");
const conversation = document.querySelector("#conversation");
const form = document.querySelector("#chat-form");
const input = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-button");
let areaAtual = areas[0];

function normalizar(texto) {
  return texto.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function tokensDo(texto) {
  return [...new Set(normalizar(texto).split(" ").filter((token) => token.length > 1 && !stopWords.has(token)))];
}

function configurarAreas() {
  areas.forEach((area) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "area-button";
    botao.dataset.area = area.id;
    botao.setAttribute("aria-current", String(area.id === areaAtual.id));
    const glyph = document.createElement("span");
    glyph.className = "area-glyph";
    glyph.setAttribute("aria-hidden", "true");
    glyph.textContent = area.simbolo;
    const nome = document.createElement("span");
    nome.textContent = area.nome;
    botao.append(glyph, nome);
    botao.addEventListener("click", () => selecionarArea(area));
    areaList.append(botao);
  });
  renderizarTopicos();
}

function selecionarArea(area) {
  areaAtual = area;
  activeArea.textContent = area.nome;
  areaList.querySelectorAll(".area-button").forEach((botao) => botao.setAttribute("aria-current", String(botao.dataset.area === area.id)));
  renderizarTopicos();
}

function renderizarTopicos() {
  topicChips.replaceChildren();
  areaAtual.topicos.forEach((topico) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "topic-chip";
    botao.textContent = topico;
    botao.addEventListener("click", () => enviarMensagem(topico));
    topicChips.append(botao);
  });
}

function pontuar(artigo, texto, tokens) {
  const frases = artigo.frases.map(normalizar);
  const fraseExata = frases.filter((frase) => ` ${texto} `.includes(` ${frase} `)).sort((a, b) => b.length - a.length)[0];
  const termos = new Set([...artigo.termos.map(normalizar), ...frases.flatMap(tokensDo)]);
  const compartilhados = tokens.filter((token) => termos.has(token));
  const coberturaDaPergunta = tokens.length ? compartilhados.length / tokens.length : 0;
  const especificidade = termos.size ? compartilhados.length / Math.sqrt(termos.size) : 0;
  const bonusDeFrase = fraseExata ? 2.5 + fraseExata.length / 120 : 0;
  const bonusDeArea = artigo.area === areaAtual.id && compartilhados.length ? 0.12 : 0;
  return { total: bonusDeFrase + coberturaDaPergunta * 1.2 + especificidade * 0.35 + bonusDeArea, fraseExata, compartilhados };
}

function buscarResposta(pergunta) {
  const texto = normalizar(pergunta);
  const tokens = tokensDo(pergunta);
  const ranking = artigos.map((artigo) => ({ artigo, ...pontuar(artigo, texto, tokens) })).sort((a, b) => b.total - a.total);
  const melhor = ranking[0];
  const limite = melhor?.fraseExata ? 2.5 : 0.72;
  if (melhor && melhor.total >= limite && melhor.compartilhados.length > 0) {
    const area = areas.find((item) => item.id === melhor.artigo.area);
    if (area) selecionarArea(area);
    return melhor.artigo.resposta;
  }
  if (["oi", "ola", "bom dia", "boa tarde", "boa noite"].some((termo) => ` ${texto} `.includes(` ${termo} `))) {
    return "Olá! Posso explicar os componentes, requisitos e o fluxo do ARGUS conforme o README disponível. Que área você quer consultar?";
  }
  return "Não encontrei base documental suficiente para responder com segurança. Você pode perguntar sobre Web, Platform, agentes, monitoramento, requisitos, instalação, planos, privacidade ou suporte. Se o detalhe não estiver no README, vou sinalizar que precisa ser confirmado pela equipe.";
}

function adicionarMensagem(remetente, texto) {
  const linha = document.createElement("div");
  linha.className = `message-row ${remetente === "user" ? "user-row" : "assistant-row"}`;
  const marca = document.createElement("div");
  marca.className = "message-mark";
  marca.setAttribute("aria-hidden", "true");
  marca.textContent = remetente === "user" ? "V" : "A";
  const corpo = document.createElement("div");
  corpo.className = "message-body";
  const rotulo = document.createElement("div");
  rotulo.className = "message-label";
  const autor = document.createElement("span");
  autor.textContent = remetente === "user" ? "VOCÊ" : "ASSISTENTE ARGUS";
  const hora = document.createElement("time");
  hora.dateTime = new Date().toISOString();
  hora.textContent = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date());
  rotulo.append(autor, hora);
  const bolha = document.createElement("div");
  bolha.className = `message-bubble ${remetente === "user" ? "user-bubble" : "assistant-bubble"}`;
  bolha.textContent = texto;
  corpo.append(rotulo, bolha);
  linha.append(marca, corpo);
  conversation.append(linha);
  conversation.scrollTop = conversation.scrollHeight;
}

function atualizarBotao() { sendButton.disabled = input.value.trim().length === 0; }

function enviarMensagem(valor = input.value) {
  const pergunta = valor.trim();
  if (!pergunta) { input.focus(); return false; }
  adicionarMensagem("user", pergunta);
  input.value = "";
  input.style.height = "auto";
  atualizarBotao();
  const resposta = buscarResposta(pergunta);
  window.setTimeout(() => adicionarMensagem("assistant", resposta), 120);
  input.focus();
  return true;
}

form.addEventListener("submit", (evento) => { evento.preventDefault(); enviarMensagem(); });
input.addEventListener("input", () => { input.style.height = "auto"; input.style.height = `${Math.min(input.scrollHeight, 100)}px`; atualizarBotao(); });
input.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" && !evento.shiftKey && !evento.isComposing) { evento.preventDefault(); enviarMensagem(); }
});

configurarAreas();
