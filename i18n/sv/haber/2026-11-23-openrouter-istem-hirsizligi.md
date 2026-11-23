---
title: "Mellanhänder läste AI-förfrågningar: OpenRouter petar 3 leverantörer"
excerpt: "Dragos undersökning med 2 miljoner fällförfrågningar avslöjade stöld av prompter och nycklar hos billiga AI-leverantörer; OpenRouter har tagit bort 3 leverantörer."
hook: "Någon annan kan läsa din fråga"
fact: "2 miljoner"
factLabel: "fällförfrågningar i undersökningen"
category: "Nyheter"
---
Cybersäkerhetsföretaget Dragos genomförde ett ovanligt experiment för att mäta vems händer förfrågningar till AI-modeller hamnar i på vägen. Resultaten fick OpenRouter, som erbjuder olika modeller via ett och samma gränssnitt, att agera: plattformen tog bort tre leverantörer från listan och drog in godkännandet "Zero Data Retention" för 125 slutpunkter.

## Hur gick experimentet till?

Mellan juli och november 2026 skickade forskarna omkring 2 miljoner förfrågningar. I varje förfrågan placerade de falska lösenord och dolda länkar som avslöjar sig själva så fort de används, så kallade "kanariefällor". Enligt The Decoder visade det sig att minst tre leverantörer hade tagits över av angripare och att data hade stulits i månader. Ingen av leverantörerna kände till det förrän Dragos hörde av sig.

I den största incidenten samlade angriparna in hundratals AWS-nycklar; några av dem testade de inom några timmar. Vissa mellanhänder som fungerar som en marknadsplats behövde inte ens hitta något säkerhetshål: att lista modellen till lägsta pris och slå på loggning räckte för att läsa kundernas förfrågningar. Det visade sig också att inställningar med löftet "vi sparar inga data" ofta bröts.

## Vad gjorde OpenRouter?

Företaget mejlade de drabbade användarna och varnade för att deras förfrågningar till MiniMax-modeller kan ha lästs av tredje part. Leverantörer som Novita, Phala och Together publicerade preliminära granskningsrapporter.

## Varför är det viktigt?

Varje lösenord, kodsnutt eller företagsdokument som klistras in i en AI-chatt kan passera mer än en mellanhand innan det når modellen, och varje mellanhand kan se hela förfrågan. Dragos råd är tydligt: lägg aldrig in riktiga inloggningsuppgifter i förfrågningar och låt inte priset avgöra vilken väg dina data tar. Den som undrar hur lösenordet föddes kan läsa vår [artikel om det första datorlösenordet](/yazi/ilk-bilgisayar-sifresi-ctss/).
