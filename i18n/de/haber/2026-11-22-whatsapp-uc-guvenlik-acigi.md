---
title: "WhatsApp schließt drei Sicherheitslücken: eine wurde womöglich für Betrug genutzt"
excerpt: "WhatsApp hat drei Sicherheitslücken behoben, darunter eine Android-Lücke, die IP-Informationen preisgeben konnte und mutmaßlich in einer Betrugskampagne eingesetzt wurde."
hook: "Eine Nachricht konnte Ihre IP verraten"
fact: "3 Lücken"
factLabel: "Im November geschlossene Sicherheitslücken"
category: "News"
---
Mit am 20. November veröffentlichten Sicherheitshinweisen gab WhatsApp bekannt, drei Lücken geschlossen zu haben. Eine davon ist ein Android-Fehler, von dem das Unternehmen vermutet, dass er in einer Betrugskampagne genutzt wurde.

## Um welche Lücken geht es?

Die erste wird unter der Kennung CVE-2026-23871 geführt und betrifft WhatsApp und WhatsApp Business für Android vor Version 2.26.17.4. Wie Business Upturn berichtet, wurden externe Adressen in Antworten auf "Click to WhatsApp"-Anzeigen nicht ausreichend geprüft. Erschien eine speziell präparierte Nachricht im Chat, konnte das Gerät seine IP-Informationen dem Gegenüber offenlegen. WhatsApp erklärte, den Fehler beim Versuch entdeckt zu haben, eine Betrugskampagne zu stoppen, und geht davon aus, dass ein Betrüger ihn nutzte, um seine gefälschte Nachricht glaubwürdiger wirken zu lassen. Wie viele Menschen betroffen waren, wurde nicht mitgeteilt.

Die zweite Lücke, CVE-2026-102769, ist eine SQL-Injection in Android-Versionen vor 2.26.35.74. Tippte man auf eine gefälschte Bestellnachricht, die aus einer inoffiziellen App gesendet wurde, konnten einige Dateien gelöscht werden, die WhatsApp auf dem Telefon speichert. Diese Lücke meldete ein Forscher über Metas Bug-Bounty-Programm.

Die dritte, CVE-2026-44908, betrifft die Zertifikatsprüfung bei der Verbindung zur vertraulichen Recheninfrastruktur von Meta AI und betraf die Apps für Android, iOS und Mac. Um sie auszunutzen, hätte sich ein Angreifer innerhalb von Metas eigener Infrastruktur befinden müssen. WhatsApp gibt an, keine Hinweise darauf gefunden zu haben, dass die beiden letzten Lücken bei echten Angriffen genutzt wurden.

## Was ist zu tun?

Der Rat des Unternehmens ist einfach: WhatsApp und das Betriebssystem des Telefons aktuell halten. Im App Store nach Updates zu suchen, reicht aus, um diese Lücken zu schließen.

## Warum ist das wichtig?

Bei einer App, die Milliarden Menschen nutzen, kann eine geleakte IP-Adresse eine grobe Standortbestimmung ermöglichen und gezieltem Betrug die Tür öffnen. Bemerkenswert ist, dass Betrüger nicht mehr nur auf gefälschte Nachrichten setzen, sondern auch auf Fehler in der App selbst. Die Gründungsgeschichte von WhatsApp haben wir in [unserem Artikel über Brian Acton](/yazi/whatsapp-brian-acton-facebook-reddi/) erzählt.
