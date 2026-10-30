---
title: "Skills pour les documents : apprendre Word, Excel, PowerPoint et PDF à l'agent"
excerpt: "Que font les skills docx, xlsx, pptx et pdf d'Anthropic, et où fonctionnent-ils ? Les skills officiels et auxiliaires réellement utiles pour produire des documents."
hook: "Rapport, tableau, présentation : tout est un skill"
fact: "4 DOCUMENTS"
factLabel: "Le nombre de skills de documents fournis prêts à l'emploi"
category: "Intelligence artificielle"
---
Dire à une IA « prépare-moi un rapport » est facile. Le difficile, c'est que ce rapport arrive sous la forme d'un fichier Word ou Excel qui s'ouvre vraiment, dont la mise en forme n'est pas cassée et dont les formules fonctionnent. La première catégorie de skills, et peut-être la plus utilisée, est exactement celle-là : les documents bureautiques. Dans cet article, nous ne traitons que les skills dont nous avons vérifié l'existence.

## Quatre piliers : docx, xlsx, pptx, pdf

D'après la documentation de Claude, Anthropic propose quatre skills de documents prêts à l'emploi (pre-built). Ils fonctionnent en arrière-plan de la fonction de création de fichiers de Claude, et Anthropic publie leur code source dans le dépôt GitHub anthropics/skills.

| Skill | Que fait-il ? (d'après les descriptions officielles) |
|---|---|
| docx | Crée, lit et modifie des documents Word. Mise en forme et modèles inclus |
| xlsx | Ouvre et modifie des feuilles de calcul, ajoute des formules et des graphiques, nettoie des données en désordre |
| pptx | Crée des présentations, modifie des diapositives, lit et analyse le contenu d'un .pptx |
| pdf | Extrait du texte et des tableaux, fusionne et découpe des PDF, remplit des formulaires, ajoute des filigranes |

Les descriptions dans le dépôt sont rédigées de manière assez « insistante ». Par exemple, la description du skill pptx dit de l'utiliser dès qu'un fichier .pptx intervient « de quelque manière que ce soit », en entrée ou en sortie. C'est un exemple officiel de la règle « la description déclenche » expliquée dans l'article précédent.

## Où peux-tu les utiliser ?

En octobre 2026, d'après la documentation de Claude, ces quatre skills sont actifs d'eux-mêmes lors de la création de documents sur claude.ai, et peuvent aussi être appelés comme skills prêts à l'emploi dans l'API Claude. Dans Claude Code, en revanche, les skills de documents prêts à l'emploi ne sont pas intégrés. Mais le dépôt anthropics/skills peut être ajouté à Claude Code comme place de marché de plugins, et le paquet document-skills peut être installé. Selon les instructions du dépôt, on ajoute d'abord la place de marché avec la commande /plugin marketplace add anthropics/skills, puis on installe document-skills@anthropic-agent-skills.

Il y a une distinction sur la licence. De nombreux skills du dépôt sont open source sous licence Apache 2.0. Mais les quatre skills de documents sont partagés comme « non open source, à code source accessible » (source-available). Tu peux donc examiner le code et apprendre, mais tu dois lire le fichier de licence avant de les redistribuer librement dans ton propre produit.

> **Le savais-tu ?** Le skill pdf est un exemple de manuel pour le chargement progressif. Selon l'article d'ingénierie d'Anthropic, les instructions de remplissage de formulaires ont été sorties du SKILL.md principal pour être déplacées dans un fichier séparé, forms.md. Claude ne lit ce fichier que lorsqu'il remplit réellement un formulaire. Aujourd'hui, dans le dépôt, le dossier pdf contient à la fois forms.md, reference.md et un dossier scripts.

## Les auxiliaires à côté du document

La production de documents ne s'arrête pas au format de fichier. Le dépôt anthropics/skills contient d'autres exemples officiels centrés sur le contenu :

- **doc-coauthoring :** Propose un flux de travail pas à pas pour rédiger ensemble des textes structurés comme une spécification technique, une proposition ou un document de décision. Il fait passer par des étapes de transfert de contexte, de correction itérative et de vérification.
- **internal-comms :** Rassemble des ressources pour aider à rédiger des textes de communication interne (rapport d'état, point de direction, bulletin d'entreprise, FAQ) dans les formats préférés de l'entreprise. Le dossier contient aussi des exemples de textes.
- **brand-guidelines :** Applique à un résultat les couleurs de marque et la typographie officielles d'Anthropic. Sa vraie valeur est de montrer comment construire un équivalent pour ta propre marque.
- **theme-factory :** Contient 10 thèmes de couleurs et de polices prêts à l'emploi, applicables à des diapositives, documents, rapports ou pages HTML, et peut aussi produire à la demande un nouveau thème.

Le Centre d'aide mentionne aussi des skills préparés par des partenaires comme Notion, Figma et Atlassian pour fonctionner avec leurs propres connecteurs MCP. Ils servent quand on travaille avec les outils où les documents sont produits (par exemple des pages Notion).

## Comment s'en servir dans la vraie vie ?

L'usage le plus efficace consiste à combiner les skills de documents prêts à l'emploi avec ton propre petit skill. Par exemple, le skill xlsx sait comment produire un Excel correct, mais il ne sait pas quelles colonnes doit contenir le tableau mensuel des ventes de ton entreprise. Si tu écris un court skill qui l'explique, les deux skills travaillent ensemble et donnent un fichier à la fois bien formaté et conforme à ton standard.

Il y a deux notes à ne pas oublier. La première : le dépôt anthropics/skills écrit clairement que ces skills sont « à des fins de démonstration et de formation » et que le comportement propre de Claude peut différer des implémentations qui s'y trouvent. La seconde : les skills de documents ont besoin d'un environnement d'exécution de code. Selon le Centre d'aide, la fonction d'exécution de code doit être activée pour que les skills fonctionnent.

Dans le prochain article, nous passons du côté de l'écran : les skills qui produisent du design, du front-end et des sorties web.

Quel type de document te fait perdre le plus de temps à préparer : le tableau, la présentation ou le rapport ?
