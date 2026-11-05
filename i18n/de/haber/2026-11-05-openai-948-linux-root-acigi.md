---
title: "OpenAIs Agenten fanden und nutzten 948 Root-Lücken im Linux-Kernel"
excerpt: "OpenAI gibt an, mit einem noch unveröffentlichten Cybermodell funktionierenden Exploit-Code für 948 einzigartige Lücken zur Rechteausweitung im Linux-Kernel erzeugt zu haben."
hook: "Rund 1.279 Dollar pro Lücke"
fact: "948"
factLabel: "Funktionierende Root-Exploits"
category: "News"
---
In einer am 4. November veröffentlichten Studie gab OpenAI bekannt, dass KI-Agenten im Linux-Kernel 948 einzigartige Lücken zur lokalen Rechteausweitung (LPE) gefunden und für jede davon einen funktionierenden Exploit geschrieben haben. Eine solche Lücke erlaubt es jemandem, der sich als normaler Nutzer anmeldet, "root" zu werden, also volle Administratorrechte zu erhalten.

## Wie lief das ab?

Wie Unite.AI berichtet, fand das Experiment Mitte Oktober auf einer weit verbreiteten Desktop-Linux-Distribution statt, in virtuellen Maschinen mit aktivierten Standard-Schutzmaßnahmen. Agenten, die mit einem noch unveröffentlichten Cybersicherheitsmodell arbeiteten, durchsuchten 2,8 Millionen Codezeilen, etwa 7 Prozent des Kernels. Innerhalb von 12 Stunden kamen 2.308 mögliche Funde zusammen; innerhalb von 30 Stunden wurden 1.724 davon in der virtuellen Umgebung reproduziert. Am Ende stand funktionierender Code für 948 einzigartige Root-Lücken.

Laut The Hacker News lagen die Gesamtkosten bei rund 1,21 Millionen Dollar an API-Guthaben, also etwa 1.279 Dollar pro Lücke. OpenAI geht davon aus, dass die Agenten mindestens 10 neue Angriffstechniken entdeckt haben, nannte aber aus Sicherheitsgründen keine Details. Bei einem ähnlichen Versuch im Juni waren nur 24 Lücken gefunden worden.

## Wie steht es um die Patches?

Die Agenten schrieben für jede Lücke auch einen Patch-Entwurf; diese sind aber noch nicht von den Linux-Entwicklern abgesegnet. Jeder Exploit und jeder Patch wird zuerst von menschlichen Forschern geprüft. Laut Unite.AI waren bei Abschluss des Scans bereits 61 Lücken geschlossen; OpenAI hat Hunderte kritische Lücken gemeldet und wird den Rest schrittweise weitergeben. Da das Modell nicht veröffentlicht ist, lassen sich die Ergebnisse vorerst nicht unabhängig überprüfen.

## Warum ist das wichtig?

Eine Root-Lücke zu finden, war früher wochenlange Expertenarbeit; heute kostet es ein paar tausend Dollar. Das ist eine große Chance für Verteidiger, doch dasselbe Werkzeug funktioniert auch in böswilligen Händen. Auch OpenAIs eigene Warnung geht in diese Richtung: Auf einem nicht aktualisierten System sollte ein gewöhnliches Konto in naher Zukunft praktisch wie ein Administratorkonto betrachtet werden. Wenn Sie wissen möchten, wie harmlos Computerviren einst anfingen, lesen Sie unseren Artikel [der erste Virus Creeper war eigentlich harmlos](/yazi/creeper-ilk-virus-zararsizdi/).
