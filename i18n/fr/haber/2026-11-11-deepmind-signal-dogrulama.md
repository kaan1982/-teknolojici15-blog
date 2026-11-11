---
title: "L'IA de DeepMind a vérifié par les maths le code du chiffrement de Signal en 4 semaines"
excerpt: "Le système AlphaProof Code de Google DeepMind a vérifié des propriétés de sécurité essentielles dans le vrai code du protocole Signal, avec des preuves contrôlées par machine."
hook: "Des années de travail en quatre semaines"
fact: "6 millions de lignes"
factLabel: "Preuve écrite en Lean"
category: "Actualité"
---
Le 10 novembre, Google DeepMind a présenté un nouveau système d'IA baptisé AlphaProof Code et annoncé sa première grande mission : prouver par "vérification formelle" les propriétés de sécurité fondamentales du protocole de messagerie Signal. Outre l'application Signal, le protocole Signal est aussi utilisé, sous des formes modifiées, dans WhatsApp et Google Messages.

## Comment ça marche ?

En vérification formelle, on démontre mathématiquement qu'un logiciel respecte une règle de sécurité donnée dans toutes les situations, et un programme informatique contrôle la preuve étape par étape. Ce travail prend normalement des années à des équipes d'experts.

Avec AlphaProof Code, des experts humains en cryptographie ont d'abord rédigé ce qu'il fallait prouver. Par exemple, la protection des messages suivants même si un appareil est brièvement compromis. Des agents d'IA travaillant ensemble ont ensuite produit les preuves dans un langage formel appelé Lean. Résultat : une preuve de plus de six millions de lignes. Le travail de l'équipe de cinq personnes a duré quatre semaines. Les agents n'ont signalé que 1 % du code pour une seconde vérification humaine.

Pour montrer que le système sait vraiment faire la différence, l'équipe a réintroduit dans une copie isolée du code deux vraies failles corrigées auparavant. Dans les deux cas, AlphaProof Code a prouvé que ces versions n'étaient pas sûres.

## Limites

La vérification porte sur des propriétés de sécurité choisies du protocole, et non sur l'ensemble de l'application Signal. Aucune nouvelle faille n'a été trouvée dans les parties examinées. Une preuve ne vaut que ce que valent les règles et hypothèses rédigées ; on suppose par exemple que les algorithmes de chiffrement sont parfaits. Le chercheur de DeepMind Swarat Chaudhuri a aussi déclaré que la méthode avait encore un très long chemin à parcourir avant de s'étendre à tous les logiciels du monde. Google n'a pas révélé le coût ; les preuves et les règles sont publiées en open source.

## Pourquoi c'est important

L'IA aide aussi les attaquants à trouver des failles. Utiliser la même technologie pour prouver qu'un logiciel est sûr est une étape importante pour le camp de la défense. Si les débuts de la sécurité informatique vous intriguent, découvrez l'histoire du [premier mot de passe informatique](/yazi/ilk-bilgisayar-sifresi-ctss/).
