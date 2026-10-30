---
title: "Skills für Entwickler: skill-creator, mcp-builder und mehr"
excerpt: "Ein Skill, der Skills schreibt, ein Skill, der MCP-Server baut, und Skill-Pakete, die Test- und Debugging-Disziplin mitbringen. Geprüfte Auswahl für Entwickler."
hook: "Es gibt einen Skill, der Skills schreibt"
fact: "20 ABFRAGEN"
factLabel: "Empfohlene Beispielmenge für den Auslösetest"
category: "Künstliche Intelligenz"
---
Für jemanden, der Software entwickelt, sind Skills unter zwei Gesichtspunkten interessant. Erstens gibt es „Erzeuger“-Skills, die dir helfen, eigene Skills schneller und messbar zu schreiben. Zweitens gibt es Pakete, die dem Agenten Ingenieursdisziplin (Tests, Planung, Debugging) beibringen. In diesem Beitrag behandeln wir beides, nur mit Beispielen, deren Existenz wir überprüft haben.

## skill-creator: der Skill, der Skills schreibt

Der skill-creator im offiziellen Anthropic-Repository anthropics/skills ist dafür gemacht, neue Skills zu erstellen, bestehende Skills zu bearbeiten und zu verbessern und ihre Leistung zu messen. Laut Beschreibung übernimmt er auch das Ausführen von Evaluierungen (Evals), den Vergleich der Ergebnisse per Varianzanalyse und das Optimieren der Skill-Beschreibung, damit sie besser auslöst.

Der Arbeitsablauf ist recht menschlich beschrieben: entscheide, was du willst, schreibe einen Entwurf, bereite ein paar Testnachrichten vor, lasse Claude mit dem Skill diese Nachrichten bearbeiten, bewerte die Ergebnisse gemeinsam, schreibe neu und wiederhole. Im Ordner liegen getrennte Skripte, die Evaluierungen ausführen, Vergleichsberichte erzeugen und die Beschreibung verbessern, außerdem ein „eval-viewer“, mit dem man die Ergebnisse visuell prüft.

Auch der Leitfaden zur Beschreibungsoptimierung auf agentskills.io führt diesen Skill als Beispiel an. Laut Leitfaden automatisiert der skill-creator diesen Kreislauf von Anfang bis Ende: Er teilt die Testmenge auf, misst die Auslöseraten parallel, schlägt mit Claude Verbesserungen der Beschreibung vor und erzeugt einen Live-HTML-Bericht.

> **Wusstest du schon?** Beim von agentskills.io empfohlenen Auslösetest werden etwa 20 Beispielnachrichten verwendet, und jede wird 3 Mal ausgeführt. Eine einzige Beschreibung zu testen heißt also 60 Läufe. Um Überanpassung (Overfitting) zu vermeiden, werden etwa 60 Prozent der Nachrichten für die Verbesserung und 40 Prozent nur für die Validierung reserviert. Der Leitfaden sagt, dass meist fünf Runden genügen.

## mcp-builder und claude-api: für alle, die Integrationen bauen

- **mcp-builder (offiziell):** Ein Leitfaden für die Entwicklung von MCP-Servern, mit denen große Sprachmodelle über gut gestaltete Werkzeuge mit externen Diensten sprechen können. Er arbeitet mit Python (FastMCP) oder Node/TypeScript (MCP SDK). Der Skill teilt den Prozess in vier Phasen: Recherche und Planung, Umsetzung, Überprüfung und Test, Erstellung von Evaluierungen. Im Ordner liegen sprachspezifische Referenzdokumente und Evaluierungsskripte.
- **claude-api (offiziell):** Ein Referenz-Skill für die Claude API und die Anthropic-SDKs. Er deckt Themen wie Modellkennungen, Parameter, Streaming, Werkzeugnutzung und Caching ab und enthält für viele Programmiersprachen eigene Ordner. Laut Claude-Dokumentation wird dieser Open-Source-Skill zusammen mit Claude Code ausgeliefert.
- **webapp-testing (offiziell):** Ein Werkzeugsatz zum Testen lokaler Webanwendungen mit Playwright. Ein praktischer Helfer für Frontend-Entwickler, den wir auch im Beitrag über Design erwähnt haben.

## Aus der Community: Ingenieursdisziplin mit Superpowers

Außerhalb des offiziellen Repositorys ist eines der unter Entwicklern meistbesprochenen Pakete das MIT-lizenzierte Repository obra/superpowers von Jesse Vincent. Es beschreibt sich selbst als „vollständige Methodik der Softwareentwicklung“ für Coding-Agenten. Im Oktober 2026 enthält das Repository unter anderem diese Skills (eine Auswahl):

| Skill | Wann greift er ein? |
|---|---|
| brainstorming | Bevor du ein neues Feature oder eine kreative Arbeit beginnst |
| writing-plans | Wenn du für eine mehrstufige Aufgabe einen Plan schreibst, bevor du den Code anfasst |
| test-driven-development | Bei der Umsetzung: erst ein fehlschlagender Test, dann so wenig Code wie möglich |
| systematic-debugging | Wenn ein Fehler oder ein fehlgeschlagener Test auftritt, bevor eine Korrektur vorgeschlagen wird |
| verification-before-completion | Um vor dem „Fertig“ die Prüfbefehle auszuführen |

Die README des Repositorys gibt neben Claude Code Installationsanleitungen für viele Agenten wie Codex, Cursor, Gemini CLI und GitHub Copilot CLI und weist darauf hin, dass es bei Claude Code im offiziellen Plugin-Marktplatz von Anthropic zu finden ist. Das ist die praktische Folge davon, dass Agent Skills ein offener Standard ist: Derselbe Skill kann in verschiedenen Werkzeugen laufen.

## Dieselbe Idee auch auf anderen Plattformen

Auch die Dokumentation von OpenAI zu ChatGPT und Codex beschreibt Skills als auf dem „offenen Agent-Skills-Standard“ aufgebaut. Im Oktober 2026 stechen in der Dokumentation zwei eingebaute Helfer hervor: der skill-creator, der aus der beschriebenen Aufgabe einen Skill erstellt (in Codex mit $skill-creator aufgerufen), und der skill-installer, der fertige Skills aus dem Repository openai/skills oder aus anderen Repositorys installiert. Codex liest lokale Skills auf Projekt- und Nutzerebene aus den Ordnern .agents/skills.

Für Entwickler könnte die wertvollste Gewohnheit sein: jede lange Erklärung, die du wiederholst, deine Code-Review-Checkliste oder deine Deployment-Schritte in einen Skill zu verwandeln und ins Repository des Projekts zu legen. In Claude Code gehen Skills, die in den Ordner .claude/skills gelegt werden, mit dem Repository auch an das Team. Vergiss aber nicht, die Skripte jedes Community-Skills, den du installierst, zu lesen, denn diese Skills können auf deinem Computer mit deinen Berechtigungen Code ausführen.

Bei welchem Schritt in deinem Entwicklungsprozess denkst du am häufigsten: „Hätte ich dafür nur einen Skill“: beim Testen, beim Code-Review oder beim Deployment?
