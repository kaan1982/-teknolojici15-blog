---
title: "Skills de documentos: ensinando Word, Excel, PowerPoint e PDF ao agente"
excerpt: "O que fazem as skills docx, xlsx, pptx e pdf da Anthropic e onde funcionam? As skills oficiais e auxiliares que realmente ajudam na produção de documentos."
hook: "Relatório, planilha, apresentação: tudo numa skill"
fact: "4 DOCUMENTOS"
factLabel: "Número de skills de documentos prontas"
category: "Inteligência Artificial"
---

É fácil dizer à inteligência artificial "prepare um relatório para mim". O difícil é o relatório chegar como um arquivo Word ou Excel que realmente abra, sem formatação quebrada e com as fórmulas funcionando. A primeira e talvez mais usada categoria de skills é exatamente essa: documentos de escritório. Neste texto tratamos apenas das skills cuja existência confirmamos.

## Quatro pilares: docx, xlsx, pptx, pdf

Segundo a documentação do Claude, a Anthropic oferece quatro skills de documentos prontas (pre-built). Elas funcionam nos bastidores do recurso de criação de arquivos do Claude, e a Anthropic publica o código-fonte no repositório anthropics/skills, no GitHub.

| Skill | O que faz? (segundo as descrições oficiais) |
|---|---|
| docx | Cria, lê e edita documentos Word. Inclui formatação e modelos |
| xlsx | Abre e edita planilhas, adiciona fórmulas e gráficos, limpa dados bagunçados |
| pptx | Cria apresentações, edita slides, lê e analisa o conteúdo de .pptx |
| pdf | Extrai texto e tabelas, une e divide PDFs, preenche formulários, adiciona marca d'água |

As descrições no repositório são escritas de forma bem "insistente". Por exemplo, a descrição da skill pptx diz que ela deve ser usada se um arquivo .pptx estiver envolvido "de qualquer forma", como entrada ou saída. Esse é um exemplo oficial da regra "a descrição dispara", que explicamos no texto anterior.

## Onde você pode usar?

Em outubro de 2026, segundo a documentação do Claude, essas quatro skills já entram em ação automaticamente no claude.ai ao criar documentos e também podem ser chamadas como skills prontas na API do Claude. No Claude Code, as skills de documentos prontas não vêm embutidas. Mas o repositório anthropics/skills pode ser adicionado como marketplace de plugins para o Claude Code, e o pacote document-skills pode ser instalado. Segundo a instrução do repositório, primeiro se adiciona o marketplace com o comando /plugin marketplace add anthropics/skills e depois se instala document-skills@anthropic-agent-skills.

Há uma distinção quanto à licença. Muitas skills do repositório são de código aberto sob licença Apache 2.0. Mas as quatro skills de documentos são compartilhadas como "não são de código aberto, mas têm o código acessível" (source-available). Ou seja, você pode examinar o código e aprender, mas precisa ler o arquivo de licença antes de redistribuí-lo livremente em seu produto.

> **Você sabia?** A skill pdf é um exemplo de manual de carregamento progressivo. Segundo o texto de engenharia da Anthropic, as instruções de preenchimento de formulários foram tiradas do SKILL.md principal e movidas para um arquivo separado, forms.md. O Claude só lê esse arquivo quando realmente vai preencher um formulário. No repositório, dentro da pasta pdf, hoje há forms.md, reference.md e também uma pasta scripts.

## Auxiliares ao lado do documento

A produção de documentos não termina no formato do arquivo. No repositório anthropics/skills também há outros exemplos oficiais voltados ao conteúdo:

- **doc-coauthoring:** oferece um fluxo de trabalho passo a passo para escrever em conjunto textos estruturados, como especificações técnicas, propostas e documentos de decisão. Passa por etapas de transferência de contexto, refinamento iterativo e verificação.
- **internal-comms:** reúne recursos para ajudar a escrever textos de comunicação interna, como relatórios de status, atualizações para a diretoria, boletins da empresa e FAQs, nos formatos preferidos da empresa. Na pasta também há textos de exemplo.
- **brand-guidelines:** aplica a um resultado as cores e a tipografia oficiais da marca Anthropic. Seu valor real está em mostrar como montar algo parecido para a sua própria marca.
- **theme-factory:** contém 10 temas prontos de cores e fontes que podem ser aplicados a slides, documentos, relatórios ou páginas HTML e, se você quiser, gera um tema novo na hora.

A Central de Ajuda também menciona skills preparadas por parceiros como Notion, Figma e Atlassian para funcionar com seus próprios conectores MCP. Elas ajudam ao trabalhar com as ferramentas em que os documentos são produzidos (por exemplo, páginas do Notion).

## Como usar na vida real?

O uso mais produtivo é combinar as skills de documentos prontas com a sua própria skill pequena. Por exemplo, a skill xlsx sabe como produzir um Excel corretamente, mas não sabe quais colunas devem constar na planilha mensal de vendas da sua empresa. Se você escrever uma skill curta explicando isso, as duas trabalham juntas e saem com um arquivo tanto bem formatado quanto de acordo com o seu padrão.

Há duas notas que você não deve esquecer. A primeira: o repositório anthropics/skills escreve claramente que essas skills são "para demonstração e fins educacionais" e que o comportamento real do Claude pode ser diferente das implementações ali. A segunda: as skills de documentos precisam de um ambiente de execução de código. Segundo a Central de Ajuda, é preciso que o recurso de execução de código esteja ativado para as skills funcionarem.

No próximo texto passamos para o lado da tela: skills que produzem design, front-end e resultados para a web.

Em qual tipo de documento você mais perde tempo na hora de preparar: planilha, apresentação ou relatório?
