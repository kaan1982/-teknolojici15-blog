---
title: "Apollo 11:s dator: vad betyder egentligen \"4 KB minne\"?"
excerpt: "Datorn som landade Apollo 11 på månen hade ungefär 4 KB RAM. Programmen låg i ett ROM på cirka 72 KB som var vävt av tråd."
hook: "De landade på månen med 4 KB RAM"
fact: "4 KB"
factLabel: "AGC:s raderbara minne (RAM)"
category: "Datorer"
---
Du har säkert hört meningen "minnet i datorn som flög till månen var mindre än ett fotografi". Vi sa också "4 KB" i videon. Siffran stämmer, men den räcker inte ensam. För Apollo Guidance Computer (AGC) hade i själva verket två olika minnen, och "4 KB" beskriver bara det mindre av dem.

Nu öppnar vi tillsammans upp den här berömda siffran.

## Vad betyder "4 KB" egentligen?

AGC:s arbetsminne, alltså det raderbara minne vi i dag skulle kalla RAM, bestod av 2 048 "ord". Varje ord var 16 bitar långt: 15 bitar data och 1 bit paritet för felkontroll. Räknar vi ett ord som 2 byte blir 2 048 ord ungefär 4 KB. "4 KB" är alltså storleken på det kladdpapper datorn använde för att räkna under flygningen.

Programmen låg inte i det minnet. Där fanns aktuell position, hastighet, räknare och mellanresultat som flyttades mellan uppgifter. Minnet var byggt av små ringar som kallas magnetkärnor (core) och behöll sitt innehåll även om strömmen bröts.

Programmen låg någon helt annanstans: i ett fast minne på 36 864 ord, alltså i ROM. Med samma räkning blir det ungefär 72 KB. Kort sagt är den riktigare meningen: Apollo 11 landade på månen med ungefär 4 KB RAM och ungefär 72 KB ROM.

## Programmen var vävda av tråd

AGC:s ROM var ett "core rope"-minne (kärnrep) och vävdes bokstavligen för hand. Om en tråd gick genom en magnetkärna var den biten 1, och om den gick runt kärnan var den 0. Programvaran omvandlades alltså till hårdvara genom att vävas som ett tyg.

Arbetet gjordes av Raytheons anställda i Waltham i Massachusetts. Enligt Ken Shirriffs detaljerade genomgång var en stor del av de anställda kvinnor från den lokala textilindustrin, tack vare sin sömnadsskicklighet. Att väva en enda modul tog ungefär 8 veckor och kostade 15 000 dollar. Varje modul rymde 6 tusen ord, och sex moduler utgjorde tillsammans de 36 864 orden.

Det hade en viktig bieffekt: programvaran måste frysas månader före flygningen. Det fanns ingen sista minuten-rättning, eftersom att rätta ett fel innebar att väva om.

> **Visste du det?** På Apollo 11 fanns inte en utan två AGC: en i kommandomodulen och en i månlandaren. Var och en vägde ungefär 32 kg och arbetade med en kristallklocka på 2,048 MHz.

## Larmet som gick strax före landningen

Under landningen den 20 juli 1969 gav månlandarens dator först larmet 1202 på skärmen och därefter 1201. Båda betydde "exekutivöverflöde": datorn hade fått mer arbete än den kunde bära. Enligt den detaljerade beskrivningen på Wikipedia berodde det på att falska signaler från mötesradarn, som lämnats på standby, upptog processorn. Problemet var varken ett programmeringsfel, ett pilotfel eller ett hårdvarufel. Det uppstod i grunden av en brist i gränssnittsdokumentet mellan två system.

Det intressanta är vad programvaran gjorde i den situationen. AGC arbetade med en prioritetsbaserad schemaläggare. När överbelastningen kom startade den snabbt om sig själv, släppte uppgifter med låg prioritet och fortsatte med kritiska uppgifter som att styra landningen. Det berömda lilla minnet räckte alltså tack vare att det förvaltades på ett klokt sätt.

Det fanns ytterligare en detalj som gjorde saken svårare. Kommandot 1668, som Buzz Aldrin matade in i datorn under landningen, lade extra last på den redan ansträngda processorn och utlöste ytterligare ett 1202-larm. Programvaran klarade även det på samma sätt, och Eagle landade på månytan.

Programvaran utvecklades vid MIT Instrumentation Laboratory. Programvaran för kommandomodulen (COLOSSUS) och den för månlandaren (LUMINARY) drevs av olika team. Genomförandet av detaljerna låg hos teamet som leddes av Margaret Hamilton.

## Då / nu

| Apollo Guidance Computer (1969) | Dagens mobiltelefon |
|---|---|
| Ungefär 4 KB raderbart minne (RAM) | Gigabyte med RAM |
| Ungefär 72 KB, handvävt ROM | Hundratals gigabyte lagring |
| Månader av vävning för en programuppdatering | Uppdateringar som laddas ned av sig själva på natten |
| Ungefär 32 kg | Ryms i handflatan |

## Siffrans verkliga lärdom

Siffran "4 KB" berättas ofta som "titta så primitivt det var". Men kärnan i historien är den motsatta: det begränsade minnet tvingade ingenjörerna att redovisa för varje bit. Därför föddes en programvara som prioriterade uppgifter och återhämtade sig själv vid överbelastning.

Dagens enheter i våra fickor har ojämförligt mycket mer minne, men de flesta appar skrivs inte med samma omsorg. Redan en enda uppdatering av en meddelandeapp kan vara många gånger större än hela Apollos programvara.

Tror du att begränsningar utbildar bättre ingenjörer, eller överflöd?
