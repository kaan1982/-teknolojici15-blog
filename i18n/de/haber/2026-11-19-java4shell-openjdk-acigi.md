---
title: "Java4Shell: Sicherheitslücke in OpenJDK erlaubt Codeausführung aus der Ferne ohne Anmeldung"
excerpt: "Ein Speicherüberlauf im Base64-Decoder von Java kann auf x86-Servern mit AVX-512-Unterstützung die Übernahme von Software wie Jira, Jenkins und Keycloak aus der Ferne ermöglichen."
hook: "Ein kaputter Base64-Text kann reichen"
fact: "9,2 / 10"
factLabel: "CVSS-4.0-Schweregrad laut Calif"
category: "News"
---
Das Sicherheitsunternehmen Calif hat am 17. November Details zu einer Lücke veröffentlicht, die die Java-Welt in Alarmbereitschaft versetzt. Der Fehler mit dem Namen "Java4Shell", geführt als CVE-2026-114938, steckt im Base64-Decoder von OpenJDK. Calif bewertet die Lücke auf der CVSS-4.0-Skala mit 9,2 Punkten, also als kritisch.

## Wo liegt das Problem?

Der Fehler befindet sich im mit AVX-512-Befehlen beschleunigten Base64-Dekodierpfad der virtuellen Maschine HotSpot. Eine gezielt manipulierte Base64-Eingabe führt dazu, dass 62 oder 63 Byte über das Ende eines Arrays hinaus geschrieben werden, bevor Java die Eingabe ablehnt. Für sich genommen lässt das das Programm meist nur abstürzen; laut Calif ist aber in Kombination mit dem Speicherverhalten der Zielanwendung eine Codeausführung aus der Ferne ohne Anmeldung möglich.

## Wer ist betroffen?

Betroffen sind OpenJDK 17.0.6 und neuer sowie alle Versionen ab 18 (einschließlich 21, 25 und 27), allerdings nur auf x86-64-Prozessoren mit AVX-512-VBMI-Unterstützung. Das umfasst neuere Intel-Serverchips sowie AMD Zen 4 und Nachfolger. Java 8 und 11, ARM64-Systeme (AWS Graviton, Apple Silicon) und Prozessoren ohne diesen Befehlssatz sind nicht betroffen.

Calif gibt an, Angriffe ohne Anmeldung auf Standardinstallationen von Jira, Confluence, Jenkins, Keycloak, Artifactory und PingFederate demonstriert zu haben. Endor Labs merkt an, dass diese Behauptungen noch nicht unabhängig bestätigt wurden und bis zum 17. November kein realer Angriff festgestellt wurde.

## Stand der Patches

Die Korrektur ist in OpenJDK 27.0.1.1 enthalten; Oracle nennt die Versionen 17.0.21.1 und 21.0.13.1 als korrigierte Builds. Andere Distributionen veröffentlichen Patches nach eigenem Zeitplan. Bis ein Patch verfügbar ist, wird als Übergangslösung empfohlen, die JVM mit Flags wie `-XX:UseAVX=2` zu starten und so die verwundbare Beschleunigung abzuschalten.

## Warum ist das wichtig?

Java läuft im Hintergrund unzähliger Server, von Banken bis zu Behörden. Die Ähnlichkeit im Namen ist gewollt: Wie bei Log4Shell im Jahr 2021 kann eine alltägliche Bibliotheksfunktion Millionen von Systemen gefährden. Dass der erste Computervirus eigentlich harmlos war, haben wir in [unserem Creeper-Artikel](/yazi/creeper-ilk-virus-zararsizdi/) erzählt.
