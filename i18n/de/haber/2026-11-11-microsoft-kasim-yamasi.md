---
title: "Microsoft schließt im November über 1.000 Lücken; Outlook-Lücke schon ausgenutzt"
excerpt: "Microsofts Sicherheitsupdate für November schließt 1.093 Schwachstellen, darunter eine Outlook-Lücke, die Angreifer bereits ausnutzen."
hook: "Tausend Lücken in einem Monat"
fact: "1.093"
factLabel: "Schwachstellen im November-Update"
category: "News"
---
Microsoft hat am 10. November das November-Paket seines Sicherheitsupdates veröffentlicht, das jeden zweiten Dienstag im Monat erscheint. Das Paket schließt 1.093 Sicherheitslücken in 287 Produkten und Komponenten. Zählt man die Lücken im Browser Edge mit, steigt die Zahl auf 1.235.

## Verteilung der Lücken

63 der Lücken gelten als "kritisch", 1.029 als "wichtig". Fast die Hälfte (535) erlaubt es Angreifern, ihre Rechte im System auszuweiten, 296 ermöglichen das Ausführen von Code aus der Ferne. Die meisten Lücken wurden in Word, Excel und SQL Server gefunden.

Solche Riesenpakete werden inzwischen zur Normalität: Das Oktober-Update war mit 1.411 Lücken sogar noch größer. Nach Einschätzung von Netizen geht ein Teil des Anstiegs darauf zurück, dass Microsoft bei der Suche nach Lücken KI-gestützte Werkzeuge einsetzt.

## Die bei Angriffen genutzte Outlook-Lücke

Der dringendste Punkt im Paket ist die Outlook-Lücke mit der Nummer CVE-2026-124194. Microsoft bestätigte, dass sie schon vor dem Erscheinen des Patches für Angriffe genutzt wurde. Der Angreifer bringt das Opfer dazu, eine speziell präparierte Datei zu öffnen. Outlook verbindet sich dann ohne Warnung vor externen Inhalten mit dem Server des Angreifers und gibt den Passwort-Hash des Nutzers (NTLMv2) preis. Mit dieser Information kann sich der Angreifer als der Nutzer ausgeben. Der Vorschaubereich ist kein Angriffsweg; die Datei muss geöffnet werden.

Die Lücke hat eine Bewertung von 6,5, Microsoft stuft sie als "mittel" ein. Betroffen sind Office LTSC 2021, Office LTSC 2024 und Microsoft 365 Apps. Wer die Angreifer und die Opfer sind, wurde nicht mitgeteilt. Laut Tenable hat sich der Forscher, der die Lücke fand, von Anthropics Modell Claude helfen lassen.

## Warum das wichtig ist

Alle, die Windows und Office nutzen, besonders Unternehmen, sollten das Update so schnell wie möglich installieren. Gleichzeitig bedeutet die Beschleunigung der Lückensuche durch KI, dass auch die Patches wachsen. Wenn Sie wissen möchten, woher der Begriff "Bug" beim Computer stammt, lesen Sie unseren Artikel über den [ersten Computer-Bug](/yazi/ilk-bilgisayar-bocegi-1947/).
