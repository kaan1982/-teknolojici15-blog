---
title: "Le fournisseur d'IA Fireworks piraté ; des conversations Notion AI exposées"
excerpt: "Des attaquants ont pénétré les systèmes de stockage de Fireworks AI ; des conversations IA de moins de 1 % des espaces de travail Notion ont été touchées."
hook: "La conversation avait une copie"
fact: "MOINS DE 1 %"
factLabel: "Espaces de travail Notion touchés"
category: "Actualité"
---
L'application de notes et d'espaces de travail Notion a informé certains de ses clients que leurs historiques de conversations avec l'IA avaient été exposés lors d'une fuite de données. La fuite ne s'est pas produite dans les propres systèmes de Notion, mais chez Fireworks AI, le fournisseur d'infrastructure qu'elle utilise pour faire tourner des modèles d'IA à poids ouverts.

## Comment l'attaque s'est-elle déroulée ?

Fireworks a été ciblé deux fois en octobre : une fois à l'aide d'identifiants internes compromis, et une fois via un fournisseur cloud tiers hébergeant les machines de recherche et développement de l'entreprise. Le 24 octobre, les attaquants ont exécuté par ce biais une charge de travail non autorisée et ont atteint certains systèmes de stockage. Fireworks affirme avoir maîtrisé l'incident le jour même et indique que les éléments recueillis désignent un groupe motivé par l'argent, qui revend des accès à des modèles obtenus de manière illicite. Début novembre, Fireworks a informé Notion que des historiques de conversations figuraient parmi ces données.

## Quelles données ont été touchées ?

Les enregistrements exposés étaient des conversations Notion AI classées pour Insights, une fonction qui montre aux clients de Notion comment ils utilisent l'IA. Notion a indiqué que moins de 1 % des espaces de travail étaient concernés et que la plupart des enregistrements ne contenaient aucune information permettant de les relier à un utilisateur ou à une entreprise. L'entreprise a coupé sa connexion avec Fireworks, désactivé la fonction Insights et demandé aux clients ayant collé des informations secrètes, comme des mots de passe ou des clés API, dans les conversations de les changer immédiatement. Fireworks précise de son côté n'avoir constaté aucun impact sur son service d'inférence en temps réel, qui fonctionne par défaut en "zero data retention", et que le problème concernait les traitements par lots qui conservent des données ainsi que ses systèmes de stockage.

## Pourquoi c'est important ?

Lorsque vous utilisez une fonction d'IA, vos données transitent souvent par les serveurs d'autres entreprises que vous ne voyez jamais. Cet incident montre qu'un mot de passe collé dans une fenêtre de discussion n'est pas plus sûr que le maillon le plus faible de la chaîne d'approvisionnement. Nous racontons à quel point le vol de mots de passe est ancien dans notre article sur [le premier mot de passe informatique](/yazi/ilk-bilgisayar-sifresi-ctss/).
