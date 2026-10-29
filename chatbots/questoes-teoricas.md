# Questões teóricas — Chatbot ARGUS

## Integrantes

- Haniel Sousa e Souza
- Matheus Pereira de Jesus
- Gabriel Henrique Bispo Costa
- Kaique de Souza Nunes da Silva
- Tais Millena Bispo Caldas
- Rafaela Victoria do Rosário Portugal

## 1. Como o chatbot funciona?

Cada versão exibe uma interface em HTML e trata a conversa com JavaScript no navegador. O código normaliza a pergunta, procura um assunto na base local de respostas e acrescenta a mensagem do usuário e a resposta do assistente à conversa. Não há chamada ao backend, à API ou ao banco do ARGUS.

Na versão 1, uma sequência de regras por palavras-chave escolhe a resposta. A versão 2 associa aliases às perguntas dentro de categorias e mostra sugestões clicáveis. A versão 3 classifica artigos por frases reconhecidas e pontuação de termos, com conteúdo técnico mais detalhado.

## 2. Como o JavaScript captura a mensagem?

O código localiza o campo `#message-input` com `document.querySelector()`. No envio, lê `input.value`, remove espaços nas extremidades com `trim()` e interrompe o processamento se o conteúdo ficar vazio. O formulário trata o evento `submit`, que é acionado pelo botão Enviar; um evento `keydown` também envia quando a tecla é Enter, exceto com Shift ou durante composição de texto.

Na versão 1, esse fluxo está em `enviarMensagem()`. As versões 2 e 3 usam a mesma estratégia e preservam a quebra de linha com Shift + Enter.

## 3. Como o sistema identifica o assunto?

Todas as versões convertem o texto para minúsculas, removem acentos, pontuação excedente e espaços repetidos.

- **Versão 1:** `correspondeAAlgumTermo()` combina a pergunta normalizada com listas de expressões e `includes()`. `obterResposta()` avalia as regras usando `if` e `else if` em ordem.
- **Versão 2:** cada pergunta tem aliases dentro de uma categoria. As expressões são comparadas ao texto normalizado; se mais de uma coincidir, a expressão mais específica (mais longa) tem prioridade. A categoria também pode ser escolhida pela pessoa.
- **Versão 3:** `buscarResposta()` compara frases cadastradas e calcula uma pontuação de sobreposição entre os termos da pergunta e os artigos. O melhor artigo acima do limite definido fornece a resposta; abaixo desse limite, o assistente admite que não encontrou base suficiente.

As listas de expressões e os limites são regras locais, não um modelo generativo de linguagem.

## 4. Como as respostas são apresentadas?

As três versões criam elementos DOM para cada mensagem e preenchem o conteúdo com `textContent`. Assim, uma mensagem digitada é mostrada como texto e não executada como HTML. A classe visual identifica se a linha pertence ao usuário ou ao assistente, e a área de conversa acompanha as mensagens recentes.

Existe uma função `adicionarMensagem()` em cada arquivo JavaScript: na versão 1, ela recebe remetente e texto; as versões 2 e 3 têm uma função equivalente com o mesmo nome.

## 5. Onde estão cadastradas as informações da empresa?

Na versão 1 existe `const empresa = {}`. O objeto guarda nome, descrição, objetivo, público, funcionamento, orientação de privacidade e requisitos. `obterResposta()` usa essas propriedades para montar respostas.

As versões 2 e 3 não possuem um objeto chamado `empresa`: seus textos estão diretamente nos registros de perguntas e respostas (`categorias` e `artigos`). Essa diferença é uma adaptação da organização da base a cada lógica.

## 6. Onde estão cadastrados os serviços ou produtos?

Na versão 1 existe `const servicos = []`, com os planos Free, Pro e Business e campos de preço, limites, histórico e recursos. `formatarPlano()`, `responderSobrePlano()` e `listarPlanos()` usam essa lista. Os itens são apresentados como uma proposta comercial, não como confirmação de oferta ativa.

As versões 2 e 3 não têm `const servicos = []`: cada uma mantém as respostas sobre planos em sua própria base de perguntas e artigos. Para as três, valores e recursos precisam ser confirmados pela equipe antes de serem tratados como oferta vigente.

## 7. Como o chatbot foi integrado ao site?

As três versões desta entrega são páginas estáticas independentes, com seus próprios arquivos `index.html`, `style.css` e `script.js`. O material disponível afirma que o chatbot anterior também funcionava localmente e que a integração à aplicação principal seria avaliada depois. Não há integração implementada com o site ARGUS, backend, API ou MySQL.

A hospedagem demonstrativa em GitHub Pages descrita no README anterior era uma publicação estática do chatbot; isso não significa que ele estivesse conectado à Web do produto. A futura integração precisa ser desenvolvida e testada separadamente.

## 8. O que poderia ser melhorado?

1. **Manter uma fonte única e revisada de conhecimento**, alimentada pela documentação oficial do ARGUS. Isso reduz divergências entre as três bases e facilita atualizar requisitos, funcionalidades, preços e suporte.
2. **Adicionar testes automatizados de classificação**, cobrindo aliases, acentos, conflitos entre palavras-chave e perguntas desconhecidas. Isso ajuda a detectar regressões quando a base crescer.
3. **Integrar uma API oficial em uma etapa futura**, após definir autenticação, permissões e dados que podem ser consultados. Isso permitiria respostas atualizadas sem afirmar que essa conexão existe hoje.

As melhorias são propostas. A documentação disponível não permite especificar o contrato de uma API nem os canais reais de suporte.
