---
title: "Vier KI-Riesen einigen sich auf ein robots.txt-Signal: „Trainiere nicht mit mir“"
excerpt: "OpenAI, Google, Microsoft und Anthropic unterstützen ein gemeinsames robots.txt-Signal, mit dem Websites sich mit einer Zeile vom KI-Training abmelden können."
hook: "Mit einer Zeile Nein zur KI"
fact: "4 Firmen"
factLabel: "Konzerne hinter dem gemeinsamen Signal"
category: "News"
---
OpenAI, Google, Microsoft und Anthropic haben am 30. Oktober angekündigt, ein gemeinsames Signal zu unterstützen, mit dem Websites ihre Inhalte mit einer einzigen Einstellung vom KI-Training ausschließen können. Bisher musste ein Seitenbetreiber den Crawler jedes Unternehmens einzeln in der Datei robots.txt sperren.

## Was ist passiert?

Das neue Signal heißt `__usage_ai-training`. Der Betreiber trägt es wie eine gewöhnliche Regel in die robots.txt ein und sagt damit: „Verwende meine Inhalte nicht zum Training von KI-Modellen.“ Der Vorschlag wurde als Entwurf von Kevin Kelley, bei Anthropic für Standards zuständig, bei der Internet Engineering Task Force (IETF) eingereicht. Ein fertiger Standard ist er noch nicht; wird der Entwurf nicht aktualisiert, läuft er im Mai 2027 aus.

Die Zeitpläne der Firmen unterscheiden sich. Anthropic gab an, mit der Umsetzung begonnen zu haben. Die Unterstützung von OpenAI soll in den kommenden Monaten kommen. Google und Microsoft peilen 2027 an. Microsoft ergänzt für Bing außerdem eine eigene Steuerung, die Training von „Grounding“ trennt, also davon, dass ein Chatbot beim Antworten eine Quelle heranzieht. Google erklärte, Websites, die dieses Signal nutzen, aber keine eigene Google-Extended-Regel haben, so zu behandeln, als hätten sie Google-Extended gesperrt. Meta zeigte Interesse an einem gemeinsamen Signal, sagte aber nicht, ob es sich daran halten wird.

## Warum ist das wichtig?

Verlage beklagen seit Jahren, dass ihre Inhalte ohne Erlaubnis zum Training von Modellen genutzt werden; die New York Times hat OpenAI deshalb verklagt. Ein einzeiliges Signal macht kleinen Seitenbetreibern das Leben deutlich leichter. Es hat aber Grenzen: Die Einhaltung ist freiwillig, es gibt weder Kontrolle noch Sanktionen, und kleinere Labore sowie Open-Source-Projekte sind nicht Teil der Vereinbarung. Zudem deckt das Signal nur das Training ab; Probleme wie KI-Zusammenfassungen, die weniger Besucher auf Websites schicken, berührt es nicht.

## Ein Blick in die Geschichte

Die robots.txt-Regel entstand 1994, als das Web noch sehr jung war, um Bots zu sagen: „Hier nicht hinein.“ Wo das Web begann, erzählen wir in unserem Beitrag [Die erste Website ist immer noch online: die Geschichte von info.cern.ch](/yazi/ilk-web-sitesi-hala-yayinda-1991/). Dreißig Jahre später ist dieselbe kleine Datei zum Verhandlungstisch des KI-Zeitalters geworden.
