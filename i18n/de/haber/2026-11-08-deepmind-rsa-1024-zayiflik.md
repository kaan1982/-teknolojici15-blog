---
title: "KI-Agenten von DeepMind finden zwei Schwachstellen in alter 1024-Bit-RSA-Verschlüsselung"
excerpt: "Google DeepMind meldet, dass KI-Agenten unter menschlicher Aufsicht zwei Schwachstellen im alten 1024-Bit-RSA gefunden haben; Schlüssel ab 2048 Bit sind nicht betroffen."
hook: "Zwei Kryptoanalyse-Schritte in Wochen"
fact: "~1.600-fach"
factLabel: "Theoretischer Gewinn, 32-Byte-Szenario"
category: "News"
---
Google DeepMind hat am 6. November bekanntgegeben, dass KI-Agenten zwei bedeutende Schwachstellen in alten 1024-Bit-RSA-Verschlüsselungssystemen gefunden haben. Die Agenten arbeiteten unter menschlicher Aufsicht. Geleitet wurde die Studie von Dj Dvijotham und Abhradeep Thakurta von DeepMind; zum Team gehörten auch die Kryptoanalyse-Experten Nadia Heninger (UC San Diego und Inria) und Emmanuel Thomé (Inria).

## Erste Schwachstelle: das Padding in Signaturen

Bei digitalen Signaturen wird der Nachricht ein fester Datenblock, das sogenannte "Padding", hinzugefügt. Laut der Studie bietet das Padding kaum zusätzlichen Schutz, wenn ein Angreifer etwa die Hälfte oder mehr des signierten Blocks kontrollieren kann. Die Agenten testeten dies in einer abgeschotteten Umgebung an einem 1024-Bit-Testschlüssel, der bereits in einer früheren akademischen Arbeit geknackt worden war. Das Ergebnis wurde mit 3,5-mal weniger Prozessorzeit und mit weniger als einem Tausendstel der Rechenleistung reproduziert, die für das direkte Knacken des Schlüssels nötig wäre.

Im schwierigeren Szenario, in dem der Angreifer nur einen 32 Byte langen Fingerabdruck kontrolliert, fanden die Agenten einen neuen Algorithmus. Er soll gegenüber der besten bekannten Methode eine Verbesserung um etwa das 1.600-Fache bringen; diese Zahl ist eine theoretische Berechnung, keine gemessene Geschwindigkeit.

## Zweite Schwachstelle: Faktorisierung im Paket

Da RSA-Schlüssel meist gleich groß sind, lässt sich eine große Vorberechnung auf viele Schlüssel verteilen. Mit dem von den Agenten gefundenen Algorithmus sinken die durchschnittlichen Kosten für die Faktorisierung jedes weiteren 1024-Bit-Schlüssels gegenüber früheren Paketverfahren um etwa das 30-Fache.

DeepMind betont, dass die Ergebnisse die heutige Verschlüsselung nicht betreffen. Banken, Messenger und Software-Updates nutzen fast überall Schlüssel mit 2048 Bit oder mehr. Pushmeet Kohli, Vizepräsident für Wissenschaft bei dem Unternehmen, sagte, KI-gestützte Kryptoanalyse könne helfen, künftige Systeme zu prüfen.

## Warum ist das wichtig?

Fortschritte in der Kryptoanalyse dauern meist Jahre. Dass KI-Agenten dies auf Wochen verkürzen, zeigt, dass Systeme, die noch alte Schlüssel verwenden, ihre Umstellung beschleunigen sollten. Die kurze Geschichte der Passwörter erzählen wir in unserem Artikel über das [erste Computerpasswort](/yazi/ilk-bilgisayar-sifresi-ctss/).
