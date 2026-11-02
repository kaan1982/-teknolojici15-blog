---
title: "DeepSeek publie en open source Super-Agent, qui écoute les discussions d'équipe et écrit du code"
excerpt: "DeepSeek a publié sous licence MIT le code de Super-Agent, un agent de programmation expérimental qui suit les demandes sur GitHub et Feishu et ouvre des pull requests."
hook: "L'agent de code qui vient travailler sans qu'on l'appelle"
fact: "MIT"
factLabel: "Licence open source de Super-Agent"
category: "Actualité"
---
L'entreprise chinoise d'intelligence artificielle DeepSeek a publié le 31 octobre sur GitHub le code de Super-Agent, un agent de programmation expérimental conçu pour les équipes de développement. Selon Bloomberg, l'entreprise vise avec cet agent à concurrencer des outils comme Claude Code d'Anthropic.

## Que fait-il ?

Super-Agent travaille pour un seul dépôt GitHub. Il écoute les conversations sur GitHub et, en option, les discussions de groupe sur Feishu, l'application de messagerie professionnelle de ByteDance. Lorsqu'un membre autorisé de l'équipe demande une tâche, l'agent ouvre une tâche distincte dans sa propre session, effectue le travail et publie le résultat, par exemple une pull request, sous la conversation d'où venait la demande. Les tâches qui nécessitent une décision humaine sont listées dans un tableau de bord web.

D'après le manuel du projet, l'objectif est de produire du travail en demandant à l'équipe « le moins d'attention possible ». Le document de philosophie de DeepSeek souligne que l'agent n'agit que lorsqu'on le lui demande ou lorsqu'une règle fixée par l'équipe l'y autorise. L'entreprise prévient qu'un agent travaillant au nom de toute une équipe peut aussi gaspiller l'attention de cette équipe.

Le code a été publié sous licence MIT : tout le monde peut donc le télécharger, le modifier et l'utiliser commercialement. Le dépôt a recueilli plus de 9 000 étoiles dans les deux jours suivant sa publication.

## Quelles sont ses limites ?

DeepSeek présente Super-Agent comme un « prototype de recherche » et écrit clairement qu'il ne s'agit pas d'un produit officiel. La version open source n'est pas la même que celle que l'entreprise utilise en interne. Certaines idées de l'article d'annonce ne figurent pas encore dans le code. Le document reconnaît aussi que des problèmes difficiles comme les autorisations, la relecture et la confiance ne sont pas résolus ; les utilisateurs sont invités à examiner le code avant de l'exécuter.

## Pourquoi est-ce important ?

Jusqu'ici, les agents de programmation étaient surtout des outils qui attendaient la commande d'un seul développeur. Super-Agent teste au contraire l'idée d'un « coéquipier » qui s'installe dans la discussion de l'équipe et prend lui-même le travail en charge, et il le fait de manière ouverte, consultable par tous. Si l'idée prend, la question des pouvoirs à accorder aux agents grimpera en tête des priorités des équipes de développement. Nous avions raconté que le premier « bug » informatique était un vrai papillon de nuit dans notre article [le papillon de 1947](/yazi/ilk-bilgisayar-bocegi-1947/).
