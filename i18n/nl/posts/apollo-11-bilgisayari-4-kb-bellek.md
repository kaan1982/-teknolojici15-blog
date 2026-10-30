---
title: "De computer van Apollo 11: wat betekent \"4 KB geheugen\" echt?"
excerpt: "De computer die Apollo 11 op de maan liet landen had ongeveer 4 KB RAM. De programma's zaten in een ROM van ongeveer 72 KB dat met touw was geweven."
hook: "Ze landden op de maan met 4 KB RAM"
fact: "4 KB"
factLabel: "Het wisbare geheugen (RAM) van de AGC"
category: "Computers"
---
Je hebt vast wel eens de zin gehoord: "Het geheugen van de computer die naar de maan ging was kleiner dan een foto." In de video zeiden wij ook "4 KB". Dat getal klopt, maar is op zichzelf onvolledig. De Apollo Guidance Computer (kortweg AGC) had namelijk twee aparte geheugens, en "4 KB" beschrijft alleen het kleinste.

Laten we dit beroemde getal samen openmaken.

## Wat betekent "4 KB" precies?

Het werkgeheugen van de AGC, het wisbare geheugen dat we nu RAM zouden noemen, bestond uit 2.048 "woorden". Elk woord was 16 bits lang: 15 bits data en 1 bit voor foutcontrole, de pariteit. Als we een woord op 2 byte rekenen, komen 2.048 woorden neer op ongeveer 4 KB. "4 KB" is dus de grootte van het kladpapier dat de computer tijdens de vlucht gebruikte om te rekenen.

In dit geheugen zaten de programma's niet. Daar stonden de actuele positie, snelheid, tellers en de tussenresultaten die tussen taken werden doorgegeven. Het geheugen bestond uit kleine ringetjes, magnetische kernen (core), en behield zijn inhoud ook als de stroom wegviel.

De programma's zaten op een heel andere plek: in het vaste geheugen van 36.864 woorden, oftewel ROM. Met dezelfde rekensom is dat ongeveer 72 KB. Kortom, de juistere zin is: Apollo 11 landde op de maan met ongeveer 4 KB RAM en ongeveer 72 KB ROM.

## De programma's waren geweven

Het ROM van de AGC was "core rope" (kernentouw)-geheugen en werd letterlijk met de hand geweven. Als een draad door een magnetische kern liep, was dat bit een 1, en als hij er langs liep, een 0. De software werd dus omgezet in hardware door te weven, als stof.

Dit werk werd gedaan door medewerkers van Raytheon in Waltham, Massachusetts. Volgens het gedetailleerde onderzoek van Ken Shirriff kwam een flink deel van de aangenomen mensen uit de plaatselijke textielsector, vrouwen die vanwege hun naaivaardigheid werden aangetrokken. Het weven van één module duurde ongeveer 8 weken en kostte 15.000 dollar. Elke module bevatte 6 duizend woorden, en zes modules vormden samen de 36.864 woorden.

Het neveneffect was belangrijk: de software moest maanden vóór de vlucht worden bevroren. Een last-minutepatch bestond niet, want een fout herstellen betekende opnieuw weven.

> **Wist je dat?** Apollo 11 had niet één maar twee AGC's: een in de commandomodule en een in de maanlander. Elk woog ongeveer 32 kg en liep op een kristalklok van 2,048 MHz.

## Het alarm vlak voor de landing

Tijdens de landing op 20 juli 1969 gaf de computer van de maanlander eerst alarm 1202 en daarna alarm 1201 op het scherm. Beide betekenden "executive overflow": de computer kreeg meer werk dan hij aankon. Volgens het gedetailleerde verslag op Wikipedia was de oorzaak dat valse signalen van de op stand-by gezette rendez-vousradar de processor bezighielden. Het was geen programmeerfout, geen fout van de piloot en geen hardwaredefect. Het kwam in de kern voort uit een gebrek in het interfacedocument tussen twee systemen.

Het echt interessante is wat de software in zo'n geval deed. De AGC werkte met een prioriteitsgestuurde planner. Bij overbelasting herstartte hij zichzelf razendsnel, liet taken met lage prioriteit vallen en ging door met kritieke taken, zoals het besturen van de landing. Dat beroemde kleine geheugen volstond dus doordat het slim werd beheerd.

Er was nog een detail dat het moeilijker maakte. Het commando 1668 dat Buzz Aldrin tijdens de landing in de computer invoerde, legde extra druk op de toch al worstelende processor en veroorzaakte nog een 1202-alarm. De software kwam daar op dezelfde manier doorheen en de Eagle landde op het maanoppervlak.

De software werd ontwikkeld in het MIT Instrumentation Laboratory. De software van de commandomodule (COLOSSUS) en die van de maanlander (LUMINARY) werden door verschillende teams gemaakt. De uitwerking van de details lag bij het team onder leiding van Margaret Hamilton.

## Toen / nu

| Apollo Guidance Computer (1969) | Telefoon van vandaag |
|---|---|
| Ongeveer 4 KB wisbaar geheugen (RAM) | Gigabytes aan RAM |
| Ongeveer 72 KB met de hand geweven ROM | Honderden gigabytes opslag |
| Maandenlang weven voor een software-update | Updates die 's nachts vanzelf binnenkomen |
| Ongeveer 32 kg | Past in je handpalm |

## De echte les van het getal

Het getal "4 KB" wordt vaak verteld als "kijk hoe primitief het was". Maar de kern van het verhaal is juist het tegenovergestelde: het beperkte geheugen dwong de ingenieurs om rekenschap af te leggen over elke bit. Daardoor ontstond software die taken prioriteert en zich bij overbelasting herstelt.

De apparaten in onze zak hebben tegenwoordig onvergelijkbaar veel geheugen, maar de meeste apps worden niet met zoveel zorg geschreven. Zelfs één enkele update van een berichtenapp kan vele malen groter zijn dan alle software van Apollo bij elkaar.

Denk jij dat beperkingen betere ingenieurs voortbrengen, of overvloed?
