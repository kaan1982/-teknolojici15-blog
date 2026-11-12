---
title: "DeepMinds AlphaGenome 2 läser nu DNA cell för cell"
excerpt: "DeepMinds modell AlphaGenome 2 förutsäger vad en DNA-förändring gör i vilken cell och hittar nästan dubbelt så många orsakande varianter."
hook: "Samma DNA, olika celler"
fact: "30 %"
factLabel: "Andel hittade orsakande varianter"
category: "Nyheter"
---
Google DeepMind presenterade AlphaGenome 2 den 11 november. AI-modellen förutsäger hur en liten förändring i DNA:t (en variant) påverkar hur gener fungerar. Nyheten är att modellen inte längre tittar på genomsnittet för en hel vävnad, utan på enskilda celltyper och det tillstånd som cellen befinner sig i just då.

## Vad har förändrats?

Varje cell i kroppen bär samma DNA, men varje cell läser det på sitt eget sätt. Den första AlphaGenome gav fasta förutsägelser för vävnader. AlphaGenome 2 får däremot, utöver en DNA-sekvens, även informationen "vilken cell, i vilket tillstånd". Forskare kan välja ur en färdig cellkatalog eller mata in sina egna encellsdata.

Modellen har tränats på över 100 miljoner encellsprofiler från människa och mus, fördelade på 68 vävnader. Källorna anger siffran till över 107 miljoner.

## Resultaten

I testet TenK10K, som omfattar 28 typer av immunceller, hittade AlphaGenome 2 30 procent av de orsakande varianterna. Den första modellen och andra specialverktyg stannade vid 16 procent. Andelen gånger modellen rätt förutsåg om en variant ökar eller minskar genaktiviteten steg också från 23 till 43 procent.

I ett av exemplen visade modellen att en variant kopplad till svår covid-19 är starkare i aktiva T-celler än i vilande celler.

## Begränsningarna

Modellen erbjuds via ett gratis API för icke-kommersiell forskning; för företag finns en privat förhandsversion. DeepMind betonar att modellen inte är validerad för kliniskt eller diagnostiskt bruk. Modellen fångar fortfarande bara en minoritet av de orsakande varianterna, och förutsägelserna måste bekräftas i labbet.

## Varför är det viktigt?

De flesta DNA-förändringar som är kopplade till sjukdomar ligger utanför generna, i områden som slår på och av gener, och deras effekter syns bara i vissa celler. Att i förväg kunna förutsäga vilken förändring som ställer till problem i vilken cell kan göra det lättare att hitta mål för läkemedel och minska antalet experiment.
