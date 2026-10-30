---
title: "Skill-Sicherheit: alles, was du vor der Installation lesen solltest"
excerpt: "Skills können Code ausführen und Anweisungen aus externen Quellen laden. Ein Leitfaden zu vertrauenswürdigen Quellen, Prüfung von SKILL.md und Skripten, geringsten Berechtigungen und geheimen Schlüsseln."
hook: "Einen Skill zu installieren heißt, Software zu installieren"
fact: "13,4 %"
factLabel: "Anteil der Skills mit kritischen Schwachstellen (Snyk, 2026)"
category: "Künstliche Intelligenz"
---
Was Skills so mächtig macht, macht sie auch riskant: Ein Skill kann nicht nur Text, sondern auch ausführbaren Code enthalten. Wenn der Agent den Skill lädt, folgt er den darin enthaltenen Anweisungen wie seinen eigenen und kann seine Skripte ausführen. Deshalb lässt sich die Empfehlung der Claude-Dokumentation in einem Satz zusammenfassen: Betrachte die Installation eines Skills wie die Installation von Software.

## Was sagen die offiziellen Quellen?

Der Sicherheitsabschnitt der Claude-Dokumentation ist ziemlich direkt. Er empfiehlt, Skills nur aus vertrauenswürdigen Quellen zu verwenden, also solchen, die du selbst geschrieben oder von Anthropic bezogen hast. Wenn du einen Skill aus einer unbekannten Quelle nutzen musst, sollst du „äußerst vorsichtig“ sein und ihn vor der Verwendung von vorne bis hinten prüfen.

Anthropics Engineering-Beitrag liegt auf derselben Linie: Bei Skills aus weniger vertrauenswürdigen Quellen empfiehlt er, die mitgelieferten Dateien, besonders Code-Abhängigkeiten und Skripte, zu prüfen, außerdem Anweisungen, die zur Verbindung mit externen Netzwerken auffordern. Die Dokumentation hebt ein Risiko besonders hervor: Skills, die Daten von externen Adressen abrufen, sind gefährlich, weil die abgerufenen Inhalte bösartige Anweisungen enthalten können.

## Was passiert in der Praxis?

Diese Warnungen sind nicht theoretisch. Das Sicherheitsunternehmen Snyk hat in seiner am 5. Februar 2026 veröffentlichten Untersuchung „ToxicSkills“ 3.984 Skills aus ClawHub und skills.sh gescannt. Die Ergebnisse:

| Befund | Anzahl |
|---|---|
| Gescannte Skills | 3.984 |
| Mit mindestens einem Sicherheitsproblem | 1.467 (36,82 Prozent) |
| Mit mindestens einem kritischen Problem | 534 (13,4 Prozent) |
| Bestätigte bösartige Nutzlast | 76 |

Laut Bericht umfassen die Daten von skills.sh nur die ausgewählten ersten 100 Skills dieser Seite, die vollständigen Marktzahlen beziehen sich auf ClawHub. Zu den beobachteten Angriffsarten gehören Installationsanweisungen, die Nutzer dazu bringen, nicht vertrauenswürdige Software herunterzuladen und auszuführen, verschleierte Befehle (mit Base64 oder Unicode getarnt), die Zugangsdaten an den Angreifer senden, sowie Versuche, Sicherheitskontrollen abzuschalten und Hintertüren einzurichten. In 91 Prozent der bestätigten bösartigen Skills wurde Prompt Injection eingesetzt.

> **Wusstest du schon?** Laut Claude-Hilfecenter können Enterprise-Organisationen das Skill-Scanning einschalten, das hochgeladene Skills und Plugins auf bösartige Inhalte prüft. Das ist aber ein Sicherheitsnetz und ersetzt das Lesen nicht. Was ein Skill tut, verstehst du am besten, indem du vor der Installation selbst seine SKILL.md und seine Skripte öffnest und liest.

## Checkliste vor der Installation

Eine praktische Liste, die wir aus den Empfehlungen der Dokumentation und den Befunden aus der Praxis abgeleitet haben:

1. **Quelle prüfen.** Wem gehört das Repository? Ist es eine offizielle Firma oder ein bekannter Entwickler, oder eine Kopie, die einem bekannten Paket sehr ähnlich sieht (Typosquatting)?
2. **SKILL.md von vorne bis hinten lesen.** Formulierungen wie „Lade zuerst dies herunter und führe es aus“, „Schalte die Sicherheitseinstellung aus“ oder „Sende es an diese Adresse“ sind Alarmzeichen.
3. **Den Ordner scripts/ untersuchen.** Wenn es Zeilen gibt, die du nicht lesen kannst, die verschleiert oder mit Base64 kodiert sind, installiere nicht.
4. **Externe Verbindungen prüfen.** Wenn der Skill Anweisungen oder Daten von einer Webadresse abruft, denke daran, dass sich dieser Inhalt jederzeit ändern kann.
5. **Installiere, was du brauchst.** Statt „alles installieren“ einzelne Skills auszuwählen, verkleinert sowohl den Kontext als auch die Angriffsfläche.

## Geringste Berechtigungen und geheime Schlüssel

Wichtig ist auch, wo der Skill läuft. Laut Claude-Dokumentation haben Skills in der Claude-API-Umgebung keinen Netzwerkzugriff und können zur Laufzeit keine Pakete installieren. In claude.ai kann der Netzwerkzugriff je nach Nutzer- und Administratoreinstellungen vollständig, teilweise oder ausgeschaltet sein. In Claude Code haben Skills so viel Netzwerkzugriff wie jedes andere Programm auf deinem Computer. Ein Skill, den du bei einem lokalen Agenten installierst, läuft also mit deinen Berechtigungen.

Deshalb ist das Prinzip der geringsten Berechtigung entscheidend. In Claude Code sorgt das Feld allowed-tools im Frontmatter eines Skills dafür, dass bestimmte Werkzeuge ohne Rückfrage genutzt werden, wenn der Skill aufgerufen wird. Laut Dokumentation wird diese Erlaubnis bei deiner nächsten Nachricht zurückgesetzt. Trotzdem ist es eine gute Gewohnheit, einen von jemand anderem geschriebenen Skill mit weitreichenden Berechtigungen nicht zu installieren, ohne sie bewusst zu bestätigen.

Für geheime Schlüssel ist die Regel einfach: Schreibe API-Schlüssel, Passwörter und Zugriffstoken niemals in die SKILL.md oder in den Skill-Ordner. Wenn du den Skill teilst oder in ein Repository schiebst, geht alles in diesem Ordner mit. Halte die Schlüssel in Umgebungsvariablen oder in der sicheren Speichermethode für Zugangsdaten deines Werkzeugs und sage dem Skill nur, wie er darauf zugreift.

Im Oktober 2026 wächst das Skill-Ökosystem sehr schnell, und dieses Wachstum erinnert an die Sicherheitsprobleme der ersten Jahre der App-Stores. Die gute Nachricht: Einen Skill zu lesen ist viel einfacher, als den Quellcode einer App zu lesen, weil er größtenteils aus einfachem Text besteht.

Öffnest du einen Skill und liest ihn, bevor du ihn installierst, oder vertraust du auf die Zahl der Sterne und Downloads?
