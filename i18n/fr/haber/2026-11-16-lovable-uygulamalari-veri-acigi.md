---
title: "Des applis Lovable créées par IA ont laissé des passeports et 200 000 conversations à découvert"
excerpt: "La société allemande de sécurité Crissy Field a pu lire sans mot de passe les bases de données de 24 664 sites créés avec Lovable ; des données de passeport et plus de 200 000 conversations étaient exposées."
hook: "Ni connexion, ni mot de passe, données servies"
fact: "24 664"
factLabel: "Sites Lovable envoyant des données sans connexion"
category: "Actualité"
---
Un grave problème de sécurité a été mis au jour sur Lovable, la plateforme qui promet de créer des applications sans savoir coder, simplement en les décrivant à une IA. La société allemande de sécurité Crissy Field, dans une enquête menée avec le quotidien économique Handelsblatt, a révélé qu'elle pouvait lire les bases de données de milliers d'applications créées avec Lovable sans aucune connexion.

## Que disent les chiffres ?

Dans l'archive web Common Crawl, les chercheurs ont trouvé 159 041 projets Lovable en ligne entre décembre 2025 et septembre 2026. Parmi eux, 34 545 utilisaient le service de base de données Supabase, et 24 664 envoyaient des enregistrements de la base au chargement de la page, sans demander de connexion utilisateur. Des requêtes de lecture supplémentaires ont fait apparaître des adresses e-mail dans 10 560 tables sur 7 403 sites. L'entreprise précise qu'il ne s'agit pas d'un taux de fuite définitif et que certaines adresses peuvent être des coordonnées publiques ou des données de test.

Parmi les données exposées figuraient plus de 1 000 fiches de passeport d'un prestataire de services, plus de 80 000 profils et plus de 200 000 messages d'un forum allemand consacré au mode de vie, des dizaines de milliers de commandes d'événements et de restaurants avec des informations de paiement, ainsi que des codes de billets valides.

## D'où vient le problème ?

Il n'y a eu aucune attaque contre Lovable ou Supabase. La clé que Supabase envoie au navigateur est publique par conception ; la protection repose sur les règles de sécurité au niveau des lignes dans la base de données. Lorsque ces règles sont absentes ou trop laxistes, quiconque voit la clé peut lire les tables. Lovable affirme ne voir aucun défaut dans son IA, estime qu'il s'agit d'un problème de configuration bien connu dans tout le secteur et rappelle l'existence de son propre outil d'analyse de sécurité. On ignore si les données ont été exploitées à des fins malveillantes.

## Pourquoi est-ce important ?

L'IA a ouvert la création d'applications à tous, mais elle n'a pas apporté la sécurité automatiquement. Les utilisateurs qui ne codent pas devraient faire vérifier les droits d'accès par un spécialiste avant de collecter de vraies données clients. Vous pouvez découvrir l'un des premiers exemples de faille de sécurité de l'histoire de l'informatique dans notre article sur le [premier mot de passe informatique](/yazi/ilk-bilgisayar-sifresi-ctss/).
