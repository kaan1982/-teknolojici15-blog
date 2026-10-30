---
title: "Qu'est-ce qu'un skill ? Les nouveaux « dossiers de compétences » des agents IA"
excerpt: "Un Agent Skill est un dossier composé d'un fichier SKILL.md et de scripts facultatifs. L'agent ne le charge que lorsqu'il en a besoin. En quoi diffère-t-il d'un prompt, de MCP et d'un plugin ?"
hook: "Apprends une nouvelle compétence à l'agent avec un dossier"
fact: "3 NIVEAUX"
factLabel: "Chargement progressif du contenu d'un skill"
category: "Intelligence artificielle"
---
Les assistants IA savent un peu de tout, mais ils ne connaissent pas le modèle de rapport de ton entreprise, les couleurs de ta marque ni les astuces pour traiter correctement un type de fichier. Et si, au lieu de l'expliquer longuement à chaque conversation, tu pouvais l'empaqueter une fois et dire à l'agent « utilise-le quand il le faut » ? C'est exactement l'idée du « skill » (compétence).

## En bref : un dossier et un SKILL.md

Dans la définition d'Anthropic, Agent Skills sont des paquets modulaires qui étendent les capacités de Claude. Chaque skill réunit des instructions, des métadonnées et des ressources facultatives (scripts, modèles), et Claude les utilise de lui-même quand elles sont pertinentes. Le blog d'ingénierie d'Anthropic le dit plus simplement encore : les skills sont des « dossiers organisés d'instructions, de scripts et de ressources » que l'agent charge au moment du besoin pour être meilleur sur des tâches précises.

Techniquement, un skill est un dossier qui contient au moins un fichier nommé SKILL.md. Au début de ce fichier, il y a deux champs obligatoires au format YAML : name (nom) et description. En dessous se trouvent les instructions écrites en Markdown simple. Dans le dossier, tu peux aussi ajouter, si tu veux, des sous-dossiers comme scripts/ (code exécutable), references/ (documents complémentaires) et assets/ (modèles, images, données).

Anthropic compare cette structure à un guide d'intégration préparé pour un nouvel employé. Tu poses le guide sur le bureau, et l'employé l'ouvre pour le consulter quand il en a besoin.

## Le secret : tout n'est pas chargé d'un coup

Ce qui distingue les skills d'un simple long prompt, c'est une conception appelée « chargement progressif » (progressive disclosure). Selon la documentation de Claude, le contenu est chargé en trois niveaux :

| Niveau | Quand est-il chargé ? |
|---|---|
| 1. Métadonnées (nom + description) | Toujours, au démarrage (environ 100 tokens par skill) |
| 2. Corps du SKILL.md | Quand le skill est déclenché (moins de 5 000 tokens recommandés) |
| 3. Fichiers et scripts complémentaires | Seulement en cas de besoin ; seule la sortie des scripts entre dans le contexte |

Grâce à cela, tu peux charger des dizaines de skills dans l'agent sans qu'ils remplissent tous la fenêtre de contexte. Tant qu'il n'est pas déclenché, seuls le nom et la description de chaque skill restent « sur la table ». Dans l'exemple de la documentation, le skill PDF garde les instructions de remplissage de formulaires dans un fichier séparé, forms.md, et Claude ne lit ce fichier que lorsqu'il remplit vraiment un formulaire.

> **Le savais-tu ?** Anthropic a annoncé Agent Skills le 16 octobre 2025 et, le 18 décembre 2025, a publié le format comme standard ouvert à l'adresse agentskills.io. C'est pourquoi, en octobre 2026, tu retrouves la même structure SKILL.md dans la documentation d'autres outils comme GitHub Copilot et OpenAI Codex. La documentation de Copilot renvoie directement à la spécification agentskills.io pour vérifier les skills.

## Prompt, MCP, plugin : quelles différences ?

Ces notions sont souvent confondues, parce qu'elles servent toutes à « rendre l'agent meilleur ». La distinction du Centre d'aide de Claude peut se résumer ainsi :

- **Prompt ou instructions personnalisées :** Des consignes générales valables dans chaque conversation ou dans toutes. Un skill, lui, est propre à une tâche et n'intervient que lorsqu'il est pertinent.
- **Projets :** Des connaissances de fond fixes, toujours chargées dans les conversations d'un projet. Un skill est une procédure qu'on ouvre quand c'est nécessaire.
- **Connecteurs MCP (Model Context Protocol) :** Ils relient Claude à des services et sources de données externes. Ils apportent donc l'« accès ». Le skill est le « savoir-faire » qui explique comment utiliser cet accès. Le Centre d'aide dit que les deux sont souvent utilisés ensemble.
- **Plugins :** Du côté de Claude Code et de Cowork, un plugin est le paquet pour distribuer ensemble plusieurs éléments (skills, connecteurs, commandes, sous-agents). La documentation d'OpenAI fait une distinction semblable : le skill est le format d'écriture, le plugin le mode de distribution.

En bref, MCP donne une main à l'agent, le skill apprend à cette main un savoir-faire, et le plugin livre le tout dans une boîte.

## Où fonctionne-t-il ?

En octobre 2026, d'après la documentation de Claude, les skills sont utilisables dans les applications Claude (claude.ai), dans Claude Code et dans l'API Claude avec l'outil d'exécution de code. Le Centre d'aide indique que les skills sont proposés dans les formules Free, Pro, Max, Team et Enterprise et que la fonction d'exécution de code doit être activée.

Un détail important : les skills personnalisés ne se synchronisent pas entre les surfaces. Un skill que tu téléverses sur claude.ai n'est propre qu'à ton compte. Un skill téléversé sur l'API est partagé avec tout l'espace de travail. Dans Claude Code, il est conservé dans le dossier personnel (~/.claude/skills/) ou dans le dossier du projet (.claude/skills/).

Il y a aussi la dimension de la sécurité. Comme les skills peuvent exécuter du code, la documentation recommande de les traiter « comme l'installation d'un logiciel » et de ne les utiliser que de sources de confiance. Nous y consacrons un article à part, le dernier de la série.

Dans les prochains articles de cette section, nous verrons comment écrire ton propre skill pas à pas et nous examinerons, catégorie par catégorie, les skills qui existent réellement et qui sont utiles.

Quelle tâche expliques-tu à l'IA encore et encore, chaque jour, en te disant « si seulement je pouvais le lui apprendre une fois » ?
