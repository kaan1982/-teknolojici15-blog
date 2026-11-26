---
title: "OpenAI: GPT-6 hat ein Protein selbst entworfen, 35 von 322 Versuchen hielten im Labor"
excerpt: "OpenAI erklärt, dass die allgemein einsetzbaren GPT-6-Modelle Proteinformen entworfen haben, ohne ein spezielles Biologiemodell aufzurufen; im Labor banden 35 von 322 Entwürfen an ihr Ziel."
hook: "Ein Chatmodell entwirft ein Protein"
fact: "35/322"
factLabel: "Entwürfe, die im Labor banden"
category: "News"
---
In einem am 24. November veröffentlichten Preprint hat OpenAI angekündigt, dass seine allgemein einsetzbaren GPT-6-Modelle Proteine entwerfen können. Der entscheidende Punkt der Behauptung: Das Modell erzeugt dreidimensionale Proteinformen, ohne speziell dafür gebaute Biologiemodelle aufzurufen, indem es nur in Text denkt und selbst geschriebenen Code ausführt.

## Was ist im Labor passiert?

Proteine bestehen aus Ketten von Bausteinen, den Aminosäuren; die Reihenfolge der Kette bestimmt, wie sich das Protein faltet, und die Faltung bestimmt, was es tut. Gemeinsam mit seinem Forschungspartner Onava hat OpenAI die von GPT-6.2 entworfenen kleinen Proteine (Minibinder) wirklich hergestellt und getestet.

Das Ergebnis: Von 322 Entwürfen, die gegen fünf Ziele getestet wurden, banden 35, also 10,9 Prozent, an ihr Ziel. Die Ziele waren PD-L1, IL-7Rα, TrkA, VEGF-A und IL-17A; 18 der Binder entfielen allein auf IL-17A. Bei leichteren Aufgaben, etwa dem Schreiben einer neuen Aminosäuresequenz auf eine bestehende Struktur, lag die Quote viel höher: Beim Neuentwurf von Antikörperschleifen banden 128 von 182 Teilen, bei therapeutischen Antikörperfragmenten 179 von 272.

## Was sollte man nicht übertreiben?

Das Modell hat die Form der Kette erzeugt, der Rest der Arbeit blieb aber bei den alten Werkzeugen: Die Sequenzen schlugen SolubleMPNN und ProteinMPNN vor, und Boltz-2, OpenDDE sowie ESMFold2 filterten, welche Kandidaten auf die Laborbank kamen. OpenAI schreibt selbst, es sei nicht belegt, dass seine Modelle ein Protein von Anfang bis Ende allein erzeugen können.

Bei der Vorhersage der gesamten Proteinstruktur aus einer Sequenz ist das Modell weiter schwach: Der mittlere TM-Wert liegt beim internen Modell bei 0,38, beim Spezialmodell ESMFold2 bei 0,93. Die stärksten Messergebnisse stammen zudem von einem nicht genannten internen Modell, an das niemand herankommt, und keines davon wurde außerhalb des Unternehmens überprüft.

## Warum ist das wichtig?

Das Binden ist der erste Schritt auf dem Weg zu einem Medikament; Tests auf Selektivität, Stabilität und Sicherheit kommen danach. Dass ein allgemein einsetzbares Modell trotzdem in einem Feld etwas leistet, das seit Jahren speziell trainierten Modellen gehört, könnte verändern, wie Laborsoftware künftig aufgebaut wird. Im selben Text sagt OpenAI auch, dass diese Fähigkeit missbraucht werden könnte und dass es die Biosicherheitsrisiken nach dem eigenen Rahmenwerk bewertet hat. Wenn Sie wissen wollen, wie Computer als Rechenmaschine der Wissenschaft begannen, finden Sie [die Geschichte des 30 Tonnen schweren ENIAC](/yazi/eniac-30-ton/) hier.
