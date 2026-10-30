---
title: "Écris ton propre skill : une première compétence pas à pas avec SKILL.md"
excerpt: "Un dossier, un SKILL.md et une description bien écrite. Les étapes pour écrire ton propre Agent Skill, l'importance du champ description et la méthode de test."
hook: "C'est la description qui déclenche le skill"
fact: "1 024"
factLabel: "Nombre maximal de caractères du champ description"
category: "Intelligence artificielle"
---
Pour écrire un skill, tu n'as pas besoin d'être programmeur. Dans sa forme la plus simple, un dossier contenant un seul fichier texte suffit. Mais la différence entre un skill qui fonctionne bien et un skill qui ne se déclenche jamais se cache souvent dans une seule phrase : la description. Dans cet article, nous écrivons de zéro un skill petit mais réel.

## Étape 1 : crée le dossier et le SKILL.md

Selon la spécification Agent Skills, un skill est un dossier contenant au moins un fichier SKILL.md. Tout au début du fichier se trouve un en-tête YAML (frontmatter), et deux champs sont obligatoires :

- **name :** 64 caractères au maximum. Uniquement des minuscules, des chiffres et des tirets. Il ne peut ni commencer ni finir par un tiret, ne peut pas contenir deux tirets consécutifs et doit être identique au nom du dossier. La documentation de Claude précise aussi que les mots « anthropic » et « claude » ne peuvent pas être utilisés dans le nom.
- **description :** Ne peut pas être vide, 1 024 caractères au maximum. Elle doit dire ce que fait le skill et quand l'utiliser.

Il existe aussi des champs facultatifs (license, compatibility, metadata et l'expérimental allowed-tools), mais la plupart des skills n'en ont pas besoin.

## Étape 2 : écris la description avec soin

Pourquoi la description est-elle si importante ? Parce qu'au démarrage, l'agent ne lit que le nom et la description de chaque skill. Selon la formule d'agentskills.io, « tout le poids » du déclenchement repose sur la description. Si la description n'explique pas quand le travail sera utile, l'agent n'ira pas vers ce skill.

Les recommandations des sources peuvent se résumer ainsi :

- Écris à la fois **ce qu'il fait** et **quand l'utiliser**.
- La documentation de Claude recommande de rédiger la description à la **troisième personne**, puisqu'elle est ajoutée à l'invite système (« Traite les fichiers Excel », et non « Je peux t'aider »).
- agentskills.io recommande de lister aussi explicitement les cas où l'utilisateur ne nomme pas le domaine par son nom.
- Reste bref : quelques phrases, un court paragraphe au plus. Claude Code coupe la description à 1 536 caractères dans la liste ; le cas d'usage le plus important doit donc venir en premier.

## Étape 3 : garde le corps court, le script malin

Prenons comme exemple un skill conforme à la propre règle d'écriture de ce blog : qu'il ne reste dans le texte ni tiret long (em dash) ni tiret demi-cadratin (en dash). Que la structure du dossier soit la suivante :

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Et le fichier SKILL.md n'est que ceci :

```markdown
---
name: tire-denetimi
description: Trouve l'usage du tiret long (U+2014) et du tiret demi-cadratin (U+2013) dans des articles de blog et propose des corrections. À utiliser quand l'utilisateur prépare un article Markdown pour la publication, dit « vérifie les tirets » ou « est-ce conforme aux règles d'écriture », ou demande, même sans le nommer, une dernière vérification avant publication.
---

# Contrôle des tirets

1. Lance la commande `python scripts/tire_bul.py <fichier.md>`.
2. Pour chaque ligne de la sortie, propose de remplacer le tiret par un point, une virgule, deux-points ou des parenthèses.
3. Ne change pas le sens. Demande à l'utilisateur pour les lignes dont tu n'es pas sûr.
4. À la fin, indique en une phrase combien de lignes tu as corrigées.
```

La documentation de Claude voit la fenêtre de contexte comme une « ressource partagée » et recommande de n'ajouter que l'information que le modèle ne connaît pas déjà. Le corps doit rester sous 500 lignes. Les longs textes de référence doivent être déplacés dans des fichiers séparés, avec un lien à un seul niveau depuis SKILL.md.

Pour les scripts, la règle est claire aussi : « résous, ne renvoie pas la balle ». Autrement dit, le script doit gérer lui-même les cas d'erreur, et non être écrit dans la logique « qu'il plante, Claude trouvera un moyen ». Quand le script s'exécute, ce n'est pas le code lui-même mais seulement sa sortie qui entre dans le contexte. Cela rend le script plus fiable que des instructions pour les tâches répétitives et sans tolérance à l'erreur.

> **Le savais-tu ?** Dans Claude Code, les anciennes « commandes slash personnalisées » ont fusionné avec les skills. Un fichier .claude/commands/deploy.md et un fichier .claude/skills/deploy/SKILL.md créent la même commande /deploy. Si tu ne veux pas qu'un skill se déclenche automatiquement, tu peux ajouter disable-model-invocation: true au frontmatter et ne l'appeler qu'à la main.

## Étape 4 : teste, puis teste encore

Le guide des bonnes pratiques de Claude recommande de préparer des scénarios d'évaluation avant d'écrire de longs documents, et sa liste de contrôle avant publication comprend au moins trois évaluations et un test séparé sur les modèles Haiku, Sonnet et Opus. La raison est simple : une instruction qui marche parfaitement sur Opus peut demander plus de détails pour Haiku.

Pour tester le déclenchement, la suggestion d'agentskills.io est concrète : prépare environ 20 messages d'utilisateur d'exemple. 8 à 10 d'entre eux doivent déclencher le skill, et 8 à 10 ne doivent pas le déclencher. Les exemples négatifs les plus précieux sont les « quasi-ratés », c'est-à-dire des messages qui partagent les mêmes mots mais demandent un autre travail. Comme le comportement du modèle n'est pas identique à chaque fois, il est recommandé de lancer chaque message plusieurs fois (3 pour commencer) et de regarder le taux de déclenchement.

| Mauvaise description | Bonne description |
|---|---|
| « Aide pour les PDF. » | Dit ce qu'il fait et quand l'utiliser |
| Uniquement des détails techniques | Décrit l'intention de l'utilisateur |
| Couvre tout | Précise aussi ce qu'il ne fait pas |

L'installation est simple aussi : dans Claude Code, il te suffit de placer le dossier sous ~/.claude/skills/ (personnel) ou dans le dossier .claude/skills/ du projet. Claude Code surveille ces dossiers et détecte les changements dans la même session, sans redémarrage. Sur claude.ai, tu peux charger le skill en zip depuis les paramètres.

Quelle tâche répétitive ton premier skill automatiserait-il ?
