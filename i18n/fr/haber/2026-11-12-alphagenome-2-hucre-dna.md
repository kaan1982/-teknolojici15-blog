---
title: "AlphaGenome 2 de DeepMind lit désormais l'ADN cellule par cellule"
excerpt: "Le modèle AlphaGenome 2 de DeepMind prédit ce que fait une modification de l'ADN dans quelle cellule, et trouve presque deux fois plus de variants causaux."
hook: "Même ADN, cellule différente"
fact: "30 %"
factLabel: "Part des variants causaux trouvés"
category: "Actualité"
---
Le 11 novembre, Google DeepMind a présenté AlphaGenome 2. Ce modèle d'IA prédit comment une petite modification de l'ADN (un variant) influence le fonctionnement des gènes. La nouveauté : le modèle ne regarde plus la moyenne d'un tissu entier, mais chaque type de cellule et l'état dans lequel se trouve la cellule à ce moment-là.

## Qu'est-ce qui a changé ?

Chaque cellule de notre corps porte le même ADN, mais chacune le lit différemment. Le premier AlphaGenome produisait des prédictions fixes pour les tissus. AlphaGenome 2, lui, reçoit en plus d'une séquence d'ADN l'information "quelle cellule, dans quel état". Les chercheurs peuvent choisir dans un catalogue de cellules prêt à l'emploi ou fournir leurs propres données de cellules uniques.

Le modèle a été entraîné sur plus de 100 millions de profils de cellules uniques issus de l'humain et de la souris, répartis sur 68 tissus. Les sources avancent même plus de 107 millions.

## Résultats

Dans le test TenK10K, qui couvre 28 types de cellules immunitaires, AlphaGenome 2 a trouvé 30 % des variants causaux. Le premier modèle et d'autres outils spécialisés plafonnaient à 16 %. Le taux de bonne prédiction, à savoir si un variant augmente ou diminue l'activité d'un gène, est aussi passé de 23 % à 43 %.

Dans un des exemples, le modèle a montré qu'un variant associé aux formes graves de COVID-19 est plus fort dans les lymphocytes T activés que dans les cellules au repos.

## Limites

Le modèle est proposé via une API gratuite pour la recherche non commerciale ; un aperçu privé existe pour les entreprises. DeepMind souligne que le modèle n'est pas validé pour un usage clinique ou diagnostique. Il ne détecte encore qu'une minorité des variants causaux, et ses prédictions doivent être confirmées en laboratoire.

## Pourquoi c'est important ?

La plupart des modifications de l'ADN liées aux maladies se trouvent hors des gènes, dans des régions qui allument et éteignent les gènes, et leurs effets n'apparaissent que dans certaines cellules. Prédire à l'avance quelle modification pose problème dans quelle cellule pourrait faciliter la recherche de cibles pour les médicaments et réduire le nombre d'expériences.
