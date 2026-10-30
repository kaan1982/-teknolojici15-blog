---
title: "KI findet kritische Lücken in PHP, auf dem 70 Prozent der Websites beruhen"
excerpt: "Zwei Lücken namens PHP2Shell erlauben die Ausführung von Code auf dem Server ohne Anmeldung. Bei der Entdeckung kamen Modelle wie GPT-5.6 Sol und Gemini 4 Argon zum Einsatz."
hook: "Die KI fand die riesige Lücke in PHP"
fact: "CVSS 9,2"
factLabel: "Höchste Bewertung der PHP2Shell-Lücken"
category: "KI"
---
Am 21. Oktober haben PHP-Entwickler einen Notfall-Patch für zwei kritische Sicherheitslücken im Kern der Sprache veröffentlicht. Die "PHP2Shell" genannten Lücken mit den Nummern CVE-2026-109618 und CVE-2026-109619 wurden mithilfe von KI-Werkzeugen gefunden.

## Was ist passiert?

Laut Fortune fand die KI-Sicherheitstestfirma Calif das erste Glied der Kette am 1. August mit GPT-5.6 Sol; Wiz erkannte die erste Lücke unabhängig davon am 19. August und meldete sie am 24. August dem PHP-Sicherheitsteam. Bei der Entdeckung kamen Wiz' eigenes Werkzeug Wiz Atlas sowie OpenAIs Modell GPT-5.6 Sol und Googles Modell Gemini 4 Argon zum Einsatz.

Die Lücken erlauben es einem Angreifer, ohne Anmeldung aus der Ferne Code auf dem Server auszuführen und Daten aus dem Speicher abzugreifen. Laut Wiz ist fast jede PHP-Version des letzten Jahrzehnts betroffen, bis zurück zu 5.4. Die höchste Schwere auf der CVSS-Skala liegt bei 9,2. PHP läuft hinter etwa 70 Prozent der Websites weltweit; allein WordPress betreibt grob 40 Prozent der Seiten. Laut Fortunes aktualisiertem Bericht wurden die Lücken nach dem Patch in großem Umfang ausgenutzt.

## Warum ist das wichtig?

Das ist eines der deutlichsten Beispiele dafür, dass KI in der Sicherheitsforschung nicht mehr nur Hilfsmittel ist, sondern selbst die Entdeckung machen kann. Dieselben Werkzeuge sind aber auch in den Händen von Angreifern, und die Zeit zwischen Patch und Beginn der Ausnutzung wird kürzer. Jeder Betreiber einer PHP-Seite muss seinen Server sofort aktualisieren. Im größeren Bild könnten versteckte Fehler im jahrzehntealten Code des Internets nun viel schneller ans Licht kommen. Die Geschichte des ersten Programms, das von selbst durch ein Netzwerk wanderte, haben wir in unserem [Creeper-Beitrag](/yazi/creeper-ilk-virus-zararsizdi/) erzählt.
