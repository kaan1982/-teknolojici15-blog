---
title: "Le premier mot de passe d'ordinateur a été volé dès sa première année"
excerpt: "Le système CTSS du MIT a apporté le mot de passe à l'ordinateur. Peu après, un doctorant a fait sortir tous les mots de passe sur l'imprimante. Le premier piratage du premier mot de passe."
hook: "Le premier mot de passe, le premier piraté"
fact: "1962"
factLabel: "Le premier vol de mot de passe connu"
category: "Premières"
---
Le mot de passe que tu tapes des dizaines de fois par jour a un lieu de naissance : un seul ordinateur géant du MIT au début des années 1960. Plus intéressant encore, les tout premiers mots de passe d'ordinateur connus ont été volés en masse peu après le début de leur utilisation. Et pas par un gang de pirates, mais par un doctorant qui voulait plus d'heures de calcul.

## Un ordinateur, des dizaines d'utilisateurs

Au début des années 1960, les ordinateurs étaient des machines qui remplissaient des salles et ne faisaient qu'un travail à la fois. Tu perforais ton programme sur des cartes, tu le mettais en file d'attente, et tu recevais le résultat des heures plus tard. Au MIT, l'équipe de Fernando Corbató a voulu changer cela : un système où de nombreuses personnes pouvaient utiliser la même machine en même temps depuis des terminaux, c'est-à-dire le « temps partagé ».

Ce système s'est appelé CTSS (Compatible Time-Sharing System). Il a été démontré pour la première fois en novembre 1961 sur un IBM 709 modifié du MIT, et a tourné dans les années suivantes sur des IBM 7094. Comme le rapporte aussi Wikipedia, CTSS est considéré comme le premier système informatique à avoir mis en œuvre l'ouverture de session par mot de passe.

## Pourquoi un mot de passe ?

Le problème était simple : sur la même machine, des dizaines de personnes avaient leurs fichiers et leur temps de calcul attribué. Il fallait un moyen de distinguer qui était qui. Corbató l'a raconté des années plus tard à Wired : donner à chaque utilisateur un mot de passe comme serrure semblait être une « solution très simple ».

Corbató était aussi prudent pour se proclamer le « premier ». Il disait que le système de réservation Sabre d'IBM, en 1960, utilisait probablement lui aussi des mots de passe, mais qu'il n'en restait aucune trace, donc rien n'est certain. Sur l'année exacte où les mots de passe ont été ajoutés à CTSS, les sources disent aussi des choses différentes. Ce que nous savons : au printemps 1962, le système de mot de passe fonctionnait, puisqu'il a été volé ce printemps-là.

## Le plan du vendredi soir d'Allan Scherr

Allan Scherr était un chercheur en doctorat au MIT et il exécutait des simulations complexes. Selon Wired, on ne lui avait attribué que quatre heures par semaine sur CTSS (certaines sources disent quatre heures par jour). Ce temps ne lui suffisait pas.

Sa solution était astucieuse, mais aussi espiègle. En profitant de la fonction d'impression hors ligne des fichiers du système, il a préparé une carte perforée demandant l'impression du fichier des mots de passe. Il a mis la carte en file d'attente tard un vendredi soir, est revenu tôt le samedi matin et a récupéré le listing. Il avait désormais les mots de passe de tout le monde dans le système.

Pour brouiller les pistes, il a aussi partagé les mots de passe avec d'autres utilisateurs. Selon Wired, l'un d'eux, J.C.R. Licklider, est entré dans le compte du directeur du laboratoire Robert Fano et y a laissé des messages moqueurs. Scherr n'a jamais été pris et, environ un quart de siècle après l'incident, il l'a avoué en personne à Fano. Fano l'a rassuré en disant que son doctorat ne lui serait pas retiré.

> **Le savais-tu ?** Ce n'était pas la seule crise de mots de passe de CTSS. En 1966, à cause d'une erreur d'un administrateur, le fichier des mots de passe et le fichier du « message du jour » ont été intervertis, et tous ceux qui ouvraient une session ont vu tous les mots de passe s'afficher en clair à l'écran. Selon Tom Van Vleck, développeur du système, cet incident est à l'origine de l'idée de stocker les mots de passe chiffrés de façon irréversible. Bien sûr, l'incident s'est produit un vendredi soir à cinq heures, et Van Vleck a dû passer des heures à changer des mots de passe.

## Hier et aujourd'hui

| Hier (années 1960) | Aujourd'hui |
|---|---|
| Des mots de passe en clair dans un seul fichier | Des mots de passe hachés de façon irréversible (hash) |
| Une carte perforée suffisait pour obtenir un listing | Journaux d'accès, couches d'autorisation |
| Objectif : partager le temps de calcul | Objectif : protéger l'identité, l'argent, les données personnelles |
| Une machine, un campus | Des dizaines de comptes par personne |

Cette histoire est encore instructive aujourd'hui parce que le mot de passe est mis à l'épreuve par le comportement humain depuis le jour de son invention. Scherr n'a pas mené d'attaque complexe pour casser le système, il a simplement utilisé de manière inattendue une fonction que le système offrait déjà. Une bonne partie des fuites d'aujourd'hui naît d'erreurs simples du même genre.

Corbató a reçu le prix Turing en 1990 pour son travail sur le temps partagé. La serrure que son équipe avait ajoutée comme « solution simple » se trouve aujourd'hui à chaque porte, de ton e-mail à ta banque, et le maillon le plus faible reste souvent la personne qui utilise cette serrure.

À ton avis, sommes-nous prêts à abandonner complètement les mots de passe pour passer entièrement à la biométrie ou aux clés d'accès (passkeys) ?
