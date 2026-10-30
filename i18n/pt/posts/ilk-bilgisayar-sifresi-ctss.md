---
title: "A primeira senha de computador foi roubada já no primeiro ano"
excerpt: "O sistema CTSS do MIT trouxe a senha ao computador. Pouco depois, um doutorando imprimiu todas elas. A história da primeira senha e do primeiro hack."
hook: "A primeira senha foi a primeira hackeada"
fact: "1962"
factLabel: "O primeiro roubo de senhas conhecido"
category: "Primeiros"
---

A senha que você digita dezenas de vezes por dia tem um local de nascimento: um único computador gigante no MIT, no início dos anos 1960. E, o que é ainda mais interessante, as primeiras senhas de computador conhecidas no mundo foram roubadas em massa pouco depois de começarem a ser usadas. E não por uma quadrilha de hackers, mas por um doutorando que queria mais horas de computador.

## Um computador, dezenas de usuários

No início dos anos 1960, os computadores eram máquinas que enchiam salas e faziam um trabalho por vez. Você perfurava o programa em cartões, entrava na fila e recebia o resultado horas depois. No MIT, a equipe de Fernando Corbató quis mudar isso: um sistema em que muitas pessoas pudessem usar a mesma máquina ao mesmo tempo, por terminais, o chamado "tempo compartilhado".

O sistema se chamou CTSS (Compatible Time-Sharing System). Foi mostrado pela primeira vez em novembro de 1961 num IBM 709 modificado do MIT e, nos anos seguintes, rodou em IBM 7094. Como relata também a Wikipedia, o CTSS é considerado o primeiro sistema de computador a implementar o login com senha.

## Por que era preciso uma senha?

O problema era simples: na mesma máquina havia os arquivos e o tempo de computador reservado de dezenas de pessoas. Era preciso um jeito de saber quem era quem. Corbató contou anos depois à Wired que colocar uma senha como fechadura para cada usuário parecera "uma solução muito simples".

Corbató também foi cauteloso ao se declarar "o primeiro". Disse que o sistema de reservas Sabre da IBM, de 1960, provavelmente também usava senhas, mas, como não restou registro, não se sabe com certeza. As fontes também divergem sobre o ano exato em que as senhas foram adicionadas ao CTSS. O que sabemos é que na primavera de 1962 o sistema de senhas já funcionava, porque foi roubado naquela primavera.

## O plano de sexta à noite de Allan Scherr

Allan Scherr era um pesquisador de doutorado no MIT e rodava simulações complexas. Segundo a Wired, no CTSS lhe eram reservadas apenas quatro horas por semana (algumas fontes dizem quatro horas por dia). Esse tempo não bastava para ele.

A solução foi esperta, mas igualmente travessa. Aproveitando o recurso de impressão offline de arquivos do sistema, preparou um cartão perfurado pedindo a impressão do arquivo de senhas. Colocou o cartão na fila tarde numa noite de sexta e voltou cedo no sábado de manhã para pegar a impressão. Agora ele tinha as senhas de todo mundo no sistema.

Para encobrir seus rastros, compartilhou as senhas também com outros usuários. Segundo a Wired, um deles, J.C.R. Licklider, entrou na conta do diretor do laboratório, Robert Fano, e deixou mensagens zombeteiras. Scherr nunca foi pego e, cerca de um quarto de século depois do ocorrido, confessou pessoalmente a Fano. Fano lhe garantiu que o título de doutor não seria retirado.

> **Você sabia?** Essa não foi a única crise de senhas do CTSS. Em 1966, por causa de um erro de um administrador, o arquivo de senhas e o arquivo de "mensagem do dia" foram trocados, e todos que faziam login viam todas as senhas abertas na tela. Segundo Tom Van Vleck, desenvolvedor do sistema, esse episódio foi o ponto de partida da ideia de guardar as senhas criptografadas de forma unidirecional. É claro que o incidente aconteceu numa sexta-feira às cinco da tarde, e Van Vleck teve de passar horas trocando senhas.

## Naquela época e agora

| Naquela época (anos 1960) | Agora |
|---|---|
| Senhas em texto puro num único arquivo | Senhas com hash unidirecional |
| Um cartão perfurado bastava para imprimi-las | Registros de acesso, camadas de autorização |
| Objetivo: repartir o tempo de computador | Objetivo: proteger identidade, dinheiro, dados pessoais |
| Uma máquina, um campus | Dezenas de contas por pessoa |

Esta história continua instrutiva hoje por um motivo: desde o dia em que foi inventada, a senha é testada pelo comportamento humano. Scherr não fez um ataque complexo para quebrar o sistema; apenas usou de forma inesperada um recurso que o próprio sistema oferecia. Boa parte dos vazamentos de hoje também nasce de erros simples desse tipo.

Corbató recebeu o Prêmio Turing em 1990 por seu trabalho em tempo compartilhado. A fechadura que sua equipe acrescentou como "solução simples" hoje está em todas as portas, do seu e-mail ao seu banco, e o elo mais fraco continua sendo, quase sempre, a pessoa que usa essa fechadura.

Você acha que hoje estamos prontos para largar de vez as senhas e passar totalmente à biometria ou às chaves de acesso (passkeys)?
