---
title: "WhatsApp corrige trois failles de sécurité : l'une aurait servi à des arnaques"
excerpt: "WhatsApp a corrigé trois failles de sécurité, dont une faille Android capable de divulguer l'adresse IP et soupçonnée d'avoir servi dans une campagne d'arnaque."
hook: "Un message pouvait révéler votre IP"
fact: "3 failles"
factLabel: "Failles corrigées en novembre"
category: "Actualité"
---
Dans des bulletins de sécurité publiés le 20 novembre, WhatsApp a annoncé avoir corrigé trois failles. L'une d'elles est un bug Android dont l'entreprise soupçonne qu'il a été exploité dans une campagne d'arnaque.

## Quelles sont ces failles ?

La première est référencée CVE-2026-23871 et touche WhatsApp et WhatsApp Business pour Android avant la version 2.26.17.4. Selon Business Upturn, les adresses externes contenues dans les réponses aux publicités "Click to WhatsApp" n'étaient pas suffisamment vérifiées. Lorsqu'un message spécialement conçu s'affichait dans une conversation, l'appareil pouvait révéler son adresse IP à l'interlocuteur. WhatsApp affirme avoir découvert le bug en tentant de bloquer une campagne d'arnaque et pense qu'un escroc s'en est servi pour rendre son faux message plus crédible. Le nombre de personnes touchées n'a pas été communiqué.

La deuxième faille, CVE-2026-102769, est une injection SQL dans les versions Android antérieures à 2.26.35.74. En touchant un faux message de commande envoyé depuis une application non officielle, certains fichiers que WhatsApp conserve sur le téléphone pouvaient être supprimés. Un chercheur l'a signalée via le programme de bug bounty de Meta.

La troisième, CVE-2026-44908, concerne la vérification des certificats lors de la connexion à l'infrastructure de calcul confidentiel de Meta AI et touchait les applications Android, iOS et Mac. Pour l'exploiter, un attaquant aurait dû se trouver au sein même de l'infrastructure de Meta. WhatsApp indique n'avoir trouvé aucune preuve que les deux dernières failles aient été utilisées dans de véritables attaques.

## Que faire ?

Le conseil de l'entreprise est simple : maintenir WhatsApp et le système d'exploitation du téléphone à jour. Vérifier les mises à jour dans la boutique d'applications suffit à combler ces failles.

## Pourquoi est-ce important ?

Dans une application utilisée par des milliards de personnes, une fuite d'adresse IP peut permettre de deviner approximativement la localisation d'un utilisateur et ouvrir la porte à des arnaques ciblées. Il est frappant de voir que les escrocs ne misent plus seulement sur de faux messages, mais aussi sur les failles de l'application elle-même. Nous avons raconté l'histoire de la création de WhatsApp dans [notre article sur Brian Acton](/yazi/whatsapp-brian-acton-facebook-reddi/).
