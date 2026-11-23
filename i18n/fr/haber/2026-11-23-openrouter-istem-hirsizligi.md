---
title: "Des intermédiaires lisaient les requêtes IA : OpenRouter écarte 3 fournisseurs"
excerpt: "Une étude de Dragos menée avec 2 millions de requêtes pièges a révélé des vols de prompts et de clés chez des fournisseurs d'IA bon marché ; OpenRouter a écarté 3 fournisseurs."
hook: "Un tiers lit peut-être votre question"
fact: "2 millions"
factLabel: "Requêtes pièges envoyées dans l'étude"
category: "Actualité"
---
L'entreprise de cybersécurité Dragos a mené une expérience inhabituelle pour mesurer entre quelles mains passent, en chemin, les requêtes envoyées aux modèles d'IA. Les résultats ont fait réagir OpenRouter, qui propose différents modèles via une interface unique : la plateforme a retiré trois fournisseurs de sa liste et révoqué l'agrément "Zero Data Retention" de 125 points de terminaison.

## Comment l'expérience a-t-elle été menée ?

Entre juillet et novembre 2026, les chercheurs ont envoyé environ 2 millions de requêtes. Dans chacune, ils ont glissé de faux mots de passe et des liens cachés qui se trahissent dès qu'on les utilise, autrement dit des pièges "canari". Selon The Decoder, il est apparu qu'au moins trois fournisseurs avaient été compromis par des attaquants et que des données avaient été volées pendant des mois. Aucun des fournisseurs n'était au courant avant que Dragos ne les prévienne.

Lors de l'incident le plus important, les attaquants ont récupéré des centaines de clés AWS et en ont testé certaines en quelques heures. Certains intermédiaires fonctionnant comme une place de marché n'ont même pas eu besoin de trouver une faille : proposer le modèle au prix le plus bas et activer la journalisation suffisait pour lire les requêtes des clients. Les réglages promettant "nous ne conservons pas les données" étaient eux aussi souvent violés.

## Qu'a fait OpenRouter ?

L'entreprise a envoyé un e-mail aux utilisateurs concernés pour les avertir que leurs requêtes vers les modèles MiniMax avaient pu être lues par des tiers. Des fournisseurs comme Novita, Phala et Together ont publié des rapports d'enquête préliminaires.

## Pourquoi est-ce important ?

Chaque mot de passe, extrait de code ou document d'entreprise collé dans une conversation avec une IA peut passer par plusieurs intermédiaires avant d'atteindre le modèle, et chacun d'eux peut voir la requête entière. Le conseil de Dragos est clair : ne jamais mettre de vrais identifiants dans les requêtes et ne pas laisser le prix décider du chemin que prennent les données. Pour savoir comment est né le mot de passe, jetez un œil à [notre article sur le premier mot de passe informatique](/yazi/ilk-bilgisayar-sifresi-ctss/).
