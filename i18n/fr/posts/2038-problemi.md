---
title: "Le problème de 2038 : pourquoi certains ordinateurs vont-ils revenir en 1901 ?"
excerpt: "Le temps Unix en 32 bits arrive à son terme le 19 janvier 2038 à 03:14:07 UTC, et les anciens systèmes pourraient se croire le 13 décembre 1901. Qu'est-ce que le problème de 2038, et comment le résout-on ?"
hook: "Les ordinateurs vont retourner en 1901 !"
fact: "03:14:07"
factLabel: "19 janvier 2038, UTC : la limite des 32 bits"
category: "Informatique"
---
En approchant de l'an 2000, le monde a parlé d'un bug informatique appelé « Y2K ». Une autre date arrive maintenant : le 19 janvier 2038. Ce jour-là, une seconde après 03:14:07 (UTC), certains vieux ordinateurs pourraient faire basculer d'un coup leur calendrier en 1901. Ce n'est pas un scénario de science-fiction, c'est un simple problème de mathématiques.

## Comment les ordinateurs comptent-ils le temps ?

Unix et de nombreux systèmes qui en dérivent ne conservent pas le temps sous forme d'horloge ou de calendrier, mais sous forme d'un seul nombre. Ce nombre correspond aux secondes écoulées depuis minuit (UTC) le 1er janvier 1970. On l'appelle le « temps Unix ».

Le problème, c'est que sur beaucoup de vieux systèmes ce nombre est stocké comme un entier signé de 32 bits. La plus grande valeur qu'un nombre signé de 32 bits puisse prendre est 2 147 483 647, c'est-à-dire 2 puissance 31 moins 1. Ce nombre de secondes représente environ 68 ans. « Signé » signifie qu'un bit est réservé pour indiquer si le nombre est positif ou négatif. Ce ne sont donc pas les 32 bits qui servent à la grandeur, mais seulement 31.

Si on ajoute 68 ans à 1970, on arrive à 2038. Le calcul tombe exactement sur le 19 janvier 2038, 03:14:07 UTC.

## Que se passe-t-il une seconde plus tard ?

Une seconde après avoir atteint sa valeur maximale, le compteur déborde. Pense aux anciens compteurs kilométriques mécaniques des voitures : après 999 999, ils repassent à 000 000. Ici, il se passe quelque chose de semblable, mais comme le nombre est signé, la valeur bascule vers un très grand nombre négatif.

Un système touché interprète ce nombre négatif comme des secondes comptées à rebours à partir de 1970. Résultat : la date s'affiche comme le 13 décembre 1901 à 20:45:52 (UTC). Un ordinateur qui se retrouve soudain 136 ans en arrière : certificats, minuteries, journaux et comparaisons de dates peuvent se mettre à mal fonctionner.

> **Le savais-tu ?** Ce problème est même déjà apparu dans certains logiciels sans attendre 2038. Selon Wikipedia, en 2006, le logiciel AOLserver a planté en dépassant la limite de 2038 parce qu'il avait réglé un délai d'expiration un milliard de secondes dans le futur. Autrement dit, tout programme qui calcule « une date future » peut déjà se heurter à la limite. Une limite similaire des 32 bits a aussi posé problème à Microsoft Exchange en 2022 : le numéro de version d'une mise à jour a été lu comme un horodatage et a dépassé la limite, ce qui a arrêté les fonctions d'analyse antimalware.

## Qui est à risque ?

La grande majorité des téléphones et ordinateurs modernes que tu utilises au quotidien emploient désormais des valeurs de temps en 64 bits. Le vrai risque concerne les systèmes qui tournent depuis de longues années sans mise à jour. Wikipedia met surtout en avant les systèmes anciens (legacy) et les systèmes embarqués : automates industriels, certains équipements réseau, systèmes embarqués dans les véhicules, bref des machines installées une fois et oubliées.

Comme ces appareils sont rarement mis à jour, il se peut qu'au moment de 2038 ils contiennent encore un composant qui compte le temps sur 32 bits.

| Temps signé 32 bits | Temps signé 64 bits |
|---|---|
| Valeur maximale 2 147 483 647 | Une plage bien plus grande |
| Limite : 19 janvier 2038 | Limite : dans environ 292 milliards d'années |
| Systèmes anciens et embarqués | Systèmes d'exploitation modernes |

## La solution : un compteur plus grand

La difficulté est moins technique que pratique. Changer la taille du nombre qui conserve le temps peut toucher chaque programme qui l'utilise, chaque format de fichier et chaque champ de base de données. Corriger une seule ligne est facile ; retrouver et mettre à jour tous les logiciels d'un appareil peut prendre des années.


L'idée de la solution est simple : conserver le temps dans un nombre signé de 64 bits. Selon Wikipedia, cela repousse le moment du débordement à environ 292 milliards d'années, bien au-delà de l'âge actuel de l'univers.

Cette transition est en cours depuis des années. D'après un article de Phoronix de janvier 2020, Linux 5.6 se préparait à être la première version majeure du noyau capable de servir de base pour que les systèmes 32 bits fonctionnent après 2038. Wikipedia indique que Linux 5.6, sorti en 2020, a ajouté la prise en charge du temps 64 bits sur les architectures 32 bits. Pour que cela serve à quelque chose, les applications doivent aussi être recompilées avec le temps 64 bits.

Une autre solution proposée consiste à rendre le nombre non signé (unsigned). Mais cela ne repousse la limite qu'à 2106 et casse l'usage des dates antérieures à 1970. C'est pourquoi la voie principale reste le passage aux 64 bits.

Le Y2K n'a pas tourné à la catastrophe parce que les gens ont travaillé en amont ; à ton avis, ce même héroïsme discret se répétera-t-il dans les années qui nous séparent de 2038 ?
