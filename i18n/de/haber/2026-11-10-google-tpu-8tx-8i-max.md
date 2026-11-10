---
title: "Google stellt zwei neue TPUs vor: die verschlüsselte 8tx und die Doppelchip-8i-Max"
excerpt: "Google hat seine TPU-Familie der achten Generation um die TPU 8tx, die Daten auch während der Verarbeitung schützt, und die TPU 8i Max, die zwei Chips in einem Gehäuse vereint, erweitert."
hook: "Zwei Chips in einem Gehäuse"
fact: "2-fach"
factLabel: "Mehr Speicherbandbreite bei der 8i Max"
category: "News"
---
Google hat am 9. November die achte Generation seiner selbst entwickelten TPU-Beschleuniger (Tensor Processing Unit) um zwei neue Systeme ergänzt: TPU 8tx und TPU 8i Max. Im April hatte das Unternehmen bereits die TPU 8t für das Training und die TPU 8i für die Inferenz vorgestellt. Damit umfasst die Familie innerhalb eines Jahres vier Systeme.

## TPU 8tx: Verschlüsselung während der Verarbeitung

Die TPU 8tx nutzt dasselbe Silizium wie die TPU 8t, ergänzt aber auf Hardwareebene "vertrauliches Rechnen" (Confidential Computing). Ziel ist, dass Daten und Modellgewichte selbst während der Verarbeitung geschützt bleiben. Der Chip wird mit Servern kombiniert, die Prozessoren vom Typ AMD EPYC der 5. Generation verwenden. Google spricht von einer bis zu 2-fach geringeren Latenz als bei der TPU 8t und praktisch keinem Leistungsverlust durch die Sicherheitsschicht; unabhängige Tests dieser Angaben gibt es allerdings noch nicht. Zielgruppe sind regulierte Unternehmen und Behörden, die mit sensiblen Daten arbeiten.

## TPU 8i Max: zwei Chips, ein Gehäuse

Die TPU 8i Max vereint zwei TPU-8i-Chips in einem einzigen Gehäuse. Laut Google verdoppelt das im Vergleich zu einer einzelnen TPU 8i die Rechenleistung, den SRAM-Speicher auf dem Chip und die HBM-Speicherbandbreite. Weil auf derselben Rackfläche doppelt so viel Silizium Platz findet, steigt auch die Rechenleistung pro Quadratmeter und pro Watt im Rechenzentrum. Google-Cloud-Manager Mark Lohmeyer verglich diesen Ansatz damit, einer Autobahn eine neue Spur hinzuzufügen.

Google nannte weder Preise noch einen Termin für die allgemeine Verfügbarkeit oder Angaben zu Regionen. Laut Data Center Knowledge sollen einige Kunden die TPU 8tx in ihren eigenen Rechenzentren installieren können; Google hat das offiziell nicht bestätigt.

## Warum das wichtig ist

Zu Nvidias stärksten Konkurrenten auf dem Chipmarkt gehören Cloud-Unternehmen, die ihre eigenen Chips entwickeln. Dass Google innerhalb eines Jahres vier verschiedene TPU-Systeme herausbringt, zeigt, dass sich spezialisierte Chips inzwischen nach Art der Arbeitslast aufteilen, statt ein einziges Allzweckprodukt zu sein. Zu den bescheidenen Anfängen von Googles Hardware-Abenteuer lesen Sie unseren Artikel über den [Lego-Server](/yazi/google-lego-sunucu/).
