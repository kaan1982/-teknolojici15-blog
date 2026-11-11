---
title: "AI van DeepMind verifieert code van Signal-versleuteling in vier weken wiskundig"
excerpt: "Het AlphaProof Code-systeem van Google DeepMind heeft de belangrijkste beveiligingseigenschappen in de echte code van het Signal-protocol geverifieerd met door een machine gecontroleerde bewijzen."
hook: "Werk van jaren in vier weken"
fact: "6 miljoen regels"
factLabel: "Bewijs geschreven in de taal Lean"
category: "Nieuws"
---
Google DeepMind presenteerde op 10 november een nieuw AI-systeem met de naam AlphaProof Code en maakte meteen ook zijn eerste grote klus bekend: het met "formele verificatie" bewijzen van de belangrijkste beveiligingseigenschappen van het Signal-berichtenprotocol. Het Signal-protocol wordt naast de Signal-app in aangepaste vorm ook gebruikt in WhatsApp en Google Messages.

## Hoe werkt het?

Bij formele verificatie wordt wiskundig bewezen dat software in elke situatie aan een bepaalde beveiligingsregel voldoet, en controleert een computerprogramma het bewijs stap voor stap. Normaal kost dit werk teams van experts jaren.

Bij AlphaProof Code schreven eerst menselijke cryptografie-experts op wat er bewezen moest worden. Bijvoorbeeld dat latere berichten beschermd blijven, zelfs als een apparaat kort in verkeerde handen is geweest. Daarna produceerden samenwerkende AI-agents de bewijzen in de formele taal Lean. Het resultaat was een bewijs van meer dan zes miljoen regels. Het werk van het team van vijf mensen duurde vier weken. De agents markeerden slechts 1 procent van de code voor een tweede menselijke controle.

Om te laten zien dat het systeem echt onderscheid kan maken, plaatste het team twee echte, eerder verholpen fouten terug in een geïsoleerde kopie van de code. In beide gevallen bewees AlphaProof Code dat die versies onveilig waren.

## Beperkingen

De verificatie omvat niet de hele Signal-app, maar geselecteerde beveiligingseigenschappen van het protocol. In de onderzochte delen werd geen nieuw lek gevonden. Een bewijs is slechts zo sterk als de opgeschreven regels en aannames; zo wordt er bijvoorbeeld van uitgegaan dat de versleutelingsalgoritmen foutloos zijn. Ook DeepMind-onderzoeker Swarat Chaudhuri zei dat er nog een lange weg te gaan is voordat de methode op alle software ter wereld kan worden toegepast. Google maakte de kosten niet bekend; de bewijzen en regels worden als open source gepubliceerd.

## Waarom is dit belangrijk?

AI helpt ook aanvallers bij het vinden van lekken. Dat dezelfde technologie wordt gebruikt om te bewijzen dat software veilig is, is een belangrijke stap voor de verdedigende kant. Ben je benieuwd naar de begindagen van computerbeveiliging, lees dan het verhaal van het [eerste computerwachtwoord](/yazi/ilk-bilgisayar-sifresi-ctss/).
