---
title: "Design- und Web-Skills: für Oberflächen, die nicht nach Schablone riechen"
excerpt: "frontend-design, web-artifacts-builder, canvas-design und Vercels Skill web-design-guidelines. Echte Skills, die die vom Agenten erzeugte Oberfläche verbessern."
hook: "Warum sieht KI-Design immer gleich aus?"
fact: "10 THEMEN"
factLabel: "Anzahl der fertigen Themen in theme-factory"
category: "Künstliche Intelligenz"
---
Wenn du dir von einer KI schon einmal eine Webseite bauen ließest, ist dir wahrscheinlich Folgendes aufgefallen: Das Ergebnis funktioniert, kommt einem aber irgendwie bekannt vor. Dieselben lila Verläufe, dieselbe zentrierte Überschrift, dieselbe Kartenanordnung. Ein großer Teil der Design-Skills kämpft genau mit diesem Problem: das Modell dazu zu bringen, eine bewusste Designentscheidung zu treffen statt den „Standard“.

Bei jedem Skill in diesem Beitrag haben wir die Quelle genannt. Anthropics offizielles Repository ist anthropics/skills, Community- oder Firmenrepositorys sind gesondert markiert.

## frontend-design: dem Standard entkommen

Die Beschreibung des Skills frontend-design im offiziellen Repository ist klar: Anleitung für „bewusstes, unverwechselbares visuelles Design“, wenn man eine neue Oberfläche baut oder eine bestehende umgestaltet. Er hilft bei ästhetischer Richtung, Typografie und Entscheidungen, die „nicht nach Schablone klingen“.

Der Hauptteil des Skills versetzt das Modell in die Rolle des Designleiters eines Designstudios und lässt es von der Annahme ausgehen, dass der Kunde klischeehafte Vorschläge ohnehin ablehnt. Das ist auch ein Beispiel für eine gute Skill-Schreibtechnik: dem Modell eine klare Perspektive zu geben, statt Wissen anzuhäufen.

## Web-Ergebnisse: web-artifacts-builder und webapp-testing

- **web-artifacts-builder (offiziell):** Ein Werkzeugsatz, um in claude.ai mit modernen Frontend-Technologien wie React, Tailwind CSS und shadcn/ui komplexe, mehrkomponentige HTML-Ergebnisse zu erzeugen, die Zustandsverwaltung oder Routing brauchen. Seine Beschreibung sagt auch, dass er nicht für einfache Einzeldatei-HTML-Aufgaben verwendet werden soll. Im Ordner liegen Skripte, die das Projekt starten und in eine einzige Datei packen.
- **webapp-testing (offiziell):** Ein Werkzeugsatz zum Testen lokaler Webanwendungen mit Playwright. Er dient dazu, Frontend-Funktionen zu prüfen, Oberflächenfehler zu beheben, Screenshots zu machen und Browserprotokolle zu lesen. Die Antwort auf die Frage „Funktioniert das wirklich?“ nach dem Design.

> **Wusstest du schon?** Der Skill theme-factory im offiziellen Repository kommt mit 10 fertigen Themen, die sich auf jedes Ergebnis von der Folie bis zur HTML-Landingpage anwenden lassen. Schon die Namen der Themendateien im Ordner sind inspirierend: „arctic-frost“, „midnight-galaxy“, „golden-hour“, „tech-innovation“ und so weiter. Auf Wunsch kann der Skill auch sofort ein neues Thema erzeugen.

## Visuelle Kunst: canvas-design, algorithmic-art, slack-gif-creator

Im Repository von Anthropic gibt es drei weitere Skills, die die „kreative“ Seite vertreten:

- **canvas-design:** Verwendet einen „Designphilosophie“-Ansatz, um Poster, Kunstwerke oder statische Designs als .png und .pdf zu erzeugen. Im Ordner liegen mehr als 80 Schriftdateien. Seine Beschreibung schreibt ausdrücklich vor, die Arbeiten existierender Künstler nicht zu kopieren.
- **algorithmic-art:** Erzeugt mit p5.js generative Kunst mit Seeded Randomness und interaktiven Parametern. Gedacht für Wünsche wie Flussfelder und Partikelsysteme.
- **slack-gif-creator:** Bietet Einschränkungen, Validierungswerkzeuge und Animationsideen zum Erstellen von für Slack optimierten animierten GIFs. Für Wünsche der Art „Mach mir ein Slack-GIF, in dem X Y tut“.

## Aus der Community: Vercels Oberflächen- und React-Skills

Außerhalb des offiziellen Repositorys ist eines der bekanntesten designorientierten Pakete Vercels Repository vercel-labs/agent-skills. Im Oktober 2026 enthält es Folgendes:

| Skill | Was er tut |
|---|---|
| web-design-guidelines | Prüft Oberflächencode anhand von mehr als 100 Regeln zu Barrierefreiheit, Performance und Nutzererfahrung |
| vercel-react-best-practices | Die React- und Next.js-Performanceregeln der Vercel-Entwicklung (mehr als 40 in 8 Kategorien) |
| vercel-composition-patterns | Muster für skalierbare React-Komponentenkomposition |
| vercel-react-view-transitions | Flüssige Übergangsanimationen mit der View Transition API von React |
| vercel-react-native-skills | Performance- und Architekturregeln für React Native und Expo |

Diese Skills sind nicht an ein einzelnes Werkzeug gebunden. Vercels Repository empfiehlt die Installation mit dem Befehl npx skills add vercel-labs/agent-skills, und die Skills lassen sich in verschiedenen Agenten nutzen, die den Agent-Skills-Standard unterstützen.

## Welchen wann verwenden?

Eine praktische Reihenfolge könnte so aussehen: Lege die Designrichtung mit frontend-design fest, fixiere Farbe und Schrift mit theme-factory oder deinem eigenen Marken-Skill, erzeuge das Ergebnis mit web-artifacts-builder, prüfe es dann mit web-design-guidelines und teste es mit webapp-testing im Browser. Jeder ist eine eigene Spezialisierung, und dank des schrittweisen Ladens bläht es den Kontext nicht auf, alle gleichzeitig installiert zu haben.

Eine Warnung: Einige dieser Skills (z. B. web-artifacts-builder) führen Skripte aus. Die Claude-Dokumentation empfiehlt, Skills wie die Installation von Software zu behandeln und nur aus Quellen zu installieren, denen du vertraust. Es ist eine gute Gewohnheit, vor der Installation jedes Pakets, das nicht aus dem offiziellen Repository stammt, einen Blick in die SKILL.md und die Skripte zu werfen.

Glaubst du, dass mit KI gemachte Designs mit der Zeit vielfältiger werden, oder entsteht eine neue „Einheitsoptik“, wenn alle dieselben Skills nutzen?
