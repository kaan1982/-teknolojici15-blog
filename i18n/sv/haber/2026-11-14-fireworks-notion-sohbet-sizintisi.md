---
title: "AI-leverantören Fireworks hackad; Notion AI-chattar exponerade"
excerpt: "Angripare tog sig in i Fireworks AI:s lagringssystem; AI-chattar från under 1 procent av Notions arbetsytor drabbades."
hook: "En kopia av chatten låg någon annanstans"
fact: "UNDER 1%"
factLabel: "Drabbade arbetsytor i Notion"
category: "Nyheter"
---
Anteckningsappen Notion har meddelat en del av sina kunder att loggar från deras AI-chattar exponerats i ett dataintrång. Läckan skedde inte i Notions egna system utan hos Fireworks AI, den infrastrukturleverantör som Notion använder för att köra AI-modeller med öppna vikter.

## Hur gick attacken till?

Fireworks angreps två gånger i oktober: en gång med kapade interna inloggningsuppgifter och en gång via en extern molnleverantör som driftar bolagets maskiner för forskning och utveckling. Den vägen körde angriparna den 24 oktober en obehörig arbetslast och nådde vissa lagringssystem. Fireworks säger att händelsen stoppades samma dag och att bevisen pekar mot en ekonomiskt driven grupp som säljer modellåtkomst som skaffats på obehörig väg. I början av november meddelade Fireworks Notion att chattloggar fanns bland dessa data.

## Vilka data drabbades?

De exponerade loggarna var Notion AI-chattar som klassificerats för funktionen Insights, som visar Notions kunder hur de använder AI. Notion uppgav att under 1 procent av arbetsytorna drabbats och att de flesta loggar inte innehöll uppgifter som kan kopplas till en användare eller ett företag. Bolaget kopplade bort Fireworks, stängde av Insights och bad kunder som klistrat in känsliga uppgifter som lösenord eller API-nycklar i chattarna att genast byta dem. Fireworks uppger för sin del att det inte sett någon påverkan på tjänsten för realtidsinferens, som körs med standardinställningen "noll datalagring", och att problemet låg i batchjobb som sparar data och i lagringssystemen.

## Varför är det viktigt?

När du använder en AI-funktion passerar dina data ofta servrar hos andra företag som du aldrig ser. Händelsen visar att ett lösenord som klistras in i en chattruta bara är så säkert som den svagaste länken i leveranskedjan. Hur gammal lösenordsstölden är berättar vi om i vår artikel om [det första datorlösenordet](/yazi/ilk-bilgisayar-sifresi-ctss/).
