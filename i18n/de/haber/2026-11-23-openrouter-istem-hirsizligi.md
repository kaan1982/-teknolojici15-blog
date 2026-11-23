---
title: "Vermittler lasen KI-Anfragen mit: OpenRouter wirft 3 Anbieter raus"
excerpt: "Eine Studie von Dragos mit 2 Millionen Köder-Anfragen deckte Prompt- und Schlüsseldiebstahl bei günstigen KI-Anbietern auf; OpenRouter entfernte 3 Anbieter."
hook: "Ihre Frage liest vielleicht jemand mit"
fact: "2 Millionen"
factLabel: "In der Studie gesendete Köder-Anfragen"
category: "News"
---
Das Cybersicherheitsunternehmen Dragos hat ein ungewöhnliches Experiment durchgeführt, um zu messen, in wessen Hände Anfragen an KI-Modelle unterwegs gelangen. Die Ergebnisse brachten OpenRouter, das verschiedene Modelle über eine einzige Schnittstelle anbietet, zum Handeln: Die Plattform entfernte drei Anbieter aus ihrer Liste und entzog 125 Endpunkten die Freigabe "Zero Data Retention".

## Wie lief das Experiment ab?

Zwischen Juli und November 2026 schickten die Forscher rund 2 Millionen Anfragen. In jede Anfrage bauten sie gefälschte Passwörter und versteckte Links ein, die sich verraten, sobald jemand sie benutzt, also "Kanarienvogel"-Fallen. Laut The Decoder stellte sich heraus, dass mindestens drei Anbieter von Angreifern übernommen worden waren und Daten monatelang gestohlen wurden. Keiner der Anbieter wusste davon, bis Dragos sie informierte.

Beim größten Vorfall sammelten die Angreifer Hunderte AWS-Schlüssel und probierten einige davon innerhalb weniger Stunden aus. Manche Vermittler, die wie ein Marktplatz arbeiten, mussten nicht einmal eine Lücke finden: Es reichte, das Modell zum günstigsten Preis anzubieten und die Protokollierung einzuschalten, um Kundenanfragen zu lesen. Auch Einstellungen mit dem Versprechen "Wir speichern keine Daten" wurden häufig gebrochen.

## Was hat OpenRouter getan?

Das Unternehmen schrieb betroffenen Nutzern per E-Mail, dass ihre Anfragen an MiniMax-Modelle möglicherweise von Dritten gelesen wurden. Anbieter wie Novita, Phala und Together veröffentlichten vorläufige Untersuchungsberichte.

## Warum ist das wichtig?

Jedes Passwort, jedes Codestück und jedes Firmendokument, das in einen KI-Chat eingefügt wird, kann auf dem Weg zum Modell mehrere Vermittler passieren, und jeder Vermittler kann die gesamte Anfrage sehen. Der Rat von Dragos ist eindeutig: niemals echte Zugangsdaten in Anfragen schreiben und den Weg der Daten nicht dem Preis überlassen. Wer wissen will, wie das Passwort entstand, wirft einen Blick auf [unseren Beitrag über das erste Computerpasswort](/yazi/ilk-bilgisayar-sifresi-ctss/).
