---
title: "Skills für Marketing, Video und Content: der Werkzeugkasten der Macher"
excerpt: "Corey Haines' Repository marketingskills, Anthropics Marketing-Plugin, Remotion- und HeyGen-HyperFrames-Skills. Echte Auswahl für Content und Video."
hook: "Das Video per Code, den Text per Skill"
fact: "52 SKILLS"
factLabel: "Anzahl der Skills im Repository marketingskills"
category: "Künstliche Intelligenz"
---
Auch hinter diesem Blog entstehen jeden Tag kurze Videos, Cover und Texte. Deshalb ist diese Kategorie für uns ein bisschen persönlich: Skills, die Marketing, Content und Video erzeugen. Hier vermehren sich die Community-Skills auch am schnellsten. Wir haben nur Beispiele aufgelistet, deren Repositorys wir geöffnet und deren Inhalt wir geprüft haben. Alle Zahlen gelten für Ende Oktober 2026.

## marketingskills: eine Marketing-Bibliothek mit 52 Skills

Das MIT-lizenzierte Repository coreyhaines31/marketingskills von Corey Haines, dem Namen hinter der Conversion-Optimierungsagentur Conversion Factory, ist eine der umfassendsten Community-Sammlungen in diesem Bereich. Laut README ist es für technische Marketer und Gründer gedacht und konzentriert sich auf Aufgaben wie Conversion-Optimierung, Copywriting, SEO, Analytics und Growth Engineering. Es arbeite mit Claude Code, OpenAI Codex, Cursor und anderen Agenten zusammen, die den Agent-Skills-Standard unterstützen.

Im Ordner skills des Repositorys liegen 52 Skills. Ein paar Beispiele:

- **copywriting:** Zum Schreiben oder Verbessern der Texte aller Arten von Marketingseiten wie Startseite, Landingpage und Preisseite.
- **seo-audit:** Zum Prüfen und Diagnostizieren von SEO-Problemen einer Website.
- **ai-seo:** Um Inhalte für KI-Suchmaschinen zu optimieren, also darauf, in den Antworten großer Sprachmodelle als Quelle genannt zu werden.
- **emails und cold-email:** Für E-Mail-Sequenzen, automatisierte Abläufe und B2B-Kaltakquise-Kampagnen.
- **social:** Zum Erstellen und Planen von Content für LinkedIn, X, Instagram, TikTok und Facebook.

Zur Installation empfiehlt die README den Befehl npx skills add coreyhaines31/marketingskills. Man kann auch einzelne Skills auswählen.

## Anthropics Marketing-Plugin

Anthropics Repository anthropics/knowledge-work-plugins sammelt nach Berufsgruppen aufbereitete Plugins. Sie sind für Claude Cowork gemacht und auch mit Claude Code kompatibel. Jedes Plugin bündelt die Skills, Konnektoren, Slash-Befehle und Subagenten für diese Aufgabe.

Die Skills im Plugin marketing sind: brand-review (prüft einen Entwurf anhand von Markenstimme und Styleguide und schlägt Korrekturen im Vorher/Nachher-Format vor), campaign-plan (erstellt ein Kampagnenbriefing mit Ziel, Zielgruppe, Botschaft, Kanalstrategie und Content-Kalender), content-creation, draft-content, email-sequence, competitive-brief, performance-report und seo-audit. Die README listet auf, dass dieses Plugin mit Werkzeugen wie Slack, Canva, Figma, HubSpot und Ahrefs verbunden werden kann. Hier liefert der Skill also die „Methode“ und der Konnektor den „Zugang“.

> **Wusstest du schon?** Videos lassen sich inzwischen nicht mehr nur per Drag and drop auf einer Timeline, sondern auch per Code erzeugen, und genau hier kommen Skills ins Spiel. Das Remotion-Team veröffentlicht für sein React-basiertes Video-Framework ein eigenes offizielles Skill-Set. HeyGen bietet HyperFrames, das auf der Idee „HTML schreiben, Video rendern“ beruht, für Agenten zusammen mit Skills an.

## Für Video: Remotion und HyperFrames

| Paket | Quelle | Was es bietet |
|---|---|---|
| remotion-dev/skills | Remotion-Team (offiziell) | 12 Skills: Videoerstellung, Animationsregeln, Untertitel, Rendern, Vorschau |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skills und fertige Blöcke für das Framework, das HTML in Video verwandelt |

**Remotion:** Laut README führt Remotion eine Liste von Agent Skills, die die Best Practices für die Arbeit in Remotion-Projekten beschreiben. Im Set sind Skills wie remotion-create, das neue Videos erstellt, remotion-markup, das Wissen zu Animation und Layout trägt, remotion-captions für Transkription und Animation von Untertiteln, remotion-render für den Export und remotion-best-practices, das auf alle verweist. Die Installation erfolgt mit npx skills add remotion-dev/skills.

**HyperFrames:** HeyGens Repository stellt sich als „HTML schreiben, Video rendern, für Agenten gemacht“ vor. Laut README besteht das Kernset aus den Skills hyperframes (Videos erstellen und bearbeiten), hyperframes-cli (Projektgerüst, Vorschau, Rendern), hyperframes-registry (etwa 450 fertige Übergangs-, Titel-, Untertitel- und Grafikblöcke) und media-use (Medienaufgaben wie Musik, Soundeffekte, Bilder, Sprachaufnahmen). Insgesamt gibt es 7 veröffentlichte Skills.

Ein interessantes Detail: Auch die Beschreibung des Video-Skills im Repository von Corey Haines listet Namen wie Remotion, HyperFrames und HeyGen als Auslösewörter auf. Der Marketing-Skill ist also so geschrieben, dass er als Brücke zu den Video-Skills dient.

## Worauf bei der Auswahl achten?

Die meisten Skills in diesem Bereich stammen aus der Community oder von Firmen und werden sehr schnell aktualisiert. Bevor du ein Paket installierst, helfen dir diese drei Fragen: Wem gehört das Repository, und wird es aktiv gepflegt? Enthält die SKILL.md eine Anweisung, die sich mit externen Adressen verbindet oder Zugangsdaten verlangt? Kannst du die wenigen Skills auswählen und installieren, die du wirklich brauchst? Die meisten Installationswerkzeuge erlauben, einen einzelnen Skill statt „alle installieren“ zu wählen, und das verkleinert sowohl den Kontext als auch das Risiko.

Was ist beim Erstellen von Content dein größter Zeitdieb: Texte schreiben, Bilder vorbereiten oder das Video schneiden?
