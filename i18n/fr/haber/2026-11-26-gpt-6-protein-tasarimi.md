---
title: "OpenAI : GPT-6 a conçu une protéine tout seul, 35 essais sur 322 ont tenu au laboratoire"
excerpt: "OpenAI annonce que ses modèles GPT-6 à usage général ont conçu des formes de protéines sans appeler de modèle de biologie spécialisé ; au laboratoire, 35 des 322 conceptions se sont liées à leur cible."
hook: "Un modèle de discussion conçoit une protéine"
fact: "35/322"
factLabel: "conceptions liées au laboratoire"
category: "Actualité"
---
Dans une prépublication parue le 24 novembre, OpenAI a annoncé que ses modèles GPT-6 à usage général savent concevoir des protéines. Le point crucial de cette affirmation : le modèle produit des formes de protéines en trois dimensions sans faire appel à des modèles de biologie construits pour cette tâche, en raisonnant uniquement avec du texte et en exécutant du code qu'il écrit lui-même.

## Que s'est-il passé au laboratoire ?

Les protéines sont des chaînes de briques appelées acides aminés ; l'ordre de la chaîne décide de la façon dont la protéine se replie, et le repliement décide de ce qu'elle fait. Avec son partenaire de recherche Onava, OpenAI a réellement fabriqué et testé les petites protéines (minibinders) conçues par GPT-6.2.

Résultat : sur 322 conceptions essayées contre cinq cibles, 35, soit 10,9 pour cent, se sont liées à leur cible. Les cibles étaient PD-L1, IL-7Rα, TrkA, VEGF-A et IL-17A ; 18 des liaisons venaient de la seule cible IL-17A. Sur des tâches plus faciles, comme écrire une nouvelle séquence d'acides aminés sur une structure existante, le taux était bien plus élevé : 128 pièces sur 182 se sont liées lors de la refonte de boucles d'anticorps, et 179 sur 272 pour des fragments d'anticorps thérapeutiques.

## Qu'est-ce qu'il ne faut pas exagérer ?

Le modèle a produit la forme de la chaîne, mais le reste du travail est resté aux anciens outils : les séquences ont été proposées par SolubleMPNN et ProteinMPNN, et Boltz-2, OpenDDE et ESMFold2 ont filtré les candidats qui iraient au banc d'essai. OpenAI écrit lui-même qu'il n'est pas démontré que ses modèles puissent produire une protéine seuls, de bout en bout.

Pour prédire la structure entière d'une protéine à partir d'une séquence, le modèle reste faible : le score TM moyen est de 0,38 pour le modèle interne, contre 0,93 pour le modèle spécialisé ESMFold2. Les meilleurs résultats de mesure viennent en plus d'un modèle interne non nommé, auquel personne n'a accès, et aucun n'a été vérifié hors de l'entreprise.

## Pourquoi est-ce important ?

La liaison est le premier pas sur le chemin du médicament ; les tests de sélectivité, de stabilité et de sécurité viennent après. Qu'un modèle à usage général fasse malgré tout le travail dans un domaine tenu depuis des années par des modèles entraînés pour une seule tâche pourrait changer la façon dont les logiciels de laboratoire seront bâtis à partir de maintenant. Dans le même texte, OpenAI dit aussi que cette capacité pourrait être détournée et qu'il a évalué les risques de biosécurité avec son propre cadre. Si vous vous demandez comment les ordinateurs sont nés comme calculatrice de la science, [l'histoire de l'ENIAC de 30 tonnes](/yazi/eniac-30-ton/) est ici.
