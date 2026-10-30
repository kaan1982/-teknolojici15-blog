---
title: "Skills de marketing, de vidéo et de contenu : la boîte à outils du créateur"
excerpt: "Le dépôt marketingskills de Corey Haines, le plugin marketing d'Anthropic, les skills Remotion et HeyGen HyperFrames. De vraies sélections pour le contenu et la vidéo."
hook: "Code la vidéo, écris le texte avec un skill"
fact: "52 SKILLS"
factLabel: "Le nombre de skills du dépôt marketingskills"
category: "Intelligence artificielle"
---
Derrière ce blog aussi, on produit chaque jour de courtes vidéos, des couvertures et des textes. Cette catégorie est donc un peu personnelle pour nous : les skills qui produisent du marketing, du contenu et de la vidéo. C'est aussi le domaine où les skills communautaires se multiplient le plus vite. Nous n'avons listé que les exemples dont nous avons ouvert le dépôt et vérifié le contenu. Tous les chiffres datent de fin octobre 2026.

## marketingskills : une bibliothèque marketing de 52 skills

Le dépôt coreyhaines31/marketingskills de Corey Haines, le nom derrière l'agence d'optimisation de conversion Conversion Factory, sous licence MIT, est l'une des collections communautaires les plus complètes de ce domaine. Selon le README, il est préparé pour les marketeurs techniques et les fondateurs ; il se concentre sur l'optimisation de la conversion, la rédaction publicitaire, le SEO, l'analytique et l'ingénierie de la croissance. Il indique fonctionner avec Claude Code, OpenAI Codex, Cursor et les autres agents qui prennent en charge le standard Agent Skills.

Le dossier skills du dépôt contient 52 skills. Quelques exemples :

- **copywriting :** Pour écrire ou améliorer le texte de toute page marketing : page d'accueil, page de destination, page de tarifs.
- **seo-audit :** Pour auditer et diagnostiquer les problèmes de SEO d'un site.
- **ai-seo :** Pour optimiser le contenu pour les moteurs de recherche IA, c'est-à-dire pour être cité comme source dans les réponses des grands modèles de langage.
- **emails et cold-email :** Pour les séquences d'e-mails, les flux automatisés et les campagnes d'e-mails à froid B2B.
- **social :** Pour créer et planifier du contenu pour LinkedIn, X, Instagram, TikTok et Facebook.

Pour l'installation, le README recommande la commande npx skills add coreyhaines31/marketingskills. On peut aussi choisir les skills un par un.

## Le plugin marketing d'Anthropic

Le dépôt anthropics/knowledge-work-plugins d'Anthropic rassemble des plugins préparés par métier. Ils sont faits pour Claude Cowork et compatibles avec Claude Code. Chaque plugin regroupe dans un seul paquet les skills, les connecteurs, les commandes slash et les sous-agents pour ce métier.

Les skills du plugin marketing sont les suivants : brand-review (il audite un brouillon selon la voix de la marque et le guide de style et propose des corrections avant/après), campaign-plan (il produit un résumé de campagne avec objectif, audience, message, stratégie de canaux et calendrier de contenu), content-creation, draft-content, email-sequence, competitive-brief, performance-report et seo-audit. Le README liste la possibilité de connecter ce plugin à des outils comme Slack, Canva, Figma, HubSpot et Ahrefs. Ici, le skill apporte donc la « méthode » et le connecteur « l'accès ».

> **Le savais-tu ?** Les vidéos peuvent aujourd'hui être produites non seulement par glisser-déposer sur une timeline, mais aussi par le code, et c'est exactement là que les skills entrent en jeu. L'équipe Remotion publie son propre ensemble de skills officiels pour son framework vidéo basé sur React. HeyGen propose HyperFrames, fondé sur l'idée « écris du HTML, génère de la vidéo », avec des skills pour les agents.

## Pour la vidéo : Remotion et HyperFrames

| Paquet | Source | Ce qu'il propose |
|---|---|---|
| remotion-dev/skills | L'équipe Remotion (officiel) | 12 skills : création de vidéo, règles d'animation, sous-titres, rendu, aperçu |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Des skills et des blocs prêts à l'emploi pour le framework qui transforme le HTML en vidéo |

**Remotion :** Selon le README, Remotion tient une liste d'Agent Skills qui définit les meilleures pratiques pour travailler dans les projets Remotion. Dans l'ensemble se trouvent des skills comme remotion-create qui crée une nouvelle vidéo, remotion-markup qui porte la connaissance de l'animation et de la mise en page, remotion-captions pour la transcription et l'animation des sous-titres, remotion-render pour l'export, et remotion-best-practices qui oriente vers tous les autres. L'installation se fait avec npx skills add remotion-dev/skills.

**HyperFrames :** Le dépôt de HeyGen se présente ainsi : « écris du HTML, génère de la vidéo, fait pour les agents ». Selon le README, l'ensemble de base se compose des skills hyperframes (créer et modifier des vidéos), hyperframes-cli (squelette de projet, aperçu, rendu), hyperframes-registry (environ 450 blocs prêts à l'emploi de transitions, titres, sous-titres et graphiques) et media-use (tâches médias comme musique, effets sonores, images, voix off). Il y a au total 7 skills publiés.

Un détail intéressant : la description du skill vidéo du dépôt de Corey Haines liste elle aussi des noms comme Remotion, HyperFrames et HeyGen comme mots déclencheurs. Le skill de marketing a donc été écrit pour faire office de pont vers les skills de vidéo.

## À quoi faire attention au moment de choisir ?

La plupart des skills de ce domaine viennent de la communauté ou d'entreprises et sont mis à jour très vite. Avant d'installer un paquet, ces trois questions te facilitent la tâche : à qui est le dépôt, est-il mis à jour activement ? Y a-t-il dans le SKILL.md une instruction qui se connecte à des adresses externes ou demande des identifiants ? Peux-tu choisir et installer seulement les quelques skills dont tu as vraiment besoin ? La plupart des outils d'installation permettent de choisir un skill à la fois plutôt que de « tout installer », ce qui réduit à la fois le contexte et le risque.

Dans la production de contenu, quel est pour toi le plus gros voleur de temps : écrire les textes, préparer les visuels ou monter la vidéo ?
