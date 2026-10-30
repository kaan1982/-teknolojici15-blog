---
title: "AI hittade en kritisk sårbarhet i PHP, som driver 70 procent av webbplatserna"
excerpt: "Två sårbarheter kallade PHP2Shell tillåter kodkörning på servern utan inloggning. Vid upptäckten användes modeller som GPT-5.6 Sol och Gemini 4 Argon."
hook: "AI hittade den enorma sårbarheten i PHP"
fact: "CVSS 9,2"
factLabel: "Högsta poängen bland PHP2Shell-sårbarheterna"
category: "AI"
---
PHP-utvecklarna släppte den 21 oktober en akut patch för två kritiska säkerhetsluckor i språkets kärna. Sårbarheterna, som kallas „PHP2Shell“ och har fått beteckningarna CVE-2026-109618 och CVE-2026-109619, hittades med hjälp av AI-verktyg.

## Vad hände?

Enligt Fortune hittade Calif, ett företag för säkerhetstestning av AI, den första länken i kedjan den 1 augusti med GPT-5.6 Sol; Wiz upptäckte den första sårbarheten oberoende den 19 augusti och rapporterade den till PHP:s säkerhetsteam den 24 augusti. Vid upptäckten användes Wiz eget verktyg Wiz Atlas samt OpenAI:s GPT-5.6 Sol och Googles Gemini 4 Argon.

Sårbarheterna låter en angripare köra kod på servern på distans utan inloggning och läcka data ur minnet. Enligt Wiz påverkas nästan varje PHP-version som släppts under det senaste decenniet, ända bak till 5.4. Den högsta allvarlighetspoängen på CVSS-skalan är 9,2. PHP körs bakom ungefär 70 procent av världens webbplatser; enbart WordPress driver grovt räknat 40 procent. Enligt Fortunes uppdaterade nyhet började sårbarheterna utnyttjas i stor skala efter patchen.

## Varför spelar det roll?

Det här är ett av de tydligaste exemplen på att AI inom säkerhetsforskning inte längre bara är ett hjälpmedel utan kan vara den part som gör upptäckten. Men samma verktyg finns i angripares händer, och tiden mellan att en patch släpps och att utnyttjandet börjar krymper. Varje webbplatsägare som använder PHP måste uppdatera sin server direkt. I ett bredare perspektiv kan dolda fel i internets gamla kod, som har körts i decennier, nu komma i dagen mycket snabbare. Historien om det första programmet som rörde sig av sig självt i ett nätverk berättade vi i [artikeln om Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
