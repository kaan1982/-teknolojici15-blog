---
title: "Chinas Zhipu bringt GLM-5.4, ein Modell, das seine Schichten zweimal durchläuft"
excerpt: "Zhipus GLM-5.4 überträgt die Loop-Transformer-Architektur, die 28 Schichten in zwei Durchgängen ausführt, auf ein großes Modell; dazu kommen 1 Million Token Kontext und Bildeingabe."
hook: "Ein Modell, das dieselben Schichten zweimal durchläuft"
fact: "750 Milliarden"
factLabel: "Parameter des Basismodells"
category: "News"
---
Das chinesische KI-Unternehmen Zhipu (Z.ai) hat am 23. November sein Modell GLM-5.4 freigegeben. Die eigentliche Neuheit steckt in der Architektur: Es ist das erste "Loop Transformer"-Flaggschiff des Unternehmens.

## Wozu dient die Schleife?

In einem klassischen Sprachmodell läuft jede Schicht genau einmal. GLM-5.4 dagegen führt die 28 Schichten des GLM-5-Basismodells mit rund 750 Milliarden Parametern in zwei Durchgängen aus; der zweite Durchgang verarbeitet die Zwischenergebnisse des ersten erneut und verbessert sie. So kann das Modell "tiefer" denken, ohne neue Gewichte hinzuzufügen. Zhipu zufolge erreicht es damit ein Intelligenzniveau, das mit Modellen mit 2 bis 3 Billionen Parametern vergleichbar ist. Laut dem Unternehmen erledigt das Modell außerdem in Tests wie GPQA-Diamond und MMLU-Pro dieselbe Arbeit mit 10 bis 14 Prozent kürzeren Antworten.

Das Modell bietet ein Kontextfenster von 1 Million Token und kann nun auch Bilder lesen: Entwickler können einen Screenshot einer fehlerhaften Oberfläche zusammen mit dem Code übergeben.

## Wo lässt es sich nutzen?

GLM-5.4 ist vorerst über das Abo GLM Coding Plan, das Programmierwerkzeug ZCode und die Chat-Website von Z.ai verfügbar. Laut WinBuzzer wurde das Kontingent der Abonnenten um 50 Prozent erhöht, und die Kosten für 10.000 Eingabe-Token sanken von 6,9 auf 4,6 Credits. Eine allgemeine API und offene Gewichte sollen nach einer Sicherheitsprüfung folgen.

Unabhängige Messungen fallen vorsichtiger aus: Im von WinBuzzer zitierten Programmiertest KingBench 4 landete das Modell unter 19 Modellen auf Platz sieben und erzielte 55,3 Prozent der Punkte. Detaillierte Testergebnisse hat das Unternehmen noch nicht veröffentlicht.

## Warum ist das wichtig?

Schichten in eine Schleife zu schicken, entwickelt sich zu einem neuen Weg, Modelle stärker zu machen, ohne sie zu vergrößern, und ein chinesisches Unternehmen gehört zu den Ersten, die das in großem Maßstab erproben. Wie groß ein Kontext von 1 Million Token ist, zeigt ein Blick auf [die erste Diskette mit 80 KB](/yazi/ilk-disket-ibm-1971-80-kb/).
