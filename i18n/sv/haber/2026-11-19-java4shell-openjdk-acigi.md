---
title: "Java4Shell: sårbarhet i OpenJDK tillåter fjärrkörning av kod utan autentisering"
excerpt: "Ett minnesöverskridande fel i Javas Base64-avkodare kan på x86-servrar med AVX-512 öppna för att ta över program som Jira, Jenkins och Keycloak på distans."
hook: "En enda trasig Base64-text kan räcka"
fact: "9,2 / 10"
factLabel: "CVSS 4.0-poäng enligt Calif"
category: "Nyheter"
---
Säkerhetsföretaget Calif publicerade den 17 november detaljerna om en sårbarhet som har fått Javavärlden att slå larm. Felet, som kallas "Java4Shell" och spåras som CVE-2026-114938, finns i OpenJDK:s Base64-avkodare. Calif ger sårbarheten 9,2 poäng på CVSS 4.0-skalan, vilket betyder kritisk nivå.

## Var sitter problemet?

Felet finns i den Base64-avkodning i den virtuella maskinen HotSpot som accelereras med AVX-512-instruktioner. Specialmanipulerad Base64-indata gör att 62 eller 63 byte skrivs bortom slutet av en array innan Java hinner avvisa indatan. Det får i sig oftast bara programmet att krascha; men Calif menar att det i kombination med målapplikationens minnesbeteende går att köra kod på distans utan att logga in.

## Vilka drabbas?

Drabbade är OpenJDK 17.0.6 och senare samt alla versioner från 18 och framåt (inklusive 21, 25 och 27), men bara på x86-64-processorer med stöd för AVX-512 VBMI. Det omfattar nya Intel-serverchip samt AMD Zen 4 och senare. Java 8 och 11, ARM64-system (AWS Graviton, Apple silicon) och processorer som saknar stöd för den här instruktionsuppsättningen påverkas inte.

Calif säger sig ha demonstrerat attacker utan inloggning mot standardinstallationer av Jira, Confluence, Jenkins, Keycloak, Artifactory och PingFederate. Endor Labs påpekar att dessa påståenden ännu inte har bekräftats oberoende och att ingen verklig attack hade upptäckts per den 17 november.

## Läget för patchar

Rättelsen finns i OpenJDK 27.0.1.1; Oracle anger versionerna 17.0.21.1 och 21.0.13.1 som rättade byggen. Andra distributioner släpper patchar enligt sina egna tidsplaner. Tills patchen finns rekommenderas som tillfällig lösning att starta JVM:en med flaggor som `-XX:UseAVX=2` för att stänga av den sårbara accelerationen.

## Varför är det viktigt?

Java körs i bakgrunden på otaliga servrar, från banker till myndigheter. Likheten i namnet är avsiktlig: precis som Log4Shell 2021 kan en vardaglig biblioteksfunktion sätta miljontals system i fara. I [vår artikel om Creeper](/yazi/creeper-ilk-virus-zararsizdi/) berättade vi att det första datorviruset faktiskt var ofarligt.
