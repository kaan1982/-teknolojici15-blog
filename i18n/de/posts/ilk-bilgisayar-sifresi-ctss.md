---
title: "Das erste Computerpasswort wurde schon im ersten Jahr gestohlen"
excerpt: "Das CTSS des MIT brachte das Passwort an den Computer. Kurz darauf druckte ein Doktorand alle Passwörter aus. Die Geschichte des ersten Passworts und seines ersten Hacks."
hook: "Das erste Passwort war das erste, das gehackt wurde"
fact: "1962"
factLabel: "Der erste bekannte Passwortdiebstahl"
category: "Premieren"
---
Das Passwort, das du jeden Tag dutzende Male tippst, hat einen Geburtsort: einen einzigen riesigen Computer am MIT in den frühen 1960er-Jahren. Noch interessanter: Die ersten bekannten Computerpasswörter der Welt wurden kurz nach ihrer Einführung gleich in großer Zahl gestohlen. Und zwar nicht von einer Hackerbande, sondern von einem Doktoranden, der mehr Computerzeit wollte.

## Ein Computer, Dutzende Nutzer

In den frühen 1960er-Jahren waren Computer Maschinen, die Räume füllten und immer nur eine Aufgabe auf einmal erledigten. Man stanzte sein Programm auf Lochkarten, stellte sie in die Warteschlange und bekam das Ergebnis Stunden später. Am MIT wollte das Team um Fernando Corbató das ändern: ein System, in dem viele Menschen dieselbe Maschine gleichzeitig über Terminals nutzen können, die „Time-Sharing“.

Dieses System hieß CTSS (Compatible Time-Sharing System). Erstmals vorgeführt wurde es im November 1961 auf dem umgebauten IBM 709 des MIT, in den folgenden Jahren lief es auf IBM 7094. Wie auch Wikipedia berichtet, gilt CTSS als das erste Computersystem, das die Anmeldung per Passwort umsetzte.

## Warum brauchte man ein Passwort?

Das Problem war einfach: Auf derselben Maschine lagen die Dateien und die zugeteilte Rechenzeit von Dutzenden Menschen. Man brauchte eine Möglichkeit, zu unterscheiden, wer wer war. Corbató erzählte Wired Jahre später, jedem Nutzer ein Passwort als Schloss zu geben, habe wie eine „sehr einfache Lösung“ ausgesehen.

Corbató war auch beim Anspruch auf das „Erste“ vorsichtig. Er sagte, das Buchungssystem Sabre von IBM von 1960 habe wahrscheinlich ebenfalls Passwörter benutzt, aber da dazu keine Aufzeichnungen erhalten sind, weiß man nichts Sicheres. Auch dazu, in welchem Jahr genau Passwörter in CTSS aufgenommen wurden, sagen die Quellen Unterschiedliches. Was wir wissen: Im Frühjahr 1962 lief das Passwortsystem, denn in jenem Frühjahr wurde es gestohlen.

## Allan Scherrs Plan für einen Freitagabend

Allan Scherr war ein Doktorand am MIT und ließ komplexe Simulationen laufen. Laut Wired standen ihm auf CTSS nur vier Stunden pro Woche zu (manche Quellen sagen vier Stunden pro Tag). Das reichte ihm nicht.

Seine Lösung war schlau und zugleich ein bisschen frech. Er nutzte die Funktion des Systems zum Offline-Drucken von Dateien und bereitete eine Lochkarte vor, die einen Ausdruck der Passwortdatei verlangte. Die Karte reihte er an einem Freitagabend spät ein, und am Samstagmorgen holte er früh den Ausdruck ab. Nun hatte er die Passwörter aller im System.

Um seine Spuren zu verwischen, teilte er die Passwörter auch mit anderen Nutzern. Laut Wired ging einer von ihnen, J.C.R. Licklider, in das Konto des Laborleiters Robert Fano und hinterließ spöttische Nachrichten. Scherr wurde nie erwischt und gestand Fano die Sache selbst etwa ein Vierteljahrhundert nach dem Vorfall. Fano versicherte ihm, dass ihm der Doktortitel nicht aberkannt werde.

> **Wusstest du schon?** Das war nicht die einzige Passwortkrise bei CTSS. 1966 wurden durch den Fehler eines Administrators die Passwortdatei und die Datei mit der „Nachricht des Tages“ vertauscht, und jeder, der sich anmeldete, sah sämtliche Passwörter offen auf dem Bildschirm. Laut dem Systementwickler Tom Van Vleck wurde dieser Vorfall zum Ausgangspunkt der Idee, Passwörter nur einseitig verschlüsselt zu speichern. Der Vorfall ereignete sich allerdings an einem Freitag um fünf Uhr abends, und Van Vleck musste stundenlang Passwörter ändern.

## Damals und heute

| Damals (1960er) | Heute |
|---|---|
| Passwörter im Klartext in einer einzigen Datei | Passwörter als einseitige Hashes |
| Eine Lochkarte reichte für einen Ausdruck | Zugriffsprotokolle, Berechtigungsebenen |
| Ziel: Rechenzeit verteilen | Ziel: Identität, Geld, persönliche Daten schützen |
| Eine Maschine, ein Campus | Dutzende Konten pro Person |

Diese Geschichte ist heute noch lehrreich, weil das Passwort seit dem Tag seiner Erfindung am menschlichen Verhalten gemessen wird. Scherr führte keinen komplizierten Angriff aus, er nutzte nur eine Funktion, die das System ohnehin bot, auf unerwartete Weise. Auch heute entsteht ein wichtiger Teil der Datenlecks aus ähnlich simplen Fehlern.

Corbató erhielt für seine Arbeiten zum Time-Sharing 1990 den Turing Award. Das Schloss, das sein Team als „einfache Lösung“ hinzufügte, steht heute an jeder Tür, von deiner E-Mail bis zu deiner Bank, und das schwächste Glied ist noch immer meist der Mensch, der das Schloss benutzt.

Meinst du, wir sind bereit, Passwörter ganz aufzugeben und komplett auf Biometrie oder Passkeys umzusteigen?
