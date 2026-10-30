---
title: "L'ordinateur d'Apollo 11 : que signifie vraiment « 4 Ko de mémoire » ?"
excerpt: "L'ordinateur qui a posé Apollo 11 sur la Lune avait environ 4 Ko de RAM. Ses programmes, eux, tenaient dans une ROM tissée à la main d'environ 72 Ko."
hook: "Ils ont alluni avec 4 Ko de RAM"
fact: "4 Ko"
factLabel: "La mémoire effaçable (RAM) de l'AGC"
category: "Informatique"
---
Tu as forcément déjà entendu cette phrase : « la mémoire de l'ordinateur qui est allé sur la Lune était plus petite qu'une photo ». Dans la vidéo, nous avons aussi dit « 4 Ko ». Ce chiffre est exact, mais il est incomplet à lui seul. Car l'Apollo Guidance Computer (AGC) avait en réalité deux mémoires distinctes, et « 4 Ko » ne décrit que la plus petite.

Décortiquons ensemble ce fameux chiffre.

## Que désigne exactement « 4 Ko » ?

La mémoire de travail de l'AGC, c'est-à-dire la mémoire effaçable que l'on appellerait aujourd'hui RAM, se composait de 2 048 « mots ». Chaque mot faisait 16 bits : 15 bits de données et 1 bit de parité pour le contrôle d'erreurs. Si l'on compte un mot comme 2 octets, 2 048 mots font environ 4 Ko. Autrement dit, « 4 Ko » est la taille du brouillon que l'ordinateur utilisait pour ses calculs en vol.

Les programmes ne se trouvaient pas dans cette mémoire. Elle contenait la position et la vitesse instantanées, des compteurs et les résultats intermédiaires transmis d'une tâche à l'autre. Elle était faite de minuscules anneaux appelés tores magnétiques (core) et conservait son contenu même en cas de coupure de courant.

Les programmes étaient ailleurs, tout autre chose : dans une mémoire fixe de 36 864 mots, c'est-à-dire en ROM. Avec le même calcul, cela donne environ 72 Ko. En bref, la phrase plus juste est : Apollo 11 s'est posé sur la Lune avec environ 4 Ko de RAM et environ 72 Ko de ROM.

## Les programmes étaient tissés

La ROM de l'AGC était une mémoire « core rope » (corde de tores) et elle était littéralement tissée à la main. Si un fil passait à travers un tore magnétique, le bit valait 1 ; s'il passait à côté, il valait 0. Le logiciel était donc transformé en matériel en étant tissé comme un tissu.

Ce travail était fait par des employés de Raytheon à Waltham, dans le Massachusetts. Selon l'étude détaillée de Ken Shirriff, une bonne partie des personnes recrutées étaient des femmes venues du secteur textile local, pour leur habileté à coudre. Tisser un seul module prenait environ 8 semaines et coûtait 15 000 dollars. Chaque module contenait 6 000 mots, et six modules formaient les 36 864 mots au total.

L'effet secondaire était important : le logiciel devait être figé des mois avant le vol. Pas de correctif de dernière minute, car corriger un bug voulait dire retisser.

> **Le savais-tu ?** Apollo 11 n'avait pas un, mais deux AGC : l'un dans le module de commande, l'autre dans le module lunaire. Chacun pesait environ 32 kg et fonctionnait avec une horloge à quartz de 2,048 MHz.

## L'alarme qui a retenti quelques minutes avant l'alunissage

Pendant la descente du 20 juillet 1969, l'ordinateur du module lunaire a affiché à l'écran l'alarme 1202, puis la 1201. Toutes deux signifiaient « dépassement de l'exécutif » : on avait confié à l'ordinateur plus de travail qu'il ne pouvait en porter. Selon le récit détaillé de Wikipedia, la cause était des signaux parasites venant du radar de rendez-vous, laissé en attente, qui occupaient le processeur. Ce n'était ni une erreur de programmation, ni une erreur de pilotage, ni une panne matérielle. Le problème venait au fond d'un défaut dans le document d'interface entre deux systèmes.

Le plus intéressant, c'est ce que le logiciel a fait dans cette situation. L'AGC fonctionnait avec un ordonnanceur à priorités. Sous la surcharge, il s'est redémarré rapidement, a abandonné les tâches de faible priorité et a poursuivi les tâches critiques comme le pilotage de la descente. Cette fameuse petite mémoire a donc suffi parce qu'elle était gérée avec intelligence.

Un autre détail compliquait encore les choses. La commande 1668 que Buzz Aldrin a saisie dans l'ordinateur pendant la descente a ajouté une charge au processeur déjà en difficulté et déclenché une nouvelle alarme 1202. Le logiciel a encaissé cela de la même façon, et l'Eagle s'est posé sur la surface lunaire.

Le logiciel a été développé au laboratoire d'instrumentation du MIT. Le logiciel du module de commande (COLOSSUS) et celui du module lunaire (LUMINARY) ont été menés par des équipes différentes. La mise en œuvre des détails était assurée par l'équipe dirigée par Margaret Hamilton.

## Hier / aujourd'hui

| Apollo Guidance Computer (1969) | Le smartphone d'aujourd'hui |
|---|---|
| Environ 4 Ko de mémoire effaçable (RAM) | Des gigaoctets de RAM |
| Environ 72 Ko de ROM tissée à la main | Des centaines de gigaoctets de stockage |
| Des mois de tissage pour une mise à jour logicielle | Des mises à jour qui s'installent seules la nuit |
| Environ 32 kg | Tient dans la paume de la main |

## La vraie leçon du chiffre

On raconte souvent le chiffre « 4 Ko » avec un « regarde comme c'était primitif ». Or le cœur de l'histoire est tout le contraire : la mémoire limitée a obligé les ingénieurs à rendre compte de chaque bit. C'est ainsi qu'est né un logiciel qui hiérarchise les tâches et se redresse seul en cas de surcharge.

Les appareils que nous avons dans la poche disposent d'une mémoire incomparablement plus grande, mais la plupart des applications ne sont pas écrites avec autant de soin. Une seule mise à jour d'une application de messagerie peut être bien plus volumineuse que tout le logiciel d'Apollo.

Selon toi, ce sont les limites qui forment les meilleurs ingénieurs, ou l'abondance ?
