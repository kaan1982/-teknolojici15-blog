---
title: "Sécurité des skills : tout ce qu'il faut lire avant d'installer"
excerpt: "Les skills peuvent exécuter du code et récupérer des instructions de sources externes. Un guide sur les sources de confiance, la revue du SKILL.md et des scripts, le moindre privilège et les clés secrètes."
hook: "Installer un skill, c'est installer un logiciel"
fact: "13,4 %"
factLabel: "Part de skills avec une faille critique (Snyk, 2026)"
category: "Intelligence artificielle"
---
Ce qui rend les skills si puissants est aussi ce qui les rend risqués : un skill ne porte pas seulement du texte, mais aussi du code exécutable. Quand l'agent charge ce skill, il suit les instructions qui s'y trouvent comme si c'étaient les siennes et peut exécuter ses scripts. C'est pourquoi la recommandation de la documentation de Claude peut se résumer en une phrase : considère l'installation d'un skill comme l'installation d'un logiciel.

## Que disent les sources officielles ?

La section sécurité de la documentation de Claude est assez directe. Elle recommande de n'utiliser les skills que de sources de confiance, c'est-à-dire ceux que tu as écrits toi-même ou obtenus auprès d'Anthropic. Si tu dois utiliser un skill d'une source inconnue, elle demande d'être « extrêmement prudent » et de l'auditer de bout en bout avant de l'utiliser.

L'article d'ingénierie d'Anthropic va dans le même sens : pour les skills venant de sources moins fiables, il recommande d'examiner les fichiers empaquetés, en particulier les dépendances de code et les scripts, ainsi que de vérifier les instructions qui demandent de se connecter à des réseaux externes. La documentation souligne aussi un risque en particulier : les skills qui récupèrent des données à des adresses externes sont dangereux, car le contenu récupéré peut contenir des instructions malveillantes.

## Que se passe-t-il sur le terrain ?

Ces avertissements ne sont pas théoriques. Dans son étude « ToxicSkills » publiée le 5 février 2026, l'entreprise de sécurité Snyk a analysé 3 984 skills provenant de ClawHub et de skills.sh. Les résultats :

| Constat | Nombre |
|---|---|
| Skills analysés | 3 984 |
| Avec au moins un problème de sécurité | 1 467 (36,82 %) |
| Avec au moins un problème critique | 534 (13,4 %) |
| Charge malveillante confirmée | 76 |

Selon le rapport, les données de skills.sh ne couvrent que les 100 premiers skills sélectionnés de ce site, alors que les chiffres complets du marché concernent ClawHub. Parmi les types d'attaques observés, il y a des instructions d'installation qui poussent l'utilisateur à télécharger et exécuter un logiciel non fiable, des commandes dissimulées (camouflées en Base64 ou en Unicode) qui envoient des identifiants à l'attaquant, des tentatives de désactivation des contrôles de sécurité et d'installation de portes dérobées. Dans 91 % des skills malveillants confirmés, l'injection de prompt (prompt injection) a été utilisée.

> **Le savais-tu ?** Selon le Centre d'aide de Claude, les organisations Enterprise peuvent activer l'analyse des skills, qui vérifie la présence de contenu malveillant dans les skills et plugins téléversés. Mais c'est un filet de sécurité, pas un substitut à la lecture. La meilleure façon de comprendre ce que fait un skill est d'ouvrir et de lire toi-même son SKILL.md et ses scripts avant de l'installer.

## Liste de contrôle avant d'installer

Une liste pratique tirée des recommandations de la documentation et des constats du terrain :

1. **Vérifie la source.** À qui est le dépôt ? Une entreprise officielle ou un développeur reconnu, ou une copie qui ressemble beaucoup à un paquet connu (typosquatting) ?
2. **Lis le SKILL.md de bout en bout.** Des formules comme « télécharge et exécute ceci d'abord », « désactive le réglage de sécurité », « envoie à cette adresse » sont des signaux d'alarme.
3. **Examine le dossier scripts/.** S'il y a des lignes que tu ne peux pas lire, dissimulées ou encodées en Base64, n'installe pas.
4. **Vérifie les liens externes.** Si le skill récupère des instructions ou des données à une adresse web, n'oublie pas que ce contenu peut changer à tout moment.
5. **Installe ce dont tu as besoin.** Choisir les skills un par un plutôt que « tout installer » réduit à la fois le contexte et la surface d'attaque.

## Moindre privilège et clés secrètes

L'endroit où le skill s'exécute compte aussi. Selon la documentation de Claude, dans l'environnement de l'API Claude, les skills n'ont pas d'accès réseau et ne peuvent pas installer de paquets à l'exécution. Sur claude.ai, l'accès réseau peut être complet, partiel ou désactivé selon les réglages de l'utilisateur et de l'administrateur. Dans Claude Code, en revanche, les skills ont autant d'accès réseau que n'importe quel programme de ton ordinateur. Un skill que tu installes sur un agent local fonctionne donc avec tes droits.

Le principe du moindre privilège est donc essentiel. Dans Claude Code, le champ allowed-tools dans le frontmatter d'un skill permet d'utiliser certains outils sans demander l'autorisation quand ce skill est appelé. Selon la documentation, cette autorisation est réinitialisée à ton prochain message. Si tu vois pourtant de larges permissions dans un skill écrit par quelqu'un d'autre, c'est une bonne habitude de ne pas l'installer sans les approuver en connaissance de cause.

Pour les clés secrètes, la règle est simple : n'écris jamais de clés d'API, de mots de passe ni de jetons d'accès dans le SKILL.md ou dans le dossier du skill. Quand tu partages le skill ou l'envoies dans un dépôt, tout ce qui se trouve dans ce dossier part avec. Garde les clés dans des variables d'environnement ou dans la méthode de stockage sécurisé des identifiants de l'outil que tu utilises, et explique seulement au skill comment y accéder.

En octobre 2026, l'écosystème des skills grandit très vite, et cette croissance rappelle les problèmes de sécurité des premières années des boutiques d'applications. La bonne nouvelle : lire un skill est bien plus facile que lire le code source d'une application, car l'essentiel est du texte brut.

Toi, avant d'installer un skill, l'ouvres-tu pour le lire, ou te fies-tu au nombre d'étoiles et de téléchargements ?
