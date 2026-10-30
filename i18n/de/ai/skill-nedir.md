---
title: "Was ist ein Skill? Die neuen „Fähigkeitsordner“ von KI-Agenten"
excerpt: "Ein Agent Skill ist ein Ordner aus einer SKILL.md-Datei und optionalen Skripten. Der Agent lädt ihn nur bei Bedarf. Was unterscheidet ihn von Prompt, MCP und Plugin?"
hook: "Bring dem Agenten mit einem Ordner eine neue Fähigkeit bei"
fact: "3 EBENEN"
factLabel: "Schrittweises Laden des Skill-Inhalts"
category: "Künstliche Intelligenz"
---
KI-Assistenten wissen von allem ein bisschen, aber sie kennen nicht die Berichtsvorlage deiner Firma, die Farben deiner Marke oder die Kniffe, einen Dateityp richtig zu verarbeiten. Was wäre, wenn du das nicht in jedem Chat lang und breit erklären müsstest, sondern es einmal verpacken und dem Agenten sagen könntest: „Nutze das bei Bedarf“? Genau das ist die Idee des „Skills“ (Fähigkeit).

## Kurz gesagt: ein Ordner und eine SKILL.md

Nach Anthropics Definition sind Agent Skills modulare Pakete, die Claudes Fähigkeiten erweitern. Jeder Skill bündelt Anweisungen, Metadaten und optionale Ressourcen (Skripte, Vorlagen), und Claude nutzt sie von selbst, wenn sie relevant sind. Anthropics Engineering-Blog sagt es noch schlichter: Skills sind „organisierte Ordner mit Anweisungen, Skripten und Ressourcen“, die der Agent bei Bedarf lädt, um bei bestimmten Aufgaben besser zu sein.

Technisch ist ein Skill mindestens ein Ordner, in dem eine Datei namens SKILL.md liegt. Am Anfang dieser Datei stehen im YAML-Format zwei Pflichtfelder: name (Name) und description (Beschreibung). Darunter folgen Anweisungen in einfachem Markdown. In den Ordner kannst du bei Bedarf Unterordner wie scripts/ (ausführbarer Code), references/ (zusätzliche Dokumente) und assets/ (Vorlagen, Bilder, Daten) legen.

Anthropic vergleicht diese Struktur mit einem Einarbeitungsleitfaden für eine neue Mitarbeiterin. Du legst den Leitfaden auf den Tisch, und sie schlägt nach, wenn sie ihn braucht.

## Das Geheimnis: Es wird nicht alles auf einmal geladen

Was Skills von einem gewöhnlichen langen Prompt unterscheidet, ist ein Design namens „schrittweises Laden“ (Progressive Disclosure). Laut Claude-Dokumentation wird der Inhalt in drei Ebenen geladen:

| Ebene | Wann wird sie geladen? |
|---|---|
| 1. Metadaten (Name + Beschreibung) | Immer, beim Start (etwa 100 Token pro Skill) |
| 2. Hauptteil der SKILL.md | Wenn der Skill ausgelöst wird (unter 5.000 Token empfohlen) |
| 3. Zusatzdateien und Skripte | Nur bei Bedarf; von Skripten gelangt nur die Ausgabe in den Kontext |

So kannst du dem Agenten Dutzende Skills laden, ohne dass alle das Kontextfenster füllen. Bis zum Auslösen liegen von jedem Skill nur Name und Beschreibung „auf dem Tisch“. Im Beispiel der Dokumentation hält der PDF-Skill die Anweisungen zum Ausfüllen von Formularen in einer separaten Datei forms.md, und Claude liest diese Datei nur, wenn es wirklich ein Formular ausfüllt.

> **Wusstest du schon?** Anthropic kündigte Agent Skills am 16. Oktober 2025 an und veröffentlichte das Format am 18. Dezember 2025 als offenen Standard unter agentskills.io. Deshalb findest du dieselbe SKILL.md-Struktur im Oktober 2026 auch in der Dokumentation anderer Werkzeuge wie GitHub Copilot und OpenAI Codex. Die Dokumentation von Copilot verweist zur Prüfung von Skills direkt auf die Spezifikation von agentskills.io.

## Prompt, MCP, Plugin: Was ist der Unterschied?

Diese Begriffe werden oft verwechselt, weil es bei allen darum geht, den Agenten besser zu machen. Die Unterscheidung des Claude-Hilfecenters lässt sich so zusammenfassen:

- **Prompt oder benutzerdefinierte Anweisungen:** Allgemeine Vorgaben, die in jedem Chat oder in allen Chats gelten. Ein Skill ist dagegen aufgabenspezifisch und greift nur, wenn er relevant ist.
- **Projekte:** Feste Hintergrundinformationen, die in den Chats innerhalb eines Projekts immer geladen sind. Ein Skill ist dagegen ein Verfahren, das bei Bedarf geöffnet wird.
- **MCP-Konnektoren (Model Context Protocol):** Sie verbinden Claude mit externen Diensten und Datenquellen. Sie schaffen also „Zugang“. Ein Skill ist das „Methodenwissen“, wie man diesen Zugang nutzt. Das Hilfecenter sagt, beide würden häufig zusammen verwendet.
- **Plugins:** Bei Claude Code und Cowork ist ein Plugin das Paket, mit dem sich mehrere Teile (Skills, Konnektoren, Befehle, Subagenten) gemeinsam verteilen lassen. Auch die Dokumentation von OpenAI macht eine ähnliche Unterscheidung: Der Skill ist das Schreibformat, das Plugin die Verteilform.

Kurz: MCP gibt dem Agenten die Hand, der Skill bringt dieser Hand eine Fertigkeit bei, und das Plugin liefert beides in einer Schachtel.

## Wo läuft er?

Laut Claude-Dokumentation sind Skills im Oktober 2026 in den Claude-Apps (claude.ai), in Claude Code und in der Claude API zusammen mit dem Code-Ausführungs-Tool nutzbar. Das Hilfecenter nennt sie für die Tarife Free, Pro, Max, Team und Enterprise und weist darauf hin, dass die Code-Ausführung aktiviert sein muss.

Ein wichtiges Detail: Eigene Skills werden nicht zwischen den Oberflächen synchronisiert. Ein Skill, den du in claude.ai hochlädst, gehört nur zu deinem Konto. Ein in die API hochgeladener Skill wird mit dem gesamten Arbeitsbereich geteilt. In Claude Code liegt er persönlich (~/.claude/skills/) oder im Projektordner (.claude/skills/).

Dazu kommt die Sicherheitsseite. Weil Skills Code ausführen können, empfiehlt die Dokumentation, sie „wie die Installation von Software“ zu behandeln und nur aus vertrauenswürdigen Quellen zu nutzen. Das behandeln wir im letzten Beitrag der Reihe gesondert.

In den nächsten Beiträgen dieses Bereichs schreiben wir Schritt für Schritt deinen eigenen Skill und gehen die tatsächlich existierenden, nützlichen Skills Kategorie für Kategorie durch.

Welche Aufgabe erklärst du deiner KI jeden Tag immer wieder und denkst dir: „Hätte ich ihr das doch nur einmal beigebracht“?
