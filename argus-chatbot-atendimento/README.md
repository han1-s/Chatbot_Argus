# ARGUS — Chatbot de atendimento

**Versão apresentada:** 1.0.0

**Integrantes responsáveis:** [preencher nomes da equipe]

## Sobre o ARGUS

O ARGUS é um sistema de monitoramento e análise de computadores voltado para empresas. Seu objetivo é oferecer uma visão centralizada dos computadores autorizados de uma organização, acompanhar informações de atividades e apoiar a análise da utilização dos recursos computacionais.

O produto principal possui uma interface administrativa Web e uma Platform que participa do monitoramento e da apresentação das informações enviadas pelos agentes instalados nos computadores autorizados. A Web e a Platform utilizam a mesma conta e o mesmo banco de dados MySQL.

## Objetivo do chatbot

Este projeto apresenta um atendimento virtual independente para responder dúvidas introdutórias sobre o ARGUS, seu funcionamento, público, cuidados de privacidade e proposta de planos. As respostas são identificadas por palavras-chave em uma base cadastrada no JavaScript. O chatbot funciona no próprio navegador, sem cadastro, serviços externos ou conexão ao sistema principal.

## Funcionalidades

- Exibe saudação e sugestões de perguntas iniciais.
- Envia pelo botão ou pela tecla Enter; Shift + Enter insere uma quebra de linha.
- Impede o envio de conteúdo vazio e normaliza acentos, pontuação e maiúsculas/minúsculas para reconhecer perguntas.
- Distingue as mensagens da pessoa usuária e do assistente, mantém o histórico visível e acompanha a mensagem mais recente.
- Responde a perguntas sobre o produto, a Web e a Platform, os agentes, público, benefícios pretendidos, instalação, privacidade e planos propostos.
- Informa quando não reconhece a pergunta e permite continuar a conversa.
- Insere as mensagens como texto, sem interpretar a entrada como HTML.
- Adapta a interface a telas menores e respeita a preferência do sistema por movimento reduzido.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Navegador moderno

Não são necessários React, TypeScript, banco de dados, bibliotecas ou APIs externas para executar esta versão.

## Arquivos

```text
argus-chatbot-atendimento/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Como executar

1. Baixe ou extraia a pasta do projeto.
2. Abra `index.html` em um navegador moderno.
3. Digite uma pergunta ou selecione uma sugestão. Não é necessário instalar dependências nem iniciar um servidor.

## Perguntas para experimentar

- O que é o ARGUS? / Me explica o Argus.
- Para que serve esse programa? / Qual é a função desse sistema?
- Como funciona o monitoramento?
- O que é a Platform?
- Qual é a diferença entre Web e Platform?
- Quais são os planos? / Quanto custa o plano Pro? / Existe um plano gratuito?
- Quem pode utilizar o ARGUS?
- Preciso instalar algo nos computadores?
- Como os dados chegam ao sistema?
- O ARGUS ajuda na produtividade?
- Como funciona a privacidade?
- Como posso contratar?
- O que você consegue responder?
- Qual é a capital de um país imaginário?

## Testes realizados

- `node --check script.js`: passou, sem erros de sintaxe.
- Teste funcional local em Node: passou em 19 perguntas e variações, cobrindo as categorias obrigatórias, acentos e capitalização, preços, desconhecidos, segurança com `textContent`, envio pelo formulário e Enter, bloqueio de mensagens vazias, continuidade da conversa e rolagem.
- Smoke test no Chrome headless: passou ao clicar numa sugestão, enviar pelo botão e por Enter, e tentar enviar uma mensagem vazia; as respostas apareceram, as sugestões foram ocultadas, o botão foi desabilitado para texto vazio e não ocorreram erros JavaScript.
- Conferência visual em Chrome headless em janela ampla e estreita; as regras CSS incluem os breakpoints responsivos e a preferência por movimento reduzido.

## Justificativa técnica

A versão utiliza uma base de conhecimento organizada e regras de palavras-chave para oferecer respostas previsíveis, reconhecer variações comuns de escrita e apresentar uma resposta útil quando não identifica o assunto. A interface separa as mensagens e usa `textContent` para exibi-las com segurança. HTML, CSS e JavaScript puros mantêm a solução simples de abrir, apresentar e atualizar no contexto acadêmico, sem introduzir dependências que o chatbot não precisa.

## Integração com o ARGUS

Esta é uma aplicação independente. Ela não importa arquivos do produto principal, não acessa seu banco de dados e não consulta seus agentes. A integração ao site principal será avaliada futuramente, após a avaliação das versões desenvolvidas pela equipe.

## Publicação

Repositório: [han1-s/Chatbot_Argus](https://github.com/han1-s/Chatbot_Argus).

O GitHub Pages usa a branch `gh-pages`, que contém `index.html`, `style.css` e `script.js` na raiz. Para publicar uma atualização, sincronize esses três arquivos de `argus-chatbot-atendimento/` com a raiz de `gh-pages` e envie as duas branches ao repositório.

Demonstração publicada: [ARGUS — Chatbot de atendimento](https://han1-s.github.io/Chatbot_Argus/).
