---
title: "Fyra AI-jättar enas om en robots.txt-signal: \"Träna inte på mig\""
excerpt: "OpenAI, Google, Microsoft och Anthropic ska stödja en gemensam robots.txt-signal som låter webbplatser välja bort AI-träning med en enda rad."
hook: "Säg nej till AI med en rad"
fact: "4 bolag"
factLabel: "Jättar bakom den gemensamma signalen"
category: "Nyheter"
---
OpenAI, Google, Microsoft och Anthropic meddelade den 30 oktober att de ska stödja en gemensam signal som låter webbplatser undanta sitt innehåll från AI-träning med en enda inställning. Hittills har en webbplatsägare behövt blockera varje företags sökrobot för sig i filen robots.txt.

## Vad hände?

Den nya signalen heter `__usage_ai-training`. Ägaren skriver in den i robots.txt som en vanlig regel och säger därmed: "använd inte mitt innehåll för att träna AI-modeller." Förslaget lämnades in till Internet Engineering Task Force (IETF) som ett utkast skrivet av Kevin Kelley, som ansvarar för standarder på Anthropic. Det är ännu ingen färdig standard; om utkastet inte uppdateras löper det ut i maj 2027.

Tidsplanerna skiljer sig åt. Anthropic säger att man har börjat införa stödet. OpenAI:s stöd kommer under de närmaste månaderna. Google och Microsoft siktar på 2027. Microsoft lägger för Bing också till en separat kontroll som skiljer träning från "grounding", alltså när en chattbot läser en källa medan den svarar. Google sade att webbplatser som använder signalen men inte har skrivit en egen Google-Extended-regel behandlas som om de hade blockerat Google-Extended. Meta visade intresse för en gemensam signal men sade inte om bolaget kommer att följa den.

## Varför är det viktigt?

Utgivare har i åratal klagat på att deras innehåll används för att träna modeller utan tillstånd; The New York Times stämde OpenAI av det skälet. En signal på en rad gör det mycket enklare för små webbplatsägare. Men det finns gränser: efterlevnaden är frivillig, det finns ingen tillsyn eller sanktion, och mindre labb och öppen källkodsprojekt står utanför överenskommelsen. Dessutom gäller signalen bara träning; den rör inte problem som att AI-sammanfattningar minskar antalet besökare till webbplatser.

## En länk till historien

Regeln robots.txt dök upp 1994, när webben fortfarande var mycket ung, för att säga till robotar "gå inte in här". Var webben började berättade vi i vår artikel [Den första webbplatsen finns fortfarande online: historien om info.cern.ch](/yazi/ilk-web-sitesi-hala-yayinda-1991/). Trettio år senare har samma lilla fil blivit AI-erans förhandlingsbord.
