---
title: "WhatsApp täppte till tre säkerhetsbrister: en kan ha använts i bedrägerier"
excerpt: "WhatsApp har åtgärdat tre säkerhetsbrister, bland dem en Android-brist som kunde läcka IP-uppgifter och misstänks ha utnyttjats i en bedrägerikampanj."
hook: "Ett meddelande kunde avslöja din IP"
fact: "3 brister"
factLabel: "säkerhetsbrister åtgärdade i november"
category: "Nyheter"
---
WhatsApp meddelade den 20 november i sina säkerhetsbulletiner att tre brister har täppts till. En av dem är en Android-bugg som företaget misstänker har utnyttjats i en bedrägerikampanj.

## Vilka är bristerna?

Den första spåras under koden CVE-2026-23871 och påverkar WhatsApp och WhatsApp Business för Android före version 2.26.17.4. Enligt Business Upturn kontrollerades externa adresser i svar på "Click to WhatsApp"-annonser inte tillräckligt. När ett särskilt utformat meddelande dök upp i en chatt kunde enheten avslöja sina IP-uppgifter för motparten. WhatsApp sa att buggen upptäcktes när företaget försökte stoppa en bedrägerikampanj och att det tror att en bedragare använde den för att få sitt falska meddelande att verka mer trovärdigt. Hur många som drabbats har inte offentliggjorts.

Den andra bristen, CVE-2026-102769, är en SQL-injektion i Android-versioner före 2.26.35.74. Om man tryckte på ett falskt beställningsmeddelande som skickats från en inofficiell app kunde vissa filer som WhatsApp sparar på telefonen raderas. Bristen rapporterades av en forskare via Metas bugbountyprogram.

Den tredje, CVE-2026-44908, gäller certifikatkontrollen i anslutningen till Meta AI:s infrastruktur för konfidentiell beräkning och påverkade apparna för Android, iOS och Mac. För att utnyttja den måste en angripare ha befunnit sig inne i Metas egen infrastruktur. WhatsApp uppger att det inte hittat några bevis för att de två sistnämnda bristerna använts i verkliga attacker.

## Vad ska man göra?

Företagets råd är enkelt: håll WhatsApp och telefonens operativsystem uppdaterade. Att leta efter uppdateringar i appbutiken räcker för att täppa till de här bristerna.

## Varför är det viktigt?

I en app som används av miljarder människor kan en läckt IP-adress göra det möjligt att ungefär uppskatta var någon befinner sig och öppna för riktade bedrägerier. Det är anmärkningsvärt att bedragare inte längre bara förlitar sig på falska meddelanden, utan även utnyttjar fel i själva appen. WhatsApps grundarhistoria berättade vi i vår [artikel om Brian Acton](/yazi/whatsapp-brian-acton-facebook-reddi/).
