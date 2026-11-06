---
title: "Moonshot gibt die Gewichte von Kimi K3.1 Pro mit 2,8 Billionen Parametern frei"
excerpt: "Das chinesische Unternehmen Moonshot AI hat die Modellgewichte von Kimi K3.1 Pro auf Hugging Face veröffentlicht; die Fähigkeiten für Cyberangriffe wurden laut Firma gezielt gekürzt."
hook: "Angriffsfähigkeit bewusst gekürzt"
fact: "2,8 Billionen"
factLabel: "Gesamtzahl der Parameter"
category: "News"
---
Das chinesische KI-Unternehmen Moonshot AI hat die Gewichte seines Flaggschiffmodells Kimi K3.1 Pro auf Hugging Face veröffentlicht. Laut einem Bericht von TechNode vom 5. November ist das Modell damit nicht mehr nur über die Kimi-Apps und die API zugänglich, sondern kann von jedem auf eigenen Servern betrieben werden. Das Unternehmen hatte das Modell Ende Oktober vorgestellt und angekündigt, die Gewichte bis zum 4. November freizugeben.

## Riesig, aber selektiv

Laut TechNode ist K3.1 Pro ein "Mixture of Experts"-Modell (MoE). Es hat insgesamt rund 2,8 Billionen Parameter, doch bei jeder Antwort sind nur etwa 104 Milliarden davon aktiv. Das Kontextfenster umfasst rund 1 Million Token, und neben Text kann das Modell auch Bilder verarbeiten. Das Training konzentrierte sich auf Programmierung, 3D-Design, Finanzrecherche und lang laufende Agentenaufgaben. Huawei kündigte zudem Unterstützung für den Betrieb des Modells auf seinen eigenen Ascend-Chips an.

Nach Moonshots eigenen Messungen, über die The Next Web berichtet, erreichte das Modell im Terminal-Bench 4.0, der Programmieragenten testet, 65,7 Prozent. Das liegt sehr nah an den 66,4 Prozent von Claude Opus 5.5 und über den 58,2 Prozent von GPT-6 Astra. Außerdem soll die Rate falscher Behauptungen von 23,4 auf 8,3 Prozent gesunken sein. Diese Zahlen sind bisher nicht unabhängig bestätigt.

## Eine absichtlich geschwächte Fähigkeit

Der auffälligste Teil der Meldung betrifft die Sicherheit. Moonshot erklärte, vor der offenen Veröffentlichung Trainingsmaterial zu Cyberangriffen entfernt zu haben. Im internen Test des Unternehmens löste die ungekürzte Version 90,5 Prozent der Aufgaben, bei denen echte Software-Schwachstellen ausgenutzt werden mussten, das veröffentlichte Modell nur 81 Prozent. Fachleute erinnern jedoch daran, dass offene Gewichte nach dem Herunterladen nicht mehr zurückgerufen werden können.

## Warum ist das wichtig?

Der Abstand zwischen offenen Modellen und geschlossenen US-Modellen schrumpft stetig. Für Entwickler ist das eine günstige und flexible Option, für Regulierer ein mächtiges Werkzeug, das immer schwerer zu kontrollieren ist. Wie man KI-Werkzeuge sicher nutzt, erklären wir in unserem Kapitel [Skill-Sicherheit](/yapay-zeka/skill-guvenligi/).
