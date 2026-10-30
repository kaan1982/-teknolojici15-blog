---
title: "Dokument-Skills: dem Agenten Word, Excel, PowerPoint und PDF beibringen"
excerpt: "Was machen Anthropics Skills docx, xlsx, pptx und pdf, und wo laufen sie? Offizielle und ergänzende Skills, die für die Dokumenterstellung wirklich nützlich sind."
hook: "Bericht, Tabelle, Präsentation: alles ein Skill"
fact: "4 DOKUMENTE"
factLabel: "Anzahl der vorgefertigten Dokument-Skills"
category: "Künstliche Intelligenz"
---
Einer KI zu sagen „Erstelle mir einen Bericht“ ist leicht. Schwer ist, dass der Bericht als Word- oder Excel-Datei ankommt, die sich wirklich öffnen lässt, deren Format nicht zerfällt und deren Formeln funktionieren. Die erste und vielleicht meistgenutzte Kategorie von Skills ist genau das: Office-Dokumente. In diesem Beitrag behandeln wir nur Skills, deren Existenz wir überprüft haben.

## Vier Grundbausteine: docx, xlsx, pptx, pdf

Laut Claude-Dokumentation gibt es vier vorgefertigte (pre-built) Dokument-Skills von Anthropic. Sie laufen im Hintergrund der Dateierstellungsfunktion von Claude, und Anthropic veröffentlicht den Quellcode im GitHub-Repository anthropics/skills.

| Skill | Was er tut (laut offiziellen Beschreibungen) |
|---|---|
| docx | Erstellt, liest und bearbeitet Word-Dokumente, einschließlich Formatierung und Vorlagen |
| xlsx | Öffnet und bearbeitet Tabellen, fügt Formeln und Diagramme hinzu, bereinigt unordentliche Daten |
| pptx | Erstellt Präsentationen, bearbeitet Folien, liest und analysiert .pptx-Inhalt |
| pdf | Extrahiert Text und Tabellen, fügt PDFs zusammen, teilt sie, füllt Formulare aus, fügt Wasserzeichen hinzu |

Die Beschreibungen im Repository sind ziemlich „hartnäckig“ geschrieben. Die Beschreibung des pptx-Skills sagt zum Beispiel, er solle verwendet werden, wenn eine .pptx-Datei „in irgendeiner Weise“ als Eingabe oder Ausgabe beteiligt ist. Das ist ein offizielles Beispiel für die Regel „Die Beschreibung löst aus“, die wir im vorigen Beitrag erklärt haben.

## Wo kannst du sie nutzen?

Laut Claude-Dokumentation sind diese vier Skills im Oktober 2026 in claude.ai beim Erstellen von Dokumenten automatisch aktiv und lassen sich auch in der Claude API als vorgefertigte Skills aufrufen. In Claude Code sind die vorgefertigten Dokument-Skills dagegen nicht eingebaut. Das Repository anthropics/skills lässt sich aber als Plugin-Marktplatz für Claude Code hinzufügen, und das Paket document-skills kann installiert werden. Laut Anleitung im Repository fügt man zuerst mit dem Befehl /plugin marketplace add anthropics/skills den Marktplatz hinzu und installiert dann document-skills@anthropic-agent-skills.

Bei der Lizenz gibt es eine Unterscheidung. Viele Skills im Repository sind Open Source unter Apache 2.0. Die vier Dokument-Skills werden aber als „nicht Open Source, sondern Source-Available“ geteilt. Du kannst den Code also ansehen und daraus lernen, solltest aber die Lizenzdatei lesen, bevor du ihn frei in deinem eigenen Produkt weiterverbreitest.

> **Wusstest du schon?** Der pdf-Skill ist das Lehrbuchbeispiel für schrittweises Laden. Laut Anthropics Engineering-Beitrag wurden die Anweisungen zum Ausfüllen von Formularen aus der Haupt-SKILL.md herausgenommen und in eine separate Datei forms.md verschoben. Claude liest diese Datei nur, wenn es tatsächlich ein Formular ausfüllt. Im Repository liegen im Ordner pdf heute sowohl forms.md als auch reference.md und ein Ordner scripts.

## Helfer neben dem Dokument

Die Dokumenterstellung hört nicht beim Dateiformat auf. Im Repository anthropics/skills gibt es weitere offizielle Beispiele, die sich auf die Inhaltsseite konzentrieren:

- **doc-coauthoring:** Bietet einen schrittweisen Arbeitsablauf, um strukturierte Texte wie technische Spezifikationen, Vorschläge und Entscheidungsdokumente gemeinsam zu schreiben. Er führt durch die Phasen Kontext übergeben, iterative Korrektur und Überprüfung.
- **internal-comms:** Sammelt Ressourcen, die beim Schreiben interner Kommunikation wie Statusberichten, Management-Updates, Firmenrundschreiben und FAQs in den bevorzugten Formaten des Unternehmens helfen. Im Ordner gibt es auch Beispieltexte.
- **brand-guidelines:** Wendet die offiziellen Markenfarben und die Typografie von Anthropic auf ein Ergebnis an. Sein eigentlicher Wert liegt darin, zu zeigen, wie du etwas Ähnliches für deine eigene Marke aufbauen kannst.
- **theme-factory:** Enthält 10 vorgefertigte Farb- und Schriftthemen, die sich auf Folien, Dokumente, Berichte oder HTML-Seiten anwenden lassen, und erzeugt auf Wunsch sofort ein neues Thema.

Das Hilfecenter erwähnt außerdem Skills, die Partner wie Notion, Figma und Atlassian so vorbereitet haben, dass sie mit ihren eigenen MCP-Konnektoren zusammenarbeiten. Sie sind nützlich, wenn man mit den Werkzeugen arbeitet, in denen Dokumente entstehen (z. B. Notion-Seiten).

## Wie nutzt man das im echten Leben?

Am effektivsten ist es, die vorgefertigten Dokument-Skills mit einem kleinen eigenen Skill zu kombinieren. Der xlsx-Skill weiß zum Beispiel, wie man Excel richtig erzeugt, aber nicht, welche Spalten die monatliche Verkaufstabelle deiner Firma haben muss. Wenn du einen kurzen Skill schreibst, der das beschreibt, arbeiten die beiden Skills zusammen, und es entsteht eine Datei, die sowohl richtig formatiert ist als auch deinem Standard entspricht.

Zwei Hinweise solltest du nicht vergessen. Erstens schreibt das Repository anthropics/skills ausdrücklich, dass diese Skills „zu Demonstrations- und Lernzwecken“ gedacht sind und Claudes eigenes Verhalten von den Umsetzungen hier abweichen kann. Zweitens brauchen die Dokument-Skills eine Umgebung zur Code-Ausführung. Laut Hilfecenter muss die Code-Ausführung aktiviert sein, damit Skills funktionieren.

Im nächsten Beitrag wechseln wir zur Bildschirmseite: Skills, die Design, Frontend und Web-Ergebnisse erzeugen.

Bei welcher Dokumentart verlierst du am meisten Zeit: bei Tabellen, Präsentationen oder Berichten?
