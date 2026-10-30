---
title: "Escreva a sua própria skill: a primeira habilidade, passo a passo, com SKILL.md"
excerpt: "Uma pasta, um SKILL.md e uma descrição bem escrita. Os passos para escrever o seu próprio Agent Skill, a importância do campo description e o método de teste."
hook: "É a descrição que aciona a skill"
fact: "1.024"
factLabel: "Máximo de caracteres do campo description"
category: "Inteligência Artificial"
---

Para escrever uma skill você não precisa ser programador. Na forma mais simples, basta uma pasta com um único arquivo de texto dentro. Mas a diferença entre uma skill que funciona bem e uma que nunca é acionada costuma estar numa única frase: a descrição. Neste texto escrevemos do zero uma skill pequena, mas de verdade.

## Passo 1: crie a pasta e o SKILL.md

Segundo a especificação do Agent Skills, uma skill é uma pasta que contém pelo menos um arquivo SKILL.md. No início do arquivo fica o frontmatter YAML, e dois campos são obrigatórios:

- **name:** No máximo 64 caracteres. Apenas letras minúsculas, números e hífen. Não pode começar nem terminar com hífen, não pode ter dois hífens seguidos e deve ser igual ao nome da pasta. A documentação do Claude também observa que as palavras "anthropic" e "claude" não podem ser usadas no nome.
- **description:** Não pode ser vazio, no máximo 1.024 caracteres. Deve dizer o que a skill faz e quando deve ser usada.

Há também campos opcionais (license, compatibility, metadata e o experimental allowed-tools), mas a maioria das skills não precisa deles.

## Passo 2: escreva a descrição com cuidado

Por que a descrição é tão importante? Porque, ao iniciar, o agente lê de cada skill apenas o nome e a descrição. Nas palavras do agentskills.io, todo o "peso" do acionamento está sobre a descrição. Se a descrição não diz quando o trabalho será útil, o agente não recorre àquela skill.

As recomendações das fontes podem ser resumidas assim:

- Escreva **o que ela faz** e **quando deve ser usada**.
- A documentação do Claude recomenda escrever a descrição na **terceira pessoa**, porque ela é inserida no prompt do sistema ("Processa arquivos do Excel", e não "Posso ajudar você").
- O agentskills.io sugere listar explicitamente também os casos em que o usuário não cita a área pelo nome.
- Seja breve: algumas frases, no máximo um parágrafo curto. O Claude Code corta a descrição em 1.536 caracteres na listagem, por isso o caso de uso mais importante deve vir no começo.

## Passo 3: corpo curto, script esperto

Como exemplo, pensemos numa skill que segue a regra de escrita deste blog: nenhum travessão longo (em dash) nem travessão médio (en dash) no texto. Que a estrutura da pasta seja assim:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

E o arquivo SKILL.md seja só isto:

```markdown
---
name: tire-denetimi
description: Encontra o uso de travessão longo (U+2014) e travessão médio (U+2013) em posts de blog e sugere correções. Usada quando o usuário prepara um texto em Markdown para publicação, diz "verifique os travessões" ou "está de acordo com as regras de escrita", ou, mesmo sem citar o nome, pede uma checagem final antes de publicar.
---

# Auditoria de travessões

1. Execute o comando `python scripts/tire_bul.py <arquivo.md>`.
2. Para cada linha da saída, sugira trocar o travessão por ponto, vírgula, dois-pontos ou parênteses.
3. Não altere o sentido. Pergunte ao usuário sobre as linhas de que não tiver certeza.
4. No fim, informe em uma frase quantas linhas foram corrigidas.
```

A documentação do Claude vê a janela de contexto como um "recurso compartilhado" e recomenda acrescentar apenas as informações que o modelo ainda não conhece. O corpo deve ficar abaixo de 500 linhas. Textos de referência longos devem ir para arquivos separados, e o SKILL.md deve apontar para eles com um link de um único nível.

A regra para os scripts também é clara: "resolva, não jogue a bola". Ou seja, o script deve tratar ele mesmo as situações de erro, e não ser escrito com a lógica de "que quebre, o Claude dá um jeito". Quando o script roda, o que entra no contexto não é o código em si, mas apenas a sua saída. Isso torna o script mais confiável do que uma instrução para tarefas repetitivas e que não toleram erro.

> **Você sabia?** No Claude Code, os antigos "comandos barra personalizados" se fundiram com as skills. O arquivo .claude/commands/deploy.md e o arquivo .claude/skills/deploy/SKILL.md criam o mesmo comando /deploy. Se você não quer que uma skill seja acionada automaticamente, pode adicionar disable-model-invocation: true ao frontmatter e chamá-la apenas manualmente.

## Passo 4: teste, e depois teste de novo

O guia de boas práticas do Claude recomenda preparar cenários de avaliação antes de escrever um documento longo, e a lista de verificação pré-publicação inclui pelo menos três avaliações e testes separados nos modelos Haiku, Sonnet e Opus. A razão é simples: uma instrução que funciona perfeitamente no Opus pode exigir mais detalhes para o Haiku.

Para testar o acionamento, a sugestão do agentskills.io é concreta: prepare cerca de 20 mensagens de usuário de exemplo. Entre 8 e 10 delas devem acionar a skill e entre 8 e 10 não devem. Os exemplos negativos mais valiosos são os que "passam raspando", isto é, mensagens que compartilham as mesmas palavras mas pedem outro trabalho. Como o comportamento do modelo não é sempre o mesmo, recomenda-se rodar cada mensagem algumas vezes (3, para começar) e olhar a taxa de acionamento.

| Descrição ruim | Descrição boa |
|---|---|
| "Ajuda com PDFs." | Diz o que faz e quando deve ser usada |
| Apenas detalhe técnico | Descreve a intenção do usuário |
| Cobre tudo | Também diz o que não faz |

A instalação também é simples: no Claude Code, basta colocar a pasta em ~/.claude/skills/ (pessoal) ou na pasta .claude/skills/ do projeto. O Claude Code monitora essas pastas e percebe as mudanças na mesma sessão, sem precisar reiniciar. No claude.ai, você pode enviar a skill em zip pelas configurações.

Qual tarefa repetitiva sua a sua primeira skill automatizaria?
