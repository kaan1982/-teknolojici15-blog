---
title: "Le chinois Zhipu lance GLM-5.4, un modèle qui exécute ses couches deux fois"
excerpt: "Le GLM-5.4 de Zhipu applique à un grand modèle l'architecture Loop Transformer, qui fait tourner 28 couches en deux passes ; il offre aussi un contexte de 1 million de tokens et l'entrée d'images."
hook: "Un modèle qui repasse deux fois par les mêmes couches"
fact: "750 milliards"
factLabel: "paramètres du modèle de base"
category: "Actualité"
---
L'entreprise chinoise d'IA Zhipu (Z.ai) a ouvert l'accès à son modèle GLM-5.4 le 23 novembre. Sa vraie nouveauté réside dans son architecture : il s'agit du premier modèle phare "Loop Transformer" de l'entreprise.

## À quoi sert la boucle ?

Dans un modèle de langage classique, chaque couche s'exécute une seule fois. GLM-5.4, lui, fait tourner en deux passes les 28 couches du modèle de base GLM-5, qui compte environ 750 milliards de paramètres ; la seconde passe retraite et affine les résultats intermédiaires produits par la première. Le modèle peut ainsi réfléchir plus "en profondeur" sans ajouter de nouveaux poids. Zhipu affirme atteindre de cette façon un niveau d'intelligence comparable à celui de modèles de 2 à 3 billions de paramètres. Selon l'entreprise, le modèle accomplit aussi le même travail avec des réponses 10 à 14 % plus courtes sur des tests comme GPQA-Diamond et MMLU-Pro.

Le modèle propose une fenêtre de contexte de 1 million de tokens et sait désormais lire les images : les développeurs peuvent lui fournir une capture d'écran d'une interface défaillante avec le code.

## Où l'utiliser ?

Pour l'instant, GLM-5.4 est accessible via l'abonnement GLM Coding Plan, l'outil de programmation ZCode et le site de chat de Z.ai. Selon WinBuzzer, le quota des abonnés a augmenté de 50 % et le coût de 10 000 tokens en entrée est passé de 6,9 à 4,6 crédits. Une API générale et des poids ouverts arriveront après une évaluation de sécurité.

Les mesures indépendantes sont plus prudentes : au test de programmation KingBench 4 cité par WinBuzzer, le modèle s'est classé septième sur 19 modèles avec 55,3 % des points. L'entreprise n'a pas encore publié de résultats de tests détaillés.

## Pourquoi c'est important ?

Faire boucler les couches s'impose comme une nouvelle façon de rendre les modèles plus puissants sans les agrandir, et une entreprise chinoise figure parmi les premières à l'essayer à grande échelle. Pour mesurer l'ampleur d'un contexte de 1 million de tokens, il suffit de regarder [la première disquette de 80 KB](/yazi/ilk-disket-ibm-1971-80-kb/).
