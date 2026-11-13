---
title: "Des agents d'IA ont écrit de bout en bout l'émulateur de cloud local gratuit d'AWS"
excerpt: "AWS Emulator imite plus de 200 services AWS sur votre ordinateur ; selon Amazon, aucun humain n'a écrit ni relu la moindre ligne du code."
hook: "Les agents l'ont écrit et corrigé"
fact: "200+"
factLabel: "Services AWS émulés"
category: "Actualité"
---
Le 11 novembre, Amazon Web Services a lancé un outil gratuit pour développeurs appelé AWS Emulator. Il imite plus de 200 services du cloud AWS sur l'ordinateur du développeur, ce qui permet de tester des logiciels sans ouvrir de compte AWS ni payer de facture cloud. Le plus frappant, cependant, est de savoir qui l'a écrit.

## Pas d'humains, des agents

Selon Matt Goldberg, ingénieur principal senior chez AWS, des agents d'IA autonomes ont écrit l'intégralité de l'émulateur ; son équipe n'a ni écrit ni relu la moindre ligne du code. Le projet est né d'une expérience menée un week-end par Goldberg avec Kiro, l'outil de codage d'Amazon : la première imitation d'un service simple de file de messages a été prête en environ 15 minutes.

Aujourd'hui, le travail est mené par trois équipes d'agents. La première écrit des tests et les valide face au véritable AWS. La deuxième exécute les mêmes tests sur l'émulateur et ouvre les écarts sous forme de rapports de bogues. Dans la troisième, chaque agent corrige un seul bogue. Les modifications ne sont pas fusionnées tant qu'elles n'ont pas passé les contrôles de compilation, de style de code, de sécurité et de compatibilité ascendante. Selon Goldberg, des centaines d'agents ferment des milliers de bogues par jour. Le rôle des humains est de concevoir les tests, les règles et ces barrières.

## Ses limites

Le code est écrit en Rust et publié sous la licence CC0, qui le place dans le domaine public. Amazon indique que l'outil ne doit pas être utilisé pour des systèmes en production ni pour des tests de sécurité : il n'évalue pas les politiques d'autorisation comme le vrai AWS, et n'imite pas encore la limitation de débit, les pannes ni les différences entre régions. Les opérations non prises en charge renvoient une erreur HTTP 501, et la collecte de données d'utilisation est activée par défaut.

## Pourquoi c'est important ?

C'est l'un des rares cas où une grande entreprise affirme ouvertement avoir produit un logiciel largement utilisé sans intervention humaine sur le code. Le centre de gravité de l'ingénierie logicielle pourrait passer de l'écriture du code à la construction des tests qui mesurent la justesse. Pour l'histoire du tout premier « bogue » informatique, consultez notre article sur [le premier bogue informatique](/yazi/ilk-bilgisayar-bocegi-1947/).
