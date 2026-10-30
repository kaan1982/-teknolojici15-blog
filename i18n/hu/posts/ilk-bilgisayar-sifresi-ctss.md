---
title: "Az első számítógépes jelszót már az első évben ellopták"
excerpt: "Az MIT CTSS rendszere hozta el a jelszót a számítógépekhez. Nem sokkal később egy doktorandusz kinyomtatta az összes jelszót. Az első jelszó első feltörésének története."
hook: "Az első jelszó lett az első feltört jelszó"
fact: "1962"
factLabel: "Az első ismert jelszólopás"
category: "Elsők"
---
A jelszónak, amit naponta tucatszor beírsz, van egy szülőhelye: az 1960-as évek elején egyetlen óriási számítógép az MIT-n. Még érdekesebb, hogy a világ ismert első számítógépes jelszavait nem sokkal a használatba vétel után tömegesen ellopták. Nem egy hackerbanda, hanem egy több gépidőre vágyó doktorandusz.

## Egy számítógép, tucatnyi felhasználó

Az 1960-as évek elején a számítógépek termeket betöltő, egyszerre egy munkát végző gépek voltak. A programodat lyukkártyára nyomtattad, beállítottad a sorba, és órák múlva kaptad meg az eredményt. Az MIT-n Fernando Corbató csapata ezt akarta megváltoztatni: olyan rendszert, amelyben ugyanazt a gépet többen használhatják egyszerre terminálról, vagyis „időosztást”.

Ennek a rendszernek a neve CTSS (Compatible Time-Sharing System) lett. Először 1961 novemberében mutatták be az MIT módosított IBM 709 számítógépén, a következő években IBM 7094-eseken futott. Ahogy a Wikipedia is közli, a CTSS-t tekintik az első számítógépes rendszernek, amely jelszavas bejelentkezést alkalmazott.

## Miért kellett jelszó?

A probléma egyszerű volt: ugyanazon a gépen tucatnyi ember fájljai és a nekik kiosztott gépidő volt. Kellett valami mód arra, hogy megkülönböztessék, ki kicsoda. Corbató évekkel később a Wirednek így mesélte el: úgy tűnt, hogy minden felhasználóhoz egy jelszót mint zárat rendelni „nagyon egyszerű megoldás”.

Corbató az „első” cím kimondásával is óvatos volt. Azt mondta, az IBM 1960-as Sabre foglalási rendszere valószínűleg szintén használt jelszót, de erről nem maradt feljegyzés, ezért biztosat nem lehet tudni. Abban is eltérnek a források, hogy pontosan melyik évben került jelszó a CTSS-be. Azt tudjuk, hogy 1962 tavaszán a jelszórendszer működött, mert azon a tavaszon ellopták.

## Allan Scherr péntek esti terve

Allan Scherr az MIT-n doktoráló kutató volt, bonyolult szimulációkat futtatott. A Wired közlése szerint a CTSS-en heti négy órát osztottak ki neki (egyes források napi négy órát írnak). Ez neki nem volt elég.

A megoldása okos volt, de ugyanannyira csintalan is. A rendszer offline nyomtatási funkcióját kihasználva készített egy lyukkártyát, amely a jelszófájl kinyomtatását kérte. A kártyát egy péntek este későn betette a sorba, szombat reggel korán odament, és átvette a kinyomtatott papírt. Kezében volt mindenki jelszava a rendszerben.

A nyomok elmosására a jelszavakat más felhasználókkal is megosztotta. A Wired szerint egyikük, J.C.R. Licklider, belépett a laboratórium igazgatójának, Robert Fanónak a fiókjába, és gúnyos üzeneteket hagyott. Scherrt soha nem kapták el, és az esetet nagyjából negyed évszázaddal később maga vallotta be Fanónak. Fano megnyugtatta, hogy a doktori címét nem veszik el.

> **Tudtad?** A CTSS-ben nem ez volt az egyetlen jelszóválság. 1966-ban egy adminisztrátor hibája miatt a jelszófájl és a „nap üzenete” fájl felcserélődött, és mindenki, aki bejelentkezett, nyíltan látta az összes jelszót a képernyőjén. A rendszerfejlesztő Tom Van Vleck szerint ez az eset volt a kiindulópontja annak az ötletnek, hogy a jelszavakat egyirányú titkosítással tárolják. Persze az eset péntek délután ötkor történt, és Van Vleck órákig kényszerült jelszavakat cserélni.

## Akkor és most

| Akkor (1960-as évek) | Most |
|---|---|
| Egyetlen fájlban nyílt szöveges jelszavak | Egyirányúan lenyomatolt (hash) jelszavak |
| Egy lyukkártya elég volt a kinyomtatáshoz | Hozzáférési naplók, jogosultsági rétegek |
| A cél: a gépidő elosztása | A cél: az identitás, a pénz és a személyes adatok védelme |
| Egy gép, egy kampusz | Fejenként tucatnyi fiók |

Ez a történet azért tanulságos ma is, mert a jelszót a feltalálása óta az emberi viselkedés teszi próbára. Scherr nem bonyolult támadással törte fel a rendszert, csak a rendszer által amúgy is kínált funkciót használta váratlan módon. A mai adatszivárgások jelentős része is hasonló egyszerű hibákból ered.

Corbató az időosztás területén végzett munkájáért 1990-ben megkapta a Turing-díjat. A csapata által „egyszerű megoldásként” hozzáadott zár ma minden ajtón ott áll, az e-mailtől a bankodig, és a leggyengébb láncszem még mindig gyakran az az ember, aki a zárat használja.

Szerinted ma készen állunk arra, hogy teljesen felhagyjunk a jelszóval, és teljesen biometrikus azonosításra vagy hozzáférési kulcsra (passkey) váltsunk?
