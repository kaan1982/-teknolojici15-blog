---
title: "Java4Shell: lek in OpenJDK maakt code-uitvoering op afstand zonder authenticatie mogelijk"
excerpt: "Een geheugenoverloop in de Base64-decoder van Java kan op x86-servers met AVX-512 de deur openen naar overname op afstand van software als Jira, Jenkins en Keycloak."
hook: "Eén kapotte Base64-tekst kan genoeg zijn"
fact: "9,2 / 10"
factLabel: "CVSS 4.0-score volgens Calif"
category: "Nieuws"
---
Beveiligingsbedrijf Calif publiceerde op 17 november de details van een lek dat de Java-wereld in rep en roer bracht. De fout, "Java4Shell" genoemd en gevolgd als CVE-2026-114938, zit in de Base64-decoder van OpenJDK. Calif geeft het lek 9,2 punten op de CVSS 4.0-schaal, wat kritiek niveau betekent.

## Waar zit het probleem?

De fout zit in het Base64-decodeerpad van de HotSpot-virtuele machine dat met AVX-512-instructies is versneld. Speciaal gemanipuleerde Base64-invoer zorgt ervoor dat er 62 of 63 bytes voorbij het einde van een array worden geschreven, voordat Java de invoer afwijst. Op zichzelf laat dit het programma meestal alleen crashen; maar volgens Calif is het in combinatie met het geheugengedrag van de doelapplicatie mogelijk om zonder in te loggen op afstand code uit te voeren.

## Wie wordt getroffen?

Getroffen zijn OpenJDK 17.0.6 en later en alle versies vanaf 18 (inclusief 21, 25 en 27), maar alleen op x86-64-processors met ondersteuning voor AVX-512 VBMI. Dat omvat nieuwe Intel-serverchips en AMD Zen 4 en later. Java 8 en 11, ARM64-systemen (AWS Graviton, Apple silicon) en processors die deze instructieset niet ondersteunen, worden niet getroffen.

Calif zegt aanvallen zonder inloggen te hebben gedemonstreerd op standaardinstallaties van Jira, Confluence, Jenkins, Keycloak, Artifactory en PingFederate. Endor Labs merkt op dat deze claims nog niet onafhankelijk zijn bevestigd en dat er per 17 november geen echte aanval is waargenomen.

## Stand van de patches

De oplossing zit in OpenJDK 27.0.1.1; Oracle noemt de versies 17.0.21.1 en 21.0.13.1 als gecorrigeerde builds. Andere distributies brengen patches uit volgens hun eigen planning. Tot de patch er is, wordt als tijdelijke oplossing aangeraden de JVM te starten met vlaggen als `-XX:UseAVX=2` om de kwetsbare versnelling uit te schakelen.

## Waarom is dit belangrijk?

Java draait op de achtergrond van talloze servers, van banken tot overheidsinstellingen. De gelijkenis in de naam is bewust: net als Log4Shell in 2021 kan een alledaagse bibliotheekfunctie miljoenen systemen in gevaar brengen. In [ons artikel over Creeper](/yazi/creeper-ilk-virus-zararsizdi/) vertelden we dat het eerste computervirus eigenlijk onschuldig was.
