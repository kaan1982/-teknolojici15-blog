---
title: "L'IA trouve des failles critiques dans PHP, sur lequel reposent 70 % des sites web"
excerpt: "Deux failles baptisées PHP2Shell permettent d'exécuter du code sur un serveur sans se connecter. Des modèles comme GPT-5.6 Sol et Gemini 4 Argon ont servi à la découverte."
hook: "L'IA a trouvé la faille géante de PHP"
fact: "CVSS 9,2"
factLabel: "Note la plus élevée des failles PHP2Shell"
category: "IA"
---
Le 21 octobre, les développeurs de PHP ont publié un correctif d'urgence pour deux failles de sécurité critiques dans le moteur central du langage. Baptisées "PHP2Shell" et numérotées CVE-2026-109618 et CVE-2026-109619, ces failles ont été trouvées à l'aide d'outils d'IA.

## Que s'est-il passé ?

Selon Fortune, l'entreprise de tests de sécurité par IA Calif a trouvé le premier maillon de la chaîne le 1er août avec GPT-5.6 Sol ; Wiz a identifié indépendamment la première faille le 19 août et l'a signalée à l'équipe de sécurité de PHP le 24 août. La découverte a fait appel à l'outil maison de Wiz, Wiz Atlas, ainsi qu'aux modèles GPT-5.6 Sol d'OpenAI et Gemini 4 Argon de Google.

Les failles permettent à un attaquant d'exécuter du code à distance sur un serveur sans se connecter et de faire fuiter des données en mémoire. Selon Wiz, presque toutes les versions de PHP de la dernière décennie, jusqu'à la 5.4, sont touchées. La gravité maximale sur l'échelle CVSS est de 9,2. PHP fait tourner environ 70 % des sites web du monde ; WordPress à lui seul en gère à peu près 40 %. D'après l'article mis à jour de Fortune, les failles ont commencé à être exploitées à grande échelle après la publication du correctif.

## Pourquoi est-ce important ?

C'est l'un des exemples les plus concrets montrant que, en recherche en sécurité, l'IA peut désormais être non plus seulement un assistant, mais celle qui fait la découverte. Mais ces mêmes outils sont aussi entre les mains des attaquants, et le délai entre la sortie du correctif et le début de l'exploitation se raccourcit. Tout propriétaire de site utilisant PHP doit mettre à jour son serveur immédiatement. Dans un tableau plus large, les bogues cachés dans le vieux code d'Internet, en service depuis des décennies, pourraient désormais apparaître beaucoup plus vite. Nous avons raconté l'histoire du premier programme à circuler seul sur un réseau dans notre [article sur Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
