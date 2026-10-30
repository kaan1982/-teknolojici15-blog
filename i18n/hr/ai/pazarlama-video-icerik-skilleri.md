---
title: "Skillovi za marketing, video i sadržaj: alatna torba stvaratelja"
excerpt: "Repozitorij marketingskills Coreyja Hainesa, Anthropicov dodatak za marketing te skillovi Remotiona i HeyGen HyperFramesa. Pravi izbor za sadržaj i video."
hook: "Video napiši kôdom, tekst skillom"
fact: "52 SKILLA"
factLabel: "Broj skillova u repozitoriju marketingskills"
category: "Umjetna inteligencija"
---
I iza ovog bloga svaki se dan proizvode kratki videi, naslovnice i tekstovi. Zato nam je ova kategorija pomalo osobna: skillovi za marketing, sadržaj i video. To je ujedno područje u kojem se skillovi zajednice najbrže množe. Mi smo naveli samo primjere čije smo repozitorije otvorili i pregledali. Sve brojke vrijede na kraju listopada 2026.

## marketingskills: marketinška biblioteka od 52 skilla

Repozitorij coreyhaines31/marketingskills pod MIT licencom, Coreyja Hainesa, koji stoji iza agencije za optimizaciju konverzije Conversion Factory, jedna je od najopsežnijih zbirki zajednice u ovom području. Prema README-u, pripremljen je za tehničke marketinške stručnjake i osnivače; usmjeren je na poslove poput optimizacije konverzije, copywritinga, SEO-a, analitike i growth engineeringa. Navodi da radi s Claude Codeom, OpenAI Codexom, Cursorom i drugim agentima koji podržavaju standard Agent Skills.

U mapi skills u repozitoriju nalazi se 52 skilla. Nekoliko primjera:

- **copywriting:** Za pisanje ili poboljšanje teksta svih vrsta marketinških stranica, poput početne stranice, odredišne stranice i stranice s cijenama.
- **seo-audit:** Za reviziju i dijagnostiku SEO problema na stranici.
- **ai-seo:** Za optimizaciju sadržaja za tražilice s umjetnom inteligencijom, odnosno za to da te veliki jezični modeli navode kao izvor u svojim odgovorima.
- **emails i cold-email:** Za nizove e-pošte, automatizirane tijekove i B2B kampanje hladne e-pošte.
- **social:** Za izradu i planiranje sadržaja za LinkedIn, X, Instagram, TikTok i Facebook.

Za instalaciju README preporučuje naredbu npx skills add coreyhaines31/marketingskills. Moguće je odabrati i pojedinačni skill.

## Anthropicov dodatak za marketing

Anthropicov repozitorij anthropics/knowledge-work-plugins okuplja dodatke pripremljene po strukama. Izrađeni su za Claude Cowork, a kompatibilni su i s Claude Codeom. Svaki dodatak pakira zajedno skillove za taj posao, konektore, naredbe s kosom crtom i podagente.

Skillovi unutar dodatka marketing su sljedeći: brand-review (provjerava nacrt prema glasu brenda i vodiču za stil te predlaže ispravke prije/poslije), campaign-plan (izrađuje sažetak kampanje s ciljem, publikom, porukom, strategijom kanala i kalendarom sadržaja), content-creation, draft-content, email-sequence, competitive-brief, performance-report i seo-audit. README navodi da se taj dodatak može povezati s alatima poput Slacka, Canve, Figme, HubSpota i Ahrefsa. Dakle, ovdje skill daje "metodu", a konektor "pristup".

> **Jesi li znao?** Videi se danas mogu izrađivati ne samo povlačenjem po vremenskoj crti, nego i kôdom, i upravo tu na scenu stupaju skillovi. Tim Remotiona objavljuje vlastiti službeni skup skillova za svoj video okvir temeljen na Reactu. HeyGen pak nudi HyperFrames, koji se temelji na ideji "napiši HTML, renderiraj video", zajedno sa skillovima za agente.

## Za video: Remotion i HyperFrames

| Paket | Izvor | Što nudi? |
|---|---|---|
| remotion-dev/skills | Tim Remotiona (službeni) | 12 skillova: izrada videa, pravila animacije, titlovi, renderiranje, pregled |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skillovi i gotovi blokovi za okvir koji HTML pretvara u video |

**Remotion:** Prema README-u, Remotion održava popis Agent Skills koji opisuju najbolje prakse za rad na projektima Remotiona. U skupu su skillovi poput remotion-create, koji izrađuje novi video, remotion-markup, koji nosi znanje o animaciji i rasporedu, remotion-captions za transkripciju i animaciju titlova, remotion-render za izvoz i remotion-best-practices koji sve usmjerava. Instalacija se obavlja naredbom npx skills add remotion-dev/skills.

**HyperFrames:** HeyGenov repozitorij predstavlja se kao "napiši HTML, renderiraj video, izrađeno za agente". Prema README-u, osnovni skup sastoji se od skillova hyperframes (izrada i uređivanje videa), hyperframes-cli (kostur projekta, pregled, renderiranje), hyperframes-registry (oko 450 gotovih blokova prijelaza, naslova, titlova i grafika) i media-use (medijski poslovi poput glazbe, zvučnih efekata, slika i glasovnih zapisa). Ukupno je objavljeno 7 skillova.

Zanimljiva pojedinost: opis video skilla u repozitoriju Coreyja Hainesa kao okidačke riječi navodi i imena poput Remotiona, HyperFramesa i HeyGena. Dakle, marketinški skill napisan je tako da radi kao most prema video skillovima.

## Na što paziti pri odabiru?

Većina skillova u ovom području potječe iz zajednice ili tvrtki i ažurira se vrlo brzo. Prije instalacije paketa olakšat će ti posao tri pitanja: Čiji je repozitorij i ažurira li se aktivno? Ima li u SKILL.md upute koja se povezuje s vanjskim adresama ili traži vjerodajnice? Možeš li odabrati i instalirati samo nekoliko skillova koji ti doista trebaju? Većina alata za instalaciju umjesto "instaliraj sve" dopušta odabir pojedinačnog skilla, što smanjuje i kontekst i rizik.

Što ti je u izradi sadržaja najveći kradljivac vremena: pisanje teksta, priprema vizuala ili montaža videa?
