---
title: "Skill-biztonság: minden, amit telepítés előtt el kell olvasnod"
excerpt: "A skillek kódot futtathatnak, külső forrásokból húzhatnak utasításokat. Útmutató a megbízható forráshoz, a SKILL.md és a szkriptek átnézéséhez, a legkisebb jogosultsághoz és a titkos kulcsokhoz."
hook: "Skillt telepíteni szoftvert telepíteni"
fact: "13,4%"
factLabel: "A kritikus sebezhetőségű skillek aránya (Snyk, 2026)"
category: "Mesterséges intelligencia"
---
Ami a skilleket ennyire erőssé teszi, az teszi őket kockázatossá is: a skill nem csak szöveget, hanem futtatható kódot is hordozhat. Amikor az ágens betölti a skillt, a benne lévő utasításokat a sajátjaiként követi, és a szkriptjeit futtathatja. Ezért a Claude dokumentációjának javaslata egy mondatban összefoglalható: tekints a skill telepítésére úgy, mint egy szoftver telepítésére.

## Mit mondanak a hivatalos források?

A Claude dokumentációjának biztonsági fejezete meglehetősen egyenes. Azt javasolja, hogy skilleket csak megbízható forrásból, vagyis a saját magad által írtakból vagy az Anthropictól származókból használj. Ha ismeretlen forrásból származó skillt kell használnod, „rendkívül óvatosnak” kell lenned, és használat előtt az elejétől a végéig át kell vizsgálnod.

Az Anthropic mérnöki írása is ugyanezt a vonalat követi: a kevésbé megbízható forrásból érkező skilleknél a csomagolt fájlokat, különösen a kódfüggőségeket és szkripteket javasolja átvizsgálni, valamint ellenőrizni a külső hálózatokhoz való csatlakozásra utasító részeket. A dokumentáció egy kockázatot külön is hangsúlyoz: a külső címekről adatot húzó skillek veszélyesek, mert a lehúzott tartalom rosszindulatú utasításokat rejthet.

## Mi történik a terepen?

Ezek a figyelmeztetések nem elméletiek. A Snyk biztonsági cég 2026. február 5-én közzétett „ToxicSkills” kutatásában 3984, a ClawHub és a skills.sh forrásból származó skillt vizsgált át. Az eredmények:

| Megállapítás | Szám |
|---|---|
| Átvizsgált skill | 3984 |
| Legalább egy biztonsági problémával | 1467 (36,82 százalék) |
| Legalább egy kritikus problémát tartalmazó | 534 (13,4 százalék) |
| Igazolt rosszindulatú tartalom | 76 |

A jelentés szerint a skills.sh adata csak az adott oldal kiválasztott első 100 skilljét fedi le, a teljes piaci számok pedig a ClawHubra vonatkoznak. A látott támadástípusok között vannak olyan telepítési utasítások, amelyek a felhasználót megbízhatatlan szoftver letöltésére és futtatására terelik, a hitelesítő adatokat a támadónak elküldő elrejtett (Base64-gyel vagy Unicode-dal álcázott) parancsok, a biztonsági ellenőrzések kikapcsolására és hátsó ajtó beépítésére irányuló kísérletek. Az igazolt rosszindulatú skillek 91 százalékában promptinjekciót (prompt injection) használtak.

> **Tudtad?** A Claude Súgóközpont szerint az Enterprise szervezetek bekapcsolhatják a skillellenőrzést, amely a feltöltött skilleket és bővítményeket rosszindulatú tartalom szempontjából vizsgálja. De ez biztonsági háló, az olvasást nem pótolja. Hogy egy skill mit csinál, a legjobban úgy érted meg, ha telepítés előtt magad nyitod meg és olvasod el a SKILL.md-jét és a szkriptjeit.

## Telepítés előtti ellenőrzőlista

A dokumentációban lévő javaslatokból és a terepen látott megállapításokból levont gyakorlati lista:

1. **Ellenőrizd a forrást.** Kié a tároló? Hivatalos cég vagy ismert fejlesztő, vagy egy ismert csomaghoz nagyon hasonló másolat (typosquatting)?
2. **Olvasd el a SKILL.md-t az elejétől a végéig.** Az olyan kifejezések, mint „előbb töltsd le ezt és futtasd”, „kapcsold ki a biztonsági beállítást”, „küldd el erre a címre”, vészjelzések.
3. **Vizsgáld át a scripts/ mappát.** Ha vannak olvashatatlan, elrejtett vagy Base64-gyel kódolt sorok, ne telepítsd.
4. **Ellenőrizd a külső hivatkozásokat.** Ha a skill egy webcímről húz utasítást vagy adatot, ne felejtsd el, hogy az a tartalom bármikor megváltozhat.
5. **Azt telepítsd, amire szükséged van.** A „mindet telepítsd” helyett az egyes skillek kiválasztása a kontextust és a támadási felületet is csökkenti.

## Legkisebb jogosultság és titkos kulcsok

Az is számít, hogy a skill hol fut. A Claude dokumentációja szerint a Claude API környezetben a skilleknek nincs hálózati hozzáférésük, és futás közben nem tudnak csomagot telepíteni. A claude.ai-n a hálózati hozzáférés a felhasználói és az adminisztrátori beállításoktól függően teljes, részleges vagy kikapcsolt lehet. A Claude Codeban viszont a skilleknek annyi hálózati hozzáférésük van, mint a számítógépeden bármely programnak. Vagyis a helyi ágensbe telepített skill a te jogosultságaiddal fut.

Ezért kritikus a legkisebb jogosultság elve. A Claude Codeban egy skill frontmatterében lévő allowed-tools mező lehetővé teszi, hogy a skill meghívásakor meghatározott eszközöket engedélykérés nélkül lehessen használni. A dokumentáció szerint ez az engedély a következő üzenetednél visszaáll. Ha mégis széles jogosultságokat látsz egy más által írt skillben, jó szokás, hogy tudatos jóváhagyás nélkül nem telepíted.

A titkos kulcsokra egyszerű a szabály: az API-kulcsokat, jelszavakat és hozzáférési tokeneket soha ne írd a SKILL.md-be vagy a skill mappájába. Amikor megosztod a skillt vagy tárolóba küldöd, a mappa minden tartalma is megy vele. A kulcsokat környezeti változókban vagy az általad használt eszköz biztonságos hitelesítőadat-tárolási módszerében tartsd, és a skillnek csak azt mondd el, hogyan férjen hozzájuk.

2026 októberétől a skillökoszisztéma nagyon gyorsan nő, és ez a növekedés az alkalmazásboltok első éveinek biztonsági gondjaira emlékeztet. A jó hír: egy skill elolvasása sokkal könnyebb, mint egy alkalmazás forráskódjának elolvasása, mert nagy része sima szöveg.

Te telepítés előtt megnyitod és elolvasod a skillt, vagy a csillagok és a letöltési számok alapján bízol benne?
