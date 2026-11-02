---
title: "DeepSeek macht Super-Agent quelloffen, der Team-Chats mitliest und Code schreibt"
excerpt: "DeepSeek hat den Code von Super-Agent, einem experimentellen Coding-Agenten, der Anfragen auf GitHub und Feishu verfolgt und Pull Requests öffnet, unter der MIT-Lizenz veröffentlicht."
hook: "Der Code-Agent, der ungerufen zur Arbeit kommt"
fact: "MIT"
factLabel: "Open-Source-Lizenz von Super-Agent"
category: "News"
---
Das chinesische KI-Unternehmen DeepSeek hat am 31. Oktober den Code von Super-Agent, einem experimentellen Coding-Agenten für Softwareteams, auf GitHub veröffentlicht. Laut Bloomberg will das Unternehmen mit diesem Agenten gegen Werkzeuge wie Claude Code von Anthropic antreten.

## Was macht er?

Super-Agent arbeitet für ein einzelnes GitHub-Repository. Er verfolgt die Unterhaltungen auf GitHub und optional die Gruppenchats in Feishu, der Business-Messaging-App von ByteDance. Bittet ein berechtigtes Teammitglied um eine Aufgabe, eröffnet der Agent in seiner eigenen Sitzung einen separaten Task, erledigt die Arbeit und postet das Ergebnis, etwa einen Pull Request, unter die Unterhaltung, aus der die Anfrage kam. Aufgaben, die eine menschliche Entscheidung erfordern, werden in einem Web-Dashboard aufgelistet.

Laut dem Handbuch des Projekts ist das Ziel, Arbeit zu erledigen und dabei vom Team „so wenig Aufmerksamkeit wie möglich“ zu verlangen. Das Philosophie-Dokument von DeepSeek betont, dass der Agent nur handelt, wenn er darum gebeten wird oder eine vom Team festgelegte Regel es erlaubt. Das Unternehmen warnt, dass ein Agent, der im Namen eines ganzen Teams arbeitet, auch die Aufmerksamkeit dieses Teams verschwenden kann.

Der Code wurde unter der MIT-Lizenz veröffentlicht; jeder kann ihn also herunterladen, verändern und kommerziell nutzen. Das Repository sammelte innerhalb von zwei Tagen nach der Veröffentlichung mehr als 9.000 Sterne.

## Wo liegen die Grenzen?

DeepSeek bezeichnet Super-Agent als „Forschungsprototyp“ und schreibt ausdrücklich, dass es sich nicht um ein offizielles Produkt handelt. Die Open-Source-Version ist nicht dieselbe wie die, die das Unternehmen intern nutzt. Einige Ideen aus dem Ankündigungstext sind noch nicht im Code. Das Dokument räumt zudem ein, dass schwierige Fragen wie Berechtigungen, Prüfung und Vertrauen nicht gelöst sind; Nutzer werden gebeten, den Code vor dem Ausführen zu prüfen.

## Warum ist das wichtig?

Coding-Agenten waren bisher meist Werkzeuge, die auf den Befehl eines einzelnen Entwicklers warten. Super-Agent erprobt dagegen die Idee eines „Teamkollegen“, der sich im Chat des Teams einrichtet und Arbeit selbst übernimmt, und macht das offen, sodass es jeder prüfen kann. Setzt sich die Idee durch, rückt die Frage, wie viele Befugnisse man Agenten gibt, ganz oben auf die Tagesordnung von Softwareteams. Dass der erste „Bug“ der Software eine echte Motte war, haben wir in unserem Artikel [Die Motte von 1947](/yazi/ilk-bilgisayar-bocegi-1947/) erzählt.
