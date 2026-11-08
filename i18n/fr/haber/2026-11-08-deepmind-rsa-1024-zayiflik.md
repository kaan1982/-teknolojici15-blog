---
title: "Les agents IA de DeepMind trouvent deux failles dans l'ancien chiffrement RSA 1024 bits"
excerpt: "Google DeepMind annonce que des agents IA supervisés par des humains ont trouvé deux failles dans l'ancien RSA 1024 bits ; les clés de 2048 bits et plus ne sont pas concernées."
hook: "Deux avancées en cryptanalyse en semaines"
fact: "~1 600 fois"
factLabel: "Gain théorique, scénario à 32 octets"
category: "Actualité"
---
Le 6 novembre, Google DeepMind a annoncé que des agents d'intelligence artificielle avaient trouvé deux failles importantes dans les anciens systèmes de chiffrement RSA 1024 bits. Les agents ont travaillé sous supervision humaine. L'étude a été dirigée par Dj Dvijotham et Abhradeep Thakurta, de DeepMind ; l'équipe comprenait aussi les spécialistes de la cryptanalyse Nadia Heninger (UC San Diego et Inria) et Emmanuel Thomé (Inria).

## Première faille : le remplissage des signatures

Dans les signatures numériques, on ajoute au message un bloc de données fixe appelé « remplissage » (padding). Selon l'étude, si un attaquant peut contrôler environ la moitié du bloc signé ou davantage, le remplissage n'apporte presque aucune protection supplémentaire. Les agents l'ont testé dans un environnement isolé contre une clé de test de 1024 bits déjà cassée lors d'une étude universitaire. Le résultat a été reproduit avec 3,5 fois moins de temps processeur et avec moins d'un millième de la puissance nécessaire pour casser directement la clé.

Dans le scénario plus difficile, où l'attaquant ne contrôle qu'une empreinte de 32 octets, les agents ont trouvé un nouvel algorithme. Il apporterait une amélioration d'environ 1 600 fois par rapport à la meilleure méthode connue ; ce chiffre est un calcul théorique, pas une vitesse mesurée.

## Deuxième faille : la factorisation par lots

Comme les clés RSA ont le plus souvent la même taille, un gros précalcul peut être réparti sur de nombreuses clés. Avec l'algorithme trouvé par les agents, le coût moyen de la factorisation de chaque clé supplémentaire de 1024 bits baisse d'environ 30 fois par rapport aux méthodes par lots précédentes.

DeepMind souligne que ces résultats ne concernent pas le chiffrement actuel. Les banques, les messageries et les mises à jour logicielles utilisent presque partout des clés de 2048 bits ou plus. Pushmeet Kohli, vice-président chargé de la science de l'entreprise, a déclaré que la cryptanalyse assistée par l'IA pourrait aider à tester les systèmes de demain.

## Pourquoi c'est important ?

Les progrès en cryptanalyse prennent généralement des années. Que des agents IA ramènent ce délai à quelques semaines montre que les systèmes qui utilisent encore d'anciennes clés doivent accélérer leur migration. Nous racontons la brève histoire des mots de passe dans notre article sur le [premier mot de passe informatique](/yazi/ilk-bilgisayar-sifresi-ctss/).
