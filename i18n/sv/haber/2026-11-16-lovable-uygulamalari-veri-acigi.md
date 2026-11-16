---
title: "AI-byggda Lovable-appar lämnade pass och 200 000 chattar öppna"
excerpt: "Det tyska säkerhetsföretaget Crissy Field kunde läsa databaserna i 24 664 webbplatser byggda med Lovable utan lösenord; passuppgifter och över 200 000 chattar låg öppna."
hook: "Ingen inloggning, inget lösenord, data klar"
fact: "24 664"
factLabel: "Lovable-sajter som skickar data utan inloggning"
category: "Nyheter"
---
Lovable, plattformen som lovar att man kan bygga appar utan att kunna koda genom att bara beskriva dem för en AI, har drabbats av ett stort säkerhetsproblem. Det tyska säkerhetsföretaget Crissy Field meddelade, efter en granskning tillsammans med affärstidningen Handelsblatt, att det kunde läsa databaserna i tusentals appar byggda med Lovable utan att logga in.

## Vad säger siffrorna?

Forskarna hittade i webbarkivet Common Crawl 159 041 Lovable-projekt som var publicerade mellan december 2025 och september 2026. Av dessa använde 34 545 databastjänsten Supabase, och 24 664 skickade databasposter när sidan öppnades, utan att kräva någon inloggning av användaren. Vid ytterligare läsförfrågningar dök e-postadresser upp i 10 560 tabeller på 7 403 webbplatser. Företaget påpekar att detta inte är en exakt läckagesiffra, eftersom vissa adresser kan vara offentliga kontaktuppgifter eller testdata.

Bland det som låg öppet fanns över 1 000 passposter hos en tjänsteleverantör, mer än 80 000 profiler och över 200 000 chattmeddelanden från ett tyskt livsstilsforum, tiotusentals beställningar med betalningsuppgifter från evenemang och restauranger samt giltiga biljettkoder.

## Var kommer problemet ifrån?

Det har inte skett någon attack mot Lovable eller Supabase. Nyckeln som Supabase skickar till webbläsaren är offentlig av design; skyddet beror på säkerhetsreglerna på radnivå i databasen. När de reglerna saknas eller är för slappa kan alla som ser nyckeln läsa tabellerna. Lovable säger att man inte ser något fel i sin AI, att det är ett välkänt konfigurationsproblem i hela branschen och påminner om sitt eget säkerhetsskanningsverktyg. Det är okänt om uppgifterna har missbrukats.

## Varför är det viktigt?

AI har öppnat appbyggandet för alla, men har inte fört med sig säkerhet automatiskt. Den som inte själv skriver kod bör låta en expert kontrollera åtkomstbehörigheterna innan riktiga kunduppgifter samlas in. Ett av de första exemplen på säkerhetsluckor i datorhistorien kan du läsa om i vår artikel om [det första datorlösenordet](/yazi/ilk-bilgisayar-sifresi-ctss/).
