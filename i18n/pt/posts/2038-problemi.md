---
title: "O problema de 2038: por que alguns computadores vão voltar a 1901?"
excerpt: "O tempo Unix de 32 bits se esgota em 19 de janeiro de 2038, às 03:14:07 UTC, e sistemas antigos podem achar que estamos em 13 de dezembro de 1901. O que é o problema de 2038 e como ele está sendo resolvido?"
hook: "Os computadores vão voltar a 1901!"
fact: "03:14:07"
factLabel: "19 de janeiro de 2038, UTC: o limite de 32 bits"
category: "Computador"
---
Na virada para o ano 2000, o mundo falou de um bug chamado "Y2K". Agora há outra data na fila: 19 de janeiro de 2038. Nesse dia, um segundo depois das 03:14:07 (UTC), alguns computadores antigos podem de repente trocar o calendário para 1901. Não é um cenário de ficção científica, é um simples problema de matemática.

## Como os computadores contam o tempo?

O Unix e muitos sistemas derivados dele guardam o tempo não como um relógio ou calendário, mas como um único número. Esse número é a quantidade de segundos desde a meia-noite (UTC) de 1º de janeiro de 1970. Isso se chama "tempo Unix".

O problema é que, em muitos sistemas antigos, esse número é armazenado como um inteiro de 32 bits com sinal. O maior valor que um número de 32 bits com sinal pode ter é 2.147.483.647, ou seja, 2 elevado a 31 menos 1. Essa quantidade de segundos equivale a cerca de 68 anos. "Com sinal" significa que um bit é reservado para indicar se o número é positivo ou negativo. Por isso, não são os 32 bits inteiros, e sim 31, que servem para a magnitude.

Somando 68 anos a 1970, chegamos a 2038. A conta aponta exatamente para 19 de janeiro de 2038, 03:14:07 UTC.

## O que acontece um segundo depois?

Um segundo depois de o contador chegar ao valor máximo, ele estoura. Pense nos antigos hodômetros mecânicos dos carros: depois de 999.999 voltam para 000.000. Aqui acontece algo parecido, mas como o número tem sinal, o valor passa a ser um número negativo enorme.

Um sistema afetado interpreta esse número negativo como segundos contados para trás a partir de 1970. O resultado: a data aparece como 13 de dezembro de 1901, 20:45:52 (UTC). Um computador que de repente volta 136 anos no tempo pode fazer certificados, temporizadores, registros e comparações de datas funcionarem de forma errada.

> **Você sabia?** Esse problema já apareceu em alguns softwares sem esperar por 2038. Segundo a Wikipedia, em 2006 o software AOLserver quebrou ao ultrapassar o limite de 2038 porque configurou um valor de tempo limite para um bilhão de segundos no futuro. Ou seja, qualquer programa que calcule uma "data futura" pode esbarrar nesse limite desde já. Um limite semelhante de 32 bits também causou problemas no Microsoft Exchange em 2022: o número de versão de uma atualização foi lido como carimbo de data e hora e, ao ultrapassar o limite, as funções de verificação de malware pararam.

## Quem está em risco?

A grande maioria dos telefones e computadores modernos que você usa no dia a dia já usa valores de tempo de 64 bits. O risco real está em sistemas que funcionam por muitos anos sem atualização. A Wikipedia destaca em especial os sistemas legados e os sistemas embarcados: controladores industriais, alguns equipamentos de rede, sistemas de veículos, máquinas que são instaladas uma vez e esquecidas.

Como esses dispositivos raramente são atualizados, quando 2038 chegar ainda pode haver neles uma peça que conta o tempo em 32 bits.

| Tempo de 32 bits com sinal | Tempo de 64 bits com sinal |
|---|---|
| Valor máximo 2.147.483.647 | Um intervalo muito maior |
| Limite: 19 de janeiro de 2038 | Limite: cerca de 292 bilhões de anos depois |
| Sistemas antigos e embarcados | Sistemas operacionais modernos |

## A solução: um contador maior

A dificuldade aqui é menos técnica do que prática. Mudar o tamanho do número que guarda o tempo pode afetar todos os programas, todos os formatos de arquivo e todos os campos de banco de dados que o utilizam. Corrigir uma única linha é fácil; encontrar e atualizar todo o software dentro de um dispositivo pode levar anos.


A solução é simples na ideia: guardar o tempo em um número de 64 bits com sinal. Segundo a Wikipedia, isso empurra o momento do estouro para cerca de 292 bilhões de anos no futuro. Ou seja, muito além da idade atual do universo.

Essa transição já está em andamento há anos. Segundo uma notícia da Phoronix de janeiro de 2020, o Linux 5.6 estava sendo preparado como a primeira versão principal do kernel capaz de servir de base para sistemas de 32 bits funcionarem depois de 2038. A Wikipedia observa que o Linux 5.6, lançado em 2020, adicionou suporte a tempo de 64 bits em arquiteturas de 32 bits. Para isso funcionar, os aplicativos também precisam ser recompilados com tempo de 64 bits.

Outra proposta de solução é tornar o número sem sinal (unsigned). Mas isso só empurra o limite para 2106 e atrapalha o uso de datas anteriores a 1970. Por isso, o caminho principal é visto como a migração para 64 bits.

O Y2K não virou uma catástrofe porque as pessoas trabalharam com antecedência; você acha que esse mesmo heroísmo silencioso vai se repetir nos anos que faltam até 2038?
