---
title: "Mit KI gebaute Lovable-Apps legten Pässe und 200.000 Chats offen"
excerpt: "Die deutsche Sicherheitsfirma Crissy Field konnte die Datenbanken von 24.664 mit Lovable gebauten Seiten ohne Passwort lesen; Passdaten und mehr als 200.000 Chats lagen offen."
hook: "Kein Login, kein Passwort, Daten frei Haus"
fact: "24.664"
factLabel: "Lovable-Seiten, die ohne Login Daten senden"
category: "News"
---
Bei Lovable, der Plattform, die verspricht, Apps ohne Programmierkenntnisse zu bauen, indem man sie einfach einer KI beschreibt, ist ein großes Sicherheitsproblem aufgetaucht. Die deutsche Sicherheitsfirma Crissy Field gab bei einer gemeinsam mit dem Handelsblatt durchgeführten Recherche bekannt, dass sie die Datenbanken tausender mit Lovable gebauter Apps ganz ohne Anmeldung lesen konnte.

## Was sagen die Zahlen?

Im Webarchiv Common Crawl fanden die Forscher 159.041 Lovable-Projekte, die zwischen Dezember 2025 und September 2026 online waren. Davon nutzten 34.545 den Datenbankdienst Supabase, und 24.664 schickten beim Laden der Seite Datenbankeinträge, ohne eine Benutzeranmeldung zu verlangen. Bei zusätzlichen Leseanfragen tauchten auf 7.403 Seiten in 10.560 Tabellen E-Mail-Adressen auf. Die Firma weist darauf hin, dass dies keine gesicherte Leckrate ist und manche Adressen öffentliche Kontaktdaten oder Testdaten sein können.

Offen lagen unter anderem mehr als 1.000 Passdatensätze eines Dienstleisters, über 80.000 Profile und mehr als 200.000 Chatnachrichten eines deutschen Lifestyle-Forums, zehntausende Bestellungen von Veranstaltungen und Restaurants mit Zahlungsinformationen sowie gültige Ticketcodes.

## Woher kam das Problem?

Es gab keinen Angriff auf Lovable oder Supabase. Der Schlüssel, den Supabase an den Browser schickt, ist bewusst öffentlich; der Schutz hängt von den Sicherheitsregeln auf Zeilenebene in der Datenbank ab. Fehlen diese Regeln oder sind sie zu locker, kann jeder, der den Schlüssel sieht, die Tabellen lesen. Lovable sagt, es sehe keinen Fehler in seiner KI, das Problem sei ein branchenweit bekanntes Konfigurationsthema, und verweist auf sein eigenes Sicherheits-Scan-Tool. Ob die Daten missbraucht wurden, ist nicht bekannt.

## Warum ist das wichtig?

KI hat das App-Bauen für alle geöffnet, aber die Sicherheit nicht automatisch mitgeliefert. Wer nicht programmiert, sollte die Zugriffsrechte von einer Fachperson prüfen lassen, bevor echte Kundendaten gesammelt werden. Über eines der ersten Beispiele für Sicherheitslücken in der Computergeschichte lesen Sie in unserem Artikel über das [erste Computerpasswort](/yazi/ilk-bilgisayar-sifresi-ctss/).
