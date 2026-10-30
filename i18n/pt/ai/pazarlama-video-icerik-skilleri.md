---
title: "Skills de marketing, vídeo e conteúdo: a caixa de ferramentas do criador"
excerpt: "O repositório marketingskills de Corey Haines, o plugin de marketing da Anthropic, as skills do Remotion e do HeyGen HyperFrames. Seleções reais para conteúdo e vídeo."
hook: "Faça o vídeo com código, escreva o texto com uma skill"
fact: "52 SKILLS"
factLabel: "Número de skills no repositório marketingskills"
category: "Inteligência Artificial"
---

Por trás deste blog também são produzidos todos os dias vídeos curtos, capas e textos. Por isso, esta categoria é um pouco pessoal para nós: skills que produzem marketing, conteúdo e vídeo. É também a área em que as skills da comunidade mais se multiplicam. Listamos apenas os exemplos cujos repositórios abrimos e cujo conteúdo conferimos. Todos os números são do fim de outubro de 2026.

## marketingskills: uma biblioteca de marketing com 52 skills

O repositório coreyhaines31/marketingskills, de Corey Haines, nome por trás da agência de otimização de conversão Conversion Factory e com licença MIT, é uma das coleções da comunidade mais abrangentes da área. Segundo o README, foi preparado para profissionais de marketing técnico e fundadores e foca em trabalhos como otimização de conversão, copywriting, SEO, analytics e engenharia de crescimento. Informa que funciona com Claude Code, OpenAI Codex, Cursor e outros agentes que suportam o padrão Agent Skills.

Na pasta skills do repositório há 52 skills. Alguns exemplos:

- **copywriting:** para escrever ou melhorar o texto de qualquer página de marketing, como página inicial, página de destino e página de preços.
- **seo-audit:** para auditar e diagnosticar problemas de SEO em um site.
- **ai-seo:** para otimizar o conteúdo para mecanismos de busca com IA, isto é, para ser citado como fonte nas respostas dos grandes modelos de linguagem.
- **emails e cold-email:** para sequências de e-mail, fluxos automáticos e campanhas de e-mail frio B2B.
- **social:** para criar e planejar conteúdo para LinkedIn, X, Instagram, TikTok e Facebook.

Para a instalação, o README sugere o comando npx skills add coreyhaines31/marketingskills. Também é possível escolher skills individualmente.

## O plugin de marketing da Anthropic

O repositório anthropics/knowledge-work-plugins, da Anthropic, reúne plugins preparados por área profissional. Foram feitos para o Claude Cowork e são compatíveis também com o Claude Code. Cada plugin empacota, para aquele trabalho, skills, conectores, comandos barra e subagentes.

As skills dentro do plugin marketing são estas: brand-review (audita o rascunho conforme a voz da marca e o guia de estilo e sugere correções de antes/depois), campaign-plan (gera um resumo de campanha com objetivo, público, mensagem, estratégia de canais e calendário de conteúdo), content-creation, draft-content, email-sequence, competitive-brief, performance-report e seo-audit. O README lista que esse plugin pode se conectar a ferramentas como Slack, Canva, Figma, HubSpot e Ahrefs. Ou seja, aqui a skill fornece o "método", e o conector fornece o "acesso".

> **Você sabia?** Hoje os vídeos podem ser produzidos não só arrastando e soltando numa linha do tempo, mas também com código, e é aí que as skills entram em cena. A equipe do Remotion publica seu próprio conjunto oficial de skills para o framework de vídeo baseado em React. A HeyGen, por sua vez, oferece o HyperFrames, baseado na ideia de "escreva HTML, renderize vídeo", junto com skills para agentes.

## Para vídeo: Remotion e HyperFrames

| Pacote | Fonte | O que oferece? |
|---|---|---|
| remotion-dev/skills | Equipe do Remotion (oficial) | 12 skills: criação de vídeo, regras de animação, legendas, renderização, pré-visualização |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skills e blocos prontos para o framework que converte HTML em vídeo |

**Remotion:** segundo o README, o Remotion mantém uma lista de Agent Skills que define as melhores práticas para trabalhar em projetos Remotion. No conjunto há skills como remotion-create, que cria vídeos novos, remotion-markup, que carrega o conhecimento de animação e layout, remotion-captions, para transcrição e animação de legendas, remotion-render, para exportação, e remotion-best-practices, que encaminha para todas as outras. A instalação é feita com npx skills add remotion-dev/skills.

**HyperFrames:** o repositório da HeyGen se apresenta como "escreva HTML, renderize vídeo, feito para agentes". Segundo o README, o conjunto básico é formado pelas skills hyperframes (fazer e editar vídeo), hyperframes-cli (esqueleto do projeto, pré-visualização, renderização), hyperframes-registry (cerca de 450 blocos prontos de transição, título, legenda e gráfico) e media-use (trabalhos de mídia como música, efeitos sonoros, imagem e locução). No total, são 7 skills publicadas.

Um detalhe interessante: a descrição da skill de vídeo do repositório de Corey Haines também lista nomes como Remotion, HyperFrames e HeyGen como palavras de acionamento. Ou seja, a skill de marketing foi escrita para funcionar como uma ponte para as skills de vídeo.

## O que observar na escolha?

A maioria das skills nesta área vem da comunidade ou de empresas e é atualizada muito rápido. Antes de instalar um pacote, fazer estas três perguntas facilita a vida: de quem é o repositório e ele é atualizado ativamente? Há no SKILL.md alguma instrução que se conecte a endereços externos ou peça credenciais? Você consegue escolher e instalar só as poucas skills de que realmente precisa? A maioria das ferramentas de instalação permite escolher uma skill por vez, em vez de "instalar tudo", e isso reduz tanto o contexto quanto o risco.

Na produção de conteúdo, qual é o maior ladrão de tempo para você: escrever o texto, preparar as imagens ou editar o vídeo?
