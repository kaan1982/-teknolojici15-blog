---
title: "O computador da Apollo 11: o que \"4 KB de memória\" realmente significa?"
excerpt: "O computador que pousou a Apollo 11 na Lua tinha cerca de 4 KB de RAM. Os programas ficavam em uma ROM de cerca de 72 KB, tecida à mão com fios."
hook: "Pousaram na Lua com 4 KB de RAM"
fact: "4 KB"
factLabel: "Memória apagável (RAM) do AGC"
category: "Computador"
---
"A memória do computador que foi à Lua era menor do que uma foto." Você com certeza já ouviu essa frase. No vídeo, nós também dissemos "4 KB". O número está certo, mas sozinho fica incompleto. Isso porque o Computador de Orientação da Apollo (Apollo Guidance Computer, ou AGC) tinha, na verdade, duas memórias distintas, e "4 KB" descreve apenas a menor delas.

Vamos abrir juntos esse número famoso.

## O que exatamente significa "4 KB"?

A memória de trabalho do AGC, ou seja, a memória apagável que hoje chamaríamos de RAM, tinha 2.048 "palavras". Cada palavra tinha 16 bits: 15 de dados e 1 de paridade, para verificação de erros. Contando uma palavra como 2 bytes, 2.048 palavras dão cerca de 4 KB. Ou seja, "4 KB" é o tamanho do rascunho que o computador usava para fazer contas durante o voo.

Os programas não ficavam nessa memória. Ali ficavam a posição e a velocidade do momento, contadores e resultados intermediários passados entre as tarefas. A memória era feita de pequenos anéis chamados núcleos magnéticos (core) e mantinha o conteúdo mesmo sem energia.

Os programas estavam em outro lugar: em 36.864 palavras de memória fixa, a ROM. Pela mesma conta, isso dá cerca de 72 KB. Em resumo, a frase mais correta é: a Apollo 11 pousou na Lua com cerca de 4 KB de RAM e cerca de 72 KB de ROM.

## Os programas eram tecidos

A ROM do AGC era uma memória de "core rope" (corda de núcleos) e, literalmente, era tecida à mão. Se um fio passava por dentro de um núcleo magnético, aquele bit era 1; se passava ao lado do núcleo, era 0. Ou seja, o software virava hardware sendo tecido como um tecido.

Esse trabalho foi feito por funcionárias da Raytheon em Waltham, Massachusetts. Segundo a análise detalhada de Ken Shirriff, boa parte das contratadas eram mulheres vindas da indústria têxtil local, por causa de suas habilidades de costura. Tecer um único módulo levava cerca de 8 semanas e custava US$ 15.000. Cada módulo guardava 6 mil palavras, e seis módulos somavam as 36.864 palavras.

O efeito colateral era importante: o software precisava ser congelado meses antes do voo. Não existia patch de última hora, porque corrigir um erro significava tecer tudo de novo.

> **Você sabia?** Na Apollo 11 havia não um, mas dois AGCs: um no Módulo de Comando e outro no Módulo Lunar. Cada um pesava cerca de 32 kg e funcionava com um relógio de cristal de 2,048 MHz.

## O alarme que soou minutos antes do pouso

Durante o pouso, em 20 de julho de 1969, o computador do Módulo Lunar mostrou na tela primeiro o alarme 1202 e depois o 1201. Ambos significavam "estouro do executivo": o computador recebia mais trabalho do que conseguia dar conta. Segundo o relato detalhado da Wikipedia, a causa foram sinais espúrios do radar de encontro, que havia sido deixado em espera, ocupando o processador. O problema não foi erro de programação, nem erro de piloto, nem falha de hardware. Em essência, nasceu de uma falha no documento de interface entre dois sistemas.

O mais interessante é o que o software fez nessa situação. O AGC funcionava com um escalonador baseado em prioridades. Diante da sobrecarga, reiniciou-se rapidamente, abandonou as tarefas de baixa prioridade e continuou com as críticas, como conduzir o pouso. Ou seja, aquela famosa memória pequena bastou porque era bem gerenciada.

Havia ainda um detalhe que complicou as coisas. O comando 1668, que Buzz Aldrin digitou no computador durante o pouso, colocou uma carga extra no processador que já estava apertado e disparou mais um alarme 1202. O software também superou isso do mesmo jeito, e a Águia (Eagle) tocou a superfície lunar.

O software foi desenvolvido no Laboratório de Instrumentação do MIT. O software do Módulo de Comando (COLOSSUS) e o do Módulo Lunar (LUMINARY) foram conduzidos por equipes diferentes. A execução dos detalhes ficou com a equipe dirigida por Margaret Hamilton.

## Naquela época / agora

| Computador de Orientação da Apollo (1969) | Celular de hoje |
|---|---|
| Cerca de 4 KB de memória apagável (RAM) | Gigabytes de RAM |
| Cerca de 72 KB de ROM tecida à mão | Centenas de gigabytes de armazenamento |
| Meses de tecelagem para atualizar o software | Atualizações que chegam sozinhas à noite |
| Cerca de 32 kg | Cabe na palma da mão |

## A verdadeira lição do número

O número "4 KB" costuma ser contado como "olha como era primitivo". Mas a essência da história é o contrário: a memória limitada obrigou os engenheiros a prestar contas de cada bit. Por isso nasceu um software que prioriza tarefas e se recupera sozinho sob sobrecarga.

Hoje os aparelhos em nosso bolso têm incomparavelmente mais memória, mas a maioria dos aplicativos não é escrita com tanto cuidado. Uma única atualização de um aplicativo de mensagens pode ser muitas vezes maior do que todo o software da Apollo.

Você acha que as limitações formam engenheiros melhores, ou a abundância?
