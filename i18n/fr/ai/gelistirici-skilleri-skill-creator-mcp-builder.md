---
title: "Skills pour développeurs : skill-creator, mcp-builder et plus"
excerpt: "Un skill qui écrit des skills, un skill qui monte un serveur MCP, des paquets de skills qui apportent test et discipline de débogage. Des sélections vérifiées pour les développeurs."
hook: "Il existe un skill qui écrit des skills"
fact: "20 REQUÊTES"
factLabel: "L'échantillon recommandé pour le test de déclenchement"
category: "Intelligence artificielle"
---
Pour quelqu'un qui développe des logiciels, les skills sont intéressants sous deux angles. D'abord, il existe des skills « producteurs » qui t'aident à écrire tes propres skills plus vite et de façon mesurable. Ensuite, il existe des paquets qui donnent à l'agent une discipline d'ingénierie (tests, plan, débogage). Dans cet article, nous traitons les deux, uniquement avec des exemples dont nous avons vérifié l'existence.

## skill-creator : le skill qui écrit des skills

skill-creator, dans le dépôt officiel anthropics/skills d'Anthropic, est conçu pour créer de nouveaux skills, modifier et améliorer des skills existants, et mesurer leurs performances. Selon sa description, il se charge aussi de lancer des évaluations (eval), de comparer les résultats par analyse de variance et d'optimiser la description d'un skill pour qu'il se déclenche mieux.

Le flux de travail est décrit de façon assez humaine : décide de ce que tu veux, écris un brouillon, prépare quelques messages de test, lance Claude avec le skill sur ces messages, évalue les résultats ensemble, réécris, recommence. Le dossier contient des scripts distincts qui lancent les évaluations, produisent le rapport de comparaison et améliorent la description, ainsi qu'un « eval-viewer » pour examiner visuellement les résultats.

Le guide d'optimisation de description d'agentskills.io cite aussi ce skill en exemple. Selon le guide, skill-creator automatise cette boucle de bout en bout : il divise le jeu de test, mesure les taux de déclenchement en parallèle, propose avec Claude des améliorations de la description et produit un rapport HTML en direct.

> **Le savais-tu ?** Dans le test de déclenchement recommandé par agentskills.io, on utilise environ 20 messages d'exemple et on lance chacun 3 fois. Essayer une seule description représente donc 60 exécutions. Pour éviter le surapprentissage (overfitting), environ 60 % des messages sont réservés à l'amélioration et 40 % uniquement à la validation. Le guide dit que cinq tours suffisent la plupart du temps.

## mcp-builder et claude-api : pour ceux qui construisent des intégrations

- **mcp-builder (officiel) :** Un guide pour développer des serveurs MCP qui permettent aux grands modèles de langage de dialoguer avec des services externes via des outils bien conçus. Il fonctionne avec Python (FastMCP) ou Node/TypeScript (MCP SDK). Le skill divise le processus en quatre phases : recherche et planification, mise en œuvre, relecture et test, création d'évaluations. Le dossier contient des documents de référence par langage et des scripts d'évaluation.
- **claude-api (officiel) :** Un skill de référence pour l'API Claude et les SDK Anthropic. Il couvre des sujets comme les identifiants de modèles, les paramètres, le streaming, l'usage des outils et la mise en cache, et contient des dossiers distincts pour de nombreux langages de programmation. Selon la documentation de Claude, ce skill open source est fourni avec Claude Code.
- **webapp-testing (officiel) :** Une boîte à outils pour tester des applications web locales avec Playwright. Un auxiliaire pratique pour ceux qui font du front-end, que nous avons aussi évoqué dans l'article sur le design.

## Côté communauté : Superpowers et la discipline d'ingénierie

En dehors du dépôt officiel, l'un des paquets dont on parle le plus chez les développeurs est le dépôt obra/superpowers de Jesse Vincent, sous licence MIT. Il se présente comme « une méthodologie complète de développement logiciel » pour les agents de programmation. En octobre 2026, le dépôt contient les skills suivants (sélection) :

| Skill | Quand intervient-il ? |
|---|---|
| brainstorming | Avant de commencer une nouvelle fonctionnalité ou un travail créatif |
| writing-plans | Pour écrire un plan avant de toucher au code, sur un travail en plusieurs étapes |
| test-driven-development | Pendant la mise en œuvre : d'abord un test qui échoue, puis le minimum de code |
| systematic-debugging | Face à un bug ou à un test qui échoue, avant de proposer une correction |
| verification-before-completion | Pour lancer les commandes de vérification avant de dire « c'est terminé » |

Le README du dépôt donne des instructions d'installation pour de nombreux agents comme Codex, Cursor, Gemini CLI et GitHub Copilot CLI, en plus de Claude Code, et précise que, côté Claude Code, il figure sur la place de marché officielle de plugins d'Anthropic. C'est la conséquence pratique du fait qu'Agent Skills est un standard ouvert : le même skill peut fonctionner dans différents outils.

## La même idée sur d'autres plateformes

La documentation d'OpenAI pour ChatGPT et Codex décrit elle aussi les skills comme reposant sur le « standard ouvert agent skills ». En octobre 2026, deux assistants intégrés ressortent dans la documentation : skill-creator, qui crée un skill à partir du travail que tu décris (appelé dans Codex par $skill-creator), et skill-installer, qui installe des skills prêts à l'emploi depuis le dépôt openai/skills ou d'autres dépôts. Codex lit les skills locaux dans les dossiers .agents/skills, au niveau du projet et de l'utilisateur.

Pour un développeur, l'habitude la plus précieuse pourrait être celle-ci : transformer chaque longue explication que tu répètes, ta liste de contrôle de revue de code ou tes étapes de déploiement en skill, et la placer dans le dépôt du projet. Dans Claude Code, les skills placés dans le dossier .claude/skills partent aussi vers l'équipe avec le dépôt. Mais n'oublie pas de lire les scripts de chaque skill communautaire que tu installes, car ces skills peuvent exécuter du code sur ton ordinateur avec tes droits.

Dans ton processus de développement, quelle étape te fait dire le plus souvent « si seulement il y avait un skill pour ça » : le test, la revue de code ou le déploiement ?
