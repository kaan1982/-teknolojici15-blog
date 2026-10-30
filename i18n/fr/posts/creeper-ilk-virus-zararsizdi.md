---
title: "Le premier « virus » informatique, Creeper, n'a rien effacé"
excerpt: "Creeper, qui circulait sur ARPANET en 1971, n'a touché à aucune donnée : il affichait seulement un défi à l'écran. Pour l'attraper, le premier antivirus, Reaper, a été écrit."
hook: "Le premier virus n'a rien effacé !"
fact: "1971"
factLabel: "Creeper a été écrit chez BBN"
category: "Informatique"
---
Quand on dit « virus informatique », on pense à quelque chose qui efface des fichiers, prend des données en otage, verrouille l'écran. Pourtant, le programme que la plupart des sources présentent comme le « premier virus » ne faisait rien de tout cela. Il se contentait d'afficher un petit défi à l'écran et de passer à l'ordinateur suivant.

Il s'appelait Creeper, c'est-à-dire « le rampant ».

## 1971, BBN et ARPANET

Creeper a été écrit en 1971 par Bob Thomas, comme programme expérimental, chez BBN (Bolt Beranek and Newman) dans le Massachusetts. BBN était l'entreprise qui avait joué un rôle clé dans la création d'ARPANET, considéré comme l'ancêtre d'Internet.

Le programme circulait entre des ordinateurs centraux DEC PDP-10 connectés à ARPANET et exécutant le système d'exploitation TENEX. Selon Wikipedia, le nombre de systèmes exécutant TENEX sur ARPANET était alors de 28, ce qui était donc le maximum d'ordinateurs que Creeper pouvait atteindre.

Le véritable souci de Bob Thomas n'était pas de nuire, mais de répondre à une question : un programme peut-il se déplacer seul d'une machine à l'autre sur un réseau ?

## La seule phrase à l'écran

Quand Creeper arrivait sur une machine, il imprimait ce message sur le téléscripteur (terminal à imprimante) :

"I'M THE CREEPER : CATCH ME IF YOU CAN"

En français : « Je suis le Rampant : attrape-moi si tu peux. » C'est tout. Il n'a supprimé aucun fichier ni altéré aucune donnée. Wikipedia rapporte que les opérateurs ont coopéré à cette expérience et qu'aucun effet indésirable n'a été signalé.

La première version ne se copiait même pas : en passant d'une machine à l'autre, elle se déplaçait sans laisser de copie derrière elle. Plus tard, Ray Tomlinson, connu comme l'inventeur du courrier électronique, a modifié le programme pour qu'il se copie sur les autres machines. Cette version qui se reproduit est considérée comme le premier ver (worm) informatique reconnu.

## Virus ou ver ?

Une petite mais importante correction s'impose ici. Techniquement, Creeper n'était pas un virus mais un ver. Un virus se propage en s'attachant à un autre programme ou fichier ; un ver, lui, se déplace seul à travers le réseau. Creeper appartient à la seconde catégorie. Pourtant, de nombreuses publications le présentent comme « le premier virus informatique du monde » ; une citation du Guardian rapportée par Wikipedia utilise exactement cette formule. C'est la version populaire de la notion, mais techniquement, la bonne étiquette est « premier ver ».

Le terme « virus informatique » lui-même est né 12 ans après Creeper. Selon l'article de WeLiveSecurity d'ESET, Fred Cohen, étudiant à l'université de Californie du Sud, a écrit le 3 novembre 1983 un programme qui se propageait seul ; son professeur Len Adleman a proposé le terme en comparant cette diffusion semblable à une « infection » aux virus de la biologie. Cohen avait préparé le programme sur un VAX 11/750 sous Unix, en environ huit heures de travail.

> **Le savais-tu ?** Ray Tomlinson, qui a inventé le courrier électronique et introduit le symbole @ dans les adresses, est aussi le créateur du programme considéré comme le premier antivirus. Autrement dit, la même personne a écrit l'outil préféré d'Internet et son premier « nettoyeur ».

## Reaper : le premier antivirus

Dès lors qu'un programme se copiait sur le réseau, il fallait aussi quelque chose pour l'arrêter. En 1972, Ray Tomlinson a écrit un programme nommé Reaper (« le Faucheur »). Reaper circulait lui aussi sur ARPANET et supprimait Creeper là où il le trouvait. Wikipedia le décrit comme le premier logiciel antivirus.

Il y a dans cette histoire une belle ironie : le tout premier antivirus du monde était lui-même un programme qui circulait seul sur le réseau. Pour attraper le « ver », on avait écrit un autre « ver ».

| Hier | Aujourd'hui |
|---|---|
| 1971 : au plus 28 machines TENEX | Des milliards d'appareils connectés |
| Une seule phrase de plaisanterie à l'écran | Rançongiciels, vol de données |
| Reaper : un nettoyeur à cible unique | Des logiciels de sécurité mis à jour en continu |

## La longue ombre d'une expérience innocente

Creeper était inoffensif, mais il a entrouvert une porte : si un programme pouvait se propager seul sur un réseau, quelqu'un pouvait aussi utiliser ce pouvoir à de mauvaises fins. C'est exactement ce qui s'est passé dans les décennies suivantes, et les mots « virus », « ver », « antivirus » sont entrés dans notre langage courant.

Aujourd'hui, si un chercheur en sécurité lançait sans autorisation une expérience semblable sur Internet, il aurait très probablement de sérieux ennuis. L'ARPANET de 1971, lui, était une petite communauté de chercheurs qui se connaissaient, et l'expérience, comme le rapporte Wikipedia, s'est déroulée avec la coopération des opérateurs.

Le point de départ n'était pourtant pas une attaque, mais une curiosité. Un ingénieur s'est demandé « est-ce faisable ? » et a donné la réponse à l'écran en une seule phrase.

À ton avis, si Creeper était écrit aujourd'hui, serait-il considéré comme une expérience inoffensive ou comme une atteinte à la sécurité ?
