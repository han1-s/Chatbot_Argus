# ARGUS — chatbots de atendimento

## Objetivo

Este conjunto apresenta três chatbots independentes para explicar o ARGUS e responder dúvidas introdutórias sobre o sistema. As respostas são locais, escritas previamente e não consultam a aplicação principal, sua API ou o banco de dados.

O repositório disponível para esta atividade contém o chatbot anterior, mas não o código da Web, da Platform ou dos agentes do ARGUS. As informações abaixo foram consolidadas a partir do README desse chatbot anterior. Detalhes que não constavam nessa documentação são identificados como não confirmados.

## Fatos usados nas respostas

- O ARGUS é descrito como um sistema empresarial de monitoramento e análise de computadores.
- A Web é a interface administrativa. A Platform participa do monitoramento e da apresentação das informações recebidas dos agentes. Web e Platform usam a mesma conta e o mesmo banco MySQL.
- Agentes instalados em computadores autorizados enviam informações para a estrutura do sistema. O README não especifica protocolos, frequência de coleta ou todos os tipos de dados.
- Os requisitos registrados para o projeto principal são Windows 10/11, uma versão LTS compatível do Node.js e MySQL Server 8 ou superior. O procedimento completo de instalação, versões pontuais, requisitos de hardware e configuração não estão descritos.
- Free, Pro e Business são apresentados como uma **proposta comercial**. O README não confirma que os planos estejam disponíveis para contratação.
- A orientação de privacidade é monitorar com autorização, transparência e cuidado com dados pessoais. Não há confirmação de certificações ou mecanismos técnicos específicos.
- Não há canal oficial, e-mail ou telefone de suporte registrado. Os chatbots encaminham essa dúvida à equipe responsável sem inventar contatos.

## Versões

| Versão | Abordagem e diferença funcional | Arquivos |
| --- | --- | --- |
| 1 — Atendimento direto | Continuação do chatbot existente. Normaliza acentos e pontuação, compara expressões por palavras-chave em regras ordenadas e responde rapidamente às perguntas frequentes. | [`versao-1/`](versao-1/) |
| 2 — Atendimento guiado | Oito categorias apresentam sugestões clicáveis. A pessoa pode seguir o roteiro ou escrever livremente; aliases reconhecem formulações equivalentes, e a resposta de instalação organiza os próximos passos sem inventar comandos. | [`versao-2/`](versao-2/) |
| 3 — Assistente técnico | Seis áreas técnicas apresentam perguntas de referência. A busca combina frases cadastradas com pontuação de termos para selecionar artigos mais detalhados sobre Web, Platform, agentes, fluxo, implantação e limites documentais. | [`versao-3/`](versao-3/) |

As três versões têm HTML, CSS e JavaScript próprios, funcionam sem instalação de dependências e possuem campo de texto, botão, envio por Enter, identificação dos remetentes, saudação, normalização e resposta para perguntas não reconhecidas. O conteúdo das mensagens é inserido como texto.

## Como executar

Abra `index.html` da versão desejada em Chrome, Edge ou outro navegador moderno:

1. `chatbots/versao-1/index.html`
2. `chatbots/versao-2/index.html`
3. `chatbots/versao-3/index.html`

Não é necessário instalar pacotes, iniciar servidor ou configurar banco de dados. Cada diretório contém os arquivos necessários para executar sua versão localmente.

## Equipe

- Haniel Sousa e Souza
- Matheus Pereira de Jesus
- Gabriel Henrique Bispo Costa
- Kaique de Souza Nunes da Silva
- Tais Millena Bispo Caldas
- Rafaela Victoria do Rosário Portugal

A divisão de responsáveis ou duplas por versão não consta no material disponível e permanece **pendente de confirmação da equipe**.

## Testes executados

As três versões foram abertas e exercitadas no Chrome em modo headless. Foram aprovadas **85 verificações**, incluindo:

- carregamento da interface, saudação, campo e botão;
- envio pelo botão e pela tecla Enter;
- identificação de mensagens do usuário e do assistente;
- nove assuntos: ARGUS, funcionalidades, monitoramento, instalação, requisitos, planos, privacidade, suporte e componentes;
- reconhecimento de formulações equivalentes;
- resposta para pergunta desconhecida e bloqueio de mensagem vazia;
- continuidade após várias mensagens;
- seleção de categorias e envio de sugestões na versão 2, e seleção de áreas e tópicos na versão 3;
- visualização a 390 px sem rolagem horizontal;
- ausência de erros JavaScript relevantes no console.

Também foi executado `node --check` nos três arquivos JavaScript. As verificações e capturas foram realizadas antes da remoção do diretório original, com cada nova versão carregada a partir do próprio diretório. Não foi testada integração com o ARGUS real porque seu código não está neste repositório.

## Evidências

Os prints foram capturados no Chrome após uma conversa real em cada interface. Cada conversa mostra a saudação inicial, perguntas de assuntos diferentes, uma variação de pergunta e uma pergunta não reconhecida.

- [Versão 1](../evidencias/versao-1.png)
- [Versão 2](../evidencias/versao-2.png)
- [Versão 3](../evidencias/versao-3.png)

## Comparação e recomendação

| Critério | Versão 1 | Versão 2 | Versão 3 |
| --- | --- | --- | --- |
| Organização da conversa | Campo livre e respostas diretas | Categorias e sugestões visíveis | Áreas técnicas e tópicos de referência |
| Facilidade de uso | Alta para perguntas curtas | Alta para quem ainda não sabe o que perguntar | Boa para quem procura orientação técnica |
| Variações de perguntas | Lista explícita de palavras-chave | Aliases por pergunta e escolha guiada | Correspondência de frases e pontuação de termos |
| Profundidade | Introdutória | Introdutória, com orientação em etapas | Mais detalhada, com limites documentais explícitos |
| Manutenção | Simples; regras podem crescer em uma lista longa | Categorias e respostas são editadas juntas | Artigos, aliases, áreas e pontuação exigem atualização coordenada |
| Adequação para integração futura | Boa para um widget simples | Boa para atendimento público com navegação | Boa como apoio técnico ou central de documentação |

**Recomendação técnica: versão 2** para uma primeira integração ao site. As categorias ajudam visitantes a encontrar perguntas, as sugestões reduzem o esforço de formulação, e as respostas permanecem organizadas para manutenção. A escolha é uma recomendação técnica; a equipe ainda precisa testar e decidir qual versão adotar.

Todas as versões são demonstrações independentes. A integração à Web do ARGUS e qualquer consulta à API exigem uma etapa futura de implementação e validação; não estão presentes aqui. A versão 3 pode ser preferível caso o público principal seja a equipe técnica.

## Pendências da equipe

- Confirmar a divisão dos seis integrantes entre as três versões.
- Comparar as demonstrações e escolher a versão para o site.
- Confirmar os canais de suporte, o procedimento real de instalação e os detalhes técnicos que não aparecem no README disponível.
- Confirmar se os planos e preços propostos refletem uma oferta vigente.
