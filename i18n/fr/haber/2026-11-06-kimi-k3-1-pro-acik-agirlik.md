---
title: "Moonshot ouvre à tous les poids de Kimi K3.1 Pro et ses 2 800 milliards de paramètres"
excerpt: "Le chinois Moonshot AI a publié les poids du modèle Kimi K3.1 Pro sur Hugging Face ; l'entreprise affirme avoir volontairement réduit ses capacités de cyberattaque."
hook: "Capacités d'attaque réduites exprès"
fact: "2 800 Md"
factLabel: "Nombre total de paramètres"
category: "Actualité"
---
L'entreprise chinoise d'IA Moonshot AI a publié sur Hugging Face les poids de son modèle phare, Kimi K3.1 Pro. Selon un article de TechNode daté du 5 novembre, le modèle n'est donc plus accessible uniquement via les applications Kimi et l'API : chacun peut désormais le faire tourner sur ses propres serveurs. L'entreprise avait présenté le modèle fin octobre et annoncé qu'elle ouvrirait les poids d'ici au 4 novembre.

## Immense mais sélectif

Selon TechNode, K3.1 Pro est un modèle de type "mélange d'experts" (MoE). Il compte environ 2 800 milliards de paramètres au total, mais seuls quelque 104 milliards sont sollicités pour chaque réponse. Sa fenêtre de contexte atteint environ 1 million de tokens, et il traite les images en plus du texte. L'entraînement s'est concentré sur le code, la conception 3D, la recherche financière et les tâches d'agent de longue durée. Huawei a par ailleurs annoncé la prise en charge du modèle sur ses propres puces Ascend.

D'après les mesures de Moonshot elle-même, relayées par The Next Web, le modèle obtient 65,7 % sur Terminal-Bench 4.0, qui évalue les agents de programmation. C'est très proche des 66,4 % de Claude Opus 5.5 et au-dessus des 58,2 % de GPT-6 Astra. L'entreprise affirme aussi que le taux d'affirmations fausses du modèle est passé de 23,4 % à 8,3 %. Ces chiffres n'ont pas encore été vérifiés de manière indépendante.

## Une capacité volontairement affaiblie

Le point le plus frappant concerne la sécurité. Moonshot a indiqué avoir retiré, avant la publication ouverte, le matériel d'entraînement lié aux cyberattaques. Lors du test interne de l'entreprise, la version non réduite résolvait 90,5 % des tâches consistant à exploiter de vraies failles logicielles, contre 81 % pour le modèle publié. Les experts rappellent toutefois que des poids ouverts ne peuvent plus être rappelés une fois téléchargés.

## Pourquoi c'est important

L'écart entre les modèles à poids ouverts et les modèles fermés américains se réduit de plus en plus. Pour les développeurs, c'est une option bon marché et souple ; pour les régulateurs, un outil puissant de plus en plus difficile à contrôler. Nous expliquons comment utiliser les outils d'IA en toute sécurité dans notre chapitre sur [la sécurité des skills](/yapay-zeka/skill-guvenligi/).
