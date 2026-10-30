---
title: "Der Computer von Apollo 11: Was „4 KB Speicher“ wirklich bedeutet"
excerpt: "Der Computer, der Apollo 11 auf dem Mond landen ließ, hatte etwa 4 KB RAM. Die Programme lagen in einem handgewebten ROM von rund 72 KB."
hook: "Sie landeten mit 4 KB RAM auf dem Mond"
fact: "4 KB"
factLabel: "Löschbarer Speicher (RAM) des AGC"
category: "Computer"
---
Den Satz „Der Speicher des Computers auf dem Weg zum Mond war kleiner als ein Foto“ hast du bestimmt schon gehört. Im Video haben wir auch „4 KB“ gesagt. Die Zahl stimmt, ist aber allein genommen unvollständig. Denn der Apollo Guidance Computer (kurz AGC) hatte eigentlich zwei getrennte Speicher, und „4 KB“ beschreibt nur den kleineren davon.

Lass uns diese berühmte Zahl gemeinsam aufschlüsseln.

## Was bedeutet „4 KB“ genau?

Der Arbeitsspeicher des AGC, also der löschbare Speicher, den wir heute RAM nennen würden, bestand aus 2.048 „Wörtern“. Jedes Wort war 16 Bit lang: 15 Bit Daten und 1 Paritätsbit zur Fehlerkontrolle. Rechnet man ein Wort als 2 Byte, sind 2.048 Wörter etwa 4 KB. „4 KB“ ist also die Größe des Schmierzettels, den der Computer im Flug zum Rechnen benutzte.

Programme lagen in diesem Speicher nicht. Dort wurden aktuelle Position, Geschwindigkeit, Zähler und Zwischenergebnisse gehalten, die zwischen den Aufgaben weitergereicht wurden. Der Speicher bestand aus winzigen Ringen, sogenannten Magnetkernen (Core), und behielt seinen Inhalt auch bei Stromausfall.

Die Programme steckten ganz woanders: im Festwertspeicher, also im ROM, mit 36.864 Wörtern. Nach derselben Rechnung sind das etwa 72 KB. Kurz gesagt, der treffendere Satz lautet: Apollo 11 landete mit etwa 4 KB RAM und etwa 72 KB ROM auf dem Mond.

## Die Programme waren gewebt

Das ROM des AGC war ein „Core Rope“ (Kernseil), und es wurde buchstäblich von Hand gewebt. Verlief ein Draht durch einen Magnetkern, war das Bit eine 1, verlief er daran vorbei, eine 0. Software wurde also wie Stoff gewebt und so in Hardware verwandelt.

Diese Arbeit erledigten Beschäftigte von Raytheon in Waltham, Massachusetts. Laut der ausführlichen Untersuchung von Ken Shirriff kam ein großer Teil der Angestellten wegen ihrer Nähkünste aus der örtlichen Textilbranche, und es waren Frauen. Ein einziges Modul zu weben dauerte etwa 8 Wochen und kostete 15.000 Dollar. Jedes Modul fasste 6 Tausend Wörter, und sechs Module ergaben zusammen die 36.864 Wörter.

Das hatte eine wichtige Nebenwirkung: Die Software musste Monate vor dem Flug eingefroren werden. Einen Patch in letzter Minute gab es nicht, denn einen Fehler zu beheben hieß, neu zu weben.

> **Wusstest du schon?** Bei Apollo 11 gab es nicht einen, sondern zwei AGC: einen in der Kommandokapsel und einen in der Mondlandefähre. Jeder wog etwa 32 kg und arbeitete mit einem Quarztakt von 2,048 MHz.

## Der Alarm wenige Minuten vor der Landung

Bei der Landung am 20. Juli 1969 meldete der Computer der Mondfähre zunächst den Alarm 1202, dann 1201. Beide bedeuteten „Executive Overflow“: Dem Computer wurde mehr Arbeit aufgeladen, als er tragen konnte. Laut der ausführlichen Darstellung bei Wikipedia lag die Ursache darin, dass falsche Signale des in Bereitschaft geschalteten Rendezvous-Radars den Prozessor beschäftigten. Das Problem war weder ein Programmierfehler noch ein Pilotenfehler noch ein Hardwaredefekt. Es entstand im Kern aus einem Mangel im Schnittstellendokument zwischen zwei Systemen.

Das eigentlich Interessante ist, was die Software in dieser Lage tat. Der AGC arbeitete mit einem prioritätsbasierten Scheduler. Bei Überlast startete er sich rasch neu, ließ Aufgaben mit niedriger Priorität fallen und führte kritische Aufgaben wie die Steuerung der Landung weiter. Der berühmte kleine Speicher reichte also, weil er klug verwaltet wurde.

Ein weiteres Detail machte die Sache noch schwieriger. Der Befehl 1668, den Buzz Aldrin bei der Landung in den Computer eingab, belastete den ohnehin geforderten Prozessor zusätzlich und löste einen weiteren 1202-Alarm aus. Die Software überstand auch das auf dieselbe Weise, und der Adler (Eagle) setzte auf der Mondoberfläche auf.

Die Software wurde im MIT-Instrumentierungslabor entwickelt. Die Software der Kommandokapsel (COLOSSUS) und die der Mondfähre (LUMINARY) wurden von verschiedenen Teams betreut. Die Umsetzung der Details lag bei dem Team, das Margaret Hamilton leitete.

## Damals / heute

| Apollo Guidance Computer (1969) | Das Handy von heute |
|---|---|
| Etwa 4 KB löschbarer Speicher (RAM) | Gigabytes an RAM |
| Etwa 72 KB handgewebtes ROM | Hunderte Gigabyte Speicherplatz |
| Monatelanges Weben für ein Software-Update | Updates, die nachts von selbst kommen |
| Etwa 32 kg | Passt in die Handfläche |

## Die eigentliche Lehre der Zahl

Die Zahl „4 KB“ wird meist erzählt, um zu zeigen, wie primitiv alles war. Dabei ist der Kern der Geschichte das Gegenteil: Der knappe Speicher zwang die Ingenieure, über jedes einzelne Bit Rechenschaft abzulegen. Deshalb entstand eine Software, die Aufgaben priorisiert und sich bei Überlast selbst wieder fängt.

Die Geräte in unserer Tasche haben heute unvergleichlich mehr Speicher, aber die meisten Apps werden nicht mit so viel Sorgfalt geschrieben. Schon ein einziges Update einer Messenger-App kann um ein Vielfaches größer sein als die gesamte Software von Apollo.

Was meinst du: Bringen Grenzen die besseren Ingenieure hervor, oder ist es der Überfluss?
