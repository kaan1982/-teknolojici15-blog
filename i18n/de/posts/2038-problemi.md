---
title: "Das 2038-Problem: Warum manche Computer ins Jahr 1901 zurückspringen werden"
excerpt: "Die 32-Bit-Unix-Zeit läuft am 19. Januar 2038 um 03:14:07 UTC ab, und alte Systeme könnten das Datum für den 13. Dezember 1901 halten. Was steckt hinter dem 2038-Problem, und wie wird es gelöst?"
hook: "Computer springen ins Jahr 1901 zurück!"
fact: "03:14:07"
factLabel: "19. Januar 2038, UTC: die 32-Bit-Grenze"
category: "Computer"
---
Zur Jahrtausendwende sprach die Welt über einen Computerfehler namens „Y2K“. Jetzt steht das nächste Datum an: der 19. Januar 2038. Wenn an diesem Tag die Uhr eine Sekunde über 03:14:07 Uhr (UTC) hinausläuft, können manche alten Computer ihren Kalender plötzlich auf 1901 zurückdrehen. Das ist kein Science-Fiction-Szenario, sondern ein simples Rechenproblem.

## Wie zählen Computer die Zeit?

Unix und viele davon abgeleitete Systeme speichern die Zeit nicht als Uhr oder Kalender, sondern als eine einzige Zahl. Diese Zahl ist die Anzahl der Sekunden, die seit Mitternacht am 1. Januar 1970 (UTC) vergangen sind. Man nennt sie „Unix-Zeit“.

Das Problem: In vielen älteren Systemen wird diese Zahl als vorzeichenbehaftete 32-Bit-Ganzzahl gespeichert. Der größte Wert, den eine vorzeichenbehaftete 32-Bit-Zahl annehmen kann, ist 2.147.483.647, also 2 hoch 31 minus 1. Diese Zahl an Sekunden entspricht etwa 68 Jahren. „Vorzeichenbehaftet“ heißt, dass ein Bit dafür reserviert ist, anzuzeigen, ob die Zahl positiv oder negativ ist. Deshalb stehen nicht alle 32 Bit für den Betrag zur Verfügung, sondern nur 31.

Wer zu 1970 diese 68 Jahre addiert, landet im Jahr 2038. Die Rechnung ergibt genau den 19. Januar 2038, 03:14:07 UTC.

## Was passiert eine Sekunde später?

Eine Sekunde nach Erreichen des Höchstwerts läuft der Zähler über. Denk an die alten mechanischen Kilometerzähler im Auto: Nach 999.999 springen sie auf 000.000. Hier passiert etwas Ähnliches, nur dass wegen des Vorzeichens der Wert in eine sehr große negative Zahl umschlägt.

Ein betroffenes System deutet diese negative Zahl als Sekunden, die von 1970 aus rückwärts gezählt werden. Das Ergebnis: Das Datum erscheint als 13. Dezember 1901, 20:45:52 Uhr (UTC). Ein Computer, der plötzlich 136 Jahre in die Vergangenheit versetzt ist: Zertifikate, Timer, Protokolle und Datumsvergleiche können dann fehlerhaft arbeiten.

> **Wusstest du schon?** Dieses Problem ist bei manchen Programmen sogar aufgetreten, bevor 2038 überhaupt da war. Laut Wikipedia stürzte die Software AOLserver 2006 ab, weil sie einen Timeout-Wert eine Milliarde Sekunden in die Zukunft setzte und damit die 2038-Grenze überschritt. Jedes Programm, das einen „Zeitpunkt in der Zukunft“ berechnet, kann also schon heute an die Grenze stoßen. Eine ähnliche 32-Bit-Grenze machte 2022 auch Microsoft Exchange zu schaffen: Die Versionsnummer eines Updates wurde wie ein Zeitstempel gelesen und überschritt die Grenze, woraufhin die Malware-Scan-Funktionen ausfielen.

## Wer ist gefährdet?

Die allermeisten modernen Handys und Computer, die du täglich benutzt, arbeiten inzwischen mit 64-Bit-Zeitwerten. Das eigentliche Risiko liegt bei Systemen, die über viele Jahre ohne Updates laufen. Wikipedia hebt besonders ältere (Legacy-)Systeme und eingebettete Systeme hervor: industrielle Steuerungen, manche Netzwerkgeräte, Fahrzeugsysteme, also Maschinen, die einmal installiert und dann vergessen werden.

Da solche Geräte selten aktualisiert werden, steckt in ihnen 2038 vielleicht immer noch ein Bauteil, das mit 32 Bit Zeit zählt.

| 32-Bit-Zeit mit Vorzeichen | 64-Bit-Zeit mit Vorzeichen |
|---|---|
| Größter Wert 2.147.483.647 | Ein viel größerer Bereich |
| Grenze: 19. Januar 2038 | Grenze: in etwa 292 Milliarden Jahren |
| Alte und eingebettete Systeme | Moderne Betriebssysteme |

## Die Lösung: ein größerer Zähler

Die Schwierigkeit ist weniger technisch als praktisch. Wer die Größe der Zahl ändert, die die Zeit speichert, kann damit jedes Programm, jedes Dateiformat und jedes Datenbankfeld betreffen, das diese Zahl verwendet. Eine einzelne Zeile zu korrigieren ist leicht; die gesamte Software in einem Gerät aufzuspüren und zu aktualisieren, kann Jahre dauern.

Die Lösung ist der Idee nach einfach: die Zeit in einer vorzeichenbehafteten 64-Bit-Zahl speichern. Laut Wikipedia verschiebt das den Überlauf um etwa 292 Milliarden Jahre, also weit über das heutige Alter des Universums hinaus.

Dieser Übergang läuft seit Jahren. Laut einer Phoronix-Meldung vom Januar 2020 wurde Linux 5.6 als erste Hauptversion des Kernels vorbereitet, die die Grundlage dafür schaffen kann, dass 32-Bit-Systeme auch nach 2038 laufen. Wikipedia erklärt, dass das 2020 erschienene Linux 5.6 auf 32-Bit-Architekturen die Unterstützung für 64-Bit-Zeit ergänzt hat. Damit das wirkt, müssen Anwendungen allerdings auch mit 64-Bit-Zeit neu kompiliert werden.

Ein weiterer Lösungsvorschlag ist, die Zahl vorzeichenlos (unsigned) zu machen. Das verschiebt die Grenze aber nur auf das Jahr 2106 und macht die Verwendung von Daten vor 1970 unmöglich. Deshalb gilt der Umstieg auf 64 Bit als der eigentliche Weg.

Y2K wurde keine große Katastrophe, weil die Leute rechtzeitig gearbeitet haben. Glaubst du, dass sich dieses stille Heldentum in den Jahren bis 2038 wiederholen wird?
