---
title: "Quatre géants de l'IA s'accordent sur un signal robots.txt : « Ne m'utilise pas pour t'entraîner »"
excerpt: "OpenAI, Google, Microsoft et Anthropic vont prendre en charge un signal robots.txt commun qui permet aux sites de refuser l'entraînement de l'IA en une ligne."
hook: "Dire non à l'IA en une ligne"
fact: "4 sociétés"
factLabel: "Géants derrière le signal commun"
category: "Actualité"
---
Le 30 octobre, OpenAI, Google, Microsoft et Anthropic ont annoncé qu'ils prendront en charge un signal commun permettant aux sites web de retirer leurs contenus de l'entraînement de l'IA avec un seul réglage. Jusqu'ici, un propriétaire de site devait bloquer séparément le robot d'exploration de chaque entreprise dans le fichier robots.txt.

## Que s'est-il passé ?

Le nouveau signal s'appelle `__usage_ai-training`. Le propriétaire du site l'inscrit dans le fichier robots.txt comme une règle ordinaire et dit ainsi : « n'utilise pas mon contenu pour entraîner des modèles d'IA ». La proposition a été soumise à l'Internet Engineering Task Force (IETF) sous forme de brouillon rédigé par Kevin Kelley, responsable des standards chez Anthropic. Ce n'est pas encore un standard définitif ; sans mise à jour, le brouillon expire en mai 2027.

Les calendriers diffèrent. Anthropic dit avoir commencé à l'appliquer. La prise en charge d'OpenAI arrivera dans les prochains mois. Google et Microsoft visent 2027. Pour Bing, Microsoft ajoute aussi un contrôle distinct qui sépare l'entraînement du « grounding », c'est-à-dire le fait qu'un chatbot consulte une source pour répondre. Google a indiqué qu'il traitera les sites qui utilisent ce signal sans avoir écrit leur propre règle Google-Extended comme s'ils avaient bloqué Google-Extended. Meta s'est montré intéressé par un signal commun, sans dire s'il le respectera.

## Pourquoi c'est important ?

Les éditeurs se plaignent depuis des années que leurs contenus servent à entraîner des modèles sans autorisation ; le New York Times a d'ailleurs poursuivi OpenAI. Un signal d'une ligne simplifie beaucoup la vie des petits sites. Mais il a ses limites : le respect est volontaire, il n'y a ni contrôle ni sanction, et les petits laboratoires comme les projets open source restent en dehors de l'accord. De plus, le signal ne couvre que l'entraînement ; il ne règle pas des problèmes comme les résumés d'IA qui réduisent les visites vers les sites.

## Un lien avec l'histoire

La règle robots.txt est apparue en 1994, quand le web était encore tout jeune, pour dire aux robots « n'entre pas ici ». Nous avons raconté où le web a commencé dans notre article [Le premier site web est toujours en ligne : l'histoire d'info.cern.ch](/yazi/ilk-web-sitesi-hala-yayinda-1991/). Trente ans plus tard, ce même petit fichier est devenu une table de négociation de l'ère de l'IA.
