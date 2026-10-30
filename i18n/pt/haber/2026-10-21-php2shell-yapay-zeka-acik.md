---
title: "A IA encontrou uma falha crítica no PHP, do qual dependem 70% dos sites"
excerpt: "Duas falhas chamadas PHP2Shell permitem executar código no servidor sem fazer login. Na descoberta foram usados modelos como GPT-5.6 Sol e Gemini 4 Argon."
hook: "A IA achou a falha gigante do PHP"
fact: "CVSS 9,2"
factLabel: "Maior pontuação das falhas do PHP2Shell"
category: "Inteligência artificial"
---
Em 21 de outubro, os desenvolvedores do PHP lançaram um patch urgente para duas vulnerabilidades críticas no motor central da linguagem. As falhas, batizadas de "PHP2Shell" e registradas como CVE-2026-109618 e CVE-2026-109619, foram descobertas com a ajuda de ferramentas de inteligência artificial.

## O que aconteceu?

Segundo a Fortune, a empresa de testes de segurança com IA Calif encontrou a primeira peça da cadeia em 1º de agosto com o GPT-5.6 Sol; a Wiz identificou a primeira falha de forma independente em 19 de agosto e a comunicou à equipe de segurança do PHP em 24 de agosto. Na descoberta foram usados a ferramenta da própria Wiz, o Wiz Atlas, e os modelos GPT-5.6 Sol da OpenAI e Gemini 4 Argon do Google.

As vulnerabilidades permitem que um invasor execute código remotamente no servidor sem fazer login e vaze dados da memória. De acordo com a Wiz, praticamente todas as versões do PHP lançadas na última década, até a 5.4, são afetadas. A maior pontuação de gravidade é 9,2 na escala CVSS. O PHP roda por trás de cerca de 70% dos sites do mundo; só o WordPress administra aproximadamente 40% deles. Segundo a reportagem atualizada da Fortune, depois do patch as falhas passaram a ser exploradas em larga escala.

## Por que importa?

É um dos exemplos mais concretos de que, na pesquisa de segurança, a inteligência artificial deixou de ser apenas uma auxiliar e pode ser quem faz a descoberta. Mas as mesmas ferramentas estão nas mãos dos invasores, e o tempo entre o lançamento do patch e o início da exploração diminui. Todo dono de site que usa PHP precisa atualizar o servidor imediatamente. Num quadro mais amplo, erros escondidos no código antigo que roda há décadas na internet podem vir à tona muito mais depressa. A história do primeiro programa que circulava sozinho pela rede nós contamos no [artigo sobre o Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
