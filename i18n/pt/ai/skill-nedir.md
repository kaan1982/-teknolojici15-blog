---
title: "O que é uma skill? As novas \"pastas de habilidades\" dos agentes de IA"
excerpt: "Um Agent Skill é uma pasta com um arquivo SKILL.md e scripts opcionais. O agente só a carrega quando necessário. Qual a diferença para prompt, MCP e plugin?"
hook: "Ensine uma habilidade nova ao agente com uma pasta"
fact: "3 CAMADAS"
factLabel: "Carregamento progressivo do conteúdo de uma skill"
category: "Inteligência Artificial"
---

Os assistentes de inteligência artificial sabem um pouco de tudo, mas não conhecem o modelo de relatório da sua empresa, as cores da sua marca nem os truques para processar direito um tipo de arquivo. E se, em vez de explicar isso longamente em cada conversa, você pudesse empacotar uma vez e dizer ao agente "use quando precisar"? É exatamente essa a ideia da "skill" (habilidade).

## Em resumo: uma pasta e um SKILL.md

Na definição da Anthropic, os Agent Skills são pacotes modulares que ampliam as capacidades do Claude. Cada skill reúne instruções, metadados e recursos opcionais (scripts, modelos), e o Claude os usa por conta própria quando são relevantes. O blog de engenharia da Anthropic diz isso de forma ainda mais simples: skills são "pastas organizadas de instruções, scripts e recursos" que o agente carrega na hora da necessidade para ficar melhor em tarefas específicas.

Tecnicamente, uma skill é uma pasta que contém, no mínimo, um arquivo chamado SKILL.md. No início desse arquivo, em formato YAML, há dois campos obrigatórios: name (nome) e description (descrição). Abaixo vêm as instruções escritas em Markdown simples. Na pasta você pode, se quiser, adicionar subpastas como scripts/ (código executável), references/ (documentos adicionais) e assets/ (modelos, imagens, dados).

A Anthropic compara essa estrutura a um guia de integração preparado para um novo funcionário. Você deixa o guia na mesa, e o funcionário o abre e consulta quando precisa.

## O segredo: nem tudo é carregado de uma vez

O que diferencia as skills de um prompt longo comum é um design chamado "carregamento progressivo" (progressive disclosure). Segundo a documentação do Claude, o conteúdo é carregado em três camadas:

| Camada | Quando é carregada? |
|---|---|
| 1. Metadados (nome + descrição) | Sempre, na inicialização (cerca de 100 tokens por skill) |
| 2. Corpo do SKILL.md | Quando a skill é acionada (recomenda-se menos de 5.000 tokens) |
| 3. Arquivos adicionais e scripts | Só quando necessário; apenas a saída dos scripts entra no contexto |

Assim, você pode instalar dezenas de skills no agente sem que todas encham a janela de contexto. Até serem acionadas, de cada skill ficam "na mesa" apenas o nome e a descrição. No exemplo da documentação, a skill de PDF guarda as instruções de preenchimento de formulários em um arquivo separado, forms.md, e o Claude só lê esse arquivo quando realmente vai preencher um formulário.

> **Você sabia?** A Anthropic anunciou o Agent Skills em 16 de outubro de 2025 e, em 18 de dezembro de 2025, publicou o formato como padrão aberto em agentskills.io. Por isso, em outubro de 2026, você vê a mesma estrutura SKILL.md também na documentação de outras ferramentas, como o GitHub Copilot e o OpenAI Codex. A documentação do Copilot remete diretamente à especificação do agentskills.io para verificar as skills.

## Prompt, MCP, plugin: qual a diferença?

Esses conceitos são muito confundidos, porque todos tratam de "deixar o agente melhor". A distinção da Central de Ajuda do Claude pode ser resumida assim:

- **Prompt ou instruções personalizadas:** orientações gerais, válidas em cada conversa ou em todas as conversas. Já a skill é específica para uma tarefa e só entra em ação quando é relevante.
- **Projetos:** conhecimento de fundo fixo, sempre carregado nas conversas dentro de um projeto. Já a skill é um procedimento aberto quando necessário.
- **Conectores MCP (Model Context Protocol):** conectam o Claude a serviços e fontes de dados externos. Ou seja, dão "acesso". Já a skill é o "conhecimento de método" que explica como usar esse acesso. A Central de Ajuda diz que os dois costumam ser usados juntos.
- **Plugins:** no Claude Code e no Cowork, o plugin é o pacote para distribuir várias peças (skills, conectores, comandos, subagentes) juntas. A documentação da OpenAI faz uma distinção parecida: a skill é o formato de autoria, e o plugin é a forma de distribuição.

Em resumo, o MCP dá uma mão ao agente, a skill ensina uma habilidade a essa mão, e o plugin entrega tudo isso numa caixa.

## Onde funciona?

Em outubro de 2026, segundo a documentação do Claude, as skills podem ser usadas nos aplicativos do Claude (claude.ai), no Claude Code e na API do Claude, junto com a ferramenta de execução de código. A Central de Ajuda informa que as skills são oferecidas nos planos Free, Pro, Max, Team e Enterprise e exigem que o recurso de execução de código esteja ativado.

Um detalhe importante: as skills personalizadas não são sincronizadas entre as plataformas. A skill que você envia ao claude.ai é privada da sua conta. A skill enviada à API é compartilhada com todo o workspace. No Claude Code, ela fica na pasta pessoal (~/.claude/skills/) ou na pasta do projeto (.claude/skills/).

Há também a dimensão de segurança. Como as skills podem executar código, a documentação recomenda tratá-las "como a instalação de software" e usar apenas as de fontes confiáveis. Tratamos disso à parte no último texto da série.

Nos próximos textos desta seção, vamos escrever passo a passo a sua própria skill e examinar, por categoria, as skills que realmente existem e funcionam.

Qual tarefa que você explica à IA vez após vez e pensa "queria ensinar isso uma só vez"?
