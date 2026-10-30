---
title: "Segurança de skills: tudo o que você precisa ler antes de instalar"
excerpt: "Skills podem executar código e buscar instruções em fontes externas. Um guia sobre fonte confiável, revisão do SKILL.md e dos scripts, privilégio mínimo e chaves secretas."
hook: "Instalar uma skill é instalar software"
fact: "13,4%"
factLabel: "Proporção de skills com falha crítica (Snyk, 2026)"
category: "Inteligência Artificial"
---

O que torna as skills tão poderosas é também o que as torna arriscadas: uma skill pode carregar não só texto, mas também código executável. Quando o agente carrega aquela skill, segue as instruções dela como se fossem suas e pode executar seus scripts. Por isso, a recomendação da documentação do Claude pode ser resumida em uma frase: trate a instalação de skills como a instalação de software.

## O que dizem as fontes oficiais?

A seção de segurança da documentação do Claude é bastante direta. Recomenda usar skills apenas de fontes confiáveis, ou seja, as que você mesmo escreveu ou as que vêm da Anthropic. Se você precisar usar uma skill de fonte desconhecida, pede que tenha "extremo cuidado" e a audite de ponta a ponta antes de usar.

O texto de engenharia da Anthropic segue a mesma linha: em skills de fontes menos confiáveis, recomenda examinar os arquivos empacotados, em especial as dependências de código e os scripts, e verificar também instruções que mandam se conectar a redes externas. A documentação destaca ainda um risco específico: skills que buscam dados em endereços externos são perigosas, porque o conteúdo buscado pode conter instruções maliciosas.

## O que está acontecendo no campo?

Esses avisos não são teóricos. A empresa de segurança Snyk, em sua pesquisa "ToxicSkills", publicada em 5 de fevereiro de 2026, analisou 3.984 skills do ClawHub e do skills.sh. Os resultados:

| Achado | Quantidade |
|---|---|
| Skills analisadas | 3.984 |
| Com pelo menos um problema de segurança | 1.467 (36,82%) |
| Com pelo menos um problema crítico | 534 (13,4%) |
| Carga maliciosa confirmada | 76 |

Segundo o relatório, os dados do skills.sh cobrem apenas as 100 primeiras skills selecionadas do site, e os números completos do mercado são os do ClawHub. Entre os tipos de ataque observados estão instruções de instalação que levam o usuário a baixar e executar software não confiável, comandos ocultos (camuflados com Base64 ou Unicode) que enviam credenciais ao atacante e tentativas de desativar verificações de segurança e instalar backdoors. Em 91% das skills maliciosas confirmadas, foi usada injeção de prompt (prompt injection).

> **Você sabia?** Segundo a Central de Ajuda do Claude, organizações Enterprise podem ativar a varredura de skills, que verifica skills e plugins enviados quanto a conteúdo malicioso. Mas isso é uma rede de segurança, não substitui a leitura. A melhor forma de entender o que uma skill faz é abrir e ler você mesmo o SKILL.md e os scripts dela antes de instalar.

## Lista de verificação antes de instalar

Uma lista prática que extraímos das recomendações da documentação e dos achados de campo:

1. **Verifique a fonte.** De quem é o repositório? É uma empresa oficial ou um desenvolvedor conhecido, ou uma cópia muito parecida com um pacote conhecido (typosquatting)?
2. **Leia o SKILL.md do começo ao fim.** Frases como "baixe e execute isto primeiro", "desative a configuração de segurança" ou "envie para este endereço" são sinais de alarme.
3. **Examine a pasta scripts/.** Se houver linhas que você não consegue ler, ocultas ou codificadas em Base64, não instale.
4. **Verifique os links externos.** Se a skill busca instruções ou dados de um endereço web, lembre que esse conteúdo pode mudar a qualquer momento.
5. **Instale o que você precisa.** Em vez de "instalar tudo", escolher skills uma a uma reduz tanto o contexto quanto a superfície de ataque.

## Privilégio mínimo e chaves secretas

O local em que a skill roda também importa. Segundo a documentação do Claude, no ambiente da API do Claude as skills não têm acesso à rede e não podem instalar pacotes em tempo de execução. No claude.ai, o acesso à rede pode ser total, parcial ou desativado, conforme as configurações do usuário e do administrador. No Claude Code, as skills têm tanto acesso à rede quanto qualquer programa no seu computador. Ou seja, a skill que você instala num agente local roda com as suas permissões.

Por isso o princípio do privilégio mínimo é crítico. No Claude Code, o campo allowed-tools no frontmatter de uma skill faz com que certas ferramentas sejam usadas sem pedir permissão quando aquela skill é chamada. Segundo a documentação, essa permissão é redefinida na mensagem seguinte. Ainda assim, se você vir permissões amplas numa skill escrita por outra pessoa, é um bom hábito não instalar sem aprovar isso conscientemente.

Para as chaves secretas, a regra é simples: nunca escreva chaves de API, senhas e tokens de acesso no SKILL.md nem na pasta da skill. Quando você compartilha a skill ou a envia para um repositório, tudo o que está naquela pasta vai junto. Guarde as chaves em variáveis de ambiente ou no método seguro de armazenamento de credenciais da ferramenta que usa, e diga à skill apenas como acessá-las.

Em outubro de 2026, o ecossistema de skills cresce muito rápido, e esse crescimento lembra os problemas de segurança dos primeiros anos das lojas de aplicativos. A boa notícia: ler uma skill é muito mais fácil do que ler o código-fonte de um aplicativo, porque a maior parte é texto simples.

Você abre e lê o conteúdo de uma skill antes de instalar, ou confia no número de estrelas e de downloads?
