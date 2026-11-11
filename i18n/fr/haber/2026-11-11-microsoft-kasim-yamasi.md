---
title: "Microsoft corrige plus de 1 000 failles en novembre, dont une faille d'Outlook déjà exploitée"
excerpt: "La mise à jour de sécurité de novembre de Microsoft corrige 1 093 vulnérabilités, dont une faille d'Outlook déjà exploitée par des attaquants."
hook: "Mille failles en un mois"
fact: "1 093"
factLabel: "Vulnérabilités dans la mise à jour de novembre"
category: "Actualité"
---
Le 10 novembre, Microsoft a publié l'édition de novembre de la mise à jour de sécurité qu'il diffuse le deuxième mardi de chaque mois. Le paquet corrige 1 093 failles de sécurité dans 287 produits et composants. Si l'on compte aussi les failles du navigateur Edge, le chiffre monte à 1 235.

## Répartition des failles

Parmi ces failles, 63 sont jugées "critiques" et 1 029 "importantes". Près de la moitié (535) permettent à un attaquant d'élever ses privilèges sur le système, et 296 d'exécuter du code à distance. C'est dans Word, Excel et SQL Server que l'on a trouvé le plus de failles.

Ces paquets géants deviennent la norme : la mise à jour d'octobre était encore plus grosse, avec 1 411 failles. Selon l'analyse de Netizen, une partie de la hausse s'explique par le recours de Microsoft à des outils assistés par l'IA pour traquer les failles.

## La faille d'Outlook utilisée dans des attaques

Le point le plus urgent du paquet est la faille d'Outlook référencée CVE-2026-124194. Microsoft a confirmé qu'elle avait été exploitée dans des attaques avant la sortie du correctif. L'attaquant pousse la victime à ouvrir un fichier spécialement conçu. Outlook se connecte alors au serveur de l'attaquant sans afficher d'avertissement sur le contenu externe et divulgue l'empreinte du mot de passe de l'utilisateur (NTLMv2). Avec cette information, l'attaquant peut se faire passer pour l'utilisateur. Le volet de prévisualisation n'est pas un vecteur d'attaque ; il faut ouvrir le fichier.

La faille obtient un score de 6,5 et Microsoft la classe comme "modérée". Les produits concernés sont Office LTSC 2021, Office LTSC 2024 et Microsoft 365 Apps. L'identité des attaquants et des victimes n'a pas été révélée. Selon Tenable, le chercheur qui a découvert la faille s'est fait aider par le modèle Claude d'Anthropic.

## Pourquoi c'est important

Tous les utilisateurs de Windows et d'Office, en particulier les entreprises, devraient installer la mise à jour au plus vite. Par ailleurs, l'IA accélère la découverte de failles, ce qui signifie que les correctifs grossissent eux aussi. Si vous vous demandez d'où vient la notion de "bug" informatique, lisez notre article sur le [premier bug informatique](/yazi/ilk-bilgisayar-bocegi-1947/).
