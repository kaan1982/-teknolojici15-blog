---
title: "Schreib deinen eigenen Skill: die erste Fähigkeit Schritt für Schritt mit SKILL.md"
excerpt: "Ein Ordner, eine SKILL.md und eine gut geschriebene Beschreibung. Die Schritte zum eigenen Agent Skill, die Bedeutung des Felds description und die Testmethode."
hook: "Die Beschreibung löst den Skill aus"
fact: "1.024"
factLabel: "Maximale Zeichenzahl für das Feld description"
category: "Künstliche Intelligenz"
---
Um einen Skill zu schreiben, musst du kein Programmierer sein. In der einfachsten Form genügt ein Ordner mit einer einzigen Textdatei. Der Unterschied zwischen einem Skill, der gut funktioniert, und einem, der nie ausgelöst wird, steckt aber meist in einem einzigen Satz: der Beschreibung. In diesem Beitrag schreiben wir von Grund auf einen kleinen, aber echten Skill.

## Schritt 1: Ordner und SKILL.md anlegen

Laut der Agent-Skills-Spezifikation ist ein Skill ein Ordner, der mindestens eine Datei SKILL.md enthält. Ganz am Anfang der Datei steht YAML-Frontmatter, und zwei Felder sind Pflicht:

- **name:** Höchstens 64 Zeichen. Nur Kleinbuchstaben, Ziffern und Bindestriche. Er darf nicht mit einem Bindestrich beginnen oder enden, keine zwei Bindestriche hintereinander enthalten und muss dem Ordnernamen entsprechen. Die Claude-Dokumentation merkt außerdem an, dass die Wörter „anthropic“ und „claude“ im Namen nicht verwendet werden dürfen.
- **description:** Darf nicht leer sein, höchstens 1.024 Zeichen. Sie soll beschreiben, was der Skill tut und wann er verwendet werden soll.

Es gibt auch optionale Felder (license, compatibility, metadata und das experimentelle allowed-tools), die für die meisten Skills aber nicht nötig sind.

## Schritt 2: Die Beschreibung sorgfältig schreiben

Warum ist die Beschreibung so wichtig? Weil der Agent beim Start von jedem Skill nur Name und Beschreibung liest. In den Worten von agentskills.io ruht „die ganze Last“ des Auslösens auf der Beschreibung. Wenn sie nicht sagt, wann die Arbeit nützlich ist, greift der Agent nicht zu diesem Skill.

Die Empfehlungen der Quellen lassen sich so zusammenfassen:

- Schreibe sowohl, **was er tut**, als auch, **wann er verwendet wird**.
- Die Claude-Dokumentation empfiehlt, die Beschreibung in der **dritten Person** zu schreiben, weil sie in den System-Prompt eingefügt wird („Verarbeitet Excel-Dateien“, nicht „Ich kann dir helfen“).
- agentskills.io empfiehlt, auch die Fälle ausdrücklich aufzulisten, in denen der Nutzer den Bereich nicht beim Namen nennt.
- Halte sie kurz: ein paar Sätze, höchstens ein kurzer Absatz. Claude Code schneidet die Beschreibung in der Liste bei 1.536 Zeichen ab, deshalb sollte der wichtigste Anwendungsfall am Anfang stehen.

## Schritt 3: Den Hauptteil kurz halten, das Skript klug einsetzen

Als Beispiel denken wir uns einen Skill passend zur Schreibregel dieses Blogs: Im Text sollen keine Gedankenstriche (Em Dash) und Halbgeviertstriche (En Dash) vorkommen. Die Ordnerstruktur sei so:

```
strich-pruefung/
├── SKILL.md
└── scripts/
    └── striche_finden.py
```

Und die Datei SKILL.md ist nicht länger als das:

