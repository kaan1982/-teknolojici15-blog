---
title: "KI-Agenten haben AWS' kostenlosen lokalen Cloud-Emulator von Anfang bis Ende geschrieben"
excerpt: "AWS Emulator bildet mehr als 200 AWS-Dienste auf dem eigenen Rechner nach; laut Amazon hat kein Mensch eine einzige Zeile des Codes geschrieben oder geprüft."
hook: "Agenten schrieben und reparierten ihn"
fact: "200+"
factLabel: "Nachgebildete AWS-Dienste"
category: "News"
---
Amazon Web Services hat am 11. November ein kostenloses Entwicklerwerkzeug namens AWS Emulator veröffentlicht. Es bildet mehr als 200 Dienste der AWS-Cloud auf dem eigenen Rechner des Entwicklers nach. So lässt sich Software testen, ohne ein AWS-Konto zu eröffnen oder eine Cloud-Rechnung zu bezahlen. Das eigentlich Bemerkenswerte ist aber, wer das Werkzeug geschrieben hat.

## Keine Menschen, nur Agenten

Laut Matt Goldberg, Senior Principal Engineer bei AWS, haben autonome KI-Agenten den gesamten Emulator geschrieben; sein Team hat keine einzige Zeile des Codes geschrieben oder geprüft. Das Projekt begann als Wochenendexperiment, das Goldberg mit Amazons Programmierwerkzeug Kiro durchführte: Die erste Nachbildung eines einfachen Nachrichtenwarteschlangen-Dienstes stand nach etwa 15 Minuten.

Heute läuft die Arbeit über drei Agententeams. Das erste Team schreibt Tests und prüft sie gegen das echte AWS. Das zweite führt dieselben Tests auf dem Emulator aus und meldet Abweichungen als Fehlerberichte. Im dritten Team behebt jeder Agent genau einen Fehler. Änderungen werden erst zusammengeführt, wenn sie Prüfungen zu Build, Code-Stil, Sicherheit und Abwärtskompatibilität bestehen. Laut Goldberg schließen Hunderte Agenten täglich Tausende Fehler. Die Aufgabe der Menschen ist es, die Tests, die Regeln und diese Hürden zu entwerfen.

## Seine Grenzen

Der Code ist in Rust geschrieben und unter der gemeinfreien CC0-Lizenz veröffentlicht. Amazon sagt, das Werkzeug solle nicht für Live-Systeme oder Sicherheitstests verwendet werden: Es bewertet Berechtigungsrichtlinien nicht wie das echte AWS und bildet Drosselung, Ausfälle und regionale Unterschiede noch nicht nach. Nicht unterstützte Operationen liefern einen HTTP-501-Fehler, und die Erfassung von Nutzungsdaten ist standardmäßig aktiviert.

## Warum ist das wichtig?

Das ist eines der seltenen Beispiele, in denen ein großes Unternehmen offen sagt, ein breit genutztes Produkt ohne menschliches Zutun hergestellt zu haben. Der Schwerpunkt der Softwareentwicklung könnte sich vom Schreiben von Code hin zum Aufbau von Tests verschieben, die Korrektheit messen. Die Geschichte des allerersten "Bugs" in der Software erzählt unser Artikel über [den ersten Computer-Bug](/yazi/ilk-bilgisayar-bocegi-1947/).
