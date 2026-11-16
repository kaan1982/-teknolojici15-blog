---
title: "Met AI gebouwde Lovable-apps lieten paspoorten en 200.000 chats openliggen"
excerpt: "Het Duitse beveiligingsbedrijf Crissy Field kon de databases van 24.664 met Lovable gebouwde sites zonder wachtwoord lezen; paspoortgegevens en meer dan 200.000 chats lagen open."
hook: "Geen login, geen wachtwoord, data klaar"
fact: "24.664"
factLabel: "Lovable-sites die zonder login data sturen"
category: "Nieuws"
---
Bij Lovable, het platform dat belooft dat je zonder programmeerkennis apps kunt maken door ze simpelweg aan een AI te beschrijven, is een groot beveiligingsprobleem aan het licht gekomen. Het Duitse beveiligingsbedrijf Crissy Field maakte na onderzoek samen met de zakenkrant Handelsblatt bekend dat het de databases van duizenden met Lovable gebouwde apps kon lezen zonder in te loggen.

## Wat zeggen de cijfers?

De onderzoekers vonden in het webarchief Common Crawl 159.041 Lovable-projecten die tussen december 2025 en september 2026 online stonden. Daarvan gebruikten er 34.545 de databasedienst Supabase, en 24.664 stuurden databaserecords mee bij het openen van de pagina, zonder dat de gebruiker hoefde in te loggen. Bij extra leesverzoeken doken op 7.403 sites in 10.560 tabellen e-mailadressen op. Het bedrijf merkt op dat dit geen exact lekpercentage is: sommige adressen kunnen openbare contactgegevens of testdata zijn.

Wat openlag, omvat meer dan 1.000 paspoortrecords van een dienstverlener, meer dan 80.000 profielen en meer dan 200.000 chatberichten van een Duits lifestyleforum, tienduizenden bestellingen met betaalgegevens van evenementen en restaurants, en geldige ticketcodes.

## Waar komt het probleem vandaan?

Er is geen aanval op Lovable of Supabase geweest. De sleutel die Supabase naar de browser stuurt, is bewust openbaar; de bescherming hangt af van de beveiligingsregels op rijniveau in de database. Als die regels ontbreken of te ruim zijn, kan iedereen die de sleutel ziet de tabellen lezen. Lovable zegt geen fout in zijn AI te zien, noemt het een in de hele sector bekend configuratieprobleem en wijst op zijn eigen beveiligingsscanner. Of de gegevens zijn misbruikt, is niet bekend.

## Waarom is dit belangrijk?

AI heeft het bouwen van apps voor iedereen opengezet, maar brengt niet automatisch beveiliging mee. Wie zelf geen code schrijft, laat de toegangsrechten het best door een expert controleren voordat er echte klantgegevens worden verzameld. Een van de eerste voorbeelden van beveiligingslekken in de computergeschiedenis lees je in ons artikel over [het eerste computerwachtwoord](/yazi/ilk-bilgisayar-sifresi-ctss/).