```markdown
---
name: strich-pruefung
description: Findet die Verwendung von Gedankenstrichen (U+2014) und Halbgeviertstrichen (U+2013) in deutschen Blogbeiträgen und schlägt Korrekturen vor. Wird verwendet, wenn der Nutzer einen Markdown-Beitrag für die Veröffentlichung vorbereitet, "Striche prüfen" oder "hält das die Schreibregeln ein" sagt oder, ohne es zu nennen, eine letzte Kontrolle vor der Veröffentlichung wünscht.
---

# Strich-Prüfung

1. Führe den Befehl `python scripts/striche_finden.py <datei.md>` aus.
2. Schlage für jede Zeile in der Ausgabe vor, den Strich durch Punkt, Komma, Doppelpunkt oder Klammer zu ersetzen.
3. Ändere nicht den Sinn. Frage den Nutzer bei Zeilen, bei denen du dir nicht sicher bist.
4. Melde am Ende in einem Satz, wie viele Zeilen du korrigiert hast.
```

Die Claude-Dokumentation sieht das Kontextfenster als „gemeinsame Ressource“ und empfiehlt, nur Wissen hinzuzufügen, das das Modell nicht ohnehin schon hat. Der Hauptteil sollte unter 500 Zeilen bleiben. Lange Nachschlagetexte sollten in separate Dateien ausgelagert und aus der SKILL.md nur auf einer Ebene verlinkt werden.

Auch für Skripte ist die Regel klar: „löse es, schieb es nicht weiter“. Das Skript soll Fehlerfälle also selbst behandeln und nicht nach dem Prinzip „soll es doch abstürzen, Claude findet schon einen Weg“ geschrieben sein. Wenn das Skript läuft, gelangt nicht der Code selbst in den Kontext, sondern nur seine Ausgabe. Das macht ein Skript für wiederkehrende und fehlerempfindliche Aufgaben zuverlässiger als eine Anweisung.

> **Wusstest du schon?** In Claude Code sind die früheren „benutzerdefinierten Slash-Befehle“ mit den Skills verschmolzen. Die Datei .claude/commands/deploy.md und .claude/skills/deploy/SKILL.md erzeugen denselben Befehl /deploy. Wenn ein Skill nicht automatisch ausgelöst werden soll, kannst du im Frontmatter disable-model-invocation: true ergänzen und ihn nur von Hand aufrufen.

## Schritt 4: Testen, dann noch einmal testen

Der Best-Practices-Leitfaden von Claude empfiehlt, vor dem Schreiben langer Dokumente Bewertungsszenarien vorzubereiten, und die Checkliste vor der Veröffentlichung enthält mindestens drei Bewertungen und einen getrennten Test auf den Modellen Haiku, Sonnet und Opus. Die Begründung ist einfach: Eine Anweisung, die auf Opus tadellos läuft, braucht für Haiku vielleicht mehr Details.

Zum Testen des Auslösens ist der Vorschlag von agentskills.io konkret: Bereite etwa 20 Beispiel-Nutzernachrichten vor. 8 bis 10 davon sollten den Skill auslösen, 8 bis 10 nicht. Die wertvollsten negativen Beispiele sind „knappe Fehlschüsse“, also Nachrichten, die dieselben Wörter teilen, aber etwas anderes verlangen. Weil sich das Modell nicht jedes Mal gleich verhält, wird empfohlen, jede Nachricht mehrmals auszuführen (zum Einstieg 3 Mal) und die Auslöserate zu betrachten.

| Schlechte Beschreibung | Gute Beschreibung |
|---|---|
| „Hilft bei PDFs.“ | Sagt, was er tut und wann er verwendet wird |
| Nur technische Details | Beschreibt die Absicht des Nutzers |
| Deckt alles ab | Nennt auch, was er nicht tut |

Auch die Installation ist einfach: In Claude Code genügt es, den Ordner unter ~/.claude/skills/ (persönlich) oder in den Ordner .claude/skills/ des Projekts zu legen. Claude Code beobachtet diese Ordner und erkennt Änderungen in derselben Sitzung ohne Neustart. In claude.ai kannst du den Skill als Zip in den Einstellungen hochladen.

Welche wiederkehrende Aufgabe würde dein erster Skill automatisieren?
