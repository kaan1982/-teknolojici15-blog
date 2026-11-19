---
title: "Java4Shell : une faille d'exécution de code à distance sans authentification dans OpenJDK"
excerpt: "Un débordement de mémoire dans le décodeur Base64 de Java peut permettre de prendre le contrôle à distance de logiciels comme Jira, Jenkins et Keycloak sur des serveurs x86 compatibles AVX-512."
hook: "Un seul texte Base64 piégé peut suffire"
fact: "9,2 / 10"
factLabel: "Score de gravité CVSS 4.0 selon Calif"
category: "Actualité"
---
Le 17 novembre, l'entreprise de sécurité Calif a publié les détails d'une faille qui a mis le monde Java en alerte. Baptisé "Java4Shell" et suivi sous la référence CVE-2026-114938, le bug se trouve dans le décodeur Base64 d'OpenJDK. Calif lui attribue une note de 9,2 sur l'échelle CVSS 4.0, soit un niveau critique.

## Où se situe le problème ?

Le bug se trouve dans le chemin de décodage Base64 de la machine virtuelle HotSpot, accéléré par les instructions AVX-512. Une entrée Base64 spécialement corrompue provoque une écriture de 62 ou 63 octets au-delà de la fin d'un tableau avant que Java ne rejette l'entrée. À elle seule, cette erreur fait le plus souvent planter le programme ; mais selon Calif, combinée au comportement mémoire de l'application ciblée, elle permet d'exécuter du code à distance sans se connecter.

## Qui est concerné ?

Sont concernés OpenJDK 17.0.6 et les versions suivantes, ainsi que toutes les versions à partir de la 18 (dont 21, 25 et 27), mais uniquement sur les processeurs x86-64 compatibles AVX-512 VBMI. Cela inclut les puces serveur Intel récentes et les AMD Zen 4 et ultérieurs. Java 8 et 11, les systèmes ARM64 (AWS Graviton, Apple silicon) et les processeurs qui ne prennent pas en charge ce jeu d'instructions ne sont pas touchés.

Calif affirme avoir démontré des attaques sans authentification sur des installations par défaut de Jira, Confluence, Jenkins, Keycloak, Artifactory et PingFederate. Endor Labs souligne que ces affirmations n'ont pas encore été vérifiées de manière indépendante et qu'au 17 novembre, aucune attaque réelle n'avait été détectée.

## État des correctifs

Le correctif figure dans OpenJDK 27.0.1.1 ; Oracle indique les versions 17.0.21.1 et 21.0.13.1 comme builds corrigés. Les autres distributions publient leurs correctifs selon leur propre calendrier. En attendant, la solution de contournement recommandée consiste à lancer la JVM avec des options comme `-XX:UseAVX=2` pour désactiver l'accélération vulnérable.

## Pourquoi est-ce important ?

Java tourne en coulisses sur d'innombrables serveurs, des banques aux administrations. La ressemblance du nom est voulue : comme Log4Shell en 2021, une fonction de bibliothèque banale peut mettre en danger des millions de systèmes. Nous avons raconté dans [notre article sur Creeper](/yazi/creeper-ilk-virus-zararsizdi/) que le premier virus informatique était en réalité inoffensif.
