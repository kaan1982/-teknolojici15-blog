---
title: "Les agents d'OpenAI ont trouvé et exploité 948 failles root dans le noyau Linux"
excerpt: "OpenAI affirme que son modèle cyber encore inédit a produit du code d'exploitation fonctionnel pour 948 failles uniques d'élévation de privilèges dans le noyau Linux."
hook: "Environ 1 279 dollars par faille"
fact: "948"
factLabel: "Exploits root fonctionnels"
category: "Actualité"
---
Dans une étude publiée le 4 novembre, OpenAI a annoncé que ses agents d'IA avaient trouvé 948 failles uniques d'élévation locale de privilèges (LPE) dans le noyau Linux et écrit un exploit fonctionnel pour chacune d'elles. Ce type de faille permet à une personne connectée comme simple utilisateur d'obtenir les droits "root", c'est-à-dire les pleins droits d'administrateur.

## Comment ont-ils fait ?

Selon Unite.AI, l'expérience a eu lieu mi-octobre sur une distribution Linux de bureau très répandue, dans des machines virtuelles avec les protections de sécurité standard activées. Les agents, fonctionnant avec un modèle de cybersécurité encore inédit, ont analysé 2,8 millions de lignes de code, soit environ 7 % du noyau. En 12 heures, 2 308 pistes sont apparues ; en 30 heures, 1 724 d'entre elles ont été reproduites dans l'environnement virtuel. Au final, du code fonctionnel a été obtenu pour 948 failles root uniques.

D'après The Hacker News, le coût total s'élève à environ 1,21 million de dollars de crédits API, soit près de 1 279 dollars par faille. OpenAI estime que les agents ont découvert au moins 10 nouvelles techniques d'exploitation, mais n'a pas donné de détails pour des raisons de sécurité. Lors d'un essai similaire en juin, seules 24 failles avaient été trouvées.

## Et les correctifs ?

Les agents ont aussi rédigé un projet de correctif pour chaque faille, mais ceux-ci n'ont pas encore été validés par les développeurs de Linux. Chaque exploit et chaque correctif est d'abord examiné par des chercheurs humains. Selon Unite.AI, 61 failles étaient déjà corrigées à la fin de l'analyse ; OpenAI a signalé des centaines de failles critiques et partagera le reste progressivement. Le modèle n'étant pas publié, il est pour l'instant impossible de vérifier les résultats de façon indépendante.

## Pourquoi c'est important

Trouver une faille root était autrefois un travail d'expert qui prenait des semaines ; cela ne coûte plus que quelques milliers de dollars. C'est une grande chance pour les défenseurs, mais le même outil fonctionne aussi entre des mains malveillantes. L'avertissement d'OpenAI va d'ailleurs dans ce sens : sur un système non mis à jour, un compte ordinaire devra bientôt être considéré comme un compte administrateur de fait. Si vous voulez savoir à quel point les virus informatiques ont commencé de façon innocente, lisez notre article [le premier virus, Creeper, était en fait inoffensif](/yazi/creeper-ilk-virus-zararsizdi/).
