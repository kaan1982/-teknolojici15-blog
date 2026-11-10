---
title: "Google visar två nya TPU:er: krypterade 8tx och 8i Max med två chip"
excerpt: "Google har lagt till TPU 8tx, som skyddar data även under bearbetning, och TPU 8i Max, som förenar två chip i ett paket, i den åttonde generationen TPU:er."
hook: "Två chip i ett paket"
fact: "2 gånger"
factLabel: "Ökning av minnesbandbredden i 8i Max"
category: "Nyheter"
---
Google lade den 9 november till två nya system i den åttonde generationen av sina egenutvecklade TPU-acceleratorer (Tensor Processing Unit): TPU 8tx och TPU 8i Max. I april hade företaget presenterat TPU 8t för träning och TPU 8i för inferens. Därmed har familjen nått fyra system under samma år.

## TPU 8tx: kryptering under bearbetning

TPU 8tx använder samma kisel som TPU 8t men lägger till "konfidentiell beräkning" på hårdvarunivå. Målet är att data och modellvikter ska förbli skyddade även medan de bearbetas. Chipet paras ihop med servrar med AMD EPYC-processorer av femte generationen. Google talar om upp till 2 gånger lägre latens jämfört med TPU 8t och nästan ingen prestandaförlust från säkerhetslagret; det finns dock ännu inget oberoende test av dessa påståenden. Målgruppen är reglerade företag och myndigheter som arbetar med känsliga data.

## TPU 8i Max: två chip, ett paket

TPU 8i Max förenar två TPU 8i-chip i ett enda paket. Enligt Google fördubblar detta, jämfört med en enskild TPU 8i, beräkningskraften, SRAM-minnet på chipet och HBM-minnets bandbredd. Eftersom dubbelt så mycket kisel får plats på samma rackyta ökar också beräkningskraften per kvadratmeter och per watt i datacentret. Mark Lohmeyer, chef på Google Cloud, liknade upplägget vid att bygga nya filer på en motorväg.

Google lämnade inga uppgifter om pris, datum för allmän tillgänglighet eller regioner. Enligt Data Center Knowledge kommer vissa kunder att kunna installera TPU 8tx i sina egna datacenter; Google har inte bekräftat detta officiellt.

## Varför är det viktigt?

Bland Nvidias starkaste rivaler på chipmarknaden finns molnföretagen som konstruerar sina egna chip. Att Google släpper fyra olika TPU-system på ett år visar att specialchip nu delas upp efter typ av arbete i stället för att vara en enda produkt för allt. För den blygsamma början på Googles hårdvaruäventyr kan du läsa vår artikel om [Lego-servern](/yazi/google-lego-sunucu/).
