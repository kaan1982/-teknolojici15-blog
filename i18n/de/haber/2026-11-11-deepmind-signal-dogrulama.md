---
title: "DeepMinds KI hat den Code der Signal-Verschlüsselung in vier Wochen mathematisch geprüft"
excerpt: "Das System AlphaProof Code von Google DeepMind hat zentrale Sicherheitseigenschaften im echten Code des Signal-Protokolls mit maschinell geprüften Beweisen verifiziert."
hook: "Jahre an Arbeit in vier Wochen"
fact: "6 Millionen Zeilen"
factLabel: "In Lean geschriebener Beweis"
category: "News"
---
Google DeepMind hat am 10. November ein neues KI-System namens AlphaProof Code vorgestellt und gleich seine erste große Aufgabe bekanntgegeben: die zentralen Sicherheitseigenschaften des Signal-Messaging-Protokolls durch "formale Verifikation" zu beweisen. Das Signal-Protokoll wird neben der Signal-App in abgewandelter Form auch in WhatsApp und Google Messages eingesetzt.

## Wie funktioniert das?

Bei der formalen Verifikation wird mathematisch bewiesen, dass eine Software eine bestimmte Sicherheitsregel in jeder Situation einhält, und ein Computerprogramm prüft den Beweis Schritt für Schritt. Diese Arbeit kostet Expertenteams normalerweise Jahre.

Bei AlphaProof Code legten zunächst menschliche Kryptografie-Fachleute fest, was bewiesen werden soll. Zum Beispiel, dass spätere Nachrichten geschützt bleiben, selbst wenn ein Gerät kurzzeitig kompromittiert wird. Anschließend erzeugten zusammenarbeitende KI-Agenten die Beweise in der formalen Sprache Lean. Das Ergebnis war ein Beweis mit mehr als sechs Millionen Zeilen. Die Arbeit des fünfköpfigen Teams dauerte vier Wochen. Die Agenten markierten nur 1 Prozent des Codes für eine zweite Prüfung durch Menschen.

Um zu zeigen, dass das System wirklich unterscheiden kann, baute das Team zwei echte, längst behobene Fehler wieder in eine isolierte Kopie des Codes ein. AlphaProof Code bewies in beiden Fällen, dass diese Versionen unsicher sind.

## Grenzen

Die Verifikation umfasst ausgewählte Sicherheitseigenschaften des Protokolls, nicht die gesamte Signal-App. In den untersuchten Teilen wurde keine neue Lücke gefunden. Ein Beweis ist nur so stark wie die aufgeschriebenen Regeln und Annahmen; so wird etwa angenommen, dass die Verschlüsselungsalgorithmen fehlerfrei sind. DeepMind-Forscher Swarat Chaudhuri sagte zudem, bis sich die Methode auf alle Software der Welt ausweite, sei es noch ein sehr weiter Weg. Google nannte keine Kosten; die Beweise und Regeln werden als Open Source veröffentlicht.

## Warum das wichtig ist

KI hilft auch Angreifern, Lücken zu finden. Dass dieselbe Technologie genutzt wird, um zu beweisen, dass eine Software sicher ist, ist ein wichtiger Schritt für die Verteidigerseite. Wenn Sie die Anfänge der Computersicherheit interessieren, lesen Sie die Geschichte des [ersten Computerpassworts](/yazi/ilk-bilgisayar-sifresi-ctss/).
